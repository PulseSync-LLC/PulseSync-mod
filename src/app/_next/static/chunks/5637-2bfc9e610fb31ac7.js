'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5637],
    {
        75637: (e, t, n) => {
            (n.d(t, {
                Xt: () => d,
                iv: () => v,
                bq: () => o,
                O5: () => P,
                si: () => i,
                az: () => l,
                lv: () => c,
                XF: () => f,
                Fz: () => u,
                Ye: () => p,
                p$: () => r,
                Jd: () => em,
                gv: () => eT,
                qP: () => eS,
                zT: () => eN,
                F4: () => M,
                fD: () => I,
            }),
                (function (e) {
                    ((e.UPDATED = 'UPDATED'), (e.PARSING_ERROR = 'PARSING_ERROR'));
                })(r || (r = {})));
            var r,
                o,
                i,
                a,
                s,
                c,
                l,
                u,
                f,
                p,
                d,
                b,
                h,
                v,
                y,
                E,
                _,
                O,
                g,
                m,
                C,
                S,
                R,
                N,
                P = 1;
            (!(function (e) {
                ((e.UNSPECIFIED = 'UNSPECIFIED'),
                    (e.WEB = 'WEB'),
                    (e.ANDROID = 'ANDROID'),
                    (e.IOS = 'IOS'),
                    (e.SMART_SPEAKER = 'SMART_SPEAKER'),
                    (e.WEB_TV = 'WEB_TV'),
                    (e.ANDROID_TV = 'ANDROID_TV'),
                    (e.APPLE_TV = 'APPLE_TV'),
                    (e.ANDROID_WEAR = 'ANDROID_WEAR'),
                    (e.WEB_DESKTOP = 'WEB_DESKTOP'),
                    (e.UNRECOGNIZED = 'UNRECOGNIZED'));
            })(o || (o = {})),
                (function (e) {
                    ((e.UNSPECIFIED = 'UNSPECIFIED'),
                        (e.TRACK = 'TRACK'),
                        (e.LOCAL_TRACK = 'LOCAL_TRACK'),
                        (e.INFINITE = 'INFINITE'),
                        (e.VIDEO_CLIP = 'VIDEO_CLIP'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(i || (i = {})),
                (function (e) {
                    ((e.UNSPECIFIED = 'UNSPECIFIED'),
                        (e.RECOMMENDED = 'RECOMMENDED'),
                        (e.ON_DEMAND = 'ON_DEMAND'),
                        (e.SEARCH = 'SEARCH'),
                        (e.ARTIST = 'ARTIST'),
                        (e.OWN = 'OWN'),
                        (e.EDITORIAL_CHOICE = 'EDITORIAL_CHOICE'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(a || (a = {})),
                (function (e) {
                    ((e.UNSPECIFIED = 'UNSPECIFIED'), (e.ALICE_SHOT = 'ALICE_SHOT'), (e.AD = 'AD'), (e.PREROLL = 'PREROLL'), (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(s || (s = {})),
                (function (e) {
                    ((e.UNSPECIFIED = 'UNSPECIFIED'),
                        (e.ARTIST = 'ARTIST'),
                        (e.PLAYLIST = 'PLAYLIST'),
                        (e.ALBUM = 'ALBUM'),
                        (e.RADIO = 'RADIO'),
                        (e.VARIOUS = 'VARIOUS'),
                        (e.GENERATIVE = 'GENERATIVE'),
                        (e.FM_RADIO = 'FM_RADIO'),
                        (e.VIDEO_WAVE = 'VIDEO_WAVE'),
                        (e.LOCAL_TRACKS = 'LOCAL_TRACKS'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(c || (c = {})),
                (function (e) {
                    ((e.BASED_ON_ENTITY_BY_DEFAULT = 'BASED_ON_ENTITY_BY_DEFAULT'),
                        (e.USER_TRACKS = 'USER_TRACKS'),
                        (e.DOWNLOADED_TRACKS = 'DOWNLOADED_TRACKS'),
                        (e.SEARCH = 'SEARCH'),
                        (e.MUSIC_HISTORY = 'MUSIC_HISTORY'),
                        (e.MUSIC_HISTORY_SEARCH = 'MUSIC_HISTORY_SEARCH'),
                        (e.ARTIST_MY_COLLECTION = 'ARTIST_MY_COLLECTION'),
                        (e.ARTIST_FAMILIAR_FROM_WAVE = 'ARTIST_FAMILIAR_FROM_WAVE'),
                        (e.SIMILAR_TRACKS = 'SIMILAR_TRACKS'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(l || (l = {})),
                (function (e) {
                    ((e.ONLINE_BY_DEFAULT = 'ONLINE_BY_DEFAULT'), (e.OFFLINE = 'OFFLINE'), (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(u || (u = {})),
                (function (e) {
                    ((e.UNKNOWN = 'UNKNOWN'),
                        (e.SINGLE = 'SINGLE'),
                        (e.COMPILATION = 'COMPILATION'),
                        (e.PODCAST = 'PODCAST'),
                        (e.FAIRY_TALE = 'FAIRY_TALE'),
                        (e.AUDIOBOOK = 'AUDIOBOOK'),
                        (e.VIDEO_SINGLE = 'VIDEO_SINGLE'),
                        (e.VIDEO_ALBUM = 'VIDEO_ALBUM'),
                        (e.RADIO = 'RADIO'),
                        (e.ASMR = 'ASMR'),
                        (e.NOISE = 'NOISE'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(f || (f = {})),
                (function (e) {
                    ((e.UNSPECIFIED = 'UNSPECIFIED'), (e.NONE = 'NONE'), (e.ONE = 'ONE'), (e.ALL = 'ALL'), (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(p || (p = {})),
                (function (e) {
                    ((e.UNSPECIFIED_TYPE = 'UNSPECIFIED_TYPE'),
                        (e.STANDARD = 'STANDARD'),
                        (e.PRIVATE_GROUP = 'PRIVATE_GROUP'),
                        (e.SPECTATOR = 'SPECTATOR'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(d || (d = {})),
                (function (e) {
                    ((e.DO_NOT_INTERCEPT_BY_DEFAULT = 'DO_NOT_INTERCEPT_BY_DEFAULT'),
                        (e.INTERCEPT_IF_NO_ONE_ACTIVE = 'INTERCEPT_IF_NO_ONE_ACTIVE'),
                        (e.INTERCEPT_EAGER = 'INTERCEPT_EAGER'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(b || (b = {})));
            var I = function (e, t) {
                return { device_id: e, version: Math.floor(0x8000000000000000 * Math.random()) + 0, timestamp_ms: void 0 !== t ? t : Date.now() };
            };
            function T(e) {
                return JSON.parse(JSON.stringify(e));
            }
            function w(e) {
                return e instanceof Error ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause } : { data: e };
            }
            var D = n(21217),
                A = (function () {
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
                        (e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r())));
                    };
                })(),
                j = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        A(t, e),
                        Object.defineProperty(t.prototype, 'on', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t, n, r) {
                                return (e.prototype.on.call(this, t, n, r), this);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'once', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t, n, r) {
                                return (e.prototype.once.call(this, t, n, r), this);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'emit', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t, n, r) {
                                return (e.prototype.emit.call(this, t, n, r), this);
                            },
                        }),
                        Object.defineProperty(t.prototype, 'off', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t, n) {
                                return (e.prototype.off.call(this, t, n), this);
                            },
                        }),
                        t
                    );
                })(D.TinyEmitter);
            function k(e) {
                var t = I(e, 0);
                return {
                    player_state: {
                        player_queue: {
                            current_playable_index: -1,
                            entity_id: '',
                            entity_type: c.VARIOUS,
                            playable_list: [],
                            options: { repeat_mode: p.NONE },
                            shuffle_optional: null,
                            entity_context: l.BASED_ON_ENTITY_BY_DEFAULT,
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
            var M = function (e, t) {
                    return Number((Math.round(e * t) / t).toFixed(4));
                },
                U = n(36432);
            function L(e, t, n) {
                return (void 0 === e && (e = !1), !!e || !t || !n || Number(t.timestamp_ms) < Number(n.timestamp_ms));
            }
            var H = function () {
                    return (H =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                G = (function () {
                    function e(e) {
                        (Object.defineProperty(this, 'state', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'prevState', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'diff', { enumerable: !0, configurable: !0, writable: !0, value: {} }),
                            Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'diffCalculators', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'lastActiveRemoteControllerDevice', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'onlineRemoteControllerDevice', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'emitter', { enumerable: !0, configurable: !0, writable: !0, value: new j() }),
                            (this.options = e),
                            (this.state = k(e.deviceConfig.info.device_id)),
                            (this.prevState = k(e.deviceConfig.info.device_id)),
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
                            }));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'on', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, n) {
                                var r = this,
                                    o = function (e, n) {
                                        (this.trigger && this.trigger === (null == n ? void 0 : n.trigger)) || t(e);
                                    };
                                return (
                                    this.emitter.on(e, o, { trigger: n }),
                                    function () {
                                        r.emitter.off(e, o);
                                    }
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'currentState', {
                            get: function () {
                                return T(this.state);
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
                                return T({ state: this.state, prevState: this.prevState, diff: this.diff, remoteControllerDevice: this.remoteControllerDevice });
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
                                    for (var o = e.isSetNewState; n.length > 0;)
                                        for (var i = n.pop(), a = 0, s = Object.keys(i); a < s.length; a++) {
                                            var c = i[s[a]];
                                            'function' == typeof c ? c(e) : n.push(c);
                                        }
                                    var l = Object.keys(this.diff);
                                    if ((void 0 === o || o) && l.length) {
                                        var u = T(this.state);
                                        (l.forEach(function (n) {
                                            (n in e.newState || n in t.state) && (u[n] = e.newState[n]);
                                        }),
                                            (this.prevState = T(this.state)),
                                            (this.state = u));
                                    }
                                    this.updateLastRemoteControllerDevice();
                                    var f = H(H({}, this.fullState), { options: e });
                                    this.emitter.emit(r.UPDATED, f, { trigger: e.trigger });
                                } catch (e) {
                                    var p = new U.t('YnisonStateController. Parsing error', { cause: w(e) });
                                    this.emitter.emit(r.PARSING_ERROR, { error: p });
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
                                    o = this.state.devices.find(function (e) {
                                        var n;
                                        return (null == (n = e.info) ? void 0 : n.device_id) === t.options.deviceConfig.info.device_id;
                                    }),
                                    i = n.devices.find(function (e) {
                                        var n;
                                        return (null == (n = e.info) ? void 0 : n.device_id) === t.options.deviceConfig.info.device_id;
                                    }),
                                    a = (function (e, t, n) {
                                        if (!t || !n) return { isVolumeChanged: !1, isNewVersion: !1 };
                                        var r = t.volume_info,
                                            o = n.volume_info,
                                            i = L(e, r.version, o.version);
                                        return {
                                            isVolumeChanged: M(r.volume, t.capabilities.volume_granularity) !== M(o.volume, n.capabilities.volume_granularity),
                                            isNewVersion: i,
                                        };
                                    })(void 0 !== r && r, o, i),
                                    s = a.isVolumeChanged,
                                    c = a.isNewVersion;
                                s && c && i && (this.diff.deviceVolume = i.volume_info);
                                var l = (function (e, t) {
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
                                            var o = n(t[r]);
                                            if ('object' == typeof o) return o.value;
                                        }
                                        return { isAnyoneConnectionChanged: !1 };
                                    })(this.state.devices, n.devices),
                                    u = l.isAnyoneConnectionChanged,
                                    f = l.changedConnectionStatusDevice;
                                (f && (this.diff.changedConnectionStatusDevice = f), ((s && c) || u) && (this.diff.devices = n.devices));
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
                                    o = t.version,
                                    i = this.state.player_state.player_queue,
                                    a = i.entity_id;
                                L(void 0 !== n && n, i.version, o) &&
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
                                    o = e.skipVersionCompare,
                                    i = this.state.player_state.player_queue,
                                    a = i.entity_type;
                                L(void 0 !== o && o, i.version, r) &&
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
                                    o = t.current_playable_index,
                                    i = t.version,
                                    a = this.state.player_state.player_queue,
                                    s = a.entity_id,
                                    c = a.current_playable_index;
                                L(void 0 !== n && n, a.version, i) &&
                                    s === r &&
                                    c !== o &&
                                    (this.initPlayerState(!0, !1),
                                    this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.current_playable_index = o));
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
                                    o = t.version,
                                    i = this.state.player_state.player_queue,
                                    a = i.playable_list,
                                    s = L(void 0 !== n && n, i.version, o),
                                    c = (function (e, t) {
                                        var n, r;
                                        if (e.length === t.length) {
                                            for (var o = e.length, i = 0; i < o; i++)
                                                if (t[i] && (null == (n = e[i]) ? void 0 : n.playable_id) !== (null == (r = t[i]) ? void 0 : r.playable_id)) return !1;
                                            return !0;
                                        }
                                        return !1;
                                    })(a, r);
                                s &&
                                    !c &&
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
                                    o = e.skipVersionCompare,
                                    i = this.state.player_state.player_queue,
                                    a = i.shuffle_optional,
                                    s = L(void 0 !== o && o, i.version, r),
                                    c = (function (e, t) {
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
                                    !c &&
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
                                    o = e.skipVersionCompare,
                                    i = n.repeat_mode,
                                    a = this.state.player_state.player_queue,
                                    s = a.options,
                                    c = a.version,
                                    l = s.repeat_mode;
                                L(void 0 !== o && o, c, r) &&
                                    l !== i &&
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
                                    o = e.skipVersionCompare,
                                    i = r.progress_ms,
                                    a = r.version,
                                    s = this.state.player_state.status,
                                    c = s.progress_ms,
                                    l = L(void 0 !== o && o, s.version, a),
                                    u = (t = Number(i)) !== (n = Number(c)) && (n < 1500 || Math.abs(t - n) > P);
                                l &&
                                    u &&
                                    (this.initPlayerState(!1, !0),
                                    this.diff.player_state && this.diff.player_state.status && (this.diff.player_state.status.progress_ms = i));
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
                                    o = e.skipVersionCompare,
                                    i = this.state.player_state.status,
                                    a = i.playback_speed;
                                L(void 0 !== o && o, i.version, r) &&
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
                                    o = t.version,
                                    i = this.state.player_state.status,
                                    a = i.paused;
                                L(void 0 !== n && n, i.version, o) &&
                                    a !== r &&
                                    (this.initPlayerState(!1, !0), this.diff.player_state && this.diff.player_state.status && (this.diff.player_state.status.paused = r));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'initPlayerState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                (this.diff.player_state || (this.diff.player_state = {}),
                                    e && !this.diff.player_state.player_queue && (this.diff.player_state.player_queue = {}),
                                    t && !this.diff.player_state.status && (this.diff.player_state.status = {}));
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
                                    o = this.state.active_device_id_optional,
                                    i = this.state.devices.find(function (e) {
                                        var t;
                                        return (null == (t = e.info) ? void 0 : t.device_id) === o;
                                    }),
                                    a = [this.state.player_state.player_queue.version, this.state.player_state.status.version];
                                (null == (e = null == i ? void 0 : i.volume_info) ? void 0 : e.version) &&
                                    a.push(null == (t = null == i ? void 0 : i.volume_info) ? void 0 : t.version);
                                var s = a
                                    .sort(function (e, t) {
                                        return t.timestamp_ms - e.timestamp_ms;
                                    })
                                    .find(function (e) {
                                        if (e.device_id === r || 0 === e.timestamp_ms) return !1;
                                        var t,
                                            o = n.state.devices.find(function (t) {
                                                var n, r;
                                                return (
                                                    (null == (n = t.info) ? void 0 : n.device_id) === e.device_id &&
                                                    (null == (r = t.capabilities) ? void 0 : r.can_be_remote_controller)
                                                );
                                            });
                                        return !!(o && (null == (t = null == o ? void 0 : o.capabilities) ? void 0 : t.can_be_remote_controller));
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
                                for (var e, t, n, r, o, i, a = 0, s = this.state.devices; a < s.length; a++) {
                                    var c = s[a];
                                    if (!c.is_offline && (null == (e = c.capabilities) ? void 0 : e.can_be_remote_controller)) {
                                        if (
                                            this.lastActiveRemoteControllerDevice &&
                                            (null == (t = c.info) ? void 0 : t.device_id) ===
                                                (null == (n = this.lastActiveRemoteControllerDevice.info) ? void 0 : n.device_id)
                                        )
                                            return c;
                                        (this.onlineRemoteControllerDevice &&
                                            (null == (r = c.info) ? void 0 : r.device_id) ===
                                                (null == (o = this.onlineRemoteControllerDevice.info) ? void 0 : o.device_id) &&
                                            (i = c),
                                            i || (i = c));
                                    }
                                }
                                return i;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateLastRemoteControllerDevice', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this.getLastActiveRemoteControllerDevice();
                                (e ? (this.onlineRemoteControllerDevice = void 0) : (this.onlineRemoteControllerDevice = this.getOnlineRemoteControllerDevice()),
                                    (this.lastActiveRemoteControllerDevice = e));
                            },
                        }),
                        e
                    );
                })();
            (!(function (e) {
                ((e.PRODUCTION = 'ynison.music.yandex.ru'), (e.QA = 'qa.ynison.music.yandex.ru'));
            })(h || (h = {})),
                (function (e) {
                    ((e.CONNECTING = 'CONNECTING'),
                        (e.CONNECTED = 'CONNECTED'),
                        (e.DISCONNECTED = 'DISCONNECTED'),
                        (e.WAITING_FOR_RECONNECT = 'WAITING_FOR_RECONNECT'),
                        (e.READY_TO_RECONNECT = 'READY_TO_RECONNECT'));
                })(v || (v = {})),
                (function (e) {
                    ((e.RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'),
                        (e.NEW_CONNECTION_ATTEMPT = 'NEW_CONNECTION_ATTEMPT'),
                        (e.CONNECTED = 'CONNECTED'),
                        (e.CONNECTION_ERROR = 'CONNECTION_ERROR'),
                        (e.HUB_ERROR = 'HUB_ERROR'),
                        (e.HUB_MESSAGE_PARSING_ERROR = 'HUB_MESSAGE_PARSING_ERROR'),
                        (e.DISCONNECTED = 'DISCONNECTED'),
                        (e.MESSAGE_SENT = 'MESSAGE_SENT'),
                        (e.MESSAGE_LOST = 'MESSAGE_LOST'));
                })(y || (y = {})),
                (function (e) {
                    ((e.ynisonBackoffMillis = 'ynison-backoff-millis'),
                        (e.ynisonErrorCode = 'ynison-error-code'),
                        (e.ynisonGoAwayForSeconds = 'ynison-go-away-for-seconds'));
                })(E || (E = {})),
                (function (e) {
                    ((e.CLIENT = 'CLIENT'), (e.SERVER = 'SERVER'));
                })(_ || (_ = {})),
                (function (e) {
                    ((e.REDIRECTOR = 'REDIRECTOR'), (e.HUB = 'HUB'));
                })(O || (O = {})));
            var V = (function () {
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
                        (e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r())));
                    };
                })(),
                q = function () {
                    return (q =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                F = function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                            0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                    return n;
                },
                B = (function (e) {
                    function t(n, r) {
                        void 0 === r && (r = {});
                        var o = this,
                            i = r.code,
                            a = F(r, ['code']);
                        return (
                            Object.defineProperty((o = e.call(this, n, q({ code: void 0 === i ? 'E_HUB_MESSAGE_EXCEPTION' : i }, a)) || this), 'name', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: 'HubMessageException',
                            }),
                            Object.setPrototypeOf(o, t.prototype),
                            o
                        );
                    }
                    return (V(t, e), t);
                })(U.t),
                Y = n(6139),
                W = function (e) {
                    (Object.defineProperty(this, 'redirectorResponse', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'connectionState', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.redirectorResponse = new Y.cJ(e.redirectorResponse)),
                        (this.connectionState = new Y.cJ(e.connectionState)));
                };
            !(function (e) {
                ((e.ynisonDeviceId = 'Ynison-Device-Id'),
                    (e.ynisonRedirectTicket = 'Ynison-Redirect-Ticket'),
                    (e.ynisonSessionId = 'Ynison-Session-Id'),
                    (e.ynisonDeviceInfo = 'Ynison-Device-Info'),
                    (e.multiAuthUserId = 'X-Yandex-Music-Multi-Auth-User-Id'));
            })(g || (g = {}));
            var x = (function () {
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
                        (e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r())));
                    };
                })(),
                K = function () {
                    return (K =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                Z = function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                            0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                    return n;
                },
                J = (function (e) {
                    function t(n, r) {
                        void 0 === r && (r = {});
                        var o = this,
                            i = r.code,
                            a = Z(r, ['code']);
                        return (
                            Object.defineProperty((o = e.call(this, n, K({ code: void 0 === i ? 'E_REDIRECTOR_EXCEPTION' : i }, a)) || this), 'name', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: 'RedirectorException',
                            }),
                            Object.setPrototypeOf(o, t.prototype),
                            o
                        );
                    }
                    return (x(t, e), t);
                })(U.t);
            function z(e) {
                var t;
                switch (e) {
                    case o.WEB:
                        t = 1;
                        break;
                    case o.WEB_TV:
                        t = 5;
                        break;
                    default:
                        t = 1;
                }
                return t;
            }
            function X(e) {
                var t,
                    n = e.device_id,
                    r = e.app_name,
                    o = e.app_version,
                    i = z(e.type);
                return (((t = {})[g.ynisonDeviceId] = n), (t[g.ynisonDeviceInfo] = JSON.stringify({ app_name: r, app_version: o, type: i })), t);
            }
            var Q = function (e, t) {
                    var n,
                        r,
                        o,
                        i,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & o[0]) throw o[1];
                                return o[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (i = { next: s(0), throw: s(1), return: s(2) }),
                        'function' == typeof Symbol &&
                            (i[Symbol.iterator] = function () {
                                return this;
                            }),
                        i
                    );
                    function s(s) {
                        return function (c) {
                            var l = [s, c];
                            if (n) throw TypeError('Generator is already executing.');
                            for (; i && ((i = 0), l[0] && (a = 0)), a;)
                                try {
                                    if (
                                        ((n = 1),
                                        r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done)
                                    )
                                        return o;
                                    switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                                        case 0:
                                        case 1:
                                            o = l;
                                            break;
                                        case 4:
                                            return (a.label++, { value: l[1], done: !1 });
                                        case 5:
                                            (a.label++, (r = l[1]), (l = [0]));
                                            continue;
                                        case 7:
                                            ((l = a.ops.pop()), a.trys.pop());
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                                                a.label = l[1];
                                                break;
                                            }
                                            if (6 === l[0] && a.label < o[1]) {
                                                ((a.label = o[1]), (o = l));
                                                break;
                                            }
                                            if (o && a.label < o[2]) {
                                                ((a.label = o[2]), a.ops.push(l));
                                                break;
                                            }
                                            (o[2] && a.ops.pop(), a.trys.pop());
                                            continue;
                                    }
                                    l = t.call(e, a);
                                } catch (e) {
                                    ((l = [6, e]), (r = 0));
                                } finally {
                                    n = o = 0;
                                }
                            if (5 & l[0]) throw l[1];
                            return { value: l[0] ? l[1] : void 0, done: !0 };
                        };
                    }
                },
                $ = (function () {
                    function e(e) {
                        (Object.defineProperty(this, 'device', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'connectionConfig', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (this.device = e.device),
                            (this.connectionConfig = e.connectionConfig));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'getHub', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t, n, r, o;
                                return (
                                    (t = this),
                                    (n = void 0),
                                    (r = void 0),
                                    (o = function () {
                                        var t = this;
                                        return Q(this, function (n) {
                                            return [
                                                2,
                                                new Promise(function (n, r) {
                                                    var o = e.oauth,
                                                        i = e.multiAuthUserId,
                                                        a = e.sessionId,
                                                        s = X(t.device);
                                                    (void 0 !== o && (s.authorization = 'OAuth '.concat(o)),
                                                        void 0 !== i && (s[g.multiAuthUserId] = String(i)),
                                                        void 0 !== a && (s[g.ynisonSessionId] = a));
                                                    var c = new WebSocket(Object.values(t.connectionConfig).join(''), [
                                                            'Bearer',
                                                            'v2',
                                                            encodeURIComponent(JSON.stringify(s)),
                                                        ]),
                                                        l = function (e) {
                                                            try {
                                                                var t = JSON.parse(e.data);
                                                                'error' in t
                                                                    ? (c.close(), r(new J('Error message from redirector', { data: { redirectorResponse: t.error } })))
                                                                    : (c.close(), n(t));
                                                            } catch (e) {
                                                                new J('Error while processing message from redirector', {
                                                                    data: { redirectorResponse: {} },
                                                                    cause: w(e),
                                                                });
                                                            }
                                                        },
                                                        u = function () {
                                                            r(new J('Error in connection to redirector', { data: { redirectorResponse: {} } }));
                                                        },
                                                        f = function () {
                                                            (c.removeEventListener('message', l), c.removeEventListener('error', u), c.removeEventListener('close', f));
                                                        };
                                                    (c.addEventListener('message', l), c.addEventListener('error', u), c.addEventListener('close', f));
                                                }),
                                            ];
                                        });
                                    }),
                                    new (r || (r = Promise))(function (e, i) {
                                        function a(e) {
                                            try {
                                                c(o.next(e));
                                            } catch (e) {
                                                i(e);
                                            }
                                        }
                                        function s(e) {
                                            try {
                                                c(o.throw(e));
                                            } catch (e) {
                                                i(e);
                                            }
                                        }
                                        function c(t) {
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
                                        c((o = o.apply(t, n || [])).next());
                                    })
                                );
                            },
                        }),
                        e
                    );
                })();
            function ee(e, t) {
                var n,
                    r = t.type,
                    o = t.app_name,
                    i = t.app_version,
                    a = t.device_id,
                    s = e.session_id,
                    c = e.redirect_ticket,
                    l = z(r);
                return (
                    ((n = {})[g.ynisonDeviceId] = a),
                    (n[g.ynisonRedirectTicket] = c),
                    (n[g.ynisonSessionId] = s),
                    (n[g.ynisonDeviceInfo] = JSON.stringify({ app_name: o, app_version: i, type: l })),
                    n
                );
            }
            var et = n(59342),
                en = function () {
                    return (en =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                er = function (e, t) {
                    var n = (0, et.A)(),
                        r = en(en({}, e), { rid: n });
                    if (t) {
                        var o = t.player_action_timestamp_ms,
                            i = void 0 === o ? Date.now() : o,
                            a = t.activity_interception_type,
                            s = void 0 === a ? b.DO_NOT_INTERCEPT_BY_DEFAULT : a;
                        ((r.player_action_timestamp_ms = i), (r.activity_interception_type = s));
                    } else ((r.player_action_timestamp_ms = Date.now()), (r.activity_interception_type = b.DO_NOT_INTERCEPT_BY_DEFAULT));
                    return { request: r, rid: n };
                },
                eo = (function () {
                    function e(e) {
                        (Object.defineProperty(this, 'history', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'limit', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (this.limit = e.limit),
                            (this.history = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'onMessageSent', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                (this.history.set(e, t), this.deleteOldRecords());
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
                                for (var e = this.history.keys(); this.history.size >= this.limit;) this.history.delete(e.next().value);
                            },
                        }),
                        e
                    );
                })(),
                ei = (function () {
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
                        (e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r())));
                    };
                })(),
                ea = function () {
                    return (ea =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                es = function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                            0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                    return n;
                },
                ec = (function (e) {
                    function t(n, r) {
                        void 0 === r && (r = {});
                        var o = this,
                            i = r.code,
                            a = es(r, ['code']);
                        return (
                            Object.defineProperty((o = e.call(this, n, ea({ code: void 0 === i ? 'E_HUB_CONNECTION_EXCEPTION' : i }, a)) || this), 'name', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: 'HubConnectionException',
                            }),
                            Object.setPrototypeOf(o, t.prototype),
                            o
                        );
                    }
                    return (ei(t, e), t);
                })(U.t),
                el = function () {
                    return (el =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                eu = '[CLIENT-REASON] ',
                ef = (function () {
                    function e(e) {
                        (Object.defineProperty(this, 'connectorConfig', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'socket', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(this, 'redirectorSocket', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'reconnectTimeout', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(this, 'reconnectAttempts', { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
                            Object.defineProperty(this, 'historyController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'emitter', { enumerable: !0, configurable: !0, writable: !0, value: new j() }),
                            Object.defineProperty(this, 'state', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: new W({ redirectorResponse: null, connectionState: v.DISCONNECTED }),
                            }),
                            (this.connectorConfig = e.config),
                            (this.redirectorSocket = new $({ device: this.connectorConfig.device, connectionConfig: this.connectorConfig.redirectorConnectionConfig })),
                            (this.historyController = new eo({ limit: this.connectorConfig.historyLimit })));
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
                                return T(this.connectorConfig);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'updateFullState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_full_state: el({}, e) }, el({ player_action_timestamp_ms: 0 }, t)),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !1 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updatePlayingStatus', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_playing_status: el({}, e) }, t),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !0 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateActiveDevice', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_active_device: e }, t),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !0 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateSessionParams', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_session_params: e }, t),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !0 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updatePlayerState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_player_state: el({}, e) }, t),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !0 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateVolumeInfo', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_volume_info: el({}, e) }, t),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !0 }), o);
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
                                (void 0 !== n && (this.connectorConfig.oauth = n),
                                    void 0 !== r && (this.connectorConfig.multiAuthUserId = r),
                                    [v.DISCONNECTED, v.READY_TO_RECONNECT].includes(this.state.connectionState.value) &&
                                        ((this.state.connectionState.value = v.CONNECTING),
                                        this.emitter.emit(y.NEW_CONNECTION_ATTEMPT, {}),
                                        this.redirectorSocket
                                            .getHub({
                                                oauth: this.connectorConfig.oauth,
                                                multiAuthUserId: this.connectorConfig.multiAuthUserId,
                                                sessionId: this.connectorConfig.sessionId,
                                            })
                                            .then(function (e) {
                                                ((t.state.redirectorResponse.value = e), t.connectToHub());
                                            })
                                            .catch(function (e) {
                                                var n =
                                                    (16 !== e.data.redirectorResponse.grpc_code || 401 !== e.data.redirectorResponse.http_code) &&
                                                    t.reconnectAttempts < t.connectorConfig.reconnectAttemptsLimit;
                                                if ((t.emitter.emit(y.CONNECTION_ERROR, { destination: O.REDIRECTOR, error: e, shouldReconnect: n }), n)) {
                                                    var r =
                                                        e.data.redirectorResponse.extra_headers && e.data.redirectorResponse.extra_headers[E.ynisonGoAwayForSeconds]
                                                            ? 1e3 * Number(e.data.redirectorResponse.extra_headers[E.ynisonGoAwayForSeconds])
                                                            : t.connectorConfig.defaultReconnectTimeoutMS;
                                                    t.reconnect({ timeout: r });
                                                } else ((t.state.connectionState.value = v.DISCONNECTED), (t.reconnectAttempts = 0));
                                            })));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'disconnect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                (this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), (this.reconnectTimeout = null)),
                                    (this.reconnectAttempts = 0),
                                    this.closeConnection(1e3, ''.concat(eu).concat(e)),
                                    (this.state.connectionState.value = v.DISCONNECTED));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'closeConnection', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n, r;
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
                                ((this.socket = null), this.historyController.clear());
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
                                    o = t.multiAuthUserId,
                                    i = this.connectorConfig.hubConnectionConfig,
                                    a = i.protocol,
                                    s = i.path;
                                if (this.state.redirectorResponse.value) {
                                    var c = this.state.redirectorResponse.value.host,
                                        l = ee(this.state.redirectorResponse.value, r);
                                    (void 0 !== n && (l.authorization = 'OAuth '.concat(n)), void 0 !== o && (l['X-Yandex-Music-Multi-Auth-User-Id'] = String(o)));
                                    var u = ''.concat(a).concat(c).concat(s),
                                        f = ['Bearer', 'v2', encodeURIComponent(JSON.stringify(l))];
                                    ((this.socket = new WebSocket(u, f)),
                                        this.socket.addEventListener('message', function (t) {
                                            e.onReceiveMessage(t);
                                        }),
                                        this.socket.addEventListener('error', function () {
                                            var t = e.state.connectionState.value,
                                                n = e.reconnectAttempts < e.connectorConfig.reconnectAttemptsLimit,
                                                r = new ec('Error in connection to hub', {
                                                    data: { redirectorResponse: e.state.redirectorResponse.value || {}, connectingState: t },
                                                });
                                            (e.emitter.emit(y.CONNECTION_ERROR, { destination: O.HUB, error: r, shouldReconnect: n }),
                                                n ? e.reconnect() : ((e.state.connectionState.value = v.DISCONNECTED), (e.reconnectAttempts = 0)));
                                        }),
                                        this.socket.addEventListener('open', function () {
                                            ((e.state.connectionState.value = v.CONNECTED), e.emitter.emit(y.CONNECTED, {}));
                                        }),
                                        this.socket.addEventListener('close', function (t) {
                                            ((e.state.connectionState.value = v.DISCONNECTED), e.clearConnection());
                                            var n = t.reason.includes(eu);
                                            e.emitter.emit(y.DISCONNECTED, { trigger: n ? _.CLIENT : _.SERVER, event: t });
                                        }));
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
                                ((this.reconnectAttempts += 1),
                                    (this.reconnectTimeout = setTimeout(function () {
                                        ((t.state.connectionState.value = v.READY_TO_RECONNECT), t.connect({}));
                                    }, r)),
                                    (this.state.connectionState.value = v.WAITING_FOR_RECONNECT));
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
                                        this.closeConnection(1e3, ''.concat(eu, 'Error in message'));
                                        var r = new B('Error message from hub', {
                                            data: { redirectorResponse: this.state.redirectorResponse.value || {}, hubResponse: t.error, hubResponseRaw: e.data },
                                        });
                                        if ((this.emitter.emit(y.HUB_ERROR, { error: r, shouldReconnect: n }), n)) {
                                            var o = t.error.details[E.ynisonGoAwayForSeconds]
                                                ? 1e3 * Number(t.error.details[E.ynisonGoAwayForSeconds])
                                                : this.connectorConfig.defaultReconnectTimeoutMS;
                                            this.reconnect({ timeout: o });
                                        } else ((this.state.connectionState.value = v.DISCONNECTED), (this.reconnectAttempts = 0));
                                    } else
                                        ((this.reconnectAttempts = 0),
                                            this.historyController.shouldIgnoreIncomingMessage(t.rid) || this.emitter.emit(y.RECEIVE_MESSAGE, { rawData: t }));
                                } catch (t) {
                                    var i = new B('Error while processing message from hub', {
                                        data: { redirectorResponse: this.state.redirectorResponse.value || {}, hubResponse: {}, hubResponseRaw: e.data },
                                        cause: w(t),
                                    });
                                    this.emitter.emit(y.HUB_MESSAGE_PARSING_ERROR, { error: i });
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'sendRequest', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                null !== this.socket && this.socket.readyState === WebSocket.OPEN && this.state.connectionState.value === v.CONNECTED
                                    ? (this.socket.send(JSON.stringify(e)), this.emitter.emit(y.MESSAGE_SENT, e))
                                    : this.emitter.emit(y.MESSAGE_LOST, e);
                            },
                        }),
                        e
                    );
                })(),
                ep = function (e, t, n) {
                    return 'undefined' != typeof CloseEvent
                        ? new CloseEvent('close', { code: e, reason: t, wasClean: n })
                        : Object.assign(new Event('close'), { code: e, reason: t, wasClean: n });
                },
                ed = '[CLIENT-REASON] ',
                eb = [1e3, 5e3, 3e4],
                eh = (function () {
                    function e(e) {
                        (Object.defineProperty(this, 'config', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'callbacks', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'socket', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(this, 'redirectorSocket', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(this, 'connectionState', { enumerable: !0, configurable: !0, writable: !0, value: v.DISCONNECTED }),
                            Object.defineProperty(this, 'reconnectTimeout', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(this, 'reconnectAttempts', { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
                            Object.defineProperty(this, 'temporaryReconnectTimeoutsMS', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(this, 'connectParams', { enumerable: !0, configurable: !0, writable: !0, value: {} }),
                            Object.defineProperty(this, 'redirectorResponse', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            (this.config = e.config),
                            (this.callbacks = e.callbacks),
                            (this.onRedirectorMessage = this.onRedirectorMessage.bind(this)),
                            (this.onRedirectorError = this.onRedirectorError.bind(this)),
                            (this.onRedirectorClose = this.onRedirectorClose.bind(this)),
                            (this.onHubMessage = this.onHubMessage.bind(this)),
                            (this.onHubError = this.onHubError.bind(this)),
                            (this.onHubOpen = this.onHubOpen.bind(this)),
                            (this.onHubClose = this.onHubClose.bind(this)));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'connect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.updateConnectParams(e);
                                var t = [v.DISCONNECTED, v.READY_TO_RECONNECT];
                                null === this.reconnectTimeout &&
                                    t.includes(this.connectionState) &&
                                    (this.closeHubSocket(), this.setConnectionState(v.CONNECTING), this.callbacks.onConnectionAttempt(), this.getHub());
                            },
                        }),
                        Object.defineProperty(e.prototype, 'disconnect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.connectionState !== v.DISCONNECTED;
                                this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), (this.reconnectTimeout = null));
                                var n = ''.concat(ed).concat(e);
                                (this.resetReconnectSequence(),
                                    this.closeRedirectorSocket(1e3, n),
                                    this.closeHubSocket(1e3, n),
                                    this.setConnectionState(v.DISCONNECTED),
                                    t && this.callbacks.onDisconnected(ep(1e3, n, !0), !0));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'send', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return (
                                    null !== this.socket && this.socket.readyState === WebSocket.OPEN && this.connectionState === v.CONNECTED && (this.socket.send(e), !0)
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getHub', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this.connectParams,
                                    t = e.oauth,
                                    n = e.multiAuthUserId,
                                    r = this.config.sessionId,
                                    o = X(this.config.device);
                                (void 0 !== t && (o.authorization = 'OAuth '.concat(t)),
                                    void 0 !== n && (o[g.multiAuthUserId] = String(n)),
                                    void 0 !== r && (o[g.ynisonSessionId] = r));
                                var i = Object.values(this.config.redirectorConnectionConfig).join(''),
                                    a = ['Bearer', 'v2', encodeURIComponent(JSON.stringify(o))];
                                (this.closeRedirectorSocket(),
                                    (this.redirectorSocket = new WebSocket(i, a)),
                                    this.redirectorSocket.addEventListener('message', this.onRedirectorMessage),
                                    this.redirectorSocket.addEventListener('error', this.onRedirectorError),
                                    this.redirectorSocket.addEventListener('close', this.onRedirectorClose));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onRedirectorMessage', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t,
                                    n = this;
                                if (null !== this.redirectorSocket && e.currentTarget === this.redirectorSocket) {
                                    try {
                                        t = JSON.parse(e.data);
                                    } catch (e) {
                                        var r = new J('Error while processing message from redirector', { data: { redirectorResponse: {} }, cause: w(e) });
                                        (this.closeRedirectorSocket(), this.callbacks.onRedirectorError(r, !1), this.finishReconnectSequence());
                                        return;
                                    }
                                    if ((this.closeRedirectorSocket(), 'error' in t)) {
                                        var o = new J('Error message from redirector', { data: { redirectorResponse: t.error } });
                                        this.handleErrorResponse(t.error.extra_headers, function (e) {
                                            n.callbacks.onRedirectorError(o, e);
                                        });
                                    } else ((this.redirectorResponse = t), this.callbacks.onRedirectorResponse(t), this.connectToHub(t));
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onRedirectorError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                if (null !== this.redirectorSocket && e.currentTarget === this.redirectorSocket) {
                                    this.closeRedirectorSocket();
                                    var n = new J('Error in connection to redirector', { data: { redirectorResponse: {} } });
                                    this.handleErrorResponse(void 0, function (e) {
                                        t.callbacks.onRedirectorError(n, e);
                                    });
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onRedirectorClose', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (null !== this.redirectorSocket && e.currentTarget === this.redirectorSocket) {
                                    this.closeRedirectorSocket();
                                    var t = new J('Connection to redirector closed before response', { data: { redirectorResponse: {} } });
                                    (this.callbacks.onRedirectorError(t, !1), this.finishReconnectSequence());
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'clearRedirectorSocket', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                null !== this.redirectorSocket &&
                                    (this.redirectorSocket.removeEventListener('message', this.onRedirectorMessage),
                                    this.redirectorSocket.removeEventListener('error', this.onRedirectorError),
                                    this.redirectorSocket.removeEventListener('close', this.onRedirectorClose),
                                    (this.redirectorSocket = null));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'closeRedirectorSocket', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if (null !== this.redirectorSocket) {
                                    var n = this.redirectorSocket;
                                    (this.clearRedirectorSocket(), (n.readyState === WebSocket.CONNECTING || n.readyState === WebSocket.OPEN) && n.close(e, t));
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'connectToHub', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.connectParams,
                                    n = t.oauth,
                                    r = t.multiAuthUserId,
                                    o = this.config.device,
                                    i = this.config.hubConnectionConfig,
                                    a = i.protocol,
                                    s = i.path,
                                    c = e.host,
                                    l = ee(e, o);
                                (void 0 !== n && (l.authorization = 'OAuth '.concat(n)), void 0 !== r && (l[g.multiAuthUserId] = String(r)));
                                var u = ''.concat(a).concat(c).concat(s),
                                    f = ['Bearer', 'v2', encodeURIComponent(JSON.stringify(l))];
                                ((this.socket = new WebSocket(u, f)),
                                    this.socket.addEventListener('message', this.onHubMessage),
                                    this.socket.addEventListener('error', this.onHubError),
                                    this.socket.addEventListener('open', this.onHubOpen),
                                    this.socket.addEventListener('close', this.onHubClose));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onHubMessage', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                if (null !== this.socket && e.currentTarget === this.socket)
                                    try {
                                        var n = JSON.parse(e.data);
                                        if ('error' in n) {
                                            var r = ''.concat(ed, 'Error in message');
                                            this.closeHubSocket(1e3, r);
                                            var o = new B('Error message from hub', {
                                                data: { redirectorResponse: this.redirectorResponse || {}, hubResponse: n.error, hubResponseRaw: e.data },
                                            });
                                            (this.handleErrorResponse(n.error.details, function (e) {
                                                t.callbacks.onHubError(o, e);
                                            }),
                                                this.setConnectionState(v.DISCONNECTED),
                                                this.callbacks.onDisconnected(ep(1e3, r, !0), !1));
                                        } else (this.resetReconnectSequence(), this.callbacks.onMessage(n));
                                    } catch (t) {
                                        var i = new B('Error while processing message from hub', {
                                            data: { redirectorResponse: this.redirectorResponse || {}, hubResponse: {}, hubResponseRaw: e.data },
                                            cause: w(t),
                                        });
                                        this.callbacks.onMessageParsingError(i);
                                    }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onHubError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (null !== this.socket && e.currentTarget === this.socket) {
                                    var t = this.connectionState;
                                    (this.closeHubSocket(),
                                        this.handleHubConnectionFailure(t),
                                        this.setConnectionState(v.DISCONNECTED),
                                        this.callbacks.onDisconnected(ep(1006, '', !1), !1));
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onHubOpen', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                null !== this.socket &&
                                    e.currentTarget === this.socket &&
                                    this.connectionState === v.CONNECTING &&
                                    (this.setConnectionState(v.CONNECTED), this.callbacks.onConnected());
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onHubClose', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                null !== this.socket &&
                                    e.currentTarget === this.socket &&
                                    (this.clearHubSocket(), this.resetReconnectSequence(), this.setConnectionState(v.DISCONNECTED), this.callbacks.onDisconnected(e, !1));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'clearHubSocket', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                null !== this.socket &&
                                    (this.socket.removeEventListener('message', this.onHubMessage),
                                    this.socket.removeEventListener('error', this.onHubError),
                                    this.socket.removeEventListener('open', this.onHubOpen),
                                    this.socket.removeEventListener('close', this.onHubClose),
                                    (this.socket = null));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'closeHubSocket', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                if (null !== this.socket) {
                                    var n = this.socket;
                                    (this.clearHubSocket(), (n.readyState === WebSocket.CONNECTING || n.readyState === WebSocket.OPEN) && n.close(e, t));
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, 'handleHubConnectionFailure', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.canReconnect(),
                                    n = new ec('Error in connection to hub', { data: { redirectorResponse: this.redirectorResponse || {}, connectingState: e } });
                                (this.callbacks.onHubConnectionError(n, t), t ? this.reconnect() : this.finishReconnectSequence());
                            },
                        }),
                        Object.defineProperty(e.prototype, 'handleErrorResponse', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = null == e ? void 0 : e[E.ynisonErrorCode],
                                    r = null == e ? void 0 : e[E.ynisonGoAwayForSeconds],
                                    o = null == e ? void 0 : e[E.ynisonBackoffMillis],
                                    i = void 0 === n || !n.startsWith('4');
                                if (void 0 !== r) this.resetReconnectSequence();
                                else if (i && void 0 !== o) {
                                    var a,
                                        s = o.split(':').map(Number);
                                    (null !== this.temporaryReconnectTimeoutsMS &&
                                        ((a = this.temporaryReconnectTimeoutsMS),
                                        a.length === s.length &&
                                            a.every(function (e, t) {
                                                return e === s[t];
                                            }))) ||
                                        ((this.temporaryReconnectTimeoutsMS = s), (this.reconnectAttempts = 0));
                                }
                                var c = i && this.canReconnect();
                                return (t(c), c)
                                    ? void 0 !== r
                                        ? void this.scheduleReconnect(1e3 * Number(r))
                                        : void this.reconnect()
                                    : void this.finishReconnectSequence();
                            },
                        }),
                        Object.defineProperty(e.prototype, 'reconnect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this.getReconnectTimeoutsMS()[this.reconnectAttempts];
                                if (void 0 === e) return void this.finishReconnectSequence();
                                ((this.reconnectAttempts += 1), this.scheduleReconnect(e));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'scheduleReconnect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                ((this.reconnectTimeout = setTimeout(function () {
                                    ((t.reconnectTimeout = null), t.setConnectionState(v.READY_TO_RECONNECT), t.connect({}));
                                }, e)),
                                    this.setConnectionState(v.WAITING_FOR_RECONNECT));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'finishReconnectSequence', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                (this.setConnectionState(v.DISCONNECTED), this.resetReconnectSequence());
                            },
                        }),
                        Object.defineProperty(e.prototype, 'resetReconnectSequence', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                ((this.reconnectAttempts = 0), (this.temporaryReconnectTimeoutsMS = null));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getReconnectTimeoutsMS', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e;
                                return null != (e = this.temporaryReconnectTimeoutsMS) ? e : eb;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'canReconnect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return this.reconnectAttempts < this.getReconnectTimeoutsMS().length;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'setConnectionState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                ((this.connectionState = e), this.callbacks.onStateChange(e));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateConnectParams', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.oauth,
                                    n = e.multiAuthUserId;
                                (void 0 !== t && (this.connectParams.oauth = t), void 0 !== n && (this.connectParams.multiAuthUserId = n));
                            },
                        }),
                        e
                    );
                })(),
                ev = function () {
                    return (ev =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                ey = (function () {
                    function e(e) {
                        var t = this;
                        (Object.defineProperty(this, 'connectorConfig', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'socketController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'historyController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'emitter', { enumerable: !0, configurable: !0, writable: !0, value: new j() }),
                            Object.defineProperty(this, 'state', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: new W({ redirectorResponse: null, connectionState: v.DISCONNECTED }),
                            }),
                            (this.connectorConfig = e.config),
                            (this.historyController = new eo({ limit: this.connectorConfig.historyLimit })),
                            (this.socketController = new eh({
                                config: {
                                    device: this.connectorConfig.device,
                                    redirectorConnectionConfig: this.connectorConfig.redirectorConnectionConfig,
                                    hubConnectionConfig: this.connectorConfig.hubConnectionConfig,
                                    sessionId: this.connectorConfig.sessionId,
                                },
                                callbacks: {
                                    onStateChange: function (e) {
                                        t.state.connectionState.value = e;
                                    },
                                    onConnectionAttempt: function () {
                                        t.emitter.emit(y.NEW_CONNECTION_ATTEMPT, {});
                                    },
                                    onRedirectorResponse: function (e) {
                                        t.state.redirectorResponse.value = e;
                                    },
                                    onConnected: function () {
                                        t.emitter.emit(y.CONNECTED, {});
                                    },
                                    onDisconnected: function (e, n) {
                                        (t.historyController.clear(), t.emitter.emit(y.DISCONNECTED, { trigger: n ? _.CLIENT : _.SERVER, event: e }));
                                    },
                                    onRedirectorError: function (e, n) {
                                        t.emitter.emit(y.CONNECTION_ERROR, { destination: O.REDIRECTOR, error: e, shouldReconnect: n });
                                    },
                                    onHubConnectionError: function (e, n) {
                                        t.emitter.emit(y.CONNECTION_ERROR, { destination: O.HUB, error: e, shouldReconnect: n });
                                    },
                                    onHubError: function (e, n) {
                                        t.emitter.emit(y.HUB_ERROR, { error: e, shouldReconnect: n });
                                    },
                                    onMessageParsingError: function (e) {
                                        t.emitter.emit(y.HUB_MESSAGE_PARSING_ERROR, { error: e });
                                    },
                                    onMessage: function (e) {
                                        t.historyController.shouldIgnoreIncomingMessage(e.rid) || t.emitter.emit(y.RECEIVE_MESSAGE, { rawData: e });
                                    },
                                },
                            })));
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
                                return T(this.connectorConfig);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'updateFullState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_full_state: ev({}, e) }, ev({ player_action_timestamp_ms: 0 }, t)),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !1 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updatePlayingStatus', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_playing_status: ev({}, e) }, t),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !0 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateActiveDevice', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_active_device: e }, t),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !0 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateSessionParams', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_session_params: e }, t),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !0 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updatePlayerState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_player_state: ev({}, e) }, t),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !0 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'updateVolumeInfo', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var n = er({ update_volume_info: ev({}, e) }, t),
                                    r = n.request,
                                    o = n.rid;
                                return (this.sendRequest(r), this.historyController.onMessageSent(o, { ignoreResponse: !0 }), o);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'connect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = e.oauth,
                                    n = e.multiAuthUserId;
                                (void 0 !== t && (this.connectorConfig.oauth = t),
                                    void 0 !== n && (this.connectorConfig.multiAuthUserId = n),
                                    this.socketController.connect({ oauth: this.connectorConfig.oauth, multiAuthUserId: this.connectorConfig.multiAuthUserId }));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'disconnect', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.socketController.disconnect(e);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'sendRequest', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.socketController.send(JSON.stringify(e)) ? this.emitter.emit(y.MESSAGE_SENT, e) : this.emitter.emit(y.MESSAGE_LOST, e);
                            },
                        }),
                        e
                    );
                })(),
                eE = function () {
                    return (eE =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                e_ = function (e, t, n) {
                    var r,
                        o,
                        i,
                        a = {
                            volume: null != (r = t.value) ? r : 0.5,
                            capabilities: { can_be_player: !0, can_be_remote_controller: !1, volume_granularity: null != (o = t.granularity) ? o : 16 },
                            info: e,
                            volume_info: { volume: null != (i = t.value) ? i : 0.5, version: null },
                        };
                    return void 0 !== n.connectionType ? eE(eE({}, a), { connection_type: n.connectionType }) : eE(eE({}, a), { is_shadow: !!n.isShadow });
                },
                eO = function (e) {
                    var t = e.connectionType,
                        n = e.isShadow;
                    return void 0 !== t ? t === d.SPECTATOR : !!n;
                },
                eg = function () {
                    return (eg =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                em = (function () {
                    function e(e) {
                        var t = this;
                        (Object.defineProperty(this, 'stateController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'connector', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'metricsController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'deviceConfig', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'logger', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'variables', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'updateFullStateMessageRid', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                            Object.defineProperty(this, 'isUpdateFullStateCompleted', { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
                            (this.deviceConfig = e.deviceConfig),
                            (this.variables = e.variables),
                            (this.logger = e.logger));
                        var n = (Math.floor(0x225c17d02 * Math.random() + 1).toString() + Math.floor(0x3b9ac9fe * Math.random() + 1).toString()).slice(0, 19);
                        this.stateController = new G({ deviceConfig: this.deviceConfig });
                        var o = !0 === e.variables.newConnector ? ey : ef;
                        ((this.connector = new o({
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
                            (window.ynison = { connector: this.connector, state: this.stateController }),
                            (this.metricsController = new eT({
                                transports: e.metricsTransport,
                                sessionId: n,
                                variables: {
                                    get puid() {
                                        return e.variables.puid;
                                    },
                                    get isSpectator() {
                                        return t.isSpectator;
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
                            this.connector.on(y.RECEIVE_MESSAGE, this.onMessageReceived.bind(this)),
                            this.stateController.on(r.UPDATED, this.onStateChanged.bind(this), 'WSConnector'),
                            this.connector.state.connectionState.onChange(function (e) {
                                switch (e) {
                                    case v.CONNECTED:
                                        t.onConnected();
                                        break;
                                    case v.DISCONNECTED:
                                        t.onDisconnected();
                                }
                            }),
                            this.connector.on(y.CONNECTION_ERROR, function (e) {
                                t.logger.error('[Ynison] Connection error: '.concat(e.error.message), eg({}, e));
                            }),
                            this.connector.on(y.HUB_MESSAGE_PARSING_ERROR, function (e) {
                                t.logger.error('[Ynison] Hub message error: '.concat(e.error.message), eg({}, e));
                            }),
                            this.connector.on(y.HUB_ERROR, function (e) {
                                t.logger.error('[Ynison] Hub error: '.concat(e.error.message), eg({}, e));
                            }));
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
                        Object.defineProperty(e.prototype, 'isSpectator', {
                            get: function () {
                                return eO(this.variables);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isShadow', {
                            get: function () {
                                return this.isSpectator;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'registerMetrics', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                (this.connector.on(y.NEW_CONNECTION_ATTEMPT, this.metricsController.onNewConnectionAttempt.bind(this.metricsController)),
                                    this.connector.on(y.CONNECTED, this.metricsController.onConnected.bind(this.metricsController)),
                                    this.connector.on(y.CONNECTION_ERROR, this.metricsController.onConnectionError.bind(this.metricsController)),
                                    this.connector.on(y.HUB_ERROR, this.metricsController.onHubError.bind(this.metricsController)),
                                    this.connector.on(y.HUB_MESSAGE_PARSING_ERROR, this.metricsController.onHubMessageParsingError.bind(this.metricsController)),
                                    this.connector.on(y.DISCONNECTED, this.metricsController.onDisconnected.bind(this.metricsController)),
                                    this.connector.on(y.MESSAGE_SENT, this.metricsController.onMessageSent.bind(this.metricsController)),
                                    this.connector.on(y.MESSAGE_LOST, this.metricsController.onMessageLost.bind(this.metricsController)),
                                    this.stateController.on(r.PARSING_ERROR, this.metricsController.onYnisonStateParsingError.bind(this.metricsController)));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onMessageReceived', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                const sourceDeviceId = e.rawData?.player_state?.status?.version?.device_id;
                                if (sourceDeviceId && sourceDeviceId !== this.deviceConfig.info.device_id) {
                                    window.desktopEvents?.send?.('YNISON_STATE', { rawData: e.rawData });
                                }
                                var t = this.getMessageContext(e);
                                if ((this.updateFullStateCompletion(t), !this.shouldIgnoreMessage(t))) {
                                    var n = this.processMessageState(e, t);
                                    this.stateController.updateState(eg(eg({}, n), { isStateForRestore: t.isCurrentUpdateFullStateMessage }));
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
                                        : this.isSpectator || e.deviceTransition.willStayPassive)
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
                                var t = T(e);
                                return (
                                    (t.player_state.status.paused = !0),
                                    (t.player_state.status.version = I(this.deviceConfig.info.device_id, 0)),
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
                                    o,
                                    i,
                                    a = this,
                                    s = T(e),
                                    c = this.stateController.currentState,
                                    l = s.devices.find(function (e) {
                                        var t;
                                        return (null == (t = e.info) ? void 0 : t.device_id) === a.deviceConfig.info.device_id;
                                    }),
                                    u = c.devices.find(function (e) {
                                        var t;
                                        return (null == (t = e.info) ? void 0 : t.device_id) === a.deviceConfig.info.device_id;
                                    });
                                if (l) {
                                    var f = {
                                        volume:
                                            null !=
                                            (r = null != (n = null == (t = null == u ? void 0 : u.volume_info) ? void 0 : t.volume) ? n : this.deviceConfig.defaultVolume)
                                                ? r
                                                : 0.5,
                                        version: null != (i = null == (o = null == u ? void 0 : u.volume_info) ? void 0 : o.version) ? i : null,
                                    };
                                    ((l.volume = f.volume), (l.volume_info = f));
                                }
                                return s;
                            },
                        }),
                        Object.defineProperty(e.prototype, 'createActiveDeviceStateUpdate', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = T(e);
                                return (
                                    (t.player_state = T(this.stateController.currentState.player_state)), { newState: t, skipVersionCompare: !0, trigger: 'WSConnector' }
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'processOutgoingPlayerState', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return eg(eg({}, e), { status: this.processOutgoingPlayerStatus(e.status) });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'processOutgoingPlayerStatus', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return this.isSpectator || !this.isActive ? eg(eg({}, e), { paused: !0 }) : e;
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
                                return e_(
                                    this.deviceConfig.info,
                                    {
                                        value: null != (t = null == (e = null == r ? void 0 : r.volume_info) ? void 0 : e.volume) ? t : this.deviceConfig.defaultVolume,
                                        granularity: this.deviceConfig.volumeGranularity,
                                    },
                                    { connectionType: this.variables.connectionType, isShadow: this.variables.isShadow },
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
                                var e, t, n;
                                this.updateFullStateMessageRid = this.connector.updateFullState(
                                    ((e = this.createOutgoingDeviceData()),
                                    (t = this.processOutgoingPlayerState(this.stateController.currentState.player_state)),
                                    void 0 === n && (n = {}),
                                    { player_state: t, device: e, is_currently_active: !!n.isActive, sync_state_from_eov_optional: null }),
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onDisconnected', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                ((this.isUpdateFullStateCompleted = !1), (this.updateFullStateMessageRid = null));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'interceptActivity', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                (void 0 === e && (e = b.INTERCEPT_EAGER),
                                    this.connector.updatePlayerState(
                                        { player_state: this.stateController.currentState.player_state },
                                        { activity_interception_type: e },
                                    ));
                                var t = this.stateController.currentState;
                                ((t.active_device_id_optional = this.deviceConfig.info.device_id),
                                    this.stateController.updateState({ newState: t, trigger: 'WSConnector' }));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'becomePassive', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.connector.updateActiveDevice({ device_id_optional: null });
                                var e = this.stateController.currentState;
                                ((e.active_device_id_optional = null),
                                    (e.player_state.status.paused = !0),
                                    (e.player_state.status.version = I(this.deviceConfig.info.device_id)),
                                    this.stateController.updateState({ newState: e, trigger: 'WSConnector' }));
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
                eC = function (e, t) {
                    var n,
                        r,
                        o,
                        i,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & o[0]) throw o[1];
                                return o[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (i = { next: s(0), throw: s(1), return: s(2) }),
                        'function' == typeof Symbol &&
                            (i[Symbol.iterator] = function () {
                                return this;
                            }),
                        i
                    );
                    function s(s) {
                        return function (c) {
                            var l = [s, c];
                            if (n) throw TypeError('Generator is already executing.');
                            for (; i && ((i = 0), l[0] && (a = 0)), a;)
                                try {
                                    if (
                                        ((n = 1),
                                        r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done)
                                    )
                                        return o;
                                    switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                                        case 0:
                                        case 1:
                                            o = l;
                                            break;
                                        case 4:
                                            return (a.label++, { value: l[1], done: !1 });
                                        case 5:
                                            (a.label++, (r = l[1]), (l = [0]));
                                            continue;
                                        case 7:
                                            ((l = a.ops.pop()), a.trys.pop());
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                                                a.label = l[1];
                                                break;
                                            }
                                            if (6 === l[0] && a.label < o[1]) {
                                                ((a.label = o[1]), (o = l));
                                                break;
                                            }
                                            if (o && a.label < o[2]) {
                                                ((a.label = o[2]), a.ops.push(l));
                                                break;
                                            }
                                            (o[2] && a.ops.pop(), a.trys.pop());
                                            continue;
                                    }
                                    l = t.call(e, a);
                                } catch (e) {
                                    ((l = [6, e]), (r = 0));
                                } finally {
                                    n = o = 0;
                                }
                            if (5 & l[0]) throw l[1];
                            return { value: l[0] ? l[1] : void 0, done: !0 };
                        };
                    }
                },
                eS = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'transport', { enumerable: !0, configurable: !0, writable: !0, value: e });
                    }
                    return (
                        Object.defineProperty(e.prototype, 'send', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t, n, r, o;
                                return (
                                    (t = this),
                                    (n = void 0),
                                    (r = void 0),
                                    (o = function () {
                                        return eC(this, function (t) {
                                            return [2, this.transport.send(e, { service: 'Ynison' })];
                                        });
                                    }),
                                    new (r || (r = Promise))(function (e, i) {
                                        function a(e) {
                                            try {
                                                c(o.next(e));
                                            } catch (e) {
                                                i(e);
                                            }
                                        }
                                        function s(e) {
                                            try {
                                                c(o.throw(e));
                                            } catch (e) {
                                                i(e);
                                            }
                                        }
                                        function c(t) {
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
                                        c((o = o.apply(t, n || [])).next());
                                    })
                                );
                            },
                        }),
                        e
                    );
                })(),
                eR = function (e, t) {
                    var n,
                        r,
                        o,
                        i,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & o[0]) throw o[1];
                                return o[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (i = { next: s(0), throw: s(1), return: s(2) }),
                        'function' == typeof Symbol &&
                            (i[Symbol.iterator] = function () {
                                return this;
                            }),
                        i
                    );
                    function s(s) {
                        return function (c) {
                            var l = [s, c];
                            if (n) throw TypeError('Generator is already executing.');
                            for (; i && ((i = 0), l[0] && (a = 0)), a;)
                                try {
                                    if (
                                        ((n = 1),
                                        r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done)
                                    )
                                        return o;
                                    switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                                        case 0:
                                        case 1:
                                            o = l;
                                            break;
                                        case 4:
                                            return (a.label++, { value: l[1], done: !1 });
                                        case 5:
                                            (a.label++, (r = l[1]), (l = [0]));
                                            continue;
                                        case 7:
                                            ((l = a.ops.pop()), a.trys.pop());
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                                                a.label = l[1];
                                                break;
                                            }
                                            if (6 === l[0] && a.label < o[1]) {
                                                ((a.label = o[1]), (o = l));
                                                break;
                                            }
                                            if (o && a.label < o[2]) {
                                                ((a.label = o[2]), a.ops.push(l));
                                                break;
                                            }
                                            (o[2] && a.ops.pop(), a.trys.pop());
                                            continue;
                                    }
                                    l = t.call(e, a);
                                } catch (e) {
                                    ((l = [6, e]), (r = 0));
                                } finally {
                                    n = o = 0;
                                }
                            if (5 & l[0]) throw l[1];
                            return { value: l[0] ? l[1] : void 0, done: !0 };
                        };
                    }
                },
                eN = (function () {
                    function e(e) {
                        Object.defineProperty(this, 'transport', { enumerable: !0, configurable: !0, writable: !0, value: e });
                    }
                    return (
                        Object.defineProperty(e.prototype, 'send', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t, n, r, o;
                                return (
                                    (t = this),
                                    (n = void 0),
                                    (r = void 0),
                                    (o = function () {
                                        return eR(this, function (t) {
                                            return [2, this.transport.send(e, { topLevelParameter: 'tech-metrics' })];
                                        });
                                    }),
                                    new (r || (r = Promise))(function (e, i) {
                                        function a(e) {
                                            try {
                                                c(o.next(e));
                                            } catch (e) {
                                                i(e);
                                            }
                                        }
                                        function s(e) {
                                            try {
                                                c(o.throw(e));
                                            } catch (e) {
                                                i(e);
                                            }
                                        }
                                        function c(t) {
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
                                        c((o = o.apply(t, n || [])).next());
                                    })
                                );
                            },
                        }),
                        e
                    );
                })();
            (!(function (e) {
                ((e.YNISON_START = 'YNISON_START'),
                    (e.YNISON_CONNECTED = 'YNISON_CONNECTED'),
                    (e.YNISON_CONNECTING_ERROR = 'YNISON_CONNECTING_ERROR'),
                    (e.YNISON_CLIENT_DISCONNECTED = 'YNISON_CLIENT_DISCONNECTED'),
                    (e.YNISON_EVENT_SENDED = 'YNISON_EVENT_SENDED'),
                    (e.YNISON_EVENT_LOST = 'YNISON_EVENT_LOST'),
                    (e.YNISON_CHANNEL_ERROR = 'YNISON_CHANNEL_ERROR'),
                    (e.YNISON_STATE_ERROR = 'YNISON_STATE_ERROR'));
            })(m || (m = {})),
                (function (e) {
                    ((e.ACTIVE = 'active'), (e.PASSIVE = 'passive'), (e.SHADOW = 'shadow'));
                })(C || (C = {})),
                (function (e) {
                    ((e.MOBILE = 'mobile'), (e.WIFI = 'wifi'), (e.UNKNOWN = 'unknown'));
                })(S || (S = {})),
                (function (e) {
                    ((e.WS = 'other'), (e.IO = 'io'), (e.SERVER = 'server'), (e.OTHER = 'other'));
                })(R || (R = {})),
                (function (e) {
                    ((e.REDIRECTOR = 'redirector'), (e.HUB = 'hub'));
                })(N || (N = {})));
            var eP = [
                    'update_full_state',
                    'update_active_device',
                    'update_playing_status',
                    'update_player_state',
                    'update_player_queue_inject',
                    'update_session_params',
                    'update_volume_info',
                ],
                eI = function () {
                    return (eI =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                eT = (function () {
                    function e(e) {
                        (Object.defineProperty(this, 'transports', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'state', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'variables', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (this.transports = e.transports),
                            (this.variables = e.variables),
                            (this.state = { uuid: e.sessionId }));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'onYnisonStateParsingError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.sendEvent({
                                    name: m.YNISON_STATE_ERROR,
                                    data: eI(eI({}, this.getBaseEventPayload()), { errorType: R.OTHER, errorDescription: e.error.message }),
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onNewConnectionAttempt', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                ((this.state.connectionStartTimestamp = Date.now()), this.sendEvent({ name: m.YNISON_START, data: this.getBaseEventPayload() }));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onConnected', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = 0;
                                (this.state.connectionStartTimestamp &&
                                    ((e = Date.now() - this.state.connectionStartTimestamp), delete this.state.connectionStartTimestamp),
                                    this.sendEvent({ name: m.YNISON_CONNECTED, data: eI(eI({}, this.getBaseEventPayload()), { time: e }) }));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onConnectionError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                switch (e.destination) {
                                    case O.REDIRECTOR:
                                        this.onRedirectorConnectionError(e);
                                        break;
                                    case O.HUB:
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
                                    o = null != (t = e.error.data.redirectorResponse.message) ? t : '',
                                    i = R.OTHER;
                                (void 0 !== n && (i = R.WS),
                                    this.sendEvent({
                                        name: m.YNISON_CONNECTING_ERROR,
                                        data: eI(eI({}, this.getBaseEventPayload()), {
                                            destination: N.REDIRECTOR,
                                            errorType: i,
                                            code: n,
                                            errorDescription: ''.concat(r, ' ').concat(o),
                                        }),
                                    }));
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onHubConnectionError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (e.error.data.connectingState === v.CONNECTING)
                                    return void this.sendEvent({
                                        name: m.YNISON_CONNECTING_ERROR,
                                        data: eI(eI({}, this.getBaseEventPayload()), { destination: N.HUB, errorType: R.WS, errorDescription: e.error.message }),
                                    });
                                this.sendEvent({
                                    name: m.YNISON_CHANNEL_ERROR,
                                    data: eI(eI({}, this.getBaseEventPayload()), { errorType: R.WS, errorDescription: e.error.message }),
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
                                    o = null != (t = e.error.data.hubResponse.message) ? t : '';
                                this.sendEvent({
                                    name: m.YNISON_CHANNEL_ERROR,
                                    data: eI(eI({}, this.getBaseEventPayload()), { errorType: R.WS, code: n, errorDescription: ''.concat(r, ' ').concat(o) }),
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onHubMessageParsingError', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.sendEvent({
                                    name: m.YNISON_STATE_ERROR,
                                    data: eI(eI({}, this.getBaseEventPayload()), { errorType: R.OTHER, errorDescription: e.error.message }),
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onDisconnected', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                switch (e.trigger) {
                                    case _.CLIENT:
                                        return this.onDisconnectedByClient(e.event);
                                    case _.SERVER:
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
                                    name: m.YNISON_CHANNEL_ERROR,
                                    data: eI(eI({}, this.getBaseEventPayload()), { errorType: R.SERVER, code: e.code, errorDescription: e.reason }),
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onDisconnectedByClient', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.sendEvent({ name: m.YNISON_CLIENT_DISCONNECTED, data: eI(eI({}, this.getBaseEventPayload()), { reason: e.reason }) });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onMessageSent', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.getMessageType(e);
                                t && this.sendEvent({ name: m.YNISON_EVENT_SENDED, data: eI(eI({}, this.getBaseEventPayload()), { type: t }) });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'onMessageLost', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this.getMessageType(e);
                                t && this.sendEvent({ name: m.YNISON_EVENT_LOST, data: eI(eI({}, this.getBaseEventPayload()), { type: t }) });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getMessageType', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return Object.keys(e).find(function (e) {
                                    return eP.includes(e);
                                });
                            },
                        }),
                        Object.defineProperty(e.prototype, 'getBaseEventPayload', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = C.PASSIVE;
                                return (
                                    this.variables.isSpectator ? (e = C.SHADOW) : this.variables.isActive && (e = C.ACTIVE),
                                    { uuid: this.state.uuid, puid: String(this.variables.puid), mode: e, connectionType: S.UNKNOWN }
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
                                (this.logEvent({ event: e, eventName: e.name }),
                                    this.transports.forEach(function (t) {
                                        t.send(e);
                                    }));
                            },
                        }),
                        e
                    );
                })();
        },
    },
]);
