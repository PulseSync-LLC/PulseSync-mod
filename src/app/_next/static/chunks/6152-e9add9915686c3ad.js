'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3771, 4245, 6152],
    {
        22413: (t, e, i) => {
            i.d(e, { Jt: () => o, TF: () => a, hZ: () => n });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (t) {
                        for (var e, i = 1, r = arguments.length; i < r; i++)
                            for (var s in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                        return t;
                    }).apply(this, arguments);
            };
            function s(t, e) {
                if (!e) return '';
                var i = '; ' + t;
                return !0 === e ? i : i + '=' + e;
            }
            function o(t) {
                return (function (t) {
                    for (var e = {}, i = t ? t.split('; ') : [], r = 0; r < i.length; r++) {
                        var s = i[r].split('='),
                            o = s.slice(1).join('=');
                        '"' === o[0] && (o = o.slice(1, -1));
                        try {
                            e[decodeURIComponent(s[0])] = o.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (t) {}
                    }
                    return e;
                })(document.cookie)[t];
            }
            function n(t, e, i) {
                var o;
                document.cookie =
                    ((o = r({ path: '/' }, i)),
                    encodeURIComponent(t)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (t) {
                            if ('number' == typeof t.expires) {
                                var e = new Date();
                                (e.setMilliseconds(e.getMilliseconds() + 864e5 * t.expires), (t.expires = e));
                            }
                            return (
                                s('Expires', t.expires ? t.expires.toUTCString() : '') +
                                s('Domain', t.domain) +
                                s('Path', t.path) +
                                s('Secure', t.secure) +
                                s('SameSite', t.sameSite)
                            );
                        })(o));
            }
            function a(t, e) {
                n(t, '', r(r({}, e), { expires: -1 }));
            }
        },
        30691: (t, e, i) => {
            function r() {
                throw Error('Cycle detected');
            }
            function s() {
                if (h > 1) h--;
                else {
                    for (var t, e = !1; void 0 !== a;) {
                        var i = a;
                        for (a = void 0, u++; void 0 !== i;) {
                            var r = i.o;
                            if (((i.o = void 0), (i.f &= -3), !(8 & i.f) && v(i)))
                                try {
                                    i.c();
                                } catch (i) {
                                    e || ((t = i), (e = !0));
                                }
                            i = r;
                        }
                    }
                    if (((u = 0), h--, e)) throw t;
                }
            }
            function o(t) {
                if (h > 0) return t();
                h++;
                try {
                    return t();
                } finally {
                    s();
                }
            }
            i.d(e, { EW: () => O, vA: () => o, vP: () => d });
            var n = void 0,
                a = void 0,
                h = 0,
                u = 0,
                l = 0;
            function c(t) {
                if (void 0 !== n) {
                    var e = t.n;
                    if (void 0 === e || e.t !== n)
                        return (
                            (e = { i: 0, S: t, p: n.s, n: void 0, t: n, e: void 0, x: void 0, r: e }),
                            void 0 !== n.s && (n.s.n = e),
                            (n.s = e),
                            (t.n = e),
                            32 & n.f && t.S(e),
                            e
                        );
                    if (-1 === e.i)
                        return ((e.i = 0), void 0 !== e.n && ((e.n.p = e.p), void 0 !== e.p && (e.p.n = e.n), (e.p = n.s), (e.n = void 0), (n.s.n = e), (n.s = e)), e);
                }
            }
            function f(t) {
                ((this.v = t), (this.i = 0), (this.n = void 0), (this.t = void 0));
            }
            function d(t) {
                return new f(t);
            }
            function v(t) {
                for (var e = t.s; void 0 !== e; e = e.n) if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
                return !1;
            }
            function p(t) {
                for (var e = t.s; void 0 !== e; e = e.n) {
                    var i = e.S.n;
                    if ((void 0 !== i && (e.r = i), (e.S.n = e), (e.i = -1), void 0 === e.n)) {
                        t.s = e;
                        break;
                    }
                }
            }
            function E(t) {
                for (var e = t.s, i = void 0; void 0 !== e;) {
                    var r = e.p;
                    (-1 === e.i ? (e.S.U(e), void 0 !== r && (r.n = e.n), void 0 !== e.n && (e.n.p = r)) : (i = e),
                        (e.S.n = e.r),
                        void 0 !== e.r && (e.r = void 0),
                        (e = r));
                }
                t.s = i;
            }
            function y(t) {
                (f.call(this, void 0), (this.x = t), (this.s = void 0), (this.g = l - 1), (this.f = 4));
            }
            function O(t) {
                return new y(t);
            }
            function _(t) {
                var e = t.u;
                if (((t.u = void 0), 'function' == typeof e)) {
                    h++;
                    var i = n;
                    n = void 0;
                    try {
                        e();
                    } catch (e) {
                        throw ((t.f &= -2), (t.f |= 8), I(t), e);
                    } finally {
                        ((n = i), s());
                    }
                }
            }
            function I(t) {
                for (var e = t.s; void 0 !== e; e = e.n) e.S.U(e);
                ((t.x = void 0), (t.s = void 0), _(t));
            }
            function b(t) {
                if (n !== this) throw Error('Out-of-order effect');
                (E(this), (n = t), (this.f &= -2), 8 & this.f && I(this), s());
            }
            function A(t) {
                ((this.x = t), (this.u = void 0), (this.s = void 0), (this.o = void 0), (this.f = 32));
            }
            ((f.prototype.h = function () {
                return !0;
            }),
                (f.prototype.S = function (t) {
                    this.t !== t && void 0 === t.e && ((t.x = this.t), void 0 !== this.t && (this.t.e = t), (this.t = t));
                }),
                (f.prototype.U = function (t) {
                    if (void 0 !== this.t) {
                        var e = t.e,
                            i = t.x;
                        (void 0 !== e && ((e.x = i), (t.e = void 0)), void 0 !== i && ((i.e = e), (t.x = void 0)), t === this.t && (this.t = i));
                    }
                }),
                (f.prototype.subscribe = function (t) {
                    var e = this,
                        i = function () {
                            var i = e.value,
                                r = 32 & this.f;
                            this.f &= -33;
                            try {
                                t(i);
                            } finally {
                                this.f |= r;
                            }
                        },
                        r = new A(i);
                    try {
                        r.c();
                    } catch (t) {
                        throw (r.d(), t);
                    }
                    return r.d.bind(r);
                }),
                (f.prototype.valueOf = function () {
                    return this.value;
                }),
                (f.prototype.toString = function () {
                    return this.value + '';
                }),
                (f.prototype.toJSON = function () {
                    return this.value;
                }),
                (f.prototype.peek = function () {
                    return this.v;
                }),
                Object.defineProperty(f.prototype, 'value', {
                    get: function () {
                        var t = c(this);
                        return (void 0 !== t && (t.i = this.i), this.v);
                    },
                    set: function (t) {
                        if (
                            (n instanceof y &&
                                (function () {
                                    throw Error('Computed cannot have side-effects');
                                })(),
                            t !== this.v)
                        ) {
                            (u > 100 && r(), (this.v = t), this.i++, l++, h++);
                            try {
                                for (var e = this.t; void 0 !== e; e = e.x) e.t.N();
                            } finally {
                                s();
                            }
                        }
                    },
                }),
                ((y.prototype = new f()).h = function () {
                    if (((this.f &= -3), 1 & this.f)) return !1;
                    if (32 == (36 & this.f) || ((this.f &= -5), this.g === l)) return !0;
                    if (((this.g = l), (this.f |= 1), this.i > 0 && !v(this))) return ((this.f &= -2), !0);
                    var t = n;
                    try {
                        (p(this), (n = this));
                        var e = this.x();
                        (16 & this.f || this.v !== e || 0 === this.i) && ((this.v = e), (this.f &= -17), this.i++);
                    } catch (t) {
                        ((this.v = t), (this.f |= 16), this.i++);
                    }
                    return ((n = t), E(this), (this.f &= -2), !0);
                }),
                (y.prototype.S = function (t) {
                    if (void 0 === this.t) {
                        this.f |= 36;
                        for (var e = this.s; void 0 !== e; e = e.n) e.S.S(e);
                    }
                    f.prototype.S.call(this, t);
                }),
                (y.prototype.U = function (t) {
                    if (void 0 !== this.t && (f.prototype.U.call(this, t), void 0 === this.t)) {
                        this.f &= -33;
                        for (var e = this.s; void 0 !== e; e = e.n) e.S.U(e);
                    }
                }),
                (y.prototype.N = function () {
                    if (!(2 & this.f)) {
                        this.f |= 6;
                        for (var t = this.t; void 0 !== t; t = t.x) t.t.N();
                    }
                }),
                (y.prototype.peek = function () {
                    if ((this.h() || r(), 16 & this.f)) throw this.v;
                    return this.v;
                }),
                Object.defineProperty(y.prototype, 'value', {
                    get: function () {
                        1 & this.f && r();
                        var t = c(this);
                        if ((this.h(), void 0 !== t && (t.i = this.i), 16 & this.f)) throw this.v;
                        return this.v;
                    },
                }),
                (A.prototype.c = function () {
                    var t = this.S();
                    try {
                        if (8 & this.f || void 0 === this.x) return;
                        var e = this.x();
                        'function' == typeof e && (this.u = e);
                    } finally {
                        t();
                    }
                }),
                (A.prototype.S = function () {
                    (1 & this.f && r(), (this.f |= 1), (this.f &= -9), _(this), p(this), h++);
                    var t = n;
                    return ((n = this), b.bind(this, t));
                }),
                (A.prototype.N = function () {
                    2 & this.f || ((this.f |= 2), (this.o = a), (a = this));
                }),
                (A.prototype.d = function () {
                    ((this.f |= 8), 1 & this.f || I(this));
                }));
        },
        59126: (t, e, i) => {
            i.d(e, { t: () => r });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...o } = e,
                        n = t || 'Internal error';
                    (super(n, o), (this.message = n), (this.code = i), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        74245: (t, e, i) => {
            i.d(e, { AS: () => f, Yw: () => r, JU: () => s, DQ: () => p, Ve: () => E });
            var r,
                s,
                o = i(30691),
                n = (function () {
                    function t(t) {
                        ((this.observableValue = (0, o.vP)(t)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(t.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (t) {
                                this.observableValue.value = t;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.onChange = function (t, e) {
                            var i = this;
                            void 0 === e && (e = { skipFirstChange: !1 });
                            var r = !0;
                            return (
                                this.prevValueByListener.has(t) || this.prevValueByListener.set(t, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== i.prevValueByListener.get(t)) {
                                        if (e.skipFirstChange && r) {
                                            r = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(t, s), t(s));
                                    }
                                })
                            );
                        }),
                        t
                    );
                })();
            !(function () {
                function t(t) {
                    ((this.observableValue = (0, o.EW)(t)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(t.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (t.prototype.onChange = function (t, e) {
                        var i = this;
                        void 0 === e && (e = { skipFirstChange: !1 });
                        var r = !0;
                        return (
                            this.prevValueByListener.has(t) || this.prevValueByListener.set(t, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== i.prevValueByListener.get(t)) {
                                    if (e.skipFirstChange && r) {
                                        r = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(t, s), t(s));
                                }
                            })
                        );
                    }));
            })();
            var a = i(59126);
            class h extends a.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(t) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: t, data: { valueType: typeof t } }),
                        Object.setPrototypeOf(this, h.prototype));
                }
            }
            class u extends a.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(t, e) {
                    (super(`Disclaimer with id "${t}" not found${e ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: t, retryAttempted: e },
                    }),
                        (this.disclaimerId = t),
                        (this.retryAttempted = e),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(r || (r = {}));
            let l = (t) => {
                    let e = [];
                    for (let i of t) {
                        let [t, r] = i.split(':');
                        t && r && e.push({ type: t, id: r });
                    }
                    return e;
                },
                c = (t, e) => l(t).filter((t) => t.type === e);
            class f {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(t) {
                    ((this.dataSource = t.dataSource),
                        (this.itemsObservable = new n(null)),
                        (this.isLoadingObservable = new n(!1)),
                        (this.errorObservable = new n(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let t = this.dataSource
                        .loadAll()
                        .then((t) => {
                            this.isDestroyed || ((this.itemsObservable.value = t), (this.isLoadingObservable.value = !1));
                        })
                        .catch((t) => {
                            let e = t instanceof Error ? t : new h(t);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = e), (this.isLoadingObservable.value = !1)), e);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = t), await t);
                }
                async getById(t) {
                    let e = this.findItemById(t);
                    return e || (await this.load(), this.findItemById(t));
                }
                async getByIdOrThrow(t) {
                    let e = await this.getById(t);
                    if (void 0 !== e) return e;
                    throw new u(t, !0);
                }
                async resolveByType(t, e) {
                    let i = c(t, e);
                    return (await Promise.all(i.map(async (t) => await this.getById(t.id)))).filter((t) => void 0 !== t);
                }
                async resolveAll(t) {
                    let e = l(t),
                        i = await Promise.all(
                            e.map(async (t) => {
                                let e = await this.getById(t.id);
                                return void 0 === e ? null : { disclaimerItem: e, disclaimerType: t.type };
                            }),
                        ),
                        r = {};
                    for (let t of i)
                        if (t) {
                            let e = r[t.disclaimerType] ?? [];
                            (e.push(t.disclaimerItem), (r[t.disclaimerType] = e));
                        }
                    return r;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(t) {
                    let e = this.itemsObservable.value;
                    if (null !== e) return e.find((e) => e.id === t);
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(s || (s = {}));
            let d = new Map([
                    [r.EXPLICIT_ICON, s.E],
                    [r.AGE_18_ICON, s.AGE_18],
                    [r.AGE_16_ICON, s.AGE_16],
                    [r.AGE_12_ICON, s.AGE_12],
                    [r.EXCLAMATION_ICON, s.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [r.SUBSTITUTED_ICON, s.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                v = [r.EXPLICIT_ICON, r.AGE_18_ICON, r.AGE_16_ICON, r.AGE_12_ICON, r.SUBSTITUTED_ICON, r.EXCLAMATION_ICON],
                p = (t) => {
                    let e = ((t, e) => {
                        for (let i of e) {
                            let e = c(t, i)[0];
                            if (e) return e;
                        }
                        return null;
                    })(t, v);
                    if (null === e) return null;
                    let i = d.get(e.type);
                    return void 0 !== i ? i : null;
                },
                E = (t, e) => c(t, e).length > 0;
        },
        76481: (t, e, i) => {
            i.d(e, { m: () => s });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...o } = e,
                        n = t || 'Internal error';
                    (super(n, o), (this.message = n), (this.code = i), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class s extends r {
                name = 'HttpException';
                constructor(t = 'Http Client error', { code: e = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(t, { code: e, ...i }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        77920: (t, e, i) => {
            var r;
            (i.d(e, { X: () => r }),
                (function (t) {
                    ((t[(t.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (t[(t.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (t[(t.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (t[(t.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (t[(t.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (t[(t.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        91626: (t, e, i) => {
            (i.d(e, { G: () => s }), i(77920));
            var r = i(76481);
            class s extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(t, e) {
                    (super(t, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: e.cause }),
                        (this.statusCode = e.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        93690: (t, e, i) => {
            i.d(e, { GX: () => o.G, X1: () => r.X, m5: () => s.m });
            var r = i(77920),
                s = i(76481),
                o = i(91626);
            i(95919);
        },
        95919: (t, e, i) => {
            var r;
            (i.d(e, { Z: () => r }),
                (function (t) {
                    ((t.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (t.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (t.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (t.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (t.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
    },
]);
