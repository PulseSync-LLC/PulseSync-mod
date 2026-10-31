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
            (i.r(t), i.d(t, { default: () => K }));
            var a = i(88800),
                n = i(58390),
                r = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(88969),
                c = i(17392),
                d = i(66719),
                u = i(29504),
                m = i(32596),
                _ = i(21256),
                h = i(69630),
                g = i(91959),
                p = i(12816),
                x = i(59844),
                v = i(46422),
                f = i(44230),
                y = i(37670),
                A = i(72288),
                k = i(19998),
                b = i(86790),
                E = i(60266),
                N = i(93317),
                T = i(1698),
                C = i(81685),
                j = i(30144),
                S = i(324),
                L = i(53073),
                I = i(83418),
                O = i(46511),
                R = i(57297),
                w = i(2218),
                P = i(77863),
                D = i(45383);
            async function M(e, t) {
                var i, a, n;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, O.W)(t.locale),
                    s = r({ id: 'metadata.artist-similar-title' }, { artistName: e.artist.name }),
                    l = r({ id: 'metadata.artist-similar-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, R.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        customImage: (0, I.v)({ host: t.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, w.H)({ cardType: P.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, L.k)(),
                    appLinks: (0, S.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (n = t.fullUrl) ? n : '', host: t.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, D.S)('/artist/:artistId/similar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var U = i(27342),
                z = i(63512),
                W = i(50385),
                H = i.n(W);
            let B = (0, r.PA)((e) => {
                var t, i, r, S;
                let { artistId: L, preloadedArtist: I, preloadedSimilarArtists: O } = e,
                    { artist: R, disclaimerModalState: w } = (0, A.g)(),
                    { formatMessage: P } = (0, l.A)(),
                    { contentScrollRef: D, setContentScrollRef: W } = (0, f.g)(),
                    B = (0, v.W)(),
                    F = (0, g.S)({ artist: null == (t = R.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, z.G)(L),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = R.meta) ? void 0 : e.artist.isUnsafeLegal) && F();
                    }, [null == (i = R.meta) ? void 0 : i.artist.isUnsafeLegal, F]),
                    (0, U._)(R, L),
                    (0, s.useEffect)(
                        () => () => {
                            R.similarArtistsSubPage.reset();
                        },
                        [R],
                    ),
                    R.similarArtistsSubPage.isNotFound && (0, n.notFound)(),
                    (0, y.J)(R.similarArtistsSubPage.isResolved));
                let K = (0, s.useMemo)(() => {
                        if (R.similarArtistsSubPage.isResolved) {
                            var e;
                            return null == (e = R.similarArtistsSubPage.similarArtists)
                                ? void 0
                                : e.map((e) => (0, a.jsx)(_.a, { className: H().item, artist: e, contentLinesCount: 3 }, e.id));
                        }
                        let t = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.similar-artists' }) });
                        return (0, a.jsx)(T.e, { isActive: !0, itemClassName: H().item, round: !0, centered: !0, 'aria-label': t });
                    }, [
                        R.similarArtistsSubPage.loadingState,
                        R.similarArtistsSubPage.similarArtists,
                        P,
                        null == (r = R.similarArtistsSubPage.similarArtists) ? void 0 : r.length,
                    ]),
                    Y = [];
                return (R.similarArtistsSubPage.isNeededToLoad && Y.push(R.similarArtistsSubPage.getData({ artistId: L, preloadedSimilarArtists: O })),
                R.infoLoadingState.isNeededToLoad && Y.push(R.getInfo({ artistId: L, preloadedArtist: I })),
                ((e) => {
                    var t;
                    let { fullscreenVideoPlayer: i } = (0, A.g)(),
                        a = null == e || null == (t = e.meta) ? void 0 : t.artist,
                        n = null == e ? void 0 : e.infoLoadingState.isLoading,
                        r = null == e ? void 0 : e.infoLoadingState.isRejected,
                        l = (0, s.useCallback)((e) => (r ? {} : a && !n ? M({ artist: (0, C.E)(a) }, e) : void 0), [a, n, r]);
                    (0, j.C)(i.modal.isOpened ? null : l);
                })(R),
                Y.length && (0, s.use)(Promise.allSettled(Y)),
                null == (S = R.meta) ? void 0 : S.artist.isLegalRejected)
                    ? (0, a.jsx)(k.M, { modalState: w })
                    : R.isInfoSomethingWentWrong
                      ? (0, a.jsx)(m.SomethingWentWrong, {})
                      : (0, a.jsx)(x.n, {
                            pageId: p._Q.ARTIST_SIMILAR,
                            pageEntityId: L,
                            children: (0, a.jsx)(h.h, {
                                scrollElement: D,
                                outerTitle: P({ id: 'page.artist-similar-header' }, { artistName: R.commonSubPage.artistName }),
                                children: (0, a.jsxs)('div', {
                                    className: H().root,
                                    'data-test-id': c.Xk.artist.ARTIST_SIMILAR_PAGE,
                                    children: [
                                        (0, a.jsx)(N.Y, {
                                            variant: N.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: B.canBack,
                                            children: (0, a.jsx)(u.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, a.jsx)(o.A, { id: 'page.artist-similar-header', values: { artistName: R.commonSubPage.artistName } }),
                                            }),
                                        }),
                                        (0, a.jsxs)(d.N, {
                                            className: H().scrollableContent,
                                            containerClassName: H().container,
                                            ref: W,
                                            children: [
                                                (0, a.jsx)('div', { className: H().content, 'aria-labelledby': 'collection-artists-header', tabIndex: 0, children: K }),
                                                (0, a.jsx)(E.A, { children: (0, a.jsx)(b.w, { className: H().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var F = i(21438);
            let K = () => {
                let e = (0, n.useSearchParams)().get('artistId');
                return ((e && (0, F.L)(e)) || (0, n.notFound)(), (0, a.jsx)(B, { artistId: e }));
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
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var a = i(72288),
                n = i(97956);
            let r = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: s,
                } = (0, a.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = s.getExperiment(n.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
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
        9590: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
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
                _ = i(41928),
                h = i(46422),
                g = i(4370),
                p = i(78940),
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
                        E = null != r ? r : null == i ? void 0 : i.modalData,
                        N = (0, h.W)(),
                        T = (0, p.Z)(g.Z.main.href),
                        C = (0, _.N)().get(m.U2),
                        j = (0, c.c)(() => {
                            if (y) return y();
                            (N.canBack && N.back(), T());
                        }),
                        S = (null == E || null == (t = E.details) ? void 0 : t.url) && E.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == i || i.setConfirmUnsafeDisclaimer(!0);
                            let t = C.get(v.c.ExEx),
                                a = new Date(),
                                n = a.setMinutes(a.getMinutes() + 15),
                                r =
                                    null != (e = null == i ? void 0 : i.entityKey)
                                        ? e
                                        : ''.concat(null == i ? void 0 : i.entityType, '_').concat(null == i ? void 0 : i.entityId);
                            (t ? C.set(v.c.ExEx, [...t, r], { expires: new Date(n) }) : C.set(v.c.ExEx, [r], { expires: new Date(n) }),
                                null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerConfirmHandler) && i.onDisclaimerConfirmHandler());
                        }),
                        I = (0, c.c)(() => {
                            ((null == i ? void 0 : i.shouldHistoryBack) ? (null == y || y(), N.canBack && N.back(), T()) : null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerRejectHandler) && i.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == i || i.reset();
                        },
                        [i],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (E) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, n.$)(A().title, A().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: E.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: E.description,
                                        }),
                                        S &&
                                            (0, a.jsx)(f.N, {
                                                href: null == (e = E.details) ? void 0 : e.url,
                                                className: A().link,
                                                children: (0, a.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = E.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [E, S]),
                        R = (0, s.useMemo)(
                            () =>
                                (null == i ? void 0 : i.type) === x.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, a.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: L,
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
                                              onClick: j,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == i ? void 0 : i.entityType, null == i ? void 0 : i.type, j, I],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, n.$)(A().root, b),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: A().container, children: [O, R] }),
                    });
                });
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => H });
            var a = i(88800),
                n = i(65724),
                r = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(18593),
                u = i(29993),
                m = i(79070),
                _ = i(29832),
                h = i(52300),
                g = i(7555),
                p = i(29504),
                x = i(91959),
                v = i(64207),
                f = i(77455),
                y = i(5407),
                A = i(96527),
                k = i(76675),
                b = i(25557),
                E = i(28830),
                N = i(84384),
                T = i(4795),
                C = i(78940),
                j = i(55693),
                S = i(39079),
                L = i(72288),
                I = i(81877),
                O = i(49738),
                R = i(91292),
                w = i(56862),
                P = i(16704),
                D = i(56446),
                M = i(36207),
                U = i(43161),
                z = i(93434),
                W = i.n(z);
            let H = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: z, topTitleElement: H, bottomTitleElement: B } = e,
                    { ref: F, intersectionPropertyId: K } = (0, E.n)(),
                    {
                        trailer: Y,
                        user: G,
                        paywall: { modal: $ },
                    } = (0, L.g)(),
                    { from: X, utmLink: Z } = (0, N.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: V } = (0, l.A)(),
                    [J, q] = (0, s.useState)(!1),
                    [Q, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ea, sendNavigateSearchFeedback: en, sendPlaySearchFeedback: er } = (0, j.z)(),
                    es = (0, A.N)(),
                    el = (0, k.b)(),
                    eo = (0, v.K)(t),
                    ec = (0, f.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    eh = (0, C.Z)(t.url),
                    [eg, ep] = (0, s.useState)(!1),
                    ex = (0, b.F)(),
                    ev = (0, y.P)(),
                    ef = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        (Y.openArtistTrailer(t.id), ex(o.DomainObjectType.Artist, t.id));
                    }),
                    ey = (0, s.useMemo)(() => {
                        let e = V({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? V({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, V]),
                    { isPlaying: eA, togglePlay: ek } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: Z }, loadContextMeta: !0 },
                    }),
                    eb = (0, x.S)({ artist: t, callback: eh }),
                    eE = (0, x.S)({ artist: t, callback: ek }),
                    eN = (0, u.c)((e) => {
                        (null == en || en(), es({ to: o.AppScreen.ArtistScreen }), eb(e));
                    }),
                    eT = (0, T.N)(),
                    eC = (0, u.c)(() => {
                        if (!ev()) {
                            if (eT) return void $.open();
                            (J || eA || (q(!0), null == er || er()), eE(), el(!eA));
                        }
                    }),
                    ej = (0, u.c)(() => {
                        (Q || e_ || (ee(!0), null == ea || ea()), eo());
                    }),
                    eS = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, u.c)((e) => {
                        (ei(e), ep(e));
                    }),
                    eI = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                U.g,
                                {
                                    artist: t,
                                    onOpenChange: eL,
                                    open: et,
                                    onClick: eS,
                                    className: (0, n.$)(W().menuButton, W().control),
                                    size: 's',
                                    icon: (0, a.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eS, eL, et],
                    ),
                    eO = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                M.n,
                                {
                                    children: (0, a.jsx)(D.k, {
                                        className: (0, n.$)(W().trailerButton, W().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ef,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ef]),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                w.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, n.$)(W().pinButton, W().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    ew = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                _.hg,
                                {
                                    isVisible: et || eg,
                                    className: W().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, n.$)(W().playButton, W().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eC,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        O.c,
                                        {
                                            className: (0, n.$)(W().likeButton, W().control),
                                            isLiked: e_,
                                            onClick: ej,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !G.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eI,
                                    pinControl: eR,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eP = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(g.t, {
                                className: W().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: W().coverBlock,
                                    onClick: eN,
                                    children: [
                                        (0, a.jsx)(I.B, {
                                            className: W().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ey,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        ew,
                                    ],
                                }),
                            }),
                        [eN, em, ey, t.isAvailable, ew],
                    );
                return (0, a.jsx)(_.MN, {
                    ref: F,
                    className: (0, n.$)(W().root, i),
                    textPosition: 'center',
                    'aria-label': ey,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            H,
                            (0, a.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(R.N, {
                                    className: W().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ey,
                                    onClick: eN,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            B,
                        ],
                    }),
                    srTitle: (0, a.jsx)(R.N, { className: W().srTitleLink, href: t.url, onClick: eN, children: ey }),
                    'data-intersection-property-id': K,
                    contentLinesCount: z,
                    view: eP,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
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
            i.d(t, { C: () => h });
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
                _ = (e) => {
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
                h = (e) => {
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
                                    s() && _({ ...t, title: i });
                                } catch (e) {
                                    if (!s()) return;
                                    i.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(n);
                                        s() && _(e);
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
            i.d(t, { SomethingWentWrong: () => I });
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
                m = i(78793),
                _ = i(92716),
                h = i(99984),
                g = i(90780),
                p = i(65523),
                x = i(14518),
                v = i(44230),
                f = i(4370),
                y = i(72288),
                A = i(97956),
                k = i(56248),
                b = i(90688),
                E = i(78940);
            let N = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var T = i(96856),
                C = i.n(T);
            let j = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { slam: s } = (0, y.g)(),
                    { contentRef: l } = (0, v.g)(),
                    d = (0, E.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(C().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(k.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(C().navigation, { [C().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, a.jsxs)('div', {
                            className: (0, n.$)(C().content, { [C().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(b._V, { className: C().image, src: N.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: C().message,
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            className: C().text,
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
                                        className: C().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.HL, {
                                            className: C().buttonText,
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
            var S = i(9184),
                L = i.n(S);
            let I = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { formatMessage: b } = (0, l.A)(),
                    E = (0, s.useContext)(y.P),
                    N = null == E ? void 0 : E.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    T = b(N ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, g.st)(),
                        { hash: i } = (0, g.gf)(),
                        { pageId: a } = (0, x.$)(),
                        n = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !a) return;
                        let r = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: a,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, h.z5)(t.evgenInstance, r);
                    }, [t, e, i, a, n]);
                })(T);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, g.st)(),
                            { hash: t } = (0, g.gf)(),
                            { pageId: i } = (0, x.$)(),
                            a = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let n = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, h.bv)(e.evgenInstance, n);
                            }, [e, t, i, a]),
                        };
                    })(),
                    S = (0, s.useCallback)(() => {
                        (C(), (window.location.href = f.Z.main.href));
                    }, [C]),
                    { contentRef: I } = (0, v.g)();
                return N
                    ? (0, a.jsx)(j, { className: t, withBackwardControl: i, onBack: r })
                    : (0, a.jsxs)('div', {
                          className: (0, n.$)(L().root, t),
                          children: [
                              i &&
                                  (0, a.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(L().navigation, { [L().navigation_desktop]: !I }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, n.$)(L().content, { [L().content_shrink]: !i }),
                                  children: [
                                      (0, a.jsx)(d.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(u.DZ, { className: (0, n.$)(L().title, L().important), variant: 'h3', size: 'xs', children: T }),
                                      (0, a.jsxs)(u.HL, {
                                          className: (0, n.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: S,
                                          className: L().button,
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
                    // for PulseSync: BEGIN substituted-track enum extension
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track enum extension
                })(a || (a = {})));
            let n = new Set(Object.values(a)),
                r = (e) => 'string' == typeof e && n.has(e);
        },
        36207: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var a = i(88800),
                n = i(2058),
                r = i(17610);
            let s = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, n.A)();
                return (0, a.jsx)(r.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        37770: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var a = i(88800),
                n = i(65724),
                r = i(17392),
                s = i(19994),
                l = i(9590),
                o = i.n(l);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: l,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: h,
                    radius: g = 'l',
                } = e;
                return (0, a.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(o().root, i),
                    'data-test-id': r.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        h && (0, a.jsx)(s.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, a.jsx)(s.W, { isActive: t, className: (0, n.$)(o().cover, l, { [o().cover_round]: c, [o().cover_withSubcover]: h }), radius: g }),
                        m &&
                            (0, a.jsx)('div', {
                                className: (0, n.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, a.jsx)(s.W, { isActive: t, className: (0, n.$)(o().title, { [o().title_withSubcover]: h }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var a = i(88800),
                n = i(84961),
                r = i(2058),
                s = i(92716),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                _ = i(53548),
                h = i(79390),
                g = i(29595),
                p = i(74965),
                x = i(72288),
                v = i(66943),
                f = i(7555),
                y = i(73170),
                A = i(29504),
                k = i(59304),
                b = i(81877),
                E = i(85074),
                N = i.n(E);
            let T = (e) => {
                let { coverUri: t, title: i, isDisliked: n, closeToast: s } = e,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(k.$, {
                    closeToast: s,
                    message: (0, a.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, a.jsx)(y.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(f.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, a.jsx)(b.B, { className: N().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(A.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var C = i(64207),
                j = i(77455),
                S = i(48749),
                L = i(22505),
                I = i(5407),
                O = i(64284),
                R = i(12816),
                w = i(25557),
                P = i(84384),
                D = i(9618),
                M = i(95210),
                U = i(47964),
                z = i(46936),
                W = i(97956),
                H = i(98953),
                B = i(32721),
                F = i(18130),
                K = i(56117),
                Y = i(93091),
                G = i(27817),
                $ = i(74064),
                X = i(15425),
                Z = i(81066),
                V = i(64546);
            let J = (0, n.PA)((e) => {
                var t, i, n;
                let { artist: f, onOpenChange: y, open: A, ...k } = e,
                    { shouldShowBuySubscriptionModal: b, showBuySubscriptionModal: E } = (0, D.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: J },
                        trailer: q,
                        user: Q,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, j.A)(f),
                    ei = (0, C.K)(f),
                    ea = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, p.l)(),
                            [n, s] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(v.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: g.u.ERROR });
                            if (n) return;
                            let r = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === h.f.OK
                                    ? i((0, a.jsx)(T, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: g.u.INFO })
                                    : i((0, a.jsx)(v.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: g.u.ERROR }));
                        });
                    })(f),
                    en = (0, w.F)(),
                    er = ''.concat(O.U.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: es } = (0, r.A)(),
                    { utmLink: el } = (0, P.f)({ blockId: O.U.ARTIST, contextType: o.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: eo, pathname: ec } = (0, F.b)('/artist/:artistId', { params: { artistId: null != (i = null == f ? void 0 : f.id) ? i : '' } }),
                    ed = (0, S.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, U.B)({
                        seeds: null != (n = null == f ? void 0 : f.seeds) ? n : [],
                        pageIdForFrom: R._Q.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    e_ = (0, I.P)(),
                    eh = es((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eg = (0, c.c)(() => {
                        if (b && Q.isAuthorized) return void E();
                        eu || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!e_()) {
                            if (b) return void E();
                            (null == f ? void 0 : f.id) && (q.setUtmLink(el), q.openArtistTrailer(f.id), en(s.DomainObjectType.Artist, f.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        J.open(null == f ? void 0 : f.id);
                    });
                (0, M.N)(A);
                let ev = { variant: H.Y.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: ec },
                    ef = ee.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    ey = null == f || null == (t = f.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(W.z.WebNextArtistInfo, 'on'),
                    ek = !ee.checkExperiment(W.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: y,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...k,
                    children: [
                        ef && (0, a.jsx)(V.WithOffline, { fallback: (0, a.jsx)(L.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !N && (0, a.jsx)(V.WithOffline, { fallback: (0, a.jsx)(G.L, { onClick: et, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, a.jsx)(V.WithOffline, {
                            fallback: (0, a.jsx)(Y.T, {
                                onClick: ei,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !Q.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        ey && (0, a.jsx)(V.WithOffline, { fallback: (0, a.jsx)(X.N, { onClick: ep }) }),
                        ek &&
                            (0, a.jsx)(V.WithOffline, {
                                fallback: (0, a.jsx)(Z.C, { onClick: eg, disabled: !(null == f ? void 0 : f.isAvailable), variant: B.I.ARTIST, onOpenMenuChange: y }),
                            }),
                        (0, a.jsx)($.H, { disabled: !f, shareLink: eo, entityMeta: ev }),
                        eA &&
                            (0, a.jsx)(V.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
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
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var a = i(88800),
                n = i(53548),
                r = i(2058),
                s = i(17392),
                l = i(96817),
                o = i(52300),
                c = i(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: n,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: h,
                            className: g,
                            forwardRef: p,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: f } = (0, r.A)(),
                        y = f({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(l.$, {
                        className: g,
                        color: 'secondary',
                        radius: d,
                        size: n,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: _,
                        ref: p,
                        icon: (0, a.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, n.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
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
            i.d(t, { K: () => _ });
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
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, h] = (0, r.useState)(!1),
                    { formatMessage: g } = (0, s.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let r = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                    h(!0);
                    let s = await e.toggleLike();
                    (h(!1),
                        s === l.f.OK
                            ? i((0, a.jsx)(m.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, g, i]);
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
                    [_, h] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    h(!0);
                    let s = await e.togglePin();
                    (h(!1),
                        s
                            ? i((0, a.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
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
            i.d(t, { w: () => N });
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
                _ = i(99839);
            let h = (e) => e(new Date(), (0, _.m)());
            var g = i(51611),
                p = i(72288),
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
                E = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, n.$)(v().root, v().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, a.jsx)(b, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(k, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, p.g)(),
                    { formatDate: n, formatMessage: r } = (0, s.A)(),
                    { language: l } = (0, g.h)(),
                    o = u({ formatMessage: r, language: l, tld: i.tld, year: h(n) });
                return (0, a.jsx)(k, { className: t, data: o });
            });
            let N = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: _, user: x } = (0, p.g)(),
                    { formatDate: f, formatMessage: y } = (0, s.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, g.h)(),
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
                                    _ = [s, o, u];
                                return (i && 'ru' === r && _.push(l), _.push(m), _);
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
                        tld: _.tld,
                        language: k,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: h(f),
                    });
                return (0, a.jsx)(E, { className: (0, n.$)({ [v().root_withOffsetForDeeplink]: A }, i), data: b });
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
        98270: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 892));
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
                8752, 7435, 5108, 127, 1191, 1931, 7617, 3637, 1312, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 9202, 4732, 1195, 1598, 6281,
                1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 763, 2670, 7358,
            ],
            () => e((e.s = 98270)),
        ),
            (_N_E = e.O()));
    },
]);
