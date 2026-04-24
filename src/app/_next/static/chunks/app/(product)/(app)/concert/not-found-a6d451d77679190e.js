(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7290],
    {
        7540: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => a });
            var n = r(62936),
                o = r(89454);
            let a = () => (0, n.jsx)(o.bp, {});
        },
        10076: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let n = r(36283)._(r(23772));
            function o(e, t) {
                var r;
                let o = {};
                'function' == typeof e && (o.loader = e);
                let a = { ...o, ...t };
                return (0, n.default)({ ...a, modules: null == (r = a.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        19004: (e) => {
            e.exports = {
                root: 'ConcertPage_root__pqTvU',
                averageColorBackground: 'ConcertPage_averageColorBackground__wj67a',
                header: 'ConcertPage_header__FxHk1',
                container: 'ConcertPage_container__ca9h4',
                footer: 'ConcertPage_footer____Dnb',
                skeleton: 'ConcertPage_skeleton__8aWkf',
                error: 'ConcertPage_error__gcEp_',
            };
        },
        23772: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
            let n = r(62936),
                o = r(44020),
                a = r(24571);
            function l(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(46950);
            let s = { loader: () => Promise.resolve(l(() => null)), loading: null, ssr: !0 },
                i = function (e) {
                    let t = { ...s, ...e },
                        r = (0, o.lazy)(() => t.loader().then(l)),
                        i = t.loading;
                    function c(e) {
                        let l = i ? (0, n.jsx)(i, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            c = s ? o.Suspense : o.Fragment,
                            u = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(r, { ...e })] })
                                : (0, n.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(r, { ...e }) });
                        return (0, n.jsx)(c, { ...(s ? { fallback: l } : {}), children: u });
                    }
                    return (c.displayName = 'LoadableComponent'), c;
                };
        },
        24571: (e, t, r) => {
            'use strict';
            function n(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(71279);
        },
        32145: (e) => {
            e.exports = { icon: 'ConcertNotFoundPage_icon__9yJIB' };
        },
        36118: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => p });
            var n = r(62936),
                o = r(79950),
                a = r(19718),
                l = r(44020),
                s = r(47480),
                i = r(26731),
                c = r(5099),
                u = r(85742),
                d = r(20418),
                m = r(42561),
                g = r(85906),
                f = r(52166),
                _ = r.n(f);
            let p = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: a } = (0, s.A)(),
                    f = a({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(f);
                let { sendRefreshEvent: p } = (0, m.cYT)(),
                    v = (0, l.useCallback)(() => {
                        p(), (window.location.href = m.Zyd.main.href);
                    }, [p]),
                    { contentRef: b } = (0, m.gKY)();
                return (0, n.jsxs)('div', {
                    className: (0, o.$)(_().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(g.Lh, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(_().navigation, { [_().navigation_desktop]: !b }),
                                withForwardControl: !1,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, o.$)(_().content, { [_().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(u.Icon, { className: _().icon, variant: 'attention', size: 'xxl' }),
                                (0, n.jsx)(d.Heading, { className: (0, o.$)(_().title, _().important), variant: 'h3', size: 'xs', children: f }),
                                (0, n.jsxs)(d.Caption, {
                                    className: (0, o.$)(_().text, _().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, n.jsx)(i.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, n.jsx)(c.$, {
                                    onClick: v,
                                    className: _().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, n.jsxs)(d.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, n.jsx)(i.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        36179: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => d });
            var n,
                o,
                a = r(62986),
                l = r(44020),
                s = r(47480);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(n || (n = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(o || (o = {}));
            var i = function (e) {
                var t = (0, s.A)(),
                    r = e.value,
                    n = e.children,
                    o = (0, a.__rest)(e, ['value', 'children']);
                return n(t.formatNumberToParts(r, o));
            };
            function c(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        n = t.value,
                        o = t.children,
                        l = (0, a.__rest)(t, ['value', 'children']),
                        i = 'string' == typeof n ? new Date(n || 0) : n;
                    return o('formatDate' === e ? r.formatDateToParts(i, l) : r.formatTimeToParts(i, l));
                };
                return (t.displayName = o[e]), t;
            }
            function u(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        n = t.value,
                        o = t.children,
                        i = (0, a.__rest)(t, ['value', 'children']),
                        c = r[e](n, i);
                    if ('function' == typeof o) return o(c);
                    var u = r.textComponent || l.Fragment;
                    return l.createElement(u, null, c);
                };
                return (t.displayName = n[e]), t;
            }
            (i.displayName = 'FormattedNumberParts'), (i.displayName = 'FormattedNumberParts');
            var d = u('formatDate');
            u('formatTime'), u('formatNumber'), u('formatList'), u('formatDisplayName'), c('formatDate'), c('formatTime');
        },
        46950: (e, t, r) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(62936),
                r(2933),
                r(34397),
                r(5300);
        },
        49351: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => o.a });
            var n = r(10076),
                o = r.n(n);
        },
        52166: (e) => {
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
        55551: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => u });
            var n,
                o = r(49327),
                a = r(44020),
                l = {
                    6699: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let n = r(352),
                            o = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: a } = e,
                                l = (0, o.useRef)(null),
                                [s, i] = (0, o.useState)(!!r),
                                c = (0, o.useMemo)(
                                    () =>
                                        (0, n.throttle)(() => {
                                            i(!r),
                                                l.current && window.clearTimeout(l.current),
                                                (l.current = window.setTimeout(() => {
                                                    i(!!r);
                                                }, t));
                                        }, a),
                                    [t, r, a],
                                ),
                                u = (0, o.useCallback)(() => {
                                    i(!!r), l.current && window.clearTimeout(l.current);
                                }, [r]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        l.current && window.clearTimeout(l.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: c, reset: u }
                            );
                        };
                    },
                    2767: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0);
                        let n = r(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, n.useState)(null);
                            return [
                                e,
                                (0, n.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    2067: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0);
                        let n = r(810),
                            o = r(361),
                            a = r(6699);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: l } = e,
                                { state: s, handleDebouncedToggle: i } = (0, a.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                c = (0, n.useCallback)(() => {
                                    r && i(), null == t || t();
                                }, [r, i, t]);
                            return (
                                (0, n.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(l);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return t.addEventListener('scroll', c, r), () => t.removeEventListener('scroll', c, r);
                                }, [l, c]),
                                s
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                s = {};
            function i(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return l[e](r, r.exports, i), r.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, '__esModule', { value: !0 }), (c.useElementOffsetY = void 0);
                let e = i(810),
                    t = i(2067),
                    r = i(2767);
                c.useElementOffsetY = (n) => {
                    let [o, a] = (0, r.useForceUpdateRef)(),
                        [l, s] = (0, e.useState)(),
                        i = (0, e.useCallback)(() => {
                            let e = null == o ? void 0 : o.getBoundingClientRect();
                            e && s(e.y);
                        }, [o]);
                    return (0, e.useLayoutEffect)(i), (0, t.useScroll)({ onScroll: i, elementRef: n }), { forceUpdateRefCallback: a, offsetY: l };
                };
            })(),
                c.__esModule;
            var u = c.useElementOffsetY;
        },
        56610: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 7540));
        },
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        65438: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n.SomethingWentWrong });
            var n = r(36118);
        },
        89454: (e, t, r) => {
            'use strict';
            r.d(t, { bp: () => j, A6: () => L, Bd: () => d });
            var n = r(51606);
            let o = n.gK.model('ConcertDescription', { text: n.gK.string, genre: n.gK.maybe(n.gK.string), source: n.gK.maybe(n.gK.string) });
            var a = r(14525),
                l = r(22991),
                s = r(81628),
                i = r(16616),
                c = r(42561),
                u = r(54690);
            let d = n.gK
                .compose(
                    n.gK.model('ConcertPage', {
                        meta: n.gK.maybeNull(i.aR),
                        covers: n.gK.maybeNull(n.gK.array(u.$B)),
                        description: n.gK.maybeNull(o),
                        leadArtistId: n.gK.maybeNull(n.gK.union(n.gK.string, n.gK.number)),
                        artists: n.gK.maybeNull(n.gK.array(s.PK)),
                        errorStatusCode: n.gK.maybeNull(n.gK.number),
                        landing: l.Ju,
                    }),
                    u.XT,
                    u.pl,
                )
                .views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                    get isNotFound() {
                        return e.isRejected && (e.errorStatusCode === a.X1.NOT_FOUND || e.errorStatusCode === a.X1.BAD_REQUEST);
                    },
                    get coversUri() {
                        var t, r;
                        return null != (r = null == (t = e.covers) ? void 0 : t.map((e) => e.uri).filter((e) => !!e)) ? r : [];
                    },
                }))
                .actions((e) => ({
                    getInfo: (0, n.L3)(function* (t) {
                        let { concertId: r } = t,
                            { concertsResource: o, modelActionsLogger: l } = (0, n._$)(e);
                        if (!e.isLoading)
                            try {
                                e.loadingState = c.GuX.PENDING;
                                let { concert: t, minPrice: a, covers: l, description: u, leadArtistId: d, artists: m } = yield o.getInfo({ concertId: r });
                                (e.meta = (0, i.ho)(t, a)),
                                    (e.covers = (0, n.wg)(null == l ? void 0 : l.map((e) => (0, c.pX4)(e)))),
                                    (e.description = u ? (0, n.wg)(u) : null),
                                    (e.leadArtistId = d ? (0, n.wg)(d) : null),
                                    (e.artists = (0, n.wg)(null == m ? void 0 : m.map((e) => (0, s.dM)(e)))),
                                    (e.loadingState = c.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t),
                                    t instanceof a.GX && (t.statusCode === a.X1.NOT_FOUND || t.statusCode === a.X1.BAD_REQUEST) && (e.errorStatusCode = a.X1.NOT_FOUND),
                                    (e.loadingState = c.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = c.GuX.IDLE), e.landing.reset(), (e.leadArtistId = null), e.destroyItems([e.covers, e.description, e.artists]);
                    },
                }));
            var m = r(62936),
                g = r(19718),
                f = r(44020),
                _ = r(47480),
                p = r(9939),
                v = r(32145),
                b = r.n(v);
            let h = (0, g.PA)(() => {
                    let { experiments: e, concert: t } = (0, c.Pjs)(),
                        { formatMessage: r } = (0, _.A)(),
                        n = e.checkExperiment(c.zal.WebNextConcertPage, 'on');
                    if (
                        ((0, c.ACS)(),
                        (0, f.useEffect)(
                            () => () => {
                                t.reset();
                            },
                            [t],
                        ),
                        !n)
                    )
                        return (0, m.jsx)(p.M, {});
                    let o = r({ id: 'page-error.concert-page-does-not-exist' }),
                        a = r({ id: 'page-error.concert-page-does-not-exist-description' });
                    return (0, m.jsx)(p.M, { title: o, description: a, iconVariant: 'attention', iconSize: 'xxl', iconClassName: b().icon });
                }),
                j = (0, g.PA)(() => (0, m.jsx)(c.nVz, { pageId: c._Q$.PAGE_NOT_FOUND_SCREEN, children: (0, m.jsx)(h, {}) }));
            var x = r(69526),
                C = r(33782),
                y = r(23480),
                N = r(8669),
                P = r(44262),
                E = r(59935),
                k = r(55551),
                O = r(60188),
                S = r(14501),
                T = r(35085),
                w = r(65438),
                F = r(92229),
                A = r(85906),
                I = r(11584),
                R = r(19004),
                D = r.n(R);
            let W = (0, g.PA)((e) => {
                    var t, r, n;
                    let { concertId: o, isWebNextNavigationOn: a } = e,
                        {
                            experiments: s,
                            concert: i,
                            modals: { imageSliderModal: u },
                        } = (0, c.Pjs)(),
                        d = ((e) => {
                            let t = (0, I.st)(),
                                r = (0, c.UlF)(),
                                { pageId: n } = (0, c.$au)(),
                                { hash: o } = (0, I.gf)();
                            return (0, E.c)((a, l) => {
                                if (!t || !n) return;
                                let s = {
                                        hash: o,
                                        pageId: n,
                                        pageStyle: y.QL.Fullscreen,
                                        pagePlacement: y.c4.Fullscreen,
                                        viewUuid: l,
                                        mainObjectType: y.ky.Concert,
                                        mainObjectId: e,
                                    },
                                    i = (0, y.Fx)({ params: s, logger: r, context: 'useSendEventOnConcertOpenedOrClosed' });
                                i && (a ? (0, y.Fn)(t.evgenInstance, i) : (0, y.PO)(t.evgenInstance, i));
                            });
                        })(o),
                        g = (0, f.useRef)(String((0, C.A)())),
                        { setContentScrollRef: _, contentScrollRef: p } = (0, c.gKY)(),
                        { forceUpdateRefCallback: v, offsetY: b } = (0, k.G)(p),
                        h = (0, c.ytd)(null == (r = i.covers) || null == (t = r[0]) ? void 0 : t.color),
                        { topColorStyle: j, headerStyle: R } = (0, F.QZ)(h, b, a),
                        W = (0, E.c)(() => {
                            i.coversUri.length > 0 && u.openImages({ images: i.coversUri, sizeImage: 800, withAspectRatio: !1 });
                        }),
                        L = s.checkExperiment(c.zal.WebNextConcertPage, 'on');
                    (0, c.ACS)(),
                        (0, f.useEffect)(
                            () => () => {
                                i.reset();
                            },
                            [i, o],
                        ),
                        (0, f.useEffect)(() => {
                            let e = g.current;
                            return (
                                d(!0, e),
                                () => {
                                    d(!1, e);
                                }
                            );
                        }, [d]),
                        (0, c.Jzs)(i.isResolved);
                    let K = [];
                    if (
                        (i.isNeededToLoad && K.push(i.getInfo({ concertId: o })),
                        i.landing.isNeededToLoad && K.push(i.landing.getConcertSkeleton({ concertId: o, skeletonId: P.p.CONCERT_PAGE }, { preloadBlocksCount: 2 })),
                        K.length && (0, f.use)(Promise.allSettled(K)),
                        (!L || i.isNotFound) && (0, x.notFound)(),
                        i.isRejected)
                    )
                        return (0, m.jsx)(w.w, {});
                    let M = (0, O.L)(() => {
                        var e, t, r;
                        return i.isLoading || !i.meta || i.isRejected
                            ? (0, m.jsx)(T.c6, { className: D().header, isActive: !0 })
                            : (0, m.jsx)(c.Bki, {
                                  objectType: y.ky.Concert,
                                  objectId: null == (e = i.meta) ? void 0 : e.id,
                                  objectPosX: 1,
                                  objectPosY: 1,
                                  objectsCount: 1,
                                  mainObjectType: y.ky.Concert,
                                  mainObjectId: null == (t = i.meta) ? void 0 : t.id,
                                  children: (0, m.jsx)(T.Dc, {
                                      description: i.description,
                                      onCoverClick: W,
                                      leadArtistId: i.leadArtistId,
                                      ref: v,
                                      className: D().header,
                                      concert: i.meta,
                                      cover: null == (r = i.covers) ? void 0 : r[0],
                                  }),
                              });
                    });
                    return (0, m.jsx)(c.jPc, {
                        children: (0, m.jsxs)(F.hO, {
                            scrollElement: p,
                            children: [
                                (0, m.jsx)(A.Y9, { style: R, variant: A.Vw.INNER, showControls: !1 }),
                                (0, m.jsx)('div', { className: D().averageColorBackground, style: j }),
                                (0, m.jsxs)(S.N, {
                                    ref: _,
                                    className: D().root,
                                    containerClassName: D().container,
                                    ...(0, N.Am)(N.Xk.concert.CONCERT_PAGE),
                                    children: [
                                        (0, m.jsxs)('div', {
                                            children: [
                                                (0, m.jsx)(c.hjC, {
                                                    tabId: '',
                                                    tabPos: 0,
                                                    isTabSelectedByDefault: !1,
                                                    children: (0, m.jsx)(c.FoH, {
                                                        blockId: y.LA.ConcertHeader,
                                                        blockType: y.LA.ConcertHeader,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: y.ky.Concert,
                                                        mainObjectId: null == (n = i.meta) ? void 0 : n.id,
                                                        children: M,
                                                    }),
                                                }),
                                                (0, m.jsx)(l.EA, {
                                                    containerClassName: D().skeleton,
                                                    landing: i.landing,
                                                    errorComponent: (0, m.jsx)(w.w, { className: D().error, withBackwardControl: !1 }),
                                                }),
                                            ],
                                        }),
                                        (0, m.jsx)(A.A, { children: (0, m.jsx)(A.wi, { className: D().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                L = (0, g.PA)((e) => (0, m.jsx)(c.nVz, { pageId: c._Q$.CONCERT, pageEntityId: e.concertId, children: (0, m.jsx)(W, { ...e }) }));
        },
    },
    (e) => {
        e.O(
            0,
            [
                85, 260, 3196, 403, 2537, 3789, 612, 5721, 2670, 1970, 494, 3302, 3878, 3931, 1311, 7764, 6706, 6011, 5201, 2899, 5419, 2530, 5064, 2561, 5906, 4690,
                4501, 9154, 914, 3197, 6161, 3912, 3189, 2632, 2991, 8303, 1009, 4670, 7358,
            ],
            () => e((e.s = 56610)),
        ),
            (_N_E = e.O());
    },
]);
