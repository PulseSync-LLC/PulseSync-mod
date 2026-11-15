(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5866],
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
        14567: (e, t) => {
            (e.exports = function (e, t, r, s) {
                return JSON.stringify(e, n(t, s), r);
            }).getSerialize = n;
            function n(e, t) {
                var n = [],
                    r = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return n[0] === t ? '[Circular ~]' : '[Circular ~.' + r.slice(0, n.indexOf(t)).join('.') + ']';
                        }),
                    function (s, o) {
                        if (n.length > 0) {
                            var i = n.indexOf(this);
                            (~i ? n.splice(i + 1) : n.push(this), ~i ? r.splice(i, 1 / 0, s) : r.push(s), ~n.indexOf(o) && (o = t.call(this, s, o)));
                        } else n.push(o);
                        return null == e ? o : e.call(this, s, o);
                    }
                );
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
        16818: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => a });
            var r = n(53647),
                s = n(4086),
                o = n(41928),
                i = n(65523),
                l = n(57448);
            let a = () => {
                let e = (0, o.N)(),
                    t = e.get(s.oo),
                    n = e.get(s.QG),
                    a = e.get(s.uM),
                    c = e.get(s.ff),
                    d = e.get(s.V4),
                    u = e.get(s.P0),
                    g = (0, l.f)(),
                    p = (0, i.U)(),
                    h = (0, o.N)().get(s.TK),
                    _ = e.get(s.ni),
                    m = e.get(s.RD),
                    f = new r.si(),
                    v = new r.fW();
                return {
                    ...g,
                    acqOffers: a,
                    disclaimerDictionary: c,
                    logger: p,
                    modelActionsLogger: h,
                    localStorage: f,
                    sessionStorage: v,
                    containerStorage: t,
                    authorization: n,
                    config: d,
                    clientSafeConfig: u,
                    landingSdk: _,
                    tagSandbox: m,
                };
            };
        },
        23877: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { Q: () => s, c: () => r }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(r || (r = {})));
            let s = { [r.ERROR]: 'error', [r.WARNING]: 'warn', [r.INFO]: 'info', [r.DEBUG]: 'debug', [r.TRACE]: 'trace' };
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => k });
            var r = n(88800),
                s = n(65724),
                o = n(84961),
                i = n(53548),
                l = n(2058),
                a = n(88969);
            n(30282);
            var c = n(96817),
                d = n(52300),
                u = n(29504),
                g = n(87999),
                p = n(47149),
                h = n(84423),
                _ = n(89846),
                m = n(64543),
                f = n(63582);
            let v = (0, f.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, h.s)()) ? void 0 : e.evgenInstance,
                        { hash: n } = (0, _.g)(),
                        { screen: r } = (0, m.j)();
                    return {
                        sendRefreshEvent: (0, i.useCallback)(() => {
                            if (!t || !n || !(null == r ? void 0 : r.pageId)) return;
                            let e = {
                                actionType: g.ActionType.Refresh,
                                userInteractionType: g.UserInteractionType.Tap,
                                entityType: g.EntityTypes.Error,
                                entityId: g.EntityTypes.SomethingWrong,
                                hash: n,
                                pageId: r.pageId,
                                pageStyle: g.PageStyles.Fullscreen,
                                pagePlacement: g.PagePlacements.Fullscreen,
                                mainObjectType: g.DomainObjectType.NonApplicable,
                                mainObjectId: g.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, n, null == r ? void 0 : r.pageId]),
                    };
                }),
                E = (0, f.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let n = null == (t = (0, h.s)()) ? void 0 : t.evgenInstance,
                        { hash: r } = (0, _.g)(),
                        { screen: s } = (0, m.j)();
                    (0, i.useEffect)(() => {
                        if (!n || !r || !(null == s ? void 0 : s.pageId)) return;
                        let t = {
                            entityType: g.EntityTypes.Error,
                            entityId: g.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: r,
                            pageId: s.pageId,
                            pageStyle: g.PageStyles.Fullscreen,
                            pagePlacement: g.PagePlacements.Fullscreen,
                            mainObjectType: g.DomainObjectType.NonApplicable,
                            mainObjectId: g.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(n, t);
                    }, [n, e, r, null == s ? void 0 : s.pageId]);
                });
            var x = n(44230),
                S = n(4370),
                y = n(72288),
                T = n(97956),
                O = n(56248),
                N = n(90688),
                R = n(78940);
            let w = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var C = n(96856),
                I = n.n(C);
            let A = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: o } = e,
                    { slam: i } = (0, y.g)(),
                    { contentRef: l } = (0, x.g)(),
                    d = (0, R.Z)(S.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(I().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(O.L, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(I().navigation, { [I().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: o,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, s.$)(I().content, { [I().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(N._V, { className: I().image, src: w.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                i.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: I().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var b = n(9184),
                j = n.n(b);
            let k = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: o } = e,
                    { formatMessage: g } = (0, l.A)(),
                    p = (0, i.useContext)(y.P),
                    h = null == p ? void 0 : p.experiments.checkExperiment(T.z.WebNextUnstableMusicScreen, 'on'),
                    _ = g(h ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                E(_);
                let { sendRefreshEvent: m } = v(),
                    f = (0, i.useCallback)(() => {
                        (m(), (window.location.href = S.Z.main.href));
                    }, [m]),
                    { contentRef: N } = (0, x.g)();
                return h
                    ? (0, r.jsx)(A, { className: t, withBackwardControl: n, onBack: o })
                    : (0, r.jsxs)('div', {
                          className: (0, s.$)(j().root, t),
                          children: [
                              n &&
                                  (0, r.jsx)(O.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(j().navigation, { [j().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: o,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, s.$)(j().content, { [j().content_shrink]: !n }),
                                  children: [
                                      (0, r.jsx)(d.I, { className: j().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(u.DZ, { className: (0, s.$)(j().title, j().important), variant: 'h3', size: 'xs', children: _ }),
                                      (0, r.jsxs)(u.HL, {
                                          className: (0, s.$)(j().text, j().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: f,
                                          className: j().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34961: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => m, s: () => f });
            var r = n(88800),
                s = n(84961),
                o = n(58390),
                i = n(53548),
                l = n(35412),
                a = n(39499),
                c = n(89108),
                d = n(70003),
                u = n(72288),
                g = n(16818);
            (0, s.eO)(!1);
            let p = (0, i.createContext)(null),
                h = (e) => {
                    let { children: t, store: n, storeKey: s } = e,
                        o = (0, i.useMemo)(() => ({ store: n, storeKey: s }), [n, s]);
                    return (0, r.jsx)(p.Provider, { value: o, children: t });
                },
                _ = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: s } = e;
                    return (
                        (0, o.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(n, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                m = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        s = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: o, nonce: i } = e,
                                l = (0, g.Y)(),
                                a = (0, u.g)(),
                                { store: p, patchesRef: m } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: a }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(_, { nonce: i, patchKey: n, patchesRef: m }), (0, r.jsx)(h, { store: p, storeKey: n, children: o })],
                            });
                        },
                    };
                };
            function f(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, i.useContext)(p);
                if (!n || n.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == n ? void 0 : n.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        44084: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => o });
            var r = n(23877),
                s = n(74021);
            class o extends s.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= r.c.INFO && this.logToConsole(r.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= r.c.DEBUG && this.logToConsole(r.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= r.c.TRACE && this.logToConsole(r.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= r.c.WARNING && this.logToConsole(r.c.WARNING, e, t), this.sendToErrorBooster(r.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= r.c.ERROR && this.logToConsole(r.c.ERROR, e, t), this.sendToErrorBooster(r.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(r.c.INFO, e, t);
                }
                logToConsole(e, t, n) {
                    if (this.disableLogToConsole) return;
                    let s = r.Q[e];
                    console[s](...this.formatMessage(e, t, n));
                }
                sendToErrorBooster(e, t, n) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: n ? this.obfuscateData({ ...this.additionalData, ...n }) : {} } });
                }
            }
        },
        53647: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => o, si: () => l, fW: () => g, MJ: () => u, jU: () => h, Bx: () => p });
            var r = n(77451);
            function s(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let i = (0, r.Jt)(e);
                        if (t) {
                            var n, o;
                            return null != (o = null == (n = s(i)) ? void 0 : n.value) ? o : null;
                        }
                        return null != i ? i : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let o = s ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, o, n);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, r.TF)(e);
                    } catch (e) {}
                }
            }
            function i(e) {
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
                        n = i('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let o = n.getItem(e) || void 0;
                        if (!t) return o;
                        let i = s(o);
                        if (!i) return null;
                        let l = null != (r = null == i ? void 0 : i.value) ? r : null;
                        if ((null == i ? void 0 : i.expires) && Date.now() > new Date(i.expires).getTime()) return (this.remove(e), null);
                        return l;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    if ('number' == typeof (null == n ? void 0 : n.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * n.expires), (n.expires = e));
                    }
                    let r = i('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = n(9519),
                c = n(39499);
            class d extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...r }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, d.prototype));
                }
            }
            class u {
                get(e) {
                    throw new d(this.platform, this.type);
                }
                set(e, t, n) {
                    throw new d(this.platform, this.type);
                }
                has(e) {
                    throw new d(this.platform, this.type);
                }
                remove(e) {
                    throw new d(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = i('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, o;
                        let i = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (o = null == (n = s(i)) ? void 0 : n.value) ? o : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = i('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            s = e.get(n);
                        null != s && e.set(n, s, r);
                    });
            }
            function h(e) {
                let { name: t, group: n, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: n, value: { ...r, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: r } } }
                    : { [t]: { group: n, value: { title: n } } };
            }
        },
        53892: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
            let r = {
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
        57448: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => o });
            var r = n(4086),
                s = n(41928);
            let o = () => {
                let e = (0, s.N)(),
                    t = e.get(r.$I),
                    n = e.get(r.EN),
                    o = e.get(r.N1),
                    i = e.get(r._1),
                    l = e.get(r.V3),
                    a = e.get(r.Lb),
                    c = e.get(r.wK),
                    d = e.get(r.tz),
                    u = e.get(r.$8),
                    g = e.get(r.Oo),
                    p = e.get(r.X4),
                    h = e.get(r.O9),
                    _ = e.get(r.E),
                    m = e.get(r.wH),
                    f = e.get(r.ok),
                    v = e.get(r.X8),
                    E = e.get(r.yq),
                    x = e.get(r.NN),
                    S = e.get(r.qN),
                    y = e.get(r.ro),
                    T = e.get(r.nM),
                    O = e.get(r.Ut),
                    N = e.get(r.K1),
                    R = e.get(r.eu),
                    w = e.get(r.SD),
                    C = e.get(r.aE),
                    I = e.get(r.ki),
                    A = e.get(r.c9),
                    b = e.get(r.en),
                    j = e.get(r.jQ),
                    k = e.get(r.cZ),
                    P = e.get(r.Zl),
                    L = e.get(r.CN),
                    M = e.get(r.P1),
                    D = e.get(r.zj),
                    F = e.get(r.re),
                    H = e.get(r.JM),
                    U = e.get(r.Lk),
                    G = e.get(r.$$),
                    W = e.get(r.sv),
                    Y = e.get(r.gd),
                    B = e.get(r.Ez),
                    $ = e.get(r.u2),
                    z = e.get(r.TD),
                    V = e.get(r.dh),
                    X = e.get(r.LC),
                    J = e.get(r.PL),
                    K = e.get(r.DT);
                return {
                    accountResource: t,
                    afterTrackResource: n,
                    disclaimersResource: o,
                    usersResource: i,
                    landingResource: l,
                    landing3Resource: a,
                    landingBlocksResource: c,
                    albumResource: d,
                    libraryResource: u,
                    tracksResource: g,
                    topResource: p,
                    artistsResource: h,
                    slidesResource: _,
                    redAlertResource: m,
                    rotorResource: f,
                    waveResource: v,
                    searchResource: E,
                    searchPlaylistResource: x,
                    playlistResource: S,
                    playlistsResource: y,
                    pinResource: T,
                    metatagsResource: O,
                    tagResource: N,
                    feedResource: R,
                    wizard3Resource: w,
                    pinsResource: C,
                    musicHistoryResource: I,
                    dynamicPagesResource: A,
                    chartResource: b,
                    clipsResource: j,
                    lyricViewsResource: k,
                    nonMusicResource: P,
                    donationResource: L,
                    loaderResource: M,
                    lumenResource: D,
                    prefixlessResource: F,
                    streamsResource: H,
                    filtersResource: U,
                    ugcResource: G,
                    collectionResource: W,
                    adsResource: Y,
                    personalResource: B,
                    familyResource: $,
                    childrenLandingResource: z,
                    promoResource: V,
                    telemetryResource: X,
                    labelsResource: J,
                    concertsResource: K,
                    wordsResource: e.get(r.dA),
                    wheelResource: e.get(r.$Y),
                };
            };
        },
        60266: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => i });
            var r = n(88800);
            n(30282);
            var s = n(11006),
                o = n.n(s);
            let i = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: o().empty });
            };
        },
        62293: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => s });
            var r = n(97956);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: n, getExplicitContent: s, userRegion: o } = e;
                return 'ru' === o && t(r.z.WebNextFooterDisclaimer, 'on') ? n() : s();
            };
        },
        65523: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => l });
            var r = n(4086),
                s = n(41928),
                o = n(44084);
            let i = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof o.r) return e;
                        let t = i.get(e);
                        if (t) return t;
                        let n = {
                            log: (t, n) => e.info(t, n),
                            trace: (t, n) => e.trace(t, n),
                            debug: (t, n) => e.debug(t, n),
                            info: (t, n) => e.info(t, n),
                            warn: (t, n) => e.warn(t, n),
                            error: (t, n) => e.error(t, n),
                            fatal: (t, n) => e.fatal(t, n),
                            child: (t) => e.child(t),
                        };
                        return (i.set(e, n), n);
                    })((0, s.N)().get(r.Zf));
        },
        70003: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => o });
            var r = n(5120),
                s = n(53548);
            let o = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: o } = e,
                    i = (0, s.useRef)([]),
                    [l] = (0, s.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, s.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, r.X6)(l, e);
                        };
                        return (e(), window.addEventListener(o, e), () => window.removeEventListener(o, e));
                    }, [n, o, l]),
                    { store: l, patchesRef: i }
                );
            };
        },
        74021: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => a });
            var r = n(14567),
                s = n(243),
                o = n(62151),
                i = n(33396);
            let l = () => 'SECRET';
            class a {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: n }) {
                    ((this.maxLogLevel = t), (this.secureFields = n), (this.additionalData = e));
                }
                formatMessage(e, t, n = {}, s) {
                    let o,
                        l = String(t instanceof Error && t.stack ? t.stack : t),
                        a = (0, i.A)({ ...this.additionalData, ...n });
                    return (Object.keys(a).length && (o = this.obfuscateData(a)), s) ? `${l} ${r(o)}` : [l, o];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, s.A)(e, t) && (0, o.A)(e, t, l());
                    return e;
                }
            }
        },
        76541: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => s, w: () => r });
            let r = 20,
                s = 20;
        },
        76903: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => u });
            var r = n(88800),
                s = n(53548),
                o = n(53534),
                i = n(63582),
                l = n(245);
            let a = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let n =
                        a.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                n = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                r = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                n();
                                            } finally {
                                                ((t = !1), e.length > 0 && r());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (n(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), r());
                                },
                            };
                        })();
                    (a.set(t, n), (this.queue = n));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = n(87999);
            let u = (0, i.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, l.N)(),
                        i = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [a, u] = (0, s.useState)(() => {
                            let e = new c(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: i, scope: i ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        a.client !== n ||
                        a.input.pageId !== t.pageId ||
                        a.input.skeletonId !== t.skeletonId ||
                        a.input.mainObjectType !== t.mainObjectType ||
                        a.input.mainObjectId !== t.mainObjectId
                    ) {
                        let s = new c(n.createScreenSession().screenViewUuid, n),
                            l = { client: n, input: t, isReady: i, scope: i ? n.createScreenScope(t, s) : null, session: s };
                        return (u(l), (0, r.jsx)(o.k, { value: l, children: e }));
                    }
                    if (
                        a.isReady !== i ||
                        a.input.displayReasonId !== t.displayReasonId ||
                        a.input.pageIdForFrom !== t.pageIdForFrom ||
                        a.input.pagePlacement !== t.pagePlacement ||
                        a.input.pageStyle !== t.pageStyle
                    ) {
                        let s = { ...a, input: t, isReady: i, scope: i ? n.createScreenScope(t, a.session) : null };
                        return (u(s), (0, r.jsx)(o.k, { value: s, children: e }));
                    }
                    return (0, r.jsx)(o.k, { value: a, children: e });
                },
            );
        },
        77451: (e, t, n) => {
            'use strict';
            n.d(t, { Jt: () => o, TF: () => l, hZ: () => i });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var s in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                        return e;
                    }).apply(this, arguments);
            };
            function s(e, t) {
                if (!t) return '';
                var n = '; ' + e;
                return !0 === t ? n : n + '=' + t;
            }
            function o(e) {
                return (function (e) {
                    for (var t = {}, n = e ? e.split('; ') : [], r = 0; r < n.length; r++) {
                        var s = n[r].split('='),
                            o = s.slice(1).join('=');
                        '"' === o[0] && (o = o.slice(1, -1));
                        try {
                            t[decodeURIComponent(s[0])] = o.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function i(e, t, n) {
                var o;
                document.cookie =
                    ((o = r({ path: '/' }, n)),
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
                                s('Expires', e.expires ? e.expires.toUTCString() : '') +
                                s('Domain', e.domain) +
                                s('Path', e.path) +
                                s('Secure', e.secure) +
                                s('SameSite', e.sameSite)
                            );
                        })(o));
            }
            function l(e, t) {
                i(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        79418: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => m });
            var r = n(88800),
                s = n(65724),
                o = n(61013),
                i = n(53548);
            let l = (e) => {
                    let { style: t, forwardRef: n, context: s, ...o } = e,
                        i = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        l = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': i, style: { ...t }, ref: n, ...o });
                },
                a = (0, i.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
            var c = n(16434),
                d = n.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: n, withFooter: o, withHeader: i, withForceScroll: l, ...a } = e;
                    return (0, r.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: i, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: n,
                        ...a,
                        tabIndex: -1,
                    });
                },
                g = (0, i.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var p = n(55482),
                h = n(75151);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: n,
                            onRangeHandler: s,
                            debounceDurationInMs: o = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [g, _] = (0, i.useState)(null),
                        m = (0, i.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == s || s(e), a.length > 0 && _(e), t && n)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < r; e++) n(e);
                                    }
                                }, o),
                            [o, s, t, n, a],
                        );
                    (0, i.useEffect)(() => {
                        a.length > 0 && g && m(g);
                    }, a);
                    let f = (0, i.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, r.jsx)(h.sN, { ref: d, rangeChanged: m, totalCount: l, endReached: f, ...u });
                },
                m = (e) => {
                    let {
                            className: t,
                            customComponents: n,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: h,
                            overscan: m = 700,
                            pageSize: f = 20,
                            totalCount: v,
                            totalRequests: E,
                            debounceDurationInMs: x,
                            initialItemCount: S,
                            minInitialItemCount: y = 20,
                            handleRef: T,
                            alwaysShowScrollbar: O = !1,
                            testId: N,
                            isMobileLayout: R = !1,
                            shouldTriggerRangeChangedOn: w,
                            ...C
                        } = e,
                        [I, A] = (0, i.useState)(!1),
                        b = (0, i.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    A(e);
                                }, 100),
                            [],
                        ),
                        j = (0, i.useMemo)(() => {
                            var e, t;
                            return R
                                ? {
                                      Scroller: g,
                                      List: null != (e = null == n ? void 0 : n.List) ? e : a,
                                      Item: null == n ? void 0 : n.Item,
                                      ScrollSeekPlaceholder: null == n ? void 0 : n.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: g,
                                      List: null != (t = null == n ? void 0 : n.List) ? t : a,
                                      Item: null == n ? void 0 : n.Item,
                                      Header: null == n ? void 0 : n.Header,
                                      Footer: null == n ? void 0 : n.Footer,
                                      ScrollSeekPlaceholder: null == n ? void 0 : n.ScrollSeekPlaceholder,
                                  };
                        }, [n, E, R]),
                        k = S ? Math.min(S, y) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: I || O, [d().root_notScrolling]: !I && !O }, t),
                        'data-test-id': N,
                        children: [
                            R && (null == n ? void 0 : n.Header) && n.Header(),
                            (0, r.jsx)(_, {
                                overscan: m,
                                components: j,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: b,
                                itemContent: p,
                                scrollerRef: T,
                                totalCount: v,
                                pageSize: f,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: x,
                                initialItemCount: k,
                                shouldTriggerRangeChangedOn: w,
                                ...C,
                            }),
                            R && (null == n ? void 0 : n.Footer) && n.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => N });
            var r = n(88800),
                s = n(65724),
                o = n(84961),
                i = n(2058),
                l = n(30282),
                a = n(94144),
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
            let d = (e, t, n) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(n);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(n);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(n);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(n);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(n);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: n, tld: r, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, n) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, n) },
                    };
                };
            var g = n(62293),
                p = n(99839);
            let h = (e) => e(new Date(), (0, p.m)());
            var _ = n(51611),
                m = n(72288),
                f = n(11006),
                v = n.n(f),
                E = n(17392),
                x = n(29504),
                S = n(91292);
            let y = (e) => {
                    let { className: t, data: n } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(v().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    n.year,
                                    ' \xa0',
                                    (0, r.jsx)(S.N, {
                                        target: '_blank',
                                        href: n.yandexMusic.url,
                                        className: (0, s.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: n.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(S.N, {
                                target: '_blank',
                                href: n.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: n.yandexProjects.title,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { disclaimer: t, links: n } = e;
                    return (0, r.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: v().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: n.map((e) => {
                                    let { id: t, title: n, url: s } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, r.jsx)(S.N, { target: '_blank', href: s, className: v().link, 'data-test-id': E.S7.FOOTER_LINK, children: n }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { className: t, data: n } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, s.$)(v().root, v().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, r.jsx)(T, { links: n.links, disclaimer: n.disclaimer }), (0, r.jsx)(y, { data: n.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: n } = (0, m.g)(),
                    { formatDate: s, formatMessage: o } = (0, i.A)(),
                    { language: l } = (0, _.h)(),
                    a = u({ formatMessage: o, language: l, tld: n.tld, year: h(s) });
                return (0, r.jsx)(y, { className: t, data: a });
            });
            let N = (0, o.PA)((e) => {
                var t;
                let { className: n } = e,
                    { experiments: o, location: p, user: f } = (0, m.g)(),
                    { formatDate: E, formatMessage: x } = (0, i.A)(),
                    { isEnabled: S } = null != (t = (0, a.P)()) ? t : {},
                    { language: y } = (0, _.h)(),
                    T = ((e) => {
                        let { checkExperiment: t, formatMessage: n, isWebApplication: r, language: s, tld: o, userRegion: i, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: n, tld: r, language: s, userRegion: o } = e,
                                    i = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, s) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, s) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, s) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, s) },
                                    g = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, s) },
                                    p = [i, a, u];
                                return (n && 'ru' === o && p.push(l), p.push(g), p);
                            })({ formatMessage: n, isWebApplication: r, language: s, tld: o, userRegion: i }),
                            disclaimer: (0, g.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => n({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => n({ id: 'footer.explicit-content' }),
                                userRegion: i,
                            }),
                            copyrights: u({ formatMessage: n, language: s, tld: o, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: x,
                        isWebApplication: l.$3,
                        tld: p.tld,
                        language: y,
                        userRegion: f.account.data.userSessionRegionIso,
                        year: h(E),
                    });
                return (0, r.jsx)(O, { className: (0, s.$)({ [v().root_withOffsetForDeeplink]: S }, n), data: T });
            });
        },
        89108: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => s, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                s = 'yMusicPageStatePatchesUpdated';
        },
        94144: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => s, P: () => o });
            var r = n(53548);
            let s = (0, r.createContext)(null),
                o = () => (0, r.useContext)(s);
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
        99839: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
    },
]);
