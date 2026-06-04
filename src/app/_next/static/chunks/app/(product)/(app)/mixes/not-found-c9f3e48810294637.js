(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6046],
    {
        4324: (e, t, n) => {
            'use strict';
            n.d(t, { GenresPage: () => P });
            var r = n(32290),
                o = n(96103),
                s = n(21916),
                i = n(55178),
                l = n(46049),
                a = n(71926),
                d = n(32381),
                m = n(75645),
                c = n(91676),
                h = n(49574),
                u = n(44574),
                v = n(86568),
                b = n.n(v);
            let P = (0, o.PA)((e) => {
                let { navigationId: t } = e,
                    { genres: n } = (0, h.Pjs)(),
                    { contentScrollRef: o, setContentScrollRef: v } = (0, h.gKY)(),
                    P = (0, h.W6M)();
                return ((0, i.useEffect)(
                    () => () => {
                        n.reset();
                    },
                    [n, t],
                ),
                n.isNotFound && (0, s.notFound)(),
                (0, h.Jzs)(n.isResolved),
                t && n.isNeededToLoad && (0, i.use)(n.getData(t)),
                n.isRejected)
                    ? (0, r.jsx)(d.w, {})
                    : (0, r.jsxs)(m.hO, {
                          scrollElement: o,
                          outerTitle: n.title,
                          children: [
                              (0, r.jsx)(u.Y9, {
                                  variant: u.Vw.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: P.canBack,
                                  children: (0, r.jsx)(a.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: n.title }),
                              }),
                              (0, r.jsx)(l.N, {
                                  className: b().root,
                                  containerClassName: b().content,
                                  ref: v,
                                  children: (0, r.jsx)('div', {
                                      className: b().list,
                                      children: n.items.map((e) => (0, r.jsx)(c.G4, { tag: e.tag, title: e.title, subGenres: e.subGenres }, e.tag)),
                                  }),
                              }),
                          ],
                      });
            });
        },
        12119: (e, t, n) => {
            'use strict';
            n.d(t, { NotFound: () => b });
            var r = n(32290),
                o = n(63618),
                s = n(96103),
                i = n(39407),
                l = n(63423),
                a = n(82586),
                d = n(71926),
                m = n(49574),
                c = n(44574),
                h = n(55178),
                u = n(55365),
                v = n.n(u);
            let b = (0, s.PA)((e) => {
                let { className: t, title: n, description: s, iconVariant: u = 'musicLogo', iconClassName: b, iconSize: P } = e,
                    { contentRef: _ } = (0, m.gKY)(),
                    g = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: p } = (0, m.D5F)(g);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, h.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)('div', {
                        className: (0, o.$)(v().root, { [v().root_desktop]: !_ }, t),
                        children: [
                            (0, r.jsx)(c.Lh, { withBackwardFallback: '/', className: v().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: v().content,
                                children: [
                                    (0, r.jsx)(a.Icon, { className: (0, o.$)(v().icon, b), variant: u, size: P }),
                                    (0, r.jsx)(d.Heading, {
                                        className: (0, o.$)(v().title, v().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(d.Caption, {
                                        className: (0, o.$)(v().text, v().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(l.$, {
                                        onClick: p,
                                        className: v().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(i.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        25438: (e, t, n) => {
            'use strict';
            n.d(t, { GenresNotFoundPage: () => s });
            var r = n(32290),
                o = n(80719);
            let s = () => (0, r.jsx)(o.M, {});
        },
        30310: (e) => {
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
        32381: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => r.SomethingWentWrong });
            var r = n(60194);
        },
        40996: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => m });
            var r,
                o = n(97020),
                s = n(55178),
                i = {
                    6699: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let r = n(352),
                            o = n(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: n, throttleTimeout: s } = e,
                                i = (0, o.useRef)(null),
                                [l, a] = (0, o.useState)(!!n),
                                d = (0, o.useMemo)(
                                    () =>
                                        (0, r.throttle)(() => {
                                            a(!n),
                                                i.current && window.clearTimeout(i.current),
                                                (i.current = window.setTimeout(() => {
                                                    a(!!n);
                                                }, t));
                                        }, s),
                                    [t, n, s],
                                ),
                                m = (0, o.useCallback)(() => {
                                    a(!!n), i.current && window.clearTimeout(i.current);
                                }, [n]);
                            return (
                                (0, o.useEffect)(
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
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(s, 2));
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
                d.useScroll = (r) => {
                    let { onScroll: o, listenIsScrolling: s, elementRef: i } = r,
                        { state: l, handleDebouncedToggle: a } = (0, n.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            s && a(), null == o || o();
                        }, [s, a, o]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(i);
                            if (null === e) return;
                            let n = null != e ? e : window,
                                r = { capture: !0, passive: !0 };
                            return n.addEventListener('scroll', d, r), () => n.removeEventListener('scroll', d, r);
                        }, [i, d]),
                        l
                    );
                };
            })(),
                d.__esModule;
            var m = d.useScroll;
        },
        43740: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => o });
            var r = n(46862);
            let o = () => {
                let e = null,
                    t = new r.cJ(!1),
                    n = [];
                return {
                    isLoaded: t,
                    init: (r) => {
                        var o, s;
                        if (void 0 !== (null == (o = window.Ya) ? void 0 : o.Metrika2) && !t.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...r })),
                                    (t.value = !0),
                                    (s = e),
                                    n.forEach((e) => {
                                        e(s);
                                    }),
                                    (n.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && r.logger.error(e);
                            }
                    },
                    count: function (t) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [r]: t })
                            : n.push((e) => {
                                  e.params({ [r]: t });
                              });
                    },
                    hit: (t) => {
                        e
                            ? e.hit(t)
                            : n.push((e) => {
                                  e.hit(t);
                              });
                    },
                    reachGoal: (t, r) => {
                        if (!e) return void n.push((e) => e.reachGoal(t, r));
                        e.reachGoal(t, r);
                    },
                };
            };
        },
        45915: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 7276)),
                Promise.resolve().then(n.bind(n, 29680)),
                Promise.resolve().then(n.bind(n, 76822)),
                Promise.resolve().then(n.bind(n, 95593)),
                Promise.resolve().then(n.bind(n, 25438)),
                Promise.resolve().then(n.bind(n, 4324)),
                Promise.resolve().then(n.bind(n, 71768)),
                Promise.resolve().then(n.bind(n, 65650)),
                Promise.resolve().then(n.bind(n, 59564)),
                Promise.resolve().then(n.bind(n, 9471)),
                Promise.resolve().then(n.bind(n, 78305)),
                Promise.resolve().then(n.bind(n, 70632)),
                Promise.resolve().then(n.bind(n, 35058)),
                Promise.resolve().then(n.bind(n, 85743)),
                Promise.resolve().then(n.bind(n, 90923)),
                Promise.resolve().then(n.bind(n, 17595)),
                Promise.resolve().then(n.bind(n, 41540)),
                Promise.resolve().then(n.bind(n, 48462)),
                Promise.resolve().then(n.bind(n, 8868)),
                Promise.resolve().then(n.bind(n, 12350)),
                Promise.resolve().then(n.bind(n, 95481)),
                Promise.resolve().then(n.bind(n, 47745)),
                Promise.resolve().then(n.bind(n, 12989)),
                Promise.resolve().then(n.bind(n, 2969)),
                Promise.resolve().then(n.bind(n, 84051)),
                Promise.resolve().then(n.bind(n, 27789)),
                Promise.resolve().then(n.bind(n, 70435)),
                Promise.resolve().then(n.bind(n, 19875)),
                Promise.resolve().then(n.bind(n, 54391)),
                Promise.resolve().then(n.bind(n, 63529)),
                Promise.resolve().then(n.bind(n, 73818)),
                Promise.resolve().then(n.bind(n, 20599)),
                Promise.resolve().then(n.bind(n, 84782)),
                Promise.resolve().then(n.bind(n, 30915)),
                Promise.resolve().then(n.bind(n, 70608)),
                Promise.resolve().then(n.bind(n, 18746)),
                Promise.resolve().then(n.bind(n, 71610)),
                Promise.resolve().then(n.bind(n, 23352)),
                Promise.resolve().then(n.bind(n, 10936)),
                Promise.resolve().then(n.bind(n, 2792)),
                Promise.resolve().then(n.bind(n, 22714)),
                Promise.resolve().then(n.bind(n, 37240)),
                Promise.resolve().then(n.bind(n, 3064)),
                Promise.resolve().then(n.bind(n, 51012)),
                Promise.resolve().then(n.bind(n, 9848)),
                Promise.resolve().then(n.bind(n, 47498)),
                Promise.resolve().then(n.bind(n, 8152)),
                Promise.resolve().then(n.bind(n, 43474)),
                Promise.resolve().then(n.bind(n, 46200)),
                Promise.resolve().then(n.bind(n, 5537)),
                Promise.resolve().then(n.bind(n, 34186)),
                Promise.resolve().then(n.bind(n, 56008)),
                Promise.resolve().then(n.bind(n, 67732)),
                Promise.resolve().then(n.bind(n, 30787)),
                Promise.resolve().then(n.bind(n, 65476)),
                Promise.resolve().then(n.bind(n, 83416)),
                Promise.resolve().then(n.bind(n, 31010)),
                Promise.resolve().then(n.bind(n, 19383)),
                Promise.resolve().then(n.bind(n, 3313)),
                Promise.resolve().then(n.bind(n, 81619)),
                Promise.resolve().then(n.bind(n, 83808)),
                Promise.resolve().then(n.bind(n, 22191)),
                Promise.resolve().then(n.bind(n, 14858)),
                Promise.resolve().then(n.bind(n, 61945)),
                Promise.resolve().then(n.bind(n, 83920)),
                Promise.resolve().then(n.bind(n, 49545)),
                Promise.resolve().then(n.bind(n, 3796)),
                Promise.resolve().then(n.bind(n, 40953)),
                Promise.resolve().then(n.bind(n, 30542)),
                Promise.resolve().then(n.bind(n, 59121)),
                Promise.resolve().then(n.bind(n, 71773)),
                Promise.resolve().then(n.bind(n, 34284)),
                Promise.resolve().then(n.bind(n, 46151)),
                Promise.resolve().then(n.bind(n, 32087)),
                Promise.resolve().then(n.bind(n, 5701)),
                Promise.resolve().then(n.bind(n, 10659)),
                Promise.resolve().then(n.bind(n, 68135)),
                Promise.resolve().then(n.bind(n, 75265)),
                Promise.resolve().then(n.bind(n, 36321)),
                Promise.resolve().then(n.bind(n, 29098)),
                Promise.resolve().then(n.bind(n, 92191)),
                Promise.resolve().then(n.bind(n, 27120)),
                Promise.resolve().then(n.bind(n, 53022)),
                Promise.resolve().then(n.bind(n, 22748)),
                Promise.resolve().then(n.bind(n, 84199)),
                Promise.resolve().then(n.bind(n, 81218)),
                Promise.resolve().then(n.bind(n, 90169)),
                Promise.resolve().then(n.bind(n, 6429)),
                Promise.resolve().then(n.bind(n, 44128)),
                Promise.resolve().then(n.bind(n, 31286)),
                Promise.resolve().then(n.bind(n, 92496)),
                Promise.resolve().then(n.bind(n, 21183)),
                Promise.resolve().then(n.bind(n, 59888)),
                Promise.resolve().then(n.bind(n, 95112)),
                Promise.resolve().then(n.bind(n, 57594)),
                Promise.resolve().then(n.bind(n, 26069)),
                Promise.resolve().then(n.bind(n, 4433)),
                Promise.resolve().then(n.bind(n, 50)),
                Promise.resolve().then(n.bind(n, 11262));
        },
        55365: (e) => {
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
        60194: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => P });
            var r = n(32290),
                o = n(63618),
                s = n(96103),
                i = n(55178),
                l = n(60900),
                a = n(39407),
                d = n(63423),
                m = n(82586),
                c = n(71926),
                h = n(49574),
                u = n(44574),
                v = n(30310),
                b = n.n(v);
            let P = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    v = s({ id: 'error-messages.something-went-wrong' });
                (0, h.CgZ)(v);
                let { sendRefreshEvent: P } = (0, h.cYT)(),
                    _ = (0, i.useCallback)(() => {
                        P(), (window.location.href = h.Zyd.main.href);
                    }, [P]),
                    { contentRef: g } = (0, h.gKY)();
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(b().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(u.Lh, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(b().navigation, { [b().navigation_desktop]: !g }),
                                withForwardControl: !1,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, o.$)(b().content, { [b().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(m.Icon, { className: b().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(c.Heading, { className: (0, o.$)(b().title, b().important), variant: 'h3', size: 'xs', children: v }),
                                (0, r.jsxs)(c.Caption, {
                                    className: (0, o.$)(b().text, b().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(d.$, {
                                    onClick: _,
                                    className: b().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(c.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        75645: (e, t, n) => {
            'use strict';
            n.d(t, { hO: () => h, jr: () => u, jp: () => v, QZ: () => o }), n(85377);
            var r = n(55178);
            let o = (e, t, n) => {
                let o = null != n && n;
                return {
                    topColorStyle: (0, r.useMemo)(() => {
                        if (void 0 === t) return;
                        let n = o ? 93 : 17,
                            r = t - n;
                        return { '--average-color-background': e, transform: 'translateY('.concat(t >= n ? 0 : r, 'px)'), opacity: 1 };
                    }, [t, o, e]),
                    headerStyle: (0, r.useMemo)(() => ({ '--average-color-background': e }), [e]),
                };
            };
            var s = n(32290),
                i = n(8055),
                l = n(96103),
                a = n(40996),
                d = n(49574),
                m = n(44574);
            let c = (e) => {
                    let { element: t, scrollTop: n, isMobile: r } = e,
                        o = 0.6 * t.clientHeight;
                    return n + (r ? 60 : 76) >= t.offsetTop + o;
                },
                h = (0, l.PA)((e) => {
                    let { children: t, scrollElement: n, outerTitle: o = '', headerElement: l, headerThreshold: h, shouldHideHeader: u } = e,
                        [v, b] = (0, r.useState)(o),
                        [P, _] = (0, r.useState)(null),
                        [g, p] = (0, r.useState)(null),
                        [x, f] = (0, r.useState)(null),
                        [j, N] = (0, r.useState)(!1),
                        [w, k] = (0, r.useState)(!1),
                        [S, G] = (0, r.useState)(!1),
                        [E, W] = (0, r.useState)(!1),
                        {
                            settings: { isMobile: C },
                        } = (0, d.Pjs)();
                    (0, r.useLayoutEffect)(() => {
                        b(o);
                    }, [o]);
                    let F = (0, r.useCallback)(() => {
                        let e = null != h ? h : 10,
                            t = l ? Number(l.offsetTop) - e : e;
                        t < 0 && (t = 0);
                        let r = (e) => {
                            G(e > t),
                                u && W(e > 30),
                                (null == P ? void 0 : P.current) && N(c({ element: null == P ? void 0 : P.current, scrollTop: e, isMobile: C })),
                                (null == g ? void 0 : g.current) && k(c({ element: null == g ? void 0 : g.current, scrollTop: e, isMobile: C }));
                        };
                        C ? r(window.scrollY) : n && r(n.scrollTop);
                    }, [h, l, C, u, P, g, n]);
                    (0, r.useEffect)(() => {
                        C ? 0 === window.scrollY && G(!1) : (n && 0 !== n.scrollTop) || G(!1);
                    }, [n, null == n ? void 0 : n.scrollTop, C]);
                    let T = (0, r.useMemo)(() => (C ? { onScroll: (0, i.A)(F, 200) } : { onScroll: (0, i.A)(F, 200), elementRef: n }), [F, n, C]);
                    (0, a.L)(T);
                    let y = (0, r.useMemo)(
                        () => ({
                            title: v,
                            setTitle: b,
                            titleElement: P,
                            scrollElement: C ? null : n,
                            setTitleElement: _,
                            childElement: g,
                            setChildElement: p,
                            child: x,
                            setChild: f,
                            isScrolledChild: w,
                            isScrolledTitle: j,
                            isScrolling: S,
                            isHeaderHidden: E,
                        }),
                        [v, j, P, n, S, C, x, g, w, E],
                    );
                    return (0, s.jsx)(m.B9.Provider, { value: y, children: t });
                }),
                u = (e) => {
                    let { children: t, child: n, className: o } = e,
                        { setChildElement: i, setChild: l } = (0, r.useContext)(m.B9),
                        a = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(() => {
                            (null == a ? void 0 : a.current) && i(a), n && l(n);
                        }, [a, n, i, l]),
                        (0, r.useEffect)(
                            () => () => {
                                l(null);
                            },
                            [l],
                        ),
                        (0, s.jsx)('div', { ref: a, className: o, children: t })
                    );
                },
                v = (e) => {
                    let { children: t, title: n, className: o } = e,
                        { setTitleElement: i, setTitle: l } = (0, r.useContext)(m.B9),
                        a = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(() => {
                            (null == a ? void 0 : a.current) && i(a), n && l(n);
                        }, [a, n, i, l]),
                        (0, r.useEffect)(
                            () => () => {
                                l('');
                            },
                            [l],
                        ),
                        (0, s.jsx)('div', { ref: a, className: o, children: t })
                    );
                };
        },
        76822: (e, t, n) => {
            'use strict';
            let r;
            n.d(t, { useMetrika: () => i });
            var o = n(55178),
                s = n(43740);
            let i = () => {
                let e = (r || (r = (0, s.a)()), r),
                    t = (0, o.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, o.useMemo)(() => ({ ...e, isLoaded: t }), [t]);
            };
        },
        80719: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => r.NotFound });
            var r = n(12119);
        },
        84943: (e) => {
            e.exports = { root: 'Genre_root__80dlk', link: 'Genre_link__Wewaq', linkTitle: 'Genre_linkTitle__ORAsw', list: 'Genre_list__C2Pxf' };
        },
        86568: (e) => {
            e.exports = {
                root: 'GenresPage_root__LhP_S',
                shimmerTitle: 'GenresPage_shimmerTitle__4j8uH',
                content: 'GenresPage_content__yhKrQ',
                list: 'GenresPage_list__l2Cuc',
            };
        },
        91676: (e, t, n) => {
            'use strict';
            n.d(t, { G4: () => l.Genre, Gc: () => i, kc: () => o });
            var r = n(60754);
            let o = (e) => ({ tag: e.tag, title: e.title, subGenres: (0, r.wg)((e.leaves || []).map((e) => ({ tag: e.tag, title: e.title }))) }),
                s = r.gK.model('GenreListItemSubGenreModel', { tag: r.gK.string, title: r.gK.string }),
                i = r.gK.model('GenreListItemModel', { tag: r.gK.string, title: r.gK.string, subGenres: r.gK.array(s) });
            var l = n(95593);
        },
        95593: (e, t, n) => {
            'use strict';
            n.d(t, { Genre: () => d });
            var r = n(32290),
                o = n(96103),
                s = n(71926),
                i = n(44574),
                l = n(84943),
                a = n.n(l);
            let d = (0, o.PA)((e) => {
                let { tag: t, title: n, subGenres: o } = e;
                return (0, r.jsxs)('div', {
                    className: a().root,
                    children: [
                        (0, r.jsx)(i.N_, {
                            className: a().link,
                            href: '/genre/'.concat(t),
                            children: (0, r.jsx)(s.Heading, { variant: 'h2', size: 'm', lineClamp: 1, className: a().linkTitle, children: n }),
                        }),
                        o.length > 0 &&
                            (0, r.jsx)('div', {
                                className: a().list,
                                children: o.map((e) =>
                                    (0, r.jsx)(
                                        'div',
                                        {
                                            className: a().item,
                                            children: (0, r.jsx)(i.N_, {
                                                className: a().link,
                                                href: '/genre/'.concat(e.tag),
                                                children: (0, r.jsx)(s.Caption, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    lineClamp: 1,
                                                    className: a().linkTitle,
                                                    children: e.title,
                                                }),
                                            }),
                                        },
                                        e.tag,
                                    ),
                                ),
                            }),
                    ],
                });
            });
        },
    },
    (e) => {
        e.O(0, [3445, 1670, 6375, 9204, 1311, 7764, 6706, 3267, 9769, 9574, 4574, 6049, 4220, 9562, 7358], () => e((e.s = 45915))), (_N_E = e.O());
    },
]);
