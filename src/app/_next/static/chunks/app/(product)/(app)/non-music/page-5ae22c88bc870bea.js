(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4361, 9556],
    {
        6968: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => _ });
            var n = s(25839),
                i = s(82298),
                l = s(28631),
                r = s(74631);
            let o = (e) => {
                    let { style: t, forwardRef: s, context: i, ...l } = e,
                        r = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        o = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': r, style: { ...t }, ref: s, ...l });
                },
                a = (0, r.forwardRef)((e, t) => (0, n.jsx)(o, { forwardRef: t, ...e }));
            var d = s(45300),
                c = s.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: s, withFooter: l, withHeader: r, withForceScroll: o, ...a } = e;
                    return (0, n.jsx)('div', {
                        className: (0, i.$)(c().scroller, { [c().scroller_withFooter]: l, [c().scroller_withHeader]: r, [c().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: s,
                        ...a,
                        tabIndex: -1,
                    });
                },
                h = (0, r.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
            var m = s(10508),
                f = s(63257);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: i,
                            debounceDurationInMs: l = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [h, g] = (0, r.useState)(null),
                        _ = (0, r.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == i || i(e), a.length > 0 && g(e), t && s)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < n; e++) s(e);
                                    }
                                }, l),
                            [l, i, t, s, a],
                        );
                    (0, r.useEffect)(() => {
                        a.length > 0 && h && _(h);
                    }, a);
                    let p = (0, r.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, l);
                    }, [d, l]);
                    return (0, n.jsx)(f.sN, { ref: c, rangeChanged: _, totalCount: o, endReached: p, ...u });
                },
                _ = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: f,
                            overscan: _ = 700,
                            pageSize: p = 20,
                            totalCount: v,
                            totalRequests: b,
                            debounceDurationInMs: E,
                            initialItemCount: S,
                            minInitialItemCount: C = 20,
                            handleRef: M,
                            alwaysShowScrollbar: w = !1,
                            testId: y,
                            isMobileLayout: O = !1,
                            shouldTriggerRangeChangedOn: x,
                            ...A
                        } = e,
                        [I, T] = (0, r.useState)(!1),
                        z = (0, r.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        R = (0, r.useMemo)(() => {
                            var e, t;
                            return O
                                ? {
                                      Scroller: h,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : a,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: h,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : a,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, b, O]),
                        j = S ? Math.min(S, C) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, i.$)(c().root, { [c().root_scrolling]: I || w, [c().root_notScrolling]: !I && !w }, t),
                        'data-test-id': y,
                        children: [
                            O && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, n.jsx)(g, {
                                overscan: _,
                                components: R,
                                listClassName: f,
                                itemClassName: u,
                                isScrolling: z,
                                itemContent: m,
                                scrollerRef: M,
                                totalCount: v,
                                pageSize: p,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: E,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: x,
                                ...A,
                            }),
                            O && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        13624: (e, t, s) => {
            'use strict';
            s.d(t, { default: () => i.a });
            var n = s(68545),
                i = s.n(n);
        },
        19425: (e, t, s) => {
            'use strict';
            s.d(t, { _: () => i });
            var n = s(35522);
            let i = (e) => {
                var t, s, i, l;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (s = e.tabs.data[0]) || null == (t = s.blocks) ? void 0 : t.length) === 1 &&
                    (null == (l = e.tabs.data[0]) || null == (i = l.blocks[0]) ? void 0 : i.type) === n.t.WIZARD
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
        36245: (e) => {
            e.exports = {
                root: 'NonMusicPage_root__IPKkH',
                content: 'NonMusicPage_content__7_TYy',
                header: 'NonMusicPage_header__dijgk',
                landing: 'NonMusicPage_landing__kGKTh',
                landing_onlyWizard: 'NonMusicPage_landing_onlyWizard__P9nN3',
                footer: 'NonMusicPage_footer__juz5v',
                error: 'NonMusicPage_error__oW0V3',
            };
        },
        42220: (e, t, s) => {
            'use strict';
            ((t.__ = function (e, t) {
                let s = (0, n.makeMetaParams)(1),
                    i = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: s };
                e.trackEvent('ArtistConcerts.Opened', i);
            }),
                (t.pe = function (e, t) {
                    let s = (0, n.makeMetaParams)(1),
                        i = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: s };
                    e.trackEvent('ArtistConcerts.Closed', i);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: s = 1 } = t,
                        i = (0, n.makeMetaParams)(1),
                        l = { ...t, objectPos: s, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: i };
                    e.trackEvent('ArtistConcerts.Concert.Showed', l);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: s = 1 } = t,
                        i = (0, n.makeMetaParams)(1),
                        l = {
                            ...t,
                            objectPos: s,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: i,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', l);
                }));
            let n = s(96195);
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
        46450: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var s in t) Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
                })(t, {
                    bindSnapshot: function () {
                        return r;
                    },
                    createAsyncLocalStorage: function () {
                        return l;
                    },
                    createSnapshot: function () {
                        return o;
                    },
                }));
            let s = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class n {
                disable() {
                    throw s;
                }
                getStore() {}
                run() {
                    throw s;
                }
                exit() {
                    throw s;
                }
                enterWith() {
                    throw s;
                }
                static bind(e) {
                    return e;
                }
            }
            let i = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function l() {
                return i ? new i() : new n();
            }
            function r(e) {
                return i ? i.bind(e) : n.bind(e);
            }
            function o() {
                return i
                    ? i.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        49971: (e, t, s) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                s(25839),
                s(71910),
                s(65780),
                s(4865));
        },
        57249: (e, t, s) => {
            'use strict';
            e.exports = s.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        65343: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => n });
            var n = (function (e) {
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
        65780: (e, t, s) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return n.workAsyncStorageInstance;
                    },
                }));
            let n = s(90720);
        },
        68545: (e, t, s) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let n = s(20567)._(s(89729));
            function i(e, t) {
                var s;
                let i = {};
                'function' == typeof e && (i.loader = e);
                let l = { ...i, ...t };
                return (0, n.default)({ ...l, modules: null == (s = l.loadableGenerated) ? void 0 : s.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        69394: (e, t, s) => {
            'use strict';
            var n;
            ((t.HB = function (e, t) {
                let { objectsCount: s = 1, objectPosX: n = 1, objectPosY: l = 1 } = t,
                    r = (0, i.makeMetaParams)(2),
                    o = {
                        ...t,
                        objectsCount: s,
                        objectPosX: n,
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
                    let { objectsCount: s = 1, objectPosX: n = 1, objectPosY: l = 1 } = t,
                        r = (0, i.makeMetaParams)(2),
                        o = {
                            ...t,
                            objectsCount: s,
                            objectPosX: n,
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
            let i = s(96195);
            (n || (n = {})).ConcertScreen = 'concert_screen';
        },
        82572: (e, t, s) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: s = '', mainObjectType: l = i.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                    o = (0, n.makeMetaParams)(1),
                    a = { ...t, skeletonId: s, mainObjectType: l, mainObjectId: r, _meta: o };
                e.trackEvent('Tab.Opened', a);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: s = '', mainObjectType: l = i.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                        o = (0, n.makeMetaParams)(1),
                        a = { ...t, skeletonId: s, mainObjectType: l, mainObjectId: r, _meta: o };
                    e.trackEvent('Tab.Loaded', a);
                }));
            let n = s(96195),
                i = s(44031);
        },
        83279: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 95587));
        },
        84361: (e, t, s) => {
            'use strict';
            s.d(t, { Te: () => M, XW: () => w });
            var n = s(74631),
                i = s(71910);
            function l(e, t, s) {
                let n,
                    i = s.initialDeps ?? [];
                function l() {
                    var l, r, o, a;
                    let d, c;
                    s.key && (null == (l = s.debug) ? void 0 : l.call(s)) && (d = Date.now());
                    let u = e();
                    if (!(u.length !== i.length || u.some((e, t) => i[t] !== e))) return n;
                    if (
                        ((i = u),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)) && (c = Date.now()),
                        (n = t(...u)),
                        s.key && (null == (o = s.debug) ? void 0 : o.call(s)))
                    ) {
                        let e = Math.round((Date.now() - d) * 100) / 100,
                            t = Math.round((Date.now() - c) * 100) / 100,
                            n = t / 16,
                            i = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${i(t, 5)} /${i(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * n, 120))}deg 100% 31%);`,
                            null == s ? void 0 : s.key,
                        );
                    }
                    return (null == (a = null == s ? void 0 : s.onChange) || a.call(s, n), n);
                }
                return (
                    (l.updateDeps = (e) => {
                        i = e;
                    }),
                    l
                );
            }
            function r(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let o = (e, t, s) => {
                    let n;
                    return function (...i) {
                        (e.clearTimeout(n), (n = e.setTimeout(() => t.apply(this, i), s)));
                    };
                },
                a = (e) => e,
                d = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        n = [];
                    for (let e = t; e <= s; e++) n.push(e);
                    return n;
                },
                c = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = e.targetWindow;
                    if (!n) return;
                    let i = (e) => {
                        let { width: s, height: n } = e;
                        t({ width: Math.round(s), height: Math.round(n) });
                    };
                    if ((i(s.getBoundingClientRect()), !n.ResizeObserver)) return () => {};
                    let l = new n.ResizeObserver((t) => {
                        let n = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void i({ width: t.inlineSize, height: t.blockSize });
                            }
                            i(s.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(n) : n();
                    });
                    return (
                        l.observe(s, { box: 'border-box' }),
                        () => {
                            l.unobserve(s);
                        }
                    );
                },
                u = { passive: !0 },
                h = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        n(),
                        s.addEventListener('resize', n, u),
                        () => {
                            s.removeEventListener('resize', n);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                f = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = e.targetWindow;
                    if (!n) return;
                    let i = 0,
                        l =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      n,
                                      () => {
                                          t(i, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (n) => () => {
                            let { horizontal: r, isRtl: o } = e.options;
                            ((i = r ? s.scrollLeft * ((o && -1) || 1) : s.scrollTop), l(), t(i, n));
                        },
                        a = r(!0),
                        d = r(!1);
                    (d(), s.addEventListener('scroll', a, u));
                    let c = e.options.useScrollendEvent && m;
                    return (
                        c && s.addEventListener('scrollend', d, u),
                        () => {
                            (s.removeEventListener('scroll', a), c && s.removeEventListener('scrollend', d));
                        }
                    );
                },
                g = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = e.targetWindow;
                    if (!n) return;
                    let i = 0,
                        l =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      n,
                                      () => {
                                          t(i, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (n) => () => {
                            ((i = s[e.options.horizontal ? 'scrollX' : 'scrollY']), l(), t(i, n));
                        },
                        a = r(!0),
                        d = r(!1);
                    (d(), s.addEventListener('scroll', a, u));
                    let c = e.options.useScrollendEvent && m;
                    return (
                        c && s.addEventListener('scrollend', d, u),
                        () => {
                            (s.removeEventListener('scroll', a), c && s.removeEventListener('scrollend', d));
                        }
                    );
                },
                _ = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height']);
                },
                p = (e, { adjustments: t = 0, behavior: s }, n) => {
                    var i, l;
                    null == (l = null == (i = n.scrollElement) ? void 0 : i.scrollTo) || l.call(i, { [n.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                v = (e, { adjustments: t = 0, behavior: s }, n) => {
                    var i, l;
                    null == (l = null == (i = n.scrollElement) ? void 0 : i.scrollTo) || l.call(i, { [n.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
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
                                    measureElement: _,
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
                                n = new Map();
                            for (let i = t - 1; i >= 0; i--) {
                                let t = e[i];
                                if (s.has(t.lane)) continue;
                                let l = n.get(t.lane);
                                if ((null == l || t.end > l.end ? n.set(t.lane, t) : t.end < l.end && s.set(t.lane, !0), s.size === this.options.lanes)) break;
                            }
                            return n.size === this.options.lanes
                                ? Array.from(n.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = l(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, s, n, i) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: s, getItemKey: n, enabled: i }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = l(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: n, enabled: i }, l) => {
                                if (!i) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let o = this.measurementsCache.slice(0, r);
                                for (let i = r; i < e; i++) {
                                    let e = n(i),
                                        r = 1 === this.options.lanes ? o[i - 1] : this.getFurthestMeasurement(o, i),
                                        a = r ? r.end + this.options.gap : t + s,
                                        d = l.get(e),
                                        c = 'number' == typeof d ? d : this.options.estimateSize(i),
                                        u = a + c,
                                        h = r ? r.lane : i % this.options.lanes;
                                    o[i] = { index: i, start: a, size: c, end: u, key: e, lane: h };
                                }
                                return ((this.measurementsCache = o), o);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = l(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, s, n) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: s, lanes: n }) {
                                              let i = e.length - 1,
                                                  l = E(0, i, (t) => e[t].start, s),
                                                  r = l;
                                              if (1 === n) for (; r < i && e[r].end < s + t;) r++;
                                              else if (n > 1) {
                                                  let o = Array(n).fill(0);
                                                  for (; r < i && o.some((e) => e < s + t);) {
                                                      let t = e[r];
                                                      ((o[t.lane] = t.end), r++);
                                                  }
                                                  let a = Array(n).fill(s + t);
                                                  for (; l > 0 && a.some((e) => e >= s);) {
                                                      let t = e[l];
                                                      ((a[t.lane] = t.start), l--);
                                                  }
                                                  ((l = Math.max(0, l - (l % n))), (r = Math.min(i, r + (n - 1 - (r % n)))));
                                              }
                                              return { startIndex: l, endIndex: r };
                                          })({ measurements: e, outerSize: t, scrollOffset: s, lanes: n })
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
                            (e, t, s, n, i) => (null === n || null === i ? [] : e({ startIndex: n, endIndex: i, overscan: t, count: s })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                s = e.getAttribute(t);
                            return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let s = this.indexFromElement(e),
                                n = this.measurementsCache[s];
                            if (!n) return;
                            let i = n.key,
                                l = this.elementsCache.get(i);
                            (l !== e && (l && this.observer.unobserve(l), this.observer.observe(e), this.elementsCache.set(i, e)),
                                e.isConnected && this.resizeItem(s, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let n = t - (this.itemSizeCache.get(s.key) ?? s.size);
                            0 !== n &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(s, n, this)
                                    : s.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += n), behavior: void 0 }),
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
                                for (let n = 0, i = e.length; n < i; n++) {
                                    let i = t[e[n]];
                                    s.push(i);
                                }
                                return s;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return r(t[E(0, t.length - 1, (e) => r(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let n = this.getSize(),
                                i = this.getScrollOffset();
                            ('auto' === t && (t = e >= i + n ? 'end' : 'start'), 'center' === t ? (e += (s - n) / 2) : 'end' === t && (e -= n));
                            let l = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[l]
                                            : this.scrollElement[l]
                                        : 0) - n,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let n = this.getSize(),
                                i = this.getScrollOffset();
                            if ('auto' === t)
                                if (s.end >= i + n - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(s.start <= i + this.options.scrollPaddingStart)) return [i, t];
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
                            let n = this.getOffsetForIndex(e, t);
                            if (!n) return;
                            let [i, l] = n;
                            (this._scrollToOffset(i, { adjustments: void 0, behavior: s }),
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
                                    n = s.length - 1;
                                for (; n > 0 && e.some((e) => null === e);) {
                                    let t = s[n];
                                    (null === e[t.lane] && (e[t.lane] = t.end), n--);
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
            let E = (e, t, s, n) => {
                    for (; e <= t;) {
                        let i = ((e + t) / 2) | 0,
                            l = s(i);
                        if (l < n) e = i + 1;
                        else {
                            if (!(l > n)) return i;
                            t = i - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                S = 'undefined' != typeof document ? n.useLayoutEffect : n.useEffect;
            function C(e) {
                let t = n.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, n) => {
                            var l;
                            (n ? (0, i.flushSync)(t) : t(), null == (l = e.onChange) || l.call(e, s, n));
                        },
                    },
                    [l] = n.useState(() => new b(s));
                return (l.setOptions(s), S(() => l._didMount(), []), S(() => l._willUpdate()), l);
            }
            function M(e) {
                return C({ observeElementRect: c, observeElementOffset: f, scrollToFn: v, ...e });
            }
            function w(e) {
                return C({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: h,
                    observeElementOffset: g,
                    scrollToFn: p,
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
            s.d(t, { M: () => n });
            var n = (function (e) {
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
            var n = s(25839),
                i = s(82298),
                l = s(88204),
                r = s(74631),
                o = s(39004),
                a = s(8487),
                d = s(61493),
                c = s(68934),
                u = s(4071),
                h = s(35622),
                m = s(5867),
                f = s(4254),
                g = s(51859),
                _ = s(91149),
                p = s(92942),
                v = s(65343),
                b = s(89209),
                E = s(20790),
                S = s(27954),
                C = s(31488),
                M = s(36159),
                w = s(57549),
                y = s(69041),
                O = s(19412),
                x = s(79396),
                A = s(9931),
                I = s(6968),
                T = s(51246),
                z = s(66738),
                R = s(86869),
                j = s(52512),
                N = s(6323),
                L = s(27819),
                k = s(86432),
                D = s.n(k);
            let P = (0, l.PA)((e) => {
                let { className: t, artist: s } = e,
                    { ref: l, intersectionPropertyId: o } = (0, j.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: c },
                    } = (0, S.g)(),
                    { id: h, name: m, coverUri: g } = s,
                    _ = (0, r.useCallback)(() => {
                        a(h);
                    }, [a, h]),
                    p = c(h),
                    v = (0, r.useMemo)(
                        () =>
                            (0, n.jsx)(R.t, {
                                className: D().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, n.jsxs)(u.$, {
                                    radius: 'round',
                                    className: D().coverBlock,
                                    variant: 'default',
                                    onClick: _,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': p,
                                    'aria-label': m,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, n.jsx)(N.B, { className: D().image, src: g || L.A.src, fit: 'cover', alt: m, withAvatarReplace: !!g, 'aria-hidden': !0 }),
                                        (0, n.jsx)('div', {
                                            className: (0, i.$)(D().like),
                                            children: (0, n.jsx)(z.I, { variant: 'likedVariant', size: 's', className: D().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [p, g, m, _],
                    );
                return (0, n.jsx)(T.MN, {
                    ref: l,
                    className: (0, i.$)(D().root, { [D().root_selected]: p }, t),
                    textPosition: 'center',
                    title: (0, n.jsx)(f.HL, {
                        'aria-hidden': !0,
                        className: D().name,
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
            var W = s(22984),
                F = s.n(W);
            let G = { [g.u.Desktop]: { start: 40, end: 40 }, [g.u.Mobile]: { start: 40, end: 40 } },
                B = (0, l.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: s } = (0, o.A)(),
                        {
                            wizard: l,
                            settings: { isMobile: g, isWindowsApplication: T, isLinuxApplication: z },
                            user: R,
                        } = (0, S.g)(),
                        { notify: j } = (0, p.l)(),
                        N = (0, E.z)(),
                        [L, k] = (0, c.d)(),
                        D = (0, m.zb)(0),
                        W = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!D.onTabChange || e === D.value) return;
                                D.onTabChange(e);
                                let s = null == (t = l.genres[e]) ? void 0 : t.id;
                                (l.setFilter(s), null == L || L.scrollTo({ top: 0 }));
                            },
                            [l, D, L],
                        ),
                        B = (0, r.useMemo)(() => {
                            switch (l.selectedArtistsQuantity) {
                                case 0:
                                    return s({ id: 'wizard.button-tune' });
                                case 1:
                                    return s({ id: 'wizard.button-little-more' });
                                case 2:
                                    return s({ id: 'wizard.button-one-more' });
                                default:
                                    return s({ id: 'wizard.button-done' });
                            }
                        }, [l.selectedArtistsQuantity, s]),
                        V = (0, r.useMemo)(
                            () =>
                                (0, n.jsx)(A.wI, {
                                    className: F().tabCarousel,
                                    ...D,
                                    onTabChange: W,
                                    isShimmerVisible: l.loadingState === M.G.PENDING,
                                    shimmer: (0, n.jsx)(A.zr, { isActive: !0, className: F().tabCarousel, shimmerClassName: F().tabShimmer, count: g ? 2 : 3 }),
                                    children: l.genres.map((e, t) =>
                                        (0, n.jsx)(
                                            x.o,
                                            {
                                                className: (0, i.$)(F().filter, { [F().filter_selected]: t === D.value }),
                                                titleClassName: F().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [l.genres, D, W, l.loadingState, g],
                        ),
                        H = (0, r.useCallback)(() => {
                            l.loadArtists(60);
                        }, [l]);
                    (0, r.useEffect)(() => {
                        l.filter && H();
                    }, [l.filter, H]);
                    let U = (0, r.useCallback)(async () => {
                        (await l.loadGenres(), H());
                    }, [l, H]);
                    ((0, r.useEffect)(() => {
                        l.modal.isOpened && U();
                    }, [l, l.modal.isOpened, U]),
                        (0, r.useEffect)(() => {
                            l.loadingState === M.G.REJECT &&
                                (l.modal.close(), j((0, n.jsx)(w.h, { error: s({ id: 'error-messages.error-load-wizard' }) }), { containerId: _.u.ERROR }));
                        }, [l, l.loadGenres, l.loadingState, s, j]));
                    let K = (0, r.useMemo)(
                            () =>
                                (0, n.jsx)(f.DZ, {
                                    className: F().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, n.jsx)(a.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        $ = (0, r.useCallback)(async () => {
                            (l.canFinish ? (await l.finish()) === C.F.OK && (await R.getSettings(), await (null == t ? void 0 : t())) : l.loadArtists(), l.modal.close());
                        }, [t, R, l]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == N ||
                                    N.addShortcutsListener(b.M.MAIN, v.l.CLOSE, () => {
                                        l.modal.isOpened && $();
                                    }),
                                () => {
                                    null == N || N.removeShortcutsListener(b.M.MAIN, v.l.CLOSE);
                                }
                            ),
                            [$, l.modal.isOpened, N],
                        ),
                        (0, n.jsxs)(h.a, {
                            className: (0, i.$)(F().root, { [F().root_withCustomControls]: T || z }),
                            headerClassName: F().modalHeader,
                            contentClassName: F().modalContent,
                            open: l.modal.isOpened,
                            onOpenChange: l.modal.onOpenChange,
                            onClose: $,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: s({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: g && K,
                            escapeKey: !1,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: F().wrapper,
                                    children: [
                                        !g && K,
                                        (0, n.jsx)(f.HL, {
                                            className: F().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, n.jsx)(a.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, n.jsx)(u.$, {
                                            className: F().button,
                                            size: g ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: $,
                                            disabled: !l.canFinish,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, n.jsx)(f.HL, { variant: 'div', size: 'm', weight: 'medium', children: B }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)('div', {
                                    className: F().mainContainer,
                                    children: [
                                        (0, n.jsx)(y.F, { className: F().carousel, carouselElement: V, scrollPadding: G }),
                                        (0, n.jsx)(I.$, {
                                            withFooter: !1,
                                            className: (0, i.$)(F().scrollContainer, F().important),
                                            itemContentCallback: (e) => {
                                                let t = l.artistsByGenre[e];
                                                if (!t) {
                                                    let e = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.artist' }) });
                                                    return (0, n.jsx)(O.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, n.jsx)(P, { artist: t }, t.id);
                                            },
                                            data: l.artistsByGenre,
                                            endReached: H,
                                            listClassName: F().content,
                                            itemClassName: F().item,
                                            pageSize: 60,
                                            handleRef: k,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        89729: (e, t, s) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let n = s(25839),
                i = s(74631),
                l = s(95102);
            function r(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            s(49971);
            let o = { loader: () => Promise.resolve(r(() => null)), loading: null, ssr: !0 },
                a = function (e) {
                    let t = { ...o, ...e },
                        s = (0, i.lazy)(() => t.loader().then(r)),
                        a = t.loading;
                    function d(e) {
                        let r = a ? (0, n.jsx)(a, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            o = !t.ssr || !!t.loading,
                            d = o ? i.Suspense : i.Fragment,
                            c = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(s, { ...e })] })
                                : (0, n.jsx)(l.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(s, { ...e }) });
                        return (0, n.jsx)(d, { ...(o ? { fallback: r } : {}), children: c });
                    }
                    return ((d.displayName = 'LoadableComponent'), d);
                };
        },
        90720: (e, t, s) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (0, s(46450).createAsyncLocalStorage)();
        },
        95102: (e, t, s) => {
            'use strict';
            function n(e) {
                let { reason: t, children: s } = e;
                return s;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                s(29834));
        },
        95587: (e, t, s) => {
            'use strict';
            s.d(t, { NonMusicPage: () => T });
            var n = s(25839),
                i = s(82298),
                l = s(88204),
                r = s(74631),
                o = s(39004),
                a = s(8487),
                d = s(61493),
                c = s(97762),
                u = s(71035),
                h = s(68934),
                m = s(13833),
                f = s(4254),
                g = s(19425),
                _ = s(32113),
                p = s(64715),
                v = s(89257),
                b = s(1407),
                E = s(20258),
                S = s(10322),
                C = s(89192),
                M = s(30716),
                w = s(27954),
                y = s(99401),
                O = s(26076),
                x = s(10603),
                A = s(36245),
                I = s.n(A);
            let T = (0, l.PA)(() => {
                let { nonMusic: e, user: t } = (0, w.g)(),
                    { formatMessage: s } = (0, o.A)(),
                    { contentScrollRef: l, setContentScrollRef: A } = (0, C.g)(),
                    [T, z] = (0, h.d)();
                ((0, r.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, M.J)(e.landing.isResolved));
                let R = (0, g._)(e.landing),
                    j = (0, u.c)(() => {
                        if (e.landing.isLoaded) return e.landing.getSkeleton({ id: c.p.NON_MUSIC, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                return (
                    e.landing.isNeededToLoad && (0, r.use)(e.landing.getSkeleton({ id: c.p.NON_MUSIC, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, n.jsxs)(S.n, {
                        pageId: E._Q.NON_MUSIC,
                        children: [
                            (0, n.jsxs)(b.h, {
                                scrollElement: l,
                                outerTitle: s({ id: 'entity-names.podcasts-and-books' }),
                                headerElement: T,
                                shouldHideHeader: e.landing.hasUpperBlocks,
                                children: [
                                    (0, n.jsx)(x.Y, {
                                        variant: x.V.TEXT,
                                        showControls: !1,
                                        disableStickyVariant: !0,
                                        children: (0, n.jsx)('div', {
                                            className: I().header,
                                            children: (0, n.jsx)(f.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                children: (0, n.jsx)(a.A, { id: 'entity-names.podcasts-and-books' }),
                                            }),
                                        }),
                                    }),
                                    (0, n.jsxs)(m.N, {
                                        className: I().root,
                                        containerClassName: I().content,
                                        ref: A,
                                        'data-test-id': d.Xk.nonMusic.NON_MUSIC_PAGE,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: (0, i.$)(I().landing, { [I().landing_onlyWizard]: R }),
                                                children: (0, n.jsx)(_.E, {
                                                    landing: e.landing,
                                                    headerConcealerComponent: (0, n.jsx)('div', { ref: z }),
                                                    errorComponent: (0, n.jsx)(p.SomethingWentWrong, { className: I().error, withBackwardControl: !1 }),
                                                }),
                                            }),
                                            (0, n.jsx)(O.A, { children: (0, n.jsx)(y.w, { className: I().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsx)(v.p, { onFinishSuccess: j }),
                        ],
                    })
                );
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8451, 1583, 8561, 8803, 6287, 3112, 2e3, 6749, 6392, 3472, 2121, 7170, 1632, 5743, 3084, 3021, 5058, 3789, 9468, 364, 9122, 346, 6706, 4771, 1311,
                5201, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215, 3257, 2038, 4163, 3246, 7848, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 8372,
                5898, 1808, 8222, 8892, 4932, 5622, 3268, 2445, 5853, 4018, 4475, 5056, 7358,
            ],
            () => e((e.s = 83279)),
        ),
            (_N_E = e.O()));
    },
]);
