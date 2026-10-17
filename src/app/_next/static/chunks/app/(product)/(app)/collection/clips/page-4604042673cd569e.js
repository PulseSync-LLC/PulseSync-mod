(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9923],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
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
        3392: (e, t, r) => {
            'use strict';
            r.d(t, { ZI: () => _, m_: () => u });
            var i,
                o = r(33049),
                l = r(95759),
                n = r(74631),
                s = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => o }));
                        let o = i;
                    },
                    4295: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    853: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0));
                        let i = r(4377),
                            o = r(810),
                            l = r(1964),
                            n = r(2660),
                            s = r(3343),
                            a = r(1229);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: r, children: c, referenceRef: d, ...u } = e,
                                [_, p] = Array.isArray(c) ? c : [c],
                                m = (0, a.useTooltip)(u),
                                f = (0, o.useId)(),
                                v = (0, o.useId)(),
                                x = (0, o.useId)(),
                                h = (0, l.useMergeRefs)([m.refs.setReference, d]);
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, o.cloneElement)(_, {
                                        ref: h,
                                        ...(t ? { 'aria-describedby': f } : {}),
                                        ...m.getReferenceProps(),
                                        ...(0, n.getDataAttrFromProps)(u),
                                        key: v,
                                    }),
                                    m.context.open
                                        ? (0, o.cloneElement)(null != p ? p : (0, i.jsx)(s.TooltipContent, {}), {
                                              ref: m.refs.setFloating,
                                              style: { ...m.floatingStyles, visibility: m.referenceHidden ? 'hidden' : 'visible' },
                                              text: r,
                                              arrow: m.arrow,
                                              ...(t ? { id: f } : {}),
                                              ...m.getFloatingProps(),
                                              key: x,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3343: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0));
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            s = r(1964),
                            a = r(3412),
                            c = i(r(4295));
                        ((t.TooltipContentComponent = (e) => {
                            let { className: t, children: r, arrow: i, rootNode: d, forwardRef: u, text: _, ...p } = e;
                            return (0, o.jsx)(s.FloatingPortal, {
                                root: d,
                                children: (0, o.jsxs)('div', {
                                    className: (0, l.clsx)(c.default.root, t),
                                    ref: u,
                                    ...p,
                                    children: [
                                        (0, n.isValidElement)(i) && i,
                                        (0, o.jsx)(a.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: c.default.text,
                                            children: null != r ? r : _,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, n.forwardRef)((e, r) => (0, o.jsx)(t.TooltipContentComponent, { forwardRef: r, ...e }))));
                    },
                    1229: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0));
                        let i = r(4377),
                            o = r(810),
                            l = r(1964),
                            n = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: r = 'top',
                                    open: s,
                                    onOpenChange: a,
                                    isHoverEnabled: c = !0,
                                    isFocusEnabled: d = !0,
                                    offsetOptions: u,
                                    flipOptions: _ = {},
                                    shiftOptions: p = {},
                                    hoverSettings: m = n,
                                    enabled: f = !0,
                                    arrowProps: v,
                                } = e,
                                [x, h] = (0, o.useState)(t),
                                C = (0, o.useRef)(null),
                                g = null != s ? s : x,
                                y = null != a ? a : h,
                                b = (0, l.useFloating)({
                                    placement: r,
                                    open: g,
                                    onOpenChange: y,
                                    whileElementsMounted: l.autoUpdate,
                                    middleware: [
                                        (0, l.offset)(u),
                                        (0, l.flip)({ crossAxis: r.includes('-'), ..._ }),
                                        (0, l.shift)(p),
                                        (0, l.arrow)({ element: C }),
                                        (0, l.hide)(),
                                    ],
                                }),
                                S = b.context,
                                E = (0, l.useHover)(S, { move: !1, enabled: c && f, ...m }),
                                A = (0, l.useFocus)(S, { enabled: d && f }),
                                I = (0, l.useDismiss)(S),
                                T = (0, l.useRole)(S, { role: 'tooltip' }),
                                O = (0, l.useInteractions)([E, A, I, T]),
                                j = (0, o.useMemo)(() => {
                                    if (v) return (0, i.jsx)(l.FloatingArrow, { ref: C, context: b.context, ...v });
                                }, [v, b.context]);
                            return (0, o.useMemo)(() => {
                                var e;
                                return { open: g, setOpen: y, arrow: j, referenceHidden: null == (e = b.middlewareData.hide) ? void 0 : e.referenceHidden, ...O, ...b };
                            }, [g, y, j, O, b]);
                        };
                    },
                    3412: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            s = r(5987),
                            a = i(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: n = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, l.clsx)(a.default.root, a.default['root_'.concat(i, '_').concat(n)], a.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, n.forwardRef)((e, r) => (0, o.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            s = i(r(61));
                        function a(e) {
                            let { forwardRef: t, style: r, className: i, children: n, variant: a, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof n ? n : void 0;
                            return (0, o.jsx)(a, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, l.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: c && c > 0, [s.default.root_clamp_oneline]: c && 1 === c, [s.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: n,
                            });
                        }
                        ((t.TypographyComponent = a), (t.Typography = (0, n.forwardRef)((e, t) => (0, o.jsx)(a, { forwardRef: t, ...e }))));
                    },
                    1964: (e) => {
                        e.exports = o;
                    },
                    2660: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(n, 2));
                    },
                },
                a = {};
            function c(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, c), r.exports);
            }
            ((c.d = (e, t) => {
                for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (c.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var d = {};
            (() => {
                (Object.defineProperty(d, 'X$', { value: !0 }), (d._v = d.u = void 0));
                var e = c(853);
                Object.defineProperty(d, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = c(3343);
                Object.defineProperty(d, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var u = d.u,
                _ = d._v;
            d.X$;
        },
        3669: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => h });
            var i = r(74631),
                o = r(67379),
                l = r(20934),
                n = r(59450),
                s = r(49656),
                a = r(84e3),
                c = r(58069),
                d = r(20258),
                u = r(26742),
                _ = r(25195),
                p = r(37314),
                m = r(25488),
                f = r(97952),
                v = r(10764),
                x = r(72594);
            let h = () => {
                let e = (0, a.U)(),
                    t = (0, n.st)(),
                    { hash: r } = (0, n.gf)(),
                    { pageId: h, displayReasonId: C } = (0, f.$)(),
                    { tabId: g, tabPos: y, isTabSelectedByDefault: b } = (0, x.R)(),
                    { offsetBlockPosY: S } = (0, _.u)(),
                    { blockType: E, blockId: A, blockPosX: I, blockPosY: T, mainObjectId: O, mainObjectType: j, displayReasonId: R } = (0, u.N)(),
                    { filterKey: P, filterValue: N, filterPos: L } = (0, p.G)(),
                    { objectType: k, objectsCount: w, objectId: M, objectPosX: D, objectPosY: U } = (0, m.J)(),
                    { skeleton: H } = (0, v.b)(),
                    W = null != R ? R : C,
                    B = (0, s.L)(() => (void 0 !== S && void 0 !== T ? S + T : T));
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!t || !h || !d.xK.includes(h) || !d.fD.includes(h)) return;
                        let s = c.F[h];
                        if (!s) return;
                        let a = {
                            hash: r,
                            pageId: s,
                            entityType: E,
                            entityId: A,
                            entityPosX: I,
                            entityPosY: B,
                            objectsCount: w,
                            viewUuid: n,
                            objectType: k,
                            objectId: M,
                            objectPosX: D,
                            objectPosY: U,
                        };
                        (void 0 !== P && ((a.filterKey = P), (a.filterValue = N), (a.filterPos = L)),
                            d.qG.includes(h) && ((a.tabId = g), (a.tabPos = y), (a.isTabSelectedByDefault = b)),
                            H && (a.skeletonId = H),
                            'string' == typeof O && 'string' == typeof j && ((a.mainObjectType = j), (a.mainObjectId = O)),
                            W && (a.displayReasonId = W));
                        let u = (0, o.F)({ params: a, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, l.Pf)(t.evgenInstance, u) : (0, l.nv)(t.evgenInstance, u));
                    },
                    [t, W, A, I, B, E, P, L, N, r, b, e, O, j, M, D, U, k, w, h, H, g, y],
                );
            };
        },
        6969: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => i });
            var i = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        7341: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => m });
            var i = r(25839),
                o = r(82298),
                l = r(88204),
                n = r(74631),
                s = r(89288),
                a = r(18412),
                c = r(80986),
                d = r(54199),
                u = r.n(d),
                _ = r(7429);
            let p = (0, l.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: r,
                            carouselItemClassName: l,
                            forwardRef: d,
                            isShimmerVisible: p,
                            isShimmerActive: m,
                            title: f,
                            description: v,
                            containerClassName: x,
                            headerClassName: h,
                            viewAllActionLink: C,
                            artistIdWithoutLink: g,
                            withVideo: y = !0,
                            clips: b,
                            headingVariant: S,
                            className: E,
                            shouldOpenModalOnCardClick: A = !0,
                            itemCounter: I,
                            ...T
                        } = e,
                        O = (0, n.useId)(),
                        j = (0, n.useRef)(null);
                    return (0, i.jsxs)('section', {
                        className: (0, o.$)(u().root, E),
                        ref: d,
                        ...(0, s.OZ)(T),
                        children: [
                            (0, i.jsx)(a.T, {
                                className: h,
                                labeledForId: O,
                                title: f,
                                description: v,
                                viewAllActionLink: C,
                                controls: (0, i.jsx)(c.X, { className: u().controls, carouselRef: j }),
                                headingVariant: S,
                                withDescription: !!v,
                            }),
                            (0, i.jsx)(_.t, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: r,
                                carouselItemClassName: l,
                                isShimmerVisible: p,
                                isShimmerActive: m,
                                containerClassName: x,
                                artistIdWithoutLink: g,
                                withVideo: y,
                                clips: b,
                                shouldOpenModalOnCardClick: A,
                                itemCounter: I,
                                ref: j,
                                'aria-labelledby': O,
                            }),
                        ],
                    });
                }),
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        7429: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => v });
            var i = r(25839),
                o = r(82298),
                l = r(88204),
                n = r(74631),
                s = r(59342),
                a = r(44031),
                c = r(5365),
                d = r(95314),
                u = r(15049),
                _ = r(56859),
                p = r(7987),
                m = r.n(p);
            let f = (0, l.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: r,
                            clipCardArtistLinkClassName: l,
                            carouselItemClassName: p,
                            isShimmerVisible: f,
                            isShimmerActive: v,
                            containerClassName: x,
                            artistIdWithoutLink: h,
                            withVideo: C = !0,
                            clips: g,
                            shouldOpenModalOnCardClick: y = !0,
                            itemCounter: b,
                        } = e,
                        S = (0, n.useId)(),
                        E = (0, n.useRef)(String((0, s.A)())),
                        A = (0, n.useMemo)(() => {
                            if (f) return Array.from({ length: 5 }, (e, t) => (0, i.jsx)(_.k, { isActive: v }, t));
                            return null == g
                                ? void 0
                                : g.map((e, t) =>
                                      (0, i.jsx)(
                                          d.B,
                                          {
                                              objectType: a.DomainObjectType.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == g ? void 0 : g.length,
                                              objectId: String(e.clipId),
                                              children: (0, i.jsx)(u.F, {
                                                  titleClassName: r,
                                                  artistLinkClassName: l,
                                                  clip: e,
                                                  withVideo: C,
                                                  artistIdWithoutLink: h,
                                                  viewUuid: E.current,
                                                  shouldOpenModalOnCardClick: y,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [r, l, f, v, h, C, g, y]);
                    return (0, i.jsx)(c.F, {
                        className: (0, o.$)(m().itemCounter, { [m()['itemCounter_'.concat(b)]]: b }, x),
                        ref: t,
                        itemClassName: (0, o.$)(m().item, m().important, p),
                        'aria-labelledby': S,
                        children: A,
                    });
                }),
                v = (0, n.forwardRef)((e, t) => (0, i.jsx)(f, { forwardRef: t, ...e }));
        },
        7987: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        9079: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => c });
            var i,
                o = r(74631),
                l = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => o }));
                        let o = i;
                    },
                    7354: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3616: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let o = r(4377),
                            l = r(810),
                            n = r(5881),
                            s = i(r(7354)),
                            a = (e) => {
                                let {
                                        component: t = (0, o.jsx)('a', {}),
                                        block: r,
                                        target: i,
                                        rel: a,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: _,
                                        icon: p,
                                        className: m,
                                        children: f,
                                        textClassName: v = '',
                                        containerClassName: x,
                                        ...h
                                    } = e,
                                    C = (0, l.useId)(),
                                    g = !l.Children.count(f),
                                    y = 'left' === u,
                                    b = null;
                                if (void 0 !== p) {
                                    var S;
                                    b = (0, l.cloneElement)(p, {
                                        className: (0, n.clsx)(
                                            s.default.icon,
                                            { [s.default['icon_position_'.concat(u)]]: !g && u },
                                            null == (S = p.props) ? void 0 : S.className,
                                        ),
                                        key: C,
                                    });
                                }
                                let E = (0, l.useMemo)(
                                    () =>
                                        p
                                            ? (0, o.jsxs)('div', {
                                                  className: (0, n.clsx)(s.default.iconContainer, x),
                                                  children: [y && b, !g && (0, o.jsx)('span', { className: v, children: f }), !y && b],
                                              })
                                            : f,
                                    [f, x, p, y, g, b, v],
                                );
                                return (0, l.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: i,
                                        rel: '_blank' === i && void 0 === a ? 'noopener noreferrer' : a,
                                        href: c,
                                        className: (0, n.clsx)(s.default.root, { [s.default.block]: r, [s.default.flexIcon]: p && _, [s.default.iconOnly]: p && g }, m),
                                        ...h,
                                        ...t.props,
                                    },
                                    E,
                                );
                            };
                        t.Link = (0, l.forwardRef)((e, t) => (0, o.jsx)(a, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (l[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'X', { value: !0 }), (a.r = void 0));
                var e = s(3616);
                Object.defineProperty(a, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = a.r;
            a.X;
        },
        9511: (e) => {
            e.exports = {
                root: 'CollectionClipsPageClipsWillLike_root__uS0_8',
                carouselItem: 'CollectionClipsPageClipsWillLike_carouselItem__0C0_W',
                important: 'CollectionClipsPageClipsWillLike_important__U_2ET',
                carouselBlockHeader: 'CollectionClipsPageClipsWillLike_carouselBlockHeader__wDnJp',
                carouselBlock: 'CollectionClipsPageClipsWillLike_carouselBlock__La_8Q',
            };
        },
        10322: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(25839),
                o = r(74631),
                l = r(82064);
            let n = (e) => {
                let { pageId: t, pageEntityId: r, displayReasonId: n, pageStyle: s, pagePlacement: a, children: c } = e,
                    d = (0, o.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: n, pageStyle: s, pagePlacement: a }), [t, r, n, s, a]);
                return (0, i.jsx)(l.r.Provider, { value: d, children: c });
            };
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => o });
            var i = r(44806);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: o, userRegion: l } = e;
                return 'ru' === l && t(i.z.WebNextFooterDisclaimer, 'on') ? r() : o();
            };
        },
        12929: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => i, n: () => o });
            var i = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                o = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        13232: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        13729: (e, t, r) => {
            (Promise.resolve().then(r.bind(r, 30871)), Promise.resolve().then(r.bind(r, 38449)));
        },
        15049: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => U });
            var i = r(25839),
                o = r(82298),
                l = r(10508),
                n = r(88204),
                s = r(74631),
                a = r(39004),
                c = r(89288),
                d = r(61493),
                u = r(22939),
                _ = r(71035),
                p = r(51246),
                m = r(23818),
                f = r(86869),
                v = r(4254),
                x = r(56348),
                h = r(65189),
                C = r(63905),
                g = r(28003),
                y = r(67560),
                b = r(40110),
                S = r(20258),
                E = r(52512),
                A = r(30290),
                I = r(91907),
                T = r(68215),
                O = r(18639),
                j = r(77179),
                R = r(50209),
                P = r(27954),
                N = r(32652),
                L = r(97522),
                k = r(49438),
                w = r(87605),
                M = r(68891),
                D = r.n(M);
            let U = (0, n.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: n,
                        clip: M,
                        withVideo: U = !0,
                        artistIdWithoutLink: H,
                        viewUuid: W,
                        shouldOpenModalOnCardClick: B = !0,
                    } = e,
                    { fullscreenVideoPlayer: Y } = (0, P.g)(),
                    { formatMessage: F } = (0, a.A)(),
                    z = (0, y.C)(),
                    { from: V } = (0, A.f)({ pageId: S._Q.VIDEO_PLAYER, contextId: Y.state.contextId, contextType: u.K.Various, blockId: b.U.CLIPS }),
                    K = (0, T.P)(null != (t = M.duration) ? t : 0),
                    X = (0, C.M)(W),
                    Z = (0, h._)(W),
                    { ref: G, intersectionPropertyId: J } = (0, E.n)({ callback: X }),
                    Q = (0, s.useRef)(null),
                    $ = U && M.previewUrl,
                    q = (0, _.c)(() => {
                        Q.current && ((Q.current.currentTime = 0), Q.current.play());
                    }),
                    ee = (0, s.useMemo)(() => (0, l.A)(q, 500), [q]),
                    et = (0, _.c)(() => {
                        var e;
                        null == (e = Q.current) || e.pause();
                    }),
                    er = (0, s.useMemo)(() => Y.ids.indexOf(M.clipId), [Y, M.clipId]),
                    { isPlaying: ei, togglePlay: eo } = (0, R.D)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: O.H.VARIOUS_CLIP_CONTEXT }, from: V },
                            queueParams: { index: er },
                            entitiesData: Y.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(M.clipId),
                        sonataState: Y.state,
                        playbackId: j.V.CLIP,
                    }),
                    el = B ? M.url : (0, g.J)(Y.ids, er),
                    en = (0, _.c)(() => {
                        B ? (z([M.clipId]), Z()) : ei || eo();
                    }),
                    es = (0, w.X)({ clip: M, callback: en }),
                    ea = F({ id: 'entity-names.clip-name' }, { clipName: M.title }),
                    ec = (0, s.useMemo)(
                        () =>
                            M.isAvailable
                                ? (0, i.jsxs)(f.t, {
                                      radius: 'm',
                                      className: (0, o.$)(D().view, D().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: es,
                                      children: [
                                          $ &&
                                              (0, i.jsx)('video', {
                                                  className: D().media,
                                                  ref: Q,
                                                  poster: M.thumbnail && (0, c.oZ)(M.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: M.previewUrl, type: 'video/mp4' }),
                                              }),
                                          M.thumbnail &&
                                              (0, i.jsx)(m._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: M.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.oZ,
                                              }),
                                          void 0 !== M.duration &&
                                              (0, i.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': K,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, I.E)(M.duration, M.duration) }),
                                              }),
                                          (0, i.jsx)(k.D, { variant: 'filled', className: D().playButton, onClick: es, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(f.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, i.jsx)(m.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [K, M.isAvailable, M.thumbnail, M.previewUrl, M.duration, ee, et, es, $],
                    ),
                    ed = (0, s.useMemo)(
                        () =>
                            M.hasArtists
                                ? (0, i.jsx)(
                                      x.i,
                                      { linkClassName: (0, o.$)(D().artistLink, n), artists: M.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: H },
                                      M.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [H, M, n],
                    );
                return (0, i.jsx)(p.MN, {
                    ref: G,
                    className: D().root,
                    explicitMarkComponent:
                        M.explicitDisclaimer &&
                        (0, i.jsx)(N.N, { getDescriptionTexts: M.getDescriptionTexts, variant: M.explicitDisclaimer, size: 'xxs' }, M.getKey('ExplicitMarkIcon')),
                    'aria-label': ea,
                    srTitle: (0, i.jsx)(L.N, { className: D().srTitleLink, href: el, onClick: es, children: ea }),
                    title: (0, i.jsxs)(
                        v.HL,
                        {
                            className: (0, o.$)(D().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(L.N, {
                                    className: D().titleLink,
                                    href: el,
                                    tabIndex: -1,
                                    'aria-label': ea,
                                    onClick: es,
                                    'data-test-id': d.Kq.clip.CLIP_META_TITLE,
                                    children: M.title,
                                }),
                                M.version && (0, i.jsx)(v.HL, { className: D().version, variant: 'span', children: ' '.concat(M.version) }),
                            ],
                        },
                        M.getKey('Title'),
                    ),
                    'data-intersection-property-id': J,
                    view: ec,
                    description: ed,
                    'data-test-id': d.Kq.clip.CLIP_CARD,
                });
            });
        },
        16978: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => p });
            var i = r(25839),
                o = r(84059),
                l = r(8487),
                n = r(61493),
                s = r(71035),
                a = r(4071),
                c = r(4254),
                d = r(57024),
                u = r(36484),
                _ = r(62562);
            let p = (e) => {
                let { size: t = 'm', variant: r = 'default', color: p = 'primary', withRipple: m = !0, buttonText: f, isBlock: v, key: x, className: h } = e,
                    C = (0, o.useRouter)(),
                    g = (0, _.N)().get(u.QG),
                    y = (0, s.c)(() => {
                        g.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), C.push(g.authorizationUrl));
                    });
                return (0, i.jsx)(
                    a.$,
                    {
                        onClick: y,
                        className: h,
                        isBlock: v,
                        color: p,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: f || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        18483: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => o });
            var i = r(27954);
            let o = () => {
                let {
                    settings: { isMobile: e },
                } = (0, i.g)();
                return !e;
            };
        },
        18639: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
        19410: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var i = r(25839);
            r(93588);
            var o = r(400),
                l = r.n(o);
            let n = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: l().empty });
            };
        },
        27990: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        28003: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            var i = r(53712),
                o = r(6969),
                l = r(25895);
            let n = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: r } = (0, l.u)(i.Z.video.href, { query: { [o.K.IDS]: e.join(','), [o.K.ACTIVE_INDEX]: String(t) } });
                return r;
            };
        },
        30437: (e) => {
            e.exports = {
                root: 'CollectionClipsPageClips_root__uB8s_',
                virtualScroll: 'CollectionClipsPageClips_virtualScroll__o3uWm',
                virtualItem: 'CollectionClipsPageClips_virtualItem__UDzx8',
                virtualItemRow: 'CollectionClipsPageClips_virtualItemRow__RPIOY',
                virtualItemRow_withTopBorder: 'CollectionClipsPageClips_virtualItemRow_withTopBorder__Q6k2l',
                virtualItemRow_withBottomBorder: 'CollectionClipsPageClips_virtualItemRow_withBottomBorder__D5Dep',
                clipsWillLike: 'CollectionClipsPageClips_clipsWillLike__IhK8Q',
            };
        },
        30716: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => l });
            var i = r(84059),
                o = r(74631);
            r(93588);
            let l = (e) => {
                let t = (0, i.usePathname)(),
                    [r, l] = (0, o.useState)(!1);
                ((0, o.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, o.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), l(!0));
                    }, [e, r, t]));
            };
        },
        30871: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => f });
            var i = r(25839),
                o = r(88204),
                l = r(84059),
                n = r(82298),
                s = r(8487),
                a = r(4254),
                c = r(16978),
                d = r(148),
                u = r.n(d);
            let _ = (0, o.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(a.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(a.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = r(53712),
                m = r(27954);
            let f = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: o } = (0, m.g)();
                return o.isAuthorized ? t : (r && (0, l.redirect)(p.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        32652: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => f });
            var i = r(25839),
                o = r(82298),
                l = r(88204),
                n = r(74631),
                s = r(39004),
                a = r(61493),
                c = r(66738),
                d = r(74245),
                u = r(27954),
                _ = r(60924),
                p = r(92870),
                m = r.n(p);
            let f = (0, l.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: l, containerClassName: p, variant: f, iconVariant: iconOverride, size: v = 'xxxs', ...x } = e,
                    { formatMessage: h } = (0, s.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, u.g)(),
                    [g, y] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    r && r().then(y);
                }, [r, l]);
                let {
                    iconVariant: b,
                    descriptionText: S,
                    isTooltipEnabled: E,
                    ariaLabel: A,
                } = ((e, t) => {
                    let { variant: r, descriptionTexts: i, isMobile: o } = e,
                        l = (null == i ? void 0 : i.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case d.JU.E:
                                    return 'explicit';
                                case d.JU.AGE_12:
                                case d.JU.AGE_16:
                                case d.JU.AGE_18:
                                    return 'adult';
                                case d.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(r),
                        descriptionText: l,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !o,
                        ariaLabel: l.length > 0 ? l : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: f, descriptionTexts: g, isMobile: C }, h);
                return (0, i.jsx)(_.k, {
                    description: S,
                    placement: 'bottom-start',
                    enabled: E,
                    children: (0, i.jsx)('span', {
                        className: p,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        f === d.JU.SUBSTITUTED ? (0, i.jsxs)('svg', {
                            className: (0, o.$)(m().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': A,
                            style: { width: 'var(--ym-icon-size-'.concat(v, ')'), height: 'var(--ym-icon-size-'.concat(v, ')') },
                            ...x,
                            'data-test-id': a.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, i.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, i.jsx)(c.I, {
                            className: (0, o.$)(m().explicitMark, t),
                            'aria-label': A,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : b,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? v : v,
                            style: iconOverride ? { width: `var(--ym-icon-size-${v})`, height: `var(--ym-icon-size-${v})` } : undefined,
                            ...x,
                            'data-test-id': a.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        32953: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (0, r(74631).createContext)(null);
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        38449: (e, t, r) => {
            'use strict';
            r.d(t, { CollectionClipsPage: () => J });
            var i = r(25839),
                o = r(88204),
                l = r(84059),
                n = r(74631),
                s = r(39004),
                a = r(8487),
                c = r(61493),
                d = r(99430),
                u = r(4254),
                _ = r(64715),
                p = r(1407),
                m = r(18483),
                f = r(20258),
                v = r(95858),
                x = r(10322),
                h = r(21784),
                C = r(89192),
                g = r(30716),
                y = r(53712),
                b = r(27954),
                S = r(99401),
                E = r(26076),
                A = r(10603),
                I = r(51168),
                T = r.n(I),
                O = r(82298),
                j = r(28631),
                R = r(71035),
                P = r(68934),
                N = r(15049),
                L = r(56859),
                k = r(52312);
            let w = () => (window.innerWidth > 1920 ? 4 : window.innerWidth > 1200 ? 3 : 2);
            var M = r(7341),
                D = r(42853),
                U = r(57138),
                H = r(9511),
                W = r.n(H);
            let B = (0, o.PA)((e) => {
                var t;
                let { className: r } = e,
                    { formatMessage: o } = (0, s.A)(),
                    { clipsWillLike: l } = (0, b.g)().collection.clips;
                return (
                    l.isNeededToLoad && (0, n.use)(l.getData()),
                    (0, i.jsx)(U.F, {
                        blockId: D.h.CLIPS_CAROUSEL,
                        blockType: D.h.CLIPS_CAROUSEL,
                        blockPosX: 1,
                        blockPosY: 7,
                        objectsCount: null == (t = l.clips) ? void 0 : t.length,
                        children: (0, i.jsx)(M.K, {
                            className: (0, O.$)(W().root, r),
                            containerClassName: W().carouselBlock,
                            carouselItemClassName: (0, O.$)(W().carouselItem, W().important),
                            headerClassName: (0, O.$)(W().carouselBlockHeader, W().carouselBlock),
                            isShimmerVisible: l.isLoading,
                            isShimmerActive: !0,
                            title: o({ id: 'entity-names.clips-will-like' }),
                            clips: l.clips || [],
                            headingVariant: 'h2',
                            'data-test-id': c.Kq.clip.CLIPS_CAROUSEL,
                        }),
                    })
                );
            });
            var Y = r(66738),
                F = r(46721),
                z = r.n(F);
            let V = (0, o.PA)(() => {
                let {
                        collection: {
                            clips: { clipsWillLike: e },
                        },
                    } = (0, b.g)(),
                    t = !e.isEmpty && !e.isRejected;
                return (0, i.jsxs)('div', {
                    className: z().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: z().content,
                            children: [
                                (0, i.jsx)(Y.I, { className: z().icon, size: 'xl', variant: 'clip' }),
                                (0, i.jsx)(u.DZ, {
                                    className: z().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': c.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE,
                                    children: (0, i.jsx)(a.A, { id: 'error-messages.empty-collection-clips-title' }),
                                }),
                                (0, i.jsx)(u.HL, {
                                    className: z().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    'data-test-id': c.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                                    children: (0, i.jsx)(a.A, { id: 'error-messages.empty-collection-clips-text' }),
                                }),
                            ],
                        }),
                        t && (0, i.jsx)(B, {}),
                    ],
                });
            });
            var K = r(30437),
                X = r.n(K);
            let Z = (0, o.PA)((e) => {
                    let { virtualItem: t, resizeObserver: r, columns: o } = e,
                        [l, a] = (0, P.d)(),
                        { formatMessage: c } = (0, s.A)(),
                        {
                            collection: { clips: d },
                        } = (0, b.g)();
                    (0, n.useEffect)(
                        () => (
                            l && r && r.observe(l),
                            () => {
                                l && r && r.unobserve(l);
                            }
                        ),
                        [l, r],
                    );
                    let u = d.items.slice(t.index * o, t.index * o + o),
                        _ = d.pager && d.pager.total <= o ? 0 : 1,
                        p = !d.clipsWillLike.isEmpty && !d.clipsWillLike.isRejected;
                    return (0, i.jsxs)(
                        'div',
                        {
                            ref: a,
                            'data-index': t.index,
                            className: X().virtualItem,
                            style: { transform: 'translateY('.concat(t.start, 'px)') },
                            children: [
                                (0, i.jsx)('div', {
                                    style: { gridTemplateColumns: 'repeat('.concat(o, ', minmax(0, 1fr))') },
                                    className: (0, O.$)(X().virtualItemRow, {
                                        [X().virtualItemRow_withTopBorder]: t.index === _ + 1 && p,
                                        [X().virtualItemRow_withBottomBorder]: t.index === _ && p,
                                    }),
                                    children:
                                        null == u
                                            ? void 0
                                            : u.map((e, t) => {
                                                  if (!e) {
                                                      let e = c({ id: 'loading-messages.entity-is-loading' }, { entityName: c({ id: 'entity-names.clip' }) });
                                                      return (0, i.jsx)(L.k, { 'aria-label': e }, t);
                                                  }
                                                  return (0, i.jsx)(N.F, { clip: e }, e.clipId);
                                              }),
                                }),
                                t.index === _ && p && (0, i.jsx)(B, { className: X().clipsWillLike }),
                            ],
                        },
                        t.key,
                    );
                }),
                G = (0, o.PA)((e) => {
                    var t;
                    let { contentScrollRef: r } = e,
                        {
                            collection: { clips: o },
                            user: l,
                        } = (0, b.g)(),
                        [s, a] = (0, n.useState)(w),
                        [d, u] = (0, P.d)(),
                        p = o.pager && o.pager.total <= s ? 0 : 1,
                        { virtualizer: m, resizeObserver: f } = (0, k.r)({
                            gap: 24,
                            count: o.pager ? Math.ceil((null == (t = o.pager) ? void 0 : t.total) / s) : 5,
                            getEstimateSize: (e) => (e === p ? 800 : 400),
                            containerRef: d,
                        }),
                        v = (0, R.c)((e) => {
                            l.account.data.uid && o.getData({ userId: l.account.data.uid, page: e, pageSize: 20 });
                        }),
                        x = m.getTotalSize(),
                        h = m.getVirtualItems(),
                        C = (0, R.c)((e) => {
                            let t = Math.floor((e.startIndex * s) / 20),
                                r = Math.ceil((e.endIndex * s) / 20);
                            for (let e = t; e <= r; e++) v(e);
                        });
                    ((0, n.useEffect)(() => {
                        o.isNeededToLoad && (null == r || r.scrollTo({ top: 0, behavior: 'instant' }), o.setInitialShimmer(), v());
                    }, [o, o.isNeededToLoad, v, r]),
                        (0, n.useEffect)(() => {
                            !m.isScrolling && m.range && C(m.range);
                        }, [C, m.range, m.isScrolling]));
                    let g = (0, j.A)(() => {
                        a(w);
                    }, 100);
                    return ((0, n.useEffect)(
                        () => (
                            g(),
                            window.addEventListener('resize', g),
                            () => {
                                window.removeEventListener('resize', g);
                            }
                        ),
                        [g],
                    ),
                    o.isEmpty)
                        ? (0, i.jsx)(V, {})
                        : o.isRejected
                          ? (0, i.jsx)(_.SomethingWentWrong, {})
                          : (0, i.jsx)('div', {
                                className: X().virtualScroll,
                                style: { height: ''.concat(x, 'px') },
                                ref: u,
                                'data-test-id': c.Kq.clip.COLLECTION_LIKED_CLIPS_BLOCK,
                                children: h.map((e) => (0, i.jsx)(Z, { virtualItem: e, resizeObserver: f, columns: s }, e.index)),
                            });
                }),
                J = (0, o.PA)(() => {
                    let {
                            collection: { clips: e },
                        } = (0, b.g)(),
                        { formatMessage: t } = (0, s.A)(),
                        r = (0, h.W)(),
                        o = (0, m.d)(),
                        { contentScrollRef: I, setContentScrollRef: O } = (0, C.g)();
                    return (!o && e.isLoaded && (0, l.redirect)(y.Z.collection.href),
                    (0, g.J)(e.isResolved),
                    (0, n.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    e.isRejected)
                        ? (0, i.jsx)(_.SomethingWentWrong, {})
                        : (0, i.jsx)(x.n, {
                              pageId: f._Q.OWN_CLIPS,
                              children: (0, i.jsx)(v.j, {
                                  children: (0, i.jsxs)(p.h, {
                                      scrollElement: I,
                                      outerTitle: t({ id: 'entity-names.clips' }),
                                      children: [
                                          (0, i.jsx)(A.Y, {
                                              variant: A.V.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: r.canBack,
                                              children: (0, i.jsx)(u.DZ, {
                                                  id: 'collection-artists-header',
                                                  variant: 'h1',
                                                  weight: 'bold',
                                                  size: 'xl',
                                                  lineClamp: 1,
                                                  children: (0, i.jsx)(a.A, { id: 'entity-names.clips' }),
                                              }),
                                          }),
                                          (0, i.jsxs)(d.C, {
                                              scrollableContainerRef: O,
                                              className: T().root,
                                              containerClassName: T().content,
                                              scrollContentClassName: T().scrollContent,
                                              'data-test-id': c.Xk.collection.COLLECTION_CLIPS_PAGE,
                                              children: [
                                                  (0, i.jsx)(G, { contentScrollRef: I }),
                                                  (0, i.jsx)(E.A, { children: (0, i.jsx)(S.w, { className: T().footer }) }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                          });
                });
        },
        38977: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            let i = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        39528: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => o });
            var i = r(25895);
            let o = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40207: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => u });
            var i = r(74631),
                o = r(59342),
                l = r(71035),
                n = r(36484),
                s = r(62562),
                a = r(27954),
                c = r(12929),
                d = r(95067);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: r,
                        getStorageKey: u,
                        callback: _,
                        onAfterHandled: p,
                        onBeforeHandle: m,
                        onReject: f,
                        modalBehavior: v,
                        preventDefaultWhenSafe: x,
                    } = e,
                    {
                        disclaimerModalState: h,
                        modals: { disclaimerModal: C },
                    } = (0, a.g)(),
                    g = (0, i.useRef)(String((0, o.A)())),
                    y = (0, i.useRef)(!1),
                    b = (0, i.useRef)(!1),
                    S = (0, i.useRef)(0),
                    E = (0, i.useRef)(!0),
                    A = (0, s.N)().get(n.U2),
                    I = (0, l.c)((e) => {
                        (x && (null == e || e.preventDefault()), _ && _(e), p && p());
                    });
                return (
                    (0, i.useEffect)(() => {
                        h.isUnsafeDisclaimerConfirmed && h.id === g.current && !y.current && (I(), (y.current = !0));
                    }, [h.id, h.isUnsafeDisclaimerConfirmed, I]),
                    (0, i.useEffect)(() => {
                        h.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && h.setModalData(t.resolvedModalData);
                    }, [h, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, i.useEffect)(
                        () => () => {
                            E.current = !1;
                        },
                        [],
                    ),
                    (0, l.c)(async (e) => {
                        if (!b.current) {
                            b.current = !0;
                            try {
                                if ((null == m || m(e), t)) {
                                    var i, o, l;
                                    let n = t.getDisclaimerEntityRef(r),
                                        s = null != (i = null == u ? void 0 : u(t, n)) ? i : ''.concat(n.entityType, '_').concat(n.entityId),
                                        a = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = A.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(s)) return void I(e);
                                    }
                                    if (a) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && h.setType(c.Z.UNSAFE),
                                            h.setDisclaimerRejectHandler(null != f ? f : null),
                                            h.setId(g.current),
                                            h.setEntityKey(s),
                                            h.setCurrentEntityRef(n.entityType, n.entityId),
                                            h.setShouldHistoryBack(!!(null == v ? void 0 : v.shouldHistoryBack)),
                                            h.setShouldCloseModalOnOutsidePress(null == (o = null == v ? void 0 : v.closeOnOutside) || o),
                                            h.setShouldCloseModalOnEscape(null == (l = null == v ? void 0 : v.closeOnEscape) || l),
                                            (S.current += 1));
                                        let r = S.current,
                                            i = await t.getModalDisclaimerData();
                                        if (S.current !== r || !1 === E.current) return;
                                        (h.setModalData(null != i ? i : null), (y.current = !1), C.open());
                                        return;
                                    }
                                    (x && (null == e || e.preventDefault()), I(e));
                                    return;
                                }
                                (x && (null == e || e.preventDefault()), I(e));
                            } finally {
                                b.current = !1;
                            }
                        }
                    })
                );
            };
        },
        42853: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => o });
            var i = r(40110),
                o = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        43354: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => l });
            var i = r(74631);
            let o = (0, i.createContext)(null),
                l = () => (0, i.useContext)(o);
        },
        46721: (e) => {
            e.exports = {
                root: 'CollectionClipsPageEmpty_root__P29ns',
                content: 'CollectionClipsPageEmpty_content__gIM_C',
                icon: 'CollectionClipsPageEmpty_icon__jDAZP',
                title: 'CollectionClipsPageEmpty_title__DKJ_3',
                text: 'CollectionClipsPageEmpty_text__F_Too',
            };
        },
        49438: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => p });
            var i = r(25839),
                o = r(88204),
                l = r(74631),
                n = r(39004),
                s = r(61493),
                a = r(71035),
                c = r(4071),
                d = r(66738),
                u = r(47009);
            let _ = (0, o.PA)((e) => {
                    let {
                            iconSize: t,
                            className: r,
                            size: o,
                            variant: l = 'default',
                            isPlaying: _ = !1,
                            onClick: p,
                            iconClassName: m,
                            disabled: f,
                            color: v,
                            buttonVariant: x = 'text',
                            children: h,
                            radius: C = 'round',
                            withHover: g,
                            withRipple: y = !1,
                            ariaDescribedBy: b,
                            forwardRef: S,
                            tabIndex: E,
                            ariaHidden: A,
                            shouldSendAnalyticsOnPlayClick: I,
                        } = e,
                        T = (0, u.b)(),
                        { formatMessage: O } = (0, n.A)(),
                        j = ''.concat(_ ? 'pause' : 'play').concat('filled' === l ? '_filled' : ''),
                        R = _ ? s.S7.PAUSE_BUTTON : s.S7.PLAY_BUTTON,
                        P = O(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        N = (0, a.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == p || p(e), I && T(!_));
                        });
                    return (0, i.jsx)(c.$, {
                        className: r,
                        variant: x,
                        color: v,
                        radius: C,
                        size: o,
                        flexIcon: !0,
                        withRipple: y,
                        'aria-label': P,
                        onClick: N,
                        icon: (0, i.jsx)(d.I, { variant: j, size: t, className: m }),
                        disabled: f,
                        withHover: g,
                        'aria-describedby': b,
                        ref: S,
                        tabIndex: E,
                        'aria-hidden': A,
                        'data-test-id': R,
                        children: h,
                    });
                }),
                p = (0, l.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        50209: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => s });
            var i = r(71035),
                o = r(16886),
                l = r(27954),
                n = r(30296);
            let s = (e) => {
                let { playContextParams: t, entityId: r, playbackId: s, sonataState: a } = e,
                    c = (0, n.e)(),
                    { sonataState: d } = (0, l.g)(),
                    u = a || d,
                    _ = !1,
                    p = !1,
                    { contextData: m } = t,
                    {
                        type: f,
                        meta: { id: v },
                    } = m,
                    x = u.contextId === String(v) && f === u.contextType;
                if (r) {
                    var h;
                    _ = r === (null == (h = u.entityMeta) ? void 0 : h.idWithContext);
                } else _ = x;
                return (
                    (p = _ && u.status === o.MT.PLAYING),
                    {
                        isPlaying: p,
                        isCurrent: _,
                        togglePlay: (0, i.c)(() => {
                            var e;
                            if (!c) return Promise.resolve();
                            let i = null == (e = u.entityMeta) ? void 0 : e.idWithContext;
                            return void 0 !== r && r === i ? c.togglePause(s) : c.playContext(t, s);
                        }),
                        restartPlay: (0, i.c)(() => {
                            null == c || c.setProgress(0, s);
                        }),
                    }
                );
            };
        },
        51168: (e) => {
            e.exports = {
                root: 'CollectionClipsPage_root__Z1yh9',
                content: 'CollectionClipsPage_content__68gZ1',
                scrollContent: 'CollectionClipsPage_scrollContent__6F_37',
                header: 'CollectionClipsPage_header__L_hq2',
                footer: 'CollectionClipsPage_footer__0IfmB',
            };
        },
        51246: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => d, hg: () => c });
            var i,
                o = r(74631),
                l = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => o }));
                        let o = i;
                    },
                    8765: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7742: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let o = r(4377),
                            l = r(5881),
                            n = r(8532),
                            s = i(r(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: i,
                                    menuControl: a,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: p,
                                    labelText: m,
                                } = e,
                                f = d || r,
                                v = a || i;
                            return (0, o.jsxs)('div', {
                                className: (0, l.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: u },
                                    s.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, o.jsx)('div', { className: s.default.top, children: c }),
                                    (0, o.jsxs)('div', {
                                        className: (0, l.clsx)(s.default.bottom, p),
                                        children: [
                                            f && (0, o.jsxs)('div', { className: s.default.bottom_left, children: [d, r] }),
                                            v && (0, o.jsxs)('div', { className: s.default.bottom_right, children: [a, i] }),
                                        ],
                                    }),
                                    !!m && (0, o.jsx)(n.Label, { className: s.default.label, children: m }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let o = r(4377),
                            l = r(810),
                            n = r(5881),
                            s = r(8903),
                            a = r(6530),
                            c = i(r(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: i,
                                    textPosition: l = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: p,
                                    chart: m,
                                    children: f,
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...h
                                } = e;
                                return (0, o.jsxs)('div', {
                                    className: (0, n.clsx)(c.default.root, i),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, o.jsx)(a.SROnly, { children: null != v ? v : u }),
                                        (0, o.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, o.jsxs)('div', {
                                            className: (0, n.clsx)(c.default.wrapper, x),
                                            children: [
                                                m,
                                                (0, o.jsxs)('div', {
                                                    className: (0, n.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(l)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, o.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, o.jsx)(s.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    p,
                                                                ],
                                                            }),
                                                        _,
                                                        f,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, l.forwardRef)((e, t) => (0, o.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let o = r(4377),
                            l = r(5881),
                            n = r(8903),
                            s = i(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: i = 's', ...a } = e;
                            return (0, o.jsx)(n.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, l.clsx)(s.default.root, r),
                                ...a,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var i = r(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    5531: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            s = i(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: i, ...a } = e,
                                c = (0, l.clsx)(s.default.root, { [s.default.focusable]: r }, t);
                            return (0, n.isValidElement)(i)
                                ? (0, n.cloneElement)(i, { ...a, className: (0, l.clsx)(c, i.props.className) })
                                : (0, o.jsx)('span', { className: c, ...a, children: i });
                        };
                    },
                    6530: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var i = r(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            s = r(5987),
                            a = i(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: n = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, l.clsx)(a.default.root, a.default['root_'.concat(i, '_').concat(n)], a.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, n.forwardRef)((e, r) => (0, o.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            s = r(5987),
                            a = i(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: i = 'bold', size: n = 's', className: c, children: d, ...u } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, l.clsx)(a.default.root, a.default['root_size_'.concat(n)], a.default['root_weight_'.concat(i)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, n.forwardRef)((e, r) => (0, o.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            s = i(r(61));
                        function a(e) {
                            let { forwardRef: t, style: r, className: i, children: n, variant: a, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof n ? n : void 0;
                            return (0, o.jsx)(a, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, l.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: c && c > 0, [s.default.root_clamp_oneline]: c && 1 === c, [s.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: n,
                            });
                        }
                        ((t.TypographyComponent = a), (t.Typography = (0, n.forwardRef)((e, t) => (0, o.jsx)(a, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var i = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
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
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (l[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'X$', { value: !0 }), (a.kk = a.m7 = void 0));
                var e = s(7093);
                Object.defineProperty(a, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = s(7742);
                Object.defineProperty(a, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = a.kk,
                d = a.m7;
            a.X$;
        },
        52312: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => c });
            var i = r(84361),
                o = r(74631),
                l = r(71035),
                n = r(89192),
                s = r(27954);
            let a = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: r, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, s.g)(),
                        { contentScrollRef: p } = (0, n.g)(),
                        m = (0, o.useRef)(new Map()),
                        f = (0, o.useRef)(void 0),
                        v = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = m.current.get(String(e));
                                return null != t ? t : r(e);
                            },
                            overscan: u,
                            initialRect: a,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, r) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1 ? i + window.scrollY : !e && r ? i + r.scrollTop : 0;
                            })(_, d, p),
                        },
                        x = (0, i.XW)(v),
                        h = (0, i.Te)({ ...v, getScrollElement: () => p, initialOffset: null == p ? void 0 : p.scrollTop }),
                        C = _ ? x : h,
                        g = (0, l.c)(() => {
                            C.measure();
                        });
                    return (
                        (0, o.useEffect)(() => {
                            f.current ||
                                (f.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let r = e.target.getAttribute('data-index');
                                        if (e.target && r) {
                                            let i = e.contentRect.height;
                                            i && i !== m.current.get(r) && (m.current.set(r, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && g());
                                }));
                        }, [g]),
                        { virtualizer: C, resizeObserver: f.current }
                    );
                };
        },
        52512: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(74631),
                o = r(3669),
                l = r(13232);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    s = (0, o.D)(),
                    a = (0, i.useId)(),
                    c = (0, i.useContext)(l.B),
                    d = (0, i.useCallback)(
                        (i, o) => {
                            (e ? e(i, r ? o : void 0) : s(i, o), t && c.unobserveElement(a));
                        },
                        [e, c, a, s, t, r],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: a, callback: d }),
                            () => {
                                c.unobserveElement(a);
                            }
                        ),
                        [e, c, d, a, s],
                    ),
                    { ref: n, intersectionPropertyId: a }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        53712: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => o });
            var i = r(25895);
            let o = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        54199: (e) => {
            e.exports = { root: 'ClipsCarousel_root__r1mGp', controls: 'ClipsCarousel_controls__nZB6r' };
        },
        56348: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => Y });
            var i = r(25839),
                o = r(82298),
                l = r(88204),
                n = r(74631),
                s = r(49656),
                a = r(3392),
                c = r(19410),
                d = r(71035),
                u = r(27954),
                _ = r(39528);
            let p = (e, t) => {
                let { withLink: r, separator: i } = t,
                    o = r && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: o };
            };
            var m = r(94484),
                f = r.n(m),
                v = r(61493),
                x = r(4254),
                h = r(97522),
                C = r(39004),
                g = r(44031),
                y = r(29481),
                b = r(85686),
                S = r(85743),
                E = r(40207);
            let A = (0, l.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: o, captionSize: l = 'm', allArtistsTitle: n, withCustomTooltip: s, hoverSettings: c } = e,
                        {
                            name: _,
                            link: p,
                            title: m,
                            ariaLabel: f,
                            tooltipText: A,
                            isTooltipEnabled: I,
                            handleNavigate: T,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: o, withCustomTooltip: l } = e,
                                { formatMessage: n } = (0, C.A)(),
                                s = ((e, t) => {
                                    let { item: r, allArtistsTitle: i, withCustomTooltip: o } = e,
                                        l = i || r.name;
                                    return {
                                        ...r,
                                        title: o ? void 0 : l,
                                        ariaLabel: r.link ? t({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                        tooltipText: l,
                                        isTooltipEnabled: !i && o,
                                    };
                                })({ item: i, allArtistsTitle: o, withCustomTooltip: l }, n),
                                {
                                    track: a,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                _ = (0, b.Z)(null != (r = null == (t = s.link) ? void 0 : t.href) ? r : s.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, S.z)(),
                                m = (0, y.N)(),
                                f = (0, d.c)((e) => {
                                    (c && a.isOpened && a.close(), _(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: o, fullscreenVideoPlayer: l } = (0, u.g)(),
                                        { modal: n } = i;
                                    return (0, E.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), o.modal.isOpened && o.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            l.modal.isOpened && (l.modal.close(), l.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: f }),
                                x = (0, d.c)((e) => {
                                    (m({ to: g.AppScreen.ArtistScreen }), null == p || p(), v(e));
                                });
                            return { ...s, handleNavigate: x };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: s });
                    return p
                        ? (0, i.jsx)(h.N, {
                              ...p,
                              'aria-label': f,
                              className: r,
                              onClick: T,
                              title: m,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(a.m_, {
                                  enabled: I,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: A,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: l, weight: 'medium', className: o, children: _ }),
                              }),
                          })
                        : (0, i.jsx)(a.m_, {
                              enabled: I,
                              offsetOptions: 4,
                              placement: 'top',
                              text: A,
                              hoverSettings: c,
                              children: (0, i.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: l,
                                  weight: 'medium',
                                  className: o,
                                  title: m,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                I = (e) => {
                    let { group: t, linkClassName: r, captionClassName: o, captionSize: l, allArtistsTitle: s, withCustomTooltip: a, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(A, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: o,
                                captionSize: l,
                                allArtistsTitle: s,
                                withCustomTooltip: a,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(A, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: o,
                                                captionSize: l,
                                                allArtistsTitle: s,
                                                withCustomTooltip: a,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var T = r(8487),
                O = r(9079);
            let j = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: l } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(O.N, {
                            role: 'button',
                            href: '',
                            className: (0, o.$)(f().spoiler, r),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var R = r(28631),
                P = r(33049),
                N = r(61912),
                L = r(36286),
                k = r.n(L);
            let w = (0, l.PA)((e) => {
                    let { label: t, artists: r, forwardRef: o } = e;
                    return (0, i.jsxs)(a.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, P.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: o, children: t }),
                            (0, i.jsx)(a.ZI, { className: k().tooltipContent, children: r.map((e) => (0, i.jsx)(N.V, { artist: e, className: k().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, n.forwardRef)((e, t) => (0, i.jsx)(w, { forwardRef: t, ...e }));
            var D = r(10820),
                U = r(93510),
                H = r.n(U);
            let W = (0, l.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: l } = (0, C.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, o.$)(H().root, H().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(N.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, l.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: o } = e,
                        [l, a] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let e = o.current;
                            e && a(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, s.L)(() =>
                            (0, R.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                _(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, _],
                        ),
                        (0, n.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (l || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(W, { artists: t, label: r }) : (0, i.jsx)(M, { artists: t, label: r })) : r;
                }),
                Y = (0, l.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: l,
                            linkClassName: _,
                            captionClassName: m,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: h,
                            ...C
                        } = e,
                        g = ((e) => {
                            var t, r, i;
                            let { separator: o, visibleArtistsCount: l, withLink: s, withComposer: a, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                m = null != (t = e.artists) ? t : [],
                                f = null == (r = e.withAllArtistsTitle) || r,
                                v = null == (i = e.withCustomTooltip) || i,
                                x = (0, n.useRef)(null),
                                [h, C] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, u.g)(),
                                y = ((!g || 1 === m.length) && _) || !_,
                                b = ((e, t) => {
                                    var r, i, o;
                                    let l = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        n = null == (i = null == t ? void 0 : t.withLink) || i,
                                        s = null != (o = null == t ? void 0 : t.separator) ? o : ', ',
                                        a = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(s),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: i } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: l, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: i, separator: o, isFirst: l } = t;
                                                return {
                                                    primary: p(e, { withLink: i, separator: l ? void 0 : o }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = o ? e.separator : '';
                                                        return p(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: s, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: a,
                                        hiddenArtistsCount: d,
                                    };
                                })(m, { separator: o, visibleArtistsCount: h ? void 0 : l, withComposer: a, withLink: !!y && s, artistIdWithoutLink: c }),
                                S = f ? b.allArtistsTitle : '',
                                E = (0, d.c)((e) => {
                                    (C(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: b.groups,
                                hiddenArtistsCount: b.hiddenArtistsCount,
                                allArtistsTitle: S,
                                withCustomTooltip: v,
                                withContextMenu: _,
                                labelRef: x,
                                handleOnSpoilerClick: E,
                                isTooltipEnabled: !!S && v && !_ && !g,
                                title: !S || v || _ ? void 0 : S,
                            };
                        })(C),
                        y = (0, s.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(h)
                                  ? h
                                  : (0, i.jsx)(j, { spoilerClassName: l, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        b = (0, i.jsx)(a.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, o.$)(f().root, f()['root_variant_'.concat(x)], { [f().root_clamp]: r && r > 0, [f().ellipsis]: !r }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, i.jsx)(
                                            I,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: m,
                                                captionSize: v,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    y,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, i.jsx)(B, { labelRef: g.labelRef, artists: g.artists, label: b }) : b;
                });
        },
        56859: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => a });
            var i = r(25839),
                o = r(23976),
                l = r(36648),
                n = r(60205),
                s = r.n(n);
            let a = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: s().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(o.W, { isActive: t, className: s().cover, radius: 'l' }),
                        (0, i.jsx)(l.n, { isActive: t, className: s().title }),
                        (0, i.jsx)(l.n, { isActive: t, className: s().text }),
                    ],
                });
            };
        },
        57024: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => l, UC: () => n, dM: () => s, uV: () => a });
            var i = r(93690),
                o = r(58848);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof i.m5) || !(0, o.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, o.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                a = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        57138: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            var i = r(25839),
                o = r(74631),
                l = r(14482);
            let n = (e) => {
                let {
                        blockId: t,
                        blockType: r,
                        blockIdForFrom: n,
                        blockPosX: s,
                        blockPosY: a,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: p,
                    } = e,
                    m = (0, o.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: r,
                            blockIdForFrom: n,
                            blockPosX: s,
                            blockPosY: a,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: p,
                        }),
                        [t, r, n, s, a, c, d, u, p],
                    );
                return (0, i.jsx)(l.p.Provider, { value: m, children: _ });
            };
        },
        58848: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        60205: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        60924: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(25839),
                o = r(61493),
                l = r(3392),
                n = r(4254),
                s = r(74672),
                a = r.n(s);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: s, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(l.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(l.ZI, {
                                className: a().root,
                                'data-test-id': o.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: a().text,
                                    children: [
                                        s && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: s }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: a().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61912: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => C });
            var i = r(25839),
                o = r(82298),
                l = r(88204),
                n = r(74631),
                s = r(44031),
                a = r(61493),
                c = r(71035),
                d = r(23818),
                u = r(10820),
                _ = r(86869),
                p = r(4254),
                m = r(29481),
                f = r(85686),
                v = r(27954),
                x = r(53454),
                h = r.n(x);
            let C = (0, l.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: l } = (0, v.g)(),
                    x = (0, f.Z)(t.url),
                    g = (0, m.N)(),
                    y = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(C, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    b = (0, c.c)((e) => {
                        (l.modal.isOpened && l.modal.close(), g({ to: s.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, o.$)(h().root, r),
                            onClick: b,
                            'data-test-id': a.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(_.t, {
                                    radius: 'round',
                                    className: h().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: h().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        y,
                    ],
                });
            });
        },
        63896: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => o });
            var i = r(74631);
            let o = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        63905: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => m });
            var i = r(67379),
                o = r(20934),
                l = r(59450),
                n = r(71035),
                s = r(20258),
                a = r(26742),
                c = r(25488),
                d = r(97952),
                u = r(10764),
                _ = r(72594),
                p = r(84e3);
            let m = (e) => {
                let t = (0, l.st)(),
                    { hash: r } = (0, l.gf)(),
                    { pageId: m } = (0, d.$)(),
                    { tabId: f, tabPos: v, isTabSelectedByDefault: x } = (0, _.R)(),
                    { blockType: h, blockId: C, blockPosX: g, blockPosY: y, mainObjectType: b, mainObjectId: S } = (0, a.N)(),
                    { objectsCount: E, objectType: A, objectId: I, objectPosX: T, objectPosY: O } = (0, c.J)(),
                    j = (0, p.U)(),
                    { skeleton: R } = (0, u.b)();
                return (0, n.c)((l) => {
                    if (!t || !m || !s.xK.includes(m)) return;
                    let n = {
                        hash: r,
                        pageId: m,
                        entityType: h,
                        entityId: C,
                        entityPosX: g,
                        entityPosY: y,
                        objectsCount: E,
                        viewUuid: e,
                        objectType: A,
                        objectId: I,
                        objectPosX: T,
                        objectPosY: O,
                    };
                    (s.qG.includes(m) && ((n.tabId = f), (n.tabPos = v), (n.isTabSelectedByDefault = x)),
                        R && (n.skeletonId = R),
                        b && (n.mainObjectType = b),
                        S && (n.mainObjectId = S));
                    let a = (0, i.F)({ params: n, logger: j, context: 'useSendEventOnClipShowedOrHidden' });
                    if (a) {
                        if (l) return void (0, o.Pf)(t.evgenInstance, a);
                        (0, o.nv)(t.evgenInstance, a);
                    }
                });
            };
        },
        64715: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => P });
            var i = r(25839),
                o = r(82298),
                l = r(88204),
                n = r(74631),
                s = r(39004),
                a = r(8487);
            r(93588);
            var c = r(4071),
                d = r(66738),
                u = r(4254),
                _ = r(67379),
                p = r(44031),
                m = r(87277),
                f = r(59450),
                v = r(84e3),
                x = r(97952),
                h = r(89192),
                C = r(53712),
                g = r(27954),
                y = r(44806),
                b = r(15270),
                S = r(23818),
                E = r(85686);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var I = r(27990),
                T = r.n(I);
            let O = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { slam: l } = (0, g.g)(),
                    { contentRef: n } = (0, h.g)(),
                    s = (0, E.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(T().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(b.L, { withBackwardFallback: '/', className: (0, o.$)(T().navigation, { [T().navigation_desktop]: !n }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, o.$)(T().content, { [T().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(S._V, { className: T().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: T().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: T().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: T().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                l.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: T().button,
                                        onClick: s,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: T().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var j = r(68854),
                R = r.n(j);
            let P = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: l } = (0, s.A)(),
                    S = (0, n.useContext)(g.P),
                    E = null == S ? void 0 : S.experiments.checkExperiment(y.z.WebNextUnstableMusicScreen, 'on'),
                    A = l(E ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, f.st)(),
                        { hash: r } = (0, f.gf)(),
                        { pageId: i } = (0, x.$)(),
                        o = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !r || !i) return;
                        let l = (0, _.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: i,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: o,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, m.z5)(t.evgenInstance, l);
                    }, [t, e, r, i, o]);
                })(A);
                let { sendRefreshEvent: I } = (function () {
                        let e = (0, f.st)(),
                            { hash: t } = (0, f.gf)(),
                            { pageId: r } = (0, x.$)(),
                            i = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let o = (0, _.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                o && (0, m.bv)(e.evgenInstance, o);
                            }, [e, t, r, i]),
                        };
                    })(),
                    T = (0, n.useCallback)(() => {
                        (I(), (window.location.href = C.Z.main.href));
                    }, [I]),
                    { contentRef: j } = (0, h.g)();
                return E
                    ? (0, i.jsx)(O, { className: t, withBackwardControl: r })
                    : (0, i.jsxs)('div', {
                          className: (0, o.$)(R().root, t),
                          children: [
                              r &&
                                  (0, i.jsx)(b.L, {
                                      withBackwardFallback: '/',
                                      className: (0, o.$)(R().navigation, { [R().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, o.$)(R().content, { [R().content_shrink]: !r }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: R().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, o.$)(R().title, R().important), variant: 'h3', size: 'xs', children: A }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, o.$)(R().text, R().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: T,
                                          className: R().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        65165: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => o });
            var i = r(38977);
            let o = (e, t) => {
                let { seconds: r, hours: o, minutes: l } = (0, i.e)(e);
                return t({ id: 'time.hours-minutes-seconds' }, { hours: o, minutes: l, seconds: r });
            };
        },
        65189: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => v });
            var i = r(67379),
                o = r(44031),
                l = r(20934),
                n = r(59450),
                s = r(71035),
                a = r(79670),
                c = r(20258),
                d = r(26742),
                u = r(25488),
                _ = r(97952),
                p = r(10764),
                m = r(72594),
                f = r(84e3);
            let v = (e) => {
                let t = (0, n.st)(),
                    { hash: r } = (0, n.gf)(),
                    { pageId: v } = (0, _.$)(),
                    { tabId: x, tabPos: h, isTabSelectedByDefault: C } = (0, m.R)(),
                    { skeleton: g } = (0, p.b)(),
                    { blockType: y, blockId: b, blockPosX: S, blockPosY: E, mainObjectType: A, mainObjectId: I } = (0, d.N)(),
                    { objectsCount: T, objectType: O, objectId: j, objectPosX: R, objectPosY: P } = (0, u.J)(),
                    N = (0, f.U)();
                return (0, s.c)(() => {
                    if (!t || !v || !c.xK.includes(v)) return;
                    let n = {
                        hash: r,
                        pageId: v,
                        entityType: y,
                        entityId: b,
                        entityPosX: S,
                        entityPosY: E,
                        objectId: j,
                        objectType: O,
                        objectPosX: R,
                        objectPosY: P,
                        objectsCount: T,
                        from: a.W[v],
                        to: o.AppScreen.VideoScreen,
                    };
                    (c.qG.includes(v) && ((n.tabId = x), (n.tabPos = h), (n.isTabSelectedByDefault = C)),
                        g && (n.skeletonId = g),
                        A && (n.mainObjectType = A),
                        I && (n.mainObjectId = I));
                    let s = (0, i.F)({ params: n, logger: N, context: 'useSendEventOnClipNavigated' });
                    s && e && (0, l.QS)(t.evgenInstance, s);
                });
            };
        },
        67560: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => s });
            var i = r(71035),
                o = r(27954),
                l = r(63896),
                n = r(28003);
            let s = () => {
                let { fullscreenVideoPlayer: e } = (0, o.g)(),
                    t = (0, l.p)();
                return (0, i.c)(function (r) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(r), e.setClipIndex(i), t((0, n.J)(r, i)), e.modal.open());
                });
            };
        },
        68215: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => l });
            var i = r(39004),
                o = r(65165);
            let l = (e) => {
                let { formatMessage: t } = (0, i.A)();
                return (0, o.j)(e, t);
            };
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
        68891: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                root: 'ClipCard_root__kzWjg',
                srTitleLink: 'ClipCard_srTitleLink__0tQdz',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        76481: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => o });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: o = {}, ...l } = t,
                        n = e || 'Internal error';
                    (super(n, l), (this.message = n), (this.code = r), (this.data = o), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class o extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        77179: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        77920: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => l });
            var i = r(36484),
                o = r(62562);
            let l = () => (0, o.N)().get(i.Zf);
        },
        85743: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => n });
            var i = r(74631),
                o = r(91879),
                l = r(32953);
            let n = () => {
                let { sendSearchFeedback: e, id: t, type: r, blockPosition: n, position: s } = (0, i.useContext)(l.N) || {};
                if (void 0 === t || void 0 === r || void 0 === n || void 0 === s) return {};
                let a = null == e ? void 0 : e.bind(null, { feedbackType: o.n.LIKE, id: t, type: r, blockPosition: n, position: s });
                return {
                    sendLikeSearchFeedback: a,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: o.n.NAVIGATE, id: t, type: r, blockPosition: n, position: s }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: o.n.PLAY, id: t, type: r, blockPosition: n, position: s }),
                };
            };
        },
        86869: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => c });
            var i,
                o = r(74631),
                l = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => o }));
                        let o = i;
                    },
                    2095: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: 'qaIScXjx1qyXuaIHXQIo',
                            root_radius_xs: 'wdE2qVRIlWUesuBfzCis',
                            root_radius_s: '_7gw1qGE6BeUAdSMbhRx',
                            root_radius_m: 'emVxQKB1wJc9FwuIBG8o',
                            root_radius_l: 'NFJAa_h_EAjwQVY7bU5J',
                            root_radius_xl: 'SRpgu5IgfEGM_VHllm_6',
                            root_radius_round: 'QIWoHHDozGGG5w2JYImt',
                            root_withShadow: 'gtfPudKIIbfkwmuOBzwI',
                            root_variant_default: 'ZcpulvHgF_wsgzB8Hye9',
                            root_variant_outline: 'kPFFrHHxF3SOjiETAE6Q',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    6009: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            s = i(r(2095)),
                            a = (e) => {
                                let { forwardRef: t, radius: r, variant: i = 'default', children: n, className: a, withShadow: c, style: d, ...u } = e;
                                return (0, o.jsx)('div', {
                                    className: (0, l.clsx)(
                                        s.default.root,
                                        s.default['root_radius_'.concat(r)],
                                        s.default['root_variant_'.concat(i)],
                                        { [s.default.root_withShadow]: c },
                                        a,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: n,
                                });
                            };
                        t.Paper = (0, n.forwardRef)((e, t) => (0, o.jsx)(a, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (l[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'U', { value: !0 }), (a.X = void 0));
                var e = s(6009);
                Object.defineProperty(a, 'X', {
                    enumerable: !0,
                    get: function () {
                        return e.Paper;
                    },
                });
            })();
            var c = a.X;
            a.U;
        },
        87605: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => o });
            var i = r(40207);
            let o = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: o } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: o, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        91626: (e, t, r) => {
            'use strict';
            (r.d(t, { G: () => o }), r(77920));
            var i = r(76481);
            class o extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        91879: (e, t, r) => {
            'use strict';
            var i, o;
            (r.d(t, { n: () => o, o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'),
                        (e.ALBUM = 'album'),
                        (e.TRACK = 'track'),
                        (e.PLAYLIST = 'playlist'),
                        (e.USER = 'user'),
                        (e.VIDEO = 'video'),
                        (e.CLIP = 'clip'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.SEARCH_PAGE = 'search-page'));
                })(i || (i = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(o || (o = {})));
        },
        91907: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => o });
            let i = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                o = (e, t) => {
                    let r = i(e, 3600),
                        o = i(e - 3600 * r, 60),
                        l = e - 3600 * r - 60 * o,
                        n = i(t || e, 3600) > 0,
                        s = [o, l];
                    return (n && s.unshift(r), s.map((e) => String(e).padStart(2, '0')).join(':'));
                };
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        93690: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => l.G, X1: () => i.X, m5: () => o.m });
            var i = r(77920),
                o = r(76481),
                l = r(91626);
            r(95919);
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        95858: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => a });
            var i = r(25839),
                o = r(74631),
                l = r(59342),
                n = r(91886),
                s = r(13232);
            let a = (e) => {
                let { children: t } = e,
                    r = (0, o.useRef)({}),
                    a = (0, o.useRef)(
                        (0, n.Gv)(
                            (e) => {
                                let t = (0, n.L5)(e.target),
                                    i = r.current[t];
                                if (i) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, l.A)());
                                            (i.callback(!0, e), (i.showed = !0), (i.viewUuid = e));
                                        }, 1e3);
                                        i.timerId = e;
                                    }
                                    (!e.isIntersecting && i.showed && (i.callback(!1, i.viewUuid), (i.showed = !1), (i.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(i.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, o.useCallback)((e) => {
                        var t;
                        !r.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = a.current) || t.observe(e.elementRef.current), (r.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, o.useCallback)((e) => {
                        let t = r.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete r.current[e]);
                    }, []);
                (0, o.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = a.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, o.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, i.jsx)(s.B.Provider, { value: u, children: t });
            };
        },
        95919: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => A });
            var i = r(25839),
                o = r(82298),
                l = r(88204),
                n = r(39004),
                s = r(93588),
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
                    let { formatMessage: t, language: r, tld: i, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, r) },
                    };
                };
            var _ = r(10959),
                p = r(89514);
            let m = (e) => e(new Date(), (0, p.m)());
            var f = r(96433),
                v = r(27954),
                x = r(400),
                h = r.n(x),
                C = r(61493),
                g = r(4254),
                y = r(97522);
            let b = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(h().copyrights, t),
                        'data-test-id': C.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: h().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(y.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, o.$)(h().copyrightLink, h().yandexMusicLink),
                                        'data-test-id': C.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(g.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(y.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: h().copyrightLink,
                                'data-test-id': C.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: h().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: h().list,
                                'data-test-id': C.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: o } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: h().item,
                                            children: (0, i.jsx)(y.N, { target: '_blank', href: o, className: h().link, 'data-test-id': C.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: h().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': C.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, o.$)(h().root, h().important, t),
                        'data-test-id': C.S7.FOOTER,
                        children: [(0, i.jsx)(S, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(b, { data: r.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, v.g)(),
                    { formatDate: o, formatMessage: l } = (0, n.A)(),
                    { language: s } = (0, f.h)(),
                    a = u({ formatMessage: l, language: s, tld: r.tld, year: m(o) });
                return (0, i.jsx)(b, { className: t, data: a });
            });
            let A = (0, l.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: l, location: p, user: x } = (0, v.g)(),
                    { formatDate: C, formatMessage: g } = (0, n.A)(),
                    { isEnabled: y } = null != (t = (0, a.P)()) ? t : {},
                    { language: b } = (0, f.h)(),
                    S = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: i, language: o, tld: l, userRegion: n, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: i, language: o, userRegion: l } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, o) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, o) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, o) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, o) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, o) },
                                    p = [n, a, u];
                                return (r && 'ru' === l && p.push(s), p.push(_), p);
                            })({ formatMessage: r, isWebApplication: i, language: o, tld: l, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: r, language: o, tld: l, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: g,
                        isWebApplication: s.$3,
                        tld: p.tld,
                        language: b,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: m(C),
                    });
                return (0, i.jsx)(E, { className: (0, o.$)({ [h().root_withOffsetForDeeplink]: y }, r), data: S });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7055, 3349, 2767, 2531, 6287, 740, 1632, 3112, 8310, 6706, 4771, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 4361, 2038, 4163, 3246,
                3482, 6680, 7856, 8836, 820, 4434, 5232, 5343, 4475, 5056, 7358,
            ],
            () => e((e.s = 13729)),
        ),
            (_N_E = e.O()));
    },
]);
