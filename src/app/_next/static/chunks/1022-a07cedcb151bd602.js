(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1022, 4361],
    {
        6968: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => p });
            var i = s(25839),
                l = s(82298),
                n = s(28631),
                r = s(74631);
            let o = (e) => {
                    let { style: t, forwardRef: s, context: l, ...n } = e,
                        r = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        o = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': r, style: { ...t }, ref: s, ...n });
                },
                a = (0, r.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
            var d = s(45300),
                c = s.n(d);
            let h = (e) => {
                    let { style: t, forwardRef: s, withFooter: n, withHeader: r, withForceScroll: o, ...a } = e;
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(c().scroller, { [c().scroller_withFooter]: n, [c().scroller_withHeader]: r, [c().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: s,
                        ...a,
                        tabIndex: -1,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e }));
            var m = s(10508),
                f = s(63257);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: l,
                            debounceDurationInMs: n = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...h
                        } = e,
                        [u, g] = (0, r.useState)(null),
                        p = (0, r.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), a.length > 0 && g(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < i; e++) s(e);
                                    }
                                }, n),
                            [n, l, t, s, a],
                        );
                    (0, r.useEffect)(() => {
                        a.length > 0 && u && p(u);
                    }, a);
                    let _ = (0, r.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, n);
                    }, [d, n]);
                    return (0, i.jsx)(f.sN, { ref: c, rangeChanged: p, totalCount: o, endReached: _, ...h });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: h,
                            itemContentCallback: m,
                            listClassName: f,
                            overscan: p = 700,
                            pageSize: _ = 20,
                            totalCount: v,
                            totalRequests: b,
                            debounceDurationInMs: C,
                            initialItemCount: w,
                            minInitialItemCount: S = 20,
                            handleRef: x,
                            alwaysShowScrollbar: M = !1,
                            testId: z,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: E,
                            ...T
                        } = e,
                        [I, A] = (0, r.useState)(!1),
                        O = (0, r.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    A(e);
                                }, 100),
                            [],
                        ),
                        R = (0, r.useMemo)(() => {
                            var e, t;
                            return y
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : a,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : a,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, b, y]),
                        j = w ? Math.min(w, S) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(c().root, { [c().root_scrolling]: I || M, [c().root_notScrolling]: !I && !M }, t),
                        'data-test-id': z,
                        children: [
                            y && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(g, {
                                overscan: p,
                                components: R,
                                listClassName: f,
                                itemClassName: h,
                                isScrolling: O,
                                itemContent: m,
                                scrollerRef: x,
                                totalCount: v,
                                pageSize: _,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: C,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: E,
                                ...T,
                            }),
                            y && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        9822: (e, t, s) => {
            'use strict';
            var i;
            ((t.HB = function (e, t) {
                let { objectsCount: s = 1, objectPosX: i = 1, objectPosY: n = 1 } = t,
                    r = (0, l.makeMetaParams)(2),
                    o = {
                        ...t,
                        objectsCount: s,
                        objectPosX: i,
                        objectPosY: n,
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
                    let { objectsCount: s = 1, objectPosX: i = 1, objectPosY: n = 1 } = t,
                        r = (0, l.makeMetaParams)(2),
                        o = {
                            ...t,
                            objectsCount: s,
                            objectPosX: i,
                            objectPosY: n,
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
            let l = s(26895);
            (i || (i = {})).ConcertScreen = 'concert_screen';
        },
        16978: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => m });
            var i = s(25839),
                l = s(84059),
                n = s(8487),
                r = s(61493),
                o = s(71035),
                a = s(4071),
                d = s(4254),
                c = s(57024),
                h = s(36484),
                u = s(62562);
            let m = (e) => {
                let { size: t = 'm', variant: s = 'default', color: m = 'primary', withRipple: f = !0, buttonText: g, isBlock: p, key: _, className: v } = e,
                    b = (0, l.useRouter)(),
                    C = (0, u.N)().get(h.QG),
                    w = (0, o.c)(() => {
                        C.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), b.push(C.authorizationUrl));
                    });
                return (0, i.jsx)(
                    a.$,
                    {
                        onClick: w,
                        className: v,
                        isBlock: p,
                        color: m,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: f,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: g || (0, i.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    _,
                );
            };
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
        24004: (e, t, s) => {
            'use strict';
            s.d(t, { y: () => n });
            var i = s(74631);
            s(93588);
            var l = s(44478);
            let n = (e) => {
                (0, i.useEffect)(() => (0, l.q)(e), [e]);
            };
        },
        44478: (e, t, s) => {
            'use strict';
            s.d(t, { Q: () => n, q: () => l });
            let i = new Set(),
                l = (e) => (
                    i.add(e),
                    () => {
                        i.delete(e);
                    }
                ),
                n = () => {
                    i.forEach((e) => {
                        e();
                    });
                };
        },
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        47608: (e, t, s) => {
            'use strict';
            ((t.__ = function (e, t) {
                let s = (0, i.makeMetaParams)(1),
                    l = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: s };
                e.trackEvent('ArtistConcerts.Opened', l);
            }),
                (t.pe = function (e, t) {
                    let s = (0, i.makeMetaParams)(1),
                        l = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: s };
                    e.trackEvent('ArtistConcerts.Closed', l);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: s = 1 } = t,
                        l = (0, i.makeMetaParams)(1),
                        n = { ...t, objectPos: s, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: l };
                    e.trackEvent('ArtistConcerts.Concert.Showed', n);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: s = 1 } = t,
                        l = (0, i.makeMetaParams)(1),
                        n = {
                            ...t,
                            objectPos: s,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: l,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', n);
                }));
            let i = s(26895);
        },
        60296: (e, t, s) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: s = '', mainObjectType: n = l.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                    o = (0, i.makeMetaParams)(1),
                    a = { ...t, skeletonId: s, mainObjectType: n, mainObjectId: r, _meta: o };
                e.trackEvent('Tab.Opened', a);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: s = '', mainObjectType: n = l.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        a = { ...t, skeletonId: s, mainObjectType: n, mainObjectId: r, _meta: o };
                    e.trackEvent('Tab.Loaded', a);
                }));
            let i = s(26895),
                l = s(36619);
        },
        84361: (e, t, s) => {
            'use strict';
            s.d(t, { Te: () => x, XW: () => M });
            var i = s(74631),
                l = s(71910);
            function n(e, t, s) {
                let i,
                    l = s.initialDeps ?? [];
                function n() {
                    var n, r, o, a;
                    let d, c;
                    s.key && (null == (n = s.debug) ? void 0 : n.call(s)) && (d = Date.now());
                    let h = e();
                    if (!(h.length !== l.length || h.some((e, t) => l[t] !== e))) return i;
                    if (
                        ((l = h),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)) && (c = Date.now()),
                        (i = t(...h)),
                        s.key && (null == (o = s.debug) ? void 0 : o.call(s)))
                    ) {
                        let e = Math.round((Date.now() - d) * 100) / 100,
                            t = Math.round((Date.now() - c) * 100) / 100,
                            i = t / 16,
                            l = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${l(t, 5)} /${l(e, 5)} ms`,
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
                    (n.updateDeps = (e) => {
                        l = e;
                    }),
                    n
                );
            }
            function r(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let o = (e, t, s) => {
                    let i;
                    return function (...l) {
                        (e.clearTimeout(i), (i = e.setTimeout(() => t.apply(this, l), s)));
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
                    let l = (e) => {
                        let { width: s, height: i } = e;
                        t({ width: Math.round(s), height: Math.round(i) });
                    };
                    if ((l(s.getBoundingClientRect()), !i.ResizeObserver)) return () => {};
                    let n = new i.ResizeObserver((t) => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void l({ width: t.inlineSize, height: t.blockSize });
                            }
                            l(s.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
                    });
                    return (
                        n.observe(s, { box: 'border-box' }),
                        () => {
                            n.unobserve(s);
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
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      i,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (i) => () => {
                            let { horizontal: r, isRtl: o } = e.options;
                            ((l = r ? s.scrollLeft * ((o && -1) || 1) : s.scrollTop), n(), t(l, i));
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
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      i,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (i) => () => {
                            ((l = s[e.options.horizontal ? 'scrollX' : 'scrollY']), n(), t(l, i));
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
                    var l, n;
                    null == (n = null == (l = i.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                v = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var l, n;
                    null == (n = null == (l = i.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                };
            class b {
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
                        (this.maybeNotify = n(
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
                            for (let l = t - 1; l >= 0; l--) {
                                let t = e[l];
                                if (s.has(t.lane)) continue;
                                let n = i.get(t.lane);
                                if ((null == n || t.end > n.end ? i.set(t.lane, t) : t.end < n.end && s.set(t.lane, !0), s.size === this.options.lanes)) break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = n(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, s, i, l) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: l }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = n(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: l }, n) => {
                                if (!l) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let o = this.measurementsCache.slice(0, r);
                                for (let l = r; l < e; l++) {
                                    let e = i(l),
                                        r = 1 === this.options.lanes ? o[l - 1] : this.getFurthestMeasurement(o, l),
                                        a = r ? r.end + this.options.gap : t + s,
                                        d = n.get(e),
                                        c = 'number' == typeof d ? d : this.options.estimateSize(l),
                                        h = a + c,
                                        u = r ? r.lane : l % this.options.lanes;
                                    o[l] = { index: l, start: a, size: c, end: h, key: e, lane: u };
                                }
                                return ((this.measurementsCache = o), o);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = n(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, s, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: s, lanes: i }) {
                                              let l = e.length - 1,
                                                  n = C(0, l, (t) => e[t].start, s),
                                                  r = n;
                                              if (1 === i) for (; r < l && e[r].end < s + t;) r++;
                                              else if (i > 1) {
                                                  let o = Array(i).fill(0);
                                                  for (; r < l && o.some((e) => e < s + t);) {
                                                      let t = e[r];
                                                      ((o[t.lane] = t.end), r++);
                                                  }
                                                  let a = Array(i).fill(s + t);
                                                  for (; n > 0 && a.some((e) => e >= s);) {
                                                      let t = e[n];
                                                      ((a[t.lane] = t.start), n--);
                                                  }
                                                  ((n = Math.max(0, n - (n % i))), (r = Math.min(l, r + (i - 1 - (r % i)))));
                                              }
                                              return { startIndex: n, endIndex: r };
                                          })({ measurements: e, outerSize: t, scrollOffset: s, lanes: i })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = n(
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
                            (e, t, s, i, l) => (null === i || null === l ? [] : e({ startIndex: i, endIndex: l, overscan: t, count: s })),
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
                            let l = i.key,
                                n = this.elementsCache.get(l);
                            (n !== e && (n && this.observer.unobserve(n), this.observer.observe(e), this.elementsCache.set(l, e)),
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
                        (this.getVirtualItems = n(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let s = [];
                                for (let i = 0, l = e.length; i < l; i++) {
                                    let l = t[e[i]];
                                    s.push(l);
                                }
                                return s;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return r(t[C(0, t.length - 1, (e) => r(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let i = this.getSize(),
                                l = this.getScrollOffset();
                            ('auto' === t && (t = e >= l + i ? 'end' : 'start'), 'center' === t ? (e += (s - i) / 2) : 'end' === t && (e -= i));
                            let n = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[n]
                                            : this.scrollElement[n]
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
                                l = this.getScrollOffset();
                            if ('auto' === t)
                                if (s.end >= l + i - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(s.start <= l + this.options.scrollPaddingStart)) return [l, t];
                                    t = 'start';
                                }
                            let n = 'end' === t ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(n, t, s.size), t];
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
                            let [l, n] = i;
                            (this._scrollToOffset(l, { adjustments: void 0, behavior: s }),
                                'smooth' !== s &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = r(this.getOffsetForIndex(e, n));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: n, behavior: s });
                                        } else this.scrollToIndex(e, { align: n, behavior: s });
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
            let C = (e, t, s, i) => {
                    for (; e <= t;) {
                        let l = ((e + t) / 2) | 0,
                            n = s(l);
                        if (n < i) e = l + 1;
                        else {
                            if (!(n > i)) return l;
                            t = l - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                w = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function S(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, i) => {
                            var n;
                            (i ? (0, l.flushSync)(t) : t(), null == (n = e.onChange) || n.call(e, s, i));
                        },
                    },
                    [n] = i.useState(() => new b(s));
                return (n.setOptions(s), w(() => n._didMount(), []), w(() => n._willUpdate()), n);
            }
            function x(e) {
                return S({ observeElementRect: c, observeElementOffset: f, scrollToFn: v, ...e });
            }
            function M(e) {
                return S({
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
        89257: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => H });
            var i = s(25839),
                l = s(82298),
                n = s(88204),
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
                v = s(65343),
                b = s(89209),
                C = s(20790),
                w = s(27954),
                S = s(31488),
                x = s(36159),
                M = s(57549),
                z = s(69041),
                y = s(19412),
                E = s(79396),
                T = s(9931),
                I = s(6968),
                A = s(51246),
                O = s(66738),
                R = s(86869),
                j = s(52512),
                k = s(6323),
                N = s(27819),
                D = s(86432),
                W = s.n(D);
            let F = (0, n.PA)((e) => {
                let { className: t, artist: s } = e,
                    { ref: n, intersectionPropertyId: o } = (0, j.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: c },
                    } = (0, w.g)(),
                    { id: u, name: m, coverUri: g } = s,
                    p = (0, r.useCallback)(() => {
                        a(u);
                    }, [a, u]),
                    _ = c(u),
                    v = (0, r.useMemo)(
                        () =>
                            (0, i.jsx)(R.t, {
                                className: W().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, i.jsxs)(h.$, {
                                    radius: 'round',
                                    className: W().coverBlock,
                                    variant: 'default',
                                    onClick: p,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': _,
                                    'aria-label': m,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, i.jsx)(k.B, { className: W().image, src: g || N.A.src, fit: 'cover', alt: m, withAvatarReplace: !!g, 'aria-hidden': !0 }),
                                        (0, i.jsx)('div', {
                                            className: (0, l.$)(W().like),
                                            children: (0, i.jsx)(O.I, { variant: 'likedVariant', size: 's', className: W().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [_, g, m, p],
                    );
                return (0, i.jsx)(A.MN, {
                    ref: n,
                    className: (0, l.$)(W().root, { [W().root_selected]: _ }, t),
                    textPosition: 'center',
                    title: (0, i.jsx)(f.HL, {
                        'aria-hidden': !0,
                        className: W().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': o,
                    view: v,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var L = s(22984),
                P = s.n(L);
            let B = { [g.u.Desktop]: { start: 40, end: 40 }, [g.u.Mobile]: { start: 40, end: 40 } },
                H = (0, n.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: s } = (0, o.A)(),
                        {
                            wizard: n,
                            settings: { isMobile: g, isWindowsApplication: A, isLinuxApplication: O },
                            user: R,
                        } = (0, w.g)(),
                        { notify: j } = (0, _.l)(),
                        k = (0, C.z)(),
                        [N, D] = (0, c.d)(),
                        W = (0, m.zb)(0),
                        L = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!W.onTabChange || e === W.value) return;
                                W.onTabChange(e);
                                let s = null == (t = n.genres[e]) ? void 0 : t.id;
                                (n.setFilter(s), null == N || N.scrollTo({ top: 0 }));
                            },
                            [n, W, N],
                        ),
                        H = (0, r.useMemo)(() => {
                            switch (n.selectedArtistsCounter) {
                                case 0:
                                    return s({ id: 'wizard.button-tune' });
                                case 1:
                                    return s({ id: 'wizard.button-little-more' });
                                case 2:
                                    return s({ id: 'wizard.button-one-more' });
                                default:
                                    return s({ id: 'wizard.button-done' });
                            }
                        }, [n.selectedArtistsCounter, s]),
                        V = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(T.wI, {
                                    className: P().tabCarousel,
                                    ...W,
                                    onTabChange: L,
                                    isShimmerVisible: n.loadingState === x.G.PENDING,
                                    shimmer: (0, i.jsx)(T.zr, { isActive: !0, className: P().tabCarousel, shimmerClassName: P().tabShimmer, count: g ? 2 : 3 }),
                                    children: n.genres.map((e, t) =>
                                        (0, i.jsx)(
                                            E.o,
                                            {
                                                className: (0, l.$)(P().filter, { [P().filter_selected]: t === W.value }),
                                                titleClassName: P().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [n.genres, W, L, n.loadingState, g],
                        ),
                        $ = (0, r.useCallback)(() => {
                            n.getArtists(60);
                        }, [n]);
                    (0, r.useEffect)(() => {
                        n.filter && $();
                    }, [n.filter, $]);
                    let U = (0, r.useCallback)(async () => {
                        (await n.getGenres(), $());
                    }, [n, $]);
                    ((0, r.useEffect)(() => {
                        n.modal.isOpened && U();
                    }, [n, n.modal.isOpened, U]),
                        (0, r.useEffect)(() => {
                            n.loadingState === x.G.REJECT &&
                                (n.modal.close(), j((0, i.jsx)(M.h, { error: s({ id: 'error-messages.error-load-wizard' }) }), { containerId: p.u.ERROR }));
                        }, [n, n.getGenres, n.loadingState, s, j]));
                    let Z = (0, r.useMemo)(
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
                        K = (0, r.useCallback)(async () => {
                            (n.selectedArtistsCounter < 3 ? n.getArtists() : (await n.finish()) === S.F.OK && (await R.getSettings(), await (null == t ? void 0 : t())),
                                n.modal.close());
                        }, [t, R, n]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == k ||
                                    k.addShortcutsListener(b.M.MAIN, v.l.CLOSE, () => {
                                        n.modal.isOpened && K();
                                    }),
                                () => {
                                    null == k || k.removeShortcutsListener(b.M.MAIN, v.l.CLOSE);
                                }
                            ),
                            [K, n.modal.isOpened, k],
                        ),
                        (0, i.jsxs)(u.a, {
                            className: (0, l.$)(P().root, { [P().root_withCustomControls]: A || O }),
                            headerClassName: P().modalHeader,
                            contentClassName: P().modalContent,
                            open: n.modal.isOpened,
                            onOpenChange: n.modal.onOpenChange,
                            onClose: K,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: s({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: g && Z,
                            escapeKey: !1,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: P().wrapper,
                                    children: [
                                        !g && Z,
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
                                            onClick: K,
                                            disabled: n.selectedArtistsCounter < 3,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, i.jsx)(f.HL, { variant: 'div', size: 'm', weight: 'medium', children: H }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)('div', {
                                    className: P().mainContainer,
                                    children: [
                                        (0, i.jsx)(z.F, { className: P().carousel, carouselElement: V, scrollPadding: B }),
                                        (0, i.jsx)(I.$, {
                                            withFooter: !1,
                                            className: (0, l.$)(P().scrollContainer, P().important),
                                            itemContentCallback: (e) => {
                                                let t = n.artistsByGenre[e];
                                                if (!t) {
                                                    let e = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.artist' }) });
                                                    return (0, i.jsx)(y.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, i.jsx)(F, { artist: t }, t.id);
                                            },
                                            data: n.artistsByGenre,
                                            endReached: $,
                                            listClassName: P().content,
                                            itemClassName: P().item,
                                            pageSize: 60,
                                            handleRef: D,
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
