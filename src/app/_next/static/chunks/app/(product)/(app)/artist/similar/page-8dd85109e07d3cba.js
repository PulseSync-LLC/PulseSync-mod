(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9846],
    {
        324: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => n });
            var a = i(28166);
            function n(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(a.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        892: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => G }));
            var a = i(88800),
                n = i(58390),
                r = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(88969),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                m = i(66719),
                g = i(29504),
                p = i(32596),
                h = i(21256),
                _ = i(69630),
                x = i(91959),
                v = i(98427),
                f = i(46422),
                y = i(44230),
                A = i(37670),
                k = i(72288),
                b = i(19998),
                N = i(86790),
                T = i(60266),
                E = i(93317),
                j = i(1698),
                I = i(81685),
                L = i(30144),
                S = i(324),
                O = i(53073),
                C = i(83418),
                R = i(46511),
                w = i(57297),
                D = i(2218),
                P = i(77863),
                M = i(45383),
                U = i(98774);
            async function z(e, t) {
                var i, a, n;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, R.W)(t.locale),
                    s = r({ id: 'metadata.artist-similar-title' }, { artistName: e.artist.name }),
                    l = r({ id: 'metadata.artist-similar-description' }, { artistName: e.artist.name });
                return {
                    robots: (0, U.G)(e.artist),
                    title: s,
                    description: l,
                    openGraph: (0, w.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        customImage: (0, C.v)({ host: t.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, D.H)({ cardType: P.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, O.k)(),
                    appLinks: (0, S.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (n = t.fullUrl) ? n : '', host: t.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, M.S)('/artist/:artistId/similar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var H = i(27342),
                W = i(63512),
                B = i(50385),
                F = i.n(B);
            let K = (0, r.PA)((e) => {
                var t, i, r, S;
                let { artistId: O, preloadedArtist: C, preloadedSimilarArtists: R } = e,
                    { artist: w, disclaimerModalState: D } = (0, k.g)(),
                    { formatMessage: P } = (0, l.A)(),
                    { contentScrollRef: M, setContentScrollRef: U } = (0, y.g)(),
                    B = (0, f.W)(),
                    K = (0, x.S)({ artist: null == (t = w.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, W.G)(O),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = w.meta) ? void 0 : e.artist.isUnsafeLegal) && K();
                    }, [null == (i = w.meta) ? void 0 : i.artist.isUnsafeLegal, K]),
                    (0, H._)(w, O),
                    (0, s.useEffect)(
                        () => () => {
                            w.similarArtistsSubPage.reset();
                        },
                        [w],
                    ),
                    w.similarArtistsSubPage.isNotFound && (0, n.notFound)(),
                    (0, A.J)(w.similarArtistsSubPage.isResolved));
                let Y = (0, s.useMemo)(() => {
                        if (w.similarArtistsSubPage.isResolved) {
                            var e;
                            return null == (e = w.similarArtistsSubPage.similarArtists)
                                ? void 0
                                : e.map((e) => (0, a.jsx)(h.a, { className: F().item, artist: e, contentLinesCount: 3 }, e.id));
                        }
                        let t = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.similar-artists' }) });
                        return (0, a.jsx)(j.e, { isActive: !0, itemClassName: F().item, round: !0, centered: !0, 'aria-label': t });
                    }, [
                        w.similarArtistsSubPage.loadingState,
                        w.similarArtistsSubPage.similarArtists,
                        P,
                        null == (r = w.similarArtistsSubPage.similarArtists) ? void 0 : r.length,
                    ]),
                    G = [];
                return (w.similarArtistsSubPage.isNeededToLoad && G.push(w.similarArtistsSubPage.getData({ artistId: O, preloadedSimilarArtists: R })),
                w.infoLoadingState.isNeededToLoad && G.push(w.getInfo({ artistId: O, preloadedArtist: C })),
                ((e) => {
                    var t;
                    let { fullscreenVideoPlayer: i } = (0, k.g)(),
                        a = null == e || null == (t = e.meta) ? void 0 : t.artist,
                        n = null == e ? void 0 : e.infoLoadingState.isLoading,
                        r = null == e ? void 0 : e.infoLoadingState.isRejected,
                        l = (0, s.useCallback)((e) => (r ? {} : a && !n ? z({ artist: (0, I.E)(a) }, e) : void 0), [a, n, r]);
                    (0, L.C)(i.modal.isOpened ? null : l);
                })(w),
                G.length && (0, s.use)(Promise.allSettled(G)),
                null == (S = w.meta) ? void 0 : S.artist.isLegalRejected)
                    ? (0, a.jsx)(b.M, { modalState: D })
                    : w.isInfoSomethingWentWrong
                      ? (0, a.jsx)(p.SomethingWentWrong, {})
                      : (0, a.jsx)(d.a, {
                            pageId: c.AppScreen.ArtistScreen,
                            pageIdForFrom: v.b.ARTIST_SIMILAR,
                            mainObjectId: O,
                            mainObjectType: c.DomainObjectType.Artist,
                            children: (0, a.jsx)(_.h, {
                                scrollElement: M,
                                outerTitle: P({ id: 'page.artist-similar-header' }, { artistName: w.commonSubPage.artistName }),
                                children: (0, a.jsxs)('div', {
                                    className: F().root,
                                    'data-test-id': u.Xk.artist.ARTIST_SIMILAR_PAGE,
                                    children: [
                                        (0, a.jsx)(E.Y, {
                                            variant: E.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: B.canBack,
                                            children: (0, a.jsx)(g.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, a.jsx)(o.A, { id: 'page.artist-similar-header', values: { artistName: w.commonSubPage.artistName } }),
                                            }),
                                        }),
                                        (0, a.jsxs)(m.N, {
                                            className: F().scrollableContent,
                                            containerClassName: F().container,
                                            ref: U,
                                            children: [
                                                (0, a.jsx)('div', { className: F().content, 'aria-labelledby': 'collection-artists-header', tabIndex: 0, children: Y }),
                                                (0, a.jsx)(T.A, { children: (0, a.jsx)(N.w, { className: F().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var Y = i(21438);
            let G = () => {
                let e = (0, n.useSearchParams)().get('artistId');
                return ((e && (0, Y.L)(e)) || (0, n.notFound)(), (0, a.jsx)(K, { artistId: e }));
            };
        },
        1220: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { $: () => a }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(a || (a = {})));
        },
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var a = i(88800),
                n = i(37770);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: r,
                    centered: s,
                    withInfo: l,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, a.jsx)(
                        n.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: s, withInfo: l, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        2218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            var a = i(28166),
                n = i(77863);
            let r = '@yandexmusic';
            function s(e) {
                return e.cardType === n.W.SUMMARY_LARGE_IMAGE
                    ? { card: n.W.SUMMARY_LARGE_IMAGE, site: r, title: e.title, description: e.description }
                    : {
                          card: n.W.APP,
                          site: r,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(a.Lz, '/').concat(e.url) } },
                      };
            }
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
        11006: (e) => {
            e.exports = {
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
        12526: (e, t, i) => {
            var a = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function n(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    n = t[0];
                return i.e(t[1]).then(() => i.t(n, 19));
            }
            ((n.keys = () => Object.keys(a)), (n.id = 12526), (e.exports = n));
        },
        19998: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => b });
            var a = i(88800),
                n = i(65724),
                r = i(84961),
                s = i(53548),
                l = i(88969),
                o = i(17392),
                c = i(29993),
                d = i(96817),
                u = i(29504),
                m = i(4086),
                g = i(41928),
                p = i(46422),
                h = i(4370),
                _ = i(78940),
                x = i(85587),
                v = i(15253),
                f = i(91292),
                y = i(28806),
                A = i.n(y);
            let k = {
                    [x.n.ALBUM]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                b = (0, r.PA)((e) => {
                    var t;
                    let { modalState: i, data: r, onClose: y, className: b } = e,
                        N = null != r ? r : null == i ? void 0 : i.modalData,
                        T = (0, p.W)(),
                        E = (0, _.Z)(h.Z.main.href),
                        j = (0, g.N)().get(m.U2),
                        I = (0, c.c)(() => {
                            if (y) return y();
                            (T.canBack && T.back(), E());
                        }),
                        L = (null == N || null == (t = N.details) ? void 0 : t.url) && N.details.text,
                        S = (0, c.c)(() => {
                            var e;
                            null == i || i.setConfirmUnsafeDisclaimer(!0);
                            let t = j.get(v.c.ExEx),
                                a = new Date(),
                                n = a.setMinutes(a.getMinutes() + 15),
                                r =
                                    null != (e = null == i ? void 0 : i.entityKey)
                                        ? e
                                        : ''.concat(null == i ? void 0 : i.entityType, '_').concat(null == i ? void 0 : i.entityId);
                            (t ? j.set(v.c.ExEx, [...t, r], { expires: new Date(n) }) : j.set(v.c.ExEx, [r], { expires: new Date(n) }),
                                null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerConfirmHandler) && i.onDisclaimerConfirmHandler());
                        }),
                        O = (0, c.c)(() => {
                            ((null == i ? void 0 : i.shouldHistoryBack) ? (null == y || y(), T.canBack && T.back(), E()) : null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerRejectHandler) && i.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == i || i.reset();
                        },
                        [i],
                    );
                    let C = (0, s.useMemo)(() => {
                            if (N) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, n.$)(A().title, A().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: N.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: N.description,
                                        }),
                                        L &&
                                            (0, a.jsx)(f.N, {
                                                href: null == (e = N.details) ? void 0 : e.url,
                                                className: A().link,
                                                children: (0, a.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = N.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [N, L]),
                        R = (0, s.useMemo)(
                            () =>
                                (null == i ? void 0 : i.type) === x.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, a.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: O,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: S,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: i.entityType && k[i.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)('div', {
                                          className: A().buttons,
                                          children: (0, a.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [S, null == i ? void 0 : i.entityType, null == i ? void 0 : i.type, I, O],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, n.$)(A().root, b),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: A().container, children: [C, R] }),
                    });
                });
        },
        20775: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => n });
            var a = i(62837);
            let n = (e, t) => !e && !!(t && (0, a.Ve)(t, a.Yw.MODAL));
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => W });
            var a = i(88800),
                n = i(65724),
                r = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                m = i(17392),
                g = i(18593),
                p = i(29993),
                h = i(79070),
                _ = i(29832),
                x = i(52300),
                v = i(7555),
                f = i(29504),
                y = i(91959),
                A = i(64207),
                k = i(77455),
                b = i(5407),
                N = i(57934),
                T = i(84384),
                E = i(4795),
                j = i(78940),
                I = i(55693),
                L = i(39079),
                S = i(72288),
                O = i(81877),
                C = i(49738),
                R = i(91292),
                w = i(56862),
                D = i(16704),
                P = i(56446),
                M = i(36207),
                U = i(43161),
                z = i(93434),
                H = i.n(z);
            let W = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: z, topTitleElement: W, bottomTitleElement: B } = e,
                    F = (0, c.D)(),
                    {
                        trailer: K,
                        user: Y,
                        paywall: { modal: G },
                    } = (0, S.g)(),
                    { from: X, utmLink: $ } = (0, T.f)({ contextId: t.id, contextType: g.K.Artist }),
                    { formatMessage: Z } = (0, l.A)(),
                    [V, q] = (0, s.useState)(!1),
                    [J, Q] = (0, s.useState)(!1),
                    [ee, et] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, I.z)(),
                    er = (0, d.S)(),
                    es = (0, u.g)(),
                    el = (0, A.K)(t),
                    eo = (0, k.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = t,
                    eg = (0, j.Z)(t.url),
                    [ep, eh] = (0, s.useState)(!1),
                    e_ = (0, N.F)(),
                    ex = (0, b.P)(),
                    ev = (0, p.c)((e) => {
                        if ((e.stopPropagation(), ex())) return void e.preventDefault();
                        (K.openArtistTrailer(t.id), e_(o.DomainObjectType.Artist, t.id));
                    }),
                    ef = (0, s.useMemo)(() => {
                        let e = Z({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = em ? Z({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, em, Z]),
                    { isPlaying: ey, togglePlay: eA } = (0, L.D)({
                        playContextParams: { contextData: { type: g.K.Artist, meta: { id: Number(ec) }, from: X, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    ek = (0, y.S)({ artist: t, callback: eg }),
                    eb = (0, y.S)({ artist: t, callback: eA }),
                    eN = (0, p.c)((e) => {
                        (null == ea || ea(), er({ to: o.AppScreen.ArtistScreen }), ek(e));
                    }),
                    eT = (0, E.N)(),
                    eE = (0, p.c)(() => {
                        if (!ex()) {
                            if (eT) return void G.open();
                            (V || ey || (q(!0), null == en || en()), eb(), ey || es());
                        }
                    }),
                    ej = (0, p.c)(() => {
                        (J || em || (Q(!0), null == ei || ei()), el());
                    }),
                    eI = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, p.c)((e) => {
                        (et(e), eh(e));
                    }),
                    eS = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                U.g,
                                {
                                    artist: t,
                                    onOpenChange: eL,
                                    open: ee,
                                    onClick: eI,
                                    className: (0, n.$)(H().menuButton, H().control),
                                    size: 's',
                                    icon: (0, a.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eI, eL, ee],
                    ),
                    eO = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                M.n,
                                {
                                    children: (0, a.jsx)(P.k, {
                                        className: (0, n.$)(H().trailerButton, H().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ev,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ev]),
                    eC = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                w.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, n.$)(H().pinButton, H().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eR = (0, h.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                _.hg,
                                {
                                    isVisible: ee || ep,
                                    className: H().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        D.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, n.$)(H().playButton, H().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eE,
                                            isPlaying: ey,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        C.c,
                                        {
                                            className: (0, n.$)(H().likeButton, H().control),
                                            isLiked: em,
                                            onClick: ej,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !Y.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eS,
                                    pinControl: eC,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(v.t, {
                                className: H().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: H().coverBlock,
                                    onClick: eN,
                                    children: [
                                        (0, a.jsx)(O.B, {
                                            className: H().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ef,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eR,
                                    ],
                                }),
                            }),
                        [eN, eu, ef, t.isAvailable, eR],
                    );
                return (0, a.jsx)(_.MN, {
                    ref: F,
                    className: (0, n.$)(H().root, i),
                    textPosition: 'center',
                    'aria-label': ef,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            W,
                            (0, a.jsx)(f.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(R.N, {
                                    className: H().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ef,
                                    onClick: eN,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            B,
                        ],
                    }),
                    srTitle: (0, a.jsx)(R.N, { className: H().srTitleLink, href: t.url, onClick: eN, children: ef }),
                    contentLinesCount: z,
                    view: ew,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        21424: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        21438: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            let a = /^(0|[1-9]\d*)$/;
            function n(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        27342: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => n });
            var a = i(53548);
            let n = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28806: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        29201: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            var a = i(35396);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        30144: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => p });
            var a = i(53548),
                n = i(58390),
                r = i(51611),
                s = i(65523);
            let l = {
                other: {
                    'apple-mobile-web-app-capable': 'yes',
                    'apple-mobile-web-app-status-bar-style': 'black',
                    'apple-mobile-web-app-title': 'Яндекс Музыка',
                    robots: 'noyaca',
                },
            };
            var o = i(46511);
            async function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fullUrl: null, locale: null, url: null, tld: 'net', host: 'music.yandex.ru' },
                    t = await (0, o.W)(e.locale);
                return {
                    ...l,
                    title: t({ id: 'metadata.yandex-music-default-title' }),
                    description: t({ id: 'metadata.yandex-music-default-description' }),
                    alternates: { canonical: e.canonical },
                };
            }
            var d = i(88349),
                u = i(91241);
            let m = (e, t) => {
                    let i = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (i) return i;
                    let a = window.document.createElement('meta');
                    return (a.setAttribute(e, t), a);
                },
                g = (e) => {
                    let { title: t, description: i, openGraph: a } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof i)) {
                        let e = m('name', 'description');
                        (e.setAttribute('content', i), window.document.head.appendChild(e));
                    }
                    let n = '';
                    if (a) {
                        let e = 'string' == typeof a.title ? a.title : '',
                            t = 'string' == typeof a.description ? a.description : '',
                            i = Array.isArray(a.images) ? a.images[0] : null;
                        n = i && 'object' == typeof i && 'url' in i ? String(i.url) : '';
                        let r = m('property', 'og:title'),
                            s = m('property', 'og:description'),
                            l = m('property', 'og:image');
                        (r.setAttribute('content', e),
                            s.setAttribute('content', t),
                            l.setAttribute('content', n),
                            window.document.head.appendChild(r),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l));
                    }
                },
                p = (e) => {
                    let { language: t } = (0, r.h)(),
                        i = (0, s.U)(),
                        l = (0, n.usePathname)(),
                        o = (0, n.useSearchParams)().toString();
                    (0, a.useEffect)(() => {
                        if (!e) return;
                        let a = !0,
                            n = ((e, t) => ({ fullUrl: e.href, locale: new Intl.Locale(t), url: e.pathname, tld: (0, d.f)(e.host) || u.l, host: e.host }))(
                                window.location,
                                t,
                            ),
                            r = window.location.pathname + window.location.search,
                            s = () => a && r === window.location.pathname + window.location.search;
                        return (
                            (async () => {
                                try {
                                    let t = await e(n);
                                    if (!s() || !t) return;
                                    let i = 'string' == typeof t.title && t.title.trim() ? t.title : (await c(n)).title;
                                    s() && g({ ...t, title: i });
                                } catch (e) {
                                    if (!s()) return;
                                    i.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(n);
                                        s() && g(e);
                                    } catch (e) {
                                        s() && i.error('[ClientMetadata] Failed to load fallback metadata', { error: e });
                                    }
                                }
                            })(),
                            () => {
                                a = !1;
                            }
                        );
                    }, [e, t, i, l, o]);
                };
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => R });
            var a = i(88800),
                n = i(65724),
                r = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(87999),
                g = i(47149),
                p = i(84423),
                h = i(89846),
                _ = i(64543),
                x = i(63582);
            let v = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: a } = (0, _.j)();
                    return {
                        sendRefreshEvent: (0, s.useCallback)(() => {
                            if (!t || !i || !(null == a ? void 0 : a.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: a.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, g.bv)(t, e);
                        }, [t, i, null == a ? void 0 : a.pageId]),
                    };
                }),
                f = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: a } = (0, h.g)(),
                        { screen: n } = (0, _.j)();
                    (0, s.useEffect)(() => {
                        if (!i || !a || !(null == n ? void 0 : n.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: a,
                            pageId: n.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, g.z5)(i, t);
                    }, [i, e, a, null == n ? void 0 : n.pageId]);
                });
            var y = i(44230),
                A = i(4370),
                k = i(72288),
                b = i(97956),
                N = i(56248),
                T = i(90688),
                E = i(78940);
            let j = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var I = i(96856),
                L = i.n(I);
            let S = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { slam: s } = (0, k.g)(),
                    { contentRef: l } = (0, y.g)(),
                    d = (0, E.Z)(A.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(L().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(N.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(L().navigation, { [L().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, a.jsxs)('div', {
                            className: (0, n.$)(L().content, { [L().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(T._V, { className: L().image, src: j.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: L().message,
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            className: L().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            className: L().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: L().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.HL, {
                                            className: L().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var O = i(9184),
                C = i.n(O);
            let R = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { formatMessage: m } = (0, l.A)(),
                    g = (0, s.useContext)(k.P),
                    p = null == g ? void 0 : g.experiments.checkExperiment(b.z.WebNextUnstableMusicScreen, 'on'),
                    h = m(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                f(h);
                let { sendRefreshEvent: _ } = v(),
                    x = (0, s.useCallback)(() => {
                        (_(), (window.location.href = A.Z.main.href));
                    }, [_]),
                    { contentRef: T } = (0, y.g)();
                return p
                    ? (0, a.jsx)(S, { className: t, withBackwardControl: i, onBack: r })
                    : (0, a.jsxs)('div', {
                          className: (0, n.$)(C().root, t),
                          children: [
                              i &&
                                  (0, a.jsx)(N.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(C().navigation, { [C().navigation_desktop]: !T }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, n.$)(C().content, { [C().content_shrink]: !i }),
                                  children: [
                                      (0, a.jsx)(d.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(u.DZ, { className: (0, n.$)(C().title, C().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, a.jsxs)(u.HL, {
                                          className: (0, n.$)(C().text, C().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: x,
                                          className: C().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        35396: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { C: () => r }),
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
            let n = new Set(Object.values(a)),
                r = (e) => 'string' == typeof e && n.has(e);
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => q });
            var a = i(88800),
                n = i(84961),
                r = i(2058),
                s = i(87999),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                g = i(53548),
                p = i(79390),
                h = i(29595),
                _ = i(74965),
                x = i(72288),
                v = i(66943),
                f = i(7555),
                y = i(73170),
                A = i(29504),
                k = i(59304),
                b = i(81877),
                N = i(85074),
                T = i.n(N);
            let E = (e) => {
                let { coverUri: t, title: i, isDisliked: n, closeToast: s } = e,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(k.$, {
                    closeToast: s,
                    message: (0, a.jsxs)('div', {
                        className: T().message,
                        children: [
                            (0, a.jsx)(y.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(f.t, {
                                className: T().cover,
                                radius: 'round',
                                children: (0, a.jsx)(b.B, { className: T().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(A.HL, { className: T().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var j = i(64207),
                I = i(77455),
                L = i(48749),
                S = i(22505),
                O = i(5407),
                C = i(64284),
                R = i(98427),
                w = i(57934),
                D = i(84384),
                P = i(9618),
                M = i(95210),
                U = i(47964),
                z = i(46936),
                H = i(97956),
                W = i(98953),
                B = i(32721),
                F = i(18130),
                K = i(56117),
                Y = i(93091),
                G = i(27817),
                X = i(74064),
                $ = i(15425),
                Z = i(81066),
                V = i(64546);
            let q = (0, n.PA)((e) => {
                var t, i, n;
                let { artist: f, onOpenChange: y, open: A, ...k } = e,
                    { shouldShowBuySubscriptionModal: b, showBuySubscriptionModal: N } = (0, P.q)(),
                    {
                        settings: { isMobile: T },
                        modals: { artistAboutModal: q },
                        trailer: J,
                        user: Q,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, I.A)(f),
                    ei = (0, j.K)(f),
                    ea = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, _.l)(),
                            [n, s] = (0, g.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(v.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: h.u.ERROR });
                            if (n) return;
                            let r = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === p.f.OK
                                    ? i((0, a.jsx)(E, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: h.u.INFO })
                                    : i((0, a.jsx)(v.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR }));
                        });
                    })(f),
                    en = (0, w.F)(),
                    er = ''.concat(C.U.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: es } = (0, r.A)(),
                    { utmLink: el } = (0, D.f)({ blockId: C.U.ARTIST, contextType: o.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: eo, pathname: ec } = (0, F.b)('/artist/:artistId', { params: { artistId: null != (i = null == f ? void 0 : f.id) ? i : '' } }),
                    ed = (0, L.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, U.B)({
                        seeds: null != (n = null == f ? void 0 : f.seeds) ? n : [],
                        pageIdForFrom: R.b.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    eg = (0, O.P)(),
                    ep = es((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eh = (0, c.c)(() => {
                        if (b && Q.isAuthorized) return void N();
                        eu || em();
                    }),
                    e_ = (0, c.c)(() => {
                        if (!eg()) {
                            if (b) return void N();
                            (null == f ? void 0 : f.id) && (J.setUtmLink(el), J.openArtistTrailer(f.id), en(s.DomainObjectType.Artist, f.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        q.open(null == f ? void 0 : f.id);
                    });
                (0, M.N)(A);
                let ev = { variant: W.Y.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: ec },
                    ef = ee.checkExperiment(H.z.WebEditorsFeatures, 'on'),
                    ey = null == f || null == (t = f.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(H.z.WebNextArtistInfo, 'on'),
                    ek = !ee.checkExperiment(H.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: T,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: y,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...k,
                    children: [
                        ef && (0, a.jsx)(V.WithOffline, { fallback: (0, a.jsx)(S.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !T && (0, a.jsx)(V.WithOffline, { fallback: (0, a.jsx)(G.L, { onClick: et, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, a.jsx)(V.WithOffline, {
                            fallback: (0, a.jsx)(Y.T, {
                                onClick: ei,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !Q.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        ey && (0, a.jsx)(V.WithOffline, { fallback: (0, a.jsx)($.N, { onClick: e_ }) }),
                        ek &&
                            (0, a.jsx)(V.WithOffline, {
                                fallback: (0, a.jsx)(Z.C, { onClick: eh, disabled: !(null == f ? void 0 : f.isAvailable), variant: B.I.ARTIST, onOpenMenuChange: y }),
                            }),
                        (0, a.jsx)(X.H, { disabled: !f, shareLink: eo, entityMeta: ev }),
                        eA &&
                            (0, a.jsx)(V.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, a.jsx)(V.WithOffline, {
                            fallback: (0, a.jsx)(K.D, { onClick: ea, isDisliked: null == f ? void 0 : f.isDisliked, disabled: !(null == f ? void 0 : f.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        45383: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var a = i(67174);
            let n = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                r = function (e, t) {
                    for (var i = arguments.length, r = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) r[s - 2] = arguments[s];
                    let [l] = r,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, a.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(n)) {
                        let { href: i } = (0, a.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = i;
                    }
                    return { canonical: u, languages: d };
                };
        },
        46511: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => d });
            var a = i(27794),
                n = i(53548),
                r = i(72542),
                s = i(83602),
                l = i(21424),
                o = i(95330);
            let c = (0, n.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        i = (0, l.k)(r.pE[r.cy], t),
                        n = await c(i);
                    return (e, t) => {
                        let r = null == n ? void 0 : n[e.id],
                            s = '';
                        return ((Array.isArray(r) || 'string' == typeof r) && (s = new a.S(r, i).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        46646: (e, t, i) => {
            var a = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function n(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    n = t[0];
                return i.e(t[1]).then(() => i.t(n, 19));
            }
            ((n.keys = () => Object.keys(a)), (n.id = 46646), (e.exports = n));
        },
        50385: (e) => {
            e.exports = {
                root: 'ArtistSimilarPage_root__rvTLl',
                scrollableContent: 'ArtistSimilarPage_scrollableContent__WD72A',
                container: 'ArtistSimilarPage_container__DDj5O',
                content: 'ArtistSimilarPage_content__X71xs',
                footer: 'ArtistSimilarPage_footer__FdVkO',
            };
        },
        51724: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = (e) => {
                var t, i, a, n, r, s;
                let l = null == (t = e.available) || t,
                    o = null != (i = e.disclaimers) ? i : [];
                return (
                    e.contentRestrictions &&
                        ((l = null == (r = null == (a = e.contentRestrictions) ? void 0 : a.available) || r),
                        (o = null != (s = null == (n = e.contentRestrictions) ? void 0 : n.disclaimers) ? s : [])),
                    { available: l, disclaimers: o }
                );
            };
        },
        52140: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 892));
        },
        53073: (e, t, i) => {
            'use strict';
            function a() {
                return { appId: '117328825040925' };
            }
            i.d(t, { k: () => a });
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var a = i(88800),
                n = i(4370),
                r = i(15077),
                s = i(42729);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: n.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(88800),
                n = i(84961),
                r = i(88969),
                s = i(17392),
                l = i(52300),
                o = i(19934),
                c = i(72288);
            let d = (0, n.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: n, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: n || !u.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(r.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        57297: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => r });
            var a = i(35412),
                n = i(83602);
            function r(e) {
                let { ogTitle: t, ogDescription: i, fullUrl: r, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, a.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: i,
                    url: r,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || n.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var a = i(88800);
            i(30282);
            var n = i(11006),
                r = i.n(n);
            let s = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: r().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => n });
            var a = i(97956);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: n, userRegion: r } = e;
                return 'ru' === r && t(a.z.WebNextFooterDisclaimer, 'on') ? i() : n();
            };
        },
        63512: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => s });
            var a = i(53548),
                n = i(94144),
                r = i(67174);
            let s = (e) => {
                var t;
                let { setDeeplink: i } = null != (t = (0, n.P)()) ? t : {};
                (0, a.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, r.u)('/artist/:artistId', { params: { artistId: e } });
                        null == i || i(t);
                    }
                    return () => {
                        null == i || i(null);
                    };
                }, [e, i]);
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var a = i(88800),
                n = i(96706),
                r = i(53548),
                s = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let g = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [g, p] = (0, r.useState)(!1),
                    { formatMessage: h } = (0, s.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (g) return;
                    let r = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let s = await e.toggleLike();
                    (p(!1),
                        s === l.f.OK
                            ? i((0, a.jsx)(m.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, g, h, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var a = i(88800),
                n = i(15077),
                r = i(33719);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var a = i(4086),
                n = i(41928),
                r = i(44084);
            let s = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof r.r) return e;
                        let t = s.get(e);
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
                        return (s.set(e, i), i);
                    })((0, n.N)().get(a.Zf));
        },
        72542: (e, t, i) => {
            'use strict';
            i.d(t, { Xn: () => r, cy: () => n, pE: () => a });
            let a = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                n = 'yandex',
                r = 'ru-RU';
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var a = i(88800),
                n = i(96706),
                r = i(53548),
                s = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [g, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (g) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let s = await e.togglePin();
                    (p(!1),
                        s
                            ? i((0, a.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, g, m, i]);
            };
        },
        77863: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a });
            var a = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        81685: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => n });
            var a = i(29201);
            let n = (e) => {
                var t, i;
                return e
                    ? {
                          id: Number(e.id),
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
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (i = e.isAvailable) || i, disclaimers: (0, a.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        83418: (e, t, i) => {
            'use strict';
            function a(e) {
                let { host: t, url: i } = e;
                return i || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            i.d(t, { v: () => a });
        },
        83602: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var a = i(9519),
                n = i(72542),
                r = i(21424),
                s = i(4653);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = i(1220);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = i(95330);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(n.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, r.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, r.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, i, a;
                    let n = (0, r.k)(this.config, e);
                    n !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (i = this.storage) || i.set(n), null == (a = this.changeLanguageHandler) || a.onChangeLanguage(n));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, r.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, r.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: i, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, a._)(this, 'language', void 0),
                        (0, a._)(this, 'storage', void 0),
                        (0, a._)(this, 'dictionary', void 0),
                        (0, a._)(this, 'config', void 0),
                        (0, a._)(this, 'logger', void 0),
                        (0, a._)(this, 'changeLanguageHandler', void 0),
                        (0, a._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = i),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = n.pE[n.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [d] = l(e) || [];
                    this.language = (0, r.k)(this.config, d);
                }
            }
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => T });
            var a = i(88800),
                n = i(65724),
                r = i(84961),
                s = i(2058),
                l = i(30282),
                o = i(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: a, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, a, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, a, i) },
                    };
                };
            var m = i(62293),
                g = i(99839);
            let p = (e) => e(new Date(), (0, g.m)());
            var h = i(51611),
                _ = i(72288),
                x = i(11006),
                v = i.n(x),
                f = i(17392),
                y = i(29504),
                A = i(91292);
            let k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, n.$)(v().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, n.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: v().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: n } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, a.jsx)(A.N, { target: '_blank', href: n, className: v().link, 'data-test-id': f.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, n.$)(v().root, v().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, a.jsx)(b, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(k, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, _.g)(),
                    { formatDate: n, formatMessage: r } = (0, s.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: r, language: l, tld: i.tld, year: p(n) });
                return (0, a.jsx)(k, { className: t, data: o });
            });
            let T = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: g, user: x } = (0, _.g)(),
                    { formatDate: f, formatMessage: y } = (0, s.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, h.h)(),
                    b = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: n, tld: r, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: n, userRegion: r } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, n) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, n) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, n) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, n) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, n) },
                                    g = [s, o, u];
                                return (i && 'ru' === r && g.push(l), g.push(m), g);
                            })({ formatMessage: i, isWebApplication: a, language: n, tld: r, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: i, language: n, tld: r, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: l.$3,
                        tld: g.tld,
                        language: k,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(f),
                    });
                return (0, a.jsx)(N, { className: (0, n.$)({ [v().root_withOffsetForDeeplink]: A }, i), data: b });
            });
        },
        91241: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            let a = 'ru';
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var a = i(58217);
            let n = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: n } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        93434: (e) => {
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
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n, P: () => r });
            var a = i(53548);
            let n = (0, a.createContext)(null),
                r = () => (0, a.useContext)(n);
        },
        95330: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c, X: () => o });
            var a = i(39499),
                n = i(72542);
            let r = async (e) => e.then((e) => e.default),
                s = n.pE[n.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => r(i(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => r(i(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        i = t.get(e),
                        n = t.get('ru');
                    if (i) return i();
                    if (n) return n();
                    throw new a.t('No translations for '.concat(e, ' or ru languages'));
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
        98774: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => r });
            var a = i(51724),
                n = i(20775);
            let r = (e) => {
                let { available: t, disclaimers: i } = (0, a.f)(e);
                return (0, n.x)(t, i) ? { index: !1, follow: !0 } : void 0;
            };
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 9079, 3469, 1191, 8194, 8655, 1312, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 9202, 3810, 4732, 9087, 3979,
                6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 763, 2670, 7358,
            ],
            () => e((e.s = 52140)),
        ),
            (_N_E = e.O()));
    },
]);
