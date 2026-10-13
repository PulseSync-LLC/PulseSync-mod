(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1091, 1943],
    {
        3053: (e, t, n) => {
            (Promise.resolve().then(n.bind(n, 30871)), Promise.resolve().then(n.bind(n, 61734)));
        },
        6969: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => r });
            var r = (function (e) {
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
        11871: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { L: () => r }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(r || (r = {})));
        },
        24169: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => r });
            var r = (function (e) {
                return ((e[(e.CREATED = 0)] = 'CREATED'), (e[(e.LIKED = 1)] = 'LIKED'), e);
            })({});
        },
        28257: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        36581: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsPageHeader_root__GfGIl',
                container: 'CollectionPlaylistsPageHeader_container__oh7C2',
                title: 'CollectionPlaylistsPageHeader_title__2D23I',
                staticTabs: 'CollectionPlaylistsPageHeader_staticTabs__9c9yq',
                stickyTabs: 'CollectionPlaylistsPageHeader_stickyTabs__Iot6U',
                tab: 'CollectionPlaylistsPageHeader_tab__aNTOB',
                tabsShimmer: 'CollectionPlaylistsPageHeader_tabsShimmer__u9JIN',
                tabShimmer: 'CollectionPlaylistsPageHeader_tabShimmer__ekXeT',
                staticHeader: 'CollectionPlaylistsPageHeader_staticHeader__lzc4l',
                important: 'CollectionPlaylistsPageHeader_important__uR36G',
                stickyHeader: 'CollectionPlaylistsPageHeader_stickyHeader__ojvbQ',
            };
        },
        36808: (e) => {
            var t = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
            function n(e) {
                return (e || '')
                    .match(t)
                    .map(function (e) {
                        if (e) {
                            var t = e.split(';'),
                                n = t[0].split('-'),
                                r = 3 === n.length;
                            return { code: n[0], script: r ? n[1] : null, region: r ? n[2] : n[1], quality: t[1] ? parseFloat(t[1].split('=')[1]) : 1 };
                        }
                    })
                    .filter(function (e) {
                        return e;
                    })
                    .sort(function (e, t) {
                        return t.quality - e.quality;
                    });
            }
            ((e.exports.parse = n),
                (e.exports.pick = function (e, t, r) {
                    if (((r = r || {}), !e || !e.length || !t)) return null;
                    'string' == typeof t && (t = n(t));
                    for (
                        var a = e.map(function (e) {
                                var t = e.split('-'),
                                    n = 3 === t.length;
                                return { code: t[0], script: n ? t[1] : null, region: n ? t[2] : t[1] };
                            }),
                            l = 0;
                        l < t.length;
                        l++
                    )
                        for (
                            var i = t[l],
                                o = i.code.toLowerCase(),
                                s = i.region ? i.region.toLowerCase() : i.region,
                                c = i.script ? i.script.toLowerCase() : i.script,
                                d = 0;
                            d < a.length;
                            d++
                        ) {
                            var u = a[d].code.toLowerCase(),
                                g = a[d].script ? a[d].script.toLowerCase() : a[d].script,
                                p = a[d].region ? a[d].region.toLowerCase() : a[d].region;
                            if (o === u && (r.loose || !c || c === g) && (r.loose || !s || s === p)) return e[d];
                        }
                    return null;
                }));
        },
        37269: (e) => {
            e.exports = {
                sortableCard: 'CollectionPlaylistsDnD_sortableCard__I6c0o',
                sortableCard_dragging: 'CollectionPlaylistsDnD_sortableCard_dragging__x52C_',
                dragHandle: 'CollectionPlaylistsDnD_dragHandle__qwpD3',
                dragHandle_keyboardDragging: 'CollectionPlaylistsDnD_dragHandle_keyboardDragging__Hc00y',
                dragHandleIcon: 'CollectionPlaylistsDnD_dragHandleIcon__5RspL',
                dragOverlay: 'CollectionPlaylistsDnD_dragOverlay__JS2aW',
                dragOverlayBoundary: 'CollectionPlaylistsDnD_dragOverlayBoundary__xFuFN',
                dragOverlayHandle: 'CollectionPlaylistsDnD_dragOverlayHandle__eESPE',
                dragOverlayCover: 'CollectionPlaylistsDnD_dragOverlayCover__mKGGn',
                dragOverlayImage: 'CollectionPlaylistsDnD_dragOverlayImage__dDDeR',
            };
        },
        49497: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsPageEmpty_root__mKZt2',
                icon: 'CollectionPlaylistsPageEmpty_icon__x9v_P',
                title: 'CollectionPlaylistsPageEmpty_title__8RfSi',
            };
        },
        56107: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => i });
            var r = n(36808),
                a = Object.defineProperty,
                l = (e, t, n) => (
                    ((e, t, n) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)))(e, 'symbol' != typeof t ? t + '' : t, n),
                    n
                );
            class i {
                constructor({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: t }) {
                    (l(this, 'brandLangs'),
                        l(this, 'brandDefaultLang'),
                        l(this, 'regionLangs'),
                        l(this, 'enableWideLanguageSelectWithBrandLangs'),
                        (this.brandLangs = e.langs),
                        (this.brandDefaultLang = e.defaultLang),
                        (this.regionLangs = e.regionLangs),
                        (this.enableWideLanguageSelectWithBrandLangs = t));
                }
                static parseAcceptLanguage(e) {
                    return r.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: n, acceptLangs: r }) {
                    var a, l, i;
                    let o = e ? (null == (a = this.regionLangs) ? void 0 : a[e]) : void 0,
                        s = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (l = null == o ? void 0 : o.langs) ? l : this.brandLangs,
                        c = null != (i = null == o ? void 0 : o.defaultLang) ? i : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: s, defaultLang: c, urlLang: t, cookieLang: n, acceptLangs: r });
                }
                intersect(e, t) {
                    let n = new Set(t);
                    return e.filter((e) => n.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: n, cookieLang: r, acceptLangs: a }) {
                    if ('string' == typeof n && e.includes(n)) return n;
                    let l = null != a ? a : [],
                        i = r ? [r, ...l] : l,
                        o = this.intersect(i, e)[0];
                    return void 0 !== o ? o : t;
                }
            }
        },
        58245: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => a, d: () => r });
            let r = 20,
                a = 1;
        },
        61734: (e, t, n) => {
            'use strict';
            n.d(t, { CollectionPlaylistsPage: () => eM });
            var r = n(25839),
                a = n(82298),
                l = n(88204),
                i = n(84059),
                o = n(74631),
                s = n(39004),
                c = n(61493),
                d = n(99670),
                u = n(70238),
                g = n(71035),
                p = n(49656),
                m = n(1407),
                y = n(41707),
                v = n(74749),
                h = n(20258),
                f = n(10322),
                b = n(89192),
                E = n(30716),
                _ = n(27954),
                x = (function (e) {
                    return ((e.CREATED = 'created'), (e.LIKED = 'liked'), e);
                })({}),
                C = n(6969),
                I = n(99401),
                w = n(26076),
                L = n(19412),
                P = n(6968),
                A = n(58245),
                T = n(24169),
                k = n(98797),
                D = n(74268),
                R = n(71910),
                S = n(69084),
                O = n(91149),
                j = n(92942),
                M = n(65343),
                N = n(89209),
                B = n(20790),
                H = n(31488),
                G = n(57549);
            let z = (e) => {
                    let [t] = (0, k.sl)(e, 1);
                    if (!t) return !0;
                    let n =
                        t === document.scrollingElement
                            ? { bottom: window.innerHeight, height: window.innerHeight, left: 0, right: window.innerWidth, top: 0, width: window.innerWidth }
                            : t.getBoundingClientRect();
                    return ((e, t) => {
                        let n = Math.min(e.right, t.right) > Math.max(e.left, t.left),
                            r = Math.min(e.bottom, t.bottom) > Math.max(e.top, t.top);
                        return n && r;
                    })(e.getBoundingClientRect(), n);
                },
                F = (e, t, n) => {
                    let r = Math.min(t, n),
                        a = Math.max(t, n);
                    if (r < 0 || e.length <= a + 1) return !1;
                    let l = e[r],
                        i = e[a + 1];
                    return 'number' == typeof l && 'number' == typeof i && i - l > 0;
                };
            var K = n(58025);
            class U extends k.uN {}
            (0, K._)(U, 'activators', [
                ...k.uN.activators,
                {
                    eventName: 'onClick',
                    handler: (e, t) => {
                        let { nativeEvent: n } = e,
                            { onActivation: r } = t,
                            a = n.pointerType;
                        return 0 === n.button && 0 !== n.detail && (!a || 'mouse' === a) && (null == r || r({ event: n }), !0);
                    },
                },
            ]);
            let W = 'collection-playlist-drag-handle',
                V = (e) => ''.concat(W, '-').concat(String(e));
            var Y = n(4071),
                $ = n(86869),
                X = n(4254),
                q = n(62661),
                Z = n(6323),
                Q = n(37269),
                J = n.n(Q);
            let ee = (e) => {
                    let { playlist: t } = e,
                        { activatorEvent: n, over: l } = (0, k.fF)(),
                        i = (null == n ? void 0 : n.type) === 'click' || (null == n ? void 0 : n.type) === 'keydown';
                    return i && !l
                        ? null
                        : (0, r.jsxs)('div', {
                              className: J().dragOverlay,
                              'aria-hidden': !0,
                              children: [
                                  (0, r.jsx)($.t, {
                                      className: J().dragOverlayCover,
                                      radius: 's',
                                      withShadow: !0,
                                      children: (0, r.jsx)(Z.B, {
                                          className: J().dragOverlayImage,
                                          src: t.coverUri,
                                          size: 200,
                                          fit: 'cover',
                                          alt: '',
                                          withAvatarReplace: !0,
                                      }),
                                  }),
                                  (0, r.jsx)(Y.$, {
                                      className: (0, a.$)(J().dragHandle, J().dragOverlayHandle, { [J().dragHandle_keyboardDragging]: i }),
                                      variant: 'text',
                                      color: 'secondary',
                                      radius: 'round',
                                      size: 'xxs',
                                      withRipple: !1,
                                      withHover: !1,
                                      tabIndex: -1,
                                      icon: (0, r.jsx)(q.O, { className: J().dragHandleIcon, isDragging: !0 }),
                                  }),
                                  (0, r.jsx)(X.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }),
                              ],
                          });
                },
                et = (e) => {
                    let { boundaryElement: t, children: n } = e,
                        a = (0, o.useRef)(null);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            var e, n;
                            let r = a.current;
                            if ((r && (r.style.visibility = 'hidden'), !r || !t)) return;
                            let l = null,
                                i = () => {
                                    l = null;
                                    let e = t.getBoundingClientRect(),
                                        n = window.innerWidth,
                                        a = window.innerHeight,
                                        i = Math.min(a, Math.max(0, e.top)),
                                        o = Math.min(n, Math.max(0, n - e.right)),
                                        s = Math.min(a, Math.max(0, a - e.bottom)),
                                        c = Math.min(n, Math.max(0, e.left)),
                                        d = window.getComputedStyle(t).borderRadius;
                                    ((r.style.clipPath = 'inset('.concat(i, 'px ').concat(o, 'px ').concat(s, 'px ').concat(c, 'px round ').concat(d, ')')),
                                        (r.style.visibility = 'visible'));
                                },
                                o = () => {
                                    null === l && (l = window.requestAnimationFrame(i));
                                },
                                s = new ResizeObserver(o);
                            return (
                                i(),
                                s.observe(t),
                                window.addEventListener('resize', o),
                                window.addEventListener('scroll', o, !0),
                                null == (e = window.visualViewport) || e.addEventListener('resize', o),
                                null == (n = window.visualViewport) || n.addEventListener('scroll', o),
                                () => {
                                    var e, t;
                                    (s.disconnect(),
                                        window.removeEventListener('resize', o),
                                        window.removeEventListener('scroll', o, !0),
                                        null == (e = window.visualViewport) || e.removeEventListener('resize', o),
                                        null == (t = window.visualViewport) || t.removeEventListener('scroll', o),
                                        null !== l && window.cancelAnimationFrame(l));
                                }
                            );
                        }, [t]),
                        (0, r.jsx)('div', { className: J().dragOverlayBoundary, ref: a, children: n })
                    );
                },
                en = '[data-collection-playlist-sortable-card]',
                er = [
                    (e) => {
                        let { activeNodeRect: t, over: n, overlayNodeRect: r, transform: a } = e,
                            l = null != r ? r : t;
                        return l && n ? { ...a, x: n.rect.left - l.left, y: n.rect.top - l.top } : a;
                    },
                ],
                ea = [M.l.INCREASE_VOLUME, M.l.DECREASE_VOLUME, M.l.SLIDE_FORWARD, M.l.SLIDE_BACKWARD, M.l.CLOSE],
                el = (e) => {
                    if (!e.isConnected || e.closest('[aria-hidden="true"], [inert]')) return !1;
                    let t = e;
                    for (; t;) {
                        let e = window.getComputedStyle(t);
                        if ('none' === e.display || 'hidden' === e.visibility) return !1;
                        t = t.parentElement;
                    }
                    return !0;
                },
                ei = (0, l.PA)((e) => {
                    let { children: t, onDragStateChange: n, onKeyboardTargetReveal: a, overlayBoundaryElement: l, playlists: i } = e,
                        [c, d] = (0, o.useState)(null),
                        [u, p] = (0, o.useState)(''),
                        m = (0, o.useRef)(!0),
                        y = (0, o.useRef)({
                            activePlaylistIndex: -1,
                            input: null,
                            isOutsidePointerCancel: !1,
                            keyboardPendingDirection: null,
                            keyboardResolvedTargetIndex: -1,
                            keyboardTargetIndex: -1,
                        }),
                        v = (0, o.useRef)({ isFinishing: !1, observer: null, targetId: null, timeoutId: null }),
                        { formatMessage: h } = (0, s.A)(),
                        { notify: f } = (0, j.l)(),
                        b = (0, B.z)(),
                        E = i.items.map((e, t) => {
                            var n;
                            return null != (n = null == e ? void 0 : e.key) ? n : ''.concat('collection-playlist-placeholder', '-').concat(t);
                        }),
                        _ = ((e) => {
                            let t = [0];
                            for (let r of e) {
                                var n;
                                let e = !!(r && (r.isFavouritePlaylist || r.generatedPlaylistType));
                                t.push((null != (n = t.at(-1)) ? n : 0) + Number(e));
                            }
                            return t;
                        })(i.items),
                        x = () => {
                            var e, t;
                            let n = y.current.keyboardTargetIndex;
                            return n >= 0 && null != (t = null == (e = i.items[n]) ? void 0 : e.key) ? t : null;
                        },
                        C = (0, g.c)((e, t) => {
                            var n, r;
                            let l = x(),
                                i = null === l ? void 0 : t.context.droppableContainers.get(l);
                            if (
                                !(null !== l && (null == i ? void 0 : i.node.current) && t.context.droppableRects.has(l)) &&
                                y.current.keyboardPendingDirection === e.code
                            ) {
                                (e.preventDefault(), a(y.current.keyboardTargetIndex));
                                return;
                            }
                            return ((e, t, n) => {
                                var r, a, l, i, o, s;
                                let { context: c } = t;
                                if (
                                    !((e) => 'ArrowDown' === e || 'ArrowLeft' === e || 'ArrowRight' === e || 'ArrowUp' === e)(e.code) ||
                                    (e.preventDefault(), n.activeIndex < 0 || n.currentTargetIndex < 0 || !c.collisionRect)
                                )
                                    return;
                                let d = null === n.currentTargetId ? void 0 : c.droppableContainers.get(n.currentTargetId),
                                    u = null === n.currentTargetId ? void 0 : c.droppableRects.get(n.currentTargetId),
                                    g = null == d ? void 0 : d.node.current,
                                    p = d;
                                if (!(null == p ? void 0 : p.node.current)) {
                                    for (let e of c.droppableContainers.getEnabled())
                                        if (e.node.current) {
                                            p = e;
                                            break;
                                        }
                                }
                                let m = null == p ? void 0 : p.node.current,
                                    y = (0, D.XA)(p) ? p.data.current.sortable : void 0,
                                    v = ((e) => {
                                        let t = null == e ? void 0 : e.parentElement;
                                        for (; t;) {
                                            let e = window.getComputedStyle(t).display;
                                            if ('grid' === e || 'inline-grid' === e) return t;
                                            t = t.parentElement;
                                        }
                                    })(null != m ? m : null);
                                if (!p || !m || !y || !v) {
                                    null == (a = n.onCurrentTargetMissing) || a.call(n);
                                    return;
                                }
                                if (p.disabled) return;
                                let h = window.getComputedStyle(v),
                                    f = ((e) => {
                                        let t = e.trim();
                                        if (!t || 'none' === t) return 0;
                                        let n = /^repeat\(\s*(\d+)\s*,/.exec(t);
                                        return (null == n ? void 0 : n[1]) ? Number(n[1]) : t.split(/\s+/).length;
                                    })(h.gridTemplateColumns);
                                if (0 === f) return;
                                g && !z(g) && (null == (l = g.scrollIntoView) || l.call(g, { behavior: 'auto', block: 'nearest', inline: 'nearest' }));
                                let b = ((e) => {
                                    let t,
                                        { activeIndex: n, columnsCount: r, currentIndex: a, direction: l, isRtl: i, itemsCount: o, movementBarrierPrefix: s } = e;
                                    switch (l) {
                                        case 'ArrowLeft':
                                            t = a + (i ? 1 : -1);
                                            break;
                                        case 'ArrowRight':
                                            t = a + (i ? -1 : 1);
                                            break;
                                        case 'ArrowUp':
                                            t = a - r;
                                            break;
                                        case 'ArrowDown':
                                            t = a + r;
                                    }
                                    if (!(t < 0 || t >= o || F(s, n, t))) return t;
                                })({
                                    activeIndex: n.activeIndex,
                                    columnsCount: f,
                                    currentIndex: n.currentTargetIndex,
                                    direction: e.code,
                                    isRtl: 'rtl' === h.direction,
                                    itemsCount: y.items.length,
                                    movementBarrierPrefix: n.movementBarrierPrefix,
                                });
                                if (void 0 === b) return;
                                let E = y.items[b];
                                if (void 0 === E) return;
                                let _ = c.droppableContainers.get(E),
                                    x = c.droppableRects.get(E);
                                if (null == _ ? void 0 : _.disabled) return;
                                if ((null == (r = n.onTargetIndexChange) || r.call(n, b, e.code), !(null == _ ? void 0 : _.node.current) || !x))
                                    return void (n.onTargetMissing
                                        ? n.onTargetMissing(b)
                                        : null == (i = g.scrollIntoView) ||
                                          i.call(g, { behavior: 'auto', block: b < n.currentTargetIndex ? 'end' : 'start', inline: 'nearest' }));
                                let C = 'ArrowLeft' === e.code || 'ArrowRight' === e.code;
                                if (C || !u || ((e, t) => Math.min(e.right, t.right) > Math.max(e.left, t.left))(u, x))
                                    return (
                                        (!z(_.node.current) || (C && u && !((e, t) => Math.min(e.bottom, t.bottom) > Math.max(e.top, t.top))(u, x))) &&
                                            (null == (o = (s = _.node.current).scrollIntoView) || o.call(s, { behavior: 'auto', block: 'nearest', inline: 'nearest' })),
                                        { x: x.left, y: x.top }
                                    );
                            })(e, t, {
                                activeIndex: y.current.activePlaylistIndex,
                                currentTargetId: null != (r = null != l ? l : null == (n = t.context.over) ? void 0 : n.id) ? r : null,
                                currentTargetIndex: y.current.keyboardTargetIndex,
                                movementBarrierPrefix: _,
                                onCurrentTargetMissing: () => {
                                    let e = y.current.keyboardTargetIndex;
                                    e < 0 || a(e);
                                },
                                onTargetIndexChange: (e, t) => {
                                    ((y.current.keyboardTargetIndex = e), (y.current.keyboardPendingDirection = t));
                                },
                                onTargetMissing: (e) => {
                                    a(e);
                                },
                            });
                        }),
                        I = (0, g.c)((e) => {
                            if ('keyboard' === y.current.input) {
                                var t;
                                let n = x(),
                                    r = ((e, t) => {
                                        if (null === t) return [];
                                        let n = e.droppableContainers.find((e) => e.id === t),
                                            r = e.droppableRects.get(t);
                                        return n && !n.disabled && n.node.current && r ? [{ id: t, data: { droppableContainer: n, value: 1 } }] : [];
                                    })(e, n);
                                return (
                                    (null == (t = r[0]) ? void 0 : t.id) === n &&
                                        ((y.current.keyboardResolvedTargetIndex = y.current.keyboardTargetIndex), (y.current.keyboardPendingDirection = null)),
                                    r
                                );
                            }
                            return ((e) => {
                                let t = (0, k.Qo)(e);
                                if (0 === t.length) return [];
                                let n = new Set(),
                                    r = [];
                                for (let { id: e } of t) n.add(e);
                                for (let t of e.droppableContainers) n.has(t.id) && r.push(t);
                                return (0, k.fp)({ ...e, droppableContainers: r });
                            })(e);
                        }),
                        w = (0, k.FR)(
                            (0, k.MS)(k.cA, {
                                activationConstraint: { distance: 4 },
                                onActivation: () => {
                                    y.current.input = 'pointer';
                                },
                            }),
                            (0, k.MS)(k.IG, {
                                activationConstraint: { delay: 250, tolerance: 5 },
                                onActivation: () => {
                                    y.current.input = 'pointer';
                                },
                            }),
                            (0, k.MS)(U, {
                                coordinateGetter: C,
                                onActivation: () => {
                                    y.current.input = 'keyboard';
                                },
                                scrollBehavior: 'auto',
                            }),
                        ),
                        L = (0, o.useCallback)(
                            (e) => {
                                var t;
                                return (null == (t = i.items.find((t) => (null == t ? void 0 : t.key) === e)) ? void 0 : t.title) || h({ id: 'entity-names.playlist' });
                            },
                            [h, i.items],
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                let t = i.items.findIndex((t) => (null == t ? void 0 : t.key) === e);
                                if (!(t < 0)) return { position: t + 1, total: i.kinds.length };
                            },
                            [i.items, i.kinds.length],
                        ),
                        A = { draggable: h({ id: 'drag-and-drop.collection-playlist-move-instructions' }) },
                        T = (0, g.c)(() => {
                            ((y.current.activePlaylistIndex = -1),
                                (y.current.input = null),
                                (y.current.isOutsidePointerCancel = !1),
                                (y.current.keyboardPendingDirection = null),
                                (y.current.keyboardResolvedTargetIndex = -1),
                                (y.current.keyboardTargetIndex = -1));
                        }),
                        M = (0, g.c)(() => {
                            var e;
                            (null == (e = v.current.observer) || e.disconnect(),
                                (v.current.observer = null),
                                null !== v.current.timeoutId && (window.clearTimeout(v.current.timeoutId), (v.current.timeoutId = null)),
                                (v.current.targetId = null),
                                (v.current.isFinishing = !1));
                        }),
                        K = (0, g.c)(function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!m.current) return 'resolved';
                            let n = document.activeElement;
                            if (n !== document.body) {
                                if (!(n instanceof HTMLElement) || el(n)) return 'resolved';
                                n.blur();
                            }
                            let r = document.getElementById(V(e));
                            for (let e of [
                                r,
                                t ? Array.from(document.querySelectorAll('[role="tab"][aria-selected="true"]')).find((e) => e.tabIndex >= 0 && el(e)) : void 0,
                            ])
                                if (e && el(e) && (e.focus({ preventScroll: !0 }), document.activeElement === e)) return 'resolved';
                            return 'missing';
                        }),
                        Y = (0, g.c)((e) => {
                            var t;
                            if (((v.current.targetId = e), (v.current.isFinishing = !0), 'resolved' === K(e))) return void M();
                            (null == (t = v.current.observer) || t.disconnect(),
                                null !== v.current.timeoutId && window.clearTimeout(v.current.timeoutId),
                                (v.current.observer = new MutationObserver(() => {
                                    v.current.targetId === e && v.current.isFinishing && 'resolved' === K(e) && M();
                                })),
                                v.current.observer.observe(document.body, {
                                    attributeFilter: ['aria-hidden', 'class', 'hidden', 'inert', 'style'],
                                    attributes: !0,
                                    childList: !0,
                                    subtree: !0,
                                }),
                                (v.current.timeoutId = window.setTimeout(() => {
                                    (v.current.targetId === e && v.current.isFinishing && K(e, !0), M());
                                }, 1e4)));
                        }),
                        $ = (0, g.c)((e) => {
                            requestAnimationFrame(() => {
                                Y(e);
                            });
                        }),
                        X = (0, g.c)((e) => {
                            let { active: t } = e,
                                r = 'keyboard' === y.current.input,
                                l = i.items.findIndex((e) => (null == e ? void 0 : e.key) === String(t.id));
                            if (
                                ((y.current.activePlaylistIndex = l),
                                M(),
                                (y.current.input = r ? 'keyboard' : 'pointer'),
                                (y.current.isOutsidePointerCancel = !1),
                                (y.current.keyboardPendingDirection = null),
                                (y.current.keyboardResolvedTargetIndex = r ? l : -1),
                                (y.current.keyboardTargetIndex = r ? l : -1),
                                r && l >= 0)
                            ) {
                                let e = document.getElementById(V(t.id)),
                                    n = null == e ? void 0 : e.closest(en);
                                n && !z(n) && a(l);
                            }
                            (d(t.id), n(!0));
                        }),
                        q = (0, g.c)(() => {
                            let e = 'keyboard' === y.current.input ? c : null,
                                t = null !== e && !y.current.isOutsidePointerCancel;
                            (T(), d(null), n(!1), t && Y(e));
                        }),
                        Z = (0, g.c)(async (e) => {
                            var t;
                            let { active: a, over: l } = e,
                                o = 'keyboard' === y.current.input,
                                s = y.current.keyboardResolvedTargetIndex === y.current.keyboardTargetIndex,
                                c = o ? (s ? x() : null) : null != (t = null == l ? void 0 : l.id) ? t : null;
                            if ((d(null), n(!1), null === c || c === a.id)) {
                                (o && Y(null != c ? c : a.id), T());
                                return;
                            }
                            let u = String(a.id);
                            o && ((v.current.targetId = a.id), (v.current.isFinishing = !1), K(a.id));
                            let g = i.movePlaylist(u, String(c)),
                                b = i.isPlaylistMovePending;
                            (queueMicrotask(T), b && p(h({ id: 'drag-and-drop.collection-playlist-move-saving' }, { playlistName: L(u) })));
                            let E = await g;
                            if (m.current) {
                                if (void 0 === E && b) {
                                    (p(''), o && $(a.id));
                                    return;
                                }
                                if (E === H.F.OK) {
                                    let e = P(u);
                                    e && p(h({ id: 'drag-and-drop.collection-playlist-move-success' }, { playlistName: L(u), position: e.position, total: e.total }));
                                }
                                if (E === H.F.ERROR) {
                                    let e = h({ id: 'drag-and-drop.collection-playlist-move-error' });
                                    (p(e), f((0, r.jsx)(G.h, { error: e }), { containerId: O.u.ERROR }));
                                }
                                o && $(a.id);
                            }
                        });
                    ((0, o.useEffect)(() => {
                        let e = v.current.targetId;
                        if (null !== e) {
                            let t = K(e);
                            v.current.isFinishing && 'resolved' === t && M();
                        }
                    }),
                        (0, o.useEffect)(() => {
                            if (null !== c && 'keyboard' === y.current.input) {
                                for (let e of ea) null == b || b.disable(N.M.MAIN, e);
                                return () => {
                                    for (let e of ea) null == b || b.enable(N.M.MAIN, e);
                                };
                            }
                        }, [c, b]),
                        (0, o.useEffect)(() => {
                            if (null === c || 'keyboard' !== y.current.input) return;
                            let e = null,
                                t = () => {
                                    ((y.current.isOutsidePointerCancel = !0),
                                        (0, R.flushSync)(() => {
                                            document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: !1, cancelable: !0, code: 'Escape', key: 'Escape' }));
                                        }));
                                },
                                n = (n) => {
                                    let r = n.target,
                                        a = document.getElementById(V(c)),
                                        l = null == a ? void 0 : a.closest(en),
                                        i = r instanceof Node && (null == l ? void 0 : l.contains(r)),
                                        o = ((e) => e instanceof Element && null !== e.closest('[id^="'.concat(W, '-"]')))(r);
                                    if (!i || 'mouse' === n.pointerType || o) {
                                        if ('mouse' === n.pointerType || o) return void t();
                                        e = { clientX: n.clientX, clientY: n.clientY, pointerId: n.pointerId };
                                    }
                                },
                                r = (t) => {
                                    e && e.pointerId === t.pointerId && (Math.abs(t.clientX - e.clientX) > 5 || Math.abs(t.clientY - e.clientY) > 5) && (e = null);
                                },
                                a = (n) => {
                                    e && e.pointerId === n.pointerId && ((e = null), t());
                                },
                                l = (t) => {
                                    (null == e ? void 0 : e.pointerId) === t.pointerId && (e = null);
                                };
                            return (
                                document.addEventListener('pointerdown', n, !0),
                                document.addEventListener('pointermove', r, !0),
                                document.addEventListener('pointerup', a, !0),
                                document.addEventListener('pointercancel', l, !0),
                                () => {
                                    (document.removeEventListener('pointerdown', n, !0),
                                        document.removeEventListener('pointermove', r, !0),
                                        document.removeEventListener('pointerup', a, !0),
                                        document.removeEventListener('pointercancel', l, !0));
                                }
                            );
                        }, [c]),
                        (0, o.useEffect)(
                            () => (
                                (m.current = !0),
                                () => {
                                    ((m.current = !1), M(), T(), n(!1));
                                }
                            ),
                            [M, n, T],
                        ));
                    let Q = i.items.find((e) => (null == e ? void 0 : e.key) === String(c)),
                        J = null !== c && 'keyboard' === y.current.input,
                        ei = (e) => {
                            let { activeIndex: t, index: n, overIndex: r, rects: a } = e;
                            if (t < 0 || r < 0 || t === r || n === t) return null;
                            let l = t < r;
                            if (!(l ? n > t && n <= r : n >= r && n < t) || F(_, t, r)) return null;
                            let i = a[n],
                                o = a[l ? n - 1 : n + 1];
                            return i && o ? { x: o.left - i.left, y: o.top - i.top, scaleX: 1, scaleY: 1 } : null;
                        };
                    return (0, r.jsxs)(k.Mp, {
                        accessibility: {
                            announcements: {
                                onDragStart(e) {
                                    var t, n;
                                    let { active: r } = e,
                                        a = String(r.id),
                                        l = P(a);
                                    return h(
                                        { id: 'drag-and-drop.collection-playlist-move-start' },
                                        {
                                            playlistName: L(a),
                                            position: null != (t = null == l ? void 0 : l.position) ? t : 0,
                                            total: null != (n = null == l ? void 0 : l.total) ? n : 0,
                                        },
                                    );
                                },
                                onDragOver(e) {
                                    var t, n;
                                    let { active: r, over: a } = e;
                                    if (!a) return '';
                                    let l = P(String(a.id));
                                    return h(
                                        { id: 'drag-and-drop.collection-playlist-move-over' },
                                        {
                                            playlistName: L(String(r.id)),
                                            position: null != (t = null == l ? void 0 : l.position) ? t : 0,
                                            total: null != (n = null == l ? void 0 : l.total) ? n : 0,
                                        },
                                    );
                                },
                                onDragEnd(e) {
                                    let { over: t } = e,
                                        n = 'keyboard' === y.current.input && y.current.keyboardResolvedTargetIndex === y.current.keyboardTargetIndex && null !== x();
                                    return t || n ? '' : h({ id: 'drag-and-drop.collection-playlist-move-cancel' });
                                },
                                onDragCancel: () => h({ id: 'drag-and-drop.collection-playlist-move-cancel' }),
                            },
                            screenReaderInstructions: A,
                        },
                        autoScroll: { layoutShiftCompensation: !1 },
                        sensors: w,
                        collisionDetection: I,
                        onDragStart: X,
                        onDragCancel: q,
                        onDragEnd: Z,
                        children: [
                            (0, r.jsx)(D.gB, { items: E, strategy: ei, children: t }),
                            (0, r.jsx)(S.q, { role: 'status', 'aria-live': 'polite', 'aria-atomic': 'true', children: u }),
                            null !== c &&
                                (0, R.createPortal)(
                                    (0, r.jsx)(et, {
                                        boundaryElement: l,
                                        children: (0, r.jsx)(k.Hd, {
                                            adjustScale: !J,
                                            dropAnimation: { duration: 0 },
                                            modifiers: J ? er : void 0,
                                            transition: J ? 'none' : void 0,
                                            children: Q ? (0, r.jsx)(ee, { playlist: Q }) : null,
                                        }),
                                    }),
                                    window.document.body,
                                ),
                        ],
                    });
                }),
                eo = (0, l.PA)((e) => {
                    let { playlist: t, playlists: n } = e,
                        { formatMessage: l } = (0, s.A)(),
                        i = n.isPlaylistMovePending,
                        d = (0, o.useRef)(null),
                        {
                            attributes: u,
                            isDragging: p,
                            listeners: m,
                            setActivatorNodeRef: v,
                            setNodeRef: h,
                            transform: f,
                            transition: b,
                        } = (0, D.gl)({ id: t.key, disabled: i }),
                        E = {
                            '--collection-playlist-transition': b,
                            '--collection-playlist-translate-x': f ? ''.concat(Math.round(f.x), 'px') : void 0,
                            '--collection-playlist-translate-y': f ? ''.concat(Math.round(f.y), 'px') : void 0,
                            '--collection-playlist-scale-x': null == f ? void 0 : f.scaleX,
                            '--collection-playlist-scale-y': null == f ? void 0 : f.scaleY,
                        },
                        _ = (0, g.c)((e) => {
                            let t = !i && !p && 'mouse' === d.current && 0 === e.button && e.detail > 0;
                            if (((d.current = null), t)) {
                                var n;
                                null == m || null == (n = m.onClick) || n.call(m, e);
                            }
                            (e.preventDefault(), e.stopPropagation());
                        }),
                        x = (0, g.c)((e) => {
                            d.current = e.pointerType;
                        }),
                        C = (0, g.c)((e) => {
                            var t;
                            let n = e.target;
                            i ||
                                !(n instanceof Node) ||
                                !e.currentTarget.contains(n) ||
                                (n instanceof Element &&
                                    null !==
                                        n.closest(
                                            'a[href], button, input, select, textarea, [role="button"], [role="link"], [contenteditable]:not([contenteditable="false"])',
                                        )) ||
                                null == m ||
                                null == (t = m.onMouseDown) ||
                                t.call(m, e);
                        }),
                        I = t.title || l({ id: 'entity-names.playlist' }),
                        w = l({ id: 'drag-and-drop.collection-playlist-drag-handle' }, { playlistName: I });
                    return (0, r.jsxs)('div', {
                        ref: h,
                        className: (0, a.$)(J().sortableCard, { [J().sortableCard_dragging]: p }),
                        style: E,
                        'data-collection-playlist-sortable-card': !0,
                        children: [
                            (0, r.jsx)(Y.$, {
                                ...u,
                                ...(i ? {} : m),
                                ref: v,
                                id: V(t.key),
                                className: J().dragHandle,
                                variant: 'text',
                                color: 'secondary',
                                radius: 'round',
                                size: 'xxs',
                                withRipple: !1,
                                withHover: !1,
                                'aria-disabled': i,
                                'aria-label': w,
                                onClick: _,
                                onPointerDown: x,
                                icon: (0, r.jsx)(q.O, { className: J().dragHandleIcon, isDragging: p }),
                                'data-test-id': c.Kq.playlist.PLAYLIST_DRAG_HANDLE,
                            }),
                            (0, r.jsx)(y.B, { playlist: t, contentLinesCount: 3, onCoverMouseDown: C }),
                        ],
                    });
                });
            var es = n(5867);
            let ec = (0, l.PA)((e) => {
                    let { style: t, forwardRef: n, context: a, ...l } = e,
                        {
                            collection: {
                                playlists: { activeTabIndex: i, tabIndexElement: o },
                            },
                        } = (0, _.g)(),
                        s = (0, es.zb)(i),
                        c = null == a ? void 0 : a.listAriaLabel;
                    return (0, r.jsx)(es.Kp, { value: s.value, name: s.value, elementId: o, 'aria-label': c, style: t, ref: n, ...l });
                }),
                ed = (0, o.forwardRef)((e, t) => (0, r.jsx)(ec, { forwardRef: t, ...e }));
            var eu = n(92952),
                eg = n.n(eu),
                ep = n(8487),
                em = n(66738),
                ey = n(49497),
                ev = n.n(ey);
            let eh = (0, l.PA)((e) => {
                let { activeTabIndex: t, tabElementId: n } = e;
                return (0, r.jsxs)(es.Kp, {
                    value: t,
                    name: t,
                    elementId: n,
                    className: ev().root,
                    children: [
                        (0, r.jsx)(em.I, { className: ev().icon, size: 'l', variant: 'album' }),
                        (0, r.jsx)(X.DZ, {
                            className: ev().title,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(ep.A, { id: 'error-messages.empty-collection-liked-playlists' }),
                        }),
                    ],
                });
            });
            var ef = n(21784),
                eb = n(27625),
                eE = n(15270),
                e_ = n(79396),
                ex = n(9931),
                eC = n(53712),
                eI = n(25895),
                ew = n(83918);
            let eL = () => {
                let e = (0, ew.X)(),
                    {
                        collection: { playlists: t },
                    } = (0, _.g)();
                return (0, o.useCallback)(
                    (n) => {
                        switch ((t.setActiveTabIndex(n), n)) {
                            case T.a.CREATED: {
                                let { href: t } = (0, eI.u)(eC.Z.collectionPlaylists.href, { query: { tab: x.CREATED } });
                                e(t);
                                break;
                            }
                            case T.a.LIKED: {
                                let { href: t } = (0, eI.u)(eC.Z.collectionPlaylists.href, { query: { tab: x.LIKED } });
                                e(t);
                            }
                        }
                    },
                    [e, t],
                );
            };
            var eP = n(36581),
                eA = n.n(eP),
                eT = n(23976);
            let ek = () =>
                    (0, r.jsxs)('div', {
                        className: eA().tabsShimmer,
                        children: [(0, r.jsx)(eT.W, { className: eA().tabShimmer }), (0, r.jsx)(eT.W, { className: eA().tabShimmer })],
                    }),
                eD = (0, l.PA)(() => {
                    let {
                            collection: {
                                playlists: { playlistsCreated: e, playlistsLiked: t, tabIndexElement: n, activeTabIndex: a },
                            },
                        } = (0, _.g)(),
                        { formatMessage: l } = (0, s.A)(),
                        i = (0, ef.W)(),
                        { isScrolling: d } = (0, o.useContext)(eb.B),
                        u = eL(),
                        g = (0, o.useMemo)(
                            () =>
                                e.items.length
                                    ? ''.concat(l({ id: 'collection.your-created-playlists' }), ' • ').concat(e.items.length)
                                    : l({ id: 'collection.your-created-playlists' }),
                            [l, e.items.length],
                        ),
                        p = (0, o.useMemo)(
                            () =>
                                t.items.length
                                    ? ''.concat(l({ id: 'collection.your-liked-playlists' }), ' • ').concat(t.items.length)
                                    : l({ id: 'collection.your-liked-playlists' }),
                            [l, t.items.length],
                        );
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('header', {
                                className: eA().root,
                                'aria-hidden': d,
                                'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_PAGE_STATIC_HEADER,
                                children: (0, r.jsxs)('div', {
                                    className: eA().container,
                                    children: [
                                        i.canBack && (0, r.jsx)(eE.L, { withForwardControl: !1, withBackwardControl: i.canBack, shouldFocusOnMount: !d }),
                                        (0, r.jsx)(X.DZ, {
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            className: eA().title,
                                            'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_PAGE_STATIC_HEADER_TITLE,
                                            children: (0, r.jsx)(ep.A, { id: 'entity-names.artist-playlist' }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsxs)(ex.wI, {
                                isShimmerVisible: e.isShimmerVisible,
                                shimmer: (0, r.jsx)(ek, {}),
                                className: eA().staticTabs,
                                elementId: n,
                                value: a,
                                onTabChange: u,
                                children: [
                                    (0, r.jsx)(e_.o, {
                                        className: eA().tab,
                                        value: T.a.CREATED,
                                        title: g,
                                        'aria-label': l({ id: 'entity-names.created-playlists-count' }, { value: e.items.length }),
                                        'aria-hidden': d,
                                        tabIndex: d ? -1 : 0,
                                    }),
                                    (0, r.jsx)(e_.o, {
                                        className: eA().tab,
                                        value: T.a.LIKED,
                                        title: p,
                                        'aria-label': l({ id: 'entity-names.liked-playlists-count' }, { value: t.items.length }),
                                        'aria-hidden': d,
                                        tabIndex: d ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var eR = n(10603);
            let eS = (0, l.PA)((e) => {
                    let { tabElementId: t } = e,
                        {
                            collection: {
                                playlists: { playlistsCreated: n, playlistsLiked: l, activeTabIndex: i },
                            },
                        } = (0, _.g)(),
                        { formatMessage: d } = (0, s.A)(),
                        { isScrolling: u } = (0, o.useContext)(eb.B),
                        g = (0, ef.W)(),
                        p = eL(),
                        m = (0, o.useMemo)(
                            () =>
                                n.items.length
                                    ? ''.concat(d({ id: 'collection.your-created-playlists' }), ' • ').concat(n.items.length)
                                    : d({ id: 'collection.your-created-playlists' }),
                            [d, n.items.length],
                        ),
                        y = (0, o.useMemo)(
                            () =>
                                l.items.length
                                    ? ''.concat(d({ id: 'collection.your-liked-playlists' }), ' • ').concat(l.items.length)
                                    : d({ id: 'collection.your-liked-playlists' }),
                            [d, l.items.length],
                        );
                    return (0, r.jsx)(eR.Y, {
                        variant: eR.V.COMPOSITE,
                        staticClassName: (0, a.$)(eA().staticHeader, eA().important),
                        'aria-hidden': !u,
                        stickyClassName: (0, a.$)(eA().stickyHeader, eA().important),
                        stickyChild: (0, r.jsxs)('div', {
                            className: eA().container,
                            'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_PAGE_STICKY_HEADER,
                            children: [
                                g.canBack && (0, r.jsx)(eE.L, { withForwardControl: !1, withBackwardControl: g.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, r.jsxs)(ex.wI, {
                                    isShimmerVisible: n.isShimmerVisible,
                                    shimmer: (0, r.jsx)(ek, {}),
                                    className: eA().stickyTabs,
                                    elementId: t,
                                    value: i,
                                    onTabChange: p,
                                    children: [
                                        (0, r.jsx)(e_.o, {
                                            className: eA().tab,
                                            value: T.a.CREATED,
                                            title: m,
                                            'aria-label': d({ id: 'entity-names.created-playlists-count' }, { value: n.items.length }),
                                            'aria-hidden': !u,
                                            tabIndex: u ? 0 : -1,
                                        }),
                                        (0, r.jsx)(e_.o, {
                                            className: eA().tab,
                                            value: T.a.LIKED,
                                            title: y,
                                            'aria-label': d({ id: 'entity-names.liked-playlists-count' }, { value: l.items.length }),
                                            'aria-hidden': !u,
                                            tabIndex: u ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                eO = { main: 700, reverse: 700 },
                ej = (e, t) => ('string' == typeof t || 'number' == typeof t ? t : e),
                eM = (0, l.PA)(() => {
                    let e = (0, i.useSearchParams)(),
                        {
                            user: t,
                            collection: {
                                playlists: {
                                    playlistsCreated: n,
                                    playlistsLiked: l,
                                    setTabIndexElement: k,
                                    reset: D,
                                    setActiveTabIndex: R,
                                    isCreatedTabActive: S,
                                    isLikedTabActive: O,
                                    activeTabIndex: j,
                                    activePlaylistsModel: M,
                                    isEmptyLikedTab: N,
                                },
                            },
                            library: B,
                            settings: { isMobile: H },
                        } = (0, _.g)(),
                        { contentRef: G, contentScrollRef: z, setContentScrollRef: F } = (0, b.g)(),
                        [K, U] = (0, o.useState)(!1),
                        W = (0, o.useRef)(null),
                        V = (0, o.useId)(),
                        Y = S && n.isDragAndDropEnabled;
                    (0, o.useEffect)(() => {
                        k(V);
                    }, [V, k]);
                    let { formatMessage: $ } = (0, s.A)();
                    if (
                        ((0, o.useLayoutEffect)(() => {
                            switch (e.get(C.K.TAB)) {
                                case x.CREATED:
                                    R(T.a.CREATED);
                                    break;
                                case x.LIKED:
                                    R(T.a.LIKED);
                                    break;
                                default:
                                    R(T.a.CREATED);
                            }
                        }, [e, R]),
                        (0, E.J)(n.isResolved),
                        (0, o.useEffect)(
                            () => () => {
                                D();
                            },
                            [D],
                        ),
                        t.account.data.uid && n.isNeededToLoad)
                    ) {
                        let e = [
                            n.getData({ userId: t.account.data.uid, page: 0, pageSize: A.d }),
                            l.getData({ userId: t.account.data.uid, sortOrder: d.x.DESC, playlistMetaType: u.S.MUSIC, page: 0, pageSize: A.d }),
                            B.getData(),
                        ];
                        (0, o.use)(Promise.allSettled(e));
                    }
                    let X = (0, o.useMemo)(
                            () => ({
                                Header: () => (0, r.jsx)(eD, {}),
                                Footer: () => (0, r.jsx)(w.A, { children: (0, r.jsx)(I.w, { className: eg().footer }) }),
                                List: ed,
                            }),
                            [],
                        ),
                        q = (0, g.c)((e) => {
                            t.account.data.uid && l.getData({ userId: t.account.data.uid, page: e, pageSize: A.d, sortOrder: d.x.DESC, playlistMetaType: u.S.MUSIC });
                        }),
                        Z = (0, g.c)((e) => {
                            if (t.account.data.uid)
                                for (let r of ((e) => {
                                    let { includeAdjacentPages: t, playlistsCount: n, range: r } = e;
                                    if (n <= 0) return [];
                                    let a = Math.max(0, r.startIndex - A.B),
                                        l = Math.min(n - 1, Math.max(0, r.endIndex - A.B)),
                                        i = Math.floor(a / A.d),
                                        o = Math.floor(l / A.d),
                                        s = Math.floor((n - 1) / A.d);
                                    t && ((i = Math.max(0, i - 1)), (o = Math.min(s, o + 1)));
                                    let c = [];
                                    for (let e = i; e <= o; e++) c.push(e);
                                    return c;
                                })({ includeAdjacentPages: Y && K, playlistsCount: n.items.length, range: e }))
                                    n.getData({ userId: t.account.data.uid, page: r, pageSize: A.d });
                        }),
                        Q = (0, g.c)((e) => {
                            var t;
                            null == (t = W.current) || t.scrollToIndex({ align: 'center', behavior: 'auto', index: e + A.B });
                        }),
                        J = (0, p.L)(() => {
                            switch (j) {
                                case T.a.CREATED:
                                    return n.items.length + A.B;
                                case T.a.LIKED:
                                    var e;
                                    return N ? 1 : null != (e = l.items.length) ? e : 1;
                                default:
                                    return 1;
                            }
                        }),
                        ee = [];
                    for (let e = 0; e < M.items.length; e++) {
                        var et, en;
                        ee.push(null != (en = null == (et = M.items[e]) ? void 0 : et.key) ? en : 'playlist-shimmer-'.concat(e));
                    }
                    S ? ee.unshift('create-playlist') : N && ee.push('empty-liked-playlists');
                    let er = (0, r.jsx)(P.$, {
                            className: (0, a.$)(eg().scrollContainer, eg().important, { [eg().scrollContainer_dragging]: K }),
                            customComponents: X,
                            itemContentCallback: (e) => {
                                var t;
                                if (S && 0 === e) return (0, r.jsx)(v.B, {});
                                if (O && N) return (0, r.jsx)(eh, { activeTabIndex: j, tabElementId: V });
                                let a = S ? e - A.B : e,
                                    l = null == M || null == (t = M.items) ? void 0 : t[a],
                                    i = $({ id: 'loading-messages.entity-is-loading' }, { entityName: $({ id: 'entity-names.playlist' }) });
                                return l
                                    ? !Y || l.isFavouritePlaylist || l.generatedPlaylistType
                                        ? (0, r.jsx)(y.B, { playlist: l, contentLinesCount: 3 }, l.key)
                                        : (0, r.jsx)(eo, { playlist: l, playlists: n }, l.key)
                                    : (0, r.jsx)(L.V, { 'aria-label': i });
                            },
                            data: ee,
                            computeItemKey: ej,
                            totalCount: J,
                            onGetDataByPage: S ? void 0 : q,
                            onGetDataByRange: S ? Z : void 0,
                            shouldTriggerRangeChangedOn: [K],
                            overscan: Y && K ? eO : void 0,
                            pageSize: A.d,
                            totalRequests: M.pagesLoader.requestsCount,
                            listClassName: (0, a.$)(eg().content, { [eg().content_withGridLayout]: S || !N }, eg().important),
                            itemClassName: eg().item,
                            handleRef: F,
                            virtuosoRef: W,
                            context: { listAriaLabel: $({ id: S ? 'collection.created-playlists-list' : 'collection.liked-playlists-list' }) },
                            isMobileLayout: H,
                            useWindowScroll: H,
                        }),
                        ea = (0, p.L)(() =>
                            Y ? (0, r.jsx)(ei, { onDragStateChange: U, onKeyboardTargetReveal: Q, overlayBoundaryElement: G, playlists: n, children: er }) : er,
                        );
                    return (0, r.jsx)(f.n, {
                        pageId: h._Q.OWN_PLAYLISTS,
                        children: (0, r.jsx)(m.h, {
                            scrollElement: z,
                            headerThreshold: 148,
                            children: (0, r.jsxs)('div', {
                                className: eg().root,
                                'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_PAGE,
                                children: [(0, r.jsx)(eS, { tabElementId: V }), ea],
                            }),
                        }),
                    });
                });
        },
        61943: (e, t, n) => {
            'use strict';
            (n.d(t, { s: () => _ }), n(56107));
            function r(e, t, n) {
                return ((t = i(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
            }
            function a(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != n) {
                            var r,
                                a,
                                l,
                                i,
                                o = [],
                                s = !0,
                                c = !1;
                            try {
                                if (((l = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    s = !1;
                                } else for (; !(s = (r = l.call(n)).done) && (o.push(r.value), o.length !== t); s = !0);
                            } catch (e) {
                                ((c = !0), (a = e));
                            } finally {
                                try {
                                    if (!s && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return o;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function i(e) {
                var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || 'default');
                        if ('object' != typeof r) return r;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === t ? String : Number)(e);
                })(e, 'string');
                return 'symbol' == typeof t ? t : String(t);
            }
            function o(e, t) {
                var n,
                    r,
                    a = c(e, t, 'get');
                return ((n = e), (r = a).get ? r.get.call(n) : r.value);
            }
            function s(e, t, n) {
                var r = c(e, t, 'set');
                return (
                    (function (e, t, n) {
                        if (t.set) t.set.call(e, n);
                        else {
                            if (!t.writable) throw TypeError('attempted to set read only private field');
                            t.value = n;
                        }
                    })(e, r, n),
                    n
                );
            }
            function c(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
                return t.get(e);
            }
            function d(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return n;
            }
            function u(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function g(e, t, n) {
                (u(e, t), t.set(e, n));
            }
            function p(e, t) {
                (u(e, t), t.add(e));
            }
            var m = [
                ' daum[ /]',
                ' deusu/',
                ' yadirectfetcher',
                '(?:^| )site',
                '(?:^|[^g])news',
                '@[a-z]',
                '\\(at\\)[a-z]',
                '\\(github\\.com/',
                '\\[at\\][a-z]',
                '^12345',
                '^<',
                '^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$',
                '^[^ ]{50,}$',
                '^active',
                '^ad muncher',
                '^amaya',
                '^anglesharp/',
                '^anonymous',
                '^avsdevicesdk/',
                '^axios/',
                '^bidtellect/',
                '^biglotron',
                '^btwebclient/',
                '^castro',
                '^clamav[ /]',
                '^client/',
                '^cobweb/',
                '^coccoc',
                '^custom',
                '^ddg[_-]android',
                '^discourse',
                '^dispatch/\\d',
                '^downcast/',
                '^duckduckgo',
                '^facebook',
                '^fdm[ /]\\d',
                '^getright/',
                '^gozilla/',
                '^hatena',
                '^hobbit',
                '^hotzonu',
                '^hwcdn/',
                '^jeode/',
                '^jetty/',
                '^jigsaw',
                '^linkdex',
                '^lwp[-: ]',
                '^metauri',
                '^microsoft bits',
                '^movabletype',
                '^mozilla/\\d\\.\\d \\(compatible;?\\)$',
                '^mozilla/\\d\\.\\d \\w*$',
                '^navermailapp',
                '^netsurf',
                '^offline explorer',
                '^php',
                '^postman',
                '^postrank',
                '^python',
                '^read',
                '^reed',
                '^restsharp/',
                '^snapchat',
                '^space bison',
                '^svn',
                '^swcd ',
                '^taringa',
                '^test certificate info',
                '^thumbor/',
                '^tumblr/',
                '^user-agent:mozilla',
                '^valid',
                '^venus/fedoraplanet',
                '^w3c',
                '^webbandit/',
                '^webcopier',
                '^wget',
                '^whatsapp',
                '^xenu link sleuth',
                '^yahoo',
                '^yandex',
                '^zdm/\\d',
                '^zoom marketplace/',
                '^{{.*}}$',
                'adbeat\\.com',
                'appinsights',
                'archive',
                'ask jeeves/teoma',
                'bit\\.ly/',
                'bluecoat drtr',
                'bot',
                'browsex',
                'burpcollaborator',
                'capture',
                'catch',
                'check',
                'chrome-lighthouse',
                'chromeframe',
                'cloud',
                'crawl',
                'cryptoapi',
                'dareboost',
                'datanyze',
                'dataprovider',
                'dejaclick',
                'dmbrowser',
                'download',
                'evc-batch/',
                'feed',
                'firephp',
                'freesafeip',
                'gomezagent',
                'google',
                'headlesschrome/',
                'http',
                'httrack',
                'hubspot marketing grader',
                'hydra',
                'ibisbrowser',
                'images',
                'inspect',
                'iplabel',
                'ips-agent',
                'java',
                'library',
                'mail\\.ru/',
                'manager',
                'monitor',
                'morningscore/',
                'neustar wpm',
                'nutch',
                'offbyone',
                'optimize',
                'pageburst',
                'pagespeed',
                'perl',
                'phantom',
                'pingdom',
                'powermarks',
                'preview',
                'proxy',
                'ptst[ /]\\d',
                'reader',
                'rexx;',
                'rigor',
                'rss',
                'scan',
                'scrape',
                'search',
                'serp ?reputation ?management',
                'server',
                'sogou',
                'sparkler/',
                'speedcurve',
                'spider',
                'splash',
                'statuscake',
                'stumbleupon\\.com',
                'supercleaner',
                'synapse',
                'synthetic',
                'torrent',
                'tracemyfile',
                'transcoder',
                'trendsmapresolver',
                'twingly recon',
                'url',
                'virtuoso',
                'wappalyzer',
                'webglance',
                'webkit2png',
                'websitemetadataretriever',
                'whatcms/',
                'wordpress',
                'zgrab',
            ];
            !(function (e) {
                try {
                    RegExp('(?<! cu)bot').test('dangerbot');
                } catch (t) {
                    return e;
                }
                [
                    ['bot', '(?<! cu)bot'],
                    ['google', '(?<! (?:channel/|google/))google(?!(app|/google| pixel))'],
                    ['http', '(?<!(?:lib))http'],
                    ['java', 'java(?!;)'],
                    ['search', '(?<! ya(?:yandex)?)search'],
                ].forEach(function (t) {
                    var n = a(t, 2),
                        r = n[0],
                        l = n[1],
                        i = e.lastIndexOf(r);
                    ~i && e.splice(i, 1, l);
                });
            })(m);
            var y = new WeakMap(),
                v = new WeakMap(),
                h = new WeakSet(),
                f = new WeakSet();
            function b() {
                s(this, v, RegExp(o(this, y).join('|'), 'i'));
            }
            function E(e) {
                return o(this, y).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var n = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        p(this, f),
                        p(this, h),
                        g(this, y, { writable: !0, value: void 0 }),
                        g(this, v, { writable: !0, value: void 0 }),
                        s(this, y, e || m.slice()),
                        d(this, h, b).call(this),
                        Object.defineProperties(
                            function (e) {
                                return n.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var l = a(t, 2),
                                    i = l[0],
                                    o = l[1];
                                return (
                                    'function' == typeof o.value && Object.assign(e, r({}, i, { value: n[i].bind(n) })),
                                    'function' == typeof o.get &&
                                        Object.assign(
                                            e,
                                            r({}, i, {
                                                get: function () {
                                                    return n[i];
                                                },
                                            }),
                                        ),
                                    e
                                );
                            }, {}),
                        )
                    );
                }
                return (
                    (e = [
                        {
                            key: 'pattern',
                            get: function () {
                                return new RegExp(o(this, v));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && o(this, v).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(o(this, v));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return o(this, y).filter(function (t) {
                                    return RegExp(t, 'i').test(e);
                                });
                            },
                        },
                        {
                            key: 'clear',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                this.exclude(this.matches(e));
                            },
                        },
                        {
                            key: 'extend',
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                ([].push.apply(
                                    o(this, y),
                                    t
                                        .filter(function (t) {
                                            return -1 === d(e, f, E).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    d(this, h, b).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var n = d(this, f, E).call(this, e[t]);
                                    n > -1 && o(this, y).splice(n, 1);
                                }
                                d(this, h, b).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || o(this, y));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, i(r.key), r));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let _ = 'funtech-lang';
        },
        62661: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => s });
            var r = n(25839),
                a = n(82298),
                l = n(66738),
                i = n(28257),
                o = n.n(i);
            let s = (e) => {
                let { isDragging: t, className: n } = e;
                return (0, r.jsx)(l.I, { variant: 'dragDots', size: 'xxs', className: (0, a.$)(o().root, { [o().root_active]: t }, n), 'aria-hidden': !0 });
            };
        },
        65343: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => r });
            var r = (function (e) {
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
        74749: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => x });
            var r = n(25839),
                a = n(82298),
                l = n(88204),
                i = n(84059),
                o = n(74631),
                s = n(39004),
                c = n(8487),
                d = n(61493),
                u = n(11871),
                g = n(4071),
                p = n(66738),
                m = n(4254),
                y = n(91149),
                v = n(92942),
                h = n(27954),
                f = n(25895),
                b = n(57549),
                E = n(98919),
                _ = n.n(E);
            let x = (0, l.PA)((e) => {
                let { className: t } = e,
                    { formatMessage: n } = (0, s.A)(),
                    { createPlaylist: l } = (0, h.g)(),
                    { notify: E } = (0, v.l)(),
                    x = (0, i.useRouter)(),
                    C = (0, o.useRef)(!1),
                    I = (0, o.useCallback)(async () => {
                        if (C.current) return;
                        C.current = !0;
                        let e = await l.create({ title: n({ id: 'entity-names.new-playlist' }), visibility: u.L.PUBLIC });
                        if (e) {
                            let { href: t } = (0, f.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                            x.push(t);
                        } else (E((0, r.jsx)(b.h, { error: n({ id: 'playlist-errors.failed-to-create-playlist' }) }), { containerId: y.u.ERROR }), (C.current = !1));
                    }, [l, n, x, E]);
                return (
                    (0, o.useEffect)(
                        () => () => {
                            l.reset();
                        },
                        [l],
                    ),
                    (0, r.jsxs)('div', {
                        className: (0, a.$)(_().root, t),
                        'data-test-id': d.OA.playlist.CREATE_PLAYLIST_CARD,
                        children: [
                            (0, r.jsx)(g.$, {
                                className: _().button,
                                icon: (0, r.jsx)(p.I, { className: _().icon, variant: 'add', size: 'l' }),
                                radius: 's',
                                'aria-label': n({ id: 'playlist-actions.create-playlist' }),
                                onClick: I,
                                flexIcon: !0,
                                isBlock: !0,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_BUTTON,
                            }),
                            (0, r.jsx)(m.HL, {
                                weight: 'medium',
                                size: 's',
                                variant: 'div',
                                className: _().text,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_TITLE,
                                children: (0, r.jsx)(c.A, { id: 'collection.new-playlist' }),
                            }),
                        ],
                    })
                );
            });
        },
        83918: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => a });
            var r = n(74631);
            let a = () =>
                (0, r.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        89209: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => r });
            var r = (function (e) {
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
        92952: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsPage_root__1QnBw',
                content: 'CollectionPlaylistsPage_content__P3Br2',
                content_withGridLayout: 'CollectionPlaylistsPage_content_withGridLayout__ytZKv',
                footer: 'CollectionPlaylistsPage_footer__8nXuA',
                item: 'CollectionPlaylistsPage_item__SvtpO',
                scrollContainer: 'CollectionPlaylistsPage_scrollContainer__ECphU',
                important: 'CollectionPlaylistsPage_important__YtxxZ',
                scrollContainer_dragging: 'CollectionPlaylistsPage_scrollContainer_dragging__GR0tY',
            };
        },
        98919: (e) => {
            e.exports = {
                root: 'CreatePlaylistCard_root__pMDua',
                button: 'CreatePlaylistCard_button__ZaAtb',
                icon: 'CreatePlaylistCard_icon__09K9N',
                text: 'CreatePlaylistCard_text__dd9Q6',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 7339, 6287, 2121, 3472, 1107, 7349, 6749, 2683, 8451, 1583, 2970, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 3257, 4268,
                3269, 4163, 3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 6361, 4932, 7707, 4475, 5056, 7358,
            ],
            () => e((e.s = 3053)),
        ),
            (_N_E = e.O()));
    },
]);
