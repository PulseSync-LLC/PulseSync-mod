(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1631],
    {
        714: (e) => {
            e.exports = { root: 'WheelMobileItemShimmer_root__mu_1t', petal: 'WheelMobileItemShimmer_petal__Oo99q' };
        },
        1570: (e) => {
            e.exports = {
                root: 'WheelItemContextMenu_root__eFJWZ',
                root_open: 'WheelItemContextMenu_root_open__G_Zur',
                root_touch: 'WheelItemContextMenu_root_touch__RXoK_',
                controls: 'WheelItemContextMenu_controls__GHZ5K',
                bottom: 'WheelItemContextMenu_bottom__uy7C_',
                trigger: 'WheelItemContextMenu_trigger__afTFc',
                trigger_touch: 'WheelItemContextMenu_trigger_touch__YIwtL',
                triggerIcon: 'WheelItemContextMenu_triggerIcon__eOK1W',
                touchAnchor: 'WheelItemContextMenu_touchAnchor__TEXS3',
                menu: 'WheelItemContextMenu_menu__iNuvn',
                submenu: 'WheelItemContextMenu_submenu__i1qzS',
                item: 'WheelItemContextMenu_item__Wmzbm',
                itemIcon: 'WheelItemContextMenu_itemIcon__rywrj',
            };
        },
        3409: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { b: () => i }),
                (function (e) {
                    ((e.ALBUM = 'ALBUM'),
                        (e.ARTIST = 'ARTIST'),
                        (e.PLAYLIST = 'PLAYLIST'),
                        (e.WAVE = 'WAVE'),
                        (e.CLIP = 'CLIP'),
                        (e.GENERATIVE = 'GENERATIVE'),
                        (e.EMPTY = 'EMPTY'),
                        (e.OTHER = 'OTHER'));
                })(i || (i = {})));
        },
        4284: (e) => {
            e.exports = {
                root: 'WheelDesktop_root__09mK2',
                wrapper: 'WheelDesktop_wrapper__IXHUc',
                slide: 'WheelDesktop_slide__P_dLv',
                root_transitioning: 'WheelDesktop_root_transitioning__cMvYD',
            };
        },
        4803: (e) => {
            e.exports = {
                root_withMenu: 'WheelItem_root_withMenu__EfgMJ',
                root_withDesktopMenu: 'WheelItem_root_withDesktopMenu__nYycn',
                menuControl: 'WheelItem_menuControl__bo_UH',
                root_menuOpened: 'WheelItem_root_menuOpened__DNy6y',
                root: 'WheelItem_root__rTS4x',
                important: 'WheelItem_important__l3Yv0',
                coverContainer: 'WheelItem_coverContainer__K_MG_',
                coverContainer_iconCover: 'WheelItem_coverContainer_iconCover___b3qE',
                multivibeContainer: 'WheelItem_multivibeContainer__6xdF2',
                multivibeCover: 'WheelItem_multivibeCover__DruJ2',
                multivibeAvatar: 'WheelItem_multivibeAvatar__CxLIm',
                multivibeControl: 'WheelItem_multivibeControl__lGcom',
                cover: 'WheelItem_cover__8Ljm6',
                innerCover: 'WheelItem_innerCover__9UVAJ',
                title: 'WheelItem_title___kPQk',
                title_accentColor: 'WheelItem_title_accentColor__QcDTs',
                description: 'WheelItem_description__XcQtW',
                titleContainer: 'WheelItem_titleContainer__PKr4f',
                explicitMark: 'WheelItem_explicitMark___BhCp',
                explicitMarkContainer: 'WheelItem_explicitMarkContainer__U630c',
                entityMeta: 'WheelItem_entityMeta__Zv3Op',
                icon: 'WheelItem_icon__ubVWk',
            };
        },
        6493: (e, t, a) => {
            'use strict';
// for PulseSync: BEGIN import wheel model lifecycle guard
var pulseSyncMst = a(5120);
// for PulseSync: END import wheel model lifecycle guard

            (a.r(t), a.d(t, { Wheel: () => tn }));
            var i = a(88800),
                l = a(71625),
                n = a(84961),
                o = a(53548),
                s = a(87999),
                r = a(37523),
                c = a(79070),
                d = a(9630),
                m = a(72288),
                u = a(72042),
                _ = a(2058),
                h = a(29993),
                p = a(18593),
                b = a(61691),
                v = a(3409);
            let C = (e) => {
                    let t = e.data.meta;
                    if ('albums' in t) {
                        var a, i, l;
                        return null != (l = null == (i = t.albums) || null == (a = i[0]) ? void 0 : a.type) ? l : b._.ALBUM;
                    }
                    return b._.ALBUM;
                },
                x = () => {
                    let { formatMessage: e } = (0, _.A)(),
                        { wheel: t, sonataState: a } = (0, m.g)();
                    return (0, h.c)((i, l) => {
                        var n;
                        let o = ((e) => {
                            var t, a, i, l, n, o, s, r;
                            if (!e || 'object' != typeof e) return { type: v.b.EMPTY };
                            let c = e.sourceContext,
                                d = null != c ? c : e.context,
                                m = e.entity,
                                u = null == (t = d.data) ? void 0 : t.type,
                                _ = null == (i = d.data) || null == (a = i.meta) ? void 0 : a.id,
                                h = null == (n = m.data) || null == (l = n.meta) ? void 0 : l.id;
                            if (!u || void 0 === _) return { type: v.b.OTHER };
                            switch (u) {
                                case p.K.Album:
                                    return { type: v.b.ALBUM, data: { id: Number(_), trackData: { id: h, albumType: C(m) } } };
                                case p.K.Artist:
                                    return { type: v.b.ARTIST, data: { id: _.toString(), trackData: { id: h, albumType: C(m) } } };
                                case p.K.Playlist:
                                    return {
                                        type: v.b.PLAYLIST,
                                        data: {
                                            playlistUuid: String(null != (r = null == (s = d.data) || null == (o = s.meta) ? void 0 : o.playlistUuid) ? r : _),
                                            trackData: { id: h, albumType: C(m) },
                                        },
                                    };
                                case p.K.Vibe:
                                    return { type: v.b.WAVE, data: { seeds: String(_).split(',') } };
                                case p.K.Generative:
                                    return { type: v.b.GENERATIVE };
                                default:
                                    return { type: v.b.OTHER, data: { id: h, albumType: C(m) } };
                            }
                        })(i);
                        ((null == (n = a.entityMeta) ? void 0 : n.isTrackMusic) || l || !t.lastRequestId) && t.getData({ context: o, forceFetch: l }, e);
                    });
                };
            var I = a(4086),
                j = a(41928),
                y = a(9519),
                N = a(93609),
                E = a(74567),
                T = a(14841);
            let M = 'feedbacks';
            class g extends E.F {
                async addFeedback(e) {
                    let t = (0, T.q)(e);
                    return this.executeTransaction((a) => {
                        let i = a.transaction([M], 'readwrite').objectStore(M);
                        return i.get(t).then((a) => {
                            if (!a) return i.add({ ...e, uid: this.uid, feedbackKey: t });
                        });
                    })
                        .then(() => void 0)
                        .catch(N.A);
                }
                async getFeedbacks() {
                    return this.executeTransaction(
                        (e) =>
                            e
                                .getAllFromIndex(M, 'uid', this.uid)
                                .then((e) =>
                                    e
                                        .sort((e, t) => e.timestamp - t.timestamp)
                                        .reduce(
                                            (e, t) => (
                                                e.push({
                                                    feedbackKey: t.feedbackKey,
                                                    feedback: { wheelId: t.wheelId, timestamp: t.timestamp, eventType: t.eventType, item: t.item, position: t.position },
                                                }),
                                                e
                                            ),
                                            [],
                                        ),
                                )
                                .then((e) => e),
                        { defaultValue: [] },
                    ).catch(() => []);
                }
                async clearSentFeedbacks(e) {
                    return this.executeTransaction((t) => {
                        let a = t.transaction([M], 'readwrite').objectStore(M);
                        return Promise.all(e.map((e) => a.delete(e))).then(() => void 0);
                    }).catch(N.A);
                }
                constructor(e) {
                    (super({
                        dbName: 'music_wheel_feedbacks',
                        dbVersion: 1,
                        onUpgrade: (e) => {
                            e.createObjectStore(M, { keyPath: 'feedbackKey' }).createIndex('uid', 'uid', { unique: !1 });
                        },
                    }),
                        (0, y._)(this, 'uid', void 0),
                        (this.uid = e));
                }
            }
            var W = a(65724),
                f = a(61758),
                k = a(44361),
                L = a(49784),
                O = a(17392);
            let D = Math.PI / 2,
                A = (e) => {
                    let { translateXPx: t, opacity: a } = ((e) => {
                        let t = Math.abs(e) / 4,
                            a = Math.min(t / 2, 1),
                            i = 120 * (1 + Math.cos(((e) => (e <= 1 ? Math.PI - e * D : e <= 2 ? D - (e - 1) * D : 0))(t)));
                        return {
                            translateXPx: i,
                            opacity:
                                1 -
                                0.86 *
                                    ((e) => {
                                        let t = Math.min(Math.max(e, 0), 1);
                                        return t * t * (3 - 2 * t);
                                    })((a - 0.42) / 0.5800000000000001),
                        };
                    })(e);
                    return { transform: 'translate3d('.concat(t, 'px, 0, 0)'), opacity: a };
                },
                S = { slideLabelMessage: '', slideRole: 'listitem' },
                w = { forceToAxis: !0, sensitivity: 0.3 },
                P = function (e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = Math.abs(e - t);
                    return i ? Math.min(l, a - l) : l;
                };
            var V = a(4284),
                U = a.n(V),
                R = a(7833),
                B = a(75177),
                F = a(22786),
                H = a(64543),
                $ = a(33979),
                K = a(62414),
                Y = a(29504),
                z = a(60757),
                q = a(29008),
                X = a(54152),
                G = a(5407),
                J = a(84384),
                Q = a(39079),
                Z = a(33355),
                ee = a(62270),
                et = a.n(ee),
                ea = a(90224),
                ei = a(8990),
                el = a(39267),
                en = a(54488),
                eo = a(97956),
                es = a(90420);
            let er = (e) => {
                    if (e.isDisabled || e.style === F.y.MULTIVIBE || e.style === F.y.CONTROL || e.style === F.y.CONTROL_ACCENT) return !1;
                    switch (e.type) {
                        case B.D.WAVE:
                            return e.data.stationType !== es.q7 && e.data.isLikeEnabled;
                        case B.D.ALBUM:
                            return e.data.isAvailable;
                        case B.D.NON_MUSIC:
                            return e.data.album.isAvailable;
                        default:
                            return !1;
                    }
                },
                ec = (e) => {
                    let { item: t, ref: a } = e,
                        { experiments: i, settings: l, wheel: n, user: s } = (0, m.g)(),
                        r = (0, k.Mn)(),
                        [c, d] = (0, o.useState)(!1),
                        u = i.checkExperiment(eo.z.WebNextWaveLikesAndShares, 'on') && !n.isShimmerVisible && er(t),
                        _ = u && (!l.isMobile || s.isAuthorized),
                        p = (0, h.c)(() => {
                            _ && (r && 'allowClick' in r && (r.allowClick = !1), d(!0));
                        }),
                        { ref: b, reset: v } = (0, en.H)({ ref: a, disabled: !_ || !l.isMobile, allowMouse: !1, onLongPress: p }),
                        C = (0, h.c)((e) => {
                            (d(e && _), e || v());
                        });
                    return (
                        (0, o.useEffect)(() => {
                            _ || (d(!1), v());
                        }, [_, v]),
                        { ref: b, isEnabled: u, isOpened: c && _, isTouch: l.isMobile, onOpenChange: C }
                    );
                };
            var ed = a(29832),
                em = a(52300),
                eu = a(19934),
                e_ = a(1570),
                eh = a.n(e_),
                ep = a(68974),
                eb = a(38035),
                ev = a(2147),
                eC = a(21869),
                ex = a(64546);
            let eI = (0, n.PA)((e) => {
                    let { item: t } = e,
                        a = (0, ev.K)(t.type === B.D.WAVE ? t.data : void 0);
                    switch (t.type) {
                        case B.D.WAVE:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ex.WithOffline, {
                                        fallback: (0, i.jsx)(eC.S, { vibe: t.data, onLikeClick: a, className: eh().item, iconClassName: eh().itemIcon }),
                                    }),
                                    (0, i.jsx)(ep.u, { vibe: t.data, className: eh().item, iconClassName: eh().itemIcon }),
                                ],
                            });
                        case B.D.ALBUM:
                            return (0, i.jsx)(eb.z, {
                                album: t.data,
                                className: eh().item,
                                iconClassName: eh().itemIcon,
                                shareMenuClassName: eh().submenu,
                                artistName: t.data.artistName,
                                artistId: t.data.artistId,
                            });
                        case B.D.NON_MUSIC:
                            return (0, i.jsx)(eb.z, {
                                album: t.data.album,
                                className: eh().item,
                                iconClassName: eh().itemIcon,
                                shareMenuClassName: eh().submenu,
                                artistName: t.data.album.artistName,
                                artistId: t.data.album.artistId,
                            });
                        default:
                            return null;
                    }
                }),
                ej = (0, n.PA)((e) => {
                    let { item: t, isOpened: a, onOpenChange: l, isTouch: n, className: o } = e,
                        { formatMessage: s } = (0, _.A)(),
                        r = (0, h.c)((e) => {
                            e.stopPropagation();
                        }),
                        d = t.type === B.D.NON_MUSIC ? t.data.album.title : t.data.title,
                        m = ''.concat(d, ': ').concat(s({ id: 'interface-actions.context-menu' })),
                        u = (0, c.L)(() =>
                            (0, i.jsx)(eu.W1, {
                                className: (0, W.$)(eh().trigger, { [eh().trigger_touch]: n }),
                                icon: n ? null : (0, i.jsx)(em.I, { className: eh().triggerIcon, variant: 'more', size: 'xxs', 'aria-hidden': !0 }),
                                size: 'xxxs',
                                radius: 'round',
                                variant: 'default',
                                ariaLabel: m,
                                open: a,
                                onOpenChange: l,
                                isMobile: !1,
                                disabled: n,
                                'aria-hidden': n || void 0,
                                tabIndex: n ? -1 : void 0,
                                placement: n ? 'top' : 'bottom',
                                offsetOptions: 4,
                                transition: n ? { duration: 0 } : void 0,
                                returnFocus: !n,
                                wrapperClassName: n ? eh().touchAnchor : void 0,
                                menuClassName: eh().menu,
                                submenuProps: n ? { 'aria-label': m, 'aria-labelledby': void 0 } : void 0,
                                containerDataTestId: O.e8.wheel.WHEEL_ITEM_CONTEXT_MENU,
                                'data-test-id': O.e8.wheel.WHEEL_ITEM_CONTEXT_MENU_BUTTON,
                                children: (0, i.jsx)(eI, { item: t }),
                            }),
                        );
                    return er(t)
                        ? (0, i.jsx)('div', {
                              className: (0, W.$)(eh().root, o, { [eh().root_open]: a, [eh().root_touch]: n }),
                              onClick: r,
                              onPointerDown: r,
                              onTouchStart: r,
                              onTouchMove: r,
                              onWheel: r,
                              children: n ? u : (0, i.jsx)(ed.hg, { className: eh().controls, bottomContainerClassName: eh().bottom, menuControl: u, isVisible: !0 }),
                          })
                        : null;
                });
            var ey = a(4803),
                eN = a.n(ey);
            let eE = (0, n.PA)((e) => {
                    let { item: t, shouldPlayOnClick: a = !0 } = e,
                        { screen: l } = (0, H.j)(),
                        { openIntroModalFromPlay: n } = (0, Z.e)(),
                        s = (0, q.r)(t.data.type),
                        r = ''.concat(s, ' ').concat(t.data.title),
                        { from: d } = (0, J.f)({ pageId: null == l ? void 0 : l.pageIdForFrom }),
                        m = (0, G.P)(),
                        u = (0, $.g)(),
                        _ = (0, h.c)((e) => {
                            e && // for PulseSync: BEGIN ignore feedback on disposed wheel models
((0, pulseSyncMst._n)(t) && t.handleFeedbackView())
// for PulseSync: END ignore feedback on disposed wheel models
;
                        }),
                        b = ec({ item: t, ref: (0, K.D)({ onVisibilityChange: _ }) }),
                        v = (0, c.L)(() =>
                            b.isEnabled
                                ? (0, i.jsx)(ej, { item: t, isOpened: b.isOpened, onOpenChange: b.onOpenChange, isTouch: b.isTouch, className: eN().menuControl })
                                : null,
                        ),
                        {
                            isPlaying: C,
                            isCurrent: x,
                            togglePlay: I,
                        } = (0, Q.D)({ playContextParams: { contextData: { type: p.K.Album, meta: { id: t.data.id }, from: d }, loadContextMeta: !0 } }),
                        j = (0, h.c)(() => {
                            (I(), C || u());
                        }),
                        y = (0, z.c)({ album: t.data, callback: j }),
                        N = (0, h.c)(() => {
                            !(!a || m()) && (n() || (y(), t.handleFeedbackClick()));
                        }),
                        E = (0, o.useCallback)(
                            (e) =>
                                (0, i.jsx)('div', {
                                    className: eN().coverContainer,
                                    children: (0, i.jsx)(el.q, {
                                        isAvailable: t.data.isAvailable,
                                        isDisliked: !1,
                                        coverUri: t.data.coverUri,
                                        title: t.data.title,
                                        className: (0, W.$)(et().playButtonCell, eN().cover, eN().important),
                                        coverClassName: eN().innerCover,
                                        alt: r,
                                        radius: 'xs',
                                        playButtonIconSize: 'l',
                                        fallbackIconSize: 'm',
                                        ...e,
                                    }),
                                }),
                            [t.data.isAvailable, t.data.coverUri, t.data.title, r],
                        ),
                        T = null == E ? void 0 : E({ onPlayButtonClick: N, isPlaying: C, isCurrent: x }),
                        M = (0, c.L)(() =>
                            t.description
                                ? (0, i.jsx)(Y.HL, {
                                      className: eN().description,
                                      variant: 'span',
                                      lineClamp: 1,
                                      'data-test-id': O.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                      children: t.description,
                                  })
                                : null,
                        ),
                        g = (0, c.L)(() => {
                            var e;
                            return (null == (e = t.data.artists) ? void 0 : e.length) ? ''.concat((0, X.X)(t.data.artists), ' — ').concat(t.data.title) : t.data.title;
                        });
                    return (0, i.jsxs)(ei.C, {
                        ref: b.ref,
                        className: (0, W.$)(et().root, eN().root, eN().important, {
                            [eN().root_withMenu]: b.isEnabled,
                            [eN().root_withDesktopMenu]: b.isEnabled && !b.isTouch,
                            [eN().root_menuOpened]: b.isOpened,
                        }),
                        'aria-label': r,
                        onClick: N,
                        'data-test-id': O.e8.wheel.WHEEL_ALBUM_ITEM,
                        children: [
                            T,
                            (0, i.jsxs)('div', {
                                className: eN().entityMeta,
                                children: [
                                    M,
                                    (0, i.jsxs)('div', {
                                        className: eN().titleContainer,
                                        children: [
                                            (0, i.jsx)(Y.HL, {
                                                className: eN().title,
                                                variant: 'span',
                                                lineClamp: t.description ? 3 : 4,
                                                'data-test-id': O.e8.wheel.WHEEL_ITEM_TITLE,
                                                children: g,
                                            }),
                                            t.data.explicitDisclaimer &&
                                                (0, i.jsx)(ea.N, {
                                                    className: eN().explicitMark,
                                                    containerClassName: eN().explicitMarkContainer,
                                                    getDescriptionTexts: t.data.getDescriptionTexts,
                                                    variant: t.data.explicitDisclaimer,
                                                }),
                                            v,
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                eT = (0, n.PA)((e) => {
                    let { item: t, shouldPlayOnClick: a = !0 } = e,
                        { album: l, resumeFrom: n } = t.data,
                        { trackId: o, startPositionSec: s } = n,
                        r = (0, d.e)(),
                        { screen: m } = (0, H.j)(),
                        { openIntroModalFromPlay: u } = (0, Z.e)(),
                        { from: _ } = (0, J.f)({ pageId: null == m ? void 0 : m.pageIdForFrom }),
                        b = (0, q.r)(l.type),
                        v = (0, G.P)(),
                        C = (0, $.g)(),
                        I = x(),
                        j = ''.concat(b, ' ').concat(l.title),
                        y = (0, h.c)((e) => {
                            e && // for PulseSync: BEGIN ignore feedback on disposed wheel models
((0, pulseSyncMst._n)(t) && t.handleFeedbackView())
// for PulseSync: END ignore feedback on disposed wheel models
;
                        }),
                        N = ec({ item: t, ref: (0, K.D)({ onVisibilityChange: y }) }),
                        E = (0, c.L)(() =>
                            N.isEnabled
                                ? (0, i.jsx)(ej, { item: t, isOpened: N.isOpened, onOpenChange: N.onOpenChange, isTouch: N.isTouch, className: eN().menuControl })
                                : null,
                        ),
                        {
                            isPlaying: T,
                            isCurrent: M,
                            togglePlay: g,
                        } = (0, Q.D)({
                            playContextParams: { contextData: { type: p.K.Album, meta: { id: l.id }, from: _ }, loadContextMeta: !0, queueParams: { entityId: o } },
                            entityId: ''.concat(o, ':').concat(l.id),
                        }),
                        f = (0, h.c)(async () => {
                            if ((await g(), M || !r)) return;
                            await r.setProgress(s);
                            let e = r.state.queueState.currentEntity.value;
                            e && I(e, !0);
                        }),
                        k = (0, z.c)({ album: l, callback: f }),
                        L = (0, h.c)(() => {
                            !(!a || v()) && (u() || (k(), T || C(), t.handleFeedbackClick()));
                        }),
                        D = (0, c.L)(() =>
                            t.description
                                ? (0, i.jsx)(Y.HL, {
                                      className: eN().description,
                                      variant: 'span',
                                      lineClamp: 1,
                                      'data-test-id': O.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                      children: t.description,
                                  })
                                : null,
                        );
                    return (0, i.jsxs)(ei.C, {
                        ref: N.ref,
                        className: (0, W.$)(et().root, eN().root, eN().important, {
                            [eN().root_withMenu]: N.isEnabled,
                            [eN().root_withDesktopMenu]: N.isEnabled && !N.isTouch,
                            [eN().root_menuOpened]: N.isOpened,
                        }),
                        'aria-label': j,
                        onClick: L,
                        'data-test-id': O.e8.wheel.WHEEL_NON_MUSIC_ITEM,
                        children: [
                            (0, i.jsx)('div', {
                                className: eN().coverContainer,
                                children: (0, i.jsx)(el.q, {
                                    isAvailable: l.isAvailable,
                                    isDisliked: !1,
                                    coverUri: l.coverUri,
                                    title: l.title,
                                    className: (0, W.$)(et().playButtonCell, eN().cover, eN().important),
                                    coverClassName: eN().innerCover,
                                    alt: j,
                                    radius: 'xs',
                                    playButtonIconSize: 'l',
                                    fallbackIconSize: 'm',
                                    onPlayButtonClick: L,
                                    isPlaying: T,
                                    isCurrent: M,
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: eN().entityMeta,
                                children: [
                                    D,
                                    (0, i.jsxs)('div', {
                                        className: eN().titleContainer,
                                        children: [
                                            (0, i.jsx)(Y.HL, {
                                                className: eN().title,
                                                variant: 'span',
                                                lineClamp: t.description ? 3 : 4,
                                                'data-test-id': O.e8.wheel.WHEEL_ITEM_TITLE,
                                                children: l.title,
                                            }),
                                            l.explicitDisclaimer &&
                                                (0, i.jsx)(ea.N, {
                                                    className: eN().explicitMark,
                                                    containerClassName: eN().explicitMarkContainer,
                                                    getDescriptionTexts: l.getDescriptionTexts,
                                                    variant: l.explicitDisclaimer,
                                                }),
                                            E,
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var eM = a(80643),
                eg = a(4370),
                eW = a(78940),
                ef = a(49176),
                ek = a(81877);
            let eL = (0, n.PA)((e) => {
                var t, a;
                let { item: l, shouldNavigateOnClick: n = !0 } = e,
                    o = (0, eM.S)(),
                    { multivibe: r } = (0, m.g)(),
                    d = (0, h.c)((e) => {
                        e && // for PulseSync: BEGIN ignore feedback on disposed wheel models
((0, pulseSyncMst._n)(l) && l.handleFeedbackView())
// for PulseSync: END ignore feedback on disposed wheel models
;
                    }),
                    u = l.data.url === eg.Z.multivibe.href,
                    _ = (0, K.D)({ onVisibilityChange: d }),
                    p = (0, eW.Z)(null != (t = l.data.url) ? t : ''),
                    b = (0, c.L)(() =>
                        l.description
                            ? (0, i.jsx)(Y.HL, {
                                  className: eN().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  'data-test-id': O.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                  children: l.description,
                              })
                            : null,
                    ),
                    v = (0, h.c)((e) => {
                        var t;
                        n && (u ? r.promoModal.open() : p(e), o({ to: s.AppScreen.Link, deepLink: null != (t = l.data.url) ? t : void 0 }), l.handleFeedbackClick());
                    }),
                    C = (0, h.c)((e) => {
                        (e.code === ef.v.SPACE || e.code === ef.v.ENTER) && (e.preventDefault(), v());
                    });
                return (0, i.jsxs)(ei.C, {
                    ref: _,
                    className: (0, W.$)(et().root, eN().root, eN().important),
                    'aria-label': ''.concat(l.data.title, ' ').concat(null != (a = l.description) ? a : ''),
                    role: 'link',
                    tabIndex: 0,
                    onClick: v,
                    onKeyDown: C,
                    'data-test-id': O.e8.wheel.WHEEL_PROMO_ITEM,
                    children: [
                        (0, i.jsx)('div', {
                            className: eN().coverContainer,
                            children: (0, i.jsx)(ek.B, {
                                className: (0, W.$)(eN().cover, eN().important),
                                src: l.data.cover.uri,
                                size: 100,
                                alt: l.data.title,
                                fit: 'cover',
                                withAvatarReplace: !0,
                                fallbackIconSize: 'm',
                                withLoadingIndicator: !1,
                            }),
                        }),
                        (0, i.jsxs)('div', {
                            className: eN().entityMeta,
                            children: [
                                b,
                                (0, i.jsxs)('div', {
                                    className: eN().titleContainer,
                                    children: [
                                        (0, i.jsx)(Y.HL, {
                                            className: eN().title,
                                            variant: 'span',
                                            lineClamp: l.description ? 3 : 4,
                                            'data-test-id': O.e8.wheel.WHEEL_ITEM_TITLE,
                                            children: l.data.title,
                                        }),
                                        (0, i.jsx)(em.I, { className: eN().icon, variant: 'link_rounded', size: 'xxs' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            });
            var eO = a(64284),
                eD = a(47964),
                eA = a(52726);
            let eS = (0, n.PA)((e) => {
                    let { item: t, shouldPlayOnClick: a = !0 } = e,
                        { screen: l } = (0, H.j)(),
                        n = null == l ? void 0 : l.pageIdForFrom,
                        { openIntroModalFromPlay: s } = (0, Z.e)(),
                        r = (0, G.P)(),
                        { freeAccess: c } = (0, m.g)(),
                        [u, _] = (0, o.useState)(!1),
                        p = (0, $.g)(),
                        b = (0, d.e)(),
                        v = x(),
                        C = (0, h.c)((e) => {
                            e && // for PulseSync: BEGIN ignore feedback on disposed wheel models
((0, pulseSyncMst._n)(t) && t.handleFeedbackView())
// for PulseSync: END ignore feedback on disposed wheel models
;
                        }),
                        I = (0, K.D)({ onVisibilityChange: C }),
                        { resetContext: j } = (0, eD.B)({ seeds: t.data.seeds, pageIdForFrom: n, blockIdForFrom: ''.concat(eO.U.RADIO, '-').concat(eO.U.WHEEL) }),
                        y = (0, h.c)(() => {
                            var e;
                            if (!(!a || r())) {
                                if (c.isFreeWebUser) return void _(!0);
                                s() ||
                                    (j(t.data.seeds),
                                    t.data.seeds.includes(es.yx) &&
                                        String(null == b || null == (e = b.state.queueState.currentEntity.value) ? void 0 : e.context.data.meta.id).includes(es.yx) &&
                                        v(null == b ? void 0 : b.state.queueState.currentEntity.value, !0),
                                    p(),
                                    t.handleFeedbackClick());
                            }
                        }),
                        N = (0, o.useCallback)(
                            () =>
                                t.data.agent
                                    ? (0, i.jsx)('div', {
                                          className: (0, W.$)(eN().coverContainer, eN().coverContainer_iconCover),
                                          children: (0, i.jsx)(ek.B, {
                                              className: (0, W.$)(eN().cover, eN().important),
                                              src: t.data.agent.cover.uri,
                                              size: 100,
                                              alt: t.data.title,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              fallbackIconSize: 'm',
                                              withLoadingIndicator: !1,
                                          }),
                                      })
                                    : null,
                            [t.data.agent, t.data.title],
                        ),
                        E = (0, h.c)((e) => {
                            (e.code === ef.v.SPACE || e.code === ef.v.ENTER) && (e.preventDefault(), y());
                        });
                    return (0, i.jsxs)(ei.C, {
                        ref: I,
                        className: (0, W.$)(et().root, eN().root, eN().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: y,
                        onKeyDown: E,
                        'data-test-id': O.e8.wheel.WHEEL_RESHUFFLE_ITEM,
                        children: [
                            (0, i.jsx)(eA.S, {
                                isOpened: u,
                                onOpenChange: _,
                                isEnabled: c.isFreeWebUser,
                                placement: 'bottom',
                                textVariant: 'vibe',
                                vibeTextVariant: t.data.stationType,
                                renderChildren: N,
                            }),
                            (0, i.jsx)('div', {
                                className: eN().entityMeta,
                                children: (0, i.jsx)('div', {
                                    className: eN().titleContainer,
                                    children: (0, i.jsx)(Y.HL, {
                                        className: (0, W.$)(eN().title, eN().title_accentColor),
                                        variant: 'span',
                                        lineClamp: 4,
                                        'data-test-id': O.e8.wheel.WHEEL_ITEM_TITLE,
                                        children: t.data.title,
                                    }),
                                }),
                            }),
                        ],
                    });
                }),
                ew = (0, n.PA)((e) => {
                    let { item: t, shouldActionOnClick: a = !0 } = e,
                        { vibeSettings: l, freeAccess: n } = (0, m.g)(),
                        [r, c] = (0, o.useState)(!1),
                        d = (0, eM.S)(),
                        u = (0, h.c)((e) => {
                            e && // for PulseSync: BEGIN ignore feedback on disposed wheel models
((0, pulseSyncMst._n)(t) && t.handleFeedbackView())
// for PulseSync: END ignore feedback on disposed wheel models
;
                        }),
                        _ = (0, K.D)({ onVisibilityChange: u }),
                        p = (0, h.c)(() => {
                            if (a) {
                                if ((t.handleFeedbackClick(), n.isFreeWebUser)) return void c(!0);
                                (l.modal.open(), d({ to: s.AppScreen.MyWaweSettingsScreen }));
                            }
                        }),
                        b = (0, h.c)((e) => {
                            (e.code === ef.v.SPACE || e.code === ef.v.ENTER) && (e.preventDefault(), p());
                        }),
                        v = (0, o.useCallback)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: (0, W.$)(eN().coverContainer, eN().coverContainer_iconCover),
                                    children: (0, i.jsx)(ek.B, {
                                        className: (0, W.$)(eN().cover, eN().important),
                                        src: t.data.cover.uri,
                                        size: 100,
                                        alt: t.data.title,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        fallbackIconSize: 'm',
                                        withLoadingIndicator: !1,
                                    }),
                                }),
                            [t.data.cover.uri, t.data.title],
                        );
                    return (0, i.jsxs)(ei.C, {
                        ref: _,
                        className: (0, W.$)(et().root, eN().root, eN().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: p,
                        onKeyDown: b,
                        'data-test-id': O.e8.wheel.WHEEL_SETTING_ITEM,
                        children: [
                            (0, i.jsx)(eA.S, { isOpened: r, onOpenChange: c, isEnabled: n.isFreeWebUser, placement: 'bottom', textVariant: 'vibe', renderChildren: v }),
                            (0, i.jsx)('div', {
                                className: eN().entityMeta,
                                children: (0, i.jsx)('div', {
                                    className: eN().titleContainer,
                                    children: (0, i.jsx)(Y.HL, {
                                        className: eN().title,
                                        variant: 'span',
                                        lineClamp: 4,
                                        'data-test-id': O.e8.wheel.WHEEL_ITEM_TITLE,
                                        children: t.data.title,
                                    }),
                                }),
                            }),
                        ],
                    });
                });
            var eP = a(55211);
            let eV = (0, n.PA)((e) => {
                var t;
                let { item: a, shouldPlayOnClick: l = !0 } = e,
                    { screen: n } = (0, H.j)(),
                    s = null == n ? void 0 : n.pageIdForFrom,
                    { openIntroModalFromPlay: r } = (0, Z.e)(),
                    d = (0, G.P)(),
                    { freeAccess: u } = (0, m.g)(),
                    [_, p] = (0, o.useState)(!1),
                    b = (0, $.g)(),
                    v = (0, h.c)((e) => {
                        e && // for PulseSync: BEGIN ignore feedback on disposed wheel models
((0, pulseSyncMst._n)(a) && a.handleFeedbackView())
// for PulseSync: END ignore feedback on disposed wheel models
;
                    }),
                    C = ec({ item: a, ref: (0, K.D)({ onVisibilityChange: v }) }),
                    x = (0, c.L)(() =>
                        C.isEnabled
                            ? (0, i.jsx)(ej, { item: a, isOpened: C.isOpened, onOpenChange: C.onOpenChange, isTouch: C.isTouch, className: eN().menuControl })
                            : null,
                    ),
                    {
                        isPlaying: I,
                        togglePlay: j,
                        isCurrent: y,
                    } = (0, eD.B)({ seeds: a.data.seeds, pageIdForFrom: s, blockIdForFrom: ''.concat(eO.U.RADIO, '-').concat(eO.U.WHEEL) }),
                    N = (0, h.c)(() => {
                        if (!(!l || d())) {
                            if (u.isVibeStartRestricted) return void p(!0);
                            r() || (j(), I || b(), a.handleFeedbackClick());
                        }
                    }),
                    E = a.style === F.y.MULTIVIBE,
                    T = (0, o.useCallback)(
                        () =>
                            a.data.agent
                                ? (0, i.jsx)('div', {
                                      className: (0, W.$)(eN().coverContainer, { [eN().multivibeContainer]: E }),
                                      children: (0, i.jsx)(eP.n, {
                                          alt: ''.concat(a.data.description, ' ').concat(a.data.title),
                                          agent: a.data.agent,
                                          isPlaying: I,
                                          isCurrent: y,
                                          onPlayButtonClick: N,
                                          className: (0, W.$)(et().playButtonCell, eN().cover, eN().important),
                                          playButtonIconSize: E ? 'm' : 'l',
                                          fallbackIconSize: E ? 'xs' : 'm',
                                          coverClassName: (0, W.$)({ [eN().multivibeCover]: E }),
                                          entityCoverClassName: (0, W.$)({ [eN().multivibeAvatar]: E }),
                                          controlClassName: (0, W.$)({ [eN().multivibeControl]: E }),
                                      }),
                                  })
                                : null,
                        [a.data.agent, a.data.description, a.data.title, I, y, N, E],
                    ),
                    M = (0, c.L)(() =>
                        a.description
                            ? (0, i.jsx)(Y.HL, {
                                  className: eN().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  'data-test-id': O.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                  children: a.description,
                              })
                            : null,
                    );
                return (0, i.jsxs)(ei.C, {
                    ref: C.ref,
                    className: (0, W.$)(et().root, eN().root, eN().important, {
                        [eN().root_withMenu]: C.isEnabled,
                        [eN().root_withDesktopMenu]: C.isEnabled && !C.isTouch,
                        [eN().root_menuOpened]: C.isOpened,
                    }),
                    'aria-label': ''.concat(null != (t = a.data.description) ? t : '', ' ').concat(a.data.title),
                    onClick: N,
                    'data-test-id': O.e8.wheel.WHEEL_VIBE_ITEM,
                    children: [
                        (0, i.jsx)(eA.S, {
                            isOpened: _,
                            onOpenChange: p,
                            isEnabled: u.isVibeStartRestricted,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: a.data.stationType,
                            renderChildren: T,
                        }),
                        (0, i.jsxs)('div', {
                            className: eN().entityMeta,
                            children: [
                                M,
                                (0, i.jsxs)('div', {
                                    className: eN().titleContainer,
                                    children: [
                                        (0, i.jsx)(Y.HL, {
                                            className: eN().title,
                                            variant: 'span',
                                            lineClamp: a.description ? 3 : 4,
                                            'data-test-id': O.e8.wheel.WHEEL_ITEM_TITLE,
                                            children: a.data.title,
                                        }),
                                        x,
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            });
            var eU = a(19994),
                eR = a(21750),
                eB = a.n(eR);
            let eF = (e) => {
                let { isShimmerActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: eB().root,
                    children: [
                        (0, i.jsx)('div', { className: eB().coverContainer, children: (0, i.jsx)(eU.W, { isActive: t, className: eB().cover, radius: 'xs' }) }),
                        (0, i.jsxs)('div', {
                            className: eB().meta,
                            children: [
                                (0, i.jsx)(eU.W, { isActive: t, className: eB().title, radius: 's' }),
                                (0, i.jsx)(eU.W, { isActive: t, className: eB().subtitle, radius: 's' }),
                            ],
                        }),
                    ],
                });
            };
            var eH = a(12040),
                e$ = a.n(eH);
            let eK = (0, n.PA)((e) => {
                    let { item: t, shouldActionOnClick: a, originalIndex: l, isShimmerVisible: n } = e,
                        o = (0, c.L)(() => {
                            switch (t.type) {
                                case B.D.WAVE:
                                    if (t.style === F.y.CONTROL_ACCENT)
                                        return (0, i.jsx)(R.B, {
                                            objectId: t.id,
                                            objectType: s.DomainObjectType.Wave,
                                            objectPosX: 1,
                                            objectPosY: l + 1,
                                            children: (0, i.jsx)(eS, { item: t, shouldPlayOnClick: a }),
                                        });
                                    return (0, i.jsx)(R.B, {
                                        objectId: t.id,
                                        objectType: s.DomainObjectType.Wave,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        children: (0, i.jsx)(eV, { item: t, shouldPlayOnClick: a }),
                                    });
                                case B.D.ALBUM:
                                    return (0, i.jsx)(R.B, {
                                        objectId: t.id,
                                        objectType: s.DomainObjectType.Album,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        children: (0, i.jsx)(eE, { item: t, shouldPlayOnClick: a }),
                                    });
                                case B.D.NON_MUSIC:
                                    return (0, i.jsx)(R.B, {
                                        objectId: t.id,
                                        objectType: t.data.album.mainObjectType,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        children: (0, i.jsx)(eT, { item: t, shouldPlayOnClick: a }),
                                    });
                                case B.D.PROMO_LINK:
                                    return (0, i.jsx)(R.B, {
                                        objectId: t.id,
                                        objectType: s.DomainObjectType.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        children: (0, i.jsx)(eL, { item: t, shouldNavigateOnClick: a }),
                                    });
                                case B.D.SETTING:
                                    return (0, i.jsx)(R.B, {
                                        objectId: t.id,
                                        objectType: s.DomainObjectType.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        children: (0, i.jsx)(ew, { item: t, shouldActionOnClick: a }),
                                    });
                            }
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, W.$)(e$().root, { [e$().root_disabled]: t.isDisabled }),
                        children: [
                            (0, i.jsx)('div', { className: (0, W.$)(e$().element, { [e$().element_hidden]: n }), children: o }),
                            (0, i.jsx)('div', {
                                className: (0, W.$)(e$().shimmer, { [e$().shimmer_visible]: n }),
                                children: n && (0, i.jsx)(eF, { isShimmerActive: !0 }),
                            }),
                        ],
                    });
                }),
                eY = Math.floor(4.5),
                ez = (e) => {
                    let { className: t } = e;
                    return (0, i.jsx)('div', {
                        className: (0, W.$)(U().root, t),
                        children: (0, i.jsx)('div', {
                            className: U().wrapper,
                            children: Array.from({ length: 9 }, (e, t) =>
                                (0, i.jsx)('div', { className: U().slide, style: A(t - eY), children: (0, i.jsx)(eF, { isShimmerActive: !0 }) }, t),
                            ),
                        }),
                    });
                },
                eq = (e) => {
                    e.slides.forEach((e) => {
                        let t = e.progress;
                        Number.isFinite(t) &&
                            ((e, t) => {
                                let { transform: a, opacity: i } = A(t);
                                ((e.style.transform = String(a)), (e.style.opacity = String(i)));
                            })(e, t);
                    });
                },
                eX = (0, n.PA)((e) => {
                    let { className: t, items: a, isShimmerVisible: l } = e,
                        {
                            wheel: { activeIndex: n, setActiveIndex: s, isEmpty: r },
                        } = (0, m.g)(),
                        { formatMessage: c } = (0, _.A)(),
                        d = (0, o.useRef)(null);
                    (0, L.W)({ enabled: !l });
                    let [u, p] = (0, o.useState)(9),
                        b = ((e) => (0 === e.length ? e : Array.from({ length: Math.ceil(22 / e.length) }, () => e).flat()))(a);
                    (0, o.useEffect)(() => {
                        let e = d.current;
                        e && 0 !== a.length && e.realIndex !== n && (e.slideToLoop(n, 0), eq(e));
                    }, [n, a.length]);
                    let v = (0, h.c)((e) => {
                            s(e.realIndex);
                        }),
                        C = (0, h.c)((e) => {
                            p(Math.max(4, Math.min(9, Math.floor(e.wrapperEl.clientHeight / 106))));
                        }),
                        x = (0, h.c)((e) => {
                            ((d.current = e), eq(e));
                        }),
                        I = (0, h.c)((e) => {
                            eq(e);
                        }),
                        j = (0, h.c)((e) => {
                            (e.el.classList.remove(U().root_transitioning), s(e.realIndex), eq(e));
                        }),
                        y = (0, h.c)((e) => {
                            e.el.classList.add(U().root_transitioning);
                        }),
                        N = (0, h.c)((e, t) => (a) => {
                            e >= 3 && d.current && (a.stopPropagation(), d.current.slideToLoop(t));
                        });
                    return l && r
                        ? (0, i.jsx)(ez, { className: t })
                        : (0, i.jsx)(k.RC, {
                              direction: 'vertical',
                              centeredSlides: !0,
                              loop: !0,
                              loopAdditionalSlides: u,
                              slidesPerView: u,
                              initialSlide: n,
                              allowTouchMove: !1,
                              watchSlidesProgress: !0,
                              modules: [f.Jq, f.FJ, f.U1],
                              a11y: S,
                              freeMode: !0,
                              mousewheel: w,
                              className: (0, W.$)(U().root, t),
                              wrapperClass: U().wrapper,
                              onSwiper: x,
                              onResize: C,
                              onRealIndexChange: v,
                              onSlideChangeTransitionStart: y,
                              onTransitionEnd: j,
                              onProgress: I,
                              tag: 'section',
                              role: 'region',
                              'aria-label': c({ id: 'a11y-regions.wheel' }),
                              'data-test-id': O.e8.wheel.WHEEL_DESKTOP,
                              children: b.map((e, t) => {
                                  let o = P(t, n, b.length),
                                      s = N(o, t);
                                  return (0, i.jsx)(
                                      k.qr,
                                      {
                                          className: U().slide,
                                          'data-test-id': O.e8.wheel.WHEEL_DESKTOP_SLIDE,
                                          inert: e.isDisabled,
                                          onClickCapture: s,
                                          children: (0, i.jsx)(eK, {
                                              item: e,
                                              shouldActionOnClick: o < 3,
                                              originalIndex: t % a.length,
                                              objectsCount: a.length,
                                              isShimmerVisible: l,
                                          }),
                                      },
                                      e.data.getKey(t),
                                  );
                              }),
                          });
                }),
                eG = function (e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = e - t;
                    return i && Math.abs(l) > a / 2 ? (l < 0 ? 'below' : 'above') : l < 0 ? 'above' : 'below';
                };
            var eJ = a(91796),
                eQ = a.n(eJ),
                eZ = a(57496),
                e0 = a(35412);
            let e1 = [
                { position: 7, opacity: 1 },
                { position: 12, opacity: 0.92 },
                { position: 16, opacity: 0.85 },
                { position: 20, opacity: 0.78 },
                { position: 23, opacity: 0.72 },
                { position: 26, opacity: 0.65 },
                { position: 29, opacity: 0.59 },
                { position: 31, opacity: 0.53 },
                { position: 33, opacity: 0.47 },
                { position: 35, opacity: 0.41 },
                { position: 37, opacity: 0.35 },
                { position: 39, opacity: 0.28 },
                { position: 42, opacity: 0.22 },
                { position: 45, opacity: 0.15 },
                { position: 48, opacity: 0.08 },
                { position: 52, opacity: 0 },
            ];
            var e2 = a(28610),
                e4 = a.n(e2);
            let e8 = (e) => {
                let { color: t } = e;
                return (0, i.jsx)('div', {
                    className: e4().root,
                    style: ((e) => {
                        let { h: t, s: a } = (0, e0.g8)(e),
                            { r: i, g: l, b: n } = (0, e0.E2)(e),
                            o = e1
                                .map((e) => {
                                    let { position: t, opacity: a } = e,
                                        o = Math.round(i * a),
                                        s = Math.round(l * a),
                                        r = Math.round(n * a);
                                    return 'rgba('.concat(o, ', ').concat(s, ', ').concat(r, ', ').concat(a, ') ').concat(t, '%');
                                })
                                .join(', ');
                        return {
                            '--petal-fill-gradient': 'linear-gradient(213deg, '.concat(o, ')'),
                            '--petal-stroke-color': 'hsl('.concat(t, ', ').concat(a, '%, 80%)'),
                        };
                    })(t),
                });
            };
            var e3 = a(73602),
                e9 = a.n(e3);
            let e7 = [F.y.PROMO, F.y.MULTIVIBE],
                e6 = [F.y.CONTROL, F.y.CONTROL_ACCENT],
                e5 = (0, n.PA)((e) => {
                    let { item: t, originalIndex: a } = e,
                        l = (0, c.L)(() => {
                            switch (t.type) {
                                case B.D.WAVE:
                                    if (t.style === F.y.CONTROL_ACCENT)
                                        return (0, i.jsx)(R.B, {
                                            objectId: t.id,
                                            objectType: s.DomainObjectType.Wave,
                                            objectPosX: a + 1,
                                            objectPosY: 1,
                                            children: (0, i.jsx)(eS, { item: t }),
                                        });
                                    return (0, i.jsx)(R.B, {
                                        objectId: t.id,
                                        objectType: s.DomainObjectType.Wave,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        children: (0, i.jsx)(eV, { item: t }),
                                    });
                                case B.D.ALBUM:
                                    return (0, i.jsx)(R.B, {
                                        objectId: t.id,
                                        objectType: s.DomainObjectType.Album,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        children: (0, i.jsx)(eE, { item: t }),
                                    });
                                case B.D.NON_MUSIC:
                                    return (0, i.jsx)(R.B, {
                                        objectId: t.id,
                                        objectType: t.data.album.mainObjectType,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        children: (0, i.jsx)(eT, { item: t }),
                                    });
                                case B.D.PROMO_LINK:
                                    return (0, i.jsx)(R.B, {
                                        objectId: t.id,
                                        objectType: s.DomainObjectType.Link,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        children: (0, i.jsx)(eL, { item: t }),
                                    });
                                case B.D.SETTING:
                                    return (0, i.jsx)(R.B, {
                                        objectId: t.id,
                                        objectType: s.DomainObjectType.Link,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        children: (0, i.jsx)(ew, { item: t }),
                                    });
                            }
                        }),
                        n = (0, c.L)(() => {
                            switch (t.type) {
                                case B.D.WAVE:
                                    var e;
                                    return null == (e = t.data.agent) ? void 0 : e.cover.color;
                                case B.D.ALBUM:
                                    return t.data.averageColor;
                                case B.D.NON_MUSIC:
                                    return t.data.album.averageColor;
                                case B.D.PROMO_LINK:
                                    return t.data.color;
                                default:
                                    return;
                            }
                        }),
                        o = (0, c.L)(() => {
                            let e = t.style && e7.some((e) => e === t.style);
                            return n && e ? n : (0, eZ.OH)(n).primary;
                        }),
                        r = !t.style || !e6.some((e) => e === t.style);
                    return (0, i.jsxs)('div', {
                        className: (0, W.$)(e9().root, { [e9().root_disabled]: t.isDisabled }),
                        children: [r && (0, i.jsx)(e8, { color: o }), (0, i.jsx)('div', { className: e9().content, children: l })],
                    });
                });
            var te = a(714),
                tt = a.n(te);
            let ta = () => (0, i.jsx)('div', { className: tt().root, children: (0, i.jsx)('div', { className: tt().petal }) }),
                ti = (e) => {
                    let { className: t } = e;
                    return (0, i.jsx)('div', {
                        className: (0, W.$)(eQ().root, t),
                        children: (0, i.jsx)('div', {
                            className: eQ().wrapper,
                            children: Array.from({ length: 6 }).map((e, t) =>
                                (0, i.jsx)(
                                    'div',
                                    {
                                        className: (0, W.$)(
                                            eQ().slide,
                                            ((e) => {
                                                let t = Math.abs(e - 2),
                                                    a = e < 2 ? 'above' : 'below';
                                                return t < 1
                                                    ? eQ().slide_active
                                                    : t < 2
                                                      ? (0, W.$)(eQ().slide_near, eQ()['slide_near_'.concat(a)])
                                                      : t < 3
                                                        ? (0, W.$)(eQ().slide_medium, eQ()['slide_medium_'.concat(a)])
                                                        : (0, W.$)(eQ().slide_far, eQ()['slide_far_'.concat(a)]);
                                            })(t),
                                        ),
                                        children: (0, i.jsx)(ta, {}),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    });
                },
                tl = (0, n.PA)((e) => {
                    let { className: t, inert: a, items: l, isShimmerVisible: n } = e,
                        {
                            wheel: { activeIndex: s, setActiveIndex: r },
                        } = (0, m.g)(),
                        { formatMessage: c } = (0, _.A)();
                    (0, L.W)({ enabled: !n });
                    let [d, u] = (0, o.useState)(null),
                        p = 3 * l.length,
                        b = (0, h.c)((e) => {
                            r(e.realIndex);
                        }),
                        v = (0, h.c)((e) => {
                            u(e.clickedIndex);
                        }),
                        C = (0, h.c)(() => {
                            u(null);
                        });
                    return n
                        ? (0, i.jsx)(ti, { className: t })
                        : (0, i.jsx)(k.RC, {
                              inert: a,
                              direction: 'horizontal',
                              centeredSlides: !0,
                              slideToClickedSlide: !0,
                              loopAdditionalSlides: 4,
                              slidesPerView: 4,
                              spaceBetween: 0,
                              initialSlide: l.length + 1,
                              modules: [f.Jq, f.U1],
                              a11y: S,
                              freeMode: { enabled: !0, sticky: !0 },
                              className: (0, W.$)(eQ().root, t),
                              wrapperClass: eQ().wrapper,
                              virtualTranslate: !0,
                              onRealIndexChange: b,
                              onTransitionEnd: b,
                              onTap: v,
                              tag: 'section',
                              role: 'region',
                              'aria-label': c({ id: 'a11y-regions.wheel' }),
                              'data-test-id': O.e8.wheel.WHEEL_MOBILE,
                              children: Array.from({ length: p }, (e, t) => {
                                  let a = t % l.length,
                                      n = l[a],
                                      o = Math.floor(t / l.length);
                                  if (void 0 === n) return null;
                                  let r = P(t, s, p, !1),
                                      c = eG(t, s, p, !1);
                                  return (0, i.jsx)(
                                      k.qr,
                                      {
                                          inert: n.isDisabled,
                                          className: (0, W.$)(
                                              eQ().slide,
                                              ((e, t) =>
                                                  e < 1
                                                      ? eQ().slide_active
                                                      : e < 2
                                                        ? (0, W.$)(eQ().slide_near, eQ()['slide_near_'.concat(t)])
                                                        : e < 3
                                                          ? (0, W.$)(eQ().slide_medium, eQ()['slide_medium_'.concat(t)])
                                                          : (0, W.$)(eQ().slide_far, eQ()['slide_far_'.concat(t)]))(r, c),
                                              { [eQ().slide_tap]: t === d },
                                          ),
                                          onAnimationEnd: C,
                                          children: (0, i.jsx)(e5, { item: n, originalIndex: a, objectsCount: l.length }),
                                      },
                                      ''.concat(n.data.getKey(a), '-').concat(o),
                                  );
                              }),
                          });
                }),
                tn = (0, n.PA)((e) => {
                    let { className: t, inert: a } = e,
                        {
                            wheel: n,
                            settings: { isMobile: _ },
                        } = (0, m.g)(),
                        h = (0, d.e)(),
                        p = x(),
                        b = (() => {
                            let e = (0, j.N)().get(I.WA),
                                t = null == e ? void 0 : e.getPassportUid();
                            return (0, o.useMemo)(() => {
                                if (t) {
                                    let e = new g(String(t));
                                    return (e.openDatabase(), e);
                                }
                            }, [t]);
                        })(),
                        v = (0, u.M)();
                    ((0, o.useEffect)(() => {
                        n.setFeedbacksStore(b);
                    }, [n, b]),
                        (0, o.useEffect)(() => {
                            let e = null == h ? void 0 : h.state.queueState.currentEntity.onChange(p);
                            return () => {
                                null == e || e();
                            };
                        }, [h, p, n]),
                        (0, o.useEffect)(() => {
                            if (!n.isNeededToLoad || null === v) return;
                            let e = v.connector.state.connectionState.onChange((e) => {
                                e === l.iv.DISCONNECTED && p();
                            });
                            return () => {
                                null == e || e();
                            };
                        }, [p, n.isNeededToLoad, v]));
                    let C = (0, c.L)(() =>
                        _
                            ? (0, i.jsx)(tl, { className: t, inert: a, items: n.items, isShimmerVisible: n.isShimmerVisible })
                            : (0, i.jsx)(eX, { className: t, items: n.items, isShimmerVisible: n.isShimmerVisible }),
                    );
                    return (0, i.jsx)(r.F, {
                        blockId: s.EntityTypes.Wheel,
                        blockType: s.EntityTypes.Wheel,
                        blockPosX: 1,
                        blockPosY: 3,
                        objectsCount: n.items.length,
                        children: C,
                    });
                });
        },
        12040: (e) => {
            e.exports = {
                root: 'WheelDesktopItem_root__VA3O3',
                root_disabled: 'WheelDesktopItem_root_disabled__fWAAR',
                element: 'WheelDesktopItem_element__hAPKK',
                'fade-in': 'WheelDesktopItem_fade-in__jQQIK',
                element_hidden: 'WheelDesktopItem_element_hidden__eQBf7',
                shimmer: 'WheelDesktopItem_shimmer__tqTY3',
                shimmer_visible: 'WheelDesktopItem_shimmer_visible__9ID3Q',
            };
        },
        14841: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => i });
            let i = (e) => ''.concat(e.wheelId, '-').concat(e.eventType, '-').concat(e.item.id);
        },
        21750: (e) => {
            e.exports = {
                root: 'WheelDesktopItemShimmer_root__Uorp1',
                coverContainer: 'WheelDesktopItemShimmer_coverContainer__LEjCd',
                cover: 'WheelDesktopItemShimmer_cover__KHZHJ',
                meta: 'WheelDesktopItemShimmer_meta__p_hOu',
                title: 'WheelDesktopItemShimmer_title__SkDaw',
                subtitle: 'WheelDesktopItemShimmer_subtitle__vH1q_',
            };
        },
        22786: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.DEFAULT = 'DEFAULT'), (e.CONTROL = 'CONTROL'), (e.CONTROL_ACCENT = 'CONTROL_ACCENT'), (e.MULTIVIBE = 'MULTIVIBE'), (e.PROMO = 'PROMO'));
                })(i || (i = {})));
        },
        28610: (e) => {
            e.exports = { root: 'Petal_root__EqgmK' };
        },
        72042: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => s });
            var i = a(4086),
                l = a(41928),
                n = a(72288),
                o = a(97956);
            let s = () => {
                let e = (0, l.N)(),
                    { experiments: t } = (0, n.g)();
                return t.checkExperiment(o.z.WebNextYnisonNewConnector, 'on') ? e.get(i.s_) : e.get(i.by);
            };
        },
        73602: (e) => {
            e.exports = { root: 'WheelMobileItem_root__5jyac', root_disabled: 'WheelMobileItem_root_disabled__CVDgz', content: 'WheelMobileItem_content__I6Wm9' };
        },
        75177: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { D: () => i }),
                (function (e) {
                    ((e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK'), (e.SETTING = 'SETTING'), (e.NON_MUSIC = 'NON_MUSIC'));
                })(i || (i = {})));
        },
        83579: (e) => {
            function t() {}
            ((t.prototype = {
                on: function (e, t, a) {
                    var i = this.e || (this.e = {});
                    return ((i[e] || (i[e] = [])).push({ fn: t, ctx: a }), this);
                },
                once: function (e, t, a) {
                    var i = this;
                    function l() {
                        (i.off(e, l), t.apply(a, arguments));
                    }
                    return ((l._ = t), this.on(e, l, a));
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), a = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, l = a.length; i < l; i++)
                        a[i].fn.apply(a[i].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var a = this.e || (this.e = {}),
                        i = a[e],
                        l = [];
                    if (i && t) for (var n = 0, o = i.length; n < o; n++) i[n].fn !== t && i[n].fn._ !== t && l.push(i[n]);
                    return (l.length ? (a[e] = l) : delete a[e], this);
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t));
        },
        91796: (e) => {
            e.exports = {
                root: 'WheelMobile_root__VUNd_',
                wrapper: 'WheelMobile_wrapper__0eVMy',
                slide: 'WheelMobile_slide__weOOY',
                slide_active: 'WheelMobile_slide_active__h6xns',
                slide_near_above: 'WheelMobile_slide_near_above__YBxTV',
                slide_near_below: 'WheelMobile_slide_near_below__PjcpN',
                slide_medium_above: 'WheelMobile_slide_medium_above__2DKCg',
                slide_medium_below: 'WheelMobile_slide_medium_below__ZSCwN',
                slide_far: 'WheelMobile_slide_far__a_kSv',
                slide_far_above: 'WheelMobile_slide_far_above__DQ0zl',
                slide_far_below: 'WheelMobile_slide_far_below__V8_OD',
                slide_tap: 'WheelMobile_slide_tap__lD3Xp',
                'tap-scale': 'WheelMobile_tap-scale__B0SdO',
            };
        },
    },
]);
