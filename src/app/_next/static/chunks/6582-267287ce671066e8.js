(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2494, 3810, 6551, 6582, 7277, 8932, 9498],
    {
        7833: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => c });
            var i = s(88800),
                o = s(53548),
                r = s(63582),
                n = s(99875),
                a = s(66109),
                l = s(245);
            let c = (0, r.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: s, objectPosY: r, objectType: c }) => {
                    let d = (0, l.N)(),
                        u = (0, o.useContext)(n.p)?.loadedSession,
                        p = [c, t, s, r].join(':'),
                        [h, b] = (0, o.useState)(() => ({ client: d, identity: p, blockSession: u, viewSession: d.createBlockViewSession() }));
                    (h.client !== d || h.identity !== p || h.blockSession !== u) &&
                        b({ client: d, identity: p, blockSession: u, viewSession: d.createBlockViewSession() });
                    let v = (0, o.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: s, objectPosY: r, objectType: c }, viewSession: h.viewSession }),
                        [t, s, r, c, h.viewSession],
                    );
                    return (0, i.jsx)(a.l, { value: v, children: e });
                },
            );
        },
        14567: (e, t) => {
            (e.exports = function (e, t, i, o) {
                return JSON.stringify(e, s(t, o), i);
            }).getSerialize = s;
            function s(e, t) {
                var s = [],
                    i = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return s[0] === t ? '[Circular ~]' : '[Circular ~.' + i.slice(0, s.indexOf(t)).join('.') + ']';
                        }),
                    function (o, r) {
                        if (s.length > 0) {
                            var n = s.indexOf(this);
                            (~n ? s.splice(n + 1) : s.push(this), ~n ? i.splice(n, 1 / 0, o) : i.push(o), ~s.indexOf(r) && (r = t.call(this, o, r)));
                        } else s.push(r);
                        return null == e ? r : e.call(this, o, r);
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
                    let { code: s = 'E_INTERNAL', data: o = {}, ...r } = t,
                        n = e || 'Internal error';
                    (super(n, r), (this.message = n), (this.code = s), (this.data = o), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        23877: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Q: () => o, c: () => i }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(i || (i = {})));
            let o = { [i.ERROR]: 'error', [i.WARNING]: 'warn', [i.INFO]: 'info', [i.DEBUG]: 'debug', [i.TRACE]: 'trace' };
        },
        37523: (e, t, s) => {
            'use strict';
            s.d(t, { F: () => d });
            var i = s(88800),
                o = s(53548),
                r = s(63582),
                n = s(53534),
                a = s(99875),
                l = s(245);
            let c = (e, t, s) => {
                    let i = e.createBlockViewSession(),
                        o = !1;
                    return { claimLoadedSession: () => (o ? null : ((o = !0), i)), client: e, identity: t, loadedSession: i, screenSession: s };
                },
                d = (0, r.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: s, blockPosY: r, blockType: d, children: u, objectsCount: p }) => {
                        let h = (0, l.N)(),
                            b = (0, o.useContext)(n.k)?.session,
                            v = [e, d, s, r].join(':'),
                            [g, f] = (0, o.useState)(() => c(h, v, b));
                        (g.client !== h || g.identity !== v || g.screenSession !== b) && f(c(h, v, b));
                        let m = (0, o.useMemo)(
                            () => ({
                                claimLoadedSession: g.claimLoadedSession,
                                loadedSession: g.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: s, blockPosY: r, blockType: d, objectsCount: p },
                            }),
                            [e, t, s, r, d, p, g.claimLoadedSession, g.loadedSession],
                        );
                        return (0, i.jsx)(a.p, { value: m, children: u });
                    },
                );
        },
        44084: (e, t, s) => {
            'use strict';
            s.d(t, { r: () => r });
            var i = s(23877),
                o = s(74021);
            class r extends o.q {
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
                    let o = i.Q[e];
                    console[o](...this.formatMessage(e, t, s));
                }
                sendToErrorBooster(e, t, s) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: s ? this.obfuscateData({ ...this.additionalData, ...s }) : {} } });
                }
            }
        },
        49784: (e, t, s) => {
            'use strict';
            s.d(t, { W: () => l });
            var i = s(53548),
                o = s(63582),
                r = s(89846),
                n = s(245),
                a = s(22681);
            let l = (0, o.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, i.useRef)(!1),
                    s = (0, n.N)(),
                    { hash: o } = (0, r.g)(),
                    l = (0, a.w)(),
                    c = (0, i.useMemo)(() => (l ? s.createBlockReporter(l.snapshot) : null), [s, l]);
                (0, i.useEffect)(() => {
                    e && l && c && !t.current && c.loaded({ objectsCount: l.snapshot.block.objectsCount, viewUuid: l.block.loadedSession.start() }) && (t.current = !0);
                }, [e, o, c, l]);
            });
        },
        62837: (e, t, s) => {
            'use strict';
            s.d(t, { AS: () => p, Yw: () => i, JU: () => o, DQ: () => v, Ve: () => g });
            var i,
                o,
                r = s(43297),
                n = (function () {
                    function e(e) {
                        ((this.observableValue = (0, r.vP)(e)), (this.prevValueByListener = new Map()));
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
                                this.observableValue.subscribe(function (o) {
                                    if (o !== s.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (s.prevValueByListener.set(e, o), e(o));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, r.EW)(e)), (this.prevValueByListener = new Map()));
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
                            this.observableValue.subscribe(function (o) {
                                if (o !== s.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (s.prevValueByListener.set(e, o), e(o));
                                }
                            })
                        );
                    }));
            })();
            var a = s(14965);
            class l extends a.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
            class c extends a.t {
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
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'));
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
                    ((this.dataSource = e.dataSource),
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
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'));
            })(o || (o = {}));
            let h = new Map([
                    [i.EXPLICIT_ICON, o.E],
                    [i.AGE_18_ICON, o.AGE_18],
                    [i.AGE_16_ICON, o.AGE_16],
                    [i.AGE_12_ICON, o.AGE_12],
                    [i.EXCLAMATION_ICON, o.EXCLAMATION],
                ]),
                b = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.EXCLAMATION_ICON],
                v = (e) => {
                    let t = ((e, t) => {
                        for (let s of t) {
                            let t = u(e, s)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, b);
                    if (null === t) return null;
                    let s = h.get(t.type);
                    return void 0 !== s ? s : null;
                },
                g = (e, t) => u(e, t).length > 0;
        },
        70621: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => l });
            var i = s(53548),
                o = s(63582),
                r = s(245),
                n = s(22681),
                a = s(56374);
            let l = (0, o.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, n.w)(),
                    s = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && s && s.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        74021: (e, t, s) => {
            'use strict';
            s.d(t, { q: () => l });
            var i = s(14567),
                o = s(243),
                r = s(62151),
                n = s(33396);
            let a = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: s }) {
                    ((this.maxLogLevel = t), (this.secureFields = s), (this.additionalData = e));
                }
                formatMessage(e, t, s = {}, o) {
                    let r,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, n.A)({ ...this.additionalData, ...s });
                    return (Object.keys(l).length && (r = this.obfuscateData(l)), o) ? `${a} ${i(r)}` : [a, r];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, o.A)(e, t) && (0, r.A)(e, t, a());
                    return e;
                }
            }
        },
        76903: (e, t, s) => {
            'use strict';
            s.d(t, { a: () => u });
            var i = s(88800),
                o = s(53548),
                r = s(53534),
                n = s(63582),
                a = s(245);
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
            let u = (0, n.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let s = (0, a.N)(),
                        n = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, u] = (0, o.useState)(() => {
                            let e = new c(s.createScreenSession().screenViewUuid, s);
                            return { client: s, input: t, isReady: n, scope: n ? s.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== s ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let o = new c(s.createScreenSession().screenViewUuid, s),
                            a = { client: s, input: t, isReady: n, scope: n ? s.createScreenScope(t, o) : null, session: o };
                        return (u(a), (0, i.jsx)(r.k, { value: a, children: e }));
                    }
                    if (
                        l.isReady !== n ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let o = { ...l, input: t, isReady: n, scope: n ? s.createScreenScope(t, l.session) : null };
                        return (u(o), (0, i.jsx)(r.k, { value: o, children: e }));
                    }
                    return (0, i.jsx)(r.k, { value: l, children: e });
                },
            );
        },
        77451: (e, t, s) => {
            'use strict';
            s.d(t, { Jt: () => r, TF: () => a, hZ: () => n });
            var i = function () {
                return (i =
                    Object.assign ||
                    function (e) {
                        for (var t, s = 1, i = arguments.length; s < i; s++)
                            for (var o in (t = arguments[s])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function o(e, t) {
                if (!t) return '';
                var s = '; ' + e;
                return !0 === t ? s : s + '=' + t;
            }
            function r(e) {
                return (function (e) {
                    for (var t = {}, s = e ? e.split('; ') : [], i = 0; i < s.length; i++) {
                        var o = s[i].split('='),
                            r = o.slice(1).join('=');
                        '"' === r[0] && (r = r.slice(1, -1));
                        try {
                            t[decodeURIComponent(o[0])] = r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function n(e, t, s) {
                var r;
                document.cookie =
                    ((r = i({ path: '/' }, s)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                o('Expires', e.expires ? e.expires.toUTCString() : '') +
                                o('Domain', e.domain) +
                                o('Path', e.path) +
                                o('Secure', e.secure) +
                                o('SameSite', e.sameSite)
                            );
                        })(r));
            }
            function a(e, t) {
                n(e, '', i(i({}, t), { expires: -1 }));
            }
        },
    },
]);
