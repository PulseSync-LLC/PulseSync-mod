'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7275],
    {
        16172: (e, n, t) => {
            function r(e, n, t) {
                let r = (function (e) {
                    let { callback: n, maxSendingItemsPerRequest: t, requestsSendingDelay: r } = e,
                        c = [];
                    return (
                        !(function e() {
                            c.length > 0 && n(c.splice(0, t)), window.setTimeout(e, r);
                        })(),
                        {
                            add(e) {
                                c.push(e);
                            },
                        }
                    );
                })({
                    callback: (n) => {
                        e(n);
                    },
                    requestsSendingDelay: 1e3,
                    maxSendingItemsPerRequest: 21,
                });
                return {
                    trackEvent(e, c) {
                        t && n.log(e, c), r.add({ [e]: c });
                    },
                };
            }
            t.d(n, {
                X2: () => M,
                N6: () => Q,
                QT: () => u,
                ky: () => y,
                LA: () => E,
                H2: () => m,
                rW: () => f,
                c4: () => w,
                QL: () => A,
                JQ: () => B,
                Vw: () => W,
                gi: () => C,
                gK: () => $,
                Bl: () => eP,
                pe: () => en,
                mh: () => er,
                Z4: () => et,
                U6: () => J,
                __: () => ee,
                HB: () => Z,
                vD: () => r,
                xU: () => i,
                $N: () => s,
                Fx: () => a,
                h_: () => eS,
                l6: () => ep,
                nv: () => ea,
                LZ: () => el,
                uY: () => ec,
                uJ: () => ei,
                QS: () => e_,
                iF: () => ed,
                Pf: () => eo,
                lW: () => es,
                er: () => eu,
                bv: () => eA,
                XB: () => ek,
                Ig: () => eg,
                PO: () => eh,
                z5: () => ew,
                Mu: () => ey,
                ID: () => ef,
                w5: () => em,
                Fn: () => eb,
                e7: () => ev,
                dL: () => eR,
                qi: () => eE,
                U0: () => eT,
                cV: () => eN,
                hc: () => eL,
                TV: () => eC,
            });
            class c {
                makeParams() {
                    return {};
                }
            }
            function i() {
                let e = new c();
                return { getGlobalParams: () => e };
            }
            class o {
                makeParams() {
                    return {};
                }
            }
            function s() {
                let e = new o();
                return { getPlatformParams: () => e };
            }
            function a(e) {
                let { params: n, logger: t, context: r } = e,
                    c = Object.getOwnPropertyNames(n).filter((e) => void 0 === n[e]);
                return c.length > 0 ? (t.error('Evgen parameters are not met', { parameters: c.join(', '), incomingParams: n, context: r }), null) : n;
            }
            var l,
                _,
                d,
                u,
                S,
                p,
                m,
                b,
                k,
                g,
                h,
                v,
                y,
                f,
                A,
                w,
                P,
                C,
                L,
                T,
                R,
                E,
                N,
                M,
                F,
                D,
                O,
                I,
                x,
                B,
                W,
                j,
                U,
                V,
                H,
                K,
                q,
                G,
                z,
                Q,
                Y = t(91945);
            class $ {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, n) {
                    this.evgen.trackEvent(e, n);
                }
                constructor(e, n, t) {
                    (0, Y._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (r, c) => {
                                let i = { ...c, ...n.getGlobalParams(), ...t.getPlatformParams() };
                                e.trackEvent(r, i);
                            },
                        });
                }
            }
            function X(e) {
                return { event: { version: e } };
            }
            function Z(e, n) {
                let { objectsCount: t = 1, objectPosX: r = 1, objectPosY: c = 1 } = n,
                    i = X(2),
                    o = {
                        ...n,
                        objectsCount: t,
                        objectPosX: r,
                        objectPosY: c,
                        pageId: 'artist_screen',
                        pageType: 'object',
                        entityType: 'carousel',
                        entityId: 'concerts',
                        objectsType: 'concert',
                        _meta: i,
                    };
                e.trackEvent('Artist.Concerts.Showed', o);
            }
            function J(e, n) {
                let { objectsCount: t = 1, objectPosX: r = 1, objectPosY: c = 1 } = n,
                    i = X(2),
                    o = {
                        ...n,
                        objectsCount: t,
                        objectPosX: r,
                        objectPosY: c,
                        pageId: 'artist_screen',
                        pageType: 'object',
                        entityType: 'carousel',
                        entityId: 'concerts',
                        objectsType: 'concert',
                        from: 'artist_screen',
                        _meta: i,
                    };
                e.trackEvent('Artist.Concerts.Navigated', o);
            }
            function ee(e, n) {
                let t = X(1),
                    r = { ...n, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: t };
                e.trackEvent('ArtistConcerts.Opened', r);
            }
            function en(e, n) {
                let t = X(1),
                    r = { ...n, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: t };
                e.trackEvent('ArtistConcerts.Closed', r);
            }
            function et(e, n) {
                let { objectPos: t = 1 } = n,
                    r = X(1),
                    c = { ...n, objectPos: t, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: r };
                e.trackEvent('ArtistConcerts.Concert.Showed', c);
            }
            function er(e, n) {
                let { objectPos: t = 1 } = n,
                    r = X(1),
                    c = { ...n, objectPos: t, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', from: 'artist_concerts_screen', _meta: r };
                e.trackEvent('ArtistConcerts.Concert.Navigated', c);
            }
            function ec(e, n) {
                let {
                        skeletonId: t = '',
                        mainObjectType: r = y.NonApplicable,
                        mainObjectId: c = '',
                        tabId: i = '',
                        tabPos: o = 0,
                        isTabSelectedByDefault: s = !1,
                        entityPosX: a = 1,
                        entityPosY: l = 1,
                        objectsCount: _ = 0,
                        displayReasonId: d = '',
                        filterKey: u = '',
                        filterValue: S = '',
                        filterPos: p = 0,
                    } = n,
                    m = X(1),
                    b = {
                        ...n,
                        skeletonId: t,
                        mainObjectType: r,
                        mainObjectId: c,
                        tabId: i,
                        tabPos: o,
                        isTabSelectedByDefault: s,
                        entityPosX: a,
                        entityPosY: l,
                        objectsCount: _,
                        displayReasonId: d,
                        filterKey: u,
                        filterValue: S,
                        filterPos: p,
                        _meta: m,
                    };
                e.trackEvent('LandingBlock.Loaded', b);
            }
            function ei(e, n) {
                let {
                        pageStyle: t = A.Fullscreen,
                        pagePlacement: r = w.Fullscreen,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: a = 0,
                        isTabSelectedByDefault: l = !1,
                        entityPosX: _ = 1,
                        entityPosY: d = 1,
                        objectsCount: u = 0,
                        displayReasonId: S = '',
                        filterKey: p = '',
                        filterValue: m = '',
                        filterPos: b = 0,
                    } = n,
                    k = X(2),
                    g = {
                        ...n,
                        pageStyle: t,
                        pagePlacement: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        tabId: s,
                        tabPos: a,
                        isTabSelectedByDefault: l,
                        entityPosX: _,
                        entityPosY: d,
                        objectsCount: u,
                        displayReasonId: S,
                        filterKey: p,
                        filterValue: m,
                        filterPos: b,
                        _meta: k,
                    };
                e.trackEvent('LandingBlock.Loaded', g);
            }
            function eo(e, n) {
                let {
                        objectPosX: t = 0,
                        objectPosY: r = 0,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: a = 0,
                        isTabSelectedByDefault: l = !1,
                        entityPosX: _ = 1,
                        entityPosY: d = 1,
                        objectsCount: u = 0,
                        displayReasonId: S = '',
                        filterKey: p = '',
                        filterValue: m = '',
                        filterPos: b = 0,
                    } = n,
                    k = X(1),
                    g = {
                        ...n,
                        objectPosX: t,
                        objectPosY: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        tabId: s,
                        tabPos: a,
                        isTabSelectedByDefault: l,
                        entityPosX: _,
                        entityPosY: d,
                        objectsCount: u,
                        displayReasonId: S,
                        filterKey: p,
                        filterValue: m,
                        filterPos: b,
                        _meta: k,
                    };
                e.trackEvent('LandingBlock.Showed', g);
            }
            function es(e, n) {
                let {
                        pageStyle: t = A.Fullscreen,
                        pagePlacement: r = w.Fullscreen,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        objectPosX: s = 0,
                        objectPosY: a = 0,
                        tabId: l = '',
                        tabPos: _ = 0,
                        isTabSelectedByDefault: d = !1,
                        entityPosX: u = 1,
                        entityPosY: S = 1,
                        objectsCount: p = 0,
                        displayReasonId: m = '',
                        filterKey: b = '',
                        filterValue: k = '',
                        filterPos: g = 0,
                    } = n,
                    h = X(2),
                    v = {
                        ...n,
                        pageStyle: t,
                        pagePlacement: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        objectPosX: s,
                        objectPosY: a,
                        tabId: l,
                        tabPos: _,
                        isTabSelectedByDefault: d,
                        entityPosX: u,
                        entityPosY: S,
                        objectsCount: p,
                        displayReasonId: m,
                        filterKey: b,
                        filterValue: k,
                        filterPos: g,
                        _meta: h,
                    };
                e.trackEvent('LandingBlock.Showed', v);
            }
            function ea(e, n) {
                let {
                        objectPosX: t = 0,
                        objectPosY: r = 0,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: a = 0,
                        isTabSelectedByDefault: l = !1,
                        entityPosX: _ = 1,
                        entityPosY: d = 1,
                        objectsCount: u = 0,
                        displayReasonId: S = '',
                        filterKey: p = '',
                        filterValue: m = '',
                        filterPos: b = 0,
                    } = n,
                    k = X(1),
                    g = {
                        ...n,
                        objectPosX: t,
                        objectPosY: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        tabId: s,
                        tabPos: a,
                        isTabSelectedByDefault: l,
                        entityPosX: _,
                        entityPosY: d,
                        objectsCount: u,
                        displayReasonId: S,
                        filterKey: p,
                        filterValue: m,
                        filterPos: b,
                        _meta: k,
                    };
                e.trackEvent('LandingBlock.Hidden', g);
            }
            function el(e, n) {
                let {
                        pageStyle: t = A.Fullscreen,
                        pagePlacement: r = w.Fullscreen,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        objectPosX: s = 0,
                        objectPosY: a = 0,
                        tabId: l = '',
                        tabPos: _ = 0,
                        isTabSelectedByDefault: d = !1,
                        entityPosX: u = 1,
                        entityPosY: S = 1,
                        objectsCount: p = 0,
                        displayReasonId: m = '',
                        filterKey: b = '',
                        filterValue: k = '',
                        filterPos: g = 0,
                    } = n,
                    h = X(2),
                    v = {
                        ...n,
                        pageStyle: t,
                        pagePlacement: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        objectPosX: s,
                        objectPosY: a,
                        tabId: l,
                        tabPos: _,
                        isTabSelectedByDefault: d,
                        entityPosX: u,
                        entityPosY: S,
                        objectsCount: p,
                        displayReasonId: m,
                        filterKey: b,
                        filterValue: k,
                        filterPos: g,
                        _meta: h,
                    };
                e.trackEvent('LandingBlock.Hidden', v);
            }
            function e_(e, n) {
                let {
                        objectPosX: t = 0,
                        objectPosY: r = 0,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: a = 0,
                        isTabSelectedByDefault: l = !1,
                        entityPosX: _ = 1,
                        entityPosY: d = 1,
                        objectsCount: u = 0,
                        displayReasonId: S = '',
                        filterKey: p = '',
                        filterValue: m = '',
                        filterPos: b = 0,
                        deepLink: k = '',
                    } = n,
                    g = X(1),
                    h = {
                        ...n,
                        objectPosX: t,
                        objectPosY: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        tabId: s,
                        tabPos: a,
                        isTabSelectedByDefault: l,
                        entityPosX: _,
                        entityPosY: d,
                        objectsCount: u,
                        displayReasonId: S,
                        filterKey: p,
                        filterValue: m,
                        filterPos: b,
                        deepLink: k,
                        _meta: g,
                    };
                e.trackEvent('LandingBlock.Navigated', h);
            }
            function ed(e, n) {
                let {
                        pageStyle: t = A.Fullscreen,
                        pagePlacement: r = w.Fullscreen,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        objectPosX: s = 0,
                        objectPosY: a = 0,
                        tabId: l = '',
                        tabPos: _ = 0,
                        isTabSelectedByDefault: d = !1,
                        entityPosX: u = 1,
                        entityPosY: S = 1,
                        objectsCount: p = 0,
                        displayReasonId: m = '',
                        filterKey: b = '',
                        filterValue: k = '',
                        filterPos: g = 0,
                        deepLink: h = '',
                    } = n,
                    v = X(2),
                    f = {
                        ...n,
                        pageStyle: t,
                        pagePlacement: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        objectPosX: s,
                        objectPosY: a,
                        tabId: l,
                        tabPos: _,
                        isTabSelectedByDefault: d,
                        entityPosX: u,
                        entityPosY: S,
                        objectsCount: p,
                        displayReasonId: m,
                        filterKey: b,
                        filterValue: k,
                        filterPos: g,
                        deepLink: h,
                        _meta: v,
                    };
                e.trackEvent('LandingBlock.Navigated', f);
            }
            function eu(e, n) {
                let {
                        objectPosX: t = 0,
                        objectPosY: r = 0,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: a = 0,
                        isTabSelectedByDefault: l = !1,
                        entityPosX: _ = 1,
                        entityPosY: d = 1,
                        objectsCount: u = 0,
                        displayReasonId: S = '',
                        filterKey: p = '',
                        filterValue: m = '',
                        filterPos: b = 0,
                    } = n,
                    k = X(1),
                    g = {
                        ...n,
                        objectPosX: t,
                        objectPosY: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        tabId: s,
                        tabPos: a,
                        isTabSelectedByDefault: l,
                        entityPosX: _,
                        entityPosY: d,
                        objectsCount: u,
                        displayReasonId: S,
                        filterKey: p,
                        filterValue: m,
                        filterPos: b,
                        _meta: k,
                    };
                e.trackEvent('LandingBlock.Started', g);
            }
            function eS(e, n) {
                let {
                        objectPosX: t = 0,
                        objectPosY: r = 0,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: a = 0,
                        isTabSelectedByDefault: l = !1,
                        entityPosX: _ = 1,
                        entityPosY: d = 1,
                        objectsCount: u = 0,
                        displayReasonId: S = '',
                        filterKey: p = '',
                        filterValue: m = '',
                        filterPos: b = 0,
                    } = n,
                    k = X(1),
                    g = {
                        ...n,
                        objectPosX: t,
                        objectPosY: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        tabId: s,
                        tabPos: a,
                        isTabSelectedByDefault: l,
                        entityPosX: _,
                        entityPosY: d,
                        objectsCount: u,
                        displayReasonId: S,
                        filterKey: p,
                        filterValue: m,
                        filterPos: b,
                        _meta: k,
                    };
                e.trackEvent('LandingBlock.ActionPerformed', g);
            }
            function ep(e, n) {
                let {
                        pageStyle: t = A.Fullscreen,
                        pagePlacement: r = w.Fullscreen,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        objectPosX: s = 0,
                        objectPosY: a = 0,
                        tabId: l = '',
                        tabPos: _ = 0,
                        isTabSelectedByDefault: d = !1,
                        entityPosX: u = 1,
                        entityPosY: S = 1,
                        objectsCount: p = 0,
                        displayReasonId: m = '',
                        filterKey: b = '',
                        filterValue: k = '',
                        filterPos: g = 0,
                    } = n,
                    h = X(2),
                    v = {
                        ...n,
                        pageStyle: t,
                        pagePlacement: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        objectPosX: s,
                        objectPosY: a,
                        tabId: l,
                        tabPos: _,
                        isTabSelectedByDefault: d,
                        entityPosX: u,
                        entityPosY: S,
                        objectsCount: p,
                        displayReasonId: m,
                        filterKey: b,
                        filterValue: k,
                        filterPos: g,
                        _meta: h,
                    };
                e.trackEvent('LandingBlock.ActionPerformed', v);
            }
            function em(e, n) {
                let {
                        skeletonId: t = '',
                        mainObjectType: r = y.NonApplicable,
                        mainObjectId: c = '',
                        tabId: i = '',
                        tabPos: o = 0,
                        isTabSelectedByDefault: s = !1,
                        viewUuid: a = '',
                    } = n,
                    l = X(1),
                    _ = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, tabId: i, tabPos: o, isTabSelectedByDefault: s, viewUuid: a, _meta: l };
                e.trackEvent('Screen.Opened', _);
            }
            function eb(e, n) {
                let {
                        pageStyle: t = A.Fullscreen,
                        pagePlacement: r = w.Fullscreen,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: a = 0,
                        isTabSelectedByDefault: l = !1,
                        viewUuid: _ = '',
                    } = n,
                    d = X(3),
                    u = {
                        ...n,
                        pageStyle: t,
                        pagePlacement: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        tabId: s,
                        tabPos: a,
                        isTabSelectedByDefault: l,
                        viewUuid: _,
                        _meta: d,
                    };
                e.trackEvent('Screen.Opened', u);
            }
            function ek(e, n) {
                let { skeletonId: t = '', mainObjectType: r = y.NonApplicable, mainObjectId: c = '', tabId: i = '', tabPos: o = 0, isTabSelectedByDefault: s = !1 } = n,
                    a = X(1),
                    l = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, tabId: i, tabPos: o, isTabSelectedByDefault: s, _meta: a };
                e.trackEvent('Screen.Closed', l);
            }
            function eg(e, n) {
                let {
                        pageStyle: t = A.Fullscreen,
                        pagePlacement: r = w.Fullscreen,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: a = 0,
                        isTabSelectedByDefault: l = !1,
                    } = n,
                    _ = X(3),
                    d = {
                        ...n,
                        pageStyle: t,
                        pagePlacement: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        tabId: s,
                        tabPos: a,
                        isTabSelectedByDefault: l,
                        _meta: _,
                    };
                e.trackEvent('Screen.Closed', d);
            }
            function eh(e, n) {
                let {
                        pageStyle: t = A.Fullscreen,
                        pagePlacement: r = w.Fullscreen,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: a = 0,
                        isTabSelectedByDefault: l = !1,
                        viewUuid: _ = '',
                    } = n,
                    d = X(4),
                    u = {
                        ...n,
                        pageStyle: t,
                        pagePlacement: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        tabId: s,
                        tabPos: a,
                        isTabSelectedByDefault: l,
                        viewUuid: _,
                        _meta: d,
                    };
                e.trackEvent('Screen.Closed', u);
            }
            function ev(e, n) {
                let { skeletonId: t = '', mainObjectType: r = y.NonApplicable, mainObjectId: c = '', tabId: i = '', tabPos: o = 0, isTabSelectedByDefault: s = !1 } = n,
                    a = X(1),
                    l = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, tabId: i, tabPos: o, isTabSelectedByDefault: s, _meta: a };
                e.trackEvent('Screen.Started', l);
            }
            function ey(e, n) {
                let { skeletonId: t = '', mainObjectType: r = y.NonApplicable, mainObjectId: c = '', tabId: i = '', tabPos: o = 0, isTabSelectedByDefault: s = !1 } = n,
                    a = X(1),
                    l = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, tabId: i, tabPos: o, isTabSelectedByDefault: s, _meta: a };
                e.trackEvent('Screen.Navigated', l);
            }
            function ef(e, n) {
                let {
                        pageStyle: t = A.Fullscreen,
                        pagePlacement: r = w.Fullscreen,
                        skeletonId: c = '',
                        mainObjectType: i = y.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: a = 0,
                        isTabSelectedByDefault: l = !1,
                        deepLink: _ = '',
                    } = n,
                    d = X(4),
                    u = {
                        ...n,
                        pageStyle: t,
                        pagePlacement: r,
                        skeletonId: c,
                        mainObjectType: i,
                        mainObjectId: o,
                        tabId: s,
                        tabPos: a,
                        isTabSelectedByDefault: l,
                        deepLink: _,
                        _meta: d,
                    };
                e.trackEvent('Screen.Navigated', u);
            }
            function eA(e, n) {
                let { skeletonId: t = '', mainObjectType: r = y.NonApplicable, mainObjectId: c = '', tabId: i = '', tabPos: o = 0, isTabSelectedByDefault: s = !1 } = n,
                    a = X(1),
                    l = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, tabId: i, tabPos: o, isTabSelectedByDefault: s, _meta: a };
                e.trackEvent('Screen.ActionPerformed', l);
            }
            function ew(e, n) {
                let { pageStyle: t = A.Fullscreen, pagePlacement: r = w.Fullscreen, skeletonId: c = '', mainObjectType: i = y.NonApplicable, mainObjectId: o = '' } = n,
                    s = X(1),
                    a = { ...n, pageStyle: t, pagePlacement: r, skeletonId: c, mainObjectType: i, mainObjectId: o, _meta: s };
                e.trackEvent('Screen.ErrorRaised', a);
            }
            function eP(e, n) {
                let t = X(1),
                    r = { ...n, _meta: t };
                e.trackEvent('AppSettings.Changed', r);
            }
            function eC(e, n) {
                let { skeletonId: t = '', mainObjectType: r = y.NonApplicable, mainObjectId: c = '' } = n,
                    i = X(1),
                    o = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, _meta: i };
                e.trackEvent('Tab.Opened', o);
            }
            function eL(e, n) {
                let { skeletonId: t = '', mainObjectType: r = y.NonApplicable, mainObjectId: c = '' } = n,
                    i = X(1),
                    o = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, _meta: i };
                e.trackEvent('Tab.Loaded', o);
            }
            function eT(e, n) {
                let { skeletonId: t = '', mainObjectType: r = y.NonApplicable, mainObjectId: c = '' } = n,
                    i = X(2),
                    o = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, _meta: i };
                e.trackEvent('Sidebar.Opened', o);
            }
            function eR(e, n) {
                let { skeletonId: t = '', mainObjectType: r = y.NonApplicable, mainObjectId: c = '' } = n,
                    i = X(1),
                    o = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, _meta: i };
                e.trackEvent('Sidebar.ActionPerformed', o);
            }
            function eE(e, n) {
                let { skeletonId: t = '', mainObjectType: r = y.NonApplicable, mainObjectId: c = '' } = n,
                    i = X(1),
                    o = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, _meta: i };
                e.trackEvent('Sidebar.Navigated', o);
            }
            function eN(e, n) {
                let { skeletonId: t = '', mainObjectType: r = y.NonApplicable, mainObjectId: c = '' } = n,
                    i = X(1),
                    o = { ...n, skeletonId: t, mainObjectType: r, mainObjectId: c, _meta: i };
                e.trackEvent('Sidebar.Started', o);
            }
            ((l || (l = {})).ConcertScreen = 'concert_screen'),
                (function (e) {
                    (e.Music = 'music'),
                        (e.Podcast = 'podcast'),
                        (e.FairyTale = 'fairy-tale'),
                        (e.Audiobook = 'audiobook'),
                        (e.Poetry = 'poetry'),
                        (e.Article = 'article'),
                        (e.Lecture = 'lecture'),
                        (e.Show = 'show'),
                        (e.Radio = 'radio'),
                        (e.Unknown = 'unknown');
                })(_ || (_ = {})),
                (function (e) {
                    (e.Link = 'link'), (e.StoriesScreen = 'stories_screen');
                })(d || (d = {})),
                (function (e) {
                    (e.AboutArtistScreen = 'about_artist_screen'),
                        (e.ArtistScreen = 'artist_screen'),
                        (e.ArtistListScreen = 'artist_list_screen'),
                        (e.ArtistConcertsScreen = 'artist_concerts_screen'),
                        (e.ArtistFamiliarToYouScreen = 'artist_familiar_to_you_screen'),
                        (e.ArtistTrackListScreen = 'artist_track_list_screen'),
                        (e.ArtistSimilarArtistListScreen = 'artist_similar_artist_list_screen'),
                        (e.ArtistStudioAlbumListScreen = 'artist_studio_album_list_screen'),
                        (e.ArtistAllAlbumsListScreen = 'artist_all_albums_list_screen'),
                        (e.ArtistPickScreen = 'artist_pick_screen'),
                        (e.PresaveHintScreen = 'presave_hint_screen'),
                        (e.TrackListScreen = 'track_list_screen'),
                        (e.AlbumScreen = 'album_screen'),
                        (e.PromolandingAlbumScreen = 'promolanding_album_screen'),
                        (e.AlbumListScreen = 'album_list_screen'),
                        (e.PodcastScreen = 'podcast_screen'),
                        (e.AudiobookScreen = 'audiobook_screen'),
                        (e.CompilationsScreen = 'compilations_screen'),
                        (e.CompilationsListScreen = 'compilations_list_screen'),
                        (e.ConcertScreen = 'concert_screen'),
                        (e.ConcertSummaryScreen = 'concert_summary_screen'),
                        (e.ArtistFullscreenGalleryScreen = 'artist_fullscreen_gallery_screen'),
                        (e.PlaylistScreen = 'playlist_screen'),
                        (e.PlaylistListScreen = 'playlist_list_screen'),
                        (e.CreatePlaylistScreen = 'create_playlist_screen'),
                        (e.TrackActionsScreen = 'track_actions_screen'),
                        (e.ShareScreen = 'share_screen'),
                        (e.Link = 'link'),
                        (e.VideoScreen = 'video_screen'),
                        (e.VideoWaveScreen = 'video_wave_screen'),
                        (e.VideoclipsScreen = 'videoclips_screen'),
                        (e.PodcastLandingScreen = 'podcast_landing_screen'),
                        (e.NonmusicLandingScreen = 'nonmusic_landing_screen'),
                        (e.AudiobookLandingScreen = 'audiobook_landing_screen'),
                        (e.KidsLandingScreen = 'kids_landing_screen'),
                        (e.AlbumChartScreen = 'album_chart_screen'),
                        (e.PodcastChartScreen = 'podcast_chart_screen'),
                        (e.AddTracksScreen = 'add_tracks_screen'),
                        (e.ContestScreen = 'contest_screen'),
                        (e.TrackChartScreen = 'track_chart_screen'),
                        (e.MainScreen = 'main_screen'),
                        (e.CommunicationScreen = 'communication_screen'),
                        (e.AlbumShareScreen = 'album_share_screen'),
                        (e.SearchScreen = 'search_screen'),
                        (e.TreesScreen = 'trees_screen'),
                        (e.SlidesScreen = 'slides_screen'),
                        (e.StoriesScreen = 'stories_screen'),
                        (e.YearResultsScreen = 'year_results_screen'),
                        (e.SearchObjectListScreen = 'search_object_list_screen'),
                        (e.FunnelScreen = 'funnel_screen'),
                        (e.BottomsheetScreen = 'bottomsheet_screen'),
                        (e.EntityActionsScreen = 'entity_actions_screen'),
                        (e.ShortcutPinScreen = 'shortcut_pin_screen'),
                        (e.DescriptionScreen = 'description_screen'),
                        (e.QueueScreen = 'queue_screen'),
                        (e.TrailerScreen = 'trailer_screen'),
                        (e.ConcertPurchaseScreen = 'concert_purchase_screen'),
                        (e.ConcertsLandingScreen = 'concerts_landing_screen'),
                        (e.ConcertsGridScreen = 'concerts_grid_screen'),
                        (e.ConcertLocationSelector = 'concert_location_selector'),
                        (e.MetatagScreen = 'metatag_screen'),
                        (e.DynamicScreen = 'dynamic_screen'),
                        (e.MusicHistoryScreen = 'music_history_screen'),
                        (e.CollectionLandingScreen = 'collection_landing_screen'),
                        (e.CollectionAlbumsScreen = 'collection_albums_screen'),
                        (e.CollectionArtistsScreen = 'collection_artists_screen'),
                        (e.CollectionPlaylistsScreen = 'collection_playlists_screen'),
                        (e.CollectionTrackListScreen = 'collection_track_list_screen'),
                        (e.DownloadedContentScreen = 'downloaded_content_screen'),
                        (e.WizardScreen = 'wizard_screen'),
                        (e.WizardEntryPointScreen = 'wizard_entry_point_screen'),
                        (e.WizardSkipScreen = 'wizard_skip_screen'),
                        (e.ObjectsListScreen = 'objects_list_screen'),
                        (e.ObjectsGridScreen = 'objects_grid_screen'),
                        (e.DownloadedTrackListScreen = 'downloaded_track_list_screen'),
                        (e.DownloadedAlbumListScreen = 'downloaded_album_list_screen'),
                        (e.DownloadedPlaylistListScreen = 'downloaded_playlist_list_screen'),
                        (e.DownloadedArtistListScreen = 'downloaded_artist_list_screen'),
                        (e.DownloadedPodcastLandingScreen = 'downloaded_podcast_landing_screen'),
                        (e.DownloadedAudiobooksLandingScreen = 'downloaded_audiobooks_landing_screen'),
                        (e.DownloadedForKidsLandingScreen = 'downloaded_for_kids_landing_screen'),
                        (e.AudiobookListScreen = 'audiobook_list_screen'),
                        (e.AudiobookChapterListScreen = 'audiobook_chapter_list_screen'),
                        (e.PodcastListScreen = 'podcast_list_screen'),
                        (e.PodcastEpisodeListScreen = 'podcast_episode_list_screen'),
                        (e.NewEpisodeListScreen = 'new_episode_list_screen'),
                        (e.KidsTrackListScreen = 'kids_track_list_screen'),
                        (e.KidsPlaylistListScreen = 'kids_playlist_list_screen'),
                        (e.KidsAlbumAndPodcastListScreen = 'kids_album_and_podcast_list_screen'),
                        (e.DownloadedAudiobookListScreen = 'downloaded_audiobook_list_screen'),
                        (e.DownloadedAudiobookChapterListScreen = 'downloaded_audiobook_chapter_list_screen'),
                        (e.DownloadedPodcastListScreen = 'downloaded_podcast_list_screen'),
                        (e.DownloadedPodcastEpisodeListScreen = 'downloaded_podcast_episode_list_screen'),
                        (e.DownloadedKidsTrackListScreen = 'downloaded_kids_track_list_screen'),
                        (e.DownloadedKidsPlaylistListScreen = 'downloaded_kids_playlist_list_screen'),
                        (e.DownloadedKidsAlbumAndPodcastListScreen = 'downloaded_kids_album_and_podcast_list_screen'),
                        (e.ProfileScreen = 'profile_screen'),
                        (e.RestorePurchasesScreen = 'restore_purchases_screen'),
                        (e.EnterPromoCodeScreen = 'enter_promo_code_screen'),
                        (e.DeleteAccountScreen = 'delete_account_screen'),
                        (e.DislikesScreen = 'dislikes_screen'),
                        (e.PlusSdkScreen = 'plus_sdk_screen'),
                        (e.CashedTracksScreen = 'cashed_tracks_screen'),
                        (e.LocalTracksScreen = 'local_tracks_screen'),
                        (e.LogoutScreen = 'logout_screen'),
                        (e.AboutScreen = 'about_screen'),
                        (e.KidsCatalogPromoScreen = 'kids_catalog_promo_screen'),
                        (e.ExplicitDialogScreen = 'explicit_dialog_screen'),
                        (e.PlusScreen = 'plus_screen'),
                        (e.AutoPickRegionScreen = 'auto_pick_region_screen'),
                        (e.StationScreen = 'station_screen'),
                        (e.ShowScreen = 'show_screen'),
                        (e.WidgetInstallScreen = 'widget_install_screen'),
                        (e.SettingsScreen = 'settings_screen'),
                        (e.SettingsAutoDownloadScreen = 'settings_auto_download_screen'),
                        (e.SettingsAutoDownloadConfirmationScreen = 'settings_auto_download_confirmation_screen'),
                        (e.SettingsClearMemoryScreen = 'settings_clear_memory_screen'),
                        (e.SettingsQualityScreen = 'settings_quality_screen'),
                        (e.SettingsStorageSelectorScreen = 'settings_storage_selector_screen'),
                        (e.ExpandedPlayerScreen = 'expanded_player_screen'),
                        (e.PlayerScreen = 'player_screen'),
                        (e.MiniplayerScreen = 'miniplayer_screen'),
                        (e.MessengerSupportScreen = 'messenger_support_screen'),
                        (e.Sidebar = 'sidebar'),
                        (e.MyWaweSettingsScreen = 'my_wawe_settings_screen'),
                        (e.Widget = 'widget'),
                        (e.Os = 'os'),
                        (e.SummaryScreen = 'summary_screen'),
                        (e.ShortSummaryScreen = 'short_summary_screen'),
                        (e.MyShelfScreen = 'my_shelf_screen'),
                        (e.MyShelfHistoryScreen = 'my_shelf_history_screen'),
                        (e.MyShelfLikedScreen = 'my_shelf_liked_screen'),
                        (e.CollectionAudiobooksScreen = 'collection_audiobooks_screen'),
                        (e.CollectionPodcastScreen = 'collection_podcast_screen'),
                        (e.CollectionKidsScreen = 'collection_kids_screen'),
                        (e.CollectionVideoclipsScreen = 'collection_videoclips_screen'),
                        (e.RationaleMicPermissionScreen = 'rationale_mic_permission_screen'),
                        (e.ArtistPickerBottomsheet = 'artist_picker_bottomsheet'),
                        (e.TrackRecognitionScreen = 'track_recognition_screen'),
                        (e.SoundSettingsScreen = 'sound_settings_screen'),
                        (e.SleepTimerScreen = 'sleep_timer_screen'),
                        (e.PultPickerScreen = 'pult_picker_screen'),
                        (e.TextScreen = 'text_screen'),
                        (e.TrackShareScreen = 'track_share_screen'),
                        (e.EditorialFeedScreen = 'editorial_feed_screen'),
                        (e.EasyLoginScreen = 'easy_login_screen'),
                        (e.EasyLoginChromecastScreen = 'easy_login_chromecast_screen'),
                        (e.SubscriptionConditionsScreen = 'subscription_conditions_screen'),
                        (e.OnboardingScreen = 'onboarding_screen'),
                        (e.FeatureOnboardingScreen = 'feature_onboarding_screen'),
                        (e.LoginScreen = 'login_screen'),
                        (e.CoverEditScreen = 'cover_edit_screen'),
                        (e.CoverScreen = 'cover_screen'),
                        (e.PaywallScreen = 'paywall_screen'),
                        (e.InformerScreen = 'informer_screen'),
                        (e.SortConditionsScreen = 'sort_conditions_screen'),
                        (e.TrackScreen = 'track_screen'),
                        (e.SnegirScreen = 'snegir_screen'),
                        (e.PassportVpnLockScreen = 'passport_vpn_lock_screen'),
                        (e.PageNotFoundScreen = 'page_not_found_screen'),
                        (e.PageNotAvailableScreen = 'page_not_available_screen'),
                        (e.AddToPlaylistScreen = 'add_to_playlist_screen'),
                        (e.AppDownloadScreen = 'app_download_screen'),
                        (e.NotEnoughDiskSpaceScreen = 'not_enough_disk_space_screen'),
                        (e.LabelScreen = 'label_screen'),
                        (e.WaveLandingScreen = 'wave_landing_screen'),
                        (e.FactScreen = 'fact_screen'),
                        (e.ForYouScreen = 'for_you_screen'),
                        (e.BarAboveScreen = 'bar_above_screen'),
                        (e.ShakeWaveScreen = 'shake_wave_screen'),
                        (e.LumenAwakeningScreen = 'lumen_awakening_screen'),
                        (e.MultivibeSendingInvitationScreen = 'multivibe_sending_invitation_screen'),
                        (e.MultivibeAcceptingInvitationScreen = 'multivibe_accepting_invitation_screen'),
                        (e.MultivibeInvalidInvitationScreen = 'multivibe_invalid_invitation_screen'),
                        (e.MultivibePendingInvitationScreen = 'multivibe_pending_invitation_screen'),
                        (e.MultivibeAlreadyExistScreen = 'multivibe_already_exist_screen'),
                        (e.MultivibeScreen = 'multivibe_screen'),
                        (e.MultivibeRenameScreen = 'multivibe_rename_screen'),
                        (e.MultivibeAloneScreen = 'multivibe_alone_screen'),
                        (e.MultivibeLimitScreen = 'multivibe_limit_screen'),
                        (e.MultivibeActionScreen = 'multivibe_action_screen');
                })(u || (u = {})),
                (function (e) {
                    (e.SoundQuality = 'sound_quality'),
                        (e.Offline = 'offline'),
                        (e.Crossfade = 'crossfade'),
                        (e.Explicit = 'explicit'),
                        (e.KidsTab = 'kids_tab'),
                        (e.Theme = 'theme'),
                        (e.AddTracksToEndOfPlaylist = 'add_tracks_to_end_of_playlist'),
                        (e.NotifyAboutNewReleases = 'notify_about_new_releases'),
                        (e.ShowVideo = 'show_video'),
                        (e.AutoCache = 'auto_cache'),
                        (e.AutoCacheSize = 'auto_cache_size'),
                        (e.GlagolStation = 'glagol_station'),
                        (e.ClearMemory = 'clear_memory'),
                        (e.Repeat = 'repeat'),
                        (e.Shake = 'shake'),
                        (e.Shuffle = 'shuffle'),
                        (e.ShowLyrics = 'show_lyrics'),
                        (e.ShowQueue = 'show_queue'),
                        (e.Equalizer = 'equalizer'),
                        (e.PlayingSpeed = 'playing_speed'),
                        (e.Autoplay = 'autoplay'),
                        (e.VolumeLevel = 'volume_level');
                })(S || (S = {})),
                (function (e) {
                    (e.Concert = 'concert'), (e.Shortcut = 'shortcut');
                })(p || (p = {})),
                (function (e) {
                    (e.ConcertScreen = 'concert_screen'), (e.ConcertPurchaseScreen = 'concert_purchase_screen'), (e.ArtistConcertsScreen = 'artist_concerts_screen');
                })(m || (m = {})),
                (function (e) {
                    (e.Link = 'link'), (e.StoriesScreen = 'stories_screen');
                })(b || (b = {})),
                (function (e) {
                    (e.ConcertScreen = 'concert_screen'), (e.ConcertPurchaseScreen = 'concert_purchase_screen');
                })(k || (k = {})),
                ((g || (g = {})).ConcertPurchaseScreen = 'concert_purchase_screen'),
                (function (e) {
                    (e.Album = 'album'),
                        (e.Playlist = 'playlist'),
                        (e.Category = 'category'),
                        (e.Promotion = 'promotion'),
                        (e.TrackChartItem = 'track-chart-item'),
                        (e.AlbumChartItem = 'album-chart-item'),
                        (e.Station = 'station'),
                        (e.Track = 'track'),
                        (e.MenuItemAlbum = 'menu-item-album'),
                        (e.MenuItemPlaylist = 'menu-item-playlist'),
                        (e.Artist = 'artist'),
                        (e.Tab = 'tab'),
                        (e.GenerativeStation = 'generative-station'),
                        (e.Video = 'video'),
                        (e.VideoPreview = 'video-preview'),
                        (e.LastActiveItem = 'last_active_item'),
                        (e.MyShelf = 'my_shelf'),
                        (e.Audiobook = 'audiobook'),
                        (e.Podcast = 'podcast');
                })(h || (h = {})),
                (function (e) {
                    (e.Station = 'station'),
                        (e.Chromecast = 'chromecast'),
                        (e.Airplay = 'airplay'),
                        (e.Bluetooth = 'bluetooth'),
                        (e.Sonos = 'sonos'),
                        (e.SamsungSdk = 'samsung_sdk'),
                        (e.YandexTv = 'yandex_tv'),
                        (e.Phone = 'phone'),
                        (e.AndroidTv = 'android_tv'),
                        (e.AndroidWear = 'android_wear'),
                        (e.AppleTv = 'apple_tv'),
                        (e.WebTv = 'web_tv'),
                        (e.Web = 'web'),
                        (e.WebDesktop = 'web_desktop'),
                        (e.Unknown = 'unknown');
                })(v || (v = {})),
                (function (e) {
                    (e.Audiobook = 'audiobook'),
                        (e.AudiobookChapter = 'audiobook_chapter'),
                        (e.Podcast = 'podcast'),
                        (e.PodcastEpisode = 'podcast_episode'),
                        (e.Track = 'track'),
                        (e.Artist = 'artist'),
                        (e.Album = 'album'),
                        (e.Playlist = 'playlist'),
                        (e.Wave = 'wave'),
                        (e.Video = 'video'),
                        (e.Generative = 'generative'),
                        (e.Feature = 'feature'),
                        (e.Teaser = 'teaser'),
                        (e.Banner = 'banner'),
                        (e.Shortcut = 'shortcut'),
                        (e.Concert = 'concert'),
                        (e.ConcertsSelection = 'concerts_selection'),
                        (e.SearchField = 'search_field'),
                        (e.Location = 'location'),
                        (e.LocationAutoDetect = 'location_auto_detect'),
                        (e.UpcomingAlbum = 'upcoming_album'),
                        (e.SmartPreview = 'smart_preview'),
                        (e.Trailer = 'trailer'),
                        (e.GalleryItem = 'gallery_item'),
                        (e.MetaTag = 'meta_tag'),
                        (e.NonApplicable = 'non_applicable'),
                        (e.Text = 'text'),
                        (e.Donation = 'donation'),
                        (e.Music = 'music'),
                        (e.RadioStation = 'radio_station'),
                        (e.RadioStationStream = 'radio_station_stream'),
                        (e.RadioStationShow = 'radio_station_show'),
                        (e.RadioStreamDescription = 'radio_stream_description'),
                        (e.SimilarRadioStation = 'similar_radio_station'),
                        (e.Show = 'show'),
                        (e.Phone = 'phone'),
                        (e.Address = 'address'),
                        (e.Link = 'link'),
                        (e.Genre = 'genre'),
                        (e.City = 'city'),
                        (e.Region = 'region'),
                        (e.SearchItem = 'search_item'),
                        (e.SearchCell = 'search_cell'),
                        (e.Reaction = 'reaction'),
                        (e.SleepTimer = 'sleep_timer'),
                        (e.Slide = 'slide'),
                        (e.SlideContent = 'slide_content'),
                        (e.Fact = 'fact'),
                        (e.SleepingAlice = 'sleeping_alice'),
                        (e.Q2vWave = 'q2v_wave'),
                        (e.BigFact = 'big_fact'),
                        (e.Lumen = 'lumen'),
                        (e.LumenUnawakened = 'lumen_unawakened');
                })(y || (y = {})),
                (function (e) {
                    (e.SearchScreen = 'search_screen'),
                        (e.CollectionLandingScreen = 'collection_landing_screen'),
                        (e.MainScreen = 'main_screen'),
                        (e.NonmusicLandingScreen = 'nonmusic_landing_screen'),
                        (e.PodcastLandingScreen = 'podcast_landing_screen'),
                        (e.AudiobookLandingScreen = 'audiobook_landing_screen'),
                        (e.KidsLandingScreen = 'kids_landing_screen'),
                        (e.DynamicScreen = 'dynamic_screen'),
                        (e.MetatagScreen = 'metatag_screen'),
                        (e.MusicHistoryScreen = 'music_history_screen'),
                        (e.DownloadedContentScreen = 'downloaded_content_screen'),
                        (e.CollectionArtistsScreen = 'collection_artists_screen'),
                        (e.ObjectsListScreen = 'objects_list_screen'),
                        (e.ObjectsGridScreen = 'objects_grid_screen'),
                        (e.BottomsheetScreen = 'bottomsheet_screen'),
                        (e.TrailerScreen = 'trailer_screen'),
                        (e.Sidebar = 'sidebar'),
                        (e.DownloadedArtistListScreen = 'downloaded_artist_list_screen'),
                        (e.ArtistScreen = 'artist_screen'),
                        (e.AlbumScreen = 'album_screen'),
                        (e.PlaylistScreen = 'playlist_screen'),
                        (e.AboutArtistScreen = 'about_artist_screen'),
                        (e.MiniplayerScreen = 'miniplayer_screen'),
                        (e.InformerScreen = 'informer_screen'),
                        (e.TrackScreen = 'track_screen'),
                        (e.Widget = 'widget'),
                        (e.CollectionVideoclipsScreen = 'collection_videoclips_screen'),
                        (e.ShareScreen = 'share_screen'),
                        (e.ConcertsLandingScreen = 'concerts_landing_screen'),
                        (e.ConcertScreen = 'concert_screen'),
                        (e.ConcertsGridScreen = 'concerts_grid_screen'),
                        (e.ConcertLocationSelector = 'concert_location_selector'),
                        (e.SlidesScreen = 'slides_screen'),
                        (e.PromolandingAlbumScreen = 'promolanding_album_screen'),
                        (e.WaveLandingScreen = 'wave_landing_screen'),
                        (e.FactScreen = 'fact_screen'),
                        (e.MultivibeSendingInvitationScreen = 'multivibe_sending_invitation_screen'),
                        (e.MultivibeAcceptingInvitationScreen = 'multivibe_accepting_invitation_screen'),
                        (e.MultivibeInvalidInvitationScreen = 'multivibe_invalid_invitation_screen'),
                        (e.MultivibePendingInvitationScreen = 'multivibe_pending_invitation_screen'),
                        (e.MultivibeAlreadyExistScreen = 'multivibe_already_exist_screen'),
                        (e.MultivibeScreen = 'multivibe_screen'),
                        (e.MultivibeActionScreen = 'multivibe_action_screen'),
                        (e.MultivibeAloneScreen = 'multivibe_alone_screen');
                })(f || (f = {})),
                (function (e) {
                    (e.Fullscreen = 'fullscreen'), (e.Bar = 'bar'), (e.Sheet = 'sheet'), (e.Popup = 'popup'), (e.Tooltip = 'tooltip'), (e.ContextMenu = 'context_menu');
                })(A || (A = {})),
                (function (e) {
                    (e.Fullscreen = 'fullscreen'),
                        (e.Bottom = 'bottom'),
                        (e.Left = 'left'),
                        (e.Right = 'right'),
                        (e.Top = 'top'),
                        (e.Center = 'center'),
                        (e.Floating = 'floating'),
                        (e.Hover = 'hover'),
                        (e.BottomRight = 'bottom_right');
                })(w || (w = {})),
                (function (e) {
                    (e.Next = 'next'), (e.End = 'end');
                })(P || (P = {})),
                (function (e) {
                    (e.Tap = 'tap'),
                        (e.LongTap = 'longTap'),
                        (e.DoubleTap = 'doubleTap'),
                        (e.Pan = 'pan'),
                        (e.Swipe = 'swipe'),
                        (e.Hardware = 'hardware'),
                        (e.Shake = 'shake');
                })(C || (C = {})),
                (function (e) {
                    (e.Device = 'device'), (e.Ynison = 'ynison'), (e.Glagol = 'glagol');
                })(L || (L = {})),
                (function (e) {
                    (e.WaveWithFixedRecommendations = 'wave_with_fixed_recommendations'),
                        (e.WaveWithoutFixedRecommendations = 'wave_without_fixed_recommendations'),
                        (e.Videoclip = 'videoclip'),
                        (e.Generative = 'generative'),
                        (e.Fmradio = 'fmradio'),
                        (e.Local = 'local'),
                        (e.Unknown = 'unknown');
                })(T || (T = {})),
                (function (e) {
                    (e.OwnSpeaker = 'own_speaker'),
                        (e.Chromecast = 'chromecast'),
                        (e.Bluetooth = 'bluetooth'),
                        (e.Airplay = 'airplay'),
                        (e.Unspecified = 'unspecified'),
                        (e.Web = 'web'),
                        (e.Android = 'android'),
                        (e.Ios = 'ios'),
                        (e.SmartSpeaker = 'smart_speaker'),
                        (e.WebTv = 'web_tv'),
                        (e.WebDesktop = 'web_desktop'),
                        (e.AndroidTv = 'android_tv'),
                        (e.AndroidWear = 'android_wear'),
                        (e.AppleTv = 'apple_tv'),
                        (e.YandexStation = 'yandex_station'),
                        (e.YandexTv = 'yandex_tv');
                })(R || (R = {})),
                (function (e) {
                    (e.Carousel = 'carousel'),
                        (e.Shelf = 'shelf'),
                        (e.List = 'list'),
                        (e.Header = 'header'),
                        (e.Tracks = 'tracks'),
                        (e.MyWave = 'my_wave'),
                        (e.Button = 'button'),
                        (e.BrandedButtons = 'branded_buttons'),
                        (e.ArtistFamiliarTracks = 'artist_familiar_tracks'),
                        (e.Deeplink = 'deeplink'),
                        (e.Summary = 'summary'),
                        (e.Chapters = 'chapters'),
                        (e.Episodes = 'episodes'),
                        (e.SongsAndEpisodes = 'songs_and_episodes'),
                        (e.SavedChapters = 'saved_chapters'),
                        (e.SavedEpisodes = 'saved_episodes'),
                        (e.LatestEpisodes = 'latest_episodes'),
                        (e.ExternalLaunch = 'external_launch'),
                        (e.Trailer = 'trailer'),
                        (e.SmartPreview = 'smart_preview'),
                        (e.Liked = 'liked'),
                        (e.Track = 'track'),
                        (e.Promo = 'promo'),
                        (e.Actions = 'actions'),
                        (e.Albums = 'albums'),
                        (e.ArtistFamiliar = 'artist_familiar'),
                        (e.ArtistFamiliarAlbums = 'artist_familiar_albums'),
                        (e.Artists = 'artists'),
                        (e.CollectionShortcuts = 'collection_shortcuts'),
                        (e.Compilations = 'compilations'),
                        (e.Concerts = 'concerts'),
                        (e.LocationList = 'location_list'),
                        (e.DislikedTracks = 'disliked_tracks'),
                        (e.InformationBlock = 'information_block'),
                        (e.DisclaimerBlock = 'disclaimer_block'),
                        (e.KidsBanner = 'kids_banner'),
                        (e.LastReleases = 'last_releases'),
                        (e.LikedPodcasts = 'liked_podcasts'),
                        (e.Menu = 'menu'),
                        (e.Mixes = 'mixes'),
                        (e.NewReleases = 'new_releases'),
                        (e.PersonalPlaylists = 'personal_playlists'),
                        (e.AddToPlaylist = 'add_to_playlist'),
                        (e.SimilarAlbums = 'similar_albums'),
                        (e.SimilarPlaylists = 'similar_playlists'),
                        (e.Player = 'player'),
                        (e.Playlists = 'playlists'),
                        (e.Podcasts = 'podcasts'),
                        (e.Donations = 'donations'),
                        (e.SearchBestResults = 'search_best_results'),
                        (e.Videoclips = 'videoclips'),
                        (e.ShareSubscription = 'share_subscription'),
                        (e.Search = 'search'),
                        (e.Home = 'home'),
                        (e.Kids = 'kids'),
                        (e.NonMusic = 'non_music'),
                        (e.Collection = 'collection'),
                        (e.Plus = 'plus'),
                        (e.Toolbar = 'toolbar'),
                        (e.Login = 'login'),
                        (e.Profile = 'profile'),
                        (e.OtherAlbums = 'other_albums'),
                        (e.OtherAlbumVersions = 'other_album_versions'),
                        (e.GenreAlbums = 'genre_albums'),
                        (e.NoInternet = 'no_internet'),
                        (e.ConnectionProblems = 'connection_problems'),
                        (e.OfflineMode = 'offline_mode'),
                        (e.SomethingWrong = 'something_wrong'),
                        (e.ContentNotAvailable = 'content_not_available'),
                        (e.ConcertTabHeader = 'concert_tab_header'),
                        (e.ConcertTabFeed = 'concert_tab_feed'),
                        (e.ConcertHeader = 'concert_header'),
                        (e.SimilarEntities = 'similar_entities'),
                        (e.Error = 'error'),
                        (e.Wizard = 'wizard'),
                        (e.OfficialPages = 'official_pages'),
                        (e.ReleaseLinks = 'release_links'),
                        (e.Labels = 'labels'),
                        (e.WordsInWave = 'words_in_wave'),
                        (e.Wheel = 'wheel'),
                        (e.Q2vWave = 'q2v_wave'),
                        (e.Multiwave = 'multiwave');
                })(E || (E = {})),
                (function (e) {
                    (e.UserAction = 'user_action'), (e.OnboardingEnd = 'onboarding_end');
                })(N || (N = {})),
                (function (e) {
                    (e.Ok = 'ok'),
                        (e.Cancel = 'cancel'),
                        (e.Later = 'later'),
                        (e.Add = 'add'),
                        (e.Remove = 'remove'),
                        (e.Like = 'like'),
                        (e.Unlike = 'unlike'),
                        (e.Dislike = 'dislike'),
                        (e.Undislike = 'undislike'),
                        (e.Download = 'download'),
                        (e.Share = 'share'),
                        (e.PlayOnDevice = 'play_on_device'),
                        (e.Lyrics = 'lyrics'),
                        (e.LaunchTrailer = 'launch_trailer'),
                        (e.SubscribeToPodcast = 'subscribe_to_podcast'),
                        (e.UnsubscribeFromPodcast = 'unsubscribe_from_podcast'),
                        (e.MarkAsListened = 'mark_as_listened'),
                        (e.MarkAsUnlistened = 'mark_as_unlistened'),
                        (e.Settings = 'settings'),
                        (e.SettingsClearMemory = 'settings_clear_memory'),
                        (e.RequestPermissionExternalAudio = 'request_permission_external_audio'),
                        (e.ClearHistory = 'clear_history'),
                        (e.ScrollTo = 'scroll_to'),
                        (e.SkipPaywall = 'skip_paywall'),
                        (e.Enable = 'enable'),
                        (e.Disable = 'disable'),
                        (e.ChangeRegion = 'change_region'),
                        (e.Pause = 'pause'),
                        (e.Play = 'play'),
                        (e.ResumePlaying = 'resume_playing'),
                        (e.Skip = 'skip'),
                        (e.Backskip = 'backskip'),
                        (e.Pin = 'pin'),
                        (e.Unpin = 'unpin'),
                        (e.Copied = 'copied'),
                        (e.StartSleepTimer = 'start_sleep_timer'),
                        (e.StopSleepTimer = 'stop_sleep_timer'),
                        (e.FinishSleepTimer = 'finish_sleep_timer'),
                        (e.Seek = 'seek'),
                        (e.SeekForward = 'seek_forward'),
                        (e.SeekBackward = 'seek_backward'),
                        (e.ChangeRepeatSettings = 'change_repeat_settings'),
                        (e.ChangeView = 'change_view'),
                        (e.ChangeShuffle = 'change_shuffle'),
                        (e.ChangeSpeed = 'change_speed'),
                        (e.ChangeVolume = 'change_volume'),
                        (e.ShowQueue = 'show_queue'),
                        (e.EasyLoginSetup = 'easy_login_setup'),
                        (e.LoginSuccess = 'login_success'),
                        (e.LoginFailure = 'login_failure'),
                        (e.Logout = 'logout'),
                        (e.DeleteAccount = 'delete_account'),
                        (e.DeleteDownload = 'delete_download'),
                        (e.SelectFilter = 'select_filter'),
                        (e.ShareMore = 'share_more'),
                        (e.ShareCustomAction = 'share_custom_action'),
                        (e.Refresh = 'refresh'),
                        (e.AddToPlaylist = 'add_to_playlist'),
                        (e.RemoveFromPlaylist = 'remove_from_playlist'),
                        (e.SaveSlide = 'save_slide'),
                        (e.MuteTrailer = 'mute_trailer'),
                        (e.SelectSlideItem = 'select_slide_item'),
                        (e.Screenshot = 'screenshot'),
                        (e.SearchItemSelected = 'search_item_selected'),
                        (e.ShakeWave = 'shake_wave'),
                        (e.LumenAwakened = 'lumen_awakened'),
                        (e.Rename = 'rename');
                })(M || (M = {})),
                (function (e) {
                    (e.Fullscreen = 'fullscreen'),
                        (e.Bottomsheet = 'bottomsheet'),
                        (e.Tooltip = 'tooltip'),
                        (e.Dialog = 'dialog'),
                        (e.Popup = 'popup'),
                        (e.Miniplayer = 'miniplayer');
                })(F || (F = {})),
                (function (e) {
                    (e.Main = 'main'), (e.Podcasts = 'podcasts'), (e.Audiobooks = 'audiobooks'), (e.Kids = 'kids'), (e.Own = 'own'), (e.Concerts = 'concerts');
                })(D || (D = {})),
                (function (e) {
                    (e.Top = 'top'),
                        (e.Track = 'track'),
                        (e.Album = 'album'),
                        (e.Artist = 'artist'),
                        (e.Playlist = 'playlist'),
                        (e.Podcast = 'podcast'),
                        (e.Book = 'book'),
                        (e.Spoken = 'spoken'),
                        (e.KidsMusic = 'kids_music'),
                        (e.KidsPlaylist = 'kids_playlist'),
                        (e.KidsSpoken = 'kids_spoken'),
                        (e.SpokenPlaylist = 'spoken_playlist'),
                        (e.Video = 'video'),
                        (e.Clip = 'clip'),
                        (e.Other = 'other'),
                        (e.Concert = 'concert');
                })(O || (O = {})),
                (function (e) {
                    (e.Artist = 'artist'),
                        (e.Track = 'track'),
                        (e.Playlist = 'playlist'),
                        (e.Album = 'album'),
                        (e.Wave = 'wave'),
                        (e.Video = 'video'),
                        (e.Concert = 'concert');
                })(I || (I = {})),
                (function (e) {
                    (e.ArtistScreen = 'artist_screen'),
                        (e.AlbumScreen = 'album_screen'),
                        (e.CompilationsScreen = 'compilations_screen'),
                        (e.PlaylistScreen = 'playlist_screen'),
                        (e.TrackActionsScreen = 'track_actions_screen'),
                        (e.ShareScreen = 'share_screen'),
                        (e.AddTracksScreen = 'add_tracks_screen'),
                        (e.TextScreen = 'text_screen'),
                        (e.DescriptionScreen = 'description_screen'),
                        (e.SelectDeviceScreen = 'select_device_screen'),
                        (e.Link = 'link'),
                        (e.VideoScreen = 'video_screen'),
                        (e.VideoWaveScreen = 'video_wave_screen'),
                        (e.ConcertScreen = 'concert_screen'),
                        (e.ConcertPurchaseScreen = 'concert_purchase_screen');
                })(x || (x = {})),
                (function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium');
                })(B || (B = {})),
                (function (e) {
                    (e.Top = 'top'), (e.Bottom = 'bottom'), (e.Left = 'left'), (e.Right = 'right');
                })(W || (W = {})),
                (function (e) {
                    (e.PersonalResults = 'personal_results'),
                        (e.ArtistPersonalResults = 'artist_personal_results'),
                        (e.PodcastResults = 'podcast_results'),
                        (e.Special = 'special');
                })(j || (j = {})),
                (function (e) {
                    (e.Pult = 'pult'),
                        (e.PultWithStation = 'pult_with_station'),
                        (e.FullScreen = 'full_screen'),
                        (e.NonFullScreen = 'non_full_screen'),
                        (e.Bottomsheet = 'bottomsheet');
                })(U || (U = {})),
                (function (e) {
                    (e.Timer = 'timer'), (e.Cross = 'cross');
                })(V || (V = {})),
                (function (e) {
                    (e.Promotions = 'promotions'),
                        (e.Popular = 'popular'),
                        (e.TrackChart = 'track-chart'),
                        (e.AlbumChart = 'album-chart'),
                        (e.RecentlyPlayed = 'recently-played'),
                        (e.Editorial = 'editorial'),
                        (e.EditorialPlaylists = 'editorial-playlists'),
                        (e.PlaylistWithTracks = 'playlist-with-tracks'),
                        (e.Category = 'category'),
                        (e.CategoriesTab = 'categories-tab'),
                        (e.Radio = 'radio'),
                        (e.TimedShow = 'timed-show'),
                        (e.Menu = 'menu'),
                        (e.YearResultsPersonalPlaylist = 'year_results_personal_playlist'),
                        (e.TagCompilation = 'tag-compilation'),
                        (e.LikedPodcasts = 'liked_podcasts'),
                        (e.Shelf = 'shelf'),
                        (e.BookmateBanner = 'bookmateBanner'),
                        (e.MenuTab = 'menuTab'),
                        (e.ContinueListen = 'continue-listen');
                })(H || (H = {})),
                (function (e) {
                    (e.AlbumListScreen = 'album_list_screen'),
                        (e.PlaylistListScreen = 'playlist_list_screen'),
                        (e.AlbumChartScreen = 'album_chart_screen'),
                        (e.TrackChartScreen = 'track_chart_screen'),
                        (e.PlaylistScreen = 'playlist_screen'),
                        (e.StoriesScreen = 'stories_screen'),
                        (e.GenreScreen = 'genre_screen'),
                        (e.NewReleasesTabScreen = 'new_releases_tab_screen'),
                        (e.ChartTabScreen = 'chart_tab_screen'),
                        (e.MixesTabScreen = 'mixes_tab_screen'),
                        (e.RecentlyPlayedScreen = 'recentlyPlayedScreen'),
                        (e.LikedScreen = 'likedScreen'),
                        (e.PodcastsTabScreen = 'podcasts_tab_screen');
                })(K || (K = {})),
                (function (e) {
                    (e.User = 'user'), (e.Smart = 'smart'), (e.Editor = 'editor'), (e.Liked = 'liked'), (e.Chart = 'chart'), (e.Unknown = 'unknown');
                })(q || (q = {})),
                (function (e) {
                    (e.AlbumListScreen = 'album_list_screen'),
                        (e.PlaylistListScreen = 'playlist_list_screen'),
                        (e.PlaylistScreen = 'playlist_screen'),
                        (e.AlbumScreen = 'album_screen'),
                        (e.TreesScreen = 'trees_screen'),
                        (e.StoriesScreen = 'stories_screen'),
                        (e.Link = 'link');
                })(G || (G = {})),
                (function (e) {
                    (e.Square = 'square'), (e.Rectangle = 'rectangle'), (e.RectangleWithRecently = 'rectangle_with_recently'), (e.Unknown = 'unknown');
                })(z || (z = {})),
                (function (e) {
                    (e.CLICK = 'click'), (e.SWIPE = 'swipe'), (e.PINCH = 'pinch'), (e.DRAG = 'drag');
                })(Q || (Q = {}));
        },
        29222: (e, n, t) => {
            t.d(n, { t: () => i });
            var r = (function () {
                    var e = function (n, t) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, n) {
                                    e.__proto__ = n;
                                }) ||
                            function (e, n) {
                                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                            })(n, t);
                    };
                    return function (n, t) {
                        if ('function' != typeof t && null !== t) throw TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
                        function r() {
                            this.constructor = n;
                        }
                        e(n, t), (n.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    };
                })(),
                c = function (e, n) {
                    var t = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > n.indexOf(r) && (t[r] = e[r]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                        for (var c = 0, r = Object.getOwnPropertySymbols(e); c < r.length; c++)
                            0 > n.indexOf(r[c]) && Object.prototype.propertyIsEnumerable.call(e, r[c]) && (t[r[c]] = e[r[c]]);
                    return t;
                },
                i = (function (e) {
                    function n(t, r) {
                        void 0 === r && (r = {});
                        var i = this,
                            o = r.code,
                            s = r.data,
                            a = c(r, ['code', 'data']),
                            l = t || 'Internal error';
                        return (
                            Object.defineProperty((i = e.call(this, l, a) || this), 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'BaseException' }),
                            Object.defineProperty(i, 'message', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(i, 'code', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(i, 'data', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(i, 'stack', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (i.message = l),
                            (i.code = void 0 === o ? 'E_INTERNAL' : o),
                            (i.data = void 0 === s ? {} : s),
                            (i.stack = Error(l).stack),
                            Object.setPrototypeOf(i, n.prototype),
                            i
                        );
                    }
                    return r(n, e), n;
                })(Error);
        },
        34186: (e, n, t) => {
            t.d(n, { B: () => i, N: () => o });
            var r = t(29222),
                c = t(55178);
            let i = (0, c.createContext)(null);
            function o() {
                let e = (0, c.useContext)(i);
                if (null === e) throw new r.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        62376: (e, n, t) => {
            t.d(n, { U: () => i });
            var r = t(70204),
                c = t(34186);
            let i = () => (0, c.N)().get(r.Zf);
        },
        70204: (e, n, t) => {
            t.d(n, {
                $$: () => er,
                $5: () => es,
                $8: () => P,
                $I: () => S,
                $Y: () => eC,
                A4: () => d,
                CN: () => Z,
                CR: () => u,
                DP: () => A,
                DT: () => ey,
                E: () => h,
                EN: () => r,
                Ez: () => eo,
                Hm: () => o,
                JM: () => en,
                K1: () => U,
                LC: () => eS,
                Lb: () => k,
                Lk: () => et,
                N1: () => el,
                NN: () => I,
                O9: () => E,
                OP: () => _,
                Oo: () => L,
                P0: () => y,
                P1: () => J,
                PL: () => eh,
                QG: () => N,
                RG: () => eL,
                SX: () => ep,
                TD: () => eu,
                TK: () => i,
                Tq: () => eA,
                U2: () => w,
                UB: () => ew,
                Ut: () => j,
                V3: () => m,
                VR: () => eT,
                W5: () => eb,
                WA: () => H,
                X4: () => R,
                X8: () => D,
                Xc: () => Y,
                Zf: () => c,
                Zi: () => ev,
                Zl: () => X,
                _1: () => p,
                aE: () => K,
                by: () => eg,
                c9: () => Q,
                cZ: () => $,
                dA: () => eP,
                dh: () => em,
                en: () => G,
                eu: () => V,
                ff: () => e_,
                gd: () => ei,
                gu: () => s,
                jQ: () => z,
                ki: () => q,
                mr: () => l,
                nM: () => W,
                ni: () => eR,
                ok: () => F,
                oo: () => f,
                qN: () => x,
                qT: () => ea,
                re: () => ee,
                ro: () => B,
                sv: () => ec,
                tw: () => v,
                tz: () => g,
                u2: () => ed,
                uM: () => ek,
                vH: () => T,
                vg: () => ef,
                wH: () => M,
                wK: () => b,
                y$: () => a,
                yq: () => O,
                zj: () => C,
            });
            let r = 'AfterTrackResource',
                c = 'Logger',
                i = 'ModelActionsLogger',
                o = 'HttpClient',
                s = 'HttpBeaconClient',
                a = 'Slam',
                l = 'UgcUploadHttpClient',
                _ = 'BaseResourceHttpClient',
                d = 'ResourceHttpClient',
                u = 'ResourceBeaconClient',
                S = 'AccountResource',
                p = 'UsersResource',
                m = 'LandingResource',
                b = 'LandingBlocksResource',
                k = 'Landing3Resource',
                g = 'AlbumResource',
                h = 'SlidesResource',
                v = 'Config',
                y = 'TokenConfig',
                f = 'Storage',
                A = 'CookieStorage',
                w = 'LocalStorage',
                P = 'LibraryResource',
                C = 'LumenResource',
                L = 'TracksResource',
                T = 'SessionStorage',
                R = 'TopResource',
                E = 'ArtistsResource',
                N = 'Authorization',
                M = 'RedAlertResource',
                F = 'RotorResource',
                D = 'WaveResource',
                O = 'SearchResource',
                I = 'SearchPlaylistResource',
                x = 'PlaylistResource',
                B = 'PlaylistsResource',
                W = 'PinResource',
                j = 'MetatagsResource',
                U = 'TagResource',
                V = 'FeedResource',
                H = 'CONTAINER_USER_ID_TOKEN',
                K = 'PinsResource',
                q = 'MusicHistoryResource',
                G = 'ChartResource',
                z = 'ClipsResource',
                Q = 'DynamicPagesResource',
                Y = 'CONTAINER_I18N_STORAGE',
                $ = 'LyricViewsResource',
                X = 'NonMusicResource',
                Z = 'DonationResource',
                J = 'LoaderResource',
                ee = 'PrefixlessResource',
                en = 'StreamsResource',
                et = 'FiltersResource',
                er = 'UgcResource',
                ec = 'CollectionResource',
                ei = 'AdsResource',
                eo = 'PersonalResource',
                es = 'AvailabilityResource',
                ea = 'GetFileInfoResource',
                el = 'DisclaimersResource',
                e_ = 'DisclaimerDictionary',
                ed = 'FamilyResource',
                eu = 'ChildrenLandingResource',
                eS = 'TelemetryResource',
                ep = 'Env',
                em = 'PromoResource',
                eb = 'RumResource',
                ek = 'AcqOffers',
                eg = 'Ynison',
                eh = 'LabelsResource',
                ev = 'RequestExecutionContext',
                ey = 'ConcertsResource',
                ef = 'YaMetrikaController',
                eA = 'RumTransport',
                ew = 'YaMetrikaTransport',
                eP = 'WordsResource',
                eC = 'WheelResource',
                eL = 'MocksInitializer',
                eT = 'NetworkMonitorFactory',
                eR = 'SkeletonSdk';
        },
    },
]);
