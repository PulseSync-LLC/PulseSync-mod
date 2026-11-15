(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2816],
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
        10270: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => l });
            var n = a(56949),
                r = a(53548),
                i = a(29993),
                s = a(44230),
                c = a(72288);
            let o = { width: 400, height: 400 },
                l = (e) => {
                    let { count: t, getEstimateSize: a, gap: l, containerRef: d, overscan: m = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, c.g)(),
                        { contentScrollRef: h } = (0, s.g)(),
                        u = (0, r.useRef)(new Map()),
                        p = (0, r.useRef)(void 0),
                        g = {
                            count: t,
                            gap: l,
                            estimateSize: (e) => {
                                let t = u.current.get(String(e));
                                return null != t ? t : a(e);
                            },
                            overscan: m,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, a) => {
                                if (!t) return 0;
                                let n = t.getBoundingClientRect().top;
                                return e && 1 ? n + window.scrollY : !e && a ? n + a.scrollTop : 0;
                            })(_, d, h),
                        },
                        v = (0, n.XW)(g),
                        C = (0, n.Te)({ ...g, getScrollElement: () => h, initialOffset: null == h ? void 0 : h.scrollTop }),
                        x = _ ? v : C,
                        b = (0, i.c)(() => {
                            x.measure();
                        });
                    return (
                        (0, r.useEffect)(() => {
                            p.current ||
                                (p.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let a = e.target.getAttribute('data-index');
                                        if (e.target && a) {
                                            let n = e.contentRect.height;
                                            n && n !== u.current.get(a) && (u.current.set(a, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && b());
                                }));
                        }, [b]),
                        { virtualizer: x, resizeObserver: p.current }
                    );
                };
        },
        12533: (e, t, a) => {
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
        13060: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => d });
            var n = a(88800),
                r = a(65724),
                i = a(17392),
                s = a(52300),
                c = a(29504),
                o = a(19872),
                l = a.n(o);
            let d = (e) => {
                let { title: t, className: a, titleClassName: o, valuePercent: d } = e;
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(l().root, a),
                    children: [
                        (0, n.jsx)(s.I, { 'aria-hidden': !0, className: l().icon, variant: 'plus' }),
                        (0, n.jsx)(c.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, r.$)(l().title, o),
                            'data-test-id': i.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        19872: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        22989: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        31423: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        32596: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => R });
            var n = a(88800),
                r = a(65724),
                i = a(84961),
                s = a(53548),
                c = a(2058),
                o = a(88969);
            a(30282);
            var l = a(96817),
                d = a(52300),
                m = a(29504),
                _ = a(87999),
                h = a(47149),
                u = a(84423),
                p = a(89846),
                g = a(64543),
                v = a(63582);
            let C = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, u.s)()) ? void 0 : e.evgenInstance,
                        { hash: a } = (0, p.g)(),
                        { screen: n } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, s.useCallback)(() => {
                            if (!t || !a || !(null == n ? void 0 : n.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: a,
                                pageId: n.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, h.bv)(t, e);
                        }, [t, a, null == n ? void 0 : n.pageId]),
                    };
                }),
                x = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let a = null == (t = (0, u.s)()) ? void 0 : t.evgenInstance,
                        { hash: n } = (0, p.g)(),
                        { screen: r } = (0, g.j)();
                    (0, s.useEffect)(() => {
                        if (!a || !n || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: n,
                            pageId: r.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, h.z5)(a, t);
                    }, [a, e, n, null == r ? void 0 : r.pageId]);
                });
            var b = a(44230),
                y = a(4370),
                N = a(72288),
                k = a(97956),
                E = a(56248),
                w = a(90688),
                j = a(78940);
            let f = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var T = a(96856),
                A = a.n(T);
            let I = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: i } = e,
                    { slam: s } = (0, N.g)(),
                    { contentRef: c } = (0, b.g)(),
                    d = (0, j.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(A().root, t),
                    children: [
                        a &&
                            (0, n.jsx)(E.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(A().navigation, { [A().navigation_desktop]: !c }),
                                withForwardControl: !1,
                                onBackwardClick: i,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, r.$)(A().content, { [A().content_shrink]: !a }),
                            children: [
                                (0, n.jsx)(w._V, { className: A().image, src: f.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, n.jsx)(m.DZ, {
                                            className: A().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(m.HL, {
                                            className: A().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, n.jsx)(l.$, {
                                        className: A().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(m.HL, {
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
            var O = a(9184),
                S = a.n(O);
            let R = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: i } = e,
                    { formatMessage: _ } = (0, c.A)(),
                    h = (0, s.useContext)(N.P),
                    u = null == h ? void 0 : h.experiments.checkExperiment(k.z.WebNextUnstableMusicScreen, 'on'),
                    p = _(u ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                x(p);
                let { sendRefreshEvent: g } = C(),
                    v = (0, s.useCallback)(() => {
                        (g(), (window.location.href = y.Z.main.href));
                    }, [g]),
                    { contentRef: w } = (0, b.g)();
                return u
                    ? (0, n.jsx)(I, { className: t, withBackwardControl: a, onBack: i })
                    : (0, n.jsxs)('div', {
                          className: (0, r.$)(S().root, t),
                          children: [
                              a &&
                                  (0, n.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(S().navigation, { [S().navigation_desktop]: !w }),
                                      withForwardControl: !1,
                                      onBackwardClick: i,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, r.$)(S().content, { [S().content_shrink]: !a }),
                                  children: [
                                      (0, n.jsx)(d.I, { className: S().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(m.DZ, { className: (0, r.$)(S().title, S().important), variant: 'h3', size: 'xs', children: p }),
                                      (0, n.jsxs)(m.HL, {
                                          className: (0, r.$)(S().text, S().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(l.$, {
                                          onClick: v,
                                          className: S().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(m.HL, {
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
        33075: (e) => {
            e.exports = { root: 'CashbackPercentBadge_root__rP2Rj', icon: 'CashbackPercentBadge_icon__dq7pE', text: 'CashbackPercentBadge_text__Uol3I' };
        },
        36930: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var n = a(88800),
                r = a(19994),
                i = a(78373),
                s = a.n(i);
            let c = (e) => {
                let { isActive: t, withMeta: a, withPriceButton: i } = e;
                return (0, n.jsxs)('div', {
                    className: s().root,
                    children: [
                        (0, n.jsx)(r.W, { radius: 'm', className: s().shimmerCover, isActive: t }),
                        (0, n.jsxs)('div', {
                            className: s().meta,
                            children: [
                                (0, n.jsx)(r.W, { isActive: t, radius: 'xxxl', className: s().shimmerTitle }),
                                a &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(r.W, { isActive: t, radius: 'xxxl', className: s().shimmerInfo }),
                                            (0, n.jsx)(r.W, { isActive: t, radius: 'xxxl', className: s().shimmerCity }),
                                        ],
                                    }),
                            ],
                        }),
                        i && (0, n.jsx)(r.W, { isActive: t, radius: 'xxxl', className: s().shimmerButton }),
                    ],
                });
            };
        },
        38371: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => R });
            var n = a(88800),
                r = a(84961),
                i = a(88969),
                s = a(87999),
                c = a(62414),
                o = a(80643),
                l = a(17392),
                d = a(29993),
                m = a(79070),
                _ = a(78275),
                h = a(96817),
                u = a(73170),
                p = a(29504),
                g = a(78940),
                v = a(72288),
                C = a(97956),
                x = a(49176),
                b = a(67174),
                y = a(76484),
                N = a(44167),
                k = a(13060);
            let E = ' • ',
                w = (e, t) => {
                    let a = [];
                    return (e.city && a.push(e.city), e.place && a.push(e.place), a.join(t));
                };
            var j = a(95960),
                f = a.n(j);
            let T = (0, r.PA)((e) => {
                let { concert: t, cashback: a } = e;
                return (0, n.jsxs)('div', {
                    className: f().meta,
                    children: [
                        (0, n.jsx)(p.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: f().title,
                            'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, n.jsxs)(p.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: f().info,
                            children: [
                                (0, n.jsx)(p.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: f().location,
                                    'aria-label': w(t, ' '),
                                    'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                                    children: w(t, E),
                                }),
                                (0, n.jsx)(p.HL, { 'aria-hidden': !0, className: f().separator, variant: 'span', type: 'controls', weight: 'medium', children: E }),
                                (0, n.jsx)(p.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: f().rating,
                                    'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        a,
                    ],
                });
            });
            var A = a(52018),
                I = a(72876),
                O = a(78373),
                S = a.n(O);
            let R = (0, r.PA)((e) => {
                var t, a, r;
                let { concert: E, withMask: w = !0, withPriceButton: j, withInlineMeta: f = !1 } = e,
                    { state: O, toggleTrue: R, toggleFalse: W } = (0, _.e)(!1),
                    P = (0, c.D)(),
                    { experiments: L } = (0, v.g)(),
                    M = L.checkExperiment(C.z.WebNextConcertPage, 'on'),
                    D = (0, o.S)(),
                    H = (0, y.Y)(),
                    { href: z } = (0, b.u)('/concert/:concertId', { params: { concertId: E.id } }),
                    B = (0, g.Z)(z),
                    U = H(E),
                    F = (0, d.c)((e) => {
                        (D({ to: s.AppScreen.ConcertPurchaseScreen }), R(), null == e || e.stopPropagation());
                    }),
                    $ = (0, d.c)((e) => {
                        if (!M) return void F(e);
                        (D({ to: s.AppScreen.ConcertScreen }), B(e));
                    }),
                    G = (0, d.c)((e) => {
                        (e.code === x.v.SPACE || e.code === x.v.ENTER) && (e.preventDefault(), $());
                    }),
                    Z = (0, d.c)((e) => {
                        M && (F(e), e.preventDefault());
                    }),
                    K = (0, m.L)(() => {
                        let e = E.isIdentityExperimentEnabled && E.cashbackValuePercent,
                            t = !E.isIdentityExperimentEnabled && E.isCashbackExperimentEnabled && E.cashbackTitle;
                        if (e || t)
                            return (0, n.jsx)(k.m, {
                                className: S().cashback,
                                titleClassName: S().cashbackTitle,
                                title: E.cashbackTitle,
                                valuePercent: E.cashbackValuePercent,
                            });
                    }),
                    V = (0, n.jsx)(A.M, { concert: E, withCashback: !1, withInlineMeta: f, titleSize: 'l' }),
                    Y = (0, n.jsx)(T, { concert: E, cashback: K });
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)('div', {
                            className: S().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: $,
                            onKeyDown: G,
                            ref: P,
                            'data-test-id': l.OA.concert.CONCERT_CARD,
                            children: [
                                (0, n.jsx)(u.q, { children: (0, n.jsx)(p.HL, { variant: 'div', children: (0, n.jsx)(i.A, { id: 'entity-names.concert' }) }) }),
                                (0, n.jsx)('div', {
                                    className: S().cover,
                                    children: (0, n.jsx)(I.W, {
                                        datetime: E.datetime,
                                        coverColor: null == (t = E.cover) ? void 0 : t.color,
                                        uri: null == (a = E.cover) ? void 0 : a.uri,
                                        withMask: w,
                                        cashbackPercent: E.isIdentityExperimentEnabled ? E.cashbackValuePercent : void 0,
                                    }),
                                }),
                                E.isIdentityExperimentEnabled ? V : Y,
                                !!(null == (r = E.price) ? void 0 : r.value) && (0, n.jsx)(u.q, { children: (0, n.jsx)(p.HL, { variant: 'div', children: U }) }),
                                j &&
                                    (0, n.jsx)(h.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: S().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: Z,
                                        'data-test-id': l.OA.concert.CONCERT_CARD_BUTTON,
                                        children: U,
                                    }),
                            ],
                        }),
                        (0, n.jsx)(N.h, { dataSessionId: E.dataSessionId, isOpened: O, onOpen: R, onClose: W }),
                    ],
                });
            });
        },
        44167: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => x });
            var n = a(88800),
                r = a(53548),
                i = a(2058),
                s = a(30282),
                c = a(17392),
                o = a(96817),
                l = a(11372),
                d = a(73170),
                m = a(4086),
                _ = a(41928),
                h = a(12149),
                u = a(58390),
                p = a(12533),
                g = a(34303),
                v = a(31423),
                C = a.n(v);
            let x = (e) => {
                let { dataSessionId: t, isOpened: a, onOpen: v, onClose: x } = e,
                    b = (0, _.N)().get(m.V4),
                    { formatMessage: y } = (0, i.A)(),
                    N = (() => {
                        let e = (0, u.useSearchParams)();
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
                    k = (0, r.useCallback)(
                        (e) => {
                            e.origin === b.afisha.host && 'close' === e.data.type && x();
                        },
                        [x, b.afisha.host],
                    );
                (0, r.useEffect)(
                    () => (
                        window.addEventListener('message', k),
                        () => {
                            window.removeEventListener('message', k);
                        }
                    ),
                    [k],
                );
                let E = (0, r.useCallback)(
                        (e) => {
                            e ? v() : x();
                        },
                        [x, v],
                    ),
                    w = (0, s.tE)(b, (0, h.u)()),
                    j = N(''.concat(b.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(w));
                return (0, n.jsxs)(l.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: a,
                    onOpenChange: E,
                    onClose: x,
                    showHeader: !1,
                    className: C().widget,
                    contentClassName: C().content,
                    overlayColor: 'full',
                    'data-test-id': c.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, n.jsx)(d.q, { children: (0, n.jsx)(o.$, { 'aria-label': y({ id: 'interface-actions.close' }), onClick: x }) }),
                        (0, n.jsx)('iframe', {
                            src: j,
                            className: C().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        49176: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => n });
            var n = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        52018: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => h });
            var n = a(88800),
                r = a(84961),
                i = a(53548),
                s = a(88969),
                c = a(17392),
                o = a(79070),
                l = a(29504),
                d = a(13060),
                m = a(95960),
                _ = a.n(m);
            let h = (0, r.PA)((e) => {
                let { id: t, concert: a, withCashback: r = !0, withInlineMeta: m = !1, titleSize: h = 'm' } = e,
                    u = [],
                    p = (0, n.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == a ? void 0 : a.eventKind) &&
                    u.push(
                        (0, n.jsx)(l.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': c.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, n.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: a.eventKind } }),
                        }),
                    ),
                    (null == a ? void 0 : a.contentRating) &&
                        u.push(
                            p,
                            (0, n.jsx)(l.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': c.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: a.contentRating,
                            }),
                        ));
                let g = (0, o.L)(() =>
                    (null == a ? void 0 : a.city)
                        ? (0, n.jsx)(l.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': c.OA.concert.CONCERT_CARD_LOCATION,
                              children: a.city,
                          })
                        : null,
                );
                return (
                    m && g && u.push(p, g),
                    (0, n.jsxs)('div', {
                        className: _().root,
                        id: t,
                        children: [
                            (0, n.jsx)(l.HL, {
                                variant: 'div',
                                size: h,
                                weight: 'medium',
                                className: _().city,
                                lineClamp: 1,
                                'data-test-id': c.OA.concert.CONCERT_CARD_TITLE,
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, n.jsx)('div', { className: _().info, children: u.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !m && g,
                            r &&
                                (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, n.jsx)(d.m, { className: _().cashback, valuePercent: a.cashbackValuePercent }),
                            r &&
                                !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, n.jsx)(d.m, { className: _().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        60201: (e) => {
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
        72876: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => j });
            var n,
                r,
                i = a(88800),
                s = a(65724),
                c = a(84961),
                o = a(53548),
                l = a(17392),
                d = a(79070),
                m = a(90688),
                _ = a(72288),
                h = a(97956),
                u = a(35412);
            let p = (e) => (0, u.a6)(e.replace('%%', '960x690_noncrop'));
            var g = a(88969),
                v = a(29504);
            function C() {
                return (C = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let x = function (e) {
                return o.createElement(
                    'svg',
                    C({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
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
                    r ||
                        (r = o.createElement(
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
            var b = a(33075),
                y = a.n(b);
            let N = (e) => {
                let { percent: t, className: a } = e;
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(y().root, a),
                    'data-test-id': l.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, i.jsx)(x, { 'aria-hidden': !0, className: y().icon }),
                        (0, i.jsx)(v.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: y().text,
                            children: (0, i.jsx)(g.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var k = a(74250),
                E = a(60201),
                w = a.n(E);
            let j = (0, c.PA)((e) => {
                let { uri: t, withMask: a, datetime: n, coverColor: r, cashbackPercent: c } = e,
                    { experiments: g } = (0, _.g)(),
                    [v, C] = (0, o.useState)(!1),
                    x = g.checkExperiment(h.z.NewConcertsTicketRedesign, 'on') && a,
                    b = g.checkExperiment(h.z.WebNextConcertsIdentityEventType, 'on'),
                    y = (0, o.useCallback)(() => {
                        C(!0);
                    }, []),
                    E = (0, d.L)(() => {
                        if (r)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: a, l: n } = (0, u.g8)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(a, '%, ')
                                        .concat(n <= 55 ? n + 20 : n - 20, '%)');
                                })(r),
                            };
                    }),
                    j = (0, d.L)(() =>
                        n
                            ? (0, i.jsxs)('div', {
                                  className: (0, s.$)(w().date, { [w().date_withEventType]: b }),
                                  children: [
                                      (0, i.jsx)(m._V, {
                                          className: w().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: y,
                                      }),
                                      v &&
                                          (0, i.jsx)(k.d, {
                                              className: w().root_withEventType,
                                              dayClassName: w().day_withEventType,
                                              weekdayClassName: w().weekday_withEventType,
                                              monthClassName: w().month_withEventType,
                                              datetime: n,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    f = (0, d.L)(() =>
                        n
                            ? (0, i.jsx)(k.d, {
                                  dayClassName: w().day,
                                  weekdayClassName: (0, s.$)(w().weekday, w().important),
                                  monthClassName: w().month,
                                  className: w().date,
                                  datetime: n,
                              })
                            : null,
                    );
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(w().root, { [w().root_withMask]: x }),
                    style: E,
                    children: [
                        (0, i.jsx)(m._V, {
                            className: w().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: p,
                            'aria-hidden': !0,
                            'data-test-id': l.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        n && (b ? j : f),
                        b && c && (0, i.jsx)(N, { className: w().cashback, percent: c }),
                    ],
                });
            });
        },
        74250: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => m });
            var n = a(88800),
                r = a(65724),
                i = a(2058),
                s = a(17392),
                c = a(29504),
                o = a(32414),
                l = a(22989),
                d = a.n(l);
            let m = (e) => {
                let { datetime: t, className: a, monthClassName: l, dayClassName: m, weekdayClassName: _, withWeekday: h = !0, ...u } = e,
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
                    ...u,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, n.jsx)(c.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, r.$)(d().month, l),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: g,
                        }),
                        (0, n.jsx)(c.HL, {
                            variant: 'div',
                            className: (0, r.$)(d().day, m),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: p(t, { day: 'numeric' }),
                        }),
                        h &&
                            (0, n.jsx)(c.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, r.$)(d().weekday, _),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: p(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        76484: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var n = a(2058),
                r = a(29993);
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
        78373: (e) => {
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
        95960: (e) => {
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
    },
]);
