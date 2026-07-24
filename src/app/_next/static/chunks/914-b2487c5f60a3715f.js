'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [914],
    {
        11386: (e, t, n) => {
            let r;
            n.d(t, {
                Mp: () => ej,
                Hd: () => e5,
                vL: () => o,
                uN: () => eu,
                cA: () => ep,
                IG: () => eb,
                fp: () => z,
                y$: () => A,
                Sj: () => F,
                Vy: () => N,
                sl: () => X,
                fF: () => eG,
                PM: () => e_,
                zM: () => eH,
                MS: () => S,
                FR: () => R,
            });
            var l,
                i,
                a,
                o,
                u,
                s,
                c,
                d,
                f,
                h,
                g = n(55178),
                p = n(51767),
                v = n(81829);
            let b = { display: 'none' };
            function m(e) {
                let { id: t, value: n } = e;
                return g.createElement('div', { id: t, style: b }, n);
            }
            function y(e) {
                let { id: t, announcement: n, ariaLiveType: r = 'assertive' } = e;
                return g.createElement(
                    'div',
                    {
                        id: t,
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: 1,
                            height: 1,
                            margin: -1,
                            border: 0,
                            padding: 0,
                            overflow: 'hidden',
                            clip: 'rect(0 0 0 0)',
                            clipPath: 'inset(100%)',
                            whiteSpace: 'nowrap',
                        },
                        role: 'status',
                        'aria-live': r,
                        'aria-atomic': !0,
                    },
                    n,
                );
            }
            let w = (0, g.createContext)(null),
                x = {
                    draggable:
                        '\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  ',
                },
                E = {
                    onDragStart(e) {
                        let { active: t } = e;
                        return 'Picked up draggable item ' + t.id + '.';
                    },
                    onDragOver(e) {
                        let { active: t, over: n } = e;
                        return n
                            ? 'Draggable item ' + t.id + ' was moved over droppable area ' + n.id + '.'
                            : 'Draggable item ' + t.id + ' is no longer over a droppable area.';
                    },
                    onDragEnd(e) {
                        let { active: t, over: n } = e;
                        return n ? 'Draggable item ' + t.id + ' was dropped over droppable area ' + n.id : 'Draggable item ' + t.id + ' was dropped.';
                    },
                    onDragCancel(e) {
                        let { active: t } = e;
                        return 'Dragging was cancelled. Draggable item ' + t.id + ' was dropped.';
                    },
                };
            function D(e) {
                let { announcements: t = E, container: n, hiddenTextDescribedById: r, screenReaderInstructions: l = x } = e,
                    { announce: i, announcement: a } = (function () {
                        let [e, t] = (0, g.useState)('');
                        return {
                            announce: (0, g.useCallback)((e) => {
                                null != e && t(e);
                            }, []),
                            announcement: e,
                        };
                    })(),
                    o = (0, v.YG)('DndLiveRegion'),
                    [u, s] = (0, g.useState)(!1);
                (0, g.useEffect)(() => {
                    s(!0);
                }, []);
                var c = (0, g.useMemo)(
                    () => ({
                        onDragStart(e) {
                            let { active: n } = e;
                            i(t.onDragStart({ active: n }));
                        },
                        onDragMove(e) {
                            let { active: n, over: r } = e;
                            t.onDragMove && i(t.onDragMove({ active: n, over: r }));
                        },
                        onDragOver(e) {
                            let { active: n, over: r } = e;
                            i(t.onDragOver({ active: n, over: r }));
                        },
                        onDragEnd(e) {
                            let { active: n, over: r } = e;
                            i(t.onDragEnd({ active: n, over: r }));
                        },
                        onDragCancel(e) {
                            let { active: n, over: r } = e;
                            i(t.onDragCancel({ active: n, over: r }));
                        },
                    }),
                    [i, t],
                );
                let d = (0, g.useContext)(w);
                if (
                    ((0, g.useEffect)(() => {
                        if (!d) throw Error('useDndMonitor must be used within a children of <DndContext>');
                        return d(c);
                    }, [c, d]),
                    !u)
                )
                    return null;
                let f = g.createElement(g.Fragment, null, g.createElement(m, { id: r, value: l.draggable }), g.createElement(y, { id: o, announcement: a }));
                return n ? (0, p.createPortal)(f, n) : f;
            }
            function C() {}
            function S(e, t) {
                return (0, g.useMemo)(() => ({ sensor: e, options: null != t ? t : {} }), [e, t]);
            }
            function R() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, g.useMemo)(() => [...t].filter((e) => null != e), [...t]);
            }
            !(function (e) {
                (e.DragStart = 'dragStart'),
                    (e.DragMove = 'dragMove'),
                    (e.DragEnd = 'dragEnd'),
                    (e.DragCancel = 'dragCancel'),
                    (e.DragOver = 'dragOver'),
                    (e.RegisterDroppable = 'registerDroppable'),
                    (e.SetDroppableDisabled = 'setDroppableDisabled'),
                    (e.UnregisterDroppable = 'unregisterDroppable');
            })(l || (l = {}));
            let M = Object.freeze({ x: 0, y: 0 });
            function k(e, t) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
            }
            function T(e, t) {
                let {
                        data: { value: n },
                    } = e,
                    {
                        data: { value: r },
                    } = t;
                return n - r;
            }
            function L(e, t) {
                let {
                        data: { value: n },
                    } = e,
                    {
                        data: { value: r },
                    } = t;
                return r - n;
            }
            function O(e) {
                let { left: t, top: n, height: r, width: l } = e;
                return [
                    { x: t, y: n },
                    { x: t + l, y: n },
                    { x: t, y: n + r },
                    { x: t + l, y: n + r },
                ];
            }
            function N(e, t) {
                if (!e || 0 === e.length) return null;
                let [n] = e;
                return t ? n[t] : n;
            }
            function I(e, t, n) {
                return void 0 === t && (t = e.left), void 0 === n && (n = e.top), { x: t + 0.5 * e.width, y: n + 0.5 * e.height };
            }
            let z = (e) => {
                    let { collisionRect: t, droppableRects: n, droppableContainers: r } = e,
                        l = I(t, t.left, t.top),
                        i = [];
                    for (let e of r) {
                        let { id: t } = e,
                            r = n.get(t);
                        if (r) {
                            let n = k(I(r), l);
                            i.push({ id: t, data: { droppableContainer: e, value: n } });
                        }
                    }
                    return i.sort(T);
                },
                A = (e) => {
                    let { collisionRect: t, droppableRects: n, droppableContainers: r } = e,
                        l = O(t),
                        i = [];
                    for (let e of r) {
                        let { id: t } = e,
                            r = n.get(t);
                        if (r) {
                            let n = O(r),
                                a = Number((l.reduce((e, t, r) => e + k(n[r], t), 0) / 4).toFixed(4));
                            i.push({ id: t, data: { droppableContainer: e, value: a } });
                        }
                    }
                    return i.sort(T);
                },
                Y = (e) => {
                    let { collisionRect: t, droppableRects: n, droppableContainers: r } = e,
                        l = [];
                    for (let e of r) {
                        let { id: r } = e,
                            i = n.get(r);
                        if (i) {
                            let n = (function (e, t) {
                                let n = Math.max(t.top, e.top),
                                    r = Math.max(t.left, e.left),
                                    l = Math.min(t.left + t.width, e.left + e.width),
                                    i = Math.min(t.top + t.height, e.top + e.height);
                                if (r < l && n < i) {
                                    let a = t.width * t.height,
                                        o = e.width * e.height,
                                        u = (l - r) * (i - n);
                                    return Number((u / (a + o - u)).toFixed(4));
                                }
                                return 0;
                            })(i, t);
                            n > 0 && l.push({ id: r, data: { droppableContainer: e, value: n } });
                        }
                    }
                    return l.sort(L);
                };
            function P(e, t) {
                return e && t ? { x: e.left - t.left, y: e.top - t.top } : M;
            }
            let W = (function (e) {
                return function (t) {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
                    return r.reduce((t, n) => ({ ...t, top: t.top + e * n.y, bottom: t.bottom + e * n.y, left: t.left + e * n.x, right: t.right + e * n.x }), { ...t });
                };
            })(1);
            function B(e) {
                if (e.startsWith('matrix3d(')) {
                    let t = e.slice(9, -1).split(/, /);
                    return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
                }
                if (e.startsWith('matrix(')) {
                    let t = e.slice(7, -1).split(/, /);
                    return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
                }
                return null;
            }
            let K = { ignoreTransform: !1 };
            function F(e, t) {
                void 0 === t && (t = K);
                let n = e.getBoundingClientRect();
                if (t.ignoreTransform) {
                    let { transform: t, transformOrigin: r } = (0, v.zk)(e).getComputedStyle(e);
                    t &&
                        (n = (function (e, t, n) {
                            let r = B(t);
                            if (!r) return e;
                            let { scaleX: l, scaleY: i, x: a, y: o } = r,
                                u = e.left - a - (1 - l) * parseFloat(n),
                                s = e.top - o - (1 - i) * parseFloat(n.slice(n.indexOf(' ') + 1)),
                                c = l ? e.width / l : e.width,
                                d = i ? e.height / i : e.height;
                            return { width: c, height: d, top: s, right: u + c, bottom: s + d, left: u };
                        })(n, t, r));
                }
                let { top: r, left: l, width: i, height: a, bottom: o, right: u } = n;
                return { top: r, left: l, width: i, height: a, bottom: o, right: u };
            }
            function j(e) {
                return F(e, { ignoreTransform: !0 });
            }
            function X(e, t) {
                let n = [];
                return e
                    ? (function r(l) {
                          var i;
                          if ((null != t && n.length >= t) || !l) return n;
                          if ((0, v.wz)(l) && null != l.scrollingElement && !n.includes(l.scrollingElement)) return n.push(l.scrollingElement), n;
                          if (!(0, v.sb)(l) || (0, v.xZ)(l) || n.includes(l)) return n;
                          let a = (0, v.zk)(e).getComputedStyle(l);
                          return (l !== e &&
                              (function (e, t) {
                                  void 0 === t && (t = (0, v.zk)(e).getComputedStyle(e));
                                  let n = /(auto|scroll|overlay)/;
                                  return ['overflow', 'overflowX', 'overflowY'].some((e) => {
                                      let r = t[e];
                                      return 'string' == typeof r && n.test(r);
                                  });
                              })(l, a) &&
                              n.push(l),
                          void 0 === (i = a) && (i = (0, v.zk)(l).getComputedStyle(l)),
                          'fixed' === i.position)
                              ? n
                              : r(l.parentNode);
                      })(e)
                    : n;
            }
            function U(e) {
                let [t] = X(e, 1);
                return null != t ? t : null;
            }
            function _(e) {
                return v.Sw && e
                    ? (0, v.l6)(e)
                        ? e
                        : (0, v.Ll)(e)
                          ? (0, v.wz)(e) || e === (0, v.TW)(e).scrollingElement
                              ? window
                              : (0, v.sb)(e)
                                ? e
                                : null
                          : null
                    : null;
            }
            function G(e) {
                return (0, v.l6)(e) ? e.scrollX : e.scrollLeft;
            }
            function q(e) {
                return (0, v.l6)(e) ? e.scrollY : e.scrollTop;
            }
            function H(e) {
                return { x: G(e), y: q(e) };
            }
            function J(e) {
                return !!v.Sw && !!e && e === document.scrollingElement;
            }
            function V(e) {
                let t = { x: 0, y: 0 },
                    n = J(e) ? { height: window.innerHeight, width: window.innerWidth } : { height: e.clientHeight, width: e.clientWidth },
                    r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height },
                    l = e.scrollTop <= t.y,
                    i = e.scrollLeft <= t.x;
                return { isTop: l, isLeft: i, isBottom: e.scrollTop >= r.y, isRight: e.scrollLeft >= r.x, maxScroll: r, minScroll: t };
            }
            !(function (e) {
                (e[(e.Forward = 1)] = 'Forward'), (e[(e.Backward = -1)] = 'Backward');
            })(i || (i = {}));
            let Q = { x: 0.2, y: 0.2 };
            function Z(e) {
                return e.reduce((e, t) => (0, v.WQ)(e, H(t)), M);
            }
            function $(e, t) {
                if ((void 0 === t && (t = F), !e)) return;
                let { top: n, left: r, bottom: l, right: i } = t(e);
                U(e) && (l <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({ block: 'center', inline: 'center' });
            }
            let ee = [
                [
                    'x',
                    ['left', 'right'],
                    function (e) {
                        return e.reduce((e, t) => e + G(t), 0);
                    },
                ],
                [
                    'y',
                    ['top', 'bottom'],
                    function (e) {
                        return e.reduce((e, t) => e + q(t), 0);
                    },
                ],
            ];
            class et {
                constructor(e, t) {
                    (this.rect = void 0),
                        (this.width = void 0),
                        (this.height = void 0),
                        (this.top = void 0),
                        (this.bottom = void 0),
                        (this.right = void 0),
                        (this.left = void 0);
                    let n = X(t),
                        r = Z(n);
                    for (let [t, l, i] of ((this.rect = { ...e }), (this.width = e.width), (this.height = e.height), ee))
                        for (let e of l)
                            Object.defineProperty(this, e, {
                                get: () => {
                                    let l = i(n),
                                        a = r[t] - l;
                                    return this.rect[e] + a;
                                },
                                enumerable: !0,
                            });
                    Object.defineProperty(this, 'rect', { enumerable: !1 });
                }
            }
            class en {
                constructor(e) {
                    (this.target = void 0),
                        (this.listeners = []),
                        (this.removeAll = () => {
                            this.listeners.forEach((e) => {
                                var t;
                                return null == (t = this.target) ? void 0 : t.removeEventListener(...e);
                            });
                        }),
                        (this.target = e);
                }
                add(e, t, n) {
                    var r;
                    null == (r = this.target) || r.addEventListener(e, t, n), this.listeners.push([e, t, n]);
                }
            }
            function er(e, t) {
                let n = Math.abs(e.x),
                    r = Math.abs(e.y);
                return 'number' == typeof t ? Math.sqrt(n ** 2 + r ** 2) > t : 'x' in t && 'y' in t ? n > t.x && r > t.y : 'x' in t ? n > t.x : 'y' in t && r > t.y;
            }
            function el(e) {
                e.preventDefault();
            }
            function ei(e) {
                e.stopPropagation();
            }
            !(function (e) {
                (e.Click = 'click'),
                    (e.DragStart = 'dragstart'),
                    (e.Keydown = 'keydown'),
                    (e.ContextMenu = 'contextmenu'),
                    (e.Resize = 'resize'),
                    (e.SelectionChange = 'selectionchange'),
                    (e.VisibilityChange = 'visibilitychange');
            })(a || (a = {})),
                (function (e) {
                    (e.Space = 'Space'),
                        (e.Down = 'ArrowDown'),
                        (e.Right = 'ArrowRight'),
                        (e.Left = 'ArrowLeft'),
                        (e.Up = 'ArrowUp'),
                        (e.Esc = 'Escape'),
                        (e.Enter = 'Enter');
                })(o || (o = {}));
            let ea = { start: [o.Space, o.Enter], cancel: [o.Esc], end: [o.Space, o.Enter] },
                eo = (e, t) => {
                    let { currentCoordinates: n } = t;
                    switch (e.code) {
                        case o.Right:
                            return { ...n, x: n.x + 25 };
                        case o.Left:
                            return { ...n, x: n.x - 25 };
                        case o.Down:
                            return { ...n, y: n.y + 25 };
                        case o.Up:
                            return { ...n, y: n.y - 25 };
                    }
                };
            class eu {
                constructor(e) {
                    (this.props = void 0),
                        (this.autoScrollEnabled = !1),
                        (this.referenceCoordinates = void 0),
                        (this.listeners = void 0),
                        (this.windowListeners = void 0),
                        (this.props = e);
                    let {
                        event: { target: t },
                    } = e;
                    (this.props = e),
                        (this.listeners = new en((0, v.TW)(t))),
                        (this.windowListeners = new en((0, v.zk)(t))),
                        (this.handleKeyDown = this.handleKeyDown.bind(this)),
                        (this.handleCancel = this.handleCancel.bind(this)),
                        this.attach();
                }
                attach() {
                    this.handleStart(),
                        this.windowListeners.add(a.Resize, this.handleCancel),
                        this.windowListeners.add(a.VisibilityChange, this.handleCancel),
                        setTimeout(() => this.listeners.add(a.Keydown, this.handleKeyDown));
                }
                handleStart() {
                    let { activeNode: e, onStart: t } = this.props,
                        n = e.node.current;
                    n && $(n), t(M);
                }
                handleKeyDown(e) {
                    if ((0, v.kx)(e)) {
                        let { active: t, context: n, options: r } = this.props,
                            { keyboardCodes: l = ea, coordinateGetter: i = eo, scrollBehavior: a = 'smooth' } = r,
                            { code: u } = e;
                        if (l.end.includes(u)) return void this.handleEnd(e);
                        if (l.cancel.includes(u)) return void this.handleCancel(e);
                        let { collisionRect: s } = n.current,
                            c = s ? { x: s.left, y: s.top } : M;
                        this.referenceCoordinates || (this.referenceCoordinates = c);
                        let d = i(e, { active: t, context: n.current, currentCoordinates: c });
                        if (d) {
                            let t = (0, v.Re)(d, c),
                                r = { x: 0, y: 0 },
                                { scrollableAncestors: l } = n.current;
                            for (let n of l) {
                                let l = e.code,
                                    { isTop: i, isRight: u, isLeft: s, isBottom: c, maxScroll: f, minScroll: h } = V(n),
                                    g = (function (e) {
                                        if (e === document.scrollingElement) {
                                            let { innerWidth: e, innerHeight: t } = window;
                                            return { top: 0, left: 0, right: e, bottom: t, width: e, height: t };
                                        }
                                        let { top: t, left: n, right: r, bottom: l } = e.getBoundingClientRect();
                                        return { top: t, left: n, right: r, bottom: l, width: e.clientWidth, height: e.clientHeight };
                                    })(n),
                                    p = {
                                        x: Math.min(l === o.Right ? g.right - g.width / 2 : g.right, Math.max(l === o.Right ? g.left : g.left + g.width / 2, d.x)),
                                        y: Math.min(l === o.Down ? g.bottom - g.height / 2 : g.bottom, Math.max(l === o.Down ? g.top : g.top + g.height / 2, d.y)),
                                    },
                                    v = (l === o.Right && !u) || (l === o.Left && !s),
                                    b = (l === o.Down && !c) || (l === o.Up && !i);
                                if (v && p.x !== d.x) {
                                    let e = n.scrollLeft + t.x,
                                        i = (l === o.Right && e <= f.x) || (l === o.Left && e >= h.x);
                                    if (i && !t.y) return void n.scrollTo({ left: e, behavior: a });
                                    i ? (r.x = n.scrollLeft - e) : (r.x = l === o.Right ? n.scrollLeft - f.x : n.scrollLeft - h.x),
                                        r.x && n.scrollBy({ left: -r.x, behavior: a });
                                    break;
                                }
                                if (b && p.y !== d.y) {
                                    let e = n.scrollTop + t.y,
                                        i = (l === o.Down && e <= f.y) || (l === o.Up && e >= h.y);
                                    if (i && !t.x) return void n.scrollTo({ top: e, behavior: a });
                                    i ? (r.y = n.scrollTop - e) : (r.y = l === o.Down ? n.scrollTop - f.y : n.scrollTop - h.y),
                                        r.y && n.scrollBy({ top: -r.y, behavior: a });
                                    break;
                                }
                            }
                            this.handleMove(e, (0, v.WQ)((0, v.Re)(d, this.referenceCoordinates), r));
                        }
                    }
                }
                handleMove(e, t) {
                    let { onMove: n } = this.props;
                    e.preventDefault(), n(t);
                }
                handleEnd(e) {
                    let { onEnd: t } = this.props;
                    e.preventDefault(), this.detach(), t();
                }
                handleCancel(e) {
                    let { onCancel: t } = this.props;
                    e.preventDefault(), this.detach(), t();
                }
                detach() {
                    this.listeners.removeAll(), this.windowListeners.removeAll();
                }
            }
            function es(e) {
                return !!(e && 'distance' in e);
            }
            function ec(e) {
                return !!(e && 'delay' in e);
            }
            eu.activators = [
                {
                    eventName: 'onKeyDown',
                    handler: (e, t, n) => {
                        let { keyboardCodes: r = ea, onActivation: l } = t,
                            { active: i } = n,
                            { code: a } = e.nativeEvent;
                        if (r.start.includes(a)) {
                            let t = i.activatorNode.current;
                            return (!t || e.target === t) && (e.preventDefault(), null == l || l({ event: e.nativeEvent }), !0);
                        }
                        return !1;
                    },
                },
            ];
            class ed {
                constructor(e, t, n) {
                    var r;
                    void 0 === n &&
                        (n = (function (e) {
                            let { EventTarget: t } = (0, v.zk)(e);
                            return e instanceof t ? e : (0, v.TW)(e);
                        })(e.event.target)),
                        (this.props = void 0),
                        (this.events = void 0),
                        (this.autoScrollEnabled = !0),
                        (this.document = void 0),
                        (this.activated = !1),
                        (this.initialCoordinates = void 0),
                        (this.timeoutId = null),
                        (this.listeners = void 0),
                        (this.documentListeners = void 0),
                        (this.windowListeners = void 0),
                        (this.props = e),
                        (this.events = t);
                    let { event: l } = e,
                        { target: i } = l;
                    (this.props = e),
                        (this.events = t),
                        (this.document = (0, v.TW)(i)),
                        (this.documentListeners = new en(this.document)),
                        (this.listeners = new en(n)),
                        (this.windowListeners = new en((0, v.zk)(i))),
                        (this.initialCoordinates = null != (r = (0, v.e_)(l)) ? r : M),
                        (this.handleStart = this.handleStart.bind(this)),
                        (this.handleMove = this.handleMove.bind(this)),
                        (this.handleEnd = this.handleEnd.bind(this)),
                        (this.handleCancel = this.handleCancel.bind(this)),
                        (this.handleKeydown = this.handleKeydown.bind(this)),
                        (this.removeTextSelection = this.removeTextSelection.bind(this)),
                        this.attach();
                }
                attach() {
                    let {
                        events: e,
                        props: {
                            options: { activationConstraint: t, bypassActivationConstraint: n },
                        },
                    } = this;
                    if (
                        (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }),
                        this.listeners.add(e.end.name, this.handleEnd),
                        this.windowListeners.add(a.Resize, this.handleCancel),
                        this.windowListeners.add(a.DragStart, el),
                        this.windowListeners.add(a.VisibilityChange, this.handleCancel),
                        this.windowListeners.add(a.ContextMenu, el),
                        this.documentListeners.add(a.Keydown, this.handleKeydown),
                        t)
                    ) {
                        if (null != n && n({ event: this.props.event, activeNode: this.props.activeNode, options: this.props.options })) return this.handleStart();
                        if (ec(t)) {
                            this.timeoutId = setTimeout(this.handleStart, t.delay);
                            return;
                        }
                        if (es(t)) return;
                    }
                    this.handleStart();
                }
                detach() {
                    this.listeners.removeAll(),
                        this.windowListeners.removeAll(),
                        setTimeout(this.documentListeners.removeAll, 50),
                        null !== this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = null));
                }
                handleStart() {
                    let { initialCoordinates: e } = this,
                        { onStart: t } = this.props;
                    e &&
                        ((this.activated = !0),
                        this.documentListeners.add(a.Click, ei, { capture: !0 }),
                        this.removeTextSelection(),
                        this.documentListeners.add(a.SelectionChange, this.removeTextSelection),
                        t(e));
                }
                handleMove(e) {
                    var t;
                    let { activated: n, initialCoordinates: r, props: l } = this,
                        {
                            onMove: i,
                            options: { activationConstraint: a },
                        } = l;
                    if (!r) return;
                    let o = null != (t = (0, v.e_)(e)) ? t : M,
                        u = (0, v.Re)(r, o);
                    if (!n && a) {
                        if (es(a)) {
                            if (null != a.tolerance && er(u, a.tolerance)) return this.handleCancel();
                            if (er(u, a.distance)) return this.handleStart();
                        }
                        return ec(a) && er(u, a.tolerance) ? this.handleCancel() : void 0;
                    }
                    e.cancelable && e.preventDefault(), i(o);
                }
                handleEnd() {
                    let { onEnd: e } = this.props;
                    this.detach(), e();
                }
                handleCancel() {
                    let { onCancel: e } = this.props;
                    this.detach(), e();
                }
                handleKeydown(e) {
                    e.code === o.Esc && this.handleCancel();
                }
                removeTextSelection() {
                    var e;
                    null == (e = this.document.getSelection()) || e.removeAllRanges();
                }
            }
            let ef = { move: { name: 'pointermove' }, end: { name: 'pointerup' } };
            class eh extends ed {
                constructor(e) {
                    let { event: t } = e;
                    super(e, ef, (0, v.TW)(t.target));
                }
            }
            eh.activators = [
                {
                    eventName: 'onPointerDown',
                    handler: (e, t) => {
                        let { nativeEvent: n } = e,
                            { onActivation: r } = t;
                        return !!n.isPrimary && 0 === n.button && (null == r || r({ event: n }), !0);
                    },
                },
            ];
            let eg = { move: { name: 'mousemove' }, end: { name: 'mouseup' } };
            !(function (e) {
                e[(e.RightClick = 2)] = 'RightClick';
            })(u || (u = {}));
            class ep extends ed {
                constructor(e) {
                    super(e, eg, (0, v.TW)(e.event.target));
                }
            }
            ep.activators = [
                {
                    eventName: 'onMouseDown',
                    handler: (e, t) => {
                        let { nativeEvent: n } = e,
                            { onActivation: r } = t;
                        return n.button !== u.RightClick && (null == r || r({ event: n }), !0);
                    },
                },
            ];
            let ev = { move: { name: 'touchmove' }, end: { name: 'touchend' } };
            class eb extends ed {
                constructor(e) {
                    super(e, ev);
                }
                static setup() {
                    return (
                        window.addEventListener(ev.move.name, e, { capture: !1, passive: !1 }),
                        function () {
                            window.removeEventListener(ev.move.name, e);
                        }
                    );
                    function e() {}
                }
            }
            (eb.activators = [
                {
                    eventName: 'onTouchStart',
                    handler: (e, t) => {
                        let { nativeEvent: n } = e,
                            { onActivation: r } = t,
                            { touches: l } = n;
                        return !(l.length > 1) && (null == r || r({ event: n }), !0);
                    },
                },
            ]),
                (function (e) {
                    (e[(e.Pointer = 0)] = 'Pointer'), (e[(e.DraggableRect = 1)] = 'DraggableRect');
                })(s || (s = {})),
                (function (e) {
                    (e[(e.TreeOrder = 0)] = 'TreeOrder'), (e[(e.ReversedTreeOrder = 1)] = 'ReversedTreeOrder');
                })(c || (c = {}));
            let em = { x: { [i.Backward]: !1, [i.Forward]: !1 }, y: { [i.Backward]: !1, [i.Forward]: !1 } };
            !(function (e) {
                (e[(e.Always = 0)] = 'Always'), (e[(e.BeforeDragging = 1)] = 'BeforeDragging'), (e[(e.WhileDragging = 2)] = 'WhileDragging');
            })(d || (d = {})),
                ((f || (f = {})).Optimized = 'optimized');
            let ey = new Map();
            function ew(e, t) {
                return (0, v.KG)((n) => (e ? n || ('function' == typeof t ? t(e) : e) : null), [t, e]);
            }
            function ex(e) {
                let { callback: t, disabled: n } = e,
                    r = (0, v._q)(t),
                    l = (0, g.useMemo)(() => {
                        if (n || 'undefined' == typeof window || void 0 === window.ResizeObserver) return;
                        let { ResizeObserver: e } = window;
                        return new e(r);
                    }, [n]);
                return (0, g.useEffect)(() => () => (null == l ? void 0 : l.disconnect()), [l]), l;
            }
            function eE(e) {
                return new et(F(e), e);
            }
            function eD(e, t, n) {
                void 0 === t && (t = eE);
                let [r, l] = (0, g.useReducer)(function (r) {
                        if (!e) return null;
                        if (!1 === e.isConnected) {
                            var l;
                            return null != (l = null != r ? r : n) ? l : null;
                        }
                        let i = t(e);
                        return JSON.stringify(r) === JSON.stringify(i) ? r : i;
                    }, null),
                    i = (function (e) {
                        let { callback: t, disabled: n } = e,
                            r = (0, v._q)(t),
                            l = (0, g.useMemo)(() => {
                                if (n || 'undefined' == typeof window || void 0 === window.MutationObserver) return;
                                let { MutationObserver: e } = window;
                                return new e(r);
                            }, [r, n]);
                        return (0, g.useEffect)(() => () => (null == l ? void 0 : l.disconnect()), [l]), l;
                    })({
                        callback(t) {
                            if (e)
                                for (let n of t) {
                                    let { type: t, target: r } = n;
                                    if ('childList' === t && r instanceof HTMLElement && r.contains(e)) {
                                        l();
                                        break;
                                    }
                                }
                        },
                    }),
                    a = ex({ callback: l });
                return (
                    (0, v.Es)(() => {
                        l(),
                            e
                                ? (null == a || a.observe(e), null == i || i.observe(document.body, { childList: !0, subtree: !0 }))
                                : (null == a || a.disconnect(), null == i || i.disconnect());
                    }, [e]),
                    r
                );
            }
            let eC = [];
            function eS(e, t) {
                void 0 === t && (t = []);
                let n = (0, g.useRef)(null);
                return (
                    (0, g.useEffect)(() => {
                        n.current = null;
                    }, t),
                    (0, g.useEffect)(() => {
                        let t = e !== M;
                        t && !n.current && (n.current = e), !t && n.current && (n.current = null);
                    }, [e]),
                    n.current ? (0, v.Re)(e, n.current) : M
                );
            }
            function eR(e) {
                return (0, g.useMemo)(
                    () =>
                        e
                            ? (function (e) {
                                  let t = e.innerWidth,
                                      n = e.innerHeight;
                                  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
                              })(e)
                            : null,
                    [e],
                );
            }
            let eM = [];
            function ek(e) {
                if (!e) return null;
                if (e.children.length > 1) return e;
                let t = e.children[0];
                return (0, v.sb)(t) ? t : e;
            }
            let eT = [
                    { sensor: eh, options: {} },
                    { sensor: eu, options: {} },
                ],
                eL = { current: {} },
                eO = { draggable: { measure: j }, droppable: { measure: j, strategy: d.WhileDragging, frequency: f.Optimized }, dragOverlay: { measure: F } };
            class eN extends Map {
                get(e) {
                    var t;
                    return null != e && null != (t = super.get(e)) ? t : void 0;
                }
                toArray() {
                    return Array.from(this.values());
                }
                getEnabled() {
                    return this.toArray().filter((e) => {
                        let { disabled: t } = e;
                        return !t;
                    });
                }
                getNodeFor(e) {
                    var t, n;
                    return null != (t = null == (n = this.get(e)) ? void 0 : n.node.current) ? t : void 0;
                }
            }
            let eI = {
                    activatorEvent: null,
                    active: null,
                    activeNode: null,
                    activeNodeRect: null,
                    collisions: null,
                    containerNodeRect: null,
                    draggableNodes: new Map(),
                    droppableRects: new Map(),
                    droppableContainers: new eN(),
                    over: null,
                    dragOverlay: { nodeRef: { current: null }, rect: null, setRef: C },
                    scrollableAncestors: [],
                    scrollableAncestorRects: [],
                    measuringConfiguration: eO,
                    measureDroppableContainers: C,
                    windowRect: null,
                    measuringScheduled: !1,
                },
                ez = {
                    activatorEvent: null,
                    activators: [],
                    active: null,
                    activeNodeRect: null,
                    ariaDescribedById: { draggable: '' },
                    dispatch: C,
                    draggableNodes: new Map(),
                    over: null,
                    measureDroppableContainers: C,
                },
                eA = (0, g.createContext)(ez),
                eY = (0, g.createContext)(eI);
            function eP() {
                return {
                    draggable: { active: null, initialCoordinates: { x: 0, y: 0 }, nodes: new Map(), translate: { x: 0, y: 0 } },
                    droppable: { containers: new eN() },
                };
            }
            function eW(e, t) {
                switch (t.type) {
                    case l.DragStart:
                        return { ...e, draggable: { ...e.draggable, initialCoordinates: t.initialCoordinates, active: t.active } };
                    case l.DragMove:
                        if (!e.draggable.active) return e;
                        return {
                            ...e,
                            draggable: {
                                ...e.draggable,
                                translate: { x: t.coordinates.x - e.draggable.initialCoordinates.x, y: t.coordinates.y - e.draggable.initialCoordinates.y },
                            },
                        };
                    case l.DragEnd:
                    case l.DragCancel:
                        return { ...e, draggable: { ...e.draggable, active: null, initialCoordinates: { x: 0, y: 0 }, translate: { x: 0, y: 0 } } };
                    case l.RegisterDroppable: {
                        let { element: n } = t,
                            { id: r } = n,
                            l = new eN(e.droppable.containers);
                        return l.set(r, n), { ...e, droppable: { ...e.droppable, containers: l } };
                    }
                    case l.SetDroppableDisabled: {
                        let { id: n, key: r, disabled: l } = t,
                            i = e.droppable.containers.get(n);
                        if (!i || r !== i.key) return e;
                        let a = new eN(e.droppable.containers);
                        return a.set(n, { ...i, disabled: l }), { ...e, droppable: { ...e.droppable, containers: a } };
                    }
                    case l.UnregisterDroppable: {
                        let { id: n, key: r } = t,
                            l = e.droppable.containers.get(n);
                        if (!l || r !== l.key) return e;
                        let i = new eN(e.droppable.containers);
                        return i.delete(n), { ...e, droppable: { ...e.droppable, containers: i } };
                    }
                    default:
                        return e;
                }
            }
            function eB(e) {
                let { disabled: t } = e,
                    { active: n, activatorEvent: r, draggableNodes: l } = (0, g.useContext)(eA),
                    i = (0, v.ZC)(r),
                    a = (0, v.ZC)(null == n ? void 0 : n.id);
                return (
                    (0, g.useEffect)(() => {
                        if (!t && !r && i && null != a) {
                            if (!(0, v.kx)(i) || document.activeElement === i.target) return;
                            let e = l.get(a);
                            if (!e) return;
                            let { activatorNode: t, node: n } = e;
                            (t.current || n.current) &&
                                requestAnimationFrame(() => {
                                    for (let e of [t.current, n.current]) {
                                        if (!e) continue;
                                        let t = (0, v.ag)(e);
                                        if (t) {
                                            t.focus();
                                            break;
                                        }
                                    }
                                });
                        }
                    }, [r, t, l, a, i]),
                    null
                );
            }
            function eK(e, t) {
                let { transform: n, ...r } = t;
                return null != e && e.length ? e.reduce((e, t) => t({ transform: e, ...r }), n) : n;
            }
            let eF = (0, g.createContext)({ ...M, scaleX: 1, scaleY: 1 });
            !(function (e) {
                (e[(e.Uninitialized = 0)] = 'Uninitialized'), (e[(e.Initializing = 1)] = 'Initializing'), (e[(e.Initialized = 2)] = 'Initialized');
            })(h || (h = {}));
            let ej = (0, g.memo)(function (e) {
                    var t, n, r, a, o, u;
                    let { id: f, accessibility: b, autoScroll: m = !0, children: y, sensors: x = eT, collisionDetection: E = Y, measuring: C, modifiers: S, ...R } = e,
                        [k, T] = (0, g.useReducer)(eW, void 0, eP),
                        [L, O] = (function () {
                            let [e] = (0, g.useState)(() => new Set()),
                                t = (0, g.useCallback)((t) => (e.add(t), () => e.delete(t)), [e]);
                            return [
                                (0, g.useCallback)(
                                    (t) => {
                                        let { type: n, event: r } = t;
                                        e.forEach((e) => {
                                            var t;
                                            return null == (t = e[n]) ? void 0 : t.call(e, r);
                                        });
                                    },
                                    [e],
                                ),
                                t,
                            ];
                        })(),
                        [I, z] = (0, g.useState)(h.Uninitialized),
                        A = I === h.Initialized,
                        {
                            draggable: { active: B, nodes: K, translate: j },
                            droppable: { containers: G },
                        } = k,
                        q = B ? K.get(B) : null,
                        $ = (0, g.useRef)({ initial: null, translated: null }),
                        ee = (0, g.useMemo)(() => {
                            var e;
                            return null != B ? { id: B, data: null != (e = null == q ? void 0 : q.data) ? e : eL, rect: $ } : null;
                        }, [B, q]),
                        en = (0, g.useRef)(null),
                        [er, el] = (0, g.useState)(null),
                        [ei, ea] = (0, g.useState)(null),
                        eo = (0, v.YN)(R, Object.values(R)),
                        eu = (0, v.YG)('DndDescribedBy', f),
                        es = (0, g.useMemo)(() => G.getEnabled(), [G]),
                        ec = (0, g.useMemo)(
                            () => ({
                                draggable: { ...eO.draggable, ...(null == C ? void 0 : C.draggable) },
                                droppable: { ...eO.droppable, ...(null == C ? void 0 : C.droppable) },
                                dragOverlay: { ...eO.dragOverlay, ...(null == C ? void 0 : C.dragOverlay) },
                            }),
                            [null == C ? void 0 : C.draggable, null == C ? void 0 : C.droppable, null == C ? void 0 : C.dragOverlay],
                        ),
                        {
                            droppableRects: ed,
                            measureDroppableContainers: ef,
                            measuringScheduled: eh,
                        } = (function (e, t) {
                            let { dragging: n, dependencies: r, config: l } = t,
                                [i, a] = (0, g.useState)(null),
                                { frequency: o, measure: u, strategy: s } = l,
                                c = (0, g.useRef)(e),
                                f = (function () {
                                    switch (s) {
                                        case d.Always:
                                            return !1;
                                        case d.BeforeDragging:
                                            return n;
                                        default:
                                            return !n;
                                    }
                                })(),
                                h = (0, v.YN)(f),
                                p = (0, g.useCallback)(
                                    function (e) {
                                        void 0 === e && (e = []), h.current || a((t) => (null === t ? e : t.concat(e.filter((e) => !t.includes(e)))));
                                    },
                                    [h],
                                ),
                                b = (0, g.useRef)(null),
                                m = (0, v.KG)(
                                    (t) => {
                                        if (f && !n) return ey;
                                        if (!t || t === ey || c.current !== e || null != i) {
                                            let t = new Map();
                                            for (let n of e) {
                                                if (!n) continue;
                                                if (i && i.length > 0 && !i.includes(n.id) && n.rect.current) {
                                                    t.set(n.id, n.rect.current);
                                                    continue;
                                                }
                                                let e = n.node.current,
                                                    r = e ? new et(u(e), e) : null;
                                                (n.rect.current = r), r && t.set(n.id, r);
                                            }
                                            return t;
                                        }
                                        return t;
                                    },
                                    [e, i, n, f, u],
                                );
                            return (
                                (0, g.useEffect)(() => {
                                    c.current = e;
                                }, [e]),
                                (0, g.useEffect)(() => {
                                    f || p();
                                }, [n, f]),
                                (0, g.useEffect)(() => {
                                    i && i.length > 0 && a(null);
                                }, [JSON.stringify(i)]),
                                (0, g.useEffect)(() => {
                                    f ||
                                        'number' != typeof o ||
                                        null !== b.current ||
                                        (b.current = setTimeout(() => {
                                            p(), (b.current = null);
                                        }, o));
                                }, [o, f, p, ...r]),
                                { droppableRects: m, measureDroppableContainers: p, measuringScheduled: null != i }
                            );
                        })(es, { dragging: A, dependencies: [j.x, j.y], config: ec.droppable }),
                        eg = (function (e, t) {
                            let n = null !== t ? e.get(t) : void 0,
                                r = n ? n.node.current : null;
                            return (0, v.KG)(
                                (e) => {
                                    var n;
                                    return null === t ? null : null != (n = null != r ? r : e) ? n : null;
                                },
                                [r, t],
                            );
                        })(K, B),
                        ep = (0, g.useMemo)(() => (ei ? (0, v.e_)(ei) : null), [ei]),
                        ev = (function () {
                            let e = (null == er ? void 0 : er.autoScrollEnabled) === !1,
                                t = 'object' == typeof m ? !1 === m.enabled : !1 === m,
                                n = A && !e && !t;
                            return 'object' == typeof m ? { ...m, enabled: n } : { enabled: n };
                        })(),
                        eb = ew(eg, ec.draggable.measure);
                    !(function (e) {
                        let { activeNode: t, measure: n, initialRect: r, config: l = !0 } = e,
                            i = (0, g.useRef)(!1),
                            { x: a, y: o } = 'boolean' == typeof l ? { x: l, y: l } : l;
                        (0, v.Es)(() => {
                            if ((!a && !o) || !t) {
                                i.current = !1;
                                return;
                            }
                            if (i.current || !r) return;
                            let e = null == t ? void 0 : t.node.current;
                            if (!e || !1 === e.isConnected) return;
                            let l = P(n(e), r);
                            if ((a || (l.x = 0), o || (l.y = 0), (i.current = !0), Math.abs(l.x) > 0 || Math.abs(l.y) > 0)) {
                                let t = U(e);
                                t && t.scrollBy({ top: l.y, left: l.x });
                            }
                        }, [t, a, o, r, n]);
                    })({ activeNode: B ? K.get(B) : null, config: ev.layoutShiftCompensation, initialRect: eb, measure: ec.draggable.measure });
                    let eE = eD(eg, ec.draggable.measure, eb),
                        eN = eD(eg ? eg.parentElement : null),
                        eI = (0, g.useRef)({
                            activatorEvent: null,
                            active: null,
                            activeNode: eg,
                            collisionRect: null,
                            collisions: null,
                            droppableRects: ed,
                            draggableNodes: K,
                            draggingNode: null,
                            draggingNodeRect: null,
                            droppableContainers: G,
                            over: null,
                            scrollableAncestors: [],
                            scrollAdjustedTranslate: null,
                        }),
                        ez = G.getNodeFor(null == (t = eI.current.over) ? void 0 : t.id),
                        ej = (function (e) {
                            let { measure: t } = e,
                                [n, r] = (0, g.useState)(null),
                                l = ex({
                                    callback: (0, g.useCallback)(
                                        (e) => {
                                            for (let { target: n } of e)
                                                if ((0, v.sb)(n)) {
                                                    r((e) => {
                                                        let r = t(n);
                                                        return e ? { ...e, width: r.width, height: r.height } : r;
                                                    });
                                                    break;
                                                }
                                        },
                                        [t],
                                    ),
                                }),
                                i = (0, g.useCallback)(
                                    (e) => {
                                        let n = ek(e);
                                        null == l || l.disconnect(), n && (null == l || l.observe(n)), r(n ? t(n) : null);
                                    },
                                    [t, l],
                                ),
                                [a, o] = (0, v.lk)(i);
                            return (0, g.useMemo)(() => ({ nodeRef: a, rect: n, setRef: o }), [n, a, o]);
                        })({ measure: ec.dragOverlay.measure }),
                        eX = null != (n = ej.nodeRef.current) ? n : eg,
                        eU = A ? (null != (r = ej.rect) ? r : eE) : null,
                        e_ = !!(ej.nodeRef.current && ej.rect),
                        eG = (function (e) {
                            let t = ew(e);
                            return P(e, t);
                        })(e_ ? null : eE),
                        eq = eR(eX ? (0, v.zk)(eX) : null),
                        eH = (function (e) {
                            let t = (0, g.useRef)(e),
                                n = (0, v.KG)((n) => (e ? (n && n !== eC && e && t.current && e.parentNode === t.current.parentNode ? n : X(e)) : eC), [e]);
                            return (
                                (0, g.useEffect)(() => {
                                    t.current = e;
                                }, [e]),
                                n
                            );
                        })(A ? (null != ez ? ez : eg) : null),
                        eJ = (function (e, t) {
                            void 0 === t && (t = F);
                            let [n] = e,
                                r = eR(n ? (0, v.zk)(n) : null),
                                [l, i] = (0, g.useReducer)(function () {
                                    return e.length ? e.map((e) => (J(e) ? r : new et(t(e), e))) : eM;
                                }, eM),
                                a = ex({ callback: i });
                            return (
                                e.length > 0 && l === eM && i(),
                                (0, v.Es)(() => {
                                    e.length ? e.forEach((e) => (null == a ? void 0 : a.observe(e))) : (null == a || a.disconnect(), i());
                                }, [e]),
                                l
                            );
                        })(eH),
                        eV = eK(S, {
                            transform: { x: j.x - eG.x, y: j.y - eG.y, scaleX: 1, scaleY: 1 },
                            activatorEvent: ei,
                            active: ee,
                            activeNodeRect: eE,
                            containerNodeRect: eN,
                            draggingNodeRect: eU,
                            over: eI.current.over,
                            overlayNodeRect: ej.rect,
                            scrollableAncestors: eH,
                            scrollableAncestorRects: eJ,
                            windowRect: eq,
                        }),
                        eQ = ep ? (0, v.WQ)(ep, j) : null,
                        eZ = (function (e) {
                            let [t, n] = (0, g.useState)(null),
                                r = (0, g.useRef)(e),
                                l = (0, g.useCallback)((e) => {
                                    let t = _(e.target);
                                    t && n((e) => (e ? (e.set(t, H(t)), new Map(e)) : null));
                                }, []);
                            return (
                                (0, g.useEffect)(() => {
                                    let t = r.current;
                                    if (e !== t) {
                                        i(t);
                                        let a = e
                                            .map((e) => {
                                                let t = _(e);
                                                return t ? (t.addEventListener('scroll', l, { passive: !0 }), [t, H(t)]) : null;
                                            })
                                            .filter((e) => null != e);
                                        n(a.length ? new Map(a) : null), (r.current = e);
                                    }
                                    return () => {
                                        i(e), i(t);
                                    };
                                    function i(e) {
                                        e.forEach((e) => {
                                            let t = _(e);
                                            null == t || t.removeEventListener('scroll', l);
                                        });
                                    }
                                }, [l, e]),
                                (0, g.useMemo)(() => (e.length ? (t ? Array.from(t.values()).reduce((e, t) => (0, v.WQ)(e, t), M) : Z(e)) : M), [e, t])
                            );
                        })(eH),
                        e$ = eS(eZ),
                        e0 = eS(eZ, [eE]),
                        e1 = (0, v.WQ)(eV, e$),
                        e2 = eU ? W(eU, eV) : null,
                        e5 = ee && e2 ? E({ active: ee, collisionRect: e2, droppableRects: ed, droppableContainers: es, pointerCoordinates: eQ }) : null,
                        e8 = N(e5, 'id'),
                        [e9, e6] = (0, g.useState)(null),
                        e3 =
                            ((o = e_ ? eV : (0, v.WQ)(eV, e0)),
                            (u = null != (a = null == e9 ? void 0 : e9.rect) ? a : null),
                            { ...o, scaleX: u && eE ? u.width / eE.width : 1, scaleY: u && eE ? u.height / eE.height : 1 }),
                        e4 = (0, g.useCallback)(
                            (e, t) => {
                                let { sensor: n, options: r } = t;
                                if (null == en.current) return;
                                let i = K.get(en.current);
                                if (!i) return;
                                let a = e.nativeEvent,
                                    o = new n({
                                        active: en.current,
                                        activeNode: i,
                                        event: a,
                                        options: r,
                                        context: eI,
                                        onStart(e) {
                                            let t = en.current;
                                            if (null == t) return;
                                            let n = K.get(t);
                                            if (!n) return;
                                            let { onDragStart: r } = eo.current,
                                                i = { active: { id: t, data: n.data, rect: $ } };
                                            (0, p.unstable_batchedUpdates)(() => {
                                                null == r || r(i),
                                                    z(h.Initializing),
                                                    T({ type: l.DragStart, initialCoordinates: e, active: t }),
                                                    L({ type: 'onDragStart', event: i });
                                            });
                                        },
                                        onMove(e) {
                                            T({ type: l.DragMove, coordinates: e });
                                        },
                                        onEnd: u(l.DragEnd),
                                        onCancel: u(l.DragCancel),
                                    });
                                function u(e) {
                                    return async function () {
                                        let { active: t, collisions: n, over: r, scrollAdjustedTranslate: i } = eI.current,
                                            o = null;
                                        if (t && i) {
                                            let { cancelDrop: u } = eo.current;
                                            (o = { activatorEvent: a, active: t, collisions: n, delta: i, over: r }),
                                                e === l.DragEnd && 'function' == typeof u && (await Promise.resolve(u(o))) && (e = l.DragCancel);
                                        }
                                        (en.current = null),
                                            (0, p.unstable_batchedUpdates)(() => {
                                                T({ type: e }), z(h.Uninitialized), e6(null), el(null), ea(null);
                                                let t = e === l.DragEnd ? 'onDragEnd' : 'onDragCancel';
                                                if (o) {
                                                    let e = eo.current[t];
                                                    null == e || e(o), L({ type: t, event: o });
                                                }
                                            });
                                    };
                                }
                                (0, p.unstable_batchedUpdates)(() => {
                                    el(o), ea(e.nativeEvent);
                                });
                            },
                            [K],
                        ),
                        e7 = (0, g.useCallback)(
                            (e, t) => (n, r) => {
                                let l = n.nativeEvent,
                                    i = K.get(r);
                                null !== en.current ||
                                    !i ||
                                    l.dndKit ||
                                    l.defaultPrevented ||
                                    (!0 === e(n, t.options, { active: i }) && ((l.dndKit = { capturedBy: t.sensor }), (en.current = r), e4(n, t)));
                            },
                            [K, e4],
                        ),
                        te = (0, g.useMemo)(
                            () =>
                                x.reduce((e, t) => {
                                    let { sensor: n } = t;
                                    return [...e, ...n.activators.map((e) => ({ eventName: e.eventName, handler: e7(e.handler, t) }))];
                                }, []),
                            [x, e7],
                        );
                    (0, g.useEffect)(
                        () => {
                            if (!v.Sw) return;
                            let e = x.map((e) => {
                                let { sensor: t } = e;
                                return null == t.setup ? void 0 : t.setup();
                            });
                            return () => {
                                for (let t of e) null == t || t();
                            };
                        },
                        x.map((e) => {
                            let { sensor: t } = e;
                            return t;
                        }),
                    ),
                        (0, v.Es)(() => {
                            eE && I === h.Initializing && z(h.Initialized);
                        }, [eE, I]),
                        (0, g.useEffect)(() => {
                            let { onDragMove: e } = eo.current,
                                { active: t, activatorEvent: n, collisions: r, over: l } = eI.current;
                            if (!t || !n) return;
                            let i = { active: t, activatorEvent: n, collisions: r, delta: { x: e1.x, y: e1.y }, over: l };
                            (0, p.unstable_batchedUpdates)(() => {
                                null == e || e(i), L({ type: 'onDragMove', event: i });
                            });
                        }, [e1.x, e1.y]),
                        (0, g.useEffect)(() => {
                            let { active: e, activatorEvent: t, collisions: n, droppableContainers: r, scrollAdjustedTranslate: l } = eI.current;
                            if (!e || null == en.current || !t || !l) return;
                            let { onDragOver: i } = eo.current,
                                a = r.get(e8),
                                o = a && a.rect.current ? { id: a.id, rect: a.rect.current, data: a.data, disabled: a.disabled } : null,
                                u = { active: e, activatorEvent: t, collisions: n, delta: { x: l.x, y: l.y }, over: o };
                            (0, p.unstable_batchedUpdates)(() => {
                                e6(o), null == i || i(u), L({ type: 'onDragOver', event: u });
                            });
                        }, [e8]),
                        (0, v.Es)(() => {
                            (eI.current = {
                                activatorEvent: ei,
                                active: ee,
                                activeNode: eg,
                                collisionRect: e2,
                                collisions: e5,
                                droppableRects: ed,
                                draggableNodes: K,
                                draggingNode: eX,
                                draggingNodeRect: eU,
                                droppableContainers: G,
                                over: e9,
                                scrollableAncestors: eH,
                                scrollAdjustedTranslate: e1,
                            }),
                                ($.current = { initial: eU, translated: e2 });
                        }, [ee, eg, e5, e2, K, eX, eU, ed, G, e9, eH, e1]),
                        (function (e) {
                            let {
                                    acceleration: t,
                                    activator: n = s.Pointer,
                                    canScroll: r,
                                    draggingRect: l,
                                    enabled: a,
                                    interval: o = 5,
                                    order: u = c.TreeOrder,
                                    pointerCoordinates: d,
                                    scrollableAncestors: f,
                                    scrollableAncestorRects: h,
                                    delta: p,
                                    threshold: b,
                                } = e,
                                m = (function (e) {
                                    let { delta: t, disabled: n } = e,
                                        r = (0, v.ZC)(t);
                                    return (0, v.KG)(
                                        (e) => {
                                            if (n || !r || !e) return em;
                                            let l = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
                                            return {
                                                x: { [i.Backward]: e.x[i.Backward] || -1 === l.x, [i.Forward]: e.x[i.Forward] || 1 === l.x },
                                                y: { [i.Backward]: e.y[i.Backward] || -1 === l.y, [i.Forward]: e.y[i.Forward] || 1 === l.y },
                                            };
                                        },
                                        [n, t, r],
                                    );
                                })({ delta: p, disabled: !a }),
                                [y, w] = (0, v.$$)(),
                                x = (0, g.useRef)({ x: 0, y: 0 }),
                                E = (0, g.useRef)({ x: 0, y: 0 }),
                                D = (0, g.useMemo)(() => {
                                    switch (n) {
                                        case s.Pointer:
                                            return d ? { top: d.y, bottom: d.y, left: d.x, right: d.x } : null;
                                        case s.DraggableRect:
                                            return l;
                                    }
                                }, [n, l, d]),
                                C = (0, g.useRef)(null),
                                S = (0, g.useCallback)(() => {
                                    let e = C.current;
                                    if (!e) return;
                                    let t = x.current.x * E.current.x,
                                        n = x.current.y * E.current.y;
                                    e.scrollBy(t, n);
                                }, []),
                                R = (0, g.useMemo)(() => (u === c.TreeOrder ? [...f].reverse() : f), [u, f]);
                            (0, g.useEffect)(() => {
                                if (!a || !f.length || !D) return void w();
                                for (let e of R) {
                                    if ((null == r ? void 0 : r(e)) === !1) continue;
                                    let n = h[f.indexOf(e)];
                                    if (!n) continue;
                                    let { direction: l, speed: a } = (function (e, t, n, r, l) {
                                        let { top: a, left: o, right: u, bottom: s } = n;
                                        void 0 === r && (r = 10), void 0 === l && (l = Q);
                                        let { isTop: c, isBottom: d, isLeft: f, isRight: h } = V(e),
                                            g = { x: 0, y: 0 },
                                            p = { x: 0, y: 0 },
                                            v = { height: t.height * l.y, width: t.width * l.x };
                                        return (
                                            !c && a <= t.top + v.height
                                                ? ((g.y = i.Backward), (p.y = r * Math.abs((t.top + v.height - a) / v.height)))
                                                : !d && s >= t.bottom - v.height && ((g.y = i.Forward), (p.y = r * Math.abs((t.bottom - v.height - s) / v.height))),
                                            !h && u >= t.right - v.width
                                                ? ((g.x = i.Forward), (p.x = r * Math.abs((t.right - v.width - u) / v.width)))
                                                : !f && o <= t.left + v.width && ((g.x = i.Backward), (p.x = r * Math.abs((t.left + v.width - o) / v.width))),
                                            { direction: g, speed: p }
                                        );
                                    })(e, n, D, t, b);
                                    for (let e of ['x', 'y']) m[e][l[e]] || ((a[e] = 0), (l[e] = 0));
                                    if (a.x > 0 || a.y > 0) {
                                        w(), (C.current = e), y(S, o), (x.current = a), (E.current = l);
                                        return;
                                    }
                                }
                                (x.current = { x: 0, y: 0 }), (E.current = { x: 0, y: 0 }), w();
                            }, [t, S, r, w, a, o, JSON.stringify(D), JSON.stringify(m), y, f, R, h, JSON.stringify(b)]);
                        })({ ...ev, delta: j, draggingRect: e2, pointerCoordinates: eQ, scrollableAncestors: eH, scrollableAncestorRects: eJ });
                    let tt = (0, g.useMemo)(
                            () => ({
                                active: ee,
                                activeNode: eg,
                                activeNodeRect: eE,
                                activatorEvent: ei,
                                collisions: e5,
                                containerNodeRect: eN,
                                dragOverlay: ej,
                                draggableNodes: K,
                                droppableContainers: G,
                                droppableRects: ed,
                                over: e9,
                                measureDroppableContainers: ef,
                                scrollableAncestors: eH,
                                scrollableAncestorRects: eJ,
                                measuringConfiguration: ec,
                                measuringScheduled: eh,
                                windowRect: eq,
                            }),
                            [ee, eg, eE, ei, e5, eN, ej, K, G, ed, e9, ef, eH, eJ, ec, eh, eq],
                        ),
                        tn = (0, g.useMemo)(
                            () => ({
                                activatorEvent: ei,
                                activators: te,
                                active: ee,
                                activeNodeRect: eE,
                                ariaDescribedById: { draggable: eu },
                                dispatch: T,
                                draggableNodes: K,
                                over: e9,
                                measureDroppableContainers: ef,
                            }),
                            [ei, te, ee, eE, T, eu, K, e9, ef],
                        );
                    return g.createElement(
                        w.Provider,
                        { value: O },
                        g.createElement(
                            eA.Provider,
                            { value: tn },
                            g.createElement(eY.Provider, { value: tt }, g.createElement(eF.Provider, { value: e3 }, y)),
                            g.createElement(eB, { disabled: (null == b ? void 0 : b.restoreFocus) === !1 }),
                        ),
                        g.createElement(D, { ...b, hiddenTextDescribedById: eu }),
                    );
                }),
                eX = (0, g.createContext)(null),
                eU = 'button';
            function e_(e) {
                let { id: t, data: n, disabled: r = !1, attributes: l } = e,
                    i = (0, v.YG)('Droppable'),
                    { activators: a, activatorEvent: o, active: u, activeNodeRect: s, ariaDescribedById: c, draggableNodes: d, over: f } = (0, g.useContext)(eA),
                    { role: h = eU, roleDescription: p = 'draggable', tabIndex: b = 0 } = null != l ? l : {},
                    m = (null == u ? void 0 : u.id) === t,
                    y = (0, g.useContext)(m ? eF : eX),
                    [w, x] = (0, v.lk)(),
                    [E, D] = (0, v.lk)(),
                    C = (0, g.useMemo)(
                        () =>
                            a.reduce((e, n) => {
                                let { eventName: r, handler: l } = n;
                                return (
                                    (e[r] = (e) => {
                                        l(e, t);
                                    }),
                                    e
                                );
                            }, {}),
                        [a, t],
                    ),
                    S = (0, v.YN)(n);
                return (
                    (0, v.Es)(
                        () => (
                            d.set(t, { id: t, key: i, node: w, activatorNode: E, data: S }),
                            () => {
                                let e = d.get(t);
                                e && e.key === i && d.delete(t);
                            }
                        ),
                        [d, t],
                    ),
                    {
                        active: u,
                        activatorEvent: o,
                        activeNodeRect: s,
                        attributes: (0, g.useMemo)(
                            () => ({
                                role: h,
                                tabIndex: b,
                                'aria-disabled': r,
                                'aria-pressed': (!!m && h === eU) || void 0,
                                'aria-roledescription': p,
                                'aria-describedby': c.draggable,
                            }),
                            [r, h, b, m, p, c.draggable],
                        ),
                        isDragging: m,
                        listeners: r ? void 0 : C,
                        node: w,
                        over: f,
                        setNodeRef: x,
                        setActivatorNodeRef: D,
                        transform: y,
                    }
                );
            }
            function eG() {
                return (0, g.useContext)(eY);
            }
            let eq = { timeout: 25 };
            function eH(e) {
                let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e,
                    a = (0, v.YG)('Droppable'),
                    { active: o, dispatch: u, over: s, measureDroppableContainers: c } = (0, g.useContext)(eA),
                    d = (0, g.useRef)({ disabled: n }),
                    f = (0, g.useRef)(!1),
                    h = (0, g.useRef)(null),
                    p = (0, g.useRef)(null),
                    { disabled: b, updateMeasurementsFor: m, timeout: y } = { ...eq, ...i },
                    w = (0, v.YN)(null != m ? m : r),
                    x = ex({
                        callback: (0, g.useCallback)(() => {
                            if (!f.current) {
                                f.current = !0;
                                return;
                            }
                            null != p.current && clearTimeout(p.current),
                                (p.current = setTimeout(() => {
                                    c(Array.isArray(w.current) ? w.current : [w.current]), (p.current = null);
                                }, y));
                        }, [y]),
                        disabled: b || !o,
                    }),
                    E = (0, g.useCallback)(
                        (e, t) => {
                            x && (t && (x.unobserve(t), (f.current = !1)), e && x.observe(e));
                        },
                        [x],
                    ),
                    [D, C] = (0, v.lk)(E),
                    S = (0, v.YN)(t);
                return (
                    (0, g.useEffect)(() => {
                        x && D.current && (x.disconnect(), (f.current = !1), x.observe(D.current));
                    }, [D, x]),
                    (0, v.Es)(
                        () => (
                            u({ type: l.RegisterDroppable, element: { id: r, key: a, disabled: n, node: D, rect: h, data: S } }),
                            () => u({ type: l.UnregisterDroppable, key: a, id: r })
                        ),
                        [r],
                    ),
                    (0, g.useEffect)(() => {
                        n !== d.current.disabled && (u({ type: l.SetDroppableDisabled, id: r, key: a, disabled: n }), (d.current.disabled = n));
                    }, [r, a, n, u]),
                    { active: o, rect: h, isOver: (null == s ? void 0 : s.id) === r, node: D, over: s, setNodeRef: C }
                );
            }
            function eJ(e) {
                let { animation: t, children: n } = e,
                    [r, l] = (0, g.useState)(null),
                    [i, a] = (0, g.useState)(null),
                    o = (0, v.ZC)(n);
                return (
                    n || r || !o || l(o),
                    (0, v.Es)(() => {
                        if (!i) return;
                        let e = null == r ? void 0 : r.key,
                            n = null == r ? void 0 : r.props.id;
                        if (null == e || null == n) return void l(null);
                        Promise.resolve(t(n, i)).then(() => {
                            l(null);
                        });
                    }, [t, r, i]),
                    g.createElement(g.Fragment, null, n, r ? (0, g.cloneElement)(r, { ref: a }) : null)
                );
            }
            let eV = { x: 0, y: 0, scaleX: 1, scaleY: 1 };
            function eQ(e) {
                let { children: t } = e;
                return g.createElement(eA.Provider, { value: ez }, g.createElement(eF.Provider, { value: eV }, t));
            }
            let eZ = { position: 'fixed', touchAction: 'none' },
                e$ = (e) => ((0, v.kx)(e) ? 'transform 250ms ease' : void 0),
                e0 = (0, g.forwardRef)((e, t) => {
                    let { as: n, activatorEvent: r, adjustScale: l, children: i, className: a, rect: o, style: u, transform: s, transition: c = e$ } = e;
                    if (!o) return null;
                    let d = l ? s : { ...s, scaleX: 1, scaleY: 1 },
                        f = {
                            ...eZ,
                            width: o.width,
                            height: o.height,
                            top: o.top,
                            left: o.left,
                            transform: v.Ks.Transform.toString(d),
                            transformOrigin:
                                l && r
                                    ? (function (e, t) {
                                          let n = (0, v.e_)(e);
                                          if (!n) return '0 0';
                                          let r = { x: ((n.x - t.left) / t.width) * 100, y: ((n.y - t.top) / t.height) * 100 };
                                          return r.x + '% ' + r.y + '%';
                                      })(r, o)
                                    : void 0,
                            transition: 'function' == typeof c ? c(r) : c,
                            ...u,
                        };
                    return g.createElement(n, { className: a, style: f, ref: t }, i);
                }),
                e1 = {
                    duration: 250,
                    easing: 'ease',
                    keyframes: (e) => {
                        let {
                            transform: { initial: t, final: n },
                        } = e;
                        return [{ transform: v.Ks.Transform.toString(t) }, { transform: v.Ks.Transform.toString(n) }];
                    },
                    sideEffects:
                        ((r = { styles: { active: { opacity: '0' } } }),
                        (e) => {
                            let { active: t, dragOverlay: n } = e,
                                l = {},
                                { styles: i, className: a } = r;
                            if (null != i && i.active)
                                for (let [e, n] of Object.entries(i.active)) void 0 !== n && ((l[e] = t.node.style.getPropertyValue(e)), t.node.style.setProperty(e, n));
                            if (null != i && i.dragOverlay) for (let [e, t] of Object.entries(i.dragOverlay)) void 0 !== t && n.node.style.setProperty(e, t);
                            return (
                                null != a && a.active && t.node.classList.add(a.active),
                                null != a && a.dragOverlay && n.node.classList.add(a.dragOverlay),
                                function () {
                                    for (let [e, n] of Object.entries(l)) t.node.style.setProperty(e, n);
                                    null != a && a.active && t.node.classList.remove(a.active);
                                }
                            );
                        }),
                },
                e2 = 0,
                e5 = g.memo((e) => {
                    let {
                            adjustScale: t = !1,
                            children: n,
                            dropAnimation: r,
                            style: l,
                            transition: i,
                            modifiers: a,
                            wrapperElement: o = 'div',
                            className: u,
                            zIndex: s = 999,
                        } = e,
                        {
                            activatorEvent: c,
                            active: d,
                            activeNodeRect: f,
                            containerNodeRect: h,
                            draggableNodes: p,
                            droppableContainers: b,
                            dragOverlay: m,
                            over: y,
                            measuringConfiguration: w,
                            scrollableAncestors: x,
                            scrollableAncestorRects: E,
                            windowRect: D,
                        } = eG(),
                        C = (0, g.useContext)(eF),
                        S = (function (e) {
                            return (0, g.useMemo)(() => {
                                if (null != e) return ++e2;
                            }, [e]);
                        })(null == d ? void 0 : d.id),
                        R = eK(a, {
                            activatorEvent: c,
                            active: d,
                            activeNodeRect: f,
                            containerNodeRect: h,
                            draggingNodeRect: m.rect,
                            over: y,
                            overlayNodeRect: m.rect,
                            scrollableAncestors: x,
                            scrollableAncestorRects: E,
                            transform: C,
                            windowRect: D,
                        }),
                        M = ew(f),
                        k = (function (e) {
                            let { config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: l } = e;
                            return (0, v._q)((e, i) => {
                                if (null === t) return;
                                let a = n.get(e);
                                if (!a) return;
                                let o = a.node.current;
                                if (!o) return;
                                let u = ek(i);
                                if (!u) return;
                                let { transform: s } = (0, v.zk)(i).getComputedStyle(i),
                                    c = B(s);
                                if (!c) return;
                                let d =
                                    'function' == typeof t
                                        ? t
                                        : (function (e) {
                                              let { duration: t, easing: n, sideEffects: r, keyframes: l } = { ...e1, ...e };
                                              return (e) => {
                                                  let { active: i, dragOverlay: a, transform: o, ...u } = e;
                                                  if (!t) return;
                                                  let s = { x: a.rect.left - i.rect.left, y: a.rect.top - i.rect.top },
                                                      c = {
                                                          scaleX: 1 !== o.scaleX ? (i.rect.width * o.scaleX) / a.rect.width : 1,
                                                          scaleY: 1 !== o.scaleY ? (i.rect.height * o.scaleY) / a.rect.height : 1,
                                                      },
                                                      d = { x: o.x - s.x, y: o.y - s.y, ...c },
                                                      f = l({ ...u, active: i, dragOverlay: a, transform: { initial: o, final: d } }),
                                                      [h] = f,
                                                      g = f[f.length - 1];
                                                  if (JSON.stringify(h) === JSON.stringify(g)) return;
                                                  let p = null == r ? void 0 : r({ active: i, dragOverlay: a, ...u }),
                                                      v = a.node.animate(f, { duration: t, easing: n, fill: 'forwards' });
                                                  return new Promise((e) => {
                                                      v.onfinish = () => {
                                                          null == p || p(), e();
                                                      };
                                                  });
                                              };
                                          })(t);
                                return (
                                    $(o, l.draggable.measure),
                                    d({
                                        active: { id: e, data: a.data, node: o, rect: l.draggable.measure(o) },
                                        draggableNodes: n,
                                        dragOverlay: { node: i, rect: l.dragOverlay.measure(u) },
                                        droppableContainers: r,
                                        measuringConfiguration: l,
                                        transform: c,
                                    })
                                );
                            });
                        })({ config: r, draggableNodes: p, droppableContainers: b, measuringConfiguration: w }),
                        T = M ? m.setRef : void 0;
                    return g.createElement(
                        eQ,
                        null,
                        g.createElement(
                            eJ,
                            { animation: k },
                            d && S
                                ? g.createElement(
                                      e0,
                                      {
                                          key: S,
                                          id: d.id,
                                          ref: T,
                                          as: o,
                                          activatorEvent: c,
                                          adjustScale: t,
                                          className: u,
                                          transition: i,
                                          rect: M,
                                          style: { zIndex: s, ...l },
                                          transform: R,
                                      },
                                      n,
                                  )
                                : null,
                        ),
                    );
                });
        },
        49364: (e, t, n) => {
            n.d(t, { JR: () => D, _G: () => c, gB: () => h, gl: () => w });
            var r = n(55178),
                l = n(11386),
                i = n(81829);
            function a(e, t, n) {
                let r = e.slice();
                return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
            }
            function o(e) {
                return null !== e && e >= 0;
            }
            let u = (e) => {
                    let { rects: t, activeIndex: n, overIndex: r, index: l } = e,
                        i = a(t, r, n),
                        o = t[l],
                        u = i[l];
                    return u && o ? { x: u.left - o.left, y: u.top - o.top, scaleX: u.width / o.width, scaleY: u.height / o.height } : null;
                },
                s = { scaleX: 1, scaleY: 1 },
                c = (e) => {
                    var t;
                    let { activeIndex: n, activeNodeRect: r, index: l, rects: i, overIndex: a } = e,
                        o = null != (t = i[n]) ? t : r;
                    if (!o) return null;
                    if (l === n) {
                        let e = i[a];
                        return e ? { x: 0, y: n < a ? e.top + e.height - (o.top + o.height) : e.top - o.top, ...s } : null;
                    }
                    let u = (function (e, t, n) {
                        let r = e[t],
                            l = e[t - 1],
                            i = e[t + 1];
                        return r
                            ? n < t
                                ? l
                                    ? r.top - (l.top + l.height)
                                    : i
                                      ? i.top - (r.top + r.height)
                                      : 0
                                : i
                                  ? i.top - (r.top + r.height)
                                  : l
                                    ? r.top - (l.top + l.height)
                                    : 0
                            : 0;
                    })(i, l, n);
                    return l > n && l <= a ? { x: 0, y: -o.height - u, ...s } : l < n && l >= a ? { x: 0, y: o.height + u, ...s } : { x: 0, y: 0, ...s };
                },
                d = 'Sortable',
                f = r.createContext({
                    activeIndex: -1,
                    containerId: d,
                    disableTransforms: !1,
                    items: [],
                    overIndex: -1,
                    useDragOverlay: !1,
                    sortedRects: [],
                    strategy: u,
                    disabled: { draggable: !1, droppable: !1 },
                });
            function h(e) {
                let { children: t, id: n, items: a, strategy: o = u, disabled: s = !1 } = e,
                    { active: c, dragOverlay: h, droppableRects: g, over: p, measureDroppableContainers: v } = (0, l.fF)(),
                    b = (0, i.YG)(d, n),
                    m = null !== h.rect,
                    y = (0, r.useMemo)(() => a.map((e) => ('object' == typeof e && 'id' in e ? e.id : e)), [a]),
                    w = null != c,
                    x = c ? y.indexOf(c.id) : -1,
                    E = p ? y.indexOf(p.id) : -1,
                    D = (0, r.useRef)(y),
                    C = !(function (e, t) {
                        if (e === t) return !0;
                        if (e.length !== t.length) return !1;
                        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                        return !0;
                    })(y, D.current),
                    S = (-1 !== E && -1 === x) || C,
                    R = 'boolean' == typeof s ? { draggable: s, droppable: s } : s;
                (0, i.Es)(() => {
                    C && w && v(y);
                }, [C, y, w, v]),
                    (0, r.useEffect)(() => {
                        D.current = y;
                    }, [y]);
                let M = (0, r.useMemo)(
                    () => ({
                        activeIndex: x,
                        containerId: b,
                        disabled: R,
                        disableTransforms: S,
                        items: y,
                        overIndex: E,
                        useDragOverlay: m,
                        sortedRects: y.reduce((e, t, n) => {
                            let r = g.get(t);
                            return r && (e[n] = r), e;
                        }, Array(y.length)),
                        strategy: o,
                    }),
                    [x, b, R.draggable, R.droppable, S, y, E, g, m, o],
                );
                return r.createElement(f.Provider, { value: M }, t);
            }
            let g = (e) => {
                    let { id: t, items: n, activeIndex: r, overIndex: l } = e;
                    return a(n, r, l).indexOf(t);
                },
                p = (e) => {
                    let { containerId: t, isSorting: n, wasDragging: r, index: l, items: i, newIndex: a, previousItems: o, previousContainerId: u, transition: s } = e;
                    return !!s && !!r && (o === i || l !== a) && (!!n || (a !== l && t === u));
                },
                v = { duration: 200, easing: 'ease' },
                b = 'transform',
                m = i.Ks.Transition.toString({ property: b, duration: 0, easing: 'linear' }),
                y = { roleDescription: 'sortable' };
            function w(e) {
                var t, n, a, u;
                let {
                        animateLayoutChanges: s = p,
                        attributes: c,
                        disabled: d,
                        data: h,
                        getNewIndex: w = g,
                        id: x,
                        strategy: E,
                        resizeObserverConfig: D,
                        transition: C = v,
                    } = e,
                    {
                        items: S,
                        containerId: R,
                        activeIndex: M,
                        disabled: k,
                        disableTransforms: T,
                        sortedRects: L,
                        overIndex: O,
                        useDragOverlay: N,
                        strategy: I,
                    } = (0, r.useContext)(f),
                    z =
                        ((t = d),
                        (n = k),
                        'boolean' == typeof t
                            ? { draggable: t, droppable: !1 }
                            : {
                                  draggable: null != (a = null == t ? void 0 : t.draggable) ? a : n.draggable,
                                  droppable: null != (u = null == t ? void 0 : t.droppable) ? u : n.droppable,
                              }),
                    A = S.indexOf(x),
                    Y = (0, r.useMemo)(() => ({ sortable: { containerId: R, index: A, items: S }, ...h }), [R, h, A, S]),
                    P = (0, r.useMemo)(() => S.slice(S.indexOf(x)), [S, x]),
                    {
                        rect: W,
                        node: B,
                        isOver: K,
                        setNodeRef: F,
                    } = (0, l.zM)({ id: x, data: Y, disabled: z.droppable, resizeObserverConfig: { updateMeasurementsFor: P, ...D } }),
                    {
                        active: j,
                        activatorEvent: X,
                        activeNodeRect: U,
                        attributes: _,
                        setNodeRef: G,
                        listeners: q,
                        isDragging: H,
                        over: J,
                        setActivatorNodeRef: V,
                        transform: Q,
                    } = (0, l.PM)({ id: x, data: Y, attributes: { ...y, ...c }, disabled: z.draggable }),
                    Z = (0, i.jn)(F, G),
                    $ = !!j,
                    ee = $ && !T && o(M) && o(O),
                    et = !N && H,
                    en = et && ee ? Q : null,
                    er = ee ? (null != en ? en : (null != E ? E : I)({ rects: L, activeNodeRect: U, activeIndex: M, overIndex: O, index: A })) : null,
                    el = o(M) && o(O) ? w({ id: x, items: S, activeIndex: M, overIndex: O }) : A,
                    ei = null == j ? void 0 : j.id,
                    ea = (0, r.useRef)({ activeId: ei, items: S, newIndex: el, containerId: R }),
                    eo = S !== ea.current.items,
                    eu = s({
                        active: j,
                        containerId: R,
                        isDragging: H,
                        isSorting: $,
                        id: x,
                        index: A,
                        items: S,
                        newIndex: ea.current.newIndex,
                        previousItems: ea.current.items,
                        previousContainerId: ea.current.containerId,
                        transition: C,
                        wasDragging: null != ea.current.activeId,
                    }),
                    es = (function (e) {
                        let { disabled: t, index: n, node: a, rect: o } = e,
                            [u, s] = (0, r.useState)(null),
                            c = (0, r.useRef)(n);
                        return (
                            (0, i.Es)(() => {
                                if (!t && n !== c.current && a.current) {
                                    let e = o.current;
                                    if (e) {
                                        let t = (0, l.Sj)(a.current, { ignoreTransform: !0 }),
                                            n = { x: e.left - t.left, y: e.top - t.top, scaleX: e.width / t.width, scaleY: e.height / t.height };
                                        (n.x || n.y) && s(n);
                                    }
                                }
                                n !== c.current && (c.current = n);
                            }, [t, n, a, o]),
                            (0, r.useEffect)(() => {
                                u && s(null);
                            }, [u]),
                            u
                        );
                    })({ disabled: !eu, index: A, node: B, rect: W });
                return (
                    (0, r.useEffect)(() => {
                        $ && ea.current.newIndex !== el && (ea.current.newIndex = el),
                            R !== ea.current.containerId && (ea.current.containerId = R),
                            S !== ea.current.items && (ea.current.items = S);
                    }, [$, el, R, S]),
                    (0, r.useEffect)(() => {
                        if (ei === ea.current.activeId) return;
                        if (ei && !ea.current.activeId) {
                            ea.current.activeId = ei;
                            return;
                        }
                        let e = setTimeout(() => {
                            ea.current.activeId = ei;
                        }, 50);
                        return () => clearTimeout(e);
                    }, [ei]),
                    {
                        active: j,
                        activeIndex: M,
                        attributes: _,
                        data: Y,
                        rect: W,
                        index: A,
                        newIndex: el,
                        items: S,
                        isOver: K,
                        isSorting: $,
                        isDragging: H,
                        listeners: q,
                        node: B,
                        overIndex: O,
                        over: J,
                        setNodeRef: Z,
                        setActivatorNodeRef: V,
                        setDroppableNodeRef: F,
                        setDraggableNodeRef: G,
                        transform: null != es ? es : er,
                        transition:
                            es || (eo && ea.current.newIndex === A)
                                ? m
                                : (!et || (0, i.kx)(X)) && C && ($ || eu)
                                  ? i.Ks.Transition.toString({ ...C, property: b })
                                  : void 0,
                    }
                );
            }
            function x(e) {
                if (!e) return !1;
                let t = e.data.current;
                return !!t && 'sortable' in t && 'object' == typeof t.sortable && 'containerId' in t.sortable && 'items' in t.sortable && 'index' in t.sortable;
            }
            let E = [l.vL.Down, l.vL.Right, l.vL.Up, l.vL.Left],
                D = (e, t) => {
                    let {
                        context: { active: n, collisionRect: r, droppableRects: a, droppableContainers: o, over: u, scrollableAncestors: s },
                    } = t;
                    if (E.includes(e.code)) {
                        if ((e.preventDefault(), !n || !r)) return;
                        let t = [];
                        o.getEnabled().forEach((n) => {
                            if (!n || (null != n && n.disabled)) return;
                            let i = a.get(n.id);
                            if (i)
                                switch (e.code) {
                                    case l.vL.Down:
                                        r.top < i.top && t.push(n);
                                        break;
                                    case l.vL.Up:
                                        r.top > i.top && t.push(n);
                                        break;
                                    case l.vL.Left:
                                        r.left > i.left && t.push(n);
                                        break;
                                    case l.vL.Right:
                                        r.left < i.left && t.push(n);
                                }
                        });
                        let c = (0, l.y$)({ active: n, collisionRect: r, droppableRects: a, droppableContainers: t, pointerCoordinates: null }),
                            d = (0, l.Vy)(c, 'id');
                        if ((d === (null == u ? void 0 : u.id) && c.length > 1 && (d = c[1].id), null != d)) {
                            let e = o.get(n.id),
                                t = o.get(d),
                                u = t ? a.get(t.id) : null,
                                c = null == t ? void 0 : t.node.current;
                            if (c && u && e && t) {
                                let n = (0, l.sl)(c).some((e, t) => s[t] !== e),
                                    a = C(e, t),
                                    o = (function (e, t) {
                                        return !!x(e) && !!x(t) && !!C(e, t) && e.data.current.sortable.index < t.data.current.sortable.index;
                                    })(e, t),
                                    d = n || !a ? { x: 0, y: 0 } : { x: o ? r.width - u.width : 0, y: o ? r.height - u.height : 0 },
                                    f = { x: u.left, y: u.top };
                                return d.x && d.y ? f : (0, i.Re)(f, d);
                            }
                        }
                    }
                };
            function C(e, t) {
                return !!x(e) && !!x(t) && e.data.current.sortable.containerId === t.data.current.sortable.containerId;
            }
        },
        79259: (e, t, n) => {
            n.d(t, { FN: () => l, gj: () => r }), n(81829);
            let r = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: n, transform: r } = e;
                    return n && t
                        ? (function (e, t, n) {
                              let r = { ...e };
                              return (
                                  t.top + e.y <= n.top ? (r.y = n.top - t.top) : t.bottom + e.y >= n.top + n.height && (r.y = n.top + n.height - t.bottom),
                                  t.left + e.x <= n.left ? (r.x = n.left - t.left) : t.right + e.x >= n.left + n.width && (r.x = n.left + n.width - t.right),
                                  r
                              );
                          })(r, n, t)
                        : r;
                },
                l = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        81829: (e, t, n) => {
            n.d(t, {
                $$: () => p,
                Es: () => h,
                KG: () => b,
                Ks: () => M,
                Ll: () => o,
                Re: () => C,
                Sw: () => i,
                TW: () => f,
                WQ: () => D,
                YG: () => x,
                YN: () => v,
                ZC: () => y,
                _q: () => g,
                ag: () => T,
                e_: () => R,
                jn: () => l,
                kx: () => S,
                l6: () => a,
                lk: () => m,
                sb: () => c,
                wz: () => s,
                xZ: () => d,
                zk: () => u,
            });
            var r = n(55178);
            function l() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, r.useMemo)(
                    () => (e) => {
                        t.forEach((t) => t(e));
                    },
                    t,
                );
            }
            let i = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
            function a(e) {
                let t = Object.prototype.toString.call(e);
                return '[object Window]' === t || '[object global]' === t;
            }
            function o(e) {
                return 'nodeType' in e;
            }
            function u(e) {
                var t, n;
                return e ? (a(e) ? e : o(e) && null != (t = null == (n = e.ownerDocument) ? void 0 : n.defaultView) ? t : window) : window;
            }
            function s(e) {
                let { Document: t } = u(e);
                return e instanceof t;
            }
            function c(e) {
                return !a(e) && e instanceof u(e).HTMLElement;
            }
            function d(e) {
                return e instanceof u(e).SVGElement;
            }
            function f(e) {
                return e ? (a(e) ? e.document : o(e) ? (s(e) ? e : c(e) || d(e) ? e.ownerDocument : document) : document) : document;
            }
            let h = i ? r.useLayoutEffect : r.useEffect;
            function g(e) {
                let t = (0, r.useRef)(e);
                return (
                    h(() => {
                        t.current = e;
                    }),
                    (0, r.useCallback)(function () {
                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return null == t.current ? void 0 : t.current(...n);
                    }, [])
                );
            }
            function p() {
                let e = (0, r.useRef)(null);
                return [
                    (0, r.useCallback)((t, n) => {
                        e.current = setInterval(t, n);
                    }, []),
                    (0, r.useCallback)(() => {
                        null !== e.current && (clearInterval(e.current), (e.current = null));
                    }, []),
                ];
            }
            function v(e, t) {
                void 0 === t && (t = [e]);
                let n = (0, r.useRef)(e);
                return (
                    h(() => {
                        n.current !== e && (n.current = e);
                    }, t),
                    n
                );
            }
            function b(e, t) {
                let n = (0, r.useRef)();
                return (0, r.useMemo)(() => {
                    let t = e(n.current);
                    return (n.current = t), t;
                }, [...t]);
            }
            function m(e) {
                let t = g(e),
                    n = (0, r.useRef)(null),
                    l = (0, r.useCallback)((e) => {
                        e !== n.current && (null == t || t(e, n.current)), (n.current = e);
                    }, []);
                return [n, l];
            }
            function y(e) {
                let t = (0, r.useRef)();
                return (
                    (0, r.useEffect)(() => {
                        t.current = e;
                    }, [e]),
                    t.current
                );
            }
            let w = {};
            function x(e, t) {
                return (0, r.useMemo)(() => {
                    if (t) return t;
                    let n = null == w[e] ? 0 : w[e] + 1;
                    return (w[e] = n), e + '-' + n;
                }, [e, t]);
            }
            function E(e) {
                return function (t) {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
                    return r.reduce(
                        (t, n) => {
                            for (let [r, l] of Object.entries(n)) {
                                let n = t[r];
                                null != n && (t[r] = n + e * l);
                            }
                            return t;
                        },
                        { ...t },
                    );
                };
            }
            let D = E(1),
                C = E(-1);
            function S(e) {
                if (!e) return !1;
                let { KeyboardEvent: t } = u(e.target);
                return t && e instanceof t;
            }
            function R(e) {
                if (
                    (function (e) {
                        if (!e) return !1;
                        let { TouchEvent: t } = u(e.target);
                        return t && e instanceof t;
                    })(e)
                ) {
                    if (e.touches && e.touches.length) {
                        let { clientX: t, clientY: n } = e.touches[0];
                        return { x: t, y: n };
                    } else if (e.changedTouches && e.changedTouches.length) {
                        let { clientX: t, clientY: n } = e.changedTouches[0];
                        return { x: t, y: n };
                    }
                }
                return 'clientX' in e && 'clientY' in e ? { x: e.clientX, y: e.clientY } : null;
            }
            let M = Object.freeze({
                    Translate: {
                        toString(e) {
                            if (!e) return;
                            let { x: t, y: n } = e;
                            return 'translate3d(' + (t ? Math.round(t) : 0) + 'px, ' + (n ? Math.round(n) : 0) + 'px, 0)';
                        },
                    },
                    Scale: {
                        toString(e) {
                            if (!e) return;
                            let { scaleX: t, scaleY: n } = e;
                            return 'scaleX(' + t + ') scaleY(' + n + ')';
                        },
                    },
                    Transform: {
                        toString(e) {
                            if (e) return [M.Translate.toString(e), M.Scale.toString(e)].join(' ');
                        },
                    },
                    Transition: {
                        toString(e) {
                            let { property: t, duration: n, easing: r } = e;
                            return t + ' ' + n + 'ms ' + r;
                        },
                    },
                }),
                k = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
            function T(e) {
                return e.matches(k) ? e : e.querySelector(k);
            }
        },
    },
]);
