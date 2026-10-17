(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4011],
    {
        526: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => i });
            var r = n(23198),
                a = n(74631),
                o = n(81517),
                c = n(57159);
            function i(e, t) {
                var n,
                    i = function (n) {
                        var i = n.onOpen,
                            l = n.onClose,
                            s = (0, r.__read)((0, a.useState)(!1), 2),
                            u = s[0],
                            d = s[1],
                            f = (0, a.useCallback)(
                                function () {
                                    (d(!0), null == i || i());
                                },
                                [d, i],
                            ),
                            v = (0, a.useCallback)(
                                function () {
                                    (d(!1), null == l || l());
                                },
                                [d, l],
                            ),
                            m = (0, c.w)((0, r.__assign)((0, r.__assign)({}, n), { visible: u, onOpen: f, onClose: v })),
                            h = m.avatarProps,
                            p = m.contentProps,
                            g = m.dialogProps;
                        return a.createElement(
                            e,
                            (0, r.__assign)({}, n, h),
                            n.children,
                            a.createElement(t, (0, r.__assign)({}, g, { onClose: v }), a.createElement(o.U, (0, r.__assign)({}, p))),
                        );
                    };
                return ((i.displayName = "'withUserID(" + (null != (n = e.displayName) ? n : e) + ")'"), i);
            }
        },
        13933: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => s });
            var r = n(74631),
                a = n(85936),
                o = n(97926);
            n(69827);
            var c = (0, a.cn)('UserID', 'CloseButton'),
                i = function (e) {
                    var t = e.onClick,
                        n = e.colorScheme;
                    return r.createElement(
                        'button',
                        { className: c({ colorScheme: n }), onClick: t, 'aria-label': 'Закрыть', tabIndex: 1 },
                        r.createElement(
                            'svg',
                            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', focusable: 'false', 'aria-hidden': 'true' },
                            r.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z',
                                fill: 'currentColor',
                            }),
                        ),
                    );
                };
            n(33533);
            var l = (0, a.cn)('UserWidget', 'Dialog'),
                s = (0, r.forwardRef)(function (e, t) {
                    var n,
                        a,
                        c = e.visible,
                        s = e.loading,
                        u = e.colorScheme,
                        d = e.platform,
                        f = e.onClose,
                        v = e.className;
                    return (
                        (0, o.H)({ enabled: c && 'touch' === d }),
                        (n = { onScroll: f }),
                        ((a = (0, r.useRef)(n)).current = n),
                        (0, r.useEffect)(function () {
                            var e = function () {
                                var e, t;
                                null == (t = (e = a.current).onScroll) || t.call(e);
                            };
                            if (a.current.onScroll)
                                return (
                                    document.addEventListener('scroll', e),
                                    function () {
                                        document.removeEventListener('scroll', e);
                                    }
                                );
                        }, []),
                        r.createElement(
                            'div',
                            {
                                role: 'dialog',
                                'aria-busy': s,
                                'aria-modal': 'true',
                                className: l('Dialog', { visible: c, loading: s, colorScheme: u, platform: d }, [v]),
                                ref: t,
                            },
                            s && r.createElement(i, { colorScheme: u, onClick: f }),
                            e.children,
                        )
                    );
                });
        },
        20319: () => {},
        24450: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => a });
            var r = n(74631),
                a = n(84932).O ? r.useLayoutEffect : r.useEffect;
        },
        27930: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { User: () => m, UserBase: () => f }));
            var r = n(74631),
                a = n(85936),
                o = n(62596),
                c = n(23198),
                i = function (e, t, n) {
                    return (void 0 === t && (t = '0/0-0'), 'prod_yateam' === e)
                        ? 'https://center.yandex-team.ru/api/v1/user/' + ('0/0-0' === t ? '404' : t) + '/avatar/' + (n ? '85' : '42') + '.jpg'
                        : ('test' !== e ? 'https://avatars.mds.yandex.net' : 'https://avatars.mdst.yandex.net') +
                              '/get-yapic/' +
                              t +
                              '/' +
                              (n ? 'islands-retina-middle' : 'islands-middle');
                };
            n(28291);
            var l = (0, a.cn)('UserID', 'Avatar'),
                s = function (e) {
                    var t,
                        n,
                        a,
                        o,
                        s = e.env,
                        u = e.avatarId,
                        d = e.plus,
                        f = e.child,
                        v = e.colorScheme,
                        m = e.className,
                        h = (0, c.__read)((0, r.useState)(!1), 2),
                        p = h[0],
                        g = h[1],
                        w =
                            ((n = (t = { avatarId: u, env: s }).env),
                            (a = t.avatarId),
                            {
                                src: (o = (0, r.useMemo)(
                                    function () {
                                        return i(n, a, !1);
                                    },
                                    [n, a],
                                )),
                                srcSet:
                                    o +
                                    ' 1x, ' +
                                    (0, r.useMemo)(
                                        function () {
                                            return i(n, a, !0);
                                        },
                                        [n, a],
                                    ) +
                                    ' 2x',
                            }),
                        y = w.src,
                        b = w.srcSet,
                        C = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(
                            function () {
                                var e = C.current;
                                window && f && e && g(e.getBoundingClientRect().width <= 36);
                            },
                            [f, C],
                        ),
                        r.createElement(
                            'div',
                            { className: l({ child: f, plus: d, small: p, dark: 'dark' === v }, [m]), ref: C },
                            r.createElement('img', { src: y, className: 'UserID-Avatar-Image', srcSet: b }),
                            f &&
                                r.createElement(
                                    'svg',
                                    { className: 'UserID-Avatar-ChildStroke', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 300 300' },
                                    r.createElement('path', {
                                        fillRule: 'evenodd',
                                        clipRule: 'evenodd',
                                        d: 'M165.9 37.9822L166.068 38.0049C166.221 38.0257 166.442 38.0562 166.726 38.0968C167.295 38.1778 168.118 38.2987 169.162 38.4618C171.249 38.7878 174.224 39.283 177.813 39.9651C184.975 41.3261 194.666 43.4461 204.678 46.4778C214.632 49.492 225.211 53.4982 233.986 58.7338C242.568 63.8543 250.611 70.8545 253.512 80.3646C262.231 108.946 272.638 153.705 267.746 188.864C263.821 217.084 243.295 239.946 214.374 255.633C185.337 271.383 152.717 277.077 132.993 274.341C113.268 271.605 83.4377 257.247 59.8001 234.191C36.2561 211.225 22.7482 183.642 26.674 155.422C33.0239 109.778 55.8032 71.8059 70.7041 51.2431C76.2121 43.6422 85.9125 39.8089 95.3615 37.7283C105.121 35.5793 116.278 34.95 126.593 35.003C136.965 35.0564 146.789 35.8036 153.998 36.5322C157.61 36.8972 160.584 37.2595 162.664 37.5319C163.704 37.6681 164.522 37.782 165.085 37.8627C165.367 37.903 165.585 37.9351 165.736 37.9575L165.9 37.9822ZM210.975 249.385C238.745 234.322 257.19 213.071 260.694 187.886C265.355 154.381 255.388 110.913 246.701 82.4364C238.203 54.5778 164.895 45.0216 164.895 45.0216C164.895 45.0216 92.1316 33.8026 76.4727 55.4113C61.8934 75.5303 39.8488 112.394 33.7267 156.401C30.2229 181.586 42.1687 207.053 64.7756 229.104C87.5594 251.328 116.05 264.812 133.973 267.298C151.895 269.784 182.987 264.566 210.975 249.385Z',
                                    }),
                                ),
                        )
                    );
                };
            ((s.displayName = 'UserIDAvatar'), n(93175));
            var u = function (e) {
                var t = e.children,
                    n = e.fetchMail,
                    a = e.tld,
                    o = e.showCounter,
                    i = e.counterVariant,
                    l = void 0 === i ? 'number' : i,
                    s = e.colorScheme,
                    u = (0, c.__read)((0, r.useState)(0), 2),
                    d = u[0],
                    f = u[1];
                (0, r.useEffect)(
                    function () {
                        n &&
                            o &&
                            fetch('https://mail.yandex.' + a + '/api/v2/userid/counters?silent', { credentials: 'include' })
                                .then(function (e) {
                                    return e.json();
                                })
                                .then(function (e) {
                                    return f(e.counters.unread);
                                })
                                .catch(function (e) {});
                    },
                    [a, n, o],
                );
                var v = n && d > 0 ? Math.min(d, 99) : void 0,
                    m = !!(n && v && d > v),
                    h = v && o ? '' + v + (m ? '+' : '') : null,
                    p = n || o,
                    g = ['UserID-Badge-Dot', 'UserID-Badge-Dot_colorScheme_' + s, 'UserID-Badge-Dot_variant_' + l].join(' ');
                return r.createElement('div', { className: 'UserID-Badge' }, t, p && r.createElement('div', { className: g }, 'number' === l && h));
            };
            ((u.displayName = 'UserIDBadge'), n(42183));
            var d = (0, a.cn)('UserID', 'Wrapper'),
                f = (0, r.forwardRef)(function (e, t) {
                    var n = e.tld,
                        a = e.tabIndex,
                        c = e.children,
                        i = e.env,
                        l = e.colorScheme,
                        f = e.userData,
                        v = e.onClick,
                        m = e.onPointerEnter,
                        h = e.className,
                        p = e.fetchMail,
                        g = e.showCounter,
                        w = e.counterVariant,
                        y = e.visible,
                        b = e.ariaLabel,
                        C = e.avatarSize,
                        E = e.platform,
                        _ = e.beforeAvatar,
                        S = e.afterAvatar,
                        k = f || {},
                        L = k.child,
                        P = k.plus,
                        I = k.avatarId,
                        R = (0, r.useRef)(null);
                    return (
                        (0, o.N)(R, t),
                        r.createElement(
                            'div',
                            { className: d({ child: L, plus: P, default: !P }, [h]), style: null !== C ? { '--user-id-size': (C || 42) + 'px' } : void 0 },
                            r.createElement(
                                'button',
                                {
                                    'aria-expanded': y,
                                    'aria-haspopup': !0,
                                    'aria-label': b || 'Ваш профиль',
                                    className: 'UserID-Account',
                                    ref: R,
                                    role: 'button',
                                    tabIndex: void 0 === a ? 0 : a,
                                    onClick: v,
                                    onPointerEnter: m,
                                },
                                _,
                                r.createElement(
                                    u,
                                    {
                                        fetchMail: p && 'test' !== i,
                                        counterVariant: w,
                                        tld: void 0 === n ? 'ru' : n,
                                        colorScheme: l,
                                        showCounter: 'touch' !== E && (p || !0 === g),
                                    },
                                    r.createElement(s, { env: i, avatarId: I, plus: P, child: L, colorScheme: l }),
                                ),
                                S,
                            ),
                            c,
                        )
                    );
                });
            f.displayName = 'UserBase';
            var v = n(13933),
                m = (0, n(526).B)(f, v.l);
        },
        28291: () => {},
        30956: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { useUserID: () => r.w }));
            var r = n(57159);
        },
        33533: () => {},
        40788: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { Content: () => r.U, cnUserID: () => r.K }));
            var r = n(81517);
        },
        42183: () => {},
        46450: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    bindSnapshot: function () {
                        return c;
                    },
                    createAsyncLocalStorage: function () {
                        return o;
                    },
                    createSnapshot: function () {
                        return i;
                    },
                }));
            let n = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class r {
                disable() {
                    throw n;
                }
                getStore() {}
                run() {
                    throw n;
                }
                exit() {
                    throw n;
                }
                enterWith() {
                    throw n;
                }
                static bind(e) {
                    return e;
                }
            }
            let a = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function o() {
                return a ? new a() : new r();
            }
            function c(e) {
                return a ? a.bind(e) : r.bind(e);
            }
            function i() {
                return a
                    ? a.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        49971: (e, t, n) => {
            'use strict';
            function r(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                n(25839),
                n(71910),
                n(65780),
                n(4865));
        },
        53855: (e, t) => {
            'use strict';
            t.cn = (function (e) {
                function t(t, a, o, c) {
                    var i = a ? n + t + e.e + a : n + t,
                        l = i;
                    if (o) {
                        var s = ' ' + l + e.m;
                        for (var u in o)
                            if (o.hasOwnProperty(u)) {
                                var d = o[u];
                                !0 === d ? (l += s + u) : d && (l += s + u + r + d);
                            }
                    }
                    if (void 0 !== c)
                        for (var f = 0, v = c.length; f < v; f++) {
                            var m = c[f];
                            if (m && 'string' == typeof m.valueOf())
                                for (var h = m.valueOf().split(' '), p = 0; p < h.length; p++) {
                                    var g = h[p];
                                    g !== i && (l += ' ' + g);
                                }
                        }
                    return l;
                }
                var n = e.n || '',
                    r = e.v || e.m;
                return function (e, n) {
                    return function (r, a, o) {
                        return 'string' == typeof r ? (Array.isArray(a) ? t(e, r, void 0, a) : t(e, r, a, o)) : t(e, n, r, a);
                    };
                };
            })({ e: '-', m: '_' });
        },
        56111: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { useIsomorphicLayoutEffect: () => r.E }));
            var r = n(24450);
        },
        56443: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { withUserID: () => r.B }));
            var r = n(526);
        },
        57159: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => P });
            var r,
                a,
                o = n(23198),
                c = n(74631),
                i = n(62596),
                l = n(24450),
                s = [],
                u = null,
                d = null;
            function f() {
                return s[s.length - 1];
            }
            function v(e, t, n) {
                var r,
                    a,
                    o = f();
                o &&
                    o.onClose &&
                    (!n || n === o.closeStrategy) &&
                    (('click' === t &&
                        ((r = o.refs),
                        (a = e.target),
                        r.some(function (e) {
                            return e.current instanceof HTMLElement && e.current.contains(a);
                        }))) ||
                        o.onClose({ nativeEvent: e, source: t }));
            }
            function m(e) {
                var t = e.key;
                ('Escape' === t || 'Esc' === t) && v(e, 'esc');
            }
            function h(e) {
                ((u = e.target), (d = f()), v(e, 'click', 'pressdown'));
            }
            function p(e) {
                var t = u;
                u = null;
                var n = d;
                ((d = null), e.button > 0 || n !== f() || (t === e.target && v(e, 'click', 'pressup')));
            }
            var g = Object.freeze({
                    count: function () {
                        return s.length;
                    },
                    addOverlay: function (e) {
                        (0 === s.length &&
                            (document.addEventListener('keyup', m), document.addEventListener('pointerdown', h, !0), document.addEventListener('click', p, !0)),
                            s.push(e));
                    },
                    removeOverlay: function (e) {
                        (s.splice(s.indexOf(e), 1),
                            0 === s.length &&
                                (document.removeEventListener('keyup', m),
                                document.removeEventListener('pointerdown', h, !0),
                                document.removeEventListener('click', p, !0)));
                    },
                    getTopOverlayOptions: f,
                }),
                w = Date.now(),
                y = 'undefined' != typeof performance ? performance : null;
            (null == (r = null == y ? void 0 : y.timing) ? void 0 : r.navigationStart) &&
                (w = null == (a = null == performance ? void 0 : performance.timing) ? void 0 : a.navigationStart);
            var b =
                    y && 'function' == typeof y.now
                        ? function () {
                              return y.now();
                          }
                        : 'function' == typeof Date.now
                          ? function () {
                                return Date.now() - w;
                            }
                          : function () {
                                return new Date().getTime() - w;
                            },
                C = 'undefined' != typeof window,
                E = function () {
                    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                },
                _ = function (e) {
                    var t = e.enabled,
                        n = e.onHeightChange,
                        r = (0, o.__read)((0, c.useState)(C ? E() : void 0), 2),
                        a = r[0],
                        i = r[1],
                        s = (0, c.useCallback)(
                            function () {
                                var e = E();
                                a !== e && (i(E()), n(e));
                            },
                            [a, n],
                        );
                    (0, l.E)(
                        function () {
                            if (t)
                                return (
                                    window.addEventListener('resize', s),
                                    function () {
                                        window.removeEventListener('resize', s);
                                    }
                                );
                        },
                        [s, t],
                    );
                },
                S = function (e) {
                    var t = e.touchBreakpointWidth,
                        n = void 0 === t ? 520 : t,
                        r = e.platform,
                        a = void 0 === r ? 'auto' : r,
                        i = (0, o.__read)((0, c.useState)(), 2),
                        s = i[0],
                        u = i[1];
                    return (
                        (0, c.useEffect)(
                            function () {
                                if ('auto' !== a) return void u(a);
                                C && u(window.matchMedia('(max-width: ' + n + 'px)').matches ? 'touch' : 'desktop');
                            },
                            [n, a],
                        ),
                        (0, l.E)(
                            function () {
                                if (C && 'auto' === a) {
                                    var e = window.matchMedia('(max-width: ' + n + 'px)');
                                    return (
                                        t(e),
                                        e.addEventListener ? e.addEventListener('change', t) : e.addListener(t),
                                        function () {
                                            e.removeEventListener ? e.removeEventListener('change', t) : e.removeListener(t);
                                        }
                                    );
                                }
                                function t(e) {
                                    e.matches ? u('touch') : u('desktop');
                                }
                            },
                            [s, u, n],
                        ),
                        s
                    );
                },
                k = ['tr', 'am', 'ge'],
                L = ['il'];
            function P(e) {
                var t,
                    n,
                    r,
                    a,
                    s,
                    u,
                    d,
                    f,
                    v,
                    m,
                    h,
                    p,
                    w,
                    y,
                    P,
                    I = e.avatarRef,
                    R = e.avatarSize,
                    O = void 0 === R ? [42, 22] : R,
                    x = e.colorScheme,
                    D = void 0 === x ? 'light' : x,
                    M = e.dialogClassName,
                    U = e.dialogRef,
                    N = e.dir,
                    T = void 0 === N ? 'ltr' : N,
                    j = e.env,
                    A = void 0 === j ? 'prod' : j,
                    B = e.essentialRef,
                    H = e.features,
                    W = e.fetchUserData,
                    X = e.host,
                    Y = e.iframeRef,
                    z = e.lang,
                    K = e.onClose,
                    V = e.onLoad,
                    J = e.onMenuItemClick,
                    Z = e.onOpen,
                    q = e.onThemeChange,
                    F = e.onLocaleChange,
                    $ = e.platform,
                    G = e.preload,
                    Q = void 0 !== G && G,
                    ee = e.project,
                    et = e.queryParams,
                    en = e.dynamicParams,
                    er = e.retpath,
                    ea = e.rpcHandlers,
                    eo = e.theme,
                    ec = e.tld,
                    ei = e.touchBreakpointWidth,
                    el = e.userData,
                    es = e.visible,
                    eu = void 0 !== es && es,
                    ed = (0, c.useRef)({}),
                    ef = (0, c.useRef)(null),
                    ev = (0, c.useRef)(null),
                    em = (0, c.useRef)(null),
                    eh =
                        ((t = void 0 === ec ? 'ru' : ec),
                        (0, c.useMemo)(
                            function () {
                                return k.includes(t) ? 'com.' + t : L.includes(t) ? 'co.' + t : t;
                            },
                            [t],
                        ));
                ((0, i.N)(ef, I || (0, c.createRef)()), (ev = null != U ? U : ev), (em = null != Y ? Y : em));
                var ep = (0, o.__read)((0, c.useState)(!0), 2),
                    eg = ep[0],
                    ew = ep[1],
                    ey = (0, c.useMemo)(
                        function () {
                            return C ? er || location.href : er;
                        },
                        [er],
                    ),
                    eb = (0, o.__read)((0, c.useState)(Q), 2),
                    eC = eb[0],
                    eE = eb[1],
                    e_ = (0, c.useRef)({ colorScheme: D, theme: eo, retpath: ey }),
                    eS = (0, c.useMemo)(
                        function () {
                            if (X) return 'https://' + X;
                            if ('prod_yateam' === A) return 'https://user-id.yandex-team.ru';
                            if (C) {
                                var e = new URL(location.href).searchParams.get('user_id_host');
                                if (e) return 'https://' + e;
                            }
                            return 'https://yandex.' + eh;
                        },
                        [X, eh, A],
                    ),
                    ek = (0, c.useMemo)(
                        function () {
                            eC ||
                                (e_.current.colorScheme === D && e_.current.theme === eo && e_.current.retpath === ey) ||
                                (e_.current = { colorScheme: D, theme: eo, retpath: ey });
                            var e = new URL('user-id', eS);
                            if (
                                (e_.current.retpath && e.searchParams.set('encodedRetpath', encodeURIComponent(e_.current.retpath)),
                                e_.current.colorScheme && e.searchParams.set('colorScheme', e_.current.colorScheme),
                                e_.current.theme && e.searchParams.set('theme', e_.current.theme),
                                z && e.searchParams.set('l10n', z),
                                Array.isArray(H))
                            ) {
                                var t = H.join(',');
                                e.searchParams.set('exp_flags', t);
                            }
                            for (var n in (ee && e.searchParams.set('project', ee), A && e.searchParams.set('env', A), e.searchParams.set('dir', T), et))
                                e.searchParams.set(n, et[n]);
                            for (var n in en) e.searchParams.set(n, en[n]);
                            return e.toString();
                        },
                        [eS, H, ee, et, en, D, eo, ey, eC, A, T, z],
                    );
                (0, c.useEffect)(
                    function () {
                        !eC && (Q || W) && eE(!0);
                    },
                    [eC, Q, W],
                );
                var eL = S({ platform: $, touchBreakpointWidth: ei }),
                    eP = (0, c.useCallback)(
                        function () {
                            eC || eE(!0);
                        },
                        [eC],
                    ),
                    eI = (0, c.useMemo)(
                        function () {
                            return null === O ? null : 'number' == typeof O ? O : 'touch' === eL ? O[1] : O[0];
                        },
                        [eL, O],
                    ),
                    eR = (0, c.useCallback)(
                        function () {
                            var e;
                            (null == (e = ef.current) || e.focus(), null == K || K());
                        },
                        [K],
                    ),
                    eO = (0, o.__read)((0, c.useState)(), 2),
                    ex = eO[0],
                    eD = eO[1],
                    eM = (0, o.__read)((0, c.useState)(el), 2),
                    eU = eM[0],
                    eN = eM[1];
                (0, c.useEffect)(
                    function () {
                        eN(el);
                    },
                    [el],
                );
                var eT = (0, c.useCallback)(
                    function (e) {
                        if (C) {
                            if ('desktop' === eL) return void eD(e);
                            eD(E());
                        }
                    },
                    [eL],
                );
                _({ enabled: 'touch' === eL, onHeightChange: eT });
                var ej = (0, c.useRef)(),
                    eA = ((r = (n = {
                        loading: eg,
                        iframeRef: em,
                        origin: eS,
                        rpcHandler: (0, c.useCallback)(
                            function (e, t) {
                                var n;
                                switch (e.methodCall) {
                                    case 'onInit':
                                        (W && eN(e.params[0]), null == V || V());
                                        break;
                                    case 'onDataLoad':
                                        var r = ed.current;
                                        if ('number' == typeof r.start && 'number' != typeof r.end && ej.current) {
                                            r.end = b();
                                            var a = r.end - r.start;
                                            ej.current({ methodCall: 'onSendTimeToInteractive', params: [{ delta: a }] });
                                        }
                                    case 'updateUserHeight':
                                        (eT(e.params[0].height), ew(!1));
                                        break;
                                    case 'ITEM_CLICK':
                                        var c = e.params[0];
                                        null == J || J(c.item, c, { onClose: eR });
                                        break;
                                    case 'closeUserID':
                                        null == eR || eR();
                                        break;
                                    case 'updateTheme':
                                        var i = e.params[0].theme;
                                        null == q || q(i);
                                        break;
                                    case 'updateLocale':
                                        var l = e.params[0].locale;
                                        null == F || F(l);
                                        break;
                                    default:
                                        if (!(null == ea ? void 0 : ea[e.methodCall])) return;
                                        Promise.resolve(
                                            null == (n = null == ea ? void 0 : ea[e.methodCall]) ? void 0 : n.call.apply(n, (0, o.__spread)([ea], e.params)),
                                        ).then(t);
                                }
                            },
                            [ea, J, eR, q, F, eT, eN, W, V],
                        ),
                    }).loading),
                    (a = n.iframeRef),
                    (s = n.origin),
                    (u = n.rpcHandler),
                    (d = (0, c.useRef)([])),
                    (f = (0, c.useCallback)(
                        function (e) {
                            var t,
                                n,
                                o = JSON.stringify(e);
                            r ? d.current.push(o) : null == (n = null == (t = a.current) ? void 0 : t.contentWindow) || n.postMessage(o, '*');
                        },
                        [r, a],
                    )),
                    (v = (0, c.useCallback)(
                        function (e) {
                            var t;
                            if (e.origin === s) {
                                try {
                                    t = JSON.parse(e.data);
                                } catch (e) {
                                    return;
                                }
                                t.methodCall &&
                                    (null == u ||
                                        u((0, o.__assign)({}, t), function (e) {
                                            var n;
                                            f({
                                                returnCall: !0,
                                                params: [e],
                                                resultCallbackIndex: (null == (n = t.resultCallbackIndex) ? void 0 : n.__callbackId) || -1,
                                            });
                                        }));
                            }
                        },
                        [s, u, f],
                    )),
                    (0, c.useEffect)(
                        function () {
                            return (
                                window.addEventListener('message', v),
                                function () {
                                    window.removeEventListener('message', v);
                                }
                            );
                        },
                        [v],
                    ),
                    (0, c.useEffect)(
                        function () {
                            a &&
                                !r &&
                                0 !== d.current.length &&
                                (d.current.forEach(function (e) {
                                    var t, n;
                                    null == (n = null == (t = a.current) ? void 0 : t.contentWindow) || n.postMessage(e, '*');
                                }),
                                (d.current = []));
                        },
                        [r, a],
                    ),
                    { sendMessage: f }).sendMessage;
                ((ej.current = eA),
                    (0, c.useEffect)(
                        function () {
                            eA({ methodCall: 'updateRetpath', params: [{ retpath: ey }] });
                        },
                        [ey, eA],
                    ),
                    (0, c.useEffect)(
                        function () {
                            eA({ methodCall: 'onParamsChange', params: [(0, o.__assign)({}, en)] });
                        },
                        [en, eA],
                    ),
                    (0, c.useEffect)(
                        function () {
                            eA({ methodCall: 'updateTheme', params: [{ colorScheme: D, theme: eo }] });
                        },
                        [D, eA, eo],
                    ));
                var eB = (0, c.useCallback)(
                        function (e) {
                            eA({ methodCall: 'focusFirst', params: [{ fromKeyboard: e }] });
                        },
                        [eA],
                    ),
                    eH = (0, c.useCallback)(
                        function () {
                            eu ? (eB(!0), eR()) : (eC || eE(!0), eB(!1), null == Z || Z());
                        },
                        [eB, Z, eC, eu, eR],
                    );
                ((h = (m = {
                    visible: eu,
                    onClose: eR,
                    essentialRefs: (0, c.useMemo)(
                        function () {
                            var e = [ev, ef];
                            return (B && e.push(B), e);
                        },
                        [ev, ef, B],
                    ),
                }).visible),
                    (p = m.onClose),
                    (w = m.essentialRefs),
                    (y = m.unsafe_strategy),
                    ((P = (0, c.useRef)({ onClose: p, refs: w, closeStrategy: void 0 === y ? 'pressdown' : y })).current.onClose = p),
                    (P.current.refs = w),
                    (0, c.useEffect)(
                        function () {
                            if (h) {
                                var e = P.current;
                                return (
                                    g.addOverlay(e),
                                    function () {
                                        g.removeOverlay(e);
                                    }
                                );
                            }
                        },
                        [h],
                    ),
                    (0, l.E)(
                        function () {
                            var e;
                            eu && (null != (e = ed.current).start || (e.start = b()));
                        },
                        [eu],
                    ));
                var eW = { colorScheme: D, height: ex, loading: eg, preload: eC, ref: em, src: ek, width: 'desktop' === eL ? 320 : '100%' },
                    eX = { className: M, colorScheme: D, platform: eL, ref: ev, visible: eu, onClose: eR, loading: eg };
                return {
                    avatarProps: { avatarSize: eI, env: A, onClick: eH, onPointerEnter: eP, platform: eL, ref: ef, retpath: ey, userData: eU, visible: eu, tld: eh },
                    contentProps: eW,
                    dialogProps: eX,
                };
            }
        },
        62596: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => a });
            var r = n(74631);
            function a(e, t) {
                (0, r.useImperativeHandle)(t, function () {
                    return e.current;
                });
            }
        },
        65239: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
        },
        65712: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { lock: () => g, unlock: () => w }));
            var r,
                a = n(84932);
            function o(e) {
                return 'undefined' != typeof window && null != window.navigator && e.test(window.navigator.userAgent);
            }
            function c() {
                return o(/iphone|ipod|ipad/i) || (o(/macintosh/i) && navigator.maxTouchPoints > 1);
            }
            function i(e, t) {
                var n = {};
                for (var r in t) t.hasOwnProperty(r) && (n[r] = e.style[r]);
                for (var r in t) t.hasOwnProperty(r) && (e.style[r] = t[r]);
                return n;
            }
            function l(e) {
                return e === document.body || e === document.documentElement;
            }
            var s = Math.random().toString(36).slice(2),
                u = '__scrollLockState$'.concat(s),
                d = !(function () {
                    var e = !1;
                    if (!a.O) return !1;
                    try {
                        var t = function () {
                            return null;
                        };
                        (window.addEventListener('testPassive', t, {
                            get passive() {
                                e = !0;
                                return;
                            },
                        }),
                            window.removeEventListener('testPassive', t));
                    } catch (e) {}
                    return e;
                })()
                    ? void 0
                    : { passive: !1 },
                f = { count: 0, lastX: 0, lastY: 0, scrollable: null, scrollX: 0, scrollY: 0 };
            function v(e) {
                1 === e.changedTouches.length &&
                    ((f.scrollable = (function (e) {
                        for (var t; e && ((t = getComputedStyle(e)), !/(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY));) e = e.parentElement;
                        return e || document.documentElement;
                    })(e.target)),
                    l(f.scrollable) || ((f.lastX = e.changedTouches[0].pageX), (f.lastY = e.changedTouches[0].pageY)));
            }
            function m(e) {
                var t = f.scrollable,
                    n = f.lastX,
                    r = f.lastY;
                if (!(e.changedTouches.length > 1)) {
                    if (!t || l(t)) return void e.preventDefault();
                    var a = e.changedTouches[0].pageX,
                        o = e.changedTouches[0].pageY,
                        c = Math.abs(r - o) > Math.abs(n - a),
                        i = t.scrollTop,
                        s = t.scrollHeight - t.clientHeight,
                        u = t.scrollLeft,
                        d = t.scrollWidth - t.clientWidth,
                        v = !c && ((u <= 0 && a > n) || (u >= d && a < n));
                    (((c && ((i <= 0 && o > r) || (i >= s && o < r))) || v) && e.preventDefault(), (f.lastX = a), (f.lastY = o));
                }
            }
            function h() {
                f.scrollable && (f.scrollable = null);
            }
            function p(e) {
                return e || document.body;
            }
            function g(e) {
                if (a.O) {
                    var t = p(e);
                    (!(function (e) {
                        var t = e[u];
                        if (t) return t.count++;
                        var n = (function (e) {
                                var t,
                                    n = l(e) && window.innerWidth - document.documentElement.clientWidth > 0,
                                    a = e.scrollHeight > e.clientHeight;
                                if (n || a || ((t = getComputedStyle(e).overflowY), /scroll/.test(t))) {
                                    if ('undefined' == typeof document) return 0;
                                    if (void 0 === r) {
                                        var o = document.createElement('div');
                                        ((o.style.width = '100%'), (o.style.height = '200px'));
                                        var c = document.createElement('div');
                                        ((c.style.position = 'absolute'),
                                            (c.style.top = '0'),
                                            (c.style.left = '0'),
                                            (c.style.pointerEvents = 'none'),
                                            (c.style.visibility = 'hidden'),
                                            (c.style.width = '200px'),
                                            (c.style.height = '150px'),
                                            (c.style.overflow = 'hidden'),
                                            c.appendChild(o),
                                            document.body.appendChild(c));
                                        var i = o.offsetWidth;
                                        c.style.overflow = 'scroll';
                                        var s = o.offsetWidth;
                                        (i === s && (s = c.clientWidth), document.body.removeChild(c), (r = i - s));
                                    }
                                    return r;
                                }
                                return 0;
                            })(e),
                            a = parseInt(getComputedStyle(e).getPropertyValue('padding-right'), 10),
                            o = i(e, { paddingRight: ''.concat(a + n, 'px'), overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' });
                        e[u] = { initialStyle: o, count: 1 };
                    })(t),
                        c() &&
                            l(t) &&
                            (f.count++,
                            1 === f.count &&
                                ((f.scrollX = window.pageXOffset),
                                (f.scrollY = window.pageYOffset),
                                document.addEventListener('touchstart', v, d),
                                document.addEventListener('touchmove', m, d),
                                document.addEventListener('touchend', h, d))));
                }
            }
            function w(e) {
                if (a.O) {
                    var t = p(e),
                        n = t[u];
                    (n && (n.count--, 0 === n.count) && (i(t, n.initialStyle), delete t[u]),
                        c() &&
                            l(t) &&
                            0 !== f.count &&
                            (f.count--,
                            0 === f.count &&
                                (document.removeEventListener('touchstart', v),
                                document.removeEventListener('touchmove', m),
                                document.removeEventListener('touchend', h),
                                window.scrollTo(f.scrollX, f.scrollY))));
                }
            }
        },
        65780: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return r.workAsyncStorageInstance;
                    },
                }));
            let r = n(90720);
        },
        69827: () => {},
        81517: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => o, U: () => c });
            var r = n(74631),
                a = n(85936);
            n(20319);
            var o = (0, a.cn)('UserWidget', 'Content'),
                c = r.forwardRef(function (e, t) {
                    var n = e.loading,
                        a = e.preload,
                        c = e.height,
                        i = e.colorScheme,
                        l = e.className,
                        s = e.src,
                        u = e.width;
                    return r.createElement(
                        'div',
                        { className: o({ loading: n, colorScheme: i }, [l]) },
                        a && r.createElement('iframe', { className: 'UserWidget-Iframe', ref: t, width: u, src: s, height: n ? 300 : c }),
                        n && r.createElement('div', { className: 'UserWidget-Spin' }),
                    );
                });
        },
        84281: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { Dialog: () => r.l }));
            var r = n(13933);
        },
        84932: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => r });
            var r = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
        },
        85936: (e, t, n) => {
            'use strict';
            e.exports = n(53855);
        },
        90720: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let r = (0, n(46450).createAsyncLocalStorage)();
        },
        91638: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r = n(23198);
            (r.__exportStar(n(40788), t),
                r.__exportStar(n(84281), t),
                r.__exportStar(n(65239), t),
                r.__exportStar(n(27930), t),
                r.__exportStar(n(30956), t),
                r.__exportStar(n(56443), t));
        },
        93175: () => {},
        95102: (e, t, n) => {
            'use strict';
            function r(e) {
                let { reason: t, children: n } = e;
                return n;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                n(29834));
        },
        97926: (e, t, n) => {
            'use strict';
            t.H = void 0;
            var r = n(23198),
                a = n(74631),
                o = n(56111),
                c = r.__importStar(n(65712));
            t.H = function (e) {
                var t = e.enabled,
                    n = e.containerRef,
                    r = (0, a.useRef)(null),
                    i = (0, a.useRef)(!1);
                ((0, o.useIsomorphicLayoutEffect)(function () {
                    var e = n ? n.current : null;
                    r.current !== e && (t && i.current && (c.unlock(r.current), c.lock(e)), (r.current = e));
                }),
                    (0, o.useIsomorphicLayoutEffect)(
                        function () {
                            if (t)
                                return (
                                    (i.current = !0),
                                    c.lock(r.current),
                                    function () {
                                        ((i.current = !1), c.unlock(r.current));
                                    }
                                );
                        },
                        [t],
                    ));
            };
        },
    },
]);
