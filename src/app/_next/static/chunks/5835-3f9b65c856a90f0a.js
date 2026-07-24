'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5835],
    {
        449: (e, r, t) => {
            t.d(r, { A: () => f });
            var n = t(85599),
                u = t(23281);
            let f = function (e) {
                return (0, u.A)((0, n.A)(e).toLowerCase());
            };
        },
        6028: (e, r, t) => {
            t.d(r, { A: () => u });
            var n = t(90780);
            let u = function (e) {
                return (0, n.A)(e) ? e : [];
            };
        },
        6762: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e, r) {
                return e.has(r);
            };
        },
        12134: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e) {
                return e != e;
            };
        },
        13209: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e) {
                return e;
            };
        },
        14752: (e, r, t) => {
            t.d(r, { A: () => I });
            var n = t(8994),
                u = t(18861),
                f = t(91961),
                a = t(6762);
            let o = function (e, r, t, n, o, i) {
                var c = 1 & t,
                    d = e.length,
                    A = r.length;
                if (d != A && !(c && A > d)) return !1;
                var l = i.get(e),
                    s = i.get(r);
                if (l && s) return l == r && s == e;
                var v = -1,
                    h = !0,
                    b = 2 & t ? new u.A() : void 0;
                for (i.set(e, r), i.set(r, e); ++v < d; ) {
                    var g = e[v],
                        p = r[v];
                    if (n) var x = c ? n(p, g, v, r, e, i) : n(g, p, v, e, r, i);
                    if (void 0 !== x) {
                        if (x) continue;
                        h = !1;
                        break;
                    }
                    if (b) {
                        if (
                            !(0, f.A)(r, function (e, r) {
                                if (!(0, a.A)(b, r) && (g === e || o(g, e, t, n, i))) return b.push(r);
                            })
                        ) {
                            h = !1;
                            break;
                        }
                    } else if (!(g === p || o(g, p, t, n, i))) {
                        h = !1;
                        break;
                    }
                }
                return i.delete(e), i.delete(r), h;
            };
            var i = t(32024),
                c = t(31357),
                d = t(48289),
                A = t(45124),
                l = t(28566),
                s = i.A ? i.A.prototype : void 0,
                v = s ? s.valueOf : void 0;
            let h = function (e, r, t, n, u, f, a) {
                switch (t) {
                    case '[object DataView]':
                        if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) break;
                        (e = e.buffer), (r = r.buffer);
                    case '[object ArrayBuffer]':
                        if (e.byteLength != r.byteLength || !f(new c.A(e), new c.A(r))) break;
                        return !0;
                    case '[object Boolean]':
                    case '[object Date]':
                    case '[object Number]':
                        return (0, d.A)(+e, +r);
                    case '[object Error]':
                        return e.name == r.name && e.message == r.message;
                    case '[object RegExp]':
                    case '[object String]':
                        return e == r + '';
                    case '[object Map]':
                        var i = A.A;
                    case '[object Set]':
                        var s = 1 & n;
                        if ((i || (i = l.A), e.size != r.size && !s)) break;
                        var h = a.get(e);
                        if (h) return h == r;
                        (n |= 2), a.set(e, r);
                        var b = o(i(e), i(r), n, u, f, a);
                        return a.delete(e), b;
                    case '[object Symbol]':
                        if (v) return v.call(e) == v.call(r);
                }
                return !1;
            };
            var b = t(75363),
                g = Object.prototype.hasOwnProperty;
            let p = function (e, r, t, n, u, f) {
                var a = 1 & t,
                    o = (0, b.A)(e),
                    i = o.length;
                if (i != (0, b.A)(r).length && !a) return !1;
                for (var c = i; c--; ) {
                    var d = o[c];
                    if (!(a ? d in r : g.call(r, d))) return !1;
                }
                var A = f.get(e),
                    l = f.get(r);
                if (A && l) return A == r && l == e;
                var s = !0;
                f.set(e, r), f.set(r, e);
                for (var v = a; ++c < i; ) {
                    var h = e[(d = o[c])],
                        p = r[d];
                    if (n) var x = a ? n(p, h, d, r, e, f) : n(h, p, d, e, r, f);
                    if (!(void 0 === x ? h === p || u(h, p, t, n, f) : x)) {
                        s = !1;
                        break;
                    }
                    v || (v = 'constructor' == d);
                }
                if (s && !v) {
                    var _ = e.constructor,
                        y = r.constructor;
                    _ != y &&
                        'constructor' in e &&
                        'constructor' in r &&
                        !('function' == typeof _ && _ instanceof _ && 'function' == typeof y && y instanceof y) &&
                        (s = !1);
                }
                return f.delete(e), f.delete(r), s;
            };
            var x = t(43906),
                _ = t(47256),
                y = t(49593),
                j = t(81942),
                w = '[object Arguments]',
                E = '[object Array]',
                m = '[object Object]',
                L = Object.prototype.hasOwnProperty;
            let S = function (e, r, t, u, f, a) {
                var i = (0, _.A)(e),
                    c = (0, _.A)(r),
                    d = i ? E : (0, x.A)(e),
                    A = c ? E : (0, x.A)(r);
                (d = d == w ? m : d), (A = A == w ? m : A);
                var l = d == m,
                    s = A == m,
                    v = d == A;
                if (v && (0, y.A)(e)) {
                    if (!(0, y.A)(r)) return !1;
                    (i = !0), (l = !1);
                }
                if (v && !l) return a || (a = new n.A()), i || (0, j.A)(e) ? o(e, r, t, u, f, a) : h(e, r, d, t, u, f, a);
                if (!(1 & t)) {
                    var b = l && L.call(e, '__wrapped__'),
                        g = s && L.call(r, '__wrapped__');
                    if (b || g) {
                        var S = b ? e.value() : e,
                            O = g ? r.value() : r;
                        return a || (a = new n.A()), f(S, O, t, u, a);
                    }
                }
                return !!v && (a || (a = new n.A()), p(e, r, t, u, f, a));
            };
            var O = t(83107);
            let I = function e(r, t, n, u, f) {
                return r === t || (null != r && null != t && ((0, O.A)(r) || (0, O.A)(t)) ? S(r, t, n, u, e, f) : r != r && t != t);
            };
        },
        15132: (e, r, t) => {
            t.d(r, { A: () => S });
            var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                u = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                f = t(85599),
                a = '\ud800-\udfff',
                o = '\\u2700-\\u27bf',
                i = 'a-z\\xdf-\\xf6\\xf8-\\xff',
                c = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
                d =
                    '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
                A = "['’]",
                l = '[' + d + ']',
                s = '[' + i + ']',
                v = '[^' + a + d + '\\d+' + o + i + c + ']',
                h = '(?:\ud83c[\udde6-\uddff]){2}',
                b = '[\ud800-\udbff][\udc00-\udfff]',
                g = '[' + c + ']',
                p = '(?:' + s + '|' + v + ')',
                x = '(?:' + g + '|' + v + ')',
                _ = '(?:' + A + '(?:d|ll|m|re|s|t|ve))?',
                y = '(?:' + A + '(?:D|LL|M|RE|S|T|VE))?',
                j = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?',
                w = '[\\ufe0e\\ufe0f]?',
                E = '(?:\\u200d(?:' + ['[^' + a + ']', h, b].join('|') + ')' + w + j + ')*',
                m = '(?:' + ['[' + o + ']', h, b].join('|') + ')' + (w + j + E),
                L = RegExp(
                    [
                        g + '?' + s + '+' + _ + '(?=' + [l, g, '$'].join('|') + ')',
                        x + '+' + y + '(?=' + [l, g + p, '$'].join('|') + ')',
                        g + '?' + p + '+' + _,
                        g + '+' + y,
                        '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+',
                        m,
                    ].join('|'),
                    'g',
                );
            let S = function (e, r, t) {
                if (((e = (0, f.A)(e)), void 0 === (r = t ? void 0 : r))) {
                    var a;
                    return ((a = e), u.test(a)) ? e.match(L) || [] : e.match(n) || [];
                }
                return e.match(r) || [];
            };
        },
        16323: (e, r, t) => {
            t.d(r, { A: () => u });
            var n = t(449);
            let u = (0, t(53234).A)(function (e, r, t) {
                return (r = r.toLowerCase()), e + (t ? (0, n.A)(r) : r);
            });
        },
        18861: (e, r, t) => {
            t.d(r, { A: () => f });
            var n = t(33661);
            function u(e) {
                var r = -1,
                    t = null == e ? 0 : e.length;
                for (this.__data__ = new n.A(); ++r < t; ) this.add(e[r]);
            }
            (u.prototype.add = u.prototype.push =
                function (e) {
                    return this.__data__.set(e, '__lodash_hash_undefined__'), this;
                }),
                (u.prototype.has = function (e) {
                    return this.__data__.has(e);
                });
            let f = u;
        },
        19931: (e, r, t) => {
            t.d(r, { A: () => u });
            var n = RegExp('[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]');
            let u = function (e) {
                return n.test(e);
            };
        },
        21225: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e, r, t) {
                var n = -1,
                    u = e.length;
                r < 0 && (r = -r > u ? 0 : u + r), (t = t > u ? u : t) < 0 && (t += u), (u = r > t ? 0 : (t - r) >>> 0), (r >>>= 0);
                for (var f = Array(u); ++n < u; ) f[n] = e[n + r];
                return f;
            };
        },
        21916: (e, r, t) => {
            var n = t(23948);
            t.o(n, 'ServerInsertedHTMLContext') &&
                t.d(r, {
                    ServerInsertedHTMLContext: function () {
                        return n.ServerInsertedHTMLContext;
                    },
                }),
                t.o(n, 'notFound') &&
                    t.d(r, {
                        notFound: function () {
                            return n.notFound;
                        },
                    }),
                t.o(n, 'redirect') &&
                    t.d(r, {
                        redirect: function () {
                            return n.redirect;
                        },
                    }),
                t.o(n, 'usePathname') &&
                    t.d(r, {
                        usePathname: function () {
                            return n.usePathname;
                        },
                    }),
                t.o(n, 'useRouter') &&
                    t.d(r, {
                        useRouter: function () {
                            return n.useRouter;
                        },
                    }),
                t.o(n, 'useSearchParams') &&
                    t.d(r, {
                        useSearchParams: function () {
                            return n.useSearchParams;
                        },
                    }),
                t.o(n, 'useServerInsertedHTML') &&
                    t.d(r, {
                        useServerInsertedHTML: function () {
                            return n.useServerInsertedHTML;
                        },
                    });
        },
        23281: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = (0, t(42962).A)('toUpperCase');
        },
        23622: (e, r, t) => {
            t.d(r, { A: () => i });
            var n = t(81021),
                u = t(60672),
                f = t(44895),
                a = t(6028),
                o = t(69387);
            let i = (0, f.A)(function (e) {
                var r = (0, o.A)(e),
                    t = (0, n.A)(e, a.A);
                return (r = 'function' == typeof r ? r : void 0) && t.pop(), t.length && t[0] === e[0] ? (0, u.A)(t, void 0, r) : [];
            });
        },
        28566: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e) {
                var r = -1,
                    t = Array(e.size);
                return (
                    e.forEach(function (e) {
                        t[++r] = e;
                    }),
                    t
                );
            };
        },
        32528: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e, r, t) {
                for (var n = -1, u = null == e ? 0 : e.length; ++n < u; ) if (t(r, e[n])) return !0;
                return !1;
            };
        },
        42962: (e, r, t) => {
            t.d(r, { A: () => o });
            var n = t(48307),
                u = t(19931),
                f = t(95568),
                a = t(85599);
            let o = function (e) {
                return function (r) {
                    r = (0, a.A)(r);
                    var t = (0, u.A)(r) ? (0, f.A)(r) : void 0,
                        o = t ? t[0] : r.charAt(0),
                        i = t ? (0, n.A)(t, 1).join('') : r.slice(1);
                    return o[e]() + i;
                };
            };
        },
        44895: (e, r, t) => {
            t.d(r, { A: () => a });
            var n = t(13209),
                u = t(88396),
                f = t(54717);
            let a = function (e, r) {
                return (0, f.A)((0, u.A)(e, r, n.A), e + '');
            };
        },
        45124: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e) {
                var r = -1,
                    t = Array(e.size);
                return (
                    e.forEach(function (e, n) {
                        t[++r] = [n, e];
                    }),
                    t
                );
            };
        },
        48307: (e, r, t) => {
            t.d(r, { A: () => u });
            var n = t(21225);
            let u = function (e, r, t) {
                var u = e.length;
                return (t = void 0 === t ? u : t), !r && t >= u ? e : (0, n.A)(e, r, t);
            };
        },
        50785: (e, r, t) => {
            t.d(r, { A: () => a });
            var n = t(86858),
                u = t(12134);
            let f = function (e, r, t) {
                    for (var n = t - 1, u = e.length; ++n < u; ) if (e[n] === r) return n;
                    return -1;
                },
                a = function (e, r, t) {
                    return r == r ? f(e, r, t) : (0, n.A)(e, u.A, t);
                };
        },
        53234: (e, r, t) => {
            t.d(r, { A: () => o });
            var n = t(97291),
                u = t(99118),
                f = t(15132),
                a = RegExp("['’]", 'g');
            let o = function (e) {
                return function (r) {
                    return (0, n.A)((0, f.A)((0, u.A)(r).replace(a, '')), e, '');
                };
            };
        },
        54717: (e, r, t) => {
            t.d(r, { A: () => o });
            var n = t(66783),
                u = t(86746),
                f = t(13209),
                a = u.A
                    ? function (e, r) {
                          return (0, u.A)(e, 'toString', { configurable: !0, enumerable: !1, value: (0, n.A)(r), writable: !0 });
                      }
                    : f.A;
            let o = (0, t(76890).A)(a);
        },
        60672: (e, r, t) => {
            t.d(r, { A: () => d });
            var n = t(18861),
                u = t(74492),
                f = t(32528),
                a = t(81021),
                o = t(16628),
                i = t(6762),
                c = Math.min;
            let d = function (e, r, t) {
                for (var d = t ? f.A : u.A, A = e[0].length, l = e.length, s = l, v = Array(l), h = 1 / 0, b = []; s--; ) {
                    var g = e[s];
                    s && r && (g = (0, a.A)(g, (0, o.A)(r))), (h = c(g.length, h)), (v[s] = !t && (r || (A >= 120 && g.length >= 120)) ? new n.A(s && g) : void 0);
                }
                g = e[0];
                var p = -1,
                    x = v[0];
                e: for (; ++p < A && b.length < h; ) {
                    var _ = g[p],
                        y = r ? r(_) : _;
                    if (((_ = t || 0 !== _ ? _ : 0), !(x ? (0, i.A)(x, y) : d(b, y, t)))) {
                        for (s = l; --s; ) {
                            var j = v[s];
                            if (!(j ? (0, i.A)(j, y) : d(e[s], y, t))) continue e;
                        }
                        x && x.push(y), b.push(_);
                    }
                }
                return b;
            };
        },
        63993: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e) {
                return function (r) {
                    return null == e ? void 0 : e[r];
                };
            };
        },
        66783: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e) {
                return function () {
                    return e;
                };
            };
        },
        67893: (e, r, t) => {
            t.d(r, { A: () => u });
            var n = t(14752);
            let u = function (e, r) {
                return (0, n.A)(e, r);
            };
        },
        69387: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e) {
                var r = null == e ? 0 : e.length;
                return r ? e[r - 1] : void 0;
            };
        },
        74492: (e, r, t) => {
            t.d(r, { A: () => u });
            var n = t(50785);
            let u = function (e, r) {
                return !!(null == e ? 0 : e.length) && (0, n.A)(e, r, 0) > -1;
            };
        },
        75576: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e, r, t) {
                switch (t.length) {
                    case 0:
                        return e.call(r);
                    case 1:
                        return e.call(r, t[0]);
                    case 2:
                        return e.call(r, t[0], t[1]);
                    case 3:
                        return e.call(r, t[0], t[1], t[2]);
                }
                return e.apply(r, t);
            };
        },
        76890: (e, r, t) => {
            t.d(r, { A: () => u });
            var n = Date.now;
            let u = function (e) {
                var r = 0,
                    t = 0;
                return function () {
                    var u = n(),
                        f = 16 - (u - t);
                    if (((t = u), f > 0)) {
                        if (++r >= 800) return arguments[0];
                    } else r = 0;
                    return e.apply(void 0, arguments);
                };
            };
        },
        80725: (e, r, t) => {
            t.d(r, { A: () => f });
            var n = t(60058),
                u = t(83107);
            let f = function (e) {
                return !0 === e || !1 === e || ((0, u.A)(e) && '[object Boolean]' == (0, n.A)(e));
            };
        },
        86858: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e, r, t, n) {
                for (var u = e.length, f = t + (n ? 1 : -1); n ? f-- : ++f < u; ) if (r(e[f], f, e)) return f;
                return -1;
            };
        },
        88396: (e, r, t) => {
            t.d(r, { A: () => f });
            var n = t(75576),
                u = Math.max;
            let f = function (e, r, t) {
                return (
                    (r = u(void 0 === r ? e.length - 1 : r, 0)),
                    function () {
                        for (var f = arguments, a = -1, o = u(f.length - r, 0), i = Array(o); ++a < o; ) i[a] = f[r + a];
                        a = -1;
                        for (var c = Array(r + 1); ++a < r; ) c[a] = f[a];
                        return (c[r] = t(i)), (0, n.A)(e, this, c);
                    }
                );
            };
        },
        90780: (e, r, t) => {
            t.d(r, { A: () => f });
            var n = t(93223),
                u = t(83107);
            let f = function (e) {
                return (0, u.A)(e) && (0, n.A)(e);
            };
        },
        91961: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e, r) {
                for (var t = -1, n = null == e ? 0 : e.length; ++t < n; ) if (r(e[t], t, e)) return !0;
                return !1;
            };
        },
        95568: (e, r, t) => {
            t.d(r, { A: () => v });
            var n = t(19931),
                u = '\ud800-\udfff',
                f = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
                a = '\ud83c[\udffb-\udfff]',
                o = '[^' + u + ']',
                i = '(?:\ud83c[\udde6-\uddff]){2}',
                c = '[\ud800-\udbff][\udc00-\udfff]',
                d = '(?:' + f + '|' + a + ')?',
                A = '[\\ufe0e\\ufe0f]?',
                l = '(?:\\u200d(?:' + [o, i, c].join('|') + ')' + A + d + ')*',
                s = RegExp(a + '(?=' + a + ')|' + ('(?:' + [o + f + '?', f, i, c, '[' + u + ']'].join('|')) + ')' + (A + d + l), 'g');
            let v = function (e) {
                return (0, n.A)(e) ? e.match(s) || [] : e.split('');
            };
        },
        97291: (e, r, t) => {
            t.d(r, { A: () => n });
            let n = function (e, r, t, n) {
                var u = -1,
                    f = null == e ? 0 : e.length;
                for (n && f && (t = e[++u]); ++u < f; ) t = r(t, e[u], u, e);
                return t;
            };
        },
        99118: (e, r, t) => {
            t.d(r, { A: () => o });
            var n = (0, t(63993).A)({
                    À: 'A',
                    Á: 'A',
                    Â: 'A',
                    Ã: 'A',
                    Ä: 'A',
                    Å: 'A',
                    à: 'a',
                    á: 'a',
                    â: 'a',
                    ã: 'a',
                    ä: 'a',
                    å: 'a',
                    Ç: 'C',
                    ç: 'c',
                    Ð: 'D',
                    ð: 'd',
                    È: 'E',
                    É: 'E',
                    Ê: 'E',
                    Ë: 'E',
                    è: 'e',
                    é: 'e',
                    ê: 'e',
                    ë: 'e',
                    Ì: 'I',
                    Í: 'I',
                    Î: 'I',
                    Ï: 'I',
                    ì: 'i',
                    í: 'i',
                    î: 'i',
                    ï: 'i',
                    Ñ: 'N',
                    ñ: 'n',
                    Ò: 'O',
                    Ó: 'O',
                    Ô: 'O',
                    Õ: 'O',
                    Ö: 'O',
                    Ø: 'O',
                    ò: 'o',
                    ó: 'o',
                    ô: 'o',
                    õ: 'o',
                    ö: 'o',
                    ø: 'o',
                    Ù: 'U',
                    Ú: 'U',
                    Û: 'U',
                    Ü: 'U',
                    ù: 'u',
                    ú: 'u',
                    û: 'u',
                    ü: 'u',
                    Ý: 'Y',
                    ý: 'y',
                    ÿ: 'y',
                    Æ: 'Ae',
                    æ: 'ae',
                    Þ: 'Th',
                    þ: 'th',
                    ß: 'ss',
                    Ā: 'A',
                    Ă: 'A',
                    Ą: 'A',
                    ā: 'a',
                    ă: 'a',
                    ą: 'a',
                    Ć: 'C',
                    Ĉ: 'C',
                    Ċ: 'C',
                    Č: 'C',
                    ć: 'c',
                    ĉ: 'c',
                    ċ: 'c',
                    č: 'c',
                    Ď: 'D',
                    Đ: 'D',
                    ď: 'd',
                    đ: 'd',
                    Ē: 'E',
                    Ĕ: 'E',
                    Ė: 'E',
                    Ę: 'E',
                    Ě: 'E',
                    ē: 'e',
                    ĕ: 'e',
                    ė: 'e',
                    ę: 'e',
                    ě: 'e',
                    Ĝ: 'G',
                    Ğ: 'G',
                    Ġ: 'G',
                    Ģ: 'G',
                    ĝ: 'g',
                    ğ: 'g',
                    ġ: 'g',
                    ģ: 'g',
                    Ĥ: 'H',
                    Ħ: 'H',
                    ĥ: 'h',
                    ħ: 'h',
                    Ĩ: 'I',
                    Ī: 'I',
                    Ĭ: 'I',
                    Į: 'I',
                    İ: 'I',
                    ĩ: 'i',
                    ī: 'i',
                    ĭ: 'i',
                    į: 'i',
                    ı: 'i',
                    Ĵ: 'J',
                    ĵ: 'j',
                    Ķ: 'K',
                    ķ: 'k',
                    ĸ: 'k',
                    Ĺ: 'L',
                    Ļ: 'L',
                    Ľ: 'L',
                    Ŀ: 'L',
                    Ł: 'L',
                    ĺ: 'l',
                    ļ: 'l',
                    ľ: 'l',
                    ŀ: 'l',
                    ł: 'l',
                    Ń: 'N',
                    Ņ: 'N',
                    Ň: 'N',
                    Ŋ: 'N',
                    ń: 'n',
                    ņ: 'n',
                    ň: 'n',
                    ŋ: 'n',
                    Ō: 'O',
                    Ŏ: 'O',
                    Ő: 'O',
                    ō: 'o',
                    ŏ: 'o',
                    ő: 'o',
                    Ŕ: 'R',
                    Ŗ: 'R',
                    Ř: 'R',
                    ŕ: 'r',
                    ŗ: 'r',
                    ř: 'r',
                    Ś: 'S',
                    Ŝ: 'S',
                    Ş: 'S',
                    Š: 'S',
                    ś: 's',
                    ŝ: 's',
                    ş: 's',
                    š: 's',
                    Ţ: 'T',
                    Ť: 'T',
                    Ŧ: 'T',
                    ţ: 't',
                    ť: 't',
                    ŧ: 't',
                    Ũ: 'U',
                    Ū: 'U',
                    Ŭ: 'U',
                    Ů: 'U',
                    Ű: 'U',
                    Ų: 'U',
                    ũ: 'u',
                    ū: 'u',
                    ŭ: 'u',
                    ů: 'u',
                    ű: 'u',
                    ų: 'u',
                    Ŵ: 'W',
                    ŵ: 'w',
                    Ŷ: 'Y',
                    ŷ: 'y',
                    Ÿ: 'Y',
                    Ź: 'Z',
                    Ż: 'Z',
                    Ž: 'Z',
                    ź: 'z',
                    ż: 'z',
                    ž: 'z',
                    Ĳ: 'IJ',
                    ĳ: 'ij',
                    Œ: 'Oe',
                    œ: 'oe',
                    ŉ: "'n",
                    ſ: 's',
                }),
                u = t(85599),
                f = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                a = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
            let o = function (e) {
                return (e = (0, u.A)(e)) && e.replace(f, n).replace(a, '');
            };
        },
    },
]);
