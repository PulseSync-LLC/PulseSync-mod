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
        2493: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => r });
            var a = i(39004),
                s = i(38977);
            let r = (t, e) => {
                let { formatMessage: i } = (0, a.A)(),
                    { hours: r, minutes: o, seconds: n } = (0, s.e)(t),
                    { hours: l, minutes: d, seconds: c } = (0, s.e)(e);
                return i(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((t / e) * 100), beginHours: r, beginMinutes: o, beginSeconds: n, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        3718: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => a });
            var a = (function (t) {
                return ((t.PLAYLIST = 'playlist'), (t.ALBUM = 'album'), t);
            })({});
        },
        3912: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => L });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(84059),
                n = i(74631),
                l = i(39004),
                d = i(8487),
                c = i(87138),
                u = i(61493),
                _ = i(71035),
                m = i(49656),
                p = i(3392),
                h = i(4254),
                v = i(24574),
                x = i(79276),
                C = i(40207),
                k = i(85686),
                y = i(27954),
                g = i(19410),
                A = i(12929),
                N = i(62926),
                P = i(97522),
                T = i(74245),
                b = i(81024),
                f = i(85251),
                E = i(91171),
                M = i(87221),
                D = i(30408),
                I = i(12752),
                j = i.n(I),
                S = i(43910),
                O = i.n(S);
            let L = (0, r.PA)((t) => {
                var e, i, r, I, S, L, R;
                let {
                        track: w,
                        className: B,
                        withPodcastName: F,
                        withDate: Y,
                        withSecondaryColor: z = !1,
                        withListeningProgress: H = !1,
                        captionSize: $ = 'm',
                        explicitSize: K = 'xs',
                        withExplicitMark: G,
                        titleContainerClassName: U,
                        textClassName: W,
                        playContextParams: q,
                        withTimeLeftText: X = !0,
                        ignoreDislikedStyles: V,
                        withCustomTooltip: Q = !0,
                        withSavingQueryParams: Z,
                        beforeTitle: J,
                        afterTitle: tt,
                        titleLineClamp: te = 1,
                        podcastMetaClassName: ti,
                        progressClassName: ta,
                        withAlbumTitleLink: ts,
                    } = t,
                    {
                        fullscreenPlayer: tr,
                        sonataState: to,
                        slam: tn,
                        settings: { isMobile: tl },
                    } = (0, y.g)(),
                    { formatMessage: td } = (0, l.A)(),
                    tc = (0, E.$)({ withCustomTooltip: Q }),
                    tu = (0, o.useSearchParams)(),
                    t_ = (0, k.Z)(null != (L = null == (e = w.mainAlbum) ? void 0 : e.url) ? L : ''),
                    tm = (0, n.useMemo)(() => {
                        var t;
                        let e = td({ id: 'entity-names.podcast-name' }, { podcastName: w.title });
                        return ''.concat(e, ' ').concat(null != (t = w.version) ? t : '');
                    }, [td, w.title, w.version]),
                    tp = !!(H && q && w.shouldRememberPosition && w.streamProgress && w.durationMs),
                    th =
                        w.id === (null == (i = to.entityMeta) ? void 0 : i.id) &&
                        (null == (I = to.entityMeta) || null == (r = I.streamProgress) ? void 0 : r.endPositionSec),
                    tv = (0, D.d)(tp, w.streamProgress, th),
                    tx = ((t, e) => {
                        let {
                                isMobile: i,
                                isOfflineModeEnabled: a,
                                mainAlbum: s,
                                shouldHidePodcastInfo: r,
                                withPodcastName: o,
                                withDate: n,
                                withExplicitMark: l,
                                withAlbumTitleLink: d,
                                query: c,
                            } = e,
                            u = (0, f.q)(t, { isMobile: i, isOfflineModeEnabled: a, query: c }),
                            _ = (null == l || l) && t.disclaimers ? (0, T.DQ)(t.disclaimers) : null,
                            m = null != o && o && !r ? s : null,
                            p = m && (null == d || d) ? (0, b.L)(m.id) : null,
                            h = (null == n || n) && !r ? t.pubDate : void 0,
                            v = t.pubDate ? new Date(t.pubDate) : new Date(),
                            C = (0, x.L)(v),
                            k = !!(h && [x.r.TODAY, x.r.YESTERDAY].includes(C));
                        return { ...u, explicitMark: _, album: m, albumLink: p, pubDate: h, dateType: C, isSoonDate: k };
                    })(w, {
                        isMobile: tl,
                        isOfflineModeEnabled: tn.isOfflineModeEnabled,
                        mainAlbum: w.mainAlbum,
                        shouldHidePodcastInfo: tv,
                        withPodcastName: F,
                        withDate: Y,
                        withExplicitMark: G,
                        withAlbumTitleLink: ts,
                        query: Z ? Object.fromEntries(tu) : void 0,
                    }),
                    tC = (0, C.l)({ entity: null != (R = w.mainAlbum) ? R : null, entityType: A.n.PODCAST, callback: t_ }),
                    tk = (0, _.c)((t) => {
                        (tr.modal.isOpened && tr.modal.close(), tC(t));
                    }),
                    ty = (0, M.O)({ track: w, withSavingQueryParams: Z, entityType: A.n.PODCAST }),
                    tg = (0, n.useCallback)(() => {
                        switch (tx.dateType) {
                            case x.r.TODAY:
                                return (0, a.jsx)(d.A, { id: 'interface-actions.date-today' });
                            case x.r.YESTERDAY:
                                return (0, a.jsx)(d.A, { id: 'interface-actions.date-yesterday' });
                            case x.r.DATE_WITH_YEAR:
                                return (0, a.jsx)(c.XU, { value: tx.pubDate, month: 'long', day: 'numeric', year: 'numeric' });
                            default:
                                return (0, a.jsx)(c.XU, { value: tx.pubDate, month: 'long', day: 'numeric' });
                        }
                    }, [tx.pubDate, tx.dateType]),
                    tA = (0, n.useCallback)(
                        (t) =>
                            (0, a.jsx)(p.m_, {
                                enabled: tc && !tl,
                                offsetOptions: 4,
                                placement: 'top',
                                text: w.title,
                                hoverSettings: g.V,
                                children: (0, a.jsx)(h.HL, {
                                    className: j().title,
                                    type: 'entity',
                                    size: $,
                                    variant: 'span',
                                    title: tc ? void 0 : w.title,
                                    ...t,
                                    children: w.title,
                                }),
                            }),
                        [tl, tc, $, w.title],
                    ),
                    tN = null == (S = tx.link) ? void 0 : S.href,
                    tP = (0, n.useMemo)(
                        () =>
                            tx.shouldShowRemovedTitle
                                ? (0, a.jsx)(p.m_, {
                                      enabled: tc && !tl,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: td({ id: 'track-title.podcast-not-found' }),
                                      hoverSettings: g.V,
                                      children: (0, a.jsx)('span', { children: (0, a.jsx)(d.A, { id: 'track-title.podcast-not-found' }) }),
                                  })
                                : void 0 !== tN
                                  ? (0, a.jsx)(P.N, {
                                        onClick: ty,
                                        className: j().albumLink,
                                        href: tN,
                                        'aria-label': tm,
                                        title: tc ? void 0 : w.title,
                                        'data-test-id': u.Kq.track.TRACK_TITLE,
                                        children: tA(),
                                    })
                                  : tA({ 'data-test-id': u.Kq.track.TRACK_TITLE }),
                        [tl, tx.shouldShowRemovedTitle, tN, w.title, tA, tc, td, ty, tm],
                    ),
                    tT = (0, m.L)(() => {
                        let t = tx.album;
                        if (!t) return;
                        let e = (0, a.jsx)(p.m_, {
                            enabled: tc && !tl,
                            offsetOptions: 4,
                            placement: 'top',
                            text: t.title,
                            hoverSettings: g.V,
                            children: (0, a.jsx)(h.HL, { variant: 'span', type: 'entity', size: $, className: j().albumTitle, children: t.title }),
                        });
                        return tx.albumLink
                            ? (0, a.jsx)(P.N, {
                                  'aria-label': td({ id: 'entity-names.podcast-name' }, { podcastName: t.title }),
                                  className: j().link,
                                  href: tx.albumLink.href,
                                  title: tc ? void 0 : t.title,
                                  onClick: tk,
                                  'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: e,
                              })
                            : (0, a.jsx)('span', { 'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: e });
                    });
                return (0, a.jsx)('div', {
                    className: (0, s.$)(j().root, { [j().root_disabled]: !w.isAvailable, [j().root_disliked]: w.isDisliked && !V, [j().root_withSecondaryColor]: z }, B),
                    children: (0, a.jsxs)('div', {
                        className: (0, s.$)(j().metaContainer, O().podcastMetaContainer, ti),
                        children: [
                            tp &&
                                q &&
                                w.streamProgress &&
                                (0, a.jsx)(v.B, {
                                    className: (0, s.$)(O().progress, ta, {
                                        [O().progress_withPreviousInfo]: tx.album || tx.pubDate,
                                        [O().progress_disabled]: !w.isAvailable || w.isDisliked,
                                    }),
                                    id: w.id,
                                    albumId: w.albumId,
                                    streamProgress: w.streamProgress,
                                    durationMs: w.durationMs || 0,
                                    playContextParams: q,
                                    withTimeLeftText: X,
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(j().titleContainer, U, O().podcastTitleContainer),
                                children: [
                                    (0, a.jsxs)(h.HL, {
                                        className: (0, s.$)(j().text, W),
                                        type: 'entity',
                                        size: $,
                                        variant: 'div',
                                        lineClamp: te,
                                        children: [
                                            J,
                                            tP,
                                            tx.version &&
                                                (0, a.jsxs)(h.HL, {
                                                    className: (0, s.$)(j().text, j().version),
                                                    type: 'entity',
                                                    size: $,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: tc ? void 0 : tx.version,
                                                    children: ['\xa0', tx.version],
                                                }),
                                        ],
                                    }),
                                    tx.explicitMark &&
                                        (0, a.jsx)(N.N, {
                                            containerClassName: j().explicitMarkContainer,
                                            getDescriptionTexts: w.getDescriptionTexts,
                                            variant: tx.explicitMark,
                                            className: j().explicitMark,
                                            size: K,
                                            trackId: w.id,
                                        }),
                                    tt,
                                ],
                            }),
                            (tx.album || tx.pubDate) &&
                                (0, a.jsxs)(h.HL, {
                                    type: 'entity',
                                    size: $,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, s.$)(j().text, O().podcastName, W),
                                    children: [
                                        tT,
                                        tx.pubDate &&
                                            (0, a.jsx)(h.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: $,
                                                className: (0, s.$)({
                                                    [O().dateWithName]: !!tx.album,
                                                    [O().soonDate]: tx.isSoonDate,
                                                    [O().dateDisabled]: !w.isAvailable,
                                                    [O().dateDisliked]: w.isDisliked && !V,
                                                }),
                                                children: tg(),
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
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
                            n = (function (e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? t({ id: 'time.hours-left' }, { hours: e }) : t({ id: 'time.hours' }, { hours: e });
                            })(r, i);
                        return o > 0 ? ''.concat(n, ' ').concat(s(o)) : n;
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
                n = i(8487),
                l = i(61493),
                d = i(28068),
                c = i(66738),
                u = i(4254),
                _ = i(16886),
                m = i(50209),
                p = i(30296),
                h = i(27954),
                v = i(2493),
                x = i(11708),
                C = i(22106),
                k = i.n(C);
            let y = (0, r.PA)((t) => {
                var e, i, r, C, y, g, A, N, P;
                let { className: T, id: b, albumId: f, streamProgress: E, durationMs: M, playContextParams: D, withTimeLeftText: I = !0, isFinishedLabelHidden: j } = t,
                    S = (0, p.e)(),
                    { sonataState: O, album: L } = (0, h.g)(),
                    R = Math.floor(M / 1e3),
                    [w, B] = (0, o.useState)(!1),
                    F = (0, x.$)(),
                    { isPlaying: Y, isCurrent: z } = (0, m.D)({ playContextParams: D, entityId: f ? ''.concat(b, ':').concat(f) : b });
                ((0, o.useEffect)(() => {
                    if (!z) return void B(!1);
                    let t =
                        null == S
                            ? void 0
                            : S.state.playerState.status.onChange(() => {
                                  (null == S ? void 0 : S.state.playerState.status.value) === _.MT.BUFFERING && B(!0);
                              });
                    return () => {
                        null == t || t();
                    };
                }, [S, E, z, Y]),
                    (0, o.useEffect)(() => {
                        var t;
                        (null == L || null == (t = L.meta) ? void 0 : t.listeningFinished)
                            ? (E.updateEndPositionSec(0), E.updateEverFinished(!0))
                            : (null == L ? void 0 : L.allTracksUnfinished) && E.updateEverFinished(!1);
                    }, [E, null == L ? void 0 : L.allTracksUnfinished, null == L || null == (e = L.meta) ? void 0 : e.listeningFinished]),
                    (0, o.useEffect)(() => {
                        var t, e;
                        (z &&
                            (null == O || null == (t = O.entityMeta) ? void 0 : t.streamProgress) &&
                            E &&
                            O.entityMeta.streamProgress.hasEverFinished !== E.hasEverFinished &&
                            E.updateEverFinished(!!O.entityMeta.streamProgress.hasEverFinished),
                            R - ((null == E ? void 0 : E.endPositionSec) || 0) < 1 &&
                                ((null == O || null == (e = O.entityMeta) ? void 0 : e.streamProgress) &&
                                    z &&
                                    (O.entityMeta.streamProgress.updateEverFinished(!0), O.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == E || E.updateEverFinished(!0)));
                    }, [
                        z,
                        null == O || null == (i = O.entityMeta) ? void 0 : i.streamProgress,
                        null == O || null == (C = O.entityMeta) || null == (r = C.streamProgress) ? void 0 : r.hasEverFinished,
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
                                          i = null == O || null == (t = O.entityMeta) ? void 0 : t.streamProgress;
                                      (0 !== e.position && w && E.updateEndPositionSec(e.position),
                                          z &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(e.position), 10) &&
                                              (null == i || i.updateEndPositionSec(e.position)));
                                  });
                        return () => {
                            null == t || t();
                        };
                    }, [S, E, z, Y, w, b, null == O ? void 0 : O.entityMeta]));
                let H = (z && (null == O || null == (g = O.entityMeta) || null == (y = g.streamProgress) ? void 0 : y.endPositionSec)) || E.endPositionSec,
                    $ = (0, v.m)(null != H ? H : 0, R),
                    K = (0, o.useMemo)(() => {
                        var t, e, i;
                        if (
                            ((z && (null == O || null == (e = O.entityMeta) || null == (t = e.streamProgress) ? void 0 : t.hasEverFinished)) ||
                                (null == E ? void 0 : E.hasEverFinished) ||
                                (null == L || null == (i = L.meta) ? void 0 : i.listeningFinished)) &&
                            !j
                        )
                            return (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, s.$)(k().text, { [k().text_withoutTimeLeft]: !I }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, a.jsx)(n.A, { id: 'time.finished' }),
                                    }),
                                    (0, a.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: k().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
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
                                    className: (0, s.$)(k().text, { [k().text_withoutTimeLeft]: !I }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: o,
                                }),
                                r > 1 || j
                                    ? (0, a.jsx)(d.q, {
                                          'aria-valuetext': $,
                                          'aria-busy': z && Y,
                                          value: H,
                                          max: R,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, a.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: k().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        R,
                        null == E ? void 0 : E.hasEverFinished,
                        I,
                        F,
                        z,
                        Y,
                        null == O || null == (N = O.entityMeta) || null == (A = N.streamProgress) ? void 0 : A.hasEverFinished,
                        null == L || null == (P = L.meta) ? void 0 : P.listeningFinished,
                        j,
                        H,
                        $,
                    ]);
                return (0, a.jsx)('div', { className: (0, s.$)(k().root, T), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: K });
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
        27559: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => f });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                n = i(39004),
                l = i(8487),
                d = i(61493),
                c = i(3392),
                u = i(4254),
                _ = i(4331),
                m = i(24574),
                p = i(27954),
                h = i(19410),
                v = i(12929),
                x = i(62926),
                C = i(97522),
                k = i(40846),
                y = i(91171),
                g = i(87221),
                A = i(30408),
                N = i(12752),
                P = i.n(N),
                T = i(40150),
                b = i.n(T);
            let f = (0, r.PA)((t) => {
                var e, i, r, N, T;
                let {
                        track: f,
                        className: E,
                        withAuthor: M,
                        withSecondaryColor: D = !1,
                        withListeningProgress: I = !1,
                        captionSize: j = 'm',
                        explicitSize: S = 'xs',
                        withExplicitMark: O,
                        titleContainerClassName: L,
                        textClassName: R,
                        playContextParams: w,
                        withTimeLeftText: B = !0,
                        ignoreDislikedStyles: F,
                        albumArtists: Y,
                        withCustomTooltip: z = !0,
                        hasLineClamp: H = !0,
                        withSavingQueryParams: $,
                        beforeTitle: K,
                        afterTitle: G,
                        withContextMenuArtists: U,
                        withArtistLink: W,
                    } = t,
                    {
                        sonataState: q,
                        slam: X,
                        settings: { isMobile: V },
                    } = (0, p.g)(),
                    { formatMessage: Q } = (0, n.A)(),
                    Z = (0, y.$)({ withCustomTooltip: z }),
                    J = (0, g.O)({ track: f, withSavingQueryParams: $, entityType: v.n.AUDIOBOOK }),
                    tt = !!(I && w && f.shouldRememberPosition && f.streamProgress && f.durationMs),
                    te =
                        f.id === (null == (e = q.entityMeta) ? void 0 : e.id) &&
                        (null == (r = q.entityMeta) || null == (i = r.streamProgress) ? void 0 : i.endPositionSec),
                    ti = (0, A.d)(tt, f.streamProgress, te),
                    ta = ((t, e) => {
                        let {
                                isMobile: i,
                                isOfflineModeEnabled: a,
                                shouldHideAudiobookInfo: s,
                                albumArtists: r,
                                withAuthor: o,
                                withArtistLink: n,
                                withExplicitMark: l,
                            } = e,
                            d = (0, k.B)(t, { isMobile: i, isOfflineModeEnabled: a, albumArtists: r, withArtistLink: n, withExplicitMark: l }),
                            c = !!(o && d.artists.length > 0 && !s);
                        return { ...d, hasAuthor: c };
                    })(f, {
                        isMobile: V,
                        isOfflineModeEnabled: X.isOfflineModeEnabled,
                        shouldHideAudiobookInfo: ti,
                        albumArtists: Y,
                        withAuthor: M,
                        withArtistLink: W,
                        withExplicitMark: O,
                    }),
                    ts = (0, o.useCallback)(
                        (t) =>
                            (0, a.jsx)(c.m_, {
                                enabled: Z && !V,
                                offsetOptions: 4,
                                placement: 'top',
                                text: f.title,
                                hoverSettings: h.V,
                                children: (0, a.jsx)(u.HL, {
                                    className: P().title,
                                    type: 'entity',
                                    size: j,
                                    variant: 'span',
                                    title: Z ? void 0 : f.title,
                                    ...t,
                                    children: f.title,
                                }),
                            }),
                        [V, Z, j, f.title],
                    ),
                    tr = null == (N = ta.link) ? void 0 : N.href,
                    to = (0, o.useMemo)(() => {
                        if (ta.shouldShowRemovedTitle) return (0, a.jsx)(l.A, { id: 'track-title.audiobook-not-found' });
                        if (void 0 !== tr) {
                            var t;
                            return (0, a.jsx)(C.N, {
                                'aria-label': Q({ id: 'entity-names.audiobook-name' }, { bookName: null == (t = f.mainAlbum) ? void 0 : t.title }),
                                className: P().albumLink,
                                href: tr,
                                title: Z ? void 0 : f.title,
                                onClick: J,
                                'data-test-id': d.Kq.track.TRACK_TITLE,
                                children: ts(),
                            });
                        }
                        return ts({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [ta.shouldShowRemovedTitle, tr, null == (T = f.mainAlbum) ? void 0 : T.title, f.title, ts, Q, Z, J]),
                    tn = (0, o.useMemo)(() => +!!H, [H]);
                return (0, a.jsx)('div', {
                    className: (0, s.$)(P().root, { [P().root_disabled]: !f.isAvailable, [P().root_disliked]: f.isDisliked && !F, [P().root_withSecondaryColor]: D }, E),
                    children: (0, a.jsxs)('div', {
                        className: (0, s.$)(P().metaContainer, b().metaContainer, { [b().metaContainer_oneLine]: !M }),
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(P().titleContainer, L, b().titleContainer),
                                children: [
                                    (0, a.jsxs)(u.HL, {
                                        className: (0, s.$)(P().text, R),
                                        type: 'entity',
                                        size: j,
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            K,
                                            to,
                                            ta.version &&
                                                (0, a.jsxs)(u.HL, {
                                                    className: (0, s.$)(P().text, P().version),
                                                    type: 'entity',
                                                    size: j,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Z ? void 0 : ta.version,
                                                    children: ['\xa0', ta.version],
                                                }),
                                        ],
                                    }),
                                    ta.explicitMark &&
                                        (0, a.jsx)(x.N, {
                                            containerClassName: P().explicitMarkContainer,
                                            getDescriptionTexts: f.getDescriptionTexts,
                                            variant: ta.explicitMark,
                                            className: P().explicitMark,
                                            size: S,
                                            trackId: f.id,
                                        }),
                                    G,
                                ],
                            }),
                            ta.hasAuthor &&
                                (0, a.jsx)(u.HL, {
                                    type: 'entity',
                                    size: j,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, s.$)(P().text, b().artists, R),
                                    children: (0, a.jsx)(_.i, {
                                        className: (0, s.$)(P().text, { [P().artists]: H }, R),
                                        linkClassName: (0, s.$)(P().text, P().link),
                                        captionClassName: (0, s.$)(P().text, P().artistCaption),
                                        artists: ta.artists,
                                        withLink: ta.withArtistLink,
                                        lineClamp: tn,
                                        captionSize: j,
                                        withContextMenu: U,
                                    }),
                                }),
                            tt &&
                                f.streamProgress &&
                                w &&
                                (0, a.jsx)(m.B, {
                                    className: (0, s.$)(b().progress, {
                                        [b().progress_withPreviousInfo]: ta.hasAuthor,
                                        [b().progress_disabled]: !f.isAvailable || f.isDisliked,
                                    }),
                                    id: f.id,
                                    albumId: f.albumId,
                                    streamProgress: f.streamProgress,
                                    durationMs: f.durationMs || 0,
                                    playContextParams: w,
                                    withTimeLeftText: B,
                                }),
                        ],
                    }),
                });
            });
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
        39099: (t, e, i) => {
            'use strict';
            i.d(e, { C: () => A });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                n = i(71035),
                l = i(11823),
                d = i(79367),
                c = i(47009),
                u = i(52512),
                _ = i(29872),
                m = i(61561),
                p = i(85743),
                h = i(16886),
                v = i(27954),
                x = i(18284),
                C = i(39004),
                k = i(26115),
                y = i(51027),
                g = i.n(y);
            let A = (0, r.PA)((t) => {
                var e;
                let {
                        className: i,
                        track: r,
                        meta: y,
                        beforeBlock: A,
                        controls: N,
                        playButtonCellRender: P,
                        withLightning: T,
                        isPlaying: b,
                        isCurrent: f,
                        togglePlay: E,
                        restartPlay: M,
                        onPlayClick: D,
                        playButtonIconSize: I,
                        skipFreemiumCloseListeningPaywall: j = !1,
                        ...S
                    } = t,
                    { shouldShowBuySubscriptionModal: O, showBuySubscriptionModal: L } = (0, _.q)(),
                    {
                        track: R,
                        fullscreenPlayer: w,
                        settings: { isMobile: B },
                        album: F,
                        albumCPA: { isPlusCPAPlayerBarEnabled: Y },
                        paywall: { modal: z },
                    } = (0, v.g)(),
                    { ref: H, intersectionPropertyId: $ } = (0, u.n)(),
                    K = (0, c.b)(),
                    G = (0, d.P)(),
                    U = ((t) => {
                        let { track: e, withLightning: i } = t,
                            { formatMessage: a } = (0, C.A)();
                        return e.isAvailable
                            ? [e.artistsNames, e.title, e.version, i && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(e.artistsNames, ' ')
                                  .concat(e.title);
                    })({ withLightning: T, track: r }),
                    W = ((t) => {
                        let { sonataState: e } = (0, v.g)(),
                            i = e.status === h.MT.LOADING_MEDIA_SOURCE || e.status === h.MT.BUFFERING;
                        if (t && e.entityMeta) {
                            let a = e.entityMeta.entityId;
                            return i && a === t;
                        }
                        return i;
                    })(r.entityId),
                    q = Y(F.id, null == (e = F.meta) ? void 0 : e.isNonMusic),
                    X = r.isAvailable && O && !q,
                    V = (0, m.N)(),
                    Q = r.isAvailable && V && !q && !j,
                    Z = (0, k.w)({ track: r, callback: E }),
                    J = (0, n.c)(() => {
                        R.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    tt = (0, k.w)({ track: r, callback: J }),
                    { sendPlaySearchFeedback: te } = (0, p.z)(),
                    [ti, ta] = (0, o.useState)(!1),
                    ts = (0, n.c)(() => {
                        if (!G()) {
                            if (X) return void L();
                            if (Q) return void z.open();
                            (ti || b || (ta(!0), null == te || te()), Z(), K(!b), null == D || D(!b));
                        }
                    }),
                    tr = (0, n.c)(() => {
                        if (b) return void M();
                        ts();
                    }),
                    to = (0, n.c)((t) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            (O && r.isAvailableOnlyForPlus && L(), V && r.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (X) return void L();
                        let e = !B && (2 === t.detail || (1 === t.detail && r.hasTrackLink && !w.modal.isOpened));
                        return Q && !e
                            ? void z.open()
                            : ((0, l.P)(t, g().ripple), B)
                              ? void ts()
                              : 2 === t.detail
                                ? void tr()
                                : void (1 === t.detail && r.hasTrackLink && !w.modal.isOpened && (tt(), Q && z.open()));
                    }),
                    tn = null == P ? void 0 : P({ onPlayButtonClick: ts, isPlaying: b, isCurrent: f, isLoading: W, playButtonIconSize: I });
                return (0, a.jsxs)(x.C, {
                    ref: H,
                    'aria-label': U,
                    'data-intersection-property-id': $,
                    onClick: to,
                    className: (0, s.$)(g().root, { [g().root_disabled]: !r.isAvailable, [g().root_current]: f && B }, i),
                    ...S,
                    children: [A, tn, y, N],
                });
            });
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
        51549: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => P });
            var a = i(25839),
                s = i(88204),
                r = i(75501);
            let o = (t, e) => {
                let { isAlbum: i } = e,
                    a = t.type === r.S.AUDIOBOOK || t.type === r.S.FAIRY_TALE,
                    s = a && i;
                return { isAudiobook: a, withPosition: s, withAuthor: a && !i, isCoverAvailable: !s && t.isAvailable };
            };
            var n = i(82298),
                l = i(74631),
                d = i(61493),
                c = i(50209),
                u = i(27954),
                _ = i(6349),
                m = i(62661),
                p = i(74756),
                h = i(27559),
                v = i(61801),
                x = i(39099),
                C = i(32833),
                k = i.n(C),
                y = i(17742);
            let g = (0, s.PA)((t) => {
                let {
                        track: e,
                        playContextParams: i,
                        className: s,
                        withDNDBlock: r,
                        isDragging: C,
                        draggingClassName: g,
                        withTimeLeftText: A,
                        ignoreDislikedStyles: N,
                        viewType: P = y.D.PLAYLIST,
                        position: T,
                        beforeTitle: b,
                        handleRemove: f,
                        removeButtonAriaLabel: E,
                    } = t,
                    M = (0, c.D)({ playContextParams: i, entityId: e.entityId }),
                    {
                        settings: { isMobile: D },
                    } = (0, u.g)(),
                    I = o(e, { isAlbum: P === y.D.ALBUM }),
                    j = (0, l.useCallback)(
                        (t) =>
                            I.withPosition
                                ? (0, a.jsx)(v.G, { track: e, position: T, className: k().playButtonCell, ...t })
                                : (0, a.jsx)(_.q, {
                                      isAvailable: I.isCoverAvailable,
                                      isDisliked: e.isDisliked,
                                      coverUri: e.coverUri,
                                      title: e.title,
                                      className: k().playButtonCell,
                                      ignoreDislikedStyles: N,
                                      radius: 'xs',
                                      ...t,
                                  }),
                        [N, T, I.withPosition, I.isCoverAvailable, e],
                    );
                return (0, a.jsx)(x.C, {
                    className: (0, n.$)(s, { [k().trackWithDots]: r, [k().important]: r }),
                    track: e,
                    meta: (0, a.jsx)(h.Z, {
                        beforeTitle: b,
                        withAuthor: I.withAuthor,
                        explicitSize: 'xxxs',
                        track: e,
                        playContextParams: i,
                        withListeningProgress: !0,
                        withTimeLeftText: A,
                        ignoreDislikedStyles: N,
                        withSavingQueryParams: !0,
                        withArtistLink: !D,
                    }),
                    playButtonCellRender: j,
                    controls: (0, a.jsx)(p.Q, {
                        track: e,
                        className: k().controlsBarCell,
                        ignoreDislikedStyles: N,
                        utmLink: i.contextData.utmLink,
                        handleRemove: f,
                        removeButtonAriaLabel: E,
                    }),
                    beforeBlock: r ? (0, a.jsx)(m.O, { className: (0, n.$)(k().dots, g), isDragging: C }) : void 0,
                    ...M,
                    'data-test-id': d.Kq.track.TRACK_AUDIOBOOK,
                });
            });
            var A = i(3912);
            let N = (0, s.PA)((t) => {
                    let {
                            track: e,
                            playContextParams: i,
                            withPodcastName: s = !1,
                            className: r,
                            withDNDBlock: h,
                            isDragging: v,
                            draggingClassName: C,
                            handleRemove: y,
                            withTimeLeftText: g,
                            ignoreDislikedStyles: N,
                            beforeTitle: P,
                            removeButtonAriaLabel: T,
                        } = t,
                        b = (0, c.D)({ playContextParams: i, entityId: e.entityId }),
                        {
                            settings: { isMobile: f },
                        } = (0, u.g)(),
                        E = o(e, { isAlbum: !1 }),
                        M = (0, l.useCallback)(
                            (t) =>
                                (0, a.jsx)(_.q, {
                                    isAvailable: E.isCoverAvailable,
                                    isDisliked: e.isDisliked,
                                    coverUri: e.coverUri,
                                    title: e.title,
                                    className: k().playButtonCell,
                                    ignoreDislikedStyles: N,
                                    radius: 'xs',
                                    ...t,
                                }),
                            [N, E.isCoverAvailable, e.coverUri, e.isDisliked, e.title],
                        );
                    return (0, a.jsx)(x.C, {
                        className: (0, n.$)(r, { [k().trackWithDots]: h, [k().important]: h }),
                        track: e,
                        meta: (0, a.jsx)(A.w, {
                            beforeTitle: P,
                            track: e,
                            playContextParams: i,
                            withPodcastName: s,
                            withListeningProgress: !0,
                            withTimeLeftText: g,
                            ignoreDislikedStyles: N,
                            explicitSize: 'xxxs',
                            withAlbumTitleLink: !f,
                        }),
                        playButtonCellRender: M,
                        controls: (0, a.jsx)(p.Q, {
                            handleRemove: y,
                            track: e,
                            className: k().controlsBarCell,
                            ignoreDislikedStyles: N,
                            utmLink: i.contextData.utmLink,
                            removeButtonAriaLabel: T,
                        }),
                        beforeBlock: h ? (0, a.jsx)(m.O, { className: (0, n.$)(k().dots, C), isDragging: v }) : void 0,
                        ...b,
                        'data-test-id': d.Kq.track.TRACK_PODCAST,
                    });
                }),
                P = (0, s.PA)((t) => (o(t.track, { isAlbum: t.viewType === y.D.ALBUM }).isAudiobook ? (0, a.jsx)(g, { ...t }) : (0, a.jsx)(N, { ...t })));
        },
        61801: (t, e, i) => {
            'use strict';
            i.d(e, { G: () => p });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(61493),
                n = i(4550),
                l = i(4254),
                d = i(27954),
                c = i(49438),
                u = i(74987),
                _ = i(14927),
                m = i.n(_);
            let p = (0, r.PA)((t) => {
                let { className: e, track: i, position: r, onPlayButtonClick: _, isPlaying: p, isCurrent: h, withDislikeStyles: v = !0, isLoading: x } = t,
                    {
                        settings: { isMobile: C },
                    } = (0, d.g)();
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(e, m().root, {
                        [m().root_disabled]: !i.isAvailable && !i.hasModalAccess,
                        [m().root_playing]: p,
                        [m().root_disliked]: i.isDisliked && v,
                        [m().root_current]: h,
                    }),
                    children: [
                        (i.isAvailable || i.hasModalAccess) &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !x && (0, a.jsx)(u.P, { stopAnimation: !p, className: m().playingAnimation }),
                                    x && C && (0, a.jsx)(n.y, { size: 'xs', className: m().spinner }),
                                    !C &&
                                        (0, a.jsx)(c.D, {
                                            variant: 'filled',
                                            className: m().playButton,
                                            iconClassName: m().playButtonIcon,
                                            isPlaying: p,
                                            onClick: _,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        r &&
                            (0, a.jsx)(l.HL, {
                                variant: 'div',
                                className: m().position,
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
            i.d(e, { O: () => l });
            var a = i(25839),
                s = i(82298),
                r = i(66738),
                o = i(28257),
                n = i.n(o);
            let l = (t) => {
                let { isDragging: e, className: i } = t;
                return (0, a.jsx)(r.I, { variant: 'dragDots', size: 'xxs', className: (0, s.$)(n().root, { [n().root_active]: e }, i), 'aria-hidden': !0 });
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
        74756: (t, e, i) => {
            'use strict';
            i.d(e, { Q: () => L });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                n = i(39004),
                l = i(8487),
                d = i(36619),
                c = i(61493),
                u = i(71035),
                _ = i(66738),
                m = i(3392),
                p = i(4254),
                h = i(17545),
                v = i(4071);
            let x = (t) => {
                let { className: e, variant: i = 'text', onClick: s, iconClassName: r, iconSize: l, size: d = 's', ariaLabel: u } = t,
                    { formatMessage: m } = (0, n.A)(),
                    p = null != u ? u : m({ id: 'play-queue.delete-from-queue' }),
                    h = (0, o.useCallback)(
                        (t) => {
                            (null == s || s(), t.stopPropagation());
                        },
                        [s],
                    );
                return (0, a.jsx)(v.$, {
                    className: e,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: h,
                    icon: (0, a.jsx)(_.I, { size: l, className: r, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var C = i(79367),
                k = i(34159),
                y = i(68215),
                g = i(85743),
                A = i(27954),
                N = i(64720),
                P = i(71996),
                T = i(6304),
                b = i(38097),
                f = i(91907),
                E = i(3407),
                M = i(34826),
                D = i.n(M),
                I = i(82684),
                j = i(85957),
                S = i.n(j);
            let O = (0, r.PA)((t) => {
                    let { track: e } = t,
                        { formatMessage: i } = (0, n.A)();
                    return e.isDownloaded
                        ? (0, a.jsx)(_.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : e.isDownloading
                          ? (0, a.jsx)(I.A, { value: e.downloadingProgress, size: 16, className: S().downloadingProgress, progressBarClassName: S().progress })
                          : null;
                }),
                L = (0, r.PA)((t) => {
                    var e, i;
                    let {
                            className: r,
                            track: v,
                            withLightning: M,
                            ignoreDislikedStyles: I,
                            onLikeClick: j,
                            utmLink: S,
                            withSecondaryColor: L,
                            handleRemove: R,
                            withTrailer: w = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: F,
                            hideControls: Y,
                        } = t,
                        { user: z, trailer: H } = (0, A.g)(),
                        { formatMessage: $ } = (0, n.A)(),
                        { sendLikeSearchFeedback: K } = (0, g.z)(),
                        [G, U] = (0, o.useState)(!1),
                        [W, q] = (0, o.useState)(!1),
                        X = (0, C.P)(),
                        V = (0, h.K)(v),
                        Q = ((t) =>
                            'number' != typeof t
                                ? null
                                : ((t) => {
                                      let e = Math.round((t || 0) / b.k7);
                                      return (0, f.E)(e);
                                  })(t))(v.durationMs),
                        Z = (0, y.P)(Math.round((null != (i = v.durationMs) ? i : 0) / 1e3)),
                        J = (0, k.F)(),
                        tt = z.hasPlus,
                        te = !v.isRemoved && v.isAvailable && !Y,
                        ti = (0, u.c)(async () => {
                            (G || v.isLiked || (U(!0), null == K || K()), await V(), null == j || j(v.isLiked));
                        }),
                        ta = (0, u.c)((t) => {
                            t.stopPropagation();
                        }),
                        ts = (0, u.c)((t) => {
                            if ((t.stopPropagation(), X())) return void t.preventDefault();
                            (H.openTrackTrailer(v.id), J(d.DomainObjectType.Track, v.id));
                        }),
                        tr = (0, o.useMemo)(() => {
                            if (te)
                                return (0, a.jsx)('div', {
                                    onClick: ta,
                                    children: (0, a.jsx)(E._, {
                                        track: v,
                                        open: W,
                                        onOpenChange: q,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(_.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: S,
                                        className: (0, s.$)(D().contextMenu, { [D().contextMenu_visible]: W }),
                                        handleRemove: R,
                                        withTrailer: w,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ta, R, W, te, w, v, S]);
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(D().root, D().controls, r, {
                            [D().controls_dislikedControls]: v.isDisliked,
                            [D().controls_dislikedColors]: v.isDisliked && !I,
                            [D().controls_disabled]: !v.isAvailable,
                            [D().root_withSecondaryColor]: L,
                        }),
                        children: [
                            M &&
                                (0, a.jsx)(_.I, {
                                    'aria-label': $({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: D().lightning,
                                    variant: 'lightning',
                                }),
                            v.isUGC &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(_.I, {
                                            'aria-label': $({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: D().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: (0, a.jsx)(l.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            tt && (0, a.jsx)('div', { className: (0, s.$)(D().item, D().downloadIcon), children: (0, a.jsx)(O, { track: v }) }),
                            R && !Y && (0, a.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, s.$)(D().item, D().removeButton), onClick: R, ariaLabel: F }),
                            te &&
                                (0, a.jsx)(T.WithOffline, {
                                    fallback: (0, a.jsx)(N.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, s.$)(D().item, D().likeIcon),
                                        isLiked: v.isLiked,
                                        onClick: ti,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (e = v.trailer) ? void 0 : e.isAvailable) &&
                                v.isAvailable &&
                                (0, a.jsx)(T.WithOffline, {
                                    fallback: (0, a.jsx)(P.k, {
                                        className: (0, s.$)(D().item, D().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ts,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(D().item, D().contextMenuWrapper),
                                children: [
                                    null !== Q &&
                                        (0, a.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, s.$)(D().duration, { [D().duration_hidden]: W && te }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Z,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: Q }),
                                        }),
                                    tr,
                                ],
                            }),
                        ],
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
                n = i(39004),
                l = i(23976),
                d = i(47399),
                c = i.n(d);
            let u = (t) => {
                let { isActive: e, className: i } = t,
                    { formatMessage: s } = (0, n.A)(),
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
                                (0, a.jsx)('div', { className: c().coverContainer, children: (0, a.jsx)(l.W, { isActive: e, className: c().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: c().textContainer, children: (0, a.jsx)(l.W, { isActive: e, className: c().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(l.W, { isActive: e, className: c().action, radius: 'l' }),
                    ],
                });
            };
            var _ = i(64813),
                m = i.n(_);
            let p = (t) => {
                    let { isActive: e, className: i } = t,
                        { formatMessage: s } = (0, n.A)(),
                        d = (0, o.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                    return (0, a.jsxs)('div', {
                        'aria-label': d,
                        'aria-live': e ? 'polite' : 'off',
                        'aria-busy': e,
                        className: (0, r.$)(m().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, a.jsx)(l.W, { isActive: e, className: m().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: m().textContainer, children: (0, a.jsx)(l.W, { isActive: e, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(l.W, { isActive: e, className: m().action, radius: 'l' }),
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
            i.d(e, { w: () => T });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(39004),
                n = i(93588),
                l = i(43354),
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
            var _ = i(10959),
                m = i(89514);
            let p = (t) => t(new Date(), (0, m.m)());
            var h = i(96433),
                v = i(27954),
                x = i(400),
                C = i.n(x),
                k = i(61493),
                y = i(4254),
                g = i(97522);
            let A = (t) => {
                    let { className: e, data: i } = t;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(C().copyrights, e),
                        'data-test-id': k.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(g.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': k.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(g.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': k.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, a.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: C().list,
                                'data-test-id': k.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: s } = t;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, a.jsx)(g.N, { target: '_blank', href: s, className: C().link, 'data-test-id': k.S7.FOOTER_LINK, children: i }),
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
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': k.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                P = (t) => {
                    let { className: e, data: i } = t;
                    return (0, a.jsxs)('footer', {
                        className: (0, s.$)(C().root, C().important, e),
                        'data-test-id': k.S7.FOOTER,
                        children: [(0, a.jsx)(N, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(A, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, v.g)(),
                    { formatDate: s, formatMessage: r } = (0, o.A)(),
                    { language: n } = (0, h.h)(),
                    l = u({ formatMessage: r, language: n, tld: i.tld, year: p(s) });
                return (0, a.jsx)(A, { className: e, data: l });
            });
            let T = (0, r.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: r, location: m, user: x } = (0, v.g)(),
                    { formatDate: k, formatMessage: y } = (0, o.A)(),
                    { isEnabled: g } = null != (e = (0, l.P)()) ? e : {},
                    { language: A } = (0, h.h)(),
                    N = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: a, language: s, tld: r, userRegion: o, year: n } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: a, language: s, userRegion: r } = t,
                                    o = { id: d.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: c(d.COPYRIGHT_HOLDER, a, s) },
                                    n = { id: d.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: c(d.PRIVACY_POLICY, a, s) },
                                    l = { id: d.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: c(d.AGREEMENT, a, s) },
                                    u = { id: d.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: c(d.RECOMMENDATION_RULES, a, s) },
                                    _ = { id: d.HELP, title: e({ id: 'footer.links-help' }), url: c(d.HELP, a, s) },
                                    m = [o, l, u];
                                return (i && 'ru' === r && m.push(n), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: a, language: s, tld: r, userRegion: o }),
                            disclaimer: (0, _.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: u({ formatMessage: i, language: s, tld: r, year: n }),
                        };
                    })({
                        checkExperiment: (t, e) => r.checkExperiment(t, e),
                        formatMessage: y,
                        isWebApplication: n.$3,
                        tld: m.tld,
                        language: A,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(k),
                    });
                return (0, a.jsx)(P, { className: (0, s.$)({ [C().root_withOffsetForDeeplink]: g }, i), data: N });
            });
        },
    },
]);
