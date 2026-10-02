'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4586],
    {
        4586: (t, e, r) => {
            r.d(e, { snapdom: () => rw });
            var n,
                i,
                o = Object.defineProperty,
                a = (t, e, r) => () => {
                    if (r) throw r[0];
                    try {
                        return (t && (e = t((t = 0))), e);
                    } catch (t) {
                        throw ((r = [t]), t);
                    }
                },
                l = (t, e) => {
                    for (var r in e) o(t, r, { get: e[r], enumerable: !0 });
                },
                s = a(() => {
                    i = {
                        image: new (n = class extends Map {
                            constructor(t = 100, ...e) {
                                (super(...e), (this._maxSize = t));
                            }
                            set(t, e) {
                                if (this.size >= this._maxSize && !this.has(t)) {
                                    let t = this.keys().next().value;
                                    void 0 !== t && this.delete(t);
                                }
                                return super.set(t, e);
                            }
                        })(100),
                        background: new n(100),
                        resource: new n(150),
                        defaultStyle: new n(30),
                        baseStyle: new n(50),
                        compress: new n(50),
                        computedStyle: new WeakMap(),
                        measureHints: new WeakMap(),
                        burstAdvice: new WeakMap(),
                        warnedReconcile: !1,
                        font: new Set(),
                        session: { styleMap: new Map(), styleCache: new WeakMap(), nodeMap: new Map() },
                    };
                });
            function c(t) {
                let e = t.match(/url\((['"]?)(.*?)(\1)\)/);
                if (!e) return null;
                let r = e[2].trim();
                return r.startsWith('#') ? null : r;
            }
            function u(t, e = 1) {
                let r = t.match(/^\s*-?(?:webkit-)?image-set\(([\s\S]*)\)\s*$/i);
                if (!r) return null;
                let n = [];
                for (let t of r[1].split(',')) {
                    let e = t.match(/url\((['"]?)(.*?)(\1)\)/);
                    if (!e) continue;
                    let r = t.match(/type\(\s*["']([^"']+)["']\s*\)/i);
                    if (r && !f.test(r[1].trim())) continue;
                    let i = t.match(/(\d+(?:\.\d+)?)\s*(x|dpi|dppx)/i),
                        o = 1;
                    if (i) {
                        let t = parseFloat(i[1]);
                        o = /dpi/i.test(i[2]) ? t / 96 : t;
                    }
                    n.push({ url: e[2].trim(), dppx: o });
                }
                return n.length ? (n.sort((t, e) => t.dppx - e.dppx), (n.find((t) => t.dppx >= e) || n[n.length - 1]).url) : null;
            }
            function d(t) {
                if (/%[0-9A-Fa-f]{2}/.test(t)) return t;
                try {
                    return encodeURI(t);
                } catch {
                    return t;
                }
            }
            var f,
                h = a(() => {
                    f = /^image\/(jpeg|jpg|png|gif|webp|avif|apng|svg\+xml|bmp|x-icon|vnd\.microsoft\.icon)\s*(;|$)/i;
                });
            function m(t) {
                return new Promise((e, r) => {
                    let n = new FileReader();
                    ((n.onload = () => e(String(n.result || ''))), (n.onerror = () => r(Error('read_failed'))), n.readAsDataURL(t));
                });
            }
            async function p(t, e = {}) {
                var r;
                let n = e.as ?? 'blob',
                    i = e.timeout ?? 3e3,
                    o = e.useProxy || '',
                    a = e.errorTTL ?? 8e3,
                    l = e.headers || {},
                    s = !!e.silent;
                if (/^data:/i.test(t))
                    try {
                        if ('text' === n) return { ok: !0, data: String(t), status: 200, url: t, fromCache: !1 };
                        if ('dataURL' === n) return { ok: !0, data: String(t), status: 200, url: t, fromCache: !1, mime: String(t).slice(5).split(';')[0] || '' };
                        let [, e = '', r = ''] = String(t).match(/^data:([^,]*),(.*)$/) || [],
                            i = /;base64/i.test(e) ? atob(r) : decodeURIComponent(r),
                            o = new Uint8Array([...i].map((t) => t.charCodeAt(0))),
                            a = new Blob([o], { type: (e || '').split(';')[0] || '' });
                        return { ok: !0, data: a, status: 200, url: t, fromCache: !1, mime: a.type || '' };
                    } catch {
                        return { ok: !1, data: null, status: 0, url: t, fromCache: !1, reason: 'special_url_error' };
                    }
                if (/^blob:/i.test(t))
                    try {
                        let e = await fetch(t);
                        if (!e.ok) return { ok: !1, data: null, status: e.status, url: t, fromCache: !1, reason: 'http_error' };
                        let r = await e.blob(),
                            i = r.type || e.headers.get('content-type') || '';
                        return 'dataURL' === n
                            ? { ok: !0, data: await m(r), status: e.status, url: t, fromCache: !1, mime: i }
                            : 'text' === n
                              ? { ok: !0, data: await r.text(), status: e.status, url: t, fromCache: !1, mime: i }
                              : { ok: !0, data: r, status: e.status, url: t, fromCache: !1, mime: i };
                    } catch {
                        return { ok: !1, data: null, status: 0, url: t, fromCache: !1, reason: 'network' };
                    }
                if (/^about:blank$/i.test(t))
                    return 'dataURL' === n
                        ? {
                              ok: !0,
                              data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==',
                              status: 200,
                              url: t,
                              fromCache: !1,
                              mime: 'image/png',
                          }
                        : { ok: !0, data: 'text' === n ? '' : new Blob([]), status: 200, url: t, fromCache: !1 };
                let c = [(r = { as: n, timeout: i, useProxy: o, errorTTL: a }).as || 'blob', r.timeout ?? 3e3, r.useProxy || '', r.errorTTL ?? 8e3, t].join('|'),
                    u = b.get(c);
                if (u && u.until > Date.now()) return { ...u.result, fromCache: !0 };
                u && b.delete(c);
                let f = y.get(c);
                if (f) return f;
                let h = !(function (t, e) {
                        if (
                            !e ||
                            /^data:|^blob:|^about:blank$/i.test(t) ||
                            (function (t, e) {
                                try {
                                    let r = 'u' > typeof location && location.href ? location.href : 'http://localhost/',
                                        n = e.includes('{url}') ? e.split('{url}')[0] : e,
                                        i = new URL(n || '.', r),
                                        o = new URL(t, r);
                                    if (o.origin === i.origin) return !0;
                                    let a = o.searchParams;
                                    if (a && (a.has('url') || a.has('target'))) return !0;
                                } catch {}
                                return !1;
                            })(t, e)
                        )
                            return !1;
                        try {
                            let e = 'u' > typeof location && location.href ? location.href : 'http://localhost/',
                                r = new URL(t, e);
                            return !('u' > typeof location) || r.origin !== location.origin;
                        } catch {
                            return !!e;
                        }
                    })(t, o)
                        ? t
                        : (function (t, e) {
                              if (!e) return t;
                              if (e.includes('{url}')) return e.replace('{urlRaw}', d(t)).replace('{url}', encodeURIComponent(t));
                              if (/[?&]url=?$/.test(e)) return `${e}${encodeURIComponent(t)}`;
                              if (e.endsWith('?')) return `${e}url=${encodeURIComponent(t)}`;
                              if (e.endsWith('/')) return `${e}${d(t)}`;
                              let r = e.includes('?') ? '&' : '?';
                              return `${e}${r}url=${encodeURIComponent(t)}`;
                          })(t, o),
                    w = e.credentials;
                if (!w)
                    try {
                        let e = 'u' > typeof location && location.href ? location.href : 'http://localhost/',
                            r = new URL(t, e);
                        w = 'u' > typeof location && r.origin === location.origin ? 'include' : 'omit';
                    } catch {
                        w = 'omit';
                    }
                let x = new AbortController(),
                    S = setTimeout(() => x.abort('timeout'), i),
                    v = (async () => {
                        try {
                            let r = await fetch(h, { signal: x.signal, credentials: w, headers: l });
                            if (!r.ok) {
                                let i = { ok: !1, data: null, status: r.status, url: h, fromCache: !1, reason: 'http_error' };
                                if ((a > 0 && b.set(c, { until: Date.now() + a, result: i }), !s)) {
                                    let e = `${r.status} ${r.statusText || ''}`.trim();
                                    g.warnOnce(
                                        `http:${r.status}:${n}:${new URL(t, location?.href ?? 'http://localhost/').origin}`,
                                        `HTTP error ${e} while fetching ${n} ${t}`,
                                    );
                                }
                                return (e.onError && e.onError(i), i);
                            }
                            if ('text' === n) return { ok: !0, data: await r.text(), status: r.status, url: h, fromCache: !1 };
                            let i = await r.blob(),
                                o = i.type || r.headers.get('content-type') || '';
                            return 'dataURL' === n
                                ? { ok: !0, data: await m(i), status: r.status, url: h, fromCache: !1, mime: o }
                                : { ok: !0, data: i, status: r.status, url: h, fromCache: !1, mime: o };
                        } catch (l) {
                            let r =
                                    l && 'object' == typeof l && 'name' in l && 'AbortError' === l.name
                                        ? String(l.message || '').includes('timeout')
                                            ? 'timeout'
                                            : 'abort'
                                        : 'network',
                                o = { ok: !1, data: null, status: 0, url: h, fromCache: !1, reason: r };
                            if ((!/^blob:/i.test(t) && a > 0 && b.set(c, { until: Date.now() + a, result: o }), !s)) {
                                let e = `${r}:${n}:${new URL(t, location?.href ?? 'http://localhost/').origin}`,
                                    o =
                                        'timeout' === r
                                            ? `Timeout after ${i}ms. Consider increasing timeout or using a proxy for ${t}`
                                            : 'abort' === r
                                              ? `Request aborted while fetching ${n} ${t}`
                                              : `Network/CORS issue while fetching ${n} ${t}. A proxy may be required`;
                                g.errorOnce(e, o);
                            }
                            return (e.onError && e.onError(o), o);
                        } finally {
                            (clearTimeout(S), y.delete(c));
                        }
                    })();
                return (y.set(c, v), v);
            }
            var g,
                y,
                b,
                w = a(() => {
                    (h(),
                        (g = (function (t = '[snapDOM]', { ttlMs: e = 5 * 6e4, maxEntries: r = 12 } = {}) {
                            let n = new Map(),
                                i = 0;
                            function o(o, a, l) {
                                if (i >= r) return;
                                let s = Date.now();
                                (n.get(a) || 0) > s ||
                                    (n.set(a, s + e),
                                    i++,
                                    'warn' === o && console && console.warn ? console.warn(`${t} ${l}`) : console && console.error && console.error(`${t} ${l}`));
                            }
                            return {
                                warnOnce(t, e) {
                                    o('warn', t, e);
                                },
                                errorOnce(t, e) {
                                    o('error', t, e);
                                },
                                reset() {
                                    (n.clear(), (i = 0));
                                },
                            };
                        })('[snapDOM]', { ttlMs: 3 * 6e4, maxEntries: 10 })),
                        (y = new Map()),
                        (b = new Map()));
                });
            async function x(t, e = {}) {
                if (/^((repeating-)?(linear|radial|conic)-gradient)\(/i.test(t) || 'none' === t.trim()) return t;
                let r = u(t, ('u' > typeof devicePixelRatio && devicePixelRatio) || 1) ?? c(t);
                if (!r) return t;
                let n = d(
                        (function (t, e) {
                            if (!t || /^(data|blob|about|#)/i.test(t.trim())) return t;
                            try {
                                let e = ('u' > typeof document && (document.baseURI || document.location?.href)) || 'http://localhost/';
                                return new URL(t, e).href;
                            } catch {
                                return t;
                            }
                        })(r),
                    ),
                    o = (e.useProxy || '') + '|' + n;
                if (i.background.has(o)) {
                    let t = i.background.get(o);
                    return t ? `url("${t}")` : 'none';
                }
                try {
                    let t = await p(n, { as: 'dataURL', useProxy: e.useProxy });
                    return t.ok ? (i.background.set(o, t.data), `url("${t.data}")`) : (i.background.set(o, null), 'none');
                } catch {
                    return (i.background.set(o, null), 'none');
                }
            }
            var S = a(() => {
                (s(), h(), w());
            });
            function v(t) {
                if (((t = String(t).toLowerCase()), N.has(t))) {
                    let e = {};
                    return (i.defaultStyle.set(t, e), e);
                }
                if (i.defaultStyle.has(t)) return i.defaultStyle.get(t);
                let e = document.getElementById('snapdom-sandbox');
                e ||
                    (((e = document.createElement('div')).id = 'snapdom-sandbox'),
                    e.setAttribute('data-snapdom-sandbox', 'true'),
                    e.setAttribute('aria-hidden', 'true'),
                    (e.style.position = 'absolute'),
                    (e.style.left = '-9999px'),
                    (e.style.top = '-9999px'),
                    (e.style.width = '0px'),
                    (e.style.height = '0px'),
                    (e.style.overflow = 'hidden'),
                    document.body.appendChild(e));
                let r = document.createElement(t);
                ((r.style.all = 'initial'), e.appendChild(r));
                let n = getComputedStyle(r),
                    o = {};
                for (let t of n) {
                    if (C(t)) continue;
                    let e = n.getPropertyValue(t);
                    o[t] = e;
                }
                return (e.removeChild(r), i.defaultStyle.set(t, o), o);
            }
            function C(t) {
                let e = T.get(t);
                if (void 0 === e) {
                    let r = String(t).toLowerCase();
                    ((e = P.has(r) || L.test(r) || R.test(r)), T.set(t, e));
                }
                return e;
            }
            function M(t, e) {
                return !_.has(t) && ('inline' === e || W.has(t) || I.has(t));
            }
            function $(t, e, r = !0, n = !1) {
                if (((e = String(e || '').toLowerCase()), N.has(e))) return '';
                let i = [],
                    o = v(e),
                    a = (t.display || '').toLowerCase(),
                    l = 'inline' === a,
                    s = M(e, a),
                    c = t['text-wrap-mode'] || t['white-space'] || '',
                    u = s && r && !l && ('nowrap' === c || 'pre' === c),
                    d = s && r && !u,
                    f = !1;
                for (let e in t) {
                    if (C(e)) continue;
                    let r = t[e];
                    if (d) {
                        if (O.has(e)) continue;
                        if (D.has(e)) {
                            r && r !== o[e] && (i.push(`${e}:${r}`), 'auto' !== r && (f = !0));
                            continue;
                        }
                    }
                    if (r && r !== o[e]) {
                        if (!u && ('width' === e || 'inline-size' === e) && r.endsWith('px') && r.includes('.')) {
                            let t = parseFloat(r);
                            if (Number.isFinite(t)) {
                                i.push(`${e}:${Math.ceil(16 * t) / 16}px`);
                                continue;
                            }
                        }
                        i.push(`${e}:${r}`);
                    }
                }
                if (d && !l && !n && !f) {
                    let e = t.width;
                    e && 'auto' !== e && e !== o.width && i.push(`min-width:${e}`);
                }
                return (i.sort(), i.join(';'));
            }
            function k(t, e = null) {
                let r = () => {
                    let t = { length: 0, getPropertyValue: () => '', item: () => '' };
                    return ((t[Symbol.iterator] = function* () {}), t);
                };
                if (t?.nodeType !== 1) {
                    let n = 'u' > typeof window ? window : null;
                    if (n && 'function' == typeof n.getComputedStyle)
                        try {
                            return n.getComputedStyle(t, e) || r();
                        } catch {}
                    return r();
                }
                let n = i.computedStyle.get(t);
                n || ((n = new Map()), i.computedStyle.set(t, n));
                let o = n.get(e);
                if (!o) {
                    let i = (function (t) {
                            try {
                                let e = t?.ownerDocument;
                                if (!e) return 'u' > typeof window ? window : null;
                                let r = e.defaultView;
                                if (r && 'function' == typeof r.getComputedStyle) return r;
                                if ('u' > typeof window && window.frames)
                                    for (let t = 0; t < window.frames.length; t++)
                                        try {
                                            if (window.frames[t]?.document === e) return window.frames[t];
                                        } catch {}
                            } catch {}
                            return 'u' > typeof window ? window : null;
                        })(t),
                        a = null;
                    try {
                        a = i && 'function' == typeof i.getComputedStyle ? i.getComputedStyle(t, e) : null;
                    } catch {}
                    if (!a && 'u' > typeof window && 'function' == typeof window.getComputedStyle)
                        try {
                            t.ownerDocument === document && (a = window.getComputedStyle(t, e));
                        } catch {}
                    ((o = a || r()), n.set(e, o));
                }
                return o;
            }
            function A(t) {
                let e = {};
                for (let r of t) e[r] = t.getPropertyValue(r);
                for (let t of H) {
                    let r = e[`border-${t}-style`],
                        n = e[`border-${t}-width`];
                    ('none' === r || 'hidden' === r || '0px' === n) && (delete e[`border-${t}-style`], delete e[`border-${t}-width`], delete e[`border-${t}-color`]);
                }
                return e;
            }
            function E(t) {
                let e = [],
                    r = 0,
                    n = 0;
                for (let i = 0; i < t.length; i++) {
                    let o = t[i];
                    ('(' === o && r++, ')' === o && r--, ',' === o && 0 === r && (e.push(t.slice(n, i).trim()), (n = i + 1)));
                }
                return (e.push(t.slice(n).trim()), e);
            }
            var F,
                N,
                R,
                L,
                P,
                T,
                W,
                I,
                _,
                O,
                D,
                H,
                j = a(() => {
                    (s(),
                        (F = new Set(['meta', 'script', 'noscript', 'title', 'link', 'template'])),
                        (N = new Set([
                            'meta',
                            'link',
                            'style',
                            'title',
                            'noscript',
                            'script',
                            'template',
                            'g',
                            'defs',
                            'use',
                            'marker',
                            'mask',
                            'clipPath',
                            'pattern',
                            'path',
                            'polygon',
                            'polyline',
                            'line',
                            'circle',
                            'ellipse',
                            'rect',
                            'filter',
                            'lineargradient',
                            'radialgradient',
                            'stop',
                        ])),
                        (R = /(?:^|-)(animation|transition)(?:-|$)/i),
                        (L =
                            /^(--.+|view-timeline|scroll-timeline|animation-trigger|offset-|position-try|app-region|interactivity|overlay|view-transition|-webkit-locale|-webkit-user-(?:drag|modify)|-webkit-tap-highlight-color|-webkit-text-security)$/i),
                        (P = new Set([
                            'cursor',
                            'pointer-events',
                            'touch-action',
                            'user-select',
                            'print-color-adjust',
                            'speak',
                            'reading-flow',
                            'reading-order',
                            'anchor-name',
                            'anchor-scope',
                            'container-name',
                            'container-type',
                            'timeline-scope',
                            'zoom',
                            'stroke-color',
                        ])),
                        (T = new Map()),
                        (W = new Set(['span', 'small', 'em', 'strong', 'b', 'i', 'u', 's', 'code', 'cite', 'mark', 'sub', 'sup'])),
                        (I = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th'])),
                        (_ = new Set(['img', 'video', 'canvas', 'svg', 'iframe', 'embed', 'object', 'input', 'textarea', 'select'])),
                        (O = new Set(['width', 'max-width', 'inline-size', 'max-inline-size'])),
                        (D = new Set(['min-width', 'min-inline-size'])),
                        (H = ['top', 'right', 'bottom', 'left']));
                });
            function U(t, { fast: e = !1 } = {}) {
                if (e) return t();
                'requestIdleCallback' in window ? requestIdleCallback(t, { timeout: 50 }) : setTimeout(t, 1);
            }
            function B() {
                if (typeof navigator > 'u') return !1;
                let t = navigator.userAgent || '',
                    e = t.toLowerCase(),
                    r = e.includes('safari') && !e.includes('chrome') && !e.includes('crios') && !e.includes('fxios') && !e.includes('android'),
                    n = /applewebkit/i.test(t),
                    i = /mobile/i.test(t),
                    o = !/safari/i.test(t),
                    a = /(micromessenger|wxwork|wecom|windowswechat|macwechat)/i.test(t),
                    l = /(baiduboxapp|baidubrowser|baidusearch|baiduboxlite)/i.test(e),
                    s = /ipad|iphone|ipod/.test(e) && n;
                return r || (n && i && o) || a || l || s;
            }
            var V = a(() => {});
            function q(t, e, r) {
                let n = t && 'object' == typeof t && (t.options || t);
                n && n.debug && (void 0 !== r ? console.warn('[snapdom]', e, r) : console.warn('[snapdom]', e));
            }
            var z = a(() => {}),
                X = a(() => {
                    (S(), j(), V(), h(), z());
                }),
                Y = {};
            function G(t) {
                let e = t.indexOf(',');
                return e >= 0 ? decodeURIComponent(t.slice(e + 1)) : '';
            }
            function Q(t) {
                return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(t)}`;
            }
            function J(t) {
                let e = [],
                    r = '',
                    n = 0;
                for (let i = 0; i < t.length; i++) {
                    let o = t[i];
                    ('(' === o && n++, ')' === o && (n = Math.max(0, n - 1)), ';' === o && 0 === n ? (e.push(r), (r = '')) : (r += o));
                }
                return (r.trim() && e.push(r), e.map((t) => t.trim()).filter(Boolean));
            }
            function K(t) {
                let e = J(t),
                    r = null,
                    n = null,
                    i = null,
                    o = [];
                for (let t of e) {
                    let e = t.indexOf(':');
                    if (e < 0) continue;
                    let a = t.slice(0, e).trim().toLowerCase(),
                        l = t.slice(e + 1).trim();
                    'box-shadow' === a ? (i = l) : 'filter' === a ? (r = l) : '-webkit-filter' === a ? (n = l) : o.push([a, l]);
                }
                if (i) {
                    let t = (function (t) {
                        let e = [],
                            r = '',
                            n = 0;
                        for (let i = 0; i < t.length; i++) {
                            let o = t[i];
                            ('(' === o && n++, ')' === o && (n = Math.max(0, n - 1)), ',' === o && 0 === n ? (e.push(r.trim()), (r = '')) : (r += o));
                        }
                        r.trim() && e.push(r.trim());
                        let i = [];
                        for (let t of e) {
                            if (/\binset\b/i.test(t)) continue;
                            let [e = '0px', r = '0px', n = '0px'] = t.match(/-?\d+(?:\.\d+)?px/gi) || [];
                            n = `${parseFloat(n) / 2}px`;
                            let o = t
                                    .replace(/-?\d+(?:\.\d+)?px/gi, '')
                                    .replace(/\binset\b/gi, '')
                                    .trim()
                                    .replace(/\s{2,}/g, ' '),
                                a = !!o && ',' !== o;
                            i.push(`drop-shadow(${e} ${r} ${n}${a ? ` ${o}` : ''})`);
                        }
                        return i.join(' ');
                    })(i);
                    t && ((r = r ? `${r} ${t}` : t), (n = n ? `${n} ${t}` : t));
                }
                let a = [...o];
                return (r && a.push(['filter', r]), n && a.push(['-webkit-filter', n]), a.map(([t, e]) => `${t}:${e}`).join(';'));
            }
            async function Z(t) {
                if (!/(?:box-shadow|text-shadow)\s*:[^;"}]*px/i.test(t)) return { svg: t, naturalOnly: !1 };
                let { native: e, flippedY: r } = await (ti ||
                    (ti = (async () => {
                        try {
                            let t = new Image();
                            ((t.decoding = 'sync'),
                                (t.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="20"><foreignObject width="8" height="20"><div xmlns="http://www.w3.org/1999/xhtml" style="width:4px;height:4px;margin-top:8px;background:#000;box-shadow:0 8px 0 0 #000"></div></foreignObject></svg>')}`),
                                await t.decode());
                            let e = document.createElement('canvas');
                            ((e.width = 8), (e.height = 20));
                            let r = e.getContext('2d', { willReadFrequently: !0 });
                            r.drawImage(t, 0, 0);
                            let n = r.getImageData(2, 18, 1, 1).data[3] > 128,
                                i = r.getImageData(2, 2, 1, 1).data[3] > 128;
                            return { native: n || i, flippedY: i && !n };
                        } catch {
                            return { native: !1, flippedY: !1 };
                        }
                    })()));
                try {
                    var n;
                    let i,
                        o = t;
                    return (
                        e ||
                            (o = o
                                .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (t, e) =>
                                    t.replace(
                                        e,
                                        e.replace(/([^{}]+)\{([^}]*)\}/g, (t, e, r) => `${e}{${K(r)}}`),
                                    ),
                                )
                                .replace(/style=(['"])([\s\S]*?)\1/gi, (t, e, r) => `style=${e}${K(r)}${e}`)),
                        r &&
                            ((n = o),
                            (i = (t) =>
                                J(t)
                                    .map((t) => {
                                        let r = t.indexOf(':');
                                        if (r < 0) return t;
                                        let n = t.slice(0, r).trim().toLowerCase();
                                        return 'text-shadow' === n || (e && 'box-shadow' === n)
                                            ? `${n}:${(function (t) {
                                                  let e = [],
                                                      r = 0,
                                                      n = 0;
                                                  for (let i = 0; i < t.length; i++) {
                                                      let o = t[i];
                                                      '(' === o
                                                          ? r++
                                                          : ')' === o
                                                            ? (r = Math.max(0, r - 1))
                                                            : ',' === o && 0 === r && (e.push(t.slice(n, i)), (n = i + 1));
                                                  }
                                                  return (
                                                      e.push(t.slice(n)),
                                                      e
                                                          .map((t) => {
                                                              let e = 0,
                                                                  r = 0,
                                                                  n = '',
                                                                  i = 0;
                                                              for (; i < t.length;) {
                                                                  let o = t[i];
                                                                  if (
                                                                      ('(' === o ? e++ : ')' === o && (e = Math.max(0, e - 1)), 0 === e && (0 === i || ' ' === t[i - 1]))
                                                                  ) {
                                                                      let e = /^-?\d*\.?\d+px/.exec(t.slice(i));
                                                                      if (e) {
                                                                          ((n += 2 == ++r ? `${-parseFloat(e[0])}px` : e[0]), (i += e[0].length));
                                                                          continue;
                                                                      }
                                                                  }
                                                                  ((n += o), i++);
                                                              }
                                                              return n;
                                                          })
                                                          .join(',')
                                                  );
                                              })(t.slice(r + 1))}`
                                            : t;
                                    })
                                    .join(';')),
                            (o = n =
                                (n = n.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (t, e) =>
                                    t.replace(
                                        e,
                                        e.replace(/([^{}]+)\{([^}]*)\}/g, (t, e, r) => `${e}{${i(r)}}`),
                                    ),
                                )).replace(/style=(['"])([\s\S]*?)\1/gi, (t, e, r) => `style=${e}${i(r)}${e}`))),
                        { svg: o, naturalOnly: !0 }
                    );
                } catch {
                    return { svg: t, naturalOnly: !0 };
                }
            }
            async function tt(t, e) {
                (t.setAttribute('data-snapdom-internal', ''),
                    (t.style.cssText = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none'),
                    document.body.appendChild(t));
                try {
                    let r = document.createElement('canvas');
                    ((r.width = 16), (r.height = 16));
                    let n = () =>
                            new Promise((t) => {
                                (requestAnimationFrame(t), setTimeout(t, 50));
                            }),
                        i = r.getContext('2d', { willReadFrequently: !0 });
                    if (!i) {
                        (await n(), await n());
                        return;
                    }
                    let o = performance.now() + (e ? 600 : 150);
                    for (;;) {
                        i.clearRect(0, 0, 16, 16);
                        try {
                            i.drawImage(t, 0, 0, 16, 16);
                        } catch {
                            return;
                        }
                        let e = i.getImageData(0, 0, 16, 16).data,
                            r = !1;
                        for (let t = 3; t < e.length; t += 4)
                            if (e[t] > 0) {
                                r = !0;
                                break;
                            }
                        if (r || performance.now() > o) return;
                        await n();
                    }
                } finally {
                    try {
                        t.remove();
                    } catch {}
                }
            }
            async function te(t, e) {
                let { width: r, height: n, scale: i = 1, dpr: o = 1, meta: a = {}, backgroundColor: l } = e,
                    s = t,
                    c = !1,
                    u = !1;
                if ('string' == typeof t && /^data:image\/svg\+xml/i.test(t)) {
                    let e =
                            ((function (t) {
                                let e = t.indexOf(',');
                                if (e < 0) return '';
                                let r = t.slice(e + 1, e + 1201).replace(/%[0-9A-Fa-f]?$/, '');
                                try {
                                    return decodeURIComponent(r);
                                } catch {
                                    return '';
                                }
                            })(t).match(/<svg\b[^>]*>/i) || [])[0] || '',
                        r = parseFloat((e.match(/\bwidth="([\d.]+)/i) || [])[1]),
                        n = parseFloat((e.match(/\bheight="([\d.]+)/i) || [])[1]),
                        i = Number.isFinite(r) && Number.isFinite(n) && r > 0 && n > 0 && 1 > Math.min(1, tr / r, tr / n, Math.sqrt(tn / (r * n)));
                    if (i || B())
                        try {
                            let e = G(t);
                            if (B()) {
                                let t = await Z(e);
                                ((e = t.svg), (c = t.naturalOnly), (u = /@font-face|data:image\//i.test(e)));
                            }
                            (i &&
                                (e = (function (t) {
                                    try {
                                        let e = t.match(/<svg\b[^>]*>/i);
                                        if (!e) return t;
                                        let r = e[0],
                                            n = parseFloat((r.match(/\bwidth="([\d.]+)/i) || [])[1]),
                                            i = parseFloat((r.match(/\bheight="([\d.]+)/i) || [])[1]);
                                        if (!Number.isFinite(n) || !Number.isFinite(i) || n <= 0 || i <= 0) return t;
                                        let o = Math.min(1, tr / n, tr / i, Math.sqrt(tn / (n * i)));
                                        if (o >= 1) return t;
                                        let a = Math.max(1, Math.floor(n * o)),
                                            l = Math.max(1, Math.floor(i * o));
                                        return (
                                            console.warn(
                                                `[snapDOM] Capture ${Math.round(n)}\xd7${Math.round(i)}px exceeds the browser image-decode limit (${tr}px/side); downscaling to ${a}\xd7${l}px. Lower \`scale\` or set \`width\`/\`height\` to control output size.`,
                                            ),
                                            t.replace(r, r.replace(/(\bwidth=")[\d.]+/i, `$1${a}`).replace(/(\bheight=")[\d.]+/i, `$1${l}`))
                                        );
                                    } catch {
                                        return t;
                                    }
                                })(e)),
                                (s = Q(e)));
                        } catch {
                            s = t;
                        }
                }
                let d = new Image();
                ((d.loading = 'eager'), (d.decoding = 'sync'), (d.crossOrigin = 'anonymous'), (d.src = s), await d.decode(), B() && (await tt(d, u)));
                let f = d.naturalWidth,
                    h = d.naturalHeight,
                    m = Number.isFinite(a.vbW) ? a.vbW : Number.isFinite(a.w0) ? a.w0 : f,
                    p = Number.isFinite(a.vbH) ? a.vbH : Number.isFinite(a.h0) ? a.h0 : h,
                    g,
                    y,
                    b = Number.isFinite(r),
                    w = Number.isFinite(n);
                if (b && w) ((g = Math.max(1, r)), (y = Math.max(1, n)));
                else if (b) {
                    let t = r / Math.max(1, m);
                    ((g = r), (y = p * t));
                } else if (w) {
                    let t = n / Math.max(1, p);
                    ((y = n), (g = m * t));
                } else ((g = f), (y = h));
                ((g *= i), (y *= i));
                let x = g * o,
                    S = y * o,
                    v = Math.max(x / tr, S / tr, Math.sqrt((x * S) / tn));
                v > 1 &&
                    (console.warn(
                        `[snapDOM] Output ${Math.round(x)}\xd7${Math.round(S)}px exceeds the browser canvas limit (${tr}px/side); downscaling. Lower \`scale\`/\`dpr\` or set \`width\`/\`height\`.`,
                    ),
                    (g /= v),
                    (y /= v));
                let C = document.createElement('canvas');
                ((C.width = g * o), (C.height = y * o), (C.style.width = `${g}px`), (C.style.height = `${y}px`));
                let M = C.getContext('2d');
                if (
                    (1 !== o && M.scale(o, o),
                    l && (M.save(), (M.fillStyle = l), M.fillRect(0, 0, g, y), M.restore()),
                    c && (Math.round(g * o) !== f || Math.round(y * o) !== h))
                ) {
                    let t = document.createElement('canvas');
                    ((t.width = f), (t.height = h), t.getContext('2d').drawImage(d, 0, 0), M.drawImage(t, 0, 0, g, y));
                } else M.drawImage(d, 0, 0, g, y);
                return C;
            }
            l(Y, { decodeSvgFromDataURL: () => G, encodeSvgToDataURL: () => Q, fixSafariShadows: () => Z, toCanvas: () => te });
            var tr,
                tn,
                ti,
                to = a(() => {
                    (V(), (tr = 16384), (tn = 0x10000000), (ti = null));
                }),
                ta = {};
            async function tl(t, e) {
                let r = await te(t, e),
                    n = await new Promise((t) => {
                        let n = () => t(r.toDataURL(`image/${e.format}`, e.quality));
                        try {
                            r.toBlob(
                                (e) => {
                                    if (!e) return n();
                                    let r = new FileReader();
                                    ((r.onload = () => t(String(r.result || ''))), (r.onerror = n), r.readAsDataURL(e));
                                },
                                `image/${e.format}`,
                                e.quality,
                            );
                        } catch {
                            n();
                        }
                    }),
                    i = new Image();
                return ((i.src = n), await i.decode(), (i.style.width = `${r.width / e.dpr}px`), (i.style.height = `${r.height / e.dpr}px`), i);
            }
            l(ta, { rasterize: () => tl });
            var ts = a(() => {
                    to();
                }),
                tc = {};
            async function tu(t, e) {
                let { scale: r = 1, width: n, height: i, meta: o = {} } = e,
                    a = Number.isFinite(n),
                    l = Number.isFinite(i),
                    s = (Number.isFinite(r) && 1 !== r) || a || l;
                if (B() && s)
                    try {
                        let { svg: e } = await Z(G(t)),
                            s = (e.match(/<svg\b[^>]*>/i) || [])[0] || '',
                            c = parseFloat((s.match(/\bwidth="([\d.]+)/i) || [])[1]),
                            u = parseFloat((s.match(/\bheight="([\d.]+)/i) || [])[1]);
                        if (!Number.isFinite(c) || !Number.isFinite(u)) throw Error('svg without dimensions');
                        let d = Number.isFinite(o.vbW) ? o.vbW : Number.isFinite(o.w0) ? o.w0 : c,
                            f = Number.isFinite(o.vbH) ? o.vbH : Number.isFinite(o.h0) ? o.h0 : u,
                            h,
                            m;
                        a && l
                            ? ((h = n), (m = i))
                            : a
                              ? ((h = n), (m = Math.round((n / Math.max(1, d)) * f)))
                              : l
                                ? ((m = i), (h = Math.round((i / Math.max(1, f)) * d)))
                                : ((h = Math.round(c * r)), (m = Math.round(u * r)));
                        let p = e.replace(/width="[^"]*"/, `width="${h}"`).replace(/height="[^"]*"/, `height="${m}"`),
                            g = new Image();
                        return (
                            (g.decoding = 'sync'), (g.loading = 'eager'), (g.src = Q(p)), await g.decode(), (g.style.width = `${h}px`), (g.style.height = `${m}px`), g
                        );
                    } catch (r) {
                        return (q(e, 'safari vector toImg failed, falling back to PNG', r), tl(t, { ...e, format: 'png', quality: 1, meta: o }));
                    }
                let c = new Image();
                if (((c.decoding = 'sync'), (c.loading = 'eager'), (c.src = t), await c.decode(), a && l)) ((c.style.width = `${n}px`), (c.style.height = `${i}px`));
                else if (a) {
                    let t = Number.isFinite(o.vbW) ? o.vbW : Number.isFinite(o.w0) ? o.w0 : c.naturalWidth,
                        e = Number.isFinite(o.vbH) ? o.vbH : Number.isFinite(o.h0) ? o.h0 : c.naturalHeight,
                        r = n / Math.max(1, t);
                    ((c.style.width = `${n}px`), (c.style.height = `${Math.round(e * r)}px`));
                } else if (l) {
                    let t = Number.isFinite(o.vbW) ? o.vbW : Number.isFinite(o.w0) ? o.w0 : c.naturalWidth,
                        e = i / Math.max(1, Number.isFinite(o.vbH) ? o.vbH : Number.isFinite(o.h0) ? o.h0 : c.naturalHeight);
                    ((c.style.height = `${i}px`), (c.style.width = `${Math.round(t * e)}px`));
                } else {
                    let n = Math.round(c.naturalWidth * r),
                        i = Math.round(c.naturalHeight * r);
                    if (((c.style.width = `${n}px`), (c.style.height = `${i}px`), 'string' == typeof t && t.startsWith('data:image/svg+xml')))
                        try {
                            let e = decodeURIComponent(t.split(',')[1])
                                .replace(/width="[^"]*"/, `width="${n}"`)
                                .replace(/height="[^"]*"/, `height="${i}"`);
                            c.src = t = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`;
                        } catch (t) {
                            q(e, 'SVG width/height patch in toImg failed', t);
                        }
                }
                return c;
            }
            l(tc, { toImg: () => tu, toSvg: () => tu });
            var td = a(() => {
                    (X(), ts(), to());
                }),
                tf = {};
            async function th(t, e) {
                let r = e.type;
                if ('svg' === r) return new Blob([decodeURIComponent(t.split(',')[1])], { type: 'image/svg+xml' });
                let n = await te(t, e);
                return new Promise((t) => n.toBlob((e) => t(e), `image/${r}`, e.quality));
            }
            l(tf, { toBlob: () => th });
            var tm = a(() => {
                    to();
                }),
                tp = {};
            async function tg(t, e) {
                let r = new File([t], e, { type: t.type });
                if (!navigator.canShare?.({ files: [r] })) return !1;
                try {
                    await navigator.share({ files: [r], title: e });
                } catch (t) {
                    if ('AbortError' !== t.name) return !1;
                }
                return !0;
            }
            async function ty(t, e) {
                let r = new Set(['png', 'jpeg', 'jpg', 'webp', 'svg']),
                    n = (e?.type || '').toLowerCase(),
                    i = r.has(n) ? n : '',
                    o = (e?.format || i || '').toLowerCase(),
                    a = 'jpg' === o ? 'jpeg' : o || 'png',
                    l = e?.filename || `snapdom.${a}`,
                    s = { ...(e || {}), format: a, type: a };
                s.dpr = 1;
                let c = (function () {
                    if (typeof navigator > 'u') return !1;
                    if (navigator.userAgentData) return 'iOS' === navigator.userAgentData.platform;
                    let t = navigator.userAgent || '',
                        e = /iPhone|iPad|iPod/.test(t),
                        r = navigator.maxTouchPoints > 2 && /Macintosh/.test(t);
                    return e || r;
                })();
                if ('svg' === a) {
                    let e = await th(t, { ...s, type: 'svg' });
                    if (c && (await tg(e, l))) return;
                    let r = URL.createObjectURL(e),
                        n = document.createElement('a');
                    ((n.href = r), (n.download = l), document.body.appendChild(n), n.click(), URL.revokeObjectURL(r), n.remove());
                    return;
                }
                let u = await te(t, s);
                if (c) {
                    let t = `image/${a}`,
                        r = await new Promise((r) => u.toBlob(r, t, e?.quality));
                    if (r && (await tg(r, l))) return;
                }
                let d = document.createElement('a');
                ((d.href = u.toDataURL(`image/${a}`, e?.quality)), (d.download = l), document.body.appendChild(d), d.click(), d.remove());
            }
            l(tp, { download: () => ty });
            var tb = a(() => {
                (tm(), to(), V());
            });
            (X(), X(), s());
            var tw = new WeakMap(),
                tx = new Map(),
                tS = 0;
            function tv() {
                (tS++, tx.size > 2e3 && tx.clear());
            }
            function tC(t) {
                let e = t && (1 === t.nodeType ? t : t.parentElement);
                return !!(e && e.closest && e.closest('[data-snapdom-sandbox],[data-snapdom-internal],[data-snapdom]'));
            }
            function tM(t) {
                for (let e of t)
                    if (!tC(e.target)) {
                        if ('childList' === e.type) {
                            let t = !0;
                            for (let r of e.addedNodes)
                                if (!tC(r)) {
                                    t = !1;
                                    break;
                                }
                            if (t) {
                                for (let r of e.removedNodes)
                                    if (!tC(r)) {
                                        t = !1;
                                        break;
                                    }
                            }
                            if (t) continue;
                        }
                        return !0;
                    }
                return !1;
            }
            var t$ = !1,
                tk = [
                    'mask',
                    'mask-image',
                    '-webkit-mask',
                    '-webkit-mask-image',
                    'mask-source',
                    'mask-box-image-source',
                    'mask-border-source',
                    '-webkit-mask-box-image-source',
                    'border-image',
                    'border-image-source',
                ];
            function tA(t) {
                let e = tw.get(t);
                if (e && e.epoch === tS) {
                    let t = e.snapshot && e.snapshot.__needsBgInline;
                    if (void 0 !== t) return t;
                }
                return !0;
            }
            var tE = new WeakMap();
            async function tF(t, e, r, n) {
                let o;
                if ('STYLE' === t.tagName) return;
                let a =
                        r && r.session && r.persist
                            ? r
                            : r && (r.styleMap || r.styleCache || r.nodeMap)
                              ? {
                                    session: r,
                                    persist: {
                                        snapshotKeyCache: tx,
                                        defaultStyle: i.defaultStyle,
                                        baseStyle: i.baseStyle,
                                        image: i.image,
                                        resource: i.resource,
                                        background: i.background,
                                        font: i.font,
                                    },
                                    options: n || {},
                                }
                              : {
                                    session: i.session,
                                    persist: {
                                        snapshotKeyCache: tx,
                                        defaultStyle: i.defaultStyle,
                                        baseStyle: i.baseStyle,
                                        image: i.image,
                                        resource: i.resource,
                                        background: i.background,
                                        font: i.font,
                                    },
                                    options: r || n || {},
                                },
                    l = (a.options && a.options.cache) || 'auto';
                ('disabled' !== l &&
                    (function (t = document.documentElement) {
                        if (t$) return;
                        t$ = !0;
                        let e = (t) => {
                            tM(t) && tv();
                        };
                        try {
                            new MutationObserver(e).observe(t, { subtree: !0, childList: !0, characterData: !0, attributes: !0 });
                        } catch {}
                        try {
                            new MutationObserver(e).observe(document.head, { subtree: !0, childList: !0, characterData: !0, attributes: !0 });
                        } catch {}
                        try {
                            let t = document.fonts;
                            t && (t.addEventListener?.('loadingdone', tv), t.ready?.then(() => tv()).catch(() => {}));
                        } catch {}
                    })(document.documentElement),
                    'disabled' !== l || a.session.__bumpedForDisabled || (tv(), tx.clear(), (a.session.__bumpedForDisabled = !0)));
                let { session: s, persist: c } = a;
                if (!s.styleCache.has(t)) {
                    let e = null;
                    try {
                        e = getComputedStyle(t);
                    } catch {}
                    s.styleCache.set(t, e || getComputedStyle(document.documentElement));
                }
                let u = s.styleCache.get(t);
                t.getAttribute?.('style') &&
                    (function (t, e, r) {
                        if (!(!t.style || 0 === t.style.length))
                            for (let n = 0; n < t.style.length; n++) {
                                let i = t.style[n],
                                    o = r.getPropertyValue(i);
                                o && e.style.setProperty(i, o);
                            }
                    })(t, e, u);
                let d = u.getPropertyValue('animation-name');
                e && e.style && d && 'none' !== d && e.style.setProperty('animation', 'none', 'important');
                let f = (function (t, e = null, r = {}) {
                        let n = tw.get(t),
                            i = !!(r && r.embedFonts),
                            o = (r && r.excludeStyleProps) || null;
                        if (n && n.epoch === tS && n.embedFonts === i && n.excludeStyleProps === o) return n.snapshot;
                        let a = e || getComputedStyle(t),
                            l = (function (t, e = {}) {
                                let r = {},
                                    n = t.getPropertyValue('visibility'),
                                    i = e.excludeStyleProps;
                                for (let e = 0; e < t.length; e++) {
                                    let n = t[e];
                                    if (C(n) || (i && ((i instanceof RegExp && i.test(n)) || ('function' == typeof i && i(n))))) continue;
                                    let o = t.getPropertyValue(n);
                                    (('background-image' === n || 'content' === n) && o.includes('url(') && !o.includes('data:') && (o = 'none'), (r[n] = o));
                                }
                                for (let e of [
                                    'text-decoration-line',
                                    'text-decoration-color',
                                    'text-decoration-style',
                                    'text-decoration-thickness',
                                    'text-underline-offset',
                                    'text-decoration-skip-ink',
                                ])
                                    if (!r[e])
                                        try {
                                            let n = t.getPropertyValue(e);
                                            n && (r[e] = n);
                                        } catch {}
                                for (let e of ['-webkit-text-stroke', '-webkit-text-stroke-width', '-webkit-text-stroke-color', 'paint-order'])
                                    if (!r[e])
                                        try {
                                            let n = t.getPropertyValue(e);
                                            n && (r[e] = n);
                                        } catch {}
                                if (e.embedFonts) {
                                    for (let e of [
                                        'font-feature-settings',
                                        'font-variation-settings',
                                        'font-kerning',
                                        'font-variant',
                                        'font-variant-ligatures',
                                        'font-optical-sizing',
                                    ])
                                        if (!r[e])
                                            try {
                                                let n = t.getPropertyValue(e);
                                                n && (r[e] = n);
                                            } catch {}
                                }
                                'hidden' === n && (r.opacity = '0');
                                try {
                                    'hidden' === (r['content-visibility'] || t.getPropertyValue('content-visibility')) && (r.visibility = 'hidden');
                                } catch {}
                                let o = !1;
                                {
                                    let e = t.getPropertyValue('background-image');
                                    if ((e && 'none' !== e && (o = !0), !o)) {
                                        let e = t.getPropertyValue('background-color');
                                        e && 'rgba(0, 0, 0, 0)' !== e && 'transparent' !== e && (o = !0);
                                    }
                                    if (!o)
                                        for (let e of tk) {
                                            let r = t.getPropertyValue(e);
                                            if (r && 'none' !== r) {
                                                o = !0;
                                                break;
                                            }
                                        }
                                    if (!o) {
                                        let e = t.getPropertyValue('background');
                                        e && /url\s*\(/i.test(e) && (o = !0);
                                    }
                                }
                                Object.defineProperty(r, '__needsBgInline', { value: o, enumerable: !1 });
                                let a = parseFloat(t.getPropertyValue('border-top-width') || 0) || 0,
                                    l = parseFloat(t.getPropertyValue('border-right-width') || 0) || 0,
                                    s = parseFloat(t.getPropertyValue('border-bottom-width') || 0) || 0,
                                    c = parseFloat(t.getPropertyValue('border-left-width') || 0) || 0;
                                if (0 === a && 0 === l && 0 === s && 0 === c) {
                                    let e = (t.getPropertyValue('border-image-source') || '').trim();
                                    for (let t of [
                                        'border',
                                        'border-top',
                                        'border-right',
                                        'border-bottom',
                                        'border-left',
                                        'border-width',
                                        'border-style',
                                        'border-color',
                                        'border-top-width',
                                        'border-top-style',
                                        'border-top-color',
                                        'border-right-width',
                                        'border-right-style',
                                        'border-right-color',
                                        'border-bottom-width',
                                        'border-bottom-style',
                                        'border-bottom-color',
                                        'border-left-width',
                                        'border-left-style',
                                        'border-left-color',
                                        'border-block',
                                        'border-block-width',
                                        'border-block-style',
                                        'border-block-color',
                                        'border-inline',
                                        'border-inline-width',
                                        'border-inline-style',
                                        'border-inline-color',
                                    ])
                                        delete r[t];
                                    (e && 'none' !== e) || (r.border = 'none');
                                }
                                return r;
                            })(a, r);
                        return (
                            (function (t, e, r) {
                                var n, i;
                                if (t instanceof HTMLElement && t.style && t.style.height) return;
                                let o = t.tagName && t.tagName.toLowerCase();
                                if (!o || !['div', 'section', 'article', 'main', 'aside', 'header', 'footer', 'nav'].includes(o)) return;
                                let a = parseFloat(e.height);
                                if (
                                    (Number.isFinite(a) && t.scrollHeight > 0 && Math.abs(a - t.scrollHeight) > 2) ||
                                    (e.aspectRatio && 'none' !== e.aspectRatio && 'auto' !== e.aspectRatio)
                                )
                                    return;
                                let l = e.display || '';
                                if (
                                    l.includes('flex') ||
                                    l.includes('grid') ||
                                    (n = t) instanceof HTMLImageElement ||
                                    n instanceof HTMLCanvasElement ||
                                    n instanceof HTMLVideoElement ||
                                    n instanceof HTMLIFrameElement ||
                                    n instanceof SVGElement ||
                                    n instanceof HTMLObjectElement ||
                                    n instanceof HTMLEmbedElement
                                )
                                    return;
                                let s = e.position;
                                if (
                                    'absolute' === s ||
                                    'fixed' === s ||
                                    'sticky' === s ||
                                    'none' !== e.transform ||
                                    ((i = e).backgroundImage && 'none' !== i.backgroundImage) ||
                                    (i.backgroundColor && 'rgba(0, 0, 0, 0)' !== i.backgroundColor && 'transparent' !== i.backgroundColor) ||
                                    (parseFloat(i.borderTopWidth) || 0) > 0 ||
                                    (parseFloat(i.borderBottomWidth) || 0) > 0 ||
                                    (parseFloat(i.paddingTop) || 0) > 0 ||
                                    (parseFloat(i.paddingBottom) || 0) > 0 ||
                                    'visible' !== (i.overflowBlock || i.overflowY || 'visible') ||
                                    tN(t)
                                )
                                    return;
                                let c = e.overflowX || e.overflow || 'visible',
                                    u = e.overflowY || e.overflow || 'visible';
                                if ('visible' !== c || 'visible' !== u) return;
                                let d = e.clip;
                                (d && 'auto' !== d && 'rect(auto, auto, auto, auto)' !== d) ||
                                    'hidden' === e.visibility ||
                                    '0' === e.opacity ||
                                    ((function (t) {
                                        for (let e = t.firstChild; e; e = e.nextSibling) if (3 === e.nodeType && /\S/.test(e.nodeValue)) return !0;
                                        let e = t.firstElementChild,
                                            r = t.lastElementChild;
                                        if ((e && 'BR' === e.tagName) || (r && 'BR' === r.tagName)) return !0;
                                        for (let e = t.firstElementChild; e; e = e.nextElementSibling) {
                                            let t = k(e);
                                            if ('none' === t.display) continue;
                                            let r = t.position;
                                            if ('absolute' !== r && 'fixed' !== r) return !0;
                                        }
                                        return !1;
                                    })(t) &&
                                        (delete r.height, delete r['block-size']));
                            })(t, a, l),
                            tw.set(t, { epoch: tS, snapshot: l, embedFonts: i, excludeStyleProps: o }),
                            l
                        );
                    })(t, u, a.options),
                    h = tN(t);
                if (h) {
                    let t = u.getPropertyValue('min-width');
                    (t && 'auto' !== t && '0px' !== t) || (f['min-width'] = '0px');
                }
                let m = t.tagName?.toLowerCase() || 'div',
                    p =
                        (o = tE.get(f)) ||
                        ((o = Object.entries(f)
                            .sort((t, e) => (t[0] < e[0] ? -1 : +(t[0] > e[0])))
                            .map(([t, e]) => `${t}:${e}`)
                            .join(';')),
                        tE.set(f, o),
                        o),
                    g = !0;
                if (M(m, (f.display || '').toLowerCase())) {
                    ((g = (function (t) {
                        for (let e = t.firstChild; e; e = e.nextSibling) {
                            if (3 === e.nodeType && /\S/.test(e.nodeValue || '')) return !0;
                            if (1 === e.nodeType) {
                                let t = k(e).position;
                                if ('absolute' !== t && 'fixed' !== t) return !0;
                            }
                        }
                        return !1;
                    })(t)),
                        (p = `${p}|${m}${g ? '|c' : ''}${h ? '|f' : ''}`));
                    let e = f['text-wrap-mode'] || f['white-space'] || '';
                    g && 'nowrap' !== e && 'pre' !== e && (s.reconcileRisk = (s.reconcileRisk || 0) + 1);
                }
                let y = c.snapshotKeyCache.get(p);
                (void 0 === y && ((y = $(f, m, g, h)), c.snapshotKeyCache.set(p, y)), s.styleMap.set(e, y));
            }
            function tN(t) {
                let e = t.parentElement;
                if (!e) return !1;
                let r = k(e).display || '';
                return r.includes('flex') || r.includes('grid');
            }
            j();
            var tR = ['fill', 'stroke', 'color', 'background-color', 'stop-color'],
                tL = new Set(['symbol', 'defs', 'pattern', 'marker', 'linearGradient', 'radialGradient', 'filter']);
            function tP(t) {
                let e = t;
                for (; e && 1 === e.nodeType;) {
                    if ('http://www.w3.org/2000/svg' === e.namespaceURI) {
                        if ('mask' === e.localName || 'clipPath' === e.localName) return !1;
                        if (tL.has(e.localName)) return !0;
                    }
                    e = e.parentNode;
                }
                return !1;
            }
            var tT = new Map();
            function tW(t) {
                return !!(!t || t.startsWith('data:') || t.startsWith('blob:') || (/^data:image\/(gif|png|svg)/.test(t) && t.length < 200));
            }
            (X(), X(), s(), w(), w());
            var tI = 'img[data-src], img[data-lazy-src], img[data-original], img[data-hi-res-src], img[data-srcset], img[data-lazy-srcset]',
                t_ = /^image\/(jpeg|jpg|png|gif|webp|avif|apng|svg\+xml|bmp|x-icon|vnd\.microsoft\.icon)\s*(;|$)/i;
            function tO(t, e) {
                if (!t) return null;
                let r = 0;
                try {
                    r = e ? e.getBoundingClientRect().width || e.width : 0;
                } catch {}
                r || (r = window.innerWidth || 1e3);
                let n = [];
                for (let e of t.split(',')) {
                    let t = e.trim().split(/\s+/);
                    if (!t[0]) continue;
                    let i = t[1] || '',
                        o = 1;
                    (/^\d*\.?\d+x$/i.test(i) ? (o = parseFloat(i)) : /^\d+w$/i.test(i) && (o = parseInt(i, 10) / r), n.push({ url: t[0], d: o }));
                }
                if (!n.length) return null;
                n.sort((t, e) => t.d - e.d);
                let i = window.devicePixelRatio || 1;
                return (n.find((t) => t.d >= i) || n[n.length - 1]).url;
            }
            function tD(t, e) {
                let r = t.currentSrc || '';
                if (r && !tW(r)) return r;
                let n = e.querySelectorAll('source[srcset]'),
                    i = null;
                for (let e of n) {
                    let r = e.getAttribute('srcset');
                    if (!r || tW(r)) continue;
                    let n = e.getAttribute('type');
                    if (n && !t_.test(n.trim())) continue;
                    let o = e.getAttribute('media');
                    if (o)
                        try {
                            if (window.matchMedia(o).matches) return tO(r, t);
                        } catch {}
                    i || (i = tO(r, t));
                }
                return i;
            }
            async function tH(t, e = {}) {
                if (!t || t?.nodeType !== 1 || !1 === e.resolvePicturePlaceholders) return null;
                let {
                    timeout: r,
                    concurrency: n,
                    resolveLazySrc: i,
                    silent: o,
                    useProxy: a,
                } = (function (t = {}) {
                    let e = t.pictureResolver && 'object' == typeof t.pictureResolver ? t.pictureResolver : {};
                    return {
                        timeout: e.timeout ?? 5e3,
                        concurrency: e.concurrency ?? 4,
                        resolveLazySrc: !1 !== e.resolveLazySrc,
                        silent: e.silent ?? !1,
                        useProxy: 'string' == typeof t.useProxy ? t.useProxy : '',
                    };
                })(e);
                if (!(t && t?.nodeType === 1 && (t.matches?.('picture') || t.querySelector('picture') || (i && (t.matches?.(tI) || t.querySelector(tI)))))) return null;
                let l = [],
                    s = [];
                async function c(t) {
                    let e = await p(t, { as: 'dataURL', timeout: r, useProxy: a, silent: !0 });
                    return e.ok ? e.data : null;
                }
                async function u(t) {
                    for (let e = 0; e < t.length; e += n) {
                        let r = t.slice(e, e + n);
                        await Promise.allSettled(r.map((t) => t()));
                    }
                }
                let d = Array.from(t.querySelectorAll('picture'));
                for (let e of (t.matches?.('picture') && d.unshift(t), d)) {
                    let t = e.querySelector('img');
                    if (!t || !tW(t.getAttribute('src') || '')) continue;
                    let r = tD(t, e);
                    r &&
                        s.push(async () => {
                            let n = await c(r);
                            if (!n) {
                                o || console.warn(`[snapdom:picture-resolver] Failed to fetch: ${r.slice(0, 60)}`);
                                return;
                            }
                            let i = t.getAttribute('src'),
                                a = t.getAttribute('srcset'),
                                s = t.getAttribute('sizes'),
                                u = [];
                            for (let r of ((t.src = n), t.setAttribute('src', n), t.removeAttribute('srcset'), t.removeAttribute('sizes'), e.querySelectorAll('source')))
                                (u.push({ el: r, parent: r.parentElement, next: r.nextSibling }), r.remove());
                            l.push(() => {
                                for (let { el: e, parent: r, next: n } of (null !== i ? t.setAttribute('src', i) : t.removeAttribute('src'),
                                null !== a && t.setAttribute('srcset', a),
                                null !== s && t.setAttribute('sizes', s),
                                u))
                                    r && r.insertBefore(e, n);
                            });
                        });
                }
                if (i) {
                    let e = Array.from(t.querySelectorAll('img'));
                    for (let r of ('img' === t.localName && e.unshift(t), e)) {
                        if (r.closest('picture') && tW(r.getAttribute('src') || '')) continue;
                        let t = r.getAttribute('src') || '',
                            e = (function (t) {
                                for (let e of [
                                    t.getAttribute('data-src'),
                                    t.getAttribute('data-lazy-src'),
                                    t.getAttribute('data-original'),
                                    t.getAttribute('data-hi-res-src'),
                                ])
                                    if (e && !tW(e)) return e;
                                let e = t.getAttribute('data-srcset') || t.getAttribute('data-lazy-srcset');
                                if (e) {
                                    let t = e.split(',')[0].trim().split(/\s+/)[0];
                                    if (t && !tW(t)) return t;
                                }
                                return null;
                            })(r);
                        e &&
                            tW(t) &&
                            s.push(async () => {
                                let t = await c(e);
                                if (!t) return;
                                let n = r.getAttribute('src');
                                ((r.src = t),
                                    r.setAttribute('src', t),
                                    r.removeAttribute('srcset'),
                                    r.removeAttribute('sizes'),
                                    l.push(() => {
                                        null !== n ? r.setAttribute('src', n) : r.removeAttribute('src');
                                    }));
                            });
                    }
                }
                return 0 === s.length
                    ? null
                    : (await u(s),
                      async function () {
                          for (let t of l)
                              try {
                                  t();
                              } catch {}
                      });
            }
            function tj(t, e, r) {
                return r
                    ? Promise.all(t.map((t) => new Promise((r) => e(t, r))))
                    : Promise.all(
                          t.map(
                              (t) =>
                                  new Promise((n) => {
                                      !(function i() {
                                          U(
                                              (r) => {
                                                  !r || 'function' != typeof r.timeRemaining || r.timeRemaining() > 0 ? e(t, n) : i();
                                              },
                                              { fast: r },
                                          );
                                      })();
                                  }),
                          ),
                      );
            }
            async function tU(t, e = 3) {
                let r = () => {
                        try {
                            return t.contentDocument || t.contentWindow?.document || null;
                        } catch {
                            return null;
                        }
                    },
                    n = r(),
                    i = 0;
                for (; i < e && (!n || (!n.body && !n.documentElement));) (await new Promise((t) => setTimeout(t, 0)), (n = r()), i++);
                return n && (n.body || n.documentElement) ? n : null;
            }
            function tB(t) {
                let e = 0,
                    r = 0;
                if ((t.offsetWidth > 0 && (e = t.offsetWidth), t.offsetHeight > 0 && (r = t.offsetHeight), 0 === e || 0 === r))
                    try {
                        let n = getComputedStyle(t);
                        if (0 === e) {
                            let t = parseFloat(n.width);
                            !isNaN(t) && t > 0 && (e = t);
                        }
                        if (0 === r) {
                            let t = parseFloat(n.height);
                            !isNaN(t) && t > 0 && (r = t);
                        }
                    } catch {}
                if (0 === e || 0 === r)
                    try {
                        if (0 === e) {
                            let r = parseFloat(t.getAttribute('width'));
                            !isNaN(r) && r > 0 && (e = r);
                        }
                        if (0 === r) {
                            let e = parseFloat(t.getAttribute('height'));
                            !isNaN(e) && e > 0 && (r = e);
                        }
                    } catch {}
                if ((0 === e || 0 === r) && (t.naturalWidth || t.naturalHeight))
                    try {
                        (0 === e && t.naturalWidth > 0 && (e = t.naturalWidth), 0 === r && t.naturalHeight > 0 && (r = t.naturalHeight));
                    } catch {}
                return { width: e, height: r };
            }
            async function tV(t, e, r) {
                let n = await tU(t, 3);
                if (!n) throw Error('iframe document not accessible/ready');
                let {
                        contentWidth: o,
                        contentHeight: a,
                        rect: l,
                    } = (function (t) {
                        let e = t.getBoundingClientRect(),
                            r = 0,
                            n = 0,
                            i = 0,
                            o = 0;
                        try {
                            let e = getComputedStyle(t);
                            ((r = parseFloat(e.borderLeftWidth) || 0),
                                (n = parseFloat(e.borderRightWidth) || 0),
                                (i = parseFloat(e.borderTopWidth) || 0),
                                (o = parseFloat(e.borderBottomWidth) || 0));
                        } catch {}
                        return { contentWidth: Math.max(0, Math.round(e.width - (r + n))), contentHeight: Math.max(0, Math.round(e.height - (i + o))), rect: e };
                    })(t),
                    s = r?.snap;
                if ((!s && 'u' > typeof window && window.snapdom && (s = window.snapdom), !s || 'function' != typeof s.toPng))
                    throw Error(
                        '[snapdom] iframe capture requires snapdom.toPng. Use snapdom(el) or pass options.snap. With ESM, assign window.snapdom = snapdom after import if using iframes.',
                    );
                let c = { ...r, scale: 1, clip: null },
                    u = (function (t, e, r) {
                        let n = t.defaultView,
                            i = n ? n.scrollX : 0,
                            o = n ? n.scrollY : 0,
                            a = t.body ? t.body.scrollLeft : 0,
                            l = t.body ? t.body.scrollTop : 0,
                            s = t.documentElement ? t.documentElement.scrollLeft : 0,
                            c = t.documentElement ? t.documentElement.scrollTop : 0,
                            u = 0,
                            d = 0,
                            f = 0,
                            h = 0;
                        try {
                            let e = n && t.body ? n.getComputedStyle(t.body) : null;
                            e &&
                                ((u = (parseFloat(e.marginTop) || 0) + (parseFloat(e.paddingTop) || 0)),
                                (d = (parseFloat(e.marginRight) || 0) + (parseFloat(e.paddingRight) || 0)),
                                (f = (parseFloat(e.marginBottom) || 0) + (parseFloat(e.paddingBottom) || 0)),
                                (h = (parseFloat(e.marginLeft) || 0) + (parseFloat(e.paddingLeft) || 0)));
                        } catch {}
                        try {
                            t.documentElement.setAttribute('data-sd-pinned', '');
                        } catch {}
                        let m = t.createElement('style');
                        return (
                            m.setAttribute('data-sd-iframe-pin', ''),
                            (m.textContent = `html {margin: 0 !important;padding: 0 !important;width: ${e}px !important;height: ${r}px !important;min-width: ${e}px !important;min-height: ${r}px !important;box-sizing: border-box !important;overflow: hidden !important;background-clip: border-box !important;}body {margin: 0 !important;padding: ${u}px ${d}px ${f}px ${h}px !important;width: ${e}px !important;height: ${r}px !important;min-width: ${e}px !important;min-height: ${r}px !important;box-sizing: border-box !important;overflow: hidden !important;background-clip: border-box !important;}`),
                            (t.head || t.documentElement).appendChild(m),
                            () => {
                                try {
                                    m.remove();
                                } catch {}
                                try {
                                    t.documentElement.removeAttribute('data-sd-pinned');
                                } catch {}
                                try {
                                    (n && 'function' == typeof n.scrollTo && n.scrollTo(i, o),
                                        t.body && ((t.body.scrollLeft = a), (t.body.scrollTop = l)),
                                        t.documentElement && ((t.documentElement.scrollLeft = s), (t.documentElement.scrollTop = c)));
                                } catch {}
                            }
                        );
                    })(n, o, a),
                    d = i.session.nodeMap,
                    f = i.session.styleMap,
                    h = i.session.styleCache,
                    m;
                try {
                    m = await s.toPng(n.documentElement, c);
                } finally {
                    (u(), (i.session.nodeMap = d), (i.session.styleMap = f), (i.session.styleCache = h));
                }
                ((m.style.display = 'block'), (m.style.width = `${o}px`), (m.style.height = `${a}px`));
                let p = document.createElement('div');
                return (
                    e.nodeMap.set(p, t),
                    tF(t, p, e, r),
                    (p.style.overflow = 'hidden'),
                    (p.style.display = 'block'),
                    p.style.width || (p.style.width = `${Math.round(l.width)}px`),
                    p.style.height || (p.style.height = `${Math.round(l.height)}px`),
                    p.appendChild(m),
                    p
                );
            }
            var tq = new n(80);
            async function tz(t) {
                if (i.resource?.has(t)) return i.resource.get(t);
                if (tq.has(t)) return tq.get(t);
                let e = (async () => {
                    let e = await p(t, { as: 'dataURL', silent: !0 });
                    if (!e.ok || 'string' != typeof e.data) throw Error(`[snapDOM] Failed to read blob URL: ${t}`);
                    return (i.resource?.set(t, e.data), e.data);
                })();
                tq.set(t, e);
                try {
                    let r = await e;
                    return (tq.set(t, r), r);
                } catch (e) {
                    throw (tq.delete(t), e);
                }
            }
            var tX = /\bblob:[^)"'\s]+/g;
            async function tY(t) {
                if (!t || -1 === t.indexOf('blob:')) return t;
                let e = Array.from(new Set(t.match(tX) || []));
                if (0 === e.length) return t;
                let r = t;
                for (let t of e)
                    try {
                        let e = await tz(t);
                        r = r.split(t).join(e);
                    } catch {}
                return r;
            }
            function tG(t) {
                return 'string' == typeof t && t.startsWith('blob:');
            }
            function tQ(t, e) {
                let r = t.querySelectorAll ? Array.from(t.querySelectorAll(e)) : [];
                return (t.matches?.(e) && r.unshift(t), r);
            }
            async function tJ(t, e = null) {
                if (t) {
                    for (let r of tQ(t, 'img'))
                        try {
                            let t = r.getAttribute('src') || r.currentSrc || '';
                            if (tG(t)) {
                                let e = await tz(t);
                                r.setAttribute('src', e);
                            }
                            let n = r.getAttribute('srcset');
                            if (n && n.includes('blob:')) {
                                let t = (n || '')
                                        .split(',')
                                        .map((t) => t.trim())
                                        .filter(Boolean)
                                        .map((t) => {
                                            let e = t.match(/^(\S+)(\s+.+)?$/);
                                            return e ? { url: e[1], desc: e[2] || '' } : null;
                                        })
                                        .filter(Boolean),
                                    i = !1;
                                for (let r of t)
                                    if (tG(r.url))
                                        try {
                                            ((r.url = await tz(r.url)), (i = !0));
                                        } catch (t) {
                                            q(e, 'blobUrlToDataUrl for srcset item failed', t);
                                        }
                                i && r.setAttribute('srcset', t.map((t) => (t.desc ? `${t.url} ${t.desc.trim()}` : t.url)).join(', '));
                            }
                        } catch (t) {
                            q(e, 'resolveBlobUrls for img failed', t);
                        }
                    for (let r of tQ(t, 'image'))
                        try {
                            let t = 'http://www.w3.org/1999/xlink',
                                e = r.getAttribute('href') || r.getAttributeNS?.(t, 'href');
                            if (tG(e)) {
                                let n = await tz(e);
                                (r.setAttribute('href', n), r.removeAttributeNS?.(t, 'href'));
                            }
                        } catch (t) {
                            q(e, 'resolveBlobUrls for SVG image href failed', t);
                        }
                    for (let r of tQ(t, "[style*='blob:']"))
                        try {
                            let t = r.getAttribute('style');
                            if (t && t.includes('blob:')) {
                                let e = await tY(t);
                                r.setAttribute('style', e);
                            }
                        } catch (t) {
                            q(e, 'replaceBlobUrls in inline style failed', t);
                        }
                    for (let r of t.querySelectorAll ? t.querySelectorAll('style') : [])
                        try {
                            let t = r.textContent || '';
                            t.includes('blob:') && (r.textContent = await tY(t));
                        } catch (t) {
                            q(e, 'replaceBlobUrls in style tag failed', t);
                        }
                    for (let r of ['poster'])
                        for (let n of tQ(t, `[${r}^='blob:']`))
                            try {
                                let t = n.getAttribute(r);
                                tG(t) && n.setAttribute(r, await tz(t));
                            } catch (t) {
                                q(e, `resolveBlobUrls for ${r} failed`, t);
                            }
                }
            }
            V();
            var tK = new Map(),
                tZ = new Set(['IFRAME']);
            function t0(t, e) {
                tK.set(String(t).toUpperCase(), e);
            }
            function t1(t) {
                let { width: e, height: r } = tB(t),
                    n = e,
                    i = r;
                if (!n || !i) {
                    let e = t.getBoundingClientRect();
                    ((n = n || e.width || 0), (i = i || e.height || 0));
                }
                let o = document.createElement('div');
                return ((o.style.cssText = `display:inline-block;width:${n}px;height:${i}px;visibility:hidden;`), o);
            }
            var t2 = new Set(['img', 'canvas', 'video', 'iframe', 'object', 'embed']);
            function t9(t, e) {
                return t.right >= e.left - 200 && t.left <= e.right + 200 && t.bottom >= e.top - 200 && t.top <= e.bottom + 200;
            }
            async function t3(t, e, r) {
                let n;
                if (!t) throw Error('Invalid node');
                let i = new Set(),
                    o = null,
                    a = null;
                if (t.nodeType === Node.ELEMENT_NODE) {
                    let r = (t.localName || t.tagName || '').toLowerCase();
                    if ('snapdom-sandbox' === t.id || t.hasAttribute('data-snapdom-sandbox') || F.has(r)) return null;
                    if ('foreignobject' === r && t.parentElement?.closest?.('foreignObject'))
                        return (q(e, 'Nested <foreignObject> skipped (SVG spec limitation — not rendered by browsers)'), null);
                    if ('source' === r && t.parentElement?.localName === 'picture') return null;
                }
                if (t.nodeType === Node.TEXT_NODE || t.nodeType !== Node.ELEMENT_NODE) return t.cloneNode(!0);
                if ('exclude' === t.getAttribute('data-capture')) {
                    if ('hide' === r.excludeMode) return t1(t);
                    if ('remove' === r.excludeMode) return null;
                }
                if (r.exclude && Array.isArray(r.exclude))
                    for (let e of r.exclude)
                        try {
                            if (t.matches?.(e)) {
                                if ('hide' === r.excludeMode) return t1(t);
                                if ('remove' === r.excludeMode) return null;
                            }
                        } catch (t) {
                            console.warn(`Invalid selector in exclude option: ${e}`, t);
                        }
                if ('function' == typeof r.filter)
                    try {
                        if (!r.filter(t)) {
                            if ('hide' === r.filterMode) return t1(t);
                            if ('remove' === r.filterMode) return null;
                        }
                    } catch (t) {
                        console.warn('Error in filter function:', t);
                    }
                if (
                    e.clip &&
                    (function (t, e) {
                        let r;
                        if (t === e.root) return !1;
                        try {
                            r = t.getBoundingClientRect();
                        } catch {
                            return !1;
                        }
                        if (0 === r.width && 0 === r.height) return !1;
                        let n = k(t);
                        if ('inline' === n.display && !t2.has((t.localName || '').toLowerCase())) return !1;
                        let i = e.rect,
                            o = t.scrollWidth || 0,
                            a = t.scrollHeight || 0,
                            l = {
                                left: 'rtl' === n.direction ? Math.min(r.left, r.right - o) : r.left,
                                top: r.top,
                                right: Math.max(r.right, r.left + o),
                                bottom: Math.max(r.bottom, r.top + a),
                            },
                            s = n.writingMode || '';
                        if (
                            ((s.startsWith('vertical') || s.startsWith('sideways')) &&
                                ((l.top = Math.min(r.top, r.bottom - a)), (l.left = Math.min(l.left, r.right - o))),
                            t9(l, i))
                        )
                            return !1;
                        let c = (t.ownerDocument || document).createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
                        for (; c.nextNode();) {
                            let t = c.currentNode.getBoundingClientRect();
                            if ((t.width > 0 || t.height > 0) && t9(t, i)) return !1;
                        }
                        return !0;
                    })(t, e.clip)
                )
                    return (function (t, e, r) {
                        let n = t.cloneNode(!1);
                        ('IMG' === t.tagName && (n.removeAttribute('src'), n.removeAttribute('srcset'), n.removeAttribute('sizes')), tF(t, n, e, r));
                        let { width: i, height: o } = tB(t);
                        return (
                            i > 0 && ((n.style.width = `${i}px`), (n.style.minWidth = `${i}px`), (n.style.maxWidth = `${i}px`)),
                            o > 0 && ((n.style.height = `${o}px`), (n.style.minHeight = `${o}px`), (n.style.maxHeight = `${o}px`)),
                            (n.style.visibility = 'hidden'),
                            (n.style.overflow = 'hidden'),
                            (n.style.boxSizing = 'border-box'),
                            n
                        );
                    })(t, e, r);
                if (r.__resolveNodeHooks)
                    for (let n of r.__resolveNodeHooks) {
                        let i;
                        try {
                            i = await n(t, r);
                        } catch (t) {
                            q(e, 'resolveNode plugin hook failed', t);
                        }
                        if (null === i) return null;
                        if (i instanceof Node) return (i.nodeType === Node.ELEMENT_NODE && (e.nodeMap.set(i, t), tF(t, i, e, r)), i);
                    }
                {
                    let n = tZ.has(t.tagName) && tK.get(t.tagName);
                    if (n) {
                        let i = await n(t, e, r);
                        if (void 0 !== i) return i;
                    }
                }
                if ('placeholder' === t.getAttribute('data-capture')) {
                    let n = t.cloneNode(!1);
                    (e.nodeMap.set(n, t), tF(t, n, e, r));
                    let i = document.createElement('div');
                    return (
                        (i.textContent = t.getAttribute('data-placeholder-text') || ''),
                        (i.style.cssText = 'color:#666;font-size:12px;text-align:center;line-height:1.4;padding:0.5em;box-sizing:border-box;'),
                        n.appendChild(i),
                        n
                    );
                }
                {
                    let n = !tZ.has(t.tagName) && tK.get(t.tagName);
                    if (n) {
                        let i = await n(t, e, r);
                        if (void 0 !== i) return i;
                    }
                }
                try {
                    if (((n = t.cloneNode(!1)), n.attributes?.length))
                        try {
                            for (let t of n.attributes)
                                /[\x00-\x08\x0B\x0C\x0E-\x1F\uFFFE\uFFFF]/.test(t.value) &&
                                    n.setAttribute(t.name, t.value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\uFFFE\uFFFF]/g, ''));
                        } catch {}
                    if (
                        ((function (t, e) {
                            if (t?.nodeType !== 1 || e?.nodeType !== 1 || tP(t)) return;
                            let r = t.getAttribute?.('style'),
                                n = !!(r && r.includes('var('));
                            if (!n && t.attributes?.length) {
                                let e = t.attributes;
                                for (let t = 0; t < e.length; t++) {
                                    let r = e[t];
                                    if (r && 'string' == typeof r.value && r.value.includes('var(')) {
                                        n = !0;
                                        break;
                                    }
                                }
                            }
                            let i = null;
                            if (n)
                                try {
                                    i = getComputedStyle(t);
                                } catch {}
                            if (n) {
                                let r = t.style;
                                if (r && r.length) {
                                    let t = new Set();
                                    for (let n = 0; n < r.length; n++) {
                                        let o = r[n];
                                        if (t.has(o)) continue;
                                        t.add(o);
                                        let a = r.getPropertyValue(o);
                                        if (!a || !a.includes('var(')) continue;
                                        let l = i && i.getPropertyValue(o);
                                        if (l)
                                            try {
                                                e.style.setProperty(o, l.trim(), r.getPropertyPriority(o));
                                            } catch {}
                                    }
                                }
                            }
                            if (n && t.attributes?.length) {
                                let r = t.attributes;
                                for (let t = 0; t < r.length; t++) {
                                    let n = r[t];
                                    if (!n || 'string' != typeof n.value || !n.value.includes('var(')) continue;
                                    let o = n.name,
                                        a = i && i.getPropertyValue(o);
                                    if (a)
                                        try {
                                            e.style.setProperty(o, a.trim());
                                        } catch {}
                                }
                            }
                            if (!n) {
                                if (!i)
                                    try {
                                        i = getComputedStyle(t);
                                    } catch {
                                        i = null;
                                    }
                                if (!i) return;
                                let r = t.namespaceURI || 'html',
                                    n = (function (t, e) {
                                        let r = e + '::' + t.toLowerCase(),
                                            n = tT.get(r);
                                        if (n) return n;
                                        let i = document,
                                            o = 'http://www.w3.org/2000/svg' === e ? i.createElementNS(e, t) : i.createElement(t),
                                            a = i.createElement('div');
                                        (a.setAttribute('data-snapdom-internal', ''),
                                            (a.style.cssText = 'position:absolute;left:-99999px;top:-99999px;contain:strict;display:block;'),
                                            a.appendChild(o),
                                            i.documentElement.appendChild(a));
                                        let l = getComputedStyle(o),
                                            s = {};
                                        for (let t of tR) s[t] = l.getPropertyValue(t) || '';
                                        return (a.remove(), tT.set(r, s), s);
                                    })(t.tagName, r);
                                for (let t of tR) {
                                    let r = i.getPropertyValue(t) || '',
                                        o = n[t] || '';
                                    if (r && r !== o)
                                        try {
                                            e.style.setProperty(t, r.trim());
                                        } catch {}
                                }
                            }
                        })(t, n),
                        e.nodeMap.set(n, t),
                        'IMG' === t.tagName)
                    ) {
                        !(function (t, e) {
                            try {
                                let r = null,
                                    n = k(t).content;
                                if (n && n.includes('url(')) {
                                    let t = n.match(/url\(["']?([^"')]+)["']?\)/);
                                    t && (r = t[1]);
                                }
                                let i = t.closest?.('picture'),
                                    o = r || (i ? tD(t, i) : t.currentSrc) || t.src || tO(t.getAttribute('srcset'), t) || '';
                                if (!o) return;
                                (e.setAttribute('src', o), e.removeAttribute('srcset'), e.removeAttribute('sizes'), (e.loading = 'eager'), (e.decoding = 'sync'));
                            } catch {}
                        })(t, n);
                        try {
                            let { width: e, height: r } = tB(t),
                                i = Math.round(e || 0),
                                o = Math.round(r || 0);
                            (i && (n.dataset.snapdomWidth = String(i)), o && (n.dataset.snapdomHeight = String(o)));
                        } catch (t) {
                            q(e, 'getUnscaledDimensions for IMG failed', t);
                        }
                        try {
                            let e = t.getAttribute('style') || '',
                                r = window.getComputedStyle(t),
                                i = (t) => {
                                    let n = e.match(RegExp(`${t}\\s*:\\s*([^;]+)`, 'i')),
                                        i = n ? n[1].trim() : r.getPropertyValue(t);
                                    return /%|auto/i.test(String(i || ''));
                                },
                                o = parseInt(n.dataset.snapdomWidth || '0', 10),
                                a = parseInt(n.dataset.snapdomHeight || '0', 10),
                                l = i('width') || !o,
                                s = i('height') || !a;
                            (l && o && (n.style.width = `${o}px`), s && a && (n.style.height = `${a}px`));
                            let c = r.getPropertyValue('object-fit'),
                                u = r.getPropertyValue('object-position');
                            c && 'fill' !== c
                                ? ((n.style.objectFit = c), u && (n.style.objectPosition = u))
                                : (o && (n.style.minWidth = `${o}px`), a && (n.style.minHeight = `${a}px`));
                        } catch (t) {
                            q(e, 'IMG dimension freeze failed', t);
                        }
                    }
                } catch (e) {
                    throw (console.error('[Snapdom] Failed to clone node:', t, e), e);
                }
                let l = null;
                if (t instanceof HTMLTextAreaElement) {
                    let { width: e, height: r } = tB(t),
                        i = e || t.getBoundingClientRect().width || 0,
                        o = r || t.getBoundingClientRect().height || 0;
                    (i && (n.style.width = `${i}px`), o && (n.style.height = `${o}px`));
                }
                if (t instanceof HTMLInputElement) {
                    let r = (t.type || 'text').toLowerCase();
                    if (
                        ('checkbox' === r || 'radio' === r) &&
                        (function () {
                            if (typeof navigator > 'u') return !1;
                            let t = (navigator.userAgent || '').toLowerCase();
                            return t.includes('firefox') || t.includes('fxios');
                        })()
                    ) {
                        let { el: r, applyVisual: i } = (function (t) {
                            let { width: e, height: r } = tB(t),
                                n = t.getBoundingClientRect(),
                                i;
                            try {
                                i = window.getComputedStyle(t);
                            } catch {}
                            let o = i ? parseFloat(i.width) : NaN,
                                a = i ? parseFloat(i.height) : NaN,
                                l = Math.round(e || n.width || 0),
                                s = Math.round(r || n.height || 0),
                                c = Number.isFinite(o) && o > 0 ? Math.round(o) : Math.max(12, l || 16),
                                u = Number.isFinite(a) && a > 0 ? Math.round(a) : Math.max(12, s || 16),
                                d = 'checkbox' === (t.type || 'text').toLowerCase(),
                                f = !!t.checked,
                                h = !!t.indeterminate,
                                m = Math.max(Math.min(c, u), 12),
                                p = 'middle';
                            try {
                                i && i.verticalAlign && (p = i.verticalAlign);
                            } catch {}
                            let g = document.createElement('div');
                            (g.setAttribute('data-snapdom-input-replacement', t.type || 'checkbox'),
                                (g.style.cssText = `display:inline-block;width:${m}px;height:${m}px;vertical-align:${p};flex-shrink:0;line-height:0;`));
                            let y = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                            function b() {
                                let t = '#0a6ed1';
                                try {
                                    i && (t = i.accentColor || i.color || t);
                                } catch {}
                                let e = m - 2;
                                if (((y.innerHTML = ''), d)) {
                                    let r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                                    if (
                                        (r.setAttribute('x', String(1)),
                                        r.setAttribute('y', String(1)),
                                        r.setAttribute('width', String(e)),
                                        r.setAttribute('height', String(e)),
                                        r.setAttribute('rx', '2'),
                                        r.setAttribute('ry', '2'),
                                        r.setAttribute('fill', f ? t : 'none'),
                                        r.setAttribute('stroke', t),
                                        r.setAttribute('stroke-width', String(2)),
                                        y.appendChild(r),
                                        f)
                                    ) {
                                        let t = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                                        (t.setAttribute('d', `M ${3} ${m / 2} L ${m / 2 - 1} ${m - 1 - 2} L ${m - 1 - 2} ${3}`),
                                            t.setAttribute('stroke', 'white'),
                                            t.setAttribute('stroke-width', String(2)),
                                            t.setAttribute('fill', 'none'),
                                            t.setAttribute('stroke-linecap', 'round'),
                                            t.setAttribute('stroke-linejoin', 'round'),
                                            y.appendChild(t));
                                    } else if (h) {
                                        let r = document.createElementNS('http://www.w3.org/2000/svg', 'rect'),
                                            n = Math.max(6, e - 4);
                                        (r.setAttribute('x', String((m - n) / 2)),
                                            r.setAttribute('y', String((m - 2) / 2)),
                                            r.setAttribute('width', String(n)),
                                            r.setAttribute('height', String(2)),
                                            r.setAttribute('fill', t),
                                            r.setAttribute('rx', '1'),
                                            y.appendChild(r));
                                    }
                                } else {
                                    let e = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                    if (
                                        (e.setAttribute('cx', String(m / 2)),
                                        e.setAttribute('cy', String(m / 2)),
                                        e.setAttribute('r', String((m - 2) / 2)),
                                        e.setAttribute('fill', f ? t : 'none'),
                                        e.setAttribute('stroke', t),
                                        e.setAttribute('stroke-width', String(2)),
                                        y.appendChild(e),
                                        f)
                                    ) {
                                        let t = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
                                            e = Math.max(2, (m - 4) * 0.35);
                                        (t.setAttribute('cx', String(m / 2)),
                                            t.setAttribute('cy', String(m / 2)),
                                            t.setAttribute('r', String(e)),
                                            t.setAttribute('fill', 'white'),
                                            y.appendChild(t));
                                    }
                                }
                                (g.style.setProperty('width', `${m}px`, 'important'),
                                    g.style.setProperty('height', `${m}px`, 'important'),
                                    g.style.setProperty('min-width', `${m}px`, 'important'),
                                    g.style.setProperty('min-height', `${m}px`, 'important'));
                            }
                            return (
                                y.setAttribute('width', String(m)),
                                y.setAttribute('height', String(m)),
                                y.setAttribute('viewBox', `0 0 ${m} ${m}`),
                                g.appendChild(y),
                                b(),
                                { el: g, applyVisual: b }
                            );
                        })(t);
                        (e.nodeMap.set(r, t), (l = i), (n = r));
                    } else
                        ((n.value = t.value),
                            n.setAttribute('value', t.value),
                            void 0 !== t.checked &&
                                ((n.checked = t.checked), t.checked && n.setAttribute('checked', ''), t.indeterminate && (n.indeterminate = t.indeterminate)));
                }
                if ((t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && !t.value && t.placeholder)
                    try {
                        let e = window.getComputedStyle(t, '::placeholder'),
                            r = e && e.color;
                        if (r && 'rgba(0, 0, 0, 0)' !== r) {
                            let t = 'snapdom-ph-' + ((1e6 * Math.random()) | 0);
                            n.classList.add(t);
                            let i = document.createElement('style');
                            ((i.textContent = `.${t}::placeholder{color:${r}!important;opacity:${e.opacity || '1'}!important;-webkit-text-fill-color:${r}!important;}`),
                                n.prepend(i));
                        }
                    } catch {}
                if (
                    (t instanceof HTMLSelectElement && (o = t.value),
                    t instanceof HTMLTextAreaElement && (a = t.value),
                    t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement)
                ) {
                    (t.disabled && n.setAttribute('disabled', ''),
                        t.required && n.setAttribute('required', ''),
                        t.readOnly && n.setAttribute('readonly', ''),
                        void 0 !== t.min && '' !== t.min && n.setAttribute('min', t.min),
                        void 0 !== t.max && '' !== t.max && n.setAttribute('max', t.max),
                        void 0 !== t.pattern && '' !== t.pattern && n.setAttribute('pattern', t.pattern));
                    let e = t.getAttribute('aria-invalid');
                    null !== e && n.setAttribute('aria-invalid', e);
                }
                if ((tP(t) || tF(t, n, e, r), l && l(), t instanceof SVGElement && !tP(t)))
                    try {
                        let e = window.getComputedStyle(t);
                        for (let t of [
                            'fill',
                            'stroke',
                            'stroke-width',
                            'stroke-dasharray',
                            'stroke-dashoffset',
                            'stroke-linecap',
                            'stroke-linejoin',
                            'stroke-miterlimit',
                            'opacity',
                            'fill-opacity',
                            'stroke-opacity',
                            'fill-rule',
                            'clip-rule',
                            'marker',
                            'marker-start',
                            'marker-mid',
                            'marker-end',
                            'visibility',
                            'display',
                        ]) {
                            let r = e.getPropertyValue(t);
                            r && n.style.setProperty(t, r);
                        }
                    } catch {}
                if (t.shadowRoot) {
                    let o = function (t, n) {
                        if (t.nodeType === Node.ELEMENT_NODE && 'STYLE' === t.tagName) return n(null);
                        t3(t, e, r)
                            .then((t) => {
                                n(t || null);
                            })
                            .catch(() => {
                                n(null);
                            });
                    };
                    var s,
                        c = o;
                    try {
                        for (let e of t.shadowRoot.querySelectorAll('slot')) {
                            let t = [];
                            try {
                                t = e.assignedNodes?.({ flatten: !0 }) || e.assignedNodes?.() || [];
                            } catch {
                                t = e.assignedNodes?.() || [];
                            }
                            for (let e of t) i.add(e);
                        }
                    } catch {}
                    let a = ((e.shadowScopeSeq = (e.shadowScopeSeq || 0) + 1), `s${e.shadowScopeSeq}`),
                        l = `[data-sd="${a}"]`;
                    try {
                        n.setAttribute('data-sd', a);
                    } catch {}
                    let u = (function (t) {
                            let e = '';
                            try {
                                for (let r of (t.querySelectorAll('style').forEach((t) => {
                                    e +=
                                        (t.textContent || '') +
                                        `
`;
                                }),
                                t.adoptedStyleSheets || []))
                                    try {
                                        if (r && r.cssRules)
                                            for (let t of r.cssRules)
                                                e +=
                                                    t.cssText +
                                                    `
`;
                                    } catch {}
                            } catch {}
                            return e;
                        })(t.shadowRoot),
                        d = (s = u)
                            ? (s = (s = (s = (s = (s = s.replace(/:host\(([^)]+)\)/g, (t, e) => `:where(${l}:is(${e.trim()}))`)).replace(
                                  /:host\b/g,
                                  `:where(${l})`,
                              )).replace(/:host-context\(([^)]+)\)/g, (t, e) => `:where(:where(${e.trim()}) ${l})`)).replace(
                                  /::slotted\(([^)]+)\)/g,
                                  (t, e) => `:where(${l} ${e.trim()})`,
                              )).replace(/(^|})(\s*)([^@}{]+){/g, (t, e, r, n) => {
                                  let i = (function (t, e, r = !0) {
                                      return t
                                          .split(',')
                                          .map((t) => t.trim())
                                          .filter(Boolean)
                                          .map((t) => {
                                              var n;
                                              if (t.startsWith(':where(') || t.startsWith('@')) return t;
                                              let i = r
                                                  ? !(n = (n = t).trim()) || /:not\(\s*\[data-sd-slotted\]\s*\)\s*$/.test(n)
                                                      ? n
                                                      : `${n}:not([data-sd-slotted])`
                                                  : t;
                                              return `:where(${e} ${i})`;
                                          })
                                          .join(', ');
                                  })(n, l, !0);
                                  return `${e}${r}${i}{`;
                              }))
                            : '';
                    !(function (t, e, r) {
                        if (!e) return;
                        let n = document.createElement('style');
                        (n.setAttribute('data-sd', r), (n.textContent = e), t.insertBefore(n, t.firstChild || null));
                    })(
                        n,
                        (function (t, e, r) {
                            let n = [];
                            for (let r of e) {
                                let e = (function (t, e) {
                                    try {
                                        let r = getComputedStyle(t).getPropertyValue(e).trim();
                                        if (r) return r;
                                    } catch {}
                                    try {
                                        let t = getComputedStyle(document.documentElement).getPropertyValue(e).trim();
                                        if (t) return t;
                                    } catch {}
                                    return '';
                                })(t, r);
                                e && n.push(`${r}: ${e};`);
                            }
                            return n.length
                                ? `${r}{${n.join('')}}
`
                                : '';
                        })(
                            t,
                            (function (t) {
                                let e = new Set();
                                if (!t) return e;
                                let r = /var\(\s*(--[A-Za-z0-9_-]+)\b/g,
                                    n;
                                for (; (n = r.exec(t));) e.add(n[1]);
                                return e;
                            })(u),
                            l,
                        ) + d,
                        a,
                    );
                    let f = document.createDocumentFragment(),
                        h = await tj(Array.from(t.shadowRoot.childNodes), o, r.fast);
                    (f.append(...h.filter((t) => !!t)), n.appendChild(f));
                }
                if ('SLOT' === t.tagName) {
                    let n = function (t, n) {
                        t3(t, e, r)
                            .then((t) => {
                                (t &&
                                    t &&
                                    (t.nodeType === Node.ELEMENT_NODE && t.setAttribute('data-sd-slotted', ''),
                                    t.querySelectorAll && t.querySelectorAll('*').forEach((t) => t.setAttribute('data-sd-slotted', ''))),
                                    n(t || null));
                            })
                            .catch(() => {
                                n(null);
                            });
                    };
                    var c = n;
                    let i = t.assignedNodes?.({ flatten: !0 }) || [],
                        o = i.length > 0 ? i : Array.from(t.childNodes),
                        a = document.createDocumentFragment(),
                        l = await tj(Array.from(o), n, r.fast);
                    return (a.append(...l.filter((t) => !!t)), a);
                }
                function c(t, n) {
                    if (i.has(t)) return n(null);
                    t3(t, e, r)
                        .then((t) => {
                            n(t || null);
                        })
                        .catch(() => {
                            n(null);
                        });
                }
                let u = await tj(Array.from(t.childNodes), c, r.fast);
                if ((n.append(...u.filter((t) => !!t)), null !== o && n instanceof HTMLSelectElement))
                    for (let t of ((n.value = o), n.options)) t.value === o ? t.setAttribute('selected', '') : t.removeAttribute('selected');
                return (null !== a && n instanceof HTMLTextAreaElement && (n.textContent = a), n);
            }
            async function t6(t, e, r) {
                let n = '';
                try {
                    let e = t.getContext('2d', { willReadFrequently: !0 });
                    try {
                        e && e.getImageData(0, 0, 1, 1);
                    } catch {}
                    if ((B() && (await new Promise((t) => requestAnimationFrame(t))), !(n = t.toDataURL('image/png')) || 'data:,' === n)) {
                        try {
                            e && e.getImageData(0, 0, 1, 1);
                        } catch {}
                        if ((await new Promise((t) => requestAnimationFrame(t)), !(n = t.toDataURL('image/png')) || 'data:,' === n)) {
                            let e = document.createElement('canvas');
                            ((e.width = t.width), (e.height = t.height));
                            let r = e.getContext('2d');
                            r && (r.drawImage(t, 0, 0), (n = e.toDataURL('image/png')));
                        }
                    }
                } catch (t) {
                    q(e, 'Canvas toDataURL failed, using empty/fallback', t);
                }
                let i = document.createElement('img');
                try {
                    ((i.decoding = 'sync'), (i.loading = 'eager'));
                } catch (t) {
                    q(e, 'img decoding/loading hints failed', t);
                }
                (n && (i.src = n), (i.width = t.width), (i.height = t.height));
                let { width: o, height: a } = tB(t);
                return (o > 0 && (i.style.width = `${o}px`), a > 0 && (i.style.height = `${a}px`), e.nodeMap.set(i, t), tF(t, i, e, r), i);
            }
            async function t5(t, e, r) {
                let n = '';
                try {
                    let e = document.createElement('canvas');
                    ((e.width = t.videoWidth || t.offsetWidth || 320), (e.height = t.videoHeight || t.offsetHeight || 240));
                    let r = e.getContext('2d');
                    r && (r.drawImage(t, 0, 0, e.width, e.height), ((n = e.toDataURL('image/png')) && 'data:,' !== n) || (n = ''));
                } catch (t) {
                    q(e, 'Video frame capture failed, using poster fallback', t);
                }
                let i = document.createElement('img');
                try {
                    ((i.decoding = 'sync'), (i.loading = 'eager'));
                } catch {}
                (n ? (i.src = n) : t.poster && (i.src = t.poster), (i.width = t.videoWidth || t.offsetWidth || 0), (i.height = t.videoHeight || t.offsetHeight || 0));
                let { width: o, height: a } = tB(t);
                return (
                    o > 0 && (i.style.width = `${o}px`), a > 0 && (i.style.height = `${a}px`), (i.style.objectFit = 'contain'), e.nodeMap.set(i, t), tF(t, i, e, r), i
                );
            }
            async function t4(t, e, r) {
                if (!t.controls) return;
                let { width: n, height: i } = tB(t),
                    o = Math.round(n || t.offsetWidth || 300),
                    a = Math.round(i || t.offsetHeight || 54),
                    l = a / 2,
                    s = Math.max(4, 0.16 * a),
                    c = 0.34 * a,
                    u = o - 0.34 * a,
                    d = c + s + 0.55 * a,
                    f = Math.max(0, u - 0.7 * a - d),
                    h = Math.max(9, Math.round(0.24 * a)),
                    m = `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${a}" viewBox="0 0 ${o} ${a}"><rect width="${o}" height="${a}" rx="${Math.min(a / 2, 10)}" fill="#f1f3f4"/><path d="M ${c} ${l - s} L ${c + s} ${l} L ${c} ${l + s} Z" fill="#5f6368"/><rect x="${d}" y="${l - 1.5}" width="${f}" height="3" rx="1.5" fill="#bdc1c6"/><circle cx="${d}" cy="${l}" r="${Math.max(3, 0.09 * a)}" fill="#5f6368"/><text x="${u}" y="${l}" fill="#5f6368" font-family="sans-serif" font-size="${h}" text-anchor="end" dominant-baseline="central">0:00</text></svg>`,
                    p = document.createElement('img');
                try {
                    ((p.decoding = 'sync'), (p.loading = 'eager'));
                } catch {}
                return (
                    (p.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(m)}`),
                    (p.width = o),
                    (p.height = a),
                    (p.style.width = `${o}px`),
                    (p.style.height = `${a}px`),
                    e.nodeMap.set(p, t),
                    tF(t, p, e, r),
                    p
                );
            }
            (t0('IFRAME', async function (t, e, r) {
                let n = !1;
                try {
                    n = !!(t.contentDocument || t.contentWindow?.document);
                } catch (t) {
                    q(e, 'iframe same-origin probe failed', t);
                }
                if (n)
                    try {
                        return await tV(t, e, r);
                    } catch (t) {
                        console.warn('[SnapDOM] iframe rasterization failed, fallback:', t);
                    }
                if (
                    (n || console.warn('[snapdom] cross-origin <iframe> skipped (cannot access content). Use options.placeholders to show a placeholder instead.', t),
                    r.placeholders)
                ) {
                    let { width: n, height: i } = tB(t),
                        o = document.createElement('div');
                    return (
                        (o.style.cssText = `width:${n}px;height:${i}px;background-image:repeating-linear-gradient(45deg,#ddd,#ddd 5px,#f9f9f9 5px,#f9f9f9 10px);display:flex;align-items:center;justify-content:center;font-size:12px;color:#555;border:1px solid #aaa;`),
                        tF(t, o, e, r),
                        o
                    );
                }
                {
                    let { width: n, height: i } = tB(t),
                        o = document.createElement('div');
                    return ((o.style.cssText = `display:inline-block;width:${n}px;height:${i}px;visibility:hidden;`), tF(t, o, e, r), o);
                }
            }),
                t0('CANVAS', t6),
                t0('VIDEO', t5),
                t0('AUDIO', t4),
                X(),
                h(),
                j(),
                s(),
                s());
            var t8 = [
                    /font\s*awesome/i,
                    /material\s*icons/i,
                    /ionicons/i,
                    /glyphicons/i,
                    /feather/i,
                    /bootstrap\s*icons/i,
                    /remix\s*icons/i,
                    /heroicons/i,
                    /layui/i,
                    /lucide/i,
                ],
                t7 = Object.assign(
                    {
                        materialIconsFilled: 'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
                        materialIconsOutlined: 'https://fonts.gstatic.com/s/materialiconsoutlined/v110/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.woff2',
                        materialIconsRound: 'https://fonts.gstatic.com/s/materialiconsround/v109/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmPq_HTTw.woff2',
                        materialIconsSharp: 'https://fonts.gstatic.com/s/materialiconssharp/v110/oPWQ_lt5nv4pWNJpghLP75WiFR4kLh3kvmvRImcycg.woff2',
                    },
                    ('u' > typeof window && window.__SNAPDOM_ICON_FONTS__) || {},
                ),
                et = [],
                ee = new Set();
            function er(t) {
                let e = 'string' == typeof t ? t : '';
                for (let t of [...t8, ...et]) if (t instanceof RegExp && t.test(e)) return !0;
                return !!(/icon/i.test(e) || /glyph/i.test(e) || /symbols/i.test(e) || /feather/i.test(e) || /fontawesome/i.test(e));
            }
            var en = new Map();
            async function ei(t, e, r) {
                let n = String(t || ''),
                    i = n.toLowerCase(),
                    o = String(e || '').toLowerCase();
                if ((/\bmaterial\s*icons\b/.test(i) && !/\bsymbols\b/.test(i)) || !/\bmaterial\s*symbols\b/.test(i)) return { familyForMeasure: n, familyForCanvas: n };
                let a = r && (r.FILL ?? r.fill),
                    l = 'outlined';
                /\brounded\b/.test(o) || /\bround\b/.test(o) ? (l = 'rounded') : /\bsharp\b/.test(o) ? (l = 'sharp') : /\boutlined\b/.test(o) && (l = 'outlined');
                let s = null;
                if (
                    (1 === a &&
                        ('outlined' === l && t7.materialIconsFilled
                            ? (s = { url: t7.materialIconsFilled, alias: 'snapdom-mi-filled' })
                            : 'rounded' === l && t7.materialIconsRound
                              ? (s = { url: t7.materialIconsRound, alias: 'snapdom-mi-round' })
                              : 'sharp' === l && t7.materialIconsSharp && (s = { url: t7.materialIconsSharp, alias: 'snapdom-mi-sharp' })),
                    !s)
                )
                    return { familyForMeasure: n, familyForCanvas: n };
                if (!en.has(s.alias))
                    try {
                        let t = new FontFace(s.alias, `url(${s.url})`, { style: 'normal', weight: '400' });
                        (document.fonts.add(t), await t.load(), en.set(s.alias, !0));
                    } catch {
                        return { familyForMeasure: n, familyForCanvas: n };
                    }
                let c = `"${s.alias}"`;
                return { familyForMeasure: c, familyForCanvas: c };
            }
            async function eo(t = 'Material Icons', e = 24) {
                try {
                    await Promise.all([document.fonts.load(`400 ${e}px "${String(t).replace(/["']/g, '')}"`), document.fonts.ready]);
                } catch {}
            }
            async function ea(t, { family: e = 'Material Icons', weight: r = 'normal', fontSize: n = 32, color: i = '#000', variation: o = '', className: a = '' } = {}) {
                let l = String(e || '').replace(/^['"]+|['"]+$/g, ''),
                    s = window.devicePixelRatio || 1,
                    c = (function (t = '') {
                        let e = Object.create(null),
                            r = String(t || ''),
                            n = /['"]?\s*([A-Za-z]{3,4})\s*['"]?\s*([+-]?\d+(?:\.\d+)?)\s*/g,
                            i;
                        for (; (i = n.exec(r));) e[i[1].toUpperCase()] = Number(i[2]);
                        return e;
                    })(o),
                    { familyForMeasure: u, familyForCanvas: d } = await ei(l, a, c);
                await eo(d.replace(/^["']+|["']+$/g, ''), n);
                let f = document.createElement('span');
                (f.setAttribute('data-snapdom-internal', ''),
                    (f.textContent = t),
                    (f.style.position = 'absolute'),
                    (f.style.visibility = 'hidden'),
                    (f.style.left = '-99999px'),
                    (f.style.whiteSpace = 'nowrap'),
                    (f.style.fontFamily = u),
                    (f.style.fontWeight = String(r || 'normal')),
                    (f.style.fontSize = `${n}px`),
                    (f.style.lineHeight = '1'),
                    (f.style.margin = '0'),
                    (f.style.padding = '0'),
                    (f.style.fontFeatureSettings = "'liga' 1"),
                    (f.style.fontVariantLigatures = 'normal'),
                    (f.style.color = i),
                    document.body.appendChild(f));
                let h = f.getBoundingClientRect(),
                    m = Math.max(1, Math.ceil(h.width)),
                    p = Math.max(1, Math.ceil(h.height));
                document.body.removeChild(f);
                let g = document.createElement('canvas');
                ((g.width = m * s), (g.height = p * s));
                let y = g.getContext('2d');
                (y.scale(s, s), (y.font = `${r ? `${r} ` : ''}${n}px ${d}`), (y.textAlign = 'left'), (y.textBaseline = 'top'), (y.fillStyle = i));
                try {
                    y.fontKerning = 'normal';
                } catch {}
                return (y.fillText(t, 0, 0), { dataUrl: g.toDataURL(), width: m, height: p });
            }
            async function el(t, e, r = i.session.nodeMap) {
                if (t?.nodeType !== 1) return 0;
                let n = '.material-icons, [class*="material-symbols"]',
                    o = Array.from(t.querySelectorAll(n)).filter((t) => t && t.textContent && t.textContent.trim());
                if ((t.matches?.(n) && t.textContent && t.textContent.trim() && o.unshift(t), 0 === o.length)) return 0;
                let a = e?.nodeType === 1 ? Array.from(e.querySelectorAll(n)).filter((t) => t && t.textContent && t.textContent.trim()) : [];
                e?.nodeType === 1 && e.matches?.(n) && e.textContent && e.textContent.trim() && a.unshift(e);
                let l = 0;
                for (let t = 0; t < o.length; t++) {
                    let e = o[t],
                        n = (r && r.get(e)) || a[t] || null;
                    try {
                        let t = getComputedStyle(n || e),
                            r = t.fontFamily || 'Material Icons';
                        if (
                            !(function (t = '') {
                                let e = String(t).toLowerCase();
                                return /\bmaterial\s*icons\b/.test(e) || /\bmaterial\s*symbols\b/.test(e);
                            })(r)
                        )
                            continue;
                        let i = (n || e).textContent.trim();
                        if (!i) continue;
                        let o = parseInt(t.fontSize, 10) || 24,
                            a = t.fontWeight && 'normal' !== t.fontWeight ? t.fontWeight : 'normal',
                            s = (function (t) {
                                let e = t.getPropertyValue('-webkit-text-fill-color')?.trim() || '',
                                    r = /^transparent$/i.test(e) || /rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)/i.test(e);
                                if (e && !r && 'currentcolor' !== e.toLowerCase()) return e;
                                let n = t.color?.trim();
                                return n && 'inherit' !== n ? n : '#000';
                            })(t),
                            c = t.fontVariationSettings && 'normal' !== t.fontVariationSettings ? t.fontVariationSettings : '',
                            u = (n || e).className || '',
                            { dataUrl: d, width: f, height: h } = await ea(i, { family: r, weight: a, fontSize: o, color: s, variation: c, className: u });
                        e.textContent = '';
                        let m = e.ownerDocument.createElement('img');
                        ((m.src = d),
                            (m.alt = i),
                            (m.style.height = `${o}px`),
                            (m.style.width = `${Math.max(1, Math.round((f / h) * o))}px`),
                            (m.style.objectFit = 'contain'),
                            (m.style.verticalAlign = getComputedStyle(e).verticalAlign || 'baseline'),
                            e.appendChild(m),
                            l++);
                    } catch {}
                }
                return l;
            }
            async function es(t, e, r, n = 32, i = '#000') {
                e = e.replace(/^['"]+|['"]+$/g, '');
                let o = window.devicePixelRatio || 1;
                try {
                    await document.fonts.ready;
                } catch {}
                let a = document.createElement('span');
                (a.setAttribute('data-snapdom-internal', ''),
                    (a.textContent = t),
                    (a.style.position = 'absolute'),
                    (a.style.visibility = 'hidden'),
                    (a.style.fontFamily = `"${e}"`),
                    (a.style.fontWeight = r || 'normal'),
                    (a.style.fontSize = `${n}px`),
                    (a.style.lineHeight = '1'),
                    (a.style.whiteSpace = 'nowrap'),
                    (a.style.padding = '0'),
                    (a.style.margin = '0'),
                    document.body.appendChild(a));
                let l = a.getBoundingClientRect(),
                    s = Math.ceil(l.width),
                    c = Math.ceil(l.height);
                document.body.removeChild(a);
                let u = document.createElement('canvas');
                ((u.width = Math.max(1, s * o)), (u.height = Math.max(1, c * o)));
                let d = u.getContext('2d');
                return (
                    d.scale(o, o),
                    (d.font = r ? `${r} ${n}px "${e}"` : `${n}px "${e}"`),
                    (d.textAlign = 'left'),
                    (d.textBaseline = 'top'),
                    (d.fillStyle = i),
                    d.fillText(t, 0, 0),
                    { dataUrl: u.toDataURL(), width: s, height: c }
                );
            }
            w();
            var ec = new Set([
                    'serif',
                    'sans-serif',
                    'monospace',
                    'cursive',
                    'fantasy',
                    'system-ui',
                    'emoji',
                    'math',
                    'fangsong',
                    'ui-serif',
                    'ui-sans-serif',
                    'ui-monospace',
                    'ui-rounded',
                ]),
                eu = ['katex', 'mathjax', 'mathml'];
            function ed(t) {
                if (!t) return '';
                for (let e of t.split(',')) {
                    let t = e.trim().replace(/^['"]+|['"]+$/g, '');
                    if (t && !ec.has(t.toLowerCase())) return t;
                }
                return '';
            }
            function ef(t) {
                let e = String(t ?? '400')
                    .trim()
                    .toLowerCase();
                if ('normal' === e) return 400;
                if ('bold' === e) return 700;
                let r = parseInt(e, 10);
                return Number.isFinite(r) ? Math.min(900, Math.max(100, r)) : 400;
            }
            function eh(t) {
                let e = String(t ?? 'normal')
                    .trim()
                    .toLowerCase();
                return e.startsWith('italic') ? 'italic' : e.startsWith('oblique') ? 'oblique' : 'normal';
            }
            function em(t, e) {
                return (
                    t &&
                    t.replace(/url\(\s*(['"]?)([^)'"]+)\1\s*\)/g, (t, r, n) => {
                        let i = (n || '').trim();
                        if (!i || /^data:|^blob:|^https?:|^file:|^about:/i.test(i)) return t;
                        let o = i;
                        try {
                            o = new URL(i, e || location.href).href;
                        } catch {}
                        return `url("${o}")`;
                    })
                );
            }
            var ep = /@import\s+(?:url\(\s*(['"]?)([^)"']+)\1\s*\)|(['"])([^"']+)\3)([^;]*);/g;
            async function eg(t, e, r) {
                if (!t) return t;
                let n = new Set();
                async function i(t, e, o = 0) {
                    if (o > 4) return (console.warn(`[snapDOM] @import depth exceeded (4) at ${e}`), t);
                    let a = '',
                        l = 0,
                        s;
                    for (; (s = ep.exec(t));) {
                        ((a += t.slice(l, s.index)), (l = ep.lastIndex));
                        let c = (function (t, e) {
                            try {
                                return new URL(t, e || location.href).href;
                            } catch {
                                return t;
                            }
                        })((s[2] || s[4] || '').trim(), e);
                        if (n.has(c)) {
                            console.warn(`[snapDOM] Skipping circular @import: ${c}`);
                            continue;
                        }
                        n.add(c);
                        let u = '';
                        try {
                            let t = await p(c, { as: 'text', useProxy: r, silent: !0 });
                            t.ok && 'string' == typeof t.data && (u = t.data);
                        } catch {}
                        u
                            ? ((u = em(u, c)),
                              (u = await i(u, c, o + 1)),
                              (a += `
/* inlined: ${c} */
${u}
`))
                            : (a += s[0]);
                    }
                    return a + t.slice(l);
                }
                let o = em(t, e || location.href);
                return await i(o, e || location.href, 0);
            }
            var ey = /url\((["']?)([^"')]+)\1\)/g,
                eb = /@font-face[^{}]*\{[^}]*\}/g;
            function ew(t, e, r = '') {
                return (t.match(RegExp(`${e}\\s*:\\s*([^;}]+)[;}]`, 'i'))?.[1] || r).trim();
            }
            function ex(t) {
                if (!t) return [];
                let e = [];
                for (let r of t
                    .split(',')
                    .map((t) => t.trim())
                    .filter(Boolean)) {
                    let t = r.match(/^U\+([0-9A-Fa-f?]+)(?:-([0-9A-Fa-f?]+))?$/);
                    if (!t) continue;
                    let n = t[1],
                        i = t[2],
                        o = (t) => (t.includes('?') ? [parseInt(t.replace(/\?/g, '0'), 16), parseInt(t.replace(/\?/g, 'F'), 16)] : parseInt(t, 16));
                    if (i) {
                        let t = o(n),
                            r = o(i),
                            a = Array.isArray(t) ? t[0] : t,
                            l = Array.isArray(r) ? r[1] : r;
                        e.push([Math.min(a, l), Math.max(a, l)]);
                    } else {
                        let t = o(n);
                        Array.isArray(t) ? e.push([t[0], t[1]]) : e.push([t, t]);
                    }
                }
                return e;
            }
            function eS(t, e) {
                if (!e.length || !t || 0 === t.size) return !0;
                for (let r of t) for (let [t, n] of e) if (r >= t && r <= n) return !0;
                return !1;
            }
            function ev(t, e) {
                let r = [];
                if (!t) return r;
                for (let n of t.matchAll(ey)) {
                    let t = (n[2] || '').trim();
                    if (!(!t || t.startsWith('data:'))) {
                        if (!/^https?:/i.test(t))
                            try {
                                t = new URL(t, e || location.href).href;
                            } catch {}
                        r.push(t);
                    }
                }
                return r;
            }
            async function eC(t, e, r = '') {
                let n = t;
                for (let o of t.matchAll(ey)) {
                    let t = c(o[0]);
                    if (!t) continue;
                    let a = t;
                    if (!a.startsWith('http') && !a.startsWith('data:'))
                        try {
                            a = new URL(a, e || location.href).href;
                        } catch {}
                    if (!er(a)) {
                        if (i.resource?.has(a)) {
                            (i.font?.add(a), (n = n.replace(o[0], `url(${i.resource.get(a)})`)));
                            continue;
                        }
                        try {
                            let t = await p(a, { as: 'dataURL', useProxy: r, silent: !0 });
                            if (t.ok && 'string' == typeof t.data) {
                                let e = t.data;
                                (i.resource?.set(a, e), i.font?.add(a), (n = n.replace(o[0], `url(${e})`)));
                            }
                        } catch {
                            console.warn('[snapDOM] Failed to fetch font resource:', a);
                        }
                    }
                }
                return n;
            }
            function eM(t = {}) {
                let e = new Set((t.families || []).map((t) => String(t).toLowerCase())),
                    r = new Set((t.domains || []).map((t) => String(t).toLowerCase())),
                    n = new Set((t.subsets || []).map((t) => String(t).toLowerCase()));
                return (t, i) => {
                    if (e.size && e.has(t.family.toLowerCase())) return !0;
                    if (r.size)
                        for (let e of t.srcUrls)
                            try {
                                if (r.has(new URL(e).host.toLowerCase())) return !0;
                            } catch {}
                    if (n.size) {
                        let t = (function (t) {
                            if (!t.length) return null;
                            let e = (e, r) => t.some(([t, n]) => !(n < e || t > r)),
                                r = e(0, 255) || e(305, 305),
                                n = e(256, 591) || e(7680, 7935),
                                i = e(880, 1023),
                                o = e(1024, 1279);
                            return e(7840, 7929) || e(258, 259) || e(416, 417) || e(431, 432)
                                ? 'vietnamese'
                                : o
                                  ? 'cyrillic'
                                  : i
                                    ? 'greek'
                                    : n
                                      ? 'latin-ext'
                                      : r
                                        ? 'latin'
                                        : null;
                        })(i);
                        if (t && n.has(t)) return !0;
                    }
                    return !1;
                };
            }
            var e$ = new WeakMap(),
                ek = 0;
            async function eA(t, e, r, n) {
                let i;
                try {
                    i = t.cssRules || [];
                } catch {
                    return;
                }
                let o = (t, e) => {
                    try {
                        return new URL(t, e || location.href).href;
                    } catch {
                        return t;
                    }
                };
                for (let t of i) {
                    if (t.type === CSSRule.IMPORT_RULE && t.styleSheet) {
                        let i = t.href ? o(t.href, e) : e;
                        if (n.depth >= 4) {
                            console.warn(`[snapDOM] CSSOM import depth exceeded (4) at ${i}`);
                            continue;
                        }
                        if (i && n.visitedSheets.has(i)) {
                            console.warn(`[snapDOM] Skipping circular CSSOM import: ${i}`);
                            continue;
                        }
                        i && n.visitedSheets.add(i);
                        let a = { ...n, depth: (n.depth || 0) + 1 };
                        await eA(t.styleSheet, i, r, a);
                        continue;
                    }
                    if (t.type === CSSRule.FONT_FACE_RULE) {
                        let i = ed((t.style.getPropertyValue('font-family') || '').trim());
                        if (!i || er(i)) continue;
                        let o = (t.style.getPropertyValue('font-weight') || '400').trim(),
                            a = (t.style.getPropertyValue('font-style') || 'normal').trim(),
                            l = (t.style.getPropertyValue('font-stretch') || '100%').trim(),
                            s = (t.style.getPropertyValue('src') || '').trim(),
                            c = (t.style.getPropertyValue('unicode-range') || '').trim();
                        if (!n.faceMatchesRequired(i, a, o, l)) continue;
                        let u = ex(c);
                        if (!eS(n.usedCodepoints, u)) continue;
                        let d = {
                            family: i,
                            weightSpec: o,
                            styleSpec: a,
                            stretchSpec: l,
                            unicodeRange: c,
                            srcRaw: s,
                            srcUrls: ev(s, e || location.href),
                            href: e || location.href,
                        };
                        if (n.simpleExcluder && n.simpleExcluder(d, u)) continue;
                        if (/url\(/i.test(s)) {
                            let t = await eC(s, e || location.href, n.useProxy);
                            await r(`@font-face{font-family:${i};src:${t};font-style:${a};font-weight:${o};font-stretch:${l};${c ? `unicode-range:${c};` : ''}}`);
                        } else await r(`@font-face{font-family:${i};src:${s};font-style:${a};font-weight:${o};font-stretch:${l};${c ? `unicode-range:${c};` : ''}}`);
                    }
                }
            }
            async function eE({
                required: t,
                usedCodepoints: e,
                exclude: r,
                localFonts: n = [],
                useProxy: o = '',
                fontStylesheetDomains: a = [],
                doc: l = document,
            } = {}) {
                var s;
                let c, u, d, f, h, m;
                (t instanceof Set || (t = new Set()), e instanceof Set || (e = new Set()));
                let g = new Map();
                for (let e of t) {
                    let [t, r, n, i] = String(e).split('__');
                    if (!t) continue;
                    let o = t.toLowerCase(),
                        a = g.get(o) || [];
                    (a.push({ w: parseInt(r, 10), s: n, st: parseInt(i, 10) }), g.set(o, a));
                }
                function y(t, e, r, n) {
                    let i,
                        o = String(t).toLowerCase();
                    if (!g.has(o)) return !1;
                    let a = g.get(o),
                        l = (function (t) {
                            let e = String(t || '400').trim(),
                                r = e.match(/^(\d{2,3})\s+(\d{2,3})$/);
                            if (r) {
                                let t = ef(r[1]),
                                    e = ef(r[2]);
                                return { min: Math.min(t, e), max: Math.max(t, e) };
                            }
                            let n = ef(e);
                            return { min: n, max: n };
                        })(r),
                        s =
                            'italic' ===
                            (i = String(e || 'normal')
                                .trim()
                                .toLowerCase())
                                ? { kind: 'italic' }
                                : i.startsWith('oblique')
                                  ? { kind: 'oblique' }
                                  : { kind: 'normal' },
                        c = (function (t) {
                            let e = String(t || '100%').trim(),
                                r = e.match(/(\d+(?:\.\d+)?)\s*%\s+(\d+(?:\.\d+)?)\s*%/);
                            if (r) {
                                let t = parseFloat(r[1]),
                                    e = parseFloat(r[2]);
                                return { min: Math.min(t, e), max: Math.max(t, e) };
                            }
                            let n = e.match(/(\d+(?:\.\d+)?)\s*%/),
                                i = n ? parseFloat(n[1]) : 100;
                            return { min: i, max: i };
                        })(n),
                        u = l.min !== l.max,
                        d = l.min,
                        f = (t) => ('normal' === s.kind && 'normal' === t) || ('normal' !== s.kind && ('italic' === t || 'oblique' === t)),
                        h = !1;
                    for (let t of a) {
                        let e = u ? t.w >= l.min && t.w <= l.max : t.w === d,
                            r = f(eh(t.s)),
                            n = t.st >= c.min && t.st <= c.max;
                        if (e && r && n) {
                            h = !0;
                            break;
                        }
                    }
                    if (h) return !0;
                    if (!u)
                        for (let t of a) {
                            let e = f(eh(t.s)),
                                r = t.st >= c.min && t.st <= c.max;
                            if (300 >= Math.abs(d - t.w) && e && r) return !0;
                        }
                    if (!u && 'normal' === s.kind && a.some((t) => 'normal' !== eh(t.s)))
                        for (let t of a) {
                            let e = 300 >= Math.abs(d - t.w),
                                r = t.st >= c.min && t.st <= c.max;
                            if (e && r) return !0;
                        }
                    return !1;
                }
                let b = eM(r),
                    w =
                        ((u = Array.from(t || [])
                            .sort()
                            .join('|')),
                        (d = r
                            ? JSON.stringify({
                                  families: (r.families || []).map((t) => String(t).toLowerCase()).sort(),
                                  domains: (r.domains || []).map((t) => String(t).toLowerCase()).sort(),
                                  subsets: (r.subsets || []).map((t) => String(t).toLowerCase()).sort(),
                              })
                            : ''),
                        (f = (n || [])
                            .map((t) => `${(t.family || '').toLowerCase()}::${t.weight || 'normal'}::${t.style || 'normal'}::${t.src || ''}`)
                            .sort()
                            .join('|')),
                        (h = (a || [])
                            .map((t) => String(t).toLowerCase())
                            .sort()
                            .join('|')),
                        (s = l || document),
                        void 0 === (c = e$.get(s)) && ((c = ek++), e$.set(s, c)),
                        (m = c),
                        `fonts-embed-css::req=${u}::ex=${d}::lf=${f}::px=${o || ''}::fd=${h}::doc=${m}`);
                if (i.resource?.has(w)) return i.resource.get(w);
                let x = (function (t) {
                        let e = new Set();
                        for (let r of t || []) {
                            let t = String(r).split('__')[0]?.trim();
                            t && e.add(t);
                        }
                        return e;
                    })(t),
                    S = [];
                for (let t of l.querySelectorAll('style'))
                    for (let e of (t.textContent || '').matchAll(ep)) {
                        let t = (e[2] || e[4] || '').trim();
                        !(!t || er(t)) && (l.querySelector(`link[rel="stylesheet"][href="${t}"]`) || S.push(t));
                    }
                let v = [];
                S.length &&
                    (await Promise.all(
                        S.map(
                            (t) =>
                                new Promise((e) => {
                                    if (l.querySelector(`link[rel="stylesheet"][href="${t}"]`)) return e(null);
                                    let r = l.createElement('link');
                                    ((r.rel = 'stylesheet'),
                                        (r.href = t),
                                        r.setAttribute('data-snapdom', 'injected-import'),
                                        (r.onload = () => e(r)),
                                        (r.onerror = () => e(null)),
                                        l.head.appendChild(r),
                                        v.push(r));
                                }),
                        ),
                    ));
                let C = '',
                    M = Array.from(l.querySelectorAll('link[rel="stylesheet"]')).filter((t) => !!t.href);
                for (let t of v)
                    try {
                        t.remove();
                    } catch {}
                for (let t of M)
                    try {
                        if (er(t.href)) continue;
                        let n = '',
                            i = !1;
                        try {
                            i = new URL(t.href, location.href).origin === location.origin;
                        } catch {}
                        if (!i) {
                            let e = Array.isArray(a) ? a : [];
                            if (
                                !(function (t, e, r = []) {
                                    if (!t) return !1;
                                    try {
                                        let n = new URL(t, location.href);
                                        if (n.origin === location.origin) return !0;
                                        let i = n.host.toLowerCase();
                                        if (
                                            [
                                                'fonts.googleapis.com',
                                                'fonts.gstatic.com',
                                                'use.typekit.net',
                                                'p.typekit.net',
                                                'kit.fontawesome.com',
                                                'use.fontawesome.com',
                                                'cdn.jsdelivr.net',
                                                'unpkg.com',
                                                'cdnjs.cloudflare.com',
                                                'esm.sh',
                                            ].some((t) => i.endsWith(t)) ||
                                            r.some((t) => i === t.toLowerCase() || i.endsWith('.' + t.toLowerCase()))
                                        )
                                            return !0;
                                        let o = (n.pathname + n.search).toLowerCase();
                                        if (/\bfont(s)?\b/.test(o) || /\.woff2?(\b|$)/.test(o) || eu.some((t) => o.includes(t))) return !0;
                                        for (let t of e) {
                                            let e = t.toLowerCase().replace(/\s+/g, '+'),
                                                r = t.toLowerCase().replace(/\s+/g, '-'),
                                                n =
                                                    t && 'string' == typeof t
                                                        ? t
                                                              .replace(/\s+(variable|vf|v[0-9]+)$/i, '')
                                                              .trim()
                                                              .toLowerCase()
                                                              .replace(/\s+/g, '-')
                                                        : '';
                                            if (o.includes(e) || o.includes(r) || (n && o.includes(n))) return !0;
                                        }
                                        return !1;
                                    } catch {
                                        return !1;
                                    }
                                })(t.href, x, e)
                            )
                                continue;
                        }
                        if (i) {
                            let e = Array.from(l.styleSheets).find((e) => e.href === t.href);
                            if (e)
                                try {
                                    let t = e.cssRules || [];
                                    n = Array.from(t)
                                        .map((t) => t.cssText)
                                        .join('');
                                } catch {}
                        }
                        if (!n) {
                            let e = await p(t.href, { as: 'text', useProxy: o });
                            if ((e?.ok && 'string' == typeof e.data && (n = e.data), er(t.href))) continue;
                        }
                        n = await eg(n, t.href, o);
                        let s = '';
                        for (let i of n.match(eb) || []) {
                            let n = ew(i, 'font-family'),
                                a = ed(n);
                            if (!a || er(a)) continue;
                            let l = ew(i, 'font-weight', '400'),
                                c = ew(i, 'font-style', 'normal'),
                                u = ew(i, 'font-stretch', '100%'),
                                d = ew(i, 'unicode-range'),
                                f = ew(i, 'src'),
                                h = ev(f, t.href);
                            if (!y(a, c, l, u)) continue;
                            let m = ex(d);
                            if (!eS(e, m)) continue;
                            let p = { family: a, weightSpec: l, styleSpec: c, stretchSpec: u, unicodeRange: d, srcRaw: f, srcUrls: h, href: t.href };
                            if (r && b(p, m)) continue;
                            let g = /url\(/i.test(f) ? await eC(i, t.href, o) : i;
                            s += g;
                        }
                        s.trim() && (C += s);
                    } catch {
                        console.warn('[snapDOM] Failed to process stylesheet:', t.href);
                    }
                let $ = {
                    requiredIndex: g,
                    usedCodepoints: e,
                    faceMatchesRequired: y,
                    simpleExcluder: r ? eM(r) : null,
                    useProxy: o,
                    visitedSheets: new Set(),
                    depth: 0,
                };
                for (let t of l.styleSheets)
                    if (!(t.href && M.some((e) => e.href === t.href)))
                        try {
                            let e = t.href || location.origin + '/';
                            (e && $.visitedSheets.add(e),
                                await eA(
                                    t,
                                    e,
                                    async (t) => {
                                        C += t;
                                    },
                                    $,
                                ));
                        } catch {}
                try {
                    for (let t of l.fonts || []) {
                        if (!t || !t.family || 'loaded' !== t.status || !t._snapdomSrc) continue;
                        let e = String(t.family).replace(/^['"]+|['"]+$/g, '');
                        if (er(e) || !g.has(e.toLowerCase()) || (r?.families && r.families.some((t) => String(t).toLowerCase() === e.toLowerCase()))) continue;
                        let n = t._snapdomSrc;
                        if (!String(n).startsWith('data:')) {
                            if (i.resource?.has(t._snapdomSrc)) ((n = i.resource.get(t._snapdomSrc)), i.font?.add(t._snapdomSrc));
                            else if (!i.font?.has(t._snapdomSrc))
                                try {
                                    let e = await p(t._snapdomSrc, { as: 'dataURL', useProxy: o, silent: !0 });
                                    if (!e.ok || 'string' != typeof e.data) continue;
                                    ((n = e.data), i.resource?.set(t._snapdomSrc, n), i.font?.add(t._snapdomSrc));
                                } catch {
                                    console.warn('[snapDOM] Failed to fetch dynamic font src:', t._snapdomSrc);
                                    continue;
                                }
                        }
                        C += `@font-face{font-family:'${e}';src:url(${n});font-style:${t.style || 'normal'};font-weight:${t.weight || 'normal'};}`;
                    }
                } catch {}
                for (let t of n) {
                    if (!t || 'object' != typeof t) continue;
                    let e = String(t.family || '').replace(/^['"]+|['"]+$/g, '');
                    if (!e || er(e) || !g.has(e.toLowerCase()) || (r?.families && r.families.some((t) => String(t).toLowerCase() === e.toLowerCase()))) continue;
                    let n = null != t.weight ? String(t.weight) : 'normal',
                        a = null != t.style ? String(t.style) : 'normal',
                        l = null != t.stretchPct ? `${t.stretchPct}%` : '100%',
                        s = String(t.src || ''),
                        c = s;
                    if (!c.startsWith('data:')) {
                        if (i.resource?.has(s)) ((c = i.resource.get(s)), i.font?.add(s));
                        else if (!i.font?.has(s))
                            try {
                                let t = await p(s, { as: 'dataURL', useProxy: o, silent: !0 });
                                if (!t.ok || 'string' != typeof t.data) continue;
                                ((c = t.data), i.resource?.set(s, c), i.font?.add(s));
                            } catch {
                                console.warn('[snapDOM] Failed to fetch localFonts src:', s);
                                continue;
                            }
                    }
                    C += `@font-face{font-family:'${e}';src:url(${c});font-style:${a};font-weight:${n};font-stretch:${l};}`;
                }
                return (
                    C &&
                        ((C = (function (t) {
                            if (!t) return t;
                            let e = /@font-face[^{}]*\{[^}]*\}/gi,
                                r = new Set(),
                                n = [];
                            for (let i of t.match(e) || []) {
                                let t = ed(ew(i, 'font-family')),
                                    e = ew(i, 'font-weight', '400'),
                                    o = ew(i, 'font-style', 'normal'),
                                    a = ew(i, 'font-stretch', '100%'),
                                    l = ew(i, 'unicode-range'),
                                    s = ew(i, 'src'),
                                    c = ev(s, location.href),
                                    u = c.length
                                        ? c
                                              .map((t) => String(t).toLowerCase())
                                              .sort()
                                              .join('|')
                                        : s.toLowerCase(),
                                    d = [String(t || '').toLowerCase(), e, o, a, l.toLowerCase(), u].join('|');
                                r.has(d) || (r.add(d), n.push(i));
                            }
                            if (0 === n.length) return t;
                            let i = 0;
                            return t.replace(e, () => n[i++] || '');
                        })(C)),
                        i.resource?.set(w, C)),
                    C
                );
            }
            function eF(t, e) {
                let r = new Set(),
                    n = new Set();
                if (!t) return { required: r, usedCodepoints: n };
                let i = (t) => {
                        if (t) for (let e of t) n.add(e.codePointAt(0));
                    },
                    o = (t) => {
                        let e = (function (t) {
                            if (!t) return [];
                            let e = [];
                            for (let r of t.split(',')) {
                                let t = r.trim().replace(/^['"]+|['"]+$/g, '');
                                t && (ec.has(t.toLowerCase()) || e.push(t));
                            }
                            return e;
                        })(t.fontFamily);
                        if (e.length)
                            for (let n of e)
                                r.add(
                                    `${n}__${ef(t.fontWeight)}__${eh(t.fontStyle)}__${(function (t) {
                                        let e = String(t ?? '100%').match(/(\d+(?:\.\d+)?)\s*%/);
                                        return e ? Math.max(50, Math.min(200, parseFloat(e[1]))) : 100;
                                    })(t.fontStretch)}`,
                                );
                    },
                    a = (t) => {
                        for (let e of (o(k(t)), ['::before', '::after'])) {
                            let r = k(t, e),
                                a = r && r.content;
                            if (!(!a || 'none' === a || 'normal' === a))
                                if ((o(r), /^["']/.test(a))) i(a.slice(1, -1));
                                else {
                                    let t = a.match(/\\[0-9A-Fa-f]{1,6}/g);
                                    if (t)
                                        for (let e of t)
                                            try {
                                                n.add(parseInt(e.slice(1), 16));
                                            } catch {}
                                }
                        }
                    };
                a(t);
                let l = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null);
                for (; l.nextNode();) {
                    let t = l.currentNode;
                    if (t.nodeType === Node.TEXT_NODE) {
                        if (e && t.parentElement && !e(t.parentElement)) continue;
                        i(t.nodeValue || '');
                    } else {
                        if (e && !e(t)) continue;
                        a(t);
                    }
                }
                return { required: r, usedCodepoints: n };
            }
            async function eN(t, e = 2, r = document) {
                try {
                    await r.fonts.ready;
                } catch {}
                let n = Array.from(t || []).filter(Boolean);
                if (0 === n.length) return;
                let i = () => {
                    let t = r.createElement('div');
                    for (let e of (t.setAttribute('data-snapdom-internal', ''),
                    (t.style.cssText =
                        'position:absolute!important;left:-9999px!important;top:0!important;opacity:0!important;pointer-events:none!important;contain:layout size style;'),
                    n)) {
                        let n = r.createElement('span');
                        ((n.textContent = 'AaBbGg1234\xc1\xc9\xcd\xd3\xda\xe7\xf1—∞'),
                            (n.style.fontFamily = `"${e}"`),
                            (n.style.fontWeight = '700'),
                            (n.style.fontStyle = 'italic'),
                            (n.style.fontSize = '32px'),
                            (n.style.lineHeight = '1'),
                            (n.style.whiteSpace = 'nowrap'),
                            (n.style.margin = '0'),
                            (n.style.padding = '0'),
                            t.appendChild(n));
                    }
                    (r.body.appendChild(t), t.offsetWidth, r.body.removeChild(t));
                };
                for (let t = 0; t < Math.max(1, e); t++) (i(), await new Promise((t) => requestAnimationFrame(() => requestAnimationFrame(t))));
            }
            function eR(t, e = !1) {
                let r = '',
                    n = Math.max(1, t);
                for (; n > 0;) ((r = String.fromCharCode(97 + (--n % 26)) + r), (n = Math.floor(n / 26)));
                return e ? r.toUpperCase() : r;
            }
            function eL(t, e = !0) {
                let r = Math.max(1, Math.min(3999, t)),
                    n = '';
                for (let [t, e] of [
                    [1e3, 'M'],
                    [900, 'CM'],
                    [500, 'D'],
                    [400, 'CD'],
                    [100, 'C'],
                    [90, 'XC'],
                    [50, 'L'],
                    [40, 'XL'],
                    [10, 'X'],
                    [9, 'IX'],
                    [5, 'V'],
                    [4, 'IV'],
                    [1, 'I'],
                ])
                    for (; r >= t;) ((n += e), (r -= t));
                return e ? n : n.toLowerCase();
            }
            function eP(t, e) {
                switch ((e || 'decimal').toLowerCase()) {
                    case 'decimal':
                    default:
                        return String(t);
                    case 'decimal-leading-zero': {
                        let e = Math.abs(t);
                        return (t < 0 ? '-' : '') + (e < 10 ? '0' : '') + String(e);
                    }
                    case 'lower-alpha':
                        return eR(t, !1);
                    case 'upper-alpha':
                        return eR(t, !0);
                    case 'lower-roman':
                        return eL(t, !1);
                    case 'upper-roman':
                        return eL(t, !0);
                }
            }
            w();
            var eT = new WeakMap();
            function eW(t) {
                try {
                    return t && t.cssRules ? t.cssRules : null;
                } catch {
                    return null;
                }
            }
            function eI(t) {
                let e = t.querySelectorAll('style,link[rel~="stylesheet"]'),
                    r = `n:${e.length}|`,
                    n = 0;
                for (let t = 0; t < e.length; t++) {
                    let i = e[t];
                    if ('STYLE' === i.tagName) {
                        let t = i.textContent ? i.textContent.length : 0;
                        r += `S${t}|`;
                        let e = i.sheet,
                            o = e ? eW(e) : null;
                        o && (n += o.length);
                    } else {
                        let t = i.getAttribute('href') || '',
                            e = i.getAttribute('media') || 'all';
                        r += `L${t}|m:${e}|`;
                        let o = i.sheet,
                            a = o ? eW(o) : null;
                        a && (n += a.length);
                    }
                }
                let i = t.adoptedStyleSheets;
                return r + `ass:${Array.isArray(i) ? i.length : 0}|tr:${n}`;
            }
            function e_(t, e, r) {
                let n = eW(t);
                if (!n) return !1;
                for (let t = 0; t < n.length && !(r.budget <= 0); t++) {
                    let i = n[t],
                        o = i && i.cssText ? i.cssText : '';
                    for (let t of (r.budget--, e)) if (o.includes(t)) return !0;
                    if (i && i.cssRules && i.cssRules.length)
                        for (let t = 0; t < i.cssRules.length && r.budget > 0; t++) {
                            let n = i.cssRules[t],
                                o = n && n.cssText ? n.cssText : '';
                            for (let t of (r.budget--, e)) if (o.includes(t)) return !0;
                        }
                    if (r.budget <= 0) break;
                }
                return !1;
            }
            function eO(t = document, e = eI(t)) {
                let r = eT.get(t);
                if (r && r.fingerprint === e) return r.result;
                let n = ['::before', '::after', '::first-letter', ':before', ':after', ':first-letter', 'counter(', 'counters(', 'counter-increment', 'counter-reset'],
                    i = t.querySelectorAll('style');
                for (let r = 0; r < i.length; r++) {
                    let o = i[r].textContent || '';
                    for (let r of n) if (o.includes(r)) return (eT.set(t, { fingerprint: e, result: !0 }), !0);
                }
                let o = t.adoptedStyleSheets;
                if (Array.isArray(o) && o.length) {
                    let r = { budget: 1e3 };
                    try {
                        for (let i of o) if (e_(i, n, r)) return (eT.set(t, { fingerprint: e, result: !0 }), !0);
                    } catch {}
                }
                {
                    let r = t.querySelectorAll('style,link[rel~="stylesheet"]'),
                        i = { budget: 1e3 };
                    for (let o = 0; o < r.length && i.budget > 0; o++) {
                        let a = r[o],
                            l = null;
                        if ((a.tagName, (l = a.sheet || null) && e_(l, n, i))) return (eT.set(t, { fingerprint: e, result: !0 }), !0);
                    }
                }
                return t.querySelector('[style*="counter("], [style*="counters("]')
                    ? (eT.set(t, { fingerprint: e, result: !0 }), !0)
                    : (eT.set(t, { fingerprint: e, result: !1 }), !1);
            }
            function eD(t) {
                for (let e of ['Top', 'Right', 'Bottom', 'Left']) {
                    let r = parseFloat(t[`border${e}Width`]) || 0,
                        n = t[`border${e}Style`];
                    if (r > 0 && n && 'none' !== n && 'hidden' !== n) return !0;
                }
                return !1;
            }
            function eH(t, e, r) {
                let n = t.parentElement,
                    i = n && r ? r.get(n) : null;
                return i
                    ? {
                          get(t, r) {
                              let n = e.get(t, r),
                                  o = i.get(r);
                              return 'number' == typeof o ? Math.max(n, o) : n;
                          },
                          getStack(t, r) {
                              let n = e.getStack(t, r);
                              if (!n.length) return n;
                              let o = i.get(r);
                              if ('number' == typeof o) {
                                  let t = n.slice();
                                  return ((t[t.length - 1] = Math.max(t[t.length - 1], o)), t);
                              }
                              return n;
                          },
                      }
                    : e;
            }
            function ej(t, e, r) {
                let n = new Map();
                function i(t) {
                    let e = [];
                    if (!t || 'none' === t) return e;
                    for (let r of String(t).split(',')) {
                        let t = r.trim().split(/\s+/),
                            n = t[0],
                            i = Number.isFinite(Number(t[1])) ? Number(t[1]) : void 0;
                        n && e.push({ name: n, num: i });
                    }
                    return e;
                }
                let o = i(e?.counterReset),
                    a = i(e?.counterSet),
                    l = i(e?.counterIncrement);
                function s(e) {
                    if (n.has(e)) return n.get(e).slice();
                    let i = r.getStack(t, e);
                    i = i.length ? i.slice() : [];
                    let s = o.find((t) => t.name === e);
                    if (s) {
                        let t = Number.isFinite(s.num) ? s.num : 0;
                        i = i.length ? [...i, t] : [t];
                    }
                    let c = a.find((t) => t.name === e);
                    if (c) {
                        let t = Number.isFinite(c.num) ? c.num : 0;
                        (0 === i.length && (i = [0]), (i[i.length - 1] = t));
                    }
                    let u = l.find((t) => t.name === e);
                    if (u) {
                        let t = Number.isFinite(u.num) ? u.num : 1;
                        (0 === i.length && (i = [0]), (i[i.length - 1] += t));
                    }
                    return (n.set(e, i.slice()), i);
                }
                return {
                    get(t, e) {
                        let r = s(e);
                        return r.length ? r[r.length - 1] : 0;
                    },
                    getStack: (t, e) => s(e),
                    __incs: l,
                };
            }
            async function eU(t, e, r, n) {
                var i, o;
                let a, l, s;
                if (
                    t?.nodeType !== 1 ||
                    e?.nodeType !== 1 ||
                    'TEXTAREA' === t.tagName ||
                    ((i = t.ownerDocument || document),
                    (a = eI(i)),
                    r ? (r.__pseudoPreflightFp !== a && ((r.__pseudoPreflight = eO(i, a)), (r.__pseudoPreflightFp = a)), !r.__pseudoPreflight) : !eO(i, a))
                )
                    return;
                (r.__siblingCounters || (r.__siblingCounters = new WeakMap()),
                    r.__counterCtx ||
                        ((o = t.ownerDocument || document),
                        (l = null),
                        (s = () => {
                            if (!l)
                                try {
                                    let t, e, r, n, i;
                                    ((t = new WeakMap()),
                                        (e = o instanceof Document ? o.documentElement : o),
                                        (r = (t) => {
                                            let e = 0,
                                                r = t?.parentElement;
                                            if (!r) return 0;
                                            for (let n of r.children) {
                                                if (n === t) break;
                                                'LI' === n.tagName && e++;
                                            }
                                            return e;
                                        }),
                                        (n = (e, i, o) => {
                                            let a = ((t, e, n) => {
                                                let i,
                                                    o,
                                                    a = ((t) => {
                                                        let e = new Map();
                                                        for (let [r, n] of t) e.set(r, n.slice());
                                                        return e;
                                                    })(t),
                                                    l;
                                                try {
                                                    l = n.style?.counterReset || getComputedStyle(n).counterReset;
                                                } catch {}
                                                if (l && 'none' !== l)
                                                    for (let t of l.split(',')) {
                                                        let r = t.trim().split(/\s+/),
                                                            n = r[0],
                                                            i = Number.isFinite(Number(r[1])) ? Number(r[1]) : 0;
                                                        if (!n) continue;
                                                        let o = e.get(n);
                                                        if (o && o.length) {
                                                            let t = o.slice();
                                                            (t.push(i), a.set(n, t));
                                                        } else a.set(n, [i]);
                                                    }
                                                try {
                                                    i = n.style?.counterSet || getComputedStyle(n).counterSet;
                                                } catch {}
                                                if (i && 'none' !== i)
                                                    for (let t of i.split(',')) {
                                                        let e = t.trim().split(/\s+/),
                                                            r = e[0],
                                                            n = Number.isFinite(Number(e[1])) ? Number(e[1]) : 0;
                                                        if (!r) continue;
                                                        let i = a.get(r) || [];
                                                        (0 === i.length && i.push(0), (i[i.length - 1] = n), a.set(r, i));
                                                    }
                                                try {
                                                    o = n.style?.counterIncrement || getComputedStyle(n).counterIncrement;
                                                } catch {}
                                                if (o && 'none' !== o)
                                                    for (let t of o.split(',')) {
                                                        let e = t.trim().split(/\s+/),
                                                            r = e[0],
                                                            n = Number.isFinite(Number(e[1])) ? Number(e[1]) : 1;
                                                        if (!r) continue;
                                                        let i = a.get(r) || [];
                                                        (0 === i.length && i.push(0), (i[i.length - 1] += n), a.set(r, i));
                                                    }
                                                try {
                                                    if ('list-item' === getComputedStyle(n).display && n && 'LI' === n.tagName) {
                                                        let t = n.parentElement,
                                                            e = 1;
                                                        if (t && 'OL' === t.tagName) {
                                                            let i = t.getAttribute('start'),
                                                                o = Number.isFinite(Number(i)) ? Number(i) : 1,
                                                                a = r(n),
                                                                l = n.getAttribute('value');
                                                            e = Number.isFinite(Number(l)) ? Number(l) : o + a;
                                                        } else e = 1 + r(n);
                                                        let i = a.get('list-item') || [];
                                                        (0 === i.length && i.push(0), (i[i.length - 1] = e), a.set('list-item', i));
                                                    }
                                                } catch {}
                                                return a;
                                            })(o, i, e);
                                            t.set(e, a);
                                            let l = a;
                                            for (let t of e.children) l = n(t, a, l);
                                            let s = new Map();
                                            for (let [t, e] of o) {
                                                let r = e.length,
                                                    n = l.get(t);
                                                s.set(t, n && n.length ? n.slice(0, r) : e.slice());
                                            }
                                            for (let [t, e] of l) s.has(t) || !e.length || i.has(t) || s.set(t, e.slice(0, 1));
                                            return s;
                                        }),
                                        (i = new Map()),
                                        n(e, i, i),
                                        (l = {
                                            get(e, r) {
                                                let n = t.get(e)?.get(r);
                                                return n && n.length ? n[n.length - 1] : 0;
                                            },
                                            getStack(e, r) {
                                                let n = t.get(e)?.get(r);
                                                return n ? n.slice() : [];
                                            },
                                        }));
                                } catch (t) {
                                    (q(r, 'buildCounterContext failed', t), (l = { get: () => 0, getStack: () => [] }));
                                }
                            return l;
                        }),
                        (r.__counterCtx = { get: (t, e) => s().get(t, e), getStack: (t, e) => s().getStack(t, e) })));
                let f = r.__counterCtx;
                for (let i of ['::before', '::after', '::first-letter'])
                    try {
                        let o = k(t, i);
                        if (
                            !o ||
                            ('none' === o.content &&
                                'none' === o.backgroundImage &&
                                'transparent' === o.backgroundColor &&
                                !eD(o) &&
                                (!o.transform || 'none' === o.transform) &&
                                'inline' === o.display)
                        )
                            continue;
                        if ('::first-letter' === i) {
                            let n = k(t),
                                i = (n?.display || '').toLowerCase();
                            if (i.includes('flex') || i.includes('grid')) continue;
                            let a = (t) => o[t] !== n[t] && 0 !== (parseFloat(o[t]) || 0);
                            if (
                                !(
                                    o.color !== n.color ||
                                    o.fontSize !== n.fontSize ||
                                    o.fontWeight !== n.fontWeight ||
                                    o.fontFamily !== n.fontFamily ||
                                    o.fontStyle !== n.fontStyle ||
                                    o.textTransform !== n.textTransform ||
                                    (o.float !== n.float && 'none' !== o.float) ||
                                    a('paddingTop') ||
                                    a('paddingRight') ||
                                    a('paddingBottom') ||
                                    a('paddingLeft') ||
                                    a('marginTop') ||
                                    a('marginRight') ||
                                    a('marginBottom') ||
                                    a('marginLeft')
                                )
                            )
                                continue;
                            let l = Array.from(e.childNodes).find((t) => t.nodeType === Node.TEXT_NODE && t.textContent?.trim().length > 0);
                            if (!l) continue;
                            let s = l.textContent,
                                c = s.match(/^([^\p{L}\p{N}\s]*[\p{L}\p{N}](?:['’])?)/u)?.[0],
                                u = s.slice(c?.length || 0);
                            if (!c || /[\uD800-\uDFFF]/.test(c)) continue;
                            let d = document.createElement('span');
                            ((d.textContent = c), (d.dataset.snapdomPseudo = '::first-letter'));
                            let f = A(o),
                                h = $(f, 'span');
                            r.styleMap.set(d, h);
                            let m = document.createTextNode(u);
                            (e.replaceChild(m, l), e.insertBefore(d, m));
                            continue;
                        }
                        let a = o.content ?? '',
                            l = '' === a || 'none' === a || 'normal' === a,
                            { text: s, incs: h } = (function (t, e, r, n) {
                                var i;
                                let o;
                                try {
                                    o = k(t, e);
                                } catch {}
                                let a = o?.content;
                                if (!a || 'none' === a || 'normal' === a) return { text: '', incs: [] };
                                a = (function (t) {
                                    let e = !1;
                                    for (let r = 0; r < t.length; r++) {
                                        let n = t[r];
                                        if ('"' === n) e = !e;
                                        else if ('/' === n && !e) return t.slice(0, r).trim();
                                    }
                                    return t;
                                })(a);
                                let l = eH(t, r, n),
                                    s = ej(t, o, l);
                                return {
                                    text: (function (t) {
                                        if (!t) return '';
                                        let e = [],
                                            r = /"([^"]*)"/g,
                                            n = 0,
                                            i;
                                        for (; (i = r.exec(t));) {
                                            let o = t.slice(n, i.index).trim();
                                            (o && e.push(o), e.push(i[1]), (n = r.lastIndex));
                                        }
                                        let o = t.slice(n).trim();
                                        return (o && e.push(o), e.join(''));
                                    })(
                                        ((i = a), /\bcounter\s*\(|\bcounters\s*\(/.test(i || ''))
                                            ? (function (t, e, r) {
                                                  if (!t || 'none' === t) return t;
                                                  try {
                                                      return t.replace(/\b(counter|counters)\s*\(([^)]+)\)/g, (t, n, i) => {
                                                          let o = String(i)
                                                              .split(',')
                                                              .map((t) => t.trim());
                                                          if ('counter' === n) {
                                                              let t = o[0]?.replace(/^["']|["']$/g, ''),
                                                                  n = (o[1] || 'decimal').toLowerCase(),
                                                                  i = r.get(e, t);
                                                              return eP(i, n);
                                                          }
                                                          {
                                                              let t = o[0]?.replace(/^["']|["']$/g, ''),
                                                                  n = o[1]?.replace(/^["']|["']$/g, '') ?? '',
                                                                  i = (o[2] || 'decimal').toLowerCase(),
                                                                  a = r.getStack(e, t);
                                                              return a.length ? a.map((t) => eP(t, i)).join(n) : '';
                                                          }
                                                      });
                                                  } catch {
                                                      return '- ';
                                                  }
                                              })(a, t, s)
                                            : a,
                                    ),
                                    incs: s.__incs || [],
                                };
                            })(t, i, f, r.__siblingCounters),
                            m = o.backgroundImage,
                            g = o.backgroundColor,
                            y = o.fontFamily,
                            b = parseInt(o.fontSize) || 32,
                            w = parseInt(o.fontWeight) || !1,
                            S = o.color || '#000',
                            v = o.transform,
                            C = er(y),
                            M = !l && '' !== s,
                            F = m && 'none' !== m,
                            N = g && 'transparent' !== g && 'rgba(0, 0, 0, 0)' !== g,
                            R = eD(o),
                            L = v && 'none' !== v,
                            P = 'none' !== a && 'normal' !== a,
                            T = P && ((parseFloat(o.width) || 0) > 0 || (parseFloat(o.height) || 0) > 0),
                            W = P && o.boxShadow && 'none' !== o.boxShadow,
                            I = P && o.outlineStyle && 'none' !== o.outlineStyle && (parseFloat(o.outlineWidth) || 0) > 0;
                        if (!(M || F || N || R || L || T || W || I)) {
                            if (h && h.length && t.parentElement) {
                                let e = r.__siblingCounters.get(t.parentElement) || new Map();
                                for (let { name: n } of h) {
                                    if (!n) continue;
                                    let o = eH(t, f, r.__siblingCounters),
                                        a = ej(t, k(t, i), o).get(t, n);
                                    e.set(n, a);
                                }
                                r.__siblingCounters.set(t.parentElement, e);
                            }
                            continue;
                        }
                        let _ = s.startsWith('url(') || /^-?(?:webkit-)?image-set\(/i.test(s),
                            O = !1;
                        if (M && !C && s.length > 1 && !_) {
                            let r = k(t),
                                n = parseFloat(r.fontSize) || 16,
                                i = parseFloat(r.lineHeight);
                            (Number.isFinite(i) || (i = 1.5 * n), t.getBoundingClientRect().height < 1.6 * i && ((e.style.whiteSpace = 'nowrap'), (O = !0)));
                        }
                        let D = document.createElement('span');
                        ((D.dataset.snapdomPseudo = i), (D.style.pointerEvents = 'none'), O && (D.style.whiteSpace = 'nowrap'));
                        let H = A(o),
                            j = (k(t).display || '').toLowerCase(),
                            U = j.includes('flex') || j.includes('grid');
                        if (U) {
                            let t = H['min-width'];
                            (t && 'auto' !== t && '0px' !== t) || (H['min-width'] = '0px');
                        }
                        let B = $(H, 'span', M, U);
                        if ((r.styleMap.set(D, B), C && s && 1 === s.length)) {
                            let { dataUrl: t, width: r, height: n } = await es(s, y, w, b, S),
                                i = document.createElement('img');
                            ((i.src = t), (i.style = `height:${b}px;width:${(r / n) * b}px;object-fit:contain;`), D.appendChild(i), (e.dataset.snapdomHasIcon = 'true'));
                        } else if (s && _) {
                            let e = u(s, ('u' > typeof devicePixelRatio && devicePixelRatio) || 1) ?? c(s);
                            if (e?.trim())
                                try {
                                    let t = await p(d(e), { as: 'dataURL', useProxy: n.useProxy });
                                    if (t?.ok && 'string' == typeof t.data) {
                                        let e = document.createElement('img');
                                        ((e.src = t.data), (e.style = `width:${b}px;height:auto;object-fit:contain;`), D.appendChild(e));
                                    }
                                } catch (e) {
                                    console.error(`[snapdom] Error in pseudo ${i} for`, t, e);
                                }
                        } else !C && M && (D.textContent = s);
                        ((D.style.backgroundImage = 'none'),
                            'maskImage' in D.style && (D.style.maskImage = 'none'),
                            'webkitMaskImage' in D.style && (D.style.webkitMaskImage = 'none'));
                        try {
                            ((D.style.backgroundRepeat = o.backgroundRepeat),
                                (D.style.backgroundSize = o.backgroundSize),
                                o.backgroundPositionX && o.backgroundPositionY
                                    ? ((D.style.backgroundPositionX = o.backgroundPositionX), (D.style.backgroundPositionY = o.backgroundPositionY))
                                    : (D.style.backgroundPosition = o.backgroundPosition),
                                (D.style.backgroundOrigin = o.backgroundOrigin),
                                (D.style.backgroundClip = o.backgroundClip),
                                (D.style.backgroundAttachment = o.backgroundAttachment),
                                (D.style.backgroundBlendMode = o.backgroundBlendMode));
                        } catch {}
                        if (F)
                            try {
                                let t = E(m),
                                    e = await Promise.all(t.map(x));
                                D.style.backgroundImage = e.join(', ');
                            } catch (t) {
                                console.warn(`[snapdom] Failed to inline background-image for ${i}`, t);
                            }
                        N && (D.style.backgroundColor = g);
                        let V = D.childNodes.length > 0 || D.textContent?.trim() !== '' || F || N || R || L || T || W || I;
                        if (h && h.length && t.parentElement) {
                            let e = r.__siblingCounters.get(t.parentElement) || new Map(),
                                n = eH(t, f, r.__siblingCounters),
                                o = ej(t, k(t, i), n);
                            for (let { name: r } of h) {
                                if (!r) continue;
                                let n = o.get(t, r);
                                e.set(r, n);
                            }
                            r.__siblingCounters.set(t.parentElement, e);
                        }
                        if (!V) continue;
                        '::before' === i ? ((e.dataset.snapdomHasBefore = '1'), e.insertBefore(D, e.firstChild)) : ((e.dataset.snapdomHasAfter = '1'), e.appendChild(D));
                    } catch (e) {
                        console.warn(`[snapdom] Failed to capture ${i} for`, t, e);
                    }
                let h = Array.from(e.children).filter((t) => !t.dataset.snapdomPseudo);
                if (r.nodeMap)
                    for (let t of h) {
                        let e = r.nodeMap.get(t);
                        e?.nodeType === 1 && (await eU(e, t, r, n));
                    }
                else {
                    let e = Array.from(t.children);
                    for (let t = 0; t < Math.min(e.length, h.length); t++) await eU(e[t], h[t], r, n);
                }
            }
            function eB(t) {
                if (!t || 'none' === t) return { top: 0, right: 0, bottom: 0, left: 0 };
                let e = [],
                    r = '',
                    n = 0;
                for (let i = 0; i < t.length; i++) {
                    let o = t[i];
                    ('(' === o ? n++ : ')' === o && (n = Math.max(0, n - 1)), ',' === o && 0 === n ? (e.push(r), (r = '')) : (r += o));
                }
                r.trim() && e.push(r);
                let i = 0,
                    o = 0,
                    a = 0,
                    l = 0;
                for (let t of e) {
                    if (/\binset\b/i.test(t)) continue;
                    let e = t.match(/-?\d+(\.\d+)?px/g)?.map((t) => parseFloat(t)) || [];
                    if (e.length < 2) continue;
                    let [r, n, s = 0, c = 0] = e,
                        u = Math.abs(r) + s + c,
                        d = Math.abs(n) + s + c;
                    ((o = Math.max(o, u + Math.max(r, 0))),
                        (l = Math.max(l, u + Math.max(-r, 0))),
                        (a = Math.max(a, d + Math.max(n, 0))),
                        (i = Math.max(i, d + Math.max(-n, 0))));
                }
                return { top: Math.ceil(i), right: Math.ceil(o), bottom: Math.ceil(a), left: Math.ceil(l) };
            }
            function eV(t, e, r, n, i) {
                let o = r.a,
                    a = r.b,
                    l = r.c,
                    s = r.d,
                    c = r.e || 0,
                    u = r.f || 0;
                function d(t, e) {
                    let r = t - n,
                        d = e - i,
                        f = o * r + l * d,
                        h = a * r + s * d;
                    return [(f += n + c), (h += i + u)];
                }
                let f = [d(0, 0), d(t, 0), d(0, e), d(t, e)],
                    h = 1 / 0,
                    m = 1 / 0,
                    p = -1 / 0,
                    g = -1 / 0;
                for (let [t, e] of f) (t < h && (h = t), e < m && (m = e), t > p && (p = t), e > g && (g = e));
                return { minX: h, minY: m, maxX: p, maxY: g, width: p - h, height: g - m };
            }
            function eq(t, e, r) {
                let n = (t.transformOrigin || '0 0').trim().split(/\s+/),
                    [i, o] = [n[0] || '0', n[1] || '0'],
                    a = (t, e) => {
                        let r = t.toLowerCase();
                        return 'left' === r || 'top' === r
                            ? 0
                            : 'center' === r
                              ? e / 2
                              : 'right' === r || 'bottom' === r
                                ? e
                                : r.endsWith('px')
                                  ? parseFloat(r) || 0
                                  : r.endsWith('%')
                                    ? ((parseFloat(r) || 0) * e) / 100
                                    : (/^-?\d+(\.\d+)?$/.test(r) && parseFloat(r)) || 0;
                    };
                return { ox: a(i, e), oy: a(o, r) };
            }
            function ez(t) {
                let e = { rotate: '0deg', scale: null, translate: null },
                    r = 'function' == typeof t.computedStyleMap ? t.computedStyleMap() : null;
                if (r) {
                    let n = (t) => {
                            try {
                                return ('function' != typeof r.has || r.has(t)) && 'function' == typeof r.get ? r.get(t) : null;
                            } catch {
                                return null;
                            }
                        },
                        i = n('rotate');
                    if (i)
                        if (i.angle) {
                            let t = i.angle;
                            e.rotate = 'rad' === t.unit ? (180 * t.value) / Math.PI + 'deg' : t.value + t.unit;
                        } else i.unit ? (e.rotate = 'rad' === i.unit ? (180 * i.value) / Math.PI + 'deg' : i.value + i.unit) : (e.rotate = String(i));
                    else {
                        let r = getComputedStyle(t);
                        e.rotate = r.rotate && 'none' !== r.rotate ? r.rotate : '0deg';
                    }
                    let o = n('scale');
                    if (o) {
                        let t = 'x' in o && o.x?.value != null ? o.x.value : Array.isArray(o) ? o[0]?.value : Number(o) || 1,
                            r = 'y' in o && o.y?.value != null ? o.y.value : Array.isArray(o) ? o[1]?.value : t;
                        e.scale = `${t} ${r}`;
                    } else {
                        let r = getComputedStyle(t);
                        e.scale = r.scale && 'none' !== r.scale ? r.scale : null;
                    }
                    let a = n('translate');
                    if (a) {
                        let t = 'x' in a && 'value' in a.x ? a.x.value : Array.isArray(a) ? a[0]?.value : 0,
                            r = 'y' in a && 'value' in a.y ? a.y.value : Array.isArray(a) ? a[1]?.value : 0,
                            n = 'x' in a && a.x?.unit ? a.x.unit : 'px',
                            i = 'y' in a && a.y?.unit ? a.y.unit : 'px';
                        e.translate = `${t}${n} ${r}${i}`;
                    } else {
                        let r = getComputedStyle(t);
                        e.translate = r.translate && 'none' !== r.translate ? r.translate : null;
                    }
                    return e;
                }
                let n = getComputedStyle(t);
                return (
                    (e.rotate = n.rotate && 'none' !== n.rotate ? n.rotate : '0deg'),
                    (e.scale = n.scale && 'none' !== n.scale ? n.scale : null),
                    (e.translate = n.translate && 'none' !== n.translate ? n.translate : null),
                    e
                );
            }
            (s(), X(), j());
            var eX = null;
            function eY(t, e) {
                if (!e) return null;
                let r = t.ownerDocument || document,
                    n = r.defaultView || window,
                    i,
                    o,
                    a,
                    l;
                if ('viewport' === e) ((i = 0), (o = 0), (a = r.documentElement?.clientWidth || n.innerWidth), (l = r.documentElement?.clientHeight || n.innerHeight));
                else {
                    if ('object' != typeof e) return null;
                    ((i = (Number(e.x) || 0) - (n.scrollX || 0)), (o = (Number(e.y) || 0) - (n.scrollY || 0)), (a = Number(e.width)), (l = Number(e.height)));
                }
                return a > 0 && l > 0 ? { left: i, top: o, width: a, height: l, right: i + a, bottom: o + l } : null;
            }
            function eG(t) {
                if (t.parentElement) return t.parentElement;
                let e = t.getRootNode && t.getRootNode();
                return e instanceof ShadowRoot ? e.host : null;
            }
            function eQ(t, e) {
                try {
                    let r = new DOMMatrix();
                    if ((e && e.rotate && '0deg' !== e.rotate && (r = r.multiply(new DOMMatrix(`rotate(${e.rotate})`))), e && e.scale)) {
                        let t = String(e.scale).trim().split(/\s+/).filter(Boolean);
                        t.length && t.every((t) => Number.isFinite(Number(t))) && (r = r.multiply(new DOMMatrix(`scale(${t.join(',')})`)));
                    }
                    return (t && (r = r.multiply(new DOMMatrix(t))), r);
                } catch {
                    return null;
                }
            }
            function eJ(t) {
                let e = t.display || '';
                if (
                    e.includes('flex') ||
                    e.includes('grid') ||
                    e.startsWith('table') ||
                    'inline-block' === e ||
                    'flow-root' === e ||
                    'absolute' === t.position ||
                    'fixed' === t.position ||
                    (t.float && 'none' !== t.float)
                )
                    return !0;
                let r = t.overflowX || t.overflow || 'visible',
                    n = t.overflowY || t.overflow || 'visible';
                return !!('visible' !== r || 'visible' !== n || (t.contain && /\b(layout|content|paint|strict)\b/.test(t.contain)));
            }
            var eK = /[\x00-\x08\x0B\x0C\x0E-\x1F\uFFFE\uFFFF]/g,
                eZ = (t, e = 3) => (Number.isFinite(t) ? Math.round(t * 10 ** e) / 10 ** e : t),
                e0 = /::-webkit-scrollbar(-[a-z]+)?\b/i,
                e1 = new WeakMap();
            async function e2(t, e = {}) {
                let r = e.__session || i.session,
                    n = { styleMap: r.styleMap, styleCache: r.styleCache, nodeMap: r.nodeMap, options: e },
                    o = null;
                if (e.clip) {
                    let r = eY(t, e.clip);
                    if (r) {
                        n.clip = { rect: r, root: t };
                        let e = t.getBoundingClientRect();
                        o = { x: r.left - e.left, y: r.top - e.top, width: r.width, height: r.height };
                    }
                }
                let a,
                    l = '',
                    s = '',
                    c = (function (t) {
                        let e = getComputedStyle(t),
                            r = e.outlineStyle,
                            n = e.outlineWidth,
                            i = e.borderStyle,
                            o = e.borderWidth,
                            a = 'none' !== r && parseFloat(n) > 0,
                            l = 'none' === i || 0 === parseFloat(o);
                        if (a && l) {
                            let e = t.style.border;
                            return (
                                (t.style.border = `${n} solid transparent`),
                                () => {
                                    t.style.border = e;
                                }
                            );
                        }
                        return () => {};
                    })(t),
                    u = n.clip
                        ? () => {}
                        : (function (t) {
                              let e = [];
                              try {
                                  for (let r of t.querySelectorAll('*')) {
                                      if (!(r instanceof HTMLElement)) continue;
                                      let t = r.style.contentVisibility || '',
                                          n = getComputedStyle(r),
                                          i = n.contentVisibility || n.getPropertyValue('content-visibility') || '';
                                      ('auto' === i || 'hidden' === i) && (e.push({ el: r, original: t }), (r.style.contentVisibility = 'visible'));
                                  }
                                  if (t instanceof HTMLElement) {
                                      let r = getComputedStyle(t),
                                          n = r.contentVisibility || r.getPropertyValue('content-visibility') || '';
                                      ('auto' === n || 'hidden' === n) &&
                                          (e.push({ el: t, original: t.style.contentVisibility || '' }), (t.style.contentVisibility = 'visible'));
                                  }
                              } catch {}
                              return () => {
                                  for (let { el: t, original: r } of e)
                                      try {
                                          t.style.contentVisibility = r;
                                      } catch {}
                              };
                          })(t);
                try {
                    a = await t3(t, n, e);
                } catch (t) {
                    throw (console.warn('deepClone failed:', t), t);
                } finally {
                    (u(), c());
                }
                try {
                    !(function (t, e) {
                        if (!t || t?.nodeType !== 1) return;
                        let r = t.ownerDocument || document,
                            n = t instanceof SVGSVGElement ? [t] : Array.from(t.querySelectorAll('svg'));
                        if (0 === n.length) return;
                        let i = /url\(\s*#([^)]+)\)/g,
                            o = ['fill', 'stroke', 'filter', 'clip-path', 'mask', 'marker', 'marker-start', 'marker-mid', 'marker-end'],
                            a = (t) => {
                                if (!t || !t.getAttribute) return null;
                                let e =
                                    t.getAttribute('href') ||
                                    t.getAttribute('xlink:href') ||
                                    ('function' == typeof t.getAttributeNS ? t.getAttributeNS('http://www.w3.org/1999/xlink', 'href') : null);
                                if (e) return e;
                                let r = t.attributes;
                                if (!r) return null;
                                for (let t = 0; t < r.length; t++) {
                                    let e = r[t];
                                    if (!e || !e.name) continue;
                                    if ('href' === e.name) return e.value;
                                    let n = e.name.indexOf(':');
                                    if (-1 !== n && 'href' === e.name.slice(n + 1)) return e.value;
                                }
                                return null;
                            },
                            l = new Set(Array.from(t.querySelectorAll('[id]')).map((t) => t.id)),
                            s = new Set(),
                            c = !1,
                            u = (t, e = null) => {
                                let r;
                                if (t)
                                    for (i.lastIndex = 0; (r = i.exec(t));) {
                                        c = !0;
                                        let t = (r[1] || '').trim();
                                        t && (l.has(t) || (s.add(t), e && !e.has(t) && e.add(t)));
                                    }
                            },
                            d = (t) => {
                                for (let e of t.querySelectorAll('use')) {
                                    let t = a(e);
                                    if (!t || !t.startsWith('#')) continue;
                                    c = !0;
                                    let r = t.slice(1).trim();
                                    r && !l.has(r) && s.add(r);
                                }
                                for (let e of (u(t.getAttribute('style') || ''), o)) u(t.getAttribute(e));
                                for (let e of t.querySelectorAll(
                                    '*[style*="url("],*[fill^="url("], *[stroke^="url("],*[filter^="url("],*[clip-path^="url("],*[mask^="url("],*[marker^="url("],*[marker-start^="url("],*[marker-mid^="url("],*[marker-end^="url("]',
                                ))
                                    for (let t of (u(e.getAttribute('style') || ''), o)) u(e.getAttribute(t));
                            };
                        for (let t of n) d(t);
                        if (!c) return;
                        let f = t.querySelector('svg.inline-defs-container');
                        f ||
                            ((f = r.createElementNS('http://www.w3.org/2000/svg', 'svg')).classList.add('inline-defs-container'),
                            f.setAttribute('aria-hidden', 'true'),
                            f.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden'),
                            t.insertBefore(f, t.firstChild || null));
                        let h = f.querySelector('defs') || null,
                            m = (e) => {
                                if (!e || l.has(e)) return null;
                                let n = window.CSS && CSS.escape ? CSS.escape(e) : e.replace(/[^a-zA-Z0-9_-]/g, '\\$&'),
                                    i = (e) => {
                                        let n = r.querySelector(e);
                                        return n && !t.contains(n) ? n : null;
                                    };
                                return i(`svg defs > *#${n}`) || i(`svg > symbol#${n}`) || i(`*#${n}`);
                            };
                        if (!s.size) return;
                        let p = new Set(s),
                            g = new Set();
                        for (; p.size;) {
                            let t = p.values().next().value;
                            if ((p.delete(t), !t || l.has(t) || g.has(t))) continue;
                            let e = m(t);
                            if (!e) {
                                g.add(t);
                                continue;
                            }
                            h || ((h = r.createElementNS('http://www.w3.org/2000/svg', 'defs')), f.appendChild(h));
                            let n = e.cloneNode(!0);
                            for (let e of (n.id || n.setAttribute('id', t), h.appendChild(n), g.add(t), l.add(t), [n, ...n.querySelectorAll('*')])) {
                                let t = a(e);
                                if (t && t.startsWith('#')) {
                                    let e = t.slice(1).trim();
                                    !e || l.has(e) || g.has(e) || p.add(e);
                                }
                                let r = e.getAttribute?.('style') || '';
                                for (let t of (r && u(r, p), o)) {
                                    let r = e.getAttribute?.(t);
                                    r && u(r, p);
                                }
                            }
                        }
                    })(a);
                } catch (t) {
                    console.warn('inlineExternal defs or symbol failed:', t);
                }
                try {
                    await eU(t, a, n, e);
                } catch (t) {
                    console.warn('inlinePseudoElements failed:', t);
                }
                await tJ(a, n);
                try {
                    for (let t of a.querySelectorAll('style[data-sd]')) ((s += t.textContent || ''), t.remove());
                } catch (t) {
                    q(n, 'Failed to extract shadow CSS from style[data-sd]', t);
                }
                let d = (function (t) {
                    let e = Array.from(new Set(t.values())).filter(Boolean).sort(),
                        r = new Map(),
                        n = 1;
                    for (let t of e) r.set(t, `c${n++}`);
                    return r;
                })(n.styleMap);
                for (let [t, e] of ((l =
                    s +
                    '[data-snapdom-has-after]::after,[data-snapdom-has-before]::before{content:none!important;display:none!important}' +
                    (l = Array.from(d.entries())
                        .map(([t, e]) => `.${e}{${t}}`)
                        .join(''))),
                n.styleMap.entries())) {
                    if ('STYLE' === t.tagName) continue;
                    if (t.getRootNode && t.getRootNode() instanceof ShadowRoot) {
                        t.setAttribute('style', e.replace(/;/g, '; '));
                        continue;
                    }
                    let r = d.get(e);
                    r && t.classList.add(r);
                    let n = t.style?.backgroundImage,
                        i = t.dataset?.snapdomHasIcon;
                    (n && 'none' !== n && (t.style.backgroundImage = n), i && ((t.style.verticalAlign = 'middle'), (t.style.display = 'inline')));
                }
                if ((n.clip || t.scrollTop || t.scrollLeft) && a?.nodeType === 1)
                    try {
                        let e = n.clip && o ? { x: o.x, y: o.y } : { x: 0, y: 0 };
                        !(function (t, e, r, n, i) {
                            let o = t.getBoundingClientRect();
                            e instanceof HTMLElement && 'static' === k(t).position && (e.style.position = 'relative');
                            let a = [];
                            for (let [e, l] of r) {
                                if (
                                    !(e instanceof HTMLElement) ||
                                    l?.nodeType !== 1 ||
                                    l === t ||
                                    !(function (t, e) {
                                        for (let r = e; r; r = eG(r)) if (r === t) return !0;
                                        return !1;
                                    })(t, l)
                                )
                                    continue;
                                let r = n.get(l) || k(l),
                                    s = r.position;
                                if (('fixed' !== s && 'sticky' !== s && '-webkit-sticky' !== s) || 'absolute' === e.style.position) continue;
                                let c = l.getBoundingClientRect();
                                if (!(c.width > 0 && c.height > 0)) continue;
                                let u = r.transform && 'none' !== r.transform ? r.transform : '',
                                    d = ez(l),
                                    f = !!(u || '0deg' !== d.rotate || d.scale || d.translate),
                                    h = f ? eQ(u, d) : null,
                                    m = !h || !h.is2D || (1 === h.a && 0 === h.b && 0 === h.c && 1 === h.d),
                                    p = c.width,
                                    g = c.height;
                                m || ((p = l.offsetWidth || c.width), (g = l.offsetHeight || c.height));
                                let y = l.getRootNode && l.getRootNode() instanceof ShadowRoot,
                                    b = o,
                                    w = t.clientLeft || 0,
                                    x = t.clientTop || 0;
                                if (y) {
                                    let e = (function (t, e) {
                                        for (let r = eG(t); r && r !== e && r?.nodeType === 1; r = eG(r)) {
                                            let t = k(r);
                                            if (
                                                'static' !== t.position ||
                                                (t.transform && 'none' !== t.transform) ||
                                                (t.filter && 'none' !== t.filter) ||
                                                (t.backdropFilter && 'none' !== t.backdropFilter) ||
                                                (t.perspective && 'none' !== t.perspective) ||
                                                /transform|perspective|filter/.test(t.willChange || '') ||
                                                /layout|paint|strict|content/.test(t.contain || '')
                                            )
                                                return r;
                                        }
                                        return null;
                                    })(l, t);
                                    e && ((b = e.getBoundingClientRect()), (w = e.clientLeft || 0), (x = e.clientTop || 0));
                                }
                                let S = c.left - b.left - w,
                                    v = c.top - b.top - x;
                                if (f)
                                    if (((e.style.translate = 'none'), (e.style.rotate = 'none'), (e.style.scale = 'none'), m)) e.style.transform = 'none';
                                    else {
                                        e.style.transform = `matrix(${h.a},${h.b},${h.c},${h.d},0,0)`;
                                        let { ox: t, oy: n } = eq(r, p, g),
                                            i = eV(p, g, { a: h.a, b: h.b, c: h.c, d: h.d, e: 0, f: 0 }, t, n);
                                        ((S -= i.minX), (v -= i.minY));
                                    }
                                if ('fixed' !== s) {
                                    let t = e.cloneNode(!1);
                                    (t.setAttribute('data-snap-ph', '1'),
                                        (t.style.position = 'static'),
                                        (t.style.visibility = 'hidden'),
                                        (t.style.width = `${p}px`),
                                        (t.style.height = `${g}px`),
                                        (t.style.boxSizing = 'border-box'),
                                        e.parentElement?.insertBefore(t, e));
                                }
                                let C = p + 2,
                                    M = g;
                                (i && (0.5 > Math.abs(v - i.y) && ((v -= 1), (M += 1)), 0.5 > Math.abs(S - i.x) && ((S -= 1), (C += 1))),
                                    (e.style.position = 'absolute'),
                                    (e.style.left = `${S}px`),
                                    (e.style.top = `${v}px`),
                                    (e.style.right = 'auto'),
                                    (e.style.bottom = 'auto'),
                                    (e.style.margin = '0'),
                                    (e.style.width = `${C}px`),
                                    (e.style.height = `${M}px`),
                                    (e.style.boxSizing = 'border-box'),
                                    y || a.push(e));
                            }
                            for (let t of a) e.appendChild(t);
                        })(t, a, n.nodeMap, n.styleCache, e);
                    } catch (t) {
                        q(n, 'freezeViewportPositioned failed', t);
                    }
                for (let [e, r] of n.nodeMap.entries()) {
                    if (n.clip && r === t) continue;
                    let i = r.scrollLeft,
                        o = r.scrollTop;
                    if ((i || o) && e?.nodeType === 1 && 'http://www.w3.org/1999/xhtml' === e.namespaceURI) {
                        ((e.style.overflow = 'hidden'), (e.style.scrollbarWidth = 'none'), (e.style.msOverflowStyle = 'none'));
                        try {
                            for (let t of e.querySelectorAll('*')) {
                                if (1 !== t.nodeType || 'http://www.w3.org/1999/xhtml' !== t.namespaceURI) continue;
                                let e = t.style.position;
                                if ('fixed' === e || 'absolute' === e) {
                                    let r = parseFloat(t.style.top) || 0,
                                        n = parseFloat(t.style.left) || 0;
                                    ((t.style.top = `${r + o}px`), (t.style.left = `${n + i}px`), 'fixed' === e && (t.style.position = 'absolute'));
                                }
                            }
                        } catch {}
                        let t = document.createElement('div');
                        for (
                            t.style.all = 'unset',
                                t.style.transform = `translate(${-i}px, ${-o}px)`,
                                t.style.willChange = 'transform',
                                t.style.display = 'inline-block',
                                t.style.width = '100%';
                            e.firstChild;
                        )
                            t.appendChild(e.firstChild);
                        e.appendChild(t);
                    }
                }
                if (t === n.nodeMap.get(a)) {
                    let e = n.styleCache.get(t) || k(t);
                    n.styleCache.set(t, e);
                    let r = (function (t) {
                        if (!t || 'none' === t) return '';
                        let e = t.replace(/translate[XY]?\([^)]*\)/g, '');
                        return (e = (e = e.replace(/matrix\(([^)]+)\)/g, (t, e) => {
                            let r = e.split(',').map((t) => t.trim());
                            return 6 !== r.length ? `matrix(${e})` : ((r[4] = '0'), (r[5] = '0'), `matrix(${r.join(', ')})`);
                        })).replace(/matrix3d\(([^)]+)\)/g, (t, e) => {
                            let r = e.split(',').map((t) => t.trim());
                            return 16 !== r.length ? `matrix3d(${e})` : ((r[12] = '0'), (r[13] = '0'), `matrix3d(${r.join(', ')})`);
                        }))
                            .trim()
                            .replace(/\s{2,}/g, ' ');
                    })(e.transform);
                    ((a.style.margin = '0'),
                        (a.style.top = 'auto'),
                        (a.style.left = 'auto'),
                        (a.style.right = 'auto'),
                        (a.style.bottom = 'auto'),
                        (a.style.animation = 'none'),
                        (a.style.transition = 'none'),
                        (a.style.willChange = 'auto'),
                        (a.style.float = 'none'),
                        (a.style.clear = 'none'),
                        (a.style.transform = r || ''));
                }
                for (let [t, e] of n.nodeMap.entries()) 'PRE' === e.tagName && ((t.style.marginTop = '0'), (t.style.marginBlockStart = '0'));
                return { clone: a, classCSS: l, styleCache: n.styleCache, nodeMap: n.nodeMap, reconcileRisk: n.reconcileRisk || 0, clipWindow: o };
            }
            (w(), s());
            var e9 = 'http://www.w3.org/1999/xlink';
            async function e3(t, e = {}) {
                let r = Array.from(t.querySelectorAll('img'));
                'IMG' === t.tagName && r.unshift(t);
                let n = async (t) => {
                    let r, n, o, a, l, s;
                    if (!t.getAttribute('src')) {
                        let e = t.currentSrc || t.src || tO(t.getAttribute('srcset'), t) || '';
                        e && t.setAttribute('src', e);
                    }
                    (t.removeAttribute('srcset'), t.removeAttribute('sizes'));
                    let c = t.src || '';
                    if (!c) return;
                    let u = i.image?.get(c);
                    if (u) {
                        ((t.src = u), t.width || (t.width = t.naturalWidth || 100), t.height || (t.height = t.naturalHeight || 100));
                        return;
                    }
                    let d = await p(c, { as: 'dataURL', useProxy: e.useProxy });
                    if (d.ok && 'string' == typeof d.data && d.data.startsWith('data:')) {
                        (i.image?.set(c, d.data), (t.src = d.data), t.width || (t.width = t.naturalWidth || 100), t.height || (t.height = t.naturalHeight || 100));
                        return;
                    }
                    let { width: f, height: h } =
                            ((r = parseInt(t.dataset?.snapdomWidth || '', 10) || 0),
                            (n = parseInt(t.dataset?.snapdomHeight || '', 10) || 0),
                            (o = parseInt(t.getAttribute('width') || '', 10) || 0),
                            (a = parseInt(t.getAttribute('height') || '', 10) || 0),
                            (l = parseFloat(t.style?.width || '') || 0),
                            (s = parseFloat(t.style?.height || '') || 0),
                            { width: r || l || o || t.width || t.naturalWidth || 100, height: n || s || a || t.height || t.naturalHeight || 100 }),
                        { fallbackURL: m } = e || {};
                    if (m)
                        try {
                            let r = 'function' == typeof m ? await m({ width: f, height: h, src: c, element: t }) : m;
                            if (r) {
                                let n = await p(r, { as: 'dataURL', useProxy: e.useProxy });
                                if (n?.ok && 'string' == typeof n.data) {
                                    ((t.src = n.data), t.width || (t.width = f), t.height || (t.height = h));
                                    return;
                                }
                            }
                        } catch {}
                    if (!1 !== e.placeholders) {
                        let e = document.createElement('div');
                        ((e.style.cssText = `width:${f}px;height:${h}px;background:#ccc;display:inline-block;text-align:center;line-height:${h}px;color:#666;font-size:12px;overflow:hidden`),
                            (e.textContent = 'img'),
                            t.replaceWith(e));
                    } else {
                        let e = document.createElement('div');
                        ((e.style.cssText = `display:inline-block;width:${f}px;height:${h}px;visibility:hidden;`), t.replaceWith(e));
                    }
                };
                for (let t = 0; t < r.length; t += 6) {
                    let e = r.slice(t, t + 6).map(n);
                    await Promise.allSettled(e);
                }
                let o = Array.from(t.querySelectorAll('image'));
                'image' === t.localName && o.unshift(t);
                let a = async (t) => {
                    let r = t.getAttribute('href') || t.getAttribute('xlink:href') || ('function' == typeof t.getAttributeNS ? t.getAttributeNS(e9, 'href') : null);
                    if (!r || r.startsWith('data:') || r.startsWith('blob:')) return;
                    let n = await p(r, { as: 'dataURL', useProxy: e.useProxy });
                    n.ok &&
                        'string' == typeof n.data &&
                        n.data.startsWith('data:') &&
                        (t.setAttribute('href', n.data), t.removeAttribute('xlink:href'), 'function' == typeof t.removeAttributeNS && t.removeAttributeNS(e9, 'href'));
                };
                for (let t = 0; t < o.length; t += 6) {
                    let e = o.slice(t, t + 6).map(a);
                    await Promise.allSettled(e);
                }
            }
            (X(), s());
            var e6 = [
                    'background-image',
                    'mask',
                    'mask-image',
                    '-webkit-mask',
                    '-webkit-mask-image',
                    'mask-source',
                    'mask-box-image-source',
                    'mask-border-source',
                    '-webkit-mask-box-image-source',
                    'border-image',
                    'border-image-source',
                ],
                e5 = [
                    'mask-position',
                    'mask-size',
                    'mask-repeat',
                    'mask-mode',
                    'mask-composite',
                    '-webkit-mask-position',
                    '-webkit-mask-size',
                    '-webkit-mask-repeat',
                    '-webkit-mask-composite',
                    'mask-origin',
                    'mask-clip',
                    '-webkit-mask-origin',
                    '-webkit-mask-clip',
                    '-webkit-mask-position-x',
                    '-webkit-mask-position-y',
                ],
                e4 = [
                    'background-position',
                    'background-position-x',
                    'background-position-y',
                    'background-size',
                    'background-repeat',
                    'background-origin',
                    'background-clip',
                    'background-attachment',
                    'background-blend-mode',
                ],
                e8 = ['border-image-slice', 'border-image-width', 'border-image-outset', 'border-image-repeat'];
            async function e7(t, e, r, n) {
                let i = r.get(t) || k(t);
                r.has(t) || r.set(t, i);
                let o = i.getPropertyValue('border-image'),
                    a = i.getPropertyValue('border-image-source'),
                    l = i.getPropertyValue('background-image'),
                    s = i.getPropertyValue('background-color');
                if (
                    (l && 'none' !== l) ||
                    (s && 'rgba(0, 0, 0, 0)' !== s && 'transparent' !== s) ||
                    /url\s*\(|gradient\s*\(/i.test(i.getPropertyValue('background') || '')
                )
                    for (let t of e4) {
                        let r = i.getPropertyValue(t);
                        r && e.style.setProperty(t, r);
                    }
                for (let t of e6) {
                    let r = i.getPropertyValue(t);
                    if ('background-image' === t && (!r || 'none' === r)) {
                        let t = i.getPropertyValue('background');
                        t &&
                            /url\s*\(/.test(t) &&
                            (r =
                                E(t)
                                    .filter((t) => /url\s*\(/.test(t))
                                    .join(', ') || r);
                    }
                    if (!r || 'none' === r) continue;
                    let o = E(r),
                        a = await Promise.all(o.map((t) => x(t, n)));
                    a.some((t) => t && 'none' !== t && !/^url\(undefined/.test(t)) && e.style.setProperty(t, a.join(', '));
                }
                for (let t of e5) {
                    let r = i.getPropertyValue(t);
                    r && 'initial' !== r && e.style.setProperty(t, r);
                }
                if ((o && 'none' !== o) || (a && 'none' !== a))
                    for (let t of e8) {
                        let r = i.getPropertyValue(t);
                        r && 'initial' !== r && e.style.setProperty(t, r);
                    }
            }
            async function rt(t, e, r, n = {}, o = i.session.nodeMap) {
                if (!e) return;
                let a = [];
                t && tA(t) && a.push([t, e]);
                let l = [e];
                for (; l.length;) {
                    let t = l.pop();
                    if (t.children)
                        for (let e of t.children) {
                            if ('STYLE' === e.tagName) continue;
                            let t = o.get(e);
                            (t && tA(t) && a.push([t, e]), l.push(e));
                        }
                }
                for (let t = 0; t < a.length; t += 6) await Promise.allSettled(a.slice(t, t + 6).map(([t, e]) => e7(t, e, r, n)));
            }
            function re(t, e) {
                if (!e) return null;
                let r = t;
                for (let t of e) if (!(r = r.children[t])) return null;
                return r;
            }
            function rr(t) {
                return !(t.childElementCount > 0) && Array.from(t.childNodes).some((t) => t.nodeType === Node.TEXT_NODE);
            }
            (s(), X(), X(), s());
            var rn = [];
            function ri(t) {
                if (!t) return null;
                if (Array.isArray(t)) {
                    let [e, r] = t;
                    return 'function' == typeof e ? e(r) : e;
                }
                if ('object' == typeof t && 'plugin' in t) {
                    let { plugin: e, options: r } = t;
                    return 'function' == typeof e ? e(r) : e;
                }
                return 'function' == typeof t ? t() : t;
            }
            function ro(t) {
                return t && Array.isArray(t.plugins) ? t.plugins : rn;
            }
            async function ra(t, e, r) {
                let n = r;
                for (let r of ro(e)) {
                    let i = r && 'function' == typeof r[t] ? r[t] : null;
                    if (!i) continue;
                    let o = await i(e, n);
                    'u' > typeof o && (n = o);
                }
                return n;
            }
            async function rl(t, e, r) {
                let n = [];
                for (let i of ro(e)) {
                    let o = i && 'function' == typeof i[t] ? i[t] : null;
                    if (!o) continue;
                    let a = await o(e, r);
                    'u' > typeof a && n.push(a);
                }
                return n;
            }
            async function rs(t) {
                let e = new Image();
                if (((e.decoding = 'sync'), (e.src = t), 'function' == typeof e.decode))
                    try {
                        return (await e.decode(), e);
                    } catch {}
                return (
                    await new Promise((t, r) => {
                        ((e.onload = () => t()), (e.onerror = r));
                    }),
                    e
                );
            }
            async function rc(t, e, r) {
                if ('string' != typeof t || !t.startsWith('data:image') || t.startsWith('data:image/svg')) return null;
                let n = t.length + ':' + t.slice(0, 64) + t.slice(-64) + ':' + Math.round(e) + 'x' + Math.round(r);
                if (i.compress.has(n)) return i.compress.get(n);
                let o = await (async () => {
                    let n, i;
                    try {
                        n = await rs(t);
                    } catch {
                        return null;
                    }
                    let o = n.naturalWidth || n.width,
                        a = n.naturalHeight || n.height;
                    if (!o || !a) return null;
                    let l = Math.min(1, Math.max(e / o, r / a));
                    if (!(l > 0) || l >= 0.95) return null;
                    let s = 0.95 * l,
                        c = Math.max(1, Math.round(o * s)),
                        u = Math.max(1, Math.round(a * s)),
                        d = document.createElement('canvas');
                    ((d.width = c), (d.height = u));
                    let f = d.getContext('2d');
                    if (!f) return null;
                    ((f.imageSmoothingEnabled = !0), (f.imageSmoothingQuality = 'high'), f.drawImage(n, 0, 0, c, u));
                    let h = (i = /^data:([^;,]+)/.exec(t)) ? i[1] : '';
                    try {
                        let e = d.toDataURL('image/jpeg' === h ? 'image/jpeg' : 'image/webp' === h ? 'image/webp' : 'image/png', 0.92);
                        if ('string' == typeof e && e.startsWith('data:image') && e.length < t.length) return e;
                    } catch {}
                    return null;
                })();
                return (i.compress.set(n, o), o);
            }
            async function ru(t, e) {
                if (!e.compress) return { count: 0, before: 0, after: 0 };
                let r = (e.scale || 1) * (e.dpr || 1),
                    n = Array.from(t.querySelectorAll('img'));
                'IMG' === t.tagName && n.unshift(t);
                let i = 0,
                    o = 0,
                    a = 0,
                    l = async (t) => {
                        let e = t.getAttribute('src') || '';
                        if (!e.startsWith('data:image') || e.startsWith('data:image/svg')) return;
                        let n = parseFloat(t.dataset.snapdomWidth) || parseFloat(t.style.width) || t.width || 0,
                            l = parseFloat(t.dataset.snapdomHeight) || parseFloat(t.style.height) || t.height || 0;
                        if (!n || !l) return;
                        let s = await rc(e, n * r, l * r);
                        s && (i++, (o += e.length), (a += s.length), t.setAttribute('src', s));
                    };
                for (let t = 0; t < n.length; t += 6) await Promise.allSettled(n.slice(t, t + 6).map(l));
                return { count: i, before: o, after: a };
            }
            async function rd(t, e, r = i.session.nodeMap) {
                if (!e.compress) return { count: 0 };
                let n = (e.scale || 1) * (e.dpr || 1),
                    o = [];
                for (let e of [t, ...t.querySelectorAll('*')]) {
                    let t = e.style && e.style.backgroundImage;
                    t && t.includes('data:image') && o.push(e);
                }
                let a = 0,
                    l = async (t) => {
                        let e,
                            i = r.get(t);
                        if (!i || !i.isConnected) return;
                        try {
                            e = getComputedStyle(i);
                        } catch {
                            return;
                        }
                        if (
                            (e.backgroundRepeat || 'repeat')
                                .toLowerCase()
                                .split(',')
                                .some((t) => 'no-repeat' !== t.trim())
                        )
                            return;
                        let { w: o, h: l } = { w: i.offsetWidth || i.getBoundingClientRect().width || 0, h: i.offsetHeight || i.getBoundingClientRect().height || 0 };
                        if (!o || !l) return;
                        let s = o * n,
                            c = l * n,
                            u = t.style.backgroundImage,
                            d = [...u.matchAll(/url\((['"]?)(data:image\/[^)'"]+)\1\)/gi)],
                            f = u;
                        for (let t of d) {
                            let e = t[2];
                            if (e.startsWith('data:image/svg')) continue;
                            let r = await rc(e, s, c);
                            r && ((f = f.split(e).join(r)), a++);
                        }
                        f !== u && (t.style.backgroundImage = f);
                    };
                for (let t = 0; t < o.length; t += 6) await Promise.allSettled(o.slice(t, t + 6).map(l));
                return { count: a };
            }
            async function rf(t, e) {
                if (!e.compress) return { count: 0 };
                let r = (e.scale || 1) * (e.dpr || 1),
                    n = Array.from(t.querySelectorAll('image'));
                'image' === t.localName && n.unshift(t);
                let i = 0,
                    o = async (t) => {
                        let e = t.getAttribute('href') || ('function' == typeof t.getAttributeNS ? t.getAttributeNS('http://www.w3.org/1999/xlink', 'href') : null);
                        if (!e || !e.startsWith('data:image') || e.startsWith('data:image/svg')) return;
                        let n = parseFloat(t.getAttribute('width')) || 0,
                            o = parseFloat(t.getAttribute('height')) || 0;
                        if (!n || !o) return;
                        let a = await rc(e, n * r, o * r);
                        a && (t.setAttribute('href', a), t.hasAttribute('xlink:href') && t.setAttribute('xlink:href', a), i++);
                    };
                for (let t = 0; t < n.length; t += 6) await Promise.allSettled(n.slice(t, t + 6).map(o));
                return { count: i };
            }
            async function rh(t, e, r) {
                e.compress && (await ru(t, e), await rd(t, e, r), await rf(t, e));
            }
            async function rm(t, e) {
                var r;
                let o;
                if (!t) throw Error('Element cannot be null or undefined');
                ((function (t = 'soft') {
                    switch (t) {
                        case 'auto':
                            ((i.session.styleMap = new Map()), (i.session.nodeMap = new Map()));
                            return;
                        case 'soft':
                        default:
                            ((i.session.styleMap = new Map()), (i.session.nodeMap = new Map()), (i.session.styleCache = new WeakMap()));
                            return;
                        case 'full':
                            return;
                        case 'disabled':
                            ((i.session.styleMap = new Map()),
                                (i.session.nodeMap = new Map()),
                                (i.session.styleCache = new WeakMap()),
                                (i.computedStyle = new WeakMap()),
                                (i.measureHints = new WeakMap()),
                                (i.baseStyle = new n(50)),
                                (i.defaultStyle = new n(30)),
                                (i.image = new n(100)),
                                (i.background = new n(100)),
                                (i.resource = new n(150)),
                                (i.compress = new n(50)),
                                (i.font = new Set()));
                            return;
                    }
                })(e.cache),
                    (e.__session = { styleMap: i.session.styleMap, styleCache: i.session.styleCache, nodeMap: i.session.nodeMap }),
                    e.burst ||
                        (function (t) {
                            let e = Date.now(),
                                r = i.burstAdvice.get(t);
                            if (!r || e - r.firstTs > 2e3) return i.burstAdvice.set(t, { count: 1, firstTs: e, warned: !1 });
                            (r.count++,
                                r.count >= 3 &&
                                    !r.warned &&
                                    ((r.warned = !0), console.warn('[snapdom] Captured this element multiple times. Pass { burst: true } to increase the speed.')));
                        })(t),
                    (e.__resolveNodeHooks = (function (t) {
                        let e = Array.isArray(t.plugins) ? t.plugins : rn.slice(),
                            r = [];
                        for (let t of e) {
                            let e = ri(t);
                            e && 'function' == typeof e.resolveNode && r.push(e.resolveNode.bind(e));
                        }
                        return r.length ? r : null;
                    })(e)));
                let a = e.fast,
                    l = !1 !== e.outerTransforms,
                    s = !!e.outerShadows,
                    c = e.clip ? eY(t, e.clip) : null,
                    u = { element: t, options: e, plugins: e.plugins },
                    d,
                    f,
                    h,
                    m,
                    p,
                    g,
                    y = '',
                    b = '',
                    w,
                    x,
                    S = null;
                await ra('beforeSnap', u);
                let C = null;
                (!1 === e.resolvePicturePlaceholders ||
                    (function (t) {
                        if (Array.isArray(t.plugins)) {
                            for (let e of t.plugins) if (ri(e)?.name === 'picture-resolver') return !0;
                        }
                        return rn.slice().some((t) => t?.name === 'picture-resolver');
                    })(e) ||
                    (C = await tH(u.element, u.options)),
                    await ra('beforeClone', u));
                let M = (function (t, e) {
                    if (!t) return () => {};
                    let r = [];
                    return (
                        (function t(n) {
                            if (e) {
                                let t = n.getBoundingClientRect();
                                if (t.width > 0 || t.height > 0) {
                                    let r = Math.max(t.right, t.left + (n.scrollWidth || 0)),
                                        i = Math.max(t.bottom, t.top + (n.scrollHeight || 0));
                                    if (r < e.left - 200 || t.left > e.right + 200 || i < e.top - 200 || t.top > e.bottom + 200) return;
                                }
                            }
                            let i = getComputedStyle(n),
                                o = (function (t, e) {
                                    var r, n, i;
                                    let o, a, l, s;
                                    if (!t) return () => {};
                                    let c =
                                        Number.isFinite(
                                            (a = parseInt(
                                                (o = (
                                                    (o = (r = e = e || getComputedStyle(t)).getPropertyValue('-webkit-line-clamp') || r.getPropertyValue('line-clamp')) ||
                                                    ''
                                                ).trim()),
                                                10,
                                            )),
                                        ) && a > 0
                                            ? a
                                            : 0;
                                    if (c <= 0 || !rr(t)) return () => {};
                                    let u = t.textContent ?? '',
                                        d = (parseFloat((n = e).paddingTop) || 0) + (parseFloat(n.paddingBottom) || 0);
                                    t.textContent = 'X';
                                    let f = t.scrollHeight - d;
                                    t.textContent = u;
                                    let h = Math.round(
                                        (f > 0
                                            ? f
                                            : ((l = ((i = e).lineHeight || '').trim()),
                                              (s = parseFloat(i.fontSize) || 16),
                                              l && 'normal' !== l
                                                  ? l.endsWith('px')
                                                      ? parseFloat(l)
                                                      : /^\d+(\.\d+)?$/.test(l)
                                                        ? Math.round(parseFloat(l) * s)
                                                        : l.endsWith('%')
                                                          ? Math.round((parseFloat(l) / 100) * s)
                                                          : Math.round(1.2 * s)
                                                  : Math.round(1.2 * s))) *
                                            c +
                                            d,
                                    );
                                    if (t.scrollHeight <= h + 0.5) return () => {};
                                    let m = 0,
                                        p = u.length,
                                        g = -1;
                                    for (; m <= p;) {
                                        let e = (m + p) >> 1;
                                        ((t.textContent = u.slice(0, e) + '…'), t.scrollHeight <= h + 0.5 ? ((g = e), (m = e + 1)) : (p = e - 1));
                                    }
                                    return (
                                        (t.textContent = (g >= 0 ? u.slice(0, g) : '') + '…'),
                                        () => {
                                            t.textContent = u;
                                        }
                                    );
                                })(n, i);
                            o && r.push(o);
                            let a = (function (t, e) {
                                if (
                                    !t ||
                                    'ellipsis' !== (e = e || getComputedStyle(t)).textOverflow ||
                                    ('nowrap' !== e.whiteSpace && 'pre' !== e.whiteSpace) ||
                                    ('hidden' !== e.overflowX && 'clip' !== e.overflowX) ||
                                    !rr(t) ||
                                    t.scrollWidth <= t.clientWidth + 0.5
                                )
                                    return () => {};
                                let r = t.textContent ?? '',
                                    n = 0,
                                    i = r.length,
                                    o = -1;
                                for (; n <= i;) {
                                    let e = (n + i) >> 1;
                                    ((t.textContent = r.slice(0, e) + '…'), t.scrollWidth <= t.clientWidth + 0.5 ? ((o = e), (n = e + 1)) : (i = e - 1));
                                }
                                return (
                                    (t.textContent = (o >= 0 ? r.slice(0, o) : '') + '…'),
                                    () => {
                                        t.textContent = r;
                                    }
                                );
                            })(n, i);
                            for (let e of (a && r.push(a), n.children || [])) t(e);
                        })(t),
                        () => r.forEach((t) => t())
                    );
                })(u.element, c);
                try {
                    (({ clone: d, classCSS: f, styleCache: h, nodeMap: m, reconcileRisk: p, clipWindow: g } = await e2(u.element, u.options)),
                        !(p > 0) ||
                            e.reconcile ||
                            i.warnedReconcile ||
                            ((i.warnedReconcile = !0),
                            console.warn(
                                '[snapdom] Text in inline/table-cell elements kept its natural width and may re-wrap under font-fallback rasterization. Pass { reconcile: true } for pixel-exact layout (roughly doubles capture time).',
                            )),
                        !l &&
                            d &&
                            (S = (function (t, e) {
                                if (!t || !e || !e.style) return null;
                                let r = getComputedStyle(t);
                                try {
                                    e.style.transformOrigin = '0 0';
                                } catch {}
                                try {
                                    ('translate' in e.style && (e.style.translate = 'none'), 'rotate' in e.style && (e.style.rotate = 'none'));
                                } catch {}
                                let n = r.transform || 'none';
                                if (!n || 'none' === n) {
                                    let r = null;
                                    try {
                                        r = ez(t).scale;
                                    } catch {}
                                    try {
                                        e.style.transform = 'none';
                                    } catch {}
                                    if (!r) return { a: 1, b: 0, c: 0, d: 1 };
                                    let n = r.trim().split(/\s+/).map(parseFloat),
                                        i = Number.isFinite(n[0]) ? n[0] : 1,
                                        o = Number.isFinite(n[1]) ? n[1] : i;
                                    return { a: i, b: 0, c: 0, d: o };
                                }
                                function i(t, e, r, n) {
                                    let i = Math.sqrt(t * t + e * e) || 0,
                                        o = 0,
                                        a = 0;
                                    if (i > 0) {
                                        let l = t / i,
                                            s = e / i;
                                        o = l * r + s * n;
                                        let c = r - l * o,
                                            u = n - s * o;
                                        (a = Math.sqrt(c * c + u * u) || 0) > 0 ? (o /= a) : (o = 0);
                                    }
                                    return { a: i, b: 0, c: o * a, d: a };
                                }
                                let o = n.match(/^matrix\(\s*([^)]+)\)$/i);
                                if (o) {
                                    let t = o[1].split(',').map((t) => parseFloat(t.trim()));
                                    if (6 === t.length && t.every(Number.isFinite)) {
                                        let [r, n, o, a] = t,
                                            l = i(r, n, o, a);
                                        try {
                                            e.style.transform = `matrix(${l.a}, ${l.b}, ${l.c}, ${l.d}, 0, 0)`;
                                        } catch {}
                                        return l;
                                    }
                                }
                                let a = n.match(/^matrix3d\(\s*([^)]+)\)$/i);
                                if (a) {
                                    let t = a[1].split(',').map((t) => parseFloat(t.trim()));
                                    if (16 === t.length && t.every(Number.isFinite)) {
                                        let r = i(t[0], t[1], t[4], t[5]);
                                        try {
                                            e.style.transform = `matrix(${r.a}, ${r.b}, ${r.c}, ${r.d}, 0, 0)`;
                                        } catch {}
                                        return r;
                                    }
                                }
                                try {
                                    let t = new DOMMatrix(n),
                                        r = i(t.a, t.b, t.c, t.d);
                                    try {
                                        e.style.transform = `matrix(${r.a}, ${r.b}, ${r.c}, ${r.d}, 0, 0)`;
                                    } catch {}
                                    return r;
                                } catch {
                                    return null;
                                }
                            })(u.element, d)),
                        !s &&
                            d &&
                            (function (t, e, r = {}) {
                                if (!t || !e || !e.style) return;
                                let n = getComputedStyle(t);
                                try {
                                    e.style.boxShadow = 'none';
                                } catch (t) {
                                    q(r, 'stripRootShadows boxShadow', t);
                                }
                                try {
                                    e.style.textShadow = 'none';
                                } catch (t) {
                                    q(r, 'stripRootShadows textShadow', t);
                                }
                                try {
                                    e.style.outline = 'none';
                                } catch (t) {
                                    q(r, 'stripRootShadows outline', t);
                                }
                                let i = (n.filter || '')
                                    .replace(/\bdrop-shadow\((?:[^()]|\([^()]*\))*\)\s*/gi, '')
                                    .trim()
                                    .replace(/\s+/g, ' ');
                                try {
                                    e.style.filter = i.length ? i : 'none';
                                } catch (t) {
                                    q(r, 'stripRootShadows filter', t);
                                }
                            })(u.element, d, u.options),
                        d &&
                            (function (t, e, r) {
                                if (!t || !e || !e.style) return;
                                let n = getComputedStyle(t);
                                if (!eJ(n))
                                    for (let i of ['top', 'bottom']) {
                                        let o = 'top' === i ? 'Top' : 'Bottom';
                                        if ((parseFloat(n[`border${o}Width`]) || 0) > 0 || (parseFloat(n[`padding${o}`]) || 0) > 0) continue;
                                        let a = t,
                                            l = e;
                                        for (; a && l;) {
                                            let t = (function (t, e) {
                                                let r = Array.from(t.childNodes);
                                                for (let t of 'top' === e ? r : r.reverse()) {
                                                    if (t.nodeType === Node.TEXT_NODE) {
                                                        if (/\S/.test(t.textContent || '')) return null;
                                                        continue;
                                                    }
                                                    if (t.nodeType !== Node.ELEMENT_NODE) continue;
                                                    let e = getComputedStyle(t),
                                                        r = String(e.display || '');
                                                    if ('none' !== r && 'contents' !== r && 'absolute' !== e.position && 'fixed' !== e.position)
                                                        return (e.float && 'none' !== e.float) || r.startsWith('inline') ? null : t;
                                                }
                                                return null;
                                            })(a, i);
                                            if (!t) break;
                                            let e = r
                                                    ? Array.from(l.children).find((e) => r.get(e) === t) || null
                                                    : l.children[Array.from(a.children).indexOf(t)] || null,
                                                n = getComputedStyle(t),
                                                s = parseFloat(n[`margin${o}`]) || 0;
                                            if (
                                                (e && e.style && s > 0 && (e.style[`margin${o}`] = '0px'),
                                                eJ(n) || (parseFloat(n[`border${o}Width`]) || 0) > 0 || (parseFloat(n[`padding${o}`]) || 0) > 0)
                                            )
                                                break;
                                            ((a = t), (l = e));
                                        }
                                    }
                            })(u.element, d, m));
                } finally {
                    M();
                }
                if (
                    ((u = { clone: d, classCSS: f, styleCache: h, nodeMap: m, ...u }),
                    await ra('afterClone', u),
                    C && (await C()),
                    (function (t, e = {}) {
                        t &&
                            ((function (t, e = {}) {
                                let { stripFrameworkDirectives: r = !0 } = e,
                                    n = new Set(['xml', 'xlink']),
                                    i = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
                                for (; i.nextNode();) {
                                    let t = i.currentNode;
                                    for (let e of Array.from(t.attributes)) {
                                        let i = e.name;
                                        if (i.startsWith('*') || i.includes('@')) {
                                            t.removeAttribute(i);
                                            continue;
                                        }
                                        if (i.includes(':')) {
                                            let e = i.split(':', 1)[0];
                                            if (!n.has(e)) {
                                                t.removeAttribute(i);
                                                continue;
                                            }
                                        }
                                        if (
                                            r &&
                                            (i.startsWith('x-') ||
                                                i.startsWith('v-') ||
                                                i.startsWith(':') ||
                                                i.startsWith('on:') ||
                                                i.startsWith('bind:') ||
                                                i.startsWith('let:') ||
                                                i.startsWith('class:'))
                                        ) {
                                            t.removeAttribute(i);
                                            continue;
                                        }
                                    }
                                }
                            })(t, e),
                            (function (t) {
                                let e = document.createTreeWalker(t, NodeFilter.SHOW_COMMENT),
                                    r = [];
                                for (; e.nextNode();) r.push(e.currentNode);
                                for (let t of r) t.remove();
                            })(t),
                            (function (t) {
                                if (!t) return;
                                let e = (t) => {
                                    if (t.nodeType === Node.ELEMENT_NODE) {
                                        if (t.attributes)
                                            for (let e of Array.from(t.attributes)) {
                                                let r = e.value.replace(eK, '');
                                                if (r !== e.value)
                                                    try {
                                                        t.setAttribute(e.name, r);
                                                    } catch {}
                                            }
                                    } else if (t.nodeType === Node.TEXT_NODE || t.nodeType === Node.CDATA_SECTION_NODE) {
                                        let e = t.data.replace(eK, '');
                                        e !== t.data && (t.data = e);
                                    }
                                };
                                e(t);
                                let r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT),
                                    n;
                                for (; (n = r.nextNode());) e(n);
                            })(t));
                    })(u.clone),
                    u.options?.excludeMode === 'remove' || u.options?.filterMode === 'remove')
                )
                    try {
                        !(function (t, e, r = new Map()) {
                            !(function t(e, n) {
                                if (e?.nodeType !== 1 || n?.nodeType !== 1) return;
                                let i = e.childElementCount > n.childElementCount,
                                    o = r.get(e) || getComputedStyle(e);
                                if (
                                    (r.has(e) || r.set(e, o),
                                    i &&
                                        (function (t, e) {
                                            var r;
                                            if (
                                                t?.nodeType !== 1 ||
                                                (function (t) {
                                                    try {
                                                        let e = t.getAttribute?.('style') || '';
                                                        return /\b(height|width|block-size|inline-size)\s*:/.test(e);
                                                    } catch {
                                                        return !1;
                                                    }
                                                })(t) ||
                                                (r = t) instanceof HTMLImageElement ||
                                                r instanceof HTMLCanvasElement ||
                                                r instanceof HTMLVideoElement ||
                                                r instanceof HTMLIFrameElement ||
                                                r instanceof SVGElement ||
                                                r instanceof HTMLObjectElement ||
                                                r instanceof HTMLEmbedElement
                                            )
                                                return !1;
                                            let n = e.position;
                                            if ('absolute' === n || 'fixed' === n || 'sticky' === n) return !1;
                                            let i = e.display || '';
                                            return !(i.includes('flex') || i.includes('grid') || i.startsWith('table') || (e.transform && 'none' !== e.transform));
                                        })(e, o))
                                ) {
                                    (n.style.height || (n.style.height = 'auto'),
                                        n.style.width || (n.style.width = 'auto'),
                                        n.style.removeProperty('block-size'),
                                        n.style.removeProperty('inline-size'),
                                        n.style.minHeight || (n.style.minHeight = '0'),
                                        n.style.minWidth || (n.style.minWidth = '0'),
                                        n.style.maxHeight || (n.style.maxHeight = 'none'),
                                        n.style.maxWidth || (n.style.maxWidth = 'none'));
                                    let t = o.overflowY || o.overflowBlock || 'visible',
                                        e = o.overflowX || o.overflowInline || 'visible';
                                    ('visible' !== t || 'visible' !== e) && (n.style.overflow = 'visible');
                                }
                                let a = Array.from(e.children),
                                    l = Array.from(n.children);
                                for (let e = 0; e < Math.min(a.length, l.length); e++) t(a[e], l[e]);
                            })(t, e);
                        })(u.element, u.clone, u.styleCache);
                    } catch (t) {
                        console.warn('[snapdom] shrink pass failed:', t);
                    }
                try {
                    await el(u.clone, u.element, u.nodeMap);
                } catch {}
                let $ = (t) =>
                        new Promise((e, r) => {
                            U(
                                () => {
                                    Promise.resolve().then(t).then(e, r);
                                },
                                { fast: a },
                            );
                        }),
                    A = (async () => {
                        await Promise.all([$(() => e3(u.clone, u.options)), $(() => rt(u.element, u.clone, u.styleCache, u.options, u.nodeMap))]);
                        try {
                            !(function (t, e, r = i.session.nodeMap) {
                                let n = [],
                                    o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
                                for (let t = o.currentNode; t; t = o.nextNode()) {
                                    let i = r.get(t);
                                    if (i?.nodeType !== 1) continue;
                                    let o = k(i),
                                        a = o.getPropertyValue('backdrop-filter') || o.getPropertyValue('-webkit-backdrop-filter');
                                    a &&
                                        'none' !== a &&
                                        t !== e &&
                                        n.push({
                                            cloneEl: t,
                                            orig: i,
                                            bf: a,
                                            path: (function (t, e) {
                                                let r = [];
                                                for (let n = e; n !== t; n = n.parentElement) {
                                                    if (!n?.parentElement) return null;
                                                    r.push([...n.parentElement.children].indexOf(n));
                                                }
                                                return r.reverse();
                                            })(e, t),
                                        });
                                }
                                if (!n.length) return;
                                let a = t.getBoundingClientRect();
                                for (let { cloneEl: t, orig: i, bf: o, copy: l } of n.map((t, i) => {
                                    let o = e.cloneNode(!0);
                                    ((function (t, e, r, n) {
                                        let i = [[t, e]];
                                        for (; i.length;) {
                                            let [t, e] = i.pop(),
                                                o = n.get(e);
                                            if (o?.nodeType === 1) {
                                                let e = o.getBoundingClientRect();
                                                (e.left > r.right + 128 || e.right < r.left - 128 || e.top > r.bottom + 128 || e.bottom < r.top - 128) &&
                                                    ('IMG' === t.tagName && t.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='),
                                                    t.style && (t.style.backgroundImage = 'none'));
                                            }
                                            let a = t.children,
                                                l = e.children;
                                            for (let t = 0; t < a.length; t++) i.push([a[t], l[t]]);
                                        }
                                    })(o, e, t.orig.getBoundingClientRect(), r),
                                        (function (t) {
                                            if (t)
                                                for (let e = t; e && e.parentNode;) {
                                                    let r = e.parentNode;
                                                    for (; e.nextSibling;) e.nextSibling.remove();
                                                    (e === t && e.remove(), (e = r));
                                                }
                                        })(re(o, t.path)));
                                    for (let t = 0; t < i; t++) {
                                        let e = re(o, n[t].path);
                                        e &&
                                            (e.style.setProperty('backdrop-filter', 'none', 'important'),
                                            e.style.setProperty('-webkit-backdrop-filter', 'none', 'important'));
                                    }
                                    return { ...t, copy: o };
                                }))
                                    !(function (t, e, r, n, i) {
                                        let o = e.getBoundingClientRect();
                                        if (!o.width || !o.height) return;
                                        let a = k(e),
                                            l = e.offsetWidth ? o.width / e.offsetWidth : 1,
                                            s = Math.abs(l - 1) > 0.001 ? 1 / l : 1;
                                        ((n.style.position = 'absolute'),
                                            (n.style.left = `${(i.left - o.left) * s}px`),
                                            (n.style.top = `${(i.top - o.top) * s}px`),
                                            (n.style.width = `${i.width}px`),
                                            (n.style.height = `${i.height}px`),
                                            (n.style.margin = '0'),
                                            (n.style.filter = r),
                                            1 !== s && ((n.style.transform = `scale(${s})`), (n.style.transformOrigin = 'top left')));
                                        let c = document.createElement('div');
                                        ((c.style.cssText = 'position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:-2'), c.appendChild(n));
                                        let u = document.createElement('div');
                                        for (let e of ((u.style.cssText = 'position:absolute;inset:0;border-radius:inherit;z-index:-1'),
                                        (u.style.backgroundColor = a.backgroundColor),
                                        (u.style.backgroundImage = t.style.backgroundImage || a.backgroundImage),
                                        ['background-size', 'background-position', 'background-repeat', 'background-origin', 'background-clip']))
                                            u.style.setProperty(e, a.getPropertyValue(e));
                                        (t.style.setProperty('background-color', 'transparent', 'important'),
                                            t.style.setProperty('background-image', 'none', 'important'),
                                            t.style.setProperty('backdrop-filter', 'none', 'important'),
                                            t.style.setProperty('-webkit-backdrop-filter', 'none', 'important'),
                                            'static' === a.position && (t.style.position = 'relative'),
                                            (t.style.isolation = 'isolate'),
                                            t.prepend(u),
                                            t.prepend(c));
                                    })(t, i, o, l, a);
                            })(u.element, u.clone, u.nodeMap);
                        } catch (t) {
                            console.warn('[snapdom] backdrop-filter emulation failed:', t);
                        }
                        e.compress && (await $(() => rh(u.clone, u.options, u.nodeMap)));
                    })(),
                    E = Promise.resolve();
                (e.embedFonts &&
                    (E = $(async () => {
                        let t = u.element.ownerDocument || document,
                            e = c
                                ? (t) => {
                                      try {
                                          let e = t.getBoundingClientRect();
                                          return e.right >= c.left - 200 && e.left <= c.right + 200 && e.bottom >= c.top - 200 && e.top <= c.bottom + 200;
                                      } catch {
                                          return !0;
                                      }
                                  }
                                : null,
                            { required: r, usedCodepoints: n } = eF(u.element, e);
                        if (B()) {
                            let e = new Set(
                                Array.from(r)
                                    .map((t) => String(t).split('__')[0])
                                    .filter(Boolean),
                            );
                            await eN(e, 1, t);
                        }
                        y = await eE({
                            required: r,
                            usedCodepoints: n,
                            preCached: !1,
                            exclude: u.options.excludeFonts,
                            localFonts: u.options.localFonts,
                            useProxy: u.options.useProxy,
                            fontStylesheetDomains: u.options.fontStylesheetDomains,
                            doc: t,
                        });
                    })),
                    await Promise.all([A, E]));
                let F = ((r = u.clone),
                    (o = new Set()),
                    r.nodeType !== Node.ELEMENT_NODE && r.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
                        ? []
                        : (r.tagName && o.add(r.tagName.toLowerCase()),
                          'function' == typeof r.querySelectorAll && r.querySelectorAll('*').forEach((t) => o.add(t.tagName.toLowerCase())),
                          Array.from(o))).sort(),
                    N = F.join(',');
                i.baseStyle.has(N)
                    ? (b = i.baseStyle.get(N))
                    : await new Promise((t) => {
                          U(
                              () => {
                                  ((b = (function (t) {
                                      let e = new Map();
                                      for (let r of t) {
                                          let t = v(r);
                                          if (!t) continue;
                                          let n = Object.entries(t)
                                              .map(([t, e]) => `${t}:${e};`)
                                              .sort()
                                              .join('');
                                          n && (e.has(n) || e.set(n, []), e.get(n).push(r));
                                      }
                                      let r = '';
                                      for (let [t, n] of e.entries())
                                          r += `${n.join(',')} { ${t} }
`;
                                      return r;
                                  })(F)),
                                      i.baseStyle.set(N, b),
                                      t());
                              },
                              { fast: a },
                          );
                      });
                let R = (function (t) {
                    if (!t || !t.styleSheets) return '';
                    let e = (function (t) {
                            let e = '';
                            for (let r of t.styleSheets) {
                                let t = -1;
                                try {
                                    t = r.cssRules ? r.cssRules.length : -1;
                                } catch {}
                                e += (r.href || 'inline') + ':' + t + '|';
                            }
                            return e;
                        })(t),
                        r = e1.get(t);
                    if (r && r.fp === e) return r.css;
                    let n = new Set(),
                        i = '';
                    for (let e of Array.from(t.styleSheets))
                        try {
                            let t = e.cssRules;
                            t &&
                                (i += (function t(e, r = new Set()) {
                                    let n = '';
                                    if (!e) return n;
                                    for (let i = 0; i < e.length; i++) {
                                        let o = e[i];
                                        try {
                                            if (o.type === CSSRule.IMPORT_RULE && o.styleSheet) {
                                                n += t(o.styleSheet.cssRules, r);
                                                continue;
                                            }
                                            if (o.type === CSSRule.MEDIA_RULE && o.cssRules) {
                                                let e = t(o.cssRules, r);
                                                e && (n += `@media ${o.conditionText}{${e}}`);
                                                continue;
                                            }
                                            if (o.type === CSSRule.STYLE_RULE) {
                                                let t = o.selectorText || '';
                                                if (e0.test(t)) {
                                                    let t = o.cssText;
                                                    t && !r.has(t) && (r.add(t), (n += t));
                                                }
                                            }
                                        } catch {}
                                    }
                                    return n;
                                })(t, n));
                        } catch {}
                    return (e1.set(t, { fp: e, css: i }), i);
                })(u.element?.ownerDocument || document);
                ((u = { fontsCSS: y, baseCSS: b, scrollbarCSS: R, ...u }),
                    await ra('beforeRender', u),
                    await new Promise((t) => {
                        U(
                            () => {
                                let r = k(u.element),
                                    n = u.element.getBoundingClientRect(),
                                    o = Math.max(1, eZ(u.element.offsetWidth || parseFloat(r.width) || n.width || 1)),
                                    a = Math.max(1, eZ(u.element.offsetHeight || parseFloat(r.height) || n.height || 1)),
                                    c = u.element.ownerDocument || document;
                                if (!g && (u.element === c.body || u.element === c.documentElement) && !c.documentElement.hasAttribute('data-sd-pinned')) {
                                    let t = Math.max(u.element.scrollHeight || 0, c.documentElement?.scrollHeight || 0, c.body?.scrollHeight || 0),
                                        e = Math.max(u.element.scrollWidth || 0, c.documentElement?.scrollWidth || 0, c.body?.scrollWidth || 0);
                                    (t > 0 && (a = Math.max(a, eZ(t))), e > 0 && (o = Math.max(o, eZ(e))));
                                    try {
                                        let t = (u.scrollbarCSS || '').length + (u.baseCSS || '').length + (u.fontsCSS || '').length + (u.classCSS || '').length,
                                            e = i.measureHints.get(u.element);
                                        if (e && e.cssLen === t && e.w0 === o) (e.csh > 0 && (a = Math.max(a, eZ(e.csh))), e.csw > 0 && (o = Math.max(o, eZ(e.csw))));
                                        else {
                                            let e = c.createElement('div');
                                            (e.setAttribute('data-snapdom-internal', ''),
                                                (e.style.cssText =
                                                    'position:absolute!important;left:-9999px!important;top:0!important;width:' +
                                                    o +
                                                    'px!important;overflow:visible!important;visibility:hidden!important;'));
                                            let r = e.attachShadow({ mode: 'open' }),
                                                n = c.createElement('style');
                                            ((n.textContent =
                                                (u.scrollbarCSS || '') + u.baseCSS + 'svg{overflow:visible;} foreignObject{overflow:visible;}' + u.classCSS),
                                                r.appendChild(n),
                                                r.appendChild(u.clone.cloneNode(!0)),
                                                c.body.appendChild(e));
                                            let l = e.scrollHeight,
                                                s = e.scrollWidth;
                                            (c.body.removeChild(e),
                                                i.measureHints.set(u.element, { cssLen: t, w0: o, csh: l, csw: s }),
                                                l > 0 && (a = Math.max(a, eZ(l))),
                                                s > 0 && (o = Math.max(o, eZ(s))));
                                        }
                                    } catch {}
                                }
                                if (u.options?.excludeMode === 'remove' || u.options?.filterMode === 'remove') {
                                    let t = (function (t, e) {
                                        let r = getComputedStyle(t),
                                            n = t.getBoundingClientRect(),
                                            i = 1 / 0,
                                            o = -1 / 0,
                                            a = !1;
                                        for (let r of Array.from(t.children)) {
                                            if (
                                                (function (t, e) {
                                                    if (t?.nodeType !== 1) return !1;
                                                    if ('exclude' === t.getAttribute('data-capture') && e?.excludeMode === 'remove') return !0;
                                                    if (Array.isArray(e?.exclude))
                                                        for (let r of e.exclude)
                                                            try {
                                                                if (t.matches(r)) return 'remove' === e.excludeMode;
                                                            } catch (t) {
                                                                q(e, 'exclude selector match failed', t);
                                                            }
                                                    if ('function' == typeof e?.filter && 'remove' === e.filterMode)
                                                        try {
                                                            if (!e.filter(t)) return !0;
                                                        } catch (t) {
                                                            q(e, 'filter function failed', t);
                                                        }
                                                    return !1;
                                                })(r, e) ||
                                                !(function (t) {
                                                    let e = getComputedStyle(t);
                                                    return 'none' !== e.display && 'absolute' !== e.position && 'fixed' !== e.position;
                                                })(r)
                                            )
                                                continue;
                                            let t = r.getBoundingClientRect(),
                                                l = t.top - n.top,
                                                s = t.bottom - n.top;
                                            s <= l || (l < i && (i = l), s > o && (o = s), (a = !0));
                                        }
                                        let l = a ? Math.max(0, o - i) : 0;
                                        return (
                                            (parseFloat(r.borderTopWidth) || 0) +
                                            (parseFloat(r.borderBottomWidth) || 0) +
                                            (parseFloat(r.paddingTop) || 0) +
                                            (parseFloat(r.paddingBottom) || 0) +
                                            l
                                        );
                                    })(u.element, u.options);
                                    Number.isFinite(t) && t > 0 && (a = Math.max(1, Math.min(a, eZ(t + 1))));
                                }
                                if (u.options?.reconcile)
                                    try {
                                        let t = (u.scrollbarCSS || '') + u.baseCSS + 'svg{overflow:visible;} foreignObject{overflow:visible;}' + u.classCSS;
                                        !(function (t, e, r, n, i, o) {
                                            let a = t.ownerDocument || document,
                                                l = t.getBoundingClientRect(),
                                                s = i > 0 && l.width > 0 ? l.width / i : 1,
                                                c = o > 0 && l.height > 0 ? l.height / o : 1;
                                            if (Math.abs(s - c) > 0.02) return;
                                            let u = a.createElement('div');
                                            (u.setAttribute('data-snapdom-internal', ''),
                                                (u.style.cssText =
                                                    'position:absolute!important;left:-9999px!important;top:0!important;width:' +
                                                    i +
                                                    'px!important;overflow:visible!important;visibility:hidden!important;'));
                                            let d = u.attachShadow({ mode: 'open' }),
                                                f = a.createElement('style');
                                            ((f.textContent = r), d.appendChild(f));
                                            let h = e.cloneNode(!0);
                                            (d.appendChild(h), a.body.appendChild(u));
                                            let m = 0;
                                            try {
                                                let t = (e, r) => {
                                                    let i = e.children,
                                                        o = r.children,
                                                        a = Math.min(i.length, o.length);
                                                    for (let e = 0; e < a; e++) {
                                                        let r = i[e],
                                                            a = o[e],
                                                            l = n.get(r);
                                                        if (l?.nodeType === 1 && r instanceof HTMLElement && l.isConnected) {
                                                            let t = l.getBoundingClientRect();
                                                            if (t.width > 0 && t.height > 0) {
                                                                let e = a.getBoundingClientRect(),
                                                                    n = e.width - t.width / s,
                                                                    i = e.height - t.height / c;
                                                                (Math.abs(n) > 0.75 || Math.abs(i) > 0.75) &&
                                                                    ((r.style.boxSizing = 'border-box'),
                                                                    (r.style.width = `${eZ(t.width / s)}px`),
                                                                    (r.style.height = `${eZ(t.height / c)}px`),
                                                                    m++);
                                                            }
                                                        }
                                                        t(r, a);
                                                    }
                                                };
                                                t(e, h);
                                            } finally {
                                                u.remove();
                                            }
                                        })(u.element, u.clone, t, u.nodeMap, o, a);
                                    } catch (t) {
                                        console.warn('[snapdom] reconcile pass failed:', t);
                                    }
                                let d = (t, e = NaN) => {
                                        let r = 'string' == typeof t ? parseFloat(t) : t;
                                        return Number.isFinite(r) ? r : e;
                                    },
                                    f = d(u.options.width),
                                    h = d(u.options.height),
                                    m = g ? eZ(g.width) : o,
                                    p = g ? eZ(g.height) : a,
                                    y = m,
                                    b = p,
                                    v = Number.isFinite(f),
                                    C = Number.isFinite(h),
                                    M = p > 0 ? m / p : 1;
                                v && C
                                    ? ((y = Math.max(1, eZ(f))), (b = Math.max(1, eZ(h))))
                                    : v
                                      ? ((y = Math.max(1, eZ(f))), (b = Math.max(1, eZ(y / (M || 1)))))
                                      : C && ((b = Math.max(1, eZ(h))), (y = Math.max(1, eZ(b * (M || 1)))));
                                let $ = 0,
                                    A = 0,
                                    E = o,
                                    F = a;
                                if (g) {
                                    let t = 0,
                                        e = 0;
                                    if (rp(u.element)) {
                                        let n = null;
                                        if (!l && S && Number.isFinite(S.a)) n = { a: S.a, b: S.b || 0, c: S.c || 0, d: S.d || 1, e: 0, f: 0 };
                                        else {
                                            let t = ez(u.element),
                                                e = eQ(r.transform && 'none' !== r.transform ? r.transform : '', t);
                                            e && e.is2D && (n = { a: e.a, b: e.b, c: e.c, d: e.d, e: 0, f: 0 });
                                        }
                                        if (n && (1 !== n.a || 0 !== n.b || 0 !== n.c || 1 !== n.d)) {
                                            let { ox: i, oy: l } = eq(r, o, a),
                                                s = eV(o, a, n, i, l);
                                            ((t = s.minX), (e = s.minY));
                                        }
                                    }
                                    (($ = eZ(g.x + t)), (A = eZ(g.y + e)), (E = eZ($ + g.width)), (F = eZ(A + g.height)));
                                } else if (!l && S && Number.isFinite(S.a)) {
                                    let t = eV(o, a, { a: S.a, b: S.b || 0, c: S.c || 0, d: S.d || 1, e: 0, f: 0 }, 0, 0);
                                    (($ = eZ(t.minX)), (A = eZ(t.minY)), (E = eZ(t.maxX)), (F = eZ(t.maxY)));
                                } else if (l && rp(u.element)) {
                                    var N;
                                    let t,
                                        e,
                                        n,
                                        i = r.transform && 'none' !== r.transform ? r.transform : '',
                                        l = ez(u.element),
                                        s =
                                            ((N = { baseTransform: i, rotate: l.rotate || '0deg', scale: l.scale, translate: l.translate }),
                                            (t = (function () {
                                                if (eX) return eX;
                                                let t = document.createElement('div');
                                                return (
                                                    (t.id = 'snapdom-measure-slot'),
                                                    t.setAttribute('aria-hidden', 'true'),
                                                    Object.assign(t.style, {
                                                        position: 'absolute',
                                                        left: '-99999px',
                                                        top: '0px',
                                                        width: '0px',
                                                        height: '0px',
                                                        overflow: 'hidden',
                                                        opacity: '0',
                                                        pointerEvents: 'none',
                                                        contain: 'size layout style',
                                                    }),
                                                    document.documentElement.appendChild(t),
                                                    (eX = t),
                                                    t
                                                );
                                            })()),
                                            ((e = document.createElement('div')).style.transformOrigin = '0 0'),
                                            N.baseTransform && (e.style.transform = N.baseTransform),
                                            N.rotate && (e.style.rotate = N.rotate),
                                            N.scale && (e.style.scale = N.scale),
                                            N.translate && (e.style.translate = N.translate),
                                            t.appendChild(e),
                                            (n = (function (t) {
                                                let e = getComputedStyle(t).transform;
                                                if (!e || 'none' === e) return new DOMMatrix();
                                                try {
                                                    return new DOMMatrix(e);
                                                } catch {
                                                    return new WebKitCSSMatrix(e);
                                                }
                                            })(e)),
                                            t.removeChild(e),
                                            n),
                                        { ox: c, oy: d } = eq(r, o, a),
                                        f = s.is2D ? s : new DOMMatrix(s.toString()),
                                        h = eV(o, a, { a: f.a, b: f.b, c: f.c, d: f.d, e: 0, f: 0 }, c, d);
                                    (($ = eZ(h.minX)), (A = eZ(h.minY)), (E = eZ(h.maxX)), (F = eZ(h.maxY)));
                                }
                                let R = eB(r.boxShadow),
                                    L = eB(r.textShadow),
                                    P = (function (t) {
                                        let e = t.filter && 'none' !== t.filter ? t.filter : t.webkitFilter || '',
                                            r = /blur\(\s*([0-9.]+)px\s*\)/gi,
                                            n = 0,
                                            i;
                                        for (; (i = r.exec(e));) n += parseFloat(i[1]) || 0;
                                        let o = Math.ceil(n);
                                        return { top: o, right: o, bottom: o, left: o };
                                    })(r),
                                    T = (function (t) {
                                        if ('none' === (t.outlineStyle || 'none')) return { top: 0, right: 0, bottom: 0, left: 0 };
                                        let e = Math.ceil(parseFloat(t.outlineWidth || '0') || 0) + Math.max(0, Math.ceil(parseFloat(t.outlineOffset || '0') || 0));
                                        return { top: e, right: e, bottom: e, left: e };
                                    })(r),
                                    W = (function (t) {
                                        let e = `${t.filter || ''} ${t.webkitFilter || ''}`.trim();
                                        if (!e || 'none' === e) return { bleed: { top: 0, right: 0, bottom: 0, left: 0 }, has: !1 };
                                        let r = e.match(/drop-shadow\((?:[^()]|\([^()]*\))*\)/gi) || [],
                                            n = 0,
                                            i = 0,
                                            o = 0,
                                            a = 0,
                                            l = !1;
                                        for (let t of r) {
                                            l = !0;
                                            let [e = 0, r = 0, s = 0] = t.match(/-?\d+(?:\.\d+)?px/gi)?.map((t) => parseFloat(t)) || [],
                                                c = Math.abs(e) + s,
                                                u = Math.abs(r) + s;
                                            ((i = Math.max(i, c + Math.max(e, 0))),
                                                (a = Math.max(a, c + Math.max(-e, 0))),
                                                (o = Math.max(o, u + Math.max(r, 0))),
                                                (n = Math.max(n, u + Math.max(-r, 0))));
                                        }
                                        return { bleed: { top: eZ(n), right: eZ(i), bottom: eZ(o), left: eZ(a) }, has: l };
                                    })(r),
                                    I = g
                                        ? { top: 0, right: 0, bottom: 0, left: 0 }
                                        : s
                                          ? {
                                                top: eZ(Math.max(R.top, L.top) + P.top + T.top + W.bleed.top),
                                                right: eZ(Math.max(R.right, L.right) + P.right + T.right + W.bleed.right),
                                                bottom: eZ(Math.max(R.bottom, L.bottom) + P.bottom + T.bottom + W.bleed.bottom),
                                                left: eZ(Math.max(R.left, L.left) + P.left + T.left + W.bleed.left),
                                            }
                                          : { top: P.top, right: P.right, bottom: P.bottom, left: P.left };
                                (($ = eZ($ - I.left)), (A = eZ(A - I.top)), (E = eZ(E + I.right)), (F = eZ(F + I.bottom)));
                                let _ = Math.max(1, eZ(E - $)),
                                    O = Math.max(1, eZ(F - A)),
                                    D = v || C ? eZ(y / m) : 1,
                                    H = C || v ? eZ(b / p) : 1,
                                    j = Math.max(1, eZ(_ * D)),
                                    U = Math.max(1, eZ(O * H)),
                                    V = 'http://www.w3.org/2000/svg',
                                    z = eZ(2 * !!rp(u.element) + +!l),
                                    X = Math.ceil(_ + 2 * z),
                                    Y = Math.ceil(O + 2 * z),
                                    G = eZ(-(eZ($) - z)),
                                    Q = eZ(-(eZ(A) - z)),
                                    J = Math.max(0, G),
                                    K = Math.max(0, Q),
                                    Z = eZ(X - Math.min(0, G)),
                                    tt = eZ(Y - Math.min(0, Q)),
                                    te = document.createElementNS(V, 'foreignObject');
                                (te.setAttribute('x', String(Math.min(0, G))),
                                    te.setAttribute('y', String(Math.min(0, Q))),
                                    te.setAttribute('width', String(Z)),
                                    te.setAttribute('height', String(tt)),
                                    (te.style.overflow = 'visible'));
                                let tr = document.createElement('style');
                                ((tr.textContent =
                                    (u.scrollbarCSS || '') +
                                    u.baseCSS +
                                    u.fontsCSS +
                                    'svg{overflow:visible;} foreignObject{overflow:visible;} foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;}' +
                                    u.classCSS),
                                    te.appendChild(tr));
                                let tn = document.createElement('div');
                                (tn.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml'),
                                    (tn.style.cssText =
                                        `all:initial;box-sizing:border-box;display:block;overflow:visible;width:${Z}px;height:${tt}px` +
                                        (0 !== J || 0 !== K ? `;padding:${K}px 0 0 ${J}px !important` : '')),
                                    tn.appendChild(u.clone),
                                    te.appendChild(tn));
                                let ti = new XMLSerializer().serializeToString(te),
                                    to = v || C;
                                e.meta = { w0: m, h0: p, vbW: X, vbH: Y, targetW: y, targetH: b };
                                let ta = !to || B() ? X : eZ(j + 2 * z),
                                    tl = !to || B() ? Y : eZ(U + 2 * z),
                                    ts = parseFloat(k(c.documentElement)?.fontSize) || 16;
                                ((x = `<svg xmlns="${V}" width="${ta}" height="${tl}" viewBox="0 0 ${X} ${Y}" font-size="${ts}px">` + ti + '</svg>'),
                                    (w = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(x)}`),
                                    (u = { svgString: x, dataURL: w, ...u }),
                                    t());
                            },
                            { fast: a },
                        );
                    }),
                    await ra('afterRender', u));
                let L = document.getElementById('snapdom-sandbox');
                return (L && 'absolute' === L.style.position && L.remove(), u.dataURL);
            }
            function rp(t) {
                return (function (t) {
                    let e = k(t),
                        r = e.transform || 'none';
                    if ('none' !== r && !/^matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*,\s*0\s*,\s*0\s*\)$/i.test(r)) return !0;
                    let n = e.rotate && 'none' !== e.rotate && '0deg' !== e.rotate,
                        i = e.scale && 'none' !== e.scale && '1' !== e.scale,
                        o = e.translate && 'none' !== e.translate && '0px 0px' !== e.translate;
                    return !!(n || i || o);
                })(t);
            }
            (s(), s(), V(), z());
            var rg = new WeakMap();
            function ry(t, e, r) {
                let n = new Set();
                if ((t instanceof HTMLVideoElement && n.add(t), t.querySelectorAll)) for (let e of t.querySelectorAll('video')) n.add(e);
                for (let t of e.trackedVideos) n.has(t) || (t.removeEventListener('timeupdate', r), t.removeEventListener('seeked', r), e.trackedVideos.delete(t));
                for (let t of n) e.trackedVideos.has(t) || (t.addEventListener('timeupdate', r), t.addEventListener('seeked', r), e.trackedVideos.add(t));
            }
            function rb(t) {
                let { burst: e, invalidate: r, ...n } = t || {};
                try {
                    return JSON.stringify(n, Object.keys(n).sort());
                } catch {
                    return null;
                }
            }
            (X(), w(), s());
            var rw = Object.assign(rv, {
                    plugins: function (...t) {
                        return (
                            (function (...t) {
                                for (let e of t.flat()) {
                                    let t = ri(e);
                                    t && (rn.some((e) => e && e.name && t.name && e.name === t.name) || rn.push(t));
                                }
                            })(...t),
                            rw
                        );
                    },
                }),
                rx = Symbol('snapdom.internal'),
                rS = Symbol('snapdom.internal.silent');
            async function rv(t, e) {
                var r;
                let n, i, o, a, l;
                if (!t) throw Error('Element cannot be null or undefined');
                let s = (function (t = {}) {
                    let e = t.format ?? 'png';
                    'jpg' === e && (e = 'jpeg');
                    let r = (function (t) {
                        if (!0 === t) return 'soft';
                        if (!1 === t) return 'disabled';
                        if ('string' == typeof t) {
                            let e = t.toLowerCase().trim();
                            if ('auto' === e) return 'auto';
                            if ('full' === e) return 'full';
                            if ('soft' === e || 'disabled' === e) return e;
                        }
                        return 'soft';
                    })(t.cache);
                    return {
                        debug: t.debug ?? !1,
                        fast: t.fast ?? !0,
                        scale: t.scale ?? 1,
                        exclude: t.exclude ?? [],
                        excludeMode: t.excludeMode ?? 'hide',
                        filter: t.filter ?? null,
                        filterMode: t.filterMode ?? 'hide',
                        placeholders: !1 !== t.placeholders,
                        embedFonts: t.embedFonts ?? !1,
                        iconFonts: Array.isArray(t.iconFonts) ? t.iconFonts : t.iconFonts ? [t.iconFonts] : [],
                        localFonts: Array.isArray(t.localFonts) ? t.localFonts : [],
                        excludeFonts: t.excludeFonts ?? void 0,
                        fontStylesheetDomains: Array.isArray(t.fontStylesheetDomains) ? t.fontStylesheetDomains : [],
                        fallbackURL: t.fallbackURL ?? void 0,
                        cache: r,
                        useProxy: 'string' == typeof t.useProxy ? t.useProxy : '',
                        width: t.width ?? null,
                        height: t.height ?? null,
                        format: e,
                        type: t.type ?? 'svg',
                        quality: t.quality ?? 0.92,
                        dpr: t.dpr ?? (window.devicePixelRatio || 1),
                        backgroundColor: t.backgroundColor ?? (['jpeg', 'webp'].includes(e) ? '#ffffff' : null),
                        filename: t.filename ?? 'snapDOM',
                        outerTransforms: t.outerTransforms ?? !0,
                        outerShadows: t.outerShadows ?? !1,
                        reconcile: t.reconcile ?? !1,
                        burst: t.burst ?? !1,
                        invalidate: t.invalidate ?? !1,
                        clip: t.clip ?? null,
                        compress: !1 !== t.compress,
                        excludeStyleProps: t.excludeStyleProps ?? null,
                        resolvePicturePlaceholders: !1 !== t.resolvePicturePlaceholders,
                        pictureResolver: t.pictureResolver && 'object' == typeof t.pictureResolver ? t.pictureResolver : {},
                    };
                })(e);
                if (
                    ((function (t, e, r = !1) {
                        t &&
                            (!t.plugins || r) &&
                            (t.plugins = (function (t) {
                                let e = [];
                                if (Array.isArray(t))
                                    for (let r of t) {
                                        let t = ri(r);
                                        if (!t || !t.name) continue;
                                        let n = e.findIndex((e) => e && e.name === t.name);
                                        (n >= 0 && e.splice(n, 1), e.push(t));
                                    }
                                for (let t of rn) t && t.name && !e.some((e) => e.name === t.name) && e.push(t);
                                return Object.freeze(e);
                            })(e));
                    })(s, e && e.plugins),
                    B())
                ) {
                    if (!0 === s.embedFonts)
                        try {
                            let e = eF(t, void 0).required,
                                r = new Set([...e].map((t) => String(t).split('__')[0]).filter(Boolean));
                            await eN(r, 1);
                        } catch {}
                    let r = Array.from(t.querySelectorAll('canvas'));
                    for (let n of ('CANVAS' === t.tagName && r.unshift(t), r))
                        try {
                            let t = n.getContext('2d', { willReadFrequently: !0 });
                            t && t.getImageData(0, 0, 1, 1);
                        } catch (t) {
                            q(e, 'safari canvas poke failed', t);
                        }
                }
                return (
                    s.iconFonts &&
                        s.iconFonts.length > 0 &&
                        (function (t) {
                            for (let e of Array.isArray(t) ? t : [t]) {
                                let t;
                                if (e instanceof RegExp) t = e;
                                else if ('string' == typeof e) t = RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
                                else {
                                    console.warn('[snapdom] Ignored invalid iconFont value:', e);
                                    continue;
                                }
                                let r = `${t.source}/${t.flags}`;
                                ee.has(r) || (ee.add(r), et.push(t));
                            }
                        })(s.iconFonts),
                    s.snap || (s.snap = { toPng: (t, e) => rw.toPng(t, e), toSvg: (t, e) => rw.toSvg(t, e) }),
                    s.burst
                        ? ((r = () => rw.capture(t, s, rx)),
                          (n = rg.get(t)) ||
                              (((n = (function (t) {
                                  let e = { dirty: !0, capturing: !1, last: null, inflight: Promise.resolve(), observers: [], trackedVideos: new Set() },
                                      r = (t) => {
                                          e.capturing || (tM(t) && (e.dirty = !0));
                                      },
                                      n = () => {
                                          e.capturing || (e.dirty = !0);
                                      },
                                      i = t.ownerDocument || document;
                                  try {
                                      let n = new MutationObserver(r);
                                      (n.observe(t, { subtree: !0, childList: !0, attributes: !0, characterData: !0 }), e.observers.push(n));
                                  } catch {}
                                  try {
                                      if (i.head) {
                                          let t = new MutationObserver(r);
                                          (t.observe(i.head, { subtree: !0, childList: !0, characterData: !0, attributes: !0 }), e.observers.push(t));
                                      }
                                  } catch {}
                                  return ((e.markDirty = r), (e.onMediaDirty = n), ry(t, e, n), e);
                              })(t)).baselineSignature = rb(e)),
                              rg.set(t, n)),
                          (o = null === (i = rb(e)) || i !== n.baselineSignature),
                          (a = async () => {
                              for (let t of n.observers) n.markDirty(t.takeRecords());
                              if ((s.invalidate && (n.dirty = !0), !o && !n.dirty && n.last)) return n.last;
                              ((n.capturing = !0), o || (n.dirty = !1));
                              try {
                                  let t = await r();
                                  return (o || (n.last = t), t);
                              } finally {
                                  for (let t of n.observers) t.takeRecords();
                                  ((n.capturing = !1), ry(t, n, n.onMediaDirty));
                              }
                          }),
                          (l = n.inflight.then(a, a)),
                          (n.inflight = l.catch(() => {})),
                          l)
                        : rw.capture(t, s, rx)
                );
            }
            ((rw.capture = async (t, e, r) => {
                if (r !== rx) throw Error('[snapdom.capture] is internal. Use snapdom(...) instead.');
                let n = await rm(t, e),
                    i = {
                        img: async (t, e) => {
                            let { toImg: r } = await Promise.resolve().then(() => (td(), tc));
                            return r(n, { ...t, ...(e || {}) });
                        },
                        svg: async (t, e) => {
                            let { toSvg: r } = await Promise.resolve().then(() => (td(), tc));
                            return r(n, { ...t, ...(e || {}) });
                        },
                        canvas: async (t, e) => {
                            let { toCanvas: r } = await Promise.resolve().then(() => (to(), Y));
                            return r(n, { ...t, ...(e || {}) });
                        },
                        blob: async (t, e) => {
                            let { toBlob: r } = await Promise.resolve().then(() => (tm(), tf));
                            return r(n, { ...t, ...(e || {}) });
                        },
                        png: async (t, e) => {
                            let { rasterize: r } = await Promise.resolve().then(() => (ts(), ta));
                            return r(n, { ...t, ...(e || {}), format: 'png' });
                        },
                        jpeg: async (t, e) => {
                            let { rasterize: r } = await Promise.resolve().then(() => (ts(), ta));
                            return r(n, { ...t, ...(e || {}), format: 'jpeg' });
                        },
                        webp: async (t, e) => {
                            let { rasterize: r } = await Promise.resolve().then(() => (ts(), ta));
                            return r(n, { ...t, ...(e || {}), format: 'webp' });
                        },
                        download: async (t, e) => {
                            let { download: r } = await Promise.resolve().then(() => (tb(), tp));
                            return r(n, { ...t, ...(e || {}) });
                        },
                    },
                    o = {};
                for (let t of ['img', 'svg', 'canvas', 'blob', 'png', 'jpeg', 'webp']) o[t] = async (r) => i[t](e, { ...(r || {}), [rS]: !0 });
                o.jpg = o.jpeg;
                let a = { ...e, export: { url: n }, exports: o },
                    l = Object.assign({}, ...(await rl('defineExports', a)).filter((t) => t && 'object' == typeof t).reverse()),
                    s = { ...i, ...l };
                s.jpeg && !s.jpg && (s.jpg = (t, e) => s.jpeg(t, e));
                let c = !1,
                    u = Promise.resolve();
                async function d(t, r) {
                    let i = async () => {
                            let i,
                                o = s[t];
                            if (!o) throw Error(`[snapdom] Unknown export type: ${t}`);
                            let a =
                                    ([t, (i = { ...e, ...(r || {}) }).format, i.type]
                                        .map((t) => ('string' == typeof t ? t.toLowerCase() : ''))
                                        .find((t) => 'jpeg' === t || 'jpg' === t || 'webp' === t) &&
                                        (null == i.backgroundColor || 'transparent' === i.backgroundColor) &&
                                        (i.backgroundColor = '#ffffff'),
                                    i),
                                l = { ...e, export: { type: t, options: a, url: n } };
                            await ra('beforeExport', l, { format: t, options: a });
                            let u = await o(l, a);
                            return (await ra('afterExport', l, { format: t, options: a, result: u }), c || ((c = !0), await ra('afterSnap', e)), u);
                        },
                        o = u.then(i);
                    return ((u = o.catch(() => {})), o);
                }
                let f = {
                    url: n,
                    toRaw: () => n,
                    to: (t, e) => d(t, e),
                    toImg: (t) => d('img', t),
                    toSvg: (t) => d('svg', t),
                    toCanvas: (t) => d('canvas', t),
                    toBlob: (t) => d('blob', t),
                    toPng: (t) => d('png', t),
                    toJpg: (t) => d('jpg', t),
                    toWebp: (t) => d('webp', t),
                    download: (t) => d('download', t),
                };
                for (let t of Object.keys(s)) {
                    let e = 'to' + t.charAt(0).toUpperCase() + t.slice(1);
                    f[e] || (f[e] = (e) => d(t, e));
                }
                return f;
            }),
                (rw.toRaw = (t, e) => rw(t, e).then((t) => t.toRaw())),
                (rw.toImg = (t, e) => rw(t, e).then((t) => t.toImg())),
                (rw.toSvg = (t, e) => rw(t, e).then((t) => t.toSvg())),
                (rw.toCanvas = (t, e) => rw(t, e).then((t) => t.toCanvas())),
                (rw.toBlob = (t, e) => rw(t, e).then((t) => t.toBlob())),
                (rw.toPng = (t, e) => rw(t, { ...e, format: 'png' }).then((t) => t.toPng())),
                (rw.toJpg = (t, e) => rw(t, { ...e, format: 'jpeg' }).then((t) => t.toJpg())),
                (rw.toWebp = (t, e) => rw(t, { ...e, format: 'webp' }).then((t) => t.toWebp())),
                (rw.download = (t, e) => rw(t, e).then((t) => t.download())));
        },
    },
]);
