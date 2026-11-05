(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2494, 3763, 3810, 6551, 8932, 9498],
    {
        1698: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => a });
            var i = r(88800),
                s = r(37770);
            let a = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: a,
                    centered: l,
                    withInfo: o,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, i.jsx)(
                        s.V,
                        { isActive: t, linesCount: d, className: r, round: a, centered: l, withInfo: o, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        9492: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => h });
            var i = r(88800),
                s = r(65724),
                a = r(53548),
                l = r(2058),
                o = r(88969),
                n = r(96817),
                c = r(52300),
                d = r(29504),
                u = r(59304),
                m = r(4044),
                p = r.n(m);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: h } = (0, l.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let g = (0, a.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, i.jsx)(d.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(n.$, {
                                    ref: m,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, i.jsx)(u.$, { className: (0, s.$)(p().root, p().important), message: g, closeToast: r });
            };
        },
        11006: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        14567: (e, t) => {
            (e.exports = function (e, t, i, s) {
                return JSON.stringify(e, r(t, s), i);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    i = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + i.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (s, a) {
                        if (r.length > 0) {
                            var l = r.indexOf(this);
                            (~l ? r.splice(l + 1) : r.push(this), ~l ? i.splice(l, 1 / 0, s) : i.push(s), ~r.indexOf(a) && (a = t.call(this, s, a)));
                        } else r.push(a);
                        return null == e ? a : e.call(this, s, a);
                    }
                );
            }
        },
        14965: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: s = {}, ...a } = t,
                        l = e || 'Internal error';
                    (super(l, a), (this.message = l), (this.code = r), (this.data = s), (this.stack = Error(l).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        23877: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { Q: () => s, c: () => i }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(i || (i = {})));
            let s = { [i.ERROR]: 'error', [i.WARNING]: 'warn', [i.INFO]: 'info', [i.DEBUG]: 'debug', [i.TRACE]: 'trace' };
        },
        25354: (e, t, r) => {
            'use strict';
            r.d(t, { El: () => o, I7: () => n, K$: () => l, cM: () => d, fZ: () => s, tA: () => a, vX: () => i, xi: () => c });
            let i = 16,
                s = 16,
                a = 315,
                l = 170,
                o = 270,
                n = 7,
                c = 30,
                d = 30;
        },
        29201: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s });
            var i = r(35396);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        35396: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { C: () => a }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track enum extension
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track enum extension
                })(i || (i = {})));
            let s = new Set(Object.values(i)),
                a = (e) => 'string' == typeof e && s.has(e);
        },
        44084: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => a });
            var i = r(23877),
                s = r(74021);
            class a extends s.q {
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
                logToConsole(e, t, r) {
                    if (this.disableLogToConsole) return;
                    let s = i.Q[e];
                    console[s](...this.formatMessage(e, t, r));
                }
                sendToErrorBooster(e, t, r) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: r ? this.obfuscateData({ ...this.additionalData, ...r }) : {} } });
                }
            }
        },
        54320: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var i = r(88800),
                s = r(53548),
                a = r(29993),
                l = r(9492),
                o = r(29595),
                n = r(74965),
                c = r(74773);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, n.l)(),
                    u = (0, s.useRef)(void 0),
                    m = (0, a.c)(() => {
                        var r;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let i = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, s.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, i.jsx)(l.L, { reloadBlocks: m }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, m, r, e.rejectedPagesCount]);
            };
        },
        55761: (e) => {
            e.exports = {
                root: 'GenreAlbumsPage_root__r_Sts',
                scrollContainer: 'GenreAlbumsPage_scrollContainer__K_v_b',
                important: 'GenreAlbumsPage_important__r3P2T',
                shimmerScrollContainer: 'GenreAlbumsPage_shimmerScrollContainer__IpQeU',
                footer: 'GenreAlbumsPage_footer__vmCiR',
                item: 'GenreAlbumsPage_item__zRzB0',
                content: 'GenreAlbumsPage_content__PRJUm',
                shimmerTitle: 'GenreAlbumsPage_shimmerTitle__UW_D5',
            };
        },
        59918: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => a });
            var i = r(27169),
                s = r(29201);
            let a = (e) => {
                var t, r, a, l, o;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, s.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: i.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, s.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (r = e.counts) ? void 0 : r.albums) || 0,
                              alsoAlbums: (null == (a = e.counts) ? void 0 : a.compilations) || 0,
                              tracks: (null == (l = e.counts) ? void 0 : l.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => l });
            var i = r(88800);
            r(30282);
            var s = r(11006),
                a = r.n(s);
            let l = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: a().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => s });
            var i = r(97956);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: s, userRegion: a } = e;
                return 'ru' === a && t(i.z.WebNextFooterDisclaimer, 'on') ? r() : s();
            };
        },
        62837: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => m, Yw: () => i, JU: () => s, DQ: () => g, Ve: () => v });
            var i,
                s,
                a = r(43297),
                l = (function () {
                    function e(e) {
                        ((this.observableValue = (0, a.vP)(e)), (this.prevValueByListener = new Map()));
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
                            var r = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, s), e(s));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, a.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            var o = r(14965);
            class n extends o.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, n.prototype));
                }
            }
            class c extends o.t {
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
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(i || (i = {}));
            let d = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, i] = r.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class m {
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
                        (this.itemsObservable = new l(null)),
                        (this.isLoadingObservable = new l(!1)),
                        (this.errorObservable = new l(null)),
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
                            let t = e instanceof Error ? e : new n(e);
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
                    let r = u(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of r)
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
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(s || (s = {}));
            let p = new Map([
                    [i.EXPLICIT_ICON, s.E],
                    [i.AGE_18_ICON, s.AGE_18],
                    [i.AGE_16_ICON, s.AGE_16],
                    [i.AGE_12_ICON, s.AGE_12],
                    [i.EXCLAMATION_ICON, s.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [i.SUBSTITUTED_ICON, s.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                h = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.SUBSTITUTED_ICON, i.EXCLAMATION_ICON],
                g = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = u(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let r = p.get(t.type);
                    return void 0 !== r ? r : null;
                },
                v = (e, t) => u(e, t).length > 0;
        },
        70278: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => s });
            var i = r(59918);
            let s = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let r = (null == (t = e.artists) ? void 0 : t.map(i.N)) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: r,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        70621: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => n });
            var i = r(53548),
                s = r(63582),
                a = r(245),
                l = r(22681),
                o = r(56374);
            let n = (0, s.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, a.N)(),
                    t = (0, l.w)(),
                    r = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, o.c)((e) => {
                    t?.object && r && r.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        74021: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => n });
            var i = r(14567),
                s = r(243),
                a = r(62151),
                l = r(33396);
            let o = () => 'SECRET';
            class n {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, s) {
                    let a,
                        o = String(t instanceof Error && t.stack ? t.stack : t),
                        n = (0, l.A)({ ...this.additionalData, ...r });
                    return (Object.keys(n).length && (a = this.obfuscateData(n)), s) ? `${o} ${i(a)}` : [o, a];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, s.A)(e, t) && (0, a.A)(e, t, o());
                    return e;
                }
            }
        },
        76903: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => u });
            var i = r(88800),
                s = r(53548),
                a = r(53534),
                l = r(63582),
                o = r(245);
            let n = new WeakMap();
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
                    let r =
                        n.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                r = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                r();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (r(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
                                },
                            };
                        })();
                    (n.set(t, r), (this.queue = r));
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
            var d = r(87999);
            let u = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let r = (0, o.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [n, u] = (0, s.useState)(() => {
                            let e = new c(r.createScreenSession().screenViewUuid, r);
                            return { client: r, input: t, isReady: l, scope: l ? r.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        n.client !== r ||
                        n.input.pageId !== t.pageId ||
                        n.input.skeletonId !== t.skeletonId ||
                        n.input.mainObjectType !== t.mainObjectType ||
                        n.input.mainObjectId !== t.mainObjectId
                    ) {
                        let s = new c(r.createScreenSession().screenViewUuid, r),
                            o = { client: r, input: t, isReady: l, scope: l ? r.createScreenScope(t, s) : null, session: s };
                        return (u(o), (0, i.jsx)(a.k, { value: o, children: e }));
                    }
                    if (
                        n.isReady !== l ||
                        n.input.displayReasonId !== t.displayReasonId ||
                        n.input.pageIdForFrom !== t.pageIdForFrom ||
                        n.input.pagePlacement !== t.pagePlacement ||
                        n.input.pageStyle !== t.pageStyle
                    ) {
                        let s = { ...n, input: t, isReady: l, scope: l ? r.createScreenScope(t, n.session) : null };
                        return (u(s), (0, i.jsx)(a.k, { value: s, children: e }));
                    }
                    return (0, i.jsx)(a.k, { value: n, children: e });
                },
            );
        },
        77451: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => a, TF: () => o, hZ: () => l });
            var i = function () {
                return (i =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, i = arguments.length; r < i; r++)
                            for (var s in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                        return e;
                    }).apply(this, arguments);
            };
            function s(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function a(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], i = 0; i < r.length; i++) {
                        var s = r[i].split('='),
                            a = s.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(s[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function l(e, t, r) {
                var a;
                document.cookie =
                    ((a = i({ path: '/' }, r)),
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
                                s('Expires', e.expires ? e.expires.toUTCString() : '') +
                                s('Domain', e.domain) +
                                s('Path', e.path) +
                                s('Secure', e.secure) +
                                s('SameSite', e.sameSite)
                            );
                        })(a));
            }
            function o(e, t) {
                l(e, '', i(i({}, t), { expires: -1 }));
            }
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => v });
            var i = r(88800),
                s = r(65724),
                a = r(61013),
                l = r(53548);
            let o = (e) => {
                    let { style: t, forwardRef: r, context: s, ...a } = e,
                        l = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        o = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': l, style: { ...t }, ref: r, ...a });
                },
                n = (0, l.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
            var c = r(16434),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: a, withHeader: l, withForceScroll: o, ...n } = e;
                    return (0, i.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: r,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, l.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var p = r(55482),
                h = r(75151);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: s,
                            debounceDurationInMs: a = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, g] = (0, l.useState)(null),
                        v = (0, l.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == s || s(e), n.length > 0 && g(e), t && r)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < i; e++) r(e);
                                    }
                                }, a),
                            [a, s, t, r, n],
                        );
                    (0, l.useEffect)(() => {
                        n.length > 0 && m && v(m);
                    }, n);
                    let _ = (0, l.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, i.jsx)(h.sN, { ref: d, rangeChanged: v, totalCount: o, endReached: _, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: h,
                            overscan: v = 700,
                            pageSize: _ = 20,
                            totalCount: f,
                            totalRequests: b,
                            debounceDurationInMs: C,
                            initialItemCount: E,
                            minInitialItemCount: I = 20,
                            handleRef: O,
                            alwaysShowScrollbar: y = !1,
                            testId: N,
                            isMobileLayout: x = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...R
                        } = e,
                        [T, L] = (0, l.useState)(!1),
                        S = (0, l.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    L(e);
                                }, 100),
                            [],
                        ),
                        P = (0, l.useMemo)(() => {
                            var e, t;
                            return x
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : n,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : n,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, b, x]),
                        k = E ? Math.min(E, I) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: T || y, [d().root_notScrolling]: !T && !y }, t),
                        'data-test-id': N,
                        children: [
                            x && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, i.jsx)(g, {
                                overscan: v,
                                components: P,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: S,
                                itemContent: p,
                                scrollerRef: O,
                                totalCount: f,
                                pageSize: _,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: k,
                                shouldTriggerRangeChangedOn: A,
                                ...R,
                            }),
                            x && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => N });
            var i = r(88800),
                s = r(65724),
                a = r(84961),
                l = r(2058),
                o = r(30282),
                n = r(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: r, tld: i, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, r) },
                    };
                };
            var m = r(62293),
                p = r(99839);
            let h = (e) => e(new Date(), (0, p.m)());
            var g = r(51611),
                v = r(72288),
                _ = r(11006),
                f = r.n(_),
                b = r(17392),
                C = r(29504),
                E = r(91292);
            let I = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, s.$)(f().copyrights, t),
                        'data-test-id': b.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(E.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, s.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': b.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(E.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': b.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: f().list,
                                'data-test-id': b.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: s } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, i.jsx)(E.N, { target: '_blank', href: s, className: f().link, 'data-test-id': b.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': b.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, s.$)(f().root, f().important, t),
                        'data-test-id': b.S7.FOOTER,
                        children: [(0, i.jsx)(O, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(I, { data: r.copyrights })],
                    });
                };
            (0, a.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, v.g)(),
                    { formatDate: s, formatMessage: a } = (0, l.A)(),
                    { language: o } = (0, g.h)(),
                    n = u({ formatMessage: a, language: o, tld: r.tld, year: h(s) });
                return (0, i.jsx)(I, { className: t, data: n });
            });
            let N = (0, a.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: a, location: p, user: _ } = (0, v.g)(),
                    { formatDate: b, formatMessage: C } = (0, l.A)(),
                    { isEnabled: E } = null != (t = (0, n.P)()) ? t : {},
                    { language: I } = (0, g.h)(),
                    O = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: i, language: s, tld: a, userRegion: l, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: i, language: s, userRegion: a } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, s) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, s) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, s) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, s) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, s) },
                                    p = [l, n, u];
                                return (r && 'ru' === a && p.push(o), p.push(m), p);
                            })({ formatMessage: r, isWebApplication: i, language: s, tld: a, userRegion: l }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: r, language: s, tld: a, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => a.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: o.$3,
                        tld: p.tld,
                        language: I,
                        userRegion: _.account.data.userSessionRegionIso,
                        year: h(b),
                    });
                return (0, i.jsx)(y, { className: (0, s.$)({ [f().root_withOffsetForDeeplink]: E }, r), data: O });
            });
        },
        92043: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 96994));
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s, P: () => a });
            var i = r(53548);
            let s = (0, i.createContext)(null),
                a = () => (0, i.useContext)(s);
        },
        96994: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => $ }));
            var i = r(88800),
                s = r(53548),
                a = r(58390),
                l = r(65724),
                o = r(84961),
                n = r(2058),
                c = r(87999),
                d = r(76903),
                u = r(17392),
                m = r(29504),
                p = r(32596),
                h = r(10079),
                g = r(69630),
                v = r(98427),
                _ = r(46422),
                f = r(44230),
                b = r(37670),
                C = r(34961),
                E = r(53892),
                I = r(72288),
                O = r(54320),
                y = r(86790),
                N = r(60266),
                x = r(93317),
                A = r(37770),
                R = r(79418),
                T = r(25354),
                L = r(30144),
                S = r(324),
                P = r(46511),
                k = r(13012),
                j = r(57297),
                w = r(2218),
                F = r(77863),
                D = r(45383),
                M = r(40883);
            async function G(e, t) {
                let { locale: r, fullUrl: i, url: s, tld: a, host: l } = t,
                    o = await (0, P.W)(r),
                    n = e.title.fullTitle,
                    c = o({ id: 'metadata.genre-title' }, { genreTitle: n }),
                    d = (0, M.f)({ genreTitle: n, messageFormatter: o }),
                    u = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(l)).href;
                return {
                    title: c,
                    description: d,
                    openGraph: (0, j.i)({
                        ogTitle: (0, k.N)(n),
                        ogDescription: d,
                        fullUrl: null != i ? i : '',
                        locale: r,
                        siteName: o({ id: 'metadata.yandex-music' }),
                        ogImage: u,
                    }),
                    twitter: (0, w.H)({ cardType: F.W.APP, title: c, url: null != s ? s : '', appName: o({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, S.X)({
                        additional: { tld: a, url: null != s ? s : '', fullUrl: null != i ? i : '', host: l },
                        appName: o({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, D.S)('/genre/:metatagId/albums', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var B = r(70278),
                U = r(55761),
                V = r.n(U);
            let X = (0, o.PA)((e) => {
                let { metatagId: t, preloadedMeta: r } = e,
                    { albumsSubpage: o } = (0, C.s)(E.n.GENRE),
                    {
                        settings: { isMobile: S },
                    } = (0, I.g)(),
                    { formatMessage: P } = (0, n.A)(),
                    { contentScrollRef: k, setContentScrollRef: j } = (0, f.g)(),
                    w = (0, _.W)(),
                    F = (0, s.useCallback)(
                        (e) => {
                            t && o.getData({ metatagId: t, page: e, pageSize: T.cM });
                        },
                        [o, t],
                    );
                ((0, O.X)(o.pagesLoader, F),
                    (0, s.useEffect)(
                        () => () => {
                            o.reset();
                        },
                        [o],
                    ),
                    o.isNotFound && (0, a.notFound)(),
                    (0, b.J)(o.isResolved),
                    ((e) => {
                        let { fullscreenVideoPlayer: t } = (0, I.g)(),
                            r = null == e ? void 0 : e.fullTitle,
                            i = null == e ? void 0 : e.isResolved,
                            a = null == e ? void 0 : e.pagesLoader.isInitialRequestRejected,
                            l = (0, s.useCallback)(
                                (t) =>
                                    a
                                        ? {}
                                        : e && i && r
                                          ? G(
                                                ((e) => {
                                                    var t, r, i;
                                                    return {
                                                        id: '',
                                                        title: { title: '', fullTitle: e.fullTitle || '' },
                                                        albums: e.items.map(B.f),
                                                        pager: {
                                                            page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                            perPage: (null == (r = e.pagesLoader.pager) ? void 0 : r.perPage) || 0,
                                                            total: (null == (i = e.pagesLoader.pager) ? void 0 : i.total) || 0,
                                                        },
                                                    };
                                                })(e),
                                                t,
                                            )
                                          : void 0,
                                [e, r, i, a],
                            );
                        (0, L.C)(t.modal.isOpened ? null : l);
                    })(o));
                let D = (0, s.useMemo)(() => ({ Footer: () => (0, i.jsx)(N.A, { children: (0, i.jsx)(y.w, { className: V().footer }) }) }), []);
                if ((t && o.isNeededToLoad && (0, s.use)(o.getData({ preloadedMeta: r, metatagId: t, page: 0, pageSize: T.cM })), o.isSomethingWrong))
                    return (0, i.jsx)(p.SomethingWentWrong, {});
                let M = o.isShimmerVisible ? 20 : o.totalCount;
                return (0, i.jsx)(d.a, {
                    pageId: c.AppScreen.GenreAlbums,
                    pageIdForFrom: v.b.GENRE_ALBUMS,
                    children: (0, i.jsx)(g.h, {
                        scrollElement: k,
                        outerTitle: o.fullTitle,
                        children: (0, i.jsxs)('div', {
                            className: V().root,
                            'data-test-id': u.Xk.genre.GENRE_ALBUMS_PAGE,
                            children: [
                                (0, i.jsx)(x.Y, {
                                    variant: x.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: w.canBack,
                                    children: (0, i.jsx)(m.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: o.fullTitle }),
                                }),
                                (0, i.jsx)(R.$, {
                                    className: (0, l.$)(V().scrollContainer, V().important),
                                    customComponents: D,
                                    itemContentCallback: (e) => {
                                        let t = o.items[e],
                                            r = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.album' }) });
                                        return t ? (0, i.jsx)(h.a, { album: t, contentLinesCount: 4 }, t.id) : (0, i.jsx)(A.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: M,
                                    initialItemCount: M,
                                    onGetDataByPage: F,
                                    pageSize: T.cM,
                                    totalRequests: o.requestsCount,
                                    listClassName: V().content,
                                    itemClassName: V().item,
                                    handleRef: j,
                                    context: { listAriaLabel: P({ id: 'mixes.albums-list' }, { genreName: o.fullTitle || '' }) },
                                    isMobileLayout: S,
                                    useWindowScroll: S,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var H = r(19994),
                Y = r(1698);
            let W = () => {
                    let e = (0, _.W)(),
                        { formatMessage: t } = (0, n.A)(),
                        r = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                    return (0, i.jsx)(g.h, {
                        scrollElement: null,
                        children: (0, i.jsxs)('div', {
                            className: V().root,
                            children: [
                                (0, i.jsx)(x.Y, {
                                    variant: x.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, i.jsx)(H.W, { className: V().shimmerTitle, radius: 'l' }),
                                }),
                                (0, i.jsx)('div', {
                                    className: (0, l.$)(V().scrollContainer, V().important, V().shimmerScrollContainer),
                                    children: (0, i.jsx)('div', {
                                        className: V().content,
                                        children: (0, i.jsx)(Y.e, { isActive: !0, itemClassName: V().item, 'aria-label': r, linesCount: 4, count: 20 }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                $ = () => {
                    let e = (0, a.useSearchParams)().get('metatagId');
                    return (e || (0, a.notFound)(), (0, i.jsx)(s.Suspense, { fallback: (0, i.jsx)(W, {}), children: (0, i.jsx)(X, { metatagId: e }) }));
                };
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 9079, 1833, 3469, 8194, 1191, 8655, 1568, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 9202, 4732,
                9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 9269, 763, 2670, 7358,
            ],
            () => e((e.s = 92043)),
        ),
            (_N_E = e.O()));
    },
]);
