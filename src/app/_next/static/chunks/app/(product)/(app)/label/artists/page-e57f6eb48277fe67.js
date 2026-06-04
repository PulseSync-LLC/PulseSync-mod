(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1156],
    {
        1182: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 19834));
        },
        8246: (e, t, n) => {
            'use strict';
            var r;
            n.d(t, { x: () => r }),
                (function (e) {
                    (e.ASC = 'asc'), (e.DESC = 'desc');
                })(r || (r = {}));
        },
        19834: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => a });
            var r = n(32290),
                i = n(21916),
                s = n(72e3),
                o = n(49574);
            let a = () => {
                let e = (0, i.useSearchParams)().get('labelId');
                return (e && (0, o.LLJ)(e)) || (0, i.notFound)(), (0, r.jsx)(s.ac, { labelId: e });
            };
        },
        24159: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        26089: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipShowedOrHidden: () => a });
            var r = n(16172),
                i = n(52068),
                s = n(91027),
                o = n(49574);
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
        26740: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => i });
            var r = n(37215);
            let i = (e) => !!e && (e === r.g.RATING || e === r.g.YEAR);
        },
        30310: (e) => {
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
        32381: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => r.SomethingWentWrong });
            var r = n(60194);
        },
        46789: (e, t, n) => {
            'use strict';
            n.d(t, { useOnLikeClick: () => u });
            var r = n(32290),
                i = n(92708),
                s = n(55178),
                o = n(60900),
                a = n(63380),
                l = n(49574),
                d = n(44574);
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
        56797: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipNavigated: () => a });
            var r = n(16172),
                i = n(52068),
                s = n(91027),
                o = n(49574);
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
        60194: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => _ });
            var r = n(32290),
                i = n(63618),
                s = n(96103),
                o = n(55178),
                a = n(60900),
                l = n(39407),
                d = n(63423),
                c = n(82586),
                u = n(71926),
                g = n(49574),
                m = n(44574),
                p = n(30310),
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
        62066: (e, t, n) => {
            'use strict';
            n.d(t, { useSort: () => a });
            var r = n(55178),
                i = n(37215),
                s = n(49574),
                o = n(26740);
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
        69555: (e, t, n) => {
            'use strict';
            n.d(t, { SortDropdown: () => h });
            var r = n(32290),
                i = n(96103),
                s = n(55178),
                o = n(39407),
                a = n(59824),
                l = n(37215),
                d = n(91027),
                c = n(63423),
                u = n(56758),
                g = n(82586),
                m = n(71926),
                p = n(49574),
                v = n(26740),
                _ = n(24159),
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
        72480: (e, t, n) => {
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
            var r = n(78795),
                i = n(56797),
                s = n(96849),
                o = n(26089),
                a = n(60754),
                l = n(49574);
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
            var u = n(94315),
                g = n(46789),
                m = n(99872),
                p = n(84427),
                v = n(95428);
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
        78795: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipClosed: () => a });
            var r = n(16172),
                i = n(52068),
                s = n(91027),
                o = n(49574);
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
        79490: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => i });
            var r = n(71483);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Generative;
            }
        },
        84427: (e, t, n) => {
            'use strict';
            n.d(t, { useWithClips: () => i });
            var r = n(49574);
            let i = () => {
                let {
                    settings: { isMobile: e },
                } = (0, r.Pjs)();
                return !e;
            };
        },
        86519: (e, t, n) => {
            'use strict';
            n.d(t, { mi: () => c.SortDropdown, wY: () => d, WG: () => r.W, hl: () => s, y8: () => o.useSort });
            var r = n(26740),
                i = n(8246);
            let s = (e) => !!e && (e === i.x.ASC || e === i.x.DESC);
            var o = n(62066),
                a = n(60754),
                l = n(37215);
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
            var c = n(69555);
        },
        94315: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => i });
            var r = n(49574);
            let i = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: n } = (0, r.uvd)(r.Zyd.video.href, { query: { [r.K3F.IDS]: e.join(','), [r.K3F.ACTIVE_INDEX]: String(t) } });
                return n;
            };
        },
        96849: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipOpened: () => a });
            var r = n(16172),
                i = n(52068),
                s = n(91027),
                o = n(49574);
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
        99872: (e, t, n) => {
            'use strict';
            n.d(t, { useVideoModal: () => o });
            var r = n(91027),
                i = n(49574),
                s = n(94315);
            let o = () => {
                let { fullscreenVideoPlayer: e } = (0, i.Pjs)(),
                    t = (0, i.pqZ)();
                return (0, r.c)(function (n) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e.setIds(n), e.setClipIndex(r), t((0, s.J)(n, r)), e.modal.open();
                });
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                1670, 3445, 9221, 7236, 6375, 4826, 7550, 6328, 4086, 9745, 5969, 1311, 7764, 6706, 3267, 9769, 9574, 4574, 5428, 6049, 4089, 6486, 3317, 112, 4973, 6758,
                2e3, 4220, 9562, 7358,
            ],
            () => e((e.s = 1182)),
        ),
            (_N_E = e.O());
    },
]);
