(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3008],
    {
        2816: (e, t, n) => {
            'use strict';
            n.d(t, { useOnLikeClick: () => u });
            var r = n(62936),
                i = n(16264),
                s = n(44020),
                o = n(47480),
                a = n(21192),
                l = n(42561),
                d = n(85906);
            let c = (e) => {
                    let { clip: t, closeToast: n } = e;
                    return (0, r.jsx)(d.OM, {
                        entityVariant: d.cp.CLIP,
                        entityTitle: t.title,
                        collectionUrl: l.Zyd.collectionClips.href,
                        isLiked: t.isLiked,
                        closeToast: n,
                        coverUri: t.thumbnail,
                    });
                },
                u = (e) => {
                    let { user: t, fullscreenVideoPlayer: n, collection: u } = (0, l.Pjs)(),
                        { notify: g } = (0, l.lkh)(),
                        [m, p] = (0, s.useState)(!1),
                        { formatMessage: v } = (0, o.A)();
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        let s = n.modal.isOpened ? l.uQT.FULLSCREEN_INFO : l.uQT.INFO,
                            o = n.modal.isOpened ? l.uQT.FULLSCREEN_ERROR : l.uQT.ERROR;
                        if (!t.isAuthorized) return void g((0, r.jsx)(d.hT, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        if (m) return;
                        let _ = { ...(0, i.HO)(e), isLiked: !e.isLiked };
                        p(!0);
                        let b = await e.toggleLike();
                        p(!1),
                            u.clips.reset(),
                            b === a.f.OK
                                ? g((0, r.jsx)(c, { clip: _ }), { containerId: s })
                                : g((0, r.jsx)(d.hT, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o });
                    }, [e, t.isAuthorized, m, v, g, n.modal.isOpened, u.clips]);
                };
        },
        7932: (e, t, n) => {
            'use strict';
            n.d(t, { useVideoModal: () => o });
            var r = n(59935),
                i = n(42561),
                s = n(36887);
            let o = () => {
                let { fullscreenVideoPlayer: e } = (0, i.Pjs)(),
                    t = (0, i.pqZ)();
                return (0, r.c)(function (n) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e.setIds(n), e.setClipIndex(r), t((0, s.J)(n, r)), e.modal.open();
                });
            };
        },
        25099: (e, t, n) => {
            'use strict';
            n.d(t, {
                z8: () => _,
                l6: () => d,
                z4: () => c,
                JL: () => u.J,
                KX: () => g.useOnLikeClick,
                Hx: () => r.useSendEventOnClipClosed,
                _7: () => i.useSendEventOnClipNavigated,
                QV: () => s.useSendEventOnClipOpened,
                Mn: () => o.useSendEventOnClipShowedOrHidden,
                Cc: () => m.useVideoModal,
                df: () => p.useWithClips,
            });
            var r = n(81940),
                i = n(43345),
                s = n(47893),
                o = n(91629),
                a = n(51606),
                l = n(42561);
            let d = (e) => {
                    let { available: t, disclaimers: n } = (0, l.fyr)(e);
                    return (0, a.wg)({
                        clipId: e.clipId,
                        title: e.title,
                        thumbnail: e.thumbnail,
                        duration: e.duration,
                        previewUrl: e.previewUrl,
                        isAvailable: t,
                        version: e.version,
                        disclaimers: n,
                    });
                },
                c = (e, t) => {
                    let n = Number(t);
                    return !Number.isNaN(n) && n > 0 && n < e.length ? n : 0;
                };
            var u = n(36887),
                g = n(2816),
                m = n(7932),
                p = n(55959),
                v = n(54690);
            let _ = a.gK
                .compose(
                    a.gK.model('BaseClip', {
                        clipId: a.gK.number,
                        title: a.gK.maybe(a.gK.string),
                        thumbnail: a.gK.maybe(a.gK.string),
                        previewUrl: a.gK.maybe(a.gK.string),
                        duration: a.gK.maybe(a.gK.number),
                        isAvailable: a.gK.boolean,
                        version: a.gK.maybe(a.gK.string),
                    }),
                    v.Ec,
                )
                .views((e) => ({
                    get url() {
                        let { href: t } = (0, l.uvd)(l.Zyd.video.href, { query: { ids: String(e.clipId) } });
                        return t;
                    },
                    get isLiked() {
                        if (!(0, a._n)(e)) return !1;
                        let { library: t } = (0, a.Zn)(e);
                        return t.isClipLiked(e.clipId);
                    },
                    get isLegalRejected() {
                        return e.getIsLegalRejected(e.isAvailable);
                    },
                    get isUnsafeLegal() {
                        return e.getIsUnsafeLegal(e.isAvailable);
                    },
                    getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : l.nPY.CLIP, entityId: e.clipId }),
                }))
                .actions((e) => ({
                    getKey: (t) => ''.concat(t, '_').concat(e.clipId),
                    toggleLike() {
                        if (!(0, a._n)(e)) return;
                        let { library: t, user: n } = (0, a.Zn)(e);
                        if (n.isAuthorized) return t.toggleClipLike({ entityId: e.clipId, userId: n.account.data.uid });
                    },
                }));
        },
        36118: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => _ });
            var r = n(62936),
                i = n(79950),
                s = n(19718),
                o = n(44020),
                a = n(47480),
                l = n(26731),
                d = n(5099),
                c = n(85742),
                u = n(20418),
                g = n(42561),
                m = n(85906),
                p = n(52166),
                v = n.n(p);
            let _ = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: s } = (0, a.A)(),
                    p = s({ id: 'error-messages.something-went-wrong' });
                (0, g.CgZ)(p);
                let { sendRefreshEvent: _ } = (0, g.cYT)(),
                    b = (0, o.useCallback)(() => {
                        _(), (window.location.href = g.Zyd.main.href);
                    }, [_]),
                    { contentRef: O } = (0, g.gKY)();
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(v().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(m.Lh, {
                                withBackwardFallback: '/',
                                className: (0, i.$)(v().navigation, { [v().navigation_desktop]: !O }),
                                withForwardControl: !1,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, i.$)(v().content, { [v().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(c.Icon, { className: v().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.Heading, { className: (0, i.$)(v().title, v().important), variant: 'h3', size: 'xs', children: p }),
                                (0, r.jsxs)(u.Caption, {
                                    className: (0, i.$)(v().text, v().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(d.$, {
                                    onClick: b,
                                    className: v().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        36887: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => i });
            var r = n(42561);
            let i = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: n } = (0, r.uvd)(r.Zyd.video.href, { query: { [r.K3F.IDS]: e.join(','), [r.K3F.ACTIVE_INDEX]: String(t) } });
                return n;
            };
        },
        43345: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipNavigated: () => a });
            var r = n(23480),
                i = n(11584),
                s = n(59935),
                o = n(42561);
            let a = (e) => {
                let t = (0, i.st)(),
                    { hash: n } = (0, i.gf)(),
                    { pageId: a } = (0, o.$au)(),
                    { tabId: l, tabPos: d, isTabSelectedByDefault: c } = (0, o.Rro)(),
                    { skeleton: u } = (0, o.bCF)(),
                    { blockType: g, blockId: m, blockPosX: p, blockPosY: v, mainObjectType: _, mainObjectId: b } = (0, o.N8n)(),
                    { objectsCount: O, objectType: h, objectId: S, objectPosX: x, objectPosY: y } = (0, o.Jfv)(),
                    f = (0, o.UlF)();
                return (0, s.c)(() => {
                    if (!t || !a || !o.xKB.includes(a)) return;
                    let i = {
                        hash: n,
                        pageId: a,
                        entityType: g,
                        entityId: m,
                        entityPosX: p,
                        entityPosY: v,
                        objectId: S,
                        objectType: h,
                        objectPosX: x,
                        objectPosY: y,
                        objectsCount: O,
                        from: o.Wft[a],
                        to: r.QT.VideoScreen,
                    };
                    o.qG9.includes(a) && ((i.tabId = l), (i.tabPos = d), (i.isTabSelectedByDefault = c)),
                        u && (i.skeletonId = u),
                        _ && (i.mainObjectType = _),
                        b && (i.mainObjectId = b);
                    let s = (0, r.Fx)({ params: i, logger: f, context: 'useSendEventOnClipNavigated' });
                    s && e && (0, r.QS)(t.evgenInstance, s);
                });
            };
        },
        47893: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipOpened: () => a });
            var r = n(23480),
                i = n(11584),
                s = n(59935),
                o = n(42561);
            let a = () => {
                let e = (0, i.st)(),
                    { hash: t } = (0, i.gf)(),
                    n = (0, o.UlF)();
                return (0, s.c)((i) => {
                    if (!e) return;
                    let s = { hash: t, pageId: r.QT.VideoScreen, mainObjectType: r.ky.Video, mainObjectId: i },
                        o = (0, r.Fx)({ params: s, logger: n, context: 'useSendEventOnClipOpened' });
                    o && (0, r.w5)(e.evgenInstance, o);
                });
            };
        },
        50502: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => i });
            var r = n(81959);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Generative;
            }
        },
        52166: (e) => {
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
        55959: (e, t, n) => {
            'use strict';
            n.d(t, { useWithClips: () => i });
            var r = n(42561);
            let i = () => {
                let {
                    settings: { isMobile: e },
                } = (0, r.Pjs)();
                return !e;
            };
        },
        60210: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => a });
            var r = n(62936),
                i = n(69526),
                s = n(68707),
                o = n(42561);
            let a = () => {
                let e = (0, i.useSearchParams)().get('labelId');
                return (e && (0, o.LLJ)(e)) || (0, i.notFound)(), (0, r.jsx)(s.oM, { labelId: e });
            };
        },
        62858: (e, t, n) => {
            'use strict';
            var r;
            n.d(t, { x: () => r }),
                (function (e) {
                    (e.ASC = 'asc'), (e.DESC = 'desc');
                })(r || (r = {}));
        },
        65438: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => r.SomethingWentWrong });
            var r = n(36118);
        },
        65471: (e, t, n) => {
            'use strict';
            n.d(t, { SortDropdown: () => h });
            var r = n(62936),
                i = n(19718),
                s = n(44020),
                o = n(26731),
                a = n(8669),
                l = n(28563),
                d = n(59935),
                c = n(5099),
                u = n(81002),
                g = n(85742),
                m = n(20418),
                p = n(42561),
                v = n(94331),
                _ = n(90367),
                b = n.n(_);
            let O = { [l.g.RATING]: (0, r.jsx)(o.A, { id: 'sort.sort-by-rating' }), [l.g.YEAR]: (0, r.jsx)(o.A, { id: 'sort.sort-by-year' }) },
                h = (0, i.PA)((e) => {
                    var t;
                    let { sortModel: n, onSort: i } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, p.Pjs)(),
                        h = (0, d.c)((e) => {
                            (0, v.W)(e.id) && n.sortBy !== e.id && (n.setSortBy(e.id), i());
                        }),
                        S = (0, s.useMemo)(
                            () =>
                                _
                                    ? (0, r.jsx)(c.$, { radius: 'xxxl', className: b().button, icon: (0, r.jsx)(g.Icon, { variant: 'filter', size: 'xs' }) })
                                    : (0, r.jsxs)(c.$, {
                                          radius: 'xxxl',
                                          className: b().button,
                                          ...(0, a.Am)(a.Kq.sort.SORT_DROPDOWN_BUTTON),
                                          children: [
                                              (0, r.jsx)(m.Caption, {
                                                  variant: 'span',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  ...(0, a.Am)(a.Kq.sort.SORT_DROPDOWN_BUTTON_CAPTION),
                                                  children: n.sortBy ? O[n.sortBy] : (0, r.jsx)(o.A, { id: 'sort.select-filter' }),
                                              }),
                                              (0, r.jsx)(g.Icon, { size: 'xxs', variant: 'arrowDown', ...(0, a.Am)(a.Kq.sort.SORT_DROPDOWN_BUTTON_ICON) }),
                                          ],
                                      }),
                            [_, n.sortBy],
                        );
                    return (0, r.jsx)(u.ms, {
                        placement: _ ? 'bottom' : 'top',
                        isMobile: _,
                        strategy: 'fixed',
                        className: b().root,
                        onSelect: h,
                        reference: S,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (t = n.sortBy) ? t : l.g.YEAR,
                        containerClassName: b().container,
                        header: _ ? (0, r.jsx)('div', { className: b().header }) : void 0,
                        ...(0, a.Am)(a.Kq.sort.SORT_DROPDOWN),
                        children: Object.values(l.g).map((e) => (0, r.jsx)(u.c$, { id: e, label: O[e], ...(0, a.Am)(a.Kq.sort.SORT_DROPDOWN_ITEM) }, e)),
                    });
                });
        },
        81940: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipClosed: () => a });
            var r = n(23480),
                i = n(11584),
                s = n(59935),
                o = n(42561);
            let a = () => {
                let e = (0, i.st)(),
                    { hash: t } = (0, i.gf)(),
                    n = (0, o.UlF)();
                return (0, s.c)((i) => {
                    if (!e) return;
                    let s = { hash: t, pageId: r.QT.VideoScreen, mainObjectType: r.ky.Video, mainObjectId: i },
                        o = (0, r.Fx)({ params: s, logger: n, context: 'useSendEventOnClipClosed' });
                    o && (0, r.XB)(e.evgenInstance, o);
                });
            };
        },
        83881: (e, t, n) => {
            'use strict';
            n.d(t, { mi: () => c.SortDropdown, wY: () => d, WG: () => r.W, hl: () => s, y8: () => o.useSort });
            var r = n(94331),
                i = n(62858);
            let s = (e) => !!e && (e === i.x.ASC || e === i.x.DESC);
            var o = n(84038),
                a = n(51606),
                l = n(28563);
            let d = a.gK
                .model('Sort', { sortBy: a.gK.maybe(a.gK.enumeration(Object.values(l.g))), sortOrder: a.gK.maybe(a.gK.enumeration(Object.values(i.x))) })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
            var c = n(65471);
        },
        84038: (e, t, n) => {
            'use strict';
            n.d(t, { useSort: () => a });
            var r = n(44020),
                i = n(28563),
                s = n(42561),
                o = n(94331);
            let a = (e) => {
                let { sortModel: t } = e,
                    n = (0, s.XJ9)();
                (0, r.useLayoutEffect)(() => {
                    let e = new URL(window.location.href).searchParams.get(s.K3F.SORT);
                    e && (0, o.W)(e) ? t.setSortBy(e) : t.setSortBy(i.g.YEAR);
                }, [t]),
                    (0, r.useEffect)(() => {
                        if (t.sortBy) {
                            let e = (0, s.bJ)(s.K3F.SORT, t.sortBy);
                            e && n(e);
                        }
                    }, [n, t.sortBy]);
            };
        },
        90367: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        91178: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 60210));
        },
        91629: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipShowedOrHidden: () => a });
            var r = n(23480),
                i = n(11584),
                s = n(59935),
                o = n(42561);
            let a = (e) => {
                let t = (0, i.st)(),
                    { hash: n } = (0, i.gf)(),
                    { pageId: a } = (0, o.$au)(),
                    { tabId: l, tabPos: d, isTabSelectedByDefault: c } = (0, o.Rro)(),
                    { blockType: u, blockId: g, blockPosX: m, blockPosY: p, mainObjectType: v, mainObjectId: _ } = (0, o.N8n)(),
                    { objectsCount: b, objectType: O, objectId: h, objectPosX: S, objectPosY: x } = (0, o.Jfv)(),
                    y = (0, o.UlF)(),
                    { skeleton: f } = (0, o.bCF)();
                return (0, s.c)((i) => {
                    if (!t || !a || !o.xKB.includes(a)) return;
                    let s = {
                        hash: n,
                        pageId: a,
                        entityType: u,
                        entityId: g,
                        entityPosX: m,
                        entityPosY: p,
                        objectsCount: b,
                        viewUuid: e,
                        objectType: O,
                        objectId: h,
                        objectPosX: S,
                        objectPosY: x,
                    };
                    o.qG9.includes(a) && ((s.tabId = l), (s.tabPos = d), (s.isTabSelectedByDefault = c)),
                        f && (s.skeletonId = f),
                        v && (s.mainObjectType = v),
                        _ && (s.mainObjectId = _);
                    let I = (0, r.Fx)({ params: s, logger: y, context: 'useSendEventOnClipShowedOrHidden' });
                    if (I) {
                        if (i) return void (0, r.Pf)(t.evgenInstance, I);
                        (0, r.nv)(t.evgenInstance, I);
                    }
                });
            };
        },
        94331: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => i });
            var r = n(28563);
            let i = (e) => !!e && (e === r.g.RATING || e === r.g.YEAR);
        },
    },
    (e) => {
        e.O(
            0,
            [
                85, 260, 3196, 403, 2537, 3789, 2670, 1970, 494, 5721, 3302, 3878, 1311, 7764, 6706, 2899, 5419, 2561, 5906, 4690, 4501, 9154, 914, 3197, 3189, 8303,
                1002, 8707, 1009, 4670, 7358,
            ],
            () => e((e.s = 91178)),
        ),
            (_N_E = e.O());
    },
]);
