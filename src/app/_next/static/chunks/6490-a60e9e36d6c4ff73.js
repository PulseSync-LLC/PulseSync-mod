(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4361, 6490],
    {
        9822: (e, t, s) => {
            'use strict';
            var i;
            ((t.HB = function (e, t) {
                let { objectsCount: s = 1, objectPosX: i = 1, objectPosY: l = 1 } = t,
                    r = (0, n.makeMetaParams)(2),
                    o = {
                        ...t,
                        objectsCount: s,
                        objectPosX: i,
                        objectPosY: l,
                        pageId: 'artist_screen',
                        pageType: 'object',
                        entityType: 'carousel',
                        entityId: 'concerts',
                        objectsType: 'concert',
                        _meta: r,
                    };
                e.trackEvent('Artist.Concerts.Showed', o);
            }),
                (t.U6 = function (e, t) {
                    let { objectsCount: s = 1, objectPosX: i = 1, objectPosY: l = 1 } = t,
                        r = (0, n.makeMetaParams)(2),
                        o = {
                            ...t,
                            objectsCount: s,
                            objectPosX: i,
                            objectPosY: l,
                            pageId: 'artist_screen',
                            pageType: 'object',
                            entityType: 'carousel',
                            entityId: 'concerts',
                            objectsType: 'concert',
                            from: 'artist_screen',
                            _meta: r,
                        };
                    e.trackEvent('Artist.Concerts.Navigated', o);
                }));
            let n = s(26895);
            (i || (i = {})).ConcertScreen = 'concert_screen';
        },
        22984: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        47608: (e, t, s) => {
            'use strict';
            ((t.__ = function (e, t) {
                let s = (0, i.makeMetaParams)(1),
                    n = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: s };
                e.trackEvent('ArtistConcerts.Opened', n);
            }),
                (t.pe = function (e, t) {
                    let s = (0, i.makeMetaParams)(1),
                        n = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: s };
                    e.trackEvent('ArtistConcerts.Closed', n);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: s = 1 } = t,
                        n = (0, i.makeMetaParams)(1),
                        l = { ...t, objectPos: s, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: n };
                    e.trackEvent('ArtistConcerts.Concert.Showed', l);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: s = 1 } = t,
                        n = (0, i.makeMetaParams)(1),
                        l = {
                            ...t,
                            objectPos: s,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: n,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', l);
                }));
            let i = s(26895);
        },
        59858: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => r });
            var i = s(25839),
                n = s(74631),
                l = s(97904);
            let r = (e) => {
                let { skeleton: t, children: s } = e,
                    r = (0, n.useMemo)(() => ({ skeleton: t }), [t]);
                return (0, i.jsx)(l.D.Provider, { value: r, children: s });
            };
        },
        65343: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => i });
            var i = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
        },
        84361: (e, t, s) => {
            'use strict';
            s.d(t, { Te: () => S, XW: () => A });
            var i = s(74631),
                n = s(71910);
            function l(e, t, s) {
                let i,
                    n = s.initialDeps ?? [];
                function l() {
                    var l, r, o, a;
                    let d, c;
                    s.key && (null == (l = s.debug) ? void 0 : l.call(s)) && (d = Date.now());
                    let h = e();
                    if (!(h.length !== n.length || h.some((e, t) => n[t] !== e))) return i;
                    if (
                        ((n = h),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)) && (c = Date.now()),
                        (i = t(...h)),
                        s.key && (null == (o = s.debug) ? void 0 : o.call(s)))
                    ) {
                        let e = Math.round((Date.now() - d) * 100) / 100,
                            t = Math.round((Date.now() - c) * 100) / 100,
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
            function r(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let o = (e, t, s) => {
                    let i;
                    return function (...n) {
                        (e.clearTimeout(i), (i = e.setTimeout(() => t.apply(this, n), s)));
                    };
                },
                a = (e) => e,
                d = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= s; e++) i.push(e);
                    return i;
                },
                c = (e, t) => {
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
                h = { passive: !0 },
                u = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        i(),
                        s.addEventListener('resize', i, h),
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
                                : o(
                                      i,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (i) => () => {
                            let { horizontal: r, isRtl: o } = e.options;
                            ((n = r ? s.scrollLeft * ((o && -1) || 1) : s.scrollTop), l(), t(n, i));
                        },
                        a = r(!0),
                        d = r(!1);
                    (d(), s.addEventListener('scroll', a, h));
                    let c = e.options.useScrollendEvent && m;
                    return (
                        c && s.addEventListener('scrollend', d, h),
                        () => {
                            (s.removeEventListener('scroll', a), c && s.removeEventListener('scrollend', d));
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
                                : o(
                                      i,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (i) => () => {
                            ((n = s[e.options.horizontal ? 'scrollX' : 'scrollY']), l(), t(n, i));
                        },
                        a = r(!0),
                        d = r(!1);
                    (d(), s.addEventListener('scroll', a, h));
                    let c = e.options.useScrollendEvent && m;
                    return (
                        c && s.addEventListener('scrollend', d, h),
                        () => {
                            (s.removeEventListener('scroll', a), c && s.removeEventListener('scrollend', d));
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
                _ = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var n, l;
                    null == (l = null == (n = i.scrollElement) ? void 0 : n.scrollTo) || l.call(n, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                E = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var n, l;
                    null == (l = null == (n = i.scrollElement) ? void 0 : n.scrollTo) || l.call(n, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                };
            class v {
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
                                    rangeExtractor: d,
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
                                let r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let o = this.measurementsCache.slice(0, r);
                                for (let n = r; n < e; n++) {
                                    let e = i(n),
                                        r = 1 === this.options.lanes ? o[n - 1] : this.getFurthestMeasurement(o, n),
                                        a = r ? r.end + this.options.gap : t + s,
                                        d = l.get(e),
                                        c = 'number' == typeof d ? d : this.options.estimateSize(n),
                                        h = a + c,
                                        u = r ? r.lane : n % this.options.lanes;
                                    o[n] = { index: n, start: a, size: c, end: h, key: e, lane: u };
                                }
                                return ((this.measurementsCache = o), o);
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
                                                  l = b(0, n, (t) => e[t].start, s),
                                                  r = l;
                                              if (1 === i) for (; r < n && e[r].end < s + t;) r++;
                                              else if (i > 1) {
                                                  let o = Array(i).fill(0);
                                                  for (; r < n && o.some((e) => e < s + t);) {
                                                      let t = e[r];
                                                      ((o[t.lane] = t.end), r++);
                                                  }
                                                  let a = Array(i).fill(s + t);
                                                  for (; l > 0 && a.some((e) => e >= s);) {
                                                      let t = e[l];
                                                      ((a[t.lane] = t.start), l--);
                                                  }
                                                  ((l = Math.max(0, l - (l % i))), (r = Math.min(n, r + (i - 1 - (r % i)))));
                                              }
                                              return { startIndex: l, endIndex: r };
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
                            if (0 !== t.length) return r(t[b(0, t.length - 1, (e) => r(t[e]).start, e)]);
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
                                            let [t] = r(this.getOffsetForIndex(e, l));
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
            let b = (e, t, s, i) => {
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
                C = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function M(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, i) => {
                            var l;
                            (i ? (0, n.flushSync)(t) : t(), null == (l = e.onChange) || l.call(e, s, i));
                        },
                    },
                    [l] = i.useState(() => new v(s));
                return (l.setOptions(s), C(() => l._didMount(), []), C(() => l._willUpdate()), l);
            }
            function S(e) {
                return M({ observeElementRect: c, observeElementOffset: f, scrollToFn: E, ...e });
            }
            function A(e) {
                return M({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: u,
                    observeElementOffset: g,
                    scrollToFn: _,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        86432: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        89209: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => i });
            var i = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
        89257: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => B });
            var i = s(25839),
                n = s(82298),
                l = s(88204),
                r = s(74631),
                o = s(39004),
                a = s(8487),
                d = s(61493),
                c = s(68934),
                h = s(4071),
                u = s(35622),
                m = s(5867),
                f = s(4254),
                g = s(51859),
                p = s(91149),
                _ = s(92942),
                E = s(65343),
                v = s(89209),
                b = s(20790),
                C = s(27954),
                M = s(31488),
                S = s(36159),
                A = s(57549),
                O = s(69041),
                w = s(19412),
                I = s(79396),
                z = s(9931),
                T = s(6968),
                x = s(51246),
                y = s(66738),
                R = s(86869),
                L = s(52512),
                D = s(6323),
                N = s(27819),
                W = s(86432),
                j = s.n(W);
            let k = (0, l.PA)((e) => {
                let { className: t, artist: s } = e,
                    { ref: l, intersectionPropertyId: o } = (0, L.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: c },
                    } = (0, C.g)(),
                    { id: u, name: m, coverUri: g } = s,
                    p = (0, r.useCallback)(() => {
                        a(u);
                    }, [a, u]),
                    _ = c(u),
                    E = (0, r.useMemo)(
                        () =>
                            (0, i.jsx)(R.t, {
                                className: j().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, i.jsxs)(h.$, {
                                    radius: 'round',
                                    className: j().coverBlock,
                                    variant: 'default',
                                    onClick: p,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': _,
                                    'aria-label': m,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, i.jsx)(D.B, { className: j().image, src: g || N.A.src, fit: 'cover', alt: m, withAvatarReplace: !!g, 'aria-hidden': !0 }),
                                        (0, i.jsx)('div', {
                                            className: (0, n.$)(j().like),
                                            children: (0, i.jsx)(y.I, { variant: 'likedVariant', size: 's', className: j().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [_, g, m, p],
                    );
                return (0, i.jsx)(x.MN, {
                    ref: l,
                    className: (0, n.$)(j().root, { [j().root_selected]: _ }, t),
                    textPosition: 'center',
                    title: (0, i.jsx)(f.HL, {
                        'aria-hidden': !0,
                        className: j().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': o,
                    view: E,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var F = s(22984),
                P = s.n(F);
            let G = { [g.u.Desktop]: { start: 40, end: 40 }, [g.u.Mobile]: { start: 40, end: 40 } },
                B = (0, l.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: s } = (0, o.A)(),
                        {
                            wizard: l,
                            settings: { isMobile: g, isWindowsApplication: x, isLinuxApplication: y },
                            user: R,
                        } = (0, C.g)(),
                        { notify: L } = (0, _.l)(),
                        D = (0, b.z)(),
                        [N, W] = (0, c.d)(),
                        j = (0, m.zb)(0),
                        F = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!j.onTabChange || e === j.value) return;
                                j.onTabChange(e);
                                let s = null == (t = l.genres[e]) ? void 0 : t.id;
                                (l.setFilter(s), null == N || N.scrollTo({ top: 0 }));
                            },
                            [l, j, N],
                        ),
                        B = (0, r.useMemo)(() => {
                            switch (l.selectedArtistsCounter) {
                                case 0:
                                    return s({ id: 'wizard.button-tune' });
                                case 1:
                                    return s({ id: 'wizard.button-little-more' });
                                case 2:
                                    return s({ id: 'wizard.button-one-more' });
                                default:
                                    return s({ id: 'wizard.button-done' });
                            }
                        }, [l.selectedArtistsCounter, s]),
                        V = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(z.wI, {
                                    className: P().tabCarousel,
                                    ...j,
                                    onTabChange: F,
                                    isShimmerVisible: l.loadingState === S.G.PENDING,
                                    shimmer: (0, i.jsx)(z.zr, { isActive: !0, className: P().tabCarousel, shimmerClassName: P().tabShimmer, count: g ? 2 : 3 }),
                                    children: l.genres.map((e, t) =>
                                        (0, i.jsx)(
                                            I.o,
                                            {
                                                className: (0, n.$)(P().filter, { [P().filter_selected]: t === j.value }),
                                                titleClassName: P().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [l.genres, j, F, l.loadingState, g],
                        ),
                        U = (0, r.useCallback)(() => {
                            l.getArtists(60);
                        }, [l]);
                    (0, r.useEffect)(() => {
                        l.filter && U();
                    }, [l.filter, U]);
                    let K = (0, r.useCallback)(async () => {
                        (await l.getGenres(), U());
                    }, [l, U]);
                    ((0, r.useEffect)(() => {
                        l.modal.isOpened && K();
                    }, [l, l.modal.isOpened, K]),
                        (0, r.useEffect)(() => {
                            l.loadingState === S.G.REJECT &&
                                (l.modal.close(), L((0, i.jsx)(A.h, { error: s({ id: 'error-messages.error-load-wizard' }) }), { containerId: p.u.ERROR }));
                        }, [l, l.getGenres, l.loadingState, s, L]));
                    let $ = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(f.DZ, {
                                    className: P().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, i.jsx)(a.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        H = (0, r.useCallback)(async () => {
                            (l.selectedArtistsCounter < 3 ? l.getArtists() : (await l.finish()) === M.F.OK && (await R.getSettings(), await (null == t ? void 0 : t())),
                                l.modal.close());
                        }, [t, R, l]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == D ||
                                    D.addShortcutsListener(v.M.MAIN, E.l.CLOSE, () => {
                                        l.modal.isOpened && H();
                                    }),
                                () => {
                                    null == D || D.removeShortcutsListener(v.M.MAIN, E.l.CLOSE);
                                }
                            ),
                            [H, l.modal.isOpened, D],
                        ),
                        (0, i.jsxs)(u.a, {
                            className: (0, n.$)(P().root, { [P().root_withCustomControls]: x || y }),
                            headerClassName: P().modalHeader,
                            contentClassName: P().modalContent,
                            open: l.modal.isOpened,
                            onOpenChange: l.modal.onOpenChange,
                            onClose: H,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: s({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: g && $,
                            escapeKey: !1,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: P().wrapper,
                                    children: [
                                        !g && $,
                                        (0, i.jsx)(f.HL, {
                                            className: P().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, i.jsx)(a.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, i.jsx)(h.$, {
                                            className: P().button,
                                            size: g ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: H,
                                            disabled: l.selectedArtistsCounter < 3,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, i.jsx)(f.HL, { variant: 'div', size: 'm', weight: 'medium', children: B }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)('div', {
                                    className: P().mainContainer,
                                    children: [
                                        (0, i.jsx)(O.F, { className: P().carousel, carouselElement: V, scrollPadding: G }),
                                        (0, i.jsx)(T.$, {
                                            withFooter: !1,
                                            className: (0, n.$)(P().scrollContainer, P().important),
                                            itemContentCallback: (e) => {
                                                let t = l.artistsByGenre[e];
                                                if (!t) {
                                                    let e = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.artist' }) });
                                                    return (0, i.jsx)(w.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, i.jsx)(k, { artist: t }, t.id);
                                            },
                                            data: l.artistsByGenre,
                                            endReached: U,
                                            listClassName: P().content,
                                            itemClassName: P().item,
                                            pageSize: 60,
                                            handleRef: W,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
    },
]);
