(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2626],
    {
        5085: (e) => {
            e.exports = {
                container: 'SkeletonBlock_container__BE40w',
                important: 'SkeletonBlock_important__mf3Zo',
                container_withContentVisibility: 'SkeletonBlock_container_withContentVisibility__Iq2_D',
                headerContainer: 'SkeletonBlock_headerContainer__qVrPn',
                tracksContainer: 'SkeletonBlock_tracksContainer__BEMi0',
            };
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        20736: (e, t, l) => {
            Promise.resolve().then(l.bind(l, 93398));
        },
        21076: (e) => {
            e.exports = {
                tab: 'HeaderTabs_tab__qmO6o',
                tabCarousel: 'HeaderTabs_tabCarousel__0JoCN',
                important: 'HeaderTabs_important__eRbLm',
                header: 'HeaderTabs_header__P_LJZ',
                stickyTabs: 'HeaderTabs_stickyTabs__R5qFO',
            };
        },
        21800: (e) => {
            e.exports = { root: 'VirtualizedSkeletonBlock_root__oFWuv' };
        },
        29517: (e) => {
            e.exports = { root: 'Skeleton_root__TJpzw', upperBlocks: 'Skeleton_upperBlocks__fbW1Q', tabPanel: 'Skeleton_tabPanel__o1Zhn' };
        },
        58857: (e) => {
            e.exports = {
                content: 'LandingPage_content__ovHlJ',
                root: 'LandingPage_root__B2lPp',
                header: 'LandingPage_header__TiraG',
                title: 'LandingPage_title__gsIx4',
                footer: 'LandingPage_footer__K9y8K',
                error: 'LandingPage_error__mEsH2',
            };
        },
        70030: (e, t, l) => {
            'use strict';
            l.d(t, { u2: () => d, rl: () => i, mz: () => r, yq: () => h, zE: () => s });
            var i,
                s,
                o = l(9519),
                a = l(39499);
            (!(function (e) {
                ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'));
            })(i || (i = {})),
                (function (e) {
                    ((e.HIDDEN = 'HIDDEN'), (e.VISIBLE = 'VISIBLE'));
                })(s || (s = {})));
            class n {
                attachSkeleton(e) {
                    (this.disconnect(), (this.skeleton = e));
                }
                observe(e) {
                    let { element: t, id: l } = e;
                    t && this.detector && (this.targetsToIdMap.set(t, l), this.detector.observe(t));
                }
                unobserve(e) {
                    let { element: t } = e;
                    t && this.detector && (this.targetsToIdMap.delete(t), this.detector.unobserve(t));
                }
                observeList(e) {
                    return this.virtualizedMetadataLoader
                        ? (this.stopObservingList(),
                          (this.listItems = e.items),
                          (this.potentialBlocksIndexes = this.calculatePotentialBlocksIndexes()),
                          this.virtualizedMetadataLoader.observeList({ ...e, items: this.getPotentialItems(), onVisibilityChange: this.onListVisibilityChange }),
                          this.subscribeToBlocksLoadingStatus(),
                          () => this.stopObservingList())
                        : () => void 0;
                }
                disconnect() {
                    var e;
                    (this.stopObservingList(), null == (e = this.detector) || e.disconnect(), this.targetsToIdMap.clear(), (this.skeleton = void 0));
                }
                calculatePotentialBlocksIndexes() {
                    let e = [];
                    return (
                        this.listItems.forEach((t, l) => {
                            var s;
                            let o = null == (s = this.skeleton) ? void 0 : s.getNodeById(t.id);
                            o && o.state.loadingStatus.value !== i.REJECT && e.push(l);
                        }),
                        e
                    );
                }
                getPotentialItems() {
                    let e = [];
                    return (
                        this.potentialBlocksIndexes.forEach((t) => {
                            let l = this.listItems[t];
                            l && e.push(l);
                        }),
                        e
                    );
                }
                subscribeToBlocksLoadingStatus() {
                    this.listItems.forEach((e) => {
                        var t;
                        let l = null == (t = this.skeleton) ? void 0 : t.getNodeById(e.id);
                        if (!l) return;
                        let s = l.state.loadingStatus.value === i.REJECT,
                            o = l.state.loadingStatus.onChange(() => {
                                let e = l.state.loadingStatus.value === i.REJECT;
                                e !== s && ((s = e), this.updatePotentialBlocksIndexes());
                            });
                        this.blocksLoadingStatusUnsubs.push(o);
                    });
                }
                stopObservingList() {
                    var e;
                    (this.blocksLoadingStatusUnsubs.forEach((e) => e()),
                        (this.blocksLoadingStatusUnsubs = []),
                        null == (e = this.virtualizedMetadataLoader) || e.unobserveList(),
                        (this.listItems = []),
                        (this.potentialBlocksIndexes = []));
                }
                constructor({ visibilityConfig: e }) {
                    if (
                        ((0, o._)(this, 'detector', void 0),
                        (0, o._)(this, 'virtualizedMetadataLoader', void 0),
                        (0, o._)(this, 'skeleton', void 0),
                        (0, o._)(this, 'targetsToIdMap', new Map()),
                        (0, o._)(this, 'listItems', []),
                        (0, o._)(this, 'potentialBlocksIndexes', []),
                        (0, o._)(this, 'blocksLoadingStatusUnsubs', []),
                        (0, o._)(this, 'updatePotentialBlocksIndexes', () => {
                            var e;
                            let t = this.potentialBlocksIndexes,
                                l = this.calculatePotentialBlocksIndexes();
                            ((this.potentialBlocksIndexes = l),
                                (t.length === l.length && t.every((e, t) => e === l[t])) ||
                                    null == (e = this.virtualizedMetadataLoader) ||
                                    e.updateItems(this.getPotentialItems()));
                        }),
                        (0, o._)(this, 'setNodeVisibility', (e, t) => {
                            var l;
                            let i = null == (l = this.skeleton) ? void 0 : l.getNodeById(e);
                            if (!i) return;
                            let o = t ? s.VISIBLE : s.HIDDEN;
                            i.state.visibilityStatus.value !== o && (i.state.visibilityStatus.value = o);
                        }),
                        (0, o._)(this, 'onListVisibilityChange', (e) => {
                            e.forEach((e) => {
                                this.setNodeVisibility(e.id, e.isVisible);
                            });
                        }),
                        (0, o._)(this, 'onElementsVisibilityChange', (e) => {
                            for (let t of e) {
                                let e = this.targetsToIdMap.get(t.target);
                                e && this.setNodeVisibility(e, t.isIntersecting);
                            }
                        }),
                        'listVisibility' === e.type)
                    ) {
                        this.virtualizedMetadataLoader = e.virtualizedMetadataLoader;
                        return;
                    }
                    this.detector = e.detectorFactory.create({ onVisibilityChange: this.onElementsVisibilityChange });
                }
            }
            class r {
                async loadAndCreateSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: l } = e,
                        i = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(i),
                        await i.loadSkeletonMeta(),
                        i.createSkeletonTree(l),
                        i.onNodesVisibilityChange(),
                        (this.skeleton = i));
                }
                createSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: l } = e,
                        i = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(i), i.createSkeletonTree(l), i.onNodesVisibilityChange(), (this.skeleton = i));
                }
                async loadNodes(e) {
                    if (!this.skeleton) return;
                    let t = [];
                    for (let l of e) {
                        let e = this.skeleton.getNodeById(l);
                        e && t.push(e.load());
                    }
                    await Promise.allSettled(t);
                }
                createVisibilityController(e) {
                    this.hasVisibilityController ||
                        ((this.visibilityController = new n(e)),
                        this.skeleton && this.visibilityController.attachSkeleton(this.skeleton),
                        (this.hasVisibilityController = !0));
                }
                observe(e) {
                    let { target: t, loadIfNoElement: l = !1 } = e,
                        { element: i, id: s } = t;
                    if (!i && l) {
                        var o;
                        let e = null == (o = this.skeleton) ? void 0 : o.getNodeById(s);
                        null == e || e.load();
                        return;
                    }
                    if (!this.visibilityController) throw new a.t('VisibilityController has not been created');
                    this.visibilityController.observe(t);
                }
                unobserve(e) {
                    if (!this.visibilityController) throw new a.t('VisibilityController has not been created');
                    this.visibilityController.unobserve(e);
                }
                observeList(e) {
                    if (!this.visibilityController) throw new a.t('VisibilityController has not been created');
                    return this.visibilityController.observeList(e);
                }
                destroy() {
                    var e, t;
                    (null == (e = this.visibilityController) || e.disconnect(), null == (t = this.skeleton) || t.destroy(), (this.skeleton = void 0));
                }
                constructor({ skeletonFactory: e }) {
                    ((0, o._)(this, 'skeletonFactory', void 0),
                        (0, o._)(this, 'visibilityController', void 0),
                        (0, o._)(this, 'hasVisibilityController', !1),
                        (0, o._)(this, 'skeleton', void 0),
                        (this.skeletonFactory = e));
                }
            }
            class d {
                observe(e, t) {
                    let l = new ResizeObserver(() => t());
                    return (l.observe(e, { box: 'border-box' }), () => l.disconnect());
                }
            }
            let c = (e) => 'window' in e && e.window === e;
            class h {
                observeList(e) {
                    let { container: t, scrollElement: l, items: i, gap: s, overscan: o = 2, onVisibilityChange: a } = e;
                    if (
                        (this.unobserveList(),
                        (this.container = t),
                        (this.scrollElement = l),
                        (this.items = i),
                        (this.gap = s),
                        (this.overscan = Number.isFinite(o) ? Math.max(0, o) : 2),
                        (this.onVisibilityChange = a),
                        (this.abortController = new AbortController()),
                        this.rebuildLayout(),
                        this.scrollElement.addEventListener('scroll', this.scheduleRefresh, { passive: !0, signal: this.abortController.signal }),
                        !c(l))
                    ) {
                        var n;
                        this.stopObservingResize = null == (n = this.resizeObserverAdapter) ? void 0 : n.observe(l, this.scheduleRefresh);
                    }
                    this.refresh();
                }
                updateItems(e) {
                    ((this.items = e), this.rebuildLayout(), this.refresh());
                }
                refresh() {
                    if ((this.cancelScheduledRefresh(), !this.container || !this.scrollElement || !this.onVisibilityChange)) return;
                    if (!this.container.isConnected || 0 === this.layout.totalSize) return void this.updateVisibility([]);
                    let e = this.container.getBoundingClientRect(),
                        t = c(this.scrollElement) ? { top: 0, bottom: this.scrollElement.innerHeight } : this.scrollElement.getBoundingClientRect(),
                        l = Math.max(0, t.top - e.top),
                        i = Math.min(this.layout.totalSize, t.bottom - e.top);
                    if (i <= l) return void this.updateVisibility([]);
                    let s = ((e) => {
                        let { items: t, viewportStart: l, viewportEnd: i, overscan: s } = e;
                        if (0 === t.length) return [];
                        let o = ((e, t) => {
                                let l = 0,
                                    i = e.length - 1,
                                    s = -1;
                                for (; l <= i;) {
                                    let o = Math.floor((l + i) / 2),
                                        a = e[o];
                                    if (!a) break;
                                    a.end >= t ? ((s = o), (i = o - 1)) : (l = o + 1);
                                }
                                return s;
                            })(t, l),
                            a = ((e, t) => {
                                let l = 0,
                                    i = e.length - 1,
                                    s = -1;
                                for (; l <= i;) {
                                    let o = Math.floor((l + i) / 2),
                                        a = e[o];
                                    if (!a) break;
                                    a.start <= t ? ((s = o), (l = o + 1)) : (i = o - 1);
                                }
                                return s;
                            })(t, i);
                        if (-1 === o || -1 === a || o > a) return [];
                        let n = Math.max(0, o - s),
                            r = Math.min(t.length - 1, a + s);
                        return t.slice(n, r + 1);
                    })({ items: this.layout.items, viewportStart: l, viewportEnd: i, overscan: this.overscan });
                    this.updateVisibility(s);
                }
                unobserveList() {
                    var e, t;
                    (null == (e = this.stopObservingResize) || e.call(this),
                        (this.stopObservingResize = void 0),
                        null == (t = this.abortController) || t.abort(),
                        (this.abortController = void 0),
                        this.cancelScheduledRefresh(),
                        this.updateVisibility([]),
                        (this.animationFrameId = void 0),
                        (this.container = void 0),
                        (this.scrollElement = void 0),
                        (this.items = []),
                        (this.layout = { items: [], totalSize: 0 }),
                        (this.gap = 0),
                        (this.overscan = 2),
                        (this.onVisibilityChange = void 0));
                }
                updateVisibility(e) {
                    let t = new Set(e.map((e) => e.id)),
                        l = [];
                    if (
                        (t.forEach((e) => {
                            this.visibleItemIds.has(e) || l.push({ id: e, isVisible: !0 });
                        }),
                        this.visibleItemIds.forEach((e) => {
                            t.has(e) || l.push({ id: e, isVisible: !1 });
                        }),
                        (this.visibleItemIds = t),
                        l.length > 0)
                    ) {
                        var i;
                        null == (i = this.onVisibilityChange) || i.call(this, l);
                    }
                }
                constructor({ resizeObserverAdapter: e } = {}) {
                    ((0, o._)(this, 'resizeObserverAdapter', void 0),
                        (0, o._)(this, 'container', void 0),
                        (0, o._)(this, 'scrollElement', void 0),
                        (0, o._)(this, 'gap', 0),
                        (0, o._)(this, 'overscan', 2),
                        (0, o._)(this, 'onVisibilityChange', void 0),
                        (0, o._)(this, 'abortController', void 0),
                        (0, o._)(this, 'items', []),
                        (0, o._)(this, 'layout', { items: [], totalSize: 0 }),
                        (0, o._)(this, 'visibleItemIds', new Set()),
                        (0, o._)(this, 'animationFrameId', void 0),
                        (0, o._)(this, 'stopObservingResize', void 0),
                        (0, o._)(this, 'rebuildLayout', () => {
                            this.layout = ((e) => {
                                let { items: t, gap: l } = e,
                                    i = [],
                                    s = 0,
                                    o = !1;
                                return (
                                    t.forEach((e, t) => {
                                        if (e.estimatedSize <= 0) return;
                                        let a = e.estimatedSize + l;
                                        (i.push({ id: e.id, index: t, start: s, end: s + a, size: a }), (s += a), (o = !0));
                                    }),
                                    { items: i, totalSize: o ? Math.max(0, s - l) : 0 }
                                );
                            })({ items: this.items, gap: this.gap });
                        }),
                        (0, o._)(this, 'cancelScheduledRefresh', () => {
                            var e;
                            if (void 0 === this.animationFrameId) return;
                            let t = null == (e = this.container) ? void 0 : e.ownerDocument.defaultView;
                            (null == t || t.cancelAnimationFrame(this.animationFrameId), (this.animationFrameId = void 0));
                        }),
                        (0, o._)(this, 'scheduleRefresh', () => {
                            if (!this.container || void 0 !== this.animationFrameId) return;
                            let e = this.container.ownerDocument.defaultView;
                            if (!e) return void this.refresh();
                            this.animationFrameId = e.requestAnimationFrame(() => {
                                ((this.animationFrameId = void 0), this.refresh());
                            });
                        }),
                        (this.resizeObserverAdapter = e));
                }
            }
        },
        79418: (e, t, l) => {
            'use strict';
            l.d(t, { $: () => k });
            var i = l(88800),
                s = l(65724),
                o = l(61013),
                a = l(53548);
            let n = (e) => {
                    let { style: t, forwardRef: l, context: s, ...o } = e,
                        a = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        n = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': a, style: { ...t }, ref: l, ...o });
                },
                r = (0, a.forwardRef)((e, t) => (0, i.jsx)(n, { forwardRef: t, ...e }));
            var d = l(16434),
                c = l.n(d);
            let h = (e) => {
                    let { style: t, forwardRef: l, withFooter: o, withHeader: a, withForceScroll: n, ...r } = e;
                    return (0, i.jsx)('div', {
                        className: (0, s.$)(c().scroller, { [c().scroller_withFooter]: o, [c().scroller_withHeader]: a, [c().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: l,
                        ...r,
                        tabIndex: -1,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e }));
            var b = l(55482),
                v = l(75151);
            let m = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: l,
                            onRangeHandler: s,
                            debounceDurationInMs: o = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: r = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...h
                        } = e,
                        [u, m] = (0, a.useState)(null),
                        k = (0, a.useMemo)(
                            () =>
                                (0, b.A)((e) => {
                                    if ((null == s || s(e), r.length > 0 && m(e), t && l)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < i; e++) l(e);
                                    }
                                }, o),
                            [o, s, t, l, r],
                        );
                    (0, a.useEffect)(() => {
                        r.length > 0 && u && k(u);
                    }, r);
                    let g = (0, a.useMemo)(() => {
                        if (d)
                            return (0, b.A)((e) => {
                                d(e);
                            }, o);
                    }, [d, o]);
                    return (0, i.jsx)(v.sN, { ref: c, rangeChanged: k, totalCount: n, endReached: g, ...h });
                },
                k = (e) => {
                    let {
                            className: t,
                            customComponents: l,
                            onGetDataByPage: n,
                            onGetDataByRange: d,
                            itemClassName: h,
                            itemContentCallback: b,
                            listClassName: v,
                            overscan: k = 700,
                            pageSize: g = 20,
                            totalCount: f,
                            totalRequests: p,
                            debounceDurationInMs: _,
                            initialItemCount: x,
                            minInitialItemCount: I = 20,
                            handleRef: S,
                            alwaysShowScrollbar: C = !1,
                            testId: y,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: E,
                            ...j
                        } = e,
                        [w, L] = (0, a.useState)(!1),
                        B = (0, a.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    L(e);
                                }, 100),
                            [],
                        ),
                        T = (0, a.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == l ? void 0 : l.List) ? e : r,
                                      Item: null == l ? void 0 : l.Item,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == l ? void 0 : l.List) ? t : r,
                                      Item: null == l ? void 0 : l.Item,
                                      Header: null == l ? void 0 : l.Header,
                                      Footer: null == l ? void 0 : l.Footer,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  };
                        }, [l, p, N]),
                        V = x ? Math.min(x, I) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, s.$)(c().root, { [c().root_scrolling]: w || C, [c().root_notScrolling]: !w && !C }, t),
                        'data-test-id': y,
                        children: [
                            N && (null == l ? void 0 : l.Header) && l.Header(),
                            (0, i.jsx)(m, {
                                overscan: k,
                                components: T,
                                listClassName: v,
                                itemClassName: h,
                                isScrolling: B,
                                itemContent: b,
                                scrollerRef: S,
                                totalCount: f,
                                pageSize: g,
                                onPageHandler: n,
                                onRangeHandler: d,
                                debounceDurationInMs: _,
                                initialItemCount: V,
                                shouldTriggerRangeChangedOn: E,
                                ...j,
                            }),
                            N && (null == l ? void 0 : l.Footer) && l.Footer(),
                        ],
                    });
                };
        },
        81123: (e, t, l) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: l = '', mainObjectType: o = s.DomainObjectType.NonApplicable, mainObjectId: a = '' } = t,
                    n = (0, i.makeMetaParams)(1),
                    r = { ...t, skeletonId: l, mainObjectType: o, mainObjectId: a, _meta: n };
                e.trackEvent('Tab.Opened', r);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: l = '', mainObjectType: o = s.DomainObjectType.NonApplicable, mainObjectId: a = '' } = t,
                        n = (0, i.makeMetaParams)(1),
                        r = { ...t, skeletonId: l, mainObjectType: o, mainObjectId: a, _meta: n };
                    e.trackEvent('Tab.Loaded', r);
                }));
            let i = l(92948),
                s = l(92716);
        },
        93398: (e, t, l) => {
            'use strict';
            (l.r(t), l.d(t, { default: () => ey }));
            var i = l(88800),
                s = l(58390),
                o = l(72288),
                a = l(97956),
                n = l(84961),
                r = l(53548),
                d = l(17392),
                c = l(29993),
                h = l(66719),
                u = l(29504),
                b = l(25772),
                v = l(32596),
                m = l(20129),
                k = l(69630),
                g = l(12816),
                f = l(59844),
                p = l(27164),
                _ = l(46422),
                x = l(44230),
                I = l(37670);
            let S = new Set(Object.values(l(46312).p)),
                C = (e) => S.has(e);
            var y = l(86790),
                N = l(60266),
                E = l(56248),
                j = l(58857),
                w = l.n(j);
            let L = (0, n.PA)((e) => {
                let { skeleton: t } = e,
                    { landing: l, user: s } = (0, o.g)(),
                    a = (0, _.W)(),
                    { contentScrollRef: n, setContentScrollRef: S } = (0, x.g)();
                ((0, r.useEffect)(() => () => l.reset(), [l]), (0, I.J)(l.isResolved));
                let j = (0, c.c)(() => {
                    if (l.isLoaded) return l.getSkeleton({ id: l.id || t, showWizard: s.settings.showWizard }, { preloadBlocksCount: 2 });
                });
                if ((l.isNeededToLoad && (0, r.use)(l.getSkeleton({ id: t, showWizard: s.settings.showWizard }, { preloadBlocksCount: 2 })), l.isRejected))
                    return (0, i.jsx)(v.SomethingWentWrong, {});
                let L = !C(l.id) && a.canBack;
                return (0, i.jsx)(f.n, {
                    pageId: g._Q.LANDING,
                    children: (0, i.jsxs)(p.l, {
                        skeleton: t,
                        children: [
                            (0, i.jsx)(k.h, {
                                scrollElement: n,
                                headerThreshold: 134,
                                children: (0, i.jsxs)(h.N, {
                                    className: w().root,
                                    containerClassName: w().content,
                                    ref: S,
                                    'data-test-id': d.Xk.landing.LANDING_PAGE,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: w().header,
                                            children: [
                                                L && (0, i.jsx)(E.L, { withForwardControl: !1, withBackwardControl: L }),
                                                (0, i.jsx)(u.DZ, {
                                                    variant: 'h1',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    className: w().title,
                                                    'data-test-id': d.Xk.landing.LANDING_PAGE_HEADER,
                                                    children: l.title,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)('div', {
                                            className: w().landing,
                                            children: (0, i.jsx)(b.E, {
                                                landing: l,
                                                errorComponent: (0, i.jsx)(v.SomethingWentWrong, { className: w().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, i.jsx)(N.A, { children: (0, i.jsx)(y.w, { className: w().footer }) }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)(m.p, { onFinishSuccess: j }),
                        ],
                    }),
                });
            });
            var B = l(31556),
                T = l(12739),
                V = l(8840),
                P = l(4476),
                M = l(99564),
                R = l(98225),
                A = l(65724),
                z = l(79070),
                F = l(86535),
                O = l(28163),
                D = l(82204),
                H = l(9965),
                W = l(5085),
                G = l.n(W);
            let J = (0, n.PA)((e) => {
                    let { block: t, ref: l, className: s, containerClassName: n, ...d } = e,
                        {
                            isLoading: c,
                            isLoaded: h,
                            isRejected: u,
                            isShimmerVisible: b,
                            isShimmerActive: v,
                            id: m,
                            type: k,
                            meta: g,
                            data: f,
                            hasSentAnalyticsOnLoaded: p,
                            setHasSentAnalyticsOnLoaded: _,
                            setOutdated: x,
                            setIsNeededToLoad: I,
                        } = t;
                    if ((0, T.Q)(t)) return null;
                    let S = H.D[t.type],
                        C = (0, O.f)(),
                        { settings: y, experiments: N } = (0, o.g)(),
                        E = !N.checkExperiment(a.z.WebNextVirtualSkeleton, 'on') && y.browserInfo && !y.browserInfo.isSafari;
                    (0, r.useEffect)(() => {
                        !p && h && (C(), _(!0));
                    }, [p, h, C, _]);
                    let j = (0, z.L)(() => {
                        var e, t;
                        return null != (t = null == l || null == (e = l.current) ? void 0 : e.clientHeight) ? t : 0;
                    });
                    return (0, i.jsx)(
                        S,
                        {
                            setIsNeededToLoad: I,
                            setOutdated: x,
                            isLoaded: h,
                            isLoading: c,
                            isShimmerVisible: b,
                            isShimmerActive: v,
                            isRejected: u,
                            tracksContainerClassName: G().tracksContainer,
                            containerClassName: (0, A.$)(G().container, G().important, n),
                            className: (0, A.$)({ [G().container_withContentVisibility]: E && j }, s),
                            headerClassName: G().headerContainer,
                            meta: g,
                            data: f,
                            type: k,
                            ref: l,
                            headingVariant: 'h2',
                            'data-intersection-property-id': t.id,
                            'data-test-id': t.type,
                            ...d,
                        },
                        m,
                    );
                }),
                K = (0, n.PA)((e) => {
                    let { ...t } = e;
                    return (0, i.jsx)(D.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(F.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, i.jsx)(J, { ...t }),
                    });
                });
            var q = l(52676);
            let Q = (0, n.PA)((e) => {
                    let { block: t, ref: l, onLoad: s, ...o } = e;
                    if (
                        ((0, r.useEffect)(() => {
                            null == s || s();
                        }, [t.isVisible, s]),
                        !(0, T.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let a = q.Y[t.type];
                    return (0, i.jsx)(a, { data: t.data, ref: l, 'data-intersection-property-id': t.id, ...o });
                }),
                X = (0, n.PA)((e) => {
                    let { ...t } = e;
                    return (0, i.jsx)(D.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(F.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, i.jsx)(Q, { ...t }),
                    });
                }),
                $ = (0, n.PA)((e) => ((0, T.Q)(e.block) ? (0, i.jsx)(X, { ...e }) : (0, i.jsx)(K, { ...e })));
            var U = l(93317),
                Y = l(4086),
                Z = l(41928),
                ee = l(74773),
                et = l(63807),
                el = l(87366),
                ei = l(76099),
                es = l(21076),
                eo = l.n(es);
            let ea = (0, n.PA)((e) => {
                var t, l, s;
                let {
                        skeleton: a,
                        landing: n,
                        tabsState: h,
                        tabElementId: u,
                        headerClassName: b,
                        headerVariant: v,
                        stickyHeaderClassName: m,
                        staticHeaderClassName: k,
                        stickyHeaderTabIndex: g,
                        tabWithHeadingTitle: f,
                        tabWithCovers: p,
                        tabWithSubtitle: _,
                    } = e,
                    { tabs: I } = n,
                    { isScrolling: S } = (0, r.useContext)(et.B),
                    { contentScrollRef: C } = (0, x.g)(),
                    {
                        settings: { isMobile: y },
                    } = (0, o.g)(),
                    N = (0, Z.N)().get(Y.ni),
                    E = null == a || null == (t = a.root) ? void 0 : t.getTabsBlock(),
                    j = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    E && N.loadNodes([E.data.id]);
                }, [N, E]);
                let w = (0, c.c)((e) => {
                    var t;
                    (y ? window.scrollTo(0, 0) : C && (C.scrollTop = 0), null == (t = h.onTabChange) || t.call(h, e));
                });
                return (0, i.jsx)(U.Y, {
                    compositeHeaderRef: j,
                    className: (0, A.$)(eo().header, b),
                    variant: v,
                    stickyClassName: m,
                    staticClassName: k,
                    stickyChild: (0, i.jsx)(ei.wI, {
                        isShimmerVisible: I.isLoading || n.isLoading,
                        className: eo().stickyTabs,
                        shimmer: (0, i.jsx)(ei.zr, {}),
                        elementId: u,
                        'data-test-id': d.e8.landing.MAIN_TABS,
                        value: h.value,
                        onTabChange: w,
                        children:
                            null == (l = I.data)
                                ? void 0
                                : l.flatMap((e, t) => {
                                      let { meta: l, blocks: s } = e;
                                      return s.length
                                          ? [
                                                (0, i.jsx)(
                                                    el.o,
                                                    {
                                                        className: eo().tab,
                                                        value: t,
                                                        'aria-label': l.title,
                                                        title: l.title,
                                                        'aria-hidden': !S && v !== U.V.STICKY,
                                                        tabIndex: null != g ? g : S ? 0 : -1,
                                                    },
                                                    l.id,
                                                ),
                                            ]
                                          : [];
                                  }),
                    }),
                    children: (0, i.jsx)(ei.wI, {
                        className: (0, A.$)(eo().tabCarousel, eo().important),
                        elementId: u,
                        'data-test-id': d.e8.landing.MAIN_TABS,
                        ...h,
                        children:
                            null == (s = I.data)
                                ? void 0
                                : s.flatMap((e, t) => {
                                      let { meta: l, data: s, blocks: o } = e;
                                      return o.length
                                          ? [
                                                (0, i.jsx)(
                                                    el.o,
                                                    {
                                                        className: eo().tab,
                                                        value: t,
                                                        'aria-label': l.title,
                                                        title: l.title,
                                                        subtitle: null == s ? void 0 : s.subtitle,
                                                        covers: null == s ? void 0 : s.covers,
                                                        'aria-hidden': S,
                                                        tabIndex: S ? -1 : 0,
                                                        withCovers: p,
                                                        withSubtitle: _,
                                                        withHeading: f,
                                                        isShimmerVisible: I.loadingState === ee.G.PENDING,
                                                    },
                                                    l.id,
                                                ),
                                            ]
                                          : [];
                                  }),
                    }),
                });
            });
            var en = l(29517),
                er = l.n(en),
                ed = l(29595),
                ec = l(74965),
                eh = l(9492);
            let eu = (e, t) => {
                    let l = null == e ? void 0 : e.getNodeById(t),
                        { notify: s, dismiss: o } = (0, ec.l)(),
                        a = (0, r.useRef)(void 0),
                        n = (0, c.c)(() => {
                            (null == l || l.reloadErrorBlocks(), o({ notificationId: a.current }), (a.current = void 0));
                        });
                    (0, r.useEffect)(() => {
                        if (!l) return;
                        let e = l.hasErrorBlocks.onChange(() => {
                            l.hasErrorBlocks.value && !a.current && (a.current = s((0, i.jsx)(eh.L, { reloadBlocks: n }), { containerId: ed.u.ERROR, autoClose: !1 }));
                        });
                        return () => {
                            (e(), o());
                        };
                    }, [l, s, o, n]);
                },
                eb = (0, n.PA)((e) => {
                    var t;
                    let { skeleton: l, landingSdkModel: s, tab: o, tabIndex: a } = e,
                        n = (0, r.useMemo)(() => o.blocks.map(() => (0, r.createRef)()), [o.blocks]);
                    return (
                        eu(l, o.meta.id),
                        (0, i.jsx)(P.j, {
                            children: (0, i.jsx)(M.h, {
                                tabId: o.meta.id,
                                tabPos: a + 1,
                                isTabSelectedByDefault: (null == (t = s.meta) ? void 0 : t.selectedTabIndex) === a,
                                children: (0, i.jsx)('div', {
                                    className: er().root,
                                    children: o.blocks.map((e, t) => (0, i.jsx)($, { landingSdkModel: s, block: e, blockIndex: t, ref: n[t] }, e.id)),
                                }),
                            }),
                        })
                    );
                });
            var ev = l(50408),
                em = l(10270),
                ek = l(34303),
                eg = l(76106),
                ef = l(21800),
                ep = l.n(ef);
            let e_ = (0, n.PA)((e) => {
                    let { virtualItem: t, resizeObserver: l, style: s, ...o } = e,
                        a = (0, r.useRef)(null),
                        n = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(() => {
                            let e = n.current;
                            if (e && l) return (l.observe(e), () => l.unobserve(e));
                        }, [l]),
                        (0, i.jsx)('div', { 'data-index': t.index, className: ep().root, ref: n, style: s, children: (0, i.jsx)($, { ...o, ref: a }) })
                    );
                }),
                ex = (0, n.PA)((e) => {
                    var t, l;
                    let { skeleton: a, landingSdkModel: n, tab: d, tabIndex: h } = e,
                        u = (0, s.useSearchParams)(),
                        {
                            settings: { isMobile: b },
                        } = (0, o.g)(),
                        { contentScrollRef: v } = (0, x.g)(),
                        [m, k] = (0, ev.d)(),
                        g = (0, r.useRef)(!0),
                        { blockIndexesToShow: f, mapSdkBlockToBlockModel: p } = ((e, t) => {
                            var l;
                            let i = null == e ? void 0 : e.getNodeById(t),
                                [s, o] = (0, r.useState)(null != (l = null == i ? void 0 : i.blocksIndexesToShow.value) ? l : []);
                            return (
                                (0, r.useEffect)(() => {
                                    let e =
                                        null == i
                                            ? void 0
                                            : i.blocksIndexesToShow.onChange(() => {
                                                  var e;
                                                  o(null != (e = null == i ? void 0 : i.blocksIndexesToShow.value) ? e : []);
                                              });
                                    return () => (null == e ? void 0 : e());
                                }, [null == i ? void 0 : i.blocksIndexesToShow]),
                                {
                                    blockIndexesToShow: s,
                                    mapSdkBlockToBlockModel: (0, r.useCallback)(
                                        (e, t, l) => {
                                            let s,
                                                o = t[e];
                                            if (void 0 === o) return;
                                            let a = null == i ? void 0 : i.children[o],
                                                n = l.find((e, t) => (null == a ? void 0 : a.data.id) === e.id && ((s = t), !0));
                                            if (n && void 0 !== s) return { blockModel: n, blockModelIndex: s };
                                        },
                                        [null == i ? void 0 : i.children],
                                    ),
                                }
                            );
                        })(a, d.meta.id);
                    eu(a, d.meta.id);
                    let _ = b ? 16 : 24;
                    ((e) => {
                        let { listContainer: t, contentScrollElement: l, isWindowScroll: i, tabId: s, gap: o } = e,
                            a = (0, Z.N)().get(Y.ni);
                        (0, r.useEffect)(() => {
                            if (!t) return;
                            let e = i ? window : l;
                            if (e) return a.observeList({ container: t, scrollElement: e, tabId: s, sizes: eg.X, gap: o, overscan: 3 });
                        }, [l, o, i, a, t, s]);
                    })({ listContainer: m, contentScrollElement: v, isWindowScroll: b, tabId: d.meta.id, gap: _ });
                    let I = (0, c.c)((e) => {
                            let t = f[e];
                            if (void 0 === t) return 300;
                            let l = d.blocks[t];
                            return (null == l ? void 0 : l.isVisible) ? eg.X[l.type] : 0;
                        }),
                        { virtualizer: S, resizeObserver: C } = (0, em.r)({ count: null != (l = f.length) ? l : 0, gap: _, getEstimateSize: I, containerRef: m });
                    (0, r.useEffect)(() => {
                        var e;
                        if (!g.current) return;
                        let t = u.get(ek.K.BLOCK),
                            l = d.blocks.findIndex((e) => e.id === t);
                        if (!f.includes(l)) return;
                        let i = null == (e = S.getOffsetForIndex(l, 'center')) ? void 0 : e[0];
                        (S.scrollToIndex(l, { align: 'center', behavior: 'auto' }), S.scrollOffset && i && 100 > Math.abs(S.scrollOffset - i) && (g.current = !1));
                    }, [f, u, d.blocks, S]);
                    let y = S.getTotalSize(),
                        N = S.getVirtualItems();
                    return (0, i.jsx)(P.j, {
                        children: (0, i.jsx)(M.h, {
                            tabId: d.meta.id,
                            tabPos: h + 1,
                            isTabSelectedByDefault: (null == (t = n.meta) ? void 0 : t.selectedTabIndex) === h,
                            children: (0, i.jsx)('div', {
                                className: er().root,
                                style: { height: ''.concat(y, 'px') },
                                ref: k,
                                children: N.map((e) => {
                                    let t = p(e.index, f, d.blocks);
                                    return t
                                        ? (0, i.jsx)(
                                              e_,
                                              {
                                                  virtualItem: e,
                                                  resizeObserver: C,
                                                  landingSdkModel: n,
                                                  block: t.blockModel,
                                                  blockIndex: Number(t.blockModelIndex),
                                                  isScrolling: S.isScrolling,
                                                  style: { transform: 'translate3d(0, '.concat(e.start - S.options.scrollMargin, 'px, 0)') },
                                              },
                                              e.key,
                                          )
                                        : null;
                                }),
                            }),
                        }),
                    });
                }),
                eI = (0, n.PA)((e) => {
                    var t;
                    let {
                            skeleton: l,
                            landingSdkModel: s,
                            upperBlocks: n,
                            headerConcealerComponent: d,
                            tabsState: c,
                            containerClassName: h,
                            containerStyle: u,
                            headerClassName: b,
                            tabWithHeadingTitle: v,
                            tabWithCovers: m,
                            tabWithSubtitle: k,
                            stickyHeaderClassName: g,
                            staticHeaderClassName: f,
                            stickyHeaderTabIndex: p,
                            headerVariant: _ = U.V.COMPOSITE,
                        } = e,
                        { tabs: x } = s,
                        I = (0, r.useId)(),
                        { experiments: S } = (0, o.g)(),
                        C = S.checkExperiment(a.z.WebNextVirtualSkeleton, 'on') ? ex : eb;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            n,
                            d,
                            (0, i.jsx)(ea, {
                                skeleton: l,
                                landing: s,
                                tabsState: c,
                                tabElementId: I,
                                headerClassName: b,
                                headerVariant: _,
                                stickyHeaderClassName: g,
                                staticHeaderClassName: f,
                                stickyHeaderTabIndex: p,
                                tabWithHeadingTitle: v,
                                tabWithCovers: m,
                                tabWithSubtitle: k,
                            }),
                            (0, i.jsx)('div', {
                                className: h,
                                style: u,
                                children:
                                    null == (t = x.data)
                                        ? void 0
                                        : t.map((e, t) =>
                                              e.blocks.length
                                                  ? (0, i.jsx)(
                                                        R.Kp,
                                                        {
                                                            className: er().tabPanel,
                                                            name: t,
                                                            value: c.value,
                                                            elementId: I,
                                                            children: (0, i.jsx)(C, { skeleton: l, landingSdkModel: s, tab: e, tabIndex: t }),
                                                        },
                                                        e.meta.id,
                                                    )
                                                  : null,
                                          ),
                            }),
                        ],
                    });
                }),
                eS = (0, n.PA)((e) => {
                    var t, l, s, n, d, c;
                    let {
                            skeleton: h,
                            landingSdkModel: u,
                            headerConcealerComponent: b,
                            errorComponent: v,
                            containerClassName: m,
                            headerClassName: k,
                            containerStyle: g,
                            tabWithHeadingTitle: f,
                            tabWithCovers: p,
                            tabWithSubtitle: _,
                            staticHeaderClassName: x,
                            stickyHeaderClassName: I,
                            stickyHeaderTabIndex: S,
                            headerVariant: C,
                        } = e,
                        { experiments: y } = (0, o.g)(),
                        N = y.checkExperiment(a.z.WebNextVirtualSkeleton, 'on') ? ex : eb,
                        E = ((e) => {
                            var t, l, i;
                            let s = null != (l = null == e || null == (t = e.root) ? void 0 : t.getTabsBlock()) ? l : null,
                                { value: o, onTabChange: a } = (0, R.zb)(null != (i = null == s ? void 0 : s.tabIndex.value) ? i : 0);
                            (0, r.useEffect)(() => {
                                if (!s) return;
                                let e = s.tabIndex.onChange(() => {
                                    null == a || a(s.tabIndex.value);
                                });
                                return () => {
                                    e();
                                };
                            }, [s, a]);
                            let n = (0, r.useCallback)(
                                (e) => {
                                    null == s || s.changeSelectedTab(e);
                                },
                                [s],
                            );
                            return s ? { value: o, onTabChange: n } : { value: 0 };
                        })(h),
                        j = null != (c = null == (t = u.tabs.data) ? void 0 : t.findIndex((e) => e.blocks.length > 0)) ? c : -1,
                        w = (null == (s = u.tabs.data) || null == (l = s[E.value]) ? void 0 : l.blocks.length) ? E.value : j;
                    (0, r.useEffect)(() => {
                        if (w >= 0 && w !== E.value) {
                            var e;
                            null == (e = E.onTabChange) || e.call(E, w);
                        }
                    }, [w, E]);
                    let L = (0, r.useCallback)(
                            (e) => {
                                var t;
                                null == (t = E.onTabChange) || t.call(E, e);
                            },
                            [E],
                        ),
                        B = !!(u.tabs.data && u.tabs.data.filter((e) => e.blocks.length > 0).length > 1),
                        T = null == (n = u.tabs.data) ? void 0 : n[j],
                        A = (0, r.useMemo)(() => {
                            var e, t;
                            return null != (t = null == (e = u.upperBlocks) ? void 0 : e.map(() => (0, r.createRef)())) ? t : [];
                        }, [u.upperBlocks]),
                        z = (0, V.BL)(A, { freezeOnceVisible: !0 }),
                        F = (0, r.useMemo)(() => {
                            var e;
                            if (null == (e = u.upperBlocks) ? void 0 : e.length)
                                return (0, i.jsx)(M.h, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, i.jsx)('div', {
                                        className: er().upperBlocks,
                                        children: u.upperBlocks.map((e, t) => {
                                            let { isIntersecting: l } = z[e.id] || {};
                                            return (0, i.jsx)($, { landingSdkModel: u, block: e, blockIndex: t, isIntersecting: l, ref: A[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (d = u.upperBlocks) ? void 0 : d.length, u, z, A]);
                    return B
                        ? (0, i.jsx)(eI, {
                              skeleton: h,
                              landingSdkModel: u,
                              upperBlocks: F,
                              headerConcealerComponent: b,
                              tabsState: { value: w, onTabChange: L },
                              containerClassName: m,
                              containerStyle: g,
                              headerClassName: k,
                              tabWithHeadingTitle: f,
                              tabWithCovers: p,
                              tabWithSubtitle: _,
                              staticHeaderClassName: x,
                              stickyHeaderClassName: I,
                              stickyHeaderTabIndex: S,
                              headerVariant: C,
                          })
                        : T
                          ? (0, i.jsxs)('div', { className: m, style: g, children: [F, b, (0, i.jsx)(N, { skeleton: h, landingSdkModel: u, tab: T, tabIndex: j })] })
                          : F
                            ? (0, i.jsx)(P.j, { children: (0, i.jsxs)('div', { className: m, style: g, children: [F, b] }) })
                            : u.isLoadedAndEmpty || (u.isLoaded && j < 0)
                              ? (0, i.jsx)('div', { className: m, style: g, children: v })
                              : null;
                });
            (0, n.PA)((e) => {
                let { skeleton: t } = e,
                    { landingSdkModel: l, user: s } = (0, o.g)(),
                    a = (0, _.W)(),
                    { contentScrollRef: n, setContentScrollRef: c } = (0, x.g)(),
                    b = (0, Z.N)().get(Y.ni);
                if (((0, r.useEffect)(() => () => l.reset(), [l]), (0, I.J)(l.isResolved), l.isNeededToInit)) {
                    let e = { type: B.$b.LANDING_PAGE, id: t, showWizard: s.settings.showWizard };
                    l.skeletonMeta ? l.createSkeleton({ skeletonData: e }) : (0, r.use)(l.loadAndCreateSkeleton({ skeletonData: e, preloadBlocksCount: 2 }));
                }
                if (
                    (((e) => {
                        let { landingSdkModel: t } = (0, o.g)();
                        (0, r.useEffect)(() => {
                            var l, i, s;
                            let o = [];
                            if (!e) return;
                            let a = (l) => {
                                if ((0, T.Q)(l)) {
                                    var i;
                                    null == (i = l.data) || i.blocks.forEach(a);
                                    return;
                                }
                                let s = e.getNodeById(l.id);
                                s &&
                                    o.push(
                                        s.state.loadingStatus.onChange(() => {
                                            t.handleSdkBlockUpdate(l, s, s.state.loadingStatus.value);
                                        }),
                                    );
                            };
                            for (let e of (null == (l = t.upperBlocks) || l.forEach(a), null != (s = t.tabs.data) ? s : [])) e.blocks.forEach(a);
                            let n = null == (i = e.root) ? void 0 : i.getTabsBlock();
                            if (n) {
                                let e = n.state.loadingStatus.onChange(() => {
                                    t.handleSdkTabsBlockUpdate(n, n.state.loadingStatus.value);
                                });
                                o.push(e);
                            }
                            return () => {
                                o.forEach((e) => e());
                            };
                        }, [e, t, t.tabs.data, t.upperBlocks]);
                    })(b.skeleton),
                    l.isRejected)
                )
                    return (0, i.jsx)(v.SomethingWentWrong, {});
                let m = !C(l.id) && a.canBack;
                return (0, i.jsx)(f.n, {
                    pageId: g._Q.LANDING,
                    children: (0, i.jsx)(p.l, {
                        skeleton: t,
                        children: (0, i.jsx)(k.h, {
                            scrollElement: n,
                            headerThreshold: 134,
                            children: (0, i.jsxs)(h.N, {
                                className: w().root,
                                containerClassName: w().content,
                                ref: c,
                                'data-test-id': d.Xk.landing.LANDING_PAGE,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: w().header,
                                        children: [
                                            m && (0, i.jsx)(E.L, { withForwardControl: !1, withBackwardControl: m }),
                                            (0, i.jsx)(u.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                className: w().title,
                                                'data-test-id': d.Xk.landing.LANDING_PAGE_HEADER,
                                                children: l.title,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)('div', {
                                        className: w().landing,
                                        children: (0, i.jsx)(eS, {
                                            skeleton: b.skeleton,
                                            landingSdkModel: l,
                                            errorComponent: (0, i.jsx)(v.SomethingWentWrong, { className: w().error, withBackwardControl: !1 }),
                                        }),
                                    }),
                                    (0, i.jsx)(N.A, { children: (0, i.jsx)(y.w, { className: w().footer }) }),
                                ],
                            }),
                        }),
                    }),
                });
            });
            let eC = (e) => {
                    let { skeleton: t } = e,
                        { experiments: l } = (0, o.g)();
                    return (l.checkExperiment(a.z.WebNextLandingSdk, 'on'), (0, i.jsx)(L, { skeleton: t }));
                },
                ey = () => {
                    let e = (0, s.useSearchParams)(),
                        t = e.get('skeleton');
                    return (t || (0, s.notFound)(), (0, i.jsx)(eC, { skeleton: t }, e.toString()));
                };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7759, 5083, 8797, 7435, 127, 3637, 4316, 4596, 8380, 5108, 1191, 1931, 100, 4863, 7456, 1445, 1138, 893, 6252, 3076, 7617, 7160, 6706, 4771, 1311,
                5201, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 5151, 1714, 4732, 1195, 1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613,
                3724, 818, 7053, 9425, 4322, 1372, 3547, 8835, 7555, 9667, 1556, 2612, 763, 2670, 7358,
            ],
            () => e((e.s = 20736)),
        ),
            (_N_E = e.O()));
    },
]);
