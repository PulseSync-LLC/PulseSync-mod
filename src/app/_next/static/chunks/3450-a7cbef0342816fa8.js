(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3450],
    {
        1571: () => {},
        2151: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'setAttributesFromProps', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let n = { acceptCharset: 'accept-charset', className: 'class', htmlFor: 'for', httpEquiv: 'http-equiv', noModule: 'noModule' },
                r = ['onLoad', 'onReady', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'stylesheets'];
            function i(e) {
                return ['async', 'defer', 'noModule'].includes(e);
            }
            function a(e, t) {
                for (let [a, s] of Object.entries(t)) {
                    if (!t.hasOwnProperty(a) || r.includes(a) || void 0 === s) continue;
                    let o = n[a] || a.toLowerCase();
                    ('SCRIPT' === e.tagName && i(o) ? (e[o] = !!s) : e.setAttribute(o, String(s)),
                        (!1 === s || ('SCRIPT' === e.tagName && i(o) && (!s || 'false' === s))) && (e.setAttribute(o, ''), e.removeAttribute(o)));
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        4847: () => {},
        6260: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => i });
            var r = n(53548),
                i = n(41158).O ? r.useLayoutEffect : r.useEffect;
        },
        6782: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { useUserID: () => r.w }));
            var r = n(45390);
        },
        11008: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    default: function () {
                        return v;
                    },
                    handleClientScriptLoad: function () {
                        return p;
                    },
                    initScriptLoader: function () {
                        return m;
                    },
                }));
            let r = n(70405),
                i = n(28854),
                a = n(88800),
                s = r._(n(53405)),
                o = i._(n(53548)),
                l = n(20995),
                c = n(2151),
                u = n(23107),
                d = new Map(),
                h = new Set(),
                f = (e) => {
                    let {
                            src: t,
                            id: n,
                            onLoad: r = () => {},
                            onReady: i = null,
                            dangerouslySetInnerHTML: a,
                            children: o = '',
                            strategy: l = 'afterInteractive',
                            onError: u,
                            stylesheets: f,
                        } = e,
                        p = n || t;
                    if (p && h.has(p)) return;
                    if (d.has(t)) {
                        (h.add(p), d.get(t).then(r, u));
                        return;
                    }
                    let m = () => {
                            (i && i(), h.add(p));
                        },
                        g = document.createElement('script'),
                        v = new Promise((e, t) => {
                            (g.addEventListener('load', function (t) {
                                (e(), r && r.call(this, t), m());
                            }),
                                g.addEventListener('error', function (e) {
                                    t(e);
                                }));
                        }).catch(function (e) {
                            u && u(e);
                        });
                    (a
                        ? ((g.innerHTML = a.__html || ''), m())
                        : o
                          ? ((g.textContent = 'string' == typeof o ? o : Array.isArray(o) ? o.join('') : ''), m())
                          : t && ((g.src = t), d.set(t, v)),
                        (0, c.setAttributesFromProps)(g, e),
                        'worker' === l && g.setAttribute('type', 'text/partytown'),
                        g.setAttribute('data-nscript', l),
                        f &&
                            ((e) => {
                                if (s.default.preinit)
                                    return e.forEach((e) => {
                                        s.default.preinit(e, { as: 'style' });
                                    });
                                {
                                    let t = document.head;
                                    e.forEach((e) => {
                                        let n = document.createElement('link');
                                        ((n.type = 'text/css'), (n.rel = 'stylesheet'), (n.href = e), t.appendChild(n));
                                    });
                                }
                            })(f),
                        document.body.appendChild(g));
                };
            function p(e) {
                let { strategy: t = 'afterInteractive' } = e;
                'lazyOnload' === t
                    ? window.addEventListener('load', () => {
                          (0, u.requestIdleCallback)(() => f(e));
                      })
                    : f(e);
            }
            function m(e) {
                (e.forEach(p),
                    [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(
                        (e) => {
                            let t = e.id || e.getAttribute('src');
                            h.add(t);
                        },
                    ));
            }
            function g(e) {
                let { id: t, src: n = '', onLoad: r = () => {}, onReady: i = null, strategy: c = 'afterInteractive', onError: d, stylesheets: p, ...m } = e,
                    { updateScripts: g, scripts: v, getIsSsr: y, appDir: b, nonce: S } = (0, o.useContext)(l.HeadManagerContext);
                S = m.nonce || S;
                let w = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    let e = t || n;
                    w.current || (i && e && h.has(e) && i(), (w.current = !0));
                }, [i, t, n]);
                let E = (0, o.useRef)(!1);
                if (
                    ((0, o.useEffect)(() => {
                        if (!E.current) {
                            if ('afterInteractive' === c) f(e);
                            else
                                'lazyOnload' === c &&
                                    ('complete' === document.readyState
                                        ? (0, u.requestIdleCallback)(() => f(e))
                                        : window.addEventListener('load', () => {
                                              (0, u.requestIdleCallback)(() => f(e));
                                          }));
                            E.current = !0;
                        }
                    }, [e, c]),
                    ('beforeInteractive' === c || 'worker' === c) &&
                        (g
                            ? ((v[c] = (v[c] || []).concat([{ id: t, src: n, onLoad: r, onReady: i, onError: d, ...m, nonce: S }])), g(v))
                            : y && y()
                              ? h.add(t || n)
                              : y && !y() && f({ ...e, nonce: S })),
                    b)
                ) {
                    if (
                        (p &&
                            p.forEach((e) => {
                                s.default.preinit(e, { as: 'style' });
                            }),
                        'beforeInteractive' === c)
                    )
                        if (!n)
                            return (
                                m.dangerouslySetInnerHTML && ((m.children = m.dangerouslySetInnerHTML.__html), delete m.dangerouslySetInnerHTML),
                                (0, a.jsx)('script', {
                                    nonce: S,
                                    dangerouslySetInnerHTML: { __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([0, { ...m, id: t }]) + ')' },
                                })
                            );
                        else
                            return (
                                s.default.preload(
                                    n,
                                    m.integrity
                                        ? { as: 'script', integrity: m.integrity, nonce: S, crossOrigin: m.crossOrigin }
                                        : { as: 'script', nonce: S, crossOrigin: m.crossOrigin },
                                ),
                                (0, a.jsx)('script', {
                                    nonce: S,
                                    dangerouslySetInnerHTML: { __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([n, { ...m, id: t }]) + ')' },
                                })
                            );
                    'afterInteractive' === c &&
                        n &&
                        s.default.preload(
                            n,
                            m.integrity
                                ? { as: 'script', integrity: m.integrity, nonce: S, crossOrigin: m.crossOrigin }
                                : { as: 'script', nonce: S, crossOrigin: m.crossOrigin },
                        );
                }
                return null;
            }
            Object.defineProperty(g, '__nextScript', { value: !0 });
            let v = g;
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        16133: (e, t, n) => {
            'use strict';
            n.d(t, { V: () => d });
            var r = n(44114);
            let i = ['', '-webkit-', '-ms-', '-moz-', '-o-'],
                a = {}.toString,
                s = /\[object (\w+)\]/;
            function o(e, t) {
                var n;
                if (
                    'function' != typeof (n = e.matchMedia) &&
                    'Function' !==
                        ((e) => {
                            let t = a.call(e);
                            if (!t) return null;
                            let n = t.match(s);
                            if (!n) return null;
                            let r = n[1];
                            return r || null;
                        })(n)
                )
                    return !1;
                let r = e.matchMedia(t);
                return (
                    (function (e) {
                        let t = typeof e;
                        return !!e && ('object' === t || 'function' === t);
                    })(r) && !!r.matches
                );
            }
            let l = i.map((e) => `(${e}any-pointer:coarse)`).join(','),
                c = i.map((e) => `(${e}touch-enabled)`).join(',');
            var u = n(88485);
            function d(e) {
                let t = '',
                    n = '';
                return (
                    e &&
                        (function (e) {
                            let t = (function (e, t = !0) {
                                if (
                                    (function (e = window) {
                                        return (
                                            ((e = window) => {
                                                let t = (function (e = window) {
                                                    try {
                                                        return (e.navigator || {}).userAgent || '';
                                                    } catch (e) {
                                                        return '';
                                                    }
                                                })(e).toLowerCase();
                                                if (t.indexOf('android') > -1) return !1;
                                                let n = t
                                                    .replace(/\(.+?\)/gi, '')
                                                    .split(' ')
                                                    .map((e) => e.trim().split('/')[0])
                                                    .filter((e) => e && 'mobile' !== e);
                                                return 4 === n.length && 'mozilla' === n[0] && 'applewebkit' === n[1] && 'version' === n[2] && 'safari' === n[3];
                                            })(e) ||
                                            (function (e = window) {
                                                let t = e.navigator.userAgent.toLowerCase();
                                                return /ipad|iphone|ipod/.test(t) && !e.MSStream && !((e = window) => e.navigator.userAgent.indexOf('UCBrowser') > -1)(e);
                                            })(e) ||
                                            (function (e = window) {
                                                return (
                                                    /Apple/.test(e.navigator.vendor) &&
                                                    (function (e = window) {
                                                        var t;
                                                        return (
                                                            (!!(t = e).PointerEvent &&
                                                                (function (e) {
                                                                    let { msMaxTouchPoints: t, maxTouchPoints: n } = e.navigator || {};
                                                                    return t || n || 0;
                                                                })(t) > 0 &&
                                                                !((e = window) =>
                                                                    ((e = window) => {
                                                                        let t = r(e);
                                                                        return 'boolean' == typeof t ? -1 : t;
                                                                    })(e) > 11)(t)) ||
                                                            o(e, l) ||
                                                            o(e, c) ||
                                                            (function (e) {
                                                                let { DocumentTouch: t } = e;
                                                                return !!t && e.document instanceof t;
                                                            })(e) ||
                                                            'ontouchstart' in e
                                                        );
                                                    })(e)
                                                );
                                            })(e)
                                        );
                                    })() &&
                                    t
                                )
                                    return [];
                                let n = [],
                                    i = e;
                                for (;;)
                                    try {
                                        if (!(i = i.ownerDocument.defaultView.frameElement)) return n;
                                        n.push(i);
                                    } catch (e) {
                                        return n;
                                    }
                            })(e.documentElement).map((e) => e.ownerDocument);
                            return (t.unshift(e), t.map((e) => ({ location: (0, u.K)(e.defaultView), referrer: e.referrer })));
                        })(e)
                            .reverse()
                            .forEach(({ location: e, referrer: r }) => {
                                ((t = t || e), (n = n || r));
                            }),
                    { location: t, referrer: n }
                );
            }
        },
        20603: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let r = (0, n(94177).createAsyncLocalStorage)();
        },
        23107: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    cancelIdleCallback: function () {
                        return r;
                    },
                    requestIdleCallback: function () {
                        return n;
                    },
                }));
            let n =
                    ('undefined' != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
                    function (e) {
                        let t = Date.now();
                        return self.setTimeout(function () {
                            e({
                                didTimeout: !1,
                                timeRemaining: function () {
                                    return Math.max(0, 50 - (Date.now() - t));
                                },
                            });
                        }, 1);
                    },
                r =
                    ('undefined' != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
                    function (e) {
                        return clearTimeout(e);
                    };
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        24031: () => {},
        25136: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { lock: () => v, unlock: () => y }));
            var r,
                i = n(41158);
            function a(e) {
                return 'undefined' != typeof window && null != window.navigator && e.test(window.navigator.userAgent);
            }
            function s() {
                return a(/iphone|ipod|ipad/i) || (a(/macintosh/i) && navigator.maxTouchPoints > 1);
            }
            function o(e, t) {
                var n = {};
                for (var r in t) t.hasOwnProperty(r) && (n[r] = e.style[r]);
                for (var r in t) t.hasOwnProperty(r) && (e.style[r] = t[r]);
                return n;
            }
            function l(e) {
                return e === document.body || e === document.documentElement;
            }
            var c = Math.random().toString(36).slice(2),
                u = '__scrollLockState$'.concat(c),
                d = !(function () {
                    var e = !1;
                    if (!i.O) return !1;
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
                h = { count: 0, lastX: 0, lastY: 0, scrollable: null, scrollX: 0, scrollY: 0 };
            function f(e) {
                1 === e.changedTouches.length &&
                    ((h.scrollable = (function (e) {
                        for (var t; e && ((t = getComputedStyle(e)), !/(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY));) e = e.parentElement;
                        return e || document.documentElement;
                    })(e.target)),
                    l(h.scrollable) || ((h.lastX = e.changedTouches[0].pageX), (h.lastY = e.changedTouches[0].pageY)));
            }
            function p(e) {
                var t = h.scrollable,
                    n = h.lastX,
                    r = h.lastY;
                if (!(e.changedTouches.length > 1)) {
                    if (!t || l(t)) return void e.preventDefault();
                    var i = e.changedTouches[0].pageX,
                        a = e.changedTouches[0].pageY,
                        s = Math.abs(r - a) > Math.abs(n - i),
                        o = t.scrollTop,
                        c = t.scrollHeight - t.clientHeight,
                        u = t.scrollLeft,
                        d = t.scrollWidth - t.clientWidth,
                        f = !s && ((u <= 0 && i > n) || (u >= d && i < n));
                    (((s && ((o <= 0 && a > r) || (o >= c && a < r))) || f) && e.preventDefault(), (h.lastX = i), (h.lastY = a));
                }
            }
            function m() {
                h.scrollable && (h.scrollable = null);
            }
            function g(e) {
                return e || document.body;
            }
            function v(e) {
                if (i.O) {
                    var t = g(e);
                    (!(function (e) {
                        var t = e[u];
                        if (t) return t.count++;
                        var n = (function (e) {
                                var t,
                                    n = l(e) && window.innerWidth - document.documentElement.clientWidth > 0,
                                    i = e.scrollHeight > e.clientHeight;
                                if (n || i || ((t = getComputedStyle(e).overflowY), /scroll/.test(t))) {
                                    if ('undefined' == typeof document) return 0;
                                    if (void 0 === r) {
                                        var a = document.createElement('div');
                                        ((a.style.width = '100%'), (a.style.height = '200px'));
                                        var s = document.createElement('div');
                                        ((s.style.position = 'absolute'),
                                            (s.style.top = '0'),
                                            (s.style.left = '0'),
                                            (s.style.pointerEvents = 'none'),
                                            (s.style.visibility = 'hidden'),
                                            (s.style.width = '200px'),
                                            (s.style.height = '150px'),
                                            (s.style.overflow = 'hidden'),
                                            s.appendChild(a),
                                            document.body.appendChild(s));
                                        var o = a.offsetWidth;
                                        s.style.overflow = 'scroll';
                                        var c = a.offsetWidth;
                                        (o === c && (c = s.clientWidth), document.body.removeChild(s), (r = o - c));
                                    }
                                    return r;
                                }
                                return 0;
                            })(e),
                            i = parseInt(getComputedStyle(e).getPropertyValue('padding-right'), 10),
                            a = o(e, { paddingRight: ''.concat(i + n, 'px'), overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' });
                        e[u] = { initialStyle: a, count: 1 };
                    })(t),
                        s() &&
                            l(t) &&
                            (h.count++,
                            1 === h.count &&
                                ((h.scrollX = window.pageXOffset),
                                (h.scrollY = window.pageYOffset),
                                document.addEventListener('touchstart', f, d),
                                document.addEventListener('touchmove', p, d),
                                document.addEventListener('touchend', m, d))));
                }
            }
            function y(e) {
                if (i.O) {
                    var t = g(e),
                        n = t[u];
                    (n && (n.count--, 0 === n.count) && (o(t, n.initialStyle), delete t[u]),
                        s() &&
                            l(t) &&
                            0 !== h.count &&
                            (h.count--,
                            0 === h.count &&
                                (document.removeEventListener('touchstart', f),
                                document.removeEventListener('touchmove', p),
                                document.removeEventListener('touchend', m),
                                window.scrollTo(h.scrollX, h.scrollY))));
                }
            }
        },
        28396: (e, t, n) => {
            'use strict';
            t.H = void 0;
            var r = n(88092),
                i = n(53548),
                a = n(72917),
                s = r.__importStar(n(25136));
            t.H = function (e) {
                var t = e.enabled,
                    n = e.containerRef,
                    r = (0, i.useRef)(null),
                    o = (0, i.useRef)(!1);
                ((0, a.useIsomorphicLayoutEffect)(function () {
                    var e = n ? n.current : null;
                    r.current !== e && (t && o.current && (s.unlock(r.current), s.lock(e)), (r.current = e));
                }),
                    (0, a.useIsomorphicLayoutEffect)(
                        function () {
                            if (t)
                                return (
                                    (o.current = !0),
                                    s.lock(r.current),
                                    function () {
                                        ((o.current = !1), s.unlock(r.current));
                                    }
                                );
                        },
                        [t],
                    ));
            };
        },
        28617: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => c });
            var r = n(53548),
                i = n(45002),
                a = n(28396);
            n(24031);
            var s = (0, i.cn)('UserID', 'CloseButton'),
                o = function (e) {
                    var t = e.onClick,
                        n = e.colorScheme;
                    return r.createElement(
                        'button',
                        { className: s({ colorScheme: n }), onClick: t, 'aria-label': 'Закрыть', tabIndex: 1 },
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
            n(70009);
            var l = (0, i.cn)('UserWidget', 'Dialog'),
                c = (0, r.forwardRef)(function (e, t) {
                    var n,
                        i,
                        s = e.visible,
                        c = e.loading,
                        u = e.colorScheme,
                        d = e.platform,
                        h = e.onClose,
                        f = e.className;
                    return (
                        (0, a.H)({ enabled: s && 'touch' === d }),
                        (n = { onScroll: h }),
                        ((i = (0, r.useRef)(n)).current = n),
                        (0, r.useEffect)(function () {
                            var e = function () {
                                var e, t;
                                null == (t = (e = i.current).onScroll) || t.call(e);
                            };
                            if (i.current.onScroll)
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
                                'aria-busy': c,
                                'aria-modal': 'true',
                                className: l('Dialog', { visible: s, loading: c, colorScheme: u, platform: d }, [f]),
                                ref: t,
                            },
                            c && r.createElement(o, { colorScheme: u, onClick: h }),
                            e.children,
                        )
                    );
                });
        },
        35355: () => {},
        37531: (e, t, n) => {
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
                n(36271));
        },
        38982: (e, t, n) => {
            'use strict';
            ((t.es = function (e, t) {
                let {
                        pageStyle: n = i.PageStyles.Fullscreen,
                        pagePlacement: a = i.PagePlacements.Fullscreen,
                        skeletonId: s = '',
                        mainObjectType: o = i.DomainObjectType.NonApplicable,
                        mainObjectId: l = '',
                        tabId: c = '',
                        tabPos: u = 0,
                        isTabSelectedByDefault: d = !1,
                        entityPosX: h = 1,
                        entityPosY: f = 1,
                        objectsCount: p = 0,
                        displayReasonId: m = '',
                        filterKey: g = '',
                        filterValue: v = '',
                        filterPos: y = 0,
                    } = t,
                    b = (0, r.makeMetaParams)(2),
                    S = {
                        ...t,
                        pageStyle: n,
                        pagePlacement: a,
                        skeletonId: s,
                        mainObjectType: o,
                        mainObjectId: l,
                        tabId: c,
                        tabPos: u,
                        isTabSelectedByDefault: d,
                        entityPosX: h,
                        entityPosY: f,
                        objectsCount: p,
                        displayReasonId: m,
                        filterKey: g,
                        filterValue: v,
                        filterPos: y,
                        _meta: b,
                    };
                e.trackEvent('LandingBlock.Loaded', S);
            }),
                (t.ZP = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: a = i.PagePlacements.Fullscreen,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            entityPosX: h = 1,
                            entityPosY: f = 1,
                            objectsCount: p = 0,
                            displayReasonId: m = '',
                            filterKey: g = '',
                            filterValue: v = '',
                            filterPos: y = 0,
                            loadedViewUuid: b = '',
                        } = t,
                        S = (0, r.makeMetaParams)(3),
                        w = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            entityPosX: h,
                            entityPosY: f,
                            objectsCount: p,
                            displayReasonId: m,
                            filterKey: g,
                            filterValue: v,
                            filterPos: y,
                            loadedViewUuid: b,
                            _meta: S,
                        };
                    e.trackEvent('LandingBlock.Loaded', w);
                }),
                (t.Pf = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: a = 0,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            entityPosX: h = 1,
                            entityPosY: f = 1,
                            objectsCount: p = 0,
                            displayReasonId: m = '',
                            filterKey: g = '',
                            filterValue: v = '',
                            filterPos: y = 0,
                        } = t,
                        b = (0, r.makeMetaParams)(1),
                        S = {
                            ...t,
                            objectPosX: n,
                            objectPosY: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            entityPosX: h,
                            entityPosY: f,
                            objectsCount: p,
                            displayReasonId: m,
                            filterKey: g,
                            filterValue: v,
                            filterPos: y,
                            _meta: b,
                        };
                    e.trackEvent('LandingBlock.Showed', S);
                }),
                (t.sy = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: a = i.PagePlacements.Fullscreen,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: d = '',
                            tabPos: h = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: m = 1,
                            objectsCount: g = 0,
                            displayReasonId: v = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: S = 0,
                            loadedViewUuid: w = '',
                        } = t,
                        E = (0, r.makeMetaParams)(3),
                        P = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: d,
                            tabPos: h,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: m,
                            objectsCount: g,
                            displayReasonId: v,
                            filterKey: y,
                            filterValue: b,
                            filterPos: S,
                            loadedViewUuid: w,
                            _meta: E,
                        };
                    e.trackEvent('LandingBlock.Showed', P);
                }),
                (t.SB = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: a = i.PagePlacements.Fullscreen,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: d = '',
                            tabPos: h = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: m = 1,
                            objectsCount: g = 0,
                            displayReasonId: v = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: S = 0,
                            loadedViewUuid: w = '',
                        } = t,
                        E = (0, r.makeMetaParams)(3),
                        P = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: d,
                            tabPos: h,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: m,
                            objectsCount: g,
                            displayReasonId: v,
                            filterKey: y,
                            filterValue: b,
                            filterPos: S,
                            loadedViewUuid: w,
                            _meta: E,
                        };
                    e.trackEvent('LandingBlock.Hidden', P);
                }),
                (t.QS = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: a = 0,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            entityPosX: h = 1,
                            entityPosY: f = 1,
                            objectsCount: p = 0,
                            displayReasonId: m = '',
                            filterKey: g = '',
                            filterValue: v = '',
                            filterPos: y = 0,
                            deepLink: b = '',
                        } = t,
                        S = (0, r.makeMetaParams)(1),
                        w = {
                            ...t,
                            objectPosX: n,
                            objectPosY: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            entityPosX: h,
                            entityPosY: f,
                            objectsCount: p,
                            displayReasonId: m,
                            filterKey: g,
                            filterValue: v,
                            filterPos: y,
                            deepLink: b,
                            _meta: S,
                        };
                    e.trackEvent('LandingBlock.Navigated', w);
                }),
                (t.iF = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: a = i.PagePlacements.Fullscreen,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: d = '',
                            tabPos: h = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: m = 1,
                            objectsCount: g = 0,
                            displayReasonId: v = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: S = 0,
                            deepLink: w = '',
                        } = t,
                        E = (0, r.makeMetaParams)(2),
                        P = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: d,
                            tabPos: h,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: m,
                            objectsCount: g,
                            displayReasonId: v,
                            filterKey: y,
                            filterValue: b,
                            filterPos: S,
                            deepLink: w,
                            _meta: E,
                        };
                    e.trackEvent('LandingBlock.Navigated', P);
                }),
                (t.b3 = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: a = i.PagePlacements.Fullscreen,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: d = '',
                            tabPos: h = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: m = 1,
                            objectsCount: g = 0,
                            displayReasonId: v = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: S = 0,
                            loadedViewUuid: w = '',
                            deepLink: E = '',
                        } = t,
                        P = (0, r.makeMetaParams)(3),
                        T = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: d,
                            tabPos: h,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: m,
                            objectsCount: g,
                            displayReasonId: v,
                            filterKey: y,
                            filterValue: b,
                            filterPos: S,
                            loadedViewUuid: w,
                            deepLink: E,
                            _meta: P,
                        };
                    e.trackEvent('LandingBlock.Navigated', T);
                }),
                (t.er = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: a = 0,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            entityPosX: h = 1,
                            entityPosY: f = 1,
                            objectsCount: p = 0,
                            displayReasonId: m = '',
                            filterKey: g = '',
                            filterValue: v = '',
                            filterPos: y = 0,
                        } = t,
                        b = (0, r.makeMetaParams)(1),
                        S = {
                            ...t,
                            objectPosX: n,
                            objectPosY: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            entityPosX: h,
                            entityPosY: f,
                            objectsCount: p,
                            displayReasonId: m,
                            filterKey: g,
                            filterValue: v,
                            filterPos: y,
                            _meta: b,
                        };
                    e.trackEvent('LandingBlock.Started', S);
                }),
                (t.h_ = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: a = 0,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            entityPosX: h = 1,
                            entityPosY: f = 1,
                            objectsCount: p = 0,
                            displayReasonId: m = '',
                            filterKey: g = '',
                            filterValue: v = '',
                            filterPos: y = 0,
                        } = t,
                        b = (0, r.makeMetaParams)(1),
                        S = {
                            ...t,
                            objectPosX: n,
                            objectPosY: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            entityPosX: h,
                            entityPosY: f,
                            objectsCount: p,
                            displayReasonId: m,
                            filterKey: g,
                            filterValue: v,
                            filterPos: y,
                            _meta: b,
                        };
                    e.trackEvent('LandingBlock.ActionPerformed', S);
                }),
                (t.l6 = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: a = i.PagePlacements.Fullscreen,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: d = '',
                            tabPos: h = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: m = 1,
                            objectsCount: g = 0,
                            displayReasonId: v = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: S = 0,
                        } = t,
                        w = (0, r.makeMetaParams)(2),
                        E = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: d,
                            tabPos: h,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: m,
                            objectsCount: g,
                            displayReasonId: v,
                            filterKey: y,
                            filterValue: b,
                            filterPos: S,
                            _meta: w,
                        };
                    e.trackEvent('LandingBlock.ActionPerformed', E);
                }),
                (t.eN = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: a = i.PagePlacements.Fullscreen,
                            skeletonId: s = '',
                            mainObjectType: o = i.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            objectPosX: c = 0,
                            objectPosY: u = 0,
                            tabId: d = '',
                            tabPos: h = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: m = 1,
                            objectsCount: g = 0,
                            displayReasonId: v = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: S = 0,
                            loadedViewUuid: w = '',
                        } = t,
                        E = (0, r.makeMetaParams)(3),
                        P = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: s,
                            mainObjectType: o,
                            mainObjectId: l,
                            objectPosX: c,
                            objectPosY: u,
                            tabId: d,
                            tabPos: h,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: m,
                            objectsCount: g,
                            displayReasonId: v,
                            filterKey: y,
                            filterValue: b,
                            filterPos: S,
                            loadedViewUuid: w,
                            _meta: E,
                        };
                    e.trackEvent('LandingBlock.ActionPerformed', P);
                }));
            let r = n(59203),
                i = n(87999);
        },
        41158: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => r });
            var r = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
        },
        43738: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { Content: () => r.U, cnUserID: () => r.K }));
            var r = n(46671);
        },
        44114: (e) => {
            e.exports = function () {
                var e = window.navigator.userAgent,
                    t = e.indexOf('MSIE ');
                if (t > 0) return parseInt(e.substring(t + 5, e.indexOf('.', t)), 10);
                if (e.indexOf('Trident/') > 0) {
                    var n = e.indexOf('rv:');
                    return parseInt(e.substring(n + 3, e.indexOf('.', n)), 10);
                }
                var r = e.indexOf('Edge/');
                return r > 0 && parseInt(e.substring(r + 5, e.indexOf('.', r)), 10);
            };
        },
        45002: (e, t, n) => {
            'use strict';
            e.exports = n(73841);
        },
        45028: (e, t, n) => {
            'use strict';
            function r(e) {
                return e;
            }
            function i(e) {
                return Math.max(e, 0);
            }
            function a(e) {
                return i(e);
            }
            function s(e) {
                return i(Math.floor(e));
            }
            n.d(t, { WQ: () => d, Qr: () => p, lw: () => f, gL: () => h, bY: () => c, Wj: () => u, Lp: () => l, fP: () => o, PY: () => a, Pn: () => s });
            let o = r,
                l = r,
                c = r,
                u = r,
                d = (e, ...t) => {
                    let n = e;
                    for (let e = 0; e < t.length; e++) n += t[e];
                    return n;
                };
            d.operator = '+';
            let h = (e, ...t) => {
                let n = e;
                for (let e = 0; e < t.length; e++) n -= t[e];
                return n;
            };
            h.operator = '-';
            let f = (e, ...t) => {
                let n = e;
                for (let e = 0; e < t.length; e++) n *= t[e];
                return n;
            };
            f.operator = '*';
            let p = (e, ...t) => {
                let n = e;
                for (let e = 0; e < t.length; e++) n /= t[e];
                return n;
            };
            p.operator = '/';
        },
        45390: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => C });
            var r,
                i,
                a = n(88092),
                s = n(53548),
                o = n(45954),
                l = n(6260),
                c = [],
                u = null,
                d = null;
            function h() {
                return c[c.length - 1];
            }
            function f(e, t, n) {
                var r,
                    i,
                    a = h();
                a &&
                    a.onClose &&
                    (!n || n === a.closeStrategy) &&
                    (('click' === t &&
                        ((r = a.refs),
                        (i = e.target),
                        r.some(function (e) {
                            return e.current instanceof HTMLElement && e.current.contains(i);
                        }))) ||
                        a.onClose({ nativeEvent: e, source: t }));
            }
            function p(e) {
                var t = e.key;
                ('Escape' === t || 'Esc' === t) && f(e, 'esc');
            }
            function m(e) {
                ((u = e.target), (d = h()), f(e, 'click', 'pressdown'));
            }
            function g(e) {
                var t = u;
                u = null;
                var n = d;
                ((d = null), e.button > 0 || n !== h() || (t === e.target && f(e, 'click', 'pressup')));
            }
            var v = Object.freeze({
                    count: function () {
                        return c.length;
                    },
                    addOverlay: function (e) {
                        (0 === c.length &&
                            (document.addEventListener('keyup', p), document.addEventListener('pointerdown', m, !0), document.addEventListener('click', g, !0)),
                            c.push(e));
                    },
                    removeOverlay: function (e) {
                        (c.splice(c.indexOf(e), 1),
                            0 === c.length &&
                                (document.removeEventListener('keyup', p),
                                document.removeEventListener('pointerdown', m, !0),
                                document.removeEventListener('click', g, !0)));
                    },
                    getTopOverlayOptions: h,
                }),
                y = Date.now(),
                b = 'undefined' != typeof performance ? performance : null;
            (null == (r = null == b ? void 0 : b.timing) ? void 0 : r.navigationStart) &&
                (y = null == (i = null == performance ? void 0 : performance.timing) ? void 0 : i.navigationStart);
            var S =
                    b && 'function' == typeof b.now
                        ? function () {
                              return b.now();
                          }
                        : 'function' == typeof Date.now
                          ? function () {
                                return Date.now() - y;
                            }
                          : function () {
                                return new Date().getTime() - y;
                            },
                w = 'undefined' != typeof window,
                E = function () {
                    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                },
                P = function (e) {
                    var t = e.enabled,
                        n = e.onHeightChange,
                        r = (0, a.__read)((0, s.useState)(w ? E() : void 0), 2),
                        i = r[0],
                        o = r[1],
                        c = (0, s.useCallback)(
                            function () {
                                var e = E();
                                i !== e && (o(E()), n(e));
                            },
                            [i, n],
                        );
                    (0, l.E)(
                        function () {
                            if (t)
                                return (
                                    window.addEventListener('resize', c),
                                    function () {
                                        window.removeEventListener('resize', c);
                                    }
                                );
                        },
                        [c, t],
                    );
                },
                T = function (e) {
                    var t = e.touchBreakpointWidth,
                        n = void 0 === t ? 520 : t,
                        r = e.platform,
                        i = void 0 === r ? 'auto' : r,
                        o = (0, a.__read)((0, s.useState)(), 2),
                        c = o[0],
                        u = o[1];
                    return (
                        (0, s.useEffect)(
                            function () {
                                if ('auto' !== i) return void u(i);
                                w && u(window.matchMedia('(max-width: ' + n + 'px)').matches ? 'touch' : 'desktop');
                            },
                            [n, i],
                        ),
                        (0, l.E)(
                            function () {
                                if (w && 'auto' === i) {
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
                            [c, u, n],
                        ),
                        c
                    );
                },
                k = ['tr', 'am', 'ge'],
                I = ['il'];
            function C(e) {
                var t,
                    n,
                    r,
                    i,
                    c,
                    u,
                    d,
                    h,
                    f,
                    p,
                    m,
                    g,
                    y,
                    b,
                    C,
                    x = e.avatarRef,
                    O = e.avatarSize,
                    j = void 0 === O ? [42, 22] : O,
                    L = e.colorScheme,
                    M = void 0 === L ? 'light' : L,
                    _ = e.dialogClassName,
                    D = e.dialogRef,
                    B = e.dir,
                    N = void 0 === B ? 'ltr' : B,
                    A = e.env,
                    U = void 0 === A ? 'prod' : A,
                    R = e.essentialRef,
                    W = e.features,
                    F = e.fetchUserData,
                    H = e.host,
                    V = e.iframeRef,
                    Y = e.lang,
                    q = e.onClose,
                    G = e.onLoad,
                    X = e.onMenuItemClick,
                    z = e.onOpen,
                    J = e.onThemeChange,
                    Q = e.onLocaleChange,
                    K = e.platform,
                    $ = e.preload,
                    Z = void 0 !== $ && $,
                    ee = e.project,
                    et = e.queryParams,
                    en = e.dynamicParams,
                    er = e.retpath,
                    ei = e.rpcHandlers,
                    ea = e.theme,
                    es = e.tld,
                    eo = e.touchBreakpointWidth,
                    el = e.userData,
                    ec = e.visible,
                    eu = void 0 !== ec && ec,
                    ed = (0, s.useRef)({}),
                    eh = (0, s.useRef)(null),
                    ef = (0, s.useRef)(null),
                    ep = (0, s.useRef)(null),
                    em =
                        ((t = void 0 === es ? 'ru' : es),
                        (0, s.useMemo)(
                            function () {
                                return k.includes(t) ? 'com.' + t : I.includes(t) ? 'co.' + t : t;
                            },
                            [t],
                        ));
                ((0, o.N)(eh, x || (0, s.createRef)()), (ef = null != D ? D : ef), (ep = null != V ? V : ep));
                var eg = (0, a.__read)((0, s.useState)(!0), 2),
                    ev = eg[0],
                    ey = eg[1],
                    eb = (0, s.useMemo)(
                        function () {
                            return w ? er || location.href : er;
                        },
                        [er],
                    ),
                    eS = (0, a.__read)((0, s.useState)(Z), 2),
                    ew = eS[0],
                    eE = eS[1],
                    eP = (0, s.useRef)({ colorScheme: M, theme: ea, retpath: eb }),
                    eT = (0, s.useMemo)(
                        function () {
                            if (H) return 'https://' + H;
                            if ('prod_yateam' === U) return 'https://user-id.yandex-team.ru';
                            if (w) {
                                var e = new URL(location.href).searchParams.get('user_id_host');
                                if (e) return 'https://' + e;
                            }
                            return 'https://yandex.' + em;
                        },
                        [H, em, U],
                    ),
                    ek = (0, s.useMemo)(
                        function () {
                            ew ||
                                (eP.current.colorScheme === M && eP.current.theme === ea && eP.current.retpath === eb) ||
                                (eP.current = { colorScheme: M, theme: ea, retpath: eb });
                            var e = new URL('user-id', eT);
                            if (
                                (eP.current.retpath && e.searchParams.set('encodedRetpath', encodeURIComponent(eP.current.retpath)),
                                eP.current.colorScheme && e.searchParams.set('colorScheme', eP.current.colorScheme),
                                eP.current.theme && e.searchParams.set('theme', eP.current.theme),
                                Y && e.searchParams.set('l10n', Y),
                                Array.isArray(W))
                            ) {
                                var t = W.join(',');
                                e.searchParams.set('exp_flags', t);
                            }
                            for (var n in (ee && e.searchParams.set('project', ee), U && e.searchParams.set('env', U), e.searchParams.set('dir', N), et))
                                e.searchParams.set(n, et[n]);
                            for (var n in en) e.searchParams.set(n, en[n]);
                            return e.toString();
                        },
                        [eT, W, ee, et, en, M, ea, eb, ew, U, N, Y],
                    );
                (0, s.useEffect)(
                    function () {
                        !ew && (Z || F) && eE(!0);
                    },
                    [ew, Z, F],
                );
                var eI = T({ platform: K, touchBreakpointWidth: eo }),
                    eC = (0, s.useCallback)(
                        function () {
                            ew || eE(!0);
                        },
                        [ew],
                    ),
                    ex = (0, s.useMemo)(
                        function () {
                            return null === j ? null : 'number' == typeof j ? j : 'touch' === eI ? j[1] : j[0];
                        },
                        [eI, j],
                    ),
                    eO = (0, s.useCallback)(
                        function () {
                            var e;
                            (null == (e = eh.current) || e.focus(), null == q || q());
                        },
                        [q],
                    ),
                    ej = (0, a.__read)((0, s.useState)(), 2),
                    eL = ej[0],
                    eM = ej[1],
                    e_ = (0, a.__read)((0, s.useState)(el), 2),
                    eD = e_[0],
                    eB = e_[1];
                (0, s.useEffect)(
                    function () {
                        eB(el);
                    },
                    [el],
                );
                var eN = (0, s.useCallback)(
                    function (e) {
                        if (w) {
                            if ('desktop' === eI) return void eM(e);
                            eM(E());
                        }
                    },
                    [eI],
                );
                P({ enabled: 'touch' === eI, onHeightChange: eN });
                var eA = (0, s.useRef)(),
                    eU = ((r = (n = {
                        loading: ev,
                        iframeRef: ep,
                        origin: eT,
                        rpcHandler: (0, s.useCallback)(
                            function (e, t) {
                                var n;
                                switch (e.methodCall) {
                                    case 'onInit':
                                        (F && eB(e.params[0]), null == G || G());
                                        break;
                                    case 'onDataLoad':
                                        var r = ed.current;
                                        if ('number' == typeof r.start && 'number' != typeof r.end && eA.current) {
                                            r.end = S();
                                            var i = r.end - r.start;
                                            eA.current({ methodCall: 'onSendTimeToInteractive', params: [{ delta: i }] });
                                        }
                                    case 'updateUserHeight':
                                        (eN(e.params[0].height), ey(!1));
                                        break;
                                    case 'ITEM_CLICK':
                                        var s = e.params[0];
                                        null == X || X(s.item, s, { onClose: eO });
                                        break;
                                    case 'closeUserID':
                                        null == eO || eO();
                                        break;
                                    case 'updateTheme':
                                        var o = e.params[0].theme;
                                        null == J || J(o);
                                        break;
                                    case 'updateLocale':
                                        var l = e.params[0].locale;
                                        null == Q || Q(l);
                                        break;
                                    default:
                                        if (!(null == ei ? void 0 : ei[e.methodCall])) return;
                                        Promise.resolve(
                                            null == (n = null == ei ? void 0 : ei[e.methodCall]) ? void 0 : n.call.apply(n, (0, a.__spread)([ei], e.params)),
                                        ).then(t);
                                }
                            },
                            [ei, X, eO, J, Q, eN, eB, F, G],
                        ),
                    }).loading),
                    (i = n.iframeRef),
                    (c = n.origin),
                    (u = n.rpcHandler),
                    (d = (0, s.useRef)([])),
                    (h = (0, s.useCallback)(
                        function (e) {
                            var t,
                                n,
                                a = JSON.stringify(e);
                            r ? d.current.push(a) : null == (n = null == (t = i.current) ? void 0 : t.contentWindow) || n.postMessage(a, '*');
                        },
                        [r, i],
                    )),
                    (f = (0, s.useCallback)(
                        function (e) {
                            var t;
                            if (e.origin === c) {
                                try {
                                    t = JSON.parse(e.data);
                                } catch (e) {
                                    return;
                                }
                                t.methodCall &&
                                    (null == u ||
                                        u((0, a.__assign)({}, t), function (e) {
                                            var n;
                                            h({
                                                returnCall: !0,
                                                params: [e],
                                                resultCallbackIndex: (null == (n = t.resultCallbackIndex) ? void 0 : n.__callbackId) || -1,
                                            });
                                        }));
                            }
                        },
                        [c, u, h],
                    )),
                    (0, s.useEffect)(
                        function () {
                            return (
                                window.addEventListener('message', f),
                                function () {
                                    window.removeEventListener('message', f);
                                }
                            );
                        },
                        [f],
                    ),
                    (0, s.useEffect)(
                        function () {
                            i &&
                                !r &&
                                0 !== d.current.length &&
                                (d.current.forEach(function (e) {
                                    var t, n;
                                    null == (n = null == (t = i.current) ? void 0 : t.contentWindow) || n.postMessage(e, '*');
                                }),
                                (d.current = []));
                        },
                        [r, i],
                    ),
                    { sendMessage: h }).sendMessage;
                ((eA.current = eU),
                    (0, s.useEffect)(
                        function () {
                            eU({ methodCall: 'updateRetpath', params: [{ retpath: eb }] });
                        },
                        [eb, eU],
                    ),
                    (0, s.useEffect)(
                        function () {
                            eU({ methodCall: 'onParamsChange', params: [(0, a.__assign)({}, en)] });
                        },
                        [en, eU],
                    ),
                    (0, s.useEffect)(
                        function () {
                            eU({ methodCall: 'updateTheme', params: [{ colorScheme: M, theme: ea }] });
                        },
                        [M, eU, ea],
                    ));
                var eR = (0, s.useCallback)(
                        function (e) {
                            eU({ methodCall: 'focusFirst', params: [{ fromKeyboard: e }] });
                        },
                        [eU],
                    ),
                    eW = (0, s.useCallback)(
                        function () {
                            eu ? (eR(!0), eO()) : (ew || eE(!0), eR(!1), null == z || z());
                        },
                        [eR, z, ew, eu, eO],
                    );
                ((m = (p = {
                    visible: eu,
                    onClose: eO,
                    essentialRefs: (0, s.useMemo)(
                        function () {
                            var e = [ef, eh];
                            return (R && e.push(R), e);
                        },
                        [ef, eh, R],
                    ),
                }).visible),
                    (g = p.onClose),
                    (y = p.essentialRefs),
                    (b = p.unsafe_strategy),
                    ((C = (0, s.useRef)({ onClose: g, refs: y, closeStrategy: void 0 === b ? 'pressdown' : b })).current.onClose = g),
                    (C.current.refs = y),
                    (0, s.useEffect)(
                        function () {
                            if (m) {
                                var e = C.current;
                                return (
                                    v.addOverlay(e),
                                    function () {
                                        v.removeOverlay(e);
                                    }
                                );
                            }
                        },
                        [m],
                    ),
                    (0, l.E)(
                        function () {
                            var e;
                            eu && (null != (e = ed.current).start || (e.start = S()));
                        },
                        [eu],
                    ));
                var eF = { colorScheme: M, height: eL, loading: ev, preload: ew, ref: ep, src: ek, width: 'desktop' === eI ? 320 : '100%' },
                    eH = { className: _, colorScheme: M, platform: eI, ref: ef, visible: eu, onClose: eO, loading: ev };
                return {
                    avatarProps: { avatarSize: ex, env: U, onClick: eW, onPointerEnter: eC, platform: eI, ref: eh, retpath: eb, userData: eD, visible: eu, tld: em },
                    contentProps: eF,
                    dialogProps: eH,
                };
            }
        },
        45954: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => i });
            var r = n(53548);
            function i(e, t) {
                (0, r.useImperativeHandle)(t, function () {
                    return e.current;
                });
            }
        },
        46671: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => a, U: () => s });
            var r = n(53548),
                i = n(45002);
            n(35355);
            var a = (0, i.cn)('UserWidget', 'Content'),
                s = r.forwardRef(function (e, t) {
                    var n = e.loading,
                        i = e.preload,
                        s = e.height,
                        o = e.colorScheme,
                        l = e.className,
                        c = e.src,
                        u = e.width;
                    return r.createElement(
                        'div',
                        { className: a({ loading: n, colorScheme: o }, [l]) },
                        i && r.createElement('iframe', { className: 'UserWidget-Iframe', ref: t, width: u, src: c, height: n ? 300 : s }),
                        n && r.createElement('div', { className: 'UserWidget-Spin' }),
                    );
                });
        },
        54721: (e, t, n) => {
            'use strict';
            n.d(t, { u: () => h });
            var r = n(53548),
                i = n(47149),
                a = n(63582),
                s = n(59791),
                o = n(7695),
                l = n(53534),
                c = n(89846),
                u = n(64543),
                d = n(56374);
            let h = (0, a.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, r.useContext)(s.I),
                    { hash: t } = (0, c.g)(),
                    { screen: n, tab: a } = (0, u.j)(),
                    h = (0, r.useContext)(l.k)?.session,
                    { current: f } = (0, r.useRef)(Symbol()),
                    p = !!n,
                    m = (r) => {
                        if (!e || !h || !n?.pageId || void 0 === t || !p) return !1;
                        let s = {
                            hash: t,
                            pageId: n.pageId,
                            pageStyle: n.pageStyle,
                            pagePlacement: n.pagePlacement,
                            mainObjectType: n.mainObjectType,
                            mainObjectId: n.mainObjectId,
                            skeletonId: n.skeletonId,
                            viewUuid: n.screenViewUuid,
                            ...(a ?? o.Ve),
                        };
                        return (r ? h.open(f, () => (0, i.Fn)(e, s)) : h.close(f, () => (0, i.PO)(e, s)), !0);
                    },
                    [g, v] = (0, r.useState)(() => ({ session: h, send: m, opened: !1 })),
                    y = g;
                (g.session !== h && v((y = { session: h, send: m, opened: !1 })),
                    (0, r.useInsertionEffect)(() => {
                        p && void 0 !== t && (y.send = m);
                    }, [y, t, p, m]));
                let b = (0, d.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, r.useEffect)(
                    () => (
                        b(y, !0),
                        () => {
                            (y.opened && b(y, !1), y.session?.release(f));
                        }
                    ),
                    [f, y, b],
                ),
                    (0, r.useEffect)(() => {
                        b(y, !0);
                    }, [y, t, p, b]));
            });
        },
        55555: (e, t, n) => {
            'use strict';
            n.d(t, { default: () => i.a });
            var r = n(11008),
                i = n.n(r);
        },
        66219: (e) => {
            'use strict';
            e.exports = function e(t, n) {
                if (t === n) return !0;
                if (t && n && 'object' == typeof t && 'object' == typeof n) {
                    if (t.constructor !== n.constructor) return !1;
                    if (Array.isArray(t)) {
                        if ((r = t.length) != n.length) return !1;
                        for (i = r; 0 != i--;) if (!e(t[i], n[i])) return !1;
                        return !0;
                    }
                    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
                    if ((r = (a = Object.keys(t)).length) !== Object.keys(n).length) return !1;
                    for (i = r; 0 != i--;) if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
                    for (i = r; 0 != i--;) {
                        var r,
                            i,
                            a,
                            s = a[i];
                        if (!e(t[s], n[s])) return !1;
                    }
                    return !0;
                }
                return t != t && n != n;
            };
        },
        67531: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { Dialog: () => r.l }));
            var r = n(28617);
        },
        68326: (e, t, n) => {
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
                n(88800),
                n(53405),
                n(96669),
                n(86900));
        },
        69658: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { User: () => p, UserBase: () => h }));
            var r = n(53548),
                i = n(45002),
                a = n(45954),
                s = n(88092),
                o = function (e, t, n) {
                    return (void 0 === t && (t = '0/0-0'), 'prod_yateam' === e)
                        ? 'https://center.yandex-team.ru/api/v1/user/' + ('0/0-0' === t ? '404' : t) + '/avatar/' + (n ? '85' : '42') + '.jpg'
                        : ('test' !== e ? 'https://avatars.mds.yandex.net' : 'https://avatars.mdst.yandex.net') +
                              '/get-yapic/' +
                              t +
                              '/' +
                              (n ? 'islands-retina-middle' : 'islands-middle');
                };
            n(4847);
            var l = (0, i.cn)('UserID', 'Avatar'),
                c = function (e) {
                    var t,
                        n,
                        i,
                        a,
                        c = e.env,
                        u = e.avatarId,
                        d = e.plus,
                        h = e.child,
                        f = e.colorScheme,
                        p = e.className,
                        m = (0, s.__read)((0, r.useState)(!1), 2),
                        g = m[0],
                        v = m[1],
                        y =
                            ((n = (t = { avatarId: u, env: c }).env),
                            (i = t.avatarId),
                            {
                                src: (a = (0, r.useMemo)(
                                    function () {
                                        return o(n, i, !1);
                                    },
                                    [n, i],
                                )),
                                srcSet:
                                    a +
                                    ' 1x, ' +
                                    (0, r.useMemo)(
                                        function () {
                                            return o(n, i, !0);
                                        },
                                        [n, i],
                                    ) +
                                    ' 2x',
                            }),
                        b = y.src,
                        S = y.srcSet,
                        w = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(
                            function () {
                                var e = w.current;
                                window && h && e && v(e.getBoundingClientRect().width <= 36);
                            },
                            [h, w],
                        ),
                        r.createElement(
                            'div',
                            { className: l({ child: h, plus: d, small: g, dark: 'dark' === f }, [p]), ref: w },
                            r.createElement('img', { src: b, className: 'UserID-Avatar-Image', srcSet: S }),
                            h &&
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
            ((c.displayName = 'UserIDAvatar'), n(73616));
            var u = function (e) {
                var t = e.children,
                    n = e.fetchMail,
                    i = e.tld,
                    a = e.showCounter,
                    o = e.counterVariant,
                    l = void 0 === o ? 'number' : o,
                    c = e.colorScheme,
                    u = (0, s.__read)((0, r.useState)(0), 2),
                    d = u[0],
                    h = u[1];
                (0, r.useEffect)(
                    function () {
                        n &&
                            a &&
                            fetch('https://mail.yandex.' + i + '/api/v2/userid/counters?silent', { credentials: 'include' })
                                .then(function (e) {
                                    return e.json();
                                })
                                .then(function (e) {
                                    return h(e.counters.unread);
                                })
                                .catch(function (e) {});
                    },
                    [i, n, a],
                );
                var f = n && d > 0 ? Math.min(d, 99) : void 0,
                    p = !!(n && f && d > f),
                    m = f && a ? '' + f + (p ? '+' : '') : null,
                    g = n || a,
                    v = ['UserID-Badge-Dot', 'UserID-Badge-Dot_colorScheme_' + c, 'UserID-Badge-Dot_variant_' + l].join(' ');
                return r.createElement('div', { className: 'UserID-Badge' }, t, g && r.createElement('div', { className: v }, 'number' === l && m));
            };
            ((u.displayName = 'UserIDBadge'), n(1571));
            var d = (0, i.cn)('UserID', 'Wrapper'),
                h = (0, r.forwardRef)(function (e, t) {
                    var n = e.tld,
                        i = e.tabIndex,
                        s = e.children,
                        o = e.env,
                        l = e.colorScheme,
                        h = e.userData,
                        f = e.onClick,
                        p = e.onPointerEnter,
                        m = e.className,
                        g = e.fetchMail,
                        v = e.showCounter,
                        y = e.counterVariant,
                        b = e.visible,
                        S = e.ariaLabel,
                        w = e.avatarSize,
                        E = e.platform,
                        P = e.beforeAvatar,
                        T = e.afterAvatar,
                        k = h || {},
                        I = k.child,
                        C = k.plus,
                        x = k.avatarId,
                        O = (0, r.useRef)(null);
                    return (
                        (0, a.N)(O, t),
                        r.createElement(
                            'div',
                            { className: d({ child: I, plus: C, default: !C }, [m]), style: null !== w ? { '--user-id-size': (w || 42) + 'px' } : void 0 },
                            r.createElement(
                                'button',
                                {
                                    'aria-expanded': b,
                                    'aria-haspopup': !0,
                                    'aria-label': S || 'Ваш профиль',
                                    className: 'UserID-Account',
                                    ref: O,
                                    role: 'button',
                                    tabIndex: void 0 === i ? 0 : i,
                                    onClick: f,
                                    onPointerEnter: p,
                                },
                                P,
                                r.createElement(
                                    u,
                                    {
                                        fetchMail: g && 'test' !== o,
                                        counterVariant: y,
                                        tld: void 0 === n ? 'ru' : n,
                                        colorScheme: l,
                                        showCounter: 'touch' !== E && (g || !0 === v),
                                    },
                                    r.createElement(c, { env: o, avatarId: x, plus: C, child: I, colorScheme: l }),
                                ),
                                T,
                            ),
                            s,
                        )
                    );
                });
            h.displayName = 'UserBase';
            var f = n(28617),
                p = (0, n(85720).B)(h, f.l);
        },
        70009: () => {},
        72917: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { useIsomorphicLayoutEffect: () => r.E }));
            var r = n(6260);
        },
        73616: () => {},
        73841: (e, t) => {
            'use strict';
            t.cn = (function (e) {
                function t(t, i, a, s) {
                    var o = i ? n + t + e.e + i : n + t,
                        l = o;
                    if (a) {
                        var c = ' ' + l + e.m;
                        for (var u in a)
                            if (a.hasOwnProperty(u)) {
                                var d = a[u];
                                !0 === d ? (l += c + u) : d && (l += c + u + r + d);
                            }
                    }
                    if (void 0 !== s)
                        for (var h = 0, f = s.length; h < f; h++) {
                            var p = s[h];
                            if (p && 'string' == typeof p.valueOf())
                                for (var m = p.valueOf().split(' '), g = 0; g < m.length; g++) {
                                    var v = m[g];
                                    v !== o && (l += ' ' + v);
                                }
                        }
                    return l;
                }
                var n = e.n || '',
                    r = e.v || e.m;
                return function (e, n) {
                    return function (r, i, a) {
                        return 'string' == typeof r ? (Array.isArray(i) ? t(e, r, void 0, i) : t(e, r, i, a)) : t(e, n, r, i);
                    };
                };
            })({ e: '-', m: '_' });
        },
        76903: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => d });
            var r = n(88800),
                i = n(53548),
                a = n(53534),
                s = n(63582),
                o = n(245);
            let l = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let n =
                        l.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                n = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                r = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                n();
                                            } finally {
                                                ((t = !1), e.length > 0 && r());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (n(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), r());
                                },
                            };
                        })();
                    (l.set(t, n), (this.queue = n));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var u = n(87999);
            let d = (0, s.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, o.N)(),
                        s = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, d] = (0, i.useState)(() => {
                            let e = new c(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: s, scope: s ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== n ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let i = new c(n.createScreenSession().screenViewUuid, n),
                            o = { client: n, input: t, isReady: s, scope: s ? n.createScreenScope(t, i) : null, session: i };
                        return (d(o), (0, r.jsx)(a.k, { value: o, children: e }));
                    }
                    if (
                        l.isReady !== s ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let i = { ...l, input: t, isReady: s, scope: s ? n.createScreenScope(t, l.session) : null };
                        return (d(i), (0, r.jsx)(a.k, { value: i, children: e }));
                    }
                    return (0, r.jsx)(a.k, { value: l, children: e });
                },
            );
        },
        78025: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
        },
        78098: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => k });
            var r = n(88800),
                i = n(53548),
                a = n(54020),
                s = n(38982),
                o = n(87999);
            let l = (e) => 'string' == typeof e && !!e.trim(),
                c = (e) => (l(e.viewUuid) ? [] : ['event.viewUuid']);
            class u {
                client;
                snapshot;
                constructor(e, t) {
                    ((this.client = e), (this.snapshot = t));
                }
                loaded(e) {
                    let t = [...(Number.isInteger(e.objectsCount) && e.objectsCount >= 0 ? [] : ['event.objectsCount']), ...(l(e.viewUuid) ? [] : ['event.viewUuid'])];
                    if (!this.client.validateScopes('LandingBlock.Loaded', this.snapshot, ['screen', 'block'], t)) return !1;
                    let n = {
                            ...this.screenParams,
                            ...this.tabParams,
                            ...this.filterParams,
                            ...this.blockParams,
                            hash: '',
                            objectsCount: e.objectsCount,
                            viewUuid: e.viewUuid,
                        },
                        r = !1;
                    return (
                        (0, s.ZP)(
                            {
                                trackEvent: (e, t) => {
                                    r = this.client.trackEvent(e, t);
                                },
                            },
                            n,
                        ),
                        r
                    );
                }
                showed(e) {
                    if (!this.client.validateScopes('LandingBlock.Showed', this.snapshot, ['screen', 'block', 'object'], c(e))) return;
                    let t = this.objectParams;
                    if (!t) return;
                    let n = { ...this.screenParams, ...this.tabParams, ...this.filterParams, ...this.blockParams, ...t, hash: '', viewUuid: e.viewUuid };
                    (0, s.sy)(this.client, n);
                }
                hidden(e) {
                    if (!this.client.validateScopes('LandingBlock.Hidden', this.snapshot, ['screen', 'block', 'object'], c(e))) return;
                    let t = this.objectParams;
                    if (!t) return;
                    let n = { ...this.screenParams, ...this.tabParams, ...this.filterParams, ...this.blockParams, ...t, hash: '', viewUuid: e.viewUuid };
                    (0, s.SB)(this.client, n);
                }
                navigated(e) {
                    if (!this.client.validateScopes('LandingBlock.Navigated', this.snapshot, ['screen', 'block', 'object'], c(e))) return;
                    let t = this.objectParams;
                    if (!t) return;
                    let n = {
                        ...this.screenParams,
                        ...this.tabParams,
                        ...this.filterParams,
                        ...this.blockParams,
                        ...t,
                        objectType: e.objectType ?? t.objectType,
                        deepLink: e.deepLink,
                        from: e.from,
                        hash: '',
                        to: e.to,
                        viewUuid: e.viewUuid,
                    };
                    (0, s.b3)(this.client, n);
                }
                actionPerformed(e) {
                    if (!this.client.validateScopes('LandingBlock.ActionPerformed', this.snapshot, ['screen', 'block', 'object'], c(e))) return;
                    let t = this.objectParams;
                    if (!t) return;
                    let n = {
                        ...this.screenParams,
                        ...this.tabParams,
                        ...this.filterParams,
                        ...this.blockParams,
                        ...t,
                        actionType: e.actionType,
                        hash: '',
                        userInteractionType: e.userInteractionType,
                        viewUuid: e.viewUuid,
                    };
                    (0, s.eN)(this.client, n);
                }
                started() {
                    let e = this.landingBlockPageId;
                    if (!this.client.validateScopes('LandingBlock.Started', this.snapshot, ['screen', 'block', 'object'], e ? [] : ['screen.pageId'])) return;
                    let t = this.objectParams;
                    if (!t || !e) return;
                    let n = {
                        ...this.tabParams,
                        ...this.filterParams,
                        ...this.blockParams,
                        ...t,
                        hash: '',
                        mainObjectId: this.snapshot.screen.mainObjectId,
                        mainObjectType: this.snapshot.screen.mainObjectType,
                        pageId: e,
                        skeletonId: this.snapshot.screen.skeletonId,
                    };
                    (0, s.er)(this.client, n);
                }
                get screenParams() {
                    let { screen: e } = this.snapshot;
                    return {
                        displayReasonId: e.displayReasonId,
                        mainObjectId: e.mainObjectId,
                        mainObjectType: e.mainObjectType,
                        pageId: e.pageId,
                        pagePlacement: e.pagePlacement,
                        pageStyle: e.pageStyle,
                        screenViewUuid: e.screenViewUuid,
                        skeletonId: e.skeletonId,
                    };
                }
                get tabParams() {
                    return this.snapshot.tab ? { ...this.snapshot.tab } : { tabId: '', tabPos: 0, isTabSelectedByDefault: !1 };
                }
                get filterParams() {
                    return this.snapshot.filter ? { ...this.snapshot.filter } : {};
                }
                get blockParams() {
                    let { block: e } = this.snapshot;
                    return { entityId: e.blockId, entityPosX: e.blockPosX, entityPosY: e.blockPosY, entityType: e.blockType, objectsCount: e.objectsCount };
                }
                get objectParams() {
                    let e = this.snapshot.object;
                    return e && 'string' == typeof e.objectId ? { ...e, objectId: e.objectId } : null;
                }
                get landingBlockPageId() {
                    let { pageId: e } = this.snapshot.screen;
                    return l(e) ? (Object.values(o.LandingBlockPageID).find((t) => t.toString() === e) ?? null) : null;
                }
            }
            class d {
                createUuid;
                visible = !1;
                viewUuid = null;
                constructor(e) {
                    this.createUuid = e;
                }
                get activeViewUuid() {
                    return this.viewUuid;
                }
                get isVisible() {
                    return this.visible;
                }
                start() {
                    return ((this.viewUuid ??= this.createUuid()), this.viewUuid);
                }
                close() {
                    let e = this.viewUuid;
                    return ((this.visible = !1), (this.viewUuid = null), e);
                }
                show() {
                    return this.visible ? null : ((this.visible = !0), this.start());
                }
                hide() {
                    return this.visible ? this.close() : null;
                }
            }
            class h {
                screenViewUuid;
                constructor(e) {
                    this.screenViewUuid = e();
                }
            }
            class f {
                transport;
                batching;
                onDiagnostic;
                abortController = new AbortController();
                events = [];
                disposed = !1;
                flushPromise = null;
                timer = null;
                constructor(e, t, n) {
                    if (((this.transport = e), (this.batching = t), (this.onDiagnostic = n), !Number.isInteger(t.maxBatchSize) || t.maxBatchSize <= 0))
                        throw RangeError('EvGen maxBatchSize must be a positive integer');
                    if (!Number.isFinite(t.delayMs) || t.delayMs < 0) throw RangeError('EvGen delayMs must be a non-negative finite number');
                }
                enqueue(e) {
                    return this.disposed
                        ? (this.onDiagnostic({ eventId: e.event, kind: 'disposed', message: 'EvGen client is disposed', missingFields: [], scopePath: ['client'] }), !1)
                        : ((this.events.push(e), this.events.length >= this.batching.maxBatchSize) ? this.startFlush() : this.schedule(), !0);
                }
                async flush() {
                    if (this.flushPromise) return void (await this.flushPromise);
                    (this.clearTimer(),
                        (this.flushPromise = this.drain().finally(() => {
                            ((this.flushPromise = null), !this.disposed && this.events.length > 0 && this.schedule());
                        })),
                        await this.flushPromise);
                }
                async dispose() {
                    if (this.disposed) return void (await this.flushPromise);
                    ((this.disposed = !0), this.clearTimer(), await this.flush(), this.abortController.abort());
                }
                drain = async () => {
                    if (0 === this.events.length) return;
                    let e = this.events.splice(0, this.batching.maxBatchSize);
                    try {
                        await this.transport.send(e, this.abortController.signal);
                    } catch {
                        (this.events.unshift(...e),
                            this.onDiagnostic({
                                eventId: 'evgen.transport',
                                kind: 'transport',
                                message: 'EvGen transport failed to send a batch',
                                missingFields: [],
                                scopePath: ['transport'],
                            }));
                        return;
                    }
                    await this.drain();
                };
                schedule() {
                    this.timer ||
                        this.disposed ||
                        (this.timer = setTimeout(() => {
                            ((this.timer = null), this.startFlush());
                        }, this.batching.delayMs));
                }
                startFlush() {
                    this.flush().catch(() => {
                        this.onDiagnostic({
                            eventId: 'evgen.queue',
                            kind: 'transport',
                            message: 'EvGen queue failed to flush',
                            missingFields: [],
                            scopePath: ['transport'],
                        });
                    });
                }
                clearTimer() {
                    this.timer && (clearTimeout(this.timer), (this.timer = null));
                }
            }
            class p extends Error {
                diagnostic;
                constructor(e) {
                    (super(e.message), (this.name = 'EvgenValidationError'), (this.diagnostic = e));
                }
            }
            let m = (e) => 'string' == typeof e && !!e.trim(),
                g = (e, t) => Number.isInteger(e) && e >= t,
                v = new Set([
                    'LandingBlock.ActionPerformed',
                    'LandingBlock.Hidden',
                    'LandingBlock.Loaded',
                    'LandingBlock.Navigated',
                    'LandingBlock.Showed',
                    'LandingBlock.Started',
                ]);
            class y {
                createUuid;
                enrichers;
                onDiagnostic;
                queue;
                validationMode;
                constructor(e) {
                    ((this.createUuid = e.createUuid),
                        (this.enrichers = e.enrichers ?? []),
                        (this.onDiagnostic = e.validation.onDiagnostic ?? (() => void 0)),
                        (this.validationMode = e.validation.mode),
                        (this.queue = new f(e.transport, e.batching, this.onDiagnostic)));
                }
                trackEvent = (e, t) => {
                    let n = { event: e, parameters: t };
                    return (
                        this.enrichers.forEach((e) => {
                            n = { ...n, parameters: { ...n.parameters, ...e(n) } };
                        }),
                        !!this.validateTransportEvent(n) && this.queue.enqueue(n)
                    );
                };
                createScreenSession() {
                    return new h(this.createUuid);
                }
                createScreenScope(e, t) {
                    return { ...e, screenViewUuid: t.screenViewUuid };
                }
                createBlockViewSession() {
                    return new d(this.createUuid);
                }
                createBlockReporter(e) {
                    return new u(this, e);
                }
                validateScopes(e, t, n, r = []) {
                    if (n.includes('object') && t.object && void 0 === t.object.objectId) return !1;
                    if ('off' === this.validationMode) return !0;
                    let i = [
                        ...((e, t) => {
                            let n = [],
                                { screen: r } = e;
                            return (
                                m(r.pageId) || n.push('screen.pageId'),
                                m(r.screenViewUuid) || n.push('screen.screenViewUuid'),
                                r.pageId !== o.AppScreen.DynamicScreen || m(r.skeletonId) || n.push('screen.skeletonId'),
                                ((void 0 !== r.mainObjectId && 'string' != typeof r.mainObjectId) ||
                                    (void 0 !== r.mainObjectType && r.mainObjectType !== o.DomainObjectType.NonApplicable && 'string' != typeof r.mainObjectId) ||
                                    (void 0 === r.mainObjectType && void 0 !== r.mainObjectId)) &&
                                    n.push('screen.mainObjectType', 'screen.mainObjectId'),
                                t.includes('tab') && !e.tab && n.push('tab'),
                                e.tab && ('string' != typeof e.tab.tabId && n.push('tab.tabId'), g(e.tab.tabPos, -1) || n.push('tab.tabPos')),
                                t.includes('filter') && !e.filter && n.push('filter'),
                                e.filter &&
                                    (m(e.filter.filterKey) || n.push('filter.filterKey'),
                                    m(e.filter.filterValue) || n.push('filter.filterValue'),
                                    g(e.filter.filterPos, 1) || n.push('filter.filterPos')),
                                'string' != typeof e.block.blockId && n.push('block.blockId'),
                                'string' != typeof e.block.blockType && n.push('block.blockType'),
                                g(e.block.blockPosX, 0) || n.push('block.blockPosX'),
                                g(e.block.blockPosY, 0) || n.push('block.blockPosY'),
                                g(e.block.objectsCount, 0) || n.push('block.objectsCount'),
                                t.includes('object') && !e.object && n.push('object'),
                                t.includes('object') &&
                                    e.object &&
                                    (m(e.object.objectType) || n.push('object.objectType'),
                                    'string' != typeof e.object.objectId && n.push('object.objectId'),
                                    g(e.object.objectPosX, 0) || n.push('object.objectPosX'),
                                    g(e.object.objectPosY, 0) || n.push('object.objectPosY')),
                                n
                            );
                        })(t, n),
                        ...r,
                    ];
                    return (
                        0 === i.length ||
                        this.handleValidationDiagnostic({
                            eventId: e,
                            kind: 'validation',
                            message: `EvGen event ${e} has invalid or missing scope fields`,
                            missingFields: [...new Set(i)],
                            scopePath: n,
                        })
                    );
                }
                async flush() {
                    await this.queue.flush();
                }
                async dispose() {
                    await this.queue.dispose();
                }
                validateTransportEvent(e) {
                    if ('off' === this.validationMode || !v.has(e.event)) return !0;
                    let t = e.parameters.hash;
                    return (
                        !!('string' == typeof t && t.trim()) ||
                        this.handleValidationDiagnostic({
                            eventId: e.event,
                            kind: 'validation',
                            message: `EvGen event ${e.event} has no navigation hash after enrichment`,
                            missingFields: ['client.hash'],
                            scopePath: ['client'],
                        })
                    );
                }
                handleValidationDiagnostic(e) {
                    if ((this.onDiagnostic(e), 'throw' === this.validationMode)) throw new p(e);
                    return !1;
                }
            }
            var b = n(89846),
                S = n(35606);
            let w = ({ children: e, hash: t }) => {
                let n = (0, i.useRef)(void 0);
                return (void 0 === t && (n.current ??= (0, a.A)()), (0, r.jsx)(S.m, { value: t ?? n.current, children: e }));
            };
            var E = n(59791);
            let P = ({ children: e, client: t }) => (0, r.jsx)(E.I, { value: t, children: e }),
                T = ({ allowAnalyticsLogs: e, children: t, evgenUserParam: n, logger: s, metrika: o }) => {
                    let { hash: l } = (0, b.g)(),
                        c = (0, i.useRef)(e),
                        u = (0, i.useRef)(l),
                        d = (0, i.useRef)(n),
                        h = (0, i.useRef)(s),
                        f = (0, i.useRef)(o);
                    ((c.current = e), (u.current = l), (d.current = n), (h.current = s), (f.current = o));
                    let p = (0, i.useRef)(null),
                        m = (0, i.useRef)(null);
                    return (
                        (p.current ??= new y({
                            batching: { delayMs: 1e3, maxBatchSize: 21 },
                            createUuid: a.A,
                            enrichers: [() => ({ hash: u.current })],
                            transport: {
                                send: async (e) => {
                                    let t = e.map(({ event: e, parameters: t }) => (c.current && h.current.log(e, t), { [e]: t }));
                                    await f.current.count(t, d.current);
                                },
                            },
                            validation: {
                                mode: 'warn',
                                onDiagnostic: ({ eventId: e, kind: t, message: n, missingFields: r, scopePath: i }) => {
                                    c.current && h.current.log('EvGen SDK diagnostic', { eventId: e, kind: t, message: n, missingFields: r, scopePath: i });
                                },
                            },
                        })),
                        (0, i.useEffect)(() => {
                            m.current && (clearTimeout(m.current), (m.current = null));
                            let e = p.current;
                            return () => {
                                m.current = setTimeout(() => {
                                    ((m.current = null), e?.dispose().catch(() => void 0));
                                });
                            };
                        }, []),
                        (0, r.jsx)(P, { client: p.current, children: t })
                    );
                },
                k = ({ hash: e, ...t }) => (0, r.jsx)(w, { hash: e, children: (0, r.jsx)(T, { ...t }) });
        },
        83579: (e) => {
            function t() {}
            ((t.prototype = {
                on: function (e, t, n) {
                    var r = this.e || (this.e = {});
                    return ((r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this);
                },
                once: function (e, t, n) {
                    var r = this;
                    function i() {
                        (r.off(e, i), t.apply(n, arguments));
                    }
                    return ((i._ = t), this.on(e, i, n));
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++)
                        n[r].fn.apply(n[r].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var n = this.e || (this.e = {}),
                        r = n[e],
                        i = [];
                    if (r && t) for (var a = 0, s = r.length; a < s; a++) r[a].fn !== t && r[a].fn._ !== t && i.push(r[a]);
                    return (i.length ? (n[e] = i) : delete n[e], this);
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t));
        },
        84256: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r = n(88092);
            (r.__exportStar(n(43738), t),
                r.__exportStar(n(67531), t),
                r.__exportStar(n(78025), t),
                r.__exportStar(n(69658), t),
                r.__exportStar(n(6782), t),
                r.__exportStar(n(97993), t));
        },
        85720: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => o });
            var r = n(88092),
                i = n(53548),
                a = n(46671),
                s = n(45390);
            function o(e, t) {
                var n,
                    o = function (n) {
                        var o = n.onOpen,
                            l = n.onClose,
                            c = (0, r.__read)((0, i.useState)(!1), 2),
                            u = c[0],
                            d = c[1],
                            h = (0, i.useCallback)(
                                function () {
                                    (d(!0), null == o || o());
                                },
                                [d, o],
                            ),
                            f = (0, i.useCallback)(
                                function () {
                                    (d(!1), null == l || l());
                                },
                                [d, l],
                            ),
                            p = (0, s.w)((0, r.__assign)((0, r.__assign)({}, n), { visible: u, onOpen: h, onClose: f })),
                            m = p.avatarProps,
                            g = p.contentProps,
                            v = p.dialogProps;
                        return i.createElement(
                            e,
                            (0, r.__assign)({}, n, m),
                            n.children,
                            i.createElement(t, (0, r.__assign)({}, v, { onClose: f }), i.createElement(a.U, (0, r.__assign)({}, g))),
                        );
                    };
                return ((o.displayName = "'withUserID(" + (null != (n = e.displayName) ? n : e) + ")'"), o);
            }
        },
        88349: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => r });
            let r = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
        88485: (e, t, n) => {
            'use strict';
            function r(e) {
                if (e && e.location) {
                    let { location: t } = e;
                    return 'function' == typeof t.toString ? t.toString() : t.href || '';
                }
                return '';
            }
            n.d(t, { K: () => r });
        },
        91954: (e, t, n) => {
            'use strict';
            let r;
            n.d(t, { yv: () => et, YT: () => eR, FM: () => c });
            var i,
                a,
                s,
                o,
                l,
                c = {};
            (n.r(c),
                n.d(c, { g: () => i, r: () => a }),
                (function (e) {
                    ((e.Start = 'Start'),
                        (e.Watched4Sec = '4SecWatched'),
                        (e.Watched10Sec = '10SecWatched'),
                        (e.Watched20Sec = '20SecWatched'),
                        (e.Heartbeat30Sec = '30SecHeartbeat'),
                        (e.End = 'End'));
                })(i || (i = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.PAUSE = 'pause'), (e.BUFFERING = 'buffering'), (e.END = 'end'));
                })(a || (a = {})));
            var u = n(45028);
            function d(e) {
                return Math.floor(e / 30);
            }
            class h {
                params;
                previousWatchedTime = (0, u.fP)(0);
                constructor(e) {
                    this.params = e;
                }
                onWatchedTimeChange(e) {
                    let { previousWatchedTime: t } = this;
                    t !== e &&
                        (0 === t && e > 0
                            ? this.params.onEvent(i.Start)
                            : t < 4 && e >= 4
                              ? this.params.onEvent(i.Watched4Sec)
                              : t < 10 && e >= 10
                                ? this.params.onEvent(i.Watched10Sec)
                                : t < 20 && e >= 20
                                  ? this.params.onEvent(i.Watched20Sec)
                                  : d(t) < d(e) && this.params.onEvent(i.Heartbeat30Sec),
                        (this.previousWatchedTime = e));
                }
                onPlayingStateChange(e) {
                    e === a.END && this.params.onEvent(i.End);
                }
            }
            class f {
                lastSourceIndexWithFatal = null;
                extractSourceIndex(e) {
                    let t = e.split('?')[1];
                    if (t)
                        for (let e of t.split('&')) {
                            let [t, n] = e.split('=');
                            if ('source_index' === t) return n ? Number(n) : null;
                        }
                    return null;
                }
                checkIsFatal(e, t) {
                    if (!e || !t) return e;
                    let n = this.extractSourceIndex(t);
                    return null === n ? e : (null === this.lastSourceIndexWithFatal || n > this.lastSourceIndexWithFatal) && ((this.lastSourceIndexWithFatal = n), !0);
                }
            }
            var p = n(66219);
            let m = (0, u.Wj)(1e4),
                g = (0, u.Wj)(1e3),
                v = (0, u.Wj)(5e3),
                y = (0, u.Wj)(3e4),
                b = {}.toString,
                S = /\[object (\w+)\]/,
                w = (e) => {
                    let t = b.call(e);
                    if (!t) return null;
                    let n = t.match(S);
                    if (!n) return null;
                    let r = n[1];
                    return r || null;
                };
            function E(e) {
                return 'function' == typeof e || 'Function' === w(e);
            }
            let P = Date && E(Date.now) ? () => Date.now() : () => new Date().getTime(),
                T = 'undefined' == typeof window ? void 0 : window.performance,
                k = T && E(T.now),
                I = T && T.timing && T.timing.navigationStart,
                C = T && T.timeOrigin ? T.timeOrigin : I ? T.timing.navigationStart : P(),
                x = 0,
                O = () => (0, u.Wj)(k ? T.now() : (x = Math.max(P() - C, x)));
            class j {
                onTick;
                onFlush;
                wasFirstFlush = !1;
                isDestroyed = !1;
                lastFlushTime;
                startTime;
                timer;
                constructor(e, t) {
                    ((this.onTick = e),
                        (this.onFlush = t),
                        (this.startTime = this.lastFlushTime = O()),
                        (this.timer = window.setTimeout(() => {
                            (this.onTick(), this.nextTick());
                        }, 0)));
                }
                next() {
                    this.isDestroyed || (window.clearTimeout(this.timer), this.handleFlush(), this.nextTick());
                }
                destroy() {
                    (window.clearTimeout(this.timer), (this.isDestroyed = !0));
                }
                nextTick() {
                    this.isDestroyed || (window.clearTimeout(this.timer), (this.timer = window.setTimeout(this.handleTimeout, this.getTimeout())));
                }
                handleTimeout = () => {
                    (this.onTick(), this.handleFlush(), this.nextTick());
                };
                handleFlush() {
                    this.needFlush() && (this.onFlush(), (this.lastFlushTime = this.wasFirstFlush ? O() : this.startTime), (this.wasFirstFlush = !0));
                }
                needFlush() {
                    let e = O();
                    return this.wasFirstFlush ? e - this.lastFlushTime >= y : e - this.startTime >= m;
                }
                getTimeout() {
                    return O() - this.startTime < m ? g : v;
                }
            }
            let L = (0, u.PY)((0, u.fP)(Math.abs(0))),
                M = {
                    remainingBufferedTime: (0, u.PY)((0, u.fP)(Math.abs(0))),
                    state: a.BUFFERING,
                    currentTime: L,
                    watchedTime: (0, u.PY)((0, u.fP)(Math.abs(0))),
                    duration: (0, u.PY)((0, u.fP)(0)),
                },
                _ = NaN;
            function D() {}
            (!(function (e) {
                ((e[(e.PLAYING = 1)] = 'PLAYING'), (e[(e.NOT_PLAYING = 2)] = 'NOT_PLAYING'));
            })(s || (s = {})),
                (function (e) {
                    ((e.preroll = 'preroll'), (e.midroll = 'midroll'), (e.postPauseroll = 'postPauseroll'), (e.postroll = 'postroll'), (e.inroll = 'inroll'));
                })(o || (o = {})));
            class B {
                props;
                prevState = void 0;
                states = [];
                timer;
                destroyHandlers = [];
                constructor(e) {
                    ((this.props = e),
                        (this.timer = new j(
                            () => this.writeState(),
                            () => this.flushStates(),
                        )));
                }
                addDestroyHandler(e) {
                    this.destroyHandlers.push(e);
                }
                destroy() {
                    (this.timer.destroy(),
                        this.flushStates(),
                        this.destroyHandlers.forEach((e) => {
                            e();
                        }),
                        (this.destroyHandlers = []));
                }
                getStates() {
                    return [...this.states];
                }
                flushStates() {
                    this.writeStateManually.now();
                    let e = this.getStates();
                    (e.length > 0 && this.props.onFlushStates(e), (this.states.length = 0));
                }
                writeStateManually = (function (e, t, n, r) {
                    3 == arguments.length && 'boolean' != typeof n && ((r = n), (n = !1));
                    let i = null,
                        a = D;
                    function s() {
                        (null !== i && clearTimeout(i), (i = null));
                    }
                    let o = function () {
                        let o = arguments;
                        ((r = r || this),
                            (a = () => {
                                (s(), (a = D), e.apply(r, o));
                            }),
                            n && null === i && e.apply(r, o),
                            s(),
                            (i = window.setTimeout(function () {
                                (n || e.apply(r, o), (i = null));
                            }, t)));
                    };
                    return (
                        (o.cancel = s),
                        (o.now = () => {
                            a();
                        }),
                        o
                    );
                })(() => {
                    (this.writeState(), this.timer.next());
                }, 0);
                writeState() {
                    let e = this.getPlayerAliveState();
                    p(this.prevState, e) || ((this.prevState = e), this.states.push({ ...e, timestamp: (0, u.Wj)(this.props.getTimestamp()) }));
                }
                getPlayerAliveState() {
                    let e = {
                            ...M,
                            saveData: (function (e = window) {
                                let { navigator: t } = e,
                                    { connection: n = {} } = t;
                                return !!n.saveData;
                            })(),
                            rtt: (function (e = window) {
                                var t;
                                if (!e.navigator) return _;
                                let { connection: n = {} } = e.navigator;
                                return 'number' == typeof (t = n.rtt) && isFinite(t) ? n.rtt : _;
                            })(),
                            ...this.props.stalledController.getStalledHistory(),
                        },
                        t = this.props.getState();
                    if (!t) return { ...e };
                    let {
                            currentTime: n,
                            duration: r,
                            muted: i,
                            playingState: a,
                            remainingBufferedTime: o,
                            adState: l,
                            liveLatency: c,
                            videoTracks: d,
                            audioTrack: h,
                            videoSize: f,
                            isVisible: p,
                            capHeight: m,
                            capWidth: g,
                            containerHeight: v,
                            containerWidth: y,
                            bandwidthEstimate: b,
                            bandwidthSource: S,
                            targetBuffer: w,
                            droppedFrames: E,
                            shownFrames: P,
                            isFullscreen: T,
                            isPictureInPicture: k,
                            volume: I,
                            playbackRate: C,
                            loop: x,
                        } = t,
                        O = d.find((e) => e.selected),
                        j = [...d].sort((e, t) => t.bitrate - e.bitrate),
                        L = l?.state === s.PLAYING,
                        D = !L,
                        B = this.props.getWatchedTime();
                    return {
                        ...e,
                        watchedTime: (0, u.fP)(Math.max(0, B)),
                        currentTime: (0, u.fP)(isNaN(n) ? (0, u.fP)(0) : Math.max(0, n)),
                        duration: (0, u.fP)(isNaN(r) ? (0, u.fP)(0) : Math.max(0, r)),
                        isMuted: i,
                        state: a,
                        remainingBufferedTime: o?.total || (0, u.fP)(0),
                        remainingAudioBufferedTime: o?.audio === void 0 ? void 0 : (0, u.fP)(Math.max(0, o.audio)),
                        remainingVideoBufferedTime: o?.video === void 0 ? void 0 : (0, u.fP)(Math.max(0, o.video)),
                        ad: L ? l?.type : void 0,
                        liveLatency: void 0 === c ? void 0 : (0, u.fP)(Math.max(0, c)),
                        stalledReason: this.props.stalledController.getCurrentStalledReason(),
                        auto: O?.auto === void 0 ? void 0 : O.auto,
                        isVisible: p,
                        bitrate: O?.bitrate ? (0, u.bY)(Math.max(0, Math.floor((0, u.lw)(O.bitrate, 1e3)))) : void 0,
                        width: f?.videoWidth === void 0 || isNaN(f?.videoWidth) ? void 0 : Math.max(0, Math.floor((0, u.Lp)(f?.videoWidth))),
                        height: f?.videoHeight === void 0 || isNaN(f?.videoHeight) ? void 0 : Math.max(0, Math.floor((0, u.Lp)(f?.videoHeight))),
                        maxWidth: D && j[0]?.width ? Math.max(0, Math.floor((0, u.Lp)(j[0].width))) : void 0,
                        maxHeight: D && j[0]?.height ? Math.max(0, Math.floor((0, u.Lp)(j[0].height))) : void 0,
                        audioTrack: h?.value || void 0,
                        audioLang: h?.lang || void 0,
                        audioBitrate: h?.bitrate ? (0, u.bY)(Math.max(0, Math.floor((0, u.lw)(h.bitrate, 1e3)))) : void 0,
                        capHeight: D && m ? Math.max(0, Math.floor((0, u.Lp)(m))) : void 0,
                        capWidth: D && g ? Math.max(0, Math.floor((0, u.Lp)(g))) : void 0,
                        containerHeight: void 0 !== v ? (0, u.Lp)(Math.max(0, Math.floor(v))) : void 0,
                        containerWidth: void 0 !== y ? Math.max(0, Math.floor(y)) : void 0,
                        bandwidthEstimate: void 0 === b || isNaN(b) ? void 0 : (0, u.bY)(Math.max(0, Math.round(b))),
                        bandwidthSource: S || void 0,
                        targetBuffer: void 0 === w ? void 0 : (0, u.fP)(Math.max(0, w)),
                        droppedFrames: void 0 === E ? void 0 : Math.max(0, Math.floor(E)),
                        shownFrames: void 0 === P ? void 0 : Math.max(0, Math.floor(P)),
                        viewport: T ? 'fullscreen' : k ? 'pip' : 'default',
                        volume: I,
                        playbackRate: C,
                        loop: x,
                    };
                }
            }
            !(function (e) {
                ((e.Init = 'Init'),
                    (e.SetSource = 'SetSource'),
                    (e.Seek = 'Seek'),
                    (e.VideoTrackChange = 'VideoTrackChange'),
                    (e.AudioTrackChange = 'AudioTrackChange'),
                    (e.Recover = 'Recover'),
                    (e.MediaError = 'MediaError'),
                    (e.Offline = 'Offline'),
                    (e.Other = 'Other'),
                    (e.LowBuffer = 'LowBuffer'),
                    (e.Render = 'Render'),
                    (e.RepresentationsChange = 'RepresentationsChange'),
                    (e.LiveEdge = 'LiveEdge'),
                    (e.AdStart = 'AdStart'),
                    (e.AdOther = 'AdOther'),
                    (e.AdBetween = 'AdBetween'),
                    (e.AdEnd = 'AdEnd'));
            })(l || (l = {}));
            let N = [0, 1, 4, 5],
                A = (0, u.fP)(0),
                U = N.map((e) => (A = (0, u.WQ)((0, u.fP)(e), A))),
                R = (0, u.lw)(U[U.length - 1], 1e3),
                W = [l.Init];
            function F(e) {
                setTimeout(() => {
                    throw e;
                }, 0);
            }
            function H(e, t) {
                try {
                    return e();
                } catch (e) {
                    'function' == typeof t && t(e);
                }
            }
            class V {
                setTimeout(e, t) {
                    if (t <= 0) return void H(e, F);
                    let n = window.setTimeout(e, t);
                    return () => window.clearTimeout(n);
                }
                now() {
                    return P();
                }
            }
            class Y {
                distributionFunction;
                clock;
                stopped = !0;
                cancel;
                lastNow = 0;
                lastKnockTime;
                lastTimeout = 0;
                restTime = 0;
                destroyed = !1;
                isFirstKnock = !0;
                count = 0;
                constructor(e, t = new V()) {
                    ((this.distributionFunction = e), (this.clock = t));
                }
                setEnabled(e) {
                    return (e ? this.start() : this.stop(), this);
                }
                stop() {
                    return (
                        this.stopped ||
                            ((this.stopped = !0), this.cancelTimeout(), (this.restTime = Math.max(this.restTime - (this.clock.now() - this.lastKnockTime), 0))),
                        this
                    );
                }
                start() {
                    return (
                        this.stopped &&
                            !this.destroyed &&
                            ((this.stopped = !1),
                            (this.lastKnockTime = this.clock.now()),
                            this.setTimeout(() => this.knock(this.lastNow + this.lastTimeout), this.restTime)),
                        this
                    );
                }
                destroy() {
                    (this.cancelTimeout(), (this.stopped = !0), (this.destroyed = !0));
                }
                knock(e) {
                    ((this.lastNow = e), (this.lastKnockTime = this.clock.now()), this.isFirstKnock ? (this.isFirstKnock = !1) : this.count++);
                    let t = (this.restTime = this.lastTimeout = this.distributionFunction({ time: e, count: this.count }));
                    this.stopped || this.destroyed || this.setTimeout(() => this.knock(e + t), t);
                }
                cancelTimeout() {
                    (void 0 !== this.cancel && this.cancel(), (this.cancel = void 0));
                }
                setTimeout(e, t) {
                    this.cancelTimeout();
                    let n = this.clock.setTimeout(e, t);
                    void 0 !== n && (this.cancelTimeout(), (this.cancel = n));
                }
            }
            function q(e = O) {
                let t = e();
                return () => (0, u.Wj)(Math.max(0, e() - t));
            }
            function G(e, t) {
                return { reason: e, details: t, getElapsedTime: q() };
            }
            class X {
                isBuffering = !1;
                timer = void 0;
                stalledId = 1;
                stalledDurationRemainder = (0, u.fP)(0);
                getState;
                logEvent;
                expectedStalled = G(l.Init, {});
                currentStalled = void 0;
                stalledTime = (0, u.fP)(0);
                stalledCount = 0;
                constructor({ getState: e, logEvent: t }) {
                    ((this.getState = e), (this.logEvent = t));
                }
                setBuffering(e, t = (0, u.Wj)(0)) {
                    if (e !== this.isBuffering)
                        if (((this.isBuffering = e), this.isBuffering)) {
                            let e = [],
                                n = N.filter((n, r) => {
                                    let i = this.currentStalled ? this.currentStalled.expectedStalled : this.getExpectedStalled(),
                                        a = U[r];
                                    if ((0, u.Qr)(t, 1e3) > a) {
                                        let e = this.currentStalled ? this.currentStalled.id : this.stalledId++;
                                        return (
                                            !this.currentStalled && this.stalledCount++,
                                            (this.currentStalled = { id: e, expectedStalled: i, duration: a, getElapsedTime: q() }),
                                            this.send(!1, i, a, e),
                                            !1
                                        );
                                    }
                                    return (e.push(a), !0);
                                });
                            (this.currentStalled && (this.stalledDurationRemainder = (0, u.gL)((0, u.Qr)(t, 1e3), this.currentStalled.duration)),
                                n.length && (n[0] = n[0] - this.stalledDurationRemainder),
                                (this.timer = new Y(({ count: t }) => {
                                    let r = this.currentStalled ? this.currentStalled.expectedStalled : this.getExpectedStalled();
                                    if (t > 0) {
                                        let n = (0, u.fP)(e[t - 1]),
                                            i = this.currentStalled ? this.currentStalled.id : this.stalledId++;
                                        (!this.currentStalled && this.stalledCount++,
                                            (this.currentStalled = { id: i, expectedStalled: r, duration: n, getElapsedTime: q() }),
                                            this.send(!1, r, n, i));
                                    }
                                    return t >= n.length ? (this.destroyTimer(), 1 / 0) : 1e3 * n[t];
                                })),
                                this.timer.start());
                        } else {
                            if (this.currentStalled) {
                                var n;
                                let { expectedStalled: e, id: t } = this.currentStalled,
                                    r = (0, u.WQ)(
                                        void 0 === (n = this.currentStalled) ? (0, u.fP)(0) : (0, u.WQ)(n.duration, (0, u.Qr)(n.getElapsedTime(), 1e3)),
                                        this.stalledDurationRemainder,
                                    );
                                (this.send(!0, e, (0, u.WQ)(r), t),
                                    (this.currentStalled = void 0),
                                    (this.stalledDurationRemainder = (0, u.fP)(0)),
                                    (this.stalledTime = (0, u.WQ)(r, this.stalledTime)));
                                let i = this.getState()?.adState?.state === s.PLAYING ? l.AdOther : l.Other;
                                this.setExpectedStalled(G(i, void 0));
                            }
                            this.destroyTimer();
                        }
                }
                getStalledHistory() {
                    let { stalledCount: e, stalledTime: t } = this;
                    return { stalledCount: (0, u.Pn)(e), stalledTime: (0, u.PY)(t) };
                }
                clearStalledHistory() {
                    ((this.stalledCount = 0), (this.stalledTime = (0, u.fP)(0)));
                }
                destroy() {
                    this.setBuffering(!1);
                }
                getCurrentStalledReason() {
                    return this.currentStalled?.expectedStalled.reason;
                }
                setExpectedStalled(e) {
                    this.expectedStalled = e;
                }
                isExpiredStalled(e) {
                    let { getElapsedTime: t, reason: n } = e;
                    return !(W.indexOf(n) > -1) && (!this.currentStalled || this.currentStalled.expectedStalled !== e) && t() >= R;
                }
                getExpectedStalled() {
                    let e = this.expectedStalled;
                    return this.isExpiredStalled(e) ? G(l.Other, void 0) : e;
                }
                destroyTimer() {
                    this.timer && (this.timer.destroy(), (this.timer = void 0));
                }
                send(e, t, n, r) {
                    let { reason: i, details: a } = t,
                        s = { ...a, stalledDuration: n, stalledId: r },
                        o = this.getState();
                    if (o) {
                        let { muted: e, remainingBufferedTime: t, videoTracks: n } = o,
                            r = n.find((e) => e.selected);
                        s = { ...s, remainingBufferedTime: t, videoTrack: r, isMuted: e };
                    }
                    this.logEvent({ name: e ? 'StalledEnd' : 'Stalled', data: s, labels: { reason: i } });
                }
            }
            let z = (e) => ('hidden' in e ? 'hidden' : 'webkitHidden' in e ? 'webkitHidden' : void 0);
            function J(e, t = !0) {
                let n = z(e);
                return n ? !e[n] : t;
            }
            let Q = ['Start', '4SecWatched', '10SecWatched', '20SecWatched', '30SecHeartbeat', 'End'];
            function K(e, t, n) {
                return e && 'number' == typeof e ? e + t - n : e;
            }
            function $(e) {
                return 'function' == typeof e || 'Function' === w(e);
            }
            function Z(e) {
                let t = e.match(/^(https?:\/\/[^\/\?#]+)/);
                return t ? t[1] : null;
            }
            let ee = (0, u.Wj)(3e4);
            class et {
                config;
                intervalId = void 0;
                contexts = [];
                allowedUrls = new Map();
                static SERVICE_ENDPOINTS_REGEX = /\/(log|perf|jstracer)/;
                static MEDIA_EXTENSION_REGEX = /\.(m4s|ts|mp4|webm|m3u8|mpd)(\?|$)/;
                constructor(e) {
                    this.config = e;
                }
                addAllowedUrl(e) {
                    let t = Z(e);
                    return !!t && (this.allowedUrls.set(e, t), !0);
                }
                addAllowedUrls(e) {
                    for (let t of e) this.addAllowedUrl(t);
                }
                removeAllowedUrl(e) {
                    this.allowedUrls.delete(e);
                }
                getAllowedUrls() {
                    return Array.from(this.allowedUrls.keys());
                }
                clearAllowedUrls() {
                    this.allowedUrls.clear();
                }
                attach(e) {
                    e.performance &&
                        ($(e.performance.getEntriesByType) || $(e.performance.webkitGetEntriesByType)) &&
                        ($(e.performance.clearResourceTimings) || $(e.performance.webkitClearResourceTimings)) &&
                        -1 === this.contexts.indexOf(e) &&
                        (0 === this.contexts.length && (this.intervalId = setInterval(() => this.flush(), ee)), this.contexts.push(e));
                }
                detach(e) {
                    let t = this.contexts.indexOf(e);
                    (-1 !== t && this.contexts.splice(t, 1), 0 === this.contexts.length && clearInterval(this.intervalId));
                }
                destroy() {
                    (this.flush(), (this.contexts.length = 0), clearInterval(this.intervalId), this.clearAllowedUrls());
                }
                flush() {
                    let e = [],
                        t = this.contexts.map(en),
                        n = Math.min(...t),
                        r = this.config.shouldClearTimings?.() ?? !0;
                    if (
                        (this.contexts.forEach((i, a) => {
                            (function (e, t) {
                                try {
                                    let n = (e.performance.getEntriesByType ?? e.performance.webkitGetEntriesByType).call(e.performance, 'resource');
                                    return (t && (e.performance.clearResourceTimings ?? e.performance.webkitClearResourceTimings).call(e.performance), n);
                                } catch {
                                    return [];
                                }
                            })(i, r).forEach((r) => {
                                this.shouldLogResource(r.name) &&
                                    e.push(
                                        (function (e, t, n) {
                                            let {
                                                duration: r,
                                                entryType: i,
                                                name: a,
                                                startTime: s,
                                                connectEnd: o,
                                                connectStart: l,
                                                decodedBodySize: c,
                                                domainLookupEnd: u,
                                                domainLookupStart: d,
                                                encodedBodySize: h,
                                                fetchStart: f,
                                                initiatorType: p,
                                                nextHopProtocol: m,
                                                redirectEnd: g,
                                                redirectStart: v,
                                                requestStart: y,
                                                responseEnd: b,
                                                responseStart: S,
                                                secureConnectionStart: w,
                                                transferSize: E,
                                                workerStart: P,
                                                serverTiming: T,
                                                responseStatus: k,
                                                deliveryType: I,
                                                renderBlockingStatus: C,
                                                firstInterimResponseStart: x,
                                            } = e;
                                            return {
                                                duration: r,
                                                entryType: i,
                                                name: a,
                                                encodedBodySize: h,
                                                decodedBodySize: c,
                                                initiatorType: p,
                                                transferSize: E,
                                                nextHopProtocol: m,
                                                serverTiming: T,
                                                responseStatus: k,
                                                deliveryType: I,
                                                renderBlockingStatus: C,
                                                startTime: K(s, t, n),
                                                connectEnd: K(o, t, n),
                                                connectStart: K(l, t, n),
                                                domainLookupEnd: K(u, t, n),
                                                domainLookupStart: K(d, t, n),
                                                fetchStart: K(f, t, n),
                                                redirectEnd: K(g, t, n),
                                                redirectStart: K(v, t, n),
                                                requestStart: K(y, t, n),
                                                responseEnd: K(b, t, n),
                                                responseStart: K(S, t, n),
                                                secureConnectionStart: K(w, t, n),
                                                workerStart: K(P, t, n),
                                                firstInterimResponseStart: K(x, t, n),
                                            };
                                        })(r, t[a], n),
                                    );
                            });
                        }),
                        0 === e.length)
                    )
                        return;
                    let i = P();
                    (function (e, t = 65536) {
                        let n = new TextEncoder(),
                            r = [],
                            i = [],
                            a = 0;
                        for (let s of e) {
                            let e = JSON.stringify(s),
                                o = n.encode(e).length;
                            a + o > t ? (r.push(i), (i = [s]), (a = o)) : (i.push(s), (a += o));
                        }
                        return (i.length > 0 && r.push(i), r);
                    })(e).forEach((e, t) => {
                        setTimeout(() => {
                            this.config.sendLog(e, { perfnow: String(i), navstart: String(n) });
                        }, 500 * t);
                    });
                }
                shouldLogResource(e) {
                    return (
                        !et.SERVICE_ENDPOINTS_REGEX.test(e) &&
                        (!!(this.config.ignoreWhiteList || et.MEDIA_EXTENSION_REGEX.test(e)) || (!!this.allowedUrls.size && this.hasSameBaseUrl(e)))
                    );
                }
                hasSameBaseUrl(e) {
                    let t = Z(e);
                    if (!t) return !1;
                    for (let e of Array.from(this.allowedUrls.values())) if (e && e === t) return !0;
                    return !1;
                }
            }
            function en(e) {
                return e.performance?.timeOrigin ?? e.performance?.timing?.navigationStart;
            }
            class er {
                lastUpdate = void 0;
                committed = (0, u.fP)(0);
                pending = [];
                videoCredit = (0, u.fP)(0);
                pendingClock = (0, u.fP)(0);
                watchedTime = (0, u.fP)(0);
                CONFIRM_WINDOW = (0, u.fP)(1.2);
                JUMP_MIN = (0, u.fP)(2);
                SMALL_NEG = (0, u.fP)(0.02);
                calc(e, t, n) {
                    if (void 0 !== this.lastUpdate) {
                        let r = (0, u.Wj)(this.lastUpdate.getElapsedTime()),
                            i = (0, u.Qr)(r, 1e3),
                            a = (0, u.gL)(e, this.lastUpdate.videoTime),
                            s = (0, u.Qr)(a, t),
                            o = i >= (0, u.fP)(0) ? i : (0, u.fP)(0),
                            l = (0, u.gL)((0, u.fP)(0), s) > this.JUMP_MIN,
                            c = s > this.SMALL_NEG ? s : (0, u.fP)(0),
                            d = s > this.JUMP_MIN;
                        n
                            ? ((this.pendingClock = (0, u.WQ)(this.pendingClock, o)),
                              this.dropExpired(),
                              d || l
                                  ? this.resetPending()
                                  : (o > (0, u.fP)(0) && this.pending.push({ amount: o, bornAt: this.pendingClock }),
                                    c > (0, u.fP)(0) && (this.videoCredit = (0, u.WQ)(this.videoCredit, c)),
                                    this.consumeCredit()))
                            : (!(c > (0, u.fP)(0)) || d || l || ((this.videoCredit = (0, u.WQ)(this.videoCredit, c)), this.consumeCredit()), this.resetPending());
                    }
                    this.lastUpdate = n ? { getElapsedTime: q(), videoTime: e } : void 0;
                }
                get() {
                    return this.watchedTime;
                }
                reset() {
                    ((this.committed = (0, u.fP)(0)), this.resetPending(), (this.watchedTime = (0, u.fP)(0)), (this.lastUpdate = void 0));
                }
                restoreLastUpdate() {
                    this.lastUpdate = void 0;
                }
                consumeCredit() {
                    for (; this.videoCredit > (0, u.fP)(0) && this.pending.length > 0;) {
                        let e = this.pending[0],
                            t = this.videoCredit <= e.amount ? this.videoCredit : e.amount;
                        if (
                            ((e.amount = (0, u.gL)(e.amount, t)),
                            (this.videoCredit = (0, u.gL)(this.videoCredit, t)),
                            (this.committed = (0, u.WQ)(this.committed, t)),
                            e.amount <= (0, u.fP)(0))
                        )
                            this.pending.shift();
                        else break;
                    }
                    this.watchedTime = this.committed;
                }
                dropExpired() {
                    for (; this.pending.length > 0;) {
                        let e = this.pending[0];
                        if ((0, u.gL)(this.pendingClock, e.bornAt) > this.CONFIRM_WINDOW) this.pending.shift();
                        else break;
                    }
                }
                resetPending() {
                    ((this.pending = []), (this.videoCredit = (0, u.fP)(0)), (this.pendingClock = (0, u.fP)(0)), (this.watchedTime = this.committed));
                }
            }
            class ei {
                getState;
                onChange;
                onLoop;
                intervalId = void 0;
                watchedTimeCounter;
                previousCurrentTime = (0, u.fP)(0);
                previousDuration = (0, u.fP)(0);
                constructor(e, t, n) {
                    ((this.getState = e),
                        (this.onChange = t),
                        (this.onLoop = n),
                        (this.intervalId = setInterval(this.update, 100)),
                        (this.watchedTimeCounter = this.createWatchedTimeCounter()));
                }
                update = (e) => {
                    let t = this.getState();
                    if (!t) return;
                    let { currentTime: n, playbackRate: r = 1, playingState: i, adState: o, duration: l, loop: c, videoType: d } = t,
                        h = e ?? i,
                        f = o?.state === s.PLAYING,
                        p = this.previousDuration > 0,
                        m = Math.min(1, 0.2 * this.previousDuration),
                        g = Math.min(2, 0.2 * (l || this.previousDuration)),
                        v = p && this.previousCurrentTime >= this.previousDuration - m,
                        y = n <= g,
                        b = n < this.previousCurrentTime;
                    (c && 'VOD' === d && v && y && b && h === a.PLAY && !f && this.onLoop?.(),
                        (this.previousCurrentTime = n),
                        (this.previousDuration = l || (0, u.fP)(0)),
                        this.watchedTimeCounter.calc(n, r, h === a.PLAY && !f),
                        this.onChange?.(this.watchedTimeCounter.get()));
                };
                createWatchedTimeCounter() {
                    return new er();
                }
                reset() {
                    ((this.watchedTimeCounter = this.createWatchedTimeCounter()),
                        (this.previousCurrentTime = (0, u.fP)(0)),
                        (this.previousDuration = (0, u.fP)(0)),
                        this.onChange?.(this.watchedTimeCounter.get()));
                }
                getWatchedTime() {
                    return this.watchedTimeCounter.get();
                }
                destroy() {
                    (clearInterval(this.intervalId), (this.intervalId = void 0));
                }
            }
            let ea = 'vpuid';
            class es {
                data = {};
                getItem(e) {
                    return this.data[e] || null;
                }
                setItem(e, t) {
                    this.data[e] = t;
                }
                removeItem(e) {
                    delete this.data[e];
                }
                clear() {
                    this.data = {};
                }
                get length() {
                    return Object.keys(this.data).length;
                }
                key(e) {
                    let t = Object.keys(this.data);
                    return e >= 0 && e < t.length ? t[e] : null;
                }
            }
            function eo(e) {
                let t = '__test_storage__';
                try {
                    return (e.setItem(t, 'test'), e.removeItem(t), !0);
                } catch {
                    return !1;
                }
            }
            class el {
                fallbackOrder;
                constructor(e = ['local', 'session', 'memory']) {
                    this.fallbackOrder = e;
                }
                getStorage() {
                    for (let e of this.fallbackOrder)
                        if (
                            (function (e) {
                                try {
                                    switch (e) {
                                        case 'local':
                                            return eo(window.localStorage);
                                        case 'session':
                                            return eo(window.sessionStorage);
                                        case 'memory':
                                            return !0;
                                        default:
                                            throw Error(`Unsupported storage type: ${e}`);
                                    }
                                } catch {
                                    return !1;
                                }
                            })(e)
                        )
                            return this.createStorage(e);
                    return new es();
                }
                createStorage(e) {
                    switch (e) {
                        case 'local':
                        default:
                            return window.localStorage;
                        case 'session':
                            return window.sessionStorage;
                        case 'memory':
                            return new es();
                    }
                }
            }
            let ec = new el().getStorage(),
                eu = new el(['local', 'memory']).getStorage(),
                ed = new el(['session', 'memory']).getStorage();
            function eh(e) {
                return {
                    getItem(t) {
                        try {
                            return e.getItem(t);
                        } catch {
                            return null;
                        }
                    },
                    setItem(t, n) {
                        try {
                            e.setItem(t, n);
                        } catch {}
                    },
                    removeItem(t) {
                        try {
                            e.removeItem(t);
                        } catch {}
                    },
                    clear() {
                        try {
                            e.clear();
                        } catch {}
                    },
                    hasItem(t) {
                        try {
                            return null !== e.getItem(t);
                        } catch {
                            return !1;
                        }
                    },
                    get length() {
                        try {
                            return e.length;
                        } catch {
                            return 0;
                        }
                    },
                    key(t) {
                        try {
                            return e.key(t);
                        } catch {
                            return null;
                        }
                    },
                };
            }
            let ef = eh(ec),
                ep = eh(eu);
            function em(e, t = !1) {
                if (!e) return !1;
                let n = t ? Function.prototype.toString.call(e) : e.toString ? e.toString() : '';
                return /\[native code\]/.test(n) || /\/\* source code not available \*\//.test(n);
            }
            eh(ed);
            let eg = !em(Math.random) || Math.random() === Math.random(),
                ev = (P() * O()) % 0x7fffffff,
                ey = eg
                    ? function () {
                          return ((ev = (16807 * ev) % 0x7fffffff) - 1) / 0x7ffffffe;
                      }
                    : function () {
                          return Math.random();
                      },
                eb = 'qwertyuiopasdfghjklzxcvbnm0123456789',
                eS =
                    ef.getItem(ea) ??
                    (function () {
                        let e = [];
                        for (let t = 0; t < 10; t++) e.push(eb[Math.floor(ey() * eb.length)]);
                        return e.join('');
                    })();
            function ew() {
                return (0, u.Wj)(P());
            }
            ef.setItem(ea, eS);
            class eE {
                lastDateNow;
                lastPerformanceNow;
                total = (0, u.Wj)(0);
                interval;
                getTime;
                constructor(e = O) {
                    ((this.getTime = e), (this.lastDateNow = ew()), (this.lastPerformanceNow = e()), (this.interval = setInterval(this.now, 1e3)));
                }
                now = () => {
                    let e = ew(),
                        t = this.getTime(),
                        n = (0, u.gL)(t, this.lastPerformanceNow),
                        r = (0, u.gL)(e, this.lastDateNow),
                        i = (n) => ((this.lastDateNow = e), (this.lastPerformanceNow = t), (this.total = (0, u.WQ)(this.total, n)), this.total);
                    return i(r <= 0 ? n : r);
                };
                stop() {
                    clearInterval(this.interval);
                }
            }
            async function eP(e, t) {
                try {
                    if (
                        (void 0 === r &&
                            (r =
                                'function' == typeof TextEncoder && 'function' == typeof CompressionStream
                                    ? { encoder: new TextEncoder(), streamConstructor: CompressionStream }
                                    : null),
                        null === r)
                    )
                        return null;
                    let n = new Uint8Array(r.encoder.encode(e)),
                        i = new r.streamConstructor(t),
                        a = i.writable.getWriter(),
                        s = Promise.resolve(a.write(n)).then(() => a.close()),
                        o = eT(i.readable),
                        [, l] = await Promise.all([s, o]),
                        c = l.reduce((e, t) => e + t.byteLength, 0),
                        u = new Uint8Array(c),
                        d = 0;
                    for (let e of l) (u.set(e, d), (d += e.byteLength));
                    return { buffer: u, type: t };
                } catch {
                    return ((r = null), null);
                }
            }
            async function eT(e) {
                let t = e.getReader(),
                    n = [],
                    r = await t.read();
                for (; !r.done;) (n.push(r.value), (r = await t.read()));
                return n;
            }
            let ek = [].find,
                eI = em(ek)
                    ? (e, t) => ek.call(e, t)
                    : (e, t) => {
                          for (let n = 0; n < e.length; n++) {
                              let r = e[n];
                              if (t(r, n, e)) return r;
                          }
                      },
                eC = (function (e, t) {
                    let n = e[t];
                    if (!em(n)) {
                        let r = n;
                        try {
                            delete e[t];
                            let i = e[t];
                            ('function' == typeof i && (n = i), (e[t] = r));
                        } catch (e) {}
                    }
                    return n;
                })(Array, 'isArray'),
                ex = eC ? (e) => eC.call(Array, e) : (e) => 'Array' === w(e),
                eO = '[object Window]';
            function ej(e) {
                if (('string' == typeof e && (e = { message: e }), ('object' != typeof e || null === e) && (e = {}), 'function' == typeof e.toJSON))
                    try {
                        return { __stringifyError: e.toJSON() };
                    } catch {}
                let { name: t, message: n, stack: r } = e;
                return { __stringifyError: { name: t, message: n, stack: r } };
            }
            function eL(e, t, n, r) {
                let i = e_(e[t], n + '/' + t, r);
                return void 0 === i ? 'null' : i;
            }
            function eM(e) {
                return JSON.stringify(e);
            }
            function e_(e, t, n) {
                switch (typeof e) {
                    case 'boolean':
                        return e ? 'true' : 'false';
                    case 'string':
                        return eM(e);
                    case 'undefined':
                        break;
                    case 'bigint':
                        return eM(e.toString());
                    case 'function':
                        let r = 'string' == typeof e.name && e.name.length > 0 ? ' ' + e.name : '';
                        return eM(`[Function${r}]`);
                    case 'symbol':
                        return eM('[Symbol]');
                    case 'number':
                        return isNaN(e) || !isFinite(e) ? 'null' : String(e);
                    case 'object':
                        if (null === e) return 'null';
                        if (Object.prototype.toString.call(e) === eO) return eM(eO);
                        if ('string' == typeof e.tagName) return eM(`[DOMNode ${e.tagName}]`);
                        if ('undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer.isView && ArrayBuffer.isView(e)) {
                            let { name: t } = e.constructor;
                            return eM(`[${t || 'TypedArray'}(${e.byteLength || 0})]`);
                        }
                        let i = n.get(e);
                        if (void 0 !== i) return eM(`[Circular ${i}]`);
                        return (
                            n.set(e, t),
                            ex(e)
                                ? (function (e, t, n) {
                                      if (0 === e.length) return '[]';
                                      let r = '[' + eL(e, 0, t, n);
                                      for (let i = 1; i < e.length; i++) r += ',' + eL(e, i, t, n);
                                      return r + ']';
                                  })(e, t, n)
                                : (function (e, t, n) {
                                      if ('function' == typeof e.toJSON) {
                                          let r;
                                          try {
                                              r = e.toJSON();
                                          } catch (e) {
                                              r = ej(e);
                                          }
                                          return e_(r, t + '/toJSON', n);
                                      }
                                      if (e instanceof Error) {
                                          let { name: r, message: i, stack: a } = e;
                                          return e_({ name: r, message: i, stack: a }, t, n);
                                      }
                                      let r = '{',
                                          i = !0;
                                      for (let a in e) {
                                          let s;
                                          if (!Object.prototype.hasOwnProperty.call(e, a)) continue;
                                          try {
                                              s = e[a];
                                          } catch (e) {
                                              s = ej(e);
                                          }
                                          let o = e_(s, t + '/' + a, n);
                                          void 0 !== o && (i ? (i = !1) : (r += ','), (r += eM(a) + ':' + o));
                                      }
                                      return r + '}';
                                  })(e, t, n)
                        );
                }
            }
            let eD = ['NotAllowedError', 'SecurityError'];
            function eB(e) {
                return 'number' == typeof e && isFinite(e) && e >= 0 ? e : void 0;
            }
            class eN {
                navigatorObject;
                performanceObject;
                batteryManager;
                constructor(e = navigator, t = 'undefined' == typeof performance ? void 0 : performance) {
                    ((this.navigatorObject = e), (this.performanceObject = t), this.initBatteryManager());
                }
                initBatteryManager() {
                    try {
                        let e = this.navigatorObject.getBattery;
                        'function' == typeof e &&
                            e.call(this.navigatorObject).then(
                                (e) => {
                                    this.batteryManager = e;
                                },
                                (e) => this.handleBatteryError(e),
                            );
                    } catch (e) {
                        this.handleBatteryError(e);
                    }
                }
                handleBatteryError(e) {
                    !(function (e) {
                        if ('object' != typeof e || null === e || !('name' in e)) return !1;
                        let { name: t } = e;
                        return 'string' == typeof t && eD.includes(t);
                    })(e) && F(e);
                }
                getState() {
                    let e = {},
                        t = eB(this.performanceObject?.memory?.usedJSHeapSize),
                        n = eB(this.navigatorObject.deviceMemory),
                        r = eB(this.batteryManager?.level);
                    return (
                        void 0 !== t && (e.usedJavaHeap = t),
                        void 0 !== n && n > 0 && (e.totalRAM = Math.round(0x40000000 * n)),
                        void 0 !== r && r <= 1 && (e.batteryLevel = r),
                        'boolean' == typeof this.batteryManager?.charging && (e.isCharging = this.batteryManager.charging),
                        0 === Object.keys(e).length ? void 0 : e
                    );
                }
            }
            let eA = ['CreatePlayer', 'SetSource', 'Start', 'Stalled', 'StalledEnd', 'End'],
                eU = { logVersion: '1.4.1' };
            class eR {
                static getVpuid() {
                    return eS;
                }
                watchedTimeTracker;
                fatalTracker;
                playbackTracker;
                playerAliveController;
                stalledController;
                deviceStateCollector;
                staticParams = {};
                playerInfo;
                useOfDeprecatedMethodIsLogged = !1;
                timer;
                timerStartTime = Date.now();
                sendLog;
                onEventLog;
                compressionEnabled;
                compressionSuspended = !1;
                pendingLogs = new Set();
                getState;
                destroyed = !1;
                wasInitBufferingLogged = !1;
                externalStalledDuration = (0, u.Wj)(0);
                initialStalledDuration = (0, u.Wj)(0);
                wasInitBufferingHandled = !1;
                initBufferingDeferred = !1;
                initialStalledTimestamp;
                initialStalledTimestampStop;
                eventIndex = 0;
                reportNumber = 0;
                sourceIndexes = { current: 0, last: 0 };
                loopEnabled = !1;
                loopIndex = 0;
                constructor({ sendLog: e, playerInfo: t, getState: n, disableCompression: r, onEventLog: i }) {
                    ((this.playerInfo = t),
                        (this.sendLog = e),
                        (this.onEventLog = i),
                        (this.compressionEnabled =
                            !r &&
                            !(function () {
                                let e = ep.getItem('disable-telemetry-compression');
                                return 'true' === e || '1' === e;
                            })()),
                        (this.getState = n),
                        (this.deviceStateCollector = new eN()),
                        (this.loopEnabled = this.getState()?.loop ?? !1),
                        (this.playbackTracker = new h({ onEvent: (e) => this.logEvent({ name: e }) })),
                        (this.stalledController = new X({ getState: this.getState, logEvent: (e) => this.logEvent(e) })),
                        (this.watchedTimeTracker = new ei(
                            n,
                            (e) => this.playbackTracker.onWatchedTimeChange(e),
                            () => this.onLoop(),
                        )),
                        (this.playerAliveController = new B({
                            getState: n,
                            onFlushStates: (e) => this.logEvent({ name: 'PlayerAlive', data: { states: e } }),
                            getTimestamp: () => this.getLogTimestamp(),
                            stalledController: this.stalledController,
                            getWatchedTime: () => this.watchedTimeTracker.getWatchedTime(),
                        })),
                        (this.fatalTracker = new f()),
                        this.initOnVisibilityChangeHandling(),
                        (this.timer = new eE()));
                }
                getLogTimestamp() {
                    return Math.round(this.timerStartTime + this.timer.now());
                }
                initOnVisibilityChangeHandling() {
                    let e = () => {
                            let e = this.compressionSuspended;
                            this.compressionSuspended = !0;
                            try {
                                (this.flushPendingLogs(), this.playerAliveController.flushStates());
                            } finally {
                                this.compressionSuspended = e;
                            }
                        },
                        t = (function (e, t) {
                            let n = (function (e) {
                                let t = z(e);
                                if (t) return t.replace(/hidden/i, 'visibilitychange');
                            })(e);
                            if (!n) return D;
                            let r = () => {
                                t(J(e));
                            };
                            return (e.addEventListener(n, r), () => e.removeEventListener(n, r));
                        })(document, (t) => {
                            t || e();
                        });
                    (window.addEventListener('pagehide', e),
                        this.playerAliveController.addDestroyHandler(() => {
                            (t(), window.removeEventListener('pagehide', e));
                        }));
                }
                setStaticParams(e, t) {
                    t ? (this.staticParams = { ...e }) : (this.staticParams = { ...this.staticParams, ...e });
                }
                updateWatchedTime() {
                    (this.useOfDeprecatedMethodIsLogged ||
                        (this.logEvent({ name: 'DeprecatedTelemetryMethodUsed', data: { method: 'updateWatchedTime' } }), (this.useOfDeprecatedMethodIsLogged = !0)),
                        F(Error('Deprecated method used. Method is Telemetry#updateWatchedTime(). Just remove. Telemetry calculates watchedTime itself now.')));
                }
                setPlayingState(e) {
                    (this.playbackTracker.onPlayingStateChange(e),
                        e !== a.PLAY && this.watchedTimeTracker.update(e),
                        this.handleInitialBuffering(),
                        e === a.BUFFERING ? this.setBuffering(!0) : this.setBuffering(!1));
                }
                logEvent(e, t) {
                    if (this.destroyed) return;
                    let n = this.getFullEventLog(e, t),
                        r = this.getUrlParams(n.eventType, n.eventName, e.labels);
                    (this.onEventLog?.(n), this.sendData(n, r));
                }
                logError({ error: e, labels: t, extraRootFields: n }, r) {
                    if (this.destroyed) return;
                    e.isFatal = this.fatalTracker.checkIsFatal(e.isFatal, this.staticParams.streamUrl);
                    let i = this.getFullErrorLog({ error: e, labels: t, extraRootFields: n, sourceIndex: r }),
                        a = this.getUrlParams(i.eventType, i.eventName, t);
                    this.sendData(i, a);
                }
                getUrlParams(e, t, n) {
                    return { ...n, [this.playerInfo.service]: this.playerInfo.version, [e]: String(t) };
                }
                getFullEventLog(e, t) {
                    let n = this.getState(),
                        r = { ...this.staticParams.labels, ...e.labels, videoType: n?.videoType },
                        i = Q.includes(e.name) ? { ...e.data, ...this.getDataToSend(n) } : e.data,
                        a = {
                            ...eU,
                            ...this.staticParams,
                            ...e.extraRootFields,
                            ...this.playerInfo,
                            vpuid: eS,
                            eventType: 'event',
                            eventName: e.name,
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: J(document),
                            eventIndex: this.eventIndex,
                            data: i,
                            labels: r,
                            sourceIndex: t ?? this.sourceIndexes.current,
                        };
                    return eA.includes(e.name) ? this.addDeviceState(a) : a;
                }
                addDeviceState(e) {
                    let t = this.deviceStateCollector.getState();
                    return t ? { ...e, device: { ...e.device, state: t } } : e;
                }
                getFullErrorLog({ error: e, labels: t, extraRootFields: n, sourceIndex: r }) {
                    let i = { ...this.staticParams.labels, ...t };
                    return (
                        (e.details =
                            H(() =>
                                'string' == typeof e.details
                                    ? e.details
                                    : (function (e) {
                                          try {
                                              return e_(
                                                  e,
                                                  '~',
                                                  (function () {
                                                      let e = 'undefined' != typeof WeakMap ? new WeakMap() : void 0,
                                                          t = [];
                                                      return {
                                                          set: (n, r) => {
                                                              if (void 0 === e) return void t.push({ path: r, value: n });
                                                              try {
                                                                  e.set(n, r);
                                                              } catch (e) {
                                                                  t.push({ path: r, value: n });
                                                              }
                                                          },
                                                          get: (n) => {
                                                              let r = eI(t, (e) => e.value === n);
                                                              return void 0 !== e && void 0 === r ? e.get(n) : r ? r.path : void 0;
                                                          },
                                                      };
                                                  })(),
                                              );
                                          } catch (e) {
                                              return JSON.stringify(ej(e));
                                          }
                                      })(e.details),
                            ) || e.details),
                        this.addDeviceState({
                            ...eU,
                            ...this.playerInfo,
                            ...this.staticParams,
                            ...n,
                            vpuid: eS,
                            eventType: e.isFatal ? 'fatal' : 'error',
                            eventName: String(e.code),
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: J(document),
                            eventIndex: this.eventIndex,
                            data: e,
                            labels: i,
                            sourceIndex: r ?? this.sourceIndexes.current,
                        })
                    );
                }
                getDataToSend(e) {
                    if (!e) return {};
                    let { duration: t, currentTime: n, utcStartTime: r, isFullscreen: i, volume: a, muted: s } = e;
                    return {
                        watchedSec: this.watchedTimeTracker.getWatchedTime(),
                        duration: isNaN(t) ? void 0 : t,
                        time: n,
                        utcTime: void 0 === r ? void 0 : r + n,
                        isFullscreen: i,
                        isMuted: s || 0 === a,
                    };
                }
                sendData(e, t) {
                    if (void 0 === e) return;
                    let n = JSON.stringify(e);
                    if (this.compressionEnabled && !this.compressionSuspended) {
                        let e = { json: n, urlParams: t };
                        (this.pendingLogs.add(e),
                            eP(n, 'gzip').then((t) => {
                                this.sendPendingLog(e, t);
                            }));
                    } else H(() => this.sendLog(n, t), F);
                    this.eventIndex++;
                }
                sendPendingLog(e, t) {
                    if (!this.pendingLogs.delete(e)) return;
                    let { json: n, urlParams: r } = e;
                    H(() => this.sendLog(t ? t.buffer : n, t ? { ...r, enc: t.type } : r), F);
                }
                flushPendingLogs() {
                    this.pendingLogs.forEach((e) => this.sendPendingLog(e, null));
                }
                checkStalledReason(e) {
                    return this.stalledController.getCurrentStalledReason() === e;
                }
                setBuffering(e, t) {
                    this.stalledController.setBuffering(e, t);
                }
                setExpectedBuffering({ reason: e, details: t }) {
                    switch ((this.checkInitBuffering(e), e)) {
                        case l.SetSource:
                            (this.setBuffering(!1), this.clearBufferingHistory());
                            break;
                        case l.Init:
                            break;
                        default:
                            this.checkStalledReason(e) || this.setBuffering(!1);
                    }
                    return this.stalledController.setExpectedStalled(G(e, t));
                }
                checkInitBuffering(e) {
                    this.wasInitBufferingLogged || e === l.Init || this.onInitBuffering();
                }
                setExternalStalledDuration(e) {
                    let t = this.getExpectedStalled();
                    t.reason === l.Init && e && ((t.details = { externalStalledDuration: (0, u.Qr)(e, 1e3) }), this.setExpectedBuffering(t));
                }
                startInitBufferingTimer() {
                    this.initialStalledTimestamp = (0, u.Wj)(O());
                }
                stopInitBufferingTimer() {
                    this.initialStalledTimestampStop = (0, u.Wj)(O());
                }
                deferInitBuffering() {
                    this.initBufferingDeferred = !0;
                }
                undeferInitBuffering() {
                    this.initBufferingDeferred = !1;
                }
                onInitBuffering(e) {
                    if (this.wasInitBufferingLogged) return;
                    let t = this.initialStalledTimestamp && !this.initialStalledTimestampStop,
                        n = this.initialStalledTimestamp && this.initialStalledTimestampStop;
                    ((this.initialStalledDuration = t
                        ? (0, u.gL)((0, u.Wj)(O()), this.initialStalledTimestamp)
                        : n
                          ? (0, u.gL)(this.initialStalledTimestampStop, this.initialStalledTimestamp)
                          : (0, u.Wj)(0)),
                        (this.externalStalledDuration = e ?? (0, u.Wj)(0)));
                    let { playingState: r } = this.getState() || {};
                    ('pause' !== r && this.handleInitialBuffering(),
                        (this.wasInitBufferingLogged = !0),
                        (this.initialStalledTimestamp = void 0),
                        (this.initialStalledTimestampStop = void 0));
                }
                handleInitialBuffering() {
                    this.wasInitBufferingHandled ||
                        this.initBufferingDeferred ||
                        (this.externalStalledDuration && this.setExternalStalledDuration(this.externalStalledDuration),
                        this.setBuffering(!0, this.initialStalledDuration),
                        (this.wasInitBufferingHandled = !0));
                }
                destroy(e) {
                    ((this.compressionSuspended = !0),
                        this.flushPendingLogs(),
                        this.stalledController.destroy(),
                        this.playerAliveController.destroy(),
                        this.watchedTimeTracker.destroy(),
                        this.logEvent({ name: 'DestroyPlayer', data: { reason: e?.reason } }),
                        this.timer.stop(),
                        (this.destroyed = !0));
                }
                getExpectedStalled() {
                    return this.stalledController.getExpectedStalled();
                }
                getWasInitBufferingHandled() {
                    return this.wasInitBufferingHandled;
                }
                clearBufferingHistory() {
                    return this.stalledController.clearStalledHistory();
                }
                setPreloadDetails() {
                    (this.useOfDeprecatedMethodIsLogged ||
                        (this.logEvent({ name: 'DeprecatedTelemetryMethodUsed', data: { method: 'setPreloadDetails' } }), (this.useOfDeprecatedMethodIsLogged = !0)),
                        F(Error('Deprecated method used. Method is Telemetry#setPreloadDetails(). Just remove it.')));
                }
                writePlayerAliveStateManually() {
                    return this.playerAliveController.writeStateManually();
                }
                flushStates() {
                    return this.playerAliveController.flushStates();
                }
                onCreatePlayer(e, t) {
                    this.logEvent({ name: 'CreatePlayer', data: e, extraRootFields: t });
                }
                onBeforePreload() {
                    return ++this.sourceIndexes.last;
                }
                getSourceIndex() {
                    return this.sourceIndexes.current;
                }
                onBeforeSetSource() {
                    return ++this.sourceIndexes.last;
                }
                onSetSource(e, t, n) {
                    if (
                        (this.flushStates(),
                        e && t && this.setExpectedBuffering({ reason: l.SetSource, details: t }),
                        (this.sourceIndexes.current = this.sourceIndexes.last > this.sourceIndexes.current ? this.sourceIndexes.last : ++this.sourceIndexes.last),
                        (this.loopIndex = 0),
                        this.watchedTimeTracker.reset(),
                        n && this.setStaticParams(n),
                        this.logEvent({ name: 'SetSource', data: e ?? void 0 }),
                        !e || !t)
                    )
                        return;
                    let r = this.getState()?.playingState;
                    r !== a.PAUSE && r !== a.END && this.setBuffering(!0);
                }
                sendReportLog(e, t, n = !0) {
                    let r = t ?? this.generateReportId();
                    return (this.logEvent({ name: 'ReportLog', data: { reportId: r, reported: n, reportData: e } }), r);
                }
                generateReportId() {
                    return `${this.playerInfo.vsid}x${this.reportNumber++}`;
                }
                onExpectedBuffering({ reason: e, details: t }) {
                    return (this.checkInitBuffering(e), this.stalledController.setExpectedStalled(G(e, t)));
                }
                onSeek(e) {
                    this.setExpectedBuffering({ reason: l.Seek, details: e });
                }
                onVideoTrackChange(e) {
                    this.setExpectedBuffering({ reason: l.VideoTrackChange, details: e });
                }
                onAudioTrackChange(e) {
                    this.setExpectedBuffering({ reason: l.AudioTrackChange, details: e });
                }
                onRecover(e) {
                    this.setExpectedBuffering({ reason: l.Recover, details: e });
                }
                onMediaError(e) {
                    this.setExpectedBuffering({ reason: l.MediaError, details: e });
                }
                onNetworkStatusChange(e) {
                    this.setExpectedBuffering({ reason: l.Offline, details: e });
                }
                onRepresentationsChange(e) {
                    this.setExpectedBuffering({ reason: l.RepresentationsChange, details: e });
                }
                onLiveEdge(e) {
                    this.setExpectedBuffering({ reason: l.LiveEdge, details: e });
                }
                onAdStart(e) {
                    this.setExpectedBuffering({ reason: l.AdStart, details: e });
                }
                onAdBetween(e) {
                    this.setExpectedBuffering({ reason: l.AdBetween, details: e });
                }
                onAdEnd(e) {
                    this.setExpectedBuffering({ reason: l.AdEnd, details: e });
                }
                onLoop() {
                    this.loopEnabled && (this.logEvent({ name: 'Loop', data: { loopIndex: this.loopIndex } }), this.loopIndex++);
                }
                setLoop(e) {
                    (this.loopEnabled !== e && this.writePlayerAliveStateManually(), e || (this.loopIndex = 0), (this.loopEnabled = e));
                }
            }
        },
        94177: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    bindSnapshot: function () {
                        return s;
                    },
                    createAsyncLocalStorage: function () {
                        return a;
                    },
                    createSnapshot: function () {
                        return o;
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
            let i = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function a() {
                return i ? new i() : new r();
            }
            function s(e) {
                return i ? i.bind(e) : r.bind(e);
            }
            function o() {
                return i
                    ? i.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        96669: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return r.workAsyncStorageInstance;
                    },
                }));
            let r = n(20603);
        },
        97993: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { withUserID: () => r.B }));
            var r = n(85720);
        },
    },
]);
