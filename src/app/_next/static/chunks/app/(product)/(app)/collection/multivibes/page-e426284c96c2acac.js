(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9754],
    {
        188: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => n });
            var a = i(18593);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === a.K.Vibe;
            }
        },
        1344: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            let a = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                n = (e) =>
                    a.reduce((t, i) => {
                        let { queryKey: a, resultKey: n } = i;
                        return ('string' == typeof e[a] && (t[n] = e[a]), t);
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
            i.d(t, { Z: () => n });
            var a = i(67174);
            let n = {
                main: (0, a.u)('/'),
                chart: (0, a.u)('/chart'),
                chartPodcasts: (0, a.u)('/chart/podcasts'),
                collection: (0, a.u)('/collection'),
                collectionAlbums: (0, a.u)('/collection/albums'),
                collectionArtists: (0, a.u)('/collection/artists'),
                collectionClips: (0, a.u)('/collection/clips'),
                collectionDislikes: (0, a.u)('/collection/dislikes'),
                collectionKids: (0, a.u)('/collection/kids'),
                collectionKidsAlbums: (0, a.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, a.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, a.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, a.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, a.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, a.u)('/collection/multivibes'),
                collectionPlaylists: (0, a.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, a.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, a.u)('/collection/playlists/liked'),
                collectionShelf: (0, a.u)('/collection/shelf'),
                collectionShelfLiked: (0, a.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, a.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, a.u)('/collection/shelf/recently-played'),
                concerts: (0, a.u)('/concerts'),
                kids: (0, a.u)('/kids'),
                mixes: (0, a.u)('/mixes'),
                musicHistory: (0, a.u)('/music-history'),
                muzmarket: (0, a.u)('/muzmarket'),
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                multivibe: (0, a.u)('/multivibe'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
            };
        },
        5407: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => p });
            var a = i(88800),
                n = i(29993),
                o = i(88969),
                r = i(29504),
                s = i(59304),
                l = i(51028),
                c = i.n(l);
            let d = () =>
                (0, a.jsx)(s.$, {
                    message: (0, a.jsx)(r.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, a.jsx)(o.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var u = i(29595),
                _ = i(74965),
                m = i(72288);
            let p = () => {
                let { notify: e } = (0, _.l)(),
                    { advert: t } = (0, m.g)();
                return (0, n.c)(() => (t.isAdvertShown && e((0, a.jsx)(d, {}), { containerId: u.u.INFO }), !!t.isAdvertShown));
            };
        },
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var a = i(88800),
                n = i(88969),
                o = i(58390),
                r = i(17392),
                s = i(29993),
                l = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                _ = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: v, isBlock: b, key: g, className: f } = e,
                    y = (0, o.useRouter)(),
                    x = (0, _.N)().get(u.QG),
                    A = (0, s.c)(() => {
                        x.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(x.authorizationUrl));
                    });
                return (0, a.jsx)(
                    l.$,
                    {
                        onClick: A,
                        className: f,
                        isBlock: b,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, a.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        8962: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => o });
            var a = i(51235),
                n = i(80989);
            let o = (e, t) => (0, a.A)((0, n.f)(e), (0, n.f)(t));
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
            i.d(t, { G: () => n, e: () => o });
            var a = i(53548);
            let n = (0, a.createContext)(null);
            function o() {
                return (0, a.useContext)(n);
            }
        },
        10270: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var a = i(56949),
                n = i(53548),
                o = i(29993),
                r = i(44230),
                s = i(72288);
            let l = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, s.g)(),
                        { contentScrollRef: m } = (0, r.g)(),
                        p = (0, n.useRef)(new Map()),
                        v = (0, n.useRef)(void 0),
                        b = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = p.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: u,
                            initialRect: l,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let a = t.getBoundingClientRect().top;
                                return e && 1 ? a + window.scrollY : !e && i ? a + i.scrollTop : 0;
                            })(_, d, m),
                        },
                        g = (0, a.XW)(b),
                        f = (0, a.Te)({ ...b, getScrollElement: () => m, initialOffset: null == m ? void 0 : m.scrollTop }),
                        y = _ ? g : f,
                        x = (0, o.c)(() => {
                            y.measure();
                        });
                    return (
                        (0, n.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let a = e.contentRect.height;
                                            a && a !== p.current.get(i) && (p.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && x());
                                }));
                        }, [x]),
                        { virtualizer: y, resizeObserver: v.current }
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
            i.d(t, { c: () => a });
            var a = (function (e) {
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
        15947: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var a = i(35412),
                n = i(28166),
                o = i(97261);
            let r = [a.cy.HTTP, a.cy.HTTPS, a.cy.MAILTO, a.cy.TEL, n.Lz],
                s = (e, t, i) => {
                    let s;
                    try {
                        s = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, a.Rj)(e, { allowedProtocols: new Set([...r, s.protocol]), baseUrl: s.href });
                    return l.isAllowed
                        ? l.url.protocol === n.Lz
                            ? { type: o.I.DEEPLINK, href: e }
                            : '_blank' !== i && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, s)
                              ? { type: o.I.INTERNAL, href: e }
                              : { type: o.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16112: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => T });
            var a = i(88800),
                n = i(96706),
                o = i(53548),
                r = i(2058),
                s = i(42078),
                l = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(65724),
                m = i(84961),
                p = i(17392),
                v = i(79070),
                b = i(90688),
                g = i(97956),
                f = i(90420),
                y = i(15077),
                x = i(33719),
                A = i(55211),
                h = i(14329),
                I = i.n(h);
            let S = (0, m.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: n } = (0, d.g)(),
                    o = n.checkExperiment(g.z.WebNextWaveAgentExperiment, 'on'),
                    r = t.type === f.q7,
                    s = (0, v.L)(() => {
                        var e;
                        return o && t.agent
                            ? (0, a.jsx)(A.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(I().view, { [I().multivibeContainer]: r }),
                                  coverClassName: (0, _.$)({ [I().multivibeCover]: r }),
                                  entityCoverClassName: (0, _.$)({ [I().multivibeAvatar]: r }),
                                  controlClassName: (0, _.$)({ [I().multivibeControl]: r }),
                              })
                            : (0, a.jsx)(b._V, {
                                  className: I().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': p.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = o && t.agent ? void 0 : 'round';
                return (0, a.jsx)(x.k, {
                    closeToast: i,
                    entityVariant: y.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: l,
                    className: I().root,
                });
            });
            var C = i(93512);
            let T = (e) => {
                let { user: t, pinsCollection: i } = (0, d.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: m } = (0, r.A)(),
                    [p, v] = (0, o.useState)(!1);
                return (0, o.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, a.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let o = { ...(0, n.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        r = (0, n.HO)(i.get(e.pinId));
                    v(!0);
                    let c = await e.togglePin();
                    (v(!1),
                        r &&
                            r.type === s._.WAVE_ITEM &&
                            r.data.backgroundImageUrl &&
                            ((o.backgroundImageUrl = r.data.backgroundImageUrl), (o.colors = r.data.colors), (o.agent = r.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (o.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (o.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (o.agent = (0, C.K)(c.data.agent))),
                        c
                            ? _((0, a.jsx)(S, { vibe: o }), { containerId: l.u.INFO })
                            : _((0, a.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [m, _, p, i, t.isAuthorized, e]);
            };
        },
        16704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => m });
            var a = i(88800),
                n = i(84961),
                o = i(53548),
                r = i(2058),
                s = i(33979),
                l = i(17392),
                c = i(29993),
                d = i(96817),
                u = i(52300);
            let _ = (0, n.PA)((e) => {
                    let {
                            iconSize: t,
                            className: i,
                            size: n,
                            variant: o = 'default',
                            isPlaying: _ = !1,
                            onClick: m,
                            iconClassName: p,
                            disabled: v,
                            color: b,
                            buttonVariant: g = 'text',
                            children: f,
                            radius: y = 'round',
                            withHover: x,
                            withRipple: A = !1,
                            ariaDescribedBy: h,
                            forwardRef: I,
                            tabIndex: S,
                            ariaHidden: C,
                            shouldSendAnalyticsOnPlayClick: T,
                        } = e,
                        N = (0, s.g)(),
                        { formatMessage: R } = (0, r.A)(),
                        E = ''.concat(_ ? 'pause' : 'play').concat('filled' === o ? '_filled' : ''),
                        O = _ ? l.S7.PAUSE_BUTTON : l.S7.PLAY_BUTTON,
                        P = R(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        L = (0, c.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == m || m(e), T && !_ && N());
                        });
                    return (0, a.jsx)(d.$, {
                        className: i,
                        variant: g,
                        color: b,
                        radius: y,
                        size: n,
                        flexIcon: !0,
                        withRipple: A,
                        'aria-label': P,
                        onClick: L,
                        icon: (0, a.jsx)(u.I, { variant: E, size: t, className: p }),
                        disabled: v,
                        withHover: x,
                        'aria-describedby': h,
                        ref: I,
                        tabIndex: S,
                        'aria-hidden': C,
                        'data-test-id': O,
                        children: f,
                    });
                }),
                m = (0, o.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
        },
        21284: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { h: () => a }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(a || (a = {})));
        },
        21416: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => s });
            var a = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (n && (n += ' '), (n += a));
                                            else for (i in t) t[i] && (n && (n += ' '), (n += i));
                                        return n;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => n }));
                        let n = a;
                    },
                    2059: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
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
                        function a(e, t, a) {
                            var n = null;
                            if ((void 0 !== a && (n = '' + a), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var o in ((a = {}), t)) 'key' !== o && (a[o] = t[o]);
                            else a = t;
                            return { $$typeof: i, type: e, key: n, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7279: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Spinner = void 0));
                        let n = i(4377),
                            o = i(5881),
                            r = a(i(2059));
                        t.Spinner = (e) => {
                            let { className: t, thicknessSizeRatio: i = 0.1, paddingSizeRatio: a = 0.08, size: s, ...l } = e,
                                c = 100 * i,
                                d = 50 - c / 2 - 100 * a,
                                u = ((3 * Math.PI) / 2) * d;
                            return (0, n.jsxs)('svg', {
                                viewBox: '0 0 '.concat(100, ' ').concat(100),
                                className: (0, o.clsx)(r.default.root, r.default['root_size_'.concat(s)], t),
                                'aria-hidden': !0,
                                ...l,
                                children: [
                                    (0, n.jsx)('defs', {
                                        children: (0, n.jsx)('mask', {
                                            id: 'mask',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: (0, n.jsx)('circle', {
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
                                    (0, n.jsx)('foreignObject', {
                                        x: '0',
                                        y: '0',
                                        width: 100,
                                        height: 100,
                                        mask: 'url(#mask)',
                                        children: (0, n.jsx)('div', { className: r.default.gradient }),
                                    }),
                                ],
                            });
                        };
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, o), i.exports);
            }
            ((o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var r = {};
            (() => {
                (Object.defineProperty(r, 'X', { value: !0 }), (r.$ = void 0));
                var e = o(7279);
                Object.defineProperty(r, '$', {
                    enumerable: !0,
                    get: function () {
                        return e.Spinner;
                    },
                });
            })();
            var s = r.$;
            r.X;
        },
        21576: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => u });
            var a = i(88800),
                n = i(84961),
                o = i(53548),
                r = i(50408),
                s = i(47969),
                l = i(53360),
                c = i(15324),
                d = i.n(c);
            let u = (0, n.PA)((e) => {
                let {
                        count: t,
                        rowGap: i,
                        columnGap: n,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: p,
                        renderItemByIndex: v,
                        onChangeRange: b,
                    } = e,
                    [g, f] = (0, r.d)(),
                    {
                        virtualizer: y,
                        rowResizeObserver: x,
                        columnCount: A,
                        indices: h,
                    } = (0, s.L)({
                        count: t,
                        rowGap: i,
                        columnGap: n,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: p,
                        containerRef: g,
                    });
                (0, o.useEffect)(() => {
                    !y.isScrolling && y.range && (null == b || b(y.range, A));
                }, [b, y.isScrolling, y.range, A]);
                let I = { '--virtual-grid-height': ''.concat(y.getTotalSize(), 'px'), '--virtual-grid-column-count': A };
                return (0, a.jsx)('div', {
                    ref: f,
                    style: I,
                    className: d().root,
                    children: y
                        .getVirtualItems()
                        .map((e) =>
                            (0, a.jsx)(
                                l.U,
                                {
                                    className: d().row,
                                    columnClassName: d().column,
                                    virtualItem: e,
                                    resizeObserver: x,
                                    indices: h,
                                    renderItemByIndex: v,
                                    scrollMargin: y.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        27262: (e) => {
            e.exports = {
                animation_scaled: 'PinButton_animation_scaled__Aj6LA',
                scale: 'PinButton_scale__nyvJS',
                animation_unscaled: 'PinButton_animation_unscaled__QM3sC',
                unscale: 'PinButton_unscale__a8LwS',
            };
        },
        27506: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => a });
            var a = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        27817: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => u });
            var a = i(88800),
                n = i(84961),
                o = i(53548),
                r = i(88969),
                s = i(17392),
                l = i(52300),
                c = i(19934),
                d = i(72288);
            let u = (0, n.PA)((e) => {
                let { isPinned: t, onClick: i, disabled: n, className: u, iconClassName: _ } = e,
                    { user: m } = (0, d.g)(),
                    p = t ? 'unpin' : 'pin',
                    v = t ? s.S7.CONTEXT_MENU_UNPIN_BUTTON : s.S7.CONTEXT_MENU_PIN_BUTTON,
                    b = (0, o.useMemo)(() => (t ? (0, a.jsx)(r.A, { id: 'interface-actions.unpin' }) : (0, a.jsx)(r.A, { id: 'interface-actions.pin' })), [t]);
                return (0, a.jsx)(c.Dr, {
                    className: u,
                    onClick: i,
                    icon: (0, a.jsx)(l.I, { className: _, variant: p, size: 'xxs' }),
                    'data-test-id': v,
                    disabled: n || !m.isAuthorized,
                    children: b,
                });
            });
        },
        28166: (e, t, i) => {
            'use strict';
            i.d(t, { Lz: () => a, ov: () => n });
            let a = ''.concat('yandexmusic', ':'),
                n = ''.concat(a, '//');
        },
        31510: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            let a = (e) => ({ uri: e.uri, color: e.color });
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => j });
            var a = i(88800),
                n = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                _ = i(87999),
                m = i(47149),
                p = i(84423),
                v = i(89846),
                b = i(64543),
                g = i(63582);
            let f = (0, g.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, v.g)(),
                        { screen: a } = (0, b.j)();
                    return {
                        sendRefreshEvent: (0, r.useCallback)(() => {
                            if (!t || !i || !(null == a ? void 0 : a.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: a.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == a ? void 0 : a.pageId]),
                    };
                }),
                y = (0, g.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: a } = (0, v.g)(),
                        { screen: n } = (0, b.j)();
                    (0, r.useEffect)(() => {
                        if (!i || !a || !(null == n ? void 0 : n.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: a,
                            pageId: n.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, a, null == n ? void 0 : n.pageId]);
                });
            var x = i(44230),
                A = i(4370),
                h = i(72288),
                I = i(97956),
                S = i(56248),
                C = i(90688),
                T = i(78940);
            let N = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var R = i(96856),
                E = i.n(R);
            let O = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: o } = e,
                    { slam: r } = (0, h.g)(),
                    { contentRef: s } = (0, x.g)(),
                    d = (0, T.Z)(A.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(E().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(S.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(E().navigation, { [E().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: o,
                            }),
                        (0, a.jsxs)('div', {
                            className: (0, n.$)(E().content, { [E().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(C._V, { className: E().image, src: N.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: E().message,
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            className: E().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            className: E().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: E().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.HL, {
                                            className: E().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var P = i(9184),
                L = i.n(P);
            let j = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: o } = e,
                    { formatMessage: _ } = (0, s.A)(),
                    m = (0, r.useContext)(h.P),
                    p = null == m ? void 0 : m.experiments.checkExperiment(I.z.WebNextUnstableMusicScreen, 'on'),
                    v = _(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                y(v);
                let { sendRefreshEvent: b } = f(),
                    g = (0, r.useCallback)(() => {
                        (b(), (window.location.href = A.Z.main.href));
                    }, [b]),
                    { contentRef: C } = (0, x.g)();
                return p
                    ? (0, a.jsx)(O, { className: t, withBackwardControl: i, onBack: o })
                    : (0, a.jsxs)('div', {
                          className: (0, n.$)(L().root, t),
                          children: [
                              i &&
                                  (0, a.jsx)(S.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(L().navigation, { [L().navigation_desktop]: !C }),
                                      withForwardControl: !1,
                                      onBackwardClick: o,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, n.$)(L().content, { [L().content_shrink]: !i }),
                                  children: [
                                      (0, a.jsx)(d.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(u.DZ, { className: (0, n.$)(L().title, L().important), variant: 'h3', size: 'xs', children: v }),
                                      (0, a.jsxs)(u.HL, {
                                          className: (0, n.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: g,
                                          className: L().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33719: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => x });
            var a = i(88800),
                n = i(65724),
                o = i(53548),
                r = i(17392),
                s = i(90688),
                l = i(73170),
                c = i(29504),
                d = i(2058),
                u = i(88969),
                _ = i(29993),
                m = i(15077),
                p = i(72288),
                v = i(97956),
                b = i(91292),
                g = i(59304),
                f = i(95641),
                y = i.n(f);
            let x = (e) => {
                let {
                        closeToast: t,
                        className: i,
                        coverUri: f,
                        entityTitle: x,
                        entityDescription: A,
                        entityVariant: h,
                        entityUrl: I,
                        customCover: S,
                        radius: C,
                        isPinned: T,
                    } = e,
                    N = (() => {
                        let { formatMessage: e } = (0, d.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((i) => {
                            let { entityVariant: n, values: o, entityTitle: r, entityDescription: s } = i;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, a.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: r }),
                                        };
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: r, description: s }),
                                    };
                            }
                        });
                    })(),
                    R = (() => {
                        let { formatMessage: e } = (0, d.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((i) => {
                            let { entityVariant: n, values: o, entityTitle: r, entityDescription: s } = i;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, a.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: r }),
                                        };
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: r, description: s }),
                                    };
                            }
                        });
                    })(),
                    E = (0, o.useMemo)(
                        () =>
                            I
                                ? (0, a.jsx)(b.N, {
                                      className: y().link,
                                      href: I,
                                      title: x,
                                      children: (0, a.jsxs)(c.HL, {
                                          className: y().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', x, '\xa0'],
                                      }),
                                  })
                                : (0, a.jsxs)(c.HL, {
                                      className: y().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: x,
                                      children: ['\xa0', x, '\xa0'],
                                  }),
                        [x, I],
                    ),
                    O = (0, o.useMemo)(
                        () => S || (0, a.jsx)(s._V, { className: y().image, src: f, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [f, S],
                    ),
                    P = (0, o.useMemo)(() => {
                        let e = { entity: E, description: A };
                        return T
                            ? N({ entityVariant: h, values: e, entityTitle: x, entityDescription: A })
                            : R({ entityVariant: h, values: e, entityTitle: x, entityDescription: A });
                    }, [E, A, T, R, h, x, N]);
                return (0, a.jsx)(g.$, {
                    className: (0, n.$)(y().root, { [y().root_withLongText]: h === m.c.AUDIOBOOK }, i),
                    closeToast: t,
                    cover: O,
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': P.ariaLabel }) }),
                            (0, a.jsx)(c.HL, {
                                className: y().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': r.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: P.caption,
                            }),
                        ],
                    }),
                    coverRadius: C,
                });
            };
        },
        34945: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l });
            var a = i(88800),
                n = i(65724),
                o = i(17392),
                r = i(97811),
                s = i.n(r);
            let l = (e) => {
                let { className: t, stopAnimation: i } = e;
                return (0, a.jsx)('div', { className: (0, n.$)(s().root, { [s().root_stopAnimation]: i }, t), 'data-test-id': o.S7.PLAYING_ANIMATION });
            };
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => o });
            var a = i(53548);
            i(30282);
            var n = i(58390);
            let o = (e) => {
                let t = (0, n.usePathname)(),
                    [i, o] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), o(!0));
                    }, [e, i, t]));
            };
        },
        38577: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 48820)), Promise.resolve().then(i.bind(i, 90036)));
        },
        38860: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => o });
            var a = i(53548),
                n = i(41168);
            let o = () => (0, a.useContext)(n.P);
        },
        39267: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => f });
            var a = i(88800),
                n = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(17392),
                c = i(7555),
                d = i(21416),
                u = i(72288),
                _ = i(81877),
                m = i(16704),
                p = i(34945),
                v = i(11325),
                b = i.n(v);
            let g = (0, o.PA)((e) => {
                    let {
                            className: t,
                            isAvailable: i,
                            isDisliked: o,
                            coverUri: r,
                            title: v,
                            onPlayButtonClick: g,
                            isPlaying: f,
                            isCurrent: y,
                            radius: x,
                            isPlayButtonLoading: A,
                            isLoading: h,
                            shouldShowControl: I = !0,
                            ariaDescribedBy: S,
                            ignoreDislikedStyles: C,
                            entityCoverStyle: T,
                            forwardRef: N,
                            playButtonIconSize: R = 'xs',
                            alt: E,
                            withLoadingIndicator: O,
                            coverClassName: P,
                            entityCoverClassName: L,
                            controlClassName: j,
                            fallbackIconSize: M = 'xs',
                        } = e,
                        { formatMessage: k } = (0, s.A)(),
                        {
                            settings: { isMobile: w },
                        } = (0, u.g)();
                    return (0, a.jsx)('div', {
                        className: (0, n.$)(b().root, t, { [b().root_disabled]: !i, [b().root_current]: y, [b().root_disliked]: o && !C, [b().root_playing]: f }),
                        'data-test-id': l.S7.PLAY_BUTTON_WITH_COVER,
                        children: (0, a.jsxs)(c.t, {
                            className: (0, n.$)(b().cover, P),
                            radius: x,
                            children: [
                                (0, a.jsx)(_.B, {
                                    className: (0, n.$)(b().coverImage, L),
                                    src: r,
                                    size: 100,
                                    alt: null != E ? E : k({ id: 'entity-names.track-name' }, { trackName: v }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    isAvailable: i,
                                    fallbackIconSize: M,
                                    style: T,
                                    withLoadingIndicator: O,
                                }),
                                I &&
                                    (0, a.jsxs)('div', {
                                        className: (0, n.$)(b().control, j),
                                        children: [
                                            !h && (0, a.jsx)(p.P, { stopAnimation: !f, className: b().playingAnimation }),
                                            h && w && (0, a.jsx)(d.y, { size: 'xs', className: b().spinner }),
                                            !w &&
                                                (0, a.jsx)(m.D, {
                                                    ref: N,
                                                    variant: 'filled',
                                                    className: (0, n.$)(b().playButton, { [b().playButton_loading]: A }),
                                                    iconClassName: b().playButtonIcon,
                                                    isPlaying: f,
                                                    onClick: g,
                                                    iconSize: R,
                                                    ariaDescribedBy: S,
                                                    disabled: !i,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                }),
                f = (0, r.forwardRef)((e, t) => (0, a.jsx)(g, { forwardRef: t, ...e }));
        },
        40887: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => u });
            var a = i(88800),
                n = i(53548),
                o = i(2058),
                r = i(29993),
                s = i(29595),
                l = i(74965),
                c = i(27506),
                d = i(66943);
            let u = (e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    [u, _] = (0, n.useState)(!1),
                    { notify: m } = (0, l.l)(),
                    p = (0, n.useRef)(!1),
                    { formatMessage: v } = (0, o.A)();
                return {
                    exitVibeRoom: (0, r.c)(async () => {
                        t &&
                            !p.current &&
                            (_(!0),
                            (p.current = !0),
                            (await t.exitRoom({ roomId: t.id })) === c.F.ERROR
                                ? m((0, a.jsx)(d.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR })
                                : i(),
                            _(!1),
                            (p.current = !1));
                    }),
                    isPending: u,
                };
            };
        },
        41153: (e) => {
            e.exports = { root_mobile: 'VibeRoomContextMenu_root_mobile__mH0PT' };
        },
        41168: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => a });
            let a = (0, i(53548).createContext)(null);
        },
        42078: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
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
                })(a || (a = {})));
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
            var a = i(88800),
                n = i(65724),
                o = i(19994),
                r = i(72288),
                s = i(76524),
                l = i(3150),
                c = i.n(l);
            let d = (e) => {
                let { isActive: t, className: i, 'aria-label': l, withMobileLayout: d = !1 } = e,
                    {
                        settings: { isMobile: u },
                    } = (0, r.g)(),
                    _ = d && u;
                return (0, a.jsxs)('div', {
                    'aria-label': l,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(c().root, { [c().root_mobile]: _ }, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: (0, n.$)(c().coverContainer, { [c().coverContainer_mobile]: _ }),
                            children: [
                                (0, a.jsx)(s.b, { align: 'back', children: (0, a.jsx)(o.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                                (0, a.jsx)(s.b, { align: 'front', children: (0, a.jsx)(o.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: (0, n.$)(c().infoContainer, { [c().infoContainer_mobile]: _ }),
                            children: (0, a.jsx)(o.W, { isActive: t, className: (0, n.$)(c().title, { [c().title_mobile]: _ }), radius: 's' }),
                        }),
                    ],
                });
            };
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
            var a = i(88800),
                n = i(53548),
                o = i(2058),
                r = i(188),
                s = i(18593),
                l = i(80989),
                c = i(29993),
                d = i(7123),
                u = i(66943),
                _ = i(84384),
                m = i(29595),
                p = i(74965),
                v = i(72288),
                b = i(90420);
            let g = 'radio';
            var f = i(8962),
                y = i(9630);
            let x = (e) => {
                var t, i;
                let { seeds: x = [b.M1], pageIdForFrom: A, blockIdForFrom: h, onPlayInterrupted: I, parentContextId: S } = e,
                    { from: C } = (0, _.f)(
                        ((e, t) =>
                            !t || (null == e ? void 0 : e.includes(g)) || t.includes(g)
                                ? { pageId: e, blockId: t }
                                : { pageId: e, blockId: ''.concat(t, '-').concat(g) })(A, h),
                    ),
                    { formatMessage: T } = (0, o.A)(),
                    N = (0, y.e)(),
                    { notify: R } = (0, p.l)(),
                    { sonataState: E, vibe: O, fullscreenPlayer: P, user: L, freeAccess: j } = (0, v.g)(),
                    [M, k] = (0, n.useState)(null),
                    w = (0, c.c)(() => (P.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR));
                ((0, n.useEffect)(() => {
                    let e =
                        null == N
                            ? void 0
                            : N.state.currentContext.onChange(() => {
                                  (0, r.i)(N.state.currentContext.value) ? k(N.state.currentContext.value) : k(null);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [N]),
                    (0, n.useEffect)(() => {
                        let e =
                            null == M
                                ? void 0
                                : M.observableActiveSession.onChange(() => {
                                      var e, t;
                                      (null == M || null == (e = M.observableActiveSession.value) ? void 0 : e.wave) &&
                                          O.setVibe(null == M || null == (t = M.observableActiveSession.value) ? void 0 : t.wave);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [M, O]));
                let B = (0, c.c)(async (e) => {
                        try {
                            await (null == N
                                ? void 0
                                : N.playContext({
                                      contextData: {
                                          type: s.K.Vibe,
                                          meta: { id: (0, l.f)(e) },
                                          seeds: e,
                                          from: C,
                                          includeTracksInResponse: !0,
                                          interactive: !0,
                                          parentContextId: S,
                                      },
                                      loadContextMeta: !0,
                                  }));
                        } catch (e) {
                            R((0, a.jsx)(u.h, { error: T({ id: 'vibe-errors.start-vibe' }) }), { containerId: w() });
                        }
                    }),
                    V = (0, c.c)(async (e) => {
                        if (N && M)
                            try {
                                await M.setSettings({ seeds: e, queueState: N.state.queueState, interactive: !0, from: C });
                            } catch (e) {
                                R((0, a.jsx)(u.h, { error: T({ id: 'vibe-errors.apply-vibe-setting' }) }), { containerId: w() });
                            }
                    }),
                    D = (0, c.c)(async (e) => {
                        if (N)
                            try {
                                await N.restartContext({ playAfterRestart: e });
                            } catch (e) {
                                R((0, a.jsx)(u.h, { error: T({ id: 'error-messages.something-went-wrong' }) }), { containerId: w() });
                            }
                    }),
                    U = !!M,
                    W = U && (0, f._)(null != (i = null == (t = O.meta) ? void 0 : t.seeds) ? i : [], x),
                    z = W && E.status === d.MT.PLAYING,
                    F = W && E.status === d.MT.PAUSED;
                (0, n.useEffect)(() => {
                    z && O.setIsApplying(!1);
                }, [z, O]);
                let K = (0, c.c)(async () => {
                        if (!z && (j.isFreeWebUser || !L.isAuthorized)) {
                            null == I || I();
                            return;
                        }
                        (O.setIsApplying(!0), await B(x), O.setIsApplying(!1));
                    }),
                    Y = (0, c.c)(async (e, t) => {
                        var i;
                        O.setIsApplying(!0);
                        let a = [];
                        if (O.meta && Array.isArray(null == (i = O.meta) ? void 0 : i.seeds))
                            if (O.meta.seeds.includes(e)) a = O.meta.seeds.filter((t) => t !== e);
                            else if (t) a = [e, ...O.meta.seeds.filter((e) => e.includes('setting'))];
                            else {
                                let t = e.split(':')[0];
                                a = t
                                    ? ['settingDiversity', 'settingMoodEnergy', 'settingLanguage'].includes(t)
                                        ? [...O.meta.seeds.filter((e) => !e.startsWith(''.concat(t, ':'))), e]
                                        : [...O.meta.seeds, e]
                                    : [...O.meta.seeds];
                            }
                        else a = [e];
                        (M ? (await V(a), await D(!0)) : await B(a), O.setIsApplying(!1));
                    });
                return {
                    isVibeContext: U,
                    isPlaying: z,
                    isPaused: F,
                    isCurrent: W,
                    togglePlay: K,
                    resetContext: (0, c.c)(async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [b.M1];
                        (O.setIsApplying(!0), M ? (await V(e), await D(!0)) : await B(e), O.setIsApplying(!1));
                    }),
                    applySetting: Y,
                    // for PulseSync: BEGIN play native wave seeds through the authorized playback flow
                    playSeeds: (0, c.c)(async (e) => {
                        let t = Array.isArray(e) && e.length > 0 ? e : x;
                        if (j.isFreeWebUser || !L.isAuthorized) {
                            null == I || I();
                            return;
                        }
                        (O.setIsApplying(!0), M ? (await V(t), await D(!0)) : await B(t), O.setIsApplying(!1));
                    }),
                    // for PulseSync: END play native wave seeds through the authorized playback flow
                };
            };
        },
        47969: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var a = i(35802),
                n = i(79070),
                o = i(61013),
                r = i(53548);
            let s = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: a, totalCount: n, columnGap: o, minColumnCount: r, maxColumnCount: s } = e,
                    l = Math.max(1, Math.floor((a + o) / (t + o))),
                    c = Math.max(r, Math.floor((a + o) / ((i + t) * 0.5 + o)));
                for (let e = r; e <= l; e++) {
                    let n = (a - (e - 1) * o) / e;
                    if (n >= t && n <= i) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(n / (c = s ? Math.min(c, s) : c)), columnCount: c };
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
                        maxColumnCount: p,
                        containerRef: v,
                    } = e,
                    { rowCount: b, columnCount: g } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: a, minColumnWidth: n, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, _] = (0, r.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, r.useRef)(null),
                            p = (0, r.useMemo)(
                                () =>
                                    (0, o.A)(
                                        (e) => {
                                            _(
                                                s({
                                                    minColumnWidth: n,
                                                    maxColumnWidth: a,
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
                                [c, d, a, i, n, l],
                            );
                        return (
                            (0, r.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(p);
                                    })),
                                    t &&
                                        (_(
                                            s({
                                                minColumnWidth: n,
                                                maxColumnWidth: a,
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
                                [c, t, p, d, a, i, n, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: _, minColumnWidth: u, maxColumnCount: p, containerRef: v }),
                    { virtualizer: f, resizeObserver: y } = (0, l.r)({ count: b, getEstimateSize: i, gap: c, containerRef: v }),
                    x = (0, a.A)(
                        Array.from({ length: t }, (e, t) => t),
                        g,
                    ),
                    A = (0, n.L)(() => {
                        var e, t;
                        if (!f.range) return null;
                        let i = null == (e = x[f.range.startIndex]) ? void 0 : e.at(0),
                            a = null == (t = x[f.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== a ? { startIndex: i, endIndex: a } : null;
                    });
                return { virtualizer: f, rowResizeObserver: y, indices: x, columnCount: g, visibleRange: A };
            };
        },
        48820: (e, t, i) => {
            'use strict';
            i.d(t, { WithWebNextWaveForTwo: () => s });
            var a = i(84961),
                n = i(58390),
                o = i(4370),
                r = i(72288);
            let s = (0, a.PA)((e) => {
                let { children: t } = e,
                    { multivibe: i } = (0, r.g)();
                return (i.isEnabled || (0, n.redirect)(o.Z.main.href), t);
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
            i.d(t, { p: () => o });
            var a = i(5120),
                n = i(31510);
            let o = (e) => {
                let t = (0, n.e)(e);
                return (0, a.wg)(t);
            };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var a = i(88800),
                n = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(51516),
                l = i.n(s);
            let c = (0, o.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: o, columnClassName: s, className: c, resizeObserver: d, scrollMargin: u } = e,
                    _ = (0, r.useRef)(null),
                    m = t[i.index],
                    p = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - u, 'px') };
                return (
                    (0, r.useEffect)(() => {
                        let e = _.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, a.jsx)('div', {
                        'data-index': i.index,
                        ref: _,
                        style: p,
                        className: (0, n.$)(l().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, a.jsx)('div', { className: s, children: o(e) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        55211: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => d });
            var a = i(88800),
                n = i(65724),
                o = i(21284),
                r = i(79070),
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
                        className: p,
                        coverClassName: v,
                        entityCoverClassName: b,
                        controlClassName: g,
                        fallbackIconSize: f,
                    } = e,
                    y = (0, r.L)(() => {
                        if (t.entityType) return t.entityType === o.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, a.jsx)(s.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, n.$)(c().root, c()['root_radius_'.concat(y)], { [c().root_withShadow]: !!t.entityType }, p),
                    radius: y,
                    onPlayButtonClick: d,
                    isPlaying: i,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: f,
                    coverClassName: v,
                    entityCoverClassName: b,
                    controlClassName: g,
                });
            };
        },
        55693: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var a = i(53548),
                n = i(63765),
                o = i(91087);
            let r = () => {
                let { sendSearchFeedback: e, id: t, type: i, blockPosition: r, position: s } = (0, a.useContext)(o.N) || {};
                if (void 0 === t || void 0 === i || void 0 === r || void 0 === s) return {};
                let l = null == e ? void 0 : e.bind(null, { feedbackType: n.n.LIKE, id: t, type: i, blockPosition: r, position: s });
                return {
                    sendLikeSearchFeedback: l,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: n.n.NAVIGATE, id: t, type: i, blockPosition: r, position: s }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: n.n.PLAY, id: t, type: i, blockPosition: r, position: s }),
                };
            };
        },
        56475: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => u });
            var a = i(88800),
                n = i(53548),
                o = i(2058),
                r = i(29993),
                s = i(29595),
                l = i(74965),
                c = i(27506),
                d = i(66943);
            let u = (e) => {
                let [t, i] = (0, n.useState)(!1),
                    { notify: u } = (0, l.l)(),
                    _ = (0, n.useRef)(!1),
                    { formatMessage: m } = (0, o.A)();
                return {
                    editVibeRoom: (0, r.c)(async (t) => {
                        e &&
                            !_.current &&
                            (i(!0),
                            (_.current = !0),
                            (await e.editRoom({ roomId: e.id, name: t })) === c.F.ERROR &&
                                u((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }),
                            i(!1),
                            (_.current = !1));
                    }),
                    isPending: t,
                };
            };
        },
        56862: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => v });
            var a = i(88800),
                n = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(17392),
                c = i(81883),
                d = i(96817),
                u = i(52300),
                _ = i(72288),
                m = i(27262),
                p = i.n(m);
            let v = (0, o.PA)((e) => {
                let { isPinned: t, onClick: i, className: o, size: m = 's', iconSize: v = 'xxs', withScaleAnimation: b = !0, withRipple: g, isDisabled: f } = e,
                    { user: y } = (0, _.g)(),
                    { formatMessage: x } = (0, s.A)(),
                    { scaleAnimation: A, unscaleAnimation: h, handleAnimationEnd: I, handleClick: S } = (0, c.C)({ shouldStartFromUnscale: t, onClick: i, isEnabled: b }),
                    C = t ? 'pin_filled' : 'pin',
                    T = (0, r.useMemo)(() => (t ? x({ id: 'interface-actions.unpin' }) : x({ id: 'interface-actions.pin' })), [x, t]);
                return (0, a.jsx)(d.$, {
                    className: (0, n.$)(p().root, { [p().animation_scaled]: A, [p().animation_unscaled]: h }, o),
                    onAnimationEnd: I,
                    variant: 'default',
                    color: 'secondary',
                    onClick: S,
                    'aria-label': T,
                    'aria-pressed': t,
                    size: m,
                    withRipple: g,
                    radius: 'round',
                    disabled: f || !y.isAuthorized,
                    icon: (0, a.jsx)(u.I, { className: p().icon, variant: C, size: v }),
                    'data-test-id': l.S7.PIN_BUTTON,
                });
            });
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => v });
            var a = i(88800),
                n = i(84961),
                o = i(58390),
                r = i(65724),
                s = i(88969),
                l = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let _ = (0, n.PA)(() =>
                (0, a.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, a.jsx)(l.DZ, {
                            className: (0, r.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, a.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, a.jsx)(l.HL, {
                            className: (0, r.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, a.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, a.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(4370),
                p = i(72288);
            let v = (0, n.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: n } = (0, p.g)();
                return n.isAuthorized ? t : (i && (0, o.redirect)(m.Z.main.href), (0, a.jsx)(_, {}));
            });
        },
        63087: (e) => {
            e.exports = { surface: 'VibeRoomMemberAvatar_surface__L4WU2', overlay: 'VibeRoomMemberAvatar_overlay__9adN4', image: 'VibeRoomMemberAvatar_image__g4AsX' };
        },
        63765: (e, t, i) => {
            'use strict';
            var a, n;
            (i.d(t, { n: () => n, o: () => a }),
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
                })(a || (a = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(n || (n = {})));
        },
        64284: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            var a = (function (e) {
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
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var a = i(4086),
                n = i(41928),
                o = i(44084);
            let r = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof o.r) return e;
                        let t = r.get(e);
                        if (t) return t;
                        let i = {
                            log: (t, i) => e.info(t, i),
                            trace: (t, i) => e.trace(t, i),
                            debug: (t, i) => e.debug(t, i),
                            info: (t, i) => e.info(t, i),
                            warn: (t, i) => e.warn(t, i),
                            error: (t, i) => e.error(t, i),
                            fatal: (t, i) => e.fatal(t, i),
                            child: (t) => e.child(t),
                        };
                        return (r.set(e, i), i);
                    })((0, n.N)().get(a.Zf));
        },
        66943: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => d });
            var a = i(88800),
                n = i(65724),
                o = i(73170),
                r = i(29504),
                s = i(59304),
                l = i(49397),
                c = i.n(l);
            let d = (e) => {
                let { error: t, closeToast: i, className: l } = e;
                return (0, a.jsx)(s.$, {
                    className: (0, n.$)(c().root, l),
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(o.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, a.jsx)(r.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: i,
                });
            };
        },
        72131: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => r });
            var a = i(10285),
                n = i(42668),
                o = i(72288);
            let r = (e) => {
                let { location: t } = (0, o.g)();
                return (0, a.r)(e, t.tld, n.B);
            };
        },
        73170: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => c });
            var a,
                n = i(53548),
                o = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (n && (n += ' '), (n += a));
                                            else for (i in t) t[i] && (n && (n += ' '), (n += i));
                                        return n;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => n }));
                        let n = a;
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var n = null;
                            if ((void 0 !== a && (n = '' + a), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var o in ((a = {}), t)) 'key' !== o && (a[o] = t[o]);
                            else a = t;
                            return { $$typeof: i, type: e, key: n, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5531: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let n = i(4377),
                            o = i(5881),
                            r = i(810),
                            s = a(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: a, ...l } = e,
                                c = (0, o.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, r.isValidElement)(a)
                                ? (0, r.cloneElement)(a, { ...l, className: (0, o.clsx)(c, a.props.className) })
                                : (0, n.jsx)('span', { className: c, ...l, children: a });
                        };
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                r = {};
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (o[e].call(i.exports, i, i.exports, s), i.exports);
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
            var a = i(88800),
                n = i(65724),
                o = i(82892),
                r = i.n(o);
            let s = (e) => {
                let { align: t, children: i, overlay: o, isDisabled: s = !1, className: l, surfaceClassName: c, overlayClassName: d } = e,
                    u = 'back' === t;
                return (0, a.jsxs)('span', {
                    className: (0, n.$)(r().root, u ? r().root_back : r().root_front, l),
                    children: [
                        (0, a.jsxs)('span', {
                            className: (0, n.$)(r().circle, { [r().circle_back]: u, [r().circle_disabled]: s }),
                            children: [(0, a.jsx)('span', { className: (0, n.$)(r().surface, c), children: i }), d && (0, a.jsx)('span', { className: d })],
                        }),
                        o,
                    ],
                });
            };
        },
        76830: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => y });
            var a = i(88800),
                n = i(65724),
                o = i(84961),
                r = i(2058),
                s = i(88969),
                l = i(87999),
                c = i(80643),
                d = i(17392),
                u = i(29993),
                _ = i(96817),
                m = i(52300),
                p = i(29504),
                v = i(72288),
                b = i(76524),
                g = i(47674),
                f = i.n(g);
            let y = (0, o.PA)((e) => {
                let { withMobileLayout: t } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: o,
                    } = (0, v.g)(),
                    { formatMessage: g } = (0, r.A)(),
                    y = (0, c.S)(),
                    x = t && i,
                    A = (0, u.c)(() => {
                        (y({ to: l.AppScreen.MultivibeSendingInvitationScreen }), o.promoModal.open());
                    });
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(f().root, { [f().root_mobile]: x }),
                    'data-test-id': d.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_CARD,
                    children: [
                        (0, a.jsxs)(_.$, {
                            className: (0, n.$)(f().button, { [f().button_mobile]: x }),
                            'aria-label': g({ id: 'interface-actions.create' }),
                            onClick: A,
                            variant: 'text',
                            isBlock: !0,
                            withRipple: !1,
                            withHover: !1,
                            'data-test-id': d.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_BUTTON,
                            children: [
                                (0, a.jsx)(b.b, { align: 'back', surfaceClassName: f().surface }),
                                (0, a.jsx)(b.b, {
                                    align: 'front',
                                    surfaceClassName: f().surface,
                                    children: (0, a.jsx)(m.I, { variant: 'add', size: x ? 'xxxs' : 'l', className: f().icon }),
                                }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: f().titleWrapper,
                            children: (0, a.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                className: (0, n.$)(f().title, { [f().title_mobile]: x }),
                                children: (0, a.jsx)(s.A, { id: 'interface-actions.create' }),
                            }),
                        }),
                    ],
                });
            });
        },
        78275: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var a,
                n = i(53548),
                o = {
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                r = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0));
                let e = (function e(t) {
                    var i = r[t];
                    if (void 0 !== i) return i.exports;
                    var a = (r[t] = { exports: {} });
                    return (o[t](a, a.exports, e), a.exports);
                })(810);
                s.useToggle = (t) => {
                    let [i, a] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        a(t);
                    }, [t]);
                    let n = (0, e.useCallback)(() => {
                            a((e) => !e);
                        }, []),
                        o = (0, e.useCallback)(() => {
                            a(!0);
                        }, []),
                        r = (0, e.useCallback)(() => {
                            a(!1);
                        }, []);
                    return { state: i, toggle: n, setState: a, toggleTrue: o, toggleFalse: r };
                };
            })(),
                s.__esModule);
            var l = s.useToggle;
        },
        78940: (e, t, i) => {
            'use strict';
            (i.d(t, { Z: () => l }), i(30282));
            var a = i(58390),
                n = i(29993),
                o = i(67174),
                r = i(15947),
                s = i(97261);
            let l = (e) => {
                let t = (0, a.useRouter)(),
                    { href: i, target: l } = (0, o.u)(e);
                return (0, n.c)((e) => {
                    let a = (0, r.U)(i, window.location.href, l);
                    if (!a) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (a.type === s.I.EXTERNAL || a.type === s.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: i } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, i);
                              })(a.href)
                            : t.push(a.href));
                });
            };
        },
        79070: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            var a = {};
            (Object.defineProperty(a, '__esModule', { value: !0 }), (a.useReturnValue = void 0), (a.useReturnValue = (e) => e()), a.__esModule);
            var n = a.useReturnValue;
        },
        79179: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var a = i(53548),
                n = i(58390),
                o = i(4370),
                r = i(72288);
            let s = () => {
                let e = (0, n.useRouter)(),
                    { user: t, paywall: i, multivibe: s } = (0, r.g)(),
                    [l, c] = (0, a.useState)(!1),
                    d = !s.isEnabled,
                    u = t.hasPlus,
                    _ = i.modal.isOpened,
                    m = !u && l && !_,
                    p = l && _;
                return (
                    (0, a.useEffect)(() => {
                        if (d || m) return void e.replace(o.Z.main.href);
                        l || u || _ || (i.openModal(), c(!0));
                    }, [u, d, _, l, i, e, m]),
                    { hasPlus: u, isPaywallBlocking: p }
                );
            };
        },
        80989: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = (e) => String([...e].sort());
        },
        81877: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var a = i(88800),
                n = i(53548),
                o = i(17392),
                r = i(90688);
            let s = (e) => {
                    let { isAvailable: t = !0, className: i, fallbackIconSize: n, forwardRef: s, ...l } = e;
                    return t
                        ? (0, a.jsx)(r._V, { ref: s, className: i, fallbackIconSize: n, ...l, 'data-test-id': o.S7.ENTITY_COVER_IMAGE })
                        : (0, a.jsx)(r.Ab, { className: i, iconSize: n, iconVariant: 'unavailable', 'data-test-id': o.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                l = (0, n.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e }));
        },
        81883: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var a,
                n = i(53548),
                o = {
                    1676: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let a = i(810);
                        t.useToggle = (e) => {
                            let [t, i] = (0, a.useState)(e);
                            (0, a.useEffect)(() => {
                                i(e);
                            }, [e]);
                            let n = (0, a.useCallback)(() => {
                                    i((e) => !e);
                                }, []),
                                o = (0, a.useCallback)(() => {
                                    i(!0);
                                }, []),
                                r = (0, a.useCallback)(() => {
                                    i(!1);
                                }, []);
                            return { state: t, toggle: n, setState: i, toggleTrue: o, toggleFalse: r };
                        };
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                r = {};
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (o[e](i, i.exports, s), i.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0));
                let e = s(810),
                    t = s(1676);
                l.l = (i) => {
                    let { isEnabled: a = !0, onClick: n, shouldStartFromUnscale: o } = i,
                        { state: r, toggleFalse: s, toggleTrue: l } = (0, t.useToggle)(!1),
                        { state: c, toggleFalse: d, toggleTrue: u } = (0, t.useToggle)(!1),
                        _ = (0, e.useCallback)(
                            (e) => {
                                (null == n || n(e), a && (o ? u() : l()), e.stopPropagation(), e.preventDefault());
                            },
                            [a, n, o, l, u],
                        );
                    return {
                        handleAnimationEnd: (0, e.useCallback)(() => {
                            (s(), d());
                        }, [s, d]),
                        handleClick: _,
                        scaleAnimation: r,
                        unscaleAnimation: c,
                    };
                };
            })(),
                l.X);
            var c = l.l;
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
            i.d(t, { f: () => u });
            var a = i(53548);
            i(30282);
            var n = i(64543),
                o = i(58390),
                r = i(64284),
                s = i(18593),
                l = i(98427),
                c = i(1344);
            let d = [r.U.TRAILER],
                u = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                i = null == e ? void 0 : e.blockId,
                                o = null == e ? void 0 : e.pageEntityId,
                                { screen: r, block: s } = (0, n.j)(),
                                l = null == r ? void 0 : r.pageIdForFrom,
                                c = null == r ? void 0 : r.mainObjectId,
                                d = null == s ? void 0 : s.blockId;
                            return (0, a.useMemo)(() => ({ pageId: null != t ? t : l, blockId: null != i ? i : d, pageEntityId: null != o ? o : c }), [i, d, t, o, l, c]);
                        })(e),
                        i = ((e) => {
                            let { pageId: t, blockId: i } = e;
                            return (0, a.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), i && e.push(i.toLowerCase()), e.push('default'), e.join('-'));
                            }, [i, t]);
                        })(t),
                        r = ((e) => {
                            let { pageId: t, blockId: i, pageEntityId: n, contextType: r, contextId: u, utmForPageIds: _ } = e,
                                m = (0, o.useSearchParams)();
                            return (0, a.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: i, pageEntityId: a, utmForPageIds: n, contextId: o, contextType: r, blockId: u } = e,
                                            _ = t && Object.fromEntries(t),
                                            m = ((e) => {
                                                switch (e) {
                                                    case l.b.ALBUM:
                                                    case l.b.PROMOLANDING_ALBUM:
                                                    case l.b.AUDIOBOOK:
                                                    case l.b.PODCAST:
                                                        return s.K.Album;
                                                    case l.b.ARTIST:
                                                    case l.b.ARTIST_TRACKS:
                                                    case l.b.ARTIST_ALBUMS:
                                                    case l.b.ARTIST_DISCOGRAPHY:
                                                        return s.K.Artist;
                                                    case l.b.PLAYLIST:
                                                        return s.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(i);
                                        return !m || !_ || !a || d.includes(u)
                                            ? null
                                            : (Array.isArray(n) ? n.map((e) => String(e)).includes(String(a)) : !!o && m === r && String(o) === String(a)) && _
                                              ? (0, c.Z)(_)
                                              : null;
                                    })({ searchParams: m, pageId: t, pageEntityId: n, utmForPageIds: _, contextId: u, contextType: r, blockId: i }),
                                [m, t, n, u, r, i, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, a.useMemo)(() => ({ from: i, utmLink: r || void 0 }), [i, r]);
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
        88102: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => Z });
            var a = i(88800),
                n = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(88969),
                c = i(87999),
                d = i(64543),
                u = i(62414),
                _ = i(33979),
                m = i(70621),
                p = i(80643),
                v = i(17392),
                b = i(29993),
                g = i(79070),
                f = i(78275),
                y = i(29832),
                x = i(29504),
                A = i(5407),
                h = i(55693),
                I = i(47964),
                S = i(72288),
                C = i(49176),
                T = i(56862),
                N = i(16704),
                R = i(34945),
                E = i(59378),
                O = i(56475),
                P = i(16112),
                L = i(76903),
                j = i(52300),
                M = i(19934),
                k = i(98427),
                w = i(95210),
                B = i(40887),
                V = i(41153),
                D = i.n(V),
                U = i(54721),
                W = i(89718);
            let z = (0, o.PA)((e) => {
                    let { room: t, isRenamePending: i, onRenameClick: n, onPinClick: o, onExitClick: r, isExitPending: s } = e,
                        l = (0, m.D)();
                    (0, U.u)();
                    let d = (0, b.c)(async () => {
                            (l({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap }), await o());
                        }),
                        u = (0, b.c)(async () => {
                            (l({ actionType: c.ActionType.Remove, userInteractionType: c.UserInteractionType.Tap }), await r());
                        });
                    return (0, a.jsx)(W.J, { room: t, onRenameClick: n, isRenamePending: i, onPinClick: d, onExitClick: u, isExitPending: s });
                }),
                F = (0, o.PA)((e) => {
                    let { room: t, onOpenChange: i, onRenameClick: o, isRenamePending: r, onRoomSuccessExit: l, open: d, className: u, ..._ } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, S.g)(),
                        { formatMessage: p } = (0, s.A)(),
                        b = (0, P.A)(t.wave),
                        { exitVibeRoom: g, isPending: f } = (0, B.J)({ room: t, onRoomSuccessExit: l });
                    return (
                        (0, w.N)(d),
                        (0, a.jsx)(M.W1, {
                            ..._,
                            isMobile: m,
                            offsetOptions: 10,
                            open: d,
                            onOpenChange: i,
                            ariaLabel: p({ id: 'interface-actions.context-menu' }),
                            containerDataTestId: v.OA.vibe.VIBE_ROOM_CONTEXT_MENU,
                            size: 's',
                            icon: (0, a.jsx)(j.I, { size: 'xxs', variant: 'more' }),
                            color: 'secondary',
                            variant: 'default',
                            className: u,
                            menuClassName: (0, n.$)(D().root, { [D().root_mobile]: m }),
                            children: (0, a.jsx)(L.a, {
                                pageId: c.AppScreen.MultivibeActionScreen,
                                pageIdForFrom: k.b.MULTIVIBE_ACTION_SCREEN,
                                pageStyle: c.PageStyles.Sheet,
                                pagePlacement: c.PagePlacements.Bottom,
                                children: (0, a.jsx)(z, { room: t, onRenameClick: o, isRenamePending: r, onPinClick: b, onExitClick: g, isExitPending: f }),
                            }),
                        })
                    );
                });
            var K = i(81877),
                Y = i(76524),
                H = i(63087),
                G = i.n(H);
            let $ = (e) => {
                let { align: t, controls: i, src: n, isDisabled: o = !1, isMobileLayout: r = !1 } = e;
                return (0, a.jsx)(Y.b, {
                    align: t,
                    isDisabled: o,
                    overlay: i,
                    surfaceClassName: G().surface,
                    overlayClassName: G().overlay,
                    children: (0, a.jsx)(K.B, {
                        size: 200,
                        fit: 'cover',
                        className: G().image,
                        src: n,
                        withSrcSet: !1,
                        alt: '',
                        withAvatarReplace: !0,
                        fallbackIconSize: r ? 'xxxs' : 'l',
                    }),
                });
            };
            var X = i(42789),
                q = i.n(X);
            let Z = (0, o.PA)((e) => {
                var t, i, o, L;
                let { room: j, contentLinesCount: M = 3, className: k, withMobileLayout: w = !1, onRoomSuccessExit: B } = e,
                    { screen: V } = (0, d.j)(),
                    D = null == V ? void 0 : V.pageIdForFrom,
                    U = (0, u.D)(),
                    {
                        settings: { isMobile: W },
                        multivibe: z,
                        user: K,
                        freeAccess: Y,
                    } = (0, S.g)(),
                    H = (0, A.P)(),
                    { sendPlaySearchFeedback: G } = (0, h.z)(),
                    [X, Z] = (0, r.useState)(!1),
                    Q = (0, P.A)(j.wave),
                    J = (0, _.g)(),
                    ee = (0, m.D)(),
                    et = (0, p.S)(),
                    { state: ei, setState: ea } = (0, f.e)(!1),
                    { state: en, setState: eo } = (0, f.e)(!1),
                    { state: er, toggleTrue: es, toggleFalse: el } = (0, f.e)(!1),
                    { formatMessage: ec } = (0, s.A)(),
                    { editVibeRoom: ed, isPending: eu } = (0, O.h)(j),
                    e_ = w && W,
                    em = (er || ei || en) && !W,
                    {
                        isPlaying: ep,
                        isPaused: ev,
                        togglePlay: eb,
                    } = (0, I.B)({ seeds: null != (L = null == (t = j.wave) ? void 0 : t.seeds) ? L : [], pageIdForFrom: D, blockIdForFrom: c.EntityTypes.Multiwave }),
                    eg = e_ && !j.isDisabled && (ep || ev),
                    ef = (0, b.c)(() => {
                        !(j.isDisabled || H()) &&
                            (Y.isVibeStartRestricted ||
                                (X || ep || (Z(!0), null == G || G()),
                                eb(),
                                ep || J(),
                                ee({ actionType: ep ? c.ActionType.Pause : c.ActionType.Play, userInteractionType: c.UserInteractionType.Tap })));
                    }),
                    ey = (0, b.c)(async () => {
                        (ee({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap }), await Q());
                    }),
                    ex = (0, b.c)(() => {
                        if (j.isDisabled) {
                            (z.setDisabledRoomId(j.id), z.disabledRoomInfoModal.open(), et({ to: c.AppScreen.MultivibeUnifiedScreen }));
                            return;
                        }
                        W && ef();
                    }),
                    eA = (0, b.c)((e) => {
                        (e && et({ to: c.AppScreen.MultivibeActionScreen, objectType: c.DomainObjectType.Link }), ea(e), eo(e));
                    }),
                    eh = (0, b.c)((e) => {
                        e.target === e.currentTarget && (e.code === C.v.SPACE || e.code === C.v.ENTER) && (e.preventDefault(), ex());
                    }),
                    [eI, eS] = (0, r.useState)(!1),
                    eC = (0, r.useCallback)(
                        (e) => {
                            (eS(!1), ed(e), ee({ actionType: c.ActionType.Rename, userInteractionType: c.UserInteractionType.Tap }));
                        },
                        [ed, ee, eS],
                    ),
                    eT = (0, r.useCallback)(() => {
                        (eS(!0), et({ to: c.AppScreen.MultivibeRenameScreen }));
                    }, [et, eS]),
                    eN = (0, g.L)(() =>
                        (0, a.jsx)(
                            F,
                            {
                                room: j,
                                onOpenChange: eA,
                                open: ei,
                                isRenamePending: eu,
                                onRenameClick: eT,
                                returnFocus: !eI,
                                className: (0, n.$)(q().menuControl, q().control, { [q().menuControl_mobile]: e_ }),
                                onRoomSuccessExit: B,
                                'data-test-id': v.OA.vibe.VIBE_ROOM_CONTEXT_MENU_BUTTON,
                            },
                            j.getKey('VibeRoomContextMenu'),
                        ),
                    ),
                    eR = (0, g.L)(() => {
                        if (!j.isDisabled)
                            return (0, a.jsx)(
                                N.D,
                                {
                                    isPlaying: ep,
                                    onClick: ef,
                                    className: (0, n.$)(q().playControl, q().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                j.getKey('PlayButton'),
                            );
                    }),
                    eE = (0, g.L)(() => {
                        var e;
                        if (!j.isDisabled)
                            return (0, a.jsx)(
                                T.O,
                                {
                                    isPinned: null == (e = j.wave) ? void 0 : e.isPinned,
                                    onClick: ey,
                                    className: (0, n.$)(q().pinControl, q().control, { [q().pinControl_mobile]: e_ }),
                                    withRipple: !1,
                                },
                                j.getKey('PinButton'),
                            );
                    }),
                    eO = j.isDisabled ? ec({ id: 'multivibe.room-status-disabled' }) : ec({ id: 'multivibe.room-status-enabled' }),
                    eP = ec({ id: 'entity-names.vibe-room-name' }, { name: j.name, status: eO }),
                    eL = j.owner.cover.uri,
                    ej = null == (i = j.members[0]) ? void 0 : i.cover.uri,
                    eM = (null == (o = j.owner) ? void 0 : o.uid) && j.owner.uid === K.puid,
                    ek = eM ? eL : ej,
                    ew = eM ? ej : eL,
                    eB = (0, g.L)(() =>
                        (0, a.jsxs)('div', {
                            className: (0, n.$)(q().avatarsWrapper, {
                                [q().avatarsWrapper_mobile]: e_,
                                [q().avatarsWrapper_disabled]: j.isDisabled,
                                [q().avatarsWrapper_visible]: em,
                            }),
                            children: [
                                (0, a.jsx)($, {
                                    align: 'back',
                                    isDisabled: j.isDisabled,
                                    isMobileLayout: e_,
                                    src: ek,
                                    controls: (0, a.jsx)(y.hg, { isVisible: em, className: q().cardControls, radius: 'round', pinControl: eE }),
                                }),
                                (0, a.jsx)($, {
                                    align: 'front',
                                    isDisabled: j.isDisabled,
                                    isMobileLayout: e_,
                                    src: ew,
                                    controls: (0, a.jsx)(y.hg, { isVisible: em, className: q().cardControls, radius: 'round', playControl: eR, menuControl: eN }),
                                }),
                                eg && (0, a.jsx)(R.P, { stopAnimation: ev, className: q().playingAnimation }),
                            ],
                        }),
                    ),
                    eV = (0, g.L)(() =>
                        j.isDisabled
                            ? (0, a.jsxs)('span', {
                                  className: q().unavailableStatus,
                                  'data-test-id': v.OA.vibe.VIBE_ROOM_UNAVAILABLE_STATUS,
                                  children: [
                                      (0, a.jsx)('span', { className: q().unavailableStatusDot }),
                                      (0, a.jsx)(x.HL, {
                                          variant: 'div',
                                          type: 'entity',
                                          size: 'xs',
                                          weight: 'medium',
                                          lineClamp: 1,
                                          children: (0, a.jsx)(l.A, { id: 'multivibe.room-unavailable' }),
                                      }),
                                  ],
                              })
                            : null,
                    ),
                    eD = (0, g.L)(() =>
                        eI
                            ? (0, a.jsx)('div', {
                                  className: q().textFieldContainer,
                                  children: (0, a.jsx)(E.A, {
                                      text: j.name,
                                      className: q().textField,
                                      onChangeFinish: eC,
                                      maxTextLength: 200,
                                      minTextLength: 1,
                                      placeholder: ec({ id: 'vibe-actions.enter-title' }),
                                      shouldFinishOnKeyPress: !0,
                                      'data-test-id': v.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                                  }),
                              })
                            : (0, a.jsx)(x.HL, {
                                  variant: 'div',
                                  type: 'entity',
                                  size: 'm',
                                  weight: 'medium',
                                  lineClamp: j.isDisabled ? 1 : 2,
                                  className: (0, n.$)(q().roomName, { [q().roomName_disabled]: j.isDisabled, [q().roomName_mobile]: e_ }),
                                  'data-test-id': v.OA.vibe.VIBE_ROOM_NAME,
                                  children: j.name,
                              }),
                    );
                return (0, a.jsxs)(y.MN, {
                    ref: U,
                    className: (0, n.$)(q().root, { [q().root_mobile]: e_ }, k),
                    contentLinesCount: e_ ? 2 : M,
                    textPosition: e_ ? 'left' : 'center',
                    wrapperClassName: (0, n.$)(q().cardWrapper, { [q().cardWrapper_mobile]: e_ }),
                    view: eB,
                    'aria-label': eP,
                    tabIndex: 0,
                    onClick: ex,
                    onKeyDown: eh,
                    onFocus: es,
                    onMouseEnter: es,
                    onMouseLeave: el,
                    onBlur: el,
                    'data-test-id': v.OA.vibe.VIBE_ROOM_CARD,
                    children: [(0, a.jsxs)('div', { className: (0, n.$)(q().roomInfo, { [q().roomInfo_mobile]: e_ }), 'aria-hidden': !0, children: [eD, eV] }), e_ && eN],
                });
            });
        },
        89718: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => _ });
            var a = i(88800),
                n = i(84961),
                o = i(88969),
                r = i(17392),
                s = i(52300),
                l = i(19934),
                c = i(21416),
                d = i(72288),
                u = i(27817);
            let _ = (0, n.PA)((e) => {
                var t;
                let { room: i, onRenameClick: n, isRenamePending: _, onPinClick: m, onExitClick: p, isExitPending: v, className: b } = e,
                    {
                        settings: { isMobile: g },
                    } = (0, d.g)(),
                    f = !(null == i ? void 0 : i.isDisabled) && !g,
                    y = !(null == i ? void 0 : i.isDisabled) && !g;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        f && (0, a.jsx)(u.L, { className: b, onClick: m, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        y &&
                            (0, a.jsx)(l.Dr, {
                                className: b,
                                icon: (0, a.jsx)(s.I, { variant: 'edit', size: 'xxs' }),
                                onClick: n,
                                disabled: _,
                                spinner: _ ? (0, a.jsx)(c.y, { size: 'xs' }) : void 0,
                                'data-test-id': r.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, a.jsx)(o.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, a.jsx)(l.Dr, {
                            className: b,
                            icon: (0, a.jsx)(s.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: p,
                            disabled: v,
                            spinner: v ? (0, a.jsx)(c.y, { size: 'xs' }) : void 0,
                            'data-test-id': r.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, a.jsx)(o.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
        },
        90036: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionVibeRoomsPage: () => W });
            var a = i(88800),
                n = i(84961),
                o = i(53548),
                r = i(88969),
                s = i(87999),
                l = i(76903),
                c = i(17392),
                d = i(29504),
                u = i(32596),
                _ = i(69630),
                m = i(79179),
                p = i(98427),
                v = i(46422),
                b = i(44230),
                g = i(37670),
                f = i(72288),
                y = i(93317),
                x = i(2058),
                A = i(54721),
                h = i(37523),
                I = i(7833),
                S = i(29993),
                C = i(79070),
                T = i(90688),
                N = i(66719),
                R = i(73531),
                E = i(24672),
                O = i(30664),
                P = i(76830),
                L = i(21576),
                j = i(67174),
                M = i(91292),
                k = i(43378),
                w = i(88102);
            let B = (0, n.PA)((e) => {
                let { room: t } = e,
                    {
                        collection: { vibeRooms: i },
                    } = (0, f.g)(),
                    n = (0, S.c)(() => {
                        i.deleteRoomFromItems(t.id);
                    });
                return (0, a.jsx)(w.E, { room: t, contentLinesCount: 3, withMobileLayout: !0, onRoomSuccessExit: n });
            });
            var V = i(64974),
                D = i.n(V);
            let U = (0, n.PA)((e) => {
                    let { setContentScrollRef: t } = e,
                        {
                            collection: { vibeRooms: i },
                            settings: { isMobile: n },
                            multivibe: o,
                        } = (0, f.g)(),
                        { formatMessage: l } = (0, x.A)(),
                        u = l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'page.vibe-rooms' }) }),
                        _ = (0, S.c)(() => 315),
                        m = o.isOnboardingEnabled,
                        { href: p } = (0, j.u)('/slides/special/:campaignId', { params: { campaignId: 'wave_for_two' } });
                    (0, A.u)();
                    let v = (0, S.c)(() => void 0),
                        b = (0, S.c)(() => (i.isResolved ? i.items.length + 1 : 4)),
                        g = (0, S.c)((e) => {
                            var t, n;
                            if (!i.isResolved) return (0, a.jsx)(k.P, { isActive: !0, 'aria-label': u, withMobileLayout: !0 });
                            if (0 === e)
                                return (0, a.jsx)(h.F, {
                                    blockId: '',
                                    blockType: '',
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: 1,
                                    children: (0, a.jsx)(I.B, {
                                        objectType: s.DomainObjectType.Shortcut,
                                        objectId: '',
                                        objectPosX: 1,
                                        objectPosY: 1,
                                        children: (0, a.jsx)(P.f, { withMobileLayout: !0 }),
                                    }),
                                });
                            let o = e - 1,
                                r = i.items[o];
                            return r
                                ? (0, a.jsx)(h.F, {
                                      blockId: '',
                                      blockType: '',
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      children: (0, a.jsx)(I.B, {
                                          objectType: s.DomainObjectType.Wave,
                                          objectId: null != (n = null == (t = r.wave) ? void 0 : t.seedsId) ? n : '',
                                          objectPosX: e,
                                          objectPosY: 1,
                                          children: (0, a.jsx)(B, { room: r }, r.id),
                                      }),
                                  })
                                : (0, a.jsx)(k.P, { isActive: !0, 'aria-label': u, withMobileLayout: !0 });
                        }),
                        y = (0, C.L)(() =>
                            (0, a.jsxs)('div', {
                                className: D().emptyContent,
                                'data-test-id': c.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_EMPTY,
                                children: [
                                    (0, a.jsx)(O.t, { className: D().multivibeImage }),
                                    (0, a.jsx)(d.HL, {
                                        className: D().emptyContentTitle,
                                        variant: 'div',
                                        size: 'l',
                                        weight: 'bold',
                                        'data-test-id': c.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_EMPTY_TITLE,
                                        children: (0, a.jsx)(r.A, { id: 'error-messages.empty-collection-vibe-rooms-title' }),
                                    }),
                                    (0, a.jsx)(R.M, { title: l({ id: 'interface-actions.copy-link' }) }),
                                ],
                            }),
                        ),
                        w = (0, C.L)(() =>
                            (0, a.jsx)('div', {
                                className: D().shimmerGrid,
                                children: Array.from({ length: 4 }, (e, t) => (0, a.jsx)(k.P, { isActive: !0, 'aria-label': u, withMobileLayout: !0 }, t)),
                            }),
                        ),
                        V = (0, C.L)(() =>
                            i.isLoading
                                ? w
                                : (0, a.jsx)(L.Q, {
                                      minColumnCount: n ? 1 : 2,
                                      maxColumnCount: n ? 1 : 7,
                                      count: b(),
                                      rowGap: 16,
                                      columnGap: 16,
                                      getEstimateRowSize: _,
                                      minColumnWidth: 170,
                                      maxColumnWidth: 270,
                                      onChangeRange: v,
                                      renderItemByIndex: g,
                                  }),
                        ),
                        U = (0, C.L)(() => (i.isResolved && i.isEmptyItems ? y : (0, a.jsx)('div', { className: D().gridContent, children: V }))),
                        W = (0, C.L)(() =>
                            m
                                ? (0, a.jsxs)(M.N, {
                                      className: D().footer,
                                      href: p,
                                      'aria-label': l({ id: 'page.vibe-rooms-onboarding' }),
                                      children: [
                                          (0, a.jsx)(T._V, {
                                              className: D().onboardingImage,
                                              src: 'avatars.mds.yandex.net/get-music-misc/28592/img.6ac5050b5a32a672b2cdb08e/%%',
                                              size: 28,
                                              alt: '',
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              withAspectRatio: !0,
                                              withFallback: !1,
                                          }),
                                          (0, a.jsx)(E.j, { className: D().multivibeCoBrand }),
                                      ],
                                  })
                                : (0, a.jsx)('div', { className: D().footer, children: (0, a.jsx)(E.j, { className: D().multivibeCoBrand }) }),
                        );
                    return (0, a.jsxs)(N.N, {
                        ref: t,
                        className: D().root,
                        containerClassName: D().container,
                        'data-test-id': c.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_CONTENT,
                        children: [U, W],
                    });
                }),
                W = (0, n.PA)(() => {
                    let {
                            collection: { vibeRooms: e },
                        } = (0, f.g)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, b.g)(),
                        n = (0, v.W)(),
                        { hasPlus: x, isPaywallBlocking: A } = (0, m.S)();
                    return ((0, o.useEffect)(() => {
                        if (x)
                            return (
                                e.isNeededToLoad && e.getData(),
                                () => {
                                    e.reset();
                                }
                            );
                    }, [x, e]),
                    (0, g.J)(e.isResolved),
                    A)
                        ? null
                        : e.isRejected
                          ? (0, a.jsx)(u.SomethingWentWrong, {})
                          : (0, a.jsx)(l.a, {
                                pageId: s.AppScreen.MultivibeScreen,
                                pageIdForFrom: p.b.COLLECTION_VIBE_ROOMS,
                                pageStyle: s.PageStyles.Fullscreen,
                                pagePlacement: s.PagePlacements.Fullscreen,
                                children: (0, a.jsx)(_.h, {
                                    scrollElement: t,
                                    children: (0, a.jsxs)('div', {
                                        className: D().root,
                                        'data-test-id': c.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE,
                                        children: [
                                            (0, a.jsx)(y.Y, {
                                                variant: y.V.TEXT,
                                                withForwardControl: !1,
                                                withBackwardControl: n.canBack,
                                                children: (0, a.jsx)(d.DZ, {
                                                    variant: 'h2',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    lineClamp: 1,
                                                    children: (0, a.jsx)(r.A, { id: 'page.vibe-rooms' }),
                                                }),
                                            }),
                                            (0, a.jsx)(U, { setContentScrollRef: i }),
                                        ],
                                    }),
                                }),
                            });
                });
        },
        90420: (e, t, i) => {
            'use strict';
            i.d(t, { M1: () => a, N7: () => s, UM: () => n, q7: () => r, yx: () => o });
            let a = 'user:onyourwave',
                n = ['activity'],
                o = 'diversity:reshuffle',
                r = 'multivibe',
                s = 'user';
        },
        91087: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            let a = (0, i(53548).createContext)(null);
        },
        93512: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => n });
            var a = i(51231);
            let n = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, a.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        95210: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            var a = i(53548),
                n = i(38860);
            let o = (e) => {
                let t = (0, a.useRef)(!1),
                    i = (0, n.z)();
                (0, a.useEffect)(() => {
                    (e && (null == i || i.disable(), (t.current = !0)), !e && t.current && (null == i || i.enable(), (t.current = !1)));
                }, [e, i]);
            };
        },
        95641: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
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
        97261: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => a });
            var a = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        97811: (e) => {
            e.exports = {
                root: 'PlayingAnimation_root__YrWz7',
                'bubble-out': 'PlayingAnimation_bubble-out__k2fBS',
                root_stopAnimation: 'PlayingAnimation_root_stopAnimation__qOw_g',
            };
        },
        98427: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var a = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 4700, 9610, 1147, 3248, 5038, 7065, 2431, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 6949, 9959, 4732, 9087, 3979,
                6719, 1928, 9091, 9124, 900, 9934, 2470, 5638, 7824, 763, 2670, 7358,
            ],
            () => e((e.s = 38577)),
        ),
            (_N_E = e.O()));
    },
]);
