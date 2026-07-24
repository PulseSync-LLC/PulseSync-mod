(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5160],
    {
        50: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => a, W: () => s });
            var i = r(55178);
            let a = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, i.useContext)(a);
        },
        1987: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    bindSnapshot: function () {
                        return n;
                    },
                    createAsyncLocalStorage: function () {
                        return s;
                    },
                    createSnapshot: function () {
                        return o;
                    },
                });
            let r = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class i {
                disable() {
                    throw r;
                }
                getStore() {}
                run() {
                    throw r;
                }
                exit() {
                    throw r;
                }
                enterWith() {
                    throw r;
                }
                static bind(e) {
                    return e;
                }
            }
            let a = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function s() {
                return a ? new a() : new i();
            }
            function n(e) {
                return a ? a.bind(e) : i.bind(e);
            }
            function o() {
                return a
                    ? a.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        4820: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => d });
            var i = r(32290),
                a = r(55178),
                s = r(21732),
                n = r(71926),
                o = r(91624),
                l = r.n(o);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: r } = e,
                    [o, d] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, i.jsx)(
                            n.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(r, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        5942: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var i = r(32290),
                a = r(92708),
                s = r(55178),
                n = r(60900),
                o = r(63380),
                l = r(45477),
                d = r(75582),
                c = r(57594),
                u = r(90357),
                m = r(20472),
                _ = r(97647),
                p = r(97755);
            let v = (e) => {
                    let { artist: t, closeToast: r } = e;
                    return (0, i.jsx)(p.O, {
                        closeToast: r,
                        entityVariant: _.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: m.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                h = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: r } = (0, d.l)(),
                        [m, _] = (0, s.useState)(!1),
                        { formatMessage: p } = (0, n.A)();
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void r((0, i.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let s = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                        _(!0);
                        let n = await e.toggleLike();
                        _(!1),
                            n === o.f.OK
                                ? r((0, i.jsx)(v, { artist: s }), { containerId: l.u.INFO })
                                : r((0, i.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [e, t.isAuthorized, m, p, r]);
                };
        },
        7462: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => n, r: () => o });
            var i = r(55178),
                a = r(60900),
                s = r(64605),
                n = (function (e) {
                    return (e.PIN = 'pin'), e;
                })({});
            let o = (e, t) => {
                let { formatMessage: r } = (0, a.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return r({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return r({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === t) return r({ id: 'entity-names.book' });
                            return r({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
                            return r({ id: 'entity-names.fairy-tale' });
                        default:
                            return r({ id: 'entity-names.album' });
                    }
                }, [e, r, t]);
            };
        },
        8677: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => D });
            var i = r(32290),
                a = r(63618),
                s = r(96103),
                n = r(55178),
                o = r(60900),
                l = r(39407),
                d = r(16172),
                c = r(21732),
                u = r(91027),
                m = r(82586),
                _ = r(70280),
                p = r(71926),
                v = r(17705),
                h = r(63423);
            let f = (e) => {
                let { className: t, variant: r = 'text', onClick: a, iconClassName: s, iconSize: l, size: d = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    p = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    v = (0, n.useCallback)(
                        (e) => {
                            null == a || a(), e.stopPropagation();
                        },
                        [a],
                    );
                return (0, i.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: r,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: v,
                    icon: (0, i.jsx)(m.I, { size: l, className: s, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var y = r(71735),
                x = r(54391),
                g = r(22191),
                C = r(28999),
                b = r(57594),
                T = r(92744),
                A = r(29268),
                S = r(4008),
                k = r(53161),
                j = r(52843),
                P = r(39400),
                I = r(54714),
                E = r.n(I),
                N = r(38420),
                O = r(92565),
                R = r.n(O);
            let L = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: r } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': r({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(N.A, { value: t.downloadingProgress, size: 16, className: R().downloadingProgress, progressBarClassName: R().progress })
                          : null;
                }),
                D = (0, s.PA)((e) => {
                    var t, r;
                    let {
                            className: s,
                            track: h,
                            withLightning: I,
                            ignoreDislikedStyles: N,
                            onLikeClick: O,
                            utmLink: R,
                            withSecondaryColor: D,
                            handleRemove: w,
                            withTrailer: M = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: F,
                            hideControls: z,
                        } = e,
                        { user: H, trailer: U } = (0, b.g)(),
                        { formatMessage: K } = (0, o.A)(),
                        { sendLikeSearchFeedback: V } = (0, C.z)(),
                        [Y, W] = (0, n.useState)(!1),
                        [G, $] = (0, n.useState)(!1),
                        q = (0, y.P)(),
                        X = (0, v.K)(h),
                        Z = (0, g.P)(Math.round((null != (r = h.durationMs) ? r : 0) / 1e3)),
                        J = (0, x.F)(),
                        Q = H.hasPlus,
                        ee = !h.isRemoved && h.isAvailable && !z,
                        et = (0, u.c)(async () => {
                            Y || h.isLiked || (W(!0), null == V || V()), await X(), null == O || O(h.isLiked);
                        }),
                        er = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, u.c)((e) => {
                            if ((e.stopPropagation(), q())) return void e.preventDefault();
                            U.openTrackTrailer(h.id), J(d.ky.Track, h.id);
                        }),
                        ea = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: er,
                                    children: (0, i.jsx)(P._, {
                                        track: h,
                                        open: G,
                                        onOpenChange: $,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, a.$)(E().contextMenu, { [E().contextMenu_visible]: G }),
                                        handleRemove: w,
                                        withTrailer: M,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [er, w, G, ee, M, h, R]);
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(E().root, E().controls, s, {
                            [E().controls_dislikedControls]: h.isDisliked,
                            [E().controls_dislikedColors]: h.isDisliked && !N,
                            [E().controls_disabled]: !h.isAvailable,
                            [E().root_withSecondaryColor]: D,
                        }),
                        children: [
                            I &&
                                (0, i.jsx)(m.I, {
                                    'aria-label': K({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: E().lightning,
                                    variant: 'lightning',
                                }),
                            h.isUGC &&
                                (0, i.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(m.I, {
                                            'aria-label': K({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: E().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(_.ZI, { children: (0, i.jsx)(l.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            Q && (0, i.jsx)('div', { className: (0, a.$)(E().item, E().downloadIcon), children: (0, i.jsx)(L, { track: h }) }),
                            w && !z && (0, i.jsx)(f, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(E().item, E().removeButton), onClick: w, ariaLabel: F }),
                            ee &&
                                (0, i.jsx)(S.WithOffline, {
                                    fallback: (0, i.jsx)(T.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, a.$)(E().item, E().likeIcon),
                                        isLiked: h.isLiked,
                                        onClick: et,
                                        disabled: !H.isAuthorized,
                                    }),
                                }),
                            (null == (t = h.trailer) ? void 0 : t.isAvailable) &&
                                h.isAvailable &&
                                (0, i.jsx)(S.WithOffline, {
                                    fallback: (0, i.jsx)(A.k, {
                                        className: (0, a.$)(E().item, E().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, a.$)(E().item, E().contextMenuWrapper),
                                children: [
                                    'number' == typeof h.durationMs &&
                                        (0, i.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(E().duration, { [E().duration_hidden]: G && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Z,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((e) => {
                                                    let t = Math.round((e || 0) / k.k7);
                                                    return (0, j.E)(t);
                                                })(h.durationMs),
                                            }),
                                        }),
                                    ea,
                                ],
                            }),
                        ],
                    });
                });
        },
        12989: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => f });
            var i = r(55178),
                a = r(16172),
                s = r(52068),
                n = r(6752),
                o = r(62376),
                l = r(1677),
                d = r(48922),
                c = r(84782),
                u = r(30915),
                m = r(18746),
                _ = r(2792),
                p = r(37240),
                v = r(51012),
                h = r(47498);
            let f = () => {
                let e = (0, o.U)(),
                    t = (0, s.st)(),
                    { hash: r } = (0, s.gf)(),
                    { pageId: f, displayReasonId: y } = (0, p.$)(),
                    { tabId: x, tabPos: g, isTabSelectedByDefault: C } = (0, h.R)(),
                    { offsetBlockPosY: b } = (0, u.u)(),
                    { blockType: T, blockId: A, blockPosX: S, blockPosY: k, mainObjectId: j, mainObjectType: P, displayReasonId: I } = (0, c.N)(),
                    { filterKey: E, filterValue: N, filterPos: O } = (0, m.G)(),
                    { objectType: R, objectsCount: L, objectId: D, objectPosX: w, objectPosY: M } = (0, _.J)(),
                    { skeleton: B } = (0, v.b)(),
                    F = null != I ? I : y,
                    z = (0, n.L)(() => (void 0 !== b && void 0 !== k ? b + k : k));
                return (0, i.useCallback)(
                    (i, s) => {
                        if (!t || !f || !d.xK.includes(f) || !d.fD.includes(f)) return;
                        let n = l.F[f];
                        if (!n) return;
                        let o = {
                            hash: r,
                            pageId: n,
                            entityType: T,
                            entityId: A,
                            entityPosX: S,
                            entityPosY: z,
                            objectsCount: L,
                            viewUuid: s,
                            objectType: R,
                            objectId: D,
                            objectPosX: w,
                            objectPosY: M,
                        };
                        void 0 !== E && ((o.filterKey = E), (o.filterValue = N), (o.filterPos = O)),
                            d.qG.includes(f) && ((o.tabId = x), (o.tabPos = g), (o.isTabSelectedByDefault = C)),
                            B && (o.skeletonId = B),
                            'string' == typeof j && 'string' == typeof P && ((o.mainObjectType = P), (o.mainObjectId = j)),
                            F && (o.displayReasonId = F);
                        let c = (0, a.Fx)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        c && (i ? (0, a.Pf)(t.evgenInstance, c) : (0, a.nv)(t.evgenInstance, c));
                    },
                    [t, F, A, S, z, T, E, O, N, r, C, e, j, P, D, w, M, R, L, f, B, x, g],
                );
            };
        },
        13757: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => a, L: () => s });
            let i = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var a = (function (e) {
                return (e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e;
            })({});
            let s = (e) => {
                let t = new Date();
                if (i(t, e)) return 'today';
                let r = new Date();
                return (r.setDate(r.getDate() - 1), i(r, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        13798: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => h });
            var i = r(32290),
                a = r(63618),
                s = r(96103),
                n = r(55178),
                o = r(60900),
                l = r(26252),
                d = r(21732),
                c = r(6752),
                u = r(82586),
                m = r(57594),
                _ = r(60244),
                p = r(90006),
                v = r.n(p);
            let h = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: s, containerClassName: p, variant: h, size: f = 'xxxs', ...y } = e,
                    { formatMessage: x } = (0, o.A)(),
                    {
                        settings: { isMobile: g },
                    } = (0, m.g)(),
                    [C, b] = (0, n.useState)(null),
                    T = (0, c.L)(() => {
                        switch (h) {
                            case l.JU.E:
                                return 'explicit';
                            case l.JU.AGE_12:
                            case l.JU.AGE_16:
                            case l.JU.AGE_18:
                                return 'adult';
                            case l.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    A = (0, n.useMemo)(() => x({ id: 'extra-explicit.explicit-mark' }), [x]);
                (0, n.useEffect)(() => {
                    r && r().then(b);
                }, [r, s]);
                let S = (null == C ? void 0 : C.join('\n')) || '',
                    k = !!(null == C ? void 0 : C.length) && !g,
                    j = S.length > 0 ? S : A;
                return (0, i.jsx)(_.k, {
                    description: S,
                    placement: 'bottom-start',
                    enabled: k,
                    children: (0, i.jsx)('span', {
                        className: p,
                        children: (0, i.jsx)(u.I, {
                            className: (0, a.$)(v().explicitMark, t),
                            'aria-label': j,
                            variant: T,
                            size: f,
                            ...y,
                            'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        13931: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => s });
            var i = r(55178),
                a = r(60900);
            let s = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, i.useMemo)(() => {
                    let r = '';
                    e.isLiked && !e.actualLikesCount
                        ? (r = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (r =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let i = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(i, ' ').concat(r);
                }, [t, e]);
            };
        },
        14257: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => i });
            var i = (function (e) {
                return (e.Dark = 'dark'), (e.Light = 'light'), e;
            })({});
        },
        14960: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => a });
            var i = r(57594);
            let a = (e, t, r) => {
                let {
                    settings: { isMobile: a },
                } = (0, i.g)();
                return !!(a && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (r && r > 0)));
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        19379: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a });
            var i = r(99029),
                a = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = i.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.ForceNextWeb = 'force_next_web'),
                        (e.PreventNextWeb = 'prevent_next_web'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.MocksConfiguration = 'mocksConfiguration'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        19529: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => c });
            var i = r(32290),
                a = r(63618),
                s = r(52138),
                n = r(6752),
                o = r(40229),
                l = r(75487),
                d = r.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: r,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: _,
                        className: p,
                        coverClassName: v,
                        entityCoverClassName: h,
                        controlClassName: f,
                        fallbackIconSize: y,
                    } = e,
                    x = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === s.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, a.$)(d().root, d()['root_radius_'.concat(x)], { [d().root_withShadow]: !!t.entityType }, p),
                    radius: x,
                    onPlayButtonClick: c,
                    isPlaying: r,
                    isCurrent: l,
                    alt: _,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: y,
                    coverClassName: v,
                    entityCoverClassName: h,
                    controlClassName: f,
                });
            };
        },
        21878: (e) => {
            e.exports = {
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
        23352: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(55178),
                a = r(12989),
                s = r(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    o = (0, a.D)(),
                    l = (0, i.useId)(),
                    d = (0, i.useContext)(s.B),
                    c = (0, i.useCallback)(
                        (i, a) => {
                            e ? e(i, r ? a : void 0) : o(i, a), t && d.unobserveElement(l);
                        },
                        [e, d, l, o, t, r],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            d.observeElement({ elementRef: n, elementId: l, callback: c }),
                            () => {
                                d.unobserveElement(l);
                            }
                        ),
                        [e, d, c, l, o],
                    ),
                    { ref: n, intersectionPropertyId: l }
                );
            };
        },
        26042: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            var i = r(32290),
                a = r(55178),
                s = r(10936);
            let n = (e) => {
                let { objectId: t, objectPosX: r, objectPosY: n, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u, children: m } = e,
                    _ = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: r, objectPosY: n, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u }),
                        [t, r, n, o, l, d, c, u],
                    );
                return (0, i.jsx)(s.l.Provider, { value: _, children: m });
            };
        },
        27616: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => O });
            var i = r(32290),
                a = r(63618),
                s = r(96103),
                n = r(21916),
                o = r(55178),
                l = r(60900),
                d = r(39407),
                c = r(81354),
                u = r(21732),
                m = r(91027),
                _ = r(6752),
                p = r(70280),
                v = r(71926),
                h = r(58294),
                f = r(13757),
                y = r(19383),
                x = r(84062),
                g = r(57594),
                C = r(53514),
                b = r(85017),
                T = r(13798),
                A = r(61258),
                S = r(24760),
                k = r(84141),
                j = r(14960),
                P = r(5856),
                I = r.n(P),
                E = r(21878),
                N = r.n(E);
            let O = (0, s.PA)((e) => {
                var t, r, s, P, E, O;
                let {
                        track: R,
                        className: L,
                        withPodcastName: D = !1,
                        withDate: w = !0,
                        withSecondaryColor: M = !1,
                        withListeningProgress: B = !1,
                        captionSize: F = 'm',
                        explicitSize: z = 'xs',
                        withExplicitMark: H = !0,
                        titleContainerClassName: U,
                        textClassName: K,
                        playContextParams: V,
                        withTimeLeftText: Y = !0,
                        ignoreDislikedStyles: W,
                        withCustomTooltip: G = !0,
                        withSavingQueryParams: $,
                        beforeTitle: q,
                        afterTitle: X,
                        titleLineClamp: Z = 1,
                        podcastMetaClassName: J,
                        progressClassName: Q,
                        withAlbumTitleLink: ee = !0,
                    } = e,
                    {
                        fullscreenPlayer: et,
                        sonataState: er,
                        settings: { isMobile: ei },
                    } = (0, g.g)(),
                    { formatMessage: ea } = (0, l.A)(),
                    es = (0, S.$)({ withCustomTooltip: G }),
                    en = (0, n.useSearchParams)(),
                    eo = R.getUrl($ ? Object.fromEntries(en) : void 0),
                    el = R.pubDate ? new Date(R.pubDate) : new Date(),
                    ed = (0, f.L)(el),
                    ec = !1,
                    eu = (0, x.Z)(null != (E = null == (t = R.mainAlbum) ? void 0 : t.url) ? E : ''),
                    em = (0, o.useMemo)(() => {
                        var e;
                        let t = ea({ id: 'entity-names.podcast-name' }, { podcastName: R.title });
                        return ''.concat(t, ' ').concat(null != (e = R.version) ? e : '');
                    }, [ea, R.title, R.version]),
                    e_ = !!(B && V && R.shouldRememberPosition && R.streamProgress && R.durationMs),
                    ep =
                        R.id === (null == (r = er.entityMeta) ? void 0 : r.id) &&
                        (null == (P = er.entityMeta) || null == (s = P.streamProgress) ? void 0 : s.endPositionSec),
                    ev = (0, j.d)(e_, R.streamProgress, ep),
                    eh = R.mainAlbum && D && !ev,
                    ef = R.pubDate && w && !ev,
                    ey = (0, y.l)({ entity: null != (O = R.mainAlbum) ? O : null, entityType: b.n.PODCAST, callback: eu }),
                    ex = (0, m.c)((e) => {
                        et.modal.isOpened && et.modal.close(), ey(e);
                    }),
                    eg = (0, k.O)({ track: R, withSavingQueryParams: $, entityType: b.n.PODCAST }),
                    eC = (0, o.useCallback)(() => {
                        switch (ed) {
                            case f.r.TODAY:
                                return (0, i.jsx)(d.A, { id: 'interface-actions.date-today' });
                            case f.r.YESTERDAY:
                                return (0, i.jsx)(d.A, { id: 'interface-actions.date-yesterday' });
                            case f.r.DATE_WITH_YEAR:
                                return (0, i.jsx)(c.XU, { value: R.pubDate, month: 'long', day: 'numeric', year: 'numeric' });
                            default:
                                return (0, i.jsx)(c.XU, { value: R.pubDate, month: 'long', day: 'numeric' });
                        }
                    }, [R.pubDate, ed]);
                R.pubDate && w && (ec = [f.r.TODAY, f.r.YESTERDAY].includes(ed));
                let eb = (0, o.useCallback)(
                        (e) =>
                            (0, i.jsx)(p.m_, {
                                enabled: es && !ei,
                                offsetOptions: 4,
                                placement: 'top',
                                text: R.title,
                                hoverSettings: C.V,
                                children: (0, i.jsx)(v.HL, {
                                    className: I().title,
                                    type: 'entity',
                                    size: F,
                                    variant: 'span',
                                    title: es ? void 0 : R.title,
                                    ...e,
                                    children: R.title,
                                }),
                            }),
                        [ei, es, F, R.title],
                    ),
                    eT = (0, o.useMemo)(
                        () =>
                            R.isRemoved
                                ? (0, i.jsx)(p.m_, {
                                      enabled: es && !ei,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ea({ id: 'track-title.podcast-not-found' }),
                                      hoverSettings: C.V,
                                      children: (0, i.jsx)('span', { children: (0, i.jsx)(d.A, { id: 'track-title.podcast-not-found' }) }),
                                  })
                                : R.hasTrackLink
                                  ? (0, i.jsx)(A.N, {
                                        onClick: eg,
                                        className: I().albumLink,
                                        href: eo,
                                        'aria-label': em,
                                        title: es ? void 0 : R.title,
                                        'data-test-id': u.Kq.track.TRACK_TITLE,
                                        children: eb(),
                                    })
                                  : eb({ 'data-test-id': u.Kq.track.TRACK_TITLE }),
                        [ei, R.isRemoved, R.hasTrackLink, R.title, eb, es, ea, eg, eo, em],
                    ),
                    eA = (0, _.L)(() => {
                        var e;
                        if (!eh) return;
                        let t = (0, i.jsx)(p.m_, {
                            enabled: es && !ei,
                            offsetOptions: 4,
                            placement: 'top',
                            text: R.mainAlbum.title,
                            hoverSettings: C.V,
                            children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: F, className: I().albumTitle, children: R.mainAlbum.title }),
                        });
                        return ee
                            ? (0, i.jsx)(A.N, {
                                  'aria-label': ea({ id: 'entity-names.podcast-name' }, { podcastName: R.mainAlbum.title }),
                                  className: I().link,
                                  href: null == (e = R.mainAlbum) ? void 0 : e.url,
                                  title: es ? void 0 : R.mainAlbum.title,
                                  onClick: ex,
                                  'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, i.jsx)('span', { 'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, i.jsx)('div', {
                    className: (0, a.$)(I().root, { [I().root_disabled]: !R.isAvailable, [I().root_disliked]: R.isDisliked && !W, [I().root_withSecondaryColor]: M }, L),
                    children: (0, i.jsxs)('div', {
                        className: (0, a.$)(I().metaContainer, N().podcastMetaContainer, J),
                        children: [
                            e_ &&
                                V &&
                                R.streamProgress &&
                                (0, i.jsx)(h.B, {
                                    className: (0, a.$)(N().progress, Q, {
                                        [N().progress_withPreviousInfo]: eh || ef,
                                        [N().progress_disabled]: !R.isAvailable || R.isDisliked,
                                    }),
                                    id: R.id,
                                    albumId: R.albumId,
                                    streamProgress: R.streamProgress,
                                    durationMs: R.durationMs || 0,
                                    playContextParams: V,
                                    withTimeLeftText: Y,
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, a.$)(I().titleContainer, U, N().podcastTitleContainer),
                                children: [
                                    (0, i.jsxs)(v.HL, {
                                        className: (0, a.$)(I().text, K),
                                        type: 'entity',
                                        size: F,
                                        variant: 'div',
                                        lineClamp: Z,
                                        children: [
                                            q,
                                            eT,
                                            !R.isRemoved &&
                                                R.version &&
                                                (0, i.jsxs)(v.HL, {
                                                    className: (0, a.$)(I().text, I().version),
                                                    type: 'entity',
                                                    size: F,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: es ? void 0 : R.version,
                                                    children: ['\xa0', R.version],
                                                }),
                                        ],
                                    }),
                                    R.explicitDisclaimer &&
                                        H &&
                                        (0, i.jsx)(T.N, {
                                            containerClassName: I().explicitMarkContainer,
                                            getDescriptionTexts: R.getDescriptionTexts,
                                            variant: R.explicitDisclaimer,
                                            className: I().explicitMark,
                                            size: z,
                                            trackId: R.id,
                                        }),
                                    X,
                                ],
                            }),
                            (eh || ef) &&
                                (0, i.jsxs)(v.HL, {
                                    type: 'entity',
                                    size: F,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, a.$)(I().text, N().podcastName, K),
                                    children: [
                                        eA,
                                        ef &&
                                            (0, i.jsx)(v.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: F,
                                                className: (0, a.$)({
                                                    [N().dateWithName]: eh,
                                                    [N().soonDate]: ec,
                                                    [N().dateDisabled]: !R.isAvailable,
                                                    [N().dateDisliked]: R.isDisliked && !W,
                                                }),
                                                children: eC(),
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        28099: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        28531: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => v });
            var i = r(32290),
                a = r(21916),
                s = r(55178),
                n = r(60900),
                o = r(39407),
                l = r(91027),
                d = r(45477),
                c = r(75582),
                u = r(20472),
                m = r(57594),
                _ = r(58534),
                p = r(90357);
            let v = (e) => {
                let { user: t, search: r } = (0, m.g)(),
                    { formatMessage: v } = (0, n.A)(),
                    { notify: h } = (0, c.l)(),
                    f = (0, a.useRouter)();
                return (
                    (0, s.useEffect)(() => {
                        r.isEmptyHistory && f.push(u.Z.search.href);
                    }, [r.isEmptyHistory, f]),
                    (0, l.c)(() => {
                        try {
                            t.account.data.uid && r.clearHistory({ userId: t.account.data.uid }),
                                h((0, i.jsx)(_.$, { message: (0, i.jsx)(o.A, { id: 'search.cleared-history' }) }), { containerId: d.u.INFO }),
                                e && e(),
                                f.push(u.Z.search.href);
                        } catch (e) {
                            h((0, i.jsx)(p.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: d.u.ERROR });
                        }
                    })
                );
            };
        },
        29268: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var i = r(32290),
                a = r(55178),
                s = r(60900),
                n = r(21732),
                o = r(63423),
                l = r(82586),
                d = r(59576);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: a,
                            radius: c,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: v,
                            forwardRef: h,
                            style: f,
                            children: y,
                        } = e,
                        { formatMessage: x } = (0, s.A)(),
                        g = x({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(o.$, {
                        className: v,
                        color: 'secondary',
                        radius: c,
                        size: a,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: _,
                        ref: h,
                        icon: (0, i.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': d.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        30542: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => s });
            var i = r(60900),
                a = r(64605);
            let s = (e, t) => {
                let { formatMessage: r } = (0, i.A)();
                if (e)
                    switch (t) {
                        case a._.AUDIOBOOK:
                            return r({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return r({ id: 'interface-actions.do-not-like' });
                        default:
                            return r({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case a._.AUDIOBOOK:
                        return r({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return r({ id: 'interface-actions.like' });
                    default:
                        return r({ id: 'interface-actions.subscribe' });
                }
            };
        },
        34883: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a });
            var i = r(19383);
            let a = (e) => {
                let { album: t, callback: r, shouldHistoryBack: a } = e;
                return (0, i.l)({ entity: t, callback: r, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        40199: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return i.workAsyncStorageInstance;
                    },
                });
            let i = r(89957);
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41566: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => c });
            var i = r(32290),
                a = r(96103),
                s = r(21732),
                n = r(82586),
                o = r(19740),
                l = r(30542),
                d = r(57594);
            let c = (0, a.PA)((e) => {
                let { isLiked: t, onClick: r, className: a, albumType: c, disabled: u } = e,
                    { user: m } = (0, d.g)(),
                    _ = t ? 'liked' : 'like',
                    p = (0, l.$)(t, c);
                return (0, i.jsx)(o.Dr, {
                    className: a,
                    onClick: r,
                    icon: (0, i.jsx)(n.I, { variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        41677: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => z });
            var i = r(32290),
                a = r(63618),
                s = r(96103),
                n = r(55178),
                o = r(70280),
                l = r(57594),
                d = r(53514),
                c = r(40484),
                u = r.n(c),
                m = r(60900),
                _ = r(16172),
                p = r(21732),
                v = r(91027),
                h = r(71926),
                f = r(47745),
                y = r(84062),
                x = r(28999),
                g = r(61258),
                C = r(19383);
            let b = (0, s.PA)((e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: a,
                            captionClassName: s,
                            captionSize: n = 'm',
                            allArtistsTitle: d,
                            withCustomTooltip: c,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: b } = (0, m.A)(),
                        {
                            track: T,
                            settings: { isMobile: A },
                        } = (0, l.g)(),
                        S = (0, y.Z)(t.url),
                        { sendNavigateSearchFeedback: k } = (0, x.z)(),
                        j = (0, f.N)(),
                        P = ((e) => {
                            let { artist: t, callback: r } = e,
                                { currentTrackInfo: i, fullscreenPlayer: a, fullscreenVideoPlayer: s } = (0, l.g)(),
                                { modal: n } = i;
                            return (0, C.l)({
                                entity: t,
                                callback: r,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), a.modal.isOpened && a.modal.close();
                                },
                                onAfterHandled: () => {
                                    s.modal.isOpened && (s.modal.close(), s.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, v.c)((e) => {
                                A && T.isOpened && T.close(), S(e);
                            }),
                        }),
                        I = (0, v.c)((e) => {
                            j({ to: _.QT.ArtistScreen }), null == k || k(), P(e);
                        });
                    return r && !t.various
                        ? (0, i.jsx)(g.N, {
                              'aria-label': b({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: I,
                              title: c ? void 0 : d || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: !d && c,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: d || t.name,
                                  hoverSettings: u,
                                  children: (0, i.jsx)(h.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: s, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: !d && c,
                              offsetOptions: 4,
                              placement: 'top',
                              text: d || t.name,
                              hoverSettings: u,
                              children: (0, i.jsx)(h.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: s,
                                  title: c ? void 0 : d || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                T = (e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: a,
                            captionClassName: s,
                            captionSize: o,
                            allArtistsTitle: l,
                            withCustomTooltip: d,
                            hoverSettings: c,
                            shouldUseSeparator: u = !0,
                        } = e,
                        m = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, i.jsx)(
                                                  b,
                                                  {
                                                      artist: t,
                                                      withLink: r,
                                                      linkClassName: a,
                                                      captionClassName: s,
                                                      captionSize: o,
                                                      allArtistsTitle: l,
                                                      withCustomTooltip: d,
                                                      hoverSettings: c,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, r, a, s, o, l, d, c]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(b, {
                                artist: t,
                                withLink: r,
                                linkClassName: a,
                                captionClassName: s,
                                captionSize: o,
                                allArtistsTitle: l,
                                withCustomTooltip: d,
                                hoverSettings: c,
                            }),
                            m,
                        ],
                    });
                };
            var A = r(39407),
                S = r(63887);
            let k = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: s } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(S.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(u().spoiler, r),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(A.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = r(8055),
                P = r(6752),
                I = r(78035),
                E = r(78176),
                N = r(83598),
                O = r.n(N);
            let R = (0, s.PA)((e) => {
                    let { label: t, artists: r, forwardRef: a } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: a, children: t }),
                            (0, i.jsx)(o.ZI, { className: O().tooltipContent, children: r.map((e) => (0, i.jsx)(E.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                L = (0, n.forwardRef)((e, t) => (0, i.jsx)(R, { forwardRef: t, ...e }));
            var D = r(19740),
                w = r(52598),
                M = r.n(w);
            let B = (0, s.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: s } = (0, m.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(M().root, M().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(E.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, s.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: a } = e,
                        [s, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, l.g)(),
                        c = (0, v.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, P.L)(() =>
                            (0, j.A)(() => {
                                c();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                c(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, c],
                        ),
                        (0, n.useEffect)(() => {
                            c();
                        }, [t, c]),
                        0 !== t.length)
                    )
                        return (s || d) && (!d || 1 !== t.length) ? (d ? (0, i.jsx)(B, { artists: t, label: r }) : (0, i.jsx)(L, { artists: t, label: r })) : r;
                }),
                z = (0, s.PA)((e) => {
                    let {
                            className: t,
                            artists: r = [],
                            separator: s = ', ',
                            lineClamp: c,
                            visibleArtistsCount: m,
                            withLink: _ = !0,
                            spoilerClassName: p,
                            linkClassName: v,
                            captionClassName: h,
                            captionSize: f,
                            variant: y = 'breakAll',
                            withAllArtistsTitle: x = !0,
                            withComposer: g = !0,
                            spoilerComponent: C,
                            withCustomTooltip: b = !0,
                            artistIdWithoutLink: A,
                            withContextMenu: S,
                        } = e,
                        j = (0, n.useRef)(null),
                        [P, I] = (0, n.useState)(!1),
                        E = x
                            ? r
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let r = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...r]) : [t.name, ...r];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(s)
                            : '',
                        {
                            settings: { isMobile: N },
                        } = (0, l.g)(),
                        O = 1 === r.length,
                        R = (0, n.useCallback)((e) => {
                            I(!0), e.preventDefault();
                        }, []),
                        L = (0, n.useMemo)(() => {
                            let e = r;
                            return (
                                m && !P && (e = r.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!g && t.isComposer) return e.length ? e : [];
                                    let r = (0, i.jsx)(
                                        T,
                                        {
                                            artist: t,
                                            linkClassName: v,
                                            captionClassName: h,
                                            withLink: _ && t.id !== A && (((!N || O) && S) || !S),
                                            captionSize: f,
                                            allArtistsTitle: E,
                                            withCustomTooltip: b,
                                            hoverSettings: d.V,
                                            shouldUseSeparator: !!s,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([s, r]) : [r];
                                }, [])
                            );
                        }, [r, m, P, g, N, O, S, v, h, _, A, f, E, b, s]),
                        D = (0, n.useMemo)(() => {
                            if (!P && m && m < r.length) {
                                let e = r.length - m;
                                return (0, n.isValidElement)(C) ? C : (0, i.jsx)(k, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: R });
                            }
                        }, [r.length, R, P, p, C, m]),
                        w = (0, n.useMemo)(() => {
                            if (c) return { WebkitLineClamp: c };
                        }, [c]),
                        M = (0, i.jsx)(o.m_, {
                            referenceRef: j,
                            enabled: !!(x && E) && b && !S && !N,
                            offsetOptions: 4,
                            placement: 'top',
                            text: E,
                            hoverSettings: d.V,
                            children: (0, i.jsxs)('div', {
                                style: w,
                                className: (0, a.$)(u().root, u()['root_variant_'.concat(y)], { [u().root_clamp]: c && c > 0 }, { [u().ellipsis]: !c }, t),
                                title: x && E && !b && !S ? E : void 0,
                                children: [L, D],
                            }),
                        });
                    return S ? (0, i.jsx)(F, { labelRef: j, artists: r, label: M }) : M;
                });
        },
        44989: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => l });
            var i,
                a = r(55178),
                s = {
                    810: (e) => {
                        e.exports = i || (i = r.t(a, 2));
                    },
                },
                n = {},
                o = {};
            (() => {
                Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0);
                let e = (function e(t) {
                    var r = n[t];
                    if (void 0 !== r) return r.exports;
                    var i = (n[t] = { exports: {} });
                    return s[t](i, i.exports, e), i.exports;
                })(810);
                o.useToggle = (t) => {
                    let [r, i] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        i(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            i((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            i(!0);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            i(!1);
                        }, []);
                    return { state: r, toggle: a, setState: i, toggleTrue: s, toggleFalse: n };
                };
            })(),
                o.__esModule;
            var l = o.useToggle;
        },
        46456: (e, t, r) => {
            'use strict';
            function i(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                r(32290),
                r(51767),
                r(40199),
                r(15406);
        },
        47593: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => I });
            var i = r(32290),
                a = r(90040),
                s = r(57249),
                n = r(63618),
                o = r(96103),
                l = r(65493),
                d = r(55178),
                c = r(52138),
                u = r(91027),
                m = r(6752),
                _ = r(44989),
                p = r(50162),
                v = r(79856),
                h = r(50),
                f = r(80451),
                y = {};
            ({
                7858: (e, t) => {
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                        (t.COLOR_BUCKETS = [
                            { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                            { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                            { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                            { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                            { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                            { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                            { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                            { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                            { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                            { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                            { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                            { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                            { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                            { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                            { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                            { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                        ]),
                        (t.LIGHTNESS_COLOR_BUCKETS = [
                            { name: 'amethyst', start: 0, end: 22 },
                            { name: 'indigo', start: 22, end: 32 },
                            { name: 'clover', start: 32, end: 42 },
                            { name: 'raspberry', start: 42, end: 51 },
                            { name: 'aquamarine', start: 51, end: 100 },
                        ]),
                        (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                        (t.findColorBucketByHue = (e) =>
                            t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                        (t.findColorBucketByLightness = (e) => {
                            let r = t.LIGHTNESS_COLOR_BUCKETS.find((r, i) =>
                                ((e, r, i) => (i === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? r >= e.start && r <= e.end : r >= e.start && r < e.end))(r, e, i),
                            );
                            return (0, t.findColorBucketByName)(null == r ? void 0 : r.name);
                        });
                },
            })[7858](0, y),
                y.COLOR_BUCKETS,
                y.LIGHTNESS_COLOR_BUCKETS,
                y.__esModule;
            var x = y.findColorBucketByHue;
            y.findColorBucketByLightness, y.findColorBucketByName;
            let g = (e, t, r) => {
                let i = (i) => {
                    let a = (i + e / 30) % 12,
                        s = t * Math.min(r, 1 - r);
                    return r - s * Math.max(-1, Math.min(a - 3, 9 - a, 1));
                };
                return [i(0), i(8), i(4)];
            };
            var C = r(14257);
            let b = { h: 16, s: 10, l: 65 },
                T = { h: 16, s: 15, l: 20 },
                A = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                    return Math.min(r, Math.max(t, e)) / 100;
                };
            var S = r(28099),
                k = r.n(S),
                j = r(49124);
            let P = l.default.default(
                () =>
                    Promise.resolve()
                        .then(r.bind(r, 90040))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = j.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(s, e).href);
            }
            let I = (0, o.PA)((e) => {
                let { agent: t, isPlaying: r } = e,
                    [a, s] = (0, d.useState)(null),
                    { state: o, toggleTrue: l } = (0, _.e)(!1),
                    { state: y, toggleTrue: S, toggleFalse: j } = (0, _.e)(!1),
                    { theme: I } = (0, h.W)(),
                    E = (0, d.useRef)(null),
                    N = t.entityType === c.h.ARTIST,
                    O = t.entityType === c.h.ALBUM || t.entityType === c.h.TRACK || t.entityType === c.h.PLAYLIST,
                    R = t.cover.color,
                    L = t.cover.uri,
                    D = (0, u.c)(async () => {
                        if (o && R && I) {
                            j();
                            let {
                                    color: e,
                                    glow1: r,
                                    glow2: i,
                                } = ((e) => {
                                    let t,
                                        { averageColor: r, theme: i, custom: a } = e,
                                        { h: s, s: n, l: o } = (0, f.hexToHsl)(r);
                                    if (a) {
                                        if (i === C.S.Dark) {
                                            let e = A(n + 5, 50, 100);
                                            return { color: g(s, e, A(o - 40, 12, 25)), glow1: g(s, e, A(o - 5, 45, 60)), glow2: g(s, e, A(o + 35, 80, 90)) };
                                        }
                                        let e = A(n - 2, 50, 100);
                                        return { color: g(s, e, A(o + 43, 80, 95)), glow1: g(s, e, A(o + 5, 45, 75)), glow2: g(s, e, A(o, 35, 55)) };
                                    }
                                    if (n > 12) {
                                        let e = x(s);
                                        t = e ? (0, f.hexToHsl)(e.primary) : { h: s, s: n, l: o };
                                    } else t = o > 35 ? b : T;
                                    return { color: g(t.h, t.s / 100, t.l / 100) };
                                })({ averageColor: R, theme: I, custom: !t.entityType }),
                                s = JSON.stringify({
                                    rules: [
                                        { id: 'color', type: 'Color', value: e },
                                        { id: 'glow_1', type: 'Color', value: r },
                                        { id: 'glow_2', type: 'Color', value: i },
                                    ],
                                });
                            await (null == a ? void 0 : a.setThemeData(s)), S();
                        }
                    }),
                    w = (0, u.c)(() => {
                        l(), D();
                    });
                (0, d.useEffect)(() => {
                    r ? null == a || a.play() : null == a || a.pause();
                }, [a, r]),
                    (0, d.useEffect)(() => {
                        D();
                    }, [R, D, I, o]),
                    (0, d.useEffect)(() => {
                        if (a)
                            return (
                                a.setUseFrameInterpolation(!1),
                                a.setRenderConfig({ devicePixelRatio: 0.1 }),
                                a.addEventListener('load', w),
                                () => {
                                    a.removeEventListener('load', w);
                                }
                            );
                    }, [a, w]);
                let M = !o || !y,
                    B = (0, m.L)(() => {
                        if (!E.current) return;
                        let e = N ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(E.current.clientWidth * e, 'px') };
                    });
                return (0, i.jsxs)('div', {
                    ref: E,
                    className: (0, n.$)(k().root, { [k().root_loading]: M }),
                    style: B,
                    children: [
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(k().cover, { [k().cover_round]: N, [k().cover_square]: O, [k().cover_loading]: M }),
                            children: [
                                t.entityType &&
                                    L &&
                                    (0, i.jsx)(p._V, { src: L, size: 200, fit: 'cover', withAvatarReplace: !0, className: k().image, withLoadingIndicator: !1 }),
                                (0, i.jsx)(P, { src: t.animationUri, loop: !0, dotLottieRefCallback: s, className: k().animation }),
                            ],
                        }),
                        (0, i.jsx)(v.W, { className: (0, n.$)(k().shimmer, { [k().shimmer_loading]: M }), isActive: !0, radius: N ? 'round' : 'm' }),
                    ],
                });
            });
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        52138: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { h: () => i }),
                (function (e) {
                    (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist');
                })(i || (i = {}));
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        54171: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => s });
            var i = r(19383),
                a = r(85017);
            let s = (e) => {
                let { track: t, callback: r, disclaimerRejectHandler: s } = e;
                return (0, i.l)({ entity: t, entityType: a.n.TRACK, callback: r, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        54714: (e) => {
            e.exports = {
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
        56008: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            let i = (0, r(55178).createContext)({ pageAlbumId: void 0 });
        },
        57167: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 99800));
        },
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        58294: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => g });
            var i = r(32290),
                a = r(63618),
                s = r(96103),
                n = r(55178),
                o = r(39407),
                l = r(21732),
                d = r(74924),
                c = r(82586),
                u = r(71926),
                m = r(72676),
                _ = r(90169),
                p = r(44128),
                v = r(57594),
                h = r(83557),
                f = r(66436),
                y = r(95082),
                x = r.n(y);
            let g = (0, s.PA)((e) => {
                var t, r, s, y, g, C, b, T, A;
                let { className: S, id: k, albumId: j, streamProgress: P, durationMs: I, playContextParams: E, withTimeLeftText: N = !0, isFinishedLabelHidden: O } = e,
                    R = (0, p.e)(),
                    { sonataState: L, album: D } = (0, v.g)(),
                    w = Math.floor(I / 1e3),
                    [M, B] = (0, n.useState)(!1),
                    F = (0, f.$)(),
                    { isPlaying: z, isCurrent: H } = (0, _.D)({ playContextParams: E, entityId: j ? ''.concat(k, ':').concat(j) : k });
                (0, n.useEffect)(() => {
                    if (!H) return void B(!1);
                    let e =
                        null == R
                            ? void 0
                            : R.state.playerState.status.onChange(() => {
                                  (null == R ? void 0 : R.state.playerState.status.value) === m.MT.BUFFERING && B(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [R, P, H, z]),
                    (0, n.useEffect)(() => {
                        var e;
                        (null == D || null == (e = D.meta) ? void 0 : e.listeningFinished)
                            ? (P.updateEndPositionSec(0), P.updateEverFinished(!0))
                            : (null == D ? void 0 : D.allTracksUnfinished) && P.updateEverFinished(!1);
                    }, [P, null == D ? void 0 : D.allTracksUnfinished, null == D || null == (t = D.meta) ? void 0 : t.listeningFinished]),
                    (0, n.useEffect)(() => {
                        var e, t;
                        H &&
                            (null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress) &&
                            P &&
                            L.entityMeta.streamProgress.hasEverFinished !== P.hasEverFinished &&
                            P.updateEverFinished(!!L.entityMeta.streamProgress.hasEverFinished),
                            w - ((null == P ? void 0 : P.endPositionSec) || 0) < 1 &&
                                ((null == L || null == (t = L.entityMeta) ? void 0 : t.streamProgress) &&
                                    H &&
                                    (L.entityMeta.streamProgress.updateEverFinished(!0), L.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == P || P.updateEverFinished(!0));
                    }, [
                        H,
                        null == L || null == (r = L.entityMeta) ? void 0 : r.streamProgress,
                        null == L || null == (y = L.entityMeta) || null == (s = y.streamProgress) ? void 0 : s.hasEverFinished,
                        P,
                        P.hasEverFinished,
                        P.endPositionSec,
                        w,
                    ]),
                    (0, n.useEffect)(() => {
                        if (!H) return;
                        let e =
                            null == R
                                ? void 0
                                : R.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = R.state.playerState.progress.value,
                                          r = null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress;
                                      0 !== t.position && M && P.updateEndPositionSec(t.position),
                                          H &&
                                              parseInt(''.concat(null == r ? void 0 : r.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == r || r.updateEndPositionSec(t.position));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [R, P, H, z, M, k, null == L ? void 0 : L.entityMeta]);
                let U = (H && (null == L || null == (C = L.entityMeta) || null == (g = C.streamProgress) ? void 0 : g.endPositionSec)) || P.endPositionSec,
                    K = (0, h.m)(null != U ? U : 0, w),
                    V = (0, n.useMemo)(() => {
                        var e, t, r;
                        if (
                            ((H && (null == L || null == (t = L.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == P ? void 0 : P.hasEverFinished) ||
                                (null == D || null == (r = D.meta) ? void 0 : r.listeningFinished)) &&
                            !O
                        )
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, a.$)(x().text, { [x().text_withoutTimeLeft]: !N }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, i.jsx)(o.A, { id: 'time.finished' }),
                                    }),
                                    (0, i.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: x().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!U || 0 === U) return;
                        let s = w - U,
                            n = F(s);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, a.$)(x().text, { [x().text_withoutTimeLeft]: !N }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: n,
                                }),
                                s > 1 || O
                                    ? (0, i.jsx)(d.q, {
                                          'aria-valuetext': K,
                                          'aria-busy': H && z,
                                          value: U,
                                          max: w,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, i.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: x().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        w,
                        null == P ? void 0 : P.hasEverFinished,
                        N,
                        F,
                        H,
                        z,
                        null == L || null == (T = L.entityMeta) || null == (b = T.streamProgress) ? void 0 : b.hasEverFinished,
                        null == D || null == (A = D.meta) ? void 0 : A.listeningFinished,
                        O,
                        U,
                        K,
                    ]);
                return (0, i.jsx)('div', { className: (0, a.$)(x().root, S), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: V });
            });
        },
        60244: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => c });
            var i = r(32290),
                a = r(21732),
                s = r(70280),
                n = r(71926),
                o = r(48736),
                l = r.n(o);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: r, title: o, placement: c = 'top', children: u } = e;
                    return (0, i.jsxs)(s.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, i.jsx)(s.ZI, {
                                className: l().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        63363: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => y });
            var i = r(32290),
                a = r(60900),
                s = r(91027),
                n = r(67732),
                o = r(45477),
                l = r(75582),
                d = r(57594),
                c = r(90357),
                u = r(92708),
                m = r(55178),
                _ = r(63380),
                p = r(96103),
                v = r(97755),
                h = r(79238);
            let f = (0, p.PA)((e) => {
                    let { album: t, closeToast: r, withLink: a } = e,
                        s = (0, h.b)(t);
                    return (0, i.jsx)(v.O, {
                        closeToast: r,
                        entityVariant: s,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: a,
                    });
                }),
                y = (e) => {
                    let {
                            user: t,
                            paywall: r,
                            albumCPA: { isPlusCPAEnabled: p },
                        } = (0, d.g)(),
                        { formatMessage: v } = (0, a.A)(),
                        { notify: h } = (0, l.l)(),
                        y = (() => {
                            let { notify: e } = (0, l.l)(),
                                [t, r] = (0, m.useState)(!1),
                                { formatMessage: n } = (0, a.A)();
                            return (0, s.c)(async (a) => {
                                let { album: s, withLink: l = !0, withNotification: d = !0 } = a;
                                if (t) return;
                                let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                                r(!0);
                                let p = await s.toggleLike();
                                r(!1),
                                    d &&
                                        (p === _.f.OK
                                            ? e((0, i.jsx)(f, { withLink: l, album: m }), { containerId: o.u.INFO })
                                            : e((0, i.jsx)(c.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: x } = (0, n.T)();
                    return (0, s.c)(async () => {
                        if (e)
                            return p({ pageAlbumId: x, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void r.openModal()
                                : t.isAuthorized
                                  ? y({ album: e })
                                  : void h((0, i.jsx)(c.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    });
                };
        },
        63397: (e, t, r) => {
            'use strict';
            function i(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                r(82105);
        },
        64910: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let i = r(32290),
                a = r(55178),
                s = r(63397);
            function n(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(46456);
            let o = { loader: () => Promise.resolve(n(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...o, ...e },
                        r = (0, a.lazy)(() => t.loader().then(n)),
                        l = t.loading;
                    function d(e) {
                        let n = l ? (0, i.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            o = !t.ssr || !!t.loading,
                            d = o ? a.Suspense : a.Fragment,
                            c = t.ssr
                                ? (0, i.jsxs)(i.Fragment, { children: [null, (0, i.jsx)(r, { ...e })] })
                                : (0, i.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, i.jsx)(r, { ...e }) });
                        return (0, i.jsx)(d, { ...(o ? { fallback: n } : {}), children: c });
                    }
                    return (d.displayName = 'LoadableComponent'), d;
                };
        },
        65493: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => a.a });
            var i = r(95574),
                a = r.n(i);
        },
        66162: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => v });
            var i = r(32290),
                a = r(16172),
                s = r(69319),
                n = r(77223),
                o = r(88446),
                l = r(42383),
                d = r(50476),
                c = r(4664),
                u = r(85015),
                m = r(20183),
                _ = r(26042),
                p = r(75265);
            let v = (e) => {
                let { item: t, index: r, pageId: v, sendSearchFeedback: h, blockPosition: f = 0, objectPosX: y, objectPosY: x, objectsCount: g } = e;
                switch (t.type) {
                    case s.n.PODCAST_EPISODE:
                        return (0, i.jsx)(
                            _.B,
                            {
                                objectType: a.ky.PodcastEpisode,
                                objectId: t.data.id,
                                objectPosX: y,
                                objectPosY: x,
                                objectsCount: g,
                                children: (0, i.jsx)(c.c, { pageId: v, track: t.data }),
                            },
                            t.data.id,
                        );
                    case s.n.UGC_TRACK:
                        return (0, i.jsx)(c.c, { pageId: v, track: t.data });
                    case s.n.TRACK:
                        return (0, i.jsx)(
                            _.B,
                            {
                                objectType: a.ky.Track,
                                objectId: t.data.id,
                                objectPosX: y,
                                objectPosY: x,
                                objectsCount: g,
                                children: (0, i.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: h, id: t.data.entityId, type: n.o.TRACK, blockPosition: f, position: r },
                                    children: (0, i.jsx)(c.c, { pageId: v, track: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.ARTIST:
                        return (0, i.jsx)(
                            _.B,
                            {
                                objectType: a.ky.Artist,
                                objectId: t.data.id,
                                objectPosX: y,
                                objectPosY: x,
                                objectsCount: g,
                                children: (0, i.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: h, id: t.data.id, type: n.o.ARTIST, blockPosition: f, position: r },
                                    children: (0, i.jsx)(l.c, { pageId: v, artist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.PLAYLIST:
                        return (0, i.jsx)(
                            _.B,
                            {
                                objectType: a.ky.Playlist,
                                objectId: t.data.id,
                                objectPosX: y,
                                objectPosY: x,
                                objectsCount: g,
                                children: (0, i.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: h, id: t.data.id, type: n.o.PLAYLIST, blockPosition: f, position: r },
                                    children: (0, i.jsx)(d.v, { pageId: v, playlist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.PODCAST:
                        return (0, i.jsx)(
                            _.B,
                            {
                                objectType: a.ky.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: y,
                                objectPosY: x,
                                objectsCount: g,
                                children: (0, i.jsx)(
                                    p.N.Provider,
                                    {
                                        value: { sendSearchFeedback: h, id: t.data.id, type: n.o.PODCAST, blockPosition: f, position: r },
                                        children: (0, i.jsx)(o.M, { pageId: v, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case s.n.ALBUM:
                        return (0, i.jsx)(
                            _.B,
                            {
                                objectType: a.ky.Album,
                                objectId: String(t.data.id),
                                objectPosX: y,
                                objectPosY: x,
                                objectsCount: g,
                                children: (0, i.jsx)(
                                    p.N.Provider,
                                    {
                                        value: { sendSearchFeedback: h, id: t.data.id, type: n.o.ALBUM, blockPosition: f, position: r },
                                        children: (0, i.jsx)(o.M, { pageId: v, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case s.n.WAVE: {
                        let e = t.data;
                        return (0, i.jsx)(
                            _.B,
                            {
                                objectType: a.ky.Wave,
                                objectId: e.stationId,
                                objectPosX: y,
                                objectPosY: x,
                                objectsCount: g,
                                children: (0, i.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: h, id: e.seedsId, type: n.o.WAVE, blockPosition: f, position: r },
                                    children: (0, i.jsx)(m.H, { vibe: e, cover: e.cover, description: e.description, agentVariant: u.h.SMALL }),
                                }),
                            },
                            e.stationId,
                        );
                    }
                    default:
                        return null;
                }
            };
        },
        66436: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => s });
            var i = r(55178),
                a = r(60900);
            let s = () => {
                let { formatMessage: e } = (0, a.A)();
                return (0, i.useCallback)(
                    function (t) {
                        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            i = Math.floor(t / 60),
                            a = function (t) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.minutes-left' }, { minutes: t });
                                return r ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.seconds-left' }, { seconds: t });
                                return r ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            })(Math.floor(t), r);
                        if (i < 60) return a(i, r);
                        let s = Math.floor(i / 60),
                            n = i % 60,
                            o = (function (t) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return r ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(s, r);
                        return n > 0 ? ''.concat(o, ' ').concat(a(n)) : o;
                    },
                    [e],
                );
            };
        },
        67732: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => s });
            var i = r(55178),
                a = r(56008);
            function s() {
                return (0, i.useContext)(a.H);
            }
        },
        68912: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => S });
            var i = r(32290),
                a = r(63618),
                s = r(96103),
                n = r(21916),
                o = r(55178),
                l = r(60900),
                d = r(39407),
                c = r(21732),
                u = r(70280),
                m = r(71926),
                _ = r(41677),
                p = r(28999),
                v = r(57594),
                h = r(53514),
                f = r(85017),
                y = r(13798),
                x = r(61258),
                g = r(25649),
                C = r(24760),
                b = r(84141),
                T = r(5856),
                A = r.n(T);
            let S = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: r,
                        track: s,
                        albumArtists: T,
                        withExplicitMark: S = !0,
                        withSecondaryColor: k,
                        captionSize: j = 'm',
                        explicitSize: P = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: E,
                        artistsClassName: N,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: R = !0,
                        hasLineClamp: L = !0,
                        withSavingQueryParams: D,
                        beforeTitle: w,
                        withArtistLink: M = !0,
                        withTrackLink: B = !0,
                        afterTitle: F,
                        withContextMenuArtists: z,
                    } = e,
                    { formatMessage: H } = (0, l.A)(),
                    { sendNavigateSearchFeedback: U } = (0, p.z)(),
                    {
                        settings: { isMobile: K },
                    } = (0, v.g)(),
                    V = (0, C.$)({ withCustomTooltip: R }),
                    Y = (0, n.useSearchParams)(),
                    W = s.getUrl(D ? Object.fromEntries(Y) : void 0),
                    G = (0, o.useMemo)(() => {
                        var e;
                        let t = H({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [H, s.title, s.version]),
                    $ = (0, b.O)({ track: s, onNavigate: U, withSavingQueryParams: D, entityType: f.n.TRACK }),
                    q = (0, o.useCallback)(
                        (e) => {
                            let t = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                            return (0, i.jsx)(u.m_, {
                                enabled: V && !K,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: h.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, a.$)(A().text, A().title),
                                    type: 'entity',
                                    size: j,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: s.title,
                                }),
                            });
                        },
                        [K, V, j, s.isRemoved, s.title, s.version],
                    ),
                    X = (0, o.useMemo)(() => {
                        let e = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                        return s.isRemoved
                            ? (0, i.jsx)(u.m_, {
                                  enabled: V && !K,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: H({ id: 'track-title.error-not-found' }),
                                  hoverSettings: h.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, a.$)(A().text, A().title),
                                      type: 'entity',
                                      size: j,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: V ? void 0 : H({ id: 'track-title.error-not-found' }),
                                      children: (0, i.jsx)(d.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : s.hasTrackLink && B
                              ? (0, i.jsx)(x.N, {
                                    onClick: $,
                                    className: A().albumLink,
                                    href: W,
                                    'aria-label': G,
                                    title: V ? void 0 : e,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: q(),
                                })
                              : q({ 'data-test-id': c.Kq.track.TRACK_TITLE });
                    }, [K, s.title, s.isRemoved, s.version, s.hasTrackLink, q, V, H, j, G, $, W, B]),
                    Z = (0, g.s)(s.artists, T),
                    J = (0, o.useMemo)(() => +!!L, [L]);
                return (0, i.jsx)('div', {
                    className: (0, a.$)(A().root, { [A().root_disabled]: !s.isAvailable, [A().root_disliked]: s.isDisliked && !O, [A().root_withSecondaryColor]: k }, t),
                    children: (0, i.jsxs)('div', {
                        className: A().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, a.$)(A().titleContainer, { [A().titleContainer_withVersion]: s.version }, r),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, a.$)(A().text, E),
                                        type: 'entity',
                                        size: j,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            w,
                                            X,
                                            !s.isRemoved &&
                                                s.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, a.$)(A().text, A().version),
                                                    type: 'entity',
                                                    size: j,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: V ? void 0 : s.version,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', s.version],
                                                }),
                                        ],
                                    }),
                                    s.explicitDisclaimer &&
                                        S &&
                                        (0, i.jsx)(y.N, {
                                            containerClassName: A().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: P,
                                            variant: s.explicitDisclaimer,
                                            className: A().explicitMark,
                                            trackId: s.id,
                                        }),
                                    F,
                                ],
                            }),
                            Z.length > 0 &&
                                (0, i.jsx)(_.i, {
                                    className: (0, a.$)(A().text, { [A().artists]: L }, N, E),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, a.$)(A().text, A().link),
                                    captionClassName: (0, a.$)(A().text, A().artistCaption),
                                    artists: Z,
                                    withLink: s.isNonUserGenerated && M,
                                    lineClamp: J,
                                    captionSize: j,
                                    withContextMenu: z,
                                }),
                        ],
                    }),
                });
            });
        },
        69319: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { n: () => i }),
                (function (e) {
                    (e.ALL = 'all'),
                        (e.TRACK = 'track'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.USER = 'user'),
                        (e.UGC_TRACK = 'ugc_track'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.VIDEO = 'video'),
                        (e.LYRICS = 'lyrics'),
                        (e.CLIP = 'clip'),
                        (e.BOOK = 'book'),
                        (e.CONCERT = 'concert');
                })(i || (i = {}));
        },
        73141: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => v });
            var i = r(32290),
                a = r(92708),
                s = r(55178),
                n = r(60900),
                o = r(63380),
                l = r(45477),
                d = r(75582),
                c = r(57594),
                u = r(90357),
                m = r(97647),
                _ = r(97755);
            let p = (e) => {
                    let { playlist: t, closeToast: r } = e;
                    return (0, i.jsx)(_.O, {
                        entityVariant: m.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: r,
                        coverUri: t.coverUri,
                    });
                },
                v = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: r } = (0, d.l)(),
                        [m, _] = (0, s.useState)(!1),
                        { formatMessage: v } = (0, n.A)();
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void r((0, i.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let s = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                        _(!0);
                        let n = await e.toggleLike();
                        _(!1),
                            n === o.f.OK
                                ? r((0, i.jsx)(p, { playlist: s }), { containerId: l.u.INFO })
                                : r((0, i.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [t.isAuthorized, m, e, v, r]);
                };
        },
        75487: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        77322: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => s });
            var i = r(70204),
                a = r(34186);
            let s = () => (0, a.N)().get(i.SX);
        },
        78176: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => x });
            var i = r(32290),
                a = r(63618),
                s = r(96103),
                n = r(55178),
                o = r(16172),
                l = r(21732),
                d = r(91027),
                c = r(50162),
                u = r(19740),
                m = r(86269),
                _ = r(71926),
                p = r(47745),
                v = r(84062),
                h = r(57594),
                f = r(16510),
                y = r.n(f);
            let x = (0, s.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: s } = (0, h.g)(),
                    f = (0, v.Z)(t.url),
                    g = (0, p.N)(),
                    C = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(x, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    b = (0, d.c)((e) => {
                        s.modal.isOpened && s.modal.close(), g({ to: o.QT.ArtistScreen }), f(e);
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, a.$)(y().root, r),
                            onClick: b,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, i.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, i.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        79238: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => s });
            var i = r(64605),
                a = r(97647);
            let s = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return a.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        79856: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => o });
            var i = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (a && (a += ' '), (a += i));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        r.r(t), r.d(t, { clsx: () => i, default: () => a });
                        let a = i;
                    },
                    631: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
                        let i = {
                            root: 'JD1RZC0EtdwegdYvGm6W',
                            root_active: 'K4G7ASZk9TWzXzAWMZKF',
                            'gradient-horizontal': 'GTZfWL5aq48rDurR2xQI',
                            root_radius_xs: 'PyJ4CgcZYC2CpTwW_q0e',
                            root_radius_s: 'Ig8cmdGxncIa4g0mjlzw',
                            root_radius_m: 'lJbeO5iovzBwUTpu7hFA',
                            root_radius_l: 'Gc3Wyk8uCohdTadkf7NR',
                            root_radius_xl: 'iKi9AOB1TOi3ZWzmbCkq',
                            root_radius_xxl: 'nYTL841hItMUZhvJq_ob',
                            root_radius_xxxl: 'LXGqiB6_V45plhG242mA',
                            root_radius_round: 'psTzstoF82tSOz1JHMB3',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var a = null;
                            if ((void 0 !== i && (a = '' + i), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3186: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0);
                        let a = r(4377),
                            s = r(5881),
                            n = i(r(631));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: r, radius: i = 'm', width: o, height: l, children: d, ...c } = e,
                                u = {};
                            return (
                                void 0 !== o && (u.width = 'string' == typeof o ? o : ''.concat(o, 'px')),
                                void 0 !== l && (u.height = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                (0, a.jsx)('div', {
                                    className: (0, s.clsx)(n.default.root, n.default['root_radius_'.concat(i)], { [n.default.root_active]: t }, r),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...c,
                                    style: u,
                                    children: d,
                                })
                            );
                        };
                    },
                },
                a = {};
            function s(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return i[e].call(r.exports, r, r.exports, s), r.exports;
            }
            (s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var n = {};
            (() => {
                Object.defineProperty(n, 'X', { value: !0 }), (n.q = void 0);
                var e = s(3186);
                Object.defineProperty(n, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var o = n.q;
            n.X;
        },
        80536: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81354: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => u });
            var i,
                a,
                s = r(30782),
                n = r(55178),
                o = r(60900);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(i || (i = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(a || (a = {}));
            var l = function (e) {
                var t = (0, o.A)(),
                    r = e.value,
                    i = e.children,
                    a = (0, s.__rest)(e, ['value', 'children']);
                return i(t.formatNumberToParts(r, a));
            };
            function d(e) {
                var t = function (t) {
                    var r = (0, o.A)(),
                        i = t.value,
                        a = t.children,
                        n = (0, s.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof i ? new Date(i || 0) : i;
                    return a('formatDate' === e ? r.formatDateToParts(l, n) : r.formatTimeToParts(l, n));
                };
                return (t.displayName = a[e]), t;
            }
            function c(e) {
                var t = function (t) {
                    var r = (0, o.A)(),
                        i = t.value,
                        a = t.children,
                        l = (0, s.__rest)(t, ['value', 'children']),
                        d = r[e](i, l);
                    if ('function' == typeof a) return a(d);
                    var c = r.textComponent || n.Fragment;
                    return n.createElement(c, null, d);
                };
                return (t.displayName = i[e]), t;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var u = c('formatDate');
            c('formatTime'), c('formatNumber'), c('formatList'), c('formatDisplayName'), d('formatDate'), d('formatTime');
        },
        83557: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => s });
            var i = r(60900),
                a = r(29913);
            let s = (e, t) => {
                let { formatMessage: r } = (0, i.A)(),
                    { hours: s, minutes: n, seconds: o } = (0, a.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, a.e)(t);
                return r(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: s, beginMinutes: n, beginSeconds: o, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        83920: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => a, g: () => s });
            var i = r(55178);
            let a = (0, i.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                s = () => (0, i.useContext)(a);
        },
        89957: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
            let i = (0, r(1987).createAsyncLocalStorage)();
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        91853: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => a });
            var i = r(19383);
            let a = (e) => {
                let { artist: t, callback: r, shouldHistoryBack: a } = e;
                return (0, i.l)({ entity: t, callback: r, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        92013: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { T: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        92565: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        92712: (e) => {
            e.exports = {
                root: 'SearchHistoryPage_root__Wbvyf',
                title: 'SearchHistoryPage_title__gnJuo',
                header: 'SearchHistoryPage_header__YdTG5',
                scrollContainer: 'SearchHistoryPage_scrollContainer__ScAez',
                scrollContent: 'SearchHistoryPage_scrollContent__5AXWC',
                content: 'SearchHistoryPage_content__iPgVO',
                desktopItem: 'SearchHistoryPage_desktopItem__Xv9C_',
                items: 'SearchHistoryPage_items___okS8',
                emptyHistory: 'SearchHistoryPage_emptyHistory__gzfUu',
            };
        },
        95082: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        95574: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let i = r(33399)._(r(64910));
            function a(e, t) {
                var r;
                let a = {};
                'function' == typeof e && (a.loader = e);
                let s = { ...a, ...t };
                return (0, i.default)({ ...s, modules: null == (r = s.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        99800: (e, t, r) => {
            'use strict';
            r.d(t, { SearchHistoryPage: () => T });
            var i = r(32290),
                a = r(62060),
                s = r(96103),
                n = r(21916),
                o = r(55178),
                l = r(60900),
                d = r(39407),
                c = r(21732),
                u = r(63423),
                m = r(82586),
                _ = r(46049),
                p = r(71926),
                v = r(66162),
                h = r(28531),
                f = r(48922),
                y = r(83808),
                x = r(83920),
                g = r(57594),
                C = r(92712),
                b = r.n(C);
            let T = (0, s.PA)(() => {
                let {
                        search: e,
                        user: t,
                        settings: { isMobile: r },
                    } = (0, g.g)(),
                    { setContentScrollRef: s } = (0, x.g)(),
                    { formatMessage: C } = (0, l.A)(),
                    T = (0, y.W)(),
                    A = (0, o.useRef)(!1),
                    S = (0, o.useRef)(null),
                    k = (0, h.t)(() => {
                        A.current = !0;
                    }),
                    j = e.historyPage.items.length;
                t.isAuthorized && (0, n.notFound)(),
                    (0, o.useEffect)(() => {
                        S.current && T.canBack && S.current.focus();
                    }, [T.canBack]),
                    (0, o.useEffect)(
                        () => () => {
                            (null == A ? void 0 : A.current) ? (e.resetHistoryItems(), (A.current = !1)) : e.resetHistoryStateRequest();
                        },
                        [e],
                    );
                let P = (0, o.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                null == T || T.back();
                            }, 200),
                        [T],
                    ),
                    I = (0, o.useMemo)(
                        () =>
                            j
                                ? (0, i.jsx)('div', {
                                      className: b().items,
                                      children: e.historyPage.items.map((e, t) => (0, v.G)({ item: e, index: t, pageId: f._Q.SEARCH })).filter((e) => !!e),
                                  })
                                : (0, i.jsx)(p.HL, {
                                      className: b().emptyHistory,
                                      variant: 'div',
                                      size: 'm',
                                      type: 'text',
                                      children: (0, i.jsx)(d.A, { id: 'search.history-empty' }),
                                  }),
                        [e.historyPage.items, j],
                    );
                return (
                    e.isHistoryReady && t.account.data.uid && (0, o.use)(e.getHistory({ userId: t.account.data.uid })),
                    (0, i.jsx)('div', {
                        className: b().root,
                        'data-test-id': c.Xk.search.SEARCH_HISTORY_PAGE,
                        children: (0, i.jsxs)(_.N, {
                            className: b().scrollContent,
                            containerClassName: b().scrollContainer,
                            ref: s,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: b().header,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: b().title,
                                            children: [
                                                T.canBack &&
                                                    (0, i.jsx)(u.$, {
                                                        ref: S,
                                                        'aria-label': C({ id: 'navigation.go-back' }),
                                                        radius: 'round',
                                                        disabled: !T.canBack,
                                                        size: 's',
                                                        icon: (0, i.jsx)(m.I, { size: 'xxs', variant: 'arrowLeft' }),
                                                        onClick: P,
                                                    }),
                                                (0, i.jsx)(p.DZ, { variant: 'h2', size: r ? 'm' : 'xl', children: (0, i.jsx)(d.A, { id: 'search.history' }) }),
                                            ],
                                        }),
                                        (0, i.jsx)(u.$, {
                                            'aria-label': C({ id: 'search.clear-history' }),
                                            radius: 'xxxl',
                                            variant: 'outline',
                                            disabled: !j,
                                            size: r ? 's' : 'default',
                                            onClick: k,
                                            children: (0, i.jsx)(p.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                type: 'text',
                                                children: (0, i.jsx)(d.A, { id: 'search.clear-history' }),
                                            }),
                                        }),
                                    ],
                                }),
                                !e.isHistoryLoading && I,
                            ],
                        }),
                    })
                );
            });
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 6347, 3183, 3931, 7972, 7231, 9763, 6706, 5201, 8892, 2536, 66, 5835, 2812, 8035, 551, 1410, 6252, 6477, 7275, 2586, 8347, 4522, 7702, 6874,
                861, 782, 9740, 14, 8915, 6341, 8160, 4220, 9562, 7358,
            ],
            () => e((e.s = 57167)),
        ),
            (_N_E = e.O());
    },
]);
