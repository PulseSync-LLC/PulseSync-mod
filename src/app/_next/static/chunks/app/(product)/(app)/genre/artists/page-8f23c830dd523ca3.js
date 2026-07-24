(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9029],
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
            var r;
            i.d(t, { M: () => r }),
                (function (e) {
                    (e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon');
                })(r || (r = {}));
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                l = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(20472),
                _ = i(97647),
                v = i(97755);
            let x = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(v.O, {
                        closeToast: i,
                        entityVariant: _.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: m.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                h = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, n.useState)(!1),
                        { formatMessage: v } = (0, s.A)();
                    return (0, n.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                        _(!0);
                        let s = await e.toggleLike();
                        _(!1),
                            s === l.f.OK
                                ? i((0, r.jsx)(x, { artist: n }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e, t.isAuthorized, m, v, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => U });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                l = i(60900),
                o = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                v = i(82586),
                x = i(86269),
                h = i(71926),
                g = i(91853),
                p = i(5942),
                f = i(70390),
                C = i(71735),
                A = i(47745),
                N = i(2969),
                T = i(54391),
                k = i(23352),
                E = i(72396),
                R = i(5537),
                j = i(84062),
                I = i(28999),
                y = i(90169),
                b = i(57594),
                S = i(11323),
                O = i(92744),
                P = i(61258),
                L = i(10180),
                w = i(90326),
                z = i(29268),
                M = i(34925),
                D = i(80528),
                B = i(42048),
                F = i.n(B);
            let U = (0, n.PA)((e) => {
                let { artist: t, className: i, children: n, contentLinesCount: B, topTitleElement: U, bottomTitleElement: X } = e,
                    { ref: G, intersectionPropertyId: H } = (0, k.n)(),
                    {
                        trailer: Y,
                        user: K,
                        paywall: { modal: W },
                    } = (0, b.g)(),
                    { from: V, utmLink: $ } = (0, E.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, l.A)(),
                    [J, Q] = (0, s.useState)(!1),
                    [Z, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, I.z)(),
                    es = (0, A.N)(),
                    el = (0, N.b)(),
                    eo = (0, p.K)(t),
                    ec = (0, f.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    ev = (0, j.Z)(t.url),
                    [ex, eh] = (0, s.useState)(!1),
                    eg = (0, T.F)(),
                    ep = (0, C.P)(),
                    ef = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        Y.openArtistTrailer(t.id), eg(o.ky.Artist, t.id);
                    }),
                    eC = (0, s.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, q]),
                    { isPlaying: eA, togglePlay: eN } = (0, y.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: V, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eT = (0, g.S)({ artist: t, callback: ev }),
                    ek = (0, g.S)({ artist: t, callback: eN }),
                    eE = (0, u.c)((e) => {
                        null == ea || ea(), es({ to: o.QT.ArtistScreen }), eT(e);
                    }),
                    eR = (0, R.N)(),
                    ej = (0, u.c)(() => {
                        if (!ep()) {
                            if (eR) return void W.open();
                            J || eA || (Q(!0), null == en || en()), ek(), el(!eA);
                        }
                    }),
                    eI = (0, u.c)(() => {
                        Z || e_ || (ee(!0), null == er || er()), eo();
                    }),
                    ey = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eb = (0, u.c)((e) => {
                        ei(e), eh(e);
                    }),
                    eS = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eb,
                                    open: et,
                                    onClick: ey,
                                    className: (0, a.$)(F().menuButton, F().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ey, eb, et],
                    ),
                    eO = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                M.n,
                                {
                                    children: (0, r.jsx)(z.k, {
                                        className: (0, a.$)(F().trailerButton, F().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ef,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ef]),
                    eP = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                L.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(F().pinButton, F().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eL = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                _.hg,
                                {
                                    isVisible: et || ex,
                                    className: F().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(F().playButton, F().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ej,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        O.c,
                                        {
                                            className: (0, a.$)(F().likeButton, F().control),
                                            isLiked: e_,
                                            onClick: eI,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !K.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eS,
                                    pinControl: eP,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(x.t, {
                                className: F().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: F().coverBlock,
                                    onClick: eE,
                                    children: [
                                        (0, r.jsx)(S.B, {
                                            className: F().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eC,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eL,
                                    ],
                                }),
                            }),
                        [eE, em, eC, t.isAvailable, eL],
                    );
                return (0, r.jsx)(_.MN, {
                    ref: G,
                    className: (0, a.$)(F().root, i),
                    textPosition: 'center',
                    'aria-label': eC,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            U,
                            (0, r.jsx)(h.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, r.jsx)(P.N, {
                                    className: F().titleLink,
                                    href: t.url,
                                    'aria-label': eC,
                                    onClick: eE,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            X,
                        ],
                    }),
                    srTitle: (0, r.jsx)(P.N, { href: t.url, onClick: eE, children: eC }),
                    'data-intersection-property-id': H,
                    contentLinesCount: B,
                    view: ew,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var r = i(32290),
                a = i(55178),
                n = i(91027),
                s = i(71730),
                l = i(45477),
                o = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, n.c)(() => {
                        var i;
                        d({ notificationId: u.current }), (u.current = 0);
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            });
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(s.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        14858: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var r = i(60900),
                a = i(57594),
                n = i(79406);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, r.A)(),
                    { user: i, experiments: s } = (0, a.g)(),
                    l = 'ru' === i.account.data.userSessionRegionIso && s.checkExperiment(n.z.WebNextFooterDisclaimer, 'on'),
                    o = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return l ? t({ id: 'footer.disclaimer-content' }) : o;
            };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                a = i(55178),
                n = i(60900),
                s = i(21732),
                l = i(63423),
                o = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: v,
                            className: x,
                            forwardRef: h,
                            style: g,
                            children: p,
                        } = e,
                        { formatMessage: f } = (0, n.A)(),
                        C = f({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(l.$, {
                        className: x,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: _,
                        ref: h,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: v }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: p,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => n });
            var r = i(55178);
            let a = (0, r.createContext)(null),
                n = () => (0, r.useContext)(a);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var r = i(32290),
                a = i(77088),
                n = i.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: n().empty });
            };
        },
        34326: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                l = i(62366),
                o = i.n(l);
            let c = (0, n.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: n, columnClassName: l, className: c, resizeObserver: d, scrollMargin: u } = e,
                    m = (0, s.useRef)(null),
                    _ = t[i.index],
                    v = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - u, 'px') };
                return (
                    (0, s.useEffect)(() => {
                        let e = m.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, r.jsx)('div', {
                        'data-index': i.index,
                        ref: m,
                        style: v,
                        className: (0, a.$)(o().root, c),
                        children: null == _ ? void 0 : _.map((e) => (0, r.jsx)('div', { className: l, children: n(e) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var r = i(32290),
                a = i(60900),
                n = i(70280);
            let s = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, r.jsx)(n.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        36504: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var r = i(96151),
                a = i(87151);
            let n = (e) => {
                var t, i, n, s, l;
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
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, a.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (n = e.counts) ? void 0 : n.compilations) || 0,
                              tracks: (null == (s = e.counts) ? void 0 : s.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (l = e.trailer) ? void 0 : l.isAvailable) },
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
        38223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var r = i(32290),
                a = i(96103),
                n = i(39407),
                s = i(21732),
                l = i(82586),
                o = i(19740),
                c = i(57594);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, r.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(n.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        41150: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        42019: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 86064));
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
        57401: (e) => {
            e.exports = {
                root: 'GenreArtistsPage_root__PgtIz',
                container: 'GenreArtistsPage_container__NruTu',
                shimmerTitle: 'GenreArtistsPage_shimmerTitle__K2uY9',
                footer: 'GenreArtistsPage_footer__fYaCO',
            };
        },
        58054: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => A });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(60900),
                l = i(39407),
                o = i(21732),
                c = i(71926),
                d = i(14858),
                u = i(8626),
                m = i(31010),
                _ = i(61945),
                v = i(57594),
                x = (function (e) {
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
            let h = (e, t, i) => {
                switch (e) {
                    case x.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case x.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                    case x.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case x.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case x.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case x.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                    case x.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                }
            };
            var g = i(61258),
                p = i(77088),
                f = i.n(p);
            let C = (0, n.PA)((e) => {
                    let { className: t } = e,
                        { location: i } = (0, v.g)(),
                        { formatDate: n } = (0, s.A)(),
                        { language: d } = (0, _.h)();
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(f().copyrights, t),
                        'data-test-id': o.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    n(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, r.jsx)(g.N, {
                                        target: '_blank',
                                        href: h(x.YANDEX, i.tld, d),
                                        className: (0, a.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': o.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, r.jsx)(l.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(g.N, {
                                target: '_blank',
                                href: h(x.YANDEX_PROJECTS, i.tld, d),
                                className: f().copyrightLink,
                                'data-test-id': o.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, r.jsx)(l.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                A = (0, n.PA)((e) => {
                    var t;
                    let { className: i } = e,
                        { user: n, location: s } = (0, v.g)(),
                        { isEnabled: u } = null != (t = (0, m.P)()) ? t : {},
                        { language: p } = (0, _.h)(),
                        A = (0, d.w)(!0),
                        N = ((e) => {
                            let { platform: t, tld: i, language: a, userRegion: n } = e,
                                s = { title: (0, r.jsx)(l.A, { id: 'footer.links-copyright-holders' }), url: h(x.COPYRIGHT_HOLDER, i, a) },
                                o = { title: (0, r.jsx)(l.A, { id: 'footer.links-privacy-policy' }), url: h(x.PRIVACY_POLICY, i, a) },
                                c = { title: (0, r.jsx)(l.A, { id: 'footer.links-terms' }), url: h(x.AGREEMENT, i, a) },
                                d = { title: (0, r.jsx)(l.A, { id: 'footer.links-recommendation-rules' }), url: h(x.RECOMMENDATION_RULES, i, a) },
                                u = { title: (0, r.jsx)(l.A, { id: 'footer.links-help' }), url: h(x.HELP, i, a) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [s, c, d];
                                    return 'ru' === n && e.push(o), e.push(u), e;
                                }
                                case 'desktop':
                                    return [s, c, d, u];
                            }
                        })({ platform: 'desktop', tld: s.tld, language: p, userRegion: n.account.data.userSessionRegionIso });
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(f().root, f().important, { [f().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': o.S7.FOOTER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: f().links,
                                children: [
                                    (0, r.jsx)('ol', {
                                        className: f().list,
                                        'data-test-id': o.S7.FOOTER_LINKS_LIST,
                                        children: N.map((e) => {
                                            let { title: t, url: i } = e;
                                            return (0, r.jsx)(
                                                'li',
                                                {
                                                    className: f().item,
                                                    children: (0, r.jsx)(g.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: f().link,
                                                        'data-test-id': o.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, r.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: f().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: A },
                                        'data-test-id': o.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(C, {}),
                        ],
                    });
                });
        },
        62366: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        65024: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => a });
            let r = new Set(Object.values(i(3785).M)),
                a = (e) => 'string' == typeof e && r.has(e);
        },
        69796: (e, t, i) => {
            'use strict';
            i.d(t, { El: () => l, I7: () => o, K$: () => s, cM: () => d, fZ: () => a, tA: () => n, vX: () => r, xi: () => c });
            let r = 16,
                a = 16,
                n = 315,
                s = 170,
                l = 270,
                o = 7,
                c = 30,
                d = 30;
        },
        70390: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                l = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let _ = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                v = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [m, v] = (0, n.useState)(!1);
                    return (0, n.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                        v(!0);
                        let s = await e.togglePin();
                        v(!1),
                            s
                                ? i((0, r.jsx)(_, { artist: n }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [e, t.isAuthorized, m, u, i]);
                };
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => v });
            var r = i(32290),
                a = i(63618),
                n = i(55178),
                s = i(60900),
                l = i(39407),
                o = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                m = i(70718),
                _ = i.n(m);
            let v = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, n.useRef)(null),
                    { formatMessage: v } = (0, s.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let x = (0, n.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': v({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [v, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(_().root, _().important), message: x, closeToast: i });
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
        79248: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var r = i(77307),
                a = i(55178),
                n = i(91027),
                s = i(83920),
                l = i(57594);
            let o = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, l.g)(),
                        { contentScrollRef: _ } = (0, s.g)(),
                        v = (0, a.useRef)(new Map()),
                        x = (0, a.useRef)(void 0),
                        h = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = v.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: u,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let r = t.getBoundingClientRect().top;
                                return e && 1 ? r + window.scrollY : !e && i ? r + i.scrollTop : 0;
                            })(m, d, _),
                        },
                        g = (0, r.XW)(h),
                        p = (0, r.Te)({ ...h, getScrollElement: () => _, initialOffset: null == _ ? void 0 : _.scrollTop }),
                        f = m ? g : p,
                        C = (0, n.c)(() => {
                            f.measure();
                        });
                    return (
                        (0, a.useEffect)(() => {
                            x.current ||
                                (x.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let r = e.contentRect.height;
                                            r && r !== v.current.get(i) && (v.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && C();
                                }));
                        }, [C]),
                        { virtualizer: f, resizeObserver: x.current }
                    );
                };
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var r = i(32290),
                a = i(96103),
                n = i(60900),
                s = i(16172),
                l = i(21732),
                o = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                m = i(92708),
                _ = i(55178),
                v = i(63380),
                x = i(45477),
                h = i(75582),
                g = i(57594),
                p = i(90357),
                f = i(86269),
                C = i(74196),
                A = i(71926),
                N = i(58534),
                T = i(11323),
                k = i(356),
                E = i.n(k);
            let R = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: s } = e,
                    { formatMessage: l } = (0, n.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(N.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: E().message,
                        children: [
                            (0, r.jsx)(C.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(f.t, {
                                className: E().cover,
                                radius: 'round',
                                children: (0, r.jsx)(T.B, { className: E().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(A.HL, { className: E().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var j = i(5942),
                I = i(70390),
                y = i(9017),
                b = i(65477),
                S = i(71735),
                O = i(37862),
                P = i(48922),
                L = i(54391),
                w = i(72396),
                z = i(46200),
                M = i(27120),
                D = i(43564),
                B = i(95134),
                F = i(79406),
                U = i(51675),
                X = i(48027),
                G = i(89384),
                H = i(38223),
                Y = i(58237),
                K = i(56367),
                W = i(4914),
                V = i(83755),
                $ = i(25160),
                q = i(4008);
            let J = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: f, onOpenChange: C, open: A, ...N } = e,
                    { shouldShowBuySubscriptionModal: T, showBuySubscriptionModal: k } = (0, z.q)(),
                    {
                        settings: { isMobile: E },
                        modals: { artistAboutModal: J },
                        trailer: Q,
                        user: Z,
                        experiments: ee,
                    } = (0, g.g)(),
                    et = (0, I.A)(f),
                    ei = (0, j.K)(f),
                    er = ((e) => {
                        let { user: t } = (0, g.g)(),
                            { notify: i } = (0, h.l)(),
                            [a, s] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(p.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: x.u.ERROR });
                            if (a) return;
                            let n = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            s(!1),
                                o === v.f.OK
                                    ? i((0, r.jsx)(R, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: x.u.INFO })
                                    : i((0, r.jsx)(p.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR });
                        });
                    })(f),
                    ea = (0, L.F)(),
                    en = ''.concat(O.U.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: el } = (0, w.f)({ blockId: O.U.ARTIST, contextType: o.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: eo, pathname: ec } = (0, G.b)('/artist/:artistId', { params: { artistId: null != (i = null == f ? void 0 : f.id) ? i : '' } }),
                    ed = (0, y.A)({ entityVariant: B.D.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (a = null == f ? void 0 : f.seeds) ? a : [],
                        pageIdForFrom: P._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    e_ = (0, S.P)(),
                    ev = es((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ex = (0, c.c)(() => {
                        if (T && Z.isAuthorized) return void k();
                        eu || em();
                    }),
                    eh = (0, c.c)(() => {
                        if (!e_()) {
                            if (T) return void k();
                            (null == f ? void 0 : f.id) && (Q.setUtmLink(el), Q.openArtistTrailer(f.id), ea(s.ky.Artist, f.id));
                        }
                    }),
                    eg = (0, c.c)(() => {
                        J.open(null == f ? void 0 : f.id);
                    });
                (0, M.N)(A);
                let ep = { variant: U.Y.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: ec },
                    ef = ee.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    eC = null == f || null == (t = f.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(F.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: E,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: C,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU },
                    ...N,
                    children: [
                        ef && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(b.d, { entityVariant: B.D.ARTIST, adminUrl: ed }) }),
                        !E && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(K.L, { onClick: et, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(Y.T, {
                                onClick: ei,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !Z.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        eC && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(V.N, { onClick: eh }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)($.C, { onClick: ex, disabled: !(null == f ? void 0 : f.isAvailable), variant: X.I.ARTIST, onOpenMenuChange: C }),
                        }),
                        (0, r.jsx)(W.H, { disabled: !f, shareLink: eo, entityMeta: ep }),
                        eA &&
                            (0, r.jsx)(q.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: eg,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(H.D, { onClick: er, isDisliked: null == f ? void 0 : f.isDisliked, disabled: !(null == f ? void 0 : f.isAvailable) }),
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
        86064: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => K });
            var r = i(32290),
                a = i(21916),
                n = i(55178),
                s = i(96103),
                l = i(60900),
                o = i(21732),
                c = i(91027),
                d = i(46049),
                u = i(71926),
                m = i(64170),
                _ = i(7474),
                v = i(7999),
                x = i(88406),
                h = i(48922),
                g = i(22714),
                p = i(83808),
                f = i(83920),
                C = i(3796),
                A = i(49259),
                N = i(45066),
                T = i(11262),
                k = i(58054),
                E = i(32468),
                R = i(74694),
                j = i(89020),
                I = i(69796),
                y = i(22556),
                b = i(44242),
                S = i(42125),
                O = i(44338),
                P = i(24535),
                L = i(47216),
                w = i(94821),
                z = i(26365),
                M = i(43993),
                D = i(49124);
            async function B(e, t) {
                let { locale: i, fullUrl: r, url: a, tld: n, host: s } = t,
                    l = await (0, S.W)(i),
                    o = e.title.fullTitle,
                    c = l({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, M.f)({ genreTitle: o, artists: d, messageFormatter: l }),
                    m = D.env.ASSET_PREFIX || '',
                    _ = ''.concat(s).concat(m, '/meta/og-image.png');
                return {
                    title: c,
                    description: u,
                    openGraph: (0, P.i)({
                        ogTitle: (0, O.N)(o),
                        ogDescription: u,
                        fullUrl: null != r ? r : '',
                        locale: i,
                        siteName: l({ id: 'metadata.yandex-music' }),
                        ogImage: _,
                    }),
                    twitter: (0, L.H)({ cardType: w.W.APP, title: c, url: null != a ? a : '', appName: l({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, b.X)({
                        additional: { tld: n, url: null != a ? a : '', fullUrl: null != r ? r : '', host: s },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, z.S)('/genre/:metatagId/artists', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var F = i(36504),
                U = i(57401),
                X = i.n(U);
            let G = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    { artistsSubpage: s } = (0, A.s)(N.n.GENRE),
                    { formatMessage: b } = (0, l.A)(),
                    { contentScrollRef: S, setContentScrollRef: O } = (0, f.g)(),
                    P = (0, p.W)(),
                    L = (0, c.c)(() => I.tA),
                    w = (0, c.c)(() => (s.isShimmerVisible ? I.xi : s.totalCount)),
                    z = (0, n.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: I.cM });
                        },
                        [s, t],
                    ),
                    M = ((e) => {
                        let { pageSize: t, callback: i } = e;
                        return (0, c.c)((e, r) => {
                            if (!i) return;
                            let a = Math.floor((e.startIndex * r) / t),
                                n = Math.ceil((e.endIndex * r) / t);
                            for (let e = a; e <= n; e++) i(e);
                        });
                    })({ pageSize: I.cM, callback: z });
                (0, T.X)(s.pagesLoader, z);
                let D = (0, c.c)((e) => {
                    let t = s.items[e],
                        i = b({ id: 'loading-messages.entity-is-loading' }, { entityName: b({ id: 'entity-names.artist' }) });
                    return t ? (0, r.jsx)(_.a, { artist: t, contentLinesCount: 3 }, t.id) : (0, r.jsx)(j.V, { 'aria-label': i, round: !0, centered: !0 });
                });
                return ((0, n.useEffect)(
                    () => () => {
                        s.reset();
                    },
                    [s],
                ),
                s.isNotFound && (0, a.notFound)(),
                (0, C.J)(s.isResolved),
                ((e) => {
                    (0, n.useEffect)(() => {
                        e &&
                            B(
                                ((e) => {
                                    var t, i, r;
                                    return {
                                        id: '',
                                        title: { title: '', fullTitle: e.fullTitle || '' },
                                        artists: e.items.map((e) => ({ artist: (0, F.N)(e), popularTracks: [] })),
                                        pager: {
                                            page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                            perPage: (null == (i = e.pagesLoader.pager) ? void 0 : i.perPage) || 0,
                                            total: (null == (r = e.pagesLoader.pager) ? void 0 : r.total) || 0,
                                        },
                                    };
                                })(e),
                                { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                            ).then((e) => {
                                (0, y.j)(e);
                            });
                    }, [e]);
                })(s),
                t && s.isNeededToLoad && (0, n.use)(s.getData({ preloadedMeta: i, metatagId: t, page: 0, pageSize: I.cM })),
                s.isSomethingWrong)
                    ? (0, r.jsx)(m.SomethingWentWrong, {})
                    : (0, r.jsx)(g.n, {
                          pageId: h._Q.GENRE_ARTISTS,
                          children: (0, r.jsx)(v.h, {
                              scrollElement: S,
                              outerTitle: s.fullTitle,
                              children: (0, r.jsxs)('div', {
                                  className: X().root,
                                  'data-test-id': o.Xk.genre.GENRE_ARTISTS_PAGE,
                                  children: [
                                      (0, r.jsx)(R.Y, {
                                          variant: R.V.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: P.canBack,
                                          children: (0, r.jsx)(u.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                      }),
                                      (0, r.jsxs)(d.N, {
                                          ref: O,
                                          className: X().root,
                                          containerClassName: X().container,
                                          children: [
                                              (0, r.jsx)(x.Q, {
                                                  maxColumnCount: I.I7,
                                                  count: w(),
                                                  rowGap: I.fZ,
                                                  columnGap: I.vX,
                                                  getEstimateRowSize: L,
                                                  minColumnWidth: I.K$,
                                                  maxColumnWidth: I.El,
                                                  onChangeRange: M,
                                                  renderItemByIndex: D,
                                              }),
                                              (0, r.jsx)(E.A, { children: (0, r.jsx)(k.w, { className: X().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
            var H = i(79856);
            let Y = () => {
                    let e = (0, p.W)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, f.g)(),
                        { formatMessage: a } = (0, l.A)(),
                        n = a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.artist' }) }),
                        s = (0, c.c)(() => (0, r.jsx)(j.V, { 'aria-label': n, round: !0, centered: !0 })),
                        o = (0, c.c)(() => I.tA),
                        u = (0, c.c)(() => void 0);
                    return (0, r.jsx)(v.h, {
                        scrollElement: t,
                        children: (0, r.jsxs)('div', {
                            className: X().root,
                            children: [
                                (0, r.jsx)(R.Y, {
                                    variant: R.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(H.W, { className: X().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)(d.N, {
                                    ref: i,
                                    className: X().root,
                                    containerClassName: X().container,
                                    children: (0, r.jsx)(x.Q, {
                                        maxColumnCount: I.I7,
                                        count: I.xi,
                                        rowGap: I.fZ,
                                        columnGap: I.vX,
                                        getEstimateRowSize: o,
                                        minColumnWidth: I.K$,
                                        maxColumnWidth: I.El,
                                        onChangeRange: u,
                                        renderItemByIndex: s,
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                K = () => {
                    let e = (0, a.useSearchParams)().get('metatagId');
                    return e || (0, a.notFound)(), (0, r.jsx)(n.Suspense, { fallback: (0, r.jsx)(Y, {}), children: (0, r.jsx)(G, { metatagId: e }) });
                };
        },
        87151: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var r = i(65024);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        88406: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => u });
            var r = i(32290),
                a = i(96103),
                n = i(55178),
                s = i(54862),
                l = i(93954),
                o = i(34326),
                c = i(41150),
                d = i.n(c);
            let u = (0, a.PA)((e) => {
                let {
                        count: t,
                        rowGap: i,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: m,
                        maxColumnWidth: _,
                        maxColumnCount: v,
                        renderItemByIndex: x,
                        onChangeRange: h,
                    } = e,
                    [g, p] = (0, s.d)(),
                    {
                        virtualizer: f,
                        rowResizeObserver: C,
                        columnCount: A,
                        indices: N,
                    } = (0, l.L)({
                        count: t,
                        rowGap: i,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: m,
                        maxColumnWidth: _,
                        maxColumnCount: v,
                        containerRef: g,
                    });
                (0, n.useEffect)(() => {
                    !f.isScrolling && f.range && (null == h || h(f.range, A));
                }, [h, f.isScrolling, f.range, A]);
                let T = { '--virtual-grid-height': ''.concat(f.getTotalSize(), 'px'), '--virtual-grid-column-count': A };
                return (0, r.jsx)('div', {
                    ref: p,
                    style: T,
                    className: d().root,
                    children: f.getVirtualItems().map((e) =>
                        (0, r.jsx)(
                            o.U,
                            {
                                className: d().row,
                                columnClassName: d().column,
                                virtualItem: e,
                                resizeObserver: C,
                                indices: N,
                                renderItemByIndex: x,
                                scrollMargin: f.options.scrollMargin,
                            },
                            e.key,
                        ),
                    ),
                });
            });
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => o });
            var r = i(32290),
                a = i(63618),
                n = i(79856),
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
                    withSubcover: _,
                    radius: v = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(l().root, i),
                    children: [
                        _ && (0, r.jsx)(n.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(l().cover, s, { [l().cover_round]: o, [l().cover_withSubcover]: _ }), radius: v }),
                        u &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(l().infoContainer, l()['content_linesCount_'.concat(m)], { [l().infoContainer_centered]: d }),
                                children: (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(l().title, { [l().title_withSubcover]: _ }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        91853: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(19383);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        93954: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var r = i(66988),
                a = i(6752),
                n = i(8055),
                s = i(55178);
            let l = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: r, totalCount: a, columnGap: n, minColumnCount: s, maxColumnCount: l } = e,
                    o = Math.max(1, Math.floor((r + n) / (t + n))),
                    c = Math.max(s, Math.floor((r + n) / ((i + t) * 0.5 + n)));
                for (let e = s; e <= o; e++) {
                    let a = (r - (e - 1) * n) / e;
                    if (a >= t && a <= i) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = l ? Math.min(c, l) : c)), columnCount: c };
            };
            var o = i(79248);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: i,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: m,
                        minColumnCount: _,
                        maxColumnCount: v,
                        containerRef: x,
                    } = e,
                    { rowCount: h, columnCount: g } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: r, minColumnWidth: a, totalCount: o, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, s.useState)({ rowCount: 0, columnCount: 0 }),
                            _ = (0, s.useRef)(null),
                            v = (0, s.useMemo)(
                                () =>
                                    (0, n.A)(
                                        (e) => {
                                            m(
                                                l({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: r,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: o,
                                                    columnGap: c,
                                                    minColumnCount: i,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, r, i, a, o],
                            );
                        return (
                            (0, s.useLayoutEffect)(
                                () => (
                                    _.current && _.current.disconnect(),
                                    (_.current = new ResizeObserver((e) => {
                                        e.forEach(v);
                                    })),
                                    t &&
                                        (m(
                                            l({
                                                minColumnWidth: a,
                                                maxColumnWidth: r,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: o,
                                                columnGap: c,
                                                minColumnCount: i,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        _.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = _.current) || e.disconnect();
                                    }
                                ),
                                [c, t, v, d, r, i, a, o],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: _, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: v, containerRef: x }),
                    { virtualizer: p, resizeObserver: f } = (0, o.r)({ count: h, getEstimateSize: i, gap: c, containerRef: x }),
                    C = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        g,
                    ),
                    A = (0, a.L)(() => {
                        var e, t;
                        if (!p.range) return null;
                        let i = null == (e = C[p.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = C[p.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== r ? { startIndex: i, endIndex: r } : null;
                    });
                return { virtualizer: p, rowResizeObserver: f, indices: C, columnCount: g, visibleRange: A };
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7231, 6347, 9763, 3183, 6639, 7258, 9198, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 3266, 7307, 6477, 7275, 2586, 8347,
                4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 9021, 4220, 9562, 7358,
            ],
            () => e((e.s = 42019)),
        ),
            (_N_E = e.O());
    },
]);
