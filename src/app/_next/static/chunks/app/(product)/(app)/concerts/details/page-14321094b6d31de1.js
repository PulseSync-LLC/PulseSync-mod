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
        1645: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => r });
            let r = (e) => {
                if (e) return { value: e.value, currency: e.currency };
            };
        },
        2488: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => m });
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
            let m = (0, a.PA)((e) => {
                let { id: t, concert: n, withCashback: a = !0, withInlineMeta: u = !1, titleSize: m = 'm' } = e,
                    g = [],
                    p = (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == n ? void 0 : n.eventKind) &&
                    g.push(
                        (0, r.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': l.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, r.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: n.eventKind } }),
                        }),
                    ),
                    (null == n ? void 0 : n.contentRating) &&
                        g.push(
                            p,
                            (0, r.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: n.contentRating,
                            }),
                        ));
                let h = (0, o.L)(() =>
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
                    u && h && g.push(p, h),
                    (0, r.jsxs)('div', {
                        className: _().root,
                        id: t,
                        children: [
                            (0, r.jsx)(c.HL, {
                                variant: 'div',
                                size: m,
                                weight: 'medium',
                                className: _().city,
                                lineClamp: 1,
                                'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                                children: null == n ? void 0 : n.title,
                            }),
                            (0, r.jsx)('div', { className: _().info, children: g.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !u && h,
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
                let { datetime: t, className: n, monthClassName: c, dayClassName: u, weekdayClassName: _, withWeekday: m = !0, ...g } = e,
                    { formatDate: p } = (0, i.A)(),
                    h = ((e) => {
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
                    ...g,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, a.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: h,
                        }),
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            className: (0, a.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: p(t, { day: 'numeric' }),
                        }),
                        m &&
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
            n.d(t, { D: () => E });
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
                m = n(37314),
                g = n(25488),
                p = n(97952),
                h = n(10764),
                v = n(72594);
            let E = () => {
                let e = (0, o.U)(),
                    t = (0, s.st)(),
                    { hash: n } = (0, s.gf)(),
                    { pageId: E, displayReasonId: S } = (0, p.$)(),
                    { tabId: C, tabPos: f, isTabSelectedByDefault: y } = (0, v.R)(),
                    { offsetBlockPosY: I } = (0, _.u)(),
                    { blockType: A, blockId: N, blockPosX: T, blockPosY: x, mainObjectId: b, mainObjectType: O, displayReasonId: L } = (0, u.N)(),
                    { filterKey: R, filterValue: k, filterPos: P } = (0, m.G)(),
                    { objectType: w, objectsCount: j, objectId: M, objectPosX: D, objectPosY: K } = (0, g.J)(),
                    { skeleton: B } = (0, h.b)(),
                    U = null != L ? L : S,
                    W = (0, l.L)(() => (void 0 !== I && void 0 !== x ? I + x : x));
                return (0, r.useCallback)(
                    (r, s) => {
                        if (!t || !E || !d.xK.includes(E) || !d.fD.includes(E)) return;
                        let l = c.F[E];
                        if (!l) return;
                        let o = {
                            hash: n,
                            pageId: l,
                            entityType: A,
                            entityId: N,
                            entityPosX: T,
                            entityPosY: W,
                            objectsCount: j,
                            viewUuid: s,
                            objectType: w,
                            objectId: M,
                            objectPosX: D,
                            objectPosY: K,
                        };
                        (void 0 !== R && ((o.filterKey = R), (o.filterValue = k), (o.filterPos = P)),
                            d.qG.includes(E) && ((o.tabId = C), (o.tabPos = f), (o.isTabSelectedByDefault = y)),
                            B && (o.skeletonId = B),
                            'string' == typeof b && 'string' == typeof O && ((o.mainObjectType = O), (o.mainObjectId = b)),
                            U && (o.displayReasonId = U));
                        let u = (0, a.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (r ? (0, i.Pf)(t.evgenInstance, u) : (0, i.nv)(t.evgenInstance, u));
                    },
                    [t, U, N, T, W, A, R, P, k, n, y, e, b, O, M, D, K, w, j, E, B, C, f],
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
        7424: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 95600));
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
                                        icon: m,
                                        className: g,
                                        children: p,
                                        textClassName: h = '',
                                        containerClassName: v,
                                        ...E
                                    } = e,
                                    S = (0, i.useId)(),
                                    C = !i.Children.count(p),
                                    f = 'left' === u,
                                    y = null;
                                if (void 0 !== m) {
                                    var I;
                                    y = (0, i.cloneElement)(m, {
                                        className: (0, s.clsx)(
                                            l.default.icon,
                                            { [l.default['icon_position_'.concat(u)]]: !C && u },
                                            null == (I = m.props) ? void 0 : I.className,
                                        ),
                                        key: S,
                                    });
                                }
                                let A = (0, i.useMemo)(
                                    () =>
                                        m
                                            ? (0, a.jsxs)('div', {
                                                  className: (0, s.clsx)(l.default.iconContainer, v),
                                                  children: [f && y, !C && (0, a.jsx)('span', { className: h, children: p }), !f && y],
                                              })
                                            : p,
                                    [p, v, m, f, C, y, h],
                                );
                                return (0, i.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: r,
                                        rel: '_blank' === r && void 0 === o ? 'noopener noreferrer' : o,
                                        href: c,
                                        className: (0, s.clsx)(l.default.root, { [l.default.block]: n, [l.default.flexIcon]: m && _, [l.default.iconOnly]: m && C }, g),
                                        ...E,
                                        ...t.props,
                                    },
                                    A,
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
        11148: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => T });
            var r,
                a,
                i = n(25839),
                s = n(82298),
                l = n(88204),
                o = n(74631),
                c = n(61493),
                d = n(49656),
                u = n(23818),
                _ = n(27954),
                m = n(44806),
                g = n(89288);
            let p = (e) => (0, g.a6)(e.replace('%%', '960x690_noncrop'));
            var h = n(8487),
                v = n(4254);
            function E() {
                return (E = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let S = function (e) {
                return o.createElement(
                    'svg',
                    E({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    r ||
                        (r = o.createElement(
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
            var C = n(77245),
                f = n.n(C);
            let y = (e) => {
                let { percent: t, className: n } = e;
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(f().root, n),
                    'data-test-id': c.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, i.jsx)(S, { 'aria-hidden': !0, className: f().icon }),
                        (0, i.jsx)(v.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: f().text,
                            children: (0, i.jsx)(h.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var I = n(3656),
                A = n(15915),
                N = n.n(A);
            let T = (0, l.PA)((e) => {
                let { uri: t, withMask: n, datetime: r, coverColor: a, cashbackPercent: l } = e,
                    { experiments: h } = (0, _.g)(),
                    [v, E] = (0, o.useState)(!1),
                    S = h.checkExperiment(m.z.NewConcertsTicketRedesign, 'on') && n,
                    C = h.checkExperiment(m.z.WebNextConcertsIdentityEventType, 'on'),
                    f = (0, o.useCallback)(() => {
                        E(!0);
                    }, []),
                    A = (0, d.L)(() => {
                        if (a)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: n, l: r } = (0, g.g8)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(n, '%, ')
                                        .concat(r <= 55 ? r + 20 : r - 20, '%)');
                                })(a),
                            };
                    }),
                    T = (0, d.L)(() =>
                        r
                            ? (0, i.jsxs)('div', {
                                  className: (0, s.$)(N().date, { [N().date_withEventType]: C }),
                                  children: [
                                      (0, i.jsx)(u._V, {
                                          className: N().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: f,
                                      }),
                                      v &&
                                          (0, i.jsx)(I.d, {
                                              className: N().root_withEventType,
                                              dayClassName: N().day_withEventType,
                                              weekdayClassName: N().weekday_withEventType,
                                              monthClassName: N().month_withEventType,
                                              datetime: r,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    x = (0, d.L)(() =>
                        r
                            ? (0, i.jsx)(I.d, {
                                  dayClassName: N().day,
                                  weekdayClassName: (0, s.$)(N().weekday, N().important),
                                  monthClassName: N().month,
                                  className: N().date,
                                  datetime: r,
                              })
                            : null,
                    );
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(N().root, { [N().root_withMask]: S }),
                    style: A,
                    children: [
                        (0, i.jsx)(u._V, {
                            className: N().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: p,
                            'aria-hidden': !0,
                            'data-test-id': c.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        r && (C ? T : x),
                        C && l && (0, i.jsx)(y, { className: N().cashback, percent: l }),
                    ],
                });
            });
        },
        11618: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
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
        17226: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => r });
            var r = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        19835: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => i });
            var r = n(28410),
                a = n(36159);
            let i = r.gK.model('LoadingState', { loadingState: r.gK.enumeration(Object.values(a.G)) }).views((e) => ({
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
        26847: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => a });
            var r = n(28410);
            let a = r.gK.model('Cover', { uri: r.gK.maybe(r.gK.string), color: r.gK.maybe(r.gK.string), videoUrl: r.gK.maybe(r.gK.string) });
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
        28924: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => l });
            var r = n(25839),
                a = n(23976),
                i = n(73367),
                s = n.n(i);
            let l = (e) => {
                let { isActive: t, withMeta: n, withPriceButton: i } = e;
                return (0, r.jsxs)('div', {
                    className: s().root,
                    children: [
                        (0, r.jsx)(a.W, { radius: 'm', className: s().shimmerCover, isActive: t }),
                        (0, r.jsxs)('div', {
                            className: s().meta,
                            children: [
                                (0, r.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerTitle }),
                                n &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerInfo }),
                                            (0, r.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerCity }),
                                        ],
                                    }),
                            ],
                        }),
                        i && (0, r.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerButton }),
                    ],
                });
            };
        },
        29481: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => C });
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
                m = n(26742),
                g = n(25195),
                p = n(37314),
                h = n(25488),
                v = n(97952),
                E = n(10764),
                S = n(72594);
            let C = () => {
                let e = (0, l.st)(),
                    t = (0, c.U)(),
                    { hash: n } = (0, l.gf)(),
                    { pageId: C, displayReasonId: f, pagePlacement: y, pageStyle: I } = (0, v.$)(),
                    { tabId: A, tabPos: N, isTabSelectedByDefault: T } = (0, S.R)(),
                    { offsetBlockPosY: x } = (0, g.u)(),
                    { blockId: b, blockType: O, blockPosX: L, blockPosY: R, mainObjectId: k, mainObjectType: P, displayReasonId: w } = (0, m.N)(),
                    { filterKey: j, filterValue: M, filterPos: D } = (0, p.G)(),
                    { objectId: K, objectPosX: B, objectPosY: U, objectType: W, objectsCount: G } = (0, h.J)(),
                    { skeleton: H } = (0, E.b)(),
                    F = null != w ? w : f,
                    Q = (0, o.L)(() => (void 0 !== x && void 0 !== R ? x + R : R));
                return (0, r.useCallback)(
                    (r) => {
                        let { to: l, objectId: o, objectType: c, deepLink: m, objectPosY: g } = r;
                        if (!e || !C || !_.xK.includes(C) || !_.fD.includes(C)) return;
                        let p = d.F[C];
                        if (!p) return;
                        let h = {
                            hash: n,
                            pageId: p,
                            pagePlacement: null != y ? y : i.PagePlacements.Fullscreen,
                            pageStyle: null != I ? I : i.PageStyles.Fullscreen,
                            entityType: O,
                            entityId: b,
                            entityPosX: L,
                            entityPosY: Q,
                            objectId: null != o ? o : K,
                            objectType: null != c ? c : W,
                            objectPosX: B,
                            objectPosY: null != g ? g : U,
                            objectsCount: G,
                            from: u.W[C],
                            to: l,
                        };
                        (void 0 !== j && ((h.filterKey = j), (h.filterValue = M), (h.filterPos = D)),
                            _.qG.includes(C) && ((h.tabId = A), (h.tabPos = N), (h.isTabSelectedByDefault = T)),
                            H && (h.skeletonId = H),
                            m && (h.deepLink = m),
                            k && P && ((h.mainObjectType = P), (h.mainObjectId = k)),
                            F && (h.displayReasonId = F));
                        let v = (0, a.F)({ params: h, logger: t, context: 'useSendEventOnBlockNavigated' });
                        v && (0, s.QS)(e.evgenInstance, v);
                    },
                    [K, W, e, C, n, y, I, O, b, L, Q, j, M, D, B, U, G, H, k, P, F, t, A, N, T],
                );
            };
        },
        29809: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
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
        32190: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => c });
            var r = n(25839),
                a = n(82298),
                i = n(88204),
                s = n(74631),
                l = n(32942),
                o = n.n(l);
            let c = (0, i.PA)((e) => {
                let { indices: t, virtualItem: n, renderItemByIndex: i, columnClassName: l, className: c, resizeObserver: d, scrollMargin: u } = e,
                    _ = (0, s.useRef)(null),
                    m = t[n.index],
                    g = { '--virtual-grid-row-vertical-offset': ''.concat(n.start - u, 'px') };
                return (
                    (0, s.useEffect)(() => {
                        let e = _.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, r.jsx)('div', {
                        'data-index': n.index,
                        ref: _,
                        style: g,
                        className: (0, a.$)(o().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, r.jsx)('div', { className: l, children: i(e) }, ''.concat(n.key, '_').concat(e))),
                    })
                );
            });
        },
        32942: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        35005: (e, t, n) => {
            'use strict';
            n.d(t, { h: () => l });
            var r = n(28410),
                a = n(68093),
                i = n(69274),
                s = n(1645);
            let l = (e, t) => {
                var n, l, o, c;
                let { uri: d, color: u } = e.cover || {};
                return (0, r.wg)({
                    id: e.id,
                    title: e.concertTitle,
                    city: e.city,
                    place: e.place,
                    datetime: e.datetime && (0, i.A)(e.datetime),
                    contentRating: e.contentRating,
                    dataSessionId: e.dataSessionId,
                    cover: { uri: d, color: u },
                    rank: e.rank,
                    cashbackTitle: null == (n = e.cashback) ? void 0 : n.title,
                    cashbackValuePercent: null == (l = e.cashback) ? void 0 : l.valuePercent,
                    price: (0, s.J)(t),
                    eventKind: null != (c = null == (o = e.eventInfo) ? void 0 : o.type) ? c : a.Z.UNSPECIFIED,
                });
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
        39752: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => r });
            let r = (0, n(74631).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        40489: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => c });
            var r = n(26508),
                a = n(49656),
                i = n(28631),
                s = n(74631);
            let l = (e) => {
                let { minColumnWidth: t, maxColumnWidth: n, containerWidth: r, totalCount: a, columnGap: i, minColumnCount: s, maxColumnCount: l } = e,
                    o = Math.max(1, Math.floor((r + i) / (t + i))),
                    c = Math.max(s, Math.floor((r + i) / ((n + t) * 0.5 + i)));
                for (let e = s; e <= o; e++) {
                    let a = (r - (e - 1) * i) / e;
                    if (a >= t && a <= n) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = l ? Math.min(c, l) : c)), columnCount: c };
            };
            var o = n(52312);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: n,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: _,
                        minColumnCount: m,
                        maxColumnCount: g,
                        containerRef: p,
                    } = e,
                    { rowCount: h, columnCount: v } = ((e) => {
                        let { containerRef: t, minColumnCount: n, maxColumnWidth: r, minColumnWidth: a, totalCount: o, columnGap: c, maxColumnCount: d } = e,
                            [u, _] = (0, s.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, s.useRef)(null),
                            g = (0, s.useMemo)(
                                () =>
                                    (0, i.A)(
                                        (e) => {
                                            _(
                                                l({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: r,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: o,
                                                    columnGap: c,
                                                    minColumnCount: n,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, r, n, a, o],
                            );
                        return (
                            (0, s.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(g);
                                    })),
                                    t &&
                                        (_(
                                            l({
                                                minColumnWidth: a,
                                                maxColumnWidth: r,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: o,
                                                columnGap: c,
                                                minColumnCount: n,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, g, d, r, n, a, o],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: _, minColumnWidth: u, maxColumnCount: g, containerRef: p }),
                    { virtualizer: E, resizeObserver: S } = (0, o.r)({ count: h, getEstimateSize: n, gap: c, containerRef: p }),
                    C = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        v,
                    ),
                    f = (0, a.L)(() => {
                        var e, t;
                        if (!E.range) return null;
                        let n = null == (e = C[E.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = C[E.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== n && void 0 !== r ? { startIndex: n, endIndex: r } : null;
                    });
                return { virtualizer: E, rowResizeObserver: S, indices: C, columnCount: v, visibleRange: f };
            };
        },
        43354: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => a, P: () => i });
            var r = n(74631);
            let a = (0, r.createContext)(null),
                i = () => (0, r.useContext)(a);
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
        51751: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => a });
            var r = n(28410);
            let a = (e) => {
                let t = (0, r.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: n } = (0, r._$)(e);
                return n || t;
            };
        },
        52312: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => c });
            var r = n(84361),
                a = n(74631),
                i = n(71035),
                s = n(89192),
                l = n(27954);
            let o = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: n, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, l.g)(),
                        { contentScrollRef: m } = (0, s.g)(),
                        g = (0, a.useRef)(new Map()),
                        p = (0, a.useRef)(void 0),
                        h = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = g.current.get(String(e));
                                return null != t ? t : n(e);
                            },
                            overscan: u,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, n) => {
                                if (!t) return 0;
                                let r = t.getBoundingClientRect().top;
                                return e && 1 ? r + window.scrollY : !e && n ? r + n.scrollTop : 0;
                            })(_, d, m),
                        },
                        v = (0, r.XW)(h),
                        E = (0, r.Te)({ ...h, getScrollElement: () => m, initialOffset: null == m ? void 0 : m.scrollTop }),
                        S = _ ? v : E,
                        C = (0, i.c)(() => {
                            S.measure();
                        });
                    return (
                        (0, a.useEffect)(() => {
                            p.current ||
                                (p.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let n = e.target.getAttribute('data-index');
                                        if (e.target && n) {
                                            let r = e.contentRect.height;
                                            r && r !== g.current.get(n) && (g.current.set(n, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && C());
                                }));
                        }, [C]),
                        { virtualizer: S, resizeObserver: p.current }
                    );
                };
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
            n.d(t, { vZ: () => h, st: () => i, gf: () => l });
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
            var m = n(58025);
            class g {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, m._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (r, a) => {
                                let i = { ...a, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(r, i);
                            },
                        }));
                }
            }
            let p = null,
                h = (e) => {
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
                            return (p = new g(
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
        61777: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => E });
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
                m = n(37314),
                g = n(97952),
                p = n(10764),
                h = n(72594);
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
                E = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, s.st)(),
                        n = (0, o.U)(),
                        { hash: E } = (0, s.gf)(),
                        { pageId: S } = (0, g.$)(),
                        { tabId: C, tabPos: f, isTabSelectedByDefault: y } = (0, h.R)(),
                        { offsetBlockPosY: I } = (0, _.u)(),
                        { blockId: A, blockType: N, blockPosX: T, blockPosY: x, mainObjectType: b, mainObjectId: O, objectsCount: L } = (0, u.N)(),
                        { filterKey: R, filterValue: k, filterPos: P } = (0, m.G)(),
                        { skeleton: w } = (0, p.b)(),
                        j = (0, l.L)(() => (void 0 !== I && void 0 !== x ? I + x : x));
                    return (0, r.useCallback)(() => {
                        if (!t || !S || !d.xK.includes(S) || !v.includes(S) || e.current) return;
                        let r = { hash: E, pageId: c.F[S], entityType: N, entityId: A, entityPosX: T, entityPosY: j, objectsCount: L };
                        (void 0 !== R && ((r.filterKey = R), (r.filterValue = k), (r.filterPos = P)),
                            d.qG.includes(S) && ((r.tabId = C), (r.tabPos = f), (r.isTabSelectedByDefault = y)),
                            w && (r.skeletonId = w),
                            O && b && ((r.mainObjectType = b), (r.mainObjectId = O)));
                        let s = (0, a.F)({ params: r, logger: n, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, i.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, S, E, N, A, T, j, R, k, P, L, w, O, b, n, C, f, y]);
                };
        },
        64261: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => r });
            let r = (0, n(74631).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        64407: (e, t, n) => {
            'use strict';
            n.d(t, { h: () => S });
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
                m = n(92231),
                g = n(84059),
                p = n(30787),
                h = n(6969),
                v = n(29809),
                E = n.n(v);
            let S = (e) => {
                let { dataSessionId: t, isOpened: n, onOpen: v, onClose: S } = e,
                    C = (0, _.N)().get(u.V4),
                    { formatMessage: f } = (0, i.A)(),
                    y = (() => {
                        let e = (0, g.useSearchParams)();
                        return (0, a.useCallback)(
                            (t) => {
                                let n = e.get(h.K.UTM_CAMPAIGN);
                                if (!n) return t;
                                let r = new URLSearchParams();
                                return (r.set(h.K.UTM_SOURCE, 'campaignid_'.concat(n)), (0, p.C)(t, r));
                            },
                            [e],
                        );
                    })(),
                    I = (0, a.useCallback)(
                        (e) => {
                            e.origin === C.afisha.host && 'close' === e.data.type && S();
                        },
                        [S, C.afisha.host],
                    );
                (0, a.useEffect)(
                    () => (
                        window.addEventListener('message', I),
                        () => {
                            window.removeEventListener('message', I);
                        }
                    ),
                    [I],
                );
                let A = (0, a.useCallback)(
                        (e) => {
                            e ? v() : S();
                        },
                        [S, v],
                    ),
                    N = (0, s.tE)(C, (0, m.u)()),
                    T = y(''.concat(C.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(N));
                return (0, r.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: n,
                    onOpenChange: A,
                    onClose: S,
                    showHeader: !1,
                    className: E().widget,
                    contentClassName: E().content,
                    overlayColor: 'full',
                    'data-test-id': l.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, r.jsx)(d.q, { children: (0, r.jsx)(o.$, { 'aria-label': f({ id: 'interface-actions.close' }), onClick: S }) }),
                        (0, r.jsx)('iframe', {
                            src: T,
                            className: E().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        64715: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => R });
            var r = n(25839),
                a = n(82298),
                i = n(88204),
                s = n(74631),
                l = n(39004),
                o = n(8487);
            n(93588);
            var c = n(4071),
                d = n(66738),
                u = n(4254),
                _ = n(67379),
                m = n(44031),
                g = n(87277),
                p = n(59450),
                h = n(84e3),
                v = n(97952),
                E = n(89192),
                S = n(53712),
                C = n(27954),
                f = n(44806),
                y = n(15270),
                I = n(23818),
                A = n(85686);
            let N = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var T = n(27990),
                x = n.n(T);
            let b = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { slam: i } = (0, C.g)(),
                    { contentRef: s } = (0, E.g)(),
                    l = (0, A.Z)(S.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(x().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(y.L, { withBackwardFallback: '/', className: (0, a.$)(x().navigation, { [x().navigation_desktop]: !s }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(x().content, { [x().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(I._V, { className: x().image, src: N.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: x().message,
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            className: x().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            className: x().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                i.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: x().button,
                                        onClick: l,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            className: x().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var O = n(68854),
                L = n.n(O);
            let R = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: i } = (0, l.A)(),
                    I = (0, s.useContext)(C.P),
                    A = null == I ? void 0 : I.experiments.checkExperiment(f.z.WebNextUnstableMusicScreen, 'on'),
                    N = i(A ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: n } = (0, p.gf)(),
                        { pageId: r } = (0, v.$)(),
                        a = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !n || !r) return;
                        let i = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: r,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        i && (0, g.z5)(t.evgenInstance, i);
                    }, [t, e, n, r, a]);
                })(N);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: n } = (0, v.$)(),
                            r = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let a = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, g.bv)(e.evgenInstance, a);
                            }, [e, t, n, r]),
                        };
                    })(),
                    x = (0, s.useCallback)(() => {
                        (T(), (window.location.href = S.Z.main.href));
                    }, [T]),
                    { contentRef: O } = (0, E.g)();
                return A
                    ? (0, r.jsx)(b, { className: t, withBackwardControl: n })
                    : (0, r.jsxs)('div', {
                          className: (0, a.$)(L().root, t),
                          children: [
                              n &&
                                  (0, r.jsx)(y.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(L().navigation, { [L().navigation_desktop]: !O }),
                                      withForwardControl: !1,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, a.$)(L().content, { [L().content_shrink]: !n }),
                                  children: [
                                      (0, r.jsx)(d.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(u.DZ, { className: (0, a.$)(L().title, L().important), variant: 'h3', size: 'xs', children: N }),
                                      (0, r.jsxs)(u.HL, {
                                          className: (0, a.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: x,
                                          className: L().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
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
        67311: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => i, si: () => l, fW: () => _, MJ: () => u, jU: () => g, Bx: () => m });
            var r = n(22413);
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
                        let s = (0, r.Jt)(e);
                        if (t) {
                            var n, i;
                            return null != (i = null == (n = a(s)) ? void 0 : n.value) ? i : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let i = a ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, i, n);
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
                        n = s('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let i = n.getItem(e) || void 0;
                        if (!t) return i;
                        let s = a(i);
                        if (!s) return null;
                        let l = null != (r = null == s ? void 0 : s.value) ? r : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return (this.remove(e), null);
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
                    let r = s('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...n }));
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
            var o = n(58025),
                c = n(36432);
            class d extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...r }),
                        (0, o._)(this, 'name', 'Storage Exception'),
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
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class _ {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, i;
                        let s = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (i = null == (n = a(s)) ? void 0 : n.value) ? i : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = s('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
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
            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            a = e.get(n);
                        null != a && e.set(n, a, r);
                    });
            }
            function g(e) {
                let { name: t, group: n, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: n, value: { ...r, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: r } } }
                    : { [t]: { group: n, value: { title: n } } };
            }
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
        68093: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { Z: () => r }),
                (function (e) {
                    ((e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified'));
                })(r || (r = {})));
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
        69274: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => a });
            let r = /[+-]\d{2}:?\d{2}/,
                a = (e) => (null == e ? void 0 : e.replace(r, ''));
        },
        69635: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => o });
            var r = n(28410),
                a = n(51751),
                i = n(44806),
                s = n(26847);
            let l = r.gK.model('Price', { value: r.gK.number, currency: r.gK.string }),
                o = r.gK
                    .model('Concert', {
                        id: r.gK.string,
                        dataSessionId: r.gK.maybe(r.gK.string),
                        datetime: r.gK.maybe(r.gK.string),
                        city: r.gK.maybe(r.gK.string),
                        place: r.gK.maybe(r.gK.string),
                        contentRating: r.gK.maybe(r.gK.string),
                        price: r.gK.maybe(l),
                        cashbackTitle: r.gK.maybe(r.gK.string),
                        cashbackValuePercent: r.gK.maybe(r.gK.number),
                        title: r.gK.maybe(r.gK.string),
                        cover: r.gK.maybe(s.$),
                        rank: r.gK.maybe(r.gK.number),
                        eventKind: r.gK.maybe(r.gK.string),
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
        80499: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => h, s: () => v });
            var r = n(25839),
                a = n(88204),
                i = n(84059),
                s = n(74631),
                l = n(89288),
                o = n(36432),
                c = n(94421),
                d = n(99989),
                u = n(27954),
                _ = n(83382);
            (0, a.eO)(!1);
            let m = (0, s.createContext)(null),
                g = (e) => {
                    let { children: t, store: n, storeKey: a } = e,
                        i = (0, s.useMemo)(() => ({ store: n, storeKey: a }), [n, a]);
                    return (0, r.jsx)(m.Provider, { value: i, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: a } = e;
                    return (
                        (0, i.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
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
                h = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        a = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: i, nonce: s } = e,
                                l = (0, _.Y)(),
                                o = (0, u.g)(),
                                { store: m, patchesRef: h } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(p, { nonce: s, patchKey: n, patchesRef: h }), (0, r.jsx)(g, { store: m, storeKey: n, children: i })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, s.useContext)(m);
                if (!n || n.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == n ? void 0 : n.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        82064: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => r });
            let r = (0, n(74631).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        82413: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => a });
            var r = n(35005);
            let a = (e) => (0, r.h)(e.data.concert, e.data.minPrice);
        },
        82706: (e, t, n) => {
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
        82904: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => P });
            var r = n(25839),
                a = n(88204),
                i = n(8487),
                s = n(44031),
                l = n(61493),
                o = n(71035),
                c = n(49656),
                d = n(14693),
                u = n(4071),
                _ = n(69084),
                m = n(4254),
                g = n(29481),
                p = n(52512),
                h = n(85686),
                v = n(27954),
                E = n(44806),
                S = n(17226),
                C = n(25895),
                f = n(7050),
                y = n(64407),
                I = n(83418);
            let A = ' • ',
                N = (e, t) => {
                    let n = [];
                    return (e.city && n.push(e.city), e.place && n.push(e.place), n.join(t));
                };
            var T = n(26330),
                x = n.n(T);
            let b = (0, a.PA)((e) => {
                let { concert: t, cashback: n } = e;
                return (0, r.jsxs)('div', {
                    className: x().meta,
                    children: [
                        (0, r.jsx)(m.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: x().title,
                            'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, r.jsxs)(m.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: x().info,
                            children: [
                                (0, r.jsx)(m.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: x().location,
                                    'aria-label': N(t, ' '),
                                    'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                                    children: N(t, A),
                                }),
                                (0, r.jsx)(m.HL, { 'aria-hidden': !0, className: x().separator, variant: 'span', type: 'controls', weight: 'medium', children: A }),
                                (0, r.jsx)(m.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: x().rating,
                                    'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        n,
                    ],
                });
            });
            var O = n(2488),
                L = n(11148),
                R = n(73367),
                k = n.n(R);
            let P = (0, a.PA)((e) => {
                var t, n, a;
                let { concert: A, withMask: N = !0, withPriceButton: T, withInlineMeta: x = !1 } = e,
                    { state: R, toggleTrue: P, toggleFalse: w } = (0, d.e)(!1),
                    { ref: j, intersectionPropertyId: M } = (0, p.n)(),
                    { experiments: D } = (0, v.g)(),
                    K = D.checkExperiment(E.z.WebNextConcertPage, 'on'),
                    B = (0, g.N)(),
                    U = (0, f.Y)(),
                    { href: W } = (0, C.u)('/concert/:concertId', { params: { concertId: A.id } }),
                    G = (0, h.Z)(W),
                    H = U(A),
                    F = (0, o.c)((e) => {
                        (B({ to: s.AppScreen.ConcertPurchaseScreen }), P(), null == e || e.stopPropagation());
                    }),
                    Q = (0, o.c)((e) => {
                        if (!K) return void F(e);
                        (B({ to: s.AppScreen.ConcertScreen }), G(e));
                    }),
                    Y = (0, o.c)((e) => {
                        (e.code === S.v.SPACE || e.code === S.v.ENTER) && (e.preventDefault(), Q());
                    }),
                    V = (0, o.c)((e) => {
                        K && (F(e), e.preventDefault());
                    }),
                    z = (0, c.L)(() => {
                        let e = A.isIdentityExperimentEnabled && A.cashbackValuePercent,
                            t = !A.isIdentityExperimentEnabled && A.isCashbackExperimentEnabled && A.cashbackTitle;
                        if (e || t)
                            return (0, r.jsx)(I.m, {
                                className: k().cashback,
                                titleClassName: k().cashbackTitle,
                                title: A.cashbackTitle,
                                valuePercent: A.cashbackValuePercent,
                            });
                    }),
                    X = (0, r.jsx)(O.M, { concert: A, withCashback: !1, withInlineMeta: x, titleSize: 'l' }),
                    $ = (0, r.jsx)(b, { concert: A, cashback: z });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: k().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: Q,
                            onKeyDown: Y,
                            ref: j,
                            'data-intersection-property-id': M,
                            'data-test-id': l.OA.concert.CONCERT_CARD,
                            children: [
                                (0, r.jsx)(_.q, { children: (0, r.jsx)(m.HL, { variant: 'div', children: (0, r.jsx)(i.A, { id: 'entity-names.concert' }) }) }),
                                (0, r.jsx)('div', {
                                    className: k().cover,
                                    children: (0, r.jsx)(L.W, {
                                        datetime: A.datetime,
                                        coverColor: null == (t = A.cover) ? void 0 : t.color,
                                        uri: null == (n = A.cover) ? void 0 : n.uri,
                                        withMask: N,
                                        cashbackPercent: A.isIdentityExperimentEnabled ? A.cashbackValuePercent : void 0,
                                    }),
                                }),
                                A.isIdentityExperimentEnabled ? X : $,
                                !!(null == (a = A.price) ? void 0 : a.value) && (0, r.jsx)(_.q, { children: (0, r.jsx)(m.HL, { variant: 'div', children: H }) }),
                                T &&
                                    (0, r.jsx)(u.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: k().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: V,
                                        'data-test-id': l.OA.concert.CONCERT_CARD_BUTTON,
                                        children: H,
                                    }),
                            ],
                        }),
                        (0, r.jsx)(y.h, { dataSessionId: A.dataSessionId, isOpened: R, onOpen: P, onClose: w }),
                    ],
                });
            });
        },
        83382: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => l });
            var r = n(67311),
                a = n(36484),
                i = n(62562),
                s = n(84e3);
            let l = () => {
                let e = (0, i.N)(),
                    t = e.get(a.oo),
                    n = e.get(a.uM),
                    l = e.get(a.ff),
                    o = e.get(a.V4),
                    c = e.get(a.P0),
                    d = (() => {
                        let e = (0, i.N)(),
                            t = e.get(a.$I),
                            n = e.get(a.EN),
                            r = e.get(a.N1),
                            s = e.get(a._1),
                            l = e.get(a.V3),
                            o = e.get(a.Lb),
                            c = e.get(a.wK),
                            d = e.get(a.tz),
                            u = e.get(a.$8),
                            _ = e.get(a.Oo),
                            m = e.get(a.X4),
                            g = e.get(a.O9),
                            p = e.get(a.E),
                            h = e.get(a.wH),
                            v = e.get(a.ok),
                            E = e.get(a.X8),
                            S = e.get(a.yq),
                            C = e.get(a.NN),
                            f = e.get(a.qN),
                            y = e.get(a.ro),
                            I = e.get(a.nM),
                            A = e.get(a.Ut),
                            N = e.get(a.K1),
                            T = e.get(a.eu),
                            x = e.get(a.aE),
                            b = e.get(a.ki),
                            O = e.get(a.c9),
                            L = e.get(a.en),
                            R = e.get(a.jQ),
                            k = e.get(a.cZ),
                            P = e.get(a.Zl),
                            w = e.get(a.CN),
                            j = e.get(a.P1),
                            M = e.get(a.zj),
                            D = e.get(a.re),
                            K = e.get(a.JM),
                            B = e.get(a.Lk),
                            U = e.get(a.$$),
                            W = e.get(a.sv),
                            G = e.get(a.gd),
                            H = e.get(a.Ez),
                            F = e.get(a.u2),
                            Q = e.get(a.TD),
                            Y = e.get(a.dh),
                            V = e.get(a.LC),
                            z = e.get(a.PL),
                            X = e.get(a.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: n,
                            disclaimersResource: r,
                            usersResource: s,
                            landingResource: l,
                            landing3Resource: o,
                            landingBlocksResource: c,
                            albumResource: d,
                            libraryResource: u,
                            tracksResource: _,
                            topResource: m,
                            artistsResource: g,
                            slidesResource: p,
                            redAlertResource: h,
                            rotorResource: v,
                            waveResource: E,
                            searchResource: S,
                            searchPlaylistResource: C,
                            playlistResource: f,
                            playlistsResource: y,
                            pinResource: I,
                            metatagsResource: A,
                            tagResource: N,
                            feedResource: T,
                            pinsResource: x,
                            musicHistoryResource: b,
                            dynamicPagesResource: O,
                            chartResource: L,
                            clipsResource: R,
                            lyricViewsResource: k,
                            nonMusicResource: P,
                            donationResource: w,
                            loaderResource: j,
                            lumenResource: M,
                            prefixlessResource: D,
                            streamsResource: K,
                            filtersResource: B,
                            ugcResource: U,
                            collectionResource: W,
                            adsResource: G,
                            personalResource: H,
                            familyResource: F,
                            childrenLandingResource: Q,
                            promoResource: Y,
                            telemetryResource: V,
                            labelsResource: z,
                            concertsResource: X,
                            wordsResource: e.get(a.dA),
                            wheelResource: e.get(a.$Y),
                        };
                    })(),
                    u = (0, s.U)(),
                    _ = (0, i.N)().get(a.TK),
                    m = e.get(a.ni),
                    g = new r.si(),
                    p = new r.fW();
                return {
                    ...d,
                    acqOffers: n,
                    disclaimerDictionary: l,
                    logger: u,
                    modelActionsLogger: _,
                    localStorage: g,
                    sessionStorage: p,
                    containerStorage: t,
                    config: o,
                    clientSafeConfig: c,
                    landingSdk: m,
                };
            };
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
                                    [_, m] = (0, r.useState)({}),
                                    g = (0, r.useRef)(new Set()),
                                    p = (0, r.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && p) {
                                                          if (g.current.has(t)) return;
                                                          (m((n) => ({ ...n, [t]: { isIntersecting: e.isIntersecting } })),
                                                              i && e.isIntersecting && (g.current.add(t), p.unobserve(e.target)));
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
                                                            m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
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
        94421: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => a, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
        95600: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { default: () => F }));
            var r = n(25839),
                a = n(84059),
                i = n(74631),
                s = n(80499),
                l = n(82706),
                o = n(28410),
                c = n(82413),
                d = n(69635),
                u = n(51751),
                _ = n(36159),
                m = n(19835),
                g = n(95897);
            let p = o.gK
                    .compose(o.gK.model('ConcertsDetailsPage', { concerts: o.gK.maybeNull(o.gK.array(d.a)), title: o.gK.maybeNull(o.gK.string) }), m.X, g.p)
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
                            let { type: n, id: r } = t,
                                { concertsResource: a, modelActionsLogger: i } = (0, o._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = _.G.PENDING;
                                    let { concerts: t } = (0, u.M)(e),
                                        i = t.concertsLocationForRequest,
                                        { items: s, title: l } = yield a.getConcertsDetails({ type: n, id: r, locations: i });
                                    ((e.concerts = (0, o.wg)(s.map((e) => (0, c.H)(e)))), (e.title = null != l ? l : null), (e.loadingState = _.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = _.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = _.G.IDLE), (e.title = null), e.destroyItems([e.concerts]));
                        },
                    })),
                h = { loadingState: _.G.IDLE },
                { pageStoreProvider: v } = (0, s.W)({ createStore: (e) => p.create(h, e), patchKey: l.n.CONCERTS_DETAILS });
            var E = n(88204),
                S = n(39004),
                C = n(71035),
                f = n(68934),
                y = n(13833),
                I = n(4254),
                A = n(64715),
                N = n(1407),
                T = n(40489),
                x = n(32190),
                b = n(82904),
                O = n(28924),
                L = n(61777),
                R = n(21784),
                k = n(89192),
                P = n(27954),
                w = n(44806),
                j = n(99401),
                M = n(26076),
                D = n(10603),
                K = n(67444),
                B = n.n(K);
            let U = (0, E.PA)((e) => {
                let { type: t, id: n } = e,
                    o = (0, i.useId)(),
                    c = (0, s.s)(l.n.CONCERTS_DETAILS),
                    { experiments: d } = (0, P.g)(),
                    { formatMessage: u } = (0, S.A)(),
                    { contentScrollRef: _, setContentScrollRef: m } = (0, k.g)(),
                    g = (0, R.W)(),
                    [p, h] = (0, f.d)(),
                    v = (0, L.f)(),
                    E = (0, i.useRef)(!1),
                    K = d.checkExperiment(w.z.WebNextConcertsIdentityEventType, 'on'),
                    U = (0, C.c)(() => {
                        var e;
                        return !c.isShimmerVisible && (null == (e = c.concerts) ? void 0 : e.length) ? c.concerts.length : 50;
                    }),
                    {
                        virtualizer: W,
                        rowResizeObserver: G,
                        columnCount: H,
                        indices: F,
                    } = (0, T.L)({
                        count: U(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: p,
                    }),
                    Q = { '--feed-concerts-height': ''.concat(W.getTotalSize(), 'px'), '--feed-concerts-column-count': H },
                    Y = (0, i.useCallback)(
                        (e) => {
                            var t;
                            let n = null == (t = c.concerts) ? void 0 : t[e];
                            return !n || c.isShimmerVisible ? (0, r.jsx)(O.L, { isActive: c.isShimmerActive, withMeta: !0 }) : (0, r.jsx)(b.Q, { concert: n });
                        },
                        [c.concerts, c.isShimmerActive, c.isShimmerVisible],
                    );
                if (
                    ((0, i.useEffect)(
                        () => () => {
                            c.reset();
                        },
                        [c],
                    ),
                    (0, i.useEffect)(() => {
                        c.isResolved && !E.current && (v(), (E.current = !0));
                    }, [c.isResolved, v]),
                    c.isNeededToLoad && (0, i.use)(c.getData({ type: t, id: n })),
                    d.checkExperiment(w.z.WebNextConcertsDetailsPage, 'on') || (0, a.notFound)(),
                    c.isRejected)
                )
                    return (0, r.jsx)(A.SomethingWentWrong, {});
                let V = K && c.title ? c.title : u({ id: 'concerts.details-title' });
                return (0, r.jsx)(N.h, {
                    scrollElement: _,
                    outerTitle: V,
                    children: (0, r.jsxs)('div', {
                        className: B().root,
                        children: [
                            (0, r.jsx)(D.Y, {
                                variant: D.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: g.canBack,
                                children: (0, r.jsx)(I.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: V }),
                            }),
                            (0, r.jsxs)(y.N, {
                                ref: m,
                                className: B().scrollContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: B().content,
                                        children: (0, r.jsx)('div', {
                                            'aria-labelledby': o,
                                            ref: h,
                                            style: Q,
                                            className: B().container,
                                            children: W.getVirtualItems().map((e) =>
                                                (0, r.jsx)(
                                                    x.U,
                                                    {
                                                        className: B().row,
                                                        columnClassName: B().column,
                                                        virtualItem: e,
                                                        resizeObserver: G,
                                                        indices: F,
                                                        renderItemByIndex: Y,
                                                        scrollMargin: W.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, r.jsx)(M.A, { children: (0, r.jsx)(j.w, { className: B().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var W = n(23976);
            let G = (e) => (0, r.jsx)(O.L, { isActive: !0, withMeta: !0 }, e),
                H = () => {
                    let e = (0, R.W)(),
                        { contentScrollRef: t, setContentScrollRef: n } = (0, k.g)(),
                        [a, i] = (0, f.d)(),
                        { formatMessage: s } = (0, S.A)(),
                        l = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.concert' }) }),
                        {
                            virtualizer: o,
                            rowResizeObserver: c,
                            columnCount: d,
                            indices: u,
                        } = (0, T.L)({
                            count: 50,
                            rowGap: 32,
                            columnGap: 16,
                            getEstimateRowSize: () => 371,
                            minColumnCount: 2,
                            minColumnWidth: 170,
                            maxColumnWidth: 227,
                            containerRef: a,
                        }),
                        _ = { '--feed-concerts-height': ''.concat(o.getTotalSize(), 'px'), '--feed-concerts-column-count': d };
                    return (0, r.jsx)(N.h, {
                        scrollElement: t,
                        children: (0, r.jsxs)('div', {
                            className: B().root,
                            children: [
                                (0, r.jsx)(D.Y, {
                                    variant: D.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(W.W, { className: B().shimmerTitle, radius: 'xxxl' }),
                                }),
                                (0, r.jsx)(y.N, {
                                    ref: n,
                                    className: B().scrollContainer,
                                    children: (0, r.jsx)('div', {
                                        className: B().content,
                                        children: (0, r.jsx)('div', {
                                            'aria-label': l,
                                            ref: i,
                                            style: _,
                                            className: B().container,
                                            children: o
                                                .getVirtualItems()
                                                .map((e) =>
                                                    (0, r.jsx)(
                                                        x.U,
                                                        {
                                                            className: B().row,
                                                            columnClassName: B().column,
                                                            virtualItem: e,
                                                            resizeObserver: c,
                                                            indices: u,
                                                            renderItemByIndex: G,
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
                F = () => {
                    let e = (0, a.useSearchParams)(),
                        t = e.get('type'),
                        n = e.get('id');
                    return (
                        (t && n) || (0, a.notFound)(),
                        (0, r.jsx)(v, { children: (0, r.jsx)(i.Suspense, { fallback: (0, r.jsx)(H, {}), children: (0, r.jsx)(U, { type: t, id: n }) }) })
                    );
                };
        },
        95897: (e, t, n) => {
            'use strict';
            n.d(t, { p: () => a });
            var r = n(28410);
            let a = r.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, r.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, r.zr)(e);
                            });
                        }));
                },
            }));
        },
        97522: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => m });
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
                        { isPrefetchDisabled: _, isPrefetchOnHover: m } = (0, s.useContext)(c.j),
                        { href: g, target: p, rel: h } = (0, d.u)(null != n ? n : ''),
                        v = (0, s.isValidElement)(a)
                            ? a
                            : (function (e, t, n) {
                                  return e ? (t ? (0, r.jsx)(i(), { prefetch: !1 }) : n ? (0, r.jsx)(u, { href: e }) : (0, r.jsx)(i(), {})) : (0, r.jsx)('a', {});
                              })(n, _, m);
                    return (0, r.jsx)(o.N, { ref: t, component: v, href: n ? g : void 0, target: p, rel: h, ...l });
                },
                m = (0, s.forwardRef)((e, t) => (0, r.jsx)(_, { ...e, forwardedRef: t }));
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
            n.d(t, { w: () => N });
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
                m = n(89514);
            let g = (e) => e(new Date(), (0, m.m)());
            var p = n(96433),
                h = n(27954),
                v = n(400),
                E = n.n(v),
                S = n(61493),
                C = n(4254),
                f = n(97522);
            let y = (e) => {
                    let { className: t, data: n } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(E().copyrights, t),
                        'data-test-id': S.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: E().text,
                                children: [
                                    '\xa9 ',
                                    n.year,
                                    ' \xa0',
                                    (0, r.jsx)(f.N, {
                                        target: '_blank',
                                        href: n.yandexMusic.url,
                                        className: (0, a.$)(E().copyrightLink, E().yandexMusicLink),
                                        'data-test-id': S.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: n.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(f.N, {
                                target: '_blank',
                                href: n.yandexProjects.url,
                                className: E().copyrightLink,
                                'data-test-id': S.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: n.yandexProjects.title,
                            }),
                        ],
                    });
                },
                I = (e) => {
                    let { disclaimer: t, links: n } = e;
                    return (0, r.jsxs)('div', {
                        className: E().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: E().list,
                                'data-test-id': S.S7.FOOTER_LINKS_LIST,
                                children: n.map((e) => {
                                    let { id: t, title: n, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: E().item,
                                            children: (0, r.jsx)(f.N, { target: '_blank', href: a, className: E().link, 'data-test-id': S.S7.FOOTER_LINK, children: n }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: E().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': S.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: n } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(E().root, E().important, t),
                        'data-test-id': S.S7.FOOTER,
                        children: [(0, r.jsx)(I, { links: n.links, disclaimer: n.disclaimer }), (0, r.jsx)(y, { data: n.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: n } = (0, h.g)(),
                    { formatDate: a, formatMessage: i } = (0, s.A)(),
                    { language: l } = (0, p.h)(),
                    o = u({ formatMessage: i, language: l, tld: n.tld, year: g(a) });
                return (0, r.jsx)(y, { className: t, data: o });
            });
            let N = (0, i.PA)((e) => {
                var t;
                let { className: n } = e,
                    { experiments: i, location: m, user: v } = (0, h.g)(),
                    { formatDate: S, formatMessage: C } = (0, s.A)(),
                    { isEnabled: f } = null != (t = (0, o.P)()) ? t : {},
                    { language: y } = (0, p.h)(),
                    I = ((e) => {
                        let { checkExperiment: t, formatMessage: n, isWebApplication: r, language: a, tld: i, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: n, tld: r, language: a, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, a) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, a) },
                                    m = [s, o, u];
                                return (n && 'ru' === i && m.push(l), m.push(_), m);
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
                        formatMessage: C,
                        isWebApplication: l.$3,
                        tld: m.tld,
                        language: y,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: g(S),
                    });
                return (0, r.jsx)(A, { className: (0, a.$)({ [E().root_withOffsetForDeeplink]: f }, n), data: I });
            });
        },
        99989: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => i });
            var r = n(28410),
                a = n(74631);
            let i = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: i } = e,
                    s = (0, a.useRef)([]),
                    [l] = (0, a.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, a.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, r.X6)(l, e);
                        };
                        return (e(), window.addEventListener(i, e), () => window.removeEventListener(i, e));
                    }, [n, i, l]),
                    { store: l, patchesRef: s }
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7055, 3112, 2767, 543, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1817, 4361, 3367, 2038, 4163, 3246, 7848, 3482, 8836, 4434,
                5622, 4475, 5056, 7358,
            ],
            () => e((e.s = 7424)),
        ),
            (_N_E = e.O()));
    },
]);
