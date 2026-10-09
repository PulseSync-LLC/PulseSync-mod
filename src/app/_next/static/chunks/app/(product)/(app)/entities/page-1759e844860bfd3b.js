(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6360],
    {
        319: (t, e, i) => {
            'use strict';
            (i.r(e), i.d(e, { default: () => D }));
            var a = i(25839),
                s = i(84059),
                l = i(88204),
                r = i(74631),
                n = i(82298),
                o = i(39004),
                c = i(61493),
                d = i(35522),
                u = i(98436),
                _ = i(13833),
                m = i(4254),
                A = i(76939),
                T = i(84058),
                L = i(1407),
                x = i(41707),
                C = i(55492),
                I = i(21784),
                E = i(89192),
                S = i(27954),
                h = i(99401),
                k = i(26076),
                p = i(10603),
                y = i(95772),
                R = i(55297),
                v = i.n(R);
            let O = (0, l.PA)((t) => {
                let { blockId: e, blockType: i } = t,
                    { landingBlockEntities: s } = (0, S.g)(),
                    { formatMessage: l } = (0, o.A)(),
                    { contentScrollRef: R, setContentScrollRef: O } = (0, E.g)(),
                    N = (0, I.W)(),
                    P = (0, r.useMemo)(() => {
                        if (s.isLoading) {
                            let t = l({ id: 'loading-messages.content-is-loading' }),
                                e = [d.t.COLLECTION_ARTISTS, d.t.COLLECTION_ARTISTS_AND_TOP, d.t.PERSONAL_ARTISTS, d.t.NEW_STARS_ARTISTS, d.t.EDITORIAL_ARTISTS].includes(
                                    i,
                                ),
                                s = i === d.t.MIXES_GRID;
                            return (0, a.jsx)(y.e, {
                                itemClassName: (0, n.$)({ [v().shimmerWithSubcover]: s }),
                                withSubcover: s,
                                isActive: !0,
                                'aria-label': t,
                                centered: e || s,
                                round: e,
                            });
                        }
                        return s.items.map((t) => {
                            switch (t.type) {
                                case u._.MIX_CARD_ITEM:
                                    return (0, a.jsx)(C.V, { title: t.data.title, weblink: t.data.weblink, covers: t.data.covers }, t.data.id);
                                case u._.ALBUM_ITEM:
                                    return (0, a.jsx)(A.a, { album: t.data, contentLinesCount: 3 }, t.data.id);
                                case u._.CHART_ALBUM_ITEM:
                                case u._.NON_MUSIC_ALBUM_ITEM:
                                    return (0, a.jsx)(A.a, { withChart: !0, withLikesCount: !0, album: t.data, contentLinesCount: 3 }, t.data.id);
                                case u._.ARTIST_ITEM:
                                    return (0, a.jsx)(T.a, { artist: t.data, contentLinesCount: 3 }, t.data.id);
                                case u._.PLAYLIST_ITEM:
                                    return (0, a.jsx)(x.B, { playlist: t.data, contentLinesCount: 3 }, t.data.key);
                                case u._.PERSONAL_PLAYLIST_ITEM:
                                    return (0, a.jsx)(
                                        x.B,
                                        { playlist: t.data.playlist, customDescription: t.data.description, contentLinesCount: 4 },
                                        t.data.playlist.key,
                                    );
                                case u._.LIKED_PLAYLIST_ITEM:
                                    return (0, a.jsx)(x.B, { playlist: t.data, contentLinesCount: 3 }, t.data.key);
                            }
                        });
                    }, [i, s.isLoading, s.items, l]);
                return (
                    e && s.isNeededToLoad && (0, r.use)(s.getData({ blockId: e })),
                    (0, a.jsx)(L.h, {
                        scrollElement: R,
                        outerTitle: s.title,
                        children: (0, a.jsxs)('div', {
                            className: v().root,
                            children: [
                                (0, a.jsx)(p.Y, {
                                    variant: p.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: N.canBack,
                                    children: (0, a.jsx)(m.DZ, {
                                        id: 'block-entities-header',
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: s.title,
                                    }),
                                }),
                                (0, a.jsx)(_.N, {
                                    ref: O,
                                    className: v().scrollableContent,
                                    containerClassName: v().scrollableContainer,
                                    'data-test-id': c.e8.landing.BLOCK_ENTITY_PAGE,
                                    children: (0, a.jsxs)('div', {
                                        className: v().container,
                                        children: [
                                            (0, a.jsx)('div', { className: v().content, 'aria-labelledby': 'block-entities-header', tabIndex: 0, children: P }),
                                            (0, a.jsx)(k.A, { children: (0, a.jsx)(h.w, { className: v().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });
            var N = i(42853),
                P = i(20258),
                f = i(57138),
                j = i(10322),
                g = i(30716),
                M = i(36159);
            let b = {
                    'new-releases': d.t.NEW_RELEASES,
                    'editorial-new-releases': d.t.EDITORIAL_NEW_RELEASES,
                    'personal-artists': d.t.PERSONAL_ARTISTS,
                    'new-stars-artists': d.t.NEW_STARS_ARTISTS,
                    'editorial-artists': d.t.EDITORIAL_ARTISTS,
                    'new-playlists': d.t.NEW_PLAYLISTS,
                    'editorial-compilation': d.t.EDITORIAL_COMPILATION,
                    'non-music-editorial-compilation': d.t.EDITORIAL_COMPILATION,
                    'chart-albums': d.t.CHART_ALBUMS,
                    'mixes-grid': d.t.MIXES_GRID,
                    'mixes-music': d.t.MIXES_MUSIC,
                },
                U = (0, l.PA)((t) => {
                    let { blockType: e, blockId: i } = t,
                        { landingBlockEntities: l } = (0, S.g)();
                    ((0, r.useEffect)(
                        () => () => {
                            l.reset();
                        },
                        [l, e, i],
                    ),
                        (0, g.J)(l.loadingState === M.G.RESOLVE));
                    let n = b[e];
                    return (
                        (l.isNotFound || !n) && (0, s.notFound)(),
                        (0, a.jsx)(j.n, {
                            pageId: P._Q.ENTITIES,
                            children: (0, a.jsx)(f.F, {
                                blockId: ''.concat(N.h.DISCOVERY_BLOCK, '-').concat(i),
                                blockIdForFrom: ''.concat(N.h.DISCOVERY_BLOCK, '-').concat(i),
                                blockPosX: 1,
                                blockPosY: 1,
                                blockType: n,
                                objectsCount: l.items.length,
                                children: (0, a.jsx)(O, { blockType: n, blockId: i }),
                            }),
                        })
                    );
                }),
                D = () => {
                    let t = (0, s.useSearchParams)(),
                        e = t.get('blockType'),
                        i = t.get('blockId');
                    return ((e && i) || (0, s.notFound)(), (0, a.jsx)(U, { blockType: e, blockId: i }));
                };
        },
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
        1134: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => _ });
            var a = i(25839),
                s = i(33660),
                l = i(74631),
                r = i(39004),
                n = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let _ = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, r.A)(),
                    [m, A] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, a.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let l = { ...(0, s.HO)(t), url: t.url, isPinned: !t.isPinned };
                    A(!0);
                    let r = await t.togglePin();
                    (A(!1),
                        r
                            ? i((0, a.jsx)(u.l, { playlist: l }), { containerId: n.u.INFO })
                            : i((0, a.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e.isAuthorized, m, t, i, _]);
            };
        },
        1797: (t, e, i) => {
            'use strict';
            i.d(e, { S: () => s });
            var a = i(40207);
            let s = (t) => {
                let { artist: e, callback: i, shouldHistoryBack: s } = t;
                return (0, a.l)({ entity: e, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
        7361: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => m });
            var a = i(25839),
                s = i(33660),
                l = i(74631),
                r = i(39004),
                n = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(63149);
            let m = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, A] = (0, l.useState)(!1),
                    { formatMessage: T } = (0, r.A)();
                return (0, l.useCallback)(async () => {
                    if (!t) return;
                    if (!e.isAuthorized) return void i((0, a.jsx)(u.h, { error: T({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let l = { ...(0, s.HO)(t), isLiked: !t.isLiked };
                    A(!0);
                    let r = await t.toggleLike();
                    (A(!1),
                        r === n.f.OK
                            ? i((0, a.jsx)(_.T, { artist: l }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: T({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t, e.isAuthorized, m, T, i]);
            };
        },
        10959: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => s });
            var a = i(44806);
            let s = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: s, userRegion: l } = t;
                return 'ru' === l && e(a.z.WebNextFooterDisclaimer, 'on') ? i() : s();
            };
        },
        13936: (t) => {
            t.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        15787: (t) => {
            t.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        21971: (t, e, i) => {
            'use strict';
            i.d(e, { g: () => J });
            var a = i(25839),
                s = i(88204),
                l = i(39004),
                r = i(36619),
                n = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                _ = i(33660),
                m = i(74631),
                A = i(31860),
                T = i(91149),
                L = i(92942),
                x = i(27954),
                C = i(57549),
                I = i(86869),
                E = i(69084),
                S = i(4254),
                h = i(51790),
                k = i(6323),
                p = i(24596),
                y = i.n(p);
            let R = (t) => {
                let { coverUri: e, title: i, isDisliked: s, closeToast: r } = t,
                    { formatMessage: n } = (0, l.A)(),
                    o = n(s ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(h.$, {
                    closeToast: r,
                    message: (0, a.jsxs)('div', {
                        className: y().message,
                        children: [
                            (0, a.jsx)(E.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(I.t, {
                                className: y().cover,
                                radius: 'round',
                                children: (0, a.jsx)(k.B, { className: y().image, src: e, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(S.HL, { className: y().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var v = i(7361),
                O = i(90613),
                N = i(3210),
                P = i(11609),
                f = i(79367),
                j = i(40110),
                g = i(20258),
                M = i(34159),
                b = i(30290),
                U = i(29872),
                D = i(56120),
                B = i(87201),
                Y = i(83014),
                z = i(44806),
                H = i(55491),
                K = i(44851),
                w = i(14240),
                F = i(56615),
                X = i(16386),
                V = i(67303),
                G = i(74682),
                W = i(59043),
                q = i(2144),
                $ = i(6304);
            let J = (0, s.PA)((t) => {
                var e, i, s;
                let { artist: I, onOpenChange: E, open: S, ...h } = t,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: p } = (0, U.q)(),
                    {
                        settings: { isMobile: y },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: tt,
                    } = (0, x.g)(),
                    te = (0, O.A)(I),
                    ti = (0, v.K)(I),
                    ta = ((t) => {
                        let { user: e } = (0, x.g)(),
                            { notify: i } = (0, L.l)(),
                            [s, r] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, l.A)();
                        return (0, c.c)(async () => {
                            if (!t) return;
                            if (!e.isAuthorized)
                                return void i((0, a.jsx)(C.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: T.u.ERROR });
                            if (s) return;
                            let l = { ...(0, _.HO)(t), isDisliked: !t.isDisliked };
                            r(!0);
                            let o = await t.toggleDislike();
                            (r(!1),
                                o === A.f.OK
                                    ? i((0, a.jsx)(R, { coverUri: l.coverUri, title: l.name, isDisliked: l.isDisliked }), { containerId: T.u.INFO })
                                    : i((0, a.jsx)(C.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: T.u.ERROR }));
                        });
                    })(I),
                    ts = (0, M.F)(),
                    tl = ''.concat(j.U.ARTIST, '-').concat(null == I ? void 0 : I.id),
                    { formatMessage: tr } = (0, l.A)(),
                    { utmLink: tn } = (0, b.f)({ blockId: j.U.ARTIST, contextType: o.K.Artist, contextId: null == I ? void 0 : I.id }),
                    { shareLink: to, pathname: tc } = (0, w.b)('/artist/:artistId', { params: { artistId: null != (i = null == I ? void 0 : I.id) ? i : '' } }),
                    td = (0, N.A)({ entityVariant: Y.D.ARTIST, urlParams: { id: null == I ? void 0 : I.id } }),
                    { isPlaying: tu, togglePlay: t_ } = (0, B.B)({
                        seeds: null != (s = null == I ? void 0 : I.seeds) ? s : [],
                        pageIdForFrom: g._Q.RADIO,
                        blockIdForFrom: tl,
                        parentContextId: null == I ? void 0 : I.id,
                    }),
                    tm = (0, f.P)(),
                    tA = tr((null == I ? void 0 : I.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    tT = (0, c.c)(() => {
                        if (k && Q.isAuthorized) return void p();
                        tu || t_();
                    }),
                    tL = (0, c.c)(() => {
                        if (!tm()) {
                            if (k) return void p();
                            (null == I ? void 0 : I.id) && (Z.setUtmLink(tn), Z.openArtistTrailer(I.id), ts(r.DomainObjectType.Artist, I.id));
                        }
                    }),
                    tx = (0, c.c)(() => {
                        J.open(null == I ? void 0 : I.id);
                    });
                (0, D.N)(S);
                let tC = { variant: H.Y.ARTIST, id: null == I ? void 0 : I.id, title: null == I ? void 0 : I.name, path: tc },
                    tI = tt.checkExperiment(z.z.WebEditorsFeatures, 'on'),
                    tE = null == I || null == (e = I.trailer) ? void 0 : e.isAvailable,
                    tS = tt.checkExperiment(z.z.WebNextArtistInfo, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: y,
                    offsetOptions: 10,
                    open: S,
                    onOpenChange: E,
                    ariaLabel: tr({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...h,
                    children: [
                        tI && (0, a.jsx)($.WithOffline, { fallback: (0, a.jsx)(P.d, { entityVariant: Y.D.ARTIST, adminUrl: td }) }),
                        !y && (0, a.jsx)($.WithOffline, { fallback: (0, a.jsx)(V.L, { onClick: te, isPinned: null == I ? void 0 : I.isPinned }) }),
                        (0, a.jsx)($.WithOffline, {
                            fallback: (0, a.jsx)(X.T, {
                                onClick: ti,
                                isLiked: null == I ? void 0 : I.isLiked,
                                disabled: !Q.isAuthorized || !(null == I ? void 0 : I.isAvailable),
                            }),
                        }),
                        tE && (0, a.jsx)($.WithOffline, { fallback: (0, a.jsx)(W.N, { onClick: tL }) }),
                        (0, a.jsx)($.WithOffline, {
                            fallback: (0, a.jsx)(q.C, { onClick: tT, disabled: !(null == I ? void 0 : I.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: E }),
                        }),
                        (0, a.jsx)(G.H, { disabled: !I, shareLink: to, entityMeta: tC }),
                        tS &&
                            (0, a.jsx)($.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: tx,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: tA,
                                }),
                            }),
                        (0, a.jsx)($.WithOffline, {
                            fallback: (0, a.jsx)(F.D, { onClick: ta, isDisliked: null == I ? void 0 : I.isDisliked, disabled: !(null == I ? void 0 : I.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        24596: (t) => {
            t.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        26076: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => r });
            var a = i(25839);
            i(93588);
            var s = i(400),
                l = i.n(s);
            let r = (t) => {
                let { children: e } = t;
                return (0, a.jsx)('footer', { className: l().empty });
            };
        },
        27892: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => r });
            var a = i(25839),
                s = i(35015),
                l = i(10546);
            let r = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, a.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: e.url,
                    coverUri: e.coverUri,
                    entityTitle: e.title,
                    isPinned: e.isPinned,
                    radius: 's',
                });
            };
        },
        41459: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => l });
            var a = i(74631),
                s = i(39004);
            let l = (t) => {
                let { formatMessage: e } = (0, s.A)();
                return (0, a.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let a = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(a, ' ').concat(i);
                }, [e, t]);
            };
        },
        41707: (t, e, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(66738);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(e, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(25839),
                pulseSyncMenuItems = i(10820),
                pulseSyncMenuIcons = i(66738);
            // for PulseSync WebHost: END imports for native addon context menu items
            var a = i(25839),
                s = i(82298),
                l = i(88204),
                r = i(74631),
                n = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                A = i(66738),
                T = i(86869),
                L = i(4254),
                x = i(4331),
                C = i(62948),
                I = i(1134),
                E = i(79367),
                S = i(29481),
                h = i(47009),
                k = i(34159),
                p = i(52512),
                y = i(30290),
                R = i(61561),
                v = i(85686),
                O = i(85743),
                N = i(50209),
                P = i(27954),
                f = i(74760),
                j = i(6323),
                g = i(64720),
                M = i(97522),
                b = i(41580),
                U = i(49438),
                D = i(71996),
                B = i(78437),
                Y = i(41459),
                z = i(10820),
                H = i(3210),
                K = i(11609),
                w = i(29872),
                F = i(56120),
                X = i(83014),
                V = i(44806),
                G = i(16386),
                W = i(67303),
                q = i(59043);
            let $ = (0, l.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: s, open: l, ...r } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, w.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: A },
                        trailer: T,
                        user: L,
                    } = (0, P.g)(),
                    x = (0, C.K)(i),
                    S = (0, I.A)(i),
                    h = (0, k.F)(),
                    { formatMessage: p } = (0, n.A)(),
                    y = (0, E.P)(),
                    R = m.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    v = (0, H.A)({ entityVariant: X.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, F.N)(l);
                let O = (0, u.c)(() => {
                    if (d) return void _();
                    y() || (T.openPlaylistTrailer(i.id), h(o.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), s?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, a.jsxs)(z.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: l,
                    offsetOptions: 10,
                    isMobile: A,
                    ariaLabel: p({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...r,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        R && (0, a.jsx)(K.d, { entityVariant: X.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : v }),
                        !A && (0, a.jsx)(W.L, { onClick: S, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, a.jsx)(G.T, { onClick: x, isLiked: i.isLiked, disabled: !L.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, a.jsx)(z.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, a.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, a.jsx)(q.N, { onClick: O, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(15787),
                Z = i.n(J);
            let Q = (0, l.PA)((t) => {
                let { className: e, playlist: i, children: l, contentLinesCount: z, customDescription: H, onCoverMouseDown: K } = t,
                    { ref: w, intersectionPropertyId: F } = (0, p.n)(),
                    {
                        trailer: X,
                        user: V,
                        paywall: { modal: G },
                    } = (0, P.g)(),
                    { from: W, utmLink: q } = (0, y.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: J } = (0, n.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: tt, sendPlaySearchFeedback: te } = (0, O.z)(),
                    [ti, ta] = (0, r.useState)(!1),
                    [ts, tl] = (0, r.useState)(!1),
                    [tr, tn] = (0, r.useState)(!1),
                    to = (0, Y.r)(i),
                    tc = (0, C.K)(i),
                    td = (0, I.A)(i),
                    tu = (0, S.N)(),
                    t_ = (0, h.b)(),
                    tm = (0, v.Z)(i.url),
                    tA = (0, k.F)(),
                    tT = (0, E.P)(),
                    tL = (0, u.c)((t) => {
                        if ((t.stopPropagation(), tT())) return void t.preventDefault();
                        (X.setUtmLink(q), X.openPlaylistTrailer(i.id), tA(o.DomainObjectType.Playlist, i.id));
                    }),
                    [tx, tC] = (0, r.useState)(!1),
                    { isPlaying: tI, togglePlay: tE } = (0, N.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: W, utmLink: q }, loadContextMeta: !0 },
                    }),
                    tS = (0, u.c)(() => {
                        (tu({ to: o.AppScreen.PlaylistScreen }), null == tt || tt());
                    }),
                    th = (0, u.c)((t) => {
                        (tS(), tm(t));
                    }),
                    tk = (0, R.N)(),
                    tp = (0, u.c)(() => {
                        if (!tT()) {
                            if (tk) return void G.open();
                            (ti || tI || (ta(!0), null == te || te()), tE(), t_(!tI));
                        }
                    }),
                    ty = (0, u.c)(() => {
                        (ts || i.isLiked || (tl(!0), null == Q || Q()), tc());
                    }),
                    tR = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tv = (0, u.c)((t) => {
                        (tn(t), tC(t));
                    }),
                    tO = (0, r.useMemo)(() => {
                        var t;
                        return H
                            ? (0, a.jsx)(L.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: H }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, a.jsx)(
                                    x.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [H, i]),
                    tN = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, a.jsx)(
                                g.c,
                                {
                                    className: (0, s.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: ty,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tP = (0, r.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, a.jsx)(
                                B.n,
                                {
                                    children: (0, a.jsx)(
                                        D.k,
                                        { className: (0, s.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: tL },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [tL, i]),
                    tf = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                b.O,
                                { onClick: td, isPinned: i.isPinned, className: (0, s.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [td, i],
                    ),
                    tj = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(T.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: th,
                                    onMouseDown: K,
                                    children: [
                                        (0, a.jsx)(j.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: to,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, a.jsx)(m.hg, {
                                            isVisible: tr || tx,
                                            className: Z().controls,
                                            playControl: (0, a.jsx)(
                                                U.D,
                                                {
                                                    className: (0, s.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tp,
                                                    isPlaying: tI,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: tN,
                                            menuControl: (0, a.jsx)(
                                                $,
                                                {
                                                    playlist: i,
                                                    onOpenChange: tv,
                                                    open: tr,
                                                    onClick: tR,
                                                    className: (0, s.$)(Z().menuButton, Z().control),
                                                    icon: (0, a.jsx)(A.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tf,
                                            trailerControl: tP,
                                        }),
                                    ],
                                }),
                            }),
                        [th, K, i, to, tr, tx, tp, tI, tN, tv, tR, tf, tP],
                    ),
                    tg = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, a.jsxs)(m.MN, {
                    ref: w,
                    'aria-label': to,
                    className: (0, s.$)(Z().root, e),
                    title: (0, a.jsx)(L.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, a.jsx)(M.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: tS, children: i.title }),
                    }),
                    srTitle: (0, a.jsx)(M.N, { className: Z().srTitleLink, href: i.url, onClick: tS, children: i.title }),
                    'data-intersection-property-id': F,
                    contentLinesCount: z,
                    view: tj,
                    description: tO,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        tg &&
                            (0, a.jsx)(f.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: tc,
                            }),
                        l,
                    ],
                });
            });
        },
        42190: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => r });
            var a = i(25839),
                s = i(35015),
                l = i(3163);
            let r = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, a.jsx)(l.O, {
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: e.url,
                    collectionUrl: '/collection',
                    entityTitle: e.title,
                    isLiked: e.isLiked,
                    closeToast: i,
                    coverUri: e.coverUri,
                });
            };
        },
        42853: (t, e, i) => {
            'use strict';
            i.d(e, { h: () => s });
            var a = i(40110),
                s = (function (t) {
                    return (
                        (t[(t.RUP_MAIN_RADIO = ''.concat(a.U.RUP, '_').concat(a.U.MAIN, '-').concat(a.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (t[(t.DISCOGRAPHY_CAROUSEL = ''.concat(a.U.DISCOGRAPHY, '_').concat(a.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (t[(t.ALBUMS_CAROUSEL = ''.concat(a.U.ALBUMS, '_').concat(a.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (t[(t.COMPILATIONS_CAROUSEL = ''.concat(a.U.COMPILATIONS, '_').concat(a.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (t[(t.PLAYLISTS_CAROUSEL = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (t[(t.ARTISTS_CAROUSEL = ''.concat(a.U.ARTISTS, '_').concat(a.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (t[(t.CLIPS_CAROUSEL = ''.concat(a.U.CLIPS, '_').concat(a.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (t[(t.DISCOVERY_BLOCK = ''.concat(a.U.DISCOVERY, '_').concat(a.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (t[(t.PLAYLISTS_SIMILAR = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (t[(t.SEARCH_HISTORY = ''.concat(a.U.SEARCH, '_').concat(a.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (t[(t.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR, '_').concat(a.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (t[(t.SEARCH_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (t[(t.SEARCH_OPEN_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        t
                    );
                })({});
        },
        43354: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => s, P: () => l });
            var a = i(74631);
            let s = (0, a.createContext)(null),
                l = () => (0, a.useContext)(s);
        },
        53712: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => s });
            var a = i(25895);
            let s = {
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
        55297: (t) => {
            t.exports = {
                root: 'BlockEntities_root__sHn14',
                scrollableContent: 'BlockEntities_scrollableContent__4A0tK',
                scrollableContainer: 'BlockEntities_scrollableContainer__KXyas',
                container: 'BlockEntities_container__1XiOc',
                content: 'BlockEntities_content__bfoTn',
                shimmerWithSubcover: 'BlockEntities_shimmerWithSubcover__dYd6P',
                footer: 'BlockEntities_footer__eEuix',
            };
        },
        55492: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => A });
            var a = i(25839),
                s = i(82298),
                l = i(88204),
                r = i(74631),
                n = i(61493),
                o = i(23818),
                c = i(86869),
                d = i(4254),
                u = i(97522),
                _ = i(84804),
                m = i.n(_);
            let A = (0, l.PA)((t) => {
                var e;
                let { className: i, title: l, weblink: _, linkClassName: A, covers: T, coverSize: L = 100, captionVariant: x = 'div' } = t,
                    C = (0, r.useMemo)(() => {
                        var t;
                        if (null == T || null == (t = T[0]) ? void 0 : t.color) return { '--subcover-background-color': T[0].color };
                    }, [T]);
                return (0, a.jsx)(u.N, {
                    href: _,
                    className: (0, s.$)(m().link, A),
                    'data-test-id': n.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        radius: 'm',
                        style: C,
                        className: (0, s.$)(m().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: m().plate,
                                'data-test-id': n.OA.mix.MIX_CARD_PLATE,
                                children: [
                                    (0, a.jsx)('div', { className: m().subcover, 'data-test-id': n.OA.mix.MIX_CARD_SUBCOVER }),
                                    (0, a.jsx)(o._V, {
                                        src: null == T || null == (e = T[0]) ? void 0 : e.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: m().cover,
                                        size: L,
                                        'data-test-id': n.OA.mix.MIX_CARD_COVER,
                                    }),
                                ],
                            }),
                            (0, a.jsx)('div', {
                                className: m().header,
                                children: (0, a.jsx)(d.HL, {
                                    variant: x,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: m().title,
                                    lineClamp: 2,
                                    'data-test-id': n.OA.mix.MIX_CARD_HEADER,
                                    children: l,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        56615: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => d });
            var a = i(25839),
                s = i(88204),
                l = i(8487),
                r = i(61493),
                n = i(66738),
                o = i(10820),
                c = i(27954);
            let d = (0, s.PA)((t) => {
                let { isDisliked: e, onClick: i, disabled: s, className: d } = t,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(n.I, { variant: e ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': e,
                    disabled: s || !u.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        57138: (t, e, i) => {
            'use strict';
            i.d(e, { F: () => r });
            var a = i(25839),
                s = i(74631),
                l = i(14482);
            let r = (t) => {
                let {
                        blockId: e,
                        blockType: i,
                        blockIdForFrom: r,
                        blockPosX: n,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = t,
                    A = (0, s.useMemo)(
                        () => ({
                            blockId: e,
                            blockType: i,
                            blockIdForFrom: r,
                            blockPosX: n,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [e, i, r, n, o, c, d, u, m],
                    );
                return (0, a.jsx)(l.p.Provider, { value: A, children: _ });
            };
        },
        62948: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => m });
            var a = i(25839),
                s = i(33660),
                l = i(74631),
                r = i(39004),
                n = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(42190);
            let m = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, A] = (0, l.useState)(!1),
                    { formatMessage: T } = (0, r.A)();
                return (0, l.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, a.jsx)(u.h, { error: T({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let l = { ...(0, s.HO)(t), url: t.url, isLiked: !t.isLiked };
                    A(!0);
                    let r = await t.toggleLike();
                    (A(!1),
                        r === n.f.OK
                            ? i((0, a.jsx)(_.T, { playlist: l }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: T({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e.isAuthorized, m, t, T, i]);
            };
        },
        63149: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => n });
            var a = i(25839),
                s = i(53712),
                l = i(35015),
                r = i(3163);
            let n = (t) => {
                let { artist: e, closeToast: i } = t;
                return (0, a.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: l.c.ARTIST,
                    entityUrl: e.url,
                    collectionUrl: s.Z.collectionArtists.href,
                    coverUri: e.coverUri,
                    entityTitle: e.name,
                    isLiked: e.isLiked,
                });
            };
        },
        80477: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => r });
            var a = i(25839),
                s = i(35015),
                l = i(10546);
            let r = (t) => {
                let { artist: e, closeToast: i } = t;
                return (0, a.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    coverUri: e.coverUri,
                    entityUrl: e.url,
                    entityTitle: e.name,
                    isPinned: e.isPinned,
                    radius: 'round',
                });
            };
        },
        84058: (t, e, i) => {
            'use strict';
            i.d(e, { a: () => H });
            var a = i(25839),
                s = i(82298),
                l = i(88204),
                r = i(74631),
                n = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                A = i(66738),
                T = i(86869),
                L = i(4254),
                x = i(1797),
                C = i(7361),
                I = i(90613),
                E = i(79367),
                S = i(29481),
                h = i(47009),
                k = i(34159),
                p = i(52512),
                y = i(30290),
                R = i(61561),
                v = i(85686),
                O = i(85743),
                N = i(50209),
                P = i(27954),
                f = i(6323),
                j = i(64720),
                g = i(97522),
                M = i(41580),
                b = i(49438),
                U = i(71996),
                D = i(78437),
                B = i(21971),
                Y = i(13936),
                z = i.n(Y);
            let H = (0, l.PA)((t) => {
                let { artist: e, className: i, children: l, contentLinesCount: Y, topTitleElement: H, bottomTitleElement: K } = t,
                    { ref: w, intersectionPropertyId: F } = (0, p.n)(),
                    {
                        trailer: X,
                        user: V,
                        paywall: { modal: G },
                    } = (0, P.g)(),
                    { from: W, utmLink: q } = (0, y.f)({ contextId: e.id, contextType: d.K.Artist }),
                    { formatMessage: $ } = (0, n.A)(),
                    [J, Z] = (0, r.useState)(!1),
                    [Q, tt] = (0, r.useState)(!1),
                    [te, ti] = (0, r.useState)(!1),
                    { sendLikeSearchFeedback: ta, sendNavigateSearchFeedback: ts, sendPlaySearchFeedback: tl } = (0, O.z)(),
                    tr = (0, S.N)(),
                    tn = (0, h.b)(),
                    to = (0, C.K)(e),
                    tc = (0, I.A)(e),
                    { id: td, name: tu, coverUri: t_, isLiked: tm } = e,
                    tA = (0, v.Z)(e.url),
                    [tT, tL] = (0, r.useState)(!1),
                    tx = (0, k.F)(),
                    tC = (0, E.P)(),
                    tI = (0, u.c)((t) => {
                        if ((t.stopPropagation(), tC())) return void t.preventDefault();
                        (X.openArtistTrailer(e.id), tx(o.DomainObjectType.Artist, e.id));
                    }),
                    tE = (0, r.useMemo)(() => {
                        let t = $({ id: 'entity-names.artist-name' }, { artistName: tu }),
                            e = tm ? $({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(t, ' ').concat(e);
                    }, [tu, tm, $]),
                    { isPlaying: tS, togglePlay: th } = (0, N.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(td) }, from: W, utmLink: q }, loadContextMeta: !0 },
                    }),
                    tk = (0, x.S)({ artist: e, callback: tA }),
                    tp = (0, x.S)({ artist: e, callback: th }),
                    ty = (0, u.c)((t) => {
                        (null == ts || ts(), tr({ to: o.AppScreen.ArtistScreen }), tk(t));
                    }),
                    tR = (0, R.N)(),
                    tv = (0, u.c)(() => {
                        if (!tC()) {
                            if (tR) return void G.open();
                            (J || tS || (Z(!0), null == tl || tl()), tp(), tn(!tS));
                        }
                    }),
                    tO = (0, u.c)(() => {
                        (Q || tm || (tt(!0), null == ta || ta()), to());
                    }),
                    tN = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tP = (0, u.c)((t) => {
                        (ti(t), tL(t));
                    }),
                    tf = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                B.g,
                                {
                                    artist: e,
                                    onOpenChange: tP,
                                    open: te,
                                    onClick: tN,
                                    className: (0, s.$)(z().menuButton, z().control),
                                    size: 's',
                                    icon: (0, a.jsx)(A.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                e.getKey('ArtistContextMenu'),
                            ),
                        [e, tN, tP, te],
                    ),
                    tj = (0, r.useMemo)(() => {
                        var t;
                        if (null == e || null == (t = e.trailer) ? void 0 : t.isAvailable)
                            return (0, a.jsx)(
                                D.n,
                                {
                                    children: (0, a.jsx)(U.k, {
                                        className: (0, s.$)(z().trailerButton, z().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: tI,
                                    }),
                                },
                                e.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [e, tI]),
                    tg = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                M.O,
                                { onClick: tc, isPinned: e.isPinned, className: (0, s.$)(z().pinButton, z().control), withRipple: !1 },
                                e.getKey('PinButton'),
                            ),
                        [e, tc],
                    ),
                    tM = (0, _.L)(() => {
                        if (e.isAvailable)
                            return (0, a.jsx)(
                                m.hg,
                                {
                                    isVisible: te || tT,
                                    className: z().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        b.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, s.$)(z().playButton, z().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: tv,
                                            isPlaying: tS,
                                            disabled: !e.isAvailableForPlaying,
                                        },
                                        e.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        j.c,
                                        {
                                            className: (0, s.$)(z().likeButton, z().control),
                                            isLiked: tm,
                                            onClick: tO,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        e.getKey('LikeButton'),
                                    ),
                                    menuControl: tf,
                                    pinControl: tg,
                                    trailerControl: tj,
                                },
                                e.getKey('ArtistCardControls'),
                            );
                    }),
                    tb = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(T.t, {
                                className: z().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: z().coverBlock,
                                    onClick: ty,
                                    children: [
                                        (0, a.jsx)(f.B, {
                                            className: z().image,
                                            src: t_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tE,
                                            withAvatarReplace: !0,
                                            isAvailable: e.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        tM,
                                    ],
                                }),
                            }),
                        [ty, t_, tE, e.isAvailable, tM],
                    );
                return (0, a.jsx)(m.MN, {
                    ref: w,
                    className: (0, s.$)(z().root, i),
                    textPosition: 'center',
                    'aria-label': tE,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            H,
                            (0, a.jsx)(L.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(g.N, {
                                    className: z().titleLink,
                                    href: e.url,
                                    tabIndex: -1,
                                    'aria-label': tE,
                                    onClick: ty,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: tu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, a.jsx)(g.N, { className: z().srTitleLink, href: e.url, onClick: ty, children: tE }),
                    'data-intersection-property-id': F,
                    contentLinesCount: Y,
                    view: tb,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: l,
                });
            });
        },
        84804: (t) => {
            t.exports = {
                plate: 'MixesGridMixCard_plate__ONH3P',
                root: 'MixesGridMixCard_root__HHE7z',
                subcover: 'MixesGridMixCard_subcover__z5sBj',
                link: 'MixesGridMixCard_link__D3_S6',
                header: 'MixesGridMixCard_header__t24VH',
                title: 'MixesGridMixCard_title__fKTCy',
                cover: 'MixesGridMixCard_cover__Ra3ic',
            };
        },
        89514: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        90613: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => _ });
            var a = i(25839),
                s = i(33660),
                l = i(74631),
                r = i(39004),
                n = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let _ = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, r.A)(),
                    [m, A] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!t) return;
                    if (!e.isAuthorized) return void i((0, a.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let l = { ...(0, s.HO)(t), isPinned: !t.isPinned };
                    A(!0);
                    let r = await t.togglePin();
                    (A(!1),
                        r
                            ? i((0, a.jsx)(u.l, { artist: l }), { containerId: n.u.INFO })
                            : i((0, a.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t, e.isAuthorized, m, _, i]);
            };
        },
        95772: (t, e, i) => {
            'use strict';
            i.d(e, { e: () => l });
            var a = i(25839),
                s = i(19412);
            let l = (t) => {
                let {
                    isActive: e,
                    itemClassName: i,
                    round: l,
                    centered: r,
                    withInfo: n,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: _,
                } = t;
                return Array.from(Array(o).keys()).map((t) =>
                    (0, a.jsx)(
                        s.V,
                        { isActive: e, linesCount: d, className: i, round: l, centered: r, withInfo: n, withSubcover: _, 'aria-label': u, shimmerClassName: c },
                        t,
                    ),
                );
            };
        },
        96261: (t, e, i) => {
            Promise.resolve().then(i.bind(i, 319));
        },
        98436: (t, e, i) => {
            'use strict';
            var a;
            (i.d(e, { _: () => a }),
                (function (t) {
                    ((t.ALBUM_ITEM = 'album_item'),
                        (t.ARTIST_ITEM = 'artist_item'),
                        (t.PLAYLIST_ITEM = 'playlist_item'),
                        (t.TRACK_ITEM = 'track_item'),
                        (t.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (t.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (t.WAVE_ITEM = 'wave_item'),
                        (t.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (t.MIX = 'mix'),
                        (t.MIX_CARD_ITEM = 'mix_card_item'),
                        (t.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (t.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (t.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (t.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (t.MENU_ITEM = 'menu_item'),
                        (t.DONATION_ITEM = 'donation_item'),
                        (t.CLIP = 'clip'),
                        (t.CLIP_ITEM = 'clip_item'),
                        (t.CONCERT_ITEM = 'concert_item'),
                        (t.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(a || (a = {})));
        },
        99401: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => y });
            var a = i(25839),
                s = i(82298),
                l = i(88204),
                r = i(39004),
                n = i(93588),
                o = i(43354),
                c = (function (t) {
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
            let d = (t, e, i) => {
                    switch (t) {
                        case c.YANDEX:
                            if ('ru' === e) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(e, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(e, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(e, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(e, '/legal/confidential/').concat(i);
                    }
                },
                u = (t) => {
                    let { formatMessage: e, language: i, tld: a, year: s } = t;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: e({ id: 'footer.yandex-music' }), url: d(c.YANDEX, a, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, a, i) },
                    };
                };
            var _ = i(10959),
                m = i(89514);
            let A = (t) => t(new Date(), (0, m.m)());
            var T = i(96433),
                L = i(27954),
                x = i(400),
                C = i.n(x),
                I = i(61493),
                E = i(4254),
                S = i(97522);
            let h = (t) => {
                    let { className: e, data: i } = t;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(C().copyrights, e),
                        'data-test-id': I.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(S.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': I.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(S.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': I.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, a.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: C().list,
                                'data-test-id': I.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: s } = t;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, a.jsx)(S.N, { target: '_blank', href: s, className: C().link, 'data-test-id': I.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, a.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': I.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                p = (t) => {
                    let { className: e, data: i } = t;
                    return (0, a.jsxs)('footer', {
                        className: (0, s.$)(C().root, C().important, e),
                        'data-test-id': I.S7.FOOTER,
                        children: [(0, a.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(h, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, L.g)(),
                    { formatDate: s, formatMessage: l } = (0, r.A)(),
                    { language: n } = (0, T.h)(),
                    o = u({ formatMessage: l, language: n, tld: i.tld, year: A(s) });
                return (0, a.jsx)(h, { className: e, data: o });
            });
            let y = (0, l.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: l, location: m, user: x } = (0, L.g)(),
                    { formatDate: I, formatMessage: E } = (0, r.A)(),
                    { isEnabled: S } = null != (e = (0, o.P)()) ? e : {},
                    { language: h } = (0, T.h)(),
                    k = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: a, language: s, tld: l, userRegion: r, year: n } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: a, language: s, userRegion: l } = t,
                                    r = { id: c.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, s) },
                                    n = { id: c.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, s) },
                                    o = { id: c.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, s) },
                                    u = { id: c.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, s) },
                                    _ = { id: c.HELP, title: e({ id: 'footer.links-help' }), url: d(c.HELP, a, s) },
                                    m = [r, o, u];
                                return (i && 'ru' === l && m.push(n), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: a, language: s, tld: l, userRegion: r }),
                            disclaimer: (0, _.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: r,
                            }),
                            copyrights: u({ formatMessage: i, language: s, tld: l, year: n }),
                        };
                    })({
                        checkExperiment: (t, e) => l.checkExperiment(t, e),
                        formatMessage: E,
                        isWebApplication: n.$3,
                        tld: m.tld,
                        language: h,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: A(I),
                    });
                return (0, a.jsx)(p, { className: (0, s.$)({ [C().root_withOffsetForDeeplink]: S }, i), data: k });
            });
        },
    },
    (t) => {
        (t.O(
            0,
            [
                3349, 7339, 1676, 6749, 6287, 2121, 3472, 1107, 7349, 438, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 4245, 3269, 4163, 3246,
                4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 4475, 5056, 7358,
            ],
            () => t((t.s = 96261)),
        ),
            (_N_E = t.O()));
    },
]);
