'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1443],
    {
        2884: (e, t, n) => {
            n.d(t, { A: () => d });
            var r = n(81257),
                s = n(67608),
                a = n(87895),
                i = n(74631),
                o = n(83218);
            function l(e, t) {
                var n = Object.create(null);
                return (
                    e &&
                        i.Children.map(e, function (e) {
                            return e;
                        }).forEach(function (e) {
                            n[e.key] = t && (0, i.isValidElement)(e) ? t(e) : e;
                        }),
                    n
                );
            }
            function u(e, t, n) {
                return null != n[t] ? n[t] : e.props[t];
            }
            var c =
                    Object.values ||
                    function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    },
                p = (function (e) {
                    function t(t, n) {
                        var r = e.call(this, t, n) || this,
                            s = r.handleExited.bind(
                                (function (e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(r),
                            );
                        return ((r.state = { contextValue: { isMounting: !0 }, handleExited: s, firstRender: !0 }), r);
                    }
                    (0, a.A)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
                        }),
                        (n.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var n,
                                r,
                                s = t.children,
                                a = t.handleExited;
                            return {
                                children: t.firstRender
                                    ? l(e.children, function (t) {
                                          return (0, i.cloneElement)(t, {
                                              onExited: a.bind(null, t),
                                              in: !0,
                                              appear: u(t, 'appear', e),
                                              enter: u(t, 'enter', e),
                                              exit: u(t, 'exit', e),
                                          });
                                      })
                                    : (Object.keys(
                                          (r = (function (e, t) {
                                              function n(n) {
                                                  return n in t ? t[n] : e[n];
                                              }
                                              ((e = e || {}), (t = t || {}));
                                              var r,
                                                  s = Object.create(null),
                                                  a = [];
                                              for (var i in e) i in t ? a.length && ((s[i] = a), (a = [])) : a.push(i);
                                              var o = {};
                                              for (var l in t) {
                                                  if (s[l])
                                                      for (r = 0; r < s[l].length; r++) {
                                                          var u = s[l][r];
                                                          o[s[l][r]] = n(u);
                                                      }
                                                  o[l] = n(l);
                                              }
                                              for (r = 0; r < a.length; r++) o[a[r]] = n(a[r]);
                                              return o;
                                          })(s, (n = l(e.children)))),
                                      ).forEach(function (t) {
                                          var o = r[t];
                                          if ((0, i.isValidElement)(o)) {
                                              var l = t in s,
                                                  c = t in n,
                                                  p = s[t],
                                                  d = (0, i.isValidElement)(p) && !p.props.in;
                                              c && (!l || d)
                                                  ? (r[t] = (0, i.cloneElement)(o, { onExited: a.bind(null, o), in: !0, exit: u(o, 'exit', e), enter: u(o, 'enter', e) }))
                                                  : c || !l || d
                                                    ? c &&
                                                      l &&
                                                      (0, i.isValidElement)(p) &&
                                                      (r[t] = (0, i.cloneElement)(o, {
                                                          onExited: a.bind(null, o),
                                                          in: p.props.in,
                                                          exit: u(o, 'exit', e),
                                                          enter: u(o, 'enter', e),
                                                      }))
                                                    : (r[t] = (0, i.cloneElement)(o, { in: !1 }));
                                          }
                                      }),
                                      r),
                                firstRender: !1,
                            };
                        }),
                        (n.handleExited = function (e, t) {
                            var n = l(this.props.children);
                            e.key in n ||
                                (e.props.onExited && e.props.onExited(t),
                                this.mounted &&
                                    this.setState(function (t) {
                                        var n = (0, s.A)({}, t.children);
                                        return (delete n[e.key], { children: n });
                                    }));
                        }),
                        (n.render = function () {
                            var e = this.props,
                                t = e.component,
                                n = e.childFactory,
                                s = (0, r.A)(e, ['component', 'childFactory']),
                                a = this.state.contextValue,
                                l = c(this.state.children).map(n);
                            return (delete s.appear, delete s.enter, delete s.exit, null === t)
                                ? i.createElement(o.A.Provider, { value: a }, l)
                                : i.createElement(o.A.Provider, { value: a }, i.createElement(t, s, l));
                        }),
                        t
                    );
                })(i.Component);
            ((p.propTypes = {}),
                (p.defaultProps = {
                    component: 'div',
                    childFactory: function (e) {
                        return e;
                    },
                }));
            let d = p;
        },
        13624: (e, t, n) => {
            n.d(t, { default: () => s.a });
            var r = n(68545),
                s = n.n(r);
        },
        24227: (e, t, n) => {
            n.d(t, { _K: () => E, ns: () => d, ze: () => f, Ay: () => x });
            var r = n(81257),
                s = n(87895),
                a = n(74631),
                i = n(71910);
            let o = { disabled: !1 };
            var l = n(83218),
                u = n(85688),
                c = 'unmounted',
                p = 'exited',
                d = 'entering',
                E = 'entered',
                f = 'exiting',
                h = (function (e) {
                    function t(t, n) {
                        var r,
                            s = e.call(this, t, n) || this,
                            a = n && !n.isMounting ? t.enter : t.appear;
                        return (
                            (s.appearStatus = null),
                            t.in ? (a ? ((r = p), (s.appearStatus = d)) : (r = E)) : (r = t.unmountOnExit || t.mountOnEnter ? c : p),
                            (s.state = { status: r }),
                            (s.nextCallback = null),
                            s
                        );
                    }
                    ((0, s.A)(t, e),
                        (t.getDerivedStateFromProps = function (e, t) {
                            return e.in && t.status === c ? { status: p } : null;
                        }));
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.updateStatus(!0, this.appearStatus);
                        }),
                        (n.componentDidUpdate = function (e) {
                            var t = null;
                            if (e !== this.props) {
                                var n = this.state.status;
                                this.props.in ? n !== d && n !== E && (t = d) : (n === d || n === E) && (t = f);
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
                                if ((this.cancelNextCallback(), t === d)) {
                                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                        var n = this.props.nodeRef ? this.props.nodeRef.current : i.findDOMNode(this);
                                        n && (0, u.F)(n);
                                    }
                                    this.performEnter(e);
                                } else this.performExit();
                            else this.props.unmountOnExit && this.state.status === p && this.setState({ status: c });
                        }),
                        (n.performEnter = function (e) {
                            var t = this,
                                n = this.props.enter,
                                r = this.context ? this.context.isMounting : e,
                                s = this.props.nodeRef ? [r] : [i.findDOMNode(this), r],
                                a = s[0],
                                l = s[1],
                                u = this.getTimeouts(),
                                c = r ? u.appear : u.enter;
                            if ((!e && !n) || o.disabled)
                                return void this.safeSetState({ status: E }, function () {
                                    t.props.onEntered(a);
                                });
                            (this.props.onEnter(a, l),
                                this.safeSetState({ status: d }, function () {
                                    (t.props.onEntering(a, l),
                                        t.onTransitionEnd(c, function () {
                                            t.safeSetState({ status: E }, function () {
                                                t.props.onEntered(a, l);
                                            });
                                        }));
                                }));
                        }),
                        (n.performExit = function () {
                            var e = this,
                                t = this.props.exit,
                                n = this.getTimeouts(),
                                r = this.props.nodeRef ? void 0 : i.findDOMNode(this);
                            if (!t || o.disabled)
                                return void this.safeSetState({ status: p }, function () {
                                    e.props.onExited(r);
                                });
                            (this.props.onExit(r),
                                this.safeSetState({ status: f }, function () {
                                    (e.props.onExiting(r),
                                        e.onTransitionEnd(n.exit, function () {
                                            e.safeSetState({ status: p }, function () {
                                                e.props.onExited(r);
                                            });
                                        }));
                                }));
                        }),
                        (n.cancelNextCallback = function () {
                            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
                        }),
                        (n.safeSetState = function (e, t) {
                            ((t = this.setNextCallback(t)), this.setState(e, t));
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
                            var n = this.props.nodeRef ? this.props.nodeRef.current : i.findDOMNode(this),
                                r = null == e && !this.props.addEndListener;
                            if (!n || r) return void setTimeout(this.nextCallback, 0);
                            if (this.props.addEndListener) {
                                var s = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    a = s[0],
                                    o = s[1];
                                this.props.addEndListener(a, o);
                            }
                            null != e && setTimeout(this.nextCallback, e);
                        }),
                        (n.render = function () {
                            var e = this.state.status;
                            if (e === c) return null;
                            var t = this.props,
                                n = t.children,
                                s =
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
                            return a.createElement(l.A.Provider, { value: null }, 'function' == typeof n ? n(e, s) : a.cloneElement(a.Children.only(n), s));
                        }),
                        t
                    );
                })(a.Component);
            function m() {}
            ((h.contextType = l.A),
                (h.propTypes = {}),
                (h.defaultProps = {
                    in: !1,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    onEnter: m,
                    onEntering: m,
                    onEntered: m,
                    onExit: m,
                    onExiting: m,
                    onExited: m,
                }),
                (h.UNMOUNTED = c),
                (h.EXITED = p),
                (h.ENTERING = d),
                (h.ENTERED = E),
                (h.EXITING = f));
            let x = h;
        },
        45705: (e, t, n) => {
            n.d(t, { A: () => d });
            var r = n(67608),
                s = n(81257),
                a = n(87895);
            function i(e, t) {
                return e
                    .replace(RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
                    .replace(/\s+/g, ' ')
                    .replace(/^\s*|\s*$/g, '');
            }
            var o = n(74631),
                l = n(24227),
                u = n(85688),
                c = function (e, t) {
                    return (
                        e &&
                        t &&
                        t.split(' ').forEach(function (t) {
                            e.classList
                                ? e.classList.remove(t)
                                : 'string' == typeof e.className
                                  ? (e.className = i(e.className, t))
                                  : e.setAttribute('class', i((e.className && e.className.baseVal) || '', t));
                        })
                    );
                },
                p = (function (e) {
                    function t() {
                        for (var t, n = arguments.length, r = Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                        return (
                            ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                            (t.onEnter = function (e, n) {
                                var r = t.resolveArguments(e, n),
                                    s = r[0],
                                    a = r[1];
                                (t.removeClasses(s, 'exit'), t.addClass(s, a ? 'appear' : 'enter', 'base'), t.props.onEnter && t.props.onEnter(e, n));
                            }),
                            (t.onEntering = function (e, n) {
                                var r = t.resolveArguments(e, n),
                                    s = r[0],
                                    a = r[1];
                                (t.addClass(s, a ? 'appear' : 'enter', 'active'), t.props.onEntering && t.props.onEntering(e, n));
                            }),
                            (t.onEntered = function (e, n) {
                                var r = t.resolveArguments(e, n),
                                    s = r[0],
                                    a = r[1] ? 'appear' : 'enter';
                                (t.removeClasses(s, a), t.addClass(s, a, 'done'), t.props.onEntered && t.props.onEntered(e, n));
                            }),
                            (t.onExit = function (e) {
                                var n = t.resolveArguments(e)[0];
                                (t.removeClasses(n, 'appear'), t.removeClasses(n, 'enter'), t.addClass(n, 'exit', 'base'), t.props.onExit && t.props.onExit(e));
                            }),
                            (t.onExiting = function (e) {
                                var n = t.resolveArguments(e)[0];
                                (t.addClass(n, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e));
                            }),
                            (t.onExited = function (e) {
                                var n = t.resolveArguments(e)[0];
                                (t.removeClasses(n, 'exit'), t.addClass(n, 'exit', 'done'), t.props.onExited && t.props.onExited(e));
                            }),
                            (t.resolveArguments = function (e, n) {
                                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
                            }),
                            (t.getClassNames = function (e) {
                                var n = t.props.classNames,
                                    r = 'string' == typeof n,
                                    s = r && n ? n + '-' : '',
                                    a = r ? '' + s + e : n[e],
                                    i = r ? a + '-active' : n[e + 'Active'],
                                    o = r ? a + '-done' : n[e + 'Done'];
                                return { baseClassName: a, activeClassName: i, doneClassName: o };
                            }),
                            t
                        );
                    }
                    (0, a.A)(t, e);
                    var n = t.prototype;
                    return (
                        (n.addClass = function (e, t, n) {
                            var r,
                                s = this.getClassNames(t)[n + 'ClassName'],
                                a = this.getClassNames('enter').doneClassName;
                            ('appear' === t && 'done' === n && a && (s += ' ' + a),
                                'active' === n && e && (0, u.F)(e),
                                s &&
                                    ((this.appliedClasses[t][n] = s),
                                    (r = s),
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
                                        })));
                        }),
                        (n.removeClasses = function (e, t) {
                            var n = this.appliedClasses[t],
                                r = n.base,
                                s = n.active,
                                a = n.done;
                            ((this.appliedClasses[t] = {}), r && c(e, r), s && c(e, s), a && c(e, a));
                        }),
                        (n.render = function () {
                            var e = this.props,
                                t = (e.classNames, (0, s.A)(e, ['classNames']));
                            return o.createElement(
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
                })(o.Component);
            ((p.defaultProps = { classNames: '' }), (p.propTypes = {}));
            let d = p;
        },
        57249: (e, t, n) => {
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        67608: (e, t, n) => {
            n.d(t, { A: () => r });
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
        },
        68545: (e, t, n) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }));
            let r = n(20567)._(n(89729));
            function s(e, t) {
                var n;
                let s = {};
                'function' == typeof e && (s.loader = e);
                let a = { ...s, ...t };
                return (0, r.default)({ ...a, modules: null == (n = a.loadableGenerated) ? void 0 : n.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        76481: (e, t, n) => {
            n.d(t, { m: () => s });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: n = 'E_INTERNAL', data: s = {}, ...a } = t,
                        i = e || 'Internal error';
                    (super(i, a), (this.message = i), (this.code = n), (this.data = s), (this.stack = Error(i).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class s extends r {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...n } = {}) {
                    (super(e, { code: t, ...n }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        77920: (e, t, n) => {
            var r;
            (n.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        81257: (e, t, n) => {
            n.d(t, { A: () => r });
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
        },
        83218: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = n(74631).createContext(null);
        },
        85688: (e, t, n) => {
            n.d(t, { F: () => r });
            var r = function (e) {
                return e.scrollTop;
            };
        },
        87895: (e, t, n) => {
            function r(e, t) {
                return (r = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                          return ((e.__proto__ = t), e);
                      })(e, t);
            }
            function s(e, t) {
                ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t));
            }
            n.d(t, { A: () => s });
        },
        89729: (e, t, n) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }));
            let r = n(25839),
                s = n(74631),
                a = n(95102);
            function i(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(49971);
            let o = { loader: () => Promise.resolve(i(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...o, ...e },
                        n = (0, s.lazy)(() => t.loader().then(i)),
                        l = t.loading;
                    function u(e) {
                        let i = l ? (0, r.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            o = !t.ssr || !!t.loading,
                            u = o ? s.Suspense : s.Fragment,
                            c = t.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(n, { ...e })] })
                                : (0, r.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, r.jsx)(n, { ...e }) });
                        return (0, r.jsx)(u, { ...(o ? { fallback: i } : {}), children: c });
                    }
                    return ((u.displayName = 'LoadableComponent'), u);
                };
        },
        91626: (e, t, n) => {
            (n.d(t, { G: () => s }), n(77920));
            var r = n(76481);
            class s extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        91984: (e, t, n) => {
            t.Bl = function (e, t) {
                let n = (0, r.makeMetaParams)(1),
                    s = { ...t, _meta: n };
                e.trackEvent('AppSettings.Changed', s);
            };
            let r = n(96195);
        },
        93690: (e, t, n) => {
            n.d(t, { GX: () => a.G, X1: () => r.X, m5: () => s.m });
            var r = n(77920),
                s = n(76481),
                a = n(91626);
            n(95919);
        },
        95919: (e, t, n) => {
            var r;
            (n.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        97103: (e, t, n) => {
            ((t.U0 = function (e, t) {
                let { skeletonId: n = '', mainObjectType: a = s.DomainObjectType.NonApplicable, mainObjectId: i = '' } = t,
                    o = (0, r.makeMetaParams)(2),
                    l = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: i, _meta: o };
                e.trackEvent('Sidebar.Opened', l);
            }),
                (t.dL = function (e, t) {
                    let { skeletonId: n = '', mainObjectType: a = s.DomainObjectType.NonApplicable, mainObjectId: i = '' } = t,
                        o = (0, r.makeMetaParams)(1),
                        l = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: i, _meta: o };
                    e.trackEvent('Sidebar.ActionPerformed', l);
                }),
                (t.qi = function (e, t) {
                    let { skeletonId: n = '', mainObjectType: a = s.DomainObjectType.NonApplicable, mainObjectId: i = '' } = t,
                        o = (0, r.makeMetaParams)(1),
                        l = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: i, _meta: o };
                    e.trackEvent('Sidebar.Navigated', l);
                }),
                (t.cV = function (e, t) {
                    let { skeletonId: n = '', mainObjectType: a = s.DomainObjectType.NonApplicable, mainObjectId: i = '' } = t,
                        o = (0, r.makeMetaParams)(1),
                        l = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: i, _meta: o };
                    e.trackEvent('Sidebar.Started', l);
                }));
            let r = n(96195),
                s = n(44031);
        },
    },
]);
