(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4361, 8074],
    {
        1095: (e) => {
            e.exports = {
                root: 'KidsPage_root__yycsJ',
                content: 'KidsPage_content__08pPR',
                header: 'KidsPage_header__2Gk2l',
                landing: 'KidsPage_landing__3QZZj',
                landing_onlyWizard: 'KidsPage_landing_onlyWizard__xKyDo',
                footer: 'KidsPage_footer__p7SVD',
                error: 'KidsPage_error__qa7Qo',
            };
        },
        6968: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => _ });
            var i = s(25839),
                n = s(82298),
                l = s(28631),
                r = s(74631);
            let o = (e) => {
                    let { style: t, forwardRef: s, context: n, ...l } = e,
                        r = (null == n ? void 0 : n.listAriaLabel) || void 0,
                        o = (null == n ? void 0 : n.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': r, style: { ...t }, ref: s, ...l });
                },
                a = (0, r.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
            var d = s(45300),
                c = s.n(d);
            let h = (e) => {
                    let { style: t, forwardRef: s, withFooter: l, withHeader: r, withForceScroll: o, ...a } = e;
                    return (0, i.jsx)('div', {
                        className: (0, n.$)(c().scroller, { [c().scroller_withFooter]: l, [c().scroller_withHeader]: r, [c().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: s,
                        ...a,
                        tabIndex: -1,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e }));
            var m = s(10508),
                g = s(63257);
            let f = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: n,
                            debounceDurationInMs: l = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...h
                        } = e,
                        [u, f] = (0, r.useState)(null),
                        _ = (0, r.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == n || n(e), a.length > 0 && f(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            n = Math.floor(e.startIndex / t);
                                        for (let e = n; e < i; e++) s(e);
                                    }
                                }, l),
                            [l, n, t, s, a],
                        );
                    (0, r.useEffect)(() => {
                        a.length > 0 && u && _(u);
                    }, a);
                    let p = (0, r.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, l);
                    }, [d, l]);
                    return (0, i.jsx)(g.sN, { ref: c, rangeChanged: _, totalCount: o, endReached: p, ...h });
                },
                _ = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: h,
                            itemContentCallback: m,
                            listClassName: g,
                            overscan: _ = 700,
                            pageSize: p = 20,
                            totalCount: v,
                            totalRequests: E,
                            debounceDurationInMs: b,
                            initialItemCount: C,
                            minInitialItemCount: S = 20,
                            handleRef: w,
                            alwaysShowScrollbar: M = !1,
                            testId: x,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...O
                        } = e,
                        [z, T] = (0, r.useState)(!1),
                        y = (0, r.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        R = (0, r.useMemo)(() => {
                            var e, t;
                            return A
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
                        }, [s, E, A]),
                        L = C ? Math.min(C, S) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(c().root, { [c().root_scrolling]: z || M, [c().root_notScrolling]: !z && !M }, t),
                        'data-test-id': x,
                        children: [
                            A && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(f, {
                                overscan: _,
                                components: R,
                                listClassName: g,
                                itemClassName: h,
                                isScrolling: y,
                                itemContent: m,
                                scrollerRef: w,
                                totalCount: v,
                                pageSize: p,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: b,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: I,
                                ...O,
                            }),
                            A && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
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
        19425: (e, t, s) => {
            'use strict';
            s.d(t, { _: () => n });
            var i = s(35522);
            let n = (e) => {
                var t, s, n, l;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (s = e.tabs.data[0]) || null == (t = s.blocks) ? void 0 : t.length) === 1 &&
                    (null == (l = e.tabs.data[0]) || null == (n = l.blocks[0]) ? void 0 : n.type) === i.t.WIZARD
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
        49847: (e, t, s) => {
            'use strict';
            s.d(t, { KidsPage: () => z });
            var i = s(25839),
                n = s(82298),
                l = s(88204),
                r = s(74631),
                o = s(39004),
                a = s(8487),
                d = s(61493),
                c = s(97762),
                h = s(71035),
                u = s(13833),
                m = s(4254),
                g = s(19425),
                f = s(32113),
                _ = s(78299),
                p = s(89257),
                v = s(1407),
                E = s(20258),
                b = s(10322),
                C = s(89192),
                S = s(30716),
                w = s(27954),
                M = s(99401),
                x = s(26076),
                A = s(10603),
                I = s(1095),
                O = s.n(I);
            let z = (0, l.PA)(() => {
                let { kids: e, user: t } = (0, w.g)(),
                    { formatMessage: s } = (0, o.A)(),
                    { contentScrollRef: l, setContentScrollRef: I } = (0, C.g)();
                ((0, r.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, S.J)(e.landing.isResolved));
                let z = (0, g._)(e.landing),
                    T = (0, h.c)(() => {
                        if (e.landing.isLoaded) return e.landing.getSkeleton({ id: c.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                return (
                    e.landing.isNeededToLoad && (0, r.use)(e.landing.getSkeleton({ id: c.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, i.jsxs)(b.n, {
                        pageId: E._Q.KIDS,
                        children: [
                            (0, i.jsxs)(v.h, {
                                scrollElement: l,
                                outerTitle: s({ id: 'kids.for-kids' }),
                                children: [
                                    (0, i.jsx)(A.Y, {
                                        variant: A.V.TEXT,
                                        showControls: !1,
                                        children: (0, i.jsx)('div', {
                                            className: O().header,
                                            children: (0, i.jsx)(m.DZ, { variant: 'h1', weight: 'bold', size: 'xl', children: (0, i.jsx)(a.A, { id: 'kids.for-kids' }) }),
                                        }),
                                    }),
                                    (0, i.jsxs)(u.N, {
                                        className: O().root,
                                        containerClassName: O().content,
                                        ref: I,
                                        'data-test-id': d.Xk.kids.KIDS_PAGE,
                                        children: [
                                            (0, i.jsx)('div', {
                                                className: (0, n.$)(O().landing, { [O().landing_onlyWizard]: z }),
                                                children: (0, i.jsx)(f.E, {
                                                    landing: e.landing,
                                                    errorComponent: (0, i.jsx)(_.SomethingWentWrong, { className: O().error, withBackwardControl: !1 }),
                                                }),
                                            }),
                                            (0, i.jsx)(x.A, { children: (0, i.jsx)(M.w, { className: O().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(p.p, { onFinishSuccess: T }),
                        ],
                    })
                );
            });
        },
        57606: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 49847));
        },
        60296: (e, t, s) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: s = '', mainObjectType: l = n.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                    o = (0, i.makeMetaParams)(1),
                    a = { ...t, skeletonId: s, mainObjectType: l, mainObjectId: r, _meta: o };
                e.trackEvent('Tab.Opened', a);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: s = '', mainObjectType: l = n.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        a = { ...t, skeletonId: s, mainObjectType: l, mainObjectId: r, _meta: o };
                    e.trackEvent('Tab.Loaded', a);
                }));
            let i = s(26895),
                n = s(36619);
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
            s.d(t, { Te: () => w, XW: () => M });
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
                _ = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height']);
                },
                p = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var n, l;
                    null == (l = null == (n = i.scrollElement) ? void 0 : n.scrollTo) || l.call(n, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                v = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var n, l;
                    null == (l = null == (n = i.scrollElement) ? void 0 : n.scrollTo) || l.call(n, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
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
            function S(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, i) => {
                            var l;
                            (i ? (0, n.flushSync)(t) : t(), null == (l = e.onChange) || l.call(e, s, i));
                        },
                    },
                    [l] = i.useState(() => new E(s));
                return (l.setOptions(s), C(() => l._didMount(), []), C(() => l._willUpdate()), l);
            }
            function w(e) {
                return S({ observeElementRect: c, observeElementOffset: g, scrollToFn: v, ...e });
            }
            function M(e) {
                return S({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: u,
                    observeElementOffset: f,
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
            s.d(t, { p: () => K });
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
                g = s(4254),
                f = s(51859),
                _ = s(91149),
                p = s(92942),
                v = s(65343),
                E = s(89209),
                b = s(20790),
                C = s(27954),
                S = s(31488),
                w = s(36159),
                M = s(57549),
                x = s(69041),
                A = s(19412),
                I = s(79396),
                O = s(9931),
                z = s(6968),
                T = s(51246),
                y = s(66738),
                R = s(86869),
                L = s(52512),
                D = s(6323),
                j = s(27819),
                k = s(86432),
                N = s.n(k);
            let W = (0, l.PA)((e) => {
                let { className: t, artist: s } = e,
                    { ref: l, intersectionPropertyId: o } = (0, L.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: c },
                    } = (0, C.g)(),
                    { id: u, name: m, coverUri: f } = s,
                    _ = (0, r.useCallback)(() => {
                        a(u);
                    }, [a, u]),
                    p = c(u),
                    v = (0, r.useMemo)(
                        () =>
                            (0, i.jsx)(R.t, {
                                className: N().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, i.jsxs)(h.$, {
                                    radius: 'round',
                                    className: N().coverBlock,
                                    variant: 'default',
                                    onClick: _,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': p,
                                    'aria-label': m,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, i.jsx)(D.B, { className: N().image, src: f || j.A.src, fit: 'cover', alt: m, withAvatarReplace: !!f, 'aria-hidden': !0 }),
                                        (0, i.jsx)('div', {
                                            className: (0, n.$)(N().like),
                                            children: (0, i.jsx)(y.I, { variant: 'likedVariant', size: 's', className: N().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [p, f, m, _],
                    );
                return (0, i.jsx)(T.MN, {
                    ref: l,
                    className: (0, n.$)(N().root, { [N().root_selected]: p }, t),
                    textPosition: 'center',
                    title: (0, i.jsx)(g.HL, {
                        'aria-hidden': !0,
                        className: N().name,
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
            var P = s(22984),
                F = s.n(P);
            let G = { [f.u.Desktop]: { start: 40, end: 40 }, [f.u.Mobile]: { start: 40, end: 40 } },
                K = (0, l.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: s } = (0, o.A)(),
                        {
                            wizard: l,
                            settings: { isMobile: f, isWindowsApplication: T, isLinuxApplication: y },
                            user: R,
                        } = (0, C.g)(),
                        { notify: L } = (0, p.l)(),
                        D = (0, b.z)(),
                        [j, k] = (0, c.d)(),
                        N = (0, m.zb)(0),
                        P = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!N.onTabChange || e === N.value) return;
                                N.onTabChange(e);
                                let s = null == (t = l.genres[e]) ? void 0 : t.id;
                                (l.setFilter(s), null == j || j.scrollTo({ top: 0 }));
                            },
                            [l, N, j],
                        ),
                        K = (0, r.useMemo)(() => {
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
                                (0, i.jsx)(O.wI, {
                                    className: F().tabCarousel,
                                    ...N,
                                    onTabChange: P,
                                    isShimmerVisible: l.loadingState === w.G.PENDING,
                                    shimmer: (0, i.jsx)(O.zr, { isActive: !0, className: F().tabCarousel, shimmerClassName: F().tabShimmer, count: f ? 2 : 3 }),
                                    children: l.genres.map((e, t) =>
                                        (0, i.jsx)(
                                            I.o,
                                            {
                                                className: (0, n.$)(F().filter, { [F().filter_selected]: t === N.value }),
                                                titleClassName: F().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [l.genres, N, P, l.loadingState, f],
                        ),
                        B = (0, r.useCallback)(() => {
                            l.getArtists(60);
                        }, [l]);
                    (0, r.useEffect)(() => {
                        l.filter && B();
                    }, [l.filter, B]);
                    let H = (0, r.useCallback)(async () => {
                        (await l.getGenres(), B());
                    }, [l, B]);
                    ((0, r.useEffect)(() => {
                        l.modal.isOpened && H();
                    }, [l, l.modal.isOpened, H]),
                        (0, r.useEffect)(() => {
                            l.loadingState === w.G.REJECT &&
                                (l.modal.close(), L((0, i.jsx)(M.h, { error: s({ id: 'error-messages.error-load-wizard' }) }), { containerId: _.u.ERROR }));
                        }, [l, l.getGenres, l.loadingState, s, L]));
                    let U = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(g.DZ, {
                                    className: F().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, i.jsx)(a.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        $ = (0, r.useCallback)(async () => {
                            (l.selectedArtistsCounter < 3 ? l.getArtists() : (await l.finish()) === S.F.OK && (await R.getSettings(), await (null == t ? void 0 : t())),
                                l.modal.close());
                        }, [t, R, l]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == D ||
                                    D.addShortcutsListener(E.M.MAIN, v.l.CLOSE, () => {
                                        l.modal.isOpened && $();
                                    }),
                                () => {
                                    null == D || D.removeShortcutsListener(E.M.MAIN, v.l.CLOSE);
                                }
                            ),
                            [$, l.modal.isOpened, D],
                        ),
                        (0, i.jsxs)(u.a, {
                            className: (0, n.$)(F().root, { [F().root_withCustomControls]: T || y }),
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
                            header: f && U,
                            escapeKey: !1,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: F().wrapper,
                                    children: [
                                        !f && U,
                                        (0, i.jsx)(g.HL, {
                                            className: F().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, i.jsx)(a.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, i.jsx)(h.$, {
                                            className: F().button,
                                            size: f ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: $,
                                            disabled: l.selectedArtistsCounter < 3,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, i.jsx)(g.HL, { variant: 'div', size: 'm', weight: 'medium', children: K }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)('div', {
                                    className: F().mainContainer,
                                    children: [
                                        (0, i.jsx)(x.F, { className: F().carousel, carouselElement: V, scrollPadding: G }),
                                        (0, i.jsx)(z.$, {
                                            withFooter: !1,
                                            className: (0, n.$)(F().scrollContainer, F().important),
                                            itemContentCallback: (e) => {
                                                let t = l.artistsByGenre[e];
                                                if (!t) {
                                                    let e = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.artist' }) });
                                                    return (0, i.jsx)(A.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, i.jsx)(W, { artist: t }, t.id);
                                            },
                                            data: l.artistsByGenre,
                                            endReached: B,
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
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8451, 1583, 8561, 1676, 6287, 7349, 2e3, 6749, 7339, 3472, 2121, 1632, 5743, 3084, 3021, 5058, 3789, 9468, 364, 1107, 8420, 6706, 1311, 5201, 9212,
                260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 3257, 4305, 3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898,
                2533, 8222, 4932, 5622, 9973, 5853, 6271, 7804, 4475, 5056, 7358,
            ],
            () => e((e.s = 57606)),
        ),
            (_N_E = e.O()));
    },
]);
