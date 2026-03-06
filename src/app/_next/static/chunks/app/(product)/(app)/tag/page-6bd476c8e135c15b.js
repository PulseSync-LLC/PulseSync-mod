(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4905],
    {
        9089: (e, t, n) => {
            'use strict';
            n.d(t, { oN: () => u.TagPage, vV: () => i });
            var o = n(93064),
                a = n(14287),
                r = n(52733),
                s = n(83252),
                l = n(26433);
            let i = o.gK
                .model('TagPage', {
                    title: o.gK.maybe(o.gK.string),
                    errorStatusCode: o.gK.maybeNull(o.gK.number),
                    tagLoadingState: o.gK.enumeration(Object.values(s.GuX)),
                    playlistsData: o.gK.array(o.gK.model({ uid: o.gK.number, kind: o.gK.number })),
                    pagesLoader: (0, l.Ij)(r.$o),
                })
                .views((e) => {
                    let t = {
                        get isNeededToLoad() {
                            return e.tagLoadingState === s.GuX.IDLE;
                        },
                        get isResolved() {
                            return e.tagLoadingState === s.GuX.RESOLVE;
                        },
                        get isNotFound() {
                            let t = e.pagesLoader.isEmpty;
                            return (e.tagLoadingState === s.GuX.REJECT && (e.errorStatusCode === a.X1.NOT_FOUND || e.errorStatusCode === a.X1.BAD_REQUEST)) || t;
                        },
                        get isSomethingWrong() {
                            return e.tagLoadingState === s.GuX.REJECT && !t.isNotFound;
                        },
                        get playlists() {
                            var n;
                            return null != (n = e.pagesLoader.items) ? n : [];
                        },
                    };
                    return t;
                })
                .actions((e) => {
                    let t = {
                        getPlaylists: (0, o.L3)(function* (t) {
                            let { page: n = 0, pageSize: l = 20 } = t,
                                { playlistsResource: i, modelActionsLogger: u } = (0, o._$)(e);
                            if (e.tagLoadingState === s.GuX.RESOLVE && e.pagesLoader.isPageNeedToLoad(n))
                                try {
                                    e.pagesLoader.setPageState(n, s.GuX.PENDING);
                                    let t = n * l,
                                        o = e.playlistsData.slice(t, t + l),
                                        a = yield i.getPlaylists({ playlistIds: o.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                        u = { page: n, perPage: l, total: e.playlistsData.length },
                                        d = a.playlists.map(r.jX);
                                    e.pagesLoader.setItems(d, { page: n, pager: u });
                                } catch (t) {
                                    u.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: s.FlZ.ERROR, page: n }),
                                        t instanceof a.GX &&
                                            (t.statusCode === a.X1.NOT_FOUND || t.statusCode === a.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = a.X1.NOT_FOUND);
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.tagLoadingState = s.GuX.IDLE), (e.title = void 0), (e.playlistsData = (0, o.wg)([])), (e.errorStatusCode = null);
                        },
                        getTag: (0, o.L3)(function* (n) {
                            let { id: r, page: l = 0, pageSize: i = 20 } = n,
                                { tagResource: u, modelActionsLogger: d } = (0, o._$)(e);
                            if (e.tagLoadingState !== s.GuX.PENDING)
                                try {
                                    var c;
                                    e.tagLoadingState = s.GuX.PENDING;
                                    let n = yield u.getPlaylistIds({ id: r });
                                    (e.title = null == (c = n.tag) ? void 0 : c.name),
                                        (e.playlistsData = (0, o.wg)(n.ids.map((e) => ({ uid: e.uid, kind: e.kind })))),
                                        e.tagLoadingState !== s.GuX.IDLE && (e.tagLoadingState = s.GuX.RESOLVE),
                                        yield t.getPlaylists({ page: l, pageSize: i });
                                } catch (t) {
                                    d.error(t),
                                        t instanceof a.GX &&
                                            (t.statusCode === a.X1.NOT_FOUND || t.statusCode === a.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = a.X1.NOT_FOUND),
                                        e.tagLoadingState !== s.GuX.IDLE && (e.tagLoadingState = s.GuX.REJECT);
                                }
                        }),
                    };
                    return t;
                });
            n(94716);
            var u = n(56440);
        },
        21390: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => d });
            var o,
                a = n(94377),
                r = n(61910),
                s = {
                    6699: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let o = n(352),
                            a = n(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: n, throttleTimeout: r } = e,
                                s = (0, a.useRef)(null),
                                [l, i] = (0, a.useState)(!!n),
                                u = (0, a.useMemo)(
                                    () =>
                                        (0, o.throttle)(() => {
                                            i(!n),
                                                s.current && window.clearTimeout(s.current),
                                                (s.current = window.setTimeout(() => {
                                                    i(!!n);
                                                }, t));
                                        }, r),
                                    [t, n, r],
                                ),
                                d = (0, a.useCallback)(() => {
                                    i(!!n), s.current && window.clearTimeout(s.current);
                                }, [n]);
                            return (
                                (0, a.useEffect)(
                                    () => () => {
                                        s.current && window.clearTimeout(s.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: u, reset: d }
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
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = o || (o = n.t(r, 2));
                    },
                },
                l = {};
            function i(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var n = (l[e] = { exports: {} });
                return s[e](n, n.exports, i), n.exports;
            }
            var u = {};
            (() => {
                Object.defineProperty(u, '__esModule', { value: !0 }), (u.useScroll = void 0);
                let e = i(810),
                    t = i(361),
                    n = i(6699);
                u.useScroll = (o) => {
                    let { onScroll: a, listenIsScrolling: r, elementRef: s } = o,
                        { state: l, handleDebouncedToggle: i } = (0, n.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        u = (0, e.useCallback)(() => {
                            r && i(), null == a || a();
                        }, [r, i, a]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(s);
                            if (null === e) return;
                            let n = null != e ? e : window,
                                o = { capture: !0, passive: !0 };
                            return n.addEventListener('scroll', u, o), () => n.removeEventListener('scroll', u, o);
                        }, [s, u]),
                        l
                    );
                };
            })(),
                u.__esModule;
            var d = u.useScroll;
        },
        25522: (e) => {
            e.exports = {
                root: 'TagPage_root__EWN9A',
                scrollContainer: 'TagPage_scrollContainer__lvG_1',
                important: 'TagPage_important__Jq37E',
                content: 'TagPage_content__rUC_l',
                footer: 'TagPage_footer__W0mZr',
                item: 'TagPage_item__X_lW7',
            };
        },
        33276: (e, t, n) => {
            'use strict';
            n.d(t, { hO: () => g, jr: () => m, jp: () => _, QZ: () => a }), n(77607);
            var o = n(61910);
            let a = (e, t, n) => {
                let a = null != n && n;
                return {
                    topColorStyle: (0, o.useMemo)(() => {
                        if (void 0 === t) return;
                        let n = a ? 93 : 17,
                            o = t - n;
                        return { '--average-color-background': e, transform: 'translateY('.concat(t >= n ? 0 : o, 'px)'), opacity: 1 };
                    }, [t, a, e]),
                    headerStyle: (0, o.useMemo)(() => ({ '--average-color-background': e }), [e]),
                };
            };
            var r = n(54486),
                s = n(1365),
                l = n(28303),
                i = n(21390),
                u = n(83252),
                d = n(80585);
            let c = (e) => {
                    let { element: t, scrollTop: n, isMobile: o } = e,
                        a = 0.6 * t.clientHeight;
                    return n + (o ? 60 : 76) >= t.offsetTop + a;
                },
                g = (0, l.PA)((e) => {
                    let { children: t, scrollElement: n, outerTitle: a = '', headerElement: l, headerThreshold: g, shouldHideHeader: m } = e,
                        [_, p] = (0, o.useState)(a),
                        [v, x] = (0, o.useState)(null),
                        [h, N] = (0, o.useState)(null),
                        [f, S] = (0, o.useState)(null),
                        [E, L] = (0, o.useState)(!1),
                        [y, j] = (0, o.useState)(!1),
                        [C, T] = (0, o.useState)(!1),
                        [w, b] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: k },
                        } = (0, u.Pjs)();
                    (0, o.useLayoutEffect)(() => {
                        p(a);
                    }, [a]);
                    let F = (0, o.useCallback)(() => {
                        let e = null != g ? g : 10,
                            t = l ? Number(l.offsetTop) - e : e;
                        t < 0 && (t = 0);
                        let o = (e) => {
                            T(e > t),
                                m && b(e > 30),
                                (null == v ? void 0 : v.current) && L(c({ element: null == v ? void 0 : v.current, scrollTop: e, isMobile: k })),
                                (null == h ? void 0 : h.current) && j(c({ element: null == h ? void 0 : h.current, scrollTop: e, isMobile: k }));
                        };
                        k ? o(window.scrollY) : n && o(n.scrollTop);
                    }, [g, l, k, m, v, h, n]);
                    (0, o.useEffect)(() => {
                        k ? 0 === window.scrollY && T(!1) : (n && 0 !== n.scrollTop) || T(!1);
                    }, [n, null == n ? void 0 : n.scrollTop, k]);
                    let P = (0, o.useMemo)(() => (k ? { onScroll: (0, s.A)(F, 200) } : { onScroll: (0, s.A)(F, 200), elementRef: n }), [F, n, k]);
                    (0, i.L)(P);
                    let W = (0, o.useMemo)(
                        () => ({
                            title: _,
                            setTitle: p,
                            titleElement: v,
                            scrollElement: k ? null : n,
                            setTitleElement: x,
                            childElement: h,
                            setChildElement: N,
                            child: f,
                            setChild: S,
                            isScrolledChild: y,
                            isScrolledTitle: E,
                            isScrolling: C,
                            isHeaderHidden: w,
                        }),
                        [_, E, v, n, C, k, f, h, y, w],
                    );
                    return (0, r.jsx)(d.B9.Provider, { value: W, children: t });
                }),
                m = (e) => {
                    let { children: t, child: n, className: a } = e,
                        { setChildElement: s, setChild: l } = (0, o.useContext)(d.B9),
                        i = (0, o.useRef)(null);
                    return (
                        (0, o.useEffect)(() => {
                            (null == i ? void 0 : i.current) && s(i), n && l(n);
                        }, [i, n, s, l]),
                        (0, o.useEffect)(
                            () => () => {
                                l(null);
                            },
                            [l],
                        ),
                        (0, r.jsx)('div', { ref: i, className: a, children: t })
                    );
                },
                _ = (e) => {
                    let { children: t, title: n, className: a } = e,
                        { setTitleElement: s, setTitle: l } = (0, o.useContext)(d.B9),
                        i = (0, o.useRef)(null);
                    return (
                        (0, o.useEffect)(() => {
                            (null == i ? void 0 : i.current) && s(i), n && l(n);
                        }, [i, n, s, l]),
                        (0, o.useEffect)(
                            () => () => {
                                l('');
                            },
                            [l],
                        ),
                        (0, r.jsx)('div', { ref: i, className: a, children: t })
                    );
                };
        },
        42421: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => o.NotFound });
            var o = n(65034);
        },
        46215: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        47601: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => s });
            var o = n(54486),
                a = n(97396),
                r = n(9089);
            let s = () => {
                let e = (0, a.useSearchParams)().get('tagId');
                return e || (0, a.notFound)(), (0, o.jsx)(r.oN, { tagId: e });
            };
        },
        56440: (e, t, n) => {
            'use strict';
            n.d(t, { TagPage: () => x });
            var o = n(54486),
                a = n(50420),
                r = n(28303),
                s = n(97396),
                l = n(61910),
                i = n(43426),
                u = n(97800),
                d = n(82644),
                c = n(33276),
                g = n(83909),
                m = n(83252),
                _ = n(80585),
                p = n(25522),
                v = n.n(p);
            let x = (0, r.PA)((e) => {
                var t, n, r;
                let { tagId: p } = e,
                    {
                        tag: x,
                        settings: { isMobile: h },
                    } = (0, m.Pjs)(),
                    { formatMessage: N } = (0, i.A)(),
                    { contentScrollRef: f, setContentScrollRef: S } = (0, m.gKY)(),
                    E = (0, m.W6M)();
                p || (0, s.notFound)();
                let L = (0, l.useCallback)(
                    (e) => {
                        x.getPlaylists({ page: e, pageSize: 20 });
                    },
                    [x],
                );
                x.isNotFound && (0, s.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            x.reset();
                        },
                        [x],
                    );
                let y = (0, l.useMemo)(() => ({ Footer: () => (0, o.jsx)(_.A, { children: (0, o.jsx)(_.wi, { className: v().footer }) }) }), []);
                return ((0, m.Jzs)(x.isResolved),
                (0, m.XcE)(x.pagesLoader, L),
                x.isNeededToLoad && (0, l.use)(x.getTag({ id: p, page: 0, pageSize: 20 })),
                x.isSomethingWrong)
                    ? (0, o.jsx)(d.w, {})
                    : (0, o.jsx)(m.nVz, {
                          pageId: m._Q$.TAG,
                          children: (0, o.jsx)(c.hO, {
                              scrollElement: f,
                              outerTitle: x.title,
                              children: (0, o.jsxs)('div', {
                                  className: v().root,
                                  children: [
                                      (0, o.jsx)(_.Y9, {
                                          variant: _.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: E.canBack,
                                          children: (0, o.jsx)(u.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: x.title }),
                                      }),
                                      (0, o.jsx)(_.$$, {
                                          className: (0, a.$)(v().scrollContainer, v().important),
                                          customComponents: y,
                                          itemContentCallback: (e) => {
                                              let t = x.playlists[e],
                                                  n = N({ id: 'loading-messages.entity-is-loading' }, { entityName: N({ id: 'entity-names.playlist' }) });
                                              return t ? (0, o.jsx)(g.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, o.jsx)(_.Vt, { 'aria-label': n });
                                          },
                                          totalCount: null != (n = null == x || null == (t = x.pagesLoader.pager) ? void 0 : t.total) ? n : 0,
                                          onGetDataByPage: L,
                                          pageSize: 20,
                                          totalRequests: null != (r = null == x ? void 0 : x.pagesLoader.requestsCount) ? r : 0,
                                          listClassName: v().content,
                                          itemClassName: v().item,
                                          handleRef: S,
                                          context: { listAriaLabel: N({ id: 'mixes.albums-list' }, { genreName: x.title || '' }) },
                                          isMobileLayout: h,
                                          useWindowScroll: h,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        63708: (e) => {
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
        65034: (e, t, n) => {
            'use strict';
            n.d(t, { NotFound: () => p });
            var o = n(54486),
                a = n(50420),
                r = n(28303),
                s = n(47713),
                l = n(77881),
                i = n(5956),
                u = n(97800),
                d = n(83252),
                c = n(80585),
                g = n(61910),
                m = n(46215),
                _ = n.n(m);
            let p = (0, r.PA)((e) => {
                let { className: t, title: n, description: r, iconVariant: m = 'musicLogo', iconClassName: p, iconSize: v } = e,
                    { contentRef: x } = (0, d.gKY)(),
                    h = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: N } = (0, d.D5F)(h);
                return (
                    (0, d.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, d.Pjs)();
                        (0, g.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, o.jsxs)('div', {
                        className: (0, a.$)(_().root, { [_().root_desktop]: !x }, t),
                        children: [
                            (0, o.jsx)(c.Lh, { withBackwardFallback: '/', className: _().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: _().content,
                                children: [
                                    (0, o.jsx)(i.Icon, { className: (0, a.$)(_().icon, p), variant: m, size: v }),
                                    (0, o.jsx)(u.Heading, {
                                        className: (0, a.$)(_().title, _().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, o.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(u.Caption, {
                                        className: (0, a.$)(_().text, _().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: r || (0, o.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(l.$, {
                                        onClick: N,
                                        className: _().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(u.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        66534: (e, t, n) => {
            'use strict';
            var o;
            n.d(t, { U: () => o }),
                (function (e) {
                    (e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female');
                })(o || (o = {}));
        },
        75312: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => v });
            var o = n(54486),
                a = n(50420),
                r = n(28303),
                s = n(61910),
                l = n(43426),
                i = n(47713),
                u = n(77881),
                d = n(5956),
                c = n(97800),
                g = n(83252),
                m = n(80585),
                _ = n(63708),
                p = n.n(_);
            let v = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: r } = (0, l.A)(),
                    _ = r({ id: 'error-messages.something-went-wrong' });
                (0, g.CgZ)(_);
                let { sendRefreshEvent: v } = (0, g.cYT)(),
                    x = (0, s.useCallback)(() => {
                        v(), (window.location.href = g.Zyd.main.href);
                    }, [v]),
                    { contentRef: h } = (0, g.gKY)();
                return (0, o.jsxs)('div', {
                    className: (0, a.$)(p().root, t),
                    children: [
                        n &&
                            (0, o.jsx)(m.Lh, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(p().navigation, { [p().navigation_desktop]: !h }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, a.$)(p().content, { [p().content_shrink]: !n }),
                            children: [
                                (0, o.jsx)(d.Icon, { className: p().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(c.Heading, { className: (0, a.$)(p().title, p().important), variant: 'h3', size: 'xs', children: _ }),
                                (0, o.jsxs)(c.Caption, {
                                    className: (0, a.$)(p().text, p().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(i.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(u.$, {
                                    onClick: x,
                                    className: p().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(c.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(i.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        75732: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 47601));
        },
        82644: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => o.SomethingWentWrong });
            var o = n(75312);
        },
        94716: (e, t, n) => {
            'use strict';
            n.d(t, { TagNotFoundPage: () => s });
            var o = n(54486),
                a = n(28303),
                r = n(42421);
            let s = (0, a.PA)(() => (0, o.jsx)(r.M, {}));
        },
    },
    (e) => {
        e.O(0, [6041, 9834, 5355, 1023, 2398, 1776, 2036, 3384, 1311, 7764, 6706, 5148, 3005, 3252, 585, 6433, 3286, 3909, 5843, 3290, 7358], () => e((e.s = 75732))),
            (_N_E = e.O());
    },
]);
