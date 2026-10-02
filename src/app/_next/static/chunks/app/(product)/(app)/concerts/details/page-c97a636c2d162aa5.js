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
            n.d(t, { M: () => g });
            var r = n(25839),
                a = n(88204),
                i = n(74631),
                s = n(8487),
                l = n(61493),
                o = n(49656),
                c = n(4254),
                d = n(83418),
                u = n(26330),
                m = n.n(u);
            let g = (0, a.PA)((e) => {
                let { id: t, concert: n, withCashback: a = !0, withInlineMeta: u = !1, titleSize: g = 'm' } = e,
                    _ = [],
                    h = (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == n ? void 0 : n.eventKind) &&
                    _.push(
                        (0, r.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': l.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, r.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: n.eventKind } }),
                        }),
                    ),
                    (null == n ? void 0 : n.contentRating) &&
                        _.push(
                            h,
                            (0, r.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: n.contentRating,
                            }),
                        ));
                let p = (0, o.L)(() =>
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
                    u && p && _.push(h, p),
                    (0, r.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, r.jsx)(c.HL, {
                                variant: 'div',
                                size: g,
                                weight: 'medium',
                                className: m().city,
                                lineClamp: 1,
                                'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                                children: null == n ? void 0 : n.title,
                            }),
                            (0, r.jsx)('div', { className: m().info, children: _.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !u && p,
                            a &&
                                (null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                n.cashbackValuePercent &&
                                (0, r.jsx)(d.m, { className: m().cashback, valuePercent: n.cashbackValuePercent }),
                            a &&
                                !(null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                (null == n ? void 0 : n.isCashbackExperimentEnabled) &&
                                n.cashbackTitle &&
                                (0, r.jsx)(d.m, { className: m().cashback, title: n.cashbackTitle }),
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
                let { datetime: t, className: n, monthClassName: c, dayClassName: u, weekdayClassName: m, withWeekday: g = !0, ..._ } = e,
                    { formatDate: h } = (0, i.A)(),
                    p = ((e) => {
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
                    'aria-label': h(t, (0, o.s)()),
                    ..._,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, a.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: p,
                        }),
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            className: (0, a.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: h(t, { day: 'numeric' }),
                        }),
                        g &&
                            (0, r.jsx)(l.HL, {
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
        3669: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => y });
            var r = n(74631),
                a = n(67379),
                i = n(17850),
                s = n(59450),
                l = n(49656),
                o = n(84e3),
                c = n(58069),
                d = n(20258),
                u = n(26742),
                m = n(25195),
                g = n(37314),
                _ = n(25488),
                h = n(97952),
                p = n(10764),
                v = n(72594);
            let y = () => {
                let e = (0, o.U)(),
                    t = (0, s.st)(),
                    { hash: n } = (0, s.gf)(),
                    { pageId: y, displayReasonId: E } = (0, h.$)(),
                    { tabId: C, tabPos: x, isTabSelectedByDefault: f } = (0, v.R)(),
                    { offsetBlockPosY: N } = (0, m.u)(),
                    { blockType: b, blockId: T, blockPosX: A, blockPosY: S, mainObjectId: k, mainObjectType: I, displayReasonId: w } = (0, u.N)(),
                    { filterKey: R, filterValue: O, filterPos: j } = (0, g.G)(),
                    { objectType: P, objectsCount: L, objectId: D, objectPosX: M, objectPosY: K } = (0, _.J)(),
                    { skeleton: W } = (0, p.b)(),
                    G = null != w ? w : E,
                    H = (0, l.L)(() => (void 0 !== N && void 0 !== S ? N + S : S));
                return (0, r.useCallback)(
                    (r, s) => {
                        if (!t || !y || !d.xK.includes(y) || !d.fD.includes(y)) return;
                        let l = c.F[y];
                        if (!l) return;
                        let o = {
                            hash: n,
                            pageId: l,
                            entityType: b,
                            entityId: T,
                            entityPosX: A,
                            entityPosY: H,
                            objectsCount: L,
                            viewUuid: s,
                            objectType: P,
                            objectId: D,
                            objectPosX: M,
                            objectPosY: K,
                        };
                        (void 0 !== R && ((o.filterKey = R), (o.filterValue = O), (o.filterPos = j)),
                            d.qG.includes(y) && ((o.tabId = C), (o.tabPos = x), (o.isTabSelectedByDefault = f)),
                            W && (o.skeletonId = W),
                            'string' == typeof k && 'string' == typeof I && ((o.mainObjectType = I), (o.mainObjectId = k)),
                            G && (o.displayReasonId = G));
                        let u = (0, a.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (r ? (0, i.Pf)(t.evgenInstance, u) : (0, i.nv)(t.evgenInstance, u));
                    },
                    [t, G, T, A, H, b, R, j, O, n, f, e, k, I, D, M, K, P, L, y, W, C, x],
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
            n.d(t, { W: () => A });
            var r,
                a,
                i = n(25839),
                s = n(82298),
                l = n(88204),
                o = n(74631),
                c = n(61493),
                d = n(49656),
                u = n(23818),
                m = n(27954),
                g = n(44806),
                _ = n(89288);
            let h = (e) => (0, _.a6)(e.replace('%%', '960x690_noncrop'));
            var p = n(8487),
                v = n(4254);
            function y() {
                return (y = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let E = function (e) {
                return o.createElement(
                    'svg',
                    y({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
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
                x = n.n(C);
            let f = (e) => {
                let { percent: t, className: n } = e;
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(x().root, n),
                    'data-test-id': c.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, i.jsx)(E, { 'aria-hidden': !0, className: x().icon }),
                        (0, i.jsx)(v.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: x().text,
                            children: (0, i.jsx)(p.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var N = n(3656),
                b = n(15915),
                T = n.n(b);
            let A = (0, l.PA)((e) => {
                let { uri: t, withMask: n, datetime: r, coverColor: a, cashbackPercent: l } = e,
                    { experiments: p } = (0, m.g)(),
                    [v, y] = (0, o.useState)(!1),
                    E = p.checkExperiment(g.z.NewConcertsTicketRedesign, 'on') && n,
                    C = p.checkExperiment(g.z.WebNextConcertsIdentityEventType, 'on'),
                    x = (0, o.useCallback)(() => {
                        y(!0);
                    }, []),
                    b = (0, d.L)(() => {
                        if (a)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: n, l: r } = (0, _.g8)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(n, '%, ')
                                        .concat(r <= 55 ? r + 20 : r - 20, '%)');
                                })(a),
                            };
                    }),
                    A = (0, d.L)(() =>
                        r
                            ? (0, i.jsxs)('div', {
                                  className: (0, s.$)(T().date, { [T().date_withEventType]: C }),
                                  children: [
                                      (0, i.jsx)(u._V, {
                                          className: T().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: x,
                                      }),
                                      v &&
                                          (0, i.jsx)(N.d, {
                                              className: T().root_withEventType,
                                              dayClassName: T().day_withEventType,
                                              weekdayClassName: T().weekday_withEventType,
                                              monthClassName: T().month_withEventType,
                                              datetime: r,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    S = (0, d.L)(() =>
                        r
                            ? (0, i.jsx)(N.d, {
                                  dayClassName: T().day,
                                  weekdayClassName: (0, s.$)(T().weekday, T().important),
                                  monthClassName: T().month,
                                  className: T().date,
                                  datetime: r,
                              })
                            : null,
                    );
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(T().root, { [T().root_withMask]: E }),
                    style: b,
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
                        r && (C ? A : S),
                        C && l && (0, i.jsx)(f, { className: T().cashback, percent: l }),
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
        26847: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => a });
            var r = n(28410);
            let a = r.gK.model('Cover', { uri: r.gK.maybe(r.gK.string), color: r.gK.maybe(r.gK.string), videoUrl: r.gK.maybe(r.gK.string) });
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
                    m = (0, s.useRef)(null),
                    g = t[n.index],
                    _ = { '--virtual-grid-row-vertical-offset': ''.concat(n.start - u, 'px') };
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
                    (0, r.jsx)('div', {
                        'data-index': n.index,
                        ref: m,
                        style: _,
                        className: (0, a.$)(o().root, c),
                        children: null == g ? void 0 : g.map((e) => (0, r.jsx)('div', { className: l, children: i(e) }, ''.concat(n.key, '_').concat(e))),
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
                        maxColumnWidth: m,
                        minColumnCount: g,
                        maxColumnCount: _,
                        containerRef: h,
                    } = e,
                    { rowCount: p, columnCount: v } = ((e) => {
                        let { containerRef: t, minColumnCount: n, maxColumnWidth: r, minColumnWidth: a, totalCount: o, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, s.useState)({ rowCount: 0, columnCount: 0 }),
                            g = (0, s.useRef)(null),
                            _ = (0, s.useMemo)(
                                () =>
                                    (0, i.A)(
                                        (e) => {
                                            m(
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
                                    g.current && g.current.disconnect(),
                                    (g.current = new ResizeObserver((e) => {
                                        e.forEach(_);
                                    })),
                                    t &&
                                        (m(
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
                                        g.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = g.current) || e.disconnect();
                                    }
                                ),
                                [c, t, _, d, r, n, a, o],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: g, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: _, containerRef: h }),
                    { virtualizer: y, resizeObserver: E } = (0, o.r)({ count: p, getEstimateSize: n, gap: c, containerRef: h }),
                    C = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        v,
                    ),
                    x = (0, a.L)(() => {
                        var e, t;
                        if (!y.range) return null;
                        let n = null == (e = C[y.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = C[y.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== n && void 0 !== r ? { startIndex: n, endIndex: r } : null;
                    });
                return { virtualizer: y, rowResizeObserver: E, indices: C, columnCount: v, visibleRange: x };
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
                            settings: { isMobile: m },
                        } = (0, l.g)(),
                        { contentScrollRef: g } = (0, s.g)(),
                        _ = (0, a.useRef)(new Map()),
                        h = (0, a.useRef)(void 0),
                        p = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = _.current.get(String(e));
                                return null != t ? t : n(e);
                            },
                            overscan: u,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, n) => {
                                if (!t) return 0;
                                let r = t.getBoundingClientRect().top;
                                return e && 1 ? r + window.scrollY : !e && n ? r + n.scrollTop : 0;
                            })(m, d, g),
                        },
                        v = (0, r.XW)(p),
                        y = (0, r.Te)({ ...p, getScrollElement: () => g, initialOffset: null == g ? void 0 : g.scrollTop }),
                        E = m ? v : y,
                        C = (0, i.c)(() => {
                            E.measure();
                        });
                    return (
                        (0, a.useEffect)(() => {
                            h.current ||
                                (h.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let n = e.target.getAttribute('data-index');
                                        if (e.target && n) {
                                            let r = e.contentRect.height;
                                            r && r !== _.current.get(n) && (_.current.set(n, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && C());
                                }));
                        }, [C]),
                        { virtualizer: E, resizeObserver: h.current }
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
        53228: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 95600));
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
        61777: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => y });
            var r = n(74631),
                a = n(67379),
                i = n(17850),
                s = n(59450),
                l = n(49656),
                o = n(84e3),
                c = n(58069),
                d = n(20258),
                u = n(26742),
                m = n(25195),
                g = n(37314),
                _ = n(97952),
                h = n(10764),
                p = n(72594);
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
                    let e = (0, r.useRef)(!1),
                        t = (0, s.st)(),
                        n = (0, o.U)(),
                        { hash: y } = (0, s.gf)(),
                        { pageId: E } = (0, _.$)(),
                        { tabId: C, tabPos: x, isTabSelectedByDefault: f } = (0, p.R)(),
                        { offsetBlockPosY: N } = (0, m.u)(),
                        { blockId: b, blockType: T, blockPosX: A, blockPosY: S, mainObjectType: k, mainObjectId: I, objectsCount: w } = (0, u.N)(),
                        { filterKey: R, filterValue: O, filterPos: j } = (0, g.G)(),
                        { skeleton: P } = (0, h.b)(),
                        L = (0, l.L)(() => (void 0 !== N && void 0 !== S ? N + S : S));
                    return (0, r.useCallback)(() => {
                        if (!t || !E || !d.xK.includes(E) || !v.includes(E) || e.current) return;
                        let r = { hash: y, pageId: c.F[E], entityType: T, entityId: b, entityPosX: A, entityPosY: L, objectsCount: w };
                        (void 0 !== R && ((r.filterKey = R), (r.filterValue = O), (r.filterPos = j)),
                            d.qG.includes(E) && ((r.tabId = C), (r.tabPos = x), (r.isTabSelectedByDefault = f)),
                            P && (r.skeletonId = P),
                            I && k && ((r.mainObjectType = k), (r.mainObjectId = I)));
                        let s = (0, a.F)({ params: r, logger: n, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, i.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, E, y, T, b, A, L, R, O, j, w, P, I, k, n, C, x, f]);
                };
        },
        64407: (e, t, n) => {
            'use strict';
            n.d(t, { h: () => E });
            var r = n(25839),
                a = n(74631),
                i = n(39004),
                s = n(93588),
                l = n(61493),
                o = n(4071),
                c = n(35622),
                d = n(69084),
                u = n(36484),
                m = n(62562),
                g = n(92231),
                _ = n(84059),
                h = n(30787),
                p = n(6969),
                v = n(29809),
                y = n.n(v);
            let E = (e) => {
                let { dataSessionId: t, isOpened: n, onOpen: v, onClose: E } = e,
                    C = (0, m.N)().get(u.V4),
                    { formatMessage: x } = (0, i.A)(),
                    f = (() => {
                        let e = (0, _.useSearchParams)();
                        return (0, a.useCallback)(
                            (t) => {
                                let n = e.get(p.K.UTM_CAMPAIGN);
                                if (!n) return t;
                                let r = new URLSearchParams();
                                return (r.set(p.K.UTM_SOURCE, 'campaignid_'.concat(n)), (0, h.C)(t, r));
                            },
                            [e],
                        );
                    })(),
                    N = (0, a.useCallback)(
                        (e) => {
                            e.origin === C.afisha.host && 'close' === e.data.type && E();
                        },
                        [E, C.afisha.host],
                    );
                (0, a.useEffect)(
                    () => (
                        window.addEventListener('message', N),
                        () => {
                            window.removeEventListener('message', N);
                        }
                    ),
                    [N],
                );
                let b = (0, a.useCallback)(
                        (e) => {
                            e ? v() : E();
                        },
                        [E, v],
                    ),
                    T = (0, s.tE)(C, (0, g.u)()),
                    A = f(''.concat(C.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(T));
                return (0, r.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: n,
                    onOpenChange: b,
                    onClose: E,
                    showHeader: !1,
                    className: y().widget,
                    contentClassName: y().content,
                    overlayColor: 'full',
                    'data-test-id': l.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, r.jsx)(d.q, { children: (0, r.jsx)(o.$, { 'aria-label': x({ id: 'interface-actions.close' }), onClick: E }) }),
                        (0, r.jsx)('iframe', {
                            src: A,
                            className: y().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        67311: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => i, si: () => l, fW: () => m, MJ: () => u, jU: () => _, Bx: () => g });
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
            class m {
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
            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            a = e.get(n);
                        null != a && e.set(n, a, r);
                    });
            }
            function _(e) {
                let { name: t, group: n, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: n, value: { ...r, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: r } } }
                    : { [t]: { group: n, value: { title: n } } };
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
        78299: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => N });
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
                m = n(67379),
                g = n(36619),
                _ = n(76945),
                h = n(59450),
                p = n(84e3),
                v = n(97952),
                y = n(89192),
                E = n(53712),
                C = n(15270),
                x = n(68854),
                f = n.n(x);
            let N = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: i } = (0, l.A)(),
                    x = i({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: n } = (0, h.gf)(),
                        { pageId: r } = (0, v.$)(),
                        a = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !n || !r) return;
                        let i = (0, m.F)({
                            params: {
                                entityType: g.EntityTypes.Error,
                                entityId: g.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: r,
                                pageStyle: g.PageStyles.Fullscreen,
                                pagePlacement: g.PagePlacements.Fullscreen,
                                mainObjectType: g.DomainObjectType.NonApplicable,
                                mainObjectId: g.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        i && (0, _.z5)(t.evgenInstance, i);
                    }, [t, e, n, r, a]);
                })(x);
                let { sendRefreshEvent: N } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: n } = (0, v.$)(),
                            r = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: g.ActionType.Refresh,
                                        userInteractionType: g.UserInteractionType.Tap,
                                        entityType: g.EntityTypes.Error,
                                        entityId: g.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: g.PageStyles.Fullscreen,
                                        pagePlacement: g.PagePlacements.Fullscreen,
                                        mainObjectType: g.DomainObjectType.NonApplicable,
                                        mainObjectId: g.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, _.bv)(e.evgenInstance, a);
                            }, [e, t, n, r]),
                        };
                    })(),
                    b = (0, s.useCallback)(() => {
                        (N(), (window.location.href = E.Z.main.href));
                    }, [N]),
                    { contentRef: T } = (0, y.g)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(f().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(C.L, { withBackwardFallback: '/', className: (0, a.$)(f().navigation, { [f().navigation_desktop]: !T }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(f().content, { [f().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(d.I, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, a.$)(f().title, f().important), variant: 'h3', size: 'xs', children: x }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, a.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: b,
                                    className: f().button,
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
        80499: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => p, s: () => v });
            var r = n(25839),
                a = n(88204),
                i = n(84059),
                s = n(74631),
                l = n(89288),
                o = n(36432),
                c = n(94421),
                d = n(99989),
                u = n(27954),
                m = n(83382);
            (0, a.eO)(!1);
            let g = (0, s.createContext)(null),
                _ = (e) => {
                    let { children: t, store: n, storeKey: a } = e,
                        i = (0, s.useMemo)(() => ({ store: n, storeKey: a }), [n, a]);
                    return (0, r.jsx)(g.Provider, { value: i, children: t });
                },
                h = (e) => {
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
                p = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        a = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: i, nonce: s } = e,
                                l = (0, m.Y)(),
                                o = (0, u.g)(),
                                { store: g, patchesRef: p } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(h, { nonce: s, patchKey: n, patchesRef: p }), (0, r.jsx)(_, { store: g, storeKey: n, children: i })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, s.useContext)(g);
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
            n.d(t, { Q: () => j });
            var r = n(25839),
                a = n(88204),
                i = n(8487),
                s = n(36619),
                l = n(61493),
                o = n(71035),
                c = n(49656),
                d = n(14693),
                u = n(4071),
                m = n(69084),
                g = n(4254),
                _ = n(29481),
                h = n(52512),
                p = n(85686),
                v = n(27954),
                y = n(44806),
                E = n(17226),
                C = n(25895),
                x = n(7050),
                f = n(64407),
                N = n(83418);
            let b = ' • ',
                T = (e, t) => {
                    let n = [];
                    return (e.city && n.push(e.city), e.place && n.push(e.place), n.join(t));
                };
            var A = n(26330),
                S = n.n(A);
            let k = (0, a.PA)((e) => {
                let { concert: t, cashback: n } = e;
                return (0, r.jsxs)('div', {
                    className: S().meta,
                    children: [
                        (0, r.jsx)(g.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: S().title,
                            'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, r.jsxs)(g.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: S().info,
                            children: [
                                (0, r.jsx)(g.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: S().location,
                                    'aria-label': T(t, ' '),
                                    'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                                    children: T(t, b),
                                }),
                                (0, r.jsx)(g.HL, { 'aria-hidden': !0, className: S().separator, variant: 'span', type: 'controls', weight: 'medium', children: b }),
                                (0, r.jsx)(g.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: S().rating,
                                    'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        n,
                    ],
                });
            });
            var I = n(2488),
                w = n(11148),
                R = n(73367),
                O = n.n(R);
            let j = (0, a.PA)((e) => {
                var t, n, a;
                let { concert: b, withMask: T = !0, withPriceButton: A, withInlineMeta: S = !1 } = e,
                    { state: R, toggleTrue: j, toggleFalse: P } = (0, d.e)(!1),
                    { ref: L, intersectionPropertyId: D } = (0, h.n)(),
                    { experiments: M } = (0, v.g)(),
                    K = M.checkExperiment(y.z.WebNextConcertPage, 'on'),
                    W = (0, _.N)(),
                    G = (0, x.Y)(),
                    { href: H } = (0, C.u)('/concert/:concertId', { params: { concertId: b.id } }),
                    F = (0, p.Z)(H),
                    Y = G(b),
                    U = (0, o.c)((e) => {
                        (W({ to: s.AppScreen.ConcertPurchaseScreen }), j(), null == e || e.stopPropagation());
                    }),
                    z = (0, o.c)((e) => {
                        if (!K) return void U(e);
                        (W({ to: s.AppScreen.ConcertScreen }), F(e));
                    }),
                    B = (0, o.c)((e) => {
                        (e.code === E.v.SPACE || e.code === E.v.ENTER) && (e.preventDefault(), z());
                    }),
                    V = (0, o.c)((e) => {
                        K && (U(e), e.preventDefault());
                    }),
                    $ = (0, c.L)(() => {
                        let e = b.isIdentityExperimentEnabled && b.cashbackValuePercent,
                            t = !b.isIdentityExperimentEnabled && b.isCashbackExperimentEnabled && b.cashbackTitle;
                        if (e || t)
                            return (0, r.jsx)(N.m, {
                                className: O().cashback,
                                titleClassName: O().cashbackTitle,
                                title: b.cashbackTitle,
                                valuePercent: b.cashbackValuePercent,
                            });
                    }),
                    X = (0, r.jsx)(I.M, { concert: b, withCashback: !1, withInlineMeta: S, titleSize: 'l' }),
                    J = (0, r.jsx)(k, { concert: b, cashback: $ });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: O().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: z,
                            onKeyDown: B,
                            ref: L,
                            'data-intersection-property-id': D,
                            'data-test-id': l.OA.concert.CONCERT_CARD,
                            children: [
                                (0, r.jsx)(m.q, { children: (0, r.jsx)(g.HL, { variant: 'div', children: (0, r.jsx)(i.A, { id: 'entity-names.concert' }) }) }),
                                (0, r.jsx)('div', {
                                    className: O().cover,
                                    children: (0, r.jsx)(w.W, {
                                        datetime: b.datetime,
                                        coverColor: null == (t = b.cover) ? void 0 : t.color,
                                        uri: null == (n = b.cover) ? void 0 : n.uri,
                                        withMask: T,
                                        cashbackPercent: b.isIdentityExperimentEnabled ? b.cashbackValuePercent : void 0,
                                    }),
                                }),
                                b.isIdentityExperimentEnabled ? X : J,
                                !!(null == (a = b.price) ? void 0 : a.value) && (0, r.jsx)(m.q, { children: (0, r.jsx)(g.HL, { variant: 'div', children: Y }) }),
                                A &&
                                    (0, r.jsx)(u.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: O().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: V,
                                        'data-test-id': l.OA.concert.CONCERT_CARD_BUTTON,
                                        children: Y,
                                    }),
                            ],
                        }),
                        (0, r.jsx)(f.h, { dataSessionId: b.dataSessionId, isOpened: R, onOpen: j, onClose: P }),
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
                            m = e.get(a.Oo),
                            g = e.get(a.X4),
                            _ = e.get(a.O9),
                            h = e.get(a.E),
                            p = e.get(a.wH),
                            v = e.get(a.ok),
                            y = e.get(a.X8),
                            E = e.get(a.yq),
                            C = e.get(a.NN),
                            x = e.get(a.qN),
                            f = e.get(a.ro),
                            N = e.get(a.nM),
                            b = e.get(a.Ut),
                            T = e.get(a.K1),
                            A = e.get(a.eu),
                            S = e.get(a.aE),
                            k = e.get(a.ki),
                            I = e.get(a.c9),
                            w = e.get(a.en),
                            R = e.get(a.jQ),
                            O = e.get(a.cZ),
                            j = e.get(a.Zl),
                            P = e.get(a.CN),
                            L = e.get(a.P1),
                            D = e.get(a.zj),
                            M = e.get(a.re),
                            K = e.get(a.JM),
                            W = e.get(a.Lk),
                            G = e.get(a.$$),
                            H = e.get(a.sv),
                            F = e.get(a.gd),
                            Y = e.get(a.Ez),
                            U = e.get(a.u2),
                            z = e.get(a.TD),
                            B = e.get(a.dh),
                            V = e.get(a.LC),
                            $ = e.get(a.PL),
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
                            tracksResource: m,
                            topResource: g,
                            artistsResource: _,
                            slidesResource: h,
                            redAlertResource: p,
                            rotorResource: v,
                            waveResource: y,
                            searchResource: E,
                            searchPlaylistResource: C,
                            playlistResource: x,
                            playlistsResource: f,
                            pinResource: N,
                            metatagsResource: b,
                            tagResource: T,
                            feedResource: A,
                            pinsResource: S,
                            musicHistoryResource: k,
                            dynamicPagesResource: I,
                            chartResource: w,
                            clipsResource: R,
                            lyricViewsResource: O,
                            nonMusicResource: j,
                            donationResource: P,
                            loaderResource: L,
                            lumenResource: D,
                            prefixlessResource: M,
                            streamsResource: K,
                            filtersResource: W,
                            ugcResource: G,
                            collectionResource: H,
                            adsResource: F,
                            personalResource: Y,
                            familyResource: U,
                            childrenLandingResource: z,
                            promoResource: B,
                            telemetryResource: V,
                            labelsResource: $,
                            concertsResource: X,
                            wordsResource: e.get(a.dA),
                            wheelResource: e.get(a.$Y),
                        };
                    })(),
                    u = (0, s.U)(),
                    m = (0, i.N)().get(a.TK),
                    g = e.get(a.ni),
                    _ = new r.si(),
                    h = new r.fW();
                return {
                    ...d,
                    acqOffers: n,
                    disclaimerDictionary: l,
                    logger: u,
                    modelActionsLogger: m,
                    localStorage: _,
                    sessionStorage: h,
                    containerStorage: t,
                    config: o,
                    clientSafeConfig: c,
                    landingSdk: g,
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
        89514: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        94421: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => a, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
        95600: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { default: () => U }));
            var r = n(25839),
                a = n(84059),
                i = n(74631),
                s = n(80499),
                l = n(82706),
                o = n(28410),
                c = n(82413),
                d = n(69635),
                u = n(51751),
                m = n(36159),
                g = n(19835),
                _ = n(95897);
            let h = o.gK
                    .compose(o.gK.model('ConcertsDetailsPage', { concerts: o.gK.maybeNull(o.gK.array(d.a)), title: o.gK.maybeNull(o.gK.string) }), g.X, _.p)
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
                                    e.loadingState = m.G.PENDING;
                                    let { concerts: t } = (0, u.M)(e),
                                        i = t.concertsLocationForRequest,
                                        { items: s, title: l } = yield a.getConcertsDetails({ type: n, id: r, locations: i });
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
            var y = n(88204),
                E = n(39004),
                C = n(71035),
                x = n(68934),
                f = n(13833),
                N = n(4254),
                b = n(78299),
                T = n(1407),
                A = n(40489),
                S = n(32190),
                k = n(82904),
                I = n(28924),
                w = n(61777),
                R = n(21784),
                O = n(89192),
                j = n(27954),
                P = n(44806),
                L = n(99401),
                D = n(26076),
                M = n(10603),
                K = n(67444),
                W = n.n(K);
            let G = (0, y.PA)((e) => {
                let { type: t, id: n } = e,
                    o = (0, i.useId)(),
                    c = (0, s.s)(l.n.CONCERTS_DETAILS),
                    { experiments: d } = (0, j.g)(),
                    { formatMessage: u } = (0, E.A)(),
                    { contentScrollRef: m, setContentScrollRef: g } = (0, O.g)(),
                    _ = (0, R.W)(),
                    [h, p] = (0, x.d)(),
                    v = (0, w.f)(),
                    y = (0, i.useRef)(!1),
                    K = d.checkExperiment(P.z.WebNextConcertsIdentityEventType, 'on'),
                    G = (0, C.c)(() => {
                        var e;
                        return !c.isShimmerVisible && (null == (e = c.concerts) ? void 0 : e.length) ? c.concerts.length : 50;
                    }),
                    {
                        virtualizer: H,
                        rowResizeObserver: F,
                        columnCount: Y,
                        indices: U,
                    } = (0, A.L)({
                        count: G(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: h,
                    }),
                    z = { '--feed-concerts-height': ''.concat(H.getTotalSize(), 'px'), '--feed-concerts-column-count': Y },
                    B = (0, i.useCallback)(
                        (e) => {
                            var t;
                            let n = null == (t = c.concerts) ? void 0 : t[e];
                            return !n || c.isShimmerVisible ? (0, r.jsx)(I.L, { isActive: c.isShimmerActive, withMeta: !0 }) : (0, r.jsx)(k.Q, { concert: n });
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
                        c.isResolved && !y.current && (v(), (y.current = !0));
                    }, [c.isResolved, v]),
                    c.isNeededToLoad && (0, i.use)(c.getData({ type: t, id: n })),
                    d.checkExperiment(P.z.WebNextConcertsDetailsPage, 'on') || (0, a.notFound)(),
                    c.isRejected)
                )
                    return (0, r.jsx)(b.SomethingWentWrong, {});
                let V = K && c.title ? c.title : u({ id: 'concerts.details-title' });
                return (0, r.jsx)(T.h, {
                    scrollElement: m,
                    outerTitle: V,
                    children: (0, r.jsxs)('div', {
                        className: W().root,
                        children: [
                            (0, r.jsx)(M.Y, {
                                variant: M.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: _.canBack,
                                children: (0, r.jsx)(N.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: V }),
                            }),
                            (0, r.jsxs)(f.N, {
                                ref: g,
                                className: W().scrollContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: W().content,
                                        children: (0, r.jsx)('div', {
                                            'aria-labelledby': o,
                                            ref: p,
                                            style: z,
                                            className: W().container,
                                            children: H.getVirtualItems().map((e) =>
                                                (0, r.jsx)(
                                                    S.U,
                                                    {
                                                        className: W().row,
                                                        columnClassName: W().column,
                                                        virtualItem: e,
                                                        resizeObserver: F,
                                                        indices: U,
                                                        renderItemByIndex: B,
                                                        scrollMargin: H.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, r.jsx)(D.A, { children: (0, r.jsx)(L.w, { className: W().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var H = n(23976);
            let F = (e) => (0, r.jsx)(I.L, { isActive: !0, withMeta: !0 }, e),
                Y = () => {
                    let e = (0, R.W)(),
                        { contentScrollRef: t, setContentScrollRef: n } = (0, O.g)(),
                        [a, i] = (0, x.d)(),
                        { formatMessage: s } = (0, E.A)(),
                        l = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.concert' }) }),
                        {
                            virtualizer: o,
                            rowResizeObserver: c,
                            columnCount: d,
                            indices: u,
                        } = (0, A.L)({
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
                    return (0, r.jsx)(T.h, {
                        scrollElement: t,
                        children: (0, r.jsxs)('div', {
                            className: W().root,
                            children: [
                                (0, r.jsx)(M.Y, {
                                    variant: M.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(H.W, { className: W().shimmerTitle, radius: 'xxxl' }),
                                }),
                                (0, r.jsx)(f.N, {
                                    ref: n,
                                    className: W().scrollContainer,
                                    children: (0, r.jsx)('div', {
                                        className: W().content,
                                        children: (0, r.jsx)('div', {
                                            'aria-label': l,
                                            ref: i,
                                            style: m,
                                            className: W().container,
                                            children: o.getVirtualItems().map((e) =>
                                                (0, r.jsx)(
                                                    S.U,
                                                    {
                                                        className: W().row,
                                                        columnClassName: W().column,
                                                        virtualItem: e,
                                                        resizeObserver: c,
                                                        indices: u,
                                                        renderItemByIndex: F,
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
                U = () => {
                    let e = (0, a.useSearchParams)(),
                        t = e.get('type'),
                        n = e.get('id');
                    return (
                        (t && n) || (0, a.notFound)(),
                        (0, r.jsx)(v, { children: (0, r.jsx)(i.Suspense, { fallback: (0, r.jsx)(Y, {}), children: (0, r.jsx)(G, { type: t, id: n }) }) })
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
        98288: (e, t, n) => {
            'use strict';
            n.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        99401: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => T });
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
            var m = n(10959),
                g = n(89514);
            let _ = (e) => e(new Date(), (0, g.m)());
            var h = n(96433),
                p = n(27954),
                v = n(400),
                y = n.n(v),
                E = n(61493),
                C = n(4254),
                x = n(97522);
            let f = (e) => {
                    let { className: t, data: n } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(y().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    n.year,
                                    ' \xa0',
                                    (0, r.jsx)(x.N, {
                                        target: '_blank',
                                        href: n.yandexMusic.url,
                                        className: (0, a.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: n.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(x.N, {
                                target: '_blank',
                                href: n.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: n.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: n } = e;
                    return (0, r.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: y().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: n.map((e) => {
                                    let { id: t, title: n, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, r.jsx)(x.N, { target: '_blank', href: a, className: y().link, 'data-test-id': E.S7.FOOTER_LINK, children: n }),
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
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { className: t, data: n } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(y().root, y().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, r.jsx)(N, { links: n.links, disclaimer: n.disclaimer }), (0, r.jsx)(f, { data: n.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: n } = (0, p.g)(),
                    { formatDate: a, formatMessage: i } = (0, s.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: i, language: l, tld: n.tld, year: _(a) });
                return (0, r.jsx)(f, { className: t, data: o });
            });
            let T = (0, i.PA)((e) => {
                var t;
                let { className: n } = e,
                    { experiments: i, location: g, user: v } = (0, p.g)(),
                    { formatDate: E, formatMessage: C } = (0, s.A)(),
                    { isEnabled: x } = null != (t = (0, o.P)()) ? t : {},
                    { language: f } = (0, h.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: n, isWebApplication: r, language: a, tld: i, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: n, tld: r, language: a, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, a) },
                                    g = [s, o, u];
                                return (n && 'ru' === i && g.push(l), g.push(m), g);
                            })({ formatMessage: n, isWebApplication: r, language: a, tld: i, userRegion: s }),
                            disclaimer: (0, m.v)({
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
                        tld: g.tld,
                        language: f,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(E),
                    });
                return (0, r.jsx)(b, { className: (0, a.$)({ [y().root_withOffsetForDeeplink]: x }, n), data: N });
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
                3349, 1676, 7349, 1107, 543, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 1817, 1943, 4361, 7869, 3269, 4163, 3246, 4517, 3482, 6504, 8836,
                4434, 5622, 4475, 5056, 7358,
            ],
            () => e((e.s = 53228)),
        ),
            (_N_E = e.O()));
    },
]);
