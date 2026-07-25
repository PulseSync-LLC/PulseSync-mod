(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2563],
    {
        4820: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => d });
            var r = i(32290),
                s = i(55178),
                a = i(21732),
                n = i(71926),
                l = i(91624),
                o = i.n(l);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [l, d] = (0, s.useState)(null);
                if (
                    ((0, s.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, r.jsx)(
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': a.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        7462: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n, r: () => l });
            var r = i(55178),
                s = i(60900),
                a = i(64605),
                n = (function (e) {
                    return (e.PIN = 'pin'), e;
                })({});
            let l = (e, t) => {
                let { formatMessage: i } = (0, s.A)();
                return (0, r.useMemo)(() => {
                    switch (e) {
                        case a._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case a._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case a._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        13365: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { _: () => r }),
                (function (e) {
                    (e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new');
                })(r || (r = {}));
        },
        13798: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                l = i(60900),
                o = i(26252),
                d = i(21732),
                c = i(6752),
                u = i(82586),
                _ = i(57594),
                m = i(60244),
                p = i(90006),
                h = i.n(p);
            let v = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: p, variant: v, size: A = 'xxxs', ...x } = e,
                    { formatMessage: C } = (0, l.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, _.g)(),
                    [g, k] = (0, n.useState)(null),
                    f = (0, c.L)(() => {
                        switch (v) {
                            case o.JU.E:
                                return 'explicit';
                            case o.JU.AGE_12:
                            case o.JU.AGE_16:
                            case o.JU.AGE_18:
                                return 'adult';
                            case o.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    N = (0, n.useMemo)(() => C({ id: 'extra-explicit.explicit-mark' }), [C]);
                (0, n.useEffect)(() => {
                    i && i().then(k);
                }, [i, a]);
                let y = (null == g ? void 0 : g.join('\n')) || '',
                    j = !!(null == g ? void 0 : g.length) && !b,
                    T = y.length > 0 ? y : N;
                return (0, r.jsx)(m.k, {
                    description: y,
                    placement: 'bottom-start',
                    enabled: j,
                    children: (0, r.jsx)('span', {
                        className: p,
                        children:
                            v === o.JU.SUBSTITUTED
                                ? (0, r.jsxs)('svg', {
                                    className: (0, s.$)(h().explicitMark, t),
                                    viewBox: '0 0 16 16',
                                    role: 'img',
                                    'aria-label': T,
                                    style: {
                                        width: 'var(--ym-icon-size-'.concat(A, ')'),
                                        height: 'var(--ym-icon-size-'.concat(A, ')'),
                                    },
                                    ...x,
                                    'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                                    children: [
                                        (0, r.jsx)('circle', {
                                            cx: '8',
                                            cy: '8',
                                            r: '5.5',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '1.5',
                                        }),
                                        (0, r.jsx)('text', {
                                            x: '8',
                                            y: '9',
                                            fill: 'currentColor',
                                            fontSize: '7',
                                            fontWeight: '700',
                                            textAnchor: 'middle',
                                            dominantBaseline: 'middle',
                                            children: 'S',
                                        }),
                                    ],
                                })
                                : (0, r.jsx)(u.I, {
                                    className: (0, s.$)(h().explicitMark, t),
                                    'aria-label': T,
                                    variant: f,
                                    size: A,
                                    ...x,
                                    'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                                }),
                    }),
                });
            });
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        21105: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => $ });
            var r = i(32290),
                s = i(96103),
                a = i(55178),
                n = i(60900),
                l = i(16172),
                o = i(21732),
                d = i(71483),
                c = i(91027),
                u = i(19740),
                _ = i(92013),
                m = i(45477),
                p = i(75582),
                h = i(57594),
                v = i(90357),
                A = i(63363),
                x = i(91253),
                C = i(9017),
                b = i(65477),
                g = i(71735),
                k = i(37862),
                f = i(48922),
                N = i(54391),
                y = i(72396),
                j = i(46200),
                T = i(67732),
                S = i(27120),
                L = i(43564),
                E = i(95134),
                I = i(79406),
                O = i(51675),
                M = i(48027),
                w = i(89384),
                P = i(39407),
                R = i(82586);
            let z = (0, s.PA)((e) => {
                let { isFinished: t, onClick: i, className: s } = e,
                    { user: n } = (0, h.g)(),
                    l = (0, a.useMemo)(
                        () => (t ? (0, r.jsx)(P.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, r.jsx)(P.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, r.jsx)(u.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, r.jsx)(R.I, { variant: 'check', size: 'xxs' }),
                    disabled: !n.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: l,
                });
            });
            var B = i(58237),
                U = i(56367),
                D = i(4914),
                K = i(41566),
                H = i(83755),
                W = i(25160),
                F = i(4820),
                V = i(77712);
            let $ = (0, s.PA)((e) => {
                var t, i;
                let { album: s, children: P, onOpenChange: R, open: $, wrapperClassName: G, variant: Y, ...J } = e,
                    { shouldShowBuySubscriptionModal: X, showBuySubscriptionModal: q } = (0, j.q)(),
                    {
                        settings: { isMobile: Z },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: er },
                    } = (0, h.g)(),
                    es = (0, A.K)(s),
                    ea = (0, x.A)(s),
                    en = (0, N.F)(),
                    el = ''.concat(k.U.ALBUM, '-').concat(s.id),
                    eo = s.isNonMusic && Y === V.z.PAGE,
                    ed = et.checkExperiment(I.z.WebEditorsFeatures, 'on'),
                    { formatMessage: ec } = (0, n.A)(),
                    eu = (0, g.P)(),
                    { pageAlbumId: e_ } = (0, T.T)(),
                    em = ei({ pageAlbumId: e_, albumId: s.id, isNonMusic: s.isNonMusic }),
                    ep = er(s.id, s.isNonMusic),
                    eh = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, h.g)(),
                            { notify: s } = (0, p.l)(),
                            { formatMessage: l } = (0, n.A)();
                        return (0, a.useCallback)(async () => {
                            var a, n;
                            if (!t) return;
                            let o = i.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== _.T.OK
                                    ? void s((0, r.jsx)(v.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (n = t.meta) || n.updateFinished(!(null == (a = t.meta) ? void 0 : a.listeningFinished)))
                                : void s((0, r.jsx)(v.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [l, s, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: ev, pathname: eA } = (0, w.b)('/album/:albumId', { params: { albumId: s.id } }),
                    ex = (0, C.A)({ entityVariant: E.D.ALBUM, urlParams: { id: s.id } }),
                    { isPlaying: eC, togglePlay: eb } = (0, L.B)({
                        seeds: null != (i = null == s ? void 0 : s.seeds) ? i : [],
                        pageIdForFrom: f._Q.RADIO,
                        blockIdForFrom: el,
                        parentContextId: s.id,
                    }),
                    { utmLink: eg } = (0, y.f)({ blockId: k.U.ALBUM, contextType: d.K.Album, contextId: null == s ? void 0 : s.id }),
                    ek = (0, c.c)(() => {
                        if (X && ee.isAuthorized) return void q();
                        !eu() && (eC || eb());
                    }),
                    ef = (0, c.c)(() => {
                        if (X && !ep) return void q();
                        eu() || (Q.setUtmLink(eg), Q.openAlbumTrailer(s.id), en(l.ky.Album, String(s.id)));
                    });
                (0, S.N)($);
                let eN = (0, a.useMemo)(() => {
                        if (!Z) return (0, r.jsx)(U.L, { onClick: ea, isPinned: s.isPinned });
                    }, [s.isPinned, ea, Z]),
                    ey = (0, a.useMemo)(() => {
                        let e = !em && !ee.isAuthorized;
                        return s.isNonMusic
                            ? (0, r.jsx)(K.U, { onClick: es, isLiked: s.isLiked, albumType: s.type })
                            : (0, r.jsx)(B.T, { onClick: es, isLiked: s.isLiked, disabled: e });
                    }, [s.isLiked, s.type, es, s.isNonMusic, ee.isAuthorized, em]),
                    ej = (0, a.useMemo)(() => {
                        var e;
                        if (!s.isNonMusic && (null == (e = s.trailer) ? void 0 : e.isAvailable)) return (0, r.jsx)(H.N, { onClick: ef, disabled: !s.isAvailable });
                    }, [s.isAvailable, null == (t = s.trailer) ? void 0 : t.isAvailable, s.isNonMusic, ef]),
                    eT = (0, a.useMemo)(() => {
                        if (!s.isNonMusic) return (0, r.jsx)(W.C, { onClick: ek, disabled: !s.isAvailable || (ep && Z), variant: M.I.ALBUM, onOpenMenuChange: R });
                    }, [s.isAvailable, ek, s.isNonMusic, R, ep, Z]),
                    eS = { variant: O.Y.ALBUM, id: s.id, title: s.title, path: eA, albumArtistName: s.artistName, albumArtistId: s.artistId };
                return (0, r.jsxs)(u.W1, {
                    isMobile: Z,
                    offsetOptions: 10,
                    open: $,
                    onOpenChange: R,
                    ariaLabel: ec({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: G,
                    containerProps: { 'data-test-id': o.Kq.album.ALBUM_CONTEXT_MENU },
                    ...J,
                    children: [
                        Z && (0, r.jsx)(F.C, { getDescriptionTexts: s.getDescriptionTexts, entityId: s.id }),
                        ed && (0, r.jsx)(b.d, { entityVariant: E.D.ARTIST, adminUrl: ex }),
                        eN,
                        ey,
                        ej,
                        eT,
                        P,
                        eo && (0, r.jsx)(z, { onClick: eh, isFinished: s.listeningFinished }),
                        (0, r.jsx)(D.H, { shareLink: ev, entityMeta: eS }),
                    ],
                });
            });
        },
        22492: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        24170: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Q });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                l = i(60900),
                o = i(16172),
                d = i(21732),
                c = i(71483),
                u = i(64605),
                _ = i(91027),
                m = i(6752),
                p = i(14934),
                h = i(82586),
                v = i(86269),
                A = i(71926),
                x = i(34883),
                C = i(7462),
                b = i(63363),
                g = i(91253),
                k = i(41677),
                f = i(73749),
                N = i(71735),
                y = i(47745),
                j = i(2969),
                T = i(54391),
                S = i(23352),
                L = i(72396),
                E = i(5537),
                I = i(67732),
                O = i(83560),
                M = i(84062),
                w = i(28999),
                P = i(90169),
                R = i(57594),
                z = i(32156),
                B = i(61376),
                U = i(11323),
                D = i(13798),
                K = i(92744),
                H = i(61258),
                W = i(10180),
                F = i(90326),
                V = i(29268),
                $ = i(34925),
                G = i(77712);
            let Y = { mainAxis: -26, alignmentAxis: -16 },
                J = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var X = i(21105),
                q = i(89638),
                Z = i.n(q);
            let Q = (0, a.PA)((e) => {
                let {
                        className: t,
                        children: i,
                        album: a,
                        contentLinesCount: q,
                        withLikesCount: Q,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: ei = !0,
                        releaseDateFormatter: er = O.s,
                    } = e,
                    { ref: es, intersectionPropertyId: ea } = (0, S.n)(),
                    {
                        user: en,
                        trailer: el,
                        settings: { isMobile: eo },
                        albumCPA: { isPlusCPAEnabled: ed },
                        paywall: { modal: ec },
                    } = (0, R.g)(),
                    { from: eu, utmLink: e_ } = (0, L.f)({ contextId: a.id, contextType: c.K.Album, utmForPageIds: a.artistIds }),
                    { formatMessage: em, formatDate: ep } = (0, l.A)(),
                    { sendLikeSearchFeedback: eh, sendNavigateSearchFeedback: ev, sendPlaySearchFeedback: eA } = (0, w.z)(),
                    [ex, eC] = (0, n.useState)(!1),
                    [eb, eg] = (0, n.useState)(!1),
                    [ek, ef] = (0, n.useState)(!1),
                    eN = (0, y.N)(),
                    ey = (0, j.b)(),
                    ej = (0, b.K)(a),
                    eT = (0, g.A)(a),
                    eS = (0, M.Z)(a.url),
                    [eL, eE] = (0, n.useState)(!1),
                    eI = (0, T.F)(),
                    [eO, eM] = (0, n.useState)(!1),
                    ew = (0, N.P)(),
                    { pageAlbumId: eP } = (0, I.T)(),
                    eR = ed({ pageAlbumId: eP, albumId: a.id, isNonMusic: a.isNonMusic }),
                    ez = (0, E.N)(),
                    eB = a.isAvailableOnlyForPlus && !a.isUnsafeLegal && !a.isLegalRejected,
                    eU = eB && !eo,
                    eD = a.isAvailable || eU || a.isAudiobook,
                    eK = (0, _.c)((e) => {
                        if ((e.stopPropagation(), ew())) return void e.preventDefault();
                        el.openAlbumTrailer(a.id), eI(o.ky.Album, String(a.id));
                    }),
                    eH = a.type === u._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eW = a.releaseDate ? ep(a.releaseDate, er()) : void 0,
                    eF = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eW ? eW : a.year, eH]),
                    eV = (0, C.r)(a.type),
                    e$ = (0, n.useMemo)(() => {
                        var e;
                        let t = a.isLiked ? em({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eV, ' ')
                            .concat(a.title, ' ')
                            .concat(null != (e = a.version) ? e : '', ' ')
                            .concat(t);
                    }, [eV, em, a.title, a.isLiked, a.version]),
                    { isPlaying: eG, togglePlay: eY } = (0, P.D)({
                        playContextParams: { contextData: { type: c.K.Album, meta: { id: a.id }, from: eu, utmLink: e_ }, loadContextMeta: !0 },
                    }),
                    eJ = (0, x.c)({ album: a, callback: eS }),
                    eX = (0, x.c)({ album: a, callback: eY }),
                    eq = (0, _.c)((e) => {
                        eN({ to: o.QT.AlbumScreen }), null == ev || ev(), eJ(e);
                    }),
                    eZ = (0, _.c)(() => {
                        if (!ew()) {
                            if (ez) return void ec.open();
                            eb || eG || (eg(!0), null == eA || eA()), eX(), ey(!eG);
                        }
                    }),
                    eQ = (0, _.c)(() => {
                        ex || a.isLiked || (eC(!0), null == eh || eh()), ej();
                    }),
                    e0 = (0, _.c)((e) => {
                        ef(e), eE(e);
                    }),
                    e2 = (0, n.useMemo)(() => {
                        var e;
                        return (0, r.jsxs)(A.HL, {
                            className: (0, s.$)(Z().title, { [Z().title_withVersion]: a.version, [Z().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'data-test-id': d.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, r.jsx)(H.N, {
                                    'aria-label': ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                                    className: Z().titleLink,
                                    href: a.url,
                                    onClick: eq,
                                    'data-test-id': d.Kq.album.ALBUM_TITLE_LINK,
                                    children: a.title,
                                }),
                                a.version &&
                                    (0, r.jsx)(A.HL, {
                                        className: Z().version,
                                        variant: 'span',
                                        'data-test-id': d.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(a.version),
                                    }),
                            ],
                        });
                    }, [a.title, a.url, a.version, eq, ee]),
                    e7 = (0, n.useMemo)(() => {
                        var e;
                        return (0, r.jsx)(H.N, { href: a.url, onClick: eq, children: ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : '') });
                    }, [a.title, a.url, a.version, eq]),
                    e1 = (0, n.useMemo)(() => {
                        var e;
                        if (null == a || null == (e = a.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                $.n,
                                {
                                    children: (0, r.jsx)(
                                        V.k,
                                        { className: (0, s.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eK },
                                        a.getKey('TrailerButton'),
                                    ),
                                },
                                a.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [a, eK]),
                    e6 = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                X.x,
                                {
                                    album: a,
                                    onOpenChange: e0,
                                    open: ek,
                                    className: (0, s.$)(Z().menuButton, Z().control),
                                    icon: (0, r.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: G.z.CARD,
                                    'data-test-id': d.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                a.getKey('AlbumContextMenu'),
                            ),
                        [a, e0, ek],
                    ),
                    e5 = (0, n.useCallback)(
                        () =>
                            (0, r.jsx)(
                                F.D,
                                {
                                    className: (0, s.$)(Z().playButton, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eZ,
                                    isPlaying: eG,
                                    disabled: eU,
                                },
                                a.getKey('PlayButton'),
                            ),
                        [eU, a, eG, eZ],
                    ),
                    e3 = (0, n.useMemo)(
                        () =>
                            eU
                                ? (0, r.jsx)(z.S, {
                                      className: Z().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eO,
                                      onOpenChange: eM,
                                      textVariant: 'album',
                                      albumTextVariant: a.type,
                                      arrowProps: J,
                                      offsetOptions: Y,
                                      renderChildren: e5,
                                  })
                                : e5(),
                        [eU, eO, eM, em, e5, a.type],
                    ),
                    e9 = (0, m.L)(() => {
                        if (eU) return;
                        let e = !eR && !en.isAuthorized;
                        return (0, r.jsx)(
                            K.c,
                            {
                                className: (0, s.$)(Z().likeButton, Z().control),
                                isLiked: a.isLiked,
                                onClick: eQ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            a.getKey('LikeButton'),
                        );
                    }),
                    e8 = (0, n.useMemo)(() => {
                        if (!eU)
                            return (0, r.jsx)(
                                W.O,
                                { onClick: eT, isPinned: a.isPinned, className: (0, s.$)(Z().pinButton, Z().control), withRipple: !1, isDisabled: eU },
                                a.getKey('PinButton'),
                            );
                    }, [a, eU, eT]),
                    e4 = (0, n.useMemo)(() => {
                        if (a.isAvailable || eU)
                            return (0, r.jsx)(p.hg, {
                                isVisible: ek || eL || eO,
                                className: Z().controls,
                                playControl: e3,
                                likeControl: e9,
                                menuControl: e6,
                                pinControl: e8,
                                trailerControl: e1,
                            });
                    }, [a, ek, eL, e6, e1, eO, e3, e9, e8, eU]),
                    te = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(v.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': d.Kq.album.ALBUM_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eq,
                                    children: [
                                        (0, r.jsx)(U.B, {
                                            className: Z().image,
                                            src: a.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: e$,
                                            withAvatarReplace: !0,
                                            isAvailable: eD,
                                            'aria-hidden': !0,
                                        }),
                                        eB && (0, r.jsx)(h.I, { variant: 'plusBadge', className: Z().plusBadge }),
                                        e4,
                                    ],
                                }),
                            }),
                        [eq, a.coverUri, eD, e$, e4, eB],
                    );
                return (0, r.jsxs)(p.MN, {
                    ref: es,
                    className: (0, s.$)(Z().root, { [Z().root_withChart]: ee }, t),
                    'aria-label': e$,
                    explicitMarkComponent:
                        a.explicitDisclaimer &&
                        (0, r.jsx)(
                            D.N,
                            { className: Z().explicitMark, getDescriptionTexts: a.getDescriptionTexts, variant: a.explicitDisclaimer },
                            a.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e2,
                    srTitle: e7,
                    'data-intersection-property-id': ea,
                    contentLinesCount: q,
                    view: te,
                    description:
                        ei &&
                        (0, r.jsx)(
                            k.i,
                            { className: Z().artists, artists: a.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                            a.getKey('description'),
                        ),
                    chart:
                        ee &&
                        a.chart &&
                        (0, r.jsx)(f.t, { withIcon: !0, className: Z().chart, position: a.chart.position, progress: a.chart.progress }, a.getKey('chart')),
                    'data-test-id': d.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eF &&
                            (0, r.jsx)(A.HL, { className: Z().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eF }),
                        Q &&
                            !!a.actualLikesCount &&
                            (0, r.jsx)(B.x, {
                                className: Z().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: a.actualLikesCount }),
                                likesCount: a.actualLikesCount,
                                isLiked: a.isLiked,
                                handleLikeClick: ej,
                            }),
                        i,
                    ],
                });
            });
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                s = i(55178),
                a = i(60900),
                n = i(21732),
                l = i(63423),
                o = i(82586),
                d = i(59576);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: s,
                            radius: c,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: A,
                            children: x,
                        } = e,
                        { formatMessage: C } = (0, a.A)(),
                        b = C({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: c,
                        size: s,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: m,
                        ref: v,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': d.N,
                        style: A,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
        },
        30542: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var r = i(60900),
                s = i(64605);
            let a = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                if (e)
                    switch (t) {
                        case s._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case s._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case s._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case s._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        34883: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            var r = i(19383);
            let s = (e) => {
                let { album: t, callback: i, shouldHistoryBack: s } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(32290),
                s = i(60900),
                a = i(70280);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, s.A)();
                return (0, r.jsx)(a.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41566: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(32290),
                s = i(96103),
                a = i(21732),
                n = i(82586),
                l = i(19740),
                o = i(30542),
                d = i(57594);
            let c = (0, s.PA)((e) => {
                let { isLiked: t, onClick: i, className: s, albumType: c, disabled: u } = e,
                    { user: _ } = (0, d.g)(),
                    m = t ? 'liked' : 'like',
                    p = (0, o.$)(t, c);
                return (0, r.jsx)(l.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { variant: m, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !_.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => D });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                l = i(70280),
                o = i(57594),
                d = i(53514),
                c = i(40484),
                u = i.n(c),
                _ = i(60900),
                m = i(16172),
                p = i(21732),
                h = i(91027),
                v = i(71926),
                A = i(47745),
                x = i(84062),
                C = i(28999),
                b = i(61258),
                g = i(19383);
            let k = (0, a.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: s,
                            captionClassName: a,
                            captionSize: n = 'm',
                            allArtistsTitle: d,
                            withCustomTooltip: c,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: k } = (0, _.A)(),
                        {
                            track: f,
                            settings: { isMobile: N },
                        } = (0, o.g)(),
                        y = (0, x.Z)(t.url),
                        { sendNavigateSearchFeedback: j } = (0, C.z)(),
                        T = (0, A.N)(),
                        S = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: s, fullscreenVideoPlayer: a } = (0, o.g)(),
                                { modal: n } = r;
                            return (0, g.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), s.modal.isOpened && s.modal.close();
                                },
                                onAfterHandled: () => {
                                    a.modal.isOpened && (a.modal.close(), a.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                N && f.isOpened && f.close(), y(e);
                            }),
                        }),
                        L = (0, h.c)((e) => {
                            T({ to: m.QT.ArtistScreen }), null == j || j(), S(e);
                        });
                    return i && !t.various
                        ? (0, r.jsx)(b.N, {
                              'aria-label': k({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: s,
                              href: t.url,
                              onClick: L,
                              title: c ? void 0 : d || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(l.m_, {
                                  enabled: !d && c,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: d || t.name,
                                  hoverSettings: u,
                                  children: (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: a, children: t.name }),
                              }),
                          })
                        : (0, r.jsx)(l.m_, {
                              enabled: !d && c,
                              offsetOptions: 4,
                              placement: 'top',
                              text: d || t.name,
                              hoverSettings: u,
                              children: (0, r.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: a,
                                  title: c ? void 0 : d || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                f = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: s,
                            captionClassName: a,
                            captionSize: l,
                            allArtistsTitle: o,
                            withCustomTooltip: d,
                            hoverSettings: c,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, r.jsx)(
                                                  k,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: s,
                                                      captionClassName: a,
                                                      captionSize: l,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: d,
                                                      hoverSettings: c,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, i, s, a, l, o, d, c]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(k, {
                                artist: t,
                                withLink: i,
                                linkClassName: s,
                                captionClassName: a,
                                captionSize: l,
                                allArtistsTitle: o,
                                withCustomTooltip: d,
                                hoverSettings: c,
                            }),
                            _,
                        ],
                    });
                };
            var N = i(39407),
                y = i(63887);
            let j = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(y.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(u().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(N.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var T = i(8055),
                S = i(6752),
                L = i(78035),
                E = i(78176),
                I = i(83598),
                O = i.n(I);
            let M = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: s } = e;
                    return (0, r.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: s, children: t }),
                            (0, r.jsx)(l.ZI, { className: O().tooltipContent, children: i.map((e) => (0, r.jsx)(E.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, r.jsx)(M, { forwardRef: t, ...e }));
            var P = i(19740),
                R = i(52598),
                z = i.n(R);
            let B = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, _.A)();
                    return (0, r.jsx)(P.W1, {
                        isMobile: !0,
                        className: (0, s.$)(z().root, z().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(E.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: s } = e,
                        [a, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, o.g)(),
                        c = (0, h.c)(() => {
                            let e = s.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, S.L)(() =>
                            (0, T.A)(() => {
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
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, r.jsx)(B, { artists: t, label: i }) : (0, r.jsx)(w, { artists: t, label: i })) : i;
                }),
                D = (0, a.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: a = ', ',
                            lineClamp: c,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: v,
                            captionSize: A,
                            variant: x = 'breakAll',
                            withAllArtistsTitle: C = !0,
                            withComposer: b = !0,
                            spoilerComponent: g,
                            withCustomTooltip: k = !0,
                            artistIdWithoutLink: N,
                            withContextMenu: y,
                        } = e,
                        T = (0, n.useRef)(null),
                        [S, L] = (0, n.useState)(!1),
                        E = C
                            ? i
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let i = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(a)
                            : '',
                        {
                            settings: { isMobile: I },
                        } = (0, o.g)(),
                        O = 1 === i.length,
                        M = (0, n.useCallback)((e) => {
                            L(!0), e.preventDefault();
                        }, []),
                        w = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                _ && !S && (e = i.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!b && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        f,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: v,
                                            withLink: m && t.id !== N && (((!I || O) && y) || !y),
                                            captionSize: A,
                                            allArtistsTitle: E,
                                            withCustomTooltip: k,
                                            hoverSettings: d.V,
                                            shouldUseSeparator: !!a,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([a, i]) : [i];
                                }, [])
                            );
                        }, [i, _, S, b, I, O, y, h, v, m, N, A, E, k, a]),
                        P = (0, n.useMemo)(() => {
                            if (!S && _ && _ < i.length) {
                                let e = i.length - _;
                                return (0, n.isValidElement)(g) ? g : (0, r.jsx)(j, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: M });
                            }
                        }, [i.length, M, S, p, g, _]),
                        R = (0, n.useMemo)(() => {
                            if (c) return { WebkitLineClamp: c };
                        }, [c]),
                        z = (0, r.jsx)(l.m_, {
                            referenceRef: T,
                            enabled: !!(C && E) && k && !y && !I,
                            offsetOptions: 4,
                            placement: 'top',
                            text: E,
                            hoverSettings: d.V,
                            children: (0, r.jsxs)('div', {
                                style: R,
                                className: (0, s.$)(u().root, u()['root_variant_'.concat(x)], { [u().root_clamp]: c && c > 0 }, { [u().ellipsis]: !c }, t),
                                title: C && E && !k && !y ? E : void 0,
                                children: [w, P],
                            }),
                        });
                    return y ? (0, r.jsx)(U, { labelRef: T, artists: i, label: z }) : z;
                });
        },
        47977: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'Chart_root__ODed_',
                position: 'Chart_position__7UNY9',
                position_disliked: 'Chart_position_disliked__HzjC7',
                position_disabled: 'Chart_position_disabled__poZzD',
                progress: 'Chart_progress__sGj4s',
                progress_up: 'Chart_progress_up__y083c',
                progress_same: 'Chart_progress_same__Cnbdb',
                progress_down: 'Chart_progress_down__lv_ae',
                progress_crown: 'Chart_progress_crown__o__Zm',
                progress_new: 'Chart_progress_new__7DobI',
                progress_disliked: 'Chart_progress_disliked__maVAk',
                progress_disabled: 'Chart_progress_disabled__JoFqG',
                positionShimmer: 'Chart_positionShimmer__6Abak',
            };
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        56008: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(55178).createContext)({ pageAlbumId: void 0 });
        },
        60244: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var r = i(32290),
                s = i(21732),
                a = i(70280),
                n = i(71926),
                l = i(48736),
                o = i.n(l);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: l, placement: c = 'top', children: u } = e;
                    return (0, r.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, r.jsx)(a.ZI, {
                                className: o().root,
                                'data-test-id': s.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var r = i(32290),
                s = i(63618),
                a = i(60900),
                n = i(21732),
                l = i(63423),
                o = i(82586),
                d = i(71926),
                c = i(22492),
                u = i.n(c);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: c, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, a.A)();
                return (0, r.jsx)(l.$, {
                    className: (0, s.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, r.jsx)(d.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(c) }),
                });
            };
        },
        63363: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var r = i(32290),
                s = i(60900),
                a = i(91027),
                n = i(67732),
                l = i(45477),
                o = i(75582),
                d = i(57594),
                c = i(90357),
                u = i(92708),
                _ = i(55178),
                m = i(63380),
                p = i(96103),
                h = i(97755),
                v = i(79238);
            let A = (0, p.PA)((e) => {
                    let { album: t, closeToast: i, withLink: s } = e,
                        a = (0, v.b)(t);
                    return (0, r.jsx)(h.O, {
                        closeToast: i,
                        entityVariant: a,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: s,
                    });
                }),
                x = (e) => {
                    let {
                            user: t,
                            paywall: i,
                            albumCPA: { isPlusCPAEnabled: p },
                        } = (0, d.g)(),
                        { formatMessage: h } = (0, s.A)(),
                        { notify: v } = (0, o.l)(),
                        x = (() => {
                            let { notify: e } = (0, o.l)(),
                                [t, i] = (0, _.useState)(!1),
                                { formatMessage: n } = (0, s.A)();
                            return (0, a.c)(async (s) => {
                                let { album: a, withLink: o = !0, withNotification: d = !0 } = s;
                                if (t) return;
                                let _ = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                                i(!0);
                                let p = await a.toggleLike();
                                i(!1),
                                    d &&
                                        (p === m.f.OK
                                            ? e((0, r.jsx)(A, { withLink: o, album: _ }), { containerId: l.u.INFO })
                                            : e((0, r.jsx)(c.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: C } = (0, n.T)();
                    return (0, a.c)(async () => {
                        if (e)
                            return p({ pageAlbumId: C, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void i.openModal()
                                : t.isAuthorized
                                  ? x({ album: e })
                                  : void v((0, r.jsx)(c.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    });
                };
        },
        67732: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var r = i(55178),
                s = i(56008);
            function a() {
                return (0, r.useContext)(s.H);
            }
        },
        73749: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                l = i(60900),
                o = i(21732),
                d = i(13365),
                c = i(82586),
                u = i(71926),
                _ = i(47977),
                m = i.n(_);
            let p = (0, a.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: a,
                        position: _,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: v,
                        className: A,
                        positionClassName: x,
                    } = e,
                    { formatMessage: C } = (0, l.A)(),
                    b = t || i,
                    g = (0, n.useMemo)(() => {
                        if (a) return 'crown';
                        switch (t) {
                            case d._.UP:
                                return 'chartUp';
                            case d._.DOWN:
                                return 'chartDown';
                            case d._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, a]),
                    k = (0, n.useMemo)(() => {
                        switch (t) {
                            case d._.UP:
                                return C({ id: 'entity-names.chart-up' });
                            case d._.DOWN:
                                return C({ id: 'entity-names.chart-down' });
                            case d._.NEW:
                                return C({ id: 'entity-names.chart-new' });
                            default:
                                return C({ id: 'entity-names.chart-same' });
                        }
                    }, [C, t]),
                    f = a ? 'crown' : t;
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(m().root, A),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, r.jsx)(u.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, s.$)(m().position, x, { [m().position_disliked]: h, [m().position_disabled]: v }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: _,
                        }),
                        b &&
                            (0, r.jsx)(c.I, {
                                variant: g,
                                size: 'xxs',
                                'aria-label': k,
                                className: (0, s.$)(m().progress, m()['progress_'.concat(f)], { [m().progress_disliked]: h, [m().progress_disabled]: v }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        77712: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var r = (function (e) {
                return (e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e;
            })({});
        },
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => C });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                l = i(16172),
                o = i(21732),
                d = i(91027),
                c = i(50162),
                u = i(19740),
                _ = i(86269),
                m = i(71926),
                p = i(47745),
                h = i(84062),
                v = i(57594),
                A = i(16510),
                x = i.n(A);
            let C = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    A = (0, h.Z)(t.url),
                    b = (0, p.N)(),
                    g = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(C, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    k = (0, d.c)((e) => {
                        a.modal.isOpened && a.modal.close(), b({ to: l.QT.ArtistScreen }), A(e);
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, s.$)(x().root, i),
                            onClick: k,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(_.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, r.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, r.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        79238: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var r = i(64605),
                s = i(97647);
            let a = (e) => {
                switch (e.type) {
                    case r._.PODCAST:
                        return s.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return s.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return s.c.FAIRY_TALE;
                    default:
                        return s.c.ALBUM;
                }
            };
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
        83560: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => o });
            var r = i(32290),
                s = i(63618),
                a = i(79856),
                n = i(80556),
                l = i.n(n);
            let o = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: n,
                    round: o,
                    'aria-label': d,
                    centered: c,
                    withInfo: u = !0,
                    linesCount: _ = 3,
                    withSubcover: m,
                    radius: p = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(l().root, i),
                    children: [
                        m && (0, r.jsx)(a.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, r.jsx)(a.W, { isActive: t, className: (0, s.$)(l().cover, n, { [l().cover_round]: o, [l().cover_withSubcover]: m }), radius: p }),
                        u &&
                            (0, r.jsx)('div', {
                                className: (0, s.$)(l().infoContainer, l()['content_linesCount_'.concat(_)], { [l().infoContainer_centered]: c }),
                                children: (0, r.jsx)(a.W, { isActive: t, className: (0, s.$)(l().title, { [l().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        89638: (e) => {
            e.exports = {
                root: 'AlbumCard_root__vP6k4',
                root_withChart: 'AlbumCard_root_withChart__J2SZv',
                artists: 'AlbumCard_artists__phKco',
                likeTextButton: 'AlbumCard_likeTextButton__2AQd9',
                controls: 'AlbumCard_controls__yuO40',
                cover: 'AlbumCard_cover__zXmdl',
                coverBlock: 'AlbumCard_coverBlock__94ZzY',
                image: 'AlbumCard_image__Mm55s',
                titleLink: 'AlbumCard_titleLink__u_WLG',
                title: 'AlbumCard_title__8YvhT',
                title_withVersion: 'AlbumCard_title_withVersion__NClAp',
                title_withChart: 'AlbumCard_title_withChart__PVOiJ',
                chart: 'AlbumCard_chart__gASdj',
                version: 'AlbumCard_version__h2aJz',
                artistLink: 'AlbumCard_artistLink__uPR_2',
                playButton: 'AlbumCard_playButton__mYK9R',
                likeButton: 'AlbumCard_likeButton__9B9C0',
                menuButton: 'AlbumCard_menuButton__pxkA6',
                pinButton: 'AlbumCard_pinButton__Mdi_E',
                trailerButton: 'AlbumCard_trailerButton__typHh',
                control: 'AlbumCard_control__qx7Xh',
                plusBadge: 'AlbumCard_plusBadge__i0FkP',
                buyPlusPopover: 'AlbumCard_buyPlusPopover__Kb79C',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91253: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => h });
            var r = i(32290),
                s = i(92708),
                a = i(55178),
                n = i(60900),
                l = i(45477),
                o = i(75582),
                d = i(57594),
                c = i(90357),
                u = i(96103),
                _ = i(8097),
                m = i(79238);
            let p = (0, u.PA)((e) => {
                    let { album: t, closeToast: i } = e,
                        s = (0, m.b)(t);
                    return (0, r.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: s,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                }),
                h = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, n.A)(),
                        [_, m] = (0, a.useState)(!1);
                    return (0, a.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (_) return;
                        let a = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                        m(!0);
                        let n = await e.togglePin();
                        m(!1),
                            n
                                ? i((0, r.jsx)(p, { album: a }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [e, u, i, _, t.isAuthorized]);
                };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92013: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { T: () => r }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(r || (r = {}));
        },
    },
]);
