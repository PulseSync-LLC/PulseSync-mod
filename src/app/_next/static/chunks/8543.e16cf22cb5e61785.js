'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8543],
    {
        28543: (e, t, r) => {
            let n;
            r.d(t, { domToBlob: () => eo });
            let a = '[modern-screenshot]',
                o = 'undefined' != typeof window,
                l = o && 'Worker' in window,
                i = o && 'atob' in window;
            o && window;
            let s = o ? window.navigator?.userAgent : '',
                c = s.includes('Chrome'),
                u = s.includes('AppleWebKit') && !c,
                d = s.includes('Firefox'),
                f = (e) => 1 === e.nodeType,
                g = (e) => f(e) && void 0 !== e.style && 'object' != typeof e.className,
                m = (e) => 8 === e.nodeType,
                h = (e) => 'SLOT' === e.tagName,
                w = (e) => e.startsWith('data:');
            function p(e, t) {
                if (e.match(/^[a-z]+:\/\//i)) return e;
                if (o && e.match(/^\/\//)) return window.location.protocol + e;
                if (e.match(/^[a-z]+:/i) || !o) return e;
                let r = y().implementation.createHTMLDocument(),
                    n = r.createElement('base'),
                    a = r.createElement('a');
                return r.head.appendChild(n), r.body.appendChild(a), t && (n.href = t), (a.href = e), a.href;
            }
            function y(e) {
                return (e && f(e) ? e?.ownerDocument : e) ?? window.document;
            }
            let b = 'http://www.w3.org/2000/svg';
            async function S(e, t = 'image/png', r = 1) {
                try {
                    return await new Promise((n, a) => {
                        e.toBlob(
                            (e) => {
                                e ? n(e) : a(Error('Blob is null'));
                            },
                            t,
                            r,
                        );
                    });
                } catch (n) {
                    if (i)
                        return (function (e) {
                            let [t, r] = e.split(','),
                                n = t.match(/data:(.+);/)?.[1] ?? void 0,
                                a = window.atob(r),
                                o = a.length,
                                l = new Uint8Array(o);
                            for (let e = 0; e < o; e += 1) l[e] = a.charCodeAt(e);
                            return new Blob([l], { type: n });
                        })(e.toDataURL(t, r));
                    throw n;
                }
            }
            function E(e, t) {
                return new Promise((r, n) => {
                    let a = new FileReader();
                    (a.onload = () => r(a.result)),
                        (a.onerror = () => n(a.error)),
                        (a.onabort = () => n(Error(`Failed read blob to ${t}`))),
                        'dataUrl' === t ? a.readAsDataURL(e) : 'arrayBuffer' === t && a.readAsArrayBuffer(e);
                });
            }
            let v = (e) => E(e, 'dataUrl');
            function x(e, t) {
                let r = y(t).createElement('img');
                return (r.decoding = 'sync'), (r.loading = 'eager'), (r.src = e), r;
            }
            function N(e, t) {
                return new Promise((r) => {
                    let { timeout: n, ownerDocument: a, onError: o, onWarn: l } = t ?? {},
                        i = 'string' == typeof e ? x(e, y(a)) : e,
                        s = null,
                        c = null;
                    function u() {
                        r(i), s && clearTimeout(s), c?.();
                    }
                    if ((n && (s = setTimeout(u, n)), 'VIDEO' === i.tagName)) {
                        let e = i.currentSrc || i.src;
                        if (!e) return i.poster ? N(i.poster, t).then(r) : u();
                        if (i.readyState >= 2) return u();
                        let n = (t) => {
                            l?.('Failed video load', e, t), o?.(t), u();
                        };
                        (c = () => {
                            i.removeEventListener('loadeddata', u), i.removeEventListener('error', n);
                        }),
                            i.addEventListener('loadeddata', u, { once: !0 }),
                            i.addEventListener('error', n, { once: !0 });
                    } else {
                        let e = 'image' === i.tagName ? i.href.baseVal : i.currentSrc || i.src;
                        if (!e) return u();
                        let t = async () => {
                                if ('IMG' === i.tagName && 'decode' in i)
                                    try {
                                        await i.decode();
                                    } catch (t) {
                                        l?.('Failed to decode image, trying to render anyway', i.dataset.originalSrc || e, t);
                                    }
                                u();
                            },
                            r = (t) => {
                                l?.('Failed image load', i.dataset.originalSrc || e, t), u();
                            };
                        if ('IMG' === i.tagName && i.complete) return t();
                        (c = () => {
                            i.removeEventListener('load', t), i.removeEventListener('error', r);
                        }),
                            i.addEventListener('load', t, { once: !0 }),
                            i.addEventListener('error', r, { once: !0 });
                    }
                });
            }
            async function A(e, t) {
                g(e) &&
                    ('IMG' === e.tagName || 'VIDEO' === e.tagName
                        ? await N(e, t)
                        : await Promise.all(['img', 'video'].flatMap((r) => Array.from(e.querySelectorAll(r)).map((e) => N(e, t)))));
            }
            let C = (function () {
                let e = 0;
                return () => ((e += 1), `u${`0000${((1679616 * Math.random()) | 0).toString(36)}`.slice(-4)}${e}`);
            })();
            function k(e) {
                return e
                    ?.split(',')
                    .map((e) => e.trim().replace(/"|'/g, '').toLowerCase())
                    .filter(Boolean);
            }
            let T = 0;
            async function D(e, t) {
                return e && '__CONTEXT__' in e ? e : $(e, { ...t, autoDestruct: !0 });
            }
            async function $(e, t) {
                let { scale: r = 1, workerUrl: n, workerNumber: i = 1 } = t || {},
                    s = !!t?.debug,
                    c = t?.features ?? !0,
                    u = e.ownerDocument ?? (o ? window.document : void 0),
                    d = e.ownerDocument?.defaultView ?? (o ? window : void 0),
                    g = new Map(),
                    m = {
                        width: 0,
                        height: 0,
                        quality: 1,
                        type: 'image/png',
                        scale: r,
                        backgroundColor: null,
                        style: null,
                        filter: null,
                        maximumCanvasSize: 0,
                        timeout: 3e4,
                        progress: null,
                        debug: s,
                        fetch: {
                            requestInit: { cache: t?.fetch?.bypassingCache ? 'no-cache' : 'force-cache' },
                            placeholderImage: 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
                            bypassingCache: !1,
                            ...t?.fetch,
                        },
                        fetchFn: null,
                        font: {},
                        drawImageInterval: 100,
                        workerUrl: null,
                        workerNumber: i,
                        onCloneEachNode: null,
                        onCloneNode: null,
                        onEmbedNode: null,
                        onCreateForeignObjectSvg: null,
                        includeStyleProperties: null,
                        autoDestruct: !1,
                        ...t,
                        __CONTEXT__: !0,
                        log: (function (e) {
                            let t = `${a}[#${T}]`;
                            return (
                                T++,
                                {
                                    time: (r) => e && console.time(`${t} ${r}`),
                                    timeEnd: (r) => e && console.timeEnd(`${t} ${r}`),
                                    warn: (...t) => e && ((...e) => console.warn(a, ...e))(...t),
                                }
                            );
                        })(s),
                        node: e,
                        ownerDocument: u,
                        ownerWindow: d,
                        dpi: 1 === r ? null : 96 * r,
                        svgStyleElement: I(u),
                        svgDefsElement: u?.createElementNS(b, 'defs'),
                        svgStyles: new Map(),
                        defaultComputedStyles: new Map(),
                        workers: [...Array.from({ length: l && n && i ? i : 0 })]
                            .map(() => {
                                try {
                                    let e = new Worker(n);
                                    return (
                                        (e.onmessage = async (e) => {
                                            let { url: t, result: r } = e.data;
                                            r ? g.get(t)?.resolve?.(r) : g.get(t)?.reject?.(Error(`Error receiving message from worker: ${t}`));
                                        }),
                                        (e.onmessageerror = (e) => {
                                            let { url: t } = e.data;
                                            g.get(t)?.reject?.(Error(`Error receiving message from worker: ${t}`));
                                        }),
                                        e
                                    );
                                } catch (e) {
                                    return m.log.warn('Failed to new Worker', e), null;
                                }
                            })
                            .filter(Boolean),
                        fontFamilies: new Map(),
                        fontCssTexts: new Map(),
                        acceptOfImage: `${[
                            (function (e) {
                                let t = e?.createElement?.('canvas');
                                return t && (t.height = t.width = 1), !!t && 'toDataURL' in t && !!t.toDataURL('image/webp').includes('image/webp');
                            })(u) && 'image/webp',
                            'image/svg+xml',
                            'image/*',
                            '*/*',
                        ]
                            .filter(Boolean)
                            .join(',')};q=0.8`,
                        requests: g,
                        drawImageCount: 0,
                        tasks: [],
                        features: c,
                        isEnable: (e) => ('restoreScrollPosition' === e ? 'boolean' != typeof c && (c[e] ?? !1) : 'boolean' == typeof c ? c : (c[e] ?? !0)),
                        shadowRoots: [],
                    };
                m.log.time('wait until load'), await A(e, { timeout: m.timeout, onWarn: m.log.warn }), m.log.timeEnd('wait until load');
                let { width: h, height: w } = (function (e, t) {
                    let { width: r, height: n } = t;
                    if (f(e) && (!r || !n)) {
                        let t = e.getBoundingClientRect();
                        (r = r || t.width || Number(e.getAttribute('width')) || 0), (n = n || t.height || Number(e.getAttribute('height')) || 0);
                    }
                    return { width: r, height: n };
                })(e, m);
                return (m.width = h), (m.height = w), m;
            }
            function I(e) {
                if (!e) return;
                let t = e.createElement('style'),
                    r = t.ownerDocument.createTextNode(`
.______background-clip--text {
  background-clip: text;
  -webkit-background-clip: text;
}
`);
                return t.appendChild(r), t;
            }
            async function F(e, t) {
                let { log: r, timeout: n, drawImageCount: a, drawImageInterval: o } = t;
                r.time('image to canvas');
                let l = await N(e, { timeout: n, onWarn: t.log.warn }),
                    { canvas: i, context2d: s } = (function (e, t) {
                        let { width: r, height: n, scale: a, backgroundColor: o, maximumCanvasSize: l } = t,
                            i = e.createElement('canvas');
                        (i.width = Math.floor(r * a)),
                            (i.height = Math.floor(n * a)),
                            (i.style.width = `${r}px`),
                            (i.style.height = `${n}px`),
                            l &&
                                (i.width > l || i.height > l) &&
                                (i.width > l && i.height > l
                                    ? i.width > i.height
                                        ? ((i.height *= l / i.width), (i.width = l))
                                        : ((i.width *= l / i.height), (i.height = l))
                                    : i.width > l
                                      ? ((i.height *= l / i.width), (i.width = l))
                                      : ((i.width *= l / i.height), (i.height = l)));
                        let s = i.getContext('2d');
                        return s && o && ((s.fillStyle = o), s.fillRect(0, 0, i.width, i.height)), { canvas: i, context2d: s };
                    })(e.ownerDocument, t),
                    c = () => {
                        try {
                            s?.drawImage(l, 0, 0, i.width, i.height);
                        } catch (e) {
                            t.log.warn('Failed to drawImage', e);
                        }
                    };
                if ((c(), t.isEnable('fixSvgXmlDecode')))
                    for (let e = 0; e < a; e++)
                        await new Promise((t) => {
                            setTimeout(() => {
                                s?.clearRect(0, 0, i.width, i.height), c(), t();
                            }, e + o);
                        });
                return (t.drawImageCount = 0), r.timeEnd('image to canvas'), i;
            }
            function P(e, t) {
                if (e.ownerDocument)
                    try {
                        let t = e.toDataURL();
                        if ('data:,' !== t) return x(t, e.ownerDocument);
                    } catch (e) {
                        t.log.warn('Failed to clone canvas', e);
                    }
                let r = e.cloneNode(!1),
                    n = e.getContext('2d'),
                    a = r.getContext('2d');
                try {
                    n && a && a.putImageData(n.getImageData(0, 0, e.width, e.height), 0, 0);
                } catch (e) {
                    t.log.warn('Failed to clone canvas', e);
                }
                return r;
            }
            async function R(e, t) {
                if (e.ownerDocument && !e.currentSrc && e.poster) return x(e.poster, e.ownerDocument);
                let r = e.cloneNode(!1);
                (r.crossOrigin = 'anonymous'), e.currentSrc && e.currentSrc !== e.src && (r.src = e.currentSrc);
                let n = r.ownerDocument;
                if (n) {
                    let a = !0;
                    if ((await N(r, { onError: () => (a = !1), onWarn: t.log.warn }), !a)) return e.poster ? x(e.poster, e.ownerDocument) : r;
                    (r.currentTime = e.currentTime),
                        await new Promise((e) => {
                            r.addEventListener('seeked', e, { once: !0 });
                        });
                    let o = n.createElement('canvas');
                    (o.width = e.offsetWidth), (o.height = e.offsetHeight);
                    try {
                        let e = o.getContext('2d');
                        e && e.drawImage(r, 0, 0, o.width, o.height);
                    } catch (n) {
                        if ((t.log.warn('Failed to clone video', n), e.poster)) return x(e.poster, e.ownerDocument);
                        return r;
                    }
                    return P(o, t);
                }
                return r;
            }
            let _ = ['width', 'height', '-webkit-text-fill-color'],
                M = ['stroke', 'fill'];
            function B(e, t, r) {
                let n,
                    a,
                    { defaultComputedStyles: o } = r,
                    l = e.nodeName.toLowerCase(),
                    i = 'object' == typeof e.className && 'svg' !== l,
                    s = i ? M.map((t) => [t, e.getAttribute(t)]).filter(([, e]) => null !== e) : [],
                    c = [i && 'svg', l, s.map((e, t) => `${e}=${t}`).join(','), t].filter(Boolean).join(':');
                if (o.has(c)) return o.get(c);
                let u = (function (e) {
                        let t = e.sandbox;
                        if (!t) {
                            let { ownerDocument: r } = e;
                            try {
                                r &&
                                    (((t = r.createElement('iframe')).id = `__SANDBOX__${C()}`),
                                    (t.width = '0'),
                                    (t.height = '0'),
                                    (t.style.visibility = 'hidden'),
                                    (t.style.position = 'fixed'),
                                    r.body.appendChild(t),
                                    (t.srcdoc = '<!DOCTYPE html><meta charset="UTF-8"><title></title><body>'),
                                    (e.sandbox = t));
                            } catch (t) {
                                e.log.warn('Failed to getSandBox', t);
                            }
                        }
                        return t;
                    })(r),
                    d = u?.contentWindow;
                if (!d) return new Map();
                let f = d?.document;
                i
                    ? ((a = (n = f.createElementNS(b, 'svg')).ownerDocument.createElementNS(n.namespaceURI, l)),
                      s.forEach(([e, t]) => {
                          a.setAttributeNS(null, e, t);
                      }),
                      n.appendChild(a))
                    : (n = a = f.createElement(l)),
                    (a.textContent = ' '),
                    f.body.appendChild(n);
                let g = d.getComputedStyle(a, t),
                    m = new Map();
                for (let e = g.length, t = 0; t < e; t++) {
                    let e = g.item(t);
                    _.includes(e) || m.set(e, g.getPropertyValue(e));
                }
                return f.body.removeChild(n), o.set(c, m), m;
            }
            function L(e, t, r) {
                let n = new Map(),
                    a = [],
                    o = new Map();
                if (r) for (let e of r) l(e);
                else for (let t = e.length, r = 0; r < t; r++) l(e.item(r));
                for (let e = a.length, t = 0; t < e; t++) o.get(a[t])?.forEach((e, t) => n.set(t, e));
                function l(r) {
                    let l = e.getPropertyValue(r),
                        i = e.getPropertyPriority(r),
                        s = r.lastIndexOf('-'),
                        c = s > -1 ? r.substring(0, s) : void 0;
                    if (c) {
                        let e = o.get(c);
                        e || ((e = new Map()), o.set(c, e)), e.set(r, [l, i]);
                    }
                    (t.get(r) !== l || i) && (c ? a.push(c) : n.set(r, [l, i]));
                }
                return n;
            }
            let U = ['::before', '::after'],
                j = [
                    '::-webkit-scrollbar',
                    '::-webkit-scrollbar-button',
                    '::-webkit-scrollbar-thumb',
                    '::-webkit-scrollbar-track',
                    '::-webkit-scrollbar-track-piece',
                    '::-webkit-scrollbar-corner',
                    '::-webkit-resizer',
                ],
                W = new Set(['symbol']);
            async function O(e, t, r, n, a) {
                if ((f(r) && ('STYLE' === r.tagName || 'SCRIPT' === r.tagName)) || (n.filter && !n.filter(r))) return;
                W.has(t.nodeName) || W.has(r.nodeName) ? (n.currentParentNodeStyle = void 0) : (n.currentParentNodeStyle = n.currentNodeStyle);
                let o = await q(r, n, !1, a);
                n.isEnable('restoreScrollPosition') &&
                    (function (e, t) {
                        if (!g(e) || !g(t)) return;
                        let { scrollTop: r, scrollLeft: n } = e;
                        if (!r && !n) return;
                        let { transform: a } = t.style,
                            o = new DOMMatrix(a),
                            { a: l, b: i, c: s, d: c } = o;
                        (o.a = 1),
                            (o.b = 0),
                            (o.c = 0),
                            (o.d = 1),
                            o.translateSelf(-n, -r),
                            (o.a = l),
                            (o.b = i),
                            (o.c = s),
                            (o.d = c),
                            (t.style.transform = o.toString());
                    })(e, o),
                    t.appendChild(o);
            }
            async function V(e, t, r, n) {
                let a = e.firstChild;
                f(e) && e.shadowRoot && ((a = e.shadowRoot?.firstChild), r.shadowRoots.push(e.shadowRoot));
                for (let o = a; o; o = o.nextSibling)
                    if (!m(o))
                        if (f(o) && h(o) && 'function' == typeof o.assignedNodes) {
                            let a = o.assignedNodes();
                            for (let o = 0; o < a.length; o++) await O(e, t, a[o], r, n);
                        } else await O(e, t, o, r, n);
            }
            let z = /^[\w-:]+$/;
            async function q(e, t, r = !1, n) {
                let { ownerDocument: a, ownerWindow: o, fontFamilies: l, onCloneEachNode: i } = t;
                if (a && 3 === e.nodeType) return n && /\S/.test(e.data) && n(e.data), a.createTextNode(e.data);
                if (a && o && f(e) && (g(e) || 'object' == typeof e.className)) {
                    let n = await (function (e, t) {
                        if ('CANVAS' === e.tagName) return P(e, t);
                        if ('IFRAME' === e.tagName) {
                            try {
                                if (e?.contentDocument?.body) return q(e.contentDocument.body, t);
                            } catch (e) {
                                t.log.warn('Failed to clone iframe', e);
                            }
                            return e.cloneNode(!1);
                        }
                        if ('IMG' === e.tagName) {
                            let t = e.cloneNode(!1);
                            return e.currentSrc && e.currentSrc !== e.src && ((t.src = e.currentSrc), (t.srcset = '')), 'lazy' === t.loading && (t.loading = 'eager'), t;
                        }
                        return 'VIDEO' === e.tagName ? R(e, t) : e.cloneNode(!1);
                    })(e, t);
                    if (t.isEnable('removeAbnormalAttributes')) {
                        let e = n.getAttributeNames();
                        for (let t = e.length, r = 0; r < t; r++) {
                            let t = e[r];
                            z.test(t) || n.removeAttribute(t);
                        }
                    }
                    let a = (t.currentNodeStyle = (function (e, t, r, n) {
                        let { ownerWindow: a, includeStyleProperties: o, currentParentNodeStyle: l } = n,
                            i = t.style,
                            s = a.getComputedStyle(e),
                            u = B(e, null, n);
                        l?.forEach((e, t) => {
                            u.delete(t);
                        });
                        let d = L(s, u, o);
                        d.delete('transition-property'),
                            d.delete('all'),
                            d.delete('d'),
                            d.delete('content'),
                            r &&
                                (d.delete('margin-top'),
                                d.delete('margin-right'),
                                d.delete('margin-bottom'),
                                d.delete('margin-left'),
                                d.delete('margin-block-start'),
                                d.delete('margin-block-end'),
                                d.delete('margin-inline-start'),
                                d.delete('margin-inline-end'),
                                d.set('box-sizing', ['border-box', ''])),
                            d.get('background-clip')?.[0] === 'text' && t.classList.add('______background-clip--text'),
                            c &&
                                (d.has('font-kerning') || d.set('font-kerning', ['normal', '']),
                                (d.get('overflow-x')?.[0] === 'hidden' || d.get('overflow-y')?.[0] === 'hidden') &&
                                    d.get('text-overflow')?.[0] === 'ellipsis' &&
                                    e.scrollWidth === e.clientWidth &&
                                    d.set('text-overflow', ['clip', '']));
                        for (let e = i.length, t = 0; t < e; t++) i.removeProperty(i.item(t));
                        return (
                            d.forEach(([e, t], r) => {
                                i.setProperty(r, e, t);
                            }),
                            d
                        );
                    })(e, n, r, t));
                    r &&
                        (function (e, t) {
                            let { backgroundColor: r, width: n, height: a, style: o } = t,
                                l = e.style;
                            if (
                                (r && l.setProperty('background-color', r, 'important'),
                                n && l.setProperty('width', `${n}px`, 'important'),
                                a && l.setProperty('height', `${a}px`, 'important'),
                                o)
                            )
                                for (let e in o) l[e] = o[e];
                        })(n, t);
                    let o = !1;
                    if (t.isEnable('copyScrollbar')) {
                        let t = [a.get('overflow-x')?.[0], a.get('overflow-y')?.[0]];
                        o = t.includes('scroll') || ((t.includes('auto') || t.includes('overlay')) && (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth));
                    }
                    let d = a.get('text-transform')?.[0],
                        f = k(a.get('font-family')?.[0]),
                        g = f
                            ? (e) => {
                                  'uppercase' === d
                                      ? (e = e.toUpperCase())
                                      : 'lowercase' === d
                                        ? (e = e.toLowerCase())
                                        : 'capitalize' === d && (e = e[0].toUpperCase() + e.substring(1)),
                                      f.forEach((t) => {
                                          let r = l.get(t);
                                          r || l.set(t, (r = new Set())), e.split('').forEach((e) => r.add(e));
                                      });
                              }
                            : void 0;
                    var s = o;
                    let { ownerWindow: m, svgStyleElement: h, svgStyles: w, currentNodeStyle: p } = t;
                    function u(r) {
                        let a = m.getComputedStyle(e, r),
                            o = a.getPropertyValue('content');
                        if (!o || 'none' === o) return;
                        g?.(o), (o = o.replace(/(')|(")|(counter\(.+\))/g, ''));
                        let l = [C()],
                            i = B(e, r, t);
                        p?.forEach((e, t) => {
                            i.delete(t);
                        });
                        let s = L(a, i, t.includeStyleProperties);
                        s.delete('content'), s.delete('-webkit-locale'), s.get('background-clip')?.[0] === 'text' && n.classList.add('______background-clip--text');
                        let c = [`content: '${o}';`];
                        if (
                            (s.forEach(([e, t], r) => {
                                c.push(`${r}: ${e}${t ? ' !important' : ''};`);
                            }),
                            1 === c.length)
                        )
                            return;
                        try {
                            n.className = [n.className, ...l].join(' ');
                        } catch (e) {
                            t.log.warn('Failed to copyPseudoClass', e);
                            return;
                        }
                        let u = c.join('\n  '),
                            d = w.get(u);
                        d || ((d = []), w.set(u, d)), d.push(`.${l[0]}${r}`);
                    }
                    return (
                        h && m && (U.forEach(u), s && j.forEach(u)),
                        ('TEXTAREA' === e.tagName || 'INPUT' === e.tagName || 'SELECT' === e.tagName) && n.setAttribute('value', e.value),
                        'VIDEO' !== e.tagName && (await V(e, n, t, g)),
                        await i?.(n),
                        n
                    );
                }
                let d = e.cloneNode(!1);
                return await V(e, d, t), await i?.(d), d;
            }
            function G(e, t) {
                let { url: r, requestType: n = 'text', responseType: a = 'text', imageDom: o } = t,
                    l = r,
                    {
                        timeout: i,
                        acceptOfImage: s,
                        requests: c,
                        fetchFn: f,
                        fetch: { requestInit: g, bypassingCache: m, placeholderImage: h },
                        font: w,
                        workers: p,
                        fontFamilies: y,
                    } = e;
                'image' === n && (u || d) && e.drawImageCount++;
                let b = c.get(r);
                if (!b) {
                    m && m instanceof RegExp && m.test(l) && (l += (/\?/.test(l) ? '&' : '?') + new Date().getTime());
                    let t = n.startsWith('font') && w && w.minify,
                        d = new Set();
                    t &&
                        n
                            .split(';')[1]
                            .split(',')
                            .forEach((e) => {
                                y.has(e) && y.get(e).forEach((e) => d.add(e));
                            });
                    let S = t && d.size,
                        E = { url: l, timeout: i, responseType: S ? 'arrayBuffer' : a, headers: 'image' === n ? { accept: s } : void 0, ...g };
                    ((b = { type: n, resolve: void 0, reject: void 0, response: null }).response = (async () => {
                        if (f && 'image' === n) {
                            let e = await f(r);
                            if (e) return e;
                        }
                        if (!u && r.startsWith('http') && p.length)
                            return new Promise((e, t) => {
                                p[c.size & (p.length - 1)].postMessage({ rawUrl: r, ...E }), (b.resolve = e), (b.reject = t);
                            });
                        let { url: e, timeout: t, responseType: a, ...o } = E,
                            l = new AbortController(),
                            i = t ? setTimeout(() => l.abort(), t) : void 0;
                        return fetch(e, { signal: l.signal, ...o })
                            .then((e) => {
                                if (!e.ok) throw Error('Failed fetch, not 2xx response', { cause: e });
                                switch (a) {
                                    case 'arrayBuffer':
                                        return e.arrayBuffer();
                                    case 'dataUrl':
                                        return e.blob().then(v);
                                    default:
                                        return e.text();
                                }
                            })
                            .finally(() => clearTimeout(i));
                    })().catch((t) => {
                        if ((c.delete(r), 'image' === n && h))
                            return e.log.warn('Failed to fetch image base64, trying to use placeholder image', l), 'string' == typeof h ? h : h(o);
                        throw t;
                    })),
                        c.set(r, b);
                }
                return b.response;
            }
            async function H(e, t, r, n) {
                if (!X(e)) return e;
                for (let [a, o] of (function (e, t) {
                    let r = [];
                    return e.replace(Y, (e, n, a) => (r.push([a, p(a, t)]), e)), r.filter(([e]) => !w(e));
                })(e, t))
                    try {
                        let t = await G(r, { url: o, requestType: n ? 'image' : 'text', responseType: 'dataUrl' });
                        e = e.replace(
                            (function (e) {
                                let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
                                return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, 'g');
                            })(a),
                            `$1${t}$3`,
                        );
                    } catch (e) {
                        r.log.warn('Failed to fetch css data url', a, e);
                    }
                return e;
            }
            function X(e) {
                return /url\((['"]?)([^'"]+?)\1\)/.test(e);
            }
            let Y = /url\((['"]?)([^'"]+?)\1\)/g,
                K = ['background-image', 'border-image-source', '-webkit-border-image', '-webkit-mask-image', 'list-style-image'];
            async function Q(e, t) {
                let { ownerDocument: r, svgStyleElement: n, fontFamilies: a, fontCssTexts: o, tasks: l, font: i } = t;
                if (r && n && a.size)
                    if (i && i.cssText) {
                        let e = er(i.cssText, t);
                        n.appendChild(
                            r.createTextNode(`${e}
`),
                        );
                    } else {
                        let e = Array.from(r.styleSheets).filter((e) => {
                            try {
                                return 'cssRules' in e && !!e.cssRules.length;
                            } catch (r) {
                                return t.log.warn(`Error while reading CSS rules from ${e.href}`, r), !1;
                            }
                        });
                        await Promise.all(
                            e.flatMap((e) =>
                                Array.from(e.cssRules).map(async (r, n) => {
                                    if ('CSSImportRule' === r.constructor.name) {
                                        let a = n + 1,
                                            o = r.href,
                                            l = '';
                                        try {
                                            l = await G(t, { url: o, requestType: 'text', responseType: 'text' });
                                        } catch (e) {
                                            t.log.warn(`Error fetch remote css import from ${o}`, e);
                                        }
                                        for (let r of (function (e) {
                                            if (null == e) return [];
                                            let t = [],
                                                r = e.replace(J, '');
                                            for (;;) {
                                                let e = Z.exec(r);
                                                if (!e) break;
                                                t.push(e[0]);
                                            }
                                            r = r.replace(Z, '');
                                            let n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
                                                a = RegExp(
                                                    '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})',
                                                    'gi',
                                                );
                                            for (;;) {
                                                let e = n.exec(r);
                                                if (e) a.lastIndex = n.lastIndex;
                                                else if ((e = a.exec(r))) n.lastIndex = a.lastIndex;
                                                else break;
                                                t.push(e[0]);
                                            }
                                            return t;
                                        })(l.replace(Y, (e, t, r) => e.replace(r, p(r, o)))))
                                            try {
                                                e.insertRule(r, r.startsWith('@import') ? (a += 1) : e.cssRules.length);
                                            } catch (e) {
                                                t.log.warn('Error inserting rule from remote css import', { rule: r, error: e });
                                            }
                                    }
                                }),
                            ),
                        ),
                            e
                                .flatMap((e) => Array.from(e.cssRules))
                                .filter(
                                    (e) =>
                                        'CSSFontFaceRule' === e.constructor.name &&
                                        X(e.style.getPropertyValue('src')) &&
                                        k(e.style.getPropertyValue('font-family'))?.some((e) => a.has(e)),
                                )
                                .forEach((e) => {
                                    let a = o.get(e.cssText);
                                    a
                                        ? n.appendChild(
                                              r.createTextNode(`${a}
`),
                                          )
                                        : l.push(
                                              H(e.cssText, e.parentStyleSheet ? e.parentStyleSheet.href : null, t).then((a) => {
                                                  (a = er(a, t)),
                                                      o.set(e.cssText, a),
                                                      n.appendChild(
                                                          r.createTextNode(`${a}
`),
                                                      );
                                              }),
                                          );
                                });
                    }
            }
            let J = /(\/\*[\s\S]*?\*\/)/g,
                Z = /((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi,
                ee = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
                et = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
            function er(e, t) {
                let { font: r } = t,
                    n = r ? r?.preferredFormat : void 0;
                return n
                    ? e.replace(et, (e) => {
                          for (;;) {
                              let [t, , r] = ee.exec(e) || [];
                              if (!r) return '';
                              if (r === n) return `src: ${t};`;
                          }
                      })
                    : e;
            }
            async function en(e, t) {
                let r = await D(e, t);
                if (f(r.node) && 'object' == typeof r.node.className) return r.node;
                let {
                    ownerDocument: n,
                    log: a,
                    tasks: o,
                    svgStyleElement: l,
                    svgDefsElement: i,
                    svgStyles: s,
                    font: c,
                    progress: m,
                    autoDestruct: h,
                    onCloneNode: p,
                    onEmbedNode: S,
                    onCreateForeignObjectSvg: E,
                } = r;
                a.time('clone node');
                let v = await q(r.node, r, !0);
                if (l && n) {
                    let e = '';
                    s.forEach((t, r) => {
                        e += `${t.join(',\n')} {
  ${r}
}
`;
                    }),
                        l.appendChild(n.createTextNode(e));
                }
                a.timeEnd('clone node'),
                    await p?.(v),
                    !1 !== c && f(v) && (a.time('embed web font'), await Q(v, r), a.timeEnd('embed web font')),
                    a.time('embed node'),
                    (function e(t, r) {
                        var n;
                        let { tasks: a } = r;
                        f(t) &&
                            (('IMG' === t.tagName || 'image' === t.tagName) &&
                                a.push(
                                    ...(function (e, t) {
                                        if ('IMG' === e.tagName) {
                                            let r = e.currentSrc || e.src;
                                            if (!w(r))
                                                return [
                                                    G(t, { url: r, imageDom: e, requestType: 'image', responseType: 'dataUrl' }).then((t) => {
                                                        t && ((e.srcset = ''), (e.dataset.originalSrc = r), (e.src = t || ''));
                                                    }),
                                                ];
                                            (u || d) && t.drawImageCount++;
                                        } else if ('object' == typeof e.className && !w(e.href.baseVal)) {
                                            let r = e.href.baseVal;
                                            return [
                                                G(t, { url: r, imageDom: e, requestType: 'image', responseType: 'dataUrl' }).then((t) => {
                                                    t && ((e.dataset.originalSrc = r), (e.href.baseVal = t || ''));
                                                }),
                                            ];
                                        }
                                        return [];
                                    })(t, r),
                                ),
                            'use' === t.tagName &&
                                a.push(
                                    ...(function (e, t) {
                                        let { ownerDocument: r, svgDefsElement: n } = t,
                                            a = e.getAttribute('href') ?? e.getAttribute('xlink:href');
                                        if (!a) return [];
                                        let [o, l] = a.split('#');
                                        if (l) {
                                            let a = `#${l}`,
                                                i = t.shadowRoots.reduce((e, t) => e ?? t.querySelector(`svg ${a}`), r?.querySelector(`svg ${a}`));
                                            if ((o && e.setAttribute('href', a), n?.querySelector(a))) return [];
                                            if (i) n?.appendChild(i.cloneNode(!0));
                                            else if (o)
                                                return [
                                                    G(t, { url: o, responseType: 'text' }).then((e) => {
                                                        n?.insertAdjacentHTML('beforeend', e);
                                                    }),
                                                ];
                                        }
                                        return [];
                                    })(t, r),
                                )),
                            g(t) &&
                                a.push(
                                    ...((n = t.style),
                                    K.map((e) => {
                                        let t = n.getPropertyValue(e);
                                        return t && 'none' !== t
                                            ? ((u || d) && r.drawImageCount++,
                                              H(t, null, r, !0).then((r) => {
                                                  r && t !== r && n.setProperty(e, r, n.getPropertyPriority(e));
                                              }))
                                            : null;
                                    }).filter(Boolean)),
                                ),
                            t.childNodes.forEach((t) => {
                                e(t, r);
                            });
                    })(v, r);
                let x = o.length,
                    N = 0,
                    A = async () => {
                        for (;;) {
                            let e = o.pop();
                            if (!e) break;
                            try {
                                await e;
                            } catch (e) {
                                r.log.warn('Failed to run task', e);
                            }
                            m?.(++N, x);
                        }
                    };
                m?.(N, x), await Promise.all([...Array.from({ length: 4 })].map(A)), a.timeEnd('embed node'), await S?.(v);
                let C = (function (e, t) {
                    let { width: r, height: n } = t,
                        a = (function (e, t, r) {
                            let n = y(r).createElementNS(b, 'svg');
                            return (
                                n.setAttributeNS(null, 'width', e.toString()),
                                n.setAttributeNS(null, 'height', t.toString()),
                                n.setAttributeNS(null, 'viewBox', `0 0 ${e} ${t}`),
                                n
                            );
                        })(r, n, e.ownerDocument),
                        o = a.ownerDocument.createElementNS(a.namespaceURI, 'foreignObject');
                    return (
                        o.setAttributeNS(null, 'x', '0%'),
                        o.setAttributeNS(null, 'y', '0%'),
                        o.setAttributeNS(null, 'width', '100%'),
                        o.setAttributeNS(null, 'height', '100%'),
                        o.append(e),
                        a.appendChild(o),
                        a
                    );
                })(v, r);
                return (
                    i && C.insertBefore(i, C.children[0]),
                    l && C.insertBefore(l, C.children[0]),
                    h &&
                        (function (e) {
                            if (
                                ((e.ownerDocument = void 0),
                                (e.ownerWindow = void 0),
                                (e.svgStyleElement = void 0),
                                (e.svgDefsElement = void 0),
                                e.svgStyles.clear(),
                                e.defaultComputedStyles.clear(),
                                e.sandbox)
                            ) {
                                try {
                                    e.sandbox.remove();
                                } catch (t) {
                                    e.log.warn('Failed to destroyContext', t);
                                }
                                e.sandbox = void 0;
                            }
                            (e.workers = []), e.fontFamilies.clear(), e.fontCssTexts.clear(), e.requests.clear(), (e.tasks = []), (e.shadowRoots = []);
                        })(r),
                    await E?.(C),
                    C
                );
            }
            async function ea(e, t) {
                var r;
                let n,
                    a = await D(e, t),
                    o = await en(a),
                    l =
                        ((r = a.isEnable('removeControlCharacter')),
                        (n = new XMLSerializer().serializeToString(o)),
                        r && (n = n.replace(/[\u0000-\u0008\v\f\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/gu, '')),
                        `data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`);
                a.autoDestruct || ((a.svgStyleElement = I(a.ownerDocument)), (a.svgDefsElement = a.ownerDocument?.createElementNS(b, 'defs')), a.svgStyles.clear());
                let i = x(l, o.ownerDocument);
                return await F(i, a);
            }
            async function eo(e, t) {
                let r = await D(e, t),
                    { log: a, type: o, quality: l, dpi: i } = r,
                    s = await ea(r);
                a.time('canvas to blob');
                let c = await S(s, o, l);
                if (['image/png', 'image/jpeg'].includes(o) && i) {
                    let e = new Uint8Array(await E(c.slice(0, 33), 'arrayBuffer'));
                    if ('image/png' === o)
                        e = (function (e, t, r = !1) {
                            let a = new Uint8Array(13);
                            (t *= 39.3701),
                                (a[0] = 112),
                                (a[1] = 72),
                                (a[2] = 89),
                                (a[3] = 115),
                                (a[4] = t >>> 24),
                                (a[5] = t >>> 16),
                                (a[6] = t >>> 8),
                                (a[7] = 255 & t),
                                (a[8] = a[4]),
                                (a[9] = a[5]),
                                (a[10] = a[6]),
                                (a[11] = a[7]),
                                (a[12] = 1);
                            let o = (function (e) {
                                    let t = -1;
                                    n ||
                                        (n = (function () {
                                            let e = new Int32Array(256);
                                            for (let t = 0; t < 256; t++) {
                                                let r = t;
                                                for (let e = 0; e < 8; e++) r = 1 & r ? 0xedb88320 ^ (r >>> 1) : r >>> 1;
                                                e[t] = r;
                                            }
                                            return e;
                                        })());
                                    for (let r = 0; r < e.length; r++) t = n[(t ^ e[r]) & 255] ^ (t >>> 8);
                                    return -1 ^ t;
                                })(a),
                                l = new Uint8Array(4);
                            if (((l[0] = o >>> 24), (l[1] = o >>> 16), (l[2] = o >>> 8), (l[3] = 255 & o), r)) {
                                let t = (function (e) {
                                    let t = e.length - 1;
                                    for (let r = t; r >= 4; r--)
                                        if (9 === e[r - 4] && 112 === e[r - 3] && 72 === e[r - 2] && 89 === e[r - 1] && 115 === e[r]) return r - 3;
                                    return 0;
                                })(e);
                                return e.set(a, t), e.set(l, t + 13), e;
                            }
                            {
                                let t = new Uint8Array(4);
                                (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 9);
                                let r = new Uint8Array(54);
                                return r.set(e, 0), r.set(t, 33), r.set(a, 37), r.set(l, 50), r;
                            }
                        })(e, i);
                    else {
                        var u;
                        'image/jpeg' === o && (((u = e)[13] = 1), (u[14] = i >> 8), (u[15] = 255 & i), (u[16] = i >> 8), (u[17] = 255 & i), (e = u));
                    }
                    return a.timeEnd('canvas to blob'), new Blob([e, c.slice(33)], { type: o });
                }
                return a.timeEnd('canvas to blob'), c;
            }
        },
    },
]);
