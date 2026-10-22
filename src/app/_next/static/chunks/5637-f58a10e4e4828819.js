'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5637],
    {
        75637: (e, t, i) => {
            (i.d(t, {
                Xt: () => _,
                iv: () => g,
                bq: () => c,
                O5: () => n,
                si: () => l,
                az: () => E,
                lv: () => h,
                XF: () => v,
                Fz: () => p,
                Ye: () => f,
                p$: () => a,
                Jd: () => ea,
                gv: () => ed,
                qP: () => ec,
                zT: () => el,
                F4: () => k,
                fD: () => o,
            }),
                (function (e) {
                    ((e.UPDATED = 'UPDATED'), (e.PARSING_ERROR = 'PARSING_ERROR'));
                })(a || (a = {})));
            let n = 1;
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
            })(c || (c = {})),
                (function (e) {
                    ((e.UNSPECIFIED = 'UNSPECIFIED'),
                        (e.TRACK = 'TRACK'),
                        (e.LOCAL_TRACK = 'LOCAL_TRACK'),
                        (e.INFINITE = 'INFINITE'),
                        (e.VIDEO_CLIP = 'VIDEO_CLIP'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(l || (l = {})),
                (function (e) {
                    ((e.UNSPECIFIED = 'UNSPECIFIED'),
                        (e.RECOMMENDED = 'RECOMMENDED'),
                        (e.ON_DEMAND = 'ON_DEMAND'),
                        (e.SEARCH = 'SEARCH'),
                        (e.ARTIST = 'ARTIST'),
                        (e.OWN = 'OWN'),
                        (e.EDITORIAL_CHOICE = 'EDITORIAL_CHOICE'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(u || (u = {})),
                (function (e) {
                    ((e.UNSPECIFIED = 'UNSPECIFIED'), (e.ALICE_SHOT = 'ALICE_SHOT'), (e.AD = 'AD'), (e.PREROLL = 'PREROLL'), (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(d || (d = {})),
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
                })(h || (h = {})),
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
                })(E || (E = {})),
                (function (e) {
                    ((e.ONLINE_BY_DEFAULT = 'ONLINE_BY_DEFAULT'), (e.OFFLINE = 'OFFLINE'), (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(p || (p = {})),
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
                })(v || (v = {})),
                (function (e) {
                    ((e.UNSPECIFIED = 'UNSPECIFIED'), (e.NONE = 'NONE'), (e.ONE = 'ONE'), (e.ALL = 'ALL'), (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(f || (f = {})),
                (function (e) {
                    ((e.UNSPECIFIED_TYPE = 'UNSPECIFIED_TYPE'),
                        (e.STANDARD = 'STANDARD'),
                        (e.PRIVATE_GROUP = 'PRIVATE_GROUP'),
                        (e.SPECTATOR = 'SPECTATOR'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(_ || (_ = {})),
                (function (e) {
                    ((e.DO_NOT_INTERCEPT_BY_DEFAULT = 'DO_NOT_INTERCEPT_BY_DEFAULT'),
                        (e.INTERCEPT_IF_NO_ONE_ACTIVE = 'INTERCEPT_IF_NO_ONE_ACTIVE'),
                        (e.INTERCEPT_EAGER = 'INTERCEPT_EAGER'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED'));
                })(C || (C = {})));
            let o = (e, t) => ({ device_id: e, version: Math.floor(0x8000000000000000 * Math.random()) + 0, timestamp_ms: void 0 !== t ? t : Date.now() });
            function s(e) {
                return JSON.parse(JSON.stringify(e));
            }
            function r(e) {
                return e instanceof Error ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause } : { data: e };
            }
            var a,
                c,
                l,
                u,
                d,
                h,
                E,
                p,
                v,
                f,
                _,
                C,
                S,
                g,
                b,
                O,
                R,
                N,
                m,
                y,
                T,
                I,
                D,
                A,
                P = i(21217);
            class w extends P.TinyEmitter {
                on(e, t, i) {
                    return (super.on(e, t, i), this);
                }
                once(e, t, i) {
                    return (super.once(e, t, i), this);
                }
                emit(e, t, i) {
                    return (super.emit(e, t, i), this);
                }
                off(e, t) {
                    return (super.off(e, t), this);
                }
            }
            function M(e) {
                let t = o(e, 0);
                return {
                    player_state: {
                        player_queue: {
                            current_playable_index: -1,
                            entity_id: '',
                            entity_type: h.VARIOUS,
                            playable_list: [],
                            options: { repeat_mode: f.NONE },
                            shuffle_optional: null,
                            entity_context: E.BASED_ON_ENTITY_BY_DEFAULT,
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
            let k = (e, t) => Number((Math.round(e * t) / t).toFixed(4));
            var j = i(36432);
            function U() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    i = arguments.length > 2 ? arguments[2] : void 0;
                return !!e || !t || !i || Number(t.timestamp_ms) < Number(i.timestamp_ms);
            }
            class L {
                on(e, t, i) {
                    let n = function (e, i) {
                        (this.trigger && this.trigger === (null == i ? void 0 : i.trigger)) || t(e);
                    };
                    return (
                        this.emitter.on(e, n, { trigger: i }),
                        () => {
                            this.emitter.off(e, n);
                        }
                    );
                }
                get currentState() {
                    return s(this.state);
                }
                get remoteControllerDevice() {
                    return this.lastActiveRemoteControllerDevice || this.onlineRemoteControllerDevice;
                }
                get fullState() {
                    return s({ state: this.state, prevState: this.prevState, diff: this.diff, remoteControllerDevice: this.remoteControllerDevice });
                }
                updateState(e) {
                    let t = [this.diffCalculators];
                    this.diff = {};
                    try {
                        let { isSetNewState: i = !0 } = e;
                        for (; t.length > 0;) {
                            let i = t.pop();
                            for (let n of Object.keys(i)) {
                                let o = i[n];
                                'function' == typeof o ? o(e) : t.push(o);
                            }
                        }
                        let n = Object.keys(this.diff);
                        if (i && n.length) {
                            let t = s(this.state);
                            (n.forEach((i) => {
                                (i in e.newState || i in this.state) && (t[i] = e.newState[i]);
                            }),
                                (this.prevState = s(this.state)),
                                (this.state = t));
                        }
                        this.updateLastRemoteControllerDevice();
                        let o = Object.assign(Object.assign({}, this.fullState), { options: e });
                        this.emitter.emit(a.UPDATED, o, { trigger: e.trigger });
                    } catch (t) {
                        let e = new j.t('YnisonStateController. Parsing error', { cause: r(t) });
                        this.emitter.emit(a.PARSING_ERROR, { error: e });
                        return;
                    }
                }
                calculateActiveDeviceDiff(e) {
                    let {
                            newState: { active_device_id_optional: t },
                        } = e,
                        { active_device_id_optional: i } = this.state;
                    t !== i && (this.diff.active_device_id_optional = t);
                }
                calculateDevicesDiff(e) {
                    let { newState: t, skipVersionCompare: i = !1 } = e,
                        n = this.state.devices.find((e) => {
                            var t;
                            return (null == (t = e.info) ? void 0 : t.device_id) === this.options.deviceConfig.info.device_id;
                        }),
                        o = t.devices.find((e) => {
                            var t;
                            return (null == (t = e.info) ? void 0 : t.device_id) === this.options.deviceConfig.info.device_id;
                        }),
                        { isVolumeChanged: s, isNewVersion: r } = (function (e, t, i) {
                            if (!t || !i) return { isVolumeChanged: !1, isNewVersion: !1 };
                            let { volume_info: n } = t,
                                { volume_info: o } = i,
                                s = U(e, n.version, o.version),
                                r = k(n.volume, t.capabilities.volume_granularity);
                            return { isVolumeChanged: r !== k(o.volume, i.capabilities.volume_granularity), isNewVersion: s };
                        })(i, n, o);
                    s && r && o && (this.diff.deviceVolume = o.volume_info);
                    let { isAnyoneConnectionChanged: a, changedConnectionStatusDevice: c } = (function (e, t) {
                        for (let i of t) {
                            let t = e.find((e) => e.info.device_id === i.info.device_id);
                            if (!t || t.is_offline !== i.is_offline) return { isAnyoneConnectionChanged: !0, changedConnectionStatusDevice: i };
                        }
                        return { isAnyoneConnectionChanged: !1 };
                    })(this.state.devices, t.devices);
                    (c && (this.diff.changedConnectionStatusDevice = c), ((s && r) || a) && (this.diff.devices = t.devices));
                }
                calculateEntityIdDiff(e) {
                    let {
                            newState: {
                                player_state: { player_queue: t },
                            },
                            skipVersionCompare: i = !1,
                        } = e,
                        { entity_id: n, version: o } = t,
                        {
                            player_state: {
                                player_queue: { entity_id: s, version: r },
                            },
                        } = this.state;
                    U(i, r, o) &&
                        s !== n &&
                        (this.initPlayerState(!0, !1),
                        this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.entity_id = n));
                }
                calculateEntityTypeDiff(e) {
                    let {
                            newState: {
                                player_state: {
                                    player_queue: { entity_type: t, version: i },
                                },
                            },
                            skipVersionCompare: n = !1,
                        } = e,
                        {
                            player_state: {
                                player_queue: { entity_type: o, version: s },
                            },
                        } = this.state;
                    U(n, s, i) &&
                        o !== t &&
                        (this.initPlayerState(!0, !1),
                        this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.entity_type = t));
                }
                calculateCurrentPlayableIndexDiff(e) {
                    let {
                            newState: {
                                player_state: { player_queue: t },
                            },
                            skipVersionCompare: i = !1,
                        } = e,
                        { entity_id: n, current_playable_index: o, version: s } = t,
                        {
                            player_state: {
                                player_queue: { entity_id: r, current_playable_index: a, version: c },
                            },
                        } = this.state;
                    U(i, c, s) &&
                        r === n &&
                        a !== o &&
                        (this.initPlayerState(!0, !1),
                        this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.current_playable_index = o));
                }
                calculatePlayableListDiff(e) {
                    let {
                            newState: {
                                player_state: { player_queue: t },
                            },
                            skipVersionCompare: i = !1,
                        } = e,
                        { playable_list: n, version: o } = t,
                        {
                            player_state: {
                                player_queue: { playable_list: s, version: r },
                            },
                        } = this.state,
                        a = U(i, r, o),
                        c = (function (e, t) {
                            var i, n;
                            if (e.length === t.length) {
                                let o = e.length;
                                for (let s = 0; s < o; s++)
                                    if (t[s] && (null == (i = e[s]) ? void 0 : i.playable_id) !== (null == (n = t[s]) ? void 0 : n.playable_id)) return !1;
                                return !0;
                            }
                            return !1;
                        })(s, n);
                    a &&
                        !c &&
                        (this.initPlayerState(!0, !1),
                        this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.playable_list = n));
                }
                calculateShuffleDiff(e) {
                    let {
                            newState: {
                                player_state: {
                                    player_queue: { shuffle_optional: t, version: i },
                                },
                            },
                            skipVersionCompare: n = !1,
                        } = e,
                        {
                            player_state: {
                                player_queue: { shuffle_optional: o, version: s },
                            },
                        } = this.state,
                        r = U(n, s, i),
                        a = (function (e, t) {
                            if (!e && !t) return !0;
                            if (e && t && e.playable_indices.length === t.playable_indices.length) {
                                let i = !0;
                                for (let n = 0; n <= e.playable_indices.length; n++)
                                    if (e.playable_indices[n] !== t.playable_indices[n]) {
                                        i = !1;
                                        break;
                                    }
                                return i;
                            }
                            return !1;
                        })(o, t);
                    r &&
                        !a &&
                        (this.initPlayerState(!0, !1),
                        this.diff.player_state &&
                            this.diff.player_state.player_queue &&
                            (t
                                ? (this.diff.player_state.player_queue.shuffle_optional = t)
                                : (this.diff.player_state.player_queue.shuffle_optional = { playable_indices: [] })));
                }
                calculateRepeatDiff(e) {
                    let {
                            newState: {
                                player_state: {
                                    player_queue: { options: t, version: i },
                                },
                            },
                            skipVersionCompare: n = !1,
                        } = e,
                        { repeat_mode: o } = t,
                        {
                            player_state: {
                                player_queue: { options: s, version: r },
                            },
                        } = this.state,
                        { repeat_mode: a } = s;
                    U(n, r, i) &&
                        a !== o &&
                        (this.initPlayerState(!0, !1),
                        this.diff.player_state && this.diff.player_state.player_queue && (this.diff.player_state.player_queue.options = t));
                }
                calculateProgressMsDiff(e) {
                    var t, i;
                    let {
                            newState: {
                                player_state: { status: o },
                            },
                            skipVersionCompare: s = !1,
                        } = e,
                        { progress_ms: r, version: a } = o,
                        {
                            player_state: {
                                status: { progress_ms: c, version: l },
                            },
                        } = this.state,
                        u = U(s, l, a),
                        d = (t = Number(r)) !== (i = Number(c)) && (i < 1500 || Math.abs(t - i) > n);
                    u && d && (this.initPlayerState(!1, !0), this.diff.player_state && this.diff.player_state.status && (this.diff.player_state.status.progress_ms = r));
                }
                calculateSpeedDiff(e) {
                    let {
                            newState: {
                                player_state: {
                                    status: { playback_speed: t, version: i },
                                },
                            },
                            skipVersionCompare: n = !1,
                        } = e,
                        {
                            player_state: {
                                status: { playback_speed: o, version: s },
                            },
                        } = this.state;
                    U(n, s, i) &&
                        o !== t &&
                        (this.initPlayerState(!1, !0), this.diff.player_state && this.diff.player_state.status && (this.diff.player_state.status.playback_speed = t));
                }
                calculatePausedDiff(e) {
                    let {
                            newState: {
                                player_state: { status: t },
                            },
                            skipVersionCompare: i = !1,
                        } = e,
                        { paused: n, version: o } = t,
                        {
                            player_state: {
                                status: { paused: s, version: r },
                            },
                        } = this.state;
                    U(i, r, o) &&
                        s !== n &&
                        (this.initPlayerState(!1, !0), this.diff.player_state && this.diff.player_state.status && (this.diff.player_state.status.paused = n));
                }
                initPlayerState(e, t) {
                    (this.diff.player_state || (this.diff.player_state = {}),
                        e && !this.diff.player_state.player_queue && (this.diff.player_state.player_queue = {}),
                        t && !this.diff.player_state.status && (this.diff.player_state.status = {}));
                }
                getLastActiveRemoteControllerDevice() {
                    var e, t;
                    let i = this.options.deviceConfig.info.device_id,
                        n = this.state.active_device_id_optional,
                        o = this.state.devices.find((e) => {
                            var t;
                            return (null == (t = e.info) ? void 0 : t.device_id) === n;
                        }),
                        s = [this.state.player_state.player_queue.version, this.state.player_state.status.version];
                    (null == (e = null == o ? void 0 : o.volume_info) ? void 0 : e.version) &&
                        s.push(null == (t = null == o ? void 0 : o.volume_info) ? void 0 : t.version);
                    let r = s
                        .sort((e, t) => t.timestamp_ms - e.timestamp_ms)
                        .find((e) => {
                            var t;
                            if (e.device_id === i || 0 === e.timestamp_ms) return !1;
                            let n = this.state.devices.find((t) => {
                                var i, n;
                                return (
                                    (null == (i = t.info) ? void 0 : i.device_id) === e.device_id && (null == (n = t.capabilities) ? void 0 : n.can_be_remote_controller)
                                );
                            });
                            return !!(n && (null == (t = null == n ? void 0 : n.capabilities) ? void 0 : t.can_be_remote_controller));
                        });
                    if (r)
                        return this.state.devices.find((e) => {
                            var t;
                            return (null == (t = e.info) ? void 0 : t.device_id) === (null == r ? void 0 : r.device_id);
                        });
                }
                getOnlineRemoteControllerDevice() {
                    var e, t, i, n, o;
                    let s;
                    for (let r of this.state.devices)
                        if (!r.is_offline && (null == (e = r.capabilities) ? void 0 : e.can_be_remote_controller)) {
                            if (
                                this.lastActiveRemoteControllerDevice &&
                                (null == (t = r.info) ? void 0 : t.device_id) === (null == (i = this.lastActiveRemoteControllerDevice.info) ? void 0 : i.device_id)
                            )
                                return r;
                            (this.onlineRemoteControllerDevice &&
                                (null == (n = r.info) ? void 0 : n.device_id) === (null == (o = this.onlineRemoteControllerDevice.info) ? void 0 : o.device_id) &&
                                (s = r),
                                s || (s = r));
                        }
                    return s;
                }
                updateLastRemoteControllerDevice() {
                    let e = this.getLastActiveRemoteControllerDevice();
                    (e ? (this.onlineRemoteControllerDevice = void 0) : (this.onlineRemoteControllerDevice = this.getOnlineRemoteControllerDevice()),
                        (this.lastActiveRemoteControllerDevice = e));
                }
                constructor(e) {
                    (Object.defineProperty(this, 'state', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'prevState', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'diff', { enumerable: !0, configurable: !0, writable: !0, value: {} }),
                        Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'diffCalculators', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'lastActiveRemoteControllerDevice', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'onlineRemoteControllerDevice', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'emitter', { enumerable: !0, configurable: !0, writable: !0, value: new w() }),
                        (this.options = e),
                        (this.state = M(e.deviceConfig.info.device_id)),
                        (this.prevState = M(e.deviceConfig.info.device_id)),
                        (this.diffCalculators = {
                            active_device_id_optional: this.calculateActiveDeviceDiff.bind(this),
                            devices: this.calculateDevicesDiff.bind(this),
                            player_state: {
                                player_queue: {
                                    entity_id: this.calculateEntityIdDiff.bind(this),
                                    entity_type: this.calculateEntityTypeDiff.bind(this),
                                    entity_context: () => {},
                                    current_playable_index: this.calculateCurrentPlayableIndexDiff.bind(this),
                                    playable_list: this.calculatePlayableListDiff.bind(this),
                                    options: { repeat_mode: this.calculateRepeatDiff.bind(this) },
                                    version: () => {},
                                    shuffle_optional: this.calculateShuffleDiff.bind(this),
                                    from_optional: () => {},
                                    initial_entity_optional: () => {},
                                    adding_options_optional: () => {},
                                    queue: () => {},
                                },
                                status: {
                                    progress_ms: this.calculateProgressMsDiff.bind(this),
                                    duration_ms: () => {},
                                    paused: this.calculatePausedDiff.bind(this),
                                    playback_speed: this.calculateSpeedDiff.bind(this),
                                    version: () => {},
                                },
                                player_queue_inject_optional: () => {},
                            },
                        }));
                }
            }
            (!(function (e) {
                ((e.PRODUCTION = 'ynison.music.yandex.ru'), (e.QA = 'qa.ynison.music.yandex.ru'));
            })(S || (S = {})),
                (function (e) {
                    ((e.CONNECTING = 'CONNECTING'),
                        (e.CONNECTED = 'CONNECTED'),
                        (e.DISCONNECTED = 'DISCONNECTED'),
                        (e.WAITING_FOR_RECONNECT = 'WAITING_FOR_RECONNECT'),
                        (e.READY_TO_RECONNECT = 'READY_TO_RECONNECT'));
                })(g || (g = {})),
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
                })(b || (b = {})),
                (function (e) {
                    ((e.ynisonBackoffMillis = 'ynison-backoff-millis'),
                        (e.ynisonErrorCode = 'ynison-error-code'),
                        (e.ynisonGoAwayForSeconds = 'ynison-go-away-for-seconds'));
                })(O || (O = {})),
                (function (e) {
                    ((e.CLIENT = 'CLIENT'), (e.SERVER = 'SERVER'));
                })(R || (R = {})),
                (function (e) {
                    ((e.REDIRECTOR = 'REDIRECTOR'), (e.HUB = 'HUB'));
                })(N || (N = {})));
            var H = function (e, t) {
                var i = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (i[n] = e[n]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                        0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]]);
                return i;
            };
            class G extends j.t {
                constructor(e, t = {}) {
                    var { code: i = 'E_HUB_MESSAGE_EXCEPTION' } = t;
                    (super(e, Object.assign({ code: i }, H(t, ['code']))),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'HubMessageException' }),
                        Object.setPrototypeOf(this, G.prototype));
                }
            }
            var F = i(6139);
            class B {
                constructor(e) {
                    (Object.defineProperty(this, 'redirectorResponse', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'connectionState', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.redirectorResponse = new F.cJ(e.redirectorResponse)),
                        (this.connectionState = new F.cJ(e.connectionState)));
                }
            }
            !(function (e) {
                ((e.ynisonDeviceId = 'Ynison-Device-Id'),
                    (e.ynisonRedirectTicket = 'Ynison-Redirect-Ticket'),
                    (e.ynisonSessionId = 'Ynison-Session-Id'),
                    (e.ynisonDeviceInfo = 'Ynison-Device-Info'),
                    (e.multiAuthUserId = 'X-Yandex-Music-Multi-Auth-User-Id'));
            })(m || (m = {}));
            var Y = function (e, t) {
                var i = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (i[n] = e[n]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                        0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]]);
                return i;
            };
            class V extends j.t {
                constructor(e, t = {}) {
                    var { code: i = 'E_REDIRECTOR_EXCEPTION' } = t;
                    (super(e, Object.assign({ code: i }, Y(t, ['code']))),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'RedirectorException' }),
                        Object.setPrototypeOf(this, V.prototype));
                }
            }
            function q(e) {
                let t;
                switch (e) {
                    case c.WEB:
                        t = 1;
                        break;
                    case c.WEB_TV:
                        t = 5;
                        break;
                    default:
                        t = 1;
                }
                return t;
            }
            function W(e) {
                let { device_id: t, app_name: i, app_version: n, type: o } = e,
                    s = q(o);
                return { [m.ynisonDeviceId]: t, [m.ynisonDeviceInfo]: JSON.stringify({ app_name: i, app_version: n, type: s }) };
            }
            class x {
                getHub(e) {
                    var t, i, n, o;
                    return (
                        (t = this),
                        (i = void 0),
                        (n = void 0),
                        (o = function* () {
                            return new Promise((t, i) => {
                                let { oauth: n, multiAuthUserId: o, sessionId: s } = e,
                                    a = W(this.device);
                                (void 0 !== n && (a.authorization = 'OAuth '.concat(n)),
                                    void 0 !== o && (a[m.multiAuthUserId] = String(o)),
                                    void 0 !== s && (a[m.ynisonSessionId] = s));
                                let c = new WebSocket(Object.values(this.connectionConfig).join(''), ['Bearer', 'v2', encodeURIComponent(JSON.stringify(a))]),
                                    l = (e) => {
                                        try {
                                            let n = JSON.parse(e.data);
                                            'error' in n
                                                ? (c.close(), i(new V('Error message from redirector', { data: { redirectorResponse: n.error } })))
                                                : (c.close(), t(n));
                                        } catch (e) {
                                            new V('Error while processing message from redirector', { data: { redirectorResponse: {} }, cause: r(e) });
                                        }
                                    },
                                    u = () => {
                                        i(new V('Error in connection to redirector', { data: { redirectorResponse: {} } }));
                                    },
                                    d = () => {
                                        (c.removeEventListener('message', l), c.removeEventListener('error', u), c.removeEventListener('close', d));
                                    };
                                (c.addEventListener('message', l), c.addEventListener('error', u), c.addEventListener('close', d));
                            });
                        }),
                        new (n || (n = Promise))(function (e, s) {
                            function r(e) {
                                try {
                                    c(o.next(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function a(e) {
                                try {
                                    c(o.throw(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function c(t) {
                                var i;
                                t.done
                                    ? e(t.value)
                                    : ((i = t.value) instanceof n
                                          ? i
                                          : new n(function (e) {
                                                e(i);
                                            })
                                      ).then(r, a);
                            }
                            c((o = o.apply(t, i || [])).next());
                        })
                    );
                }
                constructor(e) {
                    (Object.defineProperty(this, 'device', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'connectionConfig', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.device = e.device),
                        (this.connectionConfig = e.connectionConfig));
                }
            }
            function K(e, t) {
                let { type: i, app_name: n, app_version: o, device_id: s } = t,
                    { session_id: r, redirect_ticket: a } = e,
                    c = q(i);
                return {
                    [m.ynisonDeviceId]: s,
                    [m.ynisonRedirectTicket]: a,
                    [m.ynisonSessionId]: r,
                    [m.ynisonDeviceInfo]: JSON.stringify({ app_name: n, app_version: o, type: c }),
                };
            }
            var Z = i(59342);
            let J = (e, t) => {
                let i = (0, Z.A)(),
                    n = Object.assign(Object.assign({}, e), { rid: i });
                if (t) {
                    let { player_action_timestamp_ms: e = Date.now(), activity_interception_type: i = C.DO_NOT_INTERCEPT_BY_DEFAULT } = t;
                    ((n.player_action_timestamp_ms = e), (n.activity_interception_type = i));
                } else ((n.player_action_timestamp_ms = Date.now()), (n.activity_interception_type = C.DO_NOT_INTERCEPT_BY_DEFAULT));
                return { request: n, rid: i };
            };
            class z {
                onMessageSent(e, t) {
                    (this.history.set(e, t), this.deleteOldRecords());
                }
                shouldIgnoreIncomingMessage(e) {
                    var t;
                    let i = this.history.get(e);
                    return null != (t = null == i ? void 0 : i.ignoreResponse) && t;
                }
                clear() {
                    this.history.clear();
                }
                deleteOldRecords() {
                    let e = this.history.keys();
                    for (; this.history.size >= this.limit;) this.history.delete(e.next().value);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'history', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'limit', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.limit = e.limit),
                        (this.history = new Map()));
                }
            }
            var X = function (e, t) {
                var i = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (i[n] = e[n]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                        0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]]);
                return i;
            };
            class Q extends j.t {
                constructor(e, t = {}) {
                    var { code: i = 'E_HUB_CONNECTION_EXCEPTION' } = t;
                    (super(e, Object.assign({ code: i }, X(t, ['code']))),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'HubConnectionException' }),
                        Object.setPrototypeOf(this, Q.prototype));
                }
            }
            let $ = '[CLIENT-REASON] ';
            class ee {
                on(e, t) {
                    return (
                        this.emitter.on(e, t),
                        () => {
                            this.emitter.off(e, t);
                        }
                    );
                }
                get config() {
                    return s(this.connectorConfig);
                }
                updateFullState(e, t) {
                    let { request: i, rid: n } = J({ update_full_state: Object.assign({}, e) }, Object.assign({ player_action_timestamp_ms: 0 }, t));
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !1 }), n);
                }
                updatePlayingStatus(e, t) {
                    let { request: i, rid: n } = J({ update_playing_status: Object.assign({}, e) }, t);
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !0 }), n);
                }
                updateActiveDevice(e, t) {
                    let { request: i, rid: n } = J({ update_active_device: e }, t);
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !0 }), n);
                }
                updateSessionParams(e, t) {
                    let { request: i, rid: n } = J({ update_session_params: e }, t);
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !0 }), n);
                }
                updatePlayerState(e, t) {
                    let { request: i, rid: n } = J({ update_player_state: Object.assign({}, e) }, t);
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !0 }), n);
                }
                updateVolumeInfo(e, t) {
                    let { request: i, rid: n } = J({ update_volume_info: Object.assign({}, e) }, t);
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !0 }), n);
                }
                connect(e) {
                    let { oauth: t, multiAuthUserId: i } = e;
                    (void 0 !== t && (this.connectorConfig.oauth = t),
                        void 0 !== i && (this.connectorConfig.multiAuthUserId = i),
                        [g.DISCONNECTED, g.READY_TO_RECONNECT].includes(this.state.connectionState.value) &&
                            ((this.state.connectionState.value = g.CONNECTING),
                            this.emitter.emit(b.NEW_CONNECTION_ATTEMPT, {}),
                            this.redirectorSocket
                                .getHub({
                                    oauth: this.connectorConfig.oauth,
                                    multiAuthUserId: this.connectorConfig.multiAuthUserId,
                                    sessionId: this.connectorConfig.sessionId,
                                })
                                .then((e) => {
                                    ((this.state.redirectorResponse.value = e), this.connectToHub());
                                })
                                .catch((e) => {
                                    let t =
                                        (16 !== e.data.redirectorResponse.grpc_code || 401 !== e.data.redirectorResponse.http_code) &&
                                        this.reconnectAttempts < this.connectorConfig.reconnectAttemptsLimit;
                                    if ((this.emitter.emit(b.CONNECTION_ERROR, { destination: N.REDIRECTOR, error: e, shouldReconnect: t }), t)) {
                                        let t =
                                            e.data.redirectorResponse.extra_headers && e.data.redirectorResponse.extra_headers[O.ynisonGoAwayForSeconds]
                                                ? 1e3 * Number(e.data.redirectorResponse.extra_headers[O.ynisonGoAwayForSeconds])
                                                : this.connectorConfig.defaultReconnectTimeoutMS;
                                        this.reconnect({ timeout: t });
                                    } else ((this.state.connectionState.value = g.DISCONNECTED), (this.reconnectAttempts = 0));
                                })));
                }
                disconnect(e) {
                    (this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), (this.reconnectTimeout = null)),
                        (this.reconnectAttempts = 0),
                        this.closeConnection(1e3, ''.concat($).concat(e)),
                        (this.state.connectionState.value = g.DISCONNECTED));
                }
                closeConnection(e, t) {
                    var i, n;
                    ((null == (i = this.socket) ? void 0 : i.readyState) === WebSocket.CONNECTING ||
                        (null == (n = this.socket) ? void 0 : n.readyState) === WebSocket.OPEN) &&
                        this.socket.close(e, t);
                }
                clearConnection() {
                    ((this.socket = null), this.historyController.clear());
                }
                connectToHub() {
                    let { oauth: e, device: t, multiAuthUserId: i } = this.connectorConfig,
                        { protocol: n, path: o } = this.connectorConfig.hubConnectionConfig;
                    if (!this.state.redirectorResponse.value) return;
                    let { host: s } = this.state.redirectorResponse.value,
                        r = K(this.state.redirectorResponse.value, t);
                    (void 0 !== e && (r.authorization = 'OAuth '.concat(e)), void 0 !== i && (r['X-Yandex-Music-Multi-Auth-User-Id'] = String(i)));
                    let a = ''.concat(n).concat(s).concat(o),
                        c = ['Bearer', 'v2', encodeURIComponent(JSON.stringify(r))];
                    ((this.socket = new WebSocket(a, c)),
                        this.socket.addEventListener('message', (e) => {
                            this.onReceiveMessage(e);
                        }),
                        this.socket.addEventListener('error', () => {
                            let e = this.state.connectionState.value,
                                t = this.reconnectAttempts < this.connectorConfig.reconnectAttemptsLimit,
                                i = new Q('Error in connection to hub', { data: { redirectorResponse: this.state.redirectorResponse.value || {}, connectingState: e } });
                            (this.emitter.emit(b.CONNECTION_ERROR, { destination: N.HUB, error: i, shouldReconnect: t }),
                                t ? this.reconnect() : ((this.state.connectionState.value = g.DISCONNECTED), (this.reconnectAttempts = 0)));
                        }),
                        this.socket.addEventListener('open', () => {
                            ((this.state.connectionState.value = g.CONNECTED), this.emitter.emit(b.CONNECTED, {}));
                        }),
                        this.socket.addEventListener('close', (e) => {
                            ((this.state.connectionState.value = g.DISCONNECTED), this.clearConnection());
                            let t = e.reason.includes($);
                            this.emitter.emit(b.DISCONNECTED, { trigger: t ? R.CLIENT : R.SERVER, event: e });
                        }));
                }
                reconnect() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { timeout: t = this.connectorConfig.defaultReconnectTimeoutMS } = e;
                    this.reconnectAttempts += 1;
                    let i = () => this.connect({});
                    ((this.reconnectTimeout = setTimeout(() => {
                        ((this.state.connectionState.value = g.READY_TO_RECONNECT), i());
                    }, t)),
                        (this.state.connectionState.value = g.WAITING_FOR_RECONNECT));
                }
                onReceiveMessage(e) {
                    try {
                        let t = JSON.parse(e.data);
                        if ('error' in t) {
                            let i = this.reconnectAttempts < this.connectorConfig.reconnectAttemptsLimit;
                            this.closeConnection(1e3, ''.concat($, 'Error in message'));
                            let n = new G('Error message from hub', {
                                data: { redirectorResponse: this.state.redirectorResponse.value || {}, hubResponse: t.error, hubResponseRaw: e.data },
                            });
                            if ((this.emitter.emit(b.HUB_ERROR, { error: n, shouldReconnect: i }), i)) {
                                let e = t.error.details[O.ynisonGoAwayForSeconds]
                                    ? 1e3 * Number(t.error.details[O.ynisonGoAwayForSeconds])
                                    : this.connectorConfig.defaultReconnectTimeoutMS;
                                this.reconnect({ timeout: e });
                            } else ((this.state.connectionState.value = g.DISCONNECTED), (this.reconnectAttempts = 0));
                        } else
                            ((this.reconnectAttempts = 0),
                                this.historyController.shouldIgnoreIncomingMessage(t.rid) || this.emitter.emit(b.RECEIVE_MESSAGE, { rawData: t }));
                    } catch (i) {
                        let t = new G('Error while processing message from hub', {
                            data: { redirectorResponse: this.state.redirectorResponse.value || {}, hubResponse: {}, hubResponseRaw: e.data },
                            cause: r(i),
                        });
                        this.emitter.emit(b.HUB_MESSAGE_PARSING_ERROR, { error: t });
                    }
                }
                sendRequest(e) {
                    null !== this.socket && this.socket.readyState === WebSocket.OPEN && this.state.connectionState.value === g.CONNECTED
                        ? (this.socket.send(JSON.stringify(e)), this.emitter.emit(b.MESSAGE_SENT, e))
                        : this.emitter.emit(b.MESSAGE_LOST, e);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'connectorConfig', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
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
                            value: new B({ redirectorResponse: null, connectionState: g.DISCONNECTED }),
                        }),
                        (this.connectorConfig = e.config),
                        (this.redirectorSocket = new x({ device: this.connectorConfig.device, connectionConfig: this.connectorConfig.redirectorConnectionConfig })),
                        (this.historyController = new z({ limit: this.connectorConfig.historyLimit })));
                }
            }
            let et = (e, t, i) =>
                    'undefined' != typeof CloseEvent
                        ? new CloseEvent('close', { code: e, reason: t, wasClean: i })
                        : Object.assign(new Event('close'), { code: e, reason: t, wasClean: i }),
                ei = '[CLIENT-REASON] ',
                en = [1e3, 5e3, 3e4];
            class eo {
                connect(e) {
                    this.updateConnectParams(e);
                    let t = [g.DISCONNECTED, g.READY_TO_RECONNECT];
                    null === this.reconnectTimeout &&
                        t.includes(this.connectionState) &&
                        (this.closeHubSocket(), this.setConnectionState(g.CONNECTING), this.callbacks.onConnectionAttempt(), this.getHub());
                }
                disconnect(e) {
                    let t = this.connectionState !== g.DISCONNECTED;
                    this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), (this.reconnectTimeout = null));
                    let i = ''.concat(ei).concat(e);
                    (this.resetReconnectSequence(),
                        this.closeRedirectorSocket(1e3, i),
                        this.closeHubSocket(1e3, i),
                        this.setConnectionState(g.DISCONNECTED),
                        t && this.callbacks.onDisconnected(et(1e3, i, !0), !0));
                }
                send(e) {
                    return null !== this.socket && this.socket.readyState === WebSocket.OPEN && this.connectionState === g.CONNECTED && (this.socket.send(e), !0);
                }
                getHub() {
                    let { oauth: e, multiAuthUserId: t } = this.connectParams,
                        { sessionId: i } = this.config,
                        n = W(this.config.device);
                    (void 0 !== e && (n.authorization = 'OAuth '.concat(e)),
                        void 0 !== t && (n[m.multiAuthUserId] = String(t)),
                        void 0 !== i && (n[m.ynisonSessionId] = i));
                    let o = Object.values(this.config.redirectorConnectionConfig).join(''),
                        s = ['Bearer', 'v2', encodeURIComponent(JSON.stringify(n))];
                    (this.closeRedirectorSocket(),
                        (this.redirectorSocket = new WebSocket(o, s)),
                        this.redirectorSocket.addEventListener('message', this.onRedirectorMessage),
                        this.redirectorSocket.addEventListener('error', this.onRedirectorError),
                        this.redirectorSocket.addEventListener('close', this.onRedirectorClose));
                }
                onRedirectorMessage(e) {
                    let t;
                    if (null !== this.redirectorSocket && e.currentTarget === this.redirectorSocket) {
                        try {
                            t = JSON.parse(e.data);
                        } catch (t) {
                            let e = new V('Error while processing message from redirector', { data: { redirectorResponse: {} }, cause: r(t) });
                            (this.closeRedirectorSocket(), this.callbacks.onRedirectorError(e, !1), this.finishReconnectSequence());
                            return;
                        }
                        if ((this.closeRedirectorSocket(), 'error' in t)) {
                            let e = new V('Error message from redirector', { data: { redirectorResponse: t.error } });
                            this.handleErrorResponse(t.error.extra_headers, (t) => {
                                this.callbacks.onRedirectorError(e, t);
                            });
                        } else ((this.redirectorResponse = t), this.callbacks.onRedirectorResponse(t), this.connectToHub(t));
                    }
                }
                onRedirectorError(e) {
                    if (null === this.redirectorSocket || e.currentTarget !== this.redirectorSocket) return;
                    this.closeRedirectorSocket();
                    let t = new V('Error in connection to redirector', { data: { redirectorResponse: {} } });
                    this.handleErrorResponse(void 0, (e) => {
                        this.callbacks.onRedirectorError(t, e);
                    });
                }
                onRedirectorClose(e) {
                    if (null === this.redirectorSocket || e.currentTarget !== this.redirectorSocket) return;
                    this.closeRedirectorSocket();
                    let t = new V('Connection to redirector closed before response', { data: { redirectorResponse: {} } });
                    (this.callbacks.onRedirectorError(t, !1), this.finishReconnectSequence());
                }
                clearRedirectorSocket() {
                    null !== this.redirectorSocket &&
                        (this.redirectorSocket.removeEventListener('message', this.onRedirectorMessage),
                        this.redirectorSocket.removeEventListener('error', this.onRedirectorError),
                        this.redirectorSocket.removeEventListener('close', this.onRedirectorClose),
                        (this.redirectorSocket = null));
                }
                closeRedirectorSocket(e, t) {
                    if (null === this.redirectorSocket) return;
                    let i = this.redirectorSocket;
                    (this.clearRedirectorSocket(), (i.readyState === WebSocket.CONNECTING || i.readyState === WebSocket.OPEN) && i.close(e, t));
                }
                connectToHub(e) {
                    let { oauth: t, multiAuthUserId: i } = this.connectParams,
                        { device: n } = this.config,
                        { protocol: o, path: s } = this.config.hubConnectionConfig,
                        { host: r } = e,
                        a = K(e, n);
                    (void 0 !== t && (a.authorization = 'OAuth '.concat(t)), void 0 !== i && (a[m.multiAuthUserId] = String(i)));
                    let c = ''.concat(o).concat(r).concat(s),
                        l = ['Bearer', 'v2', encodeURIComponent(JSON.stringify(a))];
                    ((this.socket = new WebSocket(c, l)),
                        this.socket.addEventListener('message', this.onHubMessage),
                        this.socket.addEventListener('error', this.onHubError),
                        this.socket.addEventListener('open', this.onHubOpen),
                        this.socket.addEventListener('close', this.onHubClose));
                }
                onHubMessage(e) {
                    if (null !== this.socket && e.currentTarget === this.socket)
                        try {
                            let t = JSON.parse(e.data);
                            if ('error' in t) {
                                let i = ''.concat(ei, 'Error in message');
                                this.closeHubSocket(1e3, i);
                                let n = new G('Error message from hub', {
                                    data: { redirectorResponse: this.redirectorResponse || {}, hubResponse: t.error, hubResponseRaw: e.data },
                                });
                                (this.handleErrorResponse(t.error.details, (e) => {
                                    this.callbacks.onHubError(n, e);
                                }),
                                    this.setConnectionState(g.DISCONNECTED),
                                    this.callbacks.onDisconnected(et(1e3, i, !0), !1));
                            } else (this.resetReconnectSequence(), this.callbacks.onMessage(t));
                        } catch (i) {
                            let t = new G('Error while processing message from hub', {
                                data: { redirectorResponse: this.redirectorResponse || {}, hubResponse: {}, hubResponseRaw: e.data },
                                cause: r(i),
                            });
                            this.callbacks.onMessageParsingError(t);
                        }
                }
                onHubError(e) {
                    if (null === this.socket || e.currentTarget !== this.socket) return;
                    let t = this.connectionState;
                    (this.closeHubSocket(),
                        this.handleHubConnectionFailure(t),
                        this.setConnectionState(g.DISCONNECTED),
                        this.callbacks.onDisconnected(et(1006, '', !1), !1));
                }
                onHubOpen(e) {
                    null !== this.socket &&
                        e.currentTarget === this.socket &&
                        this.connectionState === g.CONNECTING &&
                        (this.setConnectionState(g.CONNECTED), this.callbacks.onConnected());
                }
                onHubClose(e) {
                    null !== this.socket &&
                        e.currentTarget === this.socket &&
                        (this.clearHubSocket(), this.resetReconnectSequence(), this.setConnectionState(g.DISCONNECTED), this.callbacks.onDisconnected(e, !1));
                }
                clearHubSocket() {
                    null !== this.socket &&
                        (this.socket.removeEventListener('message', this.onHubMessage),
                        this.socket.removeEventListener('error', this.onHubError),
                        this.socket.removeEventListener('open', this.onHubOpen),
                        this.socket.removeEventListener('close', this.onHubClose),
                        (this.socket = null));
                }
                closeHubSocket(e, t) {
                    if (null === this.socket) return;
                    let i = this.socket;
                    (this.clearHubSocket(), (i.readyState === WebSocket.CONNECTING || i.readyState === WebSocket.OPEN) && i.close(e, t));
                }
                handleHubConnectionFailure(e) {
                    let t = this.canReconnect(),
                        i = new Q('Error in connection to hub', { data: { redirectorResponse: this.redirectorResponse || {}, connectingState: e } });
                    (this.callbacks.onHubConnectionError(i, t), t ? this.reconnect() : this.finishReconnectSequence());
                }
                handleErrorResponse(e, t) {
                    let i = null == e ? void 0 : e[O.ynisonErrorCode],
                        n = null == e ? void 0 : e[O.ynisonGoAwayForSeconds],
                        o = null == e ? void 0 : e[O.ynisonBackoffMillis],
                        s = void 0 === i || !i.startsWith('4');
                    if (void 0 !== n) this.resetReconnectSequence();
                    else if (s && void 0 !== o) {
                        let e,
                            t = o.split(':').map(Number);
                        (null !== this.temporaryReconnectTimeoutsMS &&
                            ((e = this.temporaryReconnectTimeoutsMS), e.length === t.length && e.every((e, i) => e === t[i]))) ||
                            ((this.temporaryReconnectTimeoutsMS = t), (this.reconnectAttempts = 0));
                    }
                    let r = s && this.canReconnect();
                    return (t(r), r) ? (void 0 !== n ? void this.scheduleReconnect(1e3 * Number(n)) : void this.reconnect()) : void this.finishReconnectSequence();
                }
                reconnect() {
                    let e = this.getReconnectTimeoutsMS()[this.reconnectAttempts];
                    if (void 0 === e) return void this.finishReconnectSequence();
                    ((this.reconnectAttempts += 1), this.scheduleReconnect(e));
                }
                scheduleReconnect(e) {
                    let t = () => this.connect({});
                    ((this.reconnectTimeout = setTimeout(() => {
                        ((this.reconnectTimeout = null), this.setConnectionState(g.READY_TO_RECONNECT), t());
                    }, e)),
                        this.setConnectionState(g.WAITING_FOR_RECONNECT));
                }
                finishReconnectSequence() {
                    (this.setConnectionState(g.DISCONNECTED), this.resetReconnectSequence());
                }
                resetReconnectSequence() {
                    ((this.reconnectAttempts = 0), (this.temporaryReconnectTimeoutsMS = null));
                }
                getReconnectTimeoutsMS() {
                    var e;
                    return null != (e = this.temporaryReconnectTimeoutsMS) ? e : en;
                }
                canReconnect() {
                    return this.reconnectAttempts < this.getReconnectTimeoutsMS().length;
                }
                setConnectionState(e) {
                    ((this.connectionState = e), this.callbacks.onStateChange(e));
                }
                updateConnectParams(e) {
                    let { oauth: t, multiAuthUserId: i } = e;
                    (void 0 !== t && (this.connectParams.oauth = t), void 0 !== i && (this.connectParams.multiAuthUserId = i));
                }
                constructor(e) {
                    (Object.defineProperty(this, 'config', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'callbacks', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'socket', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                        Object.defineProperty(this, 'redirectorSocket', { enumerable: !0, configurable: !0, writable: !0, value: null }),
                        Object.defineProperty(this, 'connectionState', { enumerable: !0, configurable: !0, writable: !0, value: g.DISCONNECTED }),
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
            }
            class es {
                on(e, t) {
                    return (
                        this.emitter.on(e, t),
                        () => {
                            this.emitter.off(e, t);
                        }
                    );
                }
                get config() {
                    return s(this.connectorConfig);
                }
                updateFullState(e, t) {
                    let { request: i, rid: n } = J({ update_full_state: Object.assign({}, e) }, Object.assign({ player_action_timestamp_ms: 0 }, t));
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !1 }), n);
                }
                updatePlayingStatus(e, t) {
                    let { request: i, rid: n } = J({ update_playing_status: Object.assign({}, e) }, t);
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !0 }), n);
                }
                updateActiveDevice(e, t) {
                    let { request: i, rid: n } = J({ update_active_device: e }, t);
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !0 }), n);
                }
                updateSessionParams(e, t) {
                    let { request: i, rid: n } = J({ update_session_params: e }, t);
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !0 }), n);
                }
                updatePlayerState(e, t) {
                    let { request: i, rid: n } = J({ update_player_state: Object.assign({}, e) }, t);
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !0 }), n);
                }
                updateVolumeInfo(e, t) {
                    let { request: i, rid: n } = J({ update_volume_info: Object.assign({}, e) }, t);
                    return (this.sendRequest(i), this.historyController.onMessageSent(n, { ignoreResponse: !0 }), n);
                }
                connect(e) {
                    let { oauth: t, multiAuthUserId: i } = e;
                    (void 0 !== t && (this.connectorConfig.oauth = t),
                        void 0 !== i && (this.connectorConfig.multiAuthUserId = i),
                        this.socketController.connect({ oauth: this.connectorConfig.oauth, multiAuthUserId: this.connectorConfig.multiAuthUserId }));
                }
                disconnect(e) {
                    this.socketController.disconnect(e);
                }
                sendRequest(e) {
                    this.socketController.send(JSON.stringify(e)) ? this.emitter.emit(b.MESSAGE_SENT, e) : this.emitter.emit(b.MESSAGE_LOST, e);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'connectorConfig', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'socketController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'historyController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'emitter', { enumerable: !0, configurable: !0, writable: !0, value: new w() }),
                        Object.defineProperty(this, 'state', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: new B({ redirectorResponse: null, connectionState: g.DISCONNECTED }),
                        }),
                        (this.connectorConfig = e.config),
                        (this.historyController = new z({ limit: this.connectorConfig.historyLimit })),
                        (this.socketController = new eo({
                            config: {
                                device: this.connectorConfig.device,
                                redirectorConnectionConfig: this.connectorConfig.redirectorConnectionConfig,
                                hubConnectionConfig: this.connectorConfig.hubConnectionConfig,
                                sessionId: this.connectorConfig.sessionId,
                            },
                            callbacks: {
                                onStateChange: (e) => {
                                    this.state.connectionState.value = e;
                                },
                                onConnectionAttempt: () => {
                                    this.emitter.emit(b.NEW_CONNECTION_ATTEMPT, {});
                                },
                                onRedirectorResponse: (e) => {
                                    this.state.redirectorResponse.value = e;
                                },
                                onConnected: () => {
                                    this.emitter.emit(b.CONNECTED, {});
                                },
                                onDisconnected: (e, t) => {
                                    (this.historyController.clear(), this.emitter.emit(b.DISCONNECTED, { trigger: t ? R.CLIENT : R.SERVER, event: e }));
                                },
                                onRedirectorError: (e, t) => {
                                    this.emitter.emit(b.CONNECTION_ERROR, { destination: N.REDIRECTOR, error: e, shouldReconnect: t });
                                },
                                onHubConnectionError: (e, t) => {
                                    this.emitter.emit(b.CONNECTION_ERROR, { destination: N.HUB, error: e, shouldReconnect: t });
                                },
                                onHubError: (e, t) => {
                                    this.emitter.emit(b.HUB_ERROR, { error: e, shouldReconnect: t });
                                },
                                onMessageParsingError: (e) => {
                                    this.emitter.emit(b.HUB_MESSAGE_PARSING_ERROR, { error: e });
                                },
                                onMessage: (e) => {
                                    this.historyController.shouldIgnoreIncomingMessage(e.rid) || this.emitter.emit(b.RECEIVE_MESSAGE, { rawData: e });
                                },
                            },
                        })));
                }
            }
            let er = function (e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return { player_state: t, device: e, is_currently_active: !!i.isActive, sync_state_from_eov_optional: null };
            };
            class ea {
                get isActive() {
                    let e = this.stateController.currentState.active_device_id_optional;
                    return !!(e && e === this.deviceConfig.info.device_id);
                }
                get isSpectator() {
                    return ((e) => {
                        let { connectionType: t, isShadow: i } = e;
                        return void 0 !== t ? t === _.SPECTATOR : !!i;
                    })(this.variables);
                }
                get isShadow() {
                    return this.isSpectator;
                }
                registerMetrics() {
                    (this.connector.on(b.NEW_CONNECTION_ATTEMPT, this.metricsController.onNewConnectionAttempt.bind(this.metricsController)),
                        this.connector.on(b.CONNECTED, this.metricsController.onConnected.bind(this.metricsController)),
                        this.connector.on(b.CONNECTION_ERROR, this.metricsController.onConnectionError.bind(this.metricsController)),
                        this.connector.on(b.HUB_ERROR, this.metricsController.onHubError.bind(this.metricsController)),
                        this.connector.on(b.HUB_MESSAGE_PARSING_ERROR, this.metricsController.onHubMessageParsingError.bind(this.metricsController)),
                        this.connector.on(b.DISCONNECTED, this.metricsController.onDisconnected.bind(this.metricsController)),
                        this.connector.on(b.MESSAGE_SENT, this.metricsController.onMessageSent.bind(this.metricsController)),
                        this.connector.on(b.MESSAGE_LOST, this.metricsController.onMessageLost.bind(this.metricsController)),
                        this.stateController.on(a.PARSING_ERROR, this.metricsController.onYnisonStateParsingError.bind(this.metricsController)));
                }
                onMessageReceived(e) {
                    let t = this.getMessageContext(e);
                    if ((this.updateFullStateCompletion(t), this.shouldIgnoreMessage(t))) return;
                    let i = this.processMessageState(e, t);
                    this.stateController.updateState(Object.assign(Object.assign({}, i), { isStateForRestore: t.isCurrentUpdateFullStateMessage }));
                }
                getMessageContext(e) {
                    return { isCurrentUpdateFullStateMessage: e.rawData.rid === this.updateFullStateMessageRid, deviceTransition: this.getDeviceStateTransition(e) };
                }
                getDeviceStateTransition(e) {
                    let t = e.rawData.active_device_id_optional === this.deviceConfig.info.device_id,
                        i = e.rawData.active_device_id_optional !== this.stateController.currentState.active_device_id_optional;
                    return {
                        willBecomeActive: !this.isActive && t,
                        willBecomePassive: this.isActive && !t,
                        willStayPassive: !this.isActive && !t,
                        isAnotherActiveDeviceUpdated: !this.isActive && !t && i,
                    };
                }
                shouldIgnoreMessage(e) {
                    return !e.deviceTransition.isAnotherActiveDeviceUpdated && this.shouldIgnorePlayerStateUpdate(e);
                }
                shouldIgnorePlayerStateUpdate(e) {
                    return (
                        !this.isUpdateFullStateCompleted ||
                        (e.isCurrentUpdateFullStateMessage
                            ? !1 === this.stateController.currentState.player_state.status.paused
                            : this.isSpectator || e.deviceTransition.willStayPassive)
                    );
                }
                processMessageState(e, t) {
                    let i = e.rawData;
                    return (this.isActive || (i = this.overrideIncomingDeviceVolume(i)), this.shouldIgnorePlayerStateUpdate(t))
                        ? this.createActiveDeviceStateUpdate(i)
                        : this.shouldOverridePauseState(t)
                          ? this.createPausedStateUpdate(i)
                          : { newState: i, trigger: 'WSConnector' };
                }
                updateFullStateCompletion(e) {
                    this.isUpdateFullStateCompleted = this.isUpdateFullStateCompleted || e.isCurrentUpdateFullStateMessage;
                }
                shouldOverridePauseState(e) {
                    return (e.isCurrentUpdateFullStateMessage && e.deviceTransition.willStayPassive) || e.deviceTransition.willBecomePassive;
                }
                createPausedStateUpdate(e) {
                    let t = s(e);
                    return (
                        (t.player_state.status.paused = !0),
                        (t.player_state.status.version = o(this.deviceConfig.info.device_id, 0)),
                        { newState: t, skipVersionCompare: !0, trigger: 'WSConnector' }
                    );
                }
                overrideIncomingDeviceVolume(e) {
                    var t, i, n, o, r;
                    let a = s(e),
                        c = this.stateController.currentState,
                        l = a.devices.find((e) => {
                            var t;
                            return (null == (t = e.info) ? void 0 : t.device_id) === this.deviceConfig.info.device_id;
                        }),
                        u = c.devices.find((e) => {
                            var t;
                            return (null == (t = e.info) ? void 0 : t.device_id) === this.deviceConfig.info.device_id;
                        });
                    if (l) {
                        let e = {
                            volume:
                                null != (n = null != (i = null == (t = null == u ? void 0 : u.volume_info) ? void 0 : t.volume) ? i : this.deviceConfig.defaultVolume)
                                    ? n
                                    : 0.5,
                            version: null != (r = null == (o = null == u ? void 0 : u.volume_info) ? void 0 : o.version) ? r : null,
                        };
                        ((l.volume = e.volume), (l.volume_info = e));
                    }
                    return a;
                }
                createActiveDeviceStateUpdate(e) {
                    let t = s(e);
                    return ((t.player_state = s(this.stateController.currentState.player_state)), { newState: t, skipVersionCompare: !0, trigger: 'WSConnector' });
                }
                processOutgoingPlayerState(e) {
                    return Object.assign(Object.assign({}, e), { status: this.processOutgoingPlayerStatus(e.status) });
                }
                processOutgoingPlayerStatus(e) {
                    return this.isSpectator ? Object.assign(Object.assign({}, e), { paused: !0 }) : e;
                }
                createOutgoingDeviceData() {
                    var e, t;
                    let i = this.stateController.currentState.devices.find((e) => {
                        var t;
                        return (null == (t = e.info) ? void 0 : t.device_id) === this.deviceConfig.info.device_id;
                    });
                    return ((e, t, i) => {
                        var n, o, s;
                        let r = {
                            volume: null != (n = t.value) ? n : 0.5,
                            capabilities: { can_be_player: !0, can_be_remote_controller: !1, volume_granularity: null != (o = t.granularity) ? o : 16 },
                            info: e,
                            volume_info: { volume: null != (s = t.value) ? s : 0.5, version: null },
                        };
                        return void 0 !== i.connectionType
                            ? Object.assign(Object.assign({}, r), { connection_type: i.connectionType })
                            : Object.assign(Object.assign({}, r), { is_shadow: !!i.isShadow });
                    })(
                        this.deviceConfig.info,
                        {
                            value: null != (t = null == (e = null == i ? void 0 : i.volume_info) ? void 0 : e.volume) ? t : this.deviceConfig.defaultVolume,
                            granularity: this.deviceConfig.volumeGranularity,
                        },
                        { connectionType: this.variables.connectionType, isShadow: this.variables.isShadow },
                    );
                }
                onStateChanged(e) {
                    let t = !!(this.stateController.currentState.active_device_id_optional && !this.isActive);
                    if (this.isUpdateFullStateCompleted && !t) {
                        var i, n;
                        ((i = e.diff).player_state && i.player_state.player_queue
                            ? this.connector.updatePlayerState({ player_state: this.processOutgoingPlayerState(e.state.player_state) })
                            : (n = e.diff).player_state &&
                              n.player_state.status &&
                              this.connector.updatePlayingStatus({ playing_status: this.processOutgoingPlayerStatus(e.state.player_state.status) }),
                            e.diff.deviceVolume &&
                                this.isActive &&
                                this.connector.updateVolumeInfo({ device_id: this.deviceConfig.info.device_id, volume_info: e.diff.deviceVolume }));
                    }
                }
                onConnected() {
                    this.updateFullStateMessageRid = this.connector.updateFullState(
                        er(this.createOutgoingDeviceData(), this.processOutgoingPlayerState(this.stateController.currentState.player_state)),
                    );
                }
                onDisconnected() {
                    ((this.isUpdateFullStateCompleted = !1), (this.updateFullStateMessageRid = null));
                }
                interceptActivity() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.INTERCEPT_EAGER;
                    this.connector.updatePlayerState({ player_state: this.stateController.currentState.player_state }, { activity_interception_type: e });
                    let t = this.stateController.currentState;
                    ((t.active_device_id_optional = this.deviceConfig.info.device_id), this.stateController.updateState({ newState: t, trigger: 'WSConnector' }));
                }
                becomePassive() {
                    this.connector.updateActiveDevice({ device_id_optional: null });
                    let e = this.stateController.currentState;
                    ((e.active_device_id_optional = null),
                        (e.player_state.status.paused = !0),
                        (e.player_state.status.version = o(this.deviceConfig.info.device_id)),
                        this.stateController.updateState({ newState: e, trigger: 'WSConnector' }));
                }
                updateVariables(e) {
                    Object.assign(this.variables, e);
                }
                updateDeviceInfo(e) {
                    Object.assign(this.deviceConfig.info, e);
                }
                constructor(e) {
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
                    let t = (() => {
                        let e = Math.floor(0x225c17d02 * Math.random() + 1).toString();
                        return (e + Math.floor(0x3b9ac9fe * Math.random() + 1).toString()).slice(0, 19);
                    })();
                    this.stateController = new L({ deviceConfig: this.deviceConfig });
                    let i = !0 === e.variables.newConnector ? es : ee;
                    this.connector = new i({
                        config: {
                            device: this.deviceConfig.info,
                            oauth: e.oauth,
                            multiAuthUserId: e.variables.puid,
                            redirectorConnectionConfig: { protocol: 'wss://', host: e.ynisonConnectionConfig.ynisonHost, path: e.ynisonConnectionConfig.redirectorPath },
                            hubConnectionConfig: { protocol: 'wss://', path: e.ynisonConnectionConfig.hubConnectioPath },
                            defaultReconnectTimeoutMS: e.ynisonConnectionConfig.reconnectTimeout,
                            reconnectAttemptsLimit: e.ynisonConnectionConfig.reconnectAttempts,
                            historyLimit: e.ynisonConnectionConfig.historyLimit,
                            sessionId: t,
                        },
                    });
                    let n = () => this.isActive,
                        o = () => this.isSpectator;
                    ((this.metricsController = new ed({
                        transports: e.metricsTransport,
                        sessionId: t,
                        variables: {
                            get puid() {
                                return e.variables.puid;
                            },
                            get isSpectator() {
                                return o();
                            },
                            get isActive() {
                                return n();
                            },
                            get enableDebugMode() {
                                return e.variables.enableDebugMode;
                            },
                        },
                    })),
                        this.registerMetrics(),
                        this.connector.on(b.RECEIVE_MESSAGE, this.onMessageReceived.bind(this)),
                        this.stateController.on(a.UPDATED, this.onStateChanged.bind(this), 'WSConnector'),
                        this.connector.state.connectionState.onChange((e) => {
                            switch (e) {
                                case g.CONNECTED:
                                    this.onConnected();
                                    break;
                                case g.DISCONNECTED:
                                    this.onDisconnected();
                            }
                        }),
                        this.connector.on(b.CONNECTION_ERROR, (e) => {
                            this.logger.error('[Ynison] Connection error: '.concat(e.error.message), Object.assign({}, e));
                        }),
                        this.connector.on(b.HUB_MESSAGE_PARSING_ERROR, (e) => {
                            this.logger.error('[Ynison] Hub message error: '.concat(e.error.message), Object.assign({}, e));
                        }),
                        this.connector.on(b.HUB_ERROR, (e) => {
                            this.logger.error('[Ynison] Hub error: '.concat(e.error.message), Object.assign({}, e));
                        }));
                }
            }
            class ec {
                send(e) {
                    var t, i, n, o;
                    return (
                        (t = this),
                        (i = void 0),
                        (n = void 0),
                        (o = function* () {
                            return this.transport.send(e, { service: 'Ynison' });
                        }),
                        new (n || (n = Promise))(function (e, s) {
                            function r(e) {
                                try {
                                    c(o.next(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function a(e) {
                                try {
                                    c(o.throw(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function c(t) {
                                var i;
                                t.done
                                    ? e(t.value)
                                    : ((i = t.value) instanceof n
                                          ? i
                                          : new n(function (e) {
                                                e(i);
                                            })
                                      ).then(r, a);
                            }
                            c((o = o.apply(t, i || [])).next());
                        })
                    );
                }
                constructor(e) {
                    Object.defineProperty(this, 'transport', { enumerable: !0, configurable: !0, writable: !0, value: e });
                }
            }
            class el {
                send(e) {
                    var t, i, n, o;
                    return (
                        (t = this),
                        (i = void 0),
                        (n = void 0),
                        (o = function* () {
                            return this.transport.send(e, { topLevelParameter: 'tech-metrics' });
                        }),
                        new (n || (n = Promise))(function (e, s) {
                            function r(e) {
                                try {
                                    c(o.next(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function a(e) {
                                try {
                                    c(o.throw(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function c(t) {
                                var i;
                                t.done
                                    ? e(t.value)
                                    : ((i = t.value) instanceof n
                                          ? i
                                          : new n(function (e) {
                                                e(i);
                                            })
                                      ).then(r, a);
                            }
                            c((o = o.apply(t, i || [])).next());
                        })
                    );
                }
                constructor(e) {
                    Object.defineProperty(this, 'transport', { enumerable: !0, configurable: !0, writable: !0, value: e });
                }
            }
            (!(function (e) {
                ((e.YNISON_START = 'YNISON_START'),
                    (e.YNISON_CONNECTED = 'YNISON_CONNECTED'),
                    (e.YNISON_CONNECTING_ERROR = 'YNISON_CONNECTING_ERROR'),
                    (e.YNISON_CLIENT_DISCONNECTED = 'YNISON_CLIENT_DISCONNECTED'),
                    (e.YNISON_EVENT_SENDED = 'YNISON_EVENT_SENDED'),
                    (e.YNISON_EVENT_LOST = 'YNISON_EVENT_LOST'),
                    (e.YNISON_CHANNEL_ERROR = 'YNISON_CHANNEL_ERROR'),
                    (e.YNISON_STATE_ERROR = 'YNISON_STATE_ERROR'));
            })(y || (y = {})),
                (function (e) {
                    ((e.ACTIVE = 'active'), (e.PASSIVE = 'passive'), (e.SHADOW = 'shadow'));
                })(T || (T = {})),
                (function (e) {
                    ((e.MOBILE = 'mobile'), (e.WIFI = 'wifi'), (e.UNKNOWN = 'unknown'));
                })(I || (I = {})),
                (function (e) {
                    ((e.WS = 'other'), (e.IO = 'io'), (e.SERVER = 'server'), (e.OTHER = 'other'));
                })(D || (D = {})),
                (function (e) {
                    ((e.REDIRECTOR = 'redirector'), (e.HUB = 'hub'));
                })(A || (A = {})));
            let eu = [
                'update_full_state',
                'update_active_device',
                'update_playing_status',
                'update_player_state',
                'update_player_queue_inject',
                'update_session_params',
                'update_volume_info',
            ];
            class ed {
                onYnisonStateParsingError(e) {
                    this.sendEvent({
                        name: y.YNISON_STATE_ERROR,
                        data: Object.assign(Object.assign({}, this.getBaseEventPayload()), { errorType: D.OTHER, errorDescription: e.error.message }),
                    });
                }
                onNewConnectionAttempt() {
                    ((this.state.connectionStartTimestamp = Date.now()), this.sendEvent({ name: y.YNISON_START, data: this.getBaseEventPayload() }));
                }
                onConnected() {
                    let e = 0;
                    (this.state.connectionStartTimestamp && ((e = Date.now() - this.state.connectionStartTimestamp), delete this.state.connectionStartTimestamp),
                        this.sendEvent({ name: y.YNISON_CONNECTED, data: Object.assign(Object.assign({}, this.getBaseEventPayload()), { time: e }) }));
                }
                onConnectionError(e) {
                    switch (e.destination) {
                        case N.REDIRECTOR:
                            this.onRedirectorConnectionError(e);
                            break;
                        case N.HUB:
                            this.onHubConnectionError(e);
                    }
                }
                onRedirectorConnectionError(e) {
                    var t;
                    let i = e.error.data.redirectorResponse.http_code,
                        n = e.error.message,
                        o = null != (t = e.error.data.redirectorResponse.message) ? t : '',
                        s = D.OTHER;
                    (void 0 !== i && (s = D.WS),
                        this.sendEvent({
                            name: y.YNISON_CONNECTING_ERROR,
                            data: Object.assign(Object.assign({}, this.getBaseEventPayload()), {
                                destination: A.REDIRECTOR,
                                errorType: s,
                                code: i,
                                errorDescription: ''.concat(n, ' ').concat(o),
                            }),
                        }));
                }
                onHubConnectionError(e) {
                    if (e.error.data.connectingState === g.CONNECTING)
                        return void this.sendEvent({
                            name: y.YNISON_CONNECTING_ERROR,
                            data: Object.assign(Object.assign({}, this.getBaseEventPayload()), {
                                destination: A.HUB,
                                errorType: D.WS,
                                errorDescription: e.error.message,
                            }),
                        });
                    this.sendEvent({
                        name: y.YNISON_CHANNEL_ERROR,
                        data: Object.assign(Object.assign({}, this.getBaseEventPayload()), { errorType: D.WS, errorDescription: e.error.message }),
                    });
                }
                onHubError(e) {
                    var t;
                    let i = e.error.data.hubResponse.http_code,
                        n = e.error.message,
                        o = null != (t = e.error.data.hubResponse.message) ? t : '';
                    this.sendEvent({
                        name: y.YNISON_CHANNEL_ERROR,
                        data: Object.assign(Object.assign({}, this.getBaseEventPayload()), { errorType: D.WS, code: i, errorDescription: ''.concat(n, ' ').concat(o) }),
                    });
                }
                onHubMessageParsingError(e) {
                    this.sendEvent({
                        name: y.YNISON_STATE_ERROR,
                        data: Object.assign(Object.assign({}, this.getBaseEventPayload()), { errorType: D.OTHER, errorDescription: e.error.message }),
                    });
                }
                onDisconnected(e) {
                    switch (e.trigger) {
                        case R.CLIENT:
                            return this.onDisconnectedByClient(e.event);
                        case R.SERVER:
                            return this.onDisconnectedByServer(e.event);
                    }
                }
                onDisconnectedByServer(e) {
                    this.sendEvent({
                        name: y.YNISON_CHANNEL_ERROR,
                        data: Object.assign(Object.assign({}, this.getBaseEventPayload()), { errorType: D.SERVER, code: e.code, errorDescription: e.reason }),
                    });
                }
                onDisconnectedByClient(e) {
                    this.sendEvent({ name: y.YNISON_CLIENT_DISCONNECTED, data: Object.assign(Object.assign({}, this.getBaseEventPayload()), { reason: e.reason }) });
                }
                onMessageSent(e) {
                    let t = this.getMessageType(e);
                    t && this.sendEvent({ name: y.YNISON_EVENT_SENDED, data: Object.assign(Object.assign({}, this.getBaseEventPayload()), { type: t }) });
                }
                onMessageLost(e) {
                    let t = this.getMessageType(e);
                    t && this.sendEvent({ name: y.YNISON_EVENT_LOST, data: Object.assign(Object.assign({}, this.getBaseEventPayload()), { type: t }) });
                }
                getMessageType(e) {
                    return Object.keys(e).find((e) => eu.includes(e));
                }
                getBaseEventPayload() {
                    let e = T.PASSIVE;
                    return (
                        this.variables.isSpectator ? (e = T.SHADOW) : this.variables.isActive && (e = T.ACTIVE),
                        { uuid: this.state.uuid, puid: String(this.variables.puid), mode: e, connectionType: I.UNKNOWN }
                    );
                }
                logEvent(e) {
                    let { event: t, eventName: i } = e;
                    this.variables.enableDebugMode &&
                        (t
                            ? (console.group(''.concat(null != i ? i : 'Untitled Log Metrics Event Info')),
                              console.table(t.data),
                              console.group('Raw event'),
                              console.dir(t),
                              console.groupEnd(),
                              console.groupEnd())
                            : console.error('Event in logEvent method not provided'));
                }
                sendEvent(e) {
                    (this.logEvent({ event: e, eventName: e.name }),
                        this.transports.forEach((t) => {
                            t.send(e);
                        }));
                }
                constructor(e) {
                    (Object.defineProperty(this, 'transports', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'state', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'variables', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.transports = e.transports),
                        (this.variables = e.variables),
                        (this.state = { uuid: e.sessionId }));
                }
            }
        },
    },
]);
