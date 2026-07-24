'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8387],
    {
        2312: (e, t, a) => {
            a.d(t, { A: () => s });
            let s = (0, a(97660).A)();
        },
        4013: (e, t, a) => {
            function s(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
            }
            function r(e) {
                return e && e.sensitive ? '' : 'i';
            }
            a.d(t, { Os: () => n });
            var i = a(80781),
                o = a(10930);
            function n(e, t, a) {
                var n, l, u, c, h, d, m;
                let p = (function (e, t) {
                        if (e instanceof RegExp) return e;
                        let a = (function (e, t) {
                            if (/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) || e.startsWith('*')) return e;
                            let a = t || ('undefined' != typeof location && location.href);
                            return a ? decodeURI(new URL(encodeURI(e), a).href) : e;
                        })(e, t);
                        return (0, o.T)(a);
                    })(t, a),
                    g =
                        'string' == typeof p
                            ? p
                                  .replace(/([:a-zA-Z_-]*)(\*{1,2})+/g, (e, t, a) => {
                                      let s = '(.*)';
                                      return t ? (t.startsWith(':') ? `${t}${a}` : `${t}${s}`) : s;
                                  })
                                  .replace(/([^/])(:)(?=(?:\d+|\(\.\*\))(?=\/|$))/, '$1\\$2')
                                  .replace(/^([^/]+)(:)(?=\/\/)/, '$1\\$2')
                            : p,
                    f = (0, i.bf)(e),
                    k = ((u = (function e(t, a, i) {
                        if (t instanceof RegExp) {
                            var o;
                            if (!a) return t;
                            for (var n = /\((?:\?<(.*?)>)?(?!\?)/g, l = 0, u = n.exec(t.source); u; )
                                a.push({ name: u[1] || l++, prefix: '', suffix: '', modifier: '', pattern: '' }), (u = n.exec(t.source));
                            return t;
                        }
                        return Array.isArray(t)
                            ? ((o = t.map(function (t) {
                                  return e(t, a, i).source;
                              })),
                              new RegExp('(?:'.concat(o.join('|'), ')'), r(i)))
                            : (function (e, t, a) {
                                  void 0 === a && (a = {});
                                  for (
                                      var i = a.strict,
                                          o = void 0 !== i && i,
                                          n = a.start,
                                          l = a.end,
                                          u = a.encode,
                                          c =
                                              void 0 === u
                                                  ? function (e) {
                                                        return e;
                                                    }
                                                  : u,
                                          h = a.delimiter,
                                          d = a.endsWith,
                                          m = '['.concat(s(void 0 === d ? '' : d), ']|$'),
                                          p = '['.concat(s(void 0 === h ? '/#?' : h), ']'),
                                          g = void 0 === n || n ? '^' : '',
                                          f = 0;
                                      f < e.length;
                                      f++
                                  ) {
                                      var k = e[f];
                                      if ('string' == typeof k) g += s(c(k));
                                      else {
                                          var b = s(c(k.prefix)),
                                              y = s(c(k.suffix));
                                          if (k.pattern)
                                              if ((t && t.push(k), b || y))
                                                  if ('+' === k.modifier || '*' === k.modifier) {
                                                      var v = '*' === k.modifier ? '?' : '';
                                                      g += '(?:'
                                                          .concat(b, '((?:')
                                                          .concat(k.pattern, ')(?:')
                                                          .concat(y)
                                                          .concat(b, '(?:')
                                                          .concat(k.pattern, '))*)')
                                                          .concat(y, ')')
                                                          .concat(v);
                                                  } else g += '(?:'.concat(b, '(').concat(k.pattern, ')').concat(y, ')').concat(k.modifier);
                                              else {
                                                  if ('+' === k.modifier || '*' === k.modifier)
                                                      throw TypeError('Can not repeat "'.concat(k.name, '" without a prefix and suffix'));
                                                  g += '('.concat(k.pattern, ')').concat(k.modifier);
                                              }
                                          else g += '(?:'.concat(b).concat(y, ')').concat(k.modifier);
                                      }
                                  }
                                  if (void 0 === l || l) o || (g += ''.concat(p, '?')), (g += a.endsWith ? '(?='.concat(m, ')') : '$');
                                  else {
                                      var w = e[e.length - 1],
                                          x = 'string' == typeof w ? p.indexOf(w[w.length - 1]) > -1 : void 0 === w;
                                      o || (g += '(?:'.concat(p, '(?=').concat(m, '))?')), x || (g += '(?='.concat(p, '|').concat(m, ')'));
                                  }
                                  return new RegExp(g, r(a));
                              })(
                                  (function (e, t) {
                                      void 0 === t && (t = {});
                                      for (
                                          var a = (function (e) {
                                                  for (var t = [], a = 0; a < e.length; ) {
                                                      var s = e[a];
                                                      if ('*' === s || '+' === s || '?' === s) {
                                                          t.push({ type: 'MODIFIER', index: a, value: e[a++] });
                                                          continue;
                                                      }
                                                      if ('\\' === s) {
                                                          t.push({ type: 'ESCAPED_CHAR', index: a++, value: e[a++] });
                                                          continue;
                                                      }
                                                      if ('{' === s) {
                                                          t.push({ type: 'OPEN', index: a, value: e[a++] });
                                                          continue;
                                                      }
                                                      if ('}' === s) {
                                                          t.push({ type: 'CLOSE', index: a, value: e[a++] });
                                                          continue;
                                                      }
                                                      if (':' === s) {
                                                          for (var r = '', i = a + 1; i < e.length; ) {
                                                              var o = e.charCodeAt(i);
                                                              if ((o >= 48 && o <= 57) || (o >= 65 && o <= 90) || (o >= 97 && o <= 122) || 95 === o) {
                                                                  r += e[i++];
                                                                  continue;
                                                              }
                                                              break;
                                                          }
                                                          if (!r) throw TypeError('Missing parameter name at '.concat(a));
                                                          t.push({ type: 'NAME', index: a, value: r }), (a = i);
                                                          continue;
                                                      }
                                                      if ('(' === s) {
                                                          var n = 1,
                                                              l = '',
                                                              i = a + 1;
                                                          if ('?' === e[i]) throw TypeError('Pattern cannot start with "?" at '.concat(i));
                                                          for (; i < e.length; ) {
                                                              if ('\\' === e[i]) {
                                                                  l += e[i++] + e[i++];
                                                                  continue;
                                                              }
                                                              if (')' === e[i]) {
                                                                  if (0 == --n) {
                                                                      i++;
                                                                      break;
                                                                  }
                                                              } else if ('(' === e[i] && (n++, '?' !== e[i + 1]))
                                                                  throw TypeError('Capturing groups are not allowed at '.concat(i));
                                                              l += e[i++];
                                                          }
                                                          if (n) throw TypeError('Unbalanced pattern at '.concat(a));
                                                          if (!l) throw TypeError('Missing pattern at '.concat(a));
                                                          t.push({ type: 'PATTERN', index: a, value: l }), (a = i);
                                                          continue;
                                                      }
                                                      t.push({ type: 'CHAR', index: a, value: e[a++] });
                                                  }
                                                  return t.push({ type: 'END', index: a, value: '' }), t;
                                              })(e),
                                              r = t.prefixes,
                                              i = void 0 === r ? './' : r,
                                              o = t.delimiter,
                                              n = void 0 === o ? '/#?' : o,
                                              l = [],
                                              u = 0,
                                              c = 0,
                                              h = '',
                                              d = function (e) {
                                                  if (c < a.length && a[c].type === e) return a[c++].value;
                                              },
                                              m = function (e) {
                                                  var t = d(e);
                                                  if (void 0 !== t) return t;
                                                  var s = a[c],
                                                      r = s.type,
                                                      i = s.index;
                                                  throw TypeError('Unexpected '.concat(r, ' at ').concat(i, ', expected ').concat(e));
                                              },
                                              p = function () {
                                                  for (var e, t = ''; (e = d('CHAR') || d('ESCAPED_CHAR')); ) t += e;
                                                  return t;
                                              },
                                              g = function (e) {
                                                  for (var t = 0; t < n.length; t++) {
                                                      var a = n[t];
                                                      if (e.indexOf(a) > -1) return !0;
                                                  }
                                                  return !1;
                                              },
                                              f = function (e) {
                                                  var t = l[l.length - 1],
                                                      a = e || (t && 'string' == typeof t ? t : '');
                                                  if (t && !a) throw TypeError('Must have text between two parameters, missing text after "'.concat(t.name, '"'));
                                                  return !a || g(a) ? '[^'.concat(s(n), ']+?') : '(?:(?!'.concat(s(a), ')[^').concat(s(n), '])+?');
                                              };
                                          c < a.length;

                                      ) {
                                          var k = d('CHAR'),
                                              b = d('NAME'),
                                              y = d('PATTERN');
                                          if (b || y) {
                                              var v = k || '';
                                              -1 === i.indexOf(v) && ((h += v), (v = '')),
                                                  h && (l.push(h), (h = '')),
                                                  l.push({ name: b || u++, prefix: v, suffix: '', pattern: y || f(v), modifier: d('MODIFIER') || '' });
                                              continue;
                                          }
                                          var w = k || d('ESCAPED_CHAR');
                                          if (w) {
                                              h += w;
                                              continue;
                                          }
                                          if ((h && (l.push(h), (h = '')), d('OPEN'))) {
                                              var v = p(),
                                                  x = d('NAME') || '',
                                                  S = d('PATTERN') || '',
                                                  j = p();
                                              m('CLOSE'),
                                                  l.push({ name: x || (S ? u++ : ''), pattern: x && !S ? f(v) : S, prefix: v, suffix: j, modifier: d('MODIFIER') || '' });
                                              continue;
                                          }
                                          m('END');
                                      }
                                      return l;
                                  })(t, i),
                                  a,
                                  i,
                              );
                    })(g, (l = []), (n = { decode: decodeURIComponent }))),
                    (c = l),
                    void 0 === (h = n) && (h = {}),
                    (m =
                        void 0 === (d = h.decode)
                            ? function (e) {
                                  return e;
                              }
                            : d),
                    function (e) {
                        var t = u.exec(e);
                        if (!t) return !1;
                        for (var a = t[0], s = t.index, r = Object.create(null), i = 1; i < t.length; i++)
                            !(function (e) {
                                if (void 0 !== t[e]) {
                                    var a = c[e - 1];
                                    '*' === a.modifier || '+' === a.modifier
                                        ? (r[a.name] = t[e].split(a.prefix + a.suffix).map(function (e) {
                                              return m(e, a);
                                          }))
                                        : (r[a.name] = m(t[e], a));
                                }
                            })(i);
                        return { path: a, index: s, params: r };
                    })(f),
                    b = (k && k.params) || {};
                return { matches: !1 !== k, params: b };
            }
        },
        8594: (e, t, a) => {
            a.d(t, { L: () => q });
            var s = a(83682),
                r = ((e) => ((e.Success = '#69AB32'), (e.Warning = '#F0BB4B'), (e.Danger = '#E95F5D'), e))(r || {});
            async function i(e) {
                let t = e.clone(),
                    a = await t.text();
                return { url: new URL(e.url), method: e.method, headers: Object.fromEntries(e.headers.entries()), body: a };
            }
            let { message: o } = a(38961).A;
            async function n(e) {
                let t = e.clone(),
                    a = await t.text(),
                    s = t.status || 200,
                    r = t.statusText || o[s] || 'OK';
                return { status: s, statusText: r, headers: Object.fromEntries(t.headers.entries()), body: a };
            }
            var l = a(4013),
                u = a(37669),
                c = Object.create,
                h = Object.defineProperty,
                d = Object.getOwnPropertyDescriptor,
                m = Object.getOwnPropertyNames,
                p = Object.getPrototypeOf,
                g = Object.prototype.hasOwnProperty,
                f = ((e, t, a) =>
                    ((e, t, a, s) => {
                        if ((t && 'object' == typeof t) || 'function' == typeof t)
                            for (let a of m(t)) g.call(e, a) || void 0 === a || h(e, a, { get: () => t[a], enumerable: !(s = d(t, a)) || s.enumerable });
                        return e;
                    })(h((a = null != e ? c(p(e)) : {}), 'default', { value: e, enumerable: !0 }), e))(
                    ((e, t) =>
                        function () {
                            return t || (0, e[m(e)[0]])((t = { exports: {} }).exports, t), t.exports;
                        })({
                        'node_modules/.pnpm/cookie@1.1.1/node_modules/cookie/dist/index.js'(e) {
                            Object.defineProperty(e, '__esModule', { value: !0 }),
                                (e.parseCookie = l),
                                (e.parse = l),
                                (e.stringifyCookie = function (e, s) {
                                    let r = s?.encode || encodeURIComponent,
                                        i = [];
                                    for (let s of Object.keys(e)) {
                                        let o = e[s];
                                        if (void 0 === o) continue;
                                        if (!t.test(s)) throw TypeError(`cookie name is invalid: ${s}`);
                                        let n = r(o);
                                        if (!a.test(n)) throw TypeError(`cookie val is invalid: ${o}`);
                                        i.push(`${s}=${n}`);
                                    }
                                    return i.join('; ');
                                }),
                                (e.stringifySetCookie = u),
                                (e.serialize = u),
                                (e.parseSetCookie = function (e, t) {
                                    let a = t?.decode || m,
                                        s = e.length,
                                        r = c(e, 0, s),
                                        o = h(e, 0, r),
                                        n = -1 === o ? { name: '', value: a(d(e, 0, r)) } : { name: d(e, 0, o), value: a(d(e, o + 1, r)) },
                                        l = r + 1;
                                    for (; l < s; ) {
                                        let t = c(e, l, s),
                                            a = h(e, l, t),
                                            r = -1 === a ? d(e, l, t) : d(e, l, a),
                                            o = -1 === a ? void 0 : d(e, a + 1, t);
                                        switch (r.toLowerCase()) {
                                            case 'httponly':
                                                n.httpOnly = !0;
                                                break;
                                            case 'secure':
                                                n.secure = !0;
                                                break;
                                            case 'partitioned':
                                                n.partitioned = !0;
                                                break;
                                            case 'domain':
                                                n.domain = o;
                                                break;
                                            case 'path':
                                                n.path = o;
                                                break;
                                            case 'max-age':
                                                o && i.test(o) && (n.maxAge = Number(o));
                                                break;
                                            case 'expires':
                                                if (!o) break;
                                                let u = new Date(o);
                                                Number.isFinite(u.valueOf()) && (n.expires = u);
                                                break;
                                            case 'priority':
                                                if (!o) break;
                                                let m = o.toLowerCase();
                                                ('low' === m || 'medium' === m || 'high' === m) && (n.priority = m);
                                                break;
                                            case 'samesite':
                                                if (!o) break;
                                                let p = o.toLowerCase();
                                                ('lax' === p || 'strict' === p || 'none' === p) && (n.sameSite = p);
                                        }
                                        l = t + 1;
                                    }
                                    return n;
                                }),
                                (e.stringifySetCookie = u),
                                (e.serialize = u);
                            var t = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                                a = /^[\u0021-\u003A\u003C-\u007E]*$/,
                                s = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                                r = /^[\u0020-\u003A\u003D-\u007E]*$/,
                                i = /^-?\d+$/,
                                o = Object.prototype.toString,
                                n = (() => {
                                    let e = function () {};
                                    return (e.prototype = Object.create(null)), e;
                                })();
                            function l(e, t) {
                                let a = new n(),
                                    s = e.length;
                                if (s < 2) return a;
                                let r = t?.decode || m,
                                    i = 0;
                                do {
                                    let t = h(e, i, s);
                                    if (-1 === t) break;
                                    let o = c(e, i, s);
                                    if (t > o) {
                                        i = e.lastIndexOf(';', t - 1) + 1;
                                        continue;
                                    }
                                    let n = d(e, i, t);
                                    void 0 === a[n] && (a[n] = r(d(e, t + 1, o))), (i = o + 1);
                                } while (i < s);
                                return a;
                            }
                            function u(e, i, n) {
                                let l = 'object' == typeof e ? e : { ...n, name: e, value: String(i) },
                                    u = ('object' == typeof i ? i : n)?.encode || encodeURIComponent;
                                if (!t.test(l.name)) throw TypeError(`argument name is invalid: ${l.name}`);
                                let c = l.value ? u(l.value) : '';
                                if (!a.test(c)) throw TypeError(`argument val is invalid: ${l.value}`);
                                let h = l.name + '=' + c;
                                if (void 0 !== l.maxAge) {
                                    if (!Number.isInteger(l.maxAge)) throw TypeError(`option maxAge is invalid: ${l.maxAge}`);
                                    h += '; Max-Age=' + l.maxAge;
                                }
                                if (l.domain) {
                                    if (!s.test(l.domain)) throw TypeError(`option domain is invalid: ${l.domain}`);
                                    h += '; Domain=' + l.domain;
                                }
                                if (l.path) {
                                    if (!r.test(l.path)) throw TypeError(`option path is invalid: ${l.path}`);
                                    h += '; Path=' + l.path;
                                }
                                if (l.expires) {
                                    var d;
                                    if (((d = l.expires), '[object Date]' !== o.call(d) || !Number.isFinite(l.expires.valueOf())))
                                        throw TypeError(`option expires is invalid: ${l.expires}`);
                                    h += '; Expires=' + l.expires.toUTCString();
                                }
                                if ((l.httpOnly && (h += '; HttpOnly'), l.secure && (h += '; Secure'), l.partitioned && (h += '; Partitioned'), l.priority))
                                    switch ('string' == typeof l.priority ? l.priority.toLowerCase() : void 0) {
                                        case 'low':
                                            h += '; Priority=Low';
                                            break;
                                        case 'medium':
                                            h += '; Priority=Medium';
                                            break;
                                        case 'high':
                                            h += '; Priority=High';
                                            break;
                                        default:
                                            throw TypeError(`option priority is invalid: ${l.priority}`);
                                    }
                                if (l.sameSite)
                                    switch ('string' == typeof l.sameSite ? l.sameSite.toLowerCase() : l.sameSite) {
                                        case !0:
                                        case 'strict':
                                            h += '; SameSite=Strict';
                                            break;
                                        case 'lax':
                                            h += '; SameSite=Lax';
                                            break;
                                        case 'none':
                                            h += '; SameSite=None';
                                            break;
                                        default:
                                            throw TypeError(`option sameSite is invalid: ${l.sameSite}`);
                                    }
                                return h;
                            }
                            function c(e, t, a) {
                                let s = e.indexOf(';', t);
                                return -1 === s ? a : s;
                            }
                            function h(e, t, a) {
                                let s = e.indexOf('=', t);
                                return s < a ? s : -1;
                            }
                            function d(e, t, a) {
                                let s = t,
                                    r = a;
                                do {
                                    let t = e.charCodeAt(s);
                                    if (32 !== t && 9 !== t) break;
                                } while (++s < r);
                                for (; r > s; ) {
                                    let t = e.charCodeAt(r - 1);
                                    if (32 !== t && 9 !== t) break;
                                    r--;
                                }
                                return e.slice(s, r);
                            }
                            function m(e) {
                                if (-1 === e.indexOf('%')) return e;
                                try {
                                    return decodeURIComponent(e);
                                } catch (t) {
                                    return e;
                                }
                            }
                        },
                    })(),
                    0,
                ),
                k = f.default || f,
                b = k.parse,
                y = k.serialize,
                v = a(47787);
            function w(e) {
                let t = b(e),
                    a = {};
                for (let e in t) void 0 !== t[e] && (a[e] = t[e]);
                return a;
            }
            function x() {
                return w(document.cookie);
            }
            var S = a(10930),
                j = a(61034),
                E = ((e) => (
                    (e.HEAD = 'HEAD'), (e.GET = 'GET'), (e.POST = 'POST'), (e.PUT = 'PUT'), (e.PATCH = 'PATCH'), (e.OPTIONS = 'OPTIONS'), (e.DELETE = 'DELETE'), e
                ))(E || {});
            class C extends j.w {
                constructor(e, t, a, s) {
                    let r = 'function' == typeof t ? '[custom predicate]' : t;
                    super({ info: { header: `${e}${r ? ` ${r}` : ''}`, path: t, method: e }, resolver: a, options: s }), this.checkRedundantQueryParameters();
                }
                checkRedundantQueryParameters() {
                    let { method: e, path: t } = this.info;
                    !t ||
                        t instanceof RegExp ||
                        'function' == typeof t ||
                        ((0, S.T)(t) !== t &&
                            s.J.warn(
                                `Found a redundant usage of query parameters in the request handler URL for "${e} ${t}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/http/intercepting-requests#querysearch-parameters`,
                            ));
                }
                async parse(e) {
                    let t = new URL(e.request.url),
                        a = (function (e) {
                            let t = e.headers.get('cookie'),
                                a = t ? w(t) : {},
                                s = (function (e) {
                                    if ('undefined' == typeof document || 'undefined' == typeof location) return {};
                                    switch (e.credentials) {
                                        case 'same-origin': {
                                            let t = new URL(e.url);
                                            return location.origin === t.origin ? x() : {};
                                        }
                                        case 'include':
                                            return x();
                                        default:
                                            return {};
                                    }
                                })(e);
                            for (let t in s) e.headers.append('cookie', y(t, s[t]));
                            let r = v.C.getCookies(e.url),
                                i = Object.fromEntries(r.map((e) => [e.key, e.value]));
                            for (let t of r) e.headers.append('cookie', t.toString());
                            return { ...s, ...i, ...a };
                        })(e.request);
                    if ('function' == typeof this.info.path) {
                        let t = await this.info.path({ request: e.request, cookies: a });
                        return { match: 'boolean' == typeof t ? { matches: t, params: {} } : t, cookies: a };
                    }
                    return { match: this.info.path ? (0, l.Os)(t, this.info.path, e.resolutionContext?.baseUrl) : { matches: !1, params: {} }, cookies: a };
                }
                async predicate(e) {
                    let t = this.matchMethod(e.request.method),
                        a = e.parsedResult.match.matches;
                    return t && a;
                }
                matchMethod(e) {
                    var t;
                    return this.info.method instanceof RegExp ? this.info.method.test(e) : ((t = this.info.method), t.toLowerCase() === e.toLowerCase());
                }
                extendResolverArgs(e) {
                    return { params: e.parsedResult.match?.params || {}, cookies: e.parsedResult.cookies };
                }
                async log(e) {
                    var t;
                    let a = (0, u.e)(e.request.url),
                        r = await i(e.request),
                        o = await n(e.response),
                        l = (t = o.status) < 300 ? '#69AB32' : t < 400 ? '#F0BB4B' : '#E95F5D';
                    console.groupCollapsed(
                        s.J.formatMessage(
                            `${(function (e) {
                                let t = new Date();
                                return `${t.getHours().toString().padStart(2, '0')}:${t.getMinutes().toString().padStart(2, '0')}:${t.getSeconds().toString().padStart(2, '0')}`;
                            })()} ${e.request.method} ${a} (%c${o.status} ${o.statusText}%c)`,
                        ),
                        `color:${l}`,
                        'color:inherit',
                    ),
                        console.log('Request', r),
                        console.log('Handler:', this),
                        console.log('Response', o),
                        console.groupEnd();
                }
            }
            function L(e) {
                return (t, a, s = {}) => new C(e, t, a, s);
            }
            let q = { all: L(/.+/), head: L(E.HEAD), get: L(E.GET), post: L(E.POST), put: L(E.PUT), delete: L(E.DELETE), patch: L(E.PATCH), options: L(E.OPTIONS) };
        },
        10930: (e, t, a) => {
            a.d(t, { T: () => r });
            let s = /[?|#].*$/g;
            function r(e) {
                return e.endsWith('?') ? e : e.replace(s, '');
            }
        },
        17344: (e, t, a) => {
            a.d(t, { S: () => r });
            var s = a(49124);
            function r() {
                if ('undefined' != typeof navigator && 'ReactNative' === navigator.product) return !0;
                if (void 0 !== s) {
                    let e = s.type;
                    return 'renderer' !== e && 'worker' !== e && !!(s.versions && s.versions.node);
                }
                return !1;
            }
        },
        17633: (e, t, a) => {
            a.d(t, { cS: () => n });
            var s = a(80781),
                r = a(89782);
            let i = Symbol('bodyType'),
                o = Symbol.for('kDefaultContentType');
            class n extends s.Aj {
                [i] = null;
                constructor(e, t) {
                    let a = (0, r.Tl)(t);
                    super(e, a), (0, r.fX)(this, a);
                }
                static error() {
                    return super.error();
                }
                static text(e, t) {
                    let a = (0, r.Tl)(t),
                        s = a.headers.has('Content-Type');
                    s || a.headers.set('Content-Type', 'text/plain'),
                        a.headers.has('Content-Length') || a.headers.set('Content-Length', e ? new Blob([e]).size.toString() : '0');
                    let i = new n(e, a);
                    return s || Object.defineProperty(i, o, { value: !0, enumerable: !1 }), i;
                }
                static json(e, t) {
                    let a = (0, r.Tl)(t),
                        s = a.headers.has('Content-Type');
                    s || a.headers.set('Content-Type', 'application/json');
                    let i = JSON.stringify(e);
                    a.headers.has('Content-Length') || a.headers.set('Content-Length', i ? new Blob([i]).size.toString() : '0');
                    let l = new n(i, a);
                    return s || Object.defineProperty(l, o, { value: !0, enumerable: !1 }), l;
                }
                static xml(e, t) {
                    let a = (0, r.Tl)(t),
                        s = a.headers.has('Content-Type');
                    s || a.headers.set('Content-Type', 'text/xml');
                    let i = new n(e, a);
                    return s || Object.defineProperty(i, o, { value: !0, enumerable: !1 }), i;
                }
                static html(e, t) {
                    let a = (0, r.Tl)(t),
                        s = a.headers.has('Content-Type');
                    s || a.headers.set('Content-Type', 'text/html');
                    let i = new n(e, a);
                    return s || Object.defineProperty(i, o, { value: !0, enumerable: !1 }), i;
                }
                static arrayBuffer(e, t) {
                    let a = (0, r.Tl)(t),
                        s = a.headers.has('Content-Type');
                    s || a.headers.set('Content-Type', 'application/octet-stream'),
                        e && !a.headers.has('Content-Length') && a.headers.set('Content-Length', e.byteLength.toString());
                    let i = new n(e, a);
                    return s || Object.defineProperty(i, o, { value: !0, enumerable: !1 }), i;
                }
                static formData(e, t) {
                    return new n(e, (0, r.Tl)(t));
                }
            }
        },
        18557: (e, t, a) => {
            a.d(t, { A: () => i });
            var s = a(76270),
                r = a(73184);
            let i = function (e) {
                return (0, s.A)(e, (0, r.A)(e));
            };
        },
        20116: (e, t, a) => {
            a.d(t, { X: () => r });
            var s = a(84693);
            function r(e, t) {
                let a = new Request(e instanceof Request ? e.clone() : e, t);
                (0, s.V1)(
                    !a.bodyUsed,
                    'Failed to create a bypassed request to "%s %s": given request instance already has its body read. Make sure to clone the intercepted request if you wish to read its body before bypassing it.',
                    a.method,
                    a.url,
                );
                let r = a.clone();
                return r.headers.append('accept', 'msw/passthrough'), r;
            }
        },
        22389: (e, t, a) => {
            a.d(t, { A: () => j });
            var s = a(8994),
                r = a(25249),
                i = a(48289);
            let o = function (e, t, a) {
                ((void 0 === a || (0, i.A)(e[t], a)) && (void 0 !== a || t in e)) || (0, r.A)(e, t, a);
            };
            var n = a(2312),
                l = a(58531),
                u = a(91368),
                c = a(69326),
                h = a(35560),
                d = a(97268),
                m = a(47256),
                p = a(90780),
                g = a(49593),
                f = a(23435),
                k = a(83556),
                b = a(43234),
                y = a(81942);
            let v = function (e, t) {
                if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
            };
            var w = a(18557);
            let x = function (e, t, a, s, r, i, n) {
                var x = v(e, a),
                    S = v(t, a),
                    j = n.get(S);
                if (j) return void o(e, a, j);
                var E = i ? i(x, S, a + '', e, t, n) : void 0,
                    C = void 0 === E;
                if (C) {
                    var L = (0, m.A)(S),
                        q = !L && (0, g.A)(S),
                        z = !L && !q && (0, y.A)(S);
                    (E = S),
                        L || q || z
                            ? (0, m.A)(x)
                                ? (E = x)
                                : (0, p.A)(x)
                                  ? (E = (0, c.A)(x))
                                  : q
                                    ? ((C = !1), (E = (0, l.A)(S, !0)))
                                    : z
                                      ? ((C = !1), (E = (0, u.A)(S, !0)))
                                      : (E = [])
                            : (0, b.A)(S) || (0, d.A)(S)
                              ? ((E = x), (0, d.A)(x) ? (E = (0, w.A)(x)) : (!(0, k.A)(x) || (0, f.A)(x)) && (E = (0, h.A)(S)))
                              : (C = !1);
                }
                C && (n.set(S, E), r(E, S, s, i, n), n.delete(S)), o(e, a, E);
            };
            var S = a(73184);
            let j = function e(t, a, r, i, l) {
                t !== a &&
                    (0, n.A)(
                        a,
                        function (n, u) {
                            if ((l || (l = new s.A()), (0, k.A)(n))) x(t, a, u, r, e, i, l);
                            else {
                                var c = i ? i(v(t, u), n, u + '', t, a, l) : void 0;
                                void 0 === c && (c = n), o(t, u, c);
                            }
                        },
                        S.A,
                    );
            };
        },
        33099: (e, t, a) => {
            a.d(t, { r: () => C, t: () => L });
            var s = a(17344),
                r = a(84693),
                i = a(49124),
                o = Object.defineProperty,
                n = {};
            function l(e) {
                return `\x1b[33m${e}\x1b[0m`;
            }
            function u(e) {
                return `\x1b[34m${e}\x1b[0m`;
            }
            function c(e) {
                return `\x1b[90m${e}\x1b[0m`;
            }
            function h(e) {
                return `\x1b[31m${e}\x1b[0m`;
            }
            function d(e) {
                return `\x1b[32m${e}\x1b[0m`;
            }
            ((e, t) => {
                for (var a in t) o(e, a, { get: t[a], enumerable: !0 });
            })(n, { blue: () => u, gray: () => c, green: () => d, red: () => h, yellow: () => l });
            var m = (0, s.S)(),
                p = class {
                    constructor(e) {
                        (this.name = e), (this.prefix = `[${this.name}]`);
                        let t = v('DEBUG'),
                            a = v('LOG_LEVEL');
                        '1' === t || 'true' === t || (void 0 !== t && this.name.startsWith(t))
                            ? ((this.debug = w(a, 'debug') ? f : this.debug),
                              (this.info = w(a, 'info') ? f : this.info),
                              (this.success = w(a, 'success') ? f : this.success),
                              (this.warning = w(a, 'warning') ? f : this.warning),
                              (this.error = w(a, 'error') ? f : this.error))
                            : ((this.info = f), (this.success = f), (this.warning = f), (this.error = f), (this.only = f));
                    }
                    prefix;
                    extend(e) {
                        return new p(`${this.name}:${e}`);
                    }
                    debug(e, ...t) {
                        this.logEntry({ level: 'debug', message: c(e), positionals: t, prefix: this.prefix, colors: { prefix: 'gray' } });
                    }
                    info(e, ...t) {
                        this.logEntry({ level: 'info', message: e, positionals: t, prefix: this.prefix, colors: { prefix: 'blue' } });
                        let a = new g();
                        return (e, ...t) => {
                            a.measure(),
                                this.logEntry({
                                    level: 'info',
                                    message: `${e} ${c(`${a.deltaTime}ms`)}`,
                                    positionals: t,
                                    prefix: this.prefix,
                                    colors: { prefix: 'blue' },
                                });
                        };
                    }
                    success(e, ...t) {
                        this.logEntry({ level: 'info', message: e, positionals: t, prefix: `\u2714 ${this.prefix}`, colors: { timestamp: 'green', prefix: 'green' } });
                    }
                    warning(e, ...t) {
                        this.logEntry({
                            level: 'warning',
                            message: e,
                            positionals: t,
                            prefix: `\u26A0 ${this.prefix}`,
                            colors: { timestamp: 'yellow', prefix: 'yellow' },
                        });
                    }
                    error(e, ...t) {
                        this.logEntry({ level: 'error', message: e, positionals: t, prefix: `\u2716 ${this.prefix}`, colors: { timestamp: 'red', prefix: 'red' } });
                    }
                    only(e) {
                        e();
                    }
                    createEntry(e, t) {
                        return { timestamp: new Date(), level: e, message: t };
                    }
                    logEntry(e) {
                        let { level: t, message: a, prefix: s, colors: r, positionals: i = [] } = e,
                            o = this.createEntry(t, a),
                            l = r?.timestamp || 'gray',
                            u = r?.prefix || 'gray',
                            c = { timestamp: n[l], prefix: n[u] };
                        this.getWriter(t)(
                            [c.timestamp(this.formatTimestamp(o.timestamp))]
                                .concat(null != s ? c.prefix(s) : [])
                                .concat(x(a))
                                .join(' '),
                            ...i.map(x),
                        );
                    }
                    formatTimestamp(e) {
                        return `${e.toLocaleTimeString('en-GB')}:${e.getMilliseconds()}`;
                    }
                    getWriter(e) {
                        switch (e) {
                            case 'debug':
                            case 'success':
                            case 'info':
                                return k;
                            case 'warning':
                                return b;
                            case 'error':
                                return y;
                        }
                    }
                },
                g = class {
                    startTime;
                    endTime;
                    deltaTime;
                    constructor() {
                        this.startTime = performance.now();
                    }
                    measure() {
                        this.endTime = performance.now();
                        let e = this.endTime - this.startTime;
                        this.deltaTime = e.toFixed(2);
                    }
                },
                f = () => void 0;
            function k(e, ...t) {
                if (m) return void i.stdout.write((0, r.GP)(e, ...t) + '\n');
                console.log(e, ...t);
            }
            function b(e, ...t) {
                if (m) return void i.stderr.write((0, r.GP)(e, ...t) + '\n');
                console.warn(e, ...t);
            }
            function y(e, ...t) {
                if (m) return void i.stderr.write((0, r.GP)(e, ...t) + '\n');
                console.error(e, ...t);
            }
            function v(e) {
                return m ? i.env[e] : globalThis[e]?.toString();
            }
            function w(e, t) {
                return void 0 !== e && e !== t;
            }
            function x(e) {
                return void 0 === e ? 'undefined' : null === e ? 'null' : 'string' == typeof e ? e : 'object' == typeof e ? JSON.stringify(e) : e.toString();
            }
            var S = a(24171);
            function j(e) {
                return globalThis[e] || void 0;
            }
            let E = (function (e) {
                return (e.INACTIVE = 'INACTIVE'), (e.APPLYING = 'APPLYING'), (e.APPLIED = 'APPLIED'), (e.DISPOSING = 'DISPOSING'), (e.DISPOSED = 'DISPOSED'), e;
            })({});
            var C = class {
                constructor(e) {
                    (this.symbol = e),
                        (this.readyState = E.INACTIVE),
                        (this.emitter = new S.v()),
                        (this.subscriptions = []),
                        (this.logger = new p(e.description)),
                        this.emitter.setMaxListeners(0),
                        this.logger.info('constructing the interceptor...');
                }
                checkEnvironment() {
                    return !0;
                }
                apply() {
                    let e = this.logger.extend('apply');
                    if ((e.info('applying the interceptor...'), this.readyState === E.APPLIED)) return void e.info('intercepted already applied!');
                    if (!this.checkEnvironment()) return void e.info('the interceptor cannot be applied in this environment!');
                    this.readyState = E.APPLYING;
                    let t = this.getInstance();
                    if (t) {
                        e.info('found a running instance, reusing...'),
                            (this.on = (a, s) => (
                                e.info('proxying the "%s" listener', a),
                                t.emitter.addListener(a, s),
                                this.subscriptions.push(() => {
                                    t.emitter.removeListener(a, s), e.info('removed proxied "%s" listener!', a);
                                }),
                                this
                            )),
                            (this.readyState = E.APPLIED);
                        return;
                    }
                    e.info('no running instance found, setting up a new instance...'), this.setup(), this.setInstance(), (this.readyState = E.APPLIED);
                }
                setup() {}
                on(e, t) {
                    let a = this.logger.extend('on');
                    return (
                        this.readyState === E.DISPOSING || this.readyState === E.DISPOSED
                            ? a.info('cannot listen to events, already disposed!')
                            : (a.info('adding "%s" event listener:', e, t), this.emitter.on(e, t)),
                        this
                    );
                }
                once(e, t) {
                    return this.emitter.once(e, t), this;
                }
                off(e, t) {
                    return this.emitter.off(e, t), this;
                }
                removeAllListeners(e) {
                    return this.emitter.removeAllListeners(e), this;
                }
                dispose() {
                    let e = this.logger.extend('dispose');
                    if (this.readyState === E.DISPOSED) return void e.info('cannot dispose, already disposed!');
                    if ((e.info('disposing the interceptor...'), (this.readyState = E.DISPOSING), !this.getInstance()))
                        return void e.info('no interceptors running, skipping dispose...');
                    if ((this.clearInstance(), e.info('global symbol deleted:', j(this.symbol)), this.subscriptions.length > 0)) {
                        for (let t of (e.info('disposing of %d subscriptions...', this.subscriptions.length), this.subscriptions)) t();
                        (this.subscriptions = []), e.info('disposed of all subscriptions!', this.subscriptions.length);
                    }
                    this.emitter.removeAllListeners(), e.info('destroyed the listener!'), (this.readyState = E.DISPOSED);
                }
                getInstance() {
                    let e = j(this.symbol);
                    return this.logger.info('retrieved global instance:', e?.constructor?.name), e;
                }
                setInstance() {
                    var e;
                    (e = this.symbol), (globalThis[e] = this), this.logger.info('set global instance!', this.symbol.description);
                }
                clearInstance() {
                    var e;
                    (e = this.symbol), delete globalThis[e], this.logger.info('cleared global instance!', this.symbol.description);
                }
            };
            function L() {
                return Math.random().toString(16).slice(2);
            }
        },
        37669: (e, t, a) => {
            a.d(t, { e: () => s });
            function s(e) {
                let t = e instanceof URL ? e : new URL(e);
                return 'undefined' != typeof location && t.origin === location.origin ? t.pathname : t.origin + t.pathname;
            }
        },
        38961: (e, t, a) => {
            a.d(t, { A: () => m });
            var s = Object.create,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                n = Object.getPrototypeOf,
                l = Object.prototype.hasOwnProperty,
                u = (e, t) =>
                    function () {
                        return t || (0, e[o(e)[0]])((t = { exports: {} }).exports, t), t.exports;
                    },
                c = u({
                    'node_modules/.pnpm/statuses@2.0.2/node_modules/statuses/codes.json'(e, t) {
                        t.exports = {
                            100: 'Continue',
                            101: 'Switching Protocols',
                            102: 'Processing',
                            103: 'Early Hints',
                            200: 'OK',
                            201: 'Created',
                            202: 'Accepted',
                            203: 'Non-Authoritative Information',
                            204: 'No Content',
                            205: 'Reset Content',
                            206: 'Partial Content',
                            207: 'Multi-Status',
                            208: 'Already Reported',
                            226: 'IM Used',
                            300: 'Multiple Choices',
                            301: 'Moved Permanently',
                            302: 'Found',
                            303: 'See Other',
                            304: 'Not Modified',
                            305: 'Use Proxy',
                            307: 'Temporary Redirect',
                            308: 'Permanent Redirect',
                            400: 'Bad Request',
                            401: 'Unauthorized',
                            402: 'Payment Required',
                            403: 'Forbidden',
                            404: 'Not Found',
                            405: 'Method Not Allowed',
                            406: 'Not Acceptable',
                            407: 'Proxy Authentication Required',
                            408: 'Request Timeout',
                            409: 'Conflict',
                            410: 'Gone',
                            411: 'Length Required',
                            412: 'Precondition Failed',
                            413: 'Payload Too Large',
                            414: 'URI Too Long',
                            415: 'Unsupported Media Type',
                            416: 'Range Not Satisfiable',
                            417: 'Expectation Failed',
                            418: "I'm a Teapot",
                            421: 'Misdirected Request',
                            422: 'Unprocessable Entity',
                            423: 'Locked',
                            424: 'Failed Dependency',
                            425: 'Too Early',
                            426: 'Upgrade Required',
                            428: 'Precondition Required',
                            429: 'Too Many Requests',
                            431: 'Request Header Fields Too Large',
                            451: 'Unavailable For Legal Reasons',
                            500: 'Internal Server Error',
                            501: 'Not Implemented',
                            502: 'Bad Gateway',
                            503: 'Service Unavailable',
                            504: 'Gateway Timeout',
                            505: 'HTTP Version Not Supported',
                            506: 'Variant Also Negotiates',
                            507: 'Insufficient Storage',
                            508: 'Loop Detected',
                            509: 'Bandwidth Limit Exceeded',
                            510: 'Not Extended',
                            511: 'Network Authentication Required',
                        };
                    },
                }),
                h = ((e, t, a) =>
                    ((e, t, a, s) => {
                        if ((t && 'object' == typeof t) || 'function' == typeof t)
                            for (let a of o(t)) l.call(e, a) || void 0 === a || r(e, a, { get: () => t[a], enumerable: !(s = i(t, a)) || s.enumerable });
                        return e;
                    })(r((a = null != e ? s(n(e)) : {}), 'default', { value: e, enumerable: !0 }), e))(
                    u({
                        'node_modules/.pnpm/statuses@2.0.2/node_modules/statuses/index.js'(e, t) {
                            var a,
                                s,
                                r = c();
                            function i(e) {
                                if (!Object.prototype.hasOwnProperty.call(o.message, e)) throw Error('invalid status code: ' + e);
                                return o.message[e];
                            }
                            function o(e) {
                                if ('number' == typeof e) return i(e);
                                if ('string' != typeof e) throw TypeError('code must be a number or string');
                                var t = parseInt(e, 10);
                                if (!isNaN(t)) return i(t);
                                var a = e.toLowerCase();
                                if (!Object.prototype.hasOwnProperty.call(o.code, a)) throw Error('invalid status message: "' + e + '"');
                                return o.code[a];
                            }
                            (t.exports = o),
                                (o.message = r),
                                (s = {}),
                                Object.keys((a = r)).forEach(function (e) {
                                    var t = a[e],
                                        r = Number(e);
                                    s[t.toLowerCase()] = r;
                                }),
                                (o.code = s),
                                (o.codes = Object.keys(r).map(function (e) {
                                    return Number(e);
                                })),
                                (o.redirect = { 300: !0, 301: !0, 302: !0, 303: !0, 305: !0, 307: !0, 308: !0 }),
                                (o.empty = { 204: !0, 205: !0, 304: !0 }),
                                (o.retry = { 502: !0, 503: !0, 504: !0 });
                        },
                    })(),
                    0,
                ),
                d = h.default || h;
            d.message;
            var m = d;
        },
        40614: (e, t, a) => {
            a.d(t, { k: () => t1 });
            var s = a(84693),
                r = class {
                    #e;
                    #t;
                    constructor() {
                        (this.#e = []), (this.#t = new Map());
                    }
                    get [Symbol.iterator]() {
                        return this.#e[Symbol.iterator].bind(this.#e);
                    }
                    entries() {
                        return this.#t.entries();
                    }
                    get(e) {
                        return this.#t.get(e) || [];
                    }
                    getAll() {
                        return this.#e.map(([, e]) => e);
                    }
                    append(e, t) {
                        this.#e.push([e, t]), this.#a(e, (e) => e.push(t));
                    }
                    prepend(e, t) {
                        this.#e.unshift([e, t]), this.#a(e, (e) => e.unshift(t));
                    }
                    delete(e, t) {
                        if (0 === this.size) return !1;
                        let a = this.#t.get(e);
                        if (!a) return !1;
                        let s = a.indexOf(t);
                        return (
                            -1 !== s &&
                            (a.splice(s, 1),
                            this.#e.splice(
                                this.#e.findIndex((a) => a[0] === e && a[1] === t),
                                1,
                            ),
                            !0)
                        );
                    }
                    deleteAll(e) {
                        0 !== this.size && ((this.#e = this.#e.filter((t) => t[0] !== e)), this.#t.delete(e));
                    }
                    get size() {
                        return this.#e.length;
                    }
                    clear() {
                        0 !== this.size && ((this.#e.length = 0), this.#t.clear());
                    }
                    #a(e, t) {
                        t(this.#t.get(e) || this.#t.set(e, []).get(e));
                    }
                };
            let i = Symbol('kDefaultPrevented'),
                o = Symbol('kPropagationStopped'),
                n = Symbol('kImmediatePropagationStopped');
            var l = class extends MessageEvent {
                    #s;
                    [i];
                    [o];
                    [n];
                    constructor(...e) {
                        super(e[0], e[1]), (this[i] = !1);
                    }
                    get defaultPrevented() {
                        return this[i];
                    }
                    preventDefault() {
                        super.preventDefault(), (this[i] = !0);
                    }
                    stopImmediatePropagation() {
                        super.stopImmediatePropagation(), (this[n] = !0);
                    }
                },
                u = class {
                    #r;
                    #i;
                    #o;
                    #n;
                    #l;
                    #u;
                    #c;
                    hooks;
                    constructor() {
                        (this.#r = new r()),
                            (this.#i = new WeakMap()),
                            (this.#o = new WeakMap()),
                            (this.#n = new WeakSet()),
                            (this.#l = new r()),
                            (this.#u = new WeakMap()),
                            (this.#c = new WeakMap()),
                            (this.hooks = {
                                on: (e, t, a) => {
                                    if (!a?.signal?.aborted) {
                                        if (a?.once) {
                                            let a = t,
                                                s = (...t) => (this.#h(e, s), a(...t));
                                            t = s;
                                        }
                                        if ((this.#l.append(e, t), a && this.#u.set(t, a), a?.signal)) {
                                            let { signal: s } = a,
                                                r = () => {
                                                    this.#h(e, t);
                                                };
                                            s.addEventListener('abort', r, { once: !0 }),
                                                this.#c.set(t, () => {
                                                    s.removeEventListener('abort', r);
                                                });
                                        }
                                    }
                                },
                                removeListener: (e, t) => {
                                    this.#h(e, t);
                                },
                            });
                    }
                    #h(e, t) {
                        this.#l.delete(e, t);
                        let a = this.#c.get(t);
                        a && (a(), this.#c.delete(t));
                    }
                    #d(e, t) {
                        let a = this.#r.delete(e, t),
                            s = this.#o.get(t);
                        return s && (s(), this.#o.delete(t)), a;
                    }
                    on(e, t, a) {
                        return this.#m(e, t, a), this;
                    }
                    once(e, t, a) {
                        return this.on(e, t, { ...(a || {}), once: !0 });
                    }
                    earlyOn(e, t, a) {
                        return this.#m(e, t, a, 'prepend'), this;
                    }
                    earlyOnce(e, t, a) {
                        return this.earlyOn(e, t, { ...(a || {}), once: !0 });
                    }
                    emit(e) {
                        if (0 === this.#r.size) return !1;
                        let t = this.listenerCount(e.type) > 0,
                            a = this.#p(e);
                        for (let t of this.#g(e.type)) {
                            if (null != a.event[o] && a.event[o] !== this) return a.revoke(), !1;
                            if (a.event[n]) break;
                            this.#f(a.event, t);
                        }
                        return a.revoke(), t;
                    }
                    async emitAsPromise(e) {
                        if (0 === this.#r.size) return [];
                        let t = [],
                            a = this.#p(e);
                        for (let s of this.#g(e.type)) {
                            if (null != a.event[o] && a.event[o] !== this) return a.revoke(), [];
                            if (a.event[n]) break;
                            let e = await Promise.resolve(this.#f(a.event, s));
                            this.#k(s) || t.push(e);
                        }
                        return a.revoke(), Promise.allSettled(t).then((e) => e.map((e) => ('fulfilled' === e.status ? e.value : e.reason)));
                    }
                    *emitAsGenerator(e) {
                        if (0 === this.#r.size) return;
                        let t = this.#p(e);
                        for (let a of this.#g(e.type)) {
                            if (null != t.event[o] && t.event[o] !== this) return void t.revoke();
                            if (t.event[n]) break;
                            let e = this.#f(t.event, a);
                            this.#k(a) || (yield e);
                        }
                        t.revoke();
                    }
                    removeListener(e, t) {
                        let a = this.#i.get(t);
                        if (this.#d(e, t)) for (let s of this.#l.get('removeListener').slice()) s(e, t, a);
                    }
                    removeAllListeners(e) {
                        if (null == e) {
                            for (let [e, t] of this.#r.entries()) for (; t.length > 0; ) this.removeListener(e, t[0]);
                            for (let [e, t] of [...this.#l]) this.#u.get(t)?.persist || this.#h(e, t);
                            return;
                        }
                        let t = this.listeners(e);
                        for (; t.length > 0; ) this.removeListener(e, t[0]);
                    }
                    listeners(e) {
                        return null == e ? this.#r.getAll() : this.#r.get(e);
                    }
                    listenerCount(e) {
                        return null == e ? this.#r.size : this.listeners(e).length;
                    }
                    #m(e, t, a, s = 'append') {
                        if (!a?.signal?.aborted) {
                            for (let s of this.#l.get('newListener').slice()) s(e, t, a);
                            if (('*' === e && this.#n.add(t), 'prepend' === s ? this.#r.prepend(e, t) : this.#r.append(e, t), a && (this.#i.set(t, a), a.signal))) {
                                let { signal: s } = a,
                                    r = () => {
                                        this.removeListener(e, t);
                                    };
                                s.addEventListener('abort', r, { once: !0 }),
                                    this.#o.set(t, () => {
                                        s.removeEventListener('abort', r);
                                    });
                            }
                        }
                    }
                    #p(e) {
                        let { stopPropagation: t } = e;
                        return (
                            (e.stopPropagation = () => {
                                (e[o] = this), t.call(e);
                            }),
                            {
                                event: e,
                                revoke() {
                                    e.stopPropagation = t;
                                },
                            }
                        );
                    }
                    #f(e, t) {
                        for (let t of this.#l.get('beforeEmit').slice()) if (!1 === t(e)) return;
                        let a = t.call(this, e),
                            s = this.#i.get(t);
                        if (s?.once) {
                            let a = this.#k(t) ? '*' : e.type;
                            if (this.#d(a, t)) for (let e of this.#l.get('removeListener').slice()) e(a, t, s);
                        }
                        return a;
                    }
                    *#g(e) {
                        let t = [];
                        for (let [a, s] of this.#r) ('*' === a || a === e) && t.push(s);
                        yield* t;
                    }
                    #k(e) {
                        return this.#n.has(e);
                    }
                };
            class c extends l {
                frame;
                constructor(e, t) {
                    super(e, {}), (this.frame = t);
                }
            }
            class h {
                emitter;
                constructor() {
                    this.emitter = new u();
                }
                async queue(e) {
                    await this.emitter.emitAsPromise(new c('frame', e));
                }
                on(e, t, a) {
                    this.emitter.on(e, t, a);
                }
                disable() {
                    this.emitter.removeAllListeners();
                }
            }
            var d = a(83682);
            let m = Symbol('kSiblingHandlers');
            function p(e) {
                let t = {},
                    a = (e, a) => {
                        let s = (t[e] ||= []);
                        s.includes(a) || s.push(a);
                    };
                for (let t of e) for (let e of (a(t.kind, t), Reflect.get(t, m) || [])) a(e.kind, e);
                return t;
            }
            class g {
                getInitialState(e) {
                    (0, s.V1)(
                        this.#b(e),
                        d.J.formatMessage('Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?'),
                    );
                    let t = p(e);
                    return { initialHandlers: t, handlers: { ...t } };
                }
                currentHandlers() {
                    return Object.values(this.getState().handlers)
                        .flat()
                        .filter((e) => null != e);
                }
                getHandlersByKind(e) {
                    return this.getState().handlers[e] || [];
                }
                use(e) {
                    if (
                        ((0, s.V1)(
                            this.#b(e),
                            d.J.formatMessage(
                                '[MSW] Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?',
                            ),
                        ),
                        0 === e.length)
                    )
                        return;
                    let { handlers: t } = this.getState(),
                        a = p(e);
                    for (let e in a) {
                        let s = a[e],
                            r = t[e];
                        t[e] = r ? [...s, ...r] : s;
                    }
                    this.setState({ handlers: t });
                }
                reset(e) {
                    for (let t of ((0, s.V1)(
                        !(e.length > 0) || this.#b(e),
                        d.J.formatMessage('Failed to replace initial handlers during reset: invalid handlers. Did you forget to spread the handlers array?'),
                    ),
                    this.currentHandlers()))
                        'reset' in t && t.reset();
                    let { initialHandlers: t } = this.getState();
                    if (0 === e.length) return void this.setState({ handlers: { ...t } });
                    let a = p(e);
                    this.setState({ initialHandlers: a, handlers: { ...a } });
                }
                restore() {
                    for (let e of this.currentHandlers()) 'restore' in e && e.restore();
                }
                #b(e) {
                    return e.every((e) => !Array.isArray(e));
                }
            }
            class f extends g {
                #y;
                #v;
                constructor(e) {
                    super();
                    let t = this.getInitialState(e);
                    (this.#v = t.initialHandlers), (this.#y = t.handlers);
                }
                getState() {
                    return { initialHandlers: this.#v, handlers: this.#y };
                }
                setState(e) {
                    e.initialHandlers && (this.#v = e.initialHandlers), e.handlers && (this.#y = e.handlers);
                }
            }
            class k {
                subscriptions = [];
                dispose() {
                    let e,
                        t = [];
                    for (; (e = this.subscriptions.shift()); )
                        try {
                            e();
                        } catch (e) {
                            e instanceof Error && t.push(e);
                        }
                    t.length > 0 &&
                        console.error(
                            AggregateError(
                                t,
                                d.J.formatMessage(
                                    'Failed to dispose of some side effects. This is likely an issue with MSW, please report it on GitHub: https://github.com/mswjs/msw/issues',
                                ),
                            ),
                        );
                }
            }
            function b(e) {
                let t = [];
                for (let a of e) a instanceof Promise && t.push(a);
                if (t.length > 0) return Promise.all(t).then(() => {});
            }
            var y = ((e) => ((e[(e.DISABLED = 0)] = 'DISABLED'), (e[(e.ENABLED = 1)] = 'ENABLED'), e))(y || {}),
                v = a(80781);
            async function w(e) {
                try {
                    return [
                        null,
                        await e().catch((e) => {
                            throw e;
                        }),
                    ];
                } catch (e) {
                    return [e, null];
                }
            }
            class x {
                constructor(e, t) {
                    (this.protocol = e), (this.data = t), (this.events = new u());
                }
                events;
            }
            var S = a(37669);
            let j = async ({ request: e, requestId: t, handlers: a, resolutionContext: s }) => {
                let r = null,
                    i = null;
                for (let o of a) if ((null !== (i = await o.run({ request: e, requestId: t, resolutionContext: s })) && (r = o), i?.response)) break;
                return r ? { handler: r, parsedResult: i?.parsedResult, response: i?.response } : null;
            };
            var E = a(47787),
                C = a(89782);
            async function L(e, t) {
                let a = (0, C.f4)(t);
                a && (await E.C.setCookie(a, e.url));
            }
            var q = ((e) => ((e.passthrough = 'passthrough'), e))(q || {});
            async function z(e, t) {
                let a = async (t) => {
                        if ('bypass' === t) return;
                        let a = await e.getUnhandledMessage();
                        switch (t) {
                            case 'warn':
                                return d.J.warn('Warning: %s', a);
                            case 'error':
                                return d.J.error('Error: %s', a);
                        }
                    },
                    r = async (e) => {
                        if (
                            (s.V1.as(
                                d.G,
                                'bypass' === e || 'warn' === e || 'error' === e,
                                d.J.formatMessage(
                                    'Failed to react to an unhandled network frame: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
                                    e,
                                ),
                            ),
                            'bypass' !== e && (await a(e), 'error' === e))
                        )
                            return Promise.reject(
                                new d.G(d.J.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.')),
                            );
                    };
                return 'function' == typeof t
                    ? t({ frame: e, defaults: { warn: a.bind(null, 'warn'), error: a.bind(null, 'error') } })
                    : e instanceof P &&
                        (function (e) {
                            let t = new URL(e.url);
                            return (
                                !!(
                                    'file:' === t.protocol ||
                                    /(fonts\.googleapis\.com)/.test(t.hostname) ||
                                    /node_modules/.test(t.pathname) ||
                                    t.pathname.includes('@vite')
                                ) ||
                                /\.(s?css|less|m?jsx?|m?tsx?|html|ttf|otf|woff|woff2|eot|gif|jpe?g|png|avif|webp|svg|mp4|webm|ogg|mov|mp3|wav|ogg|flac|aac|pdf|txt|csv|json|xml|md|zip|tar|gz|rar|7z)$/i.test(
                                    t.pathname,
                                )
                            );
                        })(e.data.request)
                      ? void 0
                      : r(t);
            }
            class A extends l {
                requestId;
                request;
                constructor(e, t) {
                    super(e, {}), (this.requestId = t.requestId), (this.request = t.request);
                }
            }
            class O extends l {
                requestId;
                request;
                response;
                constructor(e, t) {
                    super(e, {}), (this.requestId = t.requestId), (this.request = t.request), (this.response = t.response);
                }
            }
            class I extends l {
                error;
                requestId;
                request;
                constructor(e, t) {
                    super(e, {}), (this.error = t.error), (this.requestId = t.requestId), (this.request = t.request);
                }
            }
            class P extends x {
                constructor(e) {
                    super('http', { id: e.id || (0, v.r_)(), request: e.request });
                }
                getHandlers(e) {
                    return e.getHandlersByKind('request');
                }
                async getUnhandledMessage() {
                    let { request: e } = this.data,
                        t = new URL(e.url),
                        a = (0, S.e)(t) + t.search,
                        s = null == e.body ? null : await e.clone().text(),
                        r = `

  \u2022 ${e.method} ${a}

${
    s
        ? `  \u2022 Request body: ${s}

`
        : ''
}`;
                    return `intercepted a request without a matching request handler:${r}If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`;
                }
                async resolve(e, t, a) {
                    let { id: s, request: r } = this.data,
                        i = a?.quiet ? null : r.clone();
                    if ((this.events.emit(new A('request:start', { requestId: s, request: r })), r.headers.get('accept')?.includes('msw/passthrough')))
                        return this.events.emit(new A('request:end', { requestId: s, request: r })), this.passthrough(), null;
                    let [o, n] = await w(() => j({ requestId: s, request: r, handlers: e, resolutionContext: { baseUrl: a?.baseUrl?.toString(), quiet: a?.quiet } }));
                    if (null != o)
                        return (
                            this.events.emit(new I('unhandledException', { error: o, requestId: s, request: r })) ||
                                (console.error(o),
                                d.J.error(
                                    'Encountered an unhandled exception during the handler lookup for "%s %s". Please see the original error above.',
                                    r.method,
                                    r.url,
                                )),
                            this.errorWith(o),
                            null
                        );
                    if (null == n)
                        return (
                            this.events.emit(new A('request:unhandled', { requestId: s, request: r })),
                            await z(this, t).then(
                                () => this.passthrough(),
                                (e) => this.errorWith(e),
                            ),
                            this.events.emit(new A('request:end', { requestId: s, request: r })),
                            !1
                        );
                    let { response: l, handler: u, parsedResult: c } = n;
                    if (
                        (this.events.emit(new A('request:match', { requestId: s, request: r })),
                        null == l || (302 === l.status && 'passthrough' === l.headers.get('x-msw-intention')))
                    )
                        return this.events.emit(new A('request:end', { requestId: s, request: r })), this.passthrough(), null;
                    let h = a?.quiet ? null : l.clone();
                    return (
                        await L(r, l),
                        this.respondWith(l),
                        this.events.emit(new A('request:end', { requestId: s, request: r })),
                        a?.quiet || u.log({ request: i, response: h, parsedResult: c }),
                        !0
                    );
                }
            }
            var T = a(33099);
            async function R(e, t, ...a) {
                let s = e.listeners(t);
                if (0 !== s.length) for (let t of s) await t.apply(e, a);
            }
            var D = a(74422);
            function W(e, t) {
                return Object.defineProperties(t, { target: { value: e, enumerable: !0, writable: !0 }, currentTarget: { value: e, enumerable: !0, writable: !0 } }), t;
            }
            let N = Symbol('kCancelable'),
                M = Symbol('kDefaultPrevented');
            var $ = class extends MessageEvent {
                    constructor(e, t) {
                        super(e, t), (this[N] = !!t.cancelable), (this[M] = !1);
                    }
                    get cancelable() {
                        return this[N];
                    }
                    set cancelable(e) {
                        this[N] = e;
                    }
                    get defaultPrevented() {
                        return this[M];
                    }
                    set defaultPrevented(e) {
                        this[M] = e;
                    }
                    preventDefault() {
                        this.cancelable && !this[M] && (this[M] = !0);
                    }
                },
                H = class extends Event {
                    constructor(e, t = {}) {
                        super(e, t),
                            (this.code = void 0 === t.code ? 0 : t.code),
                            (this.reason = void 0 === t.reason ? '' : t.reason),
                            (this.wasClean = void 0 !== t.wasClean && t.wasClean);
                    }
                },
                U = class extends H {
                    constructor(e, t = {}) {
                        super(e, t), (this[N] = !!t.cancelable), (this[M] = !1);
                    }
                    get cancelable() {
                        return this[N];
                    }
                    set cancelable(e) {
                        this[N] = e;
                    }
                    get defaultPrevented() {
                        return this[M];
                    }
                    set defaultPrevented(e) {
                        this[M] = e;
                    }
                    preventDefault() {
                        this.cancelable && !this[M] && (this[M] = !0);
                    }
                };
            let _ = Symbol('kEmitter'),
                F = Symbol('kBoundListener');
            var G = class {
                constructor(e, t) {
                    (this.socket = e),
                        (this.transport = t),
                        (this.id = (0, T.t)()),
                        (this.url = new URL(e.url)),
                        (this[_] = new EventTarget()),
                        this.transport.addEventListener('outgoing', (e) => {
                            let t = W(this.socket, new $('message', { data: e.data, origin: e.origin, cancelable: !0 }));
                            this[_].dispatchEvent(t), t.defaultPrevented && e.preventDefault();
                        }),
                        this.transport.addEventListener('close', (e) => {
                            this[_].dispatchEvent(W(this.socket, new H('close', e)));
                        });
                }
                addEventListener(e, t, a) {
                    if (!Reflect.has(t, F)) {
                        let e = t.bind(this.socket);
                        Object.defineProperty(t, F, { value: e, enumerable: !1, configurable: !1 });
                    }
                    this[_].addEventListener(e, Reflect.get(t, F), a);
                }
                removeEventListener(e, t, a) {
                    this[_].removeEventListener(e, Reflect.get(t, F), a);
                }
                send(e) {
                    this.transport.send(e);
                }
                close(e, t) {
                    this.transport.close(e, t);
                }
            };
            let B = 'InvalidAccessError: close code out of user configurable range',
                J = Symbol('kPassthroughPromise'),
                V = Symbol('kOnSend'),
                Y = Symbol('kClose');
            var X = class extends EventTarget {
                static {
                    this.CONNECTING = 0;
                }
                static {
                    this.OPEN = 1;
                }
                static {
                    this.CLOSING = 2;
                }
                static {
                    this.CLOSED = 3;
                }
                constructor(e, t) {
                    super(),
                        (this.CONNECTING = 0),
                        (this.OPEN = 1),
                        (this.CLOSING = 2),
                        (this.CLOSED = 3),
                        (this._onopen = null),
                        (this._onmessage = null),
                        (this._onerror = null),
                        (this._onclose = null),
                        (this.url = (function e(t) {
                            if ('string' == typeof t) return e(new URL(t, 'undefined' != typeof location ? location.href : void 0));
                            if (
                                ('http:' === t.protocol ? (t.protocol = 'ws:') : 'https:' === t.protocol && (t.protocol = 'wss:'),
                                'ws:' !== t.protocol && 'wss:' !== t.protocol)
                            )
                                throw SyntaxError(
                                    `Failed to construct 'WebSocket': The URL's scheme must be either 'http', 'https', 'ws', or 'wss'. '${t.protocol}' is not allowed.`,
                                );
                            if ('' !== t.hash)
                                throw SyntaxError(
                                    `Failed to construct 'WebSocket': The URL contains a fragment identifier ('${t.hash}'). Fragment identifiers are not allowed in WebSocket URLs.`,
                                );
                            return t.href;
                        })(e)),
                        (this.protocol = ''),
                        (this.extensions = ''),
                        (this.binaryType = 'blob'),
                        (this.readyState = this.CONNECTING),
                        (this.bufferedAmount = 0),
                        (this[J] = new D.Z()),
                        queueMicrotask(async () => {
                            (await this[J]) ||
                                ((this.protocol = 'string' == typeof t ? t : Array.isArray(t) && t.length > 0 ? t[0] : ''),
                                this.readyState === this.CONNECTING && ((this.readyState = this.OPEN), this.dispatchEvent(W(this, new Event('open')))));
                        });
                }
                set onopen(e) {
                    this.removeEventListener('open', this._onopen), (this._onopen = e), null !== e && this.addEventListener('open', e);
                }
                get onopen() {
                    return this._onopen;
                }
                set onmessage(e) {
                    this.removeEventListener('message', this._onmessage), (this._onmessage = e), null !== e && this.addEventListener('message', e);
                }
                get onmessage() {
                    return this._onmessage;
                }
                set onerror(e) {
                    this.removeEventListener('error', this._onerror), (this._onerror = e), null !== e && this.addEventListener('error', e);
                }
                get onerror() {
                    return this._onerror;
                }
                set onclose(e) {
                    this.removeEventListener('close', this._onclose), (this._onclose = e), null !== e && this.addEventListener('close', e);
                }
                get onclose() {
                    return this._onclose;
                }
                send(e) {
                    var t;
                    if (this.readyState === this.CONNECTING) throw (this.close(), new DOMException('InvalidStateError'));
                    this.readyState !== this.CLOSING &&
                        this.readyState !== this.CLOSED &&
                        ((this.bufferedAmount += 'string' == typeof (t = e) ? t.length : t instanceof Blob ? t.size : t.byteLength),
                        queueMicrotask(() => {
                            (this.bufferedAmount = 0), this[V]?.(e);
                        }));
                }
                close(e = 1e3, t) {
                    (0, s.V1)(e, B), (0, s.V1)(1e3 === e || (e >= 3e3 && e <= 4999), B), this[Y](e, t);
                }
                [Y](e = 1e3, t, a = !0) {
                    this.readyState !== this.CLOSING &&
                        this.readyState !== this.CLOSED &&
                        ((this.readyState = this.CLOSING),
                        queueMicrotask(() => {
                            (this.readyState = this.CLOSED),
                                this.dispatchEvent(W(this, new H('close', { code: e, reason: t, wasClean: a }))),
                                (this._onopen = null),
                                (this._onmessage = null),
                                (this._onerror = null),
                                (this._onclose = null);
                        }));
                }
                addEventListener(e, t, a) {
                    return super.addEventListener(e, t, a);
                }
                removeEventListener(e, t, a) {
                    return super.removeEventListener(e, t, a);
                }
            };
            let K = Symbol('kEmitter'),
                Q = Symbol('kBoundListener'),
                Z = Symbol('kSend');
            var ee = class {
                    constructor(e, t, a) {
                        (this.client = e),
                            (this.transport = t),
                            (this.createConnection = a),
                            (this[K] = new EventTarget()),
                            (this.mockCloseController = new AbortController()),
                            (this.realCloseController = new AbortController()),
                            this.transport.addEventListener('outgoing', (e) => {
                                void 0 !== this.realWebSocket &&
                                    queueMicrotask(() => {
                                        e.defaultPrevented || this[Z](e.data);
                                    });
                            }),
                            this.transport.addEventListener('incoming', this.handleIncomingMessage.bind(this));
                    }
                    get socket() {
                        return (
                            (0, s.V1)(
                                this.realWebSocket,
                                'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?',
                            ),
                            this.realWebSocket
                        );
                    }
                    connect() {
                        (0, s.V1)(
                            !this.realWebSocket || this.realWebSocket.readyState !== WebSocket.OPEN,
                            'Failed to call "connect()" on the original WebSocket instance: the connection already open',
                        );
                        let e = this.createConnection();
                        (e.binaryType = this.client.binaryType),
                            e.addEventListener(
                                'open',
                                (e) => {
                                    this[K].dispatchEvent(W(this.realWebSocket, new Event('open', e)));
                                },
                                { once: !0 },
                            ),
                            e.addEventListener('message', (e) => {
                                this.transport.dispatchEvent(W(this.realWebSocket, new MessageEvent('incoming', { data: e.data, origin: e.origin })));
                            }),
                            this.client.addEventListener(
                                'close',
                                (e) => {
                                    this.handleMockClose(e);
                                },
                                { signal: this.mockCloseController.signal },
                            ),
                            e.addEventListener(
                                'close',
                                (e) => {
                                    this.handleRealClose(e);
                                },
                                { signal: this.realCloseController.signal },
                            ),
                            e.addEventListener('error', () => {
                                let t = W(e, new Event('error', { cancelable: !0 }));
                                this[K].dispatchEvent(t), t.defaultPrevented || this.client.dispatchEvent(W(this.client, new Event('error')));
                            }),
                            (this.realWebSocket = e);
                    }
                    addEventListener(e, t, a) {
                        if (!Reflect.has(t, Q)) {
                            let e = t.bind(this.client);
                            Object.defineProperty(t, Q, { value: e, enumerable: !1 });
                        }
                        this[K].addEventListener(e, Reflect.get(t, Q), a);
                    }
                    removeEventListener(e, t, a) {
                        this[K].removeEventListener(e, Reflect.get(t, Q), a);
                    }
                    send(e) {
                        this[Z](e);
                    }
                    [Z](e) {
                        let { realWebSocket: t } = this;
                        if (
                            ((0, s.V1)(
                                t,
                                'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?',
                                this.client.url,
                            ),
                            t.readyState !== WebSocket.CLOSING && t.readyState !== WebSocket.CLOSED)
                        ) {
                            if (t.readyState === WebSocket.CONNECTING)
                                return void t.addEventListener(
                                    'open',
                                    () => {
                                        t.send(e);
                                    },
                                    { once: !0 },
                                );
                            t.send(e);
                        }
                    }
                    close() {
                        let { realWebSocket: e } = this;
                        (0, s.V1)(
                            e,
                            'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?',
                            this.client.url,
                        ),
                            this.realCloseController.abort(),
                            e.readyState !== WebSocket.CLOSING &&
                                e.readyState !== WebSocket.CLOSED &&
                                (e.close(),
                                queueMicrotask(() => {
                                    this[K].dispatchEvent(W(this.realWebSocket, new U('close', { code: 1e3, cancelable: !0 })));
                                }));
                    }
                    handleIncomingMessage(e) {
                        let t = W(e.target, new $('message', { data: e.data, origin: e.origin, cancelable: !0 }));
                        this[K].dispatchEvent(t),
                            t.defaultPrevented || this.client.dispatchEvent(W(this.client, new MessageEvent('message', { data: e.data, origin: e.origin })));
                    }
                    handleMockClose(e) {
                        this.realWebSocket && this.realWebSocket.close();
                    }
                    handleRealClose(e) {
                        this.mockCloseController.abort();
                        let t = W(this.realWebSocket, new U('close', { code: e.code, reason: e.reason, wasClean: e.wasClean, cancelable: !0 }));
                        this[K].dispatchEvent(t), t.defaultPrevented || this.client[Y](e.code, e.reason);
                    }
                },
                et = class extends EventTarget {
                    constructor(e) {
                        super(),
                            (this.socket = e),
                            this.socket.addEventListener('close', (e) => {
                                this.dispatchEvent(W(this.socket, new H('close', e)));
                            }),
                            (this.socket[V] = (e) => {
                                this.dispatchEvent(W(this.socket, new $('outgoing', { data: e, origin: this.socket.url, cancelable: !0 })));
                            });
                    }
                    addEventListener(e, t, a) {
                        return super.addEventListener(e, t, a);
                    }
                    dispatchEvent(e) {
                        return super.dispatchEvent(e);
                    }
                    send(e) {
                        queueMicrotask(() => {
                            if (this.socket.readyState === this.socket.CLOSING || this.socket.readyState === this.socket.CLOSED) return;
                            let t = () => {
                                this.socket.dispatchEvent(W(this.socket, new MessageEvent('message', { data: e, origin: this.socket.url })));
                            };
                            this.socket.readyState === this.socket.CONNECTING
                                ? this.socket.addEventListener(
                                      'open',
                                      () => {
                                          t();
                                      },
                                      { once: !0 },
                                  )
                                : t();
                        });
                    }
                    close(e, t) {
                        this.socket[Y](e, t);
                    }
                };
            (class e extends T.r {
                static {
                    this.symbol = Symbol('websocket');
                }
                constructor() {
                    super(e.symbol);
                }
                checkEnvironment() {
                    var e = 'WebSocket';
                    let t = Object.getOwnPropertyDescriptor(globalThis, e);
                    return (
                        void 0 !== t &&
                        ('function' != typeof t.get || void 0 !== t.get()) &&
                        (void 0 !== t.get || null != t.value) &&
                        (void 0 !== t.set ||
                            !!t.configurable ||
                            (console.error(
                                `[MSW] Failed to apply interceptor: the global \`${e}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`,
                            ),
                            !1))
                    );
                }
                setup() {
                    let e = Object.getOwnPropertyDescriptor(globalThis, 'WebSocket');
                    Object.defineProperty(globalThis, 'WebSocket', {
                        value: new Proxy(globalThis.WebSocket, {
                            construct: (e, t, a) => {
                                let [s, r] = t,
                                    i = () => Reflect.construct(e, t, a),
                                    o = new X(s, r),
                                    n = new et(o);
                                return (
                                    queueMicrotask(async () => {
                                        try {
                                            let e = new ee(o, n, i),
                                                t = this.emitter.listenerCount('connection') > 0;
                                            await R(this.emitter, 'connection', { client: new G(o, n), server: e, info: { protocols: r } }),
                                                t
                                                    ? o[J].resolve(!1)
                                                    : (o[J].resolve(!0),
                                                      e.connect(),
                                                      e.addEventListener('open', () => {
                                                          o.dispatchEvent(W(o, new Event('open'))), e.realWebSocket && (o.protocol = e.realWebSocket.protocol);
                                                      }));
                                        } catch (e) {
                                            e instanceof Error &&
                                                (o.dispatchEvent(new Event('error')),
                                                o.readyState !== WebSocket.CLOSING && o.readyState !== WebSocket.CLOSED && o[Y](1011, e.message, !1),
                                                console.error(e));
                                        }
                                    }),
                                    o
                                );
                            },
                        }),
                        configurable: !0,
                    }),
                        this.subscriptions.push(() => {
                            Object.defineProperty(globalThis, 'WebSocket', e);
                        });
                }
            }),
                a(24171),
                Symbol('kEmitter'),
                Symbol('kSender');
            let ea = Symbol('kConnect'),
                es = Symbol('kAutoConnect'),
                er = Symbol('kStopPropagationPatched'),
                ei = Symbol('KOnStopPropagation');
            class eo extends l {
                url;
                protocols;
                constructor(e, t) {
                    super(e, {}), (this.url = t.url), (this.protocols = t.protocols);
                }
            }
            class en extends l {
                url;
                protocols;
                error;
                constructor(e, t) {
                    super(e, {}), (this.url = t.url), (this.protocols = t.protocols), (this.error = t.error);
                }
            }
            class el extends x {
                constructor(e) {
                    super('ws', { connection: e.connection });
                }
                getHandlers(e) {
                    return e.getHandlersByKind('websocket');
                }
                async resolve(e, t, a) {
                    let { connection: s } = this.data;
                    if ((this.events.emit(new eo('connection', { url: s.client.url, protocols: s.info.protocols })), 0 === e.length))
                        return (
                            await z(this, t).then(
                                () => this.passthrough(),
                                (e) => this.errorWith(e),
                            ),
                            !1
                        );
                    let r = !1;
                    for (let t of e) {
                        let e = await t.run(s, { baseUrl: a?.baseUrl?.toString(), [es]: !1 });
                        if (!e) continue;
                        r = !0;
                        let i = a?.quiet ? void 0 : t.log(s);
                        try {
                            t[ea](e) || i?.();
                        } catch (e) {
                            throw (
                                (this.events.emit(new en('unhandledException', { error: e, url: s.client.url, protocols: s.info.protocols })) ||
                                    (console.error(e),
                                    d.J.error(
                                        'Encountered an unhandled exception during the handler lookup for "%s". Please see the original error above.',
                                        s.client.url,
                                    )),
                                e)
                            );
                        }
                    }
                    return (
                        !!r ||
                        (await z(this, t).then(
                            () => this.passthrough(),
                            (e) => this.errorWith(e),
                        ),
                        !1)
                    );
                }
                async getUnhandledMessage() {
                    let { connection: e } = this.data,
                        t = `

  \u2022 ${e.client.url}

`;
                    return `intercepted a WebSocket connection without a matching event handler:${t}If you still wish to intercept this unhandled connection, please create an event handler for it.
Read more: https://mswjs.io/docs/websocket`;
                }
            }
            class eu extends h {
                #w;
                #x;
                constructor(e) {
                    super(), (this.#w = new v.qL({ name: 'interceptor-source', interceptors: e.interceptors })), (this.#x = new Map());
                }
                enable() {
                    this.#w.apply(), this.#w.on('request', this.#S.bind(this)).on('response', this.#j.bind(this)).on('connection', this.#E.bind(this));
                }
                disable() {
                    super.disable(), this.#w.dispose(), this.#x.clear();
                }
                async #S({ requestId: e, request: t, controller: a }) {
                    let s = new ec({ id: e, request: t, controller: a });
                    this.#x.set(e, s), await this.queue(s);
                }
                async #j({ requestId: e, request: t, response: a, isMockedResponse: s }) {
                    let r = this.#x.get(e);
                    this.#x.delete(e),
                        null != r &&
                            queueMicrotask(() => {
                                try {
                                    r.events.emit(new O(s ? 'response:mocked' : 'response:bypass', { requestId: e, request: t, response: a }));
                                } finally {
                                    r.events.removeAllListeners();
                                }
                            });
                }
                async #E(e) {
                    await this.queue(new eh({ connection: e }));
                }
            }
            class ec extends P {
                #C;
                constructor(e) {
                    super({ id: e.id, request: e.request }), (this.#C = e.controller);
                }
                passthrough() {
                    var e = this.data.request;
                    let t = e.headers.get('accept');
                    if (t) {
                        let a = t.replace(/(,\s+)?msw\/passthrough/, '');
                        a ? e.headers.set('accept', a) : e.headers.delete('accept');
                    }
                }
                respondWith(e) {
                    e && this.#C.respondWith(e);
                }
                errorWith(e) {
                    if (e instanceof Response) return this.respondWith(e);
                    throw (e instanceof d.G && this.#C.errorWith(e), e);
                }
            }
            class eh extends el {
                constructor(e) {
                    super({ connection: e.connection }),
                        e.connection.client.addEventListener(
                            'close',
                            () => {
                                this.events.removeAllListeners();
                            },
                            { once: !0 },
                        );
                }
                errorWith(e) {
                    if (e instanceof Error) {
                        let { client: t } = this.data.connection,
                            a = new Event('error');
                        Object.defineProperty(a, 'cause', { enumerable: !0, configurable: !1, value: e }), t.socket.dispatchEvent(a);
                    }
                }
                passthrough() {
                    this.data.connection.server.connect();
                }
            }
            var ed = a(61034),
                em = a(17633),
                ep = a(49124),
                eg = /(%?)(%([sdijo]))/g;
            function ef(e, ...t) {
                if (0 === t.length) return e;
                let a = 0,
                    s = e.replace(eg, (e, s, r, i) => {
                        let o = (function (e, t) {
                            switch (t) {
                                case 's':
                                    return e;
                                case 'd':
                                case 'i':
                                    return Number(e);
                                case 'j':
                                    return JSON.stringify(e);
                                case 'o': {
                                    if ('string' == typeof e) return e;
                                    let t = JSON.stringify(e);
                                    if ('{}' === t || '[]' === t || /^\[object .+?\]$/.test(t)) return e;
                                    return t;
                                }
                            }
                        })(t[a], i);
                        return s ? e : (a++, o);
                    });
                return a < t.length && (s += ` ${t.slice(a).join(' ')}`), (s = s.replace(/%{2,2}/g, '%'));
            }
            var ek = class extends Error {
                    constructor(e, ...t) {
                        super(e),
                            (this.message = e),
                            (this.name = 'Invariant Violation'),
                            (this.message = ef(e, ...t)),
                            (function (e) {
                                if (!e.stack) return;
                                let t = e.stack.split('\n');
                                t.splice(1, 2), (e.stack = t.join('\n'));
                            })(this);
                    }
                },
                eb = (e, t, ...a) => {
                    if (!e) throw new ek(t, ...a);
                };
            function ey() {
                if ('undefined' != typeof navigator && 'ReactNative' === navigator.product) return !0;
                if (void 0 !== ep) {
                    let e = ep.type;
                    return 'renderer' !== e && 'worker' !== e && !!(ep.versions && ep.versions.node);
                }
                return !1;
            }
            eb.as = (e, t, a, ...s) => {
                if (!t) {
                    let t,
                        r = 0 === s.length ? a : ef(a, ...s);
                    try {
                        t = Reflect.construct(e, [r]);
                    } catch (a) {
                        t = e(r);
                    }
                    throw t;
                }
            };
            var ev = Object.defineProperty,
                ew = {};
            function ex(e) {
                return `\x1b[33m${e}\x1b[0m`;
            }
            function eS(e) {
                return `\x1b[34m${e}\x1b[0m`;
            }
            function ej(e) {
                return `\x1b[90m${e}\x1b[0m`;
            }
            function eE(e) {
                return `\x1b[31m${e}\x1b[0m`;
            }
            function eC(e) {
                return `\x1b[32m${e}\x1b[0m`;
            }
            ((e, t) => {
                for (var a in t) ev(e, a, { get: t[a], enumerable: !0 });
            })(ew, { blue: () => eS, gray: () => ej, green: () => eC, red: () => eE, yellow: () => ex });
            var eL = ey(),
                eq = class {
                    constructor(e) {
                        (this.name = e), (this.prefix = `[${this.name}]`);
                        let t = eT('DEBUG'),
                            a = eT('LOG_LEVEL');
                        '1' === t || 'true' === t || (void 0 !== t && this.name.startsWith(t))
                            ? ((this.debug = eR(a, 'debug') ? eA : this.debug),
                              (this.info = eR(a, 'info') ? eA : this.info),
                              (this.success = eR(a, 'success') ? eA : this.success),
                              (this.warning = eR(a, 'warning') ? eA : this.warning),
                              (this.error = eR(a, 'error') ? eA : this.error))
                            : ((this.info = eA), (this.success = eA), (this.warning = eA), (this.error = eA), (this.only = eA));
                    }
                    prefix;
                    extend(e) {
                        return new eq(`${this.name}:${e}`);
                    }
                    debug(e, ...t) {
                        this.logEntry({ level: 'debug', message: ej(e), positionals: t, prefix: this.prefix, colors: { prefix: 'gray' } });
                    }
                    info(e, ...t) {
                        this.logEntry({ level: 'info', message: e, positionals: t, prefix: this.prefix, colors: { prefix: 'blue' } });
                        let a = new ez();
                        return (e, ...t) => {
                            a.measure(),
                                this.logEntry({
                                    level: 'info',
                                    message: `${e} ${ej(`${a.deltaTime}ms`)}`,
                                    positionals: t,
                                    prefix: this.prefix,
                                    colors: { prefix: 'blue' },
                                });
                        };
                    }
                    success(e, ...t) {
                        this.logEntry({ level: 'info', message: e, positionals: t, prefix: `\u2714 ${this.prefix}`, colors: { timestamp: 'green', prefix: 'green' } });
                    }
                    warning(e, ...t) {
                        this.logEntry({
                            level: 'warning',
                            message: e,
                            positionals: t,
                            prefix: `\u26A0 ${this.prefix}`,
                            colors: { timestamp: 'yellow', prefix: 'yellow' },
                        });
                    }
                    error(e, ...t) {
                        this.logEntry({ level: 'error', message: e, positionals: t, prefix: `\u2716 ${this.prefix}`, colors: { timestamp: 'red', prefix: 'red' } });
                    }
                    only(e) {
                        e();
                    }
                    createEntry(e, t) {
                        return { timestamp: new Date(), level: e, message: t };
                    }
                    logEntry(e) {
                        let { level: t, message: a, prefix: s, colors: r, positionals: i = [] } = e,
                            o = this.createEntry(t, a),
                            n = r?.timestamp || 'gray',
                            l = r?.prefix || 'gray',
                            u = { timestamp: ew[n], prefix: ew[l] };
                        this.getWriter(t)(
                            [u.timestamp(this.formatTimestamp(o.timestamp))]
                                .concat(null != s ? u.prefix(s) : [])
                                .concat(eD(a))
                                .join(' '),
                            ...i.map(eD),
                        );
                    }
                    formatTimestamp(e) {
                        return `${e.toLocaleTimeString('en-GB')}:${e.getMilliseconds()}`;
                    }
                    getWriter(e) {
                        switch (e) {
                            case 'debug':
                            case 'success':
                            case 'info':
                                return eO;
                            case 'warning':
                                return eI;
                            case 'error':
                                return eP;
                        }
                    }
                },
                ez = class {
                    startTime;
                    endTime;
                    deltaTime;
                    constructor() {
                        this.startTime = performance.now();
                    }
                    measure() {
                        this.endTime = performance.now();
                        let e = this.endTime - this.startTime;
                        this.deltaTime = e.toFixed(2);
                    }
                },
                eA = () => void 0;
            function eO(e, ...t) {
                if (eL) return void ep.stdout.write(ef(e, ...t) + '\n');
                console.log(e, ...t);
            }
            function eI(e, ...t) {
                if (eL) return void ep.stderr.write(ef(e, ...t) + '\n');
                console.warn(e, ...t);
            }
            function eP(e, ...t) {
                if (eL) return void ep.stderr.write(ef(e, ...t) + '\n');
                console.error(e, ...t);
            }
            function eT(e) {
                return eL ? ep.env[e] : globalThis[e]?.toString();
            }
            function eR(e, t) {
                return void 0 !== e && e !== t;
            }
            function eD(e) {
                return void 0 === e ? 'undefined' : null === e ? 'null' : 'string' == typeof e ? e : 'object' == typeof e ? JSON.stringify(e) : e.toString();
            }
            var eW = class extends Error {
                    constructor(e, t, a) {
                        super(`Possible EventEmitter memory leak detected. ${a} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),
                            (this.emitter = e),
                            (this.type = t),
                            (this.count = a),
                            (this.name = 'MaxListenersExceededWarning');
                    }
                },
                eN = class {
                    static listenerCount(e, t) {
                        return e.listenerCount(t);
                    }
                    constructor() {
                        (this.events = new Map()), (this.maxListeners = eN.defaultMaxListeners), (this.hasWarnedAboutPotentialMemoryLeak = !1);
                    }
                    _emitInternalEvent(e, t, a) {
                        this.emit(e, t, a);
                    }
                    _getListeners(e) {
                        return Array.prototype.concat.apply([], this.events.get(e)) || [];
                    }
                    _removeListener(e, t) {
                        let a = e.indexOf(t);
                        return a > -1 && e.splice(a, 1), [];
                    }
                    _wrapOnceListener(e, t) {
                        let a = (...s) => (this.removeListener(e, a), t.apply(this, s));
                        return Object.defineProperty(a, 'name', { value: t.name }), a;
                    }
                    setMaxListeners(e) {
                        return (this.maxListeners = e), this;
                    }
                    getMaxListeners() {
                        return this.maxListeners;
                    }
                    eventNames() {
                        return Array.from(this.events.keys());
                    }
                    emit(e, ...t) {
                        let a = this._getListeners(e);
                        return (
                            a.forEach((e) => {
                                e.apply(this, t);
                            }),
                            a.length > 0
                        );
                    }
                    addListener(e, t) {
                        this._emitInternalEvent('newListener', e, t);
                        let a = this._getListeners(e).concat(t);
                        return (
                            this.events.set(e, a),
                            this.maxListeners > 0 &&
                                this.listenerCount(e) > this.maxListeners &&
                                !this.hasWarnedAboutPotentialMemoryLeak &&
                                ((this.hasWarnedAboutPotentialMemoryLeak = !0), console.warn(new eW(this, e, this.listenerCount(e)))),
                            this
                        );
                    }
                    on(e, t) {
                        return this.addListener(e, t);
                    }
                    once(e, t) {
                        return this.addListener(e, this._wrapOnceListener(e, t));
                    }
                    prependListener(e, t) {
                        let a = this._getListeners(e);
                        if (a.length > 0) {
                            let s = [t].concat(a);
                            this.events.set(e, s);
                        } else this.events.set(e, a.concat(t));
                        return this;
                    }
                    prependOnceListener(e, t) {
                        return this.prependListener(e, this._wrapOnceListener(e, t));
                    }
                    removeListener(e, t) {
                        let a = this._getListeners(e);
                        return a.length > 0 && (this._removeListener(a, t), this.events.set(e, a), this._emitInternalEvent('removeListener', e, t)), this;
                    }
                    off(e, t) {
                        return this.removeListener(e, t);
                    }
                    removeAllListeners(e) {
                        return e ? this.events.delete(e) : this.events.clear(), this;
                    }
                    listeners(e) {
                        return Array.from(this._getListeners(e));
                    }
                    listenerCount(e) {
                        return this._getListeners(e).length;
                    }
                    rawListeners(e) {
                        return this.listeners(e);
                    }
                };
            function eM(e) {
                return globalThis[e] || void 0;
            }
            eN.defaultMaxListeners = 10;
            var e$ = (function (e) {
                    return (e.INACTIVE = 'INACTIVE'), (e.APPLYING = 'APPLYING'), (e.APPLIED = 'APPLIED'), (e.DISPOSING = 'DISPOSING'), (e.DISPOSED = 'DISPOSED'), e;
                })({}),
                eH = class {
                    constructor(e) {
                        (this.symbol = e),
                            (this.readyState = e$.INACTIVE),
                            (this.emitter = new eN()),
                            (this.subscriptions = []),
                            (this.logger = new eq(e.description)),
                            this.emitter.setMaxListeners(0),
                            this.logger.info('constructing the interceptor...');
                    }
                    checkEnvironment() {
                        return !0;
                    }
                    apply() {
                        let e = this.logger.extend('apply');
                        if ((e.info('applying the interceptor...'), this.readyState === e$.APPLIED)) return void e.info('intercepted already applied!');
                        if (!this.checkEnvironment()) return void e.info('the interceptor cannot be applied in this environment!');
                        this.readyState = e$.APPLYING;
                        let t = this.getInstance();
                        if (t) {
                            e.info('found a running instance, reusing...'),
                                (this.on = (a, s) => (
                                    e.info('proxying the "%s" listener', a),
                                    t.emitter.addListener(a, s),
                                    this.subscriptions.push(() => {
                                        t.emitter.removeListener(a, s), e.info('removed proxied "%s" listener!', a);
                                    }),
                                    this
                                )),
                                (this.readyState = e$.APPLIED);
                            return;
                        }
                        e.info('no running instance found, setting up a new instance...'), this.setup(), this.setInstance(), (this.readyState = e$.APPLIED);
                    }
                    setup() {}
                    on(e, t) {
                        let a = this.logger.extend('on');
                        return (
                            this.readyState === e$.DISPOSING || this.readyState === e$.DISPOSED
                                ? a.info('cannot listen to events, already disposed!')
                                : (a.info('adding "%s" event listener:', e, t), this.emitter.on(e, t)),
                            this
                        );
                    }
                    once(e, t) {
                        return this.emitter.once(e, t), this;
                    }
                    off(e, t) {
                        return this.emitter.off(e, t), this;
                    }
                    removeAllListeners(e) {
                        return this.emitter.removeAllListeners(e), this;
                    }
                    dispose() {
                        let e = this.logger.extend('dispose');
                        if (this.readyState === e$.DISPOSED) return void e.info('cannot dispose, already disposed!');
                        if ((e.info('disposing the interceptor...'), (this.readyState = e$.DISPOSING), !this.getInstance()))
                            return void e.info('no interceptors running, skipping dispose...');
                        if ((this.clearInstance(), e.info('global symbol deleted:', eM(this.symbol)), this.subscriptions.length > 0)) {
                            for (let t of (e.info('disposing of %d subscriptions...', this.subscriptions.length), this.subscriptions)) t();
                            (this.subscriptions = []), e.info('disposed of all subscriptions!', this.subscriptions.length);
                        }
                        this.emitter.removeAllListeners(), e.info('destroyed the listener!'), (this.readyState = e$.DISPOSED);
                    }
                    getInstance() {
                        let e = eM(this.symbol);
                        return this.logger.info('retrieved global instance:', e?.constructor?.name), e;
                    }
                    setInstance() {
                        var e;
                        (e = this.symbol), (globalThis[e] = this), this.logger.info('set global instance!', this.symbol.description);
                    }
                    clearInstance() {
                        var e;
                        (e = this.symbol), delete globalThis[e], this.logger.info('cleared global instance!', this.symbol.description);
                    }
                };
            function eU() {
                return Math.random().toString(16).slice(2);
            }
            async function e_(e, t, ...a) {
                let s = e.listeners(t);
                if (0 !== s.length) for (let t of s) await t.apply(e, a);
            }
            function eF(e) {
                let t = Object.getOwnPropertyDescriptor(globalThis, e);
                return (
                    void 0 !== t &&
                    ('function' != typeof t.get || void 0 !== t.get()) &&
                    (void 0 !== t.get || null != t.value) &&
                    (void 0 !== t.set ||
                        !!t.configurable ||
                        (console.error(
                            `[MSW] Failed to apply interceptor: the global \`${e}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`,
                        ),
                        !1))
                );
            }
            var eG = class extends Promise {
                #L;
                resolve;
                reject;
                constructor(e = null) {
                    let t = (function () {
                        let e = (t, a) => {
                            (e.state = 'pending'),
                                (e.resolve = (a) =>
                                    'pending' !== e.state
                                        ? void 0
                                        : ((e.result = a), t(a instanceof Promise ? a : Promise.resolve(a).then((t) => ((e.state = 'fulfilled'), t))))),
                                (e.reject = (t) => {
                                    if ('pending' === e.state)
                                        return (
                                            queueMicrotask(() => {
                                                e.state = 'rejected';
                                            }),
                                            a((e.rejectionReason = t))
                                        );
                                });
                        };
                        return e;
                    })();
                    super((a, s) => {
                        t(a, s), e?.(t.resolve, t.reject);
                    }),
                        (this.#L = t),
                        (this.resolve = this.#L.resolve),
                        (this.reject = this.#L.reject);
                }
                get state() {
                    return this.#L.state;
                }
                get rejectionReason() {
                    return this.#L.rejectionReason;
                }
                then(e, t) {
                    return this.#q(super.then(e, t));
                }
                catch(e) {
                    return this.#q(super.catch(e));
                }
                finally(e) {
                    return this.#q(super.finally(e));
                }
                #q(e) {
                    return Object.defineProperties(e, { resolve: { configurable: !0, value: this.resolve }, reject: { configurable: !0, value: this.reject } });
                }
            };
            function eB(e, t) {
                return Object.defineProperties(t, { target: { value: e, enumerable: !0, writable: !0 }, currentTarget: { value: e, enumerable: !0, writable: !0 } }), t;
            }
            var eJ = Symbol('kCancelable'),
                eV = Symbol('kDefaultPrevented'),
                eY = class extends MessageEvent {
                    constructor(e, t) {
                        super(e, t), (this[eJ] = !!t.cancelable), (this[eV] = !1);
                    }
                    get cancelable() {
                        return this[eJ];
                    }
                    set cancelable(e) {
                        this[eJ] = e;
                    }
                    get defaultPrevented() {
                        return this[eV];
                    }
                    set defaultPrevented(e) {
                        this[eV] = e;
                    }
                    preventDefault() {
                        this.cancelable && !this[eV] && (this[eV] = !0);
                    }
                },
                eX = class extends Event {
                    constructor(e, t = {}) {
                        super(e, t),
                            (this.code = void 0 === t.code ? 0 : t.code),
                            (this.reason = void 0 === t.reason ? '' : t.reason),
                            (this.wasClean = void 0 !== t.wasClean && t.wasClean);
                    }
                },
                eK = class extends eX {
                    constructor(e, t = {}) {
                        super(e, t), (this[eJ] = !!t.cancelable), (this[eV] = !1);
                    }
                    get cancelable() {
                        return this[eJ];
                    }
                    set cancelable(e) {
                        this[eJ] = e;
                    }
                    get defaultPrevented() {
                        return this[eV];
                    }
                    set defaultPrevented(e) {
                        this[eV] = e;
                    }
                    preventDefault() {
                        this.cancelable && !this[eV] && (this[eV] = !0);
                    }
                },
                eQ = Symbol('kEmitter'),
                eZ = Symbol('kBoundListener'),
                e1 = class {
                    constructor(e, t) {
                        (this.socket = e),
                            (this.transport = t),
                            (this.id = eU()),
                            (this.url = new URL(e.url)),
                            (this[eQ] = new EventTarget()),
                            this.transport.addEventListener('outgoing', (e) => {
                                let t = eB(this.socket, new eY('message', { data: e.data, origin: e.origin, cancelable: !0 }));
                                this[eQ].dispatchEvent(t), t.defaultPrevented && e.preventDefault();
                            }),
                            this.transport.addEventListener('close', (e) => {
                                this[eQ].dispatchEvent(eB(this.socket, new eX('close', e)));
                            });
                    }
                    addEventListener(e, t, a) {
                        if (!Reflect.has(t, eZ)) {
                            let e = t.bind(this.socket);
                            Object.defineProperty(t, eZ, { value: e, enumerable: !1, configurable: !1 });
                        }
                        this[eQ].addEventListener(e, Reflect.get(t, eZ), a);
                    }
                    removeEventListener(e, t, a) {
                        this[eQ].removeEventListener(e, Reflect.get(t, eZ), a);
                    }
                    send(e) {
                        this.transport.send(e);
                    }
                    close(e, t) {
                        this.transport.close(e, t);
                    }
                },
                e0 = 'InvalidAccessError: close code out of user configurable range',
                e2 = Symbol('kPassthroughPromise'),
                e3 = Symbol('kOnSend'),
                e4 = Symbol('kClose'),
                e5 = class extends EventTarget {
                    static {
                        this.CONNECTING = 0;
                    }
                    static {
                        this.OPEN = 1;
                    }
                    static {
                        this.CLOSING = 2;
                    }
                    static {
                        this.CLOSED = 3;
                    }
                    constructor(e, t) {
                        super(),
                            (this.CONNECTING = 0),
                            (this.OPEN = 1),
                            (this.CLOSING = 2),
                            (this.CLOSED = 3),
                            (this._onopen = null),
                            (this._onmessage = null),
                            (this._onerror = null),
                            (this._onclose = null),
                            (this.url = (function e(t) {
                                if ('string' == typeof t) return e(new URL(t, 'undefined' != typeof location ? location.href : void 0));
                                if (
                                    ('http:' === t.protocol ? (t.protocol = 'ws:') : 'https:' === t.protocol && (t.protocol = 'wss:'),
                                    'ws:' !== t.protocol && 'wss:' !== t.protocol)
                                )
                                    throw SyntaxError(
                                        `Failed to construct 'WebSocket': The URL's scheme must be either 'http', 'https', 'ws', or 'wss'. '${t.protocol}' is not allowed.`,
                                    );
                                if ('' !== t.hash)
                                    throw SyntaxError(
                                        `Failed to construct 'WebSocket': The URL contains a fragment identifier ('${t.hash}'). Fragment identifiers are not allowed in WebSocket URLs.`,
                                    );
                                return t.href;
                            })(e)),
                            (this.protocol = ''),
                            (this.extensions = ''),
                            (this.binaryType = 'blob'),
                            (this.readyState = this.CONNECTING),
                            (this.bufferedAmount = 0),
                            (this[e2] = new eG()),
                            queueMicrotask(async () => {
                                (await this[e2]) ||
                                    ((this.protocol = 'string' == typeof t ? t : Array.isArray(t) && t.length > 0 ? t[0] : ''),
                                    this.readyState === this.CONNECTING && ((this.readyState = this.OPEN), this.dispatchEvent(eB(this, new Event('open')))));
                            });
                    }
                    set onopen(e) {
                        this.removeEventListener('open', this._onopen), (this._onopen = e), null !== e && this.addEventListener('open', e);
                    }
                    get onopen() {
                        return this._onopen;
                    }
                    set onmessage(e) {
                        this.removeEventListener('message', this._onmessage), (this._onmessage = e), null !== e && this.addEventListener('message', e);
                    }
                    get onmessage() {
                        return this._onmessage;
                    }
                    set onerror(e) {
                        this.removeEventListener('error', this._onerror), (this._onerror = e), null !== e && this.addEventListener('error', e);
                    }
                    get onerror() {
                        return this._onerror;
                    }
                    set onclose(e) {
                        this.removeEventListener('close', this._onclose), (this._onclose = e), null !== e && this.addEventListener('close', e);
                    }
                    get onclose() {
                        return this._onclose;
                    }
                    send(e) {
                        var t;
                        if (this.readyState === this.CONNECTING) throw (this.close(), new DOMException('InvalidStateError'));
                        this.readyState !== this.CLOSING &&
                            this.readyState !== this.CLOSED &&
                            ((this.bufferedAmount += 'string' == typeof (t = e) ? t.length : t instanceof Blob ? t.size : t.byteLength),
                            queueMicrotask(() => {
                                (this.bufferedAmount = 0), this[e3]?.(e);
                            }));
                    }
                    close(e = 1e3, t) {
                        eb(e, e0), eb(1e3 === e || (e >= 3e3 && e <= 4999), e0), this[e4](e, t);
                    }
                    [e4](e = 1e3, t, a = !0) {
                        this.readyState !== this.CLOSING &&
                            this.readyState !== this.CLOSED &&
                            ((this.readyState = this.CLOSING),
                            queueMicrotask(() => {
                                (this.readyState = this.CLOSED),
                                    this.dispatchEvent(eB(this, new eX('close', { code: e, reason: t, wasClean: a }))),
                                    (this._onopen = null),
                                    (this._onmessage = null),
                                    (this._onerror = null),
                                    (this._onclose = null);
                            }));
                    }
                    addEventListener(e, t, a) {
                        return super.addEventListener(e, t, a);
                    }
                    removeEventListener(e, t, a) {
                        return super.removeEventListener(e, t, a);
                    }
                },
                e9 = Symbol('kEmitter'),
                e7 = Symbol('kBoundListener'),
                e6 = Symbol('kSend'),
                e8 = class {
                    constructor(e, t, a) {
                        (this.client = e),
                            (this.transport = t),
                            (this.createConnection = a),
                            (this[e9] = new EventTarget()),
                            (this.mockCloseController = new AbortController()),
                            (this.realCloseController = new AbortController()),
                            this.transport.addEventListener('outgoing', (e) => {
                                void 0 !== this.realWebSocket &&
                                    queueMicrotask(() => {
                                        e.defaultPrevented || this[e6](e.data);
                                    });
                            }),
                            this.transport.addEventListener('incoming', this.handleIncomingMessage.bind(this));
                    }
                    get socket() {
                        return (
                            eb(
                                this.realWebSocket,
                                'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?',
                            ),
                            this.realWebSocket
                        );
                    }
                    connect() {
                        eb(
                            !this.realWebSocket || this.realWebSocket.readyState !== WebSocket.OPEN,
                            'Failed to call "connect()" on the original WebSocket instance: the connection already open',
                        );
                        let e = this.createConnection();
                        (e.binaryType = this.client.binaryType),
                            e.addEventListener(
                                'open',
                                (e) => {
                                    this[e9].dispatchEvent(eB(this.realWebSocket, new Event('open', e)));
                                },
                                { once: !0 },
                            ),
                            e.addEventListener('message', (e) => {
                                this.transport.dispatchEvent(eB(this.realWebSocket, new MessageEvent('incoming', { data: e.data, origin: e.origin })));
                            }),
                            this.client.addEventListener(
                                'close',
                                (e) => {
                                    this.handleMockClose(e);
                                },
                                { signal: this.mockCloseController.signal },
                            ),
                            e.addEventListener(
                                'close',
                                (e) => {
                                    this.handleRealClose(e);
                                },
                                { signal: this.realCloseController.signal },
                            ),
                            e.addEventListener('error', () => {
                                let t = eB(e, new Event('error', { cancelable: !0 }));
                                this[e9].dispatchEvent(t), t.defaultPrevented || this.client.dispatchEvent(eB(this.client, new Event('error')));
                            }),
                            (this.realWebSocket = e);
                    }
                    addEventListener(e, t, a) {
                        if (!Reflect.has(t, e7)) {
                            let e = t.bind(this.client);
                            Object.defineProperty(t, e7, { value: e, enumerable: !1 });
                        }
                        this[e9].addEventListener(e, Reflect.get(t, e7), a);
                    }
                    removeEventListener(e, t, a) {
                        this[e9].removeEventListener(e, Reflect.get(t, e7), a);
                    }
                    send(e) {
                        this[e6](e);
                    }
                    [e6](e) {
                        let { realWebSocket: t } = this;
                        if (
                            (eb(t, 'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?', this.client.url),
                            t.readyState !== WebSocket.CLOSING && t.readyState !== WebSocket.CLOSED)
                        ) {
                            if (t.readyState === WebSocket.CONNECTING)
                                return void t.addEventListener(
                                    'open',
                                    () => {
                                        t.send(e);
                                    },
                                    { once: !0 },
                                );
                            t.send(e);
                        }
                    }
                    close() {
                        let { realWebSocket: e } = this;
                        eb(e, 'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?', this.client.url),
                            this.realCloseController.abort(),
                            e.readyState !== WebSocket.CLOSING &&
                                e.readyState !== WebSocket.CLOSED &&
                                (e.close(),
                                queueMicrotask(() => {
                                    this[e9].dispatchEvent(eB(this.realWebSocket, new eK('close', { code: 1e3, cancelable: !0 })));
                                }));
                    }
                    handleIncomingMessage(e) {
                        let t = eB(e.target, new eY('message', { data: e.data, origin: e.origin, cancelable: !0 }));
                        this[e9].dispatchEvent(t),
                            t.defaultPrevented || this.client.dispatchEvent(eB(this.client, new MessageEvent('message', { data: e.data, origin: e.origin })));
                    }
                    handleMockClose(e) {
                        this.realWebSocket && this.realWebSocket.close();
                    }
                    handleRealClose(e) {
                        this.mockCloseController.abort();
                        let t = eB(this.realWebSocket, new eK('close', { code: e.code, reason: e.reason, wasClean: e.wasClean, cancelable: !0 }));
                        this[e9].dispatchEvent(t), t.defaultPrevented || this.client[e4](e.code, e.reason);
                    }
                },
                te = class extends EventTarget {
                    constructor(e) {
                        super(),
                            (this.socket = e),
                            this.socket.addEventListener('close', (e) => {
                                this.dispatchEvent(eB(this.socket, new eX('close', e)));
                            }),
                            (this.socket[e3] = (e) => {
                                this.dispatchEvent(eB(this.socket, new eY('outgoing', { data: e, origin: this.socket.url, cancelable: !0 })));
                            });
                    }
                    addEventListener(e, t, a) {
                        return super.addEventListener(e, t, a);
                    }
                    dispatchEvent(e) {
                        return super.dispatchEvent(e);
                    }
                    send(e) {
                        queueMicrotask(() => {
                            if (this.socket.readyState === this.socket.CLOSING || this.socket.readyState === this.socket.CLOSED) return;
                            let t = () => {
                                this.socket.dispatchEvent(eB(this.socket, new MessageEvent('message', { data: e, origin: this.socket.url })));
                            };
                            this.socket.readyState === this.socket.CONNECTING
                                ? this.socket.addEventListener(
                                      'open',
                                      () => {
                                          t();
                                      },
                                      { once: !0 },
                                  )
                                : t();
                        });
                    }
                    close(e, t) {
                        this.socket[e4](e, t);
                    }
                },
                tt = class e extends eH {
                    static {
                        this.symbol = Symbol('websocket');
                    }
                    constructor() {
                        super(e.symbol);
                    }
                    checkEnvironment() {
                        return eF('WebSocket');
                    }
                    setup() {
                        let e = Object.getOwnPropertyDescriptor(globalThis, 'WebSocket');
                        Object.defineProperty(globalThis, 'WebSocket', {
                            value: new Proxy(globalThis.WebSocket, {
                                construct: (e, t, a) => {
                                    let [s, r] = t,
                                        i = () => Reflect.construct(e, t, a),
                                        o = new e5(s, r),
                                        n = new te(o);
                                    return (
                                        queueMicrotask(async () => {
                                            try {
                                                let e = new e8(o, n, i),
                                                    t = this.emitter.listenerCount('connection') > 0;
                                                await e_(this.emitter, 'connection', { client: new e1(o, n), server: e, info: { protocols: r } }),
                                                    t
                                                        ? o[e2].resolve(!1)
                                                        : (o[e2].resolve(!0),
                                                          e.connect(),
                                                          e.addEventListener('open', () => {
                                                              o.dispatchEvent(eB(o, new Event('open'))), e.realWebSocket && (o.protocol = e.realWebSocket.protocol);
                                                          }));
                                            } catch (e) {
                                                e instanceof Error &&
                                                    (o.dispatchEvent(new Event('error')),
                                                    o.readyState !== WebSocket.CLOSING && o.readyState !== WebSocket.CLOSED && o[e4](1011, e.message, !1),
                                                    console.error(e));
                                            }
                                        }),
                                        o
                                    );
                                },
                            }),
                            configurable: !0,
                        }),
                            this.subscriptions.push(() => {
                                Object.defineProperty(globalThis, 'WebSocket', e);
                            });
                    }
                };
            function ta() {
                return 'undefined' != typeof navigator && 'serviceWorker' in navigator && 'undefined' != typeof location && 'file:' !== location.protocol;
            }
            var ts = class extends Promise {
                    #L;
                    resolve;
                    reject;
                    constructor(e = null) {
                        let t = (function () {
                            let e = (t, a) => {
                                (e.state = 'pending'),
                                    (e.resolve = (a) =>
                                        'pending' !== e.state
                                            ? void 0
                                            : ((e.result = a), t(a instanceof Promise ? a : Promise.resolve(a).then((t) => ((e.state = 'fulfilled'), t))))),
                                    (e.reject = (t) => {
                                        if ('pending' === e.state)
                                            return (
                                                queueMicrotask(() => {
                                                    e.state = 'rejected';
                                                }),
                                                a((e.rejectionReason = t))
                                            );
                                    });
                            };
                            return e;
                        })();
                        super((a, s) => {
                            t(a, s), e?.(t.resolve, t.reject);
                        }),
                            (this.#L = t),
                            (this.resolve = this.#L.resolve),
                            (this.reject = this.#L.reject);
                    }
                    get state() {
                        return this.#L.state;
                    }
                    get rejectionReason() {
                        return this.#L.rejectionReason;
                    }
                    then(e, t) {
                        return this.#q(super.then(e, t));
                    }
                    catch(e) {
                        return this.#q(super.catch(e));
                    }
                    finally(e) {
                        return this.#q(super.finally(e));
                    }
                    #q(e) {
                        return Object.defineProperties(e, { resolve: { configurable: !0, value: this.resolve }, reject: { configurable: !0, value: this.reject } });
                    }
                },
                tr = Symbol('isPatchedModule'),
                ti = class e extends Error {
                    constructor(t) {
                        super(t), (this.name = 'InterceptorError'), Object.setPrototypeOf(this, e.prototype);
                    }
                },
                to = class e {
                    static {
                        this.PENDING = 0;
                    }
                    static {
                        this.PASSTHROUGH = 1;
                    }
                    static {
                        this.RESPONSE = 2;
                    }
                    static {
                        this.ERROR = 3;
                    }
                    constructor(t, a) {
                        (this.request = t), (this.source = a), (this.readyState = e.PENDING), (this.handled = new eG());
                    }
                    get #z() {
                        return this.handled;
                    }
                    async passthrough() {
                        eb.as(
                            ti,
                            this.readyState === e.PENDING,
                            'Failed to passthrough the "%s %s" request: the request has already been handled',
                            this.request.method,
                            this.request.url,
                        ),
                            (this.readyState = e.PASSTHROUGH),
                            await this.source.passthrough(),
                            this.#z.resolve();
                    }
                    respondWith(t) {
                        eb.as(
                            ti,
                            this.readyState === e.PENDING,
                            'Failed to respond to the "%s %s" request with "%d %s": the request has already been handled (%d)',
                            this.request.method,
                            this.request.url,
                            t.status,
                            t.statusText || 'OK',
                            this.readyState,
                        ),
                            (this.readyState = e.RESPONSE),
                            this.#z.resolve(),
                            this.source.respondWith(t);
                    }
                    errorWith(t) {
                        eb.as(
                            ti,
                            this.readyState === e.PENDING,
                            'Failed to error the "%s %s" request with "%s": the request has already been handled (%d)',
                            this.request.method,
                            this.request.url,
                            t?.toString(),
                            this.readyState,
                        ),
                            (this.readyState = e.ERROR),
                            this.source.errorWith(t),
                            this.#z.resolve();
                    }
                };
            function tn(e) {
                try {
                    return new URL(e), !0;
                } catch (e) {
                    return !1;
                }
            }
            function tl(e, t) {
                let a = Object.getOwnPropertySymbols(t).find((t) => t.description === e);
                if (a) return Reflect.get(t, a);
            }
            var tu = class e extends Response {
                    static {
                        this.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304];
                    }
                    static {
                        this.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308];
                    }
                    static isConfigurableStatusCode(e) {
                        return e >= 200 && e <= 599;
                    }
                    static isRedirectResponse(t) {
                        return e.STATUS_CODES_WITH_REDIRECT.includes(t);
                    }
                    static isResponseWithBody(t) {
                        return !e.STATUS_CODES_WITHOUT_BODY.includes(t);
                    }
                    static setUrl(e, t) {
                        if (!e || 'about:' === e || !tn(e)) return;
                        let a = tl('state', t);
                        a ? a.urlList.push(new URL(e)) : Object.defineProperty(t, 'url', { value: e, enumerable: !0, configurable: !0, writable: !1 });
                    }
                    static parseRawHeaders(e) {
                        let t = new Headers();
                        for (let a = 0; a < e.length; a += 2) t.append(e[a], e[a + 1]);
                        return t;
                    }
                    constructor(t, a = {}) {
                        let s = a.status ?? 200,
                            r = e.isConfigurableStatusCode(s) ? s : 200;
                        if ((super(e.isResponseWithBody(s) ? t : null, { status: r, statusText: a.statusText, headers: a.headers }), s !== r)) {
                            let e = tl('state', this);
                            e ? (e.status = s) : Object.defineProperty(this, 'status', { value: s, enumerable: !0, configurable: !0, writable: !1 });
                        }
                        e.setUrl(a.url, this);
                    }
                },
                tc = Symbol('kRawRequest');
            function th(e, t) {
                Reflect.set(e, tc, t);
            }
            var td = new TextEncoder();
            async function tm(e) {
                try {
                    return [
                        null,
                        await e().catch((e) => {
                            throw e;
                        }),
                    ];
                } catch (e) {
                    return [e, null];
                }
            }
            function tp(e, t, a) {
                return [e.active, e.installing, e.waiting].filter((e) => null != e).find((e) => a(e.scriptURL, t)) || null;
            }
            var tg = async (e, t = {}, a) => {
                    let s = new URL(e, location.href).href,
                        r = await navigator.serviceWorker.getRegistrations().then((e) => e.filter((e) => tp(e, s, a)));
                    !navigator.serviceWorker.controller && r.length > 0 && location.reload();
                    let [i] = r;
                    if (i) return i.update(), [tp(i, s, a), i];
                    let [o, n] = await tm(async () => {
                        let r = await navigator.serviceWorker.register(e, t);
                        return [tp(r, s, a), r];
                    });
                    if (o) {
                        if (o.message.includes('(404)')) {
                            let e = new URL(t?.scope || '/', location.href);
                            throw Error(
                                d.J
                                    .formatMessage(`Failed to register a Service Worker for scope ('${e.href}') with script ('${s}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`),
                            );
                        }
                        throw Error(d.J.formatMessage('Failed to register the Service Worker:\n\n%s', o.message));
                    }
                    return n;
                },
                tf = class {
                    #e;
                    #t;
                    constructor() {
                        (this.#e = []), (this.#t = new Map());
                    }
                    get [Symbol.iterator]() {
                        return this.#e[Symbol.iterator].bind(this.#e);
                    }
                    entries() {
                        return this.#t.entries();
                    }
                    get(e) {
                        return this.#t.get(e) || [];
                    }
                    getAll() {
                        return this.#e.map(([, e]) => e);
                    }
                    append(e, t) {
                        this.#e.push([e, t]), this.#a(e, (e) => e.push(t));
                    }
                    prepend(e, t) {
                        this.#e.unshift([e, t]), this.#a(e, (e) => e.unshift(t));
                    }
                    delete(e, t) {
                        if (0 === this.size) return !1;
                        let a = this.#t.get(e);
                        if (!a) return !1;
                        let s = a.indexOf(t);
                        return (
                            -1 !== s &&
                            (a.splice(s, 1),
                            this.#e.splice(
                                this.#e.findIndex((a) => a[0] === e && a[1] === t),
                                1,
                            ),
                            !0)
                        );
                    }
                    deleteAll(e) {
                        0 !== this.size && ((this.#e = this.#e.filter((t) => t[0] !== e)), this.#t.delete(e));
                    }
                    get size() {
                        return this.#e.length;
                    }
                    clear() {
                        0 !== this.size && ((this.#e.length = 0), this.#t.clear());
                    }
                    #a(e, t) {
                        t(this.#t.get(e) || this.#t.set(e, []).get(e));
                    }
                },
                tk = Symbol('kDefaultPrevented'),
                tb = Symbol('kPropagationStopped'),
                ty = Symbol('kImmediatePropagationStopped'),
                tv = class extends MessageEvent {
                    #s;
                    [tk];
                    [tb];
                    [ty];
                    constructor(...e) {
                        super(e[0], e[1]), (this[tk] = !1);
                    }
                    get defaultPrevented() {
                        return this[tk];
                    }
                    preventDefault() {
                        super.preventDefault(), (this[tk] = !0);
                    }
                    stopImmediatePropagation() {
                        super.stopImmediatePropagation(), (this[ty] = !0);
                    }
                },
                tw = class {
                    #r;
                    #i;
                    #o;
                    #n;
                    #l;
                    #u;
                    #c;
                    hooks;
                    constructor() {
                        (this.#r = new tf()),
                            (this.#i = new WeakMap()),
                            (this.#o = new WeakMap()),
                            (this.#n = new WeakSet()),
                            (this.#l = new tf()),
                            (this.#u = new WeakMap()),
                            (this.#c = new WeakMap()),
                            (this.hooks = {
                                on: (e, t, a) => {
                                    if (!a?.signal?.aborted) {
                                        if (a?.once) {
                                            let a = t,
                                                s = (...t) => (this.#h(e, s), a(...t));
                                            t = s;
                                        }
                                        if ((this.#l.append(e, t), a && this.#u.set(t, a), a?.signal)) {
                                            let { signal: s } = a,
                                                r = () => {
                                                    this.#h(e, t);
                                                };
                                            s.addEventListener('abort', r, { once: !0 }),
                                                this.#c.set(t, () => {
                                                    s.removeEventListener('abort', r);
                                                });
                                        }
                                    }
                                },
                                removeListener: (e, t) => {
                                    this.#h(e, t);
                                },
                            });
                    }
                    #h(e, t) {
                        this.#l.delete(e, t);
                        let a = this.#c.get(t);
                        a && (a(), this.#c.delete(t));
                    }
                    #d(e, t) {
                        let a = this.#r.delete(e, t),
                            s = this.#o.get(t);
                        return s && (s(), this.#o.delete(t)), a;
                    }
                    on(e, t, a) {
                        return this.#m(e, t, a), this;
                    }
                    once(e, t, a) {
                        return this.on(e, t, { ...(a || {}), once: !0 });
                    }
                    earlyOn(e, t, a) {
                        return this.#m(e, t, a, 'prepend'), this;
                    }
                    earlyOnce(e, t, a) {
                        return this.earlyOn(e, t, { ...(a || {}), once: !0 });
                    }
                    emit(e) {
                        if (0 === this.#r.size) return !1;
                        let t = this.listenerCount(e.type) > 0,
                            a = this.#p(e);
                        for (let t of this.#g(e.type)) {
                            if (null != a.event[tb] && a.event[tb] !== this) return a.revoke(), !1;
                            if (a.event[ty]) break;
                            this.#f(a.event, t);
                        }
                        return a.revoke(), t;
                    }
                    async emitAsPromise(e) {
                        if (0 === this.#r.size) return [];
                        let t = [],
                            a = this.#p(e);
                        for (let s of this.#g(e.type)) {
                            if (null != a.event[tb] && a.event[tb] !== this) return a.revoke(), [];
                            if (a.event[ty]) break;
                            let e = await Promise.resolve(this.#f(a.event, s));
                            this.#k(s) || t.push(e);
                        }
                        return a.revoke(), Promise.allSettled(t).then((e) => e.map((e) => ('fulfilled' === e.status ? e.value : e.reason)));
                    }
                    *emitAsGenerator(e) {
                        if (0 === this.#r.size) return;
                        let t = this.#p(e);
                        for (let a of this.#g(e.type)) {
                            if (null != t.event[tb] && t.event[tb] !== this) return void t.revoke();
                            if (t.event[ty]) break;
                            let e = this.#f(t.event, a);
                            this.#k(a) || (yield e);
                        }
                        t.revoke();
                    }
                    removeListener(e, t) {
                        let a = this.#i.get(t);
                        if (this.#d(e, t)) for (let s of this.#l.get('removeListener').slice()) s(e, t, a);
                    }
                    removeAllListeners(e) {
                        if (null == e) {
                            for (let [e, t] of this.#r.entries()) for (; t.length > 0; ) this.removeListener(e, t[0]);
                            for (let [e, t] of [...this.#l]) this.#u.get(t)?.persist || this.#h(e, t);
                            return;
                        }
                        let t = this.listeners(e);
                        for (; t.length > 0; ) this.removeListener(e, t[0]);
                    }
                    listeners(e) {
                        return null == e ? this.#r.getAll() : this.#r.get(e);
                    }
                    listenerCount(e) {
                        return null == e ? this.#r.size : this.listeners(e).length;
                    }
                    #m(e, t, a, s = 'append') {
                        if (!a?.signal?.aborted) {
                            for (let s of this.#l.get('newListener').slice()) s(e, t, a);
                            if (('*' === e && this.#n.add(t), 'prepend' === s ? this.#r.prepend(e, t) : this.#r.append(e, t), a && (this.#i.set(t, a), a.signal))) {
                                let { signal: s } = a,
                                    r = () => {
                                        this.removeListener(e, t);
                                    };
                                s.addEventListener('abort', r, { once: !0 }),
                                    this.#o.set(t, () => {
                                        s.removeEventListener('abort', r);
                                    });
                            }
                        }
                    }
                    #p(e) {
                        let { stopPropagation: t } = e;
                        return (
                            (e.stopPropagation = () => {
                                (e[tb] = this), t.call(e);
                            }),
                            {
                                event: e,
                                revoke() {
                                    e.stopPropagation = t;
                                },
                            }
                        );
                    }
                    #f(e, t) {
                        for (let t of this.#l.get('beforeEmit').slice()) if (!1 === t(e)) return;
                        let a = t.call(this, e),
                            s = this.#i.get(t);
                        if (s?.once) {
                            let a = this.#k(t) ? '*' : e.type;
                            if (this.#d(a, t)) for (let e of this.#l.get('removeListener').slice()) e(a, t, s);
                        }
                        return a;
                    }
                    *#g(e) {
                        let t = [];
                        for (let [a, s] of this.#r) ('*' === a || a === e) && t.push(s);
                        yield* t;
                    }
                    #k(e) {
                        return this.#n.has(e);
                    }
                },
                tx = ta(),
                tS = class extends tv {
                    #A;
                    constructor(e) {
                        super(e.data.type, { data: e.data.payload }), (this.#A = e);
                    }
                    get ports() {
                        return this.#A.ports;
                    }
                    postMessage(e, ...t) {
                        this.#A.ports[0].postMessage({ type: e, data: t[0] }, { transfer: t[1] });
                    }
                },
                tj = class extends tw {
                    #O;
                    #C;
                    constructor(e) {
                        super(),
                            eb(tx, 'Failed to open a WorkerChannel: Service Worker is not supported in this environment.'),
                            (this.#O = e.getWorker),
                            (this.#C = new AbortController()),
                            navigator.serviceWorker.addEventListener(
                                'message',
                                async (e) => {
                                    let t = await this.#O();
                                    (null == e.source || e.source === t) &&
                                        e.data &&
                                        (function (e) {
                                            return null != e && 'object' == typeof e && !Array.isArray(e);
                                        })(e.data) &&
                                        'type' in e.data &&
                                        this.emit(new tS(e));
                                },
                                { signal: this.#C.signal },
                            );
                    }
                    postMessage(e) {
                        eb(
                            tx,
                            'Failed to post message on a WorkerChannel: the Service Worker API is unavailable in this environment. This is likely an issue with MSW. Please report it on GitHub: https://github.com/mswjs/msw/issues',
                        ),
                            this.#O().then((t) => {
                                t.postMessage(e);
                            });
                    }
                    terminate() {
                        this.#C.abort(), this.removeAllListeners();
                    }
                };
            function tE(e) {
                return new Request(e.url, {
                    ...e,
                    body: (function (e) {
                        if (!['HEAD', 'GET'].includes(e.method)) return e.body;
                    })(e),
                });
            }
            var tC = class e extends h {
                    static #I;
                    static async from(t) {
                        if (null == e.#I) e.#I = new e(t);
                        else {
                            var a;
                            (a = e.#I.#P),
                                (a.findWorker !== t.findWorker ||
                                    a.serviceWorker.url !== t.serviceWorker.url ||
                                    JSON.stringify(a.serviceWorker.options) !== JSON.stringify(t.serviceWorker.options)) &&
                                    (await e.#I.terminate(), (e.#I = new e(t)));
                        }
                        return e.#I;
                    }
                    #P;
                    #x;
                    #T;
                    #R;
                    #D;
                    #W;
                    #N;
                    workerPromise;
                    constructor(e) {
                        super(),
                            eb(ta(), 'Failed to use Service Worker as the network source: the Service Worker API is not supported in this environment'),
                            (this.#P = e),
                            (this.#x = new Map()),
                            (this.workerPromise = new ts()),
                            (this.#T = new tj({ getWorker: () => this.workerPromise.then(([e]) => e) }));
                    }
                    async enable() {
                        if ('fulfilled' === this.workerPromise.state && void 0 === this.#N)
                            return (
                                d.J.warn(
                                    'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.',
                                ),
                                this.workerPromise.then(([, e]) => e)
                            );
                        (this.#N = void 0), this.#T.removeAllListeners(), this.#x.clear(), (this.#R = new AbortController());
                        let [e, t] = await this.#M();
                        if ('activated' !== e.state) {
                            let t = new AbortController(),
                                a = new ts();
                            a.then(() => t.abort()),
                                e.addEventListener(
                                    'statechange',
                                    () => {
                                        'activated' === e.state && a.resolve();
                                    },
                                    { signal: t.signal },
                                ),
                                await a;
                        }
                        this.#T.postMessage('MOCK_ACTIVATE');
                        let a = new ts();
                        return (
                            (this.#D = a),
                            this.#T.once('MOCKING_ENABLED', (e) => {
                                a.resolve(e.data.client);
                            }),
                            await a,
                            this.#P.quiet || this.#$(),
                            t
                        );
                    }
                    disable() {
                        if (void 0 !== this.#N)
                            return void d.J.warn(
                                'Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.',
                            );
                        (this.#N = Date.now()), this.#R?.abort(), (this.#R = void 0), this.#T.postMessage('CLIENT_CLOSED'), this.#P.quiet || this.#H();
                    }
                    async terminate() {
                        if (
                            (null != this.#W && (clearInterval(this.#W), (this.#W = void 0)),
                            this.#x.clear(),
                            this.#T.terminate(),
                            this.#R?.abort(),
                            (this.#R = void 0),
                            'fulfilled' === this.workerPromise.state)
                        ) {
                            let [, e] = await this.workerPromise;
                            await e.unregister();
                        }
                        e.#I === this && (e.#I = void 0);
                    }
                    async #M() {
                        this.#W && clearInterval(this.#W);
                        let e = this.#P.serviceWorker.url,
                            [t, a] = await tg(e, this.#P.serviceWorker.options, this.#P.findWorker || this.#U);
                        if (null == t)
                            throw Error(
                                this.#P?.findWorker
                                    ? d.J.formatMessage(
                                          `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
     `,
                                          e,
                                      )
                                    : d.J.formatMessage(
                                          `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
                                          e,
                                          location.host,
                                      ),
                            );
                        return (
                            'pending' === this.workerPromise.state
                                ? this.workerPromise.resolve([t, a])
                                : (this.workerPromise = new ts((e) => {
                                      e([t, a]);
                                  })),
                            this.#T.on('REQUEST', this.#S.bind(this)),
                            this.#T.on('RESPONSE', this.#j.bind(this)),
                            window.addEventListener(
                                'beforeunload',
                                () => {
                                    'redundant' !== t.state && this.#T.postMessage('CLIENT_CLOSED'),
                                        clearInterval(this.#W),
                                        window.postMessage({ type: 'msw/worker:stop' });
                                },
                                { signal: this.#R?.signal },
                            ),
                            await this.#_().catch((e) => {
                                d.J.error(
                                    'Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues) and include the original error below.',
                                ),
                                    console.error(e);
                            }),
                            (this.#W = window.setInterval(() => {
                                this.#T.postMessage('KEEPALIVE_REQUEST');
                            }, 5e3)),
                            !this.#P.quiet &&
                                (location.href.startsWith(a.scope) ||
                                    d.J
                                        .warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${a.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`)),
                            [t, a]
                        );
                    }
                    async #S(e) {
                        if (this.#N && e.data.interceptedAt > this.#N) return e.postMessage('PASSTHROUGH');
                        let t = tE(e.data);
                        ed.w.cache.set(t, t.clone());
                        let a = new tL({ event: e, request: t });
                        this.#x.set(e.data.id, a), await this.queue(a);
                    }
                    async #j(e) {
                        let { request: t, response: a, isMockedResponse: s } = e.data,
                            r = this.#x.get(t.id);
                        if (a.type?.includes('opaque')) {
                            this.#x.delete(t.id), r?.events.removeAllListeners();
                            return;
                        }
                        if ((this.#x.delete(t.id), null == r)) return;
                        let i = tE(t),
                            o = 0 === a.status ? Response.error() : new tu(tu.isResponseWithBody(a.status) ? a.body : null, { ...a, url: t.url });
                        try {
                            r.events.emit(new O(s ? 'response:mocked' : 'response:bypass', { requestId: r.data.id, request: i, response: o, isMockedResponse: s }));
                        } finally {
                            r.events.removeAllListeners();
                        }
                    }
                    #U = (e, t) => e === t;
                    async #_() {
                        let e = new ts();
                        return (
                            this.#T.postMessage('INTEGRITY_CHECK_REQUEST'),
                            this.#T.once('INTEGRITY_CHECK_RESPONSE', (t) => {
                                let { checksum: a, packageVersion: s } = t.data;
                                '4db4a41e972cec1b64cc569c66952d82' !== a &&
                                    d.J
                                        .warn(`The currently registered Service Worker has been generated by a different version of MSW (${s}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  \u2022 npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`),
                                    e.resolve();
                            }),
                            e
                        );
                    }
                    async #$() {
                        if ('rejected' === this.workerPromise.state) return;
                        eb(null != this.#D, '[ServiceWorkerSource] Failed to print a start message: client confirmation not received');
                        let e = await this.#D,
                            [t, a] = await this.workerPromise;
                        console.groupCollapsed(`%c${d.J.formatMessage('Mocking enabled.')}`, 'color:orangered;font-weight:bold;'),
                            console.log('%cDocumentation: %chttps://mswjs.io/docs', 'font-weight:bold', 'font-weight:normal'),
                            console.log('Found an issue? https://github.com/mswjs/msw/issues'),
                            console.log('Worker script URL:', t.scriptURL),
                            console.log('Worker scope:', a.scope),
                            e && console.log('Client ID: %s (%s)', e.id, e.frameType),
                            console.groupEnd();
                    }
                    #H() {
                        console.log(`%c${d.J.formatMessage('Mocking disabled.')}`, 'color:orangered;font-weight:bold;');
                    }
                },
                tL = class extends P {
                    #F;
                    constructor(e) {
                        super({ request: e.request }), (this.#F = e.event);
                    }
                    passthrough() {
                        this.#F.postMessage('PASSTHROUGH');
                    }
                    respondWith(e) {
                        e && this.#G(e);
                    }
                    errorWith(e) {
                        if (e instanceof Response) return this.respondWith(e);
                        d.J.warn(
                            'Uncaught exception in the request handler for "%s %s". This exception has been gracefully handled as a 500 response, however, it\'s strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/http/mocking-responses/error-responses',
                            this.data.request.method,
                            this.data.request.url,
                        );
                        let t = e instanceof Error ? e : Error(e?.toString() || 'Request failure');
                        this.respondWith(em.cS.json({ name: t.name, message: t.message, stack: t.stack }, { status: 500, statusText: 'Request Handler Error' }));
                    }
                    async #G(e) {
                        let t,
                            a,
                            s = { status: e.status, statusText: e.statusText, headers: Object.fromEntries(e.headers.entries()) };
                        !(function () {
                            try {
                                let e = new ReadableStream({ start: (e) => e.close() });
                                return new MessageChannel().port1.postMessage(e, [e]), !0;
                            } catch {
                                return !1;
                            }
                        })()
                            ? (t = null == e.body ? null : await e.clone().arrayBuffer())
                            : ((t = e.body), (a = null == e.body ? void 0 : [e.body])),
                            this.#F.postMessage('MOCK_RESPONSE', { ...s, body: t }, a);
                    }
                },
                tq = async (e) => {
                    try {
                        let t = await e().catch((e) => {
                            throw e;
                        });
                        return { error: null, data: t };
                    } catch (e) {
                        return { error: e, data: null };
                    }
                };
            function tz(e, t = !1) {
                return t ? Object.prototype.toString.call(e).startsWith('[object ') : '[object Object]' === Object.prototype.toString.call(e);
            }
            function tA(e, t) {
                try {
                    return e[t], !0;
                } catch {
                    return !1;
                }
            }
            function tO(e) {
                return null != e && e instanceof Response && tA(e, 'type') && 'error' === e.type;
            }
            async function tI(e) {
                let t = async (t) =>
                        t instanceof Error
                            ? (await e.controller.errorWith(t), !0)
                            : tO(t)
                              ? (await e.controller.respondWith(t), !0)
                              : tz(t, !0) && tA(t, 'status') && tA(t, 'statusText') && tA(t, 'bodyUsed')
                                ? (await e.controller.respondWith(t), !0)
                                : !!tz(t) && (await e.controller.errorWith(t), !0),
                    a = async (a) => {
                        if (a instanceof ti) throw r.error;
                        return null != a && a instanceof Error && 'code' in a && 'errno' in a
                            ? (await e.controller.errorWith(a), !0)
                            : a instanceof Response && (await t(a));
                    },
                    s = new eG();
                if (e.request.signal) {
                    if (e.request.signal.aborted) return void (await e.controller.errorWith(e.request.signal.reason));
                    e.request.signal.addEventListener(
                        'abort',
                        () => {
                            s.reject(e.request.signal.reason);
                        },
                        { once: !0 },
                    );
                }
                let r = await tq(async () => {
                    let t = e_(e.emitter, 'request', { requestId: e.requestId, request: e.request, controller: e.controller });
                    await Promise.race([s, t, e.controller.handled]);
                });
                if ('rejected' === s.state) return void (await e.controller.errorWith(s.rejectionReason));
                if (r.error) {
                    var i;
                    if (await a(r.error)) return;
                    if (e.emitter.listenerCount('unhandledException') > 0) {
                        let a = new to(e.request, {
                            passthrough() {},
                            async respondWith(e) {
                                await t(e);
                            },
                            async errorWith(t) {
                                await e.controller.errorWith(t);
                            },
                        });
                        if (
                            (await e_(e.emitter, 'unhandledException', { error: r.error, request: e.request, requestId: e.requestId, controller: a }),
                            a.readyState !== to.PENDING)
                        )
                            return;
                    }
                    await e.controller.respondWith(
                        new Response(JSON.stringify((i = r.error) instanceof Error ? { name: i.name, message: i.message, stack: i.stack } : i), {
                            status: 500,
                            statusText: 'Unhandled Exception',
                            headers: { 'Content-Type': 'application/json' },
                        }),
                    );
                    return;
                }
                return e.controller.readyState === to.PENDING ? await e.controller.passthrough() : e.controller.handled;
            }
            function tP(e) {
                return Object.assign(TypeError('Failed to fetch'), { cause: e });
            }
            var tT = ['content-encoding', 'content-language', 'content-location', 'content-type', 'content-length'],
                tR = Symbol('kRedirectCount');
            async function tD(e, t) {
                let a;
                if (303 !== t.status && null != e.body) return Promise.reject(tP());
                let s = new URL(e.url);
                try {
                    a = new URL(t.headers.get('location'), e.url);
                } catch (e) {
                    return Promise.reject(tP(e));
                }
                if ('http:' !== a.protocol && 'https:' !== a.protocol) return Promise.reject(tP('URL scheme must be a HTTP(S) scheme'));
                if (Reflect.get(e, tR) > 20) return Promise.reject(tP('redirect count exceeded'));
                if ((Object.defineProperty(e, tR, { value: (Reflect.get(e, tR) || 0) + 1 }), 'cors' === e.mode && (a.username || a.password) && !tW(s, a)))
                    return Promise.reject(tP('cross origin not allowed for request mode "cors"'));
                let r = {};
                (([301, 302].includes(t.status) && 'POST' === e.method) || (303 === t.status && !['HEAD', 'GET'].includes(e.method))) &&
                    ((r.method = 'GET'),
                    (r.body = null),
                    tT.forEach((t) => {
                        e.headers.delete(t);
                    })),
                    tW(s, a) || (e.headers.delete('authorization'), e.headers.delete('proxy-authorization'), e.headers.delete('cookie'), e.headers.delete('host')),
                    (r.headers = e.headers);
                let i = await fetch(new Request(a, r));
                return Object.defineProperty(i, 'redirected', { value: !0, configurable: !0 }), i;
            }
            function tW(e, t) {
                return (e.origin === t.origin && 'null' === e.origin) || (e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port);
            }
            var tN = class extends TransformStream {
                    constructor() {
                        console.warn('[Interceptors]: Brotli decompression of response streams is not supported in the browser'),
                            super({
                                transform(e, t) {
                                    t.enqueue(e);
                                },
                            });
                    }
                },
                tM = class extends TransformStream {
                    constructor(e, ...t) {
                        super({}, ...t);
                        let a = [super.readable, ...e].reduce((e, t) => e.pipeThrough(t));
                        Object.defineProperty(this, 'readable', { get: () => a });
                    }
                },
                t$ = class e extends eH {
                    static {
                        this.symbol = Symbol('fetch');
                    }
                    constructor() {
                        super(e.symbol);
                    }
                    checkEnvironment() {
                        return eF('fetch');
                    }
                    async setup() {
                        let e = globalThis.fetch;
                        eb(!e[tr], 'Failed to patch the "fetch" module: already patched.'),
                            (globalThis.fetch = async (t, a) => {
                                let s = eU(),
                                    r = new Request('string' != typeof t || 'undefined' == typeof location || tn(t) ? t : new URL(t, location.href), a);
                                t instanceof Request && th(r, t);
                                let i = new eG(),
                                    o = new to(r, {
                                        passthrough: async () => {
                                            this.logger.info('request has not been handled, passthrough...');
                                            let t = r.clone(),
                                                { error: a, data: o } = await tq(() => e(r));
                                            if (a) return i.reject(a);
                                            if ((this.logger.info('original fetch performed', o), this.emitter.listenerCount('response') > 0)) {
                                                this.logger.info('emitting the "response" event...');
                                                let e = o.clone();
                                                await e_(this.emitter, 'response', { response: e, isMockedResponse: !1, request: t, requestId: s });
                                            }
                                            i.resolve(o);
                                        },
                                        respondWith: async (e) => {
                                            if (tO(e)) {
                                                this.logger.info('request has errored!', { response: e }), i.reject(tP(e));
                                                return;
                                            }
                                            this.logger.info('received mocked response!', { rawResponse: e });
                                            let t = (function (e) {
                                                    if (null === e.body) return null;
                                                    let t = (function (e) {
                                                        if ('' === e) return null;
                                                        let t = e
                                                            .toLowerCase()
                                                            .split(',')
                                                            .map((e) => e.trim());
                                                        return 0 === t.length
                                                            ? null
                                                            : new tM(
                                                                  t.reduceRight(
                                                                      (e, t) =>
                                                                          'gzip' === t || 'x-gzip' === t
                                                                              ? e.concat(new DecompressionStream('gzip'))
                                                                              : 'deflate' === t
                                                                                ? e.concat(new DecompressionStream('deflate'))
                                                                                : 'br' === t
                                                                                  ? e.concat(new tN())
                                                                                  : ((e.length = 0), e),
                                                                      [],
                                                                  ),
                                                              );
                                                    })(e.headers.get('content-encoding') || '');
                                                    return t ? (e.body.pipeTo(t.writable), t.readable) : null;
                                                })(e),
                                                a = null === t ? e : new tu(t, e);
                                            if ((tu.setUrl(r.url, a), tu.isRedirectResponse(a.status))) {
                                                if ('error' === r.redirect) return void i.reject(tP('unexpected redirect'));
                                                if ('follow' === r.redirect)
                                                    return void tD(r, a).then(
                                                        (e) => {
                                                            i.resolve(e);
                                                        },
                                                        (e) => {
                                                            i.reject(e);
                                                        },
                                                    );
                                            }
                                            this.emitter.listenerCount('response') > 0 &&
                                                (this.logger.info('emitting the "response" event...'),
                                                await e_(this.emitter, 'response', { response: a.clone(), isMockedResponse: !0, request: r, requestId: s })),
                                                i.resolve(a);
                                        },
                                        errorWith: (e) => {
                                            this.logger.info('request has been aborted!', { reason: e }), i.reject(e);
                                        },
                                    });
                                return (
                                    this.logger.info('[%s] %s', r.method, r.url),
                                    this.logger.info('awaiting for the mocked response...'),
                                    this.logger.info('emitting the "request" event for %s listener(s)...', this.emitter.listenerCount('request')),
                                    await tI({ request: r, requestId: s, emitter: this.emitter, controller: o }),
                                    i
                                );
                            }),
                            Object.defineProperty(globalThis.fetch, tr, { enumerable: !0, configurable: !0, value: !0 }),
                            this.subscriptions.push(() => {
                                Object.defineProperty(globalThis.fetch, tr, { value: void 0 }),
                                    (globalThis.fetch = e),
                                    this.logger.info('restored native "globalThis.fetch"!', globalThis.fetch.name);
                            });
                    }
                },
                tH = class {
                    constructor(e, t) {
                        (this.NONE = 0),
                            (this.CAPTURING_PHASE = 1),
                            (this.AT_TARGET = 2),
                            (this.BUBBLING_PHASE = 3),
                            (this.type = ''),
                            (this.srcElement = null),
                            (this.currentTarget = null),
                            (this.eventPhase = 0),
                            (this.isTrusted = !0),
                            (this.composed = !1),
                            (this.cancelable = !0),
                            (this.defaultPrevented = !1),
                            (this.bubbles = !0),
                            (this.lengthComputable = !0),
                            (this.loaded = 0),
                            (this.total = 0),
                            (this.cancelBubble = !1),
                            (this.returnValue = !0),
                            (this.type = e),
                            (this.target = t?.target || null),
                            (this.currentTarget = t?.currentTarget || null),
                            (this.timeStamp = Date.now());
                    }
                    composedPath() {
                        return [];
                    }
                    initEvent(e, t, a) {
                        (this.type = e), (this.bubbles = !!t), (this.cancelable = !!a);
                    }
                    preventDefault() {
                        this.defaultPrevented = !0;
                    }
                    stopPropagation() {}
                    stopImmediatePropagation() {}
                },
                tU = class extends tH {
                    constructor(e, t) {
                        super(e),
                            (this.lengthComputable = t?.lengthComputable || !1),
                            (this.composed = t?.composed || !1),
                            (this.loaded = t?.loaded || 0),
                            (this.total = t?.total || 0);
                    }
                },
                t_ = 'undefined' != typeof ProgressEvent;
            function tF(e, t) {
                return new Proxy(
                    e,
                    (function (e) {
                        let { constructorCall: t, methodCall: a, getProperty: s, setProperty: r } = e,
                            i = {};
                        return (
                            void 0 !== t &&
                                (i.construct = function (e, a, s) {
                                    let r = Reflect.construct.bind(null, e, a, s);
                                    return t.call(s, a, r);
                                }),
                            (i.set = function (e, t, a) {
                                let s = () => {
                                    let s =
                                            (function e(t, a) {
                                                if (!(a in t)) return null;
                                                if (Object.prototype.hasOwnProperty.call(t, a)) return t;
                                                let s = Reflect.getPrototypeOf(t);
                                                return s ? e(s, a) : null;
                                            })(e, t) || e,
                                        r = Reflect.getOwnPropertyDescriptor(s, t);
                                    return void 0 !== r?.set
                                        ? (r.set.apply(e, [a]), !0)
                                        : Reflect.defineProperty(s, t, { writable: !0, enumerable: !0, configurable: !0, value: a });
                                };
                                return void 0 !== r ? r.call(e, [t, a], s) : s();
                            }),
                            (i.get = function (e, t, r) {
                                let i = () => e[t],
                                    o = void 0 !== s ? s.call(e, [t, r], i) : i();
                                return 'function' == typeof o
                                    ? (...s) => {
                                          let r = o.bind(e, ...s);
                                          return void 0 !== a ? a.call(e, [t, s], r) : r();
                                      }
                                    : o;
                            }),
                            i
                        );
                    })(t),
                );
            }
            async function tG(e) {
                let t = e.headers.get('content-length');
                return null != t && '' !== t ? Number(t) : (await e.arrayBuffer()).byteLength;
            }
            var tB = Symbol('kIsRequestHandled'),
                tJ = ey(),
                tV = Symbol('kFetchRequest'),
                tY = class {
                    constructor(e, t) {
                        (this.initialRequest = e),
                            (this.logger = t),
                            (this.method = 'GET'),
                            (this.url = null),
                            (this[tB] = !1),
                            (this.events = new Map()),
                            (this.uploadEvents = new Map()),
                            (this.requestId = eU()),
                            (this.requestHeaders = new Headers()),
                            (this.responseBuffer = new Uint8Array()),
                            (this.request = tF(e, {
                                setProperty: ([e, t], a) => {
                                    if ('ontimeout' !== e) return a();
                                    {
                                        let s = e.slice(2);
                                        return this.request.addEventListener(s, t), a();
                                    }
                                },
                                methodCall: ([e, t], a) => {
                                    switch (e) {
                                        case 'open': {
                                            let [e, s] = t;
                                            return (
                                                void 0 === s ? ((this.method = 'GET'), (this.url = tX(e))) : ((this.method = e), (this.url = tX(s))),
                                                (this.logger = this.logger.extend(`${this.method} ${this.url.href}`)),
                                                this.logger.info('open', this.method, this.url.href),
                                                a()
                                            );
                                        }
                                        case 'addEventListener': {
                                            let [e, s] = t;
                                            return this.registerEvent(e, s), this.logger.info('addEventListener', e, s), a();
                                        }
                                        case 'setRequestHeader': {
                                            let [e, s] = t;
                                            return this.requestHeaders.set(e, s), this.logger.info('setRequestHeader', e, s), a();
                                        }
                                        case 'send': {
                                            let [e] = t;
                                            this.request.addEventListener('load', () => {
                                                if (void 0 !== this.onResponse) {
                                                    let e = (function (e, t) {
                                                        return new tu(tu.isResponseWithBody(e.status) ? t : null, {
                                                            url: e.responseURL,
                                                            status: e.status,
                                                            statusText: e.statusText,
                                                            headers: (function (e) {
                                                                let t = new Headers();
                                                                for (let a of e.split(/[\r\n]+/)) {
                                                                    if ('' === a.trim()) continue;
                                                                    let [e, ...s] = a.split(': '),
                                                                        r = s.join(': ');
                                                                    t.append(e, r);
                                                                }
                                                                return t;
                                                            })(e.getAllResponseHeaders()),
                                                        });
                                                    })(this.request, this.request.response);
                                                    this.onResponse.call(this, { response: e, isMockedResponse: this[tB], request: r, requestId: this.requestId });
                                                }
                                            });
                                            let s = 'string' == typeof e ? td.encode(e) : e,
                                                r = this.toFetchApiRequest(s);
                                            (this[tV] = r.clone()),
                                                queueMicrotask(() => {
                                                    (this.onRequest?.call(this, { request: r, requestId: this.requestId }) || Promise.resolve()).finally(() => {
                                                        if (!this[tB])
                                                            return (
                                                                this.logger.info(
                                                                    'request callback settled but request has not been handled (readystate %d), performing as-is...',
                                                                    this.request.readyState,
                                                                ),
                                                                tJ && this.request.setRequestHeader('x-interceptors-internal-request-id', this.requestId),
                                                                a()
                                                            );
                                                    });
                                                });
                                            break;
                                        }
                                        default:
                                            return a();
                                    }
                                },
                            })),
                            tK(
                                this.request,
                                'upload',
                                tF(this.request.upload, {
                                    setProperty: ([e, t], a) => {
                                        switch (e) {
                                            case 'onloadstart':
                                            case 'onprogress':
                                            case 'onaboart':
                                            case 'onerror':
                                            case 'onload':
                                            case 'ontimeout':
                                            case 'onloadend': {
                                                let a = e.slice(2);
                                                this.registerUploadEvent(a, t);
                                            }
                                        }
                                        return a();
                                    },
                                    methodCall: ([e, t], a) => {
                                        if ('addEventListener' === e) {
                                            let [e, s] = t;
                                            return this.registerUploadEvent(e, s), this.logger.info('upload.addEventListener', e, s), a();
                                        }
                                    },
                                }),
                            );
                    }
                    registerEvent(e, t) {
                        let a = (this.events.get(e) || []).concat(t);
                        this.events.set(e, a), this.logger.info('registered event "%s"', e, t);
                    }
                    registerUploadEvent(e, t) {
                        let a = (this.uploadEvents.get(e) || []).concat(t);
                        this.uploadEvents.set(e, a), this.logger.info('registered upload event "%s"', e, t);
                    }
                    async respondWith(e) {
                        if (((this[tB] = !0), this[tV])) {
                            let e = await tG(this[tV]);
                            this.trigger('loadstart', this.request.upload, { loaded: 0, total: e }),
                                this.trigger('progress', this.request.upload, { loaded: e, total: e }),
                                this.trigger('load', this.request.upload, { loaded: e, total: e }),
                                this.trigger('loadend', this.request.upload, { loaded: e, total: e });
                        }
                        this.logger.info('responding with a mocked response: %d %s', e.status, e.statusText),
                            tK(this.request, 'status', e.status),
                            tK(this.request, 'statusText', e.statusText),
                            tK(this.request, 'responseURL', this.url.href),
                            (this.request.getResponseHeader = new Proxy(this.request.getResponseHeader, {
                                apply: (t, a, s) => {
                                    if ((this.logger.info('getResponseHeader', s[0]), this.request.readyState < this.request.HEADERS_RECEIVED))
                                        return this.logger.info('headers not received yet, returning null'), null;
                                    let r = e.headers.get(s[0]);
                                    return this.logger.info('resolved response header "%s" to', s[0], r), r;
                                },
                            })),
                            (this.request.getAllResponseHeaders = new Proxy(this.request.getAllResponseHeaders, {
                                apply: () => {
                                    if ((this.logger.info('getAllResponseHeaders'), this.request.readyState < this.request.HEADERS_RECEIVED))
                                        return this.logger.info('headers not received yet, returning empty string'), '';
                                    let t = Array.from(e.headers.entries())
                                        .map(([e, t]) => `${e}: ${t}`)
                                        .join('\r\n');
                                    return this.logger.info('resolved all response headers to', t), t;
                                },
                            })),
                            Object.defineProperties(this.request, {
                                response: { enumerable: !0, configurable: !1, get: () => this.response },
                                responseText: { enumerable: !0, configurable: !1, get: () => this.responseText },
                                responseXML: { enumerable: !0, configurable: !1, get: () => this.responseXML },
                            });
                        let t = await tG(e.clone());
                        this.logger.info('calculated response body length', t),
                            this.trigger('loadstart', this.request, { loaded: 0, total: t }),
                            this.setReadyState(this.request.HEADERS_RECEIVED),
                            this.setReadyState(this.request.LOADING);
                        let a = () => {
                            this.logger.info('finalizing the mocked response...'),
                                this.setReadyState(this.request.DONE),
                                this.trigger('load', this.request, { loaded: this.responseBuffer.byteLength, total: t }),
                                this.trigger('loadend', this.request, { loaded: this.responseBuffer.byteLength, total: t });
                        };
                        if (e.body) {
                            this.logger.info('mocked response has body, streaming...');
                            let s = e.body.getReader(),
                                r = async () => {
                                    let { value: e, done: i } = await s.read();
                                    if (i) {
                                        this.logger.info('response body stream done!'), a();
                                        return;
                                    }
                                    e &&
                                        (this.logger.info('read response body chunk:', e),
                                        (this.responseBuffer = (function (e, t) {
                                            let a = new Uint8Array(e.byteLength + t.byteLength);
                                            return a.set(e, 0), a.set(t, e.byteLength), a;
                                        })(this.responseBuffer, e)),
                                        this.trigger('progress', this.request, { loaded: this.responseBuffer.byteLength, total: t })),
                                        r();
                                };
                            r();
                        } else a();
                    }
                    responseBufferToText() {
                        var e;
                        return (e = this.responseBuffer), new TextDecoder(void 0).decode(e);
                    }
                    get response() {
                        if ((this.logger.info('getResponse (responseType: %s)', this.request.responseType), this.request.readyState !== this.request.DONE)) return null;
                        switch (this.request.responseType) {
                            case 'json': {
                                let e = (function (e) {
                                    try {
                                        return JSON.parse(e);
                                    } catch (e) {
                                        return null;
                                    }
                                })(this.responseBufferToText());
                                return this.logger.info('resolved response JSON', e), e;
                            }
                            case 'arraybuffer': {
                                var e;
                                let t = (e = this.responseBuffer).buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                                return this.logger.info('resolved response ArrayBuffer', t), t;
                            }
                            case 'blob': {
                                let e = this.request.getResponseHeader('Content-Type') || 'text/plain',
                                    t = new Blob([this.responseBufferToText()], { type: e });
                                return this.logger.info('resolved response Blob (mime type: %s)', t, e), t;
                            }
                            default: {
                                let e = this.responseBufferToText();
                                return this.logger.info('resolving "%s" response type as text', this.request.responseType, e), e;
                            }
                        }
                    }
                    get responseText() {
                        if (
                            (eb('' === this.request.responseType || 'text' === this.request.responseType, 'InvalidStateError: The object is in invalid state.'),
                            this.request.readyState !== this.request.LOADING && this.request.readyState !== this.request.DONE)
                        )
                            return '';
                        let e = this.responseBufferToText();
                        return this.logger.info('getResponseText: "%s"', e), e;
                    }
                    get responseXML() {
                        if (
                            (eb('' === this.request.responseType || 'document' === this.request.responseType, 'InvalidStateError: The object is in invalid state.'),
                            this.request.readyState !== this.request.DONE)
                        )
                            return null;
                        let e = this.request.getResponseHeader('Content-Type') || '';
                        return 'undefined' == typeof DOMParser
                            ? (console.warn(
                                  'Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly.',
                              ),
                              null)
                            : ['application/xhtml+xml', 'application/xml', 'image/svg+xml', 'text/html', 'text/xml'].some((t) => e.startsWith(t))
                              ? new DOMParser().parseFromString(this.responseBufferToText(), e)
                              : null;
                    }
                    errorWith(e) {
                        (this[tB] = !0),
                            this.logger.info('responding with an error'),
                            this.setReadyState(this.request.DONE),
                            this.trigger('error', this.request),
                            this.trigger('loadend', this.request);
                    }
                    setReadyState(e) {
                        if ((this.logger.info('setReadyState: %d -> %d', this.request.readyState, e), this.request.readyState === e))
                            return void this.logger.info('ready state identical, skipping transition...');
                        tK(this.request, 'readyState', e),
                            this.logger.info('set readyState to: %d', e),
                            e !== this.request.UNSENT && (this.logger.info('triggering "readystatechange" event...'), this.trigger('readystatechange', this.request));
                    }
                    trigger(e, t, a) {
                        let s = t[`on${e}`],
                            r = (function (e, t, a) {
                                let s = t_ ? ProgressEvent : tU;
                                return ['error', 'progress', 'loadstart', 'loadend', 'load', 'timeout', 'abort'].includes(t)
                                    ? new s(t, { lengthComputable: !0, loaded: a?.loaded || 0, total: a?.total || 0 })
                                    : new tH(t, { target: e, currentTarget: e });
                            })(t, e, a);
                        for (let [i, o] of (this.logger.info('trigger "%s"', e, a || ''),
                        'function' == typeof s && (this.logger.info('found a direct "%s" callback, calling...', e), s.call(t, r)),
                        t instanceof XMLHttpRequestUpload ? this.uploadEvents : this.events))
                            i === e && (this.logger.info('found %d listener(s) for "%s" event, calling...', o.length, e), o.forEach((e) => e.call(t, r)));
                    }
                    toFetchApiRequest(e) {
                        this.logger.info('converting request to a Fetch API Request...');
                        let t = e instanceof Document ? e.documentElement.innerText : e,
                            a = new Request(this.url.href, {
                                method: this.method,
                                headers: this.requestHeaders,
                                credentials: this.request.withCredentials ? 'include' : 'same-origin',
                                body: ['GET', 'HEAD'].includes(this.method.toUpperCase()) ? null : t,
                            });
                        return (
                            tK(
                                a,
                                'headers',
                                tF(a.headers, {
                                    methodCall: ([e, t], s) => {
                                        switch (e) {
                                            case 'append':
                                            case 'set': {
                                                let [e, a] = t;
                                                this.request.setRequestHeader(e, a);
                                                break;
                                            }
                                            case 'delete': {
                                                let [e] = t;
                                                console.warn(
                                                    `XMLHttpRequest: Cannot remove a "${e}" header from the Fetch API representation of the "${a.method} ${a.url}" request. XMLHttpRequest headers cannot be removed.`,
                                                );
                                            }
                                        }
                                        return s();
                                    },
                                }),
                            ),
                            th(a, this.request),
                            this.logger.info('converted request to a Fetch API Request!', a),
                            a
                        );
                    }
                };
            function tX(e) {
                return 'undefined' == typeof location ? new URL(e) : new URL(e.toString(), location.href);
            }
            function tK(e, t, a) {
                Reflect.defineProperty(e, t, { writable: !0, enumerable: !0, value: a });
            }
            var tQ = class e extends eH {
                    static {
                        this.interceptorSymbol = Symbol('xhr');
                    }
                    constructor() {
                        super(e.interceptorSymbol);
                    }
                    checkEnvironment() {
                        return eF('XMLHttpRequest');
                    }
                    setup() {
                        let e = this.logger.extend('setup');
                        e.info('patching "XMLHttpRequest" module...');
                        let t = globalThis.XMLHttpRequest;
                        eb(!t[tr], 'Failed to patch the "XMLHttpRequest" module: already patched.'),
                            (globalThis.XMLHttpRequest = (function ({ emitter: e, logger: t }) {
                                return new Proxy(globalThis.XMLHttpRequest, {
                                    construct(a, s, r) {
                                        t.info('constructed new XMLHttpRequest');
                                        let i = Reflect.construct(a, s, r),
                                            o = Object.getOwnPropertyDescriptors(a.prototype);
                                        for (let e in o) Reflect.defineProperty(i, e, o[e]);
                                        let n = new tY(i, t);
                                        return (
                                            (n.onRequest = async function ({ request: t, requestId: a }) {
                                                let s = new to(t, {
                                                    passthrough: () => {
                                                        this.logger.info('no mocked response received, performing request as-is...');
                                                    },
                                                    respondWith: async (e) => {
                                                        if (tO(e)) return void this.errorWith(TypeError('Network error'));
                                                        await this.respondWith(e);
                                                    },
                                                    errorWith: (e) => {
                                                        this.logger.info('request errored!', { error: e }), e instanceof Error && this.errorWith(e);
                                                    },
                                                });
                                                this.logger.info('awaiting mocked response...'),
                                                    this.logger.info('emitting the "request" event for %s listener(s)...', e.listenerCount('request')),
                                                    await tI({ request: t, requestId: a, controller: s, emitter: e });
                                            }),
                                            (n.onResponse = async function ({ response: t, isMockedResponse: a, request: s, requestId: r }) {
                                                this.logger.info('emitting the "response" event for %s listener(s)...', e.listenerCount('response')),
                                                    e.emit('response', { response: t, isMockedResponse: a, request: s, requestId: r });
                                            }),
                                            n.request
                                        );
                                    },
                                });
                            })({ emitter: this.emitter, logger: this.logger })),
                            e.info('native "XMLHttpRequest" module patched!', globalThis.XMLHttpRequest.name),
                            Object.defineProperty(globalThis.XMLHttpRequest, tr, { enumerable: !0, configurable: !0, value: !0 }),
                            this.subscriptions.push(() => {
                                Object.defineProperty(globalThis.XMLHttpRequest, tr, { value: void 0 }),
                                    (globalThis.XMLHttpRequest = t),
                                    e.info('native "XMLHttpRequest" module restored!', globalThis.XMLHttpRequest.name);
                            });
                    }
                },
                tZ = class extends eu {
                    constructor(e) {
                        super({ interceptors: [new tQ(), new t$()] }), (this.options = e);
                    }
                    enable() {
                        super.enable(), this.options.quiet || this.#$();
                    }
                    disable() {
                        super.disable(), this.options.quiet || this.#H();
                    }
                    #$() {
                        console.groupCollapsed(`%c${d.J.formatMessage('Mocking enabled (fallback mode).')}`, 'color:orangered;font-weight:bold;'),
                            console.log('%cDocumentation: %chttps://mswjs.io/docs', 'font-weight:bold', 'font-weight:normal'),
                            console.log('Found an issue? https://github.com/mswjs/msw/issues'),
                            console.groupEnd();
                    }
                    #H() {
                        console.log(`%c${d.J.formatMessage('Mocking disabled.')}`, 'color:orangered;font-weight:bold;');
                    }
                };
            function t1(...e) {
                eb(!ey(), d.J.formatMessage('Failed to execute `setupWorker` in a non-browser environment'));
                let t = (function (e) {
                    let t = 0,
                        a = new u(),
                        r = new k(),
                        i = (e) => (e instanceof g ? e : new f(e || [])),
                        o = { ...e },
                        n = i(o.handlers);
                    return {
                        get readyState() {
                            return t;
                        },
                        events: a,
                        configure(e) {
                            (0, s.V1)(0 === t, 'Failed to call "configure()" on the network: cannot configure an already enabled network.'),
                                e.handlers && !Object.is(e.handlers, o.handlers) && (n = i(e.handlers)),
                                (o = { ...o, ...e });
                        },
                        enable() {
                            (0, s.V1)(0 === t, 'Failed to call "enable" on the network: already enabled'), (t = 1);
                            let e = { active: !0 };
                            return (
                                r.subscriptions.push(() => {
                                    e.active = !1;
                                }),
                                b(
                                    o.sources.map(
                                        (t) => (
                                            h.prototype.disable.call(t),
                                            t.on('frame', async ({ frame: t }) => {
                                                t.events.on('*', (t) => {
                                                    e.active && a.emit(t);
                                                });
                                                let s = t.getHandlers(n);
                                                await t.resolve(s, o.onUnhandledFrame || 'warn', o.context);
                                            }),
                                            t.enable()
                                        ),
                                    ),
                                )
                            );
                        },
                        disable: () => (
                            (0, s.V1)(1 === t, 'Failed to call "disable" on the network: already disabled'), (t = 0), r.dispose(), b(o.sources.map((e) => e.disable()))
                        ),
                        use(...e) {
                            n.use(e);
                        },
                        resetHandlers(...e) {
                            n.reset(e);
                        },
                        restoreHandlers() {
                            n.restore();
                        },
                        listHandlers: () =>
                            (function (e) {
                                let t = [...e];
                                return Object.freeze(t), t;
                            })(n.currentHandlers()),
                    };
                })({ sources: [], handlers: e });
                return {
                    async start(e) {
                        var a;
                        if (
                            (e?.waitUntilReady != null &&
                                d.J.warn(
                                    'The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.',
                                ),
                            t.readyState === y.ENABLED)
                        )
                            return void d.J.warn(
                                'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.',
                            );
                        let r = ta()
                            ? await tC.from({
                                  serviceWorker: { url: e?.serviceWorker?.url?.toString() || '/mockServiceWorker.js', options: e?.serviceWorker?.options },
                                  findWorker: e?.findWorker,
                                  quiet: e?.quiet,
                              })
                            : new tZ({ quiet: e?.quiet });
                        if (
                            (t.configure({
                                sources: [r, new eu({ interceptors: [new tt()] })],
                                onUnhandledFrame:
                                    ((a = () => e?.onUnhandledRequest || 'warn'),
                                    ({ frame: e, defaults: t }) => {
                                        let r = a();
                                        if (null != r) {
                                            if ('function' == typeof r) {
                                                let a =
                                                    e instanceof P
                                                        ? e.data.request
                                                        : e instanceof el
                                                          ? new Request(e.data.connection.client.url, { headers: { connection: 'upgrade', upgrade: 'websocket' } })
                                                          : null;
                                                return (
                                                    (0, s.V1)(
                                                        null != a,
                                                        'Failed to coerce a network frame to a legacy `onUnhandledRequest` strategy: unknown frame protocol "%s"',
                                                        e.protocol,
                                                    ),
                                                    r(a, { warning: t.warn, error: t.error })
                                                );
                                            }
                                            return z(e, r);
                                        }
                                    }),
                                context: { quiet: e?.quiet },
                            }),
                            await t.enable(),
                            r instanceof tC)
                        ) {
                            let [, e] = await r.workerPromise;
                            return e;
                        }
                    },
                    stop() {
                        if (t.readyState === y.DISABLED)
                            return void d.J.warn(
                                'Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.',
                            );
                        t.disable(), window.postMessage({ type: 'msw/worker:stop' });
                    },
                    events: t.events,
                    use: t.use.bind(t),
                    resetHandlers: t.resetHandlers.bind(t),
                    restoreHandlers: t.restoreHandlers.bind(t),
                    listHandlers: t.listHandlers.bind(t),
                };
            }
        },
        43234: (e, t, a) => {
            a.d(t, { A: () => c });
            var s = a(60058),
                r = a(56126),
                i = a(83107),
                o = Object.prototype,
                n = Function.prototype.toString,
                l = o.hasOwnProperty,
                u = n.call(Object);
            let c = function (e) {
                if (!(0, i.A)(e) || '[object Object]' != (0, s.A)(e)) return !1;
                var t = (0, r.A)(e);
                if (null === t) return !0;
                var a = l.call(t, 'constructor') && t.constructor;
                return 'function' == typeof a && a instanceof a && n.call(a) == u;
            };
        },
        47302: (e, t, a) => {
            a.d(t, { A: () => i });
            var s = a(44895),
                r = a(55129);
            let i = function (e) {
                return (0, s.A)(function (t, a) {
                    var s = -1,
                        i = a.length,
                        o = i > 1 ? a[i - 1] : void 0,
                        n = i > 2 ? a[2] : void 0;
                    for (
                        o = e.length > 3 && 'function' == typeof o ? (i--, o) : void 0,
                            n && (0, r.A)(a[0], a[1], n) && ((o = i < 3 ? void 0 : o), (i = 1)),
                            t = Object(t);
                        ++s < i;

                    ) {
                        var l = a[s];
                        l && e(t, l, s, o);
                    }
                    return t;
                });
            };
        },
        47787: (e, t, a) => {
            a.d(t, { C: () => ec });
            var s = a(17344),
                r = a(84693);
            function i(e, t) {
                let a = 0,
                    s = e.length,
                    r = !1;
                if (!t) {
                    if (e.startsWith('data:')) return null;
                    for (; a < e.length && 32 >= e.charCodeAt(a); ) a += 1;
                    for (; s > a + 1 && 32 >= e.charCodeAt(s - 1); ) s -= 1;
                    if (47 === e.charCodeAt(a) && 47 === e.charCodeAt(a + 1)) a += 2;
                    else {
                        let t = e.indexOf(':/', a);
                        if (-1 !== t) {
                            let s = t - a,
                                r = e.charCodeAt(a),
                                i = e.charCodeAt(a + 1),
                                o = e.charCodeAt(a + 2),
                                n = e.charCodeAt(a + 3),
                                l = e.charCodeAt(a + 4);
                            if (5 === s && 104 === r && 116 === i && 116 === o && 112 === n && 115 === l);
                            else if (4 === s && 104 === r && 116 === i && 116 === o && 112 === n);
                            else if (3 === s && 119 === r && 115 === i && 115 === o);
                            else if (2 === s && 119 === r && 115 === i);
                            else
                                for (let s = a; s < t; s += 1) {
                                    let t = 32 | e.charCodeAt(s);
                                    if (!((t >= 97 && t <= 122) || (t >= 48 && t <= 57) || 46 === t || 45 === t || 43 === t)) return null;
                                }
                            for (a = t + 2; 47 === e.charCodeAt(a); ) a += 1;
                        }
                    }
                    let t = -1,
                        i = -1,
                        o = -1;
                    for (let n = a; n < s; n += 1) {
                        let a = e.charCodeAt(n);
                        if (35 === a || 47 === a || 63 === a) {
                            s = n;
                            break;
                        }
                        64 === a ? (t = n) : 93 === a ? (i = n) : 58 === a ? (o = n) : a >= 65 && a <= 90 && (r = !0);
                    }
                    if ((-1 !== t && t > a && t < s && (a = t + 1), 91 === e.charCodeAt(a))) return -1 !== i ? e.slice(a + 1, i).toLowerCase() : null;
                    -1 !== o && o > a && o < s && (s = o);
                }
                for (; s > a + 1 && 46 === e.charCodeAt(s - 1); ) s -= 1;
                let i = 0 !== a || s !== e.length ? e.slice(a, s) : e;
                return r ? i.toLowerCase() : i;
            }
            function o(e) {
                return (e >= 97 && e <= 122) || (e >= 48 && e <= 57) || e > 127;
            }
            function n(e) {
                if (e.length > 255 || 0 === e.length || (!o(e.charCodeAt(0)) && 46 !== e.charCodeAt(0) && 95 !== e.charCodeAt(0))) return !1;
                let t = -1,
                    a = -1,
                    s = e.length;
                for (let r = 0; r < s; r += 1) {
                    let s = e.charCodeAt(r);
                    if (46 === s) {
                        if (r - t > 64 || 46 === a || 45 === a || 95 === a) return !1;
                        t = r;
                    } else if (!(o(s) || 45 === s || 95 === s)) return !1;
                    a = s;
                }
                return s - t - 1 <= 63 && 45 !== a;
            }
            function l({
                allowIcannDomains: e = !0,
                allowPrivateDomains: t = !1,
                detectIp: a = !0,
                extractHostname: s = !0,
                mixedInputs: r = !0,
                validHosts: i = null,
                validateHostname: o = !0,
            }) {
                return { allowIcannDomains: e, allowPrivateDomains: t, detectIp: a, extractHostname: s, mixedInputs: r, validHosts: i, validateHostname: o };
            }
            let u = l({}),
                c = (function () {
                    let e = [1, {}],
                        t = [0, { city: e }];
                    return [0, { ck: [0, { www: e }], jp: [0, { kawasaki: t, kitakyushu: t, kobe: t, nagoya: t, sapporo: t, sendai: t, yokohama: t }] }];
                })(),
                h = (function () {
                    let e = [1, {}],
                        t = [2, {}],
                        a = [1, { com: e, edu: e, gov: e, net: e, org: e }],
                        s = [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e }],
                        r = [0, { '*': t }],
                        i = [2, { s: r }],
                        o = [0, { relay: t }],
                        n = [2, { id: t }],
                        l = [1, { gov: e }],
                        u = [0, { airflow: r, 'lambda-url': t, 'transfer-webapp': t }],
                        c = [0, { airflow: r, 'transfer-webapp': t }],
                        h = [0, { 'transfer-webapp': t, 'transfer-webapp-fips': t }],
                        d = [0, { notebook: t, studio: t }],
                        m = [0, { labeling: t, notebook: t, studio: t }],
                        p = [0, { notebook: t }],
                        g = [0, { labeling: t, notebook: t, 'notebook-fips': t, studio: t }],
                        f = [0, { notebook: t, 'notebook-fips': t, studio: t, 'studio-fips': t }],
                        k = [0, { shop: t }],
                        b = [0, { '*': e }],
                        y = [1, { co: t }],
                        v = [0, { objects: t }],
                        w = [2, { nodes: t }],
                        x = [0, { my: t }],
                        S = [0, { s3: t, 's3-accesspoint': t, 's3-website': t }],
                        j = [0, { s3: t, 's3-accesspoint': t }],
                        E = [0, { direct: t }],
                        C = [0, { 'webview-assets': t }],
                        L = [0, { vfs: t, 'webview-assets': t }],
                        q = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: S,
                                s3: t,
                                's3-accesspoint': t,
                                's3-object-lambda': t,
                                's3-website': t,
                                'aws-cloud9': C,
                                cloud9: L,
                            },
                        ],
                        z = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: j,
                                s3: t,
                                's3-accesspoint': t,
                                's3-object-lambda': t,
                                's3-website': t,
                                'aws-cloud9': C,
                                cloud9: L,
                            },
                        ],
                        A = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: S,
                                s3: t,
                                's3-accesspoint': t,
                                's3-object-lambda': t,
                                's3-website': t,
                                'analytics-gateway': t,
                                'aws-cloud9': C,
                                cloud9: L,
                            },
                        ],
                        O = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: S,
                                s3: t,
                                's3-accesspoint': t,
                                's3-object-lambda': t,
                                's3-website': t,
                            },
                        ],
                        I = [0, { s3: t, 's3-accesspoint': t, 's3-accesspoint-fips': t, 's3-fips': t, 's3-website': t }],
                        P = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: I,
                                s3: t,
                                's3-accesspoint': t,
                                's3-accesspoint-fips': t,
                                's3-fips': t,
                                's3-object-lambda': t,
                                's3-website': t,
                                'aws-cloud9': C,
                                cloud9: L,
                            },
                        ],
                        T = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: I,
                                s3: t,
                                's3-accesspoint': t,
                                's3-accesspoint-fips': t,
                                's3-deprecated': t,
                                's3-fips': t,
                                's3-object-lambda': t,
                                's3-website': t,
                                'analytics-gateway': t,
                                'aws-cloud9': C,
                                cloud9: L,
                            },
                        ],
                        R = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: [0, { s3: t, 's3-accesspoint': t, 's3-accesspoint-fips': t, 's3-fips': t }],
                                s3: t,
                                's3-accesspoint': t,
                                's3-accesspoint-fips': t,
                                's3-fips': t,
                                's3-object-lambda': t,
                                's3-website': t,
                            },
                        ],
                        D = [0, { auth: t }],
                        W = [0, { auth: t, 'auth-fips': t }],
                        N = [0, { 'auth-fips': t }],
                        M = [0, { apps: t }],
                        $ = [0, { paas: t }],
                        H = [2, { eu: t }],
                        U = [0, { app: t }],
                        _ = [0, { site: t }],
                        F = [1, { com: e, edu: e, net: e, org: e }],
                        G = [0, { j: t }],
                        B = [0, { dyn: t }],
                        J = [2, { web: t }],
                        V = [1, { co: e, com: e, edu: e, gov: e, net: e, org: e }],
                        Y = [0, { p: t }],
                        X = [0, { user: t }],
                        K = [0, { cdn: t }],
                        Q = [2, { raw: r }],
                        Z = [0, { cust: t, reservd: t }],
                        ee = [0, { cust: t }],
                        et = [0, { s3: t }],
                        ea = [1, { biz: e, com: e, edu: e, gov: e, info: e, net: e, org: e }],
                        es = [0, { ipfs: t }],
                        er = [1, { framer: t }],
                        ei = [0, { forgot: t }],
                        eo = [1, { gs: e }],
                        en = [0, { nes: e }],
                        el = [1, { k12: e, cc: e, lib: e }],
                        eu = [1, { cc: e }],
                        ec = [1, { cc: e, lib: e }];
                    return [
                        0,
                        {
                            ac: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, drr: t, feedback: t, forms: t }],
                            ad: e,
                            ae: [1, { ac: e, co: e, gov: e, mil: e, net: e, org: e, sch: e }],
                            aero: [
                                1,
                                {
                                    airline: e,
                                    airport: e,
                                    'accident-investigation': e,
                                    'accident-prevention': e,
                                    aerobatic: e,
                                    aeroclub: e,
                                    aerodrome: e,
                                    agents: e,
                                    'air-surveillance': e,
                                    'air-traffic-control': e,
                                    aircraft: e,
                                    airtraffic: e,
                                    ambulance: e,
                                    association: e,
                                    author: e,
                                    ballooning: e,
                                    broker: e,
                                    caa: e,
                                    cargo: e,
                                    catering: e,
                                    certification: e,
                                    championship: e,
                                    charter: e,
                                    civilaviation: e,
                                    club: e,
                                    conference: e,
                                    consultant: e,
                                    consulting: e,
                                    control: e,
                                    council: e,
                                    crew: e,
                                    design: e,
                                    dgca: e,
                                    educator: e,
                                    emergency: e,
                                    engine: e,
                                    engineer: e,
                                    entertainment: e,
                                    equipment: e,
                                    exchange: e,
                                    express: e,
                                    federation: e,
                                    flight: e,
                                    freight: e,
                                    fuel: e,
                                    gliding: e,
                                    government: e,
                                    groundhandling: e,
                                    group: e,
                                    hanggliding: e,
                                    homebuilt: e,
                                    insurance: e,
                                    journal: e,
                                    journalist: e,
                                    leasing: e,
                                    logistics: e,
                                    magazine: e,
                                    maintenance: e,
                                    marketplace: e,
                                    media: e,
                                    microlight: e,
                                    modelling: e,
                                    navigation: e,
                                    parachuting: e,
                                    paragliding: e,
                                    'passenger-association': e,
                                    pilot: e,
                                    press: e,
                                    production: e,
                                    recreation: e,
                                    repbody: e,
                                    res: e,
                                    research: e,
                                    rotorcraft: e,
                                    safety: e,
                                    scientist: e,
                                    services: e,
                                    show: e,
                                    skydiving: e,
                                    software: e,
                                    student: e,
                                    taxi: e,
                                    trader: e,
                                    trading: e,
                                    trainer: e,
                                    union: e,
                                    workinggroup: e,
                                    works: e,
                                },
                            ],
                            af: a,
                            ag: [1, { co: e, com: e, net: e, nom: e, org: e, obj: t }],
                            ai: [1, { com: e, net: e, off: e, org: e, uwu: t, framer: t }],
                            al: s,
                            am: [1, { co: e, com: e, commune: e, net: e, org: e, radio: t }],
                            ao: [1, { co: e, ed: e, edu: e, gov: e, gv: e, it: e, og: e, org: e, pb: e }],
                            aq: e,
                            ar: [1, { bet: e, com: e, coop: e, edu: e, gob: e, gov: e, int: e, mil: e, musica: e, mutual: e, net: e, org: e, seg: e, senasa: e, tur: e }],
                            arpa: [1, { e164: e, home: e, 'in-addr': e, ip6: e, iris: e, uri: e, urn: e }],
                            as: l,
                            asia: [1, { cloudns: t, daemon: t, dix: t }],
                            at: [
                                1,
                                {
                                    4: t,
                                    ac: [1, { sth: e }],
                                    co: e,
                                    gv: e,
                                    or: e,
                                    funkfeuer: [0, { wien: t }],
                                    futurecms: [0, { '*': t, ex: r, in: r }],
                                    futurehosting: t,
                                    futuremailing: t,
                                    ortsinfo: [0, { ex: r, kunden: r }],
                                    biz: t,
                                    info: t,
                                    '123webseite': t,
                                    priv: t,
                                    my: t,
                                    myspreadshop: t,
                                    '12hp': t,
                                    '2ix': t,
                                    '4lima': t,
                                    'lima-city': t,
                                },
                            ],
                            au: [
                                1,
                                {
                                    asn: e,
                                    com: [1, { cloudlets: [0, { mel: t }], myspreadshop: t }],
                                    edu: [1, { act: e, catholic: e, nsw: e, nt: e, qld: e, sa: e, tas: e, vic: e, wa: e }],
                                    gov: [1, { qld: e, sa: e, tas: e, vic: e, wa: e }],
                                    id: e,
                                    net: e,
                                    org: e,
                                    conf: e,
                                    oz: e,
                                    act: e,
                                    nsw: e,
                                    nt: e,
                                    qld: e,
                                    sa: e,
                                    tas: e,
                                    vic: e,
                                    wa: e,
                                    hrsn: [0, { vps: t }],
                                },
                            ],
                            aw: [1, { com: e }],
                            ax: e,
                            az: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, int: e, mil: e, name: e, net: e, org: e, pp: e, pro: e }],
                            ba: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, brendly: k, rs: t }],
                            bb: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, net: e, org: e, store: e, tv: e }],
                            bd: [1, { ac: e, ai: e, co: e, com: e, edu: e, gov: e, id: e, info: e, it: e, mil: e, net: e, org: e, sch: e, tv: e }],
                            be: [
                                1,
                                {
                                    ac: e,
                                    cloudns: t,
                                    webhosting: t,
                                    interhostsolutions: [0, { cloud: t }],
                                    kuleuven: [0, { ezproxy: t }],
                                    '123website': t,
                                    myspreadshop: t,
                                    transurl: r,
                                },
                            ],
                            bf: l,
                            bg: [
                                1,
                                {
                                    0: e,
                                    1: e,
                                    2: e,
                                    3: e,
                                    4: e,
                                    5: e,
                                    6: e,
                                    7: e,
                                    8: e,
                                    9: e,
                                    a: e,
                                    b: e,
                                    c: e,
                                    d: e,
                                    e: e,
                                    f: e,
                                    g: e,
                                    h: e,
                                    i: e,
                                    j: e,
                                    k: e,
                                    l: e,
                                    m: e,
                                    n: e,
                                    o: e,
                                    p: e,
                                    q: e,
                                    r: e,
                                    s: e,
                                    t: e,
                                    u: e,
                                    v: e,
                                    w: e,
                                    x: e,
                                    y: e,
                                    z: e,
                                    barsy: t,
                                },
                            ],
                            bh: a,
                            bi: [1, { co: e, com: e, edu: e, or: e, org: e }],
                            biz: [
                                1,
                                {
                                    activetrail: t,
                                    'cloud-ip': t,
                                    cloudns: t,
                                    jozi: t,
                                    dyndns: t,
                                    'for-better': t,
                                    'for-more': t,
                                    'for-some': t,
                                    'for-the': t,
                                    selfip: t,
                                    webhop: t,
                                    orx: t,
                                    mmafan: t,
                                    myftp: t,
                                    'no-ip': t,
                                    dscloud: t,
                                },
                            ],
                            bj: [
                                1,
                                {
                                    africa: e,
                                    agro: e,
                                    architectes: e,
                                    assur: e,
                                    avocats: e,
                                    co: e,
                                    com: e,
                                    eco: e,
                                    econo: e,
                                    edu: e,
                                    info: e,
                                    loisirs: e,
                                    money: e,
                                    net: e,
                                    org: e,
                                    ote: e,
                                    restaurant: e,
                                    resto: e,
                                    tourism: e,
                                    univ: e,
                                },
                            ],
                            bm: a,
                            bn: [1, { com: e, edu: e, gov: e, net: e, org: e, co: t }],
                            bo: [
                                1,
                                {
                                    com: e,
                                    edu: e,
                                    gob: e,
                                    int: e,
                                    mil: e,
                                    net: e,
                                    org: e,
                                    tv: e,
                                    web: e,
                                    academia: e,
                                    agro: e,
                                    arte: e,
                                    blog: e,
                                    bolivia: e,
                                    ciencia: e,
                                    cooperativa: e,
                                    democracia: e,
                                    deporte: e,
                                    ecologia: e,
                                    economia: e,
                                    empresa: e,
                                    indigena: e,
                                    industria: e,
                                    info: e,
                                    medicina: e,
                                    movimiento: e,
                                    musica: e,
                                    natural: e,
                                    nombre: e,
                                    noticias: e,
                                    patria: e,
                                    plurinacional: e,
                                    politica: e,
                                    profesional: e,
                                    pueblo: e,
                                    revista: e,
                                    salud: e,
                                    tecnologia: e,
                                    tksat: e,
                                    transporte: e,
                                    wiki: e,
                                },
                            ],
                            br: [
                                1,
                                {
                                    '9guacu': e,
                                    abc: e,
                                    adm: e,
                                    adv: e,
                                    agr: e,
                                    aju: e,
                                    am: e,
                                    anani: e,
                                    aparecida: e,
                                    api: e,
                                    app: e,
                                    arq: e,
                                    art: e,
                                    ato: e,
                                    b: e,
                                    barueri: e,
                                    belem: e,
                                    bet: e,
                                    bhz: e,
                                    bib: e,
                                    bio: e,
                                    blog: e,
                                    bmd: e,
                                    boavista: e,
                                    bsb: e,
                                    campinagrande: e,
                                    campinas: e,
                                    caxias: e,
                                    cim: e,
                                    cng: e,
                                    cnt: e,
                                    com: [1, { simplesite: t }],
                                    contagem: e,
                                    coop: e,
                                    coz: e,
                                    cri: e,
                                    cuiaba: e,
                                    curitiba: e,
                                    def: e,
                                    des: e,
                                    det: e,
                                    dev: e,
                                    ecn: e,
                                    eco: e,
                                    edu: e,
                                    emp: e,
                                    enf: e,
                                    eng: e,
                                    esp: e,
                                    etc: e,
                                    eti: e,
                                    far: e,
                                    feira: e,
                                    flog: e,
                                    floripa: e,
                                    fm: e,
                                    fnd: e,
                                    fortal: e,
                                    fot: e,
                                    foz: e,
                                    fst: e,
                                    g12: e,
                                    geo: e,
                                    ggf: e,
                                    goiania: e,
                                    gov: [
                                        1,
                                        {
                                            ac: e,
                                            al: e,
                                            am: e,
                                            ap: e,
                                            ba: e,
                                            ce: e,
                                            df: e,
                                            es: e,
                                            go: e,
                                            ma: e,
                                            mg: e,
                                            ms: e,
                                            mt: e,
                                            pa: e,
                                            pb: e,
                                            pe: e,
                                            pi: e,
                                            pr: e,
                                            rj: e,
                                            rn: e,
                                            ro: e,
                                            rr: e,
                                            rs: e,
                                            sc: e,
                                            se: e,
                                            sp: e,
                                            to: e,
                                        },
                                    ],
                                    gru: e,
                                    ia: e,
                                    imb: e,
                                    ind: e,
                                    inf: e,
                                    jab: e,
                                    jampa: e,
                                    jdf: e,
                                    joinville: e,
                                    jor: e,
                                    jus: e,
                                    leg: [
                                        1,
                                        {
                                            ac: t,
                                            al: t,
                                            am: t,
                                            ap: t,
                                            ba: t,
                                            ce: t,
                                            df: t,
                                            es: t,
                                            go: t,
                                            ma: t,
                                            mg: t,
                                            ms: t,
                                            mt: t,
                                            pa: t,
                                            pb: t,
                                            pe: t,
                                            pi: t,
                                            pr: t,
                                            rj: t,
                                            rn: t,
                                            ro: t,
                                            rr: t,
                                            rs: t,
                                            sc: t,
                                            se: t,
                                            sp: t,
                                            to: t,
                                        },
                                    ],
                                    leilao: e,
                                    lel: e,
                                    log: e,
                                    londrina: e,
                                    macapa: e,
                                    maceio: e,
                                    manaus: e,
                                    maringa: e,
                                    mat: e,
                                    med: e,
                                    mil: e,
                                    morena: e,
                                    mp: e,
                                    mus: e,
                                    natal: e,
                                    net: e,
                                    niteroi: e,
                                    nom: b,
                                    not: e,
                                    ntr: e,
                                    odo: e,
                                    ong: e,
                                    org: e,
                                    osasco: e,
                                    palmas: e,
                                    poa: e,
                                    ppg: e,
                                    pro: e,
                                    psc: e,
                                    psi: e,
                                    pvh: e,
                                    qsl: e,
                                    radio: e,
                                    rec: e,
                                    recife: e,
                                    rep: e,
                                    ribeirao: e,
                                    rio: e,
                                    riobranco: e,
                                    riopreto: e,
                                    salvador: e,
                                    sampa: e,
                                    santamaria: e,
                                    santoandre: e,
                                    saobernardo: e,
                                    saogonca: e,
                                    seg: e,
                                    sjc: e,
                                    slg: e,
                                    slz: e,
                                    social: e,
                                    sorocaba: e,
                                    srv: e,
                                    taxi: e,
                                    tc: e,
                                    tec: e,
                                    teo: e,
                                    the: e,
                                    tmp: e,
                                    trd: e,
                                    tur: e,
                                    tv: e,
                                    udi: e,
                                    vet: e,
                                    vix: e,
                                    vlog: e,
                                    wiki: e,
                                    xyz: e,
                                    zlg: e,
                                    tche: t,
                                },
                            ],
                            bs: [1, { com: e, edu: e, gov: e, net: e, org: e, we: t }],
                            bt: a,
                            bv: e,
                            bw: [1, { ac: e, co: e, gov: e, net: e, org: e }],
                            by: [1, { gov: e, mil: e, com: e, of: e, mediatech: t }],
                            bz: [1, { co: e, com: e, edu: e, gov: e, net: e, org: e, za: t, mydns: t, gsj: t }],
                            ca: [
                                1,
                                {
                                    ab: e,
                                    bc: e,
                                    mb: e,
                                    nb: e,
                                    nf: e,
                                    nl: e,
                                    ns: e,
                                    nt: e,
                                    nu: e,
                                    on: e,
                                    pe: e,
                                    qc: e,
                                    sk: e,
                                    yk: e,
                                    gc: e,
                                    barsy: t,
                                    awdev: r,
                                    co: t,
                                    'no-ip': t,
                                    onid: t,
                                    myspreadshop: t,
                                    box: t,
                                },
                            ],
                            cat: e,
                            cc: [
                                1,
                                {
                                    cleverapps: t,
                                    'cloud-ip': t,
                                    cloudns: t,
                                    ftpaccess: t,
                                    'game-server': t,
                                    myphotos: t,
                                    scrapping: t,
                                    twmail: t,
                                    csx: t,
                                    fantasyleague: t,
                                    spawn: [0, { instances: t }],
                                },
                            ],
                            cd: l,
                            cf: e,
                            cg: e,
                            ch: [
                                1,
                                {
                                    square7: t,
                                    cloudns: t,
                                    cloudscale: [0, { cust: t, lpg: v, rma: v }],
                                    objectstorage: [0, { lpg: t, rma: t }],
                                    flow: [0, { ae: [0, { alp1: t }], appengine: t }],
                                    'linkyard-cloud': t,
                                    gotdns: t,
                                    dnsking: t,
                                    '123website': t,
                                    myspreadshop: t,
                                    firenet: [0, { '*': t, svc: r }],
                                    '12hp': t,
                                    '2ix': t,
                                    '4lima': t,
                                    'lima-city': t,
                                },
                            ],
                            ci: [1, { ac: e, 'xn--aroport-bya': e, aéroport: e, asso: e, co: e, com: e, ed: e, edu: e, go: e, gouv: e, int: e, net: e, or: e, org: e }],
                            ck: b,
                            cl: [1, { co: e, gob: e, gov: e, mil: e, cloudns: t }],
                            cm: [1, { co: e, com: e, gov: e, net: e }],
                            cn: [
                                1,
                                {
                                    ac: e,
                                    com: [
                                        1,
                                        {
                                            amazonaws: [
                                                0,
                                                {
                                                    'cn-north-1': [
                                                        0,
                                                        {
                                                            'execute-api': t,
                                                            'emrappui-prod': t,
                                                            'emrnotebooks-prod': t,
                                                            'emrstudio-prod': t,
                                                            rds: r,
                                                            dualstack: S,
                                                            s3: t,
                                                            's3-accesspoint': t,
                                                            's3-deprecated': t,
                                                            's3-object-lambda': t,
                                                            's3-website': t,
                                                        },
                                                    ],
                                                    'cn-northwest-1': [
                                                        0,
                                                        {
                                                            'execute-api': t,
                                                            'emrappui-prod': t,
                                                            'emrnotebooks-prod': t,
                                                            'emrstudio-prod': t,
                                                            rds: r,
                                                            dualstack: j,
                                                            s3: t,
                                                            's3-accesspoint': t,
                                                            's3-object-lambda': t,
                                                            's3-website': t,
                                                        },
                                                    ],
                                                    compute: r,
                                                    airflow: [0, { 'cn-north-1': r, 'cn-northwest-1': r }],
                                                    eb: [0, { 'cn-north-1': t, 'cn-northwest-1': t }],
                                                    elb: r,
                                                },
                                            ],
                                            amazonwebservices: [0, { on: [0, { 'cn-north-1': c, 'cn-northwest-1': c }] }],
                                            sagemaker: [0, { 'cn-north-1': d, 'cn-northwest-1': d }],
                                        },
                                    ],
                                    edu: e,
                                    gov: e,
                                    mil: e,
                                    net: e,
                                    org: e,
                                    'xn--55qx5d': e,
                                    公司: e,
                                    'xn--od0alg': e,
                                    網絡: e,
                                    'xn--io0a7i': e,
                                    网络: e,
                                    ah: e,
                                    bj: e,
                                    cq: e,
                                    fj: e,
                                    gd: e,
                                    gs: e,
                                    gx: e,
                                    gz: e,
                                    ha: e,
                                    hb: e,
                                    he: e,
                                    hi: e,
                                    hk: e,
                                    hl: e,
                                    hn: e,
                                    jl: e,
                                    js: e,
                                    jx: e,
                                    ln: e,
                                    mo: e,
                                    nm: e,
                                    nx: e,
                                    qh: e,
                                    sc: e,
                                    sd: e,
                                    sh: [1, { as: t }],
                                    sn: e,
                                    sx: e,
                                    tj: e,
                                    tw: e,
                                    xj: e,
                                    xz: e,
                                    yn: e,
                                    zj: e,
                                    'canva-apps': t,
                                    canvasite: x,
                                    myqnapcloud: t,
                                    quickconnect: E,
                                },
                            ],
                            co: [
                                1,
                                {
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    mil: e,
                                    net: e,
                                    nom: e,
                                    org: e,
                                    carrd: t,
                                    crd: t,
                                    otap: r,
                                    hidns: t,
                                    leadpages: t,
                                    lpages: t,
                                    mypi: t,
                                    xmit: r,
                                    firewalledreplit: n,
                                    repl: n,
                                    supabase: [2, { realtime: t, storage: t }],
                                    umso: t,
                                },
                            ],
                            com: [
                                1,
                                {
                                    a2hosted: t,
                                    cpserver: t,
                                    adobeaemcloud: [2, { dev: r }],
                                    africa: t,
                                    aivencloud: t,
                                    alibabacloudcs: t,
                                    kasserver: t,
                                    amazonaws: [
                                        0,
                                        {
                                            'af-south-1': q,
                                            'ap-east-1': z,
                                            'ap-northeast-1': A,
                                            'ap-northeast-2': A,
                                            'ap-northeast-3': q,
                                            'ap-south-1': A,
                                            'ap-south-2': O,
                                            'ap-southeast-1': A,
                                            'ap-southeast-2': A,
                                            'ap-southeast-3': O,
                                            'ap-southeast-4': O,
                                            'ap-southeast-5': [
                                                0,
                                                {
                                                    'execute-api': t,
                                                    dualstack: S,
                                                    s3: t,
                                                    's3-accesspoint': t,
                                                    's3-deprecated': t,
                                                    's3-object-lambda': t,
                                                    's3-website': t,
                                                },
                                            ],
                                            'ca-central-1': P,
                                            'ca-west-1': [
                                                0,
                                                {
                                                    'execute-api': t,
                                                    'emrappui-prod': t,
                                                    'emrnotebooks-prod': t,
                                                    'emrstudio-prod': t,
                                                    dualstack: I,
                                                    s3: t,
                                                    's3-accesspoint': t,
                                                    's3-accesspoint-fips': t,
                                                    's3-fips': t,
                                                    's3-object-lambda': t,
                                                    's3-website': t,
                                                },
                                            ],
                                            'eu-central-1': A,
                                            'eu-central-2': O,
                                            'eu-north-1': z,
                                            'eu-south-1': q,
                                            'eu-south-2': O,
                                            'eu-west-1': [
                                                0,
                                                {
                                                    'execute-api': t,
                                                    'emrappui-prod': t,
                                                    'emrnotebooks-prod': t,
                                                    'emrstudio-prod': t,
                                                    dualstack: S,
                                                    s3: t,
                                                    's3-accesspoint': t,
                                                    's3-deprecated': t,
                                                    's3-object-lambda': t,
                                                    's3-website': t,
                                                    'analytics-gateway': t,
                                                    'aws-cloud9': C,
                                                    cloud9: L,
                                                },
                                            ],
                                            'eu-west-2': z,
                                            'eu-west-3': q,
                                            'il-central-1': [
                                                0,
                                                {
                                                    'execute-api': t,
                                                    'emrappui-prod': t,
                                                    'emrnotebooks-prod': t,
                                                    'emrstudio-prod': t,
                                                    dualstack: S,
                                                    s3: t,
                                                    's3-accesspoint': t,
                                                    's3-object-lambda': t,
                                                    's3-website': t,
                                                    'aws-cloud9': C,
                                                    cloud9: [0, { vfs: t }],
                                                },
                                            ],
                                            'me-central-1': O,
                                            'me-south-1': z,
                                            'sa-east-1': q,
                                            'us-east-1': [
                                                2,
                                                {
                                                    'execute-api': t,
                                                    'emrappui-prod': t,
                                                    'emrnotebooks-prod': t,
                                                    'emrstudio-prod': t,
                                                    dualstack: I,
                                                    s3: t,
                                                    's3-accesspoint': t,
                                                    's3-accesspoint-fips': t,
                                                    's3-deprecated': t,
                                                    's3-fips': t,
                                                    's3-object-lambda': t,
                                                    's3-website': t,
                                                    'analytics-gateway': t,
                                                    'aws-cloud9': C,
                                                    cloud9: L,
                                                },
                                            ],
                                            'us-east-2': T,
                                            'us-gov-east-1': R,
                                            'us-gov-west-1': R,
                                            'us-west-1': P,
                                            'us-west-2': T,
                                            compute: r,
                                            'compute-1': r,
                                            airflow: [
                                                0,
                                                {
                                                    'af-south-1': r,
                                                    'ap-east-1': r,
                                                    'ap-northeast-1': r,
                                                    'ap-northeast-2': r,
                                                    'ap-northeast-3': r,
                                                    'ap-south-1': r,
                                                    'ap-south-2': r,
                                                    'ap-southeast-1': r,
                                                    'ap-southeast-2': r,
                                                    'ap-southeast-3': r,
                                                    'ap-southeast-4': r,
                                                    'ap-southeast-5': r,
                                                    'ap-southeast-7': r,
                                                    'ca-central-1': r,
                                                    'ca-west-1': r,
                                                    'eu-central-1': r,
                                                    'eu-central-2': r,
                                                    'eu-north-1': r,
                                                    'eu-south-1': r,
                                                    'eu-south-2': r,
                                                    'eu-west-1': r,
                                                    'eu-west-2': r,
                                                    'eu-west-3': r,
                                                    'il-central-1': r,
                                                    'me-central-1': r,
                                                    'me-south-1': r,
                                                    'sa-east-1': r,
                                                    'us-east-1': r,
                                                    'us-east-2': r,
                                                    'us-west-1': r,
                                                    'us-west-2': r,
                                                },
                                            ],
                                            rds: [
                                                0,
                                                {
                                                    'af-south-1': r,
                                                    'ap-east-1': r,
                                                    'ap-east-2': r,
                                                    'ap-northeast-1': r,
                                                    'ap-northeast-2': r,
                                                    'ap-northeast-3': r,
                                                    'ap-south-1': r,
                                                    'ap-south-2': r,
                                                    'ap-southeast-1': r,
                                                    'ap-southeast-2': r,
                                                    'ap-southeast-3': r,
                                                    'ap-southeast-4': r,
                                                    'ap-southeast-5': r,
                                                    'ap-southeast-6': r,
                                                    'ap-southeast-7': r,
                                                    'ca-central-1': r,
                                                    'ca-west-1': r,
                                                    'eu-central-1': r,
                                                    'eu-central-2': r,
                                                    'eu-west-1': r,
                                                    'eu-west-2': r,
                                                    'eu-west-3': r,
                                                    'il-central-1': r,
                                                    'me-central-1': r,
                                                    'me-south-1': r,
                                                    'mx-central-1': r,
                                                    'sa-east-1': r,
                                                    'us-east-1': r,
                                                    'us-east-2': r,
                                                    'us-gov-east-1': r,
                                                    'us-gov-west-1': r,
                                                    'us-northeast-1': r,
                                                    'us-west-1': r,
                                                    'us-west-2': r,
                                                },
                                            ],
                                            s3: t,
                                            's3-1': t,
                                            's3-ap-east-1': t,
                                            's3-ap-northeast-1': t,
                                            's3-ap-northeast-2': t,
                                            's3-ap-northeast-3': t,
                                            's3-ap-south-1': t,
                                            's3-ap-southeast-1': t,
                                            's3-ap-southeast-2': t,
                                            's3-ca-central-1': t,
                                            's3-eu-central-1': t,
                                            's3-eu-north-1': t,
                                            's3-eu-west-1': t,
                                            's3-eu-west-2': t,
                                            's3-eu-west-3': t,
                                            's3-external-1': t,
                                            's3-fips-us-gov-east-1': t,
                                            's3-fips-us-gov-west-1': t,
                                            's3-global': [0, { accesspoint: [0, { mrap: t }] }],
                                            's3-me-south-1': t,
                                            's3-sa-east-1': t,
                                            's3-us-east-2': t,
                                            's3-us-gov-east-1': t,
                                            's3-us-gov-west-1': t,
                                            's3-us-west-1': t,
                                            's3-us-west-2': t,
                                            's3-website-ap-northeast-1': t,
                                            's3-website-ap-southeast-1': t,
                                            's3-website-ap-southeast-2': t,
                                            's3-website-eu-west-1': t,
                                            's3-website-sa-east-1': t,
                                            's3-website-us-east-1': t,
                                            's3-website-us-gov-west-1': t,
                                            's3-website-us-west-1': t,
                                            's3-website-us-west-2': t,
                                            elb: r,
                                        },
                                    ],
                                    amazoncognito: [
                                        0,
                                        {
                                            'af-south-1': D,
                                            'ap-east-1': D,
                                            'ap-northeast-1': D,
                                            'ap-northeast-2': D,
                                            'ap-northeast-3': D,
                                            'ap-south-1': D,
                                            'ap-south-2': D,
                                            'ap-southeast-1': D,
                                            'ap-southeast-2': D,
                                            'ap-southeast-3': D,
                                            'ap-southeast-4': D,
                                            'ap-southeast-5': D,
                                            'ap-southeast-7': D,
                                            'ca-central-1': D,
                                            'ca-west-1': D,
                                            'eu-central-1': D,
                                            'eu-central-2': D,
                                            'eu-north-1': D,
                                            'eu-south-1': D,
                                            'eu-south-2': D,
                                            'eu-west-1': D,
                                            'eu-west-2': D,
                                            'eu-west-3': D,
                                            'il-central-1': D,
                                            'me-central-1': D,
                                            'me-south-1': D,
                                            'mx-central-1': D,
                                            'sa-east-1': D,
                                            'us-east-1': W,
                                            'us-east-2': W,
                                            'us-gov-east-1': N,
                                            'us-gov-west-1': N,
                                            'us-west-1': W,
                                            'us-west-2': W,
                                        },
                                    ],
                                    amplifyapp: t,
                                    awsapprunner: r,
                                    awsapps: t,
                                    elasticbeanstalk: [
                                        2,
                                        {
                                            'af-south-1': t,
                                            'ap-east-1': t,
                                            'ap-northeast-1': t,
                                            'ap-northeast-2': t,
                                            'ap-northeast-3': t,
                                            'ap-south-1': t,
                                            'ap-southeast-1': t,
                                            'ap-southeast-2': t,
                                            'ap-southeast-3': t,
                                            'ap-southeast-5': t,
                                            'ap-southeast-7': t,
                                            'ca-central-1': t,
                                            'eu-central-1': t,
                                            'eu-north-1': t,
                                            'eu-south-1': t,
                                            'eu-south-2': t,
                                            'eu-west-1': t,
                                            'eu-west-2': t,
                                            'eu-west-3': t,
                                            'il-central-1': t,
                                            'me-central-1': t,
                                            'me-south-1': t,
                                            'sa-east-1': t,
                                            'us-east-1': t,
                                            'us-east-2': t,
                                            'us-gov-east-1': t,
                                            'us-gov-west-1': t,
                                            'us-west-1': t,
                                            'us-west-2': t,
                                        },
                                    ],
                                    awsglobalaccelerator: t,
                                    siiites: t,
                                    appspacehosted: t,
                                    appspaceusercontent: t,
                                    'on-aptible': t,
                                    myasustor: t,
                                    'balena-devices': t,
                                    boutir: t,
                                    bplaced: t,
                                    cafjs: t,
                                    'canva-apps': t,
                                    'canva-hosted-embed': t,
                                    canvacode: t,
                                    'rice-labs': t,
                                    'cdn77-storage': t,
                                    br: t,
                                    cn: t,
                                    de: t,
                                    eu: t,
                                    jpn: t,
                                    mex: t,
                                    ru: t,
                                    sa: t,
                                    uk: t,
                                    us: t,
                                    za: t,
                                    'clever-cloud': [0, { services: r }],
                                    abrdns: t,
                                    dnsabr: t,
                                    'ip-ddns': t,
                                    jdevcloud: t,
                                    wpdevcloud: t,
                                    'cf-ipfs': t,
                                    'cloudflare-ipfs': t,
                                    trycloudflare: t,
                                    co: t,
                                    devinapps: r,
                                    builtwithdark: t,
                                    datadetect: [0, { demo: t, instance: t }],
                                    dattolocal: t,
                                    dattorelay: t,
                                    dattoweb: t,
                                    mydatto: t,
                                    digitaloceanspaces: r,
                                    discordsays: t,
                                    discordsez: t,
                                    drayddns: t,
                                    dreamhosters: t,
                                    durumis: t,
                                    blogdns: t,
                                    cechire: t,
                                    dnsalias: t,
                                    dnsdojo: t,
                                    doesntexist: t,
                                    dontexist: t,
                                    doomdns: t,
                                    'dyn-o-saur': t,
                                    dynalias: t,
                                    'dyndns-at-home': t,
                                    'dyndns-at-work': t,
                                    'dyndns-blog': t,
                                    'dyndns-free': t,
                                    'dyndns-home': t,
                                    'dyndns-ip': t,
                                    'dyndns-mail': t,
                                    'dyndns-office': t,
                                    'dyndns-pics': t,
                                    'dyndns-remote': t,
                                    'dyndns-server': t,
                                    'dyndns-web': t,
                                    'dyndns-wiki': t,
                                    'dyndns-work': t,
                                    'est-a-la-maison': t,
                                    'est-a-la-masion': t,
                                    'est-le-patron': t,
                                    'est-mon-blogueur': t,
                                    'from-ak': t,
                                    'from-al': t,
                                    'from-ar': t,
                                    'from-ca': t,
                                    'from-ct': t,
                                    'from-dc': t,
                                    'from-de': t,
                                    'from-fl': t,
                                    'from-ga': t,
                                    'from-hi': t,
                                    'from-ia': t,
                                    'from-id': t,
                                    'from-il': t,
                                    'from-in': t,
                                    'from-ks': t,
                                    'from-ky': t,
                                    'from-ma': t,
                                    'from-md': t,
                                    'from-mi': t,
                                    'from-mn': t,
                                    'from-mo': t,
                                    'from-ms': t,
                                    'from-mt': t,
                                    'from-nc': t,
                                    'from-nd': t,
                                    'from-ne': t,
                                    'from-nh': t,
                                    'from-nj': t,
                                    'from-nm': t,
                                    'from-nv': t,
                                    'from-oh': t,
                                    'from-ok': t,
                                    'from-or': t,
                                    'from-pa': t,
                                    'from-pr': t,
                                    'from-ri': t,
                                    'from-sc': t,
                                    'from-sd': t,
                                    'from-tn': t,
                                    'from-tx': t,
                                    'from-ut': t,
                                    'from-va': t,
                                    'from-vt': t,
                                    'from-wa': t,
                                    'from-wi': t,
                                    'from-wv': t,
                                    'from-wy': t,
                                    getmyip: t,
                                    gotdns: t,
                                    'hobby-site': t,
                                    homelinux: t,
                                    homeunix: t,
                                    iamallama: t,
                                    'is-a-anarchist': t,
                                    'is-a-blogger': t,
                                    'is-a-bookkeeper': t,
                                    'is-a-bulls-fan': t,
                                    'is-a-caterer': t,
                                    'is-a-chef': t,
                                    'is-a-conservative': t,
                                    'is-a-cpa': t,
                                    'is-a-cubicle-slave': t,
                                    'is-a-democrat': t,
                                    'is-a-designer': t,
                                    'is-a-doctor': t,
                                    'is-a-financialadvisor': t,
                                    'is-a-geek': t,
                                    'is-a-green': t,
                                    'is-a-guru': t,
                                    'is-a-hard-worker': t,
                                    'is-a-hunter': t,
                                    'is-a-landscaper': t,
                                    'is-a-lawyer': t,
                                    'is-a-liberal': t,
                                    'is-a-libertarian': t,
                                    'is-a-llama': t,
                                    'is-a-musician': t,
                                    'is-a-nascarfan': t,
                                    'is-a-nurse': t,
                                    'is-a-painter': t,
                                    'is-a-personaltrainer': t,
                                    'is-a-photographer': t,
                                    'is-a-player': t,
                                    'is-a-republican': t,
                                    'is-a-rockstar': t,
                                    'is-a-socialist': t,
                                    'is-a-student': t,
                                    'is-a-teacher': t,
                                    'is-a-techie': t,
                                    'is-a-therapist': t,
                                    'is-an-accountant': t,
                                    'is-an-actor': t,
                                    'is-an-actress': t,
                                    'is-an-anarchist': t,
                                    'is-an-artist': t,
                                    'is-an-engineer': t,
                                    'is-an-entertainer': t,
                                    'is-certified': t,
                                    'is-gone': t,
                                    'is-into-anime': t,
                                    'is-into-cars': t,
                                    'is-into-cartoons': t,
                                    'is-into-games': t,
                                    'is-leet': t,
                                    'is-not-certified': t,
                                    'is-slick': t,
                                    'is-uberleet': t,
                                    'is-with-theband': t,
                                    'isa-geek': t,
                                    'isa-hockeynut': t,
                                    issmarterthanyou: t,
                                    'likes-pie': t,
                                    likescandy: t,
                                    'neat-url': t,
                                    'saves-the-whales': t,
                                    selfip: t,
                                    'sells-for-less': t,
                                    'sells-for-u': t,
                                    servebbs: t,
                                    'simple-url': t,
                                    'space-to-rent': t,
                                    'teaches-yoga': t,
                                    writesthisblog: t,
                                    ddnsfree: t,
                                    ddnsgeek: t,
                                    giize: t,
                                    gleeze: t,
                                    kozow: t,
                                    loseyourip: t,
                                    ooguy: t,
                                    theworkpc: t,
                                    mytuleap: t,
                                    'tuleap-partners': t,
                                    encoreapi: t,
                                    evennode: [0, { 'eu-1': t, 'eu-2': t, 'eu-3': t, 'eu-4': t, 'us-1': t, 'us-2': t, 'us-3': t, 'us-4': t }],
                                    onfabrica: t,
                                    'fastly-edge': t,
                                    'fastly-terrarium': t,
                                    'fastvps-server': t,
                                    mydobiss: t,
                                    firebaseapp: t,
                                    fldrv: t,
                                    forgeblocks: t,
                                    framercanvas: t,
                                    'freebox-os': t,
                                    freeboxos: t,
                                    freemyip: t,
                                    aliases121: t,
                                    gentapps: t,
                                    gentlentapis: t,
                                    githubusercontent: t,
                                    '0emm': r,
                                    appspot: [2, { r: r }],
                                    blogspot: t,
                                    codespot: t,
                                    googleapis: t,
                                    googlecode: t,
                                    pagespeedmobilizer: t,
                                    withgoogle: t,
                                    withyoutube: t,
                                    grayjayleagues: t,
                                    hatenablog: t,
                                    hatenadiary: t,
                                    herokuapp: t,
                                    gr: t,
                                    smushcdn: t,
                                    wphostedmail: t,
                                    wpmucdn: t,
                                    pixolino: t,
                                    'apps-1and1': t,
                                    'live-website': t,
                                    'webspace-host': t,
                                    dopaas: t,
                                    'hosted-by-previder': $,
                                    hosteur: [0, { 'rag-cloud': t, 'rag-cloud-ch': t }],
                                    'ik-server': [0, { jcloud: t, 'jcloud-ver-jpc': t }],
                                    jelastic: [0, { demo: t }],
                                    massivegrid: $,
                                    wafaicloud: [0, { jed: t, ryd: t }],
                                    'eu1-plenit': t,
                                    'la1-plenit': t,
                                    'us1-plenit': t,
                                    webadorsite: t,
                                    joyent: [0, { cns: r }],
                                    'on-forge': t,
                                    'on-vapor': t,
                                    lpusercontent: t,
                                    linode: [0, { members: t, nodebalancer: r }],
                                    linodeobjects: r,
                                    linodeusercontent: [0, { ip: t }],
                                    localtonet: t,
                                    lovableproject: t,
                                    barsycenter: t,
                                    barsyonline: t,
                                    lutrausercontent: r,
                                    modelscape: t,
                                    mwcloudnonprod: t,
                                    polyspace: t,
                                    mazeplay: t,
                                    miniserver: t,
                                    atmeta: t,
                                    fbsbx: M,
                                    meteorapp: H,
                                    routingthecloud: t,
                                    'same-app': t,
                                    'same-preview': t,
                                    mydbserver: t,
                                    mochausercontent: t,
                                    hostedpi: t,
                                    'mythic-beasts': [
                                        0,
                                        { caracal: t, customer: t, fentiger: t, lynx: t, ocelot: t, oncilla: t, onza: t, sphinx: t, vs: t, x: t, yali: t },
                                    ],
                                    nospamproxy: [0, { cloud: [2, { o365: t }] }],
                                    '4u': t,
                                    nfshost: t,
                                    '3utilities': t,
                                    blogsyte: t,
                                    ciscofreak: t,
                                    damnserver: t,
                                    ddnsking: t,
                                    ditchyourip: t,
                                    dnsiskinky: t,
                                    dynns: t,
                                    geekgalaxy: t,
                                    'health-carereform': t,
                                    homesecuritymac: t,
                                    homesecuritypc: t,
                                    myactivedirectory: t,
                                    mysecuritycamera: t,
                                    myvnc: t,
                                    'net-freaks': t,
                                    onthewifi: t,
                                    point2this: t,
                                    quicksytes: t,
                                    securitytactics: t,
                                    servebeer: t,
                                    servecounterstrike: t,
                                    serveexchange: t,
                                    serveftp: t,
                                    servegame: t,
                                    servehalflife: t,
                                    servehttp: t,
                                    servehumour: t,
                                    serveirc: t,
                                    servemp3: t,
                                    servep2p: t,
                                    servepics: t,
                                    servequake: t,
                                    servesarcasm: t,
                                    stufftoread: t,
                                    unusualperson: t,
                                    workisboring: t,
                                    myiphost: t,
                                    observableusercontent: [0, { static: t }],
                                    simplesite: t,
                                    oaiusercontent: r,
                                    orsites: t,
                                    operaunite: t,
                                    'customer-oci': [0, { '*': t, oci: r, ocp: r, ocs: r }],
                                    oraclecloudapps: r,
                                    oraclegovcloudapps: r,
                                    'authgear-staging': t,
                                    authgearapps: t,
                                    skygearapp: t,
                                    outsystemscloud: t,
                                    ownprovider: t,
                                    pgfog: t,
                                    pagexl: t,
                                    gotpantheon: t,
                                    paywhirl: r,
                                    upsunapp: t,
                                    'postman-echo': t,
                                    prgmr: [0, { xen: t }],
                                    'project-study': [0, { dev: t }],
                                    pythonanywhere: H,
                                    qa2: t,
                                    'alpha-myqnapcloud': t,
                                    'dev-myqnapcloud': t,
                                    mycloudnas: t,
                                    mynascloud: t,
                                    myqnapcloud: t,
                                    qualifioapp: t,
                                    ladesk: t,
                                    qualyhqpartner: r,
                                    qualyhqportal: r,
                                    qbuser: t,
                                    quipelements: r,
                                    rackmaze: t,
                                    'readthedocs-hosted': t,
                                    rhcloud: t,
                                    onrender: t,
                                    render: U,
                                    'subsc-pay': t,
                                    '180r': t,
                                    dojin: t,
                                    sakuratan: t,
                                    sakuraweb: t,
                                    x0: t,
                                    code: [0, { builder: r, 'dev-builder': r, 'stg-builder': r }],
                                    salesforce: [0, { platform: [0, { 'code-builder-stg': [0, { test: [0, { '001': r }] }] }] }],
                                    logoip: t,
                                    scrysec: t,
                                    'firewall-gateway': t,
                                    myshopblocks: t,
                                    myshopify: t,
                                    shopitsite: t,
                                    '1kapp': t,
                                    appchizi: t,
                                    applinzi: t,
                                    sinaapp: t,
                                    vipsinaapp: t,
                                    streamlitapp: t,
                                    'try-snowplow': t,
                                    'playstation-cloud': t,
                                    myspreadshop: t,
                                    'w-corp-staticblitz': t,
                                    'w-credentialless-staticblitz': t,
                                    'w-staticblitz': t,
                                    'stackhero-network': t,
                                    stdlib: [0, { api: t }],
                                    strapiapp: [2, { media: t }],
                                    'streak-link': t,
                                    streaklinks: t,
                                    streakusercontent: t,
                                    'temp-dns': t,
                                    dsmynas: t,
                                    familyds: t,
                                    mytabit: t,
                                    taveusercontent: t,
                                    'tb-hosting': _,
                                    reservd: t,
                                    thingdustdata: t,
                                    'townnews-staging': t,
                                    typeform: [0, { pro: t }],
                                    hk: t,
                                    it: t,
                                    'deus-canvas': t,
                                    vultrobjects: r,
                                    wafflecell: t,
                                    hotelwithflight: t,
                                    'reserve-online': t,
                                    cprapid: t,
                                    pleskns: t,
                                    remotewd: t,
                                    wiardweb: [0, { pages: t }],
                                    wixsite: t,
                                    wixstudio: t,
                                    messwithdns: t,
                                    'woltlab-demo': t,
                                    wpenginepowered: [2, { js: t }],
                                    xnbay: [2, { u2: t, 'u2-local': t }],
                                    yolasite: t,
                                },
                            ],
                            coop: e,
                            cr: [1, { ac: e, co: e, ed: e, fi: e, go: e, or: e, sa: e }],
                            cu: [1, { com: e, edu: e, gob: e, inf: e, nat: e, net: e, org: e }],
                            cv: [1, { com: e, edu: e, id: e, int: e, net: e, nome: e, org: e, publ: e }],
                            cw: F,
                            cx: [1, { gov: e, cloudns: t, ath: t, info: t, assessments: t, calculators: t, funnels: t, paynow: t, quizzes: t, researched: t, tests: t }],
                            cy: [1, { ac: e, biz: e, com: [1, { scaleforce: G }], ekloges: e, gov: e, ltd: e, mil: e, net: e, org: e, press: e, pro: e, tm: e }],
                            cz: [
                                1,
                                {
                                    gov: e,
                                    contentproxy9: [0, { rsc: t }],
                                    realm: t,
                                    e4: t,
                                    co: t,
                                    metacentrum: [0, { cloud: r, custom: t }],
                                    muni: [0, { cloud: [0, { flt: t, usr: t }] }],
                                },
                            ],
                            de: [
                                1,
                                {
                                    bplaced: t,
                                    square7: t,
                                    com: t,
                                    cosidns: B,
                                    dnsupdater: t,
                                    'dynamisches-dns': t,
                                    'internet-dns': t,
                                    'l-o-g-i-n': t,
                                    ddnss: [2, { dyn: t, dyndns: t }],
                                    'dyn-ip24': t,
                                    dyndns1: t,
                                    'home-webserver': [2, { dyn: t }],
                                    'myhome-server': t,
                                    dnshome: t,
                                    fuettertdasnetz: t,
                                    isteingeek: t,
                                    istmein: t,
                                    lebtimnetz: t,
                                    leitungsen: t,
                                    traeumtgerade: t,
                                    frusky: r,
                                    goip: t,
                                    'xn--gnstigbestellen-zvb': t,
                                    günstigbestellen: t,
                                    'xn--gnstigliefern-wob': t,
                                    günstigliefern: t,
                                    'hs-heilbronn': [0, { it: [0, { pages: t, 'pages-research': t }] }],
                                    'dyn-berlin': t,
                                    'in-berlin': t,
                                    'in-brb': t,
                                    'in-butter': t,
                                    'in-dsl': t,
                                    'in-vpn': t,
                                    iservschule: t,
                                    'mein-iserv': t,
                                    schuldock: t,
                                    schulplattform: t,
                                    schulserver: t,
                                    'test-iserv': t,
                                    keymachine: t,
                                    co: t,
                                    'git-repos': t,
                                    'lcube-server': t,
                                    'svn-repos': t,
                                    barsy: t,
                                    webspaceconfig: t,
                                    '123webseite': t,
                                    rub: t,
                                    'ruhr-uni-bochum': [2, { noc: [0, { io: t }] }],
                                    logoip: t,
                                    'firewall-gateway': t,
                                    'my-gateway': t,
                                    'my-router': t,
                                    spdns: t,
                                    my: t,
                                    speedpartner: [0, { customer: t }],
                                    myspreadshop: t,
                                    'taifun-dns': t,
                                    '12hp': t,
                                    '2ix': t,
                                    '4lima': t,
                                    'lima-city': t,
                                    'dd-dns': t,
                                    'dray-dns': t,
                                    draydns: t,
                                    'dyn-vpn': t,
                                    dynvpn: t,
                                    'mein-vigor': t,
                                    'my-vigor': t,
                                    'my-wan': t,
                                    'syno-ds': t,
                                    'synology-diskstation': t,
                                    'synology-ds': t,
                                    'virtual-user': t,
                                    virtualuser: t,
                                    'community-pro': t,
                                    diskussionsbereich: t,
                                    xenonconnect: r,
                                },
                            ],
                            dj: e,
                            dk: [1, { biz: t, co: t, firm: t, reg: t, store: t, '123hjemmeside': t, myspreadshop: t }],
                            dm: V,
                            do: [1, { art: e, com: e, edu: e, gob: e, gov: e, mil: e, net: e, org: e, sld: e, web: e }],
                            dz: [1, { art: e, asso: e, com: e, edu: e, gov: e, net: e, org: e, pol: e, soc: e, tm: e }],
                            ec: [
                                1,
                                {
                                    abg: e,
                                    adm: e,
                                    agron: e,
                                    arqt: e,
                                    art: e,
                                    bar: e,
                                    chef: e,
                                    com: e,
                                    cont: e,
                                    cpa: e,
                                    cue: e,
                                    dent: e,
                                    dgn: e,
                                    disco: e,
                                    doc: e,
                                    edu: e,
                                    eng: e,
                                    esm: e,
                                    fin: e,
                                    fot: e,
                                    gal: e,
                                    gob: e,
                                    gov: e,
                                    gye: e,
                                    ibr: e,
                                    info: e,
                                    k12: e,
                                    lat: e,
                                    loj: e,
                                    med: e,
                                    mil: e,
                                    mktg: e,
                                    mon: e,
                                    net: e,
                                    ntr: e,
                                    odont: e,
                                    org: e,
                                    pro: e,
                                    prof: e,
                                    psic: e,
                                    psiq: e,
                                    pub: e,
                                    rio: e,
                                    rrpp: e,
                                    sal: e,
                                    tech: e,
                                    tul: e,
                                    tur: e,
                                    uio: e,
                                    vet: e,
                                    xxx: e,
                                    base: t,
                                    official: t,
                                },
                            ],
                            edu: [1, { rit: [0, { 'git-pages': t }] }],
                            ee: [1, { aip: e, com: e, edu: e, fie: e, gov: e, lib: e, med: e, org: e, pri: e, riik: e }],
                            eg: [1, { ac: e, com: e, edu: e, eun: e, gov: e, info: e, me: e, mil: e, name: e, net: e, org: e, sci: e, sport: e, tv: e }],
                            er: b,
                            es: [1, { com: e, edu: e, gob: e, nom: e, org: e, '123miweb': t, myspreadshop: t }],
                            et: [1, { biz: e, com: e, edu: e, gov: e, info: e, name: e, net: e, org: e }],
                            eu: [1, { cloudns: t, prvw: t, dogado: [0, { jelastic: t }], barsy: t, spdns: t, nxa: r, directwp: t, transurl: r, diskstation: t }],
                            fi: [
                                1,
                                {
                                    aland: e,
                                    dy: t,
                                    'xn--hkkinen-5wa': t,
                                    häkkinen: t,
                                    iki: t,
                                    cloudplatform: [0, { fi: t }],
                                    datacenter: [0, { demo: t, paas: t }],
                                    kapsi: t,
                                    '123kotisivu': t,
                                    myspreadshop: t,
                                },
                            ],
                            fj: [1, { ac: e, biz: e, com: e, edu: e, gov: e, id: e, info: e, mil: e, name: e, net: e, org: e, pro: e }],
                            fk: b,
                            fm: [1, { com: e, edu: e, net: e, org: e, radio: t, user: r }],
                            fo: e,
                            fr: [
                                1,
                                {
                                    asso: e,
                                    com: e,
                                    gouv: e,
                                    nom: e,
                                    prd: e,
                                    tm: e,
                                    avoues: e,
                                    cci: e,
                                    greta: e,
                                    'huissier-justice': e,
                                    'en-root': t,
                                    'fbx-os': t,
                                    fbxos: t,
                                    'freebox-os': t,
                                    freeboxos: t,
                                    goupile: t,
                                    '123siteweb': t,
                                    'on-web': t,
                                    'chirurgiens-dentistes-en-france': t,
                                    dedibox: t,
                                    aeroport: t,
                                    avocat: t,
                                    chambagri: t,
                                    'chirurgiens-dentistes': t,
                                    'experts-comptables': t,
                                    medecin: t,
                                    notaires: t,
                                    pharmacien: t,
                                    port: t,
                                    veterinaire: t,
                                    myspreadshop: t,
                                    ynh: t,
                                },
                            ],
                            ga: e,
                            gb: e,
                            gd: [1, { edu: e, gov: e }],
                            ge: [1, { com: e, edu: e, gov: e, net: e, org: e, pvt: e, school: e }],
                            gf: e,
                            gg: [1, { co: e, net: e, org: e, ply: [0, { at: r, d6: t }], botdash: t, kaas: t, stackit: t, panel: [2, { daemon: t }] }],
                            gh: [1, { biz: e, com: e, edu: e, gov: e, mil: e, net: e, org: e }],
                            gi: [1, { com: e, edu: e, gov: e, ltd: e, mod: e, org: e }],
                            gl: [1, { co: e, com: e, edu: e, net: e, org: e }],
                            gm: e,
                            gn: [1, { ac: e, com: e, edu: e, gov: e, net: e, org: e }],
                            gov: e,
                            gp: [1, { asso: e, com: e, edu: e, mobi: e, net: e, org: e }],
                            gq: e,
                            gr: [1, { com: e, edu: e, gov: e, net: e, org: e, barsy: t, simplesite: t }],
                            gs: e,
                            gt: [1, { com: e, edu: e, gob: e, ind: e, mil: e, net: e, org: e }],
                            gu: [1, { com: e, edu: e, gov: e, guam: e, info: e, net: e, org: e, web: e }],
                            gw: [1, { nx: t }],
                            gy: V,
                            hk: [
                                1,
                                {
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    idv: e,
                                    net: e,
                                    org: e,
                                    'xn--ciqpn': e,
                                    个人: e,
                                    'xn--gmqw5a': e,
                                    個人: e,
                                    'xn--55qx5d': e,
                                    公司: e,
                                    'xn--mxtq1m': e,
                                    政府: e,
                                    'xn--lcvr32d': e,
                                    敎育: e,
                                    'xn--wcvs22d': e,
                                    教育: e,
                                    'xn--gmq050i': e,
                                    箇人: e,
                                    'xn--uc0atv': e,
                                    組織: e,
                                    'xn--uc0ay4a': e,
                                    組织: e,
                                    'xn--od0alg': e,
                                    網絡: e,
                                    'xn--zf0avx': e,
                                    網络: e,
                                    'xn--mk0axi': e,
                                    组織: e,
                                    'xn--tn0ag': e,
                                    组织: e,
                                    'xn--od0aq3b': e,
                                    网絡: e,
                                    'xn--io0a7i': e,
                                    网络: e,
                                    inc: t,
                                    ltd: t,
                                },
                            ],
                            hm: e,
                            hn: [1, { com: e, edu: e, gob: e, mil: e, net: e, org: e }],
                            hr: [1, { com: e, from: e, iz: e, name: e, brendly: k }],
                            ht: [
                                1,
                                {
                                    adult: e,
                                    art: e,
                                    asso: e,
                                    com: e,
                                    coop: e,
                                    edu: e,
                                    firm: e,
                                    gouv: e,
                                    info: e,
                                    med: e,
                                    net: e,
                                    org: e,
                                    perso: e,
                                    pol: e,
                                    pro: e,
                                    rel: e,
                                    shop: e,
                                    rt: t,
                                },
                            ],
                            hu: [
                                1,
                                {
                                    2e3: e,
                                    agrar: e,
                                    bolt: e,
                                    casino: e,
                                    city: e,
                                    co: e,
                                    erotica: e,
                                    erotika: e,
                                    film: e,
                                    forum: e,
                                    games: e,
                                    hotel: e,
                                    info: e,
                                    ingatlan: e,
                                    jogasz: e,
                                    konyvelo: e,
                                    lakas: e,
                                    media: e,
                                    news: e,
                                    org: e,
                                    priv: e,
                                    reklam: e,
                                    sex: e,
                                    shop: e,
                                    sport: e,
                                    suli: e,
                                    szex: e,
                                    tm: e,
                                    tozsde: e,
                                    utazas: e,
                                    video: e,
                                },
                            ],
                            id: [1, { ac: e, biz: e, co: e, desa: e, go: e, kop: e, mil: e, my: e, net: e, or: e, ponpes: e, sch: e, web: e, e: t, zone: t }],
                            ie: [1, { gov: e, myspreadshop: t }],
                            il: [1, { ac: e, co: [1, { ravpage: t, mytabit: t, tabitorder: t }], gov: e, idf: e, k12: e, muni: e, net: e, org: e }],
                            'xn--4dbrk0ce': [1, { 'xn--4dbgdty6c': e, 'xn--5dbhl8d': e, 'xn--8dbq2a': e, 'xn--hebda8b': e }],
                            ישראל: [1, { אקדמיה: e, ישוב: e, צהל: e, ממשל: e }],
                            im: [1, { ac: e, co: [1, { ltd: e, plc: e }], com: e, net: e, org: e, tt: e, tv: e }],
                            in: [
                                1,
                                {
                                    '5g': e,
                                    '6g': e,
                                    ac: e,
                                    ai: e,
                                    am: e,
                                    bank: e,
                                    bihar: e,
                                    biz: e,
                                    business: e,
                                    ca: e,
                                    cn: e,
                                    co: e,
                                    com: e,
                                    coop: e,
                                    cs: e,
                                    delhi: e,
                                    dr: e,
                                    edu: e,
                                    er: e,
                                    fin: e,
                                    firm: e,
                                    gen: e,
                                    gov: e,
                                    gujarat: e,
                                    ind: e,
                                    info: e,
                                    int: e,
                                    internet: e,
                                    io: e,
                                    me: e,
                                    mil: e,
                                    net: e,
                                    nic: e,
                                    org: e,
                                    pg: e,
                                    post: e,
                                    pro: e,
                                    res: e,
                                    travel: e,
                                    tv: e,
                                    uk: e,
                                    up: e,
                                    us: e,
                                    cloudns: t,
                                    barsy: t,
                                    web: t,
                                    supabase: t,
                                },
                            ],
                            info: [
                                1,
                                {
                                    cloudns: t,
                                    'dynamic-dns': t,
                                    'barrel-of-knowledge': t,
                                    'barrell-of-knowledge': t,
                                    dyndns: t,
                                    'for-our': t,
                                    'groks-the': t,
                                    'groks-this': t,
                                    'here-for-more': t,
                                    knowsitall: t,
                                    selfip: t,
                                    webhop: t,
                                    barsy: t,
                                    mayfirst: t,
                                    mittwald: t,
                                    mittwaldserver: t,
                                    typo3server: t,
                                    dvrcam: t,
                                    ilovecollege: t,
                                    'no-ip': t,
                                    forumz: t,
                                    nsupdate: t,
                                    dnsupdate: t,
                                    'v-info': t,
                                },
                            ],
                            int: [1, { eu: e }],
                            io: [
                                1,
                                {
                                    2038: t,
                                    co: e,
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    mil: e,
                                    net: e,
                                    nom: e,
                                    org: e,
                                    'on-acorn': r,
                                    myaddr: t,
                                    apigee: t,
                                    'b-data': t,
                                    beagleboard: t,
                                    bitbucket: t,
                                    bluebite: t,
                                    boxfuse: t,
                                    brave: i,
                                    browsersafetymark: t,
                                    bubble: K,
                                    bubbleapps: t,
                                    bigv: [0, { uk0: t }],
                                    cleverapps: t,
                                    cloudbeesusercontent: t,
                                    dappnode: [0, { dyndns: t }],
                                    darklang: t,
                                    definima: t,
                                    dedyn: t,
                                    icp0: Q,
                                    icp1: Q,
                                    qzz: t,
                                    'fh-muenster': t,
                                    shw: t,
                                    forgerock: [0, { id: t }],
                                    gitbook: t,
                                    github: t,
                                    gitlab: t,
                                    lolipop: t,
                                    'hasura-app': t,
                                    hostyhosting: t,
                                    hypernode: t,
                                    moonscale: r,
                                    beebyte: $,
                                    beebyteapp: [0, { sekd1: t }],
                                    jele: t,
                                    webthings: t,
                                    loginline: t,
                                    barsy: t,
                                    azurecontainer: r,
                                    ngrok: [2, { ap: t, au: t, eu: t, in: t, jp: t, sa: t, us: t }],
                                    nodeart: [0, { stage: t }],
                                    pantheonsite: t,
                                    pstmn: [2, { mock: t }],
                                    protonet: t,
                                    qcx: [2, { sys: r }],
                                    qoto: t,
                                    vaporcloud: t,
                                    myrdbx: t,
                                    'rb-hosting': _,
                                    'on-k3s': r,
                                    'on-rio': r,
                                    readthedocs: t,
                                    resindevice: t,
                                    resinstaging: [0, { devices: t }],
                                    hzc: t,
                                    sandcats: t,
                                    scrypted: [0, { client: t }],
                                    'mo-siemens': t,
                                    lair: M,
                                    stolos: r,
                                    musician: t,
                                    utwente: t,
                                    edugit: t,
                                    telebit: t,
                                    thingdust: [0, { dev: Z, disrec: Z, prod: ee, testing: Z }],
                                    tickets: t,
                                    webflow: t,
                                    webflowtest: t,
                                    editorx: t,
                                    wixstudio: t,
                                    basicserver: t,
                                    virtualserver: t,
                                },
                            ],
                            iq: s,
                            ir: [
                                1,
                                {
                                    ac: e,
                                    co: e,
                                    gov: e,
                                    id: e,
                                    net: e,
                                    org: e,
                                    sch: e,
                                    'xn--mgba3a4f16a': e,
                                    ایران: e,
                                    'xn--mgba3a4fra': e,
                                    ايران: e,
                                    arvanedge: t,
                                    vistablog: t,
                                },
                            ],
                            is: e,
                            it: [
                                1,
                                {
                                    edu: e,
                                    gov: e,
                                    abr: e,
                                    abruzzo: e,
                                    'aosta-valley': e,
                                    aostavalley: e,
                                    bas: e,
                                    basilicata: e,
                                    cal: e,
                                    calabria: e,
                                    cam: e,
                                    campania: e,
                                    'emilia-romagna': e,
                                    emiliaromagna: e,
                                    emr: e,
                                    'friuli-v-giulia': e,
                                    'friuli-ve-giulia': e,
                                    'friuli-vegiulia': e,
                                    'friuli-venezia-giulia': e,
                                    'friuli-veneziagiulia': e,
                                    'friuli-vgiulia': e,
                                    'friuliv-giulia': e,
                                    'friulive-giulia': e,
                                    friulivegiulia: e,
                                    'friulivenezia-giulia': e,
                                    friuliveneziagiulia: e,
                                    friulivgiulia: e,
                                    fvg: e,
                                    laz: e,
                                    lazio: e,
                                    lig: e,
                                    liguria: e,
                                    lom: e,
                                    lombardia: e,
                                    lombardy: e,
                                    lucania: e,
                                    mar: e,
                                    marche: e,
                                    mol: e,
                                    molise: e,
                                    piedmont: e,
                                    piemonte: e,
                                    pmn: e,
                                    pug: e,
                                    puglia: e,
                                    sar: e,
                                    sardegna: e,
                                    sardinia: e,
                                    sic: e,
                                    sicilia: e,
                                    sicily: e,
                                    taa: e,
                                    tos: e,
                                    toscana: e,
                                    'trentin-sud-tirol': e,
                                    'xn--trentin-sd-tirol-rzb': e,
                                    'trentin-s\xfcd-tirol': e,
                                    'trentin-sudtirol': e,
                                    'xn--trentin-sdtirol-7vb': e,
                                    'trentin-s\xfcdtirol': e,
                                    'trentin-sued-tirol': e,
                                    'trentin-suedtirol': e,
                                    trentino: e,
                                    'trentino-a-adige': e,
                                    'trentino-aadige': e,
                                    'trentino-alto-adige': e,
                                    'trentino-altoadige': e,
                                    'trentino-s-tirol': e,
                                    'trentino-stirol': e,
                                    'trentino-sud-tirol': e,
                                    'xn--trentino-sd-tirol-c3b': e,
                                    'trentino-s\xfcd-tirol': e,
                                    'trentino-sudtirol': e,
                                    'xn--trentino-sdtirol-szb': e,
                                    'trentino-s\xfcdtirol': e,
                                    'trentino-sued-tirol': e,
                                    'trentino-suedtirol': e,
                                    'trentinoa-adige': e,
                                    trentinoaadige: e,
                                    'trentinoalto-adige': e,
                                    trentinoaltoadige: e,
                                    'trentinos-tirol': e,
                                    trentinostirol: e,
                                    'trentinosud-tirol': e,
                                    'xn--trentinosd-tirol-rzb': e,
                                    'trentinos\xfcd-tirol': e,
                                    trentinosudtirol: e,
                                    'xn--trentinosdtirol-7vb': e,
                                    trentinosüdtirol: e,
                                    'trentinosued-tirol': e,
                                    trentinosuedtirol: e,
                                    'trentinsud-tirol': e,
                                    'xn--trentinsd-tirol-6vb': e,
                                    'trentins\xfcd-tirol': e,
                                    trentinsudtirol: e,
                                    'xn--trentinsdtirol-nsb': e,
                                    trentinsüdtirol: e,
                                    'trentinsued-tirol': e,
                                    trentinsuedtirol: e,
                                    tuscany: e,
                                    umb: e,
                                    umbria: e,
                                    'val-d-aosta': e,
                                    'val-daosta': e,
                                    'vald-aosta': e,
                                    valdaosta: e,
                                    'valle-aosta': e,
                                    'valle-d-aosta': e,
                                    'valle-daosta': e,
                                    valleaosta: e,
                                    'valled-aosta': e,
                                    valledaosta: e,
                                    'vallee-aoste': e,
                                    'xn--valle-aoste-ebb': e,
                                    'vall\xe9e-aoste': e,
                                    'vallee-d-aoste': e,
                                    'xn--valle-d-aoste-ehb': e,
                                    'vall\xe9e-d-aoste': e,
                                    valleeaoste: e,
                                    'xn--valleaoste-e7a': e,
                                    valléeaoste: e,
                                    valleedaoste: e,
                                    'xn--valledaoste-ebb': e,
                                    valléedaoste: e,
                                    vao: e,
                                    vda: e,
                                    ven: e,
                                    veneto: e,
                                    ag: e,
                                    agrigento: e,
                                    al: e,
                                    alessandria: e,
                                    'alto-adige': e,
                                    altoadige: e,
                                    an: e,
                                    ancona: e,
                                    'andria-barletta-trani': e,
                                    'andria-trani-barletta': e,
                                    andriabarlettatrani: e,
                                    andriatranibarletta: e,
                                    ao: e,
                                    aosta: e,
                                    aoste: e,
                                    ap: e,
                                    aq: e,
                                    aquila: e,
                                    ar: e,
                                    arezzo: e,
                                    'ascoli-piceno': e,
                                    ascolipiceno: e,
                                    asti: e,
                                    at: e,
                                    av: e,
                                    avellino: e,
                                    ba: e,
                                    balsan: e,
                                    'balsan-sudtirol': e,
                                    'xn--balsan-sdtirol-nsb': e,
                                    'balsan-s\xfcdtirol': e,
                                    'balsan-suedtirol': e,
                                    bari: e,
                                    'barletta-trani-andria': e,
                                    barlettatraniandria: e,
                                    belluno: e,
                                    benevento: e,
                                    bergamo: e,
                                    bg: e,
                                    bi: e,
                                    biella: e,
                                    bl: e,
                                    bn: e,
                                    bo: e,
                                    bologna: e,
                                    bolzano: e,
                                    'bolzano-altoadige': e,
                                    bozen: e,
                                    'bozen-sudtirol': e,
                                    'xn--bozen-sdtirol-2ob': e,
                                    'bozen-s\xfcdtirol': e,
                                    'bozen-suedtirol': e,
                                    br: e,
                                    brescia: e,
                                    brindisi: e,
                                    bs: e,
                                    bt: e,
                                    bulsan: e,
                                    'bulsan-sudtirol': e,
                                    'xn--bulsan-sdtirol-nsb': e,
                                    'bulsan-s\xfcdtirol': e,
                                    'bulsan-suedtirol': e,
                                    bz: e,
                                    ca: e,
                                    cagliari: e,
                                    caltanissetta: e,
                                    'campidano-medio': e,
                                    campidanomedio: e,
                                    campobasso: e,
                                    'carbonia-iglesias': e,
                                    carboniaiglesias: e,
                                    'carrara-massa': e,
                                    carraramassa: e,
                                    caserta: e,
                                    catania: e,
                                    catanzaro: e,
                                    cb: e,
                                    ce: e,
                                    'cesena-forli': e,
                                    'xn--cesena-forl-mcb': e,
                                    'cesena-forl\xec': e,
                                    cesenaforli: e,
                                    'xn--cesenaforl-i8a': e,
                                    cesenaforlì: e,
                                    ch: e,
                                    chieti: e,
                                    ci: e,
                                    cl: e,
                                    cn: e,
                                    co: e,
                                    como: e,
                                    cosenza: e,
                                    cr: e,
                                    cremona: e,
                                    crotone: e,
                                    cs: e,
                                    ct: e,
                                    cuneo: e,
                                    cz: e,
                                    'dell-ogliastra': e,
                                    dellogliastra: e,
                                    en: e,
                                    enna: e,
                                    fc: e,
                                    fe: e,
                                    fermo: e,
                                    ferrara: e,
                                    fg: e,
                                    fi: e,
                                    firenze: e,
                                    florence: e,
                                    fm: e,
                                    foggia: e,
                                    'forli-cesena': e,
                                    'xn--forl-cesena-fcb': e,
                                    'forl\xec-cesena': e,
                                    forlicesena: e,
                                    'xn--forlcesena-c8a': e,
                                    forlìcesena: e,
                                    fr: e,
                                    frosinone: e,
                                    ge: e,
                                    genoa: e,
                                    genova: e,
                                    go: e,
                                    gorizia: e,
                                    gr: e,
                                    grosseto: e,
                                    'iglesias-carbonia': e,
                                    iglesiascarbonia: e,
                                    im: e,
                                    imperia: e,
                                    is: e,
                                    isernia: e,
                                    kr: e,
                                    'la-spezia': e,
                                    laquila: e,
                                    laspezia: e,
                                    latina: e,
                                    lc: e,
                                    le: e,
                                    lecce: e,
                                    lecco: e,
                                    li: e,
                                    livorno: e,
                                    lo: e,
                                    lodi: e,
                                    lt: e,
                                    lu: e,
                                    lucca: e,
                                    macerata: e,
                                    mantova: e,
                                    'massa-carrara': e,
                                    massacarrara: e,
                                    matera: e,
                                    mb: e,
                                    mc: e,
                                    me: e,
                                    'medio-campidano': e,
                                    mediocampidano: e,
                                    messina: e,
                                    mi: e,
                                    milan: e,
                                    milano: e,
                                    mn: e,
                                    mo: e,
                                    modena: e,
                                    monza: e,
                                    'monza-brianza': e,
                                    'monza-e-della-brianza': e,
                                    monzabrianza: e,
                                    monzaebrianza: e,
                                    monzaedellabrianza: e,
                                    ms: e,
                                    mt: e,
                                    na: e,
                                    naples: e,
                                    napoli: e,
                                    no: e,
                                    novara: e,
                                    nu: e,
                                    nuoro: e,
                                    og: e,
                                    ogliastra: e,
                                    'olbia-tempio': e,
                                    olbiatempio: e,
                                    or: e,
                                    oristano: e,
                                    ot: e,
                                    pa: e,
                                    padova: e,
                                    padua: e,
                                    palermo: e,
                                    parma: e,
                                    pavia: e,
                                    pc: e,
                                    pd: e,
                                    pe: e,
                                    perugia: e,
                                    'pesaro-urbino': e,
                                    pesarourbino: e,
                                    pescara: e,
                                    pg: e,
                                    pi: e,
                                    piacenza: e,
                                    pisa: e,
                                    pistoia: e,
                                    pn: e,
                                    po: e,
                                    pordenone: e,
                                    potenza: e,
                                    pr: e,
                                    prato: e,
                                    pt: e,
                                    pu: e,
                                    pv: e,
                                    pz: e,
                                    ra: e,
                                    ragusa: e,
                                    ravenna: e,
                                    rc: e,
                                    re: e,
                                    'reggio-calabria': e,
                                    'reggio-emilia': e,
                                    reggiocalabria: e,
                                    reggioemilia: e,
                                    rg: e,
                                    ri: e,
                                    rieti: e,
                                    rimini: e,
                                    rm: e,
                                    rn: e,
                                    ro: e,
                                    roma: e,
                                    rome: e,
                                    rovigo: e,
                                    sa: e,
                                    salerno: e,
                                    sassari: e,
                                    savona: e,
                                    si: e,
                                    siena: e,
                                    siracusa: e,
                                    so: e,
                                    sondrio: e,
                                    sp: e,
                                    sr: e,
                                    ss: e,
                                    'xn--sdtirol-n2a': e,
                                    südtirol: e,
                                    suedtirol: e,
                                    sv: e,
                                    ta: e,
                                    taranto: e,
                                    te: e,
                                    'tempio-olbia': e,
                                    tempioolbia: e,
                                    teramo: e,
                                    terni: e,
                                    tn: e,
                                    to: e,
                                    torino: e,
                                    tp: e,
                                    tr: e,
                                    'trani-andria-barletta': e,
                                    'trani-barletta-andria': e,
                                    traniandriabarletta: e,
                                    tranibarlettaandria: e,
                                    trapani: e,
                                    trento: e,
                                    treviso: e,
                                    trieste: e,
                                    ts: e,
                                    turin: e,
                                    tv: e,
                                    ud: e,
                                    udine: e,
                                    'urbino-pesaro': e,
                                    urbinopesaro: e,
                                    va: e,
                                    varese: e,
                                    vb: e,
                                    vc: e,
                                    ve: e,
                                    venezia: e,
                                    venice: e,
                                    verbania: e,
                                    vercelli: e,
                                    verona: e,
                                    vi: e,
                                    'vibo-valentia': e,
                                    vibovalentia: e,
                                    vicenza: e,
                                    viterbo: e,
                                    vr: e,
                                    vs: e,
                                    vt: e,
                                    vv: e,
                                    '12chars': t,
                                    ibxos: t,
                                    iliadboxos: t,
                                    neen: [0, { jc: t }],
                                    '123homepage': t,
                                    '16-b': t,
                                    '32-b': t,
                                    '64-b': t,
                                    myspreadshop: t,
                                    syncloud: t,
                                },
                            ],
                            je: [1, { co: e, net: e, org: e, of: t }],
                            jm: b,
                            jo: [1, { agri: e, ai: e, com: e, edu: e, eng: e, fm: e, gov: e, mil: e, net: e, org: e, per: e, phd: e, sch: e, tv: e }],
                            jobs: e,
                            jp: [
                                1,
                                {
                                    ac: e,
                                    ad: e,
                                    co: e,
                                    ed: e,
                                    go: e,
                                    gr: e,
                                    lg: e,
                                    ne: [1, { aseinet: X, gehirn: t, ivory: t, 'mail-box': t, mints: t, mokuren: t, opal: t, sakura: t, sumomo: t, topaz: t }],
                                    or: e,
                                    aichi: [
                                        1,
                                        {
                                            aisai: e,
                                            ama: e,
                                            anjo: e,
                                            asuke: e,
                                            chiryu: e,
                                            chita: e,
                                            fuso: e,
                                            gamagori: e,
                                            handa: e,
                                            hazu: e,
                                            hekinan: e,
                                            higashiura: e,
                                            ichinomiya: e,
                                            inazawa: e,
                                            inuyama: e,
                                            isshiki: e,
                                            iwakura: e,
                                            kanie: e,
                                            kariya: e,
                                            kasugai: e,
                                            kira: e,
                                            kiyosu: e,
                                            komaki: e,
                                            konan: e,
                                            kota: e,
                                            mihama: e,
                                            miyoshi: e,
                                            nishio: e,
                                            nisshin: e,
                                            obu: e,
                                            oguchi: e,
                                            oharu: e,
                                            okazaki: e,
                                            owariasahi: e,
                                            seto: e,
                                            shikatsu: e,
                                            shinshiro: e,
                                            shitara: e,
                                            tahara: e,
                                            takahama: e,
                                            tobishima: e,
                                            toei: e,
                                            togo: e,
                                            tokai: e,
                                            tokoname: e,
                                            toyoake: e,
                                            toyohashi: e,
                                            toyokawa: e,
                                            toyone: e,
                                            toyota: e,
                                            tsushima: e,
                                            yatomi: e,
                                        },
                                    ],
                                    akita: [
                                        1,
                                        {
                                            akita: e,
                                            daisen: e,
                                            fujisato: e,
                                            gojome: e,
                                            hachirogata: e,
                                            happou: e,
                                            higashinaruse: e,
                                            honjo: e,
                                            honjyo: e,
                                            ikawa: e,
                                            kamikoani: e,
                                            kamioka: e,
                                            katagami: e,
                                            kazuno: e,
                                            kitaakita: e,
                                            kosaka: e,
                                            kyowa: e,
                                            misato: e,
                                            mitane: e,
                                            moriyoshi: e,
                                            nikaho: e,
                                            noshiro: e,
                                            odate: e,
                                            oga: e,
                                            ogata: e,
                                            semboku: e,
                                            yokote: e,
                                            yurihonjo: e,
                                        },
                                    ],
                                    aomori: [
                                        1,
                                        {
                                            aomori: e,
                                            gonohe: e,
                                            hachinohe: e,
                                            hashikami: e,
                                            hiranai: e,
                                            hirosaki: e,
                                            itayanagi: e,
                                            kuroishi: e,
                                            misawa: e,
                                            mutsu: e,
                                            nakadomari: e,
                                            noheji: e,
                                            oirase: e,
                                            owani: e,
                                            rokunohe: e,
                                            sannohe: e,
                                            shichinohe: e,
                                            shingo: e,
                                            takko: e,
                                            towada: e,
                                            tsugaru: e,
                                            tsuruta: e,
                                        },
                                    ],
                                    chiba: [
                                        1,
                                        {
                                            abiko: e,
                                            asahi: e,
                                            chonan: e,
                                            chosei: e,
                                            choshi: e,
                                            chuo: e,
                                            funabashi: e,
                                            futtsu: e,
                                            hanamigawa: e,
                                            ichihara: e,
                                            ichikawa: e,
                                            ichinomiya: e,
                                            inzai: e,
                                            isumi: e,
                                            kamagaya: e,
                                            kamogawa: e,
                                            kashiwa: e,
                                            katori: e,
                                            katsuura: e,
                                            kimitsu: e,
                                            kisarazu: e,
                                            kozaki: e,
                                            kujukuri: e,
                                            kyonan: e,
                                            matsudo: e,
                                            midori: e,
                                            mihama: e,
                                            minamiboso: e,
                                            mobara: e,
                                            mutsuzawa: e,
                                            nagara: e,
                                            nagareyama: e,
                                            narashino: e,
                                            narita: e,
                                            noda: e,
                                            oamishirasato: e,
                                            omigawa: e,
                                            onjuku: e,
                                            otaki: e,
                                            sakae: e,
                                            sakura: e,
                                            shimofusa: e,
                                            shirako: e,
                                            shiroi: e,
                                            shisui: e,
                                            sodegaura: e,
                                            sosa: e,
                                            tako: e,
                                            tateyama: e,
                                            togane: e,
                                            tohnosho: e,
                                            tomisato: e,
                                            urayasu: e,
                                            yachimata: e,
                                            yachiyo: e,
                                            yokaichiba: e,
                                            yokoshibahikari: e,
                                            yotsukaido: e,
                                        },
                                    ],
                                    ehime: [
                                        1,
                                        {
                                            ainan: e,
                                            honai: e,
                                            ikata: e,
                                            imabari: e,
                                            iyo: e,
                                            kamijima: e,
                                            kihoku: e,
                                            kumakogen: e,
                                            masaki: e,
                                            matsuno: e,
                                            matsuyama: e,
                                            namikata: e,
                                            niihama: e,
                                            ozu: e,
                                            saijo: e,
                                            seiyo: e,
                                            shikokuchuo: e,
                                            tobe: e,
                                            toon: e,
                                            uchiko: e,
                                            uwajima: e,
                                            yawatahama: e,
                                        },
                                    ],
                                    fukui: [
                                        1,
                                        {
                                            echizen: e,
                                            eiheiji: e,
                                            fukui: e,
                                            ikeda: e,
                                            katsuyama: e,
                                            mihama: e,
                                            minamiechizen: e,
                                            obama: e,
                                            ohi: e,
                                            ono: e,
                                            sabae: e,
                                            sakai: e,
                                            takahama: e,
                                            tsuruga: e,
                                            wakasa: e,
                                        },
                                    ],
                                    fukuoka: [
                                        1,
                                        {
                                            ashiya: e,
                                            buzen: e,
                                            chikugo: e,
                                            chikuho: e,
                                            chikujo: e,
                                            chikushino: e,
                                            chikuzen: e,
                                            chuo: e,
                                            dazaifu: e,
                                            fukuchi: e,
                                            hakata: e,
                                            higashi: e,
                                            hirokawa: e,
                                            hisayama: e,
                                            iizuka: e,
                                            inatsuki: e,
                                            kaho: e,
                                            kasuga: e,
                                            kasuya: e,
                                            kawara: e,
                                            keisen: e,
                                            koga: e,
                                            kurate: e,
                                            kurogi: e,
                                            kurume: e,
                                            minami: e,
                                            miyako: e,
                                            miyama: e,
                                            miyawaka: e,
                                            mizumaki: e,
                                            munakata: e,
                                            nakagawa: e,
                                            nakama: e,
                                            nishi: e,
                                            nogata: e,
                                            ogori: e,
                                            okagaki: e,
                                            okawa: e,
                                            oki: e,
                                            omuta: e,
                                            onga: e,
                                            onojo: e,
                                            oto: e,
                                            saigawa: e,
                                            sasaguri: e,
                                            shingu: e,
                                            shinyoshitomi: e,
                                            shonai: e,
                                            soeda: e,
                                            sue: e,
                                            tachiarai: e,
                                            tagawa: e,
                                            takata: e,
                                            toho: e,
                                            toyotsu: e,
                                            tsuiki: e,
                                            ukiha: e,
                                            umi: e,
                                            usui: e,
                                            yamada: e,
                                            yame: e,
                                            yanagawa: e,
                                            yukuhashi: e,
                                        },
                                    ],
                                    fukushima: [
                                        1,
                                        {
                                            aizubange: e,
                                            aizumisato: e,
                                            aizuwakamatsu: e,
                                            asakawa: e,
                                            bandai: e,
                                            date: e,
                                            fukushima: e,
                                            furudono: e,
                                            futaba: e,
                                            hanawa: e,
                                            higashi: e,
                                            hirata: e,
                                            hirono: e,
                                            iitate: e,
                                            inawashiro: e,
                                            ishikawa: e,
                                            iwaki: e,
                                            izumizaki: e,
                                            kagamiishi: e,
                                            kaneyama: e,
                                            kawamata: e,
                                            kitakata: e,
                                            kitashiobara: e,
                                            koori: e,
                                            koriyama: e,
                                            kunimi: e,
                                            miharu: e,
                                            mishima: e,
                                            namie: e,
                                            nango: e,
                                            nishiaizu: e,
                                            nishigo: e,
                                            okuma: e,
                                            omotego: e,
                                            ono: e,
                                            otama: e,
                                            samegawa: e,
                                            shimogo: e,
                                            shirakawa: e,
                                            showa: e,
                                            soma: e,
                                            sukagawa: e,
                                            taishin: e,
                                            tamakawa: e,
                                            tanagura: e,
                                            tenei: e,
                                            yabuki: e,
                                            yamato: e,
                                            yamatsuri: e,
                                            yanaizu: e,
                                            yugawa: e,
                                        },
                                    ],
                                    gifu: [
                                        1,
                                        {
                                            anpachi: e,
                                            ena: e,
                                            gifu: e,
                                            ginan: e,
                                            godo: e,
                                            gujo: e,
                                            hashima: e,
                                            hichiso: e,
                                            hida: e,
                                            higashishirakawa: e,
                                            ibigawa: e,
                                            ikeda: e,
                                            kakamigahara: e,
                                            kani: e,
                                            kasahara: e,
                                            kasamatsu: e,
                                            kawaue: e,
                                            kitagata: e,
                                            mino: e,
                                            minokamo: e,
                                            mitake: e,
                                            mizunami: e,
                                            motosu: e,
                                            nakatsugawa: e,
                                            ogaki: e,
                                            sakahogi: e,
                                            seki: e,
                                            sekigahara: e,
                                            shirakawa: e,
                                            tajimi: e,
                                            takayama: e,
                                            tarui: e,
                                            toki: e,
                                            tomika: e,
                                            wanouchi: e,
                                            yamagata: e,
                                            yaotsu: e,
                                            yoro: e,
                                        },
                                    ],
                                    gunma: [
                                        1,
                                        {
                                            annaka: e,
                                            chiyoda: e,
                                            fujioka: e,
                                            higashiagatsuma: e,
                                            isesaki: e,
                                            itakura: e,
                                            kanna: e,
                                            kanra: e,
                                            katashina: e,
                                            kawaba: e,
                                            kiryu: e,
                                            kusatsu: e,
                                            maebashi: e,
                                            meiwa: e,
                                            midori: e,
                                            minakami: e,
                                            naganohara: e,
                                            nakanojo: e,
                                            nanmoku: e,
                                            numata: e,
                                            oizumi: e,
                                            ora: e,
                                            ota: e,
                                            shibukawa: e,
                                            shimonita: e,
                                            shinto: e,
                                            showa: e,
                                            takasaki: e,
                                            takayama: e,
                                            tamamura: e,
                                            tatebayashi: e,
                                            tomioka: e,
                                            tsukiyono: e,
                                            tsumagoi: e,
                                            ueno: e,
                                            yoshioka: e,
                                        },
                                    ],
                                    hiroshima: [
                                        1,
                                        {
                                            asaminami: e,
                                            daiwa: e,
                                            etajima: e,
                                            fuchu: e,
                                            fukuyama: e,
                                            hatsukaichi: e,
                                            higashihiroshima: e,
                                            hongo: e,
                                            jinsekikogen: e,
                                            kaita: e,
                                            kui: e,
                                            kumano: e,
                                            kure: e,
                                            mihara: e,
                                            miyoshi: e,
                                            naka: e,
                                            onomichi: e,
                                            osakikamijima: e,
                                            otake: e,
                                            saka: e,
                                            sera: e,
                                            seranishi: e,
                                            shinichi: e,
                                            shobara: e,
                                            takehara: e,
                                        },
                                    ],
                                    hokkaido: [
                                        1,
                                        {
                                            abashiri: e,
                                            abira: e,
                                            aibetsu: e,
                                            akabira: e,
                                            akkeshi: e,
                                            asahikawa: e,
                                            ashibetsu: e,
                                            ashoro: e,
                                            assabu: e,
                                            atsuma: e,
                                            bibai: e,
                                            biei: e,
                                            bifuka: e,
                                            bihoro: e,
                                            biratori: e,
                                            chippubetsu: e,
                                            chitose: e,
                                            date: e,
                                            ebetsu: e,
                                            embetsu: e,
                                            eniwa: e,
                                            erimo: e,
                                            esan: e,
                                            esashi: e,
                                            fukagawa: e,
                                            fukushima: e,
                                            furano: e,
                                            furubira: e,
                                            haboro: e,
                                            hakodate: e,
                                            hamatonbetsu: e,
                                            hidaka: e,
                                            higashikagura: e,
                                            higashikawa: e,
                                            hiroo: e,
                                            hokuryu: e,
                                            hokuto: e,
                                            honbetsu: e,
                                            horokanai: e,
                                            horonobe: e,
                                            ikeda: e,
                                            imakane: e,
                                            ishikari: e,
                                            iwamizawa: e,
                                            iwanai: e,
                                            kamifurano: e,
                                            kamikawa: e,
                                            kamishihoro: e,
                                            kamisunagawa: e,
                                            kamoenai: e,
                                            kayabe: e,
                                            kembuchi: e,
                                            kikonai: e,
                                            kimobetsu: e,
                                            kitahiroshima: e,
                                            kitami: e,
                                            kiyosato: e,
                                            koshimizu: e,
                                            kunneppu: e,
                                            kuriyama: e,
                                            kuromatsunai: e,
                                            kushiro: e,
                                            kutchan: e,
                                            kyowa: e,
                                            mashike: e,
                                            matsumae: e,
                                            mikasa: e,
                                            minamifurano: e,
                                            mombetsu: e,
                                            moseushi: e,
                                            mukawa: e,
                                            muroran: e,
                                            naie: e,
                                            nakagawa: e,
                                            nakasatsunai: e,
                                            nakatombetsu: e,
                                            nanae: e,
                                            nanporo: e,
                                            nayoro: e,
                                            nemuro: e,
                                            niikappu: e,
                                            niki: e,
                                            nishiokoppe: e,
                                            noboribetsu: e,
                                            numata: e,
                                            obihiro: e,
                                            obira: e,
                                            oketo: e,
                                            okoppe: e,
                                            otaru: e,
                                            otobe: e,
                                            otofuke: e,
                                            otoineppu: e,
                                            oumu: e,
                                            ozora: e,
                                            pippu: e,
                                            rankoshi: e,
                                            rebun: e,
                                            rikubetsu: e,
                                            rishiri: e,
                                            rishirifuji: e,
                                            saroma: e,
                                            sarufutsu: e,
                                            shakotan: e,
                                            shari: e,
                                            shibecha: e,
                                            shibetsu: e,
                                            shikabe: e,
                                            shikaoi: e,
                                            shimamaki: e,
                                            shimizu: e,
                                            shimokawa: e,
                                            shinshinotsu: e,
                                            shintoku: e,
                                            shiranuka: e,
                                            shiraoi: e,
                                            shiriuchi: e,
                                            sobetsu: e,
                                            sunagawa: e,
                                            taiki: e,
                                            takasu: e,
                                            takikawa: e,
                                            takinoue: e,
                                            teshikaga: e,
                                            tobetsu: e,
                                            tohma: e,
                                            tomakomai: e,
                                            tomari: e,
                                            toya: e,
                                            toyako: e,
                                            toyotomi: e,
                                            toyoura: e,
                                            tsubetsu: e,
                                            tsukigata: e,
                                            urakawa: e,
                                            urausu: e,
                                            uryu: e,
                                            utashinai: e,
                                            wakkanai: e,
                                            wassamu: e,
                                            yakumo: e,
                                            yoichi: e,
                                        },
                                    ],
                                    hyogo: [
                                        1,
                                        {
                                            aioi: e,
                                            akashi: e,
                                            ako: e,
                                            amagasaki: e,
                                            aogaki: e,
                                            asago: e,
                                            ashiya: e,
                                            awaji: e,
                                            fukusaki: e,
                                            goshiki: e,
                                            harima: e,
                                            himeji: e,
                                            ichikawa: e,
                                            inagawa: e,
                                            itami: e,
                                            kakogawa: e,
                                            kamigori: e,
                                            kamikawa: e,
                                            kasai: e,
                                            kasuga: e,
                                            kawanishi: e,
                                            miki: e,
                                            minamiawaji: e,
                                            nishinomiya: e,
                                            nishiwaki: e,
                                            ono: e,
                                            sanda: e,
                                            sannan: e,
                                            sasayama: e,
                                            sayo: e,
                                            shingu: e,
                                            shinonsen: e,
                                            shiso: e,
                                            sumoto: e,
                                            taishi: e,
                                            taka: e,
                                            takarazuka: e,
                                            takasago: e,
                                            takino: e,
                                            tamba: e,
                                            tatsuno: e,
                                            toyooka: e,
                                            yabu: e,
                                            yashiro: e,
                                            yoka: e,
                                            yokawa: e,
                                        },
                                    ],
                                    ibaraki: [
                                        1,
                                        {
                                            ami: e,
                                            asahi: e,
                                            bando: e,
                                            chikusei: e,
                                            daigo: e,
                                            fujishiro: e,
                                            hitachi: e,
                                            hitachinaka: e,
                                            hitachiomiya: e,
                                            hitachiota: e,
                                            ibaraki: e,
                                            ina: e,
                                            inashiki: e,
                                            itako: e,
                                            iwama: e,
                                            joso: e,
                                            kamisu: e,
                                            kasama: e,
                                            kashima: e,
                                            kasumigaura: e,
                                            koga: e,
                                            miho: e,
                                            mito: e,
                                            moriya: e,
                                            naka: e,
                                            namegata: e,
                                            oarai: e,
                                            ogawa: e,
                                            omitama: e,
                                            ryugasaki: e,
                                            sakai: e,
                                            sakuragawa: e,
                                            shimodate: e,
                                            shimotsuma: e,
                                            shirosato: e,
                                            sowa: e,
                                            suifu: e,
                                            takahagi: e,
                                            tamatsukuri: e,
                                            tokai: e,
                                            tomobe: e,
                                            tone: e,
                                            toride: e,
                                            tsuchiura: e,
                                            tsukuba: e,
                                            uchihara: e,
                                            ushiku: e,
                                            yachiyo: e,
                                            yamagata: e,
                                            yawara: e,
                                            yuki: e,
                                        },
                                    ],
                                    ishikawa: [
                                        1,
                                        {
                                            anamizu: e,
                                            hakui: e,
                                            hakusan: e,
                                            kaga: e,
                                            kahoku: e,
                                            kanazawa: e,
                                            kawakita: e,
                                            komatsu: e,
                                            nakanoto: e,
                                            nanao: e,
                                            nomi: e,
                                            nonoichi: e,
                                            noto: e,
                                            shika: e,
                                            suzu: e,
                                            tsubata: e,
                                            tsurugi: e,
                                            uchinada: e,
                                            wajima: e,
                                        },
                                    ],
                                    iwate: [
                                        1,
                                        {
                                            fudai: e,
                                            fujisawa: e,
                                            hanamaki: e,
                                            hiraizumi: e,
                                            hirono: e,
                                            ichinohe: e,
                                            ichinoseki: e,
                                            iwaizumi: e,
                                            iwate: e,
                                            joboji: e,
                                            kamaishi: e,
                                            kanegasaki: e,
                                            karumai: e,
                                            kawai: e,
                                            kitakami: e,
                                            kuji: e,
                                            kunohe: e,
                                            kuzumaki: e,
                                            miyako: e,
                                            mizusawa: e,
                                            morioka: e,
                                            ninohe: e,
                                            noda: e,
                                            ofunato: e,
                                            oshu: e,
                                            otsuchi: e,
                                            rikuzentakata: e,
                                            shiwa: e,
                                            shizukuishi: e,
                                            sumita: e,
                                            tanohata: e,
                                            tono: e,
                                            yahaba: e,
                                            yamada: e,
                                        },
                                    ],
                                    kagawa: [
                                        1,
                                        {
                                            ayagawa: e,
                                            higashikagawa: e,
                                            kanonji: e,
                                            kotohira: e,
                                            manno: e,
                                            marugame: e,
                                            mitoyo: e,
                                            naoshima: e,
                                            sanuki: e,
                                            tadotsu: e,
                                            takamatsu: e,
                                            tonosho: e,
                                            uchinomi: e,
                                            utazu: e,
                                            zentsuji: e,
                                        },
                                    ],
                                    kagoshima: [
                                        1,
                                        {
                                            akune: e,
                                            amami: e,
                                            hioki: e,
                                            isa: e,
                                            isen: e,
                                            izumi: e,
                                            kagoshima: e,
                                            kanoya: e,
                                            kawanabe: e,
                                            kinko: e,
                                            kouyama: e,
                                            makurazaki: e,
                                            matsumoto: e,
                                            minamitane: e,
                                            nakatane: e,
                                            nishinoomote: e,
                                            satsumasendai: e,
                                            soo: e,
                                            tarumizu: e,
                                            yusui: e,
                                        },
                                    ],
                                    kanagawa: [
                                        1,
                                        {
                                            aikawa: e,
                                            atsugi: e,
                                            ayase: e,
                                            chigasaki: e,
                                            ebina: e,
                                            fujisawa: e,
                                            hadano: e,
                                            hakone: e,
                                            hiratsuka: e,
                                            isehara: e,
                                            kaisei: e,
                                            kamakura: e,
                                            kiyokawa: e,
                                            matsuda: e,
                                            minamiashigara: e,
                                            miura: e,
                                            nakai: e,
                                            ninomiya: e,
                                            odawara: e,
                                            oi: e,
                                            oiso: e,
                                            sagamihara: e,
                                            samukawa: e,
                                            tsukui: e,
                                            yamakita: e,
                                            yamato: e,
                                            yokosuka: e,
                                            yugawara: e,
                                            zama: e,
                                            zushi: e,
                                        },
                                    ],
                                    kochi: [
                                        1,
                                        {
                                            aki: e,
                                            geisei: e,
                                            hidaka: e,
                                            higashitsuno: e,
                                            ino: e,
                                            kagami: e,
                                            kami: e,
                                            kitagawa: e,
                                            kochi: e,
                                            mihara: e,
                                            motoyama: e,
                                            muroto: e,
                                            nahari: e,
                                            nakamura: e,
                                            nankoku: e,
                                            nishitosa: e,
                                            niyodogawa: e,
                                            ochi: e,
                                            okawa: e,
                                            otoyo: e,
                                            otsuki: e,
                                            sakawa: e,
                                            sukumo: e,
                                            susaki: e,
                                            tosa: e,
                                            tosashimizu: e,
                                            toyo: e,
                                            tsuno: e,
                                            umaji: e,
                                            yasuda: e,
                                            yusuhara: e,
                                        },
                                    ],
                                    kumamoto: [
                                        1,
                                        {
                                            amakusa: e,
                                            arao: e,
                                            aso: e,
                                            choyo: e,
                                            gyokuto: e,
                                            kamiamakusa: e,
                                            kikuchi: e,
                                            kumamoto: e,
                                            mashiki: e,
                                            mifune: e,
                                            minamata: e,
                                            minamioguni: e,
                                            nagasu: e,
                                            nishihara: e,
                                            oguni: e,
                                            ozu: e,
                                            sumoto: e,
                                            takamori: e,
                                            uki: e,
                                            uto: e,
                                            yamaga: e,
                                            yamato: e,
                                            yatsushiro: e,
                                        },
                                    ],
                                    kyoto: [
                                        1,
                                        {
                                            ayabe: e,
                                            fukuchiyama: e,
                                            higashiyama: e,
                                            ide: e,
                                            ine: e,
                                            joyo: e,
                                            kameoka: e,
                                            kamo: e,
                                            kita: e,
                                            kizu: e,
                                            kumiyama: e,
                                            kyotamba: e,
                                            kyotanabe: e,
                                            kyotango: e,
                                            maizuru: e,
                                            minami: e,
                                            minamiyamashiro: e,
                                            miyazu: e,
                                            muko: e,
                                            nagaokakyo: e,
                                            nakagyo: e,
                                            nantan: e,
                                            oyamazaki: e,
                                            sakyo: e,
                                            seika: e,
                                            tanabe: e,
                                            uji: e,
                                            ujitawara: e,
                                            wazuka: e,
                                            yamashina: e,
                                            yawata: e,
                                        },
                                    ],
                                    mie: [
                                        1,
                                        {
                                            asahi: e,
                                            inabe: e,
                                            ise: e,
                                            kameyama: e,
                                            kawagoe: e,
                                            kiho: e,
                                            kisosaki: e,
                                            kiwa: e,
                                            komono: e,
                                            kumano: e,
                                            kuwana: e,
                                            matsusaka: e,
                                            meiwa: e,
                                            mihama: e,
                                            minamiise: e,
                                            misugi: e,
                                            miyama: e,
                                            nabari: e,
                                            shima: e,
                                            suzuka: e,
                                            tado: e,
                                            taiki: e,
                                            taki: e,
                                            tamaki: e,
                                            toba: e,
                                            tsu: e,
                                            udono: e,
                                            ureshino: e,
                                            watarai: e,
                                            yokkaichi: e,
                                        },
                                    ],
                                    miyagi: [
                                        1,
                                        {
                                            furukawa: e,
                                            higashimatsushima: e,
                                            ishinomaki: e,
                                            iwanuma: e,
                                            kakuda: e,
                                            kami: e,
                                            kawasaki: e,
                                            marumori: e,
                                            matsushima: e,
                                            minamisanriku: e,
                                            misato: e,
                                            murata: e,
                                            natori: e,
                                            ogawara: e,
                                            ohira: e,
                                            onagawa: e,
                                            osaki: e,
                                            rifu: e,
                                            semine: e,
                                            shibata: e,
                                            shichikashuku: e,
                                            shikama: e,
                                            shiogama: e,
                                            shiroishi: e,
                                            tagajo: e,
                                            taiwa: e,
                                            tome: e,
                                            tomiya: e,
                                            wakuya: e,
                                            watari: e,
                                            yamamoto: e,
                                            zao: e,
                                        },
                                    ],
                                    miyazaki: [
                                        1,
                                        {
                                            aya: e,
                                            ebino: e,
                                            gokase: e,
                                            hyuga: e,
                                            kadogawa: e,
                                            kawaminami: e,
                                            kijo: e,
                                            kitagawa: e,
                                            kitakata: e,
                                            kitaura: e,
                                            kobayashi: e,
                                            kunitomi: e,
                                            kushima: e,
                                            mimata: e,
                                            miyakonojo: e,
                                            miyazaki: e,
                                            morotsuka: e,
                                            nichinan: e,
                                            nishimera: e,
                                            nobeoka: e,
                                            saito: e,
                                            shiiba: e,
                                            shintomi: e,
                                            takaharu: e,
                                            takanabe: e,
                                            takazaki: e,
                                            tsuno: e,
                                        },
                                    ],
                                    nagano: [
                                        1,
                                        {
                                            achi: e,
                                            agematsu: e,
                                            anan: e,
                                            aoki: e,
                                            asahi: e,
                                            azumino: e,
                                            chikuhoku: e,
                                            chikuma: e,
                                            chino: e,
                                            fujimi: e,
                                            hakuba: e,
                                            hara: e,
                                            hiraya: e,
                                            iida: e,
                                            iijima: e,
                                            iiyama: e,
                                            iizuna: e,
                                            ikeda: e,
                                            ikusaka: e,
                                            ina: e,
                                            karuizawa: e,
                                            kawakami: e,
                                            kiso: e,
                                            kisofukushima: e,
                                            kitaaiki: e,
                                            komagane: e,
                                            komoro: e,
                                            matsukawa: e,
                                            matsumoto: e,
                                            miasa: e,
                                            minamiaiki: e,
                                            minamimaki: e,
                                            minamiminowa: e,
                                            minowa: e,
                                            miyada: e,
                                            miyota: e,
                                            mochizuki: e,
                                            nagano: e,
                                            nagawa: e,
                                            nagiso: e,
                                            nakagawa: e,
                                            nakano: e,
                                            nozawaonsen: e,
                                            obuse: e,
                                            ogawa: e,
                                            okaya: e,
                                            omachi: e,
                                            omi: e,
                                            ookuwa: e,
                                            ooshika: e,
                                            otaki: e,
                                            otari: e,
                                            sakae: e,
                                            sakaki: e,
                                            saku: e,
                                            sakuho: e,
                                            shimosuwa: e,
                                            shinanomachi: e,
                                            shiojiri: e,
                                            suwa: e,
                                            suzaka: e,
                                            takagi: e,
                                            takamori: e,
                                            takayama: e,
                                            tateshina: e,
                                            tatsuno: e,
                                            togakushi: e,
                                            togura: e,
                                            tomi: e,
                                            ueda: e,
                                            wada: e,
                                            yamagata: e,
                                            yamanouchi: e,
                                            yasaka: e,
                                            yasuoka: e,
                                        },
                                    ],
                                    nagasaki: [
                                        1,
                                        {
                                            chijiwa: e,
                                            futsu: e,
                                            goto: e,
                                            hasami: e,
                                            hirado: e,
                                            iki: e,
                                            isahaya: e,
                                            kawatana: e,
                                            kuchinotsu: e,
                                            matsuura: e,
                                            nagasaki: e,
                                            obama: e,
                                            omura: e,
                                            oseto: e,
                                            saikai: e,
                                            sasebo: e,
                                            seihi: e,
                                            shimabara: e,
                                            shinkamigoto: e,
                                            togitsu: e,
                                            tsushima: e,
                                            unzen: e,
                                        },
                                    ],
                                    nara: [
                                        1,
                                        {
                                            ando: e,
                                            gose: e,
                                            heguri: e,
                                            higashiyoshino: e,
                                            ikaruga: e,
                                            ikoma: e,
                                            kamikitayama: e,
                                            kanmaki: e,
                                            kashiba: e,
                                            kashihara: e,
                                            katsuragi: e,
                                            kawai: e,
                                            kawakami: e,
                                            kawanishi: e,
                                            koryo: e,
                                            kurotaki: e,
                                            mitsue: e,
                                            miyake: e,
                                            nara: e,
                                            nosegawa: e,
                                            oji: e,
                                            ouda: e,
                                            oyodo: e,
                                            sakurai: e,
                                            sango: e,
                                            shimoichi: e,
                                            shimokitayama: e,
                                            shinjo: e,
                                            soni: e,
                                            takatori: e,
                                            tawaramoto: e,
                                            tenkawa: e,
                                            tenri: e,
                                            uda: e,
                                            yamatokoriyama: e,
                                            yamatotakada: e,
                                            yamazoe: e,
                                            yoshino: e,
                                        },
                                    ],
                                    niigata: [
                                        1,
                                        {
                                            aga: e,
                                            agano: e,
                                            gosen: e,
                                            itoigawa: e,
                                            izumozaki: e,
                                            joetsu: e,
                                            kamo: e,
                                            kariwa: e,
                                            kashiwazaki: e,
                                            minamiuonuma: e,
                                            mitsuke: e,
                                            muika: e,
                                            murakami: e,
                                            myoko: e,
                                            nagaoka: e,
                                            niigata: e,
                                            ojiya: e,
                                            omi: e,
                                            sado: e,
                                            sanjo: e,
                                            seiro: e,
                                            seirou: e,
                                            sekikawa: e,
                                            shibata: e,
                                            tagami: e,
                                            tainai: e,
                                            tochio: e,
                                            tokamachi: e,
                                            tsubame: e,
                                            tsunan: e,
                                            uonuma: e,
                                            yahiko: e,
                                            yoita: e,
                                            yuzawa: e,
                                        },
                                    ],
                                    oita: [
                                        1,
                                        {
                                            beppu: e,
                                            bungoono: e,
                                            bungotakada: e,
                                            hasama: e,
                                            hiji: e,
                                            himeshima: e,
                                            hita: e,
                                            kamitsue: e,
                                            kokonoe: e,
                                            kuju: e,
                                            kunisaki: e,
                                            kusu: e,
                                            oita: e,
                                            saiki: e,
                                            taketa: e,
                                            tsukumi: e,
                                            usa: e,
                                            usuki: e,
                                            yufu: e,
                                        },
                                    ],
                                    okayama: [
                                        1,
                                        {
                                            akaiwa: e,
                                            asakuchi: e,
                                            bizen: e,
                                            hayashima: e,
                                            ibara: e,
                                            kagamino: e,
                                            kasaoka: e,
                                            kibichuo: e,
                                            kumenan: e,
                                            kurashiki: e,
                                            maniwa: e,
                                            misaki: e,
                                            nagi: e,
                                            niimi: e,
                                            nishiawakura: e,
                                            okayama: e,
                                            satosho: e,
                                            setouchi: e,
                                            shinjo: e,
                                            shoo: e,
                                            soja: e,
                                            takahashi: e,
                                            tamano: e,
                                            tsuyama: e,
                                            wake: e,
                                            yakage: e,
                                        },
                                    ],
                                    okinawa: [
                                        1,
                                        {
                                            aguni: e,
                                            ginowan: e,
                                            ginoza: e,
                                            gushikami: e,
                                            haebaru: e,
                                            higashi: e,
                                            hirara: e,
                                            iheya: e,
                                            ishigaki: e,
                                            ishikawa: e,
                                            itoman: e,
                                            izena: e,
                                            kadena: e,
                                            kin: e,
                                            kitadaito: e,
                                            kitanakagusuku: e,
                                            kumejima: e,
                                            kunigami: e,
                                            minamidaito: e,
                                            motobu: e,
                                            nago: e,
                                            naha: e,
                                            nakagusuku: e,
                                            nakijin: e,
                                            nanjo: e,
                                            nishihara: e,
                                            ogimi: e,
                                            okinawa: e,
                                            onna: e,
                                            shimoji: e,
                                            taketomi: e,
                                            tarama: e,
                                            tokashiki: e,
                                            tomigusuku: e,
                                            tonaki: e,
                                            urasoe: e,
                                            uruma: e,
                                            yaese: e,
                                            yomitan: e,
                                            yonabaru: e,
                                            yonaguni: e,
                                            zamami: e,
                                        },
                                    ],
                                    osaka: [
                                        1,
                                        {
                                            abeno: e,
                                            chihayaakasaka: e,
                                            chuo: e,
                                            daito: e,
                                            fujiidera: e,
                                            habikino: e,
                                            hannan: e,
                                            higashiosaka: e,
                                            higashisumiyoshi: e,
                                            higashiyodogawa: e,
                                            hirakata: e,
                                            ibaraki: e,
                                            ikeda: e,
                                            izumi: e,
                                            izumiotsu: e,
                                            izumisano: e,
                                            kadoma: e,
                                            kaizuka: e,
                                            kanan: e,
                                            kashiwara: e,
                                            katano: e,
                                            kawachinagano: e,
                                            kishiwada: e,
                                            kita: e,
                                            kumatori: e,
                                            matsubara: e,
                                            minato: e,
                                            minoh: e,
                                            misaki: e,
                                            moriguchi: e,
                                            neyagawa: e,
                                            nishi: e,
                                            nose: e,
                                            osakasayama: e,
                                            sakai: e,
                                            sayama: e,
                                            sennan: e,
                                            settsu: e,
                                            shijonawate: e,
                                            shimamoto: e,
                                            suita: e,
                                            tadaoka: e,
                                            taishi: e,
                                            tajiri: e,
                                            takaishi: e,
                                            takatsuki: e,
                                            tondabayashi: e,
                                            toyonaka: e,
                                            toyono: e,
                                            yao: e,
                                        },
                                    ],
                                    saga: [
                                        1,
                                        {
                                            ariake: e,
                                            arita: e,
                                            fukudomi: e,
                                            genkai: e,
                                            hamatama: e,
                                            hizen: e,
                                            imari: e,
                                            kamimine: e,
                                            kanzaki: e,
                                            karatsu: e,
                                            kashima: e,
                                            kitagata: e,
                                            kitahata: e,
                                            kiyama: e,
                                            kouhoku: e,
                                            kyuragi: e,
                                            nishiarita: e,
                                            ogi: e,
                                            omachi: e,
                                            ouchi: e,
                                            saga: e,
                                            shiroishi: e,
                                            taku: e,
                                            tara: e,
                                            tosu: e,
                                            yoshinogari: e,
                                        },
                                    ],
                                    saitama: [
                                        1,
                                        {
                                            arakawa: e,
                                            asaka: e,
                                            chichibu: e,
                                            fujimi: e,
                                            fujimino: e,
                                            fukaya: e,
                                            hanno: e,
                                            hanyu: e,
                                            hasuda: e,
                                            hatogaya: e,
                                            hatoyama: e,
                                            hidaka: e,
                                            higashichichibu: e,
                                            higashimatsuyama: e,
                                            honjo: e,
                                            ina: e,
                                            iruma: e,
                                            iwatsuki: e,
                                            kamiizumi: e,
                                            kamikawa: e,
                                            kamisato: e,
                                            kasukabe: e,
                                            kawagoe: e,
                                            kawaguchi: e,
                                            kawajima: e,
                                            kazo: e,
                                            kitamoto: e,
                                            koshigaya: e,
                                            kounosu: e,
                                            kuki: e,
                                            kumagaya: e,
                                            matsubushi: e,
                                            minano: e,
                                            misato: e,
                                            miyashiro: e,
                                            miyoshi: e,
                                            moroyama: e,
                                            nagatoro: e,
                                            namegawa: e,
                                            niiza: e,
                                            ogano: e,
                                            ogawa: e,
                                            ogose: e,
                                            okegawa: e,
                                            omiya: e,
                                            otaki: e,
                                            ranzan: e,
                                            ryokami: e,
                                            saitama: e,
                                            sakado: e,
                                            satte: e,
                                            sayama: e,
                                            shiki: e,
                                            shiraoka: e,
                                            soka: e,
                                            sugito: e,
                                            toda: e,
                                            tokigawa: e,
                                            tokorozawa: e,
                                            tsurugashima: e,
                                            urawa: e,
                                            warabi: e,
                                            yashio: e,
                                            yokoze: e,
                                            yono: e,
                                            yorii: e,
                                            yoshida: e,
                                            yoshikawa: e,
                                            yoshimi: e,
                                        },
                                    ],
                                    shiga: [
                                        1,
                                        {
                                            aisho: e,
                                            gamo: e,
                                            higashiomi: e,
                                            hikone: e,
                                            koka: e,
                                            konan: e,
                                            kosei: e,
                                            koto: e,
                                            kusatsu: e,
                                            maibara: e,
                                            moriyama: e,
                                            nagahama: e,
                                            nishiazai: e,
                                            notogawa: e,
                                            omihachiman: e,
                                            otsu: e,
                                            ritto: e,
                                            ryuoh: e,
                                            takashima: e,
                                            takatsuki: e,
                                            torahime: e,
                                            toyosato: e,
                                            yasu: e,
                                        },
                                    ],
                                    shimane: [
                                        1,
                                        {
                                            akagi: e,
                                            ama: e,
                                            gotsu: e,
                                            hamada: e,
                                            higashiizumo: e,
                                            hikawa: e,
                                            hikimi: e,
                                            izumo: e,
                                            kakinoki: e,
                                            masuda: e,
                                            matsue: e,
                                            misato: e,
                                            nishinoshima: e,
                                            ohda: e,
                                            okinoshima: e,
                                            okuizumo: e,
                                            shimane: e,
                                            tamayu: e,
                                            tsuwano: e,
                                            unnan: e,
                                            yakumo: e,
                                            yasugi: e,
                                            yatsuka: e,
                                        },
                                    ],
                                    shizuoka: [
                                        1,
                                        {
                                            arai: e,
                                            atami: e,
                                            fuji: e,
                                            fujieda: e,
                                            fujikawa: e,
                                            fujinomiya: e,
                                            fukuroi: e,
                                            gotemba: e,
                                            haibara: e,
                                            hamamatsu: e,
                                            higashiizu: e,
                                            ito: e,
                                            iwata: e,
                                            izu: e,
                                            izunokuni: e,
                                            kakegawa: e,
                                            kannami: e,
                                            kawanehon: e,
                                            kawazu: e,
                                            kikugawa: e,
                                            kosai: e,
                                            makinohara: e,
                                            matsuzaki: e,
                                            minamiizu: e,
                                            mishima: e,
                                            morimachi: e,
                                            nishiizu: e,
                                            numazu: e,
                                            omaezaki: e,
                                            shimada: e,
                                            shimizu: e,
                                            shimoda: e,
                                            shizuoka: e,
                                            susono: e,
                                            yaizu: e,
                                            yoshida: e,
                                        },
                                    ],
                                    tochigi: [
                                        1,
                                        {
                                            ashikaga: e,
                                            bato: e,
                                            haga: e,
                                            ichikai: e,
                                            iwafune: e,
                                            kaminokawa: e,
                                            kanuma: e,
                                            karasuyama: e,
                                            kuroiso: e,
                                            mashiko: e,
                                            mibu: e,
                                            moka: e,
                                            motegi: e,
                                            nasu: e,
                                            nasushiobara: e,
                                            nikko: e,
                                            nishikata: e,
                                            nogi: e,
                                            ohira: e,
                                            ohtawara: e,
                                            oyama: e,
                                            sakura: e,
                                            sano: e,
                                            shimotsuke: e,
                                            shioya: e,
                                            takanezawa: e,
                                            tochigi: e,
                                            tsuga: e,
                                            ujiie: e,
                                            utsunomiya: e,
                                            yaita: e,
                                        },
                                    ],
                                    tokushima: [
                                        1,
                                        {
                                            aizumi: e,
                                            anan: e,
                                            ichiba: e,
                                            itano: e,
                                            kainan: e,
                                            komatsushima: e,
                                            matsushige: e,
                                            mima: e,
                                            minami: e,
                                            miyoshi: e,
                                            mugi: e,
                                            nakagawa: e,
                                            naruto: e,
                                            sanagochi: e,
                                            shishikui: e,
                                            tokushima: e,
                                            wajiki: e,
                                        },
                                    ],
                                    tokyo: [
                                        1,
                                        {
                                            adachi: e,
                                            akiruno: e,
                                            akishima: e,
                                            aogashima: e,
                                            arakawa: e,
                                            bunkyo: e,
                                            chiyoda: e,
                                            chofu: e,
                                            chuo: e,
                                            edogawa: e,
                                            fuchu: e,
                                            fussa: e,
                                            hachijo: e,
                                            hachioji: e,
                                            hamura: e,
                                            higashikurume: e,
                                            higashimurayama: e,
                                            higashiyamato: e,
                                            hino: e,
                                            hinode: e,
                                            hinohara: e,
                                            inagi: e,
                                            itabashi: e,
                                            katsushika: e,
                                            kita: e,
                                            kiyose: e,
                                            kodaira: e,
                                            koganei: e,
                                            kokubunji: e,
                                            komae: e,
                                            koto: e,
                                            kouzushima: e,
                                            kunitachi: e,
                                            machida: e,
                                            meguro: e,
                                            minato: e,
                                            mitaka: e,
                                            mizuho: e,
                                            musashimurayama: e,
                                            musashino: e,
                                            nakano: e,
                                            nerima: e,
                                            ogasawara: e,
                                            okutama: e,
                                            ome: e,
                                            oshima: e,
                                            ota: e,
                                            setagaya: e,
                                            shibuya: e,
                                            shinagawa: e,
                                            shinjuku: e,
                                            suginami: e,
                                            sumida: e,
                                            tachikawa: e,
                                            taito: e,
                                            tama: e,
                                            toshima: e,
                                        },
                                    ],
                                    tottori: [
                                        1,
                                        {
                                            chizu: e,
                                            hino: e,
                                            kawahara: e,
                                            koge: e,
                                            kotoura: e,
                                            misasa: e,
                                            nanbu: e,
                                            nichinan: e,
                                            sakaiminato: e,
                                            tottori: e,
                                            wakasa: e,
                                            yazu: e,
                                            yonago: e,
                                        },
                                    ],
                                    toyama: [
                                        1,
                                        {
                                            asahi: e,
                                            fuchu: e,
                                            fukumitsu: e,
                                            funahashi: e,
                                            himi: e,
                                            imizu: e,
                                            inami: e,
                                            johana: e,
                                            kamiichi: e,
                                            kurobe: e,
                                            nakaniikawa: e,
                                            namerikawa: e,
                                            nanto: e,
                                            nyuzen: e,
                                            oyabe: e,
                                            taira: e,
                                            takaoka: e,
                                            tateyama: e,
                                            toga: e,
                                            tonami: e,
                                            toyama: e,
                                            unazuki: e,
                                            uozu: e,
                                            yamada: e,
                                        },
                                    ],
                                    wakayama: [
                                        1,
                                        {
                                            arida: e,
                                            aridagawa: e,
                                            gobo: e,
                                            hashimoto: e,
                                            hidaka: e,
                                            hirogawa: e,
                                            inami: e,
                                            iwade: e,
                                            kainan: e,
                                            kamitonda: e,
                                            katsuragi: e,
                                            kimino: e,
                                            kinokawa: e,
                                            kitayama: e,
                                            koya: e,
                                            koza: e,
                                            kozagawa: e,
                                            kudoyama: e,
                                            kushimoto: e,
                                            mihama: e,
                                            misato: e,
                                            nachikatsuura: e,
                                            shingu: e,
                                            shirahama: e,
                                            taiji: e,
                                            tanabe: e,
                                            wakayama: e,
                                            yuasa: e,
                                            yura: e,
                                        },
                                    ],
                                    yamagata: [
                                        1,
                                        {
                                            asahi: e,
                                            funagata: e,
                                            higashine: e,
                                            iide: e,
                                            kahoku: e,
                                            kaminoyama: e,
                                            kaneyama: e,
                                            kawanishi: e,
                                            mamurogawa: e,
                                            mikawa: e,
                                            murayama: e,
                                            nagai: e,
                                            nakayama: e,
                                            nanyo: e,
                                            nishikawa: e,
                                            obanazawa: e,
                                            oe: e,
                                            oguni: e,
                                            ohkura: e,
                                            oishida: e,
                                            sagae: e,
                                            sakata: e,
                                            sakegawa: e,
                                            shinjo: e,
                                            shirataka: e,
                                            shonai: e,
                                            takahata: e,
                                            tendo: e,
                                            tozawa: e,
                                            tsuruoka: e,
                                            yamagata: e,
                                            yamanobe: e,
                                            yonezawa: e,
                                            yuza: e,
                                        },
                                    ],
                                    yamaguchi: [
                                        1,
                                        {
                                            abu: e,
                                            hagi: e,
                                            hikari: e,
                                            hofu: e,
                                            iwakuni: e,
                                            kudamatsu: e,
                                            mitou: e,
                                            nagato: e,
                                            oshima: e,
                                            shimonoseki: e,
                                            shunan: e,
                                            tabuse: e,
                                            tokuyama: e,
                                            toyota: e,
                                            ube: e,
                                            yuu: e,
                                        },
                                    ],
                                    yamanashi: [
                                        1,
                                        {
                                            chuo: e,
                                            doshi: e,
                                            fuefuki: e,
                                            fujikawa: e,
                                            fujikawaguchiko: e,
                                            fujiyoshida: e,
                                            hayakawa: e,
                                            hokuto: e,
                                            ichikawamisato: e,
                                            kai: e,
                                            kofu: e,
                                            koshu: e,
                                            kosuge: e,
                                            'minami-alps': e,
                                            minobu: e,
                                            nakamichi: e,
                                            nanbu: e,
                                            narusawa: e,
                                            nirasaki: e,
                                            nishikatsura: e,
                                            oshino: e,
                                            otsuki: e,
                                            showa: e,
                                            tabayama: e,
                                            tsuru: e,
                                            uenohara: e,
                                            yamanakako: e,
                                            yamanashi: e,
                                        },
                                    ],
                                    'xn--ehqz56n': e,
                                    三重: e,
                                    'xn--1lqs03n': e,
                                    京都: e,
                                    'xn--qqqt11m': e,
                                    佐賀: e,
                                    'xn--f6qx53a': e,
                                    兵庫: e,
                                    'xn--djrs72d6uy': e,
                                    北海道: e,
                                    'xn--mkru45i': e,
                                    千葉: e,
                                    'xn--0trq7p7nn': e,
                                    和歌山: e,
                                    'xn--5js045d': e,
                                    埼玉: e,
                                    'xn--kbrq7o': e,
                                    大分: e,
                                    'xn--pssu33l': e,
                                    大阪: e,
                                    'xn--ntsq17g': e,
                                    奈良: e,
                                    'xn--uisz3g': e,
                                    宮城: e,
                                    'xn--6btw5a': e,
                                    宮崎: e,
                                    'xn--1ctwo': e,
                                    富山: e,
                                    'xn--6orx2r': e,
                                    山口: e,
                                    'xn--rht61e': e,
                                    山形: e,
                                    'xn--rht27z': e,
                                    山梨: e,
                                    'xn--nit225k': e,
                                    岐阜: e,
                                    'xn--rht3d': e,
                                    岡山: e,
                                    'xn--djty4k': e,
                                    岩手: e,
                                    'xn--klty5x': e,
                                    島根: e,
                                    'xn--kltx9a': e,
                                    広島: e,
                                    'xn--kltp7d': e,
                                    徳島: e,
                                    'xn--c3s14m': e,
                                    愛媛: e,
                                    'xn--vgu402c': e,
                                    愛知: e,
                                    'xn--efvn9s': e,
                                    新潟: e,
                                    'xn--1lqs71d': e,
                                    東京: e,
                                    'xn--4pvxs': e,
                                    栃木: e,
                                    'xn--uuwu58a': e,
                                    沖縄: e,
                                    'xn--zbx025d': e,
                                    滋賀: e,
                                    'xn--8pvr4u': e,
                                    熊本: e,
                                    'xn--5rtp49c': e,
                                    石川: e,
                                    'xn--ntso0iqx3a': e,
                                    神奈川: e,
                                    'xn--elqq16h': e,
                                    福井: e,
                                    'xn--4it168d': e,
                                    福岡: e,
                                    'xn--klt787d': e,
                                    福島: e,
                                    'xn--rny31h': e,
                                    秋田: e,
                                    'xn--7t0a264c': e,
                                    群馬: e,
                                    'xn--uist22h': e,
                                    茨城: e,
                                    'xn--8ltr62k': e,
                                    長崎: e,
                                    'xn--2m4a15e': e,
                                    長野: e,
                                    'xn--32vp30h': e,
                                    青森: e,
                                    'xn--4it797k': e,
                                    静岡: e,
                                    'xn--5rtq34k': e,
                                    香川: e,
                                    'xn--k7yn95e': e,
                                    高知: e,
                                    'xn--tor131o': e,
                                    鳥取: e,
                                    'xn--d5qv7z876c': e,
                                    鹿児島: e,
                                    kawasaki: b,
                                    kitakyushu: b,
                                    kobe: b,
                                    nagoya: b,
                                    sapporo: b,
                                    sendai: b,
                                    yokohama: b,
                                    buyshop: t,
                                    fashionstore: t,
                                    handcrafted: t,
                                    kawaiishop: t,
                                    supersale: t,
                                    theshop: t,
                                    '0am': t,
                                    '0g0': t,
                                    '0j0': t,
                                    '0t0': t,
                                    mydns: t,
                                    pgw: t,
                                    wjg: t,
                                    usercontent: t,
                                    angry: t,
                                    babyblue: t,
                                    babymilk: t,
                                    backdrop: t,
                                    bambina: t,
                                    bitter: t,
                                    blush: t,
                                    boo: t,
                                    boy: t,
                                    boyfriend: t,
                                    but: t,
                                    candypop: t,
                                    capoo: t,
                                    catfood: t,
                                    cheap: t,
                                    chicappa: t,
                                    chillout: t,
                                    chips: t,
                                    chowder: t,
                                    chu: t,
                                    ciao: t,
                                    cocotte: t,
                                    coolblog: t,
                                    cranky: t,
                                    cutegirl: t,
                                    daa: t,
                                    deca: t,
                                    deci: t,
                                    digick: t,
                                    egoism: t,
                                    fakefur: t,
                                    fem: t,
                                    flier: t,
                                    floppy: t,
                                    fool: t,
                                    frenchkiss: t,
                                    girlfriend: t,
                                    girly: t,
                                    gloomy: t,
                                    gonna: t,
                                    greater: t,
                                    hacca: t,
                                    heavy: t,
                                    her: t,
                                    hiho: t,
                                    hippy: t,
                                    holy: t,
                                    hungry: t,
                                    icurus: t,
                                    itigo: t,
                                    jellybean: t,
                                    kikirara: t,
                                    kill: t,
                                    kilo: t,
                                    kuron: t,
                                    littlestar: t,
                                    lolipopmc: t,
                                    lolitapunk: t,
                                    lomo: t,
                                    lovepop: t,
                                    lovesick: t,
                                    main: t,
                                    mods: t,
                                    mond: t,
                                    mongolian: t,
                                    moo: t,
                                    namaste: t,
                                    nikita: t,
                                    nobushi: t,
                                    noor: t,
                                    oops: t,
                                    parallel: t,
                                    parasite: t,
                                    pecori: t,
                                    peewee: t,
                                    penne: t,
                                    pepper: t,
                                    perma: t,
                                    pigboat: t,
                                    pinoko: t,
                                    punyu: t,
                                    pupu: t,
                                    pussycat: t,
                                    pya: t,
                                    raindrop: t,
                                    readymade: t,
                                    sadist: t,
                                    schoolbus: t,
                                    secret: t,
                                    staba: t,
                                    stripper: t,
                                    sub: t,
                                    sunnyday: t,
                                    thick: t,
                                    tonkotsu: t,
                                    under: t,
                                    upper: t,
                                    velvet: t,
                                    verse: t,
                                    versus: t,
                                    vivian: t,
                                    watson: t,
                                    weblike: t,
                                    whitesnow: t,
                                    zombie: t,
                                    hateblo: t,
                                    hatenablog: t,
                                    hatenadiary: t,
                                    '2-d': t,
                                    bona: t,
                                    crap: t,
                                    daynight: t,
                                    eek: t,
                                    flop: t,
                                    halfmoon: t,
                                    jeez: t,
                                    matrix: t,
                                    mimoza: t,
                                    netgamers: t,
                                    nyanta: t,
                                    o0o0: t,
                                    rdy: t,
                                    rgr: t,
                                    rulez: t,
                                    sakurastorage: [0, { isk01: et, isk02: et }],
                                    saloon: t,
                                    sblo: t,
                                    skr: t,
                                    tank: t,
                                    'uh-oh': t,
                                    undo: t,
                                    webaccel: [0, { rs: t, user: t }],
                                    websozai: t,
                                    xii: t,
                                },
                            ],
                            ke: [1, { ac: e, co: e, go: e, info: e, me: e, mobi: e, ne: e, or: e, sc: e }],
                            kg: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, us: t, xx: t }],
                            kh: b,
                            ki: ea,
                            km: [
                                1,
                                {
                                    ass: e,
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    mil: e,
                                    nom: e,
                                    org: e,
                                    prd: e,
                                    tm: e,
                                    asso: e,
                                    coop: e,
                                    gouv: e,
                                    medecin: e,
                                    notaires: e,
                                    pharmaciens: e,
                                    presse: e,
                                    veterinaire: e,
                                },
                            ],
                            kn: [1, { edu: e, gov: e, net: e, org: e }],
                            kp: [1, { com: e, edu: e, gov: e, org: e, rep: e, tra: e }],
                            kr: [
                                1,
                                {
                                    ac: e,
                                    ai: e,
                                    co: e,
                                    es: e,
                                    go: e,
                                    hs: e,
                                    io: e,
                                    it: e,
                                    kg: e,
                                    me: e,
                                    mil: e,
                                    ms: e,
                                    ne: e,
                                    or: e,
                                    pe: e,
                                    re: e,
                                    sc: e,
                                    busan: e,
                                    chungbuk: e,
                                    chungnam: e,
                                    daegu: e,
                                    daejeon: e,
                                    gangwon: e,
                                    gwangju: e,
                                    gyeongbuk: e,
                                    gyeonggi: e,
                                    gyeongnam: e,
                                    incheon: e,
                                    jeju: e,
                                    jeonbuk: e,
                                    jeonnam: e,
                                    seoul: e,
                                    ulsan: e,
                                    c01: t,
                                    'eliv-cdn': t,
                                    'eliv-dns': t,
                                    mmv: t,
                                    vki: t,
                                },
                            ],
                            kw: [1, { com: e, edu: e, emb: e, gov: e, ind: e, net: e, org: e }],
                            ky: F,
                            kz: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, jcloud: t }],
                            la: [1, { com: e, edu: e, gov: e, info: e, int: e, net: e, org: e, per: e, bnr: t }],
                            lb: a,
                            lc: [1, { co: e, com: e, edu: e, gov: e, net: e, org: e, oy: t }],
                            li: e,
                            lk: [1, { ac: e, assn: e, com: e, edu: e, gov: e, grp: e, hotel: e, int: e, ltd: e, net: e, ngo: e, org: e, sch: e, soc: e, web: e }],
                            lr: a,
                            ls: [1, { ac: e, biz: e, co: e, edu: e, gov: e, info: e, net: e, org: e, sc: e }],
                            lt: l,
                            lu: [1, { '123website': t }],
                            lv: [1, { asn: e, com: e, conf: e, edu: e, gov: e, id: e, mil: e, net: e, org: e }],
                            ly: [1, { com: e, edu: e, gov: e, id: e, med: e, net: e, org: e, plc: e, sch: e }],
                            ma: [1, { ac: e, co: e, gov: e, net: e, org: e, press: e }],
                            mc: [1, { asso: e, tm: e }],
                            md: [1, { ir: t }],
                            me: [
                                1,
                                {
                                    ac: e,
                                    co: e,
                                    edu: e,
                                    gov: e,
                                    its: e,
                                    net: e,
                                    org: e,
                                    priv: e,
                                    c66: t,
                                    craft: t,
                                    edgestack: t,
                                    filegear: t,
                                    'filegear-sg': t,
                                    lohmus: t,
                                    barsy: t,
                                    mcdir: t,
                                    brasilia: t,
                                    ddns: t,
                                    dnsfor: t,
                                    hopto: t,
                                    loginto: t,
                                    noip: t,
                                    webhop: t,
                                    soundcast: t,
                                    tcp4: t,
                                    vp4: t,
                                    diskstation: t,
                                    dscloud: t,
                                    i234: t,
                                    myds: t,
                                    synology: t,
                                    transip: _,
                                    nohost: t,
                                },
                            ],
                            mg: [1, { co: e, com: e, edu: e, gov: e, mil: e, nom: e, org: e, prd: e }],
                            mh: e,
                            mil: e,
                            mk: [1, { com: e, edu: e, gov: e, inf: e, name: e, net: e, org: e }],
                            ml: [1, { ac: e, art: e, asso: e, com: e, edu: e, gouv: e, gov: e, info: e, inst: e, net: e, org: e, pr: e, presse: e }],
                            mm: b,
                            mn: [1, { edu: e, gov: e, org: e, nyc: t }],
                            mo: a,
                            mobi: [1, { barsy: t, dscloud: t }],
                            mp: [1, { ju: t }],
                            mq: e,
                            mr: l,
                            ms: [1, { com: e, edu: e, gov: e, net: e, org: e, minisite: t }],
                            mt: F,
                            mu: [1, { ac: e, co: e, com: e, gov: e, net: e, or: e, org: e }],
                            museum: e,
                            mv: [1, { aero: e, biz: e, com: e, coop: e, edu: e, gov: e, info: e, int: e, mil: e, museum: e, name: e, net: e, org: e, pro: e }],
                            mw: [1, { ac: e, biz: e, co: e, com: e, coop: e, edu: e, gov: e, int: e, net: e, org: e }],
                            mx: [1, { com: e, edu: e, gob: e, net: e, org: e }],
                            my: [1, { biz: e, com: e, edu: e, gov: e, mil: e, name: e, net: e, org: e }],
                            mz: [1, { ac: e, adv: e, co: e, edu: e, gov: e, mil: e, net: e, org: e }],
                            na: [1, { alt: e, co: e, com: e, gov: e, net: e, org: e }],
                            name: [1, { her: ei, his: ei, ispmanager: t }],
                            nc: [1, { asso: e, nom: e }],
                            ne: e,
                            net: [
                                1,
                                {
                                    adobeaemcloud: t,
                                    'adobeio-static': t,
                                    adobeioruntime: t,
                                    akadns: t,
                                    akamai: t,
                                    'akamai-staging': t,
                                    akamaiedge: t,
                                    'akamaiedge-staging': t,
                                    akamaihd: t,
                                    'akamaihd-staging': t,
                                    akamaiorigin: t,
                                    'akamaiorigin-staging': t,
                                    akamaized: t,
                                    'akamaized-staging': t,
                                    edgekey: t,
                                    'edgekey-staging': t,
                                    edgesuite: t,
                                    'edgesuite-staging': t,
                                    alwaysdata: t,
                                    myamaze: t,
                                    cloudfront: t,
                                    appudo: t,
                                    'atlassian-dev': [0, { prod: K }],
                                    myfritz: t,
                                    onavstack: t,
                                    shopselect: t,
                                    blackbaudcdn: t,
                                    boomla: t,
                                    bplaced: t,
                                    square7: t,
                                    cdn77: [0, { r: t }],
                                    'cdn77-ssl': t,
                                    gb: t,
                                    hu: t,
                                    jp: t,
                                    se: t,
                                    uk: t,
                                    clickrising: t,
                                    'ddns-ip': t,
                                    'dns-cloud': t,
                                    'dns-dynamic': t,
                                    cloudaccess: t,
                                    cloudflare: [2, { cdn: t }],
                                    cloudflareanycast: K,
                                    cloudflarecn: K,
                                    cloudflareglobal: K,
                                    ctfcloud: t,
                                    'feste-ip': t,
                                    'knx-server': t,
                                    'static-access': t,
                                    cryptonomic: r,
                                    dattolocal: t,
                                    mydatto: t,
                                    debian: t,
                                    definima: t,
                                    deno: t,
                                    icp: r,
                                    de5: t,
                                    'at-band-camp': t,
                                    blogdns: t,
                                    'broke-it': t,
                                    buyshouses: t,
                                    dnsalias: t,
                                    dnsdojo: t,
                                    'does-it': t,
                                    dontexist: t,
                                    dynalias: t,
                                    dynathome: t,
                                    endofinternet: t,
                                    'from-az': t,
                                    'from-co': t,
                                    'from-la': t,
                                    'from-ny': t,
                                    'gets-it': t,
                                    'ham-radio-op': t,
                                    homeftp: t,
                                    homeip: t,
                                    homelinux: t,
                                    homeunix: t,
                                    'in-the-band': t,
                                    'is-a-chef': t,
                                    'is-a-geek': t,
                                    'isa-geek': t,
                                    'kicks-ass': t,
                                    'office-on-the': t,
                                    podzone: t,
                                    'scrapper-site': t,
                                    selfip: t,
                                    'sells-it': t,
                                    servebbs: t,
                                    serveftp: t,
                                    thruhere: t,
                                    webhop: t,
                                    casacam: t,
                                    dynu: t,
                                    dynv6: t,
                                    twmail: t,
                                    ru: t,
                                    channelsdvr: [2, { u: t }],
                                    fastly: [0, { freetls: t, map: t, prod: [0, { a: t, global: t }], ssl: [0, { a: t, b: t, global: t }] }],
                                    fastlylb: [2, { map: t }],
                                    edgeapp: t,
                                    'keyword-on': t,
                                    'live-on': t,
                                    'server-on': t,
                                    'cdn-edges': t,
                                    heteml: t,
                                    cloudfunctions: t,
                                    'grafana-dev': t,
                                    iobb: t,
                                    moonscale: t,
                                    'in-dsl': t,
                                    'in-vpn': t,
                                    oninferno: t,
                                    botdash: t,
                                    'apps-1and1': t,
                                    ipifony: t,
                                    cloudjiffy: [2, { 'fra1-de': t, 'west1-us': t }],
                                    elastx: [0, { 'jls-sto1': t, 'jls-sto2': t, 'jls-sto3': t }],
                                    massivegrid: [0, { paas: [0, { 'fr-1': t, 'lon-1': t, 'lon-2': t, 'ny-1': t, 'ny-2': t, 'sg-1': t }] }],
                                    saveincloud: [0, { jelastic: t, 'nordeste-idc': t }],
                                    scaleforce: G,
                                    kinghost: t,
                                    uni5: t,
                                    krellian: t,
                                    ggff: t,
                                    localto: r,
                                    barsy: t,
                                    luyani: t,
                                    memset: t,
                                    'azure-api': t,
                                    'azure-mobile': t,
                                    azureedge: t,
                                    azurefd: t,
                                    azurestaticapps: [2, { 1: t, 2: t, 3: t, 4: t, 5: t, 6: t, 7: t, centralus: t, eastasia: t, eastus2: t, westeurope: t, westus2: t }],
                                    azurewebsites: t,
                                    cloudapp: t,
                                    trafficmanager: t,
                                    windows: [0, { core: [0, { blob: t }], servicebus: t }],
                                    mynetname: [0, { sn: t }],
                                    routingthecloud: t,
                                    bounceme: t,
                                    ddns: t,
                                    'eating-organic': t,
                                    mydissent: t,
                                    myeffect: t,
                                    mymediapc: t,
                                    mypsx: t,
                                    mysecuritycamera: t,
                                    nhlfan: t,
                                    'no-ip': t,
                                    pgafan: t,
                                    privatizehealthinsurance: t,
                                    redirectme: t,
                                    serveblog: t,
                                    serveminecraft: t,
                                    sytes: t,
                                    dnsup: t,
                                    hicam: t,
                                    'now-dns': t,
                                    ownip: t,
                                    vpndns: t,
                                    cloudycluster: t,
                                    ovh: [0, { hosting: r, webpaas: r }],
                                    rackmaze: t,
                                    myradweb: t,
                                    in: t,
                                    'subsc-pay': t,
                                    squares: t,
                                    schokokeks: t,
                                    'firewall-gateway': t,
                                    seidat: t,
                                    senseering: t,
                                    siteleaf: t,
                                    mafelo: t,
                                    myspreadshop: t,
                                    'vps-host': [2, { jelastic: [0, { atl: t, njs: t, ric: t }] }],
                                    srcf: [0, { soc: t, user: t }],
                                    supabase: t,
                                    dsmynas: t,
                                    familyds: t,
                                    ts: [2, { c: r }],
                                    torproject: [2, { pages: t }],
                                    tunnelmole: t,
                                    vusercontent: t,
                                    'reserve-online': t,
                                    localcert: t,
                                    'community-pro': t,
                                    meinforum: t,
                                    yandexcloud: [2, { storage: t, website: t }],
                                    za: t,
                                    zabc: t,
                                },
                            ],
                            nf: [1, { arts: e, com: e, firm: e, info: e, net: e, other: e, per: e, rec: e, store: e, web: e }],
                            ng: [
                                1,
                                {
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    i: e,
                                    mil: e,
                                    mobi: e,
                                    name: e,
                                    net: e,
                                    org: e,
                                    sch: e,
                                    biz: [2, { co: t, dl: t, go: t, lg: t, on: t }],
                                    col: t,
                                    firm: t,
                                    gen: t,
                                    ltd: t,
                                    ngo: t,
                                    plc: t,
                                },
                            ],
                            ni: [1, { ac: e, biz: e, co: e, com: e, edu: e, gob: e, in: e, info: e, int: e, mil: e, net: e, nom: e, org: e, web: e }],
                            nl: [1, { co: t, 'hosting-cluster': t, gov: t, khplay: t, '123website': t, myspreadshop: t, transurl: r, cistron: t, demon: t }],
                            no: [
                                1,
                                {
                                    fhs: e,
                                    folkebibl: e,
                                    fylkesbibl: e,
                                    idrett: e,
                                    museum: e,
                                    priv: e,
                                    vgs: e,
                                    dep: e,
                                    herad: e,
                                    kommune: e,
                                    mil: e,
                                    stat: e,
                                    aa: eo,
                                    ah: eo,
                                    bu: eo,
                                    fm: eo,
                                    hl: eo,
                                    hm: eo,
                                    'jan-mayen': eo,
                                    mr: eo,
                                    nl: eo,
                                    nt: eo,
                                    of: eo,
                                    ol: eo,
                                    oslo: eo,
                                    rl: eo,
                                    sf: eo,
                                    st: eo,
                                    svalbard: eo,
                                    tm: eo,
                                    tr: eo,
                                    va: eo,
                                    vf: eo,
                                    akrehamn: e,
                                    'xn--krehamn-dxa': e,
                                    åkrehamn: e,
                                    algard: e,
                                    'xn--lgrd-poac': e,
                                    ålgård: e,
                                    arna: e,
                                    bronnoysund: e,
                                    'xn--brnnysund-m8ac': e,
                                    brønnøysund: e,
                                    brumunddal: e,
                                    bryne: e,
                                    drobak: e,
                                    'xn--drbak-wua': e,
                                    drøbak: e,
                                    egersund: e,
                                    fetsund: e,
                                    floro: e,
                                    'xn--flor-jra': e,
                                    florø: e,
                                    fredrikstad: e,
                                    hokksund: e,
                                    honefoss: e,
                                    'xn--hnefoss-q1a': e,
                                    hønefoss: e,
                                    jessheim: e,
                                    jorpeland: e,
                                    'xn--jrpeland-54a': e,
                                    jørpeland: e,
                                    kirkenes: e,
                                    kopervik: e,
                                    krokstadelva: e,
                                    langevag: e,
                                    'xn--langevg-jxa': e,
                                    langevåg: e,
                                    leirvik: e,
                                    mjondalen: e,
                                    'xn--mjndalen-64a': e,
                                    mjøndalen: e,
                                    'mo-i-rana': e,
                                    mosjoen: e,
                                    'xn--mosjen-eya': e,
                                    mosjøen: e,
                                    nesoddtangen: e,
                                    orkanger: e,
                                    osoyro: e,
                                    'xn--osyro-wua': e,
                                    osøyro: e,
                                    raholt: e,
                                    'xn--rholt-mra': e,
                                    råholt: e,
                                    sandnessjoen: e,
                                    'xn--sandnessjen-ogb': e,
                                    sandnessjøen: e,
                                    skedsmokorset: e,
                                    slattum: e,
                                    spjelkavik: e,
                                    stathelle: e,
                                    stavern: e,
                                    stjordalshalsen: e,
                                    'xn--stjrdalshalsen-sqb': e,
                                    stjørdalshalsen: e,
                                    tananger: e,
                                    tranby: e,
                                    vossevangen: e,
                                    aarborte: e,
                                    aejrie: e,
                                    afjord: e,
                                    'xn--fjord-lra': e,
                                    åfjord: e,
                                    agdenes: e,
                                    akershus: en,
                                    aknoluokta: e,
                                    'xn--koluokta-7ya57h': e,
                                    ákŋoluokta: e,
                                    al: e,
                                    'xn--l-1fa': e,
                                    ål: e,
                                    alaheadju: e,
                                    'xn--laheadju-7ya': e,
                                    álaheadju: e,
                                    alesund: e,
                                    'xn--lesund-hua': e,
                                    ålesund: e,
                                    alstahaug: e,
                                    alta: e,
                                    'xn--lt-liac': e,
                                    áltá: e,
                                    alvdal: e,
                                    amli: e,
                                    'xn--mli-tla': e,
                                    åmli: e,
                                    amot: e,
                                    'xn--mot-tla': e,
                                    åmot: e,
                                    andasuolo: e,
                                    andebu: e,
                                    andoy: e,
                                    'xn--andy-ira': e,
                                    andøy: e,
                                    ardal: e,
                                    'xn--rdal-poa': e,
                                    årdal: e,
                                    aremark: e,
                                    arendal: e,
                                    'xn--s-1fa': e,
                                    ås: e,
                                    aseral: e,
                                    'xn--seral-lra': e,
                                    åseral: e,
                                    asker: e,
                                    askim: e,
                                    askoy: e,
                                    'xn--asky-ira': e,
                                    askøy: e,
                                    askvoll: e,
                                    asnes: e,
                                    'xn--snes-poa': e,
                                    åsnes: e,
                                    audnedaln: e,
                                    aukra: e,
                                    aure: e,
                                    aurland: e,
                                    'aurskog-holand': e,
                                    'xn--aurskog-hland-jnb': e,
                                    'aurskog-h\xf8land': e,
                                    austevoll: e,
                                    austrheim: e,
                                    averoy: e,
                                    'xn--avery-yua': e,
                                    averøy: e,
                                    badaddja: e,
                                    'xn--bdddj-mrabd': e,
                                    bådåddjå: e,
                                    'xn--brum-voa': e,
                                    bærum: e,
                                    bahcavuotna: e,
                                    'xn--bhcavuotna-s4a': e,
                                    báhcavuotna: e,
                                    bahccavuotna: e,
                                    'xn--bhccavuotna-k7a': e,
                                    báhccavuotna: e,
                                    baidar: e,
                                    'xn--bidr-5nac': e,
                                    báidár: e,
                                    bajddar: e,
                                    'xn--bjddar-pta': e,
                                    bájddar: e,
                                    balat: e,
                                    'xn--blt-elab': e,
                                    bálát: e,
                                    balestrand: e,
                                    ballangen: e,
                                    balsfjord: e,
                                    bamble: e,
                                    bardu: e,
                                    barum: e,
                                    batsfjord: e,
                                    'xn--btsfjord-9za': e,
                                    båtsfjord: e,
                                    bearalvahki: e,
                                    'xn--bearalvhki-y4a': e,
                                    bearalváhki: e,
                                    beardu: e,
                                    beiarn: e,
                                    berg: e,
                                    bergen: e,
                                    berlevag: e,
                                    'xn--berlevg-jxa': e,
                                    berlevåg: e,
                                    bievat: e,
                                    'xn--bievt-0qa': e,
                                    bievát: e,
                                    bindal: e,
                                    birkenes: e,
                                    bjerkreim: e,
                                    bjugn: e,
                                    bodo: e,
                                    'xn--bod-2na': e,
                                    bodø: e,
                                    bokn: e,
                                    bomlo: e,
                                    'xn--bmlo-gra': e,
                                    bømlo: e,
                                    bremanger: e,
                                    bronnoy: e,
                                    'xn--brnny-wuac': e,
                                    brønnøy: e,
                                    budejju: e,
                                    buskerud: en,
                                    bygland: e,
                                    bykle: e,
                                    cahcesuolo: e,
                                    'xn--hcesuolo-7ya35b': e,
                                    čáhcesuolo: e,
                                    davvenjarga: e,
                                    'xn--davvenjrga-y4a': e,
                                    davvenjárga: e,
                                    davvesiida: e,
                                    deatnu: e,
                                    dielddanuorri: e,
                                    divtasvuodna: e,
                                    divttasvuotna: e,
                                    donna: e,
                                    'xn--dnna-gra': e,
                                    dønna: e,
                                    dovre: e,
                                    drammen: e,
                                    drangedal: e,
                                    dyroy: e,
                                    'xn--dyry-ira': e,
                                    dyrøy: e,
                                    eid: e,
                                    eidfjord: e,
                                    eidsberg: e,
                                    eidskog: e,
                                    eidsvoll: e,
                                    eigersund: e,
                                    elverum: e,
                                    enebakk: e,
                                    engerdal: e,
                                    etne: e,
                                    etnedal: e,
                                    evenassi: e,
                                    'xn--eveni-0qa01ga': e,
                                    evenášši: e,
                                    evenes: e,
                                    'evje-og-hornnes': e,
                                    farsund: e,
                                    fauske: e,
                                    fedje: e,
                                    fet: e,
                                    finnoy: e,
                                    'xn--finny-yua': e,
                                    finnøy: e,
                                    fitjar: e,
                                    fjaler: e,
                                    fjell: e,
                                    fla: e,
                                    'xn--fl-zia': e,
                                    flå: e,
                                    flakstad: e,
                                    flatanger: e,
                                    flekkefjord: e,
                                    flesberg: e,
                                    flora: e,
                                    folldal: e,
                                    forde: e,
                                    'xn--frde-gra': e,
                                    førde: e,
                                    forsand: e,
                                    fosnes: e,
                                    'xn--frna-woa': e,
                                    fræna: e,
                                    frana: e,
                                    frei: e,
                                    frogn: e,
                                    froland: e,
                                    frosta: e,
                                    froya: e,
                                    'xn--frya-hra': e,
                                    frøya: e,
                                    fuoisku: e,
                                    fuossko: e,
                                    fusa: e,
                                    fyresdal: e,
                                    gaivuotna: e,
                                    'xn--givuotna-8ya': e,
                                    gáivuotna: e,
                                    galsa: e,
                                    'xn--gls-elac': e,
                                    gálsá: e,
                                    gamvik: e,
                                    gangaviika: e,
                                    'xn--ggaviika-8ya47h': e,
                                    gáŋgaviika: e,
                                    gaular: e,
                                    gausdal: e,
                                    giehtavuoatna: e,
                                    gildeskal: e,
                                    'xn--gildeskl-g0a': e,
                                    gildeskål: e,
                                    giske: e,
                                    gjemnes: e,
                                    gjerdrum: e,
                                    gjerstad: e,
                                    gjesdal: e,
                                    gjovik: e,
                                    'xn--gjvik-wua': e,
                                    gjøvik: e,
                                    gloppen: e,
                                    gol: e,
                                    gran: e,
                                    grane: e,
                                    granvin: e,
                                    gratangen: e,
                                    grimstad: e,
                                    grong: e,
                                    grue: e,
                                    gulen: e,
                                    guovdageaidnu: e,
                                    ha: e,
                                    'xn--h-2fa': e,
                                    hå: e,
                                    habmer: e,
                                    'xn--hbmer-xqa': e,
                                    hábmer: e,
                                    hadsel: e,
                                    'xn--hgebostad-g3a': e,
                                    hægebostad: e,
                                    hagebostad: e,
                                    halden: e,
                                    halsa: e,
                                    hamar: e,
                                    hamaroy: e,
                                    hammarfeasta: e,
                                    'xn--hmmrfeasta-s4ac': e,
                                    hámmárfeasta: e,
                                    hammerfest: e,
                                    hapmir: e,
                                    'xn--hpmir-xqa': e,
                                    hápmir: e,
                                    haram: e,
                                    hareid: e,
                                    harstad: e,
                                    hasvik: e,
                                    hattfjelldal: e,
                                    haugesund: e,
                                    hedmark: [0, { os: e, valer: e, 'xn--vler-qoa': e, våler: e }],
                                    hemne: e,
                                    hemnes: e,
                                    hemsedal: e,
                                    hitra: e,
                                    hjartdal: e,
                                    hjelmeland: e,
                                    hobol: e,
                                    'xn--hobl-ira': e,
                                    hobøl: e,
                                    hof: e,
                                    hol: e,
                                    hole: e,
                                    holmestrand: e,
                                    holtalen: e,
                                    'xn--holtlen-hxa': e,
                                    holtålen: e,
                                    hordaland: [0, { os: e }],
                                    hornindal: e,
                                    horten: e,
                                    hoyanger: e,
                                    'xn--hyanger-q1a': e,
                                    høyanger: e,
                                    hoylandet: e,
                                    'xn--hylandet-54a': e,
                                    høylandet: e,
                                    hurdal: e,
                                    hurum: e,
                                    hvaler: e,
                                    hyllestad: e,
                                    ibestad: e,
                                    inderoy: e,
                                    'xn--indery-fya': e,
                                    inderøy: e,
                                    iveland: e,
                                    ivgu: e,
                                    jevnaker: e,
                                    jolster: e,
                                    'xn--jlster-bya': e,
                                    jølster: e,
                                    jondal: e,
                                    kafjord: e,
                                    'xn--kfjord-iua': e,
                                    kåfjord: e,
                                    karasjohka: e,
                                    'xn--krjohka-hwab49j': e,
                                    kárášjohka: e,
                                    karasjok: e,
                                    karlsoy: e,
                                    karmoy: e,
                                    'xn--karmy-yua': e,
                                    karmøy: e,
                                    kautokeino: e,
                                    klabu: e,
                                    'xn--klbu-woa': e,
                                    klæbu: e,
                                    klepp: e,
                                    kongsberg: e,
                                    kongsvinger: e,
                                    kraanghke: e,
                                    'xn--kranghke-b0a': e,
                                    kråanghke: e,
                                    kragero: e,
                                    'xn--krager-gya': e,
                                    kragerø: e,
                                    kristiansand: e,
                                    kristiansund: e,
                                    krodsherad: e,
                                    'xn--krdsherad-m8a': e,
                                    krødsherad: e,
                                    'xn--kvfjord-nxa': e,
                                    kvæfjord: e,
                                    'xn--kvnangen-k0a': e,
                                    kvænangen: e,
                                    kvafjord: e,
                                    kvalsund: e,
                                    kvam: e,
                                    kvanangen: e,
                                    kvinesdal: e,
                                    kvinnherad: e,
                                    kviteseid: e,
                                    kvitsoy: e,
                                    'xn--kvitsy-fya': e,
                                    kvitsøy: e,
                                    laakesvuemie: e,
                                    'xn--lrdal-sra': e,
                                    lærdal: e,
                                    lahppi: e,
                                    'xn--lhppi-xqa': e,
                                    láhppi: e,
                                    lardal: e,
                                    larvik: e,
                                    lavagis: e,
                                    lavangen: e,
                                    leangaviika: e,
                                    'xn--leagaviika-52b': e,
                                    leaŋgaviika: e,
                                    lebesby: e,
                                    leikanger: e,
                                    leirfjord: e,
                                    leka: e,
                                    leksvik: e,
                                    lenvik: e,
                                    lerdal: e,
                                    lesja: e,
                                    levanger: e,
                                    lier: e,
                                    lierne: e,
                                    lillehammer: e,
                                    lillesand: e,
                                    lindas: e,
                                    'xn--linds-pra': e,
                                    lindås: e,
                                    lindesnes: e,
                                    loabat: e,
                                    'xn--loabt-0qa': e,
                                    loabát: e,
                                    lodingen: e,
                                    'xn--ldingen-q1a': e,
                                    lødingen: e,
                                    lom: e,
                                    loppa: e,
                                    lorenskog: e,
                                    'xn--lrenskog-54a': e,
                                    lørenskog: e,
                                    loten: e,
                                    'xn--lten-gra': e,
                                    løten: e,
                                    lund: e,
                                    lunner: e,
                                    luroy: e,
                                    'xn--lury-ira': e,
                                    lurøy: e,
                                    luster: e,
                                    lyngdal: e,
                                    lyngen: e,
                                    malatvuopmi: e,
                                    'xn--mlatvuopmi-s4a': e,
                                    málatvuopmi: e,
                                    malselv: e,
                                    'xn--mlselv-iua': e,
                                    målselv: e,
                                    malvik: e,
                                    mandal: e,
                                    marker: e,
                                    marnardal: e,
                                    masfjorden: e,
                                    masoy: e,
                                    'xn--msy-ula0h': e,
                                    måsøy: e,
                                    'matta-varjjat': e,
                                    'xn--mtta-vrjjat-k7af': e,
                                    'm\xe1tta-v\xe1rjjat': e,
                                    meland: e,
                                    meldal: e,
                                    melhus: e,
                                    meloy: e,
                                    'xn--mely-ira': e,
                                    meløy: e,
                                    meraker: e,
                                    'xn--merker-kua': e,
                                    meråker: e,
                                    midsund: e,
                                    'midtre-gauldal': e,
                                    moareke: e,
                                    'xn--moreke-jua': e,
                                    moåreke: e,
                                    modalen: e,
                                    modum: e,
                                    molde: e,
                                    'more-og-romsdal': [0, { heroy: e, sande: e }],
                                    'xn--mre-og-romsdal-qqb': [0, { 'xn--hery-ira': e, sande: e }],
                                    'm\xf8re-og-romsdal': [0, { herøy: e, sande: e }],
                                    moskenes: e,
                                    moss: e,
                                    muosat: e,
                                    'xn--muost-0qa': e,
                                    muosát: e,
                                    naamesjevuemie: e,
                                    'xn--nmesjevuemie-tcba': e,
                                    nååmesjevuemie: e,
                                    'xn--nry-yla5g': e,
                                    nærøy: e,
                                    namdalseid: e,
                                    namsos: e,
                                    namsskogan: e,
                                    nannestad: e,
                                    naroy: e,
                                    narviika: e,
                                    narvik: e,
                                    naustdal: e,
                                    navuotna: e,
                                    'xn--nvuotna-hwa': e,
                                    návuotna: e,
                                    'nedre-eiker': e,
                                    nesna: e,
                                    nesodden: e,
                                    nesseby: e,
                                    nesset: e,
                                    nissedal: e,
                                    nittedal: e,
                                    'nord-aurdal': e,
                                    'nord-fron': e,
                                    'nord-odal': e,
                                    norddal: e,
                                    nordkapp: e,
                                    nordland: [0, { bo: e, 'xn--b-5ga': e, bø: e, heroy: e, 'xn--hery-ira': e, herøy: e }],
                                    'nordre-land': e,
                                    nordreisa: e,
                                    'nore-og-uvdal': e,
                                    notodden: e,
                                    notteroy: e,
                                    'xn--nttery-byae': e,
                                    nøtterøy: e,
                                    odda: e,
                                    oksnes: e,
                                    'xn--ksnes-uua': e,
                                    øksnes: e,
                                    omasvuotna: e,
                                    oppdal: e,
                                    oppegard: e,
                                    'xn--oppegrd-ixa': e,
                                    oppegård: e,
                                    orkdal: e,
                                    orland: e,
                                    'xn--rland-uua': e,
                                    ørland: e,
                                    orskog: e,
                                    'xn--rskog-uua': e,
                                    ørskog: e,
                                    orsta: e,
                                    'xn--rsta-fra': e,
                                    ørsta: e,
                                    osen: e,
                                    osteroy: e,
                                    'xn--ostery-fya': e,
                                    osterøy: e,
                                    ostfold: [0, { valer: e }],
                                    'xn--stfold-9xa': [0, { 'xn--vler-qoa': e }],
                                    østfold: [0, { våler: e }],
                                    'ostre-toten': e,
                                    'xn--stre-toten-zcb': e,
                                    '\xf8stre-toten': e,
                                    overhalla: e,
                                    'ovre-eiker': e,
                                    'xn--vre-eiker-k8a': e,
                                    '\xf8vre-eiker': e,
                                    oyer: e,
                                    'xn--yer-zna': e,
                                    øyer: e,
                                    oygarden: e,
                                    'xn--ygarden-p1a': e,
                                    øygarden: e,
                                    'oystre-slidre': e,
                                    'xn--ystre-slidre-ujb': e,
                                    '\xf8ystre-slidre': e,
                                    porsanger: e,
                                    porsangu: e,
                                    'xn--porsgu-sta26f': e,
                                    porsáŋgu: e,
                                    porsgrunn: e,
                                    rade: e,
                                    'xn--rde-ula': e,
                                    råde: e,
                                    radoy: e,
                                    'xn--rady-ira': e,
                                    radøy: e,
                                    'xn--rlingen-mxa': e,
                                    rælingen: e,
                                    rahkkeravju: e,
                                    'xn--rhkkervju-01af': e,
                                    ráhkkerávju: e,
                                    raisa: e,
                                    'xn--risa-5na': e,
                                    ráisa: e,
                                    rakkestad: e,
                                    ralingen: e,
                                    rana: e,
                                    randaberg: e,
                                    rauma: e,
                                    rendalen: e,
                                    rennebu: e,
                                    rennesoy: e,
                                    'xn--rennesy-v1a': e,
                                    rennesøy: e,
                                    rindal: e,
                                    ringebu: e,
                                    ringerike: e,
                                    ringsaker: e,
                                    risor: e,
                                    'xn--risr-ira': e,
                                    risør: e,
                                    rissa: e,
                                    roan: e,
                                    rodoy: e,
                                    'xn--rdy-0nab': e,
                                    rødøy: e,
                                    rollag: e,
                                    romsa: e,
                                    romskog: e,
                                    'xn--rmskog-bya': e,
                                    rømskog: e,
                                    roros: e,
                                    'xn--rros-gra': e,
                                    røros: e,
                                    rost: e,
                                    'xn--rst-0na': e,
                                    røst: e,
                                    royken: e,
                                    'xn--ryken-vua': e,
                                    røyken: e,
                                    royrvik: e,
                                    'xn--ryrvik-bya': e,
                                    røyrvik: e,
                                    ruovat: e,
                                    rygge: e,
                                    salangen: e,
                                    salat: e,
                                    'xn--slat-5na': e,
                                    sálat: e,
                                    'xn--slt-elab': e,
                                    sálát: e,
                                    saltdal: e,
                                    samnanger: e,
                                    sandefjord: e,
                                    sandnes: e,
                                    sandoy: e,
                                    'xn--sandy-yua': e,
                                    sandøy: e,
                                    sarpsborg: e,
                                    sauda: e,
                                    sauherad: e,
                                    sel: e,
                                    selbu: e,
                                    selje: e,
                                    seljord: e,
                                    siellak: e,
                                    sigdal: e,
                                    siljan: e,
                                    sirdal: e,
                                    skanit: e,
                                    'xn--sknit-yqa': e,
                                    skánit: e,
                                    skanland: e,
                                    'xn--sknland-fxa': e,
                                    skånland: e,
                                    skaun: e,
                                    skedsmo: e,
                                    ski: e,
                                    skien: e,
                                    skierva: e,
                                    'xn--skierv-uta': e,
                                    skiervá: e,
                                    skiptvet: e,
                                    skjak: e,
                                    'xn--skjk-soa': e,
                                    skjåk: e,
                                    skjervoy: e,
                                    'xn--skjervy-v1a': e,
                                    skjervøy: e,
                                    skodje: e,
                                    smola: e,
                                    'xn--smla-hra': e,
                                    smøla: e,
                                    snaase: e,
                                    'xn--snase-nra': e,
                                    snåase: e,
                                    snasa: e,
                                    'xn--snsa-roa': e,
                                    snåsa: e,
                                    snillfjord: e,
                                    snoasa: e,
                                    sogndal: e,
                                    sogne: e,
                                    'xn--sgne-gra': e,
                                    søgne: e,
                                    sokndal: e,
                                    sola: e,
                                    solund: e,
                                    somna: e,
                                    'xn--smna-gra': e,
                                    sømna: e,
                                    'sondre-land': e,
                                    'xn--sndre-land-0cb': e,
                                    's\xf8ndre-land': e,
                                    songdalen: e,
                                    'sor-aurdal': e,
                                    'xn--sr-aurdal-l8a': e,
                                    's\xf8r-aurdal': e,
                                    'sor-fron': e,
                                    'xn--sr-fron-q1a': e,
                                    's\xf8r-fron': e,
                                    'sor-odal': e,
                                    'xn--sr-odal-q1a': e,
                                    's\xf8r-odal': e,
                                    'sor-varanger': e,
                                    'xn--sr-varanger-ggb': e,
                                    's\xf8r-varanger': e,
                                    sorfold: e,
                                    'xn--srfold-bya': e,
                                    sørfold: e,
                                    sorreisa: e,
                                    'xn--srreisa-q1a': e,
                                    sørreisa: e,
                                    sortland: e,
                                    sorum: e,
                                    'xn--srum-gra': e,
                                    sørum: e,
                                    spydeberg: e,
                                    stange: e,
                                    stavanger: e,
                                    steigen: e,
                                    steinkjer: e,
                                    stjordal: e,
                                    'xn--stjrdal-s1a': e,
                                    stjørdal: e,
                                    stokke: e,
                                    'stor-elvdal': e,
                                    stord: e,
                                    stordal: e,
                                    storfjord: e,
                                    strand: e,
                                    stranda: e,
                                    stryn: e,
                                    sula: e,
                                    suldal: e,
                                    sund: e,
                                    sunndal: e,
                                    surnadal: e,
                                    sveio: e,
                                    svelvik: e,
                                    sykkylven: e,
                                    tana: e,
                                    telemark: [0, { bo: e, 'xn--b-5ga': e, bø: e }],
                                    time: e,
                                    tingvoll: e,
                                    tinn: e,
                                    tjeldsund: e,
                                    tjome: e,
                                    'xn--tjme-hra': e,
                                    tjøme: e,
                                    tokke: e,
                                    tolga: e,
                                    tonsberg: e,
                                    'xn--tnsberg-q1a': e,
                                    tønsberg: e,
                                    torsken: e,
                                    'xn--trna-woa': e,
                                    træna: e,
                                    trana: e,
                                    tranoy: e,
                                    'xn--trany-yua': e,
                                    tranøy: e,
                                    troandin: e,
                                    trogstad: e,
                                    'xn--trgstad-r1a': e,
                                    trøgstad: e,
                                    tromsa: e,
                                    tromso: e,
                                    'xn--troms-zua': e,
                                    tromsø: e,
                                    trondheim: e,
                                    trysil: e,
                                    tvedestrand: e,
                                    tydal: e,
                                    tynset: e,
                                    tysfjord: e,
                                    tysnes: e,
                                    'xn--tysvr-vra': e,
                                    tysvær: e,
                                    tysvar: e,
                                    ullensaker: e,
                                    ullensvang: e,
                                    ulvik: e,
                                    unjarga: e,
                                    'xn--unjrga-rta': e,
                                    unjárga: e,
                                    utsira: e,
                                    vaapste: e,
                                    vadso: e,
                                    'xn--vads-jra': e,
                                    vadsø: e,
                                    'xn--vry-yla5g': e,
                                    værøy: e,
                                    vaga: e,
                                    'xn--vg-yiab': e,
                                    vågå: e,
                                    vagan: e,
                                    'xn--vgan-qoa': e,
                                    vågan: e,
                                    vagsoy: e,
                                    'xn--vgsy-qoa0j': e,
                                    vågsøy: e,
                                    vaksdal: e,
                                    valle: e,
                                    vang: e,
                                    vanylven: e,
                                    vardo: e,
                                    'xn--vard-jra': e,
                                    vardø: e,
                                    varggat: e,
                                    'xn--vrggt-xqad': e,
                                    várggát: e,
                                    varoy: e,
                                    vefsn: e,
                                    vega: e,
                                    vegarshei: e,
                                    'xn--vegrshei-c0a': e,
                                    vegårshei: e,
                                    vennesla: e,
                                    verdal: e,
                                    verran: e,
                                    vestby: e,
                                    vestfold: [0, { sande: e }],
                                    vestnes: e,
                                    'vestre-slidre': e,
                                    'vestre-toten': e,
                                    vestvagoy: e,
                                    'xn--vestvgy-ixa6o': e,
                                    vestvågøy: e,
                                    vevelstad: e,
                                    vik: e,
                                    vikna: e,
                                    vindafjord: e,
                                    voagat: e,
                                    volda: e,
                                    voss: e,
                                    co: t,
                                    '123hjemmeside': t,
                                    myspreadshop: t,
                                },
                            ],
                            np: b,
                            nr: ea,
                            nu: [1, { merseine: t, mine: t, shacknet: t, enterprisecloud: t }],
                            nz: [
                                1,
                                {
                                    ac: e,
                                    co: e,
                                    cri: e,
                                    geek: e,
                                    gen: e,
                                    govt: e,
                                    health: e,
                                    iwi: e,
                                    kiwi: e,
                                    maori: e,
                                    'xn--mori-qsa': e,
                                    māori: e,
                                    mil: e,
                                    net: e,
                                    org: e,
                                    parliament: e,
                                    school: e,
                                    cloudns: t,
                                },
                            ],
                            om: [1, { co: e, com: e, edu: e, gov: e, med: e, museum: e, net: e, org: e, pro: e }],
                            onion: e,
                            org: [
                                1,
                                {
                                    altervista: t,
                                    pimienta: t,
                                    poivron: t,
                                    potager: t,
                                    sweetpepper: t,
                                    cdn77: [0, { c: t, rsc: t }],
                                    'cdn77-secure': [0, { origin: [0, { ssl: t }] }],
                                    ae: t,
                                    cloudns: t,
                                    'ip-dynamic': t,
                                    ddnss: t,
                                    dpdns: t,
                                    duckdns: t,
                                    tunk: t,
                                    blogdns: t,
                                    blogsite: t,
                                    boldlygoingnowhere: t,
                                    dnsalias: t,
                                    dnsdojo: t,
                                    doesntexist: t,
                                    dontexist: t,
                                    doomdns: t,
                                    dvrdns: t,
                                    dynalias: t,
                                    dyndns: [2, { go: t, home: t }],
                                    endofinternet: t,
                                    endoftheinternet: t,
                                    'from-me': t,
                                    'game-host': t,
                                    gotdns: t,
                                    'hobby-site': t,
                                    homedns: t,
                                    homeftp: t,
                                    homelinux: t,
                                    homeunix: t,
                                    'is-a-bruinsfan': t,
                                    'is-a-candidate': t,
                                    'is-a-celticsfan': t,
                                    'is-a-chef': t,
                                    'is-a-geek': t,
                                    'is-a-knight': t,
                                    'is-a-linux-user': t,
                                    'is-a-patsfan': t,
                                    'is-a-soxfan': t,
                                    'is-found': t,
                                    'is-lost': t,
                                    'is-saved': t,
                                    'is-very-bad': t,
                                    'is-very-evil': t,
                                    'is-very-good': t,
                                    'is-very-nice': t,
                                    'is-very-sweet': t,
                                    'isa-geek': t,
                                    'kicks-ass': t,
                                    misconfused: t,
                                    podzone: t,
                                    readmyblog: t,
                                    selfip: t,
                                    sellsyourhome: t,
                                    servebbs: t,
                                    serveftp: t,
                                    servegame: t,
                                    'stuff-4-sale': t,
                                    webhop: t,
                                    accesscam: t,
                                    camdvr: t,
                                    freeddns: t,
                                    mywire: t,
                                    webredirect: t,
                                    twmail: t,
                                    eu: [
                                        2,
                                        {
                                            al: t,
                                            asso: t,
                                            at: t,
                                            au: t,
                                            be: t,
                                            bg: t,
                                            ca: t,
                                            cd: t,
                                            ch: t,
                                            cn: t,
                                            cy: t,
                                            cz: t,
                                            de: t,
                                            dk: t,
                                            edu: t,
                                            ee: t,
                                            es: t,
                                            fi: t,
                                            fr: t,
                                            gr: t,
                                            hr: t,
                                            hu: t,
                                            ie: t,
                                            il: t,
                                            in: t,
                                            int: t,
                                            is: t,
                                            it: t,
                                            jp: t,
                                            kr: t,
                                            lt: t,
                                            lu: t,
                                            lv: t,
                                            me: t,
                                            mk: t,
                                            mt: t,
                                            my: t,
                                            net: t,
                                            ng: t,
                                            nl: t,
                                            no: t,
                                            nz: t,
                                            pl: t,
                                            pt: t,
                                            ro: t,
                                            ru: t,
                                            se: t,
                                            si: t,
                                            sk: t,
                                            tr: t,
                                            uk: t,
                                            us: t,
                                        },
                                    ],
                                    fedorainfracloud: t,
                                    fedorapeople: t,
                                    fedoraproject: [0, { cloud: t, os: U, stg: [0, { os: U }] }],
                                    freedesktop: t,
                                    hatenadiary: t,
                                    hepforge: t,
                                    'in-dsl': t,
                                    'in-vpn': t,
                                    js: t,
                                    barsy: t,
                                    mayfirst: t,
                                    routingthecloud: t,
                                    bmoattachments: t,
                                    'cable-modem': t,
                                    collegefan: t,
                                    couchpotatofries: t,
                                    hopto: t,
                                    mlbfan: t,
                                    myftp: t,
                                    mysecuritycamera: t,
                                    nflfan: t,
                                    'no-ip': t,
                                    'read-books': t,
                                    ufcfan: t,
                                    zapto: t,
                                    dynserv: t,
                                    'now-dns': t,
                                    'is-local': t,
                                    httpbin: t,
                                    pubtls: t,
                                    jpn: t,
                                    'my-firewall': t,
                                    myfirewall: t,
                                    spdns: t,
                                    'small-web': t,
                                    dsmynas: t,
                                    familyds: t,
                                    teckids: et,
                                    tuxfamily: t,
                                    diskstation: t,
                                    hk: t,
                                    us: t,
                                    toolforge: t,
                                    wmcloud: [2, { beta: t }],
                                    wmflabs: t,
                                    za: t,
                                },
                            ],
                            pa: [1, { abo: e, ac: e, com: e, edu: e, gob: e, ing: e, med: e, net: e, nom: e, org: e, sld: e }],
                            pe: [1, { com: e, edu: e, gob: e, mil: e, net: e, nom: e, org: e }],
                            pf: [1, { com: e, edu: e, org: e }],
                            pg: b,
                            ph: [1, { com: e, edu: e, gov: e, i: e, mil: e, net: e, ngo: e, org: e, cloudns: t }],
                            pk: [1, { ac: e, biz: e, com: e, edu: e, fam: e, gkp: e, gob: e, gog: e, gok: e, gop: e, gos: e, gov: e, net: e, org: e, web: e }],
                            pl: [
                                1,
                                {
                                    com: e,
                                    net: e,
                                    org: e,
                                    agro: e,
                                    aid: e,
                                    atm: e,
                                    auto: e,
                                    biz: e,
                                    edu: e,
                                    gmina: e,
                                    gsm: e,
                                    info: e,
                                    mail: e,
                                    media: e,
                                    miasta: e,
                                    mil: e,
                                    nieruchomosci: e,
                                    nom: e,
                                    pc: e,
                                    powiat: e,
                                    priv: e,
                                    realestate: e,
                                    rel: e,
                                    sex: e,
                                    shop: e,
                                    sklep: e,
                                    sos: e,
                                    szkola: e,
                                    targi: e,
                                    tm: e,
                                    tourism: e,
                                    travel: e,
                                    turystyka: e,
                                    gov: [
                                        1,
                                        {
                                            ap: e,
                                            griw: e,
                                            ic: e,
                                            is: e,
                                            kmpsp: e,
                                            konsulat: e,
                                            kppsp: e,
                                            kwp: e,
                                            kwpsp: e,
                                            mup: e,
                                            mw: e,
                                            oia: e,
                                            oirm: e,
                                            oke: e,
                                            oow: e,
                                            oschr: e,
                                            oum: e,
                                            pa: e,
                                            pinb: e,
                                            piw: e,
                                            po: e,
                                            pr: e,
                                            psp: e,
                                            psse: e,
                                            pup: e,
                                            rzgw: e,
                                            sa: e,
                                            sdn: e,
                                            sko: e,
                                            so: e,
                                            sr: e,
                                            starostwo: e,
                                            ug: e,
                                            ugim: e,
                                            um: e,
                                            umig: e,
                                            upow: e,
                                            uppo: e,
                                            us: e,
                                            uw: e,
                                            uzs: e,
                                            wif: e,
                                            wiih: e,
                                            winb: e,
                                            wios: e,
                                            witd: e,
                                            wiw: e,
                                            wkz: e,
                                            wsa: e,
                                            wskr: e,
                                            wsse: e,
                                            wuoz: e,
                                            wzmiuw: e,
                                            zp: e,
                                            zpisdn: e,
                                        },
                                    ],
                                    augustow: e,
                                    'babia-gora': e,
                                    bedzin: e,
                                    beskidy: e,
                                    bialowieza: e,
                                    bialystok: e,
                                    bielawa: e,
                                    bieszczady: e,
                                    boleslawiec: e,
                                    bydgoszcz: e,
                                    bytom: e,
                                    cieszyn: e,
                                    czeladz: e,
                                    czest: e,
                                    dlugoleka: e,
                                    elblag: e,
                                    elk: e,
                                    glogow: e,
                                    gniezno: e,
                                    gorlice: e,
                                    grajewo: e,
                                    ilawa: e,
                                    jaworzno: e,
                                    'jelenia-gora': e,
                                    jgora: e,
                                    kalisz: e,
                                    karpacz: e,
                                    kartuzy: e,
                                    kaszuby: e,
                                    katowice: e,
                                    'kazimierz-dolny': e,
                                    kepno: e,
                                    ketrzyn: e,
                                    klodzko: e,
                                    kobierzyce: e,
                                    kolobrzeg: e,
                                    konin: e,
                                    konskowola: e,
                                    kutno: e,
                                    lapy: e,
                                    lebork: e,
                                    legnica: e,
                                    lezajsk: e,
                                    limanowa: e,
                                    lomza: e,
                                    lowicz: e,
                                    lubin: e,
                                    lukow: e,
                                    malbork: e,
                                    malopolska: e,
                                    mazowsze: e,
                                    mazury: e,
                                    mielec: e,
                                    mielno: e,
                                    mragowo: e,
                                    naklo: e,
                                    nowaruda: e,
                                    nysa: e,
                                    olawa: e,
                                    olecko: e,
                                    olkusz: e,
                                    olsztyn: e,
                                    opoczno: e,
                                    opole: e,
                                    ostroda: e,
                                    ostroleka: e,
                                    ostrowiec: e,
                                    ostrowwlkp: e,
                                    pila: e,
                                    pisz: e,
                                    podhale: e,
                                    podlasie: e,
                                    polkowice: e,
                                    pomorskie: e,
                                    pomorze: e,
                                    prochowice: e,
                                    pruszkow: e,
                                    przeworsk: e,
                                    pulawy: e,
                                    radom: e,
                                    'rawa-maz': e,
                                    rybnik: e,
                                    rzeszow: e,
                                    sanok: e,
                                    sejny: e,
                                    skoczow: e,
                                    slask: e,
                                    slupsk: e,
                                    sosnowiec: e,
                                    'stalowa-wola': e,
                                    starachowice: e,
                                    stargard: e,
                                    suwalki: e,
                                    swidnica: e,
                                    swiebodzin: e,
                                    swinoujscie: e,
                                    szczecin: e,
                                    szczytno: e,
                                    tarnobrzeg: e,
                                    tgory: e,
                                    turek: e,
                                    tychy: e,
                                    ustka: e,
                                    walbrzych: e,
                                    warmia: e,
                                    warszawa: e,
                                    waw: e,
                                    wegrow: e,
                                    wielun: e,
                                    wlocl: e,
                                    wloclawek: e,
                                    wodzislaw: e,
                                    wolomin: e,
                                    wroclaw: e,
                                    zachpomor: e,
                                    zagan: e,
                                    zarow: e,
                                    zgora: e,
                                    zgorzelec: e,
                                    art: t,
                                    gliwice: t,
                                    krakow: t,
                                    poznan: t,
                                    wroc: t,
                                    zakopane: t,
                                    beep: t,
                                    'ecommerce-shop': t,
                                    cfolks: t,
                                    dfirma: t,
                                    dkonto: t,
                                    you2: t,
                                    shoparena: t,
                                    homesklep: t,
                                    sdscloud: t,
                                    unicloud: t,
                                    lodz: t,
                                    pabianice: t,
                                    plock: t,
                                    sieradz: t,
                                    skierniewice: t,
                                    zgierz: t,
                                    krasnik: t,
                                    leczna: t,
                                    lubartow: t,
                                    lublin: t,
                                    poniatowa: t,
                                    swidnik: t,
                                    co: t,
                                    torun: t,
                                    simplesite: t,
                                    myspreadshop: t,
                                    gda: t,
                                    gdansk: t,
                                    gdynia: t,
                                    med: t,
                                    sopot: t,
                                    bielsko: t,
                                },
                            ],
                            pm: [1, { own: t, name: t }],
                            pn: [1, { co: e, edu: e, gov: e, net: e, org: e }],
                            post: e,
                            pr: [1, { biz: e, com: e, edu: e, gov: e, info: e, isla: e, name: e, net: e, org: e, pro: e, ac: e, est: e, prof: e }],
                            pro: [
                                1,
                                {
                                    aaa: e,
                                    aca: e,
                                    acct: e,
                                    avocat: e,
                                    bar: e,
                                    cpa: e,
                                    eng: e,
                                    jur: e,
                                    law: e,
                                    med: e,
                                    recht: e,
                                    '12chars': t,
                                    cloudns: t,
                                    barsy: t,
                                    ngrok: t,
                                },
                            ],
                            ps: [1, { com: e, edu: e, gov: e, net: e, org: e, plo: e, sec: e }],
                            pt: [1, { com: e, edu: e, gov: e, int: e, net: e, nome: e, org: e, publ: e, '123paginaweb': t }],
                            pw: [1, { gov: e, cloudns: t, x443: t }],
                            py: [1, { com: e, coop: e, edu: e, gov: e, mil: e, net: e, org: e }],
                            qa: [1, { com: e, edu: e, gov: e, mil: e, name: e, net: e, org: e, sch: e }],
                            re: [1, { asso: e, com: e, netlib: t, can: t }],
                            ro: [1, { arts: e, com: e, firm: e, info: e, nom: e, nt: e, org: e, rec: e, store: e, tm: e, www: e, co: t, shop: t, barsy: t }],
                            rs: [1, { ac: e, co: e, edu: e, gov: e, in: e, org: e, brendly: k, barsy: t, ox: t }],
                            ru: [
                                1,
                                {
                                    ac: t,
                                    edu: t,
                                    gov: t,
                                    int: t,
                                    mil: t,
                                    eurodir: t,
                                    adygeya: t,
                                    bashkiria: t,
                                    bir: t,
                                    cbg: t,
                                    com: t,
                                    dagestan: t,
                                    grozny: t,
                                    kalmykia: t,
                                    kustanai: t,
                                    marine: t,
                                    mordovia: t,
                                    msk: t,
                                    mytis: t,
                                    nalchik: t,
                                    nov: t,
                                    pyatigorsk: t,
                                    spb: t,
                                    vladikavkaz: t,
                                    vladimir: t,
                                    na4u: t,
                                    mircloud: t,
                                    myjino: [2, { hosting: r, landing: r, spectrum: r, vps: r }],
                                    cldmail: [0, { hb: t }],
                                    mcdir: [2, { vps: t }],
                                    mcpre: t,
                                    net: t,
                                    org: t,
                                    pp: t,
                                    lk3: t,
                                    ras: t,
                                },
                            ],
                            rw: [1, { ac: e, co: e, coop: e, gov: e, mil: e, net: e, org: e }],
                            sa: [1, { com: e, edu: e, gov: e, med: e, net: e, org: e, pub: e, sch: e }],
                            sb: a,
                            sc: a,
                            sd: [1, { com: e, edu: e, gov: e, info: e, med: e, net: e, org: e, tv: e }],
                            se: [
                                1,
                                {
                                    a: e,
                                    ac: e,
                                    b: e,
                                    bd: e,
                                    brand: e,
                                    c: e,
                                    d: e,
                                    e: e,
                                    f: e,
                                    fh: e,
                                    fhsk: e,
                                    fhv: e,
                                    g: e,
                                    h: e,
                                    i: e,
                                    k: e,
                                    komforb: e,
                                    kommunalforbund: e,
                                    komvux: e,
                                    l: e,
                                    lanbib: e,
                                    m: e,
                                    n: e,
                                    naturbruksgymn: e,
                                    o: e,
                                    org: e,
                                    p: e,
                                    parti: e,
                                    pp: e,
                                    press: e,
                                    r: e,
                                    s: e,
                                    t: e,
                                    tm: e,
                                    u: e,
                                    w: e,
                                    x: e,
                                    y: e,
                                    z: e,
                                    com: t,
                                    iopsys: t,
                                    '123minsida': t,
                                    itcouldbewor: t,
                                    myspreadshop: t,
                                },
                            ],
                            sg: [1, { com: e, edu: e, gov: e, net: e, org: e, enscaled: t }],
                            sh: [
                                1,
                                {
                                    com: e,
                                    gov: e,
                                    mil: e,
                                    net: e,
                                    org: e,
                                    hashbang: t,
                                    botda: t,
                                    lovable: t,
                                    platform: [0, { ent: t, eu: t, us: t }],
                                    teleport: t,
                                    now: t,
                                },
                            ],
                            si: [1, { f5: t, gitapp: t, gitpage: t }],
                            sj: e,
                            sk: e,
                            sl: a,
                            sm: e,
                            sn: [1, { art: e, com: e, edu: e, gouv: e, org: e, perso: e, univ: e }],
                            so: [1, { com: e, edu: e, gov: e, me: e, net: e, org: e, surveys: t }],
                            sr: e,
                            ss: [1, { biz: e, co: e, com: e, edu: e, gov: e, me: e, net: e, org: e, sch: e }],
                            st: [
                                1,
                                {
                                    co: e,
                                    com: e,
                                    consulado: e,
                                    edu: e,
                                    embaixada: e,
                                    mil: e,
                                    net: e,
                                    org: e,
                                    principe: e,
                                    saotome: e,
                                    store: e,
                                    helioho: t,
                                    kirara: t,
                                    noho: t,
                                },
                            ],
                            su: [
                                1,
                                {
                                    abkhazia: t,
                                    adygeya: t,
                                    aktyubinsk: t,
                                    arkhangelsk: t,
                                    armenia: t,
                                    ashgabad: t,
                                    azerbaijan: t,
                                    balashov: t,
                                    bashkiria: t,
                                    bryansk: t,
                                    bukhara: t,
                                    chimkent: t,
                                    dagestan: t,
                                    'east-kazakhstan': t,
                                    exnet: t,
                                    georgia: t,
                                    grozny: t,
                                    ivanovo: t,
                                    jambyl: t,
                                    kalmykia: t,
                                    kaluga: t,
                                    karacol: t,
                                    karaganda: t,
                                    karelia: t,
                                    khakassia: t,
                                    krasnodar: t,
                                    kurgan: t,
                                    kustanai: t,
                                    lenug: t,
                                    mangyshlak: t,
                                    mordovia: t,
                                    msk: t,
                                    murmansk: t,
                                    nalchik: t,
                                    navoi: t,
                                    'north-kazakhstan': t,
                                    nov: t,
                                    obninsk: t,
                                    penza: t,
                                    pokrovsk: t,
                                    sochi: t,
                                    spb: t,
                                    tashkent: t,
                                    termez: t,
                                    togliatti: t,
                                    troitsk: t,
                                    tselinograd: t,
                                    tula: t,
                                    tuva: t,
                                    vladikavkaz: t,
                                    vladimir: t,
                                    vologda: t,
                                },
                            ],
                            sv: [1, { com: e, edu: e, gob: e, org: e, red: e }],
                            sx: l,
                            sy: s,
                            sz: [1, { ac: e, co: e, org: e }],
                            tc: e,
                            td: e,
                            tel: e,
                            tf: [1, { sch: t }],
                            tg: e,
                            th: [1, { ac: e, co: e, go: e, in: e, mi: e, net: e, or: e, online: t, shop: t }],
                            tj: [1, { ac: e, biz: e, co: e, com: e, edu: e, go: e, gov: e, int: e, mil: e, name: e, net: e, nic: e, org: e, test: e, web: e }],
                            tk: e,
                            tl: l,
                            tm: [1, { co: e, com: e, edu: e, gov: e, mil: e, net: e, nom: e, org: e }],
                            tn: [
                                1,
                                { com: e, ens: e, fin: e, gov: e, ind: e, info: e, intl: e, mincom: e, nat: e, net: e, org: e, perso: e, tourism: e, orangecloud: t },
                            ],
                            to: [1, { 611: t, com: e, edu: e, gov: e, mil: e, net: e, org: e, oya: t, x0: t, quickconnect: E, vpnplus: t }],
                            tr: [
                                1,
                                {
                                    av: e,
                                    bbs: e,
                                    bel: e,
                                    biz: e,
                                    com: e,
                                    dr: e,
                                    edu: e,
                                    gen: e,
                                    gov: e,
                                    info: e,
                                    k12: e,
                                    kep: e,
                                    mil: e,
                                    name: e,
                                    net: e,
                                    org: e,
                                    pol: e,
                                    tel: e,
                                    tsk: e,
                                    tv: e,
                                    web: e,
                                    nc: l,
                                },
                            ],
                            tt: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, mil: e, name: e, net: e, org: e, pro: e }],
                            tv: [1, { 'better-than': t, dyndns: t, 'on-the-web': t, 'worse-than': t, from: t, sakura: t }],
                            tw: [1, { club: e, com: [1, { mymailer: t }], ebiz: e, edu: e, game: e, gov: e, idv: e, mil: e, net: e, org: e, url: t, mydns: t }],
                            tz: [1, { ac: e, co: e, go: e, hotel: e, info: e, me: e, mil: e, mobi: e, ne: e, or: e, sc: e, tv: e }],
                            ua: [
                                1,
                                {
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    in: e,
                                    net: e,
                                    org: e,
                                    cherkassy: e,
                                    cherkasy: e,
                                    chernigov: e,
                                    chernihiv: e,
                                    chernivtsi: e,
                                    chernovtsy: e,
                                    ck: e,
                                    cn: e,
                                    cr: e,
                                    crimea: e,
                                    cv: e,
                                    dn: e,
                                    dnepropetrovsk: e,
                                    dnipropetrovsk: e,
                                    donetsk: e,
                                    dp: e,
                                    if: e,
                                    'ivano-frankivsk': e,
                                    kh: e,
                                    kharkiv: e,
                                    kharkov: e,
                                    kherson: e,
                                    khmelnitskiy: e,
                                    khmelnytskyi: e,
                                    kiev: e,
                                    kirovograd: e,
                                    km: e,
                                    kr: e,
                                    kropyvnytskyi: e,
                                    krym: e,
                                    ks: e,
                                    kv: e,
                                    kyiv: e,
                                    lg: e,
                                    lt: e,
                                    lugansk: e,
                                    luhansk: e,
                                    lutsk: e,
                                    lv: e,
                                    lviv: e,
                                    mk: e,
                                    mykolaiv: e,
                                    nikolaev: e,
                                    od: e,
                                    odesa: e,
                                    odessa: e,
                                    pl: e,
                                    poltava: e,
                                    rivne: e,
                                    rovno: e,
                                    rv: e,
                                    sb: e,
                                    sebastopol: e,
                                    sevastopol: e,
                                    sm: e,
                                    sumy: e,
                                    te: e,
                                    ternopil: e,
                                    uz: e,
                                    uzhgorod: e,
                                    uzhhorod: e,
                                    vinnica: e,
                                    vinnytsia: e,
                                    vn: e,
                                    volyn: e,
                                    yalta: e,
                                    zakarpattia: e,
                                    zaporizhzhe: e,
                                    zaporizhzhia: e,
                                    zhitomir: e,
                                    zhytomyr: e,
                                    zp: e,
                                    zt: e,
                                    cc: t,
                                    inf: t,
                                    ltd: t,
                                    cx: t,
                                    biz: t,
                                    co: t,
                                    pp: t,
                                    v: t,
                                },
                            ],
                            ug: [1, { ac: e, co: e, com: e, edu: e, go: e, gov: e, mil: e, ne: e, or: e, org: e, sc: e, us: e }],
                            uk: [
                                1,
                                {
                                    ac: e,
                                    co: [
                                        1,
                                        {
                                            bytemark: [0, { dh: t, vm: t }],
                                            layershift: G,
                                            barsy: t,
                                            barsyonline: t,
                                            retrosnub: ee,
                                            'nh-serv': t,
                                            'no-ip': t,
                                            adimo: t,
                                            myspreadshop: t,
                                        },
                                    ],
                                    gov: [1, { api: t, campaign: t, service: t }],
                                    ltd: e,
                                    me: e,
                                    net: e,
                                    nhs: e,
                                    org: [1, { glug: t, lug: t, lugs: t, affinitylottery: t, raffleentry: t, weeklylottery: t }],
                                    plc: e,
                                    police: e,
                                    sch: b,
                                    conn: t,
                                    copro: t,
                                    hosp: t,
                                    'independent-commission': t,
                                    'independent-inquest': t,
                                    'independent-inquiry': t,
                                    'independent-panel': t,
                                    'independent-review': t,
                                    'public-inquiry': t,
                                    'royal-commission': t,
                                    pymnt: t,
                                    barsy: t,
                                    nimsite: t,
                                    oraclegovcloudapps: r,
                                },
                            ],
                            us: [
                                1,
                                {
                                    dni: e,
                                    isa: e,
                                    nsn: e,
                                    ak: el,
                                    al: el,
                                    ar: el,
                                    as: el,
                                    az: el,
                                    ca: el,
                                    co: el,
                                    ct: el,
                                    dc: el,
                                    de: eu,
                                    fl: el,
                                    ga: el,
                                    gu: el,
                                    hi: ec,
                                    ia: el,
                                    id: el,
                                    il: el,
                                    in: el,
                                    ks: el,
                                    ky: el,
                                    la: el,
                                    ma: [1, { k12: [1, { chtr: e, paroch: e, pvt: e }], cc: e, lib: e }],
                                    md: el,
                                    me: el,
                                    mi: [1, { k12: e, cc: e, lib: e, 'ann-arbor': e, cog: e, dst: e, eaton: e, gen: e, mus: e, tec: e, washtenaw: e }],
                                    mn: el,
                                    mo: el,
                                    ms: [1, { k12: e, cc: e }],
                                    mt: el,
                                    nc: el,
                                    nd: ec,
                                    ne: el,
                                    nh: el,
                                    nj: el,
                                    nm: el,
                                    nv: el,
                                    ny: el,
                                    oh: el,
                                    ok: el,
                                    or: el,
                                    pa: el,
                                    pr: el,
                                    ri: ec,
                                    sc: el,
                                    sd: ec,
                                    tn: el,
                                    tx: el,
                                    ut: el,
                                    va: el,
                                    vi: el,
                                    vt: el,
                                    wa: el,
                                    wi: el,
                                    wv: eu,
                                    wy: el,
                                    cloudns: t,
                                    'is-by': t,
                                    'land-4-sale': t,
                                    'stuff-4-sale': t,
                                    heliohost: t,
                                    enscaled: [0, { phx: t }],
                                    mircloud: t,
                                    ngo: t,
                                    golffan: t,
                                    noip: t,
                                    pointto: t,
                                    freeddns: t,
                                    srv: [2, { gh: t, gl: t }],
                                    platterp: t,
                                    servername: t,
                                },
                            ],
                            uy: [1, { com: e, edu: e, gub: e, mil: e, net: e, org: e }],
                            uz: [1, { co: e, com: e, net: e, org: e }],
                            va: e,
                            vc: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, gv: [2, { d: t }], '0e': r, mydns: t }],
                            ve: [
                                1,
                                {
                                    arts: e,
                                    bib: e,
                                    co: e,
                                    com: e,
                                    e12: e,
                                    edu: e,
                                    emprende: e,
                                    firm: e,
                                    gob: e,
                                    gov: e,
                                    ia: e,
                                    info: e,
                                    int: e,
                                    mil: e,
                                    net: e,
                                    nom: e,
                                    org: e,
                                    rar: e,
                                    rec: e,
                                    store: e,
                                    tec: e,
                                    web: e,
                                },
                            ],
                            vg: [1, { edu: e }],
                            vi: [1, { co: e, com: e, k12: e, net: e, org: e }],
                            vn: [
                                1,
                                {
                                    ac: e,
                                    ai: e,
                                    biz: e,
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    health: e,
                                    id: e,
                                    info: e,
                                    int: e,
                                    io: e,
                                    name: e,
                                    net: e,
                                    org: e,
                                    pro: e,
                                    angiang: e,
                                    bacgiang: e,
                                    backan: e,
                                    baclieu: e,
                                    bacninh: e,
                                    'baria-vungtau': e,
                                    bentre: e,
                                    binhdinh: e,
                                    binhduong: e,
                                    binhphuoc: e,
                                    binhthuan: e,
                                    camau: e,
                                    cantho: e,
                                    caobang: e,
                                    daklak: e,
                                    daknong: e,
                                    danang: e,
                                    dienbien: e,
                                    dongnai: e,
                                    dongthap: e,
                                    gialai: e,
                                    hagiang: e,
                                    haiduong: e,
                                    haiphong: e,
                                    hanam: e,
                                    hanoi: e,
                                    hatinh: e,
                                    haugiang: e,
                                    hoabinh: e,
                                    hungyen: e,
                                    khanhhoa: e,
                                    kiengiang: e,
                                    kontum: e,
                                    laichau: e,
                                    lamdong: e,
                                    langson: e,
                                    laocai: e,
                                    longan: e,
                                    namdinh: e,
                                    nghean: e,
                                    ninhbinh: e,
                                    ninhthuan: e,
                                    phutho: e,
                                    phuyen: e,
                                    quangbinh: e,
                                    quangnam: e,
                                    quangngai: e,
                                    quangninh: e,
                                    quangtri: e,
                                    soctrang: e,
                                    sonla: e,
                                    tayninh: e,
                                    thaibinh: e,
                                    thainguyen: e,
                                    thanhhoa: e,
                                    thanhphohochiminh: e,
                                    thuathienhue: e,
                                    tiengiang: e,
                                    travinh: e,
                                    tuyenquang: e,
                                    vinhlong: e,
                                    vinhphuc: e,
                                    yenbai: e,
                                },
                            ],
                            vu: F,
                            wf: [1, { biz: t, sch: t }],
                            ws: [1, { com: e, edu: e, gov: e, net: e, org: e, advisor: r, cloud66: t, dyndns: t, mypets: t }],
                            yt: [1, { org: t }],
                            'xn--mgbaam7a8h': e,
                            امارات: e,
                            'xn--y9a3aq': e,
                            հայ: e,
                            'xn--54b7fta0cc': e,
                            বাংলা: e,
                            'xn--90ae': e,
                            бг: e,
                            'xn--mgbcpq6gpa1a': e,
                            البحرين: e,
                            'xn--90ais': e,
                            бел: e,
                            'xn--fiqs8s': e,
                            中国: e,
                            'xn--fiqz9s': e,
                            中國: e,
                            'xn--lgbbat1ad8j': e,
                            الجزائر: e,
                            'xn--wgbh1c': e,
                            مصر: e,
                            'xn--e1a4c': e,
                            ею: e,
                            'xn--qxa6a': e,
                            ευ: e,
                            'xn--mgbah1a3hjkrd': e,
                            موريتانيا: e,
                            'xn--node': e,
                            გე: e,
                            'xn--qxam': e,
                            ελ: e,
                            'xn--j6w193g': [1, { 'xn--gmqw5a': e, 'xn--55qx5d': e, 'xn--mxtq1m': e, 'xn--wcvs22d': e, 'xn--uc0atv': e, 'xn--od0alg': e }],
                            香港: [1, { 個人: e, 公司: e, 政府: e, 教育: e, 組織: e, 網絡: e }],
                            'xn--2scrj9c': e,
                            ಭಾರತ: e,
                            'xn--3hcrj9c': e,
                            ଭାରତ: e,
                            'xn--45br5cyl': e,
                            ভাৰত: e,
                            'xn--h2breg3eve': e,
                            भारतम्: e,
                            'xn--h2brj9c8c': e,
                            भारोत: e,
                            'xn--mgbgu82a': e,
                            ڀارت: e,
                            'xn--rvc1e0am3e': e,
                            ഭാരതം: e,
                            'xn--h2brj9c': e,
                            भारत: e,
                            'xn--mgbbh1a': e,
                            بارت: e,
                            'xn--mgbbh1a71e': e,
                            بھارت: e,
                            'xn--fpcrj9c3d': e,
                            భారత్: e,
                            'xn--gecrj9c': e,
                            ભારત: e,
                            'xn--s9brj9c': e,
                            ਭਾਰਤ: e,
                            'xn--45brj9c': e,
                            ভারত: e,
                            'xn--xkc2dl3a5ee0h': e,
                            இந்தியா: e,
                            'xn--mgba3a4f16a': e,
                            ایران: e,
                            'xn--mgba3a4fra': e,
                            ايران: e,
                            'xn--mgbtx2b': e,
                            عراق: e,
                            'xn--mgbayh7gpa': e,
                            الاردن: e,
                            'xn--3e0b707e': e,
                            한국: e,
                            'xn--80ao21a': e,
                            қаз: e,
                            'xn--q7ce6a': e,
                            ລາວ: e,
                            'xn--fzc2c9e2c': e,
                            ලංකා: e,
                            'xn--xkc2al3hye2a': e,
                            இலங்கை: e,
                            'xn--mgbc0a9azcg': e,
                            المغرب: e,
                            'xn--d1alf': e,
                            мкд: e,
                            'xn--l1acc': e,
                            мон: e,
                            'xn--mix891f': e,
                            澳門: e,
                            'xn--mix082f': e,
                            澳门: e,
                            'xn--mgbx4cd0ab': e,
                            مليسيا: e,
                            'xn--mgb9awbf': e,
                            عمان: e,
                            'xn--mgbai9azgqp6j': e,
                            پاکستان: e,
                            'xn--mgbai9a5eva00b': e,
                            پاكستان: e,
                            'xn--ygbi2ammx': e,
                            فلسطين: e,
                            'xn--90a3ac': [1, { 'xn--80au': e, 'xn--90azh': e, 'xn--d1at': e, 'xn--c1avg': e, 'xn--o1ac': e, 'xn--o1ach': e }],
                            срб: [1, { ак: e, обр: e, од: e, орг: e, пр: e, упр: e }],
                            'xn--p1ai': e,
                            рф: e,
                            'xn--wgbl6a': e,
                            قطر: e,
                            'xn--mgberp4a5d4ar': e,
                            السعودية: e,
                            'xn--mgberp4a5d4a87g': e,
                            السعودیة: e,
                            'xn--mgbqly7c0a67fbc': e,
                            السعودیۃ: e,
                            'xn--mgbqly7cvafr': e,
                            السعوديه: e,
                            'xn--mgbpl2fh': e,
                            سودان: e,
                            'xn--yfro4i67o': e,
                            新加坡: e,
                            'xn--clchc0ea0b2g2a9gcd': e,
                            சிங்கப்பூர்: e,
                            'xn--ogbpf8fl': e,
                            سورية: e,
                            'xn--mgbtf8fl': e,
                            سوريا: e,
                            'xn--o3cw4h': [
                                1,
                                { 'xn--o3cyx2a': e, 'xn--12co0c3b4eva': e, 'xn--m3ch0j3a': e, 'xn--h3cuzk1di': e, 'xn--12c1fe0br': e, 'xn--12cfi8ixb8l': e },
                            ],
                            ไทย: [1, { ทหาร: e, ธุรกิจ: e, เน็ต: e, รัฐบาล: e, ศึกษา: e, องค์กร: e }],
                            'xn--pgbs0dh': e,
                            تونس: e,
                            'xn--kpry57d': e,
                            台灣: e,
                            'xn--kprw13d': e,
                            台湾: e,
                            'xn--nnx388a': e,
                            臺灣: e,
                            'xn--j1amh': e,
                            укр: e,
                            'xn--mgb2ddes': e,
                            اليمن: e,
                            xxx: e,
                            ye: s,
                            za: [
                                0,
                                {
                                    ac: e,
                                    agric: e,
                                    alt: e,
                                    co: e,
                                    edu: e,
                                    gov: e,
                                    grondar: e,
                                    law: e,
                                    mil: e,
                                    net: e,
                                    ngo: e,
                                    nic: e,
                                    nis: e,
                                    nom: e,
                                    org: e,
                                    school: e,
                                    tm: e,
                                    web: e,
                                },
                            ],
                            zm: [1, { ac: e, biz: e, co: e, com: e, edu: e, gov: e, info: e, mil: e, net: e, org: e, sch: e }],
                            zw: [1, { ac: e, co: e, gov: e, mil: e, org: e }],
                            aaa: e,
                            aarp: e,
                            abb: e,
                            abbott: e,
                            abbvie: e,
                            abc: e,
                            able: e,
                            abogado: e,
                            abudhabi: e,
                            academy: [1, { official: t }],
                            accenture: e,
                            accountant: e,
                            accountants: e,
                            aco: e,
                            actor: e,
                            ads: e,
                            adult: e,
                            aeg: e,
                            aetna: e,
                            afl: e,
                            africa: e,
                            agakhan: e,
                            agency: e,
                            aig: e,
                            airbus: e,
                            airforce: e,
                            airtel: e,
                            akdn: e,
                            alibaba: e,
                            alipay: e,
                            allfinanz: e,
                            allstate: e,
                            ally: e,
                            alsace: e,
                            alstom: e,
                            amazon: e,
                            americanexpress: e,
                            americanfamily: e,
                            amex: e,
                            amfam: e,
                            amica: e,
                            amsterdam: e,
                            analytics: e,
                            android: e,
                            anquan: e,
                            anz: e,
                            aol: e,
                            apartments: e,
                            app: [
                                1,
                                {
                                    adaptable: t,
                                    aiven: t,
                                    beget: r,
                                    brave: i,
                                    clerk: t,
                                    clerkstage: t,
                                    cloudflare: t,
                                    wnext: t,
                                    csb: [2, { preview: t }],
                                    convex: t,
                                    deta: t,
                                    ondigitalocean: t,
                                    easypanel: t,
                                    encr: [2, { frontend: t }],
                                    evervault: o,
                                    expo: [2, { staging: t }],
                                    edgecompute: t,
                                    'on-fleek': t,
                                    flutterflow: t,
                                    e2b: t,
                                    framer: t,
                                    github: t,
                                    hosted: r,
                                    run: [0, { '*': t, mtls: r }],
                                    web: t,
                                    hackclub: t,
                                    hasura: t,
                                    botdash: t,
                                    leapcell: t,
                                    loginline: t,
                                    lovable: t,
                                    luyani: t,
                                    medusajs: t,
                                    messerli: t,
                                    mocha: t,
                                    netlify: t,
                                    ngrok: t,
                                    'ngrok-free': t,
                                    developer: r,
                                    noop: t,
                                    northflank: r,
                                    upsun: r,
                                    railway: [0, { up: t }],
                                    replit: n,
                                    nyat: t,
                                    snowflake: [0, { '*': t, privatelink: r }],
                                    streamlit: t,
                                    storipress: t,
                                    telebit: t,
                                    typedream: t,
                                    vercel: t,
                                    wal: t,
                                    wasmer: t,
                                    bookonline: t,
                                    windsurf: t,
                                    zeabur: t,
                                    zerops: r,
                                },
                            ],
                            apple: e,
                            aquarelle: e,
                            arab: e,
                            aramco: e,
                            archi: e,
                            army: e,
                            art: e,
                            arte: e,
                            asda: e,
                            associates: e,
                            athleta: e,
                            attorney: e,
                            auction: e,
                            audi: e,
                            audible: e,
                            audio: e,
                            auspost: e,
                            author: e,
                            auto: e,
                            autos: e,
                            aws: [
                                1,
                                {
                                    on: [
                                        0,
                                        {
                                            'af-south-1': u,
                                            'ap-east-1': u,
                                            'ap-northeast-1': u,
                                            'ap-northeast-2': u,
                                            'ap-northeast-3': u,
                                            'ap-south-1': u,
                                            'ap-south-2': c,
                                            'ap-southeast-1': u,
                                            'ap-southeast-2': u,
                                            'ap-southeast-3': u,
                                            'ap-southeast-4': c,
                                            'ap-southeast-5': c,
                                            'ca-central-1': u,
                                            'ca-west-1': c,
                                            'eu-central-1': u,
                                            'eu-central-2': c,
                                            'eu-north-1': u,
                                            'eu-south-1': u,
                                            'eu-south-2': c,
                                            'eu-west-1': u,
                                            'eu-west-2': u,
                                            'eu-west-3': u,
                                            'il-central-1': c,
                                            'me-central-1': c,
                                            'me-south-1': u,
                                            'sa-east-1': u,
                                            'us-east-1': u,
                                            'us-east-2': u,
                                            'us-west-1': u,
                                            'us-west-2': u,
                                            'us-gov-east-1': h,
                                            'us-gov-west-1': h,
                                        },
                                    ],
                                    sagemaker: [
                                        0,
                                        {
                                            'ap-northeast-1': m,
                                            'ap-northeast-2': m,
                                            'ap-south-1': m,
                                            'ap-southeast-1': m,
                                            'ap-southeast-2': m,
                                            'ca-central-1': g,
                                            'eu-central-1': m,
                                            'eu-west-1': m,
                                            'eu-west-2': m,
                                            'us-east-1': g,
                                            'us-east-2': g,
                                            'us-west-2': g,
                                            'af-south-1': d,
                                            'ap-east-1': d,
                                            'ap-northeast-3': d,
                                            'ap-south-2': p,
                                            'ap-southeast-3': d,
                                            'ap-southeast-4': p,
                                            'ca-west-1': [0, { notebook: t, 'notebook-fips': t }],
                                            'eu-central-2': d,
                                            'eu-north-1': d,
                                            'eu-south-1': d,
                                            'eu-south-2': d,
                                            'eu-west-3': d,
                                            'il-central-1': d,
                                            'me-central-1': d,
                                            'me-south-1': d,
                                            'sa-east-1': d,
                                            'us-gov-east-1': f,
                                            'us-gov-west-1': f,
                                            'us-west-1': [0, { notebook: t, 'notebook-fips': t, studio: t }],
                                            experiments: r,
                                        },
                                    ],
                                    repost: [0, { private: r }],
                                },
                            ],
                            axa: e,
                            azure: e,
                            baby: e,
                            baidu: e,
                            banamex: e,
                            band: e,
                            bank: e,
                            bar: e,
                            barcelona: e,
                            barclaycard: e,
                            barclays: e,
                            barefoot: e,
                            bargains: e,
                            baseball: e,
                            basketball: [1, { aus: t, nz: t }],
                            bauhaus: e,
                            bayern: e,
                            bbc: e,
                            bbt: e,
                            bbva: e,
                            bcg: e,
                            bcn: e,
                            beats: e,
                            beauty: e,
                            beer: e,
                            berlin: e,
                            best: e,
                            bestbuy: e,
                            bet: e,
                            bharti: e,
                            bible: e,
                            bid: e,
                            bike: e,
                            bing: e,
                            bingo: e,
                            bio: e,
                            black: e,
                            blackfriday: e,
                            blockbuster: e,
                            blog: e,
                            bloomberg: e,
                            blue: e,
                            bms: e,
                            bmw: e,
                            bnpparibas: e,
                            boats: e,
                            boehringer: e,
                            bofa: e,
                            bom: e,
                            bond: e,
                            boo: e,
                            book: e,
                            booking: e,
                            bosch: e,
                            bostik: e,
                            boston: e,
                            bot: e,
                            boutique: e,
                            box: e,
                            bradesco: e,
                            bridgestone: e,
                            broadway: e,
                            broker: e,
                            brother: e,
                            brussels: e,
                            build: [1, { v0: t, windsurf: t }],
                            builders: [1, { cloudsite: t }],
                            business: y,
                            buy: e,
                            buzz: e,
                            bzh: e,
                            cab: e,
                            cafe: e,
                            cal: e,
                            call: e,
                            calvinklein: e,
                            cam: e,
                            camera: e,
                            camp: [1, { emf: [0, { at: t }] }],
                            canon: e,
                            capetown: e,
                            capital: e,
                            capitalone: e,
                            car: e,
                            caravan: e,
                            cards: e,
                            care: e,
                            career: e,
                            careers: e,
                            cars: e,
                            casa: [1, { nabu: [0, { ui: t }] }],
                            case: e,
                            cash: e,
                            casino: e,
                            catering: e,
                            catholic: e,
                            cba: e,
                            cbn: e,
                            cbre: e,
                            center: e,
                            ceo: e,
                            cern: e,
                            cfa: e,
                            cfd: e,
                            chanel: e,
                            channel: e,
                            charity: e,
                            chase: e,
                            chat: e,
                            cheap: e,
                            chintai: e,
                            christmas: e,
                            chrome: e,
                            church: e,
                            cipriani: e,
                            circle: e,
                            cisco: e,
                            citadel: e,
                            citi: e,
                            citic: e,
                            city: e,
                            claims: e,
                            cleaning: e,
                            click: e,
                            clinic: e,
                            clinique: e,
                            clothing: e,
                            cloud: [
                                1,
                                {
                                    convex: t,
                                    elementor: t,
                                    emergent: t,
                                    encoway: [0, { eu: t }],
                                    statics: r,
                                    ravendb: t,
                                    axarnet: [0, { 'es-1': t }],
                                    diadem: t,
                                    jelastic: [0, { vip: t }],
                                    jele: t,
                                    'jenv-aruba': [0, { aruba: [0, { eur: [0, { it1: t }] }], it1: t }],
                                    keliweb: [2, { cs: t }],
                                    oxa: [2, { tn: t, uk: t }],
                                    primetel: [2, { uk: t }],
                                    reclaim: [0, { ca: t, uk: t, us: t }],
                                    trendhosting: [0, { ch: t, de: t }],
                                    jote: t,
                                    jotelulu: t,
                                    kuleuven: t,
                                    laravel: t,
                                    linkyard: t,
                                    magentosite: r,
                                    matlab: t,
                                    observablehq: t,
                                    perspecta: t,
                                    vapor: t,
                                    'on-rancher': r,
                                    scw: [
                                        0,
                                        {
                                            baremetal: [0, { 'fr-par-1': t, 'fr-par-2': t, 'nl-ams-1': t }],
                                            'fr-par': [
                                                0,
                                                {
                                                    cockpit: t,
                                                    ddl: t,
                                                    dtwh: t,
                                                    fnc: [2, { functions: t }],
                                                    ifr: t,
                                                    k8s: w,
                                                    kafk: t,
                                                    mgdb: t,
                                                    rdb: t,
                                                    s3: t,
                                                    's3-website': t,
                                                    scbl: t,
                                                    whm: t,
                                                },
                                            ],
                                            instances: [0, { priv: t, pub: t }],
                                            k8s: t,
                                            'nl-ams': [
                                                0,
                                                { cockpit: t, ddl: t, dtwh: t, ifr: t, k8s: w, kafk: t, mgdb: t, rdb: t, s3: t, 's3-website': t, scbl: t, whm: t },
                                            ],
                                            'pl-waw': [0, { cockpit: t, ddl: t, dtwh: t, ifr: t, k8s: w, kafk: t, mgdb: t, rdb: t, s3: t, 's3-website': t, scbl: t }],
                                            scalebook: t,
                                            smartlabeling: t,
                                        },
                                    ],
                                    servebolt: t,
                                    onstackit: [0, { runs: t }],
                                    trafficplex: t,
                                    'unison-services': t,
                                    urown: t,
                                    voorloper: t,
                                    zap: t,
                                },
                            ],
                            club: [1, { cloudns: t, jele: t, barsy: t }],
                            clubmed: e,
                            coach: e,
                            codes: [1, { owo: r }],
                            coffee: e,
                            college: e,
                            cologne: e,
                            commbank: e,
                            community: [1, { nog: t, ravendb: t, myforum: t }],
                            company: e,
                            compare: e,
                            computer: e,
                            comsec: e,
                            condos: e,
                            construction: e,
                            consulting: e,
                            contact: e,
                            contractors: e,
                            cooking: e,
                            cool: [1, { elementor: t, de: t }],
                            corsica: e,
                            country: e,
                            coupon: e,
                            coupons: e,
                            courses: e,
                            cpa: e,
                            credit: e,
                            creditcard: e,
                            creditunion: e,
                            cricket: e,
                            crown: e,
                            crs: e,
                            cruise: e,
                            cruises: e,
                            cuisinella: e,
                            cymru: e,
                            cyou: e,
                            dad: e,
                            dance: e,
                            data: e,
                            date: e,
                            dating: e,
                            datsun: e,
                            day: e,
                            dclk: e,
                            dds: e,
                            deal: e,
                            dealer: e,
                            deals: e,
                            degree: e,
                            delivery: e,
                            dell: e,
                            deloitte: e,
                            delta: e,
                            democrat: e,
                            dental: e,
                            dentist: e,
                            desi: e,
                            design: [1, { graphic: t, bss: t }],
                            dev: [
                                1,
                                {
                                    '12chars': t,
                                    myaddr: t,
                                    panel: t,
                                    bearblog: t,
                                    lcl: r,
                                    lclstage: r,
                                    stg: r,
                                    stgstage: r,
                                    pages: t,
                                    r2: t,
                                    workers: t,
                                    deno: t,
                                    'deno-staging': t,
                                    deta: t,
                                    lp: [2, { api: t, objects: t }],
                                    evervault: o,
                                    fly: t,
                                    githubpreview: t,
                                    gateway: r,
                                    botdash: t,
                                    inbrowser: r,
                                    'is-a-good': t,
                                    iserv: t,
                                    leapcell: t,
                                    runcontainers: t,
                                    localcert: [0, { user: r }],
                                    loginline: t,
                                    barsy: t,
                                    mediatech: t,
                                    'mocha-sandbox': t,
                                    modx: t,
                                    ngrok: t,
                                    'ngrok-free': t,
                                    'is-a-fullstack': t,
                                    'is-cool': t,
                                    'is-not-a': t,
                                    localplayer: t,
                                    xmit: t,
                                    'platter-app': t,
                                    replit: [
                                        2,
                                        {
                                            archer: t,
                                            bones: t,
                                            canary: t,
                                            global: t,
                                            hacker: t,
                                            id: t,
                                            janeway: t,
                                            kim: t,
                                            kira: t,
                                            kirk: t,
                                            odo: t,
                                            paris: t,
                                            picard: t,
                                            pike: t,
                                            prerelease: t,
                                            reed: t,
                                            riker: t,
                                            sisko: t,
                                            spock: t,
                                            staging: t,
                                            sulu: t,
                                            tarpit: t,
                                            teams: t,
                                            tucker: t,
                                            wesley: t,
                                            worf: t,
                                        },
                                    ],
                                    crm: [0, { d: r, w: r, wa: r, wb: r, wc: r, wd: r, we: r, wf: r }],
                                    erp: J,
                                    vercel: t,
                                    webhare: r,
                                    hrsn: t,
                                    'is-a': t,
                                },
                            ],
                            dhl: e,
                            diamonds: e,
                            diet: e,
                            digital: [1, { cloudapps: [2, { london: t }] }],
                            direct: [1, { libp2p: t }],
                            directory: e,
                            discount: e,
                            discover: e,
                            dish: e,
                            diy: e,
                            dnp: e,
                            docs: e,
                            doctor: e,
                            dog: e,
                            domains: e,
                            dot: e,
                            download: e,
                            drive: e,
                            dtv: e,
                            dubai: e,
                            dupont: e,
                            durban: e,
                            dvag: e,
                            dvr: e,
                            earth: e,
                            eat: e,
                            eco: e,
                            edeka: e,
                            education: y,
                            email: [1, { crisp: [0, { on: t }], tawk: Y, tawkto: Y }],
                            emerck: e,
                            energy: e,
                            engineer: e,
                            engineering: e,
                            enterprises: e,
                            epson: e,
                            equipment: e,
                            ericsson: e,
                            erni: e,
                            esq: e,
                            estate: [1, { compute: r }],
                            eurovision: e,
                            eus: [1, { party: X }],
                            events: [1, { koobin: t, co: t }],
                            exchange: e,
                            expert: e,
                            exposed: e,
                            express: e,
                            extraspace: e,
                            fage: e,
                            fail: e,
                            fairwinds: e,
                            faith: e,
                            family: e,
                            fan: e,
                            fans: e,
                            farm: [1, { storj: t }],
                            farmers: e,
                            fashion: e,
                            fast: e,
                            fedex: e,
                            feedback: e,
                            ferrari: e,
                            ferrero: e,
                            fidelity: e,
                            fido: e,
                            film: e,
                            final: e,
                            finance: e,
                            financial: y,
                            fire: e,
                            firestone: e,
                            firmdale: e,
                            fish: e,
                            fishing: e,
                            fit: e,
                            fitness: e,
                            flickr: e,
                            flights: e,
                            flir: e,
                            florist: e,
                            flowers: e,
                            fly: e,
                            foo: e,
                            food: e,
                            football: e,
                            ford: e,
                            forex: e,
                            forsale: e,
                            forum: e,
                            foundation: e,
                            fox: e,
                            free: e,
                            fresenius: e,
                            frl: e,
                            frogans: e,
                            frontier: e,
                            ftr: e,
                            fujitsu: e,
                            fun: e,
                            fund: e,
                            furniture: e,
                            futbol: e,
                            fyi: e,
                            gal: e,
                            gallery: e,
                            gallo: e,
                            gallup: e,
                            game: e,
                            games: [1, { pley: t, sheezy: t }],
                            gap: e,
                            garden: e,
                            gay: [1, { pages: t }],
                            gbiz: e,
                            gdn: [1, { cnpy: t }],
                            gea: e,
                            gent: e,
                            genting: e,
                            george: e,
                            ggee: e,
                            gift: e,
                            gifts: e,
                            gives: e,
                            giving: e,
                            glass: e,
                            gle: e,
                            global: [1, { appwrite: t }],
                            globo: e,
                            gmail: e,
                            gmbh: e,
                            gmo: e,
                            gmx: e,
                            godaddy: e,
                            gold: e,
                            goldpoint: e,
                            golf: e,
                            goo: e,
                            goodyear: e,
                            goog: [1, { cloud: t, translate: t, usercontent: r }],
                            google: e,
                            gop: e,
                            got: e,
                            grainger: e,
                            graphics: e,
                            gratis: e,
                            green: e,
                            gripe: e,
                            grocery: e,
                            group: [1, { discourse: t }],
                            gucci: e,
                            guge: e,
                            guide: e,
                            guitars: e,
                            guru: e,
                            hair: e,
                            hamburg: e,
                            hangout: e,
                            haus: e,
                            hbo: e,
                            hdfc: e,
                            hdfcbank: e,
                            health: [1, { hra: t }],
                            healthcare: e,
                            help: e,
                            helsinki: e,
                            here: e,
                            hermes: e,
                            hiphop: e,
                            hisamitsu: e,
                            hitachi: e,
                            hiv: e,
                            hkt: e,
                            hockey: e,
                            holdings: e,
                            holiday: e,
                            homedepot: e,
                            homegoods: e,
                            homes: e,
                            homesense: e,
                            honda: e,
                            horse: e,
                            hospital: e,
                            host: [
                                1,
                                {
                                    cloudaccess: t,
                                    freesite: t,
                                    easypanel: t,
                                    emergent: t,
                                    fastvps: t,
                                    myfast: t,
                                    tempurl: t,
                                    wpmudev: t,
                                    iserv: t,
                                    jele: t,
                                    mircloud: t,
                                    bolt: t,
                                    wp2: t,
                                    half: t,
                                },
                            ],
                            hosting: [1, { opencraft: t }],
                            hot: e,
                            hotel: e,
                            hotels: e,
                            hotmail: e,
                            house: e,
                            how: e,
                            hsbc: e,
                            hughes: e,
                            hyatt: e,
                            hyundai: e,
                            ibm: e,
                            icbc: e,
                            ice: e,
                            icu: e,
                            ieee: e,
                            ifm: e,
                            ikano: e,
                            imamat: e,
                            imdb: e,
                            immo: e,
                            immobilien: e,
                            inc: e,
                            industries: e,
                            infiniti: e,
                            ing: e,
                            ink: e,
                            institute: e,
                            insurance: e,
                            insure: e,
                            international: e,
                            intuit: e,
                            investments: e,
                            ipiranga: e,
                            irish: e,
                            ismaili: e,
                            ist: e,
                            istanbul: e,
                            itau: e,
                            itv: e,
                            jaguar: e,
                            java: e,
                            jcb: e,
                            jeep: e,
                            jetzt: e,
                            jewelry: e,
                            jio: e,
                            jll: e,
                            jmp: e,
                            jnj: e,
                            joburg: e,
                            jot: e,
                            joy: e,
                            jpmorgan: e,
                            jprs: e,
                            juegos: e,
                            juniper: e,
                            kaufen: e,
                            kddi: e,
                            kerryhotels: e,
                            kerryproperties: e,
                            kfh: e,
                            kia: e,
                            kids: e,
                            kim: e,
                            kindle: e,
                            kitchen: e,
                            kiwi: e,
                            koeln: e,
                            komatsu: e,
                            kosher: e,
                            kpmg: e,
                            kpn: e,
                            krd: [1, { co: t, edu: t }],
                            kred: e,
                            kuokgroup: e,
                            kyoto: e,
                            lacaixa: e,
                            lamborghini: e,
                            lamer: e,
                            land: e,
                            landrover: e,
                            lanxess: e,
                            lasalle: e,
                            lat: e,
                            latino: e,
                            latrobe: e,
                            law: e,
                            lawyer: e,
                            lds: e,
                            lease: e,
                            leclerc: e,
                            lefrak: e,
                            legal: e,
                            lego: e,
                            lexus: e,
                            lgbt: e,
                            lidl: e,
                            life: e,
                            lifeinsurance: e,
                            lifestyle: e,
                            lighting: e,
                            like: e,
                            lilly: e,
                            limited: e,
                            limo: e,
                            lincoln: e,
                            link: [1, { myfritz: t, cyon: t, joinmc: t, dweb: r, inbrowser: r, nftstorage: es, mypep: t, storacha: es, w3s: es }],
                            live: [1, { aem: t, hlx: t, ewp: r }],
                            living: e,
                            llc: e,
                            llp: e,
                            loan: e,
                            loans: e,
                            locker: e,
                            locus: e,
                            lol: [1, { omg: t }],
                            london: e,
                            lotte: e,
                            lotto: e,
                            love: e,
                            lpl: e,
                            lplfinancial: e,
                            ltd: e,
                            ltda: e,
                            lundbeck: e,
                            luxe: e,
                            luxury: e,
                            madrid: e,
                            maif: e,
                            maison: e,
                            makeup: e,
                            man: e,
                            management: e,
                            mango: e,
                            map: e,
                            market: e,
                            marketing: e,
                            markets: e,
                            marriott: e,
                            marshalls: e,
                            mattel: e,
                            mba: e,
                            mckinsey: e,
                            med: e,
                            media: er,
                            meet: e,
                            melbourne: e,
                            meme: e,
                            memorial: e,
                            men: e,
                            menu: [1, { barsy: t, barsyonline: t }],
                            merck: e,
                            merckmsd: e,
                            miami: e,
                            microsoft: e,
                            mini: e,
                            mint: e,
                            mit: e,
                            mitsubishi: e,
                            mlb: e,
                            mls: e,
                            mma: e,
                            mobile: e,
                            moda: e,
                            moe: e,
                            moi: e,
                            mom: e,
                            monash: e,
                            money: e,
                            monster: e,
                            mormon: e,
                            mortgage: e,
                            moscow: e,
                            moto: e,
                            motorcycles: e,
                            mov: e,
                            movie: e,
                            msd: e,
                            mtn: e,
                            mtr: e,
                            music: e,
                            nab: e,
                            nagoya: e,
                            navy: e,
                            nba: e,
                            nec: e,
                            netbank: e,
                            netflix: e,
                            network: [1, { aem: t, alces: r, co: t, arvo: t, azimuth: t, tlon: t }],
                            neustar: e,
                            new: e,
                            news: [1, { noticeable: t }],
                            next: e,
                            nextdirect: e,
                            nexus: e,
                            nfl: e,
                            ngo: e,
                            nhk: e,
                            nico: e,
                            nike: e,
                            nikon: e,
                            ninja: e,
                            nissan: e,
                            nissay: e,
                            nokia: e,
                            norton: e,
                            now: e,
                            nowruz: e,
                            nowtv: e,
                            nra: e,
                            nrw: e,
                            ntt: e,
                            nyc: e,
                            obi: e,
                            observer: e,
                            office: e,
                            okinawa: e,
                            olayan: e,
                            olayangroup: e,
                            ollo: e,
                            omega: e,
                            one: [1, { kin: r, service: t, website: t }],
                            ong: [1, { obl: t }],
                            onl: e,
                            online: [1, { eero: t, 'eero-stage': t, websitebuilder: t, leapcell: t, barsy: t }],
                            ooo: e,
                            open: e,
                            oracle: e,
                            orange: [1, { tech: t }],
                            organic: e,
                            origins: e,
                            osaka: e,
                            otsuka: e,
                            ott: e,
                            ovh: [1, { nerdpol: t }],
                            page: [1, { aem: t, hlx: t, translated: t, codeberg: t, heyflow: t, prvcy: t, rocky: t, statichost: t, pdns: t, plesk: t }],
                            panasonic: e,
                            paris: e,
                            pars: e,
                            partners: e,
                            parts: e,
                            party: e,
                            pay: e,
                            pccw: e,
                            pet: e,
                            pfizer: e,
                            pharmacy: e,
                            phd: e,
                            philips: e,
                            phone: e,
                            photo: e,
                            photography: e,
                            photos: er,
                            physio: e,
                            pics: e,
                            pictet: e,
                            pictures: [1, { 1337: t }],
                            pid: e,
                            pin: e,
                            ping: e,
                            pink: e,
                            pioneer: e,
                            pizza: [1, { ngrok: t }],
                            place: y,
                            play: e,
                            playstation: e,
                            plumbing: e,
                            plus: [1, { playit: [2, { at: r, with: t }] }],
                            pnc: e,
                            pohl: e,
                            poker: e,
                            politie: e,
                            porn: e,
                            praxi: e,
                            press: e,
                            prime: e,
                            prod: e,
                            productions: e,
                            prof: e,
                            progressive: e,
                            promo: e,
                            properties: e,
                            property: e,
                            protection: e,
                            pru: e,
                            prudential: e,
                            pub: [1, { id: r, kin: r, barsy: t }],
                            pwc: e,
                            qpon: e,
                            quebec: e,
                            quest: e,
                            racing: e,
                            radio: e,
                            read: e,
                            realestate: e,
                            realtor: e,
                            realty: e,
                            recipes: e,
                            red: e,
                            redumbrella: e,
                            rehab: e,
                            reise: e,
                            reisen: e,
                            reit: e,
                            reliance: e,
                            ren: e,
                            rent: e,
                            rentals: e,
                            repair: e,
                            report: e,
                            republican: e,
                            rest: e,
                            restaurant: e,
                            review: e,
                            reviews: [1, { aem: t }],
                            rexroth: e,
                            rich: e,
                            richardli: e,
                            ricoh: e,
                            ril: e,
                            rio: e,
                            rip: [1, { clan: t }],
                            rocks: [1, { myddns: t, stackit: t, 'lima-city': t, webspace: t }],
                            rodeo: e,
                            rogers: e,
                            room: e,
                            rsvp: e,
                            rugby: e,
                            ruhr: e,
                            run: [
                                1,
                                {
                                    appwrite: r,
                                    canva: t,
                                    development: t,
                                    ravendb: t,
                                    liara: [2, { iran: t }],
                                    lovable: t,
                                    needle: t,
                                    build: r,
                                    code: r,
                                    database: r,
                                    migration: r,
                                    onporter: t,
                                    repl: t,
                                    stackit: t,
                                    val: J,
                                    vercel: t,
                                    wix: t,
                                },
                            ],
                            rwe: e,
                            ryukyu: e,
                            saarland: e,
                            safe: e,
                            safety: e,
                            sakura: e,
                            sale: e,
                            salon: e,
                            samsclub: e,
                            samsung: e,
                            sandvik: e,
                            sandvikcoromant: e,
                            sanofi: e,
                            sap: e,
                            sarl: e,
                            sas: e,
                            save: e,
                            saxo: e,
                            sbi: e,
                            sbs: e,
                            scb: e,
                            schaeffler: e,
                            schmidt: e,
                            scholarships: e,
                            school: e,
                            schule: e,
                            schwarz: e,
                            science: e,
                            scot: [1, { gov: [2, { service: t }] }],
                            search: e,
                            seat: e,
                            secure: e,
                            security: e,
                            seek: e,
                            select: e,
                            sener: e,
                            services: [1, { loginline: t }],
                            seven: e,
                            sew: e,
                            sex: e,
                            sexy: e,
                            sfr: e,
                            shangrila: e,
                            sharp: e,
                            shell: e,
                            shia: e,
                            shiksha: e,
                            shoes: e,
                            shop: [1, { base: t, hoplix: t, barsy: t, barsyonline: t, shopware: t }],
                            shopping: e,
                            shouji: e,
                            show: e,
                            silk: e,
                            sina: e,
                            singles: e,
                            site: [
                                1,
                                {
                                    square: t,
                                    canva: x,
                                    cloudera: r,
                                    convex: t,
                                    cyon: t,
                                    caffeine: t,
                                    fastvps: t,
                                    figma: t,
                                    'figma-gov': t,
                                    preview: t,
                                    heyflow: t,
                                    jele: t,
                                    jouwweb: t,
                                    loginline: t,
                                    barsy: t,
                                    co: t,
                                    notion: t,
                                    omniwe: t,
                                    opensocial: t,
                                    madethis: t,
                                    support: t,
                                    platformsh: r,
                                    tst: r,
                                    byen: t,
                                    srht: t,
                                    novecore: t,
                                    cpanel: t,
                                    wpsquared: t,
                                    sourcecraft: t,
                                },
                            ],
                            ski: e,
                            skin: e,
                            sky: e,
                            skype: e,
                            sling: e,
                            smart: e,
                            smile: e,
                            sncf: e,
                            soccer: e,
                            social: e,
                            softbank: e,
                            software: e,
                            sohu: e,
                            solar: e,
                            solutions: e,
                            song: e,
                            sony: e,
                            soy: e,
                            spa: e,
                            space: [1, { myfast: t, heiyu: t, hf: [2, { static: t }], 'app-ionos': t, project: t, uber: t, xs4all: t }],
                            sport: e,
                            spot: e,
                            srl: e,
                            stada: e,
                            staples: e,
                            star: e,
                            statebank: e,
                            statefarm: e,
                            stc: e,
                            stcgroup: e,
                            stockholm: e,
                            storage: e,
                            store: [1, { barsy: t, sellfy: t, shopware: t, storebase: t }],
                            stream: e,
                            studio: e,
                            study: e,
                            style: e,
                            sucks: e,
                            supplies: e,
                            supply: e,
                            support: [1, { barsy: t }],
                            surf: e,
                            surgery: e,
                            suzuki: e,
                            swatch: e,
                            swiss: e,
                            sydney: e,
                            systems: [1, { knightpoint: t }],
                            tab: e,
                            taipei: e,
                            talk: e,
                            taobao: e,
                            target: e,
                            tatamotors: e,
                            tatar: e,
                            tattoo: e,
                            tax: e,
                            taxi: e,
                            tci: e,
                            tdk: e,
                            team: [1, { discourse: t, jelastic: t }],
                            tech: [1, { cleverapps: t }],
                            technology: y,
                            temasek: e,
                            tennis: e,
                            teva: e,
                            thd: e,
                            theater: e,
                            theatre: e,
                            tiaa: e,
                            tickets: e,
                            tienda: e,
                            tips: e,
                            tires: e,
                            tirol: e,
                            tjmaxx: e,
                            tjx: e,
                            tkmaxx: e,
                            tmall: e,
                            today: [1, { prequalifyme: t }],
                            tokyo: e,
                            tools: [1, { addr: B, myaddr: t }],
                            top: [1, { ntdll: t, wadl: r }],
                            toray: e,
                            toshiba: e,
                            total: e,
                            tours: e,
                            town: e,
                            toyota: e,
                            toys: e,
                            trade: e,
                            trading: e,
                            training: e,
                            travel: e,
                            travelers: e,
                            travelersinsurance: e,
                            trust: e,
                            trv: e,
                            tube: e,
                            tui: e,
                            tunes: e,
                            tushu: e,
                            tvs: e,
                            ubank: e,
                            ubs: e,
                            unicom: e,
                            university: e,
                            uno: e,
                            uol: e,
                            ups: e,
                            vacations: e,
                            vana: e,
                            vanguard: e,
                            vegas: e,
                            ventures: e,
                            verisign: e,
                            versicherung: e,
                            vet: e,
                            viajes: e,
                            video: e,
                            vig: e,
                            viking: e,
                            villas: e,
                            vin: e,
                            vip: [1, { hidns: t }],
                            virgin: e,
                            visa: e,
                            vision: e,
                            viva: e,
                            vivo: e,
                            vlaanderen: e,
                            vodka: e,
                            volvo: e,
                            vote: e,
                            voting: e,
                            voto: e,
                            voyage: e,
                            wales: e,
                            walmart: e,
                            walter: e,
                            wang: e,
                            wanggou: e,
                            watch: e,
                            watches: e,
                            weather: e,
                            weatherchannel: e,
                            webcam: e,
                            weber: e,
                            website: er,
                            wed: e,
                            wedding: e,
                            weibo: e,
                            weir: e,
                            whoswho: e,
                            wien: e,
                            wiki: er,
                            williamhill: e,
                            win: e,
                            windows: e,
                            wine: e,
                            winners: e,
                            wme: e,
                            wolterskluwer: e,
                            woodside: e,
                            work: e,
                            works: e,
                            world: e,
                            wow: e,
                            wtc: e,
                            wtf: e,
                            xbox: e,
                            xerox: e,
                            xihuan: e,
                            xin: e,
                            'xn--11b4c3d': e,
                            कॉम: e,
                            'xn--1ck2e1b': e,
                            セール: e,
                            'xn--1qqw23a': e,
                            佛山: e,
                            'xn--30rr7y': e,
                            慈善: e,
                            'xn--3bst00m': e,
                            集团: e,
                            'xn--3ds443g': e,
                            在线: e,
                            'xn--3pxu8k': e,
                            点看: e,
                            'xn--42c2d9a': e,
                            คอม: e,
                            'xn--45q11c': e,
                            八卦: e,
                            'xn--4gbrim': e,
                            موقع: e,
                            'xn--55qw42g': e,
                            公益: e,
                            'xn--55qx5d': e,
                            公司: e,
                            'xn--5su34j936bgsg': e,
                            香格里拉: e,
                            'xn--5tzm5g': e,
                            网站: e,
                            'xn--6frz82g': e,
                            移动: e,
                            'xn--6qq986b3xl': e,
                            我爱你: e,
                            'xn--80adxhks': e,
                            москва: e,
                            'xn--80aqecdr1a': e,
                            католик: e,
                            'xn--80asehdb': e,
                            онлайн: e,
                            'xn--80aswg': e,
                            сайт: e,
                            'xn--8y0a063a': e,
                            联通: e,
                            'xn--9dbq2a': e,
                            קום: e,
                            'xn--9et52u': e,
                            时尚: e,
                            'xn--9krt00a': e,
                            微博: e,
                            'xn--b4w605ferd': e,
                            淡马锡: e,
                            'xn--bck1b9a5dre4c': e,
                            ファッション: e,
                            'xn--c1avg': e,
                            орг: e,
                            'xn--c2br7g': e,
                            नेट: e,
                            'xn--cck2b3b': e,
                            ストア: e,
                            'xn--cckwcxetd': e,
                            アマゾン: e,
                            'xn--cg4bki': e,
                            삼성: e,
                            'xn--czr694b': e,
                            商标: e,
                            'xn--czrs0t': e,
                            商店: e,
                            'xn--czru2d': e,
                            商城: e,
                            'xn--d1acj3b': e,
                            дети: e,
                            'xn--eckvdtc9d': e,
                            ポイント: e,
                            'xn--efvy88h': e,
                            新闻: e,
                            'xn--fct429k': e,
                            家電: e,
                            'xn--fhbei': e,
                            كوم: e,
                            'xn--fiq228c5hs': e,
                            中文网: e,
                            'xn--fiq64b': e,
                            中信: e,
                            'xn--fjq720a': e,
                            娱乐: e,
                            'xn--flw351e': e,
                            谷歌: e,
                            'xn--fzys8d69uvgm': e,
                            電訊盈科: e,
                            'xn--g2xx48c': e,
                            购物: e,
                            'xn--gckr3f0f': e,
                            クラウド: e,
                            'xn--gk3at1e': e,
                            通販: e,
                            'xn--hxt814e': e,
                            网店: e,
                            'xn--i1b6b1a6a2e': e,
                            संगठन: e,
                            'xn--imr513n': e,
                            餐厅: e,
                            'xn--io0a7i': e,
                            网络: e,
                            'xn--j1aef': e,
                            ком: e,
                            'xn--jlq480n2rg': e,
                            亚马逊: e,
                            'xn--jvr189m': e,
                            食品: e,
                            'xn--kcrx77d1x4a': e,
                            飞利浦: e,
                            'xn--kput3i': e,
                            手机: e,
                            'xn--mgba3a3ejt': e,
                            ارامكو: e,
                            'xn--mgba7c0bbn0a': e,
                            العليان: e,
                            'xn--mgbab2bd': e,
                            بازار: e,
                            'xn--mgbca7dzdo': e,
                            ابوظبي: e,
                            'xn--mgbi4ecexp': e,
                            كاثوليك: e,
                            'xn--mgbt3dhd': e,
                            همراه: e,
                            'xn--mk1bu44c': e,
                            닷컴: e,
                            'xn--mxtq1m': e,
                            政府: e,
                            'xn--ngbc5azd': e,
                            شبكة: e,
                            'xn--ngbe9e0a': e,
                            بيتك: e,
                            'xn--ngbrx': e,
                            عرب: e,
                            'xn--nqv7f': e,
                            机构: e,
                            'xn--nqv7fs00ema': e,
                            组织机构: e,
                            'xn--nyqy26a': e,
                            健康: e,
                            'xn--otu796d': e,
                            招聘: e,
                            'xn--p1acf': [
                                1,
                                {
                                    'xn--90amc': t,
                                    'xn--j1aef': t,
                                    'xn--j1ael8b': t,
                                    'xn--h1ahn': t,
                                    'xn--j1adp': t,
                                    'xn--c1avg': t,
                                    'xn--80aaa0cvac': t,
                                    'xn--h1aliz': t,
                                    'xn--90a1af': t,
                                    'xn--41a': t,
                                },
                            ],
                            рус: [1, { биз: t, ком: t, крым: t, мир: t, мск: t, орг: t, самара: t, сочи: t, спб: t, я: t }],
                            'xn--pssy2u': e,
                            大拿: e,
                            'xn--q9jyb4c': e,
                            みんな: e,
                            'xn--qcka1pmc': e,
                            グーグル: e,
                            'xn--rhqv96g': e,
                            世界: e,
                            'xn--rovu88b': e,
                            書籍: e,
                            'xn--ses554g': e,
                            网址: e,
                            'xn--t60b56a': e,
                            닷넷: e,
                            'xn--tckwe': e,
                            コム: e,
                            'xn--tiq49xqyj': e,
                            天主教: e,
                            'xn--unup4y': e,
                            游戏: e,
                            'xn--vermgensberater-ctb': e,
                            vermögensberater: e,
                            'xn--vermgensberatung-pwb': e,
                            vermögensberatung: e,
                            'xn--vhquv': e,
                            企业: e,
                            'xn--vuq861b': e,
                            信息: e,
                            'xn--w4r85el8fhu5dnra': e,
                            嘉里大酒店: e,
                            'xn--w4rs40l': e,
                            嘉里: e,
                            'xn--xhq521b': e,
                            广东: e,
                            'xn--zfr164b': e,
                            政务: e,
                            xyz: [1, { caffeine: t, botdash: t, telebit: r }],
                            yachts: e,
                            yahoo: e,
                            yamaxun: e,
                            yandex: e,
                            yodobashi: e,
                            yoga: e,
                            yokohama: e,
                            you: e,
                            youtube: e,
                            yun: e,
                            zappos: e,
                            zara: e,
                            zero: e,
                            zip: e,
                            zone: [1, { triton: r, stackit: t, lima: t }],
                            zuerich: e,
                        },
                    ];
                })();
            function d(e, t, a, s) {
                let r = null,
                    i = t;
                for (; void 0 !== i && ((i[0] & s) != 0 && (r = { index: a + 1, isIcann: 1 === i[0], isPrivate: 2 === i[0] }), -1 !== a); ) {
                    let t = i[1];
                    (i = Object.prototype.hasOwnProperty.call(t, e[a]) ? t[e[a]] : t['*']), (a -= 1);
                }
                return r;
            }
            function m(e, t, a) {
                var s;
                if (
                    (function (e, t, a) {
                        if (!t.allowPrivateDomains && e.length > 3) {
                            let t = e.length - 1,
                                s = e.charCodeAt(t),
                                r = e.charCodeAt(t - 1),
                                i = e.charCodeAt(t - 2),
                                o = e.charCodeAt(t - 3);
                            if (109 === s && 111 === r && 99 === i && 46 === o) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'com'), !0;
                            if (103 === s && 114 === r && 111 === i && 46 === o) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'org'), !0;
                            if (117 === s && 100 === r && 101 === i && 46 === o) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'edu'), !0;
                            else if (118 === s && 111 === r && 103 === i && 46 === o) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'gov'), !0;
                            else if (116 === s && 101 === r && 110 === i && 46 === o) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'net'), !0;
                            else if (101 === s && 100 === r && 46 === i) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'de'), !0;
                        }
                        return !1;
                    })(e, t, a)
                )
                    return;
                let r = e.split('.'),
                    i = (2 * !!t.allowPrivateDomains) | !!t.allowIcannDomains,
                    o = d(r, c, r.length - 1, i);
                if (null !== o) {
                    (a.isIcann = o.isIcann), (a.isPrivate = o.isPrivate), (a.publicSuffix = r.slice(o.index + 1).join('.'));
                    return;
                }
                let n = d(r, h, r.length - 1, i);
                if (null !== n) {
                    (a.isIcann = n.isIcann), (a.isPrivate = n.isPrivate), (a.publicSuffix = r.slice(n.index).join('.'));
                    return;
                }
                (a.isIcann = !1), (a.isPrivate = !1), (a.publicSuffix = null != (s = r[r.length - 1]) ? s : null);
            }
            let p = { domain: null, domainWithoutSuffix: null, hostname: null, isIcann: null, isIp: null, isPrivate: null, publicSuffix: null, subdomain: null };
            function g(e, t) {
                return !!(t === e || (0 === e.indexOf(t) && ('/' === t[t.length - 1] || (e.startsWith(t) && '/' === e[t.length])))) || !1;
            }
            var f = ['local', 'example', 'invalid', 'localhost', 'test'],
                k = ['localhost', 'invalid'],
                b = { allowSpecialUseDomain: !1, ignoreError: !1 };
            function y(e, t = {}) {
                t = { ...b, ...t };
                let a = e.split('.'),
                    s = a[a.length - 1],
                    r = !!t.allowSpecialUseDomain,
                    o = !!t.ignoreError;
                if (r && void 0 !== s && f.includes(s)) {
                    if (a.length > 1) {
                        let e = a[a.length - 2];
                        return `${e}.${s}`;
                    } else if (k.includes(s)) return s;
                }
                if (!o && void 0 !== s && f.includes(s))
                    throw Error(
                        `Cookie has domain set to the public suffix "${s}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`,
                    );
                let c = (function (e, t = {}) {
                    return (
                        (p.domain = null),
                        (p.domainWithoutSuffix = null),
                        (p.hostname = null),
                        (p.isIcann = null),
                        (p.isIp = null),
                        (p.isPrivate = null),
                        (p.publicSuffix = null),
                        (p.subdomain = null),
                        (function (e, t, a, s, r) {
                            var o, c, h, d, m;
                            let p = void 0 === s ? u : l(s);
                            if ('string' != typeof e) return r;
                            if (
                                (p.extractHostname ? (p.mixedInputs ? (r.hostname = i(e, n(e))) : (r.hostname = i(e, !1))) : (r.hostname = e),
                                p.detectIp && null !== r.hostname) &&
                                ((r.isIp =
                                    (function (e) {
                                        if (e.length < 3) return !1;
                                        let t = +!!e.startsWith('['),
                                            a = e.length;
                                        if ((']' === e[a - 1] && (a -= 1), a - t > 39)) return !1;
                                        let s = !1;
                                        for (; t < a; t += 1) {
                                            let a = e.charCodeAt(t);
                                            if (58 === a) s = !0;
                                            else if (!((a >= 48 && a <= 57) || (a >= 97 && a <= 102) || (a >= 65 && a <= 90))) return !1;
                                        }
                                        return s;
                                    })((o = r.hostname)) ||
                                    (function (e) {
                                        if (e.length < 7 || e.length > 15) return !1;
                                        let t = 0;
                                        for (let a = 0; a < e.length; a += 1) {
                                            let s = e.charCodeAt(a);
                                            if (46 === s) t += 1;
                                            else if (s < 48 || s > 57) return !1;
                                        }
                                        return 3 === t && 46 !== e.charCodeAt(0) && 46 !== e.charCodeAt(e.length - 1);
                                    })(o)),
                                r.isIp)
                            )
                                return r;
                            return p.validateHostname && p.extractHostname && null !== r.hostname && !n(r.hostname)
                                ? ((r.hostname = null), r)
                                : null === r.hostname ||
                                    (a(r.hostname, p, r), null === r.publicSuffix) ||
                                    ((r.domain = (function (e, t, a) {
                                        if (null !== a.validHosts) {
                                            for (let e of a.validHosts) if (t.endsWith(e) && (t.length === e.length || '.' === t[t.length - e.length - 1])) return e;
                                        }
                                        let s = 0;
                                        if (t.startsWith('.')) for (; s < t.length && '.' === t[s]; ) s += 1;
                                        if (e.length === t.length - s) return null;
                                        let r = t.length - e.length - 2,
                                            i = t.lastIndexOf('.', r);
                                        return -1 === i ? t : t.slice(i + 1);
                                    })(r.publicSuffix, r.hostname, p)),
                                    3 === t || null === r.domain) ||
                                    ((c = r.hostname), (r.subdomain = (h = r.domain).length === c.length ? '' : c.slice(0, -h.length - 1)), 4 === t)
                                  ? r
                                  : ((d = r.domain), (m = r.publicSuffix), (r.domainWithoutSuffix = d.slice(0, -m.length - 1)), r);
                        })(e, 3, m, t, p).domain
                    );
                })(e, { allowIcannDomains: !0, allowPrivateDomains: !0 });
                if (c) return c;
            }
            var v = class {
                    constructor() {
                        this.synchronous = !1;
                    }
                    findCookie(e, t, a, s) {
                        throw Error('findCookie is not implemented');
                    }
                    findCookies(e, t, a = !1, s) {
                        throw Error('findCookies is not implemented');
                    }
                    putCookie(e, t) {
                        throw Error('putCookie is not implemented');
                    }
                    updateCookie(e, t, a) {
                        throw Error('updateCookie is not implemented');
                    }
                    removeCookie(e, t, a, s) {
                        throw Error('removeCookie is not implemented');
                    }
                    removeCookies(e, t, a) {
                        throw Error('removeCookies is not implemented');
                    }
                    removeAllCookies(e) {
                        throw Error('removeAllCookies is not implemented');
                    }
                    getAllCookies(e) {
                        throw Error('getAllCookies is not implemented (therefore jar cannot be serialized)');
                    }
                },
                w = (e) => Object.prototype.toString.call(e),
                x = (e, t = new WeakSet()) =>
                    'object' != typeof e || null === e
                        ? String(e)
                        : 'function' == typeof e.toString
                          ? Array.isArray(e)
                              ? ((e, t) => ('function' != typeof e.join ? w(e) : (t.add(e), e.map((e) => (null == e || t.has(e) ? '' : x(e, t))).join())))(e, t)
                              : String(e)
                          : w(e),
                S = (e) => x(e);
            function j(e) {
                let t,
                    a,
                    s,
                    r = new Promise((e, t) => {
                        (a = e), (s = t);
                    });
                return {
                    promise: r,
                    callback: (t =
                        'function' == typeof e
                            ? (t, a) => {
                                  try {
                                      t ? e(t) : e(null, a);
                                  } catch (e) {
                                      s(e instanceof Error ? e : Error());
                                  }
                              }
                            : (e, t) => {
                                  try {
                                      e ? s(e) : a(t);
                                  } catch (e) {
                                      s(e instanceof Error ? e : Error());
                                  }
                              }),
                    resolve: (e) => (t(null, e), r),
                    reject: (e) => (t(e), r),
                };
            }
            var E = class extends v {
                constructor() {
                    super(), (this.synchronous = !0), (this.idx = Object.create(null));
                }
                findCookie(e, t, a, s) {
                    let r = j(s);
                    if (null == e || null == t || null == a) return r.resolve(void 0);
                    let i = this.idx[e]?.[t]?.[a];
                    return r.resolve(i);
                }
                findCookies(e, t, a = !1, s) {
                    let r;
                    'function' == typeof a && ((s = a), (a = !0));
                    let i = [],
                        o = j(s);
                    if (!e) return o.resolve([]);
                    r = t
                        ? function (e) {
                              for (let a in e)
                                  if (g(t, a)) {
                                      let t = e[a];
                                      for (let e in t) {
                                          let a = t[e];
                                          a && i.push(a);
                                      }
                                  }
                          }
                        : function (e) {
                              for (let t in e) {
                                  let a = e[t];
                                  for (let e in a) {
                                      let t = a[e];
                                      t && i.push(t);
                                  }
                              }
                          };
                    let n = (function (e, t) {
                            let a = y(e, { allowSpecialUseDomain: t });
                            if (!a) return;
                            if (a == e) return [e];
                            '.' == e.slice(-1) && (e = e.slice(0, -1));
                            let s = e
                                    .slice(0, -(a.length + 1))
                                    .split('.')
                                    .reverse(),
                                r = a,
                                i = [r];
                            for (; s.length; ) {
                                let e = s.shift();
                                (r = `${e}.${r}`), i.push(r);
                            }
                            return i;
                        })(e, a) || [e],
                        l = this.idx;
                    return (
                        n.forEach((e) => {
                            let t = l[e];
                            t && r(t);
                        }),
                        o.resolve(i)
                    );
                }
                putCookie(e, t) {
                    let a = j(t),
                        { domain: s, path: r, key: i } = e;
                    if (null == s || null == r || null == i) return a.resolve(void 0);
                    let o = this.idx[s] ?? Object.create(null);
                    this.idx[s] = o;
                    let n = o[r] ?? Object.create(null);
                    return (o[r] = n), (n[i] = e), a.resolve(void 0);
                }
                updateCookie(e, t, a) {
                    if (!a) return this.putCookie(t);
                    this.putCookie(t, a);
                }
                removeCookie(e, t, a, s) {
                    let r = j(s);
                    return delete this.idx[e]?.[t]?.[a], r.resolve(void 0);
                }
                removeCookies(e, t, a) {
                    let s = j(a),
                        r = this.idx[e];
                    return r && (t ? delete r[t] : delete this.idx[e]), s.resolve(void 0);
                }
                removeAllCookies(e) {
                    let t = j(e);
                    return (this.idx = Object.create(null)), t.resolve(void 0);
                }
                getAllCookies(e) {
                    let t = j(e),
                        a = [],
                        s = this.idx;
                    return (
                        Object.keys(s).forEach((e) => {
                            let t = s[e] ?? {};
                            Object.keys(t).forEach((e) => {
                                let s = t[e] ?? {};
                                Object.keys(s).forEach((e) => {
                                    let t = s[e];
                                    null != t && a.push(t);
                                });
                            });
                        }),
                        a.sort((e, t) => (e.creationIndex || 0) - (t.creationIndex || 0)),
                        t.resolve(a)
                    );
                }
            };
            function C(e) {
                return q(e) && '' !== e;
            }
            function L(e) {
                return '' === e || (e instanceof String && '' === e.toString());
            }
            function q(e) {
                return 'string' == typeof e || e instanceof String;
            }
            function z(e) {
                return '[object Object]' === w(e);
            }
            function A(e, t, a) {
                if (e) return;
                let s = 'function' == typeof t ? t : void 0,
                    r = 'function' == typeof t ? a : t;
                z(r) || (r = '[object Object]');
                let i = new O(S(r));
                if (s) s(i);
                else throw i;
            }
            var O = class extends Error {},
                I = { SILENT: 'silent', STRICT: 'strict', DISABLED: 'unsafe-disabled' };
            Object.freeze(I);
            var P = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`
                    .replace(/\s*\/\/.*$/gm, '')
                    .replace(/\n/g, '')
                    .trim(),
                T = RegExp(`^${P}$`),
                R = RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$');
            function D(e) {
                return new URL(`http://${e}`).hostname;
            }
            function W(e) {
                if (null == e) return;
                let t = e.trim().replace(/^\./, '');
                return T.test(t)
                    ? (t.startsWith('[') || (t = '[' + t), t.endsWith(']') || (t += ']'), D(t).slice(1, -1))
                    : /[^\u0001-\u007f]/.test(t)
                      ? D(t)
                      : t.toLowerCase();
            }
            function N(e) {
                if (!e) return;
                let t = { foundTime: void 0, foundDayOfMonth: void 0, foundMonth: void 0, foundYear: void 0 };
                for (let a of e.split($).filter((e) => e.length > 0)) {
                    if (void 0 === t.foundTime) {
                        let [, e, s, r] = H.exec(a) || [];
                        if (void 0 != e && void 0 != s && void 0 != r) {
                            let a = parseInt(e, 10),
                                i = parseInt(s, 10),
                                o = parseInt(r, 10);
                            if (!isNaN(a) && !isNaN(i) && !isNaN(o)) {
                                t.foundTime = { hours: a, minutes: i, seconds: o };
                                continue;
                            }
                        }
                    }
                    if (void 0 === t.foundDayOfMonth && U.test(a)) {
                        let e = parseInt(a, 10);
                        if (!isNaN(e)) {
                            t.foundDayOfMonth = e;
                            continue;
                        }
                    }
                    if (void 0 === t.foundMonth && _.test(a)) {
                        let e = M.indexOf(a.substring(0, 3).toLowerCase());
                        if (e >= 0 && e <= 11) {
                            t.foundMonth = e;
                            continue;
                        }
                    }
                    if (void 0 === t.foundYear && F.test(a)) {
                        let e = parseInt(a, 10);
                        if (!isNaN(e)) {
                            t.foundYear = e;
                            continue;
                        }
                    }
                }
                if (
                    (void 0 !== t.foundYear && t.foundYear >= 70 && t.foundYear <= 99 && (t.foundYear += 1900),
                    void 0 !== t.foundYear && t.foundYear >= 0 && t.foundYear <= 69 && (t.foundYear += 2e3),
                    void 0 === t.foundDayOfMonth ||
                        void 0 === t.foundMonth ||
                        void 0 === t.foundYear ||
                        void 0 === t.foundTime ||
                        t.foundDayOfMonth < 1 ||
                        t.foundDayOfMonth > 31 ||
                        t.foundYear < 1601 ||
                        t.foundTime.hours > 23 ||
                        t.foundTime.minutes > 59 ||
                        t.foundTime.seconds > 59)
                )
                    return;
                let a = new Date(Date.UTC(t.foundYear, t.foundMonth, t.foundDayOfMonth, t.foundTime.hours, t.foundTime.minutes, t.foundTime.seconds));
                if (a.getUTCFullYear() === t.foundYear && a.getUTCMonth() === t.foundMonth && a.getUTCDate() === t.foundDayOfMonth) return a;
            }
            var M = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
                $ = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/,
                H = /^(\d{1,2}):(\d{1,2}):(\d{1,2})(?:[\x00-\x2F\x3A-\xFF][\x00-\xFF]*)?$/,
                U = /^[0-9]{1,2}(?:[\x00-\x2F\x3A-\xFF][\x00-\xFF]*)?$/,
                _ = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\x00-\xFF]*$/i,
                F = /^[\x30-\x39]{2,4}(?:[\x00-\x2F\x3A-\xFF][\x00-\xFF]*)?$/,
                G = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/,
                B = /[\x20-\x3A\x3C-\x7E]+/,
                J = /[\x00-\x1F]/,
                V = ['\n', '\r', '\0'];
            function Y(e) {
                let t;
                if (!e || L(e)) return;
                if ('string' == typeof e)
                    try {
                        t = JSON.parse(e);
                    } catch {
                        return;
                    }
                else t = e;
                let a = new Q();
                return (
                    Q.serializableProperties.forEach((e) => {
                        if (t && 'object' == typeof t && e in t) {
                            let s = t[e];
                            if (void 0 !== s && (!(e in X) || s !== X[e]))
                                switch (e) {
                                    case 'key':
                                    case 'value':
                                    case 'sameSite':
                                        'string' == typeof s && (a[e] = s);
                                        break;
                                    case 'expires':
                                    case 'creation':
                                    case 'lastAccessed':
                                        'number' == typeof s || 'string' == typeof s || s instanceof Date
                                            ? (a[e] = 'Infinity' == t[e] ? 'Infinity' : new Date(s))
                                            : null === s && (a[e] = null);
                                        break;
                                    case 'maxAge':
                                        ('number' == typeof s || 'Infinity' === s || '-Infinity' === s) && (a[e] = s);
                                        break;
                                    case 'domain':
                                    case 'path':
                                        ('string' == typeof s || null === s) && (a[e] = s);
                                        break;
                                    case 'secure':
                                    case 'httpOnly':
                                        'boolean' == typeof s && (a[e] = s);
                                        break;
                                    case 'extensions':
                                        Array.isArray(s) && s.every((e) => 'string' == typeof e) && (a[e] = s);
                                        break;
                                    case 'hostOnly':
                                    case 'pathIsDefault':
                                        ('boolean' == typeof s || null === s) && (a[e] = s);
                                }
                        }
                    }),
                    a
                );
            }
            var X = {
                    key: '',
                    value: '',
                    expires: 'Infinity',
                    maxAge: null,
                    domain: null,
                    path: null,
                    secure: !1,
                    httpOnly: !1,
                    extensions: null,
                    hostOnly: null,
                    pathIsDefault: null,
                    creation: null,
                    lastAccessed: null,
                    sameSite: void 0,
                },
                K = class e {
                    constructor(t = {}) {
                        (this.key = t.key ?? X.key),
                            (this.value = t.value ?? X.value),
                            (this.expires = t.expires ?? X.expires),
                            (this.maxAge = t.maxAge ?? X.maxAge),
                            (this.domain = t.domain ?? X.domain),
                            (this.path = t.path ?? X.path),
                            (this.secure = t.secure ?? X.secure),
                            (this.httpOnly = t.httpOnly ?? X.httpOnly),
                            (this.extensions = t.extensions ?? X.extensions),
                            (this.creation = t.creation ?? X.creation),
                            (this.hostOnly = t.hostOnly ?? X.hostOnly),
                            (this.pathIsDefault = t.pathIsDefault ?? X.pathIsDefault),
                            (this.lastAccessed = t.lastAccessed ?? X.lastAccessed),
                            (this.sameSite = t.sameSite ?? X.sameSite),
                            (this.creation = t.creation ?? new Date()),
                            Object.defineProperty(this, 'creationIndex', { configurable: !1, enumerable: !1, writable: !0, value: ++e.cookiesCreated }),
                            (this.creationIndex = e.cookiesCreated);
                    }
                    [Symbol.for('nodejs.util.inspect.custom')]() {
                        let e = Date.now(),
                            t = null != this.hostOnly ? this.hostOnly.toString() : '?',
                            a = this.creation && 'Infinity' !== this.creation ? `${String(e - this.creation.getTime())}ms` : '?',
                            s = this.lastAccessed && 'Infinity' !== this.lastAccessed ? `${String(e - this.lastAccessed.getTime())}ms` : '?';
                        return `Cookie="${this.toString()}; hostOnly=${t}; aAge=${s}; cAge=${a}"`;
                    }
                    toJSON() {
                        let t = {};
                        for (let a of e.serializableProperties) {
                            let e = this[a];
                            if (e !== X[a])
                                switch (a) {
                                    case 'key':
                                    case 'value':
                                    case 'sameSite':
                                        'string' == typeof e && (t[a] = e);
                                        break;
                                    case 'expires':
                                    case 'creation':
                                    case 'lastAccessed':
                                        'number' == typeof e || 'string' == typeof e || e instanceof Date
                                            ? (t[a] = 'Infinity' == e ? 'Infinity' : new Date(e).toISOString())
                                            : null === e && (t[a] = null);
                                        break;
                                    case 'maxAge':
                                        ('number' == typeof e || 'Infinity' === e || '-Infinity' === e) && (t[a] = e);
                                        break;
                                    case 'domain':
                                    case 'path':
                                        ('string' == typeof e || null === e) && (t[a] = e);
                                        break;
                                    case 'secure':
                                    case 'httpOnly':
                                        'boolean' == typeof e && (t[a] = e);
                                        break;
                                    case 'extensions':
                                        Array.isArray(e) && (t[a] = e);
                                        break;
                                    case 'hostOnly':
                                    case 'pathIsDefault':
                                        ('boolean' == typeof e || null === e) && (t[a] = e);
                                }
                        }
                        return t;
                    }
                    clone() {
                        return Y(this.toJSON());
                    }
                    validate() {
                        if (
                            !this.value ||
                            !G.test(this.value) ||
                            ('Infinity' != this.expires && !(this.expires instanceof Date) && !N(this.expires)) ||
                            (null != this.maxAge && 'Infinity' !== this.maxAge && ('-Infinity' === this.maxAge || this.maxAge <= 0)) ||
                            (null != this.path && !B.test(this.path))
                        )
                            return !1;
                        let e = this.cdomain();
                        return !(e && (e.match(/\.$/) || null == y(e))) && !0;
                    }
                    setExpires(e) {
                        e instanceof Date ? (this.expires = e) : (this.expires = N(e) || 'Infinity');
                    }
                    setMaxAge(e) {
                        e === 1 / 0 ? (this.maxAge = 'Infinity') : e === -1 / 0 ? (this.maxAge = '-Infinity') : (this.maxAge = e);
                    }
                    cookieString() {
                        let e = this.value || '';
                        return this.key ? `${this.key}=${e}` : e;
                    }
                    toString() {
                        let t = this.cookieString();
                        return (
                            'Infinity' != this.expires && this.expires instanceof Date && (t += `; Expires=${this.expires.toUTCString()}`),
                            null != this.maxAge && this.maxAge != 1 / 0 && (t += `; Max-Age=${String(this.maxAge)}`),
                            this.domain && !this.hostOnly && (t += `; Domain=${this.domain}`),
                            this.path && (t += `; Path=${this.path}`),
                            this.secure && (t += '; Secure'),
                            this.httpOnly && (t += '; HttpOnly'),
                            this.sameSite &&
                                'none' !== this.sameSite &&
                                (this.sameSite.toLowerCase() === e.sameSiteCanonical.lax.toLowerCase()
                                    ? (t += `; SameSite=${e.sameSiteCanonical.lax}`)
                                    : this.sameSite.toLowerCase() === e.sameSiteCanonical.strict.toLowerCase()
                                      ? (t += `; SameSite=${e.sameSiteCanonical.strict}`)
                                      : (t += `; SameSite=${this.sameSite}`)),
                            this.extensions &&
                                this.extensions.forEach((e) => {
                                    t += `; ${e}`;
                                }),
                            t
                        );
                    }
                    TTL(e = Date.now()) {
                        if (null != this.maxAge && 'number' == typeof this.maxAge) return this.maxAge <= 0 ? 0 : 1e3 * this.maxAge;
                        let t = this.expires;
                        return 'Infinity' === t ? 1 / 0 : (t?.getTime() ?? e) - (e || Date.now());
                    }
                    expiryTime(e) {
                        if (null != this.maxAge) {
                            let t = e || this.lastAccessed || new Date(),
                                a = 'number' == typeof this.maxAge ? this.maxAge : -1 / 0;
                            return 'Infinity' === t ? 1 / 0 : t.getTime() + (a <= 0 ? -1 / 0 : 1e3 * a);
                        }
                        return 'Infinity' == this.expires ? 1 / 0 : this.expires ? this.expires.getTime() : void 0;
                    }
                    expiryDate(e) {
                        let t = this.expiryTime(e);
                        return t == 1 / 0 ? new Date(2147483647e3) : t == -1 / 0 ? new Date(0) : void 0 == t ? void 0 : new Date(t);
                    }
                    isPersistent() {
                        return null != this.maxAge || 'Infinity' != this.expires;
                    }
                    canonicalizedDomain() {
                        return W(this.domain);
                    }
                    cdomain() {
                        return W(this.domain);
                    }
                    static parse(e, t) {
                        return (function (e, t) {
                            if (L(e) || !q(e)) return;
                            let a = (e = e.trim()).indexOf(';'),
                                s = (function (e, t) {
                                    let a,
                                        s,
                                        r = (e = (function (e) {
                                            if (L(e)) return e;
                                            for (let t = 0; t < V.length; t++) {
                                                let a = V[t],
                                                    s = a ? e.indexOf(a) : -1;
                                                -1 !== s && (e = e.slice(0, s));
                                            }
                                            return e;
                                        })(e)).indexOf('=');
                                    if (t) 0 === r && (r = (e = e.substring(1)).indexOf('='));
                                    else if (r <= 0) return;
                                    if ((r <= 0 ? ((a = ''), (s = e.trim())) : ((a = e.slice(0, r).trim()), (s = e.slice(r + 1).trim())), J.test(a) || J.test(s))) return;
                                    let i = new Q();
                                    return (i.key = a), (i.value = s), i;
                                })(-1 === a ? e : e.slice(0, a), t?.loose ?? !1);
                            if (!s) return;
                            if (-1 === a) return s;
                            let r = e.slice(a + 1).trim();
                            if (0 === r.length) return s;
                            let i = r.split(';');
                            for (; i.length; ) {
                                let e,
                                    t,
                                    a = (i.shift() ?? '').trim();
                                if (0 === a.length) continue;
                                let r = a.indexOf('=');
                                switch (
                                    (-1 === r ? ((e = a), (t = null)) : ((e = a.slice(0, r)), (t = a.slice(r + 1))), (e = e.trim().toLowerCase()), t && (t = t.trim()), e)
                                ) {
                                    case 'expires':
                                        if (t) {
                                            let e = N(t);
                                            e && (s.expires = e);
                                        }
                                        break;
                                    case 'max-age':
                                        if (t && /^-?[0-9]+$/.test(t)) {
                                            let e = parseInt(t, 10);
                                            s.setMaxAge(e);
                                        }
                                        break;
                                    case 'domain':
                                        if (t) {
                                            let e = t.trim().replace(/^\./, '');
                                            e && (s.domain = e.toLowerCase());
                                        }
                                        break;
                                    case 'path':
                                        s.path = t && '/' === t[0] ? t : null;
                                        break;
                                    case 'secure':
                                        s.secure = !0;
                                        break;
                                    case 'httponly':
                                        s.httpOnly = !0;
                                        break;
                                    case 'samesite':
                                        switch (t ? t.toLowerCase() : '') {
                                            case 'strict':
                                                s.sameSite = 'strict';
                                                break;
                                            case 'lax':
                                                s.sameSite = 'lax';
                                                break;
                                            case 'none':
                                                s.sameSite = 'none';
                                                break;
                                            default:
                                                s.sameSite = void 0;
                                        }
                                        break;
                                    default:
                                        (s.extensions = s.extensions || []), s.extensions.push(a);
                                }
                            }
                            return s;
                        })(e, t);
                    }
                    static fromJSON(e) {
                        return Y(e);
                    }
                };
            (K.cookiesCreated = 0),
                (K.sameSiteLevel = { strict: 3, lax: 2, none: 1 }),
                (K.sameSiteCanonical = { strict: 'Strict', lax: 'Lax' }),
                (K.serializableProperties = [
                    'key',
                    'value',
                    'expires',
                    'maxAge',
                    'domain',
                    'path',
                    'secure',
                    'httpOnly',
                    'extensions',
                    'hostOnly',
                    'pathIsDefault',
                    'creation',
                    'lastAccessed',
                    'sameSite',
                ]);
            var Q = K;
            function Z(e, t) {
                let a,
                    s = e.path ? e.path.length : 0;
                return 0 != (a = (t.path ? t.path.length : 0) - s)
                    ? a
                    : 0 !=
                        (a =
                            (e.creation && e.creation instanceof Date ? e.creation.getTime() : 2147483647e3) -
                            (t.creation && t.creation instanceof Date ? t.creation.getTime() : 2147483647e3))
                      ? a
                      : (a = (e.creationIndex || 0) - (t.creationIndex || 0));
            }
            var ee =
                /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
            function et(e, t, a) {
                let s, r;
                if (null == e || null == t || (!1 !== a ? ((s = W(e)), (r = W(t))) : ((s = e), (r = t)), null == s || null == r)) return;
                if (s == r) return !0;
                let i = s.lastIndexOf(r);
                return !(i <= 0) && s.length === r.length + i && '.' === s.substring(i - 1, i) && !ee.test(s);
            }
            var ea = { loose: !1, sameSiteContext: void 0, ignoreError: !1, http: !0 },
                es = { http: !0, expire: !0, allPaths: !1, sameSiteContext: void 0, sort: void 0 },
                er = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
            function ei(e) {
                if (
                    e &&
                    'object' == typeof e &&
                    'hostname' in e &&
                    'string' == typeof e.hostname &&
                    'pathname' in e &&
                    'string' == typeof e.pathname &&
                    'protocol' in e &&
                    'string' == typeof e.protocol
                )
                    return { hostname: e.hostname, pathname: e.pathname, protocol: e.protocol };
                if ('string' == typeof e)
                    try {
                        return new URL(decodeURI(e));
                    } catch {
                        return new URL(e);
                    }
                throw new O('`url` argument is not a string or URL.');
            }
            function eo(e) {
                let t = String(e).toLowerCase();
                return 'none' === t || 'lax' === t || 'strict' === t ? t : void 0;
            }
            function en(e) {
                let t = e.toLowerCase();
                switch (t) {
                    case I.STRICT:
                    case I.SILENT:
                    case I.DISABLED:
                        return t;
                    default:
                        return I.SILENT;
                }
            }
            var el = class e {
                constructor(e, t) {
                    'boolean' == typeof t && (t = { rejectPublicSuffixes: t }),
                        (this.rejectPublicSuffixes = t?.rejectPublicSuffixes ?? !0),
                        (this.enableLooseMode = t?.looseMode ?? !1),
                        (this.allowSpecialUseDomain = t?.allowSpecialUseDomain ?? !0),
                        (this.allowSecureOnLocal = t?.allowSecureOnLocal ?? !0),
                        (this.prefixSecurity = en(t?.prefixSecurity ?? 'silent')),
                        (this.store = e ?? new E());
                }
                callSync(e) {
                    let t;
                    if (!this.store.synchronous) throw Error('CookieJar store is not synchronous; use async API instead.');
                    let a = null;
                    try {
                        e.call(this, (e, s) => {
                            (a = e), (t = s);
                        });
                    } catch (e) {
                        a = e;
                    }
                    if (a) throw a;
                    return t;
                }
                setCookie(e, t, a, s) {
                    let r;
                    'function' == typeof a && ((s = a), (a = void 0));
                    let i = j(s),
                        o = i.callback;
                    try {
                        if (('string' == typeof t && A(C(t), s, S(a)), (r = ei(t)), 'function' == typeof t)) return i.reject(Error('No URL was specified'));
                        if (('function' == typeof a && (a = ea), A('function' == typeof o, o), !C(e) && !z(e) && e instanceof String && 0 == e.length))
                            return i.resolve(void 0);
                    } catch (e) {
                        return i.reject(e);
                    }
                    let n = W(r.hostname) ?? null,
                        l = a?.loose || this.enableLooseMode,
                        u = null;
                    if (a?.sameSiteContext && !(u = eo(a.sameSiteContext))) return i.reject(Error(er));
                    if ('string' == typeof e || e instanceof String) {
                        let t = Q.parse(e.toString(), { loose: l });
                        if (!t) {
                            let e = Error('Cookie failed to parse');
                            return a?.ignoreError ? i.resolve(void 0) : i.reject(e);
                        }
                        e = t;
                    } else if (!(e instanceof Q)) {
                        let e = Error('First argument to setCookie must be a Cookie object or string');
                        return a?.ignoreError ? i.resolve(void 0) : i.reject(e);
                    }
                    let c = a?.now || new Date();
                    if (this.rejectPublicSuffixes && e.domain)
                        try {
                            let t = e.cdomain(),
                                s = 'string' == typeof t ? y(t, { allowSpecialUseDomain: this.allowSpecialUseDomain, ignoreError: a?.ignoreError }) : null;
                            if (null == s && !T.test(e.domain)) {
                                let e = Error('Cookie has domain set to a public suffix');
                                return a?.ignoreError ? i.resolve(void 0) : i.reject(e);
                            }
                        } catch (e) {
                            return a?.ignoreError ? i.resolve(void 0) : i.reject(e);
                        }
                    if (e.domain) {
                        if (!et(n ?? void 0, e.cdomain() ?? void 0, !1)) {
                            let t = Error(`Cookie not in this host's domain. Cookie:${e.cdomain() ?? 'null'} Request:${n ?? 'null'}`);
                            return a?.ignoreError ? i.resolve(void 0) : i.reject(t);
                        }
                        null == e.hostOnly && (e.hostOnly = !1);
                    } else (e.hostOnly = !0), (e.domain = n);
                    if (
                        ((e.path && '/' === e.path[0]) ||
                            ((e.path = (function (e) {
                                if (!e || '/' !== e.slice(0, 1)) return '/';
                                if ('/' === e) return e;
                                let t = e.lastIndexOf('/');
                                return 0 === t ? '/' : e.slice(0, t);
                            })(r.pathname)),
                            (e.pathIsDefault = !0)),
                        a?.http === !1 && e.httpOnly)
                    ) {
                        let e = Error("Cookie is HttpOnly and this isn't an HTTP API");
                        return a.ignoreError ? i.resolve(void 0) : i.reject(e);
                    }
                    if ('none' !== e.sameSite && void 0 !== e.sameSite && u && 'none' === u) {
                        let e = Error('Cookie is SameSite but this is a cross-origin request');
                        return a?.ignoreError ? i.resolve(void 0) : i.reject(e);
                    }
                    let h = this.prefixSecurity === I.SILENT;
                    if (this.prefixSecurity !== I.DISABLED) {
                        var d, m;
                        let t,
                            s = !1;
                        if (
                            (!('string' == typeof (d = e).key && d.key.startsWith('__Secure-')) || d.secure
                                ? !('string' == typeof (m = e).key && m.key.startsWith('__Host-')) ||
                                  (m.secure && m.hostOnly && null != m.path && '/' === m.path) ||
                                  ((s = !0), (t = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'"))
                                : ((s = !0), (t = 'Cookie has __Secure prefix but Secure attribute is not set')),
                            s)
                        )
                            return a?.ignoreError || h ? i.resolve(void 0) : i.reject(Error(t));
                    }
                    let p = this.store;
                    return (
                        p.updateCookie ||
                            (p.updateCookie = async function (e, t, a) {
                                return this.putCookie(t).then(
                                    () => a?.(null),
                                    (e) => a?.(e),
                                );
                            }),
                        p.findCookie(e.domain, e.path, e.key, function (t, s) {
                            if (t) return void o(t);
                            let r = function (t) {
                                t ? o(t) : 'string' == typeof e ? o(null, void 0) : o(null, e);
                            };
                            if (s) {
                                if (a && 'http' in a && !1 === a.http && s.httpOnly) {
                                    (t = Error("old Cookie is HttpOnly and this isn't an HTTP API")), a.ignoreError ? o(null, void 0) : o(t);
                                    return;
                                }
                                e instanceof Q && ((e.creation = s.creation), (e.creationIndex = s.creationIndex), (e.lastAccessed = c), p.updateCookie(s, e, r));
                            } else e instanceof Q && ((e.creation = e.lastAccessed = c), p.putCookie(e, r));
                        }),
                        i.promise
                    );
                }
                setCookieSync(e, t, a) {
                    let s = a ? this.setCookie.bind(this, e, t, a) : this.setCookie.bind(this, e, t);
                    return this.callSync(s);
                }
                getCookies(e, t, a) {
                    let s;
                    'function' == typeof t ? ((a = t), (t = es)) : void 0 === t && (t = es);
                    let r = j(a),
                        i = r.callback;
                    try {
                        'string' == typeof e && A(C(e), i, e), (s = ei(e)), A(z(t), i, S(t)), A('function' == typeof i, i);
                    } catch (e) {
                        return r.reject(e);
                    }
                    let o = W(s.hostname),
                        n = s.pathname || '/',
                        l = (function (e, t = !0) {
                            let a;
                            if ('string' == typeof e)
                                try {
                                    a = new URL(e);
                                } catch {
                                    return !1;
                                }
                            else a = e;
                            let s = a.protocol.replace(':', '').toLowerCase(),
                                r = ((i = a.hostname).length >= 2 && i.startsWith('[') && i.endsWith(']') ? i.substring(1, i.length - 1) : i).replace(/\.+$/, '');
                            if ('https' === s || 'wss' === s) return !0;
                            if (!t) return !1;
                            if (R.test(r)) {
                                var i;
                                let e = r.split('.');
                                return 4 === e.length && void 0 !== e[0] && 127 === parseInt(e[0], 10);
                            }
                            if (T.test(r)) return '::1' === r;
                            let o = r.toLowerCase();
                            return 'localhost' === o || o.endsWith('.localhost');
                        })(e, this.allowSecureOnLocal),
                        u = 0;
                    if (t.sameSiteContext) {
                        let e = eo(t.sameSiteContext);
                        if (null == e || !(u = Q.sameSiteLevel[e])) return r.reject(Error(er));
                    }
                    let c = t.http ?? !0,
                        h = Date.now(),
                        d = t.expire ?? !0,
                        m = t.allPaths ?? !1,
                        p = this.store;
                    function f(e) {
                        if (e.hostOnly) {
                            if (e.domain != o) return !1;
                        } else if (!et(o ?? void 0, e.domain ?? void 0, !1)) return !1;
                        if ((!m && 'string' == typeof e.path && !g(n, e.path)) || (e.secure && !l) || (e.httpOnly && !c)) return !1;
                        if (u && ('lax' === e.sameSite ? Q.sameSiteLevel.lax : 'strict' === e.sameSite ? Q.sameSiteLevel.strict : Q.sameSiteLevel.none) > u) return !1;
                        let t = e.expiryTime();
                        return !d || void 0 == t || !(t <= h) || (p.removeCookie(e.domain, e.path, e.key, () => {}), !1);
                    }
                    return (
                        p.findCookies(o, m ? null : n, this.allowSpecialUseDomain, (e, a) => {
                            if (e) return void i(e);
                            if (null == a) return void i(null, []);
                            (a = a.filter(f)), 'sort' in t && !1 !== t.sort && (a = a.sort(Z));
                            let s = new Date();
                            for (let e of a) e.lastAccessed = s;
                            i(null, a);
                        }),
                        r.promise
                    );
                }
                getCookiesSync(e, t) {
                    return this.callSync(this.getCookies.bind(this, e, t)) ?? [];
                }
                getCookieString(e, t, a) {
                    'function' == typeof t && ((a = t), (t = void 0));
                    let s = j(a);
                    return (
                        this.getCookies(e, t, function (e, t) {
                            e
                                ? s.callback(e)
                                : s.callback(
                                      null,
                                      t
                                          ?.sort(Z)
                                          .map((e) => e.cookieString())
                                          .join('; '),
                                  );
                        }),
                        s.promise
                    );
                }
                getCookieStringSync(e, t) {
                    return this.callSync(t ? this.getCookieString.bind(this, e, t) : this.getCookieString.bind(this, e)) ?? '';
                }
                getSetCookieStrings(e, t, a) {
                    'function' == typeof t && ((a = t), (t = void 0));
                    let s = j(a);
                    return (
                        this.getCookies(e, t, function (e, t) {
                            e
                                ? s.callback(e)
                                : s.callback(
                                      null,
                                      t?.map((e) => e.toString()),
                                  );
                        }),
                        s.promise
                    );
                }
                getSetCookieStringsSync(e, t = {}) {
                    return this.callSync(this.getSetCookieStrings.bind(this, e, t)) ?? [];
                }
                serialize(e) {
                    let t = j(e),
                        a = this.store.constructor.name;
                    z(a) && (a = null);
                    let s = {
                        version: 'tough-cookie@6.0.1',
                        storeType: a,
                        rejectPublicSuffixes: this.rejectPublicSuffixes,
                        enableLooseMode: this.enableLooseMode,
                        allowSpecialUseDomain: this.allowSpecialUseDomain,
                        prefixSecurity: en(this.prefixSecurity),
                        cookies: [],
                    };
                    return 'function' != typeof this.store.getAllCookies
                        ? t.reject(Error('store does not support getAllCookies and cannot be serialized'))
                        : (this.store.getAllCookies((e, a) =>
                              e
                                  ? void t.callback(e)
                                  : null == a
                                    ? void t.callback(null, s)
                                    : void ((s.cookies = a.map((e) => {
                                          let t = e.toJSON();
                                          return delete t.creationIndex, t;
                                      })),
                                      t.callback(null, s)),
                          ),
                          t.promise);
                }
                serializeSync() {
                    return this.callSync((e) => {
                        this.serialize(e);
                    });
                }
                toJSON() {
                    return this.serializeSync();
                }
                _importCookies(e, t) {
                    let a;
                    if ((e && 'object' == typeof e && 'cookies' in e && Array.isArray(e.cookies) && (a = e.cookies), !a))
                        return void t(Error('serialized jar has no cookies array'), void 0);
                    a = a.slice();
                    let s = (e) => {
                        if (e) return void t(e, void 0);
                        if (Array.isArray(a)) {
                            let r;
                            if (!a.length) return void t(e, this);
                            try {
                                r = Q.fromJSON(a.shift());
                            } catch (e) {
                                t(e instanceof Error ? e : Error(), void 0);
                                return;
                            }
                            if (void 0 === r) return void s(null);
                            this.store.putCookie(r, s);
                        }
                    };
                    s(null);
                }
                _importCookiesSync(e) {
                    this.callSync(this._importCookies.bind(this, e));
                }
                clone(t, a) {
                    'function' == typeof t && ((a = t), (t = void 0));
                    let s = j(a),
                        r = s.callback;
                    return this.serialize((a, i) => (a ? s.reject(a) : e.deserialize(i ?? '', t, r))), s.promise;
                }
                _cloneSync(e) {
                    let t = e && 'function' != typeof e ? this.clone.bind(this, e) : this.clone.bind(this);
                    return this.callSync((e) => {
                        t(e);
                    });
                }
                cloneSync(e) {
                    if (!e) return this._cloneSync();
                    if (!e.synchronous) throw Error('CookieJar clone destination store is not synchronous; use async API instead.');
                    return this._cloneSync(e);
                }
                removeAllCookies(e) {
                    let t = j(e),
                        a = t.callback,
                        s = this.store;
                    return (
                        'function' == typeof s.removeAllCookies && s.removeAllCookies !== v.prototype.removeAllCookies
                            ? s.removeAllCookies(a)
                            : s.getAllCookies((e, t) => {
                                  if (e) return void a(e);
                                  if ((t || (t = []), 0 === t.length)) return void a(null, void 0);
                                  let r = 0,
                                      i = [],
                                      o = function (e) {
                                          if ((e && i.push(e), ++r === t.length)) return void (i[0] ? a(i[0]) : a(null, void 0));
                                      };
                                  t.forEach((e) => {
                                      s.removeCookie(e.domain, e.path, e.key, o);
                                  });
                              }),
                        t.promise
                    );
                }
                removeAllCookiesSync() {
                    this.callSync((e) => {
                        this.removeAllCookies(e);
                    });
                }
                static deserialize(t, a, s) {
                    let r;
                    'function' == typeof a && ((s = a), (a = void 0));
                    let i = j(s);
                    if ('string' == typeof t)
                        try {
                            r = JSON.parse(t);
                        } catch (e) {
                            return i.reject(e instanceof Error ? e : Error());
                        }
                    else r = t;
                    let o = (e) => (r && 'object' == typeof r && e in r ? r[e] : void 0),
                        n = (e) => {
                            let t = o(e);
                            return 'boolean' == typeof t ? t : void 0;
                        },
                        l = new e(a, {
                            rejectPublicSuffixes: n('rejectPublicSuffixes'),
                            looseMode: n('enableLooseMode'),
                            allowSpecialUseDomain: n('allowSpecialUseDomain'),
                            prefixSecurity: en(
                                ((e) => {
                                    let t = o(e);
                                    return 'string' == typeof t ? t : void 0;
                                })('prefixSecurity') ?? 'silent',
                            ),
                        });
                    return (
                        l._importCookies(r, (e) => {
                            if (e) return void i.callback(e);
                            i.callback(null, l);
                        }),
                        i.promise
                    );
                }
                static deserializeSync(t, a) {
                    let s = 'string' == typeof t ? JSON.parse(t) : t,
                        r = (e) => (s && 'object' == typeof s && e in s ? s[e] : void 0),
                        i = (e) => {
                            let t = r(e);
                            return 'boolean' == typeof t ? t : void 0;
                        },
                        o = new e(a, {
                            rejectPublicSuffixes: i('rejectPublicSuffixes'),
                            looseMode: i('enableLooseMode'),
                            allowSpecialUseDomain: i('allowSpecialUseDomain'),
                            prefixSecurity: en(
                                ((e) => {
                                    let t = r(e);
                                    return 'string' == typeof t ? t : void 0;
                                })('prefixSecurity') ?? 'silent',
                            ),
                        });
                    if (!o.store.synchronous) throw Error('CookieJar store is not synchronous; use async API instead.');
                    return o._importCookiesSync(s), o;
                }
                static fromJSON(t, a) {
                    return e.deserializeSync(t, a);
                }
            };
            class eu {
                #B = '__msw-cookie-store__';
                #J;
                #V;
                constructor() {
                    (0, s.S)() ||
                        (0, r.V1)(
                            'undefined' != typeof localStorage,
                            'Failed to create a CookieStore: `localStorage` is not available in this environment. This is likely an issue with your environment, which has been detected as browser (or browser-like) environment and must implement global browser APIs correctly.',
                        ),
                        (this.#V = new E()),
                        (this.#V.idx = this.getCookieStoreIndex()),
                        (this.#J = new el(this.#V));
                }
                getCookies(e) {
                    return this.#J.getCookiesSync(e);
                }
                async setCookie(e, t) {
                    await this.#J.setCookie(e, t), this.persist();
                }
                getCookieStoreIndex() {
                    if ('undefined' == typeof localStorage || 'function' != typeof localStorage.getItem) return {};
                    let e = localStorage.getItem(this.#B);
                    if (null == e) return {};
                    let t = (function (e) {
                        try {
                            return JSON.parse(e);
                        } catch {
                            return;
                        }
                    })(e);
                    if (null == t) return {};
                    let a = {};
                    for (let e of t) {
                        let t = Q.fromJSON(e);
                        null != t && null != t.domain && null != t.path && ((a[t.domain] ||= {}), (a[t.domain][t.path] ||= {}), (a[t.domain][t.path][t.key] = t));
                    }
                    return a;
                }
                persist() {
                    if ('undefined' == typeof localStorage || 'function' != typeof localStorage.setItem) return;
                    let e = [],
                        { idx: t } = this.#V;
                    for (let a in t) for (let s in t[a]) for (let r in t[a][s]) e.push(t[a][s][r].toJSON());
                    localStorage.setItem(this.#B, JSON.stringify(e));
                }
            }
            let ec = new eu();
        },
        55129: (e, t, a) => {
            a.d(t, { A: () => n });
            var s = a(48289),
                r = a(93223),
                i = a(15640),
                o = a(83556);
            let n = function (e, t, a) {
                if (!(0, o.A)(a)) return !1;
                var n = typeof t;
                return ('number' == n ? !!((0, r.A)(a) && (0, i.A)(t, a.length)) : 'string' == n && t in a) && (0, s.A)(a[t], e);
            };
        },
        61034: (e, t, a) => {
            let s;
            a.d(t, { w: () => E });
            var r = { decodeValues: !0, map: !1, silent: !1, split: 'auto' };
            function i(e) {
                return 'string' != typeof e || e in {};
            }
            function o() {
                return Object.create(null);
            }
            function n(e) {
                return 'string' == typeof e && !!e.trim();
            }
            function l(e, t) {
                var a,
                    s,
                    l,
                    u,
                    c = e.split(';').filter(n),
                    h = ((a = c.shift()), (s = ''), (l = ''), (u = a.split('=')).length > 1 ? ((s = u.shift()), (l = u.join('='))) : (l = a), { name: s, value: l }),
                    d = h.name,
                    m = h.value;
                if (((t = t ? Object.assign({}, r, t) : r), i(d))) return null;
                try {
                    m = t.decodeValues ? decodeURIComponent(m) : m;
                } catch (e) {
                    console.error('set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.', e);
                }
                var p = o();
                return (
                    (p.name = d),
                    (p.value = m),
                    c.forEach(function (e) {
                        var t = e.split('='),
                            a = t.shift().trim().toLowerCase();
                        if (!i(a)) {
                            var s = t.join('=').trim();
                            if ('expires' === a) p.expires = new Date(s);
                            else if ('max-age' === a) {
                                var r = parseInt(s, 10);
                                Number.isNaN(r) || (p.maxAge = r);
                            } else
                                'secure' === a
                                    ? (p.secure = !0)
                                    : 'httponly' === a
                                      ? (p.httpOnly = !0)
                                      : 'samesite' === a
                                        ? (p.sameSite = s)
                                        : 'partitioned' === a
                                          ? (p.partitioned = !0)
                                          : a && (p[a] = s);
                        }
                    }),
                    p
                );
            }
            function u(e, t) {
                if (((t = t ? Object.assign({}, r, t) : r), !e))
                    if (!t.map) return [];
                    else return o();
                if (e.headers)
                    if ('function' == typeof e.headers.getSetCookie) e = e.headers.getSetCookie();
                    else if (e.headers['set-cookie']) e = e.headers['set-cookie'];
                    else {
                        var a =
                            e.headers[
                                Object.keys(e.headers).find(function (e) {
                                    return 'set-cookie' === e.toLowerCase();
                                })
                            ];
                        a ||
                            !e.headers.cookie ||
                            t.silent ||
                            console.warn(
                                'Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.',
                            ),
                            (e = a);
                    }
                var s = t.split,
                    u = Array.isArray(e);
                if (('auto' === s && (s = !u), u || (e = [e]), (e = e.filter(n)), s && (e = e.map(c).flat()), !t.map))
                    return e
                        .map(function (e) {
                            return l(e, t);
                        })
                        .filter(Boolean);
                var h = o();
                return e.reduce(function (e, a) {
                    var s = l(a, t);
                    return s && !i(s.name) && (e[s.name] = s), e;
                }, h);
            }
            function c(e) {
                if (Array.isArray(e)) return e;
                if ('string' != typeof e) return [];
                var t,
                    a,
                    s,
                    r,
                    i,
                    o = [],
                    n = 0;
                function l() {
                    for (; n < e.length && /\s/.test(e.charAt(n)); ) n += 1;
                    return n < e.length;
                }
                for (; n < e.length; ) {
                    for (t = n, i = !1; l(); )
                        if (',' === (a = e.charAt(n))) {
                            for (s = n, n += 1, l(), r = n; n < e.length && '=' !== (a = e.charAt(n)) && ';' !== a && ',' !== a; ) n += 1;
                            n < e.length && '=' === e.charAt(n) ? ((i = !0), (n = r), o.push(e.substring(t, s)), (t = n)) : (n = s + 1);
                        } else n += 1;
                    (!i || n >= e.length) && o.push(e.substring(t, e.length));
                }
                return o;
            }
            (u.parseSetCookie = u), (u.parse = u), (u.parseString = l), (u.splitCookiesString = c);
            let h = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
            function d(e) {
                if (h.test(e) || '' === e.trim()) throw TypeError('Invalid character in header field name');
                return e.trim().toLowerCase();
            }
            let m = ['\n', '\r', '	', ' '],
                p = RegExp(`(^[${m.join('')}]|$[${m.join('')}])`, 'g');
            function g(e) {
                return e.replace(p, '');
            }
            function f(e) {
                if ('string' != typeof e || 0 === e.length) return !1;
                for (let t = 0; t < e.length; t++) {
                    let a = e.charCodeAt(t);
                    if (a > 127 || [127, 32, '(', ')', '<', '>', '@', ',', ';', ':', '\\', '"', '/', '[', ']', '?', '=', '{', '}'].includes(a)) return !1;
                }
                return !0;
            }
            function k(e) {
                if ('string' != typeof e || e.trim() !== e) return !1;
                for (let t = 0; t < e.length; t++) {
                    let a = e.charCodeAt(t);
                    if (0 === a || 10 === a || 13 === a) return !1;
                }
                return !0;
            }
            let b = Symbol('normalizedHeaders'),
                y = Symbol('rawHeaderNames');
            var v = class e {
                constructor(t) {
                    (this[b] = {}),
                        (this[y] = new Map()),
                        (this[s] = 'Headers'),
                        ['Headers', 'HeadersPolyfill'].includes(t?.constructor?.name) ||
                        t instanceof e ||
                        (void 0 !== globalThis.Headers && t instanceof globalThis.Headers)
                            ? t.forEach((e, t) => {
                                  this.append(t, e);
                              }, this)
                            : Array.isArray(t)
                              ? t.forEach(([e, t]) => {
                                    this.append(e, Array.isArray(t) ? t.join(', ') : t);
                                })
                              : t &&
                                Object.getOwnPropertyNames(t).forEach((e) => {
                                    let a = t[e];
                                    this.append(e, Array.isArray(a) ? a.join(', ') : a);
                                });
                }
                [((s = Symbol.toStringTag), Symbol.iterator)]() {
                    return this.entries();
                }
                *keys() {
                    for (let [e] of this.entries()) yield e;
                }
                *values() {
                    for (let [, e] of this.entries()) yield e;
                }
                *entries() {
                    for (let e of Object.keys(this[b]).sort((e, t) => e.localeCompare(t)))
                        if ('set-cookie' === e) for (let t of this.getSetCookie()) yield [e, t];
                        else yield [e, this.get(e)];
                }
                has(e) {
                    if (!f(e)) throw TypeError(`Invalid header name "${e}"`);
                    return this[b].hasOwnProperty(d(e));
                }
                get(e) {
                    if (!f(e)) throw TypeError(`Invalid header name "${e}"`);
                    return this[b][d(e)] ?? null;
                }
                set(e, t) {
                    if (!f(e) || !k(t)) return;
                    let a = d(e),
                        s = g(t);
                    (this[b][a] = g(s)), this[y].set(a, e);
                }
                append(e, t) {
                    if (!f(e) || !k(t)) return;
                    let a = d(e),
                        s = g(t),
                        r = this.has(a) ? `${this.get(a)}, ${s}` : s;
                    this.set(e, r);
                }
                delete(e) {
                    if (!f(e) || !this.has(e)) return;
                    let t = d(e);
                    delete this[b][t], this[y].delete(t);
                }
                forEach(e, t) {
                    for (let [a, s] of this.entries()) e.call(t, s, a, this);
                }
                getSetCookie() {
                    let e = this.get('set-cookie');
                    return null === e ? [] : '' === e ? [''] : c(e);
                }
            };
            let w = /[/\\]msw[/\\]src[/\\](.+)/,
                x = /(node_modules)?[/\\]lib[/\\](core|browser|node|native|iife)[/\\]|^[^/\\]*$/;
            var S = a(83682),
                j = a(89782);
            class E {
                static cache = new WeakMap();
                kind = 'request';
                resolver;
                resolverIterator;
                resolverIteratorResult;
                resolverIteratorCleanups;
                options;
                scheduledCleanups;
                info;
                isUsed;
                constructor(e) {
                    (this.resolver = e.resolver), (this.options = e.options), (this.scheduledCleanups = new Map());
                    let t = (function (e) {
                        let t = e.stack;
                        if (!t) return;
                        let a = t
                            .split('\n')
                            .slice(1)
                            .find((e) => !(w.test(e) || x.test(e)));
                        if (a) return a.replace(/\s*at [^()]*\(([^)]+)\)/, '$1').replace(/^@/, '');
                    })(Error());
                    (this.info = { ...e.info, callFrame: t }), (this.isUsed = !1);
                }
                reset() {
                    this.scheduledCleanups.clear();
                    let e = this.resolverIterator;
                    (this.resolverIterator = void 0),
                        (this.resolverIteratorResult = void 0),
                        (this.resolverIteratorCleanups = void 0),
                        'function' == typeof e?.return && Promise.resolve(e.return());
                }
                restore() {
                    this.options?.once && (this.reset(), (this.isUsed = !1));
                }
                async parse(e) {
                    return {};
                }
                async test(e) {
                    let t = await this.parse({ request: e.request, resolutionContext: e.resolutionContext });
                    return this.predicate({ request: e.request, parsedResult: t, resolutionContext: e.resolutionContext });
                }
                extendResolverArgs(e) {
                    return {};
                }
                cloneRequestOrGetFromCache(e) {
                    let t = E.cache.get(e);
                    if (void 0 !== t) return t;
                    let a = e.clone();
                    return E.cache.set(e, a), a;
                }
                async run(e) {
                    if (this.isUsed && this.options?.once) return null;
                    let t = this.cloneRequestOrGetFromCache(e.request),
                        a = await this.parse({ request: e.request, resolutionContext: e.resolutionContext });
                    if (!(await this.predicate({ request: e.request, parsedResult: a, resolutionContext: e.resolutionContext })) || (this.isUsed && this.options?.once))
                        return null;
                    this.isUsed = !0;
                    let s = this.wrapResolver(this.resolver),
                        r = this.extendResolverArgs({ request: e.request, parsedResult: a }),
                        i = new AbortController();
                    e.request.signal.addEventListener('abort', () => this.runScheduledCleanups(e.requestId), { once: !0, signal: i.signal });
                    let o = s({
                            ...r,
                            finalize: (t) => {
                                this.scheduleCleanup(e.requestId, t);
                            },
                            requestId: e.requestId,
                            request: e.request,
                        })
                            .catch((e) => {
                                if (e instanceof Response) return e;
                                throw e;
                            })
                            .finally(() => {
                                i.abort();
                            }),
                        n = await o;
                    return (
                        n &&
                            (function (e) {
                                if ('undefined' == typeof document) return;
                                let t = (0, j.f4)(e);
                                if (t) for (let e of v.prototype.getSetCookie.call(new Headers([['set-cookie', t]]))) document.cookie = e;
                            })(n),
                        this.createExecutionResult({ request: t, requestId: e.requestId, response: n, parsedResult: a })
                    );
                }
                wrapResolver(e) {
                    return async (t) => {
                        if (!this.resolverIterator) {
                            var a;
                            let s;
                            try {
                                s = await e(t);
                            } catch (e) {
                                throw (await this.runScheduledCleanups(t.requestId), e);
                            }
                            if (!((a = s) && (Reflect.has(a, Symbol.iterator) || Reflect.has(a, Symbol.asyncIterator))))
                                return await this.runScheduledCleanups(t.requestId), s;
                            let r = this.scheduledCleanups.get(t.requestId);
                            null != r && r.length > 0 && ((this.resolverIteratorCleanups = r), this.scheduledCleanups.delete(t.requestId)),
                                (this.resolverIterator = Symbol.iterator in s ? s[Symbol.iterator]() : s[Symbol.asyncIterator]());
                        }
                        this.isUsed = !1;
                        let { done: s, value: r } = await this.resolverIterator.next(),
                            i = await r;
                        return (i && (this.resolverIteratorResult = i.clone()), s)
                            ? ((this.isUsed = !0), await this.runScheduledCleanups(t.requestId), this.resolverIteratorResult?.clone())
                            : i;
                    };
                }
                createExecutionResult(e) {
                    return { handler: this, request: e.request, requestId: e.requestId, response: e.response, parsedResult: e.parsedResult };
                }
                scheduleCleanup(e, t) {
                    if (this.resolverIterator) return void (this.resolverIteratorCleanups ||= []).unshift(t);
                    let a = this.scheduledCleanups.get(e) || [];
                    a.unshift(t), this.scheduledCleanups.set(e, a);
                }
                async exhaustCleanups(e) {
                    let t = [];
                    for (let a of e)
                        try {
                            await a();
                        } catch (e) {
                            e instanceof Error && t.push(e);
                        }
                    t.length > 0 &&
                        S.J.error(
                            'Failed to execute cleanup for request handler "%s"',
                            this.info.header,
                            AggregateError(t, `Failed to execute cleanup for request handler "${this.info.header}"`),
                        );
                }
                async runScheduledCleanups(e) {
                    if (this.resolverIterator && null != this.resolverIteratorCleanups && this.resolverIteratorCleanups.length > 0) {
                        try {
                            await this.exhaustCleanups(this.resolverIteratorCleanups);
                        } finally {
                            this.resolverIteratorCleanups = void 0;
                        }
                        return;
                    }
                    let t = this.scheduledCleanups.get(e);
                    t && 0 != t.length && (await this.exhaustCleanups(t), this.scheduledCleanups.delete(e));
                }
            }
        },
        66581: (e, t, a) => {
            a.d(t, { A: () => r });
            var s = a(22389);
            let r = (0, a(47302).A)(function (e, t, a, r) {
                (0, s.A)(e, t, a, r);
            });
        },
        74422: (e, t, a) => {
            a.d(t, { Z: () => s });
            var s = class extends Promise {
                #L;
                resolve;
                reject;
                constructor(e = null) {
                    let t = (function () {
                        let e = (t, a) => {
                            (e.state = 'pending'),
                                (e.resolve = (a) =>
                                    'pending' !== e.state
                                        ? void 0
                                        : ((e.result = a), t(a instanceof Promise ? a : Promise.resolve(a).then((t) => ((e.state = 'fulfilled'), t))))),
                                (e.reject = (t) => {
                                    if ('pending' === e.state)
                                        return (
                                            queueMicrotask(() => {
                                                e.state = 'rejected';
                                            }),
                                            a((e.rejectionReason = t))
                                        );
                                });
                        };
                        return e;
                    })();
                    super((a, s) => {
                        t(a, s), e?.(t.resolve, t.reject);
                    }),
                        (this.#L = t),
                        (this.resolve = this.#L.resolve),
                        (this.reject = this.#L.reject);
                }
                get state() {
                    return this.#L.state;
                }
                get rejectionReason() {
                    return this.#L.rejectionReason;
                }
                then(e, t) {
                    return this.#q(super.then(e, t));
                }
                catch(e) {
                    return this.#q(super.catch(e));
                }
                finally(e) {
                    return this.#q(super.finally(e));
                }
                #q(e) {
                    return Object.defineProperties(e, { resolve: { configurable: !0, value: this.resolve }, reject: { configurable: !0, value: this.reject } });
                }
            };
        },
        78800: (e, t, a) => {
            a.d(t, { l: () => s });
            function s() {
                return new Response(null, { status: 302, statusText: 'Passthrough', headers: { 'x-msw-intention': 'passthrough' } });
            }
        },
        80781: (e, t, a) => {
            a.d(t, { qL: () => u, Aj: () => n, r_: () => l.t, bf: () => c });
            var s = a(74422),
                r = a(84693);
            Symbol('isPatchedModule');
            var i = class e extends Error {
                constructor(t) {
                    super(t), (this.name = 'InterceptorError'), Object.setPrototypeOf(this, e.prototype);
                }
            };
            function o(e, t) {
                let a = Object.getOwnPropertySymbols(t).find((t) => t.description === e);
                if (a) return Reflect.get(t, a);
            }
            (class e {
                static {
                    this.PENDING = 0;
                }
                static {
                    this.PASSTHROUGH = 1;
                }
                static {
                    this.RESPONSE = 2;
                }
                static {
                    this.ERROR = 3;
                }
                constructor(t, a) {
                    (this.request = t), (this.source = a), (this.readyState = e.PENDING), (this.handled = new s.Z());
                }
                get #z() {
                    return this.handled;
                }
                async passthrough() {
                    r.V1.as(
                        i,
                        this.readyState === e.PENDING,
                        'Failed to passthrough the "%s %s" request: the request has already been handled',
                        this.request.method,
                        this.request.url,
                    ),
                        (this.readyState = e.PASSTHROUGH),
                        await this.source.passthrough(),
                        this.#z.resolve();
                }
                respondWith(t) {
                    r.V1.as(
                        i,
                        this.readyState === e.PENDING,
                        'Failed to respond to the "%s %s" request with "%d %s": the request has already been handled (%d)',
                        this.request.method,
                        this.request.url,
                        t.status,
                        t.statusText || 'OK',
                        this.readyState,
                    ),
                        (this.readyState = e.RESPONSE),
                        this.#z.resolve(),
                        this.source.respondWith(t);
                }
                errorWith(t) {
                    r.V1.as(
                        i,
                        this.readyState === e.PENDING,
                        'Failed to error the "%s %s" request with "%s": the request has already been handled (%d)',
                        this.request.method,
                        this.request.url,
                        t?.toString(),
                        this.readyState,
                    ),
                        (this.readyState = e.ERROR),
                        this.source.errorWith(t),
                        this.#z.resolve();
                }
            });
            var n = class e extends Response {
                static {
                    this.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304];
                }
                static {
                    this.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308];
                }
                static isConfigurableStatusCode(e) {
                    return e >= 200 && e <= 599;
                }
                static isRedirectResponse(t) {
                    return e.STATUS_CODES_WITH_REDIRECT.includes(t);
                }
                static isResponseWithBody(t) {
                    return !e.STATUS_CODES_WITHOUT_BODY.includes(t);
                }
                static setUrl(e, t) {
                    if (
                        !e ||
                        'about:' === e ||
                        !(function (e) {
                            try {
                                return new URL(e), !0;
                            } catch (e) {
                                return !1;
                            }
                        })(e)
                    )
                        return;
                    let a = o('state', t);
                    a ? a.urlList.push(new URL(e)) : Object.defineProperty(t, 'url', { value: e, enumerable: !0, configurable: !0, writable: !1 });
                }
                static parseRawHeaders(e) {
                    let t = new Headers();
                    for (let a = 0; a < e.length; a += 2) t.append(e[a], e[a + 1]);
                    return t;
                }
                constructor(t, a = {}) {
                    let s = a.status ?? 200,
                        r = e.isConfigurableStatusCode(s) ? s : 200;
                    if ((super(e.isResponseWithBody(s) ? t : null, { status: r, statusText: a.statusText, headers: a.headers }), s !== r)) {
                        let e = o('state', this);
                        e ? (e.status = s) : Object.defineProperty(this, 'status', { value: s, enumerable: !0, configurable: !0, writable: !1 });
                    }
                    e.setUrl(a.url, this);
                }
            };
            Symbol('kRawRequest');
            var l = a(33099);
            new TextEncoder();
            var u = class e extends l.r {
                constructor(t) {
                    (e.symbol = Symbol(t.name)), super(e.symbol), (this.interceptors = t.interceptors);
                }
                setup() {
                    let e = this.logger.extend('setup');
                    for (let t of (e.info('applying all %d interceptors...', this.interceptors.length), this.interceptors))
                        e.info('applying "%s" interceptor...', t.constructor.name),
                            t.apply(),
                            e.info('adding interceptor dispose subscription'),
                            this.subscriptions.push(() => t.dispose());
                }
                on(e, t) {
                    for (let a of this.interceptors) a.on(e, t);
                    return this;
                }
                once(e, t) {
                    for (let a of this.interceptors) a.once(e, t);
                    return this;
                }
                off(e, t) {
                    for (let a of this.interceptors) a.off(e, t);
                    return this;
                }
                removeAllListeners(e) {
                    for (let t of this.interceptors) t.removeAllListeners(e);
                    return this;
                }
            };
            function c(e, t = !0) {
                return [t && e.origin, e.pathname].filter(Boolean).join('');
            }
        },
        83682: (e, t, a) => {
            a.d(t, { G: () => o, J: () => i });
            var s = a(84693);
            function r(e, ...t) {
                let a = (0, s.GP)(e, ...t);
                return `[MSW] ${a}`;
            }
            let i = {
                formatMessage: r,
                warn: function (e, ...t) {
                    console.warn(r(e, ...t));
                },
                error: function (e, ...t) {
                    console.error(r(e, ...t));
                },
            };
            class o extends Error {
                constructor(e) {
                    super(e), (this.name = 'InternalError');
                }
            }
        },
        84693: (e, t, a) => {
            a.d(t, { GP: () => r, V1: () => o });
            var s = /(%?)(%([sdijo]))/g;
            function r(e, ...t) {
                if (0 === t.length) return e;
                let a = 0,
                    i = e.replace(s, (e, s, r, i) => {
                        let o = (function (e, t) {
                            switch (t) {
                                case 's':
                                    return e;
                                case 'd':
                                case 'i':
                                    return Number(e);
                                case 'j':
                                    return JSON.stringify(e);
                                case 'o': {
                                    if ('string' == typeof e) return e;
                                    let t = JSON.stringify(e);
                                    if ('{}' === t || '[]' === t || /^\[object .+?\]$/.test(t)) return e;
                                    return t;
                                }
                            }
                        })(t[a], i);
                        return s ? e : (a++, o);
                    });
                return a < t.length && (i += ` ${t.slice(a).join(' ')}`), (i = i.replace(/%{2,2}/g, '%'));
            }
            var i = class extends Error {
                    constructor(e, ...t) {
                        super(e),
                            (this.message = e),
                            (this.name = 'Invariant Violation'),
                            (this.message = r(e, ...t)),
                            (function (e) {
                                if (!e.stack) return;
                                let t = e.stack.split('\n');
                                t.splice(1, 2), (e.stack = t.join('\n'));
                            })(this);
                    }
                },
                o = (e, t, ...a) => {
                    if (!e) throw new i(t, ...a);
                };
            o.as = (e, t, a, ...s) => {
                if (!t) {
                    let t,
                        i = 0 === s.length ? a : r(a, ...s);
                    try {
                        t = Reflect.construct(e, [i]);
                    } catch (a) {
                        t = e(i);
                    }
                    throw t;
                }
            };
        },
        89782: (e, t, a) => {
            a.d(t, { Tl: () => i, f4: () => n, fX: () => o });
            let { message: s } = a(38961).A,
                r = Symbol('kSetCookie');
            function i(e = {}) {
                let t = e?.status || 200,
                    a = e?.statusText || s[t] || '',
                    r = new Headers(e?.headers);
                return { ...e, headers: r, status: t, statusText: a };
            }
            function o(e, t) {
                t.type && Object.defineProperty(e, 'type', { value: t.type, enumerable: !0, writable: !1 });
                let a = t.headers.get('set-cookie');
                return a && Object.defineProperty(e, r, { value: a, enumerable: !1, writable: !1 }), e;
            }
            function n(e) {
                return Reflect.get(e, r);
            }
        },
        97660: (e, t, a) => {
            a.d(t, { A: () => s });
            let s = function (e) {
                return function (t, a, s) {
                    for (var r = -1, i = Object(t), o = s(t), n = o.length; n--; ) {
                        var l = o[e ? n : ++r];
                        if (!1 === a(i[l], l, i)) break;
                    }
                    return t;
                };
            };
        },
    },
]);
