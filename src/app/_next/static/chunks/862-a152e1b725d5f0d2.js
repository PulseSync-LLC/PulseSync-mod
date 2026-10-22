(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [862],
    {
        2144: (e, t, n) => {
            'use strict';
            n.d(t, { C: () => v });
            var r = n(25839),
                o = n(88204),
                i = n(74631),
                a = n(8487),
                l = n(61493),
                s = n(66738),
                u = n(10820),
                c = n(69084),
                d = n(27954),
                f = n(5668);
            let p = {
                    album: (0, r.jsx)(a.A, { id: 'vibe-actions.vibe-by-album' }),
                    artist: (0, r.jsx)(a.A, { id: 'vibe-actions.vibe-by-artist' }),
                    playlist: (0, r.jsx)(a.A, { id: 'vibe-actions.vibe-by-playlist' }),
                    track: (0, r.jsx)(a.A, { id: 'vibe-actions.vibe-by-track' }),
                },
                v = (0, o.PA)((e) => {
                    let { variant: t, className: n, onClick: o, disabled: a, onOpenMenuChange: v } = e,
                        {
                            settings: { isMobile: b },
                            user: m,
                            freeAccess: h,
                        } = (0, d.g)(),
                        g = h.isVibeStartRestricted && !b,
                        y = (0, i.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: i, popoverText: d } = e;
                                return (0, r.jsxs)(u.Dr, {
                                    onClick: o,
                                    disabled: a || i || !m.isAuthorized,
                                    className: n,
                                    icon: (0, r.jsx)(s.I, { variant: 'vibe', size: 'xxs' }),
                                    'data-test-id': l.S7.CONTEXT_MENU_VIBE_BUTTON,
                                    children: [p[t], ' ', (0, r.jsx)(c.q, { children: d })],
                                });
                            },
                            [o, a, n, t, m.isAuthorized],
                        );
                    return (0, r.jsx)(f.S, {
                        isNested: !0,
                        isEnabled: g,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t,
                        renderChildren: y,
                        onOpenMenuChange: v,
                    });
                });
        },
        5668: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => p });
            var r = n(25839),
                o = n(74631),
                i = n(39004),
                a = n(61493),
                l = n(56829),
                s = n(4071),
                u = n(4254),
                c = n(27954),
                d = n(44851),
                f = n(35514);
            let p = (e) => {
                let { textVariant: t, vibeTextVariant: n, albumTextVariant: p, buttonText: v, customButtons: b, onOpenMenuChange: m, ...h } = e,
                    g = (0, o.useId)(),
                    { formatMessage: y } = (0, i.A)(),
                    {
                        paywall: { modal: w },
                    } = (0, c.g)(),
                    E = y({ id: 'payment.try-button' }),
                    O = (0, o.useMemo)(() => {
                        switch (n) {
                            case d.I.ALBUM:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-album' }, { br: '\n', nbsp: ' ' });
                            case d.I.ARTIST:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-artist' }, { br: '\n', nbsp: ' ' });
                            case d.I.PLAYLIST:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-playlist' }, { br: '\n', nbsp: ' ' });
                            case d.I.TRACK:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-track' }, { br: '\n', nbsp: ' ' });
                            case d.I.GENRE:
                            case d.I.MICRO_GENRE:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-genre' }, { br: '\n', nbsp: ' ' });
                            case d.I.MOOD:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-mood' }, { br: '\n', nbsp: ' ' });
                            case d.I.ACTIVITY:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-activity' }, { br: '\n', nbsp: ' ' });
                            default:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe' }, { br: '\n', nbsp: ' ' });
                        }
                    }, [n, y]),
                    S = (0, o.useMemo)(() => {
                        switch (p) {
                            case l._.SINGLE:
                                return y({ id: 'entity-names.single-available-with-plus' });
                            case l._.PODCAST:
                                return y({ id: 'non-music.podcast-available-with-plus' });
                            case l._.AUDIOBOOK:
                                return y({ id: 'non-music.book-available-with-plus' });
                            case l._.FAIRY_TALE:
                                return y({ id: 'non-music.fairy-tale-available-with-plus' });
                            default:
                                return y({ id: 'entity-names.album-available-with-plus' });
                        }
                    }, [p, y]),
                    x = (0, o.useMemo)(() => {
                        switch (t) {
                            case 'fullTracks':
                                return y({ id: 'onboarding.try-plus-to-listen-full' }, { br: '\n', nbsp: ' ' });
                            case 'highQuality':
                                return y({ id: 'onboarding.try-plus-to-enable-high-quality' }, { br: '\n', nbsp: ' ' });
                            case 'sync-lyrics':
                                return y({ id: 'onboarding.try-plus-to-view-sync-lyrics' }, { br: '\n' });
                            case 'collectionFreemium':
                                return y({ id: 'onboarding.try-plus-to-open-collection' }, { nbsp: ' ' });
                            case 'vibe':
                                return O;
                            case 'album':
                                return S;
                            default:
                                return '';
                        }
                    }, [t, y, O, S]),
                    T = (0, o.useCallback)(() => {
                        (w.open(), null == m || m(!1));
                    }, [w, m]),
                    P = (0, o.useMemo)(
                        () => [
                            (0, r.jsx)(
                                s.$,
                                { color: 'plus', size: 'xxs', radius: 'xxxl', onClick: T, children: (0, r.jsx)(u.HL, { variant: 'div', size: 'm', children: v || E }) },
                                g,
                            ),
                        ],
                        [g, T, v, E],
                    );
                return (0, r.jsx)(f.z, {
                    contentElement: (0, r.jsx)(u.HL, { variant: 'div', size: 'l', weight: 'bold', children: x }),
                    renderChildrenText: x,
                    buttons: null != b ? b : P,
                    contentDataTestId: a.S7.BUY_PLUS_POPOVER,
                    ...h,
                });
            };
        },
        6304: (e, t, n) => {
            'use strict';
            n.d(t, { WithOffline: () => s });
            var r = n(88204),
                o = n(36484),
                i = n(62562),
                a = n(79645),
                l = n(27954);
            let s = (0, r.PA)((e) => {
                let { fallback: t, children: n } = e,
                    r = (0, i.N)(),
                    { slam: s } = (0, l.g)(),
                    u = r.get(o.U2);
                return (0, a.g)(u) || s.isOfflineModeEnabled ? n : t;
            });
        },
        12039: (e) => {
            e.exports = { message: 'NotificationCopy_message__zVlYi', icon: 'NotificationCopy_icon__FTmM9', title: 'NotificationCopy_title__UEiU0' };
        },
        14240: (e, t, n) => {
            'use strict';
            (n.d(t, { b: () => u }), n(93588));
            var r = n(89288),
                o = n(36484),
                i = n(62562),
                a = n(83065),
                l = (function (e) {
                    return ((e.SOURCE = 'utm_source'), (e.MEDIUM = 'utm_medium'), e);
                })(l || {});
            let s = { utm_source: 'desktop', utm_medium: 'copy_link' },
                u = function (e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) n[l - 1] = arguments[l];
                    let [u] = n,
                        { params: c } = null != u ? u : {},
                        d = { ...s, ...(null == u ? void 0 : u.query) },
                        f = (0, i.N)().get(o.V4),
                        p = (0, a._)(f.webHost),
                        { href: v } = (0, r.no)(String(e), { params: c, query: d, options: { host: 'https://'.concat(p) } }),
                        { href: b } = (0, r.no)(String(e), { params: c, query: d });
                    return { shareLink: v, pathname: b };
                };
        },
        23206: (e) => {
            e.exports = {
                root: 'PopoverWithActions_root__g2_xV',
                arrow: 'PopoverWithActions_arrow__LOVdU',
                popoverContent: 'PopoverWithActions_popoverContent__uPXzG',
                content: 'PopoverWithActions_content__FwBlK',
                closeButton: 'PopoverWithActions_closeButton__c5mHz',
                buttons: 'PopoverWithActions_buttons__kiIc3',
                button: 'PopoverWithActions_button__XDFYY',
            };
        },
        24591: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => r });
            let r = (e) => String([...e].sort());
        },
        35262: (e, t, n) => {
            'use strict';
            n.d(t, { AM: () => d, hl: () => f });
            var r,
                o = n(33049),
                i = n(6274),
                a = n(74631),
                l = {
                    132: (e, t, n) => {
                        function r(e) {
                            var t;
                            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
                        }
                        (n.r(t),
                            n.d(t, {
                                activeElement: () => z,
                                contains: () => B,
                                createGridCellMap: () => ev,
                                disableFocusInside: () => eS,
                                enableFocusInside: () => ex,
                                findNonDisabledListIndex: () => ef,
                                getDeepestNode: () => Z,
                                getDocument: () => W,
                                getFloatingFocusElement: () => q,
                                getGridCellIndexOfCorner: () => eb,
                                getGridCellIndices: () => em,
                                getGridNavigatedIndex: () => ep,
                                getMaxListIndex: () => ed,
                                getMinListIndex: () => ec,
                                getNextTabbable: () => ew,
                                getNodeAncestors: () => Q,
                                getNodeChildren: () => $,
                                getPlatform: () => M,
                                getPreviousTabbable: () => eE,
                                getTabbableOptions: () => eg,
                                getTarget: () => H,
                                getUserAgent: () => _,
                                isAndroid: () => k,
                                isDifferentGridRow: () => es,
                                isEventTargetWithin: () => V,
                                isIndexOutOfListBounds: () => eu,
                                isJSDOM: () => L,
                                isListIndexDisabled: () => eh,
                                isMac: () => N,
                                isMouseLikePointerType: () => er,
                                isOutsideEvent: () => eO,
                                isReactEvent: () => ee,
                                isRootElement: () => Y,
                                isSafari: () => j,
                                isTypeableCombobox: () => G,
                                isTypeableElement: () => X,
                                isVirtualClick: () => et,
                                isVirtualPointerEvent: () => en,
                                matchesFocusVisible: () => K,
                                stopEvent: () => J,
                                useEffectEvent: () => el,
                                useLatestRef: () => ei,
                                useModernLayoutEffect: () => eo,
                            }));
                        var o = n(810);
                        let i = Math.floor;
                        var a =
                                'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
                            l = 'undefined' == typeof Element,
                            s = l ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                            u =
                                !l && Element.prototype.getRootNode
                                    ? function (e) {
                                          var t;
                                          return null == e || null == (t = e.getRootNode) ? void 0 : t.call(e);
                                      }
                                    : function (e) {
                                          return null == e ? void 0 : e.ownerDocument;
                                      },
                            c = function (e, t) {
                                void 0 === t && (t = !0);
                                var n,
                                    r = null == e || null == (n = e.getAttribute) ? void 0 : n.call(e, 'inert');
                                return '' === r || 'true' === r || (t && e && c(e.parentNode));
                            },
                            d = function (e) {
                                var t,
                                    n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, 'contenteditable');
                                return '' === n || 'true' === n;
                            },
                            f = function (e, t, n) {
                                if (c(e)) return [];
                                var r = Array.prototype.slice.apply(e.querySelectorAll(a));
                                return (t && s.call(e, a) && r.unshift(e), (r = r.filter(n)));
                            },
                            p = function (e, t, n) {
                                for (var r = [], o = Array.from(e); o.length;) {
                                    var i = o.shift();
                                    if (!c(i, !1))
                                        if ('SLOT' === i.tagName) {
                                            var l = i.assignedElements(),
                                                u = p(l.length ? l : i.children, !0, n);
                                            n.flatten ? r.push.apply(r, u) : r.push({ scopeParent: i, candidates: u });
                                        } else {
                                            s.call(i, a) && n.filter(i) && (t || !e.includes(i)) && r.push(i);
                                            var d = i.shadowRoot || ('function' == typeof n.getShadowRoot && n.getShadowRoot(i)),
                                                f = !c(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
                                            if (d && f) {
                                                var v = p(!0 === d ? i.children : d.children, !0, n);
                                                n.flatten ? r.push.apply(r, v) : r.push({ scopeParent: i, candidates: v });
                                            } else o.unshift.apply(o, i.children);
                                        }
                                }
                                return r;
                            },
                            v = function (e) {
                                return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
                            },
                            b = function (e) {
                                if (!e) throw Error('No node provided');
                                return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || d(e)) && !v(e) ? 0 : e.tabIndex;
                            },
                            m = function (e, t) {
                                var n = b(e);
                                return n < 0 && t && !v(e) ? 0 : n;
                            },
                            h = function (e, t) {
                                return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
                            },
                            g = function (e) {
                                return 'INPUT' === e.tagName;
                            },
                            y = function (e, t) {
                                for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
                            },
                            w = function (e) {
                                if (!e.name) return !0;
                                var t,
                                    n = e.form || u(e),
                                    r = function (e) {
                                        return n.querySelectorAll('input[type="radio"][name="' + e + '"]');
                                    };
                                if (void 0 !== window.CSS && 'function' == typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
                                else
                                    try {
                                        t = r(e.name);
                                    } catch (e) {
                                        return (
                                            console.error(
                                                'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
                                                e.message,
                                            ),
                                            !1
                                        );
                                    }
                                var o = y(t, e.form);
                                return !o || o === e;
                            },
                            E = function (e) {
                                return g(e) && 'radio' === e.type && !w(e);
                            },
                            O = function (e) {
                                var t,
                                    n,
                                    r,
                                    o,
                                    i,
                                    a,
                                    l,
                                    s = e && u(e),
                                    c = null == (t = s) ? void 0 : t.host,
                                    d = !1;
                                if (s && s !== e)
                                    for (
                                        d = !!(
                                            (null != (n = c) && null != (r = n.ownerDocument) && r.contains(c)) ||
                                            (null != e && null != (o = e.ownerDocument) && o.contains(e))
                                        );
                                        !d && c;
                                    )
                                        d = !!(null != (a = c = null == (i = s = u(c)) ? void 0 : i.host) && null != (l = a.ownerDocument) && l.contains(c));
                                return d;
                            },
                            S = function (e) {
                                var t = e.getBoundingClientRect(),
                                    n = t.width,
                                    r = t.height;
                                return 0 === n && 0 === r;
                            },
                            x = function (e, t) {
                                var n = t.displayCheck,
                                    r = t.getShadowRoot;
                                if ('full-native' === n && 'checkVisibility' in e)
                                    return !e.checkVisibility({
                                        checkOpacity: !1,
                                        opacityProperty: !1,
                                        contentVisibilityAuto: !0,
                                        visibilityProperty: !0,
                                        checkVisibilityCSS: !0,
                                    });
                                if ('hidden' === getComputedStyle(e).visibility) return !0;
                                var o = s.call(e, 'details>summary:first-of-type') ? e.parentElement : e;
                                if (s.call(o, 'details:not([open]) *')) return !0;
                                if (n && 'full' !== n && 'full-native' !== n && 'legacy-full' !== n) {
                                    if ('non-zero-area' === n) return S(e);
                                } else {
                                    if ('function' == typeof r) {
                                        for (var i = e; e;) {
                                            var a = e.parentElement,
                                                l = u(e);
                                            if (a && !a.shadowRoot && !0 === r(a)) return S(e);
                                            e = e.assignedSlot ? e.assignedSlot : a || l === e.ownerDocument ? a : l.host;
                                        }
                                        e = i;
                                    }
                                    if (O(e)) return !e.getClientRects().length;
                                    if ('legacy-full' !== n) return !0;
                                }
                                return !1;
                            },
                            T = function (e) {
                                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                                    for (var t = e.parentElement; t;) {
                                        if ('FIELDSET' === t.tagName && t.disabled) {
                                            for (var n = 0; n < t.children.length; n++) {
                                                var r = t.children.item(n);
                                                if ('LEGEND' === r.tagName) return !!s.call(t, 'fieldset[disabled] *') || !r.contains(e);
                                            }
                                            return !0;
                                        }
                                        t = t.parentElement;
                                    }
                                return !1;
                            },
                            P = function (e, t) {
                                return !(
                                    t.disabled ||
                                    c(t) ||
                                    (g(t) && 'hidden' === t.type) ||
                                    x(t, e) ||
                                    ('DETAILS' === t.tagName &&
                                        Array.prototype.slice.apply(t.children).some(function (e) {
                                            return 'SUMMARY' === e.tagName;
                                        })) ||
                                    T(t)
                                );
                            },
                            C = function (e, t) {
                                return !(E(t) || 0 > b(t)) && !!P(e, t);
                            },
                            I = function (e) {
                                var t = parseInt(e.getAttribute('tabindex'), 10);
                                return !!isNaN(t) || !!(t >= 0);
                            },
                            R = function (e) {
                                var t = [],
                                    n = [];
                                return (
                                    e.forEach(function (e, r) {
                                        var o = !!e.scopeParent,
                                            i = o ? e.scopeParent : e,
                                            a = m(i, o),
                                            l = o ? R(e.candidates) : i;
                                        0 === a ? (o ? t.push.apply(t, l) : t.push(i)) : n.push({ documentOrder: r, tabIndex: a, item: e, isScope: o, content: l });
                                    }),
                                    n
                                        .sort(h)
                                        .reduce(function (e, t) {
                                            return (t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e);
                                        }, [])
                                        .concat(t)
                                );
                            },
                            A = function (e, t) {
                                return R(
                                    (t = t || {}).getShadowRoot
                                        ? p([e], t.includeContainer, { filter: C.bind(null, t), flatten: !1, getShadowRoot: t.getShadowRoot, shadowRootFilter: I })
                                        : f(e, t.includeContainer, C.bind(null, t)),
                                );
                            };
                        function M() {
                            let e = navigator.userAgentData;
                            return null != e && e.platform ? e.platform : navigator.platform;
                        }
                        function _() {
                            let e = navigator.userAgentData;
                            return e && Array.isArray(e.brands)
                                ? e.brands
                                      .map((e) => {
                                          let { brand: t, version: n } = e;
                                          return t + '/' + n;
                                      })
                                      .join(' ')
                                : navigator.userAgent;
                        }
                        function j() {
                            return /apple/i.test(navigator.vendor);
                        }
                        function k() {
                            let e = /android/i;
                            return e.test(M()) || e.test(_());
                        }
                        function N() {
                            return M().toLowerCase().startsWith('mac') && !navigator.maxTouchPoints;
                        }
                        function L() {
                            return _().includes('jsdom/');
                        }
                        let D = 'data-floating-ui-focusable',
                            F = 'ArrowLeft',
                            U = 'ArrowRight';
                        function z(e) {
                            let t = e.activeElement;
                            for (; (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement) != null;) {
                                var n;
                                t = t.shadowRoot.activeElement;
                            }
                            return t;
                        }
                        function B(e, t) {
                            if (!e || !t) return !1;
                            let n = null == t.getRootNode ? void 0 : t.getRootNode();
                            if (e.contains(t)) return !0;
                            if (n && 'undefined' != typeof ShadowRoot && (n instanceof ShadowRoot || n instanceof r(n).ShadowRoot)) {
                                let n = t;
                                for (; n;) {
                                    if (e === n) return !0;
                                    n = n.parentNode || n.host;
                                }
                            }
                            return !1;
                        }
                        function H(e) {
                            return 'composedPath' in e ? e.composedPath()[0] : e.target;
                        }
                        function V(e, t) {
                            return null != t && ('composedPath' in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target));
                        }
                        function Y(e) {
                            return e.matches('html,body');
                        }
                        function W(e) {
                            return (null == e ? void 0 : e.ownerDocument) || document;
                        }
                        function X(e) {
                            return (
                                (e instanceof HTMLElement || e instanceof r(e).HTMLElement) &&
                                e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")
                            );
                        }
                        function G(e) {
                            return !!e && 'combobox' === e.getAttribute('role') && X(e);
                        }
                        function K(e) {
                            if (!e || L()) return !0;
                            try {
                                return e.matches(':focus-visible');
                            } catch (e) {
                                return !0;
                            }
                        }
                        function q(e) {
                            return e ? (e.hasAttribute(D) ? e : e.querySelector('[' + D + ']') || e) : null;
                        }
                        function $(e, t, n) {
                            return (
                                void 0 === n && (n = !0),
                                e
                                    .filter((e) => {
                                        var r;
                                        return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
                                    })
                                    .flatMap((t) => [t, ...$(e, t.id, n)])
                            );
                        }
                        function Z(e, t) {
                            let n,
                                r = -1;
                            return (
                                !(function t(o, i) {
                                    (i > r && ((n = o), (r = i)),
                                        $(e, o).forEach((e) => {
                                            t(e.id, i + 1);
                                        }));
                                })(t, 0),
                                e.find((e) => e.id === n)
                            );
                        }
                        function Q(e, t) {
                            var n;
                            let r = [],
                                o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
                            for (; o;) {
                                let t = e.find((e) => e.id === o);
                                ((o = null == t ? void 0 : t.parentId), t && (r = r.concat(t)));
                            }
                            return r;
                        }
                        function J(e) {
                            (e.preventDefault(), e.stopPropagation());
                        }
                        function ee(e) {
                            return 'nativeEvent' in e;
                        }
                        function et(e) {
                            return (
                                (0 === e.mozInputSource && !!e.isTrusted) ||
                                (k() && e.pointerType ? 'click' === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
                            );
                        }
                        function en(e) {
                            return (
                                !L() &&
                                ((!k() && 0 === e.width && 0 === e.height) ||
                                    (k() && 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && 'mouse' === e.pointerType) ||
                                    (e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && 'touch' === e.pointerType))
                            );
                        }
                        function er(e, t) {
                            let n = ['mouse', 'pen'];
                            return (t || n.push('', void 0), n.includes(e));
                        }
                        var eo = 'undefined' != typeof document ? o.useLayoutEffect : function () {};
                        function ei(e) {
                            let t = o.useRef(e);
                            return (
                                eo(() => {
                                    t.current = e;
                                }),
                                t
                            );
                        }
                        let ea = { ...o }.useInsertionEffect || ((e) => e());
                        function el(e) {
                            let t = o.useRef(() => {});
                            return (
                                ea(() => {
                                    t.current = e;
                                }),
                                o.useCallback(function () {
                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    return null == t.current ? void 0 : t.current(...n);
                                }, [])
                            );
                        }
                        function es(e, t, n) {
                            return Math.floor(e / t) !== n;
                        }
                        function eu(e, t) {
                            return t < 0 || t >= e.current.length;
                        }
                        function ec(e, t) {
                            return ef(e, { disabledIndices: t });
                        }
                        function ed(e, t) {
                            return ef(e, { decrement: !0, startingIndex: e.current.length, disabledIndices: t });
                        }
                        function ef(e, t) {
                            let { startingIndex: n = -1, decrement: r = !1, disabledIndices: o, amount: i = 1 } = void 0 === t ? {} : t,
                                a = n;
                            do a += r ? -i : i;
                            while (a >= 0 && a <= e.current.length - 1 && eh(e, a, o));
                            return a;
                        }
                        function ep(e, t) {
                            let { event: n, orientation: r, loop: o, rtl: a, cols: l, disabledIndices: s, minIndex: u, maxIndex: c, prevIndex: d, stopEvent: f = !1 } = t,
                                p = d;
                            if ('ArrowUp' === n.key) {
                                if ((f && J(n), -1 === d)) p = c;
                                else if (((p = ef(e, { startingIndex: p, amount: l, decrement: !0, disabledIndices: s })), o && (d - l < u || p < 0))) {
                                    let e = d % l,
                                        t = c % l,
                                        n = c - (t - e);
                                    p = t === e ? c : t > e ? n : n - l;
                                }
                                eu(e, p) && (p = d);
                            }
                            if (
                                ('ArrowDown' === n.key &&
                                    (f && J(n),
                                    -1 === d
                                        ? (p = u)
                                        : ((p = ef(e, { startingIndex: d, amount: l, disabledIndices: s })),
                                          o && d + l > c && (p = ef(e, { startingIndex: (d % l) - l, amount: l, disabledIndices: s }))),
                                    eu(e, p) && (p = d)),
                                'both' === r)
                            ) {
                                let t = i(d / l);
                                (n.key === (a ? F : U) &&
                                    (f && J(n),
                                    d % l != l - 1
                                        ? ((p = ef(e, { startingIndex: d, disabledIndices: s })),
                                          o && es(p, l, t) && (p = ef(e, { startingIndex: d - (d % l) - 1, disabledIndices: s })))
                                        : o && (p = ef(e, { startingIndex: d - (d % l) - 1, disabledIndices: s })),
                                    es(p, l, t) && (p = d)),
                                    n.key === (a ? U : F) &&
                                        (f && J(n),
                                        d % l != 0
                                            ? ((p = ef(e, { startingIndex: d, decrement: !0, disabledIndices: s })),
                                              o && es(p, l, t) && (p = ef(e, { startingIndex: d + (l - (d % l)), decrement: !0, disabledIndices: s })))
                                            : o && (p = ef(e, { startingIndex: d + (l - (d % l)), decrement: !0, disabledIndices: s })),
                                        es(p, l, t) && (p = d)));
                                let r = i(c / l) === t;
                                eu(e, p) && (p = o && r ? (n.key === (a ? U : F) ? c : ef(e, { startingIndex: d - (d % l) - 1, disabledIndices: s })) : d);
                            }
                            return p;
                        }
                        function ev(e, t, n) {
                            let r = [],
                                o = 0;
                            return (
                                e.forEach((e, i) => {
                                    let { width: a, height: l } = e,
                                        s = !1;
                                    for (n && (o = 0); !s;) {
                                        let e = [];
                                        for (let n = 0; n < a; n++) for (let r = 0; r < l; r++) e.push(o + n + r * t);
                                        (o % t) + a <= t && e.every((e) => null == r[e])
                                            ? (e.forEach((e) => {
                                                  r[e] = i;
                                              }),
                                              (s = !0))
                                            : o++;
                                    }
                                }),
                                [...r]
                            );
                        }
                        function eb(e, t, n, r, o) {
                            if (-1 === e) return -1;
                            let i = n.indexOf(e),
                                a = t[e];
                            switch (o) {
                                case 'tl':
                                    return i;
                                case 'tr':
                                    if (!a) return i;
                                    return i + a.width - 1;
                                case 'bl':
                                    if (!a) return i;
                                    return i + (a.height - 1) * r;
                                case 'br':
                                    return n.lastIndexOf(e);
                            }
                        }
                        function em(e, t) {
                            return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
                        }
                        function eh(e, t, n) {
                            if ('function' == typeof n) return n(t);
                            if (n) return n.includes(t);
                            let r = e.current[t];
                            return null == r || r.hasAttribute('disabled') || 'true' === r.getAttribute('aria-disabled');
                        }
                        let eg = () => ({
                            getShadowRoot: !0,
                            displayCheck: 'function' == typeof ResizeObserver && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none',
                        });
                        function ey(e, t) {
                            let n = A(e, eg()),
                                r = n.length;
                            if (0 === r) return;
                            let o = z(W(e)),
                                i = n.indexOf(o);
                            return n[-1 === i ? (1 === t ? 0 : r - 1) : i + t];
                        }
                        function ew(e) {
                            return ey(W(e).body, 1) || e;
                        }
                        function eE(e) {
                            return ey(W(e).body, -1) || e;
                        }
                        function eO(e, t) {
                            let n = t || e.currentTarget,
                                r = e.relatedTarget;
                            return !r || !B(n, r);
                        }
                        function eS(e) {
                            A(e, eg()).forEach((e) => {
                                ((e.dataset.tabindex = e.getAttribute('tabindex') || ''), e.setAttribute('tabindex', '-1'));
                            });
                        }
                        function ex(e) {
                            e.querySelectorAll('[data-tabindex]').forEach((e) => {
                                let t = e.dataset.tabindex;
                                (delete e.dataset.tabindex, t ? e.setAttribute('tabindex', t) : e.removeAttribute('tabindex'));
                            });
                        }
                    },
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length;)
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (o && (o += ' '), (o += r));
                                            else for (n in t) t[n] && (o && (o += ' '), (o += n));
                                        return o;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (n.r(t), n.d(t, { clsx: () => r, default: () => o }));
                        let o = r;
                    },
                    8533: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = { overlay: 'ZSjQrniulol6xKOq2Bou' };
                    },
                    2223: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = { root: 'TYgwct6DZLAMvvFaBZ7z' };
                    },
                    9331: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = { root: 'dJZf0Flxzx7PR15g7zqM' };
                    },
                    6544: (e, t, n) => {
                        (n.r(t), n.d(t, { RemoveScroll: () => W }));
                        var r,
                            o,
                            i = function () {
                                return (i =
                                    Object.assign ||
                                    function (e) {
                                        for (var t, n = 1, r = arguments.length; n < r; n++)
                                            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                        return e;
                                    }).apply(this, arguments);
                            };
                        function a(e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                                    0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                            return n;
                        }
                        Object.create;
                        Object.create;
                        var l = ('function' == typeof SuppressedError && SuppressedError, n(810)),
                            s = 'right-scroll-bar-position',
                            u = 'width-before-scroll-bar';
                        function c(e, t) {
                            return ('function' == typeof e ? e(t) : e && (e.current = t), e);
                        }
                        var d = l.useLayoutEffect,
                            f = new WeakMap();
                        function p(e) {
                            return e;
                        }
                        var v = (function (e) {
                                void 0 === e && (e = {});
                                var t,
                                    n,
                                    r,
                                    o =
                                        (void 0 === t && (t = p),
                                        (n = []),
                                        (r = !1),
                                        {
                                            read: function () {
                                                if (r) throw Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
                                                return n.length ? n[n.length - 1] : null;
                                            },
                                            useMedium: function (e) {
                                                var o = t(e, r);
                                                return (
                                                    n.push(o),
                                                    function () {
                                                        n = n.filter(function (e) {
                                                            return e !== o;
                                                        });
                                                    }
                                                );
                                            },
                                            assignSyncMedium: function (e) {
                                                for (r = !0; n.length;) {
                                                    var t = n;
                                                    ((n = []), t.forEach(e));
                                                }
                                                n = {
                                                    push: function (t) {
                                                        return e(t);
                                                    },
                                                    filter: function () {
                                                        return n;
                                                    },
                                                };
                                            },
                                            assignMedium: function (e) {
                                                r = !0;
                                                var t = [];
                                                if (n.length) {
                                                    var o = n;
                                                    ((n = []), o.forEach(e), (t = n));
                                                }
                                                var i = function () {
                                                        var n = t;
                                                        ((t = []), n.forEach(e));
                                                    },
                                                    a = function () {
                                                        return Promise.resolve().then(i);
                                                    };
                                                (a(),
                                                    (n = {
                                                        push: function (e) {
                                                            (t.push(e), a());
                                                        },
                                                        filter: function (e) {
                                                            return ((t = t.filter(e)), n);
                                                        },
                                                    }));
                                            },
                                        });
                                return ((o.options = i({ async: !0, ssr: !1 }, e)), o);
                            })(),
                            b = function () {},
                            m = l.forwardRef(function (e, t) {
                                var n,
                                    r,
                                    o,
                                    s,
                                    u = l.useRef(null),
                                    p = l.useState({ onScrollCapture: b, onWheelCapture: b, onTouchMoveCapture: b }),
                                    m = p[0],
                                    h = p[1],
                                    g = e.forwardProps,
                                    y = e.children,
                                    w = e.className,
                                    E = e.removeScrollBar,
                                    O = e.enabled,
                                    S = e.shards,
                                    x = e.sideCar,
                                    T = e.noIsolation,
                                    P = e.inert,
                                    C = e.allowPinchZoom,
                                    I = e.as,
                                    R = e.gapMode,
                                    A = a(e, [
                                        'forwardProps',
                                        'children',
                                        'className',
                                        'removeScrollBar',
                                        'enabled',
                                        'shards',
                                        'sideCar',
                                        'noIsolation',
                                        'inert',
                                        'allowPinchZoom',
                                        'as',
                                        'gapMode',
                                    ]),
                                    M =
                                        ((n = [u, t]),
                                        (r = function (e) {
                                            return n.forEach(function (t) {
                                                return c(t, e);
                                            });
                                        }),
                                        ((o = (0, l.useState)(function () {
                                            return {
                                                value: null,
                                                callback: r,
                                                facade: {
                                                    get current() {
                                                        return o.value;
                                                    },
                                                    set current(value) {
                                                        var e = o.value;
                                                        e !== value && ((o.value = value), o.callback(value, e));
                                                    },
                                                },
                                            };
                                        })[0]).callback = r),
                                        (s = o.facade),
                                        d(
                                            function () {
                                                var e = f.get(s);
                                                if (e) {
                                                    var t = new Set(e),
                                                        r = new Set(n),
                                                        o = s.current;
                                                    (t.forEach(function (e) {
                                                        r.has(e) || c(e, null);
                                                    }),
                                                        r.forEach(function (e) {
                                                            t.has(e) || c(e, o);
                                                        }));
                                                }
                                                f.set(s, n);
                                            },
                                            [n],
                                        ),
                                        s),
                                    _ = i(i({}, A), m);
                                return l.createElement(
                                    l.Fragment,
                                    null,
                                    O &&
                                        l.createElement(x, {
                                            sideCar: v,
                                            removeScrollBar: E,
                                            shards: S,
                                            noIsolation: T,
                                            inert: P,
                                            setCallbacks: h,
                                            allowPinchZoom: !!C,
                                            lockRef: u,
                                            gapMode: R,
                                        }),
                                    g
                                        ? l.cloneElement(l.Children.only(y), i(i({}, _), { ref: M }))
                                        : l.createElement(void 0 === I ? 'div' : I, i({}, _, { className: w, ref: M }), y),
                                );
                            });
                        ((m.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (m.classNames = { fullWidth: u, zeroRight: s }));
                        var h = function (e) {
                            var t = e.sideCar,
                                n = a(e, ['sideCar']);
                            if (!t) throw Error('Sidecar: please provide `sideCar` property to import the right car');
                            var r = t.read();
                            if (!r) throw Error('Sidecar medium not found');
                            return l.createElement(r, i({}, n));
                        };
                        h.isSideCarExport = !0;
                        var g = function () {
                                var e = 0,
                                    t = null;
                                return {
                                    add: function (r) {
                                        if (
                                            0 == e &&
                                            (t = (function () {
                                                if (!document) return null;
                                                var e = document.createElement('style');
                                                e.type = 'text/css';
                                                var t = o || n.nc;
                                                return (t && e.setAttribute('nonce', t), e);
                                            })())
                                        ) {
                                            var i, a;
                                            ((i = t).styleSheet ? (i.styleSheet.cssText = r) : i.appendChild(document.createTextNode(r)),
                                                (a = t),
                                                (document.head || document.getElementsByTagName('head')[0]).appendChild(a));
                                        }
                                        e++;
                                    },
                                    remove: function () {
                                        --e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null));
                                    },
                                };
                            },
                            y = function () {
                                var e = g();
                                return function (t, n) {
                                    l.useEffect(
                                        function () {
                                            return (
                                                e.add(t),
                                                function () {
                                                    e.remove();
                                                }
                                            );
                                        },
                                        [t && n],
                                    );
                                };
                            },
                            w = function () {
                                var e = y();
                                return function (t) {
                                    return (e(t.styles, t.dynamic), null);
                                };
                            },
                            E = function (e) {
                                return parseInt(e || '', 10) || 0;
                            },
                            O = function (e) {
                                var t = window.getComputedStyle(document.body),
                                    n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
                                    r = t['padding' === e ? 'paddingTop' : 'marginTop'],
                                    o = t['padding' === e ? 'paddingRight' : 'marginRight'];
                                return [E(n), E(r), E(o)];
                            },
                            S = function (e) {
                                void 0 === e && (e = 'margin');
                                var t = O(e),
                                    n = document.documentElement.clientWidth,
                                    r = window.innerWidth;
                                return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
                            },
                            x = w(),
                            T = 'data-scroll-locked',
                            P = function (e, t, n, r) {
                                var o = e.left,
                                    i = e.top,
                                    a = e.right,
                                    l = e.gap;
                                return (
                                    void 0 === n && (n = 'margin'),
                                    '\n  .'
                                        .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
                                        .concat(r, ';\n   padding-right: ')
                                        .concat(l, 'px ')
                                        .concat(r, ';\n  }\n  body[')
                                        .concat(T, '] {\n    overflow: hidden ')
                                        .concat(r, ';\n    overscroll-behavior: contain;\n    ')
                                        .concat(
                                            [
                                                t && 'position: relative '.concat(r, ';'),
                                                'margin' === n &&
                                                    '\n    padding-left: '
                                                        .concat(o, 'px;\n    padding-top: ')
                                                        .concat(i, 'px;\n    padding-right: ')
                                                        .concat(a, 'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ')
                                                        .concat(l, 'px ')
                                                        .concat(r, ';\n    '),
                                                'padding' === n && 'padding-right: '.concat(l, 'px ').concat(r, ';'),
                                            ]
                                                .filter(Boolean)
                                                .join(''),
                                            '\n  }\n  \n  .',
                                        )
                                        .concat(s, ' {\n    right: ')
                                        .concat(l, 'px ')
                                        .concat(r, ';\n  }\n  \n  .')
                                        .concat(u, ' {\n    margin-right: ')
                                        .concat(l, 'px ')
                                        .concat(r, ';\n  }\n  \n  .')
                                        .concat(s, ' .')
                                        .concat(s, ' {\n    right: 0 ')
                                        .concat(r, ';\n  }\n  \n  .')
                                        .concat(u, ' .')
                                        .concat(u, ' {\n    margin-right: 0 ')
                                        .concat(r, ';\n  }\n  \n  body[')
                                        .concat(T, '] {\n    ')
                                        .concat('--removed-body-scroll-bar-size', ': ')
                                        .concat(l, 'px;\n  }\n')
                                );
                            },
                            C = function () {
                                var e = parseInt(document.body.getAttribute(T) || '0', 10);
                                return isFinite(e) ? e : 0;
                            },
                            I = function () {
                                l.useEffect(function () {
                                    return (
                                        document.body.setAttribute(T, (C() + 1).toString()),
                                        function () {
                                            var e = C() - 1;
                                            e <= 0 ? document.body.removeAttribute(T) : document.body.setAttribute(T, e.toString());
                                        }
                                    );
                                }, []);
                            },
                            R = function (e) {
                                var t = e.noRelative,
                                    n = e.noImportant,
                                    r = e.gapMode,
                                    o = void 0 === r ? 'margin' : r;
                                I();
                                var i = l.useMemo(
                                    function () {
                                        return S(o);
                                    },
                                    [o],
                                );
                                return l.createElement(x, { styles: P(i, !t, o, n ? '' : '!important') });
                            },
                            A = !1;
                        try {
                            var M = Object.defineProperty({}, 'passive', {
                                get: function () {
                                    return ((A = !0), !0);
                                },
                            });
                            (window.addEventListener('test', M, M), window.removeEventListener('test', M, M));
                        } catch (e) {
                            A = !1;
                        }
                        var _ = !!A && { passive: !1 },
                            j = function (e, t) {
                                if (!(e instanceof Element)) return !1;
                                var n = window.getComputedStyle(e);
                                return 'hidden' !== n[t] && (n.overflowY !== n.overflowX || 'TEXTAREA' === e.tagName || 'visible' !== n[t]);
                            },
                            k = function (e, t) {
                                var n = t.ownerDocument,
                                    r = t;
                                do {
                                    if (('undefined' != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), N(e, r))) {
                                        var o = L(e, r);
                                        if (o[1] > o[2]) return !0;
                                    }
                                    r = r.parentNode;
                                } while (r && r !== n.body);
                                return !1;
                            },
                            N = function (e, t) {
                                return 'v' === e ? j(t, 'overflowY') : j(t, 'overflowX');
                            },
                            L = function (e, t) {
                                return 'v' === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth];
                            },
                            D = function (e, t, n, r, o) {
                                var i,
                                    a = ((i = window.getComputedStyle(t).direction), 'h' === e && 'rtl' === i ? -1 : 1),
                                    l = a * r,
                                    s = n.target,
                                    u = t.contains(s),
                                    c = !1,
                                    d = l > 0,
                                    f = 0,
                                    p = 0;
                                do {
                                    var v = L(e, s),
                                        b = v[0],
                                        m = v[1] - v[2] - a * b;
                                    ((b || m) && N(e, s) && ((f += m), (p += b)), (s = s instanceof ShadowRoot ? s.host : s.parentNode));
                                } while ((!u && s !== document.body) || (u && (t.contains(s) || t === s)));
                                return (d && ((o && 1 > Math.abs(f)) || (!o && l > f)) ? (c = !0) : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (c = !0), c);
                            },
                            F = function (e) {
                                return 'changedTouches' in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                            },
                            U = function (e) {
                                return [e.deltaX, e.deltaY];
                            },
                            z = function (e) {
                                return e && 'current' in e ? e.current : e;
                            },
                            B = 0,
                            H = [];
                        let V =
                            ((r = function (e) {
                                var t = l.useRef([]),
                                    n = l.useRef([0, 0]),
                                    r = l.useRef(),
                                    o = l.useState(B++)[0],
                                    i = l.useState(w)[0],
                                    a = l.useRef(e);
                                (l.useEffect(
                                    function () {
                                        a.current = e;
                                    },
                                    [e],
                                ),
                                    l.useEffect(
                                        function () {
                                            if (e.inert) {
                                                document.body.classList.add('block-interactivity-'.concat(o));
                                                var t = (function (e, t, n) {
                                                    if (n || 2 == arguments.length)
                                                        for (var r, o = 0, i = t.length; o < i; o++)
                                                            (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
                                                    return e.concat(r || Array.prototype.slice.call(t));
                                                })([e.lockRef.current], (e.shards || []).map(z), !0).filter(Boolean);
                                                return (
                                                    t.forEach(function (e) {
                                                        return e.classList.add('allow-interactivity-'.concat(o));
                                                    }),
                                                    function () {
                                                        (document.body.classList.remove('block-interactivity-'.concat(o)),
                                                            t.forEach(function (e) {
                                                                return e.classList.remove('allow-interactivity-'.concat(o));
                                                            }));
                                                    }
                                                );
                                            }
                                        },
                                        [e.inert, e.lockRef.current, e.shards],
                                    ));
                                var s = l.useCallback(function (e, t) {
                                        if (('touches' in e && 2 === e.touches.length) || ('wheel' === e.type && e.ctrlKey)) return !a.current.allowPinchZoom;
                                        var o,
                                            i = F(e),
                                            l = n.current,
                                            s = 'deltaX' in e ? e.deltaX : l[0] - i[0],
                                            u = 'deltaY' in e ? e.deltaY : l[1] - i[1],
                                            c = e.target,
                                            d = Math.abs(s) > Math.abs(u) ? 'h' : 'v';
                                        if ('touches' in e && 'h' === d && 'range' === c.type) return !1;
                                        var f = k(d, c);
                                        if (!f) return !0;
                                        if ((f ? (o = d) : ((o = 'v' === d ? 'h' : 'v'), (f = k(d, c))), !f)) return !1;
                                        if ((!r.current && 'changedTouches' in e && (s || u) && (r.current = o), !o)) return !0;
                                        var p = r.current || o;
                                        return D(p, t, e, 'h' === p ? s : u, !0);
                                    }, []),
                                    u = l.useCallback(function (e) {
                                        if (H.length && H[H.length - 1] === i) {
                                            var n = 'deltaY' in e ? U(e) : F(e),
                                                r = t.current.filter(function (t) {
                                                    var r;
                                                    return (
                                                        t.name === e.type &&
                                                        (t.target === e.target || e.target === t.shadowParent) &&
                                                        ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                                                    );
                                                })[0];
                                            if (r && r.should) {
                                                e.cancelable && e.preventDefault();
                                                return;
                                            }
                                            if (!r) {
                                                var o = (a.current.shards || [])
                                                    .map(z)
                                                    .filter(Boolean)
                                                    .filter(function (t) {
                                                        return t.contains(e.target);
                                                    });
                                                (o.length > 0 ? s(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault();
                                            }
                                        }
                                    }, []),
                                    c = l.useCallback(function (e, n, r, o) {
                                        var i = {
                                            name: e,
                                            delta: n,
                                            target: r,
                                            should: o,
                                            shadowParent: (function (e) {
                                                for (var t = null; null !== e;) (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
                                                return t;
                                            })(r),
                                        };
                                        (t.current.push(i),
                                            setTimeout(function () {
                                                t.current = t.current.filter(function (e) {
                                                    return e !== i;
                                                });
                                            }, 1));
                                    }, []),
                                    d = l.useCallback(function (e) {
                                        ((n.current = F(e)), (r.current = void 0));
                                    }, []),
                                    f = l.useCallback(function (t) {
                                        c(t.type, U(t), t.target, s(t, e.lockRef.current));
                                    }, []),
                                    p = l.useCallback(function (t) {
                                        c(t.type, F(t), t.target, s(t, e.lockRef.current));
                                    }, []);
                                l.useEffect(function () {
                                    return (
                                        H.push(i),
                                        e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                                        document.addEventListener('wheel', u, _),
                                        document.addEventListener('touchmove', u, _),
                                        document.addEventListener('touchstart', d, _),
                                        function () {
                                            ((H = H.filter(function (e) {
                                                return e !== i;
                                            })),
                                                document.removeEventListener('wheel', u, _),
                                                document.removeEventListener('touchmove', u, _),
                                                document.removeEventListener('touchstart', d, _));
                                        }
                                    );
                                }, []);
                                var v = e.removeScrollBar,
                                    b = e.inert;
                                return l.createElement(
                                    l.Fragment,
                                    null,
                                    b
                                        ? l.createElement(i, {
                                              styles: '\n  .block-interactivity-'
                                                  .concat(o, ' {pointer-events: none;}\n  .allow-interactivity-')
                                                  .concat(o, ' {pointer-events: all;}\n'),
                                          })
                                        : null,
                                    v ? l.createElement(R, { gapMode: e.gapMode }) : null,
                                );
                            }),
                            v.useMedium(r),
                            h);
                        var Y = l.forwardRef(function (e, t) {
                            return l.createElement(m, i({}, e, { ref: t, sideCar: V }));
                        });
                        Y.classNames = m.classNames;
                        let W = Y;
                    },
                    4490: (e, t, n) => {
                        (n.r(t), n.d(t, { DOWN: () => l, LEFT: () => o, RIGHT: () => i, UP: () => a, useSwipeable: () => p }));
                        var r = n(810);
                        let o = 'Left',
                            i = 'Right',
                            a = 'Up',
                            l = 'Down',
                            s = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            u = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            c = 'mousemove',
                            d = 'mouseup';
                        function f(e, t) {
                            if (0 === t) return e;
                            let n = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(n) + e[1] * Math.sin(n), e[1] * Math.cos(n) - e[0] * Math.sin(n)];
                        }
                        function p(e) {
                            var t, n, p;
                            let v,
                                { trackMouse: b } = e,
                                m = r.useRef(Object.assign({}, u)),
                                h = r.useRef(Object.assign({}, s)),
                                g = r.useRef(Object.assign({}, h.current));
                            for (v in ((g.current = Object.assign({}, h.current)), (h.current = Object.assign(Object.assign({}, s), e)), s))
                                void 0 === h.current[v] && (h.current[v] = s[v]);
                            let [y, w] = r.useMemo(
                                () =>
                                    (function (e, t) {
                                        let n = (t) => {
                                                let n = 'touches' in t;
                                                (n && t.touches.length > 1) ||
                                                    e((e, o) => {
                                                        o.trackMouse && !n && (document.addEventListener(c, r), document.addEventListener(d, v));
                                                        let { clientX: i, clientY: a } = n ? t.touches[0] : t,
                                                            l = f([i, a], o.rotationAngle);
                                                        return (
                                                            o.onTouchStartOrOnMouseDown && o.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), u), { initial: l.slice(), xy: l, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            r = (t) => {
                                                e((e, n) => {
                                                    var r, u, c, d;
                                                    let p = 'touches' in t;
                                                    if (p && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > n.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: v, clientY: b } = p ? t.touches[0] : t,
                                                        [m, h] = f([v, b], n.rotationAngle),
                                                        g = m - e.xy[0],
                                                        y = h - e.xy[1],
                                                        w = Math.abs(g),
                                                        E = Math.abs(y),
                                                        O = (t.timeStamp || 0) - e.start,
                                                        S = Math.sqrt(w * w + E * E) / (O || 1),
                                                        x = [g / (O || 1), y / (O || 1)],
                                                        T = ((r = w), (u = E), (c = g), (d = y), r > u ? (c > 0 ? i : o) : d > 0 ? l : a),
                                                        P = 'number' == typeof n.delta ? n.delta : n.delta[T.toLowerCase()] || s.delta;
                                                    if (w < P && E < P && !e.swiping) return e;
                                                    let C = {
                                                        absX: w,
                                                        absY: E,
                                                        deltaX: g,
                                                        deltaY: y,
                                                        dir: T,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: S,
                                                        vxvy: x,
                                                    };
                                                    (C.first && n.onSwipeStart && n.onSwipeStart(C), n.onSwiping && n.onSwiping(C));
                                                    let I = !1;
                                                    return (
                                                        (n.onSwiping || n.onSwiped || n['onSwiped'.concat(T)]) && (I = !0),
                                                        I && n.preventScrollOnSwipe && n.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: C, swiping: !0 })
                                                    );
                                                });
                                            },
                                            p = (t) => {
                                                e((e, n) => {
                                                    let r;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < n.swipeDuration) {
                                                            ((r = Object.assign(Object.assign({}, e.eventData), { event: t })), n.onSwiped && n.onSwiped(r));
                                                            let o = n['onSwiped'.concat(r.dir)];
                                                            o && o(r);
                                                        }
                                                    } else n.onTap && n.onTap({ event: t });
                                                    return (
                                                        n.onTouchEndOrOnMouseUp && n.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), u), { eventData: r })
                                                    );
                                                });
                                            },
                                            v = (e) => {
                                                (document.removeEventListener(c, r), document.removeEventListener(d, v), p(e));
                                            },
                                            b = (e, t) => {
                                                let o = () => {};
                                                if (e && e.addEventListener) {
                                                    let i = Object.assign(Object.assign({}, s.touchEventOptions), t.touchEventOptions),
                                                        a = [
                                                            ['touchstart', n, i],
                                                            ['touchmove', r, Object.assign(Object.assign({}, i), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', p, i],
                                                        ];
                                                    (a.forEach((t) => {
                                                        let [n, r, o] = t;
                                                        return e.addEventListener(n, r, o);
                                                    }),
                                                        (o = () =>
                                                            a.forEach((t) => {
                                                                let [n, r] = t;
                                                                return e.removeEventListener(n, r);
                                                            })));
                                                }
                                                return o;
                                            },
                                            m = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, n) => {
                                                            if (e.el === t) return e;
                                                            let r = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                                                                n.trackTouch && t && (r.cleanUpTouch = b(t, n)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), r)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (m.onMouseDown = n), [m, b]);
                                    })((e) => (m.current = e(m.current, h.current)), { trackMouse: b }),
                                [b],
                            );
                            return (
                                (t = m.current),
                                (n = h.current),
                                (p = g.current),
                                (m.current =
                                    n.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? n.preventScrollOnSwipe !== p.preventScrollOnSwipe || n.touchEventOptions.passive !== p.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: w(t.el, n) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: w(t.el, n) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                y
                            );
                        }
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var o = null;
                            if ((void 0 !== r && (o = '' + r), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: n, type: e, key: o, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    9580: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useLongPress =
                                t.useDynamicText =
                                t.usePopoverSwipeable =
                                t.useReturnValue =
                                t.useCallbackRef =
                                t.useDebouncedToggle =
                                t.useResize =
                                t.useIsomorphicEffect =
                                t.useForceUpdateRef =
                                t.useElementOffsetY =
                                t.getElementNameByDataAttribute =
                                t.createIntersectionObserver =
                                t.useIntersectionObserver =
                                t.useKeyboardNavigation =
                                t.useScroll =
                                t.useForwardRef =
                                    void 0));
                        var r = n(189);
                        Object.defineProperty(t, 'useForwardRef', {
                            enumerable: !0,
                            get: function () {
                                return r.useForwardRef;
                            },
                        });
                        var o = n(3830);
                        Object.defineProperty(t, 'useScroll', {
                            enumerable: !0,
                            get: function () {
                                return o.useScroll;
                            },
                        });
                        var i = n(3298);
                        Object.defineProperty(t, 'useKeyboardNavigation', {
                            enumerable: !0,
                            get: function () {
                                return i.useKeyboardNavigation;
                            },
                        });
                        var a = n(597);
                        (Object.defineProperty(t, 'useIntersectionObserver', {
                            enumerable: !0,
                            get: function () {
                                return a.useIntersectionObserver;
                            },
                        }),
                            Object.defineProperty(t, 'createIntersectionObserver', {
                                enumerable: !0,
                                get: function () {
                                    return a.createIntersectionObserver;
                                },
                            }),
                            Object.defineProperty(t, 'getElementNameByDataAttribute', {
                                enumerable: !0,
                                get: function () {
                                    return a.getElementNameByDataAttribute;
                                },
                            }));
                        var l = n(7293);
                        Object.defineProperty(t, 'useElementOffsetY', {
                            enumerable: !0,
                            get: function () {
                                return l.useElementOffsetY;
                            },
                        });
                        var s = n(3940);
                        Object.defineProperty(t, 'useForceUpdateRef', {
                            enumerable: !0,
                            get: function () {
                                return s.useForceUpdateRef;
                            },
                        });
                        var u = n(4482);
                        Object.defineProperty(t, 'useIsomorphicEffect', {
                            enumerable: !0,
                            get: function () {
                                return u.useIsomorphicEffect;
                            },
                        });
                        var c = n(588);
                        Object.defineProperty(t, 'useResize', {
                            enumerable: !0,
                            get: function () {
                                return c.useResize;
                            },
                        });
                        var d = n(8612);
                        Object.defineProperty(t, 'useDebouncedToggle', {
                            enumerable: !0,
                            get: function () {
                                return d.useDebouncedToggle;
                            },
                        });
                        var f = n(792);
                        Object.defineProperty(t, 'useCallbackRef', {
                            enumerable: !0,
                            get: function () {
                                return f.useCallbackRef;
                            },
                        });
                        var p = n(7497);
                        Object.defineProperty(t, 'useReturnValue', {
                            enumerable: !0,
                            get: function () {
                                return p.useReturnValue;
                            },
                        });
                        var v = n(2380);
                        Object.defineProperty(t, 'usePopoverSwipeable', {
                            enumerable: !0,
                            get: function () {
                                return v.usePopoverSwipeable;
                            },
                        });
                        var b = n(6585);
                        Object.defineProperty(t, 'useDynamicText', {
                            enumerable: !0,
                            get: function () {
                                return b.useDynamicText;
                            },
                        });
                        var m = n(9966);
                        Object.defineProperty(t, 'useLongPress', {
                            enumerable: !0,
                            get: function () {
                                return m.useLongPress;
                            },
                        });
                    },
                    792: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let r = n(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, r.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    return t.current.callback(...n);
                                },
                                callback: e,
                            });
                            return (
                                (0, r.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    2458: (e, t, n) => {
                        var r;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let o = n(4490),
                            i = n(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(r || (t.SwipeablePlacement = r = {}));
                        let a = (e) => {
                                let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            i === r.TOP || i === r.BOTTOM ? 'translateY('.concat(n || 0, 'px)') : 'translateX('.concat(o || 0, 'px)')));
                                });
                            },
                            l = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: n = {}, onClose: s, disableSwipe: u, placement: c, threshold: d } = e,
                                f = (0, i.useCallbackRef)(() => {
                                    s && (l(t), s());
                                }),
                                p = (0, i.useCallbackRef)((e) => {
                                    u ||
                                        ((e) => {
                                            let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                                            switch (i) {
                                                case r.TOP:
                                                    n <= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                case r.RIGHT:
                                                    o >= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                case r.LEFT:
                                                    o <= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                default:
                                                    n >= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c });
                                }),
                                v = (0, i.useCallbackRef)((e) => {
                                    !u &&
                                        (((e) => {
                                            let { ref: t, deltaY: n, deltaX: o, placement: i, threshold: a = 25 } = e;
                                            if (!t.current) return !1;
                                            let l = (a / 100) * (i === r.TOP || i === r.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (i) {
                                                case r.TOP:
                                                    return n < 0 && Math.abs(n) >= l;
                                                case r.RIGHT:
                                                    return o > 0 && o >= l;
                                                case r.LEFT:
                                                    return o < 0 && Math.abs(o) >= l;
                                                default:
                                                    return n > 0 && n >= l;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c, threshold: d })
                                            ? s && (l(t), s())
                                            : l(t));
                                });
                            return { handlers: (0, o.useSwipeable)({ onSwiped: v, onSwiping: p, trackMouse: !0, trackTouch: !0, ...n }), onCloseCallback: f };
                        };
                    },
                    8612: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let r = n(352),
                            o = n(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: n, throttleTimeout: i } = e,
                                a = (0, o.useRef)(null),
                                [l, s] = (0, o.useState)(!!n),
                                u = (0, o.useMemo)(
                                    () =>
                                        (0, r.throttle)(() => {
                                            (s(!n),
                                                a.current && window.clearTimeout(a.current),
                                                (a.current = window.setTimeout(() => {
                                                    s(!!n);
                                                }, t)));
                                        }, i),
                                    [t, n, i],
                                ),
                                c = (0, o.useCallback)(() => {
                                    (s(!!n), a.current && window.clearTimeout(a.current));
                                }, [n]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        a.current && window.clearTimeout(a.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: u, reset: c }
                            );
                        };
                    },
                    6585: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0));
                        let r = n(810),
                            o = (e) => {
                                ((e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && o(e);
                                    }));
                            },
                            i = (e, t, n, r, o, i) => {
                                (e.style.setProperty('--dynamic-font-size', ''.concat(r, 'px')), e.style.setProperty('--dynamic-line-height', String(o)));
                                let a = 'number' == typeof i ? e.scrollHeight <= Math.min(i * r * o, n) + 1 : e.scrollHeight <= n + 1,
                                    l = e.scrollWidth <= t + 1;
                                return a && l;
                            },
                            a = (e) => {
                                let {
                                        container: t,
                                        containerWidth: n,
                                        containerHeight: r,
                                        minFontSize: a,
                                        maxFontSize: l,
                                        lineHeight: s,
                                        maxLines: u,
                                        styleVariants: c,
                                    } = e,
                                    d = ((e, t, n) => {
                                        let r = e.cloneNode(!0);
                                        return (
                                            (r.style.cssText =
                                                '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                    t,
                                                    'px !important;\n    ',
                                                )),
                                            o(r),
                                            r.style.setProperty('--dynamic-line-height', String(n)),
                                            document.body.appendChild(r),
                                            r
                                        );
                                    })(t, n, s);
                                try {
                                    if (null == c ? void 0 : c.length) {
                                        var f;
                                        let e = [...c].sort((e, t) => t.fontSize - e.fontSize),
                                            t = null != (f = e[e.length - 1]) ? f : { fontSize: a, lineHeight: s };
                                        for (let t of e) if (i(d, n, r, t.fontSize, t.lineHeight, u)) return { ...t, fits: !0 };
                                        return { ...t, fits: !1 };
                                    }
                                    let e = a,
                                        t = l,
                                        o = null;
                                    for (; e <= t;) {
                                        let a = Math.floor((e + t) / 2);
                                        i(d, n, r, a, s, u) ? ((o = a), (e = a + 1)) : (t = a - 1);
                                    }
                                    if (null === o) return { fontSize: a, lineHeight: s, fits: !1 };
                                    return { fontSize: Math.max(a, o - 1), lineHeight: s, fits: !0 };
                                } finally {
                                    d.remove();
                                }
                            };
                        ((t.findOptimalFontSize = (e) => a(e).fontSize),
                            (t.useDynamicText = (e, t, n) => {
                                let { minFontSize: o, maxFontSize: i, lineHeight: l, maxLines: s, fallbackMaxLines: u, styleVariants: c } = t;
                                (0, r.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(l));
                                    let t = () => {
                                            let t = e.clientWidth,
                                                r = e.clientHeight,
                                                d = e.childNodes.length > 0;
                                            if (0 === t || 0 === r || !d) return;
                                            let {
                                                maxLines: f,
                                                fontSize: p,
                                                lineHeight: v,
                                            } = ((e) => {
                                                let { fallbackMaxLines: t, maxLines: n } = e,
                                                    r = a({ ...e, maxLines: n });
                                                if (void 0 === t || r.fits) return { maxLines: n, fontSize: r.fontSize, lineHeight: r.lineHeight };
                                                let o = a({ ...e, maxLines: t });
                                                return { maxLines: t, fontSize: o.fontSize, lineHeight: o.lineHeight };
                                            })({
                                                container: e,
                                                containerWidth: t,
                                                containerHeight: r,
                                                minFontSize: o,
                                                maxFontSize: i,
                                                lineHeight: l,
                                                maxLines: s,
                                                fallbackMaxLines: u,
                                                styleVariants: c,
                                            });
                                            (null == n || n(f),
                                                e.style.setProperty('--dynamic-font-size', ''.concat(p, 'px')),
                                                e.style.setProperty('--dynamic-line-height', String(v)));
                                        },
                                        r = new ResizeObserver(t),
                                        d = new MutationObserver(t);
                                    return (
                                        r.observe(e),
                                        d.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(t),
                                        t(),
                                        () => {
                                            (r.disconnect(), d.disconnect());
                                        }
                                    );
                                }, [e, n, u, l, i, s, o, c]);
                            }));
                    },
                    7293: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useElementOffsetY = void 0));
                        let r = n(810),
                            o = n(3830),
                            i = n(3940);
                        t.useElementOffsetY = (e) => {
                            let [t, n] = (0, i.useForceUpdateRef)(),
                                [a, l] = (0, r.useState)(),
                                s = (0, r.useCallback)(() => {
                                    let e = null == t ? void 0 : t.getBoundingClientRect();
                                    e && l(e.y);
                                }, [t]);
                            return ((0, r.useLayoutEffect)(s), (0, o.useScroll)({ onScroll: s, elementRef: e }), { forceUpdateRefCallback: n, offsetY: a });
                        };
                    },
                    3180: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useFloatingReturnFocus = void 0));
                        let r = n(810),
                            o = n(132),
                            i = n(792);
                        t.useFloatingReturnFocus = (e) => {
                            let { open: t, onOpenChange: n } = e,
                                [a, l] = (0, r.useState)(!0),
                                s = (0, i.useCallbackRef)((e, t, r) => {
                                    (l(
                                        !(
                                            !e &&
                                            'outside-press' === r &&
                                            t instanceof MouseEvent &&
                                            (!('pointerType' in t) || 'mouse' === t.pointerType) &&
                                            !(0, o.isVirtualClick)(t) &&
                                            !('undefined' != typeof PointerEvent && t instanceof PointerEvent && (0, o.isVirtualPointerEvent)(t))
                                        ),
                                    ),
                                        null == n || n(e, t, r));
                                });
                            return (
                                (0, r.useEffect)(() => {
                                    t && l(!0);
                                }, [t]),
                                { onOpenChange: s, returnFocus: a }
                            );
                        };
                    },
                    3940: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let r = n(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, r.useState)(null);
                            return [
                                e,
                                (0, r.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    189: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForwardRef = void 0));
                        let r = n(810);
                        t.useForwardRef = function (e, t) {
                            let n = (0, r.useRef)(t);
                            return (
                                (0, r.useEffect)(() => {
                                    e && ('function' == typeof e ? e(n.current) : (e.current = n.current));
                                }, [e]),
                                n
                            );
                        };
                    },
                    597: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let r = n(810),
                            { innerWidth: o = 0, innerHeight: i = 0 } = window;
                        function a(e) {
                            let { top: t, right: n, bottom: r, left: a } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= i) || (r >= 0 && r <= i)) && ((a >= 0 && a <= o) || (n >= 0 && n <= o));
                        }
                        function l(e) {
                            var t, n;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, r)) ? n : e.attributes[0];
                        }
                        function s(e, t) {
                            let n = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, n);
                                });
                            }, t);
                            return n;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = a),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = s),
                            (t.useIntersectionObserver = function (e, n, o) {
                                let [{ freezeOnceVisible: i, preflightCheck: u, ...c }, d = !1] =
                                        'boolean' == typeof n || void 0 === n ? [t.defaultOptions, n] : [{ ...t.defaultOptions, ...n }, o],
                                    [f, p] = (0, r.useState)({}),
                                    v = (0, r.useRef)(new Set()),
                                    b = (0, r.useMemo)(
                                        () =>
                                            d
                                                ? null
                                                : s((e) => {
                                                      let t = l(e.target);
                                                      if (t && b) {
                                                          if (v.current.has(t)) return;
                                                          (p((n) => ({ ...n, [t]: { isIntersecting: e.isIntersecting } })),
                                                              i && e.isIntersecting && (v.current.add(t), b.unobserve(e.target)));
                                                      }
                                                  }, c),
                                        [d],
                                    );
                                return (
                                    (0, r.useLayoutEffect)(
                                        () => (
                                            b &&
                                                !d &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (u && (t = a(e.current))) {
                                                            let t = l(e.current);
                                                            p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || b.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                b && b.disconnect();
                                            }
                                        ),
                                        [d, b, e.length],
                                    ),
                                    f
                                );
                            }));
                    },
                    4482: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useIsomorphicEffect = void 0));
                        let r = n(810);
                        t.useIsomorphicEffect = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
                    },
                    3298: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useKeyboardNavigation = void 0));
                        let r = n(810);
                        function o(e, t) {
                            return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                        }
                        t.useKeyboardNavigation = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                { navigationItemsSelector: n, activeAttributeName: i = 'aria-selected' } = t,
                                a = (0, r.useCallback)(
                                    (t) => {
                                        let r = o(e, n);
                                        if (!r.length) return;
                                        let i = t.target,
                                            a = r.indexOf(i);
                                        if (-1 === a) return;
                                        let [l] = r,
                                            s = r.at(-1),
                                            u = null;
                                        switch (t.key) {
                                            case 'ArrowLeft':
                                            case 'ArrowUp':
                                                u = r[a - 1] || s;
                                                break;
                                            case 'ArrowRight':
                                            case 'ArrowDown':
                                                u = r[a + 1] || l;
                                                break;
                                            case 'Home':
                                                u = l;
                                                break;
                                            case 'End':
                                                u = s;
                                        }
                                        null !== u && (u.focus(), t.preventDefault());
                                    },
                                    [n, e],
                                );
                            ((0, r.useEffect)(() => {
                                let t = e.current;
                                return (null == t || t.addEventListener('keydown', a), () => (null == t ? void 0 : t.removeEventListener('keydown', a)));
                            }, [e, a]),
                                (0, r.useEffect)(() => {
                                    o(e, n).forEach((e) => {
                                        e.hasAttribute(i) && ('true' === e.getAttribute(i) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                                    });
                                }));
                        };
                    },
                    9966: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useLongPress = void 0));
                        let r = n(810),
                            o = n(792),
                            i = n(3940),
                            a = n(4012);
                        t.useLongPress = function () {
                            let {
                                    ref: e,
                                    onLongPress: t,
                                    delay: n = 500,
                                    movementThreshold: l = 10,
                                    disabled: s = !1,
                                    allowMouse: u = !1,
                                    scale: c,
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                [d, f] = (0, i.useForceUpdateRef)(),
                                p = (0, a.useMergeRefs)([f, e]),
                                [v, b] = (0, r.useState)(!1),
                                [m, h] = (0, r.useState)(!1),
                                g = (0, r.useRef)(void 0),
                                y = (0, o.useCallbackRef)((e, n) => (null == t ? void 0 : t(e, n))),
                                w = (0, o.useCallbackRef)(() => {
                                    var e;
                                    (null == (e = g.current) || e.call(g), h(!1));
                                });
                            return (
                                (0, r.useEffect)(() => {
                                    let e, t, r, o;
                                    if (!d || s) return;
                                    let i = d.ownerDocument,
                                        a = i.defaultView;
                                    if (!a) return;
                                    let f = new AbortController();
                                    function p() {
                                        (a.clearTimeout(r),
                                            (r = void 0),
                                            null == o || o.cancel(),
                                            (o = void 0),
                                            (e = void 0),
                                            b(!1),
                                            null == t || t.abort(),
                                            (t = void 0));
                                    }
                                    function v(t) {
                                        e && t.pointerId === e.pointerId && Math.hypot(t.clientX - e.clientX, t.clientY - e.clientY) > l && p();
                                    }
                                    function m(t) {
                                        t.pointerId === (null == e ? void 0 : e.pointerId) && p();
                                    }
                                    function w(t) {
                                        t.pointerId !== (null == e ? void 0 : e.pointerId) && p();
                                    }
                                    function E() {
                                        'hidden' === i.visibilityState && p();
                                    }
                                    return (
                                        (g.current = p),
                                        d.addEventListener(
                                            'pointerdown',
                                            (l) => {
                                                var s;
                                                let f = 'touch' === l.pointerType || 'pen' === l.pointerType || (u && 'mouse' === l.pointerType);
                                                if (e || !l.isPrimary || 0 !== l.button || !f) return;
                                                ((e = l),
                                                    (t = new AbortController()),
                                                    b(!0),
                                                    h(!1),
                                                    void 0 !== c &&
                                                        c > 0 &&
                                                        Number.isFinite(c) &&
                                                        !(null == (s = a.matchMedia) ? void 0 : s.call(a, '(prefers-reduced-motion: reduce)').matches) &&
                                                        d.animate &&
                                                        (o = d.animate([{ transform: 'scale(1)' }, { transform: 'scale('.concat(c, ')') }], {
                                                            duration: 150,
                                                            easing: 'ease-out',
                                                            fill: 'forwards',
                                                            composite: 'add',
                                                        })));
                                                let g = t.signal;
                                                (i.addEventListener('pointermove', v, { capture: !0, passive: !0, signal: g }),
                                                    i.addEventListener('pointerup', m, { capture: !0, signal: g }),
                                                    i.addEventListener('pointercancel', m, { capture: !0, signal: g }),
                                                    i.addEventListener('lostpointercapture', m, { capture: !0, signal: g }),
                                                    i.addEventListener('pointerdown', w, { capture: !0, signal: g }),
                                                    i.addEventListener('scroll', p, { capture: !0, passive: !0, signal: g }),
                                                    i.addEventListener('visibilitychange', E, { signal: g }),
                                                    a.addEventListener('scroll', p, { passive: !0, signal: g }),
                                                    a.addEventListener('blur', p, { signal: g }),
                                                    (r = a.setTimeout(() => {
                                                        if (((r = void 0), !d.isConnected)) return void p();
                                                        (((e, t) => {
                                                            let n,
                                                                r = e.ownerDocument,
                                                                o = r.defaultView;
                                                            if (!o) return;
                                                            let i = new AbortController(),
                                                                a = !1;
                                                            function l() {
                                                                (o.clearTimeout(n), i.abort());
                                                            }
                                                            function s(e) {
                                                                e.pointerId === t.pointerId && ((a = !0), o.clearTimeout(n), (n = o.setTimeout(l, 750)));
                                                            }
                                                            n = o.setTimeout(l, 6e4);
                                                            let u = i.signal;
                                                            (r.addEventListener(
                                                                'click',
                                                                function (n) {
                                                                    let r = 'pointerId' in n ? n.pointerId === t.pointerId : n.composedPath().includes(e);
                                                                    0 !== n.detail && r && (n.preventDefault(), n.stopPropagation(), l());
                                                                },
                                                                { capture: !0, signal: u },
                                                            ),
                                                                r.addEventListener(
                                                                    'pointerdown',
                                                                    function () {
                                                                        a && l();
                                                                    },
                                                                    { capture: !0, signal: u },
                                                                ),
                                                                r.addEventListener(
                                                                    'contextmenu',
                                                                    function (n) {
                                                                        'mouse' !== t.pointerType && n.composedPath().includes(e) && n.preventDefault();
                                                                    },
                                                                    { capture: !0, signal: u },
                                                                ),
                                                                r.addEventListener('pointerup', s, { capture: !0, signal: u }),
                                                                r.addEventListener('pointercancel', s, { capture: !0, signal: u }),
                                                                o.addEventListener('blur', l, { signal: u }));
                                                        })(d, l),
                                                            h(!0),
                                                            y(l, d));
                                                    }, n)));
                                            },
                                            { passive: !0, signal: f.signal },
                                        ),
                                        d.addEventListener(
                                            'contextmenu',
                                            (t) => {
                                                e && 'mouse' !== e.pointerType && t.preventDefault();
                                            },
                                            { signal: f.signal },
                                        ),
                                        () => {
                                            (p(), (g.current = void 0), f.abort());
                                        }
                                    );
                                }, [d, s, n, l, u, c, y]),
                                { ref: p, isPressing: v, isLongPressed: m, reset: w }
                            );
                        };
                    },
                    4012: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var r = n(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return r.useMergeRefs;
                            },
                        });
                    },
                    2380: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.usePopoverSwipeable = void 0));
                        let r = n(810),
                            o = n(2458);
                        t.usePopoverSwipeable = (e) => {
                            let { ref: t, swipeableProps: n = {}, onClose: i, disableSwipe: a, placement: l, threshold: s } = e,
                                u = (0, r.useMemo)(() => {
                                    switch (l) {
                                        case 'top':
                                        case 'top-end':
                                        case 'top-start':
                                            return o.SwipeablePlacement.TOP;
                                        case 'right':
                                        case 'right-end':
                                        case 'right-start':
                                            return o.SwipeablePlacement.RIGHT;
                                        case 'left':
                                        case 'left-end':
                                        case 'left-start':
                                            return o.SwipeablePlacement.LEFT;
                                        default:
                                            return o.SwipeablePlacement.BOTTOM;
                                    }
                                }, [l]);
                            return (0, o.useComponentSwipeable)({ ref: t, swipeableProps: n, onClose: i, disableSwipe: a, placement: u, threshold: s });
                        };
                    },
                    588: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let r = n(810),
                            o = n(1848);
                        t.useResize = (e, t) => {
                            (0, r.useEffect)(() => {
                                let n = (0, o.getElementFromRefOrElement)(t);
                                if (null === n) return;
                                let r = null != n ? n : document.documentElement,
                                    i = new ResizeObserver(e);
                                return (i.observe(r), () => i.disconnect());
                            }, [t, e]);
                        };
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    3830: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let r = n(810),
                            o = n(1848),
                            i = n(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: n, elementRef: a } = e,
                                { state: l, handleDebouncedToggle: s } = (0, i.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                u = (0, r.useCallback)(() => {
                                    (n && s(), null == t || t());
                                }, [n, s, t]);
                            return (
                                (0, r.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(a);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        n = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', u, n), () => t.removeEventListener('scroll', u, n));
                                }, [a, u]),
                                l
                            );
                        };
                    },
                    1676: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let r = n(810);
                        t.useToggle = (e) => {
                            let [t, n] = (0, r.useState)(e);
                            (0, r.useEffect)(() => {
                                n(e);
                            }, [e]);
                            let o = (0, r.useCallback)(() => {
                                    n((e) => !e);
                                }, []),
                                i = (0, r.useCallback)(() => {
                                    n(!0);
                                }, []),
                                a = (0, r.useCallback)(() => {
                                    n(!1);
                                }, []);
                            return { state: t, toggle: o, setState: n, toggleTrue: i, toggleFalse: a };
                        };
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
                    3024: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Popover = void 0));
                        let o = n(4377),
                            i = n(810),
                            a = n(1964),
                            l = n(5881),
                            s = n(6544),
                            u = n(1435),
                            c = n(4849),
                            d = n(2380),
                            f = n(3180),
                            p = r(n(8533));
                        t.Popover = (e) => {
                            var t;
                            let {
                                    children: n,
                                    offsetOptions: r,
                                    strategy: v,
                                    placement: b,
                                    isMobile: m,
                                    visuallyHiddenDismiss: h,
                                    positionElement: g,
                                    transform: y,
                                    initialOpen: w = !1,
                                    open: E,
                                    onOpenChange: O,
                                    disableFloatingStyles: S = !1,
                                    overlayClassName: x,
                                    style: T,
                                    returnFocus: P,
                                    isNested: C = !1,
                                    onShow: I,
                                    customRoleProps: R,
                                    portalNode: A,
                                    isEnabled: M = !0,
                                    arrowProps: _,
                                    lockScroll: j = !0,
                                    popoverContentRef: k,
                                    transitionDuration: N = 150,
                                } = e,
                                [L, D] = n,
                                [F, U] = (0, i.useState)(w),
                                [z, B] = (0, i.useState)(null),
                                H = (0, i.useRef)([]),
                                V = (0, i.useRef)([]),
                                Y = (0, a.useFloatingNodeId)(),
                                W = (0, a.useFloatingParentNodeId)(),
                                X = (0, a.useListItem)(),
                                G = (0, a.useFloatingTree)(),
                                K = (0, i.useRef)(null),
                                q = O || U,
                                $ = void 0 !== E ? E : F,
                                { onOpenChange: Z, returnFocus: Q } = (0, f.useFloatingReturnFocus)({ open: $, onOpenChange: q }),
                                J = (0, i.useCallback)(() => {
                                    q(!1);
                                }, [q]),
                                {
                                    refs: ee,
                                    floatingStyles: et,
                                    context: en,
                                } = (0, a.useFloating)({
                                    nodeId: Y,
                                    open: $,
                                    onOpenChange: Z,
                                    placement: b,
                                    middleware: [
                                        (0, a.offset)(r),
                                        (0, a.flip)({ crossAxis: null == b ? void 0 : b.includes('end') }),
                                        (0, a.shift)({ padding: 5 }),
                                        ...((null == _ ? void 0 : _.isEnabled) ? [(0, a.arrow)({ element: K })] : []),
                                    ],
                                    whileElementsMounted: a.autoUpdate,
                                    strategy: v,
                                    transform: y,
                                }),
                                er = (0, i.useId)(),
                                eo = (0, i.useId)(),
                                ei = (0, a.useListNavigation)(en, { listRef: H, activeIndex: z, nested: C, onNavigate: B }),
                                ea = (0, a.useTypeahead)(en, { listRef: V, onMatch: F ? B : void 0, activeIndex: z });
                            ((0, i.useEffect)(() => {
                                if (!G) return;
                                let e = () => {
                                        U(!1);
                                    },
                                    t = (e) => {
                                        e.nodeId !== Y && e.parentId === W && U(!1);
                                    };
                                return (
                                    G.events.on('click', e),
                                    G.events.on('menuopen', t),
                                    () => {
                                        (G.events.off('click', e), G.events.off('menuopen', t));
                                    }
                                );
                            }, [G, Y, W, U]),
                                (0, i.useEffect)(() => {
                                    F && (null == I || I());
                                }, [I, F]),
                                (0, i.useEffect)(() => {
                                    F && G && G.events.emit('menuopen', { parentId: W, nodeId: Y });
                                }, [G, F, Y, W]),
                                (0, i.useLayoutEffect)(() => {
                                    g && ee.setPositionReference(g);
                                }, [ee, g]));
                            let { handlers: el } = (0, d.usePopoverSwipeable)({
                                    ref: ee.floating,
                                    onClose: J,
                                    placement: b,
                                    disableSwipe: !m,
                                    swipeableProps: { preventScrollOnSwipe: !0 },
                                }),
                                es = k ? [ee.setFloating, k] : [ee.setFloating, null == el ? void 0 : el.ref],
                                eu = (0, a.useMergeRefs)(es),
                                ec = (0, a.useRole)(en, R),
                                ed = (0, a.useDismiss)(en, { referencePress: !0 }),
                                ef = (0, a.useClick)(en, { enabled: M, toggle: !C, ignoreMouse: C }),
                                ep = (0, a.useHover)(en, { enabled: C && M, handleClose: (0, a.safePolygon)({ blockPointerEvents: !0 }) }),
                                ev = (0, i.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                { getReferenceProps: eb, getFloatingProps: em, getItemProps: eh } = (0, a.useInteractions)([ec, ed, ef, ep, ei, ea]),
                                [eg, ey] = (() => {
                                    switch (b) {
                                        case 'bottom':
                                        default:
                                            return ['translate(0, 10%)', 'translate(0, 0)'];
                                        case 'right':
                                            if ('undefined' != typeof document && 'rtl' === document.dir) return ['translateX(-5%)', 'translateX(0)'];
                                            return ['translateX(5%)', 'translateX(0)'];
                                    }
                                })(),
                                ew = !m && !S && !1 !== y && (null == T ? void 0 : T.transform) === void 0,
                                { isMounted: eE, styles: eO } = (0, a.useTransitionStyles)(en, {
                                    initial: { opacity: 0, ...(!ew && { transform: eg }) },
                                    open: { opacity: 1, ...(!ew && { transform: ey }) },
                                    duration: N,
                                }),
                                eS = (0, a.useMergeRefs)([ee.setReference, X.ref]),
                                ex = L && (0, i.cloneElement)(L, { ref: eS, ...eb({ onClick: null == (t = L.props) ? void 0 : t.onClick }), key: er }),
                                eT = (0, i.useMemo)(
                                    () => (m ? { ...(S ? {} : et), ...T, bottom: 0, left: 0, right: 0, top: 'auto', transform: 'none' } : { ...(S ? {} : et), ...T }),
                                    [m, S, et, T],
                                ),
                                eP = (0, i.useMemo)(() => {
                                    if (null == _ ? void 0 : _.isEnabled) return (0, o.jsx)(c.PopoverArrow, { ref: K, context: en, ..._ });
                                }, [_, en]),
                                eC = em(),
                                eI = 'dialog' === eC.role || 'alertdialog' === eC.role,
                                eR = {
                                    ref: eu,
                                    style: { ...eO, ...eT },
                                    ...eC,
                                    ...(eI && { 'aria-modal': !0 }),
                                    onMouseDown: k || null == el ? void 0 : el.onMouseDown,
                                    arrow: eP,
                                    children: (0, i.cloneElement)(D.props.children, { onClose: J, key: eo }),
                                },
                                eA = (0, i.cloneElement)(D, eR),
                                eM = (0, i.useMemo)(() => ({ activeIndex: z, setActiveIndex: B, getItemProps: eh, isOpen: F }), [z, eh, F]),
                                e_ = C ? -1 : 0;
                            return (0, o.jsxs)(u.PopoverContext.Provider, {
                                value: eM,
                                children: [
                                    ex,
                                    (0, o.jsx)(a.FloatingList, {
                                        elementsRef: H,
                                        children:
                                            eE &&
                                            (0, o.jsxs)(a.FloatingPortal, {
                                                root: A,
                                                children: [
                                                    (0, o.jsx)(a.FloatingOverlay, { className: (0, l.clsx)(p.default.overlay, x), onClick: ev }),
                                                    (0, o.jsx)(a.FloatingFocusManager, {
                                                        context: en,
                                                        returnFocus: null != P ? P : C || Q,
                                                        initialFocus: e_,
                                                        visuallyHiddenDismiss: h,
                                                        children: (0, o.jsx)(s.RemoveScroll, { enabled: j && F, children: eA }),
                                                    }),
                                                ],
                                            }),
                                    }),
                                ],
                            });
                        };
                    },
                    4849: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.PopoverArrow = t.PopoverArrowComponent = void 0));
                        let o = n(4377),
                            i = n(5881),
                            a = n(810),
                            l = n(9580),
                            s = n(1676),
                            u = r(n(2223)),
                            c = { top: '', left: 'rotate(-90deg)', bottom: 'rotate(180deg)', right: 'rotate(90deg)' };
                        ((t.PopoverArrowComponent = (e) => {
                            let {
                                    forwardRef: t,
                                    className: n,
                                    context: r,
                                    width: a = 14,
                                    height: d = 7,
                                    tipRadius: f = 0,
                                    customClipPath: p,
                                    staticOffset: v,
                                    style: { transform: b, ...m } = {},
                                    isEnabled: h,
                                    ...g
                                } = e,
                                {
                                    placement: y,
                                    elements: { floating: w },
                                    middlewareData: { arrow: E },
                                } = r,
                                { state: O, toggleTrue: S } = (0, s.useToggle)(!1);
                            if (
                                ((0, l.useIsomorphicEffect)(() => {
                                    w && 'rtl' === getComputedStyle(w).direction && S();
                                }, [w, S]),
                                !w || !h)
                            )
                                return null;
                            let x = (a / 2) * (-(f / 8) + 1),
                                T = ((d / 2) * f) / 4,
                                [P, C] = y.split('-'),
                                I = v && 'end' === C ? 'right' : 'left';
                            v && O && (I = 'end' === C ? 'left' : 'right');
                            let R = (null == E ? void 0 : E.x) ? v || E.x : '',
                                A = (null == E ? void 0 : E.y) ? v || E.y : '',
                                M = c[P],
                                _ =
                                    p ||
                                    '"M0,0' +
                                        ' H'.concat(a) +
                                        ' L'.concat(a - x, ',').concat(d - T) +
                                        ' Q'
                                            .concat(a / 2, ',')
                                            .concat(d, ' ')
                                            .concat(x, ',')
                                            .concat(d - T) +
                                        ' Z"',
                                j = {
                                    [I]: R,
                                    [v && 'end' === C ? 'bottom' : 'top']: A,
                                    [P]: '100%',
                                    transform: ''.concat(M).concat(null != b ? b : ''),
                                    '--arrow-width': ''.concat(a, 'px'),
                                    '--arrow-clip-path': _,
                                    ...m,
                                };
                            return (0, o.jsx)('div', { ...g, className: (0, i.clsx)(u.default.root, n), ref: t, style: j });
                        }),
                            (t.PopoverArrow = (0, a.forwardRef)((e, n) => (0, o.jsx)(t.PopoverArrowComponent, { forwardRef: n, ...e }))));
                    },
                    2388: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.PopoverContent = t.PopoverContentComponent = void 0));
                        let o = n(4377),
                            i = n(810),
                            a = n(5881),
                            l = r(n(9331));
                        ((t.PopoverContentComponent = (e) => {
                            let { className: t, children: n, forwardRef: r, arrow: s, ...u } = e;
                            return (0, o.jsxs)('div', { className: (0, a.clsx)(l.default.root, t), ref: r, ...u, children: [n, (0, i.isValidElement)(s) && s] });
                        }),
                            (t.PopoverContent = (0, i.forwardRef)((e, n) => (0, o.jsx)(t.PopoverContentComponent, { forwardRef: n, ...e }))));
                    },
                    1435: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.PopoverContext = void 0),
                            (t.PopoverContext = (0, n(810).createContext)({ getItemProps: () => ({}), activeIndex: null, setActiveIndex: () => {}, isOpen: !1 })));
                    },
                    1964: (e) => {
                        e.exports = o;
                    },
                    352: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(a, 2));
                    },
                },
                s = {};
            function u(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var n = (s[e] = { exports: {} });
                return (l[e].call(n.exports, n, n.exports, u), n.exports);
            }
            ((u.d = (e, t) => {
                for (var n in t) u.o(t, n) && !u.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (u.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }),
                (u.nc = void 0));
            var c = {};
            (() => {
                (Object.defineProperty(c, '__esModule', { value: !0 }), (c.PopoverContent = c.Popover = void 0));
                var e = u(3024);
                Object.defineProperty(c, 'Popover', {
                    enumerable: !0,
                    get: function () {
                        return e.Popover;
                    },
                });
                var t = u(2388);
                Object.defineProperty(c, 'PopoverContent', {
                    enumerable: !0,
                    get: function () {
                        return t.PopoverContent;
                    },
                });
            })();
            var d = c.Popover,
                f = c.PopoverContent;
            c.__esModule;
        },
        35514: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => b });
            var r = n(25839),
                o = n(82298),
                i = n(74631),
                a = n(39004),
                l = n(61493),
                s = n(4071),
                u = n(66738),
                c = n(35262),
                d = n(23206),
                f = n.n(d);
            let p = { mainAxis: 10 },
                v = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, className: f().arrow },
                b = (e) => {
                    let {
                            contentElement: t,
                            buttons: n,
                            className: d,
                            popoverContentClassName: b,
                            renderChildren: m,
                            renderChildrenText: h,
                            isOpened: g,
                            onOpenChange: y,
                            arrowProps: w,
                            offsetOptions: E,
                            isNested: O,
                            isEnabled: S = !0,
                            contentDataTestId: x,
                            ...T
                        } = e,
                        [P, C] = (0, i.useState)(!1),
                        I = (0, i.useId)(),
                        R = null != y ? y : C,
                        [A, M] = (0, i.useState)(!0),
                        { formatMessage: _ } = (0, a.A)(),
                        j = (0, i.useCallback)(() => {
                            (M(!0), R(!1));
                        }, [M, R]),
                        k = (0, i.useCallback)((e) => {
                            e.stopPropagation();
                        }, []),
                        N = (0, i.useCallback)(
                            (e) => (t) => {
                                var n;
                                (t.stopPropagation(), M(null != (n = null == e ? void 0 : e(t)) && n), R(!1));
                            },
                            [M, R],
                        ),
                        L = (0, i.useMemo)(() => ({ ...v, ...w }), [w]),
                        D = (0, i.useMemo)(
                            () =>
                                n.map((e) => {
                                    let t = {
                                        className: (0, o.$)(f().button, e.props.className),
                                        onClick: N(e.props.onClick),
                                        'data-test-id': l.S7.POPOVER_WITH_ACTIONS_ACTION_BUTTON,
                                    };
                                    return (0, i.cloneElement)(e, t);
                                }),
                            [n, N],
                        ),
                        F = (0, i.useMemo)(() => {
                            let e = { isPopoverEnabled: S };
                            return (S && (e.popoverText = h), m(e));
                        }, [m, S, h]);
                    return S
                        ? (0, r.jsxs)(c.AM, {
                              open: null != g ? g : P,
                              onOpenChange: R,
                              arrowProps: L,
                              offsetOptions: E || p,
                              isNested: O,
                              returnFocus: A,
                              ...T,
                              children: [
                                  F,
                                  (0, r.jsx)(c.hl, {
                                      'aria-labelledby': I,
                                      className: (0, o.$)(f().popoverContent, b),
                                      onClick: k,
                                      'data-test-id': x,
                                      children: (0, r.jsxs)('div', {
                                          className: (0, o.$)(f().root, d),
                                          children: [
                                              !O &&
                                                  (0, r.jsx)(s.$, {
                                                      className: f().closeButton,
                                                      color: 'primary',
                                                      variant: 'text',
                                                      radius: 'round',
                                                      size: 'xxs',
                                                      onClick: j,
                                                      icon: (0, r.jsx)(u.I, { variant: 'close', size: 'xs' }),
                                                      'aria-label': _({ id: 'interface-actions.close' }),
                                                      'data-test-id': l.S7.POPOVER_WITH_ACTIONS_CLOSE_BUTTON,
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: f().content,
                                                  'data-test-id': l.S7.POPOVER_WITH_ACTIONS_TEXT,
                                                  children: [(0, r.jsx)('div', { id: I, children: t }), (0, r.jsx)('div', { className: f().buttons, children: D })],
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : F;
                };
        },
        37052: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => i });
            var r = n(67541),
                o = n(24591);
            let i = (e, t) => (0, r.A)((0, o.f)(e), (0, o.f)(t));
        },
        44851: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => r });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.ARTIST = 'artist'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.GENRE = 'genre'),
                    (e.ACTIVITY = 'activity'),
                    (e.MOOD = 'mood'),
                    (e.MICRO_GENRE = 'micro-genre'),
                    e
                );
            })({});
        },
        47538: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => o });
            var r = n(22939);
            function o(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Vibe;
            }
        },
        51514: (e, t, n) => {
            'use strict';
            n.d(t, { M1: () => r, UM: () => o, q7: () => a, yx: () => i });
            let r = 'user:onyourwave',
                o = ['activity'],
                i = 'diversity:reshuffle',
                a = 'multivibe';
        },
        55491: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => r });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.ARTIST = 'artist'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.CLIP = 'clip'),
                    (e.LABEL = 'label'),
                    (e.CONCERT = 'concert'),
                    e
                );
            })({});
        },
        56829: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { _: () => r }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'),
                        (e.ALBUM = 'album'),
                        (e.SINGLE = 'single'),
                        (e.COMPILATION = 'compilation'),
                        (e.PODCAST = 'podcast'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.VIDEO_SINGLE = 'video-single'),
                        (e.VIDEO_ALBUM = 'video-album'),
                        (e.RADIO = 'radio'),
                        (e.ASMR = 'asmr'),
                        (e.NOISE = 'noise'));
                })(r || (r = {})));
        },
        70849: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => f });
            var r = n(25839),
                o = n(74631),
                i = n(8487),
                a = n(66738),
                l = n(4254),
                s = n(51790),
                u = n(12039),
                c = n.n(u);
            let d = {
                    track: (0, r.jsx)(i.A, { id: 'notifications-info.track-link' }),
                    artist: (0, r.jsx)(i.A, { id: 'notifications-info.artist-link' }),
                    album: (0, r.jsx)(i.A, { id: 'notifications-info.album-link' }),
                    playlist: (0, r.jsx)(i.A, { id: 'notifications-info.playlist-link' }),
                    clip: (0, r.jsx)(i.A, { id: 'notifications-info.clip-link' }),
                    label: (0, r.jsx)(i.A, { id: 'notifications-info.label-link' }),
                    concert: (0, r.jsx)(i.A, { id: 'notifications-info.concert-link' }),
                },
                f = (e) => {
                    let { entityVariant: t, entityTitle: n, closeToast: u } = e,
                        f = (0, o.useMemo)(
                            () =>
                                (0, r.jsxs)(l.HL, {
                                    className: c().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: [
                                        d[t],
                                        '\xa0',
                                        (0, r.jsx)(l.HL, { className: c().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: n }),
                                        '\xa0',
                                        (0, r.jsx)(i.A, { id: 'notifications-info.copied' }),
                                    ],
                                }),
                            [t, n],
                        );
                    return (0, r.jsx)(s.$, {
                        closeToast: u,
                        cover: (0, r.jsx)(a.I, { className: c().icon, size: 'xs', variant: 'chain' }),
                        message: f,
                        coverRadius: 's',
                    });
                };
        },
        74682: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => m });
            var r = n(25839),
                o = n(39004),
                i = n(8487),
                a = n(61493),
                l = n(71035),
                s = n(66738),
                u = n(10820),
                c = n(91149),
                d = n(92942),
                f = n(27954),
                p = n(55491),
                v = n(6304),
                b = n(70849);
            let m = (e) => {
                let { shareLink: t, entityMeta: n, disabled: m, className: h, iconClassName: g, menuClassName: y, withSubmenu: w = !0, withNotification: E = !0 } = e,
                    { settings: O, shareIframe: S, fullscreenPlayer: x, fullscreenVideoPlayer: T } = (0, f.g)(),
                    { formatMessage: P } = (0, o.A)(),
                    { notify: C } = (0, d.l)(),
                    I = (0, l.c)(async () => {
                        if ((await window.navigator.clipboard.writeText(t), E)) {
                            let e = x.modal.isOpened || (!O.isMobile && T.modal.isOpened);
                            C((0, r.jsx)(b.D, { entityVariant: n.variant, entityTitle: n.title }), { containerId: e ? c.u.FULLSCREEN_INFO : c.u.INFO });
                        }
                    }),
                    R = (0, l.c)(() => {
                        n.id && S.openModal(n);
                    }),
                    A = n.id && n.variant !== p.Y.ARTIST && n.variant !== p.Y.CLIP;
                return w
                    ? (0, r.jsxs)(u.W1, {
                          offsetOptions: 3,
                          isMobile: O.isMobile,
                          className: h,
                          menuClassName: y,
                          label: P({ id: 'interface-actions.share' }),
                          icon: (0, r.jsx)(s.I, { className: g, variant: 'share', size: 'xxs' }),
                          disabled: m,
                          submenuProps: { 'data-test-id': a.S7.CONTEXT_MENU_SHARE },
                          'data-test-id': a.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: [
                              (0, r.jsx)(u.Dr, {
                                  onClick: I,
                                  icon: (0, r.jsx)(s.I, { variant: 'chain', size: 'xxs' }),
                                  'data-test-id': a.S7.CONTEXT_MENU_SHARE_COPY_LINK_BUTTON,
                                  children: (0, r.jsx)(i.A, { id: 'interface-actions.copy-link' }),
                              }),
                              A &&
                                  (0, r.jsx)(v.WithOffline, {
                                      fallback: (0, r.jsx)(u.Dr, {
                                          onClick: R,
                                          icon: (0, r.jsx)(s.I, { variant: 'code', size: 'xxs' }),
                                          'data-test-id': a.S7.CONTEXT_MENU_SHARE_IFRAME_BUTTON,
                                          children: (0, r.jsx)(i.A, { id: 'interface-actions.copy-iframe' }),
                                      }),
                                  }),
                          ],
                      })
                    : (0, r.jsx)(u.Dr, {
                          className: h,
                          onClick: I,
                          icon: (0, r.jsx)(s.I, { className: g, variant: 'share', size: 'xxs' }),
                          disabled: m,
                          'data-test-id': a.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: (0, r.jsx)(i.A, { id: 'interface-actions.share' }),
                      });
            };
        },
        79645: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => o });
            var r = n(95067);
            let o = (e) => {
                let t = e.get(r.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        83065: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => a });
            var r = n(90887),
                o = n(52830),
                i = n(27954);
            let a = (e) => {
                let { location: t } = (0, i.g)();
                return (0, r.r)(e, t.tld, o.B);
            };
        },
        87201: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => w });
            var r = n(25839),
                o = n(74631),
                i = n(39004),
                a = n(47538),
                l = n(22939),
                s = n(24591),
                u = n(71035),
                c = n(16886),
                d = n(57549),
                f = n(30290),
                p = n(91149),
                v = n(92942),
                b = n(27954),
                m = n(51514);
            let h = 'radio';
            var g = n(37052),
                y = n(30296);
            let w = (e) => {
                var t, n;
                let { seeds: w = [m.M1], pageIdForFrom: E, blockIdForFrom: O, onPlayInterrupted: S, parentContextId: x } = e,
                    { from: T } = (0, f.f)(
                        ((e, t) =>
                            !t || (null == e ? void 0 : e.includes(h)) || t.includes(h)
                                ? { pageId: e, blockId: t }
                                : { pageId: e, blockId: ''.concat(t, '-').concat(h) })(E, O),
                    ),
                    { formatMessage: P } = (0, i.A)(),
                    C = (0, y.e)(),
                    { notify: I } = (0, v.l)(),
                    { sonataState: R, vibe: A, fullscreenPlayer: M, user: _, freeAccess: j } = (0, b.g)(),
                    [k, N] = (0, o.useState)(null),
                    L = (0, u.c)(() => (M.modal.isOpened ? p.u.FULLSCREEN_ERROR : p.u.ERROR));
                ((0, o.useEffect)(() => {
                    let e =
                        null == C
                            ? void 0
                            : C.state.currentContext.onChange(() => {
                                  (0, a.i)(C.state.currentContext.value) ? N(C.state.currentContext.value) : N(null);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [C]),
                    (0, o.useEffect)(() => {
                        let e =
                            null == k
                                ? void 0
                                : k.observableActiveSession.onChange(() => {
                                      var e, t;
                                      (null == k || null == (e = k.observableActiveSession.value) ? void 0 : e.wave) &&
                                          A.setVibe(null == k || null == (t = k.observableActiveSession.value) ? void 0 : t.wave);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [k, A]));
                let D = (0, u.c)(async (e) => {
                        try {
                            await (null == C
                                ? void 0
                                : C.playContext({
                                      contextData: {
                                          type: l.K.Vibe,
                                          meta: { id: (0, s.f)(e) },
                                          seeds: e,
                                          from: T,
                                          includeTracksInResponse: !0,
                                          interactive: !0,
                                          parentContextId: x,
                                      },
                                      loadContextMeta: !0,
                                  }));
                        } catch (e) {
                            I((0, r.jsx)(d.h, { error: P({ id: 'vibe-errors.start-vibe' }) }), { containerId: L() });
                        }
                    }),
                    F = (0, u.c)(async (e) => {
                        if (C && k)
                            try {
                                await k.setSettings({ seeds: e, queueState: C.state.queueState, interactive: !0, from: T });
                            } catch (e) {
                                I((0, r.jsx)(d.h, { error: P({ id: 'vibe-errors.apply-vibe-setting' }) }), { containerId: L() });
                            }
                    }),
                    U = (0, u.c)(async (e) => {
                        if (C)
                            try {
                                await C.restartContext({ playAfterRestart: e });
                            } catch (e) {
                                I((0, r.jsx)(d.h, { error: P({ id: 'error-messages.something-went-wrong' }) }), { containerId: L() });
                            }
                    }),
                    z = !!k,
                    B = z && (0, g._)(null != (n = null == (t = A.meta) ? void 0 : t.seeds) ? n : [], w),
                    H = B && R.status === c.MT.PLAYING,
                    V = B && R.status === c.MT.PAUSED;
                (0, o.useEffect)(() => {
                    H && A.setIsApplying(!1);
                }, [H, A]);
                let Y = (0, u.c)(async () => {
                        if (!H && (j.isFreeWebUser || !_.isAuthorized)) {
                            null == S || S();
                            return;
                        }
                        (A.setIsApplying(!0), await D(w), A.setIsApplying(!1));
                    }),
                    W = (0, u.c)(async (e, t) => {
                        var n;
                        A.setIsApplying(!0);
                        let r = [];
                        if (A.meta && Array.isArray(null == (n = A.meta) ? void 0 : n.seeds))
                            if (A.meta.seeds.includes(e)) r = A.meta.seeds.filter((t) => t !== e);
                            else if (t) r = [e, ...A.meta.seeds.filter((e) => e.includes('setting'))];
                            else {
                                let t = e.split(':')[0];
                                r = t
                                    ? ['settingDiversity', 'settingMoodEnergy', 'settingLanguage'].includes(t)
                                        ? [...A.meta.seeds.filter((e) => !e.startsWith(''.concat(t, ':'))), e]
                                        : [...A.meta.seeds, e]
                                    : [...A.meta.seeds];
                            }
                        else r = [e];
                        (k ? (await F(r), await U(!0)) : await D(r), A.setIsApplying(!1));
                    });
                return {
                    isVibeContext: z,
                    isPlaying: H,
                    isPaused: V,
                    isCurrent: B,
                    togglePlay: Y,
                    resetContext: (0, u.c)(async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [m.M1];
                        (A.setIsApplying(!0), k ? (await F(e), await U(!0)) : await D(e), A.setIsApplying(!1));
                    }),
                    applySetting: W,
                };
            };
        },
    },
]);
