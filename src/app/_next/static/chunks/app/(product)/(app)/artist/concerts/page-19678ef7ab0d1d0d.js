(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3042],
    {
        47: (e) => {
            e.exports = {
                root: 'ConcertCard_root__fcR9B',
                root_withConcertsRedesign: 'ConcertCard_root_withConcertsRedesign__0g8bs',
                ripple: 'ConcertCard_ripple__PW4xI',
                date: 'ConcertCard_date__ECoa3',
                dateWithMask: 'ConcertCard_dateWithMask__si35m',
                important: 'ConcertCard_important__dQYxN',
                dateColor: 'ConcertCard_dateColor__muPRD',
                button: 'ConcertCard_button__GQxNL',
            };
        },
        400: (e) => {
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
        1797: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => r });
            var n = a(40207);
            let r = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: r } = e;
                return (0, n.l)({ entity: t, callback: a, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        2488: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => b });
            var n = a(25839),
                r = a(88204),
                i = a(74631),
                s = a(8487),
                l = a(61493),
                o = a(49656),
                c = a(4254),
                d = a(83418),
                u = a(26330),
                m = a.n(u);
            let b = (0, r.PA)((e) => {
                let { id: t, concert: a, withCashback: r = !0, withInlineMeta: u = !1, titleSize: b = 'm' } = e,
                    x = [],
                    p = (0, n.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == a ? void 0 : a.eventKind) &&
                    x.push(
                        (0, n.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': l.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, n.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: a.eventKind } }),
                        }),
                    ),
                    (null == a ? void 0 : a.contentRating) &&
                        x.push(
                            p,
                            (0, n.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: a.contentRating,
                            }),
                        ));
                let g = (0, o.L)(() =>
                    (null == a ? void 0 : a.city)
                        ? (0, n.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                              children: a.city,
                          })
                        : null,
                );
                return (
                    u && g && x.push(p, g),
                    (0, n.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, n.jsx)(c.HL, {
                                variant: 'div',
                                size: b,
                                weight: 'medium',
                                className: m().city,
                                lineClamp: 1,
                                'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, n.jsx)('div', { className: m().info, children: x.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !u && g,
                            r &&
                                (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, n.jsx)(d.m, { className: m().cashback, valuePercent: a.cashbackValuePercent }),
                            r &&
                                !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, n.jsx)(d.m, { className: m().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        3656: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => u });
            var n = a(25839),
                r = a(82298),
                i = a(39004),
                s = a(61493),
                l = a(4254),
                o = a(98288),
                c = a(48631),
                d = a.n(c);
            let u = (e) => {
                let { datetime: t, className: a, monthClassName: c, dayClassName: u, weekdayClassName: m, withWeekday: b = !0, ...x } = e,
                    { formatDate: p } = (0, i.A)(),
                    g = ((e) => {
                        let { formatMessage: t } = (0, i.A)(),
                            a = {
                                0: t({ id: 'calendar.january-short' }),
                                1: t({ id: 'calendar.february-short' }),
                                2: t({ id: 'calendar.march-short' }),
                                3: t({ id: 'calendar.april-short' }),
                                4: t({ id: 'calendar.may-short' }),
                                5: t({ id: 'calendar.june-short' }),
                                6: t({ id: 'calendar.july-short' }),
                                7: t({ id: 'calendar.august-short' }),
                                8: t({ id: 'calendar.september-short' }),
                                9: t({ id: 'calendar.october-short' }),
                                10: t({ id: 'calendar.november-short' }),
                                11: t({ id: 'calendar.december-short' }),
                            };
                        if (e) return a[new Date(e).getMonth()];
                    })(t);
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(d().root, a),
                    'aria-label': p(t, (0, o.s)()),
                    ...x,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, n.jsx)(l.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, r.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: g,
                        }),
                        (0, n.jsx)(l.HL, {
                            variant: 'div',
                            className: (0, r.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: p(t, { day: 'numeric' }),
                        }),
                        b &&
                            (0, n.jsx)(l.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, r.$)(d().weekday, m),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: p(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        3669: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => v });
            var n = a(74631),
                r = a(67379),
                i = a(17850),
                s = a(59450),
                l = a(49656),
                o = a(84e3),
                c = a(58069),
                d = a(20258),
                u = a(26742),
                m = a(25195),
                b = a(37314),
                x = a(25488),
                p = a(97952),
                g = a(10764),
                N = a(72594);
            let v = () => {
                let e = (0, o.U)(),
                    t = (0, s.st)(),
                    { hash: a } = (0, s.gf)(),
                    { pageId: v, displayReasonId: h } = (0, p.$)(),
                    { tabId: f, tabPos: _, isTabSelectedByDefault: y } = (0, N.R)(),
                    { offsetBlockPosY: C } = (0, m.u)(),
                    { blockType: W, blockId: E, blockPosX: k, blockPosY: A, mainObjectId: T, mainObjectType: S, displayReasonId: I } = (0, u.N)(),
                    { filterKey: P, filterValue: L, filterPos: R } = (0, b.G)(),
                    { objectType: O, objectsCount: D, objectId: w, objectPosX: j, objectPosY: M } = (0, x.J)(),
                    { skeleton: F } = (0, g.b)(),
                    U = null != I ? I : h,
                    H = (0, l.L)(() => (void 0 !== C && void 0 !== A ? C + A : A));
                return (0, n.useCallback)(
                    (n, s) => {
                        if (!t || !v || !d.xK.includes(v) || !d.fD.includes(v)) return;
                        let l = c.F[v];
                        if (!l) return;
                        let o = {
                            hash: a,
                            pageId: l,
                            entityType: W,
                            entityId: E,
                            entityPosX: k,
                            entityPosY: H,
                            objectsCount: D,
                            viewUuid: s,
                            objectType: O,
                            objectId: w,
                            objectPosX: j,
                            objectPosY: M,
                        };
                        (void 0 !== P && ((o.filterKey = P), (o.filterValue = L), (o.filterPos = R)),
                            d.qG.includes(v) && ((o.tabId = f), (o.tabPos = _), (o.isTabSelectedByDefault = y)),
                            F && (o.skeletonId = F),
                            'string' == typeof T && 'string' == typeof S && ((o.mainObjectType = S), (o.mainObjectId = T)),
                            U && (o.displayReasonId = U));
                        let u = (0, r.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (n ? (0, i.Pf)(t.evgenInstance, u) : (0, i.nv)(t.evgenInstance, u));
                    },
                    [t, U, E, k, H, W, P, R, L, a, y, e, T, S, w, j, M, O, D, v, F, f, _],
                );
            };
        },
        6969: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var n = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        7050: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var n = a(39004),
                r = a(71035);
            let i = () => {
                let { formatMessage: e, formatNumber: t } = (0, n.A)();
                return (0, r.c)((a) => {
                    var n, r;
                    return (null == (n = a.price) ? void 0 : n.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(a.price.value, { style: 'currency', currency: null == (r = a.price) ? void 0 : r.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        9822: (e, t, a) => {
            'use strict';
            var n;
            ((t.HB = function (e, t) {
                let { objectsCount: a = 1, objectPosX: n = 1, objectPosY: i = 1 } = t,
                    s = (0, r.makeMetaParams)(2),
                    l = {
                        ...t,
                        objectsCount: a,
                        objectPosX: n,
                        objectPosY: i,
                        pageId: 'artist_screen',
                        pageType: 'object',
                        entityType: 'carousel',
                        entityId: 'concerts',
                        objectsType: 'concert',
                        _meta: s,
                    };
                e.trackEvent('Artist.Concerts.Showed', l);
            }),
                (t.U6 = function (e, t) {
                    let { objectsCount: a = 1, objectPosX: n = 1, objectPosY: i = 1 } = t,
                        s = (0, r.makeMetaParams)(2),
                        l = {
                            ...t,
                            objectsCount: a,
                            objectPosX: n,
                            objectPosY: i,
                            pageId: 'artist_screen',
                            pageType: 'object',
                            entityType: 'carousel',
                            entityId: 'concerts',
                            objectsType: 'concert',
                            from: 'artist_screen',
                            _meta: s,
                        };
                    e.trackEvent('Artist.Concerts.Navigated', l);
                }));
            let r = a(26895);
            (n || (n = {})).ConcertScreen = 'concert_screen';
        },
        10322: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var n = a(25839),
                r = a(74631),
                i = a(82064);
            let s = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: l, pagePlacement: o }), [t, a, s, l, o]);
                return (0, n.jsx)(i.r.Provider, { value: d, children: c });
            };
        },
        10959: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var n = a(44806);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: r, userRegion: i } = e;
                return 'ru' === i && t(n.z.WebNextFooterDisclaimer, 'on') ? a() : r();
            };
        },
        11618: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        11823: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.createRipple = void 0),
                (n.createRipple = function (e, t, a) {
                    let n = null != a ? a : e.currentTarget,
                        r = document.createElement('span'),
                        i = Math.max(n.clientWidth, n.clientHeight),
                        s = i / 2,
                        l = n.getBoundingClientRect(),
                        o = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                        c = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                    ((r.style.width = ''.concat(i, 'px')),
                        (r.style.height = ''.concat(i, 'px')),
                        (r.style.left = 0 === e.clientX ? '0px' : ''.concat(o - s, 'px')),
                        (r.style.top = ''.concat(c - s, 'px')),
                        r.classList.add(t));
                    let d = n.getElementsByClassName(t)[0];
                    (d && d.remove(), n.insertBefore(r, n.firstChild));
                }),
                n.__esModule);
            var r = n.createRipple;
        },
        12234: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var n = a(71872);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(n.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, a) => {
            var n = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function r(e) {
                if (!a.o(n, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = n[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(n)), (r.id = 12526), (e.exports = r));
        },
        12929: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => n, n: () => r });
            var n = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                r = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        13232: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => n });
            let n = (0, a(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        14514: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => n });
            let n = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        14693: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => o });
            var n,
                r = a(74631),
                i = {
                    810: (e) => {
                        e.exports = n || (n = a.t(r, 2));
                    },
                },
                s = {},
                l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useToggle = void 0));
                let e = (function e(t) {
                    var a = s[t];
                    if (void 0 !== a) return a.exports;
                    var n = (s[t] = { exports: {} });
                    return (i[t](n, n.exports, e), n.exports);
                })(810);
                l.useToggle = (t) => {
                    let [a, n] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        n(t);
                    }, [t]);
                    let r = (0, e.useCallback)(() => {
                            n((e) => !e);
                        }, []),
                        i = (0, e.useCallback)(() => {
                            n(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            n(!1);
                        }, []);
                    return { state: a, toggle: r, setState: n, toggleTrue: i, toggleFalse: s };
                };
            })(),
                l.__esModule);
            var o = l.useToggle;
        },
        17109: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => x });
            var n = a(74631),
                r = a(67379),
                i = a(36619),
                s = a(9822),
                l = a(47608),
                o = a(59450),
                c = a(20258),
                d = a(29481),
                u = a(25488),
                m = a(97952),
                b = a(84e3);
            let x = (e) => {
                let { artistId: t, viewUuid: a } = e,
                    x = (0, o.st)(),
                    { hash: p } = (0, o.gf)(),
                    { pageId: g } = (0, m.$)(),
                    { objectsCount: N, objectType: v, objectId: h, objectPosX: f, objectPosY: _, objectPos: y } = (0, u.J)(),
                    C = (0, d.N)(),
                    W = (0, b.U)(),
                    E = (0, n.useCallback)(
                        (e) => {
                            let a = (0, r.F)({
                                params: { hash: p, artistId: t, objectsCount: N, objectType: v, objectId: h, objectPosX: f, objectPosY: _, to: e },
                                logger: W,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            x && a && (0, s.U6)(x.evgenInstance, a);
                        },
                        [x, t, p, W, h, f, _, v, N],
                    ),
                    k = (0, n.useCallback)(
                        (e) => {
                            let n = (0, r.F)({
                                params: { hash: p, artistId: t, viewUuid: a, objectId: h, objectPos: y, to: e },
                                logger: W,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            x && n && a && (0, l.mh)(x.evgenInstance, n);
                        },
                        [x, t, p, W, h, y, a],
                    );
                return (0, n.useCallback)(
                    (e) => {
                        if (x && g && c.xK.includes(g))
                            switch (g) {
                                case c._Q.ARTIST:
                                    E(e);
                                    break;
                                case c._Q.ARTIST_CONCERTS:
                                    k(e);
                                    break;
                                case c._Q.SEARCH:
                                    C({ to: i.AppScreen.ConcertPurchaseScreen });
                            }
                    },
                    [x, g, C, k, E],
                );
            };
        },
        17951: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => r });
            var n = a(61399);
            let r = (e) => {
                var t, a;
                return e
                    ? {
                          id: Number(e.id),
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, n.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (a = e.isAvailable) || a, disclaimers: (0, n.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        19386: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => s });
            var n = a(74631),
                r = a(43354),
                i = a(25895);
            let s = (e) => {
                var t;
                let { setDeeplink: a } = null != (t = (0, r.P)()) ? t : {};
                (0, n.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, i.u)('/artist/:artistId', { params: { artistId: e } });
                        null == a || a(t);
                    }
                    return () => {
                        null == a || a(null);
                    };
                }, [e, a]);
            };
        },
        21532: (e) => {
            e.exports = {
                root: 'ConcertShimmer_root__yp58v',
                date: 'ConcertShimmer_date__GEOK7',
                meta: 'ConcertShimmer_meta__y8Y2_',
                title: 'ConcertShimmer_title__Rj3Dc',
                description: 'ConcertShimmer_description__tJ4Qp',
                action: 'ConcertShimmer_action__6c4QF',
            };
        },
        21784: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r, W: () => i });
            var n = a(74631);
            let r = (0, n.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function i() {
                return (0, n.useContext)(r);
            }
        },
        26076: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s });
            var n = a(25839);
            a(93588);
            var r = a(400),
                i = a.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: i().empty });
            };
        },
        26208: (e, t, a) => {
            'use strict';
            function n(e) {
                let { tld: t, url: a } = e;
                return a || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            a.d(t, { v: () => n });
        },
        26330: (e) => {
            e.exports = {
                root: 'ConcertMeta_root__CkKU3',
                city: 'ConcertMeta_city__ngDq2',
                info: 'ConcertMeta_info__czKlU',
                time: 'ConcertMeta_time__gX09u',
                cashback: 'ConcertMeta_cashback__fkZfk',
                meta: 'ConcertMeta_meta__GteL_',
                title: 'ConcertMeta_title__cqonb',
                location: 'ConcertMeta_location__HuUgv',
                rating: 'ConcertMeta_rating__P4Ana',
                separator: 'ConcertMeta_separator__BcJsF',
            };
        },
        27935: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            var n = a(89288),
                r = a(28869);
            function i(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: i, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, n.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: i,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        28604: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => r });
            var n = a(74631);
            let r = (e, t) => {
                (0, n.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28869: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var n = a(58025),
                r = a(78773),
                i = a(14514),
                s = a(56107);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = a(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = a(55040);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(r.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, i.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, i.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, a, n;
                    let r = (0, i.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (a = this.storage) || a.set(r), null == (n = this.changeLanguageHandler) || n.onChangeLanguage(r));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, i.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, i.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: a, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, n._)(this, 'language', void 0),
                        (0, n._)(this, 'storage', void 0),
                        (0, n._)(this, 'dictionary', void 0),
                        (0, n._)(this, 'config', void 0),
                        (0, n._)(this, 'logger', void 0),
                        (0, n._)(this, 'changeLanguageHandler', void 0),
                        (0, n._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = a),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [d] = l(e) || [];
                    this.language = (0, i.k)(this.config, d);
                }
            }
        },
        29809: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        30716: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            var n = a(84059),
                r = a(74631);
            a(93588);
            let i = (e) => {
                let t = (0, n.usePathname)(),
                    [a, i] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), i(!0));
                    }, [e, a, t]));
            };
        },
        30787: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => n });
            let n = (e, t) => {
                let [a, n] = e.split('?'),
                    r = new URLSearchParams(n || '');
                for (let [e, a] of new URLSearchParams(t).entries()) r.set(e, a);
                let i = r.toString();
                return ''.concat(a).concat(i ? '?'.concat(i) : '');
            };
        },
        38907: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => R });
            var n = a(25839),
                r = a(82298),
                i = a(88204),
                s = a(74631),
                l = a(36619),
                o = a(61493),
                c = a(71035),
                d = a(14693),
                u = a(11823),
                m = a(4071),
                b = a(86869),
                x = a(52512),
                p = a(85686),
                g = a(27954),
                N = a(44806),
                v = a(25895),
                h = a(17109),
                f = a(67379),
                _ = a(9822),
                y = a(47608),
                C = a(59450),
                W = a(20258),
                E = a(25488),
                k = a(97952),
                A = a(84e3),
                T = a(7050),
                S = a(64407),
                I = a(3656),
                P = a(47),
                L = a.n(P);
            let R = (0, i.PA)((e) => {
                let {
                        artistId: t,
                        concert: a,
                        meta: i,
                        viewUuid: P,
                        radius: R = 'l',
                        className: O,
                        shouldSendAnalyticsOnHide: D,
                        forceAfishaWidget: w,
                        shouldShowMask: j,
                    } = e,
                    { state: M, toggleTrue: F, toggleFalse: U } = (0, d.e)(!1),
                    { experiments: H } = (0, g.g)(),
                    Y = !w && H.checkExperiment(N.z.WebNextConcertPage, 'on'),
                    { href: B } = (0, v.u)('/concert/:concertId', { params: { concertId: a.id } }),
                    V = (0, p.Z)(B),
                    z = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            n = (0, C.st)(),
                            { hash: r } = (0, C.gf)(),
                            { pageId: i } = (0, k.$)(),
                            { objectsCount: l, objectType: o, objectId: c, objectPosX: d, objectPosY: u, objectPos: m } = (0, E.J)(),
                            b = (0, A.U)(),
                            x = (0, s.useCallback)(() => {
                                let e = (0, f.F)({
                                    params: { hash: r, artistId: t, objectsCount: l, objectType: o, objectId: c, objectPosX: d, objectPosY: u },
                                    logger: b,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                n && e && (0, _.HB)(n.evgenInstance, e);
                            }, [n, t, r, b, c, d, u, o, l]),
                            p = (0, s.useCallback)(() => {
                                let e = (0, f.F)({
                                    params: { hash: r, artistId: t, viewUuid: a, objectId: c, objectPos: m },
                                    logger: b,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                n && e && a && (0, y.Z4)(n.evgenInstance, e);
                            }, [n, t, r, b, c, m, a]);
                        return (0, s.useCallback)(() => {
                            if (n && i && W.xK.includes(i))
                                switch (i) {
                                    case W._Q.ARTIST:
                                    case W._Q.CONCERT:
                                        x();
                                        break;
                                    case W._Q.ARTIST_CONCERTS:
                                        p();
                                }
                        }, [n, i, p, x]);
                    })({ artistId: t, viewUuid: P }),
                    K = (0, h.m)({ artistId: t, viewUuid: P }),
                    { ref: G, intersectionPropertyId: X } = (0, x.n)({ callback: null !== t ? z : void 0, singleEvent: !D }),
                    Q = (0, s.useId)(),
                    $ = (0, s.useId)(),
                    J = (0, T.Y)()(a),
                    Z = (0, c.c)((e) => {
                        ((0, u.P)(e, L().ripple), Y && (V(e), K(l.FromArtistScreenTo.ConcertScreen)));
                    }),
                    q = (0, c.c)((e) => {
                        (F(), K(l.FromArtistScreenTo.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault());
                    });
                return (0, n.jsxs)(b.t, {
                    radius: R,
                    className: (0, r.$)(L().root, O, { [L().root_withConcertsRedesign]: a.isIdentityExperimentEnabled }),
                    ref: G,
                    'data-intersection-property-id': X,
                    onClick: Z,
                    children: [
                        a.datetime &&
                            (0, n.jsx)(I.d, {
                                datetime: a.datetime,
                                id: Q,
                                className: (0, r.$)(L().date, { [L().dateWithMask]: j, [L().important]: j }),
                                dayClassName: L().dateColor,
                                monthClassName: L().dateColor,
                            }),
                        (0, s.cloneElement)(i, { id: $, concert: a }),
                        a.dataSessionId &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(m.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: L().button,
                                        'aria-describedby': ''.concat(Q, ' ').concat($),
                                        'aria-label': J,
                                        onClick: q,
                                        'data-test-id': o.OA.concert.CONCERT_CARD_BUTTON,
                                        children: J,
                                    }),
                                    (0, n.jsx)(S.h, { dataSessionId: a.dataSessionId, isOpened: M, onOpen: F, onClose: U }),
                                ],
                            }),
                    ],
                });
            });
        },
        40207: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => u });
            var n = a(74631),
                r = a(59342),
                i = a(71035),
                s = a(36484),
                l = a(62562),
                o = a(27954),
                c = a(12929),
                d = a(95067);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: a,
                        getStorageKey: u,
                        callback: m,
                        onAfterHandled: b,
                        onBeforeHandle: x,
                        onReject: p,
                        modalBehavior: g,
                        preventDefaultWhenSafe: N,
                    } = e,
                    {
                        disclaimerModalState: v,
                        modals: { disclaimerModal: h },
                    } = (0, o.g)(),
                    f = (0, n.useRef)(String((0, r.A)())),
                    _ = (0, n.useRef)(!1),
                    y = (0, n.useRef)(!1),
                    C = (0, n.useRef)(0),
                    W = (0, n.useRef)(!0),
                    E = (0, l.N)().get(s.U2),
                    k = (0, i.c)((e) => {
                        (N && (null == e || e.preventDefault()), m && m(e), b && b());
                    });
                return (
                    (0, n.useEffect)(() => {
                        v.isUnsafeDisclaimerConfirmed && v.id === f.current && !_.current && (k(), (_.current = !0));
                    }, [v.id, v.isUnsafeDisclaimerConfirmed, k]),
                    (0, n.useEffect)(() => {
                        v.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && v.setModalData(t.resolvedModalData);
                    }, [v, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, n.useEffect)(
                        () => () => {
                            W.current = !1;
                        },
                        [],
                    ),
                    (0, i.c)(async (e) => {
                        if (!y.current) {
                            y.current = !0;
                            try {
                                if ((null == x || x(e), t)) {
                                    var n, r, i;
                                    let s = t.getDisclaimerEntityRef(a),
                                        l = null != (n = null == u ? void 0 : u(t, s)) ? n : ''.concat(s.entityType, '_').concat(s.entityId),
                                        o = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = E.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(l)) return void k(e);
                                    }
                                    if (o) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && v.setType(c.Z.UNSAFE),
                                            v.setDisclaimerRejectHandler(null != p ? p : null),
                                            v.setId(f.current),
                                            v.setEntityKey(l),
                                            v.setCurrentEntityRef(s.entityType, s.entityId),
                                            v.setShouldHistoryBack(!!(null == g ? void 0 : g.shouldHistoryBack)),
                                            v.setShouldCloseModalOnOutsidePress(null == (r = null == g ? void 0 : g.closeOnOutside) || r),
                                            v.setShouldCloseModalOnEscape(null == (i = null == g ? void 0 : g.closeOnEscape) || i),
                                            (C.current += 1));
                                        let a = C.current,
                                            n = await t.getModalDisclaimerData();
                                        if (C.current !== a || !1 === W.current) return;
                                        (v.setModalData(null != n ? n : null), (_.current = !1), h.open());
                                        return;
                                    }
                                    (N && (null == e || e.preventDefault()), k(e));
                                    return;
                                }
                                (N && (null == e || e.preventDefault()), k(e));
                            } finally {
                                y.current = !1;
                            }
                        }
                    })
                );
            };
        },
        41016: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => s });
            var n = a(71872),
                r = a(80461);
            let i = '@yandexmusic';
            function s(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: i, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: i,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(n.Lz, '/').concat(e.url) } },
                      };
            }
        },
        43354: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r, P: () => i });
            var n = a(74631);
            let r = (0, n.createContext)(null),
                i = () => (0, n.useContext)(r);
        },
        43464: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => r });
            let n = new Set(Object.values(a(85705).M)),
                r = (e) => 'string' == typeof e && n.has(e);
        },
        44806: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => n });
            var n = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNext = 'WebNext'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextShaderV3 = 'WebNextShaderV3'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextAlbumNotModified = 'WebNextAlbumNotModified'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextResourcesFileInfo = 'WebNextResourcesFileInfo'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextYnisonRestoreMusicAsVibe = 'WebNextYnisonRestoreMusicAsVibe'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextVibeTerminated = 'WebNextVibeTerminated'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.WebNextMarketLanding = 'WebNextMarketLanding'),
                    (e.ABTestIds = 'ABTestIds'),
                    (e.WebNextWaveAgentExperiment = 'WebNextWaveAgentExperiment'),
                    (e.WebNextUlitochka = 'WebNextUlitochka'),
                    (e.WebNextPromoLandingLayout = 'WebNextPromoLandingLayout'),
                    (e.WebNextToggleFavouritePlaylistVisibility = 'WebNextToggleFavouritePlaylistVisibility'),
                    (e.WebNextBrandedPlaylistsAxe = 'WebNextBrandedPlaylistsAxe'),
                    (e.WebNextNavbarExplicit = 'WebNextNavbarExplicit'),
                    (e.WebNextEnableSendFadeFieldsInPlays = 'WebNextEnableSendFadeFieldsInPlays'),
                    (e.WebNextSlidesPage = 'WebNextSlidesPage'),
                    (e.WebNextYnisonInactiveTimerDesktop = 'WebNextYnisonInactiveTimerDesktop'),
                    (e.WebNextPaywallTopSection = 'WebNextPaywallTopSection'),
                    (e.WebNextPaywallSecondButton = 'WebNextPaywallSecondButton'),
                    (e.WebNextPaywallDisclaimer = 'WebNextPaywallDisclaimer'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextWaveLikesAndShares = 'WebNextWaveLikesAndShares'),
                    (e.WebNextPlayerBarYellowButton = 'WebNextPlayerBarYellowButton'),
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextPlusOptionsSidebar = 'WebNextPlusOptionsSidebar'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextReplicsLumenUI = 'WebNextReplicsLumenUI'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion13766 = 'WebNextYaspVersion13766'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextYnisonNewConnector = 'WebNextYnisonNewConnector'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextWaveForTwoTest = 'WebNextWaveForTwoTest'),
                    (e.WebNextTrackComplaintForm = 'WebNextTrackComplaintForm'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    (e.WebNextYnisonUseConnectionType = 'WebNextYnisonUseConnectionType'),
                    (e.WebNextWaveForTwoOnboarding = 'WebNextWaveForTwoOnboarding'),
                    (e.WebNextNewWaveTabFeatCover = 'WebNextNewWaveTabFeatCover'),
                    (e.WebNextAIContentReductionSetting = 'WebNextAIContentReductionSetting'),
                    (e.WebNextQueryToVibeInputAnimation = 'WebNextQueryToVibeInputAnimation'),
                    (e.WebNextSendVibeFeedbacksWithTracks = 'WebNextSendVibeFeedbacksWithTracks'),
                    e
                );
            })({});
        },
        46646: (e, t, a) => {
            var n = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!a.o(n, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = n[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(n)), (r.id = 46646), (e.exports = r));
        },
        47608: (e, t, a) => {
            'use strict';
            ((t.__ = function (e, t) {
                let a = (0, n.makeMetaParams)(1),
                    r = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: a };
                e.trackEvent('ArtistConcerts.Opened', r);
            }),
                (t.pe = function (e, t) {
                    let a = (0, n.makeMetaParams)(1),
                        r = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: a };
                    e.trackEvent('ArtistConcerts.Closed', r);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: a = 1 } = t,
                        r = (0, n.makeMetaParams)(1),
                        i = { ...t, objectPos: a, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: r };
                    e.trackEvent('ArtistConcerts.Concert.Showed', i);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: a = 1 } = t,
                        r = (0, n.makeMetaParams)(1),
                        i = {
                            ...t,
                            objectPos: a,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: r,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', i);
                }));
            let n = a(26895);
        },
        48631: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        52512: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var n = a(74631),
                r = a(3669),
                i = a(13232);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, n.useRef)(null),
                    l = (0, r.D)(),
                    o = (0, n.useId)(),
                    c = (0, n.useContext)(i.B),
                    d = (0, n.useCallback)(
                        (n, r) => {
                            (e ? e(n, a ? r : void 0) : l(n, r), t && c.unobserveElement(o));
                        },
                        [e, c, o, l, t, a],
                    );
                return (
                    (0, n.useEffect)(
                        () => (
                            c.observeElement({ elementRef: s, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, l],
                    ),
                    { ref: s, intersectionPropertyId: o }
                );
            };
        },
        53712: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var n = a(25895);
            let r = {
                main: (0, n.u)('/'),
                chart: (0, n.u)('/chart'),
                chartPodcasts: (0, n.u)('/chart/podcasts'),
                collection: (0, n.u)('/collection'),
                collectionAlbums: (0, n.u)('/collection/albums'),
                collectionArtists: (0, n.u)('/collection/artists'),
                collectionClips: (0, n.u)('/collection/clips'),
                collectionDislikes: (0, n.u)('/collection/dislikes'),
                collectionKids: (0, n.u)('/collection/kids'),
                collectionKidsAlbums: (0, n.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, n.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, n.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, n.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, n.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, n.u)('/collection/multivibes'),
                collectionPlaylists: (0, n.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, n.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, n.u)('/collection/playlists/liked'),
                collectionShelf: (0, n.u)('/collection/shelf'),
                collectionShelfLiked: (0, n.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, n.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, n.u)('/collection/shelf/recently-played'),
                concerts: (0, n.u)('/concerts'),
                kids: (0, n.u)('/kids'),
                mixes: (0, n.u)('/mixes'),
                musicHistory: (0, n.u)('/music-history'),
                muzmarket: (0, n.u)('/muzmarket'),
                mymusic: (0, n.u)('/mymusic'),
                mymusicDownloadsTracks: (0, n.u)('/mymusic/downloads/tracks'),
                multivibe: (0, n.u)('/multivibe'),
                nonMusic: (0, n.u)('/non-music'),
                pay: (0, n.u)('/pay'),
                userSlides: (0, n.u)('/slides/user'),
                search: (0, n.u)('/search'),
                searchHistory: (0, n.u)('/search/history'),
                settings: (0, n.u)('/settings'),
                video: (0, n.u)('/video'),
            };
        },
        55040: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c, X: () => o });
            var n = a(36432),
                r = a(78773);
            let i = async (e) => e.then((e) => e.default),
                s = r.pE[r.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => i(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => i(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        a = t.get(e),
                        r = t.get('ru');
                    if (a) return a();
                    if (r) return r();
                    throw new n.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56412: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => C });
            var n = a(25839),
                r = a(82298),
                i = a(88204),
                s = a(74631),
                l = a(8487),
                o = a(61493),
                c = a(71035),
                d = a(4071),
                u = a(4254),
                m = a(36484),
                b = a(62562),
                x = a(21784),
                p = a(53712),
                g = a(85686),
                N = a(12929),
                v = a(95067),
                h = a(97522),
                f = a(71472),
                _ = a.n(f);
            let y = {
                    [N.n.ALBUM]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [N.n.PODCAST]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [N.n.ARTIST]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [N.n.TRACK]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [N.n.AUDIOBOOK]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [N.n.CLIP]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                C = (0, i.PA)((e) => {
                    var t;
                    let { modalState: a, data: i, onClose: f, className: C } = e,
                        W = null != i ? i : null == a ? void 0 : a.modalData,
                        E = (0, x.W)(),
                        k = (0, g.Z)(p.Z.main.href),
                        A = (0, b.N)().get(m.U2),
                        T = (0, c.c)(() => {
                            if (f) return f();
                            (E.canBack && E.back(), k());
                        }),
                        S = (null == W || null == (t = W.details) ? void 0 : t.url) && W.details.text,
                        I = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = A.get(v.c.ExEx),
                                n = new Date(),
                                r = n.setMinutes(n.getMinutes() + 15),
                                i =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? A.set(v.c.ExEx, [...t, i], { expires: new Date(r) }) : A.set(v.c.ExEx, [i], { expires: new Date(r) }),
                                null == f || f(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        P = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == f || f(), E.canBack && E.back(), k()) : null == f || f(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let L = (0, s.useMemo)(() => {
                            if (W) {
                                var e, t;
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(_().title, _().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: W.title,
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: _().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: W.description,
                                        }),
                                        S &&
                                            (0, n.jsx)(h.N, {
                                                href: null == (e = W.details) ? void 0 : e.url,
                                                className: _().link,
                                                children: (0, n.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = W.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [W, S]),
                        R = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === N.Z.UNSAFE
                                    ? (0, n.jsxs)('div', {
                                          className: _().buttons,
                                          children: [
                                              (0, n.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: P,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: _().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, n.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, n.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: _().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && y[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)('div', {
                                          className: _().buttons,
                                          children: (0, n.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: T,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: _().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, n.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [I, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, T, P],
                        );
                    return (0, n.jsx)('div', {
                        className: (0, r.$)(_().root, C),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, n.jsxs)('div', { className: _().container, children: [L, R] }),
                    });
                });
        },
        61288: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => r });
            let n = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && n.test(e);
            }
        },
        61399: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r });
            var n = a(43464);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, n.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61732: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            let n = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let n = window.document.createElement('meta');
                    return (n.setAttribute(e, t), n);
                },
                r = (e) => {
                    let { title: t, description: a, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = n('name', 'description');
                        (e.setAttribute('content', a), window.document.head.appendChild(e));
                    }
                    let i = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            a = Array.isArray(r.images) ? r.images[0] : null;
                        i = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let s = n('property', 'og:title'),
                            l = n('property', 'og:description'),
                            o = n('property', 'og:image');
                        (s.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', i),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o));
                    }
                };
        },
        64407: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => h });
            var n = a(25839),
                r = a(74631),
                i = a(39004),
                s = a(93588),
                l = a(61493),
                o = a(4071),
                c = a(35622),
                d = a(69084),
                u = a(36484),
                m = a(62562),
                b = a(92231),
                x = a(84059),
                p = a(30787),
                g = a(6969),
                N = a(29809),
                v = a.n(N);
            let h = (e) => {
                let { dataSessionId: t, isOpened: a, onOpen: N, onClose: h } = e,
                    f = (0, m.N)().get(u.V4),
                    { formatMessage: _ } = (0, i.A)(),
                    y = (() => {
                        let e = (0, x.useSearchParams)();
                        return (0, r.useCallback)(
                            (t) => {
                                let a = e.get(g.K.UTM_CAMPAIGN);
                                if (!a) return t;
                                let n = new URLSearchParams();
                                return (n.set(g.K.UTM_SOURCE, 'campaignid_'.concat(a)), (0, p.C)(t, n));
                            },
                            [e],
                        );
                    })(),
                    C = (0, r.useCallback)(
                        (e) => {
                            e.origin === f.afisha.host && 'close' === e.data.type && h();
                        },
                        [h, f.afisha.host],
                    );
                (0, r.useEffect)(
                    () => (
                        window.addEventListener('message', C),
                        () => {
                            window.removeEventListener('message', C);
                        }
                    ),
                    [C],
                );
                let W = (0, r.useCallback)(
                        (e) => {
                            e ? N() : h();
                        },
                        [h, N],
                    ),
                    E = (0, s.tE)(f, (0, b.u)()),
                    k = y(''.concat(f.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(E));
                return (0, n.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: a,
                    onOpenChange: W,
                    onClose: h,
                    showHeader: !1,
                    className: v().widget,
                    contentClassName: v().content,
                    overlayColor: 'full',
                    'data-test-id': l.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, n.jsx)(d.q, { children: (0, n.jsx)(o.$, { 'aria-label': _({ id: 'interface-actions.close' }), onClick: h }) }),
                        (0, n.jsx)('iframe', {
                            src: k,
                            className: v().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        64575: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var n = a(25839),
                r = a(70676);
            let i = (e) => Array.from({ length: e }, (e, t) => (0, n.jsx)(r.W, {}, t));
        },
        64595: (e, t, a) => {
            'use strict';
            function n() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => n });
        },
        69084: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var n,
                r = a(74631),
                i = {
                    5881: (e, t, a) => {
                        function n() {
                            for (var e, t, a = 0, n = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            n,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (n = e(t[a])) && (r && (r += ' '), (r += n));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (a.r(t), a.d(t, { clsx: () => n, default: () => r }));
                        let r = n;
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var r = null;
                            if ((void 0 !== n && (r = '' + n), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
                            else n = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    5531: function (e, t, a) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let r = a(4377),
                            i = a(5881),
                            s = a(810),
                            l = n(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: n, ...o } = e,
                                c = (0, i.clsx)(l.default.root, { [l.default.focusable]: a }, t);
                            return (0, s.isValidElement)(n)
                                ? (0, s.cloneElement)(n, { ...o, className: (0, i.clsx)(c, n.props.className) })
                                : (0, r.jsx)('span', { className: c, ...o, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = a.t(r, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, l), a.exports);
            }
            ((l.d = (e, t) => {
                for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.SROnly = void 0));
                var e = l(5531);
                Object.defineProperty(o, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = o.SROnly;
            o.__esModule;
        },
        69663: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => n });
            let n = () => ({ timeStyle: 'short' });
        },
        70676: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => c });
            var n = a(25839),
                r = a(82298),
                i = a(39004),
                s = a(23976),
                l = a(21532),
                o = a.n(l);
            let c = (e) => {
                let { className: t, isShimmerActive: a } = e,
                    { formatMessage: l } = (0, i.A)();
                return (0, n.jsxs)('div', {
                    'aria-label': l({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, r.$)(o().root, t),
                    children: [
                        (0, n.jsx)(s.W, { className: o().date, radius: 'm', isActive: a }),
                        (0, n.jsxs)('div', {
                            className: o().meta,
                            children: [
                                (0, n.jsx)(s.W, { className: o().title, radius: 's', isActive: a }),
                                (0, n.jsx)(s.W, { className: o().description, radius: 's', isActive: a }),
                            ],
                        }),
                        (0, n.jsx)(s.W, { className: o().action, radius: 'l', isActive: a }),
                    ],
                });
            };
        },
        71472: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        71613: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => Z }));
            var n = a(25839),
                r = a(84059),
                i = a(88204),
                s = a(74631),
                l = a(39004),
                o = a(59342),
                c = a(61493),
                d = a(13833),
                u = a(4254),
                m = a(1407),
                b = a(1797),
                x = a(38907),
                p = a(83139),
                g = a(2488),
                N = a(20258),
                v = a(95858),
                h = a(95314),
                f = a(10322),
                _ = a(21784),
                y = a(89192),
                C = a(30716),
                W = a(27954),
                E = a(44806),
                k = a(56412),
                A = a(99401),
                T = a(26076),
                S = a(10603),
                I = a(64575),
                P = a(67379),
                L = a(47608),
                R = a(59450),
                O = a(84e3),
                D = a(17951),
                w = a(61732),
                j = a(12234),
                M = a(64595),
                F = a(26208),
                U = a(89221),
                H = a(27935),
                Y = a(41016),
                B = a(80461),
                V = a(95445);
            async function z(e, t) {
                var a, n, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {} };
                let i = await (0, U.W)(t.locale),
                    s = i({ id: 'metadata.artist-concerts-title' }, { artistName: e.artist.name }),
                    l = i({ id: 'metadata.artist-concerts-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, H.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, F.v)({ tld: t.tld }),
                        siteName: i({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, Y.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, M.k)(),
                    appLinks: (0, j.X)({
                        additional: { ...t, url: null != (n = t.url) ? n : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: i({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, V.S)('/artist/:artistId/concerts', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var K = a(28604),
                G = a(19386),
                X = a(80751),
                Q = a.n(X);
            let $ = (0, i.PA)((e) => {
                var t, a, i;
                let { artistId: j, preloadedArtist: M, preloadedConcerts: F } = e,
                    { artist: U, disclaimerModalState: H, experiments: Y } = (0, W.g)(),
                    B = Y.checkExperiment(E.z.WebNextConcertsIdentityEventType, 'on'),
                    { formatMessage: V } = (0, l.A)(),
                    { contentScrollRef: X, setContentScrollRef: $ } = (0, y.g)(),
                    J = (0, _.W)(),
                    Z = (0, s.useRef)(String((0, o.A)())),
                    q = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            n = (0, R.st)(),
                            { hash: r } = (0, R.gf)(),
                            i = (0, O.U)();
                        return (0, s.useCallback)(() => {
                            if (!n || !t) return;
                            let e = (0, P.F)({ params: { hash: r, artistId: t, viewUuid: a }, logger: i, context: 'useSendEventOnConcertsPageOpened' });
                            e && (0, L.__)(n.evgenInstance, e);
                        }, [n, t, r, i, a]);
                    })({ artistId: j, viewUuid: Z.current }),
                    ee = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            n = (0, R.st)(),
                            { hash: r } = (0, R.gf)(),
                            i = (0, O.U)();
                        return (0, s.useCallback)(() => {
                            if (!n || !t) return;
                            let e = (0, P.F)({ params: { hash: r, artistId: t, viewUuid: a }, logger: i, context: 'useSendEventOnConcertsPageClosed' });
                            e && (0, L.pe)(n.evgenInstance, e);
                        }, [n, t, r, i, a]);
                    })({ artistId: j, viewUuid: Z.current });
                (0, s.useEffect)(
                    () => (
                        q(),
                        () => {
                            ee();
                        }
                    ),
                    [ee, q],
                );
                let et = (0, b.S)({ artist: null == (t = U.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, G.G)(j),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = U.meta) ? void 0 : e.artist.isUnsafeLegal) && et();
                    }, [null == (a = U.meta) ? void 0 : a.artist.isUnsafeLegal, et]),
                    (0, K._)(U, j),
                    (0, s.useEffect)(
                        () => () => {
                            U.concertsSubpage.reset();
                        },
                        [U],
                    ),
                    (0, C.J)(U.concertsSubpage.isResolved),
                    U.concertsSubpage.isNotFound && (0, r.notFound)());
                let ea = (0, s.useMemo)(() => {
                        var e;
                        if (U.concertsSubpage.isLoading) return (0, I.T)(10);
                        let t = B ? g.M : p.Z;
                        return null == (e = U.concertsSubpage.concerts)
                            ? void 0
                            : e.map((e, a) =>
                                  (0, n.jsx)(
                                      h.B,
                                      {
                                          objectId: String(e.id),
                                          objectPos: a + 1,
                                          children: (0, n.jsx)(x.V, {
                                              artistId: j,
                                              concert: e,
                                              viewUuid: Z.current,
                                              meta: (0, n.jsx)(t, { concert: e }),
                                              shouldShowMask: B,
                                          }),
                                      },
                                      e.id,
                                  ),
                              );
                    }, [U.concertsSubpage.concerts, U.concertsSubpage.isLoading, j, B, Z]),
                    en = [];
                if (
                    (U.concertsSubpage.isNeededToLoad && en.push(U.concertsSubpage.getData({ artistId: Number(j), preloadedConcerts: F })),
                    U.infoLoadingState.isNeededToLoad && en.push(U.getInfo({ artistId: j, preloadedArtist: M })),
                    ((e) => {
                        var t;
                        (0, s.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                z({ artist: (0, D.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, w.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(U),
                    en.length && (0, s.use)(Promise.allSettled(en)),
                    null == (i = U.meta) ? void 0 : i.artist.isLegalRejected)
                )
                    return (0, n.jsx)(k.M, { modalState: H });
                let er = (0, s.useMemo)(
                    () =>
                        B && U.concertsSubpage.artistTitle
                            ? V({ id: 'page.artist-all-concerts-header' }, { artistName: U.concertsSubpage.artistTitle })
                            : V({ id: 'page.artist-concerts-header' }, { artistName: U.commonSubPage.artistName }),
                    [B, U.concertsSubpage.artistTitle, U.commonSubPage.artistName, V],
                );
                return (0, n.jsx)(f.n, {
                    pageId: N._Q.ARTIST_CONCERTS,
                    pageEntityId: j,
                    children: (0, n.jsx)(v.j, {
                        children: (0, n.jsx)(m.h, {
                            scrollElement: X,
                            outerTitle: er,
                            children: (0, n.jsxs)('div', {
                                className: Q().root,
                                'data-test-id': c.Xk.artist.ARTIST_CONCERTS_PAGE,
                                children: [
                                    (0, n.jsx)(S.Y, {
                                        variant: S.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: J.canBack,
                                        children: (0, n.jsx)(u.DZ, { id: 'concerts-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: er }),
                                    }),
                                    (0, n.jsxs)(d.N, {
                                        ref: $,
                                        className: Q().scrollableContent,
                                        containerClassName: Q().container,
                                        children: [
                                            (0, n.jsx)('div', { className: Q().content, 'aria-labelledby': 'concerts-header', tabIndex: 0, children: ea }),
                                            (0, n.jsx)(T.A, { children: (0, n.jsx)(A.w, { className: Q().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            });
            var J = a(61288);
            let Z = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, J.L)(e)) || (0, r.notFound)(), (0, n.jsx)($, { artistId: e }));
            };
        },
        78773: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => i, cy: () => r, pE: () => n });
            let n = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                r = 'yandex',
                i = 'ru-RU';
        },
        80461: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => n });
            var n = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        80751: (e) => {
            e.exports = {
                root: 'ArtistConcertsPage_root__DDTmb',
                scrollableContent: 'ArtistConcertsPage_scrollableContent__aiEjd',
                container: 'ArtistConcertsPage_container__ho6Fw',
                content: 'ArtistConcertsPage_content__Ynto2',
                footer: 'ArtistConcertsPage_footer__kQL7m',
            };
        },
        83139: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => m });
            var n = a(25839),
                r = a(88204),
                i = a(74631),
                s = a(39004),
                l = a(4254),
                o = a(69663),
                c = a(83418),
                d = a(26330),
                u = a.n(d);
            let m = (0, r.PA)((e) => {
                let { id: t, concert: a } = e,
                    { formatDate: r } = (0, s.A)(),
                    d = [],
                    m = (0, n.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == a ? void 0 : a.place) && d.push((0, n.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.place })),
                    (null == a ? void 0 : a.datetime) &&
                        d.push(m, (0, n.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', className: u().time, children: r(a.datetime, (0, o.f)()) })),
                    (null == a ? void 0 : a.contentRating) && d.push(m, (0, n.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                    (0, n.jsxs)('div', {
                        className: u().root,
                        id: t,
                        children: [
                            (0, n.jsx)(l.HL, { variant: 'div', size: 'm', weight: 'medium', className: u().city, lineClamp: 1, children: null == a ? void 0 : a.city }),
                            (0, n.jsx)('div', { className: u().info, children: d.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, n.jsx)(c.m, { className: u().cashback, valuePercent: a.cashbackValuePercent }),
                            !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, n.jsx)(c.m, { className: u().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        83418: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => d });
            var n = a(25839),
                r = a(82298),
                i = a(61493),
                s = a(66738),
                l = a(4254),
                o = a(11618),
                c = a.n(o);
            let d = (e) => {
                let { title: t, className: a, titleClassName: o, valuePercent: d } = e;
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(c().root, a),
                    children: [
                        (0, n.jsx)(s.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, n.jsx)(l.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, r.$)(c().title, o),
                            'data-test-id': i.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        85705: (e, t, a) => {
            'use strict';
            var n;
            (a.d(t, { M: () => n }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(n || (n = {})));
        },
        86166: (e, t, a) => {
            'use strict';
            var n;
            (a.d(t, { $: () => n }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(n || (n = {})));
        },
        86869: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => c });
            var n,
                r = a(74631),
                i = {
                    5881: (e, t, a) => {
                        function n() {
                            for (var e, t, a = 0, n = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            n,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (n = e(t[a])) && (r && (r += ' '), (r += n));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (a.r(t), a.d(t, { clsx: () => n, default: () => r }));
                        let r = n;
                    },
                    2095: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => n }));
                        let n = {
                            root: 'qaIScXjx1qyXuaIHXQIo',
                            root_radius_xs: 'wdE2qVRIlWUesuBfzCis',
                            root_radius_s: '_7gw1qGE6BeUAdSMbhRx',
                            root_radius_m: 'emVxQKB1wJc9FwuIBG8o',
                            root_radius_l: 'NFJAa_h_EAjwQVY7bU5J',
                            root_radius_xl: 'SRpgu5IgfEGM_VHllm_6',
                            root_radius_round: 'QIWoHHDozGGG5w2JYImt',
                            root_withShadow: 'gtfPudKIIbfkwmuOBzwI',
                            root_variant_default: 'ZcpulvHgF_wsgzB8Hye9',
                            root_variant_outline: 'kPFFrHHxF3SOjiETAE6Q',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var r = null;
                            if ((void 0 !== n && (r = '' + n), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
                            else n = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    6009: function (e, t, a) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let r = a(4377),
                            i = a(5881),
                            s = a(810),
                            l = n(a(2095)),
                            o = (e) => {
                                let { forwardRef: t, radius: a, variant: n = 'default', children: s, className: o, withShadow: c, style: d, ...u } = e;
                                return (0, r.jsx)('div', {
                                    className: (0, i.clsx)(
                                        l.default.root,
                                        l.default['root_radius_'.concat(a)],
                                        l.default['root_variant_'.concat(n)],
                                        { [l.default.root_withShadow]: c },
                                        o,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: s,
                                });
                            };
                        t.Paper = (0, s.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = a.t(r, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, l), a.exports);
            }
            ((l.d = (e, t) => {
                for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'U', { value: !0 }), (o.X = void 0));
                var e = l(6009);
                Object.defineProperty(o, 'X', {
                    enumerable: !0,
                    get: function () {
                        return e.Paper;
                    },
                });
            })();
            var c = o.X;
            o.U;
        },
        89221: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => d });
            var n = a(13580),
                r = a(74631),
                i = a(78773),
                s = a(28869),
                l = a(14514),
                o = a(55040);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        a = (0, l.k)(i.pE[i.cy], t),
                        r = await c(a);
                    return (e, t) => {
                        let i = null == r ? void 0 : r[e.id],
                            s = '';
                        return ((Array.isArray(i) || 'string' == typeof i) && (s = new n.S(i, a).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        89514: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        95063: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 71613));
        },
        95314: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => s });
            var n = a(25839),
                r = a(74631),
                i = a(66192);
            let s = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    b = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, a, s, l, o, c, d, u],
                    );
                return (0, n.jsx)(i.l.Provider, { value: b, children: m });
            };
        },
        95445: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var n = a(25895);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                i = function (e, t) {
                    for (var a = arguments.length, i = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) i[s - 2] = arguments[s];
                    let [l] = i,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, n.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: a } = (0, n.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = a;
                    }
                    return { canonical: u, languages: d };
                };
        },
        95858: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => o });
            var n = a(25839),
                r = a(74631),
                i = a(59342),
                s = a(91886),
                l = a(13232);
            let o = (e) => {
                let { children: t } = e,
                    a = (0, r.useRef)({}),
                    o = (0, r.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    n = a.current[t];
                                if (n) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, i.A)());
                                            (n.callback(!0, e), (n.showed = !0), (n.viewUuid = e));
                                        }, 1e3);
                                        n.timerId = e;
                                    }
                                    (!e.isIntersecting && n.showed && (n.callback(!1, n.viewUuid), (n.showed = !1), (n.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(n.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, r.useCallback)((e) => {
                        var t;
                        !a.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = o.current) || t.observe(e.elementRef.current), (a.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, r.useCallback)((e) => {
                        let t = a.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete a.current[e]);
                    }, []);
                (0, r.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = o.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, r.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, n.jsx)(l.B.Provider, { value: u, children: t });
            };
        },
        98288: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => n });
            let n = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        99401: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => E });
            var n = a(25839),
                r = a(82298),
                i = a(88204),
                s = a(39004),
                l = a(93588),
                o = a(43354),
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
            let d = (e, t, a) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: a, tld: n, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, a) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, a) },
                    };
                };
            var m = a(10959),
                b = a(89514);
            let x = (e) => e(new Date(), (0, b.m)());
            var p = a(96433),
                g = a(27954),
                N = a(400),
                v = a.n(N),
                h = a(61493),
                f = a(4254),
                _ = a(97522);
            let y = (e) => {
                    let { className: t, data: a } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, r.$)(v().copyrights, t),
                        'data-test-id': h.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, n.jsx)(_.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': h.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(_.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': h.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, n.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: v().list,
                                'data-test-id': h.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, n.jsx)(_.N, { target: '_blank', href: r, className: v().link, 'data-test-id': h.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': h.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                W = (e) => {
                    let { className: t, data: a } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, r.$)(v().root, v().important, t),
                        'data-test-id': h.S7.FOOTER,
                        children: [(0, n.jsx)(C, { links: a.links, disclaimer: a.disclaimer }), (0, n.jsx)(y, { data: a.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, g.g)(),
                    { formatDate: r, formatMessage: i } = (0, s.A)(),
                    { language: l } = (0, p.h)(),
                    o = u({ formatMessage: i, language: l, tld: a.tld, year: x(r) });
                return (0, n.jsx)(y, { className: t, data: o });
            });
            let E = (0, i.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: i, location: b, user: N } = (0, g.g)(),
                    { formatDate: h, formatMessage: f } = (0, s.A)(),
                    { isEnabled: _ } = null != (t = (0, o.P)()) ? t : {},
                    { language: y } = (0, p.h)(),
                    C = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: n, language: r, tld: i, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: n, language: r, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, r) },
                                    b = [s, o, u];
                                return (a && 'ru' === i && b.push(l), b.push(m), b);
                            })({ formatMessage: a, isWebApplication: n, language: r, tld: i, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: a, language: r, tld: i, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: l.$3,
                        tld: b.tld,
                        language: y,
                        userRegion: N.account.data.userSessionRegionIso,
                        year: x(h),
                    });
                return (0, n.jsx)(W, { className: (0, r.$)({ [v().root_withOffsetForDeeplink]: _ }, a), data: C });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7349, 1107, 3349, 1676, 8084, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 1817, 1943, 3580, 3269, 4163, 3246, 4517, 6504, 8836, 4434, 5622, 4475,
                5056, 7358,
            ],
            () => e((e.s = 95063)),
        ),
            (_N_E = e.O()));
    },
]);
