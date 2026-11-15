(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7362],
    {
        895: (t, e, s) => {
            'use strict';
            s.d(e, { gq: () => o, ho: () => n, oq: () => a, q5: () => r, vs: () => l });
            var i = s(54607);
            let r = (0, i.R)()('player:play'),
                o = (0, i.R)()('player:pause'),
                n = (0, i.R)()('player:mute'),
                a = (0, i.R)()('player:unmute'),
                l = [r, o, n, a];
        },
        4762: (t, e, s) => {
            'use strict';
            s.d(e, { D: () => b });
            var i,
                r = s(27698),
                o = s(48769),
                n = s(24897),
                a = s(71469),
                l = s(42161);
            let c =
                    (t, e, { session: s, logger: i }) =>
                    async (r) => {
                        try {
                            s.assertReady();
                            let t = await e(r);
                            return void 0 === t ? null : t;
                        } catch (e) {
                            if ((i?.error('WebView SDK request handler failed', { ...s.getLogData(e), action: t }), e instanceof n.t))
                                throw Object.assign(new n.t(e.message, { code: e.code, cause: e }), { details: e.data });
                            throw e;
                        }
                    },
                h = (t, e, { session: s, logger: i }) => {
                    let r = (e) => {
                        i?.error('WebView SDK command handler failed', { ...s.getLogData(e), action: t });
                    };
                    return (t) => {
                        try {
                            (s.assertReady(), Promise.resolve(e(t)).catch(r));
                        } catch (t) {
                            r(t);
                        }
                    };
                },
                d = (t, e, s) => {
                    let i,
                        r = new AbortController(),
                        o = AbortSignal.any(s ? [r.signal, e, s] : [r.signal, e]),
                        l = () => {
                            (void 0 !== i && clearTimeout(i), (i = void 0), o.removeEventListener('abort', l));
                        };
                    return (
                        o.aborted ||
                            (o.addEventListener('abort', l, { once: !0 }), (i = setTimeout(() => r.abort(new n.t('Request timed out', { code: a.O.TIMEOUT })), t))),
                        {
                            signal: o,
                            cleanup: l,
                            get timedOut() {
                                return r.signal.aborted;
                            },
                        }
                    );
                },
                u = async (t, e, s, i) => {
                    try {
                        return await t.sendRequest(e, s, { timeout: 0, signal: i });
                    } catch (t) {
                        if (i?.aborted) throw i.reason;
                        if (t instanceof n.t) throw t;
                        if ((0, o.kY)(t)) throw new n.t(t.message, { code: t.code, cause: t });
                        throw t;
                    }
                },
                p = (t) => ({
                    client: { ...t.client },
                    theme: t.theme,
                    locale: t.locale,
                    safeArea: { ...t.safeArea },
                    capabilities: [...t.capabilities],
                    appSessionId: t.appSessionId,
                });
            !(function (t) {
                ((t.CREATED = 'created'), (t.STARTING = 'starting'), (t.READY = 'ready'), (t.FAILED = 'failed'), (t.DISPOSED = 'disposed'));
            })(i || (i = {}));
            class g {
                constructor(t) {
                    ((this.options = t),
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
                    if (this.state === i.DISPOSED) return Promise.reject(new n.t('SDK is disposed', { code: a.O.DISPOSED }));
                    if (
                        this.startup ||
                        ((this.state = i.STARTING),
                        (this.startedAt = Date.now()),
                        (this.startup = new Promise((t, e) => {
                            ((this.resolveStartup = t), (this.rejectStartup = e));
                        })),
                        this.options.logger?.info('WebView SDK starting'),
                        this.lifetime.signal.aborted)
                    )
                        return this.startup;
                    try {
                        this.handshakeScope = d(this.options.timeout, this.lifetime.signal);
                        let t = this.handshakeScope.signal,
                            e = () => this.fail(t.reason);
                        (t.addEventListener('abort', e, { once: !0 }), (this.removeStartupAbort = () => t.removeEventListener('abort', e)), this.onStart?.());
                    } catch (t) {
                        this.fail(t);
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
                fail(t) {
                    this.state === i.STARTING &&
                        ((this.state = i.FAILED),
                        this.lifetime.abort(t),
                        this.rejectStartup(t),
                        this.cleanup(),
                        this.options.logger?.error('WebView SDK startup failed', { ...this.getLogData(t), elapsedMs: Date.now() - this.startedAt }));
                }
                dispose() {
                    if (this.state === i.DISPOSED) return;
                    this.state = i.DISPOSED;
                    let t = new n.t('SDK is disposed', { code: a.O.DISPOSED });
                    (this.lifetime.abort(t), this.rejectStartup(t), this.cleanup(), this.options.logger?.info('WebView SDK disposed', this.getLogData()));
                }
                acceptContext(t, e) {
                    ((this.context = p(t)), (this.peerCapabilities = [...e]));
                }
                assertReady() {
                    if (this.state === i.DISPOSED) throw new n.t('SDK is disposed', { code: a.O.DISPOSED });
                    if (this.state !== i.READY) throw new n.t('SDK is not ready', { code: a.O.NOT_READY });
                }
                supports(t) {
                    return this.state === i.READY && this.peerCapabilities.includes(t);
                }
                getLogData(t) {
                    return { ...(this.context && { appSessionId: this.context.appSessionId }), ...(t instanceof n.t && { code: t.code }) };
                }
                cleanup() {
                    (this.removeStartupAbort(), this.handshakeScope?.cleanup(), this.onStop?.());
                }
            }
            class f {
                constructor(t) {
                    ((this.options = t), (this.pending = new Set()), (this.active = !1));
                }
                start() {
                    if (!this.active) {
                        this.active = !0;
                        try {
                            this.options.transport.start();
                        } catch (t) {
                            throw (this.options.onFailure(t), t);
                        }
                    }
                }
                stop() {
                    if (!this.active) return;
                    for (let t of ((this.active = !1), this.pending)) clearTimeout(t);
                    this.pending.clear();
                    let t = this.unsubscribe;
                    this.unsubscribe = void 0;
                    try {
                        t?.();
                    } catch (t) {
                        this.options.onFailure(t);
                    } finally {
                        try {
                            this.options.transport.stop();
                        } catch (t) {
                            this.options.onFailure(t);
                        }
                    }
                }
                post(t) {
                    if (this.active) {
                        try {
                            this.options.transport.post(t);
                        } catch (t) {
                            throw (this.options.onFailure(t), t);
                        }
                        this.onPosted?.();
                    }
                }
                onMessage(t) {
                    let e = this.options.transport.onMessage((e) => {
                        if (!this.active) return;
                        let s = setTimeout(() => {
                            (this.pending.delete(s),
                                this.active &&
                                    Promise.resolve()
                                        .then(() => t(e))
                                        .catch(this.options.onFailure));
                        }, 0);
                        this.pending.add(s);
                    });
                    return (
                        (this.unsubscribe = () => {
                            ((this.unsubscribe = void 0), e());
                        }),
                        this.unsubscribe
                    );
                }
            }
            class m {
                constructor(t, e) {
                    this.handshakeRegistrations = [];
                    let { handshakeTimeout: s = 1e4, requestTimeout: i = 1e4, logger: p } = t,
                        { actions: m, handlers: b } = ((t) => {
                            let e = new Map();
                            for (let s of t.actions ?? []) {
                                if (e.has(s.name) || s.name === r.M.OPEN || s.name === r.M.INIT)
                                    throw new n.t(`Duplicate or reserved action: ${s.name}`, { code: a.O.INVALID_CONFIGURATION });
                                e.set(s.name, { ...s });
                            }
                            let s = new Map();
                            for (let [i, r] of Object.entries(t.handlers ?? {}))
                                if (void 0 !== r) {
                                    if (!e.has(i)) throw new n.t(`Invalid incoming handler: ${i}`, { code: a.O.INVALID_CONFIGURATION });
                                    s.set(i, r);
                                }
                            return { actions: e, handlers: s };
                        })(t);
                    ((this.command = this.command.bind(this)),
                        (this.supports = this.supports.bind(this)),
                        (this.actions = m),
                        (this.logger = p),
                        (this.session = new g({ timeout: s, logger: p })),
                        (this.transport = new f({ transport: t.transport, onFailure: this.onTransportFailure.bind(this) })),
                        (this.bridge = (0, o.OO)({ transport: this.transport, compatibility: { supports: this.supportsBridgeAction.bind(this) } })),
                        (this.unregisterHandlers = ((t) => {
                            let { bridge: e, actions: s, handlers: i } = t,
                                r = [];
                            for (let [o, n] of i)
                                if (s.get(o)?.type === l.X.REQUEST) {
                                    let s = c(o, n, t);
                                    r.push(e.registerRequest(o, s));
                                } else {
                                    let s = h(o, n, t);
                                    r.push(e.registerCommand(o, s));
                                }
                            return () => {
                                for (let t of r.splice(0)) t();
                            };
                        })({ bridge: this.bridge, actions: m, handlers: b, session: this.session, logger: p })),
                        (this.handshake = e(this.createSessionController([...b.keys()]))),
                        (this.session.onStart = this.onStart.bind(this)),
                        (this.session.onStop = this.onStop.bind(this)),
                        (this.transport.onPosted = this.handshake.posted),
                        (this.start = this.session.start.bind(this.session)),
                        (this.dispose = this.session.dispose.bind(this.session)),
                        (this.request = (
                            ({ bridge: t, session: e, timeout: s, supports: i, logger: r }) =>
                            async (o, c, h = {}) => {
                                let p,
                                    g = Date.now();
                                try {
                                    if ((e.assertReady(), !i(o, l.X.REQUEST))) throw new n.t(`Bridge request is not supported: ${o}`, { code: a.O.NO_HANDLER });
                                    if ((p = d(void 0 === h.timeout ? s : h.timeout, e.signal, h.signal)).signal.aborted) throw p.signal.reason;
                                    let f = await u(t, o, c, p.signal);
                                    return (r?.debug('WebView SDK request completed', { ...e.getLogData(), action: o, elapsedMs: Date.now() - g }), f);
                                } catch (s) {
                                    let t = 'WebView SDK request failed';
                                    throw (
                                        p?.timedOut ? (t = 'WebView SDK request timed out') : p?.signal.aborted && (t = 'WebView SDK request cancelled'),
                                        r?.error(t, { ...e.getLogData(s), action: o, elapsedMs: Date.now() - g }),
                                        s
                                    );
                                } finally {
                                    p?.cleanup();
                                }
                            }
                        )({ bridge: this.bridge, session: this.session, timeout: i, supports: this.supports, logger: p })));
                }
                command(t, e) {
                    (this.session.assertReady(), this.supports(t, l.X.COMMAND) && this.bridge.sendCommand(t, e));
                }
                supports(t, e) {
                    let s = this.actions.get(t);
                    return void 0 !== s && (void 0 === e || s.type === e) && this.session.supports(t);
                }
                supportsBridgeAction(t, e) {
                    return t === r.M.OPEN || t === r.M.INIT || this.supports(t, e);
                }
                onStart() {
                    (this.bridge.start(), this.handshake.start?.());
                }
                onStop() {
                    for (let t of (this.bridge.stop(), this.transport.stop(), this.unregisterHandlers(), this.handshakeRegistrations.splice(0))) t();
                }
                onTransportFailure(t) {
                    (this.logger?.error('WebView SDK transport failed', this.session.getLogData(t)), this.session.fail(t));
                }
                createSessionController(t) {
                    return {
                        capabilities: t,
                        registerCommand: (t, e) => {
                            this.handshakeRegistrations.push(this.bridge.registerCommand(t, e));
                        },
                        registerRequest: (t, e) => {
                            this.handshakeRegistrations.push(this.bridge.registerRequest(t, async (t) => await e(t)));
                        },
                        sendCommand: (t, e) => this.bridge.sendCommand(t, e),
                        sendRequest: async (t, e) => await u(this.bridge, t, e, this.session.handshakeSignal),
                        acceptContext: this.session.acceptContext.bind(this.session),
                        ready: this.session.ready.bind(this.session),
                        fail: this.session.fail.bind(this.session),
                    };
                }
            }
            let b = (t) =>
                new m(t, (e) => {
                    let s = p({ ...t.context, capabilities: e.capabilities }),
                        i = !1;
                    return (
                        e.registerCommand(r.M.OPEN, (t) => {
                            i || ((i = !0), e.acceptContext(s, t.capabilities), e.sendRequest(r.M.INIT, s).then(e.ready, e.fail));
                        }),
                        {}
                    );
                });
        },
        14567: (t, e) => {
            (t.exports = function (t, e, i, r) {
                return JSON.stringify(t, s(e, r), i);
            }).getSerialize = s;
            function s(t, e) {
                var s = [],
                    i = [];
                return (
                    null == e &&
                        (e = function (t, e) {
                            return s[0] === e ? '[Circular ~]' : '[Circular ~.' + i.slice(0, s.indexOf(e)).join('.') + ']';
                        }),
                    function (r, o) {
                        if (s.length > 0) {
                            var n = s.indexOf(this);
                            (~n ? s.splice(n + 1) : s.push(this), ~n ? i.splice(n, 1 / 0, r) : i.push(r), ~s.indexOf(o) && (o = e.call(this, r, o)));
                        } else s.push(o);
                        return null == t ? o : t.call(this, r, o);
                    }
                );
            }
        },
        16482: (t, e, s) => {
            'use strict';
            var i;
            (s.d(e, { A: () => i }),
                (function (t) {
                    ((t.TRACK = 'TRACK'), (t.ARTIST = 'ARTIST'), (t.ALBUM = 'ALBUM'), (t.CLIP = 'CLIP'), (t.PLAYLIST = 'PLAYLIST'));
                })(i || (i = {})));
        },
        23877: (t, e, s) => {
            'use strict';
            var i;
            (s.d(e, { Q: () => r, c: () => i }),
                (function (t) {
                    ((t[(t.ERROR = 10)] = 'ERROR'),
                        (t[(t.WARNING = 20)] = 'WARNING'),
                        (t[(t.INFO = 30)] = 'INFO'),
                        (t[(t.DEBUG = 40)] = 'DEBUG'),
                        (t[(t.TRACE = 50)] = 'TRACE'));
                })(i || (i = {})));
            let r = { [i.ERROR]: 'error', [i.WARNING]: 'warn', [i.INFO]: 'info', [i.DEBUG]: 'debug', [i.TRACE]: 'trace' };
        },
        24897: (t, e, s) => {
            'use strict';
            s.d(e, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...o } = e,
                        n = t || 'Internal error';
                    (super(n, o), (this.message = n), (this.code = s), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        26627: (t, e, s) => {
            'use strict';
            s.d(e, { Nf: () => c, OW: () => l, P$: () => a, ZR: () => n });
            var i = s(84447),
                r = s(54607);
            let o = (0, i.N)()('system:haptic'),
                n = (0, r.R)()('system:share'),
                a = (0, r.R)()('system:refreshAuth'),
                l = (0, i.N)()('system:visibilityChange'),
                c = [o, n, a, l, (0, i.N)()('system:safeAreaChange'), (0, i.N)()('system:screenshot')];
        },
        27698: (t, e, s) => {
            'use strict';
            var i;
            (s.d(e, { M: () => i }),
                (function (t) {
                    ((t.OPEN = 'session:open'), (t.INIT = 'session:init'));
                })(i || (i = {})));
        },
        30683: (t, e, s) => {
            'use strict';
            s.d(e, { _: () => l });
            var i = s(24897),
                r = s(71469),
                o = s(42161),
                n = s(27698);
            class a {
                constructor({ targetWindow: t, expectedOrigin: e = '*' }) {
                    if (
                        ((this.listeners = new Set()),
                        'function' != typeof t?.postMessage ||
                            ('*' !== e &&
                                !((t) => {
                                    try {
                                        let e = new URL(t).origin;
                                        return 'null' !== e && e === t;
                                    } catch {
                                        return !1;
                                    }
                                })(e)))
                    )
                        throw new i.t('Invalid iframe transport configuration', { code: r.O.INVALID_CONFIGURATION });
                    ((this.targetWindow = t),
                        (this.configuredOrigin = '*' === e ? void 0 : e),
                        (this.origin = this.configuredOrigin),
                        (this.handleMessage = this.handleMessage.bind(this)));
                }
                start() {
                    window.addEventListener('message', this.handleMessage);
                }
                stop() {
                    (window.removeEventListener('message', this.handleMessage), this.listeners.clear(), (this.origin = this.configuredOrigin));
                }
                post(t) {
                    this.targetWindow.postMessage(t, this.origin ?? '*');
                }
                onMessage(t) {
                    return (this.listeners.add(t), () => this.listeners.delete(t));
                }
                handleMessage(t) {
                    if (t.source === this.targetWindow && 'string' == typeof t.data) {
                        if (void 0 === this.origin) {
                            if (
                                !t.origin ||
                                'null' === t.origin ||
                                !((t) => {
                                    try {
                                        let e = JSON.parse(t);
                                        return 'object' == typeof e && null !== e && 'type' in e && e.type === o.X.REQUEST && 'action' in e && e.action === n.M.INIT;
                                    } catch {
                                        return !1;
                                    }
                                })(t.data)
                            )
                                return;
                            this.origin = t.origin;
                        }
                        if (t.origin === this.origin) for (let e of this.listeners) e(t.data);
                    }
                }
            }
            let l = (t) => new a(t);
        },
        35540: (t, e, s) => {
            'use strict';
            s.d(e, { Y: () => r, r: () => i });
            let i = (0, s(84447).N)()('navigation:open'),
                r = [i];
        },
        42161: (t, e, s) => {
            'use strict';
            var i;
            (s.d(e, { X: () => i }),
                (function (t) {
                    ((t.COMMAND = 'cmd'), (t.REQUEST = 'req'));
                })(i || (i = {})));
        },
        44084: (t, e, s) => {
            'use strict';
            s.d(e, { r: () => o });
            var i = s(23877),
                r = s(74021);
            class o extends r.q {
                disableLogToConsole;
                constructor(t) {
                    (super(t), (this.disableLogToConsole = t.disableLogToConsole));
                }
                info(t, e) {
                    this.maxLogLevel >= i.c.INFO && this.logToConsole(i.c.INFO, t, e);
                }
                debug(t, e) {
                    this.maxLogLevel >= i.c.DEBUG && this.logToConsole(i.c.DEBUG, t, e);
                }
                trace(t, e) {
                    this.maxLogLevel >= i.c.TRACE && this.logToConsole(i.c.TRACE, t, e);
                }
                warn(t, e) {
                    (this.maxLogLevel >= i.c.WARNING && this.logToConsole(i.c.WARNING, t, e), this.sendToErrorBooster(i.c.WARNING, t, e));
                }
                error(t, e) {
                    (this.maxLogLevel >= i.c.ERROR && this.logToConsole(i.c.ERROR, t, e), this.sendToErrorBooster(i.c.ERROR, t, e));
                }
                log(t, e) {
                    this.logToConsole(i.c.INFO, t, e);
                }
                logToConsole(t, e, s) {
                    if (this.disableLogToConsole) return;
                    let r = i.Q[t];
                    console[r](...this.formatMessage(t, e, s));
                }
                sendToErrorBooster(t, e, s) {
                    window.Ya.Rum.logError({ message: e, level: t, additional: { data: s ? this.obfuscateData({ ...this.additionalData, ...s }) : {} } });
                }
            }
        },
        48769: (t, e, s) => {
            'use strict';
            s.d(e, { OO: () => n, kY: () => r });
            let i = { NO_HANDLER: 40401, INTERNAL: 5e4 };
            function r(t) {
                return null != t && 'object' == typeof t && 'code' in t && 'message' in t;
            }
            function o() {
                return 'u' > typeof crypto && 'randomUUID' in crypto
                    ? crypto.randomUUID()
                    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (t) => {
                          let e = (16 * Math.random()) | 0;
                          return ('x' === t ? e : (3 & e) | 8).toString(16);
                      });
            }
            function n(t) {
                let { timeout: e, transport: s, compatibility: n } = t,
                    a = e ?? 1e4,
                    l = new Map(),
                    c = (function () {
                        let t = new Map();
                        return {
                            enqueue(e, s) {
                                let i,
                                    r,
                                    o = t.get(e);
                                if (o) return o.promise;
                                let n = new Promise((t, e) => {
                                    let o,
                                        n = (t, e) => {
                                            (o && (o(), (o = void 0)), t(e));
                                        };
                                    ((i = (e) => n(t, e)),
                                        (r = (t) => n(e, t)),
                                        s?.signal &&
                                            (o = (function (t, e) {
                                                if (t.aborted) return (e(t.reason ?? new DOMException('Aborted', 'AbortError')), () => {});
                                                let s = () => {
                                                    e(t.reason ?? new DOMException('Aborted', 'AbortError'));
                                                };
                                                return (
                                                    t.addEventListener('abort', s, { once: !0 }),
                                                    () => {
                                                        t.removeEventListener('abort', s);
                                                    }
                                                );
                                            })(s.signal, r)));
                                }).finally(() => {
                                    t.delete(e);
                                });
                                return (t.set(e, { promise: n, resolve: i, reject: r }), n);
                            },
                            resolve(e, s) {
                                let i = t.get(e);
                                return !!i && (i.resolve(s), !0);
                            },
                            reject(e, s) {
                                let i = t.get(e);
                                return !!i && (i.reject(s), !0);
                            },
                            clear() {
                                if (!t.size) return;
                                let e = new DOMException('Aborted', 'AbortError');
                                for (let s of t.values()) s.reject(e);
                            },
                        };
                    })(),
                    h = async (t) => {
                        let e = JSON.parse(t);
                        if (!('object' == typeof e && 'id' in e && 'refId' in e && 'type' in e && 'action' in e && 'payload' in e && 'error' in e)) return;
                        if ('res' === e.type && e.refId) return void (e.error ? c.reject(e.refId, e.error) : c.resolve(e.refId, e.payload));
                        let s = l.get(e.action);
                        if (!s || s.type !== e.type) {
                            if ('req' !== e.type) return;
                            let t = { code: i.NO_HANDLER, message: `No handler for action "${e.action}"` };
                            d({ id: o(), type: 'res', refId: e.id, action: e.action, payload: null, error: t });
                            return;
                        }
                        if ('cmd' === e.type) return void s.callback(e.payload);
                        try {
                            let t = await s.callback(e.payload);
                            d({ id: o(), type: 'res', refId: e.id, action: e.action, payload: t, error: null });
                        } catch (s) {
                            let t;
                            ((t = r(s) ? { code: s.code, message: s.message, details: s.details } : { code: i.INTERNAL, message: 'Internal error' }),
                                d({ id: o(), type: 'res', refId: e.id, action: e.action, payload: null, error: t }));
                        }
                    },
                    d = (t) => {
                        let e = JSON.stringify(t);
                        s.post(e);
                    },
                    u = (t, e) => n?.supports(t, e) ?? !0,
                    p = !1;
                return {
                    registerRequest: (t, e) => (l.set(t, { type: 'req', action: t, callback: e }), () => l.delete(t)),
                    sendRequest(t, e, s) {
                        if (!u(t, 'req')) return Promise.reject(Error(`Bridge request is not supported: ${t}`));
                        let i = o();
                        d({ id: i, refId: null, error: null, type: 'req', action: t, payload: e });
                        let r = [];
                        return (
                            s?.timeout !== 0 && r.push(AbortSignal.timeout(s?.timeout ?? a)), s?.signal && r.push(s.signal), c.enqueue(i, { signal: AbortSignal.any(r) })
                        );
                    },
                    registerCommand: (t, e) => (l.set(t, { type: 'cmd', action: t, callback: e }), () => l.delete(t)),
                    sendCommand(t, e) {
                        u(t, 'cmd') && d({ id: o(), refId: null, error: null, type: 'cmd', action: t, payload: e });
                    },
                    start() {
                        p || (s.onMessage(h), s.start(), (p = !0));
                    },
                    stop() {
                        p && (s.stop(), c.clear(), (p = !1));
                    },
                    supports: u,
                };
            }
        },
        49950: (t, e, s) => {
            'use strict';
            s.d(e, { LZ: () => o, Qc: () => r, X7: () => n, cD: () => a });
            var i = s(54607);
            let r = (0, i.R)()('collection:like'),
                o = (0, i.R)()('collection:unlike'),
                n = (0, i.R)()('collection:getEntityState'),
                a = [r, o, n];
        },
        50267: (t, e, s) => {
            'use strict';
            var i;
            (s.d(e, { Y: () => i }),
                (function (t) {
                    ((t.MAIN = 'MAIN'), (t.TRAILER = 'TRAILER'));
                })(i || (i = {})));
        },
        54607: (t, e, s) => {
            'use strict';
            s.d(e, { R: () => r });
            var i = s(81767);
            let r = () => (t) => ({ name: t, type: i.X.REQUEST });
        },
        69991: (t, e, s) => {
            'use strict';
            s.d(e, { Z: () => r });
            var i = s(42161);
            let r = { name: 'session:close', type: i.X.COMMAND };
        },
        71469: (t, e, s) => {
            'use strict';
            var i;
            (s.d(e, { O: () => i }),
                (function (t) {
                    ((t[(t.NOT_READY = 40001)] = 'NOT_READY'),
                        (t[(t.INVALID_CONFIGURATION = 40003)] = 'INVALID_CONFIGURATION'),
                        (t[(t.DISPOSED = 40004)] = 'DISPOSED'),
                        (t[(t.INVALID_HANDSHAKE = 40005)] = 'INVALID_HANDSHAKE'),
                        (t[(t.NO_HANDLER = 40401)] = 'NO_HANDLER'),
                        (t[(t.TIMEOUT = 40801)] = 'TIMEOUT'),
                        (t[(t.INTERNAL = 5e4)] = 'INTERNAL'),
                        (t[(t.TRANSPORT_UNAVAILABLE = 50301)] = 'TRANSPORT_UNAVAILABLE'));
                })(i || (i = {})));
        },
        74021: (t, e, s) => {
            'use strict';
            s.d(e, { q: () => l });
            var i = s(14567),
                r = s(243),
                o = s(62151),
                n = s(33396);
            let a = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: t, maxLogLevel: e, secureFields: s }) {
                    ((this.maxLogLevel = e), (this.secureFields = s), (this.additionalData = t));
                }
                formatMessage(t, e, s = {}, r) {
                    let o,
                        a = String(e instanceof Error && e.stack ? e.stack : e),
                        l = (0, n.A)({ ...this.additionalData, ...s });
                    return (Object.keys(l).length && (o = this.obfuscateData(l)), r) ? `${a} ${i(o)}` : [a, o];
                }
                obfuscateData(t) {
                    if (this.secureFields?.length) for (let e of this.secureFields) void 0 !== (0, r.A)(t, e) && (0, o.A)(t, e, a());
                    return t;
                }
            }
        },
        78309: (t, e, s) => {
            'use strict';
            var i;
            (s.d(e, { U: () => i }),
                (function (t) {
                    ((t.LIKE = 'like'), (t.DISLIKE = 'dislike'), (t.NEUTRAL = 'neutral'));
                })(i || (i = {})));
        },
        81767: (t, e, s) => {
            'use strict';
            var i;
            (s.d(e, { X: () => i }),
                (function (t) {
                    ((t.COMMAND = 'cmd'), (t.REQUEST = 'req'));
                })(i || (i = {})));
        },
        84447: (t, e, s) => {
            'use strict';
            s.d(e, { N: () => r });
            var i = s(81767);
            let r = () => (t) => ({ name: t, type: i.X.COMMAND });
        },
    },
]);
