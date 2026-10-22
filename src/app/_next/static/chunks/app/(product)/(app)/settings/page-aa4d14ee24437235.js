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
            r.d(t, { D: () => h });
            var a = r(74631),
                o = r(67379),
                i = r(20934),
                n = r(59450),
                l = r(49656),
                s = r(84e3),
                d = r(58069),
                c = r(20258),
                u = r(26742),
                _ = r(25195),
                m = r(37314),
                f = r(25488),
                p = r(97952),
                C = r(10764),
                E = r(72594);
            let h = () => {
                let e = (0, s.U)(),
                    t = (0, n.st)(),
                    { hash: r } = (0, n.gf)(),
                    { pageId: h, displayReasonId: A } = (0, p.$)(),
                    { tabId: v, tabPos: x, isTabSelectedByDefault: b } = (0, E.R)(),
                    { offsetBlockPosY: g } = (0, _.u)(),
                    { blockType: S, blockId: y, blockPosX: L, blockPosY: O, mainObjectId: R, mainObjectType: N, displayReasonId: D } = (0, u.N)(),
                    { filterKey: T, filterValue: j, filterPos: I } = (0, m.G)(),
                    { objectType: B, objectsCount: M, objectId: w, objectPosX: P, objectPosY: F } = (0, f.J)(),
                    { skeleton: k } = (0, C.b)(),
                    z = null != D ? D : A,
                    U = (0, l.L)(() => (void 0 !== g && void 0 !== O ? g + O : O));
                return (0, a.useCallback)(
                    (a, n) => {
                        if (!t || !h || !c.xK.includes(h) || !c.fD.includes(h)) return;
                        let l = d.F[h];
                        if (!l) return;
                        let s = {
                            hash: r,
                            pageId: l,
                            entityType: S,
                            entityId: y,
                            entityPosX: L,
                            entityPosY: U,
                            objectsCount: M,
                            viewUuid: n,
                            objectType: B,
                            objectId: w,
                            objectPosX: P,
                            objectPosY: F,
                        };
                        (void 0 !== T && ((s.filterKey = T), (s.filterValue = j), (s.filterPos = I)),
                            c.qG.includes(h) && ((s.tabId = v), (s.tabPos = x), (s.isTabSelectedByDefault = b)),
                            k && (s.skeletonId = k),
                            'string' == typeof R && 'string' == typeof N && ((s.mainObjectType = N), (s.mainObjectId = R)),
                            z && (s.displayReasonId = z));
                        let u = (0, o.F)({ params: s, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (a ? (0, i.Pf)(t.evgenInstance, u) : (0, i.nv)(t.evgenInstance, u));
                    },
                    [t, z, y, L, U, S, T, I, j, r, b, e, R, N, w, P, F, B, M, h, k, v, x],
                );
            };
        },
        6304: (e, t, r) => {
            'use strict';
            r.d(t, { WithOffline: () => s });
            var a = r(88204),
                o = r(36484),
                i = r(62562),
                n = r(79645),
                l = r(27954);
            let s = (0, a.PA)((e) => {
                let { fallback: t, children: r } = e,
                    a = (0, i.N)(),
                    { slam: s } = (0, l.g)(),
                    d = a.get(o.U2);
                return (0, n.g)(d) || s.isOfflineModeEnabled ? r : t;
            });
        },
        6323: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => s });
            var a = r(25839),
                o = r(74631),
                i = r(61493),
                n = r(23818);
            let l = (e) => {
                    let { isAvailable: t = !0, className: r, fallbackIconSize: o, forwardRef: l, ...s } = e;
                    return t
                        ? (0, a.jsx)(n._V, { ref: l, className: r, fallbackIconSize: o, ...s, 'data-test-id': i.S7.ENTITY_COVER_IMAGE })
                        : (0, a.jsx)(n.Ab, { className: r, iconSize: o, iconVariant: 'unavailable', 'data-test-id': i.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                s = (0, o.forwardRef)((e, t) => (0, a.jsx)(l, { forwardRef: t, ...e }));
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => C });
            var a = r(25839),
                o = r(82298),
                i = r(28631),
                n = r(74631);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: o, ...i } = e,
                        n = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        l = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: r, ...i });
                },
                s = (0, n.forwardRef)((e, t) => (0, a.jsx)(l, { forwardRef: t, ...e }));
            var d = r(45300),
                c = r.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: i, withHeader: n, withForceScroll: l, ...s } = e;
                    return (0, a.jsx)('div', {
                        className: (0, o.$)(c().scroller, { [c().scroller_withFooter]: i, [c().scroller_withHeader]: n, [c().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...s,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
            var m = r(10508),
                f = r(63257);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: i = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: s = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [_, p] = (0, n.useState)(null),
                        C = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), s.length > 0 && p(e), t && r)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < a; e++) r(e);
                                    }
                                }, i),
                            [i, o, t, r, s],
                        );
                    (0, n.useEffect)(() => {
                        s.length > 0 && _ && C(_);
                    }, s);
                    let E = (0, n.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, i);
                    }, [d, i]);
                    return (0, a.jsx)(f.sN, { ref: c, rangeChanged: C, totalCount: l, endReached: E, ...u });
                },
                C = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: f,
                            overscan: C = 700,
                            pageSize: E = 20,
                            totalCount: h,
                            totalRequests: A,
                            debounceDurationInMs: v,
                            initialItemCount: x,
                            minInitialItemCount: b = 20,
                            handleRef: g,
                            alwaysShowScrollbar: S = !1,
                            testId: y,
                            isMobileLayout: L = !1,
                            shouldTriggerRangeChangedOn: O,
                            ...R
                        } = e,
                        [N, D] = (0, n.useState)(!1),
                        T = (0, n.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    D(e);
                                }, 100),
                            [],
                        ),
                        j = (0, n.useMemo)(() => {
                            var e, t;
                            return L
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : s,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : s,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, A, L]),
                        I = x ? Math.min(x, b) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, o.$)(c().root, { [c().root_scrolling]: N || S, [c().root_notScrolling]: !N && !S }, t),
                        'data-test-id': y,
                        children: [
                            L && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, a.jsx)(p, {
                                overscan: C,
                                components: j,
                                listClassName: f,
                                itemClassName: u,
                                isScrolling: T,
                                itemContent: m,
                                scrollerRef: g,
                                totalCount: h,
                                pageSize: E,
                                onPageHandler: l,
                                onRangeHandler: d,
                                debounceDurationInMs: v,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: O,
                                ...R,
                            }),
                            L && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        9794: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => d });
            var a,
                o = r(74631),
                i = {
                    5881: (e, t, r) => {
                        function a() {
                            for (var e, t, r = 0, a = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            a,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (a = e(t[r])) && (o && (o += ' '), (o += a));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (r.r(t), r.d(t, { clsx: () => a, default: () => o }));
                        let o = a;
                    },
                    3801: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
                            root: 'JkKcxRVvjK7lcakkEliC',
                            root_alwaysThumb: 'cOKDtLfDZAuPXftfS2WM',
                            root_trackSize_xxs: 'd6VuG0HnwpGO47uPjPeb',
                            root_trackSize_xs: 'IB_XOYAyYPK4aszY9R1F',
                            root_trackSize_s: 'SHvrm0VRiLVwGqJJjNO8',
                            root_thumbSize_xs: 'BlvJwKLYTicnbJ3Qyuou',
                            root_neverThumb: 'dDJBVBTkzY5zY7vtSbyr',
                            root_thumbSize_s: 'qpvIbN4_hF6CqK0bjCq7',
                            root_thumbSize_m: 'P8_ABi1YnAOS8p8EY87f',
                            root_thumbSize_l: 'D21lBltSEiwHAaG39z6x',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var o = null;
                            if ((void 0 !== a && (o = '' + a), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var i in ((a = {}), t)) 'key' !== i && (a[i] = t[i]);
                            else a = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3086: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.ThumbVariant = t.DEFAULT_MAX_VALUE = t.SliderMode = void 0),
                            (t.SliderMode = { NORMAL: 'normal', DEFERRED: 'deferred' }),
                            (t.DEFAULT_MAX_VALUE = 100),
                            (t.ThumbVariant = { HOVER: 'hover', NEVER: 'never', ALWAYS: 'always' }));
                    },
                    3042: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Slider = void 0));
                        let o = r(4377),
                            i = r(5881),
                            n = r(810),
                            l = r(3086),
                            s = a(r(3801)),
                            d = (e) => {
                                let {
                                        forwardRef: t,
                                        className: r,
                                        value: a,
                                        secondaryValue: d = l.DEFAULT_MAX_VALUE,
                                        maxValue: c = l.DEFAULT_MAX_VALUE,
                                        thumbSize: u = 'l',
                                        trackSize: _ = 's',
                                        mode: m = l.SliderMode.NORMAL,
                                        onChange: f,
                                        showThumbVariant: p = l.ThumbVariant.HOVER,
                                        ...C
                                    } = e,
                                    [E, h] = (0, n.useState)(null != a ? a : 0),
                                    [A, v] = (0, n.useState)(!1),
                                    [x, b] = (0, n.useState)(!1);
                                ((0, n.useEffect)(() => {
                                    A || h(a);
                                }, [a, A]),
                                    (0, n.useEffect)(() => {
                                        !A && x && m === l.SliderMode.DEFERRED && (f(E, !0), b(!1));
                                    }, [m, A, f, E, x]));
                                let g = (0, n.useCallback)(
                                        (e) => {
                                            let t = Number(e.target.value);
                                            (h(t), b(!0), 'normal' === m ? (f(t, !0), b(!1)) : f(t, !1));
                                        },
                                        [h, f, m],
                                    ),
                                    S = (0, n.useCallback)(
                                        (e) => {
                                            let t = !1,
                                                r = !1;
                                            (e.stopPropagation(),
                                                e.nativeEvent instanceof window.MouseEvent
                                                    ? ((t = 0 === e.nativeEvent.button), (r = 'mousedown' === e.nativeEvent.type))
                                                    : ((t = 1 === e.nativeEvent.touches.length || 'touchend' === e.nativeEvent.type),
                                                      (r = 'touchstart' === e.nativeEvent.type)),
                                                t && v(r));
                                        },
                                        [v],
                                    ),
                                    y = (0, n.useCallback)(() => {
                                        v(!1);
                                    }, [v]),
                                    L = (0, n.useMemo)(() => {
                                        let e = (100 * Math.min(E, c)) / c,
                                            t = (100 * Math.min(d, c)) / c;
                                        return {
                                            backgroundSize: ''.concat(e, '% 100%'),
                                            '--seek-before-width': ''.concat(e, '%'),
                                            '--buffered-width': ''.concat(t, '%'),
                                        };
                                    }, [E, d, c]);
                                return (0, o.jsx)('input', {
                                    ref: t,
                                    className: (0, i.clsx)(
                                        s.default.root,
                                        {
                                            [s.default['root_thumbSize_'.concat(u)]]: u,
                                            [s.default['root_trackSize_'.concat(_)]]: _,
                                            [s.default['root_'.concat(p, 'Thumb')]]: p,
                                        },
                                        r,
                                    ),
                                    type: 'range',
                                    max: c,
                                    value: E,
                                    style: L,
                                    onTouchStart: S,
                                    onTouchEnd: S,
                                    onMouseDown: S,
                                    onMouseUp: S,
                                    onMouseOut: y,
                                    onBlur: y,
                                    onChange: g,
                                    ...C,
                                });
                            };
                        t.Slider = (0, n.forwardRef)((e, t) => (0, o.jsx)(d, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = a || (a = r.t(o, 2));
                    },
                },
                n = {};
            function l(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (i[e].call(r.exports, r, r.exports, l), r.exports);
            }
            ((l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, 'X', { value: !0 }), (s.i = void 0));
                var e = l(3042);
                Object.defineProperty(s, 'i', {
                    enumerable: !0,
                    get: function () {
                        return e.Slider;
                    },
                });
            })();
            var d = s.i;
            s.X;
        },
        9911: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => c });
            var a,
                o = r(6274),
                i = r(74631),
                n = {
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = a || (a = r.t(i, 2));
                    },
                },
                l = {};
            function s(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return (n[e](r, r.exports, s), r.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, 'X', { value: !0 }), (d.l = void 0));
                let e = s(810),
                    t = s(352);
                d.l = (r) => {
                    let [a, o] = (0, e.useState)(!0),
                        [i, n] = (0, e.useState)(!0),
                        l = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (o(0 === e.scrollLeft), n(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        l();
                    }, [r, l]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    (null == e || e.removeEventListener('scroll', l), window.removeEventListener('resize', l));
                                }
                            );
                        }, [r, l]));
                    let s = (0, e.useMemo)(
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
                        swipeForward: s,
                        shouldBackwardButtonBeDisabled: a,
                        shouldForwardButtonBeDisabled: i,
                        shouldHideControls: a && i,
                    };
                };
            })(),
                d.X);
            var c = d.l;
        },
        10764: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => i });
            var a = r(74631),
                o = r(97904);
            function i() {
                return (0, a.useContext)(o.D);
            }
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => o });
            var a = r(44806);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: o, userRegion: i } = e;
                return 'ru' === i && t(a.z.WebNextFooterDisclaimer, 'on') ? r() : o();
            };
        },
        13232: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => a });
            let a = (0, r(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
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
        14482: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => a });
            let a = (0, r(74631).createContext)({
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
        16503: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => c });
            var a,
                o = r(95759),
                i = r(74631),
                n = {
                    5881: (e, t, r) => {
                        function a() {
                            for (var e, t, r = 0, a = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            a,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (a = e(t[r])) && (o && (o += ' '), (o += a));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (r.r(t), r.d(t, { clsx: () => a, default: () => o }));
                        let o = a;
                    },
                    2850: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
                            contentContainer: 'JjlbHZ4FaP9EAcR_1DxF',
                            contentContainer_block: 'iOlzvyUREgDkthkrx7Sf',
                            flexIcon: 'WsKeF73pWotx9W1tWdYY',
                            root: 'cpeagBA1_PblpJn8Xgtv',
                            root_withoutBorder: 'qU2apWBO1yyEK0lZ3lPO',
                            root_radius_xs: 'MmZbSs387gu2qrJ1lDWd',
                            root_radius_s: 'mlcrraysn7mW6xrBXSBF',
                            root_radius_m: 'dgV08FKVLZKFsucuiryn',
                            root_radius_l: 'S97_5dtzhpxo_amtfYRg',
                            root_radius_xl: 'nNBJnDHRlyLTniWosJhk',
                            root_radius_xxxl: 'zIMibMuH7wcqUoW7KH1B',
                            root_radius_round: 'uwk3hfWzB2VT7kE13SQk',
                            root_size: 'IlG7b1K0AD7E7AMx6F5p',
                            root_size_default: 'C_QGmfTz6UFX93vfPt6Z',
                            root_size_xxxs: 'eQt33MLDiQ6DRSuLaYEp',
                            root_size_xxs: 'oR11LfCBVqMbUJiAgknd',
                            root_size_xs: 'j1jXIVckFgZECecFzZMe',
                            root_size_s: 'WtFdWDF44egSVM_YiMUX',
                            root_size_m: 'Y2uqxoU7xa_AZ8FUCVOW',
                            root_size_l: 'SGYcNjvjmMsXeEVGUV2Z',
                            root_icon_left: 'kc5CjvU5hT9KEj0iTt3C',
                            root_icon_right: 'et24Jf7pT_X9Fvc7TznR',
                            root_primary: 'fXlFz1qMkliFUWOkHo8T',
                            root_primary_default: '_eTRQi5ADZCUvUKMZqJU',
                            ripple: 'spMT3NcRD9Yb0ntNaNct',
                            root_primary_outline: 'fCUSh2B0Ye9kEvceE8zc',
                            root_primary_text: 'qlPp6CSQQEMVZPqtqLiQ',
                            root_primary_withHover: 'KZF6_4K1p_Y_GMIAxaAn',
                            root_primary_withHover_default: 'rWukOKAJh5Ga7JuIp62L',
                            root_primary_withHover_outline: 'fdwWCJKgUqml5wNqrRcN',
                            root_primary_withHover_text: 'IgYbZLnYjW0nMahgpkus',
                            root_secondary: '_T4p_w41oaq6L4sztSdw',
                            root_secondary_default: 'iJVAJMgccD4vj4E4o068',
                            root_secondary_outline: 'pnM3iSP9keZOELI2oohr',
                            root_secondary_text: 'UDMYhpDjiAFT3xUx268O',
                            root_secondary_withHover: 'qUbrkhZIOVrvM0roV1QF',
                            root_secondary_withHover_default: 'nHWc2sto1C6Gm0Dpw_l0',
                            root_secondary_withHover_outline: 'i5WuBm5mfG0mflk_1jH_',
                            root_secondary_withHover_text: 'HbaqudSqu7Q3mv3zMPGr',
                            root_plus: 'ixLRsIJ2FvXO2k04n_QY',
                            root_plus_default: 'yRHwHzEGfDgRXGzYJqw2',
                            root_plus_outline: 'e777irPFmyQFFrURLF_U',
                            root_plus_text: 'vRqDhvmt3gt8TFp45_Zw',
                            root_plus_withHover: 'TZif6q3I2RwBEYXwK_iA',
                            root_plus_withHover_default: 'k3DhvmzpnM_Fb9oFdE4q',
                            root_plus_withHover_outline: 'RiDWYwGIxqbrUPR699DM',
                            root_plus_withHover_text: 'hC_mMCzWjkTn2j9xZzGc',
                            root_accent: 'jqD2jMT6n7F0WKyqwMsn',
                            root_accent_default: 'bDp0r9MtoYECZ8ObMoCh',
                            root_accent_outline: 'rXNyGp8NBAw2MUjACZNj',
                            root_accent_text: 'hmV4ERaXWAJc4uPLZL30',
                            root_accent_withHover: 'uKuxXu1N4TP5cWaEK5Ke',
                            root_accent_withHover_default: 't_hequUaUgAMhFuxizLb',
                            root_accent_withHover_outline: 'Oy9sPFTxNTo1_E29U4aF',
                            root_accent_withHover_text: 'LcKRSd3DLoh7k60Oqox8',
                            root_withActiveSpinner: 'nAGvO87rLs15SJgft6Hh',
                            block: 'BbCxxIjBGupN28bq2lSP',
                            icon: 'J9wTKytjOWG73QMoN5WP',
                            icon_position_left: 'elJfazUBui03YWZgHCbW',
                            icon_position_right: 'RBoEbyJKP5rEtLsXM1ji',
                            icon_withButtonSize: 'cE17_kCWJgx8kzQEkeVr',
                            spinnerContainer: 'STbBDGqYjUEcLuNvhu9w',
                        };
                    },
                    1561: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
                            root: 'rqUESGQ8jp3tbDawOzuG',
                            root_checked: 'GJh5PwV9GyFuKhlG6pQz',
                            icon: 'aw9IoPC0GuAC7Hmf825u',
                            icon_checked: 'KC8t9NStVmQ1_VY54KH4',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var o = null;
                            if ((void 0 !== a && (o = '' + a), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var i in ((a = {}), t)) 'key' !== i && (a[i] = t[i]);
                            else a = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    6384: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let r = t.LIGHTNESS_COLOR_BUCKETS.find((r, a) =>
                                    ((e, r, a) => (a === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? r >= e.start && r <= e.end : r >= e.start && r < e.end))(r, e, a),
                                );
                                return (0, t.findColorBucketByName)(null == r ? void 0 : r.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, r) {
                                let a = null != r ? r : e.currentTarget,
                                    o = document.createElement('span'),
                                    i = Math.max(a.clientWidth, a.clientHeight),
                                    n = i / 2,
                                    l = a.getBoundingClientRect(),
                                    s = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                                    d = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                                ((o.style.width = ''.concat(i, 'px')),
                                    (o.style.height = ''.concat(i, 'px')),
                                    (o.style.left = 0 === e.clientX ? '0px' : ''.concat(s - n, 'px')),
                                    (o.style.top = ''.concat(d - n, 'px')),
                                    o.classList.add(t));
                                let c = a.getElementsByClassName(t)[0];
                                (c && c.remove(), a.insertBefore(o, a.firstChild));
                            }));
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    1888: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0));
                        let a = r(2660),
                            o = r(6384);
                        ((t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#F5002E',
                                    '#CF0027',
                                    '#AF0021',
                                    '#94001C',
                                    '#7C0017',
                                    '#690014',
                                    '#590011',
                                    '#4B000E',
                                    '#40000C',
                                    '#36000A',
                                    '#2D0008',
                                    '#250007',
                                    '#1D0005',
                                    '#140004',
                                    '#0B0002',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#F5007C',
                                    '#CF0069',
                                    '#AF0059',
                                    '#94004B',
                                    '#7C003F',
                                    '#690035',
                                    '#59002D',
                                    '#4B0026',
                                    '#400020',
                                    '#36001B',
                                    '#2D0017',
                                    '#250013',
                                    '#1D000F',
                                    '#14000A',
                                    '#0B0006',
                                    '#000000',
                                ],
                                coral: [
                                    '#F53700',
                                    '#CF2F00',
                                    '#AF2700',
                                    '#942100',
                                    '#7C1C00',
                                    '#691800',
                                    '#591400',
                                    '#4B1100',
                                    '#400E00',
                                    '#360C00',
                                    '#2D0A00',
                                    '#250800',
                                    '#1D0700',
                                    '#140400',
                                    '#0B0200',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#F56E00',
                                    '#CF5D00',
                                    '#AF4F00',
                                    '#944200',
                                    '#7C3800',
                                    '#692F00',
                                    '#592800',
                                    '#4B2200',
                                    '#401D00',
                                    '#361800',
                                    '#2D1400',
                                    '#251100',
                                    '#1D0D00',
                                    '#140900',
                                    '#0B0500',
                                    '#000000',
                                ],
                                clover: [
                                    '#34C03E',
                                    '#2CA334',
                                    '#25892C',
                                    '#1F7425',
                                    '#1A621F',
                                    '#16521B',
                                    '#134516',
                                    '#103B13',
                                    '#0D3210',
                                    '#0B2A0E',
                                    '#0A230B',
                                    '#081D09',
                                    '#061707',
                                    '#041005',
                                    '#020903',
                                    '#000000',
                                ],
                                emerald: [
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
                                    '#000000',
                                ],
                                glacier: [
                                    '#5C8E9B',
                                    '#4E7883',
                                    '#42666F',
                                    '#37565D',
                                    '#2F484F',
                                    '#273D42',
                                    '#213338',
                                    '#1C2B2F',
                                    '#182528',
                                    '#141F22',
                                    '#111A1C',
                                    '#0E1517',
                                    '#0B1112',
                                    '#080C0D',
                                    '#040607',
                                    '#000000',
                                ],
                                slate: [
                                    '#4F6C9B',
                                    '#435B83',
                                    '#384D6F',
                                    '#30415D',
                                    '#28374F',
                                    '#222E42',
                                    '#1D2738',
                                    '#18212F',
                                    '#141C28',
                                    '#111822',
                                    '#0F141C',
                                    '#0C1017',
                                    '#090D12',
                                    '#07090D',
                                    '#040507',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#0C41E8',
                                    '#0A37C4',
                                    '#092EA6',
                                    '#07278C',
                                    '#062176',
                                    '#051C63',
                                    '#041854',
                                    '#041447',
                                    '#03113C',
                                    '#030E33',
                                    '#020C2B',
                                    '#020A23',
                                    '#01081B',
                                    '#010513',
                                    '#01030A',
                                    '#000000',
                                ],
                                indigo: [
                                    '#160CE8',
                                    '#130AC4',
                                    '#1009A6',
                                    '#0D078C',
                                    '#0B0676',
                                    '#090563',
                                    '#080454',
                                    '#070447',
                                    '#06033C',
                                    '#050333',
                                    '#04022B',
                                    '#030223',
                                    '#03011B',
                                    '#020113',
                                    '#01010A',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#5035C0',
                                    '#442DA3',
                                    '#392689',
                                    '#302074',
                                    '#291B62',
                                    '#221752',
                                    '#1D1345',
                                    '#18103B',
                                    '#150E32',
                                    '#120C2A',
                                    '#0F0A23',
                                    '#0C081D',
                                    '#090617',
                                    '#070410',
                                    '#040209',
                                    '#000000',
                                ],
                                plum: [
                                    '#7C35C0',
                                    '#692DA3',
                                    '#592689',
                                    '#4B2074',
                                    '#3F1B62',
                                    '#351752',
                                    '#2D1345',
                                    '#26103B',
                                    '#200E32',
                                    '#1B0C2A',
                                    '#170A23',
                                    '#13081D',
                                    '#0F0617',
                                    '#0A0410',
                                    '#060209',
                                    '#000000',
                                ],
                                orchid: [
                                    '#BB1ADB',
                                    '#9E16B9',
                                    '#86139D',
                                    '#711084',
                                    '#5F0D6F',
                                    '#500B5E',
                                    '#44094F',
                                    '#390843',
                                    '#310739',
                                    '#290630',
                                    '#220528',
                                    '#1C0421',
                                    '#16031A',
                                    '#100212',
                                    '#08010A',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#DB1A7D',
                                    '#B9166A',
                                    '#9D1359',
                                    '#84104B',
                                    '#6F0D40',
                                    '#5E0B36',
                                    '#4F092D',
                                    '#430826',
                                    '#390720',
                                    '#30061B',
                                    '#280517',
                                    '#210413',
                                    '#1A030F',
                                    '#12020A',
                                    '#0A0106',
                                    '#000000',
                                ],
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#FFCCD6',
                                    '#D8ADB5',
                                    '#B69299',
                                    '#9A7B81',
                                    '#82686D',
                                    '#6D575C',
                                    '#5C4A4D',
                                    '#4E3E42',
                                    '#423538',
                                    '#382D2F',
                                    '#2F2527',
                                    '#261F20',
                                    '#1E1819',
                                    '#151112',
                                    '#0B090A',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#FFCCE6',
                                    '#D8ADC3',
                                    '#B692A4',
                                    '#9A7B8B',
                                    '#826875',
                                    '#6D5763',
                                    '#5C4A53',
                                    '#4E3E46',
                                    '#42353C',
                                    '#382D32',
                                    '#2F252A',
                                    '#261F23',
                                    '#1E181B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                                coral: [
                                    '#FFD7CC',
                                    '#D8B6AD',
                                    '#B69A92',
                                    '#9A827B',
                                    '#826D68',
                                    '#6D5C57',
                                    '#5C4E4A',
                                    '#4E423E',
                                    '#423835',
                                    '#382F2D',
                                    '#2F2825',
                                    '#26201F',
                                    '#1E1918',
                                    '#151211',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#FFE3CC',
                                    '#D8C0AD',
                                    '#B6A292',
                                    '#9A897B',
                                    '#827368',
                                    '#6D6157',
                                    '#5C524A',
                                    '#4E463E',
                                    '#423B35',
                                    '#38322D',
                                    '#2F2A25',
                                    '#26221F',
                                    '#1E1B18',
                                    '#151311',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                clover: [
                                    '#D7F4D9',
                                    '#B6CFB8',
                                    '#9AAE9B',
                                    '#829383',
                                    '#6D7C6E',
                                    '#5C695D',
                                    '#4E584F',
                                    '#424B42',
                                    '#383F38',
                                    '#2F3630',
                                    '#282D28',
                                    '#202521',
                                    '#191D1A',
                                    '#121412',
                                    '#0A0B0A',
                                    '#000000',
                                ],
                                emerald: [
                                    '#CCFFEF',
                                    '#ADD8CA',
                                    '#92B6AB',
                                    '#7B9A90',
                                    '#688279',
                                    '#576D66',
                                    '#4A5C56',
                                    '#3E4E49',
                                    '#35423E',
                                    '#2D3834',
                                    '#252F2C',
                                    '#1F2624',
                                    '#181E1C',
                                    '#111514',
                                    '#090B0B',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#CCFFF7',
                                    '#ADD8D1',
                                    '#92B6B1',
                                    '#7B9A95',
                                    '#68827D',
                                    '#576D6A',
                                    '#4A5C59',
                                    '#3E4E4C',
                                    '#354240',
                                    '#2D3836',
                                    '#252F2D',
                                    '#1F2625',
                                    '#181E1D',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#CCF9FF',
                                    '#ADD3D8',
                                    '#92B2B6',
                                    '#7B969A',
                                    '#687F82',
                                    '#576B6D',
                                    '#4A5A5C',
                                    '#3E4C4E',
                                    '#354142',
                                    '#2D3738',
                                    '#252E2F',
                                    '#1F2626',
                                    '#181D1E',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                glacier: [
                                    '#DFE9EC',
                                    '#BDC5C8',
                                    '#9FA7A9',
                                    '#868C8E',
                                    '#717678',
                                    '#606465',
                                    '#515455',
                                    '#444748',
                                    '#3A3C3D',
                                    '#313334',
                                    '#292B2B',
                                    '#222324',
                                    '#1A1B1C',
                                    '#131314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                slate: [
                                    '#DDE4EE',
                                    '#BBC1CA',
                                    '#9EA3AA',
                                    '#85898F',
                                    '#707479',
                                    '#5F6266',
                                    '#505256',
                                    '#444649',
                                    '#393B3E',
                                    '#303234',
                                    '#292A2C',
                                    '#212224',
                                    '#1A1B1C',
                                    '#121314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#CFDAFC',
                                    '#AFB9D5',
                                    '#949CB4',
                                    '#7D8398',
                                    '#696F80',
                                    '#595D6C',
                                    '#4B4F5B',
                                    '#3F434D',
                                    '#363941',
                                    '#2D3037',
                                    '#26282E',
                                    '#1F2126',
                                    '#181A1E',
                                    '#111215',
                                    '#090A0B',
                                    '#000000',
                                ],
                                indigo: [
                                    '#D1CFFC',
                                    '#B1AFD5',
                                    '#9594B4',
                                    '#7E7D98',
                                    '#6A6980',
                                    '#5A596C',
                                    '#4C4B5B',
                                    '#403F4D',
                                    '#363641',
                                    '#2E2D37',
                                    '#26262E',
                                    '#1F1F26',
                                    '#19181E',
                                    '#111115',
                                    '#09090B',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#DDD7F4',
                                    '#BBB6CF',
                                    '#9E9AAE',
                                    '#858293',
                                    '#706D7C',
                                    '#5F5C69',
                                    '#504E58',
                                    '#44424B',
                                    '#39383F',
                                    '#302F36',
                                    '#29282D',
                                    '#212025',
                                    '#1A191D',
                                    '#121214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                plum: [
                                    '#E6D7F4',
                                    '#C3B6CF',
                                    '#A49AAE',
                                    '#8B8293',
                                    '#756D7C',
                                    '#635C69',
                                    '#534E58',
                                    '#46424B',
                                    '#3C383F',
                                    '#322F36',
                                    '#2A282D',
                                    '#232025',
                                    '#1B191D',
                                    '#131214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                orchid: [
                                    '#F3D1FA',
                                    '#CEB1D4',
                                    '#AE95B3',
                                    '#937E97',
                                    '#7B6A7F',
                                    '#685A6B',
                                    '#584C5A',
                                    '#4A404D',
                                    '#3F3641',
                                    '#352E37',
                                    '#2D262E',
                                    '#251F26',
                                    '#1D191D',
                                    '#141115',
                                    '#0B090B',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#FAD1E6',
                                    '#D4B1C3',
                                    '#B395A4',
                                    '#977E8B',
                                    '#7F6A75',
                                    '#6B5A63',
                                    '#5A4C53',
                                    '#4D4046',
                                    '#41363C',
                                    '#372E32',
                                    '#2E262A',
                                    '#261F23',
                                    '#1D191B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            }));
                        let i = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let r = (0, o.findColorBucketByName)(e);
                            return r ? i(r) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, a.hexToHsl)(e),
                                    r = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === r ? (0, o.findColorBucketByHue)(t.h) : (0, o.findColorBucketByLightness)(t.l), hsl: t, mode: r };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: r } = (0, t.getVibeColorBucketSelection)(e);
                                return r ? i(r) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var a = r(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return a.createRipple;
                            },
                        });
                        var o = r(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return o.getElementFromRefOrElement;
                            },
                        });
                        var i = r(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return i.getVibePaletteColors;
                            },
                        });
                    },
                    7291: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        let o = r(4377),
                            i = r(810),
                            n = r(5881),
                            l = r(6882),
                            s = a(r(2850)),
                            d = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: r,
                                        iconPosition: a = 'left',
                                        children: d,
                                        className: c,
                                        color: u = 'secondary',
                                        flexIcon: _,
                                        icon: m,
                                        spinner: f,
                                        role: p,
                                        onClick: C,
                                        radius: E = 'm',
                                        size: h,
                                        type: A = 'button',
                                        variant: v = 'default',
                                        withRipple: x = !0,
                                        withHover: b = !0,
                                        withBorder: g = !1,
                                        disabled: S,
                                        focusableWhenDisabled: y,
                                        'aria-disabled': L,
                                        iconClassName: O,
                                        contentContainerClassName: R,
                                        ...N
                                    } = e,
                                    D = (0, i.useId)(),
                                    T = !i.Children.toArray(d).filter(Boolean).length,
                                    j = 'left' === a,
                                    I = null,
                                    B = (0, i.isValidElement)(f);
                                if (m) {
                                    var M, w;
                                    I = (0, i.cloneElement)(m, {
                                        className: (0, n.clsx)(
                                            s.default.icon,
                                            {
                                                [s.default['icon_position_'.concat(a)]]: a && !T,
                                                [s.default.icon_withButtonSize]: !(null == (M = m.props) ? void 0 : M.size),
                                            },
                                            null == (w = m.props) ? void 0 : w.className,
                                            O,
                                        ),
                                        key: D,
                                    });
                                }
                                let P = (0, i.useMemo)(() => (B ? (0, o.jsx)('div', { className: s.default.spinnerContainer, children: f }) : null), [B, f]),
                                    F = (0, i.useCallback)(
                                        (e) => {
                                            if (S) {
                                                (e.preventDefault(), e.stopPropagation());
                                                return;
                                            }
                                            B || (x && (0, l.createRipple)(e, s.default.ripple), null == C || C(e));
                                        },
                                        [S, B, C, x],
                                    );
                                return (0, o.jsx)('button', {
                                    ref: t,
                                    className: (0, n.clsx)(
                                        s.default.root,
                                        s.default['root_'.concat(u, '_').concat(v)],
                                        s.default['root_radius_'.concat(E)],
                                        s.default.root_size,
                                        {
                                            [s.default['root_'.concat(u, '_withHover_').concat(v)]]: b && !S && !B,
                                            [s.default['root_size_'.concat(h)]]: h,
                                            [s.default.root_withoutBorder]: !g,
                                            [s.default.root_withActiveSpinner]: B,
                                            [s.default.block]: r,
                                            [s.default.flexIcon]: _,
                                            [s.default.iconOnly]: T,
                                            [s.default.root_icon_left]: m && !T && j,
                                            [s.default.root_icon_right]: m && !T && !j,
                                        },
                                        c,
                                    ),
                                    type: A,
                                    role: p,
                                    onClick: F,
                                    ...N,
                                    disabled: S && !y,
                                    'aria-disabled': (S && y) || L,
                                    'data-disabled': S || void 0,
                                    'aria-live': B ? 'polite' : 'off',
                                    'aria-busy': B,
                                    children:
                                        m || B
                                            ? (0, o.jsxs)('span', {
                                                  className: (0, n.clsx)(s.default.contentContainer, { [s.default.contentContainer_block]: r }, R),
                                                  children: [m && j && I, !T && d, m && !j && I, P],
                                              })
                                            : d,
                                });
                            };
                        t.Button = (0, i.forwardRef)((e, t) => (0, o.jsx)(d, { forwardRef: t, ...e }));
                    },
                    7493: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        var a = r(7291);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return a.Button;
                            },
                        });
                    },
                    9037: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Toggle = void 0));
                        let o = r(4377),
                            i = r(5881),
                            n = r(810),
                            l = r(7493),
                            s = a(r(1561)),
                            d = (e) => {
                                let { isChecked: t } = e;
                                return (0, o.jsx)('div', { className: (0, i.clsx)(s.default.icon, { [s.default.icon_checked]: t }) });
                            };
                        t.Toggle = (e) => {
                            let { className: t, isChecked: r = !1, onChange: a, 'aria-label': c, 'aria-describedby': u, ..._ } = e,
                                [m, f] = (0, n.useState)(r),
                                p = (0, n.useCallback)(() => {
                                    let e = !m;
                                    (f(e), null == a || a(e));
                                }, [m, a]);
                            return (
                                (0, n.useEffect)(() => {
                                    f(r);
                                }, [r]),
                                (0, o.jsx)(l.Button, {
                                    className: (0, i.clsx)(s.default.root, { [s.default.root_checked]: m }, t),
                                    radius: 'xxxl',
                                    variant: 'default',
                                    icon: (0, o.jsx)(d, { isChecked: m }),
                                    withRipple: !1,
                                    onClick: p,
                                    role: 'switch',
                                    'aria-checked': m,
                                    'aria-label': c,
                                    'aria-describedby': u,
                                    ..._,
                                    color: m ? 'primary' : 'secondary',
                                })
                            );
                        };
                    },
                    2660: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = a || (a = r.t(i, 2));
                    },
                },
                l = {};
            function s(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return (n[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var d = {};
            (() => {
                (Object.defineProperty(d, 'X', { value: !0 }), (d.Z = void 0));
                var e = s(9037);
                Object.defineProperty(d, 'Z', {
                    enumerable: !0,
                    get: function () {
                        return e.Toggle;
                    },
                });
            })();
            var c = d.Z;
            d.X;
        },
        16534: (e, t, r) => {
            'use strict';
            r.d(t, { SettingsPage: () => eB });
            var a = r(25839),
                o = r(88204),
                i = r(39004),
                n = r(8487),
                l = r(61493),
                s = r(13833),
                d = r(4254),
                c = r(74631);
            r(93588);
            var u = r(93989),
                _ = r(85570),
                m = r(35622),
                f = r(57687),
                p = r(26377),
                C = r.n(p);
            let E = (0, o.PA)(() => {
                let { formatMessage: e } = (0, i.A)(),
                    t = (0, _.S)();
                return (0, a.jsx)(m.a, {
                    className: C().modal,
                    headerClassName: C().modalHeader,
                    contentClassName: C().modalContent,
                    title: e({ id: 'equalizer.title' }),
                    open: t.modal.isOpened,
                    onOpenChange: t.modal.onOpenChange,
                    onClose: t.modal.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    closeButtonDataTestId: l.Kq.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON,
                    'data-test-id': l.Kq.equalizer.EQUALIZER_MODAL,
                    children: (0, a.jsx)(f.r, { title: e({ id: 'equalizer.enable' }), isExpanded: !0, isDisabled: !t.isEnabled }),
                });
            });
            var h = r(36484),
                A = r(62562),
                v = r(91149),
                x = r(92942),
                b = r(90208),
                g = r(89130),
                S = r(27954),
                y = r(31488),
                L = r(44806),
                O = r(95029),
                R = r(95067),
                N = r(57549),
                D = r(6304),
                T = r(10959);
            let j = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, i.A)(),
                    { user: r, experiments: a } = (0, S.g)();
                return (0, T.v)({
                    checkExperiment: (e, t) => a.checkExperiment(e, t),
                    getDisclaimerContent: () => t({ id: 'footer.disclaimer-content' }),
                    getExplicitContent: () => (e ? t({ id: 'footer.explicit-content' }) : t({ id: 'about-app.explicit-content' })),
                    userRegion: r.account.data.userSessionRegionIso,
                });
            };
            var I = r(96433),
                B = r(97522),
                M = r(96146),
                w = r.n(M);
            let P = (0, o.PA)(() => {
                let { formatMessage: e } = (0, i.A)(),
                    {
                        location: t,
                        modals: { aboutAppModal: r },
                    } = (0, S.g)(),
                    o = (0, b.B)(),
                    l = (function () {
                        var e;
                        return null == (e = window.musicDesktop) ? void 0 : e.runtime.branch;
                    })(),
                    { language: s } = (0, I.h)(),
                    c = j();
                return (0, a.jsxs)(m.a, {
                    className: w().root,
                    headerClassName: w().modalHeader,
                    contentClassName: w().modalContent,
                    title: e({ id: 'settings.about-app' }),
                    open: r.isOpened,
                    onOpenChange: r.onOpenChange,
                    onClose: r.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: [
                        (0, a.jsxs)('ul', {
                            className: w().list,
                            children: [
                                (0, a.jsx)('li', {
                                    className: w().item,
                                    children: (0, a.jsx)(B.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/performers-and-copyright-holders.html?lang=').concat(s),
                                        children: (0, a.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(n.A, { id: 'footer.links-copyright-holders' }),
                                        }),
                                    }),
                                }),
                                (0, a.jsx)('li', {
                                    className: w().item,
                                    children: (0, a.jsx)(B.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/legal/music_mobile_agreement?lang=').concat(s),
                                        children: (0, a.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(n.A, { id: 'footer.links-terms' }),
                                        }),
                                    }),
                                }),
                                (0, a.jsx)('li', {
                                    className: w().item,
                                    children: (0, a.jsx)(B.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://music.yandex.'.concat(t.tld, '/legal/recommendations/ru/#music'),
                                        children: (0, a.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(n.A, { id: 'footer.links-recommendation-rules' }),
                                        }),
                                    }),
                                }),
                                (0, a.jsx)('li', {
                                    className: w().item,
                                    children: (0, a.jsx)(B.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/index.html?lang=').concat(s),
                                        children: (0, a.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(n.A, { id: 'footer.links-help' }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(d.HL, {
                            className: w().explicitText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            weight: 'medium',
                            dangerouslySetInnerHTML: { __html: c },
                        }),
                        (0, a.jsx)(d.HL, {
                            className: w().companyText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: (0, a.jsx)(n.A, { id: 'about-app.app-name' }),
                        }),
                        (0, a.jsx)(d.HL, {
                            className: w().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-version-short' }, { version: o }),
                        }),
                        (0, a.jsx)(d.HL, {
                            className: w().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-revision' }, { revision: l }),
                        }),
                    ],
                });
            });
            var F = r(4071),
                k = r(23818),
                z = r(96444),
                U = r(51790),
                q = r(13246),
                H = r.n(q);
            let G = { src: '/_next/static/media/clearMemory.33a5df30.png' },
                W = (0, o.PA)(() => {
                    let { formatMessage: e } = (0, i.A)(),
                        {
                            modals: { clearMemoryModal: t },
                        } = (0, S.g)(),
                        { notify: r } = (0, x.l)(),
                        o = (0, z.j)(),
                        l = (0, c.useCallback)(() => {
                            o.clearAll().then(() => {
                                (t.close(),
                                    r(
                                        (0, a.jsx)(U.$, {
                                            message: (0, a.jsx)(d.HL, {
                                                className: H().message,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, a.jsx)(n.A, { id: 'offline.memory-cleared' }),
                                            }),
                                        }),
                                        { containerId: v.u.INFO },
                                    ));
                            });
                        }, [t, r, o]);
                    return (0, a.jsxs)(m.a, {
                        className: H().root,
                        headerClassName: H().modalHeader,
                        contentClassName: H().modalContent,
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: [
                            (0, a.jsx)(k._V, { src: G.src, className: H().image, fit: 'contain', 'aria-hidden': !0 }),
                            (0, a.jsx)(d.HL, {
                                className: H().description,
                                type: 'text',
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                children: (0, a.jsx)(n.A, { id: 'offline.clear-memory-description' }),
                            }),
                            (0, a.jsx)(F.$, {
                                color: 'primary',
                                radius: 'xxxl',
                                size: 'default',
                                onClick: l,
                                children: (0, a.jsx)(n.A, { id: 'interface-actions.clear' }),
                            }),
                        ],
                    });
                });
            var K = r(92057),
                Y = r(25243),
                V = r(18760),
                Q = r(78102),
                X = r.n(Q),
                Z = r(10648),
                J = r(57249),
                $ = r(82298),
                ee = r(13624),
                et = r(71035),
                er = r(82289),
                ea = r(49124);
            let eo = ee.default.default(
                () =>
                    Promise.resolve()
                        .then(r.bind(r, 10648))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = ea.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, Z.setWasmUrl)(new URL(J, e).href);
            }
            let ei = (e) => {
                    let { thumbType: t } = e,
                        [r, o] = (0, c.useState)(null);
                    return ((0, c.useEffect)(() => {
                        let e = K.z[t];
                        e &&
                            e().then((e) => {
                                (0, er.J)(e) ? o(e) : o(''.concat(window.location.origin).concat(e));
                            });
                    }, [t]),
                    r)
                        ? (0, a.jsx)(eo, { src: r })
                        : null;
                },
                en = (0, o.PA)((e) => {
                    let { thumbId: t, isDefault: r = !1 } = e,
                        { settings: o, user: l, paywall: s } = (0, S.g)(),
                        { formatMessage: u } = (0, i.A)(),
                        [_, m] = (0, c.useState)(!1);
                    (0, c.useEffect)(() => {
                        m(!0);
                    }, []);
                    let f = (0, et.c)((e) => {
                            if ((e.preventDefault(), !l.hasPlus && t !== o.selectedThumbId)) return void s.openModal();
                            o.setCustomPlayerThumb(t);
                        }),
                        p = !!_ && o.selectedThumbId === t;
                    if (r)
                        return (0, a.jsxs)(F.$, {
                            className: (0, $.$)(X().button, { [X().button_selected]: p }),
                            radius: 'xl',
                            onClick: f,
                            withRipple: !1,
                            'aria-pressed': p,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: X().thumbContent,
                                    children: [(0, a.jsx)('div', { className: X().thumbLine }), (0, a.jsx)('div', { className: X().thumbDefault })],
                                }),
                                (0, a.jsx)(d.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'm',
                                    weight: 'medium',
                                    className: X().thumbName,
                                    lineClamp: 1,
                                    children: (0, a.jsx)(n.A, { id: 'branded-player.default' }),
                                }),
                            ],
                        });
                    let C = (0, K.r)(u).get(t);
                    if (!C) return;
                    let E = { '--thumb-height': ''.concat(C.thumb.height, 'px') };
                    return (0, a.jsxs)(F.$, {
                        className: (0, $.$)(X().button, { [X().button_selected]: p }),
                        radius: 'xl',
                        onClick: f,
                        withRipple: !1,
                        'aria-pressed': p,
                        children: [
                            (0, a.jsx)('div', { style: E, className: (0, $.$)(X().thumbContent, X().thumbContent_custom), children: (0, a.jsx)(ei, { thumbType: t }) }),
                            (0, a.jsx)(d.HL, { className: X().thumbName, variant: 'div', size: 'm', weight: 'normal', lineClamp: 1, children: C.name }),
                        ],
                    });
                }),
                el = (0, o.PA)(() => {
                    let { formatMessage: e } = (0, i.A)(),
                        t = Array.from((0, K.r)(e).keys());
                    return (0, a.jsxs)('div', {
                        className: X().root,
                        children: [
                            (0, a.jsx)(d.HL, {
                                className: X().title,
                                variant: 'div',
                                size: 'l',
                                weight: 'bold',
                                lineClamp: 1,
                                children: (0, a.jsx)(n.A, { id: 'branded-player.player-type' }),
                            }),
                            (0, a.jsxs)(Y.m, {
                                restrictionsClassName: X().thumbsContainer,
                                children: [(0, a.jsx)(en, { thumbId: V.T.DEFAULT, isDefault: !0 }), t.map((e) => (0, a.jsx)(en, { thumbId: e }, e))],
                            }),
                        ],
                    });
                });
            var es = r(66738),
                ed = r(46664),
                ec = r.n(ed);
            let eu = (e) => {
                let { title: t, description: r, onClick: o, descriptionDataTestId: i, ...n } = e;
                return (0, a.jsx)(F.$, {
                    className: (0, $.$)(ec().root, ec().important),
                    contentContainerClassName: ec().contentContainer,
                    icon: (0, a.jsx)(es.I, { className: ec().icon, size: 'xs', variant: 'arrowRight' }),
                    iconPosition: 'right',
                    onClick: o,
                    isBlock: !0,
                    withRipple: !1,
                    withHover: !1,
                    variant: 'text',
                    color: 'primary',
                    size: 'xs',
                    ...n,
                    children: (0, a.jsxs)('div', {
                        className: ec().content,
                        children: [
                            (0, a.jsx)(d.HL, { className: ec().title, variant: 'div', size: 'l', weight: 'bold', lineClamp: 1, children: t }),
                            r &&
                                (0, a.jsx)(d.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: ec().description,
                                    'data-test-id': i,
                                    children: r,
                                }),
                        ],
                    }),
                });
            };
            var e_ = r(16503),
                em = r(99412),
                ef = r.n(em);
            let ep = (e) => {
                let { title: t, onChange: r, isChecked: o, description: i, 'data-test-id': n } = e,
                    l = (0, c.useId)();
                return (0, a.jsxs)('div', {
                    className: ef().root,
                    children: [
                        (0, a.jsxs)('div', {
                            className: ef().textContainer,
                            children: [
                                (0, a.jsx)(d.HL, {
                                    className: ef().title,
                                    id: l,
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'bold',
                                    lineClamp: 1,
                                    'aria-hidden': !0,
                                    children: t,
                                }),
                                i && (0, a.jsx)(d.HL, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: ef().description, children: i }),
                            ],
                        }),
                        (0, a.jsx)(e_.l, { isChecked: o, 'aria-describedby': l, onChange: r, 'data-test-id': n }),
                    ],
                });
            };
            var eC = r(65343);
            let eE = {
                    [eC.l.TOGGLE_PLAY]: ['K'],
                    [eC.l.TOGGLE_MUTE]: ['M'],
                    [eC.l.INCREASE_VOLUME]: ['↑'],
                    [eC.l.DECREASE_VOLUME]: ['↓'],
                    [eC.l.LIKE]: ['F'],
                    [eC.l.DISLIKE]: ['D'],
                    [eC.l.MOVE_FORWARD]: ['N'],
                    [eC.l.MOVE_BACKWARD]: ['P'],
                    [eC.l.SLIDE_FORWARD]: ['→', 'L'],
                    [eC.l.SLIDE_BACKWARD]: ['←', 'J'],
                    [eC.l.TOGGLE_REPEAT]: ['R'],
                    [eC.l.TOGGLE_SHUFFLE]: ['S'],
                    [eC.l.TOGGLE_FULLSCREEN_PLAYER]: ['W'],
                    [eC.l.CLOSE]: ['Escape'],
                },
                eh = [
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.play-pause' }), shortcutsAction: eC.l.TOGGLE_PLAY },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.mute' }), shortcutsAction: eC.l.TOGGLE_MUTE },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.skip-forward' }), shortcutsAction: eC.l.SLIDE_FORWARD },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.rewind' }), shortcutsAction: eC.l.SLIDE_BACKWARD },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.volume-up' }), shortcutsAction: eC.l.INCREASE_VOLUME },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.volume-down' }), shortcutsAction: eC.l.DECREASE_VOLUME },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.like' }), shortcutsAction: eC.l.LIKE },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.unlike' }), shortcutsAction: eC.l.DISLIKE },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.switch-repeat-mode' }), shortcutsAction: eC.l.TOGGLE_REPEAT },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.switch-shuffle-mode' }), shortcutsAction: eC.l.TOGGLE_SHUFFLE },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.next-track' }), shortcutsAction: eC.l.MOVE_FORWARD },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.previous-track' }), shortcutsAction: eC.l.MOVE_BACKWARD },
                    { formattedMessage: (0, a.jsx)(n.A, { id: 'shortcuts.fullscreen-player' }), shortcutsAction: eC.l.TOGGLE_FULLSCREEN_PLAYER },
                ];
            var eA = r(65300),
                ev = r.n(eA);
            let ex = (0, o.PA)(() => {
                let {
                        modals: { shortcutsModal: e },
                    } = (0, S.g)(),
                    { formatMessage: t } = (0, i.A)(),
                    r = (0, c.useMemo)(() => {
                        let e = (0, a.jsx)(
                            d.HL,
                            { className: ev().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: (0, a.jsx)(n.A, { id: 'shortcuts.or' }) },
                            'or',
                        );
                        return eh.map((t) => {
                            let { shortcutsAction: r, formattedMessage: o } = t,
                                i = eE[r].map((e, t) =>
                                    (0, a.jsx)(
                                        'div',
                                        {
                                            className: ev().button,
                                            children: (0, a.jsx)(d.HL, { variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: e }),
                                        },
                                        t,
                                    ),
                                );
                            return (
                                i.length > 1 && i.splice(1, 0, e),
                                (0, a.jsx)(
                                    'li',
                                    {
                                        children: (0, a.jsxs)('div', {
                                            className: ev().content,
                                            children: [
                                                (0, a.jsx)(d.HL, { className: ev().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: o }),
                                                (0, a.jsx)('div', { className: ev().buttons, children: i }),
                                            ],
                                        }),
                                    },
                                    r,
                                )
                            );
                        });
                    }, []);
                return (0, a.jsx)(m.a, {
                    className: ev().root,
                    headerClassName: ev().modalHeader,
                    contentClassName: ev().modalContent,
                    title: t({ id: 'settings.shortcuts' }),
                    open: e.isOpened,
                    onOpenChange: e.onOpenChange,
                    onClose: e.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: t({ id: 'interface-actions.close' }),
                    children: (0, a.jsx)('ul', { className: ev().list, children: r }),
                });
            });
            var eb = r(80410),
                eg = r.n(eb);
            let eS = (0, o.PA)(() => {
                let e = (0, b.B)(),
                    t = (0, A.N)().get(h.oo),
                    {
                        modals: { shortcutsModal: r, aboutAppModal: o, clearMemoryModal: n },
                        experiments: s,
                        wizard: d,
                        user: m,
                        slam: f,
                        settings: p,
                        sonataState: C,
                    } = (0, S.g)(),
                    T = (0, u.j)(),
                    j = (0, _.S)(),
                    { notify: I } = (0, x.l)(),
                    { formatMessage: B } = (0, i.A)(),
                    M = (0, g.g)(),
                    w = j.isAvailable && !p.isMobile,
                    F = s.checkExperiment(L.z.WebNextCrossMediaPlayer, 'on'),
                    k = s.checkExperiment(L.z.WebNextAIContentReductionSetting, 'on'),
                    z = m.hasPlus,
                    U = p.isLiteVersionModeAvailableForToggle && !0,
                    q = !p.isMobile,
                    H = j.isEnabled ? B({ id: 'equalizer.enabled' }) : B({ id: 'equalizer.disabled' }),
                    G = (0, c.useMemo)(() => B({ id: 'desktop.app-version-short' }, { version: e }), [B, e]),
                    K = (0, c.useCallback)(
                        async (e) => {
                            (await m.setSettings({ isChildModeEnabled: e })) === y.F.ERROR &&
                                I((0, a.jsx)(N.h, { error: B({ id: 'settings.failed-to-change-child-mode' }) }), { containerId: v.u.ERROR });
                        },
                        [m, B, I],
                    ),
                    Y = (0, c.useCallback)(
                        (e) => {
                            f.setOfflineMode(e);
                        },
                        [f],
                    ),
                    V = (0, c.useCallback)(() => {
                        n.open();
                    }, [n]),
                    Q = (0, c.useCallback)(
                        (e) => {
                            if (e) return void p.setLiteVersionMode(O.w.ENABLED, !0);
                            p.setLiteVersionMode(O.w.DISABLED, !0);
                        },
                        [p],
                    );
                (0, c.useLayoutEffect)(() => {
                    let e = t.get(R.c.CrossFadeMode);
                    'boolean' == typeof e && C.setCrossFadeMode(e);
                }, [C, t]);
                let X = (0, c.useCallback)(
                        (e) => {
                            (C.setCrossFadeMode(e), M && (M.isCrossfadeEnabled.value = e));
                        },
                        [C, M],
                    ),
                    Z = (0, c.useCallback)(
                        async (e) => {
                            (await m.setSettings({ aiContentReductionEnabled: e })) === y.F.ERROR &&
                                I((0, a.jsx)(N.h, { error: B({ id: 'error-messages.error-during-action' }) }), { containerId: v.u.ERROR });
                        },
                        [m, B, I],
                    );
                return (0, a.jsxs)('ul', {
                    className: eg().root,
                    'data-test-id': l.e8.settings.SETTINGS_LIST,
                    children: [
                        z &&
                            !T.isActive &&
                            (0, a.jsx)('li', {
                                className: eg().item,
                                children: (0, a.jsx)(ep, {
                                    title: B({ id: 'offline.offline-mode' }),
                                    description: B({ id: 'offline.offline-mode-description' }),
                                    onChange: Y,
                                    isChecked: !!f.isOfflineModeEnabled,
                                    'data-test-id': l.e8.settings.OFFLINE_MODE_TOGGLE,
                                }),
                            }),
                        z &&
                            (0, a.jsxs)('li', {
                                className: eg().item,
                                children: [(0, a.jsx)(eu, { title: B({ id: 'offline.clear-memory' }), onClick: V }), (0, a.jsx)(W, {})],
                            }),
                        U &&
                            (0, a.jsx)('li', {
                                className: eg().item,
                                children: (0, a.jsx)(ep, {
                                    title: B({ id: 'lite-version.title' }),
                                    description: B({ id: 'lite-version.description' }),
                                    onChange: Q,
                                    isChecked: p.isLiteVersionModeEnabled,
                                }),
                            }),
                        w &&
                            (0, a.jsxs)('li', {
                                className: eg().item,
                                children: [
                                    (0, a.jsx)(eu, {
                                        title: B({ id: 'equalizer.title' }),
                                        description: H,
                                        onClick: j.modal.open,
                                        descriptionDataTestId: l.e8.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION,
                                        'data-test-id': l.e8.settings.SETTINGS_EQUALIZER_BUTTON,
                                    }),
                                    (0, a.jsx)(E, {}),
                                ],
                            }),
                        F &&
                            (0, a.jsx)('li', {
                                className: eg().item,
                                children: (0, a.jsx)(ep, { title: B({ id: 'settings.crossfade' }), onChange: X, isChecked: C.isCrossFadeEnabled }),
                            }),
                        k &&
                            (0, a.jsx)('li', {
                                className: eg().item,
                                children: (0, a.jsx)(ep, {
                                    title: B({ id: 'settings.ai-content-reduction' }),
                                    description: B({ id: 'settings.ai-content-reduction-description' }),
                                    onChange: Z,
                                    isChecked: m.settings.aiContentReductionEnabled,
                                    'data-test-id': l.e8.settings.SETTINGS_AI_CONTENT_REDUCTION_BUTTON,
                                }),
                            }),
                        (0, a.jsx)(D.WithOffline, {
                            fallback: (0, a.jsx)('li', {
                                className: eg().item,
                                children: (0, a.jsx)(eu, {
                                    title: B({ id: 'settings.preferences' }),
                                    description: B({ id: 'settings.preferences-description' }),
                                    onClick: d.modal.open,
                                    disabled: !d.isAvailable,
                                }),
                            }),
                        }),
                        (0, a.jsx)(D.WithOffline, {
                            fallback:
                                !s.checkExperiment(L.z.WebNextDisableKids, 'on') &&
                                (0, a.jsx)('li', {
                                    className: eg().item,
                                    children: (0, a.jsx)(ep, {
                                        title: B({ id: 'settings.show-child-section' }),
                                        onChange: K,
                                        isChecked: m.settings.isChildModeEnabled,
                                        'data-test-id': l.e8.settings.SETTINGS_KIDS_BUTTON,
                                    }),
                                }),
                        }),
                        (0, a.jsxs)('li', {
                            className: eg().item,
                            children: [(0, a.jsx)(eu, { title: B({ id: 'settings.shortcuts' }), onClick: r.open }), (0, a.jsx)(ex, {})],
                        }),
                        q && (0, a.jsx)('li', { className: eg().item, children: (0, a.jsx)(el, {}) }),
                        G &&
                            (0, a.jsxs)('li', {
                                className: eg().item,
                                children: [(0, a.jsx)(eu, { title: B({ id: 'settings.about-app' }), description: G, onClick: o.open }), (0, a.jsx)(P, {})],
                            }),
                    ],
                });
            });
            var ey = r(89257),
                eL = r(1407),
                eO = r(21784),
                eR = r(89192),
                eN = r(99401),
                eD = r(26076),
                eT = r(10603),
                ej = r(73748),
                eI = r.n(ej);
            let eB = (0, o.PA)(() => {
                let { formatMessage: e } = (0, i.A)(),
                    { contentScrollRef: t, setContentScrollRef: r } = (0, eR.g)(),
                    o = (0, eO.W)();
                return (0, a.jsxs)(eL.h, {
                    scrollElement: t,
                    outerTitle: e({ id: 'page.settings' }),
                    children: [
                        (0, a.jsx)(eT.Y, {
                            variant: eT.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: o.canBack,
                            children: (0, a.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: (0, a.jsx)(n.A, { id: 'page.settings' }) }),
                        }),
                        (0, a.jsx)(s.N, {
                            ref: r,
                            className: eI().root,
                            containerClassName: eI().scrollableContainer,
                            'data-test-id': l.Xk.settings.SETTINGS_PAGE,
                            children: (0, a.jsxs)('div', {
                                className: eI().container,
                                children: [
                                    (0, a.jsx)('div', { className: eI().content, children: (0, a.jsx)(eS, {}) }),
                                    (0, a.jsx)(ey.p, {}),
                                    (0, a.jsx)(eD.A, { children: (0, a.jsx)(eN.w, { className: eI().footer }) }),
                                ],
                            }),
                        }),
                    ],
                });
            });
        },
        18760: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => a });
            var a = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        19412: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => d });
            var a = r(25839),
                o = r(82298),
                i = r(61493),
                n = r(23976),
                l = r(40828),
                s = r.n(l);
            let d = (e) => {
                let {
                    isActive: t,
                    className: r,
                    shimmerClassName: l,
                    round: d,
                    'aria-label': c,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: f,
                    radius: p = 'l',
                } = e;
                return (0, a.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, o.$)(s().root, r),
                    'data-test-id': i.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        f && (0, a.jsx)(n.W, { isActive: t, className: s().subcover, radius: 'l' }),
                        (0, a.jsx)(n.W, { isActive: t, className: (0, o.$)(s().cover, l, { [s().cover_round]: d, [s().cover_withSubcover]: f }), radius: p }),
                        _ &&
                            (0, a.jsx)('div', {
                                className: (0, o.$)(s().infoContainer, s()['content_linesCount_'.concat(m)], { [s().infoContainer_centered]: u }),
                                children: (0, a.jsx)(n.W, { isActive: t, className: (0, o.$)(s().title, { [s().title_withSubcover]: f }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        20258: (e, t, r) => {
            'use strict';
            r.d(t, { _Q: () => a, fD: () => i, qG: () => n, xK: () => o });
            var a = (function (e) {
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
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
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
                    'sidebar',
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
                    'lumen_fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_unified_screen',
                ],
                i = [
                    'home',
                    'sidebar',
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
                    'lumen_fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_limit_screen',
                    'multivibe_unified_screen',
                ],
                n = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        20790: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => i });
            var a = r(74631),
                o = r(73810);
            let i = () => (0, a.useContext)(o.P);
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
        25195: (e, t, r) => {
            'use strict';
            r.d(t, { u: () => i });
            var a = r(74631),
                o = r(57487);
            function i() {
                return (0, a.useContext)(o.E);
            }
        },
        25243: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => c });
            var a = r(25839),
                o = r(82298),
                i = r(89288),
                n = r(69084),
                l = r(4254),
                s = r(72459),
                d = r.n(s);
            let c = (e) => {
                let { title: t, children: r, restrictionsClassName: s, ...c } = e;
                return (0, a.jsxs)('section', {
                    className: d().root,
                    ...(0, i.OZ)(c),
                    children: [
                        t &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(l.HL, { variant: 'span', type: 'text', size: 'm', weight: 'medium', 'aria-hidden': !0, children: t }),
                                    (0, a.jsx)(n.q, { children: (0, a.jsx)(l.DZ, { variant: 'h4', children: t }) }),
                                ],
                            }),
                        (0, a.jsx)('div', { className: (0, o.$)(d().restrictions, s), children: r }),
                    ],
                });
            };
        },
        25488: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => i });
            var a = r(74631),
                o = r(66192);
            function i() {
                return (0, a.useContext)(o.l);
            }
        },
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var a = r(25839);
            r(93588);
            var o = r(400),
                i = r.n(o);
            let n = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: i().empty });
            };
        },
        26377: (e) => {
            e.exports = {
                header: 'Equalizer_header__oL2Ii',
                modal: 'Equalizer_modal__yW0lz',
                modalHeader: 'Equalizer_modalHeader__BaeWi',
                modalContent: 'Equalizer_modalContent__xbClm',
                title: 'Equalizer_title__oP3e2',
                frequencies: 'Equalizer_frequencies__M9bt3',
                label: 'Equalizer_label__cAYfh',
                equalizer: 'Equalizer_equalizer__M9Utp',
                equalizer_disabled: 'Equalizer_equalizer_disabled__NciRX',
                equalizer_enter: 'Equalizer_equalizer_enter___0_xp',
                equalizer_enter_active: 'Equalizer_equalizer_enter_active__hRAgb',
                'enter-collapse': 'Equalizer_enter-collapse__Ypuhz',
                equalizer_exit: 'Equalizer_equalizer_exit__wroQI',
                equalizer_exit_active: 'Equalizer_equalizer_exit_active__68Faq',
                'exit-collapse': 'Equalizer_exit-collapse____a2I',
                preamp: 'Equalizer_preamp__hfuqj',
                container: 'Equalizer_container__wK7dV',
                labels: 'Equalizer_labels__rE8Hc',
            };
        },
        26742: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var a = r(74631),
                o = r(14482);
            function i() {
                return (0, a.useContext)(o.p);
            }
        },
        27819: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            let a = {
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
            r.d(t, { F: () => a });
            var a = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        36413: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 16534));
        },
        37314: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => i });
            var a = r(74631),
                o = r(39752);
            function i() {
                return (0, a.useContext)(o.S);
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
        38550: (e) => {
            e.exports = {
                root: 'EqualizerPresets_root__b2gp7',
                buttonIcon: 'EqualizerPresets_buttonIcon__DgPG8',
                buttonText: 'EqualizerPresets_buttonText__cy2_S',
                button: 'EqualizerPresets_button__D8s_l',
                button_disabled: 'EqualizerPresets_button_disabled__BcN1s',
                container: 'EqualizerPresets_container__ABVY8',
            };
        },
        39752: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => a });
            let a = (0, r(74631).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
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
            r.d(t, { H: () => o, P: () => i });
            var a = r(74631);
            let o = (0, a.createContext)(null),
                i = () => (0, a.useContext)(o);
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
        46664: (e) => {
            e.exports = {
                icon: 'SettingsListButtonItem_icon__WULZ1',
                title: 'SettingsListButtonItem_title__npCza',
                description: 'SettingsListButtonItem_description__g8_Ba',
                root: 'SettingsListButtonItem_root__3dtV2',
                important: 'SettingsListButtonItem_important__AcEon',
                contentContainer: 'SettingsListButtonItem_contentContainer__jqoKg',
                content: 'SettingsListButtonItem_content___Opuo',
            };
        },
        48552: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => o });
            var a = r(28410);
            let o = a.gK.model('CustomPlayerThumb', { href: a.gK.string, width: a.gK.number, height: a.gK.number });
        },
        49656: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => o });
            var a = {};
            (Object.defineProperty(a, '__esModule', { value: !0 }), (a.useReturnValue = void 0), (a.useReturnValue = (e) => e()), a.__esModule);
            var o = a.useReturnValue;
        },
        51246: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => c, hg: () => d });
            var a,
                o = r(74631),
                i = {
                    5881: (e, t, r) => {
                        function a() {
                            for (var e, t, r = 0, a = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            a,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (a = e(t[r])) && (o && (o += ' '), (o += a));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (r.r(t), r.d(t, { clsx: () => a, default: () => o }));
                        let o = a;
                    },
                    8765: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
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
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
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
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
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
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
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
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var o = null;
                            if ((void 0 !== a && (o = '' + a), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var i in ((a = {}), t)) 'key' !== i && (a[i] = t[i]);
                            else a = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7742: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let o = r(4377),
                            i = r(5881),
                            n = r(8532),
                            l = a(r(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: a,
                                    menuControl: s,
                                    pinControl: d,
                                    trailerControl: c,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: m,
                                    labelText: f,
                                } = e,
                                p = c || r,
                                C = s || a;
                            return (0, o.jsxs)('div', {
                                className: (0, i.clsx)(
                                    l.default.root,
                                    l.default.controls,
                                    { [l.default.controls_visible]: u },
                                    l.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, o.jsx)('div', { className: l.default.top, children: d }),
                                    (0, o.jsxs)('div', {
                                        className: (0, i.clsx)(l.default.bottom, m),
                                        children: [
                                            p && (0, o.jsxs)('div', { className: l.default.bottom_left, children: [c, r] }),
                                            C && (0, o.jsxs)('div', { className: l.default.bottom_right, children: [s, a] }),
                                        ],
                                    }),
                                    !!f && (0, o.jsx)(n.Label, { className: l.default.label, children: f }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let o = r(4377),
                            i = r(810),
                            n = r(5881),
                            l = r(8903),
                            s = r(6530),
                            d = a(r(3550)),
                            c = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: a,
                                    textPosition: i = 'left',
                                    contentLinesCount: c = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: m,
                                    chart: f,
                                    children: p,
                                    srTitle: C,
                                    wrapperClassName: E,
                                    ...h
                                } = e;
                                return (0, o.jsxs)('div', {
                                    className: (0, n.clsx)(d.default.root, a),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, o.jsx)(s.SROnly, { children: null != C ? C : u }),
                                        (0, o.jsx)('div', { className: d.default.viewContainer, children: r }),
                                        (0, o.jsxs)('div', {
                                            className: (0, n.clsx)(d.default.wrapper, E),
                                            children: [
                                                f,
                                                (0, o.jsxs)('div', {
                                                    className: (0, n.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(i)],
                                                        d.default['content_linesCount_'.concat(c)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, o.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, o.jsx)(l.Caption, {
                                                                        className: d.default.title,
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
                        t.EntityCard = (0, i.forwardRef)((e, t) => (0, o.jsx)(c, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let o = r(4377),
                            i = r(5881),
                            n = r(8903),
                            l = a(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: a = 's', ...s } = e;
                            return (0, o.jsx)(n.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: a,
                                lineClamp: 1,
                                className: (0, i.clsx)(l.default.root, r),
                                ...s,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var a = r(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return a.Label;
                            },
                        });
                    },
                    5531: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = r(4377),
                            i = r(5881),
                            n = r(810),
                            l = a(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: a, ...s } = e,
                                d = (0, i.clsx)(l.default.root, { [l.default.focusable]: r }, t);
                            return (0, n.isValidElement)(a)
                                ? (0, n.cloneElement)(a, { ...s, className: (0, i.clsx)(d, a.props.className) })
                                : (0, o.jsx)('span', { className: d, ...s, children: a });
                        };
                    },
                    6530: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var a = r(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return a.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let o = r(4377),
                            i = r(5881),
                            n = r(810),
                            l = r(5987),
                            s = a(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: a = 'text', size: n = 's', className: d, children: c, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(l.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, i.clsx)(s.default.root, s.default['root_'.concat(a, '_').concat(n)], s.default['root_weight_'.concat(u)], d),
                                ..._,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, n.forwardRef)((e, r) => (0, o.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let o = r(4377),
                            i = r(5881),
                            n = r(810),
                            l = r(5987),
                            s = a(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: a = 'bold', size: n = 's', className: d, children: c, ...u } = e;
                            return (0, o.jsx)(l.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, i.clsx)(s.default.root, s.default['root_size_'.concat(n)], s.default['root_weight_'.concat(a)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, n.forwardRef)((e, r) => (0, o.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let o = r(4377),
                            i = r(5881),
                            n = r(810),
                            l = a(r(61));
                        function s(e) {
                            let { forwardRef: t, style: r, className: a, children: n, variant: s, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof n ? n : void 0;
                            return (0, o.jsx)(s, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, i.clsx)(
                                    l.default.root,
                                    { [l.default.root_clamp]: d && d > 0, [l.default.root_clamp_oneline]: d && 1 === d, [l.default.root_clamp_multiline]: d && d > 1 },
                                    a,
                                ),
                                ...c,
                                children: n,
                            });
                        }
                        ((t.TypographyComponent = s), (t.Typography = (0, n.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var a = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return a.Caption;
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
                        e.exports = a || (a = r.t(o, 2));
                    },
                },
                n = {};
            function l(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (i[e].call(r.exports, r, r.exports, l), r.exports);
            }
            ((l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, 'X$', { value: !0 }), (s.kk = s.m7 = void 0));
                var e = l(7093);
                Object.defineProperty(s, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = l(7742);
                Object.defineProperty(s, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var d = s.kk,
                c = s.m7;
            s.X$;
        },
        51859: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => a, u: () => o });
            var a = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                o = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        52512: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var a = r(74631),
                o = r(3669),
                i = r(13232);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, a.useRef)(null),
                    l = (0, o.D)(),
                    s = (0, a.useId)(),
                    d = (0, a.useContext)(i.B),
                    c = (0, a.useCallback)(
                        (a, o) => {
                            (e ? e(a, r ? o : void 0) : l(a, o), t && d.unobserveElement(s));
                        },
                        [e, d, s, l, t, r],
                    );
                return (
                    (0, a.useEffect)(
                        () => (
                            d.observeElement({ elementRef: n, elementId: s, callback: c }),
                            () => {
                                d.unobserveElement(s);
                            }
                        ),
                        [e, d, c, s, l],
                    ),
                    { ref: n, intersectionPropertyId: s }
                );
            };
        },
        53424: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => a });
            let a = (0, r(74631).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        57487: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => a });
            let a = (0, r(74631).createContext)({ offsetBlockPosY: void 0 });
        },
        57549: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => c });
            var a = r(25839),
                o = r(82298),
                i = r(69084),
                n = r(4254),
                l = r(51790),
                s = r(23775),
                d = r.n(s);
            let c = (e) => {
                let { error: t, closeToast: r, className: s } = e;
                return (0, a.jsx)(l.$, {
                    className: (0, o.$)(d().root, s),
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(i.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, a.jsx)(n.HL, { className: d().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: r,
                });
            };
        },
        57687: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => N });
            var a = r(25839),
                o = r(82298),
                i = r(88204),
                n = r(74631),
                l = r(39004),
                s = r(45705),
                d = r(61493),
                c = r(16503),
                u = r(4254),
                _ = r(85570),
                m = r(26377),
                f = r.n(m),
                p = r(8487),
                C = r(74280),
                E = r(4071),
                h = r(32750),
                A = r(66738),
                v = r(38550),
                x = r.n(v);
            let b = {
                    [C.f.DEFAULT]: (0, a.jsx)(p.A, { id: 'equalizer.default-preset' }),
                    [C.f.CUSTOM]: (0, a.jsx)(p.A, { id: 'equalizer.custom-preset' }),
                    [C.f.CLASSICAL]: (0, a.jsx)(p.A, { id: 'equalizer.classical-preset' }),
                    [C.f.CLUB]: (0, a.jsx)(p.A, { id: 'equalizer.club-preset' }),
                    [C.f.DANCE]: (0, a.jsx)(p.A, { id: 'equalizer.dance-preset' }),
                    [C.f.BASS_BOOST]: (0, a.jsx)(p.A, { id: 'equalizer.bass-boost-preset' }),
                    [C.f.BASS_AND_TREBLE_BOOST]: (0, a.jsx)(p.A, { id: 'equalizer.bass-and-treble-boost-preset' }),
                    [C.f.TREBLE_BOOST]: (0, a.jsx)(p.A, { id: 'equalizer.treble-boost-preset' }),
                    [C.f.SPEAKERS]: (0, a.jsx)(p.A, { id: 'equalizer.speakers-preset' }),
                    [C.f.LARGE_HALL]: (0, a.jsx)(p.A, { id: 'equalizer.large-hall-preset' }),
                    [C.f.CONCERT]: (0, a.jsx)(p.A, { id: 'equalizer.concert-preset' }),
                    [C.f.PARTY]: (0, a.jsx)(p.A, { id: 'equalizer.party-preset' }),
                    [C.f.POP]: (0, a.jsx)(p.A, { id: 'equalizer.pop-preset' }),
                    [C.f.REGGAE]: (0, a.jsx)(p.A, { id: 'equalizer.reggae-preset' }),
                    [C.f.ROCK]: (0, a.jsx)(p.A, { id: 'equalizer.rock-preset' }),
                    [C.f.SKA]: (0, a.jsx)(p.A, { id: 'equalizer.ska-preset' }),
                    [C.f.SOFT]: (0, a.jsx)(p.A, { id: 'equalizer.soft-preset' }),
                    [C.f.SOFT_ROCK]: (0, a.jsx)(p.A, { id: 'equalizer.soft-rock-preset' }),
                    [C.f.TECHNO]: (0, a.jsx)(p.A, { id: 'equalizer.techno-preset' }),
                },
                g = (0, i.PA)((e) => {
                    let { isDisabled: t } = e,
                        r = (0, _.S)(),
                        i = (0, n.useCallback)(
                            (e) => {
                                r.changeCurrentPreset(e.id);
                            },
                            [r],
                        );
                    return (0, a.jsx)(h.ms, {
                        isDisabled: t,
                        className: x().root,
                        onSelect: i,
                        reference: (0, a.jsxs)(E.$, {
                            radius: 'xxxl',
                            className: (0, o.$)(x().button, { [x().button_disabled]: t }),
                            'data-test-id': d.Kq.equalizer.EQUALIZER_PRESETS_BUTTON,
                            children: [
                                (0, a.jsx)(u.HL, { className: x().buttonText, variant: 'span', size: 's', weight: 'medium', children: b[r.currentPreset.id] }),
                                (0, a.jsx)(A.I, { className: x().buttonIcon, size: 'xxs', variant: 'arrowDown' }),
                            ],
                        }),
                        placement: 'top',
                        offsetOptions: -40,
                        defaultValue: r.currentPreset.id,
                        containerClassName: x().container,
                        'data-test-id': d.Kq.equalizer.EQUALIZER_PRESETS_DROPDOWN,
                        children: Object.values(C.f).map((e) => (0, a.jsx)(h.c$, { id: e, label: b[e] }, e)),
                    });
                });
            var S = r(9794),
                y = r(98920),
                L = r.n(y);
            let O = (e) => {
                    let { minValue: t, maxValue: r, className: i, label: n, isDisabled: l, onChange: s, value: c, ..._ } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, o.$)(L().root, i),
                        'data-test-id': d.Kq.equalizer.EQUALIZER_SLIDER_CONTAINER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: L().container,
                                children: [
                                    (0, a.jsx)('div', { className: L().serif }),
                                    (0, a.jsx)(S.A, {
                                        disabled: l,
                                        className: (0, o.$)(L().slider, L().important),
                                        thumbSize: 'm',
                                        trackSize: 'xxs',
                                        onChange: s,
                                        value: c,
                                        showThumbVariant: 'always',
                                        step: 0.1,
                                        min: t,
                                        max: r,
                                        ..._,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(u.HL, {
                                'aria-hidden': !0,
                                className: (0, o.$)(L().label, { [L().label_disabled]: l }),
                                variant: 'div',
                                weight: 'normal',
                                size: 'xs',
                                children: n,
                            }),
                        ],
                    });
                },
                R = { enter: f().equalizer_enter, enterActive: f().equalizer_enter_active, exit: f().equalizer_exit, exitActive: f().equalizer_exit_active },
                N = (0, i.PA)((e) => {
                    let { title: t, className: r, isExpanded: i, isDisabled: m } = e,
                        p = (0, n.useRef)(null),
                        { formatMessage: C } = (0, l.A)(),
                        E = (0, _.S)(),
                        h = E.isEnabled ? C({ id: 'equalizer.disable-equalizer' }) : C({ id: 'equalizer.enable-equalizer' }),
                        A = (0, n.useCallback)(
                            (e) => {
                                E.setEnabled(e);
                            },
                            [E],
                        ),
                        v = (0, n.useCallback)(
                            (e) => (t) => {
                                E.changeAmp(e, t);
                            },
                            [E],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                E.changePreamp(e);
                            },
                            [E],
                        );
                    return (0, a.jsxs)('div', {
                        className: (0, o.$)(f().root, r),
                        'data-test-id': d.Kq.equalizer.EQUALIZER_CONTAINER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: f().header,
                                children: [
                                    (0, a.jsx)(u.HL, {
                                        className: f().title,
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        'data-test-id': d.Kq.equalizer.EQUALIZER_TITLE,
                                        children: t,
                                    }),
                                    (0, a.jsx)(c.l, { 'aria-label': h, isChecked: E.isEnabled, onChange: A, 'data-test-id': d.Kq.equalizer.EQUALIZER_TOGGLE }),
                                ],
                            }),
                            (0, a.jsx)(s.A, {
                                in: i,
                                nodeRef: p,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: R,
                                children: (0, a.jsxs)('div', {
                                    ref: p,
                                    className: (0, o.$)(f().equalizer, { [f().equalizer_disabled]: m }),
                                    'data-test-id': d.Kq.equalizer.EQUALIZER_FREQUENCIES_CONTAINER,
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: f().container,
                                            children: [
                                                (0, a.jsxs)('div', {
                                                    className: f().preamp,
                                                    children: [
                                                        (0, a.jsx)(O, {
                                                            isDisabled: m,
                                                            minValue: 0.5,
                                                            maxValue: 1.5,
                                                            value: E.currentPreset.preamp,
                                                            onChange: x,
                                                            label: C({ id: 'equalizer.preamp-level' }),
                                                            'aria-label': C({ id: 'equalizer.slider-preamp-label' }),
                                                            'data-test-id': d.Kq.equalizer.EQUALIZER_PREAMP_SLIDER,
                                                        }),
                                                        (0, a.jsxs)('div', {
                                                            className: f().labels,
                                                            'aria-hidden': !0,
                                                            children: [
                                                                (0, a.jsx)(u.HL, {
                                                                    className: f().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: C({ id: 'equalizer.amp-label' }, { value: 12 }),
                                                                }),
                                                                (0, a.jsx)(u.HL, {
                                                                    className: f().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: C({ id: 'equalizer.amp-label' }, { value: 0 }),
                                                                }),
                                                                (0, a.jsx)(u.HL, {
                                                                    className: f().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: C({ id: 'equalizer.amp-label' }, { value: -12 }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)('div', {
                                                    className: f().frequencies,
                                                    children: E.currentPreset.frequencies.map((e) => {
                                                        let t = ((e, t) =>
                                                                e < 1e3 ? e.toString() : t({ id: 'equalizer.frequency-label' }, { value: (e / 1e3).toFixed(0) }))(
                                                                e.key,
                                                                C,
                                                            ),
                                                            r = Math.round(10 * e.value) / 10;
                                                        return (0, a.jsx)(
                                                            O,
                                                            {
                                                                isDisabled: m,
                                                                minValue: -12,
                                                                maxValue: 12,
                                                                value: e.value,
                                                                label: t,
                                                                onChange: v(e.key),
                                                                'aria-label': C({ id: 'equalizer.slider-frequency-label' }, { label: t, value: r }),
                                                                'data-test-id': d.Kq.equalizer.EQUALIZER_FREQUENCY_SLIDER,
                                                            },
                                                            t,
                                                        );
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(g, { isDisabled: m }),
                                    ],
                                }),
                            }),
                        ],
                    });
                });
        },
        58069: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => i });
            var a = r(44031),
                o = r(20258);
            let i = {
                [o._Q.HOME]: a.LandingBlockPageID.MainScreen,
                [o._Q.SIDEBAR]: a.LandingBlockPageID.Sidebar,
                [o._Q.NON_MUSIC]: a.LandingBlockPageID.NonmusicLandingScreen,
                [o._Q.OWN_COLLECTION]: a.LandingBlockPageID.CollectionLandingScreen,
                [o._Q.LANDING]: a.LandingBlockPageID.DynamicScreen,
                [o._Q.OWN_ARTISTS]: a.LandingBlockPageID.CollectionArtistsScreen,
                [o._Q.SEARCH]: a.LandingBlockPageID.SearchScreen,
                [o._Q.ARTIST]: a.LandingBlockPageID.ArtistScreen,
                [o._Q.CONCERTS]: a.LandingBlockPageID.ConcertsLandingScreen,
                [o._Q.CONCERT]: a.LandingBlockPageID.ConcertScreen,
                [o._Q.CONCERT_LOCATION_SELECTOR]: a.LandingBlockPageID.ConcertLocationSelector,
                [o._Q.ALBUM]: a.LandingBlockPageID.AlbumScreen,
                [o._Q.PLAYLIST]: a.LandingBlockPageID.PlaylistScreen,
                [o._Q.SLIDES_SCREEN]: a.LandingBlockPageID.SlidesScreen,
                [o._Q.PROMOLANDING_ALBUM]: a.LandingBlockPageID.PromolandingAlbumScreen,
                [o._Q.WAVE_LANDING_SCREEN]: a.LandingBlockPageID.WaveLandingScreen,
                [o._Q.FACT_SCREEN]: a.LandingBlockPageID.FactScreen,
                [o._Q.LUMEN_FACT_SCREEN]: a.LandingBlockPageID.LumenFactScreen,
                [o._Q.COLLECTION_VIBE_ROOMS]: a.LandingBlockPageID.MultivibeScreen,
                [o._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: a.LandingBlockPageID.MultivibeSendingInvitationScreen,
                [o._Q.MULTIVIBE_ACTION_SCREEN]: a.LandingBlockPageID.MultivibeActionScreen,
                [o._Q.MULTIVIBE_LIMIT_SCREEN]: a.LandingBlockPageID.MultivibeLimitScreen,
                [o._Q.MULTIVIBE_UNIFIED_SCREEN]: a.LandingBlockPageID.MultivibeUnifiedScreen,
            };
        },
        59450: (e, t, r) => {
            'use strict';
            r.d(t, { vZ: () => C, st: () => i, gf: () => l });
            var a = r(74631);
            let o = (0, a.createContext)(null);
            function i() {
                return (0, a.useContext)(o);
            }
            let n = (0, a.createContext)({ hash: void 0 });
            function l() {
                return (0, a.useContext)(n);
            }
            var s = r(25839),
                d = r(59342);
            let c = (e) => {
                let { children: t } = e,
                    r = (0, a.useMemo)(() => ({ hash: (0, d.A)() }), []);
                return (0, s.jsx)(n.Provider, { value: r, children: t });
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
                            trackEvent: (a, o) => {
                                let i = { ...o, ...t.getGlobalParams(), ...r.getPlatformParams() };
                                e.trackEvent(a, i);
                            },
                        }));
                }
            }
            let p = null,
                C = (e) => {
                    let { allowAnalyticsLogs: t, children: r, evgenUserParam: i, logger: n, metrika: l } = e,
                        d = (0, a.useMemo)(() => {
                            if (p) return p;
                            let e = (function (e, t, r) {
                                let a = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: r, requestsSendingDelay: a } = e,
                                        o = [];
                                    return (
                                        !(function e() {
                                            (o.length > 0 && t(o.splice(0, r)), window.setTimeout(e, a));
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
                                        (r && t.log(e, o), a.add({ [e]: o }));
                                    },
                                };
                            })((e) => l.count(e, i), n, t);
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
                        }, [n, l]);
                    return (0, s.jsx)(o.Provider, { value: d, children: (0, s.jsx)(c, { children: r }) });
                };
        },
        64261: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => a });
            let a = (0, r(74631).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
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
            r.d(t, { l: () => a });
            var a = (function (e) {
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
        66192: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => a });
            let a = (0, r(74631).createContext)({
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
            function a(e) {
                let { params: t, logger: r, context: a } = e,
                    o = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return o.length > 0 ? (r.error('Evgen parameters are not met', { parameters: o.join(', '), incomingParams: t, context: a }), null) : t;
            }
            r.d(t, { F: () => a });
        },
        69041: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => b });
            var a = r(25839),
                o = r(82298),
                i = r(46189),
                n = r(88204),
                l = r(74631),
                s = r.t(l, 2),
                d = r(61493),
                c = r(9911),
                u = {
                    810: (e) => {
                        e.exports = s;
                    },
                },
                _ = {},
                m = {};
            ((() => {
                (Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0));
                let e = (function e(t) {
                    var r = _[t];
                    if (void 0 !== r) return r.exports;
                    var a = (_[t] = { exports: {} });
                    return (u[t](a, a.exports, e), a.exports);
                })(810);
                m.useForwardRef = function (t, r) {
                    let a = (0, e.useRef)(r);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(a.current) : (t.current = a.current));
                        }, [t]),
                        a
                    );
                };
            })(),
                m.__esModule);
            var f = m.useForwardRef,
                p = r(51859),
                C = r(27954),
                E = r(80986),
                h = r(22034),
                A = r.n(h);
            let v = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                x = (0, n.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: r,
                            forwardRef: n,
                            scrollPadding: s,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: _,
                            buttonSize: m,
                            buttonVariant: h,
                            withSecondaryColor: x,
                        } = e,
                        {
                            settings: { isMobile: b },
                        } = (0, C.g)(),
                        g = f(n, null),
                        { shouldBackwardButtonBeDisabled: S, shouldForwardButtonBeDisabled: y, shouldHideControls: L } = (0, c.Y)(g),
                        [O, R] = (0, l.useMemo)(() => {
                            let e = (0, i.A)(v, s);
                            return [b ? e[p.u.Mobile].start : e[p.u.Desktop].start, b ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [s, b]),
                        N = (0, l.useCallback)(
                            (e) => {
                                var t;
                                let r = null == (t = g.current) ? void 0 : t.children[e],
                                    { current: a } = g;
                                if (!a || !(r instanceof HTMLElement)) return;
                                if (r.offsetLeft - a.scrollLeft < O) {
                                    a.scrollLeft = r.offsetLeft - O;
                                    return;
                                }
                                let o = a.scrollLeft + a.clientWidth - r.offsetLeft - r.offsetWidth;
                                o < R && (a.scrollLeft -= o - R);
                            },
                            [g, R, O],
                        ),
                        D = (0, l.useCallback)(
                            (e) => {
                                var t, a;
                                (N(e), null == (t = (a = r.props).onTabChange) || t.call(a, e));
                            },
                            [r, N],
                        ),
                        T = (0, l.cloneElement)(r, { forwardRef: g, className: (0, o.$)(A().wrapper, r.props.className, A().carousel, A().important), onTabChange: D });
                    return (0, a.jsxs)('div', {
                        className: (0, o.$)(
                            A().root,
                            {
                                [A().root_carouselBetweenArrows]: u,
                                [A().root_arrowLeft_hidden]: S,
                                [A().root_arrowRight_hidden]: y,
                                [A().root_arrow_hidden]: S && y && L,
                            },
                            t,
                        ),
                        'data-test-id': d.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, a.jsx)('div', { className: A().list, children: T }),
                            !b &&
                                (0, a.jsx)(E.X, {
                                    className: (0, o.$)(A().buttons, _),
                                    carouselRef: g,
                                    backwardControlClassName: A().control,
                                    forwardControlClassName: A().control,
                                    withSecondaryColor: x,
                                    buttonSize: m,
                                    buttonVariant: h,
                                }),
                        ],
                    });
                }),
                b = (0, l.forwardRef)((e, t) => (0, a.jsx)(x, { forwardRef: t, ...e }));
        },
        69084: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => d });
            var a,
                o = r(74631),
                i = {
                    5881: (e, t, r) => {
                        function a() {
                            for (var e, t, r = 0, a = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            a,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (a = e(t[r])) && (o && (o += ' '), (o += a));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (r.r(t), r.d(t, { clsx: () => a, default: () => o }));
                        let o = a;
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var o = null;
                            if ((void 0 !== a && (o = '' + a), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var i in ((a = {}), t)) 'key' !== i && (a[i] = t[i]);
                            else a = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5531: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = r(4377),
                            i = r(5881),
                            n = r(810),
                            l = a(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: a, ...s } = e,
                                d = (0, i.clsx)(l.default.root, { [l.default.focusable]: r }, t);
                            return (0, n.isValidElement)(a)
                                ? (0, n.cloneElement)(a, { ...s, className: (0, i.clsx)(d, a.props.className) })
                                : (0, o.jsx)('span', { className: d, ...s, children: a });
                        };
                    },
                    810: (e) => {
                        e.exports = a || (a = r.t(o, 2));
                    },
                },
                n = {};
            function l(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (i[e].call(r.exports, r, r.exports, l), r.exports);
            }
            ((l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.SROnly = void 0));
                var e = l(5531);
                Object.defineProperty(s, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var d = s.SROnly;
            s.__esModule;
        },
        72459: (e) => {
            e.exports = { root: 'RestrictionBlock_root__qzBtp', restrictions: 'RestrictionBlock_restrictions__6V1zc' };
        },
        72594: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => i });
            var a = r(74631),
                o = r(53424);
            function i() {
                return (0, a.useContext)(o.F);
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
            r.d(t, { P: () => a });
            let a = (0, r(74631).createContext)(null);
        },
        74280: (e, t, r) => {
            'use strict';
            var a;
            (r.d(t, { f: () => a }),
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
                })(a || (a = {})));
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
            var a = r(95067);
            let o = (e) => {
                let t = e.get(a.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        80410: (e) => {
            e.exports = { root: 'Settings_root__FVVrn', item: 'Settings_item__Ksa9h' };
        },
        80986: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => _ });
            var a = r(25839),
                o = r(82298),
                i = r(74631),
                n = r(61493),
                l = r(9911),
                s = r(4071),
                d = r(66738),
                c = r(37922),
                u = r.n(c);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: c,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: f = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: C, swipeForward: E, shouldBackwardButtonBeDisabled: h, shouldForwardButtonBeDisabled: A, shouldHideControls: v } = (0, l.Y)(t),
                    x = (0, i.useCallback)(
                        (e) => {
                            (C(), e.stopPropagation());
                        },
                        [C],
                    ),
                    b = (0, i.useCallback)(
                        (e) => {
                            (E(), e.stopPropagation());
                        },
                        [E],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, o.$)(u().root, _),
                    'data-test-id': n.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, a.jsx)(s.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, r, { [u().control_hidden]: v, [u().control_withSecondaryColor]: m }),
                            onClick: x,
                            size: f,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, a.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: h,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, a.jsx)(s.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, c, { [u().control_hidden]: v, [u().control_withSecondaryColor]: m }),
                            onClick: b,
                            size: f,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, a.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: A,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        82064: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => a });
            let a = (0, r(74631).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        82289: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => o });
            var a = r(38097);
            let o = (e) => e.startsWith(a.nl);
        },
        85570: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => n, i: () => i });
            var a = r(74631),
                o = r(36432);
            let i = (0, a.createContext)(null),
                n = () => {
                    let e = (0, a.useContext)(i);
                    if (!e) throw new o.t('Equalizer cannot be null, please add a context provider', { code: 'E_CONTEXT_EQUALIZER_NULL' });
                    return e;
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
        89130: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => o, g: () => i });
            var a = r(74631);
            let o = (0, a.createContext)(null);
            function i() {
                return (0, a.useContext)(o);
            }
        },
        89209: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => a });
            var a = (function (e) {
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
            r.d(t, { p: () => q });
            var a = r(25839),
                o = r(82298),
                i = r(88204),
                n = r(74631),
                l = r(39004),
                s = r(8487),
                d = r(61493),
                c = r(68934),
                u = r(4071),
                _ = r(35622),
                m = r(5867),
                f = r(4254),
                p = r(51859),
                C = r(91149),
                E = r(92942),
                h = r(65343),
                A = r(89209),
                v = r(20790),
                x = r(27954),
                b = r(31488),
                g = r(36159),
                S = r(57549),
                y = r(69041),
                L = r(19412),
                O = r(79396),
                R = r(9931),
                N = r(6968),
                D = r(51246),
                T = r(66738),
                j = r(86869),
                I = r(52512),
                B = r(6323),
                M = r(27819),
                w = r(86432),
                P = r.n(w);
            let F = (0, i.PA)((e) => {
                let { className: t, artist: r } = e,
                    { ref: i, intersectionPropertyId: l } = (0, I.n)(),
                    {
                        wizard: { likeArtist: s, isArtistLiked: c },
                    } = (0, x.g)(),
                    { id: _, name: m, coverUri: p } = r,
                    C = (0, n.useCallback)(() => {
                        s(_);
                    }, [s, _]),
                    E = c(_),
                    h = (0, n.useMemo)(
                        () =>
                            (0, a.jsx)(j.t, {
                                className: P().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, a.jsxs)(u.$, {
                                    radius: 'round',
                                    className: P().coverBlock,
                                    variant: 'default',
                                    onClick: C,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': E,
                                    'aria-label': m,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, a.jsx)(B.B, { className: P().image, src: p || M.A.src, fit: 'cover', alt: m, withAvatarReplace: !!p, 'aria-hidden': !0 }),
                                        (0, a.jsx)('div', {
                                            className: (0, o.$)(P().like),
                                            children: (0, a.jsx)(T.I, { variant: 'likedVariant', size: 's', className: P().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [E, p, m, C],
                    );
                return (0, a.jsx)(D.MN, {
                    ref: i,
                    className: (0, o.$)(P().root, { [P().root_selected]: E }, t),
                    textPosition: 'center',
                    title: (0, a.jsx)(f.HL, {
                        'aria-hidden': !0,
                        className: P().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': l,
                    view: h,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var k = r(22984),
                z = r.n(k);
            let U = { [p.u.Desktop]: { start: 40, end: 40 }, [p.u.Mobile]: { start: 40, end: 40 } },
                q = (0, i.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: r } = (0, l.A)(),
                        {
                            wizard: i,
                            settings: { isMobile: p, isWindowsApplication: D, isLinuxApplication: T },
                            user: j,
                        } = (0, x.g)(),
                        { notify: I } = (0, E.l)(),
                        B = (0, v.z)(),
                        [M, w] = (0, c.d)(),
                        P = (0, m.zb)(0),
                        k = (0, n.useMemo)(
                            () => (e) => {
                                var t;
                                if (!P.onTabChange || e === P.value) return;
                                P.onTabChange(e);
                                let r = null == (t = i.genres[e]) ? void 0 : t.id;
                                (i.setFilter(r), null == M || M.scrollTo({ top: 0 }));
                            },
                            [i, P, M],
                        ),
                        q = (0, n.useMemo)(() => {
                            switch (i.selectedArtistsQuantity) {
                                case 0:
                                    return r({ id: 'wizard.button-tune' });
                                case 1:
                                    return r({ id: 'wizard.button-little-more' });
                                case 2:
                                    return r({ id: 'wizard.button-one-more' });
                                default:
                                    return r({ id: 'wizard.button-done' });
                            }
                        }, [i.selectedArtistsQuantity, r]),
                        H = (0, n.useMemo)(
                            () =>
                                (0, a.jsx)(R.wI, {
                                    className: z().tabCarousel,
                                    ...P,
                                    onTabChange: k,
                                    isShimmerVisible: i.loadingState === g.G.PENDING,
                                    shimmer: (0, a.jsx)(R.zr, { isActive: !0, className: z().tabCarousel, shimmerClassName: z().tabShimmer, count: p ? 2 : 3 }),
                                    children: i.genres.map((e, t) =>
                                        (0, a.jsx)(
                                            O.o,
                                            {
                                                className: (0, o.$)(z().filter, { [z().filter_selected]: t === P.value }),
                                                titleClassName: z().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [i.genres, P, k, i.loadingState, p],
                        ),
                        G = (0, n.useCallback)(() => {
                            i.loadArtists(60);
                        }, [i]);
                    (0, n.useEffect)(() => {
                        i.filter && G();
                    }, [i.filter, G]);
                    let W = (0, n.useCallback)(async () => {
                        (await i.loadGenres(), G());
                    }, [i, G]);
                    ((0, n.useEffect)(() => {
                        i.modal.isOpened && W();
                    }, [i, i.modal.isOpened, W]),
                        (0, n.useEffect)(() => {
                            i.loadingState === g.G.REJECT &&
                                (i.modal.close(), I((0, a.jsx)(S.h, { error: r({ id: 'error-messages.error-load-wizard' }) }), { containerId: C.u.ERROR }));
                        }, [i, i.loadGenres, i.loadingState, r, I]));
                    let K = (0, n.useMemo)(
                            () =>
                                (0, a.jsx)(f.DZ, {
                                    className: z().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, a.jsx)(s.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Y = (0, n.useCallback)(async () => {
                            (i.canFinish ? (await i.finish()) === b.F.OK && (await j.getSettings(), await (null == t ? void 0 : t())) : i.loadArtists(), i.modal.close());
                        }, [t, j, i]);
                    return (
                        (0, n.useEffect)(
                            () => (
                                null == B ||
                                    B.addShortcutsListener(A.M.MAIN, h.l.CLOSE, () => {
                                        i.modal.isOpened && Y();
                                    }),
                                () => {
                                    null == B || B.removeShortcutsListener(A.M.MAIN, h.l.CLOSE);
                                }
                            ),
                            [Y, i.modal.isOpened, B],
                        ),
                        (0, a.jsxs)(_.a, {
                            className: (0, o.$)(z().root, { [z().root_withCustomControls]: D || T }),
                            headerClassName: z().modalHeader,
                            contentClassName: z().modalContent,
                            open: i.modal.isOpened,
                            onOpenChange: i.modal.onOpenChange,
                            onClose: Y,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: r({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: p && K,
                            escapeKey: !1,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: z().wrapper,
                                    children: [
                                        !p && K,
                                        (0, a.jsx)(f.HL, {
                                            className: z().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, a.jsx)(s.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, a.jsx)(u.$, {
                                            className: z().button,
                                            size: p ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Y,
                                            disabled: !i.canFinish,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, a.jsx)(f.HL, { variant: 'div', size: 'm', weight: 'medium', children: q }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: z().mainContainer,
                                    children: [
                                        (0, a.jsx)(y.F, { className: z().carousel, carouselElement: H, scrollPadding: U }),
                                        (0, a.jsx)(N.$, {
                                            withFooter: !1,
                                            className: (0, o.$)(z().scrollContainer, z().important),
                                            itemContentCallback: (e) => {
                                                let t = i.artistsByGenre[e];
                                                if (!t) {
                                                    let e = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.artist' }) });
                                                    return (0, a.jsx)(L.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, a.jsx)(F, { artist: t }, t.id);
                                            },
                                            data: i.artistsByGenre,
                                            endReached: G,
                                            listClassName: z().content,
                                            itemClassName: z().item,
                                            pageSize: 60,
                                            handleRef: w,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
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
            r.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        90208: (e, t, r) => {
            'use strict';
            function a() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            r.d(t, { B: () => a });
        },
        91886: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => c, Gv: () => s, L5: () => d });
            var a,
                o = r(74631),
                i = {
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let a = r(810),
                            { innerWidth: o = 0, innerHeight: i = 0 } = window;
                        function n(e) {
                            let { top: t, right: r, bottom: a, left: n } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= i) || (a >= 0 && a <= i)) && ((n >= 0 && n <= o) || (r >= 0 && r <= o));
                        }
                        function l(e) {
                            var t, r;
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, a)) ? r : e.attributes[0];
                        }
                        function s(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = n),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = s),
                            (t.useIntersectionObserver = function (e, r, o) {
                                let [{ freezeOnceVisible: i, preflightCheck: d, ...c }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, o],
                                    [_, m] = (0, a.useState)({}),
                                    f = (0, a.useRef)(new Set()),
                                    p = (0, a.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : s((e) => {
                                                      let t = l(e.target);
                                                      if (t && p) {
                                                          if (f.current.has(t)) return;
                                                          (m((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              i && e.isIntersecting && (f.current.add(t), p.unobserve(e.target)));
                                                      }
                                                  }, c),
                                        [u],
                                    );
                                return (
                                    (0, a.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (d && (t = n(e.current))) {
                                                            let t = l(e.current);
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
                        e.exports = a || (a = r.t(o, 2));
                    },
                },
                n = {},
                l = (function e(t) {
                    var r = n[t];
                    if (void 0 !== r) return r.exports;
                    var a = (n[t] = { exports: {} });
                    return (i[t](a, a.exports, e), a.exports);
                })(597);
            l.__esModule;
            var s = l.createIntersectionObserver;
            l.defaultOptions;
            var d = l.getElementNameByDataAttribute;
            l.isInViewportNow;
            var c = l.useIntersectionObserver;
        },
        92057: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => l, r: () => s });
            var a = r(18760),
                o = r(28410),
                i = r(48552);
            let n = o.gK.model('CustomPlayerThumbItem', { id: o.gK.enumeration(Object.values(a.T)), name: o.gK.string, thumb: i.K }),
                l = {
                    [a.T.DUCK]: () =>
                        r
                            .e(8962)
                            .then(r.t.bind(r, 68962, 17))
                            .then((e) => e.default),
                    [a.T.CAR]: () =>
                        r
                            .e(8765)
                            .then(r.t.bind(r, 68765, 17))
                            .then((e) => e.default),
                },
                s = (e) =>
                    new Map([
                        [a.T.DUCK, n.create({ id: a.T.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: a.T.DUCK, width: 50, height: 50 } })],
                        [a.T.CAR, n.create({ id: a.T.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: a.T.CAR, width: 143, height: 38 } })],
                    ]);
        },
        93989: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => i, j: () => n });
            var a = r(74631),
                o = r(36432);
            let i = (0, a.createContext)(null),
                n = () => {
                    let e = (0, a.useContext)(i);
                    if (!e) throw new o.t('Desktop outage cannot be null, please add a context provider', { code: 'E_CONTEXT_DESKTOP_OUTAGE_NULL' });
                    return e;
                };
        },
        95029: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => a });
            var a = (function (e) {
                return ((e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e);
            })({});
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
            r.d(t, { j: () => i });
            var a = r(36484),
                o = r(62562);
            function i() {
                return (0, o.N)().get(a.y$);
            }
        },
        97522: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => m });
            var a = r(25839),
                o = r(74631),
                i = r(58038),
                n = r.n(i),
                l = r(71035),
                s = r(9079),
                d = r(64261),
                c = r(25895);
            let u = (e) => {
                    let [t, r] = (0, o.useState)(!1),
                        i = (0, l.c)(() => {
                            r(!0);
                        });
                    return (0, a.jsx)(n(), { prefetch: t, ...e, onMouseEnter: i });
                },
                _ = (e) => {
                    let { forwardedRef: t, href: r, component: i, ...l } = e,
                        { isPrefetchDisabled: _, isPrefetchOnHover: m } = (0, o.useContext)(d.j),
                        { href: f, target: p, rel: C } = (0, c.u)(null != r ? r : ''),
                        E = (0, o.isValidElement)(i)
                            ? i
                            : (function (e, t, r) {
                                  return e ? (t ? (0, a.jsx)(n(), { prefetch: !1 }) : r ? (0, a.jsx)(u, { href: e }) : (0, a.jsx)(n(), {})) : (0, a.jsx)('a', {});
                              })(r, _, m);
                    return (0, a.jsx)(s.N, { ref: t, component: E, href: r ? f : void 0, target: p, rel: C, ...l });
                },
                m = (0, o.forwardRef)((e, t) => (0, a.jsx)(_, { ...e, forwardedRef: t }));
        },
        97904: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => a });
            let a = (0, r(74631).createContext)({ skeleton: void 0 });
        },
        97952: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => i });
            var a = r(74631),
                o = r(82064);
            function i() {
                return (0, a.useContext)(o.r);
            }
        },
        98920: (e) => {
            e.exports = {
                root: 'EqualizerSlider_root__oyr_3',
                container: 'EqualizerSlider_container__J9Te7',
                slider: 'EqualizerSlider_slider__YC0_X',
                important: 'EqualizerSlider_important____ilL',
                serif: 'EqualizerSlider_serif__CJgYC',
                label: 'EqualizerSlider_label__4wtBj',
                label_disabled: 'EqualizerSlider_label_disabled___26v5',
            };
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => y });
            var a = r(25839),
                o = r(82298),
                i = r(88204),
                n = r(39004),
                l = r(93588),
                s = r(43354),
                d = (function (e) {
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
            let c = (e, t, r) => {
                    switch (e) {
                        case d.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case d.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case d.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case d.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case d.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case d.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case d.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: r, tld: a, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: d.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(d.YANDEX, a, r) },
                        yandexProjects: { id: d.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(d.YANDEX_PROJECTS, a, r) },
                    };
                };
            var _ = r(10959),
                m = r(89514);
            let f = (e) => e(new Date(), (0, m.m)());
            var p = r(96433),
                C = r(27954),
                E = r(400),
                h = r.n(E),
                A = r(61493),
                v = r(4254),
                x = r(97522);
            let b = (e) => {
                    let { className: t, data: r } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, o.$)(h().copyrights, t),
                        'data-test-id': A.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: h().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, a.jsx)(x.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, o.$)(h().copyrightLink, h().yandexMusicLink),
                                        'data-test-id': A.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(x.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: h().copyrightLink,
                                'data-test-id': A.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                g = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, a.jsxs)('div', {
                        className: h().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: h().list,
                                'data-test-id': A.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: o } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: h().item,
                                            children: (0, a.jsx)(x.N, { target: '_blank', href: o, className: h().link, 'data-test-id': A.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: h().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': A.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: r } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, o.$)(h().root, h().important, t),
                        'data-test-id': A.S7.FOOTER,
                        children: [(0, a.jsx)(g, { links: r.links, disclaimer: r.disclaimer }), (0, a.jsx)(b, { data: r.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, C.g)(),
                    { formatDate: o, formatMessage: i } = (0, n.A)(),
                    { language: l } = (0, p.h)(),
                    s = u({ formatMessage: i, language: l, tld: r.tld, year: f(o) });
                return (0, a.jsx)(b, { className: t, data: s });
            });
            let y = (0, i.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: i, location: m, user: E } = (0, C.g)(),
                    { formatDate: A, formatMessage: v } = (0, n.A)(),
                    { isEnabled: x } = null != (t = (0, s.P)()) ? t : {},
                    { language: b } = (0, p.h)(),
                    g = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: a, language: o, tld: i, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: a, language: o, userRegion: i } = e,
                                    n = { id: d.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(d.COPYRIGHT_HOLDER, a, o) },
                                    l = { id: d.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(d.PRIVACY_POLICY, a, o) },
                                    s = { id: d.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(d.AGREEMENT, a, o) },
                                    u = { id: d.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(d.RECOMMENDATION_RULES, a, o) },
                                    _ = { id: d.HELP, title: t({ id: 'footer.links-help' }), url: c(d.HELP, a, o) },
                                    m = [n, s, u];
                                return (r && 'ru' === i && m.push(l), m.push(_), m);
                            })({ formatMessage: r, isWebApplication: a, language: o, tld: i, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: r, language: o, tld: i, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: l.$3,
                        tld: m.tld,
                        language: b,
                        userRegion: E.account.data.userSessionRegionIso,
                        year: f(A),
                    });
                return (0, a.jsx)(S, { className: (0, o.$)({ [h().root_withOffsetForDeeplink]: x }, r), data: g });
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
                5918, 3349, 9045, 8803, 6295, 3112, 8451, 1583, 9122, 9863, 6706, 4771, 1311, 5201, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1817, 3257, 5960, 2038, 4163,
                3246, 7848, 3482, 2247, 8836, 4434, 4932, 5622, 2750, 4475, 5056, 7358,
            ],
            () => e((e.s = 36413)),
        ),
            (_N_E = e.O()));
    },
]);
