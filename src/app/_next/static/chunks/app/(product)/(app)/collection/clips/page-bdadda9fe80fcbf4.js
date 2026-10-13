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
                l = r(89761),
                o = r(95759),
                n = r(74631),
                s = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
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
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var o in ((i = {}), t)) 'key' !== o && (i[o] = t[o]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    853: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0));
                        let i = r(4377),
                            l = r(810),
                            o = r(1964),
                            n = r(2660),
                            s = r(3343),
                            a = r(1229);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: r, children: c, referenceRef: d, ...u } = e,
                                [_, p] = Array.isArray(c) ? c : [c],
                                m = (0, a.useTooltip)(u),
                                f = (0, l.useId)(),
                                v = (0, l.useId)(),
                                x = (0, l.useId)(),
                                C = (0, o.useMergeRefs)([m.refs.setReference, d]);
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, l.cloneElement)(_, {
                                        ref: C,
                                        ...(t ? { 'aria-describedby': f } : {}),
                                        ...m.getReferenceProps(),
                                        ...(0, n.getDataAttrFromProps)(u),
                                        key: v,
                                    }),
                                    m.context.open
                                        ? (0, l.cloneElement)(null != p ? p : (0, i.jsx)(s.TooltipContent, {}), {
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
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = r(1964),
                            a = r(3412),
                            c = i(r(4295));
                        ((t.TooltipContentComponent = (e) => {
                            let { className: t, children: r, arrow: i, rootNode: d, forwardRef: u, text: _, ...p } = e;
                            return (0, l.jsx)(s.FloatingPortal, {
                                root: d,
                                children: (0, l.jsxs)('div', {
                                    className: (0, o.clsx)(c.default.root, t),
                                    ref: u,
                                    ...p,
                                    children: [
                                        (0, n.isValidElement)(i) && i,
                                        (0, l.jsx)(a.Caption, {
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
                            (t.TooltipContent = (0, n.forwardRef)((e, r) => (0, l.jsx)(t.TooltipContentComponent, { forwardRef: r, ...e }))));
                    },
                    1229: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0));
                        let i = r(4377),
                            l = r(810),
                            o = r(1964),
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
                                [x, C] = (0, l.useState)(t),
                                h = (0, l.useRef)(null),
                                g = null != s ? s : x,
                                y = null != a ? a : C,
                                S = (0, o.useFloating)({
                                    placement: r,
                                    open: g,
                                    onOpenChange: y,
                                    whileElementsMounted: o.autoUpdate,
                                    middleware: [
                                        (0, o.offset)(u),
                                        (0, o.flip)({ crossAxis: r.includes('-'), ..._ }),
                                        (0, o.shift)(p),
                                        (0, o.arrow)({ element: h }),
                                        (0, o.hide)(),
                                    ],
                                }),
                                E = S.context,
                                A = (0, o.useHover)(E, { move: !1, enabled: c && f, ...m }),
                                I = (0, o.useFocus)(E, { enabled: d && f }),
                                T = (0, o.useDismiss)(E),
                                b = (0, o.useRole)(E, { role: 'tooltip' }),
                                O = (0, o.useInteractions)([A, I, T, b]),
                                R = (0, l.useMemo)(() => {
                                    if (v) return (0, i.jsx)(o.FloatingArrow, { ref: h, context: S.context, ...v });
                                }, [v, S.context]);
                            return (0, l.useMemo)(() => {
                                var e;
                                return { open: g, setOpen: y, arrow: R, referenceHidden: null == (e = S.middlewareData.hide) ? void 0 : e.referenceHidden, ...O, ...S };
                            }, [g, y, R, O, S]);
                        };
                    },
                    3412: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = r(5987),
                            a = i(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: n = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, l.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, o.clsx)(a.default.root, a.default['root_'.concat(i, '_').concat(n)], a.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, n.forwardRef)((e, r) => (0, l.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(61));
                        function a(e) {
                            let { forwardRef: t, style: r, className: i, children: n, variant: a, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof n ? n : void 0;
                            return (0, l.jsx)(a, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, o.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: c && c > 0, [s.default.root_clamp_oneline]: c && 1 === c, [s.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: n,
                            });
                        }
                        ((t.TypographyComponent = a), (t.Typography = (0, n.forwardRef)((e, t) => (0, l.jsx)(a, { forwardRef: t, ...e }))));
                    },
                    1964: (e) => {
                        e.exports = l;
                    },
                    2660: (e) => {
                        e.exports = o;
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
            r.d(t, { D: () => C });
            var i = r(74631),
                l = r(67379),
                o = r(17850),
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
            let C = () => {
                let e = (0, a.U)(),
                    t = (0, n.st)(),
                    { hash: r } = (0, n.gf)(),
                    { pageId: C, displayReasonId: h } = (0, f.$)(),
                    { tabId: g, tabPos: y, isTabSelectedByDefault: S } = (0, x.R)(),
                    { offsetBlockPosY: E } = (0, _.u)(),
                    { blockType: A, blockId: I, blockPosX: T, blockPosY: b, mainObjectId: O, mainObjectType: R, displayReasonId: L } = (0, u.N)(),
                    { filterKey: N, filterValue: j, filterPos: P } = (0, p.G)(),
                    { objectType: k, objectsCount: w, objectId: D, objectPosX: M, objectPosY: U } = (0, m.J)(),
                    { skeleton: B } = (0, v.b)(),
                    H = null != L ? L : h,
                    W = (0, s.L)(() => (void 0 !== E && void 0 !== b ? E + b : b));
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!t || !C || !d.xK.includes(C) || !d.fD.includes(C)) return;
                        let s = c.F[C];
                        if (!s) return;
                        let a = {
                            hash: r,
                            pageId: s,
                            entityType: A,
                            entityId: I,
                            entityPosX: T,
                            entityPosY: W,
                            objectsCount: w,
                            viewUuid: n,
                            objectType: k,
                            objectId: D,
                            objectPosX: M,
                            objectPosY: U,
                        };
                        (void 0 !== N && ((a.filterKey = N), (a.filterValue = j), (a.filterPos = P)),
                            d.qG.includes(C) && ((a.tabId = g), (a.tabPos = y), (a.isTabSelectedByDefault = S)),
                            B && (a.skeletonId = B),
                            'string' == typeof O && 'string' == typeof R && ((a.mainObjectType = R), (a.mainObjectId = O)),
                            H && (a.displayReasonId = H));
                        let u = (0, l.F)({ params: a, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, o.Pf)(t.evgenInstance, u) : (0, o.nv)(t.evgenInstance, u));
                    },
                    [t, H, I, T, W, A, N, P, j, r, S, e, O, R, D, M, U, k, w, C, B, g, y],
                );
            };
        },
        4331: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => Y });
            var i = r(25839),
                l = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(49656),
                a = r(3392),
                c = r(19410),
                d = r(71035),
                u = r(27954),
                _ = r(39528);
            let p = (e, t) => {
                let { withLink: r, separator: i } = t,
                    l = r && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: l };
            };
            var m = r(94484),
                f = r.n(m),
                v = r(61493),
                x = r(4254),
                C = r(97522),
                h = r(39004),
                g = r(36619),
                y = r(29481),
                S = r(85686),
                E = r(85743),
                A = r(40207);
            let I = (0, o.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: l, captionSize: o = 'm', allArtistsTitle: n, withCustomTooltip: s, hoverSettings: c } = e,
                        {
                            name: _,
                            link: p,
                            title: m,
                            ariaLabel: f,
                            tooltipText: I,
                            isTooltipEnabled: T,
                            handleNavigate: b,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: l, withCustomTooltip: o } = e,
                                { formatMessage: n } = (0, h.A)(),
                                {
                                    track: s,
                                    settings: { isMobile: a },
                                } = (0, u.g)(),
                                c = (0, S.Z)(null != (r = null == (t = i.link) ? void 0 : t.href) ? r : i.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, E.z)(),
                                p = (0, y.N)(),
                                m = (0, d.c)((e) => {
                                    (a && s.isOpened && s.close(), c(e));
                                }),
                                f = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: l, fullscreenVideoPlayer: o } = (0, u.g)(),
                                        { modal: n } = i;
                                    return (0, A.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            o.modal.isOpened && (o.modal.close(), o.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: i.artist, callback: m }),
                                v = (0, d.c)((e) => {
                                    (p({ to: g.AppScreen.ArtistScreen }), null == _ || _(), f(e));
                                }),
                                x = l || i.name;
                            return {
                                name: i.name,
                                link: i.link,
                                title: o ? void 0 : x,
                                ariaLabel: i.link ? n({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                tooltipText: x,
                                isTooltipEnabled: !l && o,
                                handleNavigate: v,
                            };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: s });
                    return p
                        ? (0, i.jsx)(C.N, {
                              ...p,
                              'aria-label': f,
                              className: r,
                              onClick: b,
                              title: m,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(a.m_, {
                                  enabled: T,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: I,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: o, weight: 'medium', className: l, children: _ }),
                              }),
                          })
                        : (0, i.jsx)(a.m_, {
                              enabled: T,
                              offsetOptions: 4,
                              placement: 'top',
                              text: I,
                              hoverSettings: c,
                              children: (0, i.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: o,
                                  weight: 'medium',
                                  className: l,
                                  title: m,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                T = (e) => {
                    let { group: t, linkClassName: r, captionClassName: l, captionSize: o, allArtistsTitle: s, withCustomTooltip: a, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(I, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: l,
                                captionSize: o,
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
                                            (0, i.jsx)(I, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: l,
                                                captionSize: o,
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
            var b = r(8487),
                O = r(9079);
            let R = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: o } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(O.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(f().spoiler, r),
                            onClick: o,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(b.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = r(28631),
                N = r(89761),
                j = r(61912),
                P = r(36286),
                k = r.n(P);
            let w = (0, o.PA)((e) => {
                    let { label: t, artists: r, forwardRef: l } = e;
                    return (0, i.jsxs)(a.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: l, children: t }),
                            (0, i.jsx)(a.ZI, { className: k().tooltipContent, children: r.map((e) => (0, i.jsx)(j.V, { artist: e, className: k().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, i.jsx)(w, { forwardRef: t, ...e }));
            var M = r(10820),
                U = r(93510),
                B = r.n(U);
            let H = (0, o.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: o } = (0, h.A)();
                    return (0, i.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, l.$)(B().root, B().important),
                        label: t,
                        ariaLabel: o({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(j.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, o.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: l } = e,
                        [o, a] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let e = l.current;
                            e && a(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, s.L)(() =>
                            (0, L.A)(() => {
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
                        return (o || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(H, { artists: t, label: r }) : (0, i.jsx)(D, { artists: t, label: r })) : r;
                }),
                Y = (0, o.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: o,
                            linkClassName: _,
                            captionClassName: m,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: C,
                            ...h
                        } = e,
                        g = ((e) => {
                            var t, r, i;
                            let { separator: l, visibleArtistsCount: o, withLink: s, withComposer: a, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                m = null != (t = e.artists) ? t : [],
                                f = null == (r = e.withAllArtistsTitle) || r,
                                v = null == (i = e.withCustomTooltip) || i,
                                x = (0, n.useRef)(null),
                                [C, h] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, u.g)(),
                                y = ((!g || 1 === m.length) && _) || !_,
                                S = ((e, t) => {
                                    var r, i, l;
                                    let o = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        n = null == (i = null == t ? void 0 : t.withLink) || i,
                                        s = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
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
                                        })(e, { withComposer: o, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: i, separator: l, isFirst: o } = t;
                                                return {
                                                    primary: p(e, { withLink: i, separator: o ? void 0 : l }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return p(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: s, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: a,
                                        hiddenArtistsCount: d,
                                    };
                                })(m, { separator: l, visibleArtistsCount: C ? void 0 : o, withComposer: a, withLink: !!y && s, artistIdWithoutLink: c }),
                                E = f ? S.allArtistsTitle : '',
                                A = (0, d.c)((e) => {
                                    (h(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: S.groups,
                                hiddenArtistsCount: S.hiddenArtistsCount,
                                allArtistsTitle: E,
                                withCustomTooltip: v,
                                withContextMenu: _,
                                labelRef: x,
                                handleOnSpoilerClick: A,
                                isTooltipEnabled: !!E && v && !_ && !g,
                                title: !E || v || _ ? void 0 : E,
                            };
                        })(h),
                        y = (0, s.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(C)
                                  ? C
                                  : (0, i.jsx)(R, { spoilerClassName: o, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        S = (0, i.jsx)(a.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, l.$)(f().root, f()['root_variant_'.concat(x)], { [f().root_clamp]: r && r > 0, [f().ellipsis]: !r }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, i.jsx)(
                                            T,
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
                    return g.withContextMenu ? (0, i.jsx)(W, { labelRef: g.labelRef, artists: g.artists, label: S }) : S;
                });
        },
        5365: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => c });
            var i,
                l = r(74631),
                o = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2876: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var o in ((i = {}), t)) 'key' !== o && (i[o] = t[o]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    4014: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(2876)),
                            a = (e) => {
                                let { className: t, itemClassName: r, children: i, forwardRef: a, role: c, ...d } = e;
                                return (0, l.jsx)('ol', {
                                    ref: a,
                                    className: (0, o.clsx)(s.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: n.Children.map(i, (e) => (0, l.jsx)('li', { className: (0, o.clsx)(s.default.item, r), children: e })),
                                });
                            };
                        t.Carousel = (0, n.forwardRef)((e, t) => (0, l.jsx)(a, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(l, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, s), r.exports);
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
                (Object.defineProperty(a, 'X', { value: !0 }), (a.l = void 0));
                var e = s(4014);
                Object.defineProperty(a, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = a.l;
            a.X;
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
                l = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(89288),
                a = r(18412),
                c = r(80986),
                d = r(54199),
                u = r.n(d),
                _ = r(7429);
            let p = (0, o.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: r,
                            carouselItemClassName: o,
                            forwardRef: d,
                            isShimmerVisible: p,
                            isShimmerActive: m,
                            title: f,
                            description: v,
                            containerClassName: x,
                            headerClassName: C,
                            viewAllActionLink: h,
                            artistIdWithoutLink: g,
                            withVideo: y = !0,
                            clips: S,
                            headingVariant: E,
                            className: A,
                            shouldOpenModalOnCardClick: I = !0,
                            itemCounter: T,
                            ...b
                        } = e,
                        O = (0, n.useId)(),
                        R = (0, n.useRef)(null);
                    return (0, i.jsxs)('section', {
                        className: (0, l.$)(u().root, A),
                        ref: d,
                        ...(0, s.OZ)(b),
                        children: [
                            (0, i.jsx)(a.T, {
                                className: C,
                                labeledForId: O,
                                title: f,
                                description: v,
                                viewAllActionLink: h,
                                controls: (0, i.jsx)(c.X, { className: u().controls, carouselRef: R }),
                                headingVariant: E,
                                withDescription: !!v,
                            }),
                            (0, i.jsx)(_.t, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: r,
                                carouselItemClassName: o,
                                isShimmerVisible: p,
                                isShimmerActive: m,
                                containerClassName: x,
                                artistIdWithoutLink: g,
                                withVideo: y,
                                clips: S,
                                shouldOpenModalOnCardClick: I,
                                itemCounter: T,
                                ref: R,
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
                l = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(59342),
                a = r(36619),
                c = r(5365),
                d = r(95314),
                u = r(15049),
                _ = r(56859),
                p = r(7987),
                m = r.n(p);
            let f = (0, o.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: r,
                            clipCardArtistLinkClassName: o,
                            carouselItemClassName: p,
                            isShimmerVisible: f,
                            isShimmerActive: v,
                            containerClassName: x,
                            artistIdWithoutLink: C,
                            withVideo: h = !0,
                            clips: g,
                            shouldOpenModalOnCardClick: y = !0,
                            itemCounter: S,
                        } = e,
                        E = (0, n.useId)(),
                        A = (0, n.useRef)(String((0, s.A)())),
                        I = (0, n.useMemo)(() => {
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
                                                  artistLinkClassName: o,
                                                  clip: e,
                                                  withVideo: h,
                                                  artistIdWithoutLink: C,
                                                  viewUuid: A.current,
                                                  shouldOpenModalOnCardClick: y,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [r, o, f, v, C, h, g, y]);
                    return (0, i.jsx)(c.F, {
                        className: (0, l.$)(m().itemCounter, { [m()['itemCounter_'.concat(S)]]: S }, x),
                        ref: t,
                        itemClassName: (0, l.$)(m().item, m().important, p),
                        'aria-labelledby': E,
                        children: I,
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
        9511: (e) => {
            e.exports = {
                root: 'CollectionClipsPageClipsWillLike_root__uS0_8',
                carouselItem: 'CollectionClipsPageClipsWillLike_carouselItem__0C0_W',
                important: 'CollectionClipsPageClipsWillLike_important__U_2ET',
                carouselBlockHeader: 'CollectionClipsPageClipsWillLike_carouselBlockHeader__wDnJp',
                carouselBlock: 'CollectionClipsPageClipsWillLike_carouselBlock__La_8Q',
            };
        },
        9911: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => d });
            var i,
                l = r(6274),
                o = r(74631),
                n = {
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                s = {};
            function a(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (n[e](r, r.exports, a), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = a(810),
                    t = a(352);
                c.l = (r) => {
                    let [i, l] = (0, e.useState)(!0),
                        [o, n] = (0, e.useState)(!0),
                        s = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (l(0 === e.scrollLeft), n(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        s();
                    }, [r, s]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', s),
                                window.addEventListener('resize', s),
                                () => {
                                    (null == e || e.removeEventListener('scroll', s), window.removeEventListener('resize', s));
                                }
                            );
                        }, [r, s]));
                    let a = (0, e.useMemo)(
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
                        swipeForward: a,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: o,
                        shouldHideControls: i && o,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        10322: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(25839),
                l = r(74631),
                o = r(82064);
            let n = (e) => {
                let { pageId: t, pageEntityId: r, displayReasonId: n, pageStyle: s, pagePlacement: a, children: c } = e,
                    d = (0, l.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: n, pageStyle: s, pagePlacement: a }), [t, r, n, s, a]);
                return (0, i.jsx)(o.r.Provider, { value: d, children: c });
            };
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => l });
            var i = r(44806);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: l, userRegion: o } = e;
                return 'ru' === o && t(i.z.WebNextFooterDisclaimer, 'on') ? r() : l();
            };
        },
        12929: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => i, n: () => l });
            var i = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                l = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        13232: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        15049: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => U });
            var i = r(25839),
                l = r(82298),
                o = r(10508),
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
                x = r(4331),
                C = r(65189),
                h = r(63905),
                g = r(28003),
                y = r(67560),
                S = r(40110),
                E = r(20258),
                A = r(52512),
                I = r(30290),
                T = r(91907),
                b = r(68215),
                O = r(18639),
                R = r(77179),
                L = r(50209),
                N = r(27954),
                j = r(62926),
                P = r(97522),
                k = r(49438),
                w = r(87605),
                D = r(68891),
                M = r.n(D);
            let U = (0, n.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: n,
                        clip: D,
                        withVideo: U = !0,
                        artistIdWithoutLink: B,
                        viewUuid: H,
                        shouldOpenModalOnCardClick: W = !0,
                    } = e,
                    { fullscreenVideoPlayer: Y } = (0, N.g)(),
                    { formatMessage: F } = (0, a.A)(),
                    z = (0, y.C)(),
                    { from: K } = (0, I.f)({ pageId: E._Q.VIDEO_PLAYER, contextId: Y.state.contextId, contextType: u.K.Various, blockId: S.U.CLIPS }),
                    V = (0, b.P)(null != (t = D.duration) ? t : 0),
                    Q = (0, h.M)(H),
                    X = (0, C._)(H),
                    { ref: G, intersectionPropertyId: Z } = (0, A.n)({ callback: Q }),
                    J = (0, s.useRef)(null),
                    $ = U && D.previewUrl,
                    q = (0, _.c)(() => {
                        J.current && ((J.current.currentTime = 0), J.current.play());
                    }),
                    ee = (0, s.useMemo)(() => (0, o.A)(q, 500), [q]),
                    et = (0, _.c)(() => {
                        var e;
                        null == (e = J.current) || e.pause();
                    }),
                    er = (0, s.useMemo)(() => Y.ids.indexOf(D.clipId), [Y, D.clipId]),
                    { isPlaying: ei, togglePlay: el } = (0, L.D)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: O.H.VARIOUS_CLIP_CONTEXT }, from: K },
                            queueParams: { index: er },
                            entitiesData: Y.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(D.clipId),
                        sonataState: Y.state,
                        playbackId: R.V.CLIP,
                    }),
                    eo = W ? D.url : (0, g.J)(Y.ids, er),
                    en = (0, _.c)(() => {
                        W ? (z([D.clipId]), X()) : ei || el();
                    }),
                    es = (0, w.X)({ clip: D, callback: en }),
                    ea = F({ id: 'entity-names.clip-name' }, { clipName: D.title }),
                    ec = (0, s.useMemo)(
                        () =>
                            D.isAvailable
                                ? (0, i.jsxs)(f.t, {
                                      radius: 'm',
                                      className: (0, l.$)(M().view, M().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: es,
                                      children: [
                                          $ &&
                                              (0, i.jsx)('video', {
                                                  className: M().media,
                                                  ref: J,
                                                  poster: D.thumbnail && (0, c.oZ)(D.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: D.previewUrl, type: 'video/mp4' }),
                                              }),
                                          D.thumbnail &&
                                              (0, i.jsx)(m._V, {
                                                  className: M().image,
                                                  'aria-hidden': !0,
                                                  src: D.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.oZ,
                                              }),
                                          void 0 !== D.duration &&
                                              (0, i.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': V,
                                                  variant: 'span',
                                                  className: M().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, T.E)(D.duration, D.duration) }),
                                              }),
                                          (0, i.jsx)(k.D, { variant: 'filled', className: M().playButton, onClick: es, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(f.t, {
                                      radius: 'm',
                                      className: M().unavailableCover,
                                      children: (0, i.jsx)(m.Ab, { className: M().image, iconVariant: 'unavailable', 'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [V, D.isAvailable, D.thumbnail, D.previewUrl, D.duration, ee, et, es, $],
                    ),
                    ed = (0, s.useMemo)(
                        () =>
                            D.hasArtists
                                ? (0, i.jsx)(
                                      x.i,
                                      { linkClassName: (0, l.$)(M().artistLink, n), artists: D.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: B },
                                      D.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [B, D, n],
                    );
                return (0, i.jsx)(p.MN, {
                    ref: G,
                    className: M().root,
                    explicitMarkComponent:
                        D.explicitDisclaimer &&
                        (0, i.jsx)(j.N, { getDescriptionTexts: D.getDescriptionTexts, variant: D.explicitDisclaimer, size: 'xxs' }, D.getKey('ExplicitMarkIcon')),
                    'aria-label': ea,
                    srTitle: (0, i.jsx)(P.N, { className: M().srTitleLink, href: eo, onClick: es, children: ea }),
                    title: (0, i.jsxs)(
                        v.HL,
                        {
                            className: (0, l.$)(M().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(P.N, {
                                    className: M().titleLink,
                                    href: eo,
                                    tabIndex: -1,
                                    'aria-label': ea,
                                    onClick: es,
                                    'data-test-id': d.Kq.clip.CLIP_META_TITLE,
                                    children: D.title,
                                }),
                                D.version && (0, i.jsx)(v.HL, { className: M().version, variant: 'span', children: ' '.concat(D.version) }),
                            ],
                        },
                        D.getKey('Title'),
                    ),
                    'data-intersection-property-id': Z,
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
                l = r(84059),
                o = r(8487),
                n = r(61493),
                s = r(71035),
                a = r(4071),
                c = r(4254),
                d = r(57024),
                u = r(36484),
                _ = r(62562);
            let p = (e) => {
                let { size: t = 'm', variant: r = 'default', color: p = 'primary', withRipple: m = !0, buttonText: f, isBlock: v, key: x, className: C } = e,
                    h = (0, l.useRouter)(),
                    g = (0, _.N)().get(u.QG),
                    y = (0, s.c)(() => {
                        g.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), h.push(g.authorizationUrl));
                    });
                return (0, i.jsx)(
                    a.$,
                    {
                        onClick: y,
                        className: C,
                        isBlock: v,
                        color: p,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: f || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        18412: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => h });
            var i = r(25839),
                l = r(82298),
                o = r(74631),
                n = r(36619),
                s = r(61493),
                a = r(66738),
                c = r(23818),
                d = r(86869),
                u = r(23976),
                _ = r(4254),
                p = r(61777),
                m = r(29481),
                f = r(97522),
                v = r(73208),
                x = r.n(v);
            let C = (e) => {
                    let {
                            className: t,
                            coverUrl: r,
                            labeledForId: v,
                            subTitle: C,
                            title: h,
                            description: g,
                            viewAllActionLink: y,
                            controls: S,
                            titleSize: E = 'm',
                            coverBackgroundColor: A,
                            coverRadius: I = 's',
                            titleClassName: T,
                            titleLineClamp: b,
                            fallbackIconVariant: O,
                            available: R = !0,
                            onViewAllAction: L,
                            titleChildren: N,
                            children: j,
                            headingRef: P,
                            coverContainerClassName: k,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: D = !0,
                            isShimmerVisible: M,
                            isShimmerActive: U,
                            withCover: B,
                            withDescription: H,
                            forwardRef: W,
                            shimmerCoverClassName: Y,
                            shouldSendAnalyticsOnLoaded: F,
                            ...z
                        } = e,
                        K = (0, p.f)(),
                        V = (0, o.useRef)(null),
                        Q = r || B,
                        X = g || H,
                        G = (0, o.useCallback)(() => {
                            V.current && 'focus' in V.current && V.current.focus();
                        }, []),
                        Z = (0, m.N)(),
                        J = (0, o.useCallback)(() => {
                            L ? L() : Z({ to: n.AppScreen.Link });
                        }, [Z, L]);
                    (0, o.useEffect)(() => {
                        F && K();
                    }, [F, K]);
                    let $ = (0, o.useMemo)(
                            () =>
                                h && y && R
                                    ? (0, i.jsxs)(f.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, i.jsx)(a.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: y,
                                          onClick: J,
                                          'data-test-id': s.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(_.DZ, {
                                                  id: v,
                                                  className: (0, l.$)(x().heading, T),
                                                  variant: w,
                                                  size: E,
                                                  weight: 'bold',
                                                  lineClamp: b,
                                                  ref: P,
                                                  children: h,
                                              }),
                                              N,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, i.jsx)(_.DZ, {
                                                  id: v,
                                                  className: (0, l.$)(x().heading, T, { [x().heading_notAvailable]: !R }),
                                                  variant: w,
                                                  size: E,
                                                  weight: 'bold',
                                                  lineClamp: b,
                                                  ref: P,
                                                  'data-test-id': s.S7.BLOCK_HEADER_TITLE,
                                                  children: h,
                                              }),
                                              N,
                                          ],
                                      }),
                            [R, J, P, w, v, h, T, b, E, y, N],
                        ),
                        q = (0, o.useMemo)(() => (H && M ? (0, i.jsx)(u.W, { isActive: U, className: x().shimmerDescription }) : g), [H, M, g, U]),
                        ee = (0, o.useMemo)(
                            () =>
                                B && M
                                    ? (0, i.jsx)(u.W, { isActive: U, className: (0, l.$)(x().shimmerCover, Y), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: r,
                                          fallbackIconVariant: O,
                                          style: { backgroundColor: A },
                                          className: x().cover,
                                          ref: V,
                                          onClick: G,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': s.S7.BLOCK_HEADER_COVER,
                                      }),
                            [A, r, O, G, U, M, Y, B],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(x().root, t),
                        ref: W,
                        ...z,
                        'data-test-id': s.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: x().start,
                                children: [
                                    Q && (0, i.jsx)(d.t, { radius: I, className: (0, l.$)(x().coverContainer, k), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            C,
                                            $,
                                            X &&
                                                (0, i.jsx)(_.HL, {
                                                    id: ''.concat(v, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: D ? 2 : void 0,
                                                    className: (0, l.$)(x().description, { [x().description_widthLimit]: D }),
                                                    'data-test-id': s.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: q,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            S || j,
                        ],
                    });
                },
                h = (0, o.forwardRef)((e, t) => (0, i.jsx)(C, { forwardRef: t, ...e }));
        },
        18483: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => l });
            var i = r(27954);
            let l = () => {
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
            var l = r(400),
                o = r.n(l);
            let n = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: o().empty });
            };
        },
        27954: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => o, g: () => n });
            var i = r(74631),
                l = r(36432);
            let o = (0, i.createContext)(null);
            function n() {
                let e = (0, i.useContext)(o);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        28003: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            var i = r(53712),
                l = r(6969),
                o = r(25895);
            let n = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: r } = (0, o.u)(i.Z.video.href, { query: { [l.K.IDS]: e.join(','), [l.K.ACTIVE_INDEX]: String(t) } });
                return r;
            };
        },
        30290: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => _ });
            var i = r(74631);
            r(93588);
            var l = r(26742),
                o = r(97952),
                n = r(84059),
                s = r(40110),
                a = r(22939),
                c = r(20258),
                d = r(98074);
            let u = [s.U.TRAILER],
                _ = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                r = null == e ? void 0 : e.blockId,
                                n = null == e ? void 0 : e.pageEntityId,
                                { pageId: s, pageEntityId: a } = (0, o.$)(),
                                { blockId: c } = (0, l.N)();
                            return (0, i.useMemo)(() => ({ pageId: null != t ? t : s, blockId: null != r ? r : c, pageEntityId: null != n ? n : a }), [r, c, t, n, s, a]);
                        })(e),
                        r = ((e) => {
                            let { pageId: t, blockId: r } = e;
                            return (0, i.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), r && e.push(r.toLowerCase()), e.push('default'), e.join('-'));
                            }, [r, t]);
                        })(t),
                        s = ((e) => {
                            let { pageId: t, blockId: r, pageEntityId: l, contextType: o, contextId: s, utmForPageIds: _ } = e,
                                p = (0, n.useSearchParams)();
                            return (0, i.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: r, pageEntityId: i, utmForPageIds: l, contextId: o, contextType: n, blockId: s } = e,
                                            _ = t && Object.fromEntries(t),
                                            p = ((e) => {
                                                switch (e) {
                                                    case c._Q.ALBUM:
                                                    case c._Q.PROMOLANDING_ALBUM:
                                                    case c._Q.AUDIOBOOK:
                                                    case c._Q.PODCAST:
                                                        return a.K.Album;
                                                    case c._Q.ARTIST:
                                                    case c._Q.ARTIST_TRACKS:
                                                    case c._Q.ARTIST_ALBUMS:
                                                    case c._Q.ARTIST_DISCOGRAPHY:
                                                        return a.K.Artist;
                                                    case c._Q.PLAYLIST:
                                                        return a.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(r);
                                        return !p || !_ || !i || u.includes(s)
                                            ? null
                                            : (Array.isArray(l) ? l.map((e) => String(e)).includes(String(i)) : !!o && p === n && String(o) === String(i)) && _
                                              ? (0, d.Z)(_)
                                              : null;
                                    })({ searchParams: p, pageId: t, pageEntityId: l, utmForPageIds: _, contextId: s, contextType: o, blockId: r }),
                                [p, t, l, s, o, r, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, i.useMemo)(() => ({ from: r, utmLink: s || void 0 }), [r, s]);
                };
        },
        30296: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => l, e: () => o });
            var i = r(74631);
            let l = (0, i.createContext)(null);
            function o() {
                return (0, i.useContext)(l);
            }
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
            r.d(t, { J: () => o });
            var i = r(84059),
                l = r(74631);
            r(93588);
            let o = (e) => {
                let t = (0, i.usePathname)(),
                    [r, o] = (0, l.useState)(!1);
                ((0, l.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, l.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), o(!0));
                    }, [e, r, t]));
            };
        },
        30871: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => f });
            var i = r(25839),
                l = r(88204),
                o = r(84059),
                n = r(82298),
                s = r(8487),
                a = r(4254),
                c = r(16978),
                d = r(148),
                u = r.n(d);
            let _ = (0, l.PA)(() =>
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
            let f = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: l } = (0, m.g)();
                return l.isAuthorized ? t : (r && (0, o.redirect)(p.Z.main.href), (0, i.jsx)(_, {}));
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
        36648: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => a });
            var i = r(25839),
                l = r(82298),
                o = r(23976),
                n = r(89728),
                s = r.n(n);
            let a = (e) => {
                let { className: t, textClassName: r, isActive: n } = e;
                return (0, i.jsx)('div', { className: (0, l.$)(s().root, t), children: (0, i.jsx)(o.W, { className: (0, l.$)(s().text, r), isActive: n, radius: 's' }) });
            };
        },
        37922: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        38449: (e, t, r) => {
            'use strict';
            r.d(t, { CollectionClipsPage: () => Z });
            var i = r(25839),
                l = r(88204),
                o = r(84059),
                n = r(74631),
                s = r(39004),
                a = r(8487),
                c = r(61493),
                d = r(99430),
                u = r(4254),
                _ = r(78299),
                p = r(1407),
                m = r(18483),
                f = r(20258),
                v = r(95858),
                x = r(10322),
                C = r(21784),
                h = r(89192),
                g = r(30716),
                y = r(53712),
                S = r(27954),
                E = r(99401),
                A = r(26076),
                I = r(10603),
                T = r(51168),
                b = r.n(T),
                O = r(82298),
                R = r(28631),
                L = r(71035),
                N = r(68934),
                j = r(15049),
                P = r(56859),
                k = r(52312);
            let w = () => (window.innerWidth > 1920 ? 4 : window.innerWidth > 1200 ? 3 : 2);
            var D = r(7341),
                M = r(42853),
                U = r(57138),
                B = r(9511),
                H = r.n(B);
            let W = (0, l.PA)((e) => {
                var t;
                let { className: r } = e,
                    { formatMessage: l } = (0, s.A)(),
                    { clipsWillLike: o } = (0, S.g)().collection.clips;
                return (
                    o.isNeededToLoad && (0, n.use)(o.getData()),
                    (0, i.jsx)(U.F, {
                        blockId: M.h.CLIPS_CAROUSEL,
                        blockType: M.h.CLIPS_CAROUSEL,
                        blockPosX: 1,
                        blockPosY: 7,
                        objectsCount: null == (t = o.clips) ? void 0 : t.length,
                        children: (0, i.jsx)(D.K, {
                            className: (0, O.$)(H().root, r),
                            containerClassName: H().carouselBlock,
                            carouselItemClassName: (0, O.$)(H().carouselItem, H().important),
                            headerClassName: (0, O.$)(H().carouselBlockHeader, H().carouselBlock),
                            isShimmerVisible: o.isLoading,
                            isShimmerActive: !0,
                            title: l({ id: 'entity-names.clips-will-like' }),
                            clips: o.clips || [],
                            headingVariant: 'h2',
                            'data-test-id': c.Kq.clip.CLIPS_CAROUSEL,
                        }),
                    })
                );
            });
            var Y = r(66738),
                F = r(46721),
                z = r.n(F);
            let K = (0, l.PA)(() => {
                let {
                        collection: {
                            clips: { clipsWillLike: e },
                        },
                    } = (0, S.g)(),
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
                        t && (0, i.jsx)(W, {}),
                    ],
                });
            });
            var V = r(30437),
                Q = r.n(V);
            let X = (0, l.PA)((e) => {
                    let { virtualItem: t, resizeObserver: r, columns: l } = e,
                        [o, a] = (0, N.d)(),
                        { formatMessage: c } = (0, s.A)(),
                        {
                            collection: { clips: d },
                        } = (0, S.g)();
                    (0, n.useEffect)(
                        () => (
                            o && r && r.observe(o),
                            () => {
                                o && r && r.unobserve(o);
                            }
                        ),
                        [o, r],
                    );
                    let u = d.items.slice(t.index * l, t.index * l + l),
                        _ = d.pager && d.pager.total <= l ? 0 : 1,
                        p = !d.clipsWillLike.isEmpty && !d.clipsWillLike.isRejected;
                    return (0, i.jsxs)(
                        'div',
                        {
                            ref: a,
                            'data-index': t.index,
                            className: Q().virtualItem,
                            style: { transform: 'translateY('.concat(t.start, 'px)') },
                            children: [
                                (0, i.jsx)('div', {
                                    style: { gridTemplateColumns: 'repeat('.concat(l, ', minmax(0, 1fr))') },
                                    className: (0, O.$)(Q().virtualItemRow, {
                                        [Q().virtualItemRow_withTopBorder]: t.index === _ + 1 && p,
                                        [Q().virtualItemRow_withBottomBorder]: t.index === _ && p,
                                    }),
                                    children:
                                        null == u
                                            ? void 0
                                            : u.map((e, t) => {
                                                  if (!e) {
                                                      let e = c({ id: 'loading-messages.entity-is-loading' }, { entityName: c({ id: 'entity-names.clip' }) });
                                                      return (0, i.jsx)(P.k, { 'aria-label': e }, t);
                                                  }
                                                  return (0, i.jsx)(j.F, { clip: e }, e.clipId);
                                              }),
                                }),
                                t.index === _ && p && (0, i.jsx)(W, { className: Q().clipsWillLike }),
                            ],
                        },
                        t.key,
                    );
                }),
                G = (0, l.PA)((e) => {
                    var t;
                    let { contentScrollRef: r } = e,
                        {
                            collection: { clips: l },
                            user: o,
                        } = (0, S.g)(),
                        [s, a] = (0, n.useState)(w),
                        [d, u] = (0, N.d)(),
                        p = l.pager && l.pager.total <= s ? 0 : 1,
                        { virtualizer: m, resizeObserver: f } = (0, k.r)({
                            gap: 24,
                            count: l.pager ? Math.ceil((null == (t = l.pager) ? void 0 : t.total) / s) : 5,
                            getEstimateSize: (e) => (e === p ? 800 : 400),
                            containerRef: d,
                        }),
                        v = (0, L.c)((e) => {
                            o.account.data.uid && l.getData({ userId: o.account.data.uid, page: e, pageSize: 20 });
                        }),
                        x = m.getTotalSize(),
                        C = m.getVirtualItems(),
                        h = (0, L.c)((e) => {
                            let t = Math.floor((e.startIndex * s) / 20),
                                r = Math.ceil((e.endIndex * s) / 20);
                            for (let e = t; e <= r; e++) v(e);
                        });
                    ((0, n.useEffect)(() => {
                        l.isNeededToLoad && (null == r || r.scrollTo({ top: 0, behavior: 'instant' }), l.setInitialShimmer(), v());
                    }, [l, l.isNeededToLoad, v, r]),
                        (0, n.useEffect)(() => {
                            !m.isScrolling && m.range && h(m.range);
                        }, [h, m.range, m.isScrolling]));
                    let g = (0, R.A)(() => {
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
                    l.isEmpty)
                        ? (0, i.jsx)(K, {})
                        : l.isRejected
                          ? (0, i.jsx)(_.SomethingWentWrong, {})
                          : (0, i.jsx)('div', {
                                className: Q().virtualScroll,
                                style: { height: ''.concat(x, 'px') },
                                ref: u,
                                'data-test-id': c.Kq.clip.COLLECTION_LIKED_CLIPS_BLOCK,
                                children: C.map((e) => (0, i.jsx)(X, { virtualItem: e, resizeObserver: f, columns: s }, e.index)),
                            });
                }),
                Z = (0, l.PA)(() => {
                    let {
                            collection: { clips: e },
                        } = (0, S.g)(),
                        { formatMessage: t } = (0, s.A)(),
                        r = (0, C.W)(),
                        l = (0, m.d)(),
                        { contentScrollRef: T, setContentScrollRef: O } = (0, h.g)();
                    return (!l && e.isLoaded && (0, o.redirect)(y.Z.collection.href),
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
                                      scrollElement: T,
                                      outerTitle: t({ id: 'entity-names.clips' }),
                                      children: [
                                          (0, i.jsx)(I.Y, {
                                              variant: I.V.TEXT,
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
                                              className: b().root,
                                              containerClassName: b().content,
                                              scrollContentClassName: b().scrollContent,
                                              'data-test-id': c.Xk.collection.COLLECTION_CLIPS_PAGE,
                                              children: [
                                                  (0, i.jsx)(G, { contentScrollRef: T }),
                                                  (0, i.jsx)(A.A, { children: (0, i.jsx)(E.w, { className: b().footer }) }),
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
            r.d(t, { R: () => l });
            var i = r(25895);
            let l = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40110: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var i = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    e
                );
            })({});
        },
        40207: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => u });
            var i = r(74631),
                l = r(59342),
                o = r(71035),
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
                        disclaimerModalState: C,
                        modals: { disclaimerModal: h },
                    } = (0, a.g)(),
                    g = (0, i.useRef)(String((0, l.A)())),
                    y = (0, i.useRef)(!1),
                    S = (0, i.useRef)(!1),
                    E = (0, i.useRef)(0),
                    A = (0, i.useRef)(!0),
                    I = (0, s.N)().get(n.U2),
                    T = (0, o.c)((e) => {
                        (x && (null == e || e.preventDefault()), _ && _(e), p && p());
                    });
                return (
                    (0, i.useEffect)(() => {
                        C.isUnsafeDisclaimerConfirmed && C.id === g.current && !y.current && (T(), (y.current = !0));
                    }, [C.id, C.isUnsafeDisclaimerConfirmed, T]),
                    (0, i.useEffect)(() => {
                        C.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && C.setModalData(t.resolvedModalData);
                    }, [C, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, i.useEffect)(
                        () => () => {
                            A.current = !1;
                        },
                        [],
                    ),
                    (0, o.c)(async (e) => {
                        if (!S.current) {
                            S.current = !0;
                            try {
                                if ((null == m || m(e), t)) {
                                    var i, l, o;
                                    let n = t.getDisclaimerEntityRef(r),
                                        s = null != (i = null == u ? void 0 : u(t, n)) ? i : ''.concat(n.entityType, '_').concat(n.entityId),
                                        a = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = I.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(s)) return void T(e);
                                    }
                                    if (a) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && C.setType(c.Z.UNSAFE),
                                            C.setDisclaimerRejectHandler(null != f ? f : null),
                                            C.setId(g.current),
                                            C.setEntityKey(s),
                                            C.setCurrentEntityRef(n.entityType, n.entityId),
                                            C.setShouldHistoryBack(!!(null == v ? void 0 : v.shouldHistoryBack)),
                                            C.setShouldCloseModalOnOutsidePress(null == (l = null == v ? void 0 : v.closeOnOutside) || l),
                                            C.setShouldCloseModalOnEscape(null == (o = null == v ? void 0 : v.closeOnEscape) || o),
                                            (E.current += 1));
                                        let r = E.current,
                                            i = await t.getModalDisclaimerData();
                                        if (E.current !== r || !1 === A.current) return;
                                        (C.setModalData(null != i ? i : null), (y.current = !1), h.open());
                                        return;
                                    }
                                    (x && (null == e || e.preventDefault()), T(e));
                                    return;
                                }
                                (x && (null == e || e.preventDefault()), T(e));
                            } finally {
                                S.current = !1;
                            }
                        }
                    })
                );
            };
        },
        42853: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => l });
            var i = r(40110),
                l = (function (e) {
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
            r.d(t, { H: () => l, P: () => o });
            var i = r(74631);
            let l = (0, i.createContext)(null),
                o = () => (0, i.useContext)(l);
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
        47009: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => C });
            var i = r(74631),
                l = r(67379),
                o = r(17850),
                n = r(59450),
                s = r(49656),
                a = r(84e3),
                c = r(58069),
                d = r(20258),
                u = r(26742),
                _ = r(25195),
                p = r(25488),
                m = r(97952),
                f = r(10764),
                v = r(72594);
            let x = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.CONCERTS,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                    d._Q.COLLECTION_VIBE_ROOMS,
                    d._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    d._Q.MULTIVIBE_ACTION_SCREEN,
                    d._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                C = () => {
                    let e = (0, n.st)(),
                        t = (0, a.U)(),
                        { hash: r } = (0, n.gf)(),
                        { pageId: C } = (0, m.$)(),
                        { tabId: h, tabPos: g, isTabSelectedByDefault: y } = (0, v.R)(),
                        { offsetBlockPosY: S } = (0, _.u)(),
                        { blockId: E, blockType: A, blockPosX: I, blockPosY: T, mainObjectId: b, mainObjectType: O } = (0, u.N)(),
                        { objectId: R, objectPosX: L, objectPosY: N, objectType: j, objectsCount: P } = (0, p.J)(),
                        { skeleton: k } = (0, f.b)(),
                        w = (0, s.L)(() => (void 0 !== S && void 0 !== T ? S + T : T));
                    return (0, i.useCallback)(
                        (i, n) => {
                            if (!e || !C || !d.xK.includes(C) || !i || !x.includes(C)) return;
                            let s = c.F[C];
                            if (!s) return;
                            let a = {
                                hash: r,
                                pageId: s,
                                entityType: A,
                                entityId: E,
                                entityPosX: I,
                                entityPosY: w,
                                objectId: null != n ? n : R,
                                objectType: j,
                                objectPosX: L,
                                objectPosY: N,
                                objectsCount: P,
                            };
                            (d.qG.includes(C) && ((a.tabId = h), (a.tabPos = g), (a.isTabSelectedByDefault = y)),
                                k && (a.skeletonId = k),
                                b && O && ((a.mainObjectType = O), (a.mainObjectId = b)));
                            let u = (0, l.F)({ params: a, logger: t, context: 'useSendEventOnBlockStarted' });
                            u && (0, o.er)(e.evgenInstance, u);
                        },
                        [e, C, r, A, E, I, w, R, j, L, N, P, k, b, O, t, h, g, y],
                    );
                };
        },
        49438: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => p });
            var i = r(25839),
                l = r(88204),
                o = r(74631),
                n = r(39004),
                s = r(61493),
                a = r(71035),
                c = r(4071),
                d = r(66738),
                u = r(47009);
            let _ = (0, l.PA)((e) => {
                    let {
                            iconSize: t,
                            className: r,
                            size: l,
                            variant: o = 'default',
                            isPlaying: _ = !1,
                            onClick: p,
                            iconClassName: m,
                            disabled: f,
                            color: v,
                            buttonVariant: x = 'text',
                            children: C,
                            radius: h = 'round',
                            withHover: g,
                            withRipple: y = !1,
                            ariaDescribedBy: S,
                            forwardRef: E,
                            tabIndex: A,
                            ariaHidden: I,
                            shouldSendAnalyticsOnPlayClick: T,
                        } = e,
                        b = (0, u.b)(),
                        { formatMessage: O } = (0, n.A)(),
                        R = ''.concat(_ ? 'pause' : 'play').concat('filled' === o ? '_filled' : ''),
                        L = _ ? s.S7.PAUSE_BUTTON : s.S7.PLAY_BUTTON,
                        N = O(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        j = (0, a.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == p || p(e), T && b(!_));
                        });
                    return (0, i.jsx)(c.$, {
                        className: r,
                        variant: x,
                        color: v,
                        radius: h,
                        size: l,
                        flexIcon: !0,
                        withRipple: y,
                        'aria-label': N,
                        onClick: j,
                        icon: (0, i.jsx)(d.I, { variant: R, size: t, className: m }),
                        disabled: f,
                        withHover: g,
                        'aria-describedby': S,
                        ref: E,
                        tabIndex: A,
                        'aria-hidden': I,
                        'data-test-id': L,
                        children: C,
                    });
                }),
                p = (0, o.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        50209: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => s });
            var i = r(71035),
                l = r(16886),
                o = r(27954),
                n = r(30296);
            let s = (e) => {
                let { playContextParams: t, entityId: r, playbackId: s, sonataState: a } = e,
                    c = (0, n.e)(),
                    { sonataState: d } = (0, o.g)(),
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
                    var C;
                    _ = r === (null == (C = u.entityMeta) ? void 0 : C.idWithContext);
                } else _ = x;
                return (
                    (p = _ && u.status === l.MT.PLAYING),
                    {
                        isPlaying: p,
                        isCurrent: _,
                        togglePlay: (0, i.c)(() => {
                            var e;
                            let i = null == (e = u.entityMeta) ? void 0 : e.idWithContext;
                            if (void 0 !== r && r === i) {
                                null == c || c.togglePause(s);
                                return;
                            }
                            null == c || c.playContext(t, s);
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
                l = r(74631),
                o = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
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
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var o in ((i = {}), t)) 'key' !== o && (i[o] = t[o]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
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
                        let l = r(4377),
                            o = r(5881),
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
                            return (0, l.jsxs)('div', {
                                className: (0, o.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: u },
                                    s.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, l.jsx)('div', { className: s.default.top, children: c }),
                                    (0, l.jsxs)('div', {
                                        className: (0, o.clsx)(s.default.bottom, p),
                                        children: [
                                            f && (0, l.jsxs)('div', { className: s.default.bottom_left, children: [d, r] }),
                                            v && (0, l.jsxs)('div', { className: s.default.bottom_right, children: [a, i] }),
                                        ],
                                    }),
                                    !!m && (0, l.jsx)(n.Label, { className: s.default.label, children: m }),
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
                        let l = r(4377),
                            o = r(810),
                            n = r(5881),
                            s = r(8903),
                            a = r(6530),
                            c = i(r(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: i,
                                    textPosition: o = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: p,
                                    chart: m,
                                    children: f,
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...C
                                } = e;
                                return (0, l.jsxs)('div', {
                                    className: (0, n.clsx)(c.default.root, i),
                                    ref: t,
                                    ...C,
                                    children: [
                                        (0, l.jsx)(a.SROnly, { children: null != v ? v : u }),
                                        (0, l.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, l.jsxs)('div', {
                                            className: (0, n.clsx)(c.default.wrapper, x),
                                            children: [
                                                m,
                                                (0, l.jsxs)('div', {
                                                    className: (0, n.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(o)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, l.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, l.jsx)(s.Caption, {
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
                        t.EntityCard = (0, o.forwardRef)((e, t) => (0, l.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(8903),
                            s = i(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: i = 's', ...a } = e;
                            return (0, l.jsx)(n.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, o.clsx)(s.default.root, r),
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
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: i, ...a } = e,
                                c = (0, o.clsx)(s.default.root, { [s.default.focusable]: r }, t);
                            return (0, n.isValidElement)(i)
                                ? (0, n.cloneElement)(i, { ...a, className: (0, o.clsx)(c, i.props.className) })
                                : (0, l.jsx)('span', { className: c, ...a, children: i });
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
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = r(5987),
                            a = i(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: n = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, l.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, o.clsx)(a.default.root, a.default['root_'.concat(i, '_').concat(n)], a.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, n.forwardRef)((e, r) => (0, l.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = r(5987),
                            a = i(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: i = 'bold', size: n = 's', className: c, children: d, ...u } = e;
                            return (0, l.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, o.clsx)(a.default.root, a.default['root_size_'.concat(n)], a.default['root_weight_'.concat(i)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, n.forwardRef)((e, r) => (0, l.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(61));
                        function a(e) {
                            let { forwardRef: t, style: r, className: i, children: n, variant: a, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof n ? n : void 0;
                            return (0, l.jsx)(a, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, o.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: c && c > 0, [s.default.root_clamp_oneline]: c && 1 === c, [s.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: n,
                            });
                        }
                        ((t.TypographyComponent = a), (t.Typography = (0, n.forwardRef)((e, t) => (0, l.jsx)(a, { forwardRef: t, ...e }))));
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
                        var l = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return l.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(l, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, s), r.exports);
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
                l = r(74631),
                o = r(71035),
                n = r(89192),
                s = r(27954);
            let a = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: r, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, s.g)(),
                        { contentScrollRef: p } = (0, n.g)(),
                        m = (0, l.useRef)(new Map()),
                        f = (0, l.useRef)(void 0),
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
                        C = (0, i.Te)({ ...v, getScrollElement: () => p, initialOffset: null == p ? void 0 : p.scrollTop }),
                        h = _ ? x : C,
                        g = (0, o.c)(() => {
                            h.measure();
                        });
                    return (
                        (0, l.useEffect)(() => {
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
                        { virtualizer: h, resizeObserver: f.current }
                    );
                };
        },
        52512: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(74631),
                l = r(3669),
                o = r(13232);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    s = (0, l.D)(),
                    a = (0, i.useId)(),
                    c = (0, i.useContext)(o.B),
                    d = (0, i.useCallback)(
                        (i, l) => {
                            (e ? e(i, r ? l : void 0) : s(i, l), t && c.unobserveElement(a));
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
        53173: (e, t, r) => {
            (Promise.resolve().then(r.bind(r, 30871)), Promise.resolve().then(r.bind(r, 38449)));
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        53712: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => l });
            var i = r(25895);
            let l = {
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
        56859: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => a });
            var i = r(25839),
                l = r(23976),
                o = r(36648),
                n = r(60205),
                s = r.n(n);
            let a = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: s().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(l.W, { isActive: t, className: s().cover, radius: 'l' }),
                        (0, i.jsx)(o.n, { isActive: t, className: s().title }),
                        (0, i.jsx)(o.n, { isActive: t, className: s().text }),
                    ],
                });
            };
        },
        57024: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => o, UC: () => n, dM: () => s, uV: () => a });
            var i = r(93690),
                l = r(58848);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof i.m5) || !(0, l.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, l.N)(e.cause)) return;
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
                l = r(74631),
                o = r(14482);
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
                    m = (0, l.useMemo)(
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
                return (0, i.jsx)(o.p.Provider, { value: m, children: _ });
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
                l = r(61493),
                o = r(3392),
                n = r(4254),
                s = r(74672),
                a = r.n(s);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: s, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(o.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(o.ZI, {
                                className: a().root,
                                'data-test-id': l.S7.TOOLTIP_WITH_TITLE,
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
        61777: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => C });
            var i = r(74631),
                l = r(67379),
                o = r(17850),
                n = r(59450),
                s = r(49656),
                a = r(84e3),
                c = r(58069),
                d = r(20258),
                u = r(26742),
                _ = r(25195),
                p = r(37314),
                m = r(97952),
                f = r(10764),
                v = r(72594);
            let x = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                C = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, n.st)(),
                        r = (0, a.U)(),
                        { hash: C } = (0, n.gf)(),
                        { pageId: h } = (0, m.$)(),
                        { tabId: g, tabPos: y, isTabSelectedByDefault: S } = (0, v.R)(),
                        { offsetBlockPosY: E } = (0, _.u)(),
                        { blockId: A, blockType: I, blockPosX: T, blockPosY: b, mainObjectType: O, mainObjectId: R, objectsCount: L } = (0, u.N)(),
                        { filterKey: N, filterValue: j, filterPos: P } = (0, p.G)(),
                        { skeleton: k } = (0, f.b)(),
                        w = (0, s.L)(() => (void 0 !== E && void 0 !== b ? E + b : b));
                    return (0, i.useCallback)(() => {
                        if (!t || !h || !d.xK.includes(h) || !x.includes(h) || e.current) return;
                        let i = { hash: C, pageId: c.F[h], entityType: I, entityId: A, entityPosX: T, entityPosY: w, objectsCount: L };
                        (void 0 !== N && ((i.filterKey = N), (i.filterValue = j), (i.filterPos = P)),
                            d.qG.includes(h) && ((i.tabId = g), (i.tabPos = y), (i.isTabSelectedByDefault = S)),
                            k && (i.skeletonId = k),
                            R && O && ((i.mainObjectType = O), (i.mainObjectId = R)));
                        let n = (0, l.F)({ params: i, logger: r, context: 'useSendEventOnBlockLoaded' });
                        n && ((0, o.uY)(t.evgenInstance, n), (e.current = !0));
                    }, [t, h, C, I, A, T, w, N, j, P, L, k, R, O, r, g, y, S]);
                };
        },
        61912: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => h });
            var i = r(25839),
                l = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(36619),
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
                C = r.n(x);
            let h = (0, o.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: o } = (0, v.g)(),
                    x = (0, f.Z)(t.url),
                    g = (0, m.N)(),
                    y = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(h, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    S = (0, c.c)((e) => {
                        (o.modal.isOpened && o.modal.close(), g({ to: s.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, l.$)(C().root, r),
                            onClick: S,
                            'data-test-id': a.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(_.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: C().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        y,
                    ],
                });
            });
        },
        62926: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => v });
            var i = r(25839),
                l = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(39004),
                a = r(74245),
                c = r(61493),
                d = r(49656),
                u = r(66738),
                _ = r(27954),
                p = r(60924),
                m = r(92870),
                f = r.n(m);
            let v = (0, o.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: o, containerClassName: m, variant: v, size: x = 'xxxs', ...C } = e,
                    { formatMessage: h } = (0, s.A)(),
                    {
                        settings: { isMobile: g },
                    } = (0, _.g)(),
                    [y, S] = (0, n.useState)(null),
                    E = (0, d.L)(() => {
                        switch (v) {
                            case a.JU.E:
                                return 'explicit';
                            case a.JU.AGE_12:
                            case a.JU.AGE_16:
                            case a.JU.AGE_18:
                                return 'adult';
                            case a.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    A = (0, n.useMemo)(() => h({ id: 'extra-explicit.explicit-mark' }), [h]);
                (0, n.useEffect)(() => {
                    r && r().then(S);
                }, [r, o]);
                let I = (null == y ? void 0 : y.join('\n')) || '',
                    T = !!(null == y ? void 0 : y.length) && !g,
                    b = I.length > 0 ? I : A;
                return (0, i.jsx)(p.k, {
                    description: I,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, i.jsx)('span', {
                        className: m,
                        // for PulseSync: BEGIN render the S badge for substituted tracks
                        children:
                            v === a.JU.SUBSTITUTED
                                ? (0, i.jsxs)('svg', {
                                      className: (0, l.$)(f().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': b,
                                      style: { width: 'var(--ym-icon-size-'.concat(x, ')'), height: 'var(--ym-icon-size-'.concat(x, ')') },
                                      ...C,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                          (0, i.jsx)('text', {
                                              x: '8',
                                              y: '9',
                                              fill: 'currentColor',
                                              fontSize: '7',
                                              fontWeight: '700',
                                              textAnchor: 'middle',
                                              dominantBaseline: 'middle',
                                              children: 'S',
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)(u.I, {
                                      className: (0, l.$)(f().explicitMark, t),
                                      'aria-label': b,
                                      variant: E,
                                      size: x,
                                      ...C,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                  }),
                        // for PulseSync: END render the S badge for substituted tracks
                    }),
                });
            });
        },
        63896: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => l });
            var i = r(74631);
            let l = () =>
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
                l = r(17850),
                o = r(59450),
                n = r(71035),
                s = r(20258),
                a = r(26742),
                c = r(25488),
                d = r(97952),
                u = r(10764),
                _ = r(72594),
                p = r(84e3);
            let m = (e) => {
                let t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: m } = (0, d.$)(),
                    { tabId: f, tabPos: v, isTabSelectedByDefault: x } = (0, _.R)(),
                    { blockType: C, blockId: h, blockPosX: g, blockPosY: y, mainObjectType: S, mainObjectId: E } = (0, a.N)(),
                    { objectsCount: A, objectType: I, objectId: T, objectPosX: b, objectPosY: O } = (0, c.J)(),
                    R = (0, p.U)(),
                    { skeleton: L } = (0, u.b)();
                return (0, n.c)((o) => {
                    if (!t || !m || !s.xK.includes(m)) return;
                    let n = {
                        hash: r,
                        pageId: m,
                        entityType: C,
                        entityId: h,
                        entityPosX: g,
                        entityPosY: y,
                        objectsCount: A,
                        viewUuid: e,
                        objectType: I,
                        objectId: T,
                        objectPosX: b,
                        objectPosY: O,
                    };
                    (s.qG.includes(m) && ((n.tabId = f), (n.tabPos = v), (n.isTabSelectedByDefault = x)),
                        L && (n.skeletonId = L),
                        S && (n.mainObjectType = S),
                        E && (n.mainObjectId = E));
                    let a = (0, i.F)({ params: n, logger: R, context: 'useSendEventOnClipShowedOrHidden' });
                    if (a) {
                        if (o) return void (0, l.Pf)(t.evgenInstance, a);
                        (0, l.nv)(t.evgenInstance, a);
                    }
                });
            };
        },
        65189: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => v });
            var i = r(67379),
                l = r(36619),
                o = r(17850),
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
                    { tabId: x, tabPos: C, isTabSelectedByDefault: h } = (0, m.R)(),
                    { skeleton: g } = (0, p.b)(),
                    { blockType: y, blockId: S, blockPosX: E, blockPosY: A, mainObjectType: I, mainObjectId: T } = (0, d.N)(),
                    { objectsCount: b, objectType: O, objectId: R, objectPosX: L, objectPosY: N } = (0, u.J)(),
                    j = (0, f.U)();
                return (0, s.c)(() => {
                    if (!t || !v || !c.xK.includes(v)) return;
                    let n = {
                        hash: r,
                        pageId: v,
                        entityType: y,
                        entityId: S,
                        entityPosX: E,
                        entityPosY: A,
                        objectId: R,
                        objectType: O,
                        objectPosX: L,
                        objectPosY: N,
                        objectsCount: b,
                        from: a.W[v],
                        to: l.AppScreen.VideoScreen,
                    };
                    (c.qG.includes(v) && ((n.tabId = x), (n.tabPos = C), (n.isTabSelectedByDefault = h)),
                        g && (n.skeletonId = g),
                        I && (n.mainObjectType = I),
                        T && (n.mainObjectId = T));
                    let s = (0, i.F)({ params: n, logger: j, context: 'useSendEventOnClipNavigated' });
                    s && e && (0, o.QS)(t.evgenInstance, s);
                });
            };
        },
        67560: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => s });
            var i = r(71035),
                l = r(27954),
                o = r(63896),
                n = r(28003);
            let s = () => {
                let { fullscreenVideoPlayer: e } = (0, l.g)(),
                    t = (0, o.p)();
                return (0, i.c)(function (r) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(r), e.setClipIndex(i), t((0, n.J)(r, i)), e.modal.open());
                });
            };
        },
        68215: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => o });
            var i = r(39004),
                l = r(38977);
            let o = (e) => {
                let { seconds: t, hours: r, minutes: o } = (0, l.e)(e),
                    { formatMessage: n } = (0, i.A)();
                return n({ id: 'time.hours-minutes-seconds' }, { hours: r, minutes: o, seconds: t });
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
        73208: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        76481: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: l = {}, ...o } = t,
                        n = e || 'Internal error';
                    (super(n, o), (this.message = n), (this.code = r), (this.data = l), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class l extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, l.prototype));
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
        78299: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => E });
            var i = r(25839),
                l = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(39004),
                a = r(8487);
            r(93588);
            var c = r(4071),
                d = r(66738),
                u = r(4254),
                _ = r(67379),
                p = r(36619),
                m = r(76945),
                f = r(59450),
                v = r(84e3),
                x = r(97952),
                C = r(89192),
                h = r(53712),
                g = r(15270),
                y = r(68854),
                S = r.n(y);
            let E = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: o } = (0, s.A)(),
                    y = o({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, f.st)(),
                        { hash: r } = (0, f.gf)(),
                        { pageId: i } = (0, x.$)(),
                        l = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !r || !i) return;
                        let o = (0, _.F)({
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
                            logger: l,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, m.z5)(t.evgenInstance, o);
                    }, [t, e, r, i, l]);
                })(y);
                let { sendRefreshEvent: E } = (function () {
                        let e = (0, f.st)(),
                            { hash: t } = (0, f.gf)(),
                            { pageId: r } = (0, x.$)(),
                            i = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let l = (0, _.F)({
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
                                l && (0, m.bv)(e.evgenInstance, l);
                            }, [e, t, r, i]),
                        };
                    })(),
                    A = (0, n.useCallback)(() => {
                        (E(), (window.location.href = h.Z.main.href));
                    }, [E]),
                    { contentRef: I } = (0, C.g)();
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(S().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(g.L, { withBackwardFallback: '/', className: (0, l.$)(S().navigation, { [S().navigation_desktop]: !I }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, l.$)(S().content, { [S().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(d.I, { className: S().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, l.$)(S().title, S().important), variant: 'h3', size: 'xs', children: y }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, l.$)(S().text, S().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: A,
                                    className: S().button,
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
        80986: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => _ });
            var i = r(25839),
                l = r(82298),
                o = r(74631),
                n = r(61493),
                s = r(9911),
                a = r(4071),
                c = r(66738),
                d = r(37922),
                u = r.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: p,
                        buttonSize: m = 'xxxs',
                        buttonVariant: f = 'outline',
                    } = e,
                    { swipeBackward: v, swipeForward: x, shouldBackwardButtonBeDisabled: C, shouldForwardButtonBeDisabled: h, shouldHideControls: g } = (0, s.Y)(t),
                    y = (0, o.useCallback)(
                        (e) => {
                            (v(), e.stopPropagation());
                        },
                        [v],
                    ),
                    S = (0, o.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(u().root, _),
                    'data-test-id': n.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(a.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, r, { [u().control_hidden]: g, [u().control_withSecondaryColor]: p }),
                            onClick: y,
                            size: m,
                            radius: 'round',
                            variant: f,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: C,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(a.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, d, { [u().control_hidden]: g, [u().control_withSecondaryColor]: p }),
                            onClick: S,
                            size: m,
                            radius: 'round',
                            variant: f,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: h,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => o });
            var i = r(36484),
                l = r(62562);
            let o = () => (0, l.N)().get(i.Zf);
        },
        85743: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => n });
            var i = r(74631),
                l = r(91879),
                o = r(32953);
            let n = () => {
                let { sendSearchFeedback: e, id: t, type: r, blockPosition: n, position: s } = (0, i.useContext)(o.N) || {};
                if (void 0 === t || void 0 === r || void 0 === n || void 0 === s) return {};
                let a = null == e ? void 0 : e.bind(null, { feedbackType: l.n.LIKE, id: t, type: r, blockPosition: n, position: s });
                return {
                    sendLikeSearchFeedback: a,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: l.n.NAVIGATE, id: t, type: r, blockPosition: n, position: s }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: l.n.PLAY, id: t, type: r, blockPosition: n, position: s }),
                };
            };
        },
        86869: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => c });
            var i,
                l = r(74631),
                o = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
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
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var o in ((i = {}), t)) 'key' !== o && (i[o] = t[o]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
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
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(2095)),
                            a = (e) => {
                                let { forwardRef: t, radius: r, variant: i = 'default', children: n, className: a, withShadow: c, style: d, ...u } = e;
                                return (0, l.jsx)('div', {
                                    className: (0, o.clsx)(
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
                        t.Paper = (0, n.forwardRef)((e, t) => (0, l.jsx)(a, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(l, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, s), r.exports);
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
            r.d(t, { X: () => l });
            var i = r(40207);
            let l = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: l } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: l, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        89728: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        91626: (e, t, r) => {
            'use strict';
            (r.d(t, { G: () => l }), r(77920));
            var i = r(76481);
            class l extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        91879: (e, t, r) => {
            'use strict';
            var i, l;
            (r.d(t, { n: () => l, o: () => i }),
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
                })(l || (l = {})));
        },
        91907: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => l });
            let i = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                l = (e, t) => {
                    let r = i(e, 3600),
                        l = i(e - 3600 * r, 60),
                        o = e - 3600 * r - 60 * l,
                        n = i(t || e, 3600) > 0,
                        s = [l, o];
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
            r.d(t, { GX: () => o.G, X1: () => i.X, m5: () => l.m });
            var i = r(77920),
                l = r(76481),
                o = r(91626);
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
        95314: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            var i = r(25839),
                l = r(74631),
                o = r(66192);
            let n = (e) => {
                let { objectId: t, objectPosX: r, objectPosY: n, objectPos: s, objectType: a, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    p = (0, l.useMemo)(
                        () => ({ objectId: t, objectPosX: r, objectPosY: n, objectPos: s, objectType: a, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, r, n, s, a, c, d, u],
                    );
                return (0, i.jsx)(o.l.Provider, { value: p, children: _ });
            };
        },
        95858: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => a });
            var i = r(25839),
                l = r(74631),
                o = r(59342),
                n = r(91886),
                s = r(13232);
            let a = (e) => {
                let { children: t } = e,
                    r = (0, l.useRef)({}),
                    a = (0, l.useRef)(
                        (0, n.Gv)(
                            (e) => {
                                let t = (0, n.L5)(e.target),
                                    i = r.current[t];
                                if (i) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, o.A)());
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
                    c = (0, l.useCallback)((e) => {
                        var t;
                        !r.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = a.current) || t.observe(e.elementRef.current), (r.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, l.useCallback)((e) => {
                        let t = r.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete r.current[e]);
                    }, []);
                (0, l.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = a.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, l.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
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
        98074: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => l });
            let i = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                l = (e) =>
                    i.reduce((t, r) => {
                        let { queryKey: i, resultKey: l } = r;
                        return ('string' == typeof e[i] && (t[l] = e[i]), t);
                    }, {});
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => I });
            var i = r(25839),
                l = r(82298),
                o = r(88204),
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
                    let { formatMessage: t, language: r, tld: i, year: l } = e;
                    return {
                        year: l,
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
                C = r.n(x),
                h = r(61493),
                g = r(4254),
                y = r(97522);
            let S = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(C().copyrights, t),
                        'data-test-id': h.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(y.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, l.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': h.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(g.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(y.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': h.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: C().list,
                                'data-test-id': h.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: l } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, i.jsx)(y.N, { target: '_blank', href: l, className: C().link, 'data-test-id': h.S7.FOOTER_LINK, children: r }),
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
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': h.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, l.$)(C().root, C().important, t),
                        'data-test-id': h.S7.FOOTER,
                        children: [(0, i.jsx)(E, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(S, { data: r.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, v.g)(),
                    { formatDate: l, formatMessage: o } = (0, n.A)(),
                    { language: s } = (0, f.h)(),
                    a = u({ formatMessage: o, language: s, tld: r.tld, year: m(l) });
                return (0, i.jsx)(S, { className: t, data: a });
            });
            let I = (0, o.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: o, location: p, user: x } = (0, v.g)(),
                    { formatDate: h, formatMessage: g } = (0, n.A)(),
                    { isEnabled: y } = null != (t = (0, a.P)()) ? t : {},
                    { language: S } = (0, f.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: i, language: l, tld: o, userRegion: n, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: i, language: l, userRegion: o } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, l) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, l) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, l) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, l) },
                                    p = [n, a, u];
                                return (r && 'ru' === o && p.push(s), p.push(_), p);
                            })({ formatMessage: r, isWebApplication: i, language: l, tld: o, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: r, language: l, tld: o, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: g,
                        isWebApplication: s.$3,
                        tld: p.tld,
                        language: S,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: m(h),
                    });
                return (0, i.jsx)(A, { className: (0, l.$)({ [C().root_withOffsetForDeeplink]: y }, r), data: E });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 1107, 2531, 6287, 6749, 1632, 7349, 8310, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 4245, 4361, 3269, 4163, 3246,
                3482, 6680, 6504, 8836, 820, 4434, 9430, 4475, 5056, 7358,
            ],
            () => e((e.s = 53173)),
        ),
            (_N_E = e.O()));
    },
]);
