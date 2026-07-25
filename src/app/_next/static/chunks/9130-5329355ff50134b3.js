(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1410, 6252, 9130],
    {
        1987: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    bindSnapshot: function () {
                        return o;
                    },
                    createAsyncLocalStorage: function () {
                        return a;
                    },
                    createSnapshot: function () {
                        return s;
                    },
                });
            let r = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class n {
                disable() {
                    throw r;
                }
                getStore() {}
                run() {
                    throw r;
                }
                exit() {
                    throw r;
                }
                enterWith() {
                    throw r;
                }
                static bind(e) {
                    return e;
                }
            }
            let i = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function a() {
                return i ? new i() : new n();
            }
            function o(e) {
                return i ? i.bind(e) : n.bind(e);
            }
            function s() {
                return i
                    ? i.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        26252: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => p, Yw: () => n, JU: () => i, DQ: () => g, Ve: () => b });
            var n,
                i,
                a = r(98411),
                o = (function () {
                    function e(e) {
                        (this.observableValue = (0, a.vP)(e)), (this.prevValueByListener = new Map());
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var r = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var n = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (i) {
                                    if (i !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && n) {
                                            n = !1;
                                            return;
                                        }
                                        r.prevValueByListener.set(e, i), e(i);
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    (this.observableValue = (0, a.EW)(e)), (this.prevValueByListener = new Map());
                }
                Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var n = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (i) {
                                if (i !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && n) {
                                        n = !1;
                                        return;
                                    }
                                    r.prevValueByListener.set(e, i), e(i);
                                }
                            })
                        );
                    });
            })();
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: n = {}, ...i } = t,
                        a = e || 'Internal error';
                    super(a, i), (this.message = a), (this.code = r), (this.data = n), (this.stack = Error(a).stack), Object.setPrototypeOf(this, s.prototype);
                }
            }
            class l extends s {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, l.prototype);
                }
            }
            class u extends s {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, u.prototype);
                }
            }
            !(function (e) {
                (e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'),
                    (e.SUBSTITUTED_ICON = 'substitutedIcon');
            })(n || (n = {}));
            let c = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, n] = r.split(':');
                        e && n && t.push({ type: e, id: n });
                    }
                    return t;
                },
                d = (e, t) => c(e).filter((e) => e.type === t);
            class p {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    (this.dataSource = e.dataSource),
                        (this.itemsObservable = new o(null)),
                        (this.isLoadingObservable = new o(!1)),
                        (this.errorObservable = new o(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable);
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    (this.isLoadingObservable.value = !0), (this.errorObservable.value = null);
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new l(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    (this.loadingPromise = e), await e;
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new u(e, !0);
                }
                async resolveByType(e, t) {
                    let r = d(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = c(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        n = {};
                    for (let e of r)
                        if (e) {
                            let t = n[e.disclaimerType] ?? [];
                            t.push(e.disclaimerItem), (n[e.disclaimerType] = t);
                        }
                    return n;
                }
                destroy() {
                    (this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null);
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                (e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'), (e.SUBSTITUTED = 'substituted');
            })(i || (i = {}));
            let f = new Map([
                    [n.EXPLICIT_ICON, i.E],
                    [n.AGE_18_ICON, i.AGE_18],
                    [n.AGE_16_ICON, i.AGE_16],
                    [n.AGE_12_ICON, i.AGE_12],
                    [n.EXCLAMATION_ICON, i.EXCLAMATION],
                    [n.SUBSTITUTED_ICON, i.SUBSTITUTED],
                ]),
                h = [n.EXPLICIT_ICON, n.AGE_18_ICON, n.AGE_16_ICON, n.AGE_12_ICON, n.SUBSTITUTED_ICON, n.EXCLAMATION_ICON],
                g = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = d(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let r = f.get(t.type);
                    return void 0 !== r ? r : null;
                },
                b = (e, t) => d(e, t).length > 0;
        },
        40199: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return n.workAsyncStorageInstance;
                    },
                });
            let n = r(89957);
        },
        40363: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => o });
            var n = r(52544),
                i = Object.defineProperty,
                a = (e, t, r) => (
                    ((e, t, r) => (t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)))(e, 'symbol' != typeof t ? t + '' : t, r),
                    r
                );
            class o {
                constructor({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: t }) {
                    a(this, 'brandLangs'),
                        a(this, 'brandDefaultLang'),
                        a(this, 'regionLangs'),
                        a(this, 'enableWideLanguageSelectWithBrandLangs'),
                        (this.brandLangs = e.langs),
                        (this.brandDefaultLang = e.defaultLang),
                        (this.regionLangs = e.regionLangs),
                        (this.enableWideLanguageSelectWithBrandLangs = t);
                }
                static parseAcceptLanguage(e) {
                    return n.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: r, acceptLangs: n }) {
                    var i, a, o;
                    let s = e ? (null == (i = this.regionLangs) ? void 0 : i[e]) : void 0,
                        l = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (a = null == s ? void 0 : s.langs) ? a : this.brandLangs,
                        u = null != (o = null == s ? void 0 : s.defaultLang) ? o : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: l, defaultLang: u, urlLang: t, cookieLang: r, acceptLangs: n });
                }
                intersect(e, t) {
                    let r = new Set(t);
                    return e.filter((e) => r.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: r, cookieLang: n, acceptLangs: i }) {
                    if ('string' == typeof r && e.includes(r)) return r;
                    let a = null != i ? i : [],
                        o = n ? [n, ...a] : a,
                        s = this.intersect(o, e)[0];
                    return void 0 !== s ? s : t;
                }
            }
        },
        46456: (e, t, r) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(32290),
                r(51767),
                r(40199),
                r(15406);
        },
        52544: (e) => {
            var t = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
            function r(e) {
                return (e || '')
                    .match(t)
                    .map(function (e) {
                        if (e) {
                            var t = e.split(';'),
                                r = t[0].split('-'),
                                n = 3 === r.length;
                            return { code: r[0], script: n ? r[1] : null, region: n ? r[2] : r[1], quality: t[1] ? parseFloat(t[1].split('=')[1]) : 1 };
                        }
                    })
                    .filter(function (e) {
                        return e;
                    })
                    .sort(function (e, t) {
                        return t.quality - e.quality;
                    });
            }
            (e.exports.parse = r),
                (e.exports.pick = function (e, t, n) {
                    if (((n = n || {}), !e || !e.length || !t)) return null;
                    'string' == typeof t && (t = r(t));
                    for (
                        var i = e.map(function (e) {
                                var t = e.split('-'),
                                    r = 3 === t.length;
                                return { code: t[0], script: r ? t[1] : null, region: r ? t[2] : t[1] };
                            }),
                            a = 0;
                        a < t.length;
                        a++
                    )
                        for (
                            var o = t[a],
                                s = o.code.toLowerCase(),
                                l = o.region ? o.region.toLowerCase() : o.region,
                                u = o.script ? o.script.toLowerCase() : o.script,
                                c = 0;
                            c < i.length;
                            c++
                        ) {
                            var d = i[c].code.toLowerCase(),
                                p = i[c].script ? i[c].script.toLowerCase() : i[c].script,
                                f = i[c].region ? i[c].region.toLowerCase() : i[c].region;
                            if (s === d && (n.loose || !u || u === p) && (n.loose || !l || l === f)) return e[c];
                        }
                    return null;
                });
        },
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        63397: (e, t, r) => {
            'use strict';
            function n(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(82105);
        },
        64910: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let n = r(32290),
                i = r(55178),
                a = r(63397);
            function o(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(46456);
            let s = { loader: () => Promise.resolve(o(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...s, ...e },
                        r = (0, i.lazy)(() => t.loader().then(o)),
                        l = t.loading;
                    function u(e) {
                        let o = l ? (0, n.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            u = s ? i.Suspense : i.Fragment,
                            c = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(r, { ...e })] })
                                : (0, n.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(r, { ...e }) });
                        return (0, n.jsx)(u, { ...(s ? { fallback: o } : {}), children: c });
                    }
                    return (u.displayName = 'LoadableComponent'), u;
                };
        },
        65493: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => i.a });
            var n = r(95574),
                i = r.n(n);
        },
        78061: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => a, TF: () => s, hZ: () => o });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function a(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var i = r[n].split('='),
                            a = i.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function o(e, t, r) {
                var a;
                document.cookie =
                    ((a = n({ path: '/' }, r)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t);
                            }
                            return (
                                i('Expires', e.expires ? e.expires.toUTCString() : '') +
                                i('Domain', e.domain) +
                                i('Path', e.path) +
                                i('Secure', e.secure) +
                                i('SameSite', e.sameSite)
                            );
                        })(a));
            }
            function s(e, t) {
                o(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        89957: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
            let n = (0, r(1987).createAsyncLocalStorage)();
        },
        95574: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
            let n = r(33399)._(r(64910));
            function i(e, t) {
                var r;
                let i = {};
                'function' == typeof e && (i.loader = e);
                let a = { ...i, ...t };
                return (0, n.default)({ ...a, modules: null == (r = a.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        99029: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => O }), r(40363);
            function n(e, t, r) {
                return (t = o(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function i(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                i,
                                a,
                                o,
                                s = [],
                                l = !0,
                                u = !1;
                            try {
                                if (((a = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0);
                            } catch (e) {
                                (u = !0), (i = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((o = r.return()), Object(o) !== o)) return;
                                } finally {
                                    if (u) throw i;
                                }
                            }
                            return s;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return a(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function o(e) {
                var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || 'default');
                        if ('object' != typeof n) return n;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === t ? String : Number)(e);
                })(e, 'string');
                return 'symbol' == typeof t ? t : String(t);
            }
            function s(e, t) {
                var r,
                    n,
                    i = u(e, t, 'get');
                return (r = e), (n = i).get ? n.get.call(r) : n.value;
            }
            function l(e, t, r) {
                var n = u(e, t, 'set');
                return (
                    (function (e, t, r) {
                        if (t.set) t.set.call(e, r);
                        else {
                            if (!t.writable) throw TypeError('attempted to set read only private field');
                            t.value = r;
                        }
                    })(e, n, r),
                    r
                );
            }
            function u(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
                return t.get(e);
            }
            function c(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return r;
            }
            function d(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function p(e, t, r) {
                d(e, t), t.set(e, r);
            }
            function f(e, t) {
                d(e, t), t.add(e);
            }
            var h = [
                ' daum[ /]',
                ' deusu/',
                ' yadirectfetcher',
                '(?:^| )site',
                '(?:^|[^g])news',
                '@[a-z]',
                '\\(at\\)[a-z]',
                '\\(github\\.com/',
                '\\[at\\][a-z]',
                '^12345',
                '^<',
                '^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$',
                '^[^ ]{50,}$',
                '^active',
                '^ad muncher',
                '^amaya',
                '^anglesharp/',
                '^anonymous',
                '^avsdevicesdk/',
                '^axios/',
                '^bidtellect/',
                '^biglotron',
                '^btwebclient/',
                '^castro',
                '^clamav[ /]',
                '^client/',
                '^cobweb/',
                '^coccoc',
                '^custom',
                '^ddg[_-]android',
                '^discourse',
                '^dispatch/\\d',
                '^downcast/',
                '^duckduckgo',
                '^facebook',
                '^fdm[ /]\\d',
                '^getright/',
                '^gozilla/',
                '^hatena',
                '^hobbit',
                '^hotzonu',
                '^hwcdn/',
                '^jeode/',
                '^jetty/',
                '^jigsaw',
                '^linkdex',
                '^lwp[-: ]',
                '^metauri',
                '^microsoft bits',
                '^movabletype',
                '^mozilla/\\d\\.\\d \\(compatible;?\\)$',
                '^mozilla/\\d\\.\\d \\w*$',
                '^navermailapp',
                '^netsurf',
                '^offline explorer',
                '^php',
                '^postman',
                '^postrank',
                '^python',
                '^read',
                '^reed',
                '^restsharp/',
                '^snapchat',
                '^space bison',
                '^svn',
                '^swcd ',
                '^taringa',
                '^test certificate info',
                '^thumbor/',
                '^tumblr/',
                '^user-agent:mozilla',
                '^valid',
                '^venus/fedoraplanet',
                '^w3c',
                '^webbandit/',
                '^webcopier',
                '^wget',
                '^whatsapp',
                '^xenu link sleuth',
                '^yahoo',
                '^yandex',
                '^zdm/\\d',
                '^zoom marketplace/',
                '^{{.*}}$',
                'adbeat\\.com',
                'appinsights',
                'archive',
                'ask jeeves/teoma',
                'bit\\.ly/',
                'bluecoat drtr',
                'bot',
                'browsex',
                'burpcollaborator',
                'capture',
                'catch',
                'check',
                'chrome-lighthouse',
                'chromeframe',
                'cloud',
                'crawl',
                'cryptoapi',
                'dareboost',
                'datanyze',
                'dataprovider',
                'dejaclick',
                'dmbrowser',
                'download',
                'evc-batch/',
                'feed',
                'firephp',
                'freesafeip',
                'gomezagent',
                'google',
                'headlesschrome/',
                'http',
                'httrack',
                'hubspot marketing grader',
                'hydra',
                'ibisbrowser',
                'images',
                'inspect',
                'iplabel',
                'ips-agent',
                'java',
                'library',
                'mail\\.ru/',
                'manager',
                'monitor',
                'morningscore/',
                'neustar wpm',
                'nutch',
                'offbyone',
                'optimize',
                'pageburst',
                'pagespeed',
                'perl',
                'phantom',
                'pingdom',
                'powermarks',
                'preview',
                'proxy',
                'ptst[ /]\\d',
                'reader',
                'rexx;',
                'rigor',
                'rss',
                'scan',
                'scrape',
                'search',
                'serp ?reputation ?management',
                'server',
                'sogou',
                'sparkler/',
                'speedcurve',
                'spider',
                'splash',
                'statuscake',
                'stumbleupon\\.com',
                'supercleaner',
                'synapse',
                'synthetic',
                'torrent',
                'tracemyfile',
                'transcoder',
                'trendsmapresolver',
                'twingly recon',
                'url',
                'virtuoso',
                'wappalyzer',
                'webglance',
                'webkit2png',
                'websitemetadataretriever',
                'whatcms/',
                'wordpress',
                'zgrab',
            ];
            !(function (e) {
                try {
                    RegExp('(?<! cu)bot').test('dangerbot');
                } catch (t) {
                    return e;
                }
                [
                    ['bot', '(?<! cu)bot'],
                    ['google', '(?<! (?:channel/|google/))google(?!(app|/google| pixel))'],
                    ['http', '(?<!(?:lib))http'],
                    ['java', 'java(?!;)'],
                    ['search', '(?<! ya(?:yandex)?)search'],
                ].forEach(function (t) {
                    var r = i(t, 2),
                        n = r[0],
                        a = r[1],
                        o = e.lastIndexOf(n);
                    ~o && e.splice(o, 1, a);
                });
            })(h);
            var g = new WeakMap(),
                b = new WeakMap(),
                v = new WeakSet(),
                y = new WeakSet();
            function m() {
                l(this, b, RegExp(s(this, g).join('|'), 'i'));
            }
            function w(e) {
                return s(this, g).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var r = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        f(this, y),
                        f(this, v),
                        p(this, g, { writable: !0, value: void 0 }),
                        p(this, b, { writable: !0, value: void 0 }),
                        l(this, g, e || h.slice()),
                        c(this, v, m).call(this),
                        Object.defineProperties(
                            function (e) {
                                return r.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var a = i(t, 2),
                                    o = a[0],
                                    s = a[1];
                                return (
                                    'function' == typeof s.value && Object.assign(e, n({}, o, { value: r[o].bind(r) })),
                                    'function' == typeof s.get &&
                                        Object.assign(
                                            e,
                                            n({}, o, {
                                                get: function () {
                                                    return r[o];
                                                },
                                            }),
                                        ),
                                    e
                                );
                            }, {}),
                        )
                    );
                }
                return (
                    (e = [
                        {
                            key: 'pattern',
                            get: function () {
                                return new RegExp(s(this, b));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && s(this, b).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(s(this, b));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return s(this, g).filter(function (t) {
                                    return RegExp(t, 'i').test(e);
                                });
                            },
                        },
                        {
                            key: 'clear',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                this.exclude(this.matches(e));
                            },
                        },
                        {
                            key: 'extend',
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                [].push.apply(
                                    s(this, g),
                                    t
                                        .filter(function (t) {
                                            return -1 === c(e, y, w).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    c(this, v, m).call(this);
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--; ) {
                                    var r = c(this, y, w).call(this, e[t]);
                                    r > -1 && s(this, g).splice(r, 1);
                                }
                                c(this, v, m).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || s(this, g));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, o(n.key), n);
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let O = 'funtech-lang';
        },
    },
]);
