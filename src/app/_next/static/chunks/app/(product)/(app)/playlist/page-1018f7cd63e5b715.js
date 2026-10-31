(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8209],
    {
        8840: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => c, Gv: () => o, L5: () => d });
            var i,
                a = r(53548),
                s = {
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let i = r(810),
                            { innerWidth: a = 0, innerHeight: s = 0 } = window;
                        function n(e) {
                            let { top: t, right: r, bottom: i, left: n } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= s) || (i >= 0 && i <= s)) && ((n >= 0 && n <= a) || (r >= 0 && r <= a));
                        }
                        function l(e) {
                            var t, r;
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, i)) ? r : e.attributes[0];
                        }
                        function o(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = n),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, r, a) {
                                let [{ freezeOnceVisible: s, preflightCheck: d, ...c }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, a],
                                    [_, h] = (0, i.useState)({}),
                                    m = (0, i.useRef)(new Set()),
                                    g = (0, i.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && g) {
                                                          if (m.current.has(t)) return;
                                                          (h((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              s && e.isIntersecting && (m.current.add(t), g.unobserve(e.target)));
                                                      }
                                                  }, c),
                                        [u],
                                    );
                                return (
                                    (0, i.useLayoutEffect)(
                                        () => (
                                            g &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (d && (t = n(e.current))) {
                                                            let t = l(e.current);
                                                            h((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || g.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                g && g.disconnect();
                                            }
                                        ),
                                        [u, g, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(a, 2));
                    },
                },
                n = {},
                l = (function e(t) {
                    var r = n[t];
                    if (void 0 !== r) return r.exports;
                    var i = (n[t] = { exports: {} });
                    return (s[t](i, i.exports, e), i.exports);
                })(597);
            l.__esModule;
            var o = l.createIntersectionObserver;
            l.defaultOptions;
            var d = l.getElementNameByDataAttribute;
            l.isInViewportNow;
            var c = l.useIntersectionObserver;
        },
        10312: (e) => {
            e.exports = {
                inner: 'PromoLandingHeader_inner__hKls8',
                header: 'PromoLandingHeader_header__gKwtu',
                container: 'PromoLandingHeader_container__JD5rw',
                leftBlock: 'PromoLandingHeader_leftBlock__jEcOR',
                title: 'PromoLandingHeader_title__LqClE',
                plusButton: 'PromoLandingHeader_plusButton__27yUf',
                backdrop: 'PromoLandingHeader_backdrop__AYF3a',
                root: 'PromoLandingHeader_root__zLOun',
                root_visible: 'PromoLandingHeader_root_visible__yB3YQ',
            };
        },
        16818: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => o });
            var i = r(53647),
                a = r(4086),
                s = r(41928),
                n = r(65523),
                l = r(57448);
            let o = () => {
                let e = (0, s.N)(),
                    t = e.get(a.oo),
                    r = e.get(a.QG),
                    o = e.get(a.uM),
                    d = e.get(a.ff),
                    c = e.get(a.V4),
                    u = e.get(a.P0),
                    _ = (0, l.f)(),
                    h = (0, n.U)(),
                    m = (0, s.N)().get(a.TK),
                    g = e.get(a.ni),
                    p = e.get(a.RD),
                    v = new i.si(),
                    E = new i.fW();
                return {
                    ..._,
                    acqOffers: o,
                    disclaimerDictionary: d,
                    logger: h,
                    modelActionsLogger: m,
                    localStorage: v,
                    sessionStorage: E,
                    containerStorage: t,
                    authorization: r,
                    config: c,
                    clientSafeConfig: u,
                    landingSdk: g,
                    tagSandbox: p,
                };
            };
        },
        28949: (e) => {
            e.exports = {
                inner: 'CommonHeader_inner__DFpbr',
                header: 'CommonHeader_header__41HAE',
                container: 'CommonHeader_container__Jgf0s',
                leftBlock: 'CommonHeader_leftBlock__dJUBK',
                title: 'CommonHeader_title__RSbBG',
                plusButton: 'CommonHeader_plusButton__oe8Gh',
            };
        },
        30385: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 59211));
        },
        34961: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => p, s: () => v });
            var i = r(88800),
                a = r(84961),
                s = r(58390),
                n = r(53548),
                l = r(35412),
                o = r(39499),
                d = r(89108),
                c = r(70003),
                u = r(72288),
                _ = r(16818);
            (0, a.eO)(!1);
            let h = (0, n.createContext)(null),
                m = (e) => {
                    let { children: t, store: r, storeKey: a } = e,
                        s = (0, n.useMemo)(() => ({ store: r, storeKey: a }), [r, a]);
                    return (0, i.jsx)(h.Provider, { value: s, children: t });
                },
                g = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: a } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, i.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(d.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                p = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        a = () => {
                            var e, t;
                            let i = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], i);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: n } = e,
                                l = (0, _.Y)(),
                                o = (0, u.g)(),
                                { store: h, patchesRef: p } = (0, c.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: d.O,
                                });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(g, { nonce: n, patchKey: r, patchesRef: p }), (0, i.jsx)(m, { store: h, storeKey: r, children: s })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, n.useContext)(h);
                if (!r || r.storeKey !== e) {
                    var i;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (i = null == r ? void 0 : r.storeKey) ? i : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        37080: (e) => {
            e.exports = {
                title: 'InnerHeader_title__5aVLP',
                title_show: 'InnerHeader_title_show__RvHsQ',
                show: 'InnerHeader_show__ji3KF',
                backdrop: 'InnerHeader_backdrop__iRxvk',
                root: 'InnerHeader_root__u0zu1',
                root_withChildren: 'InnerHeader_root_withChildren__rLTCN',
                root_sticky: 'InnerHeader_root_sticky__baN8o',
                child: 'InnerHeader_child__DGTfK',
                child_show: 'InnerHeader_child_show__7MFTV',
                actions: 'InnerHeader_actions__x6ruG',
                plusButton: 'InnerHeader_plusButton__eH4NP',
                plusButton_show: 'InnerHeader_plusButton_show__jwPtB',
            };
        },
        37670: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => s });
            var i = r(53548);
            r(30282);
            var a = r(58390);
            let s = (e) => {
                let t = (0, a.usePathname)(),
                    [r, s] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, r, t]));
            };
        },
        47294: (e) => {
            e.exports = {
                root: 'StickyHeader_root__s_rPg',
                backdrop: 'StickyHeader_backdrop__fCnOw',
                container: 'StickyHeader_container__8mTBx',
                container_scrolling: 'StickyHeader_container_scrolling__nV9EK',
                plusButton: 'StickyHeader_plusButton__80nx5',
                plusButton_show: 'StickyHeader_plusButton_show__lN22Y',
                children: 'StickyHeader_children__5Jlr1',
            };
        },
        48136: (e) => {
            e.exports = {
                backdrop: 'BrandedPlaylistHeader_backdrop__hLImj',
                title: 'BrandedPlaylistHeader_title__gPU9U',
                title_show: 'BrandedPlaylistHeader_title_show__e4u0h',
                show: 'BrandedPlaylistHeader_show__42bNL',
                title_withOffset: 'BrandedPlaylistHeader_title_withOffset__QppO0',
                root: 'BrandedPlaylistHeader_root__jXK4F',
                root_withChildren: 'BrandedPlaylistHeader_root_withChildren__6BMwV',
                root_sticky: 'BrandedPlaylistHeader_root_sticky__E_n81',
                root_blurWithTitle: 'BrandedPlaylistHeader_root_blurWithTitle__lmykd',
                child: 'BrandedPlaylistHeader_child__35wjg',
                child_show: 'BrandedPlaylistHeader_child_show__Uvbef',
                container: 'BrandedPlaylistHeader_container__s66Ay',
                container_withMultipleChildren: 'BrandedPlaylistHeader_container_withMultipleChildren__76B6E',
                header: 'BrandedPlaylistHeader_header__jdTQJ',
                actions: 'BrandedPlaylistHeader_actions__we7tI',
                leftBlock: 'BrandedPlaylistHeader_leftBlock__iSsfy',
            };
        },
        50322: (e) => {
            e.exports = {
                staticItem: 'TextHeader_staticItem__OMNew',
                staticItem_hide: 'TextHeader_staticItem_hide__JtdeC',
                backdrop: 'TextHeader_backdrop__39FkE',
                stickyItem: 'TextHeader_stickyItem__WF2hh',
                container: 'TextHeader_container__I0pVO',
                stickyItem_scrolling: 'TextHeader_stickyItem_scrolling__YPBOL',
            };
        },
        53647: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => s, si: () => l, fW: () => _, MJ: () => u, jU: () => m, Bx: () => h });
            var i = r(77451);
            function a(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let n = (0, i.Jt)(e);
                        if (t) {
                            var r, s;
                            return null != (s = null == (r = a(n)) ? void 0 : r.value) ? s : null;
                        }
                        return null != n ? n : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let s = a ? JSON.stringify({ value: t }) : t;
                        (0, i.hZ)(e, s, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, i.TF)(e);
                    } catch (e) {}
                }
            }
            function n(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = n('localStorage');
                    if (!r) return null;
                    try {
                        var i;
                        let s = r.getItem(e) || void 0;
                        if (!t) return s;
                        let n = a(s);
                        if (!n) return null;
                        let l = null != (i = null == n ? void 0 : n.value) ? i : null;
                        if ((null == n ? void 0 : n.expires) && Date.now() > new Date(n.expires).getTime()) return (this.remove(e), null);
                        return l;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let i = n('localStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = n('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = r(9519),
                d = r(39499);
            class c extends d.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...i } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...i }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            class u {
                get(e) {
                    throw new c(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new c(this.platform, this.type);
                }
                has(e) {
                    throw new c(this.platform, this.type);
                }
                remove(e) {
                    throw new c(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class _ {
                get(e) {
                    let t = n('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, i, s;
                        let n = null != (i = t.getItem(e)) ? i : void 0;
                        return null != (s = null == (r = a(n)) ? void 0 : r.value) ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = n('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = n('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            i = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            a = e.get(r);
                        null != a && e.set(r, a, i);
                    });
            }
            function m(e) {
                let { name: t, group: r, value: i } = e;
                return i && 0 !== Object.keys(i).length
                    ? i.title
                        ? { [t]: { group: r, value: { ...i, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: i } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        53892: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            let i = {
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
        57448: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => s });
            var i = r(4086),
                a = r(41928);
            let s = () => {
                let e = (0, a.N)(),
                    t = e.get(i.$I),
                    r = e.get(i.EN),
                    s = e.get(i.N1),
                    n = e.get(i._1),
                    l = e.get(i.V3),
                    o = e.get(i.Lb),
                    d = e.get(i.wK),
                    c = e.get(i.tz),
                    u = e.get(i.$8),
                    _ = e.get(i.Oo),
                    h = e.get(i.X4),
                    m = e.get(i.O9),
                    g = e.get(i.E),
                    p = e.get(i.wH),
                    v = e.get(i.ok),
                    E = e.get(i.X8),
                    y = e.get(i.yq),
                    f = e.get(i.NN),
                    S = e.get(i.qN),
                    N = e.get(i.ro),
                    T = e.get(i.nM),
                    w = e.get(i.Ut),
                    x = e.get(i.K1),
                    P = e.get(i.eu),
                    b = e.get(i.SD),
                    I = e.get(i.aE),
                    C = e.get(i.ki),
                    A = e.get(i.c9),
                    H = e.get(i.en),
                    R = e.get(i.jQ),
                    L = e.get(i.cZ),
                    O = e.get(i.Zl),
                    k = e.get(i.CN),
                    j = e.get(i.P1),
                    B = e.get(i.zj),
                    D = e.get(i.re),
                    U = e.get(i.JM),
                    G = e.get(i.Lk),
                    M = e.get(i.$$),
                    K = e.get(i.sv),
                    V = e.get(i.gd),
                    Y = e.get(i.Ez),
                    F = e.get(i.u2),
                    $ = e.get(i.TD),
                    X = e.get(i.dh),
                    J = e.get(i.LC),
                    z = e.get(i.PL),
                    W = e.get(i.DT);
                return {
                    accountResource: t,
                    afterTrackResource: r,
                    disclaimersResource: s,
                    usersResource: n,
                    landingResource: l,
                    landing3Resource: o,
                    landingBlocksResource: d,
                    albumResource: c,
                    libraryResource: u,
                    tracksResource: _,
                    topResource: h,
                    artistsResource: m,
                    slidesResource: g,
                    redAlertResource: p,
                    rotorResource: v,
                    waveResource: E,
                    searchResource: y,
                    searchPlaylistResource: f,
                    playlistResource: S,
                    playlistsResource: N,
                    pinResource: T,
                    metatagsResource: w,
                    tagResource: x,
                    feedResource: P,
                    wizard3Resource: b,
                    pinsResource: I,
                    musicHistoryResource: C,
                    dynamicPagesResource: A,
                    chartResource: H,
                    clipsResource: R,
                    lyricViewsResource: L,
                    nonMusicResource: O,
                    donationResource: k,
                    loaderResource: j,
                    lumenResource: B,
                    prefixlessResource: D,
                    streamsResource: U,
                    filtersResource: G,
                    ugcResource: M,
                    collectionResource: K,
                    adsResource: V,
                    personalResource: Y,
                    familyResource: F,
                    childrenLandingResource: $,
                    promoResource: X,
                    telemetryResource: J,
                    labelsResource: z,
                    concertsResource: W,
                    wordsResource: e.get(i.dA),
                    wheelResource: e.get(i.$Y),
                };
            };
        },
        59211: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => b }));
            var i = r(88800),
                a = r(53548),
                s = r(58390),
                n = r(34961),
                l = r(53892),
                o = r(5120),
                d = r(89916),
                c = r(74773),
                u = r(67174),
                _ = r(59497);
            let h = o.gK
                    .compose(
                        o.gK.model('PlaylistPersonalPage', {
                            errorStatusCode: o.gK.maybeNull(o.gK.number),
                            playlistUuid: o.gK.maybe(o.gK.string),
                            isReady: o.gK.optional(o.gK.boolean, !1),
                            dummyCoverUrl: o.gK.maybe(o.gK.string),
                            dummyDescription: o.gK.maybe(o.gK.string),
                            title: o.gK.maybe(o.gK.string),
                        }),
                        _.X,
                    )
                    .views((e) => ({
                        getUrl(t) {
                            if (!e.playlistUuid) return '';
                            let { href: r } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid }, query: t });
                            return r;
                        },
                        get url() {
                            if (!e.playlistUuid) return '';
                            let { href: t } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === d.X1.NOT_FOUND || e.errorStatusCode === d.X1.BAD_REQUEST;
                            return e.loadingState === c.G.REJECT && t;
                        },
                    }))
                    .actions((e) => ({
                        getPlaylistPersonalDetails: (0, o.L3)(function* (t) {
                            if (!(0, o._n)(e)) return;
                            let { playlistsResource: r, modelActionsLogger: i } = (0, o._$)(e);
                            if (e.loadingState !== c.G.PENDING)
                                try {
                                    var a, s;
                                    e.loadingState = c.G.PENDING;
                                    let i = yield r.getPlaylistPersonal({ playlistId: t });
                                    if ((null == (a = i.error) ? void 0 : a.name) === 'no-such-playlist') {
                                        ((e.errorStatusCode = d.X1.NOT_FOUND), (e.loadingState = c.G.REJECT));
                                        return;
                                    }
                                    ((e.isReady = i.ready),
                                        (e.playlistUuid = i.data.playlistUuid),
                                        (e.dummyCoverUrl = null == (s = i.data.dummyCover) ? void 0 : s.uri),
                                        (e.dummyDescription = i.data.dummyDescription),
                                        (e.title = i.data.title),
                                        e.loadingState !== c.G.IDLE && (e.loadingState = c.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t),
                                        t instanceof d.GX &&
                                            (t.statusCode === d.X1.NOT_FOUND || t.statusCode === d.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = d.X1.NOT_FOUND),
                                        e.loadingState !== c.G.IDLE && (e.loadingState = c.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = c.G.IDLE),
                                (e.errorStatusCode = null),
                                (e.isReady = !1),
                                (e.playlistUuid = void 0),
                                (e.dummyCoverUrl = void 0),
                                (e.dummyDescription = void 0),
                                (e.title = void 0));
                        },
                    })),
                m = { loadingState: c.G.IDLE },
                { pageStoreProvider: g } = (0, n.W)({ createStore: (e) => h.create(m, e), patchKey: l.n.PLAYLIST_PERSONAL });
            var p = r(84961),
                v = r(37670),
                E = r(65724),
                y = r(29504),
                f = r(81877),
                S = r(93317),
                N = r(69935),
                T = r.n(N);
            let w = (0, p.PA)(() => {
                    let { dummyCoverUrl: e, dummyDescription: t, title: r } = (0, n.s)(l.n.PLAYLIST_PERSONAL);
                    return (0, i.jsxs)('div', {
                        className: T().root,
                        children: [
                            (0, i.jsx)(S.Y, {}),
                            (0, i.jsx)(f.B, { src: e, size: 200, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: T().cover }),
                            r && (0, i.jsx)(y.DZ, { className: (0, E.$)(T().title, T().important), variant: 'h1', size: 'xs', children: r }),
                            t &&
                                (0, i.jsx)(y.HL, {
                                    className: (0, E.$)(T().text, T().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: t,
                                }),
                        ],
                    });
                }),
                x = (0, p.PA)((e) => {
                    let { params: t, searchParams: r } = e,
                        o = (0, n.s)(l.n.PLAYLIST_PERSONAL),
                        d = o.getUrl(r);
                    if (
                        ((0, a.useEffect)(() => {
                            o.isNeededToLoad && o.getPlaylistPersonalDetails(t.playlistId);
                        }, [o.isNeededToLoad, t.playlistId, o]),
                        (0, a.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        (0, v.J)(o.isResolved),
                        (o.isNotFound || o.isRejected) && (0, s.notFound)(),
                        o.isResolved && !o.isReady)
                    )
                        return (o.dummyDescription || (0, s.notFound)(), (0, i.jsx)(w, {}));
                    o.isResolved && o.isReady && (0, s.redirect)(d);
                });
            var P = r(87396);
            let b = () => {
                let e = (0, s.useSearchParams)().get('playlistId');
                return (
                    e || (0, s.notFound)(),
                    (0, i.jsx)(g, {
                        children: (0, i.jsx)(a.Suspense, { fallback: (0, i.jsx)(P.MainSuspenseLoader, {}), children: (0, i.jsx)(x, { params: { playlistId: e } }) }),
                    })
                );
            };
        },
        59497: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => s });
            var i = r(5120),
                a = r(74773);
            let s = i.gK.model('LoadingState', { loadingState: i.gK.enumeration(Object.values(a.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === a.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === a.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === a.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === a.G.REJECT;
                },
            }));
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        63807: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(53548).createContext)({
                title: null,
                setTitle: () => {},
                titleElement: null,
                scrollElement: null,
                setTitleElement: () => {},
                child: null,
                setChild: () => {},
                childElement: null,
                setChildElement: () => {},
                isScrolledChild: !1,
                isScrolledTitle: !1,
                isScrolling: !1,
                isHeaderHidden: !1,
            });
        },
        65508: (e) => {
            e.exports = { static: 'CompositeHeader_static__pZdrc', static_hidden: 'CompositeHeader_static_hidden__jHPYh' };
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => l });
            var i = r(4086),
                a = r(41928),
                s = r(44084);
            let n = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = n.get(e);
                        if (t) return t;
                        let r = {
                            log: (t, r) => e.info(t, r),
                            trace: (t, r) => e.trace(t, r),
                            debug: (t, r) => e.debug(t, r),
                            info: (t, r) => e.info(t, r),
                            warn: (t, r) => e.warn(t, r),
                            error: (t, r) => e.error(t, r),
                            fatal: (t, r) => e.fatal(t, r),
                            child: (t) => e.child(t),
                        };
                        return (n.set(e, r), r);
                    })((0, a.N)().get(i.Zf));
        },
        69935: (e) => {
            e.exports = {
                root: 'PlaylistPersonalDummyPage_root__tGxHG',
                cover: 'PlaylistPersonalDummyPage_cover__XcCD1',
                title: 'PlaylistPersonalDummyPage_title__ZSf9O',
                important: 'PlaylistPersonalDummyPage_important__uEHGe',
                text: 'PlaylistPersonalDummyPage_text__ci30d',
            };
        },
        70003: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => s });
            var i = r(5120),
                a = r(53548);
            let s = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: s } = e,
                    n = (0, a.useRef)([]),
                    [l] = (0, a.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, i.X6)(e, t);
                        return e;
                    });
                return (
                    (0, a.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, i.X6)(l, e);
                        };
                        return (e(), window.addEventListener(s, e), () => window.removeEventListener(s, e));
                    }, [r, s, l]),
                    { store: l, patchesRef: n }
                );
            };
        },
        81877: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => o });
            var i = r(88800),
                a = r(53548),
                s = r(17392),
                n = r(90688);
            let l = (e) => {
                    let { isAvailable: t = !0, className: r, fallbackIconSize: a, forwardRef: l, ...o } = e;
                    return t
                        ? (0, i.jsx)(n._V, { ref: l, className: r, fallbackIconSize: a, ...o, 'data-test-id': s.S7.ENTITY_COVER_IMAGE })
                        : (0, i.jsx)(n.Ab, { className: r, iconSize: a, iconVariant: 'unavailable', 'data-test-id': s.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                o = (0, a.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
        },
        87396: (e, t, r) => {
            'use strict';
            r.d(t, { MainSuspenseLoader: () => l });
            var i = r(88800),
                a = r(52300),
                s = r(60932),
                n = r.n(s);
            let l = (e) => {
                let { style: t } = e,
                    r = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, i.jsx)('div', {
                    style: r,
                    children: (0, i.jsx)(a.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: n().icon,
                    }),
                });
            };
        },
        89108: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => a, s: () => i });
            let i = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
        93317: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => F, V: () => Y });
            var i = r(88800),
                a = r(84961),
                s = r(44450),
                n = r(26e3),
                l = r(40210),
                o = r(65724),
                d = r(53548),
                c = r(17392),
                u = r(29993),
                _ = r(50408),
                h = r(29504),
                m = r(86462),
                g = r(72288),
                p = r(91051),
                v = r(56248),
                E = r(28949),
                y = r.n(E),
                f = r(63807),
                S = r(48136),
                N = r.n(S);
            let T = 'header-block-controls',
                w = (0, a.PA)((e) => {
                    let { showControls: t = !0, ...r } = e,
                        { isScrolledTitle: a, isScrolledChild: s, isScrolling: n, title: l, titleElement: E, child: S, childElement: w } = (0, d.useContext)(f.B),
                        {
                            settings: { isMobile: x, browserInfo: P },
                            user: { hasPlus: b, isAuthorized: I },
                        } = (0, g.g)(),
                        [C, A] = (0, _.d)(),
                        H = !b && !(null == P ? void 0 : P.isTouch),
                        {
                            openPaymentWidgetModal: R,
                            saveOfferAndAuthorize: L,
                            isShimmerActive: O,
                            isShimmerVisible: k,
                            mainText: j,
                            mainTextA11y: B,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !b, offerElement: { element: C, intersectionPropertyId: T, isVisible: a, requireTransition: !0 } }),
                        D = (0, u.c)(() => {
                            var e;
                            null == E || null == (e = E.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        U = (0, u.c)(() => {
                            var e;
                            null == w || null == (e = w.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        G = (0, u.c)(() => {
                            if (!I) return void L();
                            R();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, o.$)(N().root, { [N().root_sticky]: n, [N().root_withChildren]: s, [N().root_blurWithTitle]: !a }),
                        'data-test-id': c.S7.BRANDED_PLAYLIST_HEADER,
                        ...r,
                        children: (0, i.jsx)('div', {
                            className: N().header,
                            children: (0, i.jsxs)('div', {
                                className: (0, o.$)(N().container, { [N().container_withMultipleChildren]: (0, d.isValidElement)(S) }),
                                children: [
                                    (0, i.jsx)('div', { className: N().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: N().leftBlock,
                                        children: [
                                            t && (0, i.jsx)(v.L, { withForwardControl: !x, className: N().actions }),
                                            a &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(h.HL, {
                                                            variant: 'div',
                                                            type: 'text',
                                                            className: (0, o.$)(N().title, { [N().title_show]: a, [N().title_withOffset]: t }),
                                                            lineClamp: 1,
                                                            onClick: D,
                                                            title: n && l ? l : '',
                                                            'aria-hidden': !0,
                                                            children: l,
                                                        }),
                                                        H &&
                                                            (0, i.jsx)(p.b, {
                                                                mainText: j,
                                                                ariaLabel: B,
                                                                mainTextFontSize: 'm',
                                                                ref: A,
                                                                onClick: G,
                                                                isShimmerActive: O,
                                                                isShimmerVisible: k,
                                                                className: y().plusButton,
                                                                'data-intersection-property-id': T,
                                                                'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                            }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    (0, d.isValidElement)(S) &&
                                        (0, i.jsx)('div', { onClick: U, className: (0, o.$)(N().child, { [N().child_show]: s }), 'aria-hidden': !0, children: S }),
                                ],
                            }),
                        }),
                    });
                });
            var x = r(47294),
                P = r.n(x);
            let b = 'header-block-controls',
                I = (e) => {
                    let { className: t, children: r, onClick: a, 'aria-hidden': s, 'data-test-id': n } = e,
                        { isScrolling: l } = (0, d.useContext)(f.B),
                        {
                            user: { hasPlus: h, isAuthorized: v },
                            settings: { browserInfo: E },
                        } = (0, g.g)(),
                        S = !h && !(null == E ? void 0 : E.isTouch),
                        [N, T] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: w,
                            saveOfferAndAuthorize: x,
                            isShimmerActive: I,
                            isShimmerVisible: C,
                            mainText: A,
                            mainTextA11y: H,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !h, offerElement: { element: N, intersectionPropertyId: b, isVisible: l, requireTransition: !0 } }),
                        R = (0, u.c)(() => {
                            if (!v) return void x();
                            w();
                        });
                    return (0, i.jsx)('div', {
                        className: P().root,
                        children: (0, i.jsxs)('div', {
                            className: (0, o.$)(P().container, { [P().container_scrolling]: l }, t),
                            onClick: a,
                            'aria-hidden': s,
                            'data-test-id': c.S7.STICKY_HEADER,
                            children: [
                                (0, i.jsx)('div', { className: P().backdrop }),
                                (0, i.jsx)('div', { className: P().children, 'data-test-id': n, children: r }),
                                S &&
                                    (0, i.jsx)(p.b, {
                                        mainText: A,
                                        ariaLabel: H,
                                        mainTextFontSize: 'm',
                                        ref: T,
                                        onClick: R,
                                        isShimmerActive: I,
                                        isShimmerVisible: C,
                                        className: (0, o.$)(y().plusButton, P().plusButton, { [P().plusButton_show]: l }),
                                        'data-intersection-property-id': b,
                                        'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                    }),
                            ],
                        }),
                    });
                };
            var C = r(65508),
                A = r.n(C);
            let H = (0, a.PA)((e) => {
                let {
                        className: t,
                        children: r,
                        stickyChild: a,
                        isScrolledToTop: s = !0,
                        staticClassName: n,
                        stickyClassName: l,
                        compositeHeaderRef: u,
                        'aria-hidden': _,
                    } = e,
                    { isScrolling: h, scrollElement: m } = (0, d.useContext)(f.B),
                    g = (0, d.useRef)(null),
                    p = (0, d.useCallback)(() => {
                        if (m && s) m.scrollTo({ top: 0, behavior: 'smooth' });
                        else {
                            var e;
                            null == g || null == (e = g.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }
                    }, [g, m, s]);
                return (0, i.jsxs)('header', {
                    className: (0, o.$)(A().root, t),
                    'aria-hidden': _,
                    ref: u,
                    'data-test-id': c.S7.COMPOSITE_HEADER_CONTAINER,
                    children: [
                        (0, i.jsx)('div', { className: (0, o.$)(A().static, { [A().static_hidden]: h }, n), ref: g, 'data-test-id': c.S7.COMPOSITE_HEADER, children: r }),
                        (0, i.jsx)(I, { className: l, onClick: p, 'aria-hidden': !0, 'data-test-id': c.S7.COMPOSITE_STICKY_HEADER, children: a }),
                    ],
                });
            });
            var R = r(37080),
                L = r.n(R);
            let O = 'header-block-controls',
                k = (0, a.PA)((e) => {
                    let { headerRef: t, ...r } = e,
                        { isScrolledTitle: a, isScrolledChild: s, isScrolling: n, title: l, titleElement: E, child: S, childElement: N } = (0, d.useContext)(f.B),
                        {
                            settings: { isMobile: T, browserInfo: w },
                            user: { hasPlus: x, isAuthorized: P },
                        } = (0, g.g)(),
                        [b, I] = (0, _.d)(),
                        C = !x && !(null == w ? void 0 : w.isTouch),
                        {
                            openPaymentWidgetModal: A,
                            saveOfferAndAuthorize: H,
                            isShimmerActive: R,
                            isShimmerVisible: k,
                            mainText: j,
                            mainTextA11y: B,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !x, offerElement: { element: b, intersectionPropertyId: O, isVisible: a, requireTransition: !0 } }),
                        D = (0, u.c)(() => {
                            var e;
                            null == E || null == (e = E.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        U = (0, u.c)(() => {
                            var e;
                            null == N || null == (e = N.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        G = (0, u.c)(() => {
                            if (!P) return void H();
                            A();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, o.$)(y().inner, L().root, { [L().root_sticky]: n, [L().root_withChildren]: s }),
                        ref: t,
                        'data-test-id': c.S7.INNER_HEADER,
                        ...r,
                        children: (0, i.jsx)('div', {
                            className: y().header,
                            children: (0, i.jsxs)('div', {
                                className: y().container,
                                children: [
                                    (0, i.jsx)('div', { className: L().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: y().leftBlock,
                                        children: [
                                            (0, i.jsx)(v.L, { withForwardControl: !T, className: L().actions }),
                                            (0, i.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, o.$)(y().title, L().title, { [L().title_show]: a }),
                                                lineClamp: 1,
                                                onClick: D,
                                                title: n && l ? l : '',
                                                'aria-hidden': !0,
                                                children: l,
                                            }),
                                            C &&
                                                (0, i.jsx)(p.b, {
                                                    mainText: j,
                                                    ariaLabel: B,
                                                    mainTextFontSize: 'm',
                                                    ref: I,
                                                    onClick: G,
                                                    isShimmerActive: R,
                                                    isShimmerVisible: k,
                                                    className: (0, o.$)(y().plusButton, L().plusButton, { [L().plusButton_show]: a }),
                                                    'data-intersection-property-id': O,
                                                    'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                    (0, i.jsx)('div', { onClick: U, className: (0, o.$)(L().child, { [L().child_show]: s }), 'aria-hidden': !0, children: S }),
                                ],
                            }),
                        }),
                    });
                });
            var j = r(10312),
                B = r.n(j);
            let D = 'header-block-controls',
                U = (e) => {
                    let { style: t } = e,
                        { isScrolling: r, title: a, titleElement: s, isScrolledTitle: n } = (0, d.useContext)(f.B),
                        {
                            user: { hasPlus: l, isAuthorized: v },
                            settings: { browserInfo: E },
                        } = (0, g.g)(),
                        S = !l && !(null == E ? void 0 : E.isTouch),
                        [N, T] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: w,
                            saveOfferAndAuthorize: x,
                            isShimmerActive: P,
                            isShimmerVisible: b,
                            mainText: I,
                            mainTextA11y: C,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !l, offerElement: { element: N, intersectionPropertyId: D, isVisible: n, requireTransition: !0 } }),
                        A = (0, u.c)(() => {
                            var e;
                            null == s || null == (e = s.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        H = (0, u.c)(() => {
                            if (!v) return void x();
                            w();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, o.$)(y().inner, B().root, { [B().root_visible]: n }),
                        style: t,
                        'data-test-id': c.S7.PROMO_LANDING_HEADER,
                        children: (0, i.jsx)('div', {
                            className: y().header,
                            children: (0, i.jsxs)('div', {
                                className: (0, o.$)(y().container, B().container),
                                children: [
                                    (0, i.jsx)('div', { className: B().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: y().leftBlock,
                                        children: [
                                            (0, i.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, o.$)(y().title, B().title),
                                                lineClamp: 1,
                                                onClick: A,
                                                title: r && a ? a : '',
                                                'aria-hidden': !0,
                                                children: a,
                                            }),
                                            S &&
                                                (0, i.jsx)(p.b, {
                                                    mainText: I,
                                                    ariaLabel: C,
                                                    mainTextFontSize: 'm',
                                                    ref: T,
                                                    onClick: H,
                                                    isShimmerActive: P,
                                                    isShimmerVisible: b,
                                                    className: y().plusButton,
                                                    'data-intersection-property-id': D,
                                                    'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var G = r(50322),
                M = r.n(G);
            let K = 'header-block-controls',
                V = (0, a.PA)((e) => {
                    let { className: t, children: r, showControls: a = !0, withForwardControl: s = !0, withBackwardControl: n = !0, disableStickyVariant: l = !1 } = e,
                        { isScrolling: E, title: S, scrollElement: N, isHeaderHidden: T } = (0, d.useContext)(f.B),
                        w = (0, d.useRef)(null),
                        [x, P] = (0, _.d)(),
                        {
                            user: { hasPlus: b, isAuthorized: I },
                            settings: { browserInfo: C },
                        } = (0, g.g)(),
                        A = !b && !(null == C ? void 0 : C.isTouch),
                        {
                            openPaymentWidgetModal: H,
                            saveOfferAndAuthorize: R,
                            isShimmerActive: L,
                            isShimmerVisible: O,
                            mainText: k,
                            mainTextA11y: j,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !b, offerElement: { element: x, intersectionPropertyId: K, isVisible: E, requireTransition: !0 } }),
                        B = (0, u.c)(() => {
                            if (N) N.scrollTo({ top: 0, behavior: 'smooth' });
                            else {
                                var e;
                                null == w || null == (e = w.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                            }
                        }),
                        D = (0, d.useMemo)(() => (0, i.jsx)(h.DZ, { variant: 'h2', weight: 'bold', size: 's', lineClamp: 1, children: S }), [S]),
                        U = a && (s || n),
                        G = (0, u.c)(() => {
                            if (!I) return void R();
                            H();
                        });
                    return (0, i.jsxs)('header', {
                        className: (0, o.$)(M().root, t),
                        'data-test-id': c.S7.TEXT_HEADER_CONTAINER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, o.$)(M().staticItem, { [M().staticItem_hide]: E || T }),
                                ref: w,
                                'data-test-id': c.S7.TEXT_HEADER,
                                children: [U && (0, i.jsx)(v.L, { withForwardControl: s, withBackwardControl: n }), r],
                            }),
                            !l &&
                                (0, i.jsxs)('div', {
                                    className: (0, o.$)(M().stickyItem, { [M().stickyItem_scrolling]: E }),
                                    onClick: B,
                                    'aria-hidden': !0,
                                    'data-test-id': c.S7.TEXT_STICKY_HEADER,
                                    children: [
                                        (0, i.jsx)('div', { className: M().backdrop }),
                                        (0, i.jsxs)('div', {
                                            className: M().container,
                                            children: [U && (0, i.jsx)(v.L, { withForwardControl: s, withBackwardControl: n, shouldFocusOnMount: !1 }), D],
                                        }),
                                        A &&
                                            (0, i.jsx)(p.b, {
                                                mainText: k,
                                                ariaLabel: j,
                                                mainTextFontSize: 'm',
                                                ref: P,
                                                onClick: G,
                                                isShimmerActive: L,
                                                isShimmerVisible: O,
                                                className: y().plusButton,
                                                'data-intersection-property-id': K,
                                                'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var Y = (function (e) {
                return (
                    (e.INNER = 'INNER'),
                    (e.TEXT = 'TEXT'),
                    (e.COMPOSITE = 'COMPOSITE'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    (e.BRANDED_PLAYLIST = 'BRANDED_PLAYLIST'),
                    (e.STICKY = 'STICKY'),
                    e
                );
            })({});
            let F = (0, a.PA)((e) => {
                let {
                    variant: t = 'INNER',
                    style: r,
                    children: a,
                    showControls: o,
                    withBackwardControl: d,
                    withForwardControl: c,
                    className: u = '',
                    stickyChild: _,
                    staticClassName: h,
                    stickyClassName: m,
                    innerHeaderRef: g,
                    compositeHeaderRef: p,
                    disableStickyVariant: v,
                    ...E
                } = e;
                switch (t) {
                    case 'INNER':
                        return (0, i.jsx)(s.r, { page: n.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(k, { headerRef: g, style: r }) });
                    case 'TEXT':
                        return (0, i.jsx)(s.r, {
                            page: n.l.HEADER,
                            places: [l.R.BUTTON],
                            children: (0, i.jsx)(V, { showControls: o, withBackwardControl: d, withForwardControl: c, disableStickyVariant: v, children: a }),
                        });
                    case 'COMPOSITE':
                        return (0, i.jsx)(s.r, {
                            page: n.l.HEADER,
                            places: [l.R.BUTTON],
                            children: (0, i.jsx)(H, { className: u, stickyChild: _, staticClassName: h, stickyClassName: m, compositeHeaderRef: p, ...E, children: a }),
                        });
                    case 'PROMO_LANDING':
                        return (0, i.jsx)(s.r, { page: n.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(U, { style: r }) });
                    case 'BRANDED_PLAYLIST':
                        return (0, i.jsx)(s.r, { page: n.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(w, { showControls: o, children: a }) });
                    case 'STICKY':
                        return (0, i.jsx)('header', {
                            className: u,
                            children: (0, i.jsx)(s.r, { page: n.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(I, { className: m, ...E, children: _ }) }),
                        });
                }
            });
        },
    },
    (e) => {
        (e.O(0, [8752, 2942, 7435, 6706, 4771, 1311, 8832, 6904, 2058, 2881, 8628, 8283, 2824, 4560, 4732, 1195, 1598, 1928, 900, 763, 2670, 7358], () =>
            e((e.s = 30385)),
        ),
            (_N_E = e.O()));
    },
]);
