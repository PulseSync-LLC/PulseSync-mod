(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [697],
    {
        183: (e, t) => {
            'use strict';
            t.cn = (function (e) {
                function t(t, a, o, s) {
                    var i = a ? n + t + e.e + a : n + t,
                        l = i;
                    if (o) {
                        var c = ' ' + l + e.m;
                        for (var u in o)
                            if (o.hasOwnProperty(u)) {
                                var d = o[u];
                                !0 === d ? (l += c + u) : d && (l += c + u + r + d);
                            }
                    }
                    if (void 0 !== s)
                        for (var f = 0, p = s.length; f < p; f++) {
                            var v = s[f];
                            if (v && 'string' == typeof v.valueOf())
                                for (var m = v.valueOf().split(' '), h = 0; h < m.length; h++) {
                                    var E = m[h];
                                    E !== i && (l += ' ' + E);
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
        2783: (e, t, n) => {
            'use strict';
            function r(e, t) {
                return (r = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                          return (e.__proto__ = t), e;
                      })(e, t);
            }
            function a(e, t) {
                (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
            }
            n.d(t, { A: () => a });
        },
        2853: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => o, U: () => s });
            var r = n(55178),
                a = n(99448);
            n(13489);
            var o = (0, a.cn)('UserWidget', 'Content'),
                s = r.forwardRef(function (e, t) {
                    var n = e.loading,
                        a = e.preload,
                        s = e.height,
                        i = e.colorScheme,
                        l = e.className,
                        c = e.src,
                        u = e.width;
                    return r.createElement(
                        'div',
                        { className: o({ loading: n, colorScheme: i }, [l]) },
                        a && r.createElement('iframe', { className: 'UserWidget-Iframe', ref: t, width: u, src: c, height: n ? 300 : s }),
                        n && r.createElement('div', { className: 'UserWidget-Spin' }),
                    );
                });
        },
        3238: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => i });
            var r = n(30782),
                a = n(55178),
                o = n(2853),
                s = n(85438);
            function i(e, t) {
                var n,
                    i = function (n) {
                        var i = n.onOpen,
                            l = n.onClose,
                            c = (0, r.__read)((0, a.useState)(!1), 2),
                            u = c[0],
                            d = c[1],
                            f = (0, a.useCallback)(
                                function () {
                                    d(!0), null == i || i();
                                },
                                [d, i],
                            ),
                            p = (0, a.useCallback)(
                                function () {
                                    d(!1), null == l || l();
                                },
                                [d, l],
                            ),
                            v = (0, s.w)((0, r.__assign)((0, r.__assign)({}, n), { visible: u, onOpen: f, onClose: p })),
                            m = v.avatarProps,
                            h = v.contentProps,
                            E = v.dialogProps;
                        return a.createElement(
                            e,
                            (0, r.__assign)({}, n, m),
                            n.children,
                            a.createElement(t, (0, r.__assign)({}, E, { onClose: p }), a.createElement(o.U, (0, r.__assign)({}, h))),
                        );
                    };
                return (i.displayName = "'withUserID(" + (null != (n = e.displayName) ? n : e) + ")'"), i;
            }
        },
        5487: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
        },
        9612: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => f });
            var r = n(28376),
                a = n(68905),
                o = n(2783);
            function s(e, t) {
                return e
                    .replace(RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
                    .replace(/\s+/g, ' ')
                    .replace(/^\s*|\s*$/g, '');
            }
            var i = n(55178),
                l = n(65549),
                c = n(25024),
                u = function (e, t) {
                    return (
                        e &&
                        t &&
                        t.split(' ').forEach(function (t) {
                            e.classList
                                ? e.classList.remove(t)
                                : 'string' == typeof e.className
                                  ? (e.className = s(e.className, t))
                                  : e.setAttribute('class', s((e.className && e.className.baseVal) || '', t));
                        })
                    );
                },
                d = (function (e) {
                    function t() {
                        for (var t, n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (
                            ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                            (t.onEnter = function (e, n) {
                                var r = t.resolveArguments(e, n),
                                    a = r[0],
                                    o = r[1];
                                t.removeClasses(a, 'exit'), t.addClass(a, o ? 'appear' : 'enter', 'base'), t.props.onEnter && t.props.onEnter(e, n);
                            }),
                            (t.onEntering = function (e, n) {
                                var r = t.resolveArguments(e, n),
                                    a = r[0],
                                    o = r[1];
                                t.addClass(a, o ? 'appear' : 'enter', 'active'), t.props.onEntering && t.props.onEntering(e, n);
                            }),
                            (t.onEntered = function (e, n) {
                                var r = t.resolveArguments(e, n),
                                    a = r[0],
                                    o = r[1] ? 'appear' : 'enter';
                                t.removeClasses(a, o), t.addClass(a, o, 'done'), t.props.onEntered && t.props.onEntered(e, n);
                            }),
                            (t.onExit = function (e) {
                                var n = t.resolveArguments(e)[0];
                                t.removeClasses(n, 'appear'), t.removeClasses(n, 'enter'), t.addClass(n, 'exit', 'base'), t.props.onExit && t.props.onExit(e);
                            }),
                            (t.onExiting = function (e) {
                                var n = t.resolveArguments(e)[0];
                                t.addClass(n, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e);
                            }),
                            (t.onExited = function (e) {
                                var n = t.resolveArguments(e)[0];
                                t.removeClasses(n, 'exit'), t.addClass(n, 'exit', 'done'), t.props.onExited && t.props.onExited(e);
                            }),
                            (t.resolveArguments = function (e, n) {
                                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
                            }),
                            (t.getClassNames = function (e) {
                                var n = t.props.classNames,
                                    r = 'string' == typeof n,
                                    a = r && n ? n + '-' : '',
                                    o = r ? '' + a + e : n[e],
                                    s = r ? o + '-active' : n[e + 'Active'],
                                    i = r ? o + '-done' : n[e + 'Done'];
                                return { baseClassName: o, activeClassName: s, doneClassName: i };
                            }),
                            t
                        );
                    }
                    (0, o.A)(t, e);
                    var n = t.prototype;
                    return (
                        (n.addClass = function (e, t, n) {
                            var r,
                                a = this.getClassNames(t)[n + 'ClassName'],
                                o = this.getClassNames('enter').doneClassName;
                            'appear' === t && 'done' === n && o && (a += ' ' + o),
                                'active' === n && e && (0, c.F)(e),
                                a &&
                                    ((this.appliedClasses[t][n] = a),
                                    (r = a),
                                    e &&
                                        r &&
                                        r.split(' ').forEach(function (t) {
                                            e.classList
                                                ? e.classList.add(t)
                                                : (e.classList
                                                      ? t && e.classList.contains(t)
                                                      : -1 !== (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + t + ' ')) ||
                                                  ('string' == typeof e.className
                                                      ? (e.className = e.className + ' ' + t)
                                                      : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + t));
                                        }));
                        }),
                        (n.removeClasses = function (e, t) {
                            var n = this.appliedClasses[t],
                                r = n.base,
                                a = n.active,
                                o = n.done;
                            (this.appliedClasses[t] = {}), r && u(e, r), a && u(e, a), o && u(e, o);
                        }),
                        (n.render = function () {
                            var e = this.props,
                                t = (e.classNames, (0, a.A)(e, ['classNames']));
                            return i.createElement(
                                l.Ay,
                                (0, r.A)({}, t, {
                                    onEnter: this.onEnter,
                                    onEntered: this.onEntered,
                                    onEntering: this.onEntering,
                                    onExit: this.onExit,
                                    onExiting: this.onExiting,
                                    onExited: this.onExited,
                                }),
                            );
                        }),
                        t
                    );
                })(i.Component);
            (d.defaultProps = { classNames: '' }), (d.propTypes = {});
            let f = d;
        },
        13489: () => {},
        14755: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { withUserID: () => r.B });
            var r = n(3238);
        },
        18677: () => {},
        18956: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => a });
            var r = n(55178);
            function a(e, t) {
                (0, r.useImperativeHandle)(t, function () {
                    return e.current;
                });
            }
        },
        19246: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r = n(30782);
            r.__exportStar(n(57676), t),
                r.__exportStar(n(20065), t),
                r.__exportStar(n(5487), t),
                r.__exportStar(n(74100), t),
                r.__exportStar(n(86180), t),
                r.__exportStar(n(14755), t);
        },
        20065: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { Dialog: () => r.l });
            var r = n(62340);
        },
        24586: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => a });
            var r = n(55178),
                a = n(68956).O ? r.useLayoutEffect : r.useEffect;
        },
        25024: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => r });
            var r = function (e) {
                return e.scrollTop;
            };
        },
        28376: (e, t, n) => {
            'use strict';
            function r() {
                return (r = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            n.d(t, { A: () => r });
        },
        37023: () => {},
        46853: () => {},
        53657: () => {},
        57676: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { Content: () => r.U, cnUserID: () => r.K });
            var r = n(2853);
        },
        62340: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => c });
            var r = n(55178),
                a = n(99448),
                o = n(90110);
            n(18677);
            var s = (0, a.cn)('UserID', 'CloseButton'),
                i = function (e) {
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
            n(37023);
            var l = (0, a.cn)('UserWidget', 'Dialog'),
                c = (0, r.forwardRef)(function (e, t) {
                    var n,
                        a,
                        s = e.visible,
                        c = e.loading,
                        u = e.colorScheme,
                        d = e.platform,
                        f = e.onClose,
                        p = e.className;
                    return (
                        (0, o.H)({ enabled: s && 'touch' === d }),
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
                                'aria-busy': c,
                                'aria-modal': 'true',
                                className: l('Dialog', { visible: s, loading: c, colorScheme: u, platform: d }, [p]),
                                ref: t,
                            },
                            c && r.createElement(i, { colorScheme: u, onClick: f }),
                            e.children,
                        )
                    );
                });
        },
        65549: (e, t, n) => {
            'use strict';
            n.d(t, { _K: () => p, ns: () => f, ze: () => v, Ay: () => E });
            var r = n(68905),
                a = n(2783),
                o = n(55178),
                s = n(51767);
            let i = { disabled: !1 };
            var l = n(89562),
                c = n(25024),
                u = 'unmounted',
                d = 'exited',
                f = 'entering',
                p = 'entered',
                v = 'exiting',
                m = (function (e) {
                    function t(t, n) {
                        var r,
                            a = e.call(this, t, n) || this,
                            o = n && !n.isMounting ? t.enter : t.appear;
                        return (
                            (a.appearStatus = null),
                            t.in ? (o ? ((r = d), (a.appearStatus = f)) : (r = p)) : (r = t.unmountOnExit || t.mountOnEnter ? u : d),
                            (a.state = { status: r }),
                            (a.nextCallback = null),
                            a
                        );
                    }
                    (0, a.A)(t, e),
                        (t.getDerivedStateFromProps = function (e, t) {
                            return e.in && t.status === u ? { status: d } : null;
                        });
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.updateStatus(!0, this.appearStatus);
                        }),
                        (n.componentDidUpdate = function (e) {
                            var t = null;
                            if (e !== this.props) {
                                var n = this.state.status;
                                this.props.in ? n !== f && n !== p && (t = f) : (n === f || n === p) && (t = v);
                            }
                            this.updateStatus(!1, t);
                        }),
                        (n.componentWillUnmount = function () {
                            this.cancelNextCallback();
                        }),
                        (n.getTimeouts = function () {
                            var e,
                                t,
                                n,
                                r = this.props.timeout;
                            return (
                                (e = t = n = r),
                                null != r && 'number' != typeof r && ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
                                { exit: e, enter: t, appear: n }
                            );
                        }),
                        (n.updateStatus = function (e, t) {
                            if ((void 0 === e && (e = !1), null !== t))
                                if ((this.cancelNextCallback(), t === f)) {
                                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                        var n = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this);
                                        n && (0, c.F)(n);
                                    }
                                    this.performEnter(e);
                                } else this.performExit();
                            else this.props.unmountOnExit && this.state.status === d && this.setState({ status: u });
                        }),
                        (n.performEnter = function (e) {
                            var t = this,
                                n = this.props.enter,
                                r = this.context ? this.context.isMounting : e,
                                a = this.props.nodeRef ? [r] : [s.findDOMNode(this), r],
                                o = a[0],
                                l = a[1],
                                c = this.getTimeouts(),
                                u = r ? c.appear : c.enter;
                            if ((!e && !n) || i.disabled)
                                return void this.safeSetState({ status: p }, function () {
                                    t.props.onEntered(o);
                                });
                            this.props.onEnter(o, l),
                                this.safeSetState({ status: f }, function () {
                                    t.props.onEntering(o, l),
                                        t.onTransitionEnd(u, function () {
                                            t.safeSetState({ status: p }, function () {
                                                t.props.onEntered(o, l);
                                            });
                                        });
                                });
                        }),
                        (n.performExit = function () {
                            var e = this,
                                t = this.props.exit,
                                n = this.getTimeouts(),
                                r = this.props.nodeRef ? void 0 : s.findDOMNode(this);
                            if (!t || i.disabled)
                                return void this.safeSetState({ status: d }, function () {
                                    e.props.onExited(r);
                                });
                            this.props.onExit(r),
                                this.safeSetState({ status: v }, function () {
                                    e.props.onExiting(r),
                                        e.onTransitionEnd(n.exit, function () {
                                            e.safeSetState({ status: d }, function () {
                                                e.props.onExited(r);
                                            });
                                        });
                                });
                        }),
                        (n.cancelNextCallback = function () {
                            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
                        }),
                        (n.safeSetState = function (e, t) {
                            (t = this.setNextCallback(t)), this.setState(e, t);
                        }),
                        (n.setNextCallback = function (e) {
                            var t = this,
                                n = !0;
                            return (
                                (this.nextCallback = function (r) {
                                    n && ((n = !1), (t.nextCallback = null), e(r));
                                }),
                                (this.nextCallback.cancel = function () {
                                    n = !1;
                                }),
                                this.nextCallback
                            );
                        }),
                        (n.onTransitionEnd = function (e, t) {
                            this.setNextCallback(t);
                            var n = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this),
                                r = null == e && !this.props.addEndListener;
                            if (!n || r) return void setTimeout(this.nextCallback, 0);
                            if (this.props.addEndListener) {
                                var a = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    o = a[0],
                                    i = a[1];
                                this.props.addEndListener(o, i);
                            }
                            null != e && setTimeout(this.nextCallback, e);
                        }),
                        (n.render = function () {
                            var e = this.state.status;
                            if (e === u) return null;
                            var t = this.props,
                                n = t.children,
                                a =
                                    (t.in,
                                    t.mountOnEnter,
                                    t.unmountOnExit,
                                    t.appear,
                                    t.enter,
                                    t.exit,
                                    t.timeout,
                                    t.addEndListener,
                                    t.onEnter,
                                    t.onEntering,
                                    t.onEntered,
                                    t.onExit,
                                    t.onExiting,
                                    t.onExited,
                                    t.nodeRef,
                                    (0, r.A)(t, [
                                        'children',
                                        'in',
                                        'mountOnEnter',
                                        'unmountOnExit',
                                        'appear',
                                        'enter',
                                        'exit',
                                        'timeout',
                                        'addEndListener',
                                        'onEnter',
                                        'onEntering',
                                        'onEntered',
                                        'onExit',
                                        'onExiting',
                                        'onExited',
                                        'nodeRef',
                                    ]));
                            return o.createElement(l.A.Provider, { value: null }, 'function' == typeof n ? n(e, a) : o.cloneElement(o.Children.only(n), a));
                        }),
                        t
                    );
                })(o.Component);
            function h() {}
            (m.contextType = l.A),
                (m.propTypes = {}),
                (m.defaultProps = {
                    in: !1,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    onEnter: h,
                    onEntering: h,
                    onEntered: h,
                    onExit: h,
                    onExiting: h,
                    onExited: h,
                }),
                (m.UNMOUNTED = u),
                (m.EXITED = d),
                (m.ENTERING = f),
                (m.ENTERED = p),
                (m.EXITING = v);
            let E = m;
        },
        68905: (e, t, n) => {
            'use strict';
            function r(e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            }
            n.d(t, { A: () => r });
        },
        68956: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => r });
            var r = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
        },
        70679: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { useIsomorphicLayoutEffect: () => r.E });
            var r = n(24586);
        },
        74100: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { User: () => v, UserBase: () => f });
            var r = n(55178),
                a = n(99448),
                o = n(18956),
                s = n(30782),
                i = function (e, t, n) {
                    return (void 0 === t && (t = '0/0-0'), 'prod_yateam' === e)
                        ? 'https://center.yandex-team.ru/api/v1/user/' + ('0/0-0' === t ? '404' : t) + '/avatar/' + (n ? '85' : '42') + '.jpg'
                        : ('test' !== e ? 'https://avatars.mds.yandex.net' : 'https://avatars.mdst.yandex.net') +
                              '/get-yapic/' +
                              t +
                              '/' +
                              (n ? 'islands-retina-middle' : 'islands-middle');
                };
            n(46853);
            var l = (0, a.cn)('UserID', 'Avatar'),
                c = function (e) {
                    var t,
                        n,
                        a,
                        o,
                        c = e.env,
                        u = e.avatarId,
                        d = e.plus,
                        f = e.child,
                        p = e.colorScheme,
                        v = e.className,
                        m = (0, s.__read)((0, r.useState)(!1), 2),
                        h = m[0],
                        E = m[1],
                        g =
                            ((n = (t = { avatarId: u, env: c }).env),
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
                        C = g.src,
                        x = g.srcSet,
                        b = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(
                            function () {
                                var e = b.current;
                                window && f && e && E(e.getBoundingClientRect().width <= 36);
                            },
                            [f, b],
                        ),
                        r.createElement(
                            'div',
                            { className: l({ child: f, plus: d, small: h, dark: 'dark' === p }, [v]), ref: b },
                            r.createElement('img', { src: C, className: 'UserID-Avatar-Image', srcSet: x }),
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
            (c.displayName = 'UserIDAvatar'), n(98561);
            var u = function (e) {
                var t = e.children,
                    n = e.fetchMail,
                    a = e.tld,
                    o = e.showCounter,
                    i = e.counterVariant,
                    l = void 0 === i ? 'number' : i,
                    c = e.colorScheme,
                    u = (0, s.__read)((0, r.useState)(0), 2),
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
                var p = n && d > 0 ? Math.min(d, 99) : void 0,
                    v = !!(n && p && d > p),
                    m = p && o ? '' + p + (v ? '+' : '') : null,
                    h = n || o,
                    E = ['UserID-Badge-Dot', 'UserID-Badge-Dot_colorScheme_' + c, 'UserID-Badge-Dot_variant_' + l].join(' ');
                return r.createElement('div', { className: 'UserID-Badge' }, t, h && r.createElement('div', { className: E }, 'number' === l && m));
            };
            (u.displayName = 'UserIDBadge'), n(53657);
            var d = (0, a.cn)('UserID', 'Wrapper'),
                f = (0, r.forwardRef)(function (e, t) {
                    var n = e.tld,
                        a = e.tabIndex,
                        s = e.children,
                        i = e.env,
                        l = e.colorScheme,
                        f = e.userData,
                        p = e.onClick,
                        v = e.onPointerEnter,
                        m = e.className,
                        h = e.fetchMail,
                        E = e.showCounter,
                        g = e.counterVariant,
                        C = e.visible,
                        x = e.ariaLabel,
                        b = e.avatarSize,
                        y = e.platform,
                        w = e.beforeAvatar,
                        S = e.afterAvatar,
                        _ = f || {},
                        k = _.child,
                        N = _.plus,
                        L = _.avatarId,
                        O = (0, r.useRef)(null);
                    return (
                        (0, o.N)(O, t),
                        r.createElement(
                            'div',
                            { className: d({ child: k, plus: N, default: !N }, [m]), style: null !== b ? { '--user-id-size': (b || 42) + 'px' } : void 0 },
                            r.createElement(
                                'button',
                                {
                                    'aria-expanded': C,
                                    'aria-haspopup': !0,
                                    'aria-label': x || 'Ваш профиль',
                                    className: 'UserID-Account',
                                    ref: O,
                                    role: 'button',
                                    tabIndex: void 0 === a ? 0 : a,
                                    onClick: p,
                                    onPointerEnter: v,
                                },
                                w,
                                r.createElement(
                                    u,
                                    {
                                        fetchMail: h && 'test' !== i,
                                        counterVariant: g,
                                        tld: void 0 === n ? 'ru' : n,
                                        colorScheme: l,
                                        showCounter: 'touch' !== y && (h || !0 === E),
                                    },
                                    r.createElement(c, { env: i, avatarId: L, plus: N, child: k, colorScheme: l }),
                                ),
                                S,
                            ),
                            s,
                        )
                    );
                });
            f.displayName = 'UserBase';
            var p = n(62340),
                v = (0, n(3238).B)(f, p.l);
        },
        78657: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { lock: () => E, unlock: () => g });
            var r,
                a = n(68956);
            function o(e) {
                return 'undefined' != typeof window && null != window.navigator && e.test(window.navigator.userAgent);
            }
            function s() {
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
            var c = Math.random().toString(36).slice(2),
                u = '__scrollLockState$'.concat(c),
                d = !(function () {
                    var e = !1;
                    if (!a.O) return !1;
                    try {
                        var t = function () {
                            return null;
                        };
                        window.addEventListener('testPassive', t, {
                            get passive() {
                                e = !0;
                                return;
                            },
                        }),
                            window.removeEventListener('testPassive', t);
                    } catch (e) {}
                    return e;
                })()
                    ? void 0
                    : { passive: !1 },
                f = { count: 0, lastX: 0, lastY: 0, scrollable: null, scrollX: 0, scrollY: 0 };
            function p(e) {
                1 === e.changedTouches.length &&
                    ((f.scrollable = (function (e) {
                        for (var t; e && ((t = getComputedStyle(e)), !/(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)); ) e = e.parentElement;
                        return e || document.documentElement;
                    })(e.target)),
                    l(f.scrollable) || ((f.lastX = e.changedTouches[0].pageX), (f.lastY = e.changedTouches[0].pageY)));
            }
            function v(e) {
                var t = f.scrollable,
                    n = f.lastX,
                    r = f.lastY;
                if (!(e.changedTouches.length > 1)) {
                    if (!t || l(t)) return void e.preventDefault();
                    var a = e.changedTouches[0].pageX,
                        o = e.changedTouches[0].pageY,
                        s = Math.abs(r - o) > Math.abs(n - a),
                        i = t.scrollTop,
                        c = t.scrollHeight - t.clientHeight,
                        u = t.scrollLeft,
                        d = t.scrollWidth - t.clientWidth,
                        p = !s && ((u <= 0 && a > n) || (u >= d && a < n));
                    ((s && ((i <= 0 && o > r) || (i >= c && o < r))) || p) && e.preventDefault(), (f.lastX = a), (f.lastY = o);
                }
            }
            function m() {
                f.scrollable && (f.scrollable = null);
            }
            function h(e) {
                return e || document.body;
            }
            function E(e) {
                if (a.O) {
                    var t = h(e);
                    !(function (e) {
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
                                        (o.style.width = '100%'), (o.style.height = '200px');
                                        var s = document.createElement('div');
                                        (s.style.position = 'absolute'),
                                            (s.style.top = '0'),
                                            (s.style.left = '0'),
                                            (s.style.pointerEvents = 'none'),
                                            (s.style.visibility = 'hidden'),
                                            (s.style.width = '200px'),
                                            (s.style.height = '150px'),
                                            (s.style.overflow = 'hidden'),
                                            s.appendChild(o),
                                            document.body.appendChild(s);
                                        var i = o.offsetWidth;
                                        s.style.overflow = 'scroll';
                                        var c = o.offsetWidth;
                                        i === c && (c = s.clientWidth), document.body.removeChild(s), (r = i - c);
                                    }
                                    return r;
                                }
                                return 0;
                            })(e),
                            a = parseInt(getComputedStyle(e).getPropertyValue('padding-right'), 10),
                            o = i(e, { paddingRight: ''.concat(a + n, 'px'), overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' });
                        e[u] = { initialStyle: o, count: 1 };
                    })(t),
                        s() &&
                            l(t) &&
                            (f.count++,
                            1 === f.count &&
                                ((f.scrollX = window.pageXOffset),
                                (f.scrollY = window.pageYOffset),
                                document.addEventListener('touchstart', p, d),
                                document.addEventListener('touchmove', v, d),
                                document.addEventListener('touchend', m, d)));
                }
            }
            function g(e) {
                if (a.O) {
                    var t = h(e),
                        n = t[u];
                    n && (n.count--, 0 === n.count) && (i(t, n.initialStyle), delete t[u]),
                        s() &&
                            l(t) &&
                            0 !== f.count &&
                            (f.count--,
                            0 === f.count &&
                                (document.removeEventListener('touchstart', p),
                                document.removeEventListener('touchmove', v),
                                document.removeEventListener('touchend', m),
                                window.scrollTo(f.scrollX, f.scrollY)));
                }
            }
        },
        85438: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => N });
            var r,
                a,
                o = n(30782),
                s = n(55178),
                i = n(18956),
                l = n(24586),
                c = [],
                u = null,
                d = null;
            function f() {
                return c[c.length - 1];
            }
            function p(e, t, n) {
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
            function v(e) {
                var t = e.key;
                ('Escape' === t || 'Esc' === t) && p(e, 'esc');
            }
            function m(e) {
                (u = e.target), (d = f()), p(e, 'click', 'pressdown');
            }
            function h(e) {
                var t = u;
                u = null;
                var n = d;
                (d = null), e.button > 0 || n !== f() || (t === e.target && p(e, 'click', 'pressup'));
            }
            var E = Object.freeze({
                    count: function () {
                        return c.length;
                    },
                    addOverlay: function (e) {
                        0 === c.length &&
                            (document.addEventListener('keyup', v), document.addEventListener('pointerdown', m, !0), document.addEventListener('click', h, !0)),
                            c.push(e);
                    },
                    removeOverlay: function (e) {
                        c.splice(c.indexOf(e), 1),
                            0 === c.length &&
                                (document.removeEventListener('keyup', v),
                                document.removeEventListener('pointerdown', m, !0),
                                document.removeEventListener('click', h, !0));
                    },
                    getTopOverlayOptions: f,
                }),
                g = Date.now(),
                C = 'undefined' != typeof performance ? performance : null;
            (null == (r = null == C ? void 0 : C.timing) ? void 0 : r.navigationStart) &&
                (g = null == (a = null == performance ? void 0 : performance.timing) ? void 0 : a.navigationStart);
            var x =
                    C && 'function' == typeof C.now
                        ? function () {
                              return C.now();
                          }
                        : 'function' == typeof Date.now
                          ? function () {
                                return Date.now() - g;
                            }
                          : function () {
                                return new Date().getTime() - g;
                            },
                b = 'undefined' != typeof window,
                y = function () {
                    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                },
                w = function (e) {
                    var t = e.enabled,
                        n = e.onHeightChange,
                        r = (0, o.__read)((0, s.useState)(b ? y() : void 0), 2),
                        a = r[0],
                        i = r[1],
                        c = (0, s.useCallback)(
                            function () {
                                var e = y();
                                a !== e && (i(y()), n(e));
                            },
                            [a, n],
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
                S = function (e) {
                    var t = e.touchBreakpointWidth,
                        n = void 0 === t ? 520 : t,
                        r = e.platform,
                        a = void 0 === r ? 'auto' : r,
                        i = (0, o.__read)((0, s.useState)(), 2),
                        c = i[0],
                        u = i[1];
                    return (
                        (0, s.useEffect)(
                            function () {
                                if ('auto' !== a) return void u(a);
                                b && u(window.matchMedia('(max-width: ' + n + 'px)').matches ? 'touch' : 'desktop');
                            },
                            [n, a],
                        ),
                        (0, l.E)(
                            function () {
                                if (b && 'auto' === a) {
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
                _ = ['tr', 'am', 'ge'],
                k = ['il'];
            function N(e) {
                var t,
                    n,
                    r,
                    a,
                    c,
                    u,
                    d,
                    f,
                    p,
                    v,
                    m,
                    h,
                    g,
                    C,
                    N,
                    L = e.avatarRef,
                    O = e.avatarSize,
                    R = void 0 === O ? [42, 22] : O,
                    D = e.colorScheme,
                    I = void 0 === D ? 'light' : D,
                    P = e.dialogClassName,
                    A = e.dialogRef,
                    M = e.dir,
                    U = void 0 === M ? 'ltr' : M,
                    T = e.env,
                    H = void 0 === T ? 'prod' : T,
                    W = e.essentialRef,
                    B = e.features,
                    j = e.fetchUserData,
                    X = e.host,
                    Y = e.iframeRef,
                    z = e.lang,
                    V = e.onClose,
                    F = e.onLoad,
                    K = e.onMenuItemClick,
                    $ = e.onOpen,
                    G = e.onThemeChange,
                    J = e.onLocaleChange,
                    Z = e.platform,
                    q = e.preload,
                    Q = void 0 !== q && q,
                    ee = e.project,
                    et = e.queryParams,
                    en = e.dynamicParams,
                    er = e.retpath,
                    ea = e.rpcHandlers,
                    eo = e.theme,
                    es = e.tld,
                    ei = e.touchBreakpointWidth,
                    el = e.userData,
                    ec = e.visible,
                    eu = void 0 !== ec && ec,
                    ed = (0, s.useRef)({}),
                    ef = (0, s.useRef)(null),
                    ep = (0, s.useRef)(null),
                    ev = (0, s.useRef)(null),
                    em =
                        ((t = void 0 === es ? 'ru' : es),
                        (0, s.useMemo)(
                            function () {
                                return _.includes(t) ? 'com.' + t : k.includes(t) ? 'co.' + t : t;
                            },
                            [t],
                        ));
                (0, i.N)(ef, L || (0, s.createRef)()), (ep = null != A ? A : ep), (ev = null != Y ? Y : ev);
                var eh = (0, o.__read)((0, s.useState)(!0), 2),
                    eE = eh[0],
                    eg = eh[1],
                    eC = (0, s.useMemo)(
                        function () {
                            return b ? er || location.href : er;
                        },
                        [er],
                    ),
                    ex = (0, o.__read)((0, s.useState)(Q), 2),
                    eb = ex[0],
                    ey = ex[1],
                    ew = (0, s.useRef)({ colorScheme: I, theme: eo, retpath: eC }),
                    eS = (0, s.useMemo)(
                        function () {
                            if (X) return 'https://' + X;
                            if ('prod_yateam' === H) return 'https://user-id.yandex-team.ru';
                            if (b) {
                                var e = new URL(location.href).searchParams.get('user_id_host');
                                if (e) return 'https://' + e;
                            }
                            return 'https://yandex.' + em;
                        },
                        [X, em, H],
                    ),
                    e_ = (0, s.useMemo)(
                        function () {
                            eb ||
                                (ew.current.colorScheme === I && ew.current.theme === eo && ew.current.retpath === eC) ||
                                (ew.current = { colorScheme: I, theme: eo, retpath: eC });
                            var e = new URL('user-id', eS);
                            if (
                                (ew.current.retpath && e.searchParams.set('encodedRetpath', encodeURIComponent(ew.current.retpath)),
                                ew.current.colorScheme && e.searchParams.set('colorScheme', ew.current.colorScheme),
                                ew.current.theme && e.searchParams.set('theme', ew.current.theme),
                                z && e.searchParams.set('l10n', z),
                                Array.isArray(B))
                            ) {
                                var t = B.join(',');
                                e.searchParams.set('exp_flags', t);
                            }
                            for (var n in (ee && e.searchParams.set('project', ee), H && e.searchParams.set('env', H), e.searchParams.set('dir', U), et))
                                e.searchParams.set(n, et[n]);
                            for (var n in en) e.searchParams.set(n, en[n]);
                            return e.toString();
                        },
                        [eS, B, ee, et, en, I, eo, eC, eb, H, U, z],
                    );
                (0, s.useEffect)(
                    function () {
                        !eb && (Q || j) && ey(!0);
                    },
                    [eb, Q, j],
                );
                var ek = S({ platform: Z, touchBreakpointWidth: ei }),
                    eN = (0, s.useCallback)(
                        function () {
                            eb || ey(!0);
                        },
                        [eb],
                    ),
                    eL = (0, s.useMemo)(
                        function () {
                            return null === R ? null : 'number' == typeof R ? R : 'touch' === ek ? R[1] : R[0];
                        },
                        [ek, R],
                    ),
                    eO = (0, s.useCallback)(
                        function () {
                            var e;
                            null == (e = ef.current) || e.focus(), null == V || V();
                        },
                        [V],
                    ),
                    eR = (0, o.__read)((0, s.useState)(), 2),
                    eD = eR[0],
                    eI = eR[1],
                    eP = (0, o.__read)((0, s.useState)(el), 2),
                    eA = eP[0],
                    eM = eP[1];
                (0, s.useEffect)(
                    function () {
                        eM(el);
                    },
                    [el],
                );
                var eU = (0, s.useCallback)(
                    function (e) {
                        if (b) {
                            if ('desktop' === ek) return void eI(e);
                            eI(y());
                        }
                    },
                    [ek],
                );
                w({ enabled: 'touch' === ek, onHeightChange: eU });
                var eT = (0, s.useRef)(),
                    eH = ((r = (n = {
                        loading: eE,
                        iframeRef: ev,
                        origin: eS,
                        rpcHandler: (0, s.useCallback)(
                            function (e, t) {
                                var n;
                                switch (e.methodCall) {
                                    case 'onInit':
                                        j && eM(e.params[0]), null == F || F();
                                        break;
                                    case 'onDataLoad':
                                        var r = ed.current;
                                        if ('number' == typeof r.start && 'number' != typeof r.end && eT.current) {
                                            r.end = x();
                                            var a = r.end - r.start;
                                            eT.current({ methodCall: 'onSendTimeToInteractive', params: [{ delta: a }] });
                                        }
                                    case 'updateUserHeight':
                                        eU(e.params[0].height), eg(!1);
                                        break;
                                    case 'ITEM_CLICK':
                                        var s = e.params[0];
                                        null == K || K(s.item, s, { onClose: eO });
                                        break;
                                    case 'closeUserID':
                                        null == eO || eO();
                                        break;
                                    case 'updateTheme':
                                        var i = e.params[0].theme;
                                        null == G || G(i);
                                        break;
                                    case 'updateLocale':
                                        var l = e.params[0].locale;
                                        null == J || J(l);
                                        break;
                                    default:
                                        if (!(null == ea ? void 0 : ea[e.methodCall])) return;
                                        Promise.resolve(
                                            null == (n = null == ea ? void 0 : ea[e.methodCall]) ? void 0 : n.call.apply(n, (0, o.__spread)([ea], e.params)),
                                        ).then(t);
                                }
                            },
                            [ea, K, eO, G, J, eU, eM, j, F],
                        ),
                    }).loading),
                    (a = n.iframeRef),
                    (c = n.origin),
                    (u = n.rpcHandler),
                    (d = (0, s.useRef)([])),
                    (f = (0, s.useCallback)(
                        function (e) {
                            var t,
                                n,
                                o = JSON.stringify(e);
                            r ? d.current.push(o) : null == (n = null == (t = a.current) ? void 0 : t.contentWindow) || n.postMessage(o, '*');
                        },
                        [r, a],
                    )),
                    (p = (0, s.useCallback)(
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
                        [c, u, f],
                    )),
                    (0, s.useEffect)(
                        function () {
                            return (
                                window.addEventListener('message', p),
                                function () {
                                    window.removeEventListener('message', p);
                                }
                            );
                        },
                        [p],
                    ),
                    (0, s.useEffect)(
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
                (eT.current = eH),
                    (0, s.useEffect)(
                        function () {
                            eH({ methodCall: 'updateRetpath', params: [{ retpath: eC }] });
                        },
                        [eC, eH],
                    ),
                    (0, s.useEffect)(
                        function () {
                            eH({ methodCall: 'onParamsChange', params: [(0, o.__assign)({}, en)] });
                        },
                        [en, eH],
                    ),
                    (0, s.useEffect)(
                        function () {
                            eH({ methodCall: 'updateTheme', params: [{ colorScheme: I, theme: eo }] });
                        },
                        [I, eH, eo],
                    );
                var eW = (0, s.useCallback)(
                        function (e) {
                            eH({ methodCall: 'focusFirst', params: [{ fromKeyboard: e }] });
                        },
                        [eH],
                    ),
                    eB = (0, s.useCallback)(
                        function () {
                            eu ? (eW(!0), eO()) : (eb || ey(!0), eW(!1), null == $ || $());
                        },
                        [eW, $, eb, eu, eO],
                    );
                (m = (v = {
                    visible: eu,
                    onClose: eO,
                    essentialRefs: (0, s.useMemo)(
                        function () {
                            var e = [ep, ef];
                            return W && e.push(W), e;
                        },
                        [ep, ef, W],
                    ),
                }).visible),
                    (h = v.onClose),
                    (g = v.essentialRefs),
                    (C = v.unsafe_strategy),
                    ((N = (0, s.useRef)({ onClose: h, refs: g, closeStrategy: void 0 === C ? 'pressdown' : C })).current.onClose = h),
                    (N.current.refs = g),
                    (0, s.useEffect)(
                        function () {
                            if (m) {
                                var e = N.current;
                                return (
                                    E.addOverlay(e),
                                    function () {
                                        E.removeOverlay(e);
                                    }
                                );
                            }
                        },
                        [m],
                    ),
                    (0, l.E)(
                        function () {
                            var e;
                            eu && (null != (e = ed.current).start || (e.start = x()));
                        },
                        [eu],
                    );
                var ej = { colorScheme: I, height: eD, loading: eE, preload: eb, ref: ev, src: e_, width: 'desktop' === ek ? 320 : '100%' },
                    eX = { className: P, colorScheme: I, platform: ek, ref: ep, visible: eu, onClose: eO, loading: eE };
                return {
                    avatarProps: { avatarSize: eL, env: H, onClick: eB, onPointerEnter: eN, platform: ek, ref: ef, retpath: eC, userData: eA, visible: eu, tld: em },
                    contentProps: ej,
                    dialogProps: eX,
                };
            }
        },
        86180: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { useUserID: () => r.w });
            var r = n(85438);
        },
        89562: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => r });
            let r = n(55178).createContext(null);
        },
        90110: (e, t, n) => {
            'use strict';
            t.H = void 0;
            var r = n(30782),
                a = n(55178),
                o = n(70679),
                s = r.__importStar(n(78657));
            t.H = function (e) {
                var t = e.enabled,
                    n = e.containerRef,
                    r = (0, a.useRef)(null),
                    i = (0, a.useRef)(!1);
                (0, o.useIsomorphicLayoutEffect)(function () {
                    var e = n ? n.current : null;
                    r.current !== e && (t && i.current && (s.unlock(r.current), s.lock(e)), (r.current = e));
                }),
                    (0, o.useIsomorphicLayoutEffect)(
                        function () {
                            if (t)
                                return (
                                    (i.current = !0),
                                    s.lock(r.current),
                                    function () {
                                        (i.current = !1), s.unlock(r.current);
                                    }
                                );
                        },
                        [t],
                    );
            };
        },
        98561: () => {},
        99448: (e, t, n) => {
            'use strict';
            e.exports = n(183);
        },
    },
]);
