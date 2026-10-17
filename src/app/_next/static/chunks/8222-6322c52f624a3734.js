(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8222],
    {
        400: (t) => {
            t.exports = {
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
        2096: (t, e, i) => {
            'use strict';
            i.d(e, { Q: () => j });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(39004),
                n = i(44031),
                d = i(61493),
                c = i(71035),
                u = i(66738),
                m = i(3392),
                _ = i(4254),
                p = i(17545),
                h = i(4071);
            let v = (t) => {
                let { className: e, variant: i = 'text', onClick: s, iconClassName: r, iconSize: n, size: c = 's', ariaLabel: m } = t,
                    { formatMessage: _ } = (0, l.A)(),
                    p = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    v = (0, o.useCallback)(
                        (t) => {
                            (null == s || s(), t.stopPropagation());
                        },
                        [s],
                    );
                return (0, a.jsx)(h.$, {
                    className: e,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: v,
                    icon: (0, a.jsx)(u.I, { size: n, className: r, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(79367),
                k = i(34159),
                C = i(85743),
                y = i(27954),
                A = i(64720),
                b = i(71996),
                g = i(6304),
                T = i(65165),
                N = i(38097),
                P = i(91907),
                f = i(3407),
                E = i(34826),
                M = i.n(E),
                I = i(82684),
                D = i(85957),
                L = i.n(D);
            let S = (0, r.PA)((t) => {
                    let { track: e } = t,
                        { formatMessage: i } = (0, l.A)();
                    return e.isDownloaded
                        ? (0, a.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : e.isDownloading
                          ? (0, a.jsx)(I.A, { value: e.downloadingProgress, size: 16, className: L().downloadingProgress, progressBarClassName: L().progress })
                          : null;
                }),
                j = (0, r.PA)((t) => {
                    var e;
                    let {
                            className: i,
                            track: r,
                            withLightning: h,
                            ignoreDislikedStyles: E,
                            onLikeClick: I,
                            utmLink: D,
                            withSecondaryColor: L,
                            handleRemove: j,
                            withTrailer: O = !0,
                            likeIconSize: R = 'xxs',
                            removeButtonAriaLabel: w,
                            hideControls: B,
                        } = t,
                        { user: F, trailer: Y } = (0, y.g)(),
                        { formatMessage: z } = (0, l.A)(),
                        { sendLikeSearchFeedback: H } = (0, C.z)(),
                        [$, K] = (0, o.useState)(!1),
                        [G, W] = (0, o.useState)(!1),
                        U = (0, x.P)(),
                        q = (0, p.K)(r),
                        {
                            duration: X,
                            lightning: V,
                            ugc: Q,
                        } = ((t, e, i) => {
                            var a;
                            let { withLightning: s, isUGC: r } = e,
                                o = ((t) =>
                                    'number' != typeof t
                                        ? null
                                        : ((t) => {
                                              let e = Math.round((t || 0) / N.k7);
                                              return (0, P.E)(e);
                                          })(t))(t.durationMs);
                            return {
                                duration: null !== o ? { text: o, ariaLabel: (0, T.j)(Math.round((null != (a = t.durationMs) ? a : 0) / 1e3), i) } : null,
                                lightning: s ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: r ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(r, { withLightning: h, isUGC: r.isUGC }, z),
                        Z = (0, k.F)(),
                        J = F.hasPlus,
                        tt = !r.isRemoved && r.isAvailable && !B,
                        te = (0, c.c)(async () => {
                            ($ || r.isLiked || (K(!0), null == H || H()), await q(), null == I || I(r.isLiked));
                        }),
                        ti = (0, c.c)((t) => {
                            t.stopPropagation();
                        }),
                        ta = (0, c.c)((t) => {
                            if ((t.stopPropagation(), U())) return void t.preventDefault();
                            (Y.openTrackTrailer(r.id), Z(n.DomainObjectType.Track, r.id));
                        }),
                        ts = (0, o.useMemo)(() => {
                            if (tt)
                                return (0, a.jsx)('div', {
                                    onClick: ti,
                                    children: (0, a.jsx)(f._, {
                                        track: r,
                                        open: G,
                                        onOpenChange: W,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: D,
                                        className: (0, s.$)(M().contextMenu, { [M().contextMenu_visible]: G }),
                                        handleRemove: j,
                                        withTrailer: O,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ti, j, G, tt, O, r, D]);
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(M().root, M().controls, i, {
                            [M().controls_dislikedControls]: r.isDisliked,
                            [M().controls_dislikedColors]: r.isDisliked && !E,
                            [M().controls_disabled]: !r.isAvailable,
                            [M().root_withSecondaryColor]: L,
                        }),
                        children: [
                            V && (0, a.jsx)(u.I, { 'aria-label': V.label, size: 'xxs', className: M().lightning, variant: 'lightning' }),
                            Q &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(u.I, {
                                            'aria-label': Q.label,
                                            size: 'xxs',
                                            className: M().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: Q.label }),
                                    ],
                                }),
                            J && (0, a.jsx)('div', { className: (0, s.$)(M().item, M().downloadIcon), children: (0, a.jsx)(S, { track: r }) }),
                            j && !B && (0, a.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, s.$)(M().item, M().removeButton), onClick: j, ariaLabel: w }),
                            tt &&
                                (0, a.jsx)(g.WithOffline, {
                                    fallback: (0, a.jsx)(A.c, {
                                        size: 'xs',
                                        iconSize: R,
                                        className: (0, s.$)(M().item, M().likeIcon),
                                        isLiked: r.isLiked,
                                        onClick: te,
                                        disabled: !F.isAuthorized,
                                    }),
                                }),
                            (null == (e = r.trailer) ? void 0 : e.isAvailable) &&
                                r.isAvailable &&
                                (0, a.jsx)(g.WithOffline, {
                                    fallback: (0, a.jsx)(b.k, {
                                        className: (0, s.$)(M().item, M().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ta,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(M().item, M().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, a.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, s.$)(M().duration, { [M().duration_hidden]: G && tt }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X.ariaLabel,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: X.text }),
                                        }),
                                    ts,
                                ],
                            }),
                        ],
                    });
                });
        },
        2493: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => r });
            var a = i(39004),
                s = i(38977);
            let r = (t, e) => {
                let { formatMessage: i } = (0, a.A)(),
                    { hours: r, minutes: o, seconds: l } = (0, s.e)(t),
                    { hours: n, minutes: d, seconds: c } = (0, s.e)(e);
                return i(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((t / e) * 100), beginHours: r, beginMinutes: o, beginSeconds: l, endHours: n, endMinutes: d, endSeconds: c },
                );
            };
        },
        10959: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => s });
            var a = i(44806);
            let s = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: s, userRegion: r } = t;
                return 'ru' === r && e(a.z.WebNextFooterDisclaimer, 'on') ? i() : s();
            };
        },
        11708: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => r });
            var a = i(74631),
                s = i(39004);
            let r = () => {
                let { formatMessage: t } = (0, s.A)();
                return (0, a.useCallback)(
                    function (e) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            a = Math.floor(e / 60),
                            s = function (e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    a = t({ id: 'time.minutes-left' }, { minutes: e });
                                return i ? ''.concat(t({ id: 'time.left' }, { time: e }), ' ').concat(a) : a;
                            };
                        if (e < 1) return t({ id: 'time.finished' });
                        if (e < 60)
                            return (function (e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    a = t({ id: 'time.seconds-left' }, { seconds: e });
                                return i ? ''.concat(t({ id: 'time.left' }, { time: e }), ' ').concat(a) : a;
                            })(Math.floor(e), i);
                        if (a < 60) return s(a, i);
                        let r = Math.floor(a / 60),
                            o = a % 60,
                            l = (function (e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? t({ id: 'time.hours-left' }, { hours: e }) : t({ id: 'time.hours' }, { hours: e });
                            })(r, i);
                        return o > 0 ? ''.concat(l, ' ').concat(s(o)) : l;
                    },
                    [t],
                );
            };
        },
        14927: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithPosition_root__H5FYg',
                playButton: 'PlayButtonWithPosition_playButton__7cfDQ',
                playButtonIcon: 'PlayButtonWithPosition_playButtonIcon___cLAL',
                playingAnimation: 'PlayButtonWithPosition_playingAnimation__Hy5rC',
                position: 'PlayButtonWithPosition_position__wk3OT',
                root_current: 'PlayButtonWithPosition_root_current__FCDLJ',
                root_playing: 'PlayButtonWithPosition_root_playing__RpnYU',
                root_disabled: 'PlayButtonWithPosition_root_disabled__PMV24',
                root_disliked: 'PlayButtonWithPosition_root_disliked__NIZzA',
                spinner: 'PlayButtonWithPosition_spinner__jNaNf',
            };
        },
        17742: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => a });
            var a = (function (t) {
                return ((t.ALBUM = 'album'), (t.PLAYLIST = 'playlist'), t);
            })({});
        },
        22106: (t) => {
            t.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        24574: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => y });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(8487),
                n = i(61493),
                d = i(28068),
                c = i(66738),
                u = i(4254),
                m = i(16886),
                _ = i(50209),
                p = i(30296),
                h = i(27954),
                v = i(2493),
                x = i(11708),
                k = i(22106),
                C = i.n(k);
            let y = (0, r.PA)((t) => {
                var e, i, r, k, y, A, b, g, T;
                let { className: N, id: P, albumId: f, streamProgress: E, durationMs: M, playContextParams: I, withTimeLeftText: D = !0, isFinishedLabelHidden: L } = t,
                    S = (0, p.e)(),
                    { sonataState: j, album: O } = (0, h.g)(),
                    R = Math.floor(M / 1e3),
                    [w, B] = (0, o.useState)(!1),
                    F = (0, x.$)(),
                    { isPlaying: Y, isCurrent: z } = (0, _.D)({ playContextParams: I, entityId: f ? ''.concat(P, ':').concat(f) : P });
                ((0, o.useEffect)(() => {
                    if (!z) return void B(!1);
                    let t =
                        null == S
                            ? void 0
                            : S.state.playerState.status.onChange(() => {
                                  (null == S ? void 0 : S.state.playerState.status.value) === m.MT.BUFFERING && B(!0);
                              });
                    return () => {
                        null == t || t();
                    };
                }, [S, E, z, Y]),
                    (0, o.useEffect)(() => {
                        var t;
                        (null == O || null == (t = O.meta) ? void 0 : t.listeningFinished)
                            ? (E.updateEndPositionSec(0), E.updateEverFinished(!0))
                            : (null == O ? void 0 : O.allTracksUnfinished) && E.updateEverFinished(!1);
                    }, [E, null == O ? void 0 : O.allTracksUnfinished, null == O || null == (e = O.meta) ? void 0 : e.listeningFinished]),
                    (0, o.useEffect)(() => {
                        var t, e;
                        (z &&
                            (null == j || null == (t = j.entityMeta) ? void 0 : t.streamProgress) &&
                            E &&
                            j.entityMeta.streamProgress.hasEverFinished !== E.hasEverFinished &&
                            E.updateEverFinished(!!j.entityMeta.streamProgress.hasEverFinished),
                            R - ((null == E ? void 0 : E.endPositionSec) || 0) < 1 &&
                                ((null == j || null == (e = j.entityMeta) ? void 0 : e.streamProgress) &&
                                    z &&
                                    (j.entityMeta.streamProgress.updateEverFinished(!0), j.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == E || E.updateEverFinished(!0)));
                    }, [
                        z,
                        null == j || null == (i = j.entityMeta) ? void 0 : i.streamProgress,
                        null == j || null == (k = j.entityMeta) || null == (r = k.streamProgress) ? void 0 : r.hasEverFinished,
                        E,
                        E.hasEverFinished,
                        E.endPositionSec,
                        R,
                    ]),
                    (0, o.useEffect)(() => {
                        if (!z) return;
                        let t =
                            null == S
                                ? void 0
                                : S.state.playerState.progress.onChange(() => {
                                      var t;
                                      let e = S.state.playerState.progress.value,
                                          i = null == j || null == (t = j.entityMeta) ? void 0 : t.streamProgress;
                                      (0 !== e.position && w && E.updateEndPositionSec(e.position),
                                          z &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(e.position), 10) &&
                                              (null == i || i.updateEndPositionSec(e.position)));
                                  });
                        return () => {
                            null == t || t();
                        };
                    }, [S, E, z, Y, w, P, null == j ? void 0 : j.entityMeta]));
                let H = (z && (null == j || null == (A = j.entityMeta) || null == (y = A.streamProgress) ? void 0 : y.endPositionSec)) || E.endPositionSec,
                    $ = (0, v.m)(null != H ? H : 0, R),
                    K = (0, o.useMemo)(() => {
                        var t, e, i;
                        if (
                            ((z && (null == j || null == (e = j.entityMeta) || null == (t = e.streamProgress) ? void 0 : t.hasEverFinished)) ||
                                (null == E ? void 0 : E.hasEverFinished) ||
                                (null == O || null == (i = O.meta) ? void 0 : i.listeningFinished)) &&
                            !L
                        )
                            return (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, s.$)(C().text, { [C().text_withoutTimeLeft]: !D }),
                                        'data-test-id': n.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, a.jsx)(l.A, { id: 'time.finished' }),
                                    }),
                                    (0, a.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: C().checkIcon,
                                        'data-test-id': n.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!H || 0 === H) return;
                        let r = R - H,
                            o = F(r);
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, s.$)(C().text, { [C().text_withoutTimeLeft]: !D }),
                                    'data-test-id': n.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: o,
                                }),
                                r > 1 || L
                                    ? (0, a.jsx)(d.q, {
                                          'aria-valuetext': $,
                                          'aria-busy': z && Y,
                                          value: H,
                                          max: R,
                                          'data-test-id': n.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, a.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: C().checkIcon,
                                          'data-test-id': n.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        R,
                        null == E ? void 0 : E.hasEverFinished,
                        D,
                        F,
                        z,
                        Y,
                        null == j || null == (g = j.entityMeta) || null == (b = g.streamProgress) ? void 0 : b.hasEverFinished,
                        null == O || null == (T = O.meta) ? void 0 : T.listeningFinished,
                        L,
                        H,
                        $,
                    ]);
                return (0, a.jsx)('div', { className: (0, s.$)(C().root, N), 'data-test-id': n.OA.track.LISTENING_PROGRESS, children: K });
            });
        },
        26076: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => o });
            var a = i(25839);
            i(93588);
            var s = i(400),
                r = i.n(s);
            let o = (t) => {
                let { children: e } = t;
                return (0, a.jsx)('footer', { className: r().empty });
            };
        },
        26115: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => r });
            var a = i(40207),
                s = i(12929);
            let r = (t) => {
                let { track: e, callback: i, disclaimerRejectHandler: r } = t;
                return (0, a.l)({ entity: e, entityType: s.n.TRACK, callback: i, onReject: r, preventDefaultWhenSafe: !1 });
            };
        },
        28257: (t) => {
            t.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        30408: (t, e, i) => {
            'use strict';
            i.d(e, { d: () => s });
            var a = i(27954);
            let s = (t, e, i) => {
                let {
                    settings: { isMobile: s },
                } = (0, a.g)();
                return !!(s && t && (((null == e ? void 0 : e.endPositionSec) && e.endPositionSec > 0) || (null == e ? void 0 : e.hasEverFinished) || (i && i > 0)));
            };
        },
        32833: (t) => {
            t.exports = {
                playButtonCell: 'TrackNonMusic_playButtonCell__HaJrc',
                controlsBarCell: 'TrackNonMusic_controlsBarCell__zWt44',
                dots: 'TrackNonMusic_dots__Wom40',
                trackWithDots: 'TrackNonMusic_trackWithDots__v2VbZ',
                important: 'TrackNonMusic_important__u29Uj',
            };
        },
        34546: (t, e, i) => {
            'use strict';
            i.d(e, { j: () => a });
            let a = (t) => t.map((t) => t.name).join(', ');
        },
        34826: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        40150: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                explicitMark: 'AudiobookMeta_explicitMark__1rN7x',
                metaContainer: 'AudiobookMeta_metaContainer__F7d9X',
                metaContainer_oneLine: 'AudiobookMeta_metaContainer_oneLine__D9CQh',
                titleContainer: 'AudiobookMeta_titleContainer__GIY6Q',
                artists: 'AudiobookMeta_artists__ScMoq',
                progress: 'AudiobookMeta_progress__i3_kS',
                progress_disabled: 'AudiobookMeta_progress_disabled__D_7E9',
                progress_withPreviousInfo: 'AudiobookMeta_progress_withPreviousInfo__97Hxr',
            };
        },
        43354: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => s, P: () => r });
            var a = i(74631);
            let s = (0, a.createContext)(null),
                r = () => (0, a.useContext)(s);
        },
        43910: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
        },
        47399: (t) => {
            t.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        51027: (t) => {
            t.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        51253: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => S });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(84059),
                l = i(74631),
                n = i(39004),
                d = i(61493),
                c = i(71035),
                u = i(49656),
                m = i(3392),
                _ = i(4254),
                p = i(24574),
                h = i(40207),
                v = i(85686),
                x = i(27954),
                k = i(19410),
                C = i(12929),
                y = i(32652),
                A = i(97522),
                b = i(79276),
                g = i(74245),
                T = i(81024),
                N = i(85251),
                P = i(61755),
                f = i(87221),
                E = i(30408),
                M = i(12752),
                I = i.n(M),
                D = i(43910),
                L = i.n(D);
            let S = (0, r.PA)((t) => {
                var e, i, r, M, D, S, j;
                let {
                        track: O,
                        className: R,
                        withPodcastName: w,
                        withDate: B,
                        withSecondaryColor: F = !1,
                        withListeningProgress: Y = !1,
                        captionSize: z = 'm',
                        explicitSize: H = 'xs',
                        withExplicitMark: $,
                        titleContainerClassName: K,
                        textClassName: G,
                        playContextParams: W,
                        withTimeLeftText: U = !0,
                        ignoreDislikedStyles: q,
                        withCustomTooltip: X = !0,
                        withSavingQueryParams: V,
                        beforeTitle: Q,
                        afterTitle: Z,
                        titleLineClamp: J = 1,
                        podcastMetaClassName: tt,
                        progressClassName: te,
                        withAlbumTitleLink: ti,
                    } = t,
                    {
                        fullscreenPlayer: ta,
                        sonataState: ts,
                        slam: tr,
                        settings: { isMobile: to },
                    } = (0, x.g)(),
                    { formatMessage: tl, formatDate: tn } = (0, n.A)(),
                    td = (0, P.$)({ withCustomTooltip: X }),
                    tc = (0, o.useSearchParams)(),
                    tu = (0, v.Z)(null != (S = null == (e = O.mainAlbum) ? void 0 : e.url) ? S : ''),
                    tm = !!(Y && W && O.shouldRememberPosition && O.streamProgress && O.durationMs),
                    t_ =
                        O.id === (null == (i = ts.entityMeta) ? void 0 : i.id) &&
                        (null == (M = ts.entityMeta) || null == (r = M.streamProgress) ? void 0 : r.endPositionSec),
                    tp = (0, E.d)(tm, O.streamProgress, t_),
                    th = ((t, e) => {
                        let {
                                isMobile: i,
                                isOfflineModeEnabled: a,
                                mainAlbum: s,
                                shouldHidePodcastInfo: r,
                                withPodcastName: o,
                                withDate: l,
                                withExplicitMark: n,
                                withAlbumTitleLink: d,
                                query: c,
                            } = e,
                            u = (0, N.q)(t, { isMobile: i, isOfflineModeEnabled: a, query: c }),
                            m = (null == n || n) && t.disclaimers ? (0, g.DQ)(t.disclaimers) : null,
                            _ = null != o && o && !r ? s : null,
                            p = _ && (null == d || d) ? (0, T.L)(_.id) : null,
                            h = (null == l || l) && !r ? t.pubDate : void 0,
                            v = t.pubDate ? new Date(t.pubDate) : new Date(),
                            x = (0, b.L)(v),
                            k = !!(h && [b.r.TODAY, b.r.YESTERDAY].includes(x));
                        return { ...u, explicitMark: m, album: _, albumLink: p, pubDate: h, dateType: x, isSoonDate: k };
                    })(O, {
                        isMobile: to,
                        isOfflineModeEnabled: tr.isOfflineModeEnabled,
                        mainAlbum: O.mainAlbum,
                        shouldHidePodcastInfo: tp,
                        withPodcastName: w,
                        withDate: B,
                        withExplicitMark: $,
                        withAlbumTitleLink: ti,
                        query: V ? Object.fromEntries(tc) : void 0,
                    }),
                    tv = ((t, e, i, a, s) => {
                        var r, o;
                        let { canEnableCustomTooltip: l, isMobile: n } = s,
                            d = e.shouldShowRemovedTitle ? i({ id: 'track-title.podcast-not-found' }) : e.title,
                            c = i({ id: 'entity-names.podcast-name' }, { podcastName: t.title }),
                            u = ''.concat(c, ' ').concat(null != (o = t.version) ? o : ''),
                            m = e.album ? i({ id: 'entity-names.podcast-name' }, { podcastName: e.album.title }) : void 0,
                            _ = null;
                        if (e.pubDate)
                            switch (e.dateType) {
                                case b.r.TODAY:
                                    _ = i({ id: 'interface-actions.date-today' });
                                    break;
                                case b.r.YESTERDAY:
                                    _ = i({ id: 'interface-actions.date-yesterday' });
                                    break;
                                case b.r.DATE_WITH_YEAR:
                                    _ = a(e.pubDate, { month: 'long', day: 'numeric', year: 'numeric' });
                                    break;
                                default:
                                    _ = a(e.pubDate, { month: 'long', day: 'numeric' });
                            }
                        return {
                            displayTitle: d,
                            ariaLabel: u,
                            titleAttribute: l || e.shouldShowRemovedTitle ? void 0 : d,
                            versionTitleAttribute: l ? void 0 : e.version,
                            isTooltipEnabled: l && !n,
                            albumAriaLabel: m,
                            albumTitleAttribute: l || null == (r = e.album) ? void 0 : r.title,
                            dateText: _,
                            withSecondaryInfo: !!(e.album || e.pubDate),
                        };
                    })(O, th, tl, tn, { canEnableCustomTooltip: td, isMobile: to }),
                    tx = (0, h.l)({ entity: null != (j = O.mainAlbum) ? j : null, entityType: C.n.PODCAST, callback: tu }),
                    tk = (0, c.c)((t) => {
                        (ta.modal.isOpened && ta.modal.close(), tx(t));
                    }),
                    tC = (0, f.O)({ track: O, withSavingQueryParams: V, entityType: C.n.PODCAST }),
                    ty = (0, l.useCallback)(
                        (t) =>
                            (0, a.jsx)(m.m_, {
                                enabled: tv.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: tv.displayTitle,
                                hoverSettings: k.V,
                                children: (0, a.jsx)(_.HL, {
                                    className: I().title,
                                    type: 'entity',
                                    size: z,
                                    variant: 'span',
                                    title: tv.titleAttribute,
                                    ...t,
                                    children: tv.displayTitle,
                                }),
                            }),
                        [tv.isTooltipEnabled, tv.titleAttribute, z, tv.displayTitle],
                    ),
                    tA = null == (D = th.link) ? void 0 : D.href,
                    tb = (0, l.useMemo)(
                        () =>
                            th.shouldShowRemovedTitle
                                ? (0, a.jsx)(m.m_, {
                                      enabled: tv.isTooltipEnabled,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: tv.displayTitle,
                                      hoverSettings: k.V,
                                      children: (0, a.jsx)('span', { children: tv.displayTitle }),
                                  })
                                : void 0 !== tA
                                  ? (0, a.jsx)(A.N, {
                                        onClick: tC,
                                        className: I().albumLink,
                                        href: tA,
                                        'aria-label': tv.ariaLabel,
                                        title: tv.titleAttribute,
                                        'data-test-id': d.Kq.track.TRACK_TITLE,
                                        children: ty(),
                                    })
                                  : ty({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                        [tv.isTooltipEnabled, th.shouldShowRemovedTitle, tA, tv.displayTitle, ty, tv.titleAttribute, tC, tv.ariaLabel],
                    ),
                    tg = (0, u.L)(() => {
                        let t = th.album;
                        if (!t) return;
                        let e = (0, a.jsx)(m.m_, {
                            enabled: tv.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: t.title,
                            hoverSettings: k.V,
                            children: (0, a.jsx)(_.HL, { variant: 'span', type: 'entity', size: z, className: I().albumTitle, children: t.title }),
                        });
                        return th.albumLink
                            ? (0, a.jsx)(A.N, {
                                  'aria-label': tv.albumAriaLabel,
                                  className: I().link,
                                  href: th.albumLink.href,
                                  title: tv.albumTitleAttribute,
                                  onClick: tk,
                                  'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: e,
                              })
                            : (0, a.jsx)('span', { 'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: e });
                    });
                return (0, a.jsx)('div', {
                    className: (0, s.$)(I().root, { [I().root_disabled]: !O.isAvailable, [I().root_disliked]: O.isDisliked && !q, [I().root_withSecondaryColor]: F }, R),
                    children: (0, a.jsxs)('div', {
                        className: (0, s.$)(I().metaContainer, L().podcastMetaContainer, tt),
                        children: [
                            tm &&
                                W &&
                                O.streamProgress &&
                                (0, a.jsx)(p.B, {
                                    className: (0, s.$)(L().progress, te, {
                                        [L().progress_withPreviousInfo]: th.album || th.pubDate,
                                        [L().progress_disabled]: !O.isAvailable || O.isDisliked,
                                    }),
                                    id: O.id,
                                    albumId: O.albumId,
                                    streamProgress: O.streamProgress,
                                    durationMs: O.durationMs || 0,
                                    playContextParams: W,
                                    withTimeLeftText: U,
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(I().titleContainer, K, L().podcastTitleContainer),
                                children: [
                                    (0, a.jsxs)(_.HL, {
                                        className: (0, s.$)(I().text, G),
                                        type: 'entity',
                                        size: z,
                                        variant: 'div',
                                        lineClamp: J,
                                        children: [
                                            Q,
                                            tb,
                                            th.version &&
                                                (0, a.jsxs)(_.HL, {
                                                    className: (0, s.$)(I().text, I().version),
                                                    type: 'entity',
                                                    size: z,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: tv.versionTitleAttribute,
                                                    children: ['\xa0', th.version],
                                                }),
                                        ],
                                    }),
                                    th.explicitMark &&
                                        (0, a.jsx)(y.N, {
                                            containerClassName: I().explicitMarkContainer,
                                            getDescriptionTexts: O.getDescriptionTexts,
                                            variant: th.explicitMark,
                                            className: I().explicitMark,
                                            size: H,
                                            trackId: O.id,
                                        }),
                                    Z,
                                ],
                            }),
                            tv.withSecondaryInfo &&
                                (0, a.jsxs)(_.HL, {
                                    type: 'entity',
                                    size: z,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, s.$)(I().text, L().podcastName, G),
                                    children: [
                                        tg,
                                        null !== tv.dateText &&
                                            (0, a.jsx)(_.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: z,
                                                className: (0, s.$)({
                                                    [L().dateWithName]: !!th.album,
                                                    [L().soonDate]: th.isSoonDate,
                                                    [L().dateDisabled]: !O.isAvailable,
                                                    [L().dateDisliked]: O.isDisliked && !q,
                                                }),
                                                children: tv.dateText,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        51549: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => T });
            var a = i(25839),
                s = i(88204),
                r = i(75501);
            let o = (t, e) => {
                let { isAlbum: i, isMobile: a } = e,
                    s = t.type === r.S.AUDIOBOOK || t.type === r.S.FAIRY_TALE,
                    o = s && i,
                    l = void 0 === a ? void 0 : !a;
                return { isAudiobook: s, withPosition: o, withAuthor: s && !i, isCoverAvailable: !o && t.isAvailable, withArtistLink: l, withAlbumTitleLink: l };
            };
            var l = i(82298),
                n = i(74631),
                d = i(61493),
                c = i(50209),
                u = i(27954),
                m = i(6349),
                _ = i(62661),
                p = i(2096),
                h = i(75217),
                v = i(61801),
                x = i(69730),
                k = i(32833),
                C = i.n(k),
                y = i(17742);
            let A = (0, s.PA)((t) => {
                let {
                        track: e,
                        playContextParams: i,
                        className: s,
                        withDNDBlock: r,
                        isDragging: k,
                        draggingClassName: A,
                        withTimeLeftText: b,
                        ignoreDislikedStyles: g,
                        viewType: T = y.D.PLAYLIST,
                        position: N,
                        beforeTitle: P,
                        handleRemove: f,
                        removeButtonAriaLabel: E,
                    } = t,
                    M = (0, c.D)({ playContextParams: i, entityId: e.entityId }),
                    {
                        settings: { isMobile: I },
                    } = (0, u.g)(),
                    D = o(e, { isAlbum: T === y.D.ALBUM, isMobile: I }),
                    L = (0, n.useCallback)(
                        (t) =>
                            D.withPosition
                                ? (0, a.jsx)(v.G, { track: e, position: N, className: C().playButtonCell, ...t })
                                : (0, a.jsx)(m.q, {
                                      isAvailable: D.isCoverAvailable,
                                      isDisliked: e.isDisliked,
                                      coverUri: e.coverUri,
                                      title: e.title,
                                      className: C().playButtonCell,
                                      ignoreDislikedStyles: g,
                                      radius: 'xs',
                                      ...t,
                                  }),
                        [g, N, D.withPosition, D.isCoverAvailable, e],
                    );
                return (0, a.jsx)(x.C, {
                    className: (0, l.$)(s, { [C().trackWithDots]: r, [C().important]: r }),
                    track: e,
                    meta: (0, a.jsx)(h.Z, {
                        beforeTitle: P,
                        withAuthor: D.withAuthor,
                        explicitSize: 'xxxs',
                        track: e,
                        playContextParams: i,
                        withListeningProgress: !0,
                        withTimeLeftText: b,
                        ignoreDislikedStyles: g,
                        withSavingQueryParams: !0,
                        withArtistLink: D.withArtistLink,
                    }),
                    playButtonCellRender: L,
                    controls: (0, a.jsx)(p.Q, {
                        track: e,
                        className: C().controlsBarCell,
                        ignoreDislikedStyles: g,
                        utmLink: i.contextData.utmLink,
                        handleRemove: f,
                        removeButtonAriaLabel: E,
                    }),
                    beforeBlock: r ? (0, a.jsx)(_.O, { className: (0, l.$)(C().dots, A), isDragging: k }) : void 0,
                    ...M,
                    'data-test-id': d.Kq.track.TRACK_AUDIOBOOK,
                });
            });
            var b = i(51253);
            let g = (0, s.PA)((t) => {
                    let {
                            track: e,
                            playContextParams: i,
                            withPodcastName: s,
                            className: r,
                            withDNDBlock: h,
                            isDragging: v,
                            draggingClassName: k,
                            handleRemove: y,
                            withTimeLeftText: A,
                            ignoreDislikedStyles: g,
                            beforeTitle: T,
                            removeButtonAriaLabel: N,
                        } = t,
                        P = (0, c.D)({ playContextParams: i, entityId: e.entityId }),
                        {
                            settings: { isMobile: f },
                        } = (0, u.g)(),
                        E = o(e, { isAlbum: !1, isMobile: f }),
                        M = (0, n.useCallback)(
                            (t) =>
                                (0, a.jsx)(m.q, {
                                    isAvailable: E.isCoverAvailable,
                                    isDisliked: e.isDisliked,
                                    coverUri: e.coverUri,
                                    title: e.title,
                                    className: C().playButtonCell,
                                    ignoreDislikedStyles: g,
                                    radius: 'xs',
                                    ...t,
                                }),
                            [g, E.isCoverAvailable, e.coverUri, e.isDisliked, e.title],
                        );
                    return (0, a.jsx)(x.C, {
                        className: (0, l.$)(r, { [C().trackWithDots]: h, [C().important]: h }),
                        track: e,
                        meta: (0, a.jsx)(b.w, {
                            beforeTitle: T,
                            track: e,
                            playContextParams: i,
                            withPodcastName: s,
                            withListeningProgress: !0,
                            withTimeLeftText: A,
                            ignoreDislikedStyles: g,
                            explicitSize: 'xxxs',
                            withAlbumTitleLink: E.withAlbumTitleLink,
                        }),
                        playButtonCellRender: M,
                        controls: (0, a.jsx)(p.Q, {
                            handleRemove: y,
                            track: e,
                            className: C().controlsBarCell,
                            ignoreDislikedStyles: g,
                            utmLink: i.contextData.utmLink,
                            removeButtonAriaLabel: N,
                        }),
                        beforeBlock: h ? (0, a.jsx)(_.O, { className: (0, l.$)(C().dots, k), isDragging: v }) : void 0,
                        ...P,
                        'data-test-id': d.Kq.track.TRACK_PODCAST,
                    });
                }),
                T = (0, s.PA)((t) => (o(t.track, { isAlbum: t.viewType === y.D.ALBUM }).isAudiobook ? (0, a.jsx)(A, { ...t }) : (0, a.jsx)(g, { ...t })));
        },
        61801: (t, e, i) => {
            'use strict';
            i.d(e, { G: () => p });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(61493),
                l = i(4550),
                n = i(4254),
                d = i(27954),
                c = i(49438),
                u = i(74987),
                m = i(14927),
                _ = i.n(m);
            let p = (0, r.PA)((t) => {
                let { className: e, track: i, position: r, onPlayButtonClick: m, isPlaying: p, isCurrent: h, withDislikeStyles: v = !0, isLoading: x } = t,
                    {
                        settings: { isMobile: k },
                    } = (0, d.g)();
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(e, _().root, {
                        [_().root_disabled]: !i.isAvailable && !i.hasModalAccess,
                        [_().root_playing]: p,
                        [_().root_disliked]: i.isDisliked && v,
                        [_().root_current]: h,
                    }),
                    children: [
                        (i.isAvailable || i.hasModalAccess) &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !x && (0, a.jsx)(u.P, { stopAnimation: !p, className: _().playingAnimation }),
                                    x && k && (0, a.jsx)(l.y, { size: 'xs', className: _().spinner }),
                                    !k &&
                                        (0, a.jsx)(c.D, {
                                            variant: 'filled',
                                            className: _().playButton,
                                            iconClassName: _().playButtonIcon,
                                            isPlaying: p,
                                            onClick: m,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        r &&
                            (0, a.jsx)(n.HL, {
                                variant: 'div',
                                className: _().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': o.Kq.track.TRACK_POSITION,
                                children: r,
                            }),
                    ],
                });
            });
        },
        62661: (t, e, i) => {
            'use strict';
            i.d(e, { O: () => n });
            var a = i(25839),
                s = i(82298),
                r = i(66738),
                o = i(28257),
                l = i.n(o);
            let n = (t) => {
                let { isDragging: e, className: i } = t;
                return (0, a.jsx)(r.I, { variant: 'dragDots', size: 'xxs', className: (0, s.$)(l().root, { [l().root_active]: e }, i), 'aria-hidden': !0 });
            };
        },
        64813: (t) => {
            t.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        69730: (t, e, i) => {
            'use strict';
            i.d(e, { C: () => g });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(71035),
                n = i(11823),
                d = i(79367),
                c = i(47009),
                u = i(52512),
                m = i(29872),
                _ = i(61561),
                p = i(85743),
                h = i(16886),
                v = i(27954),
                x = i(18284),
                k = i(39004),
                C = i(34546),
                y = i(26115),
                A = i(51027),
                b = i.n(A);
            let g = (0, r.PA)((t) => {
                var e;
                let {
                        className: i,
                        track: r,
                        meta: A,
                        beforeBlock: g,
                        controls: T,
                        playButtonCellRender: N,
                        withLightning: P,
                        isPlaying: f,
                        isCurrent: E,
                        togglePlay: M,
                        restartPlay: I,
                        onPlayClick: D,
                        playButtonIconSize: L,
                        skipFreemiumCloseListeningPaywall: S = !1,
                        ...j
                    } = t,
                    { shouldShowBuySubscriptionModal: O, showBuySubscriptionModal: R } = (0, m.q)(),
                    {
                        track: w,
                        fullscreenPlayer: B,
                        settings: { isMobile: F },
                        album: Y,
                        albumCPA: { isPlusCPAPlayerBarEnabled: z },
                        paywall: { modal: H },
                    } = (0, v.g)(),
                    { ref: $, intersectionPropertyId: K } = (0, u.n)(),
                    G = (0, c.b)(),
                    W = (0, d.P)(),
                    U = ((t) => {
                        let { track: e, withLightning: i } = t,
                            { formatMessage: a } = (0, k.A)();
                        return ((t, e, i) => {
                            var a;
                            let { withLightning: s } = e,
                                r = (0, C.j)(null != (a = t.artists) ? a : []);
                            return t.isAvailable
                                ? [r, t.title, t.version, s && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(r, ' ')
                                      .concat(t.title);
                        })(e, { withLightning: i }, a);
                    })({ withLightning: P, track: r }),
                    q = ((t) => {
                        let { sonataState: e } = (0, v.g)(),
                            i = e.status === h.MT.LOADING_MEDIA_SOURCE || e.status === h.MT.BUFFERING;
                        if (t && e.entityMeta) {
                            let a = e.entityMeta.entityId;
                            return i && a === t;
                        }
                        return i;
                    })(r.entityId),
                    X = z(Y.id, null == (e = Y.meta) ? void 0 : e.isNonMusic),
                    V = r.isAvailable && O && !X,
                    Q = (0, _.N)(),
                    Z = r.isAvailable && Q && !X && !S,
                    J = (0, y.w)({ track: r, callback: M }),
                    tt = (0, l.c)(() => {
                        w.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    te = (0, y.w)({ track: r, callback: tt }),
                    { sendPlaySearchFeedback: ti } = (0, p.z)(),
                    [ta, ts] = (0, o.useState)(!1),
                    tr = (0, l.c)(() => {
                        if (!W()) {
                            if (V) return void R();
                            if (Z) return void H.open();
                            (ta || f || (ts(!0), null == ti || ti()), J(), G(!f), null == D || D(!f));
                        }
                    }),
                    to = (0, l.c)(() => {
                        if (f) return void I();
                        tr();
                    }),
                    tl = (0, l.c)((t) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            (O && r.isAvailableOnlyForPlus && R(), Q && r.isAvailableOnlyForPlus && H.open());
                            return;
                        }
                        if (V) return void R();
                        let e = !F && (2 === t.detail || (1 === t.detail && r.hasTrackLink && !B.modal.isOpened));
                        return Z && !e
                            ? void H.open()
                            : ((0, n.P)(t, b().ripple), F)
                              ? void tr()
                              : 2 === t.detail
                                ? void to()
                                : void (1 === t.detail && r.hasTrackLink && !B.modal.isOpened && (te(), Z && H.open()));
                    }),
                    tn = null == N ? void 0 : N({ onPlayButtonClick: tr, isPlaying: f, isCurrent: E, isLoading: q, playButtonIconSize: L });
                return (0, a.jsxs)(x.C, {
                    ref: $,
                    'aria-label': U,
                    'data-intersection-property-id': K,
                    onClick: tl,
                    className: (0, s.$)(b().root, { [b().root_disabled]: !r.isAvailable, [b().root_current]: E && F }, i),
                    ...j,
                    children: [g, tn, A, T],
                });
            });
        },
        75217: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => P });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(39004),
                n = i(61493),
                d = i(3392),
                c = i(4254),
                u = i(56348),
                m = i(24574),
                _ = i(27954),
                p = i(19410),
                h = i(12929),
                v = i(32652),
                x = i(97522),
                k = i(40846),
                C = i(61755),
                y = i(87221),
                A = i(30408),
                b = i(12752),
                g = i.n(b),
                T = i(40150),
                N = i.n(T);
            let P = (0, r.PA)((t) => {
                var e, i, r, b, T;
                let {
                        track: P,
                        className: f,
                        withAuthor: E,
                        withSecondaryColor: M = !1,
                        withListeningProgress: I = !1,
                        captionSize: D = 'm',
                        explicitSize: L = 'xs',
                        withExplicitMark: S,
                        titleContainerClassName: j,
                        textClassName: O,
                        playContextParams: R,
                        withTimeLeftText: w = !0,
                        ignoreDislikedStyles: B,
                        albumArtists: F,
                        withCustomTooltip: Y = !0,
                        hasLineClamp: z = !0,
                        withSavingQueryParams: H,
                        beforeTitle: $,
                        afterTitle: K,
                        withContextMenuArtists: G,
                        withArtistLink: W,
                    } = t,
                    {
                        sonataState: U,
                        slam: q,
                        settings: { isMobile: X },
                    } = (0, _.g)(),
                    { formatMessage: V } = (0, l.A)(),
                    Q = (0, C.$)({ withCustomTooltip: Y }),
                    Z = (0, y.O)({ track: P, withSavingQueryParams: H, entityType: h.n.AUDIOBOOK }),
                    J = !!(I && R && P.shouldRememberPosition && P.streamProgress && P.durationMs),
                    tt =
                        P.id === (null == (e = U.entityMeta) ? void 0 : e.id) &&
                        (null == (r = U.entityMeta) || null == (i = r.streamProgress) ? void 0 : i.endPositionSec),
                    te = (0, A.d)(J, P.streamProgress, tt),
                    ti = ((t, e) => {
                        let {
                                isMobile: i,
                                isOfflineModeEnabled: a,
                                shouldHideAudiobookInfo: s,
                                albumArtists: r,
                                withAuthor: o,
                                withArtistLink: l,
                                withExplicitMark: n,
                            } = e,
                            d = (0, k.B)(t, { isMobile: i, isOfflineModeEnabled: a, albumArtists: r, withArtistLink: l, withExplicitMark: n }),
                            c = !!(o && d.artists.length > 0 && !s);
                        return { ...d, hasAuthor: c };
                    })(P, {
                        isMobile: X,
                        isOfflineModeEnabled: q.isOfflineModeEnabled,
                        shouldHideAudiobookInfo: te,
                        albumArtists: F,
                        withAuthor: E,
                        withArtistLink: W,
                        withExplicitMark: S,
                    }),
                    ta = ((t, e, i, a) => {
                        let { canEnableCustomTooltip: s, isMobile: r } = i,
                            o = t.shouldShowRemovedTitle ? e({ id: 'track-title.audiobook-not-found' }) : t.title;
                        return {
                            displayTitle: o,
                            ariaLabel: e({ id: 'entity-names.audiobook-name' }, { bookName: a }),
                            titleAttribute: s || t.shouldShowRemovedTitle ? void 0 : o,
                            versionTitleAttribute: s ? void 0 : t.version,
                            isTooltipEnabled: s && !r,
                        };
                    })(ti, V, { canEnableCustomTooltip: Q, isMobile: X }, null == (b = P.mainAlbum) ? void 0 : b.title),
                    ts = (0, o.useCallback)(
                        (t) =>
                            (0, a.jsx)(d.m_, {
                                enabled: ta.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: ta.displayTitle,
                                hoverSettings: p.V,
                                children: (0, a.jsx)(c.HL, {
                                    className: g().title,
                                    type: 'entity',
                                    size: D,
                                    variant: 'span',
                                    title: ta.titleAttribute,
                                    ...t,
                                    children: ta.displayTitle,
                                }),
                            }),
                        [ta.isTooltipEnabled, ta.titleAttribute, D, ta.displayTitle],
                    ),
                    tr = null == (T = ti.link) ? void 0 : T.href,
                    to = (0, o.useMemo)(
                        () =>
                            ti.shouldShowRemovedTitle
                                ? ta.displayTitle
                                : void 0 !== tr
                                  ? (0, a.jsx)(x.N, {
                                        'aria-label': ta.ariaLabel,
                                        className: g().albumLink,
                                        href: tr,
                                        title: ta.titleAttribute,
                                        onClick: Z,
                                        'data-test-id': n.Kq.track.TRACK_TITLE,
                                        children: ts(),
                                    })
                                  : ts({ 'data-test-id': n.Kq.track.TRACK_TITLE }),
                        [ti.shouldShowRemovedTitle, tr, ta.ariaLabel, ta.displayTitle, ts, ta.titleAttribute, Z],
                    ),
                    tl = (0, o.useMemo)(() => +!!z, [z]);
                return (0, a.jsx)('div', {
                    className: (0, s.$)(g().root, { [g().root_disabled]: !P.isAvailable, [g().root_disliked]: P.isDisliked && !B, [g().root_withSecondaryColor]: M }, f),
                    children: (0, a.jsxs)('div', {
                        className: (0, s.$)(g().metaContainer, N().metaContainer, { [N().metaContainer_oneLine]: !E }),
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(g().titleContainer, j, N().titleContainer),
                                children: [
                                    (0, a.jsxs)(c.HL, {
                                        className: (0, s.$)(g().text, O),
                                        type: 'entity',
                                        size: D,
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            $,
                                            to,
                                            ti.version &&
                                                (0, a.jsxs)(c.HL, {
                                                    className: (0, s.$)(g().text, g().version),
                                                    type: 'entity',
                                                    size: D,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ta.versionTitleAttribute,
                                                    children: ['\xa0', ti.version],
                                                }),
                                        ],
                                    }),
                                    ti.explicitMark &&
                                        (0, a.jsx)(v.N, {
                                            containerClassName: g().explicitMarkContainer,
                                            getDescriptionTexts: P.getDescriptionTexts,
                                            variant: ti.explicitMark,
                                            className: g().explicitMark,
                                            size: L,
                                            trackId: P.id,
                                        }),
                                    K,
                                ],
                            }),
                            ti.hasAuthor &&
                                (0, a.jsx)(c.HL, {
                                    type: 'entity',
                                    size: D,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, s.$)(g().text, N().artists, O),
                                    children: (0, a.jsx)(u.i, {
                                        className: (0, s.$)(g().text, { [g().artists]: z }, O),
                                        linkClassName: (0, s.$)(g().text, g().link),
                                        captionClassName: (0, s.$)(g().text, g().artistCaption),
                                        artists: ti.artists,
                                        withLink: ti.withArtistLink,
                                        lineClamp: tl,
                                        captionSize: D,
                                        withContextMenu: G,
                                    }),
                                }),
                            J &&
                                P.streamProgress &&
                                R &&
                                (0, a.jsx)(m.B, {
                                    className: (0, s.$)(N().progress, {
                                        [N().progress_withPreviousInfo]: ti.hasAuthor,
                                        [N().progress_disabled]: !P.isAvailable || P.isDisliked,
                                    }),
                                    id: P.id,
                                    albumId: P.albumId,
                                    streamProgress: P.streamProgress,
                                    durationMs: P.durationMs || 0,
                                    playContextParams: R,
                                    withTimeLeftText: w,
                                }),
                        ],
                    }),
                });
            });
        },
        79276: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => s, L: () => r });
            let a = (t, e) => t.getDate() === e.getDate() && t.getMonth() === e.getMonth() && t.getFullYear() === e.getFullYear();
            var s = (function (t) {
                return ((t.TODAY = 'today'), (t.YESTERDAY = 'yesterday'), (t.DATE = 'date'), (t.DATE_WITH_YEAR = 'date-with-year'), t);
            })({});
            let r = (t) => {
                let e = new Date();
                if (a(e, t)) return 'today';
                let i = new Date();
                return (i.setDate(i.getDate() - 1), a(i, t)) ? 'yesterday' : e.getFullYear() !== t.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        81024: (t, e, i) => {
            'use strict';
            i.d(e, { L: () => s });
            var a = i(25895);
            let s = (t) => (0, a.u)('/album/:albumId', { params: { albumId: t } });
        },
        85957: (t) => {
            t.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        89514: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        97805: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => h });
            var a = i(25839),
                s = i(3718),
                r = i(82298),
                o = i(74631),
                l = i(39004),
                n = i(23976),
                d = i(47399),
                c = i.n(d);
            let u = (t) => {
                let { isActive: e, className: i } = t,
                    { formatMessage: s } = (0, l.A)(),
                    d = (0, o.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                return (0, a.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, r.$)(c().root, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: c().infoContainer,
                            children: [
                                (0, a.jsx)('div', { className: c().coverContainer, children: (0, a.jsx)(n.W, { isActive: e, className: c().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: c().textContainer, children: (0, a.jsx)(n.W, { isActive: e, className: c().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(n.W, { isActive: e, className: c().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(64813),
                _ = i.n(m);
            let p = (t) => {
                    let { isActive: e, className: i } = t,
                        { formatMessage: s } = (0, l.A)(),
                        d = (0, o.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                    return (0, a.jsxs)('div', {
                        'aria-label': d,
                        'aria-live': e ? 'polite' : 'off',
                        'aria-busy': e,
                        className: (0, r.$)(_().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, a.jsx)(n.W, { isActive: e, className: _().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: _().textContainer, children: (0, a.jsx)(n.W, { isActive: e, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(n.W, { isActive: e, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                h = (t) => {
                    let { isActive: e, variant: i, className: r } = t;
                    switch (i) {
                        case s.X.PLAYLIST:
                            return (0, a.jsx)(p, { isActive: e, className: r });
                        case s.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: e, className: r });
                    }
                };
        },
        99401: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => N });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(39004),
                l = i(93588),
                n = i(43354),
                d = (function (t) {
                    return (
                        (t.YANDEX = 'YANDEX'),
                        (t.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (t.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (t.AGREEMENT = 'AGREEMENT'),
                        (t.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (t.HELP = 'HELP'),
                        (t.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        t
                    );
                })({});
            let c = (t, e, i) => {
                    switch (t) {
                        case d.YANDEX:
                            if ('ru' === e) return 'https://ya.ru';
                            return;
                        case d.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(e, '/all?lang=').concat(i);
                        case d.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(e, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case d.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case d.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case d.HELP:
                            return 'https://yandex.'.concat(e, '/support/music/index.html?lang=').concat(i);
                        case d.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(e, '/legal/confidential/').concat(i);
                    }
                },
                u = (t) => {
                    let { formatMessage: e, language: i, tld: a, year: s } = t;
                    return {
                        year: s,
                        yandexMusic: { id: d.YANDEX, title: e({ id: 'footer.yandex-music' }), url: c(d.YANDEX, a, i) },
                        yandexProjects: { id: d.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: c(d.YANDEX_PROJECTS, a, i) },
                    };
                };
            var m = i(10959),
                _ = i(89514);
            let p = (t) => t(new Date(), (0, _.m)());
            var h = i(96433),
                v = i(27954),
                x = i(400),
                k = i.n(x),
                C = i(61493),
                y = i(4254),
                A = i(97522);
            let b = (t) => {
                    let { className: e, data: i } = t;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(k().copyrights, e),
                        'data-test-id': C.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: k().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(k().copyrightLink, k().yandexMusicLink),
                                        'data-test-id': C.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: k().copyrightLink,
                                'data-test-id': C.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                g = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, a.jsxs)('div', {
                        className: k().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: k().list,
                                'data-test-id': C.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: s } = t;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: k().item,
                                            children: (0, a.jsx)(A.N, { target: '_blank', href: s, className: k().link, 'data-test-id': C.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, a.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: k().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': C.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (t) => {
                    let { className: e, data: i } = t;
                    return (0, a.jsxs)('footer', {
                        className: (0, s.$)(k().root, k().important, e),
                        'data-test-id': C.S7.FOOTER,
                        children: [(0, a.jsx)(g, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(b, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, v.g)(),
                    { formatDate: s, formatMessage: r } = (0, o.A)(),
                    { language: l } = (0, h.h)(),
                    n = u({ formatMessage: r, language: l, tld: i.tld, year: p(s) });
                return (0, a.jsx)(b, { className: e, data: n });
            });
            let N = (0, r.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: r, location: _, user: x } = (0, v.g)(),
                    { formatDate: C, formatMessage: y } = (0, o.A)(),
                    { isEnabled: A } = null != (e = (0, n.P)()) ? e : {},
                    { language: b } = (0, h.h)(),
                    g = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: a, language: s, tld: r, userRegion: o, year: l } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: a, language: s, userRegion: r } = t,
                                    o = { id: d.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: c(d.COPYRIGHT_HOLDER, a, s) },
                                    l = { id: d.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: c(d.PRIVACY_POLICY, a, s) },
                                    n = { id: d.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: c(d.AGREEMENT, a, s) },
                                    u = { id: d.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: c(d.RECOMMENDATION_RULES, a, s) },
                                    m = { id: d.HELP, title: e({ id: 'footer.links-help' }), url: c(d.HELP, a, s) },
                                    _ = [o, n, u];
                                return (i && 'ru' === r && _.push(l), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: a, language: s, tld: r, userRegion: o }),
                            disclaimer: (0, m.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: u({ formatMessage: i, language: s, tld: r, year: l }),
                        };
                    })({
                        checkExperiment: (t, e) => r.checkExperiment(t, e),
                        formatMessage: y,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: b,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(C),
                    });
                return (0, a.jsx)(T, { className: (0, s.$)({ [k().root_withOffsetForDeeplink]: A }, i), data: g });
            });
        },
    },
]);
