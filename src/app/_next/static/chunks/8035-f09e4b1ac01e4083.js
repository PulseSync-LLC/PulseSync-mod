'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8035],
    {
        78035: (e, t, n) => {
            let r, o;
            n.r(t),
                n.d(t, {
                    Composite: () => tq,
                    CompositeItem: () => tz,
                    FloatingArrow: () => tZ,
                    FloatingDelayGroup: () => nr,
                    FloatingFocusManager: () => nT,
                    FloatingList: () => tH,
                    FloatingNode: () => t5,
                    FloatingOverlay: () => nS,
                    FloatingPortal: () => nE,
                    FloatingTree: () => t7,
                    arrow: () => e7,
                    autoPlacement: () => e2,
                    autoUpdate: () => eK,
                    computePosition: () => eq,
                    detectOverflow: () => eV,
                    flip: () => e0,
                    getOverflowAncestors: () => ek,
                    hide: () => e4,
                    inline: () => e5,
                    inner: () => n0,
                    limitShift: () => eJ,
                    offset: () => eZ,
                    platform: () => eB,
                    safePolygon: () => n4,
                    shift: () => eQ,
                    size: () => e1,
                    useClick: () => nA,
                    useClientPoint: () => nI,
                    useDelayGroup: () => no,
                    useDelayGroupContext: () => nn,
                    useDismiss: () => nF,
                    useFloating: () => nH,
                    useFloatingNodeId: () => t4,
                    useFloatingParentNodeId: () => t1,
                    useFloatingPortalNode: () => nx,
                    useFloatingTree: () => t2,
                    useFocus: () => nW,
                    useHover: () => ne,
                    useId: () => tG,
                    useInnerOffset: () => n1,
                    useInteractions: () => n_,
                    useListItem: () => tW,
                    useListNavigation: () => nU,
                    useMergeRefs: () => tx,
                    useRole: () => nX,
                    useTransitionStatus: () => nG,
                    useTransitionStyles: () => nZ,
                    useTypeahead: () => nQ,
                });
            var i = n(55178),
                l = n.t(i, 2);
            function u(e) {
                return a(e) ? (e.nodeName || '').toLowerCase() : '#document';
            }
            function c(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
            }
            function a(e) {
                return e instanceof Node || e instanceof c(e).Node;
            }
            function s(e) {
                return e instanceof Element || e instanceof c(e).Element;
            }
            function f(e) {
                return e instanceof HTMLElement || e instanceof c(e).HTMLElement;
            }
            function d(e) {
                return 'undefined' != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof c(e).ShadowRoot);
            }
            function m(e) {
                let t = e.activeElement;
                for (; (null == (n = t) || null == (r = n.shadowRoot) ? void 0 : r.activeElement) != null; ) {
                    var n, r;
                    t = t.shadowRoot.activeElement;
                }
                return t;
            }
            function p(e, t) {
                if (!e || !t) return !1;
                let n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && d(n)) {
                    let n = t;
                    for (; n; ) {
                        if (e === n) return !0;
                        n = n.parentNode || n.host;
                    }
                }
                return !1;
            }
            function v() {
                let e = navigator.userAgentData;
                return null != e && e.platform ? e.platform : navigator.platform;
            }
            function h() {
                let e = navigator.userAgentData;
                return e && Array.isArray(e.brands)
                    ? e.brands
                          .map((e) => {
                              let { brand: t, version: n } = e;
                              return t + '/' + n;
                          })
                          .join(' ')
                    : navigator.userAgent;
            }
            function g(e) {
                return (0 === e.mozInputSource && !!e.isTrusted) || (b() && e.pointerType ? 'click' === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
            }
            function y(e) {
                return (
                    (!b() && 0 === e.width && 0 === e.height) ||
                    (1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && 'mouse' === e.pointerType) ||
                    (e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail)
                );
            }
            function w() {
                return /apple/i.test(navigator.vendor);
            }
            function b() {
                let e = /android/i;
                return e.test(v()) || e.test(h());
            }
            function x(e, t) {
                let n = ['mouse', 'pen'];
                return t || n.push('', void 0), n.includes(e);
            }
            function E(e) {
                return (null == e ? void 0 : e.ownerDocument) || document;
            }
            function R(e, t) {
                return null != t && ('composedPath' in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target));
            }
            function k(e) {
                return 'composedPath' in e ? e.composedPath()[0] : e.target;
            }
            function T(e) {
                return f(e) && e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
            }
            function C(e) {
                e.preventDefault(), e.stopPropagation();
            }
            let S = Math.floor,
                L = ['top', 'right', 'bottom', 'left'],
                A = L.reduce((e, t) => e.concat(t, t + '-start', t + '-end'), []),
                M = Math.min,
                P = Math.max,
                O = Math.round,
                I = Math.floor,
                D = (e) => ({ x: e, y: e }),
                N = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
            function F(e, t) {
                return 'function' == typeof e ? e(t) : e;
            }
            function H(e) {
                return e.split('-')[0];
            }
            function W(e) {
                return e.split('-')[1];
            }
            function B(e) {
                return 'x' === e ? 'y' : 'x';
            }
            function _(e) {
                return 'y' === e ? 'height' : 'width';
            }
            function K(e) {
                let t = e[0];
                return 't' === t || 'b' === t ? 'y' : 'x';
            }
            function V(e, t, n) {
                void 0 === n && (n = !1);
                let r = W(e),
                    o = B(K(e)),
                    i = _(o),
                    l = 'x' === o ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : 'start' === r ? 'bottom' : 'top';
                return t.reference[i] > t.floating[i] && (l = Y(l)), [l, Y(l)];
            }
            function j(e) {
                return e.includes('start') ? e.replace('start', 'end') : e.replace('end', 'start');
            }
            let q = ['left', 'right'],
                z = ['right', 'left'],
                U = ['top', 'bottom'],
                X = ['bottom', 'top'];
            function Y(e) {
                let t = H(e);
                return N[t] + e.slice(t.length);
            }
            function $(e) {
                return 'number' != typeof e ? { top: 0, right: 0, bottom: 0, left: 0, ...e } : { top: e, right: e, bottom: e, left: e };
            }
            function G(e) {
                let { x: t, y: n, width: r, height: o } = e;
                return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
            }
            function Z(e, t, n) {
                let r,
                    { reference: o, floating: i } = e,
                    l = K(t),
                    u = B(K(t)),
                    c = _(u),
                    a = H(t),
                    s = 'y' === l,
                    f = o.x + o.width / 2 - i.width / 2,
                    d = o.y + o.height / 2 - i.height / 2,
                    m = o[c] / 2 - i[c] / 2;
                switch (a) {
                    case 'top':
                        r = { x: f, y: o.y - i.height };
                        break;
                    case 'bottom':
                        r = { x: f, y: o.y + o.height };
                        break;
                    case 'right':
                        r = { x: o.x + o.width, y: d };
                        break;
                    case 'left':
                        r = { x: o.x - i.width, y: d };
                        break;
                    default:
                        r = { x: o.x, y: o.y };
                }
                switch (W(t)) {
                    case 'start':
                        r[u] -= m * (n && s ? -1 : 1);
                        break;
                    case 'end':
                        r[u] += m * (n && s ? -1 : 1);
                }
                return r;
            }
            async function Q(e, t) {
                var n;
                void 0 === t && (t = {});
                let { x: r, y: o, platform: i, rects: l, elements: u, strategy: c } = e,
                    { boundary: a = 'clippingAncestors', rootBoundary: s = 'viewport', elementContext: f = 'floating', altBoundary: d = !1, padding: m = 0 } = F(t, e),
                    p = $(m),
                    v = u[d ? ('floating' === f ? 'reference' : 'floating') : f],
                    h = G(
                        await i.getClippingRect({
                            element:
                                null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n
                                    ? v
                                    : v.contextElement || (await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(u.floating))),
                            boundary: a,
                            rootBoundary: s,
                            strategy: c,
                        }),
                    ),
                    g = 'floating' === f ? { x: r, y: o, width: l.floating.width, height: l.floating.height } : l.reference,
                    y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(u.floating)),
                    w = ((await (null == i.isElement ? void 0 : i.isElement(y))) && (await (null == i.getScale ? void 0 : i.getScale(y)))) || { x: 1, y: 1 },
                    b = G(
                        i.convertOffsetParentRelativeRectToViewportRelativeRect
                            ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: u, rect: g, offsetParent: y, strategy: c })
                            : g,
                    );
                return {
                    top: (h.top - b.top + p.top) / w.y,
                    bottom: (b.bottom - h.bottom + p.bottom) / w.y,
                    left: (h.left - b.left + p.left) / w.x,
                    right: (b.right - h.right + p.right) / w.x,
                };
            }
            let J = async (e, t, n) => {
                let { placement: r = 'bottom', strategy: o = 'absolute', middleware: i = [], platform: l } = n,
                    u = l.detectOverflow ? l : { ...l, detectOverflow: Q },
                    c = await (null == l.isRTL ? void 0 : l.isRTL(t)),
                    a = await l.getElementRects({ reference: e, floating: t, strategy: o }),
                    { x: s, y: f } = Z(a, r, c),
                    d = r,
                    m = 0,
                    p = {};
                for (let n = 0; n < i.length; n++) {
                    let v = i[n];
                    if (!v) continue;
                    let { name: h, fn: g } = v,
                        {
                            x: y,
                            y: w,
                            data: b,
                            reset: x,
                        } = await g({
                            x: s,
                            y: f,
                            initialPlacement: r,
                            placement: d,
                            strategy: o,
                            middlewareData: p,
                            rects: a,
                            platform: u,
                            elements: { reference: e, floating: t },
                        });
                    (s = null != y ? y : s),
                        (f = null != w ? w : f),
                        (p[h] = { ...p[h], ...b }),
                        x &&
                            m < 50 &&
                            (m++,
                            'object' == typeof x &&
                                (x.placement && (d = x.placement),
                                x.rects && (a = !0 === x.rects ? await l.getElementRects({ reference: e, floating: t, strategy: o }) : x.rects),
                                ({ x: s, y: f } = Z(a, d, c))),
                            (n = -1));
                }
                return { x: s, y: f, placement: d, strategy: o, middlewareData: p };
            };
            function ee(e, t) {
                return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
            }
            function et(e) {
                return L.some((t) => e[t] >= 0);
            }
            function en(e) {
                let t = M(...e.map((e) => e.left)),
                    n = M(...e.map((e) => e.top));
                return { x: t, y: n, width: P(...e.map((e) => e.right)) - t, height: P(...e.map((e) => e.bottom)) - n };
            }
            let er = new Set(['left', 'top']);
            async function eo(e, t) {
                let { placement: n, platform: r, elements: o } = e,
                    i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                    l = H(n),
                    u = W(n),
                    c = 'y' === K(n),
                    a = er.has(l) ? -1 : 1,
                    s = i && c ? -1 : 1,
                    f = F(t, e),
                    {
                        mainAxis: d,
                        crossAxis: m,
                        alignmentAxis: p,
                    } = 'number' == typeof f
                        ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
                        : { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
                return u && 'number' == typeof p && (m = 'end' === u ? -1 * p : p), c ? { x: m * s, y: d * a } : { x: d * a, y: m * s };
            }
            function ei() {
                return 'undefined' != typeof window;
            }
            function el(e) {
                return ea(e) ? (e.nodeName || '').toLowerCase() : '#document';
            }
            function eu(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
            }
            function ec(e) {
                var t;
                return null == (t = (ea(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
            }
            function ea(e) {
                return !!ei() && (e instanceof Node || e instanceof eu(e).Node);
            }
            function es(e) {
                return !!ei() && (e instanceof Element || e instanceof eu(e).Element);
            }
            function ef(e) {
                return !!ei() && (e instanceof HTMLElement || e instanceof eu(e).HTMLElement);
            }
            function ed(e) {
                return !!ei() && 'undefined' != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof eu(e).ShadowRoot);
            }
            function em(e) {
                let { overflow: t, overflowX: n, overflowY: r, display: o } = ex(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && 'inline' !== o && 'contents' !== o;
            }
            function ep(e) {
                try {
                    if (e.matches(':popover-open')) return !0;
                } catch (e) {}
                try {
                    return e.matches(':modal');
                } catch (e) {
                    return !1;
                }
            }
            let ev = /transform|translate|scale|rotate|perspective|filter/,
                eh = /paint|layout|strict|content/,
                eg = (e) => !!e && 'none' !== e;
            function ey(e) {
                let t = es(e) ? ex(e) : e;
                return (
                    eg(t.transform) ||
                    eg(t.translate) ||
                    eg(t.scale) ||
                    eg(t.rotate) ||
                    eg(t.perspective) ||
                    (!ew() && (eg(t.backdropFilter) || eg(t.filter))) ||
                    ev.test(t.willChange || '') ||
                    eh.test(t.contain || '')
                );
            }
            function ew() {
                return null == r && (r = 'undefined' != typeof CSS && CSS.supports && CSS.supports('-webkit-backdrop-filter', 'none')), r;
            }
            function eb(e) {
                return /^(html|body|#document)$/.test(el(e));
            }
            function ex(e) {
                return eu(e).getComputedStyle(e);
            }
            function eE(e) {
                return es(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
            }
            function eR(e) {
                if ('html' === el(e)) return e;
                let t = e.assignedSlot || e.parentNode || (ed(e) && e.host) || ec(e);
                return ed(t) ? t.host : t;
            }
            function ek(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let o = (function e(t) {
                        let n = eR(t);
                        return eb(n) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : ef(n) && em(n) ? n : e(n);
                    })(e),
                    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    l = eu(o);
                if (!i) return t.concat(o, ek(o, [], n));
                {
                    let e = eT(l);
                    return t.concat(l, l.visualViewport || [], em(o) ? o : [], e && n ? ek(e) : []);
                }
            }
            function eT(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
            }
            function eC(e) {
                let t = ex(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = ef(e),
                    i = o ? e.offsetWidth : n,
                    l = o ? e.offsetHeight : r,
                    u = O(n) !== i || O(r) !== l;
                return u && ((n = i), (r = l)), { width: n, height: r, $: u };
            }
            function eS(e) {
                return es(e) ? e : e.contextElement;
            }
            function eL(e) {
                let t = eS(e);
                if (!ef(t)) return D(1);
                let n = t.getBoundingClientRect(),
                    { width: r, height: o, $: i } = eC(t),
                    l = (i ? O(n.width) : n.width) / r,
                    u = (i ? O(n.height) : n.height) / o;
                return (l && Number.isFinite(l)) || (l = 1), (u && Number.isFinite(u)) || (u = 1), { x: l, y: u };
            }
            let eA = D(0);
            function eM(e) {
                let t = eu(e);
                return ew() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : eA;
            }
            function eP(e, t, n, r) {
                var o;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    l = eS(e),
                    u = D(1);
                t && (r ? es(r) && (u = eL(r)) : (u = eL(e)));
                let c = (void 0 === (o = n) && (o = !1), r && (!o || r === eu(l)) && o) ? eM(l) : D(0),
                    a = (i.left + c.x) / u.x,
                    s = (i.top + c.y) / u.y,
                    f = i.width / u.x,
                    d = i.height / u.y;
                if (l) {
                    let e = eu(l),
                        t = r && es(r) ? eu(r) : r,
                        n = e,
                        o = eT(n);
                    for (; o && r && t !== n; ) {
                        let e = eL(o),
                            t = o.getBoundingClientRect(),
                            r = ex(o),
                            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                        (a *= e.x), (s *= e.y), (f *= e.x), (d *= e.y), (a += i), (s += l), (o = eT((n = eu(o))));
                    }
                }
                return G({ width: f, height: d, x: a, y: s });
            }
            function eO(e, t) {
                let n = eE(e).scrollLeft;
                return t ? t.left + n : eP(ec(e)).left + n;
            }
            function eI(e, t) {
                let n = e.getBoundingClientRect();
                return { x: n.left + t.scrollLeft - eO(e, n), y: n.top + t.scrollTop };
            }
            function eD(e, t, n) {
                let r;
                if ('viewport' === t)
                    r = (function (e, t) {
                        let n = eu(e),
                            r = ec(e),
                            o = n.visualViewport,
                            i = r.clientWidth,
                            l = r.clientHeight,
                            u = 0,
                            c = 0;
                        if (o) {
                            (i = o.width), (l = o.height);
                            let e = ew();
                            (!e || (e && 'fixed' === t)) && ((u = o.offsetLeft), (c = o.offsetTop));
                        }
                        let a = eO(r);
                        if (a <= 0) {
                            let e = r.ownerDocument,
                                t = e.body,
                                n = getComputedStyle(t),
                                o = ('CSS1Compat' === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) || 0,
                                l = Math.abs(r.clientWidth - t.clientWidth - o);
                            l <= 25 && (i -= l);
                        } else a <= 25 && (i += a);
                        return { width: i, height: l, x: u, y: c };
                    })(e, n);
                else if ('document' === t)
                    r = (function (e) {
                        let t = ec(e),
                            n = eE(e),
                            r = e.ownerDocument.body,
                            o = P(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                            i = P(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                            l = -n.scrollLeft + eO(e),
                            u = -n.scrollTop;
                        return 'rtl' === ex(r).direction && (l += P(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: l, y: u };
                    })(ec(e));
                else if (es(t))
                    r = (function (e, t) {
                        let n = eP(e, !0, 'fixed' === t),
                            r = n.top + e.clientTop,
                            o = n.left + e.clientLeft,
                            i = ef(e) ? eL(e) : D(1),
                            l = e.clientWidth * i.x,
                            u = e.clientHeight * i.y;
                        return { width: l, height: u, x: o * i.x, y: r * i.y };
                    })(t, n);
                else {
                    let n = eM(e);
                    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
                }
                return G(r);
            }
            function eN(e) {
                return 'static' === ex(e).position;
            }
            function eF(e, t) {
                if (!ef(e) || 'fixed' === ex(e).position) return null;
                if (t) return t(e);
                let n = e.offsetParent;
                return ec(e) === n && (n = n.ownerDocument.body), n;
            }
            function eH(e, t) {
                var n;
                let r = eu(e);
                if (ep(e)) return r;
                if (!ef(e)) {
                    let t = eR(e);
                    for (; t && !eb(t); ) {
                        if (es(t) && !eN(t)) return t;
                        t = eR(t);
                    }
                    return r;
                }
                let o = eF(e, t);
                for (; o && ((n = o), /^(table|td|th)$/.test(el(n))) && eN(o); ) o = eF(o, t);
                return o && eb(o) && eN(o) && !ey(o)
                    ? r
                    : o ||
                          (function (e) {
                              let t = eR(e);
                              for (; ef(t) && !eb(t); ) {
                                  if (ey(t)) return t;
                                  if (ep(t)) break;
                                  t = eR(t);
                              }
                              return null;
                          })(e) ||
                          r;
            }
            let eW = async function (e) {
                    let t = this.getOffsetParent || eH,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: (function (e, t, n) {
                            let r = ef(t),
                                o = ec(t),
                                i = 'fixed' === n,
                                l = eP(e, !0, i, t),
                                u = { scrollLeft: 0, scrollTop: 0 },
                                c = D(0);
                            if (r || (!r && !i))
                                if ((('body' !== el(t) || em(o)) && (u = eE(t)), r)) {
                                    let e = eP(t, !0, i, t);
                                    (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
                                } else o && (c.x = eO(o));
                            i && !r && o && (c.x = eO(o));
                            let a = !o || r || i ? D(0) : eI(o, u);
                            return { x: l.left + u.scrollLeft - c.x - a.x, y: l.top + u.scrollTop - c.y - a.y, width: l.width, height: l.height };
                        })(e.reference, await t(e.floating), e.strategy),
                        floating: { x: 0, y: 0, width: r.width, height: r.height },
                    };
                },
                eB = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
                        let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
                            i = 'fixed' === o,
                            l = ec(r),
                            u = !!t && ep(t.floating);
                        if (r === l || (u && i)) return n;
                        let c = { scrollLeft: 0, scrollTop: 0 },
                            a = D(1),
                            s = D(0),
                            f = ef(r);
                        if ((f || (!f && !i)) && (('body' !== el(r) || em(l)) && (c = eE(r)), f)) {
                            let e = eP(r);
                            (a = eL(r)), (s.x = e.x + r.clientLeft), (s.y = e.y + r.clientTop);
                        }
                        let d = !l || f || i ? D(0) : eI(l, c);
                        return {
                            width: n.width * a.x,
                            height: n.height * a.y,
                            x: n.x * a.x - c.scrollLeft * a.x + s.x + d.x,
                            y: n.y * a.y - c.scrollTop * a.y + s.y + d.y,
                        };
                    },
                    getDocumentElement: ec,
                    getClippingRect: function (e) {
                        let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
                            i = [
                                ...('clippingAncestors' === n
                                    ? ep(t)
                                        ? []
                                        : (function (e, t) {
                                              let n = t.get(e);
                                              if (n) return n;
                                              let r = ek(e, [], !1).filter((e) => es(e) && 'body' !== el(e)),
                                                  o = null,
                                                  i = 'fixed' === ex(e).position,
                                                  l = i ? eR(e) : e;
                                              for (; es(l) && !eb(l); ) {
                                                  let t = ex(l),
                                                      n = ey(l);
                                                  n || 'fixed' !== t.position || (o = null),
                                                      (
                                                          i
                                                              ? n || o
                                                              : !(
                                                                    (!n && 'static' === t.position && o && ('absolute' === o.position || 'fixed' === o.position)) ||
                                                                    (em(l) &&
                                                                        !n &&
                                                                        (function e(t, n) {
                                                                            let r = eR(t);
                                                                            return !(r === n || !es(r) || eb(r)) && ('fixed' === ex(r).position || e(r, n));
                                                                        })(e, l))
                                                                )
                                                      )
                                                          ? (o = t)
                                                          : (r = r.filter((e) => e !== l)),
                                                      (l = eR(l));
                                              }
                                              return t.set(e, r), r;
                                          })(t, this._c)
                                    : [].concat(n)),
                                r,
                            ],
                            l = eD(t, i[0], o),
                            u = l.top,
                            c = l.right,
                            a = l.bottom,
                            s = l.left;
                        for (let e = 1; e < i.length; e++) {
                            let n = eD(t, i[e], o);
                            (u = P(n.top, u)), (c = M(n.right, c)), (a = M(n.bottom, a)), (s = P(n.left, s));
                        }
                        return { width: c - s, height: a - u, x: s, y: u };
                    },
                    getOffsetParent: eH,
                    getElementRects: eW,
                    getClientRects: function (e) {
                        return Array.from(e.getClientRects());
                    },
                    getDimensions: function (e) {
                        let { width: t, height: n } = eC(e);
                        return { width: t, height: n };
                    },
                    getScale: eL,
                    isElement: es,
                    isRTL: function (e) {
                        return 'rtl' === ex(e).direction;
                    },
                };
            function e_(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
            }
            function eK(e, t, n, r) {
                let o;
                void 0 === r && (r = {});
                let {
                        ancestorScroll: i = !0,
                        ancestorResize: l = !0,
                        elementResize: u = 'function' == typeof ResizeObserver,
                        layoutShift: c = 'function' == typeof IntersectionObserver,
                        animationFrame: a = !1,
                    } = r,
                    s = eS(e),
                    f = i || l ? [...(s ? ek(s) : []), ...(t ? ek(t) : [])] : [];
                f.forEach((e) => {
                    i && e.addEventListener('scroll', n, { passive: !0 }), l && e.addEventListener('resize', n);
                });
                let d =
                        s && c
                            ? (function (e, t) {
                                  let n,
                                      r = null,
                                      o = ec(e);
                                  function i() {
                                      var e;
                                      clearTimeout(n), null == (e = r) || e.disconnect(), (r = null);
                                  }
                                  return (
                                      !(function l(u, c) {
                                          void 0 === u && (u = !1), void 0 === c && (c = 1), i();
                                          let a = e.getBoundingClientRect(),
                                              { left: s, top: f, width: d, height: m } = a;
                                          if ((u || t(), !d || !m)) return;
                                          let p = I(f),
                                              v = I(o.clientWidth - (s + d)),
                                              h = {
                                                  rootMargin: -p + 'px ' + -v + 'px ' + -I(o.clientHeight - (f + m)) + 'px ' + -I(s) + 'px',
                                                  threshold: P(0, M(1, c)) || 1,
                                              },
                                              g = !0;
                                          function y(t) {
                                              let r = t[0].intersectionRatio;
                                              if (r !== c) {
                                                  if (!g) return l();
                                                  r
                                                      ? l(!1, r)
                                                      : (n = setTimeout(() => {
                                                            l(!1, 1e-7);
                                                        }, 1e3));
                                              }
                                              1 !== r || e_(a, e.getBoundingClientRect()) || l(), (g = !1);
                                          }
                                          try {
                                              r = new IntersectionObserver(y, { ...h, root: o.ownerDocument });
                                          } catch (e) {
                                              r = new IntersectionObserver(y, h);
                                          }
                                          r.observe(e);
                                      })(!0),
                                      i
                                  );
                              })(s, n)
                            : null,
                    m = -1,
                    p = null;
                u &&
                    ((p = new ResizeObserver((e) => {
                        let [r] = e;
                        r &&
                            r.target === s &&
                            p &&
                            t &&
                            (p.unobserve(t),
                            cancelAnimationFrame(m),
                            (m = requestAnimationFrame(() => {
                                var e;
                                null == (e = p) || e.observe(t);
                            }))),
                            n();
                    })),
                    s && !a && p.observe(s),
                    t && p.observe(t));
                let v = a ? eP(e) : null;
                return (
                    a &&
                        (function t() {
                            let r = eP(e);
                            v && !e_(v, r) && n(), (v = r), (o = requestAnimationFrame(t));
                        })(),
                    n(),
                    () => {
                        var e;
                        f.forEach((e) => {
                            i && e.removeEventListener('scroll', n), l && e.removeEventListener('resize', n);
                        }),
                            null == d || d(),
                            null == (e = p) || e.disconnect(),
                            (p = null),
                            a && cancelAnimationFrame(o);
                    }
                );
            }
            let eV = Q,
                ej = (e) => ({
                    name: 'arrow',
                    options: e,
                    async fn(t) {
                        let { x: n, y: r, placement: o, rects: i, platform: l, elements: u, middlewareData: c } = t,
                            { element: a, padding: s = 0 } = F(e, t) || {};
                        if (null == a) return {};
                        let f = $(s),
                            d = { x: n, y: r },
                            m = B(K(o)),
                            p = _(m),
                            v = await l.getDimensions(a),
                            h = 'y' === m,
                            g = h ? 'clientHeight' : 'clientWidth',
                            y = i.reference[p] + i.reference[m] - d[m] - i.floating[p],
                            w = d[m] - i.reference[m],
                            b = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(a)),
                            x = b ? b[g] : 0;
                        (x && (await (null == l.isElement ? void 0 : l.isElement(b)))) || (x = u.floating[g] || i.floating[p]);
                        let E = x / 2 - v[p] / 2 - 1,
                            R = M(f[h ? 'top' : 'left'], E),
                            k = M(f[h ? 'bottom' : 'right'], E),
                            T = x - v[p] - k,
                            C = x / 2 - v[p] / 2 + (y / 2 - w / 2),
                            S = P(R, M(C, T)),
                            L = !c.arrow && null != W(o) && C !== S && i.reference[p] / 2 - (C < R ? R : k) - v[p] / 2 < 0,
                            A = L ? (C < R ? C - R : C - T) : 0;
                        return { [m]: d[m] + A, data: { [m]: S, centerOffset: C - S - A, ...(L && { alignmentOffset: A }) }, reset: L };
                    },
                }),
                eq = (e, t, n) => {
                    let r = new Map(),
                        o = { platform: eB, ...n },
                        i = { ...o.platform, _c: r };
                    return J(e, t, { ...o, platform: i });
                };
            var ez = n(51767),
                eU = 'undefined' != typeof document ? i.useLayoutEffect : function () {};
            function eX(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ('function' == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && 'object' == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--; ) if (!eX(e[r], t[r])) return !1;
                        return !0;
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--; ) {
                        let n = o[r];
                        if (('_owner' !== n || !e.$$typeof) && !eX(e[n], t[n])) return !1;
                    }
                    return !0;
                }
                return e != e && t != t;
            }
            function eY(e) {
                return 'undefined' == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
            }
            function e$(e, t) {
                let n = eY(e);
                return Math.round(t * n) / n;
            }
            function eG(e) {
                let t = i.useRef(e);
                return (
                    eU(() => {
                        t.current = e;
                    }),
                    t
                );
            }
            let eZ = (e, t) => {
                    let n = (function (e) {
                        return (
                            void 0 === e && (e = 0),
                            {
                                name: 'offset',
                                options: e,
                                async fn(t) {
                                    var n, r;
                                    let { x: o, y: i, placement: l, middlewareData: u } = t,
                                        c = await eo(t, e);
                                    return l === (null == (n = u.offset) ? void 0 : n.placement) && null != (r = u.arrow) && r.alignmentOffset
                                        ? {}
                                        : { x: o + c.x, y: i + c.y, data: { ...c, placement: l } };
                                },
                            }
                        );
                    })(e);
                    return { name: n.name, fn: n.fn, options: [e, t] };
                },
                eQ = (e, t) => {
                    let n = (function (e) {
                        return (
                            void 0 === e && (e = {}),
                            {
                                name: 'shift',
                                options: e,
                                async fn(t) {
                                    let { x: n, y: r, placement: o, platform: i } = t,
                                        {
                                            mainAxis: l = !0,
                                            crossAxis: u = !1,
                                            limiter: c = {
                                                fn: (e) => {
                                                    let { x: t, y: n } = e;
                                                    return { x: t, y: n };
                                                },
                                            },
                                            ...a
                                        } = F(e, t),
                                        s = { x: n, y: r },
                                        f = await i.detectOverflow(t, a),
                                        d = K(H(o)),
                                        m = B(d),
                                        p = s[m],
                                        v = s[d];
                                    if (l) {
                                        let e = 'y' === m ? 'top' : 'left',
                                            t = 'y' === m ? 'bottom' : 'right',
                                            n = p + f[e],
                                            r = p - f[t];
                                        p = P(n, M(p, r));
                                    }
                                    if (u) {
                                        let e = 'y' === d ? 'top' : 'left',
                                            t = 'y' === d ? 'bottom' : 'right',
                                            n = v + f[e],
                                            r = v - f[t];
                                        v = P(n, M(v, r));
                                    }
                                    let h = c.fn({ ...t, [m]: p, [d]: v });
                                    return { ...h, data: { x: h.x - n, y: h.y - r, enabled: { [m]: l, [d]: u } } };
                                },
                            }
                        );
                    })(e);
                    return { name: n.name, fn: n.fn, options: [e, t] };
                },
                eJ = (e, t) => ({
                    fn: (function (e) {
                        return (
                            void 0 === e && (e = {}),
                            {
                                options: e,
                                fn(t) {
                                    let { x: n, y: r, placement: o, rects: i, middlewareData: l } = t,
                                        { offset: u = 0, mainAxis: c = !0, crossAxis: a = !0 } = F(e, t),
                                        s = { x: n, y: r },
                                        f = K(o),
                                        d = B(f),
                                        m = s[d],
                                        p = s[f],
                                        v = F(u, t),
                                        h = 'number' == typeof v ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v };
                                    if (c) {
                                        let e = 'y' === d ? 'height' : 'width',
                                            t = i.reference[d] - i.floating[e] + h.mainAxis,
                                            n = i.reference[d] + i.reference[e] - h.mainAxis;
                                        m < t ? (m = t) : m > n && (m = n);
                                    }
                                    if (a) {
                                        var g, y;
                                        let e = 'y' === d ? 'width' : 'height',
                                            t = er.has(H(o)),
                                            n = i.reference[f] - i.floating[e] + ((t && (null == (g = l.offset) ? void 0 : g[f])) || 0) + (t ? 0 : h.crossAxis),
                                            r = i.reference[f] + i.reference[e] + (t ? 0 : (null == (y = l.offset) ? void 0 : y[f]) || 0) - (t ? h.crossAxis : 0);
                                        p < n ? (p = n) : p > r && (p = r);
                                    }
                                    return { [d]: m, [f]: p };
                                },
                            }
                        );
                    })(e).fn,
                    options: [e, t],
                }),
                e0 = (e, t) => {
                    let n = (function (e) {
                        return (
                            void 0 === e && (e = {}),
                            {
                                name: 'flip',
                                options: e,
                                async fn(t) {
                                    var n, r, o, i, l;
                                    let { placement: u, middlewareData: c, rects: a, initialPlacement: s, platform: f, elements: d } = t,
                                        {
                                            mainAxis: m = !0,
                                            crossAxis: p = !0,
                                            fallbackPlacements: v,
                                            fallbackStrategy: h = 'bestFit',
                                            fallbackAxisSideDirection: g = 'none',
                                            flipAlignment: y = !0,
                                            ...w
                                        } = F(e, t);
                                    if (null != (n = c.arrow) && n.alignmentOffset) return {};
                                    let b = H(u),
                                        x = K(s),
                                        E = H(s) === s,
                                        R = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)),
                                        k =
                                            v ||
                                            (E || !y
                                                ? [Y(s)]
                                                : (function (e) {
                                                      let t = Y(e);
                                                      return [j(e), t, j(t)];
                                                  })(s)),
                                        T = 'none' !== g;
                                    !v &&
                                        T &&
                                        k.push(
                                            ...(function (e, t, n, r) {
                                                let o = W(e),
                                                    i = (function (e, t, n) {
                                                        switch (e) {
                                                            case 'top':
                                                            case 'bottom':
                                                                if (n) return t ? z : q;
                                                                return t ? q : z;
                                                            case 'left':
                                                            case 'right':
                                                                return t ? U : X;
                                                            default:
                                                                return [];
                                                        }
                                                    })(H(e), 'start' === n, r);
                                                return o && ((i = i.map((e) => e + '-' + o)), t && (i = i.concat(i.map(j)))), i;
                                            })(s, y, g, R),
                                        );
                                    let C = [s, ...k],
                                        S = await f.detectOverflow(t, w),
                                        L = [],
                                        A = (null == (r = c.flip) ? void 0 : r.overflows) || [];
                                    if ((m && L.push(S[b]), p)) {
                                        let e = V(u, a, R);
                                        L.push(S[e[0]], S[e[1]]);
                                    }
                                    if (((A = [...A, { placement: u, overflows: L }]), !L.every((e) => e <= 0))) {
                                        let e = ((null == (o = c.flip) ? void 0 : o.index) || 0) + 1,
                                            t = C[e];
                                        if (t && ('alignment' !== p || x === K(t) || A.every((e) => K(e.placement) !== x || e.overflows[0] > 0)))
                                            return { data: { index: e, overflows: A }, reset: { placement: t } };
                                        let n =
                                            null == (i = A.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                        if (!n)
                                            switch (h) {
                                                case 'bestFit': {
                                                    let e =
                                                        null ==
                                                        (l = A.filter((e) => {
                                                            if (T) {
                                                                let t = K(e.placement);
                                                                return t === x || 'y' === t;
                                                            }
                                                            return !0;
                                                        })
                                                            .map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)])
                                                            .sort((e, t) => e[1] - t[1])[0])
                                                            ? void 0
                                                            : l[0];
                                                    e && (n = e);
                                                    break;
                                                }
                                                case 'initialPlacement':
                                                    n = s;
                                            }
                                        if (u !== n) return { reset: { placement: n } };
                                    }
                                    return {};
                                },
                            }
                        );
                    })(e);
                    return { name: n.name, fn: n.fn, options: [e, t] };
                },
                e1 = (e, t) => {
                    let n = (function (e) {
                        return (
                            void 0 === e && (e = {}),
                            {
                                name: 'size',
                                options: e,
                                async fn(t) {
                                    var n, r;
                                    let o,
                                        i,
                                        { placement: l, rects: u, platform: c, elements: a } = t,
                                        { apply: s = () => {}, ...f } = F(e, t),
                                        d = await c.detectOverflow(t, f),
                                        m = H(l),
                                        p = W(l),
                                        v = 'y' === K(l),
                                        { width: h, height: g } = u.floating;
                                    'top' === m || 'bottom' === m
                                        ? ((o = m), (i = p === ((await (null == c.isRTL ? void 0 : c.isRTL(a.floating))) ? 'start' : 'end') ? 'left' : 'right'))
                                        : ((i = m), (o = 'end' === p ? 'top' : 'bottom'));
                                    let y = g - d.top - d.bottom,
                                        w = h - d.left - d.right,
                                        b = M(g - d[o], y),
                                        x = M(h - d[i], w),
                                        E = !t.middlewareData.shift,
                                        R = b,
                                        k = x;
                                    if (
                                        (null != (n = t.middlewareData.shift) && n.enabled.x && (k = w),
                                        null != (r = t.middlewareData.shift) && r.enabled.y && (R = y),
                                        E && !p)
                                    ) {
                                        let e = P(d.left, 0),
                                            t = P(d.right, 0),
                                            n = P(d.top, 0),
                                            r = P(d.bottom, 0);
                                        v
                                            ? (k = h - 2 * (0 !== e || 0 !== t ? e + t : P(d.left, d.right)))
                                            : (R = g - 2 * (0 !== n || 0 !== r ? n + r : P(d.top, d.bottom)));
                                    }
                                    await s({ ...t, availableWidth: k, availableHeight: R });
                                    let T = await c.getDimensions(a.floating);
                                    return h !== T.width || g !== T.height ? { reset: { rects: !0 } } : {};
                                },
                            }
                        );
                    })(e);
                    return { name: n.name, fn: n.fn, options: [e, t] };
                },
                e2 = (e, t) => {
                    let n = (function (e) {
                        return (
                            void 0 === e && (e = {}),
                            {
                                name: 'autoPlacement',
                                options: e,
                                async fn(t) {
                                    var n, r, o, i;
                                    let { rects: l, middlewareData: u, placement: c, platform: a, elements: s } = t,
                                        { crossAxis: f = !1, alignment: d, allowedPlacements: m = A, autoAlignment: p = !0, ...v } = F(e, t),
                                        h =
                                            void 0 !== d || m === A
                                                ? ((i = d || null)
                                                      ? [...m.filter((e) => W(e) === i), ...m.filter((e) => W(e) !== i)]
                                                      : m.filter((e) => H(e) === e)
                                                  ).filter((e) => !i || W(e) === i || (!!p && j(e) !== e))
                                                : m,
                                        g = await a.detectOverflow(t, v),
                                        y = (null == (n = u.autoPlacement) ? void 0 : n.index) || 0,
                                        w = h[y];
                                    if (null == w) return {};
                                    let b = V(w, l, await (null == a.isRTL ? void 0 : a.isRTL(s.floating)));
                                    if (c !== w) return { reset: { placement: h[0] } };
                                    let x = [g[H(w)], g[b[0]], g[b[1]]],
                                        E = [...((null == (r = u.autoPlacement) ? void 0 : r.overflows) || []), { placement: w, overflows: x }],
                                        R = h[y + 1];
                                    if (R) return { data: { index: y + 1, overflows: E }, reset: { placement: R } };
                                    let k = E.map((e) => {
                                            let t = W(e.placement);
                                            return [e.placement, t && f ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0], e.overflows];
                                        }).sort((e, t) => e[1] - t[1]),
                                        T = (null == (o = k.filter((e) => e[2].slice(0, W(e[0]) ? 2 : 3).every((e) => e <= 0))[0]) ? void 0 : o[0]) || k[0][0];
                                    return T !== c ? { data: { index: y + 1, overflows: E }, reset: { placement: T } } : {};
                                },
                            }
                        );
                    })(e);
                    return { name: n.name, fn: n.fn, options: [e, t] };
                },
                e4 = (e, t) => {
                    let n = (function (e) {
                        return (
                            void 0 === e && (e = {}),
                            {
                                name: 'hide',
                                options: e,
                                async fn(t) {
                                    let { rects: n, platform: r } = t,
                                        { strategy: o = 'referenceHidden', ...i } = F(e, t);
                                    switch (o) {
                                        case 'referenceHidden': {
                                            let e = ee(await r.detectOverflow(t, { ...i, elementContext: 'reference' }), n.reference);
                                            return { data: { referenceHiddenOffsets: e, referenceHidden: et(e) } };
                                        }
                                        case 'escaped': {
                                            let e = ee(await r.detectOverflow(t, { ...i, altBoundary: !0 }), n.floating);
                                            return { data: { escapedOffsets: e, escaped: et(e) } };
                                        }
                                        default:
                                            return {};
                                    }
                                },
                            }
                        );
                    })(e);
                    return { name: n.name, fn: n.fn, options: [e, t] };
                },
                e5 = (e, t) => {
                    let n = (function (e) {
                        return (
                            void 0 === e && (e = {}),
                            {
                                name: 'inline',
                                options: e,
                                async fn(t) {
                                    let { placement: n, elements: r, rects: o, platform: i, strategy: l } = t,
                                        { padding: u = 2, x: c, y: a } = F(e, t),
                                        s = Array.from((await (null == i.getClientRects ? void 0 : i.getClientRects(r.reference))) || []),
                                        f = (function (e) {
                                            let t = e.slice().sort((e, t) => e.y - t.y),
                                                n = [],
                                                r = null;
                                            for (let e = 0; e < t.length; e++) {
                                                let o = t[e];
                                                !r || o.y - r.y > r.height / 2 ? n.push([o]) : n[n.length - 1].push(o), (r = o);
                                            }
                                            return n.map((e) => G(en(e)));
                                        })(s),
                                        d = G(en(s)),
                                        m = $(u),
                                        p = await i.getElementRects({
                                            reference: {
                                                getBoundingClientRect: function () {
                                                    if (2 === f.length && f[0].left > f[1].right && null != c && null != a)
                                                        return (
                                                            f.find((e) => c > e.left - m.left && c < e.right + m.right && a > e.top - m.top && a < e.bottom + m.bottom) ||
                                                            d
                                                        );
                                                    if (f.length >= 2) {
                                                        if ('y' === K(n)) {
                                                            let e = f[0],
                                                                t = f[f.length - 1],
                                                                r = 'top' === H(n),
                                                                o = e.top,
                                                                i = t.bottom,
                                                                l = r ? e.left : t.left,
                                                                u = r ? e.right : t.right;
                                                            return { top: o, bottom: i, left: l, right: u, width: u - l, height: i - o, x: l, y: o };
                                                        }
                                                        let e = 'left' === H(n),
                                                            t = P(...f.map((e) => e.right)),
                                                            r = M(...f.map((e) => e.left)),
                                                            o = f.filter((n) => (e ? n.left === r : n.right === t)),
                                                            i = o[0].top,
                                                            l = o[o.length - 1].bottom;
                                                        return { top: i, bottom: l, left: r, right: t, width: t - r, height: l - i, x: r, y: i };
                                                    }
                                                    return d;
                                                },
                                            },
                                            floating: r.floating,
                                            strategy: l,
                                        });
                                    return o.reference.x !== p.reference.x ||
                                        o.reference.y !== p.reference.y ||
                                        o.reference.width !== p.reference.width ||
                                        o.reference.height !== p.reference.height
                                        ? { reset: { rects: p } }
                                        : {};
                                },
                            }
                        );
                    })(e);
                    return { name: n.name, fn: n.fn, options: [e, t] };
                },
                e7 = (e, t) => {
                    let n = ((e) => ({
                        name: 'arrow',
                        options: e,
                        fn(t) {
                            let { element: n, padding: r } = 'function' == typeof e ? e(t) : e;
                            return n && {}.hasOwnProperty.call(n, 'current')
                                ? null != n.current
                                    ? ej({ element: n.current, padding: r }).fn(t)
                                    : {}
                                : n
                                  ? ej({ element: n, padding: r }).fn(t)
                                  : {};
                        },
                    }))(e);
                    return { name: n.name, fn: n.fn, options: [e, t] };
                };
            var e8 =
                    'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
                e3 = 'undefined' == typeof Element,
                e9 = e3 ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                e6 =
                    !e3 && Element.prototype.getRootNode
                        ? function (e) {
                              var t;
                              return null == e || null == (t = e.getRootNode) ? void 0 : t.call(e);
                          }
                        : function (e) {
                              return null == e ? void 0 : e.ownerDocument;
                          },
                te = function (e, t) {
                    void 0 === t && (t = !0);
                    var n,
                        r = null == e || null == (n = e.getAttribute) ? void 0 : n.call(e, 'inert');
                    return '' === r || 'true' === r || (t && e && te(e.parentNode));
                },
                tt = function (e) {
                    var t,
                        n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, 'contenteditable');
                    return '' === n || 'true' === n;
                },
                tn = function (e, t, n) {
                    if (te(e)) return [];
                    var r = Array.prototype.slice.apply(e.querySelectorAll(e8));
                    return t && e9.call(e, e8) && r.unshift(e), (r = r.filter(n));
                },
                tr = function (e, t, n) {
                    for (var r = [], o = Array.from(e); o.length; ) {
                        var i = o.shift();
                        if (!te(i, !1))
                            if ('SLOT' === i.tagName) {
                                var l = i.assignedElements(),
                                    u = tr(l.length ? l : i.children, !0, n);
                                n.flatten ? r.push.apply(r, u) : r.push({ scopeParent: i, candidates: u });
                            } else {
                                e9.call(i, e8) && n.filter(i) && (t || !e.includes(i)) && r.push(i);
                                var c = i.shadowRoot || ('function' == typeof n.getShadowRoot && n.getShadowRoot(i)),
                                    a = !te(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
                                if (c && a) {
                                    var s = tr(!0 === c ? i.children : c.children, !0, n);
                                    n.flatten ? r.push.apply(r, s) : r.push({ scopeParent: i, candidates: s });
                                } else o.unshift.apply(o, i.children);
                            }
                    }
                    return r;
                },
                to = function (e) {
                    return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
                },
                ti = function (e) {
                    if (!e) throw Error('No node provided');
                    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || tt(e)) && !to(e) ? 0 : e.tabIndex;
                },
                tl = function (e, t) {
                    var n = ti(e);
                    return n < 0 && t && !to(e) ? 0 : n;
                },
                tu = function (e, t) {
                    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
                },
                tc = function (e) {
                    return 'INPUT' === e.tagName;
                },
                ta = function (e, t) {
                    for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
                },
                ts = function (e) {
                    if (!e.name) return !0;
                    var t,
                        n = e.form || e6(e),
                        r = function (e) {
                            return n.querySelectorAll('input[type="radio"][name="' + e + '"]');
                        };
                    if ('undefined' != typeof window && void 0 !== window.CSS && 'function' == typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
                    else
                        try {
                            t = r(e.name);
                        } catch (e) {
                            return (
                                console.error(
                                    'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
                                    e.message,
                                ),
                                !1
                            );
                        }
                    var o = ta(t, e.form);
                    return !o || o === e;
                },
                tf = function (e) {
                    return tc(e) && 'radio' === e.type && !ts(e);
                },
                td = function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        l,
                        u,
                        c = e && e6(e),
                        a = null == (t = c) ? void 0 : t.host,
                        s = !1;
                    if (c && c !== e)
                        for (
                            s = !!((null != (n = a) && null != (r = n.ownerDocument) && r.contains(a)) || (null != e && null != (o = e.ownerDocument) && o.contains(e)));
                            !s && a;

                        )
                            s = !!(null != (l = a = null == (i = c = e6(a)) ? void 0 : i.host) && null != (u = l.ownerDocument) && u.contains(a));
                    return s;
                },
                tm = function (e) {
                    var t = e.getBoundingClientRect(),
                        n = t.width,
                        r = t.height;
                    return 0 === n && 0 === r;
                },
                tp = function (e, t) {
                    var n = t.displayCheck,
                        r = t.getShadowRoot;
                    if ('full-native' === n && 'checkVisibility' in e)
                        return !e.checkVisibility({ checkOpacity: !1, opacityProperty: !1, contentVisibilityAuto: !0, visibilityProperty: !0, checkVisibilityCSS: !0 });
                    if ('hidden' === getComputedStyle(e).visibility) return !0;
                    var o = e9.call(e, 'details>summary:first-of-type') ? e.parentElement : e;
                    if (e9.call(o, 'details:not([open]) *')) return !0;
                    if (n && 'full' !== n && 'full-native' !== n && 'legacy-full' !== n) {
                        if ('non-zero-area' === n) return tm(e);
                    } else {
                        if ('function' == typeof r) {
                            for (var i = e; e; ) {
                                var l = e.parentElement,
                                    u = e6(e);
                                if (l && !l.shadowRoot && !0 === r(l)) return tm(e);
                                e = e.assignedSlot ? e.assignedSlot : l || u === e.ownerDocument ? l : u.host;
                            }
                            e = i;
                        }
                        if (td(e)) return !e.getClientRects().length;
                        if ('legacy-full' !== n) return !0;
                    }
                    return !1;
                },
                tv = function (e) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                        for (var t = e.parentElement; t; ) {
                            if ('FIELDSET' === t.tagName && t.disabled) {
                                for (var n = 0; n < t.children.length; n++) {
                                    var r = t.children.item(n);
                                    if ('LEGEND' === r.tagName) return !!e9.call(t, 'fieldset[disabled] *') || !r.contains(e);
                                }
                                return !0;
                            }
                            t = t.parentElement;
                        }
                    return !1;
                },
                th = function (e, t) {
                    return !(
                        t.disabled ||
                        te(t) ||
                        (tc(t) && 'hidden' === t.type) ||
                        tp(t, e) ||
                        ('DETAILS' === t.tagName &&
                            Array.prototype.slice.apply(t.children).some(function (e) {
                                return 'SUMMARY' === e.tagName;
                            })) ||
                        tv(t)
                    );
                },
                tg = function (e, t) {
                    return !(tf(t) || 0 > ti(t)) && !!th(e, t);
                },
                ty = function (e) {
                    var t = parseInt(e.getAttribute('tabindex'), 10);
                    return !!isNaN(t) || !!(t >= 0);
                },
                tw = function (e) {
                    var t = [],
                        n = [];
                    return (
                        e.forEach(function (e, r) {
                            var o = !!e.scopeParent,
                                i = o ? e.scopeParent : e,
                                l = tl(i, o),
                                u = o ? tw(e.candidates) : i;
                            0 === l ? (o ? t.push.apply(t, u) : t.push(i)) : n.push({ documentOrder: r, tabIndex: l, item: e, isScope: o, content: u });
                        }),
                        n
                            .sort(tu)
                            .reduce(function (e, t) {
                                return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
                            }, [])
                            .concat(t)
                    );
                },
                tb = function (e, t) {
                    return tw(
                        (t = t || {}).getShadowRoot
                            ? tr([e], t.includeContainer, { filter: tg.bind(null, t), flatten: !1, getShadowRoot: t.getShadowRoot, shadowRootFilter: ty })
                            : tn(e, t.includeContainer, tg.bind(null, t)),
                    );
                };
            function tx(e) {
                return i.useMemo(
                    () =>
                        e.every((e) => null == e)
                            ? null
                            : (t) => {
                                  e.forEach((e) => {
                                      'function' == typeof e ? e(t) : null != e && (e.current = t);
                                  });
                              },
                    e,
                );
            }
            let tE = 'ArrowUp',
                tR = 'ArrowDown',
                tk = 'ArrowLeft',
                tT = 'ArrowRight';
            function tC(e, t, n) {
                return Math.floor(e / t) !== n;
            }
            function tS(e, t) {
                return t < 0 || t >= e.current.length;
            }
            function tL(e, t) {
                return tM(e, { disabledIndices: t });
            }
            function tA(e, t) {
                return tM(e, { decrement: !0, startingIndex: e.current.length, disabledIndices: t });
            }
            function tM(e, t) {
                let { startingIndex: n = -1, decrement: r = !1, disabledIndices: o, amount: i = 1 } = void 0 === t ? {} : t,
                    l = e.current,
                    u = n;
                do {
                    var c, a;
                    u += r ? -i : i;
                } while (
                    u >= 0 &&
                    u <= l.length - 1 &&
                    (o
                        ? o.includes(u)
                        : null == l[u] ||
                          (null == (c = l[u]) ? void 0 : c.hasAttribute('disabled')) ||
                          (null == (a = l[u]) ? void 0 : a.getAttribute('aria-disabled')) === 'true')
                );
                return u;
            }
            function tP(e, t) {
                let { event: n, orientation: r, loop: o, cols: i, disabledIndices: l, minIndex: u, maxIndex: c, prevIndex: a, stopEvent: s = !1 } = t,
                    f = a;
                if (n.key === tE) {
                    if ((s && C(n), -1 === a)) f = c;
                    else if (((f = tM(e, { startingIndex: f, amount: i, decrement: !0, disabledIndices: l })), o && (a - i < u || f < 0))) {
                        let e = a % i,
                            t = c % i,
                            n = c - (t - e);
                        f = t === e ? c : t > e ? n : n - i;
                    }
                    tS(e, f) && (f = a);
                }
                if (
                    (n.key === tR &&
                        (s && C(n),
                        -1 === a
                            ? (f = u)
                            : ((f = tM(e, { startingIndex: a, amount: i, disabledIndices: l })),
                              o && a + i > c && (f = tM(e, { startingIndex: (a % i) - i, amount: i, disabledIndices: l }))),
                        tS(e, f) && (f = a)),
                    'both' === r)
                ) {
                    let t = S(a / i);
                    n.key === tT &&
                        (s && C(n),
                        a % i != i - 1
                            ? ((f = tM(e, { startingIndex: a, disabledIndices: l })),
                              o && tC(f, i, t) && (f = tM(e, { startingIndex: a - (a % i) - 1, disabledIndices: l })))
                            : o && (f = tM(e, { startingIndex: a - (a % i) - 1, disabledIndices: l })),
                        tC(f, i, t) && (f = a)),
                        n.key === tk &&
                            (s && C(n),
                            a % i != 0
                                ? ((f = tM(e, { startingIndex: a, disabledIndices: l, decrement: !0 })),
                                  o && tC(f, i, t) && (f = tM(e, { startingIndex: a + (i - (a % i)), decrement: !0, disabledIndices: l })))
                                : o && (f = tM(e, { startingIndex: a + (i - (a % i)), decrement: !0, disabledIndices: l })),
                            tC(f, i, t) && (f = a));
                    let r = S(c / i) === t;
                    tS(e, f) && (f = o && r ? (n.key === tk ? c : tM(e, { startingIndex: a - (a % i) - 1, disabledIndices: l })) : a);
                }
                return f;
            }
            let tO = 0;
            function tI(e, t) {
                void 0 === t && (t = {});
                let { preventScroll: n = !1, cancelPrevious: r = !0, sync: o = !1 } = t;
                r && cancelAnimationFrame(tO);
                let i = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
                o ? i() : (tO = requestAnimationFrame(i));
            }
            var tD = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function tN(e, t) {
                let n = e.compareDocumentPosition(t);
                return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY
                    ? -1
                    : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS
                      ? 1
                      : 0;
            }
            let tF = i.createContext({ register: () => {}, unregister: () => {}, map: new Map(), elementsRef: { current: [] } });
            function tH(e) {
                let { children: t, elementsRef: n, labelsRef: r } = e,
                    [o, l] = i.useState(() => new Map()),
                    u = i.useCallback((e) => {
                        l((t) => new Map(t).set(e, null));
                    }, []),
                    c = i.useCallback((e) => {
                        l((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
                    }, []);
                return (
                    tD(() => {
                        let e = new Map(o);
                        Array.from(e.keys())
                            .sort(tN)
                            .forEach((t, n) => {
                                e.set(t, n);
                            }),
                            !(function (e, t) {
                                if (e.size !== t.size) return !1;
                                for (let [n, r] of e.entries()) if (r !== t.get(n)) return !1;
                                return !0;
                            })(o, e) && l(e);
                    }, [o]),
                    i.createElement(tF.Provider, { value: i.useMemo(() => ({ register: u, unregister: c, map: o, elementsRef: n, labelsRef: r }), [u, c, o, n, r]) }, t)
                );
            }
            function tW(e) {
                let { label: t } = void 0 === e ? {} : e,
                    [n, r] = i.useState(null),
                    o = i.useRef(null),
                    { register: l, unregister: u, map: c, elementsRef: a, labelsRef: s } = i.useContext(tF),
                    f = i.useCallback(
                        (e) => {
                            if (((o.current = e), null !== n && ((a.current[n] = e), s))) {
                                var r;
                                let o = void 0 !== t;
                                s.current[n] = o ? t : null != (r = null == e ? void 0 : e.textContent) ? r : null;
                            }
                        },
                        [n, a, s, t],
                    );
                return (
                    tD(() => {
                        let e = o.current;
                        if (e)
                            return (
                                l(e),
                                () => {
                                    u(e);
                                }
                            );
                    }, [l, u]),
                    tD(() => {
                        let e = o.current ? c.get(o.current) : null;
                        null != e && r(e);
                    }, [c]),
                    i.useMemo(() => ({ ref: f, index: null == n ? -1 : n }), [n, f])
                );
            }
            function tB(e, t) {
                return 'function' == typeof e ? e(t) : e ? i.cloneElement(e, t) : i.createElement('div', t);
            }
            let t_ = i.createContext({ activeIndex: 0, setActiveIndex: () => {} }),
                tK = [tk, tT],
                tV = [tE, tR],
                tj = [...tK, ...tV],
                tq = i.forwardRef(function (e, t) {
                    let { render: n, orientation: r = 'both', loop: o = !0, cols: l = 1, disabledIndices: u, ...c } = e,
                        [a, s] = i.useState(0),
                        f = i.useRef([]),
                        d = n && 'function' != typeof n ? n.props : {},
                        m = i.useMemo(() => ({ activeIndex: a, setActiveIndex: s }), [a]),
                        p = l > 1,
                        v = {
                            ...c,
                            ...d,
                            ref: t,
                            'aria-orientation': 'both' === r ? void 0 : r,
                            onKeyDown(e) {
                                null == c.onKeyDown || c.onKeyDown(e),
                                    null == d.onKeyDown || d.onKeyDown(e),
                                    (function (e) {
                                        if (!tj.includes(e.key)) return;
                                        let t = tL(f, u),
                                            n = tA(f, u),
                                            i = a;
                                        p && (i = tP(f, { event: e, orientation: r, loop: o, cols: l, disabledIndices: u, minIndex: t, maxIndex: n, prevIndex: a }));
                                        let c = { horizontal: [tT], vertical: [tR], both: [tT, tR] }[r],
                                            d = { horizontal: [tk], vertical: [tE], both: [tk, tE] }[r],
                                            m = p ? tj : { horizontal: tK, vertical: tV, both: tj }[r];
                                        i === a &&
                                            [...c, ...d].includes(e.key) &&
                                            (i =
                                                o && i === n && c.includes(e.key)
                                                    ? t
                                                    : o && i === t && d.includes(e.key)
                                                      ? n
                                                      : tM(f, { startingIndex: i, decrement: d.includes(e.key), disabledIndices: u })),
                                            i === a ||
                                                tS(f, i) ||
                                                (e.stopPropagation(),
                                                m.includes(e.key) && e.preventDefault(),
                                                s(i),
                                                queueMicrotask(() => {
                                                    tI(f.current[i]);
                                                }));
                                    })(e);
                            },
                        };
                    return i.createElement(t_.Provider, { value: m }, i.createElement(tH, { elementsRef: f }, tB(n, v)));
                }),
                tz = i.forwardRef(function (e, t) {
                    let { render: n, ...r } = e,
                        o = n && 'function' != typeof n ? n.props : {},
                        { activeIndex: l, setActiveIndex: u } = i.useContext(t_),
                        { ref: c, index: a } = tW(),
                        s = tx([c, t, o.ref]),
                        f = l === a;
                    return tB(n, {
                        ...r,
                        ...o,
                        ref: s,
                        tabIndex: f ? 0 : -1,
                        'data-active': f ? '' : void 0,
                        onFocus(e) {
                            null == r.onFocus || r.onFocus(e), null == o.onFocus || o.onFocus(e), u(a);
                        },
                    });
                });
            function tU() {
                return (tU = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                      }).apply(this, arguments);
            }
            let tX = !1,
                tY = 0,
                t$ = () => 'floating-ui-' + tY++,
                tG =
                    l['useId'.toString()] ||
                    function () {
                        let [e, t] = i.useState(() => (tX ? t$() : void 0));
                        return (
                            tD(() => {
                                null == e && t(t$());
                            }, []),
                            i.useEffect(() => {
                                tX || (tX = !0);
                            }, []),
                            e
                        );
                    },
                tZ = i.forwardRef(function (e, t) {
                    let {
                            context: {
                                placement: n,
                                elements: { floating: r },
                                middlewareData: { arrow: o },
                            },
                            width: l = 14,
                            height: u = 7,
                            tipRadius: c = 0,
                            strokeWidth: a = 0,
                            staticOffset: s,
                            stroke: f,
                            d,
                            style: { transform: m, ...p } = {},
                            ...v
                        } = e,
                        h = tG();
                    if (!r) return null;
                    let g = (a *= 2) / 2,
                        y = (l / 2) * (-(c / 8) + 1),
                        w = ((u / 2) * c) / 4,
                        [b, x] = n.split('-'),
                        E = eB.isRTL(r),
                        R = !!d,
                        k = 'top' === b || 'bottom' === b,
                        T = s && 'end' === x ? 'bottom' : 'top',
                        C = s && 'end' === x ? 'right' : 'left';
                    s && E && (C = 'end' === x ? 'left' : 'right');
                    let S = (null == o ? void 0 : o.x) != null ? s || o.x : '',
                        L = (null == o ? void 0 : o.y) != null ? s || o.y : '',
                        A = d || 'M0,0 H' + l + (' L' + (l - y)) + ',' + (u - w) + (' Q' + l / 2 + ',' + u + ' ' + y) + ',' + (u - w) + ' Z',
                        M = {
                            top: R ? 'rotate(180deg)' : '',
                            left: R ? 'rotate(90deg)' : 'rotate(-90deg)',
                            bottom: R ? '' : 'rotate(180deg)',
                            right: R ? 'rotate(-90deg)' : 'rotate(90deg)',
                        }[b];
                    return i.createElement(
                        'svg',
                        tU({}, v, {
                            'aria-hidden': !0,
                            ref: t,
                            width: R ? l : l + a,
                            height: l,
                            viewBox: '0 0 ' + l + ' ' + (u > l ? u : l),
                            style: {
                                position: 'absolute',
                                pointerEvents: 'none',
                                [C]: S,
                                [T]: L,
                                [b]: k || R ? '100%' : 'calc(100% - ' + a / 2 + 'px)',
                                transform: '' + M + (null != m ? m : ''),
                                ...p,
                            },
                        }),
                        a > 0 && i.createElement('path', { clipPath: 'url(#' + h + ')', fill: 'none', stroke: f, strokeWidth: a + +!d, d: A }),
                        i.createElement('path', { stroke: a && !d ? v.fill : 'none', d: A }),
                        i.createElement('clipPath', { id: h }, i.createElement('rect', { x: -g, y: g * (R ? -1 : 1), width: l + a, height: l })),
                    );
                });
            function tQ() {
                let e = new Map();
                return {
                    emit(t, n) {
                        var r;
                        null == (r = e.get(t)) || r.forEach((e) => e(n));
                    },
                    on(t, n) {
                        e.set(t, [...(e.get(t) || []), n]);
                    },
                    off(t, n) {
                        var r;
                        e.set(t, (null == (r = e.get(t)) ? void 0 : r.filter((e) => e !== n)) || []);
                    },
                };
            }
            let tJ = i.createContext(null),
                t0 = i.createContext(null),
                t1 = () => {
                    var e;
                    return (null == (e = i.useContext(tJ)) ? void 0 : e.id) || null;
                },
                t2 = () => i.useContext(t0);
            function t4(e) {
                let t = tG(),
                    n = t2(),
                    r = t1(),
                    o = e || r;
                return (
                    tD(() => {
                        let e = { id: t, parentId: o };
                        return (
                            null == n || n.addNode(e),
                            () => {
                                null == n || n.removeNode(e);
                            }
                        );
                    }, [n, t, o]),
                    t
                );
            }
            function t5(e) {
                let { children: t, id: n } = e,
                    r = t1();
                return i.createElement(tJ.Provider, { value: i.useMemo(() => ({ id: n, parentId: r }), [n, r]) }, t);
            }
            function t7(e) {
                let { children: t } = e,
                    n = i.useRef([]),
                    r = i.useCallback((e) => {
                        n.current = [...n.current, e];
                    }, []),
                    o = i.useCallback((e) => {
                        n.current = n.current.filter((t) => t !== e);
                    }, []),
                    l = i.useState(() => tQ())[0];
                return i.createElement(t0.Provider, { value: i.useMemo(() => ({ nodesRef: n, addNode: r, removeNode: o, events: l }), [n, r, o, l]) }, t);
            }
            function t8(e) {
                return 'data-floating-ui-' + e;
            }
            function t3(e) {
                let t = (0, i.useRef)(e);
                return (
                    tD(() => {
                        t.current = e;
                    }),
                    t
                );
            }
            let t9 = t8('safe-polygon');
            function t6(e, t, n) {
                return n && !x(n) ? 0 : 'number' == typeof e ? e : null == e ? void 0 : e[t];
            }
            function ne(e, t) {
                void 0 === t && (t = {});
                let {
                        open: n,
                        onOpenChange: r,
                        dataRef: o,
                        events: l,
                        elements: { domReference: u, floating: c },
                        refs: a,
                    } = e,
                    { enabled: f = !0, delay: d = 0, handleClose: m = null, mouseOnly: v = !1, restMs: h = 0, move: g = !0 } = t,
                    y = t2(),
                    w = t1(),
                    b = t3(m),
                    R = t3(d),
                    k = i.useRef(),
                    T = i.useRef(),
                    C = i.useRef(),
                    S = i.useRef(),
                    L = i.useRef(!0),
                    A = i.useRef(!1),
                    M = i.useRef(() => {}),
                    P = i.useCallback(() => {
                        var e;
                        let t = null == (e = o.current.openEvent) ? void 0 : e.type;
                        return (null == t ? void 0 : t.includes('mouse')) && 'mousedown' !== t;
                    }, [o]);
                i.useEffect(() => {
                    if (f)
                        return (
                            l.on('dismiss', e),
                            () => {
                                l.off('dismiss', e);
                            }
                        );
                    function e() {
                        clearTimeout(T.current), clearTimeout(S.current), (L.current = !0);
                    }
                }, [f, l]),
                    i.useEffect(() => {
                        if (!f || !b.current || !n) return;
                        function e(e) {
                            P() && r(!1, e);
                        }
                        let t = E(c).documentElement;
                        return (
                            t.addEventListener('mouseleave', e),
                            () => {
                                t.removeEventListener('mouseleave', e);
                            }
                        );
                    }, [c, n, r, f, b, o, P]);
                let O = i.useCallback(
                        function (e, t) {
                            void 0 === t && (t = !0);
                            let n = t6(R.current, 'close', k.current);
                            n && !C.current ? (clearTimeout(T.current), (T.current = setTimeout(() => r(!1, e), n))) : t && (clearTimeout(T.current), r(!1, e));
                        },
                        [R, r],
                    ),
                    I = i.useCallback(() => {
                        M.current(), (C.current = void 0);
                    }, []),
                    D = i.useCallback(() => {
                        if (A.current) {
                            let e = E(a.floating.current).body;
                            (e.style.pointerEvents = ''), e.removeAttribute(t9), (A.current = !1);
                        }
                    }, [a]);
                return (
                    i.useEffect(() => {
                        if (f && s(u))
                            return (
                                n && u.addEventListener('mouseleave', a),
                                null == c || c.addEventListener('mouseleave', a),
                                g && u.addEventListener('mousemove', i, { once: !0 }),
                                u.addEventListener('mouseenter', i),
                                u.addEventListener('mouseleave', l),
                                () => {
                                    n && u.removeEventListener('mouseleave', a),
                                        null == c || c.removeEventListener('mouseleave', a),
                                        g && u.removeEventListener('mousemove', i),
                                        u.removeEventListener('mouseenter', i),
                                        u.removeEventListener('mouseleave', l);
                                }
                            );
                        function t() {
                            return !!o.current.openEvent && ['click', 'mousedown'].includes(o.current.openEvent.type);
                        }
                        function i(e) {
                            if ((clearTimeout(T.current), (L.current = !1), (v && !x(k.current)) || (h > 0 && 0 === t6(R.current, 'open')))) return;
                            let t = t6(R.current, 'open', k.current);
                            t
                                ? (T.current = setTimeout(() => {
                                      r(!0, e);
                                  }, t))
                                : r(!0, e);
                        }
                        function l(r) {
                            if (t()) return;
                            M.current();
                            let o = E(c);
                            if ((clearTimeout(S.current), b.current)) {
                                n || clearTimeout(T.current),
                                    (C.current = b.current({
                                        ...e,
                                        tree: y,
                                        x: r.clientX,
                                        y: r.clientY,
                                        onClose() {
                                            D(), I(), O(r);
                                        },
                                    }));
                                let t = C.current;
                                o.addEventListener('mousemove', t),
                                    (M.current = () => {
                                        o.removeEventListener('mousemove', t);
                                    });
                                return;
                            }
                            ('touch' === k.current && p(c, r.relatedTarget)) || O(r);
                        }
                        function a(n) {
                            t() ||
                                null == b.current ||
                                b.current({
                                    ...e,
                                    tree: y,
                                    x: n.clientX,
                                    y: n.clientY,
                                    onClose() {
                                        D(), I(), O(n);
                                    },
                                })(n);
                        }
                    }, [u, c, f, e, v, h, g, O, I, D, r, n, y, R, b, o]),
                    tD(() => {
                        var e, t, r;
                        if (f && n && null != (e = b.current) && e.__options.blockPointerEvents && P()) {
                            let e = E(c).body;
                            if ((e.setAttribute(t9, ''), (e.style.pointerEvents = 'none'), (A.current = !0), s(u) && c)) {
                                let e = null == y || null == (t = y.nodesRef.current.find((e) => e.id === w)) || null == (r = t.context) ? void 0 : r.elements.floating;
                                return (
                                    e && (e.style.pointerEvents = ''),
                                    (u.style.pointerEvents = 'auto'),
                                    (c.style.pointerEvents = 'auto'),
                                    () => {
                                        (u.style.pointerEvents = ''), (c.style.pointerEvents = '');
                                    }
                                );
                            }
                        }
                    }, [f, n, w, c, u, y, b, o, P]),
                    tD(() => {
                        n || ((k.current = void 0), I(), D());
                    }, [n, I, D]),
                    i.useEffect(
                        () => () => {
                            I(), clearTimeout(T.current), clearTimeout(S.current), D();
                        },
                        [f, u, I, D],
                    ),
                    i.useMemo(() => {
                        if (!f) return {};
                        function e(e) {
                            k.current = e.pointerType;
                        }
                        return {
                            reference: {
                                onPointerDown: e,
                                onPointerEnter: e,
                                onMouseMove(e) {
                                    n ||
                                        0 === h ||
                                        (clearTimeout(S.current),
                                        (S.current = setTimeout(() => {
                                            L.current || r(!0, e.nativeEvent);
                                        }, h)));
                                },
                            },
                            floating: {
                                onMouseEnter() {
                                    clearTimeout(T.current);
                                },
                                onMouseLeave(e) {
                                    l.emit('dismiss', { type: 'mouseLeave', data: { returnFocus: !1 } }), O(e.nativeEvent, !1);
                                },
                            },
                        };
                    }, [l, f, h, n, r, O])
                );
            }
            let nt = i.createContext({ delay: 0, initialDelay: 0, timeoutMs: 0, currentId: null, setCurrentId: () => {}, setState: () => {}, isInstantPhase: !1 }),
                nn = () => i.useContext(nt),
                nr = (e) => {
                    let { children: t, delay: n, timeoutMs: r = 0 } = e,
                        [o, l] = i.useReducer((e, t) => ({ ...e, ...t }), { delay: n, timeoutMs: r, initialDelay: n, currentId: null, isInstantPhase: !1 }),
                        u = i.useRef(null),
                        c = i.useCallback((e) => {
                            l({ currentId: e });
                        }, []);
                    return (
                        tD(() => {
                            o.currentId ? (null === u.current ? (u.current = o.currentId) : l({ isInstantPhase: !0 })) : (l({ isInstantPhase: !1 }), (u.current = null));
                        }, [o.currentId]),
                        i.createElement(nt.Provider, { value: i.useMemo(() => ({ ...o, setState: l, setCurrentId: c }), [o, l, c]) }, t)
                    );
                },
                no = (e, t) => {
                    let { open: n, onOpenChange: r } = e,
                        { id: o } = t,
                        { currentId: i, setCurrentId: l, initialDelay: u, setState: c, timeoutMs: a } = nn();
                    tD(() => {
                        i && (c({ delay: { open: 1, close: t6(u, 'close') } }), i !== o && r(!1));
                    }, [o, r, c, i, u]),
                        tD(() => {
                            function e() {
                                r(!1), c({ delay: u, currentId: null });
                            }
                            if (!n && i === o)
                                if (a) {
                                    let t = window.setTimeout(e, a);
                                    return () => {
                                        clearTimeout(t);
                                    };
                                } else e();
                        }, [n, c, i, o, r, u, a]),
                        tD(() => {
                            n && l(o);
                        }, [n, l, o]);
                };
            function ni(e, t) {
                let n = e.filter((e) => {
                        var n;
                        return e.parentId === t && (null == (n = e.context) ? void 0 : n.open);
                    }),
                    r = n;
                for (; r.length; )
                    (r = e.filter((e) => {
                        var t;
                        return null == (t = r)
                            ? void 0
                            : t.some((t) => {
                                  var n;
                                  return e.parentId === t.id && (null == (n = e.context) ? void 0 : n.open);
                              });
                    })),
                        (n = n.concat(r));
                return n;
            }
            let nl = new WeakMap(),
                nu = new WeakSet(),
                nc = {},
                na = 0,
                ns = (e) => e && (e.host || ns(e.parentNode));
            function nf(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let r = E(e[0]).body;
                return (function (e, t, n, r) {
                    let o = 'data-floating-ui-inert',
                        i = r ? 'inert' : n ? 'aria-hidden' : null,
                        l = e
                            .map((e) => {
                                if (t.contains(e)) return e;
                                let n = ns(e);
                                return t.contains(n) ? n : null;
                            })
                            .filter((e) => null != e),
                        u = new Set(),
                        c = new Set(l),
                        a = [];
                    nc[o] || (nc[o] = new WeakMap());
                    let s = nc[o];
                    return (
                        l.forEach(function e(t) {
                            !(!t || u.has(t)) && (u.add(t), t.parentNode && e(t.parentNode));
                        }),
                        (function e(t) {
                            !t ||
                                c.has(t) ||
                                Array.prototype.forEach.call(t.children, (t) => {
                                    if (u.has(t)) e(t);
                                    else {
                                        let e = i ? t.getAttribute(i) : null,
                                            n = null !== e && 'false' !== e,
                                            r = (nl.get(t) || 0) + 1,
                                            l = (s.get(t) || 0) + 1;
                                        nl.set(t, r),
                                            s.set(t, l),
                                            a.push(t),
                                            1 === r && n && nu.add(t),
                                            1 === l && t.setAttribute(o, ''),
                                            !n && i && t.setAttribute(i, 'true');
                                    }
                                });
                        })(t),
                        u.clear(),
                        na++,
                        () => {
                            a.forEach((e) => {
                                let t = (nl.get(e) || 0) - 1,
                                    n = (s.get(e) || 0) - 1;
                                nl.set(e, t), s.set(e, n), t || (!nu.has(e) && i && e.removeAttribute(i), nu.delete(e)), n || e.removeAttribute(o);
                            }),
                                --na || ((nl = new WeakMap()), (nl = new WeakMap()), (nu = new WeakSet()), (nc = {}));
                        }
                    );
                })(e.concat(Array.from(r.querySelectorAll('[aria-live]'))), r, t, n);
            }
            let nd = () => ({
                getShadowRoot: !0,
                displayCheck: 'function' == typeof ResizeObserver && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none',
            });
            function nm(e, t) {
                let n = tb(e, nd());
                'prev' === t && n.reverse();
                let r = n.indexOf(m(E(e)));
                return n.slice(r + 1)[0];
            }
            function np() {
                return nm(document.body, 'next');
            }
            function nv() {
                return nm(document.body, 'prev');
            }
            function nh(e, t) {
                let n = t || e.currentTarget,
                    r = e.relatedTarget;
                return !r || !p(n, r);
            }
            let ng = {
                border: 0,
                clip: 'rect(0 0 0 0)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'fixed',
                whiteSpace: 'nowrap',
                width: '1px',
                top: 0,
                left: 0,
            };
            function ny(e) {
                'Tab' === e.key && (e.target, clearTimeout(o));
            }
            let nw = i.forwardRef(function (e, t) {
                    let [n, r] = i.useState();
                    tD(
                        () => (
                            w() && r('button'),
                            document.addEventListener('keydown', ny),
                            () => {
                                document.removeEventListener('keydown', ny);
                            }
                        ),
                        [],
                    );
                    let o = { ref: t, tabIndex: 0, role: n, 'aria-hidden': !n || void 0, [t8('focus-guard')]: '', style: ng };
                    return i.createElement('span', tU({}, e, o));
                }),
                nb = i.createContext(null);
            function nx(e) {
                let { id: t, root: n } = void 0 === e ? {} : e,
                    [r, o] = i.useState(null),
                    l = tG(),
                    u = nR(),
                    c = i.useMemo(() => ({ id: t, root: n, portalContext: u, uniqueId: l }), [t, n, u, l]),
                    a = i.useRef();
                return (
                    tD(
                        () => () => {
                            null == r || r.remove();
                        },
                        [r, c],
                    ),
                    tD(() => {
                        if (a.current === c) return;
                        a.current = c;
                        let { id: e, root: t, portalContext: n, uniqueId: r } = c,
                            i = e ? document.getElementById(e) : null,
                            l = t8('portal');
                        if (i) {
                            let e = document.createElement('div');
                            (e.id = r), e.setAttribute(l, ''), i.appendChild(e), o(e);
                        } else {
                            let i = t || (null == n ? void 0 : n.portalNode);
                            i && !s(i) && (i = i.current), (i = i || document.body);
                            let u = null;
                            e && (((u = document.createElement('div')).id = e), i.appendChild(u));
                            let c = document.createElement('div');
                            (c.id = r), c.setAttribute(l, ''), (i = u || i).appendChild(c), o(c);
                        }
                    }, [c]),
                    r
                );
            }
            function nE(e) {
                let { children: t, id: n, root: r = null, preserveTabOrder: o = !0 } = e,
                    l = nx({ id: n, root: r }),
                    [u, c] = i.useState(null),
                    a = i.useRef(null),
                    s = i.useRef(null),
                    f = i.useRef(null),
                    d = i.useRef(null),
                    m = !!u && !u.modal && u.open && o && !!(r || l);
                return (
                    i.useEffect(() => {
                        if (l && o && (null == u || !u.modal))
                            return (
                                l.addEventListener('focusin', e, !0),
                                l.addEventListener('focusout', e, !0),
                                () => {
                                    l.removeEventListener('focusin', e, !0), l.removeEventListener('focusout', e, !0);
                                }
                            );
                        function e(e) {
                            l &&
                                nh(e) &&
                                ('focusin' === e.type
                                    ? function (e) {
                                          e.querySelectorAll('[data-tabindex]').forEach((e) => {
                                              let t = e.dataset.tabindex;
                                              delete e.dataset.tabindex, t ? e.setAttribute('tabindex', t) : e.removeAttribute('tabindex');
                                          });
                                      }
                                    : function (e) {
                                          tb(e, nd()).forEach((e) => {
                                              (e.dataset.tabindex = e.getAttribute('tabindex') || ''), e.setAttribute('tabindex', '-1');
                                          });
                                      })(l);
                        }
                    }, [l, o, null == u ? void 0 : u.modal]),
                    i.createElement(
                        nb.Provider,
                        {
                            value: i.useMemo(
                                () => ({
                                    preserveTabOrder: o,
                                    beforeOutsideRef: a,
                                    afterOutsideRef: s,
                                    beforeInsideRef: f,
                                    afterInsideRef: d,
                                    portalNode: l,
                                    setFocusManagerState: c,
                                }),
                                [o, l],
                            ),
                        },
                        m &&
                            l &&
                            i.createElement(nw, {
                                'data-type': 'outside',
                                ref: a,
                                onFocus: (e) => {
                                    if (nh(e, l)) {
                                        var t;
                                        null == (t = f.current) || t.focus();
                                    } else {
                                        let e = nv() || (null == u ? void 0 : u.refs.domReference.current);
                                        null == e || e.focus();
                                    }
                                },
                            }),
                        m && l && i.createElement('span', { 'aria-owns': l.id, style: ng }),
                        l && (0, ez.createPortal)(t, l),
                        m &&
                            l &&
                            i.createElement(nw, {
                                'data-type': 'outside',
                                ref: s,
                                onFocus: (e) => {
                                    if (nh(e, l)) {
                                        var t;
                                        null == (t = d.current) || t.focus();
                                    } else {
                                        let t = np() || (null == u ? void 0 : u.refs.domReference.current);
                                        null == t || t.focus(), (null == u ? void 0 : u.closeOnFocusOut) && (null == u || u.onOpenChange(!1, e.nativeEvent));
                                    }
                                },
                            }),
                    )
                );
            }
            let nR = () => i.useContext(nb),
                nk = i.forwardRef(function (e, t) {
                    return i.createElement('button', tU({}, e, { type: 'button', ref: t, tabIndex: -1, style: ng }));
                });
            function nT(e) {
                let {
                        context: t,
                        children: n,
                        disabled: r = !1,
                        order: o = ['content'],
                        guards: l = !0,
                        initialFocus: u = 0,
                        returnFocus: c = !0,
                        modal: a = !0,
                        visuallyHiddenDismiss: s = !1,
                        closeOnFocusOut: d = !0,
                    } = e,
                    {
                        open: v,
                        refs: h,
                        nodeId: g,
                        onOpenChange: y,
                        events: w,
                        dataRef: b,
                        elements: { domReference: x, floating: R },
                    } = t,
                    S = 'number' == typeof u && u < 0,
                    L = (null == x ? void 0 : x.getAttribute('role')) === 'combobox' && T(x) && S,
                    A = !L && a,
                    M = !('undefined' != typeof HTMLElement && 'inert' in HTMLElement.prototype) || l,
                    P = t3(o),
                    O = t3(u),
                    I = t3(c),
                    D = t2(),
                    N = nR(),
                    F = i.useRef(null),
                    H = i.useRef(null),
                    W = i.useRef(!1),
                    B = i.useRef(null),
                    _ = i.useRef(!1),
                    K = null != N,
                    V = i.useCallback(
                        function (e) {
                            return void 0 === e && (e = R), e ? tb(e, nd()) : [];
                        },
                        [R],
                    ),
                    j = i.useCallback(
                        (e) => {
                            let t = V(e);
                            return P.current
                                .map((e) => (x && 'reference' === e ? x : R && 'floating' === e ? R : t))
                                .filter(Boolean)
                                .flat();
                        },
                        [x, R, P, V],
                    );
                function q(e) {
                    return !r && s && A
                        ? i.createElement(nk, { ref: 'start' === e ? F : H, onClick: (e) => y(!1, e.nativeEvent) }, 'string' == typeof s ? s : 'Dismiss')
                        : null;
                }
                i.useEffect(() => {
                    if (r || !A) return;
                    function e(e) {
                        if ('Tab' === e.key) {
                            p(R, m(E(R))) && 0 === V().length && !L && C(e);
                            let t = j(),
                                n = k(e);
                            'reference' === P.current[0] && n === x && (C(e), e.shiftKey ? tI(t[t.length - 1]) : tI(t[1])),
                                'floating' === P.current[1] && n === R && e.shiftKey && (C(e), tI(t[0]));
                        }
                    }
                    let t = E(R);
                    return (
                        t.addEventListener('keydown', e),
                        () => {
                            t.removeEventListener('keydown', e);
                        }
                    );
                }, [r, x, R, A, P, h, L, V, j]),
                    i.useEffect(() => {
                        if (!r && d && R && f(x))
                            return (
                                x.addEventListener('focusout', t),
                                x.addEventListener('pointerdown', e),
                                A || R.addEventListener('focusout', t),
                                () => {
                                    x.removeEventListener('focusout', t), x.removeEventListener('pointerdown', e), A || R.removeEventListener('focusout', t);
                                }
                            );
                        function e() {
                            (_.current = !0),
                                setTimeout(() => {
                                    _.current = !1;
                                });
                        }
                        function t(e) {
                            let t = e.relatedTarget;
                            queueMicrotask(() => {
                                let n = !(
                                    p(x, t) ||
                                    p(R, t) ||
                                    p(t, R) ||
                                    p(null == N ? void 0 : N.portalNode, t) ||
                                    (null != t && t.hasAttribute(t8('focus-guard'))) ||
                                    (D &&
                                        (ni(D.nodesRef.current, g).find((e) => {
                                            var n, r;
                                            return (
                                                p(null == (n = e.context) ? void 0 : n.elements.floating, t) ||
                                                p(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                                            );
                                        }) ||
                                            (function (e, t) {
                                                var n;
                                                let r = [],
                                                    o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
                                                for (; o; ) {
                                                    let t = e.find((e) => e.id === o);
                                                    (o = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
                                                }
                                                return r;
                                            })(D.nodesRef.current, g).find((e) => {
                                                var n, r;
                                                return (
                                                    (null == (n = e.context) ? void 0 : n.elements.floating) === t ||
                                                    (null == (r = e.context) ? void 0 : r.elements.domReference) === t
                                                );
                                            })))
                                );
                                t && n && !_.current && t !== B.current && ((W.current = !0), y(!1, e));
                            });
                        }
                    }, [r, x, R, A, g, D, N, y, d]),
                    i.useEffect(() => {
                        var e;
                        if (r) return;
                        let t = Array.from((null == N || null == (e = N.portalNode) ? void 0 : e.querySelectorAll('[' + t8('portal') + ']')) || []);
                        if (R) {
                            let e = [R, ...t, F.current, H.current, P.current.includes('reference') || L ? x : null].filter((e) => null != e),
                                n = a || L ? nf(e, M, !M) : nf(e);
                            return () => {
                                n();
                            };
                        }
                    }, [r, x, R, a, P, N, L, M]),
                    tD(() => {
                        if (r || !R) return;
                        let e = m(E(R));
                        queueMicrotask(() => {
                            let t = j(R),
                                n = O.current,
                                r = ('number' == typeof n ? t[n] : n.current) || R,
                                o = p(R, e);
                            S || o || !v || tI(r, { preventScroll: r === R });
                        });
                    }, [r, v, R, S, j, O]),
                    tD(() => {
                        if (r || !R) return;
                        let e = !1,
                            t = E(R),
                            n = m(t),
                            o = b.current;
                        function i(t) {
                            if (
                                ('escapeKey' === t.type && h.domReference.current && (B.current = h.domReference.current),
                                ['referencePress', 'escapeKey'].includes(t.type))
                            )
                                return;
                            let n = t.data.returnFocus;
                            'object' == typeof n ? ((W.current = !1), (e = n.preventScroll)) : (W.current = !n);
                        }
                        return (
                            (B.current = n),
                            w.on('dismiss', i),
                            () => {
                                w.off('dismiss', i);
                                let n = m(t);
                                (p(R, n) ||
                                    (D &&
                                        ni(D.nodesRef.current, g).some((e) => {
                                            var t;
                                            return p(null == (t = e.context) ? void 0 : t.elements.floating, n);
                                        })) ||
                                    (o.openEvent && ['click', 'mousedown'].includes(o.openEvent.type))) &&
                                    h.domReference.current &&
                                    (B.current = h.domReference.current),
                                    I.current && f(B.current) && !W.current && tI(B.current, { cancelPrevious: !1, preventScroll: e });
                            }
                        );
                    }, [r, R, I, b, h, w, D, g]),
                    tD(() => {
                        if (!r && N)
                            return (
                                N.setFocusManagerState({ modal: A, closeOnFocusOut: d, open: v, onOpenChange: y, refs: h }),
                                () => {
                                    N.setFocusManagerState(null);
                                }
                            );
                    }, [r, N, A, v, y, h, d]),
                    tD(() => {
                        if (r || !R || 'function' != typeof MutationObserver || S) return;
                        let e = () => {
                            let e = R.getAttribute('tabindex');
                            P.current.includes('floating') || (m(E(R)) !== h.domReference.current && 0 === V().length)
                                ? '0' !== e && R.setAttribute('tabindex', '0')
                                : '-1' !== e && R.setAttribute('tabindex', '-1');
                        };
                        e();
                        let t = new MutationObserver(e);
                        return (
                            t.observe(R, { childList: !0, subtree: !0, attributes: !0 }),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [r, R, h, P, V, S]);
                let z = !r && M && (K || A);
                return i.createElement(
                    i.Fragment,
                    null,
                    z &&
                        i.createElement(nw, {
                            'data-type': 'inside',
                            ref: null == N ? void 0 : N.beforeInsideRef,
                            onFocus: (e) => {
                                if (A) {
                                    let e = j();
                                    tI('reference' === o[0] ? e[0] : e[e.length - 1]);
                                } else if (null != N && N.preserveTabOrder && N.portalNode)
                                    if (((W.current = !1), nh(e, N.portalNode))) {
                                        let e = np() || x;
                                        null == e || e.focus();
                                    } else {
                                        var t;
                                        null == (t = N.beforeOutsideRef.current) || t.focus();
                                    }
                            },
                        }),
                    !L && q('start'),
                    n,
                    q('end'),
                    z &&
                        i.createElement(nw, {
                            'data-type': 'inside',
                            ref: null == N ? void 0 : N.afterInsideRef,
                            onFocus: (e) => {
                                if (A) tI(j()[0]);
                                else if (null != N && N.preserveTabOrder && N.portalNode)
                                    if ((d && (W.current = !0), nh(e, N.portalNode))) {
                                        let e = nv() || x;
                                        null == e || e.focus();
                                    } else {
                                        var t;
                                        null == (t = N.afterOutsideRef.current) || t.focus();
                                    }
                            },
                        }),
                );
            }
            let nC = new Set(),
                nS = i.forwardRef(function (e, t) {
                    let { lockScroll: n = !1, ...r } = e,
                        o = tG();
                    return (
                        tD(() => {
                            if (!n) return;
                            nC.add(o);
                            let e = /iP(hone|ad|od)|iOS/.test(v()),
                                t = document.body.style,
                                r =
                                    Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft
                                        ? 'paddingLeft'
                                        : 'paddingRight',
                                i = window.innerWidth - document.documentElement.clientWidth,
                                l = t.left ? parseFloat(t.left) : window.pageXOffset,
                                u = t.top ? parseFloat(t.top) : window.pageYOffset;
                            if (((t.overflow = 'hidden'), i && (t[r] = i + 'px'), e)) {
                                var c, a;
                                let e = (null == (c = window.visualViewport) ? void 0 : c.offsetLeft) || 0;
                                Object.assign(t, {
                                    position: 'fixed',
                                    top: -(u - Math.floor((null == (a = window.visualViewport) ? void 0 : a.offsetTop) || 0)) + 'px',
                                    left: -(l - Math.floor(e)) + 'px',
                                    right: '0',
                                });
                            }
                            return () => {
                                nC.delete(o),
                                    0 === nC.size &&
                                        (Object.assign(t, { overflow: '', [r]: '' }),
                                        e && (Object.assign(t, { position: '', top: '', left: '', right: '' }), window.scrollTo(l, u)));
                            };
                        }, [o, n]),
                        i.createElement('div', tU({ ref: t }, r, { style: { position: 'fixed', overflow: 'auto', top: 0, right: 0, bottom: 0, left: 0, ...r.style } }))
                    );
                });
            function nL(e) {
                return f(e.target) && 'BUTTON' === e.target.tagName;
            }
            function nA(e, t) {
                void 0 === t && (t = {});
                let {
                        open: n,
                        onOpenChange: r,
                        dataRef: o,
                        elements: { domReference: l },
                    } = e,
                    { enabled: u = !0, event: c = 'click', toggle: a = !0, ignoreMouse: s = !1, keyboardHandlers: f = !0 } = t,
                    d = i.useRef(),
                    m = i.useRef(!1);
                return i.useMemo(
                    () =>
                        u
                            ? {
                                  reference: {
                                      onPointerDown(e) {
                                          d.current = e.pointerType;
                                      },
                                      onMouseDown(e) {
                                          0 !== e.button ||
                                              (x(d.current, !0) && s) ||
                                              ('click' !== c &&
                                                  (n && a && (!o.current.openEvent || 'mousedown' === o.current.openEvent.type)
                                                      ? r(!1, e.nativeEvent)
                                                      : (e.preventDefault(), r(!0, e.nativeEvent))));
                                      },
                                      onClick(e) {
                                          if ('mousedown' === c && d.current) {
                                              d.current = void 0;
                                              return;
                                          }
                                          (x(d.current, !0) && s) ||
                                              (n && a && (!o.current.openEvent || 'click' === o.current.openEvent.type) ? r(!1, e.nativeEvent) : r(!0, e.nativeEvent));
                                      },
                                      onKeyDown(e) {
                                          (d.current = void 0),
                                              e.defaultPrevented ||
                                                  !f ||
                                                  nL(e) ||
                                                  (' ' !== e.key || T(l) || (e.preventDefault(), (m.current = !0)),
                                                  'Enter' === e.key && (n && a ? r(!1, e.nativeEvent) : r(!0, e.nativeEvent)));
                                      },
                                      onKeyUp(e) {
                                          !(e.defaultPrevented || !f || nL(e) || T(l)) &&
                                              ' ' === e.key &&
                                              m.current &&
                                              ((m.current = !1), n && a ? r(!1, e.nativeEvent) : r(!0, e.nativeEvent));
                                      },
                                  },
                              }
                            : {},
                    [u, o, c, s, f, l, a, n, r],
                );
            }
            let nM = l['useInsertionEffect'.toString()] || ((e) => e());
            function nP(e) {
                let t = i.useRef(() => {});
                return (
                    nM(() => {
                        t.current = e;
                    }),
                    i.useCallback(function () {
                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return null == t.current ? void 0 : t.current(...n);
                    }, [])
                );
            }
            function nO(e) {
                return null != e && null != e.clientX;
            }
            function nI(e, t) {
                void 0 === t && (t = {});
                let {
                        open: n,
                        refs: r,
                        dataRef: o,
                        elements: { floating: l },
                    } = e,
                    { enabled: u = !0, axis: a = 'both', x: s = null, y: f = null } = t,
                    d = i.useRef(!1),
                    m = i.useRef(null),
                    [v, h] = i.useState(),
                    [g, y] = i.useState([]),
                    w = nP((e, t) => {
                        if (!d.current && (!o.current.openEvent || nO(o.current.openEvent))) {
                            var n, i;
                            let l, u, c;
                            r.setPositionReference(
                                ((n = r.domReference),
                                (i = { x: e, y: t, axis: a, dataRef: o, pointerType: v }),
                                (l = null),
                                (u = null),
                                (c = !1),
                                {
                                    contextElement: n.current || void 0,
                                    getBoundingClientRect() {
                                        var e, t;
                                        let r = (null == (e = n.current) ? void 0 : e.getBoundingClientRect()) || { width: 0, height: 0, x: 0, y: 0 },
                                            o = 'x' === i.axis || 'both' === i.axis,
                                            a = 'y' === i.axis || 'both' === i.axis,
                                            s =
                                                ['mouseenter', 'mousemove'].includes((null == (t = i.dataRef.current.openEvent) ? void 0 : t.type) || '') &&
                                                'touch' !== i.pointerType,
                                            f = r.width,
                                            d = r.height,
                                            m = r.x,
                                            p = r.y;
                                        return (
                                            null == l && i.x && o && (l = r.x - i.x),
                                            null == u && i.y && a && (u = r.y - i.y),
                                            (m -= l || 0),
                                            (p -= u || 0),
                                            (f = 0),
                                            (d = 0),
                                            !c || s
                                                ? ((f = 'y' === i.axis ? r.width : 0),
                                                  (d = 'x' === i.axis ? r.height : 0),
                                                  (m = o && null != i.x ? i.x : m),
                                                  (p = a && null != i.y ? i.y : p))
                                                : c && !s && ((d = 'x' === i.axis ? r.height : d), (f = 'y' === i.axis ? r.width : f)),
                                            (c = !0),
                                            { width: f, height: d, x: m, y: p, top: p, right: m + f, bottom: p + d, left: m }
                                        );
                                    },
                                }),
                            );
                        }
                    }),
                    b = nP((e) => {
                        null == s && null == f && (n ? m.current || y([]) : w(e.clientX, e.clientY));
                    }),
                    E = x(v) ? l : n,
                    R = i.useCallback(() => {
                        if (!E || !u || null != s || null != f) return;
                        let e = c(r.floating.current);
                        function t(n) {
                            let o = k(n);
                            p(r.floating.current, o) ? (e.removeEventListener('mousemove', t), (m.current = null)) : w(n.clientX, n.clientY);
                        }
                        if (!o.current.openEvent || nO(o.current.openEvent)) {
                            e.addEventListener('mousemove', t);
                            let n = () => {
                                e.removeEventListener('mousemove', t), (m.current = null);
                            };
                            return (m.current = n), n;
                        }
                        r.setPositionReference(r.domReference.current);
                    }, [o, u, E, r, w, s, f]);
                return (
                    i.useEffect(() => R(), [R, g]),
                    i.useEffect(() => {
                        u && !l && (d.current = !1);
                    }, [u, l]),
                    i.useEffect(() => {
                        !u && n && (d.current = !0);
                    }, [u, n]),
                    tD(() => {
                        u && (null != s || null != f) && ((d.current = !1), w(s, f));
                    }, [u, s, f, w]),
                    i.useMemo(() => {
                        if (!u) return {};
                        function e(e) {
                            let { pointerType: t } = e;
                            h(t);
                        }
                        return { reference: { onPointerDown: e, onPointerEnter: e, onMouseMove: b, onMouseEnter: b } };
                    }, [u, b])
                );
            }
            let nD = { pointerdown: 'onPointerDown', mousedown: 'onMouseDown', click: 'onClick' },
                nN = { pointerdown: 'onPointerDownCapture', mousedown: 'onMouseDownCapture', click: 'onClickCapture' };
            function nF(e, t) {
                var n, r;
                void 0 === t && (t = {});
                let {
                        open: o,
                        onOpenChange: l,
                        events: m,
                        nodeId: v,
                        elements: { reference: h, domReference: w, floating: b },
                        dataRef: x,
                    } = e,
                    {
                        enabled: T = !0,
                        escapeKey: C = !0,
                        outsidePress: S = !0,
                        outsidePressEvent: L = 'pointerdown',
                        referencePress: A = !1,
                        referencePressEvent: M = 'pointerdown',
                        ancestorScroll: P = !1,
                        bubbles: O,
                    } = t,
                    I = t2(),
                    D = null != t1(),
                    N = nP('function' == typeof S ? S : () => !1),
                    F = 'function' == typeof S ? N : S,
                    H = i.useRef(!1),
                    W = i.useRef(!1),
                    { escapeKeyBubbles: B, outsidePressBubbles: _ } = {
                        escapeKeyBubbles: 'boolean' == typeof O ? O : null != (n = null == O ? void 0 : O.escapeKey) && n,
                        outsidePressBubbles: 'boolean' == typeof O ? O : null == (r = null == O ? void 0 : O.outsidePress) || r,
                    },
                    K = nP((e) => {
                        if (!o || !T || !C || 'Escape' !== e.key) return;
                        let t = I ? ni(I.nodesRef.current, v) : [];
                        if (!B && (e.stopPropagation(), t.length > 0)) {
                            let e = !0;
                            if (
                                (t.forEach((t) => {
                                    var n;
                                    if (null != (n = t.context) && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
                                        e = !1;
                                        return;
                                    }
                                }),
                                !e)
                            )
                                return;
                        }
                        m.emit('dismiss', { type: 'escapeKey', data: { returnFocus: { preventScroll: !1 } } }), l(!1, 'nativeEvent' in e ? e.nativeEvent : e);
                    }),
                    V = nP((e) => {
                        let t = H.current;
                        H.current = !1;
                        let n = W.current;
                        if (((W.current = !1), ('click' === L && n) || t || ('function' == typeof F && !F(e)))) return;
                        let r = k(e),
                            o = '[' + t8('inert') + ']',
                            i = E(b).querySelectorAll(o),
                            h = s(r) ? r : null;
                        for (; h && !['html', 'body', '#document'].includes(u(h)); ) {
                            let e = (function (e) {
                                var t;
                                if ('html' === u(e)) return e;
                                let n =
                                    e.assignedSlot ||
                                    e.parentNode ||
                                    (d(e) && e.host) ||
                                    (null == (t = (a(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement);
                                return d(n) ? n.host : n;
                            })(h);
                            if (e !== E(b).body && s(e)) h = e;
                            else break;
                        }
                        if (i.length && s(r) && !r.matches('html,body') && !p(r, b) && Array.from(i).every((e) => !p(h, e))) return;
                        if (f(r) && b) {
                            let t = r.clientWidth > 0 && r.scrollWidth > r.clientWidth,
                                n = r.clientHeight > 0 && r.scrollHeight > r.clientHeight,
                                o = n && e.offsetX > r.clientWidth;
                            n && 'rtl' === c(r).getComputedStyle(r).direction && (o = e.offsetX <= r.offsetWidth - r.clientWidth);
                            if (o || (t && e.offsetY > r.clientHeight)) return;
                        }
                        let x =
                            I &&
                            ni(I.nodesRef.current, v).some((t) => {
                                var n;
                                return R(e, null == (n = t.context) ? void 0 : n.elements.floating);
                            });
                        if (R(e, b) || R(e, w) || x) return;
                        let T = I ? ni(I.nodesRef.current, v) : [];
                        if (T.length > 0) {
                            let e = !0;
                            if (
                                (T.forEach((t) => {
                                    var n;
                                    if (null != (n = t.context) && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
                                        e = !1;
                                        return;
                                    }
                                }),
                                !e)
                            )
                                return;
                        }
                        m.emit('dismiss', { type: 'outsidePress', data: { returnFocus: D ? { preventScroll: !0 } : g(e) || y(e) } }), l(!1, e);
                    });
                return (
                    i.useEffect(() => {
                        if (!o || !T) return;
                        function e(e) {
                            l(!1, e);
                        }
                        (x.current.__escapeKeyBubbles = B), (x.current.__outsidePressBubbles = _);
                        let t = E(b);
                        C && t.addEventListener('keydown', K), F && t.addEventListener(L, V);
                        let n = [];
                        return (
                            P && (s(w) && (n = ek(w)), s(b) && (n = n.concat(ek(b))), !s(h) && h && h.contextElement && (n = n.concat(ek(h.contextElement)))),
                            (n = n.filter((e) => {
                                var n;
                                return e !== (null == (n = t.defaultView) ? void 0 : n.visualViewport);
                            })).forEach((t) => {
                                t.addEventListener('scroll', e, { passive: !0 });
                            }),
                            () => {
                                C && t.removeEventListener('keydown', K),
                                    F && t.removeEventListener(L, V),
                                    n.forEach((t) => {
                                        t.removeEventListener('scroll', e);
                                    });
                            }
                        );
                    }, [x, b, w, h, C, F, L, o, l, P, T, B, _, K, V]),
                    i.useEffect(() => {
                        H.current = !1;
                    }, [F, L]),
                    i.useMemo(
                        () =>
                            T
                                ? {
                                      reference: {
                                          onKeyDown: K,
                                          [nD[M]]: (e) => {
                                              A && (m.emit('dismiss', { type: 'referencePress', data: { returnFocus: !1 } }), l(!1, e.nativeEvent));
                                          },
                                      },
                                      floating: {
                                          onKeyDown: K,
                                          onMouseDown() {
                                              W.current = !0;
                                          },
                                          onMouseUp() {
                                              W.current = !0;
                                          },
                                          [nN[L]]: () => {
                                              H.current = !0;
                                          },
                                      },
                                  }
                                : {},
                        [T, m, A, L, M, l, K],
                    )
                );
            }
            function nH(e) {
                var t;
                void 0 === e && (e = {});
                let { open: n = !1, onOpenChange: r, nodeId: o } = e,
                    [l, u] = i.useState(null),
                    c = (null == (t = e.elements) ? void 0 : t.reference) || l,
                    a = (function (e) {
                        void 0 === e && (e = {});
                        let {
                                placement: t = 'bottom',
                                strategy: n = 'absolute',
                                middleware: r = [],
                                platform: o,
                                elements: { reference: l, floating: u } = {},
                                transform: c = !0,
                                whileElementsMounted: a,
                                open: s,
                            } = e,
                            [f, d] = i.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
                            [m, p] = i.useState(r);
                        eX(m, r) || p(r);
                        let [v, h] = i.useState(null),
                            [g, y] = i.useState(null),
                            w = i.useCallback((e) => {
                                e !== R.current && ((R.current = e), h(e));
                            }, []),
                            b = i.useCallback((e) => {
                                e !== k.current && ((k.current = e), y(e));
                            }, []),
                            x = l || v,
                            E = u || g,
                            R = i.useRef(null),
                            k = i.useRef(null),
                            T = i.useRef(f),
                            C = null != a,
                            S = eG(a),
                            L = eG(o),
                            A = eG(s),
                            M = i.useCallback(() => {
                                if (!R.current || !k.current) return;
                                let e = { placement: t, strategy: n, middleware: m };
                                L.current && (e.platform = L.current),
                                    eq(R.current, k.current, e).then((e) => {
                                        let t = { ...e, isPositioned: !1 !== A.current };
                                        P.current &&
                                            !eX(T.current, t) &&
                                            ((T.current = t),
                                            ez.flushSync(() => {
                                                d(t);
                                            }));
                                    });
                            }, [m, t, n, L, A]);
                        eU(() => {
                            !1 === s && T.current.isPositioned && ((T.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
                        }, [s]);
                        let P = i.useRef(!1);
                        eU(
                            () => (
                                (P.current = !0),
                                () => {
                                    P.current = !1;
                                }
                            ),
                            [],
                        ),
                            eU(() => {
                                if ((x && (R.current = x), E && (k.current = E), x && E)) {
                                    if (S.current) return S.current(x, E, M);
                                    M();
                                }
                            }, [x, E, M, S, C]);
                        let O = i.useMemo(() => ({ reference: R, floating: k, setReference: w, setFloating: b }), [w, b]),
                            I = i.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                            D = i.useMemo(() => {
                                let e = { position: n, left: 0, top: 0 };
                                if (!I.floating) return e;
                                let t = e$(I.floating, f.x),
                                    r = e$(I.floating, f.y);
                                return c
                                    ? { ...e, transform: 'translate(' + t + 'px, ' + r + 'px)', ...(eY(I.floating) >= 1.5 && { willChange: 'transform' }) }
                                    : { position: n, left: t, top: r };
                            }, [n, c, I.floating, f.x, f.y]);
                        return i.useMemo(() => ({ ...f, update: M, refs: O, elements: I, floatingStyles: D }), [f, M, O, I, D]);
                    })(e),
                    f = t2(),
                    d = nP((e, t) => {
                        e && (p.current.openEvent = t), null == r || r(e, t);
                    }),
                    m = i.useRef(null),
                    p = i.useRef({}),
                    v = i.useState(() => tQ())[0],
                    h = tG(),
                    g = i.useCallback(
                        (e) => {
                            let t = s(e) ? { getBoundingClientRect: () => e.getBoundingClientRect(), contextElement: e } : e;
                            a.refs.setReference(t);
                        },
                        [a.refs],
                    ),
                    y = i.useCallback(
                        (e) => {
                            (s(e) || null === e) && ((m.current = e), u(e)),
                                (s(a.refs.reference.current) || null === a.refs.reference.current || (null !== e && !s(e))) && a.refs.setReference(e);
                        },
                        [a.refs],
                    ),
                    w = i.useMemo(() => ({ ...a.refs, setReference: y, setPositionReference: g, domReference: m }), [a.refs, y, g]),
                    b = i.useMemo(() => ({ ...a.elements, domReference: c }), [a.elements, c]),
                    x = i.useMemo(
                        () => ({ ...a, refs: w, elements: b, dataRef: p, nodeId: o, floatingId: h, events: v, open: n, onOpenChange: d }),
                        [a, o, h, v, n, d, w, b],
                    );
                return (
                    tD(() => {
                        let e = null == f ? void 0 : f.nodesRef.current.find((e) => e.id === o);
                        e && (e.context = x);
                    }),
                    i.useMemo(() => ({ ...a, context: x, refs: w, elements: b }), [a, w, b, x])
                );
            }
            function nW(e, t) {
                void 0 === t && (t = {});
                let {
                        open: n,
                        onOpenChange: r,
                        events: o,
                        refs: l,
                        elements: { floating: u, domReference: a },
                    } = e,
                    { enabled: d = !0, visibleOnly: v = !0 } = t,
                    h = i.useRef(!1),
                    g = i.useRef(),
                    y = i.useRef(!1);
                return (
                    i.useEffect(() => {
                        if (!d) return;
                        let e = c(a);
                        function t() {
                            !n && f(a) && a === m(E(a)) && (h.current = !0);
                        }
                        function r() {
                            y.current = !0;
                        }
                        return (
                            e.addEventListener('blur', t),
                            e.addEventListener('keydown', r, !0),
                            () => {
                                e.removeEventListener('blur', t), e.removeEventListener('keydown', r, !0);
                            }
                        );
                    }, [u, a, n, d]),
                    i.useEffect(() => {
                        if (d)
                            return (
                                o.on('dismiss', e),
                                () => {
                                    o.off('dismiss', e);
                                }
                            );
                        function e(e) {
                            ('referencePress' === e.type || 'escapeKey' === e.type) && (h.current = !0);
                        }
                    }, [o, d]),
                    i.useEffect(
                        () => () => {
                            clearTimeout(g.current);
                        },
                        [],
                    ),
                    i.useMemo(
                        () =>
                            d
                                ? {
                                      reference: {
                                          onPointerDown() {
                                              y.current = !1;
                                          },
                                          onMouseLeave() {
                                              h.current = !1;
                                          },
                                          onFocus(e) {
                                              if (h.current) return;
                                              let t = k(e.nativeEvent);
                                              if (v && s(t))
                                                  try {
                                                      if (w()) throw Error();
                                                      if (!t.matches(':focus-visible')) return;
                                                  } catch (e) {
                                                      if (!y.current && !T(t)) return;
                                                  }
                                              r(!0, e.nativeEvent);
                                          },
                                          onBlur(e) {
                                              h.current = !1;
                                              let t = e.relatedTarget,
                                                  n = s(t) && t.hasAttribute(t8('focus-guard')) && 'outside' === t.getAttribute('data-type');
                                              g.current = window.setTimeout(() => {
                                                  let o = m(a ? a.ownerDocument : document);
                                                  (t || o !== a) && (p(l.floating.current, t) || p(a, t) || n || r(!1, e.nativeEvent));
                                              });
                                          },
                                      },
                                  }
                                : {},
                        [d, v, a, l, r],
                    )
                );
            }
            function nB(e, t, n) {
                let r = new Map();
                return {
                    ...('floating' === n && { tabIndex: -1 }),
                    ...e,
                    ...t
                        .map((e) => (e ? e[n] : null))
                        .concat(e)
                        .reduce(
                            (e, t) => (
                                t &&
                                    Object.entries(t).forEach((t) => {
                                        let [n, o] = t;
                                        if (0 === n.indexOf('on')) {
                                            if ((r.has(n) || r.set(n, []), 'function' == typeof o)) {
                                                var i;
                                                null == (i = r.get(n)) || i.push(o),
                                                    (e[n] = function () {
                                                        for (var e, t = arguments.length, o = Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                                                        return null == (e = r.get(n)) ? void 0 : e.map((e) => e(...o)).find((e) => void 0 !== e);
                                                    });
                                            }
                                        } else e[n] = o;
                                    }),
                                e
                            ),
                            {},
                        ),
                };
            }
            function n_(e) {
                void 0 === e && (e = []);
                let t = e,
                    n = i.useCallback((t) => nB(t, e, 'reference'), t),
                    r = i.useCallback((t) => nB(t, e, 'floating'), t),
                    o = i.useCallback(
                        (t) => nB(t, e, 'item'),
                        e.map((e) => (null == e ? void 0 : e.item)),
                    );
                return i.useMemo(() => ({ getReferenceProps: n, getFloatingProps: r, getItemProps: o }), [n, r, o]);
            }
            let nK = !1;
            function nV(e, t, n) {
                switch (e) {
                    case 'vertical':
                        return t;
                    case 'horizontal':
                        return n;
                    default:
                        return t || n;
                }
            }
            function nj(e, t) {
                return nV(t, e === tE || e === tR, e === tk || e === tT);
            }
            function nq(e, t, n) {
                return nV(t, e === tR, n ? e === tk : e === tT) || 'Enter' === e || ' ' == e || '' === e;
            }
            function nz(e, t, n) {
                return nV(t, n ? e === tT : e === tk, e === tE);
            }
            function nU(e, t) {
                let {
                        open: n,
                        onOpenChange: r,
                        refs: o,
                        elements: { domReference: l, floating: u },
                    } = e,
                    {
                        listRef: c,
                        activeIndex: a,
                        onNavigate: s = () => {},
                        enabled: d = !0,
                        selectedIndex: h = null,
                        allowEscape: b = !1,
                        loop: x = !1,
                        nested: R = !1,
                        rtl: k = !1,
                        virtual: T = !1,
                        focusItemOnOpen: S = 'auto',
                        focusItemOnHover: L = !0,
                        openOnArrowKeyDown: A = !0,
                        disabledIndices: M,
                        orientation: P = 'vertical',
                        cols: O = 1,
                        scrollItemIntoView: I = !0,
                        virtualItemRef: D,
                    } = t,
                    N = t1(),
                    F = t2(),
                    H = nP(s),
                    W = i.useRef(S),
                    B = i.useRef(null != h ? h : -1),
                    _ = i.useRef(null),
                    K = i.useRef(!0),
                    V = i.useRef(H),
                    j = i.useRef(!!u),
                    q = i.useRef(!1),
                    z = i.useRef(!1),
                    U = t3(M),
                    X = t3(n),
                    Y = t3(I),
                    [$, G] = i.useState(),
                    [Z, Q] = i.useState(),
                    J = nP(function (e, t, n) {
                        void 0 === n && (n = !1);
                        let r = e.current[t.current];
                        r &&
                            (T
                                ? (G(r.id), null == F || F.events.emit('virtualfocus', r), D && (D.current = r))
                                : tI(r, { preventScroll: !0, sync: !!(v().toLowerCase().startsWith('mac') && !navigator.maxTouchPoints && w()) && (nK || q.current) }),
                            requestAnimationFrame(() => {
                                let e = Y.current;
                                e &&
                                    r &&
                                    (n || !K.current) &&
                                    (null == r.scrollIntoView || r.scrollIntoView('boolean' == typeof e ? { block: 'nearest', inline: 'nearest' } : e));
                            }));
                    });
                tD(() => {
                    document.createElement('div').focus({
                        get preventScroll() {
                            return (nK = !0), !1;
                        },
                    });
                }, []),
                    tD(() => {
                        d && (n && u ? W.current && null != h && ((z.current = !0), H(h)) : j.current && ((B.current = -1), V.current(null)));
                    }, [d, n, u, h, H]),
                    tD(() => {
                        if (d && n && u)
                            if (null == a) {
                                if (((q.current = !1), null != h)) return;
                                if (
                                    (j.current && ((B.current = -1), J(c, B)), !j.current && W.current && (null != _.current || (!0 === W.current && null == _.current)))
                                ) {
                                    let e = 0,
                                        t = () => {
                                            null == c.current[0]
                                                ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(t), e++)
                                                : ((B.current = null == _.current || nq(_.current, P, k) || R ? tL(c, U.current) : tA(c, U.current)),
                                                  (_.current = null),
                                                  H(B.current));
                                        };
                                    t();
                                }
                            } else tS(c, a) || ((B.current = a), J(c, B, z.current), (z.current = !1));
                    }, [d, n, u, a, h, R, c, P, k, H, J, U]),
                    tD(() => {
                        var e, t;
                        if (!d || u || !F || T || !j.current) return;
                        let n = F.nodesRef.current,
                            r = null == (e = n.find((e) => e.id === N)) || null == (t = e.context) ? void 0 : t.elements.floating,
                            o = m(E(u)),
                            i = n.some((e) => e.context && p(e.context.elements.floating, o));
                        r && !i && K.current && r.focus({ preventScroll: !0 });
                    }, [d, u, F, N, T]),
                    tD(() => {
                        if (d && F && T && !N)
                            return (
                                F.events.on('virtualfocus', e),
                                () => {
                                    F.events.off('virtualfocus', e);
                                }
                            );
                        function e(e) {
                            Q(e.id), D && (D.current = e);
                        }
                    }, [d, F, T, N, D]),
                    tD(() => {
                        (V.current = H), (j.current = !!u);
                    }),
                    tD(() => {
                        n || (_.current = null);
                    }, [n]);
                let ee = null != a,
                    et = i.useMemo(() => {
                        function e(e) {
                            if (!n) return;
                            let t = c.current.indexOf(e);
                            -1 !== t && H(t);
                        }
                        return {
                            onFocus(t) {
                                let { currentTarget: n } = t;
                                e(n);
                            },
                            onClick: (e) => {
                                let { currentTarget: t } = e;
                                return t.focus({ preventScroll: !0 });
                            },
                            ...(L && {
                                onMouseMove(t) {
                                    let { currentTarget: n } = t;
                                    e(n);
                                },
                                onPointerLeave(e) {
                                    let { pointerType: t } = e;
                                    K.current && 'touch' !== t && ((B.current = -1), J(c, B), H(null), T || tI(o.floating.current, { preventScroll: !0 }));
                                },
                            }),
                        };
                    }, [n, o, J, L, c, H, T]);
                return i.useMemo(() => {
                    if (!d) return {};
                    let e = U.current;
                    function t(t) {
                        if (((K.current = !1), (q.current = !0), !X.current && t.currentTarget === o.floating.current)) return;
                        if (R && nz(t.key, P, k)) {
                            C(t), r(!1, t.nativeEvent), f(l) && !T && l.focus();
                            return;
                        }
                        let i = B.current,
                            u = tL(c, e),
                            a = tA(c, e);
                        if (
                            ('Home' === t.key && (C(t), (B.current = u), H(B.current)),
                            'End' === t.key && (C(t), (B.current = a), H(B.current)),
                            !(O > 1) ||
                                ((B.current = tP(c, {
                                    event: t,
                                    orientation: P,
                                    loop: x,
                                    cols: O,
                                    disabledIndices: e,
                                    minIndex: u,
                                    maxIndex: a,
                                    prevIndex: B.current,
                                    stopEvent: !0,
                                })),
                                H(B.current),
                                'both' !== P)) &&
                            nj(t.key, P)
                        ) {
                            if ((C(t), n && !T && m(t.currentTarget.ownerDocument) === t.currentTarget)) {
                                (B.current = nq(t.key, P, k) ? u : a), H(B.current);
                                return;
                            }
                            nq(t.key, P, k)
                                ? x
                                    ? (B.current = i >= a ? (b && i !== c.current.length ? -1 : u) : tM(c, { startingIndex: i, disabledIndices: e }))
                                    : (B.current = Math.min(a, tM(c, { startingIndex: i, disabledIndices: e })))
                                : x
                                  ? (B.current = i <= u ? (b && -1 !== i ? c.current.length : a) : tM(c, { startingIndex: i, decrement: !0, disabledIndices: e }))
                                  : (B.current = Math.max(u, tM(c, { startingIndex: i, decrement: !0, disabledIndices: e }))),
                                tS(c, B.current) ? H(null) : H(B.current);
                        }
                    }
                    function i(e) {
                        'auto' === S && g(e.nativeEvent) && (W.current = !0);
                    }
                    let u = T && n && ee && { 'aria-activedescendant': Z || $ },
                        a = c.current.find((e) => (null == e ? void 0 : e.id) === $);
                    return {
                        reference: {
                            ...u,
                            onKeyDown(o) {
                                var i, l, u, s, f, d;
                                K.current = !1;
                                let m = 0 === o.key.indexOf('Arrow'),
                                    p = ((i = o.key), nV(P, k ? i === tk : i === tT, i === tR)),
                                    v = nz(o.key, P, k),
                                    g = nj(o.key, P),
                                    y = (R ? p : g) || 'Enter' === o.key || '' === o.key.trim();
                                if (T && n) {
                                    let e,
                                        n,
                                        r = null == F ? void 0 : F.nodesRef.current.find((e) => null == e.parentId),
                                        i =
                                            F && r
                                                ? ((l = F.nodesRef.current),
                                                  (u = r.id),
                                                  (n = -1),
                                                  !(function t(r, o) {
                                                      o > n && ((e = r), (n = o)),
                                                          ni(l, r).forEach((e) => {
                                                              t(e.id, o + 1);
                                                          });
                                                  })(u, 0),
                                                  l.find((t) => t.id === e))
                                                : null;
                                    if (m && i && D) {
                                        let e = new KeyboardEvent('keydown', { key: o.key, bubbles: !0 });
                                        if (p || v) {
                                            let t = (null == (s = i.context) ? void 0 : s.elements.domReference) === o.currentTarget,
                                                n = v && !t ? (null == (f = i.context) ? void 0 : f.elements.domReference) : p ? a : null;
                                            n && (C(o), n.dispatchEvent(e), Q(void 0));
                                        }
                                        if (g && i.context && i.context.open && i.parentId && o.currentTarget !== i.context.elements.domReference) {
                                            C(o), null == (d = i.context.elements.domReference) || d.dispatchEvent(e);
                                            return;
                                        }
                                    }
                                    return t(o);
                                }
                                if (n || A || !m) {
                                    if ((y && (_.current = R && g ? null : o.key), R)) {
                                        p && (C(o), n ? ((B.current = tL(c, e)), H(B.current)) : r(!0, o.nativeEvent));
                                        return;
                                    }
                                    g && (null != h && (B.current = h), C(o), !n && A ? r(!0, o.nativeEvent) : t(o), n && H(B.current));
                                }
                            },
                            onFocus() {
                                n && H(null);
                            },
                            onPointerDown: function (e) {
                                (W.current = S), 'auto' === S && y(e.nativeEvent) && (W.current = !0);
                            },
                            onMouseDown: i,
                            onClick: i,
                        },
                        floating: {
                            'aria-orientation': 'both' === P ? void 0 : P,
                            ...u,
                            onKeyDown: t,
                            onPointerMove() {
                                K.current = !0;
                            },
                        },
                        item: et,
                    };
                }, [l, o, $, Z, U, X, c, d, P, k, T, n, ee, R, h, A, b, O, x, S, H, r, et, F, D]);
            }
            function nX(e, t) {
                void 0 === t && (t = {});
                let { open: n, floatingId: r } = e,
                    { enabled: o = !0, role: l = 'dialog' } = t,
                    u = tG();
                return i.useMemo(() => {
                    let e = { id: r, role: l };
                    return o
                        ? 'tooltip' === l
                            ? { reference: { 'aria-describedby': n ? r : void 0 }, floating: e }
                            : {
                                  reference: {
                                      'aria-expanded': n ? 'true' : 'false',
                                      'aria-haspopup': 'alertdialog' === l ? 'dialog' : l,
                                      'aria-controls': n ? r : void 0,
                                      ...('listbox' === l && { role: 'combobox' }),
                                      ...('menu' === l && { id: u }),
                                  },
                                  floating: { ...e, ...('menu' === l && { 'aria-labelledby': u }) },
                              }
                        : {};
                }, [o, l, n, r, u]);
            }
            let nY = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? '-' : '') + e.toLowerCase());
            function n$(e, t) {
                return 'function' == typeof e ? e(t) : e;
            }
            function nG(e, t) {
                void 0 === t && (t = {});
                let {
                        open: n,
                        elements: { floating: r },
                    } = e,
                    { duration: o = 250 } = t,
                    l = ('number' == typeof o ? o : o.close) || 0,
                    [u, c] = i.useState(!1),
                    [a, s] = i.useState('unmounted'),
                    f = (function (e, t) {
                        let [n, r] = i.useState(e);
                        return (
                            e && !n && r(!0),
                            i.useEffect(() => {
                                if (!e) {
                                    let e = setTimeout(() => r(!1), t);
                                    return () => clearTimeout(e);
                                }
                            }, [e, t]),
                            n
                        );
                    })(n, l);
                return (
                    tD(() => {
                        u && !f && s('unmounted');
                    }, [u, f]),
                    tD(() => {
                        if (r)
                            if (n) {
                                s('initial');
                                let e = requestAnimationFrame(() => {
                                    s('open');
                                });
                                return () => {
                                    cancelAnimationFrame(e);
                                };
                            } else c(!0), s('close');
                    }, [n, r]),
                    { isMounted: f, status: a }
                );
            }
            function nZ(e, t) {
                void 0 === t && (t = {});
                let { initial: n = { opacity: 0 }, open: r, close: o, common: l, duration: u = 250 } = t,
                    c = e.placement,
                    a = c.split('-')[0],
                    s = i.useMemo(() => ({ side: a, placement: c }), [a, c]),
                    f = 'number' == typeof u,
                    d = (f ? u : u.open) || 0,
                    m = (f ? u : u.close) || 0,
                    [p, v] = i.useState(() => ({ ...n$(l, s), ...n$(n, s) })),
                    { isMounted: h, status: g } = nG(e, { duration: u }),
                    y = t3(n),
                    w = t3(r),
                    b = t3(o),
                    x = t3(l);
                return (
                    tD(() => {
                        let e = n$(y.current, s),
                            t = n$(b.current, s),
                            n = n$(x.current, s),
                            r = n$(w.current, s) || Object.keys(e).reduce((e, t) => ((e[t] = ''), e), {});
                        if (
                            ('initial' === g && v((t) => ({ transitionProperty: t.transitionProperty, ...n, ...e })),
                            'open' === g && v({ transitionProperty: Object.keys(r).map(nY).join(','), transitionDuration: d + 'ms', ...n, ...r }),
                            'close' === g)
                        ) {
                            let r = t || e;
                            v({ transitionProperty: Object.keys(r).map(nY).join(','), transitionDuration: m + 'ms', ...n, ...r });
                        }
                    }, [m, b, y, w, x, d, g, s]),
                    { isMounted: h, styles: p }
                );
            }
            function nQ(e, t) {
                var n;
                let { open: r, dataRef: o } = e,
                    {
                        listRef: l,
                        activeIndex: u,
                        onMatch: c,
                        onTypingChange: a,
                        enabled: s = !0,
                        findMatch: f = null,
                        resetMs: d = 750,
                        ignoreKeys: m = [],
                        selectedIndex: p = null,
                    } = t,
                    v = i.useRef(),
                    h = i.useRef(''),
                    g = i.useRef(null != (n = null != p ? p : u) ? n : -1),
                    y = i.useRef(null),
                    w = nP(c),
                    b = nP(a),
                    x = t3(f),
                    E = t3(m);
                return (
                    tD(() => {
                        r && (clearTimeout(v.current), (y.current = null), (h.current = ''));
                    }, [r]),
                    tD(() => {
                        if (r && '' === h.current) {
                            var e;
                            g.current = null != (e = null != p ? p : u) ? e : -1;
                        }
                    }, [r, p, u]),
                    i.useMemo(() => {
                        if (!s) return {};
                        function e(e) {
                            e ? o.current.typing || ((o.current.typing = e), b(e)) : o.current.typing && ((o.current.typing = e), b(e));
                        }
                        function t(e, t, n) {
                            let r = x.current ? x.current(t, n) : t.find((e) => (null == e ? void 0 : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())) === 0);
                            return r ? e.indexOf(r) : -1;
                        }
                        function n(n) {
                            let o = l.current;
                            if (
                                (h.current.length > 0 && ' ' !== h.current[0] && (-1 === t(o, o, h.current) ? e(!1) : ' ' === n.key && C(n)),
                                null == o || E.current.includes(n.key) || 1 !== n.key.length || n.ctrlKey || n.metaKey || n.altKey)
                            )
                                return;
                            r && ' ' !== n.key && (C(n), e(!0)),
                                o.every((e) => {
                                    var t, n;
                                    return !e || (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !== (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase());
                                }) &&
                                    h.current === n.key &&
                                    ((h.current = ''), (g.current = y.current)),
                                (h.current += n.key),
                                clearTimeout(v.current),
                                (v.current = setTimeout(() => {
                                    (h.current = ''), (g.current = y.current), e(!1);
                                }, d));
                            let i = g.current,
                                u = t(o, [...o.slice((i || 0) + 1), ...o.slice(0, (i || 0) + 1)], h.current);
                            -1 !== u ? (w(u), (y.current = u)) : ' ' !== n.key && ((h.current = ''), e(!1));
                        }
                        return {
                            reference: { onKeyDown: n },
                            floating: {
                                onKeyDown: n,
                                onKeyUp(t) {
                                    ' ' === t.key && e(!1);
                                },
                            },
                        };
                    }, [s, r, o, l, d, E, x, w, b])
                );
            }
            function nJ(e, t) {
                return { ...e, rects: { ...e.rects, floating: { ...e.rects.floating, height: t } } };
            }
            let n0 = (e) => ({
                name: 'inner',
                options: e,
                async fn(t) {
                    let {
                            listRef: n,
                            overflowRef: r,
                            onFallbackChange: o,
                            offset: i = 0,
                            index: l = 0,
                            minItemsVisible: u = 4,
                            referenceOverflowThreshold: c = 0,
                            scrollRef: a,
                            ...s
                        } = e,
                        {
                            rects: f,
                            elements: { floating: d },
                        } = t,
                        m = n.current[l];
                    if (!m) return {};
                    let p = { ...t, ...(await eZ(-m.offsetTop - d.clientTop - f.reference.height / 2 - m.offsetHeight / 2 - i).fn(t)) },
                        v = (null == a ? void 0 : a.current) || d,
                        h = await eV(nJ(p, v.scrollHeight), s),
                        g = await eV(p, { ...s, elementContext: 'reference' }),
                        y = Math.max(0, h.top),
                        w = p.y + y,
                        b = Math.max(0, v.scrollHeight - y - Math.max(0, h.bottom));
                    return (
                        (v.style.maxHeight = b + 'px'),
                        (v.scrollTop = y),
                        o &&
                            (v.offsetHeight < m.offsetHeight * Math.min(u, n.current.length - 1) - 1 || g.top >= -c || g.bottom >= -c
                                ? (0, ez.flushSync)(() => o(!0))
                                : (0, ez.flushSync)(() => o(!1))),
                        r && (r.current = await eV(nJ({ ...p, y: w }, v.offsetHeight), s)),
                        { y: w }
                    );
                },
            });
            function n1(e, t) {
                let { open: n, elements: r } = e,
                    { enabled: o = !0, overflowRef: l, scrollRef: u, onChange: c } = t,
                    a = nP(c),
                    s = i.useRef(!1),
                    f = i.useRef(null),
                    d = i.useRef(null);
                return (
                    i.useEffect(() => {
                        if (!o) return;
                        function e(e) {
                            if (e.ctrlKey || !t || null == l.current) return;
                            let n = e.deltaY,
                                r = l.current.top >= -0.5,
                                o = l.current.bottom >= -0.5,
                                i = t.scrollHeight - t.clientHeight,
                                u = n < 0 ? -1 : 1,
                                c = n < 0 ? 'max' : 'min';
                            !(t.scrollHeight <= t.clientHeight) &&
                                ((!r && n > 0) || (!o && n < 0)
                                    ? (e.preventDefault(),
                                      (0, ez.flushSync)(() => {
                                          a((e) => e + Math[c](n, i * u));
                                      }))
                                    : /firefox/i.test(h()) && (t.scrollTop += n));
                        }
                        let t = (null == u ? void 0 : u.current) || r.floating;
                        if (n && t)
                            return (
                                t.addEventListener('wheel', e),
                                requestAnimationFrame(() => {
                                    (f.current = t.scrollTop), null != l.current && (d.current = { ...l.current });
                                }),
                                () => {
                                    (f.current = null), (d.current = null), t.removeEventListener('wheel', e);
                                }
                            );
                    }, [o, n, r.floating, l, u, a]),
                    i.useMemo(
                        () =>
                            o
                                ? {
                                      floating: {
                                          onKeyDown() {
                                              s.current = !0;
                                          },
                                          onWheel() {
                                              s.current = !1;
                                          },
                                          onPointerMove() {
                                              s.current = !1;
                                          },
                                          onScroll() {
                                              let e = (null == u ? void 0 : u.current) || r.floating;
                                              if (l.current && e && s.current) {
                                                  if (null !== f.current) {
                                                      let t = e.scrollTop - f.current;
                                                      ((l.current.bottom < -0.5 && t < -1) || (l.current.top < -0.5 && t > 1)) &&
                                                          (0, ez.flushSync)(() => a((e) => e + t));
                                                  }
                                                  requestAnimationFrame(() => {
                                                      f.current = e.scrollTop;
                                                  });
                                              }
                                          },
                                      },
                                  }
                                : {},
                        [o, l, r.floating, u, a],
                    )
                );
            }
            function n2(e, t) {
                let [n, r] = e,
                    o = !1,
                    i = t.length;
                for (let e = 0, l = i - 1; e < i; l = e++) {
                    let [i, u] = t[e] || [0, 0],
                        [c, a] = t[l] || [0, 0];
                    u >= r != a >= r && n <= ((c - i) * (r - u)) / (a - u) + i && (o = !o);
                }
                return o;
            }
            function n4(e) {
                let t;
                void 0 === e && (e = {});
                let { buffer: n = 0.5, blockPointerEvents: r = !1, requireIntent: o = !0 } = e,
                    i = !1,
                    l = null,
                    u = null,
                    c = performance.now(),
                    a = (e) => {
                        let { x: r, y: a, placement: f, elements: d, onClose: m, nodeId: v, tree: h } = e;
                        return function (e) {
                            function g() {
                                clearTimeout(t), m();
                            }
                            if ((clearTimeout(t), !d.domReference || !d.floating || null == f || null == r || null == a)) return;
                            let { clientX: y, clientY: w } = e,
                                b = [y, w],
                                x = k(e),
                                E = 'mouseleave' === e.type,
                                R = p(d.floating, x),
                                T = p(d.domReference, x),
                                C = d.domReference.getBoundingClientRect(),
                                S = d.floating.getBoundingClientRect(),
                                L = f.split('-')[0],
                                A = r > S.right - S.width / 2,
                                M = a > S.bottom - S.height / 2,
                                P = b[0] >= C.x && b[0] <= C.x + C.width && b[1] >= C.y && b[1] <= C.y + C.height,
                                O = S.width > C.width,
                                I = S.height > C.height,
                                D = (O ? C : S).left,
                                N = (O ? C : S).right,
                                F = (I ? C : S).top,
                                H = (I ? C : S).bottom;
                            if (R && ((i = !0), !E)) return;
                            if ((T && (i = !1), T && !E)) {
                                i = !0;
                                return;
                            }
                            if (
                                (E && s(e.relatedTarget) && p(d.floating, e.relatedTarget)) ||
                                (h &&
                                    ni(h.nodesRef.current, v).some((e) => {
                                        let { context: t } = e;
                                        return null == t ? void 0 : t.open;
                                    }))
                            )
                                return;
                            if (
                                ('top' === L && a >= C.bottom - 1) ||
                                ('bottom' === L && a <= C.top + 1) ||
                                ('left' === L && r >= C.right - 1) ||
                                ('right' === L && r <= C.left + 1)
                            )
                                return g();
                            let W = [];
                            switch (L) {
                                case 'top':
                                    W = [
                                        [D, C.top + 1],
                                        [D, S.bottom - 1],
                                        [N, S.bottom - 1],
                                        [N, C.top + 1],
                                    ];
                                    break;
                                case 'bottom':
                                    W = [
                                        [D, S.top + 1],
                                        [D, C.bottom - 1],
                                        [N, C.bottom - 1],
                                        [N, S.top + 1],
                                    ];
                                    break;
                                case 'left':
                                    W = [
                                        [S.right - 1, H],
                                        [S.right - 1, F],
                                        [C.left + 1, F],
                                        [C.left + 1, H],
                                    ];
                                    break;
                                case 'right':
                                    W = [
                                        [C.right - 1, H],
                                        [C.right - 1, F],
                                        [S.left + 1, F],
                                        [S.left + 1, H],
                                    ];
                            }
                            if (!n2([y, w], W)) {
                                if (i && !P) return g();
                                if (!E && o) {
                                    let t = (function (e, t) {
                                        let n = performance.now(),
                                            r = n - c;
                                        if (null === l || null === u || 0 === r) return (l = e), (u = t), (c = n), null;
                                        let o = e - l,
                                            i = t - u,
                                            a = Math.sqrt(o * o + i * i);
                                        return (l = e), (u = t), (c = n), a / r;
                                    })(e.clientX, e.clientY);
                                    if (null !== t && t < 0.1) return g();
                                }
                                n2(
                                    [y, w],
                                    (function (e) {
                                        let [t, r] = e;
                                        switch (L) {
                                            case 'top': {
                                                let e = [
                                                    [S.left, A || O ? S.bottom - n : S.top],
                                                    [S.right, A ? (O ? S.bottom - n : S.top) : S.bottom - n],
                                                ];
                                                return [
                                                    [O ? t + n / 2 : A ? t + 4 * n : t - 4 * n, r + n + 1],
                                                    [O ? t - n / 2 : A ? t + 4 * n : t - 4 * n, r + n + 1],
                                                    ...e,
                                                ];
                                            }
                                            case 'bottom': {
                                                let e = [
                                                    [S.left, A || O ? S.top + n : S.bottom],
                                                    [S.right, A ? (O ? S.top + n : S.bottom) : S.top + n],
                                                ];
                                                return [[O ? t + n / 2 : A ? t + 4 * n : t - 4 * n, r - n], [O ? t - n / 2 : A ? t + 4 * n : t - 4 * n, r - n], ...e];
                                            }
                                            case 'left':
                                                return [
                                                    [M || I ? S.right - n : S.left, S.top],
                                                    [M ? (I ? S.right - n : S.left) : S.right - n, S.bottom],
                                                    [t + n + 1, I ? r + n / 2 : M ? r + 4 * n : r - 4 * n],
                                                    [t + n + 1, I ? r - n / 2 : M ? r + 4 * n : r - 4 * n],
                                                ];
                                            case 'right': {
                                                let e = [
                                                    [M || I ? S.left + n : S.right, S.top],
                                                    [M ? (I ? S.left + n : S.right) : S.left + n, S.bottom],
                                                ];
                                                return [[t - n, I ? r + n / 2 : M ? r + 4 * n : r - 4 * n], [t - n, I ? r - n / 2 : M ? r + 4 * n : r - 4 * n], ...e];
                                            }
                                        }
                                    })([r, a]),
                                )
                                    ? !i && o && (t = window.setTimeout(g, 40))
                                    : g();
                            }
                        };
                    };
                return (a.__options = { blockPointerEvents: r }), a;
            }
        },
    },
]);
