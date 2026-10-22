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
            a.d(t, { S: () => n });
            var r = a(40207);
            let n = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: n } = e;
                return (0, r.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        2488: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => m });
            var r = a(25839),
                n = a(88204),
                i = a(74631),
                s = a(8487),
                o = a(61493),
                l = a(49656),
                c = a(4254),
                d = a(83418),
                u = a(26330),
                b = a.n(u);
            let m = (0, n.PA)((e) => {
                let { id: t, concert: a, withCashback: n = !0, withInlineMeta: u = !1, titleSize: m = 'm' } = e,
                    x = [],
                    p = (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == a ? void 0 : a.eventKind) &&
                    x.push(
                        (0, r.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': o.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, r.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: a.eventKind } }),
                        }),
                    ),
                    (null == a ? void 0 : a.contentRating) &&
                        x.push(
                            p,
                            (0, r.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': o.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: a.contentRating,
                            }),
                        ));
                let N = (0, l.L)(() =>
                    (null == a ? void 0 : a.city)
                        ? (0, r.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': o.OA.concert.CONCERT_CARD_LOCATION,
                              children: a.city,
                          })
                        : null,
                );
                return (
                    u && N && x.push(p, N),
                    (0, r.jsxs)('div', {
                        className: b().root,
                        id: t,
                        children: [
                            (0, r.jsx)(c.HL, {
                                variant: 'div',
                                size: m,
                                weight: 'medium',
                                className: b().city,
                                lineClamp: 1,
                                'data-test-id': o.OA.concert.CONCERT_CARD_TITLE,
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, r.jsx)('div', { className: b().info, children: x.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !u && N,
                            n &&
                                (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, r.jsx)(d.m, { className: b().cashback, valuePercent: a.cashbackValuePercent }),
                            n &&
                                !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, r.jsx)(d.m, { className: b().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        3656: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => u });
            var r = a(25839),
                n = a(82298),
                i = a(39004),
                s = a(61493),
                o = a(4254),
                l = a(98288),
                c = a(48631),
                d = a.n(c);
            let u = (e) => {
                let { datetime: t, className: a, monthClassName: c, dayClassName: u, weekdayClassName: b, withWeekday: m = !0, ...x } = e,
                    { formatDate: p } = (0, i.A)(),
                    N = ((e) => {
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
                return (0, r.jsxs)('div', {
                    className: (0, n.$)(d().root, a),
                    'aria-label': p(t, (0, l.s)()),
                    ...x,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, r.jsx)(o.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, n.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: N,
                        }),
                        (0, r.jsx)(o.HL, {
                            variant: 'div',
                            className: (0, n.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: p(t, { day: 'numeric' }),
                        }),
                        m &&
                            (0, r.jsx)(o.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, n.$)(d().weekday, b),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: p(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        6969: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => r });
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
        7050: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var r = a(39004),
                n = a(71035);
            let i = () => {
                let { formatMessage: e, formatNumber: t } = (0, r.A)();
                return (0, n.c)((a) => {
                    var r, n;
                    return (null == (r = a.price) ? void 0 : r.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(a.price.value, { style: 'currency', currency: null == (n = a.price) ? void 0 : n.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        9079: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => c });
            var r,
                n = a(74631),
                i = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (n && (n += ' '), (n += r));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (a.r(t), a.d(t, { clsx: () => r, default: () => n }));
                        let n = r;
                    },
                    7354: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
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
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var n = null;
                            if ((void 0 !== r && (n = '' + r), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    3616: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let n = a(4377),
                            i = a(810),
                            s = a(5881),
                            o = r(a(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, n.jsx)('a', {}),
                                        block: a,
                                        target: r,
                                        rel: l,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: b,
                                        icon: m,
                                        className: x,
                                        children: p,
                                        textClassName: N = '',
                                        containerClassName: f,
                                        ...g
                                    } = e,
                                    v = (0, i.useId)(),
                                    h = !i.Children.count(p),
                                    _ = 'left' === u,
                                    y = null;
                                if (void 0 !== m) {
                                    var W;
                                    y = (0, i.cloneElement)(m, {
                                        className: (0, s.clsx)(
                                            o.default.icon,
                                            { [o.default['icon_position_'.concat(u)]]: !h && u },
                                            null == (W = m.props) ? void 0 : W.className,
                                        ),
                                        key: v,
                                    });
                                }
                                let C = (0, i.useMemo)(
                                    () =>
                                        m
                                            ? (0, n.jsxs)('div', {
                                                  className: (0, s.clsx)(o.default.iconContainer, f),
                                                  children: [_ && y, !h && (0, n.jsx)('span', { className: N, children: p }), !_ && y],
                                              })
                                            : p,
                                    [p, f, m, _, h, y, N],
                                );
                                return (0, i.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: r,
                                        rel: '_blank' === r && void 0 === l ? 'noopener noreferrer' : l,
                                        href: c,
                                        className: (0, s.clsx)(o.default.root, { [o.default.block]: a, [o.default.flexIcon]: m && b, [o.default.iconOnly]: m && h }, x),
                                        ...g,
                                        ...t.props,
                                    },
                                    C,
                                );
                            };
                        t.Link = (0, i.forwardRef)((e, t) => (0, n.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(n, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, o), a.exports);
            }
            ((o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0));
                var e = o(3616);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = l.r;
            l.X;
        },
        10322: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var r = a(25839),
                n = a(74631),
                i = a(82064);
            let s = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l, children: c } = e,
                    d = (0, n.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l }), [t, a, s, o, l]);
                return (0, r.jsx)(i.r.Provider, { value: d, children: c });
            };
        },
        10959: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => n });
            var r = a(44806);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: n, userRegion: i } = e;
                return 'ru' === i && t(r.z.WebNextFooterDisclaimer, 'on') ? a() : n();
            };
        },
        11618: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        11823: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => n });
            var r = {};
            (Object.defineProperty(r, '__esModule', { value: !0 }),
                (r.createRipple = void 0),
                (r.createRipple = function (e, t, a) {
                    let r = null != a ? a : e.currentTarget,
                        n = document.createElement('span'),
                        i = Math.max(r.clientWidth, r.clientHeight),
                        s = i / 2,
                        o = r.getBoundingClientRect(),
                        l = 0 === e.clientX ? Math.round(o.width / 2) : e.clientX - o.left,
                        c = 0 === e.clientY ? Math.round(o.height / 2) : e.clientY - o.top;
                    ((n.style.width = ''.concat(i, 'px')),
                        (n.style.height = ''.concat(i, 'px')),
                        (n.style.left = 0 === e.clientX ? '0px' : ''.concat(l - s, 'px')),
                        (n.style.top = ''.concat(c - s, 'px')),
                        n.classList.add(t));
                    let d = r.getElementsByClassName(t)[0];
                    (d && d.remove(), r.insertBefore(n, r.firstChild));
                }),
                r.__esModule);
            var n = r.createRipple;
        },
        12234: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => n });
            var r = a(71872);
            function n(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(r.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, a) => {
            var r = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 9088] };
            function n(e) {
                if (!a.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    n = t[0];
                return a.e(t[1]).then(() => a.t(n, 19));
            }
            ((n.keys = () => Object.keys(r)), (n.id = 12526), (e.exports = n));
        },
        12929: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r, n: () => n });
            var r = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                n = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        14514: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => r });
            let r = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        14693: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var r,
                n = a(74631),
                i = {
                    810: (e) => {
                        e.exports = r || (r = a.t(n, 2));
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var a = s[t];
                    if (void 0 !== a) return a.exports;
                    var r = (s[t] = { exports: {} });
                    return (i[t](r, r.exports, e), r.exports);
                })(810);
                o.useToggle = (t) => {
                    let [a, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let n = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        i = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: a, toggle: n, setState: r, toggleTrue: i, toggleFalse: s };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        17109: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => x });
            var r = a(74631),
                n = a(67379),
                i = a(44031),
                s = a(69394),
                o = a(42220),
                l = a(59450),
                c = a(20258),
                d = a(29481),
                u = a(25488),
                b = a(97952),
                m = a(84e3);
            let x = (e) => {
                let { artistId: t, viewUuid: a } = e,
                    x = (0, l.st)(),
                    { hash: p } = (0, l.gf)(),
                    { pageId: N } = (0, b.$)(),
                    { objectsCount: f, objectType: g, objectId: v, objectPosX: h, objectPosY: _, objectPos: y } = (0, u.J)(),
                    W = (0, d.N)(),
                    C = (0, m.U)(),
                    E = (0, r.useCallback)(
                        (e) => {
                            let a = (0, n.F)({
                                params: { hash: p, artistId: t, objectsCount: f, objectType: g, objectId: v, objectPosX: h, objectPosY: _, to: e },
                                logger: C,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            x && a && (0, s.U6)(x.evgenInstance, a);
                        },
                        [x, t, p, C, v, h, _, g, f],
                    ),
                    k = (0, r.useCallback)(
                        (e) => {
                            let r = (0, n.F)({
                                params: { hash: p, artistId: t, viewUuid: a, objectId: v, objectPos: y, to: e },
                                logger: C,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            x && r && a && (0, o.mh)(x.evgenInstance, r);
                        },
                        [x, t, p, C, v, y, a],
                    );
                return (0, r.useCallback)(
                    (e) => {
                        if (x && N && c.xK.includes(N))
                            switch (N) {
                                case c._Q.ARTIST:
                                    E(e);
                                    break;
                                case c._Q.ARTIST_CONCERTS:
                                    k(e);
                                    break;
                                case c._Q.SEARCH:
                                    W({ to: i.AppScreen.ConcertPurchaseScreen });
                            }
                    },
                    [x, N, W, k, E],
                );
            };
        },
        17951: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => n });
            var r = a(61399);
            let n = (e) => {
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
                                            disclaimers: (0, r.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (a = e.isAvailable) || a, disclaimers: (0, r.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        18421: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { C: () => i }),
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
                })(r || (r = {})));
            let n = new Set(Object.values(r)),
                i = (e) => 'string' == typeof e && n.has(e);
        },
        19386: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => s });
            var r = a(74631),
                n = a(43354),
                i = a(25895);
            let s = (e) => {
                var t;
                let { setDeeplink: a } = null != (t = (0, n.P)()) ? t : {};
                (0, r.useEffect)(() => {
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
            a.d(t, { Q: () => n, W: () => i });
            var r = a(74631);
            let n = (0, r.createContext)({
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
                return (0, r.useContext)(n);
            }
        },
        24960: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 71613));
        },
        26076: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s });
            var r = a(25839);
            a(93588);
            var n = a(400),
                i = a.n(n);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: i().empty });
            };
        },
        26208: (e, t, a) => {
            'use strict';
            function r(e) {
                let { host: t, url: a } = e;
                return a || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            a.d(t, { v: () => r });
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
            var r = a(89288),
                n = a(28869);
            function i(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: i, locale: s, ogImage: o, siteName: l, ogType: c, customImage: d } = e,
                    u = o ? { url: (0, r.lU)(o, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: i,
                    ...(c && { type: c }),
                    siteName: l,
                    locale: (s || n.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        28604: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => n });
            var r = a(74631);
            let n = (e, t) => {
                (0, r.useEffect)(
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
            var r = a(58025),
                n = a(78773),
                i = a(14514),
                s = a(56107);
            let o = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var l = a(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: l.$.RU, en: l.$.EN, uz: l.$.UZ, kk: l.$.KK }[e]) ? t : l.$.RU;
            };
            var d = a(55040);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(n.Xn);
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
                    var t, a, r;
                    let n = (0, i.k)(this.config, e);
                    n !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (a = this.storage) || a.set(n), null == (r = this.changeLanguageHandler) || r.onChangeLanguage(n));
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
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: a, changeLanguageHandler: l, logger: c }) {
                    let d;
                    if (
                        ((0, r._)(this, 'language', void 0),
                        (0, r._)(this, 'storage', void 0),
                        (0, r._)(this, 'dictionary', void 0),
                        (0, r._)(this, 'config', void 0),
                        (0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'changeLanguageHandler', void 0),
                        (0, r._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = a),
                        (this.logger = c),
                        (this.changeLanguageHandler = l),
                        (this.serverDetectedLocale = e),
                        (this.config = n.pE[n.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: o(navigator.languages.join()),
                            });
                        }
                    } else [d] = o(e) || [];
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
            var r = a(74631);
            a(93588);
            var n = a(84059);
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
            a.d(t, { C: () => r });
            let r = (e, t) => {
                let [a, r] = e.split('?'),
                    n = new URLSearchParams(r || '');
                for (let [e, a] of new URLSearchParams(t).entries()) n.set(e, a);
                let i = n.toString();
                return ''.concat(a).concat(i ? '?'.concat(i) : '');
            };
        },
        38907: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => O });
            var r = a(25839),
                n = a(82298),
                i = a(88204),
                s = a(74631),
                o = a(44031),
                l = a(61493),
                c = a(71035),
                d = a(14693),
                u = a(11823),
                b = a(4071),
                m = a(86869),
                x = a(52512),
                p = a(85686),
                N = a(27954),
                f = a(44806),
                g = a(25895),
                v = a(17109),
                h = a(67379),
                _ = a(69394),
                y = a(42220),
                W = a(59450),
                C = a(20258),
                E = a(25488),
                k = a(97952),
                A = a(84e3),
                S = a(7050),
                T = a(64407),
                L = a(3656),
                P = a(47),
                R = a.n(P);
            let O = (0, i.PA)((e) => {
                let {
                        artistId: t,
                        concert: a,
                        meta: i,
                        viewUuid: P,
                        radius: O = 'l',
                        className: D,
                        shouldSendAnalyticsOnHide: I,
                        forceAfishaWidget: w,
                        shouldShowMask: j,
                    } = e,
                    { state: M, toggleTrue: F, toggleFalse: U } = (0, d.e)(!1),
                    { experiments: Y } = (0, N.g)(),
                    H = !w && Y.checkExperiment(f.z.WebNextConcertPage, 'on'),
                    { href: B } = (0, g.u)('/concert/:concertId', { params: { concertId: a.id } }),
                    V = (0, p.Z)(B),
                    z = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            r = (0, W.st)(),
                            { hash: n } = (0, W.gf)(),
                            { pageId: i } = (0, k.$)(),
                            { objectsCount: o, objectType: l, objectId: c, objectPosX: d, objectPosY: u, objectPos: b } = (0, E.J)(),
                            m = (0, A.U)(),
                            x = (0, s.useCallback)(() => {
                                let e = (0, h.F)({
                                    params: { hash: n, artistId: t, objectsCount: o, objectType: l, objectId: c, objectPosX: d, objectPosY: u },
                                    logger: m,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                r && e && (0, _.HB)(r.evgenInstance, e);
                            }, [r, t, n, m, c, d, u, l, o]),
                            p = (0, s.useCallback)(() => {
                                let e = (0, h.F)({
                                    params: { hash: n, artistId: t, viewUuid: a, objectId: c, objectPos: b },
                                    logger: m,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                r && e && a && (0, y.Z4)(r.evgenInstance, e);
                            }, [r, t, n, m, c, b, a]);
                        return (0, s.useCallback)(() => {
                            if (r && i && C.xK.includes(i))
                                switch (i) {
                                    case C._Q.ARTIST:
                                    case C._Q.CONCERT:
                                        x();
                                        break;
                                    case C._Q.ARTIST_CONCERTS:
                                        p();
                                }
                        }, [r, i, p, x]);
                    })({ artistId: t, viewUuid: P }),
                    G = (0, v.m)({ artistId: t, viewUuid: P }),
                    { ref: K, intersectionPropertyId: X } = (0, x.n)({ callback: null !== t ? z : void 0, singleEvent: !I }),
                    Q = (0, s.useId)(),
                    $ = (0, s.useId)(),
                    Z = (0, S.Y)()(a),
                    J = (0, c.c)((e) => {
                        ((0, u.P)(e, R().ripple), H && (V(e), G(o.FromArtistScreenTo.ConcertScreen)));
                    }),
                    q = (0, c.c)((e) => {
                        (F(), G(o.FromArtistScreenTo.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault());
                    });
                return (0, r.jsxs)(m.t, {
                    radius: O,
                    className: (0, n.$)(R().root, D, { [R().root_withConcertsRedesign]: a.isIdentityExperimentEnabled }),
                    ref: K,
                    'data-intersection-property-id': X,
                    onClick: J,
                    children: [
                        a.datetime &&
                            (0, r.jsx)(L.d, {
                                datetime: a.datetime,
                                id: Q,
                                className: (0, n.$)(R().date, { [R().dateWithMask]: j, [R().important]: j }),
                                dayClassName: R().dateColor,
                                monthClassName: R().dateColor,
                            }),
                        (0, s.cloneElement)(i, { id: $, concert: a }),
                        a.dataSessionId &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(b.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: R().button,
                                        'aria-describedby': ''.concat(Q, ' ').concat($),
                                        'aria-label': Z,
                                        onClick: q,
                                        'data-test-id': l.OA.concert.CONCERT_CARD_BUTTON,
                                        children: Z,
                                    }),
                                    (0, r.jsx)(T.h, { dataSessionId: a.dataSessionId, isOpened: M, onOpen: F, onClose: U }),
                                ],
                            }),
                    ],
                });
            });
        },
        40207: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => u });
            var r = a(74631),
                n = a(59342),
                i = a(71035),
                s = a(36484),
                o = a(62562),
                l = a(27954),
                c = a(12929),
                d = a(95067);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: a,
                        getStorageKey: u,
                        callback: b,
                        onAfterHandled: m,
                        onBeforeHandle: x,
                        onReject: p,
                        modalBehavior: N,
                        preventDefaultWhenSafe: f,
                    } = e,
                    {
                        disclaimerModalState: g,
                        modals: { disclaimerModal: v },
                    } = (0, l.g)(),
                    h = (0, r.useRef)(String((0, n.A)())),
                    _ = (0, r.useRef)(!1),
                    y = (0, r.useRef)(!1),
                    W = (0, r.useRef)(0),
                    C = (0, r.useRef)(!0),
                    E = (0, o.N)().get(s.U2),
                    k = (0, i.c)((e) => {
                        (f && (null == e || e.preventDefault()), b && b(e), m && m());
                    });
                return (
                    (0, r.useEffect)(() => {
                        g.isUnsafeDisclaimerConfirmed && g.id === h.current && !_.current && (k(), (_.current = !0));
                    }, [g.id, g.isUnsafeDisclaimerConfirmed, k]),
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
                        if (!y.current) {
                            y.current = !0;
                            try {
                                if ((null == x || x(e), t)) {
                                    var r, n, i;
                                    let s = t.getDisclaimerEntityRef(a),
                                        o = null != (r = null == u ? void 0 : u(t, s)) ? r : ''.concat(s.entityType, '_').concat(s.entityId),
                                        l = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = E.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(o)) return void k(e);
                                    }
                                    if (l) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && g.setType(c.Z.UNSAFE),
                                            g.setDisclaimerRejectHandler(null != p ? p : null),
                                            g.setId(h.current),
                                            g.setEntityKey(o),
                                            g.setCurrentEntityRef(s.entityType, s.entityId),
                                            g.setShouldHistoryBack(!!(null == N ? void 0 : N.shouldHistoryBack)),
                                            g.setShouldCloseModalOnOutsidePress(null == (n = null == N ? void 0 : N.closeOnOutside) || n),
                                            g.setShouldCloseModalOnEscape(null == (i = null == N ? void 0 : N.closeOnEscape) || i),
                                            (W.current += 1));
                                        let a = W.current,
                                            r = await t.getModalDisclaimerData();
                                        if (W.current !== a || !1 === C.current) return;
                                        (g.setModalData(null != r ? r : null), (_.current = !1), v.open());
                                        return;
                                    }
                                    (f && (null == e || e.preventDefault()), k(e));
                                    return;
                                }
                                (f && (null == e || e.preventDefault()), k(e));
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
            var r = a(71872),
                n = a(80461);
            let i = '@yandexmusic';
            function s(e) {
                return e.cardType === n.W.SUMMARY_LARGE_IMAGE
                    ? { card: n.W.SUMMARY_LARGE_IMAGE, site: i, title: e.title, description: e.description }
                    : {
                          card: n.W.APP,
                          site: i,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(r.Lz, '/').concat(e.url) } },
                      };
            }
        },
        43354: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => n, P: () => i });
            var r = a(74631);
            let n = (0, r.createContext)(null),
                i = () => (0, r.useContext)(n);
        },
        44806: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => r });
            var r = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextForcedLogin = 'WebNextForcedLogin'),
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
                    (e.WebNextWizard3 = 'WebNextWizard3'),
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
                    (e.WebNextOtelTechMetrics = 'WebNextOtelTechMetrics'),
                    (e.WebNextMainPlayerTitle = 'WebNextMainPlayerTitle'),
                    (e.WebNextUnstableMusicScreen = 'WebNextUnstableMusicScreen'),
                    e
                );
            })({});
        },
        46646: (e, t, a) => {
            var r = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function n(e) {
                if (!a.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    n = t[0];
                return a.e(t[1]).then(() => a.t(n, 19));
            }
            ((n.keys = () => Object.keys(r)), (n.id = 46646), (e.exports = n));
        },
        48631: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        53712: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => n });
            var r = a(25895);
            let n = {
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
        55040: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c, X: () => l });
            var r = a(36432),
                n = a(78773);
            let i = async (e) => e.then((e) => e.default),
                s = n.pE[n.cy],
                o = s.langs.reduce((e, t) => (e.set(t, async () => i(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                l = s.langs.reduce((e, t) => (e.set(t, async () => i(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                        a = t.get(e),
                        n = t.get('ru');
                    if (a) return a();
                    if (n) return n();
                    throw new r.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56412: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => W });
            var r = a(25839),
                n = a(82298),
                i = a(88204),
                s = a(74631),
                o = a(8487),
                l = a(61493),
                c = a(71035),
                d = a(4071),
                u = a(4254),
                b = a(36484),
                m = a(62562),
                x = a(21784),
                p = a(53712),
                N = a(85686),
                f = a(12929),
                g = a(95067),
                v = a(97522),
                h = a(71472),
                _ = a.n(h);
            let y = {
                    [f.n.ALBUM]: (0, r.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [f.n.PODCAST]: (0, r.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [f.n.ARTIST]: (0, r.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [f.n.TRACK]: (0, r.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [f.n.AUDIOBOOK]: (0, r.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [f.n.CLIP]: (0, r.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                W = (0, i.PA)((e) => {
                    var t;
                    let { modalState: a, data: i, onClose: h, className: W } = e,
                        C = null != i ? i : null == a ? void 0 : a.modalData,
                        E = (0, x.W)(),
                        k = (0, N.Z)(p.Z.main.href),
                        A = (0, m.N)().get(b.U2),
                        S = (0, c.c)(() => {
                            if (h) return h();
                            (E.canBack && E.back(), k());
                        }),
                        T = (null == C || null == (t = C.details) ? void 0 : t.url) && C.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = A.get(g.c.ExEx),
                                r = new Date(),
                                n = r.setMinutes(r.getMinutes() + 15),
                                i =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? A.set(g.c.ExEx, [...t, i], { expires: new Date(n) }) : A.set(g.c.ExEx, [i], { expires: new Date(n) }),
                                null == h || h(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        P = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == h || h(), E.canBack && E.back(), k()) : null == h || h(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let R = (0, s.useMemo)(() => {
                            if (C) {
                                var e, t;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, n.$)(_().title, _().text),
                                            'data-test-id': l.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: C.title,
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: _().text,
                                            'data-test-id': l.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: C.description,
                                        }),
                                        T &&
                                            (0, r.jsx)(v.N, {
                                                href: null == (e = C.details) ? void 0 : e.url,
                                                className: _().link,
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
                        }, [C, T]),
                        O = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === f.Z.UNSAFE
                                    ? (0, r.jsxs)('div', {
                                          className: _().buttons,
                                          children: [
                                              (0, r.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: P,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: _().button,
                                                  'data-test-id': l.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, r.jsx)(o.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, r.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: _().button,
                                                  'data-test-id': l.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && y[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)('div', {
                                          className: _().buttons,
                                          children: (0, r.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: S,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: _().button,
                                              'data-test-id': l.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, r.jsx)(o.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, S, P],
                        );
                    return (0, r.jsx)('div', {
                        className: (0, n.$)(_().root, W),
                        'data-test-id': l.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, r.jsxs)('div', { className: _().container, children: [R, O] }),
                    });
                });
        },
        61288: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => n });
            let r = /^(0|[1-9]\d*)$/;
            function n(e) {
                return void 0 !== e && !(e.length > 40) && r.test(e);
            }
        },
        61399: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => n });
            var r = a(18421);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61732: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => n });
            let r = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let r = window.document.createElement('meta');
                    return (r.setAttribute(e, t), r);
                },
                n = (e) => {
                    let { title: t, description: a, openGraph: n } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = r('name', 'description');
                        (e.setAttribute('content', a), window.document.head.appendChild(e));
                    }
                    let i = '';
                    if (n) {
                        let e = 'string' == typeof n.title ? n.title : '',
                            t = 'string' == typeof n.description ? n.description : '',
                            a = Array.isArray(n.images) ? n.images[0] : null;
                        i = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let s = r('property', 'og:title'),
                            o = r('property', 'og:description'),
                            l = r('property', 'og:image');
                        (s.setAttribute('content', e),
                            o.setAttribute('content', t),
                            l.setAttribute('content', i),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(l));
                    }
                };
        },
        64407: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => v });
            var r = a(25839),
                n = a(74631),
                i = a(39004),
                s = a(93588),
                o = a(61493),
                l = a(4071),
                c = a(35622),
                d = a(69084),
                u = a(36484),
                b = a(62562),
                m = a(92231),
                x = a(84059),
                p = a(30787),
                N = a(6969),
                f = a(29809),
                g = a.n(f);
            let v = (e) => {
                let { dataSessionId: t, isOpened: a, onOpen: f, onClose: v } = e,
                    h = (0, b.N)().get(u.V4),
                    { formatMessage: _ } = (0, i.A)(),
                    y = (() => {
                        let e = (0, x.useSearchParams)();
                        return (0, n.useCallback)(
                            (t) => {
                                let a = e.get(N.K.UTM_CAMPAIGN);
                                if (!a) return t;
                                let r = new URLSearchParams();
                                return (r.set(N.K.UTM_SOURCE, 'campaignid_'.concat(a)), (0, p.C)(t, r));
                            },
                            [e],
                        );
                    })(),
                    W = (0, n.useCallback)(
                        (e) => {
                            e.origin === h.afisha.host && 'close' === e.data.type && v();
                        },
                        [v, h.afisha.host],
                    );
                (0, n.useEffect)(
                    () => (
                        window.addEventListener('message', W),
                        () => {
                            window.removeEventListener('message', W);
                        }
                    ),
                    [W],
                );
                let C = (0, n.useCallback)(
                        (e) => {
                            e ? f() : v();
                        },
                        [v, f],
                    ),
                    E = (0, s.tE)(h, (0, m.u)()),
                    k = y(''.concat(h.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(E));
                return (0, r.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: a,
                    onOpenChange: C,
                    onClose: v,
                    showHeader: !1,
                    className: g().widget,
                    contentClassName: g().content,
                    overlayColor: 'full',
                    'data-test-id': o.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, r.jsx)(d.q, { children: (0, r.jsx)(l.$, { 'aria-label': _({ id: 'interface-actions.close' }), onClick: v }) }),
                        (0, r.jsx)('iframe', {
                            src: k,
                            className: g().root,
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
            var r = a(25839),
                n = a(70676);
            let i = (e) => Array.from({ length: e }, (e, t) => (0, r.jsx)(n.W, {}, t));
        },
        64595: (e, t, a) => {
            'use strict';
            function r() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => r });
        },
        69084: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var r,
                n = a(74631),
                i = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (n && (n += ' '), (n += r));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (a.r(t), a.d(t, { clsx: () => r, default: () => n }));
                        let n = r;
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var n = null;
                            if ((void 0 !== r && (n = '' + r), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    5531: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let n = a(4377),
                            i = a(5881),
                            s = a(810),
                            o = r(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: r, ...l } = e,
                                c = (0, i.clsx)(o.default.root, { [o.default.focusable]: a }, t);
                            return (0, s.isValidElement)(r)
                                ? (0, s.cloneElement)(r, { ...l, className: (0, i.clsx)(c, r.props.className) })
                                : (0, n.jsx)('span', { className: c, ...l, children: r });
                        };
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(n, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, o), a.exports);
            }
            ((o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = o(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = l.SROnly;
            l.__esModule;
        },
        69663: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => r });
            let r = () => ({ timeStyle: 'short' });
        },
        70676: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => c });
            var r = a(25839),
                n = a(82298),
                i = a(39004),
                s = a(23976),
                o = a(21532),
                l = a.n(o);
            let c = (e) => {
                let { className: t, isShimmerActive: a } = e,
                    { formatMessage: o } = (0, i.A)();
                return (0, r.jsxs)('div', {
                    'aria-label': o({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, n.$)(l().root, t),
                    children: [
                        (0, r.jsx)(s.W, { className: l().date, radius: 'm', isActive: a }),
                        (0, r.jsxs)('div', {
                            className: l().meta,
                            children: [
                                (0, r.jsx)(s.W, { className: l().title, radius: 's', isActive: a }),
                                (0, r.jsx)(s.W, { className: l().description, radius: 's', isActive: a }),
                            ],
                        }),
                        (0, r.jsx)(s.W, { className: l().action, radius: 'l', isActive: a }),
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
            (a.r(t), a.d(t, { default: () => J }));
            var r = a(25839),
                n = a(84059),
                i = a(88204),
                s = a(74631),
                o = a(39004),
                l = a(59342),
                c = a(61493),
                d = a(13833),
                u = a(4254),
                b = a(1407),
                m = a(1797),
                x = a(38907),
                p = a(83139),
                N = a(2488),
                f = a(20258),
                g = a(95858),
                v = a(95314),
                h = a(10322),
                _ = a(21784),
                y = a(89192),
                W = a(30716),
                C = a(27954),
                E = a(44806),
                k = a(56412),
                A = a(99401),
                S = a(26076),
                T = a(10603),
                L = a(64575),
                P = a(67379),
                R = a(42220),
                O = a(59450),
                D = a(84e3),
                I = a(17951),
                w = a(61732),
                j = a(12234),
                M = a(64595),
                F = a(26208),
                U = a(89221),
                Y = a(27935),
                H = a(41016),
                B = a(80461),
                V = a(95445);
            async function z(e, t) {
                var a, r, n;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {} };
                let i = await (0, U.W)(t.locale),
                    s = i({ id: 'metadata.artist-concerts-title' }, { artistName: e.artist.name }),
                    o = i({ id: 'metadata.artist-concerts-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: o,
                    openGraph: (0, Y.i)({
                        ogTitle: s,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, F.v)({ host: t.host }),
                        siteName: i({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, H.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: s, description: o }),
                    facebook: (0, M.k)(),
                    appLinks: (0, j.X)({
                        additional: { ...t, url: null != (r = t.url) ? r : '', fullUrl: null != (n = t.fullUrl) ? n : '', host: t.host },
                        appName: i({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, V.S)('/artist/:artistId/concerts', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var G = a(28604),
                K = a(19386),
                X = a(80751),
                Q = a.n(X);
            let $ = (0, i.PA)((e) => {
                var t, a, i;
                let { artistId: j, preloadedArtist: M, preloadedConcerts: F } = e,
                    { artist: U, disclaimerModalState: Y, experiments: H } = (0, C.g)(),
                    B = H.checkExperiment(E.z.WebNextConcertsIdentityEventType, 'on'),
                    { formatMessage: V } = (0, o.A)(),
                    { contentScrollRef: X, setContentScrollRef: $ } = (0, y.g)(),
                    Z = (0, _.W)(),
                    J = (0, s.useRef)(String((0, l.A)())),
                    q = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            r = (0, O.st)(),
                            { hash: n } = (0, O.gf)(),
                            i = (0, D.U)();
                        return (0, s.useCallback)(() => {
                            if (!r || !t) return;
                            let e = (0, P.F)({ params: { hash: n, artistId: t, viewUuid: a }, logger: i, context: 'useSendEventOnConcertsPageOpened' });
                            e && (0, R.__)(r.evgenInstance, e);
                        }, [r, t, n, i, a]);
                    })({ artistId: j, viewUuid: J.current }),
                    ee = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            r = (0, O.st)(),
                            { hash: n } = (0, O.gf)(),
                            i = (0, D.U)();
                        return (0, s.useCallback)(() => {
                            if (!r || !t) return;
                            let e = (0, P.F)({ params: { hash: n, artistId: t, viewUuid: a }, logger: i, context: 'useSendEventOnConcertsPageClosed' });
                            e && (0, R.pe)(r.evgenInstance, e);
                        }, [r, t, n, i, a]);
                    })({ artistId: j, viewUuid: J.current });
                (0, s.useEffect)(
                    () => (
                        q(),
                        () => {
                            ee();
                        }
                    ),
                    [ee, q],
                );
                let et = (0, m.S)({ artist: null == (t = U.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, K.G)(j),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = U.meta) ? void 0 : e.artist.isUnsafeLegal) && et();
                    }, [null == (a = U.meta) ? void 0 : a.artist.isUnsafeLegal, et]),
                    (0, G._)(U, j),
                    (0, s.useEffect)(
                        () => () => {
                            U.concertsSubpage.reset();
                        },
                        [U],
                    ),
                    (0, W.J)(U.concertsSubpage.isResolved),
                    U.concertsSubpage.isNotFound && (0, n.notFound)());
                let ea = (0, s.useMemo)(() => {
                        var e;
                        if (U.concertsSubpage.isLoading) return (0, L.T)(10);
                        let t = B ? N.M : p.Z;
                        return null == (e = U.concertsSubpage.concerts)
                            ? void 0
                            : e.map((e, a) =>
                                  (0, r.jsx)(
                                      v.B,
                                      {
                                          objectId: String(e.id),
                                          objectPos: a + 1,
                                          children: (0, r.jsx)(x.V, {
                                              artistId: j,
                                              concert: e,
                                              viewUuid: J.current,
                                              meta: (0, r.jsx)(t, { concert: e }),
                                              shouldShowMask: B,
                                          }),
                                      },
                                      e.id,
                                  ),
                              );
                    }, [U.concertsSubpage.concerts, U.concertsSubpage.isLoading, j, B, J]),
                    er = [];
                if (
                    (U.concertsSubpage.isNeededToLoad && er.push(U.concertsSubpage.getData({ artistId: Number(j), preloadedConcerts: F })),
                    U.infoLoadingState.isNeededToLoad && er.push(U.getInfo({ artistId: j, preloadedArtist: M })),
                    ((e) => {
                        var t;
                        (0, s.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                z({ artist: (0, I.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, w.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(U),
                    er.length && (0, s.use)(Promise.allSettled(er)),
                    null == (i = U.meta) ? void 0 : i.artist.isLegalRejected)
                )
                    return (0, r.jsx)(k.M, { modalState: Y });
                let en = (0, s.useMemo)(
                    () =>
                        B && U.concertsSubpage.artistTitle
                            ? V({ id: 'page.artist-all-concerts-header' }, { artistName: U.concertsSubpage.artistTitle })
                            : V({ id: 'page.artist-concerts-header' }, { artistName: U.commonSubPage.artistName }),
                    [B, U.concertsSubpage.artistTitle, U.commonSubPage.artistName, V],
                );
                return (0, r.jsx)(h.n, {
                    pageId: f._Q.ARTIST_CONCERTS,
                    pageEntityId: j,
                    children: (0, r.jsx)(g.j, {
                        children: (0, r.jsx)(b.h, {
                            scrollElement: X,
                            outerTitle: en,
                            children: (0, r.jsxs)('div', {
                                className: Q().root,
                                'data-test-id': c.Xk.artist.ARTIST_CONCERTS_PAGE,
                                children: [
                                    (0, r.jsx)(T.Y, {
                                        variant: T.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: Z.canBack,
                                        children: (0, r.jsx)(u.DZ, { id: 'concerts-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: en }),
                                    }),
                                    (0, r.jsxs)(d.N, {
                                        ref: $,
                                        className: Q().scrollableContent,
                                        containerClassName: Q().container,
                                        children: [
                                            (0, r.jsx)('div', { className: Q().content, 'aria-labelledby': 'concerts-header', tabIndex: 0, children: ea }),
                                            (0, r.jsx)(S.A, { children: (0, r.jsx)(A.w, { className: Q().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            });
            var Z = a(61288);
            let J = () => {
                let e = (0, n.useSearchParams)().get('artistId');
                return ((e && (0, Z.L)(e)) || (0, n.notFound)(), (0, r.jsx)($, { artistId: e }));
            };
        },
        78773: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => i, cy: () => n, pE: () => r });
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
                n = 'yandex',
                i = 'ru-RU';
        },
        80461: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => r });
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
        83139: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => b });
            var r = a(25839),
                n = a(88204),
                i = a(74631),
                s = a(39004),
                o = a(4254),
                l = a(69663),
                c = a(83418),
                d = a(26330),
                u = a.n(d);
            let b = (0, n.PA)((e) => {
                let { id: t, concert: a } = e,
                    { formatDate: n } = (0, s.A)(),
                    d = [],
                    b = (0, r.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == a ? void 0 : a.place) && d.push((0, r.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.place })),
                    (null == a ? void 0 : a.datetime) &&
                        d.push(b, (0, r.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', className: u().time, children: n(a.datetime, (0, l.f)()) })),
                    (null == a ? void 0 : a.contentRating) && d.push(b, (0, r.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                    (0, r.jsxs)('div', {
                        className: u().root,
                        id: t,
                        children: [
                            (0, r.jsx)(o.HL, { variant: 'div', size: 'm', weight: 'medium', className: u().city, lineClamp: 1, children: null == a ? void 0 : a.city }),
                            (0, r.jsx)('div', { className: u().info, children: d.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, r.jsx)(c.m, { className: u().cashback, valuePercent: a.cashbackValuePercent }),
                            !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, r.jsx)(c.m, { className: u().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        83418: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => d });
            var r = a(25839),
                n = a(82298),
                i = a(61493),
                s = a(66738),
                o = a(4254),
                l = a(11618),
                c = a.n(l);
            let d = (e) => {
                let { title: t, className: a, titleClassName: l, valuePercent: d } = e;
                return (0, r.jsxs)('div', {
                    className: (0, n.$)(c().root, a),
                    children: [
                        (0, r.jsx)(s.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, r.jsx)(o.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, n.$)(c().title, l),
                            'data-test-id': i.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        86166: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { $: () => r }),
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
        86869: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => c });
            var r,
                n = a(74631),
                i = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (n && (n += ' '), (n += r));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (a.r(t), a.d(t, { clsx: () => r, default: () => n }));
                        let n = r;
                    },
                    2095: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
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
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var n = null;
                            if ((void 0 !== r && (n = '' + r), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    6009: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let n = a(4377),
                            i = a(5881),
                            s = a(810),
                            o = r(a(2095)),
                            l = (e) => {
                                let { forwardRef: t, radius: a, variant: r = 'default', children: s, className: l, withShadow: c, style: d, ...u } = e;
                                return (0, n.jsx)('div', {
                                    className: (0, i.clsx)(
                                        o.default.root,
                                        o.default['root_radius_'.concat(a)],
                                        o.default['root_variant_'.concat(r)],
                                        { [o.default.root_withShadow]: c },
                                        l,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: s,
                                });
                            };
                        t.Paper = (0, s.forwardRef)((e, t) => (0, n.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(n, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, o), a.exports);
            }
            ((o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'U', { value: !0 }), (l.X = void 0));
                var e = o(6009);
                Object.defineProperty(l, 'X', {
                    enumerable: !0,
                    get: function () {
                        return e.Paper;
                    },
                });
            })();
            var c = l.X;
            l.U;
        },
        89221: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => d });
            var r = a(13580),
                n = a(74631),
                i = a(78773),
                s = a(28869),
                o = a(14514),
                l = a(55040);
            let c = (0, n.cache)(async (e) => (0, l.M)(e, l.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        a = (0, o.k)(i.pE[i.cy], t),
                        n = await c(a);
                    return (e, t) => {
                        let i = null == n ? void 0 : n[e.id],
                            s = '';
                        return ((Array.isArray(i) || 'string' == typeof i) && (s = new r.S(i, a).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        89514: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        95314: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => s });
            var r = a(25839),
                n = a(74631),
                i = a(66192);
            let s = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: s, objectPos: o, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u, children: b } = e,
                    m = (0, n.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: s, objectPos: o, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, a, s, o, l, c, d, u],
                    );
                return (0, r.jsx)(i.l.Provider, { value: m, children: b });
            };
        },
        95445: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var r = a(25895);
            let n = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                i = function (e, t) {
                    for (var a = arguments.length, i = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) i[s - 2] = arguments[s];
                    let [o] = i,
                        l = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != o ? o : {}), options: e }),
                        d = {},
                        { href: u } = (0, r.u)(l, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(n)) {
                        let { href: a } = (0, r.u)(l, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = a;
                    }
                    return { canonical: u, languages: d };
                };
        },
        95858: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => l });
            var r = a(25839),
                n = a(74631),
                i = a(59342),
                s = a(91886),
                o = a(13232);
            let l = (e) => {
                let { children: t } = e,
                    a = (0, n.useRef)({}),
                    l = (0, n.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    r = a.current[t];
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
                    c = (0, n.useCallback)((e) => {
                        var t;
                        !a.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = l.current) || t.observe(e.elementRef.current), (a.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, n.useCallback)((e) => {
                        let t = a.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete a.current[e]);
                    }, []);
                (0, n.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = l.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, n.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, r.jsx)(o.B.Provider, { value: u, children: t });
            };
        },
        98288: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        99401: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => E });
            var r = a(25839),
                n = a(82298),
                i = a(88204),
                s = a(39004),
                o = a(93588),
                l = a(43354),
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
                    let { formatMessage: t, language: a, tld: r, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, a) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, a) },
                    };
                };
            var b = a(10959),
                m = a(89514);
            let x = (e) => e(new Date(), (0, m.m)());
            var p = a(96433),
                N = a(27954),
                f = a(400),
                g = a.n(f),
                v = a(61493),
                h = a(4254),
                _ = a(97522);
            let y = (e) => {
                    let { className: t, data: a } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, n.$)(g().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(h.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, r.jsx)(_.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, n.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(_.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                W = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, r.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: g().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: n } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, r.jsx)(_.N, { target: '_blank', href: n, className: g().link, 'data-test-id': v.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(h.HL, {
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
                    let { className: t, data: a } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, n.$)(g().root, g().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, r.jsx)(W, { links: a.links, disclaimer: a.disclaimer }), (0, r.jsx)(y, { data: a.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, N.g)(),
                    { formatDate: n, formatMessage: i } = (0, s.A)(),
                    { language: o } = (0, p.h)(),
                    l = u({ formatMessage: i, language: o, tld: a.tld, year: x(n) });
                return (0, r.jsx)(y, { className: t, data: l });
            });
            let E = (0, i.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: i, location: m, user: f } = (0, N.g)(),
                    { formatDate: v, formatMessage: h } = (0, s.A)(),
                    { isEnabled: _ } = null != (t = (0, l.P)()) ? t : {},
                    { language: y } = (0, p.h)(),
                    W = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: r, language: n, tld: i, userRegion: s, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: r, language: n, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, n) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, n) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, n) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, n) },
                                    b = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, n) },
                                    m = [s, l, u];
                                return (a && 'ru' === i && m.push(o), m.push(b), m);
                            })({ formatMessage: a, isWebApplication: r, language: n, tld: i, userRegion: s }),
                            disclaimer: (0, b.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: a, language: n, tld: i, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: h,
                        isWebApplication: o.$3,
                        tld: m.tld,
                        language: y,
                        userRegion: f.account.data.userSessionRegionIso,
                        year: x(v),
                    });
                return (0, r.jsx)(C, { className: (0, n.$)({ [g().root_withOffsetForDeeplink]: _ }, a), data: W });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3112, 9122, 3349, 8803, 8084, 6706, 4771, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1817, 3580, 4797, 2038, 4163, 3246, 7848, 4345, 8836, 4434, 5622, 4475,
                5056, 7358,
            ],
            () => e((e.s = 24960)),
        ),
            (_N_E = e.O()));
    },
]);
