'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1278],
    {
        895: (e, t, s) => {
            s.d(t, { gq: () => a, ho: () => n, oq: () => o, q5: () => r, vs: () => l });
            var i = s(54607);
            let r = (0, i.R)()('player:play'),
                a = (0, i.R)()('player:pause'),
                n = (0, i.R)()('player:mute'),
                o = (0, i.R)()('player:unmute'),
                l = [r, a, n, o];
        },
        4762: (e, t, s) => {
            s.d(t, { D: () => b });
            var i,
                r = s(27698),
                a = s(48769),
                n = s(24897),
                o = s(71469),
                l = s(42161);
            let c =
                    (e, t, { session: s, logger: i }) =>
                    async (r) => {
                        try {
                            s.assertReady();
                            let e = await t(r);
                            return void 0 === e ? null : e;
                        } catch (t) {
                            if ((i?.error('WebView SDK request handler failed', { ...s.getLogData(t), action: e }), t instanceof n.t))
                                throw Object.assign(new n.t(t.message, { code: t.code, cause: t }), { details: t.data });
                            throw t;
                        }
                    },
                d = (e, t, { session: s, logger: i }) => {
                    let r = (t) => {
                        i?.error('WebView SDK command handler failed', { ...s.getLogData(t), action: e });
                    };
                    return (e) => {
                        try {
                            (s.assertReady(), Promise.resolve(t(e)).catch(r));
                        } catch (e) {
                            r(e);
                        }
                    };
                },
                h = (e, t, s) => {
                    let i,
                        r = new AbortController(),
                        a = AbortSignal.any(s ? [r.signal, t, s] : [r.signal, t]),
                        l = () => {
                            (void 0 !== i && clearTimeout(i), (i = void 0), a.removeEventListener('abort', l));
                        };
                    return (
                        a.aborted ||
                            (a.addEventListener('abort', l, { once: !0 }), (i = setTimeout(() => r.abort(new n.t('Request timed out', { code: o.O.TIMEOUT })), e))),
                        {
                            signal: a,
                            cleanup: l,
                            get timedOut() {
                                return r.signal.aborted;
                            },
                        }
                    );
                },
                p = async (e, t, s, i) => {
                    try {
                        return await e.sendRequest(t, s, { timeout: 0, signal: i });
                    } catch (e) {
                        if (i?.aborted) throw i.reason;
                        if (e instanceof n.t) throw e;
                        if ((0, a.kY)(e)) throw new n.t(e.message, { code: e.code, cause: e });
                        throw e;
                    }
                },
                u = (e) => ({
                    client: { ...e.client },
                    theme: e.theme,
                    locale: e.locale,
                    safeArea: { ...e.safeArea },
                    capabilities: [...e.capabilities],
                    appSessionId: e.appSessionId,
                });
            !(function (e) {
                ((e.CREATED = 'created'), (e.STARTING = 'starting'), (e.READY = 'ready'), (e.FAILED = 'failed'), (e.DISPOSED = 'disposed'));
            })(i || (i = {}));
            class g {
                constructor(e) {
                    ((this.options = e),
                        (this.lifetime = new AbortController()),
                        (this.state = i.CREATED),
                        (this.peerCapabilities = []),
                        (this.startedAt = 0),
                        (this.resolveStartup = () => {}),
                        (this.rejectStartup = () => {}),
                        (this.removeStartupAbort = () => {}));
                }
                get signal() {
                    return this.lifetime.signal;
                }
                get handshakeSignal() {
                    return this.handshakeScope?.signal;
                }
                start() {
                    if (this.state === i.DISPOSED) return Promise.reject(new n.t('SDK is disposed', { code: o.O.DISPOSED }));
                    if (
                        this.startup ||
                        ((this.state = i.STARTING),
                        (this.startedAt = Date.now()),
                        (this.startup = new Promise((e, t) => {
                            ((this.resolveStartup = e), (this.rejectStartup = t));
                        })),
                        this.options.logger?.info('WebView SDK starting'),
                        this.lifetime.signal.aborted)
                    )
                        return this.startup;
                    try {
                        this.handshakeScope = h(this.options.timeout, this.lifetime.signal);
                        let e = this.handshakeScope.signal,
                            t = () => this.fail(e.reason);
                        (e.addEventListener('abort', t, { once: !0 }), (this.removeStartupAbort = () => e.removeEventListener('abort', t)), this.onStart?.());
                    } catch (e) {
                        this.fail(e);
                    }
                    return this.startup;
                }
                ready() {
                    this.state === i.STARTING &&
                        this.context &&
                        ((this.state = i.READY),
                        this.removeStartupAbort(),
                        this.handshakeScope?.cleanup(),
                        this.resolveStartup(this.context),
                        this.options.logger?.info('WebView SDK ready', { ...this.getLogData(), elapsedMs: Date.now() - this.startedAt }));
                }
                fail(e) {
                    this.state === i.STARTING &&
                        ((this.state = i.FAILED),
                        this.lifetime.abort(e),
                        this.rejectStartup(e),
                        this.cleanup(),
                        this.options.logger?.error('WebView SDK startup failed', { ...this.getLogData(e), elapsedMs: Date.now() - this.startedAt }));
                }
                dispose() {
                    if (this.state === i.DISPOSED) return;
                    this.state = i.DISPOSED;
                    let e = new n.t('SDK is disposed', { code: o.O.DISPOSED });
                    (this.lifetime.abort(e), this.rejectStartup(e), this.cleanup(), this.options.logger?.info('WebView SDK disposed', this.getLogData()));
                }
                acceptContext(e, t) {
                    ((this.context = u(e)), (this.peerCapabilities = [...t]));
                }
                assertReady() {
                    if (this.state === i.DISPOSED) throw new n.t('SDK is disposed', { code: o.O.DISPOSED });
                    if (this.state !== i.READY) throw new n.t('SDK is not ready', { code: o.O.NOT_READY });
                }
                supports(e) {
                    return this.state === i.READY && this.peerCapabilities.includes(e);
                }
                getLogData(e) {
                    return { ...(this.context && { appSessionId: this.context.appSessionId }), ...(e instanceof n.t && { code: e.code }) };
                }
                cleanup() {
                    (this.removeStartupAbort(), this.handshakeScope?.cleanup(), this.onStop?.());
                }
            }
            class m {
                constructor(e) {
                    ((this.options = e), (this.pending = new Set()), (this.active = !1));
                }
                start() {
                    if (!this.active) {
                        this.active = !0;
                        try {
                            this.options.transport.start();
                        } catch (e) {
                            throw (this.options.onFailure(e), e);
                        }
                    }
                }
                stop() {
                    if (!this.active) return;
                    for (let e of ((this.active = !1), this.pending)) clearTimeout(e);
                    this.pending.clear();
                    let e = this.unsubscribe;
                    this.unsubscribe = void 0;
                    try {
                        e?.();
                    } catch (e) {
                        this.options.onFailure(e);
                    } finally {
                        try {
                            this.options.transport.stop();
                        } catch (e) {
                            this.options.onFailure(e);
                        }
                    }
                }
                post(e) {
                    if (this.active) {
                        try {
                            this.options.transport.post(e);
                        } catch (e) {
                            throw (this.options.onFailure(e), e);
                        }
                        this.onPosted?.();
                    }
                }
                onMessage(e) {
                    let t = this.options.transport.onMessage((t) => {
                        if (!this.active) return;
                        let s = setTimeout(() => {
                            (this.pending.delete(s),
                                this.active &&
                                    Promise.resolve()
                                        .then(() => e(t))
                                        .catch(this.options.onFailure));
                        }, 0);
                        this.pending.add(s);
                    });
                    return (
                        (this.unsubscribe = () => {
                            ((this.unsubscribe = void 0), t());
                        }),
                        this.unsubscribe
                    );
                }
            }
            class f {
                constructor(e, t) {
                    this.handshakeRegistrations = [];
                    let { handshakeTimeout: s = 1e4, requestTimeout: i = 1e4, logger: u } = e,
                        { actions: f, handlers: b } = ((e) => {
                            let t = new Map();
                            for (let s of e.actions ?? []) {
                                if (t.has(s.name) || s.name === r.M.OPEN || s.name === r.M.INIT)
                                    throw new n.t(`Duplicate or reserved action: ${s.name}`, { code: o.O.INVALID_CONFIGURATION });
                                t.set(s.name, { ...s });
                            }
                            let s = new Map();
                            for (let [i, r] of Object.entries(e.handlers ?? {}))
                                if (void 0 !== r) {
                                    if (!t.has(i)) throw new n.t(`Invalid incoming handler: ${i}`, { code: o.O.INVALID_CONFIGURATION });
                                    s.set(i, r);
                                }
                            return { actions: t, handlers: s };
                        })(e);
                    ((this.command = this.command.bind(this)),
                        (this.supports = this.supports.bind(this)),
                        (this.actions = f),
                        (this.logger = u),
                        (this.session = new g({ timeout: s, logger: u })),
                        (this.transport = new m({ transport: e.transport, onFailure: this.onTransportFailure.bind(this) })),
                        (this.bridge = (0, a.OO)({ transport: this.transport, compatibility: { supports: this.supportsBridgeAction.bind(this) } })),
                        (this.unregisterHandlers = ((e) => {
                            let { bridge: t, actions: s, handlers: i } = e,
                                r = [];
                            for (let [a, n] of i)
                                if (s.get(a)?.type === l.X.REQUEST) {
                                    let s = c(a, n, e);
                                    r.push(t.registerRequest(a, s));
                                } else {
                                    let s = d(a, n, e);
                                    r.push(t.registerCommand(a, s));
                                }
                            return () => {
                                for (let e of r.splice(0)) e();
                            };
                        })({ bridge: this.bridge, actions: f, handlers: b, session: this.session, logger: u })),
                        (this.handshake = t(this.createSessionController([...b.keys()]))),
                        (this.session.onStart = this.onStart.bind(this)),
                        (this.session.onStop = this.onStop.bind(this)),
                        (this.transport.onPosted = this.handshake.posted),
                        (this.start = this.session.start.bind(this.session)),
                        (this.dispose = this.session.dispose.bind(this.session)),
                        (this.request = (
                            ({ bridge: e, session: t, timeout: s, supports: i, logger: r }) =>
                            async (a, c, d = {}) => {
                                let u,
                                    g = Date.now();
                                try {
                                    if ((t.assertReady(), !i(a, l.X.REQUEST))) throw new n.t(`Bridge request is not supported: ${a}`, { code: o.O.NO_HANDLER });
                                    if ((u = h(void 0 === d.timeout ? s : d.timeout, t.signal, d.signal)).signal.aborted) throw u.signal.reason;
                                    let m = await p(e, a, c, u.signal);
                                    return (r?.debug('WebView SDK request completed', { ...t.getLogData(), action: a, elapsedMs: Date.now() - g }), m);
                                } catch (s) {
                                    let e = 'WebView SDK request failed';
                                    throw (
                                        u?.timedOut ? (e = 'WebView SDK request timed out') : u?.signal.aborted && (e = 'WebView SDK request cancelled'),
                                        r?.error(e, { ...t.getLogData(s), action: a, elapsedMs: Date.now() - g }),
                                        s
                                    );
                                } finally {
                                    u?.cleanup();
                                }
                            }
                        )({ bridge: this.bridge, session: this.session, timeout: i, supports: this.supports, logger: u })));
                }
                command(e, t) {
                    (this.session.assertReady(), this.supports(e, l.X.COMMAND) && this.bridge.sendCommand(e, t));
                }
                supports(e, t) {
                    let s = this.actions.get(e);
                    return void 0 !== s && (void 0 === t || s.type === t) && this.session.supports(e);
                }
                supportsBridgeAction(e, t) {
                    return e === r.M.OPEN || e === r.M.INIT || this.supports(e, t);
                }
                onStart() {
                    (this.bridge.start(), this.handshake.start?.());
                }
                onStop() {
                    for (let e of (this.bridge.stop(), this.transport.stop(), this.unregisterHandlers(), this.handshakeRegistrations.splice(0))) e();
                }
                onTransportFailure(e) {
                    (this.logger?.error('WebView SDK transport failed', this.session.getLogData(e)), this.session.fail(e));
                }
                createSessionController(e) {
                    return {
                        capabilities: e,
                        registerCommand: (e, t) => {
                            this.handshakeRegistrations.push(this.bridge.registerCommand(e, t));
                        },
                        registerRequest: (e, t) => {
                            this.handshakeRegistrations.push(this.bridge.registerRequest(e, async (e) => await t(e)));
                        },
                        sendCommand: (e, t) => this.bridge.sendCommand(e, t),
                        sendRequest: async (e, t) => await p(this.bridge, e, t, this.session.handshakeSignal),
                        acceptContext: this.session.acceptContext.bind(this.session),
                        ready: this.session.ready.bind(this.session),
                        fail: this.session.fail.bind(this.session),
                    };
                }
            }
            let b = (e) =>
                new f(e, (t) => {
                    let s = u({ ...e.context, capabilities: t.capabilities }),
                        i = !1;
                    return (
                        t.registerCommand(r.M.OPEN, (e) => {
                            i || ((i = !0), t.acceptContext(s, e.capabilities), t.sendRequest(r.M.INIT, s).then(t.ready, t.fail));
                        }),
                        {}
                    );
                });
        },
        16482: (e, t, s) => {
            var i;
            (s.d(t, { A: () => i }),
                (function (e) {
                    ((e.TRACK = 'TRACK'), (e.ARTIST = 'ARTIST'), (e.ALBUM = 'ALBUM'), (e.CLIP = 'CLIP'), (e.PLAYLIST = 'PLAYLIST'));
                })(i || (i = {})));
        },
        24897: (e, t, s) => {
            s.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = s), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        26627: (e, t, s) => {
            s.d(t, { Nf: () => c, OW: () => l, P$: () => o, ZR: () => n });
            var i = s(84447),
                r = s(54607);
            let a = (0, i.N)()('system:haptic'),
                n = (0, r.R)()('system:share'),
                o = (0, r.R)()('system:refreshAuth'),
                l = (0, i.N)()('system:visibilityChange'),
                c = [a, n, o, l, (0, i.N)()('system:safeAreaChange'), (0, i.N)()('system:screenshot')];
        },
        27698: (e, t, s) => {
            var i;
            (s.d(t, { M: () => i }),
                (function (e) {
                    ((e.OPEN = 'session:open'), (e.INIT = 'session:init'));
                })(i || (i = {})));
        },
        30683: (e, t, s) => {
            s.d(t, { _: () => l });
            var i = s(24897),
                r = s(71469),
                a = s(42161),
                n = s(27698);
            class o {
                constructor({ targetWindow: e, expectedOrigin: t = '*' }) {
                    if (
                        ((this.listeners = new Set()),
                        'function' != typeof e?.postMessage ||
                            ('*' !== t &&
                                !((e) => {
                                    try {
                                        let t = new URL(e).origin;
                                        return 'null' !== t && t === e;
                                    } catch {
                                        return !1;
                                    }
                                })(t)))
                    )
                        throw new i.t('Invalid iframe transport configuration', { code: r.O.INVALID_CONFIGURATION });
                    ((this.targetWindow = e),
                        (this.configuredOrigin = '*' === t ? void 0 : t),
                        (this.origin = this.configuredOrigin),
                        (this.handleMessage = this.handleMessage.bind(this)));
                }
                start() {
                    window.addEventListener('message', this.handleMessage);
                }
                stop() {
                    (window.removeEventListener('message', this.handleMessage), this.listeners.clear(), (this.origin = this.configuredOrigin));
                }
                post(e) {
                    this.targetWindow.postMessage(e, this.origin ?? '*');
                }
                onMessage(e) {
                    return (this.listeners.add(e), () => this.listeners.delete(e));
                }
                handleMessage(e) {
                    if (e.source === this.targetWindow && 'string' == typeof e.data) {
                        if (void 0 === this.origin) {
                            if (
                                !e.origin ||
                                'null' === e.origin ||
                                !((e) => {
                                    try {
                                        let t = JSON.parse(e);
                                        return 'object' == typeof t && null !== t && 'type' in t && t.type === a.X.REQUEST && 'action' in t && t.action === n.M.INIT;
                                    } catch {
                                        return !1;
                                    }
                                })(e.data)
                            )
                                return;
                            this.origin = e.origin;
                        }
                        if (e.origin === this.origin) for (let t of this.listeners) t(e.data);
                    }
                }
            }
            let l = (e) => new o(e);
        },
        35540: (e, t, s) => {
            s.d(t, { Y: () => r, r: () => i });
            let i = (0, s(84447).N)()('navigation:open'),
                r = [i];
        },
        42161: (e, t, s) => {
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e.COMMAND = 'cmd'), (e.REQUEST = 'req'));
                })(i || (i = {})));
        },
        48769: (e, t, s) => {
            s.d(t, { OO: () => n, kY: () => r });
            let i = { NO_HANDLER: 40401, INTERNAL: 5e4 };
            function r(e) {
                return null != e && 'object' == typeof e && 'code' in e && 'message' in e;
            }
            function a() {
                return 'u' > typeof crypto && 'randomUUID' in crypto
                    ? crypto.randomUUID()
                    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (e) => {
                          let t = (16 * Math.random()) | 0;
                          return ('x' === e ? t : (3 & t) | 8).toString(16);
                      });
            }
            function n(e) {
                let { timeout: t, transport: s, compatibility: n } = e,
                    o = t ?? 1e4,
                    l = new Map(),
                    c = (function () {
                        let e = new Map();
                        return {
                            enqueue(t, s) {
                                let i,
                                    r,
                                    a = e.get(t);
                                if (a) return a.promise;
                                let n = new Promise((e, t) => {
                                    let a,
                                        n = (e, t) => {
                                            (a && (a(), (a = void 0)), e(t));
                                        };
                                    ((i = (t) => n(e, t)),
                                        (r = (e) => n(t, e)),
                                        s?.signal &&
                                            (a = (function (e, t) {
                                                if (e.aborted) return (t(e.reason ?? new DOMException('Aborted', 'AbortError')), () => {});
                                                let s = () => {
                                                    t(e.reason ?? new DOMException('Aborted', 'AbortError'));
                                                };
                                                return (
                                                    e.addEventListener('abort', s, { once: !0 }),
                                                    () => {
                                                        e.removeEventListener('abort', s);
                                                    }
                                                );
                                            })(s.signal, r)));
                                }).finally(() => {
                                    e.delete(t);
                                });
                                return (e.set(t, { promise: n, resolve: i, reject: r }), n);
                            },
                            resolve(t, s) {
                                let i = e.get(t);
                                return !!i && (i.resolve(s), !0);
                            },
                            reject(t, s) {
                                let i = e.get(t);
                                return !!i && (i.reject(s), !0);
                            },
                            clear() {
                                if (!e.size) return;
                                let t = new DOMException('Aborted', 'AbortError');
                                for (let s of e.values()) s.reject(t);
                            },
                        };
                    })(),
                    d = async (e) => {
                        let t = JSON.parse(e);
                        if (!('object' == typeof t && 'id' in t && 'refId' in t && 'type' in t && 'action' in t && 'payload' in t && 'error' in t)) return;
                        if ('res' === t.type && t.refId) return void (t.error ? c.reject(t.refId, t.error) : c.resolve(t.refId, t.payload));
                        let s = l.get(t.action);
                        if (!s || s.type !== t.type) {
                            if ('req' !== t.type) return;
                            let e = { code: i.NO_HANDLER, message: `No handler for action "${t.action}"` };
                            h({ id: a(), type: 'res', refId: t.id, action: t.action, payload: null, error: e });
                            return;
                        }
                        if ('cmd' === t.type) return void s.callback(t.payload);
                        try {
                            let e = await s.callback(t.payload);
                            h({ id: a(), type: 'res', refId: t.id, action: t.action, payload: e, error: null });
                        } catch (s) {
                            let e;
                            ((e = r(s) ? { code: s.code, message: s.message, details: s.details } : { code: i.INTERNAL, message: 'Internal error' }),
                                h({ id: a(), type: 'res', refId: t.id, action: t.action, payload: null, error: e }));
                        }
                    },
                    h = (e) => {
                        let t = JSON.stringify(e);
                        s.post(t);
                    },
                    p = (e, t) => n?.supports(e, t) ?? !0,
                    u = !1;
                return {
                    registerRequest: (e, t) => (l.set(e, { type: 'req', action: e, callback: t }), () => l.delete(e)),
                    sendRequest(e, t, s) {
                        if (!p(e, 'req')) return Promise.reject(Error(`Bridge request is not supported: ${e}`));
                        let i = a();
                        h({ id: i, refId: null, error: null, type: 'req', action: e, payload: t });
                        let r = [];
                        return (
                            s?.timeout !== 0 && r.push(AbortSignal.timeout(s?.timeout ?? o)), s?.signal && r.push(s.signal), c.enqueue(i, { signal: AbortSignal.any(r) })
                        );
                    },
                    registerCommand: (e, t) => (l.set(e, { type: 'cmd', action: e, callback: t }), () => l.delete(e)),
                    sendCommand(e, t) {
                        p(e, 'cmd') && h({ id: a(), refId: null, error: null, type: 'cmd', action: e, payload: t });
                    },
                    start() {
                        u || (s.onMessage(d), s.start(), (u = !0));
                    },
                    stop() {
                        u && (s.stop(), c.clear(), (u = !1));
                    },
                    supports: p,
                };
            }
        },
        49950: (e, t, s) => {
            s.d(t, { LZ: () => a, Qc: () => r, X7: () => n, cD: () => o });
            var i = s(54607);
            let r = (0, i.R)()('collection:like'),
                a = (0, i.R)()('collection:unlike'),
                n = (0, i.R)()('collection:getEntityState'),
                o = [r, a, n];
        },
        50267: (e, t, s) => {
            var i;
            (s.d(t, { Y: () => i }),
                (function (e) {
                    ((e.MAIN = 'MAIN'), (e.TRAILER = 'TRAILER'));
                })(i || (i = {})));
        },
        54607: (e, t, s) => {
            s.d(t, { R: () => r });
            var i = s(81767);
            let r = () => (e) => ({ name: e, type: i.X.REQUEST });
        },
        69991: (e, t, s) => {
            s.d(t, { Z: () => r });
            var i = s(42161);
            let r = { name: 'session:close', type: i.X.COMMAND };
        },
        71469: (e, t, s) => {
            var i;
            (s.d(t, { O: () => i }),
                (function (e) {
                    ((e[(e.NOT_READY = 40001)] = 'NOT_READY'),
                        (e[(e.INVALID_CONFIGURATION = 40003)] = 'INVALID_CONFIGURATION'),
                        (e[(e.DISPOSED = 40004)] = 'DISPOSED'),
                        (e[(e.INVALID_HANDSHAKE = 40005)] = 'INVALID_HANDSHAKE'),
                        (e[(e.NO_HANDLER = 40401)] = 'NO_HANDLER'),
                        (e[(e.TIMEOUT = 40801)] = 'TIMEOUT'),
                        (e[(e.INTERNAL = 5e4)] = 'INTERNAL'),
                        (e[(e.TRANSPORT_UNAVAILABLE = 50301)] = 'TRANSPORT_UNAVAILABLE'));
                })(i || (i = {})));
        },
        78309: (e, t, s) => {
            var i;
            (s.d(t, { U: () => i }),
                (function (e) {
                    ((e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral'));
                })(i || (i = {})));
        },
        81767: (e, t, s) => {
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e.COMMAND = 'cmd'), (e.REQUEST = 'req'));
                })(i || (i = {})));
        },
        84447: (e, t, s) => {
            s.d(t, { N: () => r });
            var i = s(81767);
            let r = () => (e) => ({ name: e, type: i.X.COMMAND });
        },
        88969: (e, t, s) => {
            s.d(t, { A: () => c });
            var i = s(88092),
                r = s(53548),
                a = s(84014),
                n = s(2058);
            function o(e) {
                var t = (0, n.A)(),
                    s = t.formatMessage,
                    i = t.textComponent,
                    a = void 0 === i ? r.Fragment : i,
                    o = e.id,
                    l = e.description,
                    c = e.defaultMessage,
                    d = e.values,
                    h = e.children,
                    p = e.tagName,
                    u = void 0 === p ? a : p,
                    g = s({ id: o, description: l, defaultMessage: c }, d, { ignoreTag: e.ignoreTag });
                return 'function' == typeof h ? h(Array.isArray(g) ? g : [g]) : u ? r.createElement(u, null, g) : r.createElement(r.Fragment, null, g);
            }
            o.displayName = 'FormattedMessage';
            var l = r.memo(o, function (e, t) {
                var s = e.values,
                    r = (0, i.__rest)(e, ['values']),
                    n = t.values,
                    o = (0, i.__rest)(t, ['values']);
                return (0, a.bN)(n, s) && (0, a.bN)(r, o);
            });
            l.displayName = 'MemoizedFormattedMessage';
            let c = l;
        },
        92948: (e, t) => {
            var s;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, s) {
                    return {
                        trackEvent: (i, r) => {
                            let a = { ...r, ...t.getGlobalParams(), ...s.getPlatformParams() };
                            e.trackEvent(i, a);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(s || (t.MiniappConfig = s = {})));
        },
        99984: (e, t, s) => {
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: s = '',
                        mainObjectType: a = r.DomainObjectType.NonApplicable,
                        mainObjectId: n = '',
                        tabId: o = '',
                        tabPos: l = 0,
                        isTabSelectedByDefault: c = !1,
                        viewUuid: d = '',
                    } = t,
                    h = (0, i.makeMetaParams)(1),
                    p = { ...t, skeletonId: s, mainObjectType: a, mainObjectId: n, tabId: o, tabPos: l, isTabSelectedByDefault: c, viewUuid: d, _meta: h };
                e.trackEvent('Screen.Opened', p);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: s = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: n = '',
                            mainObjectType: o = r.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: h = !1,
                            viewUuid: p = '',
                        } = t,
                        u = (0, i.makeMetaParams)(3),
                        g = {
                            ...t,
                            pageStyle: s,
                            pagePlacement: a,
                            skeletonId: n,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: d,
                            isTabSelectedByDefault: h,
                            viewUuid: p,
                            _meta: u,
                        };
                    e.trackEvent('Screen.Opened', g);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: s = '',
                            mainObjectType: a = r.DomainObjectType.NonApplicable,
                            mainObjectId: n = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        d = (0, i.makeMetaParams)(1),
                        h = { ...t, skeletonId: s, mainObjectType: a, mainObjectId: n, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: d };
                    e.trackEvent('Screen.Closed', h);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: s = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: n = '',
                            mainObjectType: o = r.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: h = !1,
                        } = t,
                        p = (0, i.makeMetaParams)(3),
                        u = {
                            ...t,
                            pageStyle: s,
                            pagePlacement: a,
                            skeletonId: n,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: d,
                            isTabSelectedByDefault: h,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Closed', u);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: s = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: n = '',
                            mainObjectType: o = r.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: h = !1,
                            viewUuid: p = '',
                        } = t,
                        u = (0, i.makeMetaParams)(4),
                        g = {
                            ...t,
                            pageStyle: s,
                            pagePlacement: a,
                            skeletonId: n,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: d,
                            isTabSelectedByDefault: h,
                            viewUuid: p,
                            _meta: u,
                        };
                    e.trackEvent('Screen.Closed', g);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: s = '',
                            mainObjectType: a = r.DomainObjectType.NonApplicable,
                            mainObjectId: n = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        d = (0, i.makeMetaParams)(1),
                        h = { ...t, skeletonId: s, mainObjectType: a, mainObjectId: n, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: d };
                    e.trackEvent('Screen.Started', h);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: s = '',
                            mainObjectType: a = r.DomainObjectType.NonApplicable,
                            mainObjectId: n = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        d = (0, i.makeMetaParams)(1),
                        h = { ...t, skeletonId: s, mainObjectType: a, mainObjectId: n, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: d };
                    e.trackEvent('Screen.Navigated', h);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: s = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: n = '',
                            mainObjectType: o = r.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: h = !1,
                            deepLink: p = '',
                        } = t,
                        u = (0, i.makeMetaParams)(4),
                        g = {
                            ...t,
                            pageStyle: s,
                            pagePlacement: a,
                            skeletonId: n,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: d,
                            isTabSelectedByDefault: h,
                            deepLink: p,
                            _meta: u,
                        };
                    e.trackEvent('Screen.Navigated', g);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: s = '',
                            mainObjectType: a = r.DomainObjectType.NonApplicable,
                            mainObjectId: n = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        d = (0, i.makeMetaParams)(1),
                        h = { ...t, skeletonId: s, mainObjectType: a, mainObjectId: n, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: d };
                    e.trackEvent('Screen.ActionPerformed', h);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: s = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: n = '',
                            mainObjectType: o = r.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                        } = t,
                        c = (0, i.makeMetaParams)(1),
                        d = { ...t, pageStyle: s, pagePlacement: a, skeletonId: n, mainObjectType: o, mainObjectId: l, _meta: c };
                    e.trackEvent('Screen.ErrorRaised', d);
                }));
            let i = s(92948),
                r = s(92716);
        },
    },
]);
