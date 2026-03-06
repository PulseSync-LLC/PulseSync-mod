(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3008],
    {
        2405: (e, t, n) => {
            'use strict';
            n.d(t, { SortDropdown: () => b });
            var i = n(54486),
                r = n(28303),
                o = n(61910),
                s = n(47713),
                a = n(31500),
                l = n(11405),
                d = n(8817),
                c = n(77881),
                u = n(71656),
                g = n(5956),
                _ = n(97800),
                p = n(83252),
                m = n(90229),
                v = n(46353),
                x = n.n(v);
            let h = { [l.g.RATING]: (0, i.jsx)(s.A, { id: 'sort.sort-by-rating' }), [l.g.YEAR]: (0, i.jsx)(s.A, { id: 'sort.sort-by-year' }) },
                b = (0, r.PA)((e) => {
                    var t;
                    let { sortModel: n, onSort: r } = e,
                        {
                            settings: { isMobile: v },
                        } = (0, p.Pjs)(),
                        b = (0, d.c)((e) => {
                            (0, m.W)(e.id) && n.sortBy !== e.id && (n.setSortBy(e.id), r());
                        }),
                        O = (0, o.useMemo)(
                            () =>
                                v
                                    ? (0, i.jsx)(c.$, { radius: 'xxxl', className: x().button, icon: (0, i.jsx)(g.Icon, { variant: 'filter', size: 'xs' }) })
                                    : (0, i.jsxs)(c.$, {
                                          radius: 'xxxl',
                                          className: x().button,
                                          ...(0, a.Am)(a.Kq.sort.SORT_DROPDOWN_BUTTON),
                                          children: [
                                              (0, i.jsx)(_.Caption, {
                                                  variant: 'span',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  ...(0, a.Am)(a.Kq.sort.SORT_DROPDOWN_BUTTON_CAPTION),
                                                  children: n.sortBy ? h[n.sortBy] : (0, i.jsx)(s.A, { id: 'sort.select-filter' }),
                                              }),
                                              (0, i.jsx)(g.Icon, { size: 'xxs', variant: 'arrowDown', ...(0, a.Am)(a.Kq.sort.SORT_DROPDOWN_BUTTON_ICON) }),
                                          ],
                                      }),
                            [v, n.sortBy],
                        );
                    return (0, i.jsx)(u.ms, {
                        placement: v ? 'bottom' : 'top',
                        isMobile: v,
                        strategy: 'fixed',
                        className: x().root,
                        onSelect: b,
                        reference: O,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (t = n.sortBy) ? t : l.g.YEAR,
                        containerClassName: x().container,
                        header: v ? (0, i.jsx)('div', { className: x().header }) : void 0,
                        ...(0, a.Am)(a.Kq.sort.SORT_DROPDOWN),
                        children: Object.values(l.g).map((e) => (0, i.jsx)(u.c$, { id: e, label: h[e], ...(0, a.Am)(a.Kq.sort.SORT_DROPDOWN_ITEM) }, e)),
                    });
                });
        },
        11036: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => r });
            var i = n(63585);
            function r(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Generative;
            }
        },
        24743: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 64948));
        },
        39206: (e, t, n) => {
            'use strict';
            n.d(t, { useVideoModal: () => s });
            var i = n(8817),
                r = n(83252),
                o = n(83333);
            let s = () => {
                let { fullscreenVideoPlayer: e } = (0, r.Pjs)(),
                    t = (0, r.pqZ)();
                return (0, i.c)(function (n) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e.setIds(n), e.setClipIndex(i), t((0, o.J)(n, i)), e.modal.open();
                });
            };
        },
        40188: (e, t, n) => {
            'use strict';
            n.d(t, { useSort: () => a });
            var i = n(61910),
                r = n(11405),
                o = n(83252),
                s = n(90229);
            let a = (e) => {
                let { sortModel: t } = e,
                    n = (0, o.XJ9)();
                (0, i.useLayoutEffect)(() => {
                    let e = new URL(window.location.href).searchParams.get(o.K3F.SORT);
                    e && (0, s.W)(e) ? t.setSortBy(e) : t.setSortBy(r.g.YEAR);
                }, [t]),
                    (0, i.useEffect)(() => {
                        if (t.sortBy) {
                            let e = (0, o.bJ)(o.K3F.SORT, t.sortBy);
                            e && n(e);
                        }
                    }, [n, t.sortBy]);
            };
        },
        42061: (e, t, n) => {
            'use strict';
            n.d(t, { useWithClips: () => r });
            var i = n(83252);
            let r = () => {
                let {
                    settings: { isMobile: e },
                } = (0, i.Pjs)();
                return !e;
            };
        },
        42421: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => i.NotFound });
            var i = n(65034);
        },
        46215: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        46353: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        54830: (e, t, n) => {
            'use strict';
            n.d(t, {
                z8: () => v,
                l6: () => d,
                z4: () => c,
                JL: () => u.J,
                KX: () => g.useOnLikeClick,
                Hx: () => i.useSendEventOnClipClosed,
                _7: () => r.useSendEventOnClipNavigated,
                QV: () => o.useSendEventOnClipOpened,
                Mn: () => s.useSendEventOnClipShowedOrHidden,
                Cc: () => _.useVideoModal,
                df: () => p.useWithClips,
            });
            var i = n(64782),
                r = n(59839),
                o = n(60339),
                s = n(58435),
                a = n(93064),
                l = n(83252);
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
            var u = n(83333),
                g = n(60272),
                _ = n(39206),
                p = n(42061),
                m = n(26433);
            let v = a.gK
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
                    m.Ec,
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
        58435: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipShowedOrHidden: () => a });
            var i = n(43350),
                r = n(62395),
                o = n(8817),
                s = n(83252);
            let a = (e) => {
                let t = (0, r.st)(),
                    { hash: n } = (0, r.gf)(),
                    { pageId: a } = (0, s.$au)(),
                    { tabId: l, tabPos: d, isTabSelectedByDefault: c } = (0, s.Rro)(),
                    { blockType: u, blockId: g, blockPosX: _, blockPosY: p, mainObjectType: m, mainObjectId: v } = (0, s.N8n)(),
                    { objectsCount: x, objectType: h, objectId: b, objectPosX: O, objectPosY: N } = (0, s.Jfv)(),
                    S = (0, s.UlF)(),
                    { skeleton: y } = (0, s.bCF)();
                return (0, o.c)((r) => {
                    if (!t || !a || !s.xKB.includes(a)) return;
                    let o = {
                        hash: n,
                        pageId: a,
                        entityType: u,
                        entityId: g,
                        entityPosX: _,
                        entityPosY: p,
                        objectsCount: x,
                        viewUuid: e,
                        objectType: h,
                        objectId: b,
                        objectPosX: O,
                        objectPosY: N,
                    };
                    s.qG9.includes(a) && ((o.tabId = l), (o.tabPos = d), (o.isTabSelectedByDefault = c)),
                        y && (o.skeletonId = y),
                        m && (o.mainObjectType = m),
                        v && (o.mainObjectId = v);
                    let f = (0, i.Fx)({ params: o, logger: S, context: 'useSendEventOnClipShowedOrHidden' });
                    if (f) {
                        if (r) return void (0, i.Pf)(t.evgenInstance, f);
                        (0, i.nv)(t.evgenInstance, f);
                    }
                });
            };
        },
        59839: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipNavigated: () => a });
            var i = n(43350),
                r = n(62395),
                o = n(8817),
                s = n(83252);
            let a = (e) => {
                let t = (0, r.st)(),
                    { hash: n } = (0, r.gf)(),
                    { pageId: a } = (0, s.$au)(),
                    { tabId: l, tabPos: d, isTabSelectedByDefault: c } = (0, s.Rro)(),
                    { skeleton: u } = (0, s.bCF)(),
                    { blockType: g, blockId: _, blockPosX: p, blockPosY: m, mainObjectType: v, mainObjectId: x } = (0, s.N8n)(),
                    { objectsCount: h, objectType: b, objectId: O, objectPosX: N, objectPosY: S } = (0, s.Jfv)(),
                    y = (0, s.UlF)();
                return (0, o.c)(() => {
                    if (!t || !a || !s.xKB.includes(a)) return;
                    let r = {
                        hash: n,
                        pageId: a,
                        entityType: g,
                        entityId: _,
                        entityPosX: p,
                        entityPosY: m,
                        objectId: O,
                        objectType: b,
                        objectPosX: N,
                        objectPosY: S,
                        objectsCount: h,
                        from: s.Wft[a],
                        to: i.QT.VideoScreen,
                    };
                    s.qG9.includes(a) && ((r.tabId = l), (r.tabPos = d), (r.isTabSelectedByDefault = c)),
                        u && (r.skeletonId = u),
                        v && (r.mainObjectType = v),
                        x && (r.mainObjectId = x);
                    let o = (0, i.Fx)({ params: r, logger: y, context: 'useSendEventOnClipNavigated' });
                    o && e && (0, i.QS)(t.evgenInstance, o);
                });
            };
        },
        60272: (e, t, n) => {
            'use strict';
            n.d(t, { useOnLikeClick: () => u });
            var i = n(54486),
                r = n(63930),
                o = n(61910),
                s = n(43426),
                a = n(77534),
                l = n(83252),
                d = n(80585);
            let c = (e) => {
                    let { clip: t, closeToast: n } = e;
                    return (0, i.jsx)(d.OM, {
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
                        [_, p] = (0, o.useState)(!1),
                        { formatMessage: m } = (0, s.A)();
                    return (0, o.useCallback)(async () => {
                        if (!e) return;
                        let o = n.modal.isOpened ? l.uQT.FULLSCREEN_INFO : l.uQT.INFO,
                            s = n.modal.isOpened ? l.uQT.FULLSCREEN_ERROR : l.uQT.ERROR;
                        if (!t.isAuthorized) return void g((0, i.jsx)(d.hT, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s });
                        if (_) return;
                        let v = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                        p(!0);
                        let x = await e.toggleLike();
                        p(!1),
                            u.clips.reset(),
                            x === a.f.OK
                                ? g((0, i.jsx)(c, { clip: v }), { containerId: o })
                                : g((0, i.jsx)(d.hT, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: s });
                    }, [e, t.isAuthorized, _, m, g, n.modal.isOpened, u.clips]);
                };
        },
        60339: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipOpened: () => a });
            var i = n(43350),
                r = n(62395),
                o = n(8817),
                s = n(83252);
            let a = () => {
                let e = (0, r.st)(),
                    { hash: t } = (0, r.gf)(),
                    n = (0, s.UlF)();
                return (0, o.c)((r) => {
                    if (!e) return;
                    let o = { hash: t, pageId: i.QT.VideoScreen, mainObjectType: i.ky.Video, mainObjectId: r },
                        s = (0, i.Fx)({ params: o, logger: n, context: 'useSendEventOnClipOpened' });
                    s && (0, i.w5)(e.evgenInstance, s);
                });
            };
        },
        61288: (e, t, n) => {
            'use strict';
            var i;
            n.d(t, { x: () => i }),
                (function (e) {
                    (e.ASC = 'asc'), (e.DESC = 'desc');
                })(i || (i = {}));
        },
        63708: (e) => {
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
        64782: (e, t, n) => {
            'use strict';
            n.d(t, { useSendEventOnClipClosed: () => a });
            var i = n(43350),
                r = n(62395),
                o = n(8817),
                s = n(83252);
            let a = () => {
                let e = (0, r.st)(),
                    { hash: t } = (0, r.gf)(),
                    n = (0, s.UlF)();
                return (0, o.c)((r) => {
                    if (!e) return;
                    let o = { hash: t, pageId: i.QT.VideoScreen, mainObjectType: i.ky.Video, mainObjectId: r },
                        s = (0, i.Fx)({ params: o, logger: n, context: 'useSendEventOnClipClosed' });
                    s && (0, i.XB)(e.evgenInstance, s);
                });
            };
        },
        64948: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => a });
            var i = n(54486),
                r = n(97396),
                o = n(14726),
                s = n(83252);
            let a = () => {
                let e = (0, r.useSearchParams)().get('labelId');
                return (e && (0, s.LLJ)(e)) || (0, r.notFound)(), (0, i.jsx)(o.oM, { labelId: e });
            };
        },
        65034: (e, t, n) => {
            'use strict';
            n.d(t, { NotFound: () => m });
            var i = n(54486),
                r = n(50420),
                o = n(28303),
                s = n(47713),
                a = n(77881),
                l = n(5956),
                d = n(97800),
                c = n(83252),
                u = n(80585),
                g = n(61910),
                _ = n(46215),
                p = n.n(_);
            let m = (0, o.PA)((e) => {
                let { className: t, title: n, description: o, iconVariant: _ = 'musicLogo', iconClassName: m, iconSize: v } = e,
                    { contentRef: x } = (0, c.gKY)(),
                    h = (0, c.ZpR)(c.Zyd.main.href);
                (0, c.LZB)();
                let { handleNavigateToMain: b } = (0, c.D5F)(h);
                return (
                    (0, c.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, c.Pjs)();
                        (0, g.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, i.jsxs)('div', {
                        className: (0, r.$)(p().root, { [p().root_desktop]: !x }, t),
                        children: [
                            (0, i.jsx)(u.Lh, { withBackwardFallback: '/', className: p().navigation, withForwardControl: !1 }),
                            (0, i.jsxs)('div', {
                                className: p().content,
                                children: [
                                    (0, i.jsx)(l.Icon, { className: (0, r.$)(p().icon, m), variant: _, size: v }),
                                    (0, i.jsx)(d.Heading, {
                                        className: (0, r.$)(p().title, p().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, i.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, i.jsx)(d.Caption, {
                                        className: (0, r.$)(p().text, p().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, i.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, i.jsx)(a.$, {
                                        onClick: b,
                                        className: p().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, i.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        75312: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => v });
            var i = n(54486),
                r = n(50420),
                o = n(28303),
                s = n(61910),
                a = n(43426),
                l = n(47713),
                d = n(77881),
                c = n(5956),
                u = n(97800),
                g = n(83252),
                _ = n(80585),
                p = n(63708),
                m = n.n(p);
            let v = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: o } = (0, a.A)(),
                    p = o({ id: 'error-messages.something-went-wrong' });
                (0, g.CgZ)(p);
                let { sendRefreshEvent: v } = (0, g.cYT)(),
                    x = (0, s.useCallback)(() => {
                        v(), (window.location.href = g.Zyd.main.href);
                    }, [v]),
                    { contentRef: h } = (0, g.gKY)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(m().root, t),
                    children: [
                        n &&
                            (0, i.jsx)(_.Lh, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(m().navigation, { [m().navigation_desktop]: !h }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(m().content, { [m().content_shrink]: !n }),
                            children: [
                                (0, i.jsx)(c.Icon, { className: m().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.Heading, { className: (0, r.$)(m().title, m().important), variant: 'h3', size: 'xs', children: p }),
                                (0, i.jsxs)(u.Caption, {
                                    className: (0, r.$)(m().text, m().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(d.$, {
                                    onClick: x,
                                    className: m().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        82644: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => i.SomethingWentWrong });
            var i = n(75312);
        },
        83333: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => r });
            var i = n(83252);
            let r = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: n } = (0, i.uvd)(i.Zyd.video.href, { query: { [i.K3F.IDS]: e.join(','), [i.K3F.ACTIVE_INDEX]: String(t) } });
                return n;
            };
        },
        90229: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => r });
            var i = n(11405);
            let r = (e) => !!e && (e === i.g.RATING || e === i.g.YEAR);
        },
    },
    (e) => {
        e.O(
            0,
            [
                6041, 9834, 5355, 1023, 2398, 8748, 2036, 1776, 3146, 4915, 1426, 1604, 1311, 7764, 6706, 5148, 3005, 3252, 585, 6433, 3286, 156, 6231, 4826, 3211, 7656,
                1656, 4726, 5843, 3290, 7358,
            ],
            () => e((e.s = 24743)),
        ),
            (_N_E = e.O());
    },
]);
