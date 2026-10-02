(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4398],
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
        3669: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => C });
            var n = r(74631),
                o = r(67379),
                s = r(17850),
                i = r(59450),
                a = r(49656),
                l = r(84e3),
                c = r(58069),
                d = r(20258),
                u = r(26742),
                _ = r(25195),
                m = r(37314),
                f = r(25488),
                p = r(97952),
                h = r(10764),
                v = r(72594);
            let C = () => {
                let e = (0, l.U)(),
                    t = (0, i.st)(),
                    { hash: r } = (0, i.gf)(),
                    { pageId: C, displayReasonId: x } = (0, p.$)(),
                    { tabId: E, tabPos: g, isTabSelectedByDefault: b } = (0, v.R)(),
                    { offsetBlockPosY: A } = (0, _.u)(),
                    { blockType: S, blockId: O, blockPosX: N, blockPosY: L, mainObjectId: y, mainObjectType: R, displayReasonId: T } = (0, u.N)(),
                    { filterKey: I, filterValue: j, filterPos: M } = (0, m.G)(),
                    { objectType: w, objectsCount: P, objectId: k, objectPosX: D, objectPosY: B } = (0, f.J)(),
                    { skeleton: z } = (0, h.b)(),
                    U = null != T ? T : x,
                    F = (0, a.L)(() => (void 0 !== A && void 0 !== L ? A + L : L));
                return (0, n.useCallback)(
                    (n, i) => {
                        if (!t || !C || !d.xK.includes(C) || !d.fD.includes(C)) return;
                        let a = c.F[C];
                        if (!a) return;
                        let l = {
                            hash: r,
                            pageId: a,
                            entityType: S,
                            entityId: O,
                            entityPosX: N,
                            entityPosY: F,
                            objectsCount: P,
                            viewUuid: i,
                            objectType: w,
                            objectId: k,
                            objectPosX: D,
                            objectPosY: B,
                        };
                        (void 0 !== I && ((l.filterKey = I), (l.filterValue = j), (l.filterPos = M)),
                            d.qG.includes(C) && ((l.tabId = E), (l.tabPos = g), (l.isTabSelectedByDefault = b)),
                            z && (l.skeletonId = z),
                            'string' == typeof y && 'string' == typeof R && ((l.mainObjectType = R), (l.mainObjectId = y)),
                            U && (l.displayReasonId = U));
                        let u = (0, o.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (n ? (0, s.Pf)(t.evgenInstance, u) : (0, s.nv)(t.evgenInstance, u));
                    },
                    [t, U, O, N, F, S, I, M, j, r, b, e, y, R, k, D, B, w, P, C, z, E, g],
                );
            };
        },
        6304: (e, t, r) => {
            'use strict';
            r.d(t, { WithOffline: () => l });
            var n = r(88204),
                o = r(36484),
                s = r(62562),
                i = r(79645),
                a = r(27954);
            let l = (0, n.PA)((e) => {
                let { fallback: t, children: r } = e,
                    n = (0, s.N)(),
                    { slam: l } = (0, a.g)(),
                    c = n.get(o.U2);
                return (0, i.g)(c) || l.isOfflineModeEnabled ? r : t;
            });
        },
        6323: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => l });
            var n = r(25839),
                o = r(74631),
                s = r(61493),
                i = r(23818);
            let a = (e) => {
                    let { isAvailable: t = !0, className: r, fallbackIconSize: o, forwardRef: a, ...l } = e;
                    return t
                        ? (0, n.jsx)(i._V, { ref: a, className: r, fallbackIconSize: o, ...l, 'data-test-id': s.S7.ENTITY_COVER_IMAGE })
                        : (0, n.jsx)(i.Ab, { className: r, iconSize: o, iconVariant: 'unavailable', 'data-test-id': s.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                l = (0, o.forwardRef)((e, t) => (0, n.jsx)(a, { forwardRef: t, ...e }));
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => h });
            var n = r(25839),
                o = r(82298),
                s = r(28631),
                i = r(74631);
            let a = (e) => {
                    let { style: t, forwardRef: r, context: o, ...s } = e,
                        i = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        a = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': i, style: { ...t }, ref: r, ...s });
                },
                l = (0, i.forwardRef)((e, t) => (0, n.jsx)(a, { forwardRef: t, ...e }));
            var c = r(45300),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: s, withHeader: i, withForceScroll: a, ...l } = e;
                    return (0, n.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: i, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: r,
                        ...l,
                        tabIndex: -1,
                    });
                },
                _ = (0, i.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
            var m = r(10508),
                f = r(63257);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: s = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, p] = (0, i.useState)(null),
                        h = (0, i.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), l.length > 0 && p(e), t && r)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < n; e++) r(e);
                                    }
                                }, s),
                            [s, o, t, r, l],
                        );
                    (0, i.useEffect)(() => {
                        l.length > 0 && _ && h(_);
                    }, l);
                    let v = (0, i.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, n.jsx)(f.sN, { ref: d, rangeChanged: h, totalCount: a, endReached: v, ...u });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: f,
                            overscan: h = 700,
                            pageSize: v = 20,
                            totalCount: C,
                            totalRequests: x,
                            debounceDurationInMs: E,
                            initialItemCount: g,
                            minInitialItemCount: b = 20,
                            handleRef: A,
                            alwaysShowScrollbar: S = !1,
                            testId: O,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...y
                        } = e,
                        [R, T] = (0, i.useState)(!1),
                        I = (0, i.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        j = (0, i.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : l,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : l,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, x, N]),
                        M = g ? Math.min(g, b) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: R || S, [d().root_notScrolling]: !R && !S }, t),
                        'data-test-id': O,
                        children: [
                            N && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, n.jsx)(p, {
                                overscan: h,
                                components: j,
                                listClassName: f,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: A,
                                totalCount: C,
                                pageSize: v,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: E,
                                initialItemCount: M,
                                shouldTriggerRangeChangedOn: L,
                                ...y,
                            }),
                            N && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        9079: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => c });
            var n,
                o = r(74631),
                s = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    7354: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var s in ((n = {}), t)) 'key' !== s && (n[s] = t[s]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3616: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let o = r(4377),
                            s = r(810),
                            i = r(5881),
                            a = n(r(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, o.jsx)('a', {}),
                                        block: r,
                                        target: n,
                                        rel: l,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: _,
                                        icon: m,
                                        className: f,
                                        children: p,
                                        textClassName: h = '',
                                        containerClassName: v,
                                        ...C
                                    } = e,
                                    x = (0, s.useId)(),
                                    E = !s.Children.count(p),
                                    g = 'left' === u,
                                    b = null;
                                if (void 0 !== m) {
                                    var A;
                                    b = (0, s.cloneElement)(m, {
                                        className: (0, i.clsx)(
                                            a.default.icon,
                                            { [a.default['icon_position_'.concat(u)]]: !E && u },
                                            null == (A = m.props) ? void 0 : A.className,
                                        ),
                                        key: x,
                                    });
                                }
                                let S = (0, s.useMemo)(
                                    () =>
                                        m
                                            ? (0, o.jsxs)('div', {
                                                  className: (0, i.clsx)(a.default.iconContainer, v),
                                                  children: [g && b, !E && (0, o.jsx)('span', { className: h, children: p }), !g && b],
                                              })
                                            : p,
                                    [p, v, m, g, E, b, h],
                                );
                                return (0, s.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: n,
                                        rel: '_blank' === n && void 0 === l ? 'noopener noreferrer' : l,
                                        href: c,
                                        className: (0, i.clsx)(a.default.root, { [a.default.block]: r, [a.default.flexIcon]: m && _, [a.default.iconOnly]: m && E }, f),
                                        ...C,
                                        ...t.props,
                                    },
                                    S,
                                );
                            };
                        t.Link = (0, s.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {};
            function a(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0));
                var e = a(3616);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = l.r;
            l.X;
        },
        9911: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => d });
            var n,
                o = r(6274),
                s = r(74631),
                i = {
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(s, 2));
                    },
                },
                a = {};
            function l(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (i[e](r, r.exports, l), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = l(810),
                    t = l(352);
                c.l = (r) => {
                    let [n, o] = (0, e.useState)(!0),
                        [s, i] = (0, e.useState)(!0),
                        a = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (o(0 === e.scrollLeft), i(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        a();
                    }, [r, a]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', a),
                                window.addEventListener('resize', a),
                                () => {
                                    (null == e || e.removeEventListener('scroll', a), window.removeEventListener('resize', a));
                                }
                            );
                        }, [r, a]));
                    let l = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: l,
                        shouldBackwardButtonBeDisabled: n,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: n && s,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        10764: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => s });
            var n = r(74631),
                o = r(97904);
            function s() {
                return (0, n.useContext)(o.D);
            }
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => o });
            var n = r(44806);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: o, userRegion: s } = e;
                return 'ru' === s && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : o();
            };
        },
        13232: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            let n = (0, r(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        13246: (e) => {
            e.exports = {
                root: 'ClearMemoryModal_root__gKdij',
                modalHeader: 'ClearMemoryModal_modalHeader__veasf',
                modalContent: 'ClearMemoryModal_modalContent__b7yHr',
                image: 'ClearMemoryModal_image__evvTq',
                description: 'ClearMemoryModal_description__ue94L',
                message: 'ClearMemoryModal_message__mYQpM',
            };
        },
        13624: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => o.a });
            var n = r(68545),
                o = r.n(n);
        },
        14482: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => n });
            let n = (0, r(74631).createContext)({
                blockId: void 0,
                blockType: void 0,
                blockIdForFrom: void 0,
                blockPosX: void 0,
                blockPosY: void 0,
                objectsCount: void 0,
                mainObjectType: void 0,
                mainObjectId: void 0,
                displayReasonId: void 0,
            });
        },
        16534: (e, t, r) => {
            'use strict';
            r.d(t, { SettingsPage: () => eM });
            var n = r(25839),
                o = r(88204),
                s = r(39004),
                i = r(8487),
                a = r(61493),
                l = r(13833),
                c = r(4254),
                d = r(74631);
            r(93588);
            var u = r(85570),
                _ = r(35622),
                m = r(57687),
                f = r(26377),
                p = r.n(f);
            let h = (0, o.PA)(() => {
                let { formatMessage: e } = (0, s.A)(),
                    t = (0, u.S)();
                return (0, n.jsx)(_.a, {
                    className: p().modal,
                    headerClassName: p().modalHeader,
                    contentClassName: p().modalContent,
                    title: e({ id: 'equalizer.title' }),
                    open: t.modal.isOpened,
                    onOpenChange: t.modal.onOpenChange,
                    onClose: t.modal.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    closeButtonDataTestId: a.Kq.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON,
                    'data-test-id': a.Kq.equalizer.EQUALIZER_MODAL,
                    children: (0, n.jsx)(m.r, { title: e({ id: 'equalizer.enable' }), isExpanded: !0, isDisabled: !t.isEnabled }),
                });
            });
            var v = r(36484),
                C = r(62562),
                x = r(91149),
                E = r(92942),
                g = r(90208),
                b = r(89130),
                A = r(27954),
                S = r(31488),
                O = r(44806),
                N = r(95029),
                L = r(95067),
                y = r(57549),
                R = r(6304),
                T = r(10959);
            let I = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, s.A)(),
                    { user: r, experiments: n } = (0, A.g)();
                return (0, T.v)({
                    checkExperiment: (e, t) => n.checkExperiment(e, t),
                    getDisclaimerContent: () => t({ id: 'footer.disclaimer-content' }),
                    getExplicitContent: () => (e ? t({ id: 'footer.explicit-content' }) : t({ id: 'about-app.explicit-content' })),
                    userRegion: r.account.data.userSessionRegionIso,
                });
            };
            var j = r(96433),
                M = r(97522),
                w = r(96146),
                P = r.n(w);
            let k = (0, o.PA)(() => {
                let { formatMessage: e } = (0, s.A)(),
                    {
                        location: t,
                        modals: { aboutAppModal: r },
                    } = (0, A.g)(),
                    o = (0, g.B)(),
                    a = (function () {
                        var e;
                        return null == (e = window.musicDesktop) ? void 0 : e.runtime.branch;
                    })(),
                    { language: l } = (0, j.h)(),
                    d = I();
                return (0, n.jsxs)(_.a, {
                    className: P().root,
                    headerClassName: P().modalHeader,
                    contentClassName: P().modalContent,
                    title: e({ id: 'settings.about-app' }),
                    open: r.isOpened,
                    onOpenChange: r.onOpenChange,
                    onClose: r.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: [
                        (0, n.jsxs)('ul', {
                            className: P().list,
                            children: [
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(M.N, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/performers-and-copyright-holders.html?lang=').concat(l),
                                        children: (0, n.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(i.A, { id: 'footer.links-copyright-holders' }),
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(M.N, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/legal/music_mobile_agreement?lang=').concat(l),
                                        children: (0, n.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(i.A, { id: 'footer.links-terms' }),
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(M.N, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://music.yandex.'.concat(t.tld, '/legal/recommendations/ru/#music'),
                                        children: (0, n.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(i.A, { id: 'footer.links-recommendation-rules' }),
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(M.N, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/index.html?lang=').concat(l),
                                        children: (0, n.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(i.A, { id: 'footer.links-help' }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(c.HL, {
                            className: P().explicitText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            weight: 'medium',
                            dangerouslySetInnerHTML: { __html: d },
                        }),
                        (0, n.jsx)(c.HL, {
                            className: P().companyText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: (0, n.jsx)(i.A, { id: 'about-app.app-name' }),
                        }),
                        (0, n.jsx)(c.HL, {
                            className: P().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-version-short' }, { version: o }),
                        }),
                        (0, n.jsx)(c.HL, {
                            className: P().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-revision' }, { revision: a }),
                        }),
                    ],
                });
            });
            var D = r(4071),
                B = r(23818),
                z = r(96444),
                U = r(51790),
                F = r(13246),
                W = r.n(F);
            let G = { src: '/_next/static/media/clearMemory.33a5df30.png' },
                H = (0, o.PA)(() => {
                    let { formatMessage: e } = (0, s.A)(),
                        {
                            modals: { clearMemoryModal: t },
                        } = (0, A.g)(),
                        { notify: r } = (0, E.l)(),
                        o = (0, z.j)(),
                        a = (0, d.useCallback)(() => {
                            o.clearAll().then(() => {
                                (t.close(),
                                    r(
                                        (0, n.jsx)(U.$, {
                                            message: (0, n.jsx)(c.HL, {
                                                className: W().message,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, n.jsx)(i.A, { id: 'offline.memory-cleared' }),
                                            }),
                                        }),
                                        { containerId: x.u.INFO },
                                    ));
                            });
                        }, [t, r, o]);
                    return (0, n.jsxs)(_.a, {
                        className: W().root,
                        headerClassName: W().modalHeader,
                        contentClassName: W().modalContent,
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: [
                            (0, n.jsx)(B._V, { src: G.src, className: W().image, fit: 'contain', 'aria-hidden': !0 }),
                            (0, n.jsx)(c.HL, {
                                className: W().description,
                                type: 'text',
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                children: (0, n.jsx)(i.A, { id: 'offline.clear-memory-description' }),
                            }),
                            (0, n.jsx)(D.$, {
                                color: 'primary',
                                radius: 'xxxl',
                                size: 'default',
                                onClick: a,
                                children: (0, n.jsx)(i.A, { id: 'interface-actions.clear' }),
                            }),
                        ],
                    });
                });
            var K = r(92057),
                V = r(25243),
                Y = r(18760),
                Q = r(78102),
                X = r.n(Q),
                $ = r(10648),
                J = r(57249),
                q = r(82298),
                Z = r(13624),
                ee = r(71035),
                et = r(82289),
                er = r(49124);
            let en = Z.default.default(
                () =>
                    Promise.resolve()
                        .then(r.bind(r, 10648))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = er.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, $.setWasmUrl)(new URL(J, e).href);
            }
            let eo = (e) => {
                    let { thumbType: t } = e,
                        [r, o] = (0, d.useState)(null);
                    return ((0, d.useEffect)(() => {
                        let e = K.z[t];
                        e &&
                            e().then((e) => {
                                (0, et.J)(e) ? o(e) : o(''.concat(window.location.origin).concat(e));
                            });
                    }, [t]),
                    r)
                        ? (0, n.jsx)(en, { src: r })
                        : null;
                },
                es = (0, o.PA)((e) => {
                    let { thumbId: t, isDefault: r = !1 } = e,
                        { settings: o, user: a, paywall: l } = (0, A.g)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, m] = (0, d.useState)(!1);
                    (0, d.useEffect)(() => {
                        m(!0);
                    }, []);
                    let f = (0, ee.c)((e) => {
                            if ((e.preventDefault(), !a.hasPlus && t !== o.selectedThumbId)) return void l.openModal();
                            o.setCustomPlayerThumb(t);
                        }),
                        p = !!_ && o.selectedThumbId === t;
                    if (r)
                        return (0, n.jsxs)(D.$, {
                            className: (0, q.$)(X().button, { [X().button_selected]: p }),
                            radius: 'xl',
                            onClick: f,
                            withRipple: !1,
                            'aria-pressed': p,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: X().thumbContent,
                                    children: [(0, n.jsx)('div', { className: X().thumbLine }), (0, n.jsx)('div', { className: X().thumbDefault })],
                                }),
                                (0, n.jsx)(c.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'm',
                                    weight: 'medium',
                                    className: X().thumbName,
                                    lineClamp: 1,
                                    children: (0, n.jsx)(i.A, { id: 'branded-player.default' }),
                                }),
                            ],
                        });
                    let h = (0, K.r)(u).get(t);
                    if (!h) return;
                    let v = { '--thumb-height': ''.concat(h.thumb.height, 'px') };
                    return (0, n.jsxs)(D.$, {
                        className: (0, q.$)(X().button, { [X().button_selected]: p }),
                        radius: 'xl',
                        onClick: f,
                        withRipple: !1,
                        'aria-pressed': p,
                        children: [
                            (0, n.jsx)('div', { style: v, className: (0, q.$)(X().thumbContent, X().thumbContent_custom), children: (0, n.jsx)(eo, { thumbType: t }) }),
                            (0, n.jsx)(c.HL, { className: X().thumbName, variant: 'div', size: 'm', weight: 'normal', lineClamp: 1, children: h.name }),
                        ],
                    });
                }),
                ei = (0, o.PA)(() => {
                    let { formatMessage: e } = (0, s.A)(),
                        t = Array.from((0, K.r)(e).keys());
                    return (0, n.jsxs)('div', {
                        className: X().root,
                        children: [
                            (0, n.jsx)(c.HL, {
                                className: X().title,
                                variant: 'div',
                                size: 'l',
                                weight: 'bold',
                                lineClamp: 1,
                                children: (0, n.jsx)(i.A, { id: 'branded-player.player-type' }),
                            }),
                            (0, n.jsxs)(V.m, {
                                restrictionsClassName: X().thumbsContainer,
                                children: [(0, n.jsx)(es, { thumbId: Y.T.DEFAULT, isDefault: !0 }), t.map((e) => (0, n.jsx)(es, { thumbId: e }, e))],
                            }),
                        ],
                    });
                });
            var ea = r(66738),
                el = r(46664),
                ec = r.n(el);
            let ed = (e) => {
                let { title: t, description: r, onClick: o, descriptionDataTestId: s, ...i } = e;
                return (0, n.jsx)(D.$, {
                    className: (0, q.$)(ec().root, ec().important),
                    contentContainerClassName: ec().contentContainer,
                    icon: (0, n.jsx)(ea.I, { className: ec().icon, size: 'xs', variant: 'arrowRight' }),
                    iconPosition: 'right',
                    onClick: o,
                    isBlock: !0,
                    withRipple: !1,
                    withHover: !1,
                    variant: 'text',
                    size: 'xs',
                    ...i,
                    children: (0, n.jsxs)('div', {
                        className: ec().content,
                        children: [
                            (0, n.jsx)(c.HL, { className: ec().title, variant: 'div', size: 'l', weight: 'bold', lineClamp: 1, children: t }),
                            r &&
                                (0, n.jsx)(c.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: ec().description,
                                    'data-test-id': s,
                                    children: r,
                                }),
                        ],
                    }),
                });
            };
            var eu = r(16503),
                e_ = r(99412),
                em = r.n(e_);
            let ef = (e) => {
                let { title: t, onChange: r, isChecked: o, description: s, 'data-test-id': i } = e,
                    a = (0, d.useId)();
                return (0, n.jsxs)('div', {
                    className: em().root,
                    children: [
                        (0, n.jsxs)('div', {
                            className: em().textContainer,
                            children: [
                                (0, n.jsx)(c.HL, {
                                    className: em().title,
                                    id: a,
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'bold',
                                    lineClamp: 1,
                                    'aria-hidden': !0,
                                    children: t,
                                }),
                                s && (0, n.jsx)(c.HL, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: em().description, children: s }),
                            ],
                        }),
                        (0, n.jsx)(eu.l, { isChecked: o, 'aria-describedby': a, onChange: r, 'data-test-id': i }),
                    ],
                });
            };
            var ep = r(65343);
            let eh = {
                    [ep.l.TOGGLE_PLAY]: ['K'],
                    [ep.l.TOGGLE_MUTE]: ['M'],
                    [ep.l.INCREASE_VOLUME]: ['↑'],
                    [ep.l.DECREASE_VOLUME]: ['↓'],
                    [ep.l.LIKE]: ['F'],
                    [ep.l.DISLIKE]: ['D'],
                    [ep.l.MOVE_FORWARD]: ['N'],
                    [ep.l.MOVE_BACKWARD]: ['P'],
                    [ep.l.SLIDE_FORWARD]: ['→', 'L'],
                    [ep.l.SLIDE_BACKWARD]: ['←', 'J'],
                    [ep.l.TOGGLE_REPEAT]: ['R'],
                    [ep.l.TOGGLE_SHUFFLE]: ['S'],
                    [ep.l.TOGGLE_FULLSCREEN_PLAYER]: ['W'],
                    [ep.l.CLOSE]: ['Escape'],
                },
                ev = [
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.play-pause' }), shortcutsAction: ep.l.TOGGLE_PLAY },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.mute' }), shortcutsAction: ep.l.TOGGLE_MUTE },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.skip-forward' }), shortcutsAction: ep.l.SLIDE_FORWARD },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.rewind' }), shortcutsAction: ep.l.SLIDE_BACKWARD },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.volume-up' }), shortcutsAction: ep.l.INCREASE_VOLUME },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.volume-down' }), shortcutsAction: ep.l.DECREASE_VOLUME },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.like' }), shortcutsAction: ep.l.LIKE },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.unlike' }), shortcutsAction: ep.l.DISLIKE },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.switch-repeat-mode' }), shortcutsAction: ep.l.TOGGLE_REPEAT },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.switch-shuffle-mode' }), shortcutsAction: ep.l.TOGGLE_SHUFFLE },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.next-track' }), shortcutsAction: ep.l.MOVE_FORWARD },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.previous-track' }), shortcutsAction: ep.l.MOVE_BACKWARD },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.fullscreen-player' }), shortcutsAction: ep.l.TOGGLE_FULLSCREEN_PLAYER },
                ];
            var eC = r(65300),
                ex = r.n(eC);
            let eE = (0, o.PA)(() => {
                let {
                        modals: { shortcutsModal: e },
                    } = (0, A.g)(),
                    { formatMessage: t } = (0, s.A)(),
                    r = (0, d.useMemo)(() => {
                        let e = (0, n.jsx)(
                            c.HL,
                            { className: ex().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: (0, n.jsx)(i.A, { id: 'shortcuts.or' }) },
                            'or',
                        );
                        return ev.map((t) => {
                            let { shortcutsAction: r, formattedMessage: o } = t,
                                s = eh[r].map((e, t) =>
                                    (0, n.jsx)(
                                        'div',
                                        {
                                            className: ex().button,
                                            children: (0, n.jsx)(c.HL, { variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: e }),
                                        },
                                        t,
                                    ),
                                );
                            return (
                                s.length > 1 && s.splice(1, 0, e),
                                (0, n.jsx)(
                                    'li',
                                    {
                                        children: (0, n.jsxs)('div', {
                                            className: ex().content,
                                            children: [
                                                (0, n.jsx)(c.HL, { className: ex().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: o }),
                                                (0, n.jsx)('div', { className: ex().buttons, children: s }),
                                            ],
                                        }),
                                    },
                                    r,
                                )
                            );
                        });
                    }, []);
                return (0, n.jsx)(_.a, {
                    className: ex().root,
                    headerClassName: ex().modalHeader,
                    contentClassName: ex().modalContent,
                    title: t({ id: 'settings.shortcuts' }),
                    open: e.isOpened,
                    onOpenChange: e.onOpenChange,
                    onClose: e.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: t({ id: 'interface-actions.close' }),
                    children: (0, n.jsx)('ul', { className: ex().list, children: r }),
                });
            });
            var eg = r(80410),
                eb = r.n(eg);
            let eA = (0, o.PA)(() => {
                let e = (0, g.B)(),
                    t = (0, C.N)().get(v.oo),
                    {
                        modals: { shortcutsModal: r, aboutAppModal: o, clearMemoryModal: i },
                        experiments: l,
                        wizard: c,
                        user: _,
                        slam: m,
                        settings: f,
                        sonataState: p,
                    } = (0, A.g)(),
                    T = (0, u.S)(),
                    { notify: I } = (0, E.l)(),
                    { formatMessage: j } = (0, s.A)(),
                    M = (0, b.g)(),
                    w = T.isAvailable && !f.isMobile,
                    P = l.checkExperiment(O.z.WebNextCrossMediaPlayer, 'on'),
                    D = l.checkExperiment(O.z.WebNextAIContentReductionSetting, 'on'),
                    B = _.hasPlus,
                    z = f.isLiteVersionModeAvailableForToggle && !0,
                    U = !f.isMobile,
                    F = T.isEnabled ? j({ id: 'equalizer.enabled' }) : j({ id: 'equalizer.disabled' }),
                    W = (0, d.useMemo)(() => j({ id: 'desktop.app-version-short' }, { version: e }), [j, e]),
                    G = (0, d.useCallback)(
                        async (e) => {
                            (await _.setSettings({ isChildModeEnabled: e })) === S.F.ERROR &&
                                I((0, n.jsx)(y.h, { error: j({ id: 'settings.failed-to-change-child-mode' }) }), { containerId: x.u.ERROR });
                        },
                        [_, j, I],
                    ),
                    K = (0, d.useCallback)(
                        (e) => {
                            m.setOfflineMode(e);
                        },
                        [m],
                    ),
                    V = (0, d.useCallback)(() => {
                        i.open();
                    }, [i]),
                    Y = (0, d.useCallback)(
                        (e) => {
                            if (e) return void f.setLiteVersionMode(N.w.ENABLED, !0);
                            f.setLiteVersionMode(N.w.DISABLED, !0);
                        },
                        [f],
                    );
                (0, d.useLayoutEffect)(() => {
                    let e = t.get(L.c.CrossFadeMode);
                    'boolean' == typeof e && p.setCrossFadeMode(e);
                }, [p, t]);
                let Q = (0, d.useCallback)(
                        (e) => {
                            (p.setCrossFadeMode(e), M && (M.isCrossfadeEnabled.value = e));
                        },
                        [p, M],
                    ),
                    X = (0, d.useCallback)(
                        async (e) => {
                            (await _.setSettings({ aiContentReductionEnabled: e })) === S.F.ERROR &&
                                I((0, n.jsx)(y.h, { error: j({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR });
                        },
                        [_, j, I],
                    );
                return (0, n.jsxs)('ul', {
                    className: eb().root,
                    'data-test-id': a.e8.settings.SETTINGS_LIST,
                    children: [
                        B &&
                            (0, n.jsx)('li', {
                                className: eb().item,
                                children: (0, n.jsx)(ef, {
                                    title: j({ id: 'offline.offline-mode' }),
                                    description: j({ id: 'offline.offline-mode-description' }),
                                    onChange: K,
                                    isChecked: !!m.isOfflineModeEnabled,
                                    'data-test-id': a.e8.settings.OFFLINE_MODE_TOGGLE,
                                }),
                            }),
                        B &&
                            (0, n.jsxs)('li', {
                                className: eb().item,
                                children: [(0, n.jsx)(ed, { title: j({ id: 'offline.clear-memory' }), onClick: V }), (0, n.jsx)(H, {})],
                            }),
                        z &&
                            (0, n.jsx)('li', {
                                className: eb().item,
                                children: (0, n.jsx)(ef, {
                                    title: j({ id: 'lite-version.title' }),
                                    description: j({ id: 'lite-version.description' }),
                                    onChange: Y,
                                    isChecked: f.isLiteVersionModeEnabled,
                                }),
                            }),
                        w &&
                            (0, n.jsxs)('li', {
                                className: eb().item,
                                children: [
                                    (0, n.jsx)(ed, {
                                        title: j({ id: 'equalizer.title' }),
                                        description: F,
                                        onClick: T.modal.open,
                                        descriptionDataTestId: a.e8.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION,
                                        'data-test-id': a.e8.settings.SETTINGS_EQUALIZER_BUTTON,
                                    }),
                                    (0, n.jsx)(h, {}),
                                ],
                            }),
                        P &&
                            (0, n.jsx)('li', {
                                className: eb().item,
                                children: (0, n.jsx)(ef, { title: j({ id: 'settings.crossfade' }), onChange: Q, isChecked: p.isCrossFadeEnabled }),
                            }),
                        D &&
                            (0, n.jsx)('li', {
                                className: eb().item,
                                children: (0, n.jsx)(ef, {
                                    title: j({ id: 'settings.ai-content-reduction' }),
                                    description: j({ id: 'settings.ai-content-reduction-description' }),
                                    onChange: X,
                                    isChecked: _.settings.aiContentReductionEnabled,
                                    'data-test-id': a.e8.settings.SETTINGS_AI_CONTENT_REDUCTION_BUTTON,
                                }),
                            }),
                        (0, n.jsx)(R.WithOffline, {
                            fallback: (0, n.jsx)('li', {
                                className: eb().item,
                                children: (0, n.jsx)(ed, {
                                    title: j({ id: 'settings.preferences' }),
                                    description: j({ id: 'settings.preferences-description' }),
                                    onClick: c.modal.open,
                                }),
                            }),
                        }),
                        (0, n.jsx)(R.WithOffline, {
                            fallback:
                                !l.checkExperiment(O.z.WebNextDisableKids, 'on') &&
                                (0, n.jsx)('li', {
                                    className: eb().item,
                                    children: (0, n.jsx)(ef, {
                                        title: j({ id: 'settings.show-child-section' }),
                                        onChange: G,
                                        isChecked: _.settings.isChildModeEnabled,
                                        'data-test-id': a.e8.settings.SETTINGS_KIDS_BUTTON,
                                    }),
                                }),
                        }),
                        (0, n.jsxs)('li', {
                            className: eb().item,
                            children: [(0, n.jsx)(ed, { title: j({ id: 'settings.shortcuts' }), onClick: r.open }), (0, n.jsx)(eE, {})],
                        }),
                        U && (0, n.jsx)('li', { className: eb().item, children: (0, n.jsx)(ei, {}) }),
                        W &&
                            (0, n.jsxs)('li', {
                                className: eb().item,
                                children: [(0, n.jsx)(ed, { title: j({ id: 'settings.about-app' }), description: W, onClick: o.open }), (0, n.jsx)(k, {})],
                            }),
                    ],
                });
            });
            var eS = r(89257),
                eO = r(1407),
                eN = r(21784),
                eL = r(89192),
                ey = r(99401),
                eR = r(26076),
                eT = r(10603),
                eI = r(73748),
                ej = r.n(eI);
            let eM = (0, o.PA)(() => {
                let { formatMessage: e } = (0, s.A)(),
                    { contentScrollRef: t, setContentScrollRef: r } = (0, eL.g)(),
                    o = (0, eN.W)();
                return (0, n.jsxs)(eO.h, {
                    scrollElement: t,
                    outerTitle: e({ id: 'page.settings' }),
                    children: [
                        (0, n.jsx)(eT.Y, {
                            variant: eT.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: o.canBack,
                            children: (0, n.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: (0, n.jsx)(i.A, { id: 'page.settings' }) }),
                        }),
                        (0, n.jsx)(l.N, {
                            ref: r,
                            className: ej().root,
                            containerClassName: ej().scrollableContainer,
                            'data-test-id': a.Xk.settings.SETTINGS_PAGE,
                            children: (0, n.jsxs)('div', {
                                className: ej().container,
                                children: [
                                    (0, n.jsx)('div', { className: ej().content, children: (0, n.jsx)(eA, {}) }),
                                    (0, n.jsx)(eS.p, {}),
                                    (0, n.jsx)(eR.A, { children: (0, n.jsx)(ey.w, { className: ej().footer }) }),
                                ],
                            }),
                        }),
                    ],
                });
            });
        },
        18760: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => n });
            var n = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        19412: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => c });
            var n = r(25839),
                o = r(82298),
                s = r(61493),
                i = r(23976),
                a = r(40828),
                l = r.n(a);
            let c = (e) => {
                let {
                    isActive: t,
                    className: r,
                    shimmerClassName: a,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: f,
                    radius: p = 'l',
                } = e;
                return (0, n.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, o.$)(l().root, r),
                    'data-test-id': s.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        f && (0, n.jsx)(i.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, n.jsx)(i.W, { isActive: t, className: (0, o.$)(l().cover, a, { [l().cover_round]: c, [l().cover_withSubcover]: f }), radius: p }),
                        _ &&
                            (0, n.jsx)('div', {
                                className: (0, o.$)(l().infoContainer, l()['content_linesCount_'.concat(m)], { [l().infoContainer_centered]: u }),
                                children: (0, n.jsx)(i.W, { isActive: t, className: (0, o.$)(l().title, { [l().title_withSubcover]: f }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        20258: (e, t, r) => {
            'use strict';
            r.d(t, { _Q: () => n, fD: () => s, qG: () => i, xK: () => o });
            var n = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
            let o = [
                    'home',
                    'own_collection',
                    'landing',
                    'own_artists',
                    'artist',
                    'artist_concerts_screen',
                    'non_music',
                    'playlist',
                    'search',
                    'video_player',
                    'label',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_unified_screen',
                ],
                s = [
                    'home',
                    'landing',
                    'non_music',
                    'own_collection',
                    'own_artists',
                    'search',
                    'artist',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_limit_screen',
                    'multivibe_unified_screen',
                ],
                i = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        20790: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => s });
            var n = r(74631),
                o = r(73810);
            let s = () => (0, n.useContext)(o.P);
        },
        22034: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        22984: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        23775: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        24227: (e, t, r) => {
            'use strict';
            r.d(t, { _K: () => m, ns: () => _, ze: () => f, Ay: () => v });
            var n = r(81257),
                o = r(87895),
                s = r(74631),
                i = r(71910);
            let a = { disabled: !1 };
            var l = r(83218),
                c = r(85688),
                d = 'unmounted',
                u = 'exited',
                _ = 'entering',
                m = 'entered',
                f = 'exiting',
                p = (function (e) {
                    function t(t, r) {
                        var n,
                            o = e.call(this, t, r) || this,
                            s = r && !r.isMounting ? t.enter : t.appear;
                        return (
                            (o.appearStatus = null),
                            t.in ? (s ? ((n = u), (o.appearStatus = _)) : (n = m)) : (n = t.unmountOnExit || t.mountOnEnter ? d : u),
                            (o.state = { status: n }),
                            (o.nextCallback = null),
                            o
                        );
                    }
                    ((0, o.A)(t, e),
                        (t.getDerivedStateFromProps = function (e, t) {
                            return e.in && t.status === d ? { status: u } : null;
                        }));
                    var r = t.prototype;
                    return (
                        (r.componentDidMount = function () {
                            this.updateStatus(!0, this.appearStatus);
                        }),
                        (r.componentDidUpdate = function (e) {
                            var t = null;
                            if (e !== this.props) {
                                var r = this.state.status;
                                this.props.in ? r !== _ && r !== m && (t = _) : (r === _ || r === m) && (t = f);
                            }
                            this.updateStatus(!1, t);
                        }),
                        (r.componentWillUnmount = function () {
                            this.cancelNextCallback();
                        }),
                        (r.getTimeouts = function () {
                            var e,
                                t,
                                r,
                                n = this.props.timeout;
                            return (
                                (e = t = r = n),
                                null != n && 'number' != typeof n && ((e = n.exit), (t = n.enter), (r = void 0 !== n.appear ? n.appear : t)),
                                { exit: e, enter: t, appear: r }
                            );
                        }),
                        (r.updateStatus = function (e, t) {
                            if ((void 0 === e && (e = !1), null !== t))
                                if ((this.cancelNextCallback(), t === _)) {
                                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                        var r = this.props.nodeRef ? this.props.nodeRef.current : i.findDOMNode(this);
                                        r && (0, c.F)(r);
                                    }
                                    this.performEnter(e);
                                } else this.performExit();
                            else this.props.unmountOnExit && this.state.status === u && this.setState({ status: d });
                        }),
                        (r.performEnter = function (e) {
                            var t = this,
                                r = this.props.enter,
                                n = this.context ? this.context.isMounting : e,
                                o = this.props.nodeRef ? [n] : [i.findDOMNode(this), n],
                                s = o[0],
                                l = o[1],
                                c = this.getTimeouts(),
                                d = n ? c.appear : c.enter;
                            if ((!e && !r) || a.disabled)
                                return void this.safeSetState({ status: m }, function () {
                                    t.props.onEntered(s);
                                });
                            (this.props.onEnter(s, l),
                                this.safeSetState({ status: _ }, function () {
                                    (t.props.onEntering(s, l),
                                        t.onTransitionEnd(d, function () {
                                            t.safeSetState({ status: m }, function () {
                                                t.props.onEntered(s, l);
                                            });
                                        }));
                                }));
                        }),
                        (r.performExit = function () {
                            var e = this,
                                t = this.props.exit,
                                r = this.getTimeouts(),
                                n = this.props.nodeRef ? void 0 : i.findDOMNode(this);
                            if (!t || a.disabled)
                                return void this.safeSetState({ status: u }, function () {
                                    e.props.onExited(n);
                                });
                            (this.props.onExit(n),
                                this.safeSetState({ status: f }, function () {
                                    (e.props.onExiting(n),
                                        e.onTransitionEnd(r.exit, function () {
                                            e.safeSetState({ status: u }, function () {
                                                e.props.onExited(n);
                                            });
                                        }));
                                }));
                        }),
                        (r.cancelNextCallback = function () {
                            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
                        }),
                        (r.safeSetState = function (e, t) {
                            ((t = this.setNextCallback(t)), this.setState(e, t));
                        }),
                        (r.setNextCallback = function (e) {
                            var t = this,
                                r = !0;
                            return (
                                (this.nextCallback = function (n) {
                                    r && ((r = !1), (t.nextCallback = null), e(n));
                                }),
                                (this.nextCallback.cancel = function () {
                                    r = !1;
                                }),
                                this.nextCallback
                            );
                        }),
                        (r.onTransitionEnd = function (e, t) {
                            this.setNextCallback(t);
                            var r = this.props.nodeRef ? this.props.nodeRef.current : i.findDOMNode(this),
                                n = null == e && !this.props.addEndListener;
                            if (!r || n) return void setTimeout(this.nextCallback, 0);
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback],
                                    s = o[0],
                                    a = o[1];
                                this.props.addEndListener(s, a);
                            }
                            null != e && setTimeout(this.nextCallback, e);
                        }),
                        (r.render = function () {
                            var e = this.state.status;
                            if (e === d) return null;
                            var t = this.props,
                                r = t.children,
                                o =
                                    (t.in,
                                    t.mountOnEnter,
                                    t.unmountOnExit,
                                    t.appear,
                                    t.enter,
                                    t.exit,
                                    t.timeout,
                                    t.addEndListener,
                                    t.onEnter,
                                    t.onEntering,
                                    t.onEntered,
                                    t.onExit,
                                    t.onExiting,
                                    t.onExited,
                                    t.nodeRef,
                                    (0, n.A)(t, [
                                        'children',
                                        'in',
                                        'mountOnEnter',
                                        'unmountOnExit',
                                        'appear',
                                        'enter',
                                        'exit',
                                        'timeout',
                                        'addEndListener',
                                        'onEnter',
                                        'onEntering',
                                        'onEntered',
                                        'onExit',
                                        'onExiting',
                                        'onExited',
                                        'nodeRef',
                                    ]));
                            return s.createElement(l.A.Provider, { value: null }, 'function' == typeof r ? r(e, o) : s.cloneElement(s.Children.only(r), o));
                        }),
                        t
                    );
                })(s.Component);
            function h() {}
            ((p.contextType = l.A),
                (p.propTypes = {}),
                (p.defaultProps = {
                    in: !1,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    onEnter: h,
                    onEntering: h,
                    onEntered: h,
                    onExit: h,
                    onExiting: h,
                    onExited: h,
                }),
                (p.UNMOUNTED = d),
                (p.EXITED = u),
                (p.ENTERING = _),
                (p.ENTERED = m),
                (p.EXITING = f));
            let v = p;
        },
        25195: (e, t, r) => {
            'use strict';
            r.d(t, { u: () => s });
            var n = r(74631),
                o = r(57487);
            function s() {
                return (0, n.useContext)(o.E);
            }
        },
        25488: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => s });
            var n = r(74631),
                o = r(66192);
            function s() {
                return (0, n.useContext)(o.l);
            }
        },
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var n = r(25839);
            r(93588);
            var o = r(400),
                s = r.n(o);
            let i = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: s().empty });
            };
        },
        26742: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => s });
            var n = r(74631),
                o = r(14482);
            function s() {
                return (0, n.useContext)(o.p);
            }
        },
        27819: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            let n = {
                src: '/_next/static/media/artist.d238337d.webp',
                height: 327,
                width: 327,
                blurDataURL:
                    'data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABN6AmAAFGLREF9q0aERG4Qx2sIslqLIhkYEj/WQECkgJwcBfR/5j9mQEnwGchWUgR7oAz228AAFZQOCA0AAAA0AEAnQEqCAAIAAJAOCWUAAMX+VdAjqAA/ubxr1dKCvvMhnGE/guc0nvMLJJkD5h+3R4AAA==',
                blurWidth: 8,
                blurHeight: 8,
            };
        },
        31488: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            var n = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        37314: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => s });
            var n = r(74631),
                o = r(39752);
            function s() {
                return (0, n.useContext)(o.S);
            }
        },
        37922: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        38457: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 16534));
        },
        39752: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => n });
            let n = (0, r(74631).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        40828: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        43354: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => s });
            var n = r(74631);
            let o = (0, n.createContext)(null),
                s = () => (0, n.useContext)(o);
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
        45705: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => _ });
            var n = r(67608),
                o = r(81257),
                s = r(87895);
            function i(e, t) {
                return e
                    .replace(RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
                    .replace(/\s+/g, ' ')
                    .replace(/^\s*|\s*$/g, '');
            }
            var a = r(74631),
                l = r(24227),
                c = r(85688),
                d = function (e, t) {
                    return (
                        e &&
                        t &&
                        t.split(' ').forEach(function (t) {
                            e.classList
                                ? e.classList.remove(t)
                                : 'string' == typeof e.className
                                  ? (e.className = i(e.className, t))
                                  : e.setAttribute('class', i((e.className && e.className.baseVal) || '', t));
                        })
                    );
                },
                u = (function (e) {
                    function t() {
                        for (var t, r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                        return (
                            ((t = e.call.apply(e, [this].concat(n)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                            (t.onEnter = function (e, r) {
                                var n = t.resolveArguments(e, r),
                                    o = n[0],
                                    s = n[1];
                                (t.removeClasses(o, 'exit'), t.addClass(o, s ? 'appear' : 'enter', 'base'), t.props.onEnter && t.props.onEnter(e, r));
                            }),
                            (t.onEntering = function (e, r) {
                                var n = t.resolveArguments(e, r),
                                    o = n[0],
                                    s = n[1];
                                (t.addClass(o, s ? 'appear' : 'enter', 'active'), t.props.onEntering && t.props.onEntering(e, r));
                            }),
                            (t.onEntered = function (e, r) {
                                var n = t.resolveArguments(e, r),
                                    o = n[0],
                                    s = n[1] ? 'appear' : 'enter';
                                (t.removeClasses(o, s), t.addClass(o, s, 'done'), t.props.onEntered && t.props.onEntered(e, r));
                            }),
                            (t.onExit = function (e) {
                                var r = t.resolveArguments(e)[0];
                                (t.removeClasses(r, 'appear'), t.removeClasses(r, 'enter'), t.addClass(r, 'exit', 'base'), t.props.onExit && t.props.onExit(e));
                            }),
                            (t.onExiting = function (e) {
                                var r = t.resolveArguments(e)[0];
                                (t.addClass(r, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e));
                            }),
                            (t.onExited = function (e) {
                                var r = t.resolveArguments(e)[0];
                                (t.removeClasses(r, 'exit'), t.addClass(r, 'exit', 'done'), t.props.onExited && t.props.onExited(e));
                            }),
                            (t.resolveArguments = function (e, r) {
                                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, r];
                            }),
                            (t.getClassNames = function (e) {
                                var r = t.props.classNames,
                                    n = 'string' == typeof r,
                                    o = n && r ? r + '-' : '',
                                    s = n ? '' + o + e : r[e],
                                    i = n ? s + '-active' : r[e + 'Active'],
                                    a = n ? s + '-done' : r[e + 'Done'];
                                return { baseClassName: s, activeClassName: i, doneClassName: a };
                            }),
                            t
                        );
                    }
                    (0, s.A)(t, e);
                    var r = t.prototype;
                    return (
                        (r.addClass = function (e, t, r) {
                            var n,
                                o = this.getClassNames(t)[r + 'ClassName'],
                                s = this.getClassNames('enter').doneClassName;
                            ('appear' === t && 'done' === r && s && (o += ' ' + s),
                                'active' === r && e && (0, c.F)(e),
                                o &&
                                    ((this.appliedClasses[t][r] = o),
                                    (n = o),
                                    e &&
                                        n &&
                                        n.split(' ').forEach(function (t) {
                                            e.classList
                                                ? e.classList.add(t)
                                                : (e.classList
                                                      ? t && e.classList.contains(t)
                                                      : -1 !== (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + t + ' ')) ||
                                                  ('string' == typeof e.className
                                                      ? (e.className = e.className + ' ' + t)
                                                      : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + t));
                                        })));
                        }),
                        (r.removeClasses = function (e, t) {
                            var r = this.appliedClasses[t],
                                n = r.base,
                                o = r.active,
                                s = r.done;
                            ((this.appliedClasses[t] = {}), n && d(e, n), o && d(e, o), s && d(e, s));
                        }),
                        (r.render = function () {
                            var e = this.props,
                                t = (e.classNames, (0, o.A)(e, ['classNames']));
                            return a.createElement(
                                l.Ay,
                                (0, n.A)({}, t, {
                                    onEnter: this.onEnter,
                                    onEntered: this.onEntered,
                                    onEntering: this.onEntering,
                                    onExit: this.onExit,
                                    onExiting: this.onExiting,
                                    onExited: this.onExited,
                                }),
                            );
                        }),
                        t
                    );
                })(a.Component);
            ((u.defaultProps = { classNames: '' }), (u.propTypes = {}));
            let _ = u;
        },
        46450: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    bindSnapshot: function () {
                        return i;
                    },
                    createAsyncLocalStorage: function () {
                        return s;
                    },
                    createSnapshot: function () {
                        return a;
                    },
                }));
            let r = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class n {
                disable() {
                    throw r;
                }
                getStore() {}
                run() {
                    throw r;
                }
                exit() {
                    throw r;
                }
                enterWith() {
                    throw r;
                }
                static bind(e) {
                    return e;
                }
            }
            let o = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function s() {
                return o ? new o() : new n();
            }
            function i(e) {
                return o ? o.bind(e) : n.bind(e);
            }
            function a() {
                return o
                    ? o.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        46664: (e) => {
            e.exports = {
                icon: 'SettingsListButtonItem_icon__WULZ1',
                root: 'SettingsListButtonItem_root__3dtV2',
                important: 'SettingsListButtonItem_important__AcEon',
                contentContainer: 'SettingsListButtonItem_contentContainer__jqoKg',
                content: 'SettingsListButtonItem_content___Opuo',
                title: 'SettingsListButtonItem_title__npCza',
                description: 'SettingsListButtonItem_description__g8_Ba',
            };
        },
        48552: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => o });
            var n = r(28410);
            let o = n.gK.model('CustomPlayerThumb', { href: n.gK.string, width: n.gK.number, height: n.gK.number });
        },
        49656: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => o });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useReturnValue = void 0), (n.useReturnValue = (e) => e()), n.__esModule);
            var o = n.useReturnValue;
        },
        49971: (e, t, r) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(25839),
                r(71910),
                r(65780),
                r(4865));
        },
        51246: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => d, hg: () => c });
            var n,
                o = r(74631),
                s = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    8765: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    3550: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    4353: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2445: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var s in ((n = {}), t)) 'key' !== s && (n[s] = t[s]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7742: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(8532),
                            a = n(r(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: n,
                                    menuControl: l,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: m,
                                    labelText: f,
                                } = e,
                                p = d || r,
                                h = l || n;
                            return (0, o.jsxs)('div', {
                                className: (0, s.clsx)(
                                    a.default.root,
                                    a.default.controls,
                                    { [a.default.controls_visible]: u },
                                    a.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, o.jsx)('div', { className: a.default.top, children: c }),
                                    (0, o.jsxs)('div', {
                                        className: (0, s.clsx)(a.default.bottom, m),
                                        children: [
                                            p && (0, o.jsxs)('div', { className: a.default.bottom_left, children: [d, r] }),
                                            h && (0, o.jsxs)('div', { className: a.default.bottom_right, children: [l, n] }),
                                        ],
                                    }),
                                    !!f && (0, o.jsx)(i.Label, { className: a.default.label, children: f }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let o = r(4377),
                            s = r(810),
                            i = r(5881),
                            a = r(8903),
                            l = r(6530),
                            c = n(r(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: n,
                                    textPosition: s = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: m,
                                    chart: f,
                                    children: p,
                                    srTitle: h,
                                    wrapperClassName: v,
                                    ...C
                                } = e;
                                return (0, o.jsxs)('div', {
                                    className: (0, i.clsx)(c.default.root, n),
                                    ref: t,
                                    ...C,
                                    children: [
                                        (0, o.jsx)(l.SROnly, { children: null != h ? h : u }),
                                        (0, o.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, o.jsxs)('div', {
                                            className: (0, i.clsx)(c.default.wrapper, v),
                                            children: [
                                                f,
                                                (0, o.jsxs)('div', {
                                                    className: (0, i.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(s)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, o.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, o.jsx)(a.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    m,
                                                                ],
                                                            }),
                                                        _,
                                                        p,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, s.forwardRef)((e, t) => (0, o.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(8903),
                            a = n(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: n = 's', ...l } = e;
                            return (0, o.jsx)(i.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: n,
                                lineClamp: 1,
                                className: (0, s.clsx)(a.default.root, r),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var n = r(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return n.Label;
                            },
                        });
                    },
                    5531: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(810),
                            a = n(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: n, ...l } = e,
                                c = (0, s.clsx)(a.default.root, { [a.default.focusable]: r }, t);
                            return (0, i.isValidElement)(n)
                                ? (0, i.cloneElement)(n, { ...l, className: (0, s.clsx)(c, n.props.className) })
                                : (0, o.jsx)('span', { className: c, ...l, children: n });
                        };
                    },
                    6530: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var n = r(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return n.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(810),
                            a = r(5987),
                            l = n(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: n = 'text', size: i = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(a.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, s.clsx)(l.default.root, l.default['root_'.concat(n, '_').concat(i)], l.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, i.forwardRef)((e, r) => (0, o.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(810),
                            a = r(5987),
                            l = n(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: n = 'bold', size: i = 's', className: c, children: d, ...u } = e;
                            return (0, o.jsx)(a.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, s.clsx)(l.default.root, l.default['root_size_'.concat(i)], l.default['root_weight_'.concat(n)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, i.forwardRef)((e, r) => (0, o.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(810),
                            a = n(r(61));
                        function l(e) {
                            let { forwardRef: t, style: r, className: n, children: i, variant: l, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof i ? i : void 0;
                            return (0, o.jsx)(l, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, s.clsx)(
                                    a.default.root,
                                    { [a.default.root_clamp]: c && c > 0, [a.default.root_clamp_oneline]: c && 1 === c, [a.default.root_clamp_multiline]: c && c > 1 },
                                    n,
                                ),
                                ...d,
                                children: i,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, i.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var n = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return n.Caption;
                            },
                        });
                        var o = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return o.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {};
            function a(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X$', { value: !0 }), (l.kk = l.m7 = void 0));
                var e = a(7093);
                Object.defineProperty(l, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = a(7742);
                Object.defineProperty(l, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = l.kk,
                d = l.m7;
            l.X$;
        },
        51859: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n, u: () => o });
            var n = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                o = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        52512: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            var n = r(74631),
                o = r(3669),
                s = r(13232);
            let i = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = (0, n.useRef)(null),
                    a = (0, o.D)(),
                    l = (0, n.useId)(),
                    c = (0, n.useContext)(s.B),
                    d = (0, n.useCallback)(
                        (n, o) => {
                            (e ? e(n, r ? o : void 0) : a(n, o), t && c.unobserveElement(l));
                        },
                        [e, c, l, a, t, r],
                    );
                return (
                    (0, n.useEffect)(
                        () => (
                            c.observeElement({ elementRef: i, elementId: l, callback: d }),
                            () => {
                                c.unobserveElement(l);
                            }
                        ),
                        [e, c, d, l, a],
                    ),
                    { ref: i, intersectionPropertyId: l }
                );
            };
        },
        53424: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            let n = (0, r(74631).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        57487: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => n });
            let n = (0, r(74631).createContext)({ offsetBlockPosY: void 0 });
        },
        57549: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => d });
            var n = r(25839),
                o = r(82298),
                s = r(69084),
                i = r(4254),
                a = r(51790),
                l = r(23775),
                c = r.n(l);
            let d = (e) => {
                let { error: t, closeToast: r, className: l } = e;
                return (0, n.jsx)(a.$, {
                    className: (0, o.$)(c().root, l),
                    message: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(s.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, n.jsx)(i.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: r,
                });
            };
        },
        58069: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => s });
            var n = r(36619),
                o = r(20258);
            let s = {
                [o._Q.HOME]: n.LandingBlockPageID.MainScreen,
                [o._Q.NON_MUSIC]: n.LandingBlockPageID.NonmusicLandingScreen,
                [o._Q.OWN_COLLECTION]: n.LandingBlockPageID.CollectionLandingScreen,
                [o._Q.LANDING]: n.LandingBlockPageID.DynamicScreen,
                [o._Q.OWN_ARTISTS]: n.LandingBlockPageID.CollectionArtistsScreen,
                [o._Q.SEARCH]: n.LandingBlockPageID.SearchScreen,
                [o._Q.ARTIST]: n.LandingBlockPageID.ArtistScreen,
                [o._Q.CONCERTS]: n.LandingBlockPageID.ConcertsLandingScreen,
                [o._Q.CONCERT]: n.LandingBlockPageID.ConcertScreen,
                [o._Q.CONCERT_LOCATION_SELECTOR]: n.LandingBlockPageID.ConcertLocationSelector,
                [o._Q.ALBUM]: n.LandingBlockPageID.AlbumScreen,
                [o._Q.PLAYLIST]: n.LandingBlockPageID.PlaylistScreen,
                [o._Q.SLIDES_SCREEN]: n.LandingBlockPageID.SlidesScreen,
                [o._Q.PROMOLANDING_ALBUM]: n.LandingBlockPageID.PromolandingAlbumScreen,
                [o._Q.WAVE_LANDING_SCREEN]: n.LandingBlockPageID.WaveLandingScreen,
                [o._Q.FACT_SCREEN]: n.LandingBlockPageID.FactScreen,
                [o._Q.COLLECTION_VIBE_ROOMS]: n.LandingBlockPageID.MultivibeScreen,
                [o._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: n.LandingBlockPageID.MultivibeSendingInvitationScreen,
                [o._Q.MULTIVIBE_ACTION_SCREEN]: n.LandingBlockPageID.MultivibeActionScreen,
                [o._Q.MULTIVIBE_LIMIT_SCREEN]: n.LandingBlockPageID.MultivibeLimitScreen,
                [o._Q.MULTIVIBE_UNIFIED_SCREEN]: n.LandingBlockPageID.MultivibeUnifiedScreen,
            };
        },
        59450: (e, t, r) => {
            'use strict';
            r.d(t, { vZ: () => h, st: () => s, gf: () => a });
            var n = r(74631);
            let o = (0, n.createContext)(null);
            function s() {
                return (0, n.useContext)(o);
            }
            let i = (0, n.createContext)({ hash: void 0 });
            function a() {
                return (0, n.useContext)(i);
            }
            var l = r(25839),
                c = r(59342);
            let d = (e) => {
                let { children: t } = e,
                    r = (0, n.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, l.jsx)(i.Provider, { value: r, children: t });
            };
            class u {
                makeParams() {
                    return {};
                }
            }
            class _ {
                makeParams() {
                    return {};
                }
            }
            var m = r(58025);
            class f {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, r) {
                    ((0, m._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (n, o) => {
                                let s = { ...o, ...t.getGlobalParams(), ...r.getPlatformParams() };
                                e.trackEvent(n, s);
                            },
                        }));
                }
            }
            let p = null,
                h = (e) => {
                    let { allowAnalyticsLogs: t, children: r, evgenUserParam: s, logger: i, metrika: a } = e,
                        c = (0, n.useMemo)(() => {
                            if (p) return p;
                            let e = (function (e, t, r) {
                                let n = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: r, requestsSendingDelay: n } = e,
                                        o = [];
                                    return (
                                        !(function e() {
                                            (o.length > 0 && t(o.splice(0, r)), window.setTimeout(e, n));
                                        })(),
                                        {
                                            add(e) {
                                                o.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (t) => {
                                        e(t);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, o) {
                                        (r && t.log(e, o), n.add({ [e]: o }));
                                    },
                                };
                            })((e) => a.count(e, s), i, t);
                            return (p = new f(
                                e,
                                (function () {
                                    let e = new u();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new _();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [i, a]);
                    return (0, l.jsx)(o.Provider, { value: c, children: (0, l.jsx)(d, { children: r }) });
                };
        },
        64261: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => n });
            let n = (0, r(74631).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        65300: (e) => {
            e.exports = {
                root: 'ShortcutsModal_root__ro7m4',
                modalHeader: 'ShortcutsModal_modalHeader__IYJ9m',
                modalContent: 'ShortcutsModal_modalContent__SCpYX',
                list: 'ShortcutsModal_list__eS4ox',
                text: 'ShortcutsModal_text__5JJ0j',
                content: 'ShortcutsModal_content__Li9Ip',
                buttons: 'ShortcutsModal_buttons__o_xlC',
                button: 'ShortcutsModal_button__cTIee',
            };
        },
        65343: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => n });
            var n = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
        },
        65780: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return n.workAsyncStorageInstance;
                    },
                }));
            let n = r(90720);
        },
        66192: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => n });
            let n = (0, r(74631).createContext)({
                objectType: void 0,
                objectId: void 0,
                objectPosX: void 0,
                objectPosY: void 0,
                objectPos: void 0,
                objectsCount: void 0,
                mainObjectId: void 0,
                mainObjectType: void 0,
            });
        },
        67379: (e, t, r) => {
            'use strict';
            function n(e) {
                let { params: t, logger: r, context: n } = e,
                    o = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return o.length > 0 ? (r.error('Evgen parameters are not met', { parameters: o.join(', '), incomingParams: t, context: n }), null) : t;
            }
            r.d(t, { F: () => n });
        },
        67608: (e, t, r) => {
            'use strict';
            function n() {
                return (n = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t];
                              for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            r.d(t, { A: () => n });
        },
        68545: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }));
            let n = r(20567)._(r(89729));
            function o(e, t) {
                var r;
                let o = {};
                'function' == typeof e && (o.loader = e);
                let s = { ...o, ...t };
                return (0, n.default)({ ...s, modules: null == (r = s.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        69041: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => b });
            var n = r(25839),
                o = r(82298),
                s = r(46189),
                i = r(88204),
                a = r(74631),
                l = r.t(a, 2),
                c = r(61493),
                d = r(9911),
                u = {
                    810: (e) => {
                        e.exports = l;
                    },
                },
                _ = {},
                m = {};
            ((() => {
                (Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0));
                let e = (function e(t) {
                    var r = _[t];
                    if (void 0 !== r) return r.exports;
                    var n = (_[t] = { exports: {} });
                    return (u[t](n, n.exports, e), n.exports);
                })(810);
                m.useForwardRef = function (t, r) {
                    let n = (0, e.useRef)(r);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(n.current) : (t.current = n.current));
                        }, [t]),
                        n
                    );
                };
            })(),
                m.__esModule);
            var f = m.useForwardRef,
                p = r(51859),
                h = r(27954),
                v = r(80986),
                C = r(22034),
                x = r.n(C);
            let E = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                g = (0, i.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: r,
                            forwardRef: i,
                            scrollPadding: l,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: _,
                            buttonSize: m,
                            buttonVariant: C,
                            withSecondaryColor: g,
                        } = e,
                        {
                            settings: { isMobile: b },
                        } = (0, h.g)(),
                        A = f(i, null),
                        { shouldBackwardButtonBeDisabled: S, shouldForwardButtonBeDisabled: O, shouldHideControls: N } = (0, d.Y)(A),
                        [L, y] = (0, a.useMemo)(() => {
                            let e = (0, s.A)(E, l);
                            return [b ? e[p.u.Mobile].start : e[p.u.Desktop].start, b ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [l, b]),
                        R = (0, a.useCallback)(
                            (e) => {
                                var t;
                                let r = null == (t = A.current) ? void 0 : t.children[e],
                                    { current: n } = A;
                                if (!n || !(r instanceof HTMLElement)) return;
                                if (r.offsetLeft - n.scrollLeft < L) {
                                    n.scrollLeft = r.offsetLeft - L;
                                    return;
                                }
                                let o = n.scrollLeft + n.clientWidth - r.offsetLeft - r.offsetWidth;
                                o < y && (n.scrollLeft -= o - y);
                            },
                            [A, y, L],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                var t, n;
                                (R(e), null == (t = (n = r.props).onTabChange) || t.call(n, e));
                            },
                            [r, R],
                        ),
                        I = (0, a.cloneElement)(r, { forwardRef: A, className: (0, o.$)(x().wrapper, r.props.className, x().carousel, x().important), onTabChange: T });
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(
                            x().root,
                            {
                                [x().root_carouselBetweenArrows]: u,
                                [x().root_arrowLeft_hidden]: S,
                                [x().root_arrowRight_hidden]: O,
                                [x().root_arrow_hidden]: S && O && N,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, n.jsx)('div', { className: x().list, children: I }),
                            !b &&
                                (0, n.jsx)(v.X, {
                                    className: (0, o.$)(x().buttons, _),
                                    carouselRef: A,
                                    backwardControlClassName: x().control,
                                    forwardControlClassName: x().control,
                                    withSecondaryColor: g,
                                    buttonSize: m,
                                    buttonVariant: C,
                                }),
                        ],
                    });
                }),
                b = (0, a.forwardRef)((e, t) => (0, n.jsx)(g, { forwardRef: t, ...e }));
        },
        69084: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var n,
                o = r(74631),
                s = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var s in ((n = {}), t)) 'key' !== s && (n[s] = t[s]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5531: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(810),
                            a = n(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: n, ...l } = e,
                                c = (0, s.clsx)(a.default.root, { [a.default.focusable]: r }, t);
                            return (0, i.isValidElement)(n)
                                ? (0, i.cloneElement)(n, { ...l, className: (0, s.clsx)(c, n.props.className) })
                                : (0, o.jsx)('span', { className: c, ...l, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {};
            function a(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = a(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = l.SROnly;
            l.__esModule;
        },
        72594: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => s });
            var n = r(74631),
                o = r(53424);
            function s() {
                return (0, n.useContext)(o.F);
            }
        },
        73748: (e) => {
            e.exports = {
                root: 'SettingsPage_root__BB4lC',
                scrollableContainer: 'SettingsPage_scrollableContainer__qD32i',
                container: 'SettingsPage_container__bIwea',
                content: 'SettingsPage_content__cR6Ra',
                footer: 'SettingsPage_footer__QIqyx',
            };
        },
        73810: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n });
            let n = (0, r(74631).createContext)(null);
        },
        74280: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { f: () => n }),
                (function (e) {
                    ((e.CUSTOM = 'CUSTOM'),
                        (e.DEFAULT = 'DEFAULT'),
                        (e.CLASSICAL = 'CLASSICAL'),
                        (e.CLUB = 'CLUB'),
                        (e.DANCE = 'DANCE'),
                        (e.BASS_BOOST = 'BASS_BOOST'),
                        (e.BASS_AND_TREBLE_BOOST = 'BASS_AND_TREBLE_BOOST'),
                        (e.TREBLE_BOOST = 'TREBLE_BOOST'),
                        (e.SPEAKERS = 'SPEAKERS'),
                        (e.LARGE_HALL = 'LARGE_HALL'),
                        (e.CONCERT = 'CONCERT'),
                        (e.PARTY = 'PARTY'),
                        (e.POP = 'POP'),
                        (e.REGGAE = 'REGGAE'),
                        (e.ROCK = 'ROCK'),
                        (e.SKA = 'SKA'),
                        (e.SOFT = 'SOFT'),
                        (e.SOFT_ROCK = 'SOFT_ROCK'),
                        (e.TECHNO = 'TECHNO'));
                })(n || (n = {})));
        },
        78102: (e) => {
            e.exports = {
                root: 'CustomPlayerThumbSelector_root__DQT1f',
                title: 'CustomPlayerThumbSelector_title__9Eai2',
                thumbsContainer: 'CustomPlayerThumbSelector_thumbsContainer__ywFZ1',
                button: 'CustomPlayerThumbSelector_button__JXiFX',
                button_selected: 'CustomPlayerThumbSelector_button_selected__5_mwm',
                thumbContent: 'CustomPlayerThumbSelector_thumbContent__lAM5O',
                thumbContent_custom: 'CustomPlayerThumbSelector_thumbContent_custom__ZcoKb',
                thumbLine: 'CustomPlayerThumbSelector_thumbLine__Iv4PY',
                thumbDefault: 'CustomPlayerThumbSelector_thumbDefault__3RlO1',
                thumbName: 'CustomPlayerThumbSelector_thumbName__SCX2s',
            };
        },
        79645: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => o });
            var n = r(95067);
            let o = (e) => {
                let t = e.get(n.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        80410: (e) => {
            e.exports = { root: 'Settings_root__FVVrn', item: 'Settings_item__Ksa9h' };
        },
        80986: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => _ });
            var n = r(25839),
                o = r(82298),
                s = r(74631),
                i = r(61493),
                a = r(9911),
                l = r(4071),
                c = r(66738),
                d = r(37922),
                u = r.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: f = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: v, shouldBackwardButtonBeDisabled: C, shouldForwardButtonBeDisabled: x, shouldHideControls: E } = (0, a.Y)(t),
                    g = (0, s.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    b = (0, s.useCallback)(
                        (e) => {
                            (v(), e.stopPropagation());
                        },
                        [v],
                    );
                return (0, n.jsxs)('div', {
                    className: (0, o.$)(u().root, _),
                    'data-test-id': i.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, n.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, r, { [u().control_hidden]: E, [u().control_withSecondaryColor]: m }),
                            onClick: g,
                            size: f,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: C,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, n.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, d, { [u().control_hidden]: E, [u().control_withSecondaryColor]: m }),
                            onClick: b,
                            size: f,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: x,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        81257: (e, t, r) => {
            'use strict';
            function n(e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        r[n] = e[n];
                    }
                return r;
            }
            r.d(t, { A: () => n });
        },
        82064: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => n });
            let n = (0, r(74631).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        82289: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => o });
            var n = r(38097);
            let o = (e) => e.startsWith(n.nl);
        },
        83218: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            let n = r(74631).createContext(null);
        },
        85570: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => i, i: () => s });
            var n = r(74631),
                o = r(36432);
            let s = (0, n.createContext)(null),
                i = () => {
                    let e = (0, n.useContext)(s);
                    if (!e) throw new o.t('Equalizer cannot be null, please add a context provider', { code: 'E_CONTEXT_EQUALIZER_NULL' });
                    return e;
                };
        },
        85688: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            var n = function (e) {
                return e.scrollTop;
            };
        },
        86432: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        87895: (e, t, r) => {
            'use strict';
            function n(e, t) {
                return (n = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                          return ((e.__proto__ = t), e);
                      })(e, t);
            }
            function o(e, t) {
                ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), n(e, t));
            }
            r.d(t, { A: () => o });
        },
        89130: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => o, g: () => s });
            var n = r(74631);
            let o = (0, n.createContext)(null);
            function s() {
                return (0, n.useContext)(o);
            }
        },
        89209: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => n });
            var n = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
        89257: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => W });
            var n = r(25839),
                o = r(82298),
                s = r(88204),
                i = r(74631),
                a = r(39004),
                l = r(8487),
                c = r(61493),
                d = r(68934),
                u = r(4071),
                _ = r(35622),
                m = r(5867),
                f = r(4254),
                p = r(51859),
                h = r(91149),
                v = r(92942),
                C = r(65343),
                x = r(89209),
                E = r(20790),
                g = r(27954),
                b = r(31488),
                A = r(36159),
                S = r(57549),
                O = r(69041),
                N = r(19412),
                L = r(79396),
                y = r(9931),
                R = r(6968),
                T = r(51246),
                I = r(66738),
                j = r(86869),
                M = r(52512),
                w = r(6323),
                P = r(27819),
                k = r(86432),
                D = r.n(k);
            let B = (0, s.PA)((e) => {
                let { className: t, artist: r } = e,
                    { ref: s, intersectionPropertyId: a } = (0, M.n)(),
                    {
                        wizard: { likeArtist: l, isArtistLiked: d },
                    } = (0, g.g)(),
                    { id: _, name: m, coverUri: p } = r,
                    h = (0, i.useCallback)(() => {
                        l(_);
                    }, [l, _]),
                    v = d(_),
                    C = (0, i.useMemo)(
                        () =>
                            (0, n.jsx)(j.t, {
                                className: D().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, n.jsxs)(u.$, {
                                    radius: 'round',
                                    className: D().coverBlock,
                                    variant: 'default',
                                    onClick: h,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': v,
                                    'aria-label': m,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, n.jsx)(w.B, { className: D().image, src: p || P.A.src, fit: 'cover', alt: m, withAvatarReplace: !!p, 'aria-hidden': !0 }),
                                        (0, n.jsx)('div', {
                                            className: (0, o.$)(D().like),
                                            children: (0, n.jsx)(I.I, { variant: 'likedVariant', size: 's', className: D().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [v, p, m, h],
                    );
                return (0, n.jsx)(T.MN, {
                    ref: s,
                    className: (0, o.$)(D().root, { [D().root_selected]: v }, t),
                    textPosition: 'center',
                    title: (0, n.jsx)(f.HL, {
                        'aria-hidden': !0,
                        className: D().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': a,
                    view: C,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var z = r(22984),
                U = r.n(z);
            let F = { [p.u.Desktop]: { start: 40, end: 40 }, [p.u.Mobile]: { start: 40, end: 40 } },
                W = (0, s.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: r } = (0, a.A)(),
                        {
                            wizard: s,
                            settings: { isMobile: p, isWindowsApplication: T, isLinuxApplication: I },
                            user: j,
                        } = (0, g.g)(),
                        { notify: M } = (0, v.l)(),
                        w = (0, E.z)(),
                        [P, k] = (0, d.d)(),
                        D = (0, m.zb)(0),
                        z = (0, i.useMemo)(
                            () => (e) => {
                                var t;
                                if (!D.onTabChange || e === D.value) return;
                                D.onTabChange(e);
                                let r = null == (t = s.genres[e]) ? void 0 : t.id;
                                (s.setFilter(r), null == P || P.scrollTo({ top: 0 }));
                            },
                            [s, D, P],
                        ),
                        W = (0, i.useMemo)(() => {
                            switch (s.selectedArtistsCounter) {
                                case 0:
                                    return r({ id: 'wizard.button-tune' });
                                case 1:
                                    return r({ id: 'wizard.button-little-more' });
                                case 2:
                                    return r({ id: 'wizard.button-one-more' });
                                default:
                                    return r({ id: 'wizard.button-done' });
                            }
                        }, [s.selectedArtistsCounter, r]),
                        G = (0, i.useMemo)(
                            () =>
                                (0, n.jsx)(y.wI, {
                                    className: U().tabCarousel,
                                    ...D,
                                    onTabChange: z,
                                    isShimmerVisible: s.loadingState === A.G.PENDING,
                                    shimmer: (0, n.jsx)(y.zr, { isActive: !0, className: U().tabCarousel, shimmerClassName: U().tabShimmer, count: p ? 2 : 3 }),
                                    children: s.genres.map((e, t) =>
                                        (0, n.jsx)(
                                            L.o,
                                            {
                                                className: (0, o.$)(U().filter, { [U().filter_selected]: t === D.value }),
                                                titleClassName: U().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [s.genres, D, z, s.loadingState, p],
                        ),
                        H = (0, i.useCallback)(() => {
                            s.getArtists(60);
                        }, [s]);
                    (0, i.useEffect)(() => {
                        s.filter && H();
                    }, [s.filter, H]);
                    let K = (0, i.useCallback)(async () => {
                        (await s.getGenres(), H());
                    }, [s, H]);
                    ((0, i.useEffect)(() => {
                        s.modal.isOpened && K();
                    }, [s, s.modal.isOpened, K]),
                        (0, i.useEffect)(() => {
                            s.loadingState === A.G.REJECT &&
                                (s.modal.close(), M((0, n.jsx)(S.h, { error: r({ id: 'error-messages.error-load-wizard' }) }), { containerId: h.u.ERROR }));
                        }, [s, s.getGenres, s.loadingState, r, M]));
                    let V = (0, i.useMemo)(
                            () =>
                                (0, n.jsx)(f.DZ, {
                                    className: U().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, n.jsx)(l.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Y = (0, i.useCallback)(async () => {
                            (s.selectedArtistsCounter < 3 ? s.getArtists() : (await s.finish()) === b.F.OK && (await j.getSettings(), await (null == t ? void 0 : t())),
                                s.modal.close());
                        }, [t, j, s]);
                    return (
                        (0, i.useEffect)(
                            () => (
                                null == w ||
                                    w.addShortcutsListener(x.M.MAIN, C.l.CLOSE, () => {
                                        s.modal.isOpened && Y();
                                    }),
                                () => {
                                    null == w || w.removeShortcutsListener(x.M.MAIN, C.l.CLOSE);
                                }
                            ),
                            [Y, s.modal.isOpened, w],
                        ),
                        (0, n.jsxs)(_.a, {
                            className: (0, o.$)(U().root, { [U().root_withCustomControls]: T || I }),
                            headerClassName: U().modalHeader,
                            contentClassName: U().modalContent,
                            open: s.modal.isOpened,
                            onOpenChange: s.modal.onOpenChange,
                            onClose: Y,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: r({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: p && V,
                            escapeKey: !1,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: U().wrapper,
                                    children: [
                                        !p && V,
                                        (0, n.jsx)(f.HL, {
                                            className: U().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, n.jsx)(l.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, n.jsx)(u.$, {
                                            className: U().button,
                                            size: p ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Y,
                                            disabled: s.selectedArtistsCounter < 3,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, n.jsx)(f.HL, { variant: 'div', size: 'm', weight: 'medium', children: W }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)('div', {
                                    className: U().mainContainer,
                                    children: [
                                        (0, n.jsx)(O.F, { className: U().carousel, carouselElement: G, scrollPadding: F }),
                                        (0, n.jsx)(R.$, {
                                            withFooter: !1,
                                            className: (0, o.$)(U().scrollContainer, U().important),
                                            itemContentCallback: (e) => {
                                                let t = s.artistsByGenre[e];
                                                if (!t) {
                                                    let e = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.artist' }) });
                                                    return (0, n.jsx)(N.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, n.jsx)(B, { artist: t }, t.id);
                                            },
                                            data: s.artistsByGenre,
                                            endReached: H,
                                            listClassName: U().content,
                                            itemClassName: U().item,
                                            pageSize: 60,
                                            handleRef: k,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        89729: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }));
            let n = r(25839),
                o = r(74631),
                s = r(95102);
            function i(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(49971);
            let a = { loader: () => Promise.resolve(i(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...a, ...e },
                        r = (0, o.lazy)(() => t.loader().then(i)),
                        l = t.loading;
                    function c(e) {
                        let i = l ? (0, n.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            a = !t.ssr || !!t.loading,
                            c = a ? o.Suspense : o.Fragment,
                            d = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(r, { ...e })] })
                                : (0, n.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(r, { ...e }) });
                        return (0, n.jsx)(c, { ...(a ? { fallback: i } : {}), children: d });
                    }
                    return ((c.displayName = 'LoadableComponent'), c);
                };
        },
        90208: (e, t, r) => {
            'use strict';
            function n() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            r.d(t, { B: () => n });
        },
        90720: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (0, r(46450).createAsyncLocalStorage)();
        },
        91886: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => d, Gv: () => l, L5: () => c });
            var n,
                o = r(74631),
                s = {
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let n = r(810),
                            { innerWidth: o = 0, innerHeight: s = 0 } = window;
                        function i(e) {
                            let { top: t, right: r, bottom: n, left: i } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= s) || (n >= 0 && n <= s)) && ((i >= 0 && i <= o) || (r >= 0 && r <= o));
                        }
                        function a(e) {
                            var t, r;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, n)) ? r : e.attributes[0];
                        }
                        function l(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = i),
                            (t.getElementNameByDataAttribute = a),
                            (t.createIntersectionObserver = l),
                            (t.useIntersectionObserver = function (e, r, o) {
                                let [{ freezeOnceVisible: s, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, o],
                                    [_, m] = (0, n.useState)({}),
                                    f = (0, n.useRef)(new Set()),
                                    p = (0, n.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : l((e) => {
                                                      let t = a(e.target);
                                                      if (t && p) {
                                                          if (f.current.has(t)) return;
                                                          (m((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              s && e.isIntersecting && (f.current.add(t), p.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, n.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = i(e.current))) {
                                                            let t = a(e.current);
                                                            m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || p.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                p && p.disconnect();
                                            }
                                        ),
                                        [u, p, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {},
                a = (function e(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var n = (i[t] = { exports: {} });
                    return (s[t](n, n.exports, e), n.exports);
                })(597);
            a.__esModule;
            var l = a.createIntersectionObserver;
            a.defaultOptions;
            var c = a.getElementNameByDataAttribute;
            a.isInViewportNow;
            var d = a.useIntersectionObserver;
        },
        92057: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => a, r: () => l });
            var n = r(18760),
                o = r(28410),
                s = r(48552);
            let i = o.gK.model('CustomPlayerThumbItem', { id: o.gK.enumeration(Object.values(n.T)), name: o.gK.string, thumb: s.K }),
                a = {
                    [n.T.DUCK]: () =>
                        r
                            .e(8962)
                            .then(r.t.bind(r, 68962, 17))
                            .then((e) => e.default),
                    [n.T.CAR]: () =>
                        r
                            .e(8765)
                            .then(r.t.bind(r, 68765, 17))
                            .then((e) => e.default),
                },
                l = (e) =>
                    new Map([
                        [n.T.DUCK, i.create({ id: n.T.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: n.T.DUCK, width: 50, height: 50 } })],
                        [n.T.CAR, i.create({ id: n.T.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: n.T.CAR, width: 143, height: 38 } })],
                    ]);
        },
        95029: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var n = (function (e) {
                return ((e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e);
            })({});
        },
        95102: (e, t, r) => {
            'use strict';
            function n(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(29834));
        },
        96146: (e) => {
            e.exports = {
                root: 'AboutAppModal_root__yBvgU',
                modalHeader: 'AboutAppModal_modalHeader__q1NPj',
                modalContent: 'AboutAppModal_modalContent__SHO_X',
                list: 'AboutAppModal_list__HfB82',
                link: 'AboutAppModal_link__i3P3P',
                explicitText: 'AboutAppModal_explicitText__29HUD',
                companyText: 'AboutAppModal_companyText__yroW0',
                versionText: 'AboutAppModal_versionText__iFb8L',
            };
        },
        96444: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => s });
            var n = r(36484),
                o = r(62562);
            function s() {
                return (0, o.N)().get(n.y$);
            }
        },
        97522: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => m });
            var n = r(25839),
                o = r(58038),
                s = r.n(o),
                i = r(74631),
                a = r(71035),
                l = r(9079),
                c = r(64261),
                d = r(25895);
            let u = (e) => {
                    let [t, r] = (0, i.useState)(!1),
                        o = (0, a.c)(() => {
                            r(!0);
                        });
                    return (0, n.jsx)(s(), { prefetch: t, ...e, onMouseEnter: o });
                },
                _ = (e) => {
                    let { forwardedRef: t, href: r, component: o, ...a } = e,
                        { isPrefetchDisabled: _, isPrefetchOnHover: m } = (0, i.useContext)(c.j),
                        { href: f, target: p, rel: h } = (0, d.u)(null != r ? r : ''),
                        v = (0, i.isValidElement)(o)
                            ? o
                            : (function (e, t, r) {
                                  return e ? (t ? (0, n.jsx)(s(), { prefetch: !1 }) : r ? (0, n.jsx)(u, { href: e }) : (0, n.jsx)(s(), {})) : (0, n.jsx)('a', {});
                              })(r, _, m);
                    return (0, n.jsx)(l.N, { ref: t, component: v, href: r ? f : void 0, target: p, rel: h, ...a });
                },
                m = (0, i.forwardRef)((e, t) => (0, n.jsx)(_, { ...e, forwardedRef: t }));
        },
        97904: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => n });
            let n = (0, r(74631).createContext)({ skeleton: void 0 });
        },
        97952: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => s });
            var n = r(74631),
                o = r(82064);
            function s() {
                return (0, n.useContext)(o.r);
            }
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => O });
            var n = r(25839),
                o = r(82298),
                s = r(88204),
                i = r(39004),
                a = r(93588),
                l = r(43354),
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
                    let { formatMessage: t, language: r, tld: n, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var _ = r(10959),
                m = r(89514);
            let f = (e) => e(new Date(), (0, m.m)());
            var p = r(96433),
                h = r(27954),
                v = r(400),
                C = r.n(v),
                x = r(61493),
                E = r(4254),
                g = r(97522);
            let b = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(C().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(g.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, o.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(g.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: C().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: o } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, n.jsx)(g.N, { target: '_blank', href: o, className: C().link, 'data-test-id': x.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, o.$)(C().root, C().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, n.jsx)(A, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(b, { data: r.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, h.g)(),
                    { formatDate: o, formatMessage: s } = (0, i.A)(),
                    { language: a } = (0, p.h)(),
                    l = u({ formatMessage: s, language: a, tld: r.tld, year: f(o) });
                return (0, n.jsx)(b, { className: t, data: l });
            });
            let O = (0, s.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: s, location: m, user: v } = (0, h.g)(),
                    { formatDate: x, formatMessage: E } = (0, i.A)(),
                    { isEnabled: g } = null != (t = (0, l.P)()) ? t : {},
                    { language: b } = (0, p.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: o, tld: s, userRegion: i, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: o, userRegion: s } = e,
                                    i = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, o) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, o) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, o) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, o) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, o) },
                                    m = [i, l, u];
                                return (r && 'ru' === s && m.push(a), m.push(_), m);
                            })({ formatMessage: r, isWebApplication: n, language: o, tld: s, userRegion: i }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: i,
                            }),
                            copyrights: u({ formatMessage: r, language: o, tld: s, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: E,
                        isWebApplication: a.$3,
                        tld: m.tld,
                        language: b,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: f(x),
                    });
                return (0, n.jsx)(S, { className: (0, o.$)({ [C().root_withOffsetForDeeplink]: g }, r), data: A });
            });
        },
        99412: (e) => {
            e.exports = {
                root: 'SettingsListToggleItem_root__yEEYT',
                textContainer: 'SettingsListToggleItem_textContainer__tRjyt',
                title: 'SettingsListToggleItem_title__Xz8_Q',
                description: 'SettingsListToggleItem_description__JBOzV',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                5918, 3349, 9045, 1676, 6295, 7349, 8451, 1583, 1107, 9863, 6706, 1311, 5201, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 1817, 1943, 3257, 3269, 4163,
                3246, 4517, 3482, 5329, 8836, 4434, 4932, 5622, 2750, 8353, 4475, 5056, 7358,
            ],
            () => e((e.s = 38457)),
        ),
            (_N_E = e.O()));
    },
]);
