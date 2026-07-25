(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9846],
    {
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        3785: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { M: () => a }),
                (function (e) {
                    (e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'),
                        (e.SUBSTITUTED_ICON = 'substitutedIcon');
                })(a || (a = {}));
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var a = i(32290),
                n = i(92708),
                r = i(55178),
                s = i(60900),
                l = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(20472),
                g = i(97647),
                h = i(97755);
            let _ = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, a.jsx)(h.O, {
                        closeToast: i,
                        entityVariant: g.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: m.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                p = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, g] = (0, r.useState)(!1),
                        { formatMessage: h } = (0, s.A)();
                    return (0, r.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let r = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                        g(!0);
                        let s = await e.toggleLike();
                        g(!1),
                            s === l.f.OK
                                ? i((0, a.jsx)(_, { artist: r }), { containerId: o.u.INFO })
                                : i((0, a.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e, t.isAuthorized, m, h, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => B });
            var a = i(32290),
                n = i(63618),
                r = i(96103),
                s = i(55178),
                l = i(60900),
                o = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                g = i(14934),
                h = i(82586),
                _ = i(86269),
                p = i(71926),
                v = i(91853),
                f = i(5942),
                x = i(70390),
                A = i(71735),
                y = i(47745),
                k = i(2969),
                E = i(54391),
                N = i(23352),
                C = i(72396),
                j = i(5537),
                S = i(84062),
                T = i(28999),
                L = i(90169),
                b = i(57594),
                I = i(11323),
                O = i(92744),
                R = i(61258),
                w = i(10180),
                D = i(90326),
                P = i(29268),
                M = i(34925),
                U = i(80528),
                z = i(42048),
                W = i.n(z);
            let B = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: z, topTitleElement: B, bottomTitleElement: H } = e,
                    { ref: F, intersectionPropertyId: K } = (0, N.n)(),
                    {
                        trailer: G,
                        user: X,
                        paywall: { modal: Y },
                    } = (0, b.g)(),
                    { from: $, utmLink: Z } = (0, C.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: J } = (0, l.A)(),
                    [V, q] = (0, s.useState)(!1),
                    [Q, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ea, sendNavigateSearchFeedback: en, sendPlaySearchFeedback: er } = (0, T.z)(),
                    es = (0, y.N)(),
                    el = (0, k.b)(),
                    eo = (0, f.K)(t),
                    ec = (0, x.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: eg } = t,
                    eh = (0, S.Z)(t.url),
                    [e_, ep] = (0, s.useState)(!1),
                    ev = (0, E.F)(),
                    ef = (0, A.P)(),
                    ex = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ef())) return void e.preventDefault();
                        G.openArtistTrailer(t.id), ev(o.ky.Artist, t.id);
                    }),
                    eA = (0, s.useMemo)(() => {
                        let e = J({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = eg ? J({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, eg, J]),
                    { isPlaying: ey, togglePlay: ek } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: $, utmLink: Z }, loadContextMeta: !0 },
                    }),
                    eE = (0, v.S)({ artist: t, callback: eh }),
                    eN = (0, v.S)({ artist: t, callback: ek }),
                    eC = (0, u.c)((e) => {
                        null == en || en(), es({ to: o.QT.ArtistScreen }), eE(e);
                    }),
                    ej = (0, j.N)(),
                    eS = (0, u.c)(() => {
                        if (!ef()) {
                            if (ej) return void Y.open();
                            V || ey || (q(!0), null == er || er()), eN(), el(!ey);
                        }
                    }),
                    eT = (0, u.c)(() => {
                        Q || eg || (ee(!0), null == ea || ea()), eo();
                    }),
                    eL = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eb = (0, u.c)((e) => {
                        ei(e), ep(e);
                    }),
                    eI = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                U.g,
                                {
                                    artist: t,
                                    onOpenChange: eb,
                                    open: et,
                                    onClick: eL,
                                    className: (0, n.$)(W().menuButton, W().control),
                                    size: 's',
                                    icon: (0, a.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eL, eb, et],
                    ),
                    eO = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                M.n,
                                {
                                    children: (0, a.jsx)(P.k, {
                                        className: (0, n.$)(W().trailerButton, W().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ex,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ex]),
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
                                g.hg,
                                {
                                    isVisible: et || e_,
                                    className: W().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        D.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, n.$)(W().playButton, W().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eS,
                                            isPlaying: ey,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        O.c,
                                        {
                                            className: (0, n.$)(W().likeButton, W().control),
                                            isLiked: eg,
                                            onClick: eT,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !X.isAuthorized,
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
                    eD = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(_.t, {
                                className: W().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: W().coverBlock,
                                    onClick: eC,
                                    children: [
                                        (0, a.jsx)(I.B, {
                                            className: W().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eA,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        ew,
                                    ],
                                }),
                            }),
                        [eC, em, eA, t.isAvailable, ew],
                    );
                return (0, a.jsx)(g.MN, {
                    ref: F,
                    className: (0, n.$)(W().root, i),
                    textPosition: 'center',
                    'aria-label': eA,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            B,
                            (0, a.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, a.jsx)(R.N, {
                                    className: W().titleLink,
                                    href: t.url,
                                    'aria-label': eA,
                                    onClick: eC,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            H,
                        ],
                    }),
                    srTitle: (0, a.jsx)(R.N, { href: t.url, onClick: eC, children: eA }),
                    'data-intersection-property-id': K,
                    contentLinesCount: z,
                    view: eD,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
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
            (n.keys = () => Object.keys(a)), (n.id = 12526), (e.exports = n);
        },
        14190: (e, t, i) => {
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
        14459: (e, t, i) => {
            'use strict';
            function a() {
                return { appId: '117328825040925' };
            }
            i.d(t, { k: () => a });
        },
        14858: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var a = i(60900),
                n = i(57594),
                r = i(79406);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, a.A)(),
                    { user: i, experiments: s } = (0, n.g)(),
                    l = 'ru' === i.account.data.userSessionRegionIso && s.checkExperiment(r.z.WebNextFooterDisclaimer, 'on'),
                    o = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return l ? t({ id: 'footer.disclaimer-content' }) : o;
            };
        },
        17024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            let a = /^(0|[1-9]\d*)$/;
            function n(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        18870: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { $: () => a }),
                (function (e) {
                    (e.RU = 'ru'),
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
                        (e.AR = 'ar');
                })(a || (a = {}));
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var a = i(36477);
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
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
            };
        },
        22556: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => n });
            let a = (e, t) => {
                    let i = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (i) return i;
                    let a = window.document.createElement('meta');
                    return a.setAttribute(e, t), a;
                },
                n = (e) => {
                    let { title: t, description: i, openGraph: n } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof i)) {
                        let e = a('name', 'description');
                        e.setAttribute('content', i), window.document.head.appendChild(e);
                    }
                    let r = '';
                    if (n) {
                        let e = 'string' == typeof n.title ? n.title : '',
                            t = 'string' == typeof n.description ? n.description : '',
                            i = Array.isArray(n.images) ? n.images[0] : null;
                        r = i && 'object' == typeof i && 'url' in i ? String(i.url) : '';
                        let s = a('property', 'og:title'),
                            l = a('property', 'og:description'),
                            o = a('property', 'og:image');
                        s.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', r),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o);
                    }
                };
        },
        22644: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => n });
            var a = i(55178);
            let n = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        23090: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 72404));
        },
        24535: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => r });
            var a = i(80451),
                n = i(73422);
            function r(e) {
                let { ogTitle: t, ogDescription: i, fullUrl: r, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, a.createAvatarUrl)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
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
        26365: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var a = i(36477);
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
        28724: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => E });
            var a = i(32290),
                n = i(63618),
                r = i(96103),
                s = i(55178),
                l = i(39407),
                o = i(21732),
                c = i(91027),
                d = i(63423),
                u = i(71926),
                m = i(70204),
                g = i(34186),
                h = i(83808),
                _ = i(20472),
                p = i(84062),
                v = i(85017),
                f = i(19379),
                x = i(61258),
                A = i(76768),
                y = i.n(A);
            let k = {
                    [v.n.ALBUM]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [v.n.PODCAST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [v.n.ARTIST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [v.n.TRACK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [v.n.AUDIOBOOK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [v.n.CLIP]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                E = (0, r.PA)((e) => {
                    var t;
                    let { modalState: i, data: r, onClose: A, className: E } = e,
                        N = null != r ? r : null == i ? void 0 : i.modalData,
                        C = (0, h.W)(),
                        j = (0, p.Z)(_.Z.main.href),
                        S = (0, g.N)().get(m.U2),
                        T = (0, c.c)(() => {
                            if (A) return A();
                            C.canBack && C.back(), j();
                        }),
                        L = (null == N || null == (t = N.details) ? void 0 : t.url) && N.details.text,
                        b = (0, c.c)(() => {
                            var e;
                            null == i || i.setConfirmUnsafeDisclaimer(!0);
                            let t = S.get(f.c.ExEx),
                                a = new Date(),
                                n = a.setMinutes(a.getMinutes() + 15),
                                r =
                                    null != (e = null == i ? void 0 : i.entityKey)
                                        ? e
                                        : ''.concat(null == i ? void 0 : i.entityType, '_').concat(null == i ? void 0 : i.entityId);
                            t ? S.set(f.c.ExEx, [...t, r], { expires: new Date(n) }) : S.set(f.c.ExEx, [r], { expires: new Date(n) }),
                                null == A || A(),
                                (null == i ? void 0 : i.onDisclaimerConfirmHandler) && i.onDisclaimerConfirmHandler();
                        }),
                        I = (0, c.c)(() => {
                            (null == i ? void 0 : i.shouldHistoryBack) ? (null == A || A(), C.canBack && C.back(), j()) : null == A || A(),
                                (null == i ? void 0 : i.onDisclaimerRejectHandler) && i.onDisclaimerRejectHandler();
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == i || i.reset();
                        },
                        [i],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (N) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, n.$)(y().title, y().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: N.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: y().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: N.description,
                                        }),
                                        L &&
                                            (0, a.jsx)(x.N, {
                                                href: null == (e = N.details) ? void 0 : e.url,
                                                className: y().link,
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
                                (null == i ? void 0 : i.type) === v.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: y().buttons,
                                          children: [
                                              (0, a.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: b,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: i.entityType && k[i.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)('div', {
                                          className: y().buttons,
                                          children: (0, a.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: T,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: y().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [b, null == i ? void 0 : i.entityType, null == i ? void 0 : i.type, T, I],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, n.$)(y().root, E),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: y().container, children: [O, R] }),
                    });
                });
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var a = i(32290),
                n = i(55178),
                r = i(60900),
                s = i(21732),
                l = i(63423),
                o = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: n,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: g,
                            iconClassName: h,
                            className: _,
                            forwardRef: p,
                            style: v,
                            children: f,
                        } = e,
                        { formatMessage: x } = (0, r.A)(),
                        A = x({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(l.$, {
                        className: _,
                        color: 'secondary',
                        radius: d,
                        size: n,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: g,
                        ref: p,
                        icon: (0, a.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: f,
                    });
                },
                u = (0, n.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        30310: (e) => {
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
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n, P: () => r });
            var a = i(55178);
            let n = (0, a.createContext)(null),
                r = () => (0, a.useContext)(n);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var a = i(32290),
                n = i(77088),
                r = i.n(n);
            let s = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: r().empty });
            };
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var a = i(32290),
                n = i(60900),
                r = i(70280);
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
        38223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(32290),
                n = i(96103),
                r = i(39407),
                s = i(21732),
                l = i(82586),
                o = i(19740),
                c = i(57594);
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
        42048: (e) => {
            e.exports = {
                root: 'ArtistCard_root__x67BK',
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
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
        42125: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => d });
            var a = i(3266),
                n = i(55178),
                r = i(14190),
                s = i(73422),
                l = i(84570),
                o = i(64552);
            let c = (0, n.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        i = (0, l.k)(r.pE[r.cy], t),
                        n = await c(i);
                    return (e, t) => {
                        let r = null == n ? void 0 : n[e.id],
                            s = '';
                        return (Array.isArray(r) || 'string' == typeof r) && (s = new a.S(r, i).format(t)), Array.isArray(s) ? s.join('') : s;
                    };
                };
        },
        44242: (e, t, i) => {
            'use strict';
            function a(e) {
                return { ios: { app_name: e.appName, app_store_id: '520797969', url: 'yandexmusic:/'.concat(e.additional.url) }, web: { url: e.additional.fullUrl } };
            }
            i.d(t, { X: () => a });
        },
        46646: (e, t, i) => {
            var a = { './en.json': [61263, 1263], './kk.json': [62837, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
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
            (n.keys = () => Object.keys(a)), (n.id = 46646), (e.exports = n);
        },
        47216: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            var a = i(94821);
            let n = '@yandexmusic';
            function r(e) {
                return e.cardType === a.W.SUMMARY_LARGE_IMAGE
                    ? { card: a.W.SUMMARY_LARGE_IMAGE, site: n, title: e.title, description: e.description }
                    : { card: a.W.APP, site: n, title: e.title, app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: 'yandexmusic:/'.concat(e.url) } } };
            }
        },
        50308: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var a = i(32290),
                n = i(89020);
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
        51714: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => s });
            var a = i(55178),
                n = i(31010),
                r = i(36477);
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
        57815: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => n });
            var a = i(87151);
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
        58054: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => y });
            var a = i(32290),
                n = i(63618),
                r = i(96103),
                s = i(60900),
                l = i(39407),
                o = i(21732),
                c = i(71926),
                d = i(14858),
                u = i(8626),
                m = i(31010),
                g = i(61945),
                h = i(57594),
                _ = (function (e) {
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
            let p = (e, t, i) => {
                switch (e) {
                    case _.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case _.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                    case _.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case _.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case _.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case _.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                    case _.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                }
            };
            var v = i(61258),
                f = i(77088),
                x = i.n(f);
            let A = (0, r.PA)((e) => {
                    let { className: t } = e,
                        { location: i } = (0, h.g)(),
                        { formatDate: r } = (0, s.A)(),
                        { language: d } = (0, g.h)();
                    return (0, a.jsxs)('div', {
                        className: (0, n.$)(x().copyrights, t),
                        'data-test-id': o.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    r(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, a.jsx)(v.N, {
                                        target: '_blank',
                                        href: p(_.YANDEX, i.tld, d),
                                        className: (0, n.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': o.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, a.jsx)(l.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(v.N, {
                                target: '_blank',
                                href: p(_.YANDEX_PROJECTS, i.tld, d),
                                className: x().copyrightLink,
                                'data-test-id': o.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, a.jsx)(l.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                y = (0, r.PA)((e) => {
                    var t;
                    let { className: i } = e,
                        { user: r, location: s } = (0, h.g)(),
                        { isEnabled: u } = null != (t = (0, m.P)()) ? t : {},
                        { language: f } = (0, g.h)(),
                        y = (0, d.w)(!0),
                        k = ((e) => {
                            let { platform: t, tld: i, language: n, userRegion: r } = e,
                                s = { title: (0, a.jsx)(l.A, { id: 'footer.links-copyright-holders' }), url: p(_.COPYRIGHT_HOLDER, i, n) },
                                o = { title: (0, a.jsx)(l.A, { id: 'footer.links-privacy-policy' }), url: p(_.PRIVACY_POLICY, i, n) },
                                c = { title: (0, a.jsx)(l.A, { id: 'footer.links-terms' }), url: p(_.AGREEMENT, i, n) },
                                d = { title: (0, a.jsx)(l.A, { id: 'footer.links-recommendation-rules' }), url: p(_.RECOMMENDATION_RULES, i, n) },
                                u = { title: (0, a.jsx)(l.A, { id: 'footer.links-help' }), url: p(_.HELP, i, n) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [s, c, d];
                                    return 'ru' === r && e.push(o), e.push(u), e;
                                }
                                case 'desktop':
                                    return [s, c, d, u];
                            }
                        })({ platform: 'desktop', tld: s.tld, language: f, userRegion: r.account.data.userSessionRegionIso });
                    return (0, a.jsxs)('footer', {
                        className: (0, n.$)(x().root, x().important, { [x().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': o.S7.FOOTER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: x().links,
                                children: [
                                    (0, a.jsx)('ol', {
                                        className: x().list,
                                        'data-test-id': o.S7.FOOTER_LINKS_LIST,
                                        children: k.map((e) => {
                                            let { title: t, url: i } = e;
                                            return (0, a.jsx)(
                                                'li',
                                                {
                                                    className: x().item,
                                                    children: (0, a.jsx)(v.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: x().link,
                                                        'data-test-id': o.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, a.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: x().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: y },
                                        'data-test-id': o.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(A, {}),
                        ],
                    });
                });
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => y });
            var a = i(32290),
                n = i(63618),
                r = i(96103),
                s = i(55178),
                l = i(60900),
                o = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(16172),
                g = i(52068),
                h = i(62376),
                _ = i(37240),
                p = i(83920),
                v = i(20472),
                f = i(12894),
                x = i(30310),
                A = i.n(x);
            let y = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, l.A)(),
                    x = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, g.st)(),
                        { hash: i } = (0, g.gf)(),
                        { pageId: a } = (0, _.$)(),
                        n = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !a) return;
                        let r = (0, m.Fx)({
                            params: {
                                entityType: m.LA.Error,
                                entityId: m.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: a,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, m.z5)(t.evgenInstance, r);
                    }, [t, e, i, a, n]);
                })(x);
                let { sendRefreshEvent: y } = (function () {
                        let e = (0, g.st)(),
                            { hash: t } = (0, g.gf)(),
                            { pageId: i } = (0, _.$)(),
                            a = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let n = (0, m.Fx)({
                                    params: {
                                        actionType: m.X2.Refresh,
                                        userInteractionType: m.gi.Tap,
                                        entityType: m.LA.Error,
                                        entityId: m.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, m.bv)(e.evgenInstance, n);
                            }, [e, t, i, a]),
                        };
                    })(),
                    k = (0, s.useCallback)(() => {
                        y(), (window.location.href = v.Z.main.href);
                    }, [y]),
                    { contentRef: E } = (0, p.g)();
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(A().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(f.L, { withBackwardFallback: '/', className: (0, n.$)(A().navigation, { [A().navigation_desktop]: !E }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, n.$)(A().content, { [A().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, a.jsx)(u.DZ, { className: (0, n.$)(A().title, A().important), variant: 'h3', size: 'xs', children: x }),
                                (0, a.jsxs)(u.HL, {
                                    className: (0, n.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, a.jsx)(c.$, {
                                    onClick: k,
                                    className: A().button,
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
        64552: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c, X: () => o });
            var a = i(29222),
                n = i(14190);
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
        65024: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => n });
            let a = new Set(Object.values(i(3785).M)),
                n = (e) => 'string' == typeof e && a.has(e);
        },
        70390: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => h });
            var a = i(32290),
                n = i(92708),
                r = i(55178),
                s = i(60900),
                l = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let g = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, a.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                h = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [m, h] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let r = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                        h(!0);
                        let s = await e.togglePin();
                        h(!1),
                            s
                                ? i((0, a.jsx)(g, { artist: r }), { containerId: l.u.INFO })
                                : i((0, a.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [e, t.isAuthorized, m, u, i]);
                };
        },
        72404: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => K });
            var a = i(32290),
                n = i(21916),
                r = i(96103),
                s = i(55178),
                l = i(60900),
                o = i(39407),
                c = i(21732),
                d = i(46049),
                u = i(71926),
                m = i(64170),
                g = i(7474),
                h = i(7999),
                _ = i(91853),
                p = i(48922),
                v = i(22714),
                f = i(83808),
                x = i(83920),
                A = i(3796),
                y = i(57594),
                k = i(28724),
                E = i(58054),
                N = i(32468),
                C = i(74694),
                j = i(50308),
                S = i(57815),
                T = i(22556),
                L = i(44242),
                b = i(14459),
                I = i(83992),
                O = i(42125),
                R = i(24535),
                w = i(47216),
                D = i(94821),
                P = i(26365);
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
                        customImage: (0, I.v)({ tld: t.tld }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, w.H)({ cardType: D.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, b.k)(),
                    appLinks: (0, L.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (n = t.fullUrl) ? n : '', host: t.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, P.S)('/artist/:artistId/similar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var U = i(22644),
                z = i(51714),
                W = i(76135),
                B = i.n(W);
            let H = (0, r.PA)((e) => {
                var t, i, r, L;
                let { artistId: b, preloadedArtist: I, preloadedSimilarArtists: O } = e,
                    { artist: R, disclaimerModalState: w } = (0, y.g)(),
                    { formatMessage: D } = (0, l.A)(),
                    { contentScrollRef: P, setContentScrollRef: W } = (0, x.g)(),
                    H = (0, f.W)(),
                    F = (0, _.S)({ artist: null == (t = R.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                (0, z.G)(b),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = R.meta) ? void 0 : e.artist.isUnsafeLegal) && F();
                    }, [null == (i = R.meta) ? void 0 : i.artist.isUnsafeLegal, F]),
                    (0, U._)(R, b),
                    (0, s.useEffect)(
                        () => () => {
                            R.similarArtistsSubPage.reset();
                        },
                        [R],
                    ),
                    R.similarArtistsSubPage.isNotFound && (0, n.notFound)(),
                    (0, A.J)(R.similarArtistsSubPage.isResolved);
                let K = (0, s.useMemo)(() => {
                        if (R.similarArtistsSubPage.isResolved) {
                            var e;
                            return null == (e = R.similarArtistsSubPage.similarArtists)
                                ? void 0
                                : e.map((e) => (0, a.jsx)(g.a, { className: B().item, artist: e, contentLinesCount: 3 }, e.id));
                        }
                        let t = D({ id: 'loading-messages.entity-is-loading' }, { entityName: D({ id: 'entity-names.similar-artists' }) });
                        return (0, a.jsx)(j.e, { isActive: !0, itemClassName: B().item, round: !0, centered: !0, 'aria-label': t });
                    }, [
                        R.similarArtistsSubPage.loadingState,
                        R.similarArtistsSubPage.similarArtists,
                        D,
                        null == (r = R.similarArtistsSubPage.similarArtists) ? void 0 : r.length,
                    ]),
                    G = [];
                return (R.similarArtistsSubPage.isNeededToLoad && G.push(R.similarArtistsSubPage.getData({ artistId: b, preloadedSimilarArtists: O })),
                R.infoLoadingState.isNeededToLoad && G.push(R.getInfo({ artistId: b, preloadedArtist: I })),
                ((e) => {
                    var t;
                    (0, s.useEffect)(() => {
                        (null == e ? void 0 : e.meta) &&
                            !e.infoLoadingState.isLoading &&
                            e.meta.artist &&
                            M({ artist: (0, S.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, T.j)(e);
                            });
                    }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                })(R),
                G.length && (0, s.use)(Promise.allSettled(G)),
                null == (L = R.meta) ? void 0 : L.artist.isLegalRejected)
                    ? (0, a.jsx)(k.M, { modalState: w })
                    : R.isInfoSomethingWentWrong
                      ? (0, a.jsx)(m.SomethingWentWrong, {})
                      : (0, a.jsx)(v.n, {
                            pageId: p._Q.ARTIST_SIMILAR,
                            pageEntityId: b,
                            children: (0, a.jsx)(h.h, {
                                scrollElement: P,
                                outerTitle: D({ id: 'page.artist-similar-header' }, { artistName: R.commonSubPage.artistName }),
                                children: (0, a.jsxs)('div', {
                                    className: B().root,
                                    'data-test-id': c.Xk.artist.ARTIST_SIMILAR_PAGE,
                                    children: [
                                        (0, a.jsx)(C.Y, {
                                            variant: C.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: H.canBack,
                                            children: (0, a.jsx)(u.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, a.jsx)(o.A, { id: 'page.artist-similar-header', values: { artistName: R.commonSubPage.artistName } }),
                                            }),
                                        }),
                                        (0, a.jsxs)(d.N, {
                                            className: B().scrollableContent,
                                            containerClassName: B().container,
                                            ref: W,
                                            children: [
                                                (0, a.jsx)('div', { className: B().content, 'aria-labelledby': 'collection-artists-header', tabIndex: 0, children: K }),
                                                (0, a.jsx)(N.A, { children: (0, a.jsx)(E.w, { className: B().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var F = i(17024);
            let K = () => {
                let e = (0, n.useSearchParams)().get('artistId');
                return (e && (0, F.L)(e)) || (0, n.notFound)(), (0, a.jsx)(H, { artistId: e });
            };
        },
        73422: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var a = i(91945),
                n = i(14190),
                r = i(84570),
                s = i(40363);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = i(18870);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = i(64552);
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
                        t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {});
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
        76135: (e) => {
            e.exports = {
                root: 'ArtistSimilarPage_root__rvTLl',
                scrollableContent: 'ArtistSimilarPage_scrollableContent__WD72A',
                container: 'ArtistSimilarPage_container__DDj5O',
                content: 'ArtistSimilarPage_content__X71xs',
                footer: 'ArtistSimilarPage_footer__FdVkO',
            };
        },
        76768: (e) => {
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
        77088: (e) => {
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
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => V });
            var a = i(32290),
                n = i(96103),
                r = i(60900),
                s = i(16172),
                l = i(21732),
                o = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                m = i(92708),
                g = i(55178),
                h = i(63380),
                _ = i(45477),
                p = i(75582),
                v = i(57594),
                f = i(90357),
                x = i(86269),
                A = i(74196),
                y = i(71926),
                k = i(58534),
                E = i(11323),
                N = i(356),
                C = i.n(N);
            let j = (e) => {
                let { coverUri: t, title: i, isDisliked: n, closeToast: s } = e,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(k.$, {
                    closeToast: s,
                    message: (0, a.jsxs)('div', {
                        className: C().message,
                        children: [
                            (0, a.jsx)(A.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(x.t, {
                                className: C().cover,
                                radius: 'round',
                                children: (0, a.jsx)(E.B, { className: C().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(y.HL, { className: C().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var S = i(5942),
                T = i(70390),
                L = i(9017),
                b = i(65477),
                I = i(71735),
                O = i(37862),
                R = i(48922),
                w = i(54391),
                D = i(72396),
                P = i(46200),
                M = i(27120),
                U = i(43564),
                z = i(95134),
                W = i(79406),
                B = i(51675),
                H = i(48027),
                F = i(89384),
                K = i(38223),
                G = i(58237),
                X = i(56367),
                Y = i(4914),
                $ = i(83755),
                Z = i(25160),
                J = i(4008);
            let V = (0, n.PA)((e) => {
                var t, i, n;
                let { artist: x, onOpenChange: A, open: y, ...k } = e,
                    { shouldShowBuySubscriptionModal: E, showBuySubscriptionModal: N } = (0, P.q)(),
                    {
                        settings: { isMobile: C },
                        modals: { artistAboutModal: V },
                        trailer: q,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, T.A)(x),
                    ei = (0, S.K)(x),
                    ea = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, p.l)(),
                            [n, s] = (0, g.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(f.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: _.u.ERROR });
                            if (n) return;
                            let r = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            s(!1),
                                o === h.f.OK
                                    ? i((0, a.jsx)(j, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: _.u.INFO })
                                    : i((0, a.jsx)(f.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: _.u.ERROR });
                        });
                    })(x),
                    en = (0, w.F)(),
                    er = ''.concat(O.U.ARTIST, '-').concat(null == x ? void 0 : x.id),
                    { formatMessage: es } = (0, r.A)(),
                    { utmLink: el } = (0, D.f)({ blockId: O.U.ARTIST, contextType: o.K.Artist, contextId: null == x ? void 0 : x.id }),
                    { shareLink: eo, pathname: ec } = (0, F.b)('/artist/:artistId', { params: { artistId: null != (i = null == x ? void 0 : x.id) ? i : '' } }),
                    ed = (0, L.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == x ? void 0 : x.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, U.B)({
                        seeds: null != (n = null == x ? void 0 : x.seeds) ? n : [],
                        pageIdForFrom: R._Q.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == x ? void 0 : x.id,
                    }),
                    eg = (0, I.P)(),
                    eh = es((null == x ? void 0 : x.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    e_ = (0, c.c)(() => {
                        if (E && Q.isAuthorized) return void N();
                        eu || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!eg()) {
                            if (E) return void N();
                            (null == x ? void 0 : x.id) && (q.setUtmLink(el), q.openArtistTrailer(x.id), en(s.ky.Artist, x.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        V.open(null == x ? void 0 : x.id);
                    });
                (0, M.N)(y);
                let ef = { variant: B.Y.ARTIST, id: null == x ? void 0 : x.id, title: null == x ? void 0 : x.name, path: ec },
                    ex = ee.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    eA = null == x || null == (t = x.trailer) ? void 0 : t.isAvailable,
                    ey = ee.checkExperiment(W.z.WebNextArtistInfo, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: C,
                    offsetOptions: 10,
                    open: y,
                    onOpenChange: A,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU },
                    ...k,
                    children: [
                        ex && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)(b.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !C && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)(X.L, { onClick: et, isPinned: null == x ? void 0 : x.isPinned }) }),
                        (0, a.jsx)(J.WithOffline, {
                            fallback: (0, a.jsx)(G.T, {
                                onClick: ei,
                                isLiked: null == x ? void 0 : x.isLiked,
                                disabled: !Q.isAuthorized || !(null == x ? void 0 : x.isAvailable),
                            }),
                        }),
                        eA && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)($.N, { onClick: ep }) }),
                        (0, a.jsx)(J.WithOffline, {
                            fallback: (0, a.jsx)(Z.C, { onClick: e_, disabled: !(null == x ? void 0 : x.isAvailable), variant: H.I.ARTIST, onOpenMenuChange: A }),
                        }),
                        (0, a.jsx)(Y.H, { disabled: !x, shareLink: eo, entityMeta: ef }),
                        ey &&
                            (0, a.jsx)(J.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
                                }),
                            }),
                        (0, a.jsx)(J.WithOffline, {
                            fallback: (0, a.jsx)(K.D, { onClick: ea, isDisliked: null == x ? void 0 : x.isDisliked, disabled: !(null == x ? void 0 : x.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        80556: (e) => {
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
        83992: (e, t, i) => {
            'use strict';
            function a(e) {
                let { tld: t, url: i } = e;
                return i || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            i.d(t, { v: () => a });
        },
        84570: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        87151: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            var a = i(65024);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => o });
            var a = i(32290),
                n = i(63618),
                r = i(79856),
                s = i(80556),
                l = i.n(s);
            let o = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: s,
                    round: o,
                    'aria-label': c,
                    centered: d,
                    withInfo: u = !0,
                    linesCount: m = 3,
                    withSubcover: g,
                    radius: h = 'l',
                } = e;
                return (0, a.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(l().root, i),
                    children: [
                        g && (0, a.jsx)(r.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, a.jsx)(r.W, { isActive: t, className: (0, n.$)(l().cover, s, { [l().cover_round]: o, [l().cover_withSubcover]: g }), radius: h }),
                        u &&
                            (0, a.jsx)('div', {
                                className: (0, n.$)(l().infoContainer, l()['content_linesCount_'.concat(m)], { [l().infoContainer_centered]: d }),
                                children: (0, a.jsx)(r.W, { isActive: t, className: (0, n.$)(l().title, { [l().title_withSubcover]: g }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        91853: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var a = i(19383);
            let n = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: n } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        94821: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a });
            var a = (function (e) {
                return (e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e;
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7231, 6347, 9763, 3183, 6639, 7258, 9180, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 3266, 6477, 7275, 2586, 8347, 4522, 7702,
                6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 4220, 9562, 7358,
            ],
            () => e((e.s = 23090)),
        ),
            (_N_E = e.O());
    },
]);
