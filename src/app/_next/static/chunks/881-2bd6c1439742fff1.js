'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [881],
    {
        1962: (t, e, r) => {
            r.d(e, { A: () => n });
            function n(t) {
                return null != t && 'object' == typeof t;
            }
        },
        7823: (t, e, r) => {
            r.d(e, { v: () => i });
            var n = class extends Error {
                    constructor(t, e, r) {
                        super(`Possible EventEmitter memory leak detected. ${r} ${e.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),
                            (this.emitter = t),
                            (this.type = e),
                            (this.count = r),
                            (this.name = 'MaxListenersExceededWarning');
                    }
                },
                o = class {
                    static listenerCount(t, e) {
                        return t.listenerCount(e);
                    }
                    constructor() {
                        (this.events = new Map()), (this.maxListeners = o.defaultMaxListeners), (this.hasWarnedAboutPotentialMemoryLeak = !1);
                    }
                    _emitInternalEvent(t, e, r) {
                        this.emit(t, e, r);
                    }
                    _getListeners(t) {
                        return Array.prototype.concat.apply([], this.events.get(t)) || [];
                    }
                    _removeListener(t, e) {
                        let r = t.indexOf(e);
                        return r > -1 && t.splice(r, 1), [];
                    }
                    _wrapOnceListener(t, e) {
                        let r = (...n) => (this.removeListener(t, r), e.apply(this, n));
                        return Object.defineProperty(r, 'name', { value: e.name }), r;
                    }
                    setMaxListeners(t) {
                        return (this.maxListeners = t), this;
                    }
                    getMaxListeners() {
                        return this.maxListeners;
                    }
                    eventNames() {
                        return Array.from(this.events.keys());
                    }
                    emit(t, ...e) {
                        let r = this._getListeners(t);
                        return (
                            r.forEach((t) => {
                                t.apply(this, e);
                            }),
                            r.length > 0
                        );
                    }
                    addListener(t, e) {
                        this._emitInternalEvent('newListener', t, e);
                        let r = this._getListeners(t).concat(e);
                        return (
                            this.events.set(t, r),
                            this.maxListeners > 0 &&
                                this.listenerCount(t) > this.maxListeners &&
                                !this.hasWarnedAboutPotentialMemoryLeak &&
                                ((this.hasWarnedAboutPotentialMemoryLeak = !0), console.warn(new n(this, t, this.listenerCount(t)))),
                            this
                        );
                    }
                    on(t, e) {
                        return this.addListener(t, e);
                    }
                    once(t, e) {
                        return this.addListener(t, this._wrapOnceListener(t, e));
                    }
                    prependListener(t, e) {
                        let r = this._getListeners(t);
                        if (r.length > 0) {
                            let n = [e].concat(r);
                            this.events.set(t, n);
                        } else this.events.set(t, r.concat(e));
                        return this;
                    }
                    prependOnceListener(t, e) {
                        return this.prependListener(t, this._wrapOnceListener(t, e));
                    }
                    removeListener(t, e) {
                        let r = this._getListeners(t);
                        return r.length > 0 && (this._removeListener(r, e), this.events.set(t, r), this._emitInternalEvent('removeListener', t, e)), this;
                    }
                    off(t, e) {
                        return this.removeListener(t, e);
                    }
                    removeAllListeners(t) {
                        return t ? this.events.delete(t) : this.events.clear(), this;
                    }
                    listeners(t) {
                        return Array.from(this._getListeners(t));
                    }
                    listenerCount(t) {
                        return this._getListeners(t).length;
                    }
                    rawListeners(t) {
                        return this.listeners(t);
                    }
                },
                i = o;
            i.defaultMaxListeners = 10;
        },
        10315: (t, e, r) => {
            r.d(e, { A: () => n });
            var n = r(17799).A.Symbol;
        },
        13973: (t, e, r) => {
            function n(t, e) {
                return t === e || (t != t && e != e);
            }
            function o(t, e) {
                for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
                return -1;
            }
            r.d(e, { A: () => tq });
            var i = Array.prototype.splice;
            function a(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            (a.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
            }),
                (a.prototype.delete = function (t) {
                    var e = this.__data__,
                        r = o(e, t);
                    return !(r < 0) && (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, !0);
                }),
                (a.prototype.get = function (t) {
                    var e = this.__data__,
                        r = o(e, t);
                    return r < 0 ? void 0 : e[r][1];
                }),
                (a.prototype.has = function (t) {
                    return o(this.__data__, t) > -1;
                }),
                (a.prototype.set = function (t, e) {
                    var r = this.__data__,
                        n = o(r, t);
                    return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
                });
            var s = r(25799),
                c = r(33317);
            function u(t) {
                if (!(0, c.A)(t)) return !1;
                var e = (0, s.A)(t);
                return '[object Function]' == e || '[object GeneratorFunction]' == e || '[object AsyncFunction]' == e || '[object Proxy]' == e;
            }
            var l = r(17799),
                f = l.A['__core-js_shared__'],
                p = (function () {
                    var t = /[^.]+$/.exec((f && f.keys && f.keys.IE_PROTO) || '');
                    return t ? 'Symbol(src)_1.' + t : '';
                })(),
                h = Function.prototype.toString;
            function b(t) {
                if (null != t) {
                    try {
                        return h.call(t);
                    } catch (t) {}
                    try {
                        return t + '';
                    } catch (t) {}
                }
                return '';
            }
            var y = /^\[object .+?Constructor\]$/,
                j = Object.prototype,
                v = Function.prototype.toString,
                d = j.hasOwnProperty,
                _ = RegExp(
                    '^' +
                        v
                            .call(d)
                            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                        '$',
                );
            function A(t, e) {
                var r = null == t ? void 0 : t[e];
                return (0, c.A)(r) && (!p || !(p in r)) && (u(r) ? _ : y).test(b(r)) ? r : void 0;
            }
            var g = A(l.A, 'Map'),
                m = A(Object, 'create'),
                O = Object.prototype.hasOwnProperty,
                w = Object.prototype.hasOwnProperty;
            function x(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function L(t, e) {
                var r,
                    n = t.__data__;
                return ('string' == (r = typeof e) || 'number' == r || 'symbol' == r || 'boolean' == r ? '__proto__' !== e : null === e)
                    ? n['string' == typeof e ? 'string' : 'hash']
                    : n.map;
            }
            function S(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function M(t) {
                var e = (this.__data__ = new a(t));
                this.size = e.size;
            }
            (x.prototype.clear = function () {
                (this.__data__ = m ? m(null) : {}), (this.size = 0);
            }),
                (x.prototype.delete = function (t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return (this.size -= !!e), e;
                }),
                (x.prototype.get = function (t) {
                    var e = this.__data__;
                    if (m) {
                        var r = e[t];
                        return '__lodash_hash_undefined__' === r ? void 0 : r;
                    }
                    return O.call(e, t) ? e[t] : void 0;
                }),
                (x.prototype.has = function (t) {
                    var e = this.__data__;
                    return m ? void 0 !== e[t] : w.call(e, t);
                }),
                (x.prototype.set = function (t, e) {
                    var r = this.__data__;
                    return (this.size += +!this.has(t)), (r[t] = m && void 0 === e ? '__lodash_hash_undefined__' : e), this;
                }),
                (S.prototype.clear = function () {
                    (this.size = 0), (this.__data__ = { hash: new x(), map: new (g || a)(), string: new x() });
                }),
                (S.prototype.delete = function (t) {
                    var e = L(this, t).delete(t);
                    return (this.size -= !!e), e;
                }),
                (S.prototype.get = function (t) {
                    return L(this, t).get(t);
                }),
                (S.prototype.has = function (t) {
                    return L(this, t).has(t);
                }),
                (S.prototype.set = function (t, e) {
                    var r = L(this, t),
                        n = r.size;
                    return r.set(t, e), (this.size += +(r.size != n)), this;
                }),
                (M.prototype.clear = function () {
                    (this.__data__ = new a()), (this.size = 0);
                }),
                (M.prototype.delete = function (t) {
                    var e = this.__data__,
                        r = e.delete(t);
                    return (this.size = e.size), r;
                }),
                (M.prototype.get = function (t) {
                    return this.__data__.get(t);
                }),
                (M.prototype.has = function (t) {
                    return this.__data__.has(t);
                }),
                (M.prototype.set = function (t, e) {
                    var r = this.__data__;
                    if (r instanceof a) {
                        var n = r.__data__;
                        if (!g || n.length < 199) return n.push([t, e]), (this.size = ++r.size), this;
                        r = this.__data__ = new S(n);
                    }
                    return r.set(t, e), (this.size = r.size), this;
                });
            var P = (function () {
                    try {
                        var t = A(Object, 'defineProperty');
                        return t({}, '', {}), t;
                    } catch (t) {}
                })(),
                E = Object.prototype.hasOwnProperty,
                z = 'object' == typeof exports && exports && !exports.nodeType && exports,
                I = z && 'object' == typeof module && module && !module.nodeType && module,
                k = I && I.exports === z ? l.A.Buffer : void 0;
            k && k.allocUnsafe;
            var U = Array.isArray,
                F = Object.prototype.propertyIsEnumerable,
                $ = Object.getOwnPropertySymbols,
                C = $
                    ? function (t) {
                          return null == t
                              ? []
                              : (function (t, e) {
                                    for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n; ) {
                                        var a = t[r];
                                        e(a, r, t) && (i[o++] = a);
                                    }
                                    return i;
                                })($((t = Object(t))), function (e) {
                                    return F.call(t, e);
                                });
                      }
                    : function () {
                          return [];
                      },
                B = r(1962);
            function T(t) {
                return (0, B.A)(t) && '[object Arguments]' == (0, s.A)(t);
            }
            var D = Object.prototype,
                W = D.hasOwnProperty,
                N = D.propertyIsEnumerable,
                R = T(
                    (function () {
                        return arguments;
                    })(),
                )
                    ? T
                    : function (t) {
                          return (0, B.A)(t) && W.call(t, 'callee') && !N.call(t, 'callee');
                      },
                V = 'object' == typeof exports && exports && !exports.nodeType && exports,
                q = V && 'object' == typeof module && module && !module.nodeType && module,
                G = q && q.exports === V ? l.A.Buffer : void 0,
                H =
                    (G ? G.isBuffer : void 0) ||
                    function () {
                        return !1;
                    },
                J = /^(?:0|[1-9]\d*)$/;
            function K(t) {
                return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff;
            }
            var Q = {};
            function X(t) {
                return function (e) {
                    return t(e);
                };
            }
            (Q['[object Float32Array]'] =
                Q['[object Float64Array]'] =
                Q['[object Int8Array]'] =
                Q['[object Int16Array]'] =
                Q['[object Int32Array]'] =
                Q['[object Uint8Array]'] =
                Q['[object Uint8ClampedArray]'] =
                Q['[object Uint16Array]'] =
                Q['[object Uint32Array]'] =
                    !0),
                (Q['[object Arguments]'] =
                    Q['[object Array]'] =
                    Q['[object ArrayBuffer]'] =
                    Q['[object Boolean]'] =
                    Q['[object DataView]'] =
                    Q['[object Date]'] =
                    Q['[object Error]'] =
                    Q['[object Function]'] =
                    Q['[object Map]'] =
                    Q['[object Number]'] =
                    Q['[object Object]'] =
                    Q['[object RegExp]'] =
                    Q['[object Set]'] =
                    Q['[object String]'] =
                    Q['[object WeakMap]'] =
                        !1);
            var Y = r(51214),
                Z = 'object' == typeof exports && exports && !exports.nodeType && exports,
                tt = Z && 'object' == typeof module && module && !module.nodeType && module,
                te = tt && tt.exports === Z && Y.A.process,
                tr = (function () {
                    try {
                        var t = tt && tt.require && tt.require('util').types;
                        if (t) return t;
                        return te && te.binding && te.binding('util');
                    } catch (t) {}
                })(),
                tn = tr && tr.isTypedArray,
                to = tn
                    ? X(tn)
                    : function (t) {
                          return (0, B.A)(t) && K(t.length) && !!Q[(0, s.A)(t)];
                      },
                ti = Object.prototype.hasOwnProperty,
                ta = Object.prototype;
            function ts(t) {
                var e = t && t.constructor;
                return t === (('function' == typeof e && e.prototype) || ta);
            }
            function tc(t, e) {
                return function (r) {
                    return t(e(r));
                };
            }
            var tu = tc(Object.keys, Object),
                tl = Object.prototype.hasOwnProperty;
            function tf(t) {
                return null != t && K(t.length) && !u(t)
                    ? (function (t, e) {
                          var r = U(t),
                              n = !r && R(t),
                              o = !r && !n && H(t),
                              i = !r && !n && !o && to(t),
                              a = r || n || o || i,
                              s = a
                                  ? (function (t, e) {
                                        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
                                        return n;
                                    })(t.length, String)
                                  : [],
                              c = s.length;
                          for (var u in t)
                              ti.call(t, u) &&
                                  !(
                                      a &&
                                      ('length' == u ||
                                          (o && ('offset' == u || 'parent' == u)) ||
                                          (i && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
                                          (function (t, e) {
                                              var r = typeof t;
                                              return (
                                                  !!(e = null == e ? 0x1fffffffffffff : e) &&
                                                  ('number' == r || ('symbol' != r && J.test(t))) &&
                                                  t > -1 &&
                                                  t % 1 == 0 &&
                                                  t < e
                                              );
                                          })(u, c))
                                  ) &&
                                  s.push(u);
                          return s;
                      })(t)
                    : (function (t) {
                          if (!ts(t)) return tu(t);
                          var e = [];
                          for (var r in Object(t)) tl.call(t, r) && 'constructor' != r && e.push(r);
                          return e;
                      })(t);
            }
            var tp = A(l.A, 'DataView'),
                th = A(l.A, 'Promise'),
                tb = A(l.A, 'Set'),
                ty = A(l.A, 'WeakMap'),
                tj = '[object Map]',
                tv = '[object Promise]',
                td = '[object Set]',
                t_ = '[object WeakMap]',
                tA = '[object DataView]',
                tg = b(tp),
                tm = b(g),
                tO = b(th),
                tw = b(tb),
                tx = b(ty),
                tL = s.A;
            ((tp && tL(new tp(new ArrayBuffer(1))) != tA) ||
                (g && tL(new g()) != tj) ||
                (th && tL(th.resolve()) != tv) ||
                (tb && tL(new tb()) != td) ||
                (ty && tL(new ty()) != t_)) &&
                (tL = function (t) {
                    var e = (0, s.A)(t),
                        r = '[object Object]' == e ? t.constructor : void 0,
                        n = r ? b(r) : '';
                    if (n)
                        switch (n) {
                            case tg:
                                return tA;
                            case tm:
                                return tj;
                            case tO:
                                return tv;
                            case tw:
                                return td;
                            case tx:
                                return t_;
                        }
                    return e;
                });
            var tS = Object.prototype.hasOwnProperty,
                tM = l.A.Uint8Array;
            function tP(t) {
                var e = new t.constructor(t.byteLength);
                return new tM(e).set(new tM(t)), e;
            }
            var tE = /\w*$/,
                tz = r(10315),
                tI = tz.A ? tz.A.prototype : void 0,
                tk = tI ? tI.valueOf : void 0,
                tU = Object.create,
                tF = (function () {
                    function t() {}
                    return function (e) {
                        if (!(0, c.A)(e)) return {};
                        if (tU) return tU(e);
                        t.prototype = e;
                        var r = new t();
                        return (t.prototype = void 0), r;
                    };
                })(),
                t$ = tc(Object.getPrototypeOf, Object),
                tC = tr && tr.isMap,
                tB = tC
                    ? X(tC)
                    : function (t) {
                          return (0, B.A)(t) && '[object Map]' == tL(t);
                      },
                tT = tr && tr.isSet,
                tD = tT
                    ? X(tT)
                    : function (t) {
                          return (0, B.A)(t) && '[object Set]' == tL(t);
                      },
                tW = '[object Arguments]',
                tN = '[object Function]',
                tR = '[object Object]',
                tV = {};
            function tq(t) {
                return (function t(e, r, o, i, a, s) {
                    if (void 0 !== f) return f;
                    if (!(0, c.A)(e)) return e;
                    var u,
                        l,
                        f,
                        p = U(e);
                    if (p)
                        (h = e.length),
                            (b = new e.constructor(h)),
                            h && 'string' == typeof e[0] && tS.call(e, 'index') && ((b.index = e.index), (b.input = e.input)),
                            (f = b);
                    else {
                        var h,
                            b,
                            y,
                            j = tL(e),
                            v = j == tN || '[object GeneratorFunction]' == j;
                        if (H(e)) return e.slice();
                        if (j == tR || j == tW || (v && !a)) f = v || 'function' != typeof (y = e).constructor || ts(y) ? {} : tF(t$(y));
                        else {
                            if (!tV[j]) return a ? e : {};
                            f = (function (t, e, r) {
                                var n,
                                    o,
                                    i,
                                    a = t.constructor;
                                switch (e) {
                                    case '[object ArrayBuffer]':
                                        return tP(t);
                                    case '[object Boolean]':
                                    case '[object Date]':
                                        return new a(+t);
                                    case '[object DataView]':
                                        return (n = tP(t.buffer)), new t.constructor(n, t.byteOffset, t.byteLength);
                                    case '[object Float32Array]':
                                    case '[object Float64Array]':
                                    case '[object Int8Array]':
                                    case '[object Int16Array]':
                                    case '[object Int32Array]':
                                    case '[object Uint8Array]':
                                    case '[object Uint8ClampedArray]':
                                    case '[object Uint16Array]':
                                    case '[object Uint32Array]':
                                        return (o = tP(t.buffer)), new t.constructor(o, t.byteOffset, t.length);
                                    case '[object Map]':
                                    case '[object Set]':
                                        return new a();
                                    case '[object Number]':
                                    case '[object String]':
                                        return new a(t);
                                    case '[object RegExp]':
                                        return ((i = new t.constructor(t.source, tE.exec(t))).lastIndex = t.lastIndex), i;
                                    case '[object Symbol]':
                                        return tk ? Object(tk.call(t)) : {};
                                }
                            })(e, j);
                        }
                    }
                    s || (s = new M());
                    var d = s.get(e);
                    if (d) return d;
                    s.set(e, f),
                        tD(e)
                            ? e.forEach(function (n) {
                                  f.add(t(n, r, o, n, e, s));
                              })
                            : tB(e) &&
                              e.forEach(function (n, i) {
                                  f.set(i, t(n, r, o, i, e, s));
                              });
                    var _ = p
                        ? void 0
                        : ((l = tf((u = e))),
                          U(u)
                              ? l
                              : (function (t, e) {
                                    for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
                                    return t;
                                })(l, C(u)));
                    return (
                        !(function (t, e) {
                            for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t); );
                        })(_ || e, function (i, a) {
                            var c, u, l, p;
                            _ && (i = e[(a = i)]),
                                (c = f),
                                (u = a),
                                (l = t(i, r, o, a, e, s)),
                                (p = c[u]),
                                (E.call(c, u) && n(p, l) && (void 0 !== l || u in c)) ||
                                    ('__proto__' == u && P ? P(c, u, { configurable: !0, enumerable: !0, value: l, writable: !0 }) : (c[u] = l));
                        }),
                        f
                    );
                })(t, 5);
            }
            (tV[tW] =
                tV['[object Array]'] =
                tV['[object ArrayBuffer]'] =
                tV['[object DataView]'] =
                tV['[object Boolean]'] =
                tV['[object Date]'] =
                tV['[object Float32Array]'] =
                tV['[object Float64Array]'] =
                tV['[object Int8Array]'] =
                tV['[object Int16Array]'] =
                tV['[object Int32Array]'] =
                tV['[object Map]'] =
                tV['[object Number]'] =
                tV[tR] =
                tV['[object RegExp]'] =
                tV['[object Set]'] =
                tV['[object String]'] =
                tV['[object Symbol]'] =
                tV['[object Uint8Array]'] =
                tV['[object Uint8ClampedArray]'] =
                tV['[object Uint16Array]'] =
                tV['[object Uint32Array]'] =
                    !0),
                (tV['[object Error]'] = tV[tN] = tV['[object WeakMap]'] = !1);
        },
        17799: (t, e, r) => {
            r.d(e, { A: () => i });
            var n = r(51214),
                o = 'object' == typeof self && self && self.Object === Object && self,
                i = n.A || o || Function('return this')();
        },
        25799: (t, e, r) => {
            r.d(e, { A: () => l });
            var n = r(10315),
                o = Object.prototype,
                i = o.hasOwnProperty,
                a = o.toString,
                s = n.A ? n.A.toStringTag : void 0,
                c = Object.prototype.toString,
                u = n.A ? n.A.toStringTag : void 0;
            function l(t) {
                return null == t
                    ? void 0 === t
                        ? '[object Undefined]'
                        : '[object Null]'
                    : u && u in Object(t)
                      ? (function (t) {
                            var e = i.call(t, s),
                                r = t[s];
                            try {
                                t[s] = void 0;
                                var n = !0;
                            } catch (t) {}
                            var o = a.call(t);
                            return n && (e ? (t[s] = r) : delete t[s]), o;
                        })(t)
                      : c.call(t);
            }
        },
        33317: (t, e, r) => {
            r.d(e, { A: () => n });
            function n(t) {
                var e = typeof t;
                return null != t && ('object' == e || 'function' == e);
            }
        },
        51214: (t, e, r) => {
            r.d(e, { A: () => n });
            var n = 'object' == typeof global && global && global.Object === Object && global;
        },
        99451: (t, e, r) => {
            r.d(e, { A: () => j });
            var n = /\s/,
                o = /^\s+/,
                i = r(33317),
                a = r(25799),
                s = r(1962),
                c = 0 / 0,
                u = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                f = /^0o[0-7]+$/i,
                p = parseInt,
                h = 1 / 0,
                b = Math.ceil,
                y = Math.max;
            function j(t, e, r) {
                if (void 0 === e) e = 1;
                else {
                    var j, v, d;
                    e = y(
                        ((d =
                            (v = (j = e)
                                ? (j = (function (t) {
                                      if ('number' == typeof t) return t;
                                      if ('symbol' == typeof (e = t) || ((0, s.A)(e) && '[object Symbol]' == (0, a.A)(e))) return c;
                                      if ((0, i.A)(t)) {
                                          var e,
                                              r,
                                              h = 'function' == typeof t.valueOf ? t.valueOf() : t;
                                          t = (0, i.A)(h) ? h + '' : h;
                                      }
                                      if ('string' != typeof t) return 0 === t ? t : +t;
                                      t = (r = t)
                                          ? r
                                                .slice(
                                                    0,
                                                    (function (t) {
                                                        for (var e = t.length; e-- && n.test(t.charAt(e)); );
                                                        return e;
                                                    })(r) + 1,
                                                )
                                                .replace(o, '')
                                          : r;
                                      var b = l.test(t);
                                      return b || f.test(t) ? p(t.slice(2), b ? 2 : 8) : u.test(t) ? c : +t;
                                  })(j)) === h || j === -h
                                    ? (j < 0 ? -1 : 1) * 17976931348623157e292
                                    : j == j
                                      ? j
                                      : 0
                                : 0 === j
                                  ? j
                                  : 0) % 1),
                        v == v ? (d ? v - d : v) : 0),
                        0,
                    );
                }
                var _ = null == t ? 0 : t.length;
                if (!_ || e < 1) return [];
                for (var A = 0, g = 0, m = Array(b(_ / e)); A < _; )
                    m[g++] = (function (t, e, r) {
                        var n = -1,
                            o = t.length;
                        e < 0 && (e = -e > o ? 0 : o + e), (r = r > o ? o : r) < 0 && (r += o), (o = e > r ? 0 : (r - e) >>> 0), (e >>>= 0);
                        for (var i = Array(o); ++n < o; ) i[n] = t[n + e];
                        return i;
                    })(t, A, (A += e));
                return m;
            }
        },
    },
]);
