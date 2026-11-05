'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3802],
    {
        7833: (e, t, s) => {
            s.d(t, { B: () => h });
            var i = s(88800),
                n = s(53548),
                o = s(63582),
                l = s(99875),
                r = s(66109),
                a = s(245);
            let h = (0, o.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: s, objectPosY: o, objectType: h }) => {
                    let d = (0, a.N)(),
                        c = (0, n.useContext)(l.p)?.loadedSession,
                        u = [h, t, s, o].join(':'),
                        [p, m] = (0, n.useState)(() => ({ client: d, identity: u, blockSession: c, viewSession: d.createBlockViewSession() }));
                    (p.client !== d || p.identity !== u || p.blockSession !== c) &&
                        m({ client: d, identity: u, blockSession: c, viewSession: d.createBlockViewSession() });
                    let f = (0, n.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: s, objectPosY: o, objectType: h }, viewSession: p.viewSession }),
                        [t, s, o, h, p.viewSession],
                    );
                    return (0, i.jsx)(r.l, { value: f, children: e });
                },
            );
        },
        14965: (e, t, s) => {
            s.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: n = {}, ...o } = t,
                        l = e || 'Internal error';
                    (super(l, o), (this.message = l), (this.code = s), (this.data = n), (this.stack = Error(l).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        17017: (e, t, s) => {
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        19840: (e, t, s) => {
            (s.d(t, { G: () => n }), s(46606));
            var i = s(91136);
            class n extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, n.prototype));
                }
            }
        },
        37523: (e, t, s) => {
            s.d(t, { F: () => d });
            var i = s(88800),
                n = s(53548),
                o = s(63582),
                l = s(53534),
                r = s(99875),
                a = s(245);
            let h = (e, t, s) => {
                    let i = e.createBlockViewSession(),
                        n = !1;
                    return { claimLoadedSession: () => (n ? null : ((n = !0), i)), client: e, identity: t, loadedSession: i, screenSession: s };
                },
                d = (0, o.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: s, blockPosY: o, blockType: d, children: c, objectsCount: u }) => {
                        let p = (0, a.N)(),
                            m = (0, n.useContext)(l.k)?.session,
                            f = [e, d, s, o].join(':'),
                            [g, v] = (0, n.useState)(() => h(p, f, m));
                        (g.client !== p || g.identity !== f || g.screenSession !== m) && v(h(p, f, m));
                        let b = (0, n.useMemo)(
                            () => ({
                                claimLoadedSession: g.claimLoadedSession,
                                loadedSession: g.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: s, blockPosY: o, blockType: d, objectsCount: u },
                            }),
                            [e, t, s, o, d, u, g.claimLoadedSession, g.loadedSession],
                        );
                        return (0, i.jsx)(r.p, { value: b, children: c });
                    },
                );
        },
        46606: (e, t, s) => {
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        49784: (e, t, s) => {
            s.d(t, { W: () => a });
            var i = s(53548),
                n = s(63582),
                o = s(89846),
                l = s(245),
                r = s(22681);
            let a = (0, n.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, i.useRef)(!1),
                    s = (0, l.N)(),
                    { hash: n } = (0, o.g)(),
                    a = (0, r.w)(),
                    h = (0, i.useMemo)(() => (a ? s.createBlockReporter(a.snapshot) : null), [s, a]);
                (0, i.useEffect)(() => {
                    e && a && h && !t.current && h.loaded({ objectsCount: a.snapshot.block.objectsCount, viewUuid: a.block.loadedSession.start() }) && (t.current = !0);
                }, [e, n, h, a]);
            });
        },
        56949: (e, t, s) => {
            s.d(t, { Te: () => S, XW: () => T });
            var i = s(53548),
                n = s(53405);
            function o(e, t, s) {
                let i,
                    n = s.initialDeps ?? [];
                function o() {
                    var o, l, r, a;
                    let h, d;
                    s.key && (null == (o = s.debug) ? void 0 : o.call(s)) && (h = Date.now());
                    let c = e();
                    if (!(c.length !== n.length || c.some((e, t) => n[t] !== e))) return i;
                    if (
                        ((n = c),
                        s.key && (null == (l = s.debug) ? void 0 : l.call(s)) && (d = Date.now()),
                        (i = t(...c)),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)))
                    ) {
                        let e = Math.round((Date.now() - h) * 100) / 100,
                            t = Math.round((Date.now() - d) * 100) / 100,
                            i = t / 16,
                            n = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${n(t, 5)} /${n(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * i, 120))}deg 100% 31%);`,
                            null == s ? void 0 : s.key,
                        );
                    }
                    return (null == (a = null == s ? void 0 : s.onChange) || a.call(s, i), i);
                }
                return (
                    (o.updateDeps = (e) => {
                        n = e;
                    }),
                    o
                );
            }
            function l(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let r = (e, t, s) => {
                    let i;
                    return function (...n) {
                        (e.clearTimeout(i), (i = e.setTimeout(() => t.apply(this, n), s)));
                    };
                },
                a = (e) => e,
                h = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= s; e++) i.push(e);
                    return i;
                },
                d = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let n = (e) => {
                        let { width: s, height: i } = e;
                        t({ width: Math.round(s), height: Math.round(i) });
                    };
                    if ((n(s.getBoundingClientRect()), !i.ResizeObserver)) return () => {};
                    let o = new i.ResizeObserver((t) => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void n({ width: t.inlineSize, height: t.blockSize });
                            }
                            n(s.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
                    });
                    return (
                        o.observe(s, { box: 'border-box' }),
                        () => {
                            o.unobserve(s);
                        }
                    );
                },
                c = { passive: !0 },
                u = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        i(),
                        s.addEventListener('resize', i, c),
                        () => {
                            s.removeEventListener('resize', i);
                        }
                    );
                },
                p = 'undefined' == typeof window || 'onscrollend' in window,
                m = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let n = 0,
                        o =
                            e.options.useScrollendEvent && p
                                ? () => void 0
                                : r(
                                      i,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        l = (i) => () => {
                            let { horizontal: l, isRtl: r } = e.options;
                            ((n = l ? s.scrollLeft * ((r && -1) || 1) : s.scrollTop), o(), t(n, i));
                        },
                        a = l(!0),
                        h = l(!1);
                    (h(), s.addEventListener('scroll', a, c));
                    let d = e.options.useScrollendEvent && p;
                    return (
                        d && s.addEventListener('scrollend', h, c),
                        () => {
                            (s.removeEventListener('scroll', a), d && s.removeEventListener('scrollend', h));
                        }
                    );
                },
                f = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let n = 0,
                        o =
                            e.options.useScrollendEvent && p
                                ? () => void 0
                                : r(
                                      i,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        l = (i) => () => {
                            ((n = s[e.options.horizontal ? 'scrollX' : 'scrollY']), o(), t(n, i));
                        },
                        a = l(!0),
                        h = l(!1);
                    (h(), s.addEventListener('scroll', a, c));
                    let d = e.options.useScrollendEvent && p;
                    return (
                        d && s.addEventListener('scrollend', h, c),
                        () => {
                            (s.removeEventListener('scroll', a), d && s.removeEventListener('scrollend', h));
                        }
                    );
                },
                g = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height']);
                },
                v = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var n, o;
                    null == (o = null == (n = i.scrollElement) ? void 0 : n.scrollTo) || o.call(n, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                b = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var n, o;
                    null == (o = null == (n = i.scrollElement) ? void 0 : n.scrollTo) || o.call(n, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                };
            class E {
                constructor(e) {
                    ((this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow && this.targetWindow.ResizeObserver
                                        ? (e = new this.targetWindow.ResizeObserver((e) => {
                                              e.forEach((e) => {
                                                  let t = () => {
                                                      this._measureElement(e.target, e);
                                                  };
                                                  this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
                                              });
                                          }))
                                        : null);
                            return {
                                disconnect: () => {
                                    var s;
                                    (null == (s = t()) || s.disconnect(), (e = null));
                                },
                                observe: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            (Object.entries(e).forEach(([t, s]) => {
                                void 0 === s && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: a,
                                    rangeExtractor: h,
                                    onChange: () => {},
                                    measureElement: g,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: 'data-index',
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                }));
                        }),
                        (this.notify = (e) => {
                            var t, s;
                            null == (s = (t = this.options).onChange) || s.call(t, this, e);
                        }),
                        (this.maybeNotify = o(
                            () => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
                            },
                        )),
                        (this.cleanup = () => {
                            (this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null));
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                ((this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            ((this.scrollRect = e), this.maybeNotify());
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            ((this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify());
                                        }),
                                    ));
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ?? ('function' == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let s = new Map(),
                                i = new Map();
                            for (let n = t - 1; n >= 0; n--) {
                                let t = e[n];
                                if (s.has(t.lane)) continue;
                                let o = i.get(t.lane);
                                if ((null == o || t.end > o.end ? i.set(t.lane, t) : t.end < o.end && s.set(t.lane, !0), s.size === this.options.lanes)) break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = o(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, s, i, n) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: n }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = o(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: n }, o) => {
                                if (!n) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let l = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let r = this.measurementsCache.slice(0, l);
                                for (let n = l; n < e; n++) {
                                    let e = i(n),
                                        l = 1 === this.options.lanes ? r[n - 1] : this.getFurthestMeasurement(r, n),
                                        a = l ? l.end + this.options.gap : t + s,
                                        h = o.get(e),
                                        d = 'number' == typeof h ? h : this.options.estimateSize(n),
                                        c = a + d,
                                        u = l ? l.lane : n % this.options.lanes;
                                    r[n] = { index: n, start: a, size: d, end: c, key: e, lane: u };
                                }
                                return ((this.measurementsCache = r), r);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = o(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, s, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: s, lanes: i }) {
                                              let n = e.length - 1,
                                                  o = O(0, n, (t) => e[t].start, s),
                                                  l = o;
                                              if (1 === i) for (; l < n && e[l].end < s + t;) l++;
                                              else if (i > 1) {
                                                  let r = Array(i).fill(0);
                                                  for (; l < n && r.some((e) => e < s + t);) {
                                                      let t = e[l];
                                                      ((r[t.lane] = t.end), l++);
                                                  }
                                                  let a = Array(i).fill(s + t);
                                                  for (; o > 0 && a.some((e) => e >= s);) {
                                                      let t = e[o];
                                                      ((a[t.lane] = t.start), o--);
                                                  }
                                                  ((o = Math.max(0, o - (o % i))), (l = Math.min(n, l + (i - 1 - (l % i)))));
                                              }
                                              return { startIndex: o, endIndex: l };
                                          })({ measurements: e, outerSize: t, scrollOffset: s, lanes: i })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = o(
                            () => {
                                let e = null,
                                    t = null,
                                    s = this.calculateRange();
                                return (
                                    s && ((e = s.startIndex), (t = s.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, s, i, n) => (null === i || null === n ? [] : e({ startIndex: i, endIndex: n, overscan: t, count: s })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                s = e.getAttribute(t);
                            return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let s = this.indexFromElement(e),
                                i = this.measurementsCache[s];
                            if (!i) return;
                            let n = i.key,
                                o = this.elementsCache.get(n);
                            (o !== e && (o && this.observer.unobserve(o), this.observer.observe(e), this.elementsCache.set(n, e)),
                                e.isConnected && this.resizeItem(s, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = t - (this.itemSizeCache.get(s.key) ?? s.size);
                            0 !== i &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this)
                                    : s.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += i), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(s.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = o(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let s = [];
                                for (let i = 0, n = e.length; i < n; i++) {
                                    let n = t[e[i]];
                                    s.push(n);
                                }
                                return s;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return l(t[O(0, t.length - 1, (e) => l(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let i = this.getSize(),
                                n = this.getScrollOffset();
                            ('auto' === t && (t = e >= n + i ? 'end' : 'start'), 'center' === t ? (e += (s - i) / 2) : 'end' === t && (e -= i));
                            let o = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[o]
                                            : this.scrollElement[o]
                                        : 0) - i,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = this.getSize(),
                                n = this.getScrollOffset();
                            if ('auto' === t)
                                if (s.end >= n + i - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(s.start <= n + this.options.scrollPaddingStart)) return [n, t];
                                    t = 'start';
                                }
                            let o = 'end' === t ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(o, t, s.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: s } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: s }));
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: s } = {}) => {
                            ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'));
                            let i = this.getOffsetForIndex(e, t);
                            if (!i) return;
                            let [n, o] = i;
                            (this._scrollToOffset(n, { adjustments: void 0, behavior: s }),
                                'smooth' !== s &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = l(this.getOffsetForIndex(e, o));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: o, behavior: s });
                                        } else this.scrollToIndex(e, { align: o, behavior: s });
                                    })));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t }));
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                s = this.getMeasurements();
                            if (0 === s.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = s[s.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    i = s.length - 1;
                                for (; i > 0 && e.some((e) => null === e);) {
                                    let t = s[i];
                                    (null === e[t.lane] && (e[t.lane] = t.end), i--);
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: s }) => {
                            this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            ((this.itemSizeCache = new Map()), this.notify(!1));
                        }),
                        this.setOptions(e));
                }
            }
            let O = (e, t, s, i) => {
                    for (; e <= t;) {
                        let n = ((e + t) / 2) | 0,
                            o = s(n);
                        if (o < i) e = n + 1;
                        else {
                            if (!(o > i)) return n;
                            t = n - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                y = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function I(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, i) => {
                            var o;
                            (i ? (0, n.flushSync)(t) : t(), null == (o = e.onChange) || o.call(e, s, i));
                        },
                    },
                    [o] = i.useState(() => new E(s));
                return (o.setOptions(s), y(() => o._didMount(), []), y(() => o._willUpdate()), o);
            }
            function S(e) {
                return I({ observeElementRect: d, observeElementOffset: m, scrollToFn: b, ...e });
            }
            function T(e) {
                return I({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: u,
                    observeElementOffset: f,
                    scrollToFn: v,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        62837: (e, t, s) => {
            s.d(t, { AS: () => u, Yw: () => i, JU: () => n, DQ: () => f, Ve: () => g });
            var i,
                n,
                o = s(43297),
                l = (function () {
                    function e(e) {
                        ((this.observableValue = (0, o.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var s = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (n) {
                                    if (n !== s.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (s.prevValueByListener.set(e, n), e(n));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, o.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var s = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (n) {
                                if (n !== s.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (s.prevValueByListener.set(e, n), e(n));
                                }
                            })
                        );
                    }));
            })();
            var r = s(14965);
            class a extends r.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
            class h extends r.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, h.prototype));
                }
            }
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'));
            })(i || (i = {}));
            let d = (e) => {
                    let t = [];
                    for (let s of e) {
                        let [e, i] = s.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                c = (e, t) => d(e).filter((e) => e.type === t);
            class u {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new l(null)),
                        (this.isLoadingObservable = new l(!1)),
                        (this.errorObservable = new l(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new a(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new h(e, !0);
                }
                async resolveByType(e, t) {
                    let s = c(e, t);
                    return (await Promise.all(s.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        s = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of s)
                        if (e) {
                            let t = i[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (i[e.disclaimerType] = t));
                        }
                    return i;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'));
            })(n || (n = {}));
            let p = new Map([
                    [i.EXPLICIT_ICON, n.E],
                    [i.AGE_18_ICON, n.AGE_18],
                    [i.AGE_16_ICON, n.AGE_16],
                    [i.AGE_12_ICON, n.AGE_12],
                    [i.EXCLAMATION_ICON, n.EXCLAMATION],
                ]),
                m = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.EXCLAMATION_ICON],
                f = (e) => {
                    let t = ((e, t) => {
                        for (let s of t) {
                            let t = c(e, s)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, m);
                    if (null === t) return null;
                    let s = p.get(t.type);
                    return void 0 !== s ? s : null;
                },
                g = (e, t) => c(e, t).length > 0;
        },
        76903: (e, t, s) => {
            s.d(t, { a: () => c });
            var i = s(88800),
                n = s(53548),
                o = s(53534),
                l = s(63582),
                r = s(245);
            let a = new WeakMap();
            class h {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let s =
                        a.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                s = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                s();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (s(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
                                },
                            };
                        })();
                    (a.set(t, s), (this.queue = s));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = s(87999);
            let c = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let s = (0, r.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [a, c] = (0, n.useState)(() => {
                            let e = new h(s.createScreenSession().screenViewUuid, s);
                            return { client: s, input: t, isReady: l, scope: l ? s.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        a.client !== s ||
                        a.input.pageId !== t.pageId ||
                        a.input.skeletonId !== t.skeletonId ||
                        a.input.mainObjectType !== t.mainObjectType ||
                        a.input.mainObjectId !== t.mainObjectId
                    ) {
                        let n = new h(s.createScreenSession().screenViewUuid, s),
                            r = { client: s, input: t, isReady: l, scope: l ? s.createScreenScope(t, n) : null, session: n };
                        return (c(r), (0, i.jsx)(o.k, { value: r, children: e }));
                    }
                    if (
                        a.isReady !== l ||
                        a.input.displayReasonId !== t.displayReasonId ||
                        a.input.pageIdForFrom !== t.pageIdForFrom ||
                        a.input.pagePlacement !== t.pagePlacement ||
                        a.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...a, input: t, isReady: l, scope: l ? s.createScreenScope(t, a.session) : null };
                        return (c(n), (0, i.jsx)(o.k, { value: n, children: e }));
                    }
                    return (0, i.jsx)(o.k, { value: a, children: e });
                },
            );
        },
        89916: (e, t, s) => {
            s.d(t, { GX: () => o.G, X1: () => i.X, m5: () => n.m });
            var i = s(46606),
                n = s(91136),
                o = s(19840);
            s(17017);
        },
        91136: (e, t, s) => {
            s.d(t, { m: () => n });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: n = {}, ...o } = t,
                        l = e || 'Internal error';
                    (super(l, o), (this.message = l), (this.code = s), (this.data = n), (this.stack = Error(l).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class n extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, n.prototype));
                }
            }
        },
    },
]);
