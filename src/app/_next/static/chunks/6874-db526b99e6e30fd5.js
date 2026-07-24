'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6874],
    {
        6612: (e, t, r) => {
            r.d(t, { Di: () => u, pM: () => i });
            var i,
                a = r(91945),
                s = r(46862);
            class n {
                resetLivePlayableIndex(e) {
                    this.livePlayableIndex.value = e;
                }
                shiftLivePlayableIndex(e) {
                    let t = this.livePlayableIndex.value + e;
                    this.livePlayableIndex.value = Math.max(0, t);
                }
                clampLivePlayableIndex(e) {
                    this.livePlayableIndex.value > e && (this.livePlayableIndex.value = e);
                }
                constructor(e) {
                    (0, a._)(this, 'prevIndex', void 0),
                        (0, a._)(this, 'index', void 0),
                        (0, a._)(this, 'nextIndex', void 0),
                        (0, a._)(this, 'entityList', void 0),
                        (0, a._)(this, 'order', void 0),
                        (0, a._)(this, 'repeat', void 0),
                        (0, a._)(this, 'shuffle', void 0),
                        (0, a._)(this, 'filterParams', void 0),
                        (0, a._)(this, 'prevEntity', void 0),
                        (0, a._)(this, 'currentEntity', void 0),
                        (0, a._)(this, 'nextEntity', void 0),
                        (0, a._)(this, 'livePlayableIndex', void 0);
                    let { prevIndex: t, index: r, nextIndex: i, entityList: n, repeat: o, shuffle: l, order: u, filterParams: h } = e;
                    (this.index = new s.cJ(r)),
                        (this.prevIndex = new s.cJ(t)),
                        (this.nextIndex = new s.cJ(i)),
                        (this.entityList = new s.cJ(n)),
                        (this.order = new s.cJ(u)),
                        (this.repeat = new s.cJ(o)),
                        (this.shuffle = new s.cJ(l)),
                        (this.filterParams = new s.cJ(h)),
                        (this.prevEntity = new s.rm(() => {
                            let e = null !== this.prevIndex.value ? this.order.value[this.prevIndex.value] : void 0;
                            return void 0 !== e ? this.entityList.value[e] : void 0;
                        })),
                        (this.currentEntity = new s.rm(() => {
                            let e = this.order.value[this.index.value];
                            return void 0 !== e ? this.entityList.value[e] : void 0;
                        })),
                        (this.nextEntity = new s.rm(() => {
                            let e = null !== this.nextIndex.value ? this.order.value[this.nextIndex.value] : void 0;
                            return void 0 !== e ? this.entityList.value[e] : void 0;
                        })),
                        (this.livePlayableIndex = new s.cJ(r)),
                        this.index.onChange(() => {
                            let e = this.index.value;
                            e > this.livePlayableIndex.value && (this.livePlayableIndex.value = e);
                        });
                }
            }
            function o(e) {
                let { originalOrderToShuffle: t, index: r } = e,
                    i = t.slice(0, r),
                    a = t.slice(r + 1),
                    s = (function (e) {
                        let t = [...e];
                        for (let e = t.length - 1; e > 0; e--) {
                            let r = Math.floor(Math.random() * (e + 1)),
                                i = t[e];
                            (t[e] = t[r]), (t[r] = i);
                        }
                        return t;
                    })(i.concat(a));
                return [t[r], ...s];
            }
            function l(e) {
                return Array.from(Array(e).keys());
            }
            class u {
                get state() {
                    return this.queueState;
                }
                set prevIndex(e) {
                    if (null === e) {
                        this.queueState.prevIndex.value = null;
                        return;
                    }
                    if (e >= 0 && e <= this.queueState.entityList.value.length - 1) this.queueState.prevIndex.value = e;
                    else throw Error('prevIndex out of range');
                }
                set index(e) {
                    if (e >= 0 && e <= this.queueState.entityList.value.length - 1) this.queueState.index.value = e;
                    else throw Error('index out of range');
                }
                set nextIndex(e) {
                    if (null === e) {
                        this.queueState.nextIndex.value = null;
                        return;
                    }
                    if (e >= 0 && e <= this.queueState.entityList.value.length - 1) this.queueState.nextIndex.value = e;
                    else throw Error('nextIndex out of range');
                }
                moveIndexForward() {
                    let e = this.queueState.index.value + 1;
                    e <= this.queueState.entityList.value.length - 1 && (this.queueState.index.value = e);
                }
                moveIndexBackward() {
                    let e = this.queueState.index.value - 1;
                    e >= 0 && (this.queueState.index.value = e);
                }
                inject(e, t) {
                    let r,
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    r =
                        t >= this.queueState.order.value.length
                            ? this.queueState.order.value[this.queueState.order.value.length - 1] + 1
                            : t < 0
                              ? this.queueState.order.value[0]
                              : this.queueState.order.value[t];
                    let a = [...this.queueState.entityList.value];
                    a.splice(r, 0, ...e);
                    let n = this.queueState.order.value.map((t) => (t >= r ? t + e.length : t)),
                        o = [];
                    for (let t = 0; t < e.length; t++) o.push(r + t);
                    n.splice(t, 0, ...o);
                    let l = t < this.queueState.order.value.length,
                        u = l && t <= this.queueState.livePlayableIndex.value,
                        h = this.queueState.livePlayableIndex.value,
                        d = u ? h + e.length : h;
                    (0, s.vA)(() => {
                        this.setEntityList(a, i),
                            this.setOrder(n, i),
                            l && this.queueState.index.value >= t && (this.queueState.index.value = this.queueState.index.value + e.length);
                    }),
                        (this.queueState.livePlayableIndex.value = d);
                }
                remove(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = [...this.queueState.entityList.value],
                        i = [...this.queueState.order.value],
                        a = 0,
                        n = 0;
                    if (e.length > this.queueState.order.value.length) throw Error('Can not remove more entities than are in entityList');
                    for (let t of e) {
                        if (t > this.queueState.order.value.length - 1 || t < 0) throw Error('No such position');
                        let e = this.queueState.order.value[t],
                            s = this.queueState.entityList.value[e];
                        (r = r.filter((e) => e !== s)),
                            (i = i.filter((t) => t !== e)),
                            t < this.queueState.index.value && (a += 1),
                            t < this.queueState.livePlayableIndex.value && (n += 1);
                    }
                    let o = (i = i.map((t) => {
                        let r = e.reduce((e, r) => (this.queueState.order.value[r] < t && e++, e), 0);
                        return t - r;
                    })).length;
                    (0, s.vA)(() => {
                        this.setEntityList(r, t),
                            this.setOrder(i, t),
                            (this.queueState.index.value = this.queueState.index.value - a),
                            n > 0 && this.queueState.shiftLivePlayableIndex(-n),
                            this.queueState.clampLivePlayableIndex(o);
                    });
                }
                getEntityByIndex(e) {
                    let { index: t } = e,
                        r = void 0 === e.entityList ? this.state.entityList.value : e.entityList,
                        i = (void 0 === e.order ? this.state.order.value : e.order)[t];
                    if (void 0 !== i) return r[i];
                }
                setEntityList(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (t) {
                        for (; 0 !== this.queueState.entityList.value.length; ) this.queueState.entityList.value.shift();
                        let t = e.shift();
                        for (; void 0 !== t; ) this.queueState.entityList.value.push(t), (t = e.shift());
                    } else this.queueState.entityList.value = e;
                }
                setOrder(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (t) {
                        for (; 0 !== this.queueState.order.value.length; ) this.queueState.order.value.pop();
                        let t = e.shift();
                        for (; void 0 !== t; ) this.queueState.order.value.push(t), (t = e.shift());
                    } else this.queueState.order.value = e;
                }
                setShuffle(e) {
                    if (e === this.queueState.shuffle.value) return;
                    let {
                        index: { value: t },
                        order: { value: r },
                        entityList: { value: i },
                    } = this.queueState;
                    if (e) {
                        let e = o({ originalOrderToShuffle: r, index: t });
                        (0, s.vA)(() => {
                            this.setOrder(e, !0), (this.queueState.shuffle.value = !0), (this.queueState.index.value = 0);
                        });
                    } else {
                        let e = r[t],
                            a = l(i.length);
                        (0, s.vA)(() => {
                            this.setOrder(a, !0), (this.queueState.shuffle.value = !1), (this.queueState.index.value = e);
                        });
                    }
                }
                createOrder(e) {
                    let { entityListLength: t, index: r } = e,
                        i = l(t);
                    return this.queueState.shuffle.value ? { order: o({ originalOrderToShuffle: i, index: r }), index: 0 } : { order: l(t), index: r };
                }
                createIndex(e) {
                    let { entityListLength: t } = e,
                        {
                            shuffle: { value: r },
                        } = this.queueState,
                        i = 0;
                    return (
                        r &&
                            (i = (function (e, t) {
                                let r = Math.ceil(0);
                                return Math.floor(Math.random() * (Math.floor(t) - r + 1)) + r;
                            })(0, t - 1)),
                        i
                    );
                }
                toggleShuffle() {
                    let {
                        shuffle: { value: e },
                    } = this.queueState;
                    this.setShuffle(!e);
                }
                toggleRepeat(e) {}
                isOnLastIndex() {
                    return this.state.order.value.length - 1 === this.state.index.value;
                }
                setRepeatMode(e) {
                    this.state.repeat.value = e;
                }
                updateFilterParams(e) {
                    this.queueState.filterParams.value = { ...this.queueState.filterParams.value, ...e };
                }
                resetLivePlayableIndex(e) {
                    this.queueState.resetLivePlayableIndex(e);
                }
                shiftLivePlayableIndex(e) {
                    this.queueState.shiftLivePlayableIndex(e);
                }
                clampLivePlayableIndex(e) {
                    this.queueState.clampLivePlayableIndex(e);
                }
                constructor(e) {
                    (0, a._)(this, 'queueState', void 0), (this.queueState = new n(e));
                }
            }
            !(function (e) {
                (e.NONE = 'none'), (e.CONTEXT = 'context'), (e.ONE = 'one');
            })(i || (i = {}));
        },
        46862: (e, t, r) => {
            r.d(t, { rm: () => s, cJ: () => a, vA: () => n });
            var i = r(98411),
                a = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'observableValue', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'prevValueByListener', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (this.observableValue = (0, i.vP)(e)),
                            (this.prevValueByListener = new Map());
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
                        Object.defineProperty(e.prototype, 'onChange', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this;
                                void 0 === t && (t = { skipFirstChange: !1 });
                                var i = !0;
                                return (
                                    this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                    this.observableValue.subscribe(function (a) {
                                        if (a !== r.prevValueByListener.get(e)) {
                                            if (t.skipFirstChange && i) {
                                                i = !1;
                                                return;
                                            }
                                            r.prevValueByListener.set(e, a), e(a);
                                        }
                                    })
                                );
                            },
                        }),
                        e
                    );
                })(),
                s = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'observableValue', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'prevValueByListener', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (this.observableValue = (0, i.EW)(e)),
                            (this.prevValueByListener = new Map());
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'onChange', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var r = this;
                                void 0 === t && (t = { skipFirstChange: !1 });
                                var i = !0;
                                return (
                                    this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                    this.observableValue.subscribe(function (a) {
                                        if (a !== r.prevValueByListener.get(e)) {
                                            if (t.skipFirstChange && i) {
                                                i = !1;
                                                return;
                                            }
                                            r.prevValueByListener.set(e, a), e(a);
                                        }
                                    })
                                );
                            },
                        }),
                        e
                    );
                })();
            function n(e) {
                (0, i.vA)(e);
            }
        },
        71483: (e, t, r) => {
            var i;
            r.d(t, { K: () => i }),
                (function (e) {
                    (e.Album = 'album'),
                        (e.Playlist = 'playlist'),
                        (e.Artist = 'artist'),
                        (e.Vibe = 'vibe'),
                        (e.Various = 'various'),
                        (e.Generative = 'generative'),
                        (e.Radio = 'fm_radio'),
                        (e.Search = 'search'),
                        (e.LegacyRadio = 'legacy_radio');
                })(i || (i = {}));
        },
        72676: (e, t, r) => {
            r.d(t, {
                EX: () => er,
                z4: () => i,
                So: () => s,
                OQ: () => a,
                QC: () => c,
                Iu: () => h,
                LI: () => w,
                MT: () => o,
                DS: () => K,
                N: () => y,
                VE: () => $,
                pM: () => p.pM,
                WT: () => Z,
                s4: () => ee,
                uo: () => et,
                Re: () => b,
            }),
                ((i || (i = {})).Unloaded = 'unloaded'),
                (function (e) {
                    (e.CROSSFADE = 'crossfade'), (e.MIX = 'mix'), (e.NONE = 'none');
                })(a || (a = {}));
            var i,
                a,
                s,
                n,
                o,
                l,
                u,
                h,
                d,
                c,
                y,
                v = r(91945);
            !(function (e) {
                (e.MOVE_FORWARD = 'moveForward'),
                    (e.AUTO_MOVE_FORWARD = 'autoMoveForward'),
                    (e.ERROR_MOVE_FORWARD = 'errorMoveForward'),
                    (e.MOVE_BACKWARD = 'moveBackward'),
                    (e.SET_INDEX = 'setIndex'),
                    (e.RESTART_CONTEXT = 'restartContext'),
                    (e.PLAY_CONTEXT = 'playContext');
            })(s || (s = {})),
                ((n || (n = {})).ENTITY_CAN_NOT_BE_PLAYED = 'ENTITY_CAN_NOT_BE_PLAYED'),
                (function (e) {
                    (e.IDLE = 'idle'),
                        (e.PLAYING = 'playing'),
                        (e.PAUSED = 'paused'),
                        (e.ENDED = 'ended'),
                        (e.STOPPED = 'stopped'),
                        (e.LOADING_MEDIA_SOURCE = 'loadingMediaSource'),
                        (e.BUFFERING = 'buffering'),
                        (e.MEDIA_ELEMENT_ERROR = 'mediaElementError');
                })(o || (o = {}));
            var E = r(67893),
                p = r(6612);
            !(function (e) {
                (e.IDLE = 'idle'), (e.PRELOADING_MEDIA_SOURCE_URL = 'preloadingMediaSourceUrl'), (e.PRELOADING_MEDIA_SOURCE_CONTENT = 'preloadingMediaSourceContent');
            })(l || (l = {}));
            let f = { status: o.IDLE, preloadingStatus: l.IDLE, progress: { duration: 0, position: 0, loaded: 0 }, event: null, volume: 1, exponentVolume: 1, speed: 1 };
            var g = r(46862),
                P = r(29222);
            class m extends P.t {
                constructor(e = 'No current context', { code: t = 'E_NO_CURRENT_CONTEXT', ...r } = {}) {
                    super(e, { code: t, ...r }), (0, v._)(this, 'name', 'NoCurrentContextExceptions'), Object.setPrototypeOf(this, m.prototype);
                }
            }
            class C {
                get currentContextObservable() {
                    return this.observableContext;
                }
                set currentContext(e) {
                    this.observableContext.value && (this.observableContext.value.isCurrentContext = !1),
                        (this.observableContext.value = e),
                        this.observableContext.value && (this.observableContext.value.isCurrentContext = !0);
                }
                get currentContext() {
                    return this.observableContext.value;
                }
                createEntities(e) {
                    let t = [];
                    for (let r of e) {
                        let e = { data: r };
                        t.push(this.factory.createEntity(e));
                    }
                    return t;
                }
                getContextEntities() {
                    return this.observableContext.value
                        ? this.observableContext.value.getContextEntitiesData().then((e) => this.createEntities(e))
                        : Promise.reject(new m());
                }
                loadContextMeta() {
                    return this.observableContext.value ? this.observableContext.value.loadContextMeta() : Promise.reject(new m());
                }
                constructor(e) {
                    (0, v._)(this, 'factory', void 0), (0, v._)(this, 'observableContext', new g.cJ(void 0)), (this.factory = e);
                }
            }
            function x(e) {
                let { context: t, entities: r, factory: i, sourceContext: a } = e,
                    s = [];
                for (let e of r) {
                    let r = e.data.sourceContextData,
                        n = r ? i.createContext({ data: r }) : a;
                    s.push(i.createContextEntityPair(t, e, n));
                }
                return s;
            }
            !(function (e) {
                (e.Forward = 'forward'), (e.Backward = 'backward');
            })(u || (u = {})),
                (function (e) {
                    (e.RESUMED = 'Resumed'),
                        (e.STOP = 'Stop'),
                        (e.SHOULD_AUTOMOVEFORWARD = 'ShouldAutomoveForward'),
                        (e.END = 'Ended'),
                        (e.PAUSED = 'Paused'),
                        (e.UPDATING_PROGRESS = 'UpdatingProgress'),
                        (e.SET_PROGRESS = 'Seeked'),
                        (e.SETTING_PROGRESS = 'Seeking'),
                        (e.SET_VOLUME = 'VolumeChange'),
                        (e.SET_SPEED = 'RateChange'),
                        (e.STALLED = 'Stalled'),
                        (e.CANPLAY = 'CanPlay'),
                        (e.PLAYING = 'Playing'),
                        (e.MEDIA_ELEMENT_ERROR = 'MediaElementError'),
                        (e.WAITING = 'Waiting');
                })(h || (h = {}));
            class S extends P.t {
                constructor(e, { code: t = 'E_HELPER', ...r } = {}) {
                    super(e, { code: t, ...r }), (0, v._)(this, 'name', 'HelperException'), Object.setPrototypeOf(this, S.prototype);
                }
            }
            function b(e) {
                let t = e.entity.data.type === i.Unloaded,
                    r = !!e.entity.data.loadEntityMeta;
                return t || r;
            }
            function M(e) {
                try {
                    let { index: t, order: r, contextEntityPairs: i, direction: a, canBePlayedParams: s } = e,
                        n = t,
                        o = null,
                        l = () => (a === u.Forward ? n < r.length : n >= 0),
                        h = () => {
                            a === u.Forward ? (n += 1) : (n -= 1);
                        };
                    for (; l() && null === o; ) {
                        let e = i[r[n]];
                        e.canBePlayed(s) || b(e) ? (o = n) : h();
                    }
                    return o;
                } catch (e) {
                    throw new S('Error in findPlayableEntityIndex', { code: 'E_FIND_PLAYABLE_ENTITY_INDEX_HELPER', cause: e });
                }
            }
            class I extends P.t {
                constructor(e = 'No playable entity', { code: t = 'E_NO_PLAYABLE_ENTITY', ...r } = {}) {
                    super(e, { code: t, ...r }), (0, v._)(this, 'name', 'NoPlayableEntityExceptions'), Object.setPrototypeOf(this, I.prototype);
                }
            }
            function _(e) {
                try {
                    let { contextEntityPairs: t, loadedEntities: r, indexes: i, factory: a } = e,
                        s = i.shift(),
                        n = r.shift(),
                        o = 0,
                        l = [];
                    for (; o !== t.length; ) {
                        if (o === s && n) {
                            let e = t[s];
                            l.push(a.createContextEntityPair(e.context, n, e.sourceContext)), (s = i.shift()), (n = r.shift());
                        } else {
                            let e = t[o];
                            l.push(e);
                        }
                        o += 1;
                    }
                    return l;
                } catch (e) {
                    throw new S('Error in replaceEntities', { code: 'E_REPLACE_ENTITIES_HELPER', cause: e });
                }
            }
            function k(e) {
                try {
                    let { index: t, order: r, contextEntityPairs: i, repeat: a } = e,
                        s = [];
                    a === p.pM.CONTEXT && t + 12 >= r.length && (s = r.slice(0, 12));
                    let n = r.slice(Math.max(t - 12, 0), t + 12 + 1),
                        o = new Set([...s, ...n]),
                        l = !1;
                    for (let e of o) {
                        let t = i[e];
                        if (b(t)) {
                            l = !0;
                            break;
                        }
                    }
                    return l;
                } catch (e) {
                    throw new S('Error in hasUnloadedInCloseArea', { code: 'E_UNLOADED_IN_CLOSE_AREA_HELPER', cause: e });
                }
            }
            function L(e) {
                let { contextEntityPairs: t, hooks: r } = e,
                    i = new Map();
                for (let e of t) {
                    let t = e.sourceContext;
                    if (void 0 === t) continue;
                    let r = ''.concat(t.data.type, ':').concat(t.data.meta.id);
                    if (i.has(r)) {
                        var a;
                        null == (a = i.get(r)) || a.push(t);
                    } else i.set(r, [t]);
                }
                for (let e of i.values()) {
                    let t = e[0];
                    void 0 !== t &&
                        t
                            .loadContextMeta()
                            .then((t) => {
                                var r = { sourceMeta: t, targetContexts: e.slice(1) };
                                let { sourceMeta: i, targetContexts: a } = r;
                                for (let e of a) Object.assign(e.data.meta, i);
                            })
                            .catch((e) => {
                                r.afterError.promise(e);
                            });
                }
            }
            class A {
                findPlayableEntityIndexInQueue(e) {
                    let { index: t, direction: r, contextEntityPairs: i, order: a, canBePlayedParams: s, repeat: n, silentEntityListUpdate: o } = e;
                    return this.findPlayableEntityIndexInQueueRecursivePromise({
                        index: t,
                        order: a,
                        repeat: n,
                        contextEntityPairs: i,
                        direction: r,
                        canBePlayedParams: s,
                        silentEntityListUpdate: o,
                    })
                        .then((e) => {
                            if (n === p.pM.CONTEXT && null === e) {
                                let e = r === u.Forward ? 0 : a.length - 1;
                                return this.findPlayableEntityIndexInQueueRecursivePromise({
                                    index: e,
                                    order: a,
                                    repeat: n,
                                    contextEntityPairs: i,
                                    direction: r,
                                    canBePlayedParams: s,
                                    silentEntityListUpdate: o,
                                });
                            }
                            return e;
                        })
                        .then((t) =>
                            null === t
                                ? { prevIndex: null, resultIndex: null, nextIndex: null }
                                : Promise.allSettled([
                                      this.findPrevPlayableEntityIndexInQueue({ ...e, contextEntityPairs: this.playerQueue.state.entityList.value, index: t }),
                                      this.findNextPlayableEntityIndexInQueue({ ...e, contextEntityPairs: this.playerQueue.state.entityList.value, index: t }),
                                  ]).then((e) => ({
                                      prevIndex: 'fulfilled' === e[0].status ? e[0].value : null,
                                      resultIndex: t,
                                      nextIndex: 'fulfilled' === e[1].status ? e[1].value : null,
                                  })),
                        );
                }
                findNextPlayableEntityIndexInQueue(e) {
                    let { index: t, contextEntityPairs: r, order: i, canBePlayedParams: a, repeat: s } = e,
                        n = t + 1;
                    if (n >= i.length && s !== p.pM.CONTEXT) return Promise.resolve(null);
                    let o = n >= i.length && s === p.pM.CONTEXT ? 0 : n,
                        l = (e) =>
                            this.findPlayableEntityIndexInQueueRecursivePromise({
                                index: e,
                                order: i,
                                repeat: s,
                                contextEntityPairs: r,
                                direction: u.Forward,
                                canBePlayedParams: a,
                                silentEntityListUpdate: !0,
                            });
                    return l(o).then((e) => (null === e && s === p.pM.CONTEXT && 0 !== o ? l(0).then((e) => (e === t ? null : e)) : e === t && 0 === o ? null : e));
                }
                findPrevPlayableEntityIndexInQueue(e) {
                    let { index: t, contextEntityPairs: r, order: i, canBePlayedParams: a, repeat: s } = e,
                        n = t - 1;
                    if (n < 0 && s !== p.pM.CONTEXT) return Promise.resolve(null);
                    let o = n < 0 && s === p.pM.CONTEXT ? i.length - 1 : n,
                        l = (e) =>
                            this.findPlayableEntityIndexInQueueRecursivePromise({
                                index: e,
                                order: i,
                                repeat: s,
                                contextEntityPairs: r,
                                direction: u.Backward,
                                canBePlayedParams: a,
                                silentEntityListUpdate: !0,
                            });
                    return l(o).then((e) =>
                        null === e && s === p.pM.CONTEXT && o !== i.length - 1 ? l(i.length - 1).then((e) => (e === t ? null : e)) : e === t && 0 === o ? null : e,
                    );
                }
                findPlayableEntityIndexInQueueRecursivePromise(e) {
                    let { index: t, order: r, repeat: i, contextEntityPairs: a, canBePlayedParams: s, direction: n, silentEntityListUpdate: o } = e;
                    return new Promise((e, l) => {
                        this.findPlayableEntityIndexInQueueRecursive({
                            resolve: e,
                            reject: l,
                            index: t,
                            order: r,
                            repeat: i,
                            contextEntityPairs: a,
                            direction: n,
                            canBePlayedParams: s,
                            silentEntityListUpdate: o,
                        });
                    });
                }
                findPlayableEntityIndexInQueueRecursive(e) {
                    let {
                        canBePlayedParams: t,
                        index: r,
                        order: i,
                        contextEntityPairs: a,
                        direction: s,
                        resolve: n,
                        reject: o,
                        repeat: l,
                        silentEntityListUpdate: u,
                    } = e;
                    try {
                        let e = M({ contextEntityPairs: a, order: i, index: r, direction: s, canBePlayedParams: t });
                        if (null !== e) {
                            let r = this.playerQueue.getEntityByIndex({ index: e, entityList: a, order: i });
                            r && b(r)
                                ? this.loadEntitiesIfNeeded({ index: e, contextEntityPairs: a, order: i, repeat: l, silentEntityListUpdate: u })
                                      .then(() => {
                                          this.findPlayableEntityIndexInQueueRecursive({
                                              resolve: n,
                                              reject: o,
                                              direction: s,
                                              repeat: l,
                                              index: e,
                                              order: this.playerQueue.state.order.value,
                                              contextEntityPairs: this.playerQueue.state.entityList.value,
                                              canBePlayedParams: t,
                                              silentEntityListUpdate: u,
                                          });
                                      })
                                      .catch(o)
                                : n(e);
                        } else n(null);
                    } catch (e) {
                        o(e);
                    }
                }
                loadEntitiesIfNeeded(e) {
                    return new Promise((t, r) => {
                        let { index: i, contextEntityPairs: a, order: s, repeat: n, silentEntityListUpdate: o } = e;
                        (0 === a.length || 0 === s.length) && t();
                        try {
                            let e = this.playerQueue.getEntityByIndex({ index: i, entityList: a, order: s }),
                                l = k({ index: i, order: s, contextEntityPairs: a, repeat: n });
                            e && b(e)
                                ? this.loadEntitiesInWindow({ indexes: [i], order: s, contextEntityPairs: a, repeat: n })
                                      .then((e) => {
                                          this.playerQueue.setEntityList(e, o), t();
                                      })
                                      .catch(r)
                                : (e &&
                                      !b(e) &&
                                      l &&
                                      this.loadEntitiesInWindow({ indexes: [i], order: s, contextEntityPairs: a, repeat: n })
                                          .then((e) => {
                                              this.playerQueue.setEntityList(e, o);
                                          })
                                          .catch((e) => {
                                              this.hooks.afterError.promise(e);
                                          }),
                                  t());
                        } catch (e) {
                            r(e);
                        }
                    });
                }
                loadEntitiesIfNeededForManyIndexes(e) {
                    let { indexes: t, order: r, contextEntityPairs: i, repeat: a } = e,
                        s = t.filter((e) => k({ index: e, order: r, contextEntityPairs: i, repeat: a }));
                    return s.length
                        ? this.loadEntitiesInWindow({ indexes: s, order: r, contextEntityPairs: i, repeat: a }).then((e) => {
                              this.playerQueue.setEntityList(e, !1);
                          })
                        : Promise.resolve();
                }
                loadEntitiesInWindow(e) {
                    try {
                        let { indexes: t, contextEntityPairs: r, order: i, repeat: a } = e,
                            s = new Map();
                        for (let e of t)
                            for (let t of (function (e) {
                                try {
                                    let { index: t, order: r, contextEntityPairs: i, windowSize: a, needToLoadPredicate: s, repeat: n } = e,
                                        o = new Map(),
                                        l = 0,
                                        u = t,
                                        h = r[u];
                                    for (; void 0 !== h && l < a; ) {
                                        let e = i[h];
                                        s(e) && (o.set(h, { index: h, contextEntityPair: e }), (l += 1)), (u -= 1), (h = r[u]);
                                    }
                                    let d = 0,
                                        c = t + 1;
                                    for (h = r[c]; void 0 !== h && d < a; ) {
                                        let e = i[h];
                                        s(e) && (o.set(h, { index: h, contextEntityPair: e }), (d += 1)), (c += 1), (h = r[c]);
                                    }
                                    if (n === p.pM.CONTEXT && c >= r.length) {
                                        let e = 0,
                                            t = 0;
                                        for (h = r[0]; void 0 !== h && e < a; ) {
                                            let a = i[h];
                                            s(a) && (o.set(h, { index: h, contextEntityPair: a }), (e += 1)), (t += 1), (h = r[t]);
                                        }
                                    }
                                    return Array.from(o.values());
                                } catch (e) {
                                    throw new S('Error in getContextEntityPairsToLoad', { code: 'E_GET_PAIRS_TO_LOAD_HELPER', cause: e });
                                }
                            })({ index: e, order: i, contextEntityPairs: r, needToLoadPredicate: b, repeat: a, windowSize: this.windowPaginationConfig.windowSize }))
                                s.has(t.index) || s.set(t.index, t);
                        let n = Array.from(s.values()).sort((e, t) => e.index - t.index),
                            o = n.map((e) => e.contextEntityPair),
                            l = n.map((e) => e.index);
                        return (
                            L({ contextEntityPairs: o, hooks: this.hooks }),
                            this.entityProvider.loadEntities(o).then((e) => {
                                let t = this.contextController.createEntities(e);
                                return _({ loadedEntities: t, contextEntityPairs: r, indexes: l, factory: this.factory });
                            })
                        );
                    } catch (e) {
                        return Promise.reject(e);
                    }
                }
                loadEntities(e) {
                    return L({ contextEntityPairs: e, hooks: this.hooks }), this.entityProvider.loadEntities(e).then((e) => this.contextController.createEntities(e));
                }
                constructor(e) {
                    (0, v._)(this, 'playerQueue', void 0),
                        (0, v._)(this, 'windowPaginationConfig', void 0),
                        (0, v._)(this, 'hooks', void 0),
                        (0, v._)(this, 'entityProvider', void 0),
                        (0, v._)(this, 'contextController', void 0),
                        (0, v._)(this, 'factory', void 0),
                        (this.playerQueue = e.playerQueue),
                        (this.windowPaginationConfig = e.windowPaginationConfig),
                        (this.hooks = e.hooks),
                        (this.entityProvider = e.entityProvider),
                        (this.contextController = e.contextController),
                        (this.factory = e.factory);
                }
            }
            class T {
                get queue() {
                    return this.playerQueue;
                }
                setupQueue(e) {
                    let { entitiesData: t, queueParams: r = {} } = e,
                        { shuffle: i, filterParams: a } = r,
                        n = this.contextController.currentContext,
                        o = { entityChangeMethod: s.PLAY_CONTEXT, index: r.index, filterParams: null != a ? a : this.playerQueue.state.filterParams.value };
                    return n
                        ? this.getEntitiesFromDataOrContext(t).then((e) => {
                              let t;
                              !0 === i ? this.playerQueue.setShuffle(!0) : !1 === i && this.playerQueue.setShuffle(!1),
                                  void 0 !== a && this.playerQueue.updateFilterParams(a);
                              let s = r.entityId,
                                  l = null;
                              void 0 !== s && (l = e.findIndex((e) => String(e.data.meta.id) === String(s))),
                                  (t =
                                      'number' == typeof l && -1 !== l
                                          ? l
                                          : void 0 !== r.index
                                            ? r.index
                                            : 'number' == typeof n.resumeFromIndex
                                              ? n.resumeFromIndex
                                              : this.playerQueue.createIndex({ entityListLength: e.length }));
                              let { order: h, index: d } = this.playerQueue.createOrder({ entityListLength: e.length, index: t }),
                                  c = x({ context: n, entities: e, factory: this.factory });
                              return b(c[h[d]])
                                  ? this.entityLoader
                                        .loadEntitiesInWindow({ order: h, contextEntityPairs: c, indexes: [d], repeat: this.playerQueue.state.repeat.value })
                                        .then((e) =>
                                            null ===
                                            this.findPlayableEntityIndexAndSetupQueueWithBatch({
                                                contextEntityPairs: e,
                                                order: h,
                                                index: d,
                                                direction: u.Forward,
                                                canBePlayedParams: o,
                                            })
                                                ? (this.hooks.afterContextEnd.promise(), Promise.reject(new I()))
                                                : Promise.resolve(),
                                        )
                                  : null ===
                                      this.findPlayableEntityIndexAndSetupQueueWithBatch({
                                          contextEntityPairs: c,
                                          order: h,
                                          index: d,
                                          direction: u.Forward,
                                          canBePlayedParams: o,
                                      })
                                    ? (this.hooks.afterContextEnd.promise(), Promise.reject(new I()))
                                    : Promise.resolve();
                          })
                        : Promise.reject(new m());
                }
                findPlayableEntityIndexAndSetupQueueWithBatch(e) {
                    let { contextEntityPairs: t, order: r, index: i, direction: a, canBePlayedParams: n } = e,
                        o = M({ contextEntityPairs: t, order: r, index: i, direction: a, canBePlayedParams: n }),
                        l = M({ contextEntityPairs: t, order: r, index: i + 1, direction: a, canBePlayedParams: n }),
                        h = M({ contextEntityPairs: t, order: r, index: i - 1, direction: u.Backward, canBePlayedParams: n });
                    return null === o
                        ? null
                        : ((0, g.vA)(() => {
                              this.playerQueue.setEntityList(t, !1),
                                  this.playerQueue.setOrder(r, !1),
                                  (this.playerQueue.prevIndex = h),
                                  (this.playerQueue.nextIndex = l),
                                  (this.playerQueue.index = o),
                                  this.playerQueue.resetLivePlayableIndex(o);
                              let e = this.playerQueue.getEntityByIndex({ index: o });
                              e && (e.lastChangeMethod = s.PLAY_CONTEXT);
                          }),
                          o);
                }
                setIndex(e) {
                    let t = e,
                        r = this.playerQueue.state.order.value;
                    if (this.playerQueue.state.shuffle.value) {
                        let i = this.playerQueue.createOrder({ entityListLength: this.playerQueue.state.entityList.value.length, index: e });
                        (t = i.index), (r = i.order);
                    }
                    let i = { entityChangeMethod: s.SET_INDEX, index: t, filterParams: this.playerQueue.state.filterParams.value };
                    return this.hooks.beforeFindPlayableEntityIndex
                        .promise({ method: s.SET_INDEX, indexToChangeOn: t })
                        .catch((e) => {
                            this.hooks.afterError.promise(e);
                        })
                        .finally(() =>
                            this.entityLoader
                                .findPlayableEntityIndexInQueue({
                                    index: t,
                                    order: r,
                                    repeat: this.playerQueue.state.repeat.value,
                                    contextEntityPairs: this.playerQueue.state.entityList.value,
                                    direction: u.Forward,
                                    canBePlayedParams: i,
                                })
                                .then((e) => {
                                    let { prevIndex: i, resultIndex: a, nextIndex: n } = e;
                                    return null !== a
                                        ? this.entityLoader
                                              .loadEntitiesIfNeeded({
                                                  index: a,
                                                  order: r,
                                                  repeat: this.playerQueue.state.repeat.value,
                                                  contextEntityPairs: this.playerQueue.state.entityList.value,
                                              })
                                              .then(() =>
                                                  this.hooks.beforeEntityChange
                                                      .promise({ method: s.SET_INDEX, index: a })
                                                      .catch((e) => {
                                                          this.hooks.afterError.promise(e);
                                                      })
                                                      .finally(() => {
                                                          (0, g.vA)(() => {
                                                              (t = a), this.playerQueue.state.shuffle.value && this.playerQueue.setOrder(r, !1);
                                                              let e = this.playerQueue.getEntityByIndex({ index: t });
                                                              e && ((e.lastChangeMethod = s.SET_INDEX), (e.entity.hidden = !1)),
                                                                  (this.playerQueue.prevIndex = i),
                                                                  (this.playerQueue.nextIndex = n),
                                                                  (this.playerQueue.index = t);
                                                          });
                                                      }),
                                              )
                                        : (this.hooks.afterContextEnd.promise(s.SET_INDEX), Promise.resolve());
                                }),
                        );
                }
                moveForward() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.MOVE_FORWARD,
                        t = this.playerQueue.state.index.value + 1,
                        r = { entityChangeMethod: e, index: t, filterParams: this.playerQueue.state.filterParams.value };
                    return this.hooks.beforeFindPlayableEntityIndex
                        .promise({ method: e, indexToChangeOn: t })
                        .catch((e) => {
                            this.hooks.afterError.promise(e);
                        })
                        .finally(() =>
                            this.entityLoader
                                .findPlayableEntityIndexInQueue({
                                    index: t,
                                    order: this.playerQueue.state.order.value,
                                    repeat: this.playerQueue.state.repeat.value,
                                    contextEntityPairs: this.playerQueue.state.entityList.value,
                                    direction: u.Forward,
                                    canBePlayedParams: r,
                                })
                                .then((t) => {
                                    let { prevIndex: r, resultIndex: i, nextIndex: a } = t;
                                    return null !== i
                                        ? this.entityLoader
                                              .loadEntitiesIfNeeded({
                                                  index: i,
                                                  order: this.playerQueue.state.order.value,
                                                  repeat: this.playerQueue.state.repeat.value,
                                                  contextEntityPairs: this.playerQueue.state.entityList.value,
                                              })
                                              .then(() =>
                                                  this.hooks.beforeEntityChange
                                                      .promise({ method: e, index: i })
                                                      .catch((e) => {
                                                          this.hooks.afterError.promise(e);
                                                      })
                                                      .finally(() => {
                                                          let t = this.playerQueue.getEntityByIndex({ index: i });
                                                          t && (t.lastChangeMethod = e),
                                                              (this.playerQueue.prevIndex = r),
                                                              (this.playerQueue.nextIndex = a),
                                                              (this.playerQueue.index = i);
                                                      }),
                                              )
                                        : (this.hooks.afterContextEnd.promise(e), Promise.resolve({ cause: n.ENTITY_CAN_NOT_BE_PLAYED }));
                                }),
                        );
                }
                autoMoveForward() {
                    let e = this.playerQueue.state.index.value + 1,
                        t = { entityChangeMethod: s.AUTO_MOVE_FORWARD, index: e, filterParams: this.playerQueue.state.filterParams.value };
                    if (this.playerQueue.state.currentEntity.value && this.playerState.event.value === h.SHOULD_AUTOMOVEFORWARD) {
                        let r = this.playerQueue.state.currentEntity.value,
                            i = this.playerQueue.state.repeat.value === p.pM.CONTEXT && 1 === this.playerQueue.state.order.value.length;
                        if ((this.playerQueue.state.repeat.value === p.pM.ONE || i) && r.canBePlayed(t)) return;
                        this.playerQueue.state.repeat.value === p.pM.CONTEXT &&
                            this.playerQueue.isOnLastIndex() &&
                            this.playerQueue.state.order.value.length > 1 &&
                            (e = 0),
                            this.hooks.beforeFindPlayableEntityIndex
                                .promise({ method: s.AUTO_MOVE_FORWARD, indexToChangeOn: e })
                                .catch((e) => {
                                    this.hooks.afterError.promise(e);
                                })
                                .finally(() =>
                                    this.entityLoader
                                        .findPlayableEntityIndexInQueue({
                                            index: e,
                                            order: this.playerQueue.state.order.value,
                                            repeat: this.playerQueue.state.repeat.value,
                                            contextEntityPairs: this.playerQueue.state.entityList.value,
                                            direction: u.Forward,
                                            canBePlayedParams: t,
                                        })
                                        .then((e) => {
                                            let { prevIndex: t, resultIndex: r, nextIndex: i } = e;
                                            return null !== r
                                                ? this.entityLoader
                                                      .loadEntitiesIfNeeded({
                                                          index: r,
                                                          order: this.playerQueue.state.order.value,
                                                          repeat: this.playerQueue.state.repeat.value,
                                                          contextEntityPairs: this.playerQueue.state.entityList.value,
                                                      })
                                                      .then(() =>
                                                          this.hooks.beforeEntityChange
                                                              .promise({ method: s.AUTO_MOVE_FORWARD, index: r })
                                                              .catch((e) => {
                                                                  this.hooks.afterError.promise(e);
                                                              })
                                                              .finally(() => {
                                                                  let e = this.playerQueue.getEntityByIndex({ index: r });
                                                                  e && (e.lastChangeMethod = s.AUTO_MOVE_FORWARD),
                                                                      (this.playerQueue.prevIndex = t),
                                                                      (this.playerQueue.nextIndex = i),
                                                                      (this.playerQueue.index = r);
                                                              }),
                                                      )
                                                      .catch((e) => {
                                                          this.hooks.afterError.promise(e);
                                                      })
                                                : (this.hooks.afterContextEnd.promise(s.AUTO_MOVE_FORWARD), Promise.resolve());
                                        })
                                        .catch((e) => {
                                            this.hooks.afterError.promise(e);
                                        }),
                                );
                    }
                }
                moveBackward() {
                    let e = this.playerQueue.state.index.value - 1,
                        t = { entityChangeMethod: s.MOVE_BACKWARD, index: e, filterParams: this.playerQueue.state.filterParams.value };
                    return this.hooks.beforeFindPlayableEntityIndex
                        .promise({ method: s.MOVE_BACKWARD, indexToChangeOn: e })
                        .catch((e) => {
                            this.hooks.afterError.promise(e);
                        })
                        .finally(() =>
                            this.entityLoader
                                .findPlayableEntityIndexInQueue({
                                    index: this.playerQueue.state.index.value - 1,
                                    order: this.playerQueue.state.order.value,
                                    repeat: this.playerQueue.state.repeat.value,
                                    contextEntityPairs: this.playerQueue.state.entityList.value,
                                    direction: u.Backward,
                                    canBePlayedParams: t,
                                })
                                .then((e) => {
                                    let { prevIndex: t, resultIndex: r, nextIndex: i } = e;
                                    return null !== r
                                        ? this.entityLoader
                                              .loadEntitiesIfNeeded({
                                                  index: r,
                                                  order: this.playerQueue.state.order.value,
                                                  repeat: this.playerQueue.state.repeat.value,
                                                  contextEntityPairs: this.playerQueue.state.entityList.value,
                                              })
                                              .then(() =>
                                                  this.hooks.beforeEntityChange
                                                      .promise({ method: s.MOVE_BACKWARD, index: r })
                                                      .catch((e) => {
                                                          this.hooks.afterError.promise(e);
                                                      })
                                                      .finally(() => {
                                                          let e = this.playerQueue.getEntityByIndex({ index: r });
                                                          e && (e.lastChangeMethod = s.MOVE_BACKWARD),
                                                              (this.playerQueue.prevIndex = t),
                                                              (this.playerQueue.nextIndex = i),
                                                              (this.playerQueue.index = r);
                                                      }),
                                              )
                                        : Promise.resolve({ cause: n.ENTITY_CAN_NOT_BE_PLAYED });
                                }),
                        );
                }
                inject(e) {
                    let { entitiesData: t, position: r, silent: i, sourceContext: a } = e,
                        s = this.contextController.currentContext;
                    if (s) {
                        var n;
                        let e = this.playerQueue.state.livePlayableIndex.value,
                            o = this.playerQueue.state.entityList.value,
                            l = t.map((e) => (void 0 === e.fromCurrentContext && (e.fromCurrentContext = !1), e)),
                            u =
                                null != (n = this.hooks.beforeInject.call({ position: r, livePlayableIndex: e, entityList: o, sourceContext: a }).calibratedPosition)
                                    ? n
                                    : r,
                            h = x({ entities: this.contextController.createEntities(l), context: s, factory: this.factory, sourceContext: a }),
                            d = [],
                            c = h.filter((e, t) => {
                                let r = b(e);
                                return r && d.push(t), r;
                            });
                        c.length && d.length
                            ? this.entityLoader
                                  .loadEntities(c)
                                  .then((e) => {
                                      let t = _({ contextEntityPairs: h, loadedEntities: e, indexes: d, factory: this.factory });
                                      this.playerQueue.inject(t, u, i), this.recalculatePrevNextIndexes(), this.hooks.afterInject.call({ contextEntityPairs: t });
                                  })
                                  .catch((e) => this.hooks.afterError.promise(e))
                            : (this.playerQueue.inject(h, u, i), this.recalculatePrevNextIndexes());
                    } else throw new m();
                }
                recalculatePrevNextIndexes() {
                    let e = this.playerQueue.state.index.value,
                        t = { entityChangeMethod: s.AUTO_MOVE_FORWARD, index: e, filterParams: this.playerQueue.state.filterParams.value };
                    return Promise.all([
                        this.entityLoader
                            .findPlayableEntityIndexInQueue({
                                index: e,
                                direction: u.Forward,
                                contextEntityPairs: this.playerQueue.state.entityList.value,
                                order: this.playerQueue.state.order.value,
                                canBePlayedParams: t,
                                repeat: this.playerQueue.state.repeat.value,
                                silentEntityListUpdate: !0,
                            })
                            .then((t) => {
                                let { prevIndex: r } = t;
                                this.playerQueue.state.index.value === e && (this.playerQueue.prevIndex = r);
                            })
                            .catch((e) => {
                                this.hooks.afterError.promise(e);
                            }),
                        this.entityLoader
                            .findPlayableEntityIndexInQueue({
                                index: e,
                                direction: u.Forward,
                                contextEntityPairs: this.playerQueue.state.entityList.value,
                                order: this.playerQueue.state.order.value,
                                canBePlayedParams: t,
                                repeat: this.playerQueue.state.repeat.value,
                                silentEntityListUpdate: !0,
                            })
                            .then((t) => {
                                let { nextIndex: r } = t;
                                this.playerQueue.state.index.value === e && (this.playerQueue.nextIndex = r);
                            })
                            .catch((e) => {
                                this.hooks.afterError.promise(e);
                            }),
                    ]).then();
                }
                findPositionsByEntityIds(e) {
                    let t = this.playerQueue.state.order.value,
                        r = this.playerQueue.state.entityList.value,
                        i = new Set(e.map((e) => String(e))),
                        a = [];
                    for (let e = 0; e < t.length && 0 !== i.size; e++) {
                        let s = t[e];
                        if (void 0 === s) continue;
                        let n = r[s];
                        if (void 0 === n) continue;
                        let o = String(n.entity.data.meta.id);
                        i.has(o) && (a.push(e), i.delete(o));
                    }
                    return a;
                }
                removeAndLoadEntities(e, t) {
                    return this.entityLoader
                        .loadEntitiesIfNeededForManyIndexes({
                            indexes: e,
                            order: this.playerQueue.state.order.value,
                            contextEntityPairs: this.playerQueue.state.entityList.value,
                            repeat: this.playerQueue.state.repeat.value,
                        })
                        .then(() => {
                            this.playerQueue.remove(e, t), this.recalculatePrevNextIndexes();
                        });
                }
                remove(e, t) {
                    0 !== e.length &&
                        (this.playerQueue.remove(e, t),
                        this.recalculatePrevNextIndexes().then(() => {
                            this.hooks.afterEntityRemove.promise();
                        }));
                }
                removeByEntityIds(e, t) {
                    this.remove(this.findPositionsByEntityIds(e), t);
                }
                hide(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    0 !== e.length &&
                        this.entityLoader
                            .loadEntitiesIfNeededForManyIndexes({
                                indexes: e,
                                order: this.playerQueue.state.order.value,
                                contextEntityPairs: this.playerQueue.state.entityList.value,
                                repeat: this.playerQueue.state.repeat.value,
                            })
                            .then(() => {
                                let r = this.playerQueue.state.livePlayableIndex.value,
                                    i = 0;
                                for (let t of e) {
                                    let e = this.playerQueue.getEntityByIndex({ index: t });
                                    e && !e.entity.hidden && ((e.entity.hidden = !0), t < r && (i += 1));
                                }
                                i > 0 && this.playerQueue.shiftLivePlayableIndex(-i),
                                    t || (this.playerQueue.state.entityList.value = [...this.playerQueue.state.entityList.value]),
                                    this.recalculatePrevNextIndexes().then(() => {
                                        this.hooks.afterEntityRemove.promise();
                                    });
                            });
                }
                hideByEntityIds(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.hide(this.findPositionsByEntityIds(e), t);
                }
                toggleShuffle() {
                    (0, g.vA)(() => {
                        this.playerQueue.toggleShuffle(),
                            this.entityLoader
                                .loadEntitiesIfNeeded({
                                    index: this.playerQueue.state.index.value,
                                    order: this.playerQueue.state.order.value,
                                    contextEntityPairs: this.playerQueue.state.entityList.value,
                                    repeat: this.playerQueue.state.repeat.value,
                                })
                                .catch((e) => {
                                    this.hooks.afterError.promise(e);
                                });
                    });
                }
                setShuffle(e) {
                    (0, g.vA)(() => {
                        this.playerQueue.setShuffle(e),
                            this.entityLoader
                                .loadEntitiesIfNeeded({
                                    index: this.playerQueue.state.index.value,
                                    order: this.playerQueue.state.order.value,
                                    contextEntityPairs: this.playerQueue.state.entityList.value,
                                    repeat: this.playerQueue.state.repeat.value,
                                })
                                .catch((e) => {
                                    this.hooks.afterError.promise(e);
                                });
                    });
                }
                setRepeat(e) {
                    (0, g.vA)(() => {
                        this.playerQueue.setRepeatMode(e),
                            e === p.pM.CONTEXT &&
                                this.entityLoader
                                    .loadEntitiesIfNeeded({
                                        index: this.playerQueue.state.index.value,
                                        order: this.playerQueue.state.order.value,
                                        contextEntityPairs: this.playerQueue.state.entityList.value,
                                        repeat: this.playerQueue.state.repeat.value,
                                    })
                                    .catch((e) => {
                                        this.hooks.afterError.promise(e);
                                    });
                    });
                }
                updateFilterParams(e) {
                    (0, g.vA)(() => {
                        this.playerQueue.updateFilterParams(e),
                            this.entityLoader
                                .loadEntitiesIfNeeded({
                                    index: this.playerQueue.state.index.value,
                                    order: this.playerQueue.state.order.value,
                                    contextEntityPairs: this.playerQueue.state.entityList.value,
                                    repeat: this.playerQueue.state.repeat.value,
                                })
                                .catch((e) => {
                                    this.hooks.afterError.promise(e);
                                })
                                .then(() => {
                                    this.recalculatePrevNextIndexes();
                                });
                    });
                }
                getEntityByIndex(e) {
                    return this.playerQueue.getEntityByIndex(e);
                }
                getEntitiesFromDataOrContext(e) {
                    var t;
                    let r,
                        i =
                            (null == (t = this.contextController.currentContextObservable.value) ? void 0 : t.data) &&
                            'completeEntitesDataByLoadedMeta' in this.contextController.currentContextObservable.value.data &&
                            this.contextController.currentContextObservable.value.data.completeEntitesDataByLoadedMeta;
                    return e && ((r = this.contextController.createEntities(e)), !i)
                        ? Promise.resolve(r)
                        : this.contextController.getContextEntities().then((e) => {
                              if (!i) return e;
                              let t = e.filter((e) => !r.some((t) => String(e.data.meta.id) === String(t.data.meta.id)));
                              return r.push(...t), r;
                          });
                }
                constructor(e) {
                    (0, v._)(this, 'contextController', void 0),
                        (0, v._)(this, 'playerQueue', void 0),
                        (0, v._)(this, 'playerState', void 0),
                        (0, v._)(this, 'hooks', void 0),
                        (0, v._)(this, 'entityLoader', void 0),
                        (0, v._)(this, 'factory', void 0);
                    let { contextController: t, playerQueue: r, playerState: i, hooks: a, entityProvider: s, windowPaginationConfig: n, factory: o } = e;
                    (this.contextController = t),
                        (this.playerQueue = r),
                        (this.playerState = i),
                        (this.hooks = a),
                        (this.factory = o),
                        (this.entityLoader = new A({ contextController: t, playerQueue: r, entityProvider: s, hooks: a, windowPaginationConfig: n, factory: o })),
                        this.playerState.event.onChange(() => this.autoMoveForward()),
                        this.playerQueue.state.shuffle.onChange(
                            () => {
                                this.recalculatePrevNextIndexes();
                            },
                            { skipFirstChange: !0 },
                        ),
                        this.playerQueue.state.repeat.onChange(
                            (e) => {
                                e === p.pM.CONTEXT && this.recalculatePrevNextIndexes();
                            },
                            { skipFirstChange: !0 },
                        );
                }
            }
            var O = r(27576),
                R = r(80451);
            ((d || (d = {})).MEDIA_ELEMENT_ERROR = 'MEDIA_ELEMENT_ERROR'),
                (function (e) {
                    (e.PLAY = 'E_MEDIA_PLAYER_PLAY'),
                        (e.STOP = 'E_MEDIA_PLAYER_STOP'),
                        (e.RESUME = 'E_MEDIA_PLAYER_RESUME'),
                        (e.PAUSE = 'E_MEDIA_PLAYER_PAUSE'),
                        (e.SET_SPEED = 'E_MEDIA_PLAYER_SET_SPEED'),
                        (e.SET_VOLUME = 'E_MEDIA_PLAYER_SET_VOLUME'),
                        (e.SET_PROGRESS = 'E_MEDIA_PLAYER_SET_PROGRESS'),
                        (e.MEDIA_ELEMENT_ERROR = 'E_MEDIA_ELEMENT_ERROR'),
                        (e.DEFAULT_ERROR_CODE = 'E_MEDIA_PLAYER'),
                        (e.PRE_FETCH = 'E_MEDIA_PLAYER_PRE_FETCH');
                })(c || (c = {}));
            class w extends P.t {
                constructor(e = 'Media player error', { code: t = c.DEFAULT_ERROR_CODE, ...r } = {}) {
                    super(e, { code: t, ...r }), (0, v._)(this, 'name', 'MediaPlayerException'), Object.setPrototypeOf(this, w.prototype);
                }
            }
            class D {
                reset() {
                    (this.event.value = this.initialState.event),
                        (this.progress.value = this.initialState.progress),
                        (this.speed.value = this.initialState.speed),
                        (this.status.value = this.initialState.status),
                        (this.volume.value = this.initialState.volume);
                }
                constructor(e) {
                    (0, v._)(this, 'initialState', void 0),
                        (0, v._)(this, 'status', void 0),
                        (0, v._)(this, 'preloadingStatus', void 0),
                        (0, v._)(this, 'event', void 0),
                        (0, v._)(this, 'progress', void 0),
                        (0, v._)(this, 'volume', void 0),
                        (0, v._)(this, 'speed', void 0),
                        (0, v._)(this, 'exponentVolume', void 0);
                    let { status: t, progress: r, event: i, volume: a, speed: s, preloadingStatus: n } = e;
                    (this.initialState = e),
                        (this.status = new g.cJ(t)),
                        (this.preloadingStatus = new g.cJ(n)),
                        (this.event = new g.cJ(i)),
                        (this.progress = new g.cJ(r)),
                        (this.volume = new g.cJ(a)),
                        (this.speed = new g.cJ(s)),
                        (this.exponentVolume = new g.rm(() => 1 - Math.log(Math.max(this.volume.value, 0.01)) / Math.log(0.01)));
                }
            }
            let Q = (e) => {
                let t = Math.pow(0.01, 1 - e);
                return t > 0.01 ? t : 0;
            };
            class N {
                play(e) {
                    let { entity: t } = e;
                    return this.getMediaSource({ entity: t }).then((e) =>
                        this.hooks.beforeMediaStartPlaying
                            .promise()
                            .catch((e) => {
                                this.hooks.afterError.promise(e);
                            })
                            .finally(() =>
                                this.corePlay({ source: e }).then(() => {
                                    this.hooks.afterMediaStartPlaying.promise().catch((e) => {
                                        this.hooks.afterError.promise(e);
                                    });
                                }),
                            ),
                    );
                }
                setProgress(e) {
                    return this.core.setProgress(e).catch((e) => {
                        throw new w('Core set progress error', { code: c.SET_PROGRESS, cause: e });
                    });
                }
                setVolume(e) {
                    return (
                        this.handlers.volumeChange(e),
                        this.core.setVolume(e).catch((e) => {
                            throw new w('Core set volume error', { code: c.SET_VOLUME, cause: e });
                        })
                    );
                }
                setExponentVolume(e) {
                    let t = Q(e);
                    return (
                        this.handlers.volumeChange(t),
                        this.core.setVolume(t).catch((e) => {
                            throw new w('Core set exponentVolume error', { code: c.SET_VOLUME, cause: e });
                        })
                    );
                }
                setSpeed(e) {
                    return this.core.setSpeed(e).catch((e) => {
                        throw new w('Core set speed error', { code: c.SET_SPEED, cause: e });
                    });
                }
                pause() {
                    return this.hooks.beforeMediaPause
                        .promise()
                        .catch((e) => {
                            this.hooks.afterError.promise(e);
                        })
                        .finally(() =>
                            this.core
                                .pause()
                                .then(() => {
                                    this.hooks.afterMediaPause.promise().catch((e) => {
                                        this.hooks.afterError.promise(e);
                                    });
                                })
                                .catch((e) => {
                                    throw new w('Core pause error', { code: c.PAUSE, cause: e });
                                }),
                        );
                }
                resume() {
                    return this.hooks.beforeMediaResume
                        .promise()
                        .catch((e) => {
                            this.hooks.afterError.promise(e);
                        })
                        .finally(() =>
                            this.core
                                .resume()
                                .then(() => {
                                    this.hooks.afterMediaResume.promise().catch((e) => {
                                        this.hooks.afterError.promise(e);
                                    });
                                })
                                .catch((e) => {
                                    throw new w('Core resume error', { code: c.RESUME, cause: e });
                                }),
                        );
                }
                togglePause() {
                    switch (this.state.status.value) {
                        case o.PLAYING:
                            return this.pause();
                        case o.PAUSED:
                            return this.resume();
                    }
                    return Promise.resolve();
                }
                corePlay(e) {
                    return (
                        (this.state.status.value = o.BUFFERING),
                        this.core.play(e).catch((e) => {
                            throw ((this.state.status.value = o.MEDIA_ELEMENT_ERROR), new w('Core play error', { code: c.PLAY, cause: e }));
                        })
                    );
                }
                getMediaSource(e) {
                    return (this.state.status.value = o.LOADING_MEDIA_SOURCE), this.mediaProvider.getMediaSource(e);
                }
                subscribeCoreEvents() {
                    this.core.onEnd(this.handlers.end),
                        this.core.onPaused(this.handlers.paused),
                        this.core.onResume(this.handlers.resume),
                        this.core.onUpdatingProgress(this.handlers.updatingProgress),
                        this.core.onSeeked(this.handlers.seeked),
                        this.core.onSeeking(this.handlers.seeking),
                        this.core.onStalled(this.handlers.stalled),
                        this.core.onCanplay(this.handlers.canplay),
                        this.core.onPlaying(this.handlers.playing),
                        this.core.onError(this.handlers.error),
                        this.core.onVolumeChange(this.handlers.volumeChange),
                        this.core.onSpeedChange(this.handlers.speedChange),
                        this.core.onWaiting(this.handlers.waiting);
                }
                unsubscribeCoreEvents() {
                    this.core.offEnd(this.handlers.end),
                        this.core.offPaused(this.handlers.paused),
                        this.core.offResume(this.handlers.resume),
                        this.core.offUpdatingProgress(this.handlers.updatingProgress),
                        this.core.offSeeked(this.handlers.seeked),
                        this.core.offSeeking(this.handlers.seeking),
                        this.core.offStalled(this.handlers.stalled),
                        this.core.offCanplay(this.handlers.canplay),
                        this.core.offPlaying(this.handlers.playing),
                        this.core.offError(this.handlers.error),
                        this.core.offVolumeChange(this.handlers.volumeChange),
                        this.core.offSpeedChange(this.handlers.speedChange),
                        this.core.offWaiting(this.handlers.waiting);
                }
                constructor(e) {
                    var t = this;
                    (0, v._)(this, 'state', new D(f)),
                        (0, v._)(this, 'mediaProvider', void 0),
                        (0, v._)(this, 'hooks', void 0),
                        (0, v._)(this, 'handlers', {
                            end: () =>
                                (function (e) {
                                    let { state: t, hooks: r } = e;
                                    r.afterMediaEndPlaying
                                        .promise()
                                        .catch((e) => {
                                            r.afterError.promise(e);
                                        })
                                        .finally(() => {
                                            (t.event.value = h.END), (t.status.value = o.ENDED), (t.event.value = h.SHOULD_AUTOMOVEFORWARD);
                                        });
                                })({ state: this.state, hooks: this.hooks }),
                            paused: () =>
                                (function (e) {
                                    let { state: t } = e;
                                    (t.status.value = o.PAUSED), (t.event.value = h.PAUSED);
                                })({ state: this.state }),
                            resume: () =>
                                (function (e) {
                                    let { state: t } = e;
                                    (t.status.value = o.PLAYING), (t.event.value = h.RESUMED);
                                })({ state: this.state }),
                            seeked: () =>
                                (function (e) {
                                    let { state: t } = e;
                                    t.event.value = h.SET_PROGRESS;
                                })({ state: this.state }),
                            seeking: () =>
                                (function (e) {
                                    let { state: t } = e;
                                    t.event.value = h.SETTING_PROGRESS;
                                })({ state: this.state }),
                            stalled: () =>
                                (function (e) {
                                    let { state: t } = e;
                                    t.event.value = h.STALLED;
                                })({ state: this.state }),
                            canplay: () =>
                                (function (e) {
                                    let { state: t } = e;
                                    t.event.value = h.CANPLAY;
                                })({ state: this.state }),
                            playing: () => {
                                !(function (e) {
                                    let { state: t } = e;
                                    (t.status.value = o.PLAYING), (t.event.value = h.PLAYING);
                                })({ state: this.state });
                            },
                            error: (e) => {
                                !(function (e) {
                                    let t,
                                        { state: r, hooks: i, error: a } = e;
                                    (t = a instanceof P.t ? a : new w('Core media element error', { code: c.MEDIA_ELEMENT_ERROR, cause: a })),
                                        i.afterError.promise(t),
                                        (r.status.value = o.MEDIA_ELEMENT_ERROR),
                                        (r.event.value = h.MEDIA_ELEMENT_ERROR);
                                })({ state: this.state, hooks: this.hooks, error: e });
                            },
                            volumeChange: (e) =>
                                (function (e) {
                                    let { state: t, volume: r } = e;
                                    (t.volume.value = r), (t.event.value = h.SET_VOLUME);
                                })({ state: this.state, volume: e }),
                            speedChange: (e) => {
                                !(function (e) {
                                    let { state: t, speed: r } = e;
                                    (t.speed.value = r), (t.event.value = h.SET_SPEED);
                                })({ state: this.state, speed: e });
                            },
                            updatingProgress: (e) => {
                                !(function (e) {
                                    let { state: t, progress: r } = e;
                                    (t.progress.value = r), (t.event.value = h.UPDATING_PROGRESS);
                                })({ state: this.state, progress: e });
                            },
                            stop: function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    { triggerAfterMediaEndPlaying: r = !0 } = e,
                                    { state: i, hooks: a, triggerAfterMediaEndPlaying: s = !0 } = { state: t.state, hooks: t.hooks, triggerAfterMediaEndPlaying: r };
                                (i.status.value = o.STOPPED),
                                    (i.event.value = h.STOP),
                                    s &&
                                        a.afterMediaEndPlaying.promise().catch((e) => {
                                            a.afterError.promise(e);
                                        });
                            },
                            waiting: () => {
                                !(function (e) {
                                    let { state: t } = e;
                                    (t.event.value = h.WAITING), (t.status.value = o.BUFFERING);
                                })({ state: this.state, hooks: this.hooks });
                            },
                        }),
                        (this.mediaProvider = e.mediaProvider),
                        (this.hooks = e.hooks);
                }
            }
            class q extends N {
                play(e) {
                    let { entity: t, positionSec: r } = e;
                    return this.getMediaSource({ entity: t }).then((e) =>
                        this.hooks.beforeMediaStartPlaying
                            .promise()
                            .catch((e) => {
                                this.hooks.afterError.promise(e);
                            })
                            .finally(() =>
                                this.corePlay({ source: e, positionSec: r }).then(() => {
                                    this.hooks.afterMediaStartPlaying.promise().catch((e) => {
                                        this.hooks.afterError.promise(e);
                                    });
                                }),
                            ),
                    );
                }
                reload(e) {
                    let t = this.state.progress.value.position,
                        r = this.state.status.value;
                    return this.getMediaSource({ entity: e, disableCache: !0 }).then((e) =>
                        this.hooks.beforeMediaSourceContentReload
                            .promise()
                            .catch((e) => {
                                this.hooks.afterError.promise(e);
                            })
                            .finally(() =>
                                new Promise((i, a) => {
                                    switch (r) {
                                        case o.PLAYING:
                                        case o.MEDIA_ELEMENT_ERROR:
                                            this.corePlay({ source: e, positionSec: t }).then(i).catch(a);
                                            break;
                                        case o.PAUSED:
                                            this.core.setSrc({ source: e, positionSec: t }), (this.state.status.value = o.PAUSED), i();
                                    }
                                }).then(() => {
                                    this.hooks.afterMediaSourceContentReload.promise().catch((e) => {
                                        this.hooks.afterError.promise(e);
                                    });
                                }),
                            ),
                    );
                }
                preloadSrc(e) {
                    let { entity: t, bufferGoal: r = 2, positionSec: i } = e;
                    return (
                        (this.state.preloadingStatus.value = l.PRELOADING_MEDIA_SOURCE_URL),
                        this.mediaProvider.getMediaSource({ entity: t, disableCache: !1 }).then((e) =>
                            this.hooks.beforeMediaSourceContentPreload
                                .promise(t)
                                .catch((e) => {
                                    this.hooks.afterError.promise(e);
                                })
                                .finally(() =>
                                    new Promise((t, a) => {
                                        (this.state.preloadingStatus.value = l.PRELOADING_MEDIA_SOURCE_CONTENT),
                                            this.core.preloadSrc({ source: e, bufferGoal: r, positionSec: i }).then(t).catch(a);
                                    })
                                        .then(() => {
                                            this.hooks.afterMediaSourceContentPreload.promise(t).catch((e) => {
                                                this.hooks.afterError.promise(e);
                                            });
                                        })
                                        .finally(() => {
                                            this.state.preloadingStatus.value = l.IDLE;
                                        }),
                                ),
                        )
                    );
                }
                releaseSrc(e) {
                    return this.core.releaseSrc({ source: e });
                }
                setSpeed(e) {
                    return super.setSpeed(e).then((e) => (this.handlers.speedChange(e), e));
                }
                stop() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { triggerAfterMediaEndPlaying: t = !0 } = e;
                    return this.core
                        .stop()
                        .then(() => {
                            this.handlers.stop({ triggerAfterMediaEndPlaying: t });
                        })
                        .catch((e) => {
                            throw new w('Core stop error', { code: c.STOP, cause: e });
                        });
                }
                corePlay(e) {
                    return (
                        (this.state.status.value = o.BUFFERING),
                        this.core.play(e).catch((e) => {
                            throw ((this.state.status.value = o.MEDIA_ELEMENT_ERROR), new w('Core play error', { code: c.PLAY, cause: e }));
                        })
                    );
                }
                getMediaSource(e) {
                    return super.getMediaSource(e).catch((e) => {
                        throw (
                            (this.stop().catch((e) => {
                                this.hooks.afterError.promise(e);
                            }),
                            e)
                        );
                    });
                }
                offVolumeChange() {
                    this.core.offVolumeChange(this.handlers.volumeChange);
                }
                onVolumeChange() {
                    this.core.onVolumeChange(this.handlers.volumeChange);
                }
                offEnd() {
                    this.core.offEnd(this.handlers.end);
                }
                onEnd() {
                    this.core.onEnd(this.handlers.end);
                }
                constructor(e) {
                    super(e),
                        (0, v._)(this, 'core', void 0),
                        (0, v._)(this, 'currentAudioElement', void 0),
                        (0, v._)(this, 'audioElementsStore', void 0),
                        (this.core = e.core),
                        (this.currentAudioElement = new g.cJ(this.core.source)),
                        (this.audioElementsStore = [this.core.source]),
                        this.subscribeCoreEvents();
                }
            }
            class V extends N {
                stop() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.core
                        .pause()
                        .then(() => {
                            this.handlers.stop(e);
                        })
                        .catch((e) => {
                            throw new w('Core stop error', { code: c.STOP, cause: e });
                        });
                }
                setContainer(e) {
                    this.core.setContainer(e);
                }
                setVideoQuality() {
                    this.core.setVideoQuality();
                }
                destroy() {
                    this.core.destroy().finally(() => {
                        this.state.reset();
                    });
                }
                constructor(e) {
                    super(e), (0, v._)(this, 'core', void 0), (this.core = e.core), this.subscribeCoreEvents();
                }
            }
            class F extends P.t {
                constructor() {
                    super('No current entity in queue', { code: 'E_NO_CURRENT_ENTITY' }),
                        (0, v._)(this, 'name', 'NoCurrentEntityException'),
                        Object.setPrototypeOf(this, F.prototype);
                }
            }
            let B = { delay: 300, burstWindowMs: 1e3, burstThreshold: 3, burstExitIdleMs: 1200 };
            function U(e) {
                return e instanceof V;
            }
            class H extends D {
                onChange(e, t) {
                    if (this.statesMap.has(e)) return;
                    let { skipFirstChange: r = !1 } = t || {},
                        i = [];
                    i.push(
                        e.event.onChange(
                            () => {
                                this.event.value = e.event.value;
                            },
                            { skipFirstChange: r },
                        ),
                    ),
                        i.push(
                            e.status.onChange(
                                () => {
                                    this.status.value = e.status.value;
                                },
                                { skipFirstChange: r },
                            ),
                        ),
                        i.push(
                            e.progress.onChange(
                                () => {
                                    this.progress.value = e.progress.value;
                                },
                                { skipFirstChange: r },
                            ),
                        ),
                        i.push(
                            e.speed.onChange(
                                () => {
                                    this.speed.value = e.speed.value;
                                },
                                { skipFirstChange: r },
                            ),
                        ),
                        i.push(
                            e.volume.onChange(
                                () => {
                                    this.volume.value = e.volume.value;
                                },
                                { skipFirstChange: r },
                            ),
                        ),
                        this.statesMap.set(e, i);
                }
                offChange(e) {
                    let t = this.statesMap.get(e);
                    if (t) {
                        for (let e of t) e();
                        this.statesMap.delete(e);
                    }
                }
                offAllStates() {
                    this.statesMap.forEach((e) => {
                        for (let t of e) t();
                    }),
                        this.statesMap.clear();
                }
                constructor(...e) {
                    super(...e), (0, v._)(this, 'statesMap', new Map());
                }
            }
            let W = '[CrossMediaPlayer]',
                j = new Set(['outStart', 'outStop', 'inStart', 'inStop']),
                Y = {
                    event: 'color: #0891B2; font-weight: bold',
                    info: 'color: #7C3AED',
                    warn: 'color: #D97706; font-weight: bold',
                    error: 'color: #DC2626; font-weight: bold',
                };
            class G {
                swapCurrentMediaPlayer() {
                    var e;
                    let t = this.currentMediaPlayer === this.firstMediaPlayer ? 'первый' : 'второй',
                        r = this.currentMediaPlayer === this.firstMediaPlayer ? 'второй' : 'первый';
                    if (
                        (this.logger.log(
                            'event',
                            'Переключение медиаплеера | текущий: '.concat(this.logger.getTrackLabel(null == (e = this.currentContextEntityPair) ? void 0 : e.entity)),
                            { fromPlayer: t, toPlayer: r },
                        ),
                        this.state.offChange(this.currentMediaPlayer.state),
                        this.currentMediaPlayer.offEnd(),
                        this.currentMediaPlayer === this.firstMediaPlayer)
                    ) {
                        (this.currentMediaPlayer = this.secondMediaPlayer),
                            (this.currentAudioElement.value = this.secondMediaPlayer.currentAudioElement.value),
                            this.secondMediaPlayer.onEnd(),
                            this.state.onChange(this.secondMediaPlayer.state, { skipFirstChange: !0 });
                        return;
                    }
                    (this.currentMediaPlayer = this.firstMediaPlayer),
                        (this.currentAudioElement.value = this.firstMediaPlayer.currentAudioElement.value),
                        this.firstMediaPlayer.onEnd(),
                        this.state.onChange(this.firstMediaPlayer.state, { skipFirstChange: !0 });
                }
                play(e) {
                    let { prevContextEntityPair: t, currentContextEntityPair: r, nextContextEntityPair: i } = e;
                    if (
                        ((this.currentContextEntityPair = r),
                        (this.nextContextEntityPair = null != i ? i : null),
                        this.logger.log(
                            'event',
                            'Вызван play | стартует: '
                                .concat(this.logger.getTrackLabel(r.entity), ' | затухает: ')
                                .concat(this.logger.getTrackLabel(null == t ? void 0 : t.entity), ' | на очереди: ')
                                .concat(this.logger.getTrackLabel(null == i ? void 0 : i.entity)),
                            {
                                lastChangeMethod: r.lastChangeMethod,
                                isCrossfadeForceDisabled: this.isCrossfadeForceDisabled,
                                isEnabled: !!this.isEnabled.value,
                                canBePlayedOnlyWithCrossing: r.canBePlayedOnlyWithCrossing,
                            },
                        ),
                        this.isCrossfadeForceDisabled)
                    )
                        return this.ticker.clearInterval(), this.playWithoutCrossing(e);
                    if (!this.isEnabled.value && !r.canBePlayedOnlyWithCrossing) return this.playWithoutCrossing(e);
                    let a = t && t.canBeCrossedWith(r);
                    return (this.startTimeTracking(r, i),
                    r.lastChangeMethod === s.AUTO_MOVE_FORWARD && this.currentMediaPlayer.state.status.value === o.PLAYING && !1 === this.isCrossing.value && a)
                        ? this.playWithCrossing(e)
                        : this.playWithoutCrossing(e);
                }
                playWithCrossing(e) {
                    let { prevContextEntityPair: t, currentContextEntityPair: r } = e;
                    this.swapCurrentMediaPlayer();
                    let i = r.getCrossParams(),
                        a = t ? t.getCrossParams() : null,
                        s = (function (e, t) {
                            if (!e || !t) return null;
                            let { outStart: r, outStop: i } = e,
                                { inStart: a, inStop: s } = t,
                                n = i - r,
                                o = s - a;
                            return n > o ? Math.max(0, a - (n - o)) : a <= 1 ? 0 : a - 1;
                        })(a, i),
                        n = null !== s && s > 0 ? s : void 0;
                    return (
                        this.logger.log(
                            'event',
                            'Проигрывание с пересечением | стартует: '
                                .concat(this.logger.getTrackLabel(r.entity), ' | затухает: ')
                                .concat(this.logger.getTrackLabel(null == t ? void 0 : t.entity)),
                            { startTime: s, positionSec: n, currentCrossParams: i, prevCrossParams: a },
                        ),
                        this.currentMediaPlayer.play({ entity: r.entity, positionSec: n }).then(() => {
                            this.isCrossing.value = !0;
                        })
                    );
                }
                playWithoutCrossing(e) {
                    let { currentContextEntityPair: t } = e;
                    this.stopCrossing();
                    let r = t.positionSec,
                        i = t.getCrossParams(),
                        a = !this.isCrossfadeForceDisabled && null !== i && void 0 !== r && r >= i.inStart && r < i.inStop;
                    return (
                        this.logger.log('event', 'Проигрывание без пересечения | текущий: '.concat(this.logger.getTrackLabel(t.entity)), {
                            positionSec: r,
                            canEnableFastFadeInStart: a,
                            isCrossfadeForceDisabled: this.isCrossfadeForceDisabled,
                        }),
                        a && (this.config.useVolumeForAudioEffect && this.offVolumeChange(), (this.isReadyForAudioEffectInStart.value = !0)),
                        this.currentMediaPlayer.play({ entity: t.entity, positionSec: t.positionSec })
                    );
                }
                reload(e) {
                    return this.currentMediaPlayer.reload(e);
                }
                preloadSrc(e) {
                    return this.currentMediaPlayer.preloadSrc(e);
                }
                releaseSrc(e) {
                    return this.currentMediaPlayer.releaseSrc(e);
                }
                setProgress(e) {
                    var t;
                    let r = this.ticker.isIntervalRunning;
                    return (
                        this.logger.log(
                            'info',
                            'Прогресс изменён | текущий: '.concat(this.logger.getTrackLabel(null == (t = this.currentContextEntityPair) ? void 0 : t.entity)),
                            { newPosition: e, tickerWasRunning: r },
                        ),
                        this.ticker.isIntervalRunning
                            ? this.stopTimeTracking(e)
                            : this.currentContextEntityPair &&
                              this.nextContextEntityPair &&
                              this.startTimeTracking(this.currentContextEntityPair, this.nextContextEntityPair),
                        this.stopCrossing(),
                        this.currentMediaPlayer.setProgress(e)
                    );
                }
                setVolume(e) {
                    if (this.config.useVolumeForAudioEffect) {
                        if (this.isCrossfadeActive()) {
                            var t;
                            this.logger.log(
                                'warn',
                                'Кроссфейд прерван изменением громкости (Safari) | текущий: '.concat(
                                    this.logger.getTrackLabel(null == (t = this.currentContextEntityPair) ? void 0 : t.entity),
                                ),
                                { volume: e },
                            );
                        }
                        this.stopCrossing();
                    }
                    return Promise.all([this.firstMediaPlayer.setVolume(e), this.secondMediaPlayer.setVolume(e)]).then(() => e);
                }
                setExponentVolume(e) {
                    if (this.config.useVolumeForAudioEffect) {
                        if (this.isCrossfadeActive()) {
                            var t;
                            this.logger.log(
                                'warn',
                                'Кроссфейд прерван изменением громкости (Safari) | текущий: '.concat(
                                    this.logger.getTrackLabel(null == (t = this.currentContextEntityPair) ? void 0 : t.entity),
                                ),
                                { volume: e },
                            );
                        }
                        this.stopCrossing();
                    }
                    return Promise.all([this.firstMediaPlayer.setExponentVolume(e), this.secondMediaPlayer.setExponentVolume(e)]).then(() => e);
                }
                setSpeed(e) {
                    return Promise.all([this.firstMediaPlayer.setSpeed(e), this.secondMediaPlayer.setSpeed(e)]).then(() => e);
                }
                pause() {
                    if (this.isCrossfadeActive()) {
                        var e;
                        this.logger.log(
                            'info',
                            'Пауза: кроссфейд сброшен | текущий: '.concat(this.logger.getTrackLabel(null == (e = this.currentContextEntityPair) ? void 0 : e.entity)),
                            { currentTime: this.currentAudioElement.value.currentTime },
                        );
                    }
                    return this.stopTimeTracking(this.currentAudioElement.value.currentTime), this.stopCrossing(), this.currentMediaPlayer.pause();
                }
                resume() {
                    if (this.isCrossfadeActive()) {
                        var e;
                        this.logger.log(
                            'info',
                            'Возобновление: кроссфейд сброшен | текущий: '.concat(
                                this.logger.getTrackLabel(null == (e = this.currentContextEntityPair) ? void 0 : e.entity),
                            ),
                            { currentTime: this.currentAudioElement.value.currentTime },
                        );
                    }
                    return this.stopTimeTracking(this.currentAudioElement.value.currentTime), this.stopCrossing(), this.currentMediaPlayer.resume();
                }
                togglePause() {
                    if (this.isCrossfadeActive()) {
                        var e;
                        this.logger.log(
                            'info',
                            'Переключение паузы: кроссфейд сброшен | текущий: '.concat(
                                this.logger.getTrackLabel(null == (e = this.currentContextEntityPair) ? void 0 : e.entity),
                            ),
                            { currentTime: this.currentAudioElement.value.currentTime },
                        );
                    }
                    return this.stopTimeTracking(this.currentAudioElement.value.currentTime), this.stopCrossing(), this.currentMediaPlayer.togglePause();
                }
                stop() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.currentMediaPlayer.stop(e);
                }
                startTimeTracking(e, t) {
                    if ((this.ticker.clearInterval(), !t))
                        return void this.logger.log('info', 'Отслеживание не запущено: нет следующего трека | текущий: '.concat(this.logger.getTrackLabel(e.entity)));
                    if (((this.nextContextEntityPair = t), this.isCrossfadeForceDisabled))
                        return void this.logger.log(
                            'info',
                            'Отслеживание не запущено: кроссфейд принудительно отключён | текущий: '
                                .concat(this.logger.getTrackLabel(e.entity), ' | следующий: ')
                                .concat(this.logger.getTrackLabel(t.entity)),
                        );
                    if (!this.isEnabled.value && !e.canBePlayedOnlyWithCrossing)
                        return void this.logger.log(
                            'info',
                            'Отслеживание не запущено: кроссфейд выключен и не обязателен | текущий: '.concat(this.logger.getTrackLabel(e.entity)),
                        );
                    if (!e.canBeCrossedWith(t))
                        return void this.logger.log(
                            'warn',
                            'Отслеживание не запущено: пересечение с следующим треком невозможно | текущий: '
                                .concat(this.logger.getTrackLabel(e.entity), ' | следующий: ')
                                .concat(this.logger.getTrackLabel(t.entity)),
                        );
                    let r = e.getCrossParams(),
                        i = (function (e, t) {
                            if (!e || !t) return null;
                            let { outStart: r, outStop: i } = e,
                                { inStart: a, inStop: s } = t,
                                n = i - r,
                                o = s - a;
                            return n > o ? (Math.abs(n - o) >= a ? i - s : r) : a <= 1 ? r - a : r - 1;
                        })(r, t ? t.getCrossParams() : null);
                    return null === i
                        ? void this.logger.log(
                              'warn',
                              'Отслеживание не запущено: не удалось рассчитать swapTime | текущий: '
                                  .concat(this.logger.getTrackLabel(e.entity), ' | следующий: ')
                                  .concat(this.logger.getTrackLabel(t.entity)),
                          )
                        : r
                          ? void ((this.currentEntityEarlyOutStart = r.outStart - 1),
                            this.logger.log('event', 'Отслеживание времени кроссфейда запущено | текущий: '.concat(this.logger.getTrackLabel(e.entity)), {
                                swapTime: i,
                                earlyOutStart: this.currentEntityEarlyOutStart,
                                outStart: r.outStart,
                                outStop: r.outStop,
                                inStart: r.inStart,
                                inStop: r.inStop,
                            }),
                            this.ticker.setInterval(() => {
                                let a = this.currentAudioElement.value.currentTime;
                                0.05 >= Math.abs(this.currentEntityEarlyOutStart - a) &&
                                    ((this.crossOutMediaPlayer = this.currentMediaPlayer),
                                    (this.crossInMediaPlayer = this.currentMediaPlayer === this.firstMediaPlayer ? this.secondMediaPlayer : this.firstMediaPlayer),
                                    this.isReadyForAudioEffect.value ||
                                        this.logger.log('info', 'Готов к аудиоэффекту (начало затухания) | текущий: '.concat(this.logger.getTrackLabel(e.entity)), {
                                            currentTime: a,
                                            earlyOutStart: this.currentEntityEarlyOutStart,
                                        }),
                                    this.config.useVolumeForAudioEffect && this.offVolumeChange(),
                                    (this.isReadyForAudioEffect.value = !0)),
                                    0.05 >= Math.abs(r.inStop - a) &&
                                        (this.isCrossfadeActive() &&
                                            this.logger.log(
                                                'info',
                                                'Зона кроссфейда завершена (достигнут inStop) | текущий: '.concat(this.logger.getTrackLabel(e.entity)),
                                                { currentTime: a, inStop: r.inStop },
                                            ),
                                        this.stopCrossing()),
                                    0.05 >= Math.abs(i - a) &&
                                        (this.logger.log(
                                            'event',
                                            'Автопереключение на следующий трек | текущий: '
                                                .concat(this.logger.getTrackLabel(e.entity), ' | следующий: ')
                                                .concat(this.logger.getTrackLabel(t.entity)),
                                            { currentTime: a, swapTime: i },
                                        ),
                                        this.ticker.clearInterval(),
                                        (this.state.event.value = h.SHOULD_AUTOMOVEFORWARD));
                            }, 50))
                          : void this.logger.log(
                                'warn',
                                'Отслеживание не запущено: нет crossParams у текущего трека | текущий: '.concat(this.logger.getTrackLabel(e.entity)),
                            );
                }
                offVolumeChange() {
                    var e;
                    this.logger.log(
                        'info',
                        'Изменение громкости заблокировано (Safari) | текущий: '.concat(
                            this.logger.getTrackLabel(null == (e = this.currentContextEntityPair) ? void 0 : e.entity),
                        ),
                    ),
                        this.firstMediaPlayer.offVolumeChange(),
                        this.secondMediaPlayer.offVolumeChange();
                }
                onVolumeChange() {
                    this.firstMediaPlayer.onVolumeChange(), this.secondMediaPlayer.onVolumeChange();
                }
                offEnd() {
                    this.firstMediaPlayer.offEnd(), this.secondMediaPlayer.offEnd();
                }
                onEnd() {
                    this.firstMediaPlayer.onEnd(), this.secondMediaPlayer.onEnd();
                }
                forceStopCrossfade() {
                    var e;
                    this.logger.log(
                        'warn',
                        'Кроссфейд принудительно остановлен (повтор) | текущий: '.concat(
                            this.logger.getTrackLabel(null == (e = this.currentContextEntityPair) ? void 0 : e.entity),
                        ),
                    ),
                        (this.isCrossfadeForceDisabled = !0),
                        this.stopCrossing(),
                        this.ticker.clearInterval(),
                        (this.isEnabled.value = !1);
                }
                eventHandler(e) {
                    if (e === h.END) {
                        if (this.isCrossing.value) {
                            var t;
                            this.logger.log(
                                'warn',
                                'Трек завершился в процессе кроссфейда | текущий: '.concat(
                                    this.logger.getTrackLabel(null == (t = this.currentContextEntityPair) ? void 0 : t.entity),
                                ),
                            );
                        }
                        this.stopCrossing(!1);
                    }
                }
                stopCrossing() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    if (this.isCrossfadeActive()) {
                        var t;
                        this.logger.log(
                            'info',
                            'Пересечение остановлено | текущий: '.concat(this.logger.getTrackLabel(null == (t = this.currentContextEntityPair) ? void 0 : t.entity)),
                            { hasCrossOutPlayer: null !== this.crossOutMediaPlayer, stopReadinessForAudioEffect: e },
                        );
                    }
                    null !== this.crossOutMediaPlayer && this.crossOutMediaPlayer.stop({ triggerAfterMediaEndPlaying: !1 }),
                        (this.crossOutMediaPlayer = null),
                        (this.crossInMediaPlayer = null),
                        (this.isCrossing.value = !1),
                        e &&
                            ((this.isReadyForAudioEffect.value = !1),
                            (this.isReadyForAudioEffectInStart.value = !1),
                            this.config.useVolumeForAudioEffect && this.onVolumeChange());
                }
                isCrossfadeActive() {
                    return this.isCrossing.value || this.isReadyForAudioEffect.value || this.isReadyForAudioEffectInStart.value;
                }
                stopTimeTracking(e) {
                    this.currentEntityEarlyOutStart && this.ticker.isIntervalRunning && e >= this.currentEntityEarlyOutStart && this.ticker.clearInterval();
                }
                handleTickerError(e) {
                    var t;
                    this.logger.log(
                        'error',
                        'Ошибка тикера, кроссфейд прерван | текущий: '.concat(this.logger.getTrackLabel(null == (t = this.currentContextEntityPair) ? void 0 : t.entity)),
                        { error: e },
                    ),
                        this.ticker.clearInterval(),
                        this.stopCrossing();
                    let r = new P.t('CrossMediaPlayer. Error in ticker runtime.', { cause: e });
                    this.hooks.afterError.promise(r);
                }
                constructor({ hooks: e, mediaProvider: t, core: r, additionalCore: i, config: a = {}, ticker: s, isEnabled: n, variables: o }) {
                    var l;
                    (0, v._)(this, 'currentMediaPlayer', void 0),
                        (0, v._)(this, 'firstMediaPlayer', void 0),
                        (0, v._)(this, 'secondMediaPlayer', void 0),
                        (0, v._)(this, 'crossOutMediaPlayer', null),
                        (0, v._)(this, 'crossInMediaPlayer', null),
                        (0, v._)(this, 'state', new H(f)),
                        (0, v._)(this, 'currentAudioElement', void 0),
                        (0, v._)(this, 'audioElementsStore', void 0),
                        (0, v._)(this, 'isCrossing', new g.cJ(!1)),
                        (0, v._)(this, 'isReadyForAudioEffect', new g.cJ(!1)),
                        (0, v._)(this, 'isReadyForAudioEffectInStart', new g.cJ(!1)),
                        (0, v._)(this, 'currentEntityEarlyOutStart', 0),
                        (0, v._)(this, 'currentContextEntityPair', null),
                        (0, v._)(this, 'nextContextEntityPair', null),
                        (0, v._)(this, 'ticker', void 0),
                        (0, v._)(this, 'hooks', void 0),
                        (0, v._)(this, 'config', void 0),
                        (0, v._)(this, 'isEnabled', void 0),
                        (0, v._)(this, 'logger', void 0),
                        (0, v._)(this, 'isCrossfadeForceDisabled', !1),
                        (this.hooks = e),
                        (this.isEnabled = n),
                        (this.logger = (function (e) {
                            return {
                                log: function (t, r, i) {
                                    if (
                                        (null == e ? void 0 : e.enableDebugLogging) &&
                                        ('event' === t && console.log('%c'.concat(W, ' ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'), 'color: #6B7280'),
                                        console.log('%c'.concat(W, ' ').concat(r), Y[t]),
                                        i)
                                    ) {
                                        let e = Object.fromEntries(
                                            Object.entries(i).map((e) => {
                                                let [t, r] = e;
                                                return !j.has(t) || 'number' != typeof r || Number.isNaN(r)
                                                    ? [t, r]
                                                    : [
                                                          t,
                                                          (function (e) {
                                                              let t = Math.max(0, Math.floor(e)),
                                                                  r = Math.floor(t / 60)
                                                                      .toString()
                                                                      .padStart(2, '0'),
                                                                  i = (t % 60).toString().padStart(2, '0');
                                                              return ''.concat(r, ':').concat(i);
                                                          })(r),
                                                      ];
                                            }),
                                        );
                                        Object.values(e).some((e) => null !== e && 'object' == typeof e)
                                            ? console.log('%c'.concat(W), 'color: #6B7280', e)
                                            : console.table(e);
                                    }
                                },
                                getTrackLabel: function (e) {
                                    var t, r;
                                    if (!e) return 'нет трека';
                                    let i = e.data.meta,
                                        a = null != (t = i.title) ? t : 'без названия',
                                        s = null != (r = i.id) ? r : 'неизвестно';
                                    return '"'.concat(a, '" (id: ').concat(s, ')');
                                },
                            };
                        })(o)),
                        (this.config = { useVolumeForAudioEffect: null != (l = a.useVolumeForAudioEffect) && l }),
                        (this.firstMediaPlayer = new q({ mediaProvider: t, core: r, hooks: e })),
                        (this.secondMediaPlayer = new q({ mediaProvider: t, core: i, hooks: e })),
                        (this.ticker = s),
                        this.ticker
                            .init()
                            .then(() => {
                                this.ticker.onError(this.handleTickerError.bind(this));
                            })
                            .catch((e) => {
                                let t = new P.t('CrossMediaPlayer. Error in ticker init().', { cause: e });
                                this.hooks.afterError.promise(t);
                            }),
                        (this.audioElementsStore = [this.firstMediaPlayer.currentAudioElement.value, this.secondMediaPlayer.currentAudioElement.value]),
                        (this.currentMediaPlayer = this.firstMediaPlayer),
                        (this.currentAudioElement = new g.cJ(this.firstMediaPlayer.currentAudioElement.value)),
                        this.state.onChange(this.firstMediaPlayer.state),
                        this.firstMediaPlayer.state.event.onChange(this.eventHandler.bind(this)),
                        this.secondMediaPlayer.state.event.onChange(this.eventHandler.bind(this)),
                        this.isEnabled.onChange(
                            (e) => {
                                var t, r;
                                if (!e && !(null == (t = this.currentContextEntityPair) ? void 0 : t.canBePlayedOnlyWithCrossing)) {
                                    this.logger.log(
                                        'warn',
                                        'Кроссфейд выключен извне | текущий: '.concat(
                                            this.logger.getTrackLabel(null == (r = this.currentContextEntityPair) ? void 0 : r.entity),
                                        ),
                                    ),
                                        this.stopCrossing(),
                                        this.ticker.clearInterval();
                                    return;
                                }
                                e &&
                                    this.currentContextEntityPair &&
                                    this.nextContextEntityPair &&
                                    ((this.isCrossfadeForceDisabled = !1),
                                    this.logger.log(
                                        'info',
                                        'Кроссфейд включён повторно извне | текущий: '.concat(this.logger.getTrackLabel(this.currentContextEntityPair.entity)),
                                    ),
                                    this.startTimeTracking(this.currentContextEntityPair, this.nextContextEntityPair));
                            },
                            { skipFirstChange: !0 },
                        );
                }
            }
            function X(e) {
                return e instanceof q || e instanceof G;
            }
            class J {
                registerMediaPlayer(e) {
                    let t = e.contentType,
                        r = this.mediaPlayersStore.value[t];
                    if (r) return r;
                    let i = this.createMediaPlayer(e);
                    return (
                        i.setVolume(this.state.volume.value),
                        i.setSpeed(this.state.speed.value),
                        (this.mediaPlayersStore.value = { ...this.mediaPlayersStore.value, [t]: i }),
                        i
                    );
                }
                get listenQueueState() {
                    return this.listenToQueueStateChange;
                }
                set listenQueueState(e) {
                    this.listenToQueueStateChange = e;
                }
                get isPendingBurstDebounce() {
                    return this.burstDebounce.isPending;
                }
                cancelPendingBurstDebounce() {
                    this.burstDebounce.cancel();
                }
                play() {
                    let e = this.queueState.currentEntity.value,
                        t = this.queueState.prevEntity.value,
                        r = this.queueState.nextEntity.value;
                    if (!e) return Promise.reject(new F());
                    let { entity: i } = e;
                    return (
                        (i.playId = this.generatePlayId()),
                        this.hooks.beforeEntityPlayingProcessStart
                            .promise()
                            .catch((e) => {
                                this.hooks.afterError.promise(e);
                            })
                            .finally(() => {
                                var a;
                                i.data.wasPlayed = !0;
                                let s = this.getMediaPlayerForEntity(i);
                                if (!s) return Promise.resolve();
                                let n = [o.IDLE, o.STOPPED, o.ENDED];
                                return (this.currentMediaPlayer.value &&
                                    this.currentMediaPlayer.value !== s &&
                                    !n.includes(this.currentMediaPlayer.value.state.status.value) &&
                                    this.currentMediaPlayer.value.stop(),
                                this.setCurrentMediaPlayer(s),
                                et(this.currentMediaPlayer.value))
                                    ? this.currentMediaPlayer.value.play({ prevContextEntityPair: t, currentContextEntityPair: e, nextContextEntityPair: r })
                                    : null == (a = this.currentMediaPlayer.value)
                                      ? void 0
                                      : a.play({ entity: i, positionSec: e.positionSec });
                            })
                    );
                }
                reload(e) {
                    if (!X(this.currentMediaPlayer.value)) return Promise.resolve();
                    let t = this.queueState.currentEntity.value;
                    return t
                        ? navigator.onLine
                            ? this.hooks.beforeEntityReloadProcessStart
                                  .promise(e)
                                  .catch((e) => {
                                      this.hooks.afterError.promise(e);
                                  })
                                  .finally(() =>
                                      this.currentMediaPlayer.value && X(this.currentMediaPlayer.value)
                                          ? this.currentMediaPlayer.value.reload(t.entity)
                                          : Promise.resolve(),
                                  )
                            : Promise.resolve()
                        : Promise.reject(new F());
                }
                preloadSrc(e) {
                    let { entity: t, bufferGoal: r, positionSec: i } = e,
                        a = this.getMediaPlayerForEntity(t);
                    return a && X(a)
                        ? this.hooks.beforeEntityPreloadProcessStart
                              .promise(t)
                              .catch((e) => {
                                  this.hooks.afterError.promise(e);
                              })
                              .finally(() => a.preloadSrc({ entity: t, bufferGoal: r, positionSec: i }))
                        : Promise.resolve();
                }
                applyInitialProgress(e) {
                    if (this.state.status.value !== o.IDLE || !this.queueState.currentEntity.value) return;
                    let t = this.queueState.currentEntity.value;
                    (t.positionSec = e.position), (t.lastSeekPosition = e.position), (this.state.progress.value = { ...this.state.progress.value, ...e });
                }
                releaseSrc(e) {
                    return X(this.currentMediaPlayer.value) ? this.currentMediaPlayer.value.releaseSrc(e) : Promise.resolve();
                }
                pause() {
                    return this.currentMediaPlayer.value && this.state.status.value === o.PLAYING ? this.currentMediaPlayer.value.pause() : Promise.resolve();
                }
                resume() {
                    return this.currentMediaPlayer.value && this.state.status.value !== o.PLAYING ? this.currentMediaPlayer.value.resume() : Promise.resolve();
                }
                togglePause() {
                    let e = Promise.resolve();
                    switch (this.state.status.value) {
                        case o.IDLE:
                        case o.STOPPED:
                        case o.ENDED:
                            e = this.play();
                            break;
                        case o.MEDIA_ELEMENT_ERROR:
                            e = this.reload(d.MEDIA_ELEMENT_ERROR);
                            break;
                        default:
                            if (!this.currentMediaPlayer.value) return Promise.resolve();
                            e = this.currentMediaPlayer.value.togglePause();
                    }
                    return e;
                }
                setProgress(e) {
                    if (this.state.status.value === o.IDLE && this.queueState.currentEntity.value) {
                        let t = this.queueState.currentEntity.value;
                        return (
                            (t.positionSec = e), (t.lastSeekPosition = e), (this.state.progress.value = { ...this.state.progress.value, position: e }), Promise.resolve(e)
                        );
                    }
                    return this.currentMediaPlayer.value
                        ? (this.queueState.currentEntity.value && (this.queueState.currentEntity.value.lastSeekPosition = e),
                          this.currentMediaPlayer.value.setProgress(e))
                        : Promise.resolve(e);
                }
                setVolume(e) {
                    let t = Object.values(this.mediaPlayersStore.value);
                    return ((this.state.volume.value = e), 0 === t.length) ? Promise.resolve(e) : Promise.all(t.map((t) => t.setVolume(e))).then(() => e);
                }
                setExponentVolume(e) {
                    let t = Object.values(this.mediaPlayersStore.value);
                    return ((this.state.volume.value = Q(e)), 0 === t.length) ? Promise.resolve(e) : Promise.all(t.map((t) => t.setExponentVolume(e))).then(() => e);
                }
                setSpeed(e) {
                    this.state.speed.value = e;
                    let t = [];
                    for (let r of Object.values(this.mediaPlayersStore.value)) t.push(r.setSpeed(e));
                    return Promise.all(t).then(() => e);
                }
                stop() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return X(this.currentMediaPlayer.value) && this.state.status.value !== o.IDLE && this.state.status.value !== o.STOPPED
                        ? this.currentMediaPlayer.value.stop(e)
                        : Promise.resolve();
                }
                setVideoCoreContainer(e) {
                    U(this.currentMediaPlayer.value) && this.currentMediaPlayer.value.setContainer(e);
                }
                destroyVideoCore() {
                    U(this.currentMediaPlayer.value) && this.currentMediaPlayer.value.destroy();
                }
                generatePlayId() {
                    return (0, O.A)();
                }
                subscribeQueue() {
                    this.unsubArray.push(this.state.event.onChange(this.playerEventChangeHandler)),
                        this.unsubArray.push(this.queueState.currentEntity.onChange(this.currentEntityHandler)),
                        this.unsubArray.push(this.queueState.nextEntity.onChange(this.nextEntityHandler)),
                        this.unsubArray.push(this.queueState.repeat.onChange(this.repeatModeHandler.bind(this)));
                }
                repeatModeHandler(e) {
                    if (et(this.currentMediaPlayer.value)) {
                        if (void 0 !== e && e !== p.pM.NONE) return void this.currentMediaPlayer.value.forceStopCrossfade();
                        this.currentMediaPlayer.value.isEnabled.value = !0;
                    }
                }
                unsubscribeQueue() {
                    for (let e of this.unsubArray) e();
                    this.burstDebounce.dispose();
                }
                playerEventChangeHandler() {
                    let e = this.queueState.currentEntity.value;
                    if (void 0 !== e)
                        switch ((!e.entity.playId && (e.entity.playId = this.generatePlayId()), this.state.event.value)) {
                            case h.END:
                                this.playerEndHandler(e);
                                break;
                            case h.MEDIA_ELEMENT_ERROR:
                                this.playerMediaElementErrorHandler(e);
                        }
                }
                playerEndHandler(e) {
                    e.positionSec = void 0;
                    let t = { entityChangeMethod: s.AUTO_MOVE_FORWARD, index: this.queueState.index.value, filterParams: this.queueState.filterParams.value },
                        r = 1 === this.queueState.order.value.length;
                    e.canBePlayed(t) &&
                        (this.queueState.repeat.value === p.pM.ONE || (this.queueState.repeat.value === p.pM.CONTEXT && r)) &&
                        this.play().catch((e) => this.hooks.afterError.promise(e));
                }
                playerMediaElementErrorHandler(e) {
                    e.entity.mediaElementErrorReloadCounter < this.config.mediaElementErrorReloadCount &&
                        ((e.entity.mediaElementErrorReloadCounter += 1), this.reload(d.MEDIA_ELEMENT_ERROR).catch((e) => this.hooks.afterError.promise(e)));
                }
                currentEntityHandler() {
                    var e;
                    let t = this.queueState.currentEntity.value;
                    if (t) {
                        if (
                            ((t.entity.mediaElementErrorReloadCounter = 0), (t.entity.playId = t.entity.playId || this.generatePlayId()), !this.listenToQueueStateChange)
                        ) {
                            this.listenToQueueStateChange = !0;
                            return;
                        }
                        if (
                            ((t.entity.mediaElementErrorReloadCounter = 0),
                            (t.lastChangeMethod === s.MOVE_FORWARD || t.lastChangeMethod === s.MOVE_BACKWARD) &&
                                (null == (e = this.variables) ? void 0 : e.isSkipDebounceEnabled))
                        )
                            return void this.burstDebounce.invoke();
                        this.play().catch((e) => {
                            this.hooks.afterError.promise(e);
                        });
                    }
                }
                nextEntityHandler() {
                    let e = this.queueState.currentEntity.value,
                        t = this.queueState.nextEntity.value;
                    e && t && et(this.currentMediaPlayer.value) && this.currentMediaPlayer.value.startTimeTracking(e, t);
                }
                createMediaPlayer(e) {
                    return 'videoMediaPlayer' === e.mediaPlayerType
                        ? new V({ hooks: this.hooks, core: e.core, mediaProvider: e.mediaProvider })
                        : 'crossMediaPlayer' === e.mediaPlayerType
                          ? new G({
                                hooks: this.hooks,
                                isEnabled: e.isEnabled,
                                core: e.core,
                                ticker: e.ticker,
                                mediaProvider: e.mediaProvider,
                                additionalCore: e.additionalCore,
                                config: e.config,
                                variables: e.variables,
                            })
                          : new q({ hooks: this.hooks, core: e.core, mediaProvider: e.mediaProvider });
                }
                setCurrentMediaPlayer(e) {
                    let t = this.currentMediaPlayer.value;
                    t !== e && (t && this.state.offChange(t.state), (this.currentMediaPlayer.value = e), this.state.onChange(e.state, { skipFirstChange: !0 }));
                }
                getMediaPlayerForEntity(e) {
                    return this.mediaPlayersStore.value[e.contentType];
                }
                constructor(e) {
                    var t, r, i;
                    (0, v._)(this, 'state', void 0),
                        (0, v._)(this, 'mediaPlayersStore', new g.cJ({})),
                        (0, v._)(this, 'currentMediaPlayer', new g.cJ(null)),
                        (0, v._)(this, 'queueState', void 0),
                        (0, v._)(this, 'unsubArray', []),
                        (0, v._)(this, 'config', void 0),
                        (0, v._)(this, 'listenToQueueStateChange', !0),
                        (0, v._)(this, 'variables', void 0),
                        (0, v._)(this, 'burstDebounce', void 0),
                        (0, v._)(this, 'hooks', void 0);
                    let { queueState: a, hooks: s, config: n, mediaPlayerParams: o, state: l, variables: u } = e;
                    (this.queueState = a),
                        (this.hooks = s),
                        (this.state = l),
                        (this.variables = u),
                        void 0 !== o && this.setCurrentMediaPlayer(this.registerMediaPlayer(o)),
                        (this.config = {
                            mediaElementErrorReloadCount: null != (r = null == n ? void 0 : n.mediaElementErrorReloadCount) ? r : 1,
                            burstDebounceConfig: null != (i = null == n ? void 0 : n.burstDebounceConfig) ? i : B,
                        }),
                        (this.burstDebounce = new R.BurstDebounce({
                            callback: () => {
                                this.play().catch((e) => {
                                    this.hooks.afterError.promise(e);
                                });
                            },
                            config: this.config.burstDebounceConfig,
                            enableDebugLogging: !!(null == (t = this.variables) ? void 0 : t.enableBurstDebounceDebugLogging),
                        })),
                        (this.currentEntityHandler = this.currentEntityHandler.bind(this)),
                        (this.nextEntityHandler = this.nextEntityHandler.bind(this)),
                        (this.playerEventChangeHandler = this.playerEventChangeHandler.bind(this)),
                        this.subscribeQueue();
                }
            }
            let K = 5;
            var z = r(68413);
            class Z extends Error {
                constructor() {
                    super('setContext completed but the context is no longer current (superseded by another setContext call)'),
                        (0, v._)(this, 'name', 'StaleContextException'),
                        Object.setPrototypeOf(this, Z.prototype);
                }
            }
            class $ {
                getId() {
                    return this.id;
                }
                get state() {
                    return this.playbackState;
                }
                getPlayContextRequestKey(e) {
                    var t;
                    let { context: r, loadContextMeta: i } = e;
                    return JSON.stringify({ contextType: r.data.type, contextId: null != (t = r.data.meta.id) ? t : null, loadContextMeta: null == i || i });
                }
                canReusePendingPlayContextRequest(e) {
                    return void 0 === e.entitiesData && void 0 === e.queueParams;
                }
                playContext(e) {
                    try {
                        var t, r, i;
                        this.mediaController.cancelPendingBurstDebounce();
                        let { context: a, queueParams: s, entitiesData: n, loadContextMeta: l } = e,
                            u = this.contextController.currentContextObservable.value,
                            h = this.queueController.queue.state.currentEntity.value,
                            d = void 0 !== h && h.context === u,
                            c = this.queueController.queue.state.entityList.value,
                            y =
                                (function (e) {
                                    let { currentContext: t, newContext: r, entityList: i, entitiesData: a } = e;
                                    if (void 0 === t || t.data.type !== r.data.type) return !0;
                                    if (!a || 0 === a.length) return String(t.data.meta.id) !== String(r.data.meta.id);
                                    if (String(t.data.meta.id) !== String(r.data.meta.id)) return !0;
                                    let s = i.map((e) => {
                                            let { entity: t } = e;
                                            return String(t.data.meta.id);
                                        }),
                                        n = a.map((e) => String(e.meta.id));
                                    return !(0, E.A)(s, n);
                                })({ currentContext: u, newContext: a, entityList: c, entitiesData: n }) || !d,
                            v = y && this.canReusePendingPlayContextRequest(e) ? this.getPlayContextRequestKey(e) : void 0;
                        if (v && (null == (t = this.pendingPlayContextRequest) ? void 0 : t.key) === v) return this.pendingPlayContextRequest.promise;
                        let p = null == s ? void 0 : s.entityId,
                            f = null == s ? void 0 : s.index;
                        if ((void 0 !== p && (f = c.findIndex((e) => Number(e.entity.data.meta.id) === Number(p))), y)) {
                            let e = this.mediaController
                                .stop({ triggerAfterMediaEndPlaying: !1 })
                                .then(() => this.setContext({ queueParams: s, context: a, entitiesData: n, loadContextMeta: l }))
                                .then(() => this.play())
                                .finally(() => {
                                    var t;
                                    (null == (t = this.pendingPlayContextRequest) ? void 0 : t.promise) === e && (this.pendingPlayContextRequest = void 0);
                                });
                            return v && (this.pendingPlayContextRequest = { key: v, promise: e }), e;
                        }
                        let { entity: g } = h;
                        if (void 0 === s || void 0 === f || -1 === f) {
                            if (this.playbackState.playerState.status.value === o.STOPPED || this.playbackState.playerState.status.value === o.ENDED) return this.play();
                            return this.togglePause();
                        }
                        let P = this.queueController.queue.state.entityList.value[f];
                        if (P && ((r = P.entity), (i = this.playbackState.queueState.index.value === f), g.data.meta.id !== r.data.meta.id || !i))
                            return this.setEntityByIndex(f);
                        return this.togglePause();
                    } catch (e) {
                        return Promise.reject(e);
                    }
                }
                setContext(e) {
                    this.mediaController.cancelPendingBurstDebounce(), (this.mediaController.listenQueueState = !1);
                    let { context: t, entitiesData: r, queueParams: i, loadContextMeta: a = !0, progress: s } = e;
                    return this.hooks.beforeContextSet
                        .promise()
                        .catch((e) => {
                            this.hooks.afterError.promise(e);
                        })
                        .finally(() => {
                            (this.contextController.currentContext = t), this.hooks.afterContextSet.call();
                            let e = () =>
                                    this.contextController.currentContextObservable.value !== t
                                        ? Promise.reject(new Z())
                                        : this.queueController.setupQueue({ entitiesData: r, queueParams: i }).then(() => {
                                              if (this.contextController.currentContextObservable.value !== t) throw new Z();
                                              s && this.mediaController.applyInitialProgress(s),
                                                  (this.lastStableContext = t),
                                                  (this.mediaController.listenQueueState = !0),
                                                  this.hooks.afterSetupQueue.call();
                                          }),
                                n = (e) => (
                                    e instanceof Z ||
                                        (this.contextController.currentContextObservable.value === t &&
                                            ((this.contextController.currentContext = this.lastStableContext), (this.mediaController.listenQueueState = !0))),
                                    Promise.reject(e)
                                );
                            return a
                                ? this.contextController
                                      .loadContextMeta()
                                      .then(() => e())
                                      .catch(n)
                                : e().catch(n);
                        });
                }
                restartContext(e) {
                    this.mediaController.cancelPendingBurstDebounce(), (this.mediaController.listenQueueState = !1);
                    let { playAfterRestart: t = !0, entitiesData: r, queueParams: i } = e;
                    return this.hooks.beforeEntityChange
                        .promise({ method: s.RESTART_CONTEXT, index: this.queueController.queue.state.index.value })
                        .catch((e) => {
                            this.hooks.afterError.promise(e);
                        })
                        .finally(() =>
                            this.queueController
                                .setupQueue({ entitiesData: r, queueParams: i })
                                .then(() =>
                                    ((this.mediaController.listenQueueState = !0), t)
                                        ? this.play()
                                        : this.mediaController.state.status.value === o.PLAYING
                                          ? this.mediaController.stop()
                                          : Promise.resolve(),
                                ),
                        );
                }
                reloadEntity(e) {
                    return this.mediaController.reload(e);
                }
                preloadSrc(e) {
                    return this.mediaController.preloadSrc(e);
                }
                releaseSrc(e) {
                    return this.mediaController.releaseSrc(e).catch((e) => {
                        this.hooks.afterError.promise(e);
                    });
                }
                play() {
                    return this.mediaController.cancelPendingBurstDebounce(), this.mediaController.play();
                }
                moveForward(e) {
                    return this.queueController
                        .moveForward(e)
                        .then((e) =>
                            e && e.cause === n.ENTITY_CAN_NOT_BE_PLAYED
                                ? (this.mediaController.cancelPendingBurstDebounce(), this.mediaController.stop())
                                : Promise.resolve(),
                        )
                        .catch((e) => {
                            throw (this.mediaController.cancelPendingBurstDebounce(), e);
                        });
                }
                moveBackward() {
                    let {
                        progress: { value: e },
                    } = this.mediaController.state;
                    return e.position > K && !this.mediaController.isPendingBurstDebounce
                        ? (this.mediaController.cancelPendingBurstDebounce(), this.mediaController.setProgress(0))
                        : this.queueController
                              .moveBackward()
                              .then((e) =>
                                  e && e.cause === n.ENTITY_CAN_NOT_BE_PLAYED
                                      ? (this.mediaController.cancelPendingBurstDebounce(), this.mediaController.stop())
                                      : Promise.resolve(),
                              )
                              .catch((e) => {
                                  throw (this.mediaController.cancelPendingBurstDebounce(), e);
                              });
                }
                setEntityByIndex(e, t) {
                    return t && (this.mediaController.listenQueueState = !1), this.mediaController.cancelPendingBurstDebounce(), this.queueController.setIndex(e);
                }
                inject(e) {
                    this.queueController.inject(e);
                }
                injectNext(e) {
                    let t = this.playbackState.queueState.index.value;
                    this.queueController.inject({ ...e, position: t + 1 });
                }
                injectLast(e) {
                    let t = this.playbackState.queueState.order.value.length;
                    this.queueController.inject({ ...e, position: t });
                }
                removeAndLoadEntities(e, t) {
                    return this.queueController.removeAndLoadEntities(e, t);
                }
                remove(e, t) {
                    this.queueController.remove(e, t);
                }
                removeByEntityIds(e, t) {
                    this.queueController.removeByEntityIds(e, t);
                }
                hide(e, t) {
                    this.queueController.hide(e, t);
                }
                hideByEntityIds(e, t) {
                    this.queueController.hideByEntityIds(e, t);
                }
                pause() {
                    let e = this.mediaController.isPendingBurstDebounce;
                    return (this.mediaController.cancelPendingBurstDebounce(), e) ? this.mediaController.stop() : this.mediaController.pause();
                }
                resume() {
                    return this.mediaController.cancelPendingBurstDebounce(), this.mediaController.resume();
                }
                togglePause() {
                    let e = this.mediaController.isPendingBurstDebounce;
                    return (this.mediaController.cancelPendingBurstDebounce(), e) ? this.mediaController.stop() : this.mediaController.togglePause();
                }
                increaseVolume(e) {
                    let t = this.playbackState.playerState.volume.value;
                    return this.mediaController.setVolume(1 - e > t ? t + e : 1);
                }
                increaseExponentVolume(e) {
                    let t = this.playbackState.playerState.exponentVolume.value;
                    return this.mediaController.setExponentVolume(1 - e > t ? t + e : 1);
                }
                decreaseVolume(e) {
                    let t = this.playbackState.playerState.volume.value;
                    return this.mediaController.setVolume(t > e ? t - e : 0);
                }
                decreaseExponentVolume(e) {
                    let t = this.playbackState.playerState.exponentVolume.value;
                    return this.mediaController.setExponentVolume(t > e ? t - e : 0);
                }
                slideForward(e) {
                    let { duration: t, position: r } = this.playbackState.playerState.progress.value,
                        i = t - e;
                    return this.mediaController.setProgress(i > r ? r + e : t);
                }
                slideBackward(e) {
                    let { position: t } = this.playbackState.playerState.progress.value;
                    return this.mediaController.setProgress(t > e ? t - e : 0);
                }
                updateFilterParams(e) {
                    this.queueController.updateFilterParams(e);
                }
                toggleShuffle() {
                    this.queueController.toggleShuffle();
                }
                setShuffle(e) {
                    this.queueController.setShuffle(e);
                }
                setProgress(e) {
                    return this.mediaController.setProgress(e);
                }
                setVolume(e) {
                    return this.mediaController.setVolume(e);
                }
                setExponentVolume(e) {
                    return this.mediaController.setExponentVolume(e);
                }
                setSpeed(e) {
                    return this.mediaController.setSpeed(e);
                }
                bindPlayer() {
                    this.mediaController.listenQueueState = !0;
                }
                unbindPlayer() {
                    this.mediaController.cancelPendingBurstDebounce(), (this.mediaController.listenQueueState = !1);
                }
                setRepeatMode(e) {
                    this.queueController.setRepeat(e);
                }
                stop() {
                    return this.mediaController.cancelPendingBurstDebounce(), this.mediaController.stop();
                }
                getEntityByIndex(e) {
                    return this.queueController.getEntityByIndex(e);
                }
                registerMediaPlayer(e) {
                    this.mediaController.registerMediaPlayer(e);
                }
                setVideoCoreContainer(e) {
                    this.mediaController.setVideoCoreContainer(e);
                }
                destroyVideoCore() {
                    this.mediaController.destroyVideoCore();
                }
                constructor(e) {
                    var t;
                    (0, v._)(this, 'id', void 0),
                        (0, v._)(this, 'isBlocking', void 0),
                        (0, v._)(this, 'playbackState', void 0),
                        (0, v._)(this, 'queueController', void 0),
                        (0, v._)(this, 'contextController', void 0),
                        (0, v._)(this, 'mediaController', void 0),
                        (0, v._)(
                            this,
                            'hooks',
                            (function () {
                                let e = {
                                    afterPlaybackCheckBlockingStatus: new z.AsyncSeriesHook(),
                                    beforeContextSet: new z.AsyncSeriesHook(),
                                    afterContextSet: new z.SyncHook(),
                                    afterContextEnd: new z.AsyncSeriesHook(['method']),
                                    afterSetupQueue: new z.SyncHook(),
                                    beforeEntityPlayingProcessStart: new z.AsyncSeriesHook(),
                                    entityPlayingProcessStartError: new z.AsyncSeriesHook(),
                                    beforeEntityReloadProcessStart: new z.AsyncSeriesHook(['reloadReason']),
                                    beforeMediaSourceContentReload: new z.AsyncSeriesHook(),
                                    afterMediaSourceContentReload: new z.AsyncSeriesHook(),
                                    beforeEntityPreloadProcessStart: new z.AsyncSeriesHook(['entity']),
                                    beforeMediaSourceContentPreload: new z.AsyncSeriesHook(['entity']),
                                    afterMediaSourceContentPreload: new z.AsyncSeriesHook(['entity']),
                                    beforeMediaStartPlaying: new z.AsyncSeriesHook(),
                                    afterMediaStartPlaying: new z.AsyncSeriesHook(),
                                    beforeMediaResume: new z.AsyncSeriesHook(),
                                    afterMediaResume: new z.AsyncSeriesHook(),
                                    beforeMediaPause: new z.AsyncSeriesHook(),
                                    afterMediaPause: new z.AsyncSeriesHook(),
                                    afterMediaEndPlaying: new z.AsyncSeriesHook(),
                                    beforeFindPlayableEntityIndex: new z.AsyncSeriesHook(['findData']),
                                    beforeEntityChange: new z.AsyncSeriesHook(['changeData']),
                                    afterError: new z.AsyncSeriesHook(['error']),
                                    afterErrorProcessed: new z.AsyncSeriesHook(['error']),
                                    beforeDestroy: new z.AsyncSeriesHook(),
                                    afterEntityRemove: new z.AsyncSeriesHook(),
                                    beforeInject: new z.SyncWaterfallHook(['injectData']),
                                    afterInject: new z.SyncWaterfallHook(['afterInjectData']),
                                };
                                return (
                                    e.afterError.tapPromise({ name: 'afterErrorProcessedBridge', stage: Number.MAX_SAFE_INTEGER }, (t) =>
                                        e.afterErrorProcessed.promise(t),
                                    ),
                                    e
                                );
                            })(),
                        ),
                        (0, v._)(this, 'playbackInitializationTime', Date.now()),
                        (0, v._)(this, 'lastStableContext', void 0),
                        (0, v._)(this, 'pendingPlayContextRequest', void 0),
                        (this.id = e.id),
                        (this.isBlocking = null != (t = e.isBlocking) && t);
                    let {
                        queueController: r,
                        contextController: i,
                        mediaController: a,
                    } = (function (e) {
                        try {
                            let { mediaPlayerParams: t, factory: r, hooks: i, entityProvider: a, playbackConfig: s, variables: n } = e,
                                o = new p.Di({
                                    prevIndex: null,
                                    index: 0,
                                    nextIndex: null,
                                    entityList: [],
                                    order: [],
                                    repeat: { ...p.pM }.NONE,
                                    shuffle: !1,
                                    filterParams: {},
                                }),
                                l = new H(f),
                                u = new C(r),
                                h = new T({
                                    contextController: u,
                                    playerQueue: o,
                                    playerState: l,
                                    hooks: i,
                                    entityProvider: a,
                                    windowPaginationConfig: { setupQueueWindowSize: s.setupQueueWindowSize, windowSize: s.windowSize },
                                    factory: r,
                                }),
                                d = { mediaElementErrorReloadCount: s.mediaElementErrorReloadCount, burstDebounceConfig: s.burstDebounceConfig },
                                c = new J({ queueState: o.state, hooks: i, config: d, mediaPlayerParams: t, state: l, variables: n });
                            return { contextController: u, queueController: h, mediaController: c };
                        } catch (e) {
                            throw new S('Error in createPlaybackControllers', { code: 'E_CREATE_PLAYER_CONTROLLERS', cause: e });
                        }
                    })({ ...e, hooks: this.hooks });
                    (this.queueController = r),
                        (this.mediaController = a),
                        (this.contextController = i),
                        (this.playbackState = {
                            playerState: this.mediaController.state,
                            currentMediaPlayer: this.mediaController.currentMediaPlayer,
                            mediaPlayersStore: this.mediaController.mediaPlayersStore,
                            queueState: this.queueController.queue.state,
                            currentContext: this.contextController.currentContextObservable,
                        });
                }
            }
            function ee(e) {
                return e instanceof q;
            }
            function et(e) {
                return e instanceof G;
            }
            class er {}
            !(function (e) {
                (e.BLOCKED = 'blocked'), (e.UNBLOCKED = 'unblocked');
            })(y || (y = {}));
        },
    },
]);
