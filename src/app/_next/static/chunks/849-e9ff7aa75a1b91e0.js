(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [849],
    {
        5245: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            var n = r(60754),
                o = r(55178);
            let l = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: l } = e,
                    s = (0, o.useRef)([]),
                    [i] = (0, o.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, o.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(i, e);
                        };
                        return e(), window.addEventListener(l, e), () => window.removeEventListener(l, e);
                    }, [r, l, i]),
                    { store: i, patchesRef: s }
                );
            };
        },
        8626: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        14858: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => s });
            var n = r(60900),
                o = r(57594),
                l = r(79406);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, n.A)(),
                    { user: r, experiments: s } = (0, o.g)(),
                    i = 'ru' === r.account.data.userSessionRegionIso && s.checkExperiment(l.z.WebNextFooterDisclaimer, 'on'),
                    a = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return i ? t({ id: 'footer.disclaimer-content' }) : a;
            };
        },
        30310: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        31010: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => l });
            var n = r(55178);
            let o = (0, n.createContext)(null),
                l = () => (0, n.useContext)(o);
        },
        31726: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => i });
            var n = r(54280),
                o = r(70204),
                l = r(34186),
                s = r(62376);
            let i = () => {
                let e = (0, l.N)(),
                    t = e.get(o.oo),
                    r = e.get(o.uM),
                    i = e.get(o.ff),
                    a = e.get(o.tw),
                    c = e.get(o.P0),
                    u = (() => {
                        let e = (0, l.N)(),
                            t = e.get(o.$I),
                            r = e.get(o.EN),
                            n = e.get(o.N1),
                            s = e.get(o._1),
                            i = e.get(o.V3),
                            a = e.get(o.Lb),
                            c = e.get(o.wK),
                            u = e.get(o.tz),
                            d = e.get(o.$8),
                            g = e.get(o.Oo),
                            _ = e.get(o.X4),
                            p = e.get(o.O9),
                            h = e.get(o.E),
                            m = e.get(o.wH),
                            f = e.get(o.ok),
                            E = e.get(o.X8),
                            S = e.get(o.yq),
                            x = e.get(o.NN),
                            v = e.get(o.qN),
                            y = e.get(o.ro),
                            w = e.get(o.nM),
                            A = e.get(o.Ut),
                            T = e.get(o.K1),
                            N = e.get(o.eu),
                            O = e.get(o.aE),
                            R = e.get(o.ki),
                            C = e.get(o.c9),
                            I = e.get(o.en),
                            P = e.get(o.jQ),
                            L = e.get(o.cZ),
                            k = e.get(o.Zl),
                            j = e.get(o.CN),
                            F = e.get(o.P1),
                            M = e.get(o.zj),
                            b = e.get(o.re),
                            H = e.get(o.JM),
                            D = e.get(o.Lk),
                            W = e.get(o.$$),
                            Y = e.get(o.sv),
                            G = e.get(o.gd),
                            U = e.get(o.Ez),
                            X = e.get(o.u2),
                            $ = e.get(o.TD),
                            K = e.get(o.dh),
                            J = e.get(o.LC),
                            z = e.get(o.PL),
                            V = e.get(o.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: r,
                            disclaimersResource: n,
                            usersResource: s,
                            landingResource: i,
                            landing3Resource: a,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: g,
                            topResource: _,
                            artistsResource: p,
                            slidesResource: h,
                            redAlertResource: m,
                            rotorResource: f,
                            waveResource: E,
                            searchResource: S,
                            searchPlaylistResource: x,
                            playlistResource: v,
                            playlistsResource: y,
                            pinResource: w,
                            metatagsResource: A,
                            tagResource: T,
                            feedResource: N,
                            pinsResource: O,
                            musicHistoryResource: R,
                            dynamicPagesResource: C,
                            chartResource: I,
                            clipsResource: P,
                            lyricViewsResource: L,
                            nonMusicResource: k,
                            donationResource: j,
                            loaderResource: F,
                            lumenResource: M,
                            prefixlessResource: b,
                            streamsResource: H,
                            filtersResource: D,
                            ugcResource: W,
                            collectionResource: Y,
                            adsResource: G,
                            personalResource: U,
                            familyResource: X,
                            childrenLandingResource: $,
                            promoResource: K,
                            telemetryResource: J,
                            labelsResource: z,
                            concertsResource: V,
                            wordsResource: e.get(o.dA),
                            wheelResource: e.get(o.$Y),
                        };
                    })(),
                    d = (0, s.U)(),
                    g = (0, l.N)().get(o.TK),
                    _ = e.get(o.ni),
                    p = new n.si(),
                    h = new n.fW();
                return {
                    ...u,
                    acqOffers: r,
                    disclaimerDictionary: i,
                    logger: d,
                    modelActionsLogger: g,
                    localStorage: p,
                    sessionStorage: h,
                    containerStorage: t,
                    config: a,
                    clientSafeConfig: c,
                    landingSdk: _,
                };
            };
        },
        32468: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var n = r(32290),
                o = r(77088),
                l = r.n(o);
            let s = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: l().empty });
            };
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        45066: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            let n = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => m });
            var n = r(32290),
                o = r(63618),
                l = r(8055),
                s = r(55178);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: o, ...l } = e,
                        s = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        i = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': s, style: { ...t }, ref: r, ...l });
                },
                a = (0, s.forwardRef)((e, t) => (0, n.jsx)(i, { forwardRef: t, ...e }));
            var c = r(39684),
                u = r.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: r, withFooter: l, withHeader: s, withForceScroll: i, ...a } = e;
                    return (0, n.jsx)('div', {
                        className: (0, o.$)(u().scroller, { [u().scroller_withFooter]: l, [u().scroller_withHeader]: s, [u().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: r,
                        ...a,
                        tabIndex: -1,
                    });
                },
                g = (0, s.forwardRef)((e, t) => (0, n.jsx)(d, { forwardRef: t, ...e }));
            var _ = r(62060),
                p = r(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: l = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            ...u
                        } = e,
                        [d, g] = (0, s.useState)(null),
                        h = (0, s.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == o || o(e), a.length > 0 && g(e), t && r)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < n; e++) r(e);
                                    }
                                }, l),
                            [l, o, t, r, a],
                        );
                    (0, s.useEffect)(() => {
                        a.length > 0 && d && h(d);
                    }, a);
                    let m = (0, s.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, n.jsx)(p.sN, { rangeChanged: h, totalCount: i, endReached: m, ...u });
                },
                m = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: i,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: m = 700,
                            pageSize: f = 20,
                            totalCount: E,
                            totalRequests: S,
                            debounceDurationInMs: x,
                            initialItemCount: v,
                            minInitialItemCount: y = 20,
                            handleRef: w,
                            alwaysShowScrollbar: A = !1,
                            testId: T,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: O,
                            ...R
                        } = e,
                        [C, I] = (0, s.useState)(!1),
                        P = (0, s.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    I(e);
                                }, 100),
                            [],
                        ),
                        L = (0, s.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: g,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : a,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: g,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : a,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, S, N]),
                        k = v ? Math.min(v, y) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(u().root, { [u().root_scrolling]: C || A, [u().root_notScrolling]: !C && !A }, t),
                        'data-test-id': T,
                        children: [
                            N && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, n.jsx)(h, {
                                overscan: m,
                                components: L,
                                listClassName: p,
                                itemClassName: d,
                                isScrolling: P,
                                itemContent: _,
                                scrollerRef: w,
                                totalCount: E,
                                pageSize: f,
                                onPageHandler: i,
                                onRangeHandler: c,
                                debounceDurationInMs: x,
                                initialItemCount: k,
                                shouldTriggerRangeChangedOn: O,
                                ...R,
                            }),
                            N && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        49259: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => m, s: () => f });
            var n = r(32290),
                o = r(29222),
                l = r(96103),
                s = r(21916),
                i = r(55178),
                a = r(80451),
                c = r(96218),
                u = r(5245),
                d = r(57594),
                g = r(31726);
            (0, l.eO)(!1);
            let _ = (0, i.createContext)(null),
                p = (e) => {
                    let { children: t, store: r, storeKey: o } = e,
                        l = (0, i.useMemo)(() => ({ store: r, storeKey: o }), [r, o]);
                    return (0, n.jsx)(_.Provider, { value: l, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: o } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = o.current;
                            return ((o.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, a.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                m = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        o = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: l, nonce: s } = e,
                                i = (0, g.Y)(),
                                a = (0, d.g)(),
                                { store: _, patchesRef: m } = (0, u.m)({
                                    createStore: () => t({ ...i, rootStore: a }),
                                    getPendingPatchBatches: o,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(h, { nonce: s, patchKey: r, patchesRef: m }), (0, n.jsx)(p, { store: _, storeKey: r, children: l })],
                            });
                        },
                    };
                };
            function f(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, i.useContext)(_);
                if (!r || r.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == r ? void 0 : r.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        54280: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => l, si: () => i, fW: () => g, MJ: () => d, jU: () => p, Bx: () => _ });
            var n = r(78061);
            function o(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return console.error(e), null;
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let s = (0, n.Jt)(e);
                        if (t) {
                            var r, l;
                            return null != (l = null == (r = o(s)) ? void 0 : r.value) ? l : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let l = o ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, l, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, n.TF)(e);
                    } catch (e) {}
                }
            }
            function s(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class i {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = s('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let l = r.getItem(e) || void 0;
                        if (!t) return l;
                        let s = o(l);
                        if (!s) return null;
                        let i = null != (n = null == s ? void 0 : s.value) ? n : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return this.remove(e), null;
                        return i;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e);
                    }
                    let n = s('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = r(91945),
                c = r(29222);
            class u extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype);
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    (0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t);
                }
            }
            class g {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, l;
                        let s = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (l = null == (r = o(s)) ? void 0 : r.value) ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = s('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            n = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            o = e.get(r);
                        null != o && e.set(r, o, n);
                    });
            }
            function p(e) {
                let { name: t, group: r, value: n } = e;
                return n && 0 !== Object.keys(n).length
                    ? n.title
                        ? { [t]: { group: r, value: { ...n, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: n } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => l, g: () => s });
            var n = r(29222),
                o = r(55178);
            let l = (0, o.createContext)(null);
            function s() {
                let e = (0, o.useContext)(l);
                if (null === e) throw new n.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58054: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => v });
            var n = r(32290),
                o = r(63618),
                l = r(96103),
                s = r(60900),
                i = r(39407),
                a = r(21732),
                c = r(71926),
                u = r(14858),
                d = r(8626),
                g = r(31010),
                _ = r(61945),
                p = r(57594),
                h = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let m = (e, t, r) => {
                switch (e) {
                    case h.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case h.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                    case h.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                    case h.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                    case h.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case h.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                    case h.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                }
            };
            var f = r(61258),
                E = r(77088),
                S = r.n(E);
            let x = (0, l.PA)((e) => {
                    let { className: t } = e,
                        { location: r } = (0, p.g)(),
                        { formatDate: l } = (0, s.A)(),
                        { language: u } = (0, _.h)();
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(S().copyrights, t),
                        'data-test-id': a.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: S().text,
                                children: [
                                    '\xa9 ',
                                    l(new Date(), (0, d.m)()),
                                    ' \xa0',
                                    (0, n.jsx)(f.N, {
                                        target: '_blank',
                                        href: m(h.YANDEX, r.tld, u),
                                        className: (0, o.$)(S().copyrightLink, S().yandexMusicLink),
                                        'data-test-id': a.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, n.jsx)(i.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(f.N, {
                                target: '_blank',
                                href: m(h.YANDEX_PROJECTS, r.tld, u),
                                className: S().copyrightLink,
                                'data-test-id': a.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, n.jsx)(i.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                v = (0, l.PA)((e) => {
                    var t;
                    let { className: r } = e,
                        { user: l, location: s } = (0, p.g)(),
                        { isEnabled: d } = null != (t = (0, g.P)()) ? t : {},
                        { language: E } = (0, _.h)(),
                        v = (0, u.w)(!0),
                        y = ((e) => {
                            let { platform: t, tld: r, language: o, userRegion: l } = e,
                                s = { title: (0, n.jsx)(i.A, { id: 'footer.links-copyright-holders' }), url: m(h.COPYRIGHT_HOLDER, r, o) },
                                a = { title: (0, n.jsx)(i.A, { id: 'footer.links-privacy-policy' }), url: m(h.PRIVACY_POLICY, r, o) },
                                c = { title: (0, n.jsx)(i.A, { id: 'footer.links-terms' }), url: m(h.AGREEMENT, r, o) },
                                u = { title: (0, n.jsx)(i.A, { id: 'footer.links-recommendation-rules' }), url: m(h.RECOMMENDATION_RULES, r, o) },
                                d = { title: (0, n.jsx)(i.A, { id: 'footer.links-help' }), url: m(h.HELP, r, o) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [s, c, u];
                                    return 'ru' === l && e.push(a), e.push(d), e;
                                }
                                case 'desktop':
                                    return [s, c, u, d];
                            }
                        })({ platform: 'desktop', tld: s.tld, language: E, userRegion: l.account.data.userSessionRegionIso });
                    return (0, n.jsxs)('footer', {
                        className: (0, o.$)(S().root, S().important, { [S().root_withOffsetForDeeplink]: d }, r),
                        'data-test-id': a.S7.FOOTER,
                        children: [
                            (0, n.jsxs)('div', {
                                className: S().links,
                                children: [
                                    (0, n.jsx)('ol', {
                                        className: S().list,
                                        'data-test-id': a.S7.FOOTER_LINKS_LIST,
                                        children: y.map((e) => {
                                            let { title: t, url: r } = e;
                                            return (0, n.jsx)(
                                                'li',
                                                {
                                                    className: S().item,
                                                    children: (0, n.jsx)(f.N, {
                                                        target: '_blank',
                                                        href: r,
                                                        className: S().link,
                                                        'data-test-id': a.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                r,
                                            );
                                        }),
                                    }),
                                    (0, n.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: S().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: v },
                                        'data-test-id': a.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(x, {}),
                        ],
                    });
                });
        },
        64170: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => v });
            var n = r(32290),
                o = r(63618),
                l = r(96103),
                s = r(55178),
                i = r(60900),
                a = r(39407),
                c = r(63423),
                u = r(82586),
                d = r(71926),
                g = r(16172),
                _ = r(52068),
                p = r(62376),
                h = r(37240),
                m = r(83920),
                f = r(20472),
                E = r(12894),
                S = r(30310),
                x = r.n(S);
            let v = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: l } = (0, i.A)(),
                    S = l({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, _.st)(),
                        { hash: r } = (0, _.gf)(),
                        { pageId: n } = (0, h.$)(),
                        o = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !r || !n) return;
                        let l = (0, g.Fx)({
                            params: {
                                entityType: g.LA.Error,
                                entityId: g.LA.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: n,
                                pageStyle: g.QL.Fullscreen,
                                pagePlacement: g.c4.Fullscreen,
                                mainObjectType: g.ky.NonApplicable,
                                mainObjectId: g.ky.NonApplicable,
                            },
                            logger: o,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, g.z5)(t.evgenInstance, l);
                    }, [t, e, r, n, o]);
                })(S);
                let { sendRefreshEvent: v } = (function () {
                        let e = (0, _.st)(),
                            { hash: t } = (0, _.gf)(),
                            { pageId: r } = (0, h.$)(),
                            n = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let o = (0, g.Fx)({
                                    params: {
                                        actionType: g.X2.Refresh,
                                        userInteractionType: g.gi.Tap,
                                        entityType: g.LA.Error,
                                        entityId: g.LA.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: g.QL.Fullscreen,
                                        pagePlacement: g.c4.Fullscreen,
                                        mainObjectType: g.ky.NonApplicable,
                                        mainObjectId: g.ky.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                o && (0, g.bv)(e.evgenInstance, o);
                            }, [e, t, r, n]),
                        };
                    })(),
                    y = (0, s.useCallback)(() => {
                        v(), (window.location.href = f.Z.main.href);
                    }, [v]),
                    { contentRef: w } = (0, m.g)();
                return (0, n.jsxs)('div', {
                    className: (0, o.$)(x().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(E.L, { withBackwardFallback: '/', className: (0, o.$)(x().navigation, { [x().navigation_desktop]: !w }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, o.$)(x().content, { [x().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(u.I, { className: x().icon, variant: 'attention', size: 'xxl' }),
                                (0, n.jsx)(d.DZ, { className: (0, o.$)(x().title, x().important), variant: 'h3', size: 'xs', children: S }),
                                (0, n.jsxs)(d.HL, {
                                    className: (0, o.$)(x().text, x().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, n.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, n.jsx)(c.$, {
                                    onClick: y,
                                    className: x().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, n.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, n.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        77088: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        78061: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => l, TF: () => i, hZ: () => s });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function o(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function l(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var o = r[n].split('='),
                            l = o.slice(1).join('=');
                        '"' === l[0] && (l = l.slice(1, -1));
                        try {
                            t[decodeURIComponent(o[0])] = l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, r) {
                var l;
                document.cookie =
                    ((l = n({ path: '/' }, r)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t);
                            }
                            return (
                                o('Expires', e.expires ? e.expires.toUTCString() : '') +
                                o('Domain', e.domain) +
                                o('Path', e.path) +
                                o('Secure', e.secure) +
                                o('SameSite', e.sameSite)
                            );
                        })(l));
            }
            function i(e, t) {
                s(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        85067: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, w: () => n });
            let n = 20,
                o = 20;
        },
        96218: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => o, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                o = 'yMusicPageStatePatchesUpdated';
        },
    },
]);
