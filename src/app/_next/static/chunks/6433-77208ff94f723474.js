'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6433],
    {
        26433: (e, t, i) => {
            i.d(t, {
                JE: () => a,
                qt: () => n,
                lg: () => g,
                $B: () => u,
                xE: () => b,
                CA: () => E,
                aQ: () => h,
                YL: () => M,
                Ec: () => k,
                br: () => J,
                tP: () => X,
                XT: () => p,
                FN: () => Z,
                pl: () => q,
                Fr: () => eC,
                jd: () => j,
                dA: () => eG,
                vE: () => ew,
                Hp: () => eq,
                eD: () => ej,
                Ij: () => V,
            });
            var s,
                l = i(93064),
                r = i(80411);
            let a = l.gK
                    .model('BaseAdvertBanner', { type: l.gK.enumeration(Object.values(r.h)), noAds: l.gK.boolean, hasError: l.gK.boolean, isShowBanner: l.gK.boolean })
                    .views((e) => ({
                        get isVisible() {
                            if (e.noAds || e.hasError || !e.isShowBanner) return !1;
                            let { advertBanners: t } = (0, l.Zn)(e);
                            if (t.hasBranding) return !1;
                            return t.isVisible(e.type);
                        },
                    }))
                    .actions((e) => ({
                        setType(t) {
                            e.type = t;
                        },
                        toggleNoAdsTrue() {
                            e.noAds = !0;
                        },
                        setIsShowBanner(t) {
                            e.isShowBanner = t;
                        },
                        toggleHasErrorTrue() {
                            e.hasError = !0;
                        },
                        reset() {
                            (e.type = r.h.EMPTY), (e.noAds = !1), (e.isShowBanner = !0), (e.hasError = !1);
                        },
                    })),
                n = l.gK.model('BaseModal', { isOpened: l.gK.optional(l.gK.boolean, !1) }).actions((e) => ({
                    onOpenChange(t) {
                        e.isOpened = t;
                    },
                    open() {
                        e.isOpened = !0;
                    },
                    close() {
                        e.isOpened = !1;
                    },
                })),
                o = l.gK
                    .model('BrowserInfo', {
                        hasHuaweiAppGallery: l.gK.boolean,
                        inAppBrowser: l.gK.boolean,
                        isBrowser: l.gK.boolean,
                        isMobile: l.gK.boolean,
                        isTablet: l.gK.boolean,
                        isTouch: l.gK.boolean,
                        name: l.gK.maybe(l.gK.string),
                        version: l.gK.maybe(l.gK.string),
                        OSFamily: l.gK.maybe(l.gK.string),
                    })
                    .views((e) => ({
                        get isSafari() {
                            var t;
                            return null == (t = e.name) ? void 0 : t.toLowerCase().includes('safari');
                        },
                    })),
                g = l.gK.model('CaseForms', {
                    nominative: l.gK.optional(l.gK.string, ''),
                    genitive: l.gK.optional(l.gK.string, ''),
                    dative: l.gK.optional(l.gK.string, ''),
                    accusative: l.gK.optional(l.gK.string, ''),
                    instrumental: l.gK.optional(l.gK.string, ''),
                    prepositional: l.gK.optional(l.gK.string, ''),
                }),
                u = l.gK.model('Cover', { uri: l.gK.maybe(l.gK.string), color: l.gK.maybe(l.gK.string), videoUrl: l.gK.maybe(l.gK.string) }),
                d = l.gK.model('DisclaimerDetails', { text: l.gK.maybe(l.gK.string), url: l.gK.maybe(l.gK.string) }),
                m = l.gK.model('DisclaimerData', { title: l.gK.maybe(l.gK.string), description: l.gK.maybe(l.gK.string), details: l.gK.maybe(d) }),
                c = l.gK.compose(l.gK.model({ id: l.gK.string, type: l.gK.string }), m);
            var K = i(26779),
                f = i(51197);
            let p = l.gK.model('LoadingState', { loadingState: l.gK.enumeration(Object.values(f.G)) }).views((e) => ({
                    get isNeededToLoad() {
                        return e.loadingState === f.G.IDLE;
                    },
                    get isLoading() {
                        return e.loadingState === f.G.PENDING;
                    },
                    get isResolved() {
                        return e.loadingState === f.G.RESOLVE;
                    },
                    get isRejected() {
                        return e.loadingState === f.G.REJECT;
                    },
                })),
                v = l.gK.model('EntityRef', { entityType: l.gK.enumeration(Object.values(K.n)), entityId: l.gK.union(l.gK.string, l.gK.number) }),
                b = l.gK
                    .compose(
                        l.gK.model('DisclaimerModalState', {
                            currentEntityRef: l.gK.maybeNull(v),
                            type: l.gK.maybeNull(l.gK.enumeration(Object.values(K.Y))),
                            id: l.gK.maybeNull(l.gK.string),
                            isUnsafeDisclaimerConfirmed: l.gK.optional(l.gK.boolean, !1),
                            shouldHistoryBack: l.gK.optional(l.gK.boolean, !1),
                            shouldCloseModalOnOutsidePress: l.gK.optional(l.gK.boolean, !0),
                            shouldCloseModalOnEscape: l.gK.optional(l.gK.boolean, !0),
                            entityKey: l.gK.maybeNull(l.gK.string),
                            modalData: l.gK.maybeNull(l.gK.frozen()),
                        }),
                        p,
                    )
                    .volatile(() => ({ onDisclaimerConfirmHandler: null, onDisclaimerRejectHandler: null }))
                    .views((e) => ({
                        get entityType() {
                            var t, i;
                            return null != (i = null == (t = e.currentEntityRef) ? void 0 : t.entityType) ? i : null;
                        },
                        get entityId() {
                            var s, l;
                            return null != (l = null == (s = e.currentEntityRef) ? void 0 : s.entityId) ? l : null;
                        },
                        get isNeededToLoad() {
                            return e.loadingState === f.G.IDLE;
                        },
                    }))
                    .actions((e) => ({
                        setCurrentEntityRef(t, i) {
                            e.currentEntityRef = { entityType: t, entityId: i };
                        },
                        setId(t) {
                            e.id = t;
                        },
                        setType(t) {
                            e.type = t;
                        },
                        setConfirmUnsafeDisclaimer(t) {
                            e.isUnsafeDisclaimerConfirmed = t;
                        },
                        setShouldHistoryBack(t) {
                            e.shouldHistoryBack = t;
                        },
                        setShouldCloseModalOnOutsidePress(t) {
                            e.shouldCloseModalOnOutsidePress = t;
                        },
                        setShouldCloseModalOnEscape(t) {
                            e.shouldCloseModalOnEscape = t;
                        },
                        setDisclaimerConfirmHandler(t) {
                            e.onDisclaimerConfirmHandler = t;
                        },
                        setDisclaimerRejectHandler(t) {
                            e.onDisclaimerRejectHandler = t;
                        },
                        setModalData(t) {
                            e.modalData = t;
                        },
                        reset() {
                            (e.currentEntityRef = null),
                                (e.id = null),
                                (e.type = null),
                                (e.isUnsafeDisclaimerConfirmed = !1),
                                (e.shouldHistoryBack = !1),
                                (e.shouldCloseModalOnOutsidePress = !0),
                                (e.shouldCloseModalOnEscape = !0),
                                (e.loadingState = f.G.IDLE),
                                (e.entityKey = null),
                                (e.modalData = null);
                        },
                    }));
            var I = i(63930);
            let y = (e) => {
                    var t, i;
                    return {
                        id: e.id,
                        type: e.type,
                        title: e.title,
                        description: e.description,
                        details: { text: null == (t = e.details) ? void 0 : t.text, url: null == (i = e.details) ? void 0 : i.url },
                    };
                },
                E = l.gK
                    .compose(l.gK.model('DisclaimersDictionary', { disclaimers: l.gK.maybe(l.gK.array(c)), recentDisclaimersRequestTS: l.gK.number }), p)
                    .actions((e) => {
                        let t = {
                            getDisclaimers: (0, l.L3)(function* () {
                                let { disclaimersResource: t, modelActionsLogger: i } = (0, l._$)(e);
                                if (e.loadingState !== f.G.PENDING)
                                    try {
                                        (e.loadingState = f.G.PENDING), (e.recentDisclaimersRequestTS = Date.now());
                                        let i = yield t.getDisclaimers();
                                        (e.disclaimers = (0, l.wg)(i.map(y))), e.loadingState !== f.G.IDLE && (e.loadingState = f.G.RESOLVE);
                                    } catch (t) {
                                        i.error(t), e.loadingState !== f.G.IDLE && (e.loadingState = f.G.REJECT);
                                    }
                            }),
                            getDisclaimerById: (0, l.L3)(function* (i) {
                                var s, l;
                                e.loadingState === f.G.PENDING && (yield (0, I.z7)(() => e.loadingState !== f.G.PENDING)), e.disclaimers || (yield t.getDisclaimers());
                                let r = null == (s = e.disclaimers) ? void 0 : s.find((e) => e.id === i);
                                return (
                                    r ||
                                    (Date.now() - e.recentDisclaimersRequestTS > 18e5 && (yield t.getDisclaimers()),
                                    null == (l = e.disclaimers) ? void 0 : l.find((e) => e.id === i))
                                );
                            }),
                        };
                        return t;
                    });
            var L = i(79899),
                T = i(8075),
                D = i(73975);
            let O = (e, t) => {
                let i = [];
                for (let s of e)
                    if (s.includes(':')) {
                        let [e, l] = s.split(':');
                        e === t && l && i.push({ type: e, id: l });
                    }
                return i.length > 0 ? i : null;
            };
            var S = i(92946);
            let k = l.gK
                    .model('ExplicitModel', {
                        contentWarning: l.gK.maybe(l.gK.enumeration(Object.values(L.K))),
                        trackType: l.gK.maybe(l.gK.enumeration(Object.values(T.S))),
                        disclaimers: l.gK.maybe(l.gK.array(l.gK.string)),
                        resolvedDisclaimers: l.gK.maybe(l.gK.frozen()),
                    })
                    .views((e) => ({
                        get isExplicit() {
                            return e.contentWarning === L.K.EXPLICIT;
                        },
                        get explicitDisclaimer() {
                            if (!(0, l._n)(e) || !e.disclaimers) return null;
                            let t = ((e, t) => {
                                for (let s of t) {
                                    let t = O(e, s);
                                    if (t && t.length > 0) {
                                        var i;
                                        return null != (i = t[0]) ? i : null;
                                    }
                                }
                                return null;
                            })(e.disclaimers, [D.M.EXPLICIT_ICON, D.M.AGE_18_ICON, D.M.EXCLAMATION_ICON]);
                            if ((null == t ? void 0 : t.type) === D.M.EXCLAMATION_ICON) return S.J.EXCLAMATION;
                            if ((null == t ? void 0 : t.type) === D.M.EXPLICIT_ICON) return S.J.E;
                            if ((null == t ? void 0 : t.type) === D.M.AGE_18_ICON) return S.J.NUMERIC;
                            return null;
                        },
                        get hasModalDisclaimer() {
                            if (!e.disclaimers) return !1;
                            let t = O(e.disclaimers, D.M.MODAL);
                            return !!(t && t.length > 0);
                        },
                        getIsLegalRejected(t) {
                            return !!(0, l._n)(e) && !t && this.hasModalDisclaimer;
                        },
                        getIsUnsafeLegal(t) {
                            return !!(0, l._n)(e) && !!e.disclaimers && t && this.hasModalDisclaimer;
                        },
                        get isForeignAgent() {
                            if (!(0, l._n)(e) || !e.disclaimers) return !1;
                            let t = O(e.disclaimers, D.M.FOREIGN_AGENT);
                            return !!(t && t.length > 0);
                        },
                        get resolvedForeignAgentData() {
                            var t;
                            if (!e.resolvedDisclaimers) return null;
                            let i = e.resolvedDisclaimers[D.M.FOREIGN_AGENT];
                            return null != (t = null == i ? void 0 : i[0]) ? t : null;
                        },
                        get resolvedDescriptionTexts() {
                            if (!e.resolvedDisclaimers) return null;
                            let t = e.resolvedDisclaimers[D.M.DESCRIPTION_TEXT];
                            if (!t || 0 === t.length) return null;
                            let i = [];
                            for (let e of t) e.title && i.push(e.title);
                            return i.length > 0 ? i : null;
                        },
                        get resolvedModalData() {
                            var i;
                            if (!e.resolvedDisclaimers) return null;
                            let t = e.resolvedDisclaimers[D.M.MODAL];
                            return null != (i = null == t ? void 0 : t[0]) ? i : null;
                        },
                    }))
                    .actions((e) => {
                        let t = (0, l.L3)(function* (t) {
                            let { modelActionsLogger: i } = (0, l._$)(e);
                            try {
                                if (!(0, l._n)(e) || !e.disclaimers) return null;
                                let i = O(e.disclaimers, t);
                                if (!i || 0 === i.length) return null;
                                let { disclaimersDictionary: s } = (0, l.Zn)(e);
                                if (!s) return null;
                                let r = [];
                                for (let e of i) {
                                    let t = yield s.getDisclaimerById(e.id);
                                    t && r.push((0, I.HO)(t));
                                }
                                return r;
                            } catch (e) {
                                return i.error(e), null;
                            }
                        });
                        return {
                            getDisclaimerData: (0, l.L3)(function* (e) {
                                return yield t(e);
                            }),
                            getModalDisclaimerData: (0, l.L3)(function* () {
                                let e = yield t(D.M.MODAL);
                                return e ? e[0] : null;
                            }),
                            getForeignAgentDisclaimerData: (0, l.L3)(function* () {
                                let e = yield t(D.M.FOREIGN_AGENT);
                                return e ? e[0] : null;
                            }),
                            getDescriptionTexts: (0, l.L3)(function* () {
                                if (e.resolvedDescriptionTexts) return e.resolvedDescriptionTexts;
                                let i = yield t(D.M.DESCRIPTION_TEXT);
                                if (!i) return null;
                                let s = [];
                                for (let e of i) s.push(e.title);
                                return s;
                            }),
                            resolveAllDisclaimers: (0, l.L3)(function* () {
                                if ((0, l._n)(e) && e.disclaimers && 0 !== e.disclaimers.length)
                                    for (let i of (e.resolvedDisclaimers || (e.resolvedDisclaimers = {}), Object.values(D.M))) {
                                        let s = yield t(i);
                                        s && s.length > 0 && (e.resolvedDisclaimers = { ...e.resolvedDisclaimers, [i]: s });
                                    }
                            }),
                        };
                    }),
                A = ['Safari', 'MobileSafari'],
                N = ['iOS', 'MacOS'],
                h = l.gK.model('DomainTrailerEntity', { available: l.gK.boolean }).views((e) => ({
                    get isAvailable() {
                        if (!(0, l._n)(e)) return !1;
                        let { settings: t } = (0, l.Zn)(e);
                        if (
                            !(null == t ? void 0 : t.browserInfo) ||
                            ((e) => {
                                let t = e.version ? Number(e.version.split('.')[0]) : void 0;
                                return !!(e.name && A.includes(e.name) && e.OSFamily && N.includes(e.OSFamily) && t && t < 18);
                            })(t.browserInfo)
                        )
                            return !1;
                        return e.available;
                    },
                }));
            var C = i(1211),
                R = i(62901),
                P = i(54574),
                x = i(19806);
            let _ = l.gK.model('Experiment', { group: l.gK.maybe(l.gK.string), value: l.gK.maybe(l.gK.frozen()) }),
                M = l.gK
                    .model('Experiments', {
                        loadingState: l.gK.enumeration(Object.values(f.G)),
                        experiments: l.gK.optional(l.gK.map(_), {}),
                        overwrittenExperiments: l.gK.optional(l.gK.map(_), {}),
                    })
                    .views((e) => {
                        let t = {
                            getOverwrittenExperiments() {
                                let { containerStorage: t, clientSafeConfig: i } = (0, l._$)(e),
                                    s = i.get(R.yc);
                                return (0, x._)(t, s);
                            },
                            getExperiment(i) {
                                let l = e.experiments.get(i),
                                    r = t.getOverwrittenExperiments();
                                return r?.[i] ?? window?.DEFAULT_MUSIC_EXPERIMENT_OVERRIDES?.()?.[i] ?? l;
                            },
                            isExperimentEnabled(e) {
                                let i = t.getExperiment(e);
                                return (0, C.A)(null == i ? void 0 : i.value.enabled)
                                    ? null == i
                                        ? void 0
                                        : i.value.enabled
                                    : t.checkExperiment(e, null == i ? void 0 : i.value.value);
                            },
                            getEnabledFlags() {
                                let i = [];
                                for (let s of new Set([...e.overwrittenExperiments.keys(), ...e.experiments.keys()]).keys()) t.isExperimentEnabled(s) && i.push(s);
                                return i;
                            },
                            checkExperiment(t, i) {
                                let s = e.experiments.get(t),
                                    { containerStorage: r, clientSafeConfig: a } = (0, l._$)(e),
                                    n = a.get(R.yc);
                                return (0, P.i)({ containerStorage: r, name: t, value: i, experimentDetail: s }, n);
                            },
                            isRejected: () => e.loadingState === f.G.REJECT,
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { accountResource: i, modelActionsLogger: s } = (0, l._$)(e);
                            if (e.loadingState !== f.G.PENDING)
                                try {
                                    e.loadingState = f.G.PENDING;
                                    let s = t;
                                    s || (s = yield i.experimentsDetails()),
                                        e.experiments.clear(),
                                        Object.entries(s).forEach((t) => {
                                            let [i, s] = t;
                                            e.experiments.set(i, s);
                                        }),
                                        (e.loadingState = f.G.RESOLVE);
                                } catch (t) {
                                    s.error(t), (e.loadingState = f.G.REJECT);
                                } finally {
                                    var r;
                                    Object.entries(null != (r = e.getOverwrittenExperiments()) ? r : {}).forEach((t) => {
                                        let [i, s] = t;
                                        e.overwrittenExperiments.set(i, s);
                                    });
                                }
                        }),
                        updateOverwrittenExperiments(t, i) {
                            let { clientSafeConfig: s } = (0, l._$)(e);
                            s.get(R.yc) && e.overwrittenExperiments.set(t, i);
                        },
                        deleteOverwrittenExperiments(t) {
                            let { clientSafeConfig: i } = (0, l._$)(e);
                            i.get(R.yc) && e.overwrittenExperiments.delete(t);
                        },
                    }));
            var G = i(81786),
                w = i(99431);
            let q = l.gK.model('ModelDestroyManager').actions(() => ({
                    destroyItems(e) {
                        e.forEach((e) => {
                            e && (0, l.Yo)(e);
                        }),
                            queueMicrotask(() => {
                                e.forEach((e) => {
                                    e && (0, l.zr)(e);
                                });
                            });
                    },
                })),
                j = l.gK.model('Pager', { page: l.gK.number, perPage: l.gK.number, total: l.gK.number });
            function V(e, t) {
                let { useAppendMode: i = !1 } = null != t ? t : {};
                return l.gK
                    .compose(
                        l.gK.model('PageLoader', {
                            items: l.gK.maybeNull(l.gK.array(l.gK.maybeNull(e))),
                            requestsCount: l.gK.optional(l.gK.number, 0),
                            initialRequestLoadingState: l.gK.optional(l.gK.enumeration(Object.values(f.G)), f.G.IDLE),
                            lastRejectedPagesList: l.gK.optional(l.gK.array(l.gK.number), []),
                            pager: l.gK.maybeNull(j),
                            pageStates: l.gK.maybeNull(l.gK.array(l.gK.enumeration(Object.values(f.G)))),
                        }),
                        q,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var i;
                                return null == (i = e.pageStates) || !i[t] || e.pageStates[t] === f.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var i;
                                return !!((null == (i = e.pageStates) ? void 0 : i.length) && e.pageStates.some((e) => e === f.G.RESOLVE));
                            },
                            get isEmpty() {
                                var s;
                                return t.isSomePageResolved && !(null == (s = e.items) ? void 0 : s.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === f.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === f.G.REJECT;
                            },
                            get rejectedPagesCount() {
                                var l;
                                if (t.isInitialRequestRejected || !(null == (l = e.pageStates) ? void 0 : l.length)) return 0;
                                return e.pageStates.filter((e) => e === f.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (i, s) => {
                                var l, r, a, n;
                                [f.G.IDLE, f.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = s);
                                let o = Math.max(
                                    i + 1,
                                    Math.ceil(
                                        (null != (a = null == (l = e.pager) ? void 0 : l.total) ? a : 0) /
                                            (null != (n = null == (r = e.pager) ? void 0 : r.perPage) ? n : 1),
                                    ),
                                );
                                t.ensurePageStatesInitialized(o), e.pageStates && (e.pageStates[i] = s), s === f.G.REJECT && t.addLastRejectedPageToList(i);
                            },
                            setItems: (s, r) => {
                                var a;
                                let { page: n, pager: o, responseStatus: g } = r;
                                if (((e.requestsCount = (null != (a = e.requestsCount) ? a : 0) + 1), g === G.F.ERROR || !s || !o))
                                    return void t.setPageState(n, f.G.REJECT);
                                e.pager || (e.pager = { page: o.page, perPage: o.perPage, total: o.total }),
                                    t.setPageState(n, f.G.RESOLVE),
                                    (e.pager.page = n),
                                    i
                                        ? (e.items || (e.items = (0, l.wg)([])), e.items && e.items.push(...s))
                                        : (e.items || (e.items = (0, l.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, w.I)({ items: e.items, mappedRawItems: s, page: n, pageSize: e.pager.perPage }));
                            },
                            resetRejectedPagesState() {
                                var t, i, s;
                                for (let l = 0; l < (null != (i = null == (t = e.pageStates) ? void 0 : t.length) ? i : 0); l++)
                                    (null == (s = e.pageStates) ? void 0 : s[l]) === f.G.REJECT && (e.pageStates[l] = f.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var i, s, l;
                                for (e.lastRejectedPagesList.push(t); (null != (s = null == (i = e.lastRejectedPagesList) ? void 0 : i.length) ? s : 0) > 5; )
                                    null == (l = e.lastRejectedPagesList) || l.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let i = Array.from({ length: t }, () => f.G.IDLE);
                                    e.pageStates = (0, l.wg)(i);
                                    return;
                                }
                                let i = e.pageStates.length;
                                if (t > i) {
                                    let s = Array.from({ length: t - i }, () => f.G.IDLE);
                                    e.pageStates.push(...s);
                                }
                            },
                            reset() {
                                (e.initialRequestLoadingState = f.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, l.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]);
                            },
                        };
                        return t;
                    });
            }
            var F = i(77534);
            let B = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
            var W = i(30361),
                U = i(35141);
            let $ = [W.s.LIKED_ALBUMS, W.s.LIKED_ARTISTS, W.s.LIKED_PLAYLISTS, W.s.LIKED_TRACKS, W.s.LIKED_CLIPS],
                H = l.gK.optional(l.gK.map(l.gK.enumeration(Object.values(U.O))), {}),
                z = l.gK.model('LibraryRecord', { revision: l.gK.maybeNull(l.gK.number), items: H }),
                J = l.gK
                    .compose(l.gK.model('Library', { tracks: z, albums: z, artists: z, playlists: z, clips: z }), p)
                    .views((e) => ({
                        isTrackLiked: (t) => e.tracks.items.get(String(t)) === U.O.LIKED,
                        isTrackDisliked: (t) => e.tracks.items.get(String(t)) === U.O.DISLIKED,
                        isArtistLiked: (t) => e.artists.items.get(String(t)) === U.O.LIKED,
                        isArtistDisliked: (t) => e.artists.items.get(String(t)) === U.O.DISLIKED,
                        isAlbumLiked: (t) => e.albums.items.get(String(t)) === U.O.LIKED,
                        isPlaylistLiked: (t) => e.playlists.items.get(String(t)) === U.O.LIKED,
                        isClipLiked: (t) => e.clips.items.get(String(t)) === U.O.LIKED,
                    }))
                    .actions((e) => {
                        let t = {
                            getData: (0, l.L3)(function* () {
                                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
                                    { modelActionsLogger: s, collectionResource: r } = (0, l._$)(e);
                                if (e.loadingState !== f.G.PENDING)
                                    try {
                                        e.loadingState = f.G.PENDING;
                                        let s = {};
                                        i.includes(W.s.LIKED_ALBUMS) && (s.likedAlbums = B(e.albums.revision)),
                                            i.includes(W.s.LIKED_ARTISTS) && (s.likedArtists = B(e.artists.revision)),
                                            i.includes(W.s.LIKED_TRACKS) && (s.likedTracks = B(e.tracks.revision)),
                                            i.includes(W.s.LIKED_CLIPS) && (s.likedClips = B(e.clips.revision)),
                                            i.includes(W.s.LIKED_PLAYLISTS) && (s.likedPlaylists = {});
                                        let l = yield r.sync(s);
                                        t.setAlbums(l.values.likedAlbums),
                                            t.setArtists(l.values.likedArtists),
                                            t.setPlaylists(l.values.likedPlaylists),
                                            t.setTracks(l.values.likedTracks),
                                            t.setClips(l.values.likedClips),
                                            (e.loadingState = f.G.RESOLVE);
                                    } catch (t) {
                                        s.error(t), (e.loadingState = f.G.REJECT);
                                    }
                            }),
                            setArtists: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.artists.revision !== i.info.revision &&
                                    (t.clearArtists(),
                                    (e.artists.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.artists.items.set(t.artistId.toString(), U.O.LIKED);
                                    }),
                                    i.values.disliked.map((t) => {
                                        e.artists.items.set(t.artistId.toString(), U.O.DISLIKED);
                                    }));
                            },
                            setAlbums: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.albums.revision !== i.info.revision &&
                                    (t.clearAlbums(),
                                    (e.albums.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.albums.items.set(t.albumId.toString(), U.O.LIKED);
                                    }));
                            },
                            setPlaylists: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    (t.clearPlaylists(),
                                    i.values.liked.map((t) => {
                                        e.playlists.items.set(''.concat(t.compositeData.uid, ':').concat(t.compositeData.kind), U.O.LIKED);
                                    }));
                            },
                            setTracks: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.tracks.revision !== i.info.revision &&
                                    (t.clearTracks(),
                                    (e.tracks.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.tracks.items.set(t.trackId, U.O.LIKED);
                                    }),
                                    i.values.disliked.map((t) => {
                                        e.tracks.items.set(t.trackId, U.O.DISLIKED);
                                    }));
                            },
                            setClips: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.clips.revision !== i.info.revision &&
                                    (t.clearClips(),
                                    (e.clips.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.clips.items.set(t.clipId.toString(), U.O.LIKED);
                                    }));
                            },
                            clearArtists: () => {
                                (e.artists.revision = null), e.artists.items.clear();
                            },
                            clearAlbums: () => {
                                (e.albums.revision = null), e.albums.items.clear();
                            },
                            clearPlaylists: () => {
                                (e.playlists.revision = null), e.playlists.items.clear();
                            },
                            clearTracks: () => {
                                (e.tracks.revision = null), e.tracks.items.clear();
                            },
                            clearClips: () => {
                                (e.clips.revision = null), e.clips.items.clear();
                            },
                            toggleTrackLike: (0, l.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: r } = (0, l._$)(e),
                                    a = String(i.entityId),
                                    n = e.tracks.items.get(a);
                                try {
                                    let l,
                                        r = { entityId: i.albumId ? ''.concat(i.entityId, ':').concat(i.albumId) : i.entityId, userId: i.userId };
                                    return (
                                        e.tracks.items.get(a) === U.O.LIKED
                                            ? (e.tracks.items.delete(a), (l = yield s.unlikeTrack(r)))
                                            : (e.tracks.items.set(a, U.O.LIKED), (l = yield s.likeTrack(r))),
                                        t.getData([W.s.LIKED_TRACKS]),
                                        l
                                    );
                                } catch (t) {
                                    return n ? e.tracks.items.set(a, n) : e.tracks.items.delete(a), r.error(t), F.f.ERROR;
                                }
                            }),
                            toggleTrackDislike: (0, l.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: r } = (0, l._$)(e),
                                    a = String(i.entityId),
                                    n = e.tracks.items.get(a);
                                try {
                                    let l,
                                        r = { entityId: i.albumId ? ''.concat(i.entityId, ':').concat(i.albumId) : i.entityId, userId: i.userId };
                                    return (
                                        e.tracks.items.get(a) === U.O.DISLIKED
                                            ? (e.tracks.items.delete(a), (l = yield s.undislikeTrack(r)))
                                            : (e.tracks.items.set(a, U.O.DISLIKED), (l = yield s.dislikeTrack(r))),
                                        t.getData([W.s.LIKED_TRACKS]),
                                        l
                                    );
                                } catch (t) {
                                    return n ? e.tracks.items.set(a, n) : e.tracks.items.delete(a), r.error(t), F.f.ERROR;
                                }
                            }),
                            toggleArtistLike: (0, l.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: r } = (0, l._$)(e),
                                    a = String(i.entityId),
                                    n = e.artists.items.get(a);
                                try {
                                    let l;
                                    return (
                                        e.artists.items.get(a) === U.O.LIKED
                                            ? (e.artists.items.delete(a), (l = yield s.unlikeArtist(i)))
                                            : (e.artists.items.set(a, U.O.LIKED), (l = yield s.likeArtist(i))),
                                        t.getData([W.s.LIKED_ARTISTS]),
                                        l
                                    );
                                } catch (t) {
                                    return n ? e.artists.items.set(a, n) : e.artists.items.delete(a), r.error(t), F.f.ERROR;
                                }
                            }),
                            toggleArtistDislike: (0, l.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: r } = (0, l._$)(e),
                                    a = String(i.entityId),
                                    n = e.artists.items.get(a);
                                try {
                                    let l;
                                    return (
                                        e.artists.items.get(a) === U.O.DISLIKED
                                            ? (e.artists.items.delete(a), (l = yield s.undislikeArtist(i)))
                                            : (e.artists.items.set(a, U.O.DISLIKED), (l = yield s.dislikeArtist(i))),
                                        t.getData([W.s.LIKED_ARTISTS]),
                                        l
                                    );
                                } catch (t) {
                                    return n ? e.artists.items.set(a, n) : e.artists.items.delete(a), r.error(t), F.f.ERROR;
                                }
                            }),
                            toggleAlbumLike: (0, l.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: r } = (0, l._$)(e),
                                    a = String(i.entityId),
                                    n = e.albums.items.get(a);
                                try {
                                    let l;
                                    return (
                                        e.albums.items.get(a) === U.O.LIKED
                                            ? (e.albums.items.delete(a), (l = yield s.unlikeAlbum(i)))
                                            : (e.albums.items.set(a, U.O.LIKED), (l = yield s.likeAlbum(i))),
                                        t.getData([W.s.LIKED_ALBUMS]),
                                        l
                                    );
                                } catch (t) {
                                    return n ? e.albums.items.set(a, n) : e.albums.items.delete(a), r.error(t), F.f.ERROR;
                                }
                            }),
                            togglePlaylistLike: (0, l.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: r } = (0, l._$)(e),
                                    a = String(i.entityId),
                                    n = e.playlists.items.get(a);
                                try {
                                    let l;
                                    return (
                                        e.playlists.items.get(a) === U.O.LIKED
                                            ? (e.playlists.items.delete(a), (l = yield s.unlikePlaylist(i)))
                                            : (e.playlists.items.set(a, U.O.LIKED), (l = yield s.likePlaylist(i))),
                                        t.getData([W.s.LIKED_PLAYLISTS]),
                                        l
                                    );
                                } catch (t) {
                                    return n ? e.playlists.items.set(a, n) : e.playlists.items.delete(a), r.error(t), F.f.ERROR;
                                }
                            }),
                            toggleClipLike: (0, l.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: r } = (0, l._$)(e),
                                    a = String(i.entityId),
                                    n = e.clips.items.get(a);
                                try {
                                    return (
                                        e.clips.items.get(a) === U.O.LIKED
                                            ? (e.clips.items.delete(a), yield s.unlikeClip(i))
                                            : (e.clips.items.set(a, U.O.LIKED), yield s.likeClip(i)),
                                        t.getData([W.s.LIKED_CLIPS]),
                                        F.f.OK
                                    );
                                } catch (t) {
                                    return n ? e.clips.items.set(a, n) : e.clips.items.delete(a), r.error(t), F.f.ERROR;
                                }
                            }),
                        };
                        return t;
                    }),
                X = l.gK
                    .model('LikesCount', { likesCount: l.gK.maybe(l.gK.number), pendingLikesCount: l.gK.optional(l.gK.number, 0) })
                    .views((e) => ({
                        get actualLikesCount() {
                            if ('number' == typeof e.likesCount) {
                                var t;
                                return e.likesCount + (null != (t = e.pendingLikesCount) ? t : 0);
                            }
                            return 0;
                        },
                    }))
                    .actions((e) => ({
                        likePending() {
                            e.pendingLikesCount += 1;
                        },
                        unlikePending() {
                            e.pendingLikesCount -= 1;
                        },
                    })),
                Z = l.gK
                    .model('Location', {
                        pathname: l.gK.optional(l.gK.string, ''),
                        searchParams: l.gK.optional(l.gK.string, ''),
                        host: l.gK.optional(l.gK.string, ''),
                        tld: l.gK.optional(l.gK.string, ''),
                        origin: l.gK.optional(l.gK.string, ''),
                        href: l.gK.optional(l.gK.string, ''),
                        isNotFound: l.gK.optional(l.gK.boolean, !1),
                    })
                    .actions((e) => ({
                        setPathname(t) {
                            e.pathname = t;
                        },
                        setSearchParams(t) {
                            e.searchParams = t;
                        },
                        setHost(t) {
                            e.host = t;
                        },
                        setTld(t) {
                            e.tld = t;
                        },
                        setOrigin(t) {
                            e.origin = t;
                        },
                        setHref(t) {
                            e.href = t;
                        },
                        setNotFound(t) {
                            e.isNotFound = t;
                        },
                    }));
            var Y = i(9348),
                Q = i(10744),
                ee = i(41670);
            let et = { INTRO_PLAN: ee.N.IntroPlan, INTRO_UNTIL_PLAN: ee.N.IntroUntilPlan, TRIAL_PLAN: ee.N.TrialPlan, TRIAL_UNTIL_PLAN: ee.N.TrialUntilPlan },
                ei = (e) => {
                    let { repetitionCount: t, typename: i, ...s } = e;
                    return { ...(Number.isFinite(t) ? { repeatCount: t } : {}), ...s, typename: et[i] || i };
                };
            var es = i(47049);
            let el = (e) => (0, l.wg)(e),
                er = (e) => {
                    let { plans: t, ...i } = e;
                    return (0, l.wg)({ ...i, plans: t.map(el) });
                },
                ea = (e) => {
                    let { option: t, ...i } = e;
                    return (0, l.wg)({ ...er(i), option: t });
                },
                en = (e) => {
                    let { positionId: t, silentInvoiceAvailable: i, structureType: s, tariffOffer: r, optionOffers: a } = e;
                    return (0, l.wg)({
                        positionId: t,
                        silentInvoiceAvailable: i,
                        structureType: s,
                        tariffOffer: ((e) => {
                            if (!e) return null;
                            let { tariff: t, ...i } = e;
                            return (0, l.wg)({ ...er(i), tariff: t });
                        })(r),
                        optionsOffers: a.map(ea),
                    });
                },
                eo = (e) => (0, l.wg)({ offer: en(e) }),
                eg = (e) =>
                    (0, l.wg)({
                        acqOffer: ((e) => {
                            let {
                                analyticData: t,
                                catalogCompositeOffer: i,
                                offerTexts: s,
                                target: r,
                                requestedFeatures: a,
                                position: n,
                                oneClickAvailable: o,
                                place: g,
                                purchaseToken: u,
                            } = e;
                            return (0, l.wg)({
                                analyticData: t,
                                catalogCompositeOffer: en(
                                    ((e) => {
                                        var t;
                                        let { tariffOffer: i, optionOffers: s } = e;
                                        return {
                                            ...e,
                                            silentInvoiceAvailable: !!e.silentInvoiceAvailable,
                                            structureType: e.structureType,
                                            tariffOffer: i ? { ...i, offerVendorType: i.offerVendorType, plans: null == (t = i.plans) ? void 0 : t.map(ei) } : void 0,
                                            optionOffers: null == s ? void 0 : s.map((e) => ({ ...e, plans: (e.plans || []).map(ei) })),
                                        };
                                    })(i),
                                ),
                                offerTexts: ((e) => {
                                    let { customTexts: t = {}, ...i } = e;
                                    return {
                                        ...i,
                                        customTexts: Object.entries(t).reduce((e, t) => {
                                            let [i, s] = t;
                                            return (e[(0, es.A)(i)] = s), e;
                                        }, {}),
                                    };
                                })(s),
                                target: r,
                                requestedFeatures: a,
                                position: n,
                                oneClickAvailable: o,
                                place: g,
                                purchaseToken: u,
                            });
                        })(e),
                    });
            var eu = i(1756);
            let ed = l.gK.model({ batchId: l.gK.string, positionId: l.gK.string, placeId: l.gK.maybe(l.gK.string) }),
                em = l.gK.model({
                    buttonText: l.gK.maybe(l.gK.string),
                    buttonAdditionalText: l.gK.maybe(l.gK.string),
                    buttonTextA11y: l.gK.maybe(l.gK.string),
                    oneClickDisclaimerText: l.gK.maybe(l.gK.string),
                    oneClickDisclaimerTextA11y: l.gK.maybe(l.gK.string),
                }),
                ec = l.gK.model({
                    subscriptionName: l.gK.string,
                    buttonText: l.gK.string,
                    buttonTextWithDetails: l.gK.string,
                    combinedIntroductoryText: l.gK.string,
                    combinedPriceText: l.gK.string,
                    combinedFullOfferText: l.gK.string,
                    priceInMonth: l.gK.string,
                    customTexts: em,
                });
            !(function (e) {
                (e.COMPOSITE = 'COMPOSITE'), (e.OPTION = 'OPTION'), (e.TARIFF = 'TARIFF');
            })(s || (s = {}));
            let eK = l.gK.model({ amount: l.gK.number, currency: l.gK.string }),
                ef = l.gK.model({ typename: l.gK.literal(ee.N.IntroPlan), period: l.gK.string, price: eK, repeatCount: l.gK.maybe(l.gK.number) }),
                ep = l.gK.model({ typename: l.gK.literal(ee.N.IntroUntilPlan), price: eK, until: l.gK.string }),
                ev = l.gK.model({ typename: l.gK.literal(ee.N.TrialPlan), period: l.gK.string }),
                eb = l.gK.model({ typename: l.gK.literal(ee.N.TrialUntilPlan), until: l.gK.string }),
                eI = l.gK.union(ef, ep, ev, eb),
                ey = l.gK.model({ name: l.gK.string }),
                eE = l.gK.model({
                    additionText: l.gK.string,
                    description: l.gK.string,
                    name: l.gK.string,
                    text: l.gK.string,
                    title: l.gK.string,
                    plans: l.gK.array(eI),
                    commonPeriod: l.gK.string,
                    commonPrice: eK,
                }),
                eL = eE.props({ option: ey }),
                eT = eE.props({ tariff: ey }),
                eD = l.gK.model({
                    positionId: l.gK.string,
                    silentInvoiceAvailable: l.gK.boolean,
                    structureType: l.gK.enumeration(Object.values(s)),
                    tariffOffer: l.gK.maybeNull(eT),
                    optionsOffers: l.gK.array(eL),
                }),
                eO = l.gK.model({
                    analyticData: ed,
                    catalogCompositeOffer: eD,
                    offerTexts: ec,
                    target: l.gK.string,
                    requestedFeatures: l.gK.maybe(l.gK.array(l.gK.string)),
                    position: l.gK.number,
                    oneClickAvailable: l.gK.maybe(l.gK.boolean),
                    place: l.gK.maybe(l.gK.string),
                    purchaseToken: l.gK.maybe(l.gK.string),
                }),
                eS = l.gK.model({ offer: l.gK.maybeNull(eD), acqOffer: l.gK.maybeNull(eO) }).views((e) => {
                    let t = {
                        get target() {
                            var i;
                            return (null == (i = e.acqOffer) ? void 0 : i.target) || 'music';
                        },
                        get offerPosition() {
                            var s, l;
                            return null != (l = null == (s = e.acqOffer) ? void 0 : s.position) ? l : 0;
                        },
                        get place() {
                            var r;
                            return null == (r = e.acqOffer) ? void 0 : r.place;
                        },
                        get catalogCompositeOffer() {
                            var a;
                            return (null == (a = e.acqOffer) ? void 0 : a.catalogCompositeOffer) || e.offer;
                        },
                        get offersPositionId() {
                            var n, o;
                            return (
                                (null == (n = e.acqOffer) ? void 0 : n.analyticData.positionId) || (null == (o = t.catalogCompositeOffer) ? void 0 : o.positionId) || ''
                            );
                        },
                        get tariffOffer() {
                            var g;
                            return null == (g = t.catalogCompositeOffer) ? void 0 : g.tariffOffer;
                        },
                        get customTexts() {
                            var u, d;
                            return null == (d = e.acqOffer) || null == (u = d.offerTexts) ? void 0 : u.customTexts;
                        },
                        get oneClickAvailable() {
                            var m, c;
                            return !!((null == (m = e.acqOffer) ? void 0 : m.oneClickAvailable) && (null == (c = t.oneClickDisclaimerText) ? void 0 : c.trim()));
                        },
                        get oneClickDisclaimerText() {
                            var K;
                            return null == (K = t.customTexts) ? void 0 : K.oneClickDisclaimerText;
                        },
                        get oneClickDisclaimerTextA11y() {
                            var f;
                            return null == (f = t.customTexts) ? void 0 : f.oneClickDisclaimerTextA11y;
                        },
                        get mainText() {
                            var p, v;
                            return (null == (p = t.customTexts) ? void 0 : p.buttonText) || (null == (v = t.tariffOffer) ? void 0 : v.text);
                        },
                        get mainTextA11y() {
                            var b;
                            return null == (b = t.customTexts) ? void 0 : b.buttonTextA11y;
                        },
                        get additionText() {
                            var I, y;
                            return (null == (I = t.customTexts) ? void 0 : I.buttonAdditionalText) || (null == (y = t.tariffOffer) ? void 0 : y.additionText);
                        },
                        get offersBatchId() {
                            var E, L;
                            return (null == (E = e.acqOffer) ? void 0 : E.analyticData.batchId) || (null == (L = e.offer) ? void 0 : L.positionId) || '';
                        },
                        get subscriptionName() {
                            var T, D;
                            return null == (D = e.acqOffer) || null == (T = D.offerTexts) ? void 0 : T.subscriptionName;
                        },
                        get offerText() {
                            var O, S;
                            return null == (S = e.acqOffer) || null == (O = S.offerTexts) ? void 0 : O.buttonTextWithDetails;
                        },
                    };
                    return t;
                }),
                ek = l.gK.model({
                    sessionId: l.gK.maybeNull(l.gK.string),
                    page: l.gK.maybeNull(l.gK.string),
                    offers: l.gK.array(eS),
                    mlRequestId: l.gK.maybeNull(l.gK.string),
                    offerConfigId: l.gK.maybeNull(l.gK.number),
                    language: l.gK.maybeNull(l.gK.string),
                }),
                eA = l.gK.compose(ek, p, l.gK.model({ isLoadOffersResultSent: l.gK.boolean })),
                eN = l.gK.model({ eventSessionId: l.gK.string, batchPositionId: l.gK.string, offers: l.gK.array(eS) }),
                eh = l.gK
                    .compose(
                        l.gK.model({
                            isWebNextPlusAcqToolkitOn: l.gK.maybe(l.gK.boolean),
                            isLoadOffersResultSent: l.gK.maybe(l.gK.boolean),
                            data: l.gK.maybeNull(eN),
                            acqData: l.gK.map(eA),
                            customTarget: l.gK.maybe(l.gK.string),
                        }),
                        p,
                    )
                    .volatile(() => ({ sessionId: (0, Y.A)(), isFrontSessionStartSent: !1 }))
                    .views((e) => {
                        let t = {
                            getIsShimmerVisible(t) {
                                let i = e.isWebNextPlusAcqToolkitOn && t && e.acqData.get(t);
                                return i ? i.isNeededToLoad || i.isLoading || i.isRejected : e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            getIsShimmerActive(t) {
                                let i = e.isWebNextPlusAcqToolkitOn && t && e.acqData.get(t);
                                return i ? i.isLoading : e.isLoading;
                            },
                            getIsNeededToLoad(t) {
                                let i = e.isWebNextPlusAcqToolkitOn && t && e.acqData.get(t);
                                return i ? i.isNeededToLoad : e.isNeededToLoad;
                            },
                            getIsLoadOffersResultSent(t) {
                                let i = e.isWebNextPlusAcqToolkitOn && t && e.acqData.get(t);
                                return i ? i.isLoadOffersResultSent : e.isLoadOffersResultSent;
                            },
                            getLoadingState(t) {
                                let i = e.isWebNextPlusAcqToolkitOn && t && e.acqData.get(t);
                                return i ? i.loadingState : e.loadingState;
                            },
                            get serviceSessionId() {
                                return e.sessionId;
                            },
                            getOffersPositionIds(t) {
                                var i, s, l, r, a;
                                return (
                                    (e.isWebNextPlusAcqToolkitOn &&
                                        t &&
                                        (null == (l = e.acqData) || null == (s = l.get(t)) || null == (i = s.offers) ? void 0 : i.map((e) => e.offersPositionId))) ||
                                    (null == (a = e.data) || null == (r = a.offers) ? void 0 : r.map((e) => e.offersPositionId)) ||
                                    []
                                );
                            },
                            getOffer(t, i) {
                                var s, l;
                                let r = e.isWebNextPlusAcqToolkitOn && (null == (s = e.acqData) ? void 0 : s.get(t));
                                return r ? (i ? r.offers.find((e) => e.place === i) : r.offers[0]) : null == (l = e.data) ? void 0 : l.offers[0];
                            },
                            getTarget(i, s) {
                                var l;
                                return (e.isWebNextPlusAcqToolkitOn && (null == (l = t.getOffer(i, s)) ? void 0 : l.target)) || e.customTarget || 'music';
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            toggleIsFrontSessionStartSentTrue() {
                                e.isFrontSessionStartSent = !0;
                            },
                            toggleIsLoadOffersResultSentTrue() {
                                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q.l.NO_VALUE;
                                e.isWebNextPlusAcqToolkitOn ? t.setAcqData(i, { isLoadOffersResultSent: !0 }) : (e.isLoadOffersResultSent = !0);
                            },
                            setCustomTarget(t) {
                                e.customTarget = t;
                            },
                            setLoadingState(i) {
                                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q.l.NO_VALUE;
                                e.isWebNextPlusAcqToolkitOn ? t.setAcqData(s, { ...e.acqData.get(s), loadingState: i }) : (e.loadingState = i);
                            },
                            setAcqData(t, i) {
                                var s;
                                e.acqData.set(t, { loadingState: f.G.IDLE, isLoadOffersResultSent: !1, ...(null != (s = e.acqData.get(t)) ? s : {}), ...i });
                            },
                            getData: (0, l.L3)(function* (i) {
                                let s,
                                    { uid: r, page: a, places: n, communicationId: o, campaignId: g, customTarget: u, widgetServiceName: d } = i,
                                    { acqOffers: m, offersResource: c, modelActionsLogger: K } = (0, l._$)(e),
                                    { experiments: p } = (0, l.Zn)(e),
                                    v = p.getEnabledFlags(),
                                    b = p.checkExperiment(eu.z.WebNextPlusAcqToolkit, 'on'),
                                    I = b ? a || Q.l.NO_VALUE : void 0;
                                if (((e.isWebNextPlusAcqToolkitOn = b), e.getLoadingState(a) !== f.G.PENDING)) {
                                    e.isLoadOffersResultSent = !1;
                                    try {
                                        if ((t.setLoadingState(f.G.PENDING, I), b)) {
                                            let i = {};
                                            o && (i.communication_id = o),
                                                g && (i.campaign_id = g),
                                                (s = yield m.getOffers(I, n, { expFlags: v, eventSessionId: e.sessionId, customProperties: i, widgetServiceName: d })),
                                                t.setAcqData(I || Q.l.NO_VALUE, {
                                                    ...((e) => {
                                                        let { sessionId: t, result: i, offerConfigId: s, mlRequestId: r, page: a, language: n } = e;
                                                        return (0, l.wg)({ sessionId: t, page: a, offers: i.map(eg), mlRequestId: r, offerConfigId: s, language: n });
                                                    })(s),
                                                    loadingState: f.G.RESOLVE,
                                                    isLoadOffersResultSent: !1,
                                                });
                                        } else
                                            (s = yield c.getCompositeOffers({ uid: r, target: u || 'music' })),
                                                (e.data = ((e) => {
                                                    let { eventSessionId: t, batchPositionId: i, offers: s } = e;
                                                    return (0, l.wg)({ eventSessionId: t, batchPositionId: i, offers: s.map(eo) });
                                                })(s)),
                                                u && t.setCustomTarget(u);
                                        t.setLoadingState(f.G.RESOLVE, I);
                                    } catch (e) {
                                        t.setLoadingState(f.G.REJECT, I), K.error(e);
                                    }
                                }
                            }),
                        };
                        return t;
                    })
                    .named('MusicOffers'),
                eC = l.gK.model('Offers', { music: eh });
            var eR = i(23753),
                eP = i(76294),
                ex = i(29895),
                e_ = i(29143),
                eM = i(90461);
            let eG = l.gK
                    .model('Settings', {
                        layout: l.gK.maybeNull(l.gK.enumeration(Object.keys(eR.u))),
                        isLandscape: l.gK.boolean,
                        isMobileLandscapeHeight: l.gK.boolean,
                        platform: l.gK.maybe(l.gK.enumeration(Object.values(e_.O))),
                        browserInfo: o,
                        liteVersionMode: l.gK.maybe(l.gK.enumeration(Object.values(ex.w))),
                        selectedThumbId: l.gK.enumeration(Object.values(eP.T)),
                    })
                    .views((e) => {
                        let t = {
                            get isMobile() {
                                return e.layout === eR.u.Mobile;
                            },
                            get isWindowsApplication() {
                                return e.platform === e_.O.WINDOWS;
                            },
                            get isMacOSApplication() {
                                return e.platform === e_.O.MACOS;
                            },
                            get isLinuxApplication() {
                                return e.platform === e_.O.LINUX;
                            },
                            get isLiteVersionModeEnabled() {
                                return e.liteVersionMode === ex.w.ENABLED;
                            },
                            get isLiteVersionModeDisabled() {
                                return e.liteVersionMode === ex.w.DISABLED;
                            },
                            get isLiteVersionModeAvailableForToggle() {
                                return t.isLiteVersionModeDisabled || t.isLiteVersionModeEnabled;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setLayout(t) {
                                e.layout = t;
                            },
                            setPlatform(t) {
                                e.platform = t;
                            },
                            setIsLandscape(t) {
                                e.isLandscape = t;
                            },
                            setIsMobileLandscapeHeight(t) {
                                e.isMobileLandscapeHeight = t;
                            },
                            setBrowserInfo(t) {
                                let i = void 0 !== t.version ? String(t.version) : void 0;
                                e.browserInfo = (0, l.wg)({ ...t, version: i });
                            },
                            initializeLiteVersionMode() {
                                if (!(0, l._n)(e)) return;
                                let { experiments: i } = (0, l.Zn)(e),
                                    { containerStorage: s } = (0, l._$)(e),
                                    r = s.get(eM.c.LiteVersionMode);
                                if (r) {
                                    if ('2' !== r.version || !i.checkExperiment(eu.z.WebNextLiteVersion, 'on')) return void s.remove(eM.c.LiteVersionMode);
                                    t.setLiteVersionMode(r.mode, !1);
                                }
                            },
                            setLiteVersionMode(t, i) {
                                let { containerStorage: s } = (0, l._$)(e);
                                (e.liteVersionMode = t), i && s.set(eM.c.LiteVersionMode, { version: '2', mode: t });
                            },
                            setCustomPlayerThumb(t) {
                                let { localStorage: i } = (0, l._$)(e),
                                    s = t;
                                Object.values(eP.T).includes(t) || (s = eP.T.DEFAULT), (e.selectedThumbId = s);
                                let r = i.get(eM.c.CustomPlayerThumbConfig);
                                i.set(eM.c.CustomPlayerThumbConfig, { ...r, selectedThumbId: s, version: '1' });
                            },
                            initializeCustomPlayerThumb() {
                                if (!(0, l._n)(e)) return;
                                let { experiments: i, user: s } = (0, l.Zn)(e),
                                    { localStorage: r } = (0, l._$)(e),
                                    a = r.get(eM.c.CustomPlayerThumbConfig);
                                if (a) {
                                    if ('1' !== a.version || !i.checkExperiment(eu.z.WebNextCustomThumb, 'on') || !s.hasPlus) {
                                        (e.selectedThumbId = eP.T.DEFAULT), r.remove(eM.c.CustomPlayerThumbConfig);
                                        return;
                                    }
                                    if (a.selectedThumbId === eP.T.BRANDED && s.hasPlus) return void t.setCustomPlayerThumb(eP.T.DEFAULT);
                                    t.setCustomPlayerThumb(a.selectedThumbId);
                                }
                            },
                        };
                        return t;
                    }),
                ew = a
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                let {
                                        experiments: t,
                                        advertBanners: {
                                            banners: { brandedPlaylistBanner: i, brandedEntityAxeBanner: s },
                                        },
                                    } = (0, l.Zn)(e),
                                    r = t.checkExperiment(eu.z.WebNextDisableAds, 'on');
                                if (i.isVisible || s.isVisible || r) return !1;
                                return !0;
                            },
                        },
                    }))
                    .named('SideAdvertBanner'),
                eq = a
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                var t;
                                let {
                                        experiments: i,
                                        settings: s,
                                        advertBanners: {
                                            banners: { brandedPlaylistBanner: r, brandedEntityAxeBanner: a },
                                        },
                                    } = (0, l.Zn)(e),
                                    n =
                                        s.isMobile &&
                                        (i.checkExperiment(eu.z.WebNextTouchAds, 'small_banner') || i.checkExperiment(eu.z.WebNextTouchAds, 'large_banner')),
                                    o = r.isVisible || a.isVisible;
                                return !(null == (t = s.browserInfo) ? void 0 : t.isTouch) && !n && !o;
                            },
                        },
                    }))
                    .named('TopAdvertBanner'),
                ej = l.gK.model('TrackIdModel', { id: l.gK.union(l.gK.string, l.gK.number), albumId: l.gK.maybe(l.gK.number), timestamp: l.gK.maybe(l.gK.string) });
        },
        73975: (e, t, i) => {
            var s;
            i.d(t, { M: () => s }),
                (function (e) {
                    (e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon');
                })(s || (s = {}));
        },
        77534: (e, t, i) => {
            var s;
            i.d(t, { f: () => s }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(s || (s = {}));
        },
        79899: (e, t, i) => {
            var s;
            i.d(t, { K: () => s }),
                (function (e) {
                    (e.EXPLICIT = 'explicit'), (e.CLEAN = 'clean');
                })(s || (s = {}));
        },
    },
]);
