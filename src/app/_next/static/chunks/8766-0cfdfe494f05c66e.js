(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 8766],
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
        14965: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => n });
            class n extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: i = {}, ...s } = t,
                        l = e || 'Internal error';
                    (super(l, s), (this.message = l), (this.code = r), (this.data = i), (this.stack = Error(l).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
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
            r.d(t, { Y: () => o });
            var n = r(53647),
                i = r(4086),
                s = r(41928),
                l = r(65523),
                a = r(57448);
            let o = () => {
                let e = (0, s.N)(),
                    t = e.get(i.oo),
                    r = e.get(i.QG),
                    o = e.get(i.uM),
                    c = e.get(i.ff),
                    u = e.get(i.V4),
                    d = e.get(i.P0),
                    g = (0, a.f)(),
                    _ = (0, l.U)(),
                    h = (0, s.N)().get(i.TK),
                    p = e.get(i.ni),
                    m = e.get(i.RD),
                    v = new n.si(),
                    f = new n.fW();
                return {
                    ...g,
                    acqOffers: o,
                    disclaimerDictionary: c,
                    logger: _,
                    modelActionsLogger: h,
                    localStorage: v,
                    sessionStorage: f,
                    containerStorage: t,
                    authorization: r,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: p,
                    tagSandbox: m,
                };
            };
        },
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => P });
            var n = r(88800),
                i = r(65724),
                s = r(84961),
                l = r(53548),
                a = r(2058),
                o = r(88969);
            r(30282);
            var c = r(96817),
                u = r(52300),
                d = r(29504),
                g = r(78793),
                _ = r(92716),
                h = r(99984),
                p = r(90780),
                m = r(65523),
                v = r(14518),
                f = r(44230),
                y = r(4370),
                E = r(72288),
                x = r(97956),
                O = r(56248),
                S = r(90688),
                b = r(78940);
            let I = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var N = r(96856),
                A = r.n(N);
            let T = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: s } = e,
                    { slam: l } = (0, E.g)(),
                    { contentRef: a } = (0, f.g)(),
                    u = (0, b.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, i.$)(A().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(O.L, {
                                withBackwardFallback: '/',
                                className: (0, i.$)(A().navigation, { [A().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, i.$)(A().content, { [A().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(S._V, { className: A().image, src: I.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, n.jsx)(d.DZ, {
                                            className: A().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(d.HL, {
                                            className: A().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                l.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: A().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(d.HL, {
                                            className: A().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var w = r(9184),
                C = r.n(w);
            let P = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: s } = e,
                    { formatMessage: S } = (0, a.A)(),
                    b = (0, l.useContext)(E.P),
                    I = null == b ? void 0 : b.experiments.checkExperiment(x.z.WebNextUnstableMusicScreen, 'on'),
                    N = S(I ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: r } = (0, p.gf)(),
                        { pageId: n } = (0, v.$)(),
                        i = (0, m.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !r || !n) return;
                        let s = (0, g.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: n,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, h.z5)(t.evgenInstance, s);
                    }, [t, e, r, n, i]);
                })(N);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: r } = (0, v.$)(),
                            n = (0, m.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let i = (0, g.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, h.bv)(e.evgenInstance, i);
                            }, [e, t, r, n]),
                        };
                    })(),
                    w = (0, l.useCallback)(() => {
                        (A(), (window.location.href = y.Z.main.href));
                    }, [A]),
                    { contentRef: P } = (0, f.g)();
                return I
                    ? (0, n.jsx)(T, { className: t, withBackwardControl: r, onBack: s })
                    : (0, n.jsxs)('div', {
                          className: (0, i.$)(C().root, t),
                          children: [
                              r &&
                                  (0, n.jsx)(O.L, {
                                      withBackwardFallback: '/',
                                      className: (0, i.$)(C().navigation, { [C().navigation_desktop]: !P }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, i.$)(C().content, { [C().content_shrink]: !r }),
                                  children: [
                                      (0, n.jsx)(u.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(d.DZ, { className: (0, i.$)(C().title, C().important), variant: 'h3', size: 'xs', children: N }),
                                      (0, n.jsxs)(d.HL, {
                                          className: (0, i.$)(C().text, C().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: w,
                                          className: C().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, n.jsx)(o.A, { id: 'page-error.restart-app-button' })],
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
                i = r(84961),
                s = r(58390),
                l = r(53548),
                a = r(35412),
                o = r(39499),
                c = r(89108),
                u = r(70003),
                d = r(72288),
                g = r(16818);
            (0, i.eO)(!1);
            let _ = (0, l.createContext)(null),
                h = (e) => {
                    let { children: t, store: r, storeKey: i } = e,
                        s = (0, l.useMemo)(() => ({ store: r, storeKey: i }), [r, i]);
                    return (0, n.jsx)(_.Provider, { value: s, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: i } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = i.current;
                            return ((i.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, a.Gr)(t), ");\n        window.dispatchEvent(new Event('")
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
                        i = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: l } = e,
                                a = (0, g.Y)(),
                                o = (0, d.g)(),
                                { store: _, patchesRef: m } = (0, u.m)({
                                    createStore: () => t({ ...a, rootStore: o }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(p, { nonce: l, patchKey: r, patchesRef: m }), (0, n.jsx)(h, { store: _, storeKey: r, children: s })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, l.useContext)(_);
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
        53647: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => s, si: () => a, fW: () => g, MJ: () => d, jU: () => h, Bx: () => _ });
            var n = r(77451);
            function i(e) {
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
                        let l = (0, n.Jt)(e);
                        if (t) {
                            var r, s;
                            return null != (s = null == (r = i(l)) ? void 0 : r.value) ? s : null;
                        }
                        return null != l ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let s = i ? JSON.stringify({ value: t }) : t;
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
            function l(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class a {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = l('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let s = r.getItem(e) || void 0;
                        if (!t) return s;
                        let l = i(s);
                        if (!l) return null;
                        let a = null != (n = null == l ? void 0 : l.value) ? n : null;
                        if ((null == l ? void 0 : l.expires) && Date.now() > new Date(l.expires).getTime()) return (this.remove(e), null);
                        return a;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let n = l('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = l('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = r(9519),
                c = r(39499);
            class u extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, o._)(this, 'name', 'Storage Exception'),
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
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = l('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, s;
                        let l = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (s = null == (r = i(l)) ? void 0 : r.value) ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = l('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = l('sessionStorage');
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
                            i = e.get(r);
                        null != i && e.set(r, i, n);
                    });
            }
            function h(e) {
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
                i = r(41928);
            let s = () => {
                let e = (0, i.N)(),
                    t = e.get(n.$I),
                    r = e.get(n.EN),
                    s = e.get(n.N1),
                    l = e.get(n._1),
                    a = e.get(n.V3),
                    o = e.get(n.Lb),
                    c = e.get(n.wK),
                    u = e.get(n.tz),
                    d = e.get(n.$8),
                    g = e.get(n.Oo),
                    _ = e.get(n.X4),
                    h = e.get(n.O9),
                    p = e.get(n.E),
                    m = e.get(n.wH),
                    v = e.get(n.ok),
                    f = e.get(n.X8),
                    y = e.get(n.yq),
                    E = e.get(n.NN),
                    x = e.get(n.qN),
                    O = e.get(n.ro),
                    S = e.get(n.nM),
                    b = e.get(n.Ut),
                    I = e.get(n.K1),
                    N = e.get(n.eu),
                    A = e.get(n.SD),
                    T = e.get(n.aE),
                    w = e.get(n.ki),
                    C = e.get(n.c9),
                    P = e.get(n.en),
                    L = e.get(n.jQ),
                    R = e.get(n.cZ),
                    k = e.get(n.Zl),
                    M = e.get(n.CN),
                    j = e.get(n.P1),
                    D = e.get(n.zj),
                    F = e.get(n.re),
                    G = e.get(n.JM),
                    H = e.get(n.Lk),
                    U = e.get(n.$$),
                    W = e.get(n.sv),
                    Y = e.get(n.gd),
                    V = e.get(n.Ez),
                    B = e.get(n.u2),
                    X = e.get(n.TD),
                    $ = e.get(n.dh),
                    z = e.get(n.LC),
                    J = e.get(n.PL),
                    K = e.get(n.DT);
                return {
                    accountResource: t,
                    afterTrackResource: r,
                    disclaimersResource: s,
                    usersResource: l,
                    landingResource: a,
                    landing3Resource: o,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: g,
                    topResource: _,
                    artistsResource: h,
                    slidesResource: p,
                    redAlertResource: m,
                    rotorResource: v,
                    waveResource: f,
                    searchResource: y,
                    searchPlaylistResource: E,
                    playlistResource: x,
                    playlistsResource: O,
                    pinResource: S,
                    metatagsResource: b,
                    tagResource: I,
                    feedResource: N,
                    wizard3Resource: A,
                    pinsResource: T,
                    musicHistoryResource: w,
                    dynamicPagesResource: C,
                    chartResource: P,
                    clipsResource: L,
                    lyricViewsResource: R,
                    nonMusicResource: k,
                    donationResource: M,
                    loaderResource: j,
                    lumenResource: D,
                    prefixlessResource: F,
                    streamsResource: G,
                    filtersResource: H,
                    ugcResource: U,
                    collectionResource: W,
                    adsResource: Y,
                    personalResource: V,
                    familyResource: B,
                    childrenLandingResource: X,
                    promoResource: $,
                    telemetryResource: z,
                    labelsResource: J,
                    concertsResource: K,
                    wordsResource: e.get(n.dA),
                    wheelResource: e.get(n.$Y),
                };
            };
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => l });
            var n = r(88800);
            r(30282);
            var i = r(11006),
                s = r.n(i);
            let l = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => i });
            var n = r(97956);
            let i = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: i, userRegion: s } = e;
                return 'ru' === s && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : i();
            };
        },
        62837: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => g, Yw: () => n, JU: () => i, DQ: () => p, Ve: () => m });
            var n,
                i,
                s = r(43297),
                l = (function () {
                    function e(e) {
                        ((this.observableValue = (0, s.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var r = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var n = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (i) {
                                    if (i !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && n) {
                                            n = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, i), e(i));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, s.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var n = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (i) {
                                if (i !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && n) {
                                        n = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, i), e(i));
                                }
                            })
                        );
                    }));
            })();
            var a = r(14965);
            class o extends a.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
            class c extends a.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(n || (n = {}));
            let u = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, n] = r.split(':');
                        e && n && t.push({ type: e, id: n });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
            class g {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new l(null)),
                        (this.isLoadingObservable = new l(!1)),
                        (this.errorObservable = new l(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new o(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let r = d(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        n = {};
                    for (let e of r)
                        if (e) {
                            let t = n[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (n[e.disclaimerType] = t));
                        }
                    return n;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(i || (i = {}));
            let _ = new Map([
                    [n.EXPLICIT_ICON, i.E],
                    [n.AGE_18_ICON, i.AGE_18],
                    [n.AGE_16_ICON, i.AGE_16],
                    [n.AGE_12_ICON, i.AGE_12],
                    [n.EXCLAMATION_ICON, i.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [n.SUBSTITUTED_ICON, i.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                h = [n.EXPLICIT_ICON, n.AGE_18_ICON, n.AGE_16_ICON, n.AGE_12_ICON, n.SUBSTITUTED_ICON, n.EXCLAMATION_ICON],
                p = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = d(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let r = _.get(t.type);
                    return void 0 !== r ? r : null;
                },
                m = (e, t) => d(e, t).length > 0;
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => a });
            var n = r(4086),
                i = r(41928),
                s = r(44084);
            let l = new WeakMap(),
                a = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = l.get(e);
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
                        return (l.set(e, r), r);
                    })((0, i.N)().get(n.Zf));
        },
        70003: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => s });
            var n = r(5120),
                i = r(53548);
            let s = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: s } = e,
                    l = (0, i.useRef)([]),
                    [a] = (0, i.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, i.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(a, e);
                        };
                        return (e(), window.addEventListener(s, e), () => window.removeEventListener(s, e));
                    }, [r, s, a]),
                    { store: a, patchesRef: l }
                );
            };
        },
        76541: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i, w: () => n });
            let n = 20,
                i = 20;
        },
        77451: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => s, TF: () => a, hZ: () => l });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function s(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var i = r[n].split('='),
                            s = i.slice(1).join('=');
                        '"' === s[0] && (s = s.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function l(e, t, r) {
                var s;
                document.cookie =
                    ((s = n({ path: '/' }, r)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                i('Expires', e.expires ? e.expires.toUTCString() : '') +
                                i('Domain', e.domain) +
                                i('Path', e.path) +
                                i('Secure', e.secure) +
                                i('SameSite', e.sameSite)
                            );
                        })(s));
            }
            function a(e, t) {
                l(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => m });
            var n = r(88800),
                i = r(65724),
                s = r(61013),
                l = r(53548);
            let a = (e) => {
                    let { style: t, forwardRef: r, context: i, ...s } = e,
                        l = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        a = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': l, style: { ...t }, ref: r, ...s });
                },
                o = (0, l.forwardRef)((e, t) => (0, n.jsx)(a, { forwardRef: t, ...e }));
            var c = r(16434),
                u = r.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: r, withFooter: s, withHeader: l, withForceScroll: a, ...o } = e;
                    return (0, n.jsx)('div', {
                        className: (0, i.$)(u().scroller, { [u().scroller_withFooter]: s, [u().scroller_withHeader]: l, [u().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: r,
                        ...o,
                        tabIndex: -1,
                    });
                },
                g = (0, l.forwardRef)((e, t) => (0, n.jsx)(d, { forwardRef: t, ...e }));
            var _ = r(55482),
                h = r(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: i,
                            debounceDurationInMs: s = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [g, p] = (0, l.useState)(null),
                        m = (0, l.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == i || i(e), o.length > 0 && p(e), t && r)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < n; e++) r(e);
                                    }
                                }, s),
                            [s, i, t, r, o],
                        );
                    (0, l.useEffect)(() => {
                        o.length > 0 && g && m(g);
                    }, o);
                    let v = (0, l.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, n.jsx)(h.sN, { ref: u, rangeChanged: m, totalCount: a, endReached: v, ...d });
                },
                m = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: m = 700,
                            pageSize: v = 20,
                            totalCount: f,
                            totalRequests: y,
                            debounceDurationInMs: E,
                            initialItemCount: x,
                            minInitialItemCount: O = 20,
                            handleRef: S,
                            alwaysShowScrollbar: b = !1,
                            testId: I,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...T
                        } = e,
                        [w, C] = (0, l.useState)(!1),
                        P = (0, l.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    C(e);
                                }, 100),
                            [],
                        ),
                        L = (0, l.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: g,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : o,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: g,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : o,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, y, N]),
                        R = x ? Math.min(x, O) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, i.$)(u().root, { [u().root_scrolling]: w || b, [u().root_notScrolling]: !w && !b }, t),
                        'data-test-id': I,
                        children: [
                            N && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, n.jsx)(p, {
                                overscan: m,
                                components: L,
                                listClassName: h,
                                itemClassName: d,
                                isScrolling: P,
                                itemContent: _,
                                scrollerRef: S,
                                totalCount: f,
                                pageSize: v,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: E,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: A,
                                ...T,
                            }),
                            N && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => I });
            var n = r(88800),
                i = r(65724),
                s = r(84961),
                l = r(2058),
                a = r(30282),
                o = r(94144),
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
                    let { formatMessage: t, language: r, tld: n, year: i } = e;
                    return {
                        year: i,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var g = r(62293),
                _ = r(99839);
            let h = (e) => e(new Date(), (0, _.m)());
            var p = r(51611),
                m = r(72288),
                v = r(11006),
                f = r.n(v),
                y = r(17392),
                E = r(29504),
                x = r(91292);
            let O = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, i.$)(f().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(x.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, i.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(x.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: f().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: i } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, n.jsx)(x.N, { target: '_blank', href: i, className: f().link, 'data-test-id': y.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, i.$)(f().root, f().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, n.jsx)(S, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(O, { data: r.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, m.g)(),
                    { formatDate: i, formatMessage: s } = (0, l.A)(),
                    { language: a } = (0, p.h)(),
                    o = d({ formatMessage: s, language: a, tld: r.tld, year: h(i) });
                return (0, n.jsx)(O, { className: t, data: o });
            });
            let I = (0, s.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: s, location: _, user: v } = (0, m.g)(),
                    { formatDate: y, formatMessage: E } = (0, l.A)(),
                    { isEnabled: x } = null != (t = (0, o.P)()) ? t : {},
                    { language: O } = (0, p.h)(),
                    S = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: i, tld: s, userRegion: l, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: i, userRegion: s } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, n, i) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, n, i) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, n, i) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, n, i) },
                                    g = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, n, i) },
                                    _ = [l, o, d];
                                return (r && 'ru' === s && _.push(a), _.push(g), _);
                            })({ formatMessage: r, isWebApplication: n, language: i, tld: s, userRegion: l }),
                            disclaimer: (0, g.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: d({ formatMessage: r, language: i, tld: s, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: E,
                        isWebApplication: a.$3,
                        tld: _.tld,
                        language: O,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: h(y),
                    });
                return (0, n.jsx)(b, { className: (0, i.$)({ [f().root_withOffsetForDeeplink]: x }, r), data: S });
            });
        },
        89108: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => i, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                i = 'yMusicPageStatePatchesUpdated';
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i, P: () => s });
            var n = r(53548);
            let i = (0, n.createContext)(null),
                s = () => (0, n.useContext)(i);
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
