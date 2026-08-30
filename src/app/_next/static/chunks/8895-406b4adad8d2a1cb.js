(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8895],
    {
        2881: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var n = i(91945),
                a = i(16839),
                r = i(14600);
            class s {
                async openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                async deleteDatabase() {
                    let { dbName: e } = this.config;
                    return window.indexedDB
                        .databases()
                        .then((t) => (t.find((t) => e === t.name) ? new r.h(e).deleteDB({ onBlocked: a.A }) : Promise.resolve()))
                        .catch(a.A);
                }
                async executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((i) => (i ? e(i) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    (this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        }));
                }
                async openIdb(e) {
                    let { dbName: t, dbVersion: i, onUpgrade: n } = this.config;
                    try {
                        let a = await new r.h(t).openDB(i, {
                            onBlocked: (t, i, n) => {
                                var a;
                                null == e || null == (a = e.onBlocked) || a.call(e, t, i, n);
                            },
                            onTerminated: () => {
                                var t;
                                null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                n(e);
                            },
                        });
                        return (this.idbIsAvailable = !0), a;
                    } catch (e) {
                        this.idbIsAvailable = !1;
                    }
                }
                async closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch(a.A)
                        : Promise.resolve();
                }
                constructor(e) {
                    (0, n._)(this, 'config', void 0),
                        (0, n._)(this, 'idb', void 0),
                        (0, n._)(this, 'idbIsAvailable', void 0),
                        (this.config = e),
                        (this.idbIsAvailable = !1);
                }
            }
        },
        4529: (e) => {
            e.exports = {
                root: 'WordsCardPopoverDesktop_root__vm3hv',
                item: 'WordsCardPopoverDesktop_item__eZPj9',
                actionItem: 'WordsCardPopoverDesktop_actionItem__l25qD',
                actionItem_active: 'WordsCardPopoverDesktop_actionItem_active__BORi3',
                divider: 'WordsCardPopoverDesktop_divider__Vy2GN',
                sourceItem: 'WordsCardPopoverDesktop_sourceItem__fUPoo',
                sourceItem_withoutIcon: 'WordsCardPopoverDesktop_sourceItem_withoutIcon__earG1',
                sourceIcon: 'WordsCardPopoverDesktop_sourceIcon__QSr8h',
            };
        },
        8958: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => n });
            let n = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ', ';
                return e
                    .map((e) =>
                        e.decomposed
                            ? e.name +
                              e.decomposed
                                  .map((e) => {
                                      var t;
                                      return ''.concat(null != (t = e.separator) ? t : '').concat(e.name);
                                  })
                                  .join('')
                            : e.name,
                    )
                    .join(t);
            };
        },
        10598: (e) => {
            e.exports = {
                root: 'WizardIntroModal_root__P1uIH',
                root_mobile: 'WizardIntroModal_root_mobile__Ax8HO',
                header: 'WizardIntroModal_header__qtpcO',
                content: 'WizardIntroModal_content__0A1Ox',
                image: 'WizardIntroModal_image__SOJa7',
                text: 'WizardIntroModal_text___yvOo',
                title: 'WizardIntroModal_title__NWQaj',
                description: 'WizardIntroModal_description__rDfHs',
                button: 'WizardIntroModal_button__b9jJT',
            };
        },
        13591: (e) => {
            e.exports = {
                root: 'WordsCardPopoverMobile_root__iHBbJ',
                container: 'WordsCardPopoverMobile_container___Eq_i',
                text: 'WordsCardPopoverMobile_text__j52Bl',
                sources: 'WordsCardPopoverMobile_sources__fKNrx',
                sourceItem: 'WordsCardPopoverMobile_sourceItem__XBH1a',
                sourceItem_withoutIcon: 'WordsCardPopoverMobile_sourceItem_withoutIcon__QM7Ht',
                action: 'WordsCardPopoverMobile_action__c_FPQ',
                sourceIcon: 'WordsCardPopoverMobile_sourceIcon__aWdrm',
                feedbackSection: 'WordsCardPopoverMobile_feedbackSection__25RsC',
                feedbackQuestion: 'WordsCardPopoverMobile_feedbackQuestion__NKSto',
                feedbackButtons: 'WordsCardPopoverMobile_feedbackButtons__Cd9Yf',
                feedbackButton: 'WordsCardPopoverMobile_feedbackButton__tejta',
                feedbackButton_active: 'WordsCardPopoverMobile_feedbackButton_active__XJl7S',
            };
        },
        14600: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => b });
            var n = i(62475);
            class a {
                get delete() {
                    var e;
                    return null == (e = this.cursor.delete) ? void 0 : e.bind(this.cursor);
                }
                get update() {
                    var e;
                    return null == (e = this.cursor.update) ? void 0 : e.bind(this.cursor);
                }
                [Symbol.asyncIterator]() {
                    return this.cursor[Symbol.asyncIterator]();
                }
                constructor(e) {
                    Object.defineProperty(this, 'cursor', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'key', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'direction', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'primaryKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'advance', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'continue', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'continuePrimaryKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.direction = e.direction),
                        (this.request = e.request),
                        (this.primaryKey = e.primaryKey),
                        (this.key = e.key),
                        (this.advance = e.advance.bind(e)),
                        (this.continue = e.continue.bind(e)),
                        (this.continuePrimaryKey = e.continuePrimaryKey.bind(e));
                }
            }
            class r extends a {
                [Symbol.asyncIterator]() {
                    return this.cursor[Symbol.asyncIterator]();
                }
                constructor(e) {
                    super(e),
                        Object.defineProperty(this, 'cursor', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.value = e.value);
                }
            }
            var s = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class o {
                get(e) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.get(e);
                    });
                }
                getAll(e, t) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.getAll(e, t);
                    });
                }
                getAllKeys(e, t) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.getAllKeys(e, t);
                    });
                }
                getKey(e) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.getKey(e);
                    });
                }
                count(e) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.count(e);
                    });
                }
                openCursor(e, t) {
                    return s(this, void 0, void 0, function* () {
                        let i = yield this.index.openCursor(e, t);
                        return i && new r(i);
                    });
                }
                openKeyCursor(e, t) {
                    return s(this, void 0, void 0, function* () {
                        let i = yield this.index.openKeyCursor(e, t);
                        return i && new a(i);
                    });
                }
                [Symbol.asyncIterator]() {
                    return this.index[Symbol.asyncIterator]();
                }
                iterate(e, t) {
                    return this.index.iterate(e, t);
                }
                constructor(e) {
                    Object.defineProperty(this, 'index', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'keyPath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'multiEntry', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'unique', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.keyPath = e.keyPath),
                        (this.multiEntry = e.multiEntry),
                        (this.name = e.name),
                        (this.unique = e.unique);
                }
            }
            var l = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class c {
                get indexNames() {
                    return this.objectStore.indexNames;
                }
                get put() {
                    var e;
                    return null == (e = this.objectStore.put) ? void 0 : e.bind(this.objectStore);
                }
                get add() {
                    var e;
                    return null == (e = this.objectStore.add) ? void 0 : e.bind(this.objectStore);
                }
                get clear() {
                    var e;
                    return null == (e = this.objectStore.clear) ? void 0 : e.bind(this.objectStore);
                }
                get delete() {
                    var e;
                    return null == (e = this.objectStore.delete) ? void 0 : e.bind(this.objectStore);
                }
                createIndex(e, t, i) {
                    return this.objectStore.createIndex ? new o(this.objectStore.createIndex(e, t, i)) : null;
                }
                deleteIndex(e) {
                    return this.objectStore.deleteIndex(e);
                }
                count(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.count(e);
                    });
                }
                get(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.get(e);
                    });
                }
                getAll(e, t) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getAll(e, t);
                    });
                }
                getAllKeys(e, t) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getAllKeys(e, t);
                    });
                }
                getKey(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getKey(e);
                    });
                }
                index(e) {
                    return new o(this.objectStore.index(e));
                }
                openKeyCursor(e, t) {
                    return l(this, void 0, void 0, function* () {
                        let i = yield this.objectStore.openKeyCursor(e, t);
                        return i && new a(i);
                    });
                }
                openCursor(e, t) {
                    return l(this, void 0, void 0, function* () {
                        let i = yield this.objectStore.openCursor(e, t);
                        return i && new r(i);
                    });
                }
                iterate(e, t) {
                    return this.objectStore.iterate(e, t);
                }
                [Symbol.asyncIterator]() {
                    return this.objectStore[Symbol.asyncIterator]();
                }
                constructor(e) {
                    Object.defineProperty(this, 'objectStore', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'autoIncrement', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'keyPath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.autoIncrement = e.autoIncrement),
                        (this.keyPath = e.keyPath),
                        (this.name = e.name);
                }
            }
            class d {
                get error() {
                    return this.transaction.error;
                }
                get done() {
                    return this.transaction.done;
                }
                abort() {
                    return this.transaction.abort();
                }
                commit() {
                    return this.transaction.commit();
                }
                objectStore(e) {
                    return new c(this.transaction.objectStore(e));
                }
                addEventListener(e, t, i) {
                    return this.transaction.addEventListener(e, t, i);
                }
                removeEventListener(e, t, i) {
                    return this.transaction.removeEventListener(e, t, i);
                }
                set onabort(e) {
                    this.transaction.onabort = e;
                }
                set onerror(e) {
                    this.transaction.onerror = e;
                }
                set oncomplete(e) {
                    this.transaction.oncomplete = e;
                }
                dispatchEvent(e) {
                    return this.transaction.dispatchEvent(e);
                }
                constructor(e) {
                    Object.defineProperty(this, 'transaction', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'durability', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'mode', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'objectStoreNames', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.durability = e.durability),
                        (this.mode = e.mode),
                        (this.objectStoreNames = e.objectStoreNames);
                }
            }
            var u = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class m {
                get objectStoreNames() {
                    return this.database.objectStoreNames;
                }
                transaction(e, t, i) {
                    return new d(this.database.transaction(e, t, i));
                }
                createObjectStore(e, t) {
                    return new c(this.database.createObjectStore(e, t));
                }
                deleteObjectStore(e) {
                    return this.database.deleteObjectStore(e);
                }
                get(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.get(e, t);
                    });
                }
                getAll(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAll(e, t, i);
                    });
                }
                add(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.add(e, t, i);
                    });
                }
                put(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.put(e, t, i);
                    });
                }
                delete(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.delete(e, t);
                    });
                }
                clear(e) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.clear(e);
                    });
                }
                count(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.count(e, t);
                    });
                }
                getKey(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getKey(e, t);
                    });
                }
                getAllKeys(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllKeys(e, t, i);
                    });
                }
                countFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.countFromIndex(e, t, i);
                    });
                }
                getFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getFromIndex(e, t, i);
                    });
                }
                getAllFromIndex(e, t, i, n) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllFromIndex(e, t, i, n);
                    });
                }
                getAllKeysFromIndex(e, t, i, n) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllKeysFromIndex(e, t, i, n);
                    });
                }
                getKeyFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getKeyFromIndex(e, t, i);
                    });
                }
                addEventListener(e, t, i) {
                    this.database.addEventListener(e, t, i);
                }
                removeEventListener(e, t, i) {
                    this.database.removeEventListener(e, t, i);
                }
                set onabort(e) {
                    this.database.onabort = e;
                }
                set onclose(e) {
                    this.database.onclose = e;
                }
                set onerror(e) {
                    this.database.onerror = e;
                }
                set onversionchange(e) {
                    this.database.onversionchange = e;
                }
                close() {
                    return this.database.close();
                }
                dispatchEvent(e) {
                    return this.database.dispatchEvent(e);
                }
                constructor(e) {
                    Object.defineProperty(this, 'database', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'version', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.version = e.version),
                        (this.name = e.name);
                }
            }
            var v = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class b {
                openDB(e) {
                    let { onBlocked: t, onBlocking: i, onTerminated: a, onUpgrade: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return v(this, void 0, void 0, function* () {
                        let s = yield (0, n.P2)(this.name, e, {
                            blocked: t,
                            blocking: i,
                            terminated: a,
                            upgrade: (e, t, i, n, a) => {
                                let s = new m(e);
                                null == r || r(s, t, i, new d(n), a);
                            },
                        });
                        return new m(s);
                    });
                }
                deleteDB(e) {
                    let { onBlocked: t } = e;
                    return v(this, void 0, void 0, function* () {
                        yield (0, n.MR)(this.name, { blocked: t });
                    });
                }
                constructor(e) {
                    Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: e });
                }
            }
        },
        15248: (e) => {
            e.exports = { root: 'LoadingPhrase_root__0ML0A', 'gradient-sweep': 'LoadingPhrase_gradient-sweep__SncsP', text: 'LoadingPhrase_text__Ne1FD' };
        },
        17593: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => s });
            var n = i(91027),
                a = i(57594),
                r = i(79406);
            let s = () => {
                let { experiments: e, user: t, wizard: i, sonataState: s } = (0, a.g)(),
                    o = e.checkExperiment(r.z.WebNextNewWaveWizard, 'on'),
                    l = o && t.hasPlus && t.settings.showWizard && !s.entityMeta,
                    c = (0, n.c)(() => !!l && (i.introModal.open(), !0)),
                    d = (0, n.c)(() => {
                        o && i.introModal.open();
                    });
                return { isEnabled: o, shouldOpenIntroFromPlay: l, openIntroModalFromPlay: c, openWizard: d };
            };
        },
        19025: (e) => {
            e.exports = {
                root: 'VibePlayerControls_root__qr97B',
                skipButton: 'VibePlayerControls_skipButton__z57B_',
                playButtonIcon: 'VibePlayerControls_playButtonIcon__OXCWN',
                playButton: 'VibePlayerControls_playButton__vnoer',
                playButton_withYellowPlayButton: 'VibePlayerControls_withYellowPlayButton__vnoer',
                playButton_playing: 'VibePlayerControls_playButton_playing__qPeBv',
            };
        },
        19953: (e) => {
            e.exports = {
                root: 'VibePlayerbarMeta_root___dH5G',
                timecodeOverlay: 'VibePlayerbarMeta_timecodeOverlay__JhnCy',
                trackName: 'VibePlayerbarMeta_trackName__eyhTE',
                'fade-in': 'VibePlayerbarMeta_fade-in__rycjr',
                center: 'VibePlayerbarMeta_center__6kbMi',
                center_active: 'VibePlayerbarMeta_center_active__a1rFN',
                center_withTimecode: 'VibePlayerbarMeta_center_withTimecode__hoQVg',
                center_withExplicitMark: 'VibePlayerbarMeta_center_withExplicitMark__emag_',
                center_withExplicitMark_playing: 'VibePlayerbarMeta_center_withExplicitMark_playing__SCPvO',
                explicitMarkContainer: 'VibePlayerbarMeta_explicitMarkContainer__d0pfO',
                center_withoutExplicitMark: 'VibePlayerbarMeta_center_withoutExplicitMark__OrzGP',
                center_withoutExplicitMark_playing: 'VibePlayerbarMeta_center_withoutExplicitMark_playing__KnEhn',
                scrollingTrackName: 'VibePlayerbarMeta_scrollingTrackName__gl_Cl',
                trackNameText: 'VibePlayerbarMeta_trackNameText__9IgY2',
                artists: 'VibePlayerbarMeta_artists__2laQI',
                generativeTitle: 'VibePlayerbarMeta_generativeTitle__ksCD6',
                slider: 'VibePlayerbarMeta_slider__pyonb',
                slider_active: 'VibePlayerbarMeta_slider_active__H1uGz',
                explicitMark: 'VibePlayerbarMeta_explicitMark__G8dYl',
                generativeIcon: 'VibePlayerbarMeta_generativeIcon__Taac7',
            };
        },
        23028: (e) => {
            e.exports = {
                content: 'MainPage_content__kskSM',
                root: 'MainPage_root__STXqc',
                container: 'MainPage_container__CB86l',
                vibe: 'MainPage_vibe__XEBbh',
                landing: 'MainPage_landing___FGNm',
                feedbackForm: 'MainPage_feedbackForm__fdo2L',
                feedbackFormCaption: 'MainPage_feedbackFormCaption__w4oAv',
                feedbackFormImageContainer: 'MainPage_feedbackFormImageContainer__kln7G',
                feedbackFormImage: 'MainPage_feedbackFormImage__Fzfsc',
                actionsBar: 'MainPage_actionsBar__agoxp',
                userProfile: 'MainPage_userProfile__8JzS3',
                vibeWidgetContainer: 'MainPage_vibeWidgetContainer__i5T4X',
                beta: 'MainPage_beta__y32vb',
                beta_withReleaseNotes: 'MainPage_beta_withReleaseNotes__WOjUk',
                betaSlot: 'MainPage_betaSlot__JwbmM',
                betaSlot_newVibe: 'MainPage_betaSlot_newVibe__DGtXm',
                specialHeaderContainer: 'MainPage_specialHeaderContainer__L3C6E',
                specialHeader: 'MainPage_specialHeader__aqdvj',
                specialHeaderImage: 'MainPage_specialHeaderImage__4GlXq',
                footer: 'MainPage_footer__2rGy2',
                error: 'MainPage_error__u_UCm',
            };
        },
        24372: (e) => {
            e.exports = {
                root: 'AiBadge_root__EfKG1',
                root_dimmed: 'AiBadge_root_dimmed__XLGvP',
                glow: 'AiBadge_glow__R6cQa',
                icon: 'AiBadge_icon__dhZpE',
                icon_okniks: 'AiBadge_icon_okniks__HM5CC',
                icon_sparkles: 'AiBadge_icon_sparkles__cS_kL',
                sparkles: 'AiBadge_sparkles__Yua7j',
                sparkle: 'AiBadge_sparkle__5EMmQ',
                'sparkle-carousel': 'AiBadge_sparkle-carousel__fMVfW',
            };
        },
        25266: (e, t, i) => {
            'use strict';
            var n;
            i.d(t, { a: () => n }),
                (function (e) {
                    (e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral');
                })(n || (n = {}));
        },
        27515: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            let n = (e, t) => {
                let i = Number(t);
                return !Number.isNaN(i) && i > 0 && i < e.length ? i : 0;
            };
        },
        28895: (e, t, i) => {
            'use strict';
            i.d(t, { MainPage: () => nU });
            var n,
                a,
                r,
                s,
                o,
                l,
                c = i(32290),
                d = i(63618),
                u = i(96103),
                m = i(21916),
                v = i(55178),
                b = i.t(v, 2),
                _ = i(60900),
                p = i(39407),
                h = i(21732),
                g = i(73474),
                x = i(91027),
                f = i(54862),
                y = i(6752),
                A = i(63423),
                C = i(50162),
                j = i(63887),
                k = i(46049),
                I = i(70280),
                P = i(71926),
                N = i(40959),
                S = i(64170),
                w = i(42406),
                E = i(65493);
            let T = (0, v.lazy)(async () =>
                    Promise.all([i.e(321), i.e(8158)])
                        .then(i.bind(i, 88158))
                        .then((e) => ({ default: e.VibeFallbackAnimation })),
                ),
                M = (0, v.lazy)(async () =>
                    Promise.all([i.e(321), i.e(1561), i.e(3295), i.e(627), i.e(4546)])
                        .then(i.bind(i, 14546))
                        .then((e) => ({ default: e.VibeAnimation })),
                ),
                O = E.default.default(
                    () =>
                        Promise.all([i.e(321), i.e(1560)])
                            .then(i.bind(i, 11560))
                            .then((e) => ({ default: e.VibeWidgetFallbackAnimation })),
                    { ssr: !1 },
                ),
                B = E.default.default(
                    () =>
                        Promise.all([i.e(321), i.e(1561), i.e(3295), i.e(1013)])
                            .then(i.bind(i, 51013))
                            .then((e) => ({ default: e.VibeWidgetAnimation })),
                    { ssr: !1 },
                );
            var R = i(84782),
                L = i(37240),
                V = i(98740),
                W = i(70204),
                D = i(34186),
                F = i(7697),
                U = i(43564),
                z = i(57594),
                H = i(79406),
                K = i(49399),
                X = i(15509),
                q = i(94218),
                G = i(82586),
                Y = i(77322),
                $ = i(83808),
                Q = i(66007),
                Z = i.n(Q);
            let J = !0,
                ee = (0, u.PA)((e) => {
                    let { isPlaying: t, onClick: i, ariaDisabled: n, className: a } = e,
                        { vibe: r } = (0, z.g)(),
                        { formatMessage: s } = (0, _.A)(),
                        o = (0, $.W)(),
                        l = (0, Y.D)(),
                        u = t ? 'pauseVibe' : 'playVibe',
                        m = t ? h.e8.vibe.MY_VIBE_PAUSE_BUTTON : h.e8.vibe.MY_VIBE_PLAY_BUTTON,
                        b = (0, v.useMemo)(() => (t ? s({ id: 'vibe-actions.aria-label-pause' }) : s({ id: 'vibe-actions.aria-label-play' })), [s, t]),
                        g = (0, v.useCallback)(
                            (e) => {
                                r.isApplying || null == i || i(), e.stopPropagation(), e.preventDefault();
                            },
                            [i, r.isApplying],
                        );
                    return (
                        (0, v.useEffect)(() => {
                            if ('production' === l && 1 === o.length && J) {
                                var e, t;
                                let i = Math.round(performance.now());
                                null == (t = window.Ya) || null == (e = t.Rum) || e.sendTimeMark('my-vibe-button-loading-time', i), (J = !1);
                            }
                        }, []),
                        (0, c.jsx)(A.$, {
                            className: (0, d.$)(Z().root, { [Z().root_isVibeLoading]: r.isApplying }, a),
                            withRipple: !1,
                            withHover: !1,
                            onClick: g,
                            variant: 'text',
                            'aria-disabled': r.isApplying || n,
                            'aria-label': b,
                            icon: (0, c.jsx)(G.I, { size: 's', className: Z().icon, variant: u }),
                            'data-test-id': m,
                            children: (0, c.jsx)(p.A, { id: 'entity-names.my-vibe' }),
                        })
                    );
                });
            ee.displayName = 'PlayButton';
            var et = i(88751),
                ei = i.n(et),
                en = {
                    4490: (e, t, i) => {
                        i.r(t), i.d(t, { DOWN: () => o, LEFT: () => a, RIGHT: () => r, UP: () => s, useSwipeable: () => v });
                        var n = i(810);
                        let a = 'Left',
                            r = 'Right',
                            s = 'Up',
                            o = 'Down',
                            l = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            d = 'mousemove',
                            u = 'mouseup';
                        function m(e, t) {
                            if (0 === t) return e;
                            let i = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(i) + e[1] * Math.sin(i), e[1] * Math.cos(i) - e[0] * Math.sin(i)];
                        }
                        function v(e) {
                            var t, i, v;
                            let b,
                                { trackMouse: _ } = e,
                                p = n.useRef(Object.assign({}, c)),
                                h = n.useRef(Object.assign({}, l)),
                                g = n.useRef(Object.assign({}, h.current));
                            for (b in ((g.current = Object.assign({}, h.current)), (h.current = Object.assign(Object.assign({}, l), e)), l))
                                void 0 === h.current[b] && (h.current[b] = l[b]);
                            let [x, f] = n.useMemo(
                                () =>
                                    (function (e, t) {
                                        let i = (t) => {
                                                let i = 'touches' in t;
                                                (i && t.touches.length > 1) ||
                                                    e((e, a) => {
                                                        a.trackMouse && !i && (document.addEventListener(d, n), document.addEventListener(u, b));
                                                        let { clientX: r, clientY: s } = i ? t.touches[0] : t,
                                                            o = m([r, s], a.rotationAngle);
                                                        return (
                                                            a.onTouchStartOrOnMouseDown && a.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: o.slice(), xy: o, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            n = (t) => {
                                                e((e, i) => {
                                                    var n, c, d, u;
                                                    let v = 'touches' in t;
                                                    if (v && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > i.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: b, clientY: _ } = v ? t.touches[0] : t,
                                                        [p, h] = m([b, _], i.rotationAngle),
                                                        g = p - e.xy[0],
                                                        x = h - e.xy[1],
                                                        f = Math.abs(g),
                                                        y = Math.abs(x),
                                                        A = (t.timeStamp || 0) - e.start,
                                                        C = Math.sqrt(f * f + y * y) / (A || 1),
                                                        j = [g / (A || 1), x / (A || 1)],
                                                        k = ((n = f), (c = y), (d = g), (u = x), n > c ? (d > 0 ? r : a) : u > 0 ? o : s),
                                                        I = 'number' == typeof i.delta ? i.delta : i.delta[k.toLowerCase()] || l.delta;
                                                    if (f < I && y < I && !e.swiping) return e;
                                                    let P = {
                                                        absX: f,
                                                        absY: y,
                                                        deltaX: g,
                                                        deltaY: x,
                                                        dir: k,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: C,
                                                        vxvy: j,
                                                    };
                                                    P.first && i.onSwipeStart && i.onSwipeStart(P), i.onSwiping && i.onSwiping(P);
                                                    let N = !1;
                                                    return (
                                                        (i.onSwiping || i.onSwiped || i['onSwiped'.concat(k)]) && (N = !0),
                                                        N && i.preventScrollOnSwipe && i.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: P, swiping: !0 })
                                                    );
                                                });
                                            },
                                            v = (t) => {
                                                e((e, i) => {
                                                    let n;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < i.swipeDuration) {
                                                            (n = Object.assign(Object.assign({}, e.eventData), { event: t })), i.onSwiped && i.onSwiped(n);
                                                            let a = i['onSwiped'.concat(n.dir)];
                                                            a && a(n);
                                                        }
                                                    } else i.onTap && i.onTap({ event: t });
                                                    return (
                                                        i.onTouchEndOrOnMouseUp && i.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: n })
                                                    );
                                                });
                                            },
                                            b = (e) => {
                                                document.removeEventListener(d, n), document.removeEventListener(u, b), v(e);
                                            },
                                            _ = (e, t) => {
                                                let a = () => {};
                                                if (e && e.addEventListener) {
                                                    let r = Object.assign(Object.assign({}, l.touchEventOptions), t.touchEventOptions),
                                                        s = [
                                                            ['touchstart', i, r],
                                                            ['touchmove', n, Object.assign(Object.assign({}, r), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', v, r],
                                                        ];
                                                    s.forEach((t) => {
                                                        let [i, n, a] = t;
                                                        return e.addEventListener(i, n, a);
                                                    }),
                                                        (a = () =>
                                                            s.forEach((t) => {
                                                                let [i, n] = t;
                                                                return e.removeEventListener(i, n);
                                                            }));
                                                }
                                                return a;
                                            },
                                            p = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, i) => {
                                                            if (e.el === t) return e;
                                                            let n = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                                                                i.trackTouch && t && (n.cleanUpTouch = _(t, i)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), n)
                                                            );
                                                        });
                                                },
                                            };
                                        return t.trackMouse && (p.onMouseDown = i), [p, _];
                                    })((e) => (p.current = e(p.current, h.current)), { trackMouse: _ }),
                                [_],
                            );
                            return (
                                (t = p.current),
                                (i = h.current),
                                (v = g.current),
                                (p.current =
                                    i.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? i.preventScrollOnSwipe !== v.preventScrollOnSwipe || i.touchEventOptions.passive !== v.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: f(t.el, i) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: f(t.el, i) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                x
                            );
                        }
                    },
                    8691: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0);
                        let n = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, n.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                                    return t.current.callback(...i);
                                },
                                callback: e,
                            });
                            return (
                                (0, n.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    1381: (e, t, i) => {
                        var n;
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0);
                        let a = i(4490),
                            r = i(8691);
                        !(function (e) {
                            (e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left');
                        })(n || (t.SwipeablePlacement = n = {}));
                        let s = (e) => {
                                let { ref: t, deltaY: i, deltaX: a, placement: r } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            r === n.TOP || r === n.BOTTOM ? 'translateY('.concat(i || 0, 'px)') : 'translateX('.concat(a || 0, 'px)')));
                                });
                            },
                            o = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: i = {}, onClose: l, disableSwipe: c, placement: d, threshold: u } = e,
                                m = (0, r.useCallbackRef)(() => {
                                    l && (o(t), l());
                                }),
                                v = (0, r.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: i, deltaX: a, placement: r } = e;
                                            switch (r) {
                                                case n.TOP:
                                                    i <= 0 && s({ ref: t, deltaY: i, deltaX: a, placement: r });
                                                    break;
                                                case n.RIGHT:
                                                    a >= 0 && s({ ref: t, deltaY: i, deltaX: a, placement: r });
                                                    break;
                                                case n.LEFT:
                                                    a <= 0 && s({ ref: t, deltaY: i, deltaX: a, placement: r });
                                                    break;
                                                default:
                                                    i >= 0 && s({ ref: t, deltaY: i, deltaX: a, placement: r });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d });
                                }),
                                b = (0, r.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: i, deltaX: a, placement: r, threshold: s = 25 } = e;
                                            if (!t.current) return !1;
                                            let o = (s / 100) * (r === n.TOP || r === n.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (r) {
                                                case n.TOP:
                                                    return i < 0 && Math.abs(i) >= o;
                                                case n.RIGHT:
                                                    return a > 0 && a >= o;
                                                case n.LEFT:
                                                    return a < 0 && Math.abs(a) >= o;
                                                default:
                                                    return i > 0 && i >= o;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d, threshold: u })
                                            ? l && (o(t), l())
                                            : o(t));
                                });
                            return { handlers: (0, a.useSwipeable)({ onSwiped: b, onSwiping: v, trackMouse: !0, trackTouch: !0, ...i }), onCloseCallback: m };
                        };
                    },
                    810: (e) => {
                        e.exports = b;
                    },
                },
                ea = {};
            function er(e) {
                var t = ea[e];
                if (void 0 !== t) return t.exports;
                var i = (ea[e] = { exports: {} });
                return en[e](i, i.exports, er), i.exports;
            }
            (er.d = (e, t) => {
                for (var i in t) er.o(t, i) && !er.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (er.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (er.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var es = {};
            (() => {
                Object.defineProperty(es, '__esModule', { value: !0 }), (es.usePopoverSwipeable = void 0);
                let e = er(810),
                    t = er(1381);
                es.usePopoverSwipeable = (i) => {
                    let { ref: n, swipeableProps: a = {}, onClose: r, disableSwipe: s, placement: o, threshold: l } = i,
                        c = (0, e.useMemo)(() => {
                            switch (o) {
                                case 'top':
                                case 'top-end':
                                case 'top-start':
                                    return t.SwipeablePlacement.TOP;
                                case 'right':
                                case 'right-end':
                                case 'right-start':
                                    return t.SwipeablePlacement.RIGHT;
                                case 'left':
                                case 'left-end':
                                case 'left-start':
                                    return t.SwipeablePlacement.LEFT;
                                default:
                                    return t.SwipeablePlacement.BOTTOM;
                            }
                        }, [o]);
                    return (0, t.useComponentSwipeable)({ ref: n, swipeableProps: a, onClose: r, disableSwipe: s, placement: c, threshold: l });
                };
            })(),
                es.__esModule;
            var eo = es.usePopoverSwipeable,
                el = i(44989),
                ec = i(58359),
                ed = i(48454),
                eu = i(83920),
                em = i(8322);
            let ev = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, i] = (0, v.useState)(e),
                    { contentRef: n } = (0, eu.g)();
                return (
                    (0, v.useEffect)(() => {
                        let e = new ResizeObserver((e) => {
                            let [n] = e || [];
                            n && n.contentRect.height !== t && i(n.contentRect.height);
                        });
                        return (
                            n && e.observe(n),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, n]),
                    { contentHeight: t }
                );
            };
            var eb = i(58625),
                e_ = i(49723),
                ep = i.n(e_);
            let eh = (0, u.PA)(() => {
                var e, t, i, n;
                let { formatMessage: a } = (0, _.A)(),
                    {
                        vibe: r,
                        settings: { isMobile: s },
                        vibeSettings: o,
                    } = (0, z.g)(),
                    { pageId: l } = (0, L.$)(),
                    { blockIdForFrom: d } = (0, R.N)(),
                    u = (0, v.useRef)(null),
                    m = (0, v.useRef)(null),
                    b = (0, v.useRef)(null),
                    { resetContext: g } = (0, U.B)({ seeds: null != (n = null == (e = r.meta) ? void 0 : e.seeds) ? n : [], pageIdForFrom: l, blockIdForFrom: d }),
                    { contentRef: f } = (0, eu.g)(),
                    { contentHeight: y } = ev(0),
                    { state: C, setState: j, toggleFalse: k } = (0, el.e)(!1);
                (0, v.useEffect)(
                    () => () => {
                        o.reset();
                    },
                    [o],
                );
                let N = (0, v.useMemo)(
                        () => (s ? { height: '88vh', transitionProperty: 'opacity' } : f ? { insetInlineEnd: 7, insetBlockStart: f.offsetTop + 7, height: y - 16 } : {}),
                        [y, f, s],
                    ),
                    S = !!(r.isApplying || r.isMyVibe),
                    w = (0, x.c)((e) => {
                        if (!r.isApplying) {
                            var t;
                            u.current && (0, ec.P)(e, ep().ripple, u.current), g(), null == (t = m.current) || t.focus();
                        }
                    }),
                    E = (0, v.useMemo)(() => {
                        var e, t;
                        if (
                            ((e) =>
                                !!e &&
                                e.some((e) => {
                                    let [t] = (null == e ? void 0 : e.split(':')) || [];
                                    return e === em.M1 || (t && em.UM.includes(t));
                                }))(null == (e = r.meta) ? void 0 : e.seeds)
                        )
                            return (null == (t = r.meta) ? void 0 : t.context)
                                ? (0, c.jsx)(A.$, {
                                      className: ep().toggleSettingsButton,
                                      size: 'm',
                                      radius: 'round',
                                      icon: (0, c.jsx)(G.I, { variant: 'filter', size: 'xs' }),
                                      'aria-label': a({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                  })
                                : (0, c.jsx)(A.$, {
                                      className: ep().toggleSettingsButton,
                                      size: 'default',
                                      radius: 'xxxl',
                                      icon: (0, c.jsx)(G.I, { variant: 'filter', size: 'xxs' }),
                                      'aria-label': a({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                      children: (0, c.jsx)(P.HL, {
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, c.jsx)(p.A, { id: 'interface-actions.configure-my-vibe' }),
                                      }),
                                  });
                    }, [a, null == (t = r.meta) ? void 0 : t.context, null == (i = r.meta) ? void 0 : i.seeds]),
                    { handlers: T } = eo({ ref: b, onClose: k, placement: 'bottom', disableSwipe: !s, swipeableProps: { preventScrollOnSwipe: !0 } });
                return (0, c.jsxs)(ed.AM, {
                    placement: s ? 'bottom' : 'right',
                    isMobile: s,
                    strategy: 'fixed',
                    transform: !1,
                    portalNode: f,
                    positionElement: f,
                    disableFloatingStyles: !s,
                    open: C,
                    onOpenChange: j,
                    style: N,
                    overlayClassName: ep().overlay,
                    popoverContentRef: b,
                    children: [
                        E,
                        (0, c.jsx)(ed.hl, {
                            className: ep().popover,
                            ref: b,
                            'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_BLOCK,
                            children: (0, c.jsxs)('div', {
                                className: ep().root,
                                children: [
                                    s && (0, c.jsx)('div', { ref: T.ref, onMouseDown: T.onMouseDown, className: ep().swipeableArea }),
                                    (0, c.jsxs)('div', {
                                        className: ep().header,
                                        children: [
                                            (0, c.jsx)(P.DZ, {
                                                variant: 'h3',
                                                size: 's',
                                                weight: 'bold',
                                                'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                                children: (0, c.jsx)(p.A, { id: 'interface-actions.my-vibe-settings' }),
                                            }),
                                            (0, c.jsxs)('div', {
                                                className: ep().actions,
                                                children: [
                                                    (0, c.jsx)(I.m_, {
                                                        offsetOptions: 4,
                                                        placement: 'left',
                                                        text: a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                        children: (0, c.jsx)(A.$, {
                                                            variant: 'outline',
                                                            radius: 'round',
                                                            size: 'xxxs',
                                                            icon: (0, c.jsx)(G.I, { variant: 'reset', size: 'xxxs' }),
                                                            onClick: w,
                                                            disabled: !!r.isMyVibe,
                                                            'aria-hidden': !!r.isMyVibe,
                                                            'aria-disabled': S,
                                                            'aria-label': a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                            ref: u,
                                                            'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                        }),
                                                    }),
                                                    (0, c.jsx)(A.$, {
                                                        radius: 'round',
                                                        color: 'secondary',
                                                        size: 'xxs',
                                                        icon: (0, c.jsx)(G.I, { variant: 'close', size: 'xxs' }),
                                                        onClick: k,
                                                        'aria-label': a({ id: 'interface-actions.close-my-vibe-settings' }),
                                                        ref: m,
                                                        'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)(eb.C, {}),
                                ],
                            }),
                        }),
                    ],
                });
            });
            var eg = i(64089),
                ex = i(10180),
                ef = i(75225),
                ey = i.n(ef);
            let eA = (0, u.PA)((e) => {
                    var t;
                    let { context: i, onResetClick: n, className: a } = e,
                        {
                            vibe: r,
                            settings: { isMobile: s },
                            experiments: o,
                        } = (0, z.g)(),
                        { formatMessage: l } = (0, _.A)(),
                        u = (0, eg.A)(r.meta),
                        m = i && !s,
                        v = (0, y.L)(() => {
                            var e;
                            return o.checkExperiment(H.z.WebNextVibeDescription, 'on') && (null == (e = r.meta) ? void 0 : e.isMix)
                                ? l({ id: 'vibe-actions.vibe-context' }, { type: r.meta.type, name: i })
                                : i;
                        });
                    return (0, c.jsxs)('div', {
                        className: (0, d.$)(ey().root, a),
                        children: [
                            m &&
                                (0, c.jsx)(ex.O, {
                                    size: 'm',
                                    iconSize: 'xs',
                                    withScaleAnimation: !1,
                                    isPinned: null == (t = r.meta) ? void 0 : t.isPinned,
                                    onClick: u,
                                    className: ey().pinButton,
                                }),
                            (0, c.jsx)(eh, {}),
                            i &&
                                (0, c.jsxs)('div', {
                                    className: (0, d.$)(ey().context),
                                    'data-test-id': h.e8.vibe.VIBE_CONTEXT,
                                    children: [
                                        (0, c.jsx)(P.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', lineClamp: 1, children: v }),
                                        (0, c.jsx)(A.$, {
                                            className: ey().resetButton,
                                            variant: 'text',
                                            radius: 'round',
                                            withRipple: !1,
                                            icon: (0, c.jsx)(G.I, { variant: 'close', size: 'xxs' }),
                                            onClick: n,
                                            'aria-label': ''.concat(l({ id: 'vibe-actions.reset-settings' }), ' ').concat(v),
                                            'data-test-id': h.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                eC = 'vibe-block',
                ej = 'vibe-block-controls',
                ek = (0, u.PA)((e) => {
                    var t, i, n, a;
                    let { className: r } = e,
                        s = (0, m.useRouter)(),
                        { vibe: o, experiments: l, user: u } = (0, z.g)(),
                        b = (0, v.useRef)(null),
                        [_, g] = (0, f.d)(),
                        { pageId: x } = (0, L.$)(),
                        { blockIdForFrom: y } = (0, R.N)(),
                        { isFreemium: A, withFreemiumCloseListening: C } = (0, F.X)(),
                        {
                            openPaymentWidgetModal: j,
                            isShimmerActive: k,
                            isShimmerVisible: I,
                            mainText: N,
                            mainTextA11y: S,
                            additionText: E,
                        } = (0, V.D)({ storeName: 'music', isEnabled: A || C, offerElement: { element: _, intersectionPropertyId: ej } }),
                        { isIntersecting: O } = null != (n = (0, w.BL)([b], { preflightCheck: !1 }, !b.current)[eC]) ? n : {},
                        B = (0, D.N)().get(W.QG),
                        {
                            isVibeContext: G,
                            isPlaying: Y,
                            togglePlay: $,
                            resetContext: Q,
                            playSeeds: pulseSyncPlaySeeds,
                        } = (0, U.B)({ seeds: null != (a = null == (t = o.meta) ? void 0 : t.seeds) ? a : [], pageIdForFrom: x, blockIdForFrom: y }),
                        Z = l.checkExperiment(H.z.WebNextDisableVibeSettings, 'on') || A || !u.isAuthorized || C,
                        J = (0, v.useCallback)(() => {
                            G ? Q() : o.vibeResetLoadingState !== K.G.PENDING && o.vibeReset();
                        }, [G, o, Q]),
                        et = (0, v.useCallback)(() => {
                            if (!u.isAuthorized) {
                                if (!B.authorizationUrl) return;
                                s.push(B.authorizationUrl);
                                return;
                            }
                            (A || C) && j();
                        }, [u.isAuthorized, B.authorizationUrl, s, A, C, j]),
                        en = (0, v.useCallback)(
                            (e) => {
                                e.stopPropagation(), e.preventDefault(), et();
                            },
                            [et],
                        ),
                        ea = (0, v.useCallback)(() => {
                            if (A || !u.isAuthorized || C) return void et();
                            $();
                        }, [A, C, u.isAuthorized, $, et]),
                        er = (0, v.useMemo)(
                            () =>
                                l.checkExperiment(H.z.WebNextShaderFallbackEnabled, 'on')
                                    ? (0, c.jsx)(T, { className: ei().vibeAnimation })
                                    : (0, c.jsx)(M, { isIntersecting: O, className: ei().vibeAnimation }),
                            [l, O],
                        ),
                        es = (0, v.useMemo)(() => (0, c.jsx)(q.H, { size: 'l', className: ei().button }), []);
                    return (
                        (0, v.useEffect)(() => {
                            if (!window.pulsesyncApi) return;
                            let e = function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = Array.isArray(null == e ? void 0 : e.seeds) ? e.seeds : 'string' == typeof (null == e ? void 0 : e.seed) ? [e.seed] : [],
                                    i = t.filter((e) => 'string' == typeof e && e.length > 0);
                                if (i.length > 0) {
                                    if (A || !u.isAuthorized || C) return void et();
                                    pulseSyncPlaySeeds(i);
                                    return;
                                }
                                ea();
                            };
                            return (
                                (window.pulsesyncApi.playVibeNative = e),
                                () => {
                                    window.pulsesyncApi && window.pulsesyncApi.playVibeNative === e && delete window.pulsesyncApi.playVibeNative;
                                }
                            );
                        }, [A, C, u.isAuthorized, ea, et, pulseSyncPlaySeeds]),
                        (0, v.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        u.isAuthorized && o.isNeededToLoad && (0, v.use)(o.getLastVibe()),
                        (0, c.jsxs)('div', {
                            className: (0, d.$)(ei().root, { [ei().root_freemium]: A || !u.isAuthorized || C }, r),
                            ref: b,
                            'data-intersection-property-id': eC,
                            'data-test-id': h.e8.vibe.VIBE_BLOCK,
                            children: [
                                er,
                                (0, c.jsxs)('div', {
                                    className: ei().controls,
                                    onClick: en,
                                    ref: g,
                                    'data-intersection-property-id': ej,
                                    children: [
                                        (0, c.jsx)(ee, { className: ei().playButton, isPlaying: Y, ariaDisabled: A || !u.isAuthorized || C, onClick: ea }),
                                        !Z && (0, c.jsx)(eA, { className: ei().settingsButton, context: null == (i = o.meta) ? void 0 : i.context, onResetClick: J }),
                                        (A || !u.isAuthorized || C) &&
                                            (0, c.jsx)(P.HL, {
                                                className: ei().subscriptionText,
                                                variant: 'div',
                                                size: 'l',
                                                'data-test-id': h.e8.vibe.MY_VIBE_SUBSCRIPTION_TEXT,
                                                children: (0, c.jsx)(p.A, { id: 'vibe-freemium.available-in-plus', values: { br: (0, c.jsx)('br', {}) } }),
                                            }),
                                        !u.isAuthorized && es,
                                        u.isAuthorized &&
                                            (A || C) &&
                                            (0, c.jsx)(X.b, {
                                                isShimmerActive: k,
                                                isShimmerVisible: I,
                                                onClick: j,
                                                mainText: N,
                                                ariaLabel: S,
                                                additionText: E,
                                                className: ei().button,
                                                'data-test-id': h.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON,
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
            ek.displayName = 'VibeBlock';
            var eI = i(3435),
                eP = i(79671),
                eN = i(91724),
                eS = i(7999),
                ew = i(99872),
                eE = i(84427),
                eT = i(14177),
                eM = i(71768),
                eO = i(27246),
                eB = i(24116),
                eR = i(37862),
                eL = i(2125),
                eV = i(48922),
                eW = i(95226),
                eD = i(71610),
                eF = i(22714),
                eU = i(3796),
                ez = i(39472),
                eH = i(84062),
                eK = i(14257),
                eX = i(50),
                eq = i(97201),
                eG = i(80408),
                eY = i(58054),
                e$ = i(32468),
                eQ = i(23028),
                eZ = i.n(eQ),
                eJ = i(16172),
                e0 = i(53730),
                e1 = i(45303),
                e2 = i(80346),
                e8 = i(68535),
                e5 = i(71735),
                e9 = i(78305),
                e7 = i(12350),
                e6 = i(2969),
                e4 = i(55332),
                e3 = i(95329),
                th = i(6612),
                tx = i(1613),
                tf = i(44782),
                ty = i(77035),
                te = i(53022),
                tt = i(44128),
                ti = i(41812),
                tn = i(92744),
                ta = i(90326),
                tr = i(30743),
                ts = i(45219),
                to = i(7462),
                tl = i(47745),
                tc = i(17593),
                td = i(32156),
                tu = i(61258),
                tm = i(90829),
                tv = i(99711),
                tb = i.n(tv);
            let pulseSyncImprovedWaveLayoutSettingKey = 'modSettings.vibeAnimationEnhancement.improvedWaveLayout',
                pulseSyncIsImprovedWaveLayoutEnabled = () => {
                    try {
                        return window.IMPROVED_WAVE_LAYOUT?.() ?? window.nativeSettings?.get?.(pulseSyncImprovedWaveLayoutSettingKey) ?? !0;
                    } catch (e) {
                        return !0;
                    }
                },
                pulseSyncNormalizeStationText = (e) =>
                    String(e ?? '')
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, ' '),
                pulseSyncStationNamesMatch = (e, t) => {
                    const a = pulseSyncNormalizeStationText(e),
                        i = pulseSyncNormalizeStationText(t);
                    return !!a && !!i && (a.includes(i) || i.includes(a));
                },
                pulseSyncFindLocalStation = (e, t, a) => {
                    const i = pulseSyncNormalizeStationText(e?.configuration?.glagolDeviceId);
                    if (i) {
                        const e = t.find((e) => !a.has(e) && pulseSyncNormalizeStationText(e?.deviceId) === i);
                        if (e) return e;
                    }
                    const n = pulseSyncNormalizeStationText(e?.configuration?.platform);
                    return n
                        ? (t.find(
                              (t) => !a.has(t) && pulseSyncNormalizeStationText(t?.platform) === n && pulseSyncStationNamesMatch(e?.name, t?.name ?? t?.instanceName),
                          ) ?? null)
                        : null;
                },
                pulseSyncBuildCastDeviceRows = (e = [], t = []) => {
                    const a = new Set();
                    return e.map((e) => {
                        const i = pulseSyncFindLocalStation(e, t, a);
                        return i && a.add(i), { accountSpeaker: e, localSpeaker: i ?? void 0, canUseLocal: !!i };
                    });
                },
                pulseSyncGetCastDevicePlatform = (e) =>
                    pulseSyncNormalizeStationText(
                        e?.accountSpeaker?.configuration?.platform ??
                            e?.accountSpeaker?.configuration?.quasarInfo?.platform ??
                            e?.localSpeaker?.platform ??
                            e?.localSpeaker?.txt?.platform,
                    ),
                pulseSyncGetCastDeviceIconKind = (e) => {
                    if (e?.isThisDevice) return 'computer';
                    const t = pulseSyncGetCastDevicePlatform(e);
                    const a = {
                        yandexstation: 'station',
                        yandexstation_2: 'station',
                        yandexmidi: 'station2',
                        yandexmini: 'mini',
                        yandexmini_2: 'mini',
                        yandexmicro: 'mini',
                        yandexmodule: 'module',
                        yandexmodule_2: 'module',
                        yandex_tv: 'tv',
                        saturn: 'chiron',
                        cucumber: 'cucumber',
                        bergamot: 'mini',
                        plum: 'mini',
                        orion: 'station',
                        monet: 'tv',
                        magritte: 'tv',
                        goya: 'tv',
                    };
                    if (a[t]) return a[t];
                    if (/computer|desktop|windows|win32|darwin|mac|linux|electron/.test(t)) return 'computer';
                    if (/chiron/.test(t)) return 'chiron';
                    if (/cucumber/.test(t)) return 'cucumber';
                    if (/mini/.test(t)) return 'mini';
                    if (/station[_-]?2|station2|yandexstation[_-]?2|yandex_station[_-]?2/.test(t)) return 'station2';
                    return 'station';
                },
                pulseSyncCastDeviceIconPath = {
                    computer:
                        'm14.6,5c1.1024,0 2.01,-0.0016 2.7373,0.0772 0.7461,0.0808 1.4215,0.2556 2.0147,0.6865 0.3394,0.2466 0.6381,0.5453 0.8847,0.8848 0.431,0.5931 0.6057,1.2686 0.6866,2.0146 0.0787,0.7273 0.0771,1.6349 0.0771,2.7373v0.1992c0,1.1024 0.0016,2.01 -0.0771,2.7373 -0.0809,0.7461 -0.2556,1.4215 -0.6866,2.0147 -0.1727,0.2377 -0.3718,0.4545 -0.5918,0.6484h3.3555v2h-22v-2h3.3555c-0.2199,-0.1939 -0.419,-0.4107 -0.5918,-0.6484 -0.4309,-0.5932 -0.6057,-1.2686 -0.6865,-2.0147 -0.0787,-0.7273 -0.0772,-1.6349 -0.0772,-2.7373v-0.1992c0,-1.1024 -0.0016,-2.01 0.0772,-2.7373 0.0808,-0.7461 0.2556,-1.4215 0.6865,-2.0146 0.2466,-0.3394 0.5453,-0.6381 0.8848,-0.8848 0.5932,-0.4309 1.2686,-0.6057 2.0146,-0.6865 0.7273,-0.0787 1.6349,-0.0772 2.7373,-0.0772h5.1992zM9.4008,7c-1.1472,0 -1.9278,0.001 -2.5225,0.0654 -0.5758,0.0624 -0.8583,0.1744 -1.0537,0.3164 -0.1697,0.1233 -0.3191,0.2727 -0.4424,0.4424 -0.142,0.1954 -0.254,0.4779 -0.3164,1.0537 -0.0644,0.5946 -0.0654,1.3754 -0.0654,2.5225v0.1992c0,1.1471 0.001,1.9278 0.0654,2.5225 0.0624,0.5758 0.1744,0.8583 0.3164,1.0537 0.1233,0.1697 0.2727,0.3191 0.4424,0.4424 0.1954,0.1419 0.4779,0.254 1.0537,0.3164 0.5947,0.0644 1.3753,0.0654 2.5225,0.0654h5.1992c1.1472,0 1.9278,-0.001 2.5225,-0.0654 0.5758,-0.0624 0.8583,-0.1745 1.0537,-0.3164 0.1697,-0.1234 0.3191,-0.2727 0.4424,-0.4424 0.1419,-0.1954 0.254,-0.4779 0.3164,-1.0537 0.0644,-0.5947 0.0654,-1.3754 0.0654,-2.5225v-0.1992c0,-1.1471 -0.001,-1.9278 -0.0654,-2.5225 -0.0624,-0.5758 -0.1745,-0.8583 -0.3164,-1.0537 -0.1233,-0.1697 -0.2727,-0.3191 -0.4424,-0.4424 -0.1954,-0.142 -0.4779,-0.254 -1.0537,-0.3164 -0.5947,-0.0644 -1.3753,-0.0654 -2.5225,-0.0654h-5.1992z',
                    module: 'M15.16 3.75L1 11.3l7.84 4.25L23 8l-7.84-4.25zM1 12.95v3.3l7.84 4.25L23 12.95v-3.3L8.84 17.2l-2.6-1.41V17L3.44 15.5v-1.22L1 12.95z',
                    tv: 'M19.6 6.4v7.2H4.4V6.4h15.2zM2 4h2.4h15.2H22v2.4v7.2V16h-2.4H4.4H2v-2.4v-7.2V4zm5 16.2h10v-2.4H7v2.4z',
                    hub: 'M12 5.13l6.6 4.4v9.07h-4.35v-6.1h-4.5v6.1H5.4V9.53l6.6-4.4zM9.75 21H5.4H3v-2.4V8.25l9-6l9 6V18.6V21h-2.4h-4.35h-4.5z',
                    station:
                        'm16.454,3.4996c0,1.23 -1.9942,2.2271 -4.4542,2.2271 -2.46,0 -4.4542,-0.9971 -4.4542,-2.2271s1.9942,-2.2271 4.4542,-2.2271c2.46,0 4.4542,0.9971 4.4542,2.2271zM18.7659,18.3616c0.2514,-0.4236 0.2331,-1.0072 0.2331,-2.236v-10.066c0,-0.1388 -0.0361,-0.2752 -0.1048,-0.3958s-0.1675,-0.2213 -0.2868,-0.2921c-0.1194,-0.0708 -0.2551,-0.1094 -0.3939,-0.112 -0.1387,-0.0025 -0.2758,0.0311 -0.3976,0.0975l-0.0704,0.0384c-3.0073,1.6403 -4.3768,2.4605 -5.7462,2.4605 -1.3695,0 -2.739,-0.8202 -5.7463,-2.4605l-0.0704,-0.0384c-0.1218,-0.0665 -0.2589,-0.1001 -0.3976,-0.0975 -0.1388,0.0025 -0.2745,0.0411 -0.3938,0.112 -0.1193,0.0708 -0.2182,0.1715 -0.2869,0.2921 -0.0687,0.1206 -0.1048,0.257 -0.1048,0.3958v10.066c0,1.229 -0.0183,1.8126 0.2331,2.2361 0.2514,0.4235 0.7725,0.6869 1.8514,1.2754 2.5725,1.4032 3.7439,2.1048 4.9153,2.1047 1.1712,0 2.3425,-0.7015 4.9142,-2.1043 1.0795,-0.5888 1.6008,-0.8523 1.8523,-1.2759z',
                    station2:
                        'm8.4897,3.8078c-0.4164,0.1864 -0.7401,0.3313 -0.9898,0.4862 -0.5817,0.3609 -0.0566,0.6464 0.2313,0.7626 3.6409,1.4686 5.111,2.0123 6.4594,1.7962 0.7603,-0.1218 1.4819,-0.4853 2.5322,-1.0608 0.6573,-0.3602 0.9884,-0.5985 0.1269,-1.0421 -0.312,-0.1607 -0.7566,-0.3262 -1.3895,-0.5574 -4.3376,-1.5844 -4.807,-1.3701 -6.4444,-0.6224 -0.1744,0.0796 -0.3623,0.1644 -0.5261,0.2377h-0zM16.7201,20.8098c1.8489,-0.8276 2.2799,-1.0205 2.2799,-3.2928v-10.022c0,-0.1382 -0.0473,-0.274 -0.1373,-0.3941s-0.2195,-0.2203 -0.3759,-0.2908c-0.1564,-0.0705 -0.3343,-0.1089 -0.5161,-0.1115 -0.1819,-0.0025 -0.3614,0.031 -0.5211,0.0971l-0.0923,0.0382c-1.502,0.842 -2.3794,1.3667 -3.3171,1.5181 -1.4591,0.2356 -3.0642,-0.433 -7.3956,-2.2173l-0.0923,-0.0382c-0.1597,-0.0662 -0.3392,-0.0996 -0.5211,-0.0971 -0.1819,0.0025 -0.3597,0.0409 -0.5161,0.1115 -0.1564,0.0705 -0.2859,0.1708 -0.3759,0.2909 -0.09,0.1201 -0.1373,0.2559 -0.1373,0.3941v10.022c0,0.1362 -0.0005,0.2648 -0.001,0.3863 -0.0085,2.0629 -0.0087,2.1084 2.7328,3.1098 5.5921,2.0427 6.1973,1.7663 8.3082,0.8024 0.0732,-0.0334 0.1483,-0.0677 0.2254,-0.1027 0.1597,-0.0725 0.3105,-0.14 0.4529,-0.2038z',
                    chiron: 'm8.4,3h-0.0557c-1.0775,-0 -1.9665,-0 -2.6817,0.0774 -0.7461,0.0808 -1.4206,0.2555 -2.0138,0.6865 -0.3396,0.2467 -0.6382,0.5454 -0.8849,0.8849 -0.431,0.5932 -0.6057,1.2677 -0.6865,2.0138 -0.0775,0.7151 -0.0775,1.6041 -0.0774,2.6817v1.3114c-0,1.0775 -0,1.9665 0.0774,2.6817 0.0808,0.7461 0.2555,1.4206 0.6865,2.0137 0.2467,0.3396 0.5454,0.6383 0.8849,0.885 0.4135,0.3004 0.8665,0.4763 1.3557,0.5826 0.0183,1.4667 0.1098,2.3134 0.5684,2.9447 0.185,0.2546 0.409,0.4786 0.6637,0.6637 0.7886,0.5729 1.9135,0.5729 4.1634,0.5729h3.2c2.2498,0 3.3748,0 4.1634,-0.5729 0.2546,-0.1851 0.4786,-0.4091 0.6637,-0.6637 0.4586,-0.6313 0.5501,-1.478 0.5683,-2.9447 0.4893,-0.1063 0.9423,-0.2822 1.3557,-0.5826 0.3396,-0.2467 0.6383,-0.5454 0.885,-0.885 0.4309,-0.5931 0.6056,-1.2676 0.6865,-2.0137 0.0774,-0.7152 0.0774,-1.6042 0.0774,-2.6817v-1.3114c0,-1.0775 0,-1.9665 -0.0774,-2.6817 -0.0809,-0.7461 -0.2556,-1.4206 -0.6865,-2.0138 -0.2467,-0.3396 -0.5454,-0.6382 -0.885,-0.8849 -0.5931,-0.431 -1.2676,-0.6057 -2.0137,-0.6865 -0.7152,-0.0775 -1.6042,-0.0775 -2.6817,-0.0774h-7.2557zM15.665,15c1.1118,-0.0001 1.8736,-0.0026 2.4569,-0.0658 0.576,-0.0624 0.8583,-0.1742 1.0537,-0.3162 0.1698,-0.1233 0.3191,-0.2726 0.4424,-0.4424 0.142,-0.1954 0.2538,-0.4777 0.3162,-1.0537 0.0644,-0.5946 0.0658,-1.3747 0.0658,-2.5219v-1.2c0,-1.1472 -0.0014,-1.9273 -0.0658,-2.5219 -0.0624,-0.576 -0.1742,-0.8582 -0.3162,-1.0536 -0.1233,-0.1698 -0.2726,-0.3191 -0.4424,-0.4425 -0.1954,-0.142 -0.4777,-0.2538 -1.0537,-0.3162 -0.5946,-0.0644 -1.3747,-0.0658 -2.5219,-0.0658h-7.2c-1.1472,0 -1.9273,0.0014 -2.5219,0.0658 -0.576,0.0624 -0.8582,0.1742 -1.0536,0.3162 -0.1698,0.1234 -0.3191,0.2727 -0.4425,0.4425 -0.142,0.1954 -0.2538,0.4777 -0.3162,1.0536 -0.0644,0.5947 -0.0658,1.3747 -0.0658,2.5219v1.2c0,1.1472 0.0014,1.9273 0.0658,2.5219 0.0624,0.576 0.1742,0.8583 0.3162,1.0537 0.1234,0.1698 0.2727,0.3191 0.4425,0.4424 0.1954,0.142 0.4777,0.2538 1.0536,0.3162 0.5834,0.0632 1.3452,0.0657 2.457,0.0658h7.33z',
                    cucumber:
                        'm8.2522,6.6265 l2.4062,1.2031c0.8445,0.4223 1.8387,0.4223 2.6832,0l2.4062,-1.2031c0.5159,-0.258 0.5159,-0.9942 0,-1.2522l-2.4062,-1.2031c-0.8445,-0.4223 -1.8387,-0.4223 -2.6832,0l-2.4062,1.2031c-0.5159,0.258 -0.5159,0.9942 0,1.2522zM12,10.2496c-1.4143,0 -3.3087,-0.7801 -5.6832,-2.3403 -0.1386,-0.0911 -0.3009,-0.1396 -0.4668,-0.1396 -0.4694,0 -0.85,0.3806 -0.85,0.85v6.6321c0,0.8018 0.3845,1.5549 1.0339,2.025 2.5073,1.8153 4.4961,2.7229 5.9661,2.7229s3.4587,-0.9076 5.9661,-2.7229c0.6494,-0.4701 1.0339,-1.2232 1.0339,-2.025v-6.632c0,-0.1659 -0.0485,-0.3282 -0.1396,-0.4668 -0.2578,-0.3923 -0.7849,-0.5014 -1.1772,-0.2436 -2.3745,1.5602 -4.2689,2.3403 -5.6832,2.3403z',
                    mini: 'm17.939,8.0749c0,1.64 -2.659,2.9695 -5.939,2.9695 -3.2799,0 -5.9389,-1.3295 -5.9389,-2.9695s2.6589,-2.9695 5.9389,-2.9695c3.28,0 5.939,1.3295 5.939,2.9695zM19.8807,11.0635c0.0781,0.1264 0.1194,0.272 0.1194,0.4206v4.3451c0,2.2093 -3.5817,4 -7.9999,4 -4.4183,0 -8.0001,-1.7908 -8.0001,-4v-4.3451c-0.0002,-0.1486 0.0411,-0.2944 0.1191,-0.4208 0.0781,-0.1265 0.1898,-0.2287 0.3227,-0.2952s0.2817,-0.0946 0.4298,-0.0813c0.148,0.0134 0.2894,0.0678 0.4082,0.1571 2.005,1.2692 4.3492,1.8975 6.7203,1.8011 2.371,0.0964 4.7151,-0.5319 6.7201,-1.8011 0.1189,-0.0891 0.2602,-0.1433 0.4081,-0.1566 0.148,-0.0133 0.2967,0.0148 0.4296,0.0813 0.1329,0.0664 0.2446,0.1686 0.3227,0.2949z',
                },
                pulseSyncRenderCastDeviceIcon = (e, t = '') =>
                    (0, c.jsx)('span', {
                        className: 'PulseSync_castPopoverItemIcon'.concat(t ? ' '.concat(t) : ''),
                        'aria-hidden': !0,
                        children: (0, c.jsx)('svg', {
                            width: '32',
                            height: '32',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, c.jsx)('path', {
                                d: pulseSyncCastDeviceIconPath[pulseSyncGetCastDeviceIconKind(e)] ?? pulseSyncCastDeviceIconPath.station,
                                fill: 'currentColor',
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                            }),
                        }),
                    }),
                pulseSyncGetActiveCastDeviceRow = (e, t) => (t ? e.find((e) => !e.isThisDevice && e.accountSpeaker?.id === t) : null),
                pulseSyncCastConnectDelay = (e) => new Promise((t) => setTimeout(t, e)),
                pulseSyncSelectYandexStationSpeaker = async (e) => {
                    let t = null;
                    for (let a = 0; a <= 3; a += 1) {
                        try {
                            if (
                                ((t = window.pulseSyncYandexStationCast?.activate
                                    ? await window.pulseSyncYandexStationCast.activate(e)
                                    : await window.desktopEvents?.invoke?.('YANDEX_STATION_SELECT_SPEAKER', e)),
                                t?.ok)
                            )
                                return t;
                        } catch (e) {
                            t = { ok: !1, error: e };
                        }
                        a < 3 && (await pulseSyncCastConnectDelay(600));
                    }
                    return t ?? { ok: !1 };
                },
                pulseSyncIsYandexStationCastEnabled = () => {
                    try {
                        return window.__pulseSyncYandexStationCastEnabled ?? window.ENABLE_YANDEX_STATION_CAST?.() ?? !0;
                    } catch (e) {
                        return !0;
                    }
                },
                pulseSyncApplyYandexStationState = (e, t) => {
                    const a = Array.isArray(e?.accountSpeakers) ? e.accountSpeakers : [],
                        i = Array.isArray(e?.localSpeakers) ? e.localSpeakers : [];
                    t.setActiveSpeakerId(e?.activeSpeaker?.accountSpeaker?.id ?? window.pulseSyncYandexStationCast?.activeSpeakerId ?? null);
                    t.setDeviceRows([{ isThisDevice: !0 }, ...pulseSyncBuildCastDeviceRows(a, i)]);
                    t.setDevicesLoaded(Boolean(e?.firstFlowCompleted));
                    t.setDevicesLoading(Boolean(e?.refreshing));
                },
                pulseSyncGetCastPopoverShift = (e) => {
                    const t = e?.getBoundingClientRect?.();
                    if (!t) return 0;
                    const a = 320,
                        i = 12,
                        n = window.innerWidth || document.documentElement?.clientWidth || a,
                        r = t.left + t.width / 2,
                        l = r - a / 2,
                        s = r + a / 2;
                    if (l < i) return i - l;
                    if (s > n - i) return n - i - s;
                    return 0;
                },
                pulseSyncWaveCastControl = (0, u.PA)((e) => {
                    let { buttonClassName: castButtonClassName, disabled: castDisabled } = e,
                        { formatMessage: castFormatMessage } = (0, _.A)(),
                        [castPopoverOpen, setCastPopoverOpen] = (0, v.useState)(!1),
                        [castPopoverMounted, setCastPopoverMounted] = (0, v.useState)(!1),
                        [castPopoverShift, setCastPopoverShift] = (0, v.useState)(0),
                        [castDeviceRows, setCastDeviceRows] = (0, v.useState)([]),
                        [castActiveSpeakerId, setCastActiveSpeakerId] = (0, v.useState)(window.pulseSyncYandexStationCast?.activeSpeakerId ?? null),
                        [castConnectingSpeakerId, setCastConnectingSpeakerId] = (0, v.useState)(null),
                        [castConnectionErrorSpeakerId, setCastConnectionErrorSpeakerId] = (0, v.useState)(null),
                        [castDevicesLoading, setCastDevicesLoading] = (0, v.useState)(!1),
                        [castDevicesLoaded, setCastDevicesLoaded] = (0, v.useState)(!1),
                        [castHoveredDeviceKey, setCastHoveredDeviceKey] = (0, v.useState)(null),
                        [castEnabled, setCastEnabled] = (0, v.useState)(pulseSyncIsYandexStationCastEnabled()),
                        castRootRef = (0, v.useRef)(null),
                        castCloseTimerRef = (0, v.useRef)(null),
                        loadCastDevices = (0, v.useCallback)(async () => {
                            if (!castEnabled) {
                                setCastDeviceRows([]);
                                setCastDevicesLoaded(!1);
                                setCastDevicesLoading(!1);
                                return;
                            }
                            try {
                                setCastDevicesLoading(!0);
                                const castState = await (window.desktopEvents?.invoke?.('YANDEX_STATION_STATE') ?? Promise.resolve(null));
                                pulseSyncApplyYandexStationState(castState, {
                                    setActiveSpeakerId: setCastActiveSpeakerId,
                                    setDeviceRows: setCastDeviceRows,
                                    setDevicesLoaded: setCastDevicesLoaded,
                                    setDevicesLoading: setCastDevicesLoading,
                                });
                            } catch (castError) {
                                console.warn('Failed to load Yandex Station cast devices', castError);
                                setCastDeviceRows([]);
                                setCastDevicesLoaded(!1);
                                setCastDevicesLoading(!1);
                            }
                        }, [castEnabled]),
                        closeCastPopover = (0, v.useCallback)(() => {
                            setCastPopoverOpen(!1);
                            clearTimeout(castCloseTimerRef.current);
                            castCloseTimerRef.current = setTimeout(() => {
                                setCastPopoverMounted(!1);
                                setCastHoveredDeviceKey(null);
                            }, 160);
                        }, []),
                        recalcCastPopoverShift = (0, v.useCallback)(() => {
                            setCastPopoverShift(pulseSyncGetCastPopoverShift(castRootRef.current));
                        }, []),
                        openCastPopover = (0, v.useCallback)(() => {
                            clearTimeout(castCloseTimerRef.current);
                            setCastPopoverMounted(!0);
                            requestAnimationFrame(() => {
                                recalcCastPopoverShift();
                                setCastPopoverOpen(!0);
                            });
                        }, [recalcCastPopoverShift]),
                        toggleCastPopover = (0, v.useCallback)(() => {
                            castPopoverOpen ? closeCastPopover() : openCastPopover();
                        }, [castPopoverOpen, closeCastPopover, openCastPopover]);
                    (0, v.useEffect)(() => {
                        void loadCastDevices();
                    }, [loadCastDevices]);
                    (0, v.useEffect)(() => {
                        const castStateHandler = (event, castState) => {
                            pulseSyncApplyYandexStationState(castState, {
                                setActiveSpeakerId: setCastActiveSpeakerId,
                                setDeviceRows: setCastDeviceRows,
                                setDevicesLoaded: setCastDevicesLoaded,
                                setDevicesLoading: setCastDevicesLoading,
                            });
                        };
                        const unsubscribeCastState = window.desktopEvents?.on?.('YANDEX_STATION_STATE', castStateHandler);
                        return () => {
                            'function' == typeof unsubscribeCastState && unsubscribeCastState();
                        };
                    }, []);
                    (0, v.useEffect)(() => {
                        const castChangeHandler = (event) => {
                            setCastActiveSpeakerId(event.detail?.activeSpeakerId ?? null);
                        };
                        window.addEventListener('pulse-sync-yandex-station-cast-change', castChangeHandler);
                        return () => {
                            window.removeEventListener('pulse-sync-yandex-station-cast-change', castChangeHandler);
                        };
                    }, []);
                    (0, v.useEffect)(() => {
                        const castSettingHandler = (event) => {
                            const nextCastEnabled = event.detail?.enabled ?? pulseSyncIsYandexStationCastEnabled();
                            setCastEnabled(nextCastEnabled);
                            nextCastEnabled
                                ? (setCastDevicesLoaded(!1), void loadCastDevices())
                                : (closeCastPopover(), setCastDeviceRows([]), setCastActiveSpeakerId(null), setCastDevicesLoaded(!1), setCastDevicesLoading(!1));
                        };
                        window.addEventListener('pulse-sync-yandex-station-cast-setting-change', castSettingHandler);
                        return () => {
                            window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', castSettingHandler);
                        };
                    }, [closeCastPopover, loadCastDevices]);
                    (0, v.useEffect)(() => () => clearTimeout(castCloseTimerRef.current), []);
                    (0, v.useEffect)(() => {
                        if (!castPopoverMounted) return;
                        const outsidePointerHandler = (event) => {
                            castRootRef.current?.contains?.(event.target) || closeCastPopover();
                        };
                        document.addEventListener('pointerdown', outsidePointerHandler, !0);
                        return () => {
                            document.removeEventListener('pointerdown', outsidePointerHandler, !0);
                        };
                    }, [castPopoverMounted, closeCastPopover]);
                    (0, v.useEffect)(() => {
                        if (!castPopoverMounted) return;
                        const resizeCastHandler = () => recalcCastPopoverShift();
                        recalcCastPopoverShift();
                        window.addEventListener('resize', resizeCastHandler);
                        return () => {
                            window.removeEventListener('resize', resizeCastHandler);
                        };
                    }, [castPopoverMounted, recalcCastPopoverShift]);
                    return castDisabled || !castEnabled
                        ? null
                        : (0, c.jsxs)('div', {
                              ref: castRootRef,
                              style: { position: 'relative', display: 'flex', alignItems: 'center' },
                              children: [
                                  (0, c.jsx)(A.$, {
                                      className: castButtonClassName,
                                      radius: 'round',
                                      size: 'xxxs',
                                      variant: 'text',
                                      withRipple: !1,
                                      'aria-label': castFormatMessage({ id: 'player-actions.cast' }),
                                      icon: castActiveSpeakerId
                                          ? pulseSyncRenderCastDeviceIcon(
                                                pulseSyncGetActiveCastDeviceRow(castDeviceRows, castActiveSpeakerId),
                                                'PulseSync_castPlayerButtonIcon',
                                            )
                                          : (0, c.jsx)(G.I, { variant: 'cast', size: 'xs' }),
                                      onClick: toggleCastPopover,
                                      style: castActiveSpeakerId ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : void 0,
                                  }),
                                  castPopoverMounted &&
                                      (0, c.jsx)('div', {
                                          className: 'PulseSync_castPopover',
                                          style: {
                                              opacity: castPopoverOpen ? 1 : 0,
                                              transform: 'translateX('.concat(castPopoverShift, 'px) ').concat(castPopoverOpen ? 'translateY(0)' : 'translateY(10px)'),
                                              pointerEvents: castPopoverOpen ? 'auto' : 'none',
                                          },
                                          children: !castDevicesLoaded
                                              ? (0, c.jsx)('div', {
                                                    className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_shimmer',
                                                    children: 'Поиск устройств...',
                                                })
                                              : (0, c.jsxs)('div', {
                                                    className: 'PulseSync_castPopoverContent',
                                                    children: [
                                                        (0, c.jsx)(
                                                            'div',
                                                            {
                                                                className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_refreshing'.concat(
                                                                    castDevicesLoading ? ' PulseSync_castPopoverStatus_visible' : '',
                                                                ),
                                                                children: 'Обновляем список устройств...',
                                                            },
                                                            'cast-refreshing',
                                                        ),
                                                        castDeviceRows.length
                                                            ? castDeviceRows.map((castRow) => {
                                                                  const isUnavailable = !castRow.isThisDevice && !castRow.canUseLocal,
                                                                      castRoomName = castRow.isThisDevice
                                                                          ? void 0
                                                                          : (castRow.accountSpeaker?.roomName ?? castRow.accountSpeaker?.householdName),
                                                                      castSpeakerId = castRow.accountSpeaker?.id,
                                                                      isConnecting =
                                                                          !castRow.isThisDevice &&
                                                                          castConnectingSpeakerId === castSpeakerId &&
                                                                          castActiveSpeakerId !== castSpeakerId,
                                                                      hasConnectionError =
                                                                          !castRow.isThisDevice &&
                                                                          castConnectionErrorSpeakerId === castSpeakerId &&
                                                                          castActiveSpeakerId !== castSpeakerId,
                                                                      isDisabled = isUnavailable || !!castConnectingSpeakerId,
                                                                      isConnected =
                                                                          (castRow.isThisDevice && !castActiveSpeakerId) ||
                                                                          (!castRow.isThisDevice && castActiveSpeakerId === castSpeakerId),
                                                                      castStatusText = castRow.isThisDevice
                                                                          ? castActiveSpeakerId
                                                                              ? 'Отключить колонку'
                                                                              : 'Сейчас выбрано'
                                                                          : isConnecting
                                                                            ? 'Подключение...'
                                                                            : hasConnectionError
                                                                              ? 'Ошибка подключения'
                                                                              : castActiveSpeakerId === castSpeakerId
                                                                                ? 'Подключено'
                                                                                : castRow.canUseLocal
                                                                                  ? 'В сети'
                                                                                  : 'Вне локальной сети',
                                                                      castRowKey = castRow.isThisDevice
                                                                          ? 'pulse-sync-this-device'
                                                                          : (castRow.accountSpeaker?.id ??
                                                                            castRow.accountSpeaker?.name ??
                                                                            castRow.localSpeaker?.deviceId);
                                                                  return (0, c.jsxs)(
                                                                      'button',
                                                                      {
                                                                          type: 'button',
                                                                          className: 'PulseSync_castPopoverItem'.concat(
                                                                              isConnected || (!isDisabled && castHoveredDeviceKey === castRowKey)
                                                                                  ? ' PulseSync_castPopoverItem_active'
                                                                                  : '',
                                                                          ),
                                                                          disabled: isDisabled,
                                                                          onClick: isDisabled
                                                                              ? void 0
                                                                              : async () => {
                                                                                    if (castRow.isThisDevice) {
                                                                                        window.pulseSyncYandexStationCast?.clear
                                                                                            ? await window.pulseSyncYandexStationCast.clear()
                                                                                            : await window.desktopEvents?.invoke?.('YANDEX_STATION_CLEAR_SPEAKER');
                                                                                        setCastActiveSpeakerId(null);
                                                                                        setCastConnectingSpeakerId(null);
                                                                                        setCastConnectionErrorSpeakerId(null);
                                                                                        closeCastPopover();
                                                                                        return;
                                                                                    }
                                                                                    const targetSpeakerId = castRow.accountSpeaker?.id;
                                                                                    if (!targetSpeakerId) return;
                                                                                    setCastConnectingSpeakerId(targetSpeakerId);
                                                                                    setCastConnectionErrorSpeakerId(null);
                                                                                    try {
                                                                                        const selectResult = await pulseSyncSelectYandexStationSpeaker(targetSpeakerId);
                                                                                        selectResult?.ok
                                                                                            ? (setCastActiveSpeakerId(targetSpeakerId),
                                                                                              setCastConnectionErrorSpeakerId(null),
                                                                                              closeCastPopover())
                                                                                            : (setCastConnectionErrorSpeakerId(targetSpeakerId),
                                                                                              console.warn('Failed to select Yandex Station cast device', selectResult));
                                                                                    } catch (selectError) {
                                                                                        setCastConnectionErrorSpeakerId(targetSpeakerId);
                                                                                        console.warn('Failed to select Yandex Station cast device', selectError);
                                                                                    } finally {
                                                                                        setCastConnectingSpeakerId(null);
                                                                                    }
                                                                                },
                                                                          onMouseEnter: isDisabled ? void 0 : () => setCastHoveredDeviceKey(castRowKey),
                                                                          onMouseLeave: isDisabled ? void 0 : () => setCastHoveredDeviceKey(null),
                                                                          children: [
                                                                              pulseSyncRenderCastDeviceIcon(castRow),
                                                                              (0, c.jsx)('div', {
                                                                                  style: {
                                                                                      display: 'flex',
                                                                                      alignItems: 'flex-start',
                                                                                      flexDirection: 'column',
                                                                                      minWidth: 0,
                                                                                      flex: '1 1 auto',
                                                                                  },
                                                                                  children: [
                                                                                      (0, c.jsx)('span', {
                                                                                          style: {
                                                                                              display: 'flex',
                                                                                              gap: '5px',
                                                                                              alignItems: 'baseline',
                                                                                              minWidth: 0,
                                                                                              maxWidth: '100%',
                                                                                          },
                                                                                          children: [
                                                                                              (0, c.jsx)('span', {
                                                                                                  className: 'PulseSync_castPopoverItemTitle',
                                                                                                  children: castRow.isThisDevice
                                                                                                      ? 'Это устройство'
                                                                                                      : (castRow.accountSpeaker?.name ??
                                                                                                        castRow.accountSpeaker?.id ??
                                                                                                        'Yandex Station'),
                                                                                              }),
                                                                                              castRoomName &&
                                                                                                  (0, c.jsx)('span', {
                                                                                                      className:
                                                                                                          'PulseSync_castPopoverItemMeta PulseSync_castPopoverItemRoom',
                                                                                                      children: (0, c.jsx)('span', {
                                                                                                          className: 'PulseSync_castPopoverItemRoomText',
                                                                                                          children: castRoomName,
                                                                                                      }),
                                                                                                  }),
                                                                                          ],
                                                                                      }),
                                                                                      (0, c.jsx)('span', {
                                                                                          className: 'PulseSync_castPopoverItemMeta'
                                                                                              .concat(isConnecting ? ' PulseSync_castPopoverItemMeta_shimmer' : '')
                                                                                              .concat(hasConnectionError ? ' PulseSync_castPopoverItemMeta_error' : ''),
                                                                                          children: castStatusText,
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                              isConnected && (0, c.jsx)('span', { children: '✓' }),
                                                                          ],
                                                                      },
                                                                      castRowKey,
                                                                  );
                                                              })
                                                            : (0, c.jsx)('div', {
                                                                  className: 'PulseSync_castPopoverStatus',
                                                                  children: 'Устройства не найдены',
                                                              }),
                                                    ],
                                                }),
                                      }),
                              ],
                          });
                }),
                t_ = 'https://avatars.mds.yandex.net/get-music-misc/29541/img.698c9ec84f02b819695579e7/orig',
                tp = (0, u.PA)((e) => {
                    var t, i;
                    let { album: n } = e,
                        {
                            vibe: a,
                            sonataState: r,
                            advert: s,
                            modals: { popoverOverPlayer: o },
                            fullscreenPlayer: l,
                            user: u,
                            settings: { isMobile: m },
                        } = (0, z.g)(),
                        { openIntroModalFromPlay: b } = (0, tc.e)(),
                        { withFreemiumCloseListening: p, withPlusPopoverWeb: g } = (0, F.X)(),
                        { formatMessage: f } = (0, _.A)(),
                        j = (0, tt.e)(),
                        k = (0, te.z)(),
                        I = (0, e5.P)(),
                        P = (0, e6.b)(),
                        N = (0, e9.r)(),
                        S = (0, e7.m)(),
                        w = (0, tl.N)(),
                        { pageId: E } = (0, L.$)(),
                        { togglePlay: T } = (0, U.B)({
                            seeds: null != (i = null == (t = a.meta) ? void 0 : t.seeds) ? i : [],
                            pageIdForFrom: E,
                            blockIdForFrom: ''.concat(eJ.LA.MyWave, '-').concat(eR.U.RADIO),
                            onPlayInterrupted: o.open,
                        }),
                        M = (0, to.r)(null == n ? void 0 : n.type),
                        O = (null == n ? void 0 : n.title) ? ''.concat(M, ' ').concat(n.title) : M,
                        B = r.entityMeta,
                        R = !r.isPlaying && (r.isVibeContext || !r.entityMeta),
                        V = (0, x.c)((e) => {
                            e.stopPropagation(), (0, ec.P)(e, tb().ripple), null == j || j.moveForward(), S({ actionType: eJ.X2.Skip });
                        }),
                        W = (0, x.c)((e) => {
                            e.stopPropagation(), (0, ec.P)(e, tb().ripple), null == j || j.moveBackward(), S({ actionType: eJ.X2.Backskip });
                        }),
                        D = (0, x.c)(() => {
                            if (s.isAdvertShown) {
                                var e;
                                null == N || null == (e = N.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!b())
                                if (B) null == j || j.togglePause(), S({ actionType: r.isPlaying ? eJ.X2.Pause : eJ.X2.Play });
                                else {
                                    if (g) return;
                                    T(), P(!r.isPlaying);
                                }
                        }),
                        H = (0, x.c)(() => {
                            I() || D();
                        }),
                        K = !B && !u.hasPlus && p,
                        X = (0, v.useCallback)(
                            () =>
                                (0, c.jsx)(ta.D, {
                                    className: (0, d.$)(tb().playButton, { [tb().playButton_playing]: r.isPlaying }),
                                    isPlaying: r.isPlaying,
                                    iconClassName: tb().playButtonIcon,
                                    color: 'secondary',
                                    onClick: H,
                                }),
                            [H, r.isPlaying],
                        ),
                        q = (0, v.useMemo)(
                            () =>
                                K
                                    ? u.isAuthorized
                                        ? (0, c.jsx)(td.S, { isEnabled: g, placement: 'top', textVariant: 'vibe', renderChildren: X })
                                        : (0, c.jsx)(tm.Z, { isEnabled: K, placement: 'top', textVariant: 'vibe', renderChildren: X })
                                    : X(),
                            [K, X, u.isAuthorized, g],
                        ),
                        Y = (0, x.c)(() => {
                            l.showFullscreenPlayerModal(), w({ to: eJ.QT.PlayerScreen });
                        }),
                        $ = (0, y.L)(() => (null == B ? void 0 : B.coverUri) || (null == n ? void 0 : n.coverUri) || t_),
                        Q = (0, x.c)(() => {
                            w({ to: eJ.QT.AlbumScreen });
                        }),
                        Z = (0, y.L)(() => {
                            var e, t, i, a;
                            return !m && (null == n ? void 0 : n.url)
                                ? (0, c.jsx)(tu.N, {
                                      className: tb().link,
                                      href: n.url,
                                      'aria-label': O,
                                      onClick: Q,
                                      children: (0, c.jsx)(
                                          C._V,
                                          {
                                              src: $,
                                              className: (0, d.$)(tb().cover, { [tb().cover_visible]: !R, [tb().cover_generative]: r.isGenerativeContext }),
                                              fit: 'cover',
                                              size: 400,
                                              withAvatarReplace: !0,
                                              alt: O,
                                              'aria-hidden': !0,
                                          },
                                          null != (a = null == (e = r.entityMeta) ? void 0 : e.idWithContext) ? a : 'default',
                                      ),
                                  })
                                : (0, c.jsx)(
                                      C._V,
                                      {
                                          src: $,
                                          className: (0, d.$)(tb().cover, { [tb().cover_visible]: r.isPlaying, [tb().cover_generative]: r.isGenerativeContext }),
                                          onClick: Y,
                                          fit: 'cover',
                                          size: 400,
                                          withAvatarReplace: !0,
                                          alt: O,
                                          'aria-hidden': !0,
                                      },
                                      null != (i = null == (t = r.entityMeta) ? void 0 : t.idWithContext) ? i : 'default',
                                  );
                        });
                    return (
                        (0, v.useEffect)(
                            () => (
                                null == k || k.addShortcutsListener(e3.M.MAIN, e4.l.TOGGLE_PLAY, D),
                                () => {
                                    null == k || k.removeShortcutsListener(e3.M.MAIN, e4.l.TOGGLE_PLAY);
                                }
                            ),
                            [D, k],
                        ),
                        (0, c.jsxs)('div', {
                            className: tb().root,
                            'aria-label': O,
                            children: [
                                !r.isGenerativeContext &&
                                    m &&
                                    (0, c.jsx)(A.$, {
                                        className: (0, d.$)(tb().button, tb().button_backward),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !r.canMoveBackward,
                                        'aria-hidden': !r.canMoveBackward,
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.previous-track' }),
                                        icon: (0, c.jsx)(G.I, { variant: 'previous', size: 'xs' }),
                                        onClick: W,
                                        'data-test-id': h.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                    }),
                                (0, c.jsxs)('div', {
                                    className: tb().coverContainer,
                                    'data-test-id': h.e8.player.VIBE_ALBUM_COVER,
                                    children: [Z, m && !r.isPlaying && (0, c.jsx)('div', { className: tb().playButtonContainer, children: q })],
                                }),
                                !r.isGenerativeContext &&
                                    m &&
                                    (0, c.jsx)(A.$, {
                                        className: (0, d.$)(tb().button, tb().button_forward),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !r.canMoveForward,
                                        'aria-hidden': !r.canMoveForward,
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.next-track' }),
                                        icon: (0, c.jsx)(G.I, { variant: 'next', size: 'xs' }),
                                        onClick: V,
                                        'data-test-id': h.Kq.sonata.NEXT_TRACK_BUTTON,
                                    }),
                            ],
                        })
                    );
                });
            var tg = i(19740),
                tA = i(3707),
                tC = i(56117),
                tj = i(46200),
                tk = i(51675),
                tI = i(48027),
                tP = i(89384),
                tN = i(22369);
            let tS = (0, u.PA)((e) => {
                let { className: t, trackId: i, albumId: n } = e,
                    { track: a } = (0, z.g)(),
                    r = (0, x.c)(() => {
                        a.open({ trackId: i, albumId: n });
                    });
                return (0, c.jsx)(tg.Dr, {
                    className: t,
                    onClick: r,
                    icon: (0, c.jsx)(G.I, { variant: 'note', size: 'xxs' }),
                    'data-test-id': h.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_TRACK,
                    children: (0, c.jsx)(p.A, { id: 'interface-actions.navigate-to-track' }),
                });
            });
            var tw = i(4914),
                tE = i(25160),
                tT = i(86103),
                tM = i(39868),
                tO = i.n(tM);
            let tB = (0, u.PA)((e) => {
                var t, i, n;
                let { className: a } = e,
                    r = (0, tt.e)(),
                    { formatMessage: s } = (0, _.A)(),
                    o = null != (t = null == r ? void 0 : r.state.playerState.speed.value) ? t : 1,
                    l = null != (i = tT.f_[o]) ? i : 0,
                    [u, m] = (0, v.useState)(l),
                    b = null != (n = tT.pp[u]) ? n : 1,
                    g = (0, x.c)(() => {
                        var e;
                        let t = (u + 1) % tT.pp.length;
                        m(t), null == r || r.setSpeed(Number(null != (e = tT.pp[t]) ? e : 1));
                    });
                return (
                    (0, v.useEffect)(() => {
                        let e =
                            null == r
                                ? void 0
                                : r.state.playerState.speed.onChange(() => {
                                      var e;
                                      let t = r.state.playerState.speed.value;
                                      m(null != (e = tT.f_[t]) ? e : 0);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [r]),
                    (0, c.jsxs)(tg.Dr, {
                        className: (0, d.$)(tO().root, a),
                        onClick: g,
                        'aria-label': s({ id: 'interface-actions.speed' }, { speed: b }),
                        isSubMenu: !0,
                        'data-test-id': h.S7.CONTEXT_MENU_SPEED_BUTTON,
                        children: [
                            (0, c.jsx)(p.A, { id: 'player-actions.video-speed' }),
                            (0, c.jsx)(G.I, { variant: (0, tT.CU)(b, !1), size: 'l', className: tO().icon }),
                        ],
                    })
                );
            });
            var tR = i(62146),
                tL = i.n(tR);
            let tV = (0, u.PA)((e) => {
                let { onCloseMenu: t } = e,
                    { user: i, experiments: n, sonataState: a, fullscreenPlayer: r } = (0, z.g)(),
                    { formatMessage: s } = (0, _.A)(),
                    o = (0, tl.N)(),
                    l = null !== a.entityMeta,
                    d = !i.isAuthorized && n.checkExperiment(H.z.WebNextVibeQueueButtonLoginPopover, 'on'),
                    u = (0, x.c)(() => {
                        r.showPlayQueue(), o({ to: eJ.QT.PlayerScreen }), t();
                    }),
                    m = (0, v.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e;
                            return (0, c.jsx)(tg.Dr, {
                                'aria-label': s({ id: 'interface-actions.open-play-queue' }),
                                onClick: u,
                                disabled: !l || t,
                                icon: (0, c.jsx)(G.I, { variant: 'playQueue', size: 'xxs' }),
                                'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_PLAY_QUEUE_ITEM,
                                children: (0, c.jsx)(p.A, { id: 'interface-actions.open-play-queue' }),
                            });
                        },
                        [s, l, u],
                    );
                return (0, c.jsx)(tm.Z, { isNested: !0, isEnabled: d, placement: 'right', textVariant: 'openQueue', renderChildren: m });
            });
            var tW = i(90593),
                tD = i.n(tW);
            let tF = (0, u.PA)((e) => {
                var t, i, n, a, r, s, o;
                let { buttonClassName: l } = e,
                    { sonataState: u, advert: m, fullscreenPlayer: v, quality: b, vibe: g, user: f } = (0, z.g)(),
                    { formatMessage: C } = (0, _.A)(),
                    j = (0, ty.e)(),
                    k = (0, tf.A)(),
                    I = (0, eg.A)(g.meta),
                    { state: P, setState: N, toggleFalse: S } = (0, el.e)(!1),
                    w = (0, tl.N)(),
                    E = (0, e7.m)(),
                    T = u.entityMeta,
                    M = (0, x.c)((e) => {
                        N(e);
                    }),
                    O = (0, x.c)(() => {
                        b.modal.open(), S();
                    }),
                    B = (0, x.c)(() => {
                        v.showSyncLyrics(), w({ to: eJ.QT.PlayerScreen }), S();
                    }),
                    R = (0, x.c)(() => {
                        j(u), E({ actionType: eJ.X2.ChangeShuffle });
                    }),
                    L = (0, x.c)(() => {
                        k(u), E({ actionType: eJ.X2.ChangeRepeatSettings });
                    }),
                    V = (0, x.c)(() => {
                        I(), S();
                    }),
                    W = (0, x.c)((e) => {
                        (0, ec.P)(e, tL().ripple), O();
                    }),
                    D = (0, e5.P)(),
                    { shouldShowBuySubscriptionModal: F, showBuySubscriptionModal: H } = (0, tj.q)(),
                    { isPlaying: K, togglePlay: X } = (0, U.B)({
                        seeds: null != (r = null == T ? void 0 : T.seeds) ? r : [],
                        pageIdForFrom: eV._Q.RADIO,
                        blockIdForFrom: ''.concat(eR.U.TRACK, '-').concat(null == T ? void 0 : T.id),
                        parentContextId: (null == T || null == (t = T.mainAlbum) ? void 0 : t.id)
                            ? ''.concat(null == T ? void 0 : T.mainAlbum.id, ':').concat(null == T ? void 0 : T.id)
                            : null == T
                              ? void 0
                              : T.entityId,
                    }),
                    q = (0, x.c)(() => {
                        if (F && f.isAuthorized) return void H();
                        !D() && (K || X());
                    }),
                    Y = u.repeatMode === th.pM.ONE ? 'repeat_one' : 'repeat',
                    $ = u.repeatMode !== th.pM.NONE,
                    Q = u.shuffle,
                    Z = v.isSyncLyricsMode,
                    J = !!(null == (i = g.meta) ? void 0 : i.isPinned),
                    ee = !!(g.isMyVibe || g.isShuffleVibe),
                    et = !!g.meta && u.isVibeContext && !ee,
                    ei = u.canSpeed && ((null == T ? void 0 : T.isNonMusic) || (null == T || null == (n = T.mainAlbum) ? void 0 : n.isNonMusic)),
                    en = (null == T ? void 0 : T.isNonUserGenerated) && !(null == (a = T.mainAlbum) ? void 0 : a.isNonMusic),
                    ea = (null == T ? void 0 : T.albumId) ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                    { shareLink: er, pathname: es } = (0, tP.b)(ea, {
                        params: { albumId: null != (s = null == T ? void 0 : T.albumId) ? s : '', trackId: null != (o = null == T ? void 0 : T.id) ? o : '' },
                    }),
                    eo = (0, y.L)(() => {
                        var e, t;
                        if (T)
                            return {
                                variant: tk.Y.TRACK,
                                id: T.id,
                                title: T.title,
                                path: es,
                                trackArtistName: null == (e = T.mainArtist) ? void 0 : e.name,
                                trackArtistId: null == (t = T.mainArtist) ? void 0 : t.id,
                                trackAlbumId: T.albumId,
                            };
                    }),
                    pulseSyncTrackDownloadName = (0, y.L)(() => {
                        let e = (T?.artists || [])
                            .map((e) => e.name)
                            .filter(Boolean)
                            .join(', ');
                        return [e, T?.title].filter(Boolean).join(' — ');
                    }),
                    pulseSyncDownloadTrackToFile = (0, x.c)(() => {
                        T?.id && window.desktopEvents?.send?.('DOWNLOAD_TRACK', T.id, pulseSyncTrackDownloadName), S();
                    }),
                    ed = ''.concat(C({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(C({ id: 'warning-messages.can-break-accessibility' })),
                    eu = (0, y.L)(() => {
                        let e = [];
                        return ei && e.push((0, c.jsx)(tB, {}, 'speed')), e.length > 0 && e.push((0, c.jsx)('div', { className: tD().divider }, 'speed-divider')), e;
                    }),
                    em = (0, y.L)(() => {
                        let e = [];
                        return (
                            et &&
                                e.push(
                                    (0, c.jsx)(
                                        tg.Dr,
                                        {
                                            onClick: V,
                                            icon: (0, c.jsx)(G.I, { variant: J ? 'pin_filled' : 'pin', size: 'xxs' }),
                                            'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_PIN_ITEM,
                                            children: J
                                                ? (0, c.jsx)(p.A, { id: 'interface-actions.unpin-my-vibe' })
                                                : (0, c.jsx)(p.A, { id: 'interface-actions.pin-my-vibe' }),
                                        },
                                        'pin',
                                    ),
                                ),
                            en && e.push((0, c.jsx)(tE.C, { variant: tI.I.TRACK, onClick: q, disabled: !f.isAuthorized, onOpenMenuChange: M }, 'vibe')),
                            e.length > 0 && e.push((0, c.jsx)('div', { className: tD().divider }, 'top-divider')),
                            e
                        );
                    }),
                    ev = (0, y.L)(() => {
                        let e = [];
                        if (T) {
                            var t, i, n, a, r;
                            e.push(
                                (0, c.jsx)(
                                    tg.Dr,
                                    {
                                        onClick: pulseSyncDownloadTrackToFile,
                                        disabled: !T.id,
                                        icon: (0, c.jsx)(G.I, { variant: 'download', size: 'xxs' }),
                                        children: 'Скачать в файл',
                                    },
                                    'download-to-file',
                                ),
                            ),
                                e.push((0, c.jsx)(tC.$, { track: T }, 'add-to-playlist')),
                                eo && T.isNonUserGenerated && e.push((0, c.jsx)(tw.H, { shareLink: er, entityMeta: eo }, 'share')),
                                T.isNonUserGenerated &&
                                    T.isTrackMusic &&
                                    (null == (t = T.mainAlbum) ? void 0 : t.id) &&
                                    e.push((0, c.jsx)(tS, { trackId: T.id, albumId: T.mainAlbum.id }, 'navigate-to-track')),
                                T.isNonUserGenerated &&
                                    (T.albums.length || T.mainAlbum) &&
                                    (null == (i = T.mainAlbum) ? void 0 : i.url) &&
                                    e.push((0, c.jsx)(tN.f, { albumUrl: T.mainAlbum.url, albumType: T.mainAlbum.type, trackType: T.type }, 'navigate-to-album')),
                                T.isNonUserGenerated &&
                                    (null == (n = T.artists) ? void 0 : n.length) &&
                                    ((null == (a = T.mainAlbum) ? void 0 : a.isAudiobook) ||
                                        (null == (r = T.mainAlbum) ? void 0 : r.isAlbum) ||
                                        T.isTrackAudiobook ||
                                        T.isTrackMusic) &&
                                    e.push((0, c.jsx)(tA.o, { artists: T.artists }, 'navigate-to-artist'));
                        }
                        return e.length > 0 && e.unshift((0, c.jsx)('div', { className: tD().divider }, 'bottom-divider')), e;
                    });
                return u.isGenerativeContext
                    ? (0, c.jsx)(A.$, {
                          className: l,
                          radius: 'round',
                          size: 'xxxs',
                          variant: 'text',
                          withRipple: !1,
                          onClick: W,
                          'aria-label': C({ id: 'player-actions.audio-quality' }),
                          icon: (0, c.jsx)(G.I, { variant: 'settings', size: 'xs' }),
                      })
                    : (0, c.jsxs)(tg.W1, {
                          placement: 'top',
                          offsetOptions: 10,
                          open: P,
                          onOpenChange: M,
                          variant: 'text',
                          icon: (0, c.jsx)(G.I, { variant: 'more', size: 'xs' }),
                          radius: 'xxxl',
                          className: l,
                          ariaLabel: C({ id: 'interface-actions.context-menu' }),
                          containerProps: { 'data-test-id': h.e8.player.VIBE_CONTEXT_MENU },
                          'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_BUTTON,
                          children: [
                              em,
                              eu,
                              u.canShuffle &&
                                  (0, c.jsx)(tg.Dr, {
                                      'aria-label': C({ id: 'player-actions.shuffle' }),
                                      onClick: R,
                                      icon: (0, c.jsx)(G.I, { variant: 'shuffle', size: 'xxs' }),
                                      className: (0, d.$)({ [tD().item_active]: Q }),
                                      isSubMenu: !0,
                                      'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_SHUFFLE_ITEM,
                                      children: (0, c.jsx)(p.A, { id: 'player-actions.mix' }),
                                  }),
                              u.canChangeRepeatMode &&
                                  (0, c.jsx)(tg.Dr, {
                                      'aria-label': (0, tx.z)(u.repeatMode, C),
                                      onClick: L,
                                      icon: (0, c.jsx)(G.I, { variant: Y, size: 'xxs' }),
                                      className: (0, d.$)({ [tD().item_active]: $ }),
                                      isSubMenu: !0,
                                      'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_REPEAT_ITEM,
                                      children: (0, c.jsx)(p.A, { id: 'player-actions.repeat-action' }),
                                  }),
                              !u.isGenerativeContext &&
                                  !m.isAdvertShown &&
                                  ((null == T ? void 0 : T.isSyncLyricsAvailable) ||
                                      (null == T ? void 0 : T.isSyncLyricsAvailableWithOfflineFeature) ||
                                      (null == T ? void 0 : T.hasSyncLyrics) ||
                                      ((null == T ? void 0 : T.id) && v.syncLyrics.hasLyricsForTrack(T.id))) &&
                                  (0, c.jsx)(tg.Dr, {
                                      'aria-label': ed,
                                      onClick: B,
                                      icon: (0, c.jsx)(G.I, { variant: 'syncLyrics', size: 'xxs' }),
                                      className: (0, d.$)({ [tD().item_active]: Z }),
                                      'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_SYNC_LYRICS_ITEM,
                                      children: (0, c.jsx)(p.A, { id: 'interface-actions.open-lyrics' }),
                                  }),
                              !u.isGenerativeContext && !m.isAdvertShown && (0, c.jsx)(tV, { onCloseMenu: S }),
                              (0, c.jsx)(tg.Dr, {
                                  onClick: O,
                                  icon: (0, c.jsx)(G.I, { variant: 'settings', size: 'xxs' }),
                                  'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_AUDIO_QUALITY_ITEM,
                                  children: (0, c.jsx)(p.A, { id: 'player-actions.audio-quality' }),
                              }),
                              ev,
                          ],
                      });
            });
            var tU = i(62060),
                tz = {
                    5881: (e, t, i) => {
                        function n() {
                            for (var e, t, i = 0, n = ''; i < arguments.length; )
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            n,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (n = e(t[i])) && (a && (a += ' '), (a += n));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        i.r(t), i.d(t, { clsx: () => n, default: () => a });
                        let a = n;
                    },
                    1858: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => n });
                        let n = {
                            root: 'MoGQRtOtKDQCJc5HZNLw',
                            marquee: 'eYOrGFuz5P6VSNQ_IgdM',
                            content: 'eY9nVaCYr1nX7vFMBaaD',
                            content_static: 'NuV8xfAyyQwIpvv3W2Gy',
                            measure: 'CapcUKn78Iu2s1O6joam',
                        };
                    },
                    1269: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        var n = i(810),
                            a = (function (e) {
                                return e && 'object' == typeof e && 'default' in e ? e : { default: e };
                            })(n);
                        !(function (e) {
                            if (!e) return;
                            let t = document.createElement('style');
                            t.setAttribute('type', 'text/css'), (t.innerHTML = e), document.head.appendChild(t);
                        })(
                            '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
                        ),
                            (t.default = n.forwardRef(function (e, t) {
                                let {
                                        style: i = {},
                                        className: r = '',
                                        autoFill: s = !1,
                                        play: o = !0,
                                        pauseOnHover: l = !1,
                                        pauseOnClick: c = !1,
                                        direction: d = 'left',
                                        speed: u = 50,
                                        delay: m = 0,
                                        loop: v = 0,
                                        gradient: b = !1,
                                        gradientColor: _ = 'white',
                                        gradientWidth: p = 200,
                                        onFinish: h,
                                        onCycleComplete: g,
                                        onMount: x,
                                        children: f,
                                    } = e,
                                    [y, A] = n.useState(0),
                                    [C, j] = n.useState(0),
                                    [k, I] = n.useState(1),
                                    [P, N] = n.useState(!1),
                                    S = n.useRef(null),
                                    w = t || S,
                                    E = n.useRef(null),
                                    T = n.useCallback(() => {
                                        if (E.current && w.current) {
                                            let e = w.current.getBoundingClientRect(),
                                                t = E.current.getBoundingClientRect(),
                                                i = e.width,
                                                n = t.width;
                                            ('up' === d || 'down' === d) && ((i = e.height), (n = t.height)),
                                                s && i && n ? I(n < i ? Math.ceil(i / n) : 1) : I(1),
                                                A(i),
                                                j(n);
                                        }
                                    }, [s, w, d]);
                                n.useEffect(() => {
                                    if (P && (T(), E.current && w.current)) {
                                        let e = new ResizeObserver(() => T());
                                        return (
                                            e.observe(w.current),
                                            e.observe(E.current),
                                            () => {
                                                e && e.disconnect();
                                            }
                                        );
                                    }
                                }, [T, w, P]),
                                    n.useEffect(() => {
                                        T();
                                    }, [T, f]),
                                    n.useEffect(() => {
                                        N(!0);
                                    }, []),
                                    n.useEffect(() => {
                                        'function' == typeof x && x();
                                    }, []);
                                let M = n.useMemo(() => (s ? (C * k) / u : C < y ? y / u : C / u), [s, y, C, k, u]),
                                    O = n.useMemo(
                                        () =>
                                            Object.assign(Object.assign({}, i), {
                                                '--pause-on-hover': !o || l ? 'paused' : 'running',
                                                '--pause-on-click': !o || (l && !c) || c ? 'paused' : 'running',
                                                '--width': 'up' === d || 'down' === d ? '100vh' : '100%',
                                                '--transform': 'up' === d ? 'rotate(-90deg)' : 'down' === d ? 'rotate(90deg)' : 'none',
                                            }),
                                        [i, o, l, c, d],
                                    ),
                                    B = n.useMemo(() => ({ '--gradient-color': _, '--gradient-width': 'number' == typeof p ? ''.concat(p, 'px') : p }), [_, p]),
                                    R = n.useMemo(
                                        () => ({
                                            '--play': o ? 'running' : 'paused',
                                            '--direction': 'left' === d ? 'normal' : 'reverse',
                                            '--duration': ''.concat(M, 's'),
                                            '--delay': ''.concat(m, 's'),
                                            '--iteration-count': v ? ''.concat(v) : 'infinite',
                                            '--min-width': s ? 'auto' : '100%',
                                        }),
                                        [o, d, M, m, v, s],
                                    ),
                                    L = n.useMemo(() => ({ '--transform': 'up' === d ? 'rotate(90deg)' : 'down' === d ? 'rotate(-90deg)' : 'none' }), [d]),
                                    V = n.useCallback(
                                        (e) =>
                                            [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                                                a.default.createElement(
                                                    n.Fragment,
                                                    { key: t },
                                                    n.Children.map(f, (e) => a.default.createElement('div', { style: L, className: 'rfm-child' }, e)),
                                                ),
                                            ),
                                        [L, f],
                                    );
                                return P
                                    ? a.default.createElement(
                                          'div',
                                          { ref: w, style: O, className: 'rfm-marquee-container ' + r },
                                          b && a.default.createElement('div', { style: B, className: 'rfm-overlay' }),
                                          a.default.createElement(
                                              'div',
                                              { className: 'rfm-marquee', style: R, onAnimationIteration: g, onAnimationEnd: h },
                                              a.default.createElement(
                                                  'div',
                                                  { className: 'rfm-initial-child-container', ref: E },
                                                  n.Children.map(f, (e) => a.default.createElement('div', { style: L, className: 'rfm-child' }, e)),
                                              ),
                                              V(k - 1),
                                          ),
                                          a.default.createElement('div', { className: 'rfm-marquee', style: R }, V(k)),
                                      )
                                    : null;
                            }));
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var a = null;
                            if ((void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var r in ((n = {}), t)) 'key' !== r && (n[r] = t[r]);
                            else n = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    998: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e());
                    },
                    9598: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.OverflowMarquee = void 0);
                        let a = i(4377),
                            r = i(5881),
                            s = i(810),
                            o = n(i(1269)),
                            l = i(998),
                            c = n(i(1858));
                        t.OverflowMarquee = (e) => {
                            let {
                                    children: t,
                                    className: i,
                                    contentClassName: n,
                                    scrollingClassName: d,
                                    speed: u = 50,
                                    delay: m = 0,
                                    pauseOnHover: v = !0,
                                    pauseOnClick: b = !1,
                                    loop: _ = 0,
                                    direction: p = 'left',
                                    autoFill: h = !1,
                                    gradient: g = !1,
                                    gradientColor: x,
                                    gradientWidth: f,
                                    gap: y = 12,
                                    ...A
                                } = e,
                                C = (0, s.useRef)(null),
                                j = (0, s.useRef)(null),
                                [k, I] = (0, s.useState)(!1),
                                [P, N] = (0, s.useState)(!1);
                            (0, s.useEffect)(() => {
                                let e = window.matchMedia('(prefers-reduced-motion: reduce)'),
                                    t = () => {
                                        N(e.matches);
                                    };
                                return (
                                    t(),
                                    e.addEventListener('change', t),
                                    () => {
                                        e.removeEventListener('change', t);
                                    }
                                );
                            }, []),
                                (0, s.useEffect)(() => {
                                    let e = C.current,
                                        t = j.current;
                                    if (null === e || null === t) return;
                                    let i = () => {
                                        let i = e.clientWidth,
                                            n = t.scrollWidth;
                                        if (0 === i || 0 === n) return void I(!1);
                                        I(n > i);
                                    };
                                    if ((i(), 'undefined' == typeof ResizeObserver)) return;
                                    let n = new ResizeObserver(i);
                                    return (
                                        n.observe(e),
                                        n.observe(t),
                                        () => {
                                            n.disconnect();
                                        }
                                    );
                                }, []);
                            let S = k && !P,
                                w = S && void 0 !== y ? { marginInlineEnd: ''.concat(y, 'px') } : void 0,
                                E = (0, l.useReturnValue)(() =>
                                    S
                                        ? (0, a.jsx)(o.default, {
                                              className: c.default.marquee,
                                              play: S,
                                              speed: u,
                                              delay: m / 1e3,
                                              loop: _,
                                              direction: p,
                                              autoFill: h,
                                              pauseOnHover: v,
                                              pauseOnClick: b,
                                              gradient: g,
                                              gradientColor: x,
                                              gradientWidth: f,
                                              children: (0, a.jsx)('div', { className: (0, r.clsx)(c.default.content, n), style: w, children: t }),
                                          })
                                        : (0, a.jsx)('div', { className: (0, r.clsx)(c.default.content, c.default.content_static, n), style: w, children: t }),
                                );
                            return (0, a.jsxs)('div', {
                                ref: C,
                                className: (0, r.clsx)(c.default.root, i, S && d),
                                ...A,
                                children: [
                                    (0, a.jsx)('div', { ref: j, className: (0, r.clsx)(c.default.measure, c.default.content, n), 'aria-hidden': !0, children: t }),
                                    E,
                                ],
                            });
                        };
                    },
                    810: (e) => {
                        e.exports = b;
                    },
                },
                tH = {};
            function tK(e) {
                var t = tH[e];
                if (void 0 !== t) return t.exports;
                var i = (tH[e] = { exports: {} });
                return tz[e].call(i.exports, i, i.exports, tK), i.exports;
            }
            (tK.d = (e, t) => {
                for (var i in t) tK.o(t, i) && !tK.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (tK.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (tK.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var tX = {};
            (() => {
                Object.defineProperty(tX, 'X', { value: !0 }), (tX.W = void 0);
                var e = tK(9598);
                Object.defineProperty(tX, 'W', {
                    enumerable: !0,
                    get: function () {
                        return e.OverflowMarquee;
                    },
                });
            })();
            var tq = tX.W;
            tX.X;
            var tG = i(378),
                tY = i(8958),
                t$ = i(52843),
                tQ = i(22191),
                tZ = i(13798),
                tJ = i(19953),
                t0 = i.n(tJ);
            let t1 = (0, u.PA)(() => {
                var e, t, i, n;
                let {
                        sonataState: a,
                        advert: r,
                        settings: { isMobile: s },
                    } = (0, z.g)(),
                    { formatMessage: o } = (0, _.A)(),
                    l = (0, tt.e)(),
                    u = a.entityMeta,
                    m = !a.isPlaying && a.isVibeContext,
                    b = null != (t = a.position) ? t : 0,
                    p = null != (i = a.duration) ? i : 0,
                    [g, f] = (0, v.useState)(null),
                    A = (0, v.useRef)(!1),
                    { state: C, toggleTrue: j, toggleFalse: k } = (0, el.e)(!1),
                    I = !!p && !a.isGenerativeContext && C,
                    P = A.current && null != g ? g : b,
                    N = p > 0 ? (Math.min(P, p) / p) * 100 : 0,
                    S = (0, t$.E)(Math.round(P), Math.round(p)),
                    w = (0, t$.E)(Math.round(p), Math.round(p)),
                    E = (0, tQ.P)(P),
                    T = (0, tQ.P)(p),
                    M = { '--track-progress': ''.concat(N, '%'), '--progress-transition': A.current ? 'none' : void 0 },
                    O = (0, v.useMemo)(
                        () =>
                            (0, tU.A)(() => {
                                k();
                            }, 1e3),
                        [k],
                    ),
                    B = (0, x.c)((e, t) => {
                        r.isAdvertShown || ((A.current = !t), s && (j(), O.cancel(), O()), t ? null == l || l.setProgress(e) : f(e));
                    }),
                    R = (0, y.L)(() => {
                        if (a.isGenerativeContext)
                            return (null == u ? void 0 : u.title)
                                ? (0, c.jsxs)(c.Fragment, {
                                      children: [
                                          (0, c.jsx)('span', {
                                              className: t0().generativeIcon,
                                              children: (0, c.jsx)(G.I, { size: 'xs', variant: 'infinity', 'data-test-id': h.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON }),
                                          }),
                                          (0, c.jsx)('span', { className: t0().generativeTitle, children: u.title }),
                                      ],
                                  })
                                : (0, c.jsx)(G.I, { size: 'xs', variant: 'infinity', 'data-test-id': h.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON });
                        let e = [],
                            t = [];
                        return (
                            u && (e.push((0, tY.X)(u.artists)), e.push('—')),
                            (null == u ? void 0 : u.title) && t.push(u.title),
                            !(null == u ? void 0 : u.isRemoved) && (null == u ? void 0 : u.version) && t.push('('.concat(u.version, ')')),
                            (0, c.jsxs)(c.Fragment, {
                                children: [e.length > 0 && m && (0, c.jsx)('span', { className: t0().artists, children: e.join(' ') }), t.join(' ')],
                            })
                        );
                    });
                return (0, c.jsx)('div', {
                    className: t0().root,
                    style: M,
                    children: (0, c.jsxs)('div', {
                        className: (0, d.$)(t0().center, {
                            [t0().center_withExplicitMark]: null == u ? void 0 : u.explicitDisclaimer,
                            [t0().center_withExplicitMark_playing]: a.isPlaying,
                            [t0().center_withoutExplicitMark]: !(null == u ? void 0 : u.explicitDisclaimer),
                            [t0().center_withoutExplicitMark_playing]: a.isPlaying,
                            [t0().center_withTimecode]: I,
                            [t0().center_active]: !a.isGenerativeContext,
                        }),
                        onMouseEnter: j,
                        onMouseLeave: k,
                        'data-test-id': h.e8.player.VIBE_PLAYERBAR_TIMECODE_SLIDER,
                        children: [
                            (0, c.jsx)(
                                tq,
                                {
                                    className: t0().trackName,
                                    scrollingClassName: t0().scrollingTrackName,
                                    contentClassName: t0().trackNameText,
                                    pauseOnHover: !1,
                                    speed: 35,
                                    gap: 32,
                                    'data-test-id': h.e8.player.VIBE_PLAYERBAR_TRACK_NAME,
                                    children: R,
                                },
                                ''.concat(null != (n = null == (e = a.entityMeta) ? void 0 : e.idWithContext) ? n : 'default', '-').concat(m),
                            ),
                            (null == u ? void 0 : u.explicitDisclaimer) &&
                                (0, c.jsx)(tZ.N, {
                                    containerClassName: t0().explicitMarkContainer,
                                    getDescriptionTexts: u.getDescriptionTexts,
                                    size: 'xxxs',
                                    variant: u.explicitDisclaimer,
                                    className: t0().explicitMark,
                                    trackId: u.id,
                                }),
                            !a.isGenerativeContext &&
                                (0, c.jsx)('span', {
                                    className: t0().timecodeOverlay,
                                    'aria-hidden': !0,
                                    'data-test-id': h.e8.player.VIBE_PLAYERBAR_TIMECODE,
                                    children: ''.concat(S, ' / ').concat(w),
                                }),
                            !a.isGenerativeContext &&
                                (0, c.jsx)(tG.A, {
                                    className: (0, d.$)(t0().slider, { [t0().slider_active]: !a.isGenerativeContext }),
                                    'aria-label': o({ id: 'player-actions.timecode-control' }),
                                    'aria-valuetext': ''.concat(E, ' / ').concat(T),
                                    disabled: !u || r.isAdvertShown,
                                    onChange: B,
                                    onFocus: j,
                                    onBlur: k,
                                    maxValue: Math.round(p),
                                    mode: 'deferred',
                                    value: Math.round(P),
                                    showThumbVariant: 'never',
                                    trackSize: 's',
                                    thumbSize: 's',
                                }),
                        ],
                    }),
                });
            });
            var t2 = i(35280),
                t8 = i(19025),
                t5 = i.n(t8);
            let t9 = (0, u.PA)(() => {
                    var e, t;
                    let {
                            vibe: i,
                            sonataState: n,
                            advert: a,
                            modals: { popoverOverPlayer: r },
                            user: s,
                            experiments: o,
                        } = (0, z.g)(),
                        { openIntroModalFromPlay: l } = (0, tc.e)(),
                        { withPlusPopoverWeb: u } = (0, F.X)(),
                        { formatMessage: m } = (0, _.A)(),
                        b = (0, tt.e)(),
                        p = (0, e5.P)(),
                        g = (0, e6.b)(),
                        f = (0, e9.r)(),
                        C = (0, e7.m)(),
                        shuffleSetter = (0, ty.e)(),
                        repeatSetter = (0, tf.A)(),
                        [pulseSyncImprovedWaveLayoutEnabled, setPulseSyncImprovedWaveLayoutEnabled] = (0, v.useState)(pulseSyncIsImprovedWaveLayoutEnabled),
                        { pageId: j } = (0, L.$)();
                    (0, t2.S)();
                    let { togglePlay: k } = (0, U.B)({
                            seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                            pageIdForFrom: j,
                            blockIdForFrom: ''.concat(eJ.LA.MyWave, '-').concat(eR.U.RADIO),
                            onPlayInterrupted: r.open,
                        }),
                        I = n.entityMeta,
                        repeatIconVariant = n.repeatMode === th.pM.ONE ? 'repeat_one' : 'repeat',
                        P = (0, x.c)((e) => {
                            e.stopPropagation(), null == b || b.moveForward(), C({ actionType: eJ.X2.Skip });
                        }),
                        N = (0, x.c)((e) => {
                            e.stopPropagation(), null == b || b.moveBackward(), C({ actionType: eJ.X2.Backskip });
                        }),
                        pulseSyncShuffleClick = (0, x.c)((e) => {
                            e.stopPropagation(), shuffleSetter(n), C({ actionType: eJ.X2.ChangeShuffle });
                        }),
                        pulseSyncRepeatClick = (0, x.c)((e) => {
                            e.stopPropagation(), repeatSetter(n), C({ actionType: eJ.X2.ChangeRepeatSettings });
                        }),
                        S = (0, x.c)(() => {
                            if (a.isAdvertShown) {
                                var e;
                                null == f || null == (e = f.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!l())
                                if (I) null == b || b.togglePause(), C({ actionType: n.isPlaying ? eJ.X2.Pause : eJ.X2.Play });
                                else {
                                    if (u) return;
                                    k(), g(!n.isPlaying);
                                }
                        }),
                        w = (0, x.c)(() => {
                            p() || S();
                        }),
                        E = (0, x.c)((e) => {
                            e || r.close();
                        }),
                        PlayerYellowButton = o.checkExperiment(H.z.WebNextPlayerBarYellowButton, 'on'),
                        T = (0, v.useCallback)(
                            () =>
                                (0, c.jsx)(ta.D, {
                                    className: (0, d.$)(t5().playButton, {
                                        [t5().playButton_playing]: n.isPlaying,
                                        [t5().playButton_withYellowPlayButton]: PlayerYellowButton,
                                    }),
                                    isPlaying: n.isPlaying,
                                    iconClassName: t5().playButtonIcon,
                                    color: 'secondary',
                                    onClick: w,
                                }),
                            [w, n.isPlaying],
                        ),
                        M = (0, y.L)(() =>
                            s.isAuthorized
                                ? !s.hasPlus && I
                                    ? (0, c.jsx)(td.S, {
                                          isOpened: r.isOpened,
                                          placement: 'top',
                                          textVariant: 'fullTracks',
                                          transform: !1,
                                          onOpenChange: E,
                                          renderChildren: T,
                                      })
                                    : T()
                                : I
                                  ? (0, c.jsx)(tm.Z, {
                                        isOpened: r.isOpened,
                                        placement: 'top',
                                        textVariant: 'fullTracks',
                                        transform: !1,
                                        onOpenChange: E,
                                        renderChildren: T,
                                    })
                                  : (0, c.jsx)(tm.Z, { placement: 'top', textVariant: 'vibe', transform: !1, renderChildren: T }),
                        );
                    (0, v.useEffect)(() => {
                        let e = (e, t, i) => {
                                t === pulseSyncImprovedWaveLayoutSettingKey && setPulseSyncImprovedWaveLayoutEnabled(i !== !1);
                            },
                            t = window.desktopEvents?.on?.('NATIVE_STORE_UPDATE', e);
                        return () => {
                            'function' == typeof t && t();
                        };
                    }, []);
                    return (0, c.jsxs)('div', {
                        className: t5().root,
                        children: [
                            pulseSyncImprovedWaveLayoutEnabled &&
                                !n.isGenerativeContext &&
                                (n.canShuffle || n.canChangeRepeatMode) &&
                                (0, c.jsx)(A.$, {
                                    className: t5().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canShuffle,
                                    'aria-hidden': !n.canShuffle,
                                    withRipple: !1,
                                    'aria-label': m({ id: 'player-actions.shuffle' }),
                                    icon: (0, c.jsx)(G.I, { variant: 'shuffle', size: 'xs' }),
                                    onClick: pulseSyncShuffleClick,
                                    style: n.shuffle ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : void 0,
                                }),
                            !n.isGenerativeContext &&
                                (0, c.jsx)(A.$, {
                                    className: t5().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canMoveBackward,
                                    'aria-hidden': !n.canMoveBackward,
                                    withRipple: !1,
                                    'aria-label': m({ id: 'player-actions.previous-track' }),
                                    icon: (0, c.jsx)(G.I, { variant: 'previous', size: 'xs' }),
                                    onClick: N,
                                    'data-test-id': h.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                            M,
                            !n.isGenerativeContext &&
                                (0, c.jsx)(A.$, {
                                    className: t5().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canMoveForward,
                                    'aria-hidden': !n.canMoveForward,
                                    withRipple: !1,
                                    'aria-label': m({ id: 'player-actions.next-track' }),
                                    icon: (0, c.jsx)(G.I, { variant: 'next', size: 'xs' }),
                                    onClick: P,
                                    'data-test-id': h.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                            pulseSyncImprovedWaveLayoutEnabled &&
                                !n.isGenerativeContext &&
                                (n.canShuffle || n.canChangeRepeatMode) &&
                                (0, c.jsx)(A.$, {
                                    className: t5().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canChangeRepeatMode,
                                    'aria-hidden': !n.canChangeRepeatMode,
                                    withRipple: !1,
                                    'aria-label': (0, tx.z)(n.repeatMode, m),
                                    icon: (0, c.jsx)(G.I, { variant: repeatIconVariant, size: 'xs' }),
                                    onClick: pulseSyncRepeatClick,
                                    style: n.repeatMode !== th.pM.NONE ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : void 0,
                                }),
                        ],
                    });
                }),
                t7 = (0, u.PA)(() => {
                    var e, t;
                    let {
                            vibe: i,
                            sonataState: n,
                            advert: a,
                            fullscreenPlayer: r,
                            settings: { isMobile: s },
                            modals: { popoverOverPlayer: o },
                        } = (0, z.g)(),
                        { formatMessage: l } = (0, _.A)(),
                        u = (0, te.z)(),
                        m = (0, e8.d)(),
                        { isLiked: b, handleLike: p, isDisliked: g, handleDislike: f } = (0, tr.f)(),
                        sonataPlayer = (0, tt.e)(),
                        C = (0, e5.P)(),
                        j = (0, e6.b)(),
                        k = (0, e9.r)(),
                        I = (0, e7.m)(),
                        screenNavigation = (0, tl.N)(),
                        [pulseSyncImprovedWaveLayoutEnabled, setPulseSyncImprovedWaveLayoutEnabled] = (0, v.useState)(pulseSyncIsImprovedWaveLayoutEnabled),
                        { pageId: P } = (0, L.$)(),
                        { togglePlay: N } = (0, U.B)({
                            seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                            pageIdForFrom: P,
                            blockIdForFrom: ''.concat(eJ.LA.MyWave, '-').concat(eR.U.RADIO),
                            onPlayInterrupted: o.open,
                        }),
                        S = n.entityMeta,
                        w = null == S ? void 0 : S.mainAlbum,
                        E = !n.isPlaying && !S,
                        T = (0, x.c)(() => {
                            if (n.entityMeta) {
                                if (r.modal.isOpened) return void r.modal.close();
                                r.modal.open();
                            }
                        }),
                        pulseSyncWaveSyncLyricsAvailable =
                            !!(null == S ? void 0 : S.isSyncLyricsAvailable) ||
                            !!(null == S ? void 0 : S.isSyncLyricsAvailableWithOfflineFeature) ||
                            !!(null == S ? void 0 : S.hasSyncLyrics) ||
                            (!!(null == S ? void 0 : S.id) &&
                                'function' == typeof (null == r.syncLyrics ? void 0 : r.syncLyrics.hasLyricsForTrack) &&
                                r.syncLyrics.hasLyricsForTrack(S.id)),
                        pulseSyncOpenWaveSyncLyrics = (0, x.c)(() => {
                            r.showSyncLyrics(), screenNavigation({ to: eJ.QT.PlayerScreen });
                        }),
                        pulseSyncWaveSyncLyricsLabel = ''
                            .concat(l({ id: 'interface-actions.open-sync-lyrics' }), ' ')
                            .concat(l({ id: 'warning-messages.can-break-accessibility' }));
                    (0, v.useEffect)(() => {
                        if (!n.isGenerativeContext)
                            return (
                                null == u || u.addShortcutsListener(e3.M.MAIN, e4.l.TOGGLE_FULLSCREEN_PLAYER, T),
                                null == u || u.addShortcutsListener(e3.M.MAIN, e4.l.LIKE, p),
                                null == u || u.addShortcutsListener(e3.M.MAIN, e4.l.DISLIKE, f),
                                () => {
                                    null == u || u.removeShortcutsListener(e3.M.MAIN, e4.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == u || u.removeShortcutsListener(e3.M.MAIN, e4.l.LIKE),
                                        null == u || u.removeShortcutsListener(e3.M.MAIN, e4.l.DISLIKE);
                                }
                            );
                    }, [f, p, u, n.isGenerativeContext, n.entityMeta, T]);
                    (0, v.useEffect)(() => {
                        let e = (e, t, i) => {
                                t === pulseSyncImprovedWaveLayoutSettingKey && setPulseSyncImprovedWaveLayoutEnabled(i !== !1);
                            },
                            t = window.desktopEvents?.on?.('NATIVE_STORE_UPDATE', e);
                        return () => {
                            'function' == typeof t && t();
                        };
                    }, []);
                    (0, v.useEffect)(() => {
                        const trackId = null == S ? void 0 : S.id;
                        const nativeAvailable =
                            (null == S ? void 0 : S.isSyncLyricsAvailable) ||
                            (null == S ? void 0 : S.isSyncLyricsAvailableWithOfflineFeature) ||
                            (null == S ? void 0 : S.hasSyncLyrics);
                        let lrclibEnabled = !0;
                        try {
                            lrclibEnabled = window.nativeSettings?.get('modSettings.lrclib.useText') !== !1;
                        } catch (_error) {}
                        if (
                            trackId &&
                            !(null == S ? void 0 : S.isNonMusic) &&
                            r.syncLyrics.currentTrackId !== trackId &&
                            (nativeAvailable || lrclibEnabled || S.trackSource === 'UGC')
                        ) {
                            r.syncLyrics.getData(trackId);
                        }
                        r.syncLyrics.prefetchNextTrack(sonataPlayer);
                    }, [
                        null == S ? void 0 : S.id,
                        null == S ? void 0 : S.isSyncLyricsAvailable,
                        null == S ? void 0 : S.isSyncLyricsAvailableWithOfflineFeature,
                        null == S ? void 0 : S.hasSyncLyrics,
                        null == S ? void 0 : S.isNonMusic,
                        null == S ? void 0 : S.trackSource,
                        r.syncLyrics.currentTrackId,
                        r.syncLyrics,
                        sonataPlayer,
                    ]);
                    (0, v.useEffect)(() => {
                        const trackId = null == S ? void 0 : S.id;
                        if (!trackId || String(r.syncLyrics.currentTrackId) !== String(trackId) || r.syncLyrics.isLoadingForTrack(trackId)) return;
                        if (r.syncLyrics.isRejected || r.syncLyrics.hasInvalidLyrics) {
                            r.autoHideSyncLyrics(trackId);
                            return;
                        }
                        if (trackId && r.syncLyrics.hasLyricsForTrack(trackId)) r.restoreSyncLyricsForTrack(trackId);
                    }, [
                        null == S ? void 0 : S.id,
                        r.syncLyrics.currentTrackId,
                        r.syncLyrics.lines,
                        r.syncLyrics.isLoading,
                        r.syncLyrics.isRejected,
                        r.syncLyrics.hasInvalidLyrics,
                        r.syncLyrics.isResolved,
                        r.syncLyrics,
                        r.autoHideSyncLyrics,
                        r.restoreSyncLyricsForTrack,
                    ]);
                    let M = (0, x.c)(async (e, t) => {
                            t && (0, ec.P)(t, tL().ripple), await m(n, e);
                        }),
                        O = (0, x.c)((e) => {
                            (0, ec.P)(e, tL().ripple), f();
                        }),
                        B = (0, x.c)((e) => {
                            e && !s && (0, ec.P)(e, tL().ripple), p();
                        }),
                        R = (0, x.c)(() => {
                            if (a.isAdvertShown) {
                                var e;
                                null == k || null == (e = k.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            S ? (null == sonataPlayer || sonataPlayer.togglePause(), I({ actionType: n.isPlaying ? eJ.X2.Pause : eJ.X2.Play })) : (N(), j(!n.isPlaying));
                        }),
                        V = (0, x.c)((e) => {
                            (0, ec.P)(e, tL().ripple), C() || R();
                        }),
                        W = (0, y.L)(() =>
                            s
                                ? null
                                : (0, c.jsx)(e2.r, {
                                      className: tL().changeVolume,
                                      buttonClassName: tL().button,
                                      verticalSliderClassName: tL().verticalSlider,
                                      variant: e1.q.VERTICAL,
                                      sonataVolume: n.volume,
                                      onVolumeClick: M,
                                  }),
                        ),
                        D = (0, y.L)(() =>
                            s && n.isPlaying
                                ? (0, c.jsx)(ta.D, { className: tL().button, isPlaying: n.isPlaying, color: 'secondary', onClick: V })
                                : s && !n.isPlaying
                                  ? null
                                  : (0, c.jsx)(ti._, { className: tL().button, disabled: !S || a.isAdvertShown, isDisliked: g, onClick: O, iconSize: 'xs' }),
                        );
                    return (0, c.jsxs)('section', {
                        role: 'region',
                        'aria-label': l({ id: 'a11y-regions.player' }),
                        className: tL().root,
                        'data-test-id': h.e8.player.VIBE_PLAYERBAR,
                        children: [
                            (0, c.jsx)(tp, { album: w }),
                            (0, c.jsxs)('div', {
                                className: (0, d.$)(tL().progress, { [tL().progress_visible]: !E }),
                                children: [
                                    pulseSyncImprovedWaveLayoutEnabled &&
                                        (0, c.jsx)(A.$, {
                                            className: tL().button,
                                            radius: 'round',
                                            size: 'xxxs',
                                            variant: 'text',
                                            disabled: !S || n.isGenerativeContext || a.isAdvertShown,
                                            withRipple: !1,
                                            'aria-label': l({ id: 'player-actions.fullscreen-button' }),
                                            icon: (0, c.jsx)(G.I, { variant: 'fullscreen', size: 'xs' }),
                                            onClick: T,
                                        }),
                                    W,
                                    D,
                                    (0, c.jsx)(t1, {}),
                                    (0, c.jsx)(tn.c, {
                                        className: (0, d.$)(tL().button, { [tL().likeButton_mobilePaused]: s && !n.isPlaying }),
                                        disabled: !S || a.isAdvertShown,
                                        isLiked: b,
                                        onClick: B,
                                        iconSize: 'xs',
                                    }),
                                    (0, c.jsx)(pulseSyncWaveCastControl, { buttonClassName: tL().button, disabled: a.isAdvertShown }),
                                    pulseSyncImprovedWaveLayoutEnabled &&
                                        !pulseSyncIsYandexStationCastEnabled() &&
                                        !(null == S ? void 0 : S.isNonMusic) &&
                                        !a.isAdvertShown &&
                                        (0, c.jsx)(A.$, {
                                            className: tL().button,
                                            radius: 'round',
                                            size: 'xxxs',
                                            variant: 'text',
                                            disabled: !pulseSyncWaveSyncLyricsAvailable || n.isGenerativeContext,
                                            'aria-hidden': !pulseSyncWaveSyncLyricsAvailable,
                                            withRipple: !1,
                                            'aria-label': pulseSyncWaveSyncLyricsLabel,
                                            icon: (0, c.jsx)(G.I, { variant: 'syncLyrics', size: 'xs' }),
                                            onClick: pulseSyncOpenWaveSyncLyrics,
                                        }),
                                    !s &&
                                        (0, c.jsx)(tF, { buttonClassName: (0, d.$)(tL().button, tL().important), 'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_BUTTON }),
                                    (0, c.jsx)(ts.e, {}),
                                ],
                            }),
                            !s && (0, c.jsx)(t9, {}),
                        ],
                    });
                }),
                t6 = { minFontSize: 24, maxFontSize: 64, maxLines: 2, lineHeight: 0.9 },
                t4 = { minFontSize: 48, maxFontSize: 104, maxLines: 4, lineHeight: 0.9 },
                t3 = { minFontSize: 48, maxFontSize: 104, maxLines: void 0, lineHeight: 1.1 },
                ie = { maxFontSize: 24, minFontSize: 14, lineHeight: 1 };
            var it = i(43315),
                ii = i.n(it);
            let ia = (0, u.PA)((e) => {
                var t;
                let { artist: i, withLink: n, onClick: a } = e,
                    { formatMessage: r } = (0, _.A)(),
                    s = (0, tl.N)(),
                    o = null == (t = i.cutoutCover) ? void 0 : t.uri,
                    l = r({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                    d = (0, x.c)(() => {
                        s({ to: eJ.QT.ArtistScreen });
                    }),
                    u = (0, c.jsx)(C._V, {
                        className: ii().cover,
                        fit: 'contain',
                        src: o,
                        size: 'orig',
                        withAvatarReplace: !0,
                        alt: l,
                        'aria-hidden': !0,
                        withLoadingIndicator: !1,
                    });
                return n
                    ? (0, c.jsx)(tu.N, { className: ii().root, href: i.url, onClick: d, 'aria-hidden': !0, 'data-test-id': h.e8.vibe.VIBE_ARTIST_COVER, children: u })
                    : (0, c.jsx)('div', { className: ii().root, onClick: a, 'aria-hidden': !0, 'data-test-id': h.e8.vibe.VIBE_ARTIST_COVER, children: u });
            });
            var ir = {
                    5969: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0);
                        let n = i(810),
                            a = (e) => {
                                (e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && a(e);
                                    });
                            };
                        (t.findOptimalFontSize = (e) => {
                            let { container: t, containerWidth: i, containerHeight: n, minFontSize: r, maxFontSize: s, lineHeight: o, maxLines: l } = e,
                                c = ((e, t, i) => {
                                    let n = e.cloneNode(!0);
                                    return (
                                        (n.style.cssText =
                                            '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                t,
                                                'px !important;\n    ',
                                            )),
                                        a(n),
                                        n.style.setProperty('--dynamic-line-height', String(i)),
                                        document.body.appendChild(n),
                                        n
                                    );
                                })(t, i, o);
                            try {
                                let e = r,
                                    t = s,
                                    a = r;
                                for (; e <= t; ) {
                                    let r = Math.floor((e + t) / 2);
                                    c.style.setProperty('--dynamic-font-size', ''.concat(r, 'px'));
                                    let s = 'number' == typeof l ? c.scrollHeight <= Math.min(l * r * o, n) : c.scrollHeight <= n,
                                        d = c.scrollWidth <= i + 1;
                                    s && d ? ((a = r), (e = r + 1)) : (t = r - 1);
                                }
                                return a - 1;
                            } finally {
                                c.remove();
                            }
                        }),
                            (t.useDynamicText = (e, i, a) => {
                                let { minFontSize: r, maxFontSize: s, lineHeight: o, maxLines: l, fallbackMaxLines: c } = i;
                                (0, n.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(o));
                                    let i = () => {
                                            let { width: i, height: n } = e.getBoundingClientRect(),
                                                d = e.childNodes.length > 0;
                                            if (0 === i || 0 === n || !d) return;
                                            let { maxLines: u, fontSize: m } = ((e) => {
                                                let { fallbackMaxLines: i, maxLines: n, minFontSize: a } = e,
                                                    r = (0, t.findOptimalFontSize)({ ...e, maxLines: n });
                                                return void 0 === i || r >= a
                                                    ? { maxLines: n, fontSize: r }
                                                    : { maxLines: i, fontSize: (0, t.findOptimalFontSize)({ ...e, maxLines: i }) };
                                            })({
                                                container: e,
                                                containerWidth: i,
                                                containerHeight: n,
                                                minFontSize: r,
                                                maxFontSize: s,
                                                lineHeight: o,
                                                maxLines: l,
                                                fallbackMaxLines: c,
                                            });
                                            null == a || a(u), e.style.setProperty('--dynamic-font-size', ''.concat(m, 'px'));
                                        },
                                        n = new ResizeObserver(i),
                                        d = new MutationObserver(i);
                                    return (
                                        n.observe(e),
                                        d.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(i),
                                        i(),
                                        () => {
                                            n.disconnect(), d.disconnect();
                                        }
                                    );
                                }, [e, a, c, o, s, l, r]);
                            });
                    },
                    810: (e) => {
                        e.exports = b;
                    },
                },
                is = {},
                io = (function e(t) {
                    var i = is[t];
                    if (void 0 !== i) return i.exports;
                    var n = (is[t] = { exports: {} });
                    return ir[t](n, n.exports, e), n.exports;
                })(5969);
            io.__esModule, io.findOptimalFontSize;
            var il = io.useDynamicText;
            let ic = (e) => {
                var t;
                return null != (t = e.fallbackMaxLines) ? t : e.maxLines;
            };
            var id = i(53255),
                iu = i.n(id);
            let im = (e) => {
                    let { textOptions: t, children: i } = e,
                        { setContainerRef: n, lineClamp: a } = ((e) => {
                            let [t, i] = (0, f.d)(),
                                [n, a] = (0, v.useState)(() => ic(e));
                            return (
                                (0, v.useEffect)(() => {
                                    a(ic(e));
                                }, [e.fallbackMaxLines, e.maxLines]),
                                il(t, e, a),
                                { setContainerRef: i, lineClamp: n }
                            );
                        })(t);
                    return (0, c.jsx)('div', {
                        ref: n,
                        className: iu().root,
                        'data-test-id': h.e8.vibe.VIBE_DYNAMIC_ARTISTS,
                        children: (0, v.cloneElement)(i, { lineClamp: a }),
                    });
                },
                iv = {
                    src: '/_next/static/media/q2v-glow-w120.1677f964.png',
                    height: 256,
                    width: 400,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEX/e//qkv/7XPX4vv/0UO/nYPj6UO7sP+beSvr6Ren/VvL8k/nrff8yHG/VAAAADHRSTlMBZCkReHVo/v3OUx1DIc6HAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nGNggANmRlYWNiYGBgZGHg52Ti5kESgAAAflAFodTC0aAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 5,
                },
                ib = {
                    src: '/_next/static/media/q2v-glow-w160.81b6098e.png',
                    height: 256,
                    width: 480,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEVMaXH/cf30Quf+Tu7ZTvDNZPvhlP/vdPdHyLt4AAAACHRSTlMADLtextdqZIlEHsoAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BgYGBgZGRkYGBgY2VhYmJmRGJApQAD1gA1KQvxbwAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                i_ = {
                    src: '/_next/static/media/q2v-glow-w200.3dd3deeb.png',
                    height: 256,
                    width: 560,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX/eftMaXH4P+X/T+3UUvTHZ/vflP/lS+7LLK/gAAAACHRSTlMIALNXwM9gvU78oPkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkZGRkYGBgZGBjZWFnYmJmQDBgUgAFNABFuS+NPAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                ip = {
                    src: '/_next/static/media/q2v-glow-w240.520a1100.png',
                    height: 256,
                    width: 640,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX6UfH/Vf/haPn0P+bZjf/6RefTVPX///7NfP79Qub/X/R17Zh8AAAAC3RSTlMtAyrZGzfsB8+eGFOiud8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkYWJiYGVgZGDnYGNjZubkYoCJAAAEdABTyJLycgAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                ih = {
                    src: '/_next/static/media/q2v-glow-w280.b6e7b279.png',
                    height: 256,
                    width: 720,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX/Su7kZfryVfLyP+bUUvXZf/v/ZvXjqv/9POLfof/Fb/xpkARsAAAAC3RSTlMvJCrT4R4MBLkx67AUSkUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BnZWRkYmBgY+DkYmFhZuZgYICJAAAE3wBW+41RHAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                ig = (e, t) => ({ '--q2v-glow-image': 'url('.concat(e.src, ')'), '--q2v-glow-aspect-ratio': t });
            var ix = i(29207),
                iy = i.n(ix);
            let iA = (0, u.PA)((e) => {
                    var t;
                    let { context: i, isResetAvailable: n, isHidden: a, onClick: r, className: s } = e,
                        { vibe: o, sonataState: l, experiments: u } = (0, z.g)(),
                        { formatMessage: m } = (0, _.A)(),
                        [b, p] = (0, f.d)(),
                        [g, C] = (0, f.d)(),
                        [j, k] = (0, v.useState)(null);
                    il(b, ie);
                    let I = (0, e6.b)(),
                        N = m({ id: 'interface-actions.reset-context' }, { context: i }),
                        S = (0, x.c)(() => {
                            r(), I(!0);
                        }),
                        w = o.isShuffleVibe && l.isVibeContext,
                        E = !!(null == (t = o.meta) ? void 0 : t.isQ2V) && l.isVibeContext && u.checkExperiment(H.z.WebNextQ2VContextColor, 'on'),
                        T = (0, y.L)(() => (w ? m({ id: 'entity-names.my-vibe' }) : i));
                    (0, v.useLayoutEffect)(() => {
                        if (!E || !n || null === g) return void k(null);
                        let e = () => {
                            let { width: e } = g.getBoundingClientRect();
                            e > 0 && k(e);
                        };
                        e();
                        let t = new ResizeObserver(e);
                        return (
                            t.observe(g),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [g, i, E, n, T]);
                    let M = (0, y.L)(() => {
                            if (j)
                                return ((e) =>
                                    e < 120
                                        ? ig(iv, '200 / 128')
                                        : e < 160
                                          ? ig(ib, '240 / 128')
                                          : e < 200
                                            ? ig(i_, '280 / 128')
                                            : e < 240
                                              ? ig(ip, '320 / 128')
                                              : ig(ih, '360 / 128'))(j);
                        }),
                        O = (0, y.L)(() =>
                            i
                                ? n
                                    ? (0, c.jsxs)(A.$, {
                                          ref: C,
                                          className: (0, d.$)(iy().button, { [iy().button_q2v]: E }),
                                          radius: 'xxxl',
                                          withHover: !0,
                                          withRipple: !E,
                                          onClick: S,
                                          'aria-label': N,
                                          'data-test-id': h.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                          children: [
                                              (0, c.jsx)(P.HL, {
                                                  variant: 'span',
                                                  className: (0, d.$)(iy().context, { [iy().context_q2v]: E }),
                                                  lineClamp: 2,
                                                  children: T,
                                              }),
                                              (0, c.jsx)(G.I, {
                                                  variant: 'close_filled',
                                                  size: 'xs',
                                                  className: iy().icon,
                                                  'data-test-id': h.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON,
                                              }),
                                          ],
                                      })
                                    : (0, c.jsx)('div', {
                                          className: iy().container,
                                          children: (0, c.jsx)(P.HL, {
                                              variant: 'span',
                                              className: iy().context,
                                              lineClamp: 2,
                                              'data-test-id': h.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT,
                                              children: T,
                                          }),
                                      })
                                : null,
                        );
                    return (0, c.jsx)('div', {
                        className: (0, d.$)(iy().root, s, { [iy().root_visible]: !a, [iy().root_q2v]: E && null !== j }),
                        style: M,
                        ref: p,
                        'aria-hidden': !!a,
                        children: O,
                    });
                }),
                iC = E.default.default(() =>
                    Promise.all([i.e(6582), i.e(2551), i.e(6966), i.e(825)])
                        .then(i.bind(i, 88481))
                        .then((e) => ({ default: e.Wheel })),
                );
            var ij = i(84638),
                ik = i(75314),
                iI = i(10598),
                iP = i.n(iI);
            let iN = (0, u.PA)(() => {
                let {
                        wizard: e,
                        settings: { isMobile: t },
                    } = (0, z.g)(),
                    { formatMessage: i } = (0, _.A)(),
                    n = (0, x.c)(() => {
                        e.introModal.close(), e.modal.open();
                    });
                return (0, c.jsxs)(ij.a, {
                    className: (0, d.$)((0, ik.J)(eK.S.Dark), iP().root, { [iP().root_mobile]: t }),
                    headerClassName: iP().header,
                    contentClassName: iP().content,
                    size: 'fitContent',
                    placement: t ? 'default' : 'center',
                    enableSwipe: t,
                    overlayColor: 'full',
                    labelClose: i({ id: 'interface-actions.close' }),
                    open: e.introModal.isOpened,
                    onOpenChange: e.introModal.onOpenChange,
                    onClose: e.introModal.close,
                    children: [
                        (0, c.jsx)(C._V, {
                            src: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a15a60535ffcf283a9da9e0/%%',
                            srcSet: ''.concat('avatars.mds.yandex.net/get-music-misc/70683/img.6a15a60f5d36c3160a7fb52a/%%', ' 2x'),
                            className: iP().image,
                            size: 375,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            fit: 'contain',
                            alt: '',
                            'aria-hidden': !0,
                        }),
                        (0, c.jsxs)('div', {
                            className: iP().text,
                            children: [
                                (0, c.jsx)(P.DZ, { variant: 'h2', size: 'xl', className: iP().title, children: i({ id: 'wizard.title' }) }),
                                (0, c.jsx)(P.HL, { variant: 'span', size: 'm', className: iP().description, children: i({ id: 'wizard.description' }) }),
                            ],
                        }),
                        (0, c.jsx)(A.$, { className: iP().button, color: 'primary', size: 'm', radius: 'xxxl', onClick: n, children: i({ id: 'wizard.buttonText' }) }),
                    ],
                });
            });
            var iS = i(26042);
            let iw = new Set(Object.values(eJ.ky)),
                iE = (e) => (((e) => 'string' == typeof e && iw.has(e))(e) ? e : void 0);
            var iT = (function (e) {
                    return (e.SleepingAlice = 'sleeping_alice'), (e.SleepTech = 'sleep_tech'), e;
                })({}),
                iM = i(72676);
            let iO = (e) => {
                    let { queueState: t, direction: i, batchSize: n } = e,
                        { trackIds: a, currentIndex: r } = t,
                        s = [],
                        o = 0,
                        l = 0;
                    'forward' === i ? ((o = r + 1), (l = Math.min(a.length - 1, o + n - 1))) : (o = Math.max(0, (l = r - 1) - n + 1));
                    for (let e = o; e <= l; e++) {
                        let t = a[e];
                        t && s.push(t);
                    }
                    return s;
                },
                iB = (e) => {
                    let { queueState: t, backwardSize: i, forwardSize: n } = e,
                        a = Math.max(0, t.currentIndex - i),
                        r = Math.min(t.trackIds.length - 1, t.currentIndex + n),
                        s = [];
                    for (let e = a; e <= r; e++) {
                        let i = t.trackIds[e];
                        i && s.push(i);
                    }
                    return s;
                },
                iR = (e) => {
                    let { queueState: t, direction: i, isRequested: n } = e,
                        a = 'forward' === i ? 1 : -1,
                        r = 0;
                    for (let e = t.currentIndex + a; e >= 0 && e < t.trackIds.length; e += a) {
                        let i = t.trackIds[e];
                        if (i && n(i)) r++;
                        else break;
                    }
                    return r <= 3;
                };
            var iL = i(91945),
                iV = i(16839),
                iW = i(2881);
            let iD = 'viewedCards',
                iF = 'viewedBigCards';
            class iU extends iW.F {
                async addViewedIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([iD], 'readwrite').objectStore(iD);
                        return Promise.all(e.map((e) => i.put({ uid: this.uid, cardId: e }))).then(() => i.index('uid').count(this.uid));
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedCardsOverLimit() : Promise.resolve()))
                        .catch(iV.A);
                }
                async addViewedBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([iF], 'readwrite').objectStore(iF);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => ({ uid: this.uid, cardId: e.cardId, bigCardId: t }))).map((e) => i.put(e))).then(() =>
                            i.index('uid').count(this.uid),
                        );
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedBigCardsOverLimit() : Promise.resolve()))
                        .catch(iV.A);
                }
                async getViewedIds() {
                    return this.executeTransaction((e) => e.getAllFromIndex(iD, 'uid', this.uid).then((e) => e.map((e) => e.cardId)), { defaultValue: [] }).catch(
                        () => [],
                    );
                }
                async getViewedBigCards() {
                    return this.executeTransaction(
                        (e) =>
                            e.getAllFromIndex(iF, 'uid', this.uid).then((e) => {
                                let t = new Map();
                                return (
                                    e.forEach((e) => {
                                        var i;
                                        let n = null != (i = t.get(e.cardId)) ? i : [];
                                        n.push(e.bigCardId), t.set(e.cardId, n);
                                    }),
                                    Array.from(t.entries()).map((e) => {
                                        let [t, i] = e;
                                        return { cardId: t, bigCardIds: i };
                                    })
                                );
                            }),
                        { defaultValue: [] },
                    ).catch(() => []);
                }
                async clearSentIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([iD], 'readwrite').objectStore(iD);
                        return Promise.all(e.map((e) => i.delete([this.uid, e]))).then(iV.A);
                    }).catch(iV.A);
                }
                async clearSentBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([iF], 'readwrite').objectStore(iF);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => [this.uid, e.cardId, t])).map((e) => i.delete(e))).then(iV.A);
                    }).catch(iV.A);
                }
                async evictViewedCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([iD], 'readwrite').objectStore(iD).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                n = 0,
                                a = (e) =>
                                    !e || n >= i
                                        ? Promise.resolve()
                                        : (n++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(a));
                            return t.openCursor(this.uid).then(a);
                        });
                    }).catch(iV.A);
                }
                async evictViewedBigCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([iF], 'readwrite').objectStore(iF).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                n = 0,
                                a = (e) =>
                                    !e || n >= i
                                        ? Promise.resolve()
                                        : (n++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(a));
                            return t.openCursor(this.uid).then(a);
                        });
                    }).catch(iV.A);
                }
                constructor(e) {
                    super({
                        dbName: 'music_words',
                        dbVersion: 2,
                        onUpgrade: (e) => {
                            e.objectStoreNames.contains(iD) || e.createObjectStore(iD, { keyPath: ['uid', 'cardId'] }).createIndex('uid', 'uid', { unique: !1 }),
                                e.objectStoreNames.contains(iF) ||
                                    e.createObjectStore(iF, { keyPath: ['uid', 'cardId', 'bigCardId'] }).createIndex('uid', 'uid', { unique: !1 });
                        },
                    }),
                        (0, iL._)(this, 'uid', void 0),
                        (this.uid = e);
                }
            }
            var iz = i(12989),
                iH = i(86562),
                iK = i(25266),
                iX = i(45477),
                iq = i(75582),
                iG = i(90357);
            let iY = (e) => {
                let { card: t, onClose: i } = e,
                    { notify: n } = (0, iq.l)(),
                    [a, r] = (0, v.useState)(!1),
                    [s, o] = (0, v.useState)(null),
                    { formatMessage: l } = (0, _.A)(),
                    d = (0, x.c)((e) => {
                        o(e), setTimeout(() => o(null), 3e3);
                    }),
                    u = (0, x.c)(async (e, s) => {
                        if (t && !a) {
                            r(!0);
                            try {
                                await t.sendFeedback(e), i(), s && d(s);
                            } catch (e) {
                                n((0, c.jsx)(iG.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: iX.u.ERROR });
                            } finally {
                                r(!1);
                            }
                        }
                    });
                return {
                    handleLike: (0, x.c)(async () => {
                        (null == t ? void 0 : t.isLiked) ? await u(iK.a.NEUTRAL) : await u(iK.a.LIKE, l({ id: 'words.like-feedback' }));
                    }),
                    handleDislike: (0, x.c)(async () => {
                        await u(iK.a.DISLIKE, l({ id: 'words.dislike-feedback' }));
                    }),
                    feedbackMessage: s,
                };
            };
            var i$ = i(24372),
                iQ = i.n(i$);
            function iZ() {
                return (iZ = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let iJ = function (e) {
                return v.createElement(
                    'svg',
                    iZ({ viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    n ||
                        (n = v.createElement('path', {
                            d: 'M10.0002 0.3125C7.25741 0.3125 4.69896 2.90254 2.43499 6.67723C0.171015 10.4519 -0.760012 14.016 0.707594 16.2922C2.17517 18.5683 5.69374 19.6874 9.99984 19.6875L10.0002 19.6875C14.3063 19.6874 17.8248 18.5683 19.2924 16.2922C20.76 14.016 19.829 10.4519 17.565 6.67723C15.3011 2.90269 12.7429 0.3125 10.0002 0.3125Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function i0() {
                return (i0 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let i1 = function (e) {
                return v.createElement(
                    'svg',
                    i0({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    a ||
                        (a = v.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M9.42032 25.4019C9.14037 21.0934 5.66809 17.6882 1.42578 17.6882V16.5741C5.8511 16.5741 9.43853 12.8687 9.43853 8.29785H10.5171C10.5171 12.8687 14.1045 16.5741 18.5299 16.5741V17.6882C14.2876 17.6882 10.8153 21.0934 10.5353 25.4019H9.42032Z',
                            fill: 'currentColor',
                        })),
                    r ||
                        (r = v.createElement('path', {
                            d: 'M19.8267 3.83H21.4167L23.9567 11H22.7067L22.0467 9.12H19.0267L18.3667 11H17.2967L19.8267 3.83ZM21.6767 8.08L20.5367 4.85L19.3967 8.08H21.6767ZM27.0991 3.83V11H25.8891V3.83H27.0991Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function i2() {
                return (i2 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let i8 = function (e) {
                return v.createElement(
                    'svg',
                    i2({ viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    s || (s = v.createElement('path', { d: 'M6 0C6 3.31 3.31 6 0 6C3.31 6 6 8.69 6 12C6 8.69 8.69 6 12 6C8.69 6 6 3.31 6 0Z', fill: 'currentColor' })),
                );
            };
            function i5() {
                return (i5 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let i9 = function (e) {
                    return v.createElement(
                        'svg',
                        i5({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                        o ||
                            (o = v.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M9.42032 25.4029C9.14037 21.0944 5.66809 17.6891 1.42578 17.6891V16.5751C5.8511 16.5751 9.43853 12.8697 9.43853 8.29883H10.5171C10.5171 12.8697 14.1045 16.5751 18.5299 16.5751V17.6891C14.2876 17.6891 10.8153 21.0944 10.5353 25.4029H9.42032Z',
                                fill: 'currentColor',
                            })),
                        l ||
                            (l = v.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M22.4961 12.0999C22.3406 9.70631 20.4115 7.81449 18.0547 7.81449V7.19557C20.5132 7.19557 22.5062 5.13701 22.5062 2.59766H23.1054C23.1054 5.13701 25.0984 7.19557 27.5569 7.19557V7.81449C25.2001 7.81449 23.2711 9.70631 23.1155 12.0999H22.4961Z',
                                fill: 'currentColor',
                            })),
                    );
                },
                i7 = (0, u.PA)((e) => {
                    let { className: t, dimmed: i, isFact: n } = e,
                        { experiments: a } = (0, z.g)(),
                        r = a.checkExperiment(H.z.WebNextWaveScreenWordsInWave, 'on_with_onyx'),
                        s = a.checkExperiment(H.z.WebNextWaveScreenWordsInWave, 'on'),
                        o = r && i,
                        l = (0, y.L)(() =>
                            r
                                ? (0, c.jsx)(iJ, { className: (0, d.$)(iQ().icon, iQ().icon_okniks) })
                                : s
                                  ? n && !i
                                      ? (0, c.jsx)(i1, { className: (0, d.$)(iQ().icon, iQ().icon_sparkles) })
                                      : (0, c.jsx)(i9, { className: (0, d.$)(iQ().icon, iQ().icon_sparkles) })
                                  : void 0,
                        );
                    return (0, c.jsxs)('div', {
                        className: (0, d.$)(iQ().root, { [iQ().root_dimmed]: i }, t),
                        'aria-hidden': !0,
                        'data-test-id': h.Kq.words.WORDS_AI_BADGE,
                        children: [
                            (0, c.jsx)(C._V, {
                                src: 'avatars.mds.yandex.net/get-music-misc/2413828/img.69c13075ab25d7410604f669/%%',
                                size: 200,
                                withAvatarReplace: !0,
                                withLoadingIndicator: !1,
                                className: iQ().glow,
                            }),
                            l,
                            o &&
                                (0, c.jsxs)('div', {
                                    className: iQ().sparkles,
                                    children: [
                                        (0, c.jsx)(i8, { className: iQ().sparkle }),
                                        (0, c.jsx)(i8, { className: iQ().sparkle }),
                                        (0, c.jsx)(i8, { className: iQ().sparkle }),
                                        (0, c.jsx)(i8, { className: iQ().sparkle }),
                                    ],
                                }),
                        ],
                    });
                });
            var i6 = i(15248),
                i4 = i.n(i6);
            let i3 = (e) => {
                let { children: t } = e;
                return (0, c.jsx)('div', {
                    className: i4().root,
                    children: (0, c.jsx)(P.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', className: i4().text, children: t }),
                });
            };
            var ne = i(30480),
                nt = i.n(ne),
                ni = i(84051);
            let nn = (e) => {
                    let { url: t, title: i, prevTitle: n, className: a, analyticObjectId: r } = e,
                        s = (0, iz.D)(),
                        o = (0, tl.N)();
                    (0, v.useEffect)(() => {
                        n.current !== i && ((n.current = i), s(!0, ''));
                    }, [n, s, i]);
                    let l = (0, x.c)((e) => {
                        e.stopPropagation(), o({ to: eJ.QT.Link, deepLink: t, objectId: r, objectPosY: 1 });
                    });
                    return (0, c.jsx)(tu.N, {
                        href: t,
                        className: a,
                        onClick: l,
                        onKeyDown: l,
                        'data-test-id': h.Kq.words.WORDS_CARD_ACTION,
                        children: (0, c.jsx)(P.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', children: i }),
                    });
                },
                na = (e) => {
                    let { actionType: t, onClick: i, children: n, ...a } = e,
                        r = (0, e7.m)(),
                        s = (0, x.c)((e) => {
                            r({ actionType: t }), null == i || i(e);
                        });
                    return (0, c.jsx)(A.$, { onClick: s, ...a, children: n });
                },
                nr = (e) => {
                    let { url: t, className: i, children: n } = e,
                        a = (0, tl.N)(),
                        r = (0, x.c)(() => {
                            a({ to: eJ.QT.Link, deepLink: t });
                        });
                    return (0, c.jsx)(tu.N, { href: t, className: i, onClick: r, 'data-test-id': h.Kq.words.WORDS_CARD_LINK, children: n });
                };
            var ns = i(29025),
                no = i.n(ns);
            let nl = (e) => {
                let { className: t } = e;
                return (0, c.jsx)('div', {
                    className: (0, d.$)(no().root, t),
                    'data-test-id': h.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER,
                    children: (0, c.jsx)(P.HL, {
                        variant: 'div',
                        type: 'text',
                        size: 's',
                        weight: 'medium',
                        className: no().description,
                        'data-test-id': h.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER_AI_TEXT,
                        children: (0, c.jsx)(p.A, { id: 'words.ai-description' }),
                    }),
                });
            };
            var nc = i(32496),
                nd = i(37875),
                nu = i.n(nd);
            let nm = (e) => {
                    let { isActive: t } = e;
                    return (0, c.jsxs)('div', {
                        className: nu().root,
                        'aria-busy': t,
                        'aria-live': t ? 'polite' : 'off',
                        children: [
                            (0, c.jsxs)('div', {
                                className: nu().topGroup,
                                children: [
                                    (0, c.jsx)(nc.n, { isActive: t, className: nu().line, textClassName: nu().topLinePrimary }),
                                    (0, c.jsx)(nc.n, { isActive: t, className: nu().line, textClassName: nu().topLineSecondary }),
                                ],
                            }),
                            (0, c.jsx)(nc.n, { isActive: t, className: nu().main, textClassName: nu().mainLine }),
                            (0, c.jsx)(nc.n, { isActive: t, className: nu().bottom, textClassName: nu().bottomLine }),
                        ],
                    });
                },
                nv = (0, u.PA)((e) => {
                    var t, i;
                    let { card: n, feedbackMessage: a, onLike: r, onDislike: s, onClose: o, onScreenClosed: l } = e,
                        { words: u } = (0, z.g)(),
                        { formatMessage: m } = (0, _.A)(),
                        b = (0, v.useRef)(null),
                        g = null != a ? a : null == (t = u.activeBigCard) ? void 0 : t.text,
                        f = null != (i = u.activeBigCardId) ? i : '',
                        j = (0, v.useRef)(null),
                        k = (0, v.useRef)(null),
                        [I, N] = (0, v.useState)(!1),
                        { pageEntityId: S } = (0, L.$)(),
                        w = (0, ni.l)({ mainObjectType: eJ.ky.BigFact });
                    (0, v.useEffect)(
                        () => (
                            u.modal.isOpened && S && w(!0),
                            () => {
                                w(!1), l();
                            }
                        ),
                        [l, S, w, u.modal.isOpened],
                    );
                    let E = (0, x.c)(() => {
                            o();
                        }),
                        T = (0, x.c)((e) => {
                            e.stopPropagation();
                        }),
                        M = (0, x.c)(() => {
                            let e = j.current;
                            if (!e) return void N(!1);
                            N(e.scrollHeight > e.clientHeight);
                        }),
                        O = (0, x.c)((e) => {
                            var t;
                            if (((j.current = e), null == (t = k.current) || t.disconnect(), (k.current = null), !e)) return void N(!1);
                            M();
                            let i = new ResizeObserver(M);
                            i.observe(e), (k.current = i);
                        }),
                        B = (0, y.L)(() => {
                            var e;
                            return u.isShimmerVisible
                                ? (0, c.jsx)('div', { className: nt().content, onClick: T, children: (0, c.jsx)(nm, { isActive: u.isShimmerActive }) })
                                : (0, c.jsxs)('div', {
                                      className: nt().content,
                                      onClick: T,
                                      children: [
                                          (0, c.jsx)('div', {
                                              className: (0, d.$)(nt().messageScroll, { [nt().messageScroll_scrollable]: I }),
                                              children: (0, c.jsx)(P.HL, {
                                                  ref: O,
                                                  variant: 'div',
                                                  className: nt().message,
                                                  'data-test-id': h.Kq.words.WORDS_CARD_FULLSCREEN_MESSAGE,
                                                  children: g,
                                              }),
                                          }),
                                          (0, c.jsxs)('div', {
                                              className: nt().actions,
                                              children: [
                                                  (null == n ? void 0 : n.action) &&
                                                      (null == n ? void 0 : n.action.url) &&
                                                      (0, c.jsx)(nn, {
                                                          url: n.action.url,
                                                          title: n.action.title,
                                                          prevTitle: b,
                                                          className: nt().primaryAction,
                                                          analyticObjectId: null != (e = n.analyticObjectId) ? e : '',
                                                      }),
                                                  (null == n ? void 0 : n.sources) &&
                                                      n.sources.length > 0 &&
                                                      n.sources.map((e, t) => {
                                                          var i, a;
                                                          return (0, c.jsx)(
                                                              eW.F,
                                                              {
                                                                  blockId: eJ.LA.WordsInWave,
                                                                  blockType: eJ.LA.WordsInWave,
                                                                  blockPosX: 1,
                                                                  blockPosY: 2,
                                                                  mainObjectType: eJ.ky.BigFact,
                                                                  mainObjectId: f,
                                                                  children: (0, c.jsx)(iS.B, {
                                                                      objectType: eJ.ky.Link,
                                                                      objectId: f,
                                                                      objectPosX: t + 1,
                                                                      objectPosY: 1,
                                                                      objectsCount: null != (a = null == (i = n.sources) ? void 0 : i.length) ? a : 0,
                                                                      children: (0, c.jsxs)(nr, {
                                                                          url: e.url,
                                                                          className: (0, d.$)(nt().sourceItem, { [nt().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                                          children: [
                                                                              e.faviconUrl &&
                                                                                  (0, c.jsx)(C._V, {
                                                                                      src: e.faviconUrl,
                                                                                      fit: 'cover',
                                                                                      'aria-hidden': !0,
                                                                                      className: nt().sourceIcon,
                                                                                      'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                                  }),
                                                                              (0, c.jsx)(P.HL, {
                                                                                  variant: 'span',
                                                                                  type: 'text',
                                                                                  size: 'l',
                                                                                  weight: 'medium',
                                                                                  lineClamp: 1,
                                                                                  className: nt().actionText,
                                                                                  'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                                  children: e.title,
                                                                              }),
                                                                          ],
                                                                      }),
                                                                  }),
                                                              },
                                                              e.url,
                                                          );
                                                      }),
                                              ],
                                          }),
                                          n &&
                                              (0, c.jsx)(eW.F, {
                                                  blockId: eJ.LA.WordsInWave,
                                                  blockType: eJ.LA.WordsInWave,
                                                  blockPosX: 1,
                                                  blockPosY: 3,
                                                  mainObjectType: eJ.ky.BigFact,
                                                  mainObjectId: f,
                                                  children: (0, c.jsxs)('div', {
                                                      className: nt().feedback,
                                                      children: [
                                                          (0, c.jsx)(iS.B, {
                                                              objectType: eJ.ky.Fact,
                                                              objectId: f,
                                                              objectsCount: 2,
                                                              objectPosX: 1,
                                                              objectPosY: 1,
                                                              children: (0, c.jsxs)(na, {
                                                                  actionType: n.isLiked ? eJ.X2.Unlike : eJ.X2.Like,
                                                                  variant: 'text',
                                                                  withRipple: !1,
                                                                  className: (0, d.$)(nt().feedbackButton, { [nt().feedbackButton_active]: n.isLiked }),
                                                                  onClick: r,
                                                                  'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                                  children: [
                                                                      (0, c.jsx)(G.I, {
                                                                          variant: 'thumbUp',
                                                                          size: 'xxs',
                                                                          'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                                      }),
                                                                      (0, c.jsx)(P.HL, {
                                                                          variant: 'span',
                                                                          type: 'text',
                                                                          size: 'l',
                                                                          weight: 'medium',
                                                                          'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                                          children: (0, c.jsx)(p.A, { id: 'words.like' }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          }),
                                                          (0, c.jsx)('div', { className: nt().feedbackDivider }),
                                                          (0, c.jsx)(iS.B, {
                                                              objectType: eJ.ky.Fact,
                                                              objectId: f,
                                                              objectsCount: 2,
                                                              objectPosX: 1,
                                                              objectPosY: 2,
                                                              children: (0, c.jsxs)(na, {
                                                                  actionType: eJ.X2.Dislike,
                                                                  variant: 'text',
                                                                  withRipple: !1,
                                                                  className: (0, d.$)(nt().feedbackButton, { [nt().feedbackButton_active]: n.isDisliked }),
                                                                  onClick: s,
                                                                  'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                                  children: [
                                                                      (0, c.jsx)(G.I, {
                                                                          variant: 'thumbDown',
                                                                          size: 'xxs',
                                                                          'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                                      }),
                                                                      (0, c.jsx)(P.HL, {
                                                                          variant: 'span',
                                                                          type: 'text',
                                                                          size: 'l',
                                                                          weight: 'medium',
                                                                          'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                                          children: (0, c.jsx)(p.A, { id: 'words.dislike' }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                      ],
                                  });
                        });
                    return (
                        (0, v.useEffect)(() => {
                            M();
                        }, [g, M]),
                        (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsx)('div', {
                                    className: nt().closeButtonWrapper,
                                    children: (0, c.jsx)(A.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'm',
                                        icon: (0, c.jsx)(G.I, { variant: 'close', size: 'xs' }),
                                        onClick: o,
                                        'aria-label': m({ id: 'interface-actions.close' }),
                                        'data-test-id': h.Kq.words.WORDS_CARD_FULLSCREEN_CLOSE_BUTTON,
                                    }),
                                }),
                                (0, c.jsxs)('div', {
                                    className: nt().layout,
                                    children: [
                                        (0, c.jsx)('div', {
                                            className: (0, d.$)(nt().contentArea, { [nt().contentArea_withMessageScroll]: I }),
                                            onClick: E,
                                            children: B,
                                        }),
                                        (null == n ? void 0 : n.isFact) && (0, c.jsx)(nl, { className: nt().disclaimer }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                nb = (0, u.PA)((e) => {
                    let { card: t, feedbackMessage: i, onLike: n, onDislike: a, onClose: r, onScreenClosed: s } = e,
                        {
                            words: o,
                            settings: { isMobile: l },
                        } = (0, z.g)(),
                        d = (0, x.c)((e) => {
                            o.modal.onOpenChange(e), e || r();
                        });
                    return (0, c.jsx)(ij.a, {
                        className: nt().root,
                        open: o.modal.isOpened,
                        onOpenChange: d,
                        onClose: r,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: l,
                        contentClassName: nt().modalContent,
                        'data-test-id': h.Kq.words.WORDS_CARD_FULLSCREEN_MODAL,
                        children: (0, c.jsx)(nv, { card: t, feedbackMessage: i, onLike: n, onDislike: a, onClose: r, onScreenClosed: s }),
                    });
                });
            var n_ = i(4529),
                np = i.n(n_);
            let nh = (0, u.PA)((e) => {
                let { card: t, onLike: i, onDislike: n } = e,
                    a = (0, ni.l)({ mainObjectType: eJ.ky.Fact });
                return (
                    (0, v.useEffect)(
                        () => (
                            a(!0),
                            () => {
                                a(!1);
                            }
                        ),
                        [a],
                    ),
                    (0, c.jsxs)('div', {
                        className: np().root,
                        'data-test-id': h.Kq.words.WORDS_CARD_POPOVER_DESKTOP,
                        children: [
                            t.sources &&
                                t.sources.length > 0 &&
                                (0, c.jsxs)(c.Fragment, {
                                    children: [
                                        t.sources.map((e, i) => {
                                            var n, a;
                                            return (0, c.jsx)(
                                                eW.F,
                                                {
                                                    blockId: eJ.LA.WordsInWave,
                                                    blockType: eJ.LA.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    mainObjectType: eJ.ky.Fact,
                                                    mainObjectId: t.id,
                                                    children: (0, c.jsx)(iS.B, {
                                                        objectType: eJ.ky.Link,
                                                        objectId: e.url,
                                                        objectPosX: i + 1,
                                                        objectPosY: 1,
                                                        objectsCount: null != (a = null == (n = t.sources) ? void 0 : n.length) ? a : 0,
                                                        children: (0, c.jsxs)(nr, {
                                                            url: e.url,
                                                            className: (0, d.$)(np().item, np().actionItem, np().sourceItem, {
                                                                [np().sourceItem_withoutIcon]: !e.faviconUrl,
                                                            }),
                                                            children: [
                                                                e.faviconUrl &&
                                                                    (0, c.jsx)(C._V, {
                                                                        src: e.faviconUrl,
                                                                        fit: 'cover',
                                                                        'aria-hidden': !0,
                                                                        className: np().sourceIcon,
                                                                        'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                    }),
                                                                (0, c.jsx)(P.HL, {
                                                                    variant: 'span',
                                                                    type: 'text',
                                                                    size: 'l',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.url,
                                            );
                                        }),
                                        (0, c.jsx)('div', { className: np().divider }),
                                    ],
                                }),
                            (0, c.jsxs)(eW.F, {
                                blockId: eJ.LA.WordsInWave,
                                blockType: eJ.LA.WordsInWave,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectType: eJ.ky.Fact,
                                mainObjectId: t.id,
                                children: [
                                    (0, c.jsx)(iS.B, {
                                        objectType: eJ.ky.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 1,
                                        children: (0, c.jsxs)(na, {
                                            actionType: t.isLiked ? eJ.X2.Unlike : eJ.X2.Like,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, d.$)(np().item, np().actionItem, { [np().actionItem_active]: t.isLiked }),
                                            onClick: i,
                                            'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                            children: [
                                                (0, c.jsx)(G.I, { variant: 'thumbUp', size: 'xs', 'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON }),
                                                (0, c.jsx)(P.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                    children: (0, c.jsx)(p.A, { id: 'words.like' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, c.jsx)(iS.B, {
                                        objectType: eJ.ky.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 2,
                                        children: (0, c.jsxs)(na, {
                                            actionType: eJ.X2.Dislike,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, d.$)(np().item, np().actionItem, { [np().actionItem_active]: t.isDisliked }),
                                            onClick: n,
                                            'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                            children: [
                                                (0, c.jsx)(G.I, {
                                                    variant: 'thumbDown',
                                                    size: 'xs',
                                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                }),
                                                (0, c.jsx)(P.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                    children: (0, c.jsx)(p.A, { id: 'words.dislike' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            t.isFact && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)('div', { className: np().divider }), (0, c.jsx)(nl, {})] }),
                        ],
                    })
                );
            });
            var ng = i(13591),
                nx = i.n(ng);
            let nf = (0, u.PA)((e) => {
                let { card: t, onLike: i, onDislike: n } = e,
                    { formatMessage: a } = (0, _.A)(),
                    r = (0, ni.l)({ mainObjectType: eJ.ky.Fact }),
                    s = a({ id: 'words.like' }),
                    o = a({ id: 'words.dislike' });
                return (
                    (0, v.useEffect)(
                        () => (
                            r(!0),
                            () => {
                                r(!1);
                            }
                        ),
                        [r],
                    ),
                    (0, c.jsxs)('div', {
                        className: nx().root,
                        'data-test-id': h.Kq.words.WORDS_CARD_POPOVER_MOBILE,
                        children: [
                            (0, c.jsxs)('div', {
                                className: nx().container,
                                children: [
                                    (0, c.jsx)(P.DZ, { variant: 'div', size: 'xs', weight: 'bold', lineClamp: 5, className: nx().text, children: t.text }),
                                    t.action &&
                                        t.action.url &&
                                        (0, c.jsx)(eW.F, {
                                            blockId: eJ.LA.WordsInWave,
                                            blockType: eJ.LA.WordsInWave,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            mainObjectType: eJ.ky.Fact,
                                            mainObjectId: t.id,
                                            children: (0, c.jsx)(iS.B, {
                                                objectType: eJ.ky.Link,
                                                objectId: t.action.url,
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                children: (0, c.jsx)(nr, {
                                                    url: t.action.url,
                                                    className: nx().action,
                                                    children: (0, c.jsx)(P.HL, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        children: t.action.title,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    t.sources &&
                                        t.sources.length > 0 &&
                                        (0, c.jsx)('div', {
                                            className: nx().sources,
                                            children: t.sources.map((e, i) => {
                                                var n, a;
                                                return (0, c.jsx)(
                                                    eW.F,
                                                    {
                                                        blockId: eJ.LA.WordsInWave,
                                                        blockType: eJ.LA.WordsInWave,
                                                        blockPosX: 1,
                                                        blockPosY: 2,
                                                        mainObjectType: eJ.ky.Fact,
                                                        mainObjectId: t.id,
                                                        children: (0, c.jsx)(iS.B, {
                                                            objectType: eJ.ky.Link,
                                                            objectId: e.url,
                                                            objectPosX: i + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null != (a = null == (n = t.sources) ? void 0 : n.length) ? a : 0,
                                                            children: (0, c.jsxs)(nr, {
                                                                url: e.url,
                                                                className: (0, d.$)(nx().sourceItem, { [nx().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                                children: [
                                                                    e.faviconUrl &&
                                                                        (0, c.jsx)(C._V, {
                                                                            src: e.faviconUrl,
                                                                            fit: 'cover',
                                                                            'aria-hidden': !0,
                                                                            className: nx().sourceIcon,
                                                                            'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                        }),
                                                                    (0, c.jsx)(P.HL, {
                                                                        variant: 'span',
                                                                        type: 'text',
                                                                        size: 'm',
                                                                        weight: 'medium',
                                                                        lineClamp: 1,
                                                                        'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                        children: e.title,
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    },
                                                    e.url,
                                                );
                                            }),
                                        }),
                                ],
                            }),
                            (0, c.jsxs)('div', {
                                children: [
                                    (0, c.jsxs)('div', {
                                        className: nx().feedbackSection,
                                        children: [
                                            (0, c.jsx)(P.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                className: nx().feedbackQuestion,
                                                children: (0, c.jsx)(p.A, { id: 'words.show-more' }),
                                            }),
                                            (0, c.jsx)('div', {
                                                className: nx().feedbackButtons,
                                                children: (0, c.jsxs)(eW.F, {
                                                    blockId: eJ.LA.WordsInWave,
                                                    blockType: eJ.LA.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 3,
                                                    mainObjectType: eJ.ky.Fact,
                                                    mainObjectId: t.id,
                                                    children: [
                                                        (0, c.jsx)(iS.B, {
                                                            objectType: eJ.ky.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            children: (0, c.jsx)(na, {
                                                                actionType: t.isLiked ? eJ.X2.Unlike : eJ.X2.Like,
                                                                variant: 'text',
                                                                color: 'secondary',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, d.$)(nx().feedbackButton, { [nx().feedbackButton_active]: t.isLiked }),
                                                                'aria-label': s,
                                                                onClick: i,
                                                                'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                                children: (0, c.jsx)(G.I, {
                                                                    variant: 'thumbUp',
                                                                    size: 'xs',
                                                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                                }),
                                                            }),
                                                        }),
                                                        (0, c.jsx)(iS.B, {
                                                            objectType: eJ.ky.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 2,
                                                            children: (0, c.jsx)(na, {
                                                                actionType: eJ.X2.Dislike,
                                                                variant: 'text',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, d.$)(nx().feedbackButton, { [nx().feedbackButton_active]: t.isDisliked }),
                                                                'aria-label': o,
                                                                onClick: n,
                                                                'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                                children: (0, c.jsx)(G.I, {
                                                                    variant: 'thumbDown',
                                                                    size: 'xs',
                                                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    t.isFact && (0, c.jsx)(nl, {}),
                                ],
                            }),
                        ],
                    })
                );
            });
            var ny = i(95180),
                nA = i.n(ny);
            let nC = (e) => {
                    let { text: t, prevText: i, className: n } = e,
                        a = (0, iz.D)();
                    return (
                        (0, v.useEffect)(() => {
                            i.current !== t && ((i.current = t), a(!0, ''));
                        }, [i, a, t]),
                        (0, c.jsx)(P.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 3,
                            className: n,
                            'data-test-id': h.Kq.words.WORDS_CARD_TEXT,
                            children: t,
                        })
                    );
                },
                nj = (0, u.PA)((e) => {
                    var t, i, n;
                    let { card: a, isLoading: r, className: s } = e,
                        {
                            words: o,
                            settings: { isMobile: l },
                            experiments: u,
                        } = (0, z.g)(),
                        m = (0, tl.N)(),
                        b = (0, iz.D)(),
                        p = (0, v.useRef)(null),
                        g = (0, v.useRef)(null),
                        [f, A] = (0, v.useState)(!1),
                        [C, j] = (0, v.useState)(void 0),
                        [k, I] = (0, v.useState)(),
                        [N, S] = (0, v.useState)(),
                        w = (0, v.useRef)(null),
                        E = ((e) => {
                            let { formatMessage: t } = (0, _.A)(),
                                i = (0, v.useMemo)(
                                    () => [
                                        t({ id: 'words.loading-phrase-collecting-interesting' }),
                                        t({ id: 'words.loading-phrase-tuning' }),
                                        t({ id: 'words.loading-phrase-catching' }),
                                        t({ id: 'words.loading-phrase-reading' }),
                                        t({ id: 'words.loading-phrase-studying' }),
                                    ],
                                    [t],
                                ),
                                n = (0, v.useRef)(0),
                                [a, r] = (0, v.useState)(() => {
                                    var t;
                                    if (!e) return null;
                                    let a = Math.floor(Math.random() * i.length);
                                    return (n.current = a), null != (t = i[a]) ? t : null;
                                }),
                                s = (0, v.useRef)(e),
                                o = (0, v.useRef)(null),
                                l = (0, v.useRef)(e);
                            if (((s.current = e), e && !l.current)) {
                                var c;
                                let e = Math.floor(Math.random() * i.length);
                                (n.current = e), r(null != (c = i[e]) ? c : null);
                            }
                            return (
                                (l.current = e),
                                (0, v.useEffect)(() => {
                                    if (null !== a && !o.current)
                                        return (
                                            (o.current = setTimeout(() => {
                                                if (((o.current = null), s.current)) {
                                                    var e;
                                                    (n.current = (n.current + 1) % i.length), r(null != (e = i[n.current]) ? e : i[0]);
                                                    return;
                                                }
                                                r(null);
                                            }, 2500)),
                                            () => {
                                                o.current && (clearTimeout(o.current), (o.current = null));
                                            }
                                        );
                                }, [i, a]),
                                a
                            );
                        })(!!r),
                        T = null !== E,
                        M = u.checkExperiment(H.z.WebNextWaveScreenWordsInWave, 'on'),
                        O = u.checkExperiment(H.z.WebNextWaveScreenWordsInWaveBigReplica, 'on'),
                        B = O && !!(null == a ? void 0 : a.hasBigCard),
                        R = O && !!((null == a ? void 0 : a.hasBigCard) || (null == k ? void 0 : k.hasBigCard)),
                        L = u.checkExperiment(H.z.WebNextWaveScreenWordsInWaveDirectLinks, 'on') && !!(null == a ? void 0 : a.isInformer),
                        V = B || L,
                        W = null == (t = o.activeBigCard) ? void 0 : t.id,
                        D = (0, x.c)(() => {
                            A(!1);
                        }),
                        F = (0, x.c)(() => {
                            o.modal.close(), I(void 0);
                        }),
                        U = (0, x.c)(() => {
                            S(void 0);
                        });
                    (0, v.useEffect)(() => {
                        o.modal.isOpened && o.bigCardLoadingState.isRejected && F();
                    }, [F, o.bigCardLoadingState.isRejected, o.modal.isOpened]),
                        (0, v.useEffect)(() => {
                            o.modal.isOpened && o.bigCardLoadingState.isResolved && k && N && W === N && o.markBigCardViewed(k.id, N);
                        }, [W, N, k, o, o.bigCardLoadingState.isResolved, o.modal.isOpened]);
                    let { handleLike: K, handleDislike: X, feedbackMessage: q } = iY({ card: a, onClose: D }),
                        { handleLike: G, handleDislike: Y, feedbackMessage: $ } = iY({ card: k, onClose: F }),
                        Q = !(a && (!(null == a ? void 0 : a.isDisliked) || q || $)) && !T,
                        Z = !a || (null == a ? void 0 : a.isDisliked) || !!(q || $) || T,
                        J = T ? 'loading' : 'content-'.concat(null == a ? void 0 : a.id);
                    (0, v.useEffect)(() => {
                        a || r || b(!0, '');
                    }, [a, r, b]);
                    let ee = (0, x.c)((e) => {
                            (!e || !Z) &&
                                ((e && L) ||
                                    (e && l && w.current && j(window.innerHeight - w.current.getBoundingClientRect().top + 12), e && m({ to: eJ.QT.FactScreen }), A(e)));
                        }),
                        et = (0, eH.Z)(null != (n = null == a || null == (i = a.action) ? void 0 : i.url) ? n : ''),
                        ei = (0, x.c)(() => {
                            var e;
                            (null == a || null == (e = a.action) ? void 0 : e.url) && (m({ to: eJ.QT.Link, deepLink: a.action.url }), et());
                        }),
                        en = (0, x.c)(() => {
                            if (!Z && a) {
                                if (a.isInformer) return void ei();
                                if (B) {
                                    var e;
                                    let t = Array.from(null != (e = a.bigCardIds) ? e : [])[0];
                                    if (!t) return;
                                    S(t), I(a), m({ to: eJ.QT.FactScreen }), o.modal.open(), o.loadBigCard(t);
                                }
                            }
                        }),
                        ea = (0, x.c)((e) => {
                            e.target === e.currentTarget && (e.code === iH.v.SPACE || e.code === iH.v.ENTER) && (e.preventDefault(), en());
                        }),
                        er = (0, y.L)(() => {
                            var e, t;
                            if (T) return (0, c.jsx)(i3, { children: E });
                            if (q || $)
                                return (0, c.jsx)(P.HL, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'medium',
                                    lineClamp: 3,
                                    className: nA().text,
                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_MESSAGE,
                                    children: q || $,
                                });
                            if (null == a ? void 0 : a.isDisliked) return;
                            let i = iE(null == a ? void 0 : a.analyticObjectType);
                            return (0, c.jsxs)(c.Fragment, {
                                children: [
                                    (null == a ? void 0 : a.text) &&
                                        (0, c.jsx)(
                                            iS.B,
                                            {
                                                objectType: null != i ? i : eJ.ky.Fact,
                                                objectId: null != (e = null == a ? void 0 : a.analyticObjectId) ? e : '',
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: (null == a ? void 0 : a.action) ? 2 : 1,
                                                children: (0, c.jsx)(nC, { text: a.text, prevText: p, className: nA().text }, J),
                                            },
                                            null == a ? void 0 : a.id,
                                        ),
                                    (null == a ? void 0 : a.action) &&
                                        a.action.url &&
                                        (0, c.jsx)(
                                            iS.B,
                                            {
                                                objectType: null != i ? i : eJ.ky.Link,
                                                objectId: a.action.url,
                                                objectPosX: 1,
                                                objectPosY: 2,
                                                objectsCount: (null == a ? void 0 : a.action) ? 2 : 1,
                                                children: (0, c.jsx)(
                                                    nn,
                                                    {
                                                        url: a.action.url,
                                                        title: a.action.title,
                                                        prevTitle: g,
                                                        className: nA().action,
                                                        analyticObjectId: null != (t = null == a ? void 0 : a.analyticObjectId) ? t : '',
                                                    },
                                                    ''.concat(J, '-action'),
                                                ),
                                            },
                                            a.action.url,
                                        ),
                                ],
                            });
                        }),
                        es = (0, y.L)(() => {
                            if (l && C) return { '--words-popover-height': ''.concat(C, 'px') };
                        }),
                        eo = l ? nf : nh,
                        el = (0, c.jsxs)('div', {
                            className: (0, d.$)(nA().root, { [nA().root_disabled]: Z }, s),
                            role: 'button',
                            tabIndex: 0,
                            onClick: V ? en : void 0,
                            onKeyDown: V ? ea : void 0,
                            'data-test-id': h.Kq.words.WORDS_CARD,
                            children: [
                                (0, c.jsx)(i7, {
                                    className: (0, d.$)(nA().badge, { [nA().badge_centered]: Q, [nA().badge_centeredSparkles]: Q && M, [nA().badge_loading]: T }),
                                    dimmed: Q,
                                    isFact: (null == a ? void 0 : a.isFact) && !Z,
                                }),
                                (0, c.jsx)('div', { className: (0, d.$)(nA().content, { [nA().content_hidden]: Q }), ref: w, children: er }),
                            ],
                        });
                    return R
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  el,
                                  (0, c.jsx)(eF.n, {
                                      pageId: eV._Q.FACT_SCREEN,
                                      pageEntityId: null != N ? N : '',
                                      pageStyle: eJ.QL.Fullscreen,
                                      pagePlacement: eJ.c4.Fullscreen,
                                      children: (0, c.jsx)(nb, { card: k, feedbackMessage: $, onLike: G, onDislike: Y, onClose: F, onScreenClosed: U }),
                                  }),
                              ],
                          })
                        : (0, c.jsxs)(ed.AM, {
                              isMobile: l,
                              placement: l ? 'bottom' : 'top',
                              open: f,
                              onOpenChange: ee,
                              positionElement: l ? void 0 : w.current,
                              offsetOptions: l ? void 0 : 12,
                              style: es,
                              children: [
                                  el,
                                  (0, c.jsx)(ed.hl, {
                                      className: nA().popoverContent,
                                      children: (0, c.jsx)(eF.n, {
                                          pageId: eV._Q.FACT_SCREEN,
                                          pageEntityId: null == a ? void 0 : a.id,
                                          pageStyle: l ? eJ.QL.Sheet : eJ.QL.Popup,
                                          pagePlacement: l ? eJ.c4.Bottom : eJ.c4.Floating,
                                          children: a && (0, c.jsx)(eo, { card: a, onLike: K, onDislike: X }),
                                      }),
                                  }),
                              ],
                          });
                }),
                nk = (0, u.PA)((e) => {
                    var t, i;
                    let { className: n, trackId: a } = e,
                        { words: r } = (0, z.g)(),
                        s = (() => {
                            let e = (0, D.N)();
                            return (0, v.useMemo)(() => {
                                let t = e.get(W.WA),
                                    i = null == t ? void 0 : t.getPassportUid();
                                if (!i) return;
                                let n = new iU(String(i));
                                return n.openDatabase(), n;
                            }, [e]);
                        })();
                    (() => {
                        let e = (0, tt.e)(),
                            { words: t, sonataState: i } = (0, z.g)();
                        (0, v.useEffect)(() => {
                            if (!e) return;
                            let n = e.state.queueState,
                                a = () => {
                                    let e = n.entityList.value,
                                        t = n.order.value,
                                        i = n.index.value;
                                    return e && null != i
                                        ? ((e, t, i) => ({
                                              trackIds: Array.from({ length: t.length > 0 ? t.length : e.length }, (i, n) => {
                                                  var a, r, s, o, l;
                                                  let c =
                                                      null == (o = e[t.length > 0 && null != (l = t[n]) ? l : n]) ||
                                                      null == (s = o.entity) ||
                                                      null == (r = s.data) ||
                                                      null == (a = r.meta)
                                                          ? void 0
                                                          : a.id;
                                                  return void 0 !== c ? String(c) : void 0;
                                              }),
                                              currentIndex: i,
                                          }))(e, t || [], i)
                                        : null;
                                },
                                r = n.currentEntity.onChange((e) => {
                                    ((e) => {
                                        if (i.isGenerativeContext) return;
                                        let n = a();
                                        if (!n) return;
                                        let r = iB({ queueState: n, backwardSize: 3, forwardSize: 17 });
                                        t.evict(new Set(r));
                                        let s = e === iM.So.MOVE_FORWARD || e === iM.So.AUTO_MOVE_FORWARD || e === iM.So.ERROR_MOVE_FORWARD,
                                            o = e === iM.So.MOVE_BACKWARD,
                                            l = [];
                                        s && iR({ queueState: n, direction: 'forward', isRequested: t.isTrackRequested })
                                            ? (l = iO({ queueState: n, direction: 'forward', batchSize: 17 }))
                                            : o && iR({ queueState: n, direction: 'backward', isRequested: t.isTrackRequested })
                                              ? (l = iO({ queueState: n, direction: 'backward', batchSize: 3 }))
                                              : s || o || (l = r),
                                            l.length > 0 && t.loadCards(l);
                                    })(null == e ? void 0 : e.lastChangeMethod);
                                }),
                                s = n.entityList.onChange(() => {
                                    (() => {
                                        if (i.isGenerativeContext) return;
                                        let e = a();
                                        if (!e) return;
                                        let n = iB({ queueState: e, backwardSize: 3, forwardSize: 17 });
                                        n.length > 0 && t.loadCards(n);
                                    })();
                                });
                            return () => {
                                null == r || r(), null == s || s();
                            };
                        }, [e, i, t]);
                    })();
                    let o = r.getCardForTrack(a);
                    if (
                        ((0, v.useEffect)(() => {
                            r.setWordsViewedStore(s);
                        }, [r, s]),
                        (0, v.useEffect)(() => {
                            o && r.markCardViewed(o.id);
                        }, [o, r]),
                        !a)
                    )
                        return null;
                    let l = String(a),
                        d = !o && r.isLoading(l),
                        u = r.isTrackResolvedWithoutCard(l) ? iT.SleepingAlice : iT.SleepTech,
                        m = !o && !d,
                        b = null != (t = iE(null == o ? void 0 : o.analyticObjectType)) ? t : eJ.ky.SleepingAlice,
                        _ = null != (i = null == o ? void 0 : o.analyticObjectId) ? i : eJ.ky.SleepingAlice;
                    return (0, c.jsx)(eW.F, {
                        blockId: eJ.LA.WordsInWave,
                        blockType: eJ.LA.WordsInWave,
                        blockPosX: 1,
                        blockPosY: 2,
                        mainObjectType: eJ.ky.Track,
                        mainObjectId: null != a ? a : void 0,
                        displayReasonId: m ? u : void 0,
                        children: (0, c.jsx)(iS.B, {
                            objectType: b,
                            objectId: _,
                            objectPosX: 1,
                            objectPosY: (null == o ? void 0 : o.action) && o.action.url ? 2 : 1,
                            objectsCount: (null == o ? void 0 : o.action) ? 2 : 1,
                            children: (0, c.jsx)(nj, { card: o, isLoading: d, className: n }),
                        }),
                    });
                });
            var nI = i(66249),
                nP = i(78176),
                nN = i(49492),
                nS = i.n(nN);
            let nw = (0, u.PA)((e) => {
                let { artists: t, open: i, positionElement: n, onOpenChange: a } = e,
                    { formatMessage: r } = (0, _.A)(),
                    {
                        settings: { isMobile: s },
                    } = (0, z.g)();
                return (0, c.jsxs)(ed.AM, {
                    isMobile: s,
                    placement: s ? 'bottom' : 'top',
                    open: i,
                    onOpenChange: a,
                    positionElement: s ? void 0 : n,
                    transform: s,
                    customRoleProps: { role: 'menu' },
                    children: [
                        null,
                        (0, c.jsx)(ed.hl, {
                            className: nS().root,
                            'aria-label': r({ id: 'interface-actions.context-menu-artists' }),
                            'data-test-id': h.OA.artists.ARTISTS_MENU,
                            children: (0, c.jsx)('div', {
                                className: nS().menuList,
                                children: t.map((e) => (0, c.jsx)(nP.V, { artist: e, className: nS().menuItem }, e.id)),
                            }),
                        }),
                    ],
                });
            });
            var nE = i(83778),
                nT = i(71483),
                nM = i(47713),
                nO = i.n(nM),
                nB = i(41677);
            let nR = (0, u.PA)((e) => {
                let {
                        lineClamp: t,
                        isVibePaused: i,
                        isNonMusic: n,
                        isGenerative: a,
                        withLink: r,
                        hasMultipleArtists: s,
                        mainAlbum: o,
                        entityTitle: l,
                        artists: u,
                        artistsRef: m,
                        isArtistsMenuOpen: v,
                        onArtistsMenuClick: b,
                    } = e,
                    { formatMessage: p } = (0, _.A)();
                if (i)
                    return (0, c.jsx)(P.HL, {
                        variant: 'span',
                        className: (0, d.$)(nO().text, nO().important),
                        lineClamp: 1,
                        'data-test-id': h.Xk.vibe.VIBE_DYNAMIC_TITLE_VIBE,
                        children: p({ id: 'entity-names.my-vibe' }),
                    });
                if (n && o)
                    return (0, c.jsx)(tu.N, {
                        href: o.url,
                        className: (0, d.$)(nO().text, nO().important),
                        'data-test-id': h.Xk.vibe.VIBE_DYNAMIC_TITLE_NON_MUSIC_ENTITY_TITLE,
                        children: (0, c.jsx)(P.HL, { variant: 'span', className: (0, d.$)(nO().text, nO().important), lineClamp: t, children: o.title }),
                    });
                if (a && l)
                    return (0, c.jsx)(P.HL, {
                        variant: 'span',
                        className: (0, d.$)(nO().text, nO().important),
                        lineClamp: t,
                        'data-test-id': h.Xk.vibe.VIBE_DYNAMIC_TITLE_GENERATIVE,
                        children: l,
                    });
                if (u) {
                    let e = (0, c.jsx)(nB.i, {
                        artists: u,
                        captionClassName: (0, d.$)(nO().text, nO().important),
                        linkClassName: (0, d.$)(nO().text, nO().important),
                        className: (0, d.$)(nO().text, nO().important),
                        lineClamp: t,
                        withLink: r,
                        withCustomTooltip: !1,
                        variant: 'breakWord',
                    });
                    return s
                        ? (0, c.jsx)(A.$, {
                              variant: 'text',
                              'aria-label': p({ id: 'interface-actions.context-menu-artists' }),
                              'aria-haspopup': 'menu',
                              'aria-expanded': v,
                              withRipple: !1,
                              onClick: b,
                              ref: m,
                              children: e,
                          })
                        : e;
                }
                return null;
            });
            var nL = i(91311),
                nV = i.n(nL);
            let nW = 'vibe-freemium-block',
                nD = (0, u.PA)((e) => {
                    let { className: t } = e,
                        { user: i } = (0, z.g)(),
                        [n, a] = (0, f.d)(),
                        {
                            openPaymentWidgetModal: r,
                            isShimmerActive: s,
                            isShimmerVisible: o,
                            mainText: l,
                            mainTextA11y: u,
                            additionText: m,
                        } = (0, V.D)({ storeName: 'music', isEnabled: i.isAuthorized && !i.hasPlus, offerElement: { element: n, intersectionPropertyId: nW } }),
                        v = (0, y.L)(() =>
                            i.isAuthorized
                                ? (0, c.jsx)(X.b, {
                                      ref: a,
                                      'data-intersection-property-id': nW,
                                      mainText: l,
                                      ariaLabel: u,
                                      additionText: m,
                                      isShimmerActive: s,
                                      isShimmerVisible: o,
                                      onClick: r,
                                      className: nV().button,
                                      mainTextClassName: nV().buttonMainText,
                                      additionTextClassName: nV().buttonAdditionText,
                                      'data-test-id': h.Xk.vibe.VIBE_FREEMIUM_BUTTON,
                                  })
                                : (0, c.jsx)(q.H, {
                                      size: 'l',
                                      variant: 'default',
                                      buttonText: (0, c.jsx)(P.HL, {
                                          variant: 'span',
                                          size: 'l',
                                          children: (0, c.jsx)(p.A, { id: 'authorization.enter-and-listen-button' }),
                                      }),
                                      className: nV().button,
                                  }),
                        );
                    return (0, c.jsxs)('div', {
                        className: (0, d.$)(nV().root, t),
                        'data-test-id': h.Xk.vibe.VIBE_FREEMIUM_BLOCK,
                        children: [
                            v,
                            (0, c.jsx)(P.HL, {
                                variant: 'span',
                                size: 'l',
                                className: nV().description,
                                'data-test-id': h.Xk.vibe.VIBE_FREEMIUM_BLOCK_DESCRIPTION,
                                children: (0, c.jsx)(p.A, { id: 'buy-subscription.new-vibe-description', values: { nbsp: ' ' } }),
                            }),
                        ],
                    });
                }),
                nF = (0, u.PA)(() => {
                    var e, t, i, n, a, r, s, o, l, u, m, b;
                    let {
                            sonataState: p,
                            experiments: h,
                            user: g,
                            paywall: { modal: f },
                            vibe: A,
                        } = (0, z.g)(),
                        { pageId: C, pageEntityId: j } = (0, L.$)(),
                        k = (0, ni.l)({ mainObjectType: eJ.ky.Track }),
                        { resetContext: I } = (0, U.B)({ seeds: [em.M1], pageIdForFrom: C, blockIdForFrom: ''.concat(eJ.LA.MyWave, '-').concat(eR.U.RADIO) }),
                        { isEnabled: P } = (0, tc.e)(),
                        [swapVibeAnimationAndWheel, setSwapVibeAnimationAndWheel] = (0, v.useState)(
                            window?.nativeSettings?.get('modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel') ?? false,
                        ),
                        [hideArtistCoverOnNewWave, setHideArtistCoverOnNewWave] = (0, v.useState)(
                            window?.nativeSettings?.get('modSettings.vibeAnimationEnhancement.hideArtistCoverOnNewWave') ?? false,
                        ),
                        N = (() => {
                            var e, t, i, n, a, r;
                            let { sonataState: s } = (0, z.g)(),
                                o = (0, tt.e)(),
                                { formatMessage: l } = (0, _.A)(),
                                c = null == o ? void 0 : o.state.currentContext.value,
                                d = null == o ? void 0 : o.state.queueState.currentEntity.value,
                                u = null == d ? void 0 : d.sourceContext;
                            if (!(null == c ? void 0 : c.data.type)) return;
                            let m = (function (e, t) {
                                switch (t) {
                                    case nE.h.SEARCH:
                                        return e({ id: 'entity-names.search' });
                                    case nE.h.MUSIC_HISTORY:
                                    case nE.h.MUSIC_HISTORY_SEARCH:
                                        return e({ id: 'entity-names.music-history' });
                                    case nE.h.DOWNLOADED_TRACKS:
                                    case nE.h.USER_TRACKS:
                                        return e({ id: 'entity-names.collection' });
                                    case nE.h.ARTIST_FAMILIAR_FROM_WAVE:
                                        return e({ id: 'page.familiar-vibe' });
                                    case nE.h.ARTIST_MY_COLLECTION:
                                        return e({ id: 'page.familiar-collection' });
                                    default:
                                        return;
                                }
                            })(l, null == u ? void 0 : u.data.sourceContextType);
                            if (m) return m;
                            switch (c.data.type) {
                                case nT.K.Album:
                                    if (null == (e = s.entityMeta) ? void 0 : e.isPodcast) return l({ id: 'entity-names.podcast' });
                                    if (null == (t = s.entityMeta) ? void 0 : t.isAudiobook) return l({ id: 'entity-names.book' });
                                    if (null == (i = s.entityMeta) ? void 0 : i.isFairyTale) return l({ id: 'entity-names.fairytale' });
                                    return c.data.meta.title;
                                case nT.K.Playlist:
                                    return c.data.meta.title;
                                case nT.K.Vibe: {
                                    let e = null == (n = c.data.meta.session) ? void 0 : n.wave;
                                    if ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === em.M1)
                                        return l({ id: 'entity-names.my-vibe' });
                                    return l({ id: 'vibe-actions.vibe-context' }, { type: null == e ? void 0 : e.type, name: null == e ? void 0 : e.name });
                                }
                                case nT.K.Artist:
                                    return l({ id: 'entity-names.artist-popular-tracks' });
                                case nT.K.Various:
                                    return null == (r = s.entityMeta) || null == (a = r.mainAlbum) ? void 0 : a.title;
                                case nT.K.Generative:
                                    return l({ id: 'entity-names.generative' });
                                default:
                                    return;
                            }
                        })(),
                        S = (() => {
                            let e = (0, tt.e)(),
                                t = null == e ? void 0 : e.state.currentContext.value;
                            if ((null == t ? void 0 : t.data.type) === nT.K.Vibe) {
                                var i, n;
                                let e = null == (i = t.data.meta.session) ? void 0 : i.wave;
                                if (
                                    ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === em.M1) ||
                                    ((null == e ? void 0 : e.seeds.length) === 1 && (null == e || null == (n = e.seeds[0]) ? void 0 : n.includes(em.yx)))
                                )
                                    return !1;
                            }
                            return !0;
                        })(),
                        w = !p.isPlaying && (p.isVibeContext || !p.entityMeta),
                        E = !p.isPlaying && !S,
                        T = null == (e = p.entityMeta) ? void 0 : e.mainArtist,
                        M = null == (t = p.entityMeta) ? void 0 : t.mainAlbum,
                        R = null == (i = p.entityMeta) ? void 0 : i.artists,
                        V = !!(null == (n = p.entityMeta) ? void 0 : n.isNonUserGenerated),
                        W = !!(null == (a = p.entityMeta) ? void 0 : a.isNonMusic),
                        D = p.isGenerativeContext,
                        F = !hideArtistCoverOnNewWave && !!(null == T || null == (r = T.cutoutCover) ? void 0 : r.uri) && !w,
                        K = F && T,
                        X = (0, nI.A)(null != R ? R : []) > 1,
                        q = V && !X,
                        G = (0, v.useRef)(null),
                        {
                            isArtistsMenuOpen: Y,
                            artistsMenuPosition: $,
                            handleArtistsMenuClick: Q,
                            handleArtistsMenuOpenChange: Z,
                        } = ((e) => {
                            let { ref: t } = e,
                                [i, n] = (0, v.useState)(!1),
                                [a, r] = (0, v.useState)(null);
                            return {
                                isArtistsMenuOpen: i,
                                artistsMenuPosition: a,
                                handleArtistsMenuClick: (0, x.c)((e) => {
                                    if (e.detail > 0) {
                                        let { clientX: t, clientY: i } = e;
                                        r({ getBoundingClientRect: () => new DOMRect(t, i, 0, 0) });
                                    } else r(t.current);
                                    n(!0);
                                }),
                                handleArtistsMenuOpenChange: (0, x.c)((e) => {
                                    n(e), e || r(null);
                                }),
                            };
                        })({ ref: G }),
                        J = !g.hasPlus || !g.isAuthorized,
                        ee = (0, y.L)(() => (w ? t3 : F ? t6 : t4)),
                        et = (0, y.L)(() => (J ? { ...ee, maxFontSize: Math.min(ee.maxFontSize, 72), fallbackMaxLines: 2 } : ee)),
                        ei =
                            g.hasPlus &&
                            (h.checkExperiment(H.z.WebNextWaveScreenWordsInWave, 'on') || h.checkExperiment(H.z.WebNextWaveScreenWordsInWave, 'on_with_onyx')),
                        en = A.isShuffleVibe && p.isVibeContext,
                        ea = (0, e0.OH)(en || null == (s = p.entityMeta) ? void 0 : s.averageColor);
                    (0, v.useEffect)(() => {
                        X || Z(!1);
                    }, [Z, X]),
                        (0, v.useEffect)(() => {
                            const e = (event, key, value) => {
                                'modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel' === key && setSwapVibeAnimationAndWheel(value);
                                'modSettings.vibeAnimationEnhancement.hideArtistCoverOnNewWave' === key && setHideArtistCoverOnNewWave(value);
                            };

                            const unsub = window.desktopEvents?.on('NATIVE_STORE_UPDATE', e);

                            return () => {
                                unsub();
                            };
                        }, []),
                        (0, v.useEffect)(() => {
                            j && k(!0);
                        }, [k, j]),
                        (0, v.useEffect)(
                            () => () => {
                                k(!1);
                            },
                            [k],
                        );
                    let er = (0, y.L)(() =>
                            h.checkExperiment(H.z.WebNextShaderFallbackEnabled, 'on')
                                ? (0, c.jsx)(O, { className: nO().vibeAnimation })
                                : (0, c.jsx)(B, { className: nO().vibeAnimation, averageColor: ea.primary }),
                        ),
                        es = (0, x.c)(() => {
                            g.hasPlus, I();
                        }),
                        eo = (0, y.L)(() => {
                            let e = p.entityMeta,
                                t = (0, c.jsx)('div', {
                                    className: (0, d.$)(nO().textContainer, { [nO().textContainer_withCover]: F && e, [nO().textContainer_playing]: !w }),
                                    children: (0, c.jsx)(im, {
                                        textOptions: et,
                                        children: (0, c.jsx)(nR, {
                                            isVibePaused: w,
                                            isNonMusic: W,
                                            isGenerative: D,
                                            withLink: q,
                                            hasMultipleArtists: X,
                                            mainAlbum: M,
                                            entityTitle: null == e ? void 0 : e.title,
                                            artists: R,
                                            artistsRef: G,
                                            isArtistsMenuOpen: Y,
                                            onArtistsMenuClick: Q,
                                        }),
                                    }),
                                });
                            return e
                                ? (0, c.jsx)(eW.F, {
                                      blockId: eJ.LA.MyWave,
                                      blockType: eJ.LA.MyWave,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      mainObjectType: eJ.ky.Track,
                                      mainObjectId: e.id,
                                      children: (0, c.jsxs)(iS.B, {
                                          objectType: eJ.ky.Artist,
                                          objectId: e.id,
                                          objectPosX: 1,
                                          objectPosY: 1,
                                          objectsCount: 1,
                                          children: [
                                              t,
                                              K && (0, c.jsx)('div', { className: nO().artistCover, children: (0, c.jsx)(ia, { artist: T, withLink: q, onClick: Q }) }),
                                              R && X && (0, c.jsx)(nw, { artists: R, open: Y, onOpenChange: Z, positionElement: $ }),
                                          ],
                                      }),
                                  })
                                : t;
                        });
                    return (0, c.jsxs)(eM.r, {
                        page: eO.l.HOME_SCREEN,
                        places: [eB.R.MY_WAVE],
                        children: [
                            P && (0, c.jsx)(iN, {}),
                            (0, c.jsxs)('div', {
                                className: (0, d.$)(nO().root, { [nO().root_reshuffle]: en, [nO().root_withoutPlus]: !g.hasPlus }),
                                style: {
                                    flexDirection: swapVibeAnimationAndWheel ? 'row-reverse' : 'row',
                                },
                                children: [
                                    (0, c.jsx)(iC, { className: nO().wheel }),
                                    (0, c.jsxs)('div', {
                                        className: (0, d.$)(nO().meta, { [nO().meta_noPlus]: !g.hasPlus }),
                                        children: [
                                            (0, c.jsx)(eW.F, {
                                                blockId: eJ.LA.Toolbar,
                                                blockType: eJ.LA.Toolbar,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 1,
                                                children: (0, c.jsx)(iS.B, {
                                                    objectType: eJ.ky.Wave,
                                                    objectId: em.M1,
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: (0, c.jsx)(iA, { className: nO().context, context: N, isResetAvailable: S, isHidden: E, onClick: es }),
                                                }),
                                            }),
                                            (0, c.jsxs)('div', {
                                                className: nO().entityMeta,
                                                children: [
                                                    er,
                                                    (0, c.jsx)(
                                                        'div',
                                                        { className: nO().entityMetaBody, children: eo },
                                                        ''.concat(null != (b = null == (o = p.entityMeta) ? void 0 : o.idWithContext) ? b : 'default', '-').concat(w),
                                                    ),
                                                ],
                                            }),
                                            (0, c.jsxs)('div', {
                                                className: (0, d.$)(nO().playerBlock, { [nO().playerBlock_withFreemium]: !g.hasPlus }),
                                                children: [
                                                    (0, c.jsx)(eW.F, {
                                                        blockId: eJ.LA.MyWave,
                                                        blockType: eJ.LA.MyWave,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: eJ.ky.Track,
                                                        mainObjectId: null == (l = p.entityMeta) ? void 0 : l.id,
                                                        children: (0, c.jsx)(iS.B, {
                                                            objectType: eJ.ky.Track,
                                                            objectId: null == (u = p.entityMeta) ? void 0 : u.id,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            objectsCount: 1,
                                                            children: (0, c.jsx)(t7, {}),
                                                        }),
                                                    }),
                                                    ei &&
                                                        (0, c.jsx)('div', {
                                                            className: nO().words,
                                                            children: (0, c.jsx)(nk, { trackId: null == (m = p.entityMeta) ? void 0 : m.id }),
                                                        }),
                                                    !g.hasPlus && (0, c.jsx)(nD, { className: nO().freemiumBlock }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                nU = (0, u.PA)((e) => {
                    var t, i;
                    let { withVideoModal: n } = e,
                        {
                            main: a,
                            user: r,
                            experiments: s,
                            releaseNotes: o,
                            fullscreenVideoPlayer: l,
                            sonataState: { entityMeta: u },
                            settings: { isMobile: b },
                        } = (0, z.g)(),
                        { formatMessage: w } = (0, _.A)(),
                        E = (0, ez.H)(),
                        { contentScrollRef: T, setContentScrollRef: M } = (0, eu.g)(),
                        [O, B] = (0, f.d)(),
                        R = (0, eE.d)(),
                        L = (0, ew.C)(),
                        { theme: V } = (0, eX.W)(),
                        W = !0,
                        D = (0, eH.Z)(null != (i = null == (t = a.specialHeader) ? void 0 : t.url) ? i : ''),
                        F = s.checkExperiment(H.z.WebNextNewWaveTabFeedbackForm, 'on'),
                        U = (0, eH.Z)('/slides/special/my_vibe_onboarding');
                    const pulseSyncShowAudioQualityOnNewWaveSettingKey = 'modSettings.vibeAnimationEnhancement.showAudioQualityOnNewWave';
                    let [isRemoteDeviceConnected, setIsRemoteDeviceConnected] = (0, v.useState)(window.isRemoteDeviceConnected ?? !1);
                    let [remoteDevice, setRemoteDevice] = (0, v.useState)(window.remoteDevice ?? null);
                    let [pulseSyncTrackQualityInfo, setPulseSyncTrackQualityInfo] = (0, v.useState)(window?.PulseSyncTrackQuality?.getLastInfo?.() ?? null);
                    let [pulseSyncWasapiExclusiveOutputState, setPulseSyncWasapiExclusiveOutputState] = (0, v.useState)(null);
                    let [pulseSyncShowAudioQualityOnNewWave, setPulseSyncShowAudioQualityOnNewWave] = (0, v.useState)(
                        () => window.nativeSettings?.get?.(pulseSyncShowAudioQualityOnNewWaveSettingKey) !== !1,
                    );
                    (0, v.useEffect)(() => {
                        var e, t;
                        if (!n || !R) return;
                        let i = (0, eG.j)(),
                            a = null != (e = null == i ? void 0 : i.get(eq.K.IDS)) ? e : null,
                            r = null != (t = null == i ? void 0 : i.get(eq.K.ACTIVE_INDEX)) ? t : null,
                            { clipIds: s, activeClipIndex: o } = (0, eP.V)(a, r);
                        L(s, o), l.setOpenedFromMain();
                    }, [n, R, l, L]),
                        (0, v.useEffect)(
                            () => () => {
                                a.reset(), W || a.landing.reset();
                            },
                            [a, a.landing, W],
                        ),
                        (0, v.useEffect)(() => {
                            const updatePulseSyncTrackQualityInfo = (format) => {
                                setPulseSyncTrackQualityInfo(window?.PulseSyncTrackQuality?.updateFromFormat?.(format) ?? null);
                            };
                            const lastInfo = window?.PulseSyncTrackQuality?.getLastInfo?.();
                            if (lastInfo) {
                                setPulseSyncTrackQualityInfo(lastInfo);
                            }
                            window?.nativeAudioOutput
                                ?.getYaspAudioFormat?.()
                                ?.then?.((format) => {
                                    updatePulseSyncTrackQualityInfo(format);
                                })
                                ?.catch?.(() => {});
                            const unsubscribe = window.desktopEvents?.on?.('NATIVE_AUDIO_OUTPUT_YASP_AUDIO_FORMAT_CHANGED', (event, format) => {
                                updatePulseSyncTrackQualityInfo(format);
                            });
                            return () => {
                                if (typeof unsubscribe === 'function') unsubscribe();
                            };
                        }, []),
                        (0, v.useEffect)(() => {
                            const updatePulseSyncWasapiExclusiveOutputState = (state) => {
                                setPulseSyncWasapiExclusiveOutputState(state ?? null);
                            };
                            window?.nativeAudioOutput
                                ?.getWasapiExclusiveStatus?.()
                                ?.then?.((status) => {
                                    updatePulseSyncWasapiExclusiveOutputState(status?.outputState ?? null);
                                })
                                ?.catch?.(() => {});
                            const unsubscribe = window.desktopEvents?.on?.('NATIVE_AUDIO_OUTPUT_WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED', (event, state) => {
                                updatePulseSyncWasapiExclusiveOutputState(state);
                            });
                            return () => {
                                if (typeof unsubscribe === 'function') unsubscribe();
                            };
                        }, []),
                        (0, v.useEffect)(() => {
                            const updatePulseSyncShowAudioQualityOnNewWave = (event, key, value) => {
                                if (key === pulseSyncShowAudioQualityOnNewWaveSettingKey) {
                                    setPulseSyncShowAudioQualityOnNewWave(value !== !1);
                                }
                            };
                            const unsubscribe = window.desktopEvents?.on?.('NATIVE_STORE_UPDATE', updatePulseSyncShowAudioQualityOnNewWave);
                            return () => {
                                if (typeof unsubscribe === 'function') unsubscribe();
                            };
                        }, []),
                        (0, eU.J)(a.landing.isResolved),
                        (0, v.useEffect)(() => {
                            let e = (device_info) => {
                                    setIsRemoteDeviceConnected(!0),
                                        setRemoteDevice(device_info),
                                        (window.isRemoteDeviceConnected = !0),
                                        (window.remoteDevice = device_info);
                                },
                                t = () => {
                                    setIsRemoteDeviceConnected(!1), setRemoteDevice(null), (window.isRemoteDeviceConnected = !1), (window.remoteDevice = null);
                                };
                            return (
                                (window.onRemoteDeviceConnected || (window.onRemoteDeviceConnected = [])).push(e),
                                (window.onRemoteDeviceDisconnected || (window.onRemoteDeviceDisconnected = [])).push(t),
                                () => {
                                    (window.onRemoteDeviceConnected = window.onRemoteDeviceConnected.filter((t) => t !== e)),
                                        (window.onRemoteDeviceDisconnected = window.onRemoteDeviceDisconnected.filter((e) => e !== t));
                                }
                            );
                        }, []);
                    const deviceTypeMap = {
                        UNSPECIFIED: 'Неизвестного устройства',
                        WEB: 'Сайта',
                        ANDROID: 'Android приложения',
                        IOS: 'IOS приложения',
                        SMART_SPEAKER: 'Умной колонки',
                        WEB_TV: 'ТВ',
                        ANDROID_TV: 'Android ТВ',
                        APPLE_TV: 'Apple ТВ',
                        ANDROID_WEAR: 'Android часов',
                        WEB_DESKTOP: 'ПК приложения',
                    };
                    let K = s.checkExperiment(H.z.WebNextDisableVibe, 'on'),
                        X = (0, x.c)(() => {
                            o.isReady && o.modal.open();
                        }),
                        q = (0, v.useMemo)(() => (K ? { 'margin-block-start': '1vh' } : {}), [K]),
                        pulseSyncWasapiIsActive =
                            (null == pulseSyncWasapiExclusiveOutputState ? void 0 : pulseSyncWasapiExclusiveOutputState.active) === !0 ||
                            (null == pulseSyncWasapiExclusiveOutputState || null == pulseSyncWasapiExclusiveOutputState.session
                                ? void 0
                                : pulseSyncWasapiExclusiveOutputState.session.state) === 'running',
                        pulseSyncYnisonBubble = (0, v.useMemo)(() => {
                            if (!isRemoteDeviceConnected) return null;

                            const remoteControlText = `Управление с ${deviceTypeMap?.[remoteDevice?.info?.type] ?? ''}: ${remoteDevice?.info?.title ?? ''}`;

                            return (0, c.jsx)(A.$, {
                                color: 'secondary',
                                radius: 'xl',
                                'aria-label': remoteControlText,
                                className: eZ().beta,
                                style: {
                                    marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                    color: 'white',
                                },
                                withHover: !1,
                                children: (0, c.jsx)(P.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: remoteControlText,
                                }),
                            });
                        }, [isRemoteDeviceConnected, remoteDevice?.info?.type, remoteDevice?.info?.title, deviceTypeMap]),
                        pulseSyncAudioQualityBubble = (0, v.useMemo)(() => {
                            return (null == pulseSyncTrackQualityInfo ? void 0 : pulseSyncTrackQualityInfo.label) &&
                                (pulseSyncShowAudioQualityOnNewWave || pulseSyncWasapiIsActive)
                                ? (0, c.jsx)(A.$, {
                                      color: 'secondary',
                                      radius: 'xl',
                                      'aria-label': 'Качество трека: '.concat(pulseSyncTrackQualityInfo.label),
                                      className: eZ().beta,
                                      style: { marginInlineEnd: 'var(--ym-spacer-size-xs)', color: 'white' },
                                      withHover: !1,
                                      children: (0, c.jsx)(P.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          children: pulseSyncTrackQualityInfo.label,
                                      }),
                                  })
                                : null;
                        }, [pulseSyncTrackQualityInfo, pulseSyncShowAudioQualityOnNewWave, pulseSyncWasapiIsActive]),
                        pulseSyncWasapiStateBubble = (0, v.useMemo)(
                            () =>
                                pulseSyncWasapiIsActive
                                    ? (0, c.jsx)(A.$, {
                                          color: 'secondary',
                                          radius: 'xl',
                                          'aria-label': 'WASAPI Exclusive активен',
                                          className: eZ().beta,
                                          style: { marginInlineEnd: 'var(--ym-spacer-size-xs)', color: 'white' },
                                          withHover: !1,
                                          children: (0, c.jsx)(P.HL, {
                                              variant: 'div',
                                              type: 'text',
                                              size: 's',
                                              weight: 'medium',
                                              children: 'WASAPI Exclusive',
                                          }),
                                      })
                                    : null,
                            [pulseSyncWasapiIsActive],
                        ),
                        pulseSyncWasapiDeviceBubble = (0, v.useMemo)(() => {
                            let e =
                                (null == pulseSyncWasapiExclusiveOutputState ||
                                null == pulseSyncWasapiExclusiveOutputState.session ||
                                null == pulseSyncWasapiExclusiveOutputState.session.rendererState
                                    ? void 0
                                    : pulseSyncWasapiExclusiveOutputState.session.rendererState.deviceName) ??
                                (null == pulseSyncWasapiExclusiveOutputState ||
                                null == pulseSyncWasapiExclusiveOutputState.session ||
                                null == pulseSyncWasapiExclusiveOutputState.session.lastRendererServiceState
                                    ? void 0
                                    : pulseSyncWasapiExclusiveOutputState.session.lastRendererServiceState.deviceName) ??
                                null;
                            return pulseSyncWasapiIsActive && e
                                ? (0, c.jsx)(A.$, {
                                      color: 'secondary',
                                      radius: 'xl',
                                      'aria-label': 'Устройство WASAPI Exclusive: '.concat(e),
                                      title: e,
                                      className: eZ().beta,
                                      style: { marginInlineEnd: 'var(--ym-spacer-size-xs)', color: 'white', maxWidth: '15rem', overflow: 'hidden' },
                                      withHover: !1,
                                      children: (0, c.jsx)(P.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          style: { maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
                                          children: e,
                                      }),
                                  })
                                : null;
                        }, [pulseSyncWasapiExclusiveOutputState, pulseSyncWasapiIsActive]),
                        G = (0, v.useMemo)(() => {
                            if (s.checkExperiment(H.z.WebNextBetaLabel, 'off')) return null;
                            {
                                let e = s.checkExperiment(H.z.WebNextBetaLabel, 'version'),
                                    t = w({ id: 'desktop.app-version' }, { version: E }),
                                    i = e ? E : 'Beta';
                                return (0, c.jsxs)(I.m_, {
                                    placement: 'left',
                                    offsetOptions: 4,
                                    children: [
                                        (0, c.jsx)(A.$, {
                                            color: 'secondary',
                                            radius: 'xl',
                                            'aria-label': e ? t : 'Beta '.concat(t),
                                            className: (0, d.$)(eZ().beta, { [eZ().beta_withReleaseNotes]: o.isReady }),
                                            onClick: X,
                                            'data-test-id': h.Xk.main.RELEASE_NOTES_BUTTON,
                                            children: (0, c.jsx)(P.HL, { variant: 'div', type: 'text', size: 's', weight: 'medium', children: i }),
                                        }),
                                        (0, c.jsx)(I.ZI, { children: E }),
                                    ],
                                });
                            }
                        }, [s, w, X, o.isReady, E]),
                        Y = (0, v.useMemo)(
                            () =>
                                F
                                    ? (0, c.jsxs)(j.N, {
                                          onClick: U,
                                          className: eZ().feedbackForm,
                                          children: [
                                              (0, c.jsx)(P.HL, {
                                                  className: eZ().feedbackFormCaption,
                                                  lineClamp: 3,
                                                  size: 'm',
                                                  variant: 'span',
                                                  weight: 'bold',
                                                  children: (0, c.jsx)(p.A, { id: 'page.new-wave-feedback-form-title' }),
                                              }),
                                              (0, c.jsx)('div', {
                                                  className: eZ().feedbackFormImageContainer,
                                                  children: (0, c.jsx)(C._V, {
                                                      className: eZ().feedbackFormImage,
                                                      fit: 'cover',
                                                      src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69e0ffdc6159081b722c77ef/orig',
                                                      withAvatarReplace: !0,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                            [U, F],
                        ),
                        $ = (0, d.$)(eZ().betaSlot, { [eZ().betaSlot_newVibe]: W }),
                        Q = (0, v.useMemo)(() => {
                            if (!a.specialHeader) return {};
                            let e = V === eK.S.Light ? a.specialHeader.lightTheme : a.specialHeader.darkTheme;
                            return { '--special-button-background': e.backgroundColor, '--special-button-color': e.textColor };
                        }, [a.specialHeader, V]),
                        Z = (0, y.L)(() => {
                            let e = s.checkExperiment(H.z.WebNextRewind2024, 'on');
                            return a.specialHeader
                                ? (0, c.jsxs)('div', {
                                      className: eZ().specialHeaderContainer,
                                      children: [
                                          e &&
                                              (0, c.jsx)(C._V, {
                                                  src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69203c15cffc41172f18a125/orig',
                                                  withAvatarReplace: !0,
                                                  className: eZ().specialHeaderImage,
                                                  fit: 'contain',
                                              }),
                                          (0, c.jsx)(A.$, {
                                              color: 'secondary',
                                              size: 'default',
                                              radius: 'xxxl',
                                              role: 'link',
                                              className: eZ().specialHeader,
                                              withHover: !1,
                                              style: Q,
                                              onClick: D,
                                              children: a.specialHeader.title,
                                          }),
                                      ],
                                  })
                                : null;
                        }),
                        J = (0, y.L)(() =>
                            W
                                ? null
                                : s.checkExperiment(H.z.WebNextFooterDisclaimer, 'on')
                                  ? (0, c.jsx)(eY.w, { className: eZ().footer })
                                  : (0, c.jsx)(e$.A, { children: (0, c.jsx)(eY.w, { className: eZ().footer }) }),
                        ),
                        ee = (0, x.c)(() => {
                            if (!a.landing.isLoaded) return;
                            let e = r.isAuthorized ? g.p.MAIN : g.p.MAIN_NOLOGIN;
                            return a.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        }),
                        et = (0, x.c)(() => {
                            if (a.landing.isLoaded) return a.landing.getSkeleton({ id: g.p.WEB_MAIN, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    if (((0, eN.y)(et), a.landing.isNeededToLoad && !W)) {
                        let e = r.isAuthorized ? g.p.MAIN : g.p.MAIN_NOLOGIN,
                            t = [a.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 }), a.getSpecialHeader()];
                        (0, v.use)(Promise.allSettled(t));
                    }
                    n && !R && (0, m.notFound)();
                    let ei = (0, y.L)(() =>
                        W
                            ? (0, c.jsx)(eF.n, {
                                  pageId: eV._Q.WAVE_LANDING_SCREEN,
                                  pageEntityId: null == u ? void 0 : u.id,
                                  children: (0, c.jsx)(eD.j, {
                                      children: (0, c.jsxs)('div', {
                                          className: eZ().vibeWidgetContainer,
                                          'data-test-id': h.Xk.main.MAIN_PAGE,
                                          children: [
                                              (0, c.jsxs)('div', {
                                                  className: eZ().actionsBar,
                                                  children: [b && (0, c.jsx)(eT.F, { withMeta: !1, variant: 'mobile', className: eZ().userProfile }), Y],
                                              }),
                                              (0, c.jsx)(nF, {}),
                                              (0, c.jsxs)('div', {
                                                  className: $,
                                                  children: [
                                                      pulseSyncYnisonBubble,
                                                      pulseSyncWasapiStateBubble,
                                                      pulseSyncWasapiDeviceBubble,
                                                      pulseSyncAudioQualityBubble,
                                                      G,
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                              })
                            : (0, c.jsx)(eF.n, {
                                  pageId: eV._Q.HOME,
                                  children: (0, c.jsx)(eS.h, {
                                      scrollElement: T,
                                      headerElement: O,
                                      children: (0, c.jsxs)(k.N, {
                                          className: eZ().root,
                                          containerClassName: eZ().content,
                                          ref: M,
                                          'data-test-id': h.Xk.main.MAIN_PAGE,
                                          children: [
                                              Z,
                                              (0, c.jsxs)('div', {
                                                  className: $,
                                                  children: [pulseSyncWasapiStateBubble, pulseSyncWasapiDeviceBubble, pulseSyncAudioQualityBubble, G],
                                              }),
                                              !K &&
                                                  (0, c.jsx)(eW.F, {
                                                      blockIdForFrom: eL.h.RUP_MAIN_RADIO,
                                                      blockId: eR.U.RUP,
                                                      blockType: eR.U.RUP,
                                                      blockPosX: 0,
                                                      blockPosY: 0,
                                                      objectsCount: 0,
                                                      children: (0, c.jsx)(ek, { className: eZ().vibe }),
                                                  }),
                                              (0, c.jsx)(N.E, {
                                                  landing: a.landing,
                                                  headerConcealerComponent: (0, c.jsx)('div', { ref: B }),
                                                  errorComponent: (0, c.jsx)(S.SomethingWentWrong, { className: eZ().error, withBackwardControl: !1 }),
                                                  containerClassName: eZ().landing,
                                                  containerStyle: q,
                                                  tabWithHeadingTitle: !0,
                                                  tabWithCovers: !0,
                                                  tabWithSubtitle: !0,
                                              }),
                                              J,
                                          ],
                                      }),
                                  }),
                              }),
                    );
                    return (0, c.jsxs)(eM.r, { page: eO.l.HOME_SCREEN, places: [eB.R.MY_WAVE], children: [ei, (0, c.jsx)(eI.p, { onFinishSuccess: ee })] });
                });
        },
        29025: (e) => {
            e.exports = { root: 'WordsCardPopoverDisclaimer_root__yyXMs', description: 'WordsCardPopoverDisclaimer_description__0RhrR' };
        },
        29207: (e) => {
            e.exports = {
                root: 'VibeResetButton_root__ju8pE',
                root_visible: 'VibeResetButton_root_visible__OHA1w',
                'fade-in': 'VibeResetButton_fade-in__4Dgxq',
                root_q2v: 'VibeResetButton_root_q2v__K9GdD',
                container: 'VibeResetButton_container__JO2j1',
                icon: 'VibeResetButton_icon__2FkgG',
                button: 'VibeResetButton_button__i8Cvy',
                button_q2v: 'VibeResetButton_button_q2v__NX6iG',
                context: 'VibeResetButton_context__hsTlv',
                context_q2v: 'VibeResetButton_context_q2v__OVhK6',
            };
        },
        30480: (e) => {
            e.exports = {
                root: 'WordsCardFullscreen_root__CiG4W',
                modalContent: 'WordsCardFullscreen_modalContent__1SYUO',
                closeButtonWrapper: 'WordsCardFullscreen_closeButtonWrapper__iH_IT',
                layout: 'WordsCardFullscreen_layout__KJMiD',
                contentArea: 'WordsCardFullscreen_contentArea__CKea4',
                contentArea_withMessageScroll: 'WordsCardFullscreen_contentArea_withMessageScroll__td5cI',
                content: 'WordsCardFullscreen_content__JA2fN',
                messageScroll: 'WordsCardFullscreen_messageScroll__uUYjh',
                message: 'WordsCardFullscreen_message__UmEx9',
                messageScroll_scrollable: 'WordsCardFullscreen_messageScroll_scrollable__CfU_t',
                primaryAction: 'WordsCardFullscreen_primaryAction__HxPI9',
                actions: 'WordsCardFullscreen_actions__cT5Cp',
                sourceItem: 'WordsCardFullscreen_sourceItem__WL48h',
                sourceItem_withoutIcon: 'WordsCardFullscreen_sourceItem_withoutIcon__os6rv',
                sourceIcon: 'WordsCardFullscreen_sourceIcon__IDX9f',
                actionText: 'WordsCardFullscreen_actionText__09dJk',
                feedback: 'WordsCardFullscreen_feedback__E7bsR',
                feedbackButton: 'WordsCardFullscreen_feedbackButton__HwM10',
                feedbackButton_active: 'WordsCardFullscreen_feedbackButton_active__fE5dO',
                feedbackDivider: 'WordsCardFullscreen_feedbackDivider__xBnSf',
                disclaimer: 'WordsCardFullscreen_disclaimer__NTfeR',
            };
        },
        37875: (e) => {
            e.exports = {
                root: 'WordsCardFullscreenShimmer_root__QYKVQ',
                topGroup: 'WordsCardFullscreenShimmer_topGroup__wA7gB',
                line: 'WordsCardFullscreenShimmer_line__5pJmz',
                topLinePrimary: 'WordsCardFullscreenShimmer_topLinePrimary__EZtz5',
                topLineSecondary: 'WordsCardFullscreenShimmer_topLineSecondary___ov_Y',
                main: 'WordsCardFullscreenShimmer_main__QGRY4',
                mainLine: 'WordsCardFullscreenShimmer_mainLine__alNOP',
                bottom: 'WordsCardFullscreenShimmer_bottom__1YoRA',
                bottomLine: 'WordsCardFullscreenShimmer_bottomLine__jTQt4',
            };
        },
        39472: (e, t, i) => {
            'use strict';
            function n() {
                return window.VERSION;
            }
            i.d(t, { H: () => n });
        },
        39868: (e) => {
            e.exports = { root: 'SpeedMenuItem_root__7j8VN', icon: 'SpeedMenuItem_icon__EyXPA' };
        },
        43315: (e) => {
            e.exports = { root: 'VibeArtistCover_root__LSPPQ', cover: 'VibeArtistCover_cover__AEtTV' };
        },
        47713: (e) => {
            e.exports = {
                root: 'VibePage_root__dGvPX',
                root_reshuffle: 'VibePage_root_reshuffle__gz97v',
                root_withoutPlus: 'VibePage_root_withoutPlus__xZ8r4',
                artistCover: 'VibePage_artistCover__RQee1',
                textContainer_withCover: 'VibePage_textContainer_withCover__U2z1l',
                freemiumBlock: 'VibePage_freemiumBlock__uhLoT',
                meta: 'VibePage_meta__kWwRE',
                meta_noPlus: 'VibePage_meta_noPlus__YtQX1',
                entityMeta: 'VibePage_entityMeta__dhDch',
                entityMetaBody: 'VibePage_entityMetaBody__EITDL',
                'meta-fade-in': 'VibePage_meta-fade-in__H0xeT',
                vibeAnimation: 'VibePage_vibeAnimation__qQ6ci',
                textContainer: 'VibePage_textContainer__odK0M',
                context: 'VibePage_context__CoYut',
                text: 'VibePage_text__sPFhf',
                important: 'VibePage_important__qFvbL',
                button: 'VibePage_button__ZWQxy',
                playerBlock: 'VibePage_playerBlock__b6ZRu',
                playerBlock_withFreemium: 'VibePage_playerBlock_withFreemium__8Avmc',
                words: 'VibePage_words__39Mii',
                wheel: 'VibePage_wheel__E_p8_',
                textContainer_playing: 'VibePage_textContainer_playing__xJphv',
            };
        },
        49492: (e) => {
            e.exports = { root: 'ArtistsMenu_root__j5U2g', menuList: 'ArtistsMenu_menuList__4v6Uo', menuItem: 'ArtistsMenu_menuItem__lievm' };
        },
        49723: (e) => {
            e.exports = {
                root: 'VibeSettings_root__ufZlV',
                popover: 'VibeSettings_popover__VKqUc',
                overlay: 'VibeSettings_overlay__pusb4',
                toggleSettingsButton: 'VibeSettings_toggleSettingsButton__j6fIU',
                header: 'VibeSettings_header__OAWe2',
                actions: 'VibeSettings_actions__ckbMt',
                swipeableArea: 'VibeSettings_swipeableArea__Xx0nx',
                ripple: 'VibeSettings_ripple__kmFX6',
            };
        },
        53255: (e) => {
            e.exports = { root: 'VibeDynamicArtists_root__Wbigy' };
        },
        62146: (e) => {
            e.exports = {
                root: 'VibePlayerBar_root__G3MOe',
                progress: 'VibePlayerBar_progress__Cri6E',
                progress_visible: 'VibePlayerBar_progress_visible__EfP1V',
                button: 'VibePlayerBar_button__GLhJ_',
                important: 'VibePlayerBar_important__XGV7k',
                ripple: 'VibePlayerBar_ripple__8YHn7',
                likeButton_mobilePaused: 'VibePlayerBar_likeButton_mobilePaused__ufI2D',
                changeVolume: 'VibePlayerBar_changeVolume__x7FHC',
                verticalSlider: 'VibePlayerBar_verticalSlider__JPDlB',
            };
        },
        62475: (e, t, i) => {
            'use strict';
            let n, a;
            i.d(t, { MR: () => v, P2: () => m });
            let r = (e, t) => t.some((t) => e instanceof t),
                s = new WeakMap(),
                o = new WeakMap(),
                l = new WeakMap(),
                c = {
                    get(e, t, i) {
                        if (e instanceof IDBTransaction) {
                            if ('done' === t) return s.get(e);
                            if ('store' === t) return i.objectStoreNames[1] ? void 0 : i.objectStore(i.objectStoreNames[0]);
                        }
                        return d(e[t]);
                    },
                    set: (e, t, i) => ((e[t] = i), !0),
                    has: (e, t) => (e instanceof IDBTransaction && ('done' === t || 'store' === t)) || t in e,
                };
            function d(e) {
                if (e instanceof IDBRequest) {
                    let t = new Promise((t, i) => {
                        let n = () => {
                                e.removeEventListener('success', a), e.removeEventListener('error', r);
                            },
                            a = () => {
                                t(d(e.result)), n();
                            },
                            r = () => {
                                i(e.error), n();
                            };
                        e.addEventListener('success', a), e.addEventListener('error', r);
                    });
                    return l.set(t, e), t;
                }
                if (o.has(e)) return o.get(e);
                let t = (function (e) {
                    if ('function' == typeof e)
                        return (a || (a = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e)
                            ? function (...t) {
                                  return e.apply(u(this), t), d(this.request);
                              }
                            : function (...t) {
                                  return d(e.apply(u(this), t));
                              };
                    return (e instanceof IDBTransaction &&
                        (function (e) {
                            if (s.has(e)) return;
                            let t = new Promise((t, i) => {
                                let n = () => {
                                        e.removeEventListener('complete', a), e.removeEventListener('error', r), e.removeEventListener('abort', r);
                                    },
                                    a = () => {
                                        t(), n();
                                    },
                                    r = () => {
                                        i(e.error || new DOMException('AbortError', 'AbortError')), n();
                                    };
                                e.addEventListener('complete', a), e.addEventListener('error', r), e.addEventListener('abort', r);
                            });
                            s.set(e, t);
                        })(e),
                    r(e, n || (n = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])))
                        ? new Proxy(e, c)
                        : e;
                })(e);
                return t !== e && (o.set(e, t), l.set(t, e)), t;
            }
            let u = (e) => l.get(e);
            function m(e, t, { blocked: i, upgrade: n, blocking: a, terminated: r } = {}) {
                let s = indexedDB.open(e, t),
                    o = d(s);
                return (
                    n &&
                        s.addEventListener('upgradeneeded', (e) => {
                            n(d(s.result), e.oldVersion, e.newVersion, d(s.transaction), e);
                        }),
                    i && s.addEventListener('blocked', (e) => i(e.oldVersion, e.newVersion, e)),
                    o
                        .then((e) => {
                            r && e.addEventListener('close', () => r()), a && e.addEventListener('versionchange', (e) => a(e.oldVersion, e.newVersion, e));
                        })
                        .catch(() => {}),
                    o
                );
            }
            function v(e, { blocked: t } = {}) {
                let i = indexedDB.deleteDatabase(e);
                return t && i.addEventListener('blocked', (e) => t(e.oldVersion, e)), d(i).then(() => void 0);
            }
            let b = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
                _ = ['put', 'add', 'delete', 'clear'],
                p = new Map();
            function h(e, t) {
                if (!(e instanceof IDBDatabase && !(t in e) && 'string' == typeof t)) return;
                if (p.get(t)) return p.get(t);
                let i = t.replace(/FromIndex$/, ''),
                    n = t !== i,
                    a = _.includes(i);
                if (!(i in (n ? IDBIndex : IDBObjectStore).prototype) || !(a || b.includes(i))) return;
                let r = async function (e, ...t) {
                    let r = this.transaction(e, a ? 'readwrite' : 'readonly'),
                        s = r.store;
                    return n && (s = s.index(t.shift())), (await Promise.all([s[i](...t), a && r.done]))[0];
                };
                return p.set(t, r), r;
            }
            c = ((e) => ({ ...e, get: (t, i, n) => h(t, i) || e.get(t, i, n), has: (t, i) => !!h(t, i) || e.has(t, i) }))(c);
            let g = ['continue', 'continuePrimaryKey', 'advance'],
                x = {},
                f = new WeakMap(),
                y = new WeakMap(),
                A = {
                    get(e, t) {
                        if (!g.includes(t)) return e[t];
                        let i = x[t];
                        return (
                            i ||
                                (i = x[t] =
                                    function (...e) {
                                        f.set(this, y.get(this)[t](...e));
                                    }),
                            i
                        );
                    },
                };
            async function* C(...e) {
                let t = this;
                if ((t instanceof IDBCursor || (t = await t.openCursor(...e)), !t)) return;
                let i = new Proxy(t, A);
                for (y.set(i, t), l.set(i, u(t)); t; ) yield i, (t = await (f.get(i) || t.continue())), f.delete(i);
            }
            function j(e, t) {
                return (t === Symbol.asyncIterator && r(e, [IDBIndex, IDBObjectStore, IDBCursor])) || ('iterate' === t && r(e, [IDBIndex, IDBObjectStore]));
            }
            c = ((e) => ({ ...e, get: (t, i, n) => (j(t, i) ? C : e.get(t, i, n)), has: (t, i) => j(t, i) || e.has(t, i) }))(c);
        },
        66007: (e) => {
            e.exports = {
                root: 'PlayButton_root__nYKdN',
                root_isLoading: 'PlayButton_root_isLoading__925Sa',
                'applying-setting': 'PlayButton_applying-setting__3nbT9',
                icon: 'PlayButton_icon__t_THQ',
            };
        },
        75225: (e) => {
            e.exports = {
                root: 'VibeContext_root__dbiNv',
                context: 'VibeContext_context__Z_82k',
                pinButton: 'VibeContext_pinButton__b6SNF',
                resetButton: 'VibeContext_resetButton__9KK4S',
            };
        },
        79671: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            var n = i(27515);
            let a = (e, t) => {
                if (!e) return { clipIds: [], activeClipIndex: 0 };
                let i = e
                        .split(',')
                        .map(Number)
                        .filter((e) => e >= 0),
                    a = (0, n.z)(i, t);
                return { clipIds: i, activeClipIndex: a };
            };
        },
        88751: (e) => {
            e.exports = {
                vibeAnimation: 'VibeBlock_vibeAnimation__XVEE6',
                controls: 'VibeBlock_controls__BpDFL',
                root: 'VibeBlock_root__z7LtR',
                root_freemium: 'VibeBlock_root_freemium__4i2rV',
                playButton: 'VibeBlock_playButton__6xU55',
                settingsButton: 'VibeBlock_settingsButton__GeMtO',
                subscriptionText: 'VibeBlock_subscriptionText__ODUZN',
                button: 'VibeBlock_button__fWXM_',
            };
        },
        90593: (e) => {
            e.exports = { divider: 'VibeContextMenu_divider__45urL', item_active: 'VibeContextMenu_item_active__DnFoW' };
        },
        91311: (e) => {
            e.exports = {
                root: 'VibePageFreemiumBlock_root__HCPuh',
                button: 'VibePageFreemiumBlock_button__ULD2Z',
                description: 'VibePageFreemiumBlock_description__AaZUt',
            };
        },
        95180: (e) => {
            e.exports = {
                root: 'WordsCard_root__6r3u2',
                root_disabled: 'WordsCard_root_disabled__Kgxb_',
                badge: 'WordsCard_badge__Y5HRe',
                badge_centered: 'WordsCard_badge_centered__7GMKP',
                badge_centeredSparkles: 'WordsCard_badge_centeredSparkles__sebgi',
                badge_loading: 'WordsCard_badge_loading__pDoTb',
                pulse: 'WordsCard_pulse__sKXAl',
                content: 'WordsCard_content__AUDsR',
                content_hidden: 'WordsCard_content_hidden__WhUsT',
                text: 'WordsCard_text__ZquMQ',
                appear: 'WordsCard_appear__AISMP',
                action: 'WordsCard_action__v4Jp1',
                popoverContent: 'WordsCard_popoverContent__NHYuc',
            };
        },
        99711: (e) => {
            e.exports = {
                root: 'AlbumCover_root__hkDPz',
                coverContainer: 'AlbumCover_coverContainer__NOd_o',
                link: 'AlbumCover_link__5qqFN',
                cover: 'AlbumCover_cover__bif8b',
                cover_visible: 'AlbumCover_cover_visible___8hK9',
                'fade-in': 'AlbumCover_fade-in__5kJy7',
                cover_generative: 'AlbumCover_cover_generative__5siVB',
                button: 'AlbumCover_button__mX59n',
                ripple: 'AlbumCover_ripple__q41JO',
                playButtonContainer: 'AlbumCover_playButtonContainer__rC_Wa',
                playButtonIcon: 'AlbumCover_playButtonIcon__2b7_R',
                playButton: 'AlbumCover_playButton__N2FOS',
                playButton_playing: 'AlbumCover_playButton_playing__W9Uib',
            };
        },
    },
]);
