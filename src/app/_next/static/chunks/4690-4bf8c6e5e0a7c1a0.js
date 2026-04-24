'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4690],
    {
        21192: (e, t, i) => {
            var r;
            i.d(t, { f: () => r }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(r || (r = {}));
        },
        54690: (e, t, i) => {
            i.d(t, {
                JE: () => l,
                qt: () => a,
                lg: () => o,
                $B: () => g,
                xE: () => v,
                CA: () => y,
                aQ: () => O,
                YL: () => P,
                Ec: () => D,
                br: () => $,
                tP: () => H,
                XT: () => f,
                FN: () => z,
                pl: () => w,
                Fr: () => eS,
                jd: () => _,
                dA: () => eC,
                vE: () => eP,
                Hp: () => ex,
                eD: () => eN,
                Ij: () => G,
            });
            var r = i(51606),
                s = i(29665);
            let l = r.gK
                    .model('BaseAdvertBanner', { type: r.gK.enumeration(Object.values(s.h)), noAds: r.gK.boolean, hasError: r.gK.boolean, isShowBanner: r.gK.boolean })
                    .views((e) => ({
                        get isVisible() {
                            if (e.noAds || e.hasError || !e.isShowBanner) return !1;
                            let { advertBanners: t } = (0, r.Zn)(e);
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
                            (e.type = s.h.EMPTY), (e.noAds = !1), (e.isShowBanner = !0), (e.hasError = !1);
                        },
                    })),
                a = r.gK.model('BaseModal', { isOpened: r.gK.optional(r.gK.boolean, !1) }).actions((e) => ({
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
                n = r.gK
                    .model('BrowserInfo', {
                        hasHuaweiAppGallery: r.gK.boolean,
                        inAppBrowser: r.gK.boolean,
                        isBrowser: r.gK.boolean,
                        isMobile: r.gK.boolean,
                        isTablet: r.gK.boolean,
                        isTouch: r.gK.boolean,
                        name: r.gK.maybe(r.gK.string),
                        version: r.gK.maybe(r.gK.string),
                        OSFamily: r.gK.maybe(r.gK.string),
                    })
                    .views((e) => ({
                        get isSafari() {
                            var t;
                            return null == (t = e.name) ? void 0 : t.toLowerCase().includes('safari');
                        },
                    })),
                o = r.gK.model('CaseForms', {
                    nominative: r.gK.optional(r.gK.string, ''),
                    genitive: r.gK.optional(r.gK.string, ''),
                    dative: r.gK.optional(r.gK.string, ''),
                    accusative: r.gK.optional(r.gK.string, ''),
                    instrumental: r.gK.optional(r.gK.string, ''),
                    prepositional: r.gK.optional(r.gK.string, ''),
                }),
                g = r.gK.model('Cover', { uri: r.gK.maybe(r.gK.string), color: r.gK.maybe(r.gK.string), videoUrl: r.gK.maybe(r.gK.string) }),
                u = r.gK.model('DisclaimerDetails', { text: r.gK.maybe(r.gK.string), url: r.gK.maybe(r.gK.string) }),
                d = r.gK.model('DisclaimerData', { title: r.gK.maybe(r.gK.string), description: r.gK.maybe(r.gK.string), details: r.gK.maybe(u) }),
                m = r.gK.compose(r.gK.model({ id: r.gK.string, type: r.gK.string }), d);
            var c = i(52437),
                K = i(13491);
            let f = r.gK.model('LoadingState', { loadingState: r.gK.enumeration(Object.values(K.G)) }).views((e) => ({
                    get isNeededToLoad() {
                        return e.loadingState === K.G.IDLE;
                    },
                    get isLoading() {
                        return e.loadingState === K.G.PENDING;
                    },
                    get isResolved() {
                        return e.loadingState === K.G.RESOLVE;
                    },
                    get isRejected() {
                        return e.loadingState === K.G.REJECT;
                    },
                })),
                p = r.gK.model('EntityRef', { entityType: r.gK.enumeration(Object.values(c.n)), entityId: r.gK.union(r.gK.string, r.gK.number) }),
                v = r.gK
                    .compose(
                        r.gK.model('DisclaimerModalState', {
                            currentEntityRef: r.gK.maybeNull(p),
                            type: r.gK.maybeNull(r.gK.enumeration(Object.values(c.Z))),
                            id: r.gK.maybeNull(r.gK.string),
                            isUnsafeDisclaimerConfirmed: r.gK.optional(r.gK.boolean, !1),
                            shouldHistoryBack: r.gK.optional(r.gK.boolean, !1),
                            shouldCloseModalOnOutsidePress: r.gK.optional(r.gK.boolean, !0),
                            shouldCloseModalOnEscape: r.gK.optional(r.gK.boolean, !0),
                            entityKey: r.gK.maybeNull(r.gK.string),
                            modalData: r.gK.maybeNull(r.gK.frozen()),
                        }),
                        f,
                    )
                    .volatile(() => ({ onDisclaimerConfirmHandler: null, onDisclaimerRejectHandler: null }))
                    .views((e) => ({
                        get entityType() {
                            var t, i;
                            return null != (i = null == (t = e.currentEntityRef) ? void 0 : t.entityType) ? i : null;
                        },
                        get entityId() {
                            var r, s;
                            return null != (s = null == (r = e.currentEntityRef) ? void 0 : r.entityId) ? s : null;
                        },
                        get isNeededToLoad() {
                            return e.loadingState === K.G.IDLE;
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
                        setEntityKey(t) {
                            e.entityKey = t;
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
                                (e.loadingState = K.G.IDLE),
                                (e.entityKey = null),
                                (e.modalData = null),
                                (e.onDisclaimerConfirmHandler = null),
                                (e.onDisclaimerRejectHandler = null);
                        },
                    })),
                y = r.gK.compose(r.gK.model('DisclaimersDictionary', { disclaimers: r.gK.maybe(r.gK.array(m)) }), f).actions((e) => {
                    let t,
                        i,
                        s,
                        { disclaimerDictionary: l, modelActionsLogger: a } = (0, r._$)(e),
                        n = {
                            syncDisclaimers(t) {
                                e.disclaimers = t ? (0, r.wg)(t) : void 0;
                            },
                            syncLoadingState() {
                                if (l.isLoading.value) {
                                    e.loadingState = K.G.PENDING;
                                    return;
                                }
                                if (l.error.value) {
                                    e.loadingState = K.G.REJECT;
                                    return;
                                }
                                if (l.items.value) {
                                    e.loadingState = K.G.RESOLVE;
                                    return;
                                }
                                e.loadingState = K.G.IDLE;
                            },
                            afterCreate() {
                                (t = l.items.onChange((e) => {
                                    n.syncDisclaimers(e), n.syncLoadingState();
                                })),
                                    (i = l.isLoading.onChange(() => {
                                        n.syncLoadingState();
                                    })),
                                    (s = l.error.onChange(() => {
                                        n.syncLoadingState();
                                    }));
                            },
                            beforeDestroy() {
                                null == t || t(), null == i || i(), null == s || s();
                            },
                            getDisclaimers: (0, r.L3)(function* () {
                                try {
                                    yield l.load();
                                } catch (e) {
                                    a.error(e);
                                }
                            }),
                            getDisclaimerById: (0, r.L3)(function* (e) {
                                try {
                                    let t = yield l.getById(e);
                                    return t ? (0, r.wg)(t) : void 0;
                                } catch (e) {
                                    a.error(e);
                                    return;
                                }
                            }),
                        };
                    return n;
                });
            var b = i(14174),
                L = i(64525),
                I = i(20073);
            let E = (e) => ({
                    id: e.id,
                    type: e.type,
                    title: e.title,
                    description: e.description,
                    details: e.details ? { text: e.details.text, url: e.details.url } : void 0,
                }),
                D = r.gK
                    .model('ExplicitModel', {
                        contentWarning: r.gK.maybe(r.gK.enumeration(Object.values(L.K))),
                        trackType: r.gK.maybe(r.gK.enumeration(Object.values(I.S))),
                        disclaimers: r.gK.maybe(r.gK.array(r.gK.string)),
                        resolvedDisclaimers: r.gK.maybe(r.gK.frozen()),
                    })
                    .views((e) => ({
                        get isExplicit() {
                            return e.contentWarning === L.K.EXPLICIT;
                        },
                        get explicitDisclaimer() {
                            if (!(0, r._n)(e) || !e.disclaimers) return null;
                            return (0, b.DQ)(e.disclaimers);
                        },
                        get hasModalDisclaimer() {
                            if (!e.disclaimers) return !1;
                            return (0, b.Ve)(e.disclaimers, b.Yw.MODAL);
                        },
                        getIsLegalRejected(t) {
                            return !!(0, r._n)(e) && !t && this.hasModalDisclaimer;
                        },
                        getIsUnsafeLegal(t) {
                            return !!(0, r._n)(e) && !!e.disclaimers && t && this.hasModalDisclaimer;
                        },
                        get isForeignAgent() {
                            if (!(0, r._n)(e) || !e.disclaimers) return !1;
                            return (0, b.Ve)(e.disclaimers, b.Yw.FOREIGN_AGENT);
                        },
                        get resolvedForeignAgentData() {
                            var t;
                            if (!e.resolvedDisclaimers) return null;
                            let i = e.resolvedDisclaimers[b.Yw.FOREIGN_AGENT];
                            return null != (t = null == i ? void 0 : i[0]) ? t : null;
                        },
                        get resolvedDescriptionTexts() {
                            if (!e.resolvedDisclaimers) return null;
                            let t = e.resolvedDisclaimers[b.Yw.DESCRIPTION_TEXT];
                            if (!t || 0 === t.length) return null;
                            let i = [];
                            for (let e of t) e.title && i.push(e.title);
                            return i.length > 0 ? i : null;
                        },
                        get resolvedModalData() {
                            var i;
                            if (!e.resolvedDisclaimers) return null;
                            let t = e.resolvedDisclaimers[b.Yw.MODAL];
                            return null != (i = null == t ? void 0 : t[0]) ? i : null;
                        },
                    }))
                    .actions((e) => {
                        let { disclaimerDictionary: t, modelActionsLogger: i } = (0, r._$)(e),
                            s = (0, r.L3)(function* (s) {
                                try {
                                    if (!(0, r._n)(e) || !e.disclaimers) return null;
                                    let i = yield t.resolveByType(e.disclaimers, s);
                                    if (0 === i.length) return null;
                                    return i.map(E);
                                } catch (e) {
                                    return i.error(e), null;
                                }
                            });
                        return {
                            getDisclaimerData: (0, r.L3)(function* (e) {
                                return yield s(e);
                            }),
                            getModalDisclaimerData: (0, r.L3)(function* () {
                                var e;
                                let t = yield s(b.Yw.MODAL);
                                return t && null != (e = t[0]) ? e : null;
                            }),
                            getForeignAgentDisclaimerData: (0, r.L3)(function* () {
                                var e;
                                let t = yield s(b.Yw.FOREIGN_AGENT);
                                return t && null != (e = t[0]) ? e : null;
                            }),
                            getDescriptionTexts: (0, r.L3)(function* () {
                                if (e.resolvedDescriptionTexts) return e.resolvedDescriptionTexts;
                                let t = yield s(b.Yw.DESCRIPTION_TEXT);
                                if (!t) return null;
                                let i = [];
                                for (let e of t) e.title && i.push(e.title);
                                return i.length > 0 ? i : null;
                            }),
                            resolveAllDisclaimers: (0, r.L3)(function* () {
                                if ((0, r._n)(e) && e.disclaimers && 0 !== e.disclaimers.length)
                                    try {
                                        let i = yield t.resolveAll(e.disclaimers);
                                        e.resolvedDisclaimers = (0, r.wg)(
                                            Object.fromEntries(
                                                Object.entries(i).map((e) => {
                                                    let [t, i] = e;
                                                    return [t, i.map(E)];
                                                }),
                                            ),
                                        );
                                    } catch (e) {
                                        i.error(e);
                                    }
                            }),
                        };
                    }),
                S = ['Safari', 'MobileSafari'],
                T = ['iOS', 'MacOS'],
                O = r.gK.model('DomainTrailerEntity', { available: r.gK.boolean }).views((e) => ({
                    get isAvailable() {
                        if (!(0, r._n)(e)) return !1;
                        let { settings: t } = (0, r.Zn)(e);
                        if (
                            !(null == t ? void 0 : t.browserInfo) ||
                            ((e) => {
                                let t = e.version ? Number(e.version.split('.')[0]) : void 0;
                                return !!(e.name && S.includes(e.name) && e.OSFamily && T.includes(e.OSFamily) && t && t < 18);
                            })(t.browserInfo)
                        )
                            return !1;
                        return e.available;
                    },
                }));
            var h = i(75873),
                k = i(36931),
                R = i(98076),
                A = i(41768);
            let C = r.gK.model('Experiment', { group: r.gK.maybe(r.gK.string), value: r.gK.maybe(r.gK.frozen()) }),
                P = r.gK
                    .model('Experiments', {
                        loadingState: r.gK.enumeration(Object.values(K.G)),
                        experiments: r.gK.optional(r.gK.map(C), {}),
                        overwrittenExperiments: r.gK.optional(r.gK.map(C), {}),
                    })
                    .views((e) => {
                        let t = {
                            getOverwrittenExperiments() {
                                let { containerStorage: t, clientSafeConfig: i } = (0, r._$)(e),
                                    s = i.get(k.yc);
                                return (0, A._)(t, s);
                            },
                            getExperiment(i) {
                                var r;
                                let s = e.experiments.get(i),
                                    l = t.getOverwrittenExperiments();
                                return l && null != (r = l[i]) ? r : s;
                            },
                            isExperimentEnabled(e) {
                                let i = t.getExperiment(e);
                                return (0, h.A)(null == i ? void 0 : i.value.enabled)
                                    ? null == i
                                        ? void 0
                                        : i.value.enabled
                                    : t.checkExperiment(e, null == i ? void 0 : i.value.value);
                            },
                            getEnabledFlags() {
                                let i = [];
                                for (let r of new Set([...e.overwrittenExperiments.keys(), ...e.experiments.keys()]).keys()) t.isExperimentEnabled(r) && i.push(r);
                                return i;
                            },
                            checkExperiment(t, i) {
                                let s = e.experiments.get(t),
                                    { containerStorage: l, clientSafeConfig: a } = (0, r._$)(e),
                                    n = a.get(k.yc);
                                return (0, R.i)({ containerStorage: l, name: t, value: i, experimentDetail: s }, n);
                            },
                            isRejected: () => e.loadingState === K.G.REJECT,
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { accountResource: i, modelActionsLogger: s } = (0, r._$)(e);
                            if (e.loadingState !== K.G.PENDING)
                                try {
                                    e.loadingState = K.G.PENDING;
                                    let r = t;
                                    r || (r = yield i.experimentsDetails()),
                                        e.experiments.clear(),
                                        Object.entries(r).forEach((t) => {
                                            let [i, r] = t;
                                            e.experiments.set(i, r);
                                        }),
                                        (e.loadingState = K.G.RESOLVE);
                                } catch (t) {
                                    s.error(t), (e.loadingState = K.G.REJECT);
                                } finally {
                                    var l;
                                    Object.entries(null != (l = e.getOverwrittenExperiments()) ? l : {}).forEach((t) => {
                                        let [i, r] = t;
                                        e.overwrittenExperiments.set(i, r);
                                    });
                                }
                        }),
                        updateOverwrittenExperiments(t, i) {
                            let { clientSafeConfig: s } = (0, r._$)(e);
                            s.get(k.yc) && e.overwrittenExperiments.set(t, i);
                        },
                        deleteOverwrittenExperiments(t) {
                            let { clientSafeConfig: i } = (0, r._$)(e);
                            i.get(k.yc) && e.overwrittenExperiments.delete(t);
                        },
                    }));
            var x = i(79540),
                N = i(8421);
            let w = r.gK.model('ModelDestroyManager').actions(() => ({
                    destroyItems(e) {
                        e.forEach((e) => {
                            e && (0, r.Yo)(e);
                        }),
                            queueMicrotask(() => {
                                e.forEach((e) => {
                                    e && (0, r.zr)(e);
                                });
                            });
                    },
                })),
                _ = r.gK.model('Pager', { page: r.gK.number, perPage: r.gK.number, total: r.gK.number });
            function G(e, t) {
                let { useAppendMode: i = !1 } = null != t ? t : {};
                return r.gK
                    .compose(
                        r.gK.model('PageLoader', {
                            items: r.gK.maybeNull(r.gK.array(r.gK.maybeNull(e))),
                            requestsCount: r.gK.optional(r.gK.number, 0),
                            initialRequestLoadingState: r.gK.optional(r.gK.enumeration(Object.values(K.G)), K.G.IDLE),
                            lastRejectedPagesList: r.gK.optional(r.gK.array(r.gK.number), []),
                            pager: r.gK.maybeNull(_),
                            pageStates: r.gK.maybeNull(r.gK.array(r.gK.enumeration(Object.values(K.G)))),
                        }),
                        w,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var i;
                                return null == (i = e.pageStates) || !i[t] || e.pageStates[t] === K.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var i;
                                return !!((null == (i = e.pageStates) ? void 0 : i.length) && e.pageStates.some((e) => e === K.G.RESOLVE));
                            },
                            get isEmpty() {
                                var r;
                                return t.isSomePageResolved && !(null == (r = e.items) ? void 0 : r.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === K.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === K.G.REJECT;
                            },
                            get rejectedPagesCount() {
                                var s;
                                if (t.isInitialRequestRejected || !(null == (s = e.pageStates) ? void 0 : s.length)) return 0;
                                return e.pageStates.filter((e) => e === K.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (i, r) => {
                                var s, l, a, n;
                                [K.G.IDLE, K.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = r);
                                let o = Math.max(
                                    i + 1,
                                    Math.ceil(
                                        (null != (a = null == (s = e.pager) ? void 0 : s.total) ? a : 0) /
                                            (null != (n = null == (l = e.pager) ? void 0 : l.perPage) ? n : 1),
                                    ),
                                );
                                t.ensurePageStatesInitialized(o), e.pageStates && (e.pageStates[i] = r), r === K.G.REJECT && t.addLastRejectedPageToList(i);
                            },
                            setItems: (s, l) => {
                                var a;
                                let { page: n, pager: o, responseStatus: g } = l;
                                if (((e.requestsCount = (null != (a = e.requestsCount) ? a : 0) + 1), g === x.F.ERROR || !s || !o))
                                    return void t.setPageState(n, K.G.REJECT);
                                e.pager || (e.pager = { page: o.page, perPage: o.perPage, total: o.total }),
                                    t.setPageState(n, K.G.RESOLVE),
                                    (e.pager.page = n),
                                    i
                                        ? (e.items || (e.items = (0, r.wg)([])), e.items && e.items.push(...s))
                                        : (e.items || (e.items = (0, r.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, N.I)({ items: e.items, mappedRawItems: s, page: n, pageSize: e.pager.perPage }));
                            },
                            resetRejectedPagesState() {
                                var t, i, r;
                                for (let s = 0; s < (null != (i = null == (t = e.pageStates) ? void 0 : t.length) ? i : 0); s++)
                                    (null == (r = e.pageStates) ? void 0 : r[s]) === K.G.REJECT && (e.pageStates[s] = K.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var i, r, s;
                                for (e.lastRejectedPagesList.push(t); (null != (r = null == (i = e.lastRejectedPagesList) ? void 0 : i.length) ? r : 0) > 5; )
                                    null == (s = e.lastRejectedPagesList) || s.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let i = Array.from({ length: t }, () => K.G.IDLE);
                                    e.pageStates = (0, r.wg)(i);
                                    return;
                                }
                                let i = e.pageStates.length;
                                if (t > i) {
                                    let r = Array.from({ length: t - i }, () => K.G.IDLE);
                                    e.pageStates.push(...r);
                                }
                            },
                            reset() {
                                (e.initialRequestLoadingState = K.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, r.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]);
                            },
                        };
                        return t;
                    });
            }
            var M = i(21192);
            let q = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
            var j = i(1559),
                V = i(2183);
            let F = [j.s.LIKED_ALBUMS, j.s.LIKED_ARTISTS, j.s.LIKED_PLAYLISTS, j.s.LIKED_TRACKS, j.s.LIKED_CLIPS],
                B = r.gK.optional(r.gK.map(r.gK.enumeration(Object.values(V.O))), {}),
                U = r.gK.model('LibraryRecord', { revision: r.gK.maybeNull(r.gK.number), items: B }),
                $ = r.gK
                    .compose(r.gK.model('Library', { tracks: U, albums: U, artists: U, playlists: U, clips: U }), f)
                    .views((e) => ({
                        isTrackLiked: (t) => e.tracks.items.get(String(t)) === V.O.LIKED,
                        isTrackDisliked: (t) => e.tracks.items.get(String(t)) === V.O.DISLIKED,
                        isArtistLiked: (t) => e.artists.items.get(String(t)) === V.O.LIKED,
                        isArtistDisliked: (t) => e.artists.items.get(String(t)) === V.O.DISLIKED,
                        isAlbumLiked: (t) => e.albums.items.get(String(t)) === V.O.LIKED,
                        isPlaylistLiked: (t) => e.playlists.items.get(String(t)) === V.O.LIKED,
                        isClipLiked: (t) => e.clips.items.get(String(t)) === V.O.LIKED,
                    }))
                    .actions((e) => {
                        let t = {
                            getData: (0, r.L3)(function* () {
                                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                                    { modelActionsLogger: s, collectionResource: l } = (0, r._$)(e);
                                if (e.loadingState !== K.G.PENDING)
                                    try {
                                        e.loadingState = K.G.PENDING;
                                        let r = {};
                                        i.includes(j.s.LIKED_ALBUMS) && (r.likedAlbums = q(e.albums.revision)),
                                            i.includes(j.s.LIKED_ARTISTS) && (r.likedArtists = q(e.artists.revision)),
                                            i.includes(j.s.LIKED_TRACKS) && (r.likedTracks = q(e.tracks.revision)),
                                            i.includes(j.s.LIKED_CLIPS) && (r.likedClips = q(e.clips.revision)),
                                            i.includes(j.s.LIKED_PLAYLISTS) && (r.likedPlaylists = {});
                                        let s = yield l.sync(r);
                                        t.setAlbums(s.values.likedAlbums),
                                            t.setArtists(s.values.likedArtists),
                                            t.setPlaylists(s.values.likedPlaylists),
                                            t.setTracks(s.values.likedTracks),
                                            t.setClips(s.values.likedClips),
                                            (e.loadingState = K.G.RESOLVE);
                                    } catch (t) {
                                        s.error(t), (e.loadingState = K.G.REJECT);
                                    }
                            }),
                            setArtists: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.artists.revision !== i.info.revision &&
                                    (t.clearArtists(),
                                    (e.artists.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.artists.items.set(t.artistId.toString(), V.O.LIKED);
                                    }),
                                    i.values.disliked.map((t) => {
                                        e.artists.items.set(t.artistId.toString(), V.O.DISLIKED);
                                    }));
                            },
                            setAlbums: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.albums.revision !== i.info.revision &&
                                    (t.clearAlbums(),
                                    (e.albums.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.albums.items.set(t.albumId.toString(), V.O.LIKED);
                                    }));
                            },
                            setPlaylists: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    (t.clearPlaylists(),
                                    i.values.liked.map((t) => {
                                        e.playlists.items.set(''.concat(t.compositeData.uid, ':').concat(t.compositeData.kind), V.O.LIKED);
                                    }));
                            },
                            setTracks: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.tracks.revision !== i.info.revision &&
                                    (t.clearTracks(),
                                    (e.tracks.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.tracks.items.set(t.trackId, V.O.LIKED);
                                    }),
                                    i.values.disliked.map((t) => {
                                        e.tracks.items.set(t.trackId, V.O.DISLIKED);
                                    }));
                            },
                            setClips: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.clips.revision !== i.info.revision &&
                                    (t.clearClips(),
                                    (e.clips.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.clips.items.set(t.clipId.toString(), V.O.LIKED);
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
                            toggleTrackLike: (0, r.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: l } = (0, r._$)(e),
                                    a = String(i.entityId),
                                    n = e.tracks.items.get(a);
                                try {
                                    let r,
                                        l = { entityId: i.albumId ? ''.concat(i.entityId, ':').concat(i.albumId) : i.entityId, userId: i.userId };
                                    return (
                                        e.tracks.items.get(a) === V.O.LIKED
                                            ? (e.tracks.items.delete(a), (r = yield s.unlikeTrack(l)))
                                            : (e.tracks.items.set(a, V.O.LIKED), (r = yield s.likeTrack(l))),
                                        t.getData([j.s.LIKED_TRACKS]),
                                        r
                                    );
                                } catch (t) {
                                    return n ? e.tracks.items.set(a, n) : e.tracks.items.delete(a), l.error(t), M.f.ERROR;
                                }
                            }),
                            toggleTrackDislike: (0, r.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: l } = (0, r._$)(e),
                                    a = String(i.entityId),
                                    n = e.tracks.items.get(a);
                                try {
                                    let r,
                                        l = { entityId: i.albumId ? ''.concat(i.entityId, ':').concat(i.albumId) : i.entityId, userId: i.userId };
                                    return (
                                        e.tracks.items.get(a) === V.O.DISLIKED
                                            ? (e.tracks.items.delete(a), (r = yield s.undislikeTrack(l)))
                                            : (e.tracks.items.set(a, V.O.DISLIKED), (r = yield s.dislikeTrack(l))),
                                        t.getData([j.s.LIKED_TRACKS]),
                                        r
                                    );
                                } catch (t) {
                                    return n ? e.tracks.items.set(a, n) : e.tracks.items.delete(a), l.error(t), M.f.ERROR;
                                }
                            }),
                            toggleArtistLike: (0, r.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: l } = (0, r._$)(e),
                                    a = String(i.entityId),
                                    n = e.artists.items.get(a);
                                try {
                                    let r;
                                    return (
                                        e.artists.items.get(a) === V.O.LIKED
                                            ? (e.artists.items.delete(a), (r = yield s.unlikeArtist(i)))
                                            : (e.artists.items.set(a, V.O.LIKED), (r = yield s.likeArtist(i))),
                                        t.getData([j.s.LIKED_ARTISTS]),
                                        r
                                    );
                                } catch (t) {
                                    return n ? e.artists.items.set(a, n) : e.artists.items.delete(a), l.error(t), M.f.ERROR;
                                }
                            }),
                            toggleArtistDislike: (0, r.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: l } = (0, r._$)(e),
                                    a = String(i.entityId),
                                    n = e.artists.items.get(a);
                                try {
                                    let r;
                                    return (
                                        e.artists.items.get(a) === V.O.DISLIKED
                                            ? (e.artists.items.delete(a), (r = yield s.undislikeArtist(i)))
                                            : (e.artists.items.set(a, V.O.DISLIKED), (r = yield s.dislikeArtist(i))),
                                        t.getData([j.s.LIKED_ARTISTS]),
                                        r
                                    );
                                } catch (t) {
                                    return n ? e.artists.items.set(a, n) : e.artists.items.delete(a), l.error(t), M.f.ERROR;
                                }
                            }),
                            toggleAlbumLike: (0, r.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: l } = (0, r._$)(e),
                                    a = String(i.entityId),
                                    n = e.albums.items.get(a);
                                try {
                                    let r;
                                    return (
                                        e.albums.items.get(a) === V.O.LIKED
                                            ? (e.albums.items.delete(a), (r = yield s.unlikeAlbum(i)))
                                            : (e.albums.items.set(a, V.O.LIKED), (r = yield s.likeAlbum(i))),
                                        t.getData([j.s.LIKED_ALBUMS]),
                                        r
                                    );
                                } catch (t) {
                                    return n ? e.albums.items.set(a, n) : e.albums.items.delete(a), l.error(t), M.f.ERROR;
                                }
                            }),
                            togglePlaylistLike: (0, r.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: l } = (0, r._$)(e),
                                    a = String(i.entityId),
                                    n = e.playlists.items.get(a);
                                try {
                                    let r;
                                    return (
                                        e.playlists.items.get(a) === V.O.LIKED
                                            ? (e.playlists.items.delete(a), (r = yield s.unlikePlaylist(i)))
                                            : (e.playlists.items.set(a, V.O.LIKED), (r = yield s.likePlaylist(i))),
                                        t.getData([j.s.LIKED_PLAYLISTS]),
                                        r
                                    );
                                } catch (t) {
                                    return n ? e.playlists.items.set(a, n) : e.playlists.items.delete(a), l.error(t), M.f.ERROR;
                                }
                            }),
                            toggleClipLike: (0, r.L3)(function* (i) {
                                let { usersResource: s, modelActionsLogger: l } = (0, r._$)(e),
                                    a = String(i.entityId),
                                    n = e.clips.items.get(a);
                                try {
                                    return (
                                        e.clips.items.get(a) === V.O.LIKED
                                            ? (e.clips.items.delete(a), yield s.unlikeClip(i))
                                            : (e.clips.items.set(a, V.O.LIKED), yield s.likeClip(i)),
                                        t.getData([j.s.LIKED_CLIPS]),
                                        M.f.OK
                                    );
                                } catch (t) {
                                    return n ? e.clips.items.set(a, n) : e.clips.items.delete(a), l.error(t), M.f.ERROR;
                                }
                            }),
                        };
                        return t;
                    }),
                H = r.gK
                    .model('LikesCount', { likesCount: r.gK.maybe(r.gK.number), pendingLikesCount: r.gK.optional(r.gK.number, 0) })
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
                z = r.gK
                    .model('Location', {
                        pathname: r.gK.optional(r.gK.string, ''),
                        searchParams: r.gK.optional(r.gK.string, ''),
                        host: r.gK.optional(r.gK.string, ''),
                        tld: r.gK.optional(r.gK.string, ''),
                        origin: r.gK.optional(r.gK.string, ''),
                        href: r.gK.optional(r.gK.string, ''),
                        isNotFound: r.gK.optional(r.gK.boolean, !1),
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
            var Y = i(33782),
                J = i(81114),
                W = i(314);
            let Z = { INTRO_PLAN: W.N.IntroPlan, INTRO_UNTIL_PLAN: W.N.IntroUntilPlan, TRIAL_PLAN: W.N.TrialPlan, TRIAL_UNTIL_PLAN: W.N.TrialUntilPlan },
                X = (e) => {
                    let { repetitionCount: t, typename: i, ...r } = e;
                    return { ...(Number.isFinite(t) ? { repeatCount: t } : {}), ...r, typename: Z[i] || i };
                };
            var Q = i(48535);
            let ee = (e) => (0, r.wg)(e),
                et = (e) => {
                    let { plans: t, ...i } = e;
                    return (0, r.wg)({ ...i, plans: t.map(ee) });
                },
                ei = (e) => {
                    let { option: t, ...i } = e;
                    return (0, r.wg)({ ...et(i), option: t });
                },
                er = (e) =>
                    (0, r.wg)({
                        acqOffer: ((e) => {
                            let {
                                analyticData: t,
                                catalogCompositeOffer: i,
                                offerTexts: s,
                                target: l,
                                requestedFeatures: a,
                                position: n,
                                oneClickAvailable: o,
                                place: g,
                                purchaseToken: u,
                            } = e;
                            return (0, r.wg)({
                                analyticData: t,
                                catalogCompositeOffer: ((e) => {
                                    let { positionId: t, silentInvoiceAvailable: i, structureType: s, tariffOffer: l, optionOffers: a } = e;
                                    return (0, r.wg)({
                                        positionId: t,
                                        silentInvoiceAvailable: i,
                                        structureType: s,
                                        tariffOffer: ((e) => {
                                            if (!e) return null;
                                            let { tariff: t, ...i } = e;
                                            return (0, r.wg)({ ...et(i), tariff: t });
                                        })(l),
                                        optionsOffers: a.map(ei),
                                    });
                                })(
                                    ((e) => {
                                        var t;
                                        let { tariffOffer: i, optionOffers: r } = e;
                                        return {
                                            ...e,
                                            silentInvoiceAvailable: !!e.silentInvoiceAvailable,
                                            structureType: e.structureType,
                                            tariffOffer: i ? { ...i, offerVendorType: i.offerVendorType, plans: null == (t = i.plans) ? void 0 : t.map(X) } : void 0,
                                            optionOffers: null == r ? void 0 : r.map((e) => ({ ...e, plans: (e.plans || []).map(X) })),
                                        };
                                    })(i),
                                ),
                                offerTexts: ((e) => {
                                    let { customTexts: t = {}, ...i } = e;
                                    return {
                                        ...i,
                                        customTexts: Object.entries(t).reduce((e, t) => {
                                            let [i, r] = t;
                                            return (e[(0, Q.A)(i)] = r), e;
                                        }, {}),
                                    };
                                })(s),
                                target: l,
                                requestedFeatures: a,
                                position: n,
                                oneClickAvailable: o,
                                place: g,
                                purchaseToken: u,
                            });
                        })(e),
                    }),
                es = r.gK.model({ batchId: r.gK.string, positionId: r.gK.string, placeId: r.gK.maybe(r.gK.string) }),
                el = r.gK.model({
                    buttonText: r.gK.maybe(r.gK.string),
                    buttonAdditionalText: r.gK.maybe(r.gK.string),
                    buttonTextA11y: r.gK.maybe(r.gK.string),
                    oneClickDisclaimerText: r.gK.maybe(r.gK.string),
                    oneClickDisclaimerTextA11y: r.gK.maybe(r.gK.string),
                }),
                ea = r.gK.model({
                    subscriptionName: r.gK.string,
                    buttonText: r.gK.string,
                    buttonTextWithDetails: r.gK.string,
                    combinedIntroductoryText: r.gK.string,
                    combinedPriceText: r.gK.string,
                    combinedFullOfferText: r.gK.string,
                    priceInMonth: r.gK.string,
                    customTexts: el,
                });
            var en = (function (e) {
                return (e.COMPOSITE = 'COMPOSITE'), (e.OPTION = 'OPTION'), (e.TARIFF = 'TARIFF'), e;
            })({});
            let eo = r.gK.model({ amount: r.gK.number, currency: r.gK.string }),
                eg = r.gK.model({ typename: r.gK.literal(W.N.IntroPlan), period: r.gK.string, price: eo, repeatCount: r.gK.maybe(r.gK.number) }),
                eu = r.gK.model({ typename: r.gK.literal(W.N.IntroUntilPlan), price: eo, until: r.gK.string }),
                ed = r.gK.model({ typename: r.gK.literal(W.N.TrialPlan), period: r.gK.string }),
                em = r.gK.model({ typename: r.gK.literal(W.N.TrialUntilPlan), until: r.gK.string }),
                ec = r.gK.union(eg, eu, ed, em),
                eK = r.gK.model({ name: r.gK.string }),
                ef = r.gK.model({
                    additionText: r.gK.string,
                    description: r.gK.string,
                    name: r.gK.string,
                    text: r.gK.string,
                    title: r.gK.string,
                    plans: r.gK.array(ec),
                    commonPeriod: r.gK.string,
                    commonPrice: eo,
                }),
                ep = ef.props({ option: eK }),
                ev = ef.props({ tariff: eK }),
                ey = r.gK.model({
                    positionId: r.gK.string,
                    silentInvoiceAvailable: r.gK.boolean,
                    structureType: r.gK.enumeration(Object.values(en)),
                    tariffOffer: r.gK.maybeNull(ev),
                    optionsOffers: r.gK.array(ep),
                }),
                eb = r.gK.model({
                    analyticData: es,
                    catalogCompositeOffer: ey,
                    offerTexts: ea,
                    target: r.gK.string,
                    requestedFeatures: r.gK.maybe(r.gK.array(r.gK.string)),
                    position: r.gK.number,
                    oneClickAvailable: r.gK.maybe(r.gK.boolean),
                    place: r.gK.maybe(r.gK.string),
                    purchaseToken: r.gK.maybe(r.gK.string),
                }),
                eL = r.gK.model({ offer: r.gK.maybeNull(ey), acqOffer: r.gK.maybeNull(eb) }).views((e) => {
                    let t = {
                        get target() {
                            var i;
                            return (null == (i = e.acqOffer) ? void 0 : i.target) || 'music';
                        },
                        get offerPosition() {
                            var r, s;
                            return null != (s = null == (r = e.acqOffer) ? void 0 : r.position) ? s : 0;
                        },
                        get place() {
                            var l;
                            return null == (l = e.acqOffer) ? void 0 : l.place;
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
                            var y;
                            return null == (y = t.customTexts) ? void 0 : y.buttonTextA11y;
                        },
                        get additionText() {
                            var b, L;
                            return (null == (b = t.customTexts) ? void 0 : b.buttonAdditionalText) || (null == (L = t.tariffOffer) ? void 0 : L.additionText);
                        },
                        get offersBatchId() {
                            var I, E;
                            return (null == (I = e.acqOffer) ? void 0 : I.analyticData.batchId) || (null == (E = e.offer) ? void 0 : E.positionId) || '';
                        },
                        get subscriptionName() {
                            var D, S;
                            return null == (S = e.acqOffer) || null == (D = S.offerTexts) ? void 0 : D.subscriptionName;
                        },
                        get offerText() {
                            var T, O;
                            return null == (O = e.acqOffer) || null == (T = O.offerTexts) ? void 0 : T.buttonTextWithDetails;
                        },
                        get buttonText() {
                            var h, k;
                            return null == (k = e.acqOffer) || null == (h = k.offerTexts) ? void 0 : h.buttonText;
                        },
                    };
                    return t;
                }),
                eI = r.gK.model({
                    sessionId: r.gK.maybeNull(r.gK.string),
                    page: r.gK.maybeNull(r.gK.string),
                    offers: r.gK.array(eL),
                    mlRequestId: r.gK.maybeNull(r.gK.string),
                    offerConfigId: r.gK.maybeNull(r.gK.number),
                    language: r.gK.maybeNull(r.gK.string),
                }),
                eE = r.gK.compose(eI, f, r.gK.model({ isLoadOffersResultSent: r.gK.boolean })),
                eD = r.gK
                    .compose(r.gK.model({ isLoadOffersResultSent: r.gK.maybe(r.gK.boolean), acqData: r.gK.map(eE) }), f)
                    .volatile(() => ({ sessionId: (0, Y.A)(), isFrontSessionStartSent: !1 }))
                    .views((e) => {
                        let t = {
                            getIsShimmerVisible(t) {
                                let i = t && e.acqData.get(t);
                                return i ? i.isNeededToLoad || i.isLoading || i.isRejected : e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            getIsShimmerActive(t) {
                                let i = t && e.acqData.get(t);
                                return i ? i.isLoading : e.isLoading;
                            },
                            getIsNeededToLoad(t) {
                                let i = t && e.acqData.get(t);
                                return i ? i.isNeededToLoad : e.isNeededToLoad;
                            },
                            getIsLoadOffersResultSent(t) {
                                let i = t && e.acqData.get(t);
                                return i ? i.isLoadOffersResultSent : e.isLoadOffersResultSent;
                            },
                            getLoadingState(t) {
                                let i = t && e.acqData.get(t);
                                return i ? i.loadingState : e.loadingState;
                            },
                            get serviceSessionId() {
                                return e.sessionId;
                            },
                            getOffersPositionIds(t) {
                                var i, r, s;
                                return (
                                    (t && (null == (s = e.acqData) || null == (r = s.get(t)) || null == (i = r.offers) ? void 0 : i.map((e) => e.offersPositionId))) || []
                                );
                            },
                            getOffer(t, i) {
                                var r;
                                let s = null == (r = e.acqData) ? void 0 : r.get(t);
                                if (s) return i ? s.offers.find((e) => e.place === i) : s.offers[0];
                            },
                            getTarget(e, i) {
                                var r;
                                return (null == (r = t.getOffer(e, i)) ? void 0 : r.target) || 'music';
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
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J.l.NO_VALUE;
                                t.setAcqData(e, { isLoadOffersResultSent: !0 });
                            },
                            setLoadingState(i) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J.l.NO_VALUE;
                                t.setAcqData(r, { ...e.acqData.get(r), loadingState: i });
                            },
                            setAcqData(t, i) {
                                var r;
                                e.acqData.set(t, { loadingState: K.G.IDLE, isLoadOffersResultSent: !1, ...(null != (r = e.acqData.get(t)) ? r : {}), ...i });
                            },
                            getData: (0, r.L3)(function* (i) {
                                let { page: s, places: l, communicationId: a, campaignId: n, widgetServiceName: o } = i,
                                    { acqOffers: g, modelActionsLogger: u } = (0, r._$)(e),
                                    { experiments: d } = (0, r.Zn)(e),
                                    m = d.getEnabledFlags(),
                                    c = s || J.l.NO_VALUE;
                                if (e.getLoadingState(s) !== K.G.PENDING) {
                                    e.isLoadOffersResultSent = !1;
                                    try {
                                        t.setLoadingState(K.G.PENDING, c);
                                        let i = {};
                                        a && (i.communication_id = a), n && (i.campaign_id = n);
                                        let s = yield g.getOffers(c, l, { expFlags: m, eventSessionId: e.sessionId, customProperties: i, widgetServiceName: o });
                                        t.setAcqData(c, {
                                            ...((e) => {
                                                let { sessionId: t, result: i, offerConfigId: s, mlRequestId: l, page: a, language: n } = e;
                                                return (0, r.wg)({ sessionId: t, page: a, offers: i.map(er), mlRequestId: l, offerConfigId: s, language: n });
                                            })(s),
                                            loadingState: K.G.RESOLVE,
                                            isLoadOffersResultSent: !1,
                                        }),
                                            t.setLoadingState(K.G.RESOLVE, c);
                                    } catch (e) {
                                        t.setLoadingState(K.G.REJECT, c), u.error(e);
                                    }
                                }
                            }),
                        };
                        return t;
                    })
                    .named('MusicOffers'),
                eS = r.gK.model('Offers', { music: eD });
            var eT = i(13607),
                eO = i(53820),
                eh = i(84258),
                ek = i(71257),
                eR = i(32601),
                eA = i(17599);
            let eC = r.gK
                    .model('Settings', {
                        layout: r.gK.maybeNull(r.gK.enumeration(Object.keys(eT.u))),
                        isLandscape: r.gK.boolean,
                        isMobileLandscapeHeight: r.gK.boolean,
                        platform: r.gK.maybe(r.gK.enumeration(Object.values(eR.O))),
                        browserInfo: n,
                        liteVersionMode: r.gK.maybe(r.gK.enumeration(Object.values(ek.w))),
                        selectedThumbId: r.gK.enumeration(Object.values(eO.T)),
                    })
                    .views((e) => {
                        let t = {
                            get isMobile() {
                                return e.layout === eT.u.Mobile;
                            },
                            get isWindowsApplication() {
                                return e.platform === eR.O.WINDOWS;
                            },
                            get isMacOSApplication() {
                                return e.platform === eR.O.MACOS;
                            },
                            get isLinuxApplication() {
                                return e.platform === eR.O.LINUX;
                            },
                            get isLiteVersionModeEnabled() {
                                return e.liteVersionMode === ek.w.ENABLED;
                            },
                            get isLiteVersionModeDisabled() {
                                return e.liteVersionMode === ek.w.DISABLED;
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
                                e.browserInfo = (0, r.wg)({ ...t, version: i });
                            },
                            initializeLiteVersionMode() {
                                if (!(0, r._n)(e)) return;
                                let { experiments: i } = (0, r.Zn)(e),
                                    { containerStorage: s } = (0, r._$)(e),
                                    l = s.get(eA.c.LiteVersionMode);
                                if (l) {
                                    if ('2' !== l.version || !i.checkExperiment(eh.z.WebNextLiteVersion, 'on')) return void s.remove(eA.c.LiteVersionMode);
                                    t.setLiteVersionMode(l.mode, !1);
                                }
                            },
                            setLiteVersionMode(t, i) {
                                let { containerStorage: s } = (0, r._$)(e);
                                (e.liteVersionMode = t), i && s.set(eA.c.LiteVersionMode, { version: '2', mode: t });
                            },
                            setCustomPlayerThumb(t) {
                                let { localStorage: i } = (0, r._$)(e),
                                    s = t;
                                Object.values(eO.T).includes(t) || (s = eO.T.DEFAULT), (e.selectedThumbId = s);
                                let l = i.get(eA.c.CustomPlayerThumbConfig);
                                i.set(eA.c.CustomPlayerThumbConfig, { ...l, selectedThumbId: s, version: '1' });
                            },
                            initializeCustomPlayerThumb() {
                                if (!(0, r._n)(e)) return;
                                let { experiments: i, user: s } = (0, r.Zn)(e),
                                    { localStorage: l } = (0, r._$)(e),
                                    a = l.get(eA.c.CustomPlayerThumbConfig);
                                if (a) {
                                    if ('1' !== a.version || !i.checkExperiment(eh.z.WebNextCustomThumb, 'on') || !s.hasPlus) {
                                        (e.selectedThumbId = eO.T.DEFAULT), l.remove(eA.c.CustomPlayerThumbConfig);
                                        return;
                                    }
                                    if (a.selectedThumbId === eO.T.BRANDED && s.hasPlus) return void t.setCustomPlayerThumb(eO.T.DEFAULT);
                                    t.setCustomPlayerThumb(a.selectedThumbId);
                                }
                            },
                        };
                        return t;
                    }),
                eP = l
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                let {
                                        experiments: t,
                                        advertBanners: {
                                            banners: { brandedPlaylistBanner: i, brandedEntityAxeBanner: s },
                                        },
                                    } = (0, r.Zn)(e),
                                    l = t.checkExperiment(eh.z.WebNextDisableAds, 'on');
                                if (i.isVisible || s.isVisible || l) return !1;
                                return !0;
                            },
                        },
                    }))
                    .named('SideAdvertBanner'),
                ex = l
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                var t;
                                let {
                                        experiments: i,
                                        settings: s,
                                        advertBanners: {
                                            banners: { brandedPlaylistBanner: l, brandedEntityAxeBanner: a },
                                        },
                                    } = (0, r.Zn)(e),
                                    n =
                                        s.isMobile &&
                                        (i.checkExperiment(eh.z.WebNextTouchAds, 'small_banner') || i.checkExperiment(eh.z.WebNextTouchAds, 'large_banner')),
                                    o = l.isVisible || a.isVisible;
                                return !(null == (t = s.browserInfo) ? void 0 : t.isTouch) && !n && !o;
                            },
                        },
                    }))
                    .named('TopAdvertBanner'),
                eN = r.gK.model('TrackIdModel', { id: r.gK.union(r.gK.string, r.gK.number), albumId: r.gK.maybe(r.gK.number), timestamp: r.gK.maybe(r.gK.string) });
        },
        64525: (e, t, i) => {
            var r;
            i.d(t, { K: () => r }),
                (function (e) {
                    (e.EXPLICIT = 'explicit'), (e.CLEAN = 'clean');
                })(r || (r = {}));
        },
    },
]);
