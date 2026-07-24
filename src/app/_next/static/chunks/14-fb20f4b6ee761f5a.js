(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [14],
    {
        5537: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var o = i(57594),
                a = i(79406);
            let n = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: n },
                    experiments: r,
                } = (0, o.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = r.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        7558: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        7697: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => n });
            var o = i(5537),
                a = i(57594);
            let n = () => {
                let { user: e } = (0, a.g)(),
                    t = (0, o.N)(),
                    i = ((e) => {
                        let { hasUserPlus: t } = e,
                            i = !t,
                            o = !t && !1;
                        return { isPassToProduct: i, isFreemium: o, hasFreeUserAccess: i || o };
                    })({ hasUserPlus: e.hasPlus }),
                    n = i.isFreemium || t;
                return {
                    ...i,
                    withFreemiumCloseListening: t,
                    withPlusPopoverWeb: n,
                    withPlusPopoverIncludingPassToProduct: i.hasFreeUserAccess || t,
                    withPlusPopoverSearchVibeCard: t,
                };
            };
        },
        9017: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var o = i(77322),
                a = i(95134);
            let n = (e) => {
                let t,
                    { entityVariant: i, urlParams: n } = e,
                    r = (0, o.D)();
                if (
                    n.id &&
                    (t =
                        'production' === r
                            ? ((e) => {
                                  switch (e) {
                                      case a.D.ALBUM:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=';
                                      case a.D.PLAYLIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=';
                                      case a.D.ARTIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==';
                                      case a.D.TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=';
                                      case a.D.UGC_TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx';
                                  }
                              })(i)
                            : ((e) => {
                                  switch (e) {
                                      case a.D.ALBUM:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=';
                                      case a.D.PLAYLIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=';
                                      case a.D.ARTIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==';
                                      case a.D.TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=';
                                      case a.D.UGC_TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx';
                                  }
                              })(i))
                )
                    return ((e, t) => {
                        let i = ''.concat(e);
                        for (let [e, o] of Object.entries(t)) i.includes(':'.concat(e)) && ((i = i.replace(':'.concat(e), o.toString())), delete t[e]);
                        return ''.concat(i).concat(
                            ((e) => {
                                let t = Object.entries(e)
                                    .map((e) => {
                                        let [t, i] = e;
                                        return ''.concat(t, '=').concat(encodeURIComponent(i));
                                    })
                                    .join('&');
                                return t ? '?'.concat(t) : '';
                            })(t),
                        );
                    })(
                        atob(
                            t.replace(/[A-Za-z]/g, function (e) {
                                return String.fromCharCode(e.charCodeAt(0) + ('M' >= e.toUpperCase() ? 13 : -13));
                            }),
                        ),
                        n,
                    );
            };
        },
        11323: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            var o = i(32290),
                a = i(55178),
                n = i(21732),
                r = i(50162);
            let l = (e) => {
                    let { isAvailable: t = !0, className: i, fallbackIconSize: a, forwardRef: l, ...s } = e;
                    return t
                        ? (0, o.jsx)(r._V, { ref: l, className: i, fallbackIconSize: a, ...s, 'data-test-id': n.S7.ENTITY_COVER_IMAGE })
                        : (0, o.jsx)(r.Ab, { className: i, iconSize: a, iconVariant: 'unavailable', 'data-test-id': n.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                s = (0, a.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }));
        },
        12350: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => m });
            var o = i(55178),
                a = i(16172),
                n = i(52068),
                r = i(6752),
                l = i(62376),
                s = i(1677),
                c = i(48922),
                d = i(84782),
                u = i(30915),
                f = i(2792),
                p = i(37240),
                y = i(51012),
                v = i(47498);
            let m = () => {
                let e = (0, n.st)(),
                    t = (0, l.U)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: m, pageStyle: x, pagePlacement: _ } = (0, p.$)(),
                    { tabId: b, tabPos: A, isTabSelectedByDefault: g } = (0, v.R)(),
                    { offsetBlockPosY: T } = (0, u.u)(),
                    { blockId: L, blockType: j, blockPosX: h, blockPosY: S, mainObjectId: C, mainObjectType: E } = (0, d.N)(),
                    { objectId: O, objectPosX: I, objectPosY: R, objectType: P, objectsCount: k } = (0, f.J)(),
                    { skeleton: N } = (0, y.b)(),
                    Y = (0, r.L)(() => (void 0 !== T && void 0 !== S ? T + S : S));
                return (0, o.useCallback)(
                    (o) => {
                        let { objectId: n, objectType: r, actionType: l, userInteractionType: d, objectPosX: u, objectPosY: f, objectCount: p } = o;
                        if (!e || !m || !c.xK.includes(m) || !c.fD.includes(m)) return;
                        let y = s.F[m];
                        if (!y) return;
                        let v = {
                            hash: i,
                            pageId: y,
                            pageStyle: x || a.QL.Fullscreen,
                            pagePlacement: _ || a.c4.Fullscreen,
                            entityType: j,
                            entityId: L,
                            entityPosX: h,
                            entityPosY: Y,
                            objectId: null != n ? n : O,
                            objectType: null != r ? r : P,
                            objectPosX: null != u ? u : I,
                            objectPosY: null != f ? f : R,
                            objectsCount: null != p ? p : k,
                            actionType: l,
                            userInteractionType: null != d ? d : a.gi.Tap,
                        };
                        c.qG.includes(m) && ((v.tabId = b), (v.tabPos = A), (v.isTabSelectedByDefault = g)),
                            N && (v.skeletonId = N),
                            C && E && ((v.mainObjectType = E), (v.mainObjectId = C));
                        let T = (0, a.Fx)({ params: v, logger: t, context: 'useSendEventOnBlockActionPerformed' });
                        T && (0, a.h_)(e.evgenInstance, T);
                    },
                    [O, P, I, R, k, e, m, i, x, _, j, L, h, Y, N, C, E, t, b, A, g],
                );
            };
        },
        17679: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        19383: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => u });
            var o = i(55178),
                a = i(27576),
                n = i(91027),
                r = i(70204),
                l = i(34186),
                s = i(57594),
                c = i(85017),
                d = i(19379);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: i,
                        getStorageKey: u,
                        callback: f,
                        onAfterHandled: p,
                        onBeforeHandle: y,
                        onReject: v,
                        modalBehavior: m,
                        preventDefaultWhenSafe: x,
                    } = e,
                    {
                        disclaimerModalState: _,
                        modals: { disclaimerModal: b },
                    } = (0, s.g)(),
                    A = (0, o.useRef)(String((0, a.A)())),
                    g = (0, o.useRef)(!1),
                    T = (0, o.useRef)(!1),
                    L = (0, o.useRef)(0),
                    j = (0, o.useRef)(!0),
                    h = (0, l.N)().get(r.U2),
                    S = (0, n.c)((e) => {
                        x && (null == e || e.preventDefault()), f && f(e), p && p();
                    });
                return (
                    (0, o.useEffect)(() => {
                        _.isUnsafeDisclaimerConfirmed && _.id === A.current && !g.current && (S(), (g.current = !0));
                    }, [_.id, _.isUnsafeDisclaimerConfirmed, S]),
                    (0, o.useEffect)(() => {
                        _.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && _.setModalData(t.resolvedModalData);
                    }, [_, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, o.useEffect)(
                        () => () => {
                            j.current = !1;
                        },
                        [],
                    ),
                    (0, n.c)(async (e) => {
                        if (!T.current) {
                            T.current = !0;
                            try {
                                if ((null == y || y(e), t)) {
                                    var o, a, n;
                                    let r = t.getDisclaimerEntityRef(i),
                                        l = null != (o = null == u ? void 0 : u(t, r)) ? o : ''.concat(r.entityType, '_').concat(r.entityId),
                                        s = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = h.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(l)) return void S(e);
                                    }
                                    if (s) {
                                        null == e || e.preventDefault(),
                                            t.isUnsafeLegal && _.setType(c.Z.UNSAFE),
                                            _.setDisclaimerRejectHandler(null != v ? v : null),
                                            _.setId(A.current),
                                            _.setEntityKey(l),
                                            _.setCurrentEntityRef(r.entityType, r.entityId),
                                            _.setShouldHistoryBack(!!(null == m ? void 0 : m.shouldHistoryBack)),
                                            _.setShouldCloseModalOnOutsidePress(null == (a = null == m ? void 0 : m.closeOnOutside) || a),
                                            _.setShouldCloseModalOnEscape(null == (n = null == m ? void 0 : m.closeOnEscape) || n),
                                            (L.current += 1);
                                        let i = L.current,
                                            o = await t.getModalDisclaimerData();
                                        if (L.current !== i || !1 === j.current) return;
                                        _.setModalData(null != o ? o : null), (g.current = !1), b.open();
                                        return;
                                    }
                                    x && (null == e || e.preventDefault()), S(e);
                                    return;
                                }
                                x && (null == e || e.preventDefault()), S(e);
                            } finally {
                                T.current = !1;
                            }
                        }
                    })
                );
            };
        },
        27120: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var o = i(55178),
                a = i(53022);
            let n = (e) => {
                let t = (0, o.useRef)(!1),
                    i = (0, a.z)();
                (0, o.useEffect)(() => {
                    e && (null == i || i.disable(), (t.current = !0)), !e && t.current && (null == i || i.enable(), (t.current = !1));
                }, [e, i]);
            };
        },
        28999: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var o = i(55178),
                a = i(77223),
                n = i(75265);
            let r = () => {
                let { sendSearchFeedback: e, id: t, type: i, blockPosition: r, position: l } = (0, o.useContext)(n.N) || {};
                if (void 0 === t || void 0 === i || void 0 === r || void 0 === l) return {};
                let s = null == e ? void 0 : e.bind(null, { feedbackType: a.n.LIKE, id: t, type: i, blockPosition: r, position: l });
                return {
                    sendLikeSearchFeedback: s,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: a.n.NAVIGATE, id: t, type: i, blockPosition: r, position: l }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: a.n.PLAY, id: t, type: i, blockPosition: r, position: l }),
                };
            };
        },
        29098: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => o });
            let o = (0, i(55178).createContext)(null);
        },
        32480: (e) => {
            e.exports = {
                animation_scaled: 'LikeButton_animation_scaled___NgPW',
                scale: 'LikeButton_scale__Gv0fD',
                animation_unscaled: 'LikeButton_animation_unscaled__YdYoQ',
                unscale: 'LikeButton_unscale__4Kprg',
            };
        },
        38533: (e) => {
            e.exports = {
                message: 'EditorsFeaturesNotification_message__Q__9v',
                text: 'EditorsFeaturesNotification_text__b79yA',
                title: 'EditorsFeaturesNotification_title__BuJZ_',
                link: 'EditorsFeaturesNotification_link__deYjx',
                playlistTitle: 'EditorsFeaturesNotification_playlistTitle__Hv7bZ',
                image: 'EditorsFeaturesNotification_image__AidPK',
            };
        },
        44964: (e) => {
            e.exports = { menuItem: 'ContextMenuWithCheckItem_menuItem__x6QcI', icon: 'ContextMenuWithCheckItem_icon__GowgV' };
        },
        46200: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => r });
            var o = i(55178),
                a = i(7697),
                n = i(57594);
            let r = () => {
                var e;
                let {
                        modals: { buySubscriptionModal: t },
                        user: i,
                        settings: r,
                        familyInvite: l,
                    } = (0, n.g)(),
                    { isFreemium: s } = (0, a.X)(),
                    c = null == (e = r.browserInfo) ? void 0 : e.isTouch,
                    d = l.modal.isOpened;
                return (0, o.useMemo)(
                    () => ({ showBuySubscriptionModal: t.open, hideBuySubscriptionModal: t.close, shouldShowBuySubscriptionModal: (s || !i.isAuthorized) && !!c && !d }),
                    [t.close, t.open, s, c, i.isAuthorized, d],
                );
            };
        },
        53022: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            var o = i(55178),
                a = i(29098);
            let n = () => (0, o.useContext)(a.P);
        },
        54391: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => m });
            var o = i(55178),
                a = i(16172),
                n = i(52068),
                r = i(62376),
                l = i(1677),
                s = i(79374),
                c = i(48922),
                d = i(84782),
                u = i(2792),
                f = i(37240),
                p = i(51012),
                y = i(47498);
            let v = [c._Q.HOME, c._Q.OWN_COLLECTION, c._Q.LANDING, c._Q.SEARCH],
                m = () => {
                    let e = (0, n.st)(),
                        t = (0, r.U)(),
                        { hash: i } = (0, n.gf)(),
                        { pageId: c } = (0, f.$)(),
                        { tabId: m, tabPos: x, isTabSelectedByDefault: _ } = (0, y.R)(),
                        { blockId: b, blockType: A, blockPosX: g, blockPosY: T, objectsCount: L } = (0, d.N)(),
                        { objectType: j, objectId: h, objectPosX: S, objectPosY: C } = (0, u.J)(),
                        { skeleton: E } = (0, p.b)();
                    return (0, o.useCallback)(
                        (o, n) => {
                            if (e && c)
                                if (v.includes(c)) {
                                    let o = {
                                        hash: i,
                                        pageId: l.F[c],
                                        tabId: m,
                                        tabPos: x,
                                        entityType: A,
                                        entityId: b,
                                        entityPosX: g,
                                        entityPosY: T,
                                        isTabSelectedByDefault: _,
                                        objectsCount: L,
                                        objectType: j,
                                        objectId: h,
                                        objectPosX: S,
                                        objectPosY: C,
                                        from: l.F[c],
                                        to: a.QT.TrailerScreen,
                                    };
                                    E && (o.skeletonId = E);
                                    let n = (0, a.Fx)({ params: o, logger: t, context: 'useSendEventOnTrailerNavigated' });
                                    if (!n) return;
                                    (0, a.QS)(e.evgenInstance, n);
                                } else {
                                    let r = { hash: i, pageId: s.W[c], mainObjectType: o, mainObjectId: n, from: s.W[c], to: a.QT.TrailerScreen },
                                        l = (0, a.Fx)({ params: r, logger: t, context: 'useSendEventOnTrailerNavigated' });
                                    if (!l) return;
                                    (0, a.Mu)(e.evgenInstance, l);
                                }
                        },
                        [e, b, g, T, A, i, _, t, h, S, C, j, L, c, E, m, x],
                    );
                };
        },
        58008: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => o });
            var o = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), e;
            })({});
        },
        58237: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var o = i(32290),
                a = i(39407),
                n = i(21732),
                r = i(82586),
                l = i(19740);
            let s = (e) => {
                let { isLiked: t, onClick: i, disabled: s, className: c } = e;
                return (0, o.jsx)(l.Dr, {
                    className: c,
                    onClick: i,
                    disabled: s,
                    icon: (0, o.jsx)(r.I, { variant: t ? 'liked' : 'like', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    'data-test-id': n.S7.CONTEXT_MENU_LIKE_BUTTON,
                    children: (0, o.jsx)(a.A, { id: 'interface-actions.like' }),
                });
            };
        },
        58270: (e) => {
            e.exports = { message: 'EditorsFeaturesFailedNotification_message__EIgMe' };
        },
        59576: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            let o = 'onboarding-tooltip';
        },
        63380: (e, t, i) => {
            'use strict';
            var o;
            i.d(t, { f: () => o }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(o || (o = {}));
        },
        65477: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => M });
            var o = i(32290),
                a = i(96103),
                n = i(60900),
                r = i(21732),
                l = i(19740),
                s = i(57594),
                c = i(95134),
                d = i(55178),
                u = i(45477),
                f = i(75582),
                p = i(58008),
                y = i(39407),
                v = i(71926),
                m = i(58534),
                x = i(58270),
                _ = i.n(x);
            let b = (e) => {
                    let { closeToast: t } = e;
                    return (0, o.jsx)(m.$, {
                        message: (0, o.jsx)(v.HL, {
                            className: _().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, o.jsx)(y.A, { id: 'playlist-errors.failed-part-tracks-download-xlsx' }),
                        }),
                        closeToast: t,
                    });
                },
                A = (e) => {
                    let { closeToast: t } = e;
                    return (0, o.jsx)(m.$, {
                        message: (0, o.jsx)(v.HL, {
                            className: _().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, o.jsx)(y.A, { id: 'playlist-errors.failed-download-xlsx' }),
                        }),
                        closeToast: t,
                    });
                };
            var g = i(38533),
                T = i.n(g);
            let L = (e) => {
                    let { closeToast: t } = e;
                    return (0, o.jsx)(m.$, {
                        message: (0, o.jsx)(v.HL, {
                            variant: 'div',
                            size: 'm',
                            className: T().text,
                            children: (0, o.jsx)(y.A, { id: 'notifications-info.xlsx-success' }),
                        }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                j = () =>
                    (0, o.jsx)(m.$, {
                        message: (0, o.jsx)(v.HL, {
                            variant: 'div',
                            size: 'm',
                            className: T().text,
                            children: (0, o.jsx)(y.A, { id: 'notifications-info.xlsx-loading' }),
                        }),
                        coverRadius: 's',
                    }),
                h = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40,
                        { fullscreenPlayer: t, playlist: i } = (0, s.g)(),
                        { notify: a, dismiss: n } = (0, f.l)(),
                        r = (0, d.useRef)(null),
                        l = t.modal.isOpened ? u.u.FULLSCREEN_INFO : u.u.INFO;
                    return (0, d.useCallback)(async () => {
                        (r.current = a((0, o.jsx)(j, {}), { containerId: l, autoClose: !1 })),
                            await i.editorFeature.getAllPlaylistItems({ batchSize: e }),
                            (await i.editorFeature.exportToExcel()) === p.F.OK
                                ? i.areAllTracksUploaded
                                    ? a((0, o.jsx)(L, {}), { containerId: l })
                                    : a((0, o.jsx)(b, {}), { containerId: t.modal.isOpened ? u.u.FULLSCREEN_ERROR : u.u.ERROR, autoClose: !1 })
                                : a((0, o.jsx)(A, {}), { containerId: t.modal.isOpened ? u.u.FULLSCREEN_ERROR : u.u.ERROR, autoClose: !1 }),
                            n({ notificationId: r.current, forceClose: !0 });
                    }, [e, n, t.modal.isOpened, l, a, i.areAllTracksUploaded, i.editorFeature]);
                };
            var S = i(63618),
                C = i(82586),
                E = i(44964),
                O = i.n(E);
            let I = (e) => {
                    let { text: t, onClick: i, isDisabled: a, className: n, isActive: r, 'aria-label': s } = e;
                    return (0, o.jsxs)(l.Dr, {
                        className: (0, S.$)(n, O().menuItem),
                        onClick: i,
                        disabled: a,
                        isSubMenu: !0,
                        children: [
                            (0, o.jsx)(v.HL, { variant: 'div', size: 'm', lineClamp: 1, children: t }),
                            r && (0, o.jsx)(C.I, { className: O().icon, size: 'xxxs', variant: 'check', 'aria-label': s }),
                        ],
                    });
                },
                R = (0, a.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, s.g)(),
                        { toggleShouldShowDuplicate: t, shouldShowDuplicate: i } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, o.jsx)(I, {
                        'aria-label': a({ id: 'entity-names.editor-feature-is-show' }),
                        text: a({ id: 'interface-actions.show-duplicates' }),
                        onClick: t,
                        isActive: i,
                    });
                }),
                P = (0, a.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, s.g)(),
                        { toggleShouldShowGenre: t, shouldShowGenre: i } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, o.jsx)(I, {
                        'aria-label': a({ id: 'entity-names.editor-feature-is-show' }),
                        text: a({ id: 'interface-actions.show-genres' }),
                        onClick: t,
                        isActive: i,
                    });
                }),
                k = (0, a.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, s.g)(),
                        { toggleShouldShowMajor: t, shouldShowMajor: i } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, o.jsx)(I, {
                        'aria-label': a({ id: 'entity-names.editor-feature-is-show' }),
                        text: a({ id: 'interface-actions.show-majors' }),
                        onClick: t,
                        isActive: i,
                    });
                });
            var N = i(21916),
                Y = i(91027);
            let D = (0, a.PA)((e) => {
                    let { adminUrl: t } = e;
                    (0, N.useRouter)();
                    let i = (0, Y.c)(() => {
                        window.open(t, '_blank');
                    });
                    return (0, o.jsx)(l.Dr, {
                        onClick: i,
                        isSubMenu: !0,
                        children: (0, o.jsx)(v.HL, { variant: 'div', size: 'm', lineClamp: 1, children: (0, o.jsx)(y.A, { id: 'interface-actions.navigate-to-admin' }) }),
                    });
                }),
                M = (0, a.PA)((e) => {
                    let { entityVariant: t, adminUrl: i, withPlaylistPageFeatures: a, className: d, isDisabled: u } = e,
                        {
                            settings: { isMobile: f },
                        } = (0, s.g)(),
                        { formatMessage: p } = (0, n.A)();
                    h();
                    let y = t === c.D.PLAYLIST && a,
                        v = t === c.D.PLAYLIST && a,
                        m = t === c.D.PLAYLIST && a,
                        x = t === c.D.PLAYLIST && a;
                    return (0, o.jsxs)(l.W1, {
                        label: p({ id: 'interface-actions.editorial-tools' }),
                        menuClassName: d,
                        offsetOptions: 3,
                        isMobile: f,
                        disabled: u,
                        'data-test-id': r.OA.playlist.CONTEXT_MENU_EDITOR_FEATURES_BUTTON,
                        children: [i && (0, o.jsx)(D, { adminUrl: i }), y && (0, o.jsx)(k, {}), v && (0, o.jsx)(P, {}), m && (0, o.jsx)(R, {}), x && !1],
                    });
                });
        },
        70280: (e, t, i) => {
            'use strict';
            i.d(t, { ZI: () => f, m_: () => u });
            var o,
                a = i(78035),
                n = i(80451),
                r = i(55178),
                l = {
                    5881: (e, t, i) => {
                        function o() {
                            for (var e, t, i = 0, o = ''; i < arguments.length; )
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            o,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (o = e(t[i])) && (a && (a += ' '), (a += o));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        i.r(t), i.d(t, { clsx: () => o, default: () => a });
                        let a = o;
                    },
                    9682: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => o });
                        let o = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
                    },
                    6951: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => o });
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
                    5882: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => o });
                        let o = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var a = null;
                            if ((void 0 !== o && (a = '' + o), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var n in ((o = {}), t)) 'key' !== n && (o[n] = t[n]);
                            else o = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    58: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0);
                        let o = i(4377),
                            a = i(810),
                            n = i(1964),
                            r = i(2660),
                            l = i(3770),
                            s = i(5481);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: i, children: c, referenceRef: d, ...u } = e,
                                [f, p] = Array.isArray(c) ? c : [c],
                                y = (0, s.useTooltip)(u),
                                v = (0, a.useId)(),
                                m = (0, a.useId)(),
                                x = (0, a.useId)(),
                                _ = (0, n.useMergeRefs)([y.refs.setReference, d]);
                            return (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, a.cloneElement)(f, {
                                        ref: _,
                                        ...(t ? { 'aria-describedby': v } : {}),
                                        ...y.getReferenceProps(),
                                        ...(0, r.getDataAttrFromProps)(u),
                                        key: m,
                                    }),
                                    y.context.open
                                        ? (0, a.cloneElement)(null != p ? p : (0, o.jsx)(l.TooltipContent, {}), {
                                              ref: y.refs.setFloating,
                                              style: { ...y.floatingStyles, visibility: y.referenceHidden ? 'hidden' : 'visible' },
                                              text: i,
                                              arrow: y.arrow,
                                              ...(t ? { id: v } : {}),
                                              ...y.getFloatingProps(),
                                              key: x,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3770: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0);
                        let a = i(4377),
                            n = i(5881),
                            r = i(810),
                            l = i(1964),
                            s = i(7743),
                            c = o(i(9682));
                        (t.TooltipContentComponent = (e) => {
                            let { className: t, children: i, arrow: o, rootNode: d, forwardRef: u, text: f, ...p } = e;
                            return (0, a.jsx)(l.FloatingPortal, {
                                root: d,
                                children: (0, a.jsxs)('div', {
                                    className: (0, n.clsx)(c.default.root, t),
                                    ref: u,
                                    ...p,
                                    children: [
                                        (0, r.isValidElement)(o) && o,
                                        (0, a.jsx)(s.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: c.default.text,
                                            children: null != i ? i : f,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, r.forwardRef)((e, i) => (0, a.jsx)(t.TooltipContentComponent, { forwardRef: i, ...e })));
                    },
                    5481: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0);
                        let o = i(4377),
                            a = i(810),
                            n = i(1964),
                            r = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: i = 'top',
                                    open: l,
                                    onOpenChange: s,
                                    isHoverEnabled: c = !0,
                                    isFocusEnabled: d = !0,
                                    offsetOptions: u,
                                    flipOptions: f = {},
                                    shiftOptions: p = {},
                                    hoverSettings: y = r,
                                    enabled: v = !0,
                                    arrowProps: m,
                                } = e,
                                [x, _] = (0, a.useState)(t),
                                b = (0, a.useRef)(null),
                                A = null != l ? l : x,
                                g = null != s ? s : _,
                                T = (0, n.useFloating)({
                                    placement: i,
                                    open: A,
                                    onOpenChange: g,
                                    whileElementsMounted: n.autoUpdate,
                                    middleware: [
                                        (0, n.offset)(u),
                                        (0, n.flip)({ crossAxis: i.includes('-'), ...f }),
                                        (0, n.shift)(p),
                                        (0, n.arrow)({ element: b }),
                                        (0, n.hide)(),
                                    ],
                                }),
                                L = T.context,
                                j = (0, n.useHover)(L, { move: !1, enabled: c && v, ...y }),
                                h = (0, n.useFocus)(L, { enabled: d && v }),
                                S = (0, n.useDismiss)(L),
                                C = (0, n.useRole)(L, { role: 'tooltip' }),
                                E = (0, n.useInteractions)([j, h, S, C]),
                                O = (0, a.useMemo)(() => {
                                    if (m) return (0, o.jsx)(n.FloatingArrow, { ref: b, context: T.context, ...m });
                                }, [m, T.context]);
                            return (0, a.useMemo)(() => {
                                var e;
                                return { open: A, setOpen: g, arrow: O, referenceHidden: null == (e = T.middlewareData.hide) ? void 0 : e.referenceHidden, ...E, ...T };
                            }, [A, g, O, E, T]);
                        };
                    },
                    7743: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let a = i(4377),
                            n = i(5881),
                            r = i(810),
                            l = i(4721),
                            s = o(i(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: o = 'text', size: r = 's', className: c, children: d, weight: u = 'medium', ...f } = e;
                            return (0, a.jsx)(l.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(s.default.root, s.default['root_'.concat(o, '_').concat(r)], s.default['root_weight_'.concat(u)], c),
                                ...f,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, r.forwardRef)((e, i) => (0, a.jsx)(t.CaptionComponent, { forwardRef: i, ...e })));
                    },
                    4721: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let a = i(4377),
                            n = i(5881),
                            r = i(810),
                            l = o(i(5882));
                        function s(e) {
                            let { forwardRef: t, style: i, className: o, children: r, variant: s, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof r ? r : void 0;
                            return (0, a.jsx)(s, {
                                style: { ...i, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, n.clsx)(
                                    l.default.root,
                                    { [l.default.root_clamp]: c && c > 0, [l.default.root_clamp_oneline]: c && 1 === c, [l.default.root_clamp_multiline]: c && c > 1 },
                                    o,
                                ),
                                ...d,
                                children: r,
                            });
                        }
                        (t.TypographyComponent = s), (t.Typography = (0, r.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e })));
                    },
                    1964: (e) => {
                        e.exports = a;
                    },
                    2660: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(r, 2));
                    },
                },
                s = {};
            function c(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return l[e].call(i.exports, i, i.exports, c), i.exports;
            }
            (c.d = (e, t) => {
                for (var i in t) c.o(t, i) && !c.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (c.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var d = {};
            (() => {
                Object.defineProperty(d, 'X$', { value: !0 }), (d._v = d.u = void 0);
                var e = c(58);
                Object.defineProperty(d, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = c(3770);
                Object.defineProperty(d, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var u = d.u,
                f = d._v;
            d.X$;
        },
        71735: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => y });
            var o = i(32290),
                a = i(91027),
                n = i(39407),
                r = i(71926),
                l = i(58534),
                s = i(7558),
                c = i.n(s);
            let d = () =>
                (0, o.jsx)(l.$, {
                    message: (0, o.jsx)(r.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, o.jsx)(n.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var u = i(45477),
                f = i(75582),
                p = i(57594);
            let y = () => {
                let { notify: e } = (0, f.l)(),
                    { advert: t } = (0, p.g)();
                return (0, a.c)(() => (t.isAdvertShown && e((0, o.jsx)(d, {}), { containerId: u.u.INFO }), !!t.isAdvertShown));
            };
        },
        73775: (e) => {
            e.exports = {
                collectionLink: 'BaseNotificationLike_collectionLink__HDZIi',
                collectionTitle: 'BaseNotificationLike_collectionTitle__42dz9',
                entityLink: 'BaseNotificationLike_entityLink__PW80J',
                entityTitle: 'BaseNotificationLike_entityTitle__Eyv0h',
                text: 'BaseNotificationLike_text__Jvlq8',
                image: 'BaseNotificationLike_image__8wD5H',
            };
        },
        74196: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => c });
            var o,
                a = i(55178),
                n = {
                    5881: (e, t, i) => {
                        function o() {
                            for (var e, t, i = 0, o = ''; i < arguments.length; )
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            o,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (o = e(t[i])) && (a && (a += ' '), (a += o));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        i.r(t), i.d(t, { clsx: () => o, default: () => a });
                        let a = o;
                    },
                    4517: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => o });
                        let o = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var a = null;
                            if ((void 0 !== o && (a = '' + o), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var n in ((o = {}), t)) 'key' !== n && (o[n] = t[n]);
                            else o = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    2865: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let a = i(4377),
                            n = i(5881),
                            r = i(810),
                            l = o(i(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: o, ...s } = e,
                                c = (0, n.clsx)(l.default.root, { [l.default.focusable]: i }, t);
                            return (0, r.isValidElement)(o)
                                ? (0, r.cloneElement)(o, { ...s, className: (0, n.clsx)(c, o.props.className) })
                                : (0, a.jsx)('span', { className: c, ...s, children: o });
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(a, 2));
                    },
                },
                r = {};
            function l(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return n[e].call(i.exports, i, i.exports, l), i.exports;
            }
            (l.d = (e, t) => {
                for (var i in t) l.o(t, i) && !l.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var s = {};
            (() => {
                Object.defineProperty(s, '__esModule', { value: !0 }), (s.SROnly = void 0);
                var e = l(2865);
                Object.defineProperty(s, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = s.SROnly;
            s.__esModule;
        },
        75265: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            let o = (0, i(55178).createContext)(null);
        },
        77223: (e, t, i) => {
            'use strict';
            var o, a;
            i.d(t, { n: () => a, o: () => o }),
                (function (e) {
                    (e.ARTIST = 'artist'),
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
                        (e.SEARCH_PAGE = 'search-page');
                })(o || (o = {})),
                (function (e) {
                    (e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like');
                })(a || (a = {}));
        },
        83755: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var o = i(32290),
                a = i(39407),
                n = i(21732),
                r = i(82586),
                l = i(19740);
            let s = (e) => {
                let { onClick: t, className: i, disabled: s } = e;
                return (0, o.jsx)(l.Dr, {
                    className: i,
                    onClick: t,
                    icon: (0, o.jsx)(r.I, { variant: 'trailer', size: 'xxs' }),
                    disabled: s,
                    'data-test-id': n.S7.CONTEXT_MENU_TRAILER_BUTTON,
                    children: (0, o.jsx)(a.A, { id: 'entity-names.trailer' }),
                });
            };
        },
        85017: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => o, n: () => a });
            var o = (function (e) {
                    return (e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e;
                })({}),
                a = (function (e) {
                    return (e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e;
                })({});
        },
        85433: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var o,
                a = i(55178),
                n = {
                    4601: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0);
                        let o = i(810);
                        t.useToggle = (e) => {
                            let [t, i] = (0, o.useState)(e);
                            (0, o.useEffect)(() => {
                                i(e);
                            }, [e]);
                            let a = (0, o.useCallback)(() => {
                                    i((e) => !e);
                                }, []),
                                n = (0, o.useCallback)(() => {
                                    i(!0);
                                }, []),
                                r = (0, o.useCallback)(() => {
                                    i(!1);
                                }, []);
                            return { state: t, toggle: a, setState: i, toggleTrue: n, toggleFalse: r };
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(a, 2));
                    },
                },
                r = {};
            function l(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return n[e](i, i.exports, l), i.exports;
            }
            var s = {};
            (() => {
                Object.defineProperty(s, 'X', { value: !0 }), (s.l = void 0);
                let e = l(810),
                    t = l(4601);
                s.l = (i) => {
                    let { isEnabled: o = !0, onClick: a, shouldStartFromUnscale: n } = i,
                        { state: r, toggleFalse: l, toggleTrue: s } = (0, t.useToggle)(!1),
                        { state: c, toggleFalse: d, toggleTrue: u } = (0, t.useToggle)(!1),
                        f = (0, e.useCallback)(
                            (e) => {
                                null == a || a(e), o && (n ? u() : s()), e.stopPropagation(), e.preventDefault();
                            },
                            [o, a, n, s, u],
                        );
                    return {
                        handleAnimationEnd: (0, e.useCallback)(() => {
                            l(), d();
                        }, [l, d]),
                        handleClick: f,
                        scaleAnimation: r,
                        unscaleAnimation: c,
                    };
                };
            })(),
                s.X;
            var c = s.l;
        },
        90169: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => l });
            var o = i(91027),
                a = i(72676),
                n = i(57594),
                r = i(44128);
            let l = (e) => {
                let { playContextParams: t, entityId: i, playbackId: l, sonataState: s } = e,
                    c = (0, r.e)(),
                    { sonataState: d } = (0, n.g)(),
                    u = s || d,
                    f = !1,
                    p = !1,
                    { contextData: y } = t,
                    {
                        type: v,
                        meta: { id: m },
                    } = y,
                    x = u.contextId === String(m) && v === u.contextType;
                if (i) {
                    var _;
                    f = i === (null == (_ = u.entityMeta) ? void 0 : _.idWithContext);
                } else f = x;
                return (
                    (p = f && u.status === a.MT.PLAYING),
                    {
                        isPlaying: p,
                        isCurrent: f,
                        togglePlay: (0, o.c)(() => {
                            var e;
                            let o = null == (e = u.entityMeta) ? void 0 : e.idWithContext;
                            if (void 0 !== i && i === o) {
                                null == c || c.togglePause(l);
                                return;
                            }
                            null == c || c.playContext(t, l);
                        }),
                        restartPlay: (0, o.c)(() => {
                            null == c || c.setProgress(0, l);
                        }),
                    }
                );
            };
        },
        90326: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => p });
            var o = i(32290),
                a = i(96103),
                n = i(55178),
                r = i(60900),
                l = i(21732),
                s = i(91027),
                c = i(63423),
                d = i(82586),
                u = i(2969);
            let f = (0, a.PA)((e) => {
                    let {
                            iconSize: t,
                            className: i,
                            size: a,
                            variant: n = 'default',
                            isPlaying: f = !1,
                            onClick: p,
                            iconClassName: y,
                            disabled: v,
                            color: m,
                            buttonVariant: x = 'text',
                            children: _,
                            radius: b = 'round',
                            withHover: A,
                            withRipple: g = !1,
                            ariaDescribedBy: T,
                            forwardRef: L,
                            tabIndex: j,
                            ariaHidden: h,
                            shouldSendAnalyticsOnPlayClick: S,
                        } = e,
                        C = (0, u.b)(),
                        { formatMessage: E } = (0, r.A)(),
                        O = ''.concat(f ? 'pause' : 'play').concat('filled' === n ? '_filled' : ''),
                        I = f ? l.S7.PAUSE_BUTTON : l.S7.PLAY_BUTTON,
                        R = E(f ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        P = (0, s.c)((e) => {
                            e.stopPropagation(), e.preventDefault(), null == p || p(e), S && C(!f);
                        });
                    return (0, o.jsx)(c.$, {
                        className: i,
                        variant: x,
                        color: m,
                        radius: b,
                        size: a,
                        flexIcon: !0,
                        withRipple: g,
                        'aria-label': R,
                        onClick: P,
                        icon: (0, o.jsx)(d.I, { variant: O, size: t, className: y }),
                        disabled: v,
                        withHover: A,
                        'aria-describedby': T,
                        ref: L,
                        tabIndex: j,
                        'aria-hidden': h,
                        'data-test-id': I,
                        children: _,
                    });
                }),
                p = (0, n.forwardRef)((e, t) => (0, o.jsx)(f, { forwardRef: t, ...e }));
        },
        90357: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => d });
            var o = i(32290),
                a = i(63618),
                n = i(74196),
                r = i(71926),
                l = i(58534),
                s = i(17679),
                c = i.n(s);
            let d = (e) => {
                let { error: t, closeToast: i, className: s } = e;
                return (0, o.jsx)(l.$, {
                    className: (0, a.$)(c().root, s),
                    message: (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(n.q, { children: (0, o.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, o.jsx)(r.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: i,
                });
            };
        },
        92744: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => x });
            var o = i(32290),
                a = i(63618),
                n = i(96103),
                r = i(55178),
                l = i(60900),
                s = i(16172),
                c = i(21732),
                d = i(85433),
                u = i(63423),
                f = i(82586),
                p = i(12350),
                y = i(32480),
                v = i.n(y);
            let m = (0, n.PA)((e) => {
                    let {
                            className: t,
                            variant: i = 'text',
                            iconSize: n,
                            isLiked: r = !1,
                            onClick: y,
                            iconClassName: m,
                            withRipple: x = !1,
                            size: _ = 's',
                            forwardRef: b,
                            children: A,
                            color: g,
                            disabled: T = !1,
                            'aria-label': L,
                        } = e,
                        j = (0, p.m)(),
                        { formatMessage: h } = (0, l.A)(),
                        {
                            scaleAnimation: S,
                            unscaleAnimation: C,
                            handleAnimationEnd: E,
                            handleClick: O,
                        } = (0, d.C)({
                            shouldStartFromUnscale: r,
                            onClick: (e) => {
                                null == y || y(e), j({ actionType: r ? s.X2.Unlike : s.X2.Like });
                            },
                        }),
                        I = r ? 'liked' : 'like';
                    return (0, o.jsx)(u.$, {
                        className: (0, a.$)(v().root, { [v().animation_scaled]: S, [v().animation_unscaled]: C }, t),
                        color: g,
                        onAnimationEnd: E,
                        withRipple: x,
                        variant: i,
                        size: _,
                        radius: 'xxxl',
                        'aria-label': L || h({ id: 'interface-actions.like' }),
                        'aria-pressed': r,
                        onClick: O,
                        icon: (0, o.jsx)(f.I, { size: n, className: (0, a.$)(v().icon, m), variant: I }),
                        ref: b,
                        disabled: T,
                        'data-test-id': c.S7.LIKE_BUTTON,
                        children: A,
                    });
                }),
                x = (0, r.forwardRef)((e, t) => (0, o.jsx)(m, { forwardRef: t, ...e }));
        },
        95134: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var o = (function (e) {
                return (e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.UGC_TRACK = 'ugc_track'), e;
            })({});
        },
        97647: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => o });
            var o = (function (e) {
                return (
                    (e.ARTIST = 'artist'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.VIBE = 'vibe'),
                    (e.PODCAST = 'podcast'),
                    (e.PODCAST_EPISODE = 'podcast-episode'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.AUDIOBOOK_EPISODE = 'audiobook-episode'),
                    (e.FAIRY_TALE = 'fairy-tale'),
                    (e.CLIP = 'clip'),
                    e
                );
            })({});
        },
        97755: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => A });
            var o = i(32290),
                a = i(63618),
                n = i(96103),
                r = i(55178),
                l = i(21732),
                s = i(91027),
                c = i(74196),
                d = i(71926),
                u = i(60900),
                f = i(39407),
                p = i(97647),
                y = i(57594),
                v = i(11323),
                m = i(61258),
                x = i(58534),
                _ = i(73775),
                b = i.n(_);
            let A = (0, n.PA)((e) => {
                let { closeToast: t, entityVariant: i, entityUrl: n, collectionUrl: _, entityTitle: A, coverUri: g, isLiked: T, className: L, withLink: j = !0 } = e,
                    { fullscreenPlayer: h, fullscreenVideoPlayer: S } = (0, y.g)(),
                    C = i === p.c.ARTIST,
                    E = (() => {
                        let { formatMessage: e } = (0, u.A)();
                        return (0, r.useCallback)(
                            (t) => {
                                let { entityVariant: i, values: a, entityTitle: n } = t;
                                switch (i) {
                                    case p.c.TRACK:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.track-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.track-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PLAYLIST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.playlist-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.playlist-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ALBUM:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.album-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.FAIRY_TALE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.fairytale-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.fairytale-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ARTIST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.artist-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.artist-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.podcast-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST_EPISODE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.podcast-episode-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-episode-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.audiobook-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK_EPISODE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.audiobook-episode-added-to-shelf', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-episode-added-to-shelf-aria-label' }, { entity: n }),
                                        };
                                    case p.c.CLIP:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.clip-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.clip-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                }
                            },
                            [e],
                        );
                    })(),
                    O = (() => {
                        let { formatMessage: e } = (0, u.A)();
                        return (0, r.useCallback)(
                            (t) => {
                                let { entityVariant: i, values: a, entityTitle: n } = t;
                                switch (i) {
                                    case p.c.TRACK:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.track-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.track-removed-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PLAYLIST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.playlist-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.playlist-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ALBUM:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.album-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.FAIRY_TALE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.fairytale-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.fairytale-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ARTIST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.artist-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.artist-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.podcast-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-remove-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST_EPISODE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.podcast-episode-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-episode-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.audiobook-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK_EPISODE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.audiobook-episode-removed-from-shelf', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-episode-removed-from-shelf-aria-label' }, { entity: n }),
                                        };
                                    case p.c.CLIP:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.clip-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.clip-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                }
                            },
                            [e],
                        );
                    })(),
                    I = (0, s.c)(() => {
                        h.modal.isOpened && h.modal.close(), S.modal.isOpened && S.modal.close();
                    }),
                    R = (0, r.useMemo)(
                        () =>
                            n && A && j
                                ? (0, o.jsx)(m.N, {
                                      className: b().entityLink,
                                      href: n,
                                      onClick: I,
                                      children: (0, o.jsxs)(d.HL, {
                                          className: b().entityTitle,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', A, '\xa0'],
                                      }),
                                  })
                                : A
                                  ? (0, o.jsxs)(d.HL, {
                                        className: b().entityTitle,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        title: A,
                                        children: ['\xa0', A, '\xa0'],
                                    })
                                  : void 0,
                        [A, n, I, j],
                    ),
                    P = (0, r.useMemo)(() => {
                        let e = {
                            entity: R,
                            collection: (e) =>
                                j
                                    ? (0, o.jsx)(m.N, {
                                          className: b().collectionLink,
                                          href: _,
                                          onClick: I,
                                          children: (0, o.jsxs)(d.HL, {
                                              className: b().collectionTitle,
                                              variant: 'span',
                                              type: 'controls',
                                              size: 'm',
                                              lineClamp: 1,
                                              children: ['\xa0', e, '\xa0'],
                                          }),
                                      })
                                    : (0, o.jsxs)(d.HL, {
                                          className: b().collectionTitle,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', e, '\xa0'],
                                      }),
                        };
                        return T ? E({ entityVariant: i, values: e, entityTitle: A }) : O({ entityVariant: i, values: e, entityTitle: A });
                    }, [_, i, I, T, R, A, E, O, j]);
                return (0, o.jsx)(x.$, {
                    className: (0, a.$)(b().root, L),
                    message: (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(c.q, { children: (0, o.jsx)('p', { role: 'alert', 'aria-label': P.ariaLabel }) }),
                            (0, o.jsx)(d.HL, {
                                className: b().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': l.S7.BASE_NOTIFICATION_LIKE_TEXT,
                                'aria-hidden': !0,
                                children: P.caption,
                            }),
                        ],
                    }),
                    cover: (0, o.jsx)(v.B, { className: b().image, src: g, size: 100, fit: 'cover', alt: A, withAvatarReplace: !0 }),
                    coverRadius: C ? 'round' : 's',
                    closeToast: t,
                });
            });
        },
    },
]);
