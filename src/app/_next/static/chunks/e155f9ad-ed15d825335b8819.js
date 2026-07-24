'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1311],
    {
        60754: (e, t, r) => {
            r.d(t, { L3: () => ek, X6: () => w, Yo: () => _, Zn: () => O, _$: () => A, _n: () => I, dV: () => P, gK: () => tA, o8: () => j, wg: () => T, zr: () => S });
            var n,
                i,
                a,
                o,
                l,
                u,
                c,
                s,
                p = r(92708),
                f = r(49124);
            !(function (e) {
                (e.afterCreate = 'afterCreate'),
                    (e.afterAttach = 'afterAttach'),
                    (e.afterCreationFinalization = 'afterCreationFinalization'),
                    (e.beforeDetach = 'beforeDetach'),
                    (e.beforeDestroy = 'beforeDestroy');
            })(n || (n = {}));
            var b = function (e, t) {
                return (b =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    })(e, t);
            };
            function h(e, t) {
                if ('function' != typeof t && null !== t) throw TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
                function r() {
                    this.constructor = e;
                }
                b(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
            }
            var d = function () {
                return (d =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function y(e) {
                var t = 'function' == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && 'number' == typeof e.length)
                    return {
                        next: function () {
                            return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                        },
                    };
                throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
            }
            function v(e, t) {
                var r = 'function' == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n,
                    i,
                    a = r.call(e),
                    o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) o.push(n.value);
                } catch (e) {
                    i = { error: e };
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                return o;
            }
            function g(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, i = 0, a = t.length; i < a; i++) (!n && i in t) || (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
                return e.concat(n || Array.prototype.slice.call(t));
            }
            function m(e) {
                return en(e, 1), ei(e).type;
            }
            function w(e, t) {
                en(e, 1),
                    eN(
                        t,
                        function (e) {
                            return 'object' == typeof e;
                        },
                        'object or array',
                        2,
                    ),
                    ei(e).applyPatches(ey(t));
            }
            function P(e, t) {
                void 0 === t && (t = !0), en(e, 1);
                var r = ei(e);
                return t ? r.snapshot : ew(r.type.getSnapshot(r, !1));
            }
            function O(e) {
                return en(e, 1), ei(e).root.storedValue;
            }
            function j(e, t) {
                void 0 === t && (t = !0), en(e, 1);
                var r = ei(e);
                return r.type.create(r.snapshot, !0 === t ? r.root.environment : !1 === t ? void 0 : t);
            }
            function _(e) {
                return en(e, 1), ei(e).detach(), e;
            }
            function S(e) {
                en(e, 1);
                var t = ei(e);
                t.isRoot ? t.die() : t.parent.removeChild(t.subpath);
            }
            function I(e) {
                return en(e, 1), ei(e).observableIsAlive;
            }
            function A(e) {
                en(e, 1);
                var t = ei(e),
                    r = t.root.environment;
                if (!r) throw new ef('Failed to find the environment of '.concat(t, ' ').concat(t.path));
                return r;
            }
            function T(e) {
                return e;
            }
            'function' == typeof SuppressedError && SuppressedError;
            var E = (function () {
                    function e(e, t, r, n) {
                        Object.defineProperty(this, 'type', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                            Object.defineProperty(this, 'environment', { enumerable: !0, configurable: !0, writable: !0, value: n }),
                            Object.defineProperty(this, '_escapedSubpath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, '_subpath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, '_subpathUponDeath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, '_pathUponDeath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'storedValue', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'aliveAtom', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, '_state', { enumerable: !0, configurable: !0, writable: !0, value: c.INITIALIZING }),
                            Object.defineProperty(this, '_hookSubscribers', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, '_parent', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'pathAtom', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (this.environment = n),
                            this.baseSetParent(t, r);
                    }
                    return (
                        Object.defineProperty(e.prototype, 'subpath', {
                            get: function () {
                                return this._subpath;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'subpathUponDeath', {
                            get: function () {
                                return this._subpathUponDeath;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'pathUponDeath', {
                            get: function () {
                                return this._pathUponDeath;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.type.getValue(this);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'state', {
                            get: function () {
                                return this._state;
                            },
                            set: function (e) {
                                var t = this.isAlive;
                                this._state = e;
                                var r = this.isAlive;
                                this.aliveAtom && t !== r && this.aliveAtom.reportChanged();
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'fireInternalHook', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this._hookSubscribers && this._hookSubscribers.emit(e, this, e);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'registerHook', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                return this._hookSubscribers || (this._hookSubscribers = new eI()), this._hookSubscribers.register(e, t);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'parent', {
                            get: function () {
                                return this._parent;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'getReconciliationType', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.type;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'baseSetParent', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                (this._parent = e), (this._subpath = t), (this._escapedSubpath = void 0), this.pathAtom && this.pathAtom.reportChanged();
                            },
                        }),
                        Object.defineProperty(e.prototype, 'path', {
                            get: function () {
                                return this.getEscapedPath(!0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'getEscapedPath', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return (e && (this.pathAtom || (this.pathAtom = (0, p.MN)('path')), this.pathAtom.reportObserved()), this.parent)
                                    ? (void 0 === this._escapedSubpath && (this._escapedSubpath = this._subpath ? ez(this._subpath) : ''),
                                      this.parent.getEscapedPath(e) + '/' + this._escapedSubpath)
                                    : '';
                            },
                        }),
                        Object.defineProperty(e.prototype, 'isRoot', {
                            get: function () {
                                return null === this.parent;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isAlive', {
                            get: function () {
                                return this.state !== c.DEAD;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isDetaching', {
                            get: function () {
                                return this.state === c.DETACHING;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'observableIsAlive', {
                            get: function () {
                                return this.aliveAtom || (this.aliveAtom = (0, p.MN)('alive')), this.aliveAtom.reportObserved(), this.isAlive;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'baseFinalizeCreation', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                0;
                                if (this.state === c.CREATED) {
                                    if (this.parent) {
                                        if (this.parent.state !== c.FINALIZED) return;
                                        this.fireHook(n.afterAttach);
                                    }
                                    (this.state = c.FINALIZED), e && e();
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'baseFinalizeDeath', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this._hookSubscribers && this._hookSubscribers.clearAll(),
                                    (this._subpathUponDeath = this._subpath),
                                    (this._pathUponDeath = this.getEscapedPath(!1)),
                                    this.baseSetParent(null, ''),
                                    (this.state = c.DEAD);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'baseAboutToDie', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.fireHook(n.beforeDestroy);
                            },
                        }),
                        e
                    );
                })(),
                C = (function (e) {
                    function t(t, r, n, i, a) {
                        var o = e.call(this, t, r, n, i) || this;
                        try {
                            o.storedValue = t.createNewInstance(a);
                        } catch (e) {
                            throw ((o.state = c.DEAD), e);
                        }
                        return (o.state = c.CREATED), o.finalizeCreation(), o;
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'root', {
                            get: function () {
                                if (!this.parent) throw new ef('This scalar node is not part of a tree');
                                return this.parent.root;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'setParent', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this.parent !== e,
                                    n = this.subpath !== t;
                                if (r || n) {
                                    0;
                                    (this.environment = void 0), this.baseSetParent(this.parent, t);
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'snapshot', {
                            get: function () {
                                return ew(this.getSnapshot());
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'getSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.type.getSnapshot(this);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'toString', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = (this.isAlive ? this.path : this.pathUponDeath) || '<root>';
                                return ''
                                    .concat(this.type.name, '@')
                                    .concat(e)
                                    .concat(this.isAlive ? '' : ' [dead]');
                            },
                        }),
                        Object.defineProperty(t.prototype, 'die', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.isAlive && this.state !== c.DETACHING && (this.aboutToDie(), this.finalizeDeath());
                            },
                        }),
                        Object.defineProperty(t.prototype, 'finalizeCreation', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.baseFinalizeCreation();
                            },
                        }),
                        Object.defineProperty(t.prototype, 'aboutToDie', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.baseAboutToDie();
                            },
                        }),
                        Object.defineProperty(t.prototype, 'finalizeDeath', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.baseFinalizeDeath();
                            },
                        }),
                        Object.defineProperty(t.prototype, 'fireHook', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.fireInternalHook(e);
                            },
                        }),
                        t
                    );
                })(E);
            C.prototype.die = (0, p.XI)(C.prototype.die);
            var N = 1;
            !(function (e) {
                (e[(e.UNINITIALIZED = 0)] = 'UNINITIALIZED'), (e[(e.CREATING = 1)] = 'CREATING'), (e[(e.CREATED = 2)] = 'CREATED');
            })(i || (i = {})),
                (function (e) {
                    (e.Dispose = 'dispose'), (e.Patch = 'patch'), (e.Snapshot = 'snapshot');
                })(a || (a = {}));
            var V = {
                    onError: function (e) {
                        throw e;
                    },
                },
                D = (function (e) {
                    function t(t, r, n, a, o) {
                        var l = e.call(this, t, r, n, a) || this;
                        if (
                            (Object.defineProperty(l, 'nodeId', { enumerable: !0, configurable: !0, writable: !0, value: ++N }),
                            Object.defineProperty(l, 'identifierAttribute', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, 'identifier', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, 'unnormalizedIdentifier', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, 'identifierCache', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, 'isProtectionEnabled', { enumerable: !0, configurable: !0, writable: !0, value: !0 }),
                            Object.defineProperty(l, 'middlewares', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, 'hasSnapshotPostProcessor', { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
                            Object.defineProperty(l, '_applyPatches', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, '_applySnapshot', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, '_autoUnbox', { enumerable: !0, configurable: !0, writable: !0, value: !0 }),
                            Object.defineProperty(l, '_isRunningAction', { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
                            Object.defineProperty(l, '_hasSnapshotReaction', { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
                            Object.defineProperty(l, '_observableInstanceState', { enumerable: !0, configurable: !0, writable: !0, value: i.UNINITIALIZED }),
                            Object.defineProperty(l, '_childNodes', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, '_initialSnapshot', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, '_cachedInitialSnapshot', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, '_cachedInitialSnapshotCreated', { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
                            Object.defineProperty(l, '_snapshotComputed', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, '_snapshotUponDeath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(l, '_internalEvents', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (l._snapshotComputed = (0, p.EW)(function () {
                                return ew(l.getSnapshot());
                            })),
                            (l.unbox = l.unbox.bind(l)),
                            (l._initialSnapshot = ew(o)),
                            (l.identifierAttribute = t.identifierAttribute),
                            r || (l.identifierCache = new Q()),
                            (l._childNodes = t.initializeChildNodes(l, l._initialSnapshot)),
                            (l.identifier = null),
                            (l.unnormalizedIdentifier = null),
                            l.identifierAttribute && l._initialSnapshot)
                        ) {
                            var u = l._initialSnapshot[l.identifierAttribute];
                            if (void 0 === u) {
                                var c = l._childNodes[l.identifierAttribute];
                                c && (u = c.value);
                            }
                            if ('string' != typeof u && 'number' != typeof u)
                                throw new ef("Instance identifier '".concat(l.identifierAttribute, "' for type '").concat(l.type.name, "' must be a string or a number"));
                            (l.identifier = '' + u), (l.unnormalizedIdentifier = u);
                        }
                        return r ? r.root.identifierCache.addNodeToCache(l) : l.identifierCache.addNodeToCache(l), l;
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'applyPatches', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.createObservableInstanceIfNeeded(), this._applyPatches(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'applySnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.createObservableInstanceIfNeeded(), this._applySnapshot(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'createObservableInstanceIfNeeded', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                void 0 === e && (e = !0), this._observableInstanceState === i.UNINITIALIZED && this.createObservableInstance(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'createObservableInstance', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                void 0 === e && (e = !0), 0;
                                this._observableInstanceState = i.CREATING;
                                for (var t, r, a, o, l = [], u = this.parent; u && u._observableInstanceState === i.UNINITIALIZED; ) l.unshift(u), (u = u.parent);
                                try {
                                    for (var s = y(l), p = s.next(); !p.done; p = s.next()) {
                                        var f = p.value;
                                        f.createObservableInstanceIfNeeded(!1);
                                    }
                                } catch (e) {
                                    t = { error: e };
                                } finally {
                                    try {
                                        p && !p.done && (r = s.return) && r.call(s);
                                    } finally {
                                        if (t) throw t.error;
                                    }
                                }
                                var b = this.type;
                                try {
                                    (this.storedValue = b.createNewInstance(this._childNodes)),
                                        this.preboot(),
                                        (this._isRunningAction = !0),
                                        b.finalizeNewInstance(this, this.storedValue);
                                } catch (e) {
                                    throw ((this.state = c.DEAD), e);
                                } finally {
                                    this._isRunningAction = !1;
                                }
                                if (
                                    ((this._observableInstanceState = i.CREATED),
                                    this._snapshotComputed.trackAndCompute(),
                                    this.isRoot && this._addSnapshotReaction(),
                                    (this._childNodes = es),
                                    (this.state = c.CREATED),
                                    e)
                                ) {
                                    this.fireHook(n.afterCreate), this.finalizeCreation();
                                    try {
                                        for (var h = y(l.reverse()), d = h.next(); !d.done; d = h.next()) {
                                            var f = d.value;
                                            f.fireHook(n.afterCreate), f.finalizeCreation();
                                        }
                                    } catch (e) {
                                        a = { error: e };
                                    } finally {
                                        try {
                                            d && !d.done && (o = h.return) && o.call(h);
                                        } finally {
                                            if (a) throw a.error;
                                        }
                                    }
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'root', {
                            get: function () {
                                var e = this.parent;
                                return e ? e.root : this;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'clearParent', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                if (this.parent) {
                                    this.fireHook(n.beforeDetach);
                                    var e = this.state;
                                    this.state = c.DETACHING;
                                    var t = this.root,
                                        r = t.environment,
                                        i = t.identifierCache.splitCache(this);
                                    try {
                                        this.parent.removeChild(this.subpath), this.baseSetParent(null, ''), (this.environment = r), (this.identifierCache = i);
                                    } finally {
                                        this.state = e;
                                    }
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'setParent', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = e !== this.parent,
                                    i = t !== this.subpath;
                                if (r || i) {
                                    0;
                                    r
                                        ? ((this.environment = void 0), e.root.identifierCache.mergeCache(this), this.baseSetParent(e, t), this.fireHook(n.afterAttach))
                                        : i && this.baseSetParent(this.parent, t);
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'fireHook', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                this.fireInternalHook(e);
                                var r = this.storedValue && 'object' == typeof this.storedValue && this.storedValue[e];
                                'function' == typeof r &&
                                    (p._t
                                        ? (0, p._t)(function () {
                                              r.apply(t.storedValue);
                                          })
                                        : r.apply(this.storedValue));
                            },
                        }),
                        Object.defineProperty(t.prototype, 'snapshot', {
                            get: function () {
                                return this.hasSnapshotPostProcessor && this.createObservableInstanceIfNeeded(), this._snapshotComputed.get();
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'getSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.isAlive
                                    ? this._observableInstanceState === i.CREATED
                                        ? this._getActualSnapshot()
                                        : this._getCachedInitialSnapshot()
                                    : this._snapshotUponDeath;
                            },
                        }),
                        Object.defineProperty(t.prototype, '_getActualSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.type.getSnapshot(this);
                            },
                        }),
                        Object.defineProperty(t.prototype, '_getCachedInitialSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                if (!this._cachedInitialSnapshotCreated) {
                                    var e = this.type,
                                        t = this._childNodes,
                                        r = this._initialSnapshot;
                                    (this._cachedInitialSnapshot = e.processInitialSnapshot(t, r)), (this._cachedInitialSnapshotCreated = !0);
                                }
                                return this._cachedInitialSnapshot;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isRunningAction', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return !!this._isRunningAction || (!this.isRoot && this.parent.isRunningAction());
                            },
                        }),
                        Object.defineProperty(t.prototype, 'assertAlive', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (!this.isAlive) {
                                    var t = this._getAssertAliveError(e);
                                    eC(t);
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, '_getAssertAliveError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.getEscapedPath(!1) || this.pathUponDeath || '',
                                    r = (e.subpath && ez(e.subpath)) || '',
                                    n = e.actionContext || u;
                                n && 'action' !== n.type && n.parentActionEvent && (n = n.parentActionEvent);
                                var i = '';
                                if (n && null != n.name) {
                                    var a,
                                        o = (n && n.context && (en((a = n.context), 1), ei(a).path)) || t;
                                    i = ''.concat(o, '.').concat(n.name, '()');
                                }
                                return "You are trying to read or write to an object that is no longer part of a state tree. (Object type: '"
                                    .concat(this.type.name, "', Path upon death: '")
                                    .concat(t, "', Subpath: '")
                                    .concat(r, "', Action: '")
                                    .concat(i, "'). Either detach nodes first, or don't use objects after removing / replacing them in the tree.");
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getChildNode', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.assertAlive({ subpath: e }), (this._autoUnbox = !1);
                                try {
                                    return this._observableInstanceState === i.CREATED ? this.type.getChildNode(this, e) : this._childNodes[e];
                                } finally {
                                    this._autoUnbox = !0;
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getChildren', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.assertAlive(es), (this._autoUnbox = !1);
                                try {
                                    return this._observableInstanceState === i.CREATED ? this.type.getChildren(this) : el(this._childNodes);
                                } finally {
                                    this._autoUnbox = !0;
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getChildType', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this.type.getChildType(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isProtected', {
                            get: function () {
                                return this.root.isProtectionEnabled;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'assertWritable', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if ((this.assertAlive(e), !this.isRunningAction() && this.isProtected))
                                    throw new ef("Cannot modify '".concat(this, "', the object is protected and can only be modified by using an action."));
                            },
                        }),
                        Object.defineProperty(t.prototype, 'removeChild', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.type.removeChild(this, e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'unbox', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return e ? (this.assertAlive({ subpath: e.subpath || e.subpathUponDeath }), this._autoUnbox ? e.value : e) : e;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'toString', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = (this.isAlive ? this.path : this.pathUponDeath) || '<root>',
                                    t = this.identifier ? '(id: '.concat(this.identifier, ')') : '';
                                return ''
                                    .concat(this.type.name, '@')
                                    .concat(e)
                                    .concat(t)
                                    .concat(this.isAlive ? '' : ' [dead]');
                            },
                        }),
                        Object.defineProperty(t.prototype, 'finalizeCreation', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this;
                                this.baseFinalizeCreation(function () {
                                    var t, r;
                                    try {
                                        for (var i = y(e.getChildren()), a = i.next(); !a.done; a = i.next()) a.value.finalizeCreation();
                                    } catch (e) {
                                        t = { error: e };
                                    } finally {
                                        try {
                                            a && !a.done && (r = i.return) && r.call(i);
                                        } finally {
                                            if (t) throw t.error;
                                        }
                                    }
                                    e.fireInternalHook(n.afterCreationFinalization);
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'detach', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                if (!this.isAlive) throw new ef('Error while detaching, node is not alive.');
                                this.clearParent();
                            },
                        }),
                        Object.defineProperty(t.prototype, 'preboot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this;
                                (this._applyPatches = W(this.storedValue, '@APPLY_PATCHES', function (t) {
                                    t.forEach(function (t) {
                                        if (!t.path) return void e.type.applySnapshot(e, t.value);
                                        var r = (function (e) {
                                            var t = e.split('/').map(eR);
                                            if (!('' === e || '.' === e || '..' === e || eT(e, '/') || eT(e, './') || eT(e, '../')))
                                                throw new ef("a json path must be either rooted, empty or relative, but got '".concat(e, "'"));
                                            return '' === t[0] && t.shift(), t;
                                        })(t.path);
                                        (function (e, t, r) {
                                            void 0 === r && (r = !0);
                                            var n = e;
                                            try {
                                                for (var i = 0; i < t.length; i++) {
                                                    var a = t[i];
                                                    if ('..' === a) {
                                                        if ((n = n.parent)) continue;
                                                    } else if ('.' === a) continue;
                                                    else if (n) {
                                                        if (n instanceof C) {
                                                            var o = n.value;
                                                            er(o) && (n = ei(o));
                                                        }
                                                        if (n instanceof D && n.getChildType(a) && (n = n.getChildNode(a))) continue;
                                                    }
                                                    throw new ef(
                                                        "Could not resolve '"
                                                            .concat(a, "' in path '")
                                                            .concat(eF(t.slice(0, i)) || '/', "' while resolving '")
                                                            .concat(eF(t), "'"),
                                                    );
                                                }
                                            } catch (e) {
                                                if (!r) return;
                                                throw e;
                                            }
                                            return n;
                                        })(e, r.slice(0, -1)).applyPatchLocally(r[r.length - 1], t);
                                    });
                                })),
                                    (this._applySnapshot = W(this.storedValue, '@APPLY_SNAPSHOT', function (t) {
                                        if (t !== e.snapshot) return e.type.applySnapshot(e, t);
                                    })),
                                    e_(this.storedValue, '$treenode', this),
                                    e_(this.storedValue, 'toJSON', eo);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'die', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.isAlive && this.state !== c.DETACHING && (this.aboutToDie(), this.finalizeDeath());
                            },
                        }),
                        Object.defineProperty(t.prototype, 'aboutToDie', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this._observableInstanceState !== i.UNINITIALIZED &&
                                    (this.getChildren().forEach(function (e) {
                                        e.aboutToDie();
                                    }),
                                    this.baseAboutToDie(),
                                    this._internalEventsEmit(a.Dispose),
                                    this._internalEventsClear(a.Dispose));
                            },
                        }),
                        Object.defineProperty(t.prototype, 'finalizeDeath', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.getChildren().forEach(function (e) {
                                    e.finalizeDeath();
                                }),
                                    this.root.identifierCache.notifyDied(this);
                                var e = this.snapshot;
                                (this._snapshotUponDeath = e), this._internalEventsClearAll(), this.baseFinalizeDeath();
                            },
                        }),
                        Object.defineProperty(t.prototype, 'onSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this._addSnapshotReaction(), this._internalEventsRegister(a.Snapshot, e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'emitSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this._internalEventsEmit(a.Snapshot, e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'onPatch', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this._internalEventsRegister(a.Patch, e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'emitPatch', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if (this._internalEventsHasSubscribers(a.Patch)) {
                                    var r = t.path.substr(this.path.length) + (e.path ? '/' + e.path : ''),
                                        n = v(
                                            (function (e) {
                                                if (!('oldValue' in e)) throw new ef('Patches without `oldValue` field cannot be inversed');
                                                return [
                                                    (function (e) {
                                                        switch (e.op) {
                                                            case 'add':
                                                                return { op: 'add', path: e.path, value: e.value };
                                                            case 'remove':
                                                                return { op: 'remove', path: e.path };
                                                            case 'replace':
                                                                return { op: 'replace', path: e.path, value: e.value };
                                                        }
                                                    })(e),
                                                    (function (e) {
                                                        switch (e.op) {
                                                            case 'add':
                                                                return { op: 'remove', path: e.path };
                                                            case 'remove':
                                                                return { op: 'add', path: e.path, value: e.oldValue };
                                                            case 'replace':
                                                                return { op: 'replace', path: e.path, value: e.oldValue };
                                                        }
                                                    })(e),
                                                ];
                                            })(
                                                (function (e) {
                                                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                                    for (var n = 0; n < t.length; n++) {
                                                        var i = t[n];
                                                        for (var a in i) e[a] = i[a];
                                                    }
                                                    return e;
                                                })({}, e, { path: r }),
                                            ),
                                            2,
                                        ),
                                        i = n[0],
                                        o = n[1];
                                    this._internalEventsEmit(a.Patch, i, o);
                                }
                                this.parent && this.parent.emitPatch(e, t);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'hasDisposer', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this._internalEventsHas(a.Dispose, e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'addDisposer', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (!this.hasDisposer(e)) return void this._internalEventsRegister(a.Dispose, e, !0);
                                throw new ef('cannot add a disposer when it is already registered for execution');
                            },
                        }),
                        Object.defineProperty(t.prototype, 'removeDisposer', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (!this._internalEventsHas(a.Dispose, e)) throw new ef('cannot remove a disposer which was never registered for execution');
                                this._internalEventsUnregister(a.Dispose, e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'removeMiddleware', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (this.middlewares) {
                                    var t = this.middlewares.indexOf(e);
                                    t >= 0 && this.middlewares.splice(t, 1);
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'addMiddleWare', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this;
                                void 0 === t && (t = !0);
                                var n = { handler: e, includeHooks: t };
                                return (
                                    this.middlewares ? this.middlewares.push(n) : (this.middlewares = [n]),
                                    function () {
                                        r.removeMiddleware(n);
                                    }
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'applyPatchLocally', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                this.assertWritable({ subpath: e }), this.createObservableInstanceIfNeeded(), this.type.applyPatchLocally(this, e, t);
                            },
                        }),
                        Object.defineProperty(t.prototype, '_addSnapshotReaction', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this;
                                if (!this._hasSnapshotReaction) {
                                    var t = (0, p.mJ)(
                                        function () {
                                            return e.snapshot;
                                        },
                                        function (t) {
                                            return e.emitSnapshot(t);
                                        },
                                        V,
                                    );
                                    this.addDisposer(t), (this._hasSnapshotReaction = !0);
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, '_internalEventsHasSubscribers', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return !!this._internalEvents && this._internalEvents.hasSubscribers(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, '_internalEventsRegister', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r) {
                                return void 0 === r && (r = !1), this._internalEvents || (this._internalEvents = new eI()), this._internalEvents.register(e, t, r);
                            },
                        }),
                        Object.defineProperty(t.prototype, '_internalEventsHas', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                return !!this._internalEvents && this._internalEvents.has(e, t);
                            },
                        }),
                        Object.defineProperty(t.prototype, '_internalEventsUnregister', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                this._internalEvents && this._internalEvents.unregister(e, t);
                            },
                        }),
                        Object.defineProperty(t.prototype, '_internalEventsEmit', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                for (var t, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                                this._internalEvents && (t = this._internalEvents).emit.apply(t, g([e], v(r), !1));
                            },
                        }),
                        Object.defineProperty(t.prototype, '_internalEventsClear', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this._internalEvents && this._internalEvents.clear(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, '_internalEventsClearAll', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this._internalEvents && this._internalEvents.clearAll();
                            },
                        }),
                        t
                    );
                })(E);
            (D.prototype.createObservableInstance = (0, p.XI)(D.prototype.createObservableInstance)),
                (D.prototype.detach = (0, p.XI)(D.prototype.detach)),
                (D.prototype.die = (0, p.XI)(D.prototype.die)),
                (function (e) {
                    (e[(e.String = 1)] = 'String'),
                        (e[(e.Number = 2)] = 'Number'),
                        (e[(e.Boolean = 4)] = 'Boolean'),
                        (e[(e.Date = 8)] = 'Date'),
                        (e[(e.Literal = 16)] = 'Literal'),
                        (e[(e.Array = 32)] = 'Array'),
                        (e[(e.Map = 64)] = 'Map'),
                        (e[(e.Object = 128)] = 'Object'),
                        (e[(e.Frozen = 256)] = 'Frozen'),
                        (e[(e.Optional = 512)] = 'Optional'),
                        (e[(e.Reference = 1024)] = 'Reference'),
                        (e[(e.Identifier = 2048)] = 'Identifier'),
                        (e[(e.Late = 4096)] = 'Late'),
                        (e[(e.Refinement = 8192)] = 'Refinement'),
                        (e[(e.Union = 16384)] = 'Union'),
                        (e[(e.Null = 32768)] = 'Null'),
                        (e[(e.Undefined = 65536)] = 'Undefined'),
                        (e[(e.Integer = 131072)] = 'Integer'),
                        (e[(e.Custom = 262144)] = 'Custom'),
                        (e[(e.SnapshotProcessor = 524288)] = 'SnapshotProcessor'),
                        (e[(e.Lazy = 1048576)] = 'Lazy'),
                        (e[(e.Finite = 2097152)] = 'Finite'),
                        (e[(e.Float = 4194304)] = 'Float');
                })(l || (l = {}));
            var x = 'cannotDetermine',
                k = Symbol('$type'),
                z = (function () {
                    function e(e) {
                        Object.defineProperty(this, o, { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'C', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'S', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'T', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'N', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'isType', { enumerable: !0, configurable: !0, writable: !0, value: !0 }),
                            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (this.name = e);
                    }
                    return (
                        Object.defineProperty(e.prototype, 'create', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                return K(this, e), this.instantiate(null, '', t, e).value;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                throw new ef('unimplemented method');
                            },
                        }),
                        Object.defineProperty(e.prototype, 'isAssignableFrom', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return e === this;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'validate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if (ea(e)) {
                                    var r = m(e);
                                    return this.isAssignableFrom(r) ? ec : B(t, e);
                                }
                                return this.isValidSnapshot(e, t);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'is', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return 0 === this.validate(e, [{ path: '', type: this }]).length;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'Type', {
                            get: function () {
                                throw new ef(
                                    'Factory.Type should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.Type`',
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'TypeWithoutSTN', {
                            get: function () {
                                throw new ef(
                                    'Factory.TypeWithoutSTN should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.TypeWithoutSTN`',
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'SnapshotType', {
                            get: function () {
                                throw new ef(
                                    'Factory.SnapshotType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.SnapshotType`',
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'CreationType', {
                            get: function () {
                                throw new ef(
                                    'Factory.CreationType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.CreationType`',
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            (o = k), (z.prototype.create = (0, p.XI)(z.prototype.create));
            var R = (function (e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return Object.defineProperty(r, 'identifierAttribute', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), r;
                }
                return (
                    h(t, e),
                    Object.defineProperty(t.prototype, 'create', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t, r) {
                            return void 0 === t && (t = this.getDefaultSnapshot()), e.prototype.create.call(this, t, r);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getValue', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            return e.createObservableInstanceIfNeeded(), e.storedValue;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'isMatchingSnapshotId', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t) {
                            return !e.identifierAttribute || e.identifier === '' + t[e.identifierAttribute];
                        },
                    }),
                    Object.defineProperty(t.prototype, 'tryToReconcileNode', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t) {
                            return (
                                !e.isDetaching &&
                                (!!(e.snapshot === t || (er(t) && ei(t) === e)) ||
                                    (!!(e.type === this && eg(t) && !er(t) && this.isMatchingSnapshotId(e, t)) && (e.applySnapshot(t), !0)))
                            );
                        },
                    }),
                    Object.defineProperty(t.prototype, 'reconcile', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t, r, n) {
                            if (this.tryToReconcileNode(e, t)) return e.setParent(r, n), e;
                            if ((e.die(), er(t) && this.isAssignableFrom(m(t)))) {
                                var i = ei(t);
                                return i.setParent(r, n), i;
                            }
                            return this.instantiate(r, n, void 0, t);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getSubTypes', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return null;
                        },
                    }),
                    t
                );
            })(z);
            R.prototype.create = (0, p.XI)(R.prototype.create);
            var F = (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    h(t, e),
                    Object.defineProperty(t.prototype, 'createNewInstance', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            return e;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getValue', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            return e.storedValue;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getSnapshot', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            return e.storedValue;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'reconcile', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t, r, n) {
                            if (!e.isDetaching && e.type === this && e.storedValue === t) return e;
                            var i = this.instantiate(r, n, void 0, t);
                            return e.die(), i;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getSubTypes', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return null;
                        },
                    }),
                    t
                );
            })(z);
            function H(e) {
                return 'object' == typeof e && e && !0 === e.isType;
            }
            function M(e, t) {
                eN(e, H, 'mobx-state-tree type', t);
            }
            !(function () {
                function e(e, t) {
                    Object.defineProperty(this, 'hooks', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'call', { enumerable: !0, configurable: !0, writable: !0, value: t }),
                        Object.defineProperty(this, 'flowsPending', { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
                        Object.defineProperty(this, 'running', { enumerable: !0, configurable: !0, writable: !0, value: !0 }),
                        e && e.onStart(t);
                }
                Object.defineProperty(e.prototype, 'finish', {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function (e) {
                        this.running && ((this.running = !1), this.hooks && this.hooks.onFinish(this.call, e));
                    },
                }),
                    Object.defineProperty(e.prototype, 'incFlowsPending', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            this.flowsPending++;
                        },
                    }),
                    Object.defineProperty(e.prototype, 'decFlowsPending', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            this.flowsPending--;
                        },
                    }),
                    Object.defineProperty(e.prototype, 'hasFlowsPending', {
                        get: function () {
                            return this.flowsPending > 0;
                        },
                        enumerable: !1,
                        configurable: !0,
                    });
            })();
            var L = 1;
            function U(e, t) {
                var r = ei(e.context);
                'action' === e.type && r.assertAlive({ actionContext: e });
                var i = r._isRunningAction;
                r._isRunningAction = !0;
                var a = u;
                u = e;
                try {
                    var o = r,
                        l = e,
                        c = t,
                        s = new G(o, c);
                    if (s.isEmpty) return (0, p.XI)(c).apply(null, l.args);
                    var f = null;
                    return (function e(t) {
                        var r = s.getNextMiddleware(),
                            i = r && r.handler;
                        if (!i) return (0, p.XI)(c).apply(null, t.args);
                        if (!r.includeHooks && n[t.name]) return e(t);
                        var a = !1,
                            o = !1;
                        if (
                            (i(
                                t,
                                function (t, r) {
                                    (a = !0), (f = e(t)), r && (f = r(f));
                                },
                                function (e) {
                                    (o = !0), (f = e);
                                },
                            ),
                            (function () {
                                return !1;
                            })())
                        )
                            if (a || o) {
                                if (a && o) {
                                    var l = ei(t.tree);
                                    throw new ef(
                                        'The next() and abort() callback within the middleware '
                                            .concat(i.name, ' for the action: "')
                                            .concat(t.name, '" on the node: ')
                                            .concat(l.type.name, ' were invoked.'),
                                    );
                                }
                            } else {
                                var l = ei(t.tree);
                                throw new ef(
                                    'Neither the next() nor the abort() callback within the middleware '
                                        .concat(i.name, ' for the action: "')
                                        .concat(t.name, '" on the node: ')
                                        .concat(l.type.name, ' was invoked.'),
                                );
                            }
                        return f;
                    })(l);
                } finally {
                    (u = a), (r._isRunningAction = i);
                }
            }
            function Z(e) {
                if (e) return 'action' === e.type ? e : e.parentActionEvent;
            }
            function W(e, t, r) {
                var n = function () {
                    var n = L++,
                        i = u,
                        a = Z(i);
                    return U(
                        {
                            type: 'action',
                            name: t,
                            id: n,
                            args: eA(arguments),
                            context: e,
                            tree: O(e),
                            rootId: i ? i.rootId : n,
                            parentId: i ? i.id : 0,
                            allParentIds: i ? g(g([], v(i.allParentIds), !1), [i.id], !1) : [],
                            parentEvent: i,
                            parentActionEvent: a,
                        },
                        r,
                    );
                };
                return (n._isMSTAction = !0), (n._isFlowAction = r._isFlowAction), n;
            }
            var G = (function () {
                function e(e, t) {
                    Object.defineProperty(this, 'arrayIndex', { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
                        Object.defineProperty(this, 'inArrayIndex', { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
                        Object.defineProperty(this, 'middlewares', { enumerable: !0, configurable: !0, writable: !0, value: [] }),
                        t.$mst_middleware && this.middlewares.push(t.$mst_middleware);
                    for (var r = e; r; ) r.middlewares && this.middlewares.push(r.middlewares), (r = r.parent);
                }
                return (
                    Object.defineProperty(e.prototype, 'isEmpty', {
                        get: function () {
                            return this.middlewares.length <= 0;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'getNextMiddleware', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            var e = this.middlewares[this.arrayIndex];
                            if (e) {
                                var t = e[this.inArrayIndex++];
                                return t || (this.arrayIndex++, (this.inArrayIndex = 0), this.getNextMiddleware());
                            }
                        },
                    }),
                    e
                );
            })();
            function $(e) {
                return 'function' == typeof e
                    ? '<function'.concat(e.name ? ' ' + e.name : '', '>')
                    : er(e)
                      ? '<'.concat(e, '>')
                      : '`'.concat(
                            (function (e) {
                                try {
                                    return JSON.stringify(e);
                                } catch (e) {
                                    return '<Unserializable: '.concat(e, '>');
                                }
                            })(e),
                            '`',
                        );
            }
            function X(e) {
                var t,
                    r = e.value,
                    n = e.context[e.context.length - 1].type,
                    i = e.context
                        .map(function (e) {
                            return e.path;
                        })
                        .filter(function (e) {
                            return e.length > 0;
                        })
                        .join('/'),
                    a = i.length > 0 ? 'at path "/'.concat(i, '" ') : '',
                    o = er(r) ? 'value of type '.concat(ei(r).type.name, ':') : em(r) ? 'value' : 'snapshot',
                    u = n && er(r) && n.is(ei(r).snapshot);
                return (
                    ''
                        .concat(a)
                        .concat(o, ' ')
                        .concat($(r), ' is not assignable ')
                        .concat(n ? 'to type: `'.concat(n.name, '`') : '') +
                    (e.message ? ' ('.concat(e.message, ')') : '') +
                    (n
                        ? (H((t = n)) && (t.flags & (l.String | l.Number | l.Integer | l.Boolean | l.Date)) > 0) || em(r)
                            ? '.'
                            : ', expected an instance of `'.concat(n.name, '` or a snapshot like `').concat(n.describe(), '` instead.') +
                              (u ? ' (Note that a snapshot of the provided value is compatible with the targeted type)' : '')
                        : '.')
                );
            }
            function Y(e, t, r) {
                return e.concat([{ path: t, type: r }]);
            }
            function B(e, t, r) {
                return [{ context: e, value: t, message: r }];
            }
            function J(e) {
                return e.reduce(function (e, t) {
                    return e.concat(t);
                }, []);
            }
            function K(e, t) {
                ((function () {
                    return !1;
                })() ||
                    (void 0 !== f && f.env && 'true' === f.env.ENABLE_TYPE_CHECK)) &&
                    (function (e, t) {
                        var r = e.validate(t, [{ path: '', type: e }]);
                        if (r.length > 0)
                            throw new ef(
                                (function (e, t, r) {
                                    if (0 !== r.length) {
                                        var n;
                                        return (
                                            'Error while converting '
                                                .concat((n = $(t)).length < 280 ? n : ''.concat(n.substring(0, 272), '......').concat(n.substring(n.length - 8)), ' to `')
                                                .concat(e.name, '`:\n\n    ') + r.map(X).join('\n    ')
                                        );
                                    }
                                })(e, t, r),
                            );
                    })(e, t);
            }
            var q = 0,
                Q = (function () {
                    function e() {
                        Object.defineProperty(this, 'cacheId', { enumerable: !0, configurable: !0, writable: !0, value: q++ }),
                            Object.defineProperty(this, 'cache', { enumerable: !0, configurable: !0, writable: !0, value: p.sH.map() }),
                            Object.defineProperty(this, 'lastCacheModificationPerId', { enumerable: !0, configurable: !0, writable: !0, value: p.sH.map() });
                    }
                    return (
                        Object.defineProperty(e.prototype, 'updateLastCacheModificationPerId', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.lastCacheModificationPerId.get(e);
                                this.lastCacheModificationPerId.set(e, void 0 === t ? 1 : t + 1);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getLastCacheModificationPerId', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.lastCacheModificationPerId.get(e) || 0;
                                return ''.concat(this.cacheId, '-').concat(t);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'addNodeToCache', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if ((void 0 === t && (t = !0), e.identifierAttribute)) {
                                    var r = e.identifier;
                                    this.cache.has(r) || this.cache.set(r, p.sH.array([], ep));
                                    var n = this.cache.get(r);
                                    if (-1 !== n.indexOf(e)) throw new ef('Already registered');
                                    n.push(e), t && this.updateLastCacheModificationPerId(r);
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'mergeCache', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                (0, p.zu)(e.identifierCache.cache).forEach(function (e) {
                                    return e.forEach(function (e) {
                                        t.addNodeToCache(e);
                                    });
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'notifyDied', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (e.identifierAttribute) {
                                    var t = e.identifier,
                                        r = this.cache.get(t);
                                    r && (r.remove(e), r.length || this.cache.delete(t), this.updateLastCacheModificationPerId(e.identifier));
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'splitCache', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t) {
                                var r = this,
                                    n = new e(),
                                    i = t.path + '/';
                                return (
                                    (0, p.jO)(this.cache).forEach(function (e) {
                                        for (var a = v(e, 2), o = a[0], l = a[1], u = !1, c = l.length - 1; c >= 0; c--) {
                                            var s = l[c];
                                            (s === t || 0 === s.path.indexOf(i)) && (n.addNodeToCache(s, !1), l.splice(c, 1), l.length || r.cache.delete(o), (u = !0));
                                        }
                                        u && r.updateLastCacheModificationPerId(o);
                                    }),
                                    n
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'has', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this.cache.get(t);
                                return (
                                    !!r &&
                                    r.some(function (t) {
                                        return e.isAssignableFrom(t.type);
                                    })
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'resolve', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this.cache.get(t);
                                if (!r) return null;
                                var n = r.filter(function (t) {
                                    return e.isAssignableFrom(t.type);
                                });
                                switch (n.length) {
                                    case 0:
                                        return null;
                                    case 1:
                                        return n[0];
                                    default:
                                        throw new ef(
                                            "Cannot resolve a reference to type '"
                                                .concat(e.name, "' with id: '")
                                                .concat(t, "' unambigously, there are multiple candidates: ")
                                                .concat(
                                                    n
                                                        .map(function (e) {
                                                            return e.path;
                                                        })
                                                        .join(', '),
                                                ),
                                        );
                                }
                            },
                        }),
                        e
                    );
                })();
            function ee(e, t, r, n, i) {
                var a = ea(i);
                if (a) {
                    if (a.parent)
                        throw new ef(
                            "Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '"
                                .concat(t ? t.path : '', '/')
                                .concat(r, "', but it lives already at '")
                                .concat(a.path, "'"),
                        );
                    return t && a.setParent(t, r), a;
                }
                return new D(e, t, r, n, i);
            }
            function et(e, t, r, n, i) {
                return new C(e, t, r, n, i);
            }
            function er(e) {
                return !!(e && e.$treenode);
            }
            function en(e, t) {
                eN(e, er, 'mobx-state-tree node', t);
            }
            function ei(e) {
                if (!er(e)) throw new ef('Value '.concat(e, ' is no MST Node'));
                return e.$treenode;
            }
            function ea(e) {
                return (e && e.$treenode) || null;
            }
            function eo() {
                return ei(this).snapshot;
            }
            function el(e) {
                if (!e) return ec;
                var t = Object.keys(e);
                if (!t.length) return ec;
                var r = Array(t.length);
                return (
                    t.forEach(function (t, n) {
                        r[n] = e[t];
                    }),
                    r
                );
            }
            !(function (e) {
                (e[(e.INITIALIZING = 0)] = 'INITIALIZING'),
                    (e[(e.CREATED = 1)] = 'CREATED'),
                    (e[(e.FINALIZED = 2)] = 'FINALIZED'),
                    (e[(e.DETACHING = 3)] = 'DETACHING'),
                    (e[(e.DEAD = 4)] = 'DEAD');
            })(c || (c = {}));
            var eu = Object.toString(),
                ec = Object.freeze([]),
                es = Object.freeze({}),
                ep = (0, p.sG)().useProxies ? { deep: !1 } : { deep: !1, proxy: !1 };
            Object.freeze(ep);
            var ef = (function (e) {
                function t(t) {
                    return void 0 === t && (t = 'Illegal state'), e.call(this, '[mobx-state-tree] '.concat(t)) || this;
                }
                return h(t, e), t;
            })(Error);
            function eb(e) {
                return e;
            }
            var eh = Number.isInteger;
            function ed(e) {
                return Array.isArray(e) || (0, p.Fq)(e);
            }
            function ey(e) {
                return e ? (ed(e) ? e : [e]) : ec;
            }
            function ev(e) {
                if (null === e || 'object' != typeof e) return !1;
                var t,
                    r = Object.getPrototypeOf(e);
                return null == r || (null == (t = r.constructor) ? void 0 : t.toString()) === eu;
            }
            function eg(e) {
                return null !== e && 'object' == typeof e && !(e instanceof Date) && !(e instanceof RegExp);
            }
            function em(e, t) {
                return void 0 === t && (t = !0), null == e || 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e || (t && e instanceof Date);
            }
            function ew(e) {
                return e;
            }
            function eP(e) {
                return e;
            }
            function eO(e) {
                return 'function' != typeof e;
            }
            function ej(e, t, r) {
                (0, p.OB)(e) ? (0, p.n8)(e, t, r) : Object.defineProperty(e, t, r);
            }
            function e_(e, t, r) {
                ej(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
            }
            var eS = (function () {
                    function e() {
                        Object.defineProperty(this, 'handlers', { enumerable: !0, configurable: !0, writable: !0, value: [] });
                    }
                    return (
                        Object.defineProperty(e.prototype, 'hasSubscribers', {
                            get: function () {
                                return this.handlers.length > 0;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'register', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this;
                                return (
                                    void 0 === t && (t = !1),
                                    t ? this.handlers.unshift(e) : this.handlers.push(e),
                                    function () {
                                        r.unregister(e);
                                    }
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'has', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this.handlers.indexOf(e) >= 0;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'unregister', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.handlers.indexOf(e);
                                t >= 0 && this.handlers.splice(t, 1);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'clear', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.handlers.length = 0;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'emit', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this.handlers.slice().forEach(function (t) {
                                    return t.apply(void 0, g([], v(e), !1));
                                });
                            },
                        }),
                        e
                    );
                })(),
                eI = (function () {
                    function e() {
                        Object.defineProperty(this, 'eventHandlers', { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
                    }
                    return (
                        Object.defineProperty(e.prototype, 'hasSubscribers', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.eventHandlers && this.eventHandlers[e];
                                return !!t && t.hasSubscribers;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'register', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r) {
                                void 0 === r && (r = !1), this.eventHandlers || (this.eventHandlers = {});
                                var n = this.eventHandlers[e];
                                return n || (n = this.eventHandlers[e] = new eS()), n.register(t, r);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'has', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this.eventHandlers && this.eventHandlers[e];
                                return !!r && r.has(t);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'unregister', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this.eventHandlers && this.eventHandlers[e];
                                r && r.unregister(t);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'clear', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.eventHandlers && delete this.eventHandlers[e];
                            },
                        }),
                        Object.defineProperty(e.prototype, 'clearAll', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.eventHandlers = void 0;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'emit', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                var n = this.eventHandlers && this.eventHandlers[e];
                                n && n.emit.apply(n, g([], v(t), !1));
                            },
                        }),
                        e
                    );
                })();
            function eA(e) {
                for (var t = Array(e.length), r = 0; r < e.length; r++) t[r] = e[r];
                return t;
            }
            function eT(e, t) {
                return 0 === e.indexOf(t);
            }
            var eE = function (e, t) {};
            function eC(e) {
                console.warn(Error('[mobx-state-tree] '.concat(e)));
            }
            function eN(e, t, r, n) {}
            function eV(e, t) {
                eN(
                    e,
                    function (e) {
                        return 'function' == typeof e;
                    },
                    'function',
                    t,
                );
            }
            function eD(e, t, r) {
                void 0 === r && (r = !0),
                    eN(
                        e,
                        function (e) {
                            return 'string' == typeof e;
                        },
                        'string',
                        t,
                    ),
                    r ||
                        eN(
                            e,
                            function (e) {
                                return '' !== e;
                            },
                            'not empty string',
                            t,
                        );
            }
            function ex(e) {
                'function' == typeof queueMicrotask ? queueMicrotask(e) : 'function' == typeof setImmediate ? setImmediate(e) : setTimeout(e, 1);
            }
            function ek(e) {
                var t, r, n;
                return (
                    (t = e.name),
                    (r = e),
                    ((n = function () {
                        var e = L++,
                            i = u;
                        if (!i) throw new ef('a mst flow must always have a parent context');
                        var a = Z(i);
                        if (!a) throw new ef('a mst flow must always have a parent action context');
                        var o = {
                                name: t,
                                id: e,
                                tree: i.tree,
                                context: i.context,
                                parentId: i.id,
                                allParentIds: g(g([], v(i.allParentIds), !1), [i.id], !1),
                                rootId: i.rootId,
                                parentEvent: i,
                                parentActionEvent: a,
                            },
                            l = arguments;
                        function c(e, t, r) {
                            return (e.$mst_middleware = n.$mst_middleware), U(d(d({}, o), { type: t, args: [r] }), e);
                        }
                        return new Promise(function (e, t) {
                            var i,
                                a = function () {
                                    (i = r.apply(null, arguments)), u(void 0);
                                };
                            function u(e) {
                                var r;
                                try {
                                    var n = c(
                                        function (e) {
                                            r = i.next(e);
                                        },
                                        'flow_resume',
                                        e,
                                    );
                                    n instanceof Error && (r = i.throw(n));
                                } catch (e) {
                                    ex(function () {
                                        c(
                                            function (r) {
                                                t(e);
                                            },
                                            'flow_throw',
                                            e,
                                        );
                                    });
                                    return;
                                }
                                p(r);
                            }
                            function s(e) {
                                var r;
                                try {
                                    c(
                                        function (e) {
                                            r = i.throw(e);
                                        },
                                        'flow_resume_error',
                                        e,
                                    );
                                } catch (e) {
                                    ex(function () {
                                        c(
                                            function (r) {
                                                t(e);
                                            },
                                            'flow_throw',
                                            e,
                                        );
                                    });
                                    return;
                                }
                                p(r);
                            }
                            function p(t) {
                                if (t.done)
                                    return void ex(function () {
                                        c(
                                            function (t) {
                                                e(t);
                                            },
                                            'flow_return',
                                            t.value,
                                        );
                                    });
                                if (!t.value || 'function' != typeof t.value.then) throw new ef('Only promises can be yielded to `async`, got: ' + t);
                                return t.value.then(u, s);
                            }
                            (a.$mst_middleware = n.$mst_middleware), U(d(d({}, o), { type: 'flow_spawn', args: eA(l) }), a);
                        });
                    })._isFlowAction = !0),
                    n
                );
            }
            function ez(e) {
                return !0 == ('number' == typeof e) ? '' + e : -1 === e.indexOf('/') && -1 === e.indexOf('~') ? e : e.replace(/~/g, '~0').replace(/\//g, '~1');
            }
            function eR(e) {
                return e.replace(/~1/g, '/').replace(/~0/g, '~');
            }
            function eF(e) {
                if (0 === e.length) return '';
                var t = function (e) {
                    return e.map(ez).join('/');
                };
                return '.' === e[0] || '..' === e[0] ? t(e) : '/' + t(e);
            }
            eE.ids = {};
            var eH = Symbol('$preProcessorFailed'),
                eM = (function (e) {
                    function t(t, r, n) {
                        var i = e.call(this, n || t.name) || this;
                        return (
                            Object.defineProperty(i, '_subtype', { enumerable: !0, configurable: !0, writable: !0, value: t }),
                            Object.defineProperty(i, '_processors', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                            i
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'flags', {
                            get: function () {
                                return this._subtype.flags | l.SnapshotProcessor;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return 'snapshotProcessor('.concat(this._subtype.describe(), ')');
                            },
                        }),
                        Object.defineProperty(t.prototype, 'preProcessSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this._processors.preProcessor ? this._processors.preProcessor.call(null, e) : e;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'preProcessSnapshotSafe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                try {
                                    return this.preProcessSnapshot(e);
                                } catch (e) {
                                    return eH;
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'postProcessSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                return this._processors.postProcessor ? this._processors.postProcessor.call(null, e, t.storedValue) : e;
                            },
                        }),
                        Object.defineProperty(t.prototype, '_fixNode', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t,
                                    r = this;
                                (function (e, t) {
                                    for (var r, n, i = [], a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
                                    try {
                                        for (var o = y(i), l = o.next(); !l.done; l = o.next()) {
                                            var u = l.value;
                                            e[u] = t[u].bind(t);
                                        }
                                    } catch (e) {
                                        r = { error: e };
                                    } finally {
                                        try {
                                            l && !l.done && (n = o.return) && n.call(o);
                                        } finally {
                                            if (r) throw r.error;
                                        }
                                    }
                                })(e.type, this, 'create'),
                                    e instanceof D && (e.hasSnapshotPostProcessor = !!this._processors.postProcessor);
                                var n = e.getSnapshot;
                                (e.getSnapshot = function () {
                                    return r.postProcessSnapshot(n.call(e), e);
                                }),
                                    (H((t = this._subtype)) && (t.flags & l.Union) > 0) ||
                                        (e.getReconciliationType = function () {
                                            return r;
                                        });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = er(n) ? n : this.preProcessSnapshot(n),
                                    a = this._subtype.instantiate(e, t, r, i);
                                return this._fixNode(a), a;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'reconcile', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = this._subtype.reconcile(e, er(t) ? t : this.preProcessSnapshot(t), r, n);
                                return i !== e && this._fixNode(i), i;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                void 0 === t && (t = !0);
                                var r = this._subtype.getSnapshot(e);
                                return t ? this.postProcessSnapshot(r, e) : r;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this.preProcessSnapshotSafe(e);
                                return r === eH ? B(t, e, 'Failed to preprocess value') : this._subtype.validate(r, t);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getSubTypes', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this._subtype;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'is', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = H(e) ? this._subtype : er(e) ? e : this.preProcessSnapshotSafe(e);
                                return t !== eH && 0 === this._subtype.validate(t, [{ path: '', type: this._subtype }]).length;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isAssignableFrom', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this._subtype.isAssignableFrom(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isMatchingSnapshotId', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if (!(this._subtype instanceof R)) return !1;
                                var r = this.preProcessSnapshot(t);
                                return this._subtype.isMatchingSnapshotId(e, r);
                            },
                        }),
                        t
                    );
                })(z),
                eL = 'Map.put can only be used to store complex values that have an identifier type attribute';
            !(function (e) {
                (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.YES = 1)] = 'YES'), (e[(e.NO = 2)] = 'NO');
            })(s || (s = {}));
            var eU = (function (e) {
                    function t(t, r) {
                        return e.call(this, t, p.sH.ref.enhancer, r) || this;
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'get', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t) {
                                return e.prototype.get.call(this, '' + t);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'has', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t) {
                                return e.prototype.has.call(this, '' + t);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'delete', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t) {
                                return e.prototype.delete.call(this, '' + t);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'set', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t, r) {
                                return e.prototype.set.call(this, '' + t, r);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'put', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (!e) throw new ef('Map.put cannot be used to set empty values');
                                if (er(e)) {
                                    var t = ei(e);
                                    if (null === t.identifier) throw new ef(eL);
                                    return this.set(t.identifier, e), e;
                                }
                                if (eg(e)) {
                                    var r = ei(this),
                                        n = r.type;
                                    if (n.identifierMode !== s.YES) throw new ef(eL);
                                    var i = e[n.mapIdentifierAttribute];
                                    if (!tS(i)) {
                                        var a = this.put(n.getChildType().create(e, r.environment));
                                        return this.put(P(a));
                                    }
                                    var o = '' + i;
                                    return this.set(o, e), this.get(o);
                                }
                                throw new ef('Map.put can only be used to store complex values');
                            },
                        }),
                        t
                    );
                })(p.Es),
                eZ = (function (e) {
                    function t(t, r, n) {
                        void 0 === n && (n = []);
                        var i = e.call(this, t) || this;
                        return (
                            Object.defineProperty(i, '_subType', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                            Object.defineProperty(i, 'identifierMode', { enumerable: !0, configurable: !0, writable: !0, value: s.UNKNOWN }),
                            Object.defineProperty(i, 'mapIdentifierAttribute', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(i, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: l.Map }),
                            Object.defineProperty(i, 'hookInitializers', { enumerable: !0, configurable: !0, writable: !0, value: [] }),
                            i._determineIdentifierMode(),
                            (i.hookInitializers = n),
                            i
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'hooks', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var r = this.hookInitializers.length > 0 ? this.hookInitializers.concat(e) : [e];
                                return new t(this.name, this._subType, r);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                return this._determineIdentifierMode(), ee(this, e, t, r, n);
                            },
                        }),
                        Object.defineProperty(t.prototype, '_determineIdentifierMode', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                if (this.identifierMode === s.UNKNOWN) {
                                    var e = [];
                                    if (
                                        (function e(t, r) {
                                            var n,
                                                i,
                                                a = t.getSubTypes();
                                            if (a === x) return !1;
                                            if (a) {
                                                var o = ey(a);
                                                try {
                                                    for (var l = y(o), u = l.next(); !u.done; u = l.next()) {
                                                        var c = u.value;
                                                        if (!e(c, r)) return !1;
                                                    }
                                                } catch (e) {
                                                    n = { error: e };
                                                } finally {
                                                    try {
                                                        u && !u.done && (i = l.return) && i.call(l);
                                                    } finally {
                                                        if (n) throw n.error;
                                                    }
                                                }
                                            }
                                            return t instanceof eq && r.push(t), !0;
                                        })(this._subType, e)
                                    ) {
                                        var t = e.reduce(
                                            function (e, t) {
                                                if (!t.identifierAttribute) return e;
                                                if (e && e !== t.identifierAttribute)
                                                    throw new ef(
                                                        "The objects in a map should all have the same identifier attribute, expected '"
                                                            .concat(e, "', but child of type '")
                                                            .concat(t.name, "' declared attribute '")
                                                            .concat(t.identifierAttribute, "' as identifier"),
                                                    );
                                                return t.identifierAttribute;
                                            },
                                            void 0,
                                        );
                                        t ? ((this.identifierMode = s.YES), (this.mapIdentifierAttribute = t)) : (this.identifierMode = s.NO);
                                    }
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'initializeChildNodes', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                void 0 === t && (t = {});
                                var r = e.type._subType,
                                    n = {};
                                return (
                                    Object.keys(t).forEach(function (i) {
                                        n[i] = r.instantiate(e, i, void 0, t[i]);
                                    }),
                                    n
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'createNewInstance', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return new eU(e, this.name);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'finalizeNewInstance', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                (0, p.pA)(t, e.unbox),
                                    e.type.hookInitializers.forEach(function (e) {
                                        var r = e(t);
                                        Object.keys(r).forEach(function (e) {
                                            var n = r[e],
                                                i = W(t, e, n);
                                            e_(t, e, i);
                                        });
                                    }),
                                    (0, p.Zc)(t, this.willChange),
                                    (0, p.lB)(t, this.didChange);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.name;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getChildren', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return (0, p.zu)(e.storedValue);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getChildNode', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = e.storedValue.get('' + t);
                                if (!r) throw new ef('Not a child ' + t);
                                return r;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'willChange', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = ei(e.object),
                                    r = e.name;
                                t.assertWritable({ subpath: r });
                                var n = t.type,
                                    i = n._subType;
                                switch (e.type) {
                                    case 'update':
                                        var a = e.newValue;
                                        if (a === e.object.get(r)) return null;
                                        K(i, a), (e.newValue = i.reconcile(t.getChildNode(r), e.newValue, t, r)), n.processIdentifier(r, e.newValue);
                                        break;
                                    case 'add':
                                        K(i, e.newValue), (e.newValue = i.instantiate(t, r, void 0, e.newValue)), n.processIdentifier(r, e.newValue);
                                }
                                return e;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'processIdentifier', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if (this.identifierMode === s.YES && t instanceof D) {
                                    var r = t.identifier;
                                    if (r !== e)
                                        throw new ef(
                                            "A map of objects containing an identifier should always store the object under their own identifier. Trying to store key '"
                                                .concat(r, "', but expected: '")
                                                .concat(e, "'"),
                                        );
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = {};
                                return (
                                    e.getChildren().forEach(function (e) {
                                        t[e.subpath] = e.snapshot;
                                    }),
                                    t
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'processInitialSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = {};
                                return (
                                    Object.keys(e).forEach(function (r) {
                                        t[r] = e[r].getSnapshot();
                                    }),
                                    t
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'didChange', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = ei(e.object);
                                switch (e.type) {
                                    case 'update':
                                        return void t.emitPatch(
                                            { op: 'replace', path: ez(e.name), value: e.newValue.snapshot, oldValue: e.oldValue ? e.oldValue.snapshot : void 0 },
                                            t,
                                        );
                                    case 'add':
                                        return void t.emitPatch({ op: 'add', path: ez(e.name), value: e.newValue.snapshot, oldValue: void 0 }, t);
                                    case 'delete':
                                        var r = e.oldValue.snapshot;
                                        return e.oldValue.die(), void t.emitPatch({ op: 'remove', path: ez(e.name), oldValue: r }, t);
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'applyPatchLocally', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r) {
                                var n = e.storedValue;
                                switch (r.op) {
                                    case 'add':
                                    case 'replace':
                                        n.set(t, r.value);
                                        break;
                                    case 'remove':
                                        n.delete(t);
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'applySnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                K(this, t);
                                var r = e.storedValue,
                                    n = {};
                                if (
                                    (Array.from(r.keys()).forEach(function (e) {
                                        n[e] = !1;
                                    }),
                                    t)
                                )
                                    for (var i in t) r.set(i, t[i]), (n['' + i] = !0);
                                Object.keys(n).forEach(function (e) {
                                    !1 === n[e] && r.delete(e);
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getChildType', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this._subType;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this;
                                return ev(e)
                                    ? J(
                                          Object.keys(e).map(function (n) {
                                              return r._subType.validate(e[n], Y(t, n, r._subType));
                                          }),
                                      )
                                    : B(t, e, 'Value is not a plain object');
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getDefaultSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return es;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'removeChild', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                e.storedValue.delete(t);
                            },
                        }),
                        t
                    );
                })(R);
            eZ.prototype.applySnapshot = (0, p.XI)(eZ.prototype.applySnapshot);
            var eW = (function (e) {
                function t(t, r, n) {
                    void 0 === n && (n = []);
                    var i = e.call(this, t) || this;
                    return (
                        Object.defineProperty(i, '_subType', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                        Object.defineProperty(i, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: l.Array }),
                        Object.defineProperty(i, 'hookInitializers', { enumerable: !0, configurable: !0, writable: !0, value: [] }),
                        (i.hookInitializers = n),
                        i
                    );
                }
                return (
                    h(t, e),
                    Object.defineProperty(t.prototype, 'hooks', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            var r = this.hookInitializers.length > 0 ? this.hookInitializers.concat(e) : [e];
                            return new t(this.name, this._subType, r);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'instantiate', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t, r, n) {
                            return ee(this, e, t, r, n);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'initializeChildNodes', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t) {
                            void 0 === t && (t = []);
                            var r = e.type._subType,
                                n = {};
                            return (
                                t.forEach(function (t, i) {
                                    var a = '' + i;
                                    n[a] = r.instantiate(e, a, void 0, t);
                                }),
                                n
                            );
                        },
                    }),
                    Object.defineProperty(t.prototype, 'createNewInstance', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            var t = d(d({}, ep), { name: this.name });
                            return p.sH.array(el(e), t);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'finalizeNewInstance', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t) {
                            ((0, p.Mr)(t).dehancer = e.unbox),
                                e.type.hookInitializers.forEach(function (e) {
                                    var r = e(t);
                                    Object.keys(r).forEach(function (e) {
                                        var n = r[e],
                                            i = W(t, e, n);
                                        e_(t, e, i);
                                    });
                                }),
                                (0, p.Zc)(t, this.willChange),
                                (0, p.lB)(t, this.didChange);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'describe', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return this.name;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getChildren', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            return e.storedValue.slice();
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getChildNode', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t) {
                            var r = Number(t);
                            if (r < e.storedValue.length) return e.storedValue[r];
                            throw new ef('Not a child: ' + t);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'willChange', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            var t = ei(e.object);
                            t.assertWritable({ subpath: '' + e.index });
                            var r = t.type._subType,
                                n = t.getChildren();
                            switch (e.type) {
                                case 'update':
                                    if (e.newValue === e.object[e.index]) return null;
                                    var i = eG(t, r, [n[e.index]], [e.newValue], [e.index]);
                                    if (!i) return null;
                                    e.newValue = i[0];
                                    break;
                                case 'splice':
                                    var a = e.index,
                                        o = e.removedCount,
                                        l = e.added,
                                        u = eG(
                                            t,
                                            r,
                                            n.slice(a, a + o),
                                            l,
                                            l.map(function (e, t) {
                                                return a + t;
                                            }),
                                        );
                                    if (!u) return null;
                                    e.added = u;
                                    for (var c = a + o; c < n.length; c++) n[c].setParent(t, '' + (c + l.length - o));
                            }
                            return e;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getSnapshot', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            return e.getChildren().map(function (e) {
                                return e.snapshot;
                            });
                        },
                    }),
                    Object.defineProperty(t.prototype, 'processInitialSnapshot', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            var t = [];
                            return (
                                Object.keys(e).forEach(function (r) {
                                    t.push(e[r].getSnapshot());
                                }),
                                t
                            );
                        },
                    }),
                    Object.defineProperty(t.prototype, 'didChange', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            var t = ei(e.object);
                            switch (e.type) {
                                case 'update':
                                    return void t.emitPatch(
                                        { op: 'replace', path: '' + e.index, value: e.newValue.snapshot, oldValue: e.oldValue ? e.oldValue.snapshot : void 0 },
                                        t,
                                    );
                                case 'splice':
                                    if (e.removedCount && e.addedCount === e.object.length)
                                        return void t.emitPatch(
                                            {
                                                op: 'replace',
                                                path: '',
                                                value: t.snapshot,
                                                oldValue: e.removed.map(function (e) {
                                                    return e.snapshot;
                                                }),
                                            },
                                            t,
                                        );
                                    for (var r = e.removedCount - 1; r >= 0; r--)
                                        t.emitPatch({ op: 'remove', path: '' + (e.index + r), oldValue: e.removed[r].snapshot }, t);
                                    for (var r = 0; r < e.addedCount; r++)
                                        t.emitPatch({ op: 'add', path: '' + (e.index + r), value: e.added[r].snapshot, oldValue: void 0 }, t);
                                    return;
                            }
                        },
                    }),
                    Object.defineProperty(t.prototype, 'applyPatchLocally', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t, r) {
                            var n = e.storedValue,
                                i = '-' === t ? n.length : Number(t);
                            switch (r.op) {
                                case 'replace':
                                    n[i] = r.value;
                                    break;
                                case 'add':
                                    n.splice(i, 0, r.value);
                                    break;
                                case 'remove':
                                    n.splice(i, 1);
                            }
                        },
                    }),
                    Object.defineProperty(t.prototype, 'applySnapshot', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t) {
                            K(this, t), e.storedValue.replace(t);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getChildType', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return this._subType;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'isValidSnapshot', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t) {
                            var r = this;
                            return ed(e)
                                ? J(
                                      e.map(function (e, n) {
                                          return r._subType.validate(e, Y(t, '' + n, r._subType));
                                      }),
                                  )
                                : B(t, e, 'Value is not an array');
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getDefaultSnapshot', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return ec;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'removeChild', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t) {
                            e.storedValue.splice(Number(t), 1);
                        },
                    }),
                    t
                );
            })(R);
            function eG(e, t, r, n, i) {
                for (var a = !0, o = 0; ; o++) {
                    var l,
                        u = o <= n.length - 1,
                        c = r[o],
                        s = u ? n[o] : void 0,
                        p = '' + i[o];
                    if ((((l = s) instanceof C || l instanceof D) && (s = s.storedValue), c || u))
                        if (u)
                            if (c)
                                if (eX(c, s)) r[o] = e$(t, e, p, s, c);
                                else {
                                    for (var f = void 0, b = o; b < r.length; b++)
                                        if (eX(r[b], s)) {
                                            f = r.splice(b, 1)[0];
                                            break;
                                        }
                                    a = !1;
                                    var h = e$(t, e, p, s, f);
                                    r.splice(o, 0, h);
                                }
                            else {
                                if (er(s) && ei(s).parent === e)
                                    throw new ef(
                                        "Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '"
                                            .concat(e.path, '/')
                                            .concat(p, "', but it lives already at '")
                                            .concat(ei(s).path, "'"),
                                    );
                                a = !1;
                                var h = e$(t, e, p, s);
                                r.splice(o, 0, h);
                            }
                        else (a = !1), r.splice(o, 1), c instanceof D && c.createObservableInstanceIfNeeded(), c.die(), o--;
                    else break;
                }
                return a ? null : r;
            }
            function e$(e, t, r, n, i) {
                K(e, n);
                var a = (function () {
                    if (er(n)) {
                        var a = ei(n);
                        if ((a.assertAlive(es), null !== a.parent && a.parent === t)) return a.setParent(t, r), a;
                    }
                    return i ? e.reconcile(i, n, t, r) : e.instantiate(t, r, void 0, n);
                })();
                return i && i !== a && (i instanceof D && i.createObservableInstanceIfNeeded(), i.die()), a;
            }
            function eX(e, t) {
                if (!e.isAlive) return !1;
                if (er(t)) {
                    var r = ei(t);
                    return r.isAlive && r === e;
                }
                if (e.snapshot === t) return !0;
                if (!(e instanceof D)) return !1;
                var n = e.getReconciliationType();
                return null !== e.identifier && e.identifierAttribute && ev(t) && n.is(t) && n.isMatchingSnapshotId(e, t);
            }
            eW.prototype.applySnapshot = (0, p.XI)(eW.prototype.applySnapshot);
            var eY = 'preProcessSnapshot',
                eB = 'postProcessSnapshot';
            function eJ() {
                return ei(this).toString();
            }
            var eK = { name: 'AnonymousModel', properties: {}, initializers: ec },
                eq = (function (e) {
                    function t(t) {
                        var r,
                            i,
                            a,
                            o = e.call(this, t.name || eK.name) || this;
                        return (
                            Object.defineProperty(o, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: l.Object }),
                            Object.defineProperty(o, 'initializers', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(o, 'properties', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(o, 'preProcessor', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(o, 'postProcessor', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(o, 'propertyNames', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(o, 'named', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    return o.cloneAndEnhance({ name: e });
                                },
                            }),
                            Object.defineProperty(o, 'props', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    return o.cloneAndEnhance({ properties: e });
                                },
                            }),
                            Object.defineProperty(o, 'preProcessSnapshot', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t = o.preProcessor;
                                    return t
                                        ? o.cloneAndEnhance({
                                              preProcessor: function (r) {
                                                  return t(e(r));
                                              },
                                          })
                                        : o.cloneAndEnhance({ preProcessor: e });
                                },
                            }),
                            Object.defineProperty(o, 'postProcessSnapshot', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t = o.postProcessor;
                                    return t
                                        ? o.cloneAndEnhance({
                                              postProcessor: function (r) {
                                                  return e(t(r));
                                              },
                                          })
                                        : o.cloneAndEnhance({ postProcessor: e });
                                },
                            }),
                            Object.assign(o, eK, t),
                            (i = Object.keys((r = o.properties))),
                            (a = new Set()),
                            i.forEach(function (e) {
                                if (a.has(e)) throw new ef(''.concat(e, ' is declared twice in the model. Model should not contain the same keys'));
                                a.add(e);
                            }),
                            (o.properties = i.reduce(
                                function (e, t) {
                                    if (t in n) throw new ef("Hook '".concat(t, "' was defined as property. Hooks should be defined as part of the actions"));
                                    var i = Object.getOwnPropertyDescriptor(r, t);
                                    if ('get' in i) throw new ef('Getters are not supported as properties. Please use views instead');
                                    var a = i.value;
                                    if (null == a)
                                        throw new ef(
                                            'The default value of an attribute cannot be null or undefined as the type cannot be inferred. Did you mean `types.maybe(someType)`?',
                                        );
                                    if (em(a))
                                        e[t] = ta(
                                            (function (e) {
                                                switch (typeof e) {
                                                    case 'string':
                                                        return e0;
                                                    case 'number':
                                                        return e1;
                                                    case 'boolean':
                                                        return e6;
                                                    case 'object':
                                                        if (e instanceof Date) return e5;
                                                }
                                                throw new ef('Cannot determine primitive type from value ' + e);
                                            })(a),
                                            a,
                                        );
                                    else if (a instanceof eZ) e[t] = ta(a, {});
                                    else if (a instanceof eW) e[t] = ta(a, []);
                                    else if (H(a));
                                    else if (1)
                                        if (1)
                                            throw new ef(
                                                "Invalid type definition for property '"
                                                    .concat(t, "', cannot infer a type from a value like '")
                                                    .concat(a, "' (")
                                                    .concat(typeof a, ')'),
                                            );
                                        else
                                            throw new ef(
                                                "Invalid type definition for property '".concat(
                                                    t,
                                                    "', it looks like you passed an object. Try passing another model type or a types.frozen.",
                                                ),
                                            );
                                    else
                                        throw new ef(
                                            "Invalid type definition for property '".concat(
                                                t,
                                                "', it looks like you passed a function. Did you forget to invoke it, or did you intend to declare a view / action?",
                                            ),
                                        );
                                    return e;
                                },
                                d({}, r),
                            )),
                            ew(o.properties),
                            (o.propertyNames = Object.keys(o.properties)),
                            (o.identifierAttribute = o._getIdentifierAttribute()),
                            o
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, '_getIdentifierAttribute', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = void 0;
                                return (
                                    this.forAllProps(function (t, r) {
                                        if (r.flags & l.Identifier) {
                                            if (e)
                                                throw new ef(
                                                    "Cannot define property '"
                                                        .concat(t, "' as object identifier, property '")
                                                        .concat(e, "' is already defined as identifier property"),
                                                );
                                            e = t;
                                        }
                                    }),
                                    e
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'cloneAndEnhance', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return new t({
                                    name: e.name || this.name,
                                    properties: Object.assign({}, this.properties, e.properties),
                                    initializers: this.initializers.concat(e.initializers || []),
                                    preProcessor: e.preProcessor || this.preProcessor,
                                    postProcessor: e.postProcessor || this.postProcessor,
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'actions', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                return this.cloneAndEnhance({
                                    initializers: [
                                        function (r) {
                                            return t.instantiateActions(r, e(r)), r;
                                        },
                                    ],
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiateActions', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this;
                                if (!ev(t)) throw new ef('actions initializer should return a plain object containing actions');
                                Object.getOwnPropertyNames(t).forEach(function (i) {
                                    if (i in r.properties) throw new ef("'".concat(i, "' is a property and cannot be declared as an action"));
                                    if (i === eY)
                                        throw new ef("Cannot define action '".concat(eY, "', it should be defined using 'type.preProcessSnapshot(fn)' instead"));
                                    if (i === eB)
                                        throw new ef("Cannot define action '".concat(eB, "', it should be defined using 'type.postProcessSnapshot(fn)' instead"));
                                    var a = t[i],
                                        o = e[i];
                                    if (i in n && o) {
                                        var l = a;
                                        a = function () {
                                            o.apply(null, arguments), l.apply(null, arguments);
                                        };
                                    }
                                    var u = a.$mst_middleware,
                                        c = a.bind(t);
                                    (c._isFlowAction = a._isFlowAction || !1), (c.$mst_middleware = u);
                                    var s = W(e, i, c);
                                    (t[i] = s), e_(e, i, s);
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'volatile', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                if ('function' != typeof e)
                                    throw new ef('You passed an '.concat(typeof e, ' to volatile state as an argument, when function is expected'));
                                return this.cloneAndEnhance({
                                    initializers: [
                                        function (r) {
                                            return t.instantiateVolatileState(r, e(r)), r;
                                        },
                                    ],
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiateVolatileState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this;
                                if (!ev(t)) throw new ef('volatile state initializer should return a plain object containing state');
                                Object.getOwnPropertyNames(t).forEach(function (n) {
                                    if (n in r.properties) throw new ef("'".concat(n, "' is a property and cannot be declared as volatile state"));
                                    (0, p.hZ)(e, n, t[n]);
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'extend', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                return this.cloneAndEnhance({
                                    initializers: [
                                        function (r) {
                                            var n = e(r),
                                                i = n.actions,
                                                a = n.views,
                                                o = n.state,
                                                l = (function (e, t) {
                                                    var r = {};
                                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                                                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                                                        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                                            0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                                                    return r;
                                                })(n, ['actions', 'views', 'state']);
                                            for (var u in l)
                                                throw new ef(
                                                    "The `extend` function should return an object with a subset of the fields 'actions', 'views' and 'state'. Found invalid key '".concat(
                                                        u,
                                                        "'",
                                                    ),
                                                );
                                            return o && t.instantiateVolatileState(r, o), a && t.instantiateViews(r, a), i && t.instantiateActions(r, i), r;
                                        },
                                    ],
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'views', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                return this.cloneAndEnhance({
                                    initializers: [
                                        function (r) {
                                            return t.instantiateViews(r, e(r)), r;
                                        },
                                    ],
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiateViews', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this;
                                if (!ev(t)) throw new ef('views initializer should return a plain object containing views');
                                Object.getOwnPropertyNames(t).forEach(function (n) {
                                    if (n in r.properties) throw new ef("'".concat(n, "' is a property and cannot be declared as a view"));
                                    var i,
                                        a = Object.getOwnPropertyDescriptor(t, n);
                                    if ('get' in a) (0, p.n8)(e, n, a), (0, p.Gn)(e, (((i = {})[n] = p.EW), i));
                                    else if ('function' == typeof a.value) e_(e, n, a.value);
                                    else throw new ef('A view member should either be a function or getter based property');
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                return ee(this, e, t, r, er(n) ? n : this.applySnapshotPreProcessor(n));
                            },
                        }),
                        Object.defineProperty(t.prototype, 'initializeChildNodes', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                void 0 === t && (t = {});
                                var r = e.type,
                                    n = {};
                                return (
                                    r.forAllProps(function (r, i) {
                                        n[r] = i.instantiate(e, r, void 0, t[r]);
                                    }),
                                    n
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'createNewInstance', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = d(d({}, ep), { name: this.name });
                                return p.sH.object(e, es, t);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'finalizeNewInstance', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                e_(t, 'toString', eJ),
                                    this.forAllProps(function (r) {
                                        (0, p.pA)(t, r, e.unbox);
                                    }),
                                    this.initializers.reduce(function (e, t) {
                                        return t(e);
                                    }, t),
                                    (0, p.Zc)(t, this.willChange),
                                    (0, p.lB)(t, this.didChange);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'willChange', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = ei(e.object),
                                    r = e.name;
                                t.assertWritable({ subpath: r });
                                var n = t.type.properties[r];
                                return n && (K(n, e.newValue), (e.newValue = n.reconcile(t.getChildNode(r), e.newValue, t, r))), e;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'didChange', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = ei(e.object);
                                if (t.type.properties[e.name]) {
                                    var r = e.oldValue ? e.oldValue.snapshot : void 0;
                                    t.emitPatch({ op: 'replace', path: ez(e.name), value: e.newValue.snapshot, oldValue: r }, t);
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getChildren', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this,
                                    r = [];
                                return (
                                    this.forAllProps(function (n) {
                                        r.push(t.getChildNode(e, n));
                                    }),
                                    r
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getChildNode', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if (!(t in this.properties)) throw new ef('Not a value property: ' + t);
                                var r,
                                    n = (0, p.Mr)(e.storedValue, t),
                                    i = null == (r = n.raw) ? void 0 : r.call(n);
                                if (!i) throw new ef('Node not available for property ' + t);
                                return i;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this;
                                void 0 === t && (t = !0);
                                var n = {};
                                return (this.forAllProps(function (t, i) {
                                    (0, p.go)(e.storedValue, t).reportObserved(), (n[t] = r.getChildNode(e, t).snapshot);
                                }),
                                t)
                                    ? this.applySnapshotPostProcessor(n)
                                    : n;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'processInitialSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = {};
                                return (
                                    Object.keys(e).forEach(function (r) {
                                        t[r] = e[r].getSnapshot();
                                    }),
                                    this.applySnapshotPostProcessor(t)
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'applyPatchLocally', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r) {
                                if ('replace' !== r.op && 'add' !== r.op) throw new ef('object does not support operation '.concat(r.op));
                                e.storedValue[t] = r.value;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'applySnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                K(this, t);
                                var r = this.applySnapshotPreProcessor(t);
                                this.forAllProps(function (t) {
                                    e.storedValue[t] = r[t];
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'applySnapshotPreProcessor', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.preProcessor;
                                return t ? t.call(null, e) : e;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'applySnapshotPostProcessor', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.postProcessor;
                                return t ? t.call(null, e) : e;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getChildType', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return eD(e, 1), this.properties[e];
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this,
                                    n = this.applySnapshotPreProcessor(e);
                                return ev(n)
                                    ? J(
                                          this.propertyNames.map(function (e) {
                                              return r.properties[e].validate(n[e], Y(t, e, r.properties[e]));
                                          }),
                                      )
                                    : B(t, n, 'Value is not a plain object');
                            },
                        }),
                        Object.defineProperty(t.prototype, 'forAllProps', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                this.propertyNames.forEach(function (r) {
                                    return e(r, t.properties[r]);
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this;
                                return (
                                    '{ ' +
                                    this.propertyNames
                                        .map(function (t) {
                                            return t + ': ' + e.properties[t].describe();
                                        })
                                        .join('; ') +
                                    ' }'
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getDefaultSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return es;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'removeChild', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                e.storedValue[t] = void 0;
                            },
                        }),
                        t
                    );
                })(R);
            eq.prototype.applySnapshot = (0, p.XI)(eq.prototype.applySnapshot);
            var eQ = (function (e) {
                    function t(t, r, n, i) {
                        void 0 === i && (i = eb);
                        var a = e.call(this, t) || this;
                        return (
                            Object.defineProperty(a, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                            Object.defineProperty(a, 'checker', { enumerable: !0, configurable: !0, writable: !0, value: n }),
                            Object.defineProperty(a, 'initializer', { enumerable: !0, configurable: !0, writable: !0, value: i }),
                            (a.flags = r),
                            a
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.name;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                return et(this, e, t, r, n);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'createNewInstance', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this.initializer(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if (em(e) && this.checker(e)) return ec;
                                var r = 'Date' === this.name ? 'Date or a unix milliseconds timestamp' : this.name;
                                return B(t, e, 'Value is not a '.concat(r));
                            },
                        }),
                        t
                    );
                })(F),
                e0 = new eQ('string', l.String, function (e) {
                    return 'string' == typeof e;
                }),
                e1 = new eQ('number', l.Number, function (e) {
                    return 'number' == typeof e;
                }),
                e2 = new eQ('integer', l.Integer, function (e) {
                    return eh(e);
                }),
                e4 = new eQ('float', l.Float, function (e) {
                    return Number(e) === e && e % 1 != 0;
                }),
                e8 = new eQ('finite', l.Finite, function (e) {
                    return Number.isFinite(e);
                }),
                e6 = new eQ('boolean', l.Boolean, function (e) {
                    return 'boolean' == typeof e;
                }),
                e3 = new eQ('null', l.Null, function (e) {
                    return null === e;
                }),
                e7 = new eQ('undefined', l.Undefined, function (e) {
                    return void 0 === e;
                }),
                e5 = new eQ(
                    'Date',
                    l.Date,
                    function (e) {
                        return 'number' == typeof e || e instanceof Date;
                    },
                    function (e) {
                        return e instanceof Date ? e : new Date(e);
                    },
                );
            e5.getSnapshot = function (e) {
                return e.storedValue.getTime();
            };
            var e9 = (function (e) {
                function t(t) {
                    var r = e.call(this, JSON.stringify(t)) || this;
                    return (
                        Object.defineProperty(r, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(r, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: l.Literal }),
                        (r.value = t),
                        r
                    );
                }
                return (
                    h(t, e),
                    Object.defineProperty(t.prototype, 'instantiate', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t, r, n) {
                            return et(this, e, t, r, n);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'describe', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return JSON.stringify(this.value);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'isValidSnapshot', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t) {
                            return em(e) && e === this.value ? ec : B(t, e, 'Value is not a literal '.concat(JSON.stringify(this.value)));
                        },
                    }),
                    t
                );
            })(F);
            function te(e) {
                return eN(e, em, 'primitive', 1), new e9(e);
            }
            var tt = (function (e) {
                    function t(t, r, n, i) {
                        var a = e.call(this, t) || this;
                        return (
                            Object.defineProperty(a, '_subtype', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                            Object.defineProperty(a, '_predicate', { enumerable: !0, configurable: !0, writable: !0, value: n }),
                            Object.defineProperty(a, '_message', { enumerable: !0, configurable: !0, writable: !0, value: i }),
                            a
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'flags', {
                            get: function () {
                                return this._subtype.flags | l.Refinement;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.name;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                return this._subtype.instantiate(e, t, r, n);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isAssignableFrom', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this._subtype.isAssignableFrom(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this._subtype.validate(e, t);
                                if (r.length > 0) return r;
                                var n = er(e) ? ei(e).snapshot : e;
                                return this._predicate(n) ? ec : B(t, e, this._message(e));
                            },
                        }),
                        Object.defineProperty(t.prototype, 'reconcile', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                return this._subtype.reconcile(e, t, r, n);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getSubTypes', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this._subtype;
                            },
                        }),
                        t
                    );
                })(z),
                tr = (function (e) {
                    function t(t, r, n) {
                        var i = e.call(this, t) || this;
                        return (
                            Object.defineProperty(i, '_types', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                            Object.defineProperty(i, '_dispatcher', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(i, '_eager', { enumerable: !0, configurable: !0, writable: !0, value: !0 }),
                            (i._dispatcher = (n = d({ eager: !0, dispatcher: void 0 }, n)).dispatcher),
                            n.eager || (i._eager = !1),
                            i
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'flags', {
                            get: function () {
                                var e = l.Union;
                                return (
                                    this._types.forEach(function (t) {
                                        e |= t.flags;
                                    }),
                                    e
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'isAssignableFrom', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this._types.some(function (t) {
                                    return t.isAssignableFrom(e);
                                });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return (
                                    '(' +
                                    this._types
                                        .map(function (e) {
                                            return e.describe();
                                        })
                                        .join(' | ') +
                                    ')'
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = this.determineType(n, void 0);
                                if (!i) throw new ef('No matching type for union ' + this.describe());
                                return i.instantiate(e, t, r, n);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'reconcile', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = this.determineType(t, e.getReconciliationType());
                                if (!i) throw new ef('No matching type for union ' + this.describe());
                                return i.reconcile(e, t, r, n);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'determineType', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                return this._dispatcher
                                    ? this._dispatcher(e)
                                    : t
                                      ? t.is(e)
                                          ? t
                                          : this._types
                                                .filter(function (e) {
                                                    return e !== t;
                                                })
                                                .find(function (t) {
                                                    return t.is(e);
                                                })
                                      : this._types.find(function (t) {
                                            return t.is(e);
                                        });
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if (this._dispatcher) return this._dispatcher(e).validate(e, t);
                                for (var r = [], n = 0, i = 0; i < this._types.length; i++) {
                                    var a = this._types[i].validate(e, t);
                                    if (0 === a.length)
                                        if (this._eager) return ec;
                                        else n++;
                                    else r.push(a);
                                }
                                return 1 === n ? ec : B(t, e, 'No type is applicable for the union').concat(J(r));
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getSubTypes', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this._types;
                            },
                        }),
                        t
                    );
                })(z);
            function tn(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                var n = H(e) ? void 0 : e,
                    i = H(e) ? g([e], v(t), !1) : t;
                return new tr(
                    '(' +
                        i
                            .map(function (e) {
                                return e.name;
                            })
                            .join(' | ') +
                        ')',
                    i,
                    n,
                );
            }
            var ti = (function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t.name) || this;
                    return (
                        Object.defineProperty(i, '_subtype', { enumerable: !0, configurable: !0, writable: !0, value: t }),
                        Object.defineProperty(i, '_defaultValue', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                        Object.defineProperty(i, 'optionalValues', { enumerable: !0, configurable: !0, writable: !0, value: n }),
                        i
                    );
                }
                return (
                    h(t, e),
                    Object.defineProperty(t.prototype, 'flags', {
                        get: function () {
                            return this._subtype.flags | l.Optional;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, 'describe', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return this._subtype.describe() + '?';
                        },
                    }),
                    Object.defineProperty(t.prototype, 'instantiate', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t, r, n) {
                            if (this.optionalValues.indexOf(n) >= 0) {
                                var i = this.getDefaultInstanceOrSnapshot();
                                return this._subtype.instantiate(e, t, r, i);
                            }
                            return this._subtype.instantiate(e, t, r, n);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'reconcile', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t, r, n) {
                            return this._subtype.reconcile(e, 0 > this.optionalValues.indexOf(t) && this._subtype.is(t) ? t : this.getDefaultInstanceOrSnapshot(), r, n);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getDefaultInstanceOrSnapshot', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            var e = 'function' == typeof this._defaultValue ? this._defaultValue() : this._defaultValue;
                            return 'function' == typeof this._defaultValue && K(this, e), e;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'isValidSnapshot', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, t) {
                            return this.optionalValues.indexOf(e) >= 0 ? ec : this._subtype.validate(e, t);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'isAssignableFrom', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            return this._subtype.isAssignableFrom(e);
                        },
                    }),
                    Object.defineProperty(t.prototype, 'getSubTypes', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return this._subtype;
                        },
                    }),
                    t
                );
            })(z);
            function ta(e, t, r) {
                if ('function' != typeof t && er(t))
                    throw new ef('default value cannot be an instance, pass a snapshot or a function that creates an instance/snapshot instead');
                return M(e, 1), new ti(e, t, r || to);
            }
            var to = [void 0],
                tl = ta(e7, void 0),
                tu = ta(e3, null);
            function tc(e) {
                return M(e, 1), tn(e, tl);
            }
            var ts = (function (e) {
                    function t(t, r) {
                        var n = e.call(this, t) || this;
                        return (
                            Object.defineProperty(n, '_definition', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                            Object.defineProperty(n, '_subType', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            n
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'flags', {
                            get: function () {
                                return (this._subType ? this._subType.flags : 0) | l.Late;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'getSubType', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (!this._subType) {
                                    var t = void 0;
                                    try {
                                        t = this._definition();
                                    } catch (e) {
                                        if (e instanceof ReferenceError) t = void 0;
                                        else throw e;
                                    }
                                    if (e && void 0 === t) throw new ef('Late type seems to be used too early, the definition (still) returns undefined');
                                    t && (this._subType = t);
                                }
                                return this._subType;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                return this.getSubType(!0).instantiate(e, t, r, n);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'reconcile', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                return this.getSubType(!0).reconcile(e, t, r, n);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this.getSubType(!1);
                                return e ? e.name : '<uknown late type>';
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this.getSubType(!1);
                                return r ? r.validate(e, t) : ec;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isAssignableFrom', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.getSubType(!1);
                                return !!t && t.isAssignableFrom(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getSubTypes', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.getSubType(!1) || x;
                            },
                        }),
                        t
                    );
                })(z),
                tp = (function (e) {
                    function t(t, r) {
                        var n = e.call(this, t) || this;
                        return (
                            Object.defineProperty(n, 'options', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                            Object.defineProperty(n, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: l.Lazy }),
                            Object.defineProperty(n, 'loadedType', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(n, 'pendingNodeList', { enumerable: !0, configurable: !0, writable: !0, value: p.sH.array() }),
                            (0, p.z7)(
                                function () {
                                    return (
                                        n.pendingNodeList.length > 0 &&
                                        n.pendingNodeList.some(function (e) {
                                            return e.isAlive && n.options.shouldLoadPredicate(e.parent ? e.parent.value : null);
                                        })
                                    );
                                },
                                function () {
                                    n.options.loadType().then(
                                        (0, p.XI)(function (e) {
                                            (n.loadedType = e),
                                                n.pendingNodeList.forEach(function (e) {
                                                    e.parent &&
                                                        n.loadedType &&
                                                        e.parent.applyPatches([{ op: 'replace', path: '/'.concat(e.subpath), value: e.snapshot }]);
                                                });
                                        }),
                                    );
                                },
                            ),
                            n
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return '<lazy '.concat(this.name, '>');
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = this;
                                if (this.loadedType) return this.loadedType.instantiate(e, t, r, n);
                                var a = et(this, e, t, r, eP(n));
                                return (
                                    this.pendingNodeList.push(a),
                                    (0, p.z7)(
                                        function () {
                                            return !a.isAlive;
                                        },
                                        function () {
                                            return i.pendingNodeList.splice(i.pendingNodeList.indexOf(a), 1);
                                        },
                                    ),
                                    a
                                );
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                return this.loadedType ? this.loadedType.validate(e, t) : eO(e) ? ec : B(t, e, 'Value is not serializable and cannot be lazy');
                            },
                        }),
                        Object.defineProperty(t.prototype, 'reconcile', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t, r, n, i) {
                                return this.loadedType ? (t.die(), this.loadedType.instantiate(n, i, n.environment, r)) : e.prototype.reconcile.call(this, t, r, n, i);
                            },
                        }),
                        t
                    );
                })(F),
                tf = (function (e) {
                    function t(t) {
                        var r = e.call(this, t ? 'frozen('.concat(t.name, ')') : 'frozen') || this;
                        return (
                            Object.defineProperty(r, 'subType', { enumerable: !0, configurable: !0, writable: !0, value: t }),
                            Object.defineProperty(r, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: l.Frozen }),
                            r
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return '<any immutable value>';
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                return et(this, e, t, r, eP(n));
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                return eO(e) ? (this.subType ? this.subType.validate(e, t) : ec) : B(t, e, 'Value is not serializable and cannot be frozen');
                            },
                        }),
                        t
                    );
                })(F),
                tb = new tf(),
                th = (function () {
                    function e(e, t) {
                        if (
                            (Object.defineProperty(this, 'targetType', { enumerable: !0, configurable: !0, writable: !0, value: t }),
                            Object.defineProperty(this, 'identifier', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'node', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'resolvedReference', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            tS(e))
                        )
                            this.identifier = e;
                        else if (er(e)) {
                            var r = ei(e);
                            if (!r.identifierAttribute) throw new ef('Can only store references with a defined identifier attribute.');
                            var n = r.unnormalizedIdentifier;
                            if (null == n) throw new ef('Can only store references to tree nodes with a defined identifier.');
                            this.identifier = n;
                        } else throw new ef("Can only store references to tree nodes or identifiers, got: '".concat(e, "'"));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'updateResolvedReference', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = '' + this.identifier,
                                    r = e.root,
                                    n = r.identifierCache.getLastCacheModificationPerId(t);
                                if (!this.resolvedReference || this.resolvedReference.lastCacheModification !== n) {
                                    var i = this.targetType,
                                        a = r.identifierCache.resolve(i, t);
                                    if (!a)
                                        throw new td(
                                            "[mobx-state-tree] Failed to resolve reference '"
                                                .concat(this.identifier, "' to type '")
                                                .concat(this.targetType.name, "' (from node: ")
                                                .concat(e.path, ')'),
                                        );
                                    this.resolvedReference = { node: a, lastCacheModification: n };
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'resolvedValue', {
                            get: function () {
                                return this.updateResolvedReference(this.node), this.resolvedReference.node.value;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        e
                    );
                })(),
                td = (function (e) {
                    function t(r) {
                        var n = e.call(this, r) || this;
                        return Object.setPrototypeOf(n, t.prototype), n;
                    }
                    return h(t, e), t;
                })(Error),
                ty = (function (e) {
                    function t(t, r) {
                        var n = e.call(this, 'reference('.concat(t.name, ')')) || this;
                        return (
                            Object.defineProperty(n, 'targetType', { enumerable: !0, configurable: !0, writable: !0, value: t }),
                            Object.defineProperty(n, 'onInvalidated', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                            Object.defineProperty(n, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: l.Reference }),
                            n
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.name;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isAssignableFrom', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this.targetType.isAssignableFrom(e);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                return tS(e) ? ec : B(t, e, 'Value is not a valid identifier, which is a string or a number');
                            },
                        }),
                        Object.defineProperty(t.prototype, 'fireInvalidated', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = t.parent;
                                if (i && i.isAlive) {
                                    var a = i.storedValue;
                                    a &&
                                        this.onInvalidated({
                                            cause: e,
                                            parent: a,
                                            invalidTarget: n ? n.storedValue : void 0,
                                            invalidId: r,
                                            replaceRef: function (e) {
                                                w(t.root.storedValue, { op: 'replace', value: e, path: t.path });
                                            },
                                            removeRef: function () {
                                                var e;
                                                H((e = i.type)) && (e.flags & l.Object) > 0
                                                    ? this.replaceRef(void 0)
                                                    : w(t.root.storedValue, { op: 'remove', path: t.path });
                                            },
                                        });
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'addTargetNodeWatcher', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this,
                                    i = this.getValue(e);
                                if (i) {
                                    var a = ei(i),
                                        o = function (i, o) {
                                            var l = (function (e) {
                                                switch (e) {
                                                    case n.beforeDestroy:
                                                        return 'destroy';
                                                    case n.beforeDetach:
                                                        return 'detach';
                                                    default:
                                                        return;
                                                }
                                            })(o);
                                            l && r.fireInvalidated(l, e, t, a);
                                        },
                                        l = a.registerHook(n.beforeDetach, o),
                                        u = a.registerHook(n.beforeDestroy, o);
                                    return function () {
                                        l(), u();
                                    };
                                }
                            },
                        }),
                        Object.defineProperty(t.prototype, 'watchTargetNodeForInvalidations', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r) {
                                var i,
                                    a = this;
                                if (this.onInvalidated) {
                                    e.registerHook(n.beforeDestroy, function () {
                                        i && i();
                                    });
                                    var o = function (n) {
                                        i && i();
                                        var o = e.parent,
                                            l = o && o.storedValue;
                                        o &&
                                            o.isAlive &&
                                            l &&
                                            ((r ? !!r.get(t, l) : e.root.identifierCache.has(a.targetType, '' + t))
                                                ? (i = a.addTargetNodeWatcher(e, t))
                                                : n || a.fireInvalidated('invalidSnapshotReference', e, t, null));
                                    };
                                    e.state === c.FINALIZED
                                        ? o(!0)
                                        : (e.isRoot ||
                                              e.root.registerHook(n.afterCreationFinalization, function () {
                                                  e.parent && e.parent.createObservableInstanceIfNeeded();
                                              }),
                                          e.registerHook(n.afterAttach, function () {
                                              o(!1);
                                          }));
                                }
                            },
                        }),
                        t
                    );
                })(F),
                tv = (function (e) {
                    function t(t, r) {
                        return e.call(this, t, r) || this;
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'getValue', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (e.isAlive) return e.storedValue.resolvedValue;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return e.storedValue.identifier;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = er(n) ? (en(n, 1), ei(n).identifier) : n,
                                    a = new th(n, this.targetType),
                                    o = et(this, e, t, r, a);
                                return (a.node = o), this.watchTargetNodeForInvalidations(o, i, void 0), o;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'reconcile', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                if (!e.isDetaching && e.type === this) {
                                    var i = er(t),
                                        a = e.storedValue;
                                    if ((!i && a.identifier === t) || (i && a.resolvedValue === t)) return e.setParent(r, n), e;
                                }
                                var o = this.instantiate(r, n, void 0, t);
                                return e.die(), o;
                            },
                        }),
                        t
                    );
                })(ty),
                tg = (function (e) {
                    function t(t, r, n) {
                        var i = e.call(this, t, n) || this;
                        return Object.defineProperty(i, 'options', { enumerable: !0, configurable: !0, writable: !0, value: r }), i;
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'getValue', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (e.isAlive) return this.options.get(e.storedValue, e.parent ? e.parent.storedValue : null);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return e.storedValue;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = er(n) ? this.options.set(n, e ? e.storedValue : null) : n,
                                    a = et(this, e, t, r, i);
                                return this.watchTargetNodeForInvalidations(a, i, this.options), a;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'reconcile', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = er(t) ? this.options.set(t, e ? e.storedValue : null) : t;
                                if (!e.isDetaching && e.type === this && e.storedValue === i) return e.setParent(r, n), e;
                                var a = this.instantiate(r, n, void 0, i);
                                return e.die(), a;
                            },
                        }),
                        t
                    );
                })(ty);
            function tm(e, t) {
                M(e, 1);
                var r = t || void 0,
                    n = t ? t.onInvalidated : void 0;
                return r && (r.get || r.set) ? new tg(e, { get: r.get, set: r.set }, n) : new tv(e, n);
            }
            var tw = (function (e) {
                    function t(t, r) {
                        var n = e.call(this, t) || this;
                        return (
                            Object.defineProperty(n, 'validType', { enumerable: !0, configurable: !0, writable: !0, value: r }),
                            Object.defineProperty(n, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: l.Identifier }),
                            n
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                if (!e || !(e.type instanceof eq)) throw new ef('Identifier types can only be instantiated as direct child of a model type');
                                return et(this, e, t, r, n);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'reconcile', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                if (e.storedValue !== t)
                                    throw new ef(
                                        "Tried to change identifier from '".concat(e.storedValue, "' to '").concat(t, "'. Changing identifiers is not allowed."),
                                    );
                                return e.setParent(r, n), e;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                return typeof e !== this.validType
                                    ? B(t, e, 'Value is not a valid '.concat(this.describe(), ', expected a ').concat(this.validType))
                                    : ec;
                            },
                        }),
                        t
                    );
                })(F),
                tP = (function (e) {
                    function t() {
                        var t = e.call(this, 'identifier', 'string') || this;
                        return Object.defineProperty(t, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: l.Identifier }), t;
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return 'identifier';
                            },
                        }),
                        t
                    );
                })(tw),
                tO = (function (e) {
                    function t() {
                        return e.call(this, 'identifierNumber', 'number') || this;
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'getSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return e.storedValue;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return 'identifierNumber';
                            },
                        }),
                        t
                    );
                })(tw),
                tj = new tP(),
                t_ = new tO();
            function tS(e) {
                return 'string' == typeof e || 'number' == typeof e;
            }
            var tI = (function (e) {
                    function t(t) {
                        var r = e.call(this, t.name) || this;
                        return (
                            Object.defineProperty(r, 'options', { enumerable: !0, configurable: !0, writable: !0, value: t }),
                            Object.defineProperty(r, 'flags', { enumerable: !0, configurable: !0, writable: !0, value: l.Custom }),
                            r
                        );
                    }
                    return (
                        h(t, e),
                        Object.defineProperty(t.prototype, 'describe', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.name;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'isValidSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if (this.options.isTargetType(e)) return ec;
                                var r = this.options.getValidationMessage(e);
                                return r ? B(t, e, "Invalid value for type '".concat(this.name, "': ").concat(r)) : ec;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'getSnapshot', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this.options.toSnapshot(e.storedValue);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'instantiate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = this.options.isTargetType(n) ? n : this.options.fromSnapshot(n, e && e.root.environment);
                                return et(this, e, t, r, i);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'reconcile', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r, n) {
                                var i = !this.options.isTargetType(t);
                                if (!e.isDetaching && e.type === this && (i ? t === e.snapshot : t === e.storedValue)) return e.setParent(r, n), e;
                                var a = i ? this.options.fromSnapshot(t, r.root.environment) : t,
                                    o = this.instantiate(r, n, void 0, a);
                                return e.die(), o;
                            },
                        }),
                        t
                    );
                })(F),
                tA = {
                    enumeration: function (e, t) {
                        var r = tn.apply(
                            void 0,
                            g(
                                [],
                                v(
                                    ('string' == typeof e ? t : e).map(function (e) {
                                        return te('' + e);
                                    }),
                                ),
                                !1,
                            ),
                        );
                        return 'string' == typeof e && (r.name = e), r;
                    },
                    model: function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return new eq({ name: 'string' == typeof e[0] ? e.shift() : 'AnonymousModel', properties: e.shift() || {} });
                    },
                    compose: function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = 'string' == typeof e[0],
                            n = r ? e[0] : 'AnonymousModel';
                        return (
                            r && e.shift(),
                            e
                                .reduce(function (e, t) {
                                    return e.cloneAndEnhance({
                                        name: e.name + '_' + t.name,
                                        properties: t.properties,
                                        initializers: t.initializers,
                                        preProcessor: function (r) {
                                            return t.applySnapshotPreProcessor(e.applySnapshotPreProcessor(r));
                                        },
                                        postProcessor: function (r) {
                                            return t.applySnapshotPostProcessor(e.applySnapshotPostProcessor(r));
                                        },
                                    });
                                })
                                .named(n)
                        );
                    },
                    custom: function (e) {
                        return new tI(e);
                    },
                    reference: tm,
                    safeReference: function (e, t) {
                        var r = tm(
                            e,
                            d(d({}, t), {
                                onInvalidated: function (e) {
                                    t && t.onInvalidated && t.onInvalidated(e), e.removeRef();
                                },
                            }),
                        );
                        return t && !1 === t.acceptsUndefined ? r : tc(r);
                    },
                    union: tn,
                    optional: ta,
                    literal: te,
                    maybe: tc,
                    maybeNull: function (e) {
                        return M(e, 1), tn(e, tu);
                    },
                    refinement: function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = 'string' == typeof e[0] ? e.shift() : H(e[0]) ? e[0].name : null,
                            n = e[0],
                            i = e[1],
                            a = e[2]
                                ? e[2]
                                : function (e) {
                                      return 'Value does not respect the refinement predicate';
                                  };
                        return M(n, [1, 2]), eD(r, 1), eV(i, [2, 3]), eV(a, [3, 4]), new tt(r, n, i, a);
                    },
                    string: e0,
                    boolean: e6,
                    number: e1,
                    integer: e2,
                    float: e4,
                    finite: e8,
                    Date: e5,
                    map: function (e) {
                        return new eZ('Map<string, '.concat(e.name, '>'), e);
                    },
                    array: function (e) {
                        return M(e, 1), new eW(''.concat(e.name, '[]'), e);
                    },
                    frozen: function (e) {
                        return 0 == arguments.length ? tb : H(e) ? new tf(e) : ta(tb, e);
                    },
                    identifier: tj,
                    identifierNumber: t_,
                    late: function (e, t) {
                        var r = 'string' == typeof e ? e : 'late('.concat(e.toString(), ')'),
                            n = 'string' == typeof e ? t : e;
                        return new ts(r, n);
                    },
                    lazy: function (e, t) {
                        return new tp(e, t);
                    },
                    undefined: e7,
                    null: e3,
                    snapshotProcessor: function (e, t, r) {
                        return M(e, 1), new eM(e, t, r);
                    },
                };
        },
    },
]);
