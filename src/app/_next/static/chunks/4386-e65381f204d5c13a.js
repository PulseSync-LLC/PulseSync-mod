(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4386],
    {
        9184: (e) => {
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
        11006: (e) => {
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
        16818: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => a });
            var n = r(53647),
                l = r(4086),
                s = r(41928),
                o = r(65523),
                i = r(57448);
            let a = () => {
                let e = (0, s.N)(),
                    t = e.get(l.oo),
                    r = e.get(l.QG),
                    a = e.get(l.uM),
                    c = e.get(l.ff),
                    u = e.get(l.V4),
                    d = e.get(l.P0),
                    _ = (0, i.f)(),
                    g = (0, o.U)(),
                    p = (0, s.N)().get(l.TK),
                    h = e.get(l.ni),
                    m = e.get(l.RD),
                    v = new n.si(),
                    x = new n.fW();
                return {
                    ..._,
                    acqOffers: a,
                    disclaimerDictionary: c,
                    logger: g,
                    modelActionsLogger: p,
                    localStorage: v,
                    sessionStorage: x,
                    containerStorage: t,
                    authorization: r,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: h,
                    tagSandbox: m,
                };
            };
        },
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => j });
            var n = r(88800),
                l = r(65724),
                s = r(84961),
                o = r(53548),
                i = r(2058),
                a = r(88969);
            r(30282);
            var c = r(96817),
                u = r(52300),
                d = r(29504),
                _ = r(87999),
                g = r(47149),
                p = r(84423),
                h = r(89846),
                m = r(64543),
                v = r(63582);
            let x = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: r } = (0, h.g)(),
                        { screen: n } = (0, m.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
                            if (!t || !r || !(null == n ? void 0 : n.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: r,
                                pageId: n.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, g.bv)(t, e);
                        }, [t, r, null == n ? void 0 : n.pageId]),
                    };
                }),
                E = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let r = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: n } = (0, h.g)(),
                        { screen: l } = (0, m.j)();
                    (0, o.useEffect)(() => {
                        if (!r || !n || !(null == l ? void 0 : l.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: n,
                            pageId: l.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, g.z5)(r, t);
                    }, [r, e, n, null == l ? void 0 : l.pageId]);
                });
            var S = r(44230),
                y = r(4370),
                f = r(72288),
                N = r(97956),
                T = r(56248),
                w = r(90688),
                A = r(78940);
            let O = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var P = r(96856),
                k = r.n(P);
            let R = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: s } = e,
                    { slam: o } = (0, f.g)(),
                    { contentRef: i } = (0, S.g)(),
                    u = (0, A.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, l.$)(k().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(T.L, {
                                withBackwardFallback: '/',
                                className: (0, l.$)(k().navigation, { [k().navigation_desktop]: !i }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, l.$)(k().content, { [k().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(w._V, { className: k().image, src: O.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: k().message,
                                    children: [
                                        (0, n.jsx)(d.DZ, {
                                            className: k().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(d.HL, {
                                            className: k().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: k().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(d.HL, {
                                            className: k().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var I = r(9184),
                C = r.n(I);
            let j = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: s } = e,
                    { formatMessage: _ } = (0, i.A)(),
                    g = (0, o.useContext)(f.P),
                    p = null == g ? void 0 : g.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    h = _(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                E(h);
                let { sendRefreshEvent: m } = x(),
                    v = (0, o.useCallback)(() => {
                        (m(), (window.location.href = y.Z.main.href));
                    }, [m]),
                    { contentRef: w } = (0, S.g)();
                return p
                    ? (0, n.jsx)(R, { className: t, withBackwardControl: r, onBack: s })
                    : (0, n.jsxs)('div', {
                          className: (0, l.$)(C().root, t),
                          children: [
                              r &&
                                  (0, n.jsx)(T.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(C().navigation, { [C().navigation_desktop]: !w }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, l.$)(C().content, { [C().content_shrink]: !r }),
                                  children: [
                                      (0, n.jsx)(u.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(d.DZ, { className: (0, l.$)(C().title, C().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, n.jsxs)(d.HL, {
                                          className: (0, l.$)(C().text, C().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: v,
                                          className: C().button,
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
        34961: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => m, s: () => v });
            var n = r(88800),
                l = r(84961),
                s = r(58390),
                o = r(53548),
                i = r(35412),
                a = r(39499),
                c = r(89108),
                u = r(70003),
                d = r(72288),
                _ = r(16818);
            (0, l.eO)(!1);
            let g = (0, o.createContext)(null),
                p = (e) => {
                    let { children: t, store: r, storeKey: l } = e,
                        s = (0, o.useMemo)(() => ({ store: r, storeKey: l }), [r, l]);
                    return (0, n.jsx)(g.Provider, { value: s, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: l } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = l.current;
                            return ((l.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, i.Gr)(t), ");\n        window.dispatchEvent(new Event('")
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
                        l = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: o } = e,
                                i = (0, _.Y)(),
                                a = (0, d.g)(),
                                { store: g, patchesRef: m } = (0, u.m)({
                                    createStore: () => t({ ...i, rootStore: a }),
                                    getPendingPatchBatches: l,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(h, { nonce: o, patchKey: r, patchesRef: m }), (0, n.jsx)(p, { store: g, storeKey: r, children: s })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, o.useContext)(g);
                if (!r || r.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == r ? void 0 : r.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        53647: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => s, si: () => i, fW: () => _, MJ: () => d, jU: () => p, Bx: () => g });
            var n = r(77451);
            function l(e) {
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
                        let o = (0, n.Jt)(e);
                        if (t) {
                            var r, s;
                            return null != (s = null == (r = l(o)) ? void 0 : r.value) ? s : null;
                        }
                        return null != o ? o : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let s = l ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, s, r);
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
            function o(e) {
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
                        r = o('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let s = r.getItem(e) || void 0;
                        if (!t) return s;
                        let o = l(s);
                        if (!o) return null;
                        let i = null != (n = null == o ? void 0 : o.value) ? n : null;
                        if ((null == o ? void 0 : o.expires) && Date.now() > new Date(o.expires).getTime()) return (this.remove(e), null);
                        return i;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let n = o('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = o('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = r(9519),
                c = r(39499);
            class u extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
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
                    ((0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class _ {
                get(e) {
                    let t = o('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, s;
                        let o = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (s = null == (r = l(o)) ? void 0 : r.value) ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = o('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = o('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            n = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            l = e.get(r);
                        null != l && e.set(r, l, n);
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
        53892: (e, t, r) => {
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
        57448: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => s });
            var n = r(4086),
                l = r(41928);
            let s = () => {
                let e = (0, l.N)(),
                    t = e.get(n.$I),
                    r = e.get(n.EN),
                    s = e.get(n.N1),
                    o = e.get(n._1),
                    i = e.get(n.V3),
                    a = e.get(n.Lb),
                    c = e.get(n.wK),
                    u = e.get(n.tz),
                    d = e.get(n.$8),
                    _ = e.get(n.Oo),
                    g = e.get(n.X4),
                    p = e.get(n.O9),
                    h = e.get(n.E),
                    m = e.get(n.wH),
                    v = e.get(n.ok),
                    x = e.get(n.X8),
                    E = e.get(n.yq),
                    S = e.get(n.NN),
                    y = e.get(n.qN),
                    f = e.get(n.ro),
                    N = e.get(n.nM),
                    T = e.get(n.Ut),
                    w = e.get(n.K1),
                    A = e.get(n.eu),
                    O = e.get(n.SD),
                    P = e.get(n.aE),
                    k = e.get(n.ki),
                    R = e.get(n.c9),
                    I = e.get(n.en),
                    C = e.get(n.jQ),
                    j = e.get(n.cZ),
                    b = e.get(n.Zl),
                    L = e.get(n.CN),
                    M = e.get(n.P1),
                    H = e.get(n.zj),
                    D = e.get(n.re),
                    F = e.get(n.JM),
                    Y = e.get(n.Lk),
                    W = e.get(n.$$),
                    G = e.get(n.sv),
                    U = e.get(n.gd),
                    $ = e.get(n.Ez),
                    X = e.get(n.u2),
                    z = e.get(n.TD),
                    V = e.get(n.dh),
                    K = e.get(n.LC),
                    J = e.get(n.PL),
                    B = e.get(n.DT);
                return {
                    accountResource: t,
                    afterTrackResource: r,
                    disclaimersResource: s,
                    usersResource: o,
                    landingResource: i,
                    landing3Resource: a,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: _,
                    topResource: g,
                    artistsResource: p,
                    slidesResource: h,
                    redAlertResource: m,
                    rotorResource: v,
                    waveResource: x,
                    searchResource: E,
                    searchPlaylistResource: S,
                    playlistResource: y,
                    playlistsResource: f,
                    pinResource: N,
                    metatagsResource: T,
                    tagResource: w,
                    feedResource: A,
                    wizard3Resource: O,
                    pinsResource: P,
                    musicHistoryResource: k,
                    dynamicPagesResource: R,
                    chartResource: I,
                    clipsResource: C,
                    lyricViewsResource: j,
                    nonMusicResource: b,
                    donationResource: L,
                    loaderResource: M,
                    lumenResource: H,
                    prefixlessResource: D,
                    streamsResource: F,
                    filtersResource: Y,
                    ugcResource: W,
                    collectionResource: G,
                    adsResource: U,
                    personalResource: $,
                    familyResource: X,
                    childrenLandingResource: z,
                    promoResource: V,
                    telemetryResource: K,
                    labelsResource: J,
                    concertsResource: B,
                    wordsResource: e.get(n.dA),
                    wheelResource: e.get(n.$Y),
                };
            };
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => o });
            var n = r(88800);
            r(30282);
            var l = r(11006),
                s = r.n(l);
            let o = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => l });
            var n = r(97956);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: l, userRegion: s } = e;
                return 'ru' === s && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : l();
            };
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var n = r(4086),
                l = r(41928),
                s = r(44084);
            let o = new WeakMap(),
                i = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = o.get(e);
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
                        return (o.set(e, r), r);
                    })((0, l.N)().get(n.Zf));
        },
        70003: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => s });
            var n = r(5120),
                l = r(53548);
            let s = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: s } = e,
                    o = (0, l.useRef)([]),
                    [i] = (0, l.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, l.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(i, e);
                        };
                        return (e(), window.addEventListener(s, e), () => window.removeEventListener(s, e));
                    }, [r, s, i]),
                    { store: i, patchesRef: o }
                );
            };
        },
        76541: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => l, w: () => n });
            let n = 20,
                l = 20;
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => m });
            var n = r(88800),
                l = r(65724),
                s = r(61013),
                o = r(53548);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: l, ...s } = e,
                        o = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        i = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': o, style: { ...t }, ref: r, ...s });
                },
                a = (0, o.forwardRef)((e, t) => (0, n.jsx)(i, { forwardRef: t, ...e }));
            var c = r(16434),
                u = r.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: r, withFooter: s, withHeader: o, withForceScroll: i, ...a } = e;
                    return (0, n.jsx)('div', {
                        className: (0, l.$)(u().scroller, { [u().scroller_withFooter]: s, [u().scroller_withHeader]: o, [u().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: r,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, o.forwardRef)((e, t) => (0, n.jsx)(d, { forwardRef: t, ...e }));
            var g = r(55482),
                p = r(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: l,
                            debounceDurationInMs: s = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [_, h] = (0, o.useState)(null),
                        m = (0, o.useMemo)(
                            () =>
                                (0, g.A)((e) => {
                                    if ((null == l || l(e), a.length > 0 && h(e), t && r)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < n; e++) r(e);
                                    }
                                }, s),
                            [s, l, t, r, a],
                        );
                    (0, o.useEffect)(() => {
                        a.length > 0 && _ && m(_);
                    }, a);
                    let v = (0, o.useMemo)(() => {
                        if (c)
                            return (0, g.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, n.jsx)(p.sN, { ref: u, rangeChanged: m, totalCount: i, endReached: v, ...d });
                },
                m = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: i,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: g,
                            listClassName: p,
                            overscan: m = 700,
                            pageSize: v = 20,
                            totalCount: x,
                            totalRequests: E,
                            debounceDurationInMs: S,
                            initialItemCount: y,
                            minInitialItemCount: f = 20,
                            handleRef: N,
                            alwaysShowScrollbar: T = !1,
                            testId: w,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: O,
                            ...P
                        } = e,
                        [k, R] = (0, o.useState)(!1),
                        I = (0, o.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        C = (0, o.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : a,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : a,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, E, A]),
                        j = y ? Math.min(y, f) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, l.$)(u().root, { [u().root_scrolling]: k || T, [u().root_notScrolling]: !k && !T }, t),
                        'data-test-id': w,
                        children: [
                            A && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, n.jsx)(h, {
                                overscan: m,
                                components: C,
                                listClassName: p,
                                itemClassName: d,
                                isScrolling: I,
                                itemContent: g,
                                scrollerRef: N,
                                totalCount: x,
                                pageSize: v,
                                onPageHandler: i,
                                onRangeHandler: c,
                                debounceDurationInMs: S,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: O,
                                ...P,
                            }),
                            A && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => w });
            var n = r(88800),
                l = r(65724),
                s = r(84961),
                o = r(2058),
                i = r(30282),
                a = r(94144),
                c = (function (e) {
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
            let u = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var _ = r(62293),
                g = r(99839);
            let p = (e) => e(new Date(), (0, g.m)());
            var h = r(51611),
                m = r(72288),
                v = r(11006),
                x = r.n(v),
                E = r(17392),
                S = r(29504),
                y = r(91292);
            let f = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, l.$)(x().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(S.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(y.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, l.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(S.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(y.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: x().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: l } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, n.jsx)(y.N, { target: '_blank', href: l, className: x().link, 'data-test-id': E.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(S.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, l.$)(x().root, x().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, n.jsx)(N, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(f, { data: r.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, m.g)(),
                    { formatDate: l, formatMessage: s } = (0, o.A)(),
                    { language: i } = (0, h.h)(),
                    a = d({ formatMessage: s, language: i, tld: r.tld, year: p(l) });
                return (0, n.jsx)(f, { className: t, data: a });
            });
            let w = (0, s.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: s, location: g, user: v } = (0, m.g)(),
                    { formatDate: E, formatMessage: S } = (0, o.A)(),
                    { isEnabled: y } = null != (t = (0, a.P)()) ? t : {},
                    { language: f } = (0, h.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: l, tld: s, userRegion: o, year: i } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: l, userRegion: s } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, n, l) },
                                    i = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, n, l) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, n, l) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, n, l) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, n, l) },
                                    g = [o, a, d];
                                return (r && 'ru' === s && g.push(i), g.push(_), g);
                            })({ formatMessage: r, isWebApplication: n, language: l, tld: s, userRegion: o }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: d({ formatMessage: r, language: l, tld: s, year: i }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: S,
                        isWebApplication: i.$3,
                        tld: g.tld,
                        language: f,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(E),
                    });
                return (0, n.jsx)(T, { className: (0, l.$)({ [x().root_withOffsetForDeeplink]: y }, r), data: N });
            });
        },
        89108: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => l, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                l = 'yMusicPageStatePatchesUpdated';
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => l, P: () => s });
            var n = r(53548);
            let l = (0, n.createContext)(null),
                s = () => (0, n.useContext)(l);
        },
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
    },
]);
