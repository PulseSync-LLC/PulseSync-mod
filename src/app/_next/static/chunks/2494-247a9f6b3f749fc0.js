(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2494],
    {
        14567: (e, t) => {
            (e.exports = function (e, t, i, r) {
                return JSON.stringify(e, s(t, r), i);
            }).getSerialize = s;
            function s(e, t) {
                var s = [],
                    i = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return s[0] === t ? '[Circular ~]' : '[Circular ~.' + i.slice(0, s.indexOf(t)).join('.') + ']';
                        }),
                    function (r, n) {
                        if (s.length > 0) {
                            var a = s.indexOf(this);
                            (~a ? s.splice(a + 1) : s.push(this), ~a ? i.splice(a, 1 / 0, r) : i.push(r), ~s.indexOf(n) && (n = t.call(this, r, n)));
                        } else s.push(n);
                        return null == e ? n : e.call(this, r, n);
                    }
                );
            }
        },
        14965: (e, t, s) => {
            'use strict';
            s.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...n } = t,
                        a = e || 'Internal error';
                    (super(a, n), (this.message = a), (this.code = s), (this.data = r), (this.stack = Error(a).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        23877: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Q: () => r, c: () => i }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(i || (i = {})));
            let r = { [i.ERROR]: 'error', [i.WARNING]: 'warn', [i.INFO]: 'info', [i.DEBUG]: 'debug', [i.TRACE]: 'trace' };
        },
        44084: (e, t, s) => {
            'use strict';
            s.d(t, { r: () => n });
            var i = s(23877),
                r = s(74021);
            class n extends r.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= i.c.INFO && this.logToConsole(i.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= i.c.DEBUG && this.logToConsole(i.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= i.c.TRACE && this.logToConsole(i.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= i.c.WARNING && this.logToConsole(i.c.WARNING, e, t), this.sendToErrorBooster(i.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= i.c.ERROR && this.logToConsole(i.c.ERROR, e, t), this.sendToErrorBooster(i.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(i.c.INFO, e, t);
                }
                logToConsole(e, t, s) {
                    if (this.disableLogToConsole) return;
                    let r = i.Q[e];
                    console[r](...this.formatMessage(e, t, s));
                }
                sendToErrorBooster(e, t, s) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: s ? this.obfuscateData({ ...this.additionalData, ...s }) : {} } });
                }
            }
        },
        62837: (e, t, s) => {
            'use strict';
            s.d(t, { AS: () => h, Yw: () => i, JU: () => r, DQ: () => g, Ve: () => O });
            var i,
                r,
                n = s(43297),
                a = (function () {
                    function e(e) {
                        ((this.observableValue = (0, n.vP)(e)), (this.prevValueByListener = new Map()));
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
                            var s = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (r) {
                                    if (r !== s.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (s.prevValueByListener.set(e, r), e(r));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, n.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var s = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (r) {
                                if (r !== s.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (s.prevValueByListener.set(e, r), e(r));
                                }
                            })
                        );
                    }));
            })();
            var o = s(14965);
            class l extends o.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
            class c extends o.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
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
            })(i || (i = {}));
            let d = (e) => {
                    let t = [];
                    for (let s of e) {
                        let [e, i] = s.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class h {
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
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new a(null)),
                        (this.isLoadingObservable = new a(!1)),
                        (this.errorObservable = new a(null)),
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
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let s = u(e, t);
                    return (await Promise.all(s.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        s = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of s)
                        if (e) {
                            let t = i[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (i[e.disclaimerType] = t));
                        }
                    return i;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(r || (r = {}));
            let p = new Map([
                    [i.EXPLICIT_ICON, r.E],
                    [i.AGE_18_ICON, r.AGE_18],
                    [i.AGE_16_ICON, r.AGE_16],
                    [i.AGE_12_ICON, r.AGE_12],
                    [i.EXCLAMATION_ICON, r.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [i.SUBSTITUTED_ICON, r.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                b = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.SUBSTITUTED_ICON, i.EXCLAMATION_ICON],
                g = (e) => {
                    let t = ((e, t) => {
                        for (let s of t) {
                            let t = u(e, s)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, b);
                    if (null === t) return null;
                    let s = p.get(t.type);
                    return void 0 !== s ? s : null;
                },
                O = (e, t) => u(e, t).length > 0;
        },
        74021: (e, t, s) => {
            'use strict';
            s.d(t, { q: () => l });
            var i = s(14567),
                r = s(243),
                n = s(62151),
                a = s(33396);
            let o = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: s }) {
                    ((this.maxLogLevel = t), (this.secureFields = s), (this.additionalData = e));
                }
                formatMessage(e, t, s = {}, r) {
                    let n,
                        o = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, a.A)({ ...this.additionalData, ...s });
                    return (Object.keys(l).length && (n = this.obfuscateData(l)), r) ? `${o} ${i(n)}` : [o, n];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, r.A)(e, t) && (0, n.A)(e, t, o());
                    return e;
                }
            }
        },
        76903: (e, t, s) => {
            'use strict';
            s.d(t, { a: () => u });
            var i = s(88800),
                r = s(53548),
                n = s(53534),
                a = s(63582),
                o = s(245);
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
                    let s =
                        l.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                s = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                s();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (s(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
                                },
                            };
                        })();
                    (l.set(t, s), (this.queue = s));
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
            var d = s(87999);
            let u = (0, a.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let s = (0, o.N)(),
                        a = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, u] = (0, r.useState)(() => {
                            let e = new c(s.createScreenSession().screenViewUuid, s);
                            return { client: s, input: t, isReady: a, scope: a ? s.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== s ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let r = new c(s.createScreenSession().screenViewUuid, s),
                            o = { client: s, input: t, isReady: a, scope: a ? s.createScreenScope(t, r) : null, session: r };
                        return (u(o), (0, i.jsx)(n.k, { value: o, children: e }));
                    }
                    if (
                        l.isReady !== a ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...l, input: t, isReady: a, scope: a ? s.createScreenScope(t, l.session) : null };
                        return (u(r), (0, i.jsx)(n.k, { value: r, children: e }));
                    }
                    return (0, i.jsx)(n.k, { value: l, children: e });
                },
            );
        },
    },
]);
