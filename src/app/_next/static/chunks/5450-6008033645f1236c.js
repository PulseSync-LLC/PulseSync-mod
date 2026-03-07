'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5450],
    {
        18542: (e, t, n) => {
            n.d(t, {
                bq: () => y,
                O5: () => h,
                p$: () => r,
                Jd: () => es,
                gv: () => ev,
                qP: () => ec,
                zT: () => ep,
                yi: () => g,
                oh: () => O,
                $P: () => E,
                ot: () => _,
                F4: () => I,
                fD: () => C,
            }),
                (function (e) {
                    (e.UPDATED = 'UPDATED'), (e.PARSING_ERROR = 'PARSING_ERROR');
                })(r || (r = {}));
            var r,
                i,
                o,
                a,
                s,
                l,
                c,
                u,
                p,
                f,
                d,
                v,
                b,
                h = 1,
                y = {
                    UNSPECIFIED: 'UNSPECIFIED',
                    WEB: 'WEB',
                    ANDROID: 'ANDROID',
                    IOS: 'IOS',
                    SMART_SPEAKER: 'SMART_SPEAKER',
                    WEB_TV: 'WEB_TV',
                    ANDROID_TV: 'ANDROID_TV',
                    APPLE_TV: 'APPLE_TV',
                    ANDROID_WEAR: 'ANDROID_WEAR',
                    WEB_DESKTOP: 'WEB_DESKTOP',
                },
                _ = { UNSPECIFIED: 'UNSPECIFIED', NONE: 'NONE', ONE: 'ONE', ALL: 'ALL' },
                m = { DO_NOT_INTERCEPT_BY_DEFAULT: 'DO_NOT_INTERCEPT_BY_DEFAULT', INTERCEPT_EAGER: 'INTERCEPT_EAGER' },
                g = { UNSPECIFIED: 'UNSPECIFIED', TRACK: 'TRACK', LOCAL_TRACK: 'LOCAL_TRACK', INFINITE: 'INFINITE', VIDEO_CLIP: 'VIDEO_CLIP' },
                O = {
                    BASED_ON_ENTITY_BY_DEFAULT: 'BASED_ON_ENTITY_BY_DEFAULT',
                    USER_TRACKS: 'USER_TRACKS',
                    DOWNLOADED_TRACKS: 'DOWNLOADED_TRACKS',
                    SEARCH: 'SEARCH',
                    MUSIC_HISTORY: 'MUSIC_HISTORY',
                    MUSIC_HISTORY_SEARCH: 'MUSIC_HISTORY_SEARCH',
                    ARTIST_MY_COLLECTION: 'ARTIST_MY_COLLECTION',
                    ARTIST_FAMILIAR_FROM_WAVE: 'ARTIST_FAMILIAR_FROM_WAVE',
                },
                E = {
                    UNSPECIFIED: 'UNSPECIFIED',
                    ARTIST: 'ARTIST',
                    PLAYLIST: 'PLAYLIST',
                    ALBUM: 'ALBUM',
                    RADIO: 'RADIO',
                    VARIOUS: 'VARIOUS',
                    GENERATIVE: 'GENERATIVE',
                    FM_RADIO: 'FM_RADIO',
                    VIDEO_WAVE: 'VIDEO_WAVE',
                    LOCAL_TRACKS: 'LOCAL_TRACKS',
                },
                C = function (e, t) {
                    return { device_id: e, version: Math.floor(0x8000000000000000 * Math.random()) + 0, timestamp_ms: void 0 !== t ? t : Date.now() };
                };
            function S(e) {
                return JSON.parse(JSON.stringify(e));
            }
            function N(e) {
                return e instanceof Error ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause } : { data: e };
            }
            var R = n(9123),
                P = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ('function' != typeof n && null !== n) throw TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                w = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        P(t, e),
                        Object.defineProperty(t.prototype, 'on', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t, n, r) {
                                return e.prototype.on.call(this, t, n, r), this;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'once', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t, n, r) {
                                return e.prototype.once.call(this, t, n, r), this;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'emit', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t, n, r) {
                                return e.prototype.emit.call(this, t, n, r), this;
                            },
                        }),
                        Object.defineProperty(t.prototype, 'off', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t, n) {
                                return e.prototype.off.call(this, t, n), this;
                            },
                        }),
                        t
                    );
                })(R.TinyEmitter);
            function T(e) {
                var t = C(e, 0);
                return {
                    player_state: {
                        player_queue: {
                            current_playable_index: -1,
                            entity_id: '',
                            entity_type: E.VARIOUS,
                            playable_list: [],
                            options: { repeat_mode: _.NONE },
                            shuffle_optional: null,
                            entity_context: O.BASED_ON_ENTITY_BY_DEFAULT,
                            version: t,
                            from_optional: '',
                            initial_entity_optional: null,
                            adding_options_optional: null,
                            queue: null,
                        },
                        status: { duration_ms: 0, paused: !0, playback_speed: 1, progress_ms: 0, version: t },
                        player_queue_inject_optional: null,
                    },
                    devices: [],
                    active_device_id_optional: '',
                };
            }
            var I = function (e, t) {
                    return Number((Math.round(e * t) / t).toFixed(4));
                },
                D = n(56258),
                electronBridgeModule = n(68317);
            function A(e, t, n) {
                return void 0 === e && (e = !1), !!e || !t || !n || Number(t.timestamp_ms) < Number(n.timestamp_ms);
            }
            var j = function () {
                    return (j =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
                M = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'state', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'prevState', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'diff', { enumerable: !0, configurable: !0, writable: !0, value: {} }),
                            Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'diffCalculators', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'lastActiveRemoteControllerDevice', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'onlineRemoteControllerDevice', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'emitter', { enumerable: !0, configurable: !0, writable: !0, value: new w() }),
                            (this.options = e),
                            (this.state = T(e.deviceConfig.info.device_id)),
                            (this.prevState = T(e.deviceConfig.info.device_id)),
                            (this.diffCalculators = {
                                active_device_id_optional: this.calculateActiveDeviceDiff.bind(this),
                                devices: this.calculateDevicesDiff.bind(this),
                                player_state: {
                                    player_queue: {
                                        entity_id: this.calculateEntityIdDiff.bind(this),
                                        entity_type: this.calculateEntityTypeDiff.bind(this),
                                        entity_context: function () {},
                                        current_playable_index: this.calculateCurrentPlayableIndexDiff.bind(this),
                                        playable_list: this.calculatePlayableListDiff.bind(this),
                                        options: { repeat_mode: this.calculateRepeatDiff.bind(this) },
                                        version: function () {},
                                        shuffle_optional: this.calculateShuffleDiff.bind(this),
                                        from_optional: function () {},
                                        initial_entity_optional: function () {},
                                        adding_options_optional: function () {},
                                        queue: function () {},
                                    },
                                    status: {
                                        progress_ms: this.calculateProgressMsDiff.bind(this),
                                        duration_ms: function () {},
                                        paused: this.calculatePausedDiff.bind(this),
                                        playback_speed: this.calculateSpeedDiff.bind(this),
                                        version: function () {},
                                    },
                                    player_queue_inject_optional: function () {},
                                },
                            });
                    }
                    return (
                        Object.defineProperty(e.prototype, 'on', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, n) {
                                var r = this,
                                    i = function (e, n) {
                                        (this.trigger && this.trigger === (null == n ? void 0 : n.trigger)) || t(e);
                                    };
                                return (
                                    this.emitter.on(e, i, { trigger: n }),
                                    function () {
                                        r.emitter.off(e, i);
                                    }
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'currentState', {
                            get: function () {
                                return S(this.state);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'remoteControllerDevice', {
                            get: function () {
                                return this.lastActiveRemoteControllerDevice || this.onlineRemoteControllerDevice;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'fullState', {
                            get: function () {
                                return S({ state: this.state, prevState: this.prevState, diff: this.diff, remoteControllerDevice: this.remoteControllerDevice });
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'updateState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this,
                                    n = [this.diffCalculators];
                                this.diff = {};
                                try {
                                    for (var i = e.isSetNewState; n.length > 0; )
                                        for (var o = n.pop(), a = 0, s = Object.keys(o); a < s.length; a++) {
                                            var l = o[s[a]];
                                            'function' == typeof l ? l(e) : n.push(l);
                                        }
                                    var c = Object.keys(this.diff);
                                    if ((void 0 === i || i) && c.length) {
                                        var u = S(this.state);
                                        c.forEach(function (n) {
                                            (n in e.newState || n in t.state) && (u[n] = e.newState[n]);
                                        }),
                                            (this.prevState = S(this.state)),
                                            (this.state = u);
                                    }
                                    this.updateLastRemoteControllerDevice();
                                    var p = j(j({}, this.fullState), { options: e });
                                    this.emitter.emit(r.UPDATED, p, { trigger: e.trigger });
                                } catch (e) {
                                    var f = new D.t('YnisonStateController. Parsing error', { cause: N(e) });
                                    this.emitter.emit(r.PARSING_ERROR, { error: f });
                                    return;
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculateActiveDeviceDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.newState.active_device_id_optional;
                                t !== this.state.active_device_id_optional && (this.diff.active_device_id_optional = t);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculateDevicesDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this,
                                    n = e.newState,
                                    r = e.skipVersionCompare,
                                    i = this.state.devices.find(function (e) {
                                        var n;
                                        return (null == (n = e.info) ? void 0 : n.device_id) === t.options.deviceConfig.info.device_id;
                                    }),
                                    o = n.devices.find(function (e) {
                                        var n;
                                        return (null == (n = e.info) ? void 0 : n.device_id) === t.options.deviceConfig.info.device_id;
                                    }),
                                    a = (function (e, t, n) {
                                        if (!t || !n) return { isVolumeChanged: !1, isNewVersion: !1 };
                                        var r = t.volume_info,
                                            i = n.volume_info,
                                            o = A(e, r.version, i.version);
                                        return {
                                            isVolumeChanged: I(r.volume, t.capabilities.volume_granularity) !== I(i.volume, n.capabilities.volume_granularity),
                                            isNewVersion: o,
                                        };
                                    })(void 0 !== r && r, i, o),
                                    s = a.isVolumeChanged,
                                    l = a.isNewVersion;
                                s && l && o && (this.diff.deviceVolume = o.volume_info);
                                var c = (function (e, t) {
                                        for (
                                            var n = function (t) {
                                                    var n = e.find(function (e) {
                                                        return e.info.device_id === t.info.device_id;
                                                    });
                                                    if (!n || n.is_offline !== t.is_offline)
                                                        return { value: { isAnyoneConnectionChanged: !0, changedConnectionStatusDevice: t } };
                                                },
                                                r = 0;
                                            r < t.length;
                                            r++
                                        ) {
                                            var i = n(t[r]);
                                            if ('object' == typeof i) return i.value;
                                        }
                                        return { isAnyoneConnectionChanged: !1 };
                                    })(this.state.devices, n.devices),
                                    u = c.isAnyoneConnectionChanged,
                                    p = c.changedConnectionStatusDevice;
                                p && (this.diff.changedConnectionStatusDevice = p), ((s && l) || u) && (this.diff.devices = n.devices);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculateEntityIdDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.newState.player_state.player_queue,
                                    n = e.skipVersionCompare,
                                    r = t.entity_id,
                                    i = t.version,
                                    o = this.state.player_state.player_queue,
                                    a = o.entity_id;
                                A(void 0 !== n && n, o.version, i) &&
                                    a !== r &&
                                    (this.initPlayerState(!0, !1),
                                    this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.entity_id = r));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculateEntityTypeDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.newState.player_state.player_queue,
                                    n = t.entity_type,
                                    r = t.version,
                                    i = e.skipVersionCompare,
                                    o = this.state.player_state.player_queue,
                                    a = o.entity_type;
                                A(void 0 !== i && i, o.version, r) &&
                                    a !== n &&
                                    (this.initPlayerState(!0, !1),
                                    this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.entity_type = n));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculateCurrentPlayableIndexDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.newState.player_state.player_queue,
                                    n = e.skipVersionCompare,
                                    r = t.entity_id,
                                    i = t.current_playable_index,
                                    o = t.version,
                                    a = this.state.player_state.player_queue,
                                    s = a.entity_id,
                                    l = a.current_playable_index;
                                A(void 0 !== n && n, a.version, o) &&
                                    s === r &&
                                    l !== i &&
                                    (this.initPlayerState(!0, !1),
                                    this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.current_playable_index = i));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculatePlayableListDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.newState.player_state.player_queue,
                                    n = e.skipVersionCompare,
                                    r = t.playable_list,
                                    i = t.version,
                                    o = this.state.player_state.player_queue,
                                    a = o.playable_list,
                                    s = A(void 0 !== n && n, o.version, i),
                                    l = (function (e, t) {
                                        var n, r;
                                        if (e.length === t.length) {
                                            for (var i = e.length, o = 0; o < i; o++)
                                                if (t[o] && (null == (n = e[o]) ? void 0 : n.playable_id) !== (null == (r = t[o]) ? void 0 : r.playable_id)) return !1;
                                            return !0;
                                        }
                                        return !1;
                                    })(a, r);
                                s &&
                                    !l &&
                                    (this.initPlayerState(!0, !1),
                                    this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.playable_list = r));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculateShuffleDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.newState.player_state.player_queue,
                                    n = t.shuffle_optional,
                                    r = t.version,
                                    i = e.skipVersionCompare,
                                    o = this.state.player_state.player_queue,
                                    a = o.shuffle_optional,
                                    s = A(void 0 !== i && i, o.version, r),
                                    l = (function (e, t) {
                                        if (!e && !t) return !0;
                                        if (e && t && e.playable_indices.length === t.playable_indices.length) {
                                            for (var n = !0, r = 0; r <= e.playable_indices.length; r++)
                                                if (e.playable_indices[r] !== t.playable_indices[r]) {
                                                    n = !1;
                                                    break;
                                                }
                                            return n;
                                        }
                                        return !1;
                                    })(a, n);
                                s &&
                                    !l &&
                                    (this.initPlayerState(!0, !1),
                                    this.diff.player_state &&
                                        this.diff.player_state.player_queue &&
                                        (n
                                            ? (this.diff.player_state.player_queue.shuffle_optional = n)
                                            : (this.diff.player_state.player_queue.shuffle_optional = { playable_indices: [] })));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculateRepeatDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.newState.player_state.player_queue,
                                    n = t.options,
                                    r = t.version,
                                    i = e.skipVersionCompare,
                                    o = n.repeat_mode,
                                    a = this.state.player_state.player_queue,
                                    s = a.options,
                                    l = a.version,
                                    c = s.repeat_mode;
                                A(void 0 !== i && i, l, r) &&
                                    c !== o &&
                                    (this.initPlayerState(!0, !1),
                                    this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.options = n));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculateProgressMsDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t,
                                    n,
                                    r = e.newState.player_state.status,
                                    i = e.skipVersionCompare,
                                    o = r.progress_ms,
                                    a = r.version,
                                    s = this.state.player_state.status,
                                    l = s.progress_ms,
                                    c = A(void 0 !== i && i, s.version, a),
                                    u = (t = Number(o)) !== (n = Number(l)) && (n < 1500 || Math.abs(t - n) > h);
                                c &&
                                    u &&
                                    (this.initPlayerState(!1, !0),
                                    this.diff.player_state && this.diff.player_state.status && (this.diff.player_state.status.progress_ms = o));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculateSpeedDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.newState.player_state.status,
                                    n = t.playback_speed,
                                    r = t.version,
                                    i = e.skipVersionCompare,
                                    o = this.state.player_state.status,
                                    a = o.playback_speed;
                                A(void 0 !== i && i, o.version, r) &&
                                    a !== n &&
                                    (this.initPlayerState(!1, !0),
                                    this.diff.player_state && this.diff.player_state.status && (this.diff.player_state.status.playback_speed = n));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'calculatePausedDiff', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.newState.player_state.status,
                                    n = e.skipVersionCompare,
                                    r = t.paused,
                                    i = t.version,
                                    o = this.state.player_state.status,
                                    a = o.paused;
                                A(void 0 !== n && n, o.version, i) &&
                                    a !== r &&
                                    (this.initPlayerState(!1, !0), this.diff.player_state && this.diff.player_state.status && (this.diff.player_state.status.paused = r));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'initPlayerState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                this.diff.player_state || (this.diff.player_state = {}),
                                    e && !this.diff.player_state.player_queue && (this.diff.player_state.player_queue = {}),
                                    t && !this.diff.player_state.status && (this.diff.player_state.status = {});
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getLastActiveRemoteControllerDevice', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e,
                                    t,
                                    n = this,
                                    r = this.options.deviceConfig.info.device_id,
                                    i = this.state.active_device_id_optional,
                                    o = this.state.devices.find(function (e) {
                                        var t;
                                        return (null == (t = e.info) ? void 0 : t.device_id) === i;
                                    }),
                                    a = [this.state.player_state.player_queue.version, this.state.player_state.status.version];
                                (null == (e = null == o ? void 0 : o.volume_info) ? void 0 : e.version) &&
                                    a.push(null == (t = null == o ? void 0 : o.volume_info) ? void 0 : t.version);
                                var s = a
                                    .sort(function (e, t) {
                                        return t.timestamp_ms - e.timestamp_ms;
                                    })
                                    .find(function (e) {
                                        if (e.device_id === r || 0 === e.timestamp_ms) return !1;
                                        var t,
                                            i = n.state.devices.find(function (t) {
                                                var n, r;
                                                return (
                                                    (null == (n = t.info) ? void 0 : n.device_id) === e.device_id &&
                                                    (null == (r = t.capabilities) ? void 0 : r.can_be_remote_controller)
                                                );
                                            });
                                        return !!(i && (null == (t = null == i ? void 0 : i.capabilities) ? void 0 : t.can_be_remote_controller));
                                    });
                                if (s)
                                    return this.state.devices.find(function (e) {
                                        var t;
                                        return (null == (t = e.info) ? void 0 : t.device_id) === (null == s ? void 0 : s.device_id);
                                    });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getOnlineRemoteControllerDevice', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                for (var e, t, n, r, i, o, a = 0, s = this.state.devices; a < s.length; a++) {
                                    var l = s[a];
                                    if (!l.is_offline && (null == (e = l.capabilities) ? void 0 : e.can_be_remote_controller)) {
                                        if (
                                            this.lastActiveRemoteControllerDevice &&
                                            (null == (t = l.info) ? void 0 : t.device_id) ===
                                                (null == (n = this.lastActiveRemoteControllerDevice.info) ? void 0 : n.device_id)
                                        )
                                            return l;
                                        this.onlineRemoteControllerDevice &&
                                            (null == (r = l.info) ? void 0 : r.device_id) ===
                                                (null == (i = this.onlineRemoteControllerDevice.info) ? void 0 : i.device_id) &&
                                            (o = l),
                                            o || (o = l);
                                    }
                                }
                                return o;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateLastRemoteControllerDevice', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this.getLastActiveRemoteControllerDevice();
                                e ? (this.onlineRemoteControllerDevice = void 0) : (this.onlineRemoteControllerDevice = this.getOnlineRemoteControllerDevice()),
                                    (this.lastActiveRemoteControllerDevice = e);
                            },
                        }),
                        e
                    );
                })();
            !(function (e) {
                (e.PRODUCTION = 'ynison.music.yandex.ru'), (e.QA = 'qa.ynison.music.yandex.ru');
            })(i || (i = {})),
                (function (e) {
                    (e.CONNECTING = 'CONNECTING'),
                        (e.CONNECTED = 'CONNECTED'),
                        (e.DISCONNECTED = 'DISCONNECTED'),
                        (e.WAITING_FOR_RECONNECT = 'WAITING_FOR_RECONNECT'),
                        (e.READY_TO_RECONNECT = 'READY_TO_RECONNECT');
                })(o || (o = {})),
                (function (e) {
                    (e.RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'),
                        (e.NEW_CONNECTION_ATTEMPT = 'NEW_CONNECTION_ATTEMPT'),
                        (e.CONNECTED = 'CONNECTED'),
                        (e.CONNECTION_ERROR = 'CONNECTION_ERROR'),
                        (e.HUB_ERROR = 'HUB_ERROR'),
                        (e.HUB_MESSAGE_PARSING_ERROR = 'HUB_MESSAGE_PARSING_ERROR'),
                        (e.DISCONNECTED = 'DISCONNECTED'),
                        (e.MESSAGE_SENT = 'MESSAGE_SENT'),
                        (e.MESSAGE_LOST = 'MESSAGE_LOST');
                })(a || (a = {})),
                (function (e) {
                    (e.ynisonBackoffMillis = 'ynison-backoff-millis'),
                        (e.ynisonErrorCode = 'ynison-error-code'),
                        (e.ynisonGoAwayForSeconds = 'ynison-go-away-for-seconds');
                })(s || (s = {})),
                (function (e) {
                    (e.CLIENT = 'CLIENT'), (e.SERVER = 'SERVER');
                })(l || (l = {})),
                (function (e) {
                    (e.REDIRECTOR = 'REDIRECTOR'), (e.HUB = 'HUB');
                })(c || (c = {}));
            var k = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ('function' != typeof n && null !== n) throw TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                U = function () {
                    return (U =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
                L = function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                            0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                    return n;
                },
                V = (function (e) {
                    function t(n, r) {
                        void 0 === r && (r = {});
                        var i = this,
                            o = r.code,
                            a = L(r, ['code']);
                        return (
                            Object.defineProperty((i = e.call(this, n, U({ code: void 0 === o ? 'E_HUB_MESSAGE_EXCEPTION' : o }, a)) || this), 'name', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: 'HubMessageException',
                            }),
                            Object.setPrototypeOf(i, t.prototype),
                            i
                        );
                    }
                    return k(t, e), t;
                })(D.t),
                Y = n(87965),
                B = function (e) {
                    Object.defineProperty(this, 'redirectorResponse', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'connectionState', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.redirectorResponse = new Y.cJ(e.redirectorResponse)),
                        (this.connectionState = new Y.cJ(e.connectionState));
                };
            !(function (e) {
                (e.ynisonDeviceId = 'Ynison-Device-Id'),
                    (e.ynisonRedirectTicket = 'Ynison-Redirect-Ticket'),
                    (e.ynisonSessionId = 'Ynison-Session-Id'),
                    (e.ynisonDeviceInfo = 'Ynison-Device-Info'),
                    (e.multiAuthUserId = 'X-Yandex-Music-Multi-Auth-User-Id');
            })(u || (u = {}));
            var H = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ('function' != typeof n && null !== n) throw TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                F = function () {
                    return (F =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
                x = function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                            0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                    return n;
                },
                q = (function (e) {
                    function t(n, r) {
                        void 0 === r && (r = {});
                        var i = this,
                            o = r.code,
                            a = x(r, ['code']);
                        return (
                            Object.defineProperty((i = e.call(this, n, F({ code: void 0 === o ? 'E_REDIRECTOR_EXCEPTION' : o }, a)) || this), 'name', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: 'RedirectorException',
                            }),
                            Object.setPrototypeOf(i, t.prototype),
                            i
                        );
                    }
                    return H(t, e), t;
                })(D.t);
            function G(e) {
                var t;
                switch (e) {
                    case y.WEB:
                        t = 1;
                        break;
                    case y.WEB_TV:
                        t = 5;
                        break;
                    default:
                        t = 1;
                }
                return t;
            }
            var W = function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: s(0), throw: s(1), return: s(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function () {
                                return this;
                            }),
                        o
                    );
                    function s(s) {
                        return function (l) {
                            var c = [s, l];
                            if (n) throw TypeError('Generator is already executing.');
                            for (; o && ((o = 0), c[0] && (a = 0)), a; )
                                try {
                                    if (
                                        ((n = 1),
                                        r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done)
                                    )
                                        return i;
                                    switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                                        case 0:
                                        case 1:
                                            i = c;
                                            break;
                                        case 4:
                                            return a.label++, { value: c[1], done: !1 };
                                        case 5:
                                            a.label++, (r = c[1]), (c = [0]);
                                            continue;
                                        case 7:
                                            (c = a.ops.pop()), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === c[0] && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                                                a.label = c[1];
                                                break;
                                            }
                                            if (6 === c[0] && a.label < i[1]) {
                                                (a.label = i[1]), (i = c);
                                                break;
                                            }
                                            if (i && a.label < i[2]) {
                                                (a.label = i[2]), a.ops.push(c);
                                                break;
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    c = t.call(e, a);
                                } catch (e) {
                                    (c = [6, e]), (r = 0);
                                } finally {
                                    n = i = 0;
                                }
                            if (5 & c[0]) throw c[1];
                            return { value: c[0] ? c[1] : void 0, done: !0 };
                        };
                    }
                },
                K = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'device', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'connectionConfig', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (this.device = e.device),
                            (this.connectionConfig = e.connectionConfig);
                    }
                    return (
                        Object.defineProperty(e.prototype, 'getHub', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t, n, r, i;
                                return (
                                    (t = this),
                                    (n = void 0),
                                    (r = void 0),
                                    (i = function () {
                                        var t = this;
                                        return W(this, function (n) {
                                            return [
                                                2,
                                                new Promise(function (n, r) {
                                                    var i,
                                                        o,
                                                        a,
                                                        s,
                                                        l,
                                                        c,
                                                        p = e.oauth,
                                                        f = e.multiAuthUserId,
                                                        d = e.sessionId,
                                                        v =
                                                            ((a = (i = t.device).device_id),
                                                            (s = i.app_name),
                                                            (l = i.app_version),
                                                            (c = G(i.type)),
                                                            ((o = {})[u.ynisonDeviceId] = a),
                                                            (o[u.ynisonDeviceInfo] = JSON.stringify({ app_name: s, app_version: l, type: c })),
                                                            o);
                                                    void 0 !== p && (v.authorization = 'OAuth '.concat(p)),
                                                        void 0 !== f && (v[u.multiAuthUserId] = String(f)),
                                                        void 0 !== d && (v[u.ynisonSessionId] = d);
                                                    var b = new WebSocket(Object.values(t.connectionConfig).join(''), [
                                                            'Bearer',
                                                            'v2',
                                                            encodeURIComponent(JSON.stringify(v)),
                                                        ]),
                                                        h = function (e) {
                                                            try {
                                                                var t = JSON.parse(e.data);
                                                                'error' in t
                                                                    ? (b.close(), r(new q('Error message from redirector', { data: { redirectorResponse: t.error } })))
                                                                    : (b.close(), n(t));
                                                            } catch (e) {
                                                                new q('Error while processing message from redirector', {
                                                                    data: { redirectorResponse: {} },
                                                                    cause: N(e),
                                                                });
                                                            }
                                                        },
                                                        y = function () {
                                                            r(new q('Error in connection to redirector', { data: { redirectorResponse: {} } }));
                                                        },
                                                        _ = function () {
                                                            b.removeEventListener('message', h), b.removeEventListener('error', y), b.removeEventListener('close', _);
                                                        };
                                                    b.addEventListener('message', h), b.addEventListener('error', y), b.addEventListener('close', _);
                                                }),
                                            ];
                                        });
                                    }),
                                    new (r || (r = Promise))(function (e, o) {
                                        function a(e) {
                                            try {
                                                l(i.next(e));
                                            } catch (e) {
                                                o(e);
                                            }
                                        }
                                        function s(e) {
                                            try {
                                                l(i.throw(e));
                                            } catch (e) {
                                                o(e);
                                            }
                                        }
                                        function l(t) {
                                            var n;
                                            t.done
                                                ? e(t.value)
                                                : ((n = t.value) instanceof r
                                                      ? n
                                                      : new r(function (e) {
                                                            e(n);
                                                        })
                                                  ).then(a, s);
                                        }
                                        l((i = i.apply(t, n || [])).next());
                                    })
                                );
                            },
                        }),
                        e
                    );
                })(),
                J = n(9348),
                X = function () {
                    return (X =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
                z = function (e, t) {
                    var n = (0, J.A)(),
                        r = X(X({}, e), { rid: n });
                    if (t) {
                        var i = t.player_action_timestamp_ms,
                            o = void 0 === i ? Date.now() : i,
                            a = t.activity_interception_type,
                            s = void 0 === a ? m.DO_NOT_INTERCEPT_BY_DEFAULT : a;
                        (r.player_action_timestamp_ms = o), (r.activity_interception_type = s);
                    } else (r.player_action_timestamp_ms = Date.now()), (r.activity_interception_type = m.DO_NOT_INTERCEPT_BY_DEFAULT);
                    return { request: r, rid: n };
                },
                $ = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'history', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'limit', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (this.limit = e.limit),
                            (this.history = new Map());
                    }
                    return (
                        Object.defineProperty(e.prototype, 'onMessageSent', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                this.history.set(e, t), this.deleteOldRecords();
                            },
                        }),
                        Object.defineProperty(e.prototype, 'shouldIgnoreIncomingMessage', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t,
                                    n = this.history.get(e);
                                return null != (t = null == n ? void 0 : n.ignoreResponse) && t;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'clear', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.history.clear();
                            },
                        }),
                        Object.defineProperty(e.prototype, 'deleteOldRecords', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                for (var e = this.history.keys(); this.history.size >= this.limit; ) this.history.delete(e.next().value);
                            },
                        }),
                        e
                    );
                })(),
                Q = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ('function' != typeof n && null !== n) throw TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Z = function () {
                    return (Z =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
                ee = function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                            0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                    return n;
                },
                et = (function (e) {
                    function t(n, r) {
                        void 0 === r && (r = {});
                        var i = this,
                            o = r.code,
                            a = ee(r, ['code']);
                        return (
                            Object.defineProperty((i = e.call(this, n, Z({ code: void 0 === o ? 'E_HUB_CONNECTION_EXCEPTION' : o }, a)) || this), 'name', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: 'HubConnectionException',
                            }),
                            Object.setPrototypeOf(i, t.prototype),
                            i
                        );
                    }
                    return Q(t, e), t;
                })(D.t),
                en = function () {
                    return (en =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
                er = '[CLIENT-REASON] ',
                ei = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'connectorConfig', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'socket', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(this, 'redirectorSocket', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'reconnectTimeout', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(this, 'reconnectAttempts', { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
                            Object.defineProperty(this, 'historyController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'emitter', { enumerable: !0, configurable: !0, writable: !0, value: new w() }),
                            Object.defineProperty(this, 'state', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: new B({ redirectorResponse: null, connectionState: o.DISCONNECTED }),
                            }),
                            (this.connectorConfig = e.config),
                            (this.redirectorSocket = new K({ device: this.connectorConfig.device, connectionConfig: this.connectorConfig.redirectorConnectionConfig })),
                            (this.historyController = new $({ limit: this.connectorConfig.historyLimit }));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'on', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = this;
                                return (
                                    this.emitter.on(e, t),
                                    function () {
                                        n.emitter.off(e, t);
                                    }
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'config', {
                            get: function () {
                                return S(this.connectorConfig);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'updateFullState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = en({}, e);
                                (n.player_state.player_queue.version = C(this.connectorConfig.device.device_id, 0)),
                                    (n.player_state.status.version = C(this.connectorConfig.device.device_id, 0));
                                var r = z({ update_full_state: n }, en({ player_action_timestamp_ms: 0 }, t)),
                                    i = r.request,
                                    o = r.rid;
                                return this.sendRequest(i), this.historyController.onMessageSent(o, { ignoreResponse: !1 }), o;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updatePlayingStatus', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = z({ update_playing_status: en({}, e) }, t),
                                    r = n.request,
                                    i = n.rid;
                                return this.sendRequest(r), this.historyController.onMessageSent(i, { ignoreResponse: !0 }), i;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateActiveDevice', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = z({ update_active_device: e }, t),
                                    r = n.request,
                                    i = n.rid;
                                return this.sendRequest(r), this.historyController.onMessageSent(i, { ignoreResponse: !0 }), i;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateSessionParams', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = z({ update_session_params: e }, t),
                                    r = n.request,
                                    i = n.rid;
                                return this.sendRequest(r), this.historyController.onMessageSent(i, { ignoreResponse: !0 }), i;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updatePlayerState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = z({ update_player_state: en({}, e) }, t),
                                    r = n.request,
                                    i = n.rid;
                                return this.sendRequest(r), this.historyController.onMessageSent(i, { ignoreResponse: !0 }), i;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateVolumeInfo', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = z({ update_volume_info: en({}, e) }, t),
                                    r = n.request,
                                    i = n.rid;
                                return this.sendRequest(r), this.historyController.onMessageSent(i, { ignoreResponse: !0 }), i;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'connect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this,
                                    n = e.oauth,
                                    r = e.multiAuthUserId;
                                void 0 !== n && (this.connectorConfig.oauth = n),
                                    void 0 !== r && (this.connectorConfig.multiAuthUserId = r),
                                    [o.DISCONNECTED, o.READY_TO_RECONNECT].includes(this.state.connectionState.value) &&
                                        ((this.state.connectionState.value = o.CONNECTING),
                                        this.emitter.emit(a.NEW_CONNECTION_ATTEMPT, {}),
                                        this.redirectorSocket
                                            .getHub({
                                                oauth: this.connectorConfig.oauth,
                                                multiAuthUserId: this.connectorConfig.multiAuthUserId,
                                                sessionId: this.connectorConfig.sessionId,
                                            })
                                            .then(function (e) {
                                                (t.state.redirectorResponse.value = e), t.connectToHub();
                                            })
                                            .catch(function (e) {
                                                t.state.connectionState.value = o.DISCONNECTED;
                                                var n =
                                                    (16 !== e.data.redirectorResponse.grpc_code || 401 !== e.data.redirectorResponse.http_code) &&
                                                    t.reconnectAttempts < t.connectorConfig.reconnectAttemptsLimit;
                                                if ((t.emitter.emit(a.CONNECTION_ERROR, { destination: c.REDIRECTOR, error: e, shouldReconnect: n }), n)) {
                                                    var r =
                                                        e.data.redirectorResponse.extra_headers && e.data.redirectorResponse.extra_headers[s.ynisonGoAwayForSeconds]
                                                            ? 1e3 * Number(e.data.redirectorResponse.extra_headers[s.ynisonGoAwayForSeconds])
                                                            : t.connectorConfig.defaultReconnectTimeoutMS;
                                                    t.reconnect({ timeout: r });
                                                } else t.reconnectAttempts = 0;
                                            }));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'disconnect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), (this.reconnectTimeout = null)),
                                    (this.reconnectAttempts = 0),
                                    this.closeConnection(1e3, ''.concat(er).concat(e));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'closeConnection', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n, r;
                                (this.state.connectionState.value = o.DISCONNECTED),
                                    ((null == (n = this.socket) ? void 0 : n.readyState) === WebSocket.CONNECTING ||
                                        (null == (r = this.socket) ? void 0 : r.readyState) === WebSocket.OPEN) &&
                                        this.socket.close(e, t);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'clearConnection', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                (this.socket = null), this.historyController.clear();
                            },
                        }),
                        Object.defineProperty(e.prototype, 'connectToHub', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this,
                                    t = this.connectorConfig,
                                    n = t.oauth,
                                    r = t.device,
                                    i = t.multiAuthUserId,
                                    s = this.connectorConfig.hubConnectionConfig,
                                    p = s.protocol,
                                    f = s.path;
                                if (this.state.redirectorResponse.value) {
                                    var d,
                                        v,
                                        b,
                                        h,
                                        y,
                                        _,
                                        m,
                                        g,
                                        O,
                                        E = this.state.redirectorResponse.value.host,
                                        C =
                                            ((d = this.state.redirectorResponse.value),
                                            (b = r.type),
                                            (h = r.app_name),
                                            (y = r.app_version),
                                            (_ = r.device_id),
                                            (m = d.session_id),
                                            (g = d.redirect_ticket),
                                            (O = G(b)),
                                            ((v = {})[u.ynisonDeviceId] = _),
                                            (v[u.ynisonRedirectTicket] = g),
                                            (v[u.ynisonSessionId] = m),
                                            (v[u.ynisonDeviceInfo] = JSON.stringify({ app_name: h, app_version: y, type: O })),
                                            v);
                                    void 0 !== n && (C.authorization = 'OAuth '.concat(n)), void 0 !== i && (C['X-Yandex-Music-Multi-Auth-User-Id'] = String(i));
                                    var S = ''.concat(p).concat(E).concat(f),
                                        N = ['Bearer', 'v2', encodeURIComponent(JSON.stringify(C))];
                                    (this.socket = new WebSocket(S, N)),
                                        this.socket.addEventListener('message', function (t) {
                                            e.onReceiveMessage(t);
                                        }),
                                        this.socket.addEventListener('error', function () {
                                            var t = e.state.connectionState.value;
                                            e.state.connectionState.value = o.DISCONNECTED;
                                            var n = e.reconnectAttempts < e.connectorConfig.reconnectAttemptsLimit,
                                                r = new et('Error in connection to hub', {
                                                    data: { redirectorResponse: e.state.redirectorResponse.value || {}, connectingState: t },
                                                });
                                            e.emitter.emit(a.CONNECTION_ERROR, { destination: c.HUB, error: r, shouldReconnect: n }),
                                                n ? e.reconnect() : (e.reconnectAttempts = 0);
                                        }),
                                        this.socket.addEventListener('open', function () {
                                            (e.state.connectionState.value = o.CONNECTED), e.emitter.emit(a.CONNECTED, {});
                                        }),
                                        this.socket.addEventListener('close', function (t) {
                                            (e.state.connectionState.value = o.DISCONNECTED), e.clearConnection();
                                            var n = t.reason.includes(er);
                                            e.emitter.emit(a.DISCONNECTED, { trigger: n ? l.CLIENT : l.SERVER, event: t });
                                        });
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'reconnect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                void 0 === e && (e = {});
                                var n = e.timeout,
                                    r = void 0 === n ? this.connectorConfig.defaultReconnectTimeoutMS : n;
                                this.state.connectionState.value === o.DISCONNECTED &&
                                    ((this.reconnectAttempts += 1),
                                    (this.reconnectTimeout = setTimeout(function () {
                                        (t.state.connectionState.value = o.READY_TO_RECONNECT), t.connect({});
                                    }, r)),
                                    (this.state.connectionState.value = o.WAITING_FOR_RECONNECT));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onReceiveMessage', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                try {
                                    var t = JSON.parse(e.data);
                                    if ('error' in t) {
                                        var n = this.reconnectAttempts < this.connectorConfig.reconnectAttemptsLimit;
                                        this.closeConnection(1e3, ''.concat(er, 'Error in message'));
                                        var r = new V('Error message from hub', {
                                            data: { redirectorResponse: this.state.redirectorResponse.value || {}, hubResponse: t.error, hubResponseRaw: e.data },
                                        });
                                        if ((this.emitter.emit(a.HUB_ERROR, { error: r, shouldReconnect: n }), n)) {
                                            var i = t.error.details[s.ynisonGoAwayForSeconds]
                                                ? 1e3 * Number(t.error.details[s.ynisonGoAwayForSeconds])
                                                : this.connectorConfig.defaultReconnectTimeoutMS;
                                            this.reconnect({ timeout: i });
                                        } else this.reconnectAttempts = 0;
                                    } else
                                        (this.reconnectAttempts = 0),
                                            this.historyController.shouldIgnoreIncomingMessage(t.rid) || this.emitter.emit(a.RECEIVE_MESSAGE, { rawData: t });
                                } catch (t) {
                                    var o = new V('Error while processing message from hub', {
                                        data: { redirectorResponse: this.state.redirectorResponse.value || {}, hubResponse: {}, hubResponseRaw: e.data },
                                        cause: N(t),
                                    });
                                    this.emitter.emit(a.HUB_MESSAGE_PARSING_ERROR, { error: o });
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'sendRequest', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                null !== this.socket && this.socket.readyState === WebSocket.OPEN && this.state.connectionState.value === o.CONNECTED
                                    ? (this.socket.send(JSON.stringify(e)), this.emitter.emit(a.MESSAGE_SENT, e))
                                    : this.emitter.emit(a.MESSAGE_LOST, e);
                            },
                        }),
                        e
                    );
                })(),
                eo = function (e, t, n) {
                    var r, i, o;
                    return {
                        volume: null != (r = t.value) ? r : 0.5,
                        capabilities: { can_be_player: !0, can_be_remote_controller: !1, volume_granularity: null != (i = t.granularity) ? i : 16 },
                        info: e,
                        volume_info: { volume: null != (o = t.value) ? o : 0.5, version: null },
                        is_shadow: !!n.isShadow,
                    };
                },
                ea = function () {
                    return (ea =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
                es = (function () {
                    function e(e) {
                        var t = this;
                        Object.defineProperty(this, 'stateController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'connector', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'metricsController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'deviceConfig', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'logger', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'variables', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'updateFullStateMessageRid', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(this, 'isUpdateFullStateCompleted', { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
                            (this.deviceConfig = e.deviceConfig),
                            (this.variables = e.variables),
                            (this.logger = e.logger);
                        var n = (Math.floor(0x225c17d02 * Math.random() + 1).toString() + Math.floor(0x3b9ac9fe * Math.random() + 1).toString()).slice(0, 19);
                        (this.stateController = new M({ deviceConfig: this.deviceConfig })),
                            (this.connector = new ei({
                                config: {
                                    device: this.deviceConfig.info,
                                    oauth: e.oauth,
                                    multiAuthUserId: e.variables.puid,
                                    redirectorConnectionConfig: {
                                        protocol: 'wss://',
                                        host: e.ynisonConnectionConfig.ynisonHost,
                                        path: e.ynisonConnectionConfig.redirectorPath,
                                    },
                                    hubConnectionConfig: { protocol: 'wss://', path: e.ynisonConnectionConfig.hubConnectioPath },
                                    defaultReconnectTimeoutMS: e.ynisonConnectionConfig.reconnectTimeout,
                                    reconnectAttemptsLimit: e.ynisonConnectionConfig.reconnectAttempts,
                                    historyLimit: e.ynisonConnectionConfig.historyLimit,
                                    sessionId: n,
                                },
                            })),
                            (this.metricsController = new ev({
                                transports: e.metricsTransport,
                                sessionId: n,
                                variables: {
                                    get puid() {
                                        return e.variables.puid;
                                    },
                                    get isShadow() {
                                        return e.variables.isShadow;
                                    },
                                    get isActive() {
                                        return t.isActive;
                                    },
                                    get enableDebugMode() {
                                        return e.variables.enableDebugMode;
                                    },
                                },
                            })),
                            this.registerMetrics(),
                            this.connector.on(a.RECEIVE_MESSAGE, this.onMessageReceived.bind(this)),
                            this.stateController.on(r.UPDATED, this.onStateChanged.bind(this), 'WSConnector'),
                            this.connector.state.connectionState.onChange(function (e) {
                                switch (e) {
                                    case o.CONNECTED:
                                        t.onConnected();
                                        break;
                                    case o.DISCONNECTED:
                                        t.onDisconnected();
                                }
                            }),
                            this.connector.on(a.CONNECTION_ERROR, function (e) {
                                t.logger.error('[Ynison] Connection error: '.concat(e.error.message), ea({}, e));
                            }),
                            this.connector.on(a.HUB_MESSAGE_PARSING_ERROR, function (e) {
                                t.logger.error('[Ynison] Hub message error: '.concat(e.error.message), ea({}, e));
                            }),
                            this.connector.on(a.HUB_ERROR, function (e) {
                                t.logger.error('[Ynison] Hub error: '.concat(e.error.message), ea({}, e));
                            });
                    }
                    return (
                        Object.defineProperty(e.prototype, 'isActive', {
                            get: function () {
                                var e = this.stateController.currentState.active_device_id_optional;
                                return !!(e && e === this.deviceConfig.info.device_id);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isShadow', {
                            get: function () {
                                var e;
                                return null != (e = this.variables.isShadow) && e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'registerMetrics', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.connector.on(a.NEW_CONNECTION_ATTEMPT, this.metricsController.onNewConnectionAttempt.bind(this.metricsController)),
                                    this.connector.on(a.CONNECTED, this.metricsController.onConnected.bind(this.metricsController)),
                                    this.connector.on(a.CONNECTION_ERROR, this.metricsController.onConnectionError.bind(this.metricsController)),
                                    this.connector.on(a.HUB_ERROR, this.metricsController.onHubError.bind(this.metricsController)),
                                    this.connector.on(a.HUB_MESSAGE_PARSING_ERROR, this.metricsController.onHubMessageParsingError.bind(this.metricsController)),
                                    this.connector.on(a.DISCONNECTED, this.metricsController.onDisconnected.bind(this.metricsController)),
                                    this.connector.on(a.MESSAGE_SENT, this.metricsController.onMessageSent.bind(this.metricsController)),
                                    this.connector.on(a.MESSAGE_LOST, this.metricsController.onMessageLost.bind(this.metricsController)),
                                    this.stateController.on(r.PARSING_ERROR, this.metricsController.onYnisonStateParsingError.bind(this.metricsController));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onMessageReceived', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                const selfDedup = e.rawData.player_state.status.version.device_id === this.deviceConfig.info.device_id;
                                if (!selfDedup) {
                                    console.debug('[WSConnector] Received message from hub', e.rawData);
                                    electronBridgeModule.sendYnisonState({ rawData: e.rawData });
                                }
                                var t = this.getMessageContext(e);
                                if ((this.updateFullStateCompletion(t), !this.shouldIgnoreMessage(t))) {
                                    var n = this.processMessageState(e, t);
                                    this.stateController.updateState(n);
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getMessageContext', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return {
                                    isCurrentUpdateFullStateMessage: e.rawData.rid === this.updateFullStateMessageRid,
                                    deviceTransition: this.getDeviceStateTransition(e),
                                };
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getDeviceStateTransition', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.rawData.active_device_id_optional === this.deviceConfig.info.device_id,
                                    n = e.rawData.active_device_id_optional !== this.stateController.currentState.active_device_id_optional;
                                return {
                                    willBecomeActive: !this.isActive && t,
                                    willBecomePassive: this.isActive && !t,
                                    willStayPassive: !this.isActive && !t,
                                    isAnotherActiveDeviceUpdated: !this.isActive && !t && n,
                                };
                            },
                        }),
                        Object.defineProperty(e.prototype, 'shouldIgnoreMessage', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return !e.deviceTransition.isAnotherActiveDeviceUpdated && this.shouldIgnorePlayerStateUpdate(e);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'shouldIgnorePlayerStateUpdate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return (
                                    !this.isUpdateFullStateCompleted ||
                                    (e.isCurrentUpdateFullStateMessage
                                        ? !1 === this.stateController.currentState.player_state.status.paused
                                        : this.variables.isShadow || e.deviceTransition.willStayPassive)
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'processMessageState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = e.rawData;
                                return (this.isActive || (n = this.overrideIncomingDeviceVolume(n)), this.shouldIgnorePlayerStateUpdate(t))
                                    ? this.createActiveDeviceStateUpdate(n)
                                    : this.shouldOverridePauseState(t)
                                      ? this.createPausedStateUpdate(n)
                                      : { newState: n, trigger: 'WSConnector' };
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateFullStateCompletion', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.isUpdateFullStateCompleted = this.isUpdateFullStateCompleted || e.isCurrentUpdateFullStateMessage;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'shouldOverridePauseState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return (e.isCurrentUpdateFullStateMessage && e.deviceTransition.willStayPassive) || e.deviceTransition.willBecomePassive;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'createPausedStateUpdate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = S(e);
                                return (
                                    (t.player_state.status.paused = !0),
                                    (t.player_state.status.version = C(this.deviceConfig.info.device_id, 0)),
                                    { newState: t, skipVersionCompare: !0, trigger: 'WSConnector' }
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'overrideIncomingDeviceVolume', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t,
                                    n,
                                    r,
                                    i,
                                    o,
                                    a = this,
                                    s = S(e),
                                    l = this.stateController.currentState,
                                    c = s.devices.find(function (e) {
                                        var t;
                                        return (null == (t = e.info) ? void 0 : t.device_id) === a.deviceConfig.info.device_id;
                                    }),
                                    u = l.devices.find(function (e) {
                                        var t;
                                        return (null == (t = e.info) ? void 0 : t.device_id) === a.deviceConfig.info.device_id;
                                    });
                                if (c) {
                                    var p = {
                                        volume:
                                            null !=
                                            (r = null != (n = null == (t = null == u ? void 0 : u.volume_info) ? void 0 : t.volume) ? n : this.deviceConfig.defaultVolume)
                                                ? r
                                                : 0.5,
                                        version: null != (o = null == (i = null == u ? void 0 : u.volume_info) ? void 0 : i.version) ? o : null,
                                    };
                                    (c.volume = p.volume), (c.volume_info = p);
                                }
                                return s;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'createActiveDeviceStateUpdate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = S(e);
                                return (
                                    (t.player_state = S(this.stateController.currentState.player_state)), { newState: t, skipVersionCompare: !0, trigger: 'WSConnector' }
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'processOutgoingPlayerState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return ea(ea({}, e), { status: this.processOutgoingPlayerStatus(e.status) });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'processOutgoingPlayerStatus', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this.variables.isShadow ? ea(ea({}, e), { paused: !0 }) : e;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'createOutgoingDeviceData', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e,
                                    t,
                                    n = this,
                                    r = this.stateController.currentState.devices.find(function (e) {
                                        var t;
                                        return (null == (t = e.info) ? void 0 : t.device_id) === n.deviceConfig.info.device_id;
                                    });
                                return eo(
                                    this.deviceConfig.info,
                                    {
                                        value: null != (t = null == (e = null == r ? void 0 : r.volume_info) ? void 0 : e.volume) ? t : this.deviceConfig.defaultVolume,
                                        granularity: this.deviceConfig.volumeGranularity,
                                    },
                                    { isShadow: this.variables.isShadow },
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onStateChanged', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t,
                                    n,
                                    r = !!(this.stateController.currentState.active_device_id_optional && !this.isActive);
                                this.isUpdateFullStateCompleted &&
                                    !r &&
                                    ((t = e.diff).player_state && t.player_state.player_queue
                                        ? this.connector.updatePlayerState({ player_state: this.processOutgoingPlayerState(e.state.player_state) })
                                        : (n = e.diff).player_state &&
                                          n.player_state.status &&
                                          this.connector.updatePlayingStatus({ playing_status: this.processOutgoingPlayerStatus(e.state.player_state.status) }),
                                    e.diff.deviceVolume &&
                                        this.isActive &&
                                        this.connector.updateVolumeInfo({ device_id: this.deviceConfig.info.device_id, volume_info: e.diff.deviceVolume }));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onConnected', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e;
                                this.updateFullStateMessageRid = this.connector.updateFullState(
                                    ((e = this.createOutgoingDeviceData()),
                                    {
                                        player_state: this.processOutgoingPlayerState(this.stateController.currentState.player_state),
                                        device: e,
                                        is_currently_active: (this.variables.isShadow, !1),
                                        sync_state_from_eov_optional: null,
                                    }),
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onDisconnected', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                (this.isUpdateFullStateCompleted = !1), (this.updateFullStateMessageRid = null);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'interceptActivity', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                void 0 === e && (e = m.INTERCEPT_EAGER),
                                    this.connector.updatePlayerState({ player_state: this.stateController.currentState.player_state }, { activity_interception_type: e });
                                var t = this.stateController.currentState;
                                (t.active_device_id_optional = this.deviceConfig.info.device_id),
                                    this.stateController.updateState({ newState: t, trigger: 'WSConnector' });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'becomePassive', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.connector.updateActiveDevice({ device_id_optional: null });
                                var e = this.stateController.currentState;
                                (e.active_device_id_optional = null),
                                    (e.player_state.status.paused = !0),
                                    (e.player_state.status.version = C(this.deviceConfig.info.device_id)),
                                    this.stateController.updateState({ newState: e, trigger: 'WSConnector' });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateVariables', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                Object.assign(this.variables, e);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateDeviceInfo', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                Object.assign(this.deviceConfig.info, e);
                            },
                        }),
                        e
                    );
                })(),
                el = function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: s(0), throw: s(1), return: s(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function () {
                                return this;
                            }),
                        o
                    );
                    function s(s) {
                        return function (l) {
                            var c = [s, l];
                            if (n) throw TypeError('Generator is already executing.');
                            for (; o && ((o = 0), c[0] && (a = 0)), a; )
                                try {
                                    if (
                                        ((n = 1),
                                        r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done)
                                    )
                                        return i;
                                    switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                                        case 0:
                                        case 1:
                                            i = c;
                                            break;
                                        case 4:
                                            return a.label++, { value: c[1], done: !1 };
                                        case 5:
                                            a.label++, (r = c[1]), (c = [0]);
                                            continue;
                                        case 7:
                                            (c = a.ops.pop()), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === c[0] && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                                                a.label = c[1];
                                                break;
                                            }
                                            if (6 === c[0] && a.label < i[1]) {
                                                (a.label = i[1]), (i = c);
                                                break;
                                            }
                                            if (i && a.label < i[2]) {
                                                (a.label = i[2]), a.ops.push(c);
                                                break;
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    c = t.call(e, a);
                                } catch (e) {
                                    (c = [6, e]), (r = 0);
                                } finally {
                                    n = i = 0;
                                }
                            if (5 & c[0]) throw c[1];
                            return { value: c[0] ? c[1] : void 0, done: !0 };
                        };
                    }
                },
                ec = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'transport', { enumerable: !0, configurable: !0, writable: !0, value: e });
                    }
                    return (
                        Object.defineProperty(e.prototype, 'send', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t, n, r, i;
                                return (
                                    (t = this),
                                    (n = void 0),
                                    (r = void 0),
                                    (i = function () {
                                        return el(this, function (t) {
                                            return [2, this.transport.send(e, { service: 'Ynison' })];
                                        });
                                    }),
                                    new (r || (r = Promise))(function (e, o) {
                                        function a(e) {
                                            try {
                                                l(i.next(e));
                                            } catch (e) {
                                                o(e);
                                            }
                                        }
                                        function s(e) {
                                            try {
                                                l(i.throw(e));
                                            } catch (e) {
                                                o(e);
                                            }
                                        }
                                        function l(t) {
                                            var n;
                                            t.done
                                                ? e(t.value)
                                                : ((n = t.value) instanceof r
                                                      ? n
                                                      : new r(function (e) {
                                                            e(n);
                                                        })
                                                  ).then(a, s);
                                        }
                                        l((i = i.apply(t, n || [])).next());
                                    })
                                );
                            },
                        }),
                        e
                    );
                })(),
                eu = function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: s(0), throw: s(1), return: s(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function () {
                                return this;
                            }),
                        o
                    );
                    function s(s) {
                        return function (l) {
                            var c = [s, l];
                            if (n) throw TypeError('Generator is already executing.');
                            for (; o && ((o = 0), c[0] && (a = 0)), a; )
                                try {
                                    if (
                                        ((n = 1),
                                        r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done)
                                    )
                                        return i;
                                    switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                                        case 0:
                                        case 1:
                                            i = c;
                                            break;
                                        case 4:
                                            return a.label++, { value: c[1], done: !1 };
                                        case 5:
                                            a.label++, (r = c[1]), (c = [0]);
                                            continue;
                                        case 7:
                                            (c = a.ops.pop()), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === c[0] && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                                                a.label = c[1];
                                                break;
                                            }
                                            if (6 === c[0] && a.label < i[1]) {
                                                (a.label = i[1]), (i = c);
                                                break;
                                            }
                                            if (i && a.label < i[2]) {
                                                (a.label = i[2]), a.ops.push(c);
                                                break;
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    c = t.call(e, a);
                                } catch (e) {
                                    (c = [6, e]), (r = 0);
                                } finally {
                                    n = i = 0;
                                }
                            if (5 & c[0]) throw c[1];
                            return { value: c[0] ? c[1] : void 0, done: !0 };
                        };
                    }
                },
                ep = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'transport', { enumerable: !0, configurable: !0, writable: !0, value: e });
                    }
                    return (
                        Object.defineProperty(e.prototype, 'send', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t, n, r, i;
                                return (
                                    (t = this),
                                    (n = void 0),
                                    (r = void 0),
                                    (i = function () {
                                        return eu(this, function (t) {
                                            return [2, this.transport.send(e, { topLevelParameter: 'tech-metrics' })];
                                        });
                                    }),
                                    new (r || (r = Promise))(function (e, o) {
                                        function a(e) {
                                            try {
                                                l(i.next(e));
                                            } catch (e) {
                                                o(e);
                                            }
                                        }
                                        function s(e) {
                                            try {
                                                l(i.throw(e));
                                            } catch (e) {
                                                o(e);
                                            }
                                        }
                                        function l(t) {
                                            var n;
                                            t.done
                                                ? e(t.value)
                                                : ((n = t.value) instanceof r
                                                      ? n
                                                      : new r(function (e) {
                                                            e(n);
                                                        })
                                                  ).then(a, s);
                                        }
                                        l((i = i.apply(t, n || [])).next());
                                    })
                                );
                            },
                        }),
                        e
                    );
                })();
            !(function (e) {
                (e.YNISON_START = 'YNISON_START'),
                    (e.YNISON_CONNECTED = 'YNISON_CONNECTED'),
                    (e.YNISON_CONNECTING_ERROR = 'YNISON_CONNECTING_ERROR'),
                    (e.YNISON_CLIENT_DISCONNECTED = 'YNISON_CLIENT_DISCONNECTED'),
                    (e.YNISON_EVENT_SENDED = 'YNISON_EVENT_SENDED'),
                    (e.YNISON_EVENT_LOST = 'YNISON_EVENT_LOST'),
                    (e.YNISON_CHANNEL_ERROR = 'YNISON_CHANNEL_ERROR'),
                    (e.YNISON_STATE_ERROR = 'YNISON_STATE_ERROR');
            })(p || (p = {})),
                (function (e) {
                    (e.ACTIVE = 'active'), (e.PASSIVE = 'passive'), (e.SHADOW = 'shadow');
                })(f || (f = {})),
                (function (e) {
                    (e.MOBILE = 'mobile'), (e.WIFI = 'wifi'), (e.UNKNOWN = 'unknown');
                })(d || (d = {})),
                (function (e) {
                    (e.WS = 'other'), (e.IO = 'io'), (e.SERVER = 'server'), (e.OTHER = 'other');
                })(v || (v = {})),
                (function (e) {
                    (e.REDIRECTOR = 'redirector'), (e.HUB = 'hub');
                })(b || (b = {}));
            var ef = [
                    'update_full_state',
                    'update_active_device',
                    'update_playing_status',
                    'update_player_state',
                    'update_player_queue_inject',
                    'update_session_params',
                    'update_volume_info',
                ],
                ed = function () {
                    return (ed =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
                ev = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'transports', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'state', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'variables', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (this.transports = e.transports),
                            (this.variables = e.variables),
                            (this.state = { uuid: e.sessionId });
                    }
                    return (
                        Object.defineProperty(e.prototype, 'onYnisonStateParsingError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.sendEvent({
                                    name: p.YNISON_STATE_ERROR,
                                    data: ed(ed({}, this.getBaseEventPayload()), { errorType: v.OTHER, errorDescription: e.error.message }),
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onNewConnectionAttempt', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                (this.state.connectionStartTimestamp = Date.now()), this.sendEvent({ name: p.YNISON_START, data: this.getBaseEventPayload() });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onConnected', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = 0;
                                this.state.connectionStartTimestamp &&
                                    ((e = Date.now() - this.state.connectionStartTimestamp), delete this.state.connectionStartTimestamp),
                                    this.sendEvent({ name: p.YNISON_CONNECTED, data: ed(ed({}, this.getBaseEventPayload()), { time: e }) });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onConnectionError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                switch (e.destination) {
                                    case c.REDIRECTOR:
                                        this.onRedirectorConnectionError(e);
                                        break;
                                    case c.HUB:
                                        this.onHubConnectionError(e);
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onRedirectorConnectionError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t,
                                    n = e.error.data.redirectorResponse.http_code,
                                    r = e.error.message,
                                    i = null != (t = e.error.data.redirectorResponse.message) ? t : '',
                                    o = v.OTHER;
                                void 0 !== n && (o = v.WS),
                                    this.sendEvent({
                                        name: p.YNISON_CONNECTING_ERROR,
                                        data: ed(ed({}, this.getBaseEventPayload()), {
                                            destination: b.REDIRECTOR,
                                            errorType: o,
                                            code: n,
                                            errorDescription: ''.concat(r, ' ').concat(i),
                                        }),
                                    });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onHubConnectionError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (e.error.data.connectingState === o.CONNECTING)
                                    return void this.sendEvent({
                                        name: p.YNISON_CONNECTING_ERROR,
                                        data: ed(ed({}, this.getBaseEventPayload()), { destination: b.HUB, errorType: v.WS, errorDescription: e.error.message }),
                                    });
                                this.sendEvent({
                                    name: p.YNISON_CHANNEL_ERROR,
                                    data: ed(ed({}, this.getBaseEventPayload()), { errorType: v.WS, errorDescription: e.error.message }),
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onHubError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t,
                                    n = e.error.data.hubResponse.http_code,
                                    r = e.error.message,
                                    i = null != (t = e.error.data.hubResponse.message) ? t : '';
                                this.sendEvent({
                                    name: p.YNISON_CHANNEL_ERROR,
                                    data: ed(ed({}, this.getBaseEventPayload()), { errorType: v.WS, code: n, errorDescription: ''.concat(r, ' ').concat(i) }),
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onHubMessageParsingError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.sendEvent({
                                    name: p.YNISON_STATE_ERROR,
                                    data: ed(ed({}, this.getBaseEventPayload()), { errorType: v.OTHER, errorDescription: e.error.message }),
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onDisconnected', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                switch (e.trigger) {
                                    case l.CLIENT:
                                        return this.onDisconnectedByClient(e.event);
                                    case l.SERVER:
                                        return this.onDisconnectedByServer(e.event);
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onDisconnectedByServer', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.sendEvent({
                                    name: p.YNISON_CHANNEL_ERROR,
                                    data: ed(ed({}, this.getBaseEventPayload()), { errorType: v.SERVER, code: e.code, errorDescription: e.reason }),
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onDisconnectedByClient', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.sendEvent({ name: p.YNISON_CLIENT_DISCONNECTED, data: ed(ed({}, this.getBaseEventPayload()), { reason: e.reason }) });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onMessageSent', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.getMessageType(e);
                                t && this.sendEvent({ name: p.YNISON_EVENT_SENDED, data: ed(ed({}, this.getBaseEventPayload()), { type: t }) });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onMessageLost', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.getMessageType(e);
                                t && this.sendEvent({ name: p.YNISON_EVENT_LOST, data: ed(ed({}, this.getBaseEventPayload()), { type: t }) });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getMessageType', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return Object.keys(e).find(function (e) {
                                    return ef.includes(e);
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getBaseEventPayload', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = f.PASSIVE;
                                return (
                                    this.variables.isShadow ? (e = f.SHADOW) : this.variables.isActive && (e = f.ACTIVE),
                                    { uuid: this.state.uuid, puid: String(this.variables.puid), mode: e, connectionType: d.UNKNOWN }
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'logEvent', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.event,
                                    n = e.eventName;
                                this.variables.enableDebugMode &&
                                    (t
                                        ? (console.group(''.concat(null != n ? n : 'Untitled Log Metrics Event Info')),
                                          console.table(t.data),
                                          console.group('Raw event'),
                                          console.dir(t),
                                          console.groupEnd(),
                                          console.groupEnd())
                                        : console.error('Event in logEvent method not provided'));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'sendEvent', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.logEvent({ event: e, eventName: e.name }),
                                    this.transports.forEach(function (t) {
                                        t.send(e);
                                    });
                            },
                        }),
                        e
                    );
                })();
        },
        24269: (e, t, n) => {
            n.d(t, { y: () => a });
            var r = n(6493),
                i = n(71942),
                o = (function (e) {
                    return (e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e;
                })({});
            let a = () => ''.concat(o.DESKTOP).concat((0, i.t)((0, r.u)()));
        },
        34720: (e, t, n) => {
            n.d(t, { c: () => a });
            var r = n(96559),
                i = n(77220),
                o = n(53676);
            class a extends i.X {
                async progressSync(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/sync',
                            this.createHttpOptions({
                                timeoutKey: 'progressSync',
                                params: e,
                                json: { lastSyncTimestamp: e.lastSyncTimestamp, trackStreams: e.trackStreams },
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumFinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-album-finished',
                            this.createHttpOptions({
                                timeoutKey: 'markAlbumFinished',
                                params: e,
                                searchParams: (0, o.P)({ albumId: e.albumId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumUnfinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-album-unfinished',
                            this.createHttpOptions({
                                timeoutKey: 'markAlbumUnfinished',
                                params: e,
                                searchParams: (0, o.P)({ albumId: e.albumId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markFinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-finished',
                            this.createHttpOptions({
                                timeoutKey: 'markFinished',
                                params: e,
                                searchParams: (0, o.P)({ trackId: e.trackId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markUnfinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-unfinished',
                            this.createHttpOptions({
                                timeoutKey: 'markUnfinished',
                                params: e,
                                searchParams: (0, o.P)({ trackId: e.trackId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async progressSaveCurrent(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/save-current',
                            this.createHttpOptions({
                                timeoutKey: 'progressSaveCurrent',
                                params: e,
                                searchParams: (0, o.P)({
                                    trackId: e.trackId,
                                    positionSec: e.positionSec,
                                    trackLengthSec: e.trackLengthSec,
                                    finished: e.finished,
                                    timestamp: e.timestamp,
                                }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    super(e, t), (0, r._)(this, 'httpClient', void 0), (0, r._)(this, 'config', void 0), (this.httpClient = e), (this.config = t);
                }
            }
        },
        65630: (e, t, n) => {
            n.d(t, { _: () => o });
            var r = n(37538),
                i = n(24269);
            let o = () => {
                let e,
                    t = (0, r.H)() || '1.0.0';
                return (e = (0, i.y)()), ''.concat(e, '/').concat(t);
            };
        },
    },
]);
