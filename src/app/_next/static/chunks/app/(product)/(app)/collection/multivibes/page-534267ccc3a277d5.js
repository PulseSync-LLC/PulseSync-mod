(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9754],
    {
        188: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => r });
            var o = i(18593);
            function r(e) {
                return (null == e ? void 0 : e.data.type) === o.K.Vibe;
            }
        },
        1344: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            let o = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                r = (e) =>
                    o.reduce((t, i) => {
                        let { queryKey: o, resultKey: r } = i;
                        return ('string' == typeof e[o] && (t[r] = e[o]), t);
                    }, {});
        },
        3150: (e) => {
            e.exports = {
                root: 'VibeRoomCardShimmer_root__lG3e3',
                root_mobile: 'VibeRoomCardShimmer_root_mobile__A462e',
                coverContainer: 'VibeRoomCardShimmer_coverContainer__dBb9G',
                coverContainer_mobile: 'VibeRoomCardShimmer_coverContainer_mobile__fcRcH',
                avatarShimmer: 'VibeRoomCardShimmer_avatarShimmer__ZHbcX',
                infoContainer: 'VibeRoomCardShimmer_infoContainer__WxMcd',
                infoContainer_mobile: 'VibeRoomCardShimmer_infoContainer_mobile__DJYX6',
                title: 'VibeRoomCardShimmer_title__X_5k3',
                title_mobile: 'VibeRoomCardShimmer_title_mobile___I56b',
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var o = i(67174);
            let r = {
                main: (0, o.u)('/'),
                chart: (0, o.u)('/chart'),
                chartPodcasts: (0, o.u)('/chart/podcasts'),
                collection: (0, o.u)('/collection'),
                collectionAlbums: (0, o.u)('/collection/albums'),
                collectionArtists: (0, o.u)('/collection/artists'),
                collectionClips: (0, o.u)('/collection/clips'),
                collectionDislikes: (0, o.u)('/collection/dislikes'),
                collectionKids: (0, o.u)('/collection/kids'),
                collectionKidsAlbums: (0, o.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, o.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, o.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, o.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, o.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, o.u)('/collection/multivibes'),
                collectionPlaylists: (0, o.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, o.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, o.u)('/collection/playlists/liked'),
                collectionShelf: (0, o.u)('/collection/shelf'),
                collectionShelfLiked: (0, o.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, o.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, o.u)('/collection/shelf/recently-played'),
                concerts: (0, o.u)('/concerts'),
                kids: (0, o.u)('/kids'),
                mixes: (0, o.u)('/mixes'),
                musicHistory: (0, o.u)('/music-history'),
                muzmarket: (0, o.u)('/muzmarket'),
                mymusic: (0, o.u)('/mymusic'),
                mymusicDownloadsTracks: (0, o.u)('/mymusic/downloads/tracks'),
                multivibe: (0, o.u)('/multivibe'),
                nonMusic: (0, o.u)('/non-music'),
                pay: (0, o.u)('/pay'),
                userSlides: (0, o.u)('/slides/user'),
                search: (0, o.u)('/search'),
                searchHistory: (0, o.u)('/search/history'),
                settings: (0, o.u)('/settings'),
                video: (0, o.u)('/video'),
            };
        },
        4476: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => l });
            var o = i(88800),
                r = i(53548),
                a = i(54020),
                n = i(8840),
                s = i(80566);
            let l = (e) => {
                let { children: t } = e,
                    i = (0, r.useRef)({}),
                    l = (0, r.useRef)(
                        (0, n.Gv)(
                            (e) => {
                                let t = (0, n.L5)(e.target),
                                    o = i.current[t];
                                if (o) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, a.A)());
                                            (o.callback(!0, e), (o.showed = !0), (o.viewUuid = e));
                                        }, 1e3);
                                        o.timerId = e;
                                    }
                                    (!e.isIntersecting && o.showed && (o.callback(!1, o.viewUuid), (o.showed = !1), (o.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(o.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, r.useCallback)((e) => {
                        var t;
                        !i.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = l.current) || t.observe(e.elementRef.current), (i.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, r.useCallback)((e) => {
                        let t = i.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete i.current[e]);
                    }, []);
                (0, r.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = l.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, r.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, o.jsx)(s.B.Provider, { value: u, children: t });
            };
        },
        5407: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => b });
            var o = i(88800),
                r = i(29993),
                a = i(88969),
                n = i(29504),
                s = i(59304),
                l = i(51028),
                c = i.n(l);
            let d = () =>
                (0, o.jsx)(s.$, {
                    message: (0, o.jsx)(n.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, o.jsx)(a.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var u = i(29595),
                _ = i(74965),
                m = i(72288);
            let b = () => {
                let { notify: e } = (0, _.l)(),
                    { advert: t } = (0, m.g)();
                return (0, r.c)(() => (t.isAdvertShown && e((0, o.jsx)(d, {}), { containerId: u.u.INFO }), !!t.isAdvertShown));
            };
        },
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var o = i(88800),
                r = i(88969),
                a = i(58390),
                n = i(17392),
                s = i(29993),
                l = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                _ = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: b = !0, buttonText: v, isBlock: p, key: g, className: y } = e,
                    h = (0, a.useRouter)(),
                    x = (0, _.N)().get(u.QG),
                    f = (0, s.c)(() => {
                        x.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), h.push(x.authorizationUrl));
                    });
                return (0, o.jsx)(
                    l.$,
                    {
                        onClick: f,
                        className: y,
                        isBlock: p,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: b,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, o.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, o.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        8962: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => a });
            var o = i(51235),
                r = i(80989);
            let a = (e, t) => (0, o.A)((0, r.f)(e), (0, r.f)(t));
        },
        9184: (e) => {
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
        9630: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => r, e: () => a });
            var o = i(53548);
            let r = (0, o.createContext)(null);
            function a() {
                return (0, o.useContext)(r);
            }
        },
        10270: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var o = i(56949),
                r = i(53548),
                a = i(29993),
                n = i(44230),
                s = i(72288);
            let l = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, s.g)(),
                        { contentScrollRef: m } = (0, n.g)(),
                        b = (0, r.useRef)(new Map()),
                        v = (0, r.useRef)(void 0),
                        p = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = b.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: u,
                            initialRect: l,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let o = t.getBoundingClientRect().top;
                                return e && 1 ? o + window.scrollY : !e && i ? o + i.scrollTop : 0;
                            })(_, d, m),
                        },
                        g = (0, o.XW)(p),
                        y = (0, o.Te)({ ...p, getScrollElement: () => m, initialOffset: null == m ? void 0 : m.scrollTop }),
                        h = _ ? g : y,
                        x = (0, a.c)(() => {
                            h.measure();
                        });
                    return (
                        (0, r.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let o = e.contentRect.height;
                                            o && o !== b.current.get(i) && (b.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && x());
                                }));
                        }, [x]),
                        { virtualizer: h, resizeObserver: v.current }
                    );
                };
        },
        11325: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithCover_root__s6Orw',
                coverImage: 'PlayButtonWithCover_coverImage__DhS1R',
                cover: 'PlayButtonWithCover_cover__5__Ms',
                playingAnimation: 'PlayButtonWithCover_playingAnimation__HWuOW',
                control: 'PlayButtonWithCover_control__iZy3t',
                playButton: 'PlayButtonWithCover_playButton__rV9pQ',
                playButton_loading: 'PlayButtonWithCover_playButton_loading__bqydK',
                'applying-setting': 'PlayButtonWithCover_applying-setting__ZvViA',
                root_current: 'PlayButtonWithCover_root_current__2QYEm',
                root_playing: 'PlayButtonWithCover_root_playing__tAgph',
                root_disabled: 'PlayButtonWithCover_root_disabled__EHoIx',
                root_disliked: 'PlayButtonWithCover_root_disliked__FoWzV',
                spinner: 'PlayButtonWithCover_spinner__ryn04',
                playButtonIcon: 'PlayButtonWithCover_playButtonIcon__DRjkN',
            };
        },
        14329: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        15077: (e, t, i) => {
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
        15324: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        16112: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => E });
            var o = i(88800),
                r = i(96706),
                a = i(53548),
                n = i(2058),
                s = i(42078),
                l = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(65724),
                m = i(84961),
                b = i(17392),
                v = i(79070),
                p = i(90688),
                g = i(97956),
                y = i(90420),
                h = i(15077),
                x = i(33719),
                f = i(55211),
                C = i(14329),
                T = i.n(C);
            let I = (0, m.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: r } = (0, d.g)(),
                    a = r.checkExperiment(g.z.WebNextWaveAgentExperiment, 'on'),
                    n = t.type === y.q7,
                    s = (0, v.L)(() => {
                        var e;
                        return a && t.agent
                            ? (0, o.jsx)(f.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(T().view, { [T().multivibeContainer]: n }),
                                  coverClassName: (0, _.$)({ [T().multivibeCover]: n }),
                                  entityCoverClassName: (0, _.$)({ [T().multivibeAvatar]: n }),
                                  controlClassName: (0, _.$)({ [T().multivibeControl]: n }),
                              })
                            : (0, o.jsx)(p._V, {
                                  className: T().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': b.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = a && t.agent ? void 0 : 'round';
                return (0, o.jsx)(x.k, {
                    closeToast: i,
                    entityVariant: h.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: l,
                    className: T().root,
                });
            });
            var A = i(93512);
            let E = (e) => {
                let { user: t, pinsCollection: i } = (0, d.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [b, v] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, o.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (b) return;
                    let a = { ...(0, r.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        n = (0, r.HO)(i.get(e.pinId));
                    v(!0);
                    let c = await e.togglePin();
                    (v(!1),
                        n &&
                            n.type === s._.WAVE_ITEM &&
                            n.data.backgroundImageUrl &&
                            ((a.backgroundImageUrl = n.data.backgroundImageUrl), (a.colors = n.data.colors), (a.agent = n.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (a.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (a.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (a.agent = (0, A.K)(c.data.agent))),
                        c
                            ? _((0, o.jsx)(I, { vibe: a }), { containerId: l.u.INFO })
                            : _((0, o.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [m, _, b, i, t.isAuthorized, e]);
            };
        },
        16704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => m });
            var o = i(88800),
                r = i(84961),
                a = i(53548),
                n = i(2058),
                s = i(17392),
                l = i(29993),
                c = i(96817),
                d = i(52300),
                u = i(76675);
            let _ = (0, r.PA)((e) => {
                    let {
                            iconSize: t,
                            className: i,
                            size: r,
                            variant: a = 'default',
                            isPlaying: _ = !1,
                            onClick: m,
                            iconClassName: b,
                            disabled: v,
                            color: p,
                            buttonVariant: g = 'text',
                            children: y,
                            radius: h = 'round',
                            withHover: x,
                            withRipple: f = !1,
                            ariaDescribedBy: C,
                            forwardRef: T,
                            tabIndex: I,
                            ariaHidden: A,
                            shouldSendAnalyticsOnPlayClick: E,
                        } = e,
                        S = (0, u.b)(),
                        { formatMessage: N } = (0, n.A)(),
                        R = ''.concat(_ ? 'pause' : 'play').concat('filled' === a ? '_filled' : ''),
                        O = _ ? s.S7.PAUSE_BUTTON : s.S7.PLAY_BUTTON,
                        j = N(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        P = (0, l.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == m || m(e), E && S(!_));
                        });
                    return (0, o.jsx)(c.$, {
                        className: i,
                        variant: g,
                        color: p,
                        radius: h,
                        size: r,
                        flexIcon: !0,
                        withRipple: f,
                        'aria-label': j,
                        onClick: P,
                        icon: (0, o.jsx)(d.I, { variant: R, size: t, className: b }),
                        disabled: v,
                        withHover: x,
                        'aria-describedby': C,
                        ref: T,
                        tabIndex: I,
                        'aria-hidden': A,
                        'data-test-id': O,
                        children: y,
                    });
                }),
                m = (0, a.forwardRef)((e, t) => (0, o.jsx)(_, { forwardRef: t, ...e }));
        },
        17017: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { Z: () => o }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(o || (o = {})));
        },
        18684: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => y });
            var o = i(53548),
                r = i(78793),
                a = i(92716),
                n = i(54577),
                s = i(90780),
                l = i(79070),
                c = i(65523),
                d = i(42139),
                u = i(12816),
                _ = i(34500),
                m = i(57649),
                b = i(46166),
                v = i(14518),
                p = i(73442),
                g = i(91248);
            let y = () => {
                let e = (0, s.st)(),
                    t = (0, c.U)(),
                    { hash: i } = (0, s.gf)(),
                    { pageId: y, pageStyle: h, pagePlacement: x } = (0, v.$)(),
                    { tabId: f, tabPos: C, isTabSelectedByDefault: T } = (0, g.R)(),
                    { offsetBlockPosY: I } = (0, m.u)(),
                    { blockId: A, blockType: E, blockPosX: S, blockPosY: N, mainObjectId: R, mainObjectType: O } = (0, _.N)(),
                    { objectId: j, objectPosX: P, objectPosY: M, objectType: k, objectsCount: w } = (0, b.J)(),
                    { skeleton: L } = (0, p.b)(),
                    B = (0, l.L)(() => (void 0 !== I && void 0 !== N ? I + N : N));
                return (0, o.useCallback)(
                    (o) => {
                        let { objectId: s, objectType: l, actionType: c, userInteractionType: _, objectPosX: m, objectPosY: b, objectCount: v } = o;
                        if (!e || !y || !u.xK.includes(y) || !u.fD.includes(y)) return;
                        let p = d.F[y];
                        if (!p) return;
                        let g = {
                            hash: i,
                            pageId: p,
                            pageStyle: h || a.PageStyles.Fullscreen,
                            pagePlacement: x || a.PagePlacements.Fullscreen,
                            entityType: E,
                            entityId: A,
                            entityPosX: S,
                            entityPosY: B,
                            objectId: null != s ? s : j,
                            objectType: null != l ? l : k,
                            objectPosX: null != m ? m : P,
                            objectPosY: null != b ? b : M,
                            objectsCount: null != v ? v : w,
                            actionType: c,
                            userInteractionType: null != _ ? _ : a.UserInteractionType.Tap,
                        };
                        (u.qG.includes(y) && ((g.tabId = f), (g.tabPos = C), (g.isTabSelectedByDefault = T)),
                            L && (g.skeletonId = L),
                            R && O && ((g.mainObjectType = O), (g.mainObjectId = R)));
                        let I = (0, r.F)({ params: g, logger: t, context: 'useSendEventOnBlockActionPerformed' });
                        I && (0, n.h_)(e.evgenInstance, I);
                    },
                    [j, k, P, M, w, e, y, i, h, x, E, A, S, B, L, R, O, t, f, C, T],
                );
            };
        },
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => r }), i(46606));
            var o = i(91136);
            class r extends o.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        21284: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { h: () => o }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(o || (o = {})));
        },
        21416: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => s });
            var o = {
                    5881: (e, t, i) => {
                        function o() {
                            for (var e, t, i = 0, o = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            o,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (o = e(t[i])) && (r && (r += ' '), (r += o));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        (i.r(t), i.d(t, { clsx: () => o, default: () => r }));
                        let r = o;
                    },
                    2059: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => o }));
                        let o = {
                            root: 'i0E_2NX4cuGTUSRVsza3',
                            rotate: 'SMKp_W9v6gety5k24_TU',
                            root_size_xxxs: 'OSqyMcSTAjYqzIL992Yw',
                            root_size_xxs: 'wc4asYHkCHxWpvH_vfHV',
                            root_size_xs: '_EehQphkMVEVJTlcOqgz',
                            root_size_s: 'R_2xF0Onip_K0GrDRV97',
                            root_size_m: 'tQV7pWeuTErBtRna7Fxx',
                            root_size_l: 'OJsrGLXpsIsmbj65C9AC',
                            root_size_xl: 'Vo4fBR82NKcVtfQCh508',
                            root_size_xxl: 'F45u5jR26w00BDX1OFHX',
                            gradient: 'xNNiKSvH1JTxlAkvyDlr',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var r = null;
                            if ((void 0 !== o && (r = '' + o), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var a in ((o = {}), t)) 'key' !== a && (o[a] = t[a]);
                            else o = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7279: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Spinner = void 0));
                        let r = i(4377),
                            a = i(5881),
                            n = o(i(2059));
                        t.Spinner = (e) => {
                            let { className: t, thicknessSizeRatio: i = 0.1, paddingSizeRatio: o = 0.08, size: s, ...l } = e,
                                c = 100 * i,
                                d = 50 - c / 2 - 100 * o,
                                u = ((3 * Math.PI) / 2) * d;
                            return (0, r.jsxs)('svg', {
                                viewBox: '0 0 '.concat(100, ' ').concat(100),
                                className: (0, a.clsx)(n.default.root, n.default['root_size_'.concat(s)], t),
                                'aria-hidden': !0,
                                ...l,
                                children: [
                                    (0, r.jsx)('defs', {
                                        children: (0, r.jsx)('mask', {
                                            id: 'mask',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: (0, r.jsx)('circle', {
                                                cx: 50,
                                                cy: 50,
                                                r: d,
                                                stroke: 'white',
                                                strokeLinecap: 'round',
                                                strokeWidth: c,
                                                strokeDasharray: u,
                                                fill: 'none',
                                            }),
                                        }),
                                    }),
                                    (0, r.jsx)('foreignObject', {
                                        x: '0',
                                        y: '0',
                                        width: 100,
                                        height: 100,
                                        mask: 'url(#mask)',
                                        children: (0, r.jsx)('div', { className: n.default.gradient }),
                                    }),
                                ],
                            });
                        };
                    },
                },
                r = {};
            function a(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (o[e].call(i.exports, i, i.exports, a), i.exports);
            }
            ((a.d = (e, t) => {
                for (var i in t) a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X', { value: !0 }), (n.$ = void 0));
                var e = a(7279);
                Object.defineProperty(n, '$', {
                    enumerable: !0,
                    get: function () {
                        return e.Spinner;
                    },
                });
            })();
            var s = n.$;
            n.X;
        },
        21576: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => u });
            var o = i(88800),
                r = i(84961),
                a = i(53548),
                n = i(50408),
                s = i(47969),
                l = i(53360),
                c = i(15324),
                d = i.n(c);
            let u = (0, r.PA)((e) => {
                let {
                        count: t,
                        rowGap: i,
                        columnGap: r,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: b,
                        renderItemByIndex: v,
                        onChangeRange: p,
                    } = e,
                    [g, y] = (0, n.d)(),
                    {
                        virtualizer: h,
                        rowResizeObserver: x,
                        columnCount: f,
                        indices: C,
                    } = (0, s.L)({
                        count: t,
                        rowGap: i,
                        columnGap: r,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: b,
                        containerRef: g,
                    });
                (0, a.useEffect)(() => {
                    !h.isScrolling && h.range && (null == p || p(h.range, f));
                }, [p, h.isScrolling, h.range, f]);
                let T = { '--virtual-grid-height': ''.concat(h.getTotalSize(), 'px'), '--virtual-grid-column-count': f };
                return (0, o.jsx)('div', {
                    ref: y,
                    style: T,
                    className: d().root,
                    children: h
                        .getVirtualItems()
                        .map((e) =>
                            (0, o.jsx)(
                                l.U,
                                {
                                    className: d().row,
                                    columnClassName: d().column,
                                    virtualItem: e,
                                    resizeObserver: x,
                                    indices: C,
                                    renderItemByIndex: v,
                                    scrollMargin: h.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        27506: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => o });
            var o = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        31510: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            let o = (e) => ({ uri: e.uri, color: e.color });
        },
        31792: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => b });
            var o = i(92716),
                r = i(29993),
                a = i(18684),
                n = i(88800),
                s = i(53548),
                l = i(2058),
                c = i(29595),
                d = i(74965),
                u = i(27506),
                _ = i(66943),
                m = i(16112);
            let b = (e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    b = (0, m.A)(null == t ? void 0 : t.wave),
                    { exitVibeRoom: v, isPending: p } = ((e) => {
                        let { room: t, onRoomSuccessExit: i } = e,
                            [o, a] = (0, s.useState)(!1),
                            { notify: m } = (0, d.l)(),
                            b = (0, s.useRef)(!1),
                            { formatMessage: v } = (0, l.A)();
                        return {
                            exitVibeRoom: (0, r.c)(async () => {
                                t &&
                                    !b.current &&
                                    (a(!0),
                                    (b.current = !0),
                                    (await t.exitRoom({ roomId: t.id })) === u.F.ERROR
                                        ? m((0, n.jsx)(_.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: c.u.ERROR })
                                        : i(),
                                    a(!1),
                                    (b.current = !1));
                            }),
                            isPending: o,
                        };
                    })({ room: t, onRoomSuccessExit: i }),
                    g = (0, a.m)();
                return {
                    handleExitClick: (0, r.c)(async () => {
                        (g({ actionType: o.ActionType.Remove, userInteractionType: o.UserInteractionType.Tap, objectType: o.DomainObjectType.Wave }), await v());
                    }),
                    handlePinClick: (0, r.c)(async () => {
                        (g({ actionType: o.ActionType.Pin, userInteractionType: o.UserInteractionType.Tap, objectType: o.DomainObjectType.Wave }), await b());
                    }),
                    isExitPending: p,
                };
            };
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => j });
            var o = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                s = i(2058),
                l = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                _ = i(78793),
                m = i(92716),
                b = i(99984),
                v = i(90780),
                p = i(65523),
                g = i(14518),
                y = i(44230),
                h = i(4370),
                x = i(72288),
                f = i(97956),
                C = i(56248),
                T = i(90688),
                I = i(78940);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var E = i(96856),
                S = i.n(E);
            let N = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: a } = e,
                    { slam: n } = (0, x.g)(),
                    { contentRef: s } = (0, y.g)(),
                    d = (0, I.Z)(h.Z.mymusicDownloadsTracks.href);
                return (0, o.jsxs)('div', {
                    className: (0, r.$)(S().root, t),
                    children: [
                        i &&
                            (0, o.jsx)(C.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(S().navigation, { [S().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: a,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(S().content, { [S().content_shrink]: !i }),
                            children: [
                                (0, o.jsx)(T._V, { className: S().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, o.jsxs)('div', {
                                    className: S().message,
                                    children: [
                                        (0, o.jsx)(u.DZ, {
                                            className: S().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, o.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, o.jsx)(u.HL, {
                                            className: S().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, o.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, o.jsx)(c.$, {
                                        className: S().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(u.HL, {
                                            className: S().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, o.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var R = i(9184),
                O = i.n(R);
            let j = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: a } = e,
                    { formatMessage: T } = (0, s.A)(),
                    I = (0, n.useContext)(x.P),
                    A = null == I ? void 0 : I.experiments.checkExperiment(f.z.WebNextUnstableMusicScreen, 'on'),
                    E = T(A ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, v.st)(),
                        { hash: i } = (0, v.gf)(),
                        { pageId: o } = (0, g.$)(),
                        r = (0, p.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !o) return;
                        let a = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: o,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, b.z5)(t.evgenInstance, a);
                    }, [t, e, i, o, r]);
                })(E);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, v.st)(),
                            { hash: t } = (0, v.gf)(),
                            { pageId: i } = (0, g.$)(),
                            o = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: o,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, b.bv)(e.evgenInstance, r);
                            }, [e, t, i, o]),
                        };
                    })(),
                    R = (0, n.useCallback)(() => {
                        (S(), (window.location.href = h.Z.main.href));
                    }, [S]),
                    { contentRef: j } = (0, y.g)();
                return A
                    ? (0, o.jsx)(N, { className: t, withBackwardControl: i, onBack: a })
                    : (0, o.jsxs)('div', {
                          className: (0, r.$)(O().root, t),
                          children: [
                              i &&
                                  (0, o.jsx)(C.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(O().navigation, { [O().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                      onBackwardClick: a,
                                  }),
                              (0, o.jsxs)('div', {
                                  className: (0, r.$)(O().content, { [O().content_shrink]: !i }),
                                  children: [
                                      (0, o.jsx)(d.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, o.jsx)(u.DZ, { className: (0, r.$)(O().title, O().important), variant: 'h3', size: 'xs', children: E }),
                                      (0, o.jsxs)(u.HL, {
                                          className: (0, r.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, o.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, o.jsx)(c.$, {
                                          onClick: R,
                                          className: O().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, o.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, o.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34945: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l });
            var o = i(88800),
                r = i(65724),
                a = i(17392),
                n = i(97811),
                s = i.n(n);
            let l = (e) => {
                let { className: t, stopAnimation: i } = e;
                return (0, o.jsx)('div', { className: (0, r.$)(s().root, { [s().root_stopAnimation]: i }, t), 'data-test-id': a.S7.PLAYING_ANIMATION });
            };
        },
        38860: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => a });
            var o = i(53548),
                r = i(41168);
            let a = () => (0, o.useContext)(r.P);
        },
        39267: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => y });
            var o = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                s = i(2058),
                l = i(17392),
                c = i(7555),
                d = i(21416),
                u = i(72288),
                _ = i(81877),
                m = i(16704),
                b = i(34945),
                v = i(11325),
                p = i.n(v);
            let g = (0, a.PA)((e) => {
                    let {
                            className: t,
                            isAvailable: i,
                            isDisliked: a,
                            coverUri: n,
                            title: v,
                            onPlayButtonClick: g,
                            isPlaying: y,
                            isCurrent: h,
                            radius: x,
                            isPlayButtonLoading: f,
                            isLoading: C,
                            shouldShowControl: T = !0,
                            ariaDescribedBy: I,
                            ignoreDislikedStyles: A,
                            entityCoverStyle: E,
                            forwardRef: S,
                            playButtonIconSize: N = 'xs',
                            alt: R,
                            withLoadingIndicator: O,
                            coverClassName: j,
                            entityCoverClassName: P,
                            controlClassName: M,
                            fallbackIconSize: k = 'xs',
                        } = e,
                        { formatMessage: w } = (0, s.A)(),
                        {
                            settings: { isMobile: L },
                        } = (0, u.g)();
                    return (0, o.jsx)('div', {
                        className: (0, r.$)(p().root, t, { [p().root_disabled]: !i, [p().root_current]: h, [p().root_disliked]: a && !A, [p().root_playing]: y }),
                        'data-test-id': l.S7.PLAY_BUTTON_WITH_COVER,
                        children: (0, o.jsxs)(c.t, {
                            className: (0, r.$)(p().cover, j),
                            radius: x,
                            children: [
                                (0, o.jsx)(_.B, {
                                    className: (0, r.$)(p().coverImage, P),
                                    src: n,
                                    size: 100,
                                    alt: null != R ? R : w({ id: 'entity-names.track-name' }, { trackName: v }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    isAvailable: i,
                                    fallbackIconSize: k,
                                    style: E,
                                    withLoadingIndicator: O,
                                }),
                                T &&
                                    (0, o.jsxs)('div', {
                                        className: (0, r.$)(p().control, M),
                                        children: [
                                            !C && (0, o.jsx)(b.P, { stopAnimation: !y, className: p().playingAnimation }),
                                            C && L && (0, o.jsx)(d.y, { size: 'xs', className: p().spinner }),
                                            !L &&
                                                (0, o.jsx)(m.D, {
                                                    ref: S,
                                                    variant: 'filled',
                                                    className: (0, r.$)(p().playButton, { [p().playButton_loading]: f }),
                                                    iconClassName: p().playButtonIcon,
                                                    isPlaying: y,
                                                    onClick: g,
                                                    iconSize: N,
                                                    ariaDescribedBy: I,
                                                    disabled: !i,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                }),
                y = (0, n.forwardRef)((e, t) => (0, o.jsx)(g, { forwardRef: t, ...e }));
        },
        41153: (e) => {
            e.exports = { root_mobile: 'VibeRoomContextMenu_root_mobile__mH0PT' };
        },
        41168: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => o });
            let o = (0, i(53548).createContext)(null);
        },
        42078: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { _: () => o }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(o || (o = {})));
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        42789: (e) => {
            e.exports = {
                root: 'VibeRoomCard_root__5_iia',
                root_mobile: 'VibeRoomCard_root_mobile__v2PVq',
                cardWrapper: 'VibeRoomCard_cardWrapper__SjvtK',
                cardWrapper_mobile: 'VibeRoomCard_cardWrapper_mobile__Zq5mQ',
                roomInfo: 'VibeRoomCard_roomInfo__OH814',
                roomInfo_mobile: 'VibeRoomCard_roomInfo_mobile__q49k2',
                unavailableStatus: 'VibeRoomCard_unavailableStatus___TRYU',
                unavailableStatusDot: 'VibeRoomCard_unavailableStatusDot__HhbgW',
                roomName: 'VibeRoomCard_roomName__vMTor',
                roomName_disabled: 'VibeRoomCard_roomName_disabled__ADQ3G',
                roomName_mobile: 'VibeRoomCard_roomName_mobile__AcCl_',
                textField: 'VibeRoomCard_textField__SZ7Nw',
                avatarsWrapper: 'VibeRoomCard_avatarsWrapper__y7_Rm',
                avatarsWrapper_mobile: 'VibeRoomCard_avatarsWrapper_mobile__jGyAN',
                avatarsWrapper_visible: 'VibeRoomCard_avatarsWrapper_visible__RCg1b',
                avatarsWrapper_disabled: 'VibeRoomCard_avatarsWrapper_disabled__P_0ea',
                playingAnimation: 'VibeRoomCard_playingAnimation__biX8D',
                cardControls: 'VibeRoomCard_cardControls__ffMym',
                control: 'VibeRoomCard_control__QKRAh',
                playControl: 'VibeRoomCard_playControl__DnQ9O',
                menuControl: 'VibeRoomCard_menuControl__KwpDi',
                pinControl: 'VibeRoomCard_pinControl__C3epe',
                menuControl_mobile: 'VibeRoomCard_menuControl_mobile__VsaOD',
                pinControl_mobile: 'VibeRoomCard_pinControl_mobile__5gVK6',
            };
        },
        43378: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => d });
            var o = i(88800),
                r = i(65724),
                a = i(19994),
                n = i(72288),
                s = i(76524),
                l = i(3150),
                c = i.n(l);
            let d = (e) => {
                let { isActive: t, className: i, 'aria-label': l, withMobileLayout: d = !1 } = e,
                    {
                        settings: { isMobile: u },
                    } = (0, n.g)(),
                    _ = d && u;
                return (0, o.jsxs)('div', {
                    'aria-label': l,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(c().root, { [c().root_mobile]: _ }, i),
                    children: [
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(c().coverContainer, { [c().coverContainer_mobile]: _ }),
                            children: [
                                (0, o.jsx)(s.b, { align: 'back', children: (0, o.jsx)(a.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                                (0, o.jsx)(s.b, { align: 'front', children: (0, o.jsx)(a.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                            ],
                        }),
                        (0, o.jsx)('div', {
                            className: (0, r.$)(c().infoContainer, { [c().infoContainer_mobile]: _ }),
                            children: (0, o.jsx)(a.W, { isActive: t, className: (0, r.$)(c().title, { [c().title_mobile]: _ }), radius: 's' }),
                        }),
                    ],
                });
            };
        },
        46606: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { X: () => o }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(o || (o = {})));
        },
        47674: (e) => {
            e.exports = {
                root: 'MultivibeShowPromoModalButton_root__IVPw7',
                root_mobile: 'MultivibeShowPromoModalButton_root_mobile__WRav6',
                button: 'MultivibeShowPromoModalButton_button__FIPMr',
                button_mobile: 'MultivibeShowPromoModalButton_button_mobile__27mpZ',
                surface: 'MultivibeShowPromoModalButton_surface__moFgc',
                icon: 'MultivibeShowPromoModalButton_icon__Sq7Vg',
                title: 'MultivibeShowPromoModalButton_title__0ZG_f',
                titleWrapper: 'MultivibeShowPromoModalButton_titleWrapper__GNMdJ',
                title_mobile: 'MultivibeShowPromoModalButton_title_mobile__qZ_tH',
                content_linesCount_1: 'MultivibeShowPromoModalButton_content_linesCount_1__YfsBl',
                content_linesCount_2: 'MultivibeShowPromoModalButton_content_linesCount_2__AC_t8',
                content_linesCount_3: 'MultivibeShowPromoModalButton_content_linesCount_3___wDV_',
                content_linesCount_4: 'MultivibeShowPromoModalButton_content_linesCount_4__BuNw_',
            };
        },
        47964: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => x });
            var o = i(88800),
                r = i(53548),
                a = i(2058),
                n = i(188),
                s = i(18593),
                l = i(80989),
                c = i(29993),
                d = i(7123),
                u = i(66943),
                _ = i(84384),
                m = i(29595),
                b = i(74965),
                v = i(72288),
                p = i(90420);
            let g = 'radio';
            var y = i(8962),
                h = i(9630);
            let x = (e) => {
                var t, i;
                let { seeds: x = [p.M1], pageIdForFrom: f, blockIdForFrom: C, onPlayInterrupted: T, parentContextId: I } = e,
                    { from: A } = (0, _.f)(
                        ((e, t) =>
                            !t || (null == e ? void 0 : e.includes(g)) || t.includes(g)
                                ? { pageId: e, blockId: t }
                                : { pageId: e, blockId: ''.concat(t, '-').concat(g) })(f, C),
                    ),
                    { formatMessage: E } = (0, a.A)(),
                    S = (0, h.e)(),
                    { notify: N } = (0, b.l)(),
                    { sonataState: R, vibe: O, fullscreenPlayer: j, user: P, freeAccess: M } = (0, v.g)(),
                    [k, w] = (0, r.useState)(null),
                    L = (0, c.c)(() => (j.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR));
                ((0, r.useEffect)(() => {
                    let e =
                        null == S
                            ? void 0
                            : S.state.currentContext.onChange(() => {
                                  (0, n.i)(S.state.currentContext.value) ? w(S.state.currentContext.value) : w(null);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [S]),
                    (0, r.useEffect)(() => {
                        let e =
                            null == k
                                ? void 0
                                : k.observableActiveSession.onChange(() => {
                                      var e, t;
                                      (null == k || null == (e = k.observableActiveSession.value) ? void 0 : e.wave) &&
                                          O.setVibe(null == k || null == (t = k.observableActiveSession.value) ? void 0 : t.wave);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [k, O]));
                let B = (0, c.c)(async (e) => {
                        try {
                            await (null == S
                                ? void 0
                                : S.playContext({
                                      contextData: {
                                          type: s.K.Vibe,
                                          meta: { id: (0, l.f)(e) },
                                          seeds: e,
                                          from: A,
                                          includeTracksInResponse: !0,
                                          interactive: !0,
                                          parentContextId: I,
                                      },
                                      loadContextMeta: !0,
                                  }));
                        } catch (e) {
                            N((0, o.jsx)(u.h, { error: E({ id: 'vibe-errors.start-vibe' }) }), { containerId: L() });
                        }
                    }),
                    V = (0, c.c)(async (e) => {
                        if (S && k)
                            try {
                                await k.setSettings({ seeds: e, queueState: S.state.queueState, interactive: !0, from: A });
                            } catch (e) {
                                N((0, o.jsx)(u.h, { error: E({ id: 'vibe-errors.apply-vibe-setting' }) }), { containerId: L() });
                            }
                    }),
                    D = (0, c.c)(async (e) => {
                        if (S)
                            try {
                                await S.restartContext({ playAfterRestart: e });
                            } catch (e) {
                                N((0, o.jsx)(u.h, { error: E({ id: 'error-messages.something-went-wrong' }) }), { containerId: L() });
                            }
                    }),
                    U = !!k,
                    W = U && (0, y._)(null != (i = null == (t = O.meta) ? void 0 : t.seeds) ? i : [], x),
                    z = W && R.status === d.MT.PLAYING,
                    F = W && R.status === d.MT.PAUSED;
                (0, r.useEffect)(() => {
                    z && O.setIsApplying(!1);
                }, [z, O]);
                let H = (0, c.c)(async () => {
                        if (!z && (M.isFreeWebUser || !P.isAuthorized)) {
                            null == T || T();
                            return;
                        }
                        (O.setIsApplying(!0), await B(x), O.setIsApplying(!1));
                    }),
                    $ = (0, c.c)(async (e, t) => {
                        var i;
                        O.setIsApplying(!0);
                        let o = [];
                        if (O.meta && Array.isArray(null == (i = O.meta) ? void 0 : i.seeds))
                            if (O.meta.seeds.includes(e)) o = O.meta.seeds.filter((t) => t !== e);
                            else if (t) o = [e, ...O.meta.seeds.filter((e) => e.includes('setting'))];
                            else {
                                let t = e.split(':')[0];
                                o = t
                                    ? ['settingDiversity', 'settingMoodEnergy', 'settingLanguage'].includes(t)
                                        ? [...O.meta.seeds.filter((e) => !e.startsWith(''.concat(t, ':'))), e]
                                        : [...O.meta.seeds, e]
                                    : [...O.meta.seeds];
                            }
                        else o = [e];
                        (k ? (await V(o), await D(!0)) : await B(o), O.setIsApplying(!1));
                    });
                return {
                    isVibeContext: U,
                    isPlaying: z,
                    isPaused: F,
                    isCurrent: W,
                    togglePlay: H,
                    resetContext: (0, c.c)(async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [p.M1];
                        (O.setIsApplying(!0), k ? (await V(e), await D(!0)) : await B(e), O.setIsApplying(!1));
                    }),
                    applySetting: $,
                    // for PulseSync: BEGIN play native wave seeds through the authorized playback flow
                    playSeeds: (0, c.c)(async (e) => {
                        let t = Array.isArray(e) && e.length > 0 ? e : x;
                        if (M.isFreeWebUser || !P.isAuthorized) {
                            null == T || T();
                            return;
                        }
                        (O.setIsApplying(!0), k ? (await V(t), await D(!0)) : await B(t), O.setIsApplying(!1));
                    }),
                    // for PulseSync: END play native wave seeds through the authorized playback flow
                };
            };
        },
        47969: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var o = i(35802),
                r = i(79070),
                a = i(61013),
                n = i(53548);
            let s = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: o, totalCount: r, columnGap: a, minColumnCount: n, maxColumnCount: s } = e,
                    l = Math.max(1, Math.floor((o + a) / (t + a))),
                    c = Math.max(n, Math.floor((o + a) / ((i + t) * 0.5 + a)));
                for (let e = n; e <= l; e++) {
                    let r = (o - (e - 1) * a) / e;
                    if (r >= t && r <= i) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(r / (c = s ? Math.min(c, s) : c)), columnCount: c };
            };
            var l = i(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: i,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: _,
                        minColumnCount: m,
                        maxColumnCount: b,
                        containerRef: v,
                    } = e,
                    { rowCount: p, columnCount: g } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: o, minColumnWidth: r, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, _] = (0, n.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, n.useRef)(null),
                            b = (0, n.useMemo)(
                                () =>
                                    (0, a.A)(
                                        (e) => {
                                            _(
                                                s({
                                                    minColumnWidth: r,
                                                    maxColumnWidth: o,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: i,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, o, i, r, l],
                            );
                        return (
                            (0, n.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(b);
                                    })),
                                    t &&
                                        (_(
                                            s({
                                                minColumnWidth: r,
                                                maxColumnWidth: o,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: i,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, b, d, o, i, r, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: _, minColumnWidth: u, maxColumnCount: b, containerRef: v }),
                    { virtualizer: y, resizeObserver: h } = (0, l.r)({ count: p, getEstimateSize: i, gap: c, containerRef: v }),
                    x = (0, o.A)(
                        Array.from({ length: t }, (e, t) => t),
                        g,
                    ),
                    f = (0, r.L)(() => {
                        var e, t;
                        if (!y.range) return null;
                        let i = null == (e = x[y.range.startIndex]) ? void 0 : e.at(0),
                            o = null == (t = x[y.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== o ? { startIndex: i, endIndex: o } : null;
                    });
                return { virtualizer: y, rowResizeObserver: h, indices: x, columnCount: g, visibleRange: f };
            };
        },
        48820: (e, t, i) => {
            'use strict';
            i.d(t, { WithWebNextWaveForTwo: () => s });
            var o = i(84961),
                r = i(58390),
                a = i(4370),
                n = i(72288);
            let s = (0, o.PA)((e) => {
                let { children: t } = e,
                    { multivibe: i } = (0, n.g)();
                return (i.isEnabled || (0, r.redirect)(a.Z.main.href), t);
            });
        },
        49397: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        51028: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        51231: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var o = i(5120),
                r = i(31510);
            let a = (e) => {
                let t = (0, r.e)(e);
                return (0, o.wg)(t);
            };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var o = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                s = i(51516),
                l = i.n(s);
            let c = (0, a.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: a, columnClassName: s, className: c, resizeObserver: d, scrollMargin: u } = e,
                    _ = (0, n.useRef)(null),
                    m = t[i.index],
                    b = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - u, 'px') };
                return (
                    (0, n.useEffect)(() => {
                        let e = _.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, o.jsx)('div', {
                        'data-index': i.index,
                        ref: _,
                        style: b,
                        className: (0, r.$)(l().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, o.jsx)('div', { className: s, children: a(e) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        53500: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 48820)), Promise.resolve().then(i.bind(i, 90036)));
        },
        54651: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => X });
            var o = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                s = i(2058),
                l = i(88969),
                c = i(92716),
                d = i(17392),
                u = i(29993),
                _ = i(79070),
                m = i(78275),
                b = i(29832),
                v = i(29504),
                p = i(5407),
                g = i(12816),
                y = i(18684),
                h = i(96527),
                x = i(76675),
                f = i(28830),
                C = i(59844),
                T = i(14518),
                I = i(55693),
                A = i(47964),
                E = i(72288),
                S = i(49176),
                N = i(56862),
                R = i(16704),
                O = i(34945),
                j = i(59378),
                P = i(56475),
                M = i(16112),
                k = i(52300),
                w = i(19934),
                L = i(2345),
                B = i(95210),
                V = i(31792),
                D = i(41153),
                U = i.n(D),
                W = i(89718);
            let z = (0, a.PA)((e) => {
                let { room: t, onOpenChange: i, onRenameClick: a, isRenamePending: l, onRoomSuccessExit: u, open: _, className: m, ...b } = e,
                    {
                        settings: { isMobile: v },
                    } = (0, E.g)(),
                    { formatMessage: p } = (0, s.A)(),
                    { handlePinClick: g, handleExitClick: y, isExitPending: h } = (0, V.O)({ room: t, onRoomSuccessExit: u }),
                    x = (0, L.l)({ mainObjectType: c.DomainObjectType.NonApplicable });
                return (
                    (0, B.N)(_),
                    (0, n.useEffect)(() => {
                        if (_)
                            return (
                                x(!0),
                                () => {
                                    x(!1);
                                }
                            );
                    }, [_, x]),
                    (0, o.jsx)(w.W1, {
                        ...b,
                        isMobile: v,
                        offsetOptions: 10,
                        open: _,
                        onOpenChange: i,
                        ariaLabel: p({ id: 'interface-actions.context-menu' }),
                        containerDataTestId: d.OA.vibe.VIBE_ROOM_CONTEXT_MENU,
                        size: 's',
                        icon: (0, o.jsx)(k.I, { size: 'xxs', variant: 'more' }),
                        color: 'secondary',
                        variant: 'default',
                        className: m,
                        menuClassName: (0, r.$)(U().root, { [U().root_mobile]: v }),
                        children: (0, o.jsx)(W.J, { room: t, onRenameClick: a, isRenamePending: l, onPinClick: g, onExitClick: y, isExitPending: h }),
                    })
                );
            });
            var F = i(81877),
                H = i(76524),
                $ = i(63087),
                K = i.n($);
            let G = (e) => {
                let { align: t, controls: i, src: r, isDisabled: a = !1, isMobileLayout: n = !1 } = e;
                return (0, o.jsx)(H.b, {
                    align: t,
                    isDisabled: a,
                    overlay: i,
                    surfaceClassName: K().surface,
                    overlayClassName: K().overlay,
                    children: (0, o.jsx)(F.B, {
                        size: 200,
                        fit: 'cover',
                        className: K().image,
                        src: r,
                        withSrcSet: !1,
                        alt: '',
                        withAvatarReplace: !0,
                        fallbackIconSize: n ? 'xxxs' : 'l',
                    }),
                });
            };
            var Y = i(42789),
                Q = i.n(Y);
            let X = (0, a.PA)((e) => {
                var t, i, a, k;
                let { room: w, contentLinesCount: L = 3, className: B, withMobileLayout: V = !1, onRoomSuccessExit: D } = e,
                    { pageId: U } = (0, T.$)(),
                    { ref: W, intersectionPropertyId: F } = (0, f.n)(),
                    {
                        settings: { isMobile: H },
                        multivibe: $,
                        user: K,
                        freeAccess: Y,
                    } = (0, E.g)(),
                    X = (0, p.P)(),
                    { sendPlaySearchFeedback: q } = (0, I.z)(),
                    [Z, J] = (0, n.useState)(!1),
                    ee = (0, M.A)(w.wave),
                    et = (0, x.b)(),
                    ei = (0, y.m)(),
                    eo = (0, h.N)(),
                    { state: er, setState: ea } = (0, m.e)(!1),
                    { state: en, setState: es } = (0, m.e)(!1),
                    { state: el, toggleTrue: ec, toggleFalse: ed } = (0, m.e)(!1),
                    { formatMessage: eu } = (0, s.A)(),
                    { editVibeRoom: e_, isPending: em } = (0, P.h)(w),
                    eb = V && H,
                    ev = (el || er || en) && !H,
                    {
                        isPlaying: ep,
                        isPaused: eg,
                        togglePlay: ey,
                    } = (0, A.B)({ seeds: null != (k = null == (t = w.wave) ? void 0 : t.seeds) ? k : [], pageIdForFrom: U, blockIdForFrom: c.EntityTypes.Multiwave }),
                    eh = eb && !w.isDisabled && (ep || eg),
                    ex = (0, u.c)(() => {
                        !(w.isDisabled || X()) &&
                            (Y.isVibeStartRestricted ||
                                (Z || ep || (J(!0), null == q || q()),
                                ey(),
                                et(!ep),
                                ei({
                                    actionType: ep ? c.ActionType.Pause : c.ActionType.Play,
                                    userInteractionType: c.UserInteractionType.Tap,
                                    objectType: c.DomainObjectType.Wave,
                                })));
                    }),
                    ef = (0, u.c)(async () => {
                        (ei({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await ee());
                    }),
                    eC = (0, u.c)(() => {
                        if (w.isDisabled) {
                            ($.setDisabledRoomId(w.id),
                                $.disabledRoomInfoModal.open(),
                                eo({ to: c.AppScreen.MultivibeUnifiedScreen, objectType: c.DomainObjectType.Link }));
                            return;
                        }
                        H && ex();
                    }),
                    eT = (0, u.c)((e) => {
                        (e && eo({ to: c.AppScreen.MultivibeActionScreen, objectType: c.DomainObjectType.Link }), ea(e), es(e));
                    }),
                    eI = (0, u.c)((e) => {
                        e.target === e.currentTarget && (e.code === S.v.SPACE || e.code === S.v.ENTER) && (e.preventDefault(), eC());
                    }),
                    [eA, eE] = (0, n.useState)(!1),
                    eS = (0, n.useCallback)(
                        (e) => {
                            (eE(!1), e_(e), ei({ actionType: c.ActionType.Rename, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }));
                        },
                        [e_, ei, eE],
                    ),
                    eN = (0, n.useCallback)(() => {
                        (eE(!0), eo({ to: c.AppScreen.MultivibeRenameScreen, objectType: c.DomainObjectType.Link }));
                    }, [eo, eE]),
                    eR = (0, _.L)(() =>
                        (0, o.jsx)(C.n, {
                            pageId: g._Q.MULTIVIBE_ACTION_SCREEN,
                            pageStyle: c.PageStyles.Sheet,
                            pagePlacement: c.PagePlacements.Bottom,
                            pageEntityId: '',
                            children: (0, o.jsx)(
                                z,
                                {
                                    room: w,
                                    onOpenChange: eT,
                                    open: er,
                                    isRenamePending: em,
                                    onRenameClick: eN,
                                    returnFocus: !eA,
                                    className: (0, r.$)(Q().menuControl, Q().control, { [Q().menuControl_mobile]: eb }),
                                    onRoomSuccessExit: D,
                                    'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU_BUTTON,
                                },
                                w.getKey('VibeRoomContextMenu'),
                            ),
                        }),
                    ),
                    eO = (0, _.L)(() => {
                        if (!w.isDisabled)
                            return (0, o.jsx)(
                                R.D,
                                {
                                    isPlaying: ep,
                                    onClick: ex,
                                    className: (0, r.$)(Q().playControl, Q().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                w.getKey('PlayButton'),
                            );
                    }),
                    ej = (0, _.L)(() => {
                        var e;
                        if (!w.isDisabled)
                            return (0, o.jsx)(
                                N.O,
                                {
                                    isPinned: null == (e = w.wave) ? void 0 : e.isPinned,
                                    onClick: ef,
                                    className: (0, r.$)(Q().pinControl, Q().control, { [Q().pinControl_mobile]: eb }),
                                    withRipple: !1,
                                },
                                w.getKey('PinButton'),
                            );
                    }),
                    eP = w.isDisabled ? eu({ id: 'multivibe.room-status-disabled' }) : eu({ id: 'multivibe.room-status-enabled' }),
                    eM = eu({ id: 'entity-names.vibe-room-name' }, { name: w.name, status: eP }),
                    ek = w.owner.cover.uri,
                    ew = null == (i = w.members[0]) ? void 0 : i.cover.uri,
                    eL = (null == (a = w.owner) ? void 0 : a.uid) && w.owner.uid === K.puid,
                    eB = eL ? ek : ew,
                    eV = eL ? ew : ek,
                    eD = (0, _.L)(() =>
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(Q().avatarsWrapper, {
                                [Q().avatarsWrapper_mobile]: eb,
                                [Q().avatarsWrapper_disabled]: w.isDisabled,
                                [Q().avatarsWrapper_visible]: ev,
                            }),
                            children: [
                                (0, o.jsx)(G, {
                                    align: 'back',
                                    isDisabled: w.isDisabled,
                                    isMobileLayout: eb,
                                    src: eB,
                                    controls: (0, o.jsx)(b.hg, { isVisible: ev, className: Q().cardControls, radius: 'round', pinControl: ej }),
                                }),
                                (0, o.jsx)(G, {
                                    align: 'front',
                                    isDisabled: w.isDisabled,
                                    isMobileLayout: eb,
                                    src: eV,
                                    controls: (0, o.jsx)(b.hg, { isVisible: ev, className: Q().cardControls, radius: 'round', playControl: eO, menuControl: eR }),
                                }),
                                eh && (0, o.jsx)(O.P, { stopAnimation: eg, className: Q().playingAnimation }),
                            ],
                        }),
                    ),
                    eU = (0, _.L)(() =>
                        w.isDisabled
                            ? (0, o.jsxs)('span', {
                                  className: Q().unavailableStatus,
                                  'data-test-id': d.OA.vibe.VIBE_ROOM_UNAVAILABLE_STATUS,
                                  children: [
                                      (0, o.jsx)('span', { className: Q().unavailableStatusDot }),
                                      (0, o.jsx)(v.HL, {
                                          variant: 'div',
                                          type: 'entity',
                                          size: 'xs',
                                          weight: 'medium',
                                          lineClamp: 1,
                                          children: (0, o.jsx)(l.A, { id: 'multivibe.room-unavailable' }),
                                      }),
                                  ],
                              })
                            : null,
                    ),
                    eW = (0, _.L)(() =>
                        eA
                            ? (0, o.jsx)('div', {
                                  className: Q().textFieldContainer,
                                  children: (0, o.jsx)(j.A, {
                                      text: w.name,
                                      className: Q().textField,
                                      onChangeFinish: eS,
                                      maxTextLength: 200,
                                      minTextLength: 1,
                                      placeholder: eu({ id: 'vibe-actions.enter-title' }),
                                      shouldFinishOnKeyPress: !0,
                                      'data-test-id': d.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                                  }),
                              })
                            : (0, o.jsx)(v.HL, {
                                  variant: 'div',
                                  type: 'entity',
                                  size: 'm',
                                  weight: 'medium',
                                  lineClamp: w.isDisabled ? 1 : 2,
                                  className: (0, r.$)(Q().roomName, { [Q().roomName_disabled]: w.isDisabled, [Q().roomName_mobile]: eb }),
                                  'data-test-id': d.OA.vibe.VIBE_ROOM_NAME,
                                  children: w.name,
                              }),
                    );
                return (0, o.jsxs)(b.MN, {
                    ref: W,
                    className: (0, r.$)(Q().root, { [Q().root_mobile]: eb }, B),
                    contentLinesCount: eb ? 2 : L,
                    textPosition: eb ? 'left' : 'center',
                    'data-intersection-property-id': F,
                    wrapperClassName: (0, r.$)(Q().cardWrapper, { [Q().cardWrapper_mobile]: eb }),
                    view: eD,
                    'aria-label': eM,
                    tabIndex: 0,
                    onClick: eC,
                    onKeyDown: eI,
                    onFocus: ec,
                    onMouseEnter: ec,
                    onMouseLeave: ed,
                    onBlur: ed,
                    'data-test-id': d.OA.vibe.VIBE_ROOM_CARD,
                    children: [(0, o.jsxs)('div', { className: (0, r.$)(Q().roomInfo, { [Q().roomInfo_mobile]: eb }), 'aria-hidden': !0, children: [eW, eU] }), eb && eR],
                });
            });
        },
        55211: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => d });
            var o = i(88800),
                r = i(65724),
                a = i(21284),
                n = i(79070),
                s = i(39267),
                l = i(85925),
                c = i.n(l);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: b,
                        coverClassName: v,
                        entityCoverClassName: p,
                        controlClassName: g,
                        fallbackIconSize: y,
                    } = e,
                    h = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === a.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, o.jsx)(s.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(c().root, c()['root_radius_'.concat(h)], { [c().root_withShadow]: !!t.entityType }, b),
                    radius: h,
                    onPlayButtonClick: d,
                    isPlaying: i,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: y,
                    coverClassName: v,
                    entityCoverClassName: p,
                    controlClassName: g,
                });
            };
        },
        55693: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            var o = i(53548),
                r = i(63765),
                a = i(91087);
            let n = () => {
                let { sendSearchFeedback: e, id: t, type: i, blockPosition: n, position: s } = (0, o.useContext)(a.N) || {};
                if (void 0 === t || void 0 === i || void 0 === n || void 0 === s) return {};
                let l = null == e ? void 0 : e.bind(null, { feedbackType: r.n.LIKE, id: t, type: i, blockPosition: n, position: s });
                return {
                    sendLikeSearchFeedback: l,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: r.n.NAVIGATE, id: t, type: i, blockPosition: n, position: s }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: r.n.PLAY, id: t, type: i, blockPosition: n, position: s }),
                };
            };
        },
        56475: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => u });
            var o = i(88800),
                r = i(53548),
                a = i(2058),
                n = i(29993),
                s = i(29595),
                l = i(74965),
                c = i(27506),
                d = i(66943);
            let u = (e) => {
                let [t, i] = (0, r.useState)(!1),
                    { notify: u } = (0, l.l)(),
                    _ = (0, r.useRef)(!1),
                    { formatMessage: m } = (0, a.A)();
                return {
                    editVibeRoom: (0, n.c)(async (t) => {
                        e &&
                            !_.current &&
                            (i(!0),
                            (_.current = !0),
                            (await e.editRoom({ roomId: e.id, name: t })) === c.F.ERROR &&
                                u((0, o.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }),
                            i(!1),
                            (_.current = !1));
                    }),
                    isPending: t,
                };
            };
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => v });
            var o = i(88800),
                r = i(84961),
                a = i(58390),
                n = i(65724),
                s = i(88969),
                l = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let _ = (0, r.PA)(() =>
                (0, o.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, o.jsx)(l.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, o.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, o.jsx)(l.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, o.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, o.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(4370),
                b = i(72288);
            let v = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, b.g)();
                return r.isAuthorized ? t : (i && (0, a.redirect)(m.Z.main.href), (0, o.jsx)(_, {}));
            });
        },
        63087: (e) => {
            e.exports = { surface: 'VibeRoomMemberAvatar_surface__L4WU2', overlay: 'VibeRoomMemberAvatar_overlay__9adN4', image: 'VibeRoomMemberAvatar_image__g4AsX' };
        },
        63765: (e, t, i) => {
            'use strict';
            var o, r;
            (i.d(t, { n: () => r, o: () => o }),
                (function (e) {
                    ((e.ARTIST = 'artist'),
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
                        (e.SEARCH_PAGE = 'search-page'));
                })(o || (o = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(r || (r = {})));
        },
        64284: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => o });
            var o = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    e
                );
            })({});
        },
        64974: (e) => {
            e.exports = {
                root: 'CollectionVibeRoomsPage_root__rXIRS',
                container: 'CollectionVibeRoomsPage_container__EjxoE',
                shimmerGrid: 'CollectionVibeRoomsPage_shimmerGrid__vgYVO',
                gridContent: 'CollectionVibeRoomsPage_gridContent__Og3pw',
                emptyContent: 'CollectionVibeRoomsPage_emptyContent___1jjx',
                footer: 'CollectionVibeRoomsPage_footer__LaC0Q',
                multivibeCoBrand: 'CollectionVibeRoomsPage_multivibeCoBrand__qm6aU',
                onboardingImage: 'CollectionVibeRoomsPage_onboardingImage__lde_N',
                multivibeImage: 'CollectionVibeRoomsPage_multivibeImage__NFs_8',
                emptyContentTitle: 'CollectionVibeRoomsPage_emptyContentTitle__Hv_Vp',
            };
        },
        66943: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => d });
            var o = i(88800),
                r = i(65724),
                a = i(73170),
                n = i(29504),
                s = i(59304),
                l = i(49397),
                c = i.n(l);
            let d = (e) => {
                let { error: t, closeToast: i, className: l } = e;
                return (0, o.jsx)(s.$, {
                    className: (0, r.$)(c().root, l),
                    message: (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(a.q, { children: (0, o.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, o.jsx)(n.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: i,
                });
            };
        },
        72131: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => n });
            var o = i(10285),
                r = i(42668),
                a = i(72288);
            let n = (e) => {
                let { location: t } = (0, a.g)();
                return (0, o.r)(e, t.tld, r.B);
            };
        },
        73170: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => c });
            var o,
                r = i(53548),
                a = {
                    5881: (e, t, i) => {
                        function o() {
                            for (var e, t, i = 0, o = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            o,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (o = e(t[i])) && (r && (r += ' '), (r += o));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        (i.r(t), i.d(t, { clsx: () => o, default: () => r }));
                        let r = o;
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => o }));
                        let o = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var r = null;
                            if ((void 0 !== o && (r = '' + o), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var a in ((o = {}), t)) 'key' !== a && (o[a] = t[a]);
                            else o = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5531: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let r = i(4377),
                            a = i(5881),
                            n = i(810),
                            s = o(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: o, ...l } = e,
                                c = (0, a.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, n.isValidElement)(o)
                                ? (0, n.cloneElement)(o, { ...l, className: (0, a.clsx)(c, o.props.className) })
                                : (0, r.jsx)('span', { className: c, ...l, children: o });
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(r, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = s(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = l.SROnly;
            l.__esModule;
        },
        76524: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var o = i(88800),
                r = i(65724),
                a = i(82892),
                n = i.n(a);
            let s = (e) => {
                let { align: t, children: i, overlay: a, isDisabled: s = !1, className: l, surfaceClassName: c, overlayClassName: d } = e,
                    u = 'back' === t;
                return (0, o.jsxs)('span', {
                    className: (0, r.$)(n().root, u ? n().root_back : n().root_front, l),
                    children: [
                        (0, o.jsxs)('span', {
                            className: (0, r.$)(n().circle, { [n().circle_back]: u, [n().circle_disabled]: s }),
                            children: [(0, o.jsx)('span', { className: (0, r.$)(n().surface, c), children: i }), d && (0, o.jsx)('span', { className: d })],
                        }),
                        a,
                    ],
                });
            };
        },
        76675: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => y });
            var o = i(53548),
                r = i(78793),
                a = i(54577),
                n = i(90780),
                s = i(79070),
                l = i(65523),
                c = i(42139),
                d = i(12816),
                u = i(34500),
                _ = i(57649),
                m = i(46166),
                b = i(14518),
                v = i(73442),
                p = i(91248);
            let g = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.CONCERTS,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                    d._Q.COLLECTION_VIBE_ROOMS,
                    d._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    d._Q.MULTIVIBE_ACTION_SCREEN,
                    d._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                y = () => {
                    let e = (0, n.st)(),
                        t = (0, l.U)(),
                        { hash: i } = (0, n.gf)(),
                        { pageId: y } = (0, b.$)(),
                        { tabId: h, tabPos: x, isTabSelectedByDefault: f } = (0, p.R)(),
                        { offsetBlockPosY: C } = (0, _.u)(),
                        { blockId: T, blockType: I, blockPosX: A, blockPosY: E, mainObjectId: S, mainObjectType: N } = (0, u.N)(),
                        { objectId: R, objectPosX: O, objectPosY: j, objectType: P, objectsCount: M } = (0, m.J)(),
                        { skeleton: k } = (0, v.b)(),
                        w = (0, s.L)(() => (void 0 !== C && void 0 !== E ? C + E : E));
                    return (0, o.useCallback)(
                        (o, n) => {
                            if (!e || !y || !d.xK.includes(y) || !o || !g.includes(y)) return;
                            let s = c.F[y];
                            if (!s) return;
                            let l = {
                                hash: i,
                                pageId: s,
                                entityType: I,
                                entityId: T,
                                entityPosX: A,
                                entityPosY: w,
                                objectId: null != n ? n : R,
                                objectType: P,
                                objectPosX: O,
                                objectPosY: j,
                                objectsCount: M,
                            };
                            (d.qG.includes(y) && ((l.tabId = h), (l.tabPos = x), (l.isTabSelectedByDefault = f)),
                                k && (l.skeletonId = k),
                                S && N && ((l.mainObjectType = N), (l.mainObjectId = S)));
                            let u = (0, r.F)({ params: l, logger: t, context: 'useSendEventOnBlockStarted' });
                            u && (0, a.er)(e.evgenInstance, u);
                        },
                        [e, y, i, I, T, A, w, R, P, O, j, M, k, S, N, t, h, x, f],
                    );
                };
        },
        76830: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => h });
            var o = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(2058),
                s = i(88969),
                l = i(92716),
                c = i(17392),
                d = i(29993),
                u = i(96817),
                _ = i(52300),
                m = i(29504),
                b = i(96527),
                v = i(72288),
                p = i(76524),
                g = i(47674),
                y = i.n(g);
            let h = (0, a.PA)((e) => {
                let { withMobileLayout: t } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: a,
                    } = (0, v.g)(),
                    { formatMessage: g } = (0, n.A)(),
                    h = (0, b.N)(),
                    x = t && i,
                    f = (0, d.c)(() => {
                        (h({ to: l.AppScreen.MultivibeSendingInvitationScreen, objectType: l.DomainObjectType.Shortcut }), a.promoModal.open());
                    });
                return (0, o.jsxs)('div', {
                    className: (0, r.$)(y().root, { [y().root_mobile]: x }),
                    'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_CARD,
                    children: [
                        (0, o.jsxs)(u.$, {
                            className: (0, r.$)(y().button, { [y().button_mobile]: x }),
                            'aria-label': g({ id: 'interface-actions.create' }),
                            onClick: f,
                            variant: 'text',
                            isBlock: !0,
                            withRipple: !1,
                            withHover: !1,
                            'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_BUTTON,
                            children: [
                                (0, o.jsx)(p.b, { align: 'back', surfaceClassName: y().surface }),
                                (0, o.jsx)(p.b, {
                                    align: 'front',
                                    surfaceClassName: y().surface,
                                    children: (0, o.jsx)(_.I, { variant: 'add', size: x ? 'xxxs' : 'l', className: y().icon }),
                                }),
                            ],
                        }),
                        (0, o.jsx)('div', {
                            className: y().titleWrapper,
                            children: (0, o.jsx)(m.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                className: (0, r.$)(y().title, { [y().title_mobile]: x }),
                                children: (0, o.jsx)(s.A, { id: 'interface-actions.create' }),
                            }),
                        }),
                    ],
                });
            });
        },
        77948: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => n });
            var o = i(88800),
                r = i(53548),
                a = i(90134);
            let n = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: n, objectPos: s, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    m = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: n, objectPos: s, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, n, s, l, c, d, u],
                    );
                return (0, o.jsx)(a.l.Provider, { value: m, children: _ });
            };
        },
        78275: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var o,
                r = i(53548),
                a = {
                    810: (e) => {
                        e.exports = o || (o = i.t(r, 2));
                    },
                },
                n = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0));
                let e = (function e(t) {
                    var i = n[t];
                    if (void 0 !== i) return i.exports;
                    var o = (n[t] = { exports: {} });
                    return (a[t](o, o.exports, e), o.exports);
                })(810);
                s.useToggle = (t) => {
                    let [i, o] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        o(t);
                    }, [t]);
                    let r = (0, e.useCallback)(() => {
                            o((e) => !e);
                        }, []),
                        a = (0, e.useCallback)(() => {
                            o(!0);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            o(!1);
                        }, []);
                    return { state: i, toggle: r, setState: o, toggleTrue: a, toggleFalse: n };
                };
            })(),
                s.__esModule);
            var l = s.useToggle;
        },
        79179: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var o = i(53548),
                r = i(58390),
                a = i(4370),
                n = i(72288);
            let s = () => {
                let e = (0, r.useRouter)(),
                    { user: t, paywall: i, multivibe: s } = (0, n.g)(),
                    [l, c] = (0, o.useState)(!1),
                    d = !s.isEnabled,
                    u = t.hasPlus,
                    _ = i.modal.isOpened,
                    m = !u && l && !_,
                    b = l && _;
                return (
                    (0, o.useEffect)(() => {
                        if (d || m) return void e.replace(a.Z.main.href);
                        l || u || _ || (i.openModal(), c(!0));
                    }, [u, d, _, l, i, e, m]),
                    { hasPlus: u, isPaywallBlocking: b }
                );
            };
        },
        80989: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => o });
            let o = (e) => String([...e].sort());
        },
        81877: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var o = i(88800),
                r = i(53548),
                a = i(17392),
                n = i(90688);
            let s = (e) => {
                    let { isAvailable: t = !0, className: i, fallbackIconSize: r, forwardRef: s, ...l } = e;
                    return t
                        ? (0, o.jsx)(n._V, { ref: s, className: i, fallbackIconSize: r, ...l, 'data-test-id': a.S7.ENTITY_COVER_IMAGE })
                        : (0, o.jsx)(n.Ab, { className: i, iconSize: r, iconVariant: 'unavailable', 'data-test-id': a.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                l = (0, r.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e }));
        },
        81883: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var o,
                r = i(53548),
                a = {
                    1676: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let o = i(810);
                        t.useToggle = (e) => {
                            let [t, i] = (0, o.useState)(e);
                            (0, o.useEffect)(() => {
                                i(e);
                            }, [e]);
                            let r = (0, o.useCallback)(() => {
                                    i((e) => !e);
                                }, []),
                                a = (0, o.useCallback)(() => {
                                    i(!0);
                                }, []),
                                n = (0, o.useCallback)(() => {
                                    i(!1);
                                }, []);
                            return { state: t, toggle: r, setState: i, toggleTrue: a, toggleFalse: n };
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(r, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (a[e](i, i.exports, s), i.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0));
                let e = s(810),
                    t = s(1676);
                l.l = (i) => {
                    let { isEnabled: o = !0, onClick: r, shouldStartFromUnscale: a } = i,
                        { state: n, toggleFalse: s, toggleTrue: l } = (0, t.useToggle)(!1),
                        { state: c, toggleFalse: d, toggleTrue: u } = (0, t.useToggle)(!1),
                        _ = (0, e.useCallback)(
                            (e) => {
                                (null == r || r(e), o && (a ? u() : l()), e.stopPropagation(), e.preventDefault());
                            },
                            [o, r, a, l, u],
                        );
                    return {
                        handleAnimationEnd: (0, e.useCallback)(() => {
                            (s(), d());
                        }, [s, d]),
                        handleClick: _,
                        scaleAnimation: n,
                        unscaleAnimation: c,
                    };
                };
            })(),
                l.X);
            var c = l.l;
        },
        82204: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => n });
            var o = i(88800),
                r = i(53548),
                a = i(43620);
            let n = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: n,
                        blockPosX: s,
                        blockPosY: l,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = e,
                    b = (0, r.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: n,
                            blockPosX: s,
                            blockPosY: l,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [t, i, n, s, l, c, d, u, m],
                    );
                return (0, o.jsx)(a.p.Provider, { value: b, children: _ });
            };
        },
        82892: (e) => {
            e.exports = {
                root: 'VibeRoomMemberAvatarSlot_root__0id8R',
                root_back: 'VibeRoomMemberAvatarSlot_root_back__whzaT',
                root_front: 'VibeRoomMemberAvatarSlot_root_front__ZAlv_',
                surface: 'VibeRoomMemberAvatarSlot_surface__Ylq3t',
                circle: 'VibeRoomMemberAvatarSlot_circle__N0n0t',
                circle_back: 'VibeRoomMemberAvatarSlot_circle_back__XNqs4',
                circle_disabled: 'VibeRoomMemberAvatarSlot_circle_disabled__KTcAv',
            };
        },
        84384: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => _ });
            var o = i(53548);
            i(30282);
            var r = i(34500),
                a = i(14518),
                n = i(58390),
                s = i(64284),
                l = i(18593),
                c = i(12816),
                d = i(1344);
            let u = [s.U.TRAILER],
                _ = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                i = null == e ? void 0 : e.blockId,
                                n = null == e ? void 0 : e.pageEntityId,
                                { pageId: s, pageEntityId: l } = (0, a.$)(),
                                { blockId: c } = (0, r.N)();
                            return (0, o.useMemo)(() => ({ pageId: null != t ? t : s, blockId: null != i ? i : c, pageEntityId: null != n ? n : l }), [i, c, t, n, s, l]);
                        })(e),
                        i = ((e) => {
                            let { pageId: t, blockId: i } = e;
                            return (0, o.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), i && e.push(i.toLowerCase()), e.push('default'), e.join('-'));
                            }, [i, t]);
                        })(t),
                        s = ((e) => {
                            let { pageId: t, blockId: i, pageEntityId: r, contextType: a, contextId: s, utmForPageIds: _ } = e,
                                m = (0, n.useSearchParams)();
                            return (0, o.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: i, pageEntityId: o, utmForPageIds: r, contextId: a, contextType: n, blockId: s } = e,
                                            _ = t && Object.fromEntries(t),
                                            m = ((e) => {
                                                switch (e) {
                                                    case c._Q.ALBUM:
                                                    case c._Q.PROMOLANDING_ALBUM:
                                                    case c._Q.AUDIOBOOK:
                                                    case c._Q.PODCAST:
                                                        return l.K.Album;
                                                    case c._Q.ARTIST:
                                                    case c._Q.ARTIST_TRACKS:
                                                    case c._Q.ARTIST_ALBUMS:
                                                    case c._Q.ARTIST_DISCOGRAPHY:
                                                        return l.K.Artist;
                                                    case c._Q.PLAYLIST:
                                                        return l.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(i);
                                        return !m || !_ || !o || u.includes(s)
                                            ? null
                                            : (Array.isArray(r) ? r.map((e) => String(e)).includes(String(o)) : !!a && m === n && String(a) === String(o)) && _
                                              ? (0, d.Z)(_)
                                              : null;
                                    })({ searchParams: m, pageId: t, pageEntityId: r, utmForPageIds: _, contextId: s, contextType: a, blockId: i }),
                                [m, t, r, s, a, i, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, o.useMemo)(() => ({ from: i, utmLink: s || void 0 }), [i, s]);
                };
        },
        85925: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        89718: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => _ });
            var o = i(88800),
                r = i(84961),
                a = i(88969),
                n = i(17392),
                s = i(52300),
                l = i(19934),
                c = i(21416),
                d = i(72288),
                u = i(27817);
            let _ = (0, r.PA)((e) => {
                var t;
                let { room: i, onRenameClick: r, isRenamePending: _, onPinClick: m, onExitClick: b, isExitPending: v, className: p } = e,
                    {
                        settings: { isMobile: g },
                    } = (0, d.g)(),
                    y = !(null == i ? void 0 : i.isDisabled) && !g,
                    h = !(null == i ? void 0 : i.isDisabled) && !g;
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        y && (0, o.jsx)(u.L, { className: p, onClick: m, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        h &&
                            (0, o.jsx)(l.Dr, {
                                className: p,
                                icon: (0, o.jsx)(s.I, { variant: 'edit', size: 'xxs' }),
                                onClick: r,
                                disabled: _,
                                spinner: _ ? (0, o.jsx)(c.y, { size: 'xs' }) : void 0,
                                'data-test-id': n.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, o.jsx)(a.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, o.jsx)(l.Dr, {
                            className: p,
                            icon: (0, o.jsx)(s.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: b,
                            disabled: v,
                            spinner: v ? (0, o.jsx)(c.y, { size: 'xs' }) : void 0,
                            'data-test-id': n.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, o.jsx)(a.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => a.G, X1: () => o.X, m5: () => r.m });
            var o = i(46606),
                r = i(91136),
                a = i(19840);
            i(17017);
        },
        90036: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionVibeRoomsPage: () => F });
            var o = i(88800),
                r = i(84961),
                a = i(53548),
                n = i(88969),
                s = i(92716),
                l = i(17392),
                c = i(29504),
                d = i(32596),
                u = i(69630),
                _ = i(79179),
                m = i(33012),
                b = i(12816),
                v = i(4476),
                p = i(59844),
                g = i(46422),
                y = i(44230),
                h = i(37670),
                x = i(72288),
                f = i(93317),
                C = i(2058),
                T = i(29993),
                I = i(79070),
                A = i(90688),
                E = i(66719),
                S = i(73531),
                N = i(24672),
                R = i(30664),
                O = i(76830),
                j = i(21576),
                P = i(2345),
                M = i(82204),
                k = i(77948),
                w = i(67174),
                L = i(91292),
                B = i(43378),
                V = i(54651);
            let D = (0, r.PA)((e) => {
                let { room: t } = e,
                    {
                        collection: { vibeRooms: i },
                    } = (0, x.g)(),
                    r = (0, T.c)(() => {
                        i.deleteRoomFromItems(t.id);
                    });
                return (0, o.jsx)(V.E, { room: t, contentLinesCount: 3, withMobileLayout: !0, onRoomSuccessExit: r });
            });
            var U = i(64974),
                W = i.n(U);
            let z = (0, r.PA)((e) => {
                    let { setContentScrollRef: t } = e,
                        {
                            collection: { vibeRooms: i },
                            settings: { isMobile: r },
                            multivibe: d,
                        } = (0, x.g)(),
                        { formatMessage: u } = (0, C.A)(),
                        _ = u({ id: 'loading-messages.entity-is-loading' }, { entityName: u({ id: 'page.vibe-rooms' }) }),
                        m = (0, T.c)(() => 315),
                        b = d.isOnboardingEnabled,
                        { href: v } = (0, w.u)('/slides/special/:campaignId', { params: { campaignId: 'wave_for_two' } }),
                        p = (0, P.l)({ mainObjectType: s.DomainObjectType.NonApplicable });
                    (0, a.useEffect)(
                        () => (
                            p(!0),
                            () => {
                                p(!1);
                            }
                        ),
                        [p],
                    );
                    let g = (0, T.c)(() => void 0),
                        y = (0, T.c)(() => (i.isResolved ? i.items.length + 1 : 4)),
                        h = i.items.length,
                        f = (0, T.c)((e) => {
                            var t, r;
                            if (!i.isResolved) return (0, o.jsx)(B.P, { isActive: !0, 'aria-label': _, withMobileLayout: !0 });
                            if (0 === e)
                                return (0, o.jsx)(M.F, {
                                    blockId: '',
                                    blockType: '',
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    children: (0, o.jsx)(k.B, {
                                        objectType: s.DomainObjectType.Shortcut,
                                        objectId: '',
                                        objectPosX: 0,
                                        objectPosY: 1,
                                        objectsCount: h,
                                        children: (0, o.jsx)(O.f, { withMobileLayout: !0 }),
                                    }),
                                });
                            let a = e - 1,
                                n = i.items[a];
                            return n
                                ? (0, o.jsx)(M.F, {
                                      blockId: '',
                                      blockType: '',
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      children: (0, o.jsx)(k.B, {
                                          objectType: s.DomainObjectType.Wave,
                                          objectId: null != (r = null == (t = n.wave) ? void 0 : t.seedsId) ? r : '',
                                          objectPosX: e,
                                          objectPosY: 1,
                                          objectsCount: h,
                                          children: (0, o.jsx)(D, { room: n }, n.id),
                                      }),
                                  })
                                : (0, o.jsx)(B.P, { isActive: !0, 'aria-label': _, withMobileLayout: !0 });
                        }),
                        V = (0, I.L)(() =>
                            (0, o.jsxs)('div', {
                                className: W().emptyContent,
                                'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_EMPTY,
                                children: [
                                    (0, o.jsx)(R.t, { className: W().multivibeImage }),
                                    (0, o.jsx)(c.HL, {
                                        className: W().emptyContentTitle,
                                        variant: 'div',
                                        size: 'l',
                                        weight: 'bold',
                                        'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_EMPTY_TITLE,
                                        children: (0, o.jsx)(n.A, { id: 'error-messages.empty-collection-vibe-rooms-title' }),
                                    }),
                                    (0, o.jsx)(S.M, { title: u({ id: 'interface-actions.copy-link' }) }),
                                ],
                            }),
                        ),
                        U = (0, I.L)(() =>
                            (0, o.jsx)('div', {
                                className: W().shimmerGrid,
                                children: Array.from({ length: 4 }, (e, t) => (0, o.jsx)(B.P, { isActive: !0, 'aria-label': _, withMobileLayout: !0 }, t)),
                            }),
                        ),
                        z = (0, I.L)(() =>
                            i.isLoading
                                ? U
                                : (0, o.jsx)(j.Q, {
                                      minColumnCount: r ? 1 : 2,
                                      maxColumnCount: r ? 1 : 7,
                                      count: y(),
                                      rowGap: 16,
                                      columnGap: 16,
                                      getEstimateRowSize: m,
                                      minColumnWidth: 170,
                                      maxColumnWidth: 270,
                                      onChangeRange: g,
                                      renderItemByIndex: f,
                                  }),
                        ),
                        F = (0, I.L)(() => (i.isResolved && i.isEmptyItems ? V : (0, o.jsx)('div', { className: W().gridContent, children: z }))),
                        H = (0, I.L)(() =>
                            b
                                ? (0, o.jsxs)(L.N, {
                                      className: W().footer,
                                      href: v,
                                      'aria-label': u({ id: 'page.vibe-rooms-onboarding' }),
                                      children: [
                                          (0, o.jsx)(A._V, {
                                              className: W().onboardingImage,
                                              src: 'avatars.mds.yandex.net/get-music-misc/28592/img.6ac5050b5a32a672b2cdb08e/%%',
                                              size: 28,
                                              alt: '',
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              withAspectRatio: !0,
                                              withFallback: !1,
                                          }),
                                          (0, o.jsx)(N.j, { className: W().multivibeCoBrand }),
                                      ],
                                  })
                                : (0, o.jsx)('div', { className: W().footer, children: (0, o.jsx)(N.j, { className: W().multivibeCoBrand }) }),
                        );
                    return (0, o.jsxs)(E.N, {
                        ref: t,
                        className: W().root,
                        containerClassName: W().container,
                        'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_CONTENT,
                        children: [F, H],
                    });
                }),
                F = (0, r.PA)(() => {
                    let {
                            collection: { vibeRooms: e },
                            multivibe: t,
                        } = (0, x.g)(),
                        { contentScrollRef: i, setContentScrollRef: r } = (0, y.g)(),
                        C = (0, g.W)(),
                        { hasPlus: T, isPaywallBlocking: I } = (0, _.S)();
                    return ((0, a.useEffect)(() => {
                        if (T)
                            return (
                                e.isNeededToLoad && e.getData(),
                                () => {
                                    e.reset();
                                }
                            );
                    }, [T, e]),
                    (0, h.J)(e.isResolved),
                    I)
                        ? null
                        : e.isRejected
                          ? (0, o.jsx)(d.SomethingWentWrong, {})
                          : (0, o.jsx)(p.n, {
                                pageId: b._Q.COLLECTION_VIBE_ROOMS,
                                pageStyle: s.PageStyles.Fullscreen,
                                pagePlacement: s.PagePlacements.Fullscreen,
                                pageEntityId: '',
                                children: (0, o.jsx)(v.j, {
                                    children: (0, o.jsx)(u.h, {
                                        scrollElement: i,
                                        children: (0, o.jsxs)('div', {
                                            className: W().root,
                                            'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE,
                                            children: [
                                                (0, o.jsxs)(f.Y, {
                                                    variant: f.V.TEXT,
                                                    withForwardControl: !1,
                                                    withBackwardControl: C.canBack,
                                                    children: [
                                                        (0, o.jsx)(c.DZ, {
                                                            variant: 'h2',
                                                            weight: 'bold',
                                                            size: 'xl',
                                                            lineClamp: 1,
                                                            children: (0, o.jsx)(n.A, { id: 'page.vibe-rooms' }),
                                                        }),
                                                        t.isNDAEnabled && (0, o.jsx)(m.b, {}),
                                                    ],
                                                }),
                                                (0, o.jsx)(z, { setContentScrollRef: r }),
                                            ],
                                        }),
                                    }),
                                }),
                            });
                });
        },
        90420: (e, t, i) => {
            'use strict';
            i.d(t, { M1: () => o, N7: () => s, UM: () => r, q7: () => n, yx: () => a });
            let o = 'user:onyourwave',
                r = ['activity'],
                a = 'diversity:reshuffle',
                n = 'multivibe',
                s = 'user';
        },
        91087: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            let o = (0, i(53548).createContext)(null);
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            class o extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = i), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, o.prototype));
                }
            }
            class r extends o {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        93512: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => r });
            var o = i(51231);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, o.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        95210: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var o = i(53548),
                r = i(38860);
            let a = (e) => {
                let t = (0, o.useRef)(!1),
                    i = (0, r.z)();
                (0, o.useEffect)(() => {
                    (e && (null == i || i.disable(), (t.current = !0)), !e && t.current && (null == i || i.enable(), (t.current = !1)));
                }, [e, i]);
            };
        },
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        97811: (e) => {
            e.exports = {
                root: 'PlayingAnimation_root__YrWz7',
                'bubble-out': 'PlayingAnimation_bubble-out__k2fBS',
                root_stopAnimation: 'PlayingAnimation_root_stopAnimation__qOw_g',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 7456, 127, 4596, 5108, 8380, 2431, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 6949, 4732, 1195, 1598, 6281,
                1928, 7627, 9124, 7967, 900, 9934, 6387, 4613, 5638, 4530, 763, 2670, 7358,
            ],
            () => e((e.s = 53500)),
        ),
            (_N_E = e.O()));
    },
]);
