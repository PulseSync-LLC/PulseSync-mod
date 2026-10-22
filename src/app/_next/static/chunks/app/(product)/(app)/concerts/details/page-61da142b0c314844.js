(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2849],
    {
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
        1645: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            let n = (e) => {
                if (e) return { value: e.value, currency: e.currency };
            };
        },
        2488: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => _ });
            var n = r(25839),
                a = r(88204),
                i = r(74631),
                s = r(8487),
                l = r(61493),
                o = r(49656),
                c = r(4254),
                d = r(83418),
                u = r(26330),
                m = r.n(u);
            let _ = (0, a.PA)((e) => {
                let { id: t, concert: r, withCashback: a = !0, withInlineMeta: u = !1, titleSize: _ = 'm' } = e,
                    g = [],
                    h = (0, n.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == r ? void 0 : r.eventKind) &&
                    g.push(
                        (0, n.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': l.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, n.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: r.eventKind } }),
                        }),
                    ),
                    (null == r ? void 0 : r.contentRating) &&
                        g.push(
                            h,
                            (0, n.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: r.contentRating,
                            }),
                        ));
                let p = (0, o.L)(() =>
                    (null == r ? void 0 : r.city)
                        ? (0, n.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                              children: r.city,
                          })
                        : null,
                );
                return (
                    u && p && g.push(h, p),
                    (0, n.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, n.jsx)(c.HL, {
                                variant: 'div',
                                size: _,
                                weight: 'medium',
                                className: m().city,
                                lineClamp: 1,
                                'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                                children: null == r ? void 0 : r.title,
                            }),
                            (0, n.jsx)('div', { className: m().info, children: g.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !u && p,
                            a &&
                                (null == r ? void 0 : r.isIdentityExperimentEnabled) &&
                                r.cashbackValuePercent &&
                                (0, n.jsx)(d.m, { className: m().cashback, valuePercent: r.cashbackValuePercent }),
                            a &&
                                !(null == r ? void 0 : r.isIdentityExperimentEnabled) &&
                                (null == r ? void 0 : r.isCashbackExperimentEnabled) &&
                                r.cashbackTitle &&
                                (0, n.jsx)(d.m, { className: m().cashback, title: r.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        3656: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => u });
            var n = r(25839),
                a = r(82298),
                i = r(39004),
                s = r(61493),
                l = r(4254),
                o = r(98288),
                c = r(48631),
                d = r.n(c);
            let u = (e) => {
                let { datetime: t, className: r, monthClassName: c, dayClassName: u, weekdayClassName: m, withWeekday: _ = !0, ...g } = e,
                    { formatDate: h } = (0, i.A)(),
                    p = ((e) => {
                        let { formatMessage: t } = (0, i.A)(),
                            r = {
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
                        if (e) return r[new Date(e).getMonth()];
                    })(t);
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(d().root, r),
                    'aria-label': h(t, (0, o.s)()),
                    ...g,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, n.jsx)(l.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, a.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: p,
                        }),
                        (0, n.jsx)(l.HL, {
                            variant: 'div',
                            className: (0, a.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: h(t, { day: 'numeric' }),
                        }),
                        _ &&
                            (0, n.jsx)(l.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, a.$)(d().weekday, m),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: h(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        6969: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => n });
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
        7050: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => i });
            var n = r(39004),
                a = r(71035);
            let i = () => {
                let { formatMessage: e, formatNumber: t } = (0, n.A)();
                return (0, a.c)((r) => {
                    var n, a;
                    return (null == (n = r.price) ? void 0 : n.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(r.price.value, { style: 'currency', currency: null == (a = r.price) ? void 0 : a.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        9079: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => c });
            var n,
                a = r(74631),
                i = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (a && (a += ' '), (a += n));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => a }));
                        let a = n;
                    },
                    7354: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
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
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var a = null;
                            if ((void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
                            else n = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3616: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let a = r(4377),
                            i = r(810),
                            s = r(5881),
                            l = n(r(7354)),
                            o = (e) => {
                                let {
                                        component: t = (0, a.jsx)('a', {}),
                                        block: r,
                                        target: n,
                                        rel: o,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: m,
                                        icon: _,
                                        className: g,
                                        children: h,
                                        textClassName: p = '',
                                        containerClassName: v,
                                        ...y
                                    } = e,
                                    x = (0, i.useId)(),
                                    f = !i.Children.count(h),
                                    E = 'left' === u,
                                    C = null;
                                if (void 0 !== _) {
                                    var b;
                                    C = (0, i.cloneElement)(_, {
                                        className: (0, s.clsx)(
                                            l.default.icon,
                                            { [l.default['icon_position_'.concat(u)]]: !f && u },
                                            null == (b = _.props) ? void 0 : b.className,
                                        ),
                                        key: x,
                                    });
                                }
                                let N = (0, i.useMemo)(
                                    () =>
                                        _
                                            ? (0, a.jsxs)('div', {
                                                  className: (0, s.clsx)(l.default.iconContainer, v),
                                                  children: [E && C, !f && (0, a.jsx)('span', { className: p, children: h }), !E && C],
                                              })
                                            : h,
                                    [h, v, _, E, f, C, p],
                                );
                                return (0, i.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: n,
                                        rel: '_blank' === n && void 0 === o ? 'noopener noreferrer' : o,
                                        href: c,
                                        className: (0, s.clsx)(l.default.root, { [l.default.block]: r, [l.default.flexIcon]: _ && m, [l.default.iconOnly]: _ && f }, g),
                                        ...y,
                                        ...t.props,
                                    },
                                    N,
                                );
                            };
                        t.Link = (0, i.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (i[e].call(r.exports, r, r.exports, l), r.exports);
            }
            ((l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => a });
            var n = r(44806);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: a, userRegion: i } = e;
                return 'ru' === i && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : a();
            };
        },
        11148: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => S });
            var n,
                a,
                i = r(25839),
                s = r(82298),
                l = r(88204),
                o = r(74631),
                c = r(61493),
                d = r(49656),
                u = r(23818),
                m = r(27954),
                _ = r(44806),
                g = r(89288);
            let h = (e) => (0, g.a6)(e.replace('%%', '960x690_noncrop'));
            var p = r(8487),
                v = r(4254);
            function y() {
                return (y = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t];
                              for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let x = function (e) {
                return o.createElement(
                    'svg',
                    y({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    n ||
                        (n = o.createElement(
                            'defs',
                            null,
                            o.createElement(
                                'linearGradient',
                                { id: 'plusColorGradient', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                o.createElement('stop', { stopColor: '#FF5C4D' }),
                                o.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                o.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            o.createElement('clipPath', { id: 'plusColorClip' }, o.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                        )),
                    a ||
                        (a = o.createElement(
                            'g',
                            { clipPath: 'url(#plusColorClip)' },
                            o.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                            o.createElement('path', {
                                fill: 'url(#plusColorGradient)',
                                fillRule: 'evenodd',
                                d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                clipRule: 'evenodd',
                            }),
                        )),
                );
            };
            var f = r(77245),
                E = r.n(f);
            let C = (e) => {
                let { percent: t, className: r } = e;
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(E().root, r),
                    'data-test-id': c.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, i.jsx)(x, { 'aria-hidden': !0, className: E().icon }),
                        (0, i.jsx)(v.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: E().text,
                            children: (0, i.jsx)(p.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var b = r(3656),
                N = r(15915),
                T = r.n(N);
            let S = (0, l.PA)((e) => {
                let { uri: t, withMask: r, datetime: n, coverColor: a, cashbackPercent: l } = e,
                    { experiments: p } = (0, m.g)(),
                    [v, y] = (0, o.useState)(!1),
                    x = p.checkExperiment(_.z.NewConcertsTicketRedesign, 'on') && r,
                    f = p.checkExperiment(_.z.WebNextConcertsIdentityEventType, 'on'),
                    E = (0, o.useCallback)(() => {
                        y(!0);
                    }, []),
                    N = (0, d.L)(() => {
                        if (a)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: r, l: n } = (0, g.g8)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(r, '%, ')
                                        .concat(n <= 55 ? n + 20 : n - 20, '%)');
                                })(a),
                            };
                    }),
                    S = (0, d.L)(() =>
                        n
                            ? (0, i.jsxs)('div', {
                                  className: (0, s.$)(T().date, { [T().date_withEventType]: f }),
                                  children: [
                                      (0, i.jsx)(u._V, {
                                          className: T().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: E,
                                      }),
                                      v &&
                                          (0, i.jsx)(b.d, {
                                              className: T().root_withEventType,
                                              dayClassName: T().day_withEventType,
                                              weekdayClassName: T().weekday_withEventType,
                                              monthClassName: T().month_withEventType,
                                              datetime: n,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    A = (0, d.L)(() =>
                        n
                            ? (0, i.jsx)(b.d, {
                                  dayClassName: T().day,
                                  weekdayClassName: (0, s.$)(T().weekday, T().important),
                                  monthClassName: T().month,
                                  className: T().date,
                                  datetime: n,
                              })
                            : null,
                    );
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(T().root, { [T().root_withMask]: x }),
                    style: N,
                    children: [
                        (0, i.jsx)(u._V, {
                            className: T().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: h,
                            'aria-hidden': !0,
                            'data-test-id': c.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        n && (f ? S : A),
                        f && l && (0, i.jsx)(C, { className: T().cashback, percent: l }),
                    ],
                });
            });
        },
        11618: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        14693: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => o });
            var n,
                a = r(74631),
                i = {
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                s = {},
                l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useToggle = void 0));
                let e = (function e(t) {
                    var r = s[t];
                    if (void 0 !== r) return r.exports;
                    var n = (s[t] = { exports: {} });
                    return (i[t](n, n.exports, e), n.exports);
                })(810);
                l.useToggle = (t) => {
                    let [r, n] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        n(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            n((e) => !e);
                        }, []),
                        i = (0, e.useCallback)(() => {
                            n(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            n(!1);
                        }, []);
                    return { state: r, toggle: a, setState: n, toggleTrue: i, toggleFalse: s };
                };
            })(),
                l.__esModule);
            var o = l.useToggle;
        },
        15915: (e) => {
            e.exports = {
                root: 'ConcertImage_root__gZpOa',
                root_withMask: 'ConcertImage_root_withMask__1ayfK',
                image: 'ConcertImage_image__xtZCZ',
                day: 'ConcertImage_day__c90Ih',
                month: 'ConcertImage_month__Ic5k5',
                date: 'ConcertImage_date__aH1IR',
                date_withEventType: 'ConcertImage_date_withEventType__QRb1o',
                day_withEventType: 'ConcertImage_day_withEventType__GI5B9',
                month_withEventType: 'ConcertImage_month_withEventType__Thry7',
                weekday_withEventType: 'ConcertImage_weekday_withEventType__v4vMZ',
                dateBackground: 'ConcertImage_dateBackground__GAONC',
                weekday: 'ConcertImage_weekday__kXeo3',
                important: 'ConcertImage_important__0o7jF',
                cashback: 'ConcertImage_cashback__TQ_tu',
            };
        },
        17226: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => n });
            var n = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        19835: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => i });
            var n = r(28410),
                a = r(36159);
            let i = n.gK.model('LoadingState', { loadingState: n.gK.enumeration(Object.values(a.G)) }).views((e) => ({
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
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var n = r(25839);
            r(93588);
            var a = r(400),
                i = r.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: i().empty });
            };
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
        26847: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => a });
            var n = r(28410);
            let a = n.gK.model('Cover', { uri: n.gK.maybe(n.gK.string), color: n.gK.maybe(n.gK.string), videoUrl: n.gK.maybe(n.gK.string) });
        },
        27990: (e) => {
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
        28924: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => l });
            var n = r(25839),
                a = r(23976),
                i = r(73367),
                s = r.n(i);
            let l = (e) => {
                let { isActive: t, withMeta: r, withPriceButton: i } = e;
                return (0, n.jsxs)('div', {
                    className: s().root,
                    children: [
                        (0, n.jsx)(a.W, { radius: 'm', className: s().shimmerCover, isActive: t }),
                        (0, n.jsxs)('div', {
                            className: s().meta,
                            children: [
                                (0, n.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerTitle }),
                                r &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerInfo }),
                                            (0, n.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerCity }),
                                        ],
                                    }),
                            ],
                        }),
                        i && (0, n.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerButton }),
                    ],
                });
            };
        },
        29809: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        30787: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => n });
            let n = (e, t) => {
                let [r, n] = e.split('?'),
                    a = new URLSearchParams(n || '');
                for (let [e, r] of new URLSearchParams(t).entries()) a.set(e, r);
                let i = a.toString();
                return ''.concat(r).concat(i ? '?'.concat(i) : '');
            };
        },
        32190: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => c });
            var n = r(25839),
                a = r(82298),
                i = r(88204),
                s = r(74631),
                l = r(32942),
                o = r.n(l);
            let c = (0, i.PA)((e) => {
                let { indices: t, virtualItem: r, renderItemByIndex: i, columnClassName: l, className: c, resizeObserver: d, scrollMargin: u } = e,
                    m = (0, s.useRef)(null),
                    _ = t[r.index],
                    g = { '--virtual-grid-row-vertical-offset': ''.concat(r.start - u, 'px') };
                return (
                    (0, s.useEffect)(() => {
                        let e = m.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, n.jsx)('div', {
                        'data-index': r.index,
                        ref: m,
                        style: g,
                        className: (0, a.$)(o().root, c),
                        children: null == _ ? void 0 : _.map((e) => (0, n.jsx)('div', { className: l, children: i(e) }, ''.concat(r.key, '_').concat(e))),
                    })
                );
            });
        },
        32942: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        35005: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => l });
            var n = r(28410),
                a = r(68093),
                i = r(69274),
                s = r(1645);
            let l = (e, t) => {
                var r, l, o, c;
                let { uri: d, color: u } = e.cover || {};
                return (0, n.wg)({
                    id: e.id,
                    title: e.concertTitle,
                    city: e.city,
                    place: e.place,
                    datetime: e.datetime && (0, i.A)(e.datetime),
                    contentRating: e.contentRating,
                    dataSessionId: e.dataSessionId,
                    cover: { uri: d, color: u },
                    rank: e.rank,
                    cashbackTitle: null == (r = e.cashback) ? void 0 : r.title,
                    cashbackValuePercent: null == (l = e.cashback) ? void 0 : l.valuePercent,
                    price: (0, s.J)(t),
                    eventKind: null != (c = null == (o = e.eventInfo) ? void 0 : o.type) ? c : a.Z.UNSPECIFIED,
                });
            };
        },
        40489: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => c });
            var n = r(26508),
                a = r(49656),
                i = r(28631),
                s = r(74631);
            let l = (e) => {
                let { minColumnWidth: t, maxColumnWidth: r, containerWidth: n, totalCount: a, columnGap: i, minColumnCount: s, maxColumnCount: l } = e,
                    o = Math.max(1, Math.floor((n + i) / (t + i))),
                    c = Math.max(s, Math.floor((n + i) / ((r + t) * 0.5 + i)));
                for (let e = s; e <= o; e++) {
                    let a = (n - (e - 1) * i) / e;
                    if (a >= t && a <= r) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = l ? Math.min(c, l) : c)), columnCount: c };
            };
            var o = r(52312);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: r,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: m,
                        minColumnCount: _,
                        maxColumnCount: g,
                        containerRef: h,
                    } = e,
                    { rowCount: p, columnCount: v } = ((e) => {
                        let { containerRef: t, minColumnCount: r, maxColumnWidth: n, minColumnWidth: a, totalCount: o, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, s.useState)({ rowCount: 0, columnCount: 0 }),
                            _ = (0, s.useRef)(null),
                            g = (0, s.useMemo)(
                                () =>
                                    (0, i.A)(
                                        (e) => {
                                            m(
                                                l({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: n,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: o,
                                                    columnGap: c,
                                                    minColumnCount: r,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, n, r, a, o],
                            );
                        return (
                            (0, s.useLayoutEffect)(
                                () => (
                                    _.current && _.current.disconnect(),
                                    (_.current = new ResizeObserver((e) => {
                                        e.forEach(g);
                                    })),
                                    t &&
                                        (m(
                                            l({
                                                minColumnWidth: a,
                                                maxColumnWidth: n,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: o,
                                                columnGap: c,
                                                minColumnCount: r,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        _.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = _.current) || e.disconnect();
                                    }
                                ),
                                [c, t, g, d, n, r, a, o],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: _, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: g, containerRef: h }),
                    { virtualizer: y, resizeObserver: x } = (0, o.r)({ count: p, getEstimateSize: r, gap: c, containerRef: h }),
                    f = (0, n.A)(
                        Array.from({ length: t }, (e, t) => t),
                        v,
                    ),
                    E = (0, a.L)(() => {
                        var e, t;
                        if (!y.range) return null;
                        let r = null == (e = f[y.range.startIndex]) ? void 0 : e.at(0),
                            n = null == (t = f[y.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== r && void 0 !== n ? { startIndex: r, endIndex: n } : null;
                    });
                return { virtualizer: y, rowResizeObserver: x, indices: f, columnCount: v, visibleRange: E };
            };
        },
        43354: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a, P: () => i });
            var n = r(74631);
            let a = (0, n.createContext)(null),
                i = () => (0, n.useContext)(a);
        },
        48631: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        51751: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => a });
            var n = r(28410);
            let a = (e) => {
                let t = (0, n.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: r } = (0, n._$)(e);
                return r || t;
            };
        },
        52312: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => c });
            var n = r(84361),
                a = r(74631),
                i = r(71035),
                s = r(89192),
                l = r(27954);
            let o = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: r, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, l.g)(),
                        { contentScrollRef: _ } = (0, s.g)(),
                        g = (0, a.useRef)(new Map()),
                        h = (0, a.useRef)(void 0),
                        p = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = g.current.get(String(e));
                                return null != t ? t : r(e);
                            },
                            overscan: u,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, r) => {
                                if (!t) return 0;
                                let n = t.getBoundingClientRect().top;
                                return e && 1 ? n + window.scrollY : !e && r ? n + r.scrollTop : 0;
                            })(m, d, _),
                        },
                        v = (0, n.XW)(p),
                        y = (0, n.Te)({ ...p, getScrollElement: () => _, initialOffset: null == _ ? void 0 : _.scrollTop }),
                        x = m ? v : y,
                        f = (0, i.c)(() => {
                            x.measure();
                        });
                    return (
                        (0, a.useEffect)(() => {
                            h.current ||
                                (h.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let r = e.target.getAttribute('data-index');
                                        if (e.target && r) {
                                            let n = e.contentRect.height;
                                            n && n !== g.current.get(r) && (g.current.set(r, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && f());
                                }));
                        }, [f]),
                        { virtualizer: x, resizeObserver: h.current }
                    );
                };
        },
        53712: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => a });
            var n = r(25895);
            let a = {
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
        61777: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => y });
            var n = r(74631),
                a = r(67379),
                i = r(20934),
                s = r(59450),
                l = r(49656),
                o = r(84e3),
                c = r(58069),
                d = r(20258),
                u = r(26742),
                m = r(25195),
                _ = r(37314),
                g = r(97952),
                h = r(10764),
                p = r(72594);
            let v = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                y = () => {
                    let e = (0, n.useRef)(!1),
                        t = (0, s.st)(),
                        r = (0, o.U)(),
                        { hash: y } = (0, s.gf)(),
                        { pageId: x } = (0, g.$)(),
                        { tabId: f, tabPos: E, isTabSelectedByDefault: C } = (0, p.R)(),
                        { offsetBlockPosY: b } = (0, m.u)(),
                        { blockId: N, blockType: T, blockPosX: S, blockPosY: A, mainObjectType: k, mainObjectId: w, objectsCount: O } = (0, u.N)(),
                        { filterKey: j, filterValue: I, filterPos: R } = (0, _.G)(),
                        { skeleton: P } = (0, h.b)(),
                        L = (0, l.L)(() => (void 0 !== b && void 0 !== A ? b + A : A));
                    return (0, n.useCallback)(() => {
                        if (!t || !x || !d.xK.includes(x) || !v.includes(x) || e.current) return;
                        let n = { hash: y, pageId: c.F[x], entityType: T, entityId: N, entityPosX: S, entityPosY: L, objectsCount: O };
                        (void 0 !== j && ((n.filterKey = j), (n.filterValue = I), (n.filterPos = R)),
                            d.qG.includes(x) && ((n.tabId = f), (n.tabPos = E), (n.isTabSelectedByDefault = C)),
                            P && (n.skeletonId = P),
                            w && k && ((n.mainObjectType = k), (n.mainObjectId = w)));
                        let s = (0, a.F)({ params: n, logger: r, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, i.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, x, y, T, N, S, L, j, I, R, O, P, w, k, r, f, E, C]);
                };
        },
        64407: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => x });
            var n = r(25839),
                a = r(74631),
                i = r(39004),
                s = r(93588),
                l = r(61493),
                o = r(4071),
                c = r(35622),
                d = r(69084),
                u = r(36484),
                m = r(62562),
                _ = r(92231),
                g = r(84059),
                h = r(30787),
                p = r(6969),
                v = r(29809),
                y = r.n(v);
            let x = (e) => {
                let { dataSessionId: t, isOpened: r, onOpen: v, onClose: x } = e,
                    f = (0, m.N)().get(u.V4),
                    { formatMessage: E } = (0, i.A)(),
                    C = (() => {
                        let e = (0, g.useSearchParams)();
                        return (0, a.useCallback)(
                            (t) => {
                                let r = e.get(p.K.UTM_CAMPAIGN);
                                if (!r) return t;
                                let n = new URLSearchParams();
                                return (n.set(p.K.UTM_SOURCE, 'campaignid_'.concat(r)), (0, h.C)(t, n));
                            },
                            [e],
                        );
                    })(),
                    b = (0, a.useCallback)(
                        (e) => {
                            e.origin === f.afisha.host && 'close' === e.data.type && x();
                        },
                        [x, f.afisha.host],
                    );
                (0, a.useEffect)(
                    () => (
                        window.addEventListener('message', b),
                        () => {
                            window.removeEventListener('message', b);
                        }
                    ),
                    [b],
                );
                let N = (0, a.useCallback)(
                        (e) => {
                            e ? v() : x();
                        },
                        [x, v],
                    ),
                    T = (0, s.tE)(f, (0, _.u)()),
                    S = C(''.concat(f.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(T));
                return (0, n.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: r,
                    onOpenChange: N,
                    onClose: x,
                    showHeader: !1,
                    className: y().widget,
                    contentClassName: y().content,
                    overlayColor: 'full',
                    'data-test-id': l.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, n.jsx)(d.q, { children: (0, n.jsx)(o.$, { 'aria-label': E({ id: 'interface-actions.close' }), onClick: x }) }),
                        (0, n.jsx)('iframe', {
                            src: S,
                            className: y().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        64715: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => j });
            var n = r(25839),
                a = r(82298),
                i = r(88204),
                s = r(74631),
                l = r(39004),
                o = r(8487);
            r(93588);
            var c = r(4071),
                d = r(66738),
                u = r(4254),
                m = r(67379),
                _ = r(44031),
                g = r(87277),
                h = r(59450),
                p = r(84e3),
                v = r(97952),
                y = r(89192),
                x = r(53712),
                f = r(27954),
                E = r(44806),
                C = r(15270),
                b = r(23818),
                N = r(85686);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var S = r(27990),
                A = r.n(S);
            let k = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { slam: i } = (0, f.g)(),
                    { contentRef: s } = (0, y.g)(),
                    l = (0, N.Z)(x.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(A().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(C.L, { withBackwardFallback: '/', className: (0, a.$)(A().navigation, { [A().navigation_desktop]: !s }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, a.$)(A().content, { [A().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(b._V, { className: A().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            className: A().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            className: A().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                i.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: A().button,
                                        onClick: l,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(u.HL, {
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
            var w = r(68854),
                O = r.n(w);
            let j = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: i } = (0, l.A)(),
                    b = (0, s.useContext)(f.P),
                    N = null == b ? void 0 : b.experiments.checkExperiment(E.z.WebNextUnstableMusicScreen, 'on'),
                    T = i(N ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: n } = (0, v.$)(),
                        a = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !r || !n) return;
                        let i = (0, m.F)({
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
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        i && (0, g.z5)(t.evgenInstance, i);
                    }, [t, e, r, n, a]);
                })(T);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, v.$)(),
                            n = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let a = (0, m.F)({
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
                                a && (0, g.bv)(e.evgenInstance, a);
                            }, [e, t, r, n]),
                        };
                    })(),
                    A = (0, s.useCallback)(() => {
                        (S(), (window.location.href = x.Z.main.href));
                    }, [S]),
                    { contentRef: w } = (0, y.g)();
                return N
                    ? (0, n.jsx)(k, { className: t, withBackwardControl: r })
                    : (0, n.jsxs)('div', {
                          className: (0, a.$)(O().root, t),
                          children: [
                              r &&
                                  (0, n.jsx)(C.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(O().navigation, { [O().navigation_desktop]: !w }),
                                      withForwardControl: !1,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, a.$)(O().content, { [O().content_shrink]: !r }),
                                  children: [
                                      (0, n.jsx)(d.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(u.DZ, { className: (0, a.$)(O().title, O().important), variant: 'h3', size: 'xs', children: T }),
                                      (0, n.jsxs)(u.HL, {
                                          className: (0, a.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: A,
                                          className: O().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(u.HL, {
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
        66976: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 95600));
        },
        67311: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => i, si: () => l, fW: () => m, MJ: () => u, jU: () => g, Bx: () => _ });
            var n = r(22413);
            function a(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class i {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let s = (0, n.Jt)(e);
                        if (t) {
                            var r, i;
                            return null != (i = null == (r = a(s)) ? void 0 : r.value) ? i : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let i = a ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, i, r);
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
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = s('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let i = r.getItem(e) || void 0;
                        if (!t) return i;
                        let s = a(i);
                        if (!s) return null;
                        let l = null != (n = null == s ? void 0 : s.value) ? n : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return (this.remove(e), null);
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
            var o = r(58025),
                c = r(36432);
            class d extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, d.prototype));
                }
            }
            class u {
                get(e) {
                    throw new d(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new d(this.platform, this.type);
                }
                has(e) {
                    throw new d(this.platform, this.type);
                }
                remove(e) {
                    throw new d(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class m {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, i;
                        let s = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (i = null == (r = a(s)) ? void 0 : r.value) ? i : null;
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
                            a = e.get(r);
                        null != a && e.set(r, a, n);
                    });
            }
            function g(e) {
                let { name: t, group: r, value: n } = e;
                return n && 0 !== Object.keys(n).length
                    ? n.title
                        ? { [t]: { group: r, value: { ...n, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: n } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        67444: (e) => {
            e.exports = {
                root: 'ConcertsDetailsPage_root__Uyap_',
                scrollContainer: 'ConcertsDetailsPage_scrollContainer__BKTRD',
                content: 'ConcertsDetailsPage_content__WsuVk',
                header: 'ConcertsDetailsPage_header__K7UVE',
                container: 'ConcertsDetailsPage_container__swjuX',
                column: 'ConcertsDetailsPage_column__EB1kA',
                row: 'ConcertsDetailsPage_row__oP8Xu',
                shimmerTitle: 'ConcertsDetailsPage_shimmerTitle__vjWfR',
                footer: 'ConcertsDetailsPage_footer__ooBj8',
            };
        },
        68093: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { Z: () => n }),
                (function (e) {
                    ((e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified'));
                })(n || (n = {})));
        },
        68854: (e) => {
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
        69084: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var n,
                a = r(74631),
                i = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (a && (a += ' '), (a += n));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => a }));
                        let a = n;
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var a = null;
                            if ((void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
                            else n = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5531: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let a = r(4377),
                            i = r(5881),
                            s = r(810),
                            l = n(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: n, ...o } = e,
                                c = (0, i.clsx)(l.default.root, { [l.default.focusable]: r }, t);
                            return (0, s.isValidElement)(n)
                                ? (0, s.cloneElement)(n, { ...o, className: (0, i.clsx)(c, n.props.className) })
                                : (0, a.jsx)('span', { className: c, ...o, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (i[e].call(r.exports, r, r.exports, l), r.exports);
            }
            ((l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
        69274: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            let n = /[+-]\d{2}:?\d{2}/,
                a = (e) => (null == e ? void 0 : e.replace(n, ''));
        },
        69635: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => o });
            var n = r(28410),
                a = r(51751),
                i = r(44806),
                s = r(26847);
            let l = n.gK.model('Price', { value: n.gK.number, currency: n.gK.string }),
                o = n.gK
                    .model('Concert', {
                        id: n.gK.string,
                        dataSessionId: n.gK.maybe(n.gK.string),
                        datetime: n.gK.maybe(n.gK.string),
                        city: n.gK.maybe(n.gK.string),
                        place: n.gK.maybe(n.gK.string),
                        contentRating: n.gK.maybe(n.gK.string),
                        price: n.gK.maybe(l),
                        cashbackTitle: n.gK.maybe(n.gK.string),
                        cashbackValuePercent: n.gK.maybe(n.gK.number),
                        title: n.gK.maybe(n.gK.string),
                        cover: n.gK.maybe(s.$),
                        rank: n.gK.maybe(n.gK.number),
                        eventKind: n.gK.maybe(n.gK.string),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, a.M)(e);
                            return t.checkExperiment(i.z.WebNextConcertsCashback, 'on');
                        },
                        get isIdentityExperimentEnabled() {
                            let { experiments: t } = (0, a.M)(e);
                            return t.checkExperiment(i.z.WebNextConcertsIdentityEventType, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        73367: (e) => {
            e.exports = {
                root: 'ConcertCardWithImage_root__NHF59',
                cover: 'ConcertCardWithImage_cover__3V2fk',
                cashbackTitle: 'ConcertCardWithImage_cashbackTitle__lfr7z',
                cashback: 'ConcertCardWithImage_cashback__sNa2M',
                shimmerCover: 'ConcertCardWithImage_shimmerCover___X6xn',
                shimmerTitle: 'ConcertCardWithImage_shimmerTitle__YgaQa',
                shimmerInfo: 'ConcertCardWithImage_shimmerInfo__yUfJ4',
                shimmerCity: 'ConcertCardWithImage_shimmerCity__VlGY_',
                meta: 'ConcertCardWithImage_meta__mhsYf',
                button: 'ConcertCardWithImage_button__osv22',
                shimmerButton: 'ConcertCardWithImage_shimmerButton__JZEFY',
            };
        },
        77245: (e) => {
            e.exports = { root: 'CashbackPercentBadge_root__rP2Rj', icon: 'CashbackPercentBadge_icon__dq7pE', text: 'CashbackPercentBadge_text__Uol3I' };
        },
        80499: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => p, s: () => v });
            var n = r(25839),
                a = r(88204),
                i = r(84059),
                s = r(74631),
                l = r(89288),
                o = r(36432),
                c = r(94421),
                d = r(99989),
                u = r(27954),
                m = r(83382);
            (0, a.eO)(!1);
            let _ = (0, s.createContext)(null),
                g = (e) => {
                    let { children: t, store: r, storeKey: a } = e,
                        i = (0, s.useMemo)(() => ({ store: r, storeKey: a }), [r, a]);
                    return (0, n.jsx)(_.Provider, { value: i, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: a } = e;
                    return (
                        (0, i.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
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
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: i, nonce: s } = e,
                                l = (0, m.Y)(),
                                o = (0, u.g)(),
                                { store: _, patchesRef: p } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(h, { nonce: s, patchKey: r, patchesRef: p }), (0, n.jsx)(g, { store: _, storeKey: r, children: i })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, s.useContext)(_);
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
        82413: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a });
            var n = r(35005);
            let a = (e) => (0, n.h)(e.data.concert, e.data.minPrice);
        },
        82706: (e, t, r) => {
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
        82904: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => R });
            var n = r(25839),
                a = r(88204),
                i = r(8487),
                s = r(44031),
                l = r(61493),
                o = r(71035),
                c = r(49656),
                d = r(14693),
                u = r(4071),
                m = r(69084),
                _ = r(4254),
                g = r(29481),
                h = r(52512),
                p = r(85686),
                v = r(27954),
                y = r(44806),
                x = r(17226),
                f = r(25895),
                E = r(7050),
                C = r(64407),
                b = r(83418);
            let N = ' • ',
                T = (e, t) => {
                    let r = [];
                    return (e.city && r.push(e.city), e.place && r.push(e.place), r.join(t));
                };
            var S = r(26330),
                A = r.n(S);
            let k = (0, a.PA)((e) => {
                let { concert: t, cashback: r } = e;
                return (0, n.jsxs)('div', {
                    className: A().meta,
                    children: [
                        (0, n.jsx)(_.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: A().title,
                            'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, n.jsxs)(_.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: A().info,
                            children: [
                                (0, n.jsx)(_.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: A().location,
                                    'aria-label': T(t, ' '),
                                    'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                                    children: T(t, N),
                                }),
                                (0, n.jsx)(_.HL, { 'aria-hidden': !0, className: A().separator, variant: 'span', type: 'controls', weight: 'medium', children: N }),
                                (0, n.jsx)(_.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: A().rating,
                                    'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        r,
                    ],
                });
            });
            var w = r(2488),
                O = r(11148),
                j = r(73367),
                I = r.n(j);
            let R = (0, a.PA)((e) => {
                var t, r, a;
                let { concert: N, withMask: T = !0, withPriceButton: S, withInlineMeta: A = !1 } = e,
                    { state: j, toggleTrue: R, toggleFalse: P } = (0, d.e)(!1),
                    { ref: L, intersectionPropertyId: M } = (0, h.n)(),
                    { experiments: D } = (0, v.g)(),
                    K = D.checkExperiment(y.z.WebNextConcertPage, 'on'),
                    W = (0, g.N)(),
                    H = (0, E.Y)(),
                    { href: G } = (0, f.u)('/concert/:concertId', { params: { concertId: N.id } }),
                    U = (0, p.Z)(G),
                    F = H(N),
                    Y = (0, o.c)((e) => {
                        (W({ to: s.AppScreen.ConcertPurchaseScreen }), R(), null == e || e.stopPropagation());
                    }),
                    z = (0, o.c)((e) => {
                        if (!K) return void Y(e);
                        (W({ to: s.AppScreen.ConcertScreen }), U(e));
                    }),
                    B = (0, o.c)((e) => {
                        (e.code === x.v.SPACE || e.code === x.v.ENTER) && (e.preventDefault(), z());
                    }),
                    V = (0, o.c)((e) => {
                        K && (Y(e), e.preventDefault());
                    }),
                    $ = (0, c.L)(() => {
                        let e = N.isIdentityExperimentEnabled && N.cashbackValuePercent,
                            t = !N.isIdentityExperimentEnabled && N.isCashbackExperimentEnabled && N.cashbackTitle;
                        if (e || t)
                            return (0, n.jsx)(b.m, {
                                className: I().cashback,
                                titleClassName: I().cashbackTitle,
                                title: N.cashbackTitle,
                                valuePercent: N.cashbackValuePercent,
                            });
                    }),
                    X = (0, n.jsx)(w.M, { concert: N, withCashback: !1, withInlineMeta: A, titleSize: 'l' }),
                    Z = (0, n.jsx)(k, { concert: N, cashback: $ });
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)('div', {
                            className: I().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: z,
                            onKeyDown: B,
                            ref: L,
                            'data-intersection-property-id': M,
                            'data-test-id': l.OA.concert.CONCERT_CARD,
                            children: [
                                (0, n.jsx)(m.q, { children: (0, n.jsx)(_.HL, { variant: 'div', children: (0, n.jsx)(i.A, { id: 'entity-names.concert' }) }) }),
                                (0, n.jsx)('div', {
                                    className: I().cover,
                                    children: (0, n.jsx)(O.W, {
                                        datetime: N.datetime,
                                        coverColor: null == (t = N.cover) ? void 0 : t.color,
                                        uri: null == (r = N.cover) ? void 0 : r.uri,
                                        withMask: T,
                                        cashbackPercent: N.isIdentityExperimentEnabled ? N.cashbackValuePercent : void 0,
                                    }),
                                }),
                                N.isIdentityExperimentEnabled ? X : Z,
                                !!(null == (a = N.price) ? void 0 : a.value) && (0, n.jsx)(m.q, { children: (0, n.jsx)(_.HL, { variant: 'div', children: F }) }),
                                S &&
                                    (0, n.jsx)(u.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: I().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: V,
                                        'data-test-id': l.OA.concert.CONCERT_CARD_BUTTON,
                                        children: F,
                                    }),
                            ],
                        }),
                        (0, n.jsx)(C.h, { dataSessionId: N.dataSessionId, isOpened: j, onOpen: R, onClose: P }),
                    ],
                });
            });
        },
        83382: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => l });
            var n = r(67311),
                a = r(36484),
                i = r(62562),
                s = r(84e3);
            let l = () => {
                let e = (0, i.N)(),
                    t = e.get(a.oo),
                    r = e.get(a.QG),
                    l = e.get(a.uM),
                    o = e.get(a.ff),
                    c = e.get(a.V4),
                    d = e.get(a.P0),
                    u = (() => {
                        let e = (0, i.N)(),
                            t = e.get(a.$I),
                            r = e.get(a.EN),
                            n = e.get(a.N1),
                            s = e.get(a._1),
                            l = e.get(a.V3),
                            o = e.get(a.Lb),
                            c = e.get(a.wK),
                            d = e.get(a.tz),
                            u = e.get(a.$8),
                            m = e.get(a.Oo),
                            _ = e.get(a.X4),
                            g = e.get(a.O9),
                            h = e.get(a.E),
                            p = e.get(a.wH),
                            v = e.get(a.ok),
                            y = e.get(a.X8),
                            x = e.get(a.yq),
                            f = e.get(a.NN),
                            E = e.get(a.qN),
                            C = e.get(a.ro),
                            b = e.get(a.nM),
                            N = e.get(a.Ut),
                            T = e.get(a.K1),
                            S = e.get(a.eu),
                            A = e.get(a.SD),
                            k = e.get(a.aE),
                            w = e.get(a.ki),
                            O = e.get(a.c9),
                            j = e.get(a.en),
                            I = e.get(a.jQ),
                            R = e.get(a.cZ),
                            P = e.get(a.Zl),
                            L = e.get(a.CN),
                            M = e.get(a.P1),
                            D = e.get(a.zj),
                            K = e.get(a.re),
                            W = e.get(a.JM),
                            H = e.get(a.Lk),
                            G = e.get(a.$$),
                            U = e.get(a.sv),
                            F = e.get(a.gd),
                            Y = e.get(a.Ez),
                            z = e.get(a.u2),
                            B = e.get(a.TD),
                            V = e.get(a.dh),
                            $ = e.get(a.LC),
                            X = e.get(a.PL),
                            Z = e.get(a.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: r,
                            disclaimersResource: n,
                            usersResource: s,
                            landingResource: l,
                            landing3Resource: o,
                            landingBlocksResource: c,
                            albumResource: d,
                            libraryResource: u,
                            tracksResource: m,
                            topResource: _,
                            artistsResource: g,
                            slidesResource: h,
                            redAlertResource: p,
                            rotorResource: v,
                            waveResource: y,
                            searchResource: x,
                            searchPlaylistResource: f,
                            playlistResource: E,
                            playlistsResource: C,
                            pinResource: b,
                            metatagsResource: N,
                            tagResource: T,
                            feedResource: S,
                            wizard3Resource: A,
                            pinsResource: k,
                            musicHistoryResource: w,
                            dynamicPagesResource: O,
                            chartResource: j,
                            clipsResource: I,
                            lyricViewsResource: R,
                            nonMusicResource: P,
                            donationResource: L,
                            loaderResource: M,
                            lumenResource: D,
                            prefixlessResource: K,
                            streamsResource: W,
                            filtersResource: H,
                            ugcResource: G,
                            collectionResource: U,
                            adsResource: F,
                            personalResource: Y,
                            familyResource: z,
                            childrenLandingResource: B,
                            promoResource: V,
                            telemetryResource: $,
                            labelsResource: X,
                            concertsResource: Z,
                            wordsResource: e.get(a.dA),
                            wheelResource: e.get(a.$Y),
                        };
                    })(),
                    m = (0, s.U)(),
                    _ = (0, i.N)().get(a.TK),
                    g = e.get(a.ni),
                    h = new n.si(),
                    p = new n.fW();
                return {
                    ...u,
                    acqOffers: l,
                    disclaimerDictionary: o,
                    logger: m,
                    modelActionsLogger: _,
                    localStorage: h,
                    sessionStorage: p,
                    containerStorage: t,
                    authorization: r,
                    config: c,
                    clientSafeConfig: d,
                    landingSdk: g,
                };
            };
        },
        83418: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => d });
            var n = r(25839),
                a = r(82298),
                i = r(61493),
                s = r(66738),
                l = r(4254),
                o = r(11618),
                c = r.n(o);
            let d = (e) => {
                let { title: t, className: r, titleClassName: o, valuePercent: d } = e;
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(c().root, r),
                    children: [
                        (0, n.jsx)(s.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, n.jsx)(l.HL, {
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
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        94421: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => a, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
        95600: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => Y }));
            var n = r(25839),
                a = r(74631),
                i = r(84059),
                s = r(80499),
                l = r(82706),
                o = r(28410),
                c = r(82413),
                d = r(69635),
                u = r(51751),
                m = r(36159),
                _ = r(19835),
                g = r(95897);
            let h = o.gK
                    .compose(o.gK.model('ConcertsDetailsPage', { concerts: o.gK.maybeNull(o.gK.array(d.a)), title: o.gK.maybeNull(o.gK.string) }), _.X, g.p)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, o.L3)(function* (t) {
                            let { type: r, id: n } = t,
                                { concertsResource: a, modelActionsLogger: i } = (0, o._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = m.G.PENDING;
                                    let { concerts: t } = (0, u.M)(e),
                                        i = t.concertsLocationForRequest,
                                        { items: s, title: l } = yield a.getConcertsDetails({ type: r, id: n, locations: i });
                                    ((e.concerts = (0, o.wg)(s.map((e) => (0, c.H)(e)))), (e.title = null != l ? l : null), (e.loadingState = m.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = m.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = m.G.IDLE), (e.title = null), e.destroyItems([e.concerts]));
                        },
                    })),
                p = { loadingState: m.G.IDLE },
                { pageStoreProvider: v } = (0, s.W)({ createStore: (e) => h.create(p, e), patchKey: l.n.CONCERTS_DETAILS });
            var y = r(88204),
                x = r(39004),
                f = r(71035),
                E = r(68934),
                C = r(13833),
                b = r(4254),
                N = r(64715),
                T = r(1407),
                S = r(40489),
                A = r(32190),
                k = r(82904),
                w = r(28924),
                O = r(61777),
                j = r(21784),
                I = r(89192),
                R = r(27954),
                P = r(44806),
                L = r(99401),
                M = r(26076),
                D = r(10603),
                K = r(67444),
                W = r.n(K);
            let H = (0, y.PA)((e) => {
                let { type: t, id: r } = e,
                    o = (0, a.useId)(),
                    c = (0, s.s)(l.n.CONCERTS_DETAILS),
                    { experiments: d } = (0, R.g)(),
                    { formatMessage: u } = (0, x.A)(),
                    { contentScrollRef: m, setContentScrollRef: _ } = (0, I.g)(),
                    g = (0, j.W)(),
                    [h, p] = (0, E.d)(),
                    v = (0, O.f)(),
                    y = (0, a.useRef)(!1),
                    K = d.checkExperiment(P.z.WebNextConcertsIdentityEventType, 'on'),
                    H = (0, f.c)(() => {
                        var e;
                        return !c.isShimmerVisible && (null == (e = c.concerts) ? void 0 : e.length) ? c.concerts.length : 50;
                    }),
                    {
                        virtualizer: G,
                        rowResizeObserver: U,
                        columnCount: F,
                        indices: Y,
                    } = (0, S.L)({
                        count: H(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: h,
                    }),
                    z = { '--feed-concerts-height': ''.concat(G.getTotalSize(), 'px'), '--feed-concerts-column-count': F },
                    B = (0, a.useCallback)(
                        (e) => {
                            var t;
                            let r = null == (t = c.concerts) ? void 0 : t[e];
                            return !r || c.isShimmerVisible ? (0, n.jsx)(w.L, { isActive: c.isShimmerActive, withMeta: !0 }) : (0, n.jsx)(k.Q, { concert: r });
                        },
                        [c.concerts, c.isShimmerActive, c.isShimmerVisible],
                    );
                if (
                    ((0, a.useEffect)(
                        () => () => {
                            c.reset();
                        },
                        [c],
                    ),
                    (0, a.useEffect)(() => {
                        c.isResolved && !y.current && (v(), (y.current = !0));
                    }, [c.isResolved, v]),
                    c.isNeededToLoad && (0, a.use)(c.getData({ type: t, id: r })),
                    d.checkExperiment(P.z.WebNextConcertsDetailsPage, 'on') || (0, i.notFound)(),
                    c.isRejected)
                )
                    return (0, n.jsx)(N.SomethingWentWrong, {});
                let V = K && c.title ? c.title : u({ id: 'concerts.details-title' });
                return (0, n.jsx)(T.h, {
                    scrollElement: m,
                    outerTitle: V,
                    children: (0, n.jsxs)('div', {
                        className: W().root,
                        children: [
                            (0, n.jsx)(D.Y, {
                                variant: D.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: g.canBack,
                                children: (0, n.jsx)(b.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: V }),
                            }),
                            (0, n.jsxs)(C.N, {
                                ref: _,
                                className: W().scrollContainer,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: W().content,
                                        children: (0, n.jsx)('div', {
                                            'aria-labelledby': o,
                                            ref: p,
                                            style: z,
                                            className: W().container,
                                            children: G.getVirtualItems().map((e) =>
                                                (0, n.jsx)(
                                                    A.U,
                                                    {
                                                        className: W().row,
                                                        columnClassName: W().column,
                                                        virtualItem: e,
                                                        resizeObserver: U,
                                                        indices: Y,
                                                        renderItemByIndex: B,
                                                        scrollMargin: G.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, n.jsx)(M.A, { children: (0, n.jsx)(L.w, { className: W().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var G = r(23976);
            let U = (e) => (0, n.jsx)(w.L, { isActive: !0, withMeta: !0 }, e),
                F = () => {
                    let e = (0, j.W)(),
                        { contentScrollRef: t, setContentScrollRef: r } = (0, I.g)(),
                        [a, i] = (0, E.d)(),
                        { formatMessage: s } = (0, x.A)(),
                        l = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.concert' }) }),
                        {
                            virtualizer: o,
                            rowResizeObserver: c,
                            columnCount: d,
                            indices: u,
                        } = (0, S.L)({
                            count: 50,
                            rowGap: 32,
                            columnGap: 16,
                            getEstimateRowSize: () => 371,
                            minColumnCount: 2,
                            minColumnWidth: 170,
                            maxColumnWidth: 227,
                            containerRef: a,
                        }),
                        m = { '--feed-concerts-height': ''.concat(o.getTotalSize(), 'px'), '--feed-concerts-column-count': d };
                    return (0, n.jsx)(T.h, {
                        scrollElement: t,
                        children: (0, n.jsxs)('div', {
                            className: W().root,
                            children: [
                                (0, n.jsx)(D.Y, {
                                    variant: D.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, n.jsx)(G.W, { className: W().shimmerTitle, radius: 'xxxl' }),
                                }),
                                (0, n.jsx)(C.N, {
                                    ref: r,
                                    className: W().scrollContainer,
                                    children: (0, n.jsx)('div', {
                                        className: W().content,
                                        children: (0, n.jsx)('div', {
                                            'aria-label': l,
                                            ref: i,
                                            style: m,
                                            className: W().container,
                                            children: o
                                                .getVirtualItems()
                                                .map((e) =>
                                                    (0, n.jsx)(
                                                        A.U,
                                                        {
                                                            className: W().row,
                                                            columnClassName: W().column,
                                                            virtualItem: e,
                                                            resizeObserver: c,
                                                            indices: u,
                                                            renderItemByIndex: U,
                                                            scrollMargin: o.options.scrollMargin,
                                                        },
                                                        e.key,
                                                    ),
                                                ),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                Y = () => {
                    let e = (0, i.useSearchParams)(),
                        t = e.get('type'),
                        r = e.get('id');
                    return (
                        (t && r) || (0, i.notFound)(),
                        (0, n.jsx)(v, { children: (0, n.jsx)(a.Suspense, { fallback: (0, n.jsx)(F, {}), children: (0, n.jsx)(H, { type: t, id: r }) }) })
                    );
                };
        },
        95897: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => a });
            var n = r(28410);
            let a = n.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, n.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, n.zr)(e);
                            });
                        }));
                },
            }));
        },
        98288: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => n });
            let n = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => T });
            var n = r(25839),
                a = r(82298),
                i = r(88204),
                s = r(39004),
                l = r(93588),
                o = r(43354),
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
            let d = (e, t, r) => {
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
                u = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var m = r(10959),
                _ = r(89514);
            let g = (e) => e(new Date(), (0, _.m)());
            var h = r(96433),
                p = r(27954),
                v = r(400),
                y = r.n(v),
                x = r(61493),
                f = r(4254),
                E = r(97522);
            let C = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, a.$)(y().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(E.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, a.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(E.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: y().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: a } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, n.jsx)(E.N, { target: '_blank', href: a, className: y().link, 'data-test-id': x.S7.FOOTER_LINK, children: r }),
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
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, a.$)(y().root, y().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, n.jsx)(b, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(C, { data: r.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, p.g)(),
                    { formatDate: a, formatMessage: i } = (0, s.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: i, language: l, tld: r.tld, year: g(a) });
                return (0, n.jsx)(C, { className: t, data: o });
            });
            let T = (0, i.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: i, location: _, user: v } = (0, p.g)(),
                    { formatDate: x, formatMessage: f } = (0, s.A)(),
                    { isEnabled: E } = null != (t = (0, o.P)()) ? t : {},
                    { language: C } = (0, h.h)(),
                    b = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: a, tld: i, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: a, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, a) },
                                    _ = [s, o, u];
                                return (r && 'ru' === i && _.push(l), _.push(m), _);
                            })({ formatMessage: r, isWebApplication: n, language: a, tld: i, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: r, language: a, tld: i, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: g(x),
                    });
                return (0, n.jsx)(N, { className: (0, a.$)({ [y().root_withOffsetForDeeplink]: E }, r), data: b });
            });
        },
        99989: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            var n = r(28410),
                a = r(74631);
            let i = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: i } = e,
                    s = (0, a.useRef)([]),
                    [l] = (0, a.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, a.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(l, e);
                        };
                        return (e(), window.addEventListener(i, e), () => window.removeEventListener(i, e));
                    }, [r, i, l]),
                    { store: l, patchesRef: s }
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8803, 3112, 9122, 543, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1817, 4361, 3367, 2038, 4163, 3246, 7848, 3482, 4345, 8836, 4434,
                5622, 4475, 5056, 7358,
            ],
            () => e((e.s = 66976)),
        ),
            (_N_E = e.O()));
    },
]);
