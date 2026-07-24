'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2288],
    {
        4628: (t, e, a) => {
            a.d(e, { P7: () => b, ZZ: () => R, r1: () => I, SU: () => n, xd: () => y, ET: () => A, PP: () => f, vW: () => _ });
            var s,
                i = a(91945),
                o = a(41670),
                r = a(68413);
            class d {
                async beforeSkeletonLoad(t) {
                    await this.safeEmitAsync(async () => {
                        await this.hooks.beforeSkeletonLoad.promise(t);
                    });
                }
                async afterSkeletonLoad(t) {
                    await this.safeEmitAsync(async () => {
                        await this.hooks.afterSkeletonLoad.promise(t);
                    });
                }
                async beforeBlockLoad(t) {
                    await this.safeEmitAsync(async () => {
                        await this.hooks.beforeBlockLoad.promise(t);
                    });
                }
                async afterBlockLoad(t) {
                    await this.safeEmitAsync(async () => {
                        await this.hooks.afterBlockLoad.promise(t);
                    });
                }
                beforeTabChange(t) {
                    this.safeEmitSync(() => this.hooks.beforeTabChange.call(t));
                }
                afterTabChange(t) {
                    this.safeEmitSync(() => this.hooks.afterTabChange.call(t));
                }
                async afterError(t) {
                    try {
                        await this.hooks.afterError.promise(t);
                    } catch (t) {}
                }
                async safeEmitAsync(t) {
                    try {
                        await t();
                    } catch (t) {
                        await this.afterError(t);
                    }
                }
                safeEmitSync(t) {
                    try {
                        t();
                    } catch (t) {
                        this.scheduleErrorReport(t);
                    }
                }
                scheduleErrorReport(t) {
                    let e = this.scheduledErrorReport.catch(() => void 0);
                    this.scheduledErrorReport = e.then(async () => {
                        await this.afterError(t);
                    });
                }
                constructor({ hooks: t }) {
                    (0, i._)(this, 'hooks', void 0), (0, i._)(this, 'scheduledErrorReport', Promise.resolve()), (this.hooks = t);
                }
            }
            class n {
                get skeleton() {
                    return this.skeletonSdk.skeleton;
                }
                async createSkeleton(t) {
                    return this.skeletonSdk.createSkeleton(t);
                }
                createVisibilityController(t) {
                    this.hasVisibilityController || (this.skeletonSdk.createVisibilityController(t), (this.hasVisibilityController = !0));
                }
                observe() {
                    for (var t = arguments.length, e = Array(t), a = 0; a < t; a++) e[a] = arguments[a];
                    this.skeletonSdk.observe(...e);
                }
                unobserve(t) {
                    this.skeletonSdk.unobserve(t);
                }
                destroy() {
                    var t;
                    if (this.hasVisibilityController) return void this.skeletonSdk.destroy();
                    null == (t = this.skeleton) || t.destroy();
                }
                constructor({ skeletonFactory: t, visibilityDetectorFactory: e, plugins: a }) {
                    (0, i._)(this, 'hooks', void 0), (0, i._)(this, 'skeletonSdk', void 0), (0, i._)(this, 'hasVisibilityController', !1);
                    let s = {
                            beforeSkeletonLoad: new r.AsyncSeriesHook(['loadData']),
                            afterSkeletonLoad: new r.AsyncSeriesHook(['loadData']),
                            beforeBlockLoad: new r.AsyncSeriesHook(['blockLoadData']),
                            afterBlockLoad: new r.AsyncSeriesHook(['blockLoadData']),
                            beforeTabChange: new r.SyncHook(['tabChangeData']),
                            afterTabChange: new r.SyncHook(['tabChangeData']),
                            afterError: new r.AsyncSeriesHook(['error']),
                        },
                        n = new d({ hooks: s });
                    (this.hooks = s),
                        (this.skeletonSdk = new o.mz({ skeletonFactory: { create: (e) => t.create({ ...e, hooksEmitter: n }) } })),
                        e && this.createVisibilityController(e),
                        null == a ||
                            a.forEach((t) => {
                                t.apply({ hooks: this.hooks, landingSdk: this });
                            });
                }
            }
            var l = a(96194);
            function h(t) {
                return (null == t ? void 0 : t.data.nodeType) === s.TAB;
            }
            function c(t) {
                return 'id' in t && 'title' in t && 'blocks' in t;
            }
            function u(t) {
                return 'id' in t && 'type' in t && 'data' in t;
            }
            function S(t) {
                return u(t) && t.type === l.t.TABS;
            }
            function m(t) {
                return u(t) && t.type !== l.t.TABS;
            }
            function E(t, e) {
                let a,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    o = [{ parent: void 0, child: t }];
                for (; o.length > 0; ) {
                    var r, d, n;
                    let t = o.pop();
                    if (!t) continue;
                    let l = (function (t, e) {
                        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                            i = a.find((e) => e.id === t.id);
                        return c(t)
                            ? e.createTab({ data: { ...i, id: t.id, title: t.title, nodeType: s.TAB } })
                            : m(t)
                              ? e.createBlock({ data: { ...i, dataFromSkeleton: t.data, id: t.id, type: t.type, nodeType: s.BLOCK } })
                              : S(t)
                                ? e.createBlock({ data: { ...i, dataFromSkeleton: t.data, id: t.id, type: t.type, nodeType: s.TABS_BLOCK } })
                                : void 0;
                    })(t.child, e, i);
                    if (l) {
                        for (let e of (void 0 === a && h(l) && (a = l),
                        null == (d = t.parent) || null == (r = d.children) || r.push(l),
                        c((n = t.child)) ? [...n.blocks].reverse() : S(n) ? [...n.data.tabs].reverse() : m(n) && 'blocks' in n.data ? [...n.data.blocks].reverse() : []))
                            o.push({ parent: l, child: e });
                    }
                }
                return a;
            }
            function L(t, e) {
                let a = [t];
                for (; a.length > 0; ) {
                    var s;
                    let t = a.pop();
                    e(t);
                    let i = null != (s = t.children) ? s : [];
                    for (let t = i.length - 1; t >= 0; t -= 1) {
                        let e = i[t];
                        e && a.push(e);
                    }
                }
            }
            function k(t) {
                return (null == t ? void 0 : t.data.nodeType) === s.BLOCK;
            }
            function g(t) {
                return (null == t ? void 0 : t.data.nodeType) === s.TABS_BLOCK;
            }
            !(function (t) {
                (t.TAB = 'TAB'), (t.BLOCK = 'BLOCK'), (t.TABS_BLOCK = 'TABS_BLOCK');
            })(s || (s = {}));
            class y {
                async createTree() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    await this.hooksEmitter.beforeSkeletonLoad({ data: this.data, loadMeta: t });
                    try {
                        var a;
                        if (!t && this.data.meta) (this.root = E(this.data.meta, this.nodeFactory, this.data.nodesData)), this.initBlocksToShow();
                        else {
                            let t = await this.skeletonMetadataSource.load(this.data);
                            (this.data.meta = t), (this.root = E(t, this.nodeFactory, this.data.nodesData)), this.initBlocksToShow();
                        }
                        await this.hooksEmitter.afterSkeletonLoad({ data: this.data, rootId: null == (a = this.root) ? void 0 : a.data.id });
                    } catch (t) {
                        throw (await this.hooksEmitter.afterError(t), t);
                    }
                    this.hydratePreloadedBlocksMeta(e);
                }
                getNodeById(t) {
                    if (this.root)
                        return (function (t, e) {
                            let a = [t],
                                s = new Set();
                            for (; a.length > 0; ) {
                                var i;
                                let t = a.pop();
                                if (s.has(t)) continue;
                                if ((s.add(t), t.data.id === e)) return t;
                                let o = null != (i = t.children) ? i : [];
                                for (let t = o.length - 1; t >= 0; t -= 1) {
                                    let e = o[t];
                                    e && a.push(e);
                                }
                            }
                        })(this.root, t);
                }
                async preloadBlocks(t) {
                    if (!this.root || t <= 0) return;
                    let e = t,
                        a = [],
                        s = (t) => {
                            if (g(t)) return void a.push(t.load());
                            if (k(t) && !(e <= 0) && t.state.loadingStatus.value === o.rl.IDLE) {
                                if (((e -= 1), this.hasBlockChildren(t))) return void a.push(...this.preloadCompositeBlockChildren(t));
                                a.push(t.load());
                            }
                        };
                    L(this.root, s), a.length > 0 && (await Promise.allSettled(a));
                }
                getPreloadedBlocksMeta() {
                    let t = {};
                    return (
                        this.root &&
                            L(this.root, (e) => {
                                (k(e) || g(e)) && e.state.loadingStatus.value === o.rl.RESOLVE && void 0 !== e.data.meta && (t[e.data.id] = e.data.meta);
                            }),
                        t
                    );
                }
                hydratePreloadedBlocksMeta(t) {
                    if (!this.root || !t) return;
                    let e = (e) => {
                        let a = t[e.data.id];
                        void 0 !== a && ((e.data.meta = a), (e.state.loadingStatus.value = o.rl.RESOLVE), g(e) && this.hydrateTabsBlockChildrenMeta(e));
                    };
                    L(this.root, e);
                }
                preloadCompositeBlockChildren(t) {
                    var e;
                    let a = [];
                    for (let s of null != (e = t.children) ? e : []) {
                        if (g(s)) {
                            s.state.loadingStatus.value === o.rl.IDLE && a.push(s.load());
                            continue;
                        }
                        if (k(s) && s.state.loadingStatus.value === o.rl.IDLE) {
                            if (this.hasBlockChildren(s)) {
                                a.push(...this.preloadCompositeBlockChildren(s));
                                continue;
                            }
                            a.push(s.load());
                        }
                    }
                    return a;
                }
                hasBlockChildren(t) {
                    var e;
                    return !!(null == (e = t.children) ? void 0 : e.some((t) => k(t) || g(t)));
                }
                hydrateTabsBlockChildrenMeta(t) {
                    var e, a;
                    let s = null != (a = null == (e = t.data.meta) ? void 0 : e.tabs) ? a : [];
                    for (let e = 0; e < s.length; e += 1) {
                        let a = t.children[e],
                            i = s[e];
                        a && i && (a.data.meta = i);
                    }
                }
                initBlocksToShow() {
                    this.root &&
                        L(this.root, (t) => {
                            h(t) && t.initBlocksToShow();
                        });
                }
                onNodesVisibilityChange() {
                    this.root && L(this.root, (t) => t.onVisibilityChange());
                }
                destroy() {
                    this.offBlocksLoadingStatusChangeInTab(), this.offNodesVisibilityChange();
                }
                offBlocksLoadingStatusChangeInTab() {
                    this.root &&
                        L(this.root, (t) => {
                            h(t) && t.offBlocksLoadingStatusChange();
                        });
                }
                offNodesVisibilityChange() {
                    this.root && L(this.root, (t) => t.offVisibilityChange());
                }
                constructor({ data: t, skeletonMetadataSource: e, nodeFactory: a, hooksEmitter: s }) {
                    (0, i._)(this, 'data', void 0),
                        (0, i._)(this, 'skeletonMetadataSource', void 0),
                        (0, i._)(this, 'root', void 0),
                        (0, i._)(this, 'nodeFactory', void 0),
                        (0, i._)(this, 'hooksEmitter', void 0),
                        (this.data = t),
                        (this.skeletonMetadataSource = e),
                        (this.nodeFactory = a),
                        (this.hooksEmitter = s);
                }
            }
            var v = a(46862);
            class T {
                constructor({ loadingStatus: t, visibilityStatus: e }) {
                    (0, i._)(this, 'loadingStatus', void 0),
                        (0, i._)(this, 'visibilityStatus', void 0),
                        (this.loadingStatus = new v.cJ(t)),
                        (this.visibilityStatus = new v.cJ(e));
                }
            }
            let _ = (t) => !!(t && 'object' == typeof t && 'source' in t);
            class b {
                get isNeededToLoad() {
                    return this.state.loadingStatus.value === o.rl.IDLE;
                }
                get isLoading() {
                    return this.state.loadingStatus.value === o.rl.PENDING;
                }
                get isLoaded() {
                    return this.state.loadingStatus.value === o.rl.RESOLVE;
                }
                get isRejected() {
                    return this.state.loadingStatus.value === o.rl.REJECT;
                }
                async load() {
                    if (this.state.loadingStatus.value !== o.rl.IDLE) return;
                    let t = { blockId: this.data.id, blockType: this.data.type, status: o.rl.IDLE };
                    (this.state.loadingStatus.value = o.rl.PENDING), await this.hooksEmitter.beforeBlockLoad(t);
                    try {
                        _(this.data.dataFromSkeleton) && (await this.loadMetadata()),
                            (this.state.loadingStatus.value = o.rl.RESOLVE),
                            await this.hooksEmitter.afterBlockLoad({ ...t, status: o.rl.RESOLVE });
                    } catch (e) {
                        (this.state.loadingStatus.value = o.rl.REJECT),
                            await this.hooksEmitter.afterError(e),
                            await this.hooksEmitter.afterBlockLoad({ ...t, status: o.rl.REJECT });
                    }
                }
                async reload() {
                    (this.state.loadingStatus.value = o.rl.IDLE), await this.load();
                }
                onVisibilityChange() {
                    this.visibilityChangeUnsub = this.state.visibilityStatus.onChange(this.visibilityHandler.bind(this));
                }
                offVisibilityChange() {
                    var t;
                    null == (t = this.visibilityChangeUnsub) || t.call(this);
                }
                visibilityHandler() {
                    this.state.visibilityStatus.value === o.zE.VISIBLE && this.load();
                }
                constructor({ data: t, hooksEmitter: e }) {
                    (0, i._)(this, 'data', void 0),
                        (0, i._)(this, 'children', []),
                        (0, i._)(this, 'state', void 0),
                        (0, i._)(this, 'visibilityChangeUnsub', void 0),
                        (0, i._)(this, 'hooksEmitter', void 0),
                        (this.data = t),
                        (this.hooksEmitter = e),
                        (this.state = new T({ loadingStatus: o.rl.IDLE, visibilityStatus: o.zE.HIDDEN }));
                }
            }
            var w = a(99424);
            let f = (t) => {
                let { showPolicy: e, isNeededToLoad: a, isLoading: s, isLoaded: i, isRejected: o, isNotEmpty: r } = t;
                switch (e) {
                    case w.E.SHOW_AND_LOAD:
                        if (s || o || a) return !0;
                        return r;
                    case w.E.LOAD_AND_SHOW:
                        return i && r;
                    default:
                        return !0;
                }
            };
            class I extends b {
                changeSelectedTab(t) {
                    let e = this.tabIndex.value,
                        a = { tabsBlockId: this.data.id, previousIndex: e, nextIndex: t };
                    this.hooksEmitter.beforeTabChange(a), (this.tabIndex.value = t), this.hooksEmitter.afterTabChange(a);
                }
                constructor({ data: t, selectedTabIndex: e, hooksEmitter: a }) {
                    var s, o;
                    super({ data: t, hooksEmitter: a }),
                        (0, i._)(this, 'children', []),
                        (0, i._)(this, 'selectedTab', void 0),
                        (0, i._)(this, 'tabIndex', void 0),
                        (this.tabIndex = new v.cJ(null != (o = null != e ? e : null == (s = t.dataFromSkeleton) ? void 0 : s.selectedTabIndex) ? o : 0)),
                        (this.selectedTab = new v.rm(() => this.children[this.tabIndex.value]));
                }
            }
            class R {
                updateBlocksToShow() {
                    let t = [];
                    this.children.forEach((e, a) => {
                        var s;
                        if (e.isVisible.value) return void t.push(a);
                        k(e) && (null == (s = e.data.dataFromSkeleton) ? void 0 : s.showPolicy) === w.E.LOAD_AND_SHOW && e.isNeededToLoad && t.push(a);
                    }),
                        (this.blocksIndexesToShow.value = t);
                }
                initBlocksToShow() {
                    for (let t = 0; t < this.children.length; t++) this.blocksIndexesToShow.value.push(t);
                    this.onBlocksLoadingStatusChange();
                }
                onBlocksLoadingStatusChange() {
                    for (let t of this.children) {
                        let e = t.state.loadingStatus.onChange(() => {
                            var e;
                            if ([o.rl.RESOLVE, o.rl.REJECT].includes(t.state.loadingStatus.value)) {
                                if (k(t) && (null == (e = t.data.dataFromSkeleton) ? void 0 : e.showPolicy) === w.E.SHOW_AND_LOAD) {
                                    t.state.loadingStatus.value === o.rl.REJECT && this.updateBlocksToShow();
                                    return;
                                }
                                this.updateBlocksToShow();
                            }
                        });
                        this.blocksLoadingStatusChangeUnsubs.push(e);
                    }
                }
                offBlocksLoadingStatusChange() {
                    for (let t of this.blocksLoadingStatusChangeUnsubs) t();
                }
                get upperBlocks() {
                    let t = [];
                    for (let e of this.children) {
                        if (g(e)) break;
                        t.push(e);
                    }
                    return t;
                }
                getTabsBlock(t) {
                    let e,
                        a = (e) => !t || e.data.id === t;
                    for (let t of this.children)
                        if (g(t) && a(t)) {
                            e = t;
                            break;
                        }
                    return e;
                }
                async load() {
                    return Promise.resolve();
                }
                reloadErrorBlocks() {
                    this.children.forEach((t) => {
                        t.isRejected && t.reload();
                    });
                }
                onVisibilityChange() {
                    this.visibilityChangeUnsub = this.state.visibilityStatus.onChange(() => {});
                }
                offVisibilityChange() {
                    var t;
                    null == (t = this.visibilityChangeUnsub) || t.call(this);
                }
                constructor({ data: t }) {
                    (0, i._)(this, 'data', void 0),
                        (0, i._)(this, 'nodeType', 'tab'),
                        (0, i._)(this, 'children', []),
                        (0, i._)(this, 'state', void 0),
                        (0, i._)(this, 'blocksIndexesToShow', new v.cJ([])),
                        (0, i._)(this, 'hasErrorBlocks', new v.rm(() => this.children.some((t) => t.isRejected && t.isVisible.value))),
                        (0, i._)(this, 'visibilityChangeUnsub', void 0),
                        (0, i._)(this, 'blocksLoadingStatusChangeUnsubs', []),
                        (this.data = t),
                        (this.state = new T({ loadingStatus: o.rl.IDLE, visibilityStatus: o.zE.HIDDEN }));
                }
            }
            class A {
                get() {
                    if (this.requestUrl) {
                        let t = new URL(this.requestUrl).searchParams.get('tab');
                        return null != t ? t : void 0;
                    }
                    let t = new URLSearchParams(window.location.search).get('tab');
                    return null != t ? t : void 0;
                }
                update(t) {
                    let e = new URL(window.location.href);
                    e.searchParams.set('tab', t), window.history.replaceState(window.history.state, '', e.toString());
                }
                constructor(t) {
                    (0, i._)(this, 'requestUrl', void 0), (this.requestUrl = t);
                }
            }
        },
        72288: (t, e, a) => {
            a.d(e, { X: () => r, ET: () => d.ET, F6: () => D, $b: () => s });
            var s,
                i = a(91945),
                o = a(29222);
            class r {
                apply(t) {
                    let { hooks: e } = t;
                    e.afterError.tapPromise('LandingLoggerPlugin', async (t) => {
                        let e;
                        (e = t instanceof o.t ? t : new o.t('Error in LandingSdk', { code: 'E_LANDING_SDK', cause: t })),
                            this.logger.error('[LandingSdk] '.concat(e.message), { ...e.data, code: e.code, cause: e.cause }),
                            await Promise.resolve();
                    });
                }
                constructor({ logger: t }) {
                    (0, i._)(this, 'logger', void 0), (this.logger = t);
                }
            }
            var d = a(4628);
            !(function (t) {
                (t.LANDING_PAGE = 'LANDING_PAGE'), (t.ARTIST_PAGE = 'ARTIST_PAGE');
            })(s || (s = {}));
            class n {
                async load(t) {
                    switch (t.type) {
                        case s.ARTIST_PAGE:
                            return this.artistsResource.getSkeleton({ artistId: t.artistId, skeletonId: t.skeletonId });
                        case s.LANDING_PAGE:
                            return this.landingResource.getSkeleton({ id: t.id, showWizard: t.showWizard });
                        default:
                            return Promise.reject();
                    }
                }
                constructor({ artistsResource: t, landingResource: e }) {
                    (0, i._)(this, 'artistsResource', void 0), (0, i._)(this, 'landingResource', void 0), (this.artistsResource = t), (this.landingResource = e);
                }
            }
            var l = a(96194),
                h = a(46862),
                c = a(99424);
            class u extends d.P7 {
                get showPolicy() {
                    var t, e;
                    return null != (e = null == (t = this.data.dataFromSkeleton) ? void 0 : t.showPolicy) ? e : c.E.SHOW_AND_LOAD;
                }
                async loadMetadata() {
                    this.data.meta = await this.metadataSource.load(this.data);
                }
                constructor(t) {
                    super(t), (0, i._)(this, 'metadataSource', void 0), (this.metadataSource = t.metadataSource);
                }
            }
            class S extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a, s;
                                return (
                                    !!this.isLoading ||
                                    !!this.isRejected ||
                                    !!this.isNeededToLoad ||
                                    (null != (s = null == (a = this.data.meta) || null == (e = a.chart) || null == (t = e.tracks) ? void 0 : t.length) ? s : 0) > 0
                                );
                            }),
                        );
                }
            }
            class m extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (
                                    !!this.data.canShowEmptyBlock ||
                                    (0, d.PP)({
                                        showPolicy: this.showPolicy,
                                        isNeededToLoad: this.isNeededToLoad,
                                        isLoading: this.isLoading,
                                        isLoaded: this.isLoaded,
                                        isRejected: this.isRejected,
                                        isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.items) ? void 0 : t.length) ? a : 0) > 0,
                                    })
                                );
                            }),
                        );
                }
            }
            class E extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.concerts) ? void 0 : t.length) ? a : 0) > 0,
                                });
                            }),
                        );
                }
            }
            class L extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.donations) ? void 0 : t.length) ? a : 0) > 0,
                                });
                            }),
                        );
                }
            }
            class k extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.items) ? void 0 : t.length) ? a : 0) > 0,
                                });
                            }),
                        );
                }
            }
            var g = a(41670);
            class y {
                constructor({ artists: t, album: e, releaseDate: a, cover: s, trailer: o }) {
                    (0, i._)(this, 'artists', void 0),
                        (0, i._)(this, 'album', void 0),
                        (0, i._)(this, 'releaseDate', void 0),
                        (0, i._)(this, 'cover', void 0),
                        (0, i._)(this, 'trailer', void 0),
                        (this.artists = t),
                        (this.album = e),
                        (this.releaseDate = a),
                        (this.cover = s),
                        (this.trailer = o);
                }
            }
            class v extends u {
                loadingStatusChangeHandler() {
                    if (this.data.meta && this.state.loadingStatus.value === g.rl.RESOLVE) for (let t of this.data.meta.newReleases) this.items.push(new y(t));
                }
                onLoadingStatusChange() {
                    this.loadingStatusChangeUnsub = this.state.loadingStatus.onChange(this.loadingStatusChangeHandler.bind(this));
                }
                offLoadingStatusChange() {
                    var t;
                    null == (t = this.loadingStatusChangeUnsub) || t.call(this);
                }
                constructor(t) {
                    super(t),
                        (0, i._)(this, 'loadingStatusChangeUnsub', void 0),
                        (0, i._)(this, 'items', []),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: (null != (e = null == (t = this.data.meta) ? void 0 : t.newReleases.length) ? e : 0) > 0,
                                });
                            }),
                        ),
                        this.onLoadingStatusChange();
                }
            }
            class T extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t;
                                let e = null == (t = this.data.meta) ? void 0 : t.waves,
                                    a = (null == e ? void 0 : e.length) === 0,
                                    s = null == e ? void 0 : e.every((t) => !t.items.length);
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: !a || !s,
                                });
                            }),
                        );
                }
            }
            class _ {
                create() {
                    return {
                        load: async (t) => {
                            if (!('dataFromSkeleton' in t) || !(0, d.vW)(t.dataFromSkeleton))
                                throw new o.t('Block with type='.concat(t.type, ' and id=').concat(t.id, ' is not fetchable'));
                            return this.landingResource.getBlock({ type: t.type, source: t.dataFromSkeleton.source });
                        },
                    };
                }
                constructor(t) {
                    (0, i._)(this, 'landingResource', void 0), (this.landingResource = t);
                }
            }
            class b extends d.r1 {
                changeSelectedTab(t) {
                    var e, a;
                    super.changeSelectedTab(t);
                    let s = null == (e = this.children[t]) ? void 0 : e.data.id;
                    s && (null == (a = this.tabIdQueryParamController) || a.update(s));
                }
                async loadMetadata() {
                    var t, e;
                    this.data.meta = await this.metadataSource.load(this.data);
                    let a = null != (e = null == (t = this.data.meta) ? void 0 : t.tabs) ? e : [];
                    for (let t = 0; t < a.length; t++) {
                        let e = this.children[t],
                            s = a[t];
                        e && s && (e.data.meta = s);
                    }
                }
                constructor({ data: t, tabIdQueryParamController: e, metadataSource: a, hooksEmitter: s }) {
                    super({
                        data: t,
                        selectedTabIndex: (function (t, e) {
                            var a, s, i, o, r;
                            let d = null != (o = null == (a = t.dataFromSkeleton) ? void 0 : a.selectedTabIndex) ? o : 0;
                            if (!e) return d;
                            let n = e.get();
                            if (!n) return d;
                            let l = null != (r = null == (i = t.dataFromSkeleton) || null == (s = i.tabs) ? void 0 : s.findIndex((t) => t.id === n)) ? r : -1;
                            return l >= 0 ? l : d;
                        })(t, e),
                        hooksEmitter: s,
                    }),
                        (0, i._)(this, 'metadataSource', void 0),
                        (0, i._)(this, 'tabIdQueryParamController', void 0),
                        (0, i._)(this, 'isVisible', new h.rm(() => !0)),
                        (this.metadataSource = a),
                        (this.tabIdQueryParamController = e);
                }
            }
            class w extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                return (
                                    !!this.isLoading ||
                                    !!this.isRejected ||
                                    !!this.isNeededToLoad ||
                                    !!((null == (t = this.data.meta) ? void 0 : t.favorites) && (null == (e = this.data.meta) ? void 0 : e.history))
                                );
                            }),
                        );
                }
            }
            class f extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (
                                    !!this.isLoading ||
                                    !!this.isRejected ||
                                    !!this.isNeededToLoad ||
                                    (null != (a = null == (e = this.data.meta) || null == (t = e.items) ? void 0 : t.length) ? a : 0) > 0
                                );
                            }),
                        );
                }
            }
            class I extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                return (
                                    !!this.isLoading ||
                                    !!this.isRejected ||
                                    !!this.isNeededToLoad ||
                                    (null != (e = null == (t = this.data.meta) ? void 0 : t.items.length) ? e : 0) > 0
                                );
                            }),
                        );
                }
            }
            class R extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (
                                    !!this.data.canShowEmptyBlock ||
                                    (0, d.PP)({
                                        showPolicy: this.showPolicy,
                                        isNeededToLoad: this.isNeededToLoad,
                                        isLoading: this.isLoading,
                                        isLoaded: this.isLoaded,
                                        isRejected: this.isRejected,
                                        isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.tracks) ? void 0 : t.length) ? a : 0) > 0,
                                    })
                                );
                            }),
                        );
                }
            }
            class A extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                let t = this.data.meta && this.data.meta.albumBanners && this.data.meta.albumBanners.length > 0;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: !!t,
                                });
                            }),
                        );
                }
            }
            class C extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                let a = (null == (t = this.data.meta) ? void 0 : t.inStyleTabs.length) === 0,
                                    s = null == (e = this.data.meta) ? void 0 : e.inStyleTabs.every((t) => !t.items.length);
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: !a && !s,
                                });
                            }),
                        );
                }
            }
            class p extends u {
                constructor(...t) {
                    super(...t), (0, i._)(this, 'isVisible', new h.rm(() => !0));
                }
            }
            class P extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                return (
                                    !!this.isLoading ||
                                    !!this.isRejected ||
                                    !!this.isNeededToLoad ||
                                    (null != (e = null == (t = this.data.meta) ? void 0 : t.items.length) ? e : 0) > 0
                                );
                            }),
                        );
                }
            }
            class N extends u {
                constructor(...t) {
                    super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.items) ? void 0 : t.length) ? a : 0) > 0,
                                    isLoaded: this.isLoaded,
                                    isLoading: this.isLoading,
                                    isRejected: this.isRejected,
                                    isNeededToLoad: this.isNeededToLoad,
                                });
                            }),
                        );
                }
            }
            class B extends u {
                constructor(...t) {
                    super(...t), (0, i._)(this, 'isVisible', new h.rm(() => !!this.isLoading || !!this.isRejected || !!this.isNeededToLoad || !!this.data.meta));
                }
            }
            class O {
                createBlock(t) {
                    switch (t.data.type) {
                        case l.t.TABS:
                            return new b({
                                data: t.data,
                                tabIdQueryParamController: this.tabIdQueryParamController,
                                hooksEmitter: this.hooksEmitter,
                                metadataSource: this.metadataSourceFactory.create(),
                            });
                        case l.t.NEW_RELEASES:
                        case l.t.EDITORIAL_NEW_RELEASES:
                            return new v({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.NEW_PLAYLISTS:
                        case l.t.EDITORIAL_COMPILATION:
                        case l.t.RECOMMENDED_PLAYLISTS:
                        case l.t.META_TAG_POPULAR_PLAYLISTS:
                        case l.t.META_TAG_NEW_ALBUMS:
                        case l.t.META_TAG_PLAYLISTS:
                        case l.t.MICRO_GENRE_ALBUMS:
                        case l.t.META_TAG_ALBUMS:
                        case l.t.ARTIST_PLAYLISTS:
                        case l.t.ARTIST_ALBUMS:
                        case l.t.ARTIST_COMPILATIONS:
                        case l.t.ARTIST_STUDIO_ALBUMS:
                        case l.t.ARTIST_SIMILAR_ENTITIES:
                        case l.t.COLLECTION_SIMILAR_ENTITIES:
                            return new k({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.WAVES:
                        case l.t.SETS_BY_WAVES:
                        case l.t.WAVES_AGENT:
                        case l.t.SETS_BY_WAVES_AGENT:
                            return new T({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.MIXES_GRID:
                        case l.t.MIXES_MUSIC:
                            return new N({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.LIKES_AND_HISTORY:
                            return new w({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.CHART_TRACKS:
                            return new S({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.NEUROMUSIC:
                            return new f({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.CONCERTS_TOP:
                        case l.t.CONCERTS_PERSONAL:
                        case l.t.EDITORIAL_CONCERTS:
                        case l.t.VIEWED_CONCERTS:
                            return new E({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.OPEN_PLAYLIST:
                        case l.t.SMART_OPEN_PLAYLIST:
                        case l.t.NON_MUSIC_OPEN_PLAYLIST:
                            return new R({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.COLLECTION_PLAYLIST_WITH_LIKES:
                            return new R({
                                data: { ...t.data, canShowEmptyBlock: !0 },
                                hooksEmitter: this.hooksEmitter,
                                metadataSource: this.metadataSourceFactory.create(),
                            });
                        case l.t.DONATIONS:
                            return new L({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.PERSONAL_PLAYLISTS:
                        case l.t.REWIND_PLAYLISTS:
                            return new I({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.PERSONAL_ARTISTS:
                        case l.t.NEW_STARS_ARTISTS:
                        case l.t.EDITORIAL_ARTISTS:
                        case l.t.META_TAG_POPULAR_ARTISTS:
                        case l.t.MICRO_GENRE_ARTISTS:
                        case l.t.MICRO_GENRE_TOP_ARTISTS:
                        case l.t.META_TAG_ARTISTS:
                        case l.t.SIMILAR_ARTISTS:
                            return new m({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.ALBUM_PROMO:
                        case l.t.SIMPLE_ALBUM_PROMO:
                            return new A({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.IN_STYLE:
                            return new C({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.WIZARD:
                            return new p({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.NON_MUSIC_EDITORIAL_COMPILATION:
                        case l.t.NON_MUSIC_CATEGORY:
                            return new P({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.SPECIAL:
                            return new B({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        default:
                            return;
                    }
                }
                createTab(t) {
                    return new d.ZZ(t);
                }
                constructor(t) {
                    (0, i._)(this, 'hooksEmitter', void 0),
                        (0, i._)(this, 'metadataSourceFactory', void 0),
                        (0, i._)(this, 'tabIdQueryParamController', void 0),
                        (this.metadataSourceFactory = new _(t.landingResource)),
                        (this.tabIdQueryParamController = t.tabIdQueryParamController),
                        (this.hooksEmitter = t.hooksEmitter);
                }
            }
            class D {
                create(t) {
                    let { data: e, hooksEmitter: a } = t,
                        s = new n({ landingResource: this.landingResource, artistsResource: this.artistsResource }),
                        i = new O({ landingResource: this.landingResource, hooksEmitter: a, tabIdQueryParamController: this.tabIdQueryParamController });
                    return new d.xd({ data: e, hooksEmitter: a, skeletonMetadataSource: s, nodeFactory: i });
                }
                constructor({ landingResource: t, artistsResource: e, tabIdQueryParamController: a }) {
                    (0, i._)(this, 'landingResource', void 0),
                        (0, i._)(this, 'artistsResource', void 0),
                        (0, i._)(this, 'tabIdQueryParamController', void 0),
                        (this.landingResource = t),
                        (this.artistsResource = e),
                        (this.tabIdQueryParamController = a);
                }
            }
        },
    },
]);
