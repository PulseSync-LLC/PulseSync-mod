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
        1797: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => a });
            var r = n(40207);
            let a = (e) => {
                let { artist: t, callback: n, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: n, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        2488: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => b });
            var r = n(25839),
                a = n(88204),
                i = n(74631),
                s = n(8487),
                l = n(61493),
                o = n(49656),
                c = n(4254),
                d = n(83418),
                u = n(26330),
                _ = n.n(u);
            let b = (0, a.PA)((e) => {
                let { id: t, concert: n, withCashback: a = !0, withInlineMeta: u = !1, titleSize: b = 'm' } = e,
                    m = [],
                    p = (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == n ? void 0 : n.eventKind) &&
                    m.push(
                        (0, r.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': l.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, r.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: n.eventKind } }),
                        }),
                    ),
                    (null == n ? void 0 : n.contentRating) &&
                        m.push(
                            p,
                            (0, r.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: n.contentRating,
                            }),
                        ));
                let N = (0, o.L)(() =>
                    (null == n ? void 0 : n.city)
                        ? (0, r.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                              children: n.city,
                          })
                        : null,
                );
                return (
                    u && N && m.push(p, N),
                    (0, r.jsxs)('div', {
                        className: _().root,
                        id: t,
                        children: [
                            (0, r.jsx)(c.HL, {
                                variant: 'div',
                                size: b,
                                weight: 'medium',
                                className: _().city,
                                lineClamp: 1,
                                'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                                children: null == n ? void 0 : n.title,
                            }),
                            (0, r.jsx)('div', { className: _().info, children: m.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !u && N,
                            a &&
                                (null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                n.cashbackValuePercent &&
                                (0, r.jsx)(d.m, { className: _().cashback, valuePercent: n.cashbackValuePercent }),
                            a &&
                                !(null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                (null == n ? void 0 : n.isCashbackExperimentEnabled) &&
                                n.cashbackTitle &&
                                (0, r.jsx)(d.m, { className: _().cashback, title: n.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        3656: (e, t, n) => {
            'use strict';
            n.d(t, { d: () => u });
            var r = n(25839),
                a = n(82298),
                i = n(39004),
                s = n(61493),
                l = n(4254),
                o = n(98288),
                c = n(48631),
                d = n.n(c);
            let u = (e) => {
                let { datetime: t, className: n, monthClassName: c, dayClassName: u, weekdayClassName: _, withWeekday: b = !0, ...m } = e,
                    { formatDate: p } = (0, i.A)(),
                    N = ((e) => {
                        let { formatMessage: t } = (0, i.A)(),
                            n = {
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
                        if (e) return n[new Date(e).getMonth()];
                    })(t);
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(d().root, n),
                    'aria-label': p(t, (0, o.s)()),
                    ...m,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, a.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: N,
                        }),
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            className: (0, a.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: p(t, { day: 'numeric' }),
                        }),
                        b &&
                            (0, r.jsx)(l.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, a.$)(d().weekday, _),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: p(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        3669: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => g });
            var r = n(74631),
                a = n(67379),
                i = n(20934),
                s = n(59450),
                l = n(49656),
                o = n(84e3),
                c = n(58069),
                d = n(20258),
                u = n(26742),
                _ = n(25195),
                b = n(37314),
                m = n(25488),
                p = n(97952),
                N = n(10764),
                x = n(72594);
            let g = () => {
                let e = (0, o.U)(),
                    t = (0, s.st)(),
                    { hash: n } = (0, s.gf)(),
                    { pageId: g, displayReasonId: v } = (0, p.$)(),
                    { tabId: f, tabPos: S, isTabSelectedByDefault: h } = (0, x.R)(),
                    { offsetBlockPosY: E } = (0, _.u)(),
                    { blockType: C, blockId: A, blockPosX: y, blockPosY: I, mainObjectId: T, mainObjectType: L, displayReasonId: O } = (0, u.N)(),
                    { filterKey: R, filterValue: k, filterPos: W } = (0, b.G)(),
                    { objectType: P, objectsCount: D, objectId: w, objectPosX: M, objectPosY: j } = (0, m.J)(),
                    { skeleton: U } = (0, N.b)(),
                    B = null != O ? O : v,
                    F = (0, l.L)(() => (void 0 !== E && void 0 !== I ? E + I : I));
                return (0, r.useCallback)(
                    (r, s) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let l = c.F[g];
                        if (!l) return;
                        let o = {
                            hash: n,
                            pageId: l,
                            entityType: C,
                            entityId: A,
                            entityPosX: y,
                            entityPosY: F,
                            objectsCount: D,
                            viewUuid: s,
                            objectType: P,
                            objectId: w,
                            objectPosX: M,
                            objectPosY: j,
                        };
                        (void 0 !== R && ((o.filterKey = R), (o.filterValue = k), (o.filterPos = W)),
                            d.qG.includes(g) && ((o.tabId = f), (o.tabPos = S), (o.isTabSelectedByDefault = h)),
                            U && (o.skeletonId = U),
                            'string' == typeof T && 'string' == typeof L && ((o.mainObjectType = L), (o.mainObjectId = T)),
                            B && (o.displayReasonId = B));
                        let u = (0, a.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (r ? (0, i.Pf)(t.evgenInstance, u) : (0, i.nv)(t.evgenInstance, u));
                    },
                    [t, B, A, y, F, C, R, W, k, n, h, e, T, L, w, M, j, P, D, g, U, f, S],
                );
            };
        },
        6969: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => r });
            var r = (function (e) {
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
        7050: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => i });
            var r = n(39004),
                a = n(71035);
            let i = () => {
                let { formatMessage: e, formatNumber: t } = (0, r.A)();
                return (0, a.c)((n) => {
                    var r, a;
                    return (null == (r = n.price) ? void 0 : r.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(n.price.value, { style: 'currency', currency: null == (a = n.price) ? void 0 : a.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        9079: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => c });
            var r,
                a = n(74631),
                i = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length;)
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (a && (a += ' '), (a += r));
                                            else for (n in t) t[n] && (a && (a += ' '), (a += n));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (n.r(t), n.d(t, { clsx: () => r, default: () => a }));
                        let a = r;
                    },
                    7354: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: n, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    3616: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let a = n(4377),
                            i = n(810),
                            s = n(5881),
                            l = r(n(7354)),
                            o = (e) => {
                                let {
                                        component: t = (0, a.jsx)('a', {}),
                                        block: n,
                                        target: r,
                                        rel: o,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: _,
                                        icon: b,
                                        className: m,
                                        children: p,
                                        textClassName: N = '',
                                        containerClassName: x,
                                        ...g
                                    } = e,
                                    v = (0, i.useId)(),
                                    f = !i.Children.count(p),
                                    S = 'left' === u,
                                    h = null;
                                if (void 0 !== b) {
                                    var E;
                                    h = (0, i.cloneElement)(b, {
                                        className: (0, s.clsx)(
                                            l.default.icon,
                                            { [l.default['icon_position_'.concat(u)]]: !f && u },
                                            null == (E = b.props) ? void 0 : E.className,
                                        ),
                                        key: v,
                                    });
                                }
                                let C = (0, i.useMemo)(
                                    () =>
                                        b
                                            ? (0, a.jsxs)('div', {
                                                  className: (0, s.clsx)(l.default.iconContainer, x),
                                                  children: [S && h, !f && (0, a.jsx)('span', { className: N, children: p }), !S && h],
                                              })
                                            : p,
                                    [p, x, b, S, f, h, N],
                                );
                                return (0, i.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: r,
                                        rel: '_blank' === r && void 0 === o ? 'noopener noreferrer' : o,
                                        href: c,
                                        className: (0, s.clsx)(l.default.root, { [l.default.block]: n, [l.default.flexIcon]: b && _, [l.default.iconOnly]: b && f }, m),
                                        ...g,
                                        ...t.props,
                                    },
                                    C,
                                );
                            };
                        t.Link = (0, i.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var n = (s[e] = { exports: {} });
                return (i[e].call(n.exports, n, n.exports, l), n.exports);
            }
            ((l.d = (e, t) => {
                for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.r = void 0));
                var e = l(3616);
                Object.defineProperty(o, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = o.r;
            o.X;
        },
        10322: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => s });
            var r = n(25839),
                a = n(74631),
                i = n(82064);
            let s = (e) => {
                let { pageId: t, pageEntityId: n, displayReasonId: s, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: n, displayReasonId: s, pageStyle: l, pagePlacement: o }), [t, n, s, l, o]);
                return (0, r.jsx)(i.r.Provider, { value: d, children: c });
            };
        },
        10764: (e, t, n) => {
            'use strict';
            n.d(t, { b: () => i });
            var r = n(74631),
                a = n(97904);
            function i() {
                return (0, r.useContext)(a.D);
            }
        },
        10959: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => a });
            var r = n(44806);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: n, getExplicitContent: a, userRegion: i } = e;
                return 'ru' === i && t(r.z.WebNextFooterDisclaimer, 'on') ? n() : a();
            };
        },
        11618: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        11823: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => a });
            var r = {};
            (Object.defineProperty(r, '__esModule', { value: !0 }),
                (r.createRipple = void 0),
                (r.createRipple = function (e, t, n) {
                    let r = null != n ? n : e.currentTarget,
                        a = document.createElement('span'),
                        i = Math.max(r.clientWidth, r.clientHeight),
                        s = i / 2,
                        l = r.getBoundingClientRect(),
                        o = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                        c = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                    ((a.style.width = ''.concat(i, 'px')),
                        (a.style.height = ''.concat(i, 'px')),
                        (a.style.left = 0 === e.clientX ? '0px' : ''.concat(o - s, 'px')),
                        (a.style.top = ''.concat(c - s, 'px')),
                        a.classList.add(t));
                    let d = r.getElementsByClassName(t)[0];
                    (d && d.remove(), r.insertBefore(a, r.firstChild));
                }),
                r.__esModule);
            var a = r.createRipple;
        },
        12234: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => a });
            var r = n(71872);
            function a(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(r.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, n) => {
            var r = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function a(e) {
                if (!n.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    a = t[0];
                return n.e(t[1]).then(() => n.t(a, 19));
            }
            ((a.keys = () => Object.keys(r)), (a.id = 12526), (e.exports = a));
        },
        12929: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => r, n: () => a });
            var r = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                a = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        13232: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => r });
            let r = (0, n(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        14482: (e, t, n) => {
            'use strict';
            n.d(t, { p: () => r });
            let r = (0, n(74631).createContext)({
                blockId: void 0,
                blockType: void 0,
                blockIdForFrom: void 0,
                blockPosX: void 0,
                blockPosY: void 0,
                objectsCount: void 0,
                mainObjectType: void 0,
                mainObjectId: void 0,
                displayReasonId: void 0,
            });
        },
        14514: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => r });
            let r = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        14693: (e, t, n) => {
            'use strict';
            n.d(t, { e: () => o });
            var r,
                a = n(74631),
                i = {
                    810: (e) => {
                        e.exports = r || (r = n.t(a, 2));
                    },
                },
                s = {},
                l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useToggle = void 0));
                let e = (function e(t) {
                    var n = s[t];
                    if (void 0 !== n) return n.exports;
                    var r = (s[t] = { exports: {} });
                    return (i[t](r, r.exports, e), r.exports);
                })(810);
                l.useToggle = (t) => {
                    let [n, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        i = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: n, toggle: a, setState: r, toggleTrue: i, toggleFalse: s };
                };
            })(),
                l.__esModule);
            var o = l.useToggle;
        },
        17109: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => m });
            var r = n(74631),
                a = n(67379),
                i = n(44031),
                s = n(69394),
                l = n(42220),
                o = n(59450),
                c = n(20258),
                d = n(29481),
                u = n(25488),
                _ = n(97952),
                b = n(84e3);
            let m = (e) => {
                let { artistId: t, viewUuid: n } = e,
                    m = (0, o.st)(),
                    { hash: p } = (0, o.gf)(),
                    { pageId: N } = (0, _.$)(),
                    { objectsCount: x, objectType: g, objectId: v, objectPosX: f, objectPosY: S, objectPos: h } = (0, u.J)(),
                    E = (0, d.N)(),
                    C = (0, b.U)(),
                    A = (0, r.useCallback)(
                        (e) => {
                            let n = (0, a.F)({
                                params: { hash: p, artistId: t, objectsCount: x, objectType: g, objectId: v, objectPosX: f, objectPosY: S, to: e },
                                logger: C,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            m && n && (0, s.U6)(m.evgenInstance, n);
                        },
                        [m, t, p, C, v, f, S, g, x],
                    ),
                    y = (0, r.useCallback)(
                        (e) => {
                            let r = (0, a.F)({
                                params: { hash: p, artistId: t, viewUuid: n, objectId: v, objectPos: h, to: e },
                                logger: C,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            m && r && n && (0, l.mh)(m.evgenInstance, r);
                        },
                        [m, t, p, C, v, h, n],
                    );
                return (0, r.useCallback)(
                    (e) => {
                        if (m && N && c.xK.includes(N))
                            switch (N) {
                                case c._Q.ARTIST:
                                    A(e);
                                    break;
                                case c._Q.ARTIST_CONCERTS:
                                    y(e);
                                    break;
                                case c._Q.SEARCH:
                                    E({ to: i.AppScreen.ConcertPurchaseScreen });
                            }
                    },
                    [m, N, E, y, A],
                );
            };
        },
        17951: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => a });
            var r = n(61399);
            let a = (e) => {
                var t, n;
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
                                            disclaimers: (0, r.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (n = e.isAvailable) || n, disclaimers: (0, r.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        18421: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { C: () => i }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        // for PulseSync: BEGIN substituted-track enum extension
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                        // for PulseSync: END substituted-track enum extension
                })(r || (r = {})));
            let a = new Set(Object.values(r)),
                i = (e) => 'string' == typeof e && a.has(e);
        },
        19386: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => s });
            var r = n(74631),
                a = n(43354),
                i = n(25895);
            let s = (e) => {
                var t;
                let { setDeeplink: n } = null != (t = (0, a.P)()) ? t : {};
                (0, r.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, i.u)('/artist/:artistId', { params: { artistId: e } });
                        null == n || n(t);
                    }
                    return () => {
                        null == n || n(null);
                    };
                }, [e, n]);
            };
        },
        20258: (e, t, n) => {
            'use strict';
            n.d(t, { _Q: () => r, fD: () => i, qG: () => s, xK: () => a });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
            let a = [
                    'home',
                    'own_collection',
                    'landing',
                    'own_artists',
                    'artist',
                    'artist_concerts_screen',
                    'non_music',
                    'playlist',
                    'search',
                    'video_player',
                    'label',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_unified_screen',
                ],
                i = [
                    'home',
                    'landing',
                    'non_music',
                    'own_collection',
                    'own_artists',
                    'search',
                    'artist',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_limit_screen',
                    'multivibe_unified_screen',
                ],
                s = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
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
        21784: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => a, W: () => i });
            var r = n(74631);
            let a = (0, r.createContext)({
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
                return (0, r.useContext)(a);
            }
        },
        25195: (e, t, n) => {
            'use strict';
            n.d(t, { u: () => i });
            var r = n(74631),
                a = n(57487);
            function i() {
                return (0, r.useContext)(a.E);
            }
        },
        25488: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => i });
            var r = n(74631),
                a = n(66192);
            function i() {
                return (0, r.useContext)(a.l);
            }
        },
        26076: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => s });
            var r = n(25839);
            n(93588);
            var a = n(400),
                i = n.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: i().empty });
            };
        },
        26208: (e, t, n) => {
            'use strict';
            function r(e) {
                let { tld: t, url: n } = e;
                return n || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            n.d(t, { v: () => r });
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
        26742: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => i });
            var r = n(74631),
                a = n(14482);
            function i() {
                return (0, r.useContext)(a.p);
            }
        },
        27935: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => i });
            var r = n(89288),
                a = n(28869);
            function i(e) {
                let { ogTitle: t, ogDescription: n, fullUrl: i, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, r.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: n,
                    url: i,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || a.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        28604: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => a });
            var r = n(74631);
            let a = (e, t) => {
                (0, r.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28869: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => u });
            var r = n(58025),
                a = n(78773),
                i = n(14514),
                s = n(56107);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = n(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = n(55040);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(a.Xn);
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
                    var t, n, r;
                    let a = (0, i.k)(this.config, e);
                    a !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (n = this.storage) || n.set(a), null == (r = this.changeLanguageHandler) || r.onChangeLanguage(a));
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
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: n, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, r._)(this, 'language', void 0),
                        (0, r._)(this, 'storage', void 0),
                        (0, r._)(this, 'dictionary', void 0),
                        (0, r._)(this, 'config', void 0),
                        (0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'changeLanguageHandler', void 0),
                        (0, r._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = n),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = a.pE[a.cy]),
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
        29481: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => f });
            var r = n(74631),
                a = n(67379),
                i = n(44031),
                s = n(20934),
                l = n(59450),
                o = n(49656),
                c = n(84e3),
                d = n(58069),
                u = n(79670),
                _ = n(20258),
                b = n(26742),
                m = n(25195),
                p = n(37314),
                N = n(25488),
                x = n(97952),
                g = n(10764),
                v = n(72594);
            let f = () => {
                let e = (0, l.st)(),
                    t = (0, c.U)(),
                    { hash: n } = (0, l.gf)(),
                    { pageId: f, displayReasonId: S, pagePlacement: h, pageStyle: E } = (0, x.$)(),
                    { tabId: C, tabPos: A, isTabSelectedByDefault: y } = (0, v.R)(),
                    { offsetBlockPosY: I } = (0, m.u)(),
                    { blockId: T, blockType: L, blockPosX: O, blockPosY: R, mainObjectId: k, mainObjectType: W, displayReasonId: P } = (0, b.N)(),
                    { filterKey: D, filterValue: w, filterPos: M } = (0, p.G)(),
                    { objectId: j, objectPosX: U, objectPosY: B, objectType: F, objectsCount: Y } = (0, N.J)(),
                    { skeleton: Q } = (0, g.b)(),
                    H = null != P ? P : S,
                    V = (0, o.L)(() => (void 0 !== I && void 0 !== R ? I + R : R));
                return (0, r.useCallback)(
                    (r) => {
                        let { to: l, objectId: o, objectType: c, deepLink: b, objectPosY: m } = r;
                        if (!e || !f || !_.xK.includes(f) || !_.fD.includes(f)) return;
                        let p = d.F[f];
                        if (!p) return;
                        let N = {
                            hash: n,
                            pageId: p,
                            pagePlacement: null != h ? h : i.PagePlacements.Fullscreen,
                            pageStyle: null != E ? E : i.PageStyles.Fullscreen,
                            entityType: L,
                            entityId: T,
                            entityPosX: O,
                            entityPosY: V,
                            objectId: null != o ? o : j,
                            objectType: null != c ? c : F,
                            objectPosX: U,
                            objectPosY: null != m ? m : B,
                            objectsCount: Y,
                            from: u.W[f],
                            to: l,
                        };
                        (void 0 !== D && ((N.filterKey = D), (N.filterValue = w), (N.filterPos = M)),
                            _.qG.includes(f) && ((N.tabId = C), (N.tabPos = A), (N.isTabSelectedByDefault = y)),
                            Q && (N.skeletonId = Q),
                            b && (N.deepLink = b),
                            k && W && ((N.mainObjectType = W), (N.mainObjectId = k)),
                            H && (N.displayReasonId = H));
                        let x = (0, a.F)({ params: N, logger: t, context: 'useSendEventOnBlockNavigated' });
                        x && (0, s.QS)(e.evgenInstance, x);
                    },
                    [j, F, e, f, n, h, E, L, T, O, V, D, w, M, U, B, Y, Q, k, W, H, t, C, A, y],
                );
            };
        },
        29809: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        30716: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => i });
            var r = n(84059),
                a = n(74631);
            n(93588);
            let i = (e) => {
                let t = (0, r.usePathname)(),
                    [n, i] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !n && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), i(!0));
                    }, [e, n, t]));
            };
        },
        30787: (e, t, n) => {
            'use strict';
            n.d(t, { C: () => r });
            let r = (e, t) => {
                let [n, r] = e.split('?'),
                    a = new URLSearchParams(r || '');
                for (let [e, n] of new URLSearchParams(t).entries()) a.set(e, n);
                let i = a.toString();
                return ''.concat(n).concat(i ? '?'.concat(i) : '');
            };
        },
        37314: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => i });
            var r = n(74631),
                a = n(39752);
            function i() {
                return (0, r.useContext)(a.S);
            }
        },
        38907: (e, t, n) => {
            'use strict';
            n.d(t, { V: () => W });
            var r = n(25839),
                a = n(82298),
                i = n(88204),
                s = n(74631),
                l = n(44031),
                o = n(61493),
                c = n(71035),
                d = n(14693),
                u = n(11823),
                _ = n(4071),
                b = n(86869),
                m = n(52512),
                p = n(85686),
                N = n(27954),
                x = n(44806),
                g = n(25895),
                v = n(17109),
                f = n(67379),
                S = n(69394),
                h = n(42220),
                E = n(59450),
                C = n(20258),
                A = n(25488),
                y = n(97952),
                I = n(84e3),
                T = n(7050),
                L = n(64407),
                O = n(3656),
                R = n(47),
                k = n.n(R);
            let W = (0, i.PA)((e) => {
                let {
                        artistId: t,
                        concert: n,
                        meta: i,
                        viewUuid: R,
                        radius: W = 'l',
                        className: P,
                        shouldSendAnalyticsOnHide: D,
                        forceAfishaWidget: w,
                        shouldShowMask: M,
                    } = e,
                    { state: j, toggleTrue: U, toggleFalse: B } = (0, d.e)(!1),
                    { experiments: F } = (0, N.g)(),
                    Y = !w && F.checkExperiment(x.z.WebNextConcertPage, 'on'),
                    { href: Q } = (0, g.u)('/concert/:concertId', { params: { concertId: n.id } }),
                    H = (0, p.Z)(Q),
                    V = ((e) => {
                        let { artistId: t, viewUuid: n } = e,
                            r = (0, E.st)(),
                            { hash: a } = (0, E.gf)(),
                            { pageId: i } = (0, y.$)(),
                            { objectsCount: l, objectType: o, objectId: c, objectPosX: d, objectPosY: u, objectPos: _ } = (0, A.J)(),
                            b = (0, I.U)(),
                            m = (0, s.useCallback)(() => {
                                let e = (0, f.F)({
                                    params: { hash: a, artistId: t, objectsCount: l, objectType: o, objectId: c, objectPosX: d, objectPosY: u },
                                    logger: b,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                r && e && (0, S.HB)(r.evgenInstance, e);
                            }, [r, t, a, b, c, d, u, o, l]),
                            p = (0, s.useCallback)(() => {
                                let e = (0, f.F)({
                                    params: { hash: a, artistId: t, viewUuid: n, objectId: c, objectPos: _ },
                                    logger: b,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                r && e && n && (0, h.Z4)(r.evgenInstance, e);
                            }, [r, t, a, b, c, _, n]);
                        return (0, s.useCallback)(() => {
                            if (r && i && C.xK.includes(i))
                                switch (i) {
                                    case C._Q.ARTIST:
                                    case C._Q.CONCERT:
                                        m();
                                        break;
                                    case C._Q.ARTIST_CONCERTS:
                                        p();
                                }
                        }, [r, i, p, m]);
                    })({ artistId: t, viewUuid: R }),
                    G = (0, v.m)({ artistId: t, viewUuid: R }),
                    { ref: K, intersectionPropertyId: z } = (0, m.n)({ callback: null !== t ? V : void 0, singleEvent: !D }),
                    X = (0, s.useId)(),
                    $ = (0, s.useId)(),
                    J = (0, T.Y)()(n),
                    Z = (0, c.c)((e) => {
                        ((0, u.P)(e, k().ripple), Y && (H(e), G(l.FromArtistScreenTo.ConcertScreen)));
                    }),
                    q = (0, c.c)((e) => {
                        (U(), G(l.FromArtistScreenTo.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault());
                    });
                return (0, r.jsxs)(b.t, {
                    radius: W,
                    className: (0, a.$)(k().root, P, { [k().root_withConcertsRedesign]: n.isIdentityExperimentEnabled }),
                    ref: K,
                    'data-intersection-property-id': z,
                    onClick: Z,
                    children: [
                        n.datetime &&
                            (0, r.jsx)(O.d, {
                                datetime: n.datetime,
                                id: X,
                                className: (0, a.$)(k().date, { [k().dateWithMask]: M, [k().important]: M }),
                                dayClassName: k().dateColor,
                                monthClassName: k().dateColor,
                            }),
                        (0, s.cloneElement)(i, { id: $, concert: n }),
                        n.dataSessionId &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(_.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: k().button,
                                        'aria-describedby': ''.concat(X, ' ').concat($),
                                        'aria-label': J,
                                        onClick: q,
                                        'data-test-id': o.OA.concert.CONCERT_CARD_BUTTON,
                                        children: J,
                                    }),
                                    (0, r.jsx)(L.h, { dataSessionId: n.dataSessionId, isOpened: j, onOpen: U, onClose: B }),
                                ],
                            }),
                    ],
                });
            });
        },
        39752: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => r });
            let r = (0, n(74631).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        40207: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => u });
            var r = n(74631),
                a = n(59342),
                i = n(71035),
                s = n(36484),
                l = n(62562),
                o = n(27954),
                c = n(12929),
                d = n(95067);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: n,
                        getStorageKey: u,
                        callback: _,
                        onAfterHandled: b,
                        onBeforeHandle: m,
                        onReject: p,
                        modalBehavior: N,
                        preventDefaultWhenSafe: x,
                    } = e,
                    {
                        disclaimerModalState: g,
                        modals: { disclaimerModal: v },
                    } = (0, o.g)(),
                    f = (0, r.useRef)(String((0, a.A)())),
                    S = (0, r.useRef)(!1),
                    h = (0, r.useRef)(!1),
                    E = (0, r.useRef)(0),
                    C = (0, r.useRef)(!0),
                    A = (0, l.N)().get(s.U2),
                    y = (0, i.c)((e) => {
                        (x && (null == e || e.preventDefault()), _ && _(e), b && b());
                    });
                return (
                    (0, r.useEffect)(() => {
                        g.isUnsafeDisclaimerConfirmed && g.id === f.current && !S.current && (y(), (S.current = !0));
                    }, [g.id, g.isUnsafeDisclaimerConfirmed, y]),
                    (0, r.useEffect)(() => {
                        g.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && g.setModalData(t.resolvedModalData);
                    }, [g, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, r.useEffect)(
                        () => () => {
                            C.current = !1;
                        },
                        [],
                    ),
                    (0, i.c)(async (e) => {
                        if (!h.current) {
                            h.current = !0;
                            try {
                                if ((null == m || m(e), t)) {
                                    var r, a, i;
                                    let s = t.getDisclaimerEntityRef(n),
                                        l = null != (r = null == u ? void 0 : u(t, s)) ? r : ''.concat(s.entityType, '_').concat(s.entityId),
                                        o = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = A.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(l)) return void y(e);
                                    }
                                    if (o) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && g.setType(c.Z.UNSAFE),
                                            g.setDisclaimerRejectHandler(null != p ? p : null),
                                            g.setId(f.current),
                                            g.setEntityKey(l),
                                            g.setCurrentEntityRef(s.entityType, s.entityId),
                                            g.setShouldHistoryBack(!!(null == N ? void 0 : N.shouldHistoryBack)),
                                            g.setShouldCloseModalOnOutsidePress(null == (a = null == N ? void 0 : N.closeOnOutside) || a),
                                            g.setShouldCloseModalOnEscape(null == (i = null == N ? void 0 : N.closeOnEscape) || i),
                                            (E.current += 1));
                                        let n = E.current,
                                            r = await t.getModalDisclaimerData();
                                        if (E.current !== n || !1 === C.current) return;
                                        (g.setModalData(null != r ? r : null), (S.current = !1), v.open());
                                        return;
                                    }
                                    (x && (null == e || e.preventDefault()), y(e));
                                    return;
                                }
                                (x && (null == e || e.preventDefault()), y(e));
                            } finally {
                                h.current = !1;
                            }
                        }
                    })
                );
            };
        },
        41016: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => s });
            var r = n(71872),
                a = n(80461);
            let i = '@yandexmusic';
            function s(e) {
                return e.cardType === a.W.SUMMARY_LARGE_IMAGE
                    ? { card: a.W.SUMMARY_LARGE_IMAGE, site: i, title: e.title, description: e.description }
                    : {
                          card: a.W.APP,
                          site: i,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(r.Lz, '/').concat(e.url) } },
                      };
            }
        },
        43354: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => a, P: () => i });
            var r = n(74631);
            let a = (0, r.createContext)(null),
                i = () => (0, r.useContext)(a);
        },
        44806: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => r });
            var r = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextProductWithoutRecommendation = 'WebNextProductWithoutRecommendation'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextBrandedPlayerErids = 'WebNextBrandedPlayerErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextLatestGenreAlbumsDegradation = 'WebNextLatestGenreAlbumsDegradation'),
                    (e.WebNextPlaylistFiltersDegradation = 'WebNextPlaylistFiltersDegradation'),
                    (e.WebNextUgcUploadDegradation = 'WebNextUgcUploadDegradation'),
                    (e.WebNextLibrarySyncLimits = 'WebNextLibrarySyncLimits'),
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
                    (e.WebNextTrackNotModified = 'WebNextTrackNotModified'),
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
                    (e.WebNextYnisonEnabled = 'WebNextYnisonEnabled'),
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
                    (e.WebNextReplicsLumenOption = 'WebNextReplicsLumenOption'),
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
                    (e.WebNextArtistRecommendationsAutoScroll = 'WebNextArtistRecommendationsAutoScroll'),
                    (e.WebNextUnstableMusicScreen = 'WebNextUnstableMusicScreen'),
                    e
                );
            })({});
        },
        46646: (e, t, n) => {
            var r = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function a(e) {
                if (!n.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    a = t[0];
                return n.e(t[1]).then(() => n.t(a, 19));
            }
            ((a.keys = () => Object.keys(r)), (a.id = 46646), (e.exports = a));
        },
        48631: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        49656: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => a });
            var r = {};
            (Object.defineProperty(r, '__esModule', { value: !0 }), (r.useReturnValue = void 0), (r.useReturnValue = (e) => e()), r.__esModule);
            var a = r.useReturnValue;
        },
        52512: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => s });
            var r = n(74631),
                a = n(3669),
                i = n(13232);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, r.useRef)(null),
                    l = (0, a.D)(),
                    o = (0, r.useId)(),
                    c = (0, r.useContext)(i.B),
                    d = (0, r.useCallback)(
                        (r, a) => {
                            (e ? e(r, n ? a : void 0) : l(r, a), t && c.unobserveElement(o));
                        },
                        [e, c, o, l, t, n],
                    );
                return (
                    (0, r.useEffect)(
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
        53203: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 71613));
        },
        53424: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => r });
            let r = (0, n(74631).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        53712: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => a });
            var r = n(25895);
            let a = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        55040: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, X: () => o });
            var r = n(36432),
                a = n(78773);
            let i = async (e) => e.then((e) => e.default),
                s = a.pE[a.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => i(n(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => i(n(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        n = t.get(e),
                        a = t.get('ru');
                    if (n) return n();
                    if (a) return a();
                    throw new r.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56412: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => E });
            var r = n(25839),
                a = n(82298),
                i = n(88204),
                s = n(74631),
                l = n(8487),
                o = n(61493),
                c = n(71035),
                d = n(4071),
                u = n(4254),
                _ = n(36484),
                b = n(62562),
                m = n(21784),
                p = n(53712),
                N = n(85686),
                x = n(12929),
                g = n(95067),
                v = n(97522),
                f = n(71472),
                S = n.n(f);
            let h = {
                    [x.n.ALBUM]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                E = (0, i.PA)((e) => {
                    var t;
                    let { modalState: n, data: i, onClose: f, className: E } = e,
                        C = null != i ? i : null == n ? void 0 : n.modalData,
                        A = (0, m.W)(),
                        y = (0, N.Z)(p.Z.main.href),
                        I = (0, b.N)().get(_.U2),
                        T = (0, c.c)(() => {
                            if (f) return f();
                            (A.canBack && A.back(), y());
                        }),
                        L = (null == C || null == (t = C.details) ? void 0 : t.url) && C.details.text,
                        O = (0, c.c)(() => {
                            var e;
                            null == n || n.setConfirmUnsafeDisclaimer(!0);
                            let t = I.get(g.c.ExEx),
                                r = new Date(),
                                a = r.setMinutes(r.getMinutes() + 15),
                                i =
                                    null != (e = null == n ? void 0 : n.entityKey)
                                        ? e
                                        : ''.concat(null == n ? void 0 : n.entityType, '_').concat(null == n ? void 0 : n.entityId);
                            (t ? I.set(g.c.ExEx, [...t, i], { expires: new Date(a) }) : I.set(g.c.ExEx, [i], { expires: new Date(a) }),
                                null == f || f(),
                                (null == n ? void 0 : n.onDisclaimerConfirmHandler) && n.onDisclaimerConfirmHandler());
                        }),
                        R = (0, c.c)(() => {
                            ((null == n ? void 0 : n.shouldHistoryBack) ? (null == f || f(), A.canBack && A.back(), y()) : null == f || f(),
                                (null == n ? void 0 : n.onDisclaimerRejectHandler) && n.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == n || n.reset();
                        },
                        [n],
                    );
                    let k = (0, s.useMemo)(() => {
                            if (C) {
                                var e, t;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, a.$)(S().title, S().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: C.title,
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: S().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: C.description,
                                        }),
                                        L &&
                                            (0, r.jsx)(v.N, {
                                                href: null == (e = C.details) ? void 0 : e.url,
                                                className: S().link,
                                                children: (0, r.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = C.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [C, L]),
                        W = (0, s.useMemo)(
                            () =>
                                (null == n ? void 0 : n.type) === x.Z.UNSAFE
                                    ? (0, r.jsxs)('div', {
                                          className: S().buttons,
                                          children: [
                                              (0, r.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: R,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: S().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, r.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, r.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: O,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: S().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: n.entityType && h[n.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)('div', {
                                          className: S().buttons,
                                          children: (0, r.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: T,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: S().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, r.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [O, null == n ? void 0 : n.entityType, null == n ? void 0 : n.type, T, R],
                        );
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(S().root, E),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, r.jsxs)('div', { className: S().container, children: [k, W] }),
                    });
                });
        },
        57487: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => r });
            let r = (0, n(74631).createContext)({ offsetBlockPosY: void 0 });
        },
        58069: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => i });
            var r = n(44031),
                a = n(20258);
            let i = {
                [a._Q.HOME]: r.LandingBlockPageID.MainScreen,
                [a._Q.NON_MUSIC]: r.LandingBlockPageID.NonmusicLandingScreen,
                [a._Q.OWN_COLLECTION]: r.LandingBlockPageID.CollectionLandingScreen,
                [a._Q.LANDING]: r.LandingBlockPageID.DynamicScreen,
                [a._Q.OWN_ARTISTS]: r.LandingBlockPageID.CollectionArtistsScreen,
                [a._Q.SEARCH]: r.LandingBlockPageID.SearchScreen,
                [a._Q.ARTIST]: r.LandingBlockPageID.ArtistScreen,
                [a._Q.CONCERTS]: r.LandingBlockPageID.ConcertsLandingScreen,
                [a._Q.CONCERT]: r.LandingBlockPageID.ConcertScreen,
                [a._Q.CONCERT_LOCATION_SELECTOR]: r.LandingBlockPageID.ConcertLocationSelector,
                [a._Q.ALBUM]: r.LandingBlockPageID.AlbumScreen,
                [a._Q.PLAYLIST]: r.LandingBlockPageID.PlaylistScreen,
                [a._Q.SLIDES_SCREEN]: r.LandingBlockPageID.SlidesScreen,
                [a._Q.PROMOLANDING_ALBUM]: r.LandingBlockPageID.PromolandingAlbumScreen,
                [a._Q.WAVE_LANDING_SCREEN]: r.LandingBlockPageID.WaveLandingScreen,
                [a._Q.FACT_SCREEN]: r.LandingBlockPageID.FactScreen,
                [a._Q.LUMEN_FACT_SCREEN]: r.LandingBlockPageID.LumenFactScreen,
                [a._Q.COLLECTION_VIBE_ROOMS]: r.LandingBlockPageID.MultivibeScreen,
                [a._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.LandingBlockPageID.MultivibeSendingInvitationScreen,
                [a._Q.MULTIVIBE_ACTION_SCREEN]: r.LandingBlockPageID.MultivibeActionScreen,
                [a._Q.MULTIVIBE_LIMIT_SCREEN]: r.LandingBlockPageID.MultivibeLimitScreen,
                [a._Q.MULTIVIBE_UNIFIED_SCREEN]: r.LandingBlockPageID.MultivibeUnifiedScreen,
            };
        },
        59450: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => N, st: () => i, gf: () => l });
            var r = n(74631);
            let a = (0, r.createContext)(null);
            function i() {
                return (0, r.useContext)(a);
            }
            let s = (0, r.createContext)({ hash: void 0 });
            function l() {
                return (0, r.useContext)(s);
            }
            var o = n(25839),
                c = n(59342);
            let d = (e) => {
                let { children: t } = e,
                    n = (0, r.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, o.jsx)(s.Provider, { value: n, children: t });
            };
            class u {
                makeParams() {
                    return {};
                }
            }
            class _ {
                makeParams() {
                    return {};
                }
            }
            var b = n(58025);
            class m {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, b._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (r, a) => {
                                let i = { ...a, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(r, i);
                            },
                        }));
                }
            }
            let p = null,
                N = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: i, logger: s, metrika: l } = e,
                        c = (0, r.useMemo)(() => {
                            if (p) return p;
                            let e = (function (e, t, n) {
                                let r = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: r } = e,
                                        a = [];
                                    return (
                                        !(function e() {
                                            (a.length > 0 && t(a.splice(0, n)), window.setTimeout(e, r));
                                        })(),
                                        {
                                            add(e) {
                                                a.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (t) => {
                                        e(t);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, a) {
                                        (n && t.log(e, a), r.add({ [e]: a }));
                                    },
                                };
                            })((e) => l.count(e, i), s, t);
                            return (p = new m(
                                e,
                                (function () {
                                    let e = new u();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new _();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [s, l]);
                    return (0, o.jsx)(a.Provider, { value: c, children: (0, o.jsx)(d, { children: n }) });
                };
        },
        61288: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => a });
            let r = /^(0|[1-9]\d*)$/;
            function a(e) {
                return void 0 !== e && !(e.length > 40) && r.test(e);
            }
        },
        61399: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => a });
            var r = n(18421);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61732: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => a });
            let r = (e, t) => {
                    let n = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (n) return n;
                    let r = window.document.createElement('meta');
                    return (r.setAttribute(e, t), r);
                },
                a = (e) => {
                    let { title: t, description: n, openGraph: a } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof n)) {
                        let e = r('name', 'description');
                        (e.setAttribute('content', n), window.document.head.appendChild(e));
                    }
                    let i = '';
                    if (a) {
                        let e = 'string' == typeof a.title ? a.title : '',
                            t = 'string' == typeof a.description ? a.description : '',
                            n = Array.isArray(a.images) ? a.images[0] : null;
                        i = n && 'object' == typeof n && 'url' in n ? String(n.url) : '';
                        let s = r('property', 'og:title'),
                            l = r('property', 'og:description'),
                            o = r('property', 'og:image');
                        (s.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', i),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o));
                    }
                };
        },
        64261: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => r });
            let r = (0, n(74631).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        64407: (e, t, n) => {
            'use strict';
            n.d(t, { h: () => v });
            var r = n(25839),
                a = n(74631),
                i = n(39004),
                s = n(93588),
                l = n(61493),
                o = n(4071),
                c = n(35622),
                d = n(69084),
                u = n(36484),
                _ = n(62562),
                b = n(92231),
                m = n(84059),
                p = n(30787),
                N = n(6969),
                x = n(29809),
                g = n.n(x);
            let v = (e) => {
                let { dataSessionId: t, isOpened: n, onOpen: x, onClose: v } = e,
                    f = (0, _.N)().get(u.V4),
                    { formatMessage: S } = (0, i.A)(),
                    h = (() => {
                        let e = (0, m.useSearchParams)();
                        return (0, a.useCallback)(
                            (t) => {
                                let n = e.get(N.K.UTM_CAMPAIGN);
                                if (!n) return t;
                                let r = new URLSearchParams();
                                return (r.set(N.K.UTM_SOURCE, 'campaignid_'.concat(n)), (0, p.C)(t, r));
                            },
                            [e],
                        );
                    })(),
                    E = (0, a.useCallback)(
                        (e) => {
                            e.origin === f.afisha.host && 'close' === e.data.type && v();
                        },
                        [v, f.afisha.host],
                    );
                (0, a.useEffect)(
                    () => (
                        window.addEventListener('message', E),
                        () => {
                            window.removeEventListener('message', E);
                        }
                    ),
                    [E],
                );
                let C = (0, a.useCallback)(
                        (e) => {
                            e ? x() : v();
                        },
                        [v, x],
                    ),
                    A = (0, s.tE)(f, (0, b.u)()),
                    y = h(''.concat(f.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(A));
                return (0, r.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: n,
                    onOpenChange: C,
                    onClose: v,
                    showHeader: !1,
                    className: g().widget,
                    contentClassName: g().content,
                    overlayColor: 'full',
                    'data-test-id': l.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, r.jsx)(d.q, { children: (0, r.jsx)(o.$, { 'aria-label': S({ id: 'interface-actions.close' }), onClick: v }) }),
                        (0, r.jsx)('iframe', {
                            src: y,
                            className: g().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        64575: (e, t, n) => {
            'use strict';
            n.d(t, { T: () => i });
            var r = n(25839),
                a = n(70676);
            let i = (e) => Array.from({ length: e }, (e, t) => (0, r.jsx)(a.W, {}, t));
        },
        64595: (e, t, n) => {
            'use strict';
            function r() {
                return { appId: '117328825040925' };
            }
            n.d(t, { k: () => r });
        },
        66192: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => r });
            let r = (0, n(74631).createContext)({
                objectType: void 0,
                objectId: void 0,
                objectPosX: void 0,
                objectPosY: void 0,
                objectPos: void 0,
                objectsCount: void 0,
                mainObjectId: void 0,
                mainObjectType: void 0,
            });
        },
        67379: (e, t, n) => {
            'use strict';
            function r(e) {
                let { params: t, logger: n, context: r } = e,
                    a = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return a.length > 0 ? (n.error('Evgen parameters are not met', { parameters: a.join(', '), incomingParams: t, context: r }), null) : t;
            }
            n.d(t, { F: () => r });
        },
        69084: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => c });
            var r,
                a = n(74631),
                i = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length;)
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (a && (a += ' '), (a += r));
                                            else for (n in t) t[n] && (a && (a += ' '), (a += n));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (n.r(t), n.d(t, { clsx: () => r, default: () => a }));
                        let a = r;
                    },
                    7319: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: n, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    5531: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let a = n(4377),
                            i = n(5881),
                            s = n(810),
                            l = r(n(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: n, children: r, ...o } = e,
                                c = (0, i.clsx)(l.default.root, { [l.default.focusable]: n }, t);
                            return (0, s.isValidElement)(r)
                                ? (0, s.cloneElement)(r, { ...o, className: (0, i.clsx)(c, r.props.className) })
                                : (0, a.jsx)('span', { className: c, ...o, children: r });
                        };
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var n = (s[e] = { exports: {} });
                return (i[e].call(n.exports, n, n.exports, l), n.exports);
            }
            ((l.d = (e, t) => {
                for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        69663: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => r });
            let r = () => ({ timeStyle: 'short' });
        },
        70676: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => c });
            var r = n(25839),
                a = n(82298),
                i = n(39004),
                s = n(23976),
                l = n(21532),
                o = n.n(l);
            let c = (e) => {
                let { className: t, isShimmerActive: n } = e,
                    { formatMessage: l } = (0, i.A)();
                return (0, r.jsxs)('div', {
                    'aria-label': l({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, a.$)(o().root, t),
                    children: [
                        (0, r.jsx)(s.W, { className: o().date, radius: 'm', isActive: n }),
                        (0, r.jsxs)('div', {
                            className: o().meta,
                            children: [
                                (0, r.jsx)(s.W, { className: o().title, radius: 's', isActive: n }),
                                (0, r.jsx)(s.W, { className: o().description, radius: 's', isActive: n }),
                            ],
                        }),
                        (0, r.jsx)(s.W, { className: o().action, radius: 'l', isActive: n }),
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
        71613: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { default: () => Z }));
            var r = n(25839),
                a = n(84059),
                i = n(88204),
                s = n(74631),
                l = n(39004),
                o = n(59342),
                c = n(61493),
                d = n(13833),
                u = n(4254),
                _ = n(1407),
                b = n(1797),
                m = n(38907),
                p = n(83139),
                N = n(2488),
                x = n(20258),
                g = n(95858),
                v = n(95314),
                f = n(10322),
                S = n(21784),
                h = n(89192),
                E = n(30716),
                C = n(27954),
                A = n(44806),
                y = n(56412),
                I = n(99401),
                T = n(26076),
                L = n(10603),
                O = n(64575),
                R = n(67379),
                k = n(42220),
                W = n(59450),
                P = n(84e3),
                D = n(17951),
                w = n(61732),
                M = n(12234),
                j = n(64595),
                U = n(26208),
                B = n(89221),
                F = n(27935),
                Y = n(41016),
                Q = n(80461),
                H = n(95445);
            async function V(e, t) {
                var n, r, a;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {} };
                let i = await (0, B.W)(t.locale),
                    s = i({ id: 'metadata.artist-concerts-title' }, { artistName: e.artist.name }),
                    l = i({ id: 'metadata.artist-concerts-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, F.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (n = t.fullUrl) ? n : '',
                        locale: t.locale,
                        customImage: (0, U.v)({ tld: t.tld }),
                        siteName: i({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, Y.H)({ cardType: Q.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, j.k)(),
                    appLinks: (0, M.X)({
                        additional: { ...t, url: null != (r = t.url) ? r : '', fullUrl: null != (a = t.fullUrl) ? a : '', host: t.host },
                        appName: i({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, H.S)('/artist/:artistId/concerts', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var G = n(28604),
                K = n(19386),
                z = n(80751),
                X = n.n(z);
            let $ = (0, i.PA)((e) => {
                var t, n, i;
                let { artistId: M, preloadedArtist: j, preloadedConcerts: U } = e,
                    { artist: B, disclaimerModalState: F, experiments: Y } = (0, C.g)(),
                    Q = Y.checkExperiment(A.z.WebNextConcertsIdentityEventType, 'on'),
                    { formatMessage: H } = (0, l.A)(),
                    { contentScrollRef: z, setContentScrollRef: $ } = (0, h.g)(),
                    J = (0, S.W)(),
                    Z = (0, s.useRef)(String((0, o.A)())),
                    q = ((e) => {
                        let { artistId: t, viewUuid: n } = e,
                            r = (0, W.st)(),
                            { hash: a } = (0, W.gf)(),
                            i = (0, P.U)();
                        return (0, s.useCallback)(() => {
                            if (!r || !t) return;
                            let e = (0, R.F)({ params: { hash: a, artistId: t, viewUuid: n }, logger: i, context: 'useSendEventOnConcertsPageOpened' });
                            e && (0, k.__)(r.evgenInstance, e);
                        }, [r, t, a, i, n]);
                    })({ artistId: M, viewUuid: Z.current }),
                    ee = ((e) => {
                        let { artistId: t, viewUuid: n } = e,
                            r = (0, W.st)(),
                            { hash: a } = (0, W.gf)(),
                            i = (0, P.U)();
                        return (0, s.useCallback)(() => {
                            if (!r || !t) return;
                            let e = (0, R.F)({ params: { hash: a, artistId: t, viewUuid: n }, logger: i, context: 'useSendEventOnConcertsPageClosed' });
                            e && (0, k.pe)(r.evgenInstance, e);
                        }, [r, t, a, i, n]);
                    })({ artistId: M, viewUuid: Z.current });
                (0, s.useEffect)(
                    () => (
                        q(),
                        () => {
                            ee();
                        }
                    ),
                    [ee, q],
                );
                let et = (0, b.S)({ artist: null == (t = B.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, K.G)(M),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = B.meta) ? void 0 : e.artist.isUnsafeLegal) && et();
                    }, [null == (n = B.meta) ? void 0 : n.artist.isUnsafeLegal, et]),
                    (0, G._)(B, M),
                    (0, s.useEffect)(
                        () => () => {
                            B.concertsSubpage.reset();
                        },
                        [B],
                    ),
                    (0, E.J)(B.concertsSubpage.isResolved),
                    B.concertsSubpage.isNotFound && (0, a.notFound)());
                let en = (0, s.useMemo)(() => {
                        var e;
                        if (B.concertsSubpage.isLoading) return (0, O.T)(10);
                        let t = Q ? N.M : p.Z;
                        return null == (e = B.concertsSubpage.concerts)
                            ? void 0
                            : e.map((e, n) =>
                                  (0, r.jsx)(
                                      v.B,
                                      {
                                          objectId: String(e.id),
                                          objectPos: n + 1,
                                          children: (0, r.jsx)(m.V, {
                                              artistId: M,
                                              concert: e,
                                              viewUuid: Z.current,
                                              meta: (0, r.jsx)(t, { concert: e }),
                                              shouldShowMask: Q,
                                          }),
                                      },
                                      e.id,
                                  ),
                              );
                    }, [B.concertsSubpage.concerts, B.concertsSubpage.isLoading, M, Q, Z]),
                    er = [];
                if (
                    (B.concertsSubpage.isNeededToLoad && er.push(B.concertsSubpage.getData({ artistId: Number(M), preloadedConcerts: U })),
                    B.infoLoadingState.isNeededToLoad && er.push(B.getInfo({ artistId: M, preloadedArtist: j })),
                    ((e) => {
                        var t;
                        (0, s.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                V({ artist: (0, D.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, w.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(B),
                    er.length && (0, s.use)(Promise.allSettled(er)),
                    null == (i = B.meta) ? void 0 : i.artist.isLegalRejected)
                )
                    return (0, r.jsx)(y.M, { modalState: F });
                let ea = (0, s.useMemo)(
                    () =>
                        Q && B.concertsSubpage.artistTitle
                            ? H({ id: 'page.artist-all-concerts-header' }, { artistName: B.concertsSubpage.artistTitle })
                            : H({ id: 'page.artist-concerts-header' }, { artistName: B.commonSubPage.artistName }),
                    [Q, B.concertsSubpage.artistTitle, B.commonSubPage.artistName, H],
                );
                return (0, r.jsx)(f.n, {
                    pageId: x._Q.ARTIST_CONCERTS,
                    pageEntityId: M,
                    children: (0, r.jsx)(g.j, {
                        children: (0, r.jsx)(_.h, {
                            scrollElement: z,
                            outerTitle: ea,
                            children: (0, r.jsxs)('div', {
                                className: X().root,
                                'data-test-id': c.Xk.artist.ARTIST_CONCERTS_PAGE,
                                children: [
                                    (0, r.jsx)(L.Y, {
                                        variant: L.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: J.canBack,
                                        children: (0, r.jsx)(u.DZ, { id: 'concerts-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: ea }),
                                    }),
                                    (0, r.jsxs)(d.N, {
                                        ref: $,
                                        className: X().scrollableContent,
                                        containerClassName: X().container,
                                        children: [
                                            (0, r.jsx)('div', { className: X().content, 'aria-labelledby': 'concerts-header', tabIndex: 0, children: en }),
                                            (0, r.jsx)(T.A, { children: (0, r.jsx)(I.w, { className: X().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            });
            var J = n(61288);
            let Z = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return ((e && (0, J.L)(e)) || (0, a.notFound)(), (0, r.jsx)($, { artistId: e }));
            };
        },
        71872: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => r, ov: () => a });
            let r = ''.concat('yandexmusic', ':'),
                a = ''.concat(r, '//');
        },
        72594: (e, t, n) => {
            'use strict';
            n.d(t, { R: () => i });
            var r = n(74631),
                a = n(53424);
            function i() {
                return (0, r.useContext)(a.F);
            }
        },
        78773: (e, t, n) => {
            'use strict';
            n.d(t, { Xn: () => i, cy: () => a, pE: () => r });
            let r = {
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
                a = 'yandex',
                i = 'ru-RU';
        },
        79670: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => i });
            var r = n(44031),
                a = n(20258);
            let i = {
                [a._Q.ALBUM]: r.AppScreen.AlbumScreen,
                [a._Q.PLAYLIST]: r.AppScreen.PlaylistScreen,
                [a._Q.HOME]: r.AppScreen.MainScreen,
                [a._Q.ARTIST]: r.AppScreen.ArtistScreen,
                [a._Q.ARTIST_TRACKS]: r.AppScreen.ArtistScreen,
                [a._Q.ARTIST_SIMILAR]: r.AppScreen.ArtistScreen,
                [a._Q.ARTIST_ALBUMS]: r.AppScreen.ArtistScreen,
                [a._Q.ARTIST_DISCOGRAPHY]: r.AppScreen.ArtistScreen,
                [a._Q.ARTIST_COMPILATIONS]: r.AppScreen.ArtistScreen,
                [a._Q.ARTIST_CONCERTS]: r.AppScreen.ArtistScreen,
                [a._Q.SEARCH]: r.AppScreen.SearchScreen,
                [a._Q.OWN_COLLECTION]: r.AppScreen.CollectionLandingScreen,
                [a._Q.LANDING]: r.AppScreen.DynamicScreen,
                [a._Q.HISTORY]: r.AppScreen.MusicHistoryScreen,
                [a._Q.NON_MUSIC]: r.AppScreen.NonmusicLandingScreen,
                [a._Q.CHART]: r.AppScreen.PlaylistListScreen,
                [a._Q.PODCAST]: r.AppScreen.AlbumScreen,
                [a._Q.AUDIOBOOK]: r.AppScreen.AlbumScreen,
                [a._Q.OWN_ALBUMS]: r.AppScreen.CollectionAlbumsScreen,
                [a._Q.OWN_DISLIKES]: r.AppScreen.CollectionTrackListScreen,
                [a._Q.OWN_ARTISTS]: r.AppScreen.CollectionArtistsScreen,
                [a._Q.OWN_PLAYLISTS]: r.AppScreen.CollectionPlaylistsScreen,
                [a._Q.FAMILIAR_YOU]: r.AppScreen.TrackListScreen,
                [a._Q.ENTITIES]: r.AppScreen.ObjectsGridScreen,
                [a._Q.TRAILER]: r.AppScreen.TrailerScreen,
                [a._Q.PLAYER]: r.AppScreen.ExpandedPlayerScreen,
                [a._Q.VIDEO_PLAYER]: r.AppScreen.VideoScreen,
                [a._Q.TRACK_SCREEN]: r.AppScreen.TrackScreen,
                [a._Q.PAYWALL]: r.AppScreen.PaywallScreen,
                [a._Q.CONCERTS]: r.AppScreen.ConcertsLandingScreen,
                [a._Q.CONCERT]: r.AppScreen.ConcertScreen,
                [a._Q.CONCERT_LOCATION_SELECTOR]: r.AppScreen.ConcertLocationSelector,
                [a._Q.PAGE_NOT_FOUND_SCREEN]: r.AppScreen.PageNotFoundScreen,
                [a._Q.SLIDES_SCREEN]: r.AppScreen.SlidesScreen,
                [a._Q.PROMOLANDING_ALBUM]: r.AppScreen.PromolandingAlbumScreen,
                [a._Q.WAVE_LANDING_SCREEN]: r.AppScreen.WaveLandingScreen,
                [a._Q.FACT_SCREEN]: r.AppScreen.FactScreen,
                [a._Q.LUMEN_FACT_SCREEN]: r.AppScreen.LumenFactScreen,
                [a._Q.LUMEN_AWAKENING_SCREEN]: r.AppScreen.LumenAwakeningScreen,
                [a._Q.COLLECTION_VIBE_ROOMS]: r.AppScreen.MultivibeScreen,
                [a._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.AppScreen.MultivibeSendingInvitationScreen,
                [a._Q.MULTIVIBE_ACTION_SCREEN]: r.AppScreen.MultivibeActionScreen,
                [a._Q.MULTIVIBE_LIMIT_SCREEN]: r.AppScreen.MultivibeLimitScreen,
                [a._Q.MULTIVIBE_UNIFIED_SCREEN]: r.AppScreen.MultivibeUnifiedScreen,
            };
        },
        80461: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => r });
            var r = (function (e) {
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
        82064: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => r });
            let r = (0, n(74631).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        83139: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => _ });
            var r = n(25839),
                a = n(88204),
                i = n(74631),
                s = n(39004),
                l = n(4254),
                o = n(69663),
                c = n(83418),
                d = n(26330),
                u = n.n(d);
            let _ = (0, a.PA)((e) => {
                let { id: t, concert: n } = e,
                    { formatDate: a } = (0, s.A)(),
                    d = [],
                    _ = (0, r.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == n ? void 0 : n.place) && d.push((0, r.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: n.place })),
                    (null == n ? void 0 : n.datetime) &&
                        d.push(_, (0, r.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', className: u().time, children: a(n.datetime, (0, o.f)()) })),
                    (null == n ? void 0 : n.contentRating) && d.push(_, (0, r.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', children: n.contentRating })),
                    (0, r.jsxs)('div', {
                        className: u().root,
                        id: t,
                        children: [
                            (0, r.jsx)(l.HL, { variant: 'div', size: 'm', weight: 'medium', className: u().city, lineClamp: 1, children: null == n ? void 0 : n.city }),
                            (0, r.jsx)('div', { className: u().info, children: d.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            (null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                n.cashbackValuePercent &&
                                (0, r.jsx)(c.m, { className: u().cashback, valuePercent: n.cashbackValuePercent }),
                            !(null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                (null == n ? void 0 : n.isCashbackExperimentEnabled) &&
                                n.cashbackTitle &&
                                (0, r.jsx)(c.m, { className: u().cashback, title: n.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        83418: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => d });
            var r = n(25839),
                a = n(82298),
                i = n(61493),
                s = n(66738),
                l = n(4254),
                o = n(11618),
                c = n.n(o);
            let d = (e) => {
                let { title: t, className: n, titleClassName: o, valuePercent: d } = e;
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(c().root, n),
                    children: [
                        (0, r.jsx)(s.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, r.jsx)(l.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, a.$)(c().title, o),
                            'data-test-id': i.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        85686: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => d });
            var r = n(84059);
            n(93588);
            var a = n(71035),
                i = n(25895),
                s = n(89288),
                l = n(71872),
                o = (function (e) {
                    return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
                })({});
            let c = [s.cy.HTTP, s.cy.HTTPS, s.cy.MAILTO, s.cy.TEL, l.Lz],
                d = (e) => {
                    let t = (0, r.useRouter)(),
                        { href: n, target: d } = (0, i.u)(e);
                    return (0, a.c)((e) => {
                        let r = ((e, t, n) => {
                            let r;
                            try {
                                r = new URL(t);
                            } catch (e) {
                                return null;
                            }
                            let a = (0, s.Rj)(e, { allowedProtocols: new Set([...c, r.protocol]), baseUrl: r.href });
                            return a.isAllowed
                                ? a.url.protocol === l.Lz
                                    ? { type: o.DEEPLINK, href: e }
                                    : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(a.url, r)
                                      ? { type: o.INTERNAL, href: e }
                                      : { type: o.EXTERNAL, href: e }
                                : null;
                        })(n, window.location.href, d);
                        if (!r) {
                            null == e || e.preventDefault();
                            return;
                        }
                        (null != e && e.metaKey) ||
                            (null != e && e.ctrlKey) ||
                            (null != e && e.shiftKey) ||
                            (r.type === o.EXTERNAL || r.type === o.DEEPLINK
                                ? ((e) => {
                                      let { target: t, rel: n } = (0, i.u)(e, { options: { isExternalLink: !0 } });
                                      window.open(e, t, n);
                                  })(r.href)
                                : t.push(r.href));
                    });
                };
        },
        86166: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { $: () => r }),
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
                })(r || (r = {})));
        },
        86869: (e, t, n) => {
            'use strict';
            n.d(t, { t: () => c });
            var r,
                a = n(74631),
                i = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length;)
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (a && (a += ' '), (a += r));
                                            else for (n in t) t[n] && (a && (a += ' '), (a += n));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (n.r(t), n.d(t, { clsx: () => r, default: () => a }));
                        let a = r;
                    },
                    2095: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = {
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
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: n, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    6009: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let a = n(4377),
                            i = n(5881),
                            s = n(810),
                            l = r(n(2095)),
                            o = (e) => {
                                let { forwardRef: t, radius: n, variant: r = 'default', children: s, className: o, withShadow: c, style: d, ...u } = e;
                                return (0, a.jsx)('div', {
                                    className: (0, i.clsx)(
                                        l.default.root,
                                        l.default['root_radius_'.concat(n)],
                                        l.default['root_variant_'.concat(r)],
                                        { [l.default.root_withShadow]: c },
                                        o,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: s,
                                });
                            };
                        t.Paper = (0, s.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var n = (s[e] = { exports: {} });
                return (i[e].call(n.exports, n, n.exports, l), n.exports);
            }
            ((l.d = (e, t) => {
                for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        89221: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => d });
            var r = n(13580),
                a = n(74631),
                i = n(78773),
                s = n(28869),
                l = n(14514),
                o = n(55040);
            let c = (0, a.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        n = (0, l.k)(i.pE[i.cy], t),
                        a = await c(n);
                    return (e, t) => {
                        let i = null == a ? void 0 : a[e.id],
                            s = '';
                        return ((Array.isArray(i) || 'string' == typeof i) && (s = new r.S(i, n).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        89514: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        91886: (e, t, n) => {
            'use strict';
            n.d(t, { BL: () => d, Gv: () => o, L5: () => c });
            var r,
                a = n(74631),
                i = {
                    597: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let r = n(810),
                            { innerWidth: a = 0, innerHeight: i = 0 } = window;
                        function s(e) {
                            let { top: t, right: n, bottom: r, left: s } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= i) || (r >= 0 && r <= i)) && ((s >= 0 && s <= a) || (n >= 0 && n <= a));
                        }
                        function l(e) {
                            var t, n;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, r)) ? n : e.attributes[0];
                        }
                        function o(e, t) {
                            let n = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, n);
                                });
                            }, t);
                            return n;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = s),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, n, a) {
                                let [{ freezeOnceVisible: i, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof n || void 0 === n ? [t.defaultOptions, n] : [{ ...t.defaultOptions, ...n }, a],
                                    [_, b] = (0, r.useState)({}),
                                    m = (0, r.useRef)(new Set()),
                                    p = (0, r.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && p) {
                                                          if (m.current.has(t)) return;
                                                          (b((n) => ({ ...n, [t]: { isIntersecting: e.isIntersecting } })),
                                                              i && e.isIntersecting && (m.current.add(t), p.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, r.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = s(e.current))) {
                                                            let t = l(e.current);
                                                            b((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || p.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                p && p.disconnect();
                                            }
                                        ),
                                        [u, p, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(a, 2));
                    },
                },
                s = {},
                l = (function e(t) {
                    var n = s[t];
                    if (void 0 !== n) return n.exports;
                    var r = (s[t] = { exports: {} });
                    return (i[t](r, r.exports, e), r.exports);
                })(597);
            l.__esModule;
            var o = l.createIntersectionObserver;
            l.defaultOptions;
            var c = l.getElementNameByDataAttribute;
            l.isInViewportNow;
            var d = l.useIntersectionObserver;
        },
        95314: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => s });
            var r = n(25839),
                a = n(74631),
                i = n(66192);
            let s = (e) => {
                let { objectId: t, objectPosX: n, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    b = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: n, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, n, s, l, o, c, d, u],
                    );
                return (0, r.jsx)(i.l.Provider, { value: b, children: _ });
            };
        },
        95445: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => i });
            var r = n(25895);
            let a = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                i = function (e, t) {
                    for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) i[s - 2] = arguments[s];
                    let [l] = i,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, r.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(a)) {
                        let { href: n } = (0, r.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = n;
                    }
                    return { canonical: u, languages: d };
                };
        },
        95858: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => o });
            var r = n(25839),
                a = n(74631),
                i = n(59342),
                s = n(91886),
                l = n(13232);
            let o = (e) => {
                let { children: t } = e,
                    n = (0, a.useRef)({}),
                    o = (0, a.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    r = n.current[t];
                                if (r) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, i.A)());
                                            (r.callback(!0, e), (r.showed = !0), (r.viewUuid = e));
                                        }, 1e3);
                                        r.timerId = e;
                                    }
                                    (!e.isIntersecting && r.showed && (r.callback(!1, r.viewUuid), (r.showed = !1), (r.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(r.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, a.useCallback)((e) => {
                        var t;
                        !n.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = o.current) || t.observe(e.elementRef.current), (n.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, a.useCallback)((e) => {
                        let t = n.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete n.current[e]);
                    }, []);
                (0, a.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = o.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, a.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, r.jsx)(l.B.Provider, { value: u, children: t });
            };
        },
        97522: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => b });
            var r = n(25839),
                a = n(58038),
                i = n.n(a),
                s = n(74631),
                l = n(71035),
                o = n(9079),
                c = n(64261),
                d = n(25895);
            let u = (e) => {
                    let [t, n] = (0, s.useState)(!1),
                        a = (0, l.c)(() => {
                            n(!0);
                        });
                    return (0, r.jsx)(i(), { prefetch: t, ...e, onMouseEnter: a });
                },
                _ = (e) => {
                    let { forwardedRef: t, href: n, component: a, ...l } = e,
                        { isPrefetchDisabled: _, isPrefetchOnHover: b } = (0, s.useContext)(c.j),
                        { href: m, target: p, rel: N } = (0, d.u)(null != n ? n : ''),
                        x = (0, s.isValidElement)(a)
                            ? a
                            : (function (e, t, n) {
                                  return e ? (t ? (0, r.jsx)(i(), { prefetch: !1 }) : n ? (0, r.jsx)(u, { href: e }) : (0, r.jsx)(i(), {})) : (0, r.jsx)('a', {});
                              })(n, _, b);
                    return (0, r.jsx)(o.N, { ref: t, component: x, href: n ? m : void 0, target: p, rel: N, ...l });
                },
                b = (0, s.forwardRef)((e, t) => (0, r.jsx)(_, { ...e, forwardedRef: t }));
        },
        97904: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => r });
            let r = (0, n(74631).createContext)({ skeleton: void 0 });
        },
        97952: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => i });
            var r = n(74631),
                a = n(82064);
            function i() {
                return (0, r.useContext)(a.r);
            }
        },
        98288: (e, t, n) => {
            'use strict';
            n.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        99401: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => A });
            var r = n(25839),
                a = n(82298),
                i = n(88204),
                s = n(39004),
                l = n(93588),
                o = n(43354),
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
                    let { formatMessage: t, language: n, tld: r, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, n) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, n) },
                    };
                };
            var _ = n(10959),
                b = n(89514);
            let m = (e) => e(new Date(), (0, b.m)());
            var p = n(96433),
                N = n(27954),
                x = n(400),
                g = n.n(x),
                v = n(61493),
                f = n(4254),
                S = n(97522);
            let h = (e) => {
                    let { className: t, data: n } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(g().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    n.year,
                                    ' \xa0',
                                    (0, r.jsx)(S.N, {
                                        target: '_blank',
                                        href: n.yandexMusic.url,
                                        className: (0, a.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: n.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(S.N, {
                                target: '_blank',
                                href: n.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: n.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: n } = e;
                    return (0, r.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: g().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: n.map((e) => {
                                    let { id: t, title: n, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, r.jsx)(S.N, { target: '_blank', href: a, className: g().link, 'data-test-id': v.S7.FOOTER_LINK, children: n }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { className: t, data: n } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(g().root, g().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, r.jsx)(E, { links: n.links, disclaimer: n.disclaimer }), (0, r.jsx)(h, { data: n.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: n } = (0, N.g)(),
                    { formatDate: a, formatMessage: i } = (0, s.A)(),
                    { language: l } = (0, p.h)(),
                    o = u({ formatMessage: i, language: l, tld: n.tld, year: m(a) });
                return (0, r.jsx)(h, { className: t, data: o });
            });
            let A = (0, i.PA)((e) => {
                var t;
                let { className: n } = e,
                    { experiments: i, location: b, user: x } = (0, N.g)(),
                    { formatDate: v, formatMessage: f } = (0, s.A)(),
                    { isEnabled: S } = null != (t = (0, o.P)()) ? t : {},
                    { language: h } = (0, p.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: n, isWebApplication: r, language: a, tld: i, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: n, tld: r, language: a, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, a) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, a) },
                                    b = [s, o, u];
                                return (n && 'ru' === i && b.push(l), b.push(_), b);
                            })({ formatMessage: n, isWebApplication: r, language: a, tld: i, userRegion: s }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => n({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => n({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: n, language: a, tld: i, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: l.$3,
                        tld: b.tld,
                        language: h,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: m(v),
                    });
                return (0, r.jsx)(C, { className: (0, a.$)({ [g().root_withOffsetForDeeplink]: S }, n), data: E });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3112, 2767, 3349, 7055, 8084, 6706, 4771, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1817, 3580, 4797, 2038, 4163, 3246, 7848, 8836, 4434, 5622, 4475,
                5056, 7358,
            ],
            () => e((e.s = 53203)),
        ),
            (_N_E = e.O()));
    },
]);
