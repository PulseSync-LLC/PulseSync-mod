'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7746],
    {
        14965: (e, t, s) => {
            s.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: n = {}, ...l } = t,
                        o = e || 'Internal error';
                    (super(o, l), (this.message = o), (this.code = s), (this.data = n), (this.stack = Error(o).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        56949: (e, t, s) => {
            s.d(t, { Te: () => w, XW: () => C });
            var i = s(53548),
                n = s(53405);
            function l(e, t, s) {
                let i,
                    n = s.initialDeps ?? [];
                function l() {
                    var l, o, r, a;
                    let h, u;
                    s.key && (null == (l = s.debug) ? void 0 : l.call(s)) && (h = Date.now());
                    let d = e();
                    if (!(d.length !== n.length || d.some((e, t) => n[t] !== e))) return i;
                    if (
                        ((n = d),
                        s.key && (null == (o = s.debug) ? void 0 : o.call(s)) && (u = Date.now()),
                        (i = t(...d)),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)))
                    ) {
                        let e = Math.round((Date.now() - h) * 100) / 100,
                            t = Math.round((Date.now() - u) * 100) / 100,
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
                    (l.updateDeps = (e) => {
                        n = e;
                    }),
                    l
                );
            }
            function o(e, t) {
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
                u = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let n = (e) => {
                        let { width: s, height: i } = e;
                        t({ width: Math.round(s), height: Math.round(i) });
                    };
                    if ((n(s.getBoundingClientRect()), !i.ResizeObserver)) return () => {};
                    let l = new i.ResizeObserver((t) => {
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
                        l.observe(s, { box: 'border-box' }),
                        () => {
                            l.unobserve(s);
                        }
                    );
                },
                d = { passive: !0 },
                c = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        i(),
                        s.addEventListener('resize', i, d),
                        () => {
                            s.removeEventListener('resize', i);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                f = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let n = 0,
                        l =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : r(
                                      i,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            let { horizontal: o, isRtl: r } = e.options;
                            ((n = o ? s.scrollLeft * ((r && -1) || 1) : s.scrollTop), l(), t(n, i));
                        },
                        a = o(!0),
                        h = o(!1);
                    (h(), s.addEventListener('scroll', a, d));
                    let u = e.options.useScrollendEvent && m;
                    return (
                        u && s.addEventListener('scrollend', h, d),
                        () => {
                            (s.removeEventListener('scroll', a), u && s.removeEventListener('scrollend', h));
                        }
                    );
                },
                g = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let n = 0,
                        l =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : r(
                                      i,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            ((n = s[e.options.horizontal ? 'scrollX' : 'scrollY']), l(), t(n, i));
                        },
                        a = o(!0),
                        h = o(!1);
                    (h(), s.addEventListener('scroll', a, d));
                    let u = e.options.useScrollendEvent && m;
                    return (
                        u && s.addEventListener('scrollend', h, d),
                        () => {
                            (s.removeEventListener('scroll', a), u && s.removeEventListener('scrollend', h));
                        }
                    );
                },
                p = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height']);
                },
                v = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var n, l;
                    null == (l = null == (n = i.scrollElement) ? void 0 : n.scrollTo) || l.call(n, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                b = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var n, l;
                    null == (l = null == (n = i.scrollElement) ? void 0 : n.scrollTo) || l.call(n, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                };
            class y {
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
                                    measureElement: p,
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
                        (this.maybeNotify = l(
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
                                let l = i.get(t.lane);
                                if ((null == l || t.end > l.end ? i.set(t.lane, t) : t.end < l.end && s.set(t.lane, !0), s.size === this.options.lanes)) break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = l(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, s, i, n) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: n }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = l(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: n }, l) => {
                                if (!n) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let o = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let r = this.measurementsCache.slice(0, o);
                                for (let n = o; n < e; n++) {
                                    let e = i(n),
                                        o = 1 === this.options.lanes ? r[n - 1] : this.getFurthestMeasurement(r, n),
                                        a = o ? o.end + this.options.gap : t + s,
                                        h = l.get(e),
                                        u = 'number' == typeof h ? h : this.options.estimateSize(n),
                                        d = a + u,
                                        c = o ? o.lane : n % this.options.lanes;
                                    r[n] = { index: n, start: a, size: u, end: d, key: e, lane: c };
                                }
                                return ((this.measurementsCache = r), r);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = l(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, s, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: s, lanes: i }) {
                                              let n = e.length - 1,
                                                  l = E(0, n, (t) => e[t].start, s),
                                                  o = l;
                                              if (1 === i) for (; o < n && e[o].end < s + t;) o++;
                                              else if (i > 1) {
                                                  let r = Array(i).fill(0);
                                                  for (; o < n && r.some((e) => e < s + t);) {
                                                      let t = e[o];
                                                      ((r[t.lane] = t.end), o++);
                                                  }
                                                  let a = Array(i).fill(s + t);
                                                  for (; l > 0 && a.some((e) => e >= s);) {
                                                      let t = e[l];
                                                      ((a[t.lane] = t.start), l--);
                                                  }
                                                  ((l = Math.max(0, l - (l % i))), (o = Math.min(n, o + (i - 1 - (o % i)))));
                                              }
                                              return { startIndex: l, endIndex: o };
                                          })({ measurements: e, outerSize: t, scrollOffset: s, lanes: i })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = l(
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
                                l = this.elementsCache.get(n);
                            (l !== e && (l && this.observer.unobserve(l), this.observer.observe(e), this.elementsCache.set(n, e)),
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
                        (this.getVirtualItems = l(
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
                            if (0 !== t.length) return o(t[E(0, t.length - 1, (e) => o(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let i = this.getSize(),
                                n = this.getScrollOffset();
                            ('auto' === t && (t = e >= n + i ? 'end' : 'start'), 'center' === t ? (e += (s - i) / 2) : 'end' === t && (e -= i));
                            let l = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[l]
                                            : this.scrollElement[l]
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
                            let l = 'end' === t ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(l, t, s.size), t];
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
                            let [n, l] = i;
                            (this._scrollToOffset(n, { adjustments: void 0, behavior: s }),
                                'smooth' !== s &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = o(this.getOffsetForIndex(e, l));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: l, behavior: s });
                                        } else this.scrollToIndex(e, { align: l, behavior: s });
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
            let E = (e, t, s, i) => {
                    for (; e <= t;) {
                        let n = ((e + t) / 2) | 0,
                            l = s(n);
                        if (l < i) e = n + 1;
                        else {
                            if (!(l > i)) return n;
                            t = n - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                O = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function I(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, i) => {
                            var l;
                            (i ? (0, n.flushSync)(t) : t(), null == (l = e.onChange) || l.call(e, s, i));
                        },
                    },
                    [l] = i.useState(() => new y(s));
                return (l.setOptions(s), O(() => l._didMount(), []), O(() => l._willUpdate()), l);
            }
            function w(e) {
                return I({ observeElementRect: u, observeElementOffset: f, scrollToFn: b, ...e });
            }
            function C(e) {
                return I({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: c,
                    observeElementOffset: g,
                    scrollToFn: v,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        62837: (e, t, s) => {
            s.d(t, { AS: () => c, Yw: () => i, JU: () => n, DQ: () => g, Ve: () => p });
            var i,
                n,
                l = s(43297),
                o = (function () {
                    function e(e) {
                        ((this.observableValue = (0, l.vP)(e)), (this.prevValueByListener = new Map()));
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
                    ((this.observableValue = (0, l.EW)(e)), (this.prevValueByListener = new Map()));
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
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(i || (i = {}));
            let u = (e) => {
                    let t = [];
                    for (let s of e) {
                        let [e, i] = s.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
            class c {
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
                        (this.itemsObservable = new o(null)),
                        (this.isLoadingObservable = new o(!1)),
                        (this.errorObservable = new o(null)),
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
                    let s = d(e, t);
                    return (await Promise.all(s.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
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
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(n || (n = {}));
            let m = new Map([
                    [i.EXPLICIT_ICON, n.E],
                    [i.AGE_18_ICON, n.AGE_18],
                    [i.AGE_16_ICON, n.AGE_16],
                    [i.AGE_12_ICON, n.AGE_12],
                    [i.EXCLAMATION_ICON, n.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [i.SUBSTITUTED_ICON, n.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                f = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.SUBSTITUTED_ICON, i.EXCLAMATION_ICON],
                g = (e) => {
                    let t = ((e, t) => {
                        for (let s of t) {
                            let t = d(e, s)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, f);
                    if (null === t) return null;
                    let s = m.get(t.type);
                    return void 0 !== s ? s : null;
                },
                p = (e, t) => d(e, t).length > 0;
        },
        70621: (e, t, s) => {
            s.d(t, { D: () => a });
            var i = s(53548),
                n = s(63582),
                l = s(245),
                o = s(22681),
                r = s(56374);
            let a = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, l.N)(),
                    t = (0, o.w)(),
                    s = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, r.c)((e) => {
                    t?.object && s && s.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
    },
]);
