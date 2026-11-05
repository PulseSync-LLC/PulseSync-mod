!(function () {
    'use strict';
    try {
        self['workbox:core:7.4.0'] && _();
    } catch (e) {}
    const e = (e, ...t) => {
        let s = e;
        return (t.length > 0 && (s += ` :: ${JSON.stringify(t)}`), s);
    };
    class t extends Error {
        constructor(t, s) {
            (super(e(t, s)), (this.name = t), (this.details = s));
        }
    }
    const s = new Set();
    const n = {
            googleAnalytics: 'googleAnalytics',
            precache: 'precache-v2',
            prefix: 'workbox',
            runtime: 'runtime',
            suffix: 'undefined' != typeof registration ? registration.scope : '',
        },
        a = (e) => [n.prefix, e, n.suffix].filter((e) => e && e.length > 0).join('-'),
        r = (e) => e || a(n.runtime);
    function i(e, t) {
        const s = new URL(e);
        for (const e of t) s.searchParams.delete(e);
        return s.href;
    }
    function o(e) {
        e.then(() => {});
    }
    class c {
        constructor() {
            this.promise = new Promise((e, t) => {
                ((this.resolve = e), (this.reject = t));
            });
        }
    }
    const h = '{tld}',
        l = [`https://api.music.yandex.${h}`, `https://api.music.qa.yandex.${h}`].map((e) =>
            e
                .split(h)
                .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
                .join('[a-z]+'),
        ),
        u = new RegExp(`^(?:${l.join('|')})$`),
        d = {};
    try {
        self['workbox:cacheable-response:7.4.0'] && _();
    } catch (e) {}
    class p {
        constructor(e = {}) {
            ((this._statuses = e.statuses), (this._headers = e.headers));
        }
        isResponseCacheable(e) {
            let t = !0;
            return (
                this._statuses && (t = this._statuses.includes(e.status)),
                this._headers && t && (t = Object.keys(this._headers).some((t) => e.headers.get(t) === this._headers[t])),
                t
            );
        }
    }
    class m {
        constructor(e) {
            ((this.cacheWillUpdate = async ({ response: e }) => (this._cacheableResponse.isResponseCacheable(e) ? e : null)), (this._cacheableResponse = new p(e)));
        }
    }
    let f, g;
    const w = new WeakMap(),
        y = new WeakMap(),
        b = new WeakMap(),
        v = new WeakMap(),
        x = new WeakMap();
    let k = {
        get(e, t, s) {
            if (e instanceof IDBTransaction) {
                if ('done' === t) return y.get(e);
                if ('objectStoreNames' === t) return e.objectStoreNames || b.get(e);
                if ('store' === t) return s.objectStoreNames[1] ? void 0 : s.objectStore(s.objectStoreNames[0]);
            }
            return q(e[t]);
        },
        set: (e, t, s) => ((e[t] = s), !0),
        has: (e, t) => (e instanceof IDBTransaction && ('done' === t || 'store' === t)) || t in e,
    };
    function E(e) {
        return e !== IDBDatabase.prototype.transaction || 'objectStoreNames' in IDBTransaction.prototype
            ? (g || (g = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e)
                ? function (...t) {
                      return (e.apply(C(this), t), q(w.get(this)));
                  }
                : function (...t) {
                      return q(e.apply(C(this), t));
                  }
            : function (t, ...s) {
                  const n = e.call(C(this), t, ...s);
                  return (b.set(n, t.sort ? t.sort() : [t]), q(n));
              };
    }
    function D(e) {
        return 'function' == typeof e
            ? E(e)
            : (e instanceof IDBTransaction &&
                  (function (e) {
                      if (y.has(e)) return;
                      const t = new Promise((t, s) => {
                          const n = () => {
                                  (e.removeEventListener('complete', a), e.removeEventListener('error', r), e.removeEventListener('abort', r));
                              },
                              a = () => {
                                  (t(), n());
                              },
                              r = () => {
                                  (s(e.error || new DOMException('AbortError', 'AbortError')), n());
                              };
                          (e.addEventListener('complete', a), e.addEventListener('error', r), e.addEventListener('abort', r));
                      });
                      y.set(e, t);
                  })(e),
              (t = e),
              (f || (f = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e) => t instanceof e) ? new Proxy(e, k) : e);
        var t;
    }
    function q(e) {
        if (e instanceof IDBRequest)
            return (function (e) {
                const t = new Promise((t, s) => {
                    const n = () => {
                            (e.removeEventListener('success', a), e.removeEventListener('error', r));
                        },
                        a = () => {
                            (t(q(e.result)), n());
                        },
                        r = () => {
                            (s(e.error), n());
                        };
                    (e.addEventListener('success', a), e.addEventListener('error', r));
                });
                return (
                    t
                        .then((t) => {
                            t instanceof IDBCursor && w.set(t, e);
                        })
                        .catch(() => {}),
                    x.set(t, e),
                    t
                );
            })(e);
        if (v.has(e)) return v.get(e);
        const t = D(e);
        return (t !== e && (v.set(e, t), x.set(t, e)), t);
    }
    const C = (e) => x.get(e);
    const R = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
        S = ['put', 'add', 'delete', 'clear'],
        O = new Map();
    function N(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || 'string' != typeof t) return;
        if (O.get(t)) return O.get(t);
        const s = t.replace(/FromIndex$/, ''),
            n = t !== s,
            a = S.includes(s);
        if (!(s in (n ? IDBIndex : IDBObjectStore).prototype) || (!a && !R.includes(s))) return;
        const r = async function (e, ...t) {
            const r = this.transaction(e, a ? 'readwrite' : 'readonly');
            let i = r.store;
            return (n && (i = i.index(t.shift())), (await Promise.all([i[s](...t), a && r.done]))[0]);
        };
        return (O.set(t, r), r);
    }
    k = ((e) => ({ ...e, get: (t, s, n) => N(t, s) || e.get(t, s, n), has: (t, s) => !!N(t, s) || e.has(t, s) }))(k);
    try {
        self['workbox:expiration:7.4.0'] && _();
    } catch (e) {}
    const T = 'cache-entries',
        M = (e) => {
            const t = new URL(e, location.href);
            return ((t.hash = ''), t.href);
        };
    class A {
        constructor(e) {
            ((this._db = null), (this._cacheName = e));
        }
        _upgradeDb(e) {
            const t = e.createObjectStore(T, { keyPath: 'id' });
            (t.createIndex('cacheName', 'cacheName', { unique: !1 }), t.createIndex('timestamp', 'timestamp', { unique: !1 }));
        }
        _upgradeDbAndDeleteOldDbs(e) {
            (this._upgradeDb(e),
                this._cacheName &&
                    (function (e, { blocked: t } = {}) {
                        const s = indexedDB.deleteDatabase(e);
                        (t && s.addEventListener('blocked', (e) => t(e.oldVersion, e)), q(s).then(() => {}));
                    })(this._cacheName));
        }
        async setTimestamp(e, t) {
            const s = { url: (e = M(e)), timestamp: t, cacheName: this._cacheName, id: this._getId(e) },
                n = (await this.getDb()).transaction(T, 'readwrite', { durability: 'relaxed' });
            (await n.store.put(s), await n.done);
        }
        async getTimestamp(e) {
            const t = await this.getDb(),
                s = await t.get(T, this._getId(e));
            return null == s ? void 0 : s.timestamp;
        }
        async expireEntries(e, t) {
            const s = await this.getDb();
            let n = await s.transaction(T).store.index('timestamp').openCursor(null, 'prev');
            const a = [];
            let r = 0;
            for (; n;) {
                const s = n.value;
                (s.cacheName === this._cacheName && ((e && s.timestamp < e) || (t && r >= t) ? a.push(n.value) : r++), (n = await n.continue()));
            }
            const i = [];
            for (const e of a) (await s.delete(T, e.id), i.push(e.url));
            return i;
        }
        _getId(e) {
            return this._cacheName + '|' + M(e);
        }
        async getDb() {
            return (
                this._db ||
                    (this._db = await (function (e, t, { blocked: s, upgrade: n, blocking: a, terminated: r } = {}) {
                        const i = indexedDB.open(e, t),
                            o = q(i);
                        return (
                            n &&
                                i.addEventListener('upgradeneeded', (e) => {
                                    n(q(i.result), e.oldVersion, e.newVersion, q(i.transaction), e);
                                }),
                            s && i.addEventListener('blocked', (e) => s(e.oldVersion, e.newVersion, e)),
                            o
                                .then((e) => {
                                    (r && e.addEventListener('close', () => r()), a && e.addEventListener('versionchange', (e) => a(e.oldVersion, e.newVersion, e)));
                                })
                                .catch(() => {}),
                            o
                        );
                    })('workbox-expiration', 1, { upgrade: this._upgradeDbAndDeleteOldDbs.bind(this) })),
                this._db
            );
        }
    }
    class I {
        constructor(e, t = {}) {
            ((this._isRunning = !1),
                (this._rerunRequested = !1),
                (this._maxEntries = t.maxEntries),
                (this._maxAgeSeconds = t.maxAgeSeconds),
                (this._matchOptions = t.matchOptions),
                (this._cacheName = e),
                (this._timestampModel = new A(e)));
        }
        async expireEntries() {
            if (this._isRunning) return void (this._rerunRequested = !0);
            this._isRunning = !0;
            const e = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0,
                t = await this._timestampModel.expireEntries(e, this._maxEntries),
                s = await self.caches.open(this._cacheName);
            for (const e of t) await s.delete(e, this._matchOptions);
            ((this._isRunning = !1), this._rerunRequested && ((this._rerunRequested = !1), o(this.expireEntries())));
        }
        async updateTimestamp(e) {
            await this._timestampModel.setTimestamp(e, Date.now());
        }
        async isURLExpired(e) {
            if (this._maxAgeSeconds) {
                const t = await this._timestampModel.getTimestamp(e),
                    s = Date.now() - 1e3 * this._maxAgeSeconds;
                return void 0 === t || t < s;
            }
            return !1;
        }
        async delete() {
            ((this._rerunRequested = !1), await this._timestampModel.expireEntries(1 / 0));
        }
    }
    class L {
        constructor(e = {}) {
            ((this.cachedResponseWillBeUsed = async ({ event: e, request: t, cacheName: s, cachedResponse: n }) => {
                if (!n) return null;
                const a = this._isResponseDateFresh(n),
                    r = this._getCacheExpiration(s);
                o(r.expireEntries());
                const i = r.updateTimestamp(t.url);
                if (e)
                    try {
                        e.waitUntil(i);
                    } catch (e) {}
                return a ? n : null;
            }),
                (this.cacheDidUpdate = async ({ cacheName: e, request: t }) => {
                    const s = this._getCacheExpiration(e);
                    (await s.updateTimestamp(t.url), await s.expireEntries());
                }),
                (this._config = e),
                (this._maxAgeSeconds = e.maxAgeSeconds),
                (this._cacheExpirations = new Map()),
                e.purgeOnQuotaError &&
                    (function (e) {
                        s.add(e);
                    })(() => this.deleteCacheAndMetadata()));
        }
        _getCacheExpiration(e) {
            if (e === r()) throw new t('expire-custom-caches-only');
            let s = this._cacheExpirations.get(e);
            return (s || ((s = new I(e, this._config)), this._cacheExpirations.set(e, s)), s);
        }
        _isResponseDateFresh(e) {
            if (!this._maxAgeSeconds) return !0;
            const t = this._getDateHeaderTimestamp(e);
            if (null === t) return !0;
            return t >= Date.now() - 1e3 * this._maxAgeSeconds;
        }
        _getDateHeaderTimestamp(e) {
            if (!e.headers.has('date')) return null;
            const t = e.headers.get('date'),
                s = new Date(t).getTime();
            return isNaN(s) ? null : s;
        }
        async deleteCacheAndMetadata() {
            for (const [e, t] of this._cacheExpirations) (await self.caches.delete(e), await t.delete());
            this._cacheExpirations = new Map();
        }
    }
    try {
        self['workbox:strategies:7.4.0'] && _();
    } catch (e) {}
    function P(e) {
        return 'string' == typeof e ? new Request(e) : e;
    }
    class j {
        constructor(e, t) {
            ((this._cacheKeys = {}),
                Object.assign(this, t),
                (this.event = t.event),
                (this._strategy = e),
                (this._handlerDeferred = new c()),
                (this._extendLifetimePromises = []),
                (this._plugins = [...e.plugins]),
                (this._pluginStateMap = new Map()));
            for (const e of this._plugins) this._pluginStateMap.set(e, {});
            this.event.waitUntil(this._handlerDeferred.promise);
        }
        async fetch(e) {
            const { event: s } = this;
            let n = P(e);
            if ('navigate' === n.mode && s instanceof FetchEvent && s.preloadResponse) {
                const e = await s.preloadResponse;
                if (e) return e;
            }
            const a = this.hasCallback('fetchDidFail') ? n.clone() : null;
            try {
                for (const e of this.iterateCallbacks('requestWillFetch')) n = await e({ request: n.clone(), event: s });
            } catch (e) {
                if (e instanceof Error) throw new t('plugin-error-request-will-fetch', { thrownErrorMessage: e.message });
            }
            const r = n.clone();
            try {
                let e;
                e = await fetch(n, 'navigate' === n.mode ? void 0 : this._strategy.fetchOptions);
                for (const t of this.iterateCallbacks('fetchDidSucceed')) e = await t({ event: s, request: r, response: e });
                return e;
            } catch (e) {
                throw (a && (await this.runCallbacks('fetchDidFail', { error: e, event: s, originalRequest: a.clone(), request: r.clone() })), e);
            }
        }
        async fetchAndCachePut(e) {
            const t = await this.fetch(e),
                s = t.clone();
            return (this.waitUntil(this.cachePut(e, s)), t);
        }
        async cacheMatch(e) {
            const t = P(e);
            let s;
            const { cacheName: n, matchOptions: a } = this._strategy,
                r = await this.getCacheKey(t, 'read'),
                i = Object.assign(Object.assign({}, a), { cacheName: n });
            s = await caches.match(r, i);
            for (const e of this.iterateCallbacks('cachedResponseWillBeUsed'))
                s = (await e({ cacheName: n, matchOptions: a, cachedResponse: s, request: r, event: this.event })) || void 0;
            return s;
        }
        async cachePut(e, n) {
            const a = P(e);
            var r;
            await ((r = 0), new Promise((e) => setTimeout(e, r)));
            const o = await this.getCacheKey(a, 'write');
            if (!n)
                throw new t('cache-put-with-no-response', { url: ((c = o.url), new URL(String(c), location.href).href.replace(new RegExp(`^${location.origin}`), '')) });
            var c;
            const h = await this._ensureResponseSafeToCache(n);
            if (!h) return !1;
            const { cacheName: l, matchOptions: u } = this._strategy,
                d = await self.caches.open(l),
                p = this.hasCallback('cacheDidUpdate'),
                m = p
                    ? await (async function (e, t, s, n) {
                          const a = i(t.url, s);
                          if (t.url === a) return e.match(t, n);
                          const r = Object.assign(Object.assign({}, n), { ignoreSearch: !0 }),
                              o = await e.keys(t, r);
                          for (const t of o) if (a === i(t.url, s)) return e.match(t, n);
                      })(d, o.clone(), ['__WB_REVISION__'], u)
                    : null;
            try {
                await d.put(o, p ? h.clone() : h);
            } catch (e) {
                if (e instanceof Error)
                    throw (
                        'QuotaExceededError' === e.name &&
                            (await (async function () {
                                for (const e of s) await e();
                            })()),
                        e
                    );
            }
            for (const e of this.iterateCallbacks('cacheDidUpdate')) await e({ cacheName: l, oldResponse: m, newResponse: h.clone(), request: o, event: this.event });
            return !0;
        }
        async getCacheKey(e, t) {
            const s = `${e.url} | ${t}`;
            if (!this._cacheKeys[s]) {
                let n = e;
                for (const e of this.iterateCallbacks('cacheKeyWillBeUsed')) n = P(await e({ mode: t, request: n, event: this.event, params: this.params }));
                this._cacheKeys[s] = n;
            }
            return this._cacheKeys[s];
        }
        hasCallback(e) {
            for (const t of this._strategy.plugins) if (e in t) return !0;
            return !1;
        }
        async runCallbacks(e, t) {
            for (const s of this.iterateCallbacks(e)) await s(t);
        }
        *iterateCallbacks(e) {
            for (const t of this._strategy.plugins)
                if ('function' == typeof t[e]) {
                    const s = this._pluginStateMap.get(t),
                        n = (n) => {
                            const a = Object.assign(Object.assign({}, n), { state: s });
                            return t[e](a);
                        };
                    yield n;
                }
        }
        waitUntil(e) {
            return (this._extendLifetimePromises.push(e), e);
        }
        async doneWaiting() {
            for (; this._extendLifetimePromises.length;) {
                const e = this._extendLifetimePromises.splice(0),
                    t = (await Promise.allSettled(e)).find((e) => 'rejected' === e.status);
                if (t) throw t.reason;
            }
        }
        destroy() {
            this._handlerDeferred.resolve(null);
        }
        async _ensureResponseSafeToCache(e) {
            let t = e,
                s = !1;
            for (const e of this.iterateCallbacks('cacheWillUpdate'))
                if (((t = (await e({ request: this.request, response: t, event: this.event })) || void 0), (s = !0), !t)) break;
            return (s || (t && 200 !== t.status && (t = void 0)), t);
        }
    }
    class B {
        constructor(e = {}) {
            ((this.cacheName = r(e.cacheName)), (this.plugins = e.plugins || []), (this.fetchOptions = e.fetchOptions), (this.matchOptions = e.matchOptions));
        }
        handle(e) {
            const [t] = this.handleAll(e);
            return t;
        }
        handleAll(e) {
            e instanceof FetchEvent && (e = { event: e, request: e.request });
            const t = e.event,
                s = 'string' == typeof e.request ? new Request(e.request) : e.request,
                n = 'params' in e ? e.params : void 0,
                a = new j(this, { event: t, request: s, params: n }),
                r = this._getResponse(a, s, t);
            return [r, this._awaitComplete(r, a, s, t)];
        }
        async _getResponse(e, s, n) {
            let a;
            await e.runCallbacks('handlerWillStart', { event: n, request: s });
            try {
                if (((a = await this._handle(s, e)), !a || 'error' === a.type)) throw new t('no-response', { url: s.url });
            } catch (t) {
                if (t instanceof Error) for (const r of e.iterateCallbacks('handlerDidError')) if (((a = await r({ error: t, event: n, request: s })), a)) break;
                if (!a) throw t;
            }
            for (const t of e.iterateCallbacks('handlerWillRespond')) a = await t({ event: n, request: s, response: a });
            return a;
        }
        async _awaitComplete(e, t, s, n) {
            let a, r;
            try {
                a = await e;
            } catch (r) {}
            try {
                (await t.runCallbacks('handlerDidRespond', { event: n, request: s, response: a }), await t.doneWaiting());
            } catch (e) {
                e instanceof Error && (r = e);
            }
            if ((await t.runCallbacks('handlerDidComplete', { event: n, request: s, response: a, error: r }), t.destroy(), r)) throw r;
        }
    }
    class U extends B {
        async _handle(e, s) {
            let n,
                a = await s.cacheMatch(e);
            if (!a)
                try {
                    a = await s.fetchAndCachePut(e);
                } catch (e) {
                    e instanceof Error && (n = e);
                }
            if (!a) throw new t('no-response', { url: e.url, error: n });
            return a;
        }
    }
    const $ = { cacheWillUpdate: async ({ response: e }) => (200 === e.status || 0 === e.status ? e : null) };
    class W extends B {
        constructor(e = {}) {
            (super(e), this.plugins.some((e) => 'cacheWillUpdate' in e) || this.plugins.unshift($), (this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0));
        }
        async _handle(e, s) {
            const n = [],
                a = [];
            let r;
            if (this._networkTimeoutSeconds) {
                const { id: t, promise: i } = this._getTimeoutPromise({ request: e, logs: n, handler: s });
                ((r = t), a.push(i));
            }
            const i = this._getNetworkPromise({ timeoutId: r, request: e, logs: n, handler: s });
            a.push(i);
            const o = await s.waitUntil((async () => (await s.waitUntil(Promise.race(a))) || (await i))());
            if (!o) throw new t('no-response', { url: e.url });
            return o;
        }
        _getTimeoutPromise({ request: e, logs: t, handler: s }) {
            let n;
            return {
                promise: new Promise((t) => {
                    n = setTimeout(async () => {
                        t(await s.cacheMatch(e));
                    }, 1e3 * this._networkTimeoutSeconds);
                }),
                id: n,
            };
        }
        async _getNetworkPromise({ timeoutId: e, request: t, logs: s, handler: n }) {
            let a, r;
            try {
                r = await n.fetchAndCachePut(t);
            } catch (e) {
                e instanceof Error && (a = e);
            }
            return (e && clearTimeout(e), (!a && r) || (r = await n.cacheMatch(t)), r);
        }
    }
    try {
        self['workbox:routing:7.4.0'] && _();
    } catch (e) {}
    const H = (e) => (e && 'object' == typeof e ? e : { handle: e });
    class F {
        constructor(e, t, s = 'GET') {
            ((this.handler = H(t)), (this.match = e), (this.method = s));
        }
        setCatchHandler(e) {
            this.catchHandler = H(e);
        }
    }
    class K extends F {
        constructor(e, t, s) {
            super(
                ({ url: t }) => {
                    const s = e.exec(t.href);
                    if (s && (t.origin === location.origin || 0 === s.index)) return s.slice(1);
                },
                t,
                s,
            );
        }
    }
    class G {
        constructor() {
            ((this._routes = new Map()), (this._defaultHandlerMap = new Map()));
        }
        get routes() {
            return this._routes;
        }
        addFetchListener() {
            self.addEventListener('fetch', (e) => {
                const { request: t } = e,
                    s = this.handleRequest({ request: t, event: e });
                s && e.respondWith(s);
            });
        }
        addCacheListener() {
            self.addEventListener('message', (e) => {
                if (e.data && 'CACHE_URLS' === e.data.type) {
                    const { payload: t } = e.data,
                        s = Promise.all(
                            t.urlsToCache.map((t) => {
                                'string' == typeof t && (t = [t]);
                                const s = new Request(...t);
                                return this.handleRequest({ request: s, event: e });
                            }),
                        );
                    (e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0)));
                }
            });
        }
        handleRequest({ request: e, event: t }) {
            const s = new URL(e.url, location.href);
            if (!s.protocol.startsWith('http')) return;
            const n = s.origin === location.origin,
                { params: a, route: r } = this.findMatchingRoute({ event: t, request: e, sameOrigin: n, url: s });
            let i = r && r.handler;
            const o = e.method;
            if ((!i && this._defaultHandlerMap.has(o) && (i = this._defaultHandlerMap.get(o)), !i)) return;
            let c;
            try {
                c = i.handle({ url: s, request: e, event: t, params: a });
            } catch (e) {
                c = Promise.reject(e);
            }
            const h = r && r.catchHandler;
            return (
                c instanceof Promise &&
                    (this._catchHandler || h) &&
                    (c = c.catch(async (n) => {
                        if (h)
                            try {
                                return await h.handle({ url: s, request: e, event: t, params: a });
                            } catch (e) {
                                e instanceof Error && (n = e);
                            }
                        if (this._catchHandler) return this._catchHandler.handle({ url: s, request: e, event: t });
                        throw n;
                    })),
                c
            );
        }
        findMatchingRoute({ url: e, sameOrigin: t, request: s, event: n }) {
            const a = this._routes.get(s.method) || [];
            for (const r of a) {
                let a;
                const i = r.match({ url: e, sameOrigin: t, request: s, event: n });
                if (i)
                    return (
                        (a = i),
                        ((Array.isArray(a) && 0 === a.length) || (i.constructor === Object && 0 === Object.keys(i).length) || 'boolean' == typeof i) && (a = void 0),
                        { route: r, params: a }
                    );
            }
            return {};
        }
        setDefaultHandler(e, t = 'GET') {
            this._defaultHandlerMap.set(t, H(e));
        }
        setCatchHandler(e) {
            this._catchHandler = H(e);
        }
        registerRoute(e) {
            (this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e));
        }
        unregisterRoute(e) {
            if (!this._routes.has(e.method)) throw new t('unregister-route-but-not-found-with-method', { method: e.method });
            const s = this._routes.get(e.method).indexOf(e);
            if (!(s > -1)) throw new t('unregister-route-route-not-registered');
            this._routes.get(e.method).splice(s, 1);
        }
    }
    let V;
    function Q(...e) {
        const s = (function (e, s, n) {
                let a;
                if ('string' == typeof e) {
                    const t = new URL(e, location.href);
                    a = new F(({ url: e }) => e.href === t.href, s, n);
                } else if (e instanceof RegExp) a = new K(e, s, n);
                else if ('function' == typeof e) a = new F(e, s, n);
                else {
                    if (!(e instanceof F)) throw new t('unsupported-route-type', { moduleName: 'workbox-routing', funcName: 'registerRoute', paramName: 'capture' });
                    a = e;
                }
                return ((V || ((V = new G()), V.addFetchListener(), V.addCacheListener()), V).registerRoute(a), a);
            })(...e),
            n = s.match.bind(s);
        return (
            (s.match = (e) => {
                const t = n(e);
                if (!t) return !1;
                const { clientId: s } = e.event;
                if (!s) return !1;
                const { enabled: a } = d;
                return void 0 === a
                    ? (e.event.waitUntil(
                          (async function (e) {
                              const t = await self.clients.get(e),
                                  s = { type: 'GET_CACHE_CONFIG' };
                              t?.postMessage(s);
                          })(s).catch((e) => {
                              console.error('[Service worker cache] Config request error', e);
                          }),
                      ),
                      !1)
                    : !0 === a && t;
            }),
            s
        );
    }
    const z = 3,
        J = { statuses: [200] },
        X = { maxAgeSeconds: 86400, purgeOnQuotaError: !0, maxEntries: 200 },
        Y = 3,
        Z = { statuses: [200] },
        ee = { maxAgeSeconds: 86400, purgeOnQuotaError: !0, maxEntries: 200 },
        te = { statuses: [0, 200] },
        se = { maxAgeSeconds: 86400, maxEntries: 200, purgeOnQuotaError: !0 },
        ne = {
            skeletonTabs: /^\/landing\/skeleton\/[^/?#]+\/tabs$/,
            landingBlock: /^\/landing\/block\/[^/?#]+(?:\/[^/?#]+)*$/,
            landingBlocks: /^\/landing-blocks\/[^/?#]+(?:\/[^/?#]+)*$/,
            personalTop: /^\/personal\/top\/(?:artists\/(?:month|blocks\/liked-and-top(?:-with-items)?)|tracks\/month)$/,
            concerts: /^\/concerts\/(?:landing\/(?:top|personal)|viewed|[^/?#]+\/blocks\/place)$/,
            modelArtists: /^\/models\/artists$/,
            search: /^\/search\/(?:history|suggestions\/q2v)$/,
            donations: /^\/donation\/recommendations\/personal$/,
            artist: /^\/artists\/[^/?#]+\/(?:blocks\/(?:artist-(?:wave|playlists|clips|concerts|albums|studio-albums|pick|compilations|release|donation|upcoming-release)|bandlink-scanner|similar-artists|about-artist)|familiar-you\/info|tracks|similar-entities)$/,
            dynamicPage: /^\/dynamic-pages\/div-screens\/[^/?#]+$/,
            waveRooms: /^\/wave\/rooms$/,
        };
    const ae = {
        landingSkeleton: /^\/landing\/skeleton\/[^/?#]+$/,
        artistSkeleton: /^\/artists\/[^/?#]+\/skeletons\/[^/?#]+$/,
        concertSkeleton: /^\/concerts\/[^/?#]+\/skeletons\/[^/?#]+$/,
    };
    function re() {
        (Q(
            ({ url: e }) => u.test(e.origin) && Object.values(ne).some((t) => t.test(e.pathname)),
            new W({ cacheName: 'music-landing-blocks', networkTimeoutSeconds: z, plugins: [new m(J), new L(X)] }),
            'GET',
        ),
            Q(
                ({ url: e }) =>
                    u.test(e.origin) &&
                    ((ae.landingSkeleton.test(e.pathname) && 'false' === e.searchParams.get('showWizard')) ||
                        ae.artistSkeleton.test(e.pathname) ||
                        ae.concertSkeleton.test(e.pathname)),
                new W({ cacheName: 'music-landing-skeletons', networkTimeoutSeconds: Y, plugins: [new m(Z), new L(ee)] }),
                'GET',
            ));
    }
    const ie = { musicImages: /^\/get-music-/ };
    function oe() {
        Q(
            ({ url: e, request: t }) => 'image' === t.destination && 'https://avatars.yandex.net' === e.origin && Object.values(ie).some((t) => t.test(e.pathname)),
            new U({ cacheName: 'music-images', plugins: [new m(te), new L(se)] }),
            'GET',
        );
    }
    (self.skipWaiting(),
        self.addEventListener('activate', () => self.clients.claim()),
        self.addEventListener('message', (e) => {
            var t;
            'SET_CACHE_CONFIG' === e.data?.type && 'boolean' == typeof e.data?.payload?.enabled && ((t = e.data.payload.enabled), (d.enabled = t));
        }),
        re(),
        oe());
})();
