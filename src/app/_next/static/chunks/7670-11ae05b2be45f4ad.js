'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7670],
    {
        1344: (e, t, r) => {
            r.d(t, { Z: () => l });
            let o = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                l = (e) =>
                    o.reduce((t, r) => {
                        let { queryKey: o, resultKey: l } = r;
                        return ('string' == typeof e[o] && (t[l] = e[o]), t);
                    }, {});
        },
        9630: (e, t, r) => {
            r.d(t, { G: () => l, e: () => n });
            var o = r(53548);
            let l = (0, o.createContext)(null);
            function n() {
                return (0, o.useContext)(l);
            }
        },
        15947: (e, t, r) => {
            r.d(t, { U: () => i });
            var o = r(35412),
                l = r(28166),
                n = r(97261);
            let a = [o.cy.HTTP, o.cy.HTTPS, o.cy.MAILTO, o.cy.TEL, l.Lz],
                i = (e, t, r) => {
                    let i;
                    try {
                        i = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let s = (0, o.Rj)(e, { allowedProtocols: new Set([...a, i.protocol]), baseUrl: i.href });
                    return s.isAllowed
                        ? s.url.protocol === l.Lz
                            ? { type: n.I.DEEPLINK, href: e }
                            : '_blank' !== r && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(s.url, i)
                              ? { type: n.I.INTERNAL, href: e }
                              : { type: n.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16704: (e, t, r) => {
            r.d(t, { D: () => p });
            var o = r(88800),
                l = r(84961),
                n = r(53548),
                a = r(2058),
                i = r(33979),
                s = r(17392),
                u = r(29993),
                d = r(96817),
                c = r(52300);
            let _ = (0, l.PA)((e) => {
                    let {
                            iconSize: t,
                            className: r,
                            size: l,
                            variant: n = 'default',
                            isPlaying: _ = !1,
                            onClick: p,
                            iconClassName: f,
                            disabled: T,
                            color: S,
                            buttonVariant: A = 'text',
                            children: I,
                            radius: y = 'round',
                            withHover: E,
                            withRipple: R = !1,
                            ariaDescribedBy: m,
                            forwardRef: L,
                            tabIndex: v,
                            ariaHidden: C,
                            shouldSendAnalyticsOnPlayClick: O,
                        } = e,
                        N = (0, i.g)(),
                        { formatMessage: g } = (0, a.A)(),
                        b = ''.concat(_ ? 'pause' : 'play').concat('filled' === n ? '_filled' : ''),
                        D = _ ? s.S7.PAUSE_BUTTON : s.S7.PLAY_BUTTON,
                        P = g(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        x = (0, u.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == p || p(e), O && !_ && N());
                        });
                    return (0, o.jsx)(d.$, {
                        className: r,
                        variant: A,
                        color: S,
                        radius: y,
                        size: l,
                        flexIcon: !0,
                        withRipple: R,
                        'aria-label': P,
                        onClick: x,
                        icon: (0, o.jsx)(c.I, { variant: b, size: t, className: f }),
                        disabled: T,
                        withHover: E,
                        'aria-describedby': m,
                        ref: L,
                        tabIndex: v,
                        'aria-hidden': C,
                        'data-test-id': D,
                        children: I,
                    });
                }),
                p = (0, n.forwardRef)((e, t) => (0, o.jsx)(_, { forwardRef: t, ...e }));
        },
        17610: (e, t, r) => {
            r.d(t, { ZI: () => _, m_: () => c });
            var o,
                l = r(87819),
                n = r(68211),
                a = r(53548),
                i = {
                    5881: (e, t, r) => {
                        function o() {
                            for (var e, t, r = 0, o = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            o,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (o = e(t[r])) && (l && (l += ' '), (l += o));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        (r.r(t), r.d(t, { clsx: () => o, default: () => l }));
                        let l = o;
                    },
                    4295: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => o }));
                        let o = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => o }));
                        let o = {
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
                        (r.r(t), r.d(t, { default: () => o }));
                        let o = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var l = null;
                            if ((void 0 !== o && (l = '' + o), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((o = {}), t)) 'key' !== n && (o[n] = t[n]);
                            else o = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    853: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0));
                        let o = r(4377),
                            l = r(810),
                            n = r(1964),
                            a = r(2660),
                            i = r(3343),
                            s = r(1229);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: r, children: u, referenceRef: d, ...c } = e,
                                [_, p] = Array.isArray(u) ? u : [u],
                                f = (0, s.useTooltip)(c),
                                T = (0, l.useId)(),
                                S = (0, l.useId)(),
                                A = (0, l.useId)(),
                                I = (0, n.useMergeRefs)([f.refs.setReference, d]);
                            return (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, l.cloneElement)(_, {
                                        ref: I,
                                        ...(t ? { 'aria-describedby': T } : {}),
                                        ...f.getReferenceProps(),
                                        ...(0, a.getDataAttrFromProps)(c),
                                        key: S,
                                    }),
                                    f.context.open
                                        ? (0, l.cloneElement)(null != p ? p : (0, o.jsx)(i.TooltipContent, {}), {
                                              ref: f.refs.setFloating,
                                              style: { ...f.floatingStyles, visibility: f.referenceHidden ? 'hidden' : 'visible' },
                                              text: r,
                                              arrow: f.arrow,
                                              ...(t ? { id: T } : {}),
                                              ...f.getFloatingProps(),
                                              key: A,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3343: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0));
                        let l = r(4377),
                            n = r(5881),
                            a = r(810),
                            i = r(1964),
                            s = r(3412),
                            u = o(r(4295));
                        ((t.TooltipContentComponent = (e) => {
                            let { className: t, children: r, arrow: o, rootNode: d, forwardRef: c, text: _, ...p } = e;
                            return (0, l.jsx)(i.FloatingPortal, {
                                root: d,
                                children: (0, l.jsxs)('div', {
                                    className: (0, n.clsx)(u.default.root, t),
                                    ref: c,
                                    ...p,
                                    children: [
                                        (0, a.isValidElement)(o) && o,
                                        (0, l.jsx)(s.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: u.default.text,
                                            children: null != r ? r : _,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, a.forwardRef)((e, r) => (0, l.jsx)(t.TooltipContentComponent, { forwardRef: r, ...e }))));
                    },
                    1229: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0));
                        let o = r(4377),
                            l = r(810),
                            n = r(1964),
                            a = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: r = 'top',
                                    open: i,
                                    onOpenChange: s,
                                    isHoverEnabled: u = !0,
                                    isFocusEnabled: d = !0,
                                    offsetOptions: c,
                                    flipOptions: _ = {},
                                    shiftOptions: p = {},
                                    hoverSettings: f = a,
                                    enabled: T = !0,
                                    arrowProps: S,
                                } = e,
                                [A, I] = (0, l.useState)(t),
                                y = (0, l.useRef)(null),
                                E = null != i ? i : A,
                                R = null != s ? s : I,
                                m = (0, n.useFloating)({
                                    placement: r,
                                    open: E,
                                    onOpenChange: R,
                                    whileElementsMounted: n.autoUpdate,
                                    middleware: [
                                        (0, n.offset)(c),
                                        (0, n.flip)({ crossAxis: r.includes('-'), ..._ }),
                                        (0, n.shift)(p),
                                        (0, n.arrow)({ element: y }),
                                        (0, n.hide)(),
                                    ],
                                }),
                                L = m.context,
                                v = (0, n.useHover)(L, { move: !1, enabled: u && T, ...f }),
                                C = (0, n.useFocus)(L, { enabled: d && T }),
                                O = (0, n.useDismiss)(L),
                                N = (0, n.useRole)(L, { role: 'tooltip' }),
                                g = (0, n.useInteractions)([v, C, O, N]),
                                b = (0, l.useMemo)(() => {
                                    if (S) return (0, o.jsx)(n.FloatingArrow, { ref: y, context: m.context, ...S });
                                }, [S, m.context]);
                            return (0, l.useMemo)(() => {
                                var e;
                                return { open: E, setOpen: R, arrow: b, referenceHidden: null == (e = m.middlewareData.hide) ? void 0 : e.referenceHidden, ...g, ...m };
                            }, [E, R, b, g, m]);
                        };
                    },
                    3412: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let l = r(4377),
                            n = r(5881),
                            a = r(810),
                            i = r(5987),
                            s = o(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: o = 'text', size: a = 's', className: u, children: d, weight: c = 'medium', ..._ } = e;
                            return (0, l.jsx)(i.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, n.clsx)(s.default.root, s.default['root_'.concat(o, '_').concat(a)], s.default['root_weight_'.concat(c)], u),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, a.forwardRef)((e, r) => (0, l.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = r(4377),
                            n = r(5881),
                            a = r(810),
                            i = o(r(61));
                        function s(e) {
                            let { forwardRef: t, style: r, className: o, children: a, variant: s, lineClamp: u, ...d } = e,
                                c = u && 'string' == typeof a ? a : void 0;
                            return (0, l.jsx)(s, {
                                style: { ...r, WebkitLineClamp: u },
                                ref: t,
                                title: c,
                                className: (0, n.clsx)(
                                    i.default.root,
                                    { [i.default.root_clamp]: u && u > 0, [i.default.root_clamp_oneline]: u && 1 === u, [i.default.root_clamp_multiline]: u && u > 1 },
                                    o,
                                ),
                                ...d,
                                children: a,
                            });
                        }
                        ((t.TypographyComponent = s), (t.Typography = (0, a.forwardRef)((e, t) => (0, l.jsx)(s, { forwardRef: t, ...e }))));
                    },
                    1964: (e) => {
                        e.exports = l;
                    },
                    2660: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = o || (o = r.t(a, 2));
                    },
                },
                s = {};
            function u(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (i[e].call(r.exports, r, r.exports, u), r.exports);
            }
            ((u.d = (e, t) => {
                for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (u.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var d = {};
            (() => {
                (Object.defineProperty(d, 'X$', { value: !0 }), (d._v = d.u = void 0));
                var e = u(853);
                Object.defineProperty(d, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = u(3343);
                Object.defineProperty(d, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var c = d.u,
                _ = d._v;
            d.X$;
        },
        28166: (e, t, r) => {
            r.d(t, { Lz: () => o, ov: () => l });
            let o = ''.concat('yandexmusic', ':'),
                l = ''.concat(o, '//');
        },
        39079: (e, t, r) => {
            r.d(t, { D: () => i });
            var o = r(29993),
                l = r(7123),
                n = r(72288),
                a = r(9630);
            let i = (e) => {
                let { playContextParams: t, entityId: r, playbackId: i, sonataState: s } = e,
                    u = (0, a.e)(),
                    { sonataState: d } = (0, n.g)(),
                    c = s || d,
                    _ = !1,
                    p = !1,
                    { contextData: f } = t,
                    {
                        type: T,
                        meta: { id: S },
                    } = f,
                    A = c.contextId === String(S) && T === c.contextType;
                if (r) {
                    var I;
                    _ = r === (null == (I = c.entityMeta) ? void 0 : I.idWithContext);
                } else _ = A;
                return (
                    (p = _ && c.status === l.MT.PLAYING),
                    {
                        isPlaying: p,
                        isCurrent: _,
                        togglePlay: (0, o.c)(() => {
                            var e;
                            if (!u) return Promise.resolve();
                            let o = null == (e = c.entityMeta) ? void 0 : e.idWithContext;
                            return void 0 !== r && r === o ? u.togglePause(i) : u.playContext(t, i);
                        }),
                        restartPlay: (0, o.c)(() => {
                            null == u || u.setProgress(0, i);
                        }),
                    }
                );
            };
        },
        55693: (e, t, r) => {
            r.d(t, { z: () => a });
            var o = r(53548),
                l = r(63765),
                n = r(91087);
            let a = () => {
                let { sendSearchFeedback: e, id: t, type: r, blockPosition: a, position: i } = (0, o.useContext)(n.N) || {};
                if (void 0 === t || void 0 === r || void 0 === a || void 0 === i) return {};
                let s = null == e ? void 0 : e.bind(null, { feedbackType: l.n.LIKE, id: t, type: r, blockPosition: a, position: i });
                return {
                    sendLikeSearchFeedback: s,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: l.n.NAVIGATE, id: t, type: r, blockPosition: a, position: i }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: l.n.PLAY, id: t, type: r, blockPosition: a, position: i }),
                };
            };
        },
        58217: (e, t, r) => {
            r.d(t, { l: () => c });
            var o = r(53548),
                l = r(54020),
                n = r(29993),
                a = r(4086),
                i = r(41928),
                s = r(72288),
                u = r(85587),
                d = r(15253);
            let c = (e) => {
                let {
                        entity: t,
                        entityType: r,
                        getStorageKey: c,
                        callback: _,
                        onAfterHandled: p,
                        onBeforeHandle: f,
                        onReject: T,
                        modalBehavior: S,
                        preventDefaultWhenSafe: A,
                    } = e,
                    {
                        disclaimerModalState: I,
                        modals: { disclaimerModal: y },
                    } = (0, s.g)(),
                    E = (0, o.useRef)(String((0, l.A)())),
                    R = (0, o.useRef)(!1),
                    m = (0, o.useRef)(!1),
                    L = (0, o.useRef)(0),
                    v = (0, o.useRef)(!0),
                    C = (0, i.N)().get(a.U2),
                    O = (0, n.c)((e) => {
                        (A && (null == e || e.preventDefault()), _ && _(e), p && p());
                    });
                return (
                    (0, o.useEffect)(() => {
                        I.isUnsafeDisclaimerConfirmed && I.id === E.current && !R.current && (O(), (R.current = !0));
                    }, [I.id, I.isUnsafeDisclaimerConfirmed, O]),
                    (0, o.useEffect)(() => {
                        I.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && I.setModalData(t.resolvedModalData);
                    }, [I, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, o.useEffect)(
                        () => () => {
                            v.current = !1;
                        },
                        [],
                    ),
                    (0, n.c)(async (e) => {
                        if (!m.current) {
                            m.current = !0;
                            try {
                                if ((null == f || f(e), t)) {
                                    var o, l, n;
                                    let a = t.getDisclaimerEntityRef(r),
                                        i = null != (o = null == c ? void 0 : c(t, a)) ? o : ''.concat(a.entityType, '_').concat(a.entityId),
                                        s = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = C.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(i)) return void O(e);
                                    }
                                    if (s) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && I.setType(u.Z.UNSAFE),
                                            I.setDisclaimerRejectHandler(null != T ? T : null),
                                            I.setId(E.current),
                                            I.setEntityKey(i),
                                            I.setCurrentEntityRef(a.entityType, a.entityId),
                                            I.setShouldHistoryBack(!!(null == S ? void 0 : S.shouldHistoryBack)),
                                            I.setShouldCloseModalOnOutsidePress(null == (l = null == S ? void 0 : S.closeOnOutside) || l),
                                            I.setShouldCloseModalOnEscape(null == (n = null == S ? void 0 : S.closeOnEscape) || n),
                                            (L.current += 1));
                                        let r = L.current,
                                            o = await t.getModalDisclaimerData();
                                        if (L.current !== r || !1 === v.current) return;
                                        (I.setModalData(null != o ? o : null), (R.current = !1), y.open());
                                        return;
                                    }
                                    (A && (null == e || e.preventDefault()), O(e));
                                    return;
                                }
                                (A && (null == e || e.preventDefault()), O(e));
                            } finally {
                                m.current = !1;
                            }
                        }
                    })
                );
            };
        },
        63765: (e, t, r) => {
            var o, l;
            (r.d(t, { n: () => l, o: () => o }),
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
                })(o || (o = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(l || (l = {})));
        },
        64284: (e, t, r) => {
            r.d(t, { U: () => o });
            var o = (function (e) {
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
        78940: (e, t, r) => {
            (r.d(t, { Z: () => s }), r(30282));
            var o = r(58390),
                l = r(29993),
                n = r(67174),
                a = r(15947),
                i = r(97261);
            let s = (e) => {
                let t = (0, o.useRouter)(),
                    { href: r, target: s } = (0, n.u)(e);
                return (0, l.c)((e) => {
                    let o = (0, a.U)(r, window.location.href, s);
                    if (!o) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (o.type === i.I.EXTERNAL || o.type === i.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: r } = (0, n.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, r);
                              })(o.href)
                            : t.push(o.href));
                });
            };
        },
        79070: (e, t, r) => {
            r.d(t, { L: () => l });
            var o = {};
            (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useReturnValue = void 0), (o.useReturnValue = (e) => e()), o.__esModule);
            var l = o.useReturnValue;
        },
        84384: (e, t, r) => {
            r.d(t, { f: () => c });
            var o = r(53548);
            r(30282);
            var l = r(64543),
                n = r(58390),
                a = r(64284),
                i = r(18593),
                s = r(98427),
                u = r(1344);
            let d = [a.U.TRAILER],
                c = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                r = null == e ? void 0 : e.blockId,
                                n = null == e ? void 0 : e.pageEntityId,
                                { screen: a, block: i } = (0, l.j)(),
                                s = null == a ? void 0 : a.pageIdForFrom,
                                u = null == a ? void 0 : a.mainObjectId,
                                d = null == i ? void 0 : i.blockId;
                            return (0, o.useMemo)(() => ({ pageId: null != t ? t : s, blockId: null != r ? r : d, pageEntityId: null != n ? n : u }), [r, d, t, n, s, u]);
                        })(e),
                        r = ((e) => {
                            let { pageId: t, blockId: r } = e;
                            return (0, o.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), r && e.push(r.toLowerCase()), e.push('default'), e.join('-'));
                            }, [r, t]);
                        })(t),
                        a = ((e) => {
                            let { pageId: t, blockId: r, pageEntityId: l, contextType: a, contextId: c, utmForPageIds: _ } = e,
                                p = (0, n.useSearchParams)();
                            return (0, o.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: r, pageEntityId: o, utmForPageIds: l, contextId: n, contextType: a, blockId: c } = e,
                                            _ = t && Object.fromEntries(t),
                                            p = ((e) => {
                                                switch (e) {
                                                    case s.b.ALBUM:
                                                    case s.b.PROMOLANDING_ALBUM:
                                                    case s.b.AUDIOBOOK:
                                                    case s.b.PODCAST:
                                                        return i.K.Album;
                                                    case s.b.ARTIST:
                                                    case s.b.ARTIST_TRACKS:
                                                    case s.b.ARTIST_ALBUMS:
                                                    case s.b.ARTIST_DISCOGRAPHY:
                                                        return i.K.Artist;
                                                    case s.b.PLAYLIST:
                                                        return i.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(r);
                                        return !p || !_ || !o || d.includes(c)
                                            ? null
                                            : (Array.isArray(l) ? l.map((e) => String(e)).includes(String(o)) : !!n && p === a && String(n) === String(o)) && _
                                              ? (0, u.Z)(_)
                                              : null;
                                    })({ searchParams: p, pageId: t, pageEntityId: l, utmForPageIds: _, contextId: c, contextType: a, blockId: r }),
                                [p, t, l, c, a, r, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, o.useMemo)(() => ({ from: r, utmLink: a || void 0 }), [r, a]);
                };
        },
        85587: (e, t, r) => {
            r.d(t, { Z: () => o, n: () => l });
            var o = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                l = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        91087: (e, t, r) => {
            r.d(t, { N: () => o });
            let o = (0, r(53548).createContext)(null);
        },
        97261: (e, t, r) => {
            r.d(t, { I: () => o });
            var o = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        98427: (e, t, r) => {
            r.d(t, { b: () => o });
            var o = (function (e) {
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
        },
    },
]);
