(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6902],
    {
        1134: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var a = i(25839),
                s = i(33660),
                l = i(74631),
                r = i(39004),
                n = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, r.A)(),
                    [v, A] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (v) return;
                    let l = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                    A(!0);
                    let r = await e.togglePin();
                    (A(!1),
                        r
                            ? i((0, a.jsx)(u.l, { playlist: l }), { containerId: n.u.INFO })
                            : i((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, v, e, i, m]);
            };
        },
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var a = i(40207);
            let s = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: s } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
        2831: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => V }));
            var a = i(25839),
                s = i(84059),
                l = i(74631),
                r = i(82298),
                n = i(88204),
                o = i(39004),
                c = i(13833),
                d = i(4254),
                u = i(64715),
                m = i(77635),
                v = i(84058),
                A = i(1407),
                _ = i(91797),
                h = i(42853),
                k = i(20258),
                C = i(57138),
                p = i(10322),
                S = i(21784),
                x = i(89192),
                T = i(30716),
                L = i(80499),
                y = i(82706),
                b = i(66284),
                I = i(10603),
                f = i(61732),
                g = i(12234),
                j = i(89221),
                P = i(41242),
                R = i(27935),
                N = i(41016),
                O = i(80461),
                U = i(95445),
                E = i(71121);
            async function B(e, t) {
                let { locale: i, fullUrl: a, url: s, tld: l, host: r } = t,
                    n = await (0, j.W)(i),
                    o = e.title.fullTitle,
                    c = n({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, E.f)({ genreTitle: o, artists: d, messageFormatter: n }),
                    m = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(r)).href;
                return {
                    title: c,
                    description: u,
                    openGraph: (0, R.i)({
                        ogTitle: (0, P.N)(o),
                        ogDescription: u,
                        fullUrl: null != a ? a : '',
                        locale: i,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, N.H)({ cardType: O.W.APP, title: c, url: null != s ? s : '', appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, g.X)({
                        additional: { tld: l, url: null != s ? s : '', fullUrl: null != a ? a : '', host: r },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, U.S)('/genre/:metatagId', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var w = i(88720),
                D = i(75568),
                z = i(45329),
                M = i(87219),
                F = i.n(M);
            let K = (0, n.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    n = (0, L.s)(y.n.GENRE),
                    { formatMessage: g } = (0, o.A)(),
                    { contentScrollRef: j, setContentScrollRef: P } = (0, x.g)(),
                    R = (0, S.W)();
                return (n.isNotFound && (0, s.notFound)(),
                (0, l.useEffect)(
                    () => () => {
                        n.reset();
                    },
                    [n],
                ),
                (0, T.J)(n.isResolved),
                ((e) => {
                    (0, l.useEffect)(() => {
                        e &&
                            B(
                                ((e) => ({
                                    id: '',
                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                    liked: !1,
                                    tracks: [],
                                    artists: e.artists.map(D.N),
                                    composers: [],
                                    albums: e.albums.map(w.f),
                                    playlists: e.playlists.map(z.J),
                                }))(e),
                                { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                            ).then((e) => {
                                (0, f.j)(e);
                            });
                    }, [e]);
                })(n),
                t && n.isNeededToLoad && (0, l.use)(n.getData({ id: t, preloadedMeta: i })),
                n.isRejected && !n.isNotFound)
                    ? (0, a.jsx)(u.SomethingWentWrong, {})
                    : (0, a.jsx)(p.n, {
                          pageId: k._Q.GENRE,
                          children: (0, a.jsxs)(A.h, {
                              scrollElement: j,
                              outerTitle: n.fullTitle,
                              children: [
                                  (0, a.jsx)(I.Y, {
                                      variant: I.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: R.canBack,
                                      children: (0, a.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: n.fullTitle }),
                                  }),
                                  (0, a.jsx)(c.N, {
                                      className: F().root,
                                      containerClassName: F().content,
                                      ref: P,
                                      children: (0, a.jsxs)('div', {
                                          className: F().carouselBlocks,
                                          children: [
                                              n.hasPlaylists &&
                                                  (0, a.jsx)(C.F, {
                                                      blockId: h.h.PLAYLISTS_CAROUSEL,
                                                      blockType: h.h.PLAYLISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 1,
                                                      blockIdForFrom: h.h.PLAYLISTS_CAROUSEL,
                                                      objectsCount: n.albums.length,
                                                      children: (0, a.jsx)(_.E, {
                                                          isShimmerVisible: n.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, r.$)(F().carouselBlockHeader, F().carouselBlock),
                                                          containerClassName: F().carouselBlock,
                                                          playlists: n.playlists,
                                                          title: g({ id: 'entity-names.popular-playlists' }),
                                                          viewAllActionLink: '/genre/'.concat(n.id, '/playlists'),
                                                      }),
                                                  }),
                                              n.hasAlbums &&
                                                  (0, a.jsx)(C.F, {
                                                      blockId: h.h.ALBUMS_CAROUSEL,
                                                      blockType: h.h.ALBUMS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 2,
                                                      blockIdForFrom: h.h.ALBUMS_CAROUSEL,
                                                      objectsCount: n.albums.length,
                                                      children: (0, a.jsx)(m.p, {
                                                          isShimmerVisible: n.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, r.$)(F().carouselBlockHeader, F().carouselBlock),
                                                          containerClassName: F().carouselBlock,
                                                          albums: n.albums,
                                                          title: g({ id: 'entity-names.new-albums' }),
                                                          viewAllActionLink: '/genre/'.concat(n.id, '/albums'),
                                                      }),
                                                  }),
                                              n.hasArtists &&
                                                  (0, a.jsx)(C.F, {
                                                      blockId: h.h.ARTISTS_CAROUSEL,
                                                      blockType: h.h.ARTISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 3,
                                                      blockIdForFrom: h.h.ARTISTS_CAROUSEL,
                                                      objectsCount: n.albums.length,
                                                      children: (0, a.jsx)(b.O, {
                                                          isShimmerVisible: n.isLoading,
                                                          isShimmerActive: !0,
                                                          isShimmerCentered: !0,
                                                          isShimmerRounded: !0,
                                                          headerClassName: (0, r.$)(F().carouselBlockHeader, F().carouselBlock),
                                                          containerClassName: F().carouselBlock,
                                                          title: g({ id: 'entity-names.popular-artists' }),
                                                          viewAllActionLink: '/genre/'.concat(n.id, '/artists'),
                                                          children: n.artists.map((e) => (0, a.jsx)(v.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                                      }),
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      });
            });
            var H = i(23976);
            let Y = () => {
                    let { formatMessage: e } = (0, o.A)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, x.g)(),
                        s = (0, S.W)();
                    return (0, a.jsxs)(A.h, {
                        scrollElement: t,
                        children: [
                            (0, a.jsx)(I.Y, {
                                variant: I.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: s.canBack,
                                children: (0, a.jsx)(H.W, { className: F().shimmerTitle, radius: 'l' }),
                            }),
                            (0, a.jsx)(c.N, {
                                className: F().root,
                                containerClassName: F().content,
                                ref: i,
                                children: (0, a.jsxs)('div', {
                                    className: F().carouselBlocks,
                                    children: [
                                        (0, a.jsx)(_.E, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, r.$)(F().carouselBlockHeader, F().carouselBlock),
                                            containerClassName: F().carouselBlock,
                                            title: e({ id: 'entity-names.popular-playlists' }),
                                        }),
                                        (0, a.jsx)(m.p, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, r.$)(F().carouselBlockHeader, F().carouselBlock),
                                            containerClassName: F().carouselBlock,
                                            title: e({ id: 'entity-names.new-albums' }),
                                        }),
                                        (0, a.jsx)(b.O, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            isShimmerCentered: !0,
                                            isShimmerRounded: !0,
                                            headerClassName: (0, r.$)(F().carouselBlockHeader, F().carouselBlock),
                                            containerClassName: F().carouselBlock,
                                            title: e({ id: 'entity-names.popular-artists' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                V = () => {
                    let e = (0, s.useSearchParams)().get('metatagId');
                    return (e || (0, s.notFound)(), (0, a.jsx)(l.Suspense, { fallback: (0, a.jsx)(Y, {}), children: (0, a.jsx)(K, { metatagId: e }) }));
                };
        },
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var a = i(25839),
                s = i(33660),
                l = i(74631),
                r = i(39004),
                n = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(63149);
            let v = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [v, A] = (0, l.useState)(!1),
                    { formatMessage: _ } = (0, r.A)();
                return (0, l.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let l = { ...(0, s.HO)(e), isLiked: !e.isLiked };
                    A(!0);
                    let r = await e.toggleLike();
                    (A(!1),
                        r === n.f.OK
                            ? i((0, a.jsx)(m.T, { artist: l }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, v, _, i]);
            };
        },
        13936: (e) => {
            e.exports = {
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
        15787: (e) => {
            e.exports = {
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
        18421: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { C: () => l }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(a || (a = {})));
            let s = new Set(Object.values(a)),
                l = (e) => 'string' == typeof e && s.has(e);
        },
        21971: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var a = i(25839),
                s = i(88204),
                l = i(39004),
                r = i(44031),
                n = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                m = i(33660),
                v = i(74631),
                A = i(31860),
                _ = i(91149),
                h = i(92942),
                k = i(27954),
                C = i(57549),
                p = i(86869),
                S = i(69084),
                x = i(4254),
                T = i(51790),
                L = i(6323),
                y = i(24596),
                b = i.n(y);
            let I = (e) => {
                let { coverUri: t, title: i, isDisliked: s, closeToast: r } = e,
                    { formatMessage: n } = (0, l.A)(),
                    o = n(s ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(T.$, {
                    closeToast: r,
                    message: (0, a.jsxs)('div', {
                        className: b().message,
                        children: [
                            (0, a.jsx)(S.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(p.t, {
                                className: b().cover,
                                radius: 'round',
                                children: (0, a.jsx)(L.B, { className: b().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(x.HL, { className: b().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var f = i(7361),
                g = i(90613),
                j = i(3210),
                P = i(11609),
                R = i(79367),
                N = i(40110),
                O = i(20258),
                U = i(34159),
                E = i(30290),
                B = i(29872),
                w = i(56120),
                D = i(87201),
                z = i(83014),
                M = i(44806),
                F = i(55491),
                K = i(44851),
                H = i(14240),
                Y = i(56615),
                V = i(16386),
                W = i(67303),
                X = i(74682),
                $ = i(59043),
                q = i(2144),
                G = i(6304);
            let Z = (0, s.PA)((e) => {
                var t, i, s;
                let { artist: p, onOpenChange: S, open: x, ...T } = e,
                    { shouldShowBuySubscriptionModal: L, showBuySubscriptionModal: y } = (0, B.q)(),
                    {
                        settings: { isMobile: b },
                        modals: { artistAboutModal: Z },
                        trailer: J,
                        user: Q,
                        experiments: ee,
                    } = (0, k.g)(),
                    et = (0, g.A)(p),
                    ei = (0, f.K)(p),
                    ea = ((e) => {
                        let { user: t } = (0, k.g)(),
                            { notify: i } = (0, h.l)(),
                            [s, r] = (0, v.useState)(!1),
                            { formatMessage: n } = (0, l.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(C.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: _.u.ERROR });
                            if (s) return;
                            let l = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            r(!0);
                            let o = await e.toggleDislike();
                            (r(!1),
                                o === A.f.OK
                                    ? i((0, a.jsx)(I, { coverUri: l.coverUri, title: l.name, isDisliked: l.isDisliked }), { containerId: _.u.INFO })
                                    : i((0, a.jsx)(C.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: _.u.ERROR }));
                        });
                    })(p),
                    es = (0, U.F)(),
                    el = ''.concat(N.U.ARTIST, '-').concat(null == p ? void 0 : p.id),
                    { formatMessage: er } = (0, l.A)(),
                    { utmLink: en } = (0, E.f)({ blockId: N.U.ARTIST, contextType: o.K.Artist, contextId: null == p ? void 0 : p.id }),
                    { shareLink: eo, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == p ? void 0 : p.id) ? i : '' } }),
                    ed = (0, j.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == p ? void 0 : p.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (s = null == p ? void 0 : p.seeds) ? s : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: el,
                        parentContextId: null == p ? void 0 : p.id,
                    }),
                    ev = (0, R.P)(),
                    eA = er((null == p ? void 0 : p.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    e_ = (0, c.c)(() => {
                        if (L && Q.isAuthorized) return void y();
                        eu || em();
                    }),
                    eh = (0, c.c)(() => {
                        if (!ev()) {
                            if (L) return void y();
                            (null == p ? void 0 : p.id) && (J.setUtmLink(en), J.openArtistTrailer(p.id), es(r.DomainObjectType.Artist, p.id));
                        }
                    }),
                    ek = (0, c.c)(() => {
                        Z.open(null == p ? void 0 : p.id);
                    });
                (0, w.N)(x);
                let eC = { variant: F.Y.ARTIST, id: null == p ? void 0 : p.id, title: null == p ? void 0 : p.name, path: ec },
                    ep = ee.checkExperiment(M.z.WebEditorsFeatures, 'on'),
                    eS = null == p || null == (t = p.trailer) ? void 0 : t.isAvailable,
                    ex = ee.checkExperiment(M.z.WebNextArtistInfo, 'on'),
                    eT = !ee.checkExperiment(M.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: b,
                    offsetOptions: 10,
                    open: x,
                    onOpenChange: S,
                    ariaLabel: er({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        ep && (0, a.jsx)(G.WithOffline, { fallback: (0, a.jsx)(P.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !b && (0, a.jsx)(G.WithOffline, { fallback: (0, a.jsx)(W.L, { onClick: et, isPinned: null == p ? void 0 : p.isPinned }) }),
                        (0, a.jsx)(G.WithOffline, {
                            fallback: (0, a.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == p ? void 0 : p.isLiked,
                                disabled: !Q.isAuthorized || !(null == p ? void 0 : p.isAvailable),
                            }),
                        }),
                        eS && (0, a.jsx)(G.WithOffline, { fallback: (0, a.jsx)($.N, { onClick: eh }) }),
                        eT &&
                            (0, a.jsx)(G.WithOffline, {
                                fallback: (0, a.jsx)(q.C, { onClick: e_, disabled: !(null == p ? void 0 : p.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: S }),
                            }),
                        (0, a.jsx)(X.H, { disabled: !p, shareLink: eo, entityMeta: eC }),
                        ex &&
                            (0, a.jsx)(G.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ek,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eA,
                                }),
                            }),
                        (0, a.jsx)(G.WithOffline, {
                            fallback: (0, a.jsx)(Y.D, { onClick: ea, isDisliked: null == p ? void 0 : p.isDisliked, disabled: !(null == p ? void 0 : p.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        24596: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        27892: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => r });
            var a = i(25839),
                s = i(35015),
                l = i(10546);
            let r = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, a.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        41459: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => l });
            var a = i(74631),
                s = i(39004);
            let l = (e) => {
                let { formatMessage: t } = (0, s.A)();
                return (0, a.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let a = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(a, ' ').concat(i);
                }, [t, e]);
            };
        },
        41707: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => Q });
            var a = i(25839),
                s = i(82298),
                l = i(88204),
                r = i(74631),
                n = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                v = i(51246),
                A = i(66738),
                _ = i(86869),
                h = i(4254),
                k = i(56348),
                C = i(62948),
                p = i(1134),
                S = i(79367),
                x = i(29481),
                T = i(47009),
                L = i(34159),
                y = i(52512),
                b = i(30290),
                I = i(61561),
                f = i(85686),
                g = i(85743),
                j = i(50209),
                P = i(27954),
                R = i(74760),
                N = i(6323),
                O = i(64720),
                U = i(97522),
                E = i(41580),
                B = i(49438),
                w = i(71996),
                D = i(78437),
                z = i(41459),
                M = i(10820),
                F = i(3210),
                K = i(11609),
                H = i(29872),
                Y = i(56120),
                V = i(83014),
                W = i(44806),
                X = i(16386),
                $ = i(67303),
                q = i(59043);
            let G = (0, l.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: s, open: l, ...r } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, H.q)(),
                    {
                        experiments: v,
                        settings: { isMobile: A },
                        trailer: _,
                        user: h,
                    } = (0, P.g)(),
                    k = (0, C.K)(i),
                    x = (0, p.A)(i),
                    T = (0, L.F)(),
                    { formatMessage: y } = (0, n.A)(),
                    b = (0, S.P)(),
                    I = v.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    f = (0, F.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, Y.N)(l);
                let g = (0, u.c)(() => {
                    if (d) return void m();
                    b() || (_.openPlaylistTrailer(i.id), T(o.DomainObjectType.Playlist, i.id));
                });
                return (0, a.jsxs)(M.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: l,
                    offsetOptions: 10,
                    isMobile: A,
                    ariaLabel: y({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...r,
                    children: [
                        I && (0, a.jsx)(K.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : f }),
                        !A && (0, a.jsx)($.L, { onClick: x, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, a.jsx)(X.T, { onClick: k, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, a.jsx)(q.N, { onClick: g, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Z = i(15787),
                J = i.n(Z);
            let Q = (0, l.PA)((e) => {
                let { className: t, playlist: i, children: l, contentLinesCount: M, customDescription: F, onCoverMouseDown: K } = e,
                    { ref: H, intersectionPropertyId: Y } = (0, y.n)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: X },
                    } = (0, P.g)(),
                    { from: $, utmLink: q } = (0, b.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Z } = (0, n.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, g.z)(),
                    [ei, ea] = (0, r.useState)(!1),
                    [es, el] = (0, r.useState)(!1),
                    [er, en] = (0, r.useState)(!1),
                    eo = (0, z.r)(i),
                    ec = (0, C.K)(i),
                    ed = (0, p.A)(i),
                    eu = (0, x.N)(),
                    em = (0, T.b)(),
                    ev = (0, f.Z)(i.url),
                    eA = (0, L.F)(),
                    e_ = (0, S.P)(),
                    eh = (0, u.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        (V.setUtmLink(q), V.openPlaylistTrailer(i.id), eA(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ek, eC] = (0, r.useState)(!1),
                    { isPlaying: ep, togglePlay: eS } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: $, utmLink: q }, loadContextMeta: !0 },
                    }),
                    ex = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eT = (0, u.c)((e) => {
                        (ex(), ev(e));
                    }),
                    eL = (0, I.N)(),
                    ey = (0, u.c)(() => {
                        if (!e_()) {
                            if (eL) return void X.open();
                            (ei || ep || (ea(!0), null == et || et()), eS(), em(!ep));
                        }
                    }),
                    eb = (0, u.c)(() => {
                        (es || i.isLiked || (el(!0), null == Q || Q()), ec());
                    }),
                    eI = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    ef = (0, u.c)((e) => {
                        (en(e), eC(e));
                    }),
                    eg = (0, r.useMemo)(() => {
                        var e;
                        return F
                            ? (0, a.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: F }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, a.jsx)(
                                    k.i,
                                    { className: J().artists, artists: i.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [F, i]),
                    ej = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, a.jsx)(
                                O.c,
                                {
                                    className: (0, s.$)(J().likeButton, J().control),
                                    isLiked: i.isLiked,
                                    onClick: eb,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, r.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                D.n,
                                {
                                    children: (0, a.jsx)(
                                        w.k,
                                        { className: (0, s.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eR = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                E.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, s.$)(J().pinButton, J().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eN = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(_.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: eT,
                                    onMouseDown: K,
                                    children: [
                                        (0, a.jsx)(N.B, {
                                            className: J().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, a.jsx)(v.hg, {
                                            isVisible: er || ek,
                                            className: J().controls,
                                            playControl: (0, a.jsx)(
                                                B.D,
                                                {
                                                    className: (0, s.$)(J().playButton, J().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ey,
                                                    isPlaying: ep,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: ej,
                                            menuControl: (0, a.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: ef,
                                                    open: er,
                                                    onClick: eI,
                                                    className: (0, s.$)(J().menuButton, J().control),
                                                    icon: (0, a.jsx)(A.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [eT, K, i, eo, er, ek, ey, ep, ej, ef, eI, eR, eP],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, a.jsxs)(v.MN, {
                    ref: H,
                    'aria-label': eo,
                    className: (0, s.$)(J().root, t),
                    title: (0, a.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, a.jsx)(U.N, { className: J().titleLink, href: i.url, tabIndex: -1, onClick: ex, children: i.title }),
                    }),
                    srTitle: (0, a.jsx)(U.N, { className: J().srTitleLink, href: i.url, onClick: ex, children: i.title }),
                    'data-intersection-property-id': Y,
                    contentLinesCount: M,
                    view: eN,
                    description: eg,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, a.jsx)(R.x, {
                                ariaLabel: Z({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        l,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var a = i(25839),
                s = i(35015),
                l = i(3163);
            let r = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, a.jsx)(l.O, {
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        42853: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var a = i(40110),
                s = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(a.U.RUP, '_').concat(a.U.MAIN, '-').concat(a.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(a.U.DISCOGRAPHY, '_').concat(a.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(a.U.ALBUMS, '_').concat(a.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(a.U.COMPILATIONS, '_').concat(a.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(a.U.ARTISTS, '_').concat(a.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(a.U.CLIPS, '_').concat(a.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(a.U.DISCOVERY, '_').concat(a.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(a.U.SEARCH, '_').concat(a.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR, '_').concat(a.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        45329: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var a = i(47127);
            let s = (e) => {
                var t;
                return e
                    ? {
                          playlistUuid: e.uuid,
                          available: e.isAvailable,
                          uid: e.uid,
                          kind: e.kind,
                          title: e.title || '',
                          revision: e.revision || 0,
                          snapshot: 0,
                          trackCount: e.tracksCount || 0,
                          visibility: e.visibility || 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: e.coverUri || '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: e.coverUri || '',
                          tags: [],
                          likesCount: e.likesCount || 0,
                          generatedPlaylistType: e.generatedPlaylistType || '',
                          trailer: { available: !!(null == (t = e.trailer) ? void 0 : t.isAvailable) },
                      }
                    : {
                          playlistUuid: '',
                          available: !0,
                          uid: 0,
                          kind: 0,
                          title: '',
                          revision: 0,
                          snapshot: 0,
                          trackCount: 0,
                          visibility: 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          tags: [],
                          likesCount: 0,
                          generatedPlaylistType: '',
                          trailer: { available: !0 },
                      };
            };
        },
        56615: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(25839),
                s = i(88204),
                l = i(8487),
                r = i(61493),
                n = i(66738),
                o = i(10820),
                c = i(27954);
            let d = (0, s.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: s, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(n.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: s || !u.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        57138: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => r });
            var a = i(25839),
                s = i(74631),
                l = i(14482);
            let r = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: r,
                        blockPosX: n,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: m,
                        displayReasonId: v,
                    } = e,
                    A = (0, s.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: r,
                            blockPosX: n,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: v,
                        }),
                        [t, i, r, n, o, c, d, u, v],
                    );
                return (0, a.jsx)(l.p.Provider, { value: A, children: m });
            };
        },
        61399: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            var a = i(18421);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var a = i(25839),
                s = i(33660),
                l = i(74631),
                r = i(39004),
                n = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(42190);
            let v = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [v, A] = (0, l.useState)(!1),
                    { formatMessage: _ } = (0, r.A)();
                return (0, l.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let l = { ...(0, s.HO)(e), url: e.url, isLiked: !e.isLiked };
                    A(!0);
                    let r = await e.toggleLike();
                    (A(!1),
                        r === n.f.OK
                            ? i((0, a.jsx)(m.T, { playlist: l }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, v, e, _, i]);
            };
        },
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var a = i(25839),
                s = i(53712),
                l = i(35015),
                r = i(3163);
            let n = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: l.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: s.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        66284: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => p });
            var a = i(25839),
                s = i(82298),
                l = i(74631),
                r = i(89288),
                n = i(44031),
                o = i(49656),
                c = i(5365),
                d = i(23976),
                u = i(26742),
                m = i(95314),
                v = i(18412),
                A = i(80986),
                _ = i(95388),
                h = i(99024),
                k = i.n(h);
            let C = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: h,
                            isShimmerActive: C,
                            isShimmerWithSubcover: p,
                            isShimmerCentered: S,
                            isShimmerRounded: x,
                            title: T,
                            description: L,
                            coverUrl: y,
                            viewAllActionLink: b,
                            titleChildren: I,
                            headerChildren: f,
                            children: g,
                            className: j,
                            containerClassName: P,
                            headerClassName: R,
                            itemClassName: N,
                            showHeaderShimmer: O = !1,
                            showShimmerInfo: U = !0,
                            showControls: E = !0,
                            headingRef: B,
                            headingVariant: w,
                            customShimmer: D,
                            ...z
                        } = e,
                        M = (0, l.useId)(),
                        F = (0, l.useRef)(null),
                        { objectsCount: K } = (0, u.N)(),
                        H = (0, l.useMemo)(
                            () =>
                                O && h
                                    ? (0, a.jsx)('div', { className: R, children: (0, a.jsx)(d.W, { isActive: C, className: k().shimmerTitle, radius: 'l' }) })
                                    : T || L || I || f
                                      ? (0, a.jsx)(m.B, {
                                            objectType: n.DomainObjectType.Shortcut,
                                            objectId: String(b),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != K ? K : 0,
                                            children: (0, a.jsx)(v.T, {
                                                className: R,
                                                labeledForId: M,
                                                title: T,
                                                description: L,
                                                coverUrl: y,
                                                viewAllActionLink: b,
                                                controls: E && (0, a.jsx)(A.X, { className: k().controls, carouselRef: F }),
                                                headingRef: B,
                                                headingVariant: w,
                                                withDescription: !!L,
                                                titleChildren: I,
                                                children: f,
                                            }),
                                        })
                                      : void 0,
                            [y, L, R, B, w, M, C, h, K, E, O, T, I, f, b],
                        ),
                        Y = (0, o.L)(() => D || (0, _.k)({ className: i, isActive: C, withInfo: U, withSubcover: p, centered: S, round: x }));
                    return (0, a.jsxs)('section', {
                        ref: t,
                        className: (0, s.$)(k().root, j),
                        ...(0, r.OZ)(z),
                        children: [
                            H,
                            (0, a.jsx)(c.F, {
                                className: P,
                                ref: F,
                                itemClassName: (0, s.$)(k().item, k().important, N),
                                'aria-labelledby': ''.concat(M, ' ').concat(M, '-description'),
                                children: h ? Y : g,
                            }),
                        ],
                    });
                },
                p = (0, l.forwardRef)((e, t) => (0, a.jsx)(C, { forwardRef: t, ...e }));
        },
        75568: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var a = i(47127),
                s = i(61399);
            let l = (e) => {
                var t, i, l, r, n;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, s.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, s.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (l = e.counts) ? void 0 : l.compilations) || 0,
                              tracks: (null == (r = e.counts) ? void 0 : r.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (n = e.trailer) ? void 0 : n.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        77635: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var a = i(25839),
                s = i(74631),
                l = i(44031),
                r = i(61777),
                n = i(95314),
                o = i(66284),
                c = i(76939);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            albums: v,
                            className: A,
                            containerClassName: _,
                            headerClassName: h,
                            viewAllActionLink: k,
                            headingRef: C,
                            headingVariant: p,
                            shouldSendAnalyticsOnLoaded: S,
                            ...x
                        } = e,
                        T = (0, r.f)();
                    return (
                        (0, s.useEffect)(() => {
                            S && T();
                        }, [T, S]),
                        (0, a.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: A,
                            headerClassName: h,
                            containerClassName: _,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: k,
                            headingRef: C,
                            headingVariant: p,
                            ...x,
                            children:
                                null == v
                                    ? void 0
                                    : v.map((e, t) =>
                                          (0, a.jsx)(
                                              n.B,
                                              {
                                                  objectType: l.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: v.length,
                                                  children: (0, a.jsx)(c.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, s.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        80477: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => r });
            var a = i(25839),
                s = i(35015),
                l = i(10546);
            let r = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        84058: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var a = i(25839),
                s = i(82298),
                l = i(88204),
                r = i(74631),
                n = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                v = i(51246),
                A = i(66738),
                _ = i(86869),
                h = i(4254),
                k = i(1797),
                C = i(7361),
                p = i(90613),
                S = i(79367),
                x = i(29481),
                T = i(47009),
                L = i(34159),
                y = i(52512),
                b = i(30290),
                I = i(61561),
                f = i(85686),
                g = i(85743),
                j = i(50209),
                P = i(27954),
                R = i(6323),
                N = i(64720),
                O = i(97522),
                U = i(41580),
                E = i(49438),
                B = i(71996),
                w = i(78437),
                D = i(21971),
                z = i(13936),
                M = i.n(z);
            let F = (0, l.PA)((e) => {
                let { artist: t, className: i, children: l, contentLinesCount: z, topTitleElement: F, bottomTitleElement: K } = e,
                    { ref: H, intersectionPropertyId: Y } = (0, y.n)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: X },
                    } = (0, P.g)(),
                    { from: $, utmLink: q } = (0, b.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: G } = (0, n.A)(),
                    [Z, J] = (0, r.useState)(!1),
                    [Q, ee] = (0, r.useState)(!1),
                    [et, ei] = (0, r.useState)(!1),
                    { sendLikeSearchFeedback: ea, sendNavigateSearchFeedback: es, sendPlaySearchFeedback: el } = (0, g.z)(),
                    er = (0, x.N)(),
                    en = (0, T.b)(),
                    eo = (0, C.K)(t),
                    ec = (0, p.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: ev } = t,
                    eA = (0, f.Z)(t.url),
                    [e_, eh] = (0, r.useState)(!1),
                    ek = (0, L.F)(),
                    eC = (0, S.P)(),
                    ep = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eC())) return void e.preventDefault();
                        (V.openArtistTrailer(t.id), ek(o.DomainObjectType.Artist, t.id));
                    }),
                    eS = (0, r.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = ev ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, ev, G]),
                    { isPlaying: ex, togglePlay: eT } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: $, utmLink: q }, loadContextMeta: !0 },
                    }),
                    eL = (0, k.S)({ artist: t, callback: eA }),
                    ey = (0, k.S)({ artist: t, callback: eT }),
                    eb = (0, u.c)((e) => {
                        (null == es || es(), er({ to: o.AppScreen.ArtistScreen }), eL(e));
                    }),
                    eI = (0, I.N)(),
                    ef = (0, u.c)(() => {
                        if (!eC()) {
                            if (eI) return void X.open();
                            (Z || ex || (J(!0), null == el || el()), ey(), en(!ex));
                        }
                    }),
                    eg = (0, u.c)(() => {
                        (Q || ev || (ee(!0), null == ea || ea()), eo());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eP = (0, u.c)((e) => {
                        (ei(e), eh(e));
                    }),
                    eR = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eP,
                                    open: et,
                                    onClick: ej,
                                    className: (0, s.$)(M().menuButton, M().control),
                                    size: 's',
                                    icon: (0, a.jsx)(A.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ej, eP, et],
                    ),
                    eN = (0, r.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                w.n,
                                {
                                    children: (0, a.jsx)(B.k, {
                                        className: (0, s.$)(M().trailerButton, M().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ep,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ep]),
                    eO = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                U.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, s.$)(M().pinButton, M().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eU = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                v.hg,
                                {
                                    isVisible: et || e_,
                                    className: M().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        E.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, s.$)(M().playButton, M().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ef,
                                            isPlaying: ex,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        N.c,
                                        {
                                            className: (0, s.$)(M().likeButton, M().control),
                                            isLiked: ev,
                                            onClick: eg,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eO,
                                    trailerControl: eN,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eE = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(_.t, {
                                className: M().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: M().coverBlock,
                                    onClick: eb,
                                    children: [
                                        (0, a.jsx)(R.B, {
                                            className: M().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eS,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eU,
                                    ],
                                }),
                            }),
                        [eb, em, eS, t.isAvailable, eU],
                    );
                return (0, a.jsx)(v.MN, {
                    ref: H,
                    className: (0, s.$)(M().root, i),
                    textPosition: 'center',
                    'aria-label': eS,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            F,
                            (0, a.jsx)(h.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(O.N, {
                                    className: M().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eS,
                                    onClick: eb,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, a.jsx)(O.N, { className: M().srTitleLink, href: t.url, onClick: eb, children: eS }),
                    'data-intersection-property-id': Y,
                    contentLinesCount: z,
                    view: eE,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: l,
                });
            });
        },
        87219: (e) => {
            e.exports = {
                root: 'GenrePage_root___kL_v',
                content: 'GenrePage_content__NRwAJ',
                shimmerTitle: 'GenrePage_shimmerTitle__hrgjK',
                carouselBlocks: 'GenrePage_carouselBlocks__kR63B',
                carouselBlock: 'GenrePage_carouselBlock__QCkpK',
                carouselBlockHeader: 'GenrePage_carouselBlockHeader__u12sn',
            };
        },
        88720: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            var a = i(75568);
            let s = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let i = (null == (t = e.artists) ? void 0 : t.map((e) => (0, a.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: i,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        90613: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var a = i(25839),
                s = i(33660),
                l = i(74631),
                r = i(39004),
                n = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, r.A)(),
                    [v, A] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (v) return;
                    let l = { ...(0, s.HO)(e), isPinned: !e.isPinned };
                    A(!0);
                    let r = await e.togglePin();
                    (A(!1),
                        r
                            ? i((0, a.jsx)(u.l, { artist: l }), { containerId: n.u.INFO })
                            : i((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, v, m, i]);
            };
        },
        91797: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var a = i(25839),
                s = i(74631),
                l = i(44031),
                r = i(61777),
                n = i(95314),
                o = i(66284),
                c = i(41707);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            playlists: v,
                            containerClassName: A,
                            className: _,
                            headerClassName: h,
                            viewAllActionLink: k,
                            headingVariant: C,
                            shouldSendAnalyticsOnLoaded: p,
                            ...S
                        } = e,
                        x = (0, r.f)();
                    return (
                        (0, s.useEffect)(() => {
                            p && !i && x();
                        }, [i, x, p]),
                        (0, a.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: _,
                            headerClassName: h,
                            containerClassName: A,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: k,
                            headingVariant: C,
                            ...S,
                            children:
                                null == v
                                    ? void 0
                                    : v.map((e, t) =>
                                          (0, a.jsx)(
                                              n.B,
                                              {
                                                  objectType: l.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: v.length,
                                                  children: (0, a.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, s.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        93269: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 2831));
        },
        95388: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => l });
            var a = i(25839),
                s = i(19412);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, a.jsx)(s.V, { ...e }, i));
            };
        },
        99024: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7055, 3112, 7339, 740, 6287, 2121, 3472, 2616, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 3580, 2038, 4163,
                3246, 7848, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 6361, 5898, 5232, 5382, 4475, 5056, 7358,
            ],
            () => e((e.s = 93269)),
        ),
            (_N_E = e.O()));
    },
]);
