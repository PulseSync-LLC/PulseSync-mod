(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4245, 4624],
    {
        400: (e) => {
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
        2291: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i, w: () => n });
            let n = 20,
                i = 20;
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => m });
            var n = r(25839),
                i = r(82298),
                l = r(28631),
                s = r(74631);
            let o = (e) => {
                    let { style: t, forwardRef: r, context: i, ...l } = e,
                        s = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        o = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': s, style: { ...t }, ref: r, ...l });
                },
                a = (0, s.forwardRef)((e, t) => (0, n.jsx)(o, { forwardRef: t, ...e }));
            var c = r(45300),
                u = r.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: r, withFooter: l, withHeader: s, withForceScroll: o, ...a } = e;
                    return (0, n.jsx)('div', {
                        className: (0, i.$)(u().scroller, { [u().scroller_withFooter]: l, [u().scroller_withHeader]: s, [u().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: r,
                        ...a,
                        tabIndex: -1,
                    });
                },
                g = (0, s.forwardRef)((e, t) => (0, n.jsx)(d, { forwardRef: t, ...e }));
            var h = r(10508),
                p = r(63257);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: i,
                            debounceDurationInMs: l = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [g, _] = (0, s.useState)(null),
                        m = (0, s.useMemo)(
                            () =>
                                (0, h.A)((e) => {
                                    if ((null == i || i(e), a.length > 0 && _(e), t && r)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < n; e++) r(e);
                                    }
                                }, l),
                            [l, i, t, r, a],
                        );
                    (0, s.useEffect)(() => {
                        a.length > 0 && g && m(g);
                    }, a);
                    let v = (0, s.useMemo)(() => {
                        if (c)
                            return (0, h.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, n.jsx)(p.sN, { ref: u, rangeChanged: m, totalCount: o, endReached: v, ...d });
                },
                m = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: h,
                            listClassName: p,
                            overscan: m = 700,
                            pageSize: v = 20,
                            totalCount: y,
                            totalRequests: E,
                            debounceDurationInMs: f,
                            initialItemCount: O,
                            minInitialItemCount: I = 20,
                            handleRef: S,
                            alwaysShowScrollbar: x = !1,
                            testId: A,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: N,
                            ...C
                        } = e,
                        [b, w] = (0, s.useState)(!1),
                        P = (0, s.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    w(e);
                                }, 100),
                            [],
                        ),
                        L = (0, s.useMemo)(() => {
                            var e, t;
                            return T
                                ? {
                                      Scroller: g,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : a,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: g,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : a,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, E, T]),
                        R = O ? Math.min(O, I) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, i.$)(u().root, { [u().root_scrolling]: b || x, [u().root_notScrolling]: !b && !x }, t),
                        'data-test-id': A,
                        children: [
                            T && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, n.jsx)(_, {
                                overscan: m,
                                components: L,
                                listClassName: p,
                                itemClassName: d,
                                isScrolling: P,
                                itemContent: h,
                                scrollerRef: S,
                                totalCount: y,
                                pageSize: v,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: f,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: N,
                                ...C,
                            }),
                            T && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => i });
            var n = r(44806);
            let i = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: i, userRegion: l } = e;
                return 'ru' === l && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : i();
            };
        },
        22413: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => l, TF: () => o, hZ: () => s });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function l(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var i = r[n].split('='),
                            l = i.slice(1).join('=');
                        '"' === l[0] && (l = l.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, r) {
                var l;
                document.cookie =
                    ((l = n({ path: '/' }, r)),
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
                                i('Expires', e.expires ? e.expires.toUTCString() : '') +
                                i('Domain', e.domain) +
                                i('Path', e.path) +
                                i('Secure', e.secure) +
                                i('SameSite', e.sameSite)
                            );
                        })(l));
            }
            function o(e, t) {
                s(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var n = r(25839);
            r(93588);
            var i = r(400),
                l = r.n(i);
            let s = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: l().empty });
            };
        },
        27954: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => l, g: () => s });
            var n = r(74631),
                i = r(36432);
            let l = (0, n.createContext)(null);
            function s() {
                let e = (0, n.useContext)(l);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        43354: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i, P: () => l });
            var n = r(74631);
            let i = (0, n.createContext)(null),
                l = () => (0, n.useContext)(i);
        },
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        59126: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => n });
            class n extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: i = {}, ...l } = t,
                        s = e || 'Internal error';
                    (super(s, l), (this.message = s), (this.code = r), (this.data = i), (this.stack = Error(s).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
        },
        67311: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => l, si: () => o, fW: () => g, MJ: () => d, jU: () => p, Bx: () => h });
            var n = r(22413);
            function i(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let s = (0, n.Jt)(e);
                        if (t) {
                            var r, l;
                            return null != (l = null == (r = i(s)) ? void 0 : r.value) ? l : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let l = i ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, l, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, n.TF)(e);
                    } catch (e) {}
                }
            }
            function s(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = s('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let l = r.getItem(e) || void 0;
                        if (!t) return l;
                        let s = i(l);
                        if (!s) return null;
                        let o = null != (n = null == s ? void 0 : s.value) ? n : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return (this.remove(e), null);
                        return o;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let n = s('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = r(58025),
                c = r(36432);
            class u extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, l;
                        let s = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (l = null == (r = i(s)) ? void 0 : r.value) ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = s('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            n = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            i = e.get(r);
                        null != i && e.set(r, i, n);
                    });
            }
            function p(e) {
                let { name: t, group: r, value: n } = e;
                return n && 0 !== Object.keys(n).length
                    ? n.title
                        ? { [t]: { group: r, value: { ...n, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: n } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        68854: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        74245: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => g, Yw: () => n, JU: () => i, DQ: () => _, Ve: () => m });
            var n,
                i,
                l = r(30691),
                s = (function () {
                    function e(e) {
                        ((this.observableValue = (0, l.vP)(e)), (this.prevValueByListener = new Map()));
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
                            var n = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (i) {
                                    if (i !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && n) {
                                            n = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, i), e(i));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, l.EW)(e)), (this.prevValueByListener = new Map()));
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
                        var n = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (i) {
                                if (i !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && n) {
                                        n = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, i), e(i));
                                }
                            })
                        );
                    }));
            })();
            var o = r(59126);
            class a extends o.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, a.prototype));
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
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'));
            })(n || (n = {}));
            let u = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, n] = r.split(':');
                        e && n && t.push({ type: e, id: n });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
            class g {
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
                        (this.itemsObservable = new s(null)),
                        (this.isLoadingObservable = new s(!1)),
                        (this.errorObservable = new s(null)),
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
                            let t = e instanceof Error ? e : new a(e);
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
                    let r = d(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        n = {};
                    for (let e of r)
                        if (e) {
                            let t = n[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (n[e.disclaimerType] = t));
                        }
                    return n;
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
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'));
            })(i || (i = {}));
            let h = new Map([
                    [n.EXPLICIT_ICON, i.E],
                    [n.AGE_18_ICON, i.AGE_18],
                    [n.AGE_16_ICON, i.AGE_16],
                    [n.AGE_12_ICON, i.AGE_12],
                    [n.EXCLAMATION_ICON, i.EXCLAMATION],
                ]),
                p = [n.EXPLICIT_ICON, n.AGE_18_ICON, n.AGE_16_ICON, n.AGE_12_ICON, n.EXCLAMATION_ICON],
                _ = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = d(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, p);
                    if (null === t) return null;
                    let r = h.get(t.type);
                    return void 0 !== r ? r : null;
                },
                m = (e, t) => d(e, t).length > 0;
        },
        78299: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => S });
            var n = r(25839),
                i = r(82298),
                l = r(88204),
                s = r(74631),
                o = r(39004),
                a = r(8487);
            r(93588);
            var c = r(4071),
                u = r(66738),
                d = r(4254),
                g = r(67379),
                h = r(36619),
                p = r(76945),
                _ = r(59450),
                m = r(84e3),
                v = r(97952),
                y = r(89192),
                E = r(53712),
                f = r(15270),
                O = r(68854),
                I = r.n(O);
            let S = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: l } = (0, o.A)(),
                    O = l({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, _.st)(),
                        { hash: r } = (0, _.gf)(),
                        { pageId: n } = (0, v.$)(),
                        i = (0, m.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !r || !n) return;
                        let l = (0, g.F)({
                            params: {
                                entityType: h.EntityTypes.Error,
                                entityId: h.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: n,
                                pageStyle: h.PageStyles.Fullscreen,
                                pagePlacement: h.PagePlacements.Fullscreen,
                                mainObjectType: h.DomainObjectType.NonApplicable,
                                mainObjectId: h.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, p.z5)(t.evgenInstance, l);
                    }, [t, e, r, n, i]);
                })(O);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, _.st)(),
                            { hash: t } = (0, _.gf)(),
                            { pageId: r } = (0, v.$)(),
                            n = (0, m.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let i = (0, g.F)({
                                    params: {
                                        actionType: h.ActionType.Refresh,
                                        userInteractionType: h.UserInteractionType.Tap,
                                        entityType: h.EntityTypes.Error,
                                        entityId: h.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: h.PageStyles.Fullscreen,
                                        pagePlacement: h.PagePlacements.Fullscreen,
                                        mainObjectType: h.DomainObjectType.NonApplicable,
                                        mainObjectId: h.DomainObjectType.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, p.bv)(e.evgenInstance, i);
                            }, [e, t, r, n]),
                        };
                    })(),
                    x = (0, s.useCallback)(() => {
                        (S(), (window.location.href = E.Z.main.href));
                    }, [S]),
                    { contentRef: A } = (0, y.g)();
                return (0, n.jsxs)('div', {
                    className: (0, i.$)(I().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(f.L, { withBackwardFallback: '/', className: (0, i.$)(I().navigation, { [I().navigation_desktop]: !A }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, i.$)(I().content, { [I().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(u.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                (0, n.jsx)(d.DZ, { className: (0, i.$)(I().title, I().important), variant: 'h3', size: 'xs', children: O }),
                                (0, n.jsxs)(d.HL, {
                                    className: (0, i.$)(I().text, I().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, n.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, n.jsx)(c.$, {
                                    onClick: x,
                                    className: I().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, n.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, n.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        80499: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => m, s: () => v });
            var n = r(25839),
                i = r(88204),
                l = r(84059),
                s = r(74631),
                o = r(89288),
                a = r(36432),
                c = r(94421),
                u = r(99989),
                d = r(27954),
                g = r(83382);
            (0, i.eO)(!1);
            let h = (0, s.createContext)(null),
                p = (e) => {
                    let { children: t, store: r, storeKey: i } = e,
                        l = (0, s.useMemo)(() => ({ store: r, storeKey: i }), [r, i]);
                    return (0, n.jsx)(h.Provider, { value: l, children: t });
                },
                _ = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: i } = e;
                    return (
                        (0, l.useServerInsertedHTML)(() => {
                            let e = i.current;
                            return ((i.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                m = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        i = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: l, nonce: s } = e,
                                o = (0, g.Y)(),
                                a = (0, d.g)(),
                                { store: h, patchesRef: m } = (0, u.m)({
                                    createStore: () => t({ ...o, rootStore: a }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(_, { nonce: s, patchKey: r, patchesRef: m }), (0, n.jsx)(p, { store: h, storeKey: r, children: l })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, s.useContext)(h);
                if (!r || r.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == r ? void 0 : r.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        82706: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            let n = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        83382: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => o });
            var n = r(67311),
                i = r(36484),
                l = r(62562),
                s = r(84e3);
            let o = () => {
                let e = (0, l.N)(),
                    t = e.get(i.oo),
                    r = e.get(i.uM),
                    o = e.get(i.ff),
                    a = e.get(i.V4),
                    c = e.get(i.P0),
                    u = (() => {
                        let e = (0, l.N)(),
                            t = e.get(i.$I),
                            r = e.get(i.EN),
                            n = e.get(i.N1),
                            s = e.get(i._1),
                            o = e.get(i.V3),
                            a = e.get(i.Lb),
                            c = e.get(i.wK),
                            u = e.get(i.tz),
                            d = e.get(i.$8),
                            g = e.get(i.Oo),
                            h = e.get(i.X4),
                            p = e.get(i.O9),
                            _ = e.get(i.E),
                            m = e.get(i.wH),
                            v = e.get(i.ok),
                            y = e.get(i.X8),
                            E = e.get(i.yq),
                            f = e.get(i.NN),
                            O = e.get(i.qN),
                            I = e.get(i.ro),
                            S = e.get(i.nM),
                            x = e.get(i.Ut),
                            A = e.get(i.K1),
                            T = e.get(i.eu),
                            N = e.get(i.aE),
                            C = e.get(i.ki),
                            b = e.get(i.c9),
                            w = e.get(i.en),
                            P = e.get(i.jQ),
                            L = e.get(i.cZ),
                            R = e.get(i.Zl),
                            k = e.get(i.CN),
                            D = e.get(i.P1),
                            j = e.get(i.zj),
                            M = e.get(i.re),
                            F = e.get(i.JM),
                            G = e.get(i.Lk),
                            H = e.get(i.$$),
                            Y = e.get(i.sv),
                            W = e.get(i.gd),
                            V = e.get(i.Ez),
                            X = e.get(i.u2),
                            U = e.get(i.TD),
                            B = e.get(i.dh),
                            $ = e.get(i.LC),
                            J = e.get(i.PL),
                            K = e.get(i.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: r,
                            disclaimersResource: n,
                            usersResource: s,
                            landingResource: o,
                            landing3Resource: a,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: g,
                            topResource: h,
                            artistsResource: p,
                            slidesResource: _,
                            redAlertResource: m,
                            rotorResource: v,
                            waveResource: y,
                            searchResource: E,
                            searchPlaylistResource: f,
                            playlistResource: O,
                            playlistsResource: I,
                            pinResource: S,
                            metatagsResource: x,
                            tagResource: A,
                            feedResource: T,
                            pinsResource: N,
                            musicHistoryResource: C,
                            dynamicPagesResource: b,
                            chartResource: w,
                            clipsResource: P,
                            lyricViewsResource: L,
                            nonMusicResource: R,
                            donationResource: k,
                            loaderResource: D,
                            lumenResource: j,
                            prefixlessResource: M,
                            streamsResource: F,
                            filtersResource: G,
                            ugcResource: H,
                            collectionResource: Y,
                            adsResource: W,
                            personalResource: V,
                            familyResource: X,
                            childrenLandingResource: U,
                            promoResource: B,
                            telemetryResource: $,
                            labelsResource: J,
                            concertsResource: K,
                            wordsResource: e.get(i.dA),
                            wheelResource: e.get(i.$Y),
                        };
                    })(),
                    d = (0, s.U)(),
                    g = (0, l.N)().get(i.TK),
                    h = e.get(i.ni),
                    p = new n.si(),
                    _ = new n.fW();
                return {
                    ...u,
                    acqOffers: r,
                    disclaimerDictionary: o,
                    logger: d,
                    modelActionsLogger: g,
                    localStorage: p,
                    sessionStorage: _,
                    containerStorage: t,
                    config: a,
                    clientSafeConfig: c,
                    landingSdk: h,
                };
            };
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => l });
            var n = r(36484),
                i = r(62562);
            let l = () => (0, i.N)().get(n.Zf);
        },
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        94421: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => i, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                i = 'yMusicPageStatePatchesUpdated';
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => A });
            var n = r(25839),
                i = r(82298),
                l = r(88204),
                s = r(39004),
                o = r(93588),
                a = r(43354),
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
            let u = (e, t, r) => {
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
                d = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: i } = e;
                    return {
                        year: i,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var g = r(10959),
                h = r(89514);
            let p = (e) => e(new Date(), (0, h.m)());
            var _ = r(96433),
                m = r(27954),
                v = r(400),
                y = r.n(v),
                E = r(61493),
                f = r(4254),
                O = r(97522);
            let I = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, i.$)(y().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(O.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, i.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(O.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: y().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: i } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, n.jsx)(O.N, { target: '_blank', href: i, className: y().link, 'data-test-id': E.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                x = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, i.$)(y().root, y().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, n.jsx)(S, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(I, { data: r.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, m.g)(),
                    { formatDate: i, formatMessage: l } = (0, s.A)(),
                    { language: o } = (0, _.h)(),
                    a = d({ formatMessage: l, language: o, tld: r.tld, year: p(i) });
                return (0, n.jsx)(I, { className: t, data: a });
            });
            let A = (0, l.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: l, location: h, user: v } = (0, m.g)(),
                    { formatDate: E, formatMessage: f } = (0, s.A)(),
                    { isEnabled: O } = null != (t = (0, a.P)()) ? t : {},
                    { language: I } = (0, _.h)(),
                    S = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: i, tld: l, userRegion: s, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: i, userRegion: l } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, n, i) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, n, i) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, n, i) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, n, i) },
                                    g = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, n, i) },
                                    h = [s, a, d];
                                return (r && 'ru' === l && h.push(o), h.push(g), h);
                            })({ formatMessage: r, isWebApplication: n, language: i, tld: l, userRegion: s }),
                            disclaimer: (0, g.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: r, language: i, tld: l, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: o.$3,
                        tld: h.tld,
                        language: I,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(E),
                    });
                return (0, n.jsx)(x, { className: (0, i.$)({ [y().root_withOffsetForDeeplink]: O }, r), data: S });
            });
        },
        99989: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            var n = r(28410),
                i = r(74631);
            let l = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: l } = e,
                    s = (0, i.useRef)([]),
                    [o] = (0, i.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, i.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(o, e);
                        };
                        return (e(), window.addEventListener(l, e), () => window.removeEventListener(l, e));
                    }, [r, l, o]),
                    { store: o, patchesRef: s }
                );
            };
        },
    },
]);
