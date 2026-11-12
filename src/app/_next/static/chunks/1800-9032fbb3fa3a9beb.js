(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1800],
    {
        4653: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => o });
            var r = n(95982),
                a = Object.defineProperty,
                i = (e, t, n) => (
                    ((e, t, n) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)))(e, 'symbol' != typeof t ? t + '' : t, n),
                    n
                );
            class o {
                constructor({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: t }) {
                    (i(this, 'brandLangs'),
                        i(this, 'brandDefaultLang'),
                        i(this, 'regionLangs'),
                        i(this, 'enableWideLanguageSelectWithBrandLangs'),
                        (this.brandLangs = e.langs),
                        (this.brandDefaultLang = e.defaultLang),
                        (this.regionLangs = e.regionLangs),
                        (this.enableWideLanguageSelectWithBrandLangs = t));
                }
                static parseAcceptLanguage(e) {
                    return r.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: n, acceptLangs: r }) {
                    var a, i, o;
                    let l = e ? (null == (a = this.regionLangs) ? void 0 : a[e]) : void 0,
                        s = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (i = null == l ? void 0 : l.langs) ? i : this.brandLangs,
                        c = null != (o = null == l ? void 0 : l.defaultLang) ? o : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: s, defaultLang: c, urlLang: t, cookieLang: n, acceptLangs: r });
                }
                intersect(e, t) {
                    let n = new Set(t);
                    return e.filter((e) => n.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: n, cookieLang: r, acceptLangs: a }) {
                    if ('string' == typeof n && e.includes(n)) return n;
                    let i = null != a ? a : [],
                        o = r ? [r, ...i] : i,
                        l = this.intersect(o, e)[0];
                    return void 0 !== l ? l : t;
                }
            }
        },
        22681: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => u });
            var r = n(53548),
                a = n(99875),
                i = n(36236),
                o = n(66109),
                l = n(53534),
                s = n(79045),
                c = n(7695);
            let u = () => {
                let e = (0, r.useContext)(l.k),
                    t = e?.isReady ? e.scope : null,
                    n = (0, r.useContext)(s.F) ?? c.Ve,
                    u = (0, r.useContext)(i.S),
                    p = (0, r.useContext)(a.p),
                    d = (0, r.useContext)(o.l),
                    g = (0, r.useMemo)(() => (t && p ? { block: p.scope, filter: u, object: d?.scope ?? null, screen: t, tab: n } : null), [p, u, d, t, n]);
                return (0, r.useMemo)(() => (p && g ? { block: p, object: d, snapshot: g } : null), [p, d, g]);
            };
        },
        33979: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => s });
            var r = n(53548),
                a = n(63582),
                i = n(245),
                o = n(22681),
                l = n(56374);
            let s = (0, a.n)({ event: 'LandingBlock.Started', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, i.N)(),
                    t = (0, o.w)(),
                    n = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)(() => {
                    n?.started();
                });
            });
        },
        38982: (e, t, n) => {
            'use strict';
            ((t.es = function (e, t) {
                let {
                        pageStyle: n = a.PageStyles.Fullscreen,
                        pagePlacement: i = a.PagePlacements.Fullscreen,
                        skeletonId: o = '',
                        mainObjectType: l = a.DomainObjectType.NonApplicable,
                        mainObjectId: s = '',
                        tabId: c = '',
                        tabPos: u = 0,
                        isTabSelectedByDefault: p = !1,
                        entityPosX: d = 1,
                        entityPosY: g = 1,
                        objectsCount: f = 0,
                        displayReasonId: h = '',
                        filterKey: b = '',
                        filterValue: m = '',
                        filterPos: v = 0,
                    } = t,
                    y = (0, r.makeMetaParams)(2),
                    k = {
                        ...t,
                        pageStyle: n,
                        pagePlacement: i,
                        skeletonId: o,
                        mainObjectType: l,
                        mainObjectId: s,
                        tabId: c,
                        tabPos: u,
                        isTabSelectedByDefault: p,
                        entityPosX: d,
                        entityPosY: g,
                        objectsCount: f,
                        displayReasonId: h,
                        filterKey: b,
                        filterValue: m,
                        filterPos: v,
                        _meta: y,
                    };
                e.trackEvent('LandingBlock.Loaded', k);
            }),
                (t.ZP = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: p = !1,
                            entityPosX: d = 1,
                            entityPosY: g = 1,
                            objectsCount: f = 0,
                            displayReasonId: h = '',
                            filterKey: b = '',
                            filterValue: m = '',
                            filterPos: v = 0,
                            loadedViewUuid: y = '',
                        } = t,
                        k = (0, r.makeMetaParams)(3),
                        w = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: p,
                            entityPosX: d,
                            entityPosY: g,
                            objectsCount: f,
                            displayReasonId: h,
                            filterKey: b,
                            filterValue: m,
                            filterPos: v,
                            loadedViewUuid: y,
                            _meta: k,
                        };
                    e.trackEvent('LandingBlock.Loaded', w);
                }),
                (t.Pf = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: i = 0,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: p = !1,
                            entityPosX: d = 1,
                            entityPosY: g = 1,
                            objectsCount: f = 0,
                            displayReasonId: h = '',
                            filterKey: b = '',
                            filterValue: m = '',
                            filterPos: v = 0,
                        } = t,
                        y = (0, r.makeMetaParams)(1),
                        k = {
                            ...t,
                            objectPosX: n,
                            objectPosY: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: p,
                            entityPosX: d,
                            entityPosY: g,
                            objectsCount: f,
                            displayReasonId: h,
                            filterKey: b,
                            filterValue: m,
                            filterPos: v,
                            _meta: y,
                        };
                    e.trackEvent('LandingBlock.Showed', k);
                }),
                (t.sy = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: p = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: g = !1,
                            entityPosX: f = 1,
                            entityPosY: h = 1,
                            objectsCount: b = 0,
                            displayReasonId: m = '',
                            filterKey: v = '',
                            filterValue: y = '',
                            filterPos: k = 0,
                            loadedViewUuid: w = '',
                        } = t,
                        L = (0, r.makeMetaParams)(3),
                        P = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: p,
                            tabPos: d,
                            isTabSelectedByDefault: g,
                            entityPosX: f,
                            entityPosY: h,
                            objectsCount: b,
                            displayReasonId: m,
                            filterKey: v,
                            filterValue: y,
                            filterPos: k,
                            loadedViewUuid: w,
                            _meta: L,
                        };
                    e.trackEvent('LandingBlock.Showed', P);
                }),
                (t.SB = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: p = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: g = !1,
                            entityPosX: f = 1,
                            entityPosY: h = 1,
                            objectsCount: b = 0,
                            displayReasonId: m = '',
                            filterKey: v = '',
                            filterValue: y = '',
                            filterPos: k = 0,
                            loadedViewUuid: w = '',
                        } = t,
                        L = (0, r.makeMetaParams)(3),
                        P = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: p,
                            tabPos: d,
                            isTabSelectedByDefault: g,
                            entityPosX: f,
                            entityPosY: h,
                            objectsCount: b,
                            displayReasonId: m,
                            filterKey: v,
                            filterValue: y,
                            filterPos: k,
                            loadedViewUuid: w,
                            _meta: L,
                        };
                    e.trackEvent('LandingBlock.Hidden', P);
                }),
                (t.QS = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: i = 0,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: p = !1,
                            entityPosX: d = 1,
                            entityPosY: g = 1,
                            objectsCount: f = 0,
                            displayReasonId: h = '',
                            filterKey: b = '',
                            filterValue: m = '',
                            filterPos: v = 0,
                            deepLink: y = '',
                        } = t,
                        k = (0, r.makeMetaParams)(1),
                        w = {
                            ...t,
                            objectPosX: n,
                            objectPosY: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: p,
                            entityPosX: d,
                            entityPosY: g,
                            objectsCount: f,
                            displayReasonId: h,
                            filterKey: b,
                            filterValue: m,
                            filterPos: v,
                            deepLink: y,
                            _meta: k,
                        };
                    e.trackEvent('LandingBlock.Navigated', w);
                }),
                (t.iF = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: p = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: g = !1,
                            entityPosX: f = 1,
                            entityPosY: h = 1,
                            objectsCount: b = 0,
                            displayReasonId: m = '',
                            filterKey: v = '',
                            filterValue: y = '',
                            filterPos: k = 0,
                            deepLink: w = '',
                        } = t,
                        L = (0, r.makeMetaParams)(2),
                        P = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: p,
                            tabPos: d,
                            isTabSelectedByDefault: g,
                            entityPosX: f,
                            entityPosY: h,
                            objectsCount: b,
                            displayReasonId: m,
                            filterKey: v,
                            filterValue: y,
                            filterPos: k,
                            deepLink: w,
                            _meta: L,
                        };
                    e.trackEvent('LandingBlock.Navigated', P);
                }),
                (t.b3 = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: p = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: g = !1,
                            entityPosX: f = 1,
                            entityPosY: h = 1,
                            objectsCount: b = 0,
                            displayReasonId: m = '',
                            filterKey: v = '',
                            filterValue: y = '',
                            filterPos: k = 0,
                            loadedViewUuid: w = '',
                            deepLink: L = '',
                        } = t,
                        P = (0, r.makeMetaParams)(3),
                        j = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: p,
                            tabPos: d,
                            isTabSelectedByDefault: g,
                            entityPosX: f,
                            entityPosY: h,
                            objectsCount: b,
                            displayReasonId: m,
                            filterKey: v,
                            filterValue: y,
                            filterPos: k,
                            loadedViewUuid: w,
                            deepLink: L,
                            _meta: P,
                        };
                    e.trackEvent('LandingBlock.Navigated', j);
                }),
                (t.er = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: i = 0,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: p = !1,
                            entityPosX: d = 1,
                            entityPosY: g = 1,
                            objectsCount: f = 0,
                            displayReasonId: h = '',
                            filterKey: b = '',
                            filterValue: m = '',
                            filterPos: v = 0,
                        } = t,
                        y = (0, r.makeMetaParams)(1),
                        k = {
                            ...t,
                            objectPosX: n,
                            objectPosY: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: p,
                            entityPosX: d,
                            entityPosY: g,
                            objectsCount: f,
                            displayReasonId: h,
                            filterKey: b,
                            filterValue: m,
                            filterPos: v,
                            _meta: y,
                        };
                    e.trackEvent('LandingBlock.Started', k);
                }),
                (t.h_ = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: i = 0,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: p = !1,
                            entityPosX: d = 1,
                            entityPosY: g = 1,
                            objectsCount: f = 0,
                            displayReasonId: h = '',
                            filterKey: b = '',
                            filterValue: m = '',
                            filterPos: v = 0,
                        } = t,
                        y = (0, r.makeMetaParams)(1),
                        k = {
                            ...t,
                            objectPosX: n,
                            objectPosY: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: p,
                            entityPosX: d,
                            entityPosY: g,
                            objectsCount: f,
                            displayReasonId: h,
                            filterKey: b,
                            filterValue: m,
                            filterPos: v,
                            _meta: y,
                        };
                    e.trackEvent('LandingBlock.ActionPerformed', k);
                }),
                (t.l6 = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: p = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: g = !1,
                            entityPosX: f = 1,
                            entityPosY: h = 1,
                            objectsCount: b = 0,
                            displayReasonId: m = '',
                            filterKey: v = '',
                            filterValue: y = '',
                            filterPos: k = 0,
                        } = t,
                        w = (0, r.makeMetaParams)(2),
                        L = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: p,
                            tabPos: d,
                            isTabSelectedByDefault: g,
                            entityPosX: f,
                            entityPosY: h,
                            objectsCount: b,
                            displayReasonId: m,
                            filterKey: v,
                            filterValue: y,
                            filterPos: k,
                            _meta: w,
                        };
                    e.trackEvent('LandingBlock.ActionPerformed', L);
                }),
                (t.eN = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: p = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: g = !1,
                            entityPosX: f = 1,
                            entityPosY: h = 1,
                            objectsCount: b = 0,
                            displayReasonId: m = '',
                            filterKey: v = '',
                            filterValue: y = '',
                            filterPos: k = 0,
                            loadedViewUuid: w = '',
                        } = t,
                        L = (0, r.makeMetaParams)(3),
                        P = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: s,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: p,
                            tabPos: d,
                            isTabSelectedByDefault: g,
                            entityPosX: f,
                            entityPosY: h,
                            objectsCount: b,
                            displayReasonId: m,
                            filterKey: v,
                            filterValue: y,
                            filterPos: k,
                            loadedViewUuid: w,
                            _meta: L,
                        };
                    e.trackEvent('LandingBlock.ActionPerformed', P);
                }));
            let r = n(59203),
                a = n(87999);
        },
        42824: (e, t, n) => {
            'use strict';
            (n.d(t, { s: () => w }), n(4653));
            function r(e, t, n) {
                return ((t = o(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
            }
            function a(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != n) {
                            var r,
                                a,
                                i,
                                o,
                                l = [],
                                s = !0,
                                c = !1;
                            try {
                                if (((i = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    s = !1;
                                } else for (; !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
                            } catch (e) {
                                ((c = !0), (a = e));
                            } finally {
                                try {
                                    if (!s && null != n.return && ((o = n.return()), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return l;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function o(e) {
                var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || 'default');
                        if ('object' != typeof r) return r;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === t ? String : Number)(e);
                })(e, 'string');
                return 'symbol' == typeof t ? t : String(t);
            }
            function l(e, t) {
                var n,
                    r,
                    a = c(e, t, 'get');
                return ((n = e), (r = a).get ? r.get.call(n) : r.value);
            }
            function s(e, t, n) {
                var r = c(e, t, 'set');
                return (
                    (function (e, t, n) {
                        if (t.set) t.set.call(e, n);
                        else {
                            if (!t.writable) throw TypeError('attempted to set read only private field');
                            t.value = n;
                        }
                    })(e, r, n),
                    n
                );
            }
            function c(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
                return t.get(e);
            }
            function u(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return n;
            }
            function p(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function d(e, t, n) {
                (p(e, t), t.set(e, n));
            }
            function g(e, t) {
                (p(e, t), t.add(e));
            }
            var f = [
                ' daum[ /]',
                ' deusu/',
                ' yadirectfetcher',
                '(?:^| )site',
                '(?:^|[^g])news',
                '@[a-z]',
                '\\(at\\)[a-z]',
                '\\(github\\.com/',
                '\\[at\\][a-z]',
                '^12345',
                '^<',
                '^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$',
                '^[^ ]{50,}$',
                '^active',
                '^ad muncher',
                '^amaya',
                '^anglesharp/',
                '^anonymous',
                '^avsdevicesdk/',
                '^axios/',
                '^bidtellect/',
                '^biglotron',
                '^btwebclient/',
                '^castro',
                '^clamav[ /]',
                '^client/',
                '^cobweb/',
                '^coccoc',
                '^custom',
                '^ddg[_-]android',
                '^discourse',
                '^dispatch/\\d',
                '^downcast/',
                '^duckduckgo',
                '^facebook',
                '^fdm[ /]\\d',
                '^getright/',
                '^gozilla/',
                '^hatena',
                '^hobbit',
                '^hotzonu',
                '^hwcdn/',
                '^jeode/',
                '^jetty/',
                '^jigsaw',
                '^linkdex',
                '^lwp[-: ]',
                '^metauri',
                '^microsoft bits',
                '^movabletype',
                '^mozilla/\\d\\.\\d \\(compatible;?\\)$',
                '^mozilla/\\d\\.\\d \\w*$',
                '^navermailapp',
                '^netsurf',
                '^offline explorer',
                '^php',
                '^postman',
                '^postrank',
                '^python',
                '^read',
                '^reed',
                '^restsharp/',
                '^snapchat',
                '^space bison',
                '^svn',
                '^swcd ',
                '^taringa',
                '^test certificate info',
                '^thumbor/',
                '^tumblr/',
                '^user-agent:mozilla',
                '^valid',
                '^venus/fedoraplanet',
                '^w3c',
                '^webbandit/',
                '^webcopier',
                '^wget',
                '^whatsapp',
                '^xenu link sleuth',
                '^yahoo',
                '^yandex',
                '^zdm/\\d',
                '^zoom marketplace/',
                '^{{.*}}$',
                'adbeat\\.com',
                'appinsights',
                'archive',
                'ask jeeves/teoma',
                'bit\\.ly/',
                'bluecoat drtr',
                'bot',
                'browsex',
                'burpcollaborator',
                'capture',
                'catch',
                'check',
                'chrome-lighthouse',
                'chromeframe',
                'cloud',
                'crawl',
                'cryptoapi',
                'dareboost',
                'datanyze',
                'dataprovider',
                'dejaclick',
                'dmbrowser',
                'download',
                'evc-batch/',
                'feed',
                'firephp',
                'freesafeip',
                'gomezagent',
                'google',
                'headlesschrome/',
                'http',
                'httrack',
                'hubspot marketing grader',
                'hydra',
                'ibisbrowser',
                'images',
                'inspect',
                'iplabel',
                'ips-agent',
                'java',
                'library',
                'mail\\.ru/',
                'manager',
                'monitor',
                'morningscore/',
                'neustar wpm',
                'nutch',
                'offbyone',
                'optimize',
                'pageburst',
                'pagespeed',
                'perl',
                'phantom',
                'pingdom',
                'powermarks',
                'preview',
                'proxy',
                'ptst[ /]\\d',
                'reader',
                'rexx;',
                'rigor',
                'rss',
                'scan',
                'scrape',
                'search',
                'serp ?reputation ?management',
                'server',
                'sogou',
                'sparkler/',
                'speedcurve',
                'spider',
                'splash',
                'statuscake',
                'stumbleupon\\.com',
                'supercleaner',
                'synapse',
                'synthetic',
                'torrent',
                'tracemyfile',
                'transcoder',
                'trendsmapresolver',
                'twingly recon',
                'url',
                'virtuoso',
                'wappalyzer',
                'webglance',
                'webkit2png',
                'websitemetadataretriever',
                'whatcms/',
                'wordpress',
                'zgrab',
            ];
            !(function (e) {
                try {
                    RegExp('(?<! cu)bot').test('dangerbot');
                } catch (t) {
                    return e;
                }
                [
                    ['bot', '(?<! cu)bot'],
                    ['google', '(?<! (?:channel/|google/))google(?!(app|/google| pixel))'],
                    ['http', '(?<!(?:lib))http'],
                    ['java', 'java(?!;)'],
                    ['search', '(?<! ya(?:yandex)?)search'],
                ].forEach(function (t) {
                    var n = a(t, 2),
                        r = n[0],
                        i = n[1],
                        o = e.lastIndexOf(r);
                    ~o && e.splice(o, 1, i);
                });
            })(f);
            var h = new WeakMap(),
                b = new WeakMap(),
                m = new WeakSet(),
                v = new WeakSet();
            function y() {
                s(this, b, RegExp(l(this, h).join('|'), 'i'));
            }
            function k(e) {
                return l(this, h).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var n = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        g(this, v),
                        g(this, m),
                        d(this, h, { writable: !0, value: void 0 }),
                        d(this, b, { writable: !0, value: void 0 }),
                        s(this, h, e || f.slice()),
                        u(this, m, y).call(this),
                        Object.defineProperties(
                            function (e) {
                                return n.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var i = a(t, 2),
                                    o = i[0],
                                    l = i[1];
                                return (
                                    'function' == typeof l.value && Object.assign(e, r({}, o, { value: n[o].bind(n) })),
                                    'function' == typeof l.get &&
                                        Object.assign(
                                            e,
                                            r({}, o, {
                                                get: function () {
                                                    return n[o];
                                                },
                                            }),
                                        ),
                                    e
                                );
                            }, {}),
                        )
                    );
                }
                return (
                    (e = [
                        {
                            key: 'pattern',
                            get: function () {
                                return new RegExp(l(this, b));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && l(this, b).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(l(this, b));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return l(this, h).filter(function (t) {
                                    return RegExp(t, 'i').test(e);
                                });
                            },
                        },
                        {
                            key: 'clear',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                this.exclude(this.matches(e));
                            },
                        },
                        {
                            key: 'extend',
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                ([].push.apply(
                                    l(this, h),
                                    t
                                        .filter(function (t) {
                                            return -1 === u(e, v, k).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    u(this, m, y).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var n = u(this, v, k).call(this, e[t]);
                                    n > -1 && l(this, h).splice(n, 1);
                                }
                                u(this, m, y).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || l(this, h));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, o(r.key), r));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let w = 'funtech-lang';
        },
        62414: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => s });
            var r = n(53548),
                a = n(63582),
                i = n(245),
                o = n(22681),
                l = n(56374);
            let s = (0, a.n)({ event: 'LandingBlock.Showed/Hidden', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e = {}) => {
                let { createObserver: t, delayMs: n = 1e3, enabled: a = !0, onVisibilityChange: s, threshold: c = 0.8 } = e,
                    u = (0, i.N)(),
                    p = (0, o.w)(),
                    d = p?.object,
                    g = p?.block.claimLoadedSession,
                    f = (0, r.useMemo)(() => (p ? u.createBlockReporter(p.snapshot) : null), [u, p]),
                    h = (0, r.useRef)(t),
                    b = (0, r.useRef)(s),
                    [m, v] = (0, r.useState)(null),
                    y = (0, l.c)((e) => v(e));
                ((h.current = t), (b.current = s));
                let k = !!t;
                return (
                    (0, r.useEffect)(() => {
                        if (!a || !m || !d || 'string' != typeof d.scope.objectId || !g || !f || (!k && !m.ownerDocument.defaultView?.IntersectionObserver)) return;
                        let e = !1,
                            t = null,
                            r = null,
                            i = () => {
                                r && (clearTimeout(r), (r = null));
                                let e = t?.hide();
                                (d.activeViewSession === t && (d.activeViewSession = null), (t = null), e && (f.hidden({ viewUuid: e }), b.current?.(!1)));
                            },
                            o = (
                                h.current ??
                                ((e, t, n) => {
                                    let r = n.ownerDocument.defaultView?.IntersectionObserver;
                                    if (!r) throw Error('IntersectionObserver is not available');
                                    return new r(e, t);
                                })
                            )(
                                (a) => {
                                    e ||
                                        a.forEach((e) => {
                                            if (!(e.isIntersecting && e.intersectionRatio >= c)) return void i();
                                            r ||
                                                t?.isVisible ||
                                                (r = setTimeout(() => {
                                                    ((r = null), (t ??= g() ?? d.viewSession), (d.activeViewSession = t));
                                                    let e = t.show();
                                                    e && (f.showed({ viewUuid: e }), b.current?.(!0));
                                                }, n));
                                        });
                                },
                                { threshold: c },
                                m,
                            );
                        return (
                            o.observe(m),
                            () => {
                                ((e = !0), i(), o.unobserve(m), o.disconnect());
                            }
                        );
                    }, [m, g, d, n, a, k, c, f]),
                    y
                );
            });
        },
        80643: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => s });
            var r = n(53548),
                a = n(63582),
                i = n(245),
                o = n(22681),
                l = n(56374);
            let s = (0, a.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, i.N)(),
                    t = (0, o.w)(),
                    n = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object &&
                        n &&
                        n.navigated({ ...e, from: e.from ?? t.snapshot.screen.pageId, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        95982: (e) => {
            var t = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
            function n(e) {
                return (e || '')
                    .match(t)
                    .map(function (e) {
                        if (e) {
                            var t = e.split(';'),
                                n = t[0].split('-'),
                                r = 3 === n.length;
                            return { code: n[0], script: r ? n[1] : null, region: r ? n[2] : n[1], quality: t[1] ? parseFloat(t[1].split('=')[1]) : 1 };
                        }
                    })
                    .filter(function (e) {
                        return e;
                    })
                    .sort(function (e, t) {
                        return t.quality - e.quality;
                    });
            }
            ((e.exports.parse = n),
                (e.exports.pick = function (e, t, r) {
                    if (((r = r || {}), !e || !e.length || !t)) return null;
                    'string' == typeof t && (t = n(t));
                    for (
                        var a = e.map(function (e) {
                                var t = e.split('-'),
                                    n = 3 === t.length;
                                return { code: t[0], script: n ? t[1] : null, region: n ? t[2] : t[1] };
                            }),
                            i = 0;
                        i < t.length;
                        i++
                    )
                        for (
                            var o = t[i],
                                l = o.code.toLowerCase(),
                                s = o.region ? o.region.toLowerCase() : o.region,
                                c = o.script ? o.script.toLowerCase() : o.script,
                                u = 0;
                            u < a.length;
                            u++
                        ) {
                            var p = a[u].code.toLowerCase(),
                                d = a[u].script ? a[u].script.toLowerCase() : a[u].script,
                                g = a[u].region ? a[u].region.toLowerCase() : a[u].region;
                            if (l === p && (r.loose || !c || c === d) && (r.loose || !s || s === g)) return e[u];
                        }
                    return null;
                }));
        },
    },
]);
