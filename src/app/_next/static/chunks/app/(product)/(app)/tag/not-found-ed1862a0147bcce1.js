(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6432],
    {
        21390: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => m });
            var o,
                r = n(94377),
                s = n(61910),
                i = {
                    6699: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let o = n(352),
                            r = n(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: n, throttleTimeout: s } = e,
                                i = (0, r.useRef)(null),
                                [l, a] = (0, r.useState)(!!n),
                                d = (0, r.useMemo)(
                                    () =>
                                        (0, o.throttle)(() => {
                                            a(!n),
                                                i.current && window.clearTimeout(i.current),
                                                (i.current = window.setTimeout(() => {
                                                    a(!!n);
                                                }, t));
                                        }, s),
                                    [t, n, s],
                                ),
                                m = (0, r.useCallback)(() => {
                                    a(!!n), i.current && window.clearTimeout(i.current);
                                }, [n]);
                            return (
                                (0, r.useEffect)(
                                    () => () => {
                                        i.current && window.clearTimeout(i.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: d, reset: m }
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
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = o || (o = n.t(s, 2));
                    },
                },
                l = {};
            function a(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var n = (l[e] = { exports: {} });
                return i[e](n, n.exports, a), n.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0);
                let e = a(810),
                    t = a(361),
                    n = a(6699);
                d.useScroll = (o) => {
                    let { onScroll: r, listenIsScrolling: s, elementRef: i } = o,
                        { state: l, handleDebouncedToggle: a } = (0, n.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            s && a(), null == r || r();
                        }, [s, a, r]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(i);
                            if (null === e) return;
                            let n = null != e ? e : window,
                                o = { capture: !0, passive: !0 };
                            return n.addEventListener('scroll', d, o), () => n.removeEventListener('scroll', d, o);
                        }, [i, d]),
                        l
                    );
                };
            })(),
                d.__esModule;
            var m = d.useScroll;
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
            n.d(t, { hO: () => c, jr: () => v, jp: () => h, QZ: () => r }), n(77607);
            var o = n(61910);
            let r = (e, t, n) => {
                let r = null != n && n;
                return {
                    topColorStyle: (0, o.useMemo)(() => {
                        if (void 0 === t) return;
                        let n = r ? 93 : 17,
                            o = t - n;
                        return { '--average-color-background': e, transform: 'translateY('.concat(t >= n ? 0 : o, 'px)'), opacity: 1 };
                    }, [t, r, e]),
                    headerStyle: (0, o.useMemo)(() => ({ '--average-color-background': e }), [e]),
                };
            };
            var s = n(54486),
                i = n(1365),
                l = n(28303),
                a = n(21390),
                d = n(83252),
                m = n(80585);
            let u = (e) => {
                    let { element: t, scrollTop: n, isMobile: o } = e,
                        r = 0.6 * t.clientHeight;
                    return n + (o ? 60 : 76) >= t.offsetTop + r;
                },
                c = (0, l.PA)((e) => {
                    let { children: t, scrollElement: n, outerTitle: r = '', headerElement: l, headerThreshold: c, shouldHideHeader: v } = e,
                        [h, b] = (0, o.useState)(r),
                        [P, g] = (0, o.useState)(null),
                        [_, p] = (0, o.useState)(null),
                        [x, f] = (0, o.useState)(null),
                        [N, w] = (0, o.useState)(!1),
                        [j, k] = (0, o.useState)(!1),
                        [E, S] = (0, o.useState)(!1),
                        [C, W] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: y },
                        } = (0, d.Pjs)();
                    (0, o.useLayoutEffect)(() => {
                        b(r);
                    }, [r]);
                    let T = (0, o.useCallback)(() => {
                        let e = null != c ? c : 10,
                            t = l ? Number(l.offsetTop) - e : e;
                        t < 0 && (t = 0);
                        let o = (e) => {
                            S(e > t),
                                v && W(e > 30),
                                (null == P ? void 0 : P.current) && w(u({ element: null == P ? void 0 : P.current, scrollTop: e, isMobile: y })),
                                (null == _ ? void 0 : _.current) && k(u({ element: null == _ ? void 0 : _.current, scrollTop: e, isMobile: y }));
                        };
                        y ? o(window.scrollY) : n && o(n.scrollTop);
                    }, [c, l, y, v, P, _, n]);
                    (0, o.useEffect)(() => {
                        y ? 0 === window.scrollY && S(!1) : (n && 0 !== n.scrollTop) || S(!1);
                    }, [n, null == n ? void 0 : n.scrollTop, y]);
                    let F = (0, o.useMemo)(() => (y ? { onScroll: (0, i.A)(T, 200) } : { onScroll: (0, i.A)(T, 200), elementRef: n }), [T, n, y]);
                    (0, a.L)(F);
                    let L = (0, o.useMemo)(
                        () => ({
                            title: h,
                            setTitle: b,
                            titleElement: P,
                            scrollElement: y ? null : n,
                            setTitleElement: g,
                            childElement: _,
                            setChildElement: p,
                            child: x,
                            setChild: f,
                            isScrolledChild: j,
                            isScrolledTitle: N,
                            isScrolling: E,
                            isHeaderHidden: C,
                        }),
                        [h, N, P, n, E, y, x, _, j, C],
                    );
                    return (0, s.jsx)(m.B9.Provider, { value: L, children: t });
                }),
                v = (e) => {
                    let { children: t, child: n, className: r } = e,
                        { setChildElement: i, setChild: l } = (0, o.useContext)(m.B9),
                        a = (0, o.useRef)(null);
                    return (
                        (0, o.useEffect)(() => {
                            (null == a ? void 0 : a.current) && i(a), n && l(n);
                        }, [a, n, i, l]),
                        (0, o.useEffect)(
                            () => () => {
                                l(null);
                            },
                            [l],
                        ),
                        (0, s.jsx)('div', { ref: a, className: r, children: t })
                    );
                },
                h = (e) => {
                    let { children: t, title: n, className: r } = e,
                        { setTitleElement: i, setTitle: l } = (0, o.useContext)(m.B9),
                        a = (0, o.useRef)(null);
                    return (
                        (0, o.useEffect)(() => {
                            (null == a ? void 0 : a.current) && i(a), n && l(n);
                        }, [a, n, i, l]),
                        (0, o.useEffect)(
                            () => () => {
                                l('');
                            },
                            [l],
                        ),
                        (0, s.jsx)('div', { ref: a, className: r, children: t })
                    );
                };
        },
        42421: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => o.NotFound });
            var o = n(65034);
        },
        42520: (e, t, n) => {
            'use strict';
            let o;
            n.d(t, { useMetrika: () => i });
            var r = n(61910),
                s = n(80506);
            let i = () => {
                let e = (o || (o = (0, s.a)()), o),
                    t = (0, r.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, r.useMemo)(() => ({ ...e, isLoaded: t }), [t]);
            };
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
        56440: (e, t, n) => {
            'use strict';
            n.d(t, { TagPage: () => g });
            var o = n(54486),
                r = n(50420),
                s = n(28303),
                i = n(97396),
                l = n(61910),
                a = n(43426),
                d = n(97800),
                m = n(82644),
                u = n(33276),
                c = n(83909),
                v = n(83252),
                h = n(80585),
                b = n(25522),
                P = n.n(b);
            let g = (0, s.PA)((e) => {
                var t, n, s;
                let { tagId: b } = e,
                    {
                        tag: g,
                        settings: { isMobile: _ },
                    } = (0, v.Pjs)(),
                    { formatMessage: p } = (0, a.A)(),
                    { contentScrollRef: x, setContentScrollRef: f } = (0, v.gKY)(),
                    N = (0, v.W6M)();
                b || (0, i.notFound)();
                let w = (0, l.useCallback)(
                    (e) => {
                        g.getPlaylists({ page: e, pageSize: 20 });
                    },
                    [g],
                );
                g.isNotFound && (0, i.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            g.reset();
                        },
                        [g],
                    );
                let j = (0, l.useMemo)(() => ({ Footer: () => (0, o.jsx)(h.A, { children: (0, o.jsx)(h.wi, { className: P().footer }) }) }), []);
                return ((0, v.Jzs)(g.isResolved),
                (0, v.XcE)(g.pagesLoader, w),
                g.isNeededToLoad && (0, l.use)(g.getTag({ id: b, page: 0, pageSize: 20 })),
                g.isSomethingWrong)
                    ? (0, o.jsx)(m.w, {})
                    : (0, o.jsx)(v.nVz, {
                          pageId: v._Q$.TAG,
                          children: (0, o.jsx)(u.hO, {
                              scrollElement: x,
                              outerTitle: g.title,
                              children: (0, o.jsxs)('div', {
                                  className: P().root,
                                  children: [
                                      (0, o.jsx)(h.Y9, {
                                          variant: h.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: N.canBack,
                                          children: (0, o.jsx)(d.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: g.title }),
                                      }),
                                      (0, o.jsx)(h.$$, {
                                          className: (0, r.$)(P().scrollContainer, P().important),
                                          customComponents: j,
                                          itemContentCallback: (e) => {
                                              let t = g.playlists[e],
                                                  n = p({ id: 'loading-messages.entity-is-loading' }, { entityName: p({ id: 'entity-names.playlist' }) });
                                              return t ? (0, o.jsx)(c.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, o.jsx)(h.Vt, { 'aria-label': n });
                                          },
                                          totalCount: null != (n = null == g || null == (t = g.pagesLoader.pager) ? void 0 : t.total) ? n : 0,
                                          onGetDataByPage: w,
                                          pageSize: 20,
                                          totalRequests: null != (s = null == g ? void 0 : g.pagesLoader.requestsCount) ? s : 0,
                                          listClassName: P().content,
                                          itemClassName: P().item,
                                          handleRef: f,
                                          context: { listAriaLabel: p({ id: 'mixes.albums-list' }, { genreName: g.title || '' }) },
                                          isMobileLayout: _,
                                          useWindowScroll: _,
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
            n.d(t, { NotFound: () => b });
            var o = n(54486),
                r = n(50420),
                s = n(28303),
                i = n(47713),
                l = n(77881),
                a = n(5956),
                d = n(97800),
                m = n(83252),
                u = n(80585),
                c = n(61910),
                v = n(46215),
                h = n.n(v);
            let b = (0, s.PA)((e) => {
                let { className: t, title: n, description: s, iconVariant: v = 'musicLogo', iconClassName: b, iconSize: P } = e,
                    { contentRef: g } = (0, m.gKY)(),
                    _ = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: p } = (0, m.D5F)(_);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, c.useEffect)(
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
                        className: (0, r.$)(h().root, { [h().root_desktop]: !g }, t),
                        children: [
                            (0, o.jsx)(u.Lh, { withBackwardFallback: '/', className: h().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: h().content,
                                children: [
                                    (0, o.jsx)(a.Icon, { className: (0, r.$)(h().icon, b), variant: v, size: P }),
                                    (0, o.jsx)(d.Heading, {
                                        className: (0, r.$)(h().title, h().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(d.Caption, {
                                        className: (0, r.$)(h().text, h().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(l.$, {
                                        onClick: p,
                                        className: h().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(i.A, { id: 'navigation.page-main' }),
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
        67929: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 14342)),
                Promise.resolve().then(n.bind(n, 62662)),
                Promise.resolve().then(n.bind(n, 42520)),
                Promise.resolve().then(n.bind(n, 93099)),
                Promise.resolve().then(n.bind(n, 15640)),
                Promise.resolve().then(n.bind(n, 82885)),
                Promise.resolve().then(n.bind(n, 99733)),
                Promise.resolve().then(n.bind(n, 18355)),
                Promise.resolve().then(n.bind(n, 42691)),
                Promise.resolve().then(n.bind(n, 37235)),
                Promise.resolve().then(n.bind(n, 3781)),
                Promise.resolve().then(n.bind(n, 33829)),
                Promise.resolve().then(n.bind(n, 94716)),
                Promise.resolve().then(n.bind(n, 56440)),
                Promise.resolve().then(n.bind(n, 8394)),
                Promise.resolve().then(n.bind(n, 3192)),
                Promise.resolve().then(n.bind(n, 7286)),
                Promise.resolve().then(n.bind(n, 60305)),
                Promise.resolve().then(n.bind(n, 47203)),
                Promise.resolve().then(n.bind(n, 34286)),
                Promise.resolve().then(n.bind(n, 224)),
                Promise.resolve().then(n.bind(n, 24449)),
                Promise.resolve().then(n.bind(n, 79893)),
                Promise.resolve().then(n.bind(n, 81789)),
                Promise.resolve().then(n.bind(n, 87466)),
                Promise.resolve().then(n.bind(n, 34028)),
                Promise.resolve().then(n.bind(n, 99564)),
                Promise.resolve().then(n.bind(n, 95348)),
                Promise.resolve().then(n.bind(n, 52347)),
                Promise.resolve().then(n.bind(n, 61015)),
                Promise.resolve().then(n.bind(n, 1771)),
                Promise.resolve().then(n.bind(n, 80043)),
                Promise.resolve().then(n.bind(n, 65729)),
                Promise.resolve().then(n.bind(n, 12235)),
                Promise.resolve().then(n.bind(n, 60793)),
                Promise.resolve().then(n.bind(n, 74565)),
                Promise.resolve().then(n.bind(n, 8941)),
                Promise.resolve().then(n.bind(n, 38433)),
                Promise.resolve().then(n.bind(n, 8732)),
                Promise.resolve().then(n.bind(n, 43369)),
                Promise.resolve().then(n.bind(n, 47564)),
                Promise.resolve().then(n.bind(n, 41017)),
                Promise.resolve().then(n.bind(n, 27252)),
                Promise.resolve().then(n.bind(n, 65286)),
                Promise.resolve().then(n.bind(n, 45198)),
                Promise.resolve().then(n.bind(n, 46814)),
                Promise.resolve().then(n.bind(n, 92508)),
                Promise.resolve().then(n.bind(n, 40126)),
                Promise.resolve().then(n.bind(n, 83726)),
                Promise.resolve().then(n.bind(n, 90410)),
                Promise.resolve().then(n.bind(n, 13246)),
                Promise.resolve().then(n.bind(n, 26040)),
                Promise.resolve().then(n.bind(n, 92446)),
                Promise.resolve().then(n.bind(n, 42593)),
                Promise.resolve().then(n.bind(n, 70570)),
                Promise.resolve().then(n.bind(n, 88416)),
                Promise.resolve().then(n.bind(n, 24174)),
                Promise.resolve().then(n.bind(n, 78458)),
                Promise.resolve().then(n.bind(n, 59457)),
                Promise.resolve().then(n.bind(n, 6690)),
                Promise.resolve().then(n.bind(n, 88370)),
                Promise.resolve().then(n.bind(n, 66904)),
                Promise.resolve().then(n.bind(n, 39937)),
                Promise.resolve().then(n.bind(n, 33019)),
                Promise.resolve().then(n.bind(n, 38808)),
                Promise.resolve().then(n.bind(n, 58094)),
                Promise.resolve().then(n.bind(n, 78009)),
                Promise.resolve().then(n.bind(n, 33427)),
                Promise.resolve().then(n.bind(n, 30878)),
                Promise.resolve().then(n.bind(n, 53115)),
                Promise.resolve().then(n.bind(n, 52398)),
                Promise.resolve().then(n.bind(n, 82327)),
                Promise.resolve().then(n.bind(n, 17012)),
                Promise.resolve().then(n.bind(n, 9275)),
                Promise.resolve().then(n.bind(n, 17658)),
                Promise.resolve().then(n.bind(n, 36578)),
                Promise.resolve().then(n.bind(n, 66989)),
                Promise.resolve().then(n.bind(n, 58863)),
                Promise.resolve().then(n.bind(n, 60899)),
                Promise.resolve().then(n.bind(n, 59437)),
                Promise.resolve().then(n.bind(n, 43367)),
                Promise.resolve().then(n.bind(n, 66446)),
                Promise.resolve().then(n.bind(n, 86840)),
                Promise.resolve().then(n.bind(n, 75181)),
                Promise.resolve().then(n.bind(n, 99538)),
                Promise.resolve().then(n.bind(n, 45252)),
                Promise.resolve().then(n.bind(n, 59226)),
                Promise.resolve().then(n.bind(n, 75961)),
                Promise.resolve().then(n.bind(n, 33964)),
                Promise.resolve().then(n.bind(n, 33967)),
                Promise.resolve().then(n.bind(n, 64410)),
                Promise.resolve().then(n.bind(n, 91350)),
                Promise.resolve().then(n.bind(n, 4500)),
                Promise.resolve().then(n.bind(n, 55846)),
                Promise.resolve().then(n.bind(n, 65689)),
                Promise.resolve().then(n.bind(n, 99386)),
                Promise.resolve().then(n.bind(n, 5222)),
                Promise.resolve().then(n.bind(n, 60440)),
                Promise.resolve().then(n.bind(n, 37271)),
                Promise.resolve().then(n.bind(n, 66688)),
                Promise.resolve().then(n.bind(n, 76472));
        },
        75312: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => P });
            var o = n(54486),
                r = n(50420),
                s = n(28303),
                i = n(61910),
                l = n(43426),
                a = n(47713),
                d = n(77881),
                m = n(5956),
                u = n(97800),
                c = n(83252),
                v = n(80585),
                h = n(63708),
                b = n.n(h);
            let P = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    h = s({ id: 'error-messages.something-went-wrong' });
                (0, c.CgZ)(h);
                let { sendRefreshEvent: P } = (0, c.cYT)(),
                    g = (0, i.useCallback)(() => {
                        P(), (window.location.href = c.Zyd.main.href);
                    }, [P]),
                    { contentRef: _ } = (0, c.gKY)();
                return (0, o.jsxs)('div', {
                    className: (0, r.$)(b().root, t),
                    children: [
                        n &&
                            (0, o.jsx)(v.Lh, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(b().navigation, { [b().navigation_desktop]: !_ }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(b().content, { [b().content_shrink]: !n }),
                            children: [
                                (0, o.jsx)(m.Icon, { className: b().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(u.Heading, { className: (0, r.$)(b().title, b().important), variant: 'h3', size: 'xs', children: h }),
                                (0, o.jsxs)(u.Caption, {
                                    className: (0, r.$)(b().text, b().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(d.$, {
                                    onClick: g,
                                    className: b().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(u.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        80506: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => r });
            var o = n(87965);
            let r = () => {
                let e = null,
                    t = new o.cJ(!1),
                    n = [];
                return {
                    isLoaded: t,
                    init: (o) => {
                        var r, s;
                        if (void 0 !== (null == (r = window.Ya) ? void 0 : r.Metrika2) && !t.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...o })),
                                    (t.value = !0),
                                    (s = e),
                                    n.forEach((e) => {
                                        e(s);
                                    }),
                                    (n.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && o.logger.error(e);
                            }
                    },
                    count: function (t) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [o]: t })
                            : n.push((e) => {
                                  e.params({ [o]: t });
                              });
                    },
                    hit: (t) => {
                        e
                            ? e.hit(t)
                            : n.push((e) => {
                                  e.hit(t);
                              });
                    },
                    reachGoal: (t, o) => {
                        if (!e) return void n.push((e) => e.reachGoal(t, o));
                        e.reachGoal(t, o);
                    },
                };
            };
        },
        82644: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => o.SomethingWentWrong });
            var o = n(75312);
        },
        94716: (e, t, n) => {
            'use strict';
            n.d(t, { TagNotFoundPage: () => i });
            var o = n(54486),
                r = n(28303),
                s = n(42421);
            let i = (0, r.PA)(() => (0, o.jsx)(s.M, {}));
        },
    },
    (e) => {
        e.O(0, [6041, 9834, 5355, 1023, 2398, 1776, 2036, 3384, 1311, 7764, 6706, 5148, 3005, 3252, 585, 6433, 3286, 3909, 5843, 3290, 7358], () => e((e.s = 67929))),
            (_N_E = e.O());
    },
]);
